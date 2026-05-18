import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import {
  Calendar,
  ArrowRight,
  Check,
  ShieldCheck,
} from 'lucide-react'
import { FaqAccordion } from '@/components/site/faq-accordion'

export const metadata: Metadata = {
  title: 'Pricing & Programs',
  description:
    'Direct-pay pricing for Velora Medical Institute. Transparent flat fees for physician-guided weight management, hormone optimization, and longevity programs. No insurance billing.',
}

export default function ProgramsPage() {
  return (
    <>
      {/* ===== HERO — split: editorial copy left, full-bleed photo right ===== */}
      <section className="relative bg-bone">
        <div className="lg:grid lg:grid-cols-[minmax(0,48fr)_minmax(0,52fr)] lg:items-stretch">

          {/* LEFT — copy panel */}
          <div className="relative z-10 px-6 sm:px-10 lg:pl-[max(3rem,calc((100vw-115rem)/2+4rem))] lg:pr-16 pt-10 sm:pt-12 lg:pt-16 pb-12 sm:pb-14 lg:pb-20">
            {/* Mobile photo — leads on top */}
            <div className="lg:hidden -mx-6 sm:-mx-10 mb-9 relative aspect-[16/10]">
              <Image
                src="/photos/pricing-hero.png"
                alt="A Velora physician helping a patient up a mountain trail at sunrise"
                fill
                sizes="100vw"
                className="object-cover"
                priority
              />
            </div>

            <div className="max-w-[620px]">
              <p className="text-[11px] sm:text-[12px] tracking-[0.42em] uppercase text-brown font-semibold">
                Pricing
              </p>
              <h1
                className="mt-6 font-display text-ink leading-[0.98] tracking-[-0.022em]"
                style={{ fontSize: 'clamp(2.25rem, 4vw, 3.5rem)' }}
              >
                Transparent pricing.
                <br />
                <em className="italic font-display text-brown">No insurance.</em>
              </h1>

              <div className="mt-7 w-12 h-px bg-gold/80" />

              <p className="mt-6 text-[15px] sm:text-[16px] text-ink-soft leading-[1.7] max-w-[480px]">
                Velora is a direct-pay practice. You pay only for the care you receive
                &mdash; every visit, lab, and medication is itemized. No insurance billing,
                no coverage gaps, no surprise fees.
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-x-8 gap-y-3 text-[10.5px] sm:text-[11px] tracking-[0.28em] uppercase text-brown font-semibold">
                <span className="inline-flex items-center gap-2">
                  <span className="size-1 rounded-full bg-gold" />
                  Transparent &amp; itemized
                </span>
                <span className="inline-flex items-center gap-2">
                  <span className="size-1 rounded-full bg-gold" />
                  No insurance billed
                </span>
                <span className="inline-flex items-center gap-2">
                  <span className="size-1 rounded-full bg-gold" />
                  No membership fees
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT — full-bleed photo (desktop) */}
          <div className="relative hidden lg:block">
            <Image
              src="/photos/pricing-hero.png"
              alt="A Velora physician helping a patient up a mountain trail at sunrise"
              fill
              sizes="52vw"
              className="object-cover object-center"
              priority
            />
            {/* Left-edge fade so the photo melts into the bone panel */}
            <div
              className="absolute inset-y-0 left-0 w-40 pointer-events-none"
              style={{ background: 'linear-gradient(to right, #F1E9D8 0%, rgba(241,233,216,0.45) 40%, rgba(241,233,216,0) 100%)' }}
              aria-hidden
            />
          </div>
        </div>

        {/* ===== STEP ONE band — straddles the hero bottom edge ===== */}
        <div className="container-velora relative z-20 -mb-8 lg:-mb-10">
          <div className="-mt-10 sm:-mt-12 lg:-mt-16 bg-cream/95 backdrop-blur-sm border border-line/60 rounded-2xl px-7 sm:px-10 lg:px-12 py-7 lg:py-8 shadow-[0_32px_70px_-34px_rgba(74,52,28,0.45)]">
            <div className="grid md:grid-cols-[auto_1fr_auto] items-center gap-8 md:gap-12">

              {/* Price block */}
              <div className="text-center md:text-left md:pr-12 md:border-r border-line/60">
                <p className="text-[10px] tracking-[0.34em] uppercase text-brown font-semibold">
                  Step One
                </p>
                <p
                  className="mt-2 font-display text-ink leading-none tracking-[-0.02em]"
                  style={{ fontSize: 'clamp(2.5rem, 3.6vw, 3.25rem)' }}
                >
                  $295
                </p>
                <p className="mt-2 text-[10.5px] tracking-[0.26em] uppercase text-ink-soft">
                  One-time visit
                </p>
              </div>

              {/* Description */}
              <div className="text-center md:text-left max-w-md mx-auto md:mx-0">
                <h2
                  className="font-display text-ink leading-[1.12] tracking-[-0.012em]"
                  style={{ fontSize: 'clamp(1.375rem, 2.2vw, 1.75rem)' }}
                >
                  Initial physician consultation.
                </h2>
                <p className="mt-3 text-[13.5px] text-ink-soft leading-[1.65]">
                  60-minute video visit. Comprehensive review of your history and labs.
                  A written plan delivered to your inbox. Required before any program.
                </p>
              </div>

              {/* CTA */}
              <Link
                href="/book"
                className="inline-flex items-center justify-center gap-2.5 bg-brown text-cream hover:bg-brown-deep px-7 py-4 rounded-md text-[11px] sm:text-[10.5px] tracking-[0.24em] uppercase font-semibold transition-colors shrink-0 mx-auto md:mx-0"
              >
                <Calendar className="size-4" strokeWidth={2} />
                Book Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== THE PROGRAMS — three flat-per-visit tiers ===== */}
      <section id="pricing" className="bg-paper">
        <div className="container-velora pt-16 sm:pt-20 lg:pt-24 pb-12 sm:pb-14 lg:pb-20">
          <div className="text-center max-w-2xl mx-auto">
            <ChapterEyebrow number="01" label="Choose Your Program" />
            <h2
              className="mt-6 font-display text-ink leading-[1.06] tracking-[-0.018em]"
              style={{ fontSize: 'clamp(1.875rem, 3.6vw, 2.75rem)' }}
            >
              Three programs.
              <br />
              <em className="italic font-display text-brown">One standard of care.</em>
            </h2>
            <p className="mt-5 text-[14px] text-ink-soft leading-[1.7] max-w-xl mx-auto">
              Flat per-visit pricing. No prepayment required &mdash; you pay as you go,
              visit by visit.
            </p>
          </div>

          <div className="mt-10 lg:mt-14 grid md:grid-cols-3 gap-5 lg:gap-6 items-stretch max-w-6xl mx-auto">
            <ProgramTier
              numeral="01"
              title="Medical Weight Management"
              price="$145"
              cadenceTag="16 visits over 12 months"
              total="$2,320 total"
              bullets={[
                'GLP-1 medication strategy',
                'Nutrition and lifestyle guidance',
                'Ongoing progress monitoring',
                'Physician support',
              ]}
              cta="Explore program"
              href="/weight-management"
            />
            <ProgramTier
              numeral="02"
              title="Hormone Optimization"
              price="$180"
              cadenceTag="5 visit program · 40 min"
              total="$900 total"
              bullets={[
                'Bioidentical hormone therapy',
                'Comprehensive lab panel',
                'Protocol refinement',
                'Ongoing physician support',
              ]}
              cta="Start program"
              href="/hormone-therapy"
              featured
            />
            <ProgramTier
              numeral="03"
              title="Longevity & Optimization"
              price="$220"
              cadenceTag="16 visits over 12 months"
              total="$3,520 total"
              bullets={[
                'Longevity-focused care',
                'Metabolic & hormone integration',
                'Preventive wellness strategy',
                'Long-term optimization',
              ]}
              cta="Start program"
              href="/longevity"
            />
          </div>
        </div>
      </section>

      {/* ===== ALSO BILLED SEPARATELY — transparency strip ===== */}
      <section className="bg-bone border-t border-line/40">
        <div className="container-velora py-8 sm:py-10 lg:py-14">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3">
              <ShieldCheck className="size-4 text-brown" strokeWidth={1.8} />
              <p className="text-[10.5px] tracking-[0.32em] uppercase text-brown font-semibold">
                Also Billed Separately
              </p>
            </div>
            <p className="mt-3 text-[14px] text-ink-soft leading-[1.7] max-w-3xl">
              Medications, compounding, and laboratory testing are itemized and billed at cost.
              Your physician will review pricing with you before any treatment is started &mdash;
              there are no surprise charges.
            </p>
            <div className="mt-7 grid sm:grid-cols-3 gap-y-3 gap-x-10 text-[12.5px] text-ink-soft">
              <BilledItem label="Medications" detail="At cost · individualized" />
              <BilledItem label="Lab work" detail="Individualized panels" />
              <BilledItem label="Compounding" detail="When applicable" />
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHY DIRECT-PAY — single column statement ===== */}
      <section className="bg-paper border-t border-line/40">
        <div className="container-velora py-10 sm:py-12 lg:py-16">
          <div className="max-w-3xl mx-auto text-center">
            <ChapterEyebrow number="02" label="Why Direct-Pay" />
            <h2
              className="mt-7 font-display text-ink leading-[1.04] tracking-[-0.018em]"
              style={{ fontSize: 'clamp(1.625rem, 3.4vw, 2.375rem)' }}
            >
              The plan we recommend
              <br />
              <em className="italic font-display text-brown">is the plan you receive.</em>
            </h2>
            <div className="mt-7 mx-auto w-10 h-px bg-gold/80" />
            <p className="mt-7 text-[15px] text-ink-soft leading-[1.85]">
              Direct-pay means your physician&rsquo;s time and clinical judgment are not constrained
              by insurance approvals, coverage limits, or coding requirements. You pay only
              for the care you receive &mdash; no membership fees, no prior authorizations,
              no surprise billing. The result is a longer visit, a better plan, and the
              same physician at every appointment.
            </p>
          </div>
        </div>
      </section>

      {/* ===== PRICING FAQ — scoped to pricing only ===== */}
      <section className="bg-bone border-t border-line/40">
        <div className="container-velora py-10 sm:py-12 lg:py-16">
          <div className="grid lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] gap-12 lg:gap-20">
            <div className="lg:sticky lg:top-24 lg:self-start">
              <ChapterEyebrow number="03" label="Pricing FAQ" />
              <h2
                className="mt-7 font-display text-ink leading-[1.04] tracking-[-0.018em]"
                style={{ fontSize: 'clamp(1.625rem, 3.2vw, 2.25rem)' }}
              >
                Common questions
                <br />
                <em className="italic font-display text-brown">about pricing.</em>
              </h2>
              <p className="mt-7 text-[13.5px] text-ink-soft leading-[1.75] max-w-[340px]">
                Have a question that isn&rsquo;t here? Reach out &mdash; a physician will respond
                directly.
              </p>
              <Link
                href="/contact"
                className="mt-6 inline-flex items-center gap-2 text-[10.5px] tracking-[0.28em] uppercase text-brown hover:text-brown-deep font-semibold border-b border-brown/40 hover:border-brown pb-1 transition-colors"
              >
                Contact a physician
                <ArrowRight className="size-3.5" />
              </Link>

              <div className="mt-6 lg:mt-9 relative aspect-[16/10] sm:aspect-[4/3] rounded-xl overflow-hidden ring-1 ring-line/50 shadow-[0_24px_50px_-30px_rgba(74,52,28,0.45)]">
                <Image
                  src="/photos/faq-cta.png"
                  alt="Velora Medical Institute — Frequently Asked Questions"
                  fill
                  sizes="(min-width: 1024px) 35vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>

            <FaqAccordion
              items={[
                { q: 'Why direct-pay instead of insurance?', a: 'Direct-pay lets us spend our time on care rather than billing. Treatment recommendations are based on what your physician believes is best for you — not on insurance restrictions, prior authorizations, or coding requirements.' },
                { q: 'Is insurance accepted at all?', a: 'No. Velora does not bill insurance for any visit. Some patients submit superbills to their insurance for out-of-network reimbursement; this is at the patient\'s discretion and not guaranteed.' },
                { q: 'What does the $295 initial consultation include?', a: 'A 60-minute physician visit including comprehensive intake, history review, laboratory strategy, treatment planning, and a written plan delivered to your inbox. The fee is separate from any program enrollment.' },
                { q: 'Do I have to prepay for a program?', a: 'No. Programs are billed flat per visit as you go. There is no upfront program payment or membership fee.' },
                { q: 'Are medications and labs included in program pricing?', a: 'No. Medication, compounding, and laboratory costs are billed separately and itemized at cost. Your physician will review pricing with you before any treatment is started.' },
                { q: 'Is there a refund or cancellation policy?', a: 'Yes. Specific refund and cancellation terms are reviewed at enrollment. Generally, fees for visits already conducted are not refundable; future visits can be canceled at any time.' },
              ]}
            />
          </div>
        </div>
      </section>

    </>
  )
}

