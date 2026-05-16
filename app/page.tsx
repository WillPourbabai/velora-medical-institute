import Link from 'next/link'
import Image from 'next/image'
import {
  Activity,
  Calendar,
  ArrowRight,
  HeartPulse,
  ShieldCheck,
  Target,
  TrendingUp,
  Check,
} from 'lucide-react'
import { HomeHero } from '@/components/site/home-hero'
import { VeloraMark } from '@/components/site/logo'

export default function HomePage() {
  return (
    <>
      <HomeHero />

      {/* ===== 01 · OUR APPROACH — Physician-led composite (airy) ===== */}
      <section className="bg-bone border-t border-line/40">
        <div className="container-velora pt-10 lg:pt-14 pb-2 text-center">
          <ChapterEyebrow number="01" label="Our Approach" />
        </div>
        <div className="relative w-full aspect-[16/9] lg:max-h-[calc(100vh-78px)] overflow-hidden">
          <Image
            src="/physician-led-care.png"
            alt="Drs. Tolebeyan and Amini — double board-certified in Internal Medicine and Obesity Medicine — flanking the Velora care framework: Physician-Led Individualized Care; Physician-Directed Care; Personalized Treatment Plans; Telemedicine Visits; Direct-Pay Practice"
            fill
            sizes="100vw"
            className="object-contain object-center"
            priority
          />
        </div>
      </section>

      {/* ===== 02 · OUR SERVICE AREAS — 3 photo-forward cards ===== */}
      <section className="bg-paper">
        <div className="container-velora py-16 lg:py-24">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-[10px] sm:text-[11px] tracking-[0.34em] uppercase text-brown font-semibold">
              Our Service Areas
            </p>
            <h2
              className="mt-5 font-display leading-[1.1] tracking-[-0.018em] text-ink"
              style={{ fontSize: 'clamp(1.75rem, 3.6vw, 2.625rem)' }}
            >
              Personalized Medicine for Every Stage of Life
            </h2>
          </div>

          <div className="mt-14 lg:mt-16 grid md:grid-cols-3 gap-7 lg:gap-9 max-w-6xl mx-auto">
            <ServiceCard
              href="/weight-management"
              image="/photos/card-weight.png"
              title="Weight Management"
              body="Physician-guided GLP-1 therapy and medical weight management programs to help you lose weight, improve metabolism, and sustain long-term results."
            />
            <ServiceCard
              href="/hormone-therapy"
              image="/photos/card-hormone.png"
              title="Hormone Optimization"
              body="Restore balance, improve energy, enhance mood, and support overall hormonal health through personalized hormone therapy."
            />
            <ServiceCard
              href="/longevity"
              image="/photos/card-longevity.png"
              title="Longevity & Preventive Medicine"
              body="Proactive, personalized strategies to optimize health, prevent disease, and support long-term vitality."
            />
          </div>
        </div>
      </section>

      {/* ===== YOUR PATH — Step 1: Begin with a conversation ===== */}
      <section className="bg-bone">
        <div className="container-velora pt-20 lg:pt-24 pb-16 lg:pb-20">
          <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] gap-10 lg:gap-14 xl:gap-20 items-center">
            {/* LEFT — copy */}
            <div className="max-w-[560px]">
              <p className="text-[10.5px] tracking-[0.42em] uppercase text-brown font-semibold">
                Start Your Journey
              </p>
              <h2
                className="mt-6 font-display text-ink leading-[1.0] tracking-[-0.02em]"
                style={{ fontSize: 'clamp(2.125rem, 4.4vw, 3.25rem)' }}
              >
                Personalized Care.
                <br />
                Guided by Physicians.
                <br />
                <em className="italic font-display text-brown">Designed for You.</em>
              </h2>

              <div className="mt-7 flex items-center gap-2.5">
                <ShieldCheck className="size-4 text-brown shrink-0" strokeWidth={1.8} />
                <span className="text-[12px] text-ink-soft leading-[1.45]">
                  Double Board-Certified Physicians in Internal Medicine &amp; Obesity Medicine
                </span>
              </div>

              <p className="mt-6 text-[14.5px] text-ink-soft leading-[1.75]">
                Your health is unique. That&rsquo;s why every patient begins with a
                comprehensive physician consultation to uncover the root causes, create
                clarity, and build a plan tailored to your goals.
              </p>

              <div className="mt-8">
                <Link
                  href="/book"
                  className="inline-flex items-center gap-2.5 bg-brown text-cream hover:bg-brown-deep px-6 py-4 sm:py-3.5 rounded-md text-[12.5px] sm:text-[11px] tracking-[0.24em] sm:tracking-[0.26em] uppercase font-semibold transition-colors"
                >
                  <Calendar className="size-4" strokeWidth={2} />
                  Book Initial Consultation
                </Link>
              </div>
            </div>

            {/* RIGHT — photo with bigger callout card top-left */}
            <div className="relative">
              <div className="relative aspect-[4/3] lg:aspect-[5/4] xl:aspect-[6/5] rounded-2xl overflow-hidden shadow-[0_36px_70px_-30px_rgba(74,52,28,0.55)]">
                <Image
                  src="/photos/hero-telehealth.png"
                  alt="Patient on a Velora telehealth visit with a physician"
                  fill
                  sizes="(min-width: 1024px) 55vw, 100vw"
                  className="object-cover"
                />
              </div>
              {/* "1 · Initial Consultation" callout — overlay on md+, hidden on mobile (photo isn't wide enough) */}
              <div className="hidden md:block absolute top-5 left-5 md:top-7 md:left-7 w-[260px] md:w-[300px] bg-cream rounded-xl px-5 py-4 shadow-[0_24px_50px_-22px_rgba(74,52,28,0.55)] ring-1 ring-line/50">
                <div className="flex items-center gap-3">
                  <span className="size-9 rounded-full bg-brown text-cream flex items-center justify-center font-display text-[15px] shrink-0">
                    1
                  </span>
                  <span className="text-[10.5px] tracking-[0.24em] uppercase text-ink font-semibold leading-[1.3]">
                    Initial Consultation
                    <br />
                    <span className="text-brown">(Tele Visit)</span>
                  </span>
                </div>
                <p className="mt-3 text-[12px] text-ink-soft leading-[1.55]">
                  Comprehensive physician evaluation, lab review, and personalized
                  plan tailored to your goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== YOUR PATH — Step 2: Choose your care path (forked road) ===== */}
      <section className="bg-bone">
        <div className="container-velora text-center pt-12 sm:pt-16 lg:pt-4">
          <div className="inline-flex items-center gap-3.5">
            <span className="size-11 rounded-full bg-brown text-cream flex items-center justify-center font-display text-[18px]">
              2
            </span>
            <span className="text-[12px] sm:text-[11px] tracking-[0.28em] sm:tracking-[0.36em] uppercase text-ink font-semibold">
              Choose Your Care Path
            </span>
          </div>
          <p className="mt-5 mx-auto max-w-xl text-[14.5px] sm:text-[14px] text-ink-soft leading-[1.65] px-2">
            After your consultation, we&rsquo;ll recommend the best path forward for you.
          </p>
        </div>

        <div className="relative mt-10 lg:mt-12">
          <div className="relative aspect-[3/2] md:aspect-[16/7] lg:aspect-[2/1] max-h-[88vh] overflow-hidden">
            <Image
              src="/photos/carepath-fork-final.png"
              alt="A woman pausing at a forked road between a small cottage and a larger home — choosing her care direction"
              fill
              sizes="100vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-b from-transparent to-bone/40 pointer-events-none" />

            {/* "Which path is right for me?" — centered italic overlay in sky */}
            <div className="absolute top-[6%] md:top-[8%] left-1/2 -translate-x-1/2 text-center pointer-events-none">
              <p
                className="font-display italic text-ink leading-[1.1] drop-shadow-[0_2px_8px_rgba(244,235,211,0.6)]"
                style={{ fontSize: 'clamp(1.25rem, 2.4vw, 1.875rem)' }}
              >
                Which path
                <br />
                is right for me?
              </p>
              <div className="mt-2.5 flex items-center justify-center gap-1.5">
                <span className="size-1.5 rounded-full bg-brown/80" />
                <span className="size-1.5 rounded-full bg-brown/80" />
                <span className="size-1.5 rounded-full bg-brown/80" />
              </div>
            </div>
          </div>

          {/* Path Cards — flow below image on mobile, float over image bottom on md+ */}
          <div className="md:absolute md:inset-x-0 md:bottom-6 mt-6 md:mt-0">
            <div className="container-velora">
              <div className="grid grid-cols-1 md:grid-cols-[1fr_minmax(0,0.4fr)_1fr] gap-5 md:gap-3 items-end">
                <PathCard
                  letter="A"
                  title="Individual Follow-Up Visits"
                  subtitle="Flexible, as-needed care on your terms."
                  bullets={[
                    ['Flexible', 'One visit at a time'],
                    ['As-needed care', 'We’re here when you need us'],
                    ['Short-term focus', 'Address immediate needs'],
                  ]}
                  cta="View Individual Visits"
                  ctaHref="/individual-visits"
                />
                <div className="hidden md:block" aria-hidden />
                <PathCard
                  letter="B"
                  recommended
                  title="Structured Programs"
                  subtitle="Comprehensive, physician-guided care for lasting results."
                  bullets={[
                    ['Comprehensive', 'Whole-body, root-cause approach'],
                    ['Root-cause approach', 'Addresses the underlying issues'],
                    ['Long-term results', 'Sustainable results and accountability'],
                  ]}
                  cta="View Programs"
                  ctaHref="/programs"
                />
              </div>
            </div>
          </div>
        </div>

        {/* THE DIFFERENCE strip */}
        <div className="container-velora mt-16 lg:mt-20 pb-16 lg:pb-20">
          <div className="bg-paper rounded-2xl border border-line/60 px-6 md:px-10 py-7 md:py-8 shadow-[0_24px_50px_-32px_rgba(74,52,28,0.3)]">
            <div className="grid lg:grid-cols-[280px_1fr] gap-6 lg:gap-12 items-center">
              <div className="flex items-center gap-3.5">
                <span className="size-11 rounded-full bg-brown/10 text-brown flex items-center justify-center shrink-0">
                  <Activity className="size-5" strokeWidth={1.8} />
                </span>
                <div>
                  <p className="text-[11px] tracking-[0.3em] uppercase text-ink font-semibold">
                    The Difference:
                  </p>
                  <p className="mt-1.5 text-[12.5px] text-ink-soft leading-[1.55]">
                    Individual visits treat pieces.
                    <br />
                    Program-based care builds the whole foundation.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-6 lg:border-l lg:border-line/60 lg:pl-12">
                <DiffTile icon={<ShieldCheck className="size-4" />} title="Evidence-Based" body="Care grounded in science and clinical expertise." />
                <DiffTile icon={<Target className="size-4" />} title="Personalized" body="Tailored to your goals, biology, and lifestyle." />
                <DiffTile icon={<TrendingUp className="size-4" />} title="Measurable Results" body="Track progress and optimize over time." />
                <DiffTile icon={<HeartPulse className="size-4" />} title="Long-Term Approach" body="Sustainable strategies for lasting transformation." />
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ===== 05 · THE PHYSICIANS — matches /about ===== */}
      <section className="bg-bone border-t border-line/40">
        <div className="container-velora py-20 lg:py-28">
          <div className="text-center max-w-2xl mx-auto">
            <ChapterEyebrow number="05" label="The Physicians" />
            <h2
              className="mt-7 font-display text-ink leading-[1.04] tracking-[-0.018em]"
              style={{ fontSize: 'clamp(1.625rem, 3.4vw, 2.375rem)' }}
            >
              Trained in Internal Medicine.
              <br />
              <em className="italic font-display text-brown">Specialized in Obesity Medicine.</em>
            </h2>
          </div>

          <div className="mt-16 grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
            <PhysicianCard
              src="/dr-amini.png"
              name="Afshin Amini, MD"
              credentials="Double Board-Certified · Internal Medicine · Obesity Medicine"
              bio="Dr. Amini is a double board-certified physician with focused expertise in metabolic health, weight management, hormone optimization, and longevity & preventive medicine. His practice emphasizes thorough clinical assessment, evidence-based treatment, and continuous physician-guided refinement over time."
            />
            <PhysicianCard
              src="/dr-tolebeyan.jpeg"
              name="Amirseena Tolebeyan, MD"
              credentials="Double Board-Certified · Internal Medicine · Obesity Medicine"
              bio="Dr. Tolebeyan is a double board-certified physician focused on metabolic and hormonal health. His care model is rooted in individualized treatment planning, clinical rigor, and long-term continuity — the qualities he believes patients deserve and rarely receive."
            />
          </div>
        </div>
      </section>

      {/* ===== 06 · BEGIN YOUR CARE — tight brown band ===== */}
      <section className="bg-brown text-cream">
        <div className="container-velora py-12 lg:py-14">
          <div className="grid grid-cols-1 md:grid-cols-[auto_1fr_auto] items-center gap-8 md:gap-10">
            <VeloraMark size={44} monochrome className="mx-auto md:mx-0 text-cream opacity-90" />

            <div className="text-center md:text-left">
              <h2
                className="font-display leading-[1.06] tracking-[-0.012em]"
                style={{ fontSize: 'clamp(1.5rem, 2.6vw, 2rem)' }}
              >
                Begin physician-guided care today.
              </h2>
              <p className="mt-2 text-[12.5px] tracking-[0.18em] uppercase text-cream/70">
                60-minute visit &middot; Written plan &middot;{' '}
                <span className="text-cream font-semibold">$295</span>
              </p>
            </div>

            <Link
              href="/book"
              className="inline-flex items-center justify-center gap-2.5 bg-cream text-brown hover:bg-paper px-7 py-4 sm:py-3.5 rounded-md text-[12.5px] sm:text-[11px] tracking-[0.26em] sm:tracking-[0.3em] uppercase font-semibold transition-colors shrink-0"
            >
              <Calendar className="size-4" strokeWidth={2} />
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>

    </>
  )
}

