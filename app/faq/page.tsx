import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import { Calendar, ArrowRight } from 'lucide-react'
import { Section, SectionHeading } from '@/components/site/section'
import { FaqAccordion } from '@/components/site/faq-accordion'
import { VeloraMark } from '@/components/site/logo'

export const metadata: Metadata = {
  title: 'Frequently Asked Questions',
  description:
    'Common questions about medical weight management, hormone therapy, longevity & preventive medicine, telemedicine visits, GLP-1 medications, BHRT, and Velora Medical Institute care.',
}

const WEIGHT_FAQ = [
  { q: 'Who is a candidate for medical weight management?', a: 'Many adults who struggle with excess weight, metabolic health concerns, or difficulty achieving results despite lifestyle changes may benefit from physician-guided weight management.' },
  { q: 'What’s the difference between compounded and FDA-approved GLP-1 medications?', a: 'FDA-approved medications are standardized and extensively studied, while compounded versions are prepared by pharmacies and are not FDA-approved in the same way. Your physician will help determine the most appropriate option based on your individual needs.' },
  { q: 'What are GLP-1 medications, and how do they support weight management?', a: 'GLP-1 receptor agonists are medications that help regulate appetite, slow gastric emptying, and improve metabolic signaling. When used appropriately as part of a comprehensive treatment plan, they can support meaningful and sustainable weight reduction.' },
  { q: 'Are medications such as semaglutide or tirzepatide safe?', a: 'These medications have been extensively studied and are FDA-approved for weight management in appropriate patients. During your consultation, your physician will review your medical history to determine whether they are a safe and appropriate option for you.' },
  { q: 'Is medication required as part of treatment?', a: 'No. Treatment plans are individualized. While medications may be beneficial for some patients, care may also include nutrition guidance, lifestyle strategies, and metabolic evaluation without the use of medication.' },
  { q: 'How much weight can I expect to lose?', a: 'Results vary between individuals. Many patients using evidence-based therapies may experience a meaningful reduction in body weight over time, particularly when combined with lifestyle modifications and ongoing medical guidance.' },
  { q: 'Are visits conducted through telemedicine?', a: 'Yes. All consultations and follow-up visits are conducted via secure telemedicine, allowing you to receive physician-guided care from the convenience of your home.' },
]

const HORMONE_FAQ = [
  { q: 'What is bioidentical hormone therapy (BHRT)?', a: 'Bioidentical hormone therapy uses hormones that are chemically identical to those naturally produced by the body. Treatment is designed to restore hormonal balance and improve symptoms associated with hormonal changes.' },
  { q: 'Who may benefit from hormone therapy?', a: 'Hormone therapy may be appropriate for individuals experiencing symptoms such as fatigue, low energy, sleep disturbances, changes in metabolism, decreased libido, mood changes, or menopause-related symptoms.' },
  { q: 'How is it determined whether my symptoms are hormone-related?', a: 'Your physician will review your symptoms, medical history, and overall health. Laboratory testing may be recommended to evaluate hormone levels and guide treatment decisions.' },
  { q: 'Is hormone therapy safe?', a: 'When prescribed appropriately and monitored by a qualified physician, hormone therapy can be a safe and effective treatment option. Treatment is individualized and adjusted over time based on clinical response and safety considerations.' },
  { q: 'What types of hormone therapy are available?', a: 'Treatment may include estrogen, progesterone, testosterone, or other therapies depending on individual needs. These may be delivered through various forms, including topical, injectable, or oral options.' },
  { q: 'Can women use testosterone?', a: 'In select cases, low-dose testosterone may be used off-label for symptoms such as low libido. Treatment is carefully individualized and monitored to ensure safety and effectiveness.' },
  { q: 'How long does it take to notice improvement?', a: 'Some patients begin to notice improvement within several weeks. Full benefits may take a few months as hormone levels are optimized and treatment is adjusted over time.' },
]

const PRACTICE_FAQ = [
  { q: 'How does payment work?', a: 'Velora Medical Institute is a direct-pay practice. Payment is required prior to your appointment, which is confirmed once payment has been received. Services are not billed to insurance, and pricing is fully transparent.' },
  { q: 'Is insurance accepted?', a: 'No. Velora is a direct-pay practice. This allows our physicians to focus on personalized clinical care without insurance limitations on treatment plans, follow-up cadence, or laboratory ordering.' },
  { q: 'What happens if I need to cancel?', a: 'Appointments must be canceled or rescheduled at least 24 hours in advance to avoid a late cancellation fee. Patients enrolled in structured programs may cancel at any time, with applicable early termination fees as outlined in the program agreement.' },
  { q: 'Are medication and laboratory costs included?', a: 'No. Visit fees cover physician time and clinical care. Medication, pharmacy, and laboratory costs are billed separately by the respective provider. Your physician will discuss expected costs during your visit.' },
]

