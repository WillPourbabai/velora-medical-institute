'use client'

import {
  useEffect,
  useRef,
  useState,
  type DragEvent as ReactDragEvent,
  type ReactNode,
} from 'react'
import { useSchema } from './SchemaProvider'
import { getBlockDefinition } from '@/lib/editor/registry'
import type { Block } from '@/lib/editor/schema'
import {
  ArrowUp, ArrowDown, Copy, Trash2, Eye, EyeOff, GripVertical,
} from 'lucide-react'

const DRAG_TYPE = 'application/x-velora-block'
/** Block types whose primary `text`-like prop can be edited inline */
const INLINE_EDITABLE_PROP: Record<string, string | undefined> = {
  heading: 'text',
  text: 'text',
  button: 'text',
  faqItem: 'question',
  pillar: 'title',
  miniProgram: 'title',
  careStep: 'title',
  serviceCard: 'title',
  testimonial: 'quote',
  ctaPanel: 'heading',
  hero: 'heading',
  serviceGrid: 'heading',
  featureGrid: 'heading',
  faqGroup: 'heading',
  gallery: 'heading',
  featureItem: 'title',
  footerBlock: 'brand',
}

export function PageRenderer({ editMode = false }: { editMode?: boolean }) {
  const ctx = useSchema()
  if (!ctx) return null
  return (
    <>
      {ctx.schema.blocks.map((block, i) => (
        <BlockNode
          key={block.id}
          block={block}
          parentId={null}
          siblings={ctx.schema.blocks}
          index={i}
          editMode={editMode && ctx.mode === 'edit'}
        />
      ))}
    </>
  )
}

function BlockNode({
  block, parentId, siblings, index, editMode,
}: {
  block: Block
  parentId: string | null
  siblings: Block[]
  index: number
  editMode: boolean
}) {
  const ctx = useSchema()
  const def = getBlockDefinition(block.type)
  const isHidden = block.props.hidden === true

  if (!def) {
    return (
      <div className="bg-red-100 text-red-900 p-4 rounded text-[12px]">
        Unknown block type: <code>{block.type}</code>
      </div>
    )
  }

  if (isHidden && (!ctx || ctx.mode === 'preview')) return null

  const childNodes: ReactNode | undefined = block.children?.length
    ? block.children.map((c, i) => (
        <BlockNode
          key={c.id}
          block={c}
          parentId={block.id}
          siblings={block.children!}
          index={i}
          editMode={editMode}
        />
      ))
    : undefined

  const rendered = def.render(block.props, childNodes, { isEditing: editMode })

  if (!editMode) return <>{rendered}</>

  return (
    <BlockChrome
      block={block}
      parentId={parentId}
      siblings={siblings}
      index={index}
      isHidden={isHidden}
    >
      {rendered}
    </BlockChrome>
  )
}

