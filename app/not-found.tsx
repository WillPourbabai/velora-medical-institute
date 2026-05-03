import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

export default function NotFound() {
  return (
    <section className="bg-cream min-h-[70vh] flex items-center">
      <div className="container-narrow text-center py-24">
        <p className="eyebrow">404 · Page Not Found</p>
        <h1 className="mt-6 font-display text-[64px] md:text-[96px] leading-[0.98] tracking-[-0.025em] text-ink">
          We couldn&rsquo;t find <em className="not-italic text-sage">that page</em>.
        </h1>
        <p className="mt-7 text-[16.5px] text-ink-soft leading-relaxed max-w-lg mx-auto">
          The page you&rsquo;re looking for may have moved, been renamed, or never existed.
          Let&rsquo;s get you back on course.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Link href="/" className="btn-primary px-7 py-4">Return Home <ArrowUpRight className="size-3.5" /></Link>
          <Link href="/book" className="btn-secondary px-7 py-4">Book Consultation</Link>
        </div>
      </div>
    </section>
  )
}