/* Helpers */

function ChapterEyebrow({ number, label }: { number: string; label: string }) {
  return (
    <div className="inline-flex flex-wrap items-center justify-center gap-x-3 gap-y-1 max-w-full">
      <span className="w-6 h-px bg-gold/70" />
      <p className="text-[10px] tracking-[0.24em] sm:tracking-[0.42em] uppercase text-brown font-semibold">
        {number} &middot; {label}
      </p>
      <span className="w-6 h-px bg-gold/70" />
    </div>
  )
}

function ServiceCard({
  href, image, title, body,
}: { href: string; image: string; title: string; body: string }) {
  return (
    <Link href={href} className="group flex flex-col text-center">
      {/* Photo — photo-forward, gently rounded */}
      <div className="relative aspect-[4/3] overflow-hidden rounded-lg ring-1 ring-line/50 shadow-[0_22px_45px_-30px_rgba(74,52,28,0.4)]">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(min-width: 768px) 33vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
      </div>

      {/* Copy — centered under photo */}
      <h3
        className="mt-7 font-display text-ink leading-[1.15] tracking-[-0.012em]"
        style={{ fontSize: 'clamp(1.375rem, 2vw, 1.625rem)' }}
      >
        {title}
      </h3>
      <p className="mt-4 mx-auto max-w-[320px] text-[13.5px] text-ink-soft leading-[1.7]">
        {body}
      </p>
      <span className="mt-6 inline-flex items-center justify-center gap-2 text-brown group-hover:text-brown-deep text-[11px] sm:text-[10.5px] tracking-[0.26em] sm:tracking-[0.28em] uppercase font-semibold transition-colors">
        Learn More
        <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
      </span>
    </Link>
  )
}