function BlockChrome({
  block, parentId, siblings, index, isHidden, children,
}: {
  block: Block
  parentId: string | null
  siblings: Block[]
  index: number
  isHidden: boolean
  children: ReactNode
}) {
  const ctx = useSchema()
  const [over, setOver] = useState<'top' | 'bottom' | null>(null)
  const [inlineEditing, setInlineEditing] = useState(false)
  const inlineRef = useRef<HTMLDivElement | null>(null)
  const inlinePropKey = INLINE_EDITABLE_PROP[block.type]

  // Stop inline editing if selection moves to another block
  useEffect(() => {
    if (ctx?.selectedId !== block.id) setInlineEditing(false)
  }, [ctx?.selectedId, block.id])

  if (!ctx) return <>{children}</>

  const isSelected = ctx.selectedId === block.id

  function handleClick(e: React.MouseEvent) {
    e.stopPropagation()
    ctx!.select(block.id)
  }
  function handleDoubleClick(e: React.MouseEvent) {
    if (!inlinePropKey) return
    e.stopPropagation()
    e.preventDefault()
    ctx!.select(block.id)
    setInlineEditing(true)
    // Focus the first contenteditable target inside this block
    requestAnimationFrame(() => {
      const target = inlineRef.current?.querySelector<HTMLElement>('[data-inline-target="1"]')
      if (target) {
        target.focus()
        // Move caret to end
        const range = document.createRange()
        range.selectNodeContents(target)
        range.collapse(false)
        const sel = window.getSelection()
        sel?.removeAllRanges()
        sel?.addRange(range)
      }
    })
  }
  function commitInline() {
    if (!inlinePropKey || !inlineEditing) return
    const target = inlineRef.current?.querySelector<HTMLElement>('[data-inline-target="1"]')
    if (!target) return
    const text = target.innerText
    if (text !== String(block.props[inlinePropKey] ?? '')) {
      ctx!.patchProps(block.id, { [inlinePropKey]: text })
    }
    setInlineEditing(false)
  }

  /* ---------- drag-and-drop reorder (works for any depth, within same parent) ---------- */
  function onDragStart(e: ReactDragEvent) {
    e.stopPropagation()
    e.dataTransfer.effectAllowed = 'move'
    e.dataTransfer.setData(DRAG_TYPE, JSON.stringify({ id: block.id, parentId }))
  }
  function onDragOver(e: ReactDragEvent) {
    if (!e.dataTransfer.types.includes(DRAG_TYPE)) return
    e.preventDefault()
    e.stopPropagation()
    const r = (e.currentTarget as HTMLElement).getBoundingClientRect()
    const isTop = e.clientY - r.top < r.height / 2
    setOver(isTop ? 'top' : 'bottom')
  }
  function onDragLeave() { setOver(null) }
  function onDrop(e: ReactDragEvent) {
    setOver(null)
    const raw = e.dataTransfer.getData(DRAG_TYPE)
    if (!raw) return
    let payload: { id: string; parentId: string | null }
    try { payload = JSON.parse(raw) } catch { return }
    if (payload.id === block.id) return
    if (payload.parentId !== parentId) return // only same-parent reorder
    e.preventDefault()
    e.stopPropagation()
    const fromIndex = siblings.findIndex((b) => b.id === payload.id)
    if (fromIndex < 0) return
    const target = over === 'bottom' ? index + 1 : index
    ctx!.move(payload.id, parentId, target)
  }

  const wrapClasses = [
    'relative group',
    'transition-[outline-color] duration-100',
    isSelected
      ? 'outline outline-2 outline-offset-[3px] outline-brown'
      : 'outline outline-1 outline-offset-[3px] outline-transparent hover:outline-brown/40',
    isHidden && 'opacity-30',
    over === 'top' && 'before:content-[""] before:absolute before:left-0 before:right-0 before:-top-1 before:h-1 before:bg-brown before:rounded-full before:z-50',
    over === 'bottom' && 'after:content-[""] after:absolute after:left-0 after:right-0 after:-bottom-1 after:h-1 after:bg-brown after:rounded-full after:z-50',
  ].filter(Boolean).join(' ')

  return (
    <div
      ref={inlineRef}
      data-block-id={block.id}
      className={wrapClasses}
      onClick={handleClick}
      onDoubleClick={handleDoubleClick}
      draggable={!inlineEditing}
      onDragStart={onDragStart}
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
    >
      {/* When inline-editing a text prop, render an absolutely-positioned editable
          surface so user types over the block. We just toggle a flag; the runtime
          attaches contenteditable on the first matching node via effect below. */}
      <InlineTextEditor
        active={inlineEditing}
        onCommit={commitInline}
        onCancel={() => setInlineEditing(false)}
        rootRef={inlineRef}
      />
      {children}

      {/* Floating block toolbar */}
      <div
        className={[
          'pointer-events-none absolute z-40 top-1 right-1 flex items-center gap-1',
          isSelected ? 'opacity-100' : 'opacity-0 group-hover:opacity-100',
          'transition-opacity',
        ].join(' ')}
        data-editor-chrome
      >
        <div className="pointer-events-auto bg-neutral-900 text-neutral-100 rounded shadow-md flex items-center gap-0.5 px-1 py-1">
          <span className="px-2 text-[10px] tracking-[0.2em] uppercase font-semibold text-neutral-300">
            {block.type}
          </span>
          <ChromeButton title="Drag to reorder">
            <GripVertical className="size-3.5" />
          </ChromeButton>
          <ChromeButton
            title="Move up"
            onClick={(e) => {
              e.stopPropagation()
              ctx.move(block.id, parentId, Math.max(0, index - 1))
            }}
          >
            <ArrowUp className="size-3.5" />
          </ChromeButton>
          <ChromeButton
            title="Move down"
            onClick={(e) => {
              e.stopPropagation()
              ctx.move(block.id, parentId, index + 2)
            }}
          >
            <ArrowDown className="size-3.5" />
          </ChromeButton>
          <ChromeButton
            title="Duplicate"
            onClick={(e) => { e.stopPropagation(); ctx.duplicate(block.id) }}
          >
            <Copy className="size-3.5" />
          </ChromeButton>
          <ChromeButton
            title={isHidden ? 'Show' : 'Hide'}
            onClick={(e) => { e.stopPropagation(); ctx.toggleHidden(block.id) }}
          >
            {isHidden ? <Eye className="size-3.5" /> : <EyeOff className="size-3.5" />}
          </ChromeButton>
          <ChromeButton
            title="Delete"
            onClick={(e) => { e.stopPropagation(); ctx.remove(block.id) }}
          >
            <Trash2 className="size-3.5" />
          </ChromeButton>
        </div>
      </div>
    </div>
  )
}

function ChromeButton({
  children, ...rest
}: { children: ReactNode } & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type="button"
      className="inline-flex items-center justify-center size-6 rounded text-neutral-200 hover:bg-neutral-800 hover:text-white transition-colors"
      {...rest}
    >
      {children}
    </button>
  )
}

/**
 * Toggles contentEditable on the first text-bearing element inside the block.
 * Pure DOM manipulation (no re-render of children) so the rendered layout is
 * preserved while the user types directly into the canvas.
 */
function InlineTextEditor({
  active, onCommit, onCancel, rootRef,
}: {
  active: boolean
  onCommit: () => void
  onCancel: () => void
  rootRef: React.RefObject<HTMLDivElement | null>
}) {
  useEffect(() => {
    const root = rootRef.current
    if (!root) return
    if (!active) return

    // Find the first heading / paragraph / span / button label inside the block
    const target = (
      root.querySelector('h1, h2, h3, h4, p, blockquote, figcaption, summary, a > span, button > span')
    ) as HTMLElement | null
    if (!target) return
    target.dataset.inlineTarget = '1'
    target.contentEditable = 'true'
    target.style.outline = '2px dashed rgba(124,84,54,0.5)'
    target.style.outlineOffset = '2px'
    target.spellcheck = true

    function onKey(e: KeyboardEvent) {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault()
        target!.blur()
      }
      if (e.key === 'Escape') {
        e.preventDefault()
        target!.blur()
        onCancel()
      }
    }
    function onBlur() {
      onCommit()
    }
    target.addEventListener('keydown', onKey)
    target.addEventListener('blur', onBlur)

    return () => {
      target.removeEventListener('keydown', onKey)
      target.removeEventListener('blur', onBlur)
      target.contentEditable = 'false'
      delete target.dataset.inlineTarget
      target.style.outline = ''
      target.style.outlineOffset = ''
    }
  }, [active, rootRef, onCommit, onCancel])

  return null
}
