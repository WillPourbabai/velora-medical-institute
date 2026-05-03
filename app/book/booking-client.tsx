'use client'

import { useEffect, useMemo, useState } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import { ArrowUpRight, ArrowLeft, Check, Activity, FlaskConical, Combine, Calendar, Clock, ShieldCheck, CreditCard } from 'lucide-react'
import { toast } from 'sonner'
import { cn } from '@/lib/utils'

type Visit = 'weight' | 'hormone' | 'combined'

interface ConsultOption {
  key: Visit
  title: string
  badge?: string
  description: string
  duration: string
  price: string
  bullets: string[]
  icon: React.ReactNode
}

const OPTIONS: ConsultOption[] = [
  {
    key: 'weight',
    title: 'Medical Weight Management',
    description: 'Comprehensive physician evaluation including medical history, metabolic assessment, and individualized treatment planning.',
    duration: '60 minutes · Telemedicine',
    price: '$295',
    icon: <Activity className="size-5" />,
    bullets: ['Metabolic and medical evaluation', 'Personalized treatment plan', 'Eligibility for GLP-1 / weight medications'],
  },
  {
    key: 'hormone',
    title: 'Hormone Therapy',
    description: 'Evaluation of symptoms, medical history, and laboratory strategy to guide personalized hormone care.',
    duration: '60 minutes · Telemedicine',
    price: '$295',
    icon: <FlaskConical className="size-5" />,
    bullets: ['Symptom and history evaluation', 'Laboratory strategy', 'Personalized hormone plan'],
  },
  {
    key: 'combined',
    title: 'Combined Metabolic & Hormone',
    badge: 'Most Comprehensive',
    description: 'Comprehensive evaluation addressing both weight management and hormone-related concerns within a single visit.',
    duration: '60 minutes · Telemedicine',
    price: '$295',
    icon: <Combine className="size-5" />,
    bullets: ['Integrated metabolic + hormone assessment', 'Coordinated treatment planning', 'Single-visit evaluation'],
  },
]

const STATES = [
  'AL','AK','AZ','AR','CA','CO','CT','DE','FL','GA','HI','ID','IL','IN','IA','KS','KY','LA','ME','MD',
  'MA','MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND','OH','OK','OR','PA','RI','SC',
  'SD','TN','TX','UT','VT','VA','WA','WV','WI','WY',
]

const TIMES = ['8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM']

