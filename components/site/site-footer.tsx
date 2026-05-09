import Link from 'next/link'
import { Calendar, Mail, Phone, MapPin } from 'lucide-react'
import { Logo } from './logo'

const services = [
  { href: '/weight-management', label: 'Weight Management' },
  { href: '/hormone-therapy', label: 'Hormone Optimization' },
  { href: '/longevity', label: 'Longevity & Preventive' },
  { href: '/programs', label: 'Structured Programs' },
  { href: '/individual-visits', label: 'Individual Visits' },
]
const practice = [
  { href: '/physicians', label: 'Our Physicians' },
  { href: '/about', label: 'About Velora' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
]
const patients = [
  { href: '/intake', label: 'Patient Intake' },
  { href: '/book', label: 'Book Consultation' },
  { href: '/legal/privacy', label: 'Privacy Policy' },
  { href: '/legal/hipaa', label: 'HIPAA Notice' },
  { href: '/legal/terms', label: 'Terms of Service' },
]

export function SiteFooter() {
  return (
    <footer className="bg-cream border-t border-line/60 mt-20">
      {/* Top CTA bar — brown panel */}
      <div className="container-velora py-12">
        <div className="bg-brown text-cream rounded-2xl px-8 md:px-12 py-10 md:py-12 grid lg:grid-cols-[1.3fr_1fr] gap-8 items-center">
          <div>
            <p className="text-[10.5px] tracking-[0.32em] uppercase text-gold font-semibold mb-3">
              Begin Your Care
            </p>
            <h2
              className="font-display leading-[1.05] tracking-[-0.015em]"
              style={{ fontSize: 'clamp(1.625rem, 3.6vw, 2.5rem)' }}
            >
              Physician-guided care, <em className="not-italic text-gold">designed for you.</em>
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 lg:justify-end">
            <Link
              href="/book"
              className="inline-flex items-center justify-center gap-2 bg-cream text-brown hover:bg-paper px-6 py-3.5 rounded-md text-[11px] tracking-[0.24em] uppercase font-semibold transition-colors"
            >
              <Calendar className="size-4" strokeWidth={2} />
              Schedule Consultation
            </Link>
            <Link
              href="/programs"
              className="inline-flex items-center justify-center gap-2 border border-cream/40 text-cream hover:bg-cream/10 px-6 py-3.5 rounded-md text-[11px] tracking-[0.24em] uppercase font-semibold transition-colors"
            >
              View Programs
            </Link>
          </div>
        </div>
      </div>

      {/* Link grid */}
      <div className="container-velora pb-12 grid grid-cols-2 md:grid-cols-12 gap-10">
        <div className="col-span-2 md:col-span-4">
          <Logo size="sm" />
          <p className="mt-5 text-[14px] leading-relaxed text-ink-soft max-w-sm">
            Physician-directed telemedicine practice in metabolic health, weight management,
            hormone optimization, and longevity care. Direct-pay. Double board-certified physicians
            in Internal Medicine and Obesity Medicine.
          </p>
          <ul className="mt-6 space-y-2.5 text-[13px] text-ink-soft">
            <li className="flex items-start gap-2.5">
              <Mail className="size-4 mt-0.5 text-brown shrink-0" strokeWidth={1.6} />
              <a href="mailto:care@veloramedical.com" className="hover:text-brown transition-colors break-all">
                care@veloramedical.com
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <Phone className="size-4 mt-0.5 text-brown shrink-0" strokeWidth={1.6} />
              <a href="tel:+18335835672" className="hover:text-brown transition-colors">
                (833) 583-5672
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin className="size-4 mt-0.5 text-brown shrink-0" strokeWidth={1.6} />
              <span>Telemedicine practice — [STATES NEEDED]</span>
            </li>
          </ul>
        </div>

        <FooterCol title="Services" items={services} />
        <FooterCol title="Practice" items={practice} />
        <FooterCol title="Patients" items={patients} />
      </div>

      {/* Compliance fineprint */}
      <div className="border-t border-line/60">
        <div className="container-velora py-6 flex flex-col md:flex-row gap-3 items-start md:items-center justify-between text-[11px] text-ink-soft">
          <p className="tracking-[0.16em] uppercase">© {new Date().getFullYear()} Velora Medical Institute · All rights reserved</p>
          <p className="text-[11.5px] max-w-xl md:text-right">
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
      <p className="text-[10.5px] tracking-[0.28em] uppercase text-brown font-semibold mb-4">{title}</p>
      <ul className="space-y-2.5 text-[13.5px]">
        {items.map((item) => (
          <li key={item.href}>
            <Link href={item.href} className="text-ink-soft hover:text-brown transition-colors">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
