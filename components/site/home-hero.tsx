import Link from 'next/link'
import { Calendar, ArrowRight, Monitor, UserRound, ClipboardCheck, ShieldCheck } from 'lucide-react'
import { VeloraMark } from './logo'

/**
 * Homepage hero — 1:1 to the original dark hero composition, but in the light cream theme.
 * Full-bleed photo background. Cream gradient over the left half. HTML overlays:
 *  - V leaf monogram + "VELORA / MEDICAL INSTITUTE" stack (top-left)
 *  - Categories eyebrow row
 *  - Big 3-line headline with brown accents
 *  - Gold underline
 *  - Body
 *  - Brown CTA + outline CTA
 *  - Feature row + bottom utility strip
 */
export function HomeHero() {
  return (
    <section className="relative bg-bone overflow-hidden">
      {/* Full-bleed photo on the right */}
      <div
        className="absolute inset-y-0 right-0 w-[58%] sm:w-[55%] lg:w-1/2"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=2400&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: '70% center',
          backgroundRepeat: 'no-repeat',
        }}
        aria-hidden
      />
      {/* Soft cream feather over the left edge of the photo so the seam blends */}
      <div className="absolute inset-y-0 left-[20%] right-[30%] bg-gradient-to-r from-bone via-bone/85 to-transparent pointer-events-none hidden sm:block" />
      <div className="absolute inset-y-0 left-[10%] right-[40%] bg-gradient-to-r from-bone via-bone/85 to-transparent pointer-events-none sm:hidden" />

      {/* Warm gold light beam top-left */}
      <div
        className="absolute -top-32 -left-32 w-[800px] h-[600px] -rotate-[18deg] opacity-60 pointer-events-none"
        style={{
          background:
            'linear-gradient(100deg, rgba(255,235,200,0.85) 0%, rgba(255,225,180,0.4) 35%, rgba(255,225,180,0) 70%)',
          filter: 'blur(50px)',
        }}
        aria-hidden
      />

      <div className="relative container-velora pt-12 sm:pt-14 lg:pt-16 pb-10 lg:pb-14 lg:min-h-[80vh] lg:max-h-[860px] flex flex-col">
        {/* Brand stack — top left */}
        <div className="flex flex-col items-start">
          <VeloraMark size={42} />
          <div className="mt-2 font-display tracking-[0.36em] text-[24px] sm:text-[30px] text-ink leading-none">
            VELORA
          </div>
          <div className="mt-1.5 font-sans tracking-[0.36em] text-[9.5px] sm:text-[10px] text-brown leading-none uppercase font-semibold">
            Medical Institute
          </div>
        </div>

        {/* Categories eyebrow */}
        <div className="mt-9 flex flex-wrap items-center gap-x-3 gap-y-2 text-[10px] sm:text-[11px] tracking-[0.32em] uppercase text-ink font-semibold max-w-2xl">
          <span>Telemedicine Care</span>
          <span className="text-brown">•</span>
          <span>Obesity Medicine</span>
          <span className="text-brown">•</span>
          <span>Hormone Therapy</span>
        </div>

        {/* Big multiline headline */}
        <h1
          className="mt-5 font-display leading-[1.0] tracking-[-0.022em] text-ink max-w-2xl"
          style={{ fontSize: 'clamp(2.125rem, 5vw, 4.25rem)' }}
        >
          Physician-Guided
          <br />
          <span className="text-brown">Weight Loss &amp;</span>
          <br />
          <span className="text-brown">Hormone Optimization</span>
        </h1>

        {/* Gold underline */}
        <div className="mt-6 w-16 h-px bg-gold" />

        {/* Body */}
        <p className="mt-6 max-w-md text-[14.5px] leading-[1.65] text-ink-soft">
          Personalized telemedicine care for metabolic health, weight management,
          and hormone balance &mdash; guided by physicians and refined over time
          to support lasting results.
        </p>

        {/* CTAs */}
        <div className="mt-7 flex flex-wrap gap-3">
          <Link
            href="/book"
            className="inline-flex items-center gap-2.5 bg-brown text-cream hover:bg-brown-deep px-6 py-3.5 rounded-md text-[11px] tracking-[0.24em] uppercase font-semibold transition-colors"
          >
            <Calendar className="size-4" strokeWidth={2} />
            Book Consultation
          </Link>
          <Link
            href="/programs"
            className="inline-flex items-center gap-2.5 border border-ink text-ink hover:bg-ink hover:text-cream px-6 py-3.5 rounded-md text-[11px] tracking-[0.24em] uppercase font-semibold transition-colors"
          >
            View Programs
            <ArrowRight className="size-4" strokeWidth={2} />
          </Link>
        </div>

        {/* Spacer */}
        <div className="flex-1 min-h-[40px]" />

        {/* Feature row */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-x-6 gap-y-5 max-w-2xl">
          <FeatureItem
            icon={<Monitor className="size-4" strokeWidth={1.6} />}
            title="Telemedicine Visits"
            body="Private. Convenient. Secure."
          />
          <FeatureItem
            icon={<UserRound className="size-4" strokeWidth={1.6} />}
            title="Physician-Led Care"
            body="Expert guidance every step."
          />
          <FeatureItem
            icon={<ClipboardCheck className="size-4" strokeWidth={1.6} />}
            title="Personalized Plans"
            body="Tailored to your biology and goals."
          />
        </div>

        {/* Bottom utility strip */}
        <div className="mt-7 pt-5 border-t border-line/60 flex flex-wrap items-center gap-x-6 gap-y-2 text-[9.5px] sm:text-[10px] tracking-[0.28em] uppercase">
          <span className="flex items-center gap-2 text-ink">
            <ShieldCheck className="size-3 text-brown" strokeWidth={1.8} />
            Physician-Led
          </span>
          <span className="text-brown">•</span>
          <span className="text-ink">Evidence-Based</span>
          <span className="text-brown">•</span>
          <span className="text-ink">Results-Driven</span>
          <span className="basis-full md:basis-auto md:ml-auto text-ink-soft normal-case tracking-[0.18em] text-[11px]">
            Optimize your health. <span className="text-brown font-semibold">Elevate your life.</span>
          </span>
        </div>
      </div>
    </section>
  )
}

function FeatureItem({
  icon, title, body,
}: { icon: React.ReactNode; title: string; body: string }) {
  return (
    <div className="flex items-start gap-3">
      <span className="mt-0.5 size-9 rounded-full bg-paper border border-brown/30 text-brown flex items-center justify-center shrink-0">
        {icon}
      </span>
      <div>
        <p className="text-[10px] tracking-[0.22em] uppercase text-ink font-semibold">{title}</p>
        <p className="mt-1 text-[12px] text-ink-soft leading-[1.5]">{body}</p>
      </div>
    </div>
  )
}
