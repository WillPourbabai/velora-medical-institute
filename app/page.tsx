import Link from 'next/link'
import { Fragment } from 'react'
import {
  ArrowUpRight,
  Stethoscope,
  Activity,
  Calendar,
  CalendarClock,
  ClipboardPlus,
  ShieldCheck,
  FlaskConical,
  CheckCircle2,
  Lock,
  Heart,
  TrendingUp,
} from 'lucide-react'
import { HomeHero } from '@/components/site/home-hero'
import { Section, SectionHeading, NumberedTag } from '@/components/site/section'
import { FaqAccordion } from '@/components/site/faq-accordion'

export default function HomePage() {
  return (
    <>
      <HomeHero />

      {/* Approach */}
      <Section bg="bone">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <span className="eyebrow">Our Approach</span>
            <h2
              className="font-display leading-[1.04] tracking-[-0.018em] text-ink mt-5"
              style={{ fontSize: 'clamp(2rem, 4.5vw, 3.25rem)' }}
            >
              A physician-guided
              <br />
              path to{' '}
              <em className="not-italic text-gold">metabolic</em>
              <br />
              and <em className="not-italic text-gold">hormonal</em> health.
            </h2>
            <div className="mt-9 hidden lg:block">
              <Link href="/about" className="btn-link">
                Read more about our methodology
                <ArrowUpRight className="size-3.5" />
              </Link>
            </div>
          </div>
          <div className="lg:col-span-7 space-y-8 text-[16.5px] leading-relaxed text-ink-soft">
            <p>
              Many patients seek care after difficulty achieving results with prior approaches.
              Common concerns include difficulty losing weight, persistent fatigue, weight regain
              despite lifestyle efforts, and symptoms suggestive of hormonal imbalance.
            </p>
            <ul className="space-y-3">
              {[
                'Difficulty losing weight or maintaining results',
                'Persistent fatigue or low energy',
                'Weight regain despite consistent lifestyle efforts',
                'Symptoms suggestive of hormonal imbalance',
              ].map((c) => (
                <li key={c} className="flex items-start gap-3">
                  <span className="size-1.5 rounded-full bg-gold mt-2.5 shrink-0" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
            <p>
              These concerns are often influenced by underlying metabolic and physiological factors
              that require proper medical evaluation. At <strong className="text-ink font-medium">Velora Medical Institute</strong>,
              care focuses on identifying these factors and developing an individualized,
              physician-guided treatment plan, with ongoing monitoring and adjustment over time.
            </p>
          </div>
        </div>
      </Section>

      {/* Services */}
      <Section bg="cream">
        <SectionHeading
          eyebrow="Our Services"
          title={<>Two practices, one <em className="not-italic text-gold">standard of care</em>.</>}
        />
        <div className="mt-14 grid lg:grid-cols-2 gap-6 lg:gap-8">
          <ServiceCard
            no="01"
            tagline="Medical Weight Management"
            title="Comprehensive, physician-guided weight care."
            description="Safe, effective, and sustainable weight management built on detailed medical evaluation, evidence-based medications when appropriate, and ongoing monitoring."
            bullets={[
              'Detailed medical evaluation',
              'Evidence-based medication options when appropriate',
              'Ongoing monitoring and treatment adjustment',
            ]}
            href="/weight-management"
            icon={<Activity className="size-5" />}
          />
          <ServiceCard
            no="02"
            tagline="Hormone Therapy (BHRT)"
            title="Bioidentical hormone therapy, individually tuned."
            description="Physician-directed evaluation and management of hormone-related conditions affecting energy, metabolic function, and overall well-being. Treatment is grounded in clinical assessment and laboratory data."
            bullets={[
              'Comprehensive symptom and laboratory evaluation',
              'Personalized therapy with continuous oversight',
              'Dose optimization for sustained results',
            ]}
            href="/hormone-therapy"
            icon={<FlaskConical className="size-5" />}
          />
        </div>
      </Section>

      {/* How it works — design 2 */}
      <HowItWorksSection />

      {/* Pricing — design 4 */}
      <PricingSection />

      {/* Programs */}
      <Section bg="ink">
        <div className="grid lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow="Structured Programs"
              inverted
              title={<>Continuity, accountability, <em className="not-italic text-gold">and oversight</em>.</>}
              intro="For patients seeking consistent care and long-term results, structured programs provide continuity, accountability, and ongoing clinical oversight — at a reduced per-visit investment."
            />
          </div>
          <div className="lg:col-span-5 lg:text-right">
            <Link href="/programs" className="btn bg-cream text-ink hover:bg-gold px-6 py-3.5">
              View Program Options
              <ArrowUpRight className="size-3.5" />
            </Link>
          </div>
        </div>

        <div className="mt-14 grid lg:grid-cols-3 gap-6">
          <ProgramCard
            tagline="Weight Management"
            visits="16"
            title="Annual Weight Management Program"
            body="Structured follow-up with continuous monitoring and treatment adjustment over a full year of care."
            perVisit="$145"
            total="$2,320"
            href="/programs#weight"
          />
          <ProgramCard
            tagline="Hormone Therapy"
            visits="5"
            title="Hormone Therapy Program"
            body="Focused evaluation, laboratory review, and ongoing optimization across five physician visits."
            perVisit="$145"
            total="$725"
            href="/programs#hormone"
            featured
          />
          <ProgramCard
            tagline="Combined Care"
            visits="16"
            title="Integrated Combined Program"
            body="Coordinated care addressing both metabolic and hormonal health, with extended visits for integrated management."
            perVisit="$180"
            total="$2,880"
            href="/programs#combined"
          />
        </div>

        <ul className="mt-12 grid md:grid-cols-3 gap-8 text-[14px] text-cream/75 border-t border-cream/10 pt-10">
          <li className="flex items-start gap-3">
            <span className="size-1.5 rounded-full bg-gold mt-2 shrink-0" />
            Consistent, scheduled physician follow-up
          </li>
          <li className="flex items-start gap-3">
            <span className="size-1.5 rounded-full bg-gold mt-2 shrink-0" />
            Safe, medically supervised treatment
          </li>
          <li className="flex items-start gap-3">
            <span className="size-1.5 rounded-full bg-gold mt-2 shrink-0" />
            Long-term clinical improvement
          </li>
        </ul>
      </Section>

      {/* Physicians */}
      <Section bg="bone">
        <SectionHeading
          eyebrow="Meet Our Physicians"
          title={<>Care directed by <em className="not-italic text-gold">double board-certified</em> physicians.</>}
          align="center"
        />
        <div className="mt-14 grid lg:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          <PhysicianCard
            name="Afshin Amini, MD"
            initials="AA"
            credentials="Internal Medicine · Obesity Medicine"
            bio="Dr. Amini focuses on metabolic health, weight management, and hormone therapy — providing individualized, physician-directed care. His approach integrates thorough clinical assessment with evidence-based treatment and continuous monitoring to achieve precise, safe, long-term optimization."
          />
          <PhysicianCard
            name="Amirseena Tolebeyan, MD"
            initials="AT"
            credentials="Internal Medicine · Obesity Medicine"
            bio="Dr. Tolebeyan focuses on metabolic health, weight management, and hormone therapy — delivering structured, evidence-based care. His approach combines comprehensive clinical assessment with individualized treatment and continuous monitoring to ensure precise, safe, long-term optimization."
          />
        </div>
        <div className="mt-12 text-center">
          <Link href="/physicians" className="btn-link">
            Read more about our physicians
            <ArrowUpRight className="size-3.5" />
          </Link>
        </div>
      </Section>

      {/* Testimonials */}
      <Section bg="sage-soft">
        <SectionHeading
          eyebrow="Patient Experience"
          title={<>Representative experiences from physician-guided care.</>}
          intro="Individual results may vary. Treatment plans are individualized based on clinical evaluation and ongoing response to care."
        />
        <div className="mt-14 grid md:grid-cols-2 gap-6">
          {[
            { initials: 'A.M.', quote: 'Having regular follow-up visits made a real difference for me. My treatment was adjusted along the way based on how I was responding, which helped me stay consistent and see steady progress over time.' },
            { initials: 'S.K.', quote: 'I felt like my care was truly personalized. My physician took the time to review my labs, explain everything clearly, and adjust the plan in a way that made sense for my situation.' },
            { initials: 'R.T.', quote: 'The structured follow-up and ongoing monitoring made the process feel much more manageable than anything I had tried before. It helped me stay accountable and more confident in the process.' },
            { initials: 'L.D.', quote: 'Telemedicine made it easy to stay on track. I was able to keep up with my appointments without it interfering with my schedule, which made a big difference in staying consistent.' },
          ].map((t) => (
            <figure key={t.initials} className="bg-paper border border-line p-8 md:p-10 relative">
              <span className="absolute top-6 right-7 font-display italic text-[80px] text-gold/20 leading-none select-none">&ldquo;</span>
              <blockquote className="font-display text-[20px] md:text-[22px] leading-[1.4] tracking-[-0.005em] text-ink relative">
                {t.quote}
              </blockquote>
              <figcaption className="mt-7 flex items-center gap-3 pt-5 border-t border-line">
                <span className="size-9 rounded-full bg-gold text-ink flex items-center justify-center text-[12px] font-medium tracking-wider">
                  {t.initials}
                </span>
                <span className="text-[12px] tracking-[0.16em] uppercase text-muted-foreground">
                  Verified Patient
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      {/* Why */}
      <Section bg="bone">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Why Velora"
              title={<>Sustained improvement, <em className="not-italic text-gold">not</em> short-term change.</>}
            />
          </div>
          <div className="lg:col-span-7">
            <ul className="divide-y divide-line border-y border-line">
              {[
                { n: '01', title: 'Individualized treatment based on clinical evaluation', body: 'No fixed protocols — every plan reflects your physiology, history, and goals.' },
                { n: '02', title: 'Safe prescribing with appropriate monitoring', body: 'Medication selection is grounded in evidence and clinical safety.' },
                { n: '03', title: 'Ongoing adjustment based on clinical response', body: 'Therapy is refined continuously as your data and outcomes inform the plan.' },
                { n: '04', title: 'Structured follow-up to support long-term outcomes', body: 'Regular touchpoints turn good results into lasting ones.' },
              ].map((row) => (
                <li key={row.n} className="grid grid-cols-[auto_1fr] gap-6 py-6 items-start">
                  <NumberedTag n={row.n} />
                  <div>
                    <h3 className="font-display text-[20px] leading-tight text-ink">{row.title}</h3>
                    <p className="mt-2 text-[15px] text-ink-soft leading-relaxed">{row.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section bg="cream">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-4 lg:sticky lg:top-32">
            <SectionHeading
              eyebrow="Frequently Asked"
              title={<>Common <em className="not-italic text-gold">questions</em>, answered by physicians.</>}
            />
            <p className="mt-7 text-[15px] text-ink-soft leading-relaxed">
              Don&rsquo;t see your question? Schedule a consultation for a comprehensive,
              physician-guided evaluation tailored to your needs.
            </p>
            <div className="mt-7 flex flex-col gap-3">
              <Link href="/faq" className="btn-link">View all questions <ArrowUpRight className="size-3.5" /></Link>
              <Link href="/book" className="btn-link">Book your consultation <ArrowUpRight className="size-3.5" /></Link>
            </div>
          </div>
          <div className="lg:col-span-8">
            <FaqAccordion
              defaultOpen={0}
              items={[
                {
                  q: 'Are visits conducted through telemedicine?',
                  a: 'Yes. All consultations and follow-up visits are conducted via secure telemedicine, allowing you to receive physician-guided care from the convenience of your home.',
                },
                {
                  q: 'What are GLP-1 medications, and how do they support weight management?',
                  a: 'GLP-1 receptor agonists are medications that help regulate appetite, slow gastric emptying, and improve metabolic signaling. When used appropriately as part of a comprehensive treatment plan, they can support meaningful and sustainable weight reduction.',
                },
                {
                  q: 'Is medication required as part of treatment?',
                  a: 'No. Treatment plans are individualized. While medications may be beneficial for some patients, care may also include nutrition guidance, lifestyle strategies, and metabolic evaluation without the use of medication.',
                },
                {
                  q: 'Who may benefit from hormone therapy?',
                  a: 'Hormone therapy may be appropriate for individuals experiencing symptoms such as fatigue, low energy, sleep disturbances, changes in metabolism, decreased libido, mood changes, or menopause-related symptoms.',
                },
                {
                  q: 'How long does it take to notice improvement?',
                  a: 'Some patients begin to notice improvement within several weeks. Full benefits may take a few months as hormone levels are optimized and treatment is adjusted over time.',
                },
              ]}
            />
          </div>
        </div>
      </Section>

      {/* Final CTA */}
      <section className="bg-ink text-cream">
        <div className="container-velora py-24 md:py-32 text-center">
          <span className="eyebrow text-gold">Start Your Care</span>
          <h2
            className="mt-6 font-display leading-[1.02] tracking-[-0.02em] text-cream max-w-4xl mx-auto"
            style={{ fontSize: 'clamp(2.125rem, 6vw, 4.875rem)' }}
          >
            Begin physician-guided treatment with a <em className="not-italic text-gold">comprehensive evaluation</em>.
          </h2>
          <p className="mt-7 text-[16.5px] text-cream/70 max-w-xl mx-auto leading-relaxed">
            Focused on long-term health and sustainable results — directed by physicians from your first visit forward.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link href="/book?type=weight" className="btn bg-gold text-ink hover:bg-cream px-7 py-4">
              Book Weight Management
              <ArrowUpRight className="size-3.5" />
            </Link>
            <Link href="/book?type=hormone" className="btn bg-transparent border border-cream/30 text-cream hover:bg-cream hover:text-ink px-7 py-4">
              Start Hormone Therapy
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

/* ──────────────────────────────────────────────────────────
   How It Works — design 2
   ────────────────────────────────────────────────────────── */

function HowItWorksSection() {
  const steps = [
    {
      n: '01',
      title: ['Schedule', 'Consultation'],
      body: 'Book your initial visit online at a time that fits your schedule.',
      icon: <CalendarClock className="size-7" strokeWidth={1.4} />,
    },
    {
      n: '02',
      title: ['Comprehensive', 'Evaluation'],
      body: 'Your physician reviews your medical history, goals, and relevant labs to get the full picture.',
      icon: <ClipboardPlus className="size-7" strokeWidth={1.4} />,
    },
    {
      n: '03',
      title: ['Personalized', 'Treatment Plan'],
      body: 'A tailored plan is developed including medication, lifestyle strategy, and follow-up schedule.',
      icon: <UserShieldIcon className="size-7" />,
    },
    {
      n: '04',
      title: ['Ongoing Care &', 'Monitoring'],
      body: 'Regular follow-ups ensure your treatment is adjusted based on your progress and goals.',
      icon: <TrendingUp className="size-7" strokeWidth={1.4} />,
    },
  ]

  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      {/* Same warm beam background as pricing for continuity */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(135deg,#F7EFDC_0%,#EFE3C8_55%,#E8D7B5_100%)]" />
      <div
        className="absolute -top-40 -left-32 w-[1100px] h-[700px] -z-10 rotate-[18deg] opacity-70 pointer-events-none"
        style={{
          background:
            'linear-gradient(100deg, rgba(255,250,235,0.95) 0%, rgba(255,247,225,0.6) 35%, rgba(255,240,210,0) 70%)',
          filter: 'blur(40px)',
        }}
        aria-hidden
      />

      <div className="container-velora relative">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3">
            <span className="h-px w-10 bg-gold/60" />
            <p className="text-[11px] tracking-[0.36em] uppercase text-gold font-semibold">
              How It Works
            </p>
            <span className="h-px w-10 bg-gold/60" />
          </div>
          <div className="mt-3 flex justify-center">
            <Sparkle className="size-3 text-gold" />
          </div>
          <h2
            className="mt-4 font-display leading-[1.05] tracking-[-0.02em] text-ink"
            style={{ fontSize: 'clamp(2rem, 6vw, 4.5rem)' }}
          >
            A Simple, Physician-Guided Process
          </h2>
          <div className="mx-auto mt-5 w-20 h-px bg-gold/60" />
          <p className="mt-6 text-[16px] text-ink-soft max-w-xl mx-auto leading-relaxed">
            Personalized care designed around your health, your goals,
            <br className="hidden sm:block" />
            and your life.
          </p>
        </div>

        {/* Step cards with connector dots between */}
        <ol className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] gap-y-12 gap-x-2 lg:gap-x-3 items-start">
          {steps.map((step, idx) => (
            <Fragment key={step.n}>
              <li className="relative pt-7">
                {/* Number badge — solid gold circle sitting on top of the card */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 z-10">
                  <span className="flex items-center justify-center size-11 rounded-full bg-gold text-cream font-display text-[14px] tracking-tight shadow-[0_4px_12px_rgba(201,160,100,0.45)]">
                    {step.n}
                  </span>
                </div>

                {/* Arch card */}
                <div className="relative pt-12 pb-8 px-5 rounded-t-[140px] rounded-b-[28px] border border-gold/25 bg-[radial-gradient(ellipse_at_top,_#FBF6EA_0%,_#F4EAD2_100%)]/60 backdrop-blur-[2px] flex flex-col items-center text-center">
                  {/* Icon circle */}
                  <span className="size-20 rounded-full border border-gold/40 bg-cream/60 text-gold flex items-center justify-center shadow-[inset_0_0_20px_rgba(201,160,100,0.08)]">
                    {step.icon}
                  </span>

                  {/* Sparkle below icon */}
                  <Sparkle className="mt-5 size-3 text-gold" />

                  {/* Title — two lines */}
                  <h3 className="mt-3 font-display text-[24px] leading-[1.15] tracking-[-0.01em] text-ink">
                    {step.title[0]}
                    <br />
                    {step.title[1]}
                  </h3>

                  {/* Body */}
                  <p className="mt-5 text-[13.5px] text-ink-soft leading-[1.6] max-w-[200px]">
                    {step.body}
                  </p>
                </div>
              </li>

              {/* Connector dots between cards (lg+) */}
              {idx < steps.length - 1 && (
                <li
                  aria-hidden
                  className="hidden lg:flex items-center justify-center pt-32 text-gold/55 tracking-[0.4em] text-[14px]"
                >
                  •••
                </li>
              )}
            </Fragment>
          ))}
        </ol>

        {/* Bottom trust strip */}
        <div className="mt-16 rounded-2xl border border-gold/25 bg-[#FBF6EA]/70 backdrop-blur-sm px-6 md:px-10 py-7 grid md:grid-cols-[auto_1fr_auto] gap-y-6 gap-x-8 md:gap-x-12 items-center">
          {/* Left: shield + statement */}
          <div className="flex items-center gap-5">
            <span className="size-14 rounded-full border border-gold/40 bg-cream/60 text-gold flex items-center justify-center shrink-0 shadow-[inset_0_0_18px_rgba(201,160,100,0.1)]">
              <ShieldCheck className="size-6" strokeWidth={1.5} />
            </span>
            <p className="text-[14px] text-ink-soft leading-[1.55] max-w-[340px]">
              All care is delivered through secure telemedicine visits with continuous physician oversight.
            </p>
          </div>

          {/* Vertical divider */}
          <div className="hidden md:block h-16 w-px bg-gold/30 mx-auto" />

          {/* Right: 4 trust badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-6">
            <TrustBadge icon={<Lock className="size-5" strokeWidth={1.5} />} label="HIPAA Compliant" />
            <TrustBadge icon={<ShieldCheck className="size-5" strokeWidth={1.5} />} label="Secure & Private" />
            <TrustBadge icon={<Stethoscope className="size-5" strokeWidth={1.5} />} label="Physician Led Care" />
            <TrustBadge icon={<Heart className="size-5" strokeWidth={1.5} />} label="Focused On You" />
          </div>
        </div>
      </div>
    </section>
  )
}

function TrustBadge({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex flex-col items-center text-center gap-2">
      <span className="size-11 rounded-full border border-gold/40 bg-cream/60 text-gold flex items-center justify-center">
        {icon}
      </span>
      <span className="text-[10px] tracking-[0.22em] uppercase text-ink-soft font-medium leading-[1.4]">
        {label.split(' ').map((w, i, arr) => (
          <span key={i}>
            {w}
            {i < arr.length - 1 && <br />}
          </span>
        ))}
      </span>
    </div>
  )
}

/* User-with-shield icon (matches step 03 in reference) */
function UserShieldIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <circle cx="9.5" cy="7.5" r="3" />
      <path d="M3.5 19c0-3 2.7-5 6-5 1.1 0 2.1.2 3 .6" />
      <path d="M14.5 13.5l3.5-1.5 3.5 1.5v3c0 2.5-2 4.4-3.5 5-1.5-.6-3.5-2.5-3.5-5v-3z" />
      <path d="M16.5 16l1.2 1.2 2.3-2.3" />
    </svg>
  )
}

/* ──────────────────────────────────────────────────────────
   Pricing — design 4
   ────────────────────────────────────────────────────────── */

function PricingSection() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      {/* Warm champagne background with diagonal light beam (matches reference) */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(135deg,#F7EFDC_0%,#EFE3C8_55%,#E8D7B5_100%)]" />
      <div
        className="absolute -top-40 -left-32 w-[1100px] h-[700px] -z-10 rotate-[18deg] opacity-70 pointer-events-none"
        style={{
          background:
            'linear-gradient(100deg, rgba(255,250,235,0.95) 0%, rgba(255,247,225,0.6) 35%, rgba(255,240,210,0) 70%)',
          filter: 'blur(40px)',
        }}
        aria-hidden
      />

      <div className="container-velora relative">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[11px] tracking-[0.36em] uppercase text-gold font-medium">
            Pricing
          </p>
          <div className="mx-auto mt-3 flex items-center justify-center gap-2">
            <span className="h-px w-10 bg-gold/60" />
            <Sparkle className="size-2.5 text-gold" />
            <span className="h-px w-10 bg-gold/60" />
          </div>
          <h2
            className="mt-6 font-display leading-[1.05] tracking-[-0.018em] text-ink"
            style={{ fontSize: 'clamp(2rem, 5.5vw, 4.25rem)' }}
          >
            Transparent Pricing.
            <br />
            Structured Physician-Led Care.
          </h2>
          <p className="mt-6 text-[16px] text-ink-soft max-w-2xl mx-auto leading-relaxed">
            Personalized programs designed for weight management, hormone optimization,
            and long-term metabolic health.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-start">
          <PricingCard
            title="Medical Weight Management"
            price="$145"
            per="/ visit"
            subline="16 visits over 12 months"
            features={[
              'Physician-guided care',
              'Medication management',
              'Ongoing monitoring',
              'Treatment adjustments',
            ]}
            cta="Explore Weight Program"
            href="/weight-management"
          />
          <PricingCard
            title="Combined Program"
            price="$180"
            per="/ visit"
            subline="21 visits over 12 months"
            features={[
              'Weight + hormone care',
              'Integrated treatment plan',
              'More complete follow-up',
              'Long-term optimization',
            ]}
            cta="Start Combined Care"
            href="/programs#combined"
            featured
          />
          <PricingCard
            title="Hormone Optimization"
            price="$145"
            per="/ visit"
            subline="5 visits over 12 months"
            features={[
              'Hormone assessment',
              'Personalized treatment',
              'Dose refinement',
              'Ongoing monitoring',
            ]}
            cta="Explore Hormone Program"
            href="/hormone-therapy"
          />
        </div>

        {/* Individual visits row */}
        <div className="mt-10 bg-[#FBF6EA]/85 backdrop-blur-sm rounded-2xl border border-line/60 shadow-[0_4px_30px_rgba(74,52,28,0.06)] px-6 md:px-10 py-6 grid gap-6 lg:gap-10 lg:grid-cols-[auto_1fr_1fr] items-center">
          <div className="flex items-center gap-4">
            <span className="size-12 rounded-full bg-gold/15 flex items-center justify-center text-gold">
              <Calendar className="size-5" />
            </span>
            <span className="text-[11px] tracking-[0.32em] uppercase text-ink font-medium">
              Individual Visits
            </span>
          </div>
          <IndividualVisit
            label="Initial Consultation"
            price="$295"
            meta="60 minutes"
          />
          <IndividualVisit
            label="Follow-Up Visit"
            price="$195"
            meta="30 minutes"
          />
        </div>

        <p className="mt-6 italic text-[13px] text-muted-foreground text-center">
          For patients who prefer flexible scheduling without a structured program.
        </p>
      </div>
    </section>
  )
}

function PricingCard({
  title,
  price,
  per,
  subline,
  features,
  cta,
  href,
  featured,
}: {
  title: string
  price: string
  per: string
  subline: string
  features: string[]
  cta: string
  href: string
  featured?: boolean
}) {
  return (
    <div
      className={[
        'relative flex flex-col rounded-2xl bg-[#FBF6EA] px-7 lg:px-9 pt-12 pb-9 transition-all duration-300',
        featured
          ? 'border-2 border-gold shadow-[0_20px_60px_-20px_rgba(201,160,100,0.55)] lg:-translate-y-2'
          : 'border border-line/40 shadow-[0_8px_30px_-12px_rgba(74,52,28,0.18)] hover:shadow-[0_14px_40px_-12px_rgba(201,160,100,0.35)]',
      ].join(' ')}
    >
      {/* Recommended tab — flush to top, integrated with gold border */}
      {featured && (
        <span className="absolute -top-[14px] left-1/2 -translate-x-1/2 bg-gold text-ink px-5 py-1.5 text-[10px] tracking-[0.32em] uppercase font-semibold rounded-md whitespace-nowrap shadow-sm">
          Recommended
        </span>
      )}

      {/* Sparkle ornament at top-center */}
      <div className="flex justify-center mb-5">
        <Sparkle className="size-4 text-gold" />
      </div>

      {/* Title — center, two-line capable */}
      <h3 className="font-display text-[26px] md:text-[28px] leading-[1.15] tracking-[-0.005em] text-ink text-center min-h-[64px] flex items-center justify-center px-2">
        {title}
      </h3>

      {/* Price */}
      <div className="mt-5 text-center">
        <span className="font-display text-[64px] md:text-[68px] leading-none tracking-tight text-ink">
          {price}
        </span>
        <span className="ml-1 text-[15px] text-muted-foreground italic">
          {per}
        </span>
      </div>

      {/* Subline */}
      <p className="mt-3 text-[10.5px] tracking-[0.28em] uppercase text-gold text-center font-medium">
        {subline}
      </p>

      {/* Hairline divider */}
      <div className="mt-6 mx-auto w-16 h-px bg-line" />

      {/* Features */}
      <ul className="mt-6 space-y-3 text-[14.5px] text-ink-soft">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-3">
            <CheckCircle2 className="size-4 mt-0.5 shrink-0 text-gold" strokeWidth={1.6} />
            <span>{f}</span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <Link
        href={href}
        className={[
          'mt-8 inline-flex items-center justify-center gap-2 w-full px-6 py-4 text-[11.5px] tracking-[0.28em] uppercase font-semibold rounded-md transition-colors',
          featured
            ? 'bg-gold text-ink hover:bg-ink hover:text-gold'
            : 'bg-ink text-gold hover:bg-gold hover:text-ink',
        ].join(' ')}
      >
        {cta}
      </Link>
    </div>
  )
}

function IndividualVisit({
  label,
  price,
  meta,
}: {
  label: string
  price: string
  meta: string
}) {
  return (
    <div className="flex items-center gap-4 lg:border-l lg:border-line/60 lg:pl-10">
      <span className="size-1.5 rounded-full bg-gold shrink-0" />
      <div className="flex-1">
        <p className="text-[14px] text-ink font-medium leading-tight">{label}</p>
        <div className="mt-1.5 flex items-baseline gap-1.5">
          <span className="font-display text-[26px] text-ink leading-none">{price}</span>
          <span className="text-[12.5px] text-muted-foreground italic">/ {meta}</span>
        </div>
      </div>
    </div>
  )
}

function Sparkle({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" className={className} aria-hidden>
      <path
        d="M8 1 L9.2 6.8 L15 8 L9.2 9.2 L8 15 L6.8 9.2 L1 8 L6.8 6.8 Z"
        fill="currentColor"
      />
    </svg>
  )
}

/* ──────────────────────────────────────────────────────────
   Reused cards
   ────────────────────────────────────────────────────────── */

function ServiceCard({
  no, tagline, title, description, bullets, href, icon,
}: {
  no: string; tagline: string; title: string; description: string;
  bullets: string[]; href: string; icon: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="group bg-paper border border-line p-8 md:p-10 lg:p-12 flex flex-col transition-all hover:border-gold hover:-translate-y-0.5 duration-300"
    >
      <div className="flex items-start justify-between">
        <span className="size-12 rounded-full bg-sage-soft text-gold flex items-center justify-center">
          {icon}
        </span>
        <span className="font-display italic text-gold text-[20px]">{no}</span>
      </div>
      <p className="mt-8 eyebrow">{tagline}</p>
      <h3 className="mt-3 font-display text-[28px] md:text-[34px] leading-[1.1] tracking-[-0.01em] text-ink">
        {title}
      </h3>
      <p className="mt-5 text-[15.5px] leading-relaxed text-ink-soft">{description}</p>
      <ul className="mt-7 space-y-2.5">
        {bullets.map((b) => (
          <li key={b} className="flex items-start gap-3 text-[14.5px] text-ink-soft">
            <span className="size-1.5 rounded-full bg-gold mt-2 shrink-0" />
            {b}
          </li>
        ))}
      </ul>
      <span className="mt-9 inline-flex items-center gap-1.5 text-ink group-hover:text-gold transition-colors text-[14px] font-medium">
        Learn More
        <ArrowUpRight className="size-3.5" />
      </span>
    </Link>
  )
}

function ProgramCard({
  tagline, visits, title, body, perVisit, total, href, featured,
}: {
  tagline: string; visits: string; title: string; body: string;
  perVisit: string; total: string; href: string; featured?: boolean;
}) {
  return (
    <Link
      href={href}
      className={[
        'group p-8 lg:p-10 flex flex-col transition-all duration-300 border',
        featured
          ? 'bg-cream text-ink border-gold hover:-translate-y-1'
          : 'bg-ink/40 text-cream border-cream/15 hover:bg-ink/60',
      ].join(' ')}
    >
      <div className="flex items-baseline justify-between">
        <span className={featured ? 'eyebrow' : 'eyebrow text-gold'}>{tagline}</span>
        <span className={`font-display ${featured ? 'text-ink' : 'text-cream'} text-[44px] leading-none`}>
          {visits}
          <span className="text-[14px] tracking-tight font-sans uppercase opacity-60 ml-1.5">visits</span>
        </span>
      </div>
      <h3 className={`mt-7 font-display text-[26px] leading-[1.15] tracking-[-0.005em] ${featured ? 'text-ink' : 'text-cream'}`}>
        {title}
      </h3>
      <p className={`mt-4 text-[14.5px] leading-relaxed ${featured ? 'text-ink-soft' : 'text-cream/70'}`}>
        {body}
      </p>
      <div className={`mt-8 pt-6 border-t ${featured ? 'border-line' : 'border-cream/15'} grid grid-cols-2 gap-4`}>
        <div>
          <p className={`text-[10.5px] tracking-[0.2em] uppercase ${featured ? 'text-gold' : 'text-gold'}`}>Per Visit</p>
          <p className={`mt-1 font-display text-[22px] ${featured ? 'text-ink' : 'text-cream'}`}>{perVisit}</p>
        </div>
        <div>
          <p className={`text-[10.5px] tracking-[0.2em] uppercase ${featured ? 'text-gold' : 'text-gold'}`}>Program Total</p>
          <p className={`mt-1 font-display text-[22px] ${featured ? 'text-ink' : 'text-cream'}`}>{total}</p>
        </div>
      </div>
      <span className={`mt-7 inline-flex items-center gap-1.5 text-[13.5px] font-medium ${featured ? 'text-ink' : 'text-cream'} group-hover:text-gold`}>
        View program details
        <ArrowUpRight className="size-3.5" />
      </span>
    </Link>
  )
}

function PhysicianCard({
  name, initials, credentials, bio,
}: {
  name: string; initials: string; credentials: string; bio: string;
}) {
  return (
    <div className="bg-paper border border-line p-8 md:p-10 group hover:border-gold transition-colors">
      <div className="flex items-center gap-5">
        <span className="size-16 rounded-full bg-ink text-gold font-display text-[26px] flex items-center justify-center">
          {initials}
        </span>
        <div>
          <h3 className="font-display text-[26px] leading-tight">{name}</h3>
          <p className="mt-1 eyebrow">{credentials}</p>
        </div>
      </div>
      <p className="mt-7 text-[15px] text-ink-soft leading-relaxed">{bio}</p>
      <p className="mt-6 text-[12px] tracking-[0.18em] uppercase text-gold">Double Board-Certified</p>
    </div>
  )
}
