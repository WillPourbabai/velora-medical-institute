'use client'

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  type ReactNode,
} from 'react'
import {
  type Block,
  type BlockProps,
  type PageSchema,
  newId,
  updateBlock,
  removeBlock,
  duplicateBlock,
  insertTopLevel,
  insertInto,
  moveBlock,
  toggleHidden,
} from '@/lib/editor/schema'
import { newBlockOfType } from '@/lib/editor/registry'

const STORAGE_KEY = 'velora.editor.home.schema.v1'
const HISTORY_LIMIT = 50

interface State {
  schema: PageSchema
  selectedId: string | null
  mode: 'edit' | 'preview'
  history: PageSchema[]
  cursor: number
  dirty: boolean
}

type Action =
  | { type: 'load'; schema: PageSchema }
  | { type: 'select'; id: string | null }
  | { type: 'patchProps'; id: string; props: BlockProps }
  | { type: 'remove'; id: string }
  | { type: 'duplicate'; id: string }
  | { type: 'move'; id: string; toParentId: string | null; toIndex: number }
  | { type: 'insertAt'; block: Block; parentId: string | null; index: number }
  | { type: 'toggleHidden'; id: string }
  | { type: 'undo' }
  | { type: 'redo' }
  | { type: 'setMode'; mode: 'edit' | 'preview' }
  | { type: 'markSaved' }

function commit(state: State, schema: PageSchema): State {
  const trimmed = state.history.slice(0, state.cursor + 1)
  const next = [...trimmed, schema]
  const overflow = Math.max(0, next.length - HISTORY_LIMIT)
  const final = overflow ? next.slice(overflow) : next
  return {
    ...state,
    schema,
    history: final,
    cursor: final.length - 1,
    dirty: true,
  }
}

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'load':
      return {
        ...state,
        schema: action.schema,
        history: [action.schema],
        cursor: 0,
        dirty: false,
      }
    case 'select':
      return { ...state, selectedId: action.id }
    case 'patchProps':
      return commit(state, updateBlock(state.schema, action.id, { props: action.props }))
    case 'remove': {
      const next = removeBlock(state.schema, action.id)
      const cleared = state.selectedId === action.id ? null : state.selectedId
      return { ...commit(state, next), selectedId: cleared }
    }
    case 'duplicate': {
      const { schema, newId } = duplicateBlock(state.schema, action.id)
      const committed = commit(state, schema)
      return { ...committed, selectedId: newId ?? state.selectedId }
    }
    case 'move':
      return commit(state, moveBlock(state.schema, action.id, action.toParentId, action.toIndex))
    case 'insertAt': {
      const next =
        action.parentId === null
          ? insertTopLevel(state.schema, action.block, action.index)
          : insertInto(state.schema, action.parentId, action.block, action.index)
      const committed = commit(state, next)
      return { ...committed, selectedId: action.block.id }
    }
    case 'toggleHidden':
      return commit(state, toggleHidden(state.schema, action.id))
    case 'undo': {
      if (state.cursor === 0) return state
      const cursor = state.cursor - 1
      return { ...state, schema: state.history[cursor]!, cursor, dirty: true }
    }
    case 'redo': {
      if (state.cursor >= state.history.length - 1) return state
      const cursor = state.cursor + 1
      return { ...state, schema: state.history[cursor]!, cursor, dirty: true }
    }
    case 'setMode':
      return { ...state, mode: action.mode }
    case 'markSaved':
      return { ...state, dirty: false }
    default:
      return state
  }
}

interface SchemaContextValue {
  schema: PageSchema
  selectedId: string | null
  mode: 'edit' | 'preview'
  dirty: boolean
  canUndo: boolean
  canRedo: boolean
  select: (id: string | null) => void
  patchProps: (id: string, props: BlockProps) => void
  remove: (id: string) => void
  duplicate: (id: string) => void
  move: (id: string, toParentId: string | null, toIndex: number) => void
  insertOfType: (type: string, opts?: { parentId?: string | null; index?: number }) => void
  toggleHidden: (id: string) => void
  undo: () => void
  redo: () => void
  setMode: (m: 'edit' | 'preview') => void
  save: () => Promise<void>
  reset: () => void
}

const SchemaContext = createContext<SchemaContextValue | null>(null)
export function useSchema() {
  return useContext(SchemaContext)
}

export function SchemaProvider({
  children,
  initialSchema,
  pageSlug = 'home',
}: {
  children: ReactNode
  initialSchema: PageSchema
  pageSlug?: string
}) {
  const [state, dispatch] = useReducer(reducer, {
    schema: initialSchema,
    selectedId: null,
    mode: 'edit' as const,
    history: [initialSchema],
    cursor: 0,
    dirty: false,
  })

  // Hydrate from server (file) first, then localStorage as fallback
  useEffect(() => {
    let cancelled = false
    async function load() {
      try {
        const res = await fetch(`/api/editor/page/${pageSlug}`)
        if (!cancelled && res.ok) {
          const json = (await res.json()) as { schema?: PageSchema | null }
          if (json.schema && Array.isArray(json.schema.blocks)) {
            dispatch({ type: 'load', schema: json.schema })
            return
          }
        }
      } catch {
        /* fall through to localStorage */
      }
      try {
        const stored = window.localStorage.getItem(`${STORAGE_KEY}.${pageSlug}`)
        if (stored && !cancelled) {
          const parsed = JSON.parse(stored) as PageSchema
          if (parsed && Array.isArray(parsed.blocks)) {
            dispatch({ type: 'load', schema: parsed })
          }
        }
      } catch { /* ignore */ }
    }
    load()
    return () => { cancelled = true }
  }, [pageSlug])

  // Persist to localStorage on every change
  useEffect(() => {
    try {
      window.localStorage.setItem(
        `${STORAGE_KEY}.${pageSlug}`,
        JSON.stringify(state.schema),
      )
    } catch { /* ignore quota */ }
  }, [state.schema, pageSlug])

  const value = useMemo<SchemaContextValue>(
    () => ({
      schema: state.schema,
      selectedId: state.selectedId,
      mode: state.mode,
      dirty: state.dirty,
      canUndo: state.cursor > 0,
      canRedo: state.cursor < state.history.length - 1,
      select: (id) => dispatch({ type: 'select', id }),
      patchProps: (id, props) => dispatch({ type: 'patchProps', id, props }),
      remove: (id) => dispatch({ type: 'remove', id }),
      duplicate: (id) => dispatch({ type: 'duplicate', id }),
      move: (id, toParentId, toIndex) => dispatch({ type: 'move', id, toParentId, toIndex }),
      insertOfType: (type, opts) => {
        const block = newBlockOfType(type, () => newId(type))
        if (!block) return
        const parentId = opts?.parentId ?? null
        const index = opts?.index ?? Number.MAX_SAFE_INTEGER
        dispatch({ type: 'insertAt', block, parentId, index })
      },
      toggleHidden: (id) => dispatch({ type: 'toggleHidden', id }),
      undo: () => dispatch({ type: 'undo' }),
      redo: () => dispatch({ type: 'redo' }),
      setMode: (m) => dispatch({ type: 'setMode', mode: m }),
      reset: () => dispatch({ type: 'load', schema: initialSchema }),
      save: async () => {
        try {
          await fetch(`/api/editor/page/${pageSlug}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ schema: state.schema }),
          })
          dispatch({ type: 'markSaved' })
        } catch {
          /* surface elsewhere */
        }
      },
    }),
    [state, initialSchema, pageSlug],
  )

  return <SchemaContext.Provider value={value}>{children}</SchemaContext.Provider>
}

export const __SchemaTesting = { STORAGE_KEY }