export default function FaqPage() {
  return (
    <>
      {/* HERO — clean mountain sunset, V leaf + headline overlay */}
      <section className="relative overflow-hidden">
        <div className="relative h-[70vh] min-h-[520px] max-h-[720px]">
          <Image
            src="/photos/faq-mountain.png"
            alt="Mountain sunset"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/45 to-black/65" />

          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
            <VeloraMark size={64} />
            <p className="mt-3 font-display tracking-[0.42em] text-[20px] sm:text-[24px] text-cream leading-none">
              VELORA
            </p>
            <p className="mt-2 font-sans tracking-[0.42em] text-[9.5px] text-gold leading-none uppercase">
              Medical Institute
            </p>

            <h1
              className="mt-10 font-display leading-[1.05] tracking-[-0.018em] text-cream max-w-3xl"
              style={{ fontSize: 'clamp(2.25rem, 5.4vw, 4rem)' }}
            >
              Frequently Asked Questions
            </h1>
            <p className="mt-5 max-w-xl text-[14.5px] leading-[1.65] text-cream/80">
              Real answers to the questions patients ask most about telemedicine, GLP-1 weight
              management, hormone therapy, and longevity care.
            </p>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/book"
                className="inline-flex items-center gap-2 bg-brown text-cream hover:bg-brown-deep px-6 py-3.5 rounded-md text-[11px] tracking-[0.24em] uppercase font-semibold transition-colors"
              >
                <Calendar className="size-4" strokeWidth={2} />
                Schedule Consultation
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border border-cream/50 text-cream hover:bg-cream/10 px-6 py-3.5 rounded-md text-[11px] tracking-[0.24em] uppercase font-semibold transition-colors"
              >
                Contact the Practice
                <ArrowRight className="size-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Section bg="bone" id="weight">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-4 lg:sticky lg:top-32">
            <SectionHeading
              eyebrow="Weight Management"
              title={<>Medical weight <em className="not-italic text-brown">care</em>.</>}
            />
            <p className="mt-7 text-[15px] text-ink-soft leading-relaxed">
              GLP-1 medications, eligibility, individualized care, and results — explained by your physician.
            </p>
          </div>
          <div className="lg:col-span-8">
            <FaqAccordion items={WEIGHT_FAQ} defaultOpen={0} />
          </div>
        </div>
      </Section>

      <Section bg="cream" id="hormone">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-4 lg:sticky lg:top-32">
            <SectionHeading
              eyebrow="Hormone Therapy"
              title={<>Bioidentical <em className="not-italic text-brown">hormone</em> care.</>}
            />
            <p className="mt-7 text-[15px] text-ink-soft leading-relaxed">
              BHRT for men and women — symptoms, safety, and what to expect.
            </p>
          </div>
          <div className="lg:col-span-8">
            <FaqAccordion items={HORMONE_FAQ} defaultOpen={0} />
          </div>
        </div>
      </Section>

      <Section bg="bone" id="practice">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-4 lg:sticky lg:top-32">
            <SectionHeading
              eyebrow="Practice & Payment"
              title={<>About <em className="not-italic text-brown">Velora</em>.</>}
            />
            <p className="mt-7 text-[15px] text-ink-soft leading-relaxed">
              Direct-pay, telemedicine, scheduling, and policies.
            </p>
          </div>
          <div className="lg:col-span-8">
            <FaqAccordion items={PRACTICE_FAQ} defaultOpen={0} />
          </div>
        </div>
      </Section>

      <section className="bg-bone">
        <div className="container-velora py-14">
          <div className="bg-brown text-cream rounded-2xl px-8 md:px-14 py-12 text-center">
            <p className="text-[10.5px] tracking-[0.32em] uppercase text-gold font-semibold">
              Still Have Questions?
            </p>
            <h2
              className="mt-4 font-display leading-[1.05] tracking-[-0.018em]"
              style={{ fontSize: 'clamp(1.625rem, 3.4vw, 2.5rem)' }}
            >
              Schedule a comprehensive evaluation with a physician.
            </h2>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/book"
                className="inline-flex items-center gap-2 bg-cream text-brown hover:bg-paper px-6 py-3.5 rounded-md text-[11px] tracking-[0.24em] uppercase font-semibold transition-colors"
              >
                <Calendar className="size-4" strokeWidth={2} />
                Book Your Consultation
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border border-cream/40 text-cream hover:bg-cream/10 px-6 py-3.5 rounded-md text-[11px] tracking-[0.24em] uppercase font-semibold transition-colors"
              >
                Contact the Practice
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
