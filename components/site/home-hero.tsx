import Link from 'next/link'
import Image from 'next/image'
import {
  Calendar,
  ArrowRight,
  Monitor,
  UserRound,
  ClipboardList,
  ShieldCheck,
  Dna,
} from 'lucide-react'

/**
 * Homepage hero — 1:1 with brand reference.
 * Desktop: left dark text panel + right full-bleed photo (real <Image>,
 * object-cover so it never mis-positions). Mobile: photo on top, content below.
 * Bottom utility strip spans full width below, separated by a hairline.
 */
export function HomeHero() {
  const BG = '#0B0907'

  return (
    <section className="relative bg-[#0B0907] text-cream -mt-[84px]">
      <div className="lg:grid lg:grid-cols-[minmax(0,47fr)_minmax(0,53fr)] lg:items-stretch lg:min-h-[calc(100svh-58px)]">

        {/* ===== LEFT — text panel ===== */}
        <div className="relative z-10 flex flex-col lg:justify-center px-6 sm:px-10 lg:pl-[max(3rem,calc((100vw-115rem)/2+4rem))] lg:pr-14 xl:pr-20 pt-[106px] sm:pt-[114px] lg:pt-[94px] pb-7 lg:pb-10">

          {/* Mobile photo — leads at top */}
          <div className="lg:hidden -mx-6 sm:-mx-10 mb-7 relative aspect-[16/10] sm:aspect-[16/9]">
            <Image
              src="/photos/hero-telehealth-main.png"
              alt="A patient on a Velora telemedicine visit with a physician"
              fill
              sizes="100vw"
              className="object-cover"
              priority
            />
            <div
              className="absolute inset-x-0 bottom-0 h-1/3 pointer-events-none"
              style={{ background: `linear-gradient(to bottom, rgba(11,9,7,0), ${BG})` }}
              aria-hidden
            />
          </div>

          <div className="max-w-[560px] w-full">
            {/* Eyebrow */}
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-[10px] sm:text-[11px] tracking-[0.26em] uppercase text-cream/90 font-semibold">
              <span>Longevity Medicine</span>
              <span className="size-[3px] rounded-full bg-gold" aria-hidden />
              <span>Obesity Medicine</span>
              <span className="size-[3px] rounded-full bg-gold" aria-hidden />
              <span>Hormone Therapy</span>
            </div>

            {/* Headline */}
            <h1
              className="mt-4 font-display leading-[1.04] tracking-[-0.02em]"
              style={{ fontSize: 'clamp(1.75rem, 2.8vw, 2.625rem)' }}
            >
              <span className="text-cream">Physician-Guided</span>
              <br />
              <em className="not-italic font-display text-gold italic">Weight Loss &amp;</em>
              <br />
              <span className="text-cream">Hormone Optimization</span>
              <br />
              <span className="text-cream">Longevity &amp; Preventive Medicine</span>
            </h1>

            <div className="mt-5 w-16 h-px bg-gold" />

            {/* Body */}
            <p className="mt-5 max-w-[440px] text-[13.5px] sm:text-[14.5px] leading-[1.65] text-cream/70">
              Personalized telemedicine care for metabolic health, weight management,
              and hormone balance &mdash; guided by physicians and refined over time
              to support lasting results.
            </p>

            {/* CTAs */}
            <div className="mt-6 sm:mt-7 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link
                href="/book"
                className="inline-flex items-center justify-center gap-2.5 bg-gold text-ink hover:bg-gold/90 px-7 py-4 rounded-md text-[11.5px] tracking-[0.2em] uppercase font-semibold transition-colors"
              >
                <Calendar className="size-4" strokeWidth={2} />
                Book Consultation
              </Link>
              <Link
                href="/programs"
                className="inline-flex items-center justify-center gap-2.5 border border-cream/35 text-cream hover:bg-cream hover:text-ink px-7 py-4 rounded-md text-[11.5px] tracking-[0.2em] uppercase font-semibold transition-colors"
              >
                View Programs
                <ArrowRight className="size-4" strokeWidth={2} />
              </Link>
            </div>

            {/* Trust row */}
            <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-3">
              <TrustItem
                icon={<Monitor className="size-5" strokeWidth={1.4} />}
                title="Telemedicine Visits"
                body={<>Private. Convenient.<br />Secure.</>}
              />
              <TrustItem
                divider
                icon={<UserRound className="size-5" strokeWidth={1.4} />}
                title="Physician-Led Care"
                body={<>Expert guidance<br />every step.</>}
              />
              <TrustItem
                divider
                icon={<ClipboardList className="size-5" strokeWidth={1.4} />}
                title="Personalized Plans"
                body={<>Tailored to your biology<br />and your goals.</>}
              />
            </div>
          </div>
        </div>

        {/* ===== RIGHT — photo (desktop) ===== */}
        <div className="relative hidden lg:block">
          <Image
            src="/photos/hero-telehealth-main.png"
            alt="A patient on a Velora telemedicine visit with a physician"
            fill
            sizes="55vw"
            className="object-cover object-center"
            priority
          />
          {/* Left-edge fade so the photo melts into the dark panel */}
          <div
            className="absolute inset-y-0 left-0 w-40 pointer-events-none"
            style={{ background: `linear-gradient(to right, ${BG} 0%, rgba(11,9,7,0.5) 35%, rgba(11,9,7,0) 100%)` }}
            aria-hidden
          />
          {/* Subtle top vignette for depth */}
          <div
            className="absolute inset-x-0 top-0 h-28 pointer-events-none"
            style={{ background: `linear-gradient(to bottom, rgba(11,9,7,0.5), rgba(11,9,7,0))` }}
            aria-hidden
          />
        </div>
      </div>

      {/* ===== Bottom utility strip — full width ===== */}
      <div className="relative border-t border-cream/12">
        <div className="container-velora py-3 sm:py-5 flex flex-col md:flex-row md:items-center md:justify-between gap-2 sm:gap-3">
          <div className="flex items-center gap-3 text-[10px] sm:text-[11px] tracking-[0.28em] uppercase text-cream/80 font-semibold">
            <ShieldCheck className="size-4 text-gold shrink-0" strokeWidth={1.6} />
            <span className="inline-flex flex-wrap items-center gap-x-2.5 gap-y-1">
              <span>Physician-Led</span>
              <span className="text-gold">•</span>
              <span>Evidence-Based</span>
              <span className="text-gold">•</span>
              <span>Results-Driven</span>
            </span>
          </div>
          <div className="flex items-center gap-3 text-[10px] sm:text-[11px] tracking-[0.28em] uppercase text-cream/85 font-semibold">
            <Dna className="size-4 text-gold shrink-0" strokeWidth={1.6} />
            <p>
              Optimize Your Health.{' '}
              <span className="text-gold">Elevate Your Life.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function TrustItem({
  icon,
  title,
  body,
  divider,
}: {
  icon: React.ReactNode
  title: string
  body: React.ReactNode
  divider?: boolean
}) {
  return (
    <div
      className={[
        'flex items-start gap-3 py-1.5 sm:py-0',
        divider ? 'sm:pl-6 sm:border-l border-cream/15' : 'sm:pr-6',
      ].join(' ')}
    >
      <span className="mt-0.5 text-gold shrink-0">{icon}</span>
      <div>
        <p className="text-[10px] sm:text-[10.5px] tracking-[0.22em] uppercase text-cream font-semibold leading-[1.3]">
          {title}
        </p>
        <p className="mt-1.5 text-[12px] text-cream/55 leading-[1.45]">
          {body}
        </p>
      </div>
    </div>
  )
}
