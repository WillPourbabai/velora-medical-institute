import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

export default function NotFound() {
  return (
    <section className="bg-cream min-h-[70vh] flex items-center">
      <div className="container-narrow text-center py-24">
        <p className="eyebrow">404 · Page Not Found</p>
        <h1 className="mt-6 font-display text-[64px] md:text-[96px] leading-[0.98] tracking-[-0.025em] text-ink">
          That page <em className="not-italic text-sage">doesn&rsquo;t exist</em>.
        </h1>
        <p className="mt-7 text-[16.5px] text-ink-soft leading-relaxed max-w-lg mx-auto">
          Most patients land here looking for one of three things: weight management,
          hormone therapy, or scheduling. Pick the closest:
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Link href="/weight-management" className="btn-primary px-7 py-4">Weight Management <ArrowUpRight className="size-3.5" /></Link>
          <Link href="/hormone-therapy" className="btn-secondary px-7 py-4">Hormone Therapy</Link>
          <Link href="/book" className="btn-secondary px-7 py-4">Book a $295 Consult</Link>
        </div>
      </div>
    </section>
  )
}
