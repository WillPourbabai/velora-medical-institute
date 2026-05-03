import Link from 'next/link'
import { ArrowUpRight, Stethoscope, ClipboardList, Activity, Calendar, ShieldCheck, HeartPulse, Sparkles, FlaskConical } from 'lucide-react'
import { HomeHero } from '@/components/site/home-hero'
import { Section, SectionHeading, NumberedTag } from '@/components/site/section'
import { FaqAccordion } from '@/components/site/faq-accordion'

export default function HomePage() {
  return (
    <>
      <HomeHero />

      {/* Trust strip */}
      <section className="bg-ink text-cream">
        <div className="container-velora py-14 md:py-16">
          <p className="eyebrow text-gold mb-8">Physician-Led, Individualized Care</p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-8">
            <TrustItem
              icon={<Stethoscope className="size-5" />}
              title="Double Board-Certified"
              body="Internal Medicine & Obesity Medicine"
            />
            <TrustItem
              icon={<HeartPulse className="size-5" />}
              title="Physician-Directed Care"
              body="Direct evaluation with continuous clinical oversight"
            />
            <TrustItem
              icon={<Sparkles className="size-5" />}
              title="Personalized Plans"
              body="Designed around your physiology and individual goals"
            />
            <TrustItem
              icon={<ShieldCheck className="size-5" />}
              title="Direct-Pay Practice"
              body="Transparent care without insurance limitations"
            />
          </div>
        </div>
      </section>

      {/* Approach */}
      <Section bg="bone">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <span className="eyebrow">Our Approach</span>
            <h2 className="font-display text-[40px] md:text-[52px] leading-[1.04] tracking-[-0.018em] text-ink mt-5">
              A physician-guided
              <br />
              path to{' '}
              <em className="not-italic text-sage">metabolic</em>
              <br />
              and <em className="not-italic text-sage">hormonal</em> health.
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
          title={<>Two practices, one <em className="not-italic text-sage">standard of care</em>.</>}
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

      {/* How it works */}
      <Section bg="bone">
        <div className="grid lg:grid-cols-12 gap-12 items-end mb-14">
          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow="How It Works"
              title={<>From first visit to <em className="not-italic text-sage">long-term</em> partnership.</>}
            />
          </div>
          <div className="lg:col-span-5 lg:text-right">
            <Link href="/book" className="btn-primary">
              Book Your Initial Consultation
              <ArrowUpRight className="size-3.5" />
            </Link>
          </div>
        </div>

        <ol className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-line border border-line">
          {[
            { n: '01', title: 'Schedule Your Consultation', body: 'Book your visit online at your convenience.', icon: <Calendar className="size-5" /> },
            { n: '02', title: 'Complete Intake Forms', body: 'Provide your medical history and treatment goals before your visit.', icon: <ClipboardList className="size-5" /> },
            { n: '03', title: 'Physician Evaluation', body: 'Receive a comprehensive assessment and personalized treatment plan.', icon: <Stethoscope className="size-5" /> },
            { n: '04', title: 'Ongoing Care', body: 'Treatment is monitored and refined over time based on your clinical response.', icon: <HeartPulse className="size-5" /> },
          ].map((step) => (
            <li key={step.n} className="bg-bone p-7 lg:p-8 flex flex-col">
              <div className="flex items-center justify-between">
                <span className="size-9 rounded-full bg-sage-soft text-sage flex items-center justify-center">
                  {step.icon}
                </span>
                <span className="font-display italic text-gold text-[20px]">{step.n}</span>
              </div>
              <h3 className="font-display text-[22px] leading-tight mt-7">{step.title}</h3>
              <p className="mt-3 text-[14.5px] text-ink-soft leading-relaxed">{step.body}</p>
            </li>
          ))}
        </ol>
      </Section>

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

      {/* Care Investment */}
      <Section bg="cream">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Care Investment"
              title={<>Transparent, physician-directed <em className="not-italic text-sage">pricing</em>.</>}
              intro="No hidden fees. Structured programs are available for patients seeking ongoing care, continuity, and long-term optimization."
            />
            <div className="mt-8">
              <Link href="/programs" className="btn-link">
                View full program details
                <ArrowUpRight className="size-3.5" />
              </Link>
            </div>
          </div>
          <div className="lg:col-span-7 space-y-3">
            <PriceRow
              title="Initial Consultation"
              body="Comprehensive physician evaluation and personalized treatment plan"
              price="$295"
              meta="60 minutes · Telemedicine"
            />
            <PriceRow
              title="Follow-Up Visit"
              body="Focused clinical assessment with treatment adjustment and ongoing management"
              price="$195"
              meta="30 minutes · Telemedicine"
            />
            <PriceRow
              title="Extended Follow-Up"
              body="Integrated metabolic + hormone management with comprehensive assessment"
              price="Program"
              meta="40 minutes · Program-based care"
            />
          </div>
        </div>
      </Section>

      {/* Physicians */}
      <Section bg="bone">
        <SectionHeading
          eyebrow="Meet Our Physicians"
          title={<>Care directed by <em className="not-italic text-sage">double board-certified</em> physicians.</>}
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
              <span className="absolute top-6 right-7 font-display italic text-[80px] text-sage/15 leading-none select-none">&ldquo;</span>
              <blockquote className="font-display text-[20px] md:text-[22px] leading-[1.4] tracking-[-0.005em] text-ink relative">
                {t.quote}
              </blockquote>
              <figcaption className="mt-7 flex items-center gap-3 pt-5 border-t border-line">
                <span className="size-9 rounded-full bg-sage text-cream flex items-center justify-center text-[12px] font-medium tracking-wider">
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
              title={<>Sustained improvement, <em className="not-italic text-sage">not</em> short-term change.</>}
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
              title={<>Common <em className="not-italic text-sage">questions</em>, answered by physicians.</>}
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
          <h2 className="mt-6 font-display text-[44px] md:text-[68px] lg:text-[78px] leading-[1.02] tracking-[-0.02em] text-cream max-w-4xl mx-auto">
            Begin physician-guided treatment with a <em className="not-italic text-gold">comprehensive evaluation</em>.
          </h2>
          <p className="mt-7 text-[16.5px] text-cream/70 max-w-xl mx-auto leading-relaxed">
            Focused on long-term health and sustainable results — directed by physicians from your first visit forward.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link href="/book?type=weight" className="btn bg-cream text-ink hover:bg-gold px-7 py-4">
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

/* Local helpers */

function TrustItem({ icon, title, body }: { icon: React.ReactNode; title: string; body: string }) {
  return (
    <div className="flex flex-col gap-3">
      <span className="size-10 rounded-full bg-cream/10 text-gold flex items-center justify-center">
        {icon}
      </span>
      <h3 className="font-display text-[18px] text-cream leading-tight">{title}</h3>
      <p className="text-[13.5px] text-cream/65 leading-relaxed">{body}</p>
    </div>
  )
}

function ServiceCard({
  no, tagline, title, description, bullets, href, icon,
}: {
  no: string; tagline: string; title: string; description: string;
  bullets: string[]; href: string; icon: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="group bg-paper border border-line p-8 md:p-10 lg:p-12 flex flex-col transition-all hover:border-sage hover:-translate-y-0.5 duration-300"
    >
      <div className="flex items-start justify-between">
        <span className="size-12 rounded-full bg-sage-soft text-sage flex items-center justify-center">
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
      <span className="mt-9 inline-flex items-center gap-1.5 text-ink group-hover:text-sage transition-colors text-[14px] font-medium">
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
          <p className={`text-[10.5px] tracking-[0.2em] uppercase ${featured ? 'text-sage' : 'text-gold'}`}>Per Visit</p>
          <p className={`mt-1 font-display text-[22px] ${featured ? 'text-ink' : 'text-cream'}`}>{perVisit}</p>
        </div>
        <div>
          <p className={`text-[10.5px] tracking-[0.2em] uppercase ${featured ? 'text-sage' : 'text-gold'}`}>Program Total</p>
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

function PriceRow({
  title, body, price, meta,
}: {
  title: string; body: string; price: string; meta: string;
}) {
  return (
    <div className="bg-paper border border-line p-7 md:p-8 grid md:grid-cols-[1fr_auto] gap-6 items-center group hover:border-sage transition-colors">
      <div>
        <p className="eyebrow">{meta}</p>
        <h3 className="font-display text-[24px] mt-2 leading-tight">{title}</h3>
        <p className="mt-2 text-[14.5px] text-ink-soft leading-relaxed max-w-prose">{body}</p>
      </div>
      <div className="md:text-right">
        <span className="font-display text-[40px] leading-none text-ink">{price}</span>
      </div>
    </div>
  )
}

function PhysicianCard({
  name, initials, credentials, bio,
}: {
  name: string; initials: string; credentials: string; bio: string;
}) {
  return (
    <div className="bg-paper border border-line p-8 md:p-10 group hover:border-sage transition-colors">
      <div className="flex items-center gap-5">
        <span className="size-16 rounded-full bg-sage text-cream font-display text-[26px] flex items-center justify-center">
          {initials}
        </span>
        <div>
          <h3 className="font-display text-[26px] leading-tight">{name}</h3>
          <p className="mt-1 eyebrow">{credentials}</p>
        </div>
      </div>
      <p className="mt-7 text-[15px] text-ink-soft leading-relaxed">{bio}</p>
      <p className="mt-6 text-[12px] tracking-[0.18em] uppercase text-sage">Double Board-Certified</p>
    </div>
  )
}
