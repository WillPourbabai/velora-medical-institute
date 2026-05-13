import Link from 'next/link'
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
      {/* ===== HERO — type-driven, no photo ===== */}
      <section className="bg-bone">
        <div className="container-velora pt-16 lg:pt-20 pb-12 lg:pb-16">
          <div className="max-w-3xl">
            <p className="text-[10.5px] tracking-[0.46em] uppercase text-brown font-semibold">
              Pricing
            </p>
            <h1
              className="mt-6 font-display text-ink leading-[0.98] tracking-[-0.022em]"
              style={{ fontSize: 'clamp(2.25rem, 5vw, 4.25rem)' }}
            >
              Honest pricing.
              <br />
              <em className="italic font-display text-brown">No insurance.</em>
            </h1>
            <div className="mt-7 w-12 h-px bg-gold/80" />
            <p className="mt-7 text-[15px] text-ink-soft leading-[1.75] max-w-[640px]">
              Velora is a direct-pay practice. You pay only for the care you receive &mdash;
              every visit, lab, and medication is itemized. No insurance billing, no
              coverage gaps, no surprise fees.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 text-[10.5px] tracking-[0.32em] uppercase text-ink-soft font-semibold">
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
      </section>

      {/* ===== STEP ONE — initial consultation feature ===== */}
      <section className="bg-paper border-t border-line/40">
        <div className="container-velora py-14 lg:py-16">
          <div className="max-w-5xl mx-auto bg-cream border border-line/60 rounded-2xl px-8 md:px-12 py-10 md:py-12 shadow-[0_28px_60px_-30px_rgba(74,52,28,0.4)]">
            <div className="grid md:grid-cols-[auto_1fr_auto] items-center gap-8 md:gap-10">

              {/* Price block */}
              <div className="text-center md:text-left">
                <p className="text-[10px] tracking-[0.32em] uppercase text-brown font-semibold">
                  Step One
                </p>
                <p className="mt-3 font-display text-ink leading-none tracking-[-0.02em]"
                   style={{ fontSize: 'clamp(3rem, 5vw, 4rem)' }}>
                  $295
                </p>
                <p className="mt-2 text-[11px] tracking-[0.24em] uppercase text-ink-soft">
                  One-time visit
                </p>
              </div>

              {/* Description */}
              <div className="text-center md:text-left max-w-md mx-auto md:mx-0">
                <h2
                  className="font-display text-ink leading-[1.1] tracking-[-0.012em]"
                  style={{ fontSize: 'clamp(1.375rem, 2.4vw, 1.875rem)' }}
                >
                  Initial physician consultation.
                </h2>
                <p className="mt-3 text-[14px] text-ink-soft leading-[1.7]">
                  60-minute video visit. Comprehensive review of your history and labs.
                  A written plan delivered to your inbox. Required before any program.
                </p>
              </div>

              {/* CTA */}
              <Link
                href="/book"
                className="inline-flex items-center justify-center gap-2.5 bg-brown text-cream hover:bg-brown-deep px-7 py-4 sm:py-3.5 rounded-md text-[12.5px] sm:text-[11px] tracking-[0.24em] sm:tracking-[0.28em] uppercase font-semibold transition-colors shrink-0 mx-auto md:mx-0"
              >
                <Calendar className="size-4" strokeWidth={2} />
                Book Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== THE PROGRAMS — three equal tiers ===== */}
      <section id="pricing" className="bg-bone border-t border-line/40">
        <div className="container-velora py-20 lg:py-24">
          <div className="text-center max-w-2xl mx-auto">
            <ChapterEyebrow number="01" label="Step Two · Choose Your Program" />
            <h2
              className="mt-7 font-display text-ink leading-[1.04] tracking-[-0.018em]"
              style={{ fontSize: 'clamp(1.75rem, 3.6vw, 2.5rem)' }}
            >
              Three programs.
              <br />
              <em className="italic font-display text-brown">One standard of care.</em>
            </h2>
            <p className="mt-7 text-[14px] text-ink-soft leading-[1.75] max-w-xl mx-auto">
              Flat per-visit pricing. No prepayment required &mdash; you pay as you go,
              visit by visit.
            </p>
          </div>

          <div className="mt-14 grid md:grid-cols-3 gap-5 lg:gap-6 items-stretch max-w-6xl mx-auto">
            <ProgramTier
              numeral="01"
              title="Medical Weight Management"
              price="$145"
              cadenceTag="16 visits over 12 months"
              total="$2,320 total"
              bullets={[
                'GLP-1 medication strategy',
                'Nutrition and lifestyle guidance',
                'Ongoing physician monitoring',
                'Body composition tracking',
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
                'Symptom tracking',
              ]}
              cta="Explore program"
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
                'Long-term continuity',
              ]}
              cta="Explore program"
              href="/longevity"
            />
          </div>
        </div>
      </section>

      {/* ===== ALSO BILLED SEPARATELY — transparency strip ===== */}
      <section className="bg-paper border-t border-line/40">
        <div className="container-velora py-12 lg:py-14">
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
      <section className="bg-bone border-t border-line/40">
        <div className="container-velora py-20 lg:py-24">
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
      <section className="bg-paper border-t border-line/40">
        <div className="container-velora py-20 lg:py-24">
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

      {/* ===== Tight brown closer — single decisive action ===== */}
      <section className="bg-brown text-cream">
        <div className="container-velora py-12 lg:py-14">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] items-center gap-8">
            <div className="text-center md:text-left">
              <h2
                className="font-display leading-[1.06] tracking-[-0.012em]"
                style={{ fontSize: 'clamp(1.375rem, 2.4vw, 1.875rem)' }}
              >
                Begin with a consultation.
              </h2>
              <p className="mt-2 text-[12.5px] tracking-[0.18em] uppercase text-cream/70">
                60-minute visit &middot; written plan &middot;{' '}
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
    </>
  )
}

