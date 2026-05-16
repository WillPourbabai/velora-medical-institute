import type { Metadata, Viewport } from 'next'
import { Fraunces, Inter } from 'next/font/google'
import { Toaster } from '@/components/ui/sonner'
import { SiteHeader } from '@/components/site/site-header'
import { SiteFooter } from '@/components/site/site-footer'
import './globals.css'

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
  axes: ['SOFT', 'opsz'],
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://veloramedical.com'),
  title: {
    default: 'Velora Medical Institute — Weight Management, Hormone Therapy & Longevity',
    template: '%s — Velora Medical Institute',
  },
  description:
    'Physician-directed care in medical weight management, bioidentical hormone therapy, and longevity & preventive medicine. Double board-certified physicians in Internal Medicine and Obesity Medicine.',
  keywords: [
    'medical weight management',
    'hormone therapy',
    'longevity medicine',
    'preventive medicine',
    'bioidentical hormones',
    'GLP-1',
    'semaglutide',
    'tirzepatide',
    'BHRT',
    'telemedicine',
    'obesity medicine',
    'internal medicine',
  ],
  openGraph: {
    type: 'website',
    title: 'Velora Medical Institute',
    description:
      'Physician-guided weight management, hormone therapy, and longevity & preventive medicine. Direct-pay telemedicine practice.',
    siteName: 'Velora Medical Institute',
  },
  icons: {
    icon: '/icon.svg',
    apple: '/apple-icon.png',
  },
  robots: { index: true, follow: true },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#F4EBD3',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="min-h-screen bg-bone text-ink font-sans antialiased flex flex-col">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <Toaster position="top-center" />
      </body>
    </html>
  )
}
