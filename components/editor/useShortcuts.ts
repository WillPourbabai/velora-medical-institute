'use client'

import { useEffect } from 'react'
import { useEditor } from './EditorProvider'

/** Returns true if focus is currently in a text-editable element so we don't hijack typing */
function isTypingTarget(target: EventTarget | null): boolean {
  if (!(target instanceof HTMLElement)) return false
  const tag = target.tagName
  if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return true
  if (target.isContentEditable) return true
  return false
}

export function useEditorShortcuts() {
  const editor = useEditor()

  useEffect(() => {
    if (!editor) return

    function onKey(e: KeyboardEvent) {
      if (!editor) return

      const meta = e.metaKey || e.ctrlKey
      const shift = e.shiftKey
      const key = e.key.toLowerCase()

      // Undo / Redo — work even while typing in inputs (standard expectation)
      if (meta && key === 'z' && !shift) {
        e.preventDefault()
        editor.undo()
        return
      }
      if (meta && (key === 'y' || (key === 'z' && shift))) {
        e.preventDefault()
        editor.redo()
        return
      }

      // Below shortcuts skip when typing
      if (isTypingTarget(e.target)) return

      // Cmd/Ctrl + D → duplicate
      if (meta && key === 'd') {
        if (editor.selectedId) {
          e.preventDefault()
          editor.duplicate(editor.selectedId)
        }
        return
      }

      // Delete / Backspace → soft-remove selected
      if ((key === 'delete' || key === 'backspace') && editor.selectedId) {
        e.preventDefault()
        editor.remove(editor.selectedId)
        editor.select(null)
        return
      }

      // Esc → deselect
      if (key === 'escape') {
        editor.select(null)
        return
      }
    }

    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [editor])
}
