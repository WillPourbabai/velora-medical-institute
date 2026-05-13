import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import {
  Calendar,
  ArrowRight,
  ShieldCheck,
  Stethoscope,
  Heart,
  Microscope,
  Sparkles,
  TrendingUp,
} from 'lucide-react'
import { FaqAccordion } from '@/components/site/faq-accordion'

export const metadata: Metadata = {
  title: 'About Velora Medical Institute',
  description:
    'Velora Medical Institute — a physician-directed, direct-pay telemedicine practice led by two double board-certified physicians in Internal and Obesity Medicine.',
}

export default function AboutPage() {
  return (
    <>
      {/* ===== HERO — split: editorial left, twin portraits right ===== */}
      <section className="relative bg-bone overflow-hidden">
        <div className="container-velora pt-12 lg:pt-16 pb-16 lg:pb-20">
          <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] gap-10 lg:gap-16 xl:gap-20 items-center lg:min-h-[calc(100vh-110px-160px)]">
            {/* LEFT — editorial */}
            <div className="max-w-[560px]">
              <p className="text-[10px] sm:text-[10.5px] tracking-[0.46em] uppercase text-brown font-semibold">
                About Velora
              </p>
              <h1
                className="mt-7 font-display text-ink leading-[0.96] tracking-[-0.022em]"
                style={{ fontSize: 'clamp(2.25rem, 5vw, 4.5rem)' }}
              >
                Two physicians.
                <br />
                <em className="italic font-display text-brown">One standard</em>
                <br />
                of care.
              </h1>

              <div className="mt-8 flex items-center gap-2.5">
                <ShieldCheck className="size-4 text-brown shrink-0" strokeWidth={1.8} />
                <span className="text-[12px] text-ink-soft leading-[1.45]">
                  Double Board-Certified Physicians &middot; Internal &amp; Obesity Medicine
                </span>
              </div>

              <p className="mt-7 text-[15px] text-ink-soft leading-[1.75]">
                Velora Medical Institute is a small, physician-directed telemedicine practice
                built on a deliberate idea: the physician on your screen is the same one
                reviewing your labs, writing your plan, and following you across time.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <Link
                  href="/book"
                  className="inline-flex items-center gap-2.5 bg-brown text-cream hover:bg-brown-deep px-6 py-3.5 rounded-md text-[11px] tracking-[0.28em] uppercase font-semibold transition-colors"
                >
                  <Calendar className="size-4" strokeWidth={2} />
                  Book Initial Consultation
                </Link>
                <Link
                  href="#physicians"
                  className="inline-flex items-center gap-2.5 border border-ink/80 text-ink hover:bg-ink hover:text-cream px-6 py-3.5 rounded-md text-[11px] tracking-[0.28em] uppercase font-semibold transition-colors"
                >
                  Meet the Physicians
                  <ArrowRight className="size-4" strokeWidth={2} />
                </Link>
              </div>

              <div className="mt-10 pt-7 border-t border-line/60 grid grid-cols-3 gap-4 sm:gap-6 max-w-[480px]">
                <MiniPillar label="Telemedicine" />
                <MiniPillar label="Direct-Pay" />
                <MiniPillar label="60-Minute Visits" />
              </div>
            </div>

            {/* RIGHT — twin portraits, offset for editorial rhythm */}
            <div className="relative grid grid-cols-2 gap-4 lg:gap-6">
              <figure className="relative">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-[0_30px_60px_-26px_rgba(74,52,28,0.55)] ring-1 ring-line/40">
                  <Image
                    src="/dr-amini.png"
                    alt="Dr. Afshin Amini, Internal and Obesity Medicine"
                    fill
                    sizes="(min-width: 1024px) 28vw, 50vw"
                    className="object-cover"
                    style={{ objectPosition: 'center 32%' }}
                    priority
                  />
                </div>
                <figcaption className="mt-4">
                  <p className="font-display italic text-[15px] lg:text-[17px] text-ink leading-none">
                    Afshin Amini, MD
                  </p>
                  <div className="mt-2.5 w-6 h-px bg-gold/70" />
                  <p className="mt-2.5 text-[9px] tracking-[0.28em] uppercase text-brown/80 font-semibold">
                    Internal · Obesity Medicine
                  </p>
                </figcaption>
              </figure>
              <figure className="relative lg:translate-y-10">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-[0_30px_60px_-26px_rgba(74,52,28,0.55)] ring-1 ring-line/40">
                  <Image
                    src="/dr-tolebeyan.jpeg"
                    alt="Dr. Amirseena Tolebeyan, Internal and Obesity Medicine"
                    fill
                    sizes="(min-width: 1024px) 28vw, 50vw"
                    className="object-cover"
                    style={{ objectPosition: 'center 32%' }}
                    priority
                  />
                </div>
                <figcaption className="mt-4">
                  <p className="font-display italic text-[15px] lg:text-[17px] text-ink leading-none">
                    Amirseena Tolebeyan, MD
                  </p>
                  <div className="mt-2.5 w-6 h-px bg-gold/70" />
                  <p className="mt-2.5 text-[9px] tracking-[0.28em] uppercase text-brown/80 font-semibold">
                    Internal · Obesity Medicine
                  </p>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 01 · OUR STORY ===== */}
      <section className="bg-paper">
        <div className="container-velora py-20 lg:py-28">
          <div className="grid lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)] gap-12 lg:gap-20 xl:gap-28 items-start">
            <div>
              <ChapterEyebrow number="01" label="Our Story" />
              <h2
                className="mt-7 font-display text-ink leading-[1.04] tracking-[-0.018em]"
                style={{ fontSize: 'clamp(1.75rem, 3.8vw, 2.75rem)' }}
              >
                We built a small practice
                <br />
                <em className="italic font-display text-brown">on purpose.</em>
              </h2>
              <div className="mt-7 w-12 h-px bg-gold/80" />
            </div>
            <div className="max-w-prose">
              <p className="text-[15.5px] text-ink-soft leading-[1.85]">
                Modern medicine has grown faster, larger, and more fragmented. Velora was
                built in the opposite direction &mdash; deliberately small, telemedicine-only,
                and direct-pay, so we could practice the way we believe care should be
                practiced.
              </p>
              <p className="mt-6 text-[15.5px] text-ink-soft leading-[1.85]">
                Every patient begins with a sixty-minute physician visit. The physician who
                sees you is the same one who reviews your labs, writes your plan, and
                follows you across time. There is no handoff, no rotation, no relearning
                your history at every visit.
              </p>
              <p className="mt-6 text-[15.5px] text-ink-soft leading-[1.85] italic font-display">
                Care should feel personal because it is personal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 02 · THE PHYSICIANS ===== */}
      <section id="physicians" className="bg-bone border-t border-line/40">
        <div className="container-velora py-20 lg:py-28">
          <div className="text-center max-w-2xl mx-auto">
            <ChapterEyebrow number="02" label="The Physicians" />
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
              bio="Dr. Amini is a double board-certified physician with focused expertise in metabolic health, weight management, and hormone optimization. His practice emphasizes thorough clinical assessment, evidence-based treatment, and continuous physician-guided refinement over time."
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

      {/* ===== 03 · HOW WE PRACTICE ===== */}
      <section className="bg-paper border-t border-line/40">
        <div className="container-velora py-20 lg:py-24">
          <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] gap-12 lg:gap-20 items-start">
            <div>
              <ChapterEyebrow number="03" label="How We Practice" />
              <h2
                className="mt-7 font-display text-ink leading-[1.04] tracking-[-0.018em]"
                style={{ fontSize: 'clamp(1.75rem, 3.8vw, 2.75rem)' }}
              >
                Four principles
                <br />
                <em className="italic font-display text-brown">that shape every visit.</em>
              </h2>
              <div className="mt-7 w-12 h-px bg-gold/80" />
              <p className="mt-7 text-[14.5px] text-ink-soft leading-[1.8] max-w-prose">
                Velora&rsquo;s practice model is intentionally narrow. Each principle below is a
                deliberate choice &mdash; one we made because it makes care better, not because
                it is easier or more profitable.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-5 lg:gap-6">
              <PrincipleTile
                icon={<Stethoscope className="size-4" />}
                title="Physician-Led"
                body="Every visit is conducted by a physician. No intake forms in place of conversation."
              />
              <PrincipleTile
                icon={<Heart className="size-4" />}
                title="Telemedicine-Only"
                body="Care meets you in your environment, on your schedule, without commute or waiting room."
              />
              <PrincipleTile
                icon={<ShieldCheck className="size-4" />}
                title="Direct-Pay"
                body="No insurance constraints, no surprise billing, transparent itemized pricing."
              />
              <PrincipleTile
                icon={<Microscope className="size-4" />}
                title="Continuity"
                body="One physician across every visit. Your history stays with the person treating you."
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== 04 · WHAT WE TREAT ===== */}
      <section className="bg-bone border-t border-line/40">
        <div className="container-velora py-20 lg:py-24">
          <div className="text-center max-w-2xl mx-auto">
            <ChapterEyebrow number="04" label="What We Treat" />
            <h2
              className="mt-7 font-display text-ink leading-[1.04] tracking-[-0.018em]"
              style={{ fontSize: 'clamp(1.625rem, 3.4vw, 2.375rem)' }}
            >
              Three care areas,
              <br />
              <em className="italic font-display text-brown">one coordinated approach.</em>
            </h2>
          </div>

          <div className="mt-14 grid md:grid-cols-3 gap-px bg-line/40 border-y border-line/40 max-w-6xl mx-auto">
            <ServiceCell
              numeral="01"
              title="Weight Management"
              body="Physician-guided GLP-1 therapy and metabolic optimization."
              href="/weight-management"
            />
            <ServiceCell
              numeral="02"
              title="Hormone Optimization"
              body="Bioidentical hormone therapy for men and women, guided by lab data."
              href="/hormone-therapy"
            />
            <ServiceCell
              numeral="03"
              title="Longevity Medicine"
              body="Proactive, personalized strategies for long-term wellness."
              href="/longevity"
            />
          </div>
        </div>
      </section>

      {/* ===== 05 · FROM THE PHYSICIANS — letter ===== */}
      <section className="bg-paper border-t border-line/40">
        <div className="container-velora py-20 lg:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <ChapterEyebrow number="05" label="From the Physicians" />
            <h2
              className="mt-7 font-display italic text-ink leading-[1.06] tracking-[-0.012em]"
              style={{ fontSize: 'clamp(1.75rem, 3.6vw, 2.625rem)' }}
            >
              &ldquo;Care should feel personal.
              <br />
              When you&rsquo;re ready, we&rsquo;re here.&rdquo;
            </h2>
            <div className="mt-7 mx-auto w-10 h-px bg-gold/80" />
            <p className="mt-7 text-[15px] text-ink-soft leading-[1.85] max-w-2xl mx-auto">
              We built Velora because we wanted to practice medicine the way we believe it
              should be practiced: a careful sit-down, a thorough review, a written plan you
              can actually follow, and a physician who knows your history because they
              wrote it.
            </p>
            <p className="mt-7 font-display italic text-[14px] text-brown">
              &mdash; Drs. Amini &amp; Tolebeyan
            </p>
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
                Practice Information
              </p>
            </div>
            <ul className="mt-5 grid md:grid-cols-2 gap-x-10 gap-y-2 text-[12.5px] text-ink-soft leading-[1.65]">
              <li className="flex items-start gap-2"><span className="mt-1.5 size-1 rounded-full bg-brown/60 shrink-0" /><span>Telemedicine visits available throughout California.</span></li>
              <li className="flex items-start gap-2"><span className="mt-1.5 size-1 rounded-full bg-brown/60 shrink-0" /><span>Direct-pay practice — no insurance is billed.</span></li>
              <li className="flex items-start gap-2"><span className="mt-1.5 size-1 rounded-full bg-brown/60 shrink-0" /><span>Initial consultations are 60 minutes.</span></li>
              <li className="flex items-start gap-2"><span className="mt-1.5 size-1 rounded-full bg-brown/60 shrink-0" /><span>Laboratory and medication costs are billed separately.</span></li>
            </ul>
          </div>
        </div>
      </section>

      {/* ===== 06 · BEGIN YOUR CARE — final CTA ===== */}
      <section className="bg-bone border-t border-line/40">
        <div className="container-velora py-16 lg:py-20">
          <div className="max-w-[1120px] xl:max-w-[1280px] mx-auto">
            <div className="text-center">
              <ChapterEyebrow number="06" label="Begin Your Care" />
              <h2
                className="mt-7 font-display text-ink leading-[1.04] tracking-[-0.018em]"
                style={{ fontSize: 'clamp(1.875rem, 4vw, 3rem)' }}
              >
                Physician-guided care,
                <br />
                <em className="italic font-display text-brown">designed for you.</em>
              </h2>
              <div className="mt-6 mx-auto w-10 h-px bg-gold/70" />
            </div>

            <div className="mt-12 grid md:grid-cols-2 gap-5 md:gap-6">
              <Link
                href="/book"
                className="group relative bg-brown text-cream rounded-2xl p-7 md:p-8 flex flex-col justify-between min-h-[200px] transition-all hover:bg-brown-deep shadow-[0_28px_55px_-25px_rgba(74,52,28,0.55)] overflow-hidden"
              >
                <div
                  className="absolute -top-12 -right-12 w-44 h-44 rounded-full pointer-events-none"
                  style={{
                    background: 'radial-gradient(circle, rgba(201,160,100,0.28), rgba(201,160,100,0) 70%)',
                  }}
                  aria-hidden
                />
                <div className="relative">
                  <span className="inline-flex size-10 rounded-full bg-cream/15 text-gold items-center justify-center">
                    <Calendar className="size-5" strokeWidth={1.8} />
                  </span>
                  <p className="mt-5 text-[10px] tracking-[0.32em] uppercase text-gold font-semibold">
                    Start Here
                  </p>
                  <h3 className="mt-2 font-display text-[24px] md:text-[26px] leading-[1.15] text-cream">
                    Schedule a Consultation
                  </h3>
                  <p className="mt-3 text-[13.5px] text-cream/80 leading-[1.55] max-w-[300px]">
                    A 60-minute physician visit. Comprehensive review. A written plan
                    delivered to you.
                  </p>
                </div>
                <span className="relative mt-5 inline-flex items-center gap-2 text-[11px] tracking-[0.28em] uppercase text-gold font-semibold border-b border-gold/40 group-hover:border-gold pb-1.5 w-fit transition-colors">
                  Book consultation
                  <ArrowRight className="size-3.5" />
                </span>
              </Link>

              <Link
                href="/programs"
                className="group relative bg-cream rounded-2xl p-7 md:p-8 flex flex-col justify-between min-h-[200px] transition-all border border-line/70 hover:border-brown/60 shadow-[0_22px_45px_-25px_rgba(74,52,28,0.35)]"
              >
                <div>
                  <span className="inline-flex size-10 rounded-full bg-bone border border-brown/30 text-brown items-center justify-center">
                    <Sparkles className="size-5" strokeWidth={1.6} />
                  </span>
                  <p className="mt-5 text-[10px] tracking-[0.32em] uppercase text-brown font-semibold">
                    Or, Explore
                  </p>
                  <h3 className="mt-2 font-display text-[24px] md:text-[26px] leading-[1.15] text-ink">
                    Our Structured Programs
                  </h3>
                  <p className="mt-3 text-[13.5px] text-ink-soft leading-[1.55] max-w-[300px]">
                    Five-to-sixteen-visit programs in weight, hormones, and longevity.
                  </p>
                </div>
                <span className="mt-5 inline-flex items-center gap-2 text-[11px] tracking-[0.28em] uppercase text-brown group-hover:text-brown-deep font-semibold border-b border-brown/40 group-hover:border-brown pb-1.5 w-fit transition-colors">
                  View programs
                  <ArrowRight className="size-3.5" />
                </span>
              </Link>
            </div>
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

