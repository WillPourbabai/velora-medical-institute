import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import {
  Calendar,
  ArrowRight,
  Pill,
  Activity,
  Stethoscope,
  TrendingUp,
  ClipboardList,
  HeartPulse,
  ShieldCheck,
  Monitor,
  Sparkles,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Medical Weight Management',
  description:
    'Physician-guided GLP-1 weight management. Personalized plans, evidence-based medication, and ongoing care to lose weight, improve metabolism, and keep it off.',
}

export default function WeightManagementPage() {
  return (
    <>
      {/* HERO — B5E82679 */}
      <section className="relative bg-bone overflow-hidden">
        <div className="container-velora py-12 lg:py-16">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div>
              <p className="text-[10.5px] tracking-[0.32em] uppercase text-brown font-semibold">
                Medical Weight Management
              </p>
              <h1
                className="mt-5 font-display leading-[1.04] tracking-[-0.018em] text-ink"
                style={{ fontSize: 'clamp(2rem, 4.4vw, 3.5rem)' }}
              >
                Medical Weight Loss.
                <br />
                <span className="text-brown">Real Results. Lasting Change.</span>
              </h1>
              <div className="mt-5 w-16 h-px bg-gold" />
              <p className="mt-6 text-[15px] text-ink-soft leading-[1.65] max-w-md">
                Physician-guided weight loss with GLP-1 medications and metabolic optimization
                to help you lose weight, improve health, and keep it off.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  href="/book?type=weight"
                  className="inline-flex items-center gap-2 bg-brown text-cream hover:bg-brown-deep px-6 py-3.5 rounded-md text-[11px] tracking-[0.24em] uppercase font-semibold transition-colors"
                >
                  <Calendar className="size-4" strokeWidth={2} />
                  Schedule Consultation
                </Link>
                <Link
                  href="#whats-included"
                  className="inline-flex items-center gap-2 border border-ink text-ink hover:bg-ink hover:text-cream px-6 py-3.5 rounded-md text-[11px] tracking-[0.24em] uppercase font-semibold transition-colors"
                >
                  Learn More
                  <ArrowRight className="size-3.5" />
                </Link>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-md overflow-hidden">
              <Image
                src="/photos/wm-hero.png"
                alt="A patient holding a Velora weight loss kit"
                fill
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4 TRUST PILLARS */}
      <section className="bg-paper">
        <div className="container-velora py-12 lg:py-14">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-7">
            <Pillar
              icon={<Pill className="size-5" strokeWidth={1.6} />}
              title="Clinically Proven GLP-1 Medications"
              body="FDA-approved medication for safe, effective results."
            />
            <Pillar
              icon={<Activity className="size-5" strokeWidth={1.6} />}
              title="Metabolic Optimization"
              body="Improve metabolism, energy, and body composition."
            />
            <Pillar
              icon={<Stethoscope className="size-5" strokeWidth={1.6} />}
              title="Physician-Guided Care"
              body="Direct supervision and ongoing monitoring at every step."
            />
            <Pillar
              icon={<TrendingUp className="size-5" strokeWidth={1.6} />}
              title="Sustainable Results"
              body="Build healthy habits and maintain lasting change."
            />
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED + STATS */}
      <section id="whats-included" className="bg-bone">
        <div className="container-velora py-14 lg:py-18">
          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-10 lg:gap-14 items-start">
            {/* What's Included */}
            <div>
              <p className="text-[10.5px] tracking-[0.32em] uppercase text-brown font-semibold">
                What&rsquo;s Included
              </p>
              <h2
                className="mt-4 font-display leading-[1.05] tracking-[-0.018em] text-ink"
                style={{ fontSize: 'clamp(1.625rem, 3.2vw, 2.25rem)' }}
              >
                A complete care framework
              </h2>
              <div className="mt-5 w-12 h-px bg-gold" />

              <ul className="mt-7 grid sm:grid-cols-2 gap-4">
                <Included icon={<ClipboardList className="size-4" />} title="Personalized treatment plan" body="Customized to your physiology, history, and goals." />
                <Included icon={<HeartPulse className="size-4" />} title="Nutrition & lifestyle guidance" body="Evidence-based nutrition and habit support." />
                <Included icon={<Monitor className="size-4" />} title="Ongoing monitoring & support" body="Regular follow-ups to adjust and refine." />
                <Included icon={<Sparkles className="size-4" />} title="Educational support" body="Clear explanations and resources at every step." />
              </ul>

              {/* Stats row */}
              <div className="mt-9 grid grid-cols-3 gap-4">
                <Stat label="Average Weight Loss" value="15–25%" />
                <Stat label="See First Results" value="4–8 Weeks" />
                <Stat label="Long-Term Success" value="Ongoing" subValue="supervision" />
              </div>
            </div>

            {/* Are You a Candidate */}
            <aside className="bg-paper border border-line/60 rounded-md p-7 lg:p-8 sticky lg:top-24">
              <p className="text-[10.5px] tracking-[0.32em] uppercase text-brown font-semibold">
                Are You a Candidate?
              </p>
              <h3 className="mt-3 font-display text-[22px] leading-tight text-ink">
                Many adults qualify for GLP-1 therapy.
              </h3>
              <ul className="mt-5 space-y-3 text-[14px] text-ink-soft">
                {[
                  'BMI greater than 27 with a related condition',
                  'BMI greater than 30',
                  'Weight regain after dieting',
                  'Difficulty losing weight despite consistent effort',
                  'Looking for sustained, physician-guided results',
                ].map((b) => (
                  <li key={b} className="flex items-start gap-2.5">
                    <span className="mt-2 size-1 rounded-full bg-brown shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/book?type=weight"
                className="mt-6 w-full inline-flex items-center justify-center gap-2 bg-brown text-cream hover:bg-brown-deep px-5 py-3.5 rounded-md text-[11px] tracking-[0.24em] uppercase font-semibold transition-colors"
              >
                Find Out If You Qualify
              </Link>
            </aside>
          </div>
        </div>
      </section>

      {/* DARK FOOTER STRIP */}
      <section className="bg-brown text-cream">
        <div className="container-velora py-12 lg:py-14">
          <div className="grid md:grid-cols-[1fr_auto] gap-8 items-center">
            <div className="grid sm:grid-cols-3 gap-x-6 gap-y-5">
              <FooterStrip icon={<Stethoscope className="size-4" />} title="Physician-Led Care" body="Board-certified medical oversight." />
              <FooterStrip icon={<ShieldCheck className="size-4" />} title="Safe & Effective" body="Evidence-based treatments for lasting results." />
              <FooterStrip icon={<Monitor className="size-4" />} title="Telemedicine Convenience" body="Care from home, on your schedule." />
            </div>
            <div className="text-right">
              <p className="font-display text-[18px] leading-[1.3] text-cream max-w-[260px] ml-auto">
                Your Journey. <span className="text-gold">Our Expertise.</span>
                <br />
                Lasting Results.
              </p>
              <Link
                href="/book"
                className="mt-4 inline-flex items-center gap-2 bg-cream text-brown hover:bg-paper px-5 py-3 rounded-md text-[10.5px] tracking-[0.24em] uppercase font-semibold transition-colors"
              >
                <Calendar className="size-4" />
                Schedule
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

function Pillar({ icon, title, body }: { icon: React.ReactNode; title: string; body: string }) {
  return (
    <div>
      <span className="size-10 rounded-full bg-bone border border-brown/30 text-brown flex items-center justify-center">
        {icon}
      </span>
      <h3 className="mt-4 font-display text-[15px] md:text-[16px] leading-tight text-ink">{title}</h3>
      <p className="mt-2 text-[13px] text-ink-soft leading-[1.5]">{body}</p>
    </div>
  )
}

function Included({ icon, title, body }: { icon: React.ReactNode; title: string; body: string }) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-0.5 size-8 rounded-full bg-paper border border-brown/30 text-brown flex items-center justify-center shrink-0">
        {icon}
      </span>
      <div>
        <p className="text-[14px] text-ink font-semibold leading-tight">{title}</p>
        <p className="mt-1 text-[12.5px] text-ink-soft leading-[1.5]">{body}</p>
      </div>
    </li>
  )
}

function Stat({ label, value, subValue }: { label: string; value: string; subValue?: string }) {
  return (
    <div className="bg-paper border border-line/60 rounded-md p-4 text-center">
      <p className="font-display text-[22px] md:text-[26px] leading-none text-brown">{value}</p>
      {subValue && <p className="mt-1 text-[11px] text-ink-soft italic">{subValue}</p>}
      <p className="mt-2 text-[10px] tracking-[0.22em] uppercase text-ink-soft">{label}</p>
    </div>
  )
}

function FooterStrip({ icon, title, body }: { icon: React.ReactNode; title: string; body: string }) {
  return (
    <div className="flex items-start gap-3">
      <span className="mt-0.5 size-8 rounded-full bg-cream/15 text-gold flex items-center justify-center shrink-0">
        {icon}
      </span>
      <div>
        <p className="text-[10.5px] tracking-[0.22em] uppercase text-cream font-semibold">{title}</p>
        <p className="mt-1 text-[12px] text-cream/75 leading-[1.5]">{body}</p>
      </div>
    </div>
  )
}
