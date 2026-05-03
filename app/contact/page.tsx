import type { Metadata } from 'next'
import { Mail, Phone, Clock, MapPin } from 'lucide-react'
import { ContactForm } from './contact-form'
import { Section } from '@/components/site/section'

export const metadata: Metadata = {
  title: 'Contact Velora Medical Institute',
  description:
    'Reach the Velora Medical Institute care team. Telemedicine practice serving select states. Email, phone, and a contact form.',
}

export default function ContactPage() {
  return (
    <>
      <section className="bg-cream border-b border-line">
        <div className="container-velora pt-14 md:pt-20 pb-12">
          <p className="eyebrow">Contact</p>
          <h1 className="mt-4 font-display text-[42px] md:text-[58px] lg:text-[68px] leading-[1.04] tracking-[-0.018em] text-ink max-w-3xl">
            We&rsquo;re here to <em className="not-italic text-sage">help you start</em>.
          </h1>
          <p className="mt-6 text-[16.5px] text-ink-soft max-w-2xl leading-relaxed">
            For clinical questions, please book a consultation. For general inquiries, scheduling support,
            or program information, our team responds within one business day.
          </p>
        </div>
      </section>

      <Section bg="bone">
        <div className="grid lg:grid-cols-12 gap-10">
          {/* Contact info */}
          <aside className="lg:col-span-4 space-y-4">
            <ContactCard
              icon={<Mail className="size-5" />}
              title="Email"
              value="care@veloramedical.com"
              href="mailto:care@veloramedical.com"
              description="General inquiries and scheduling support"
            />
            <ContactCard
              icon={<Phone className="size-5" />}
              title="Phone"
              value="(833) 583-5672"
              href="tel:+18335835672"
              description="Mon–Fri · 8am–6pm Central"
            />
            <ContactCard
              icon={<Clock className="size-5" />}
              title="Hours"
              value="Mon–Fri · 8am–6pm CT"
              description="Telemedicine consultations by appointment"
            />
            <ContactCard
              icon={<MapPin className="size-5" />}
              title="Location"
              value="Telemedicine practice"
              description="Care delivered virtually in states where our physicians are licensed"
            />
          </aside>

          {/* Form */}
          <div className="lg:col-span-8">
            <ContactForm />
          </div>
        </div>
      </Section>
    </>
  )
}

function ContactCard({
  icon, title, value, description, href,
}: {
  icon: React.ReactNode; title: string; value: string; description: string; href?: string
}) {
  const content = (
    <>
      <span className="size-10 rounded-full bg-sage-soft text-sage flex items-center justify-center">
        {icon}
      </span>
      <div className="mt-5">
        <p className="eyebrow">{title}</p>
        <p className="mt-2 font-display text-[22px] leading-tight text-ink">{value}</p>
        <p className="mt-2 text-[13.5px] text-ink-soft leading-relaxed">{description}</p>
      </div>
    </>
  )
  if (href) {
    return (
      <a href={href} className="block bg-paper border border-line p-7 hover:border-sage transition-colors">
        {content}
      </a>
    )
  }
  return <div className="bg-paper border border-line p-7">{content}</div>
}