export function BookingClient() {
  const search = useSearchParams()
  const router = useRouter()
  const initialType = (search.get('type') as Visit) ?? 'weight'
  const isProgram = search.get('program') === 'true'

  const [step, setStep] = useState(1)
  const [type, setType] = useState<Visit>(['weight', 'hormone', 'combined'].includes(initialType) ? initialType : 'weight')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [contact, setContact] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    state: '',
    notes: '',
    agree: false,
  })
  const [submitting, setSubmitting] = useState(false)
  const [done, setDone] = useState(false)

  // Date constraints — minimum tomorrow
  const minDate = useMemo(() => {
    const d = new Date()
    d.setDate(d.getDate() + 1)
    return d.toISOString().slice(0, 10)
  }, [])

  useEffect(() => {
    setType(['weight', 'hormone', 'combined'].includes(initialType) ? initialType : 'weight')
  }, [initialType])

  const selected = OPTIONS.find((o) => o.key === type)!
  const canAdvance1 = !!type
  const canAdvance2 = !!date && !!time
  const canSubmit =
    contact.firstName && contact.lastName && contact.email && contact.phone && contact.state && contact.agree

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!canSubmit) return
    setSubmitting(true)
    try {
      const res = await fetch('/api/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type,
          isProgram,
          date,
          time,
          contact,
          submittedAt: new Date().toISOString(),
        }),
      })
      if (!res.ok) throw new Error('Booking submission failed')
      setDone(true)
      toast.success('Consultation request received', {
        description: 'You will receive an email shortly with payment instructions.',
      })
    } catch {
      toast.error('Something went wrong', {
        description: 'Please try again or contact care@veloramedical.com.',
      })
    } finally {
      setSubmitting(false)
    }
  }

  if (done) {
    return <ConfirmationView type={type} date={date} time={time} contact={contact} />
  }

  return (
    <>
      {/* Header */}
      <section className="bg-cream border-b border-line">
        <div className="container-velora pt-14 md:pt-20 pb-12">
          <p className="eyebrow">Schedule Your Consultation</p>
          <h1 className="mt-4 font-display text-[42px] md:text-[58px] lg:text-[68px] leading-[1.04] tracking-[-0.018em] text-ink max-w-3xl">
            Begin physician-guided care in <em className="not-italic text-sage">three steps</em>.
          </h1>
          <p className="mt-6 text-[16.5px] text-ink-soft max-w-2xl leading-relaxed">
            All visits are conducted via secure telemedicine. Your appointment is confirmed once
            payment is received.
          </p>

          <Stepper step={step} />
        </div>
      </section>

      <section className="bg-bone py-16 md:py-20">
        <div className="container-velora grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8">
            {step === 1 && (
              <StepCard
                stepLabel="01 · Consultation Type"
                title="Select your visit"
                subtitle="Choose the type of evaluation that best aligns with your goals."
              >
                <div className="grid sm:grid-cols-1 lg:grid-cols-1 gap-4">
                  {OPTIONS.map((o) => {
                    const active = type === o.key
                    return (
                      <button
                        key={o.key}
                        type="button"
                        onClick={() => setType(o.key)}
                        className={cn(
                          'text-left p-6 lg:p-7 border transition-all relative',
                          active
                            ? 'border-sage bg-paper shadow-sm'
                            : 'border-line bg-paper hover:border-sage/60',
                        )}
                      >
                        {o.badge && (
                          <span className="absolute -top-3 left-6 chip bg-gold text-ink">{o.badge}</span>
                        )}
                        <div className="flex items-start gap-5">
                          <span className={cn(
                            'size-11 rounded-full flex items-center justify-center shrink-0',
                            active ? 'bg-sage text-cream' : 'bg-sage-soft text-sage',
                          )}>
                            {o.icon}
                          </span>
                          <div className="flex-1">
                            <div className="flex items-baseline justify-between gap-3">
                              <h3 className="font-display text-[22px] leading-tight text-ink">{o.title}</h3>
                              <span className="font-display text-[26px] text-ink shrink-0">{o.price}</span>
                            </div>
                            <p className="mt-1 text-[12px] tracking-[0.18em] uppercase text-sage">{o.duration}</p>
                            <p className="mt-3 text-[14.5px] text-ink-soft leading-relaxed">{o.description}</p>
                            <ul className="mt-4 space-y-1.5">
                              {o.bullets.map((b) => (
                                <li key={b} className="flex items-start gap-2 text-[13.5px] text-ink-soft">
                                  <Check className="size-3.5 text-sage mt-1 shrink-0" />
                                  {b}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <span className={cn(
                            'size-5 rounded-full border-2 shrink-0 flex items-center justify-center',
                            active ? 'border-sage bg-sage' : 'border-line',
                          )}>
                            {active && <Check className="size-3 text-cream" />}
                          </span>
                        </div>
                      </button>
                    )
                  })}
                </div>

                <div className="mt-10 flex items-center justify-between">
                  <Link href="/" className="btn-ghost">
                    <ArrowLeft className="size-3.5" />
                    Back to home
                  </Link>
                  <button
                    type="button"
                    disabled={!canAdvance1}
                    onClick={() => setStep(2)}
                    className="btn-primary"
                  >
                    Continue
                    <ArrowUpRight className="size-3.5" />
                  </button>
                </div>
              </StepCard>
            )}

            {step === 2 && (
              <StepCard
                stepLabel="02 · Preferred Date & Time"
                title="When would you like to meet?"
                subtitle="Final scheduling is confirmed by our team — we will offer the closest available slot to your preference."
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Preferred Date">
                    <input
                      type="date"
                      min={minDate}
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="input"
                      required
                    />
                  </Field>
                  <Field label="Preferred Time (Central Time)">
                    <select value={time} onChange={(e) => setTime(e.target.value)} className="input" required>
                      <option value="">Select a time…</option>
                      {TIMES.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </Field>
                </div>

                <div className="mt-8 p-5 border border-line bg-cream/50">
                  <p className="eyebrow">Visit Summary</p>
                  <div className="mt-3 flex items-baseline justify-between">
                    <span className="font-display text-[20px] text-ink">{selected.title}</span>
                    <span className="font-display text-[20px] text-ink">{selected.price}</span>
                  </div>
                  <p className="mt-1 text-[13px] text-ink-soft">{selected.duration}</p>
                </div>

                <div className="mt-10 flex items-center justify-between">
                  <button type="button" onClick={() => setStep(1)} className="btn-ghost">
                    <ArrowLeft className="size-3.5" />
                    Back
                  </button>
                  <button
                    type="button"
                    disabled={!canAdvance2}
                    onClick={() => setStep(3)}
                    className="btn-primary"
                  >
                    Continue
                    <ArrowUpRight className="size-3.5" />
                  </button>
                </div>
              </StepCard>
            )}

            {step === 3 && (
              <StepCard
                stepLabel="03 · Your Information"
                title="Tell us how to reach you"
                subtitle="We will email you payment instructions and a link to complete your intake forms before your visit."
              >
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <Field label="First Name" required>
                      <input
                        type="text"
                        required
                        autoComplete="given-name"
                        value={contact.firstName}
                        onChange={(e) => setContact({ ...contact, firstName: e.target.value })}
                        className="input"
                      />
                    </Field>
                    <Field label="Last Name" required>
                      <input
                        type="text"
                        required
                        autoComplete="family-name"
                        value={contact.lastName}
                        onChange={(e) => setContact({ ...contact, lastName: e.target.value })}
                        className="input"
                      />
                    </Field>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <Field label="Email" required>
                      <input
                        type="email"
                        required
                        autoComplete="email"
                        value={contact.email}
                        onChange={(e) => setContact({ ...contact, email: e.target.value })}
                        className="input"
                      />
                    </Field>
                    <Field label="Phone" required>
                      <input
                        type="tel"
                        required
                        autoComplete="tel"
                        value={contact.phone}
                        onChange={(e) => setContact({ ...contact, phone: e.target.value })}
                        className="input"
                      />
                    </Field>
                  </div>
                  <Field label="State of Residence" required>
                    <select
                      required
                      value={contact.state}
                      onChange={(e) => setContact({ ...contact, state: e.target.value })}
                      className="input"
                    >
                      <option value="">Select…</option>
                      {STATES.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                    <p className="mt-1.5 text-[12px] text-muted-foreground">
                      Patients must be located in a state where our physicians are licensed.
                    </p>
                  </Field>
                  <Field label="Anything you would like the physician to know? (Optional)">
                    <textarea
                      rows={4}
                      value={contact.notes}
                      onChange={(e) => setContact({ ...contact, notes: e.target.value })}
                      className="input resize-none"
                      placeholder="Brief context, primary symptoms, or scheduling preferences."
                    />
                  </Field>

                  <label className="flex items-start gap-3 mt-2 select-none cursor-pointer">
                    <input
                      type="checkbox"
                      checked={contact.agree}
                      onChange={(e) => setContact({ ...contact, agree: e.target.checked })}
                      className="mt-1 size-4 accent-sage"
                      required
                    />
                    <span className="text-[13.5px] text-ink-soft leading-relaxed">
                      I acknowledge the{' '}
                      <Link href="/legal/terms" className="underline underline-offset-2 hover:text-sage">cancellation policy</Link>,{' '}
                      <Link href="/legal/privacy" className="underline underline-offset-2 hover:text-sage">privacy policy</Link>, and that
                      payment is required prior to my appointment.
                    </span>
                  </label>

                  <div className="mt-10 flex items-center justify-between">
                    <button type="button" onClick={() => setStep(2)} className="btn-ghost">
                      <ArrowLeft className="size-3.5" />
                      Back
                    </button>
                    <button type="submit" disabled={!canSubmit || submitting} className="btn-primary">
                      {submitting ? 'Submitting…' : 'Submit Request'}
                      <ArrowUpRight className="size-3.5" />
                    </button>
                  </div>
                </form>
              </StepCard>
            )}
          </div>

          {/* Aside summary */}
          <aside className="lg:col-span-4 lg:sticky lg:top-32 self-start">
            <div className="bg-paper border border-line p-7">
              <p className="eyebrow">Order Summary</p>
              <div className="mt-5 pb-5 border-b border-line">
                <div className="flex items-center gap-3">
                  <span className="size-10 rounded-full bg-sage-soft text-sage flex items-center justify-center">
                    {selected.icon}
                  </span>
                  <div>
                    <h3 className="font-display text-[18px] leading-tight">{selected.title}</h3>
                    <p className="text-[12px] tracking-[0.18em] uppercase text-sage mt-1">{selected.duration}</p>
                  </div>
                </div>
              </div>
              <dl className="space-y-4 mt-5">
                <div className="flex items-center justify-between text-[14px]">
                  <dt className="text-ink-soft">Initial consultation</dt>
                  <dd className="text-ink">{selected.price}</dd>
                </div>
                {date && (
                  <div className="flex items-center justify-between text-[14px]">
                    <dt className="text-ink-soft flex items-center gap-2"><Calendar className="size-3.5" /> Preferred date</dt>
                    <dd className="text-ink">{new Date(date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</dd>
                  </div>
                )}
                {time && (
                  <div className="flex items-center justify-between text-[14px]">
                    <dt className="text-ink-soft flex items-center gap-2"><Clock className="size-3.5" /> Preferred time</dt>
                    <dd className="text-ink">{time} CT</dd>
                  </div>
                )}
              </dl>
              <div className="mt-6 pt-5 border-t border-line flex items-baseline justify-between">
                <span className="font-display text-[18px] text-ink">Total</span>
                <span className="font-display text-[28px] text-ink">{selected.price}</span>
              </div>
            </div>

            <div className="mt-5 bg-ink text-cream p-7">
              <p className="eyebrow text-gold">Important to Know</p>
              <ul className="mt-5 space-y-4 text-[13.5px] text-cream/75 leading-relaxed">
                <li className="flex gap-3">
                  <ShieldCheck className="size-4 text-gold shrink-0 mt-0.5" />
                  All visits are conducted via secure telemedicine.
                </li>
                <li className="flex gap-3">
                  <CreditCard className="size-4 text-gold shrink-0 mt-0.5" />
                  Payment is required prior to your appointment.
                </li>
                <li className="flex gap-3">
                  <Calendar className="size-4 text-gold shrink-0 mt-0.5" />
                  Intake forms must be completed before your visit.
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </>
  )
}

function Stepper({ step }: { step: number }) {
  const labels = ['Consultation', 'Date & Time', 'Your Info']
  return (
    <ol className="mt-12 flex items-center gap-4 text-[13px]">
      {labels.map((l, i) => {
        const n = i + 1
        const active = step === n
        const done = step > n
        return (
          <li key={l} className="flex items-center gap-3">
            <span className={cn(
              'size-7 rounded-full flex items-center justify-center text-[12px] font-medium border transition-colors',
              done && 'bg-sage border-sage text-cream',
              active && 'bg-ink border-ink text-cream',
              !done && !active && 'bg-paper border-line text-muted-foreground',
            )}>
              {done ? <Check className="size-3.5" /> : n.toString().padStart(2, '0').slice(-2)}
            </span>
            <span className={cn('font-medium', active ? 'text-ink' : 'text-muted-foreground')}>{l}</span>
            {i < labels.length - 1 && <span className="w-10 h-px bg-line ml-2" />}
          </li>
        )
      })}
    </ol>
  )
}

function StepCard({
  stepLabel, title, subtitle, children,
}: {
  stepLabel: string; title: string; subtitle?: string; children: React.ReactNode
}) {
  return (
    <div className="bg-paper border border-line p-7 md:p-10">
      <p className="text-[11px] tracking-[0.22em] uppercase text-sage font-medium">{stepLabel}</p>
      <h2 className="mt-3 font-display text-[30px] md:text-[36px] leading-tight tracking-[-0.012em] text-ink">{title}</h2>
      {subtitle && <p className="mt-3 text-[15px] text-ink-soft leading-relaxed max-w-2xl">{subtitle}</p>}
      <div className="mt-9">{children}</div>
    </div>
  )
}

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-[12px] tracking-[0.18em] uppercase text-sage font-medium">
        {label}{required && <span className="text-gold ml-1">*</span>}
      </span>
      <div className="mt-2">{children}</div>
    </label>
  )
}

function ConfirmationView({
  type, date, time, contact,
}: {
  type: Visit; date: string; time: string;
  contact: { firstName: string; lastName: string; email: string }
}) {
  const selected = OPTIONS.find((o) => o.key === type)!
  return (
    <section className="bg-bone min-h-[70vh] py-20 md:py-28">
      <div className="container-narrow text-center">
        <span className="size-14 rounded-full bg-sage text-cream flex items-center justify-center mx-auto">
          <Check className="size-7" />
        </span>
        <p className="eyebrow mt-7">Request Received</p>
        <h1 className="mt-5 font-display text-[42px] md:text-[58px] leading-[1.04] tracking-[-0.018em] text-ink">
          Thank you, {contact.firstName} — your <em className="not-italic text-sage">consultation request</em> is in.
        </h1>
        <p className="mt-7 text-[16.5px] text-ink-soft leading-relaxed max-w-xl mx-auto">
          We&rsquo;ve received your request for a {selected.title.toLowerCase()} consultation
          on {date && new Date(date).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })} at {time} CT.
          A member of our care team will email <strong className="text-ink font-medium">{contact.email}</strong> within one business day to
          confirm your time and provide payment + intake instructions.
        </p>

        <div className="mt-12 grid sm:grid-cols-3 gap-4 text-left">
          {[
            { n: '01', t: 'Confirmation Email', b: 'Look out for an email with payment + scheduling details.' },
            { n: '02', t: 'Complete Intake', b: 'Provide your medical history and goals before your visit.' },
            { n: '03', t: 'Telemedicine Visit', b: 'Receive secure video link 24h prior to your appointment.' },
          ].map((s) => (
            <div key={s.n} className="bg-paper border border-line p-6">
              <span className="font-display italic text-gold text-[18px]">{s.n}</span>
              <h3 className="font-display text-[18px] leading-tight mt-4">{s.t}</h3>
              <p className="mt-2 text-[13.5px] text-ink-soft leading-relaxed">{s.b}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
          <Link href="/intake" className="btn-primary">Begin Patient Intake <ArrowUpRight className="size-3.5" /></Link>
          <Link href="/" className="btn-secondary">Return Home</Link>
        </div>
      </div>
    </section>
  )
}
