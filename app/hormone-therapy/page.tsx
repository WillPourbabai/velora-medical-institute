import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import {
  Calendar,
  ArrowRight,
  HeartPulse,
  Brain,
  Moon,
  Zap,
  Sparkles,
  ShieldCheck,
  FlaskConical,
  Activity,
  Stethoscope,
  Monitor,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Hormone Optimization',
  description:
    'Personalized hormone therapy for men and women. Restore balance, improve energy, and support overall wellbeing — guided by double board-certified physicians.',
}

export default function HormoneTherapyPage() {
  return (
    <>
      {/* HERO — F85A00FB */}
      <section className="relative bg-bone overflow-hidden">
        <div className="container-velora py-12 lg:py-16">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div>
              <p className="text-[10.5px] tracking-[0.32em] uppercase text-brown font-semibold">
                Hormone Optimization
              </p>
              <h1
                className="mt-5 font-display leading-[1.04] tracking-[-0.018em] text-ink"
                style={{ fontSize: 'clamp(2rem, 4.4vw, 3.5rem)' }}
              >
                Personalized Therapy
                <br />
                for <span className="text-brown">Men and Women.</span>
              </h1>
              <div className="mt-5 w-16 h-px bg-gold" />
              <p className="mt-6 text-[15px] text-ink-soft leading-[1.65] max-w-md">
                Restore balance, improve energy, enhance mood, and support overall hormonal
                health. Bioidentical therapy guided by lab work and physician oversight.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  href="/book?type=hormone"
                  className="inline-flex items-center gap-2 bg-brown text-cream hover:bg-brown-deep px-6 py-3.5 rounded-md text-[11px] tracking-[0.24em] uppercase font-semibold transition-colors"
                >
                  <Calendar className="size-4" strokeWidth={2} />
                  Schedule Consultation
                </Link>
                <Link
                  href="#symptoms"
                  className="inline-flex items-center gap-2 border border-ink text-ink hover:bg-ink hover:text-cream px-6 py-3.5 rounded-md text-[11px] tracking-[0.24em] uppercase font-semibold transition-colors"
                >
                  Learn More
                  <ArrowRight className="size-3.5" />
                </Link>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-md overflow-hidden">
              <Image
                src="/photos/hormone-hero.png"
                alt="A smiling couple with the Velora Hormone Optimization product on a table"
                fill
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* OVERVIEW + 4 PILLARS */}
      <section className="bg-paper">
        <div className="container-velora py-14 lg:py-16">
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-10 lg:gap-14 items-start">
            <div>
              <p className="text-[10.5px] tracking-[0.32em] uppercase text-brown font-semibold">
                Why Hormone Optimization
              </p>
              <h2
                className="mt-4 font-display leading-[1.05] tracking-[-0.018em] text-ink"
                style={{ fontSize: 'clamp(1.625rem, 3.2vw, 2.25rem)' }}
              >
                Hormones drive how you feel.
              </h2>
              <div className="mt-5 w-12 h-px bg-gold" />
              <p className="mt-6 text-[15px] text-ink-soft leading-[1.7]">
                Your hormones regulate metabolism, sleep, mood, focus, and energy. When they shift
                out of range, the symptoms show up everywhere &mdash; even when standard labs read
                &ldquo;normal.&rdquo;
              </p>
              <p className="mt-4 text-[15px] text-ink-soft leading-[1.7]">
                Treatment begins with a full clinical assessment and laboratory panel. From there,
                a physician designs a bioidentical hormone protocol tuned to your physiology and
                refined visit by visit.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <Pillar icon={<HeartPulse className="size-5" strokeWidth={1.6} />} title="Restore Balance" body="Bioidentical therapy matched to your lab values." />
              <Pillar icon={<Zap className="size-5" strokeWidth={1.6} />} title="Renewed Energy" body="Address fatigue and the underlying causes." />
              <Pillar icon={<Brain className="size-5" strokeWidth={1.6} />} title="Sharper Mood" body="Mood, focus, and stress resilience." />
              <Pillar icon={<Moon className="size-5" strokeWidth={1.6} />} title="Better Sleep" body="Recovery quality is where everything else begins." />
            </div>
          </div>
        </div>
      </section>

      {/* SYMPTOMS GRID */}
      <section id="symptoms" className="bg-bone">
        <div className="container-velora py-14 lg:py-16">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-[10.5px] tracking-[0.32em] uppercase text-brown font-semibold">
              What We Evaluate
            </p>
            <h2
              className="mt-4 font-display leading-[1.05] tracking-[-0.018em] text-ink"
              style={{ fontSize: 'clamp(1.5rem, 3vw, 2.125rem)' }}
            >
              Symptoms that often point to hormonal imbalance
            </h2>
          </div>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: <Zap className="size-4" />, label: 'Persistent fatigue or low energy' },
              { icon: <HeartPulse className="size-4" />, label: 'Decreased libido' },
              { icon: <Activity className="size-4" />, label: 'Weight gain or trouble losing weight' },
              { icon: <Sparkles className="size-4" />, label: 'Perimenopause or menopause symptoms' },
              { icon: <Brain className="size-4" />, label: 'Brain fog or reduced concentration' },
              { icon: <FlaskConical className="size-4" />, label: 'Mood changes or irritability' },
              { icon: <Moon className="size-4" />, label: 'Poor sleep or insomnia' },
              { icon: <Stethoscope className="size-4" />, label: 'Symptoms suggestive of low testosterone' },
            ].map((s) => (
              <div
                key={s.label}
                className="bg-paper border border-line/60 rounded-md p-4 flex items-start gap-3"
              >
                <span className="mt-0.5 size-7 rounded-full bg-bone border border-brown/30 text-brown flex items-center justify-center shrink-0">
                  {s.icon}
                </span>
                <p className="text-[13px] text-ink leading-[1.45]">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DARK FOOTER STRIP */}
      <section className="bg-brown text-cream">
        <div className="container-velora py-12 lg:py-14">
          <div className="grid md:grid-cols-[1fr_auto] gap-8 items-center">
            <div className="grid sm:grid-cols-3 gap-x-6 gap-y-5">
              <FooterStrip icon={<Stethoscope className="size-4" />} title="Physician-Led Care" body="Board-certified medical oversight." />
              <FooterStrip icon={<ShieldCheck className="size-4" />} title="Safe & Effective" body="Lab-driven, individually tuned therapy." />
              <FooterStrip icon={<Monitor className="size-4" />} title="Telemedicine Convenience" body="Care from home, on your schedule." />
            </div>
            <div className="text-right">
              <p className="font-display text-[18px] leading-[1.3] text-cream max-w-[260px] ml-auto">
                Restore. <span className="text-gold">Renew.</span>
                <br />
                Revitalize.
              </p>
              <Link
                href="/book?type=hormone"
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
    <div className="bg-bone border border-line/60 rounded-md p-5">
      <span className="size-9 rounded-full bg-paper border border-brown/30 text-brown flex items-center justify-center">
        {icon}
      </span>
      <h3 className="mt-4 font-display text-[16px] leading-tight text-ink">{title}</h3>
      <p className="mt-2 text-[13px] text-ink-soft leading-[1.55]">{body}</p>
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
