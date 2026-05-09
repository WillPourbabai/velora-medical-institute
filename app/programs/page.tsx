import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import {
  Calendar,
  ClipboardList,
  Sparkles,
  Stethoscope,
  ShieldCheck,
  Target,
  TrendingUp,
  HeartPulse,
  Check,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Structured Programs',
  description:
    'Physician-guided programs designed for long-term results — Medical Weight Management, Metabolic & Hormone Optimization, and Signature Longevity Program.',
}

export default function ProgramsPage() {
  return (
    <>
      {/* HERO — E2CD6435 */}
      <section className="relative bg-bone overflow-hidden">
        <div className="container-velora py-12 lg:py-16">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div>
              <p className="text-[10.5px] tracking-[0.32em] uppercase text-brown font-semibold">
                Structured Programs · Lasting Results
              </p>
              <h1
                className="mt-5 font-display leading-[1.04] tracking-[-0.018em] text-ink"
                style={{ fontSize: 'clamp(2rem, 4.2vw, 3.25rem)' }}
              >
                Physician-Guided Programs
                <br />
                Designed for Long-Term Results
              </h1>
              <div className="mt-5 w-16 h-px bg-gold" />
              <p className="mt-6 text-[15px] text-ink-soft leading-[1.65] max-w-md">
                Comprehensive programs for weight management, hormone optimization,
                and longevity-focused health.
              </p>
            </div>
            <div className="relative">
              <div className="relative aspect-[4/3] rounded-md overflow-hidden">
                <Image
                  src="/photos/programs-hikers.png"
                  alt="A patient and his physician hiking — one helping the other up the mountain at sunset"
                  fill
                  priority
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute -top-2 right-4 lg:right-6 max-w-[210px] text-right bg-bone/85 backdrop-blur-sm rounded-md px-4 py-3 hidden lg:block">
                <p className="font-display text-[15px] leading-[1.4] text-ink italic">
                  &ldquo;You don&rsquo;t have to climb alone. We guide you every step of the way.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TIERS */}
      <section id="pricing" className="bg-paper">
        <div className="container-velora py-14 lg:py-18">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-start">
            <ProgramTier
              icon={<ClipboardList className="size-5" strokeWidth={1.6} />}
              title="Medical Weight Management"
              price="$145"
              cadenceTag="16 visits over 12 months"
              bullets={[
                'GLP-1 medications',
                'Nutrition guidance',
                'Ongoing monitoring',
                'Physician care',
              ]}
              cta="Explore Program"
              href="/weight-management"
            />
            <ProgramTier
              icon={<Sparkles className="size-5" strokeWidth={1.6} />}
              title="Metabolic & Hormone Optimization"
              price="$180"
              cadenceTag="5 visit program (40 min)"
              cadenceLabel="EXTENSIVE"
              bullets={[
                'Weight management',
                'Hormone optimization',
                'Metabolic testing',
                'Treatment plan',
              ]}
              cta="Start Program"
              href="/hormone-therapy"
              featured
            />
            <ProgramTier
              icon={<Stethoscope className="size-5" strokeWidth={1.6} />}
              title="Signature Longevity Program"
              price="$220"
              cadenceTag="5 visit program (60 min)"
              cadenceLabel="EXTENSIVE"
              bullets={[
                'Longevity-focused care',
                'Advanced metabolic assessment',
                'Preventive & performance focus',
                'Long-term health optimization',
              ]}
              cta="Explore Program"
              href="/longevity"
            />
          </div>

          <div className="mt-12 lg:mt-14 flex justify-end">
            <div className="bg-brown text-cream rounded-2xl px-7 md:px-10 py-9 max-w-md w-full">
              <h3
                className="font-display leading-[1.1] tracking-[-0.012em] text-cream"
                style={{ fontSize: 'clamp(1.5rem, 2.6vw, 1.875rem)' }}
              >
                Invest in Your Health.
                <br />
                Elevate Your Life.
              </h3>
              <p className="mt-4 text-[14px] text-cream/80 leading-[1.6]">
                Our programs are designed to help you look, feel, and perform your best
                &mdash; now and for years to come.
              </p>
              <Link
                href="/book"
                className="mt-6 inline-flex items-center gap-2 bg-cream text-brown hover:bg-paper px-5 py-3 rounded-md text-[11px] tracking-[0.24em] uppercase font-semibold transition-colors"
              >
                <Calendar className="size-4" strokeWidth={2} />
                Schedule Your Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST 4-tile row */}
      <section className="bg-bone">
        <div className="container-velora py-12 lg:py-14">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-6">
            <TrustTile icon={<ShieldCheck className="size-5" />} title="Evidence-Based" body="Programs built on science and clinical expertise." />
            <TrustTile icon={<Target className="size-5" />} title="Personalized" body="Tailored to your goals, biology, and lifestyle." />
            <TrustTile icon={<TrendingUp className="size-5" />} title="Measurable Results" body="Track progress and optimize over time." />
            <TrustTile icon={<HeartPulse className="size-5" />} title="Long-Term Approach" body="Sustainable strategies for lasting transformation." />
          </div>
        </div>
      </section>
    </>
  )
}

