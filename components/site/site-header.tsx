'use client'

import Link from 'next/link'
import { useEffect, useState, useRef } from 'react'
import { usePathname } from 'next/navigation'
import { Menu, X, Calendar, ChevronDown } from 'lucide-react'
import { Logo } from './logo'
import { cn } from '@/lib/utils'

const NAV: { href: string; label: string; children?: { href: string; label: string }[] }[] = [
  { href: '/about', label: 'About' },
  {
    href: '#services',
    label: 'Services',
    children: [
      { href: '/weight-management', label: 'Weight Management' },
      { href: '/hormone-therapy', label: 'Hormone Optimization' },
      { href: '/longevity', label: 'Longevity & Preventive Medicine' },
    ],
  },
  { href: '/programs', label: 'Programs' },
  { href: '/programs#pricing', label: 'Pricing' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
]

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
    setServicesOpen(false)
  }, [pathname])

  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const openMenu = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setServicesOpen(true)
  }
  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setServicesOpen(false), 150)
  }

  return (
    <header
      className={cn(
        'sticky top-0 z-50 transition-[background,border-color,box-shadow] duration-200',
        scrolled
          ? 'bg-bone/95 backdrop-blur-md border-b border-line/60 shadow-[0_4px_20px_-12px_rgba(74,52,28,0.15)]'
          : 'bg-bone border-b border-transparent',
      )}
    >
      <div className="container-velora flex items-center justify-between h-[78px] gap-6">
        <Logo size="sm" />

        <nav aria-label="Primary" className="hidden lg:flex items-center gap-7 xl:gap-9">
          {NAV.map((item) => {
            const active = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href))
            if (item.children) {
              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={openMenu}
                  onMouseLeave={scheduleClose}
                >
                  <button
                    type="button"
                    className={cn(
                      'inline-flex items-center gap-1 text-[11px] tracking-[0.22em] uppercase font-medium py-2 transition-colors',
                      servicesOpen ? 'text-brown' : 'text-ink hover:text-brown',
                    )}
                    aria-haspopup="menu"
                    aria-expanded={servicesOpen}
                  >
                    {item.label}
                    <ChevronDown className={cn('size-3 transition-transform', servicesOpen && 'rotate-180')} />
                    <span className={cn(
                      'absolute left-0 right-0 -bottom-0.5 h-px bg-brown origin-center transition-transform',
                      servicesOpen ? 'scale-x-100' : 'scale-x-0',
                    )} />
                  </button>
                  {servicesOpen && (
                    <div
                      className="absolute left-1/2 -translate-x-1/2 top-full pt-3 min-w-[260px]"
                      onMouseEnter={openMenu}
                      onMouseLeave={scheduleClose}
                    >
                      <div className="bg-paper rounded-md border border-line/70 shadow-[0_18px_50px_-12px_rgba(74,52,28,0.25)] overflow-hidden">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-5 py-3 text-[13px] text-ink hover:text-brown hover:bg-bone transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )
            }
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'relative text-[11px] tracking-[0.22em] uppercase font-medium py-2 transition-colors',
                  active ? 'text-brown' : 'text-ink hover:text-brown',
                )}
              >
                {item.label}
                {active && (
                  <span className="absolute left-0 right-0 -bottom-0.5 h-px bg-brown" />
                )}
              </Link>
            )
          })}
        </nav>

        <div className="flex items-center gap-3 shrink-0">
          <Link
            href="/book"
            className="hidden md:inline-flex items-center gap-2 bg-brown text-cream hover:bg-brown-deep px-5 py-2.5 rounded-md text-[10.5px] tracking-[0.22em] uppercase font-semibold transition-colors"
          >
            <Calendar className="size-3.5" strokeWidth={2} />
            Schedule Consultation
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
            className="absolute inset-0 bg-ink/60 backdrop-blur-sm animate-fade-in"
            onClick={() => setOpen(false)}
            aria-hidden
          />
          <div className="absolute top-0 right-0 h-full w-[88%] max-w-sm bg-bone shadow-[-20px_0_60px_-10px_rgba(0,0,0,0.4)] flex flex-col animate-fade-in">
            <div className="flex items-center justify-between h-[78px] px-6 border-b border-line">
              <Logo size="sm" />
              <button
                type="button"
                className="inline-flex items-center justify-center w-10 h-10 text-ink"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
              >
                <X className="size-6" />
              </button>
            </div>
            <nav className="flex-1 overflow-y-auto px-6 py-6 flex flex-col">
              {NAV.flatMap((item) =>
                item.children
                  ? [
                      <p key={item.label + '-l'} className="text-[10px] tracking-[0.24em] uppercase text-ink-soft mt-4 mb-1.5">
                        {item.label}
                      </p>,
                      ...item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="font-display text-[22px] py-2 text-ink hover:text-brown transition-colors"
                        >
                          {child.label}
                        </Link>
                      )),
                    ]
                  : [
                      <Link
                        key={item.href}
                        href={item.href}
                        className="font-display text-[26px] py-3 text-ink hover:text-brown transition-colors border-b border-line/60"
                      >
                        {item.label}
                      </Link>,
                    ]
              )}
            </nav>
            <div className="p-6 border-t border-line">
              <Link
                href="/book"
                className="w-full inline-flex items-center justify-center gap-2 bg-brown text-cream hover:bg-brown-deep px-6 py-4 text-[12px] tracking-[0.24em] uppercase font-semibold rounded-md transition-colors"
              >
                <Calendar className="size-4" />
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
