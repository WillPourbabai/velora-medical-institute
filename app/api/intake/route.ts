import { NextResponse } from 'next/server'

export const runtime = 'nodejs'

export async function POST(req: Request) {
  let payload: Record<string, unknown>
  try {
    payload = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  const patient = payload.patient as { fullName?: string; email?: string } | undefined
  const consents = payload.consents as Record<string, boolean> | undefined

  if (!patient?.fullName || !patient?.email || !payload.signatureName) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  if (consents && !Object.values(consents).every(Boolean)) {
    return NextResponse.json({ error: 'All consents must be acknowledged' }, { status: 400 })
  }

  console.log('[velora] intake submission', {
    name: patient.fullName,
    email: patient.email,
    submittedAt: payload.submittedAt,
  })

  return NextResponse.json({ ok: true, intakeId: `intake_${Date.now().toString(36)}` })
}
