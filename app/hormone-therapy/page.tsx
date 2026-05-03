import Link from 'next/link'
import type { Metadata } from 'next'
import { ArrowUpRight, Brain, Droplet, FlaskConical, HeartPulse, Moon, Scale, Sparkles, Zap, ShieldCheck } from 'lucide-react'
import { PageHero } from '@/components/site/page-hero'
import { Section, SectionHeading, NumberedTag } from '@/components/site/section'
import { FaqAccordion } from '@/components/site/faq-accordion'

export const metadata: Metadata = {
  title: 'Hormone Therapy (BHRT)',
  description:
    'Physician-guided evaluation and management of hormone-related conditions in men and women. Bioidentical hormone therapy tailored to your physiology, symptoms, and long-term health goals.',
}

export default function HormoneTherapyPage() {
  return (
    <>
      <PageHero
        eyebrow="Hormone Therapy · BHRT"
        title={<>Restore <em className="not-italic text-sage">balance</em>. Reclaim energy.</>}
        subtitle={
          <>
            Physician-guided evaluation and management of hormone-related conditions in both men and
            women, focused on improving energy, mood, metabolic function, and overall well-being.
            Care is grounded in clinical assessment and laboratory data.
          </>
        }
        primary={{ href: '/book?type=hormone', label: 'Book Initial Consultation' }}
        secondary={{ href: '/programs#hormone', label: 'Start Hormone Therapy Program' }}
        meta={[
          { label: 'Initial Consult', value: '$295' },
          { label: 'Follow-Up', value: '$195' },
          { label: 'Program Total', value: '$725' },
          { label: 'Per-Visit (Program)', value: '$145' },
        ]}
        variant="sage"
      />

      {/* Overview */}
      <Section bg="bone">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Overview"
              title={<>Evidence-led, <em className="not-italic text-sage">individually tuned</em>.</>}
            />
          </div>
          <div className="lg:col-span-7 space-y-7 text-[16.5px] leading-relaxed text-ink-soft">
            <p>
              Hormone therapy at Velora Medical Institute is based on structured, physician-directed
              evaluation and ongoing management — rather than isolated or protocol-based treatment.
            </p>
            <p>
              Care begins with a detailed assessment of symptoms, medical history, and relevant
              laboratory data to identify potential hormonal imbalances. Based on this evaluation, an
              individualized treatment plan is developed, which may include hormone therapy when
              appropriate, along with continuous monitoring and adjustment.
            </p>
            <p>
              The focus is on optimizing clinical response while maintaining safety through regular
              follow-up and reassessment over time.
            </p>
          </div>
        </div>
      </Section>

      {/* What's Included */}
      <Section bg="cream">
        <SectionHeading
          eyebrow="What's Included"
          title={<>A complete <em className="not-italic text-sage">evaluation framework</em>.</>}
        />
        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-line border border-line">
          {[
            { icon: <HeartPulse className="size-5" />, title: 'Comprehensive Physician Evaluation', body: 'Assessment of symptoms, medical history, and treatment goals.' },
            { icon: <FlaskConical className="size-5" />, title: 'Laboratory Evaluation', body: 'Used to assess hormone levels and guide treatment decisions.' },
            { icon: <Sparkles className="size-5" />, title: 'Personalized Treatment Plan', body: 'Based on clinical findings and laboratory results.' },
            { icon: <Droplet className="size-5" />, title: 'Medication Management', body: 'When appropriate — including hormone therapy guided by medical evaluation.' },
            { icon: <Zap className="size-5" />, title: 'Ongoing Monitoring & Follow-Up', body: 'Regular visits to assess response and adjust treatment.' },
            { icon: <ShieldCheck className="size-5" />, title: 'Safety-Focused Care', body: 'Monitoring for effectiveness and potential risks over time.' },
          ].map((f) => (
            <div key={f.title} className="bg-cream p-7 lg:p-8">
              <span className="size-10 rounded-full bg-sage-soft text-sage flex items-center justify-center">
                {f.icon}
              </span>
              <h3 className="mt-6 font-display text-[20px] leading-tight">{f.title}</h3>
              <p className="mt-3 text-[14.5px] text-ink-soft leading-relaxed">{f.body}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-[13px] text-muted-foreground italic">
          Treatment is individualized and not based on fixed protocols.
        </p>
      </Section>

      {/* What We Evaluate */}
      <Section bg="ink">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="What We Evaluate"
              inverted
              title={<>Symptoms that often warrant <em className="not-italic text-gold">evaluation</em>.</>}
              intro="Patients may benefit from a comprehensive, physician-guided evaluation if experiencing any of the following — guided by both clinical assessment and laboratory data."
            />
          </div>
          <div className="lg:col-span-7">
            <ul className="grid sm:grid-cols-2 gap-px bg-cream/10 border border-cream/10">
              {[
                { icon: <Zap className="size-4" />, label: 'Persistent fatigue or low energy' },
                { icon: <HeartPulse className="size-4" />, label: 'Decreased libido' },
                { icon: <Scale className="size-4" />, label: 'Weight gain or difficulty losing weight' },
                { icon: <Sparkles className="size-4" />, label: 'Perimenopause / menopause symptoms' },
                { icon: <Brain className="size-4" />, label: 'Brain fog or reduced concentration' },
                { icon: <Droplet className="size-4" />, label: 'Mood changes or irritability' },
                { icon: <Moon className="size-4" />, label: 'Poor sleep or insomnia' },
                { icon: <FlaskConical className="size-4" />, label: 'Symptoms suggestive of low testosterone' },
              ].map((s) => (
                <li key={s.label} className="bg-ink p-5 flex items-center gap-3 text-[14.5px] text-cream">
                  <span className="size-8 rounded-full bg-cream/5 text-gold flex items-center justify-center">
                    {s.icon}
                  </span>
                  {s.label}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Care Options */}
      <Section bg="bone">
        <SectionHeading
          eyebrow="Care Options"
          title={<>Two ways to begin, <em className="not-italic text-sage">one standard of care</em>.</>}
        />
        <div className="mt-14 grid lg:grid-cols-2 gap-6">
          <div className="bg-paper border border-line p-8 lg:p-10">
            <p className="eyebrow">Individual Visits</p>
            <h3 className="mt-3 font-display text-[28px] leading-tight">Physician visits, paid per session</h3>
            <p className="mt-4 text-[14.5px] text-ink-soft leading-relaxed">
              Suitable for patients who prefer flexibility or wish to begin care without a long-term
              program commitment.
            </p>
            <dl className="mt-8 divide-y divide-line border-y border-line">
              <div className="flex items-baseline justify-between py-5">
                <dt className="text-[14px] text-ink-soft">Initial Consultation</dt>
                <dd className="font-display text-[24px]">$295</dd>
              </div>
              <div className="flex items-baseline justify-between py-5">
                <dt className="text-[14px] text-ink-soft">Follow-Up Visit</dt>
                <dd className="font-display text-[24px]">$195</dd>
              </div>
            </dl>
            <Link href="/book?type=hormone" className="btn-primary mt-8 w-full">
              Book Individual Visit
              <ArrowUpRight className="size-3.5" />
            </Link>
          </div>

          <div className="bg-ink text-cream border border-gold p-8 lg:p-10 relative">
            <span className="absolute -top-3 left-8 chip bg-gold text-ink">Recommended</span>
            <p className="eyebrow text-gold">Hormone Therapy Program</p>
            <h3 className="mt-3 font-display text-[28px] text-cream leading-tight">5 physician visits</h3>
            <p className="mt-4 text-[14.5px] text-cream/70 leading-relaxed">
              Focused evaluation, laboratory review, and ongoing optimization across five
              physician visits.
            </p>
            <dl className="mt-8 divide-y divide-cream/10 border-y border-cream/10">
              <div className="flex items-baseline justify-between py-5">
                <dt className="text-[14px] text-cream/80">Per-Visit Investment</dt>
                <dd className="font-display text-[24px] text-cream">$145</dd>
              </div>
              <div className="flex items-baseline justify-between py-5">
                <dt className="text-[14px] text-cream/80">Total Program</dt>
                <dd className="font-display text-[24px] text-cream">$725</dd>
              </div>
              <div className="flex items-baseline justify-between py-5">
                <dt className="text-[14px] text-cream/80">vs. Individual Visit Total</dt>
                <dd className="font-display text-[18px] text-gold">~$250 less</dd>
              </div>
            </dl>
            <Link href="/programs#hormone" className="btn mt-8 bg-cream text-ink hover:bg-gold px-6 py-3.5 w-full">
              Start Hormone Therapy Program
              <ArrowUpRight className="size-3.5" />
            </Link>
          </div>
        </div>
      </Section>

      {/* Treatment Journey */}
      <Section bg="cream">
        <SectionHeading
          eyebrow="Your Treatment Journey"
          title={<>Care structured for safe, effective <em className="not-italic text-sage">optimization</em>.</>}
        />
        <ol className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-line border border-line">
          {[
            { n: '01', title: 'Initial Consultation', body: 'Comprehensive evaluation of symptoms, medical history, and laboratory strategy.' },
            { n: '02', title: 'Early Follow-Up', body: '~2 weeks — assessment of initial response and early treatment adjustment.' },
            { n: '03', title: 'Ongoing Management', body: 'Follow-up at 4–8 weeks and approximately 3 months, with continued monitoring.' },
            { n: '04', title: 'Maintenance Phase', body: 'Long-term follow-up focused on sustaining symptom improvement and safety.' },
          ].map((s) => (
            <li key={s.n} className="bg-cream p-7 lg:p-8 flex flex-col">
              <NumberedTag n={s.n} />
              <h3 className="font-display text-[22px] leading-tight mt-5">{s.title}</h3>
              <p className="mt-3 text-[14.5px] text-ink-soft leading-relaxed">{s.body}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* Why */}
      <Section bg="bone">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Why Physician-Guided Care"
              title={<>Hormone therapy requires <em className="not-italic text-sage">careful oversight</em>.</>}
              intro="At Velora, care is directed by physicians trained in Internal Medicine and Obesity Medicine — supporting precise, evidence-based hormone optimization."
            />
          </div>
          <div className="lg:col-span-7">
            <ul className="divide-y divide-line border-y border-line">
              {[
                { title: 'Comprehensive medical assessment', body: 'Whole-person evaluation rather than narrow protocol-driven care.' },
                { title: 'Safe, appropriate use of hormone therapy', body: 'Dosing tailored to your physiology and clinical context.' },
                { title: 'Individualized treatment based on response', body: 'Plans evolve as your data, symptoms, and outcomes inform the next step.' },
                { title: 'Ongoing monitoring for effectiveness and safety', body: 'Continuous follow-up with timely refinements.' },
              ].map((row) => (
                <li key={row.title} className="py-6">
                  <h3 className="font-display text-[20px] leading-tight">{row.title}</h3>
                  <p className="mt-2 text-[15px] text-ink-soft leading-relaxed">{row.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Important Information */}
      <Section bg="cream">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Important Information"
              title={<>Practical details, <em className="not-italic text-sage">stated up front</em>.</>}
            />
          </div>
          <div className="lg:col-span-7">
            <ul className="space-y-5 text-[15px] text-ink-soft leading-relaxed">
              <li className="flex gap-4 pb-5 border-b border-line">
                <ShieldCheck className="size-5 text-sage shrink-0 mt-0.5" />
                <span><strong className="text-ink font-medium">Hormone therapy is not appropriate for all patients.</strong> Eligibility is determined through clinical evaluation.</span>
              </li>
              <li className="flex gap-4 pb-5 border-b border-line">
                <FlaskConical className="size-5 text-sage shrink-0 mt-0.5" />
                <span><strong className="text-ink font-medium">Laboratory testing is typically required</strong> prior to initiating treatment.</span>
              </li>
              <li className="flex gap-4 pb-5 border-b border-line">
                <Droplet className="size-5 text-sage shrink-0 mt-0.5" />
                <span><strong className="text-ink font-medium">Medication costs are not included</strong> in visit fees.</span>
              </li>
              <li className="flex gap-4 pb-5 border-b border-line">
                <Sparkles className="size-5 text-sage shrink-0 mt-0.5" />
                <span><strong className="text-ink font-medium">Treatment plans are individualized</strong> based on clinical evaluation and response.</span>
              </li>
            </ul>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section bg="bone">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-4 lg:sticky lg:top-32">
            <SectionHeading
              eyebrow="Common Questions"
              title={<>Hormone therapy <em className="not-italic text-sage">questions</em>, answered.</>}
            />
          </div>
          <div className="lg:col-span-8">
            <FaqAccordion
              defaultOpen={0}
              items={[
                { q: 'What is bioidentical hormone therapy (BHRT)?', a: 'Bioidentical hormone therapy uses hormones that are chemically identical to those naturally produced by the body. Treatment is designed to restore hormonal balance and improve symptoms associated with hormonal changes.' },
                { q: 'Who may benefit from hormone therapy?', a: 'Hormone therapy may be appropriate for individuals experiencing symptoms such as fatigue, low energy, sleep disturbances, changes in metabolism, decreased libido, mood changes, or menopause-related symptoms.' },
                { q: 'How is it determined whether my symptoms are hormone-related?', a: 'Your physician will review your symptoms, medical history, and overall health. Laboratory testing may be recommended to evaluate hormone levels and guide treatment decisions.' },
                { q: 'Is hormone therapy safe?', a: 'When prescribed appropriately and monitored by a qualified physician, hormone therapy can be a safe and effective treatment option. Treatment is individualized and adjusted over time based on clinical response and safety considerations.' },
                { q: 'What types of hormone therapy are available?', a: 'Treatment may include estrogen, progesterone, testosterone, or other therapies depending on individual needs. These may be delivered through various forms, including topical, injectable, or oral options.' },
                { q: 'Can women use testosterone?', a: 'In select cases, low-dose testosterone may be used off-label for symptoms such as low libido. Treatment is carefully individualized and monitored to ensure safety and effectiveness.' },
                { q: 'How long does it take to notice improvement?', a: 'Some patients begin to notice improvement within several weeks. Full benefits may take a few months as hormone levels are optimized and treatment is adjusted over time.' },
              ]}
            />
          </div>
        </div>
      </Section>

      {/* Final CTA */}
      <section className="bg-ink text-cream">
        <div className="container-velora py-24 md:py-28 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <span className="eyebrow text-gold">Start Your Care</span>
            <h2 className="mt-5 font-display text-[40px] md:text-[58px] leading-[1.04] tracking-[-0.018em] text-cream">
              Begin physician-guided <em className="not-italic text-gold">hormone therapy</em>.
            </h2>
          </div>
          <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-3">
            <Link href="/book?type=hormone" className="btn bg-cream text-ink hover:bg-gold px-6 py-4 flex-1">
              Book Initial Consultation
              <ArrowUpRight className="size-3.5" />
            </Link>
            <Link href="/programs#hormone" className="btn bg-transparent border border-cream/30 text-cream hover:bg-cream hover:text-ink px-6 py-4 flex-1">
              Start Hormone Therapy Program
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
