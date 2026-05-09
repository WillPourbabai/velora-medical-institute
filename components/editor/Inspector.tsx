'use client'

import { useEffect, useState } from 'react'
import { useEditor } from './EditorProvider'
import type { EditableStyle } from '@/lib/editor/types'

const TEXT_KINDS = new Set(['heading', 'paragraph', 'button'])
const BOX_KINDS = new Set(['button', 'card', 'section', 'container', 'image'])
const SIZE_KINDS = new Set(['card', 'section', 'image', 'container', 'button'])

const FONT_WEIGHTS = ['300', '400', '500', '600', '700', '800']
const ALIGN_OPTIONS: Array<EditableStyle['textAlign']> = ['left', 'center', 'right', 'justify']

interface FieldProps {
  label: string
  children: React.ReactNode
}
function Field({ label, children }: FieldProps) {
  return (
    <label className="flex flex-col gap-1.5 text-[11px]">
      <span className="text-[10px] tracking-[0.18em] uppercase text-neutral-500 font-semibold">
        {label}
      </span>
      {children}
    </label>
  )
}

function TextInput({
  value, onChange, placeholder, type = 'text',
}: {
  value: string
  onChange: (v: string) => void
  placeholder?: string
  type?: string
}) {
  return (
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full bg-white border border-neutral-300 rounded px-2 py-1.5 text-[12px] text-neutral-900 focus:outline-none focus:ring-2 focus:ring-brown/30 focus:border-brown"
    />
  )
}