function PhysicianCard({
  src, name, credentials, bio,
}: {
  src: string; name: string; credentials: string; bio: string
}) {
  return (
    <div className="bg-paper rounded-2xl border border-line/60 p-6 lg:p-7 shadow-[0_28px_60px_-32px_rgba(74,52,28,0.35)] flex flex-col">
      <div className="relative aspect-[4/5] rounded-xl overflow-hidden">
        <Image
          src={src}
          alt={name}
          fill
          sizes="(min-width: 1024px) 40vw, 100vw"
          className="object-cover"
          style={{ objectPosition: 'center 25%' }}
        />
      </div>
      <div className="mt-6">
        <h3 className="font-display text-[24px] md:text-[26px] leading-tight text-ink">
          {name}
        </h3>
        <div className="mt-3 w-8 h-px bg-gold/70" />
        <p className="mt-3 text-[10px] tracking-[0.26em] uppercase text-brown/85 font-semibold">
          {credentials}
        </p>
        <p className="mt-5 text-[14px] text-ink-soft leading-[1.75]">
          {bio}
        </p>
      </div>
    </div>
  )
}

function DiffTile({ icon, title, body }: { icon: React.ReactNode; title: string; body: string }) {
  return (
    <div className="flex items-start gap-3">
      <span className="mt-0.5 size-8 rounded-full bg-brown/10 text-brown flex items-center justify-center shrink-0">
        {icon}
      </span>
      <div>
        <p className="text-[11px] tracking-[0.22em] uppercase text-ink font-semibold">{title}</p>
        <p className="mt-1 text-[12px] text-ink-soft leading-[1.5]">{body}</p>
      </div>
    </div>
  )
}

