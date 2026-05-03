'use client'

import { useState } from 'react'
import { ArrowUpRight, Check } from 'lucide-react'
import { toast } from 'sonner'

const TOPICS = [
  'General Inquiry',
  'Scheduling Help',
  'Program Questions',
  'Insurance & Payment',
  'Billing',
  'Other',
]

export function ContactForm() {
  const [submitting, setSubmitting] = useState(false)
  const [done, setDone] = useState(false)
  const [data, setData] = useState({
    name: '', email: '', phone: '', topic: 'General Inquiry', message: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, submittedAt: new Date().toISOString() }),
      })
      if (!res.ok) throw new Error()
      setDone(true)
      toast.success('Message sent', { description: 'We will respond within one business day.' })
    } catch {
      toast.error('Could not send message', { description: 'Please email care@veloramedical.com.' })
    } finally {
      setSubmitting(false)
    }
  }

  if (done) {
    return (
      <div className="bg-paper border border-line p-10 md:p-14 text-center">
        <span className="size-12 rounded-full bg-sage text-cream flex items-center justify-center mx-auto">
          <Check className="size-6" />
        </span>
        <p className="eyebrow mt-7">Message Received</p>
        <h2 className="mt-5 font-display text-[32px] md:text-[40px] leading-tight tracking-[-0.012em] text-ink">
          Thank you, {data.name.split(' ')[0]}.
        </h2>
        <p className="mt-5 text-[15px] text-ink-soft leading-relaxed max-w-xl mx-auto">
          Our team will reply to <strong className="text-ink font-medium">{data.email}</strong> within one business day.
          If your inquiry is time-sensitive, please call (833) 583-5672.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="bg-paper border border-line p-7 md:p-10">
      <p className="eyebrow">Send a Message</p>
      <h2 className="mt-3 font-display text-[28px] md:text-[34px] leading-tight tracking-[-0.012em] text-ink">
        Tell us how we can help
      </h2>

      <div className="mt-9 grid sm:grid-cols-2 gap-5">
        <Field label="Full Name" required>
          <input className="input" required value={data.name}
            onChange={(e) => setData({ ...data, name: e.target.value })} />
        </Field>
        <Field label="Email" required>
          <input type="email" className="input" required value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })} />
        </Field>
        <Field label="Phone (optional)">
          <input type="tel" className="input" value={data.phone}
            onChange={(e) => setData({ ...data, phone: e.target.value })} />
        </Field>
        <Field label="Topic" required>
          <select className="input" value={data.topic}
            onChange={(e) => setData({ ...data, topic: e.target.value })}>
            {TOPICS.map((t) => <option key={t} value={t}>{t}</option>)}
          </select>
        </Field>
        <Field label="Message" required className="sm:col-span-2">
          <textarea rows={6} required className="input resize-none" value={data.message}
            onChange={(e) => setData({ ...data, message: e.target.value })} />
        </Field>
      </div>

      <div className="mt-8 flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-4">
        <p className="text-[12.5px] text-muted-foreground max-w-md">
          By submitting, you agree to our privacy practices. Please do not include detailed medical
          information; book a consultation for clinical questions.
        </p>
        <button type="submit" disabled={submitting} className="btn-primary px-7 py-4">
          {submitting ? 'Sending…' : 'Send Message'}
          <ArrowUpRight className="size-3.5" />
        </button>
      </div>
    </form>
  )
}

function Field({ label, required, children, className }: {
  label: string; required?: boolean; children: React.ReactNode; className?: string
}) {
  return (
    <label className={`block ${className ?? ''}`}>
      <span className="text-[12px] tracking-[0.18em] uppercase text-sage font-medium">
        {label}{required && <span className="text-gold ml-1">*</span>}
      </span>
      <div className="mt-2">{children}</div>
    </label>
  )
}
