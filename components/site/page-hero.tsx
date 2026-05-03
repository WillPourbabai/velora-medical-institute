import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { cn } from '@/lib/utils'

interface PageHeroProps {
  eyebrow?: string
  title: React.ReactNode
  subtitle?: React.ReactNode
  primary?: { href: string; label: string }
  secondary?: { href: string; label: string }
  meta?: { label: string; value: string }[]
  variant?: 'sage' | 'cream' | 'ink'
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
  primary,
  secondary,
  meta,
  variant = 'cream',
}: PageHeroProps) {
  const inverted = variant === 'ink'
  const bg =
    variant === 'ink'
      ? 'bg-ink text-cream'
      : variant === 'sage'
      ? 'bg-sage-soft'
      : 'bg-cream'
  return (
    <section className={cn('relative overflow-hidden', bg)}>
      {/* Decorative serif accent */}
      <div
        aria-hidden
        className={cn(
          'absolute -right-10 -top-10 font-display italic select-none pointer-events-none',
          'text-[260px] leading-none opacity-[0.04]',
          inverted ? 'text-cream' : 'text-ink',
        )}
      >
        v
      </div>
      <div className="container-velora pt-16 md:pt-24 pb-16 md:pb-24 relative">
        <div className="grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-8">
            {eyebrow && (
              <span className={cn('eyebrow', inverted && 'text-gold')}>{eyebrow}</span>
            )}
            <h1
              className={cn(
                'mt-4 font-display leading-[1.02] tracking-[-0.018em]',
                'text-[44px] sm:text-[58px] lg:text-[78px]',
                inverted ? 'text-cream' : 'text-ink',
              )}
            >
              {title}
            </h1>
            {subtitle && (
              <p
                className={cn(
                  'mt-7 text-[17px] md:text-[18px] leading-relaxed max-w-2xl',
                  inverted ? 'text-cream/80' : 'text-ink-soft',
                )}
              >
                {subtitle}
              </p>
            )}
            {(primary || secondary) && (
              <div className="mt-9 flex flex-wrap gap-3">
                {primary && (
                  <Link href={primary.href} className={cn(
                    'btn px-6 py-3.5',
                    inverted
                      ? 'bg-cream text-ink hover:bg-gold'
                      : 'bg-ink text-cream hover:bg-sage-deep',
                  )}>
                    {primary.label}
                    <ArrowUpRight className="size-3.5" />
                  </Link>
                )}
                {secondary && (
                  <Link href={secondary.href} className={cn(
                    'btn px-6 py-3.5 border',
                    inverted
                      ? 'border-cream/30 text-cream hover:bg-cream hover:text-ink'
                      : 'border-ink/80 text-ink hover:bg-ink hover:text-cream',
                  )}>
                    {secondary.label}
                  </Link>
                )}
              </div>
            )}
          </div>
          {meta && meta.length > 0 && (
            <aside className="lg:col-span-4">
              <ul className={cn(
                'border-t pt-6 space-y-5',
                inverted ? 'border-cream/15' : 'border-line',
              )}>
                {meta.map((m) => (
                  <li key={m.label} className="flex items-baseline justify-between gap-4">
                    <span className={cn(
                      'text-[10.5px] tracking-[0.22em] uppercase',
                      inverted ? 'text-gold/80' : 'text-sage',
                    )}>
                      {m.label}
                    </span>
                    <span className={cn(
                      'font-display text-[18px] text-right',
                      inverted ? 'text-cream' : 'text-ink',
                    )}>
                      {m.value}
                    </span>
                  </li>
                ))}
              </ul>
            </aside>
          )}
        </div>
      </div>
    </section>
  )
}
