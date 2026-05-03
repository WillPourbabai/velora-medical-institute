import { cn } from '@/lib/utils'

export function Section({
  children,
  className,
  bg = 'bone',
  id,
}: {
  children: React.ReactNode
  className?: string
  bg?: 'bone' | 'cream' | 'paper' | 'ink' | 'sage-soft'
  id?: string
}) {
  const bgs: Record<string, string> = {
    bone: 'bg-bone',
    cream: 'bg-cream',
    paper: 'bg-paper',
    ink: 'bg-ink text-cream',
    'sage-soft': 'bg-sage-soft',
  }
  return (
    <section id={id} className={cn('py-20 md:py-28', bgs[bg], className)}>
      <div className="container-velora">{children}</div>
    </section>
  )
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = 'left',
  inverted = false,
  className,
}: {
  eyebrow?: string
  title: React.ReactNode
  intro?: React.ReactNode
  align?: 'left' | 'center'
  inverted?: boolean
  className?: string
}) {
  return (
    <div
      className={cn(
        'flex flex-col gap-5',
        align === 'center' && 'items-center text-center mx-auto',
        align === 'center' ? 'max-w-3xl' : 'max-w-3xl',
        className,
      )}
    >
      {eyebrow && (
        <span className={cn('eyebrow', inverted && 'text-gold')}>{eyebrow}</span>
      )}
      <h2
        className={cn(
          'font-display leading-[1.05] tracking-[-0.015em]',
          inverted ? 'text-cream' : 'text-ink',
        )}
        style={{ fontSize: 'clamp(1.75rem, 4.5vw, 3.25rem)' }}
      >
        {title}
      </h2>
      {intro && (
        <p
          className={cn(
            'text-[16.5px] leading-relaxed max-w-prose',
            inverted ? 'text-cream/75' : 'text-ink-soft',
          )}
        >
          {intro}
        </p>
      )}
    </div>
  )
}

export function NumberedTag({ n }: { n: number | string }) {
  return (
    <span className="inline-flex items-center justify-center font-display italic text-gold text-[13px] tracking-tight">
      <span className="font-mono-uppercase text-[10px] tracking-[0.18em] text-sage mr-2">No.</span>
      {String(n).padStart(2, '0')}
    </span>
  )
}
