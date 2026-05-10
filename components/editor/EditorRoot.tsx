'use client'

import { useEffect, type ReactNode } from 'react'
import { useSearchParams, usePathname } from 'next/navigation'
import { SchemaProvider, useSchema } from './SchemaProvider'
import { TopBarV2 } from './TopBarV2'
import { InspectorV2 } from './InspectorV2'
import { InserterPanel } from './InserterPanel'
import { PageRenderer } from './PageRenderer'
import { getDefaultSchema, pathnameToSlug } from '@/lib/editor/initial-schemas'

/**
 * Mounts the schema-driven visual builder when `?edit=1` is in the URL.
 * - In production, also requires NEXT_PUBLIC_EDITOR_ENABLED=1 to gate access.
 * - Reads the current pathname → slug → loads that page's schema.
 * - When edit mode is off, renders children unchanged (zero overhead for visitors).
 */
export function EditorRoot({ children }: { children: ReactNode }) {
  const params = useSearchParams()
  const pathname = usePathname() || '/'
  const wantsEdit = params.get('edit') === '1' || params.get('edit') === 'true'

  const isDev = process.env.NODE_ENV !== 'production'
  const flagOn = process.env.NEXT_PUBLIC_EDITOR_ENABLED === '1'
  const editAllowed = isDev || flagOn

  if (!wantsEdit || !editAllowed) return <>{children}</>

  const slug = pathnameToSlug(pathname)
  const initialSchema = getDefaultSchema(slug)

  return (
    <SchemaProvider initialSchema={initialSchema} pageSlug={slug}>
      <Chrome />
    </SchemaProvider>
  )
}

function Chrome() {
  const ctx = useSchema()

  // Click outside any block deselects
  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (!ctx) return
      const t = e.target as HTMLElement | null
      if (!t) return
      if (t.closest('[data-block-id]')) return
      if (t.closest('[data-editor-chrome]')) return
      ctx.select(null)
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [ctx])

  // Keyboard shortcuts
  useEffect(() => {
    if (!ctx) return
    function onKey(e: KeyboardEvent) {
      if (!ctx) return
      const t = e.target as HTMLElement | null
      const typing =
        t && (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA' || t.isContentEditable)
      const meta = e.metaKey || e.ctrlKey
      const key = e.key.toLowerCase()

      if (meta && key === 'z' && !e.shiftKey) { e.preventDefault(); ctx.undo(); return }
      if (meta && (key === 'y' || (key === 'z' && e.shiftKey))) { e.preventDefault(); ctx.redo(); return }
      if (meta && key === 's') { e.preventDefault(); void ctx.save(); return }

      if (typing) return

      if (meta && key === 'd' && ctx.selectedId) { e.preventDefault(); ctx.duplicate(ctx.selectedId); return }
      if ((key === 'delete' || key === 'backspace') && ctx.selectedId) { e.preventDefault(); ctx.remove(ctx.selectedId); return }
      if (key === 'escape') { ctx.select(null); return }
      if (key === 'e' && !meta) { ctx.setMode(ctx.mode === 'preview' ? 'edit' : 'preview'); return }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [ctx])

  if (!ctx) return null
  const showChrome = ctx.mode === 'edit'

  return (
    <div className="min-h-screen flex flex-col bg-neutral-100" data-editor-chrome-root>
      {showChrome && <TopBarV2 />}
      <div className="flex-1 flex min-h-0">
        {showChrome && <InserterPanel />}
        <main
          className="flex-1 min-w-0 overflow-y-auto bg-bone"
          data-editor-canvas
        >
          <PageRenderer editMode />
        </main>
        {showChrome && <InspectorV2 />}
      </div>
    </div>
  )
}
