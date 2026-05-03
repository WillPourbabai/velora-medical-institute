import Link from 'next/link'
import type { Metadata } from 'next'
import { ArrowUpRight, Check, Calendar, FlaskConical, Activity, Combine } from 'lucide-react'
import { PageHero } from '@/components/site/page-hero'
import { Section, SectionHeading } from '@/components/site/section'

export const metadata: Metadata = {
  title: 'Structured Programs',
  description:
    'Continuity, accountability, and ongoing clinical oversight. Velora structured programs offer a reduced per-visit investment and consistent physician follow-up.',
}

export default function ProgramsPage() {
  return (
    <>
      <PageHero
        eyebrow="Structured Programs"
        title={<>Continuity, accountability, <em className="not-italic text-sage">and oversight</em>.</>}
        subtitle={
          <>
            For patients seeking consistent care and long-term results, structured programs provide
            continuity, accountability, and ongoing clinical oversight — at a reduced per-visit
            investment compared to individual visits.
          </>
        }
        primary={{ href: '/book', label: 'Book Initial Consultation' }}
        secondary={{ href: '/contact', label: 'Talk to the Practice' }}
      />

      {/* Comparison */}
      <Section bg="bone">
        <SectionHeading
          eyebrow="Programs at a Glance"
          title={<>Choose the program that <em className="not-italic text-sage">fits your care</em>.</>}
        />

        <div className="mt-14 grid lg:grid-cols-3 gap-6" id="weight">
          <ProgramTile
            icon={<Activity className="size-5" />}
            tagline="Weight Management"
            title="Annual Weight Management Program"
            visits="16"
            duration="12 months"
            perVisit="$145"
            total="$2,320"
            equivalent="$3,120"
            difference="approximately $800"
            href="/book?type=weight&program=true"
            includes={[
              'Regular physician follow-up',
              'Medication monitoring and adjustment',
              'Ongoing assessment of response',
              'Structured, long-term management approach',
            ]}
            cadence="Bi-weekly initially, transitioning to monthly"
          />
          <ProgramTile
            icon={<FlaskConical className="size-5" />}
            tagline="Hormone Therapy"
            title="Hormone Therapy Program"
            visits="5"
            duration="6 months"
            perVisit="$145"
            total="$725"
            equivalent="$975"
            difference="approximately $250"
            href="/book?type=hormone&program=true"
            featured
            id="hormone"
            includes={[
              'Laboratory review and interpretation',
              'Ongoing assessment of symptoms and response',
              'Treatment adjustment based on clinical findings',
              'Structured follow-up for optimization and safety',
            ]}
            cadence="2-week, 4–8-week, 3-month, then maintenance"
          />
          <ProgramTile
            icon={<Combine className="size-5" />}
            tagline="Combined Care"
            title="Integrated Combined Program"
            visits="16"
            duration="12 months"
            perVisit="$180"
            total="$2,880"
            equivalent="—"
            difference="includes 5 extended visits"
            href="/book?type=combined&program=true"
            id="combined"
            includes={[
              'Standard follow-up visits (30 min)',
              '5 extended visits (40 min)',
              'Integrated metabolic + hormone management',
              'Coordinated treatment and ongoing refinement',
            ]}
            cadence="Coordinated metabolic + hormone cadence"
          />
        </div>

        <p className="mt-10 text-[13px] text-muted-foreground italic max-w-3xl">
          Structured programs provide a reduced per-visit investment while supporting more consistent
          follow-up and improved outcomes. Per-visit pricing reflects program enrollment.
        </p>
      </Section>

      {/* Why programs */}
      <Section bg="cream">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Why Structured Programs"
              title={<>The case for <em className="not-italic text-sage">continuity</em>.</>}
            />
          </div>
          <div className="lg:col-span-7 space-y-7 text-[16.5px] leading-relaxed text-ink-soft">
            <p>
              Long-term results in metabolic and hormonal medicine depend on more than the right
              prescription. They depend on the consistency of follow-up, the quality of monitoring,
              and the ability to adjust therapy as your physiology responds.
            </p>
            <p>
              Structured programs are designed to deliver exactly that: a defined cadence of
              physician visits, scheduled labs and reassessments, and a single clinician guiding
              the arc of your care.
            </p>
            <ul className="grid sm:grid-cols-2 gap-3 mt-2">
              {['Consistent follow-up', 'Safe, medically supervised treatment', 'Long-term clinical improvement', 'Reduced per-visit investment'].map((b) => (
                <li key={b} className="flex items-start gap-3 text-[14.5px] text-ink py-3 border-b border-line/60">
                  <Check className="size-4 text-sage shrink-0 mt-1" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Cancellation */}
      <Section bg="bone">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Program Policy"
              title={<>Flexibility, <em className="not-italic text-sage">stated clearly</em>.</>}
              intro="Patients enrolled in structured programs may cancel at any time. Early termination fees reflect the reduced per-visit investment associated with program-based care."
            />
          </div>
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
            <div className="bg-paper border border-line p-7">
              <p className="eyebrow">Weight Management</p>
              <h3 className="font-display text-[28px] mt-3 leading-tight">$400</h3>
              <p className="text-[13.5px] text-ink-soft mt-2">Early termination fee</p>
            </div>
            <div className="bg-paper border border-line p-7">
              <p className="eyebrow">Hormone Therapy</p>
              <h3 className="font-display text-[28px] mt-3 leading-tight">$250</h3>
              <p className="text-[13.5px] text-ink-soft mt-2">Early termination fee</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Final CTA */}
      <section className="bg-ink text-cream">
        <div className="container-velora py-24 md:py-28 text-center">
          <span className="eyebrow text-gold">Ready to Begin</span>
          <h2
            className="mt-6 font-display leading-[1.04] tracking-[-0.02em] text-cream max-w-3xl mx-auto"
            style={{ fontSize: 'clamp(2rem, 5.5vw, 3.75rem)' }}
          >
            Start with a comprehensive <em className="not-italic text-gold">initial consultation</em>.
          </h2>
          <p className="mt-7 text-[16.5px] text-cream/70 max-w-xl mx-auto leading-relaxed">
            Your physician will help determine whether program-based care is the right fit for your
            goals and clinical profile.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link href="/book" className="btn bg-cream text-ink hover:bg-gold px-7 py-4">
              Book Initial Consultation
              <ArrowUpRight className="size-3.5" />
            </Link>
            <Link href="/contact" className="btn bg-transparent border border-cream/30 text-cream hover:bg-cream hover:text-ink px-7 py-4">
              Speak with the Practice
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

function ProgramTile({
  id, tagline, title, visits, duration, perVisit, total, equivalent, difference, href, includes, cadence, featured, icon,
}: {
  id?: string
  tagline: string
  title: string
  visits: string
  duration: string
  perVisit: string
  total: string
  equivalent: string
  difference: string
  href: string
  includes: string[]
  cadence: string
  featured?: boolean
  icon: React.ReactNode
}) {
  return (
    <article
      id={id}
      className={[
        'border p-8 lg:p-10 flex flex-col scroll-mt-32',
        featured ? 'bg-ink text-cream border-gold' : 'bg-paper border-line',
      ].join(' ')}
    >
      <div className="flex items-center justify-between">
        <span className={`size-12 rounded-full flex items-center justify-center ${featured ? 'bg-cream/10 text-gold' : 'bg-sage-soft text-sage'}`}>
          {icon}
        </span>
        {featured && <span className="chip bg-gold text-ink">Most Popular</span>}
      </div>
      <p className={`mt-7 eyebrow ${featured ? 'text-gold' : ''}`}>{tagline}</p>
      <h3 className={`mt-3 font-display text-[26px] leading-tight ${featured ? 'text-cream' : 'text-ink'}`}>
        {title}
      </h3>

      <div className={`mt-7 grid grid-cols-2 gap-3 pt-6 border-t ${featured ? 'border-cream/15' : 'border-line'}`}>
        <Stat label="Visits" value={visits} featured={featured} />
        <Stat label="Duration" value={duration} featured={featured} />
        <Stat label="Per Visit" value={perVisit} featured={featured} />
        <Stat label="Program Total" value={total} featured={featured} />
      </div>

      <div className={`mt-6 pt-6 border-t ${featured ? 'border-cream/15' : 'border-line'}`}>
        <p className={`text-[10.5px] tracking-[0.2em] uppercase ${featured ? 'text-gold' : 'text-sage'}`}>vs. Individual Visits</p>
        <p className={`mt-2 ${featured ? 'text-cream/80' : 'text-ink-soft'} text-[13.5px]`}>
          {equivalent !== '—' ? <>{equivalent} equivalent · <span className={featured ? 'text-gold' : 'text-sage'}>{difference} less</span></> : difference}
        </p>
      </div>

      <div className={`mt-6 pt-6 border-t ${featured ? 'border-cream/15' : 'border-line'}`}>
        <p className={`text-[10.5px] tracking-[0.2em] uppercase ${featured ? 'text-gold' : 'text-sage'}`}>Visit Cadence</p>
        <p className={`mt-2 ${featured ? 'text-cream/80' : 'text-ink-soft'} text-[13.5px] leading-relaxed`}>{cadence}</p>
      </div>

      <div className={`mt-6 pt-6 border-t ${featured ? 'border-cream/15' : 'border-line'}`}>
        <p className={`text-[10.5px] tracking-[0.2em] uppercase ${featured ? 'text-gold' : 'text-sage'} mb-4`}>Includes</p>
        <ul className="space-y-3">
          {includes.map((b) => (
            <li key={b} className={`flex items-start gap-3 text-[13.5px] ${featured ? 'text-cream/80' : 'text-ink-soft'}`}>
              <Check className={`size-3.5 shrink-0 mt-1 ${featured ? 'text-gold' : 'text-sage'}`} />
              {b}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-auto pt-9">
        <Link
          href={href}
          className={`btn w-full px-6 py-3.5 ${
            featured
              ? 'bg-cream text-ink hover:bg-gold'
              : 'bg-ink text-cream hover:bg-sage-deep'
          }`}
        >
          Begin Enrollment
          <ArrowUpRight className="size-3.5" />
        </Link>
      </div>
    </article>
  )
}

function Stat({ label, value, featured }: { label: string; value: string; featured?: boolean }) {
  return (
    <div>
      <p className={`text-[10.5px] tracking-[0.2em] uppercase ${featured ? 'text-gold' : 'text-sage'}`}>{label}</p>
      <p className={`mt-1 font-display text-[22px] ${featured ? 'text-cream' : 'text-ink'}`}>{value}</p>
    </div>
  )
}
