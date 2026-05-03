'use client'

import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import { cn } from '@/lib/utils'

export interface FaqItem {
  q: string
  a: React.ReactNode
}

export function FaqAccordion({ items, defaultOpen = -1 }: { items: FaqItem[]; defaultOpen?: number }) {
  const [open, setOpen] = useState<number>(defaultOpen)
  return (
    <div className="divide-y divide-line border-y border-line">
      {items.map((item, i) => {
        const isOpen = open === i
        return (
          <div key={i}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? -1 : i)}
              className="w-full flex items-start justify-between gap-6 text-left py-6 group"
              aria-expanded={isOpen}
            >
              <span className={cn(
                'font-display text-[20px] md:text-[22px] leading-[1.25] tracking-[-0.005em] transition-colors',
                isOpen ? 'text-sage' : 'text-ink group-hover:text-sage',
              )}>
                {item.q}
              </span>
              <span className={cn(
                'shrink-0 mt-1.5 size-7 rounded-full flex items-center justify-center transition-colors',
                isOpen ? 'bg-sage text-cream' : 'bg-sage-soft text-sage group-hover:bg-sage group-hover:text-cream',
              )}>
                {isOpen ? <Minus className="size-3.5" /> : <Plus className="size-3.5" />}
              </span>
            </button>
            <div
              className={cn(
                'grid transition-all duration-300 ease-out',
                isOpen ? 'grid-rows-[1fr] opacity-100 pb-7' : 'grid-rows-[0fr] opacity-0',
              )}
            >
              <div className="overflow-hidden">
                <div className="text-[15px] leading-relaxed text-ink-soft max-w-prose pr-10">
                  {item.a}
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