function ProgramTier({
  icon, title, price, cadenceTag, cadenceLabel, bullets, cta, href, featured,
}: {
  icon: React.ReactNode
  title: string
  price: string
  cadenceTag: string
  cadenceLabel?: string
  bullets: string[]
  cta: string
  href: string
  featured?: boolean
}) {
  return (
    <div
      className={[
        'relative flex flex-col p-7 lg:p-9 rounded-md transition-all',
        featured
          ? 'bg-paper border-2 border-brown shadow-[0_24px_60px_-20px_rgba(124,84,54,0.5)] lg:-translate-y-2'
          : 'bg-paper border border-line/60',
      ].join(' ')}
    >
      {featured && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brown text-cream px-4 py-1 text-[9.5px] tracking-[0.28em] uppercase font-semibold rounded-md whitespace-nowrap">
          Recommended
        </span>
      )}

      <span className="size-10 rounded-full bg-bone border border-brown/30 text-brown flex items-center justify-center mx-auto">
        {icon}
      </span>
      <h3 className="mt-5 font-display text-[20px] md:text-[22px] leading-[1.15] text-ink text-center min-h-[56px] flex items-center justify-center">
        {title}
      </h3>

      {cadenceLabel && (
        <span className="mt-2 inline-flex self-center bg-brown text-cream px-2.5 py-1 text-[9px] tracking-[0.24em] uppercase font-semibold rounded-sm">
          {cadenceLabel}
        </span>
      )}

      <div className="mt-4 text-center">
        <span className="font-display text-[44px] leading-none text-ink">{price}</span>
        <span className="ml-1 text-[13px] text-ink-soft italic">/ visit</span>
      </div>
      <p className="mt-2 text-[10px] tracking-[0.24em] uppercase text-brown text-center font-semibold">
        {cadenceTag}
      </p>

      <div className="mt-5 mx-auto w-12 h-px bg-line" />

      <ul className="mt-5 space-y-2.5 text-[13.5px] text-ink-soft flex-1">
        {bullets.map((b) => (
          <li key={b} className="flex items-start gap-2.5">
            <Check className="size-4 mt-0.5 text-brown shrink-0" strokeWidth={2} />
            <span>{b}</span>
          </li>
        ))}
      </ul>

      <Link
        href={href}
        className={[
          'mt-7 inline-flex items-center justify-center gap-2 w-full px-5 py-3 rounded-md text-[10.5px] tracking-[0.24em] uppercase font-semibold transition-colors',
          featured
            ? 'bg-brown text-cream hover:bg-brown-deep'
            : 'border border-ink text-ink hover:bg-ink hover:text-cream',
        ].join(' ')}
      >
        {cta}
      </Link>
    </div>
  )
}

function TrustTile({ icon, title, body }: { icon: React.ReactNode; title: string; body: string }) {
  return (
    <div className="flex items-start gap-3">
      <span className="mt-0.5 size-9 rounded-full bg-paper border border-brown/30 text-brown flex items-center justify-center shrink-0">
        {icon}
      </span>
      <div>
        <p className="text-[10.5px] tracking-[0.24em] uppercase text-ink font-semibold">{title}</p>
        <p className="mt-1 text-[12.5px] text-ink-soft leading-[1.5]">{body}</p>
      </div>
    </div>
  )
}
