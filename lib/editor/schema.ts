/**
 * Block schema for the visual builder.
 *
 * A page is a tree of blocks. Each block has:
 *   - a stable id
 *   - a type (key into the registry)
 *   - props (data the renderer reads)
 *   - children (optional — for container blocks)
 *
 * Editing operations mutate this tree; the renderer reads it.
 */

export type BlockProps = Record<string, unknown>

export interface Block {
  id: string
  type: string
  props: BlockProps
  children?: Block[]
}

export interface PageSchema {
  /** Top-level sections in order */
  blocks: Block[]
  /** Schema version — bump if the shape changes */
  version: 1
}

/** Crockford-ish short id, stable, no deps. */
export function newId(prefix = 'b'): string {
  const rand = Math.random().toString(36).slice(2, 9)
  return `${prefix}_${Date.now().toString(36)}_${rand}`
}

/** Deep clone a block (and assign fresh ids). Used for duplicate. */
export function cloneBlockWithFreshIds(block: Block): Block {
  return {
    ...block,
    id: newId(block.type),
    props: { ...block.props },
    children: block.children?.map(cloneBlockWithFreshIds),
  }
}

/* ------------------------------ tree helpers ------------------------------ */

interface Path {
  /** Path of indices from the root, e.g. [2, 0, 1] = third top block, first child, second grandchild */
  indices: number[]
}

export function findPath(schema: PageSchema, id: string): Path | null {
  function walk(blocks: Block[], trail: number[]): number[] | null {
    for (let i = 0; i < blocks.length; i++) {
      const b = blocks[i]!
      if (b.id === id) return [...trail, i]
      if (b.children) {
        const found = walk(b.children, [...trail, i])
        if (found) return found
      }
    }
    return null
  }
  const idx = walk(schema.blocks, [])
  return idx ? { indices: idx } : null
}

export function findBlock(schema: PageSchema, id: string): Block | null {
  function walk(blocks: Block[]): Block | null {
    for (const b of blocks) {
      if (b.id === id) return b
      if (b.children) {
        const f = walk(b.children)
        if (f) return f
      }
    }
    return null
  }
  return walk(schema.blocks)
}

function getParentArrayAtPath(
  schema: PageSchema,
  path: Path,
): { array: Block[]; index: number } | null {
  if (path.indices.length === 0) return null
  const indices = path.indices.slice(0, -1)
  let array = schema.blocks
  for (const i of indices) {
    const next = array[i]
    if (!next?.children) return null
    array = next.children
  }
  const index = path.indices[path.indices.length - 1]!
  return { array, index }
}

/** Update a block's props (or full block) at the given id. Returns a new schema. */
export function updateBlock(
  schema: PageSchema,
  id: string,
  patch: { props?: BlockProps; replace?: Partial<Block> },
): PageSchema {
  function walk(blocks: Block[]): Block[] {
    return blocks.map((b) => {
      if (b.id === id) {
        const next: Block = {
          ...b,
          ...(patch.replace ?? {}),
          props: patch.props ? { ...b.props, ...patch.props } : b.props,
        }
        return next
      }
      if (b.children) return { ...b, children: walk(b.children) }
      return b
    })
  }
  return { ...schema, blocks: walk(schema.blocks) }
}

/** Remove a block by id. */
export function removeBlock(schema: PageSchema, id: string): PageSchema {
  function walk(blocks: Block[]): Block[] {
    return blocks
      .filter((b) => b.id !== id)
      .map((b) => (b.children ? { ...b, children: walk(b.children) } : b))
  }
  return { ...schema, blocks: walk(schema.blocks) }
}

/** Duplicate a block, inserting the copy directly after the original. */
export function duplicateBlock(schema: PageSchema, id: string): { schema: PageSchema; newId?: string } {
  let newBlockId: string | undefined

  function walk(blocks: Block[]): Block[] {
    const out: Block[] = []
    for (const b of blocks) {
      out.push(b.children ? { ...b, children: walk(b.children) } : b)
      if (b.id === id) {
        const clone = cloneBlockWithFreshIds(b)
        out.push(clone)
        newBlockId = clone.id
      }
    }
    return out
  }
  return { schema: { ...schema, blocks: walk(schema.blocks) }, newId: newBlockId }
}