function PrincipleTile({ icon, title, body }: { icon: React.ReactNode; title: string; body: string }) {
  return (
    <div className="bg-cream rounded-xl border border-line/60 p-5">
      <span className="size-9 rounded-full bg-brown/10 text-brown flex items-center justify-center">
        {icon}
      </span>
      <p className="mt-4 text-[12px] tracking-[0.22em] uppercase text-ink font-semibold">{title}</p>
      <p className="mt-2 text-[13px] text-ink-soft leading-[1.6]">{body}</p>
    </div>
  )
}

function ServiceCell({
  numeral, title, body, href,
}: { numeral: string; title: string; body: string; href: string }) {
  return (
    <Link
      href={href}
      className="group bg-paper flex flex-col px-7 py-10 lg:px-9 lg:py-12 transition-colors hover:bg-cream"
    >
      <p
        className="font-display italic text-brown/65 leading-none tracking-[-0.02em]"
        style={{ fontSize: 'clamp(2.5rem, 4vw, 3.25rem)' }}
      >
        {numeral}
      </p>
      <h3
        className="mt-6 font-display text-ink leading-[1.15] tracking-[-0.012em]"
        style={{ fontSize: 'clamp(1.375rem, 2vw, 1.625rem)' }}
      >
        {title}
      </h3>
      <div className="mt-4 w-8 h-px bg-gold/70" />
      <p className="mt-5 text-[14px] text-ink-soft leading-[1.7] flex-1">
        {body}
      </p>
      <span className="mt-8 inline-flex items-center gap-2 text-brown group-hover:text-brown-deep text-[10.5px] tracking-[0.28em] uppercase font-semibold transition-colors">
        Learn more
        <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
      </span>
    </Link>
  )
}
