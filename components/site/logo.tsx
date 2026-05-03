import Link from 'next/link'
import { cn } from '@/lib/utils'

interface LogoProps {
  className?: string
  variant?: 'ink' | 'cream'
  withTagline?: boolean
}

export function Logo({ className, variant = 'ink', withTagline = false }: LogoProps) {
  const color = variant === 'ink' ? 'text-ink' : 'text-cream'
  const accent = variant === 'ink' ? 'text-sage' : 'text-gold'
  return (
    <Link href="/" className={cn('flex items-baseline gap-2 group', className)} aria-label="Velora Medical Institute — Home">
      <span className={cn('font-display text-[22px] tracking-[-0.01em] leading-none', color)}>
        Velora
      </span>
      <span className={cn('font-display italic text-[14px] tracking-tight leading-none', accent)}>
        medical institute
      </span>
      {withTagline && (
        <span className={cn('hidden lg:inline-block ml-3 pl-3 border-l border-current/30 text-[11px] tracking-[0.18em] uppercase', color)}>
          Est. Care
        </span>
      )}
    </Link>
  )
}
