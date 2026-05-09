import Link from 'next/link'
import Image from 'next/image'
import { Calendar } from 'lucide-react'

/**
 * Homepage hero — matches mockup 07FC939F.
 * Cream split: left copy + brown CTA, right photo of female doctor at whiteboard.
 */
export function HomeHero() {
  return (
    <section className="relative bg-bone overflow-hidden">
      <div className="container-velora py-12 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* LEFT: copy */}
          <div className="order-2 lg:order-1">
            <p className="text-[10.5px] tracking-[0.32em] uppercase text-brown font-semibold">
              Our Services
            </p>
            <h1
              className="mt-5 font-display leading-[1.04] tracking-[-0.018em] text-ink"
              style={{ fontSize: 'clamp(2rem, 4.4vw, 3.5rem)' }}
            >
              Comprehensive Care.
              <br />
              Evidence-Based Results.
            </h1>
            <div className="mt-5 w-16 h-px bg-gold" />
            <p className="mt-6 text-[15.5px] leading-[1.65] text-ink-soft max-w-md">
              Our physician-guided services are designed to help you look, feel,
              and perform your best &mdash; now and for years to come.
            </p>
            <div className="mt-7">
              <Link
                href="/book"
                className="inline-flex items-center gap-2.5 bg-brown text-cream hover:bg-brown-deep px-6 py-3.5 rounded-md text-[11px] tracking-[0.24em] uppercase font-semibold transition-colors"
              >
                <Calendar className="size-4" strokeWidth={2} />
                Schedule Your Consultation
              </Link>
            </div>
          </div>

          {/* RIGHT: doctor photo */}
          <div className="relative aspect-[4/3] rounded-md overflow-hidden order-1 lg:order-2">
            <Image
              src="/photos/home-hero-doctor.png"
              alt="Velora physician walking through Velora services on a whiteboard during a telehealth visit"
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
