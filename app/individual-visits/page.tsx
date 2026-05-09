import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import {
  Calendar,
  ArrowRight,
  Target,
  TrendingUp,
  ShieldCheck,
  UserCheck,
  Check,
  ChevronRight,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Individual Follow-Up Visits',
  description:
    'On-demand 30-minute follow-up visits with your physician — $195. Adjust your plan, review labs, and stay on track between programs.',
}

export default function IndividualVisitsPage() {
  return (
    <>
      {/* HERO — 5D4651C9 top */}
      <section className="relative bg-bone overflow-hidden">
        <div className="container-velora pt-8 pb-12 lg:pt-10 lg:pb-16">
          {/* Breadcrumb */}
          <nav className="text-[10.5px] tracking-[0.22em] uppercase text-ink-soft flex items-center gap-2 mb-8">
            <Link href="/" className="hover:text-brown transition-colors">Home</Link>
            <ChevronRight className="size-3" />
            <span className="text-ink">Individual Follow-Up Visits</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div>
              <h1
                className="font-display leading-[1.04] tracking-[-0.018em] text-ink"
                style={{ fontSize: 'clamp(2rem, 4.4vw, 3.25rem)' }}
              >
                Individual Follow-Up Visits
              </h1>
              <p className="mt-4 text-[10.5px] tracking-[0.32em] uppercase text-brown font-semibold">
                Ongoing Care · Lasting Results
              </p>
              <div className="mt-5 w-16 h-px bg-gold" />
              <p className="mt-6 text-[15px] text-ink-soft leading-[1.65] max-w-md">
                Regular follow-up visits ensure your treatment plan stays on track,
                your progress is optimized, and your health goals continue to be achieved
                over time.
              </p>
              <div className="mt-7">
                <Link
                  href="/book?type=followup"
                  className="inline-flex items-center gap-2 bg-brown text-cream hover:bg-brown-deep px-6 py-3.5 rounded-md text-[11px] tracking-[0.24em] uppercase font-semibold transition-colors"
                >
                  <Calendar className="size-4" strokeWidth={2} />
                  Book Your Follow-Up
                </Link>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-md overflow-hidden">
              <Image
                src="/photos/individual-hero.png"
                alt="A patient on a Velora telehealth follow-up visit"
                fill
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* WHY THIS TYPE OF CARE MATTERS */}
      <section className="bg-paper">
        <div className="container-velora py-14 lg:py-16">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-[10.5px] tracking-[0.32em] uppercase text-brown font-semibold">
              Why This Type of Care Matters
            </p>
            <h2
              className="mt-4 font-display leading-[1.05] tracking-[-0.018em] text-ink"
              style={{ fontSize: 'clamp(1.5rem, 3vw, 2.125rem)' }}
            >
              Continuous adjustment, tailored to you
            </h2>
            <div className="mt-5 mx-auto w-12 h-px bg-gold" />
          </div>
          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Reason
              icon={<Target className="size-6" strokeWidth={1.5} />}
              title="Stay on Track"
              body="Routine progress and treatment adjustments to keep your goals moving forward."
            />
            <Reason
              icon={<TrendingUp className="size-6" strokeWidth={1.5} />}
              title="Optimize Results"
              body="Fine-tune your plan and protocols based on your real-world response."
            />
            <Reason
              icon={<ShieldCheck className="size-6" strokeWidth={1.5} />}
              title="Monitor & Protect"
              body="Maintain long-term health benefits with regular medical oversight."
            />
            <Reason
              icon={<UserCheck className="size-6" strokeWidth={1.5} />}
              title="Personalized Updates"
              body="Receive ongoing guidance based on your evolving needs and biomarkers."
            />
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="bg-bone">
        <div className="container-velora py-14 lg:py-16">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-[10.5px] tracking-[0.32em] uppercase text-brown font-semibold">
              Follow-Up Visit Options &amp; Pricing
            </p>
            <h2
              className="mt-4 font-display leading-[1.05] tracking-[-0.018em] text-ink"
              style={{ fontSize: 'clamp(1.5rem, 3vw, 2.125rem)' }}
            >
              Simple, transparent, no commitment
            </h2>
          </div>

          <div className="mt-10 max-w-2xl mx-auto bg-paper border border-line/60 rounded-md p-7 lg:p-9">
            <div className="grid sm:grid-cols-[auto_1fr_auto] gap-6 items-center">
              <span className="size-14 rounded-full bg-bone border border-brown/30 text-brown flex items-center justify-center shrink-0">
                <Calendar className="size-6" strokeWidth={1.6} />
              </span>
              <div>
                <p className="text-[10.5px] tracking-[0.28em] uppercase text-brown font-semibold">
                  Individual Follow-Up Visit
                </p>
                <p className="mt-1 text-[14px] text-ink-soft">
                  30-minute video visit with your physician
                </p>
              </div>
              <div className="text-right">
                <span className="font-display text-[44px] leading-none text-ink">$195</span>
                <p className="text-[11px] text-ink-soft italic">/ visit</p>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-line/60">
              <p className="text-[12px] tracking-[0.22em] uppercase text-ink-soft font-semibold mb-3">
                What this visit covers:
              </p>
              <div className="grid sm:grid-cols-3 gap-2.5 text-[13.5px] text-ink-soft">
                <span className="flex items-start gap-2"><Check className="size-4 text-brown mt-0.5 shrink-0" strokeWidth={2} /> Weight Management</span>
                <span className="flex items-start gap-2"><Check className="size-4 text-brown mt-0.5 shrink-0" strokeWidth={2} /> Hormone Optimization</span>
                <span className="flex items-start gap-2"><Check className="size-4 text-brown mt-0.5 shrink-0" strokeWidth={2} /> Longevity &amp; Anti-Aging</span>
              </div>
            </div>

            <Link
              href="/book?type=followup"
              className="mt-7 w-full inline-flex items-center justify-center gap-2 bg-brown text-cream hover:bg-brown-deep px-5 py-3.5 rounded-md text-[11px] tracking-[0.24em] uppercase font-semibold transition-colors"
            >
              <Calendar className="size-4" strokeWidth={2} />
              Book Your Follow-Up
            </Link>
          </div>

          <p className="mt-5 text-center text-[12.5px] text-ink-soft italic">
            Package discounts available when you book 3 or more visits. Ask our team for details.
          </p>
        </div>
      </section>

      {/* PERSONALIZED EXPERIENCE — books image + 4 numbered items */}
      <section className="bg-paper">
        <div className="container-velora py-14 lg:py-16">
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-10 lg:gap-14 items-center">
            <div className="relative aspect-[4/3] rounded-md overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=1600&q=80"
                alt="A stack of books on a desk — Velora's written care framework"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-[10.5px] tracking-[0.32em] uppercase text-brown font-semibold">
                A Personalized Experience, Every Time
              </p>
              <h2
                className="mt-4 font-display leading-[1.05] tracking-[-0.018em] text-ink"
                style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}
              >
                Each visit follows the same proven structure
              </h2>
              <div className="mt-5 w-12 h-px bg-gold" />
              <ol className="mt-7 space-y-4">
                <NumberedItem n="01" title="One-on-one time with your physician" body="Direct video consultation, not a chatbot or asynchronous form." />
                <NumberedItem n="02" title="Review of your progress and goals" body="What's working, what's not, and what to adjust based on your data." />
                <NumberedItem n="03" title="Adjustments to your plan as needed" body="Dose changes, lab orders, lifestyle refinements — all in one visit." />
                <NumberedItem n="04" title="Ongoing support and accountability" body="Secure messaging between visits and a written plan you can reference." />
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* DARK BROWN PANEL */}
      <section className="bg-bone">
        <div className="container-velora py-14">
          <div className="bg-brown text-cream rounded-2xl px-8 md:px-14 py-12 md:py-14 text-center">
            <p className="text-[10.5px] tracking-[0.32em] uppercase text-gold font-semibold">
              Stay on Course
            </p>
            <h2
              className="mt-4 font-display leading-[1.05] tracking-[-0.018em]"
              style={{ fontSize: 'clamp(1.625rem, 3.4vw, 2.5rem)' }}
            >
              Your Health. Your Goals. <em className="not-italic text-gold">Real Results.</em>
            </h2>
            <p className="mt-5 text-[15px] text-cream/80 leading-[1.65] max-w-lg mx-auto">
              Consistent care leads to lasting results. Schedule your follow-up visit
              and keep moving forward.
            </p>
            <Link
              href="/book?type=followup"
              className="mt-7 inline-flex items-center gap-2 bg-cream text-brown hover:bg-paper px-6 py-3.5 rounded-md text-[11px] tracking-[0.24em] uppercase font-semibold transition-colors"
            >
              <Calendar className="size-4" strokeWidth={2} />
              Schedule Your Follow-Up Visit
            </Link>
          </div>
        </div>
      </section>

      {/* BOTTOM TRUST TILES */}
      <section className="bg-paper">
        <div className="container-velora py-10 lg:py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-5">
            <Trust icon={<ShieldCheck className="size-5" />} title="Proven & Effective" body="Care backed by clinical experience." />
            <Trust icon={<UserCheck className="size-5" />} title="Private & Confidential" body="Secure, HIPAA-compliant visits." />
            <Trust icon={<Target className="size-5" />} title="Evidence-Based Care" body="Every adjustment based on data." />
            <Trust icon={<Calendar className="size-5" />} title="Telemedicine Convenience" body="From home, on your schedule." />
          </div>
        </div>
      </section>
    </>
  )
}

function Reason({ icon, title, body }: { icon: React.ReactNode; title: string; body: string }) {
  return (
    <div className="text-center">
      <span className="mx-auto size-14 rounded-full bg-bone border border-brown/30 text-brown flex items-center justify-center">
        {icon}
      </span>
      <h3 className="mt-4 font-display text-[17px] leading-tight text-ink">{title}</h3>
      <p className="mt-2 text-[13px] text-ink-soft leading-[1.55]">{body}</p>
    </div>
  )
}

function NumberedItem({ n, title, body }: { n: string; title: string; body: string }) {
  return (
    <li className="flex items-start gap-4">
      <span className="font-display italic text-brown text-[24px] leading-none w-10 shrink-0">{n}</span>
      <div>
        <p className="text-[15px] text-ink font-semibold leading-tight">{title}</p>
        <p className="mt-1 text-[13.5px] text-ink-soft leading-[1.55]">{body}</p>
      </div>
    </li>
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
