import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import {
  Calendar,
  ArrowRight,
  Dna,
  HeartPulse,
  Moon,
  Flame,
  Sparkles,
  Activity,
  Stethoscope,
  ShieldCheck,
  Monitor,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Longevity & Preventive Medicine',
  description:
    'Physician-guided longevity care — cellular health, hormone optimization, recovery, and prevention. A coordinated approach to living well longer.',
}

export default function LongevityPage() {
  return (
    <>
      {/* HERO — clean outdoor sunset photo */}
      <section className="relative overflow-hidden">
        <div className="relative h-[60vh] min-h-[480px] max-h-[680px]">
          <Image
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=2400&q=80"
            alt="Mountain view at sunset"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-bone/97 via-bone/55 to-bone/20" />
          <div className="absolute inset-0">
            <div className="container-velora h-full flex items-center">
              <div className="max-w-xl">
                <p className="text-[10.5px] tracking-[0.32em] uppercase text-brown font-semibold">
                  Physician-Guided Longevity Care
                </p>
                <h1
                  className="mt-5 font-display leading-[1.04] tracking-[-0.018em] text-ink"
                  style={{ fontSize: 'clamp(2rem, 4.4vw, 3.5rem)' }}
                >
                  Live well. <em className="not-italic text-brown">Longer.</em>
                </h1>
                <div className="mt-5 w-16 h-px bg-gold" />
                <p className="mt-6 text-[15px] text-ink-soft leading-[1.7] max-w-md">
                  A coordinated, personalized approach to optimize cellular health,
                  hormone balance, recovery, and prevention &mdash; the systems that drive
                  how well you age.
                </p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <Link
                    href="/book"
                    className="inline-flex items-center gap-2 bg-brown text-cream hover:bg-brown-deep px-6 py-3.5 rounded-md text-[11px] tracking-[0.24em] uppercase font-semibold transition-colors"
                  >
                    <Calendar className="size-4" strokeWidth={2} />
                    Schedule Consultation
                  </Link>
                  <Link
                    href="#pillars"
                    className="inline-flex items-center gap-2 border border-ink text-ink hover:bg-ink hover:text-cream px-6 py-3.5 rounded-md text-[11px] tracking-[0.24em] uppercase font-semibold transition-colors"
                  >
                    Explore the Six Pillars
                    <ArrowRight className="size-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SIX PILLARS */}
      <section id="pillars" className="bg-paper">
        <div className="container-velora py-14 lg:py-18">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-[10.5px] tracking-[0.32em] uppercase text-brown font-semibold">
              The Six Pillars
            </p>
            <h2
              className="mt-4 font-display leading-[1.05] tracking-[-0.018em] text-ink"
              style={{ fontSize: 'clamp(1.75rem, 3.4vw, 2.5rem)' }}
            >
              The systems that drive how well you age.
            </h2>
            <div className="mt-5 mx-auto w-12 h-px bg-gold" />
          </div>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <Pillar
              icon={<Dna className="size-6" strokeWidth={1.5} />}
              title="Cellular Health"
              body="Mitochondrial function, oxidative stress, and biomarkers of biological age. The starting point for everything that follows."
            />
            <Pillar
              icon={<HeartPulse className="size-6" strokeWidth={1.5} />}
              title="Hormone Optimization"
              body="Bioidentical replacement and continuous lab-driven adjustment to restore balance across decades."
            />
            <Pillar
              icon={<Flame className="size-6" strokeWidth={1.5} />}
              title="Inflammation Control"
              body="Targeting chronic low-grade inflammation — the silent driver of most age-related disease."
            />
            <Pillar
              icon={<Moon className="size-6" strokeWidth={1.5} />}
              title="Sleep & Stress"
              body="Recovery quality is the foundation. Better sleep architecture, lower allostatic load."
            />
            <Pillar
              icon={<Activity className="size-6" strokeWidth={1.5} />}
              title="Recovery & Performance"
              body="Strength, mobility, and the physiology of feeling capable in your body — at every age."
            />
            <Pillar
              icon={<Sparkles className="size-6" strokeWidth={1.5} />}
              title="Preventive Health"
              body="Catching what matters early. Lab work that goes deeper than annual physicals usually do."
            />
          </div>
        </div>
      </section>

      {/* SIGNATURE LONGEVITY PROGRAM CTA */}
      <section className="bg-bone">
        <div className="container-velora py-14 lg:py-16">
          <div className="bg-brown text-cream rounded-2xl px-8 md:px-14 py-10 md:py-14 grid lg:grid-cols-[1.4fr_1fr] gap-10 items-center">
            <div>
              <p className="text-[10.5px] tracking-[0.32em] uppercase text-gold font-semibold">
                Signature Longevity Program
              </p>
              <h2
                className="mt-4 font-display leading-[1.05] tracking-[-0.012em] text-cream"
                style={{ fontSize: 'clamp(1.625rem, 3.2vw, 2.25rem)' }}
              >
                A complete framework, delivered visit by visit.
              </h2>
              <p className="mt-5 text-[15px] text-cream/80 leading-[1.65] max-w-xl">
                Five extended visits with a double board-certified physician.
                Comprehensive labs, advanced metabolic assessment, and a written
                protocol refined as you progress.
              </p>
              <ul className="mt-5 grid sm:grid-cols-2 gap-x-6 gap-y-2 text-[13.5px] text-cream/85">
                <li className="flex items-start gap-2">
                  <span className="mt-2 size-1 rounded-full bg-gold shrink-0" />
                  Longevity-focused care
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 size-1 rounded-full bg-gold shrink-0" />
                  Advanced metabolic assessment
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 size-1 rounded-full bg-gold shrink-0" />
                  Preventive &amp; performance focus
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 size-1 rounded-full bg-gold shrink-0" />
                  Long-term health optimization
                </li>
              </ul>
            </div>

            <div className="bg-cream/10 backdrop-blur-sm rounded-md p-7 text-center border border-cream/20">
              <p className="text-[10px] tracking-[0.28em] uppercase text-gold font-semibold">
                5 Visit Program (60 min)
              </p>
              <div className="mt-3 flex items-baseline justify-center gap-1">
                <span className="font-display text-[56px] leading-none text-cream">$220</span>
                <span className="text-[13px] text-cream/70 italic">/ visit</span>
              </div>
              <Link
                href="/book"
                className="mt-6 w-full inline-flex items-center justify-center gap-2 bg-cream text-brown hover:bg-paper px-5 py-3.5 rounded-md text-[11px] tracking-[0.24em] uppercase font-semibold transition-colors"
              >
                Schedule Consultation
              </Link>
              <Link
                href="/programs"
                className="mt-3 w-full inline-flex items-center justify-center gap-2 text-cream/85 hover:text-cream text-[10.5px] tracking-[0.24em] uppercase font-semibold transition-colors"
              >
                Compare All Programs
                <ArrowRight className="size-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="bg-paper">
        <div className="container-velora py-10 lg:py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-5">
            <Trust icon={<Stethoscope className="size-5" />} title="Physician-Led" body="Board-certified clinical oversight." />
            <Trust icon={<ShieldCheck className="size-5" />} title="Evidence-Based" body="Grounded in science, not trends." />
            <Trust icon={<Monitor className="size-5" />} title="Telemedicine" body="Care from home, on your schedule." />
            <Trust icon={<HeartPulse className="size-5" />} title="Long-Term Approach" body="Strategies for sustained transformation." />
          </div>
        </div>
      </section>
    </>
  )
}

function Pillar({ icon, title, body }: { icon: React.ReactNode; title: string; body: string }) {
  return (
    <div className="bg-bone border border-line/60 rounded-md p-6">
      <span className="size-11 rounded-full bg-paper border border-brown/30 text-brown flex items-center justify-center">
        {icon}
      </span>
      <h3 className="mt-5 font-display text-[18px] leading-tight text-ink">{title}</h3>
      <p className="mt-2.5 text-[13.5px] text-ink-soft leading-[1.6]">{body}</p>
    </div>
  )
}

function Trust({ icon, title, body }: { icon: React.ReactNode; title: string; body: string }) {
  return (
    <div className="flex items-start gap-3">
      <span className="mt-0.5 size-9 rounded-full bg-bone border border-brown/30 text-brown flex items-center justify-center shrink-0">
        {icon}
      </span>
      <div>
        <p className="text-[10.5px] tracking-[0.24em] uppercase text-ink font-semibold">{title}</p>
        <p className="mt-1 text-[12.5px] text-ink-soft leading-[1.5]">{body}</p>
      </div>
    </div>
  )
}
