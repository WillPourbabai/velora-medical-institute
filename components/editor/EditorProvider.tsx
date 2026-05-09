'use client'

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  useRef,
  type ReactNode,
} from 'react'
import type {
  EditorState,
  EditorAction,
  ElementOverride,
  OverrideMap,
  EditableMeta,
  EditableStyle,
} from '@/lib/editor/types'

const STORAGE_KEY = 'velora.editor.overrides.v1'
const HISTORY_LIMIT = 50

const initialState: EditorState = {
  active: false,
  selectedId: null,
  overrides: {},
  history: [{}],
  cursor: 0,
  mode: 'edit',
  dirty: false,
}

function pushHistory(state: EditorState, next: OverrideMap): EditorState {
  // Trim future and append
  const trimmed = state.history.slice(0, state.cursor + 1)
  const nextHistory = [...trimmed, next]
  const overflow = Math.max(0, nextHistory.length - HISTORY_LIMIT)
  const finalHistory = overflow ? nextHistory.slice(overflow) : nextHistory
  return {
    ...state,
    overrides: next,
    history: finalHistory,
    cursor: finalHistory.length - 1,
    dirty: true,
  }
}

function mergeOverride(
  current: ElementOverride | undefined,
  patch: Partial<ElementOverride>,
): ElementOverride {
  return {
    ...current,
    ...patch,
    style: patch.style
      ? { ...(current?.style ?? {}), ...patch.style }
      : current?.style,
  }
}

function reducer(state: EditorState, action: EditorAction): EditorState {
  switch (action.type) {
    case 'init':
      return {
        ...state,
        overrides: action.overrides,
        history: [action.overrides],
        cursor: 0,
        dirty: false,
      }
    case 'select':
      return { ...state, selectedId: action.id }
    case 'patch': {
      const next = {
        ...state.overrides,
        [action.id]: mergeOverride(state.overrides[action.id], action.override),
      }
      return action.history === false
        ? { ...state, overrides: next, dirty: true }
        : pushHistory(state, next)
    }
    case 'replaceStyle': {
      const next = {
        ...state.overrides,
        [action.id]: { ...state.overrides[action.id], style: action.style },
      }
      return action.history === false
        ? { ...state, overrides: next, dirty: true }
        : pushHistory(state, next)
    }
    case 'remove': {
      const next = {
        ...state.overrides,
        [action.id]: { ...state.overrides[action.id], hidden: true },
      }
      return pushHistory(state, next)
    }
    case 'duplicate': {
      // Pure-render duplication is non-trivial without DOM mutation; we noop
      // and rely on the inspector to surface the limitation. Wired to keep
      // the keyboard shortcut active for future work.
      return state
    }
    case 'undo': {
      if (state.cursor === 0) return state
      const cursor = state.cursor - 1
      return {
        ...state,
        overrides: state.history[cursor]!,
        cursor,
        dirty: true,
      }
    }
    case 'redo': {
      if (state.cursor >= state.history.length - 1) return state
      const cursor = state.cursor + 1
      return {
        ...state,
        overrides: state.history[cursor]!,
        cursor,
        dirty: true,
      }
    }
    case 'setMode':
      return { ...state, mode: action.mode }
    case 'markSaved':
      return { ...state, dirty: false }
    default:
      return state
  }
}

interface EditorContextValue extends EditorState {
  registerElement: (meta: EditableMeta) => void
  getMeta: (id: string) => EditableMeta | undefined
  select: (id: string | null) => void
  patch: (id: string, override: Partial<ElementOverride>, history?: boolean) => void
  setStyle: (id: string, style: EditableStyle, history?: boolean) => void
  remove: (id: string) => void
  duplicate: (id: string) => void
  undo: () => void
  redo: () => void
  setMode: (m: 'edit' | 'preview') => void
  save: () => Promise<void>
  reset: () => void
  canUndo: boolean
  canRedo: boolean
}

const EditorContext = createContext<EditorContextValue | null>(null)

export function useEditor() {
  return useContext(EditorContext)
}

/**
 * Returns the override for an element id or undefined.
 * Subscribes the calling component to override changes.
 */
export function useOverride(id: string): ElementOverride | undefined {
  const ctx = useContext(EditorContext)
  return ctx?.overrides[id]
}

interface EditorProviderProps {
  children: ReactNode
  initialOverrides?: OverrideMap
}

export function EditorProvider({ children, initialOverrides = {} }: EditorProviderProps) {
  const [state, dispatch] = useReducer(reducer, {
    ...initialState,
    active: true,
    overrides: initialOverrides,
    history: [initialOverrides],
  })

  // Element registry — meta about each editable on the page
  const registry = useRef<Map<string, EditableMeta>>(new Map())

  // Hydrate from localStorage on mount (client only)
  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY)
      if (stored) {
        const parsed = JSON.parse(stored) as OverrideMap
        dispatch({ type: 'init', overrides: parsed })
      }
    } catch {
      /* ignore corrupt storage */
    }
  }, [])

  // Persist to localStorage whenever overrides change
  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state.overrides))
    } catch {
      /* quota / private mode — silently noop */
    }
  }, [state.overrides])

  const registerElement = useCallback((meta: EditableMeta) => {
    registry.current.set(meta.id, meta)
  }, [])

  const value = useMemo<EditorContextValue>(
    () => ({
      ...state,
      registerElement,
      getMeta: (id) => registry.current.get(id),
      select: (id) => dispatch({ type: 'select', id }),
      patch: (id, override, history) => dispatch({ type: 'patch', id, override, history }),
      setStyle: (id, style, history) => dispatch({ type: 'replaceStyle', id, style, history }),
      remove: (id) => dispatch({ type: 'remove', id }),
      duplicate: (id) => dispatch({ type: 'duplicate', id }),
      undo: () => dispatch({ type: 'undo' }),
      redo: () => dispatch({ type: 'redo' }),
      setMode: (mode) => dispatch({ type: 'setMode', mode }),
      reset: () => dispatch({ type: 'init', overrides: {} }),
      save: async () => {
        await fetch('/api/editor/save', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ overrides: state.overrides }),
        })
        dispatch({ type: 'markSaved' })
      },
      canUndo: state.cursor > 0,
      canRedo: state.cursor < state.history.length - 1,
    }),
    [state, registerElement],
  )

  return <EditorContext.Provider value={value}>{children}</EditorContext.Provider>
}
