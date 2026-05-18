'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  ArrowRight,
  Mail,
  Phone,
  Check,
  AlertCircle,
  Calendar,
} from 'lucide-react'

const SUBJECTS = [
  'General Question',
  'Book a Consultation',
  'Pricing',
  'Other',
]

type Status = 'idle' | 'submitting' | 'success' | 'error'

export default function ContactPage() {
  const [status, setStatus] = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState<string>('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('submitting')
    setErrorMsg('')

    const fd = new FormData(e.currentTarget)
    const payload = {
      name: String(fd.get('name') ?? '').trim(),
      email: String(fd.get('email') ?? '').trim(),
      phone: String(fd.get('phone') ?? '').trim(),
      topic: String(fd.get('topic') ?? 'General Question'),
      message: String(fd.get('message') ?? '').trim(),
      submittedAt: new Date().toISOString(),
    }

    if (!payload.name || !payload.email || !payload.message) {
      setStatus('error')
      setErrorMsg('Please complete name, email, and message.')
      return
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (!res.ok) throw new Error('Request failed')
      setStatus('success')
    } catch {
      setStatus('error')
      setErrorMsg('Could not send your message. Please try again or email Care@veloramedicine.com.')
    }
  }

  return (
    <>
      {/* ===== CONTACT — single focused section, form-first ===== */}
      <section className="bg-bone">
        <div className="container-velora pt-12 lg:pt-16 pb-12 sm:pb-16 lg:pb-24">

          {/* Header */}
          <div className="max-w-3xl">
            <p className="text-[10px] sm:text-[10.5px] tracking-[0.26em] sm:tracking-[0.42em] uppercase text-brown font-semibold">
              Contact
            </p>
            <h1
              className="mt-5 font-display text-ink leading-[0.98] tracking-[-0.022em]"
              style={{ fontSize: 'clamp(2rem, 4.6vw, 3.75rem)' }}
            >
              Reach a physician.
              <br />
              <em className="italic font-display text-brown">Directly.</em>
            </h1>
            <div className="mt-6 w-12 h-px bg-gold/80" />
            <p className="mt-6 text-[15px] text-ink-soft leading-[1.75] max-w-[640px]">
              Messages are read and answered by a Velora physician &mdash; not a call center,
              not an automated reply. Use the form below for scheduling, pricing, or fit
              questions. For clinical concerns, please book a consultation.
            </p>
          </div>

          {/* Two-column grid: contact details left, form right */}
          <div className="mt-9 lg:mt-14 grid lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-10 lg:gap-16 items-start">

            {/* LEFT — direct channels: phone + email only */}
            <div className="lg:sticky lg:top-24 lg:self-start">
              <p className="text-[10.5px] tracking-[0.32em] uppercase text-ink font-semibold">
                Direct Channels
              </p>
              <div className="mt-5 w-8 h-px bg-gold/80" />

              <div className="mt-7 space-y-4">
                <ChannelCard
                  icon={<Phone className="size-5" strokeWidth={1.7} />}
                  label="Phone"
                  value="(314) 271-8668"
                  href="tel:+13142718668"
                />
                <ChannelCard
                  icon={<Mail className="size-5" strokeWidth={1.7} />}
                  label="Email"
                  value="Care@veloramedicine.com"
                  href="mailto:Care@veloramedicine.com"
                />
              </div>

              <Link
                href="/faq"
                className="mt-8 inline-flex items-center gap-2 text-[10.5px] tracking-[0.28em] uppercase text-brown hover:text-brown-deep font-semibold border-b border-brown/40 hover:border-brown pb-1 transition-colors"
              >
                Have a common question? View the FAQ
                <ArrowRight className="size-3.5" />
              </Link>
            </div>

            {/* RIGHT — the form */}
            <div className="bg-cream rounded-2xl border border-line/60 p-7 lg:p-10 shadow-[0_28px_60px_-30px_rgba(74,52,28,0.4)]">
              {status === 'success' ? (
                <SuccessPanel />
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <p className="text-[10.5px] tracking-[0.32em] uppercase text-brown font-semibold">
                    Send a Message
                  </p>
                  <h2
                    className="mt-3 font-display text-ink leading-[1.1] tracking-[-0.012em]"
                    style={{ fontSize: 'clamp(1.375rem, 2.6vw, 1.875rem)' }}
                  >
                    Write to us. <em className="italic font-display text-brown">A physician will respond.</em>
                  </h2>
                  <div className="mt-7 w-10 h-px bg-gold/80" />

                  <div className="mt-7 grid sm:grid-cols-2 gap-5">
                    <FormField label="Name" required htmlFor="contact-name">
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        required
                        autoComplete="name"
                        className="velora-input"
                      />
                    </FormField>
                    <FormField label="Email" required htmlFor="contact-email">
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        className="velora-input"
                      />
                    </FormField>
                    <FormField label="Phone (optional)" htmlFor="contact-phone">
                      <input
                        id="contact-phone"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        className="velora-input"
                      />
                    </FormField>
                    <FormField label="Subject" required htmlFor="contact-topic">
                      <select
                        id="contact-topic"
                        name="topic"
                        required
                        defaultValue="General Question"
                        className="velora-input"
                      >
                        {SUBJECTS.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                    </FormField>
                    <FormField
                      label="Message"
                      required
                      htmlFor="contact-message"
                      className="sm:col-span-2"
                    >
                      <textarea
                        id="contact-message"
                        name="message"
                        rows={6}
                        required
                        className="velora-input resize-none"
                      />
                    </FormField>
                  </div>

                  {status === 'error' && (
                    <div
                      role="alert"
                      className="mt-6 flex items-start gap-3 rounded-md border border-brown/30 bg-brown/5 px-4 py-3 text-[13px] text-brown-deep leading-[1.55]"
                    >
                      <AlertCircle className="size-4 shrink-0 mt-0.5" strokeWidth={1.8} />
                      <span>{errorMsg || 'Something went wrong. Please try again.'}</span>
                    </div>
                  )}

                  <div className="mt-8 flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-5">
                    <p className="text-[12px] text-ink-soft/85 leading-[1.55] max-w-md">
                      Please don&rsquo;t include detailed medical information. For clinical
                      questions, book a consultation.
                    </p>
                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="inline-flex items-center justify-center gap-2.5 bg-brown text-cream hover:bg-brown-deep disabled:opacity-60 disabled:cursor-not-allowed px-7 py-4 sm:py-3.5 rounded-md text-[12.5px] sm:text-[11px] tracking-[0.24em] sm:tracking-[0.28em] uppercase font-semibold transition-colors shrink-0 w-full sm:w-auto"
                    >
                      {status === 'submitting' ? 'Sending…' : 'Send Message'}
                      <ArrowRight className="size-4" strokeWidth={2} />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ===== Tight brown closer — single decisive action ===== */}
      <section className="bg-brown text-cream">
        <div className="container-velora py-12 lg:py-14">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] items-center gap-8">
            <div className="text-center md:text-left">
              <h2
                className="font-display leading-[1.06] tracking-[-0.012em]"
                style={{ fontSize: 'clamp(1.375rem, 2.4vw, 1.875rem)' }}
              >
                Prefer to book directly?
              </h2>
              <p className="mt-2 text-[12.5px] tracking-[0.18em] uppercase text-cream/70">
                60-minute physician visit &middot; written plan &middot;{' '}
                <span className="text-cream font-semibold">$295</span>
              </p>
            </div>
            <Link
              href="/book"
              className="inline-flex items-center justify-center gap-2.5 bg-cream text-brown hover:bg-paper px-7 py-4 sm:py-3.5 rounded-md text-[12.5px] sm:text-[11px] tracking-[0.26em] sm:tracking-[0.3em] uppercase font-semibold transition-colors shrink-0 mx-auto md:mx-0"
            >
              <Calendar className="size-4" strokeWidth={2} />
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Local input styling */}
      <style jsx global>{`
        .velora-input {
          width: 100%;
          background-color: var(--velora-cream, #f7f1e6);
          border: 1px solid rgba(74, 52, 28, 0.18);
          border-radius: 0.375rem;
          padding: 0.75rem 0.9rem;
          font-size: 14.5px;
          line-height: 1.5;
          color: inherit;
          transition: border-color 150ms ease, box-shadow 150ms ease, background-color 150ms ease;
          font-family: inherit;
        }
        .velora-input:hover {
          border-color: rgba(74, 52, 28, 0.32);
        }
        .velora-input:focus {
          outline: none;
          border-color: rgba(74, 52, 28, 0.55);
          box-shadow: 0 0 0 3px rgba(74, 52, 28, 0.12);
          background-color: #fffaf1;
        }
        .velora-input::placeholder {
          color: rgba(74, 52, 28, 0.45);
        }
        select.velora-input {
          appearance: none;
          background-image: linear-gradient(45deg, transparent 50%, rgba(74,52,28,0.55) 50%),
                            linear-gradient(135deg, rgba(74,52,28,0.55) 50%, transparent 50%);
          background-position: calc(100% - 18px) 55%, calc(100% - 13px) 55%;
          background-size: 5px 5px, 5px 5px;
          background-repeat: no-repeat;
          padding-right: 2.25rem;
        }
      `}</style>
    </>
  )
}

