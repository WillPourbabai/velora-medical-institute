/**
 * Visual editor — type definitions.
 * Overrides are applied on top of the source-rendered defaults.
 * Editable wrappers stay in the DOM at all times; the editor only swaps
 * behavior + visuals based on `isEditing`.
 */

export type EditableKind =
  | 'heading'
  | 'paragraph'
  | 'button'
  | 'card'
  | 'section'
  | 'image'
  | 'container'

export interface EditableStyle {
  fontSize?: string
  fontWeight?: string
  color?: string
  backgroundColor?: string
  paddingTop?: string
  paddingRight?: string
  paddingBottom?: string
  paddingLeft?: string
  marginTop?: string
  marginRight?: string
  marginBottom?: string
  marginLeft?: string
  borderRadius?: string
  textAlign?: 'left' | 'center' | 'right' | 'justify'
  width?: string
  height?: string
  display?: string
}

export interface ElementOverride {
  /** Override the rendered text (only meaningful for text-bearing elements) */
  text?: string
  /** Inline style overrides applied via the `style` prop */
  style?: EditableStyle
  /** Soft delete — element renders nothing in edit mode (and persists as hidden) */
  hidden?: boolean
}

export type OverrideMap = Record<string, ElementOverride>

export interface EditorState {
  /** Whether the editor chrome is mounted/active */
  active: boolean
  /** Currently selected element id, or null */
  selectedId: string | null
  /** All overrides keyed by editable id */
  overrides: OverrideMap
  /** Snapshots of overrides for undo/redo */
  history: OverrideMap[]
  /** Pointer into history; history[cursor] === current overrides */
  cursor: number
  /** Edit-mode display: 'edit' shows chrome, 'preview' temporarily hides it */
  mode: 'edit' | 'preview'
  /** Whether overrides are dirty since last save */
  dirty: boolean
}

export type EditorAction =
  | { type: 'init'; overrides: OverrideMap }
  | { type: 'select'; id: string | null }
  | { type: 'patch'; id: string; override: Partial<ElementOverride>; history?: boolean }
  | { type: 'replaceStyle'; id: string; style: EditableStyle; history?: boolean }
  | { type: 'remove'; id: string }
  | { type: 'duplicate'; id: string }
  | { type: 'undo' }
  | { type: 'redo' }
  | { type: 'setMode'; mode: 'edit' | 'preview' }
  | { type: 'markSaved' }

export interface EditableMeta {
  id: string
  kind: EditableKind
  /** Default text snippet, captured for the inspector preview */
  defaultText?: string
}
