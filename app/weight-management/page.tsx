import Link from 'next/link'
import type { Metadata } from 'next'
import { ArrowUpRight, Activity, ClipboardList, FlaskConical, LineChart, Pill, RefreshCw, TrendingDown } from 'lucide-react'
import { PageHero } from '@/components/site/page-hero'
import { Section, SectionHeading, NumberedTag } from '@/components/site/section'
import { FaqAccordion } from '@/components/site/faq-accordion'

export const metadata: Metadata = {
  title: 'Medical Weight Management',
  description:
    'Physician-guided, evidence-based care focused on safe, effective, and sustainable weight management. Tailored to your metabolic profile, history, and long-term goals.',
}

export default function WeightManagementPage() {
  return (
    <>
      <PageHero
        eyebrow="Medical Weight Management"
        title={<>Weight management, <em className="not-italic text-sage">directed by physicians</em>.</>}
        subtitle={
          <>
            Physician-guided, evidence-based care focused on safe, effective, and sustainable weight
            management. Treatment is tailored to your metabolic profile, medical history, and
            long-term health goals — with ongoing monitoring and adjustment over time.
          </>
        }
        primary={{ href: '/book?type=weight', label: 'Book Initial Consultation' }}
        secondary={{ href: '/programs#weight', label: 'Start Weight Management Program' }}
        meta={[
          { label: 'Initial Consult', value: '$295' },
          { label: 'Follow-Up', value: '$195' },
          { label: 'Annual Program', value: '$2,320' },
          { label: 'Per-Visit (Program)', value: '$145' },
        ]}
      />

      {/* Overview */}
      <Section bg="bone">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Overview"
              title={<>Structured care, not <em className="not-italic text-sage">isolated</em> protocols.</>}
            />
          </div>
          <div className="lg:col-span-7 space-y-7 text-[16.5px] leading-relaxed text-ink-soft">
            <p>
              Medical weight management at Velora Medical Institute is based on structured,
              physician-directed care, rather than isolated or protocol-based treatment.
            </p>
            <p>
              Care begins with a comprehensive evaluation of factors that influence weight, including
              metabolic health, underlying medical conditions, and current medications. Based on this
              assessment, an individualized treatment plan is developed — which may include
              medication when appropriate, along with continuous monitoring and adjustment.
            </p>
            <p>
              The focus is on achieving consistent, sustainable progress through regular follow-up
              and clinical reassessment over time.
            </p>
          </div>
        </div>
      </Section>

      {/* What's Included */}
      <Section bg="cream">
        <SectionHeading
          eyebrow="What's Included"
          title={<>A complete, <em className="not-italic text-sage">long-term</em> care framework.</>}
        />
        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-line border border-line">
          {[
            { icon: <ClipboardList className="size-5" />, title: 'Comprehensive Physician Evaluation', body: 'Assessment of medical history, metabolic factors, and treatment goals.' },
            { icon: <FlaskConical className="size-5" />, title: 'Laboratory Evaluation', body: 'When indicated — used to assess metabolic health and guide treatment decisions.' },
            { icon: <Pill className="size-5" />, title: 'Medication Options', body: 'When appropriate — including FDA-approved therapies based on clinical evaluation.' },
            { icon: <LineChart className="size-5" />, title: 'Ongoing Monitoring & Follow-Up', body: 'Regular visits to assess response and adjust treatment over time.' },
            { icon: <RefreshCw className="size-5" />, title: 'Dose Adjustment', body: 'Therapy is refined based on clinical response to optimize outcomes.' },
            { icon: <TrendingDown className="size-5" />, title: 'Long-Term Management', body: 'Strategy focused on maintaining results and preventing weight regain.' },
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

      {/* Who is this for */}
      <Section bg="bone">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Who This Is For"
              title={<>You may benefit if <em className="not-italic text-sage">you&rsquo;ve</em>…</>}
              intro="Patients across a wide range of metabolic and weight-related concerns find structured medical care more effective than standardized programs."
            />
          </div>
          <div className="lg:col-span-7">
            <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
              {[
                'Had difficulty losing weight despite diet and exercise',
                'Experienced weight regain after prior weight loss',
                'Been diagnosed with overweight or obesity',
                'Been told you have prediabetes or insulin resistance',
                'Noticed weight changes related to metabolic or hormonal factors',
                'Sought a medically supervised, structured approach',
                'Preferred physician-guided care rather than standardized programs',
                'Tried multiple plans without sustained results',
              ].map((c) => (
                <li key={c} className="flex items-start gap-3 text-[15.5px] text-ink leading-relaxed py-3 border-b border-line/60">
                  <span className="size-1.5 rounded-full bg-gold mt-2.5 shrink-0" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Care Options */}
      <Section bg="ink">
        <SectionHeading
          eyebrow="Care Options"
          inverted
          title={<>Two ways to begin, <em className="not-italic text-gold">one standard of care</em>.</>}
        />
        <div className="mt-14 grid lg:grid-cols-2 gap-6">
          <div className="bg-ink/40 border border-cream/15 p-8 lg:p-10">
            <p className="eyebrow text-gold">Individual Visits</p>
            <h3 className="mt-3 font-display text-[28px] text-cream leading-tight">Physician visits, paid per session</h3>
            <p className="mt-4 text-[14.5px] text-cream/65 leading-relaxed">
              Suitable for patients who prefer flexibility or wish to begin care without a long-term
              program commitment.
            </p>
            <dl className="mt-8 divide-y divide-cream/10 border-y border-cream/10">
              <div className="flex items-baseline justify-between py-5">
                <dt className="text-[14px] text-cream/80">Initial Consultation</dt>
                <dd className="font-display text-[24px] text-cream">$295</dd>
              </div>
              <div className="flex items-baseline justify-between py-5">
                <dt className="text-[14px] text-cream/80">Follow-Up Visit</dt>
                <dd className="font-display text-[24px] text-cream">$195</dd>
              </div>
            </dl>
            <Link href="/book?type=weight" className="btn mt-8 bg-cream text-ink hover:bg-gold px-6 py-3.5 w-full">
              Book Individual Visit
              <ArrowUpRight className="size-3.5" />
            </Link>
          </div>

          <div className="bg-cream text-ink border border-gold p-8 lg:p-10 relative">
            <span className="absolute -top-3 left-8 chip bg-gold text-ink">Recommended</span>
            <p className="eyebrow">Annual Weight Management Program</p>
            <h3 className="mt-3 font-display text-[28px] leading-tight">16 physician visits over 12 months</h3>
            <p className="mt-4 text-[14.5px] text-ink-soft leading-relaxed">
              Structured continuity of care — regular physician follow-up, medication monitoring,
              and ongoing assessment of response.
            </p>
            <dl className="mt-8 divide-y divide-line border-y border-line">
              <div className="flex items-baseline justify-between py-5">
                <dt className="text-[14px] text-ink-soft">Per-Visit Investment</dt>
                <dd className="font-display text-[24px]">$145</dd>
              </div>
              <div className="flex items-baseline justify-between py-5">
                <dt className="text-[14px] text-ink-soft">Total Program</dt>
                <dd className="font-display text-[24px]">$2,320</dd>
              </div>
              <div className="flex items-baseline justify-between py-5">
                <dt className="text-[14px] text-ink-soft">vs. Individual Visit Total</dt>
                <dd className="font-display text-[18px] text-sage">~$800 less</dd>
              </div>
            </dl>
            <Link href="/programs#weight" className="btn mt-8 bg-ink text-cream hover:bg-sage-deep px-6 py-3.5 w-full">
              Start Weight Management Program
              <ArrowUpRight className="size-3.5" />
            </Link>
          </div>
        </div>

        <p className="mt-10 text-[13px] text-cream/55 max-w-3xl italic">
          Structured programs provide a reduced per-visit investment while supporting more consistent
          follow-up and improved outcomes.
        </p>
      </Section>

      {/* Treatment Journey */}
      <Section bg="bone">
        <SectionHeading
          eyebrow="Your Treatment Journey"
          title={<>Care structured for <em className="not-italic text-sage">long-term</em> success.</>}
        />
        <ol className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-line border border-line">
          {[
            { n: '01', title: 'Initial Consultation', body: 'Comprehensive evaluation and development of an individualized treatment plan.' },
            { n: '02', title: 'Early Follow-Up', body: 'Within approximately 2 weeks to assess response and adjust treatment.' },
            { n: '03', title: 'Active Management', body: 'Follow-up every 2 weeks initially, then monthly as treatment progresses.' },
            { n: '04', title: 'Maintenance Phase', body: 'Long-term follow-up focused on sustaining results and preventing regain.' },
          ].map((s) => (
            <li key={s.n} className="bg-bone p-7 lg:p-8 flex flex-col">
              <NumberedTag n={s.n} />
              <h3 className="font-display text-[22px] leading-tight mt-5">{s.title}</h3>
              <p className="mt-3 text-[14.5px] text-ink-soft leading-relaxed">{s.body}</p>
            </li>
          ))}
        </ol>
        <p className="mt-8 text-[13px] text-muted-foreground italic max-w-3xl">
          This structured approach allows for appropriate medication use, dose adjustment, and
          long-term success.
        </p>
      </Section>

      {/* Why */}
      <Section bg="cream">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Why Physician-Guided Care"
              title={<>Continuous oversight matters in <em className="not-italic text-sage">weight medicine</em>.</>}
              intro="Medical weight management requires careful evaluation and ongoing clinical oversight. At Velora, care is directed by physicians trained in Internal Medicine and Obesity Medicine."
            />
          </div>
          <div className="lg:col-span-7">
            <ul className="divide-y divide-line border-y border-line">
              {[
                { title: 'Comprehensive medical assessment', body: 'Whole-person evaluation rather than narrow protocol-driven care.' },
                { title: 'Safe, appropriate use of medications', body: 'Medication selection and dosing tailored to your physiology.' },
                { title: 'Individualized treatment based on clinical response', body: 'Plans evolve as your data and outcomes inform the next step.' },
                { title: 'Ongoing monitoring for effectiveness and safety', body: 'Continuous follow-up with timely adjustments where needed.' },
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
      <Section bg="bone">
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
                <Activity className="size-5 text-sage shrink-0 mt-0.5" />
                <span><strong className="text-ink font-medium">Medication costs are not included in visit fees.</strong> Pharmacy pricing is separate and may vary.</span>
              </li>
              <li className="flex gap-4 pb-5 border-b border-line">
                <FlaskConical className="size-5 text-sage shrink-0 mt-0.5" />
                <span><strong className="text-ink font-medium">Laboratory testing may be recommended</strong> based on clinical evaluation.</span>
              </li>
              <li className="flex gap-4 pb-5 border-b border-line">
                <RefreshCw className="size-5 text-sage shrink-0 mt-0.5" />
                <span><strong className="text-ink font-medium">Treatment plans are individualized</strong> and may vary based on medical history and response to therapy.</span>
              </li>
            </ul>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section bg="cream">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-4 lg:sticky lg:top-32">
            <SectionHeading
              eyebrow="Common Questions"
              title={<>Weight management <em className="not-italic text-sage">questions</em>, answered.</>}
            />
          </div>
          <div className="lg:col-span-8">
            <FaqAccordion
              defaultOpen={0}
              items={[
                { q: 'Who is a candidate for medical weight management?', a: 'Many adults who struggle with excess weight, metabolic health concerns, or difficulty achieving results despite lifestyle changes may benefit from physician-guided weight management.' },
                { q: 'What’s the difference between compounded and FDA-approved GLP-1 medications?', a: 'FDA-approved medications are standardized and extensively studied, while compounded versions are prepared by pharmacies and are not FDA-approved in the same way. Your physician will help determine the most appropriate option based on your individual needs.' },
                { q: 'What are GLP-1 medications, and how do they support weight management?', a: 'GLP-1 receptor agonists are medications that help regulate appetite, slow gastric emptying, and improve metabolic signaling. When used appropriately as part of a comprehensive treatment plan, they can support meaningful and sustainable weight reduction.' },
                { q: 'Are medications such as semaglutide or tirzepatide safe?', a: 'These medications have been extensively studied and are FDA-approved for weight management in appropriate patients. During your consultation, your physician will review your medical history to determine whether they are a safe and appropriate option for you.' },
                { q: 'Is medication required as part of treatment?', a: 'No. Treatment plans are individualized. While medications may be beneficial for some patients, care may also include nutrition guidance, lifestyle strategies, and metabolic evaluation without the use of medication.' },
                { q: 'How much weight can I expect to lose?', a: 'Results vary between individuals. Many patients using evidence-based therapies may experience a meaningful reduction in body weight over time, particularly when combined with lifestyle modifications and ongoing medical guidance.' },
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
              Begin physician-guided <em className="not-italic text-gold">weight management</em>.
            </h2>
          </div>
          <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-3">
            <Link href="/book?type=weight" className="btn bg-cream text-ink hover:bg-gold px-6 py-4 flex-1">
              Book Initial Consultation
              <ArrowUpRight className="size-3.5" />
            </Link>
            <Link href="/programs#weight" className="btn bg-transparent border border-cream/30 text-cream hover:bg-cream hover:text-ink px-6 py-4 flex-1">
              Start Weight Management Program
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
