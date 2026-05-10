/**
 * Server-rendered, plain renderer for the schema. No editor chrome,
 * no client JS, no selection state. Used by public pages.
 */

import { Fragment } from 'react'
import type { Block, PageSchema } from '@/lib/editor/schema'
import { getBlockDefinition } from '@/lib/editor/registry'

export function PublicPageRenderer({ schema }: { schema: PageSchema }) {
  return (
    <>
      {schema.blocks
        .filter((b) => b.props.hidden !== true)
        .map((b) => (
          <Fragment key={b.id}>{renderBlock(b)}</Fragment>
        ))}
    </>
  )
}

function renderBlock(block: Block) {
  const def = getBlockDefinition(block.type)
  if (!def) return null
  const children = block.children?.length
    ? block.children
        .filter((c) => c.props.hidden !== true)
        .map((c) => <Fragment key={c.id}>{renderBlock(c)}</Fragment>)
    : undefined
  return def.render(block.props, children, { isEditing: false })
}
