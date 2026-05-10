'use client'

import { useState } from 'react'
import { InserterPanel } from './InserterPanel'
import { LayersPanel } from './LayersPanel'
import { Plus, Layers } from 'lucide-react'

/**
 * Left sidebar with two tabs: Insert (block library) and Layers (page tree).
 */
export function LeftSidebar() {
  const [tab, setTab] = useState<'insert' | 'layers'>('insert')

  return (
    <aside
      className="w-[260px] shrink-0 border-r border-neutral-200 bg-white text-neutral-900 flex flex-col h-full overflow-hidden"
      data-editor-chrome
    >
      <div className="border-b border-neutral-200 px-2 py-2 flex items-center gap-1 shrink-0">
        <TabButton active={tab === 'insert'} onClick={() => setTab('insert')}>
          <Plus className="size-3.5" />
          <span>Insert</span>
        </TabButton>
        <TabButton active={tab === 'layers'} onClick={() => setTab('layers')}>
          <Layers className="size-3.5" />
          <span>Layers</span>
        </TabButton>
      </div>
      <div className="flex-1 min-h-0 flex flex-col">
        {tab === 'insert' ? <InserterPanel embedded /> : <LayersPanel />}
      </div>
    </aside>
  )
}

function TabButton({
  active, onClick, children,
}: {
  active: boolean
  onClick: () => void
  children: React.ReactNode
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        'flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded text-[11px] tracking-[0.16em] uppercase font-semibold transition-colors',
        active ? 'bg-neutral-900 text-white' : 'text-neutral-600 hover:bg-neutral-100',
      ].join(' ')}
    >
      {children}
    </button>
  )
}

