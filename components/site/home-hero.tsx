import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

export function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-cream">
      {/* Background art — soft gradient + serif glyph */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-bone to-transparent" />
        <div className="absolute -right-20 top-10 font-display italic text-[480px] leading-none text-ink/[0.04] select-none">
          v
        </div>
        <div className="absolute left-1/2 top-1/3 -translate-x-1/2 w-[1400px] h-[600px] rounded-[50%] bg-sage-soft/40 blur-3xl" />
      </div>

      <div className="container-velora relative pt-12 lg:pt-16 pb-20 lg:pb-28">
        {/* Top label row */}
        <div className="flex items-center gap-3 mb-10">
          <span className="size-1.5 rounded-full bg-gold" />
          <span className="eyebrow">Velora Medical Institute</span>
          <span className="hidden md:inline-block h-px flex-1 max-w-[200px] bg-line" />
          <span className="hidden md:inline text-[11px] tracking-[0.18em] uppercase text-muted-foreground">
            Internal Medicine · Obesity Medicine
          </span>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end">
          <div className="lg:col-span-8">
            <h1 className="font-display text-[48px] sm:text-[68px] lg:text-[92px] leading-[0.98] tracking-[-0.022em] text-ink">
              Optimize your
              <br />
              metabolism.{' '}
              <span className="italic text-sage">Feel like</span>
              <br />
              <span className="italic text-sage">yourself again.</span>
            </h1>

            <p className="mt-9 text-[17px] md:text-[19px] leading-relaxed text-ink-soft max-w-2xl">
              Personalized, evidence-based care focused on metabolic health, weight management, and
              hormone optimization. Care is directed by{' '}
              <em className="not-italic font-medium text-ink">double board-certified physicians</em>{' '}
              in Internal Medicine and Obesity Medicine — tailored to your clinical profile and
              long-term health goals.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link href="/book?type=weight" className="btn-primary">
                Book Weight Management
                <ArrowUpRight className="size-3.5" />
              </Link>
              <Link href="/book?type=hormone" className="btn-secondary">
                Start Hormone Therapy
              </Link>
            </div>
          </div>

          {/* Right meta panel */}
          <aside className="lg:col-span-4 lg:pl-6 lg:border-l border-line">
            <div className="space-y-6">
              <MetaRow
                no="01"
                label="Physician-Directed"
                value="Double board-certified care"
              />
              <MetaRow
                no="02"
                label="Telemedicine"
                value="Secure, convenient visits"
              />
              <MetaRow
                no="03"
                label="Direct-Pay"
                value="Transparent investment"
              />
              <MetaRow
                no="04"
                label="Long-Term"
                value="Continuous monitoring"
              />
            </div>
          </aside>
        </div>

        {/* Bottom marquee strip */}
        <div className="mt-16 lg:mt-24 pt-8 border-t border-line flex flex-wrap items-center gap-x-10 gap-y-3 text-[11.5px] tracking-[0.18em] uppercase text-muted-foreground">
          <span className="text-sage font-medium">As Practiced By</span>
          <span>Internal Medicine</span>
          <span className="text-line">·</span>
          <span>Obesity Medicine</span>
          <span className="text-line">·</span>
          <span>Bioidentical Hormone Therapy</span>
          <span className="text-line">·</span>
          <span>GLP-1 Therapeutics</span>
          <span className="text-line">·</span>
          <span>Metabolic Optimization</span>
        </div>
      </div>
    </section>
  )
}

function MetaRow({ no, label, value }: { no: string; label: string; value: string }) {
  return (
    <div className="flex items-baseline gap-5 group">
      <span className="font-display italic text-gold text-[14px] w-7">{no}</span>
      <div className="flex-1 border-b border-line/80 pb-3">
        <p className="text-[10.5px] tracking-[0.22em] uppercase text-sage">{label}</p>
        <p className="mt-1 text-[15px] text-ink">{value}</p>
      </div>
    </div>
  )
}
