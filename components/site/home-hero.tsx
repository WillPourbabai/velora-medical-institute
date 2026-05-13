import Link from 'next/link'
import Image from 'next/image'
import { Calendar, ArrowRight } from 'lucide-react'

/**
 * Homepage hero — clean responsive design.
 * Mobile: copy + contained photo stacked.
 * Desktop: copy left, full-bleed photo right with cream feather.
 */
export function HomeHero() {
  return (
    <section className="relative bg-bone overflow-hidden">
      {/* Desktop-only: full-bleed photo on the right, feathered into cream */}
      <div
        className="hidden lg:block absolute inset-y-0 right-0 w-[56%] xl:w-[54%]"
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
      {/* Desktop cream wash over the feathered edge */}
      <div
        className="hidden lg:block absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(to right, rgb(244 235 211) 0%, rgb(244 235 211) 36%, rgba(244,235,211,0.6) 50%, rgba(244,235,211,0) 66%)',
        }}
      />

      {/* Warm gold corner light — desktop only, decorative */}
      <div
        className="hidden lg:block absolute -top-32 -left-32 w-[700px] h-[520px] -rotate-[18deg] opacity-50 pointer-events-none"
        style={{
          background:
            'linear-gradient(100deg, rgba(255,235,200,0.85) 0%, rgba(255,225,180,0.35) 35%, rgba(255,225,180,0) 70%)',
          filter: 'blur(56px)',
        }}
        aria-hidden
      />

      <div className="relative container-velora pt-10 sm:pt-14 lg:pt-20 pb-12 sm:pb-16 lg:pb-24 lg:min-h-[calc(100vh-110px)] lg:flex lg:flex-col lg:justify-center">
        <div className="max-w-2xl xl:max-w-3xl">
          <p className="text-[10px] sm:text-[10.5px] tracking-[0.42em] uppercase text-brown font-semibold">
            Telemedicine · California
          </p>

          <h1
            className="mt-5 sm:mt-6 font-display leading-[1.02] sm:leading-[0.98] tracking-[-0.022em] text-ink"
            style={{ fontSize: 'clamp(1.875rem, 8.5vw, 4.5rem)' }}
          >
            Physician-Guided
            <br />
            <em className="italic font-display text-brown">Weight Loss &amp;</em>
            <br />
            <em className="italic font-display text-brown">Hormone Optimization.</em>
          </h1>

          <div className="mt-6 sm:mt-7 w-12 sm:w-14 h-px bg-gold" />

          <p className="mt-5 sm:mt-7 max-w-md text-[14px] sm:text-[14.5px] leading-[1.7] text-ink-soft">
            Personalized telemedicine care for metabolic health, weight management,
            and hormone balance &mdash; guided by physicians, refined over time
            to support lasting results.
          </p>

          <div className="mt-7 sm:mt-9 flex flex-col sm:flex-row sm:flex-wrap gap-3">
            <Link
              href="/book"
              className="inline-flex items-center justify-center gap-2.5 bg-brown text-cream hover:bg-brown-deep px-6 py-3.5 rounded-md text-[12.5px] sm:text-[11px] tracking-[0.22em] sm:tracking-[0.24em] uppercase font-semibold transition-colors"
            >
              <Calendar className="size-4" strokeWidth={2} />
              Book Consultation
            </Link>
            <Link
              href="/programs"
              className="inline-flex items-center justify-center gap-2.5 border border-ink/80 text-ink hover:bg-ink hover:text-cream px-6 py-3.5 rounded-md text-[12.5px] sm:text-[11px] tracking-[0.22em] sm:tracking-[0.24em] uppercase font-semibold transition-colors"
            >
              View Programs
              <ArrowRight className="size-4" strokeWidth={2} />
            </Link>
          </div>
        </div>

        {/* Mobile/tablet: contained photo BELOW copy (replaces broken full-bleed) */}
        <div className="lg:hidden mt-10 sm:mt-12 relative aspect-[4/3] sm:aspect-[16/10] rounded-2xl overflow-hidden shadow-[0_30px_60px_-26px_rgba(74,52,28,0.5)]">
          <Image
            src="/photos/hero-telehealth.png"
            alt="A Velora patient meeting with a physician by telemedicine"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  )
}
