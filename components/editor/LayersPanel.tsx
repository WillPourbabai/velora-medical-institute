'use client'

import { useState } from 'react'
import { useSchema } from './SchemaProvider'
import { getBlockDefinition } from '@/lib/editor/registry'
import type { Block } from '@/lib/editor/schema'
import { ChevronRight, ChevronDown, EyeOff } from 'lucide-react'

/**
 * Tree view of the page schema. Click a row to select that block.
 * Helpful for navigating long pages without scrolling the canvas.
 */
export function LayersPanel() {
  const ctx = useSchema()
  if (!ctx) return null

  return (
    <div className="flex-1 overflow-y-auto px-2 py-2">
      {ctx.schema.blocks.map((b) => (
        <LayerRow key={b.id} block={b} depth={0} />
      ))}
      {ctx.schema.blocks.length === 0 && (
        <p className="text-[12px] text-neutral-400 text-center py-6">
          Empty page. Add a block →
        </p>
      )}
    </div>
  )
}

function LayerRow({ block, depth }: { block: Block; depth: number }) {
  const ctx = useSchema()
  const def = getBlockDefinition(block.type)
  const [open, setOpen] = useState(true)
  if (!ctx || !def) return null

  const hasChildren = (block.children?.length ?? 0) > 0
  const isSelected = ctx.selectedId === block.id
  const isHidden = block.props.hidden === true

  return (
    <>
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation()
          ctx.select(block.id)
          // scroll the block into view in the canvas
          requestAnimationFrame(() => {
            const el = document.querySelector(`[data-block-id="${block.id}"]`)
            if (el) (el as HTMLElement).scrollIntoView({ block: 'center', behavior: 'smooth' })
          })
        }}
        className={[
          'w-full text-left flex items-center gap-1 px-2 py-1.5 rounded text-[12px] transition-colors',
          isSelected
            ? 'bg-brown text-cream'
            : 'text-neutral-700 hover:bg-neutral-100',
        ].join(' ')}
        style={{ paddingLeft: `${8 + depth * 14}px` }}
      >
        {hasChildren ? (
          <span
            role="button"
            tabIndex={0}
            onClick={(e) => { e.stopPropagation(); setOpen(!open) }}
            className={isSelected ? 'text-cream' : 'text-neutral-400'}
          >
            {open ? <ChevronDown className="size-3" /> : <ChevronRight className="size-3" />}
          </span>
        ) : (
          <span className="w-3" aria-hidden />
        )}
        <span className={`flex-1 truncate ${isHidden ? 'opacity-50 line-through' : ''}`}>
          {def.label}
          {block.props.text || block.props.title || block.props.heading ? (
            <span className={`ml-2 ${isSelected ? 'text-cream/70' : 'text-neutral-400'}`}>
              · {String(block.props.text ?? block.props.title ?? block.props.heading).slice(0, 28)}
            </span>
          ) : null}
        </span>
        {isHidden && <EyeOff className="size-3" />}
      </button>
      {hasChildren && open && (
        <div>
          {block.children!.map((c) => (
            <LayerRow key={c.id} block={c} depth={depth + 1} />
          ))}
        </div>
      )}
    </>
  )
}