/** Insert a block at the top-level array at index. */
export function insertTopLevel(schema: PageSchema, block: Block, index: number): PageSchema {
  const next = [...schema.blocks]
  const i = Math.max(0, Math.min(index, next.length))
  next.splice(i, 0, block)
  return { ...schema, blocks: next }
}

/** Move a top-level section by id to a new index. */
export function moveTopLevel(schema: PageSchema, id: string, toIndex: number): PageSchema {
  const fromIndex = schema.blocks.findIndex((b) => b.id === id)
  if (fromIndex < 0) return schema
  const next = [...schema.blocks]
  const [item] = next.splice(fromIndex, 1)
  if (!item) return schema
  const insertAt = Math.max(0, Math.min(toIndex, next.length))
  next.splice(insertAt, 0, item)
  return { ...schema, blocks: next }
}

/** Toggle a block's `hidden` prop without removing it. */
export function toggleHidden(schema: PageSchema, id: string): PageSchema {
  return updateBlock(schema, id, {
    props: { hidden: !findBlock(schema, id)?.props.hidden },
  })
}

/* ---------- nested move helpers ---------- */

/** Returns the parent id (or null for top-level) and the index of the block. */
export function findParent(schema: PageSchema, id: string): { parentId: string | null; index: number } | null {
  function walk(blocks: Block[], parentId: string | null): { parentId: string | null; index: number } | null {
    for (let i = 0; i < blocks.length; i++) {
      const b = blocks[i]!
      if (b.id === id) return { parentId, index: i }
      if (b.children) {
        const r = walk(b.children, b.id)
        if (r) return r
      }
    }
    return null
  }
  return walk(schema.blocks, null)
}

/**
 * Move `id` to be at `toIndex` inside `toParentId` (null for top-level).
 * Cross-parent moves are supported. If toIndex is past the end, appends.
 */
export function moveBlock(
  schema: PageSchema,
  id: string,
  toParentId: string | null,
  toIndex: number,
): PageSchema {
  const found = findParent(schema, id)
  if (!found) return schema

  // Step 1: extract the block
  let extracted: Block | null = null
  function extract(blocks: Block[]): Block[] {
    return blocks.flatMap((b) => {
      if (b.id === id) {
        extracted = b
        return []
      }
      if (b.children) return [{ ...b, children: extract(b.children) }]
      return [b]
    })
  }
  const without = extract(schema.blocks)
  if (!extracted) return schema

  // Adjust toIndex if moving within the same parent and the source was earlier
  if (found.parentId === toParentId && found.index < toIndex) {
    toIndex -= 1
  }

  // Step 2: insert into the target
  function insert(blocks: Block[]): Block[] {
    if (toParentId === null) return blocks // handled at top level below
    return blocks.map((b) => {
      if (b.id === toParentId) {
        const arr = [...(b.children ?? [])]
        const i = Math.max(0, Math.min(toIndex, arr.length))
        arr.splice(i, 0, extracted!)
        return { ...b, children: arr }
      }
      if (b.children) return { ...b, children: insert(b.children) }
      return b
    })
  }

  if (toParentId === null) {
    const arr = [...without]
    const i = Math.max(0, Math.min(toIndex, arr.length))
    arr.splice(i, 0, extracted!)
    return { ...schema, blocks: arr }
  }
  return { ...schema, blocks: insert(without) }
}

/** Insert a block as a child of a parent at the given index. */
export function insertInto(
  schema: PageSchema,
  parentId: string | null,
  block: Block,
  index: number,
): PageSchema {
  if (parentId === null) return insertTopLevel(schema, block, index)
  function walk(blocks: Block[]): Block[] {
    return blocks.map((b) => {
      if (b.id === parentId) {
        const arr = [...(b.children ?? [])]
        const i = Math.max(0, Math.min(index, arr.length))
        arr.splice(i, 0, block)
        return { ...b, children: arr }
      }
      if (b.children) return { ...b, children: walk(b.children) }
      return b
    })
  }
  return { ...schema, blocks: walk(schema.blocks) }
}
