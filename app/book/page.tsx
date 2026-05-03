import type { Metadata } from 'next'
import { Suspense } from 'react'
import { BookingClient } from './booking-client'

export const metadata: Metadata = {
  title: 'Book Your Consultation',
  description:
    'Schedule your physician-guided initial consultation in medical weight management or hormone therapy. Telemedicine visits, payment required to confirm.',
}

export default function BookPage() {
  return (
    <Suspense fallback={<div className="min-h-[60vh]" />}>
      <BookingClient />
    </Suspense>
  )
}
