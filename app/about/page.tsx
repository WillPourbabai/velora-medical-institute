import Link from 'next/link'
import type { Metadata } from 'next'
import { ArrowUpRight, Stethoscope, Activity, FlaskConical, ShieldCheck, ClipboardList, Sparkles } from 'lucide-react'
import { PageHero } from '@/components/site/page-hero'
import { Section, SectionHeading, NumberedTag } from '@/components/site/section'

export const metadata: Metadata = {
  title: 'About Velora Medical Institute',
  description:
    'Velora Medical Institute is a physician-directed, direct-pay telemedicine practice focused on metabolic health, weight management, and hormone optimization.',
}

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Velora"
        title={<>Sustained improvement, <em className="not-italic text-sage">measured one</em> visit at a time.</>}
        subtitle="Velora Medical Institute is a physician-directed, direct-pay telemedicine practice focused on metabolic health, weight management, and hormone optimization. Our work is built around a single principle: the right care, applied consistently."
        primary={{ href: '/book', label: 'Book Initial Consultation' }}
        secondary={{ href: '/physicians', label: 'Meet Our Physicians' }}
      />

      {/* Manifesto */}
      <Section bg="bone">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Our Standard"
              title={<>Care directed by <em className="not-italic text-sage">physicians</em> — not protocols.</>}
            />
          </div>
          <div className="lg:col-span-7 space-y-7 text-[16.5px] leading-relaxed text-ink-soft">
            <p>
              Most weight-loss and hormone clinics operate on standardized templates: a fixed protocol,
              a fixed cadence, a fixed prescription. That model can produce short-term wins, but it
              rarely produces durable, individualized results.
            </p>
            <p>
              Velora is built differently. Every plan starts with a comprehensive physician evaluation
              and is refined continuously based on your laboratory data, symptoms, and clinical
              response. The result is care that adapts as you do.
            </p>
            <p>
              Our physicians are <strong className="text-ink font-medium">double board-certified</strong>{' '}
              in Internal Medicine and Obesity Medicine, and our practice operates as a direct-pay
              telemedicine clinic — eliminating the limits insurance places on treatment cadence,
              laboratory ordering, and follow-up depth.
            </p>
          </div>
        </div>
      </Section>

      {/* Pillars */}
      <Section bg="cream">
        <SectionHeading
          eyebrow="What We Do"
          title={<>Two clinical specialties, <em className="not-italic text-sage">one standard</em>.</>}
        />
        <div className="mt-14 grid md:grid-cols-2 gap-6">
          <Pillar
            icon={<Activity className="size-5" />}
            tagline="Medical Weight Management"
            title="Evidence-based, sustainable weight care"
            body="Comprehensive metabolic evaluation, evidence-based medications when appropriate, and structured follow-up designed for long-term outcomes."
            href="/weight-management"
          />
          <Pillar
            icon={<FlaskConical className="size-5" />}
            tagline="Hormone Therapy (BHRT)"
            title="Individualized hormone optimization"
            body="Bioidentical hormone therapy guided by clinical assessment and laboratory data — for men and women experiencing symptoms of hormonal imbalance."
            href="/hormone-therapy"
          />
        </div>
      </Section>

      {/* Principles */}
      <Section bg="bone">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Operating Principles"
              title={<>How we <em className="not-italic text-sage">practice</em>.</>}
            />
          </div>
          <div className="lg:col-span-7">
            <ul className="divide-y divide-line border-y border-line">
              {[
                { n: '01', title: 'Comprehensive evaluation, every time', body: 'Each treatment plan begins with a thorough clinical assessment — not a template.' },
                { n: '02', title: 'Safe, evidence-based prescribing', body: 'Medication selection is grounded in current evidence and your personal risk profile.' },
                { n: '03', title: 'Continuous monitoring and adjustment', body: 'Therapy is refined as your data and outcomes inform the plan.' },
                { n: '04', title: 'Structured follow-up', body: 'Regular touchpoints turn good initial responses into lasting outcomes.' },
                { n: '05', title: 'Transparent, direct-pay care', body: 'No insurance limits on cadence, labs, or treatment depth — and no hidden fees.' },
              ].map((p) => (
                <li key={p.n} className="grid grid-cols-[auto_1fr] gap-6 py-6 items-start">
                  <NumberedTag n={p.n} />
                  <div>
                    <h3 className="font-display text-[20px] leading-tight">{p.title}</h3>
                    <p className="mt-2 text-[15px] text-ink-soft leading-relaxed">{p.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Practice facts */}
      <Section bg="ink">
        <SectionHeading
          eyebrow="The Practice"
          inverted
          title={<>How Velora <em className="not-italic text-gold">operates</em>.</>}
        />
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-cream/10 border border-cream/10">
          {[
            { icon: <Stethoscope className="size-5" />, label: 'Care Model', value: 'Physician-directed, telemedicine-first' },
            { icon: <ShieldCheck className="size-5" />, label: 'Payment Model', value: 'Direct-pay, transparent pricing' },
            { icon: <ClipboardList className="size-5" />, label: 'Visits', value: '60-min initial · 30-min follow-up' },
            { icon: <Sparkles className="size-5" />, label: 'Specialty Focus', value: 'Metabolic & hormonal optimization' },
          ].map((f) => (
            <div key={f.label} className="bg-ink p-7 lg:p-8">
              <span className="size-10 rounded-full bg-cream/5 text-gold flex items-center justify-center">
                {f.icon}
              </span>
              <p className="mt-6 eyebrow text-gold">{f.label}</p>
              <p className="mt-2 font-display text-[20px] text-cream leading-tight">{f.value}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <section className="bg-cream">
        <div className="container-velora py-24 md:py-28 text-center">
          <span className="eyebrow">Begin Your Care</span>
          <h2
            className="mt-6 font-display leading-[1.04] tracking-[-0.02em] text-ink max-w-3xl mx-auto"
            style={{ fontSize: 'clamp(2rem, 5.5vw, 3.625rem)' }}
          >
            Ready to begin <em className="not-italic text-sage">physician-guided</em> care?
          </h2>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link href="/book" className="btn-primary px-7 py-4">
              Book Initial Consultation <ArrowUpRight className="size-3.5" />
            </Link>
            <Link href="/contact" className="btn-secondary px-7 py-4">Contact the Practice</Link>
          </div>
        </div>
      </section>
    </>
  )
}

function Pillar({
  icon, tagline, title, body, href,
}: {
  icon: React.ReactNode; tagline: string; title: string; body: string; href: string
}) {
  return (
    <Link href={href} className="group bg-paper border border-line p-8 lg:p-10 hover:border-sage transition-all">
      <span className="size-12 rounded-full bg-sage-soft text-sage flex items-center justify-center">{icon}</span>
      <p className="mt-7 eyebrow">{tagline}</p>
      <h3 className="mt-3 font-display text-[26px] leading-tight">{title}</h3>
      <p className="mt-4 text-[15px] text-ink-soft leading-relaxed">{body}</p>
      <span className="mt-7 inline-flex items-center gap-1.5 text-ink group-hover:text-sage transition-colors text-[14px] font-medium">
        Learn more <ArrowUpRight className="size-3.5" />
      </span>
    </Link>
  )
}
