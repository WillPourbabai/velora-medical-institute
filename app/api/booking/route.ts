import { NextResponse } from 'next/server'

export const runtime = 'nodejs'

interface BookingPayload {
  type: 'weight' | 'hormone' | 'combined'
  isProgram: boolean
  date: string
  time: string
  contact: {
    firstName: string
    lastName: string
    email: string
    phone: string
    state: string
    notes?: string
    agree: boolean
  }
  submittedAt: string
}

export async function POST(req: Request) {
  let payload: BookingPayload
  try {
    payload = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  const { contact, type, date, time } = payload
  if (!contact?.firstName || !contact?.email || !contact?.state || !type || !date || !time || !contact.agree) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  console.log('[velora] booking request', {
    type,
    isProgram: payload.isProgram,
    date,
    time,
    contact: { name: `${contact.firstName} ${contact.lastName}`, email: contact.email, state: contact.state },
    submittedAt: payload.submittedAt,
  })

  return NextResponse.json({ ok: true, requestId: `req_${Date.now().toString(36)}` })
}
