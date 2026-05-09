import type { Metadata } from 'next'
import { Suspense } from 'react'
import { Fraunces, Inter } from 'next/font/google'
import { Toaster } from '@/components/ui/sonner'
import { SiteHeader } from '@/components/site/site-header'
import { SiteFooter } from '@/components/site/site-footer'
import { EditorRoot } from '@/components/editor/EditorRoot'
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
    default: 'Velora Medical Institute — Physician-Guided Weight Management & Hormone Therapy',
    template: '%s — Velora Medical Institute',
  },
  description:
    'Physician-directed care in metabolic health, medical weight management, and bioidentical hormone therapy. Double board-certified physicians in Internal Medicine and Obesity Medicine.',
  keywords: [
    'medical weight management',
    'hormone therapy',
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
      'Physician-guided weight management and hormone therapy. Direct-pay telemedicine practice.',
    siteName: 'Velora Medical Institute',
  },
  icons: {
    icon: '/icon.svg',
    apple: '/apple-icon.png',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="min-h-screen bg-bone text-ink font-sans antialiased flex flex-col">
        <Suspense fallback={null}>
          <EditorRoot>
            <SiteHeader />
            <main className="flex-1">{children}</main>
            <SiteFooter />
          </EditorRoot>
        </Suspense>
        <Toaster position="top-center" />
      </body>
    </html>
  )
}