/* ----- Helpers ----- */

function ChannelCard({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode
  label: string
  value: string
  href: string
}) {
  return (
    <a
      href={href}
      className="group flex items-center gap-5 rounded-2xl border border-line/60 bg-cream px-6 py-6 shadow-[0_20px_45px_-32px_rgba(74,52,28,0.4)] hover:border-brown/40 hover:shadow-[0_26px_55px_-30px_rgba(74,52,28,0.5)] transition-all"
    >
      <span className="size-12 rounded-full bg-brown/10 text-brown flex items-center justify-center shrink-0 group-hover:bg-brown group-hover:text-cream transition-colors">
        {icon}
      </span>
      <div className="min-w-0">
        <p className="text-[10px] tracking-[0.32em] uppercase text-ink-soft font-semibold">
          {label}
        </p>
        <p className="mt-1.5 font-display text-ink text-[19px] md:text-[21px] leading-[1.2] tracking-[-0.01em] group-hover:text-brown transition-colors">
          {value}
        </p>
      </div>
      <ArrowRight className="size-4 text-brown/40 ml-auto shrink-0 group-hover:text-brown group-hover:translate-x-0.5 transition-all" strokeWidth={2} />
    </a>
  )
}

function FormField({
  label,
  required,
  htmlFor,
  className,
  children,
}: {
  label: string
  required?: boolean
  htmlFor: string
  className?: string
  children: React.ReactNode
}) {
  return (
    <div className={className ?? ''}>
      <label
        htmlFor={htmlFor}
        className="block text-[10.5px] tracking-[0.28em] uppercase text-brown/85 font-semibold"
      >
        {label}
        {required && <span className="text-gold ml-1.5">*</span>}
      </label>
      <div className="mt-2.5">{children}</div>
    </div>
  )
}

function SuccessPanel() {
  return (
    <div className="text-center py-6">
      <span className="size-12 rounded-full bg-brown/10 text-brown flex items-center justify-center mx-auto">
        <Check className="size-6" strokeWidth={1.8} />
      </span>
      <p className="mt-7 text-[10.5px] tracking-[0.32em] uppercase text-brown font-semibold">
        Message Received
      </p>
      <h3
        className="mt-4 font-display text-ink leading-[1.1] tracking-[-0.012em]"
        style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}
      >
        Thank you &mdash;{' '}
        <em className="italic font-display text-brown">a physician will respond shortly.</em>
      </h3>
      <div className="mt-7 mx-auto w-10 h-px bg-gold/70" />
      <p className="mt-7 text-[14px] text-ink-soft leading-[1.75] max-w-md mx-auto">
        Replies are written personally and typically arrive within one business day.
      </p>
    </div>
  )
}