function PathCard({
  letter, title, subtitle, bullets, cta, ctaHref, recommended,
}: {
  letter: string
  title: string
  subtitle: string
  bullets: [string, string][]
  cta: string
  ctaHref: string
  recommended?: boolean
}) {
  return (
    <div
      className={[
        'relative bg-cream rounded-2xl p-6 md:p-7 flex flex-col overflow-hidden',
        recommended
          ? 'ring-1 ring-brown/30 shadow-[0_36px_70px_-28px_rgba(74,52,28,0.6)]'
          : 'border border-line/60 shadow-[0_28px_60px_-30px_rgba(74,52,28,0.45)]',
      ].join(' ')}
    >
      {recommended && (
        <span className="absolute top-0 right-0 bg-brown text-cream px-4 py-1.5 text-[9px] tracking-[0.32em] uppercase font-semibold rounded-bl-xl rounded-tr-2xl">
          Recommended
        </span>
      )}

      <div className={['w-10 h-px', recommended ? 'bg-gold' : 'bg-gold/60'].join(' ')} />

      <div className="mt-4 flex items-start gap-3.5">
        <span
          className={[
            'size-10 rounded-full flex items-center justify-center font-display text-[16px] shrink-0',
            recommended
              ? 'bg-brown text-cream shadow-[0_10px_22px_-10px_rgba(124,84,54,0.6)]'
              : 'bg-bone text-brown border border-brown/40',
          ].join(' ')}
        >
          {letter}
        </span>
        <div className="leading-tight pt-1.5">
          <p className="text-[12px] sm:text-[10.5px] tracking-[0.24em] sm:tracking-[0.32em] uppercase text-ink font-semibold leading-[1.35]">
            {title}
          </p>
        </div>
      </div>

      <p className="mt-4 font-display italic text-[14px] text-ink leading-[1.5]">
        {subtitle}
      </p>

      <ul className="mt-5 space-y-3 text-[12.5px] text-ink-soft flex-1">
        {bullets.map(([strong, body]) => (
          <li key={strong} className="flex items-start gap-2.5">
            <span className="mt-0.5 size-[18px] rounded-full bg-brown/10 text-brown flex items-center justify-center shrink-0">
              <Check className="size-2.5" strokeWidth={2.8} />
            </span>
            <span className="leading-[1.55]">
              <strong className="text-ink font-semibold">{strong}</strong>
              <span className="text-ink-soft"> &mdash; {body}</span>
            </span>
          </li>
        ))}
      </ul>

      <Link
        href={ctaHref}
        className={[
          'group/cta mt-6 inline-flex items-center justify-center gap-2 px-5 py-3.5 sm:py-3 rounded-md text-[12px] sm:text-[10.5px] tracking-[0.24em] sm:tracking-[0.28em] uppercase font-semibold transition-colors',
          recommended
            ? 'bg-brown text-cream hover:bg-brown-deep'
            : 'border border-brown text-brown hover:bg-brown hover:text-cream',
        ].join(' ')}
      >
        {cta}
        <ArrowRight className="size-3.5 transition-transform group-hover/cta:translate-x-0.5" />
      </Link>
    </div>
  )
}
