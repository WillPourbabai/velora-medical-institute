import Link from 'next/link'
import Image from 'next/image'
import {
  Calendar,
  ArrowRight,
  Dna,
  HeartPulse,
  Moon,
  Flame,
  Sparkles,
  Activity,
  ShieldCheck,
  ClipboardList,
  Stethoscope,
  Target,
  TrendingUp,
} from 'lucide-react'
import { HomeHero } from '@/components/site/home-hero'
import { VeloraMark } from '@/components/site/logo'

export default function HomePage() {
  return (
    <>
      <HomeHero />

      {/* SERVICE AREAS — 3 cards (07FC939F bottom row) */}
      <section className="bg-paper">
        <div className="container-velora py-16 lg:py-20">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-[10.5px] tracking-[0.32em] uppercase text-brown font-semibold">
              Our Service Areas
            </p>
            <h2
              className="mt-4 font-display leading-[1.05] tracking-[-0.018em] text-ink"
              style={{ fontSize: 'clamp(1.625rem, 3.4vw, 2.5rem)' }}
            >
              Personalized Medicine for Every Stage of Life
            </h2>
            <div className="mt-5 mx-auto w-12 h-px bg-gold" />
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-8 lg:gap-10">
            <ServiceCard
              href="/weight-management"
              photo="/photos/card-weight.png"
              title="Weight Management"
              body="Physician-guided GLP-1 therapy and medical optimization programs to help you lose weight, improve metabolism, and sustain long-term results."
            />
            <ServiceCard
              href="/hormone-therapy"
              photo="/photos/card-hormone.png"
              title="Hormone Optimization"
              body="Restore balance, improve energy, enhance mood, and support overall hormonal health through personalized hormone therapy."
            />
            <ServiceCard
              href="/longevity"
              photo="/photos/card-longevity.png"
              title="Longevity & Preventive Medicine"
              body="Proactive, personalized strategies to optimize health, prevent disease, and support long-term vitality."
            />
          </div>
        </div>
      </section>

      {/* LONGEVITY — split: photo left, copy + 6-pillar cards right */}
      <section className="bg-bone">
        <div className="container-velora py-14 lg:py-18">
          <div className="grid lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-14 items-start">
            <div className="relative aspect-[4/5] rounded-md overflow-hidden lg:sticky lg:top-24">
              <Image
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1600&q=80"
                alt="A couple relaxing on an outdoor terrace at sunset"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-[10.5px] tracking-[0.32em] uppercase text-brown font-semibold">
                Physician-Guided Longevity Care
              </p>
              <h2
                className="mt-4 font-display leading-[1.05] tracking-[-0.018em] text-ink"
                style={{ fontSize: 'clamp(1.625rem, 3.2vw, 2.25rem)' }}
              >
                Six pillars. One framework for living well.
              </h2>
              <p className="mt-5 text-[15px] text-ink-soft leading-[1.65] max-w-md">
                A coordinated approach that connects every system &mdash; cellular health,
                hormones, recovery, and prevention &mdash; into one personalized longevity plan.
              </p>

            <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <Pillar icon={<Dna className="size-5" strokeWidth={1.6} />} title="Cellular Health" body="Mitochondrial function, oxidative stress, biomarkers of aging." />
              <Pillar icon={<HeartPulse className="size-5" strokeWidth={1.6} />} title="Hormone Optimization" body="Bioidentical replacement and continuous lab-driven adjustment." />
              <Pillar icon={<Flame className="size-5" strokeWidth={1.6} />} title="Inflammation Control" body="Targeting chronic low-grade inflammation that drives disease." />
              <Pillar icon={<Moon className="size-5" strokeWidth={1.6} />} title="Sleep & Stress" body="Recovery quality is the foundation everything else builds on." />
              <Pillar icon={<Activity className="size-5" strokeWidth={1.6} />} title="Recovery & Performance" body="Strength, mobility, and the physiology of feeling capable." />
              <Pillar icon={<Sparkles className="size-5" strokeWidth={1.6} />} title="Preventive Health" body="Catching what matters early, with lab work that goes deeper." />
            </div>

            <div className="mt-8">
              <Link
                href="/longevity"
                className="inline-flex items-center gap-2 text-brown hover:text-brown-deep text-[12px] tracking-[0.22em] uppercase font-semibold border-b border-brown/30 pb-1 transition-colors"
              >
                Explore Longevity Care
                <ArrowRight className="size-3.5" />
              </Link>
            </div>
            </div>
          </div>
        </div>
      </section>

      {/* TELEHEALTH EXPERIENCE — 859210E4 */}
      <section className="bg-paper">
        <div className="container-velora py-14 lg:py-18">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div>
              <p className="text-[10.5px] tracking-[0.32em] uppercase text-brown font-semibold">
                What You&rsquo;ll Experience
              </p>
              <h2
                className="mt-4 font-display leading-[1.05] tracking-[-0.018em] text-ink"
                style={{ fontSize: 'clamp(1.625rem, 3.2vw, 2.25rem)' }}
              >
                A real consultation, not a chatbot.
              </h2>
              <div className="mt-5 w-12 h-px bg-gold" />
              <p className="mt-6 text-[15px] text-ink-soft leading-[1.7]">
                Sit down at your laptop and meet your physician face-to-face. We walk through your
                history, your labs, and your goals &mdash; then build a written plan you can come
                back to between visits.
              </p>
              <ul className="mt-6 space-y-3 text-[14px] text-ink-soft">
                {[
                  'Direct video visit with a double board-certified physician',
                  'Comprehensive review of metabolic and hormonal labs',
                  'Written treatment plan and clear next steps',
                  'Secure messaging between scheduled visits',
                ].map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <span className="mt-1.5 size-1.5 rounded-full bg-brown shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative aspect-[4/3] rounded-md overflow-hidden">
              <Image
                src="/photos/telehealth-experience.png"
                alt="Patient on a Velora telehealth visit reviewing the care framework on her laptop"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CARE PATH — A0278AEC two-step */}
      <section className="bg-bone">
        <div className="container-velora py-16 lg:py-20">
          {/* Step 1 */}
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div>
              <p className="text-[10.5px] tracking-[0.32em] uppercase text-brown font-semibold">
                Start Your Journey
              </p>
              <h2
                className="mt-4 font-display leading-[1.04] tracking-[-0.018em] text-ink"
                style={{ fontSize: 'clamp(1.875rem, 3.6vw, 2.75rem)' }}
              >
                Personalized Care.
                <br />
                Guided by Physicians.
                <br />
                <em className="not-italic text-brown">Designed for You.</em>
              </h2>
              <div className="mt-5 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-paper border border-brown/30 text-[10.5px] tracking-[0.22em] uppercase text-ink font-medium">
                <ShieldCheck className="size-3.5 text-brown" strokeWidth={1.8} />
                Double Board-Certified Physicians
              </div>
              <p className="mt-6 text-[15px] text-ink-soft leading-[1.7] max-w-lg">
                Your health is unique. That&rsquo;s why every patient begins with a comprehensive
                physician consultation to uncover the root causes, create clarity, and build a plan
                tailored to your goals.
              </p>
              <div className="mt-7">
                <Link
                  href="/book"
                  className="inline-flex items-center gap-2.5 bg-brown text-cream hover:bg-brown-deep px-6 py-3.5 rounded-md text-[11px] tracking-[0.24em] uppercase font-semibold transition-colors"
                >
                  <Calendar className="size-4" strokeWidth={2} />
                  Book Initial Consultation
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="relative aspect-[4/3] rounded-md overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=1600&q=80"
                  alt="Patient on a Velora telehealth visit at home"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              {/* Step badge overlay */}
              <div className="absolute top-4 left-4 bg-cream/95 backdrop-blur-sm rounded-md px-4 py-2.5 flex items-center gap-3 shadow-md">
                <span className="size-7 rounded-full bg-brown text-cream flex items-center justify-center font-display text-[13px]">
                  1
                </span>
                <span className="text-[10px] tracking-[0.24em] uppercase text-ink font-semibold">
                  Initial Consultation <span className="text-brown">(Tele Visit)</span>
                </span>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="mt-16 lg:mt-20">
            <div className="text-center max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-3">
                <span className="size-8 rounded-full bg-brown text-cream flex items-center justify-center font-display text-[14px]">
                  2
                </span>
                <span className="text-[11px] tracking-[0.32em] uppercase text-brown font-semibold">
                  Choose Your Care Path
                </span>
              </div>
              <p className="mt-4 text-[15px] text-ink-soft leading-[1.65]">
                After your consultation, we&rsquo;ll recommend the best path forward for you.
                Two options, both physician-led:
              </p>
            </div>

            <div className="mt-10 grid md:grid-cols-2 gap-6">
              {/* Path A */}
              <div className="bg-paper rounded-md border border-line/60 p-7 lg:p-9 flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <span className="size-8 rounded-full bg-bone text-brown flex items-center justify-center font-display text-[14px] border border-brown/40">
                    A
                  </span>
                  <span className="text-[10.5px] tracking-[0.28em] uppercase text-ink font-semibold">
                    Individual Follow-Up Visits
                  </span>
                </div>
                <p className="text-[14px] text-ink-soft leading-[1.6] mb-5">
                  Flexible, as-needed care on your terms.
                </p>
                <ul className="space-y-2.5 text-[13.5px] text-ink-soft mb-6 flex-1">
                  <li className="flex items-start gap-2.5">
                    <span className="mt-2 size-1 rounded-full bg-brown shrink-0" />
                    <span><strong className="text-ink font-semibold">Flexible —</strong> One visit at a time</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="mt-2 size-1 rounded-full bg-brown shrink-0" />
                    <span><strong className="text-ink font-semibold">As-needed care —</strong> Visit when you need to</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="mt-2 size-1 rounded-full bg-brown shrink-0" />
                    <span><strong className="text-ink font-semibold">Short-term focus —</strong> Address immediate needs</span>
                  </li>
                </ul>
                <Link
                  href="/individual-visits"
                  className="inline-flex items-center justify-center gap-2 border border-ink text-ink hover:bg-ink hover:text-cream px-5 py-3 rounded-md text-[10.5px] tracking-[0.24em] uppercase font-semibold transition-colors"
                >
                  View Individual Visits
                </Link>
              </div>

              {/* Path B — recommended */}
              <div className="relative bg-paper rounded-md border-2 border-brown p-7 lg:p-9 flex flex-col shadow-[0_20px_50px_-20px_rgba(124,84,54,0.45)]">
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brown text-cream px-4 py-1 text-[9.5px] tracking-[0.28em] uppercase font-semibold rounded-md whitespace-nowrap">
                  Recommended
                </span>
                <div className="flex items-center gap-3 mb-4">
                  <span className="size-8 rounded-full bg-brown text-cream flex items-center justify-center font-display text-[14px]">
                    B
                  </span>
                  <span className="text-[10.5px] tracking-[0.28em] uppercase text-ink font-semibold">
                    Structured Programs
                  </span>
                </div>
                <p className="text-[14px] text-ink-soft leading-[1.6] mb-5">
                  Comprehensive, physician-guided care for lasting results.
                </p>
                <ul className="space-y-2.5 text-[13.5px] text-ink-soft mb-6 flex-1">
                  <li className="flex items-start gap-2.5">
                    <span className="mt-2 size-1 rounded-full bg-brown shrink-0" />
                    <span><strong className="text-ink font-semibold">Comprehensive —</strong> Whole-body, root-cause approach</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="mt-2 size-1 rounded-full bg-brown shrink-0" />
                    <span><strong className="text-ink font-semibold">Root-cause —</strong> Address the underlying issues</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="mt-2 size-1 rounded-full bg-brown shrink-0" />
                    <span><strong className="text-ink font-semibold">Sustainable —</strong> Long-term results and accountability</span>
                  </li>
                </ul>
                <Link
                  href="/programs"
                  className="inline-flex items-center justify-center gap-2 bg-brown text-cream hover:bg-brown-deep px-5 py-3 rounded-md text-[10.5px] tracking-[0.24em] uppercase font-semibold transition-colors"
                >
                  View Programs
                </Link>
              </div>
            </div>
          </div>

          {/* The Difference strip */}
          <div className="mt-14 pt-10 border-t border-line/60">
            <div className="grid md:grid-cols-[auto_1fr_auto] gap-6 md:gap-10 items-center">
              <p className="text-[10.5px] tracking-[0.28em] uppercase text-brown font-semibold whitespace-nowrap">
                The Difference
              </p>
              <p className="text-[14px] text-ink-soft leading-[1.6]">
                Individual visits treat pieces. Program-based care builds the whole foundation.
              </p>
            </div>
            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-5">
              <Differentiator icon={<ShieldCheck className="size-4" />} title="Evidence-Based" body="Care grounded in science and clinical expertise." />
              <Differentiator icon={<Target className="size-4" />} title="Personalized" body="Tailored to your goals, biology, and lifestyle." />
              <Differentiator icon={<TrendingUp className="size-4" />} title="Measurable Results" body="Track progress and optimize over time." />
              <Differentiator icon={<HeartPulse className="size-4" />} title="Long-Term Approach" body="Sustainable strategies for lasting transformation." />
            </div>
          </div>
        </div>
      </section>

      {/* PROGRAMS PREVIEW — abbreviated, links to /programs */}
      <section className="bg-paper">
        <div className="container-velora py-16 lg:py-20">
          <div className="grid lg:grid-cols-[1fr_auto] gap-6 items-end mb-10">
            <div>
              <p className="text-[10.5px] tracking-[0.32em] uppercase text-brown font-semibold">
                Structured Programs · Lasting Results
              </p>
              <h2
                className="mt-4 font-display leading-[1.05] tracking-[-0.018em] text-ink"
                style={{ fontSize: 'clamp(1.75rem, 3.4vw, 2.5rem)' }}
              >
                Physician-Guided Programs Designed for Long-Term Results
              </h2>
            </div>
            <Link
              href="/programs"
              className="inline-flex items-center gap-2 border border-ink text-ink hover:bg-ink hover:text-cream px-5 py-3 rounded-md text-[11px] tracking-[0.24em] uppercase font-semibold transition-colors whitespace-nowrap"
            >
              View All Programs
              <ArrowRight className="size-3.5" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            <MiniProgram
              icon={<ClipboardList className="size-5" strokeWidth={1.6} />}
              title="Medical Weight Management"
              price="$145"
              cadence="16 visits over 12 months"
              href="/weight-management"
            />
            <MiniProgram
              icon={<Sparkles className="size-5" strokeWidth={1.6} />}
              title="Metabolic & Hormone Optimization"
              price="$180"
              cadence="5 visit program (40 min)"
              href="/hormone-therapy"
              featured
            />
            <MiniProgram
              icon={<Stethoscope className="size-5" strokeWidth={1.6} />}
              title="Signature Longevity Program"
              price="$220"
              cadence="5 visit program (60 min)"
              href="/longevity"
            />
          </div>
        </div>
      </section>

      {/* FINAL CTA — brown panel */}
      <section className="bg-bone">
        <div className="container-velora py-16">
          <div className="bg-brown text-cream rounded-2xl px-8 md:px-14 py-12 md:py-16 text-center">
            <VeloraMark size={56} className="mx-auto" />
            <p className="mt-4 text-[10.5px] tracking-[0.32em] uppercase text-gold font-semibold">
              Begin Your Care
            </p>
            <h2
              className="mt-4 font-display leading-[1.05] tracking-[-0.018em] max-w-2xl mx-auto"
              style={{ fontSize: 'clamp(1.625rem, 3.2vw, 2.25rem)' }}
            >
              Begin physician-guided care today.
            </h2>
            <p className="mt-5 text-[15px] text-cream/80 leading-[1.65] max-w-lg mx-auto">
              60-minute initial consultation with a double board-certified physician.
              Personalized plan delivered in writing.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/book"
                className="inline-flex items-center gap-2 bg-cream text-brown hover:bg-paper px-6 py-3.5 rounded-md text-[11px] tracking-[0.24em] uppercase font-semibold transition-colors"
              >
                <Calendar className="size-4" strokeWidth={2} />
                Schedule Consultation
              </Link>
              <Link
                href="/programs"
                className="inline-flex items-center gap-2 border border-cream/40 text-cream hover:bg-cream/10 px-6 py-3.5 rounded-md text-[11px] tracking-[0.24em] uppercase font-semibold transition-colors"
              >
                View Programs
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

/* Helpers */

function ServiceCard({
  href, photo, title, body,
}: { href: string; photo: string; title: string; body: string }) {
  return (
    <Link href={href} className="group flex flex-col">
      <div className="relative aspect-[4/3] rounded-md overflow-hidden bg-bone">
        <Image src={photo} alt={title} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
      </div>
      <h3 className="mt-5 font-display text-[22px] md:text-[24px] leading-tight text-ink">
        {title}
      </h3>
      <p className="mt-2.5 text-[14px] text-ink-soft leading-[1.6] flex-1">{body}</p>
      <span className="mt-4 inline-flex items-center gap-1.5 text-brown group-hover:text-brown-deep text-[11px] tracking-[0.24em] uppercase font-semibold transition-colors">
        Learn More <ArrowRight className="size-3.5" />
      </span>
    </Link>
  )
}

function Pillar({
  icon, title, body,
}: { icon: React.ReactNode; title: string; body: string }) {
  return (
    <div className="bg-paper border border-line/60 rounded-md p-5">
      <div className="flex items-center gap-3">
        <span className="size-9 rounded-full bg-bone border border-brown/30 text-brown flex items-center justify-center">
          {icon}
        </span>
        <h3 className="font-display text-[16px] text-ink leading-tight">{title}</h3>
      </div>
      <p className="mt-3 text-[13px] text-ink-soft leading-[1.55]">{body}</p>
    </div>
  )
}

function Differentiator({
  icon, title, body,
}: { icon: React.ReactNode; title: string; body: string }) {
  return (
    <div className="flex items-start gap-3">
      <span className="mt-0.5 size-7 rounded-full bg-bone border border-brown/30 text-brown flex items-center justify-center shrink-0">
        {icon}
      </span>
      <div>
        <p className="text-[10.5px] tracking-[0.22em] uppercase text-ink font-semibold">{title}</p>
        <p className="mt-1 text-[12.5px] text-ink-soft leading-[1.5]">{body}</p>
      </div>
    </div>
  )
}

function MiniProgram({
  icon, title, price, cadence, href, featured,
}: {
  icon: React.ReactNode; title: string; price: string; cadence: string; href: string; featured?: boolean
}) {
  return (
    <Link
      href={href}
      className={[
        'group relative flex flex-col p-6 lg:p-7 rounded-md transition-all',
        featured
          ? 'bg-bone border-2 border-brown shadow-[0_16px_40px_-20px_rgba(124,84,54,0.45)]'
          : 'bg-bone border border-line/60 hover:border-brown/60',
      ].join(' ')}
    >
      {featured && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brown text-cream px-3 py-1 text-[9px] tracking-[0.28em] uppercase font-semibold rounded-md whitespace-nowrap">
          Recommended
        </span>
      )}
      <span className="size-10 rounded-full bg-paper border border-brown/30 text-brown flex items-center justify-center">
        {icon}
      </span>
      <h3 className="mt-5 font-display text-[18px] leading-tight text-ink">{title}</h3>
      <div className="mt-4 flex items-baseline gap-1">
        <span className="font-display text-[34px] leading-none text-ink">{price}</span>
        <span className="text-[12px] text-ink-soft italic">/ visit</span>
      </div>
      <p className="mt-1.5 text-[10px] tracking-[0.22em] uppercase text-brown font-semibold">{cadence}</p>
      <span className="mt-5 inline-flex items-center gap-1.5 text-brown group-hover:text-brown-deep text-[11px] tracking-[0.22em] uppercase font-semibold">
        Learn More <ArrowRight className="size-3.5" />
      </span>
    </Link>
  )
}
