import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Velora Medical Institute',
  description:
    'Reach a physician directly at Velora Medical Institute. Telemedicine practice serving select states. Direct-pay, written replies typically within 24 hours.',
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
