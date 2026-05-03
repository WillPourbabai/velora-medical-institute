'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { Logo } from './logo'
import { cn } from '@/lib/utils'

const NAV = [
  { href: '/weight-management', label: 'Weight Management' },
  { href: '/hormone-therapy', label: 'Hormone Therapy' },
  { href: '/programs', label: 'Programs' },
  { href: '/physicians', label: 'Physicians' },
  { href: '/faq', label: 'FAQ' },
]

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <header
      className={cn(
        'sticky top-0 z-50 transition-colors duration-300',
        scrolled
          ? 'bg-bone/90 backdrop-blur-md border-b border-line'
          : 'bg-bone border-b border-transparent',
      )}
    >
      {/* Utility bar */}
      <div className="hidden md:block bg-ink text-cream/85">
        <div className="container-velora flex items-center justify-between text-[11px] tracking-[0.16em] uppercase py-2">
          <span className="opacity-80">Direct-Pay Practice · Physician-Directed Telemedicine</span>
          <div className="flex items-center gap-6 opacity-80">
            <Link href="/contact" className="hover:text-gold transition-colors">Contact</Link>
            <Link href="/intake" className="hover:text-gold transition-colors">Patient Intake</Link>
            <span className="text-gold">·</span>
            <span>Mon–Fri · 8am–6pm CT</span>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="container-velora flex items-center justify-between h-[74px]">
        <Logo />

        <nav aria-label="Primary" className="hidden lg:flex items-center gap-9">
          {NAV.map((item) => {
            const active = pathname === item.href || pathname.startsWith(item.href + '/')
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'text-[13.5px] font-medium transition-colors relative py-1',
                  active ? 'text-sage' : 'text-ink hover:text-sage',
                )}
              >
                {item.label}
                {active && (
                  <span className="absolute -bottom-0.5 left-0 right-0 h-px bg-sage" />
                )}
              </Link>
            )
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/book" className="btn-primary hidden md:inline-flex">
            Book Consultation
            <ArrowUpRight className="size-3.5" />
          </Link>
          <button
            type="button"
            className="lg:hidden inline-flex items-center justify-center w-10 h-10 -mr-2 text-ink"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="size-6" />
          </button>
        </div>
      </div>

      {/* Mobile sheet */}
      {open && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-ink/40 backdrop-blur-sm"
            onClick={() => setOpen(false)}
            aria-hidden
          />
          <div className="absolute top-0 right-0 h-full w-[88%] max-w-sm bg-bone shadow-2xl flex flex-col animate-fade-in">
            <div className="flex items-center justify-between h-[74px] px-6 border-b border-line">
              <Logo />
              <button
                type="button"
                className="inline-flex items-center justify-center w-10 h-10 text-ink"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
              >
                <X className="size-6" />
              </button>
            </div>
            <nav className="flex-1 overflow-y-auto px-6 py-6 flex flex-col gap-1">
              {NAV.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="font-display text-[28px] py-3 text-ink hover:text-sage transition-colors border-b border-line/60"
                >
                  {item.label}
                </Link>
              ))}
              <Link href="/about" className="font-display text-[28px] py-3 text-ink hover:text-sage transition-colors border-b border-line/60">About</Link>
              <Link href="/intake" className="font-display text-[28px] py-3 text-ink hover:text-sage transition-colors border-b border-line/60">Patient Intake</Link>
              <Link href="/contact" className="font-display text-[28px] py-3 text-ink hover:text-sage transition-colors border-b border-line/60">Contact</Link>
            </nav>
            <div className="p-6 border-t border-line">
              <Link href="/book" className="btn-primary w-full">
                Book Consultation
                <ArrowUpRight className="size-4" />
              </Link>
              <p className="mt-4 text-[11px] tracking-[0.16em] uppercase text-muted-foreground text-center">
                Direct-Pay · Telemedicine
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
