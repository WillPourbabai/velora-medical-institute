import Link from 'next/link'
import { Mail, Phone, MapPin, Calendar, ArrowRight } from 'lucide-react'
import { Logo } from './logo'

const care = [
  { href: '/weight-management', label: 'Weight Management' },
  { href: '/hormone-therapy', label: 'Hormone Optimization' },
  { href: '/longevity', label: 'Longevity Medicine' },
  { href: '/programs', label: 'Structured Programs' },
  { href: '/individual-visits', label: 'Individual Visits' },
]
const practice = [
  { href: '/about', label: 'About Velora' },
  { href: '/physicians', label: 'Our Physicians' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
  { href: '/intake', label: 'Patient Intake' },
]
const legal = [
  { href: '/legal/privacy', label: 'Privacy' },
  { href: '/legal/hipaa', label: 'HIPAA' },
  { href: '/legal/terms', label: 'Terms' },
]

export function SiteFooter() {
  return (
    <footer className="bg-cream border-t border-line/60 mt-16">
      <div className="mx-auto w-full max-w-[1180px] px-6 sm:px-8 lg:px-10">
        {/* Top — brand + links */}
        <div className="pt-14 lg:pt-16 pb-12 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 lg:gap-12">
          {/* Brand column */}
          <div className="md:col-span-5">
            <Logo size="md" />
            <p
              className="mt-6 font-display italic text-ink/85 leading-[1.4] max-w-[380px]"
              style={{ fontSize: 'clamp(15px, 1.1vw, 17px)' }}
            >
              Care should feel personal &mdash; because it is personal.
            </p>
            <p className="mt-5 text-[13px] text-ink-soft leading-[1.65] max-w-[380px]">
              A physician-directed telemedicine practice in metabolic health,
              hormone optimization, and longevity care. Direct-pay. Double
              board-certified in Internal &amp; Obesity Medicine.
            </p>

            <Link
              href="/book"
              className="mt-7 inline-flex items-center gap-2.5 bg-brown text-cream hover:bg-brown-deep px-5 py-3 rounded-md text-[10.5px] tracking-[0.26em] uppercase font-semibold transition-colors"
            >
              <Calendar className="size-3.5" strokeWidth={2} />
              Schedule Consultation
            </Link>

            <ul className="mt-7 space-y-2 text-[13px] text-ink-soft">
              <li className="flex items-center gap-2.5">
                <Mail className="size-3.5 text-brown shrink-0" strokeWidth={1.6} />
                <a href="mailto:care@veloramedical.com" className="hover:text-brown transition-colors">
                  care@veloramedical.com
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="size-3.5 text-brown shrink-0" strokeWidth={1.6} />
                <a href="tel:+18335835672" className="hover:text-brown transition-colors">
                  (833) 583-5672
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MapPin className="size-3.5 text-brown shrink-0" strokeWidth={1.6} />
                <span>Telemedicine &middot; California</span>
              </li>
            </ul>
          </div>

          {/* Links — 2 columns */}
          <div className="md:col-span-7 grid grid-cols-2 gap-8 md:gap-10 md:pt-2">
            <FooterCol title="Care" items={care} />
            <FooterCol title="Practice" items={practice} />
          </div>
        </div>

        {/* Hairline + bottom strip */}
        <div className="border-t border-line/60 py-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between text-[11px] text-ink-soft">
          <p className="tracking-[0.22em] uppercase">
            &copy; {new Date().getFullYear()} Velora Medical Institute
          </p>
          <ul className="flex items-center gap-5">
            {legal.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="tracking-[0.22em] uppercase hover:text-brown transition-colors">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Medical disclaimer */}
        <p className="pb-8 text-[10.5px] text-ink-soft/75 leading-[1.65] max-w-3xl">
          Information on this site is for educational purposes and is not a substitute for medical
          advice, diagnosis, or treatment. Individual results vary. In a medical emergency, call 911.
        </p>
      </div>
    </footer>
  )
}

function FooterCol({ title, items }: { title: string; items: { href: string; label: string }[] }) {
  return (
    <div>
      <div className="flex items-center gap-2.5">
        <span className="w-5 h-px bg-gold/70" />
        <p className="text-[10px] tracking-[0.32em] uppercase text-brown font-semibold">
          {title}
        </p>
      </div>
      <ul className="mt-5 space-y-2.5 text-[13.5px]">
        {items.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="text-ink-soft hover:text-brown transition-colors"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
