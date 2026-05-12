import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import {
  Calendar,
  ArrowRight,
  Check,
  ShieldCheck,
  Activity,
  Stethoscope,
  HeartPulse,
  Sparkles,
  TrendingUp,
  Microscope,
} from 'lucide-react'
import { FaqAccordion } from '@/components/site/faq-accordion'

export const metadata: Metadata = {
  title: 'Longevity Medicine · Metabolic & Hormone Optimization',
  description:
    'Physician-guided longevity, metabolic, and hormone optimization. Individualized care directed by double board-certified physicians at Velora Medical Institute.',
}

export default function LongevityPage() {
  return (
    <>
      {/* ===== HERO — split: editorial copy left, framework photo right ===== */}
      <section className="relative bg-bone overflow-hidden">
        <div className="container-velora pt-12 lg:pt-16 pb-16 lg:pb-20">
          <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] gap-10 lg:gap-16 xl:gap-20 items-center min-h-[calc(100vh-78px-160px)]">
            {/* LEFT — editorial copy */}
            <div className="max-w-[560px]">
              <p className="text-[10px] sm:text-[10.5px] tracking-[0.46em] uppercase text-brown font-semibold">
                Longevity Medicine
              </p>
              <h1
                className="mt-7 font-display text-ink leading-[0.98] tracking-[-0.022em]"
                style={{ fontSize: 'clamp(2.25rem, 4.8vw, 4.25rem)' }}
              >
                Live well.
                <br />
                <em className="italic font-display text-brown">Longer.</em>
              </h1>

              <div className="mt-8 flex items-center gap-2.5">
                <ShieldCheck className="size-4 text-brown shrink-0" strokeWidth={1.8} />
                <span className="text-[12px] text-ink-soft leading-[1.45]">
                  Directed by Double Board-Certified Physicians &middot; Internal &amp; Obesity Medicine
                </span>
              </div>

              <p className="mt-7 text-[15px] text-ink-soft leading-[1.75]">
                Comprehensive, physician-guided care for metabolic health, hormone balance,
                energy, recovery, body composition, and long-term wellness &mdash; individualized
                and refined over time.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <Link
                  href="/book"
                  className="inline-flex items-center gap-2.5 bg-brown text-cream hover:bg-brown-deep px-6 py-3.5 rounded-md text-[11px] tracking-[0.28em] uppercase font-semibold transition-colors"
                >
                  <Calendar className="size-4" strokeWidth={2} />
                  Book Longevity Consultation
                </Link>
                <Link
                  href="#program"
                  className="inline-flex items-center gap-2.5 border border-ink/80 text-ink hover:bg-ink hover:text-cream px-6 py-3.5 rounded-md text-[11px] tracking-[0.28em] uppercase font-semibold transition-colors"
                >
                  Start Optimization Program
                  <ArrowRight className="size-4" strokeWidth={2} />
                </Link>
              </div>

              {/* Three quick pillars derived from the framework graphic in the photo */}
              <div className="mt-10 pt-7 border-t border-line/60 grid grid-cols-3 gap-4 sm:gap-6 max-w-[480px]">
                <MiniPillar label="Metabolic Health" />
                <MiniPillar label="Hormone Optimization" />
                <MiniPillar label="Healthy Aging" />
              </div>
            </div>

            {/* RIGHT — the framework photo, contained (image carries its own brand text) */}
            <div className="relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-[0_40px_80px_-30px_rgba(74,52,28,0.55)] ring-1 ring-line/40">
                <Image
                  src="/photos/longevity-full.png"
                  alt="Velora Physician-Guided Longevity Care framework: cellular health, hormone optimization, sleep and stress optimization, recovery and performance, health, inflammation control — surrounding a couple resting at a coastal retreat in warm sunset light"
                  fill
                  sizes="(min-width: 1024px) 55vw, 100vw"
                  className="object-cover object-center"
                  priority
                />
              </div>
              {/* Tiny credit/caption chip beneath image */}
              <p className="mt-4 text-[10px] tracking-[0.32em] uppercase text-ink-soft/70 text-center lg:text-right">
                Velora&rsquo;s six-pillar longevity framework
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 01 · OVERVIEW — interconnected concerns ===== */}
      <section className="bg-paper">
        <div className="container-velora py-20 lg:py-28">
          <div className="grid lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1fr)] gap-12 lg:gap-20 xl:gap-28 items-start">
            <div>
              <ChapterEyebrow number="01" label="Overview" />
              <h2
                className="mt-7 font-display text-ink leading-[1.04] tracking-[-0.018em]"
                style={{ fontSize: 'clamp(1.75rem, 3.8vw, 2.75rem)' }}
              >
                Longevity is not a single
                <br />
                treatment. It&rsquo;s a
                <br />
                <em className="italic font-display text-brown">coordinated approach.</em>
              </h2>
              <div className="mt-7 w-12 h-px bg-gold/80" />
              <p className="mt-7 text-[15px] text-ink-soft leading-[1.8] max-w-prose">
                Longevity medicine focuses on optimizing long-term health rather than
                treating isolated symptoms alone. Fatigue, hormonal imbalance, weight
                regulation, recovery, sleep &mdash; these concerns are often interconnected
                and benefit from a coordinated, physician-guided approach addressing
                metabolic, hormonal, and lifestyle factors together.
              </p>
              <p className="mt-5 text-[14px] text-ink-soft/85 leading-[1.75] max-w-prose italic font-display">
                Care is individualized and continuously refined over time based on clinical
                response and ongoing physician assessment.
              </p>
            </div>

            <div>
              <p className="text-[10.5px] tracking-[0.34em] uppercase text-brown font-semibold">
                Many patients seek care for
              </p>
              <ul className="mt-6 grid sm:grid-cols-2 gap-x-6 gap-y-3 text-[14px] text-ink leading-[1.55]">
                {[
                  'Persistent fatigue or low energy',
                  'Difficulty maintaining healthy weight',
                  'Hormonal imbalance',
                  'Reduced recovery or performance',
                  'Sleep and wellness concerns',
                  'Metabolic health issues',
                  'Preventive health optimization',
                  'Healthy aging goals',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 py-2 border-b border-line/50">
                    <span className="mt-1.5 size-1.5 rounded-full bg-gold shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 02 · WHAT WE EVALUATE / WHAT'S INCLUDED — twin checklists ===== */}
      <section className="bg-bone border-t border-line/40">
        <div className="container-velora py-20 lg:py-24">
          <div className="text-center max-w-2xl mx-auto">
            <ChapterEyebrow number="02" label="The Evaluation" />
            <h2
              className="mt-7 font-display text-ink leading-[1.04] tracking-[-0.018em]"
              style={{ fontSize: 'clamp(1.625rem, 3.4vw, 2.375rem)' }}
            >
              Clinical assessment guided by
              <br />
              <em className="italic font-display text-brown">data and physician judgment.</em>
            </h2>
          </div>

          <div className="mt-14 grid lg:grid-cols-2 gap-6 lg:gap-8">
            {/* What We Evaluate */}
            <div className="bg-paper rounded-2xl border border-line/60 p-8 lg:p-10 shadow-[0_28px_60px_-32px_rgba(74,52,28,0.35)]">
              <div className="flex items-center gap-3">
                <span className="size-10 rounded-full bg-brown/10 text-brown flex items-center justify-center">
                  <Microscope className="size-5" strokeWidth={1.6} />
                </span>
                <p className="text-[10.5px] tracking-[0.32em] uppercase text-brown font-semibold">
                  What We Evaluate
                </p>
              </div>
              <ul className="mt-6 space-y-3 text-[14px] text-ink leading-[1.55]">
                {[
                  'Weight management and body composition',
                  'Insulin resistance and metabolic health',
                  'Hormonal optimization',
                  'Fatigue and low energy',
                  'Low testosterone symptoms',
                  'Menopause-related symptoms',
                  'Recovery and performance concerns',
                  'Sleep quality and wellness',
                  'Preventive cardiovascular and metabolic health',
                  'Long-term healthy aging strategies',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 size-[18px] rounded-full bg-brown/10 text-brown flex items-center justify-center shrink-0">
                      <Check className="size-2.5" strokeWidth={2.8} />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-7 text-[12.5px] text-ink-soft italic leading-[1.6]">
                Evaluation is guided by both clinical assessment and laboratory data to
                support a precise and individualized treatment approach.
              </p>
            </div>

            {/* What's Included */}
            <div className="bg-paper rounded-2xl border border-line/60 p-8 lg:p-10 shadow-[0_28px_60px_-32px_rgba(74,52,28,0.35)]">
              <div className="flex items-center gap-3">
                <span className="size-10 rounded-full bg-brown/10 text-brown flex items-center justify-center">
                  <Stethoscope className="size-5" strokeWidth={1.6} />
                </span>
                <p className="text-[10.5px] tracking-[0.32em] uppercase text-brown font-semibold">
                  What&rsquo;s Included
                </p>
              </div>
              <ul className="mt-6 space-y-3 text-[14px] text-ink leading-[1.55]">
                {[
                  'Comprehensive physician evaluation',
                  'Metabolic and hormone assessment',
                  'Preventive wellness review',
                  'Laboratory strategy and interpretation',
                  'Personalized treatment planning',
                  'Medication management when appropriate',
                  'Ongoing physician monitoring',
                  'Continuous treatment optimization',
                  'Long-term wellness strategy',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 size-[18px] rounded-full bg-brown/10 text-brown flex items-center justify-center shrink-0">
                      <Check className="size-2.5" strokeWidth={2.8} />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-7 text-[12.5px] text-ink-soft italic leading-[1.6]">
                Treatment is individualized and not based on standardized protocols.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 03 · CARE OPTIONS — pricing cards ===== */}
      <section id="program" className="bg-paper border-t border-line/40">
        <div className="container-velora py-20 lg:py-24">
          <div className="text-center max-w-2xl mx-auto">
            <ChapterEyebrow number="03" label="Care Options" />
            <h2
              className="mt-7 font-display text-ink leading-[1.04] tracking-[-0.018em]"
              style={{ fontSize: 'clamp(1.625rem, 3.4vw, 2.375rem)' }}
            >
              Begin with a consultation,
              <br />
              <em className="italic font-display text-brown">or commit to the program.</em>
            </h2>
          </div>

          <div className="mt-14 grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] gap-6 lg:gap-8 items-stretch max-w-6xl mx-auto">
            {/* Initial Consultation */}
            <div className="relative bg-cream rounded-2xl border border-line/60 p-8 lg:p-10 flex flex-col shadow-[0_28px_60px_-30px_rgba(74,52,28,0.4)]">
              <div className="w-10 h-px bg-gold/70" />
              <p className="mt-5 text-[10.5px] tracking-[0.32em] uppercase text-brown font-semibold">
                Step One
              </p>
              <h3 className="mt-3 font-display text-[26px] md:text-[28px] leading-[1.1] text-ink">
                Initial Longevity Consultation
              </h3>
              <p className="mt-3 text-[13.5px] text-ink-soft leading-[1.6]">
                60-minute comprehensive physician evaluation.
              </p>

              <div className="mt-6 pb-6 border-b border-line/60 flex items-baseline gap-2">
                <span className="font-display text-[44px] leading-none text-ink">$295</span>
                <span className="text-[11px] tracking-[0.22em] uppercase text-ink-soft">one-time</span>
              </div>

              <ul className="mt-6 space-y-2.5 text-[13.5px] text-ink-soft leading-[1.55] flex-1">
                {[
                  'Detailed medical assessment',
                  'Symptom and wellness evaluation',
                  'Metabolic and hormone review',
                  'Preventive health assessment',
                  'Laboratory planning',
                  'Individualized optimization strategy',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <Check className="mt-1 size-3 text-brown shrink-0" strokeWidth={2.6} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/book"
                className="mt-8 inline-flex items-center justify-center gap-2.5 border border-brown text-brown hover:bg-brown hover:text-cream px-6 py-3.5 rounded-md text-[11px] tracking-[0.28em] uppercase font-semibold transition-colors"
              >
                <Calendar className="size-4" strokeWidth={2} />
                Book Longevity Consultation
              </Link>
            </div>

            {/* Optimization Program */}
            <div className="relative bg-brown text-cream rounded-2xl p-8 lg:p-10 flex flex-col shadow-[0_36px_70px_-28px_rgba(74,52,28,0.6)] ring-1 ring-brown overflow-hidden">
              <div
                className="absolute -top-16 -right-16 w-56 h-56 rounded-full pointer-events-none"
                style={{
                  background:
                    'radial-gradient(circle, rgba(201,160,100,0.28), rgba(201,160,100,0) 70%)',
                }}
                aria-hidden
              />
              <span className="absolute top-0 right-0 bg-gold text-ink px-4 py-1.5 text-[9px] tracking-[0.32em] uppercase font-semibold rounded-bl-xl rounded-tr-2xl">
                Recommended
              </span>

              <div className="relative">
                <div className="w-10 h-px bg-gold" />
                <p className="mt-5 text-[10.5px] tracking-[0.32em] uppercase text-gold font-semibold">
                  Structured Program · 12 Months
                </p>
                <h3 className="mt-3 font-display text-[26px] md:text-[28px] leading-[1.1] text-cream">
                  Metabolic, Hormone &amp; Longevity Optimization
                </h3>
                <p className="mt-3 text-[13.5px] text-cream/80 leading-[1.6]">
                  16 physician visits annually. Continuous clinical oversight for patients
                  seeking long-term optimization.
                </p>

                <div className="mt-6 pb-6 border-b border-cream/20 flex items-baseline gap-3 flex-wrap">
                  <span className="font-display text-[44px] leading-none text-cream">$3,520</span>
                  <span className="text-[11px] tracking-[0.22em] uppercase text-cream/70">total · 12 mo</span>
                  <span className="ml-auto text-[11px] tracking-[0.22em] uppercase text-gold font-semibold">
                    $220 / visit
                  </span>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="rounded-xl bg-cream/8 ring-1 ring-cream/15 px-4 py-3.5">
                    <p className="text-[10px] tracking-[0.24em] uppercase text-gold font-semibold">Standard</p>
                    <p className="mt-2 font-display text-[22px] leading-none text-cream">11 visits</p>
                    <p className="mt-1.5 text-[11.5px] text-cream/75">30-minute follow-ups</p>
                  </div>
                  <div className="rounded-xl bg-cream/8 ring-1 ring-cream/15 px-4 py-3.5">
                    <p className="text-[10px] tracking-[0.24em] uppercase text-gold font-semibold">Extended</p>
                    <p className="mt-2 font-display text-[22px] leading-none text-cream">5 visits</p>
                    <p className="mt-1.5 text-[11.5px] text-cream/75">60-minute optimization</p>
                  </div>
                </div>

                <Link
                  href="/book"
                  className="mt-8 inline-flex w-full items-center justify-center gap-2.5 bg-cream text-ink hover:bg-paper px-6 py-3.5 rounded-md text-[11px] tracking-[0.28em] uppercase font-semibold transition-colors"
                >
                  Start Optimization Program
                  <ArrowRight className="size-4" strokeWidth={2} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 04 · YOUR OPTIMIZATION JOURNEY — 3 phases ===== */}
      <section className="bg-bone border-t border-line/40">
        <div className="container-velora py-20 lg:py-28">
          <div className="text-center max-w-2xl mx-auto">
            <ChapterEyebrow number="04" label="Your Optimization Journey" />
            <h2
              className="mt-7 font-display text-ink leading-[1.04] tracking-[-0.018em]"
              style={{ fontSize: 'clamp(1.625rem, 3.4vw, 2.375rem)' }}
            >
              Three phases of physician-guided
              <br />
              <em className="italic font-display text-brown">long-term optimization.</em>
            </h2>
          </div>

          <div className="mt-16 grid lg:grid-cols-3 gap-6 lg:gap-8">
            <PhaseCard
              phase="Phase 1"
              title="Initial Optimization"
              subtitle="Weeks 2 — 8"
              visits={[
                { label: 'Week 2', body: 'Assessment of initial treatment response, medication tolerance, and symptom improvement.' },
                { label: 'Week 4', body: 'Focused reassessment of metabolic and hormone optimization with treatment refinement.' },
                { label: 'Week 8', body: 'Comprehensive review of clinical progress, laboratory findings when indicated, and ongoing optimization strategy.' },
              ]}
            />
            <PhaseCard
              phase="Phase 2"
              title="Active Optimization"
              subtitle="Months 3 — 6"
              visits={[
                { label: 'Month 3', body: 'Focused on long-term metabolic and hormone optimization, wellness goals, and preventive assessment.' },
                { label: 'Month 6', body: 'Comprehensive reassessment including laboratory interpretation, medication adjustment, and long-term planning.' },
              ]}
            />
            <PhaseCard
              phase="Phase 3"
              title="Long-Term Maintenance"
              subtitle="Ongoing"
              visits={[
                { label: 'Continued Care', body: 'Sustaining results · long-term metabolic health · hormone balance · preventive wellness · healthy aging strategies · continuous optimization over time.' },
              ]}
            />
          </div>
        </div>
      </section>

      {/* ===== 05 · WHY PHYSICIAN-GUIDED ===== */}
      <section className="bg-paper border-t border-line/40">
        <div className="container-velora py-20 lg:py-24">
          <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] gap-12 lg:gap-20 items-start">
            <div>
              <ChapterEyebrow number="05" label="Why Physician-Guided" />
              <h2
                className="mt-7 font-display text-ink leading-[1.04] tracking-[-0.018em]"
                style={{ fontSize: 'clamp(1.75rem, 3.8vw, 2.75rem)' }}
              >
                Long-term optimization
                <br />
                requires <em className="italic font-display text-brown">careful clinical oversight.</em>
              </h2>
              <div className="mt-7 w-12 h-px bg-gold/80" />
              <p className="mt-7 text-[14.5px] text-ink-soft leading-[1.8] max-w-prose">
                Care is directed by physicians trained in Internal Medicine and Obesity
                Medicine. Treatment is continuously refined based on each patient&rsquo;s
                physiology, laboratory data, symptoms, and clinical response.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-5 lg:gap-6">
              {[
                { icon: <Stethoscope className="size-4" />, title: 'Comprehensive Assessment', body: 'Full medical evaluation, not isolated treatment.' },
                { icon: <ShieldCheck className="size-4" />, title: 'Safe Prescribing', body: 'Physician monitoring throughout treatment.' },
                { icon: <Sparkles className="size-4" />, title: 'Individualized Treatment', body: 'Adjusted to your physiology and clinical response.' },
                { icon: <Activity className="size-4" />, title: 'Evidence-Based', body: 'Metabolic and hormone optimization grounded in clinical data.' },
                { icon: <HeartPulse className="size-4" />, title: 'Preventive Strategy', body: 'Designed for long-term wellness, not short-term fixes.' },
                { icon: <TrendingUp className="size-4" />, title: 'Continuity of Care', body: 'Ongoing physician relationship across phases.' },
              ].map((b) => (
                <div key={b.title} className="bg-cream rounded-xl border border-line/60 p-5">
                  <span className="size-9 rounded-full bg-brown/10 text-brown flex items-center justify-center">
                    {b.icon}
                  </span>
                  <p className="mt-4 text-[12px] tracking-[0.22em] uppercase text-ink font-semibold">{b.title}</p>
                  <p className="mt-2 text-[13px] text-ink-soft leading-[1.55]">{b.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== IMPORTANT INFORMATION ===== */}
      <section className="bg-bone">
        <div className="container-velora py-12 lg:py-14">
          <div className="max-w-5xl mx-auto bg-paper border border-line/60 rounded-2xl px-6 md:px-10 py-7">
            <div className="flex items-center gap-3">
              <span className="size-8 rounded-full bg-brown/10 text-brown flex items-center justify-center">
                <ShieldCheck className="size-4" strokeWidth={1.8} />
              </span>
              <p className="text-[10.5px] tracking-[0.32em] uppercase text-brown font-semibold">
                Important Information
              </p>
            </div>
            <ul className="mt-5 grid md:grid-cols-2 gap-x-10 gap-y-2 text-[12.5px] text-ink-soft leading-[1.65]">
              <li className="flex items-start gap-2"><span className="mt-1.5 size-1 rounded-full bg-brown/60 shrink-0" /><span>Medication costs are not included.</span></li>
              <li className="flex items-start gap-2"><span className="mt-1.5 size-1 rounded-full bg-brown/60 shrink-0" /><span>Laboratory testing may be recommended based on evaluation.</span></li>
              <li className="flex items-start gap-2"><span className="mt-1.5 size-1 rounded-full bg-brown/60 shrink-0" /><span>Treatment plans are individualized.</span></li>
              <li className="flex items-start gap-2"><span className="mt-1.5 size-1 rounded-full bg-brown/60 shrink-0" /><span>All visits conducted via secure telemedicine.</span></li>
              <li className="flex items-start gap-2 md:col-span-2"><span className="mt-1.5 size-1 rounded-full bg-brown/60 shrink-0" /><span>Longevity-focused care varies based on physician assessment and patient needs.</span></li>
            </ul>
          </div>
        </div>
      </section>

      {/* ===== 06 · START YOUR CARE — final CTA ===== */}
      <section className="bg-bone border-t border-line/40">
        <div className="container-velora py-16 lg:py-20">
          <div className="max-w-[1120px] xl:max-w-[1280px] mx-auto">
            <div className="text-center">
              <ChapterEyebrow number="06" label="Start Your Care" />
              <h2
                className="mt-7 font-display text-ink leading-[1.04] tracking-[-0.018em]"
                style={{ fontSize: 'clamp(1.875rem, 4vw, 3rem)' }}
              >
                Begin physician-guided care
                <br />
                <em className="italic font-display text-brown">tailored to your long-term goals.</em>
              </h2>
              <div className="mt-6 mx-auto w-10 h-px bg-gold/70" />
            </div>

            <div className="mt-12 grid md:grid-cols-2 gap-5 md:gap-6">
              <Link
                href="/book"
                className="group relative bg-cream rounded-2xl p-7 md:p-8 flex flex-col justify-between min-h-[200px] transition-all border border-line/70 hover:border-brown/60 shadow-[0_22px_45px_-25px_rgba(74,52,28,0.35)]"
              >
                <div>
                  <span className="inline-flex size-10 rounded-full bg-bone border border-brown/30 text-brown items-center justify-center">
                    <Calendar className="size-5" strokeWidth={1.8} />
                  </span>
                  <p className="mt-5 text-[10px] tracking-[0.32em] uppercase text-brown font-semibold">
                    Start With a Consultation
                  </p>
                  <h3 className="mt-2 font-display text-[24px] md:text-[26px] leading-[1.15] text-ink">
                    Book Longevity Consultation
                  </h3>
                  <p className="mt-3 text-[13.5px] text-ink-soft leading-[1.55] max-w-[320px]">
                    60-minute physician evaluation. Metabolic, hormone, and preventive
                    review. $295.
                  </p>
                </div>
                <span className="mt-5 inline-flex items-center gap-2 text-[11px] tracking-[0.28em] uppercase text-brown group-hover:text-brown-deep font-semibold border-b border-brown/40 group-hover:border-brown pb-1.5 w-fit transition-colors">
                  Book consultation
                  <ArrowRight className="size-3.5" />
                </span>
              </Link>

              <Link
                href="/book"
                className="group relative bg-brown text-cream rounded-2xl p-7 md:p-8 flex flex-col justify-between min-h-[200px] transition-all hover:bg-brown-deep shadow-[0_28px_55px_-25px_rgba(74,52,28,0.55)] overflow-hidden"
              >
                <div
                  className="absolute -top-12 -right-12 w-44 h-44 rounded-full pointer-events-none"
                  style={{
                    background:
                      'radial-gradient(circle, rgba(201,160,100,0.28), rgba(201,160,100,0) 70%)',
                  }}
                  aria-hidden
                />
                <div className="relative">
                  <span className="inline-flex size-10 rounded-full bg-cream/15 text-gold items-center justify-center">
                    <Sparkles className="size-5" strokeWidth={1.8} />
                  </span>
                  <p className="mt-5 text-[10px] tracking-[0.32em] uppercase text-gold font-semibold">
                    Or, Commit to the Program
                  </p>
                  <h3 className="mt-2 font-display text-[24px] md:text-[26px] leading-[1.15] text-cream">
                    Start Optimization Program
                  </h3>
                  <p className="mt-3 text-[13.5px] text-cream/80 leading-[1.55] max-w-[320px]">
                    16 physician visits across 12 months. Continuous optimization. $3,520.
                  </p>
                </div>
                <span className="relative mt-5 inline-flex items-center gap-2 text-[11px] tracking-[0.28em] uppercase text-gold font-semibold border-b border-gold/40 group-hover:border-gold pb-1.5 w-fit transition-colors">
                  Start program
                  <ArrowRight className="size-3.5" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 07 · FAQ ===== */}
      <section className="bg-paper border-t border-line/40">
        <div className="container-velora py-20 lg:py-28">
          <div className="grid lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] gap-12 lg:gap-20 xl:gap-28">
            <div className="lg:sticky lg:top-24 lg:self-start">
              <ChapterEyebrow number="07" label="FAQ" />
              <h2
                className="mt-7 font-display text-ink leading-[1.04] tracking-[-0.018em]"
                style={{ fontSize: 'clamp(1.75rem, 3.6vw, 2.625rem)' }}
              >
                Questions, answered
                <br />
                <em className="italic font-display text-brown">honestly.</em>
              </h2>
              <p className="mt-7 text-[13.5px] text-ink-soft leading-[1.7] max-w-[360px]">
                Still have questions? Reach out and a physician will respond directly.
              </p>
              <Link
                href="/contact"
                className="mt-6 inline-flex items-center gap-2 text-[11px] tracking-[0.28em] uppercase text-brown hover:text-brown-deep font-semibold border-b border-brown/40 hover:border-brown pb-1.5 transition-colors"
              >
                Contact a physician
                <ArrowRight className="size-3.5" />
              </Link>
            </div>

            <FaqAccordion
              items={[
                { q: 'What is longevity medicine?', a: 'Longevity medicine focuses on optimizing long-term health, metabolic function, hormone balance, energy, recovery, and overall wellness through physician-guided preventive and personalized care. The goal is to support healthy aging and improve long-term quality of life.' },
                { q: 'Who may benefit from longevity-focused care?', a: <span>Patients may seek longevity-focused care for fatigue or low energy, difficulty maintaining healthy weight, hormonal imbalance, reduced recovery or performance, sleep concerns, preventive wellness goals, metabolic health optimization, and healthy aging support.</span> },
                { q: 'Is longevity medicine only for older adults?', a: 'No. Many patients begin longevity-focused care earlier in adulthood to optimize health, metabolism, recovery, and preventive wellness before age-related decline develops.' },
                { q: 'Is longevity medicine the same as hormone therapy?', a: <span>No. Hormone optimization may be one component, but longevity medicine is broader and may include metabolic optimization, preventive wellness, body composition management, lifestyle and recovery strategies, cardiovascular and metabolic health assessment, and long-term healthy aging support.</span> },
                { q: 'What happens during the initial longevity consultation?', a: <span>Your physician reviews medical history, symptoms and wellness goals, metabolic and hormone health, lifestyle factors, laboratory strategy, and individualized treatment options. The consultation is designed to create a personalized long-term optimization plan.</span> },
                { q: 'Will I need laboratory testing?', a: 'Laboratory testing is often recommended to evaluate metabolic health, hormone levels, cardiovascular risk factors, and other clinical markers that may guide treatment decisions. Testing recommendations are individualized based on physician assessment.' },
                { q: 'What treatments may be included in longevity-focused care?', a: <span>Depending on clinical evaluation, treatment may include metabolic optimization, weight management, hormone therapy, preventive wellness planning, lifestyle and recovery strategies, medication management when appropriate, and long-term monitoring and optimization. Treatment plans are individualized and continuously adjusted over time.</span> },
                { q: 'Is this only a weight loss program?', a: <span>No. While body composition and metabolic health may be important components, longevity-focused care also emphasizes energy, recovery, hormone balance, preventive wellness, cardiovascular and metabolic health, and healthy aging strategies.</span> },
                { q: 'Are visits conducted through telemedicine?', a: 'Yes. All consultations and follow-up visits are conducted through secure telemedicine.' },
                { q: 'Are medications included in the program fee?', a: 'No. Medication, laboratory, and pharmacy costs are separate and vary based on individualized treatment plans.' },
                { q: 'How long does it take to notice improvement?', a: 'Some patients may notice improvement within several weeks, while other aspects of optimization may develop gradually over time. Results vary based on medical history, treatment goals, and consistency with follow-up care.' },
                { q: 'Is longevity-focused care safe?', a: 'When guided by qualified physicians and supported by ongoing monitoring, longevity-focused care can be delivered safely and appropriately. Treatment recommendations are individualized and continuously reassessed based on clinical response and safety considerations.' },
                { q: 'Can longevity care be combined with weight management or hormone therapy?', a: 'Yes. Longevity-focused care at Velora Medical Institute is designed to integrate metabolic health, weight management, hormone optimization, and preventive wellness into a coordinated physician-guided treatment approach.' },
                { q: 'Do I need long-term treatment?', a: 'Treatment duration varies based on your goals, response, and physician recommendations. Many patients benefit from ongoing physician-guided follow-up to support long-term optimization and continuity of care.' },
              ]}
            />
          </div>
        </div>
      </section>
    </>
  )
}

/* Helpers */

function MiniPillar({ label }: { label: string }) {
  return (
    <div className="text-center">
      <p className="text-[9.5px] tracking-[0.24em] uppercase text-ink font-semibold leading-[1.35]">
        {label}
      </p>
    </div>
  )
}

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

function PhaseCard({
  phase, title, subtitle, visits,
}: {
  phase: string
  title: string
  subtitle: string
  visits: { label: string; body: string }[]
}) {
  return (
    <div className="bg-paper rounded-2xl border border-line/60 p-7 lg:p-8 shadow-[0_28px_60px_-32px_rgba(74,52,28,0.35)] flex flex-col">
      <div className="flex items-baseline gap-3">
        <span className="font-display italic text-brown/65 text-[34px] leading-none">{phase.split(' ')[1]}</span>
        <p className="text-[10px] tracking-[0.32em] uppercase text-brown font-semibold">
          {phase.split(' ')[0]}
        </p>
      </div>
      <h3 className="mt-3 font-display text-[22px] md:text-[24px] leading-[1.15] text-ink">
        {title}
      </h3>
      <p className="mt-2 text-[11px] tracking-[0.24em] uppercase text-ink-soft font-semibold">
        {subtitle}
      </p>
      <div className="mt-6 w-8 h-px bg-gold/70" />
      <ul className="mt-6 space-y-5 text-[13px] text-ink-soft leading-[1.6] flex-1">
        {visits.map((v) => (
          <li key={v.label}>
            <p className="text-[10.5px] tracking-[0.28em] uppercase text-ink font-semibold">
              {v.label}
            </p>
            <p className="mt-1.5">{v.body}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
