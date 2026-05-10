/**
 * Server-only helpers for loading schemas from disk in RSC.
 * Do not import in client components.
 */

import { promises as fs } from 'fs'
import path from 'path'
import type { PageSchema } from './schema'

const PAGES_DIR = path.join(process.cwd(), 'data', 'pages')

export async function loadPageSchema(slug: string): Promise<PageSchema | null> {
  const safe = slug.replace(/[^a-z0-9-]/gi, '')
  if (!safe) return null
  const file = path.join(PAGES_DIR, `${safe}.json`)
  try {
    const raw = await fs.readFile(file, 'utf8')
    const parsed = JSON.parse(raw) as PageSchema
    if (parsed && Array.isArray(parsed.blocks)) return parsed
    return null
  } catch {
    return null
  }
}
