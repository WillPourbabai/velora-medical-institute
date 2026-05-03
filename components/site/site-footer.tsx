import Link from 'next/link'
import { ArrowUpRight, Mail, Phone, MapPin } from 'lucide-react'
import { Logo } from './logo'

const services = [
  { href: '/weight-management', label: 'Medical Weight Management' },
  { href: '/hormone-therapy', label: 'Hormone Therapy' },
  { href: '/programs', label: 'Structured Programs' },
  { href: '/book', label: 'Book Consultation' },
]
const practice = [
  { href: '/physicians', label: 'Our Physicians' },
  { href: '/about', label: 'About Velora' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
]
const legal = [
  { href: '/intake', label: 'Patient Intake' },
  { href: '/legal/privacy', label: 'Privacy Policy' },
  { href: '/legal/hipaa', label: 'HIPAA Notice' },
  { href: '/legal/terms', label: 'Terms of Service' },
]

export function SiteFooter() {
  return (
    <footer className="bg-ink text-cream/90 mt-24">
      {/* Top CTA bar */}
      <div className="border-b border-cream/10">
        <div className="container-velora py-14 grid lg:grid-cols-[1.4fr_1fr] gap-10 items-end">
          <div>
            <p className="eyebrow text-gold mb-5">Begin Your Care</p>
            <h2 className="font-display text-4xl md:text-5xl text-cream leading-[1.05] tracking-[-0.015em]">
              Physician-guided care, <em className="not-italic text-gold/95">designed for you.</em>
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3">
            <Link
              href="/book?type=weight"
              className="btn bg-cream text-ink hover:bg-gold hover:text-ink px-6 py-3.5 flex-1"
            >
              Book Weight Management
              <ArrowUpRight className="size-3.5" />
            </Link>
            <Link
              href="/book?type=hormone"
              className="btn bg-transparent border border-cream/30 text-cream hover:bg-cream hover:text-ink px-6 py-3.5 flex-1"
            >
              Start Hormone Therapy
              <ArrowUpRight className="size-3.5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Link grid */}
      <div className="container-velora py-16 grid grid-cols-2 md:grid-cols-12 gap-10">
        <div className="col-span-2 md:col-span-4">
          <Logo variant="cream" />
          <p className="mt-5 text-[14px] leading-relaxed text-cream/70 max-w-sm">
            Physician-directed care in metabolic health, weight management, and hormone optimization.
            Direct-pay, telemedicine-based practice led by double board-certified physicians.
          </p>
          <ul className="mt-7 space-y-3 text-[13px] text-cream/70">
            <li className="flex items-start gap-2.5">
              <Mail className="size-4 mt-0.5 text-gold/80 shrink-0" />
              <a href="mailto:care@veloramedical.com" className="hover:text-gold transition-colors">
                care@veloramedical.com
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <Phone className="size-4 mt-0.5 text-gold/80 shrink-0" />
              <a href="tel:+18335835672" className="hover:text-gold transition-colors">
                (833) 583-5672
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin className="size-4 mt-0.5 text-gold/80 shrink-0" />
              <span>Telemedicine practice — licensed in select states</span>
            </li>
          </ul>
        </div>

        <FooterCol title="Services" items={services} />
        <FooterCol title="Practice" items={practice} />
        <FooterCol title="Patients" items={legal} />
      </div>

      {/* Compliance / fineprint */}
      <div className="border-t border-cream/10">
        <div className="container-velora py-7 flex flex-col md:flex-row gap-4 items-start md:items-center justify-between text-[11px] tracking-[0.14em] uppercase text-cream/50">
          <p>© {new Date().getFullYear()} Velora Medical Institute · All rights reserved</p>
          <p className="normal-case tracking-normal text-[11.5px] max-w-xl text-right">
            The content on this website is for informational purposes and is not a substitute for medical
            advice, diagnosis, or treatment. Individual results vary.
          </p>
        </div>
      </div>
    </footer>
  )
}

function FooterCol({ title, items }: { title: string; items: { href: string; label: string }[] }) {
  return (
    <div className="md:col-span-2 lg:col-span-2 col-span-1">
      <p className="text-[11px] tracking-[0.22em] uppercase text-gold mb-5">{title}</p>
      <ul className="space-y-3 text-[14px]">
        {items.map((item) => (
          <li key={item.href}>
            <Link href={item.href} className="text-cream/70 hover:text-cream transition-colors">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
