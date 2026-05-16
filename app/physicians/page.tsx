import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import { ArrowUpRight, GraduationCap, Stethoscope, ShieldCheck } from 'lucide-react'
import { PageHero } from '@/components/site/page-hero'
import { Section } from '@/components/site/section'

export const metadata: Metadata = {
  title: 'Our Physicians',
  description:
    'Meet the double board-certified physicians of Velora Medical Institute — Dr. Afshin Amini and Dr. Amirseena Tolebeyan, specializing in Internal Medicine and Obesity Medicine.',
}

export default function PhysiciansPage() {
  return (
    <>
      <PageHero
        eyebrow="Meet Our Physicians"
        title={<>Care directed by <em className="not-italic text-brown">double board-certified</em> physicians.</>}
        subtitle="Internal Medicine and Obesity Medicine — focused on metabolic health, weight management, hormone therapy, and longevity & preventive medicine. Each treatment plan is grounded in clinical assessment, evidence-based therapy, and continuous monitoring."
        primary={{ href: '/book', label: 'Book Initial Consultation' }}
      />

      <Section bg="bone">
        <div className="space-y-16">
          <PhysicianProfile
            name="Afshin Amini, MD"
            photo="/dr-amini.png"
            credentials="Internal Medicine · Obesity Medicine"
            paragraphs={[
              'Dr. Amini focuses on metabolic health, weight management, hormone therapy, and longevity & preventive medicine, providing individualized, physician-directed care.',
              'His approach integrates thorough clinical assessment with evidence-based treatment and continuous monitoring to achieve precise, safe, and long-term optimization.',
              'He is committed to a structured approach to chronic metabolic conditions — one that recognizes the complexity of long-term weight regulation and the value of physician continuity.',
            ]}
            credentialItems={[
              { icon: <GraduationCap className="size-4" />, label: 'Board Certified — Internal Medicine' },
              { icon: <ShieldCheck className="size-4" />, label: 'Board Certified — Obesity Medicine' },
              { icon: <Stethoscope className="size-4" />, label: 'Telemedicine-Practiced' },
            ]}
            focus={['Metabolic health', 'Medical weight management', 'Bioidentical hormone therapy', 'GLP-1 receptor agonist therapy']}
          />

          <hr className="border-line" />

          <PhysicianProfile
            name="Amirseena Tolebeyan, MD"
            photo="/dr-tolebeyan.jpeg"
            credentials="Internal Medicine · Obesity Medicine"
            reverse
            paragraphs={[
              'Dr. Tolebeyan focuses on metabolic health, weight management, hormone therapy, and longevity & preventive medicine, delivering structured, evidence-based care.',
              'His approach combines comprehensive clinical assessment with individualized treatment and continuous monitoring to ensure precise, safe, and long-term optimization.',
              'He believes in transparent, patient-centered care — explaining the clinical rationale behind every treatment decision and adjusting therapy in collaboration with each patient.',
            ]}
            credentialItems={[
              { icon: <GraduationCap className="size-4" />, label: 'Board Certified — Internal Medicine' },
              { icon: <ShieldCheck className="size-4" />, label: 'Board Certified — Obesity Medicine' },
              { icon: <Stethoscope className="size-4" />, label: 'Telemedicine-Practiced' },
            ]}
            focus={['Hormone optimization', 'Perimenopause & menopause care', 'Andropause & testosterone therapy', 'Metabolic syndrome']}
          />
        </div>
      </Section>

      {/* Joint statement */}
      <Section bg="cream">
        <div className="max-w-3xl mx-auto text-center">
          <span className="eyebrow">Shared Clinical Philosophy</span>
          <p className="mt-7 font-display text-[28px] md:text-[36px] leading-[1.25] tracking-[-0.012em] text-ink">
            “The goal is not <em className="text-brown">short-term</em> change, but
            <em className="text-brown"> sustained improvement</em> in overall health — measured one patient,
            one visit, one adjustment at a time.”
          </p>
          <p className="mt-7 text-[12.5px] tracking-[0.2em] uppercase text-brown">— The Physicians of Velora</p>
        </div>
      </Section>

      {/* CTA */}
      <section className="bg-ink text-cream">
        <div className="container-velora py-24 md:py-28 text-center">
          <span className="eyebrow text-gold">Begin Your Care</span>
          <h2
            className="mt-6 font-display leading-[1.04] tracking-[-0.02em] text-cream max-w-3xl mx-auto"
            style={{ fontSize: 'clamp(2rem, 5.5vw, 3.625rem)' }}
          >
            Schedule your <em className="not-italic text-gold">initial consultation</em>.
          </h2>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link href="/book" className="inline-flex items-center justify-center gap-2 bg-cream text-brown hover:bg-paper px-6 py-3.5 rounded-md text-[11px] tracking-[0.24em] uppercase font-semibold transition-colors">
              Book Consultation
              <ArrowUpRight className="size-3.5" />
            </Link>
            <Link href="/about" className="inline-flex items-center justify-center gap-2 border border-cream/40 text-cream hover:bg-cream/10 px-6 py-3.5 rounded-md text-[11px] tracking-[0.24em] uppercase font-semibold transition-colors">
              About the Practice
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

function PhysicianProfile({
  name, photo, credentials, paragraphs, credentialItems, focus, reverse,
}: {
  name: string
  photo: string
  credentials: string
  paragraphs: string[]
  credentialItems: { icon: React.ReactNode; label: string }[]
  focus: string[]
  reverse?: boolean
}) {
  return (
    <article className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
      {/* Portrait */}
      <div className={`lg:col-span-5 ${reverse ? 'lg:order-2' : ''}`}>
        <div className="aspect-[4/5] bg-paper border border-line relative overflow-hidden rounded-md">
          <Image
            src={photo}
            alt={name}
            fill
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="object-cover"
            style={{ objectPosition: 'center 18%' }}
          />
          <div className="absolute bottom-0 left-0 right-0 px-6 py-5 bg-gradient-to-t from-ink/80 to-transparent">
            <p className="text-[10.5px] tracking-[0.22em] uppercase text-cream/80">Velora Medical Institute</p>
            <p className="font-display text-[22px] text-cream mt-1">{name}</p>
          </div>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-3">
          {credentialItems.map((c) => (
            <div key={c.label} className="flex items-center gap-3 px-4 py-3 border border-line bg-paper rounded-md">
              <span className="size-7 rounded-full bg-brown-soft text-brown flex items-center justify-center">
                {c.icon}
              </span>
              <span className="text-[13px] text-ink">{c.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bio */}
      <div className={`lg:col-span-7 ${reverse ? 'lg:order-1' : ''}`}>
        <p className="eyebrow">{credentials}</p>
        <h2
          className="mt-4 font-display leading-[1.04] tracking-[-0.018em] text-ink break-words"
          style={{ fontSize: 'clamp(1.875rem, 4.5vw, 3.25rem)' }}
        >
          {name}
        </h2>
        <div className="mt-7 space-y-5 text-[16px] leading-relaxed text-ink-soft max-w-prose">
          {paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        <div className="mt-9 pt-7 border-t border-line">
          <p className="eyebrow">Areas of Focus</p>
          <ul className="mt-5 grid sm:grid-cols-2 gap-2.5">
            {focus.map((f) => (
              <li key={f} className="flex items-start gap-2.5 text-[14.5px] text-ink">
                <span className="size-1.5 rounded-full bg-gold mt-2 shrink-0" />
                {f}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-9">
          <Link
            href="/book"
            className="inline-flex items-center gap-2 bg-brown text-cream hover:bg-brown-deep px-6 py-3.5 rounded-md text-[11px] tracking-[0.24em] uppercase font-semibold transition-colors"
          >
            Book a consultation
            <ArrowUpRight className="size-3.5" />
          </Link>
        </div>
      </div>
    </article>
  )
}
