import { NextResponse } from 'next/server'
import { promises as fs } from 'fs'
import path from 'path'

const EDITS_PATH = path.join(process.cwd(), 'data', 'edits.json')

export async function POST(req: Request) {
  let body: unknown
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  const overrides = (body as { overrides?: unknown })?.overrides
  if (!overrides || typeof overrides !== 'object') {
    return NextResponse.json({ error: 'Missing overrides' }, { status: 400 })
  }

  try {
    await fs.mkdir(path.dirname(EDITS_PATH), { recursive: true })
    await fs.writeFile(EDITS_PATH, JSON.stringify(overrides, null, 2), 'utf8')
  } catch (err) {
    return NextResponse.json(
      { error: 'Could not write file', detail: String(err) },
      { status: 500 },
    )
  }

  return NextResponse.json({ ok: true })
}

export async function GET() {
  try {
    const raw = await fs.readFile(EDITS_PATH, 'utf8')
    return NextResponse.json({ overrides: JSON.parse(raw) })
  } catch {
    return NextResponse.json({ overrides: {} })
  }
}
