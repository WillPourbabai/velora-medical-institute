'use client'

import { useMemo, useState } from 'react'
import { useSchema } from './SchemaProvider'
import { listBlockDefinitions, getBlockDefinition, type BlockDefinition } from '@/lib/editor/registry'
import { findBlock } from '@/lib/editor/schema'
import { Plus, Search } from 'lucide-react'

export function InserterPanel() {
  const ctx = useSchema()
  const [query, setQuery] = useState('')

  const grouped = useMemo(() => {
    const all = listBlockDefinitions()
    const filtered = query
      ? all.filter((d) => d.label.toLowerCase().includes(query.toLowerCase()))
      : all
    const by = new Map<string, BlockDefinition[]>()
    for (const d of filtered) {
      if (!by.has(d.category)) by.set(d.category, [])
      by.get(d.category)!.push(d)
    }
    return [...by.entries()]
  }, [query])

  if (!ctx) return null

  // Determine where new blocks go: into selected container, or root
  const selected = ctx.selectedId ? findBlock(ctx.schema, ctx.selectedId) : null
  const selectedDef = selected ? getBlockDefinition(selected.type) : null
  const insertParentId =
    selectedDef?.acceptsChildren ? selected!.id : null
  const insertTargetLabel =
    insertParentId ? `Inside ${selectedDef!.label}` : 'At end of page'

  function handleInsert(type: string) {
    ctx!.insertOfType(type, { parentId: insertParentId })
  }

  return (
    <aside className="w-[240px] shrink-0 border-r border-neutral-200 bg-white text-neutral-900 flex flex-col h-full overflow-hidden" data-editor-chrome>
      <header className="px-4 py-3 border-b border-neutral-200">
        <p className="text-[10px] tracking-[0.22em] uppercase text-neutral-500 font-semibold">
          Add Blocks
        </p>
        <p className="text-[10.5px] text-neutral-400 mt-1">{insertTargetLabel}</p>
        <div className="mt-2 relative">
          <Search className="size-3.5 text-neutral-400 absolute left-2 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search blocks…"
            className="w-full bg-white border border-neutral-300 rounded pl-7 pr-2 py-1.5 text-[12px] focus:outline-none focus:ring-2 focus:ring-brown/30 focus:border-brown"
          />
        </div>
      </header>

      <div className="flex-1 overflow-y-auto p-3 space-y-5">
        {grouped.map(([category, defs]) => (
          <section key={category}>
            <p className="text-[9.5px] tracking-[0.22em] uppercase text-neutral-400 font-semibold mb-2 px-1">
              {category}
            </p>
            <div className="space-y-1">
              {defs.map((def) => (
                <button
                  key={def.type}
                  type="button"
                  onClick={() => handleInsert(def.type)}
                  className="w-full text-left flex items-center gap-2 px-2.5 py-2 rounded hover:bg-neutral-100 group transition-colors"
                  title={`Add ${def.label}`}
                >
                  <span className="size-7 rounded bg-bone border border-line/60 grid place-items-center text-brown shrink-0">
                    <Plus className="size-3.5" />
                  </span>
                  <span className="flex-1 text-[12.5px] text-neutral-800 truncate">
                    {def.label}
                  </span>
                  <span className="text-[9px] uppercase tracking-wider text-neutral-400 group-hover:text-neutral-500">
                    {def.type}
                  </span>
                </button>
              ))}
            </div>
          </section>
        ))}
      </div>
    </aside>
  )
}
