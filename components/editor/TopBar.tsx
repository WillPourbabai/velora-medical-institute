'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useEditor } from './EditorProvider'
import {
  Undo2,
  Redo2,
  Eye,
  EyeOff,
  Save,
  X,
  Loader2,
  Check,
} from 'lucide-react'

export function TopBar() {
  const router = useRouter()
  const editor = useEditor()
  const [saving, setSaving] = useState<'idle' | 'saving' | 'saved'>('idle')

  if (!editor) return null

  async function handleSave() {
    if (!editor) return
    setSaving('saving')
    try {
      await editor.save()
      setSaving('saved')
      setTimeout(() => setSaving('idle'), 1400)
    } catch {
      setSaving('idle')
    }
  }

  function exitEditor() {
    // Strip ?edit=1 from URL and reload as normal viewer
    const url = new URL(window.location.href)
    url.searchParams.delete('edit')
    router.push(url.pathname + (url.search || ''))
  }

  const isPreview = editor.mode === 'preview'

  return (
    <header className="h-12 shrink-0 bg-neutral-900 text-neutral-100 border-b border-neutral-800 flex items-center justify-between px-3 z-50">
      <div className="flex items-center gap-1">
        <span className="text-[11px] tracking-[0.24em] uppercase font-semibold mr-3 text-neutral-300">
          Velora · Editor
        </span>

        <ToolButton onClick={editor.undo} disabled={!editor.canUndo} title="Undo (⌘Z)">
          <Undo2 className="size-4" />
        </ToolButton>
        <ToolButton onClick={editor.redo} disabled={!editor.canRedo} title="Redo (⌘⇧Z)">
          <Redo2 className="size-4" />
        </ToolButton>
      </div>

      <div className="flex items-center gap-2">
        {editor.dirty && (
          <span className="text-[10px] tracking-[0.2em] uppercase text-amber-300">
            Unsaved
          </span>
        )}

        <ToolButton
          onClick={() => editor.setMode(isPreview ? 'edit' : 'preview')}
          title={isPreview ? 'Back to edit (E)' : 'Preview (E)'}
          variant="ghost"
        >
          {isPreview ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
          <span className="text-[11px] tracking-[0.18em] uppercase ml-1.5">
            {isPreview ? 'Edit' : 'Preview'}
          </span>
        </ToolButton>

        <ToolButton onClick={handleSave} variant="primary" disabled={saving !== 'idle'} title="Save (⌘S)">
          {saving === 'saving' ? (
            <Loader2 className="size-4 animate-spin" />
          ) : saving === 'saved' ? (
            <Check className="size-4" />
          ) : (
            <Save className="size-4" />
          )}
          <span className="text-[11px] tracking-[0.18em] uppercase ml-1.5">
            {saving === 'saved' ? 'Saved' : 'Save'}
          </span>
        </ToolButton>

        <ToolButton onClick={exitEditor} variant="ghost" title="Exit editor">
          <X className="size-4" />
          <span className="text-[11px] tracking-[0.18em] uppercase ml-1.5">Exit</span>
        </ToolButton>
      </div>
    </header>
  )
}

function ToolButton({
  children, onClick, disabled, title, variant = 'ghost',
}: {
  children: React.ReactNode
  onClick?: () => void
  disabled?: boolean
  title?: string
  variant?: 'ghost' | 'primary'
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      title={title}
      className={[
        'inline-flex items-center px-2.5 py-1.5 rounded text-neutral-100 transition-colors',
        variant === 'primary'
          ? 'bg-brown text-cream hover:bg-brown-deep disabled:opacity-50'
          : 'hover:bg-neutral-800 disabled:opacity-30 disabled:hover:bg-transparent',
      ].join(' ')}
    >
      {children}
    </button>
  )
}
