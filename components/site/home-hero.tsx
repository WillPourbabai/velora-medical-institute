import Link from 'next/link'
import { Calendar, ArrowRight } from 'lucide-react'
import { Editable } from '@/components/editor/Editable'

/**
 * Homepage hero — matches the AI-generated reference exactly.
 * Cream LEFT side with copy + CTAs. Photo on the RIGHT showing a patient
 * on a Velora telehealth visit in a warm home interior.
 */
export function HomeHero() {
  return (
    <section className="relative bg-bone overflow-hidden">
      {/* Photo — right portion of the hero, fades into cream on the left */}
      <div
        className="absolute inset-y-0 right-0 w-[60%] sm:w-[55%] lg:w-[55%]"
        style={{
          backgroundImage: 'url(/photos/hero-telehealth.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
        }}
        aria-hidden
      />
      {/* Smooth multi-stop cream feather — long, very gradual blend */}
      <div
        className="absolute inset-0 pointer-events-none hidden lg:block"
        style={{
          background:
            'linear-gradient(to right, rgb(244 235 211) 0%, rgb(244 235 211) 30%, rgba(244,235,211,0.96) 42%, rgba(244,235,211,0.85) 52%, rgba(244,235,211,0.6) 62%, rgba(244,235,211,0.3) 75%, rgba(244,235,211,0) 95%)',
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none hidden sm:block lg:hidden"
        style={{
          background:
            'linear-gradient(to right, rgb(244 235 211) 0%, rgb(244 235 211) 20%, rgba(244,235,211,0.94) 35%, rgba(244,235,211,0.8) 50%, rgba(244,235,211,0.5) 65%, rgba(244,235,211,0.2) 80%, rgba(244,235,211,0) 100%)',
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none sm:hidden"
        style={{
          background:
            'linear-gradient(to right, rgb(244 235 211) 0%, rgba(244,235,211,0.95) 25%, rgba(244,235,211,0.7) 50%, rgba(244,235,211,0.3) 75%, rgba(244,235,211,0) 100%)',
        }}
      />

      <div className="relative container-velora py-14 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* LEFT: copy */}
          <div className="max-w-xl">
            {/* Eyebrow */}
            <Editable
              id="home.hero.eyebrow"
              kind="paragraph"
              className="text-[10.5px] sm:text-[11px] tracking-[0.32em] uppercase text-brown font-semibold"
              defaultText="Physician-Led. Personalized. Results-Driven."
            >
              Physician-Led. Personalized. Results-Driven.
            </Editable>

            {/* Headline */}
            <Editable
              id="home.hero.headline"
              kind="heading"
              className="mt-5 font-display leading-[1.04] tracking-[-0.022em] text-ink"
              style={{ fontSize: 'clamp(2.125rem, 5vw, 4rem)' }}
              defaultText="Optimize Your Health. Elevate Your Life."
            >
              Optimize Your Health.
              <br />
              Elevate Your Life.
            </Editable>

            {/* Decorative gold rule + diamond */}
            <div className="mt-5 flex items-center gap-2">
              <span className="block w-12 h-px bg-gold" />
              <span className="size-1.5 rotate-45 bg-gold" aria-hidden />
            </div>

            {/* Body */}
            <Editable
              id="home.hero.body"
              kind="paragraph"
              className="mt-6 text-[15px] leading-[1.65] text-ink-soft max-w-md"
              defaultText="Physician-led telemedicine care for weight management, hormone balance, and longevity. Personalized for you. Designed for lasting results."
            >
              Physician-led telemedicine care for weight management, hormone balance, and longevity.
              <br />
              Personalized for you. Designed for lasting results.
            </Editable>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap gap-3">
              <Editable
                id="home.hero.cta.primary"
                kind="button"
                inline
                defaultText="Schedule Consultation"
              >
                <Link
                  href="/book"
                  className="inline-flex items-center gap-2.5 bg-brown text-cream hover:bg-brown-deep px-6 py-3.5 rounded-md text-[11px] tracking-[0.24em] uppercase font-semibold transition-colors"
                >
                  <Calendar className="size-4" strokeWidth={2} />
                  Schedule Consultation
                </Link>
              </Editable>
              <Editable
                id="home.hero.cta.secondary"
                kind="button"
                inline
                defaultText="Explore Programs"
              >
                <Link
                  href="/programs"
                  className="inline-flex items-center gap-2.5 border border-ink text-ink hover:bg-ink hover:text-cream px-6 py-3.5 rounded-md text-[11px] tracking-[0.24em] uppercase font-semibold transition-colors"
                >
                  Explore Programs
                  <ArrowRight className="size-4" strokeWidth={2} />
                </Link>
              </Editable>
            </div>
          </div>

          {/* RIGHT spacer (photo lives in the absolutely-positioned bg div) */}
          <div className="hidden lg:block" aria-hidden />
        </div>
      </div>
    </section>
  )
}
