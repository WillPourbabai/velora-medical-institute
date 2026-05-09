'use client'

import {
  useEffect,
  useRef,
  type CSSProperties,
  type ReactNode,
  type MouseEvent as ReactMouseEvent,
  useMemo,
} from 'react'
import { useEditor, useOverride } from './EditorProvider'
import type { EditableKind, EditableStyle } from '@/lib/editor/types'
import { cn } from '@/lib/utils'

interface EditableProps {
  /** Stable, unique id — keep it stable across reloads so overrides persist */
  id: string
  kind: EditableKind
  /** When true, renders <span> instead of <div> (for inline text inside larger blocks) */
  inline?: boolean
  /** Optional default text content used by inspector preview (string children only) */
  defaultText?: string
  className?: string
  style?: CSSProperties
  children: ReactNode
}

/** Convert our EditableStyle (subset of CSSProperties with strings) into CSSProperties. */
function styleToCss(s?: EditableStyle): CSSProperties {
  if (!s) return {}
  const out: CSSProperties = {}
  if (s.fontSize) out.fontSize = s.fontSize
  if (s.fontWeight) out.fontWeight = s.fontWeight
  if (s.color) out.color = s.color
  if (s.backgroundColor) out.backgroundColor = s.backgroundColor
  if (s.paddingTop) out.paddingTop = s.paddingTop
  if (s.paddingRight) out.paddingRight = s.paddingRight
  if (s.paddingBottom) out.paddingBottom = s.paddingBottom
  if (s.paddingLeft) out.paddingLeft = s.paddingLeft
  if (s.marginTop) out.marginTop = s.marginTop
  if (s.marginRight) out.marginRight = s.marginRight
  if (s.marginBottom) out.marginBottom = s.marginBottom
  if (s.marginLeft) out.marginLeft = s.marginLeft
  if (s.borderRadius) out.borderRadius = s.borderRadius
  if (s.textAlign) out.textAlign = s.textAlign
  if (s.width) out.width = s.width
  if (s.height) out.height = s.height
  if (s.display) out.display = s.display
  return out
}

const TEXT_KINDS: EditableKind[] = ['heading', 'paragraph', 'button']

export function Editable({
  id,
  kind,
  inline = false,
  defaultText,
  className,
  style,
  children,
}: EditableProps) {
  const editor = useEditor()
  const override = useOverride(id)
  const ref = useRef<HTMLDivElement | HTMLSpanElement | null>(null)

  // Register meta on mount so the inspector can identify this element
  useEffect(() => {
    if (!editor) return
    editor.registerElement({ id, kind, defaultText })
  }, [editor, id, kind, defaultText])

  // Combine source style with override
  const mergedStyle = useMemo<CSSProperties>(
    () => ({ ...style, ...styleToCss(override?.style) }),
    [style, override?.style],
  )

  // If editor is not active, render plain wrapper — zero editor JS overhead
  if (!editor) {
    if (override?.hidden) return null
    const Plain = inline ? 'span' : 'div'
    return (
      <Plain className={className} style={mergedStyle}>
        {override?.text ?? children}
      </Plain>
    )
  }

  if (override?.hidden && editor.mode === 'preview') return null

  const isSelected = editor.selectedId === id
  const isPreview = editor.mode === 'preview'
  const isTextual = TEXT_KINDS.includes(kind)

  function handleClick(e: ReactMouseEvent) {
    if (!editor || isPreview) return
    e.preventDefault() // suppress link navigation while editing
    e.stopPropagation()
    editor.select(id)
  }

  function handleTextInput(e: ReactMouseEvent<HTMLElement> | React.FormEvent<HTMLElement>) {
    if (!editor) return
    const text = (e.currentTarget as HTMLElement).innerText
    editor.patch(id, { text }, false) // don't push to history on every keystroke
  }

  function handleTextBlur(e: React.FocusEvent<HTMLElement>) {
    if (!editor) return
    // Push a single history entry on blur
    const text = e.currentTarget.innerText
    editor.patch(id, { text }, true)
  }

  const editorClasses = cn(
    'relative outline-none transition-[box-shadow,outline] duration-100',
    isPreview && override?.hidden && 'opacity-30 ring-2 ring-dashed ring-red-400/50',
    !isPreview && [
      'cursor-pointer',
      'hover:outline hover:outline-2 hover:outline-offset-[2px] hover:outline-brown/40',
      isSelected && 'outline outline-2 outline-offset-[2px] outline-brown',
    ],
  )

  const Tag = inline ? 'span' : 'div'

  // Textual elements with override text → render the override; otherwise children
  const content = override?.text != null ? override.text : children

  // For textual elements in edit (not preview) AND selected, enable contenteditable
  const isTextEditing = isTextual && isSelected && !isPreview

  return (
    <Tag
      ref={ref as React.Ref<HTMLDivElement & HTMLSpanElement>}
      data-editor-id={id}
      data-editor-kind={kind}
      className={cn(className, editorClasses)}
      style={mergedStyle}
      onClick={handleClick}
      contentEditable={isTextEditing}
      suppressContentEditableWarning
      onInput={isTextEditing ? handleTextInput : undefined}
      onBlur={isTextEditing ? handleTextBlur : undefined}
      // Prevent dragging/selecting from breaking layout while editing
      onMouseDown={(e) => {
        if (isTextEditing) e.stopPropagation()
      }}
    >
      {content}
    </Tag>
  )
}
