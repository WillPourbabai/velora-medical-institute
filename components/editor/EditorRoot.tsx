'use client'

import { useEffect, useState, type ReactNode } from 'react'
import { useSearchParams } from 'next/navigation'
import { EditorProvider, useEditor } from './EditorProvider'
import { Inspector } from './Inspector'
import { TopBar } from './TopBar'
import { useEditorShortcuts } from './useShortcuts'

/**
 * Mounts editor chrome around the live site when `?edit=1` is in the URL.
 * Otherwise renders children passthrough — visitors see nothing.
 */
export function EditorRoot({ children }: { children: ReactNode }) {
  const params = useSearchParams()
  const editParam = params.get('edit')
  const isEditing = editParam === '1' || editParam === 'true'

  if (!isEditing) {
    return <>{children}</>
  }

  return (
    <EditorProvider>
      <EditorChrome>{children}</EditorChrome>
    </EditorProvider>
  )
}

function EditorChrome({ children }: { children: ReactNode }) {
  const editor = useEditor()
  useEditorShortcuts()

  // Click-outside to deselect — listen on the canvas
  useEffect(() => {
    function onPageClick(e: MouseEvent) {
      if (!editor) return
      // If the click target is inside an Editable, the Editable itself
      // handles selection; we only deselect on chrome/empty clicks.
      const target = e.target as HTMLElement | null
      if (!target) return
      if (target.closest('[data-editor-id]')) return
      if (target.closest('[data-editor-chrome]')) return
      editor.select(null)
    }
    document.addEventListener('click', onPageClick)
    return () => document.removeEventListener('click', onPageClick)
  }, [editor])

  // Toggle preview mode with `e` key (mirrors the toolbar)
  useEffect(() => {
    if (!editor) return
    function onKey(e: KeyboardEvent) {
      if (!editor) return
      const target = e.target as HTMLElement | null
      if (target && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable)) return
      if (e.key === 'e' && !e.metaKey && !e.ctrlKey) {
        editor.setMode(editor.mode === 'preview' ? 'edit' : 'preview')
      }
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 's') {
        e.preventDefault()
        void editor.save()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [editor])

  if (!editor) return <>{children}</>

  const showChrome = editor.mode === 'edit'

  return (
    <div className="min-h-screen flex flex-col bg-neutral-100" data-editor-chrome>
      {showChrome && <TopBar />}
      <div className="flex-1 flex min-h-0">
        <main
          className="flex-1 min-w-0 overflow-y-auto bg-bone"
          // The canvas itself; clicking empty space deselects (handled in onPageClick)
          data-editor-canvas
        >
          {children}
          {showChrome && <SelectionOverlay />}
        </main>
        {showChrome && <Inspector />}
      </div>
    </div>
  )
}

/**
 * Floating quick-action toolbar pinned to the currently selected element.
 * Stays in sync with selection via DOM lookup.
 */
function SelectionOverlay() {
  const editor = useEditor()
  const [rect, setRect] = useState<DOMRect | null>(null)

  useEffect(() => {
    if (!editor || !editor.selectedId) {
      setRect(null)
      return
    }
    const el = document.querySelector<HTMLElement>(`[data-editor-id="${editor.selectedId}"]`)
    if (!el) {
      setRect(null)
      return
    }
    function update() {
      if (!el) return
      setRect(el.getBoundingClientRect())
    }
    update()
    const ro = new ResizeObserver(update)
    ro.observe(el)
    window.addEventListener('scroll', update, true)
    window.addEventListener('resize', update)
    return () => {
      ro.disconnect()
      window.removeEventListener('scroll', update, true)
      window.removeEventListener('resize', update)
    }
  }, [editor])

  if (!editor || !editor.selectedId || !rect) return null

  // Toolbar sits just above the element (or below if it would clip top)
  const top = rect.top < 56 ? rect.bottom + 8 : rect.top - 36
  const left = Math.max(8, Math.min(rect.left, window.innerWidth - 240))

  return (
    <div
      className="fixed z-50 bg-neutral-900 text-neutral-100 rounded-md shadow-lg flex items-center gap-1 px-1.5 py-1"
      style={{ top, left }}
      data-editor-chrome
    >
      <span className="text-[10px] tracking-[0.18em] uppercase font-semibold px-2 text-neutral-400 capitalize">
        {editor.getMeta(editor.selectedId)?.kind ?? 'element'}
      </span>
      <button
        type="button"
        onClick={() => editor.remove(editor.selectedId!)}
        className="px-2 py-1 text-[10px] tracking-[0.18em] uppercase rounded hover:bg-neutral-800 text-neutral-200"
        title="Hide (Delete)"
      >
        Hide
      </button>
      <button
        type="button"
        onClick={() => editor.select(null)}
        className="px-2 py-1 text-[10px] tracking-[0.18em] uppercase rounded hover:bg-neutral-800 text-neutral-200"
        title="Deselect (Esc)"
      >
        Done
      </button>
    </div>
  )
}
