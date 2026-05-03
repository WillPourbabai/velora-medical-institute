import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Calendar, Monitor, ClipboardCheck, UserRound, ShieldCheck } from 'lucide-react'
import { VeloraMark } from './logo'

export function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-ink text-cream">
      {/* Photo — full bleed; fades into ink on the left */}
      <div className="absolute inset-0">
        <Image
          src="/hero-telehealth.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-right"
        />
        {/* Gradient: solid ink left → fully transparent past the midpoint so the photo reads */}
        <div className="absolute inset-0 bg-gradient-to-r from-ink from-30% via-ink/85 via-50% to-ink/0 to-70%" />
        {/* Subtle bottom fade so the bottom utility row stays legible */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-ink to-transparent" />
      </div>

      <div className="relative container-velora pt-24 sm:pt-28 lg:pt-24 pb-14 lg:pb-14 min-h-[640px] sm:min-h-[720px] lg:min-h-[820px] flex flex-col">
        {/* Brand mark stack */}
        <div className="flex flex-col items-start">
          <VeloraMark size={48} className="text-gold" />
          <div className="mt-3 font-display tracking-[0.32em] sm:tracking-[0.42em] text-[28px] sm:text-[40px] lg:text-[44px] text-cream leading-none">
            VELORA
          </div>
          <div className="mt-2 font-sans tracking-[0.32em] sm:tracking-[0.42em] text-[10px] sm:text-[10.5px] text-gold leading-none uppercase">
            Medical Institute
          </div>
        </div>

        {/* Categories eyebrow */}
        <div className="mt-10 sm:mt-12 flex flex-wrap items-center gap-x-3 gap-y-2 text-[10px] sm:text-[11px] tracking-[0.28em] sm:tracking-[0.34em] uppercase text-cream font-medium">
          <span>Telemedicine Care</span>
          <span className="text-gold">•</span>
          <span>Obesity Medicine</span>
          <span className="text-gold">•</span>
          <span>Hormone Therapy</span>
        </div>

        {/* Headline — fluid clamp keeps it from cramping at 320px and growing past 88px */}
        <h1
          className="mt-6 sm:mt-7 font-display leading-[1.0] sm:leading-[0.98] tracking-[-0.022em] text-cream max-w-3xl"
          style={{ fontSize: 'clamp(2.25rem, 7.5vw, 5.5rem)' }}
        >
          Physician-Guided
          <br />
          <span className="text-gold">Weight Loss &amp;</span>
          <br />
          <span className="text-gold">Hormone Optimization</span>
        </h1>

        {/* Short gold underline accent */}
        <div className="mt-7 w-24 h-px bg-gold" />

        {/* Body copy */}
        <p className="mt-7 max-w-md text-[15.5px] leading-[1.7] text-cream/75">
          Personalized telemedicine care for metabolic health,
          weight management, and hormone balance &mdash;
          guided by physicians and refined over time
          to support lasting results.
        </p>

        {/* CTAs */}
        <div className="mt-9 flex flex-wrap gap-3">
          <Link
            href="/book"
            className="inline-flex items-center gap-2.5 bg-gold text-ink px-5 sm:px-7 py-3.5 sm:py-4 text-[11px] sm:text-[12px] tracking-[0.24em] sm:tracking-[0.28em] uppercase font-semibold hover:bg-cream transition-colors rounded-md"
          >
            <Calendar className="size-4" strokeWidth={1.8} />
            Book Consultation
          </Link>
          <Link
            href="/programs"
            className="inline-flex items-center gap-2.5 border border-gold/60 text-gold px-5 sm:px-7 py-3.5 sm:py-4 text-[11px] sm:text-[12px] tracking-[0.24em] sm:tracking-[0.28em] uppercase font-semibold hover:bg-gold hover:text-ink transition-colors rounded-md"
          >
            View Programs
            <ArrowRight className="size-4" strokeWidth={1.8} />
          </Link>
        </div>

        {/* Spacer pushes feature row + utility strip to bottom */}
        <div className="flex-1 min-h-[40px]" />

        {/* Three feature items */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-x-6 gap-y-5 max-w-2xl">
          <FeatureItem
            icon={<Monitor className="size-5" strokeWidth={1.4} />}
            title="Telemedicine Visits"
            body="Private. Convenient. Secure."
          />
          <FeatureItem
            icon={<UserRound className="size-5" strokeWidth={1.4} />}
            title="Physician-Led Care"
            body="Expert guidance every step."
          />
          <FeatureItem
            icon={<ClipboardCheck className="size-5" strokeWidth={1.4} />}
            title="Personalized Plans"
            body="Tailored to your biology and your goals."
          />
        </div>

        {/* Bottom utility row */}
        <div className="mt-10 pt-6 border-t border-cream/15 flex flex-wrap items-center gap-x-6 sm:gap-x-8 gap-y-3 text-[10px] sm:text-[10.5px] tracking-[0.28em] sm:tracking-[0.32em] uppercase">
          <span className="flex items-center gap-2 text-cream">
            <ShieldCheck className="size-3.5 text-gold" strokeWidth={1.6} />
            Physician-Led
          </span>
          <span className="text-gold">•</span>
          <span className="text-cream">Evidence-Based</span>
          <span className="text-gold">•</span>
          <span className="text-cream">Results-Driven</span>
          <span className="basis-full md:basis-auto md:ml-auto flex items-center gap-3 text-cream/70 normal-case tracking-[0.18em] sm:tracking-[0.22em] text-[11px] sm:text-[10.5px]">
            <DnaGlyph className="text-gold shrink-0" />
            <span>
              Optimize your health. Elevate <span className="text-gold">your life.</span>
            </span>
          </span>
        </div>
      </div>
    </section>
  )
}

function FeatureItem({
  icon,
  title,
  body,
}: {
  icon: React.ReactNode
  title: string
  body: string
}) {
  return (
    <div className="flex items-start gap-3">
      <span className="text-gold/85 mt-0.5 shrink-0">{icon}</span>
      <div className="border-l border-gold/25 pl-3 -ml-1">
        <p className="text-[10px] tracking-[0.26em] uppercase text-cream font-semibold">
          {title}
        </p>
        <p className="mt-1.5 text-[12px] text-cream/65 leading-[1.5]">{body}</p>
      </div>
    </div>
  )
}

function DnaGlyph({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      className={`size-4 ${className ?? ''}`}
      aria-hidden
    >
      <path d="M5 3 C 14 5, 14 11, 5 13 C 14 15, 14 21, 5 23" />
      <path d="M19 3 C 10 5, 10 11, 19 13 C 10 15, 10 21, 19 23" />
      <path d="M7 7 H 17" strokeWidth="1" />
      <path d="M7 12 H 17" strokeWidth="1" />
      <path d="M7 17 H 17" strokeWidth="1" />
    </svg>
  )
}