/* Helpers */

function ChapterEyebrow({ number, label }: { number: string; label: string }) {
  return (
    <div className="inline-flex items-center gap-3">
      <span className="w-6 h-px bg-gold/70" />
      <p className="text-[10px] tracking-[0.42em] uppercase text-brown font-semibold">
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
        'relative flex flex-col p-8 lg:p-10 rounded-2xl transition-all',
        featured
          ? 'bg-brown text-cream ring-1 ring-brown shadow-[0_36px_70px_-28px_rgba(124,84,54,0.55)]'
          : 'bg-cream border border-line/60 shadow-[0_28px_55px_-30px_rgba(74,52,28,0.4)]',
      ].join(' ')}
    >
      {featured && (
        <p className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-ink px-3.5 py-1 text-[9px] tracking-[0.32em] uppercase font-semibold rounded-md whitespace-nowrap">
          Most Chosen
        </p>
      )}

      <div className="flex items-baseline justify-between">
        <p
          className={[
            'font-display italic leading-none tracking-[-0.02em]',
            featured ? 'text-gold/85' : 'text-brown/65',
          ].join(' ')}
          style={{ fontSize: '40px' }}
        >
          {numeral}
        </p>
        <div className={['w-8 h-px', featured ? 'bg-gold' : 'bg-gold/70'].join(' ')} />
      </div>

      <h3
        className={[
          'mt-6 font-display leading-[1.15] tracking-[-0.012em]',
          featured ? 'text-cream' : 'text-ink',
        ].join(' ')}
        style={{ fontSize: 'clamp(1.25rem, 2vw, 1.5rem)' }}
      >
        {title}
      </h3>

      <div className="mt-7 flex items-baseline gap-2">
        <span className={['font-display text-[48px] leading-none tracking-[-0.02em]', featured ? 'text-cream' : 'text-ink'].join(' ')}>
          {price}
        </span>
        <span className={['text-[12px] italic', featured ? 'text-cream/70' : 'text-ink-soft'].join(' ')}>/ visit</span>
      </div>
      <p className={['mt-2 text-[10px] tracking-[0.28em] uppercase font-semibold', featured ? 'text-gold' : 'text-brown'].join(' ')}>
        {cadenceTag}
      </p>
      <p className={['mt-1 text-[11.5px]', featured ? 'text-cream/75' : 'text-ink-soft'].join(' ')}>
        {total}
      </p>

      <div className={['mt-7 w-full h-px', featured ? 'bg-cream/20' : 'bg-line/70'].join(' ')} />

      <ul className={['mt-6 space-y-3 text-[13.5px] flex-1', featured ? 'text-cream/85' : 'text-ink-soft'].join(' ')}>
        {bullets.map((b) => (
          <li key={b} className="flex items-start gap-2.5">
            <span className={['mt-0.5 size-[18px] rounded-full flex items-center justify-center shrink-0', featured ? 'bg-cream/15 text-gold' : 'bg-brown/10 text-brown'].join(' ')}>
              <Check className="size-2.5" strokeWidth={2.6} />
            </span>
            <span className="leading-[1.55]">{b}</span>
          </li>
        ))}
      </ul>

      <Link
        href={href}
        className={[
          'group/cta mt-8 inline-flex items-center justify-center gap-2 w-full px-5 py-4 sm:py-3.5 rounded-md text-[12px] sm:text-[10.5px] tracking-[0.24em] sm:tracking-[0.28em] uppercase font-semibold transition-colors',
          featured
            ? 'bg-cream text-ink hover:bg-paper'
            : 'border border-brown text-brown hover:bg-brown hover:text-cream',
        ].join(' ')}
      >
        {cta}
        <ArrowRight className="size-3.5 transition-transform group-hover/cta:translate-x-0.5" />
      </Link>
    </div>
  )
}
