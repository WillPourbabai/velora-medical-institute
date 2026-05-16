'use client'

import Link from 'next/link'
import { useEffect, useState, useRef } from 'react'
import { usePathname } from 'next/navigation'
import { Menu, X, Calendar, ChevronDown, ArrowRight } from 'lucide-react'
import { Logo } from './logo'
import { cn } from '@/lib/utils'

type NavItem = {
  href: string
  label: string
  children?: { href: string; label: string; description?: string }[]
}

const NAV: NavItem[] = [
  { href: '/about', label: 'About' },
  {
    href: '/programs',
    label: 'Care',
    children: [
      {
        href: '/weight-management',
        label: 'Weight Management',
        description: 'Physician-guided GLP-1 therapy and metabolic optimization.',
      },
      {
        href: '/hormone-therapy',
        label: 'Hormone Optimization',
        description: 'Bioidentical hormone therapy for men and women.',
      },
      {
        href: '/longevity',
        label: 'Longevity & Preventive',
        description: 'Proactive strategies for long-term vitality.',
      },
    ],
  },
  { href: '/programs#pricing', label: 'Pricing' },
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

  // Homepage hero is dark — float a transparent header over it until scroll.
  const isHome = pathname === '/'
  const overHero = isHome && !scrolled
  const navIdle = overHero ? 'text-cream/85 hover:text-gold' : 'text-ink hover:text-brown'
  const navActive = overHero ? 'text-gold' : 'text-brown'
  const accentBar = overHero ? 'bg-gold' : 'bg-brown'

  return (
    <header
      className={cn(
        'sticky top-0 z-50 transition-[background,backdrop-filter,box-shadow] duration-200',
        overHero
          ? 'bg-transparent'
          : scrolled
            ? 'bg-bone shadow-[0_2px_16px_-10px_rgba(74,52,28,0.3)] border-b border-line/50'
            : 'bg-bone',
      )}
    >
      <div className="container-velora flex items-center justify-between h-[84px] gap-6">
        <Logo size="sm" />

        <nav aria-label="Primary" className="hidden lg:flex items-center gap-7 xl:gap-9">
          {NAV.map((item) => {
            const active = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href))
            if (item.children) {
              const dropdownActive =
                pathname.startsWith(item.href) ||
                item.children.some((c) => pathname.startsWith(c.href))
              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={openMenu}
                  onMouseLeave={scheduleClose}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      'inline-flex items-center gap-1 text-[11px] tracking-[0.22em] uppercase font-medium py-2 transition-colors',
                      servicesOpen || dropdownActive ? navActive : navIdle,
                    )}
                    aria-haspopup="menu"
                    aria-expanded={servicesOpen}
                  >
                    {item.label}
                    <ChevronDown className={cn('size-3 transition-transform', servicesOpen && 'rotate-180')} />
                    <span className={cn(
                      'absolute left-0 right-0 -bottom-0.5 h-px origin-center transition-transform',
                      accentBar,
                      servicesOpen || dropdownActive ? 'scale-x-100' : 'scale-x-0',
                    )} />
                  </Link>
                  {servicesOpen && (
                    <div
                      className="absolute left-1/2 -translate-x-1/2 top-full pt-4 w-[420px]"
                      onMouseEnter={openMenu}
                      onMouseLeave={scheduleClose}
                    >
                      <div className="bg-paper rounded-xl border border-line/60 shadow-[0_28px_60px_-20px_rgba(74,52,28,0.35)] overflow-hidden">
                        {/* Eyebrow strip */}
                        <div className="px-6 pt-5 pb-3 flex items-center gap-3 border-b border-line/50">
                          <span className="w-6 h-px bg-gold/80" />
                          <p className="text-[9px] tracking-[0.36em] uppercase text-brown font-semibold">
                            Our Care
                          </p>
                        </div>
                        {/* Items */}
                        <div className="py-2">
                          {item.children.map((child, i) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="group flex items-start gap-4 px-6 py-4 hover:bg-bone transition-colors"
                            >
                              <span
                                className="font-display italic text-brown/60 group-hover:text-brown leading-none pt-1 shrink-0 transition-colors"
                                style={{ fontSize: '20px' }}
                              >
                                0{i + 1}
                              </span>
                              <div className="flex-1 min-w-0">
                                <p className="font-display text-[15px] text-ink group-hover:text-brown leading-tight transition-colors">
                                  {child.label}
                                </p>
                                {child.description && (
                                  <p className="mt-1 text-[12px] text-ink-soft leading-[1.5]">
                                    {child.description}
                                  </p>
                                )}
                              </div>
                              <ArrowRightMini />
                            </Link>
                          ))}
                        </div>
                        {/* Footer link to programs */}
                        <Link
                          href="/programs"
                          className="flex items-center justify-between gap-3 px-6 py-4 border-t border-line/50 bg-bone/50 hover:bg-bone transition-colors group"
                        >
                          <span className="text-[10px] tracking-[0.32em] uppercase text-brown font-semibold">
                            View structured programs
                          </span>
                          <ArrowRightMini />
                        </Link>
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
                  active ? navActive : navIdle,
                )}
              >
                {item.label}
                {active && (
                  <span className={cn('absolute left-0 right-0 -bottom-0.5 h-px', accentBar)} />
                )}
              </Link>
            )
          })}
        </nav>

        <div className="flex items-center gap-3 shrink-0">
          <Link
            href="/book"
            className={cn(
              'hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-md text-[10.5px] tracking-[0.22em] uppercase font-semibold transition-colors',
              overHero
                ? 'bg-gold text-ink hover:bg-gold/90'
                : 'bg-brown text-cream hover:bg-brown-deep',
            )}
          >
            <Calendar className="size-3.5" strokeWidth={2} />
            Schedule Consultation
          </Link>
          <button
            type="button"
            className={cn(
              'lg:hidden inline-flex items-center justify-center w-10 h-10 -mr-2 transition-colors',
              overHero ? 'text-cream' : 'text-ink',
            )}
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
            <div className="flex items-center justify-between h-[84px] px-6 border-b border-line">
              <Logo size="sm" />
              <button
                type="button"
                className="inline-flex items-center justify-center w-11 h-11 text-ink"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
              >
                <X className="size-7" />
              </button>
            </div>
            <nav className="flex-1 overflow-y-auto px-6 py-6 flex flex-col">
              {/* Home — always first on mobile */}
              <Link
                key="/"
                href="/"
                className="font-display text-[28px] py-3 text-ink hover:text-brown transition-colors border-b border-line/60"
              >
                Home
              </Link>
              {NAV.flatMap((item) =>
                item.children
                  ? [
                      <p key={item.label + '-l'} className="text-[11px] tracking-[0.26em] uppercase text-ink-soft mt-5 mb-2">
                        {item.label}
                      </p>,
                      ...item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="font-display text-[24px] py-2.5 text-ink hover:text-brown transition-colors"
                        >
                          {child.label}
                        </Link>
                      )),
                    ]
                  : [
                      <Link
                        key={item.href}
                        href={item.href}
                        className="font-display text-[28px] py-3 text-ink hover:text-brown transition-colors border-b border-line/60"
                      >
                        {item.label}
                      </Link>,
                    ]
              )}
            </nav>
            <div className="p-6 border-t border-line">
              <Link
                href="/book"
                className="w-full inline-flex items-center justify-center gap-2.5 bg-brown text-cream hover:bg-brown-deep px-6 py-4 text-[13px] tracking-[0.26em] uppercase font-semibold rounded-md transition-colors"
              >
                <Calendar className="size-5" />
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

function ArrowRightMini() {
  return (
    <ArrowRight className="size-3.5 text-brown/50 group-hover:text-brown group-hover:translate-x-0.5 transition-all shrink-0 mt-1" />
  )
}
