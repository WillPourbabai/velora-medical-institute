import Link from 'next/link'
import { Calendar, ArrowRight } from 'lucide-react'

/**
 * Homepage hero — stripped + amplified.
 * Photo right, cream wash left, one headline, one gold rule, one body, two CTAs.
 * No in-section wordmark (already in sticky header), no category pills,
 * no feature row, no utility strip.
 */
export function HomeHero() {
  return (
    <section className="relative bg-bone overflow-hidden">
      {/* Full-bleed photo on the right, feathered into cream — disciplined edge */}
      <div
        className="absolute inset-y-0 right-0 w-[68%] sm:w-[62%] lg:w-[56%] xl:w-[54%]"
        style={{
          backgroundImage: 'url(/photos/hero-telehealth.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          WebkitMaskImage:
            'linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,0.6) 22%, rgba(0,0,0,1) 42%)',
          maskImage:
            'linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,0.6) 22%, rgba(0,0,0,1) 42%)',
        }}
        aria-hidden
      />
      {/* Cream wash — clean, steep, stops sooner so the photo reads as photo */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(to right, rgb(244 235 211) 0%, rgb(244 235 211) 36%, rgba(244,235,211,0.6) 50%, rgba(244,235,211,0) 66%)',
        }}
      />

      {/* Warm gold corner light */}
      <div
        className="absolute -top-32 -left-32 w-[700px] h-[520px] -rotate-[18deg] opacity-50 pointer-events-none"
        style={{
          background:
            'linear-gradient(100deg, rgba(255,235,200,0.85) 0%, rgba(255,225,180,0.35) 35%, rgba(255,225,180,0) 70%)',
          filter: 'blur(56px)',
        }}
        aria-hidden
      />

      <div className="relative container-velora pt-12 sm:pt-16 lg:pt-20 pb-16 sm:pb-20 lg:pb-24 min-h-[calc(100vh-78px)] flex flex-col justify-center">
        <div className="max-w-2xl xl:max-w-3xl">
          {/* Single tiny eyebrow — replaces the pill row */}
          <p className="text-[10px] sm:text-[10.5px] tracking-[0.42em] uppercase text-brown font-semibold">
            Telemedicine · California
          </p>

          {/* Big multiline headline */}
          <h1
            className="mt-6 font-display leading-[0.98] tracking-[-0.022em] text-ink"
            style={{ fontSize: 'clamp(2.25rem, 5.2vw, 4.5rem)' }}
          >
            Physician-Guided
            <br />
            <em className="italic font-display text-brown">Weight Loss &amp;</em>
            <br />
            <em className="italic font-display text-brown">Hormone Optimization.</em>
          </h1>

          <div className="mt-7 w-14 h-px bg-gold" />

          <p className="mt-7 max-w-md text-[14.5px] leading-[1.7] text-ink-soft">
            Personalized telemedicine care for metabolic health, weight management,
            and hormone balance &mdash; guided by physicians, refined over time
            to support lasting results.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              href="/book"
              className="inline-flex items-center gap-2.5 bg-brown text-cream hover:bg-brown-deep px-6 py-3.5 rounded-md text-[11px] tracking-[0.24em] uppercase font-semibold transition-colors"
            >
              <Calendar className="size-4" strokeWidth={2} />
              Book Consultation
            </Link>
            <Link
              href="/programs"
              className="inline-flex items-center gap-2.5 border border-ink/80 text-ink hover:bg-ink hover:text-cream px-6 py-3.5 rounded-md text-[11px] tracking-[0.24em] uppercase font-semibold transition-colors"
            >
              View Programs
              <ArrowRight className="size-4" strokeWidth={2} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
