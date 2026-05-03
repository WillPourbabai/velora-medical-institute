import { NextResponse } from 'next/server'

export const runtime = 'nodejs'

interface ContactPayload {
  name: string
  email: string
  phone?: string
  topic: string
  message: string
  submittedAt: string
}

export async function POST(req: Request) {
  let payload: ContactPayload
  try {
    payload = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  if (!payload.name || !payload.email || !payload.message) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  // TODO: Wire up email/CRM delivery (e.g. Resend) once credentials are provided.
  console.log('[velora] contact form submission', {
    name: payload.name,
    email: payload.email,
    topic: payload.topic,
    submittedAt: payload.submittedAt,
  })

  return NextResponse.json({ ok: true })
}
