import Link from 'next/link'
import { cn } from '@/lib/utils'

interface LogoProps {
  className?: string
  variant?: 'ink' | 'cream'
  withTagline?: boolean
  size?: 'sm' | 'md' | 'lg'
}

export function Logo({
  className,
  variant = 'ink',
  withTagline = false,
  size = 'md',
}: LogoProps) {
  const isLight = variant === 'cream'
  const wordColor = isLight ? 'text-cream' : 'text-ink'
  const subColor = 'text-gold'

  const dims =
    size === 'sm'
      ? { mono: 22, word: 'text-[14px]', sub: 'text-[7.5px]' }
      : size === 'lg'
        ? { mono: 56, word: 'text-[34px]', sub: 'text-[12px]' }
        : { mono: 32, word: 'text-[18px]', sub: 'text-[9px]' }

  return (
    <Link
      href="/"
      className={cn('inline-flex items-center gap-3 group', className)}
      aria-label="Velora Medical Institute — Home"
    >
      <VeloraMark size={dims.mono} />
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            'font-display tracking-[0.28em] leading-none',
            dims.word,
            wordColor,
          )}
        >
          VELORA
        </span>
        <span
          className={cn(
            'font-sans tracking-[0.32em] leading-none mt-1.5 uppercase font-semibold',
            dims.sub,
            subColor,
          )}
        >
          Medical Institute
        </span>
      </span>
      {withTagline && (
        <span
          className={cn(
            'hidden lg:inline-block ml-3 pl-3 border-l border-current/30 text-[11px] tracking-[0.18em] uppercase',
            wordColor,
          )}
        >
          Est. Care
        </span>
      )}
    </Link>
  )
}

/**
 * Velora monogram — two leaves splaying outward from a central stem,
 * forming a botanical V. Gold strokes with optional teal fill.
 *
 * The original gold-only `className` prop is honored for backwards
 * compatibility; pass `monochrome` to render the mark in a single
 * `currentColor` (useful for tiny sizes / favicons).
 */
export function VeloraMark({
  size = 36,
  className,
  monochrome = false,
}: {
  size?: number
  className?: string
  monochrome?: boolean
}) {
  const gold = '#C9A064'
  const teal = '#0D7B7A'
  const stroke = monochrome ? 'currentColor' : gold
  const fill = monochrome ? 'none' : teal

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      {/* LEFT leaf */}
      <path
        d="M32 36
           C 22 32, 14 22, 14 12
           C 22 14, 30 22, 32 36 Z"
        fill={fill}
        stroke={stroke}
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      {/* LEFT leaf vein */}
      <path
        d="M16 14 L 31 35"
        stroke={stroke}
        strokeWidth="0.8"
        strokeLinecap="round"
        opacity="0.7"
      />

      {/* RIGHT leaf */}
      <path
        d="M32 36
           C 42 32, 50 22, 50 12
           C 42 14, 34 22, 32 36 Z"
        fill={fill}
        stroke={stroke}
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      {/* RIGHT leaf vein */}
      <path
        d="M48 14 L 33 35"
        stroke={stroke}
        strokeWidth="0.8"
        strokeLinecap="round"
        opacity="0.7"
      />

      {/* STEM coming down to a point — the V */}
      <path
        d="M32 35 L 32 54"
        stroke={stroke}
        strokeWidth="2.0"
        strokeLinecap="round"
      />
      {/* Tiny terminus */}
      <circle cx="32" cy="55" r="1" fill={stroke} />
    </svg>
  )
}
