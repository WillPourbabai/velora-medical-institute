import type { Metadata } from 'next'
import { IntakeForm } from './intake-form'

export const metadata: Metadata = {
  title: 'Patient Intake & Consent',
  description:
    'Complete your Velora Medical Institute patient intake — medical history, hormone-related symptoms, lifestyle, goals, and required consents.',
}

export default function IntakePage() {
  return (
    <>
      <section className="bg-cream border-b border-line">
        <div className="container-velora pt-14 md:pt-20 pb-12">
          <p className="eyebrow">Patient Intake & Consent</p>
          <h1
            className="mt-4 font-display leading-[1.04] tracking-[-0.018em] text-ink max-w-3xl"
            style={{ fontSize: 'clamp(2rem, 5.5vw, 4.25rem)' }}
          >
            A few details before your <em className="not-italic text-sage">first visit</em>.
          </h1>
          <p className="mt-6 text-[16.5px] text-ink-soft max-w-2xl leading-relaxed">
            This intake provides your physician with the medical, family, and lifestyle context needed
            to develop your individualized treatment plan. Please complete it prior to your appointment.
          </p>
        </div>
      </section>
      <IntakeForm />
    </>
  )
}