function ColorInput({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  return (
    <div className="flex gap-1.5 items-center">
      <input
        type="color"
        value={value || '#000000'}
        onChange={(e) => onChange(e.target.value)}
        className="size-8 rounded border border-neutral-300 bg-white cursor-pointer shrink-0"
      />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="#000 or rgb()"
        className="flex-1 min-w-0 bg-white border border-neutral-300 rounded px-2 py-1.5 text-[12px] font-mono"
      />
    </div>
  )
}

/** Two inputs side-by-side, e.g. padding X/Y */
function PairInput({
  labels, values, onChange,
}: {
  labels: [string, string]
  values: [string, string]
  onChange: (idx: 0 | 1, v: string) => void
}) {
  return (
    <div className="grid grid-cols-2 gap-1.5">
      {[0, 1].map((i) => (
        <div key={i} className="flex items-center gap-1">
          <span className="text-[9px] text-neutral-400 w-3 shrink-0 uppercase">{labels[i]}</span>
          <input
            type="text"
            value={values[i]}
            onChange={(e) => onChange(i as 0 | 1, e.target.value)}
            className="flex-1 min-w-0 bg-white border border-neutral-300 rounded px-1.5 py-1 text-[11px] font-mono"
            placeholder="0"
          />
        </div>
      ))}
    </div>
  )
}

export function Inspector() {
  const editor = useEditor()
  if (!editor) return null

  const id = editor.selectedId
  if (!id) {
    return (
      <aside className="w-[280px] shrink-0 border-l border-neutral-200 bg-white text-neutral-900 flex flex-col h-full">
        <header className="px-4 py-3 border-b border-neutral-200">
          <p className="text-[10px] tracking-[0.22em] uppercase text-neutral-500 font-semibold">Inspector</p>
        </header>
        <div className="flex-1 grid place-items-center text-center px-6 text-[13px] text-neutral-500">
          Select an element on the page to edit its properties.
        </div>
      </aside>
    )
  }

  const meta = editor.getMeta(id)
  const override = editor.overrides[id]
  const style: EditableStyle = override?.style ?? {}
  const isText = meta && TEXT_KINDS.has(meta.kind)
  const isBox = meta && BOX_KINDS.has(meta.kind)
  const isSizable = meta && SIZE_KINDS.has(meta.kind)

  function patchStyle(patch: Partial<EditableStyle>) {
    editor!.patch(id!, { style: patch })
  }

  return (
    <aside className="w-[280px] shrink-0 border-l border-neutral-200 bg-white text-neutral-900 flex flex-col h-full overflow-hidden">
      <header className="px-4 py-3 border-b border-neutral-200">
        <p className="text-[10px] tracking-[0.22em] uppercase text-neutral-500 font-semibold">
          Inspector
        </p>
        <p className="mt-1 text-[13px] font-semibold text-neutral-900 capitalize">
          {meta?.kind ?? 'element'}
        </p>
        <p className="text-[10.5px] text-neutral-400 font-mono truncate">{id}</p>
      </header>

      <div className="flex-1 overflow-y-auto p-4 space-y-5">
        {isText && (
          <>
            <Field label="Text">
              <textarea
                value={override?.text ?? meta?.defaultText ?? ''}
                onChange={(e) => editor.patch(id, { text: e.target.value })}
                rows={3}
                className="w-full bg-white border border-neutral-300 rounded px-2 py-1.5 text-[12px] resize-y min-h-[60px] focus:outline-none focus:ring-2 focus:ring-brown/30 focus:border-brown"
              />
            </Field>
            <Field label="Font size">
              <TextInput
                value={style.fontSize ?? ''}
                onChange={(v) => patchStyle({ fontSize: v })}
                placeholder="e.g. 18px"
              />
            </Field>
            <Field label="Font weight">
              <select
                value={style.fontWeight ?? ''}
                onChange={(e) => patchStyle({ fontWeight: e.target.value })}
                className="w-full bg-white border border-neutral-300 rounded px-2 py-1.5 text-[12px]"
              >
                <option value="">— default —</option>
                {FONT_WEIGHTS.map((w) => (
                  <option key={w} value={w}>{w}</option>
                ))}
              </select>
            </Field>
            <Field label="Text color">
              <ColorInput
                value={style.color ?? ''}
                onChange={(v) => patchStyle({ color: v })}
              />
            </Field>
            <Field label="Alignment">
              <div className="flex gap-1.5">
                {ALIGN_OPTIONS.map((a) => (
                  <button
                    key={a}
                    type="button"
                    onClick={() => patchStyle({ textAlign: a })}
                    className={[
                      'flex-1 px-2 py-1.5 text-[10px] uppercase tracking-wide rounded border transition-colors',
                      style.textAlign === a
                        ? 'bg-brown text-cream border-brown'
                        : 'bg-white text-neutral-600 border-neutral-300 hover:border-neutral-400',
                    ].join(' ')}
                  >
                    {a}
                  </button>
                ))}
              </div>
            </Field>
          </>
        )}

        {isBox && (
          <>
            <Field label="Background color">
              <ColorInput
                value={style.backgroundColor ?? ''}
                onChange={(v) => patchStyle({ backgroundColor: v })}
              />
            </Field>
            <Field label="Border radius">
              <TextInput
                value={style.borderRadius ?? ''}
                onChange={(v) => patchStyle({ borderRadius: v })}
                placeholder="e.g. 8px"
              />
            </Field>
            <Field label="Padding (Y / X)">
              <PairInput
                labels={['Y', 'X']}
                values={[style.paddingTop ?? '', style.paddingLeft ?? '']}
                onChange={(i, v) => {
                  if (i === 0) patchStyle({ paddingTop: v, paddingBottom: v })
                  else patchStyle({ paddingLeft: v, paddingRight: v })
                }}
              />
            </Field>
            <Field label="Margin (Y / X)">
              <PairInput
                labels={['Y', 'X']}
                values={[style.marginTop ?? '', style.marginLeft ?? '']}
                onChange={(i, v) => {
                  if (i === 0) patchStyle({ marginTop: v, marginBottom: v })
                  else patchStyle({ marginLeft: v, marginRight: v })
                }}
              />
            </Field>
          </>
        )}

        {isSizable && (
          <Field label="Size (W / H)">
            <PairInput
              labels={['W', 'H']}
              values={[style.width ?? '', style.height ?? '']}
              onChange={(i, v) => {
                if (i === 0) patchStyle({ width: v })
                else patchStyle({ height: v })
              }}
            />
          </Field>
        )}

        {/* Always available: clear / delete */}
        <div className="pt-4 border-t border-neutral-200 flex flex-col gap-2">
          <button
            type="button"
            onClick={() => editor.patch(id, { style: {} })}
            className="text-[11px] tracking-[0.16em] uppercase font-semibold px-3 py-2 rounded border border-neutral-300 text-neutral-700 hover:bg-neutral-100 transition-colors"
          >
            Clear style overrides
          </button>
          <button
            type="button"
            onClick={() => {
              editor.remove(id)
              editor.select(null)
            }}
            className="text-[11px] tracking-[0.16em] uppercase font-semibold px-3 py-2 rounded border border-red-300 text-red-700 hover:bg-red-50 transition-colors"
          >
            Hide element
          </button>
        </div>
      </div>
    </aside>
  )
}
