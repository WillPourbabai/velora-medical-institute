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
 * Homepage hero — refined dark editorial.
 * Near-black bg, Fraunces serif wordmark, telehealth photo full-bleed
 * on desktop with a clean (not feathered) edge and subtle vignette,
 * contained card on mobile.
 */
export function HomeHero() {
  return (
    <section className="relative bg-[#0B0907] text-cream overflow-hidden">
      {/* Desktop photo right */}
      <div
        className="hidden lg:block absolute inset-y-0 right-0 w-[55%] xl:w-[54%]"
        style={{
          backgroundImage: 'url(/photos/hero-telehealth.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center 35%',
        }}
        aria-hidden
      />
      {/* Soft left-edge fade — narrow, polished */}
      <div
        className="hidden lg:block absolute inset-y-0 right-0 w-[55%] xl:w-[54%] pointer-events-none"
        style={{
          background:
            'linear-gradient(to right, #0B0907 0%, rgba(11,9,7,0.45) 5%, rgba(11,9,7,0) 12%)',
        }}
        aria-hidden
      />
      {/* Top + bottom vignettes on photo for depth */}
      <div
        className="hidden lg:block absolute top-0 right-0 w-[55%] xl:w-[54%] h-40 pointer-events-none"
        style={{
          background:
            'linear-gradient(to bottom, rgba(11,9,7,0.55) 0%, rgba(11,9,7,0) 100%)',
        }}
        aria-hidden
      />
      {/* Subtle warm key light top-left */}
      <div
        className="hidden lg:block absolute -top-40 -left-32 w-[700px] h-[560px] opacity-30 pointer-events-none"
        style={{
          background:
            'radial-gradient(closest-side, rgba(201,160,100,0.5), rgba(201,160,100,0) 70%)',
          filter: 'blur(70px)',
        }}
        aria-hidden
      />

      <div className="relative container-velora pt-12 sm:pt-16 lg:pt-24 pb-10 sm:pb-14 lg:pb-14 lg:min-h-[calc(100vh-110px)] lg:flex lg:flex-col lg:justify-between">
        {/* Main editorial column */}
        <div className="max-w-[560px]">

          {/* Brand lockup — refined V monogram + Fraunces wordmark */}
          <div className="flex flex-col items-start">
            <VMonogram className="text-gold" />
            <p
              className="mt-3 font-display text-cream leading-none tracking-[0.08em]"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 3.75rem)', fontWeight: 400 }}
            >
              VELORA
            </p>
            <p className="mt-3 text-[10px] sm:text-[11px] tracking-[0.46em] uppercase text-gold font-semibold">
              Medical Institute
            </p>
          </div>

          {/* Italic tagline — "Feel Like Yourself Again" */}
          <p
            className="mt-10 sm:mt-12 font-display italic text-gold leading-none"
            style={{ fontSize: 'clamp(1.125rem, 1.6vw, 1.375rem)' }}
          >
            Feel Like Yourself Again
          </p>

          {/* Main headline */}
          <h1
            className="mt-4 sm:mt-5 font-display leading-[1.04] tracking-[-0.022em] text-cream"
            style={{ fontSize: 'clamp(1.875rem, 5.4vw, 4rem)' }}
          >
            Physician-Guided{' '}
            <em className="italic font-display text-gold">Weight Management</em>
            {' '}&amp;{' '}
            <em className="italic font-display text-gold">Hormone Therapy</em>
          </h1>

          <div className="mt-7 w-14 h-px bg-gold" />

          {/* Body — new copy */}
          <p className="mt-6 sm:mt-7 text-[14px] sm:text-[15px] leading-[1.75] text-cream/80">
            Personalized, evidence-based care focused on metabolic health, weight
            management, and hormone optimization.
          </p>
          <p className="mt-3 text-[13.5px] sm:text-[14px] leading-[1.7] text-cream/65">
            Care is directed by double board-certified physicians in Internal Medicine
            &amp; Obesity Medicine, with treatment tailored to your clinical profile
            and long-term health goals.
          </p>

          {/* CTAs — new labels */}
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Link
              href="/book?path=weight-management"
              className="inline-flex items-center justify-center gap-2.5 bg-gold text-ink hover:bg-gold/90 px-6 py-4 rounded-md text-[12px] sm:text-[12px] tracking-[0.22em] uppercase font-semibold transition-colors"
            >
              <Calendar className="size-4" strokeWidth={2} />
              Book Weight Management
            </Link>
            <Link
              href="/book?path=hormone-therapy"
              className="inline-flex items-center justify-center gap-2.5 border border-gold/55 text-gold hover:bg-gold hover:text-ink px-6 py-4 rounded-md text-[12px] sm:text-[12px] tracking-[0.22em] uppercase font-semibold transition-colors"
            >
              Start Hormone Therapy
              <ArrowRight className="size-4" strokeWidth={2} />
            </Link>
          </div>

          {/* Mobile photo */}
          <div className="lg:hidden mt-10 relative aspect-[4/3] sm:aspect-[16/10] rounded-xl overflow-hidden ring-1 ring-gold/15">
            <Image
              src="/photos/hero-telehealth.png"
              alt="A Velora patient meeting with a physician by telemedicine"
              fill
              sizes="100vw"
              className="object-cover"
              priority
            />
          </div>

          {/* Trust row */}
          <div className="mt-14 lg:mt-20 grid grid-cols-1 sm:grid-cols-3 gap-x-8 gap-y-6 max-w-2xl">
            <TrustItem icon={<Monitor className="size-5" strokeWidth={1.4} />} title="Telemedicine Visits" body="Private. Convenient. Secure." />
            <TrustItem icon={<UserRound className="size-5" strokeWidth={1.4} />} title="Physician-Led Care" body="Expert guidance every step." />
            <TrustItem icon={<ClipboardList className="size-5" strokeWidth={1.4} />} title="Personalized Plans" body="Tailored to your biology and goals." />
          </div>
        </div>
      </div>

      {/* Bottom utility strip */}
      <div className="relative border-t border-gold/15">
        <div className="container-velora py-4 sm:py-5 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <div className="flex items-center gap-3 text-[10px] sm:text-[11px] tracking-[0.32em] uppercase text-cream/80 font-semibold">
            <ShieldCheck className="size-4 text-gold shrink-0" strokeWidth={1.6} />
            <span className="inline-flex flex-wrap items-center gap-x-2 gap-y-1">
              <span>Physician-Led</span>
              <span className="text-gold">·</span>
              <span>Evidence-Based</span>
              <span className="text-gold">·</span>
              <span>Results-Driven</span>
            </span>
          </div>
          <div className="flex items-center gap-3 text-[10px] sm:text-[11px] tracking-[0.32em] uppercase text-cream/85 font-semibold">
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

/**
 * Refined V monogram — clean Roman V with horizontal crossbar at top.
 * Strokes use currentColor so caller controls via text-gold.
 */
function VMonogram({ className }: { className?: string }) {
  return (
    <svg
      width="86"
      height="98"
      viewBox="0 0 86 98"
      fill="none"
      className={className}
      aria-hidden
    >
      {/* Horizontal crossbar */}
      <path
        d="M8 9 L78 9"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      {/* V — slightly tapered, confident strokes */}
      <path
        d="M16 17 L43 87 L70 17"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  )
}

function TrustItem({ icon, title, body }: { icon: React.ReactNode; title: string; body: string }) {
  return (
    <div className="flex items-start gap-3.5">
      <span className="mt-0.5 text-gold shrink-0">
        {icon}
      </span>
      <div>
        <p className="text-[10.5px] sm:text-[11px] tracking-[0.28em] uppercase text-cream font-semibold">
          {title}
        </p>
        <p className="mt-1.5 text-[12.5px] text-cream/65 leading-[1.5]">
          {body}
        </p>
      </div>
    </div>
  )
}