/* Helpers */

function ChapterEyebrow({ number, label }: { number: string; label: string }) {
  return (
    <div className="inline-flex flex-wrap items-center justify-center gap-x-3 gap-y-1 max-w-full">
      <span className="w-6 h-px bg-gold/70" />
      <p className="text-[10px] tracking-[0.24em] sm:tracking-[0.42em] uppercase text-brown font-semibold">
        {number} &middot; {label}
      </p>
      <span className="w-6 h-px bg-gold/70" />
    </div>
  )
}

function BilledItem({ label, detail }: { label: string; detail: string }) {
  return (
    <div className="border-t border-line/70 pt-2.5">
      <p className="text-[10.5px] tracking-[0.28em] uppercase text-ink font-semibold">
        {label}
      </p>
      <p className="mt-1 text-[12.5px] text-ink-soft leading-[1.5]">{detail}</p>
    </div>
  )
}

function ProgramTier({
  numeral, title, price, cadenceTag, total, bullets, cta, href, featured,
}: {
  numeral: string
  title: string
  price: string
  cadenceTag: string
  total: string
  bullets: string[]
  cta: string
  href: string
  featured?: boolean
}) {
  return (
    <div
      className={[
        'relative flex flex-col bg-cream rounded-2xl px-7 lg:px-8 pt-9 pb-8 transition-all',
        featured
          ? 'ring-1 ring-brown/40 shadow-[0_40px_80px_-32px_rgba(74,52,28,0.55)]'
          : 'border border-line/60 shadow-[0_24px_55px_-32px_rgba(74,52,28,0.38)]',
      ].join(' ')}
    >
      {featured && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brown text-cream px-4 py-1.5 text-[9px] tracking-[0.3em] uppercase font-semibold rounded-md whitespace-nowrap shadow-[0_10px_22px_-12px_rgba(74,52,28,0.6)]">
          Most Chosen
        </span>
      )}

      {/* Numeral + rule */}
      <div className="flex items-center justify-between">
        <span
          className="font-display italic leading-none tracking-[-0.02em] text-brown/55"
          style={{ fontSize: '38px' }}
        >
          {numeral}
        </span>
        <span className="w-8 h-px bg-gold/70" />
      </div>

      {/* Title */}
      <h3
        className="mt-5 font-display text-ink leading-[1.15] tracking-[-0.012em]"
        style={{ fontSize: 'clamp(1.25rem, 2vw, 1.5rem)' }}
      >
        {title}
      </h3>

      {/* Price */}
      <div className="mt-5 flex items-baseline gap-2">
        <span
          className="font-display text-ink leading-none tracking-[-0.02em]"
          style={{ fontSize: 'clamp(2.5rem, 3vw, 3rem)' }}
        >
          {price}
        </span>
        <span className="text-[13px] italic text-ink-soft">/ visit</span>
      </div>
      <p className="mt-3 text-[10px] tracking-[0.24em] uppercase text-brown font-semibold">
        {cadenceTag}
      </p>
      <p className="mt-1 text-[12px] text-ink-soft">{total}</p>

      <div className="mt-6 w-full h-px bg-line/70" />

      {/* Bullets */}
      <ul className="mt-6 space-y-3.5 text-[13.5px] text-ink-soft flex-1">
        {bullets.map((b) => (
          <li key={b} className="flex items-start gap-3">
            <span className="mt-0.5 size-[18px] rounded-full bg-brown/10 text-brown flex items-center justify-center shrink-0">
              <Check className="size-2.5" strokeWidth={3} />
            </span>
            <span className="leading-[1.5]">{b}</span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <Link
        href={href}
        className={[
          'group/cta mt-8 inline-flex items-center justify-center gap-2 w-full px-5 py-4 rounded-md text-[11px] sm:text-[10.5px] tracking-[0.22em] sm:tracking-[0.26em] uppercase font-semibold transition-colors',
          featured
            ? 'bg-brown text-cream hover:bg-brown-deep'
            : 'border border-brown/70 text-brown hover:bg-brown hover:text-cream',
        ].join(' ')}
      >
        {cta}
        <ArrowRight className="size-3.5 transition-transform group-hover/cta:translate-x-0.5" />
      </Link>
    </div>
  )
}
