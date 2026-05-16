import Link from 'next/link'
import Image from 'next/image'
import { cn } from '@/lib/utils'

interface LogoProps {
  className?: string
  variant?: 'ink' | 'cream'
  withTagline?: boolean
  size?: 'sm' | 'md' | 'lg'
}

/**
 * Site logo — renders the branded velora-logo.png lockup (monogram + wordmark).
 * The image already contains "VELORA · MEDICAL INSTITUTE" so no adjacent text needed.
 */
export function Logo({
  className,
  size = 'md',
}: LogoProps) {
  // Logo art is ~2:1 (wordmark + leaf mark). Keep width = 2 × height.
  const dims =
    size === 'sm'
      ? { h: 68, w: 136 }
      : size === 'lg'
        ? { h: 132, w: 264 }
        : { h: 84, w: 168 }

  return (
    <Link
      href="/"
      className={cn('inline-flex items-center group shrink-0', className)}
      aria-label="Velora Medical Institute — Home"
    >
      <Image
        src="/velora-logo.png"
        alt="Velora Medical Institute"
        width={dims.w * 2}
        height={dims.h * 2}
        priority
        style={{ height: dims.h, width: 'auto' }}
        className="object-contain"
      />
    </Link>
  )
}

/**
 * Velora monogram — two leaves splaying outward from a central stem,
 * forming a botanical V. Gold strokes with optional teal fill.
 * Kept for inline accents and small spots where only the mark is needed.
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
      <path
        d="M32 36 C 22 32, 14 22, 14 12 C 22 14, 30 22, 32 36 Z"
        fill={fill}
        stroke={stroke}
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M16 14 L 31 35" stroke={stroke} strokeWidth="0.8" strokeLinecap="round" opacity="0.7" />
      <path
        d="M32 36 C 42 32, 50 22, 50 12 C 42 14, 34 22, 32 36 Z"
        fill={fill}
        stroke={stroke}
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M48 14 L 33 35" stroke={stroke} strokeWidth="0.8" strokeLinecap="round" opacity="0.7" />
      <path d="M32 35 L 32 54" stroke={stroke} strokeWidth="2.0" strokeLinecap="round" />
      <circle cx="32" cy="55" r="1" fill={stroke} />
    </svg>
  )
}
