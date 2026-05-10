/**
 * Block registry.
 *
 * Each block type registers:
 *   - render(props, children) — React renderer
 *   - defaultProps — used by the inserter when adding a new block
 *   - schema — property-editor definitions (drives the Inspector)
 *   - label — display name in the inserter / inspector
 *   - acceptsChildren — whether this block can hold child blocks (containers)
 *
 * Adding a new block type = adding one entry here.
 */

import type { Block } from './schema'
import type { ReactNode, CSSProperties } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, ArrowRight } from 'lucide-react'

/* ---------- inspector property schema ---------- */

export type PropertyKind =
  | 'text'        // single-line input
  | 'textarea'    // multi-line input
  | 'number'      // numeric input
  | 'color'       // color picker + text
  | 'spacing'     // T R B L compact input
  | 'select'      // dropdown
  | 'image'       // image src + upload + alt
  | 'link'        // url + label
  | 'switch'      // boolean
  | 'cssLength'   // single CSS length string

export interface PropertyField {
  key: string
  label: string
  kind: PropertyKind
  /** For select kind */
  options?: { value: string; label: string }[]
  /** Optional placeholder hint */
  placeholder?: string
  /** Group label — fields with same group render together */
  group?: string
}

export interface BlockDefinition {
  type: string
  label: string
  /** Category in the inserter (Sections, Layout, Content, Media) */
  category: 'Sections' | 'Layout' | 'Content' | 'Media'
  acceptsChildren?: boolean
  defaultProps: Record<string, unknown>
  /** Property fields shown in the inspector */
  schema: PropertyField[]
  render: (
    props: Record<string, unknown>,
    children: ReactNode | undefined,
    context: { isEditing: boolean },
  ) => ReactNode
}

/* ---------- internal registry ---------- */

const registry = new Map<string, BlockDefinition>()

export function registerBlock(def: BlockDefinition) {
  registry.set(def.type, def)
}

export function getBlockDefinition(type: string): BlockDefinition | undefined {
  return registry.get(type)
}

export function listBlockDefinitions(): BlockDefinition[] {
  return [...registry.values()]
}

export function newBlockOfType(type: string, idGen: () => string): Block | null {
  const def = registry.get(type)
  if (!def) return null
  return {
    id: idGen(),
    type,
    props: { ...def.defaultProps },
    children: def.acceptsChildren ? [] : undefined,
  }
}

/* ---------- shared style helpers used by multiple blocks ---------- */

function styleProps(p: Record<string, unknown>): CSSProperties {
  const css: CSSProperties = {}
  if (p.backgroundColor) css.backgroundColor = String(p.backgroundColor)
  if (p.color) css.color = String(p.color)
  if (p.fontSize) css.fontSize = String(p.fontSize)
  if (p.fontWeight) css.fontWeight = String(p.fontWeight)
  if (p.borderRadius) css.borderRadius = String(p.borderRadius)
  if (p.padding) css.padding = String(p.padding)
  if (p.paddingTop) css.paddingTop = String(p.paddingTop)
  if (p.paddingRight) css.paddingRight = String(p.paddingRight)
  if (p.paddingBottom) css.paddingBottom = String(p.paddingBottom)
  if (p.paddingLeft) css.paddingLeft = String(p.paddingLeft)
  if (p.margin) css.margin = String(p.margin)
  if (p.marginTop) css.marginTop = String(p.marginTop)
  if (p.marginRight) css.marginRight = String(p.marginRight)
  if (p.marginBottom) css.marginBottom = String(p.marginBottom)
  if (p.marginLeft) css.marginLeft = String(p.marginLeft)
  if (p.textAlign) css.textAlign = p.textAlign as CSSProperties['textAlign']
  if (p.width) css.width = String(p.width)
  if (p.height) css.height = String(p.height)
  if (p.maxWidth) css.maxWidth = String(p.maxWidth)
  return css
}

/* ----------------------------------------------------------------------
   Block definitions
   ---------------------------------------------------------------------- */

/* SECTION — wrapper element, full-width, configurable bg + padding */
registerBlock({
  type: 'section',
  label: 'Section',
  category: 'Sections',
  acceptsChildren: true,
  defaultProps: {
    backgroundColor: '#F4EBD3',
    paddingTop: '64px',
    paddingBottom: '64px',
  },
  schema: [
    { key: 'backgroundColor', label: 'Background', kind: 'color', group: 'Style' },
    { key: 'paddingTop', label: 'Padding top', kind: 'cssLength', group: 'Spacing' },
    { key: 'paddingBottom', label: 'Padding bottom', kind: 'cssLength', group: 'Spacing' },
    { key: 'borderRadius', label: 'Border radius', kind: 'cssLength', group: 'Style' },
  ],
  render: (props, children) => (
    <section style={styleProps(props)} className="relative">
      <div className="container-velora">{children}</div>
    </section>
  ),
})

/* CONTAINER — flex/grid wrapper for children (used inside sections for splits) */
registerBlock({
  type: 'container',
  label: 'Container',
  category: 'Layout',
  acceptsChildren: true,
  defaultProps: {
    display: 'block',
    gridCols: '3',
    maxWidth: '',
    paddingTop: '',
    paddingBottom: '',
  },
  schema: [
    {
      key: 'display',
      label: 'Layout',
      kind: 'select',
      group: 'Layout',
      options: [
        { value: 'block', label: 'Stack (vertical)' },
        { value: 'flex', label: 'Flex (row)' },
        { value: 'grid', label: 'Grid' },
      ],
    },
    {
      key: 'gridCols',
      label: 'Columns (grid)',
      kind: 'select',
      group: 'Layout',
      options: ['1', '2', '3', '4'].map((v) => ({ value: v, label: `${v} columns` })),
    },
    { key: 'gap', label: 'Gap', kind: 'cssLength', group: 'Layout' },
    { key: 'textAlign', label: 'Text align', kind: 'select', group: 'Layout',
      options: [
        { value: '', label: '— default —' },
        { value: 'left', label: 'Left' },
        { value: 'center', label: 'Center' },
        { value: 'right', label: 'Right' },
      ],
    },
    { key: 'maxWidth', label: 'Max width', kind: 'cssLength', group: 'Layout' },
    { key: 'backgroundColor', label: 'Background', kind: 'color', group: 'Style' },
    { key: 'borderRadius', label: 'Border radius', kind: 'cssLength', group: 'Style' },
    { key: 'paddingTop', label: 'Padding top', kind: 'cssLength', group: 'Spacing' },
    { key: 'paddingRight', label: 'Padding right', kind: 'cssLength', group: 'Spacing' },
    { key: 'paddingBottom', label: 'Padding bottom', kind: 'cssLength', group: 'Spacing' },
    { key: 'paddingLeft', label: 'Padding left', kind: 'cssLength', group: 'Spacing' },
  ],
  render: (p, children) => {
    const css: CSSProperties = styleProps(p)
    const cols = String(p.gridCols ?? '3')
    if (p.display === 'flex') {
      css.display = 'flex'
      css.flexWrap = 'wrap'
      css.gap = String(p.gap ?? '24px')
      css.alignItems = 'center'
    } else if (p.display === 'grid') {
      css.display = 'grid'
      css.gridTemplateColumns = `repeat(${cols}, minmax(0, 1fr))`
      css.gap = String(p.gap ?? '24px')
    }
    if (p.maxWidth) {
      css.marginLeft = 'auto'
      css.marginRight = 'auto'
    }
    return <div style={css}>{children}</div>
  },
})

/* SPLIT SECTION — two columns, photo + content (or content + photo) */
registerBlock({
  type: 'splitSection',
  label: 'Split Section (image + content)',
  category: 'Sections',
  acceptsChildren: true,
  defaultProps: {
    image: '/photos/hero-telehealth.png',
    imageAspect: '4 / 5',
    imageSide: 'right',
    backgroundColor: '#F4EBD3',
    paddingTop: '64px',
    paddingBottom: '64px',
  },
  schema: [
    { key: 'image', label: 'Image', kind: 'image', group: 'Media' },
    { key: 'imageAspect', label: 'Image aspect', kind: 'select', group: 'Media',
      options: [
        { value: '4 / 5', label: '4:5 (portrait)' },
        { value: '4 / 3', label: '4:3' },
        { value: '1 / 1', label: '1:1 (square)' },
        { value: '3 / 2', label: '3:2' },
      ],
    },
    { key: 'imageSide', label: 'Image side', kind: 'select', group: 'Layout',
      options: [
        { value: 'right', label: 'Right' },
        { value: 'left', label: 'Left' },
      ],
    },
    { key: 'backgroundColor', label: 'Background', kind: 'color', group: 'Style' },
    { key: 'paddingTop', label: 'Padding top', kind: 'cssLength', group: 'Spacing' },
    { key: 'paddingBottom', label: 'Padding bottom', kind: 'cssLength', group: 'Spacing' },
  ],
  render: (p, children) => {
    const imageOnRight = (p.imageSide ?? 'right') === 'right'
    const aspect = String(p.imageAspect ?? '4 / 5')
    return (
      <section style={{ backgroundColor: String(p.backgroundColor ?? '#F4EBD3'), paddingTop: String(p.paddingTop ?? '64px'), paddingBottom: String(p.paddingBottom ?? '64px') }}>
        <div className="container-velora">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            {imageOnRight ? <div className="order-2 lg:order-1">{children}</div> : null}
            {p.image ? (
              <div
                className={imageOnRight ? 'order-1 lg:order-2' : ''}
              >
                <div
                  className="relative overflow-hidden rounded-md bg-line/30"
                  style={{ aspectRatio: aspect }}
                >
                  <Image
                    src={String(p.image)}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </div>
            ) : null}
            {!imageOnRight ? <div>{children}</div> : null}
          </div>
        </div>
      </section>
    )
  },
})

/* PILLAR — small icon-style card used in pillar grids */
registerBlock({
  type: 'pillar',
  label: 'Pillar',
  category: 'Content',
  defaultProps: {
    icon: '◆',
    title: 'Pillar title',
    body: 'A short, specific description of this pillar.',
  },
  schema: [
    { key: 'icon', label: 'Icon glyph', kind: 'text', group: 'Content', placeholder: '◆ or emoji' },
    { key: 'title', label: 'Title', kind: 'text', group: 'Content' },
    { key: 'body', label: 'Body', kind: 'textarea', group: 'Content' },
  ],
  render: (p) => (
    <div className="bg-paper border border-line/60 rounded-md p-5">
      <div className="flex items-center gap-3">
        <span className="size-9 rounded-full bg-bone border border-brown/30 text-brown flex items-center justify-center text-[14px] font-semibold">
          {String(p.icon ?? '◆')}
        </span>
        <h3 className="font-display text-[16px] text-ink leading-tight">{String(p.title ?? '')}</h3>
      </div>
      <p className="mt-3 text-[13px] text-ink-soft leading-[1.55]">{String(p.body ?? '')}</p>
    </div>
  ),
})

/* MINI PROGRAM CARD — for the home page Programs preview */
registerBlock({
  type: 'miniProgram',
  label: 'Mini Program',
  category: 'Content',
  defaultProps: {
    icon: '✦',
    title: 'Program Name',
    price: '$145',
    cadence: '12 visits over 12 months',
    href: '/programs',
    featured: false,
  },
  schema: [
    { key: 'icon', label: 'Icon glyph', kind: 'text', group: 'Content' },
    { key: 'title', label: 'Title', kind: 'text', group: 'Content' },
    { key: 'price', label: 'Price', kind: 'text', group: 'Content' },
    { key: 'cadence', label: 'Cadence', kind: 'text', group: 'Content' },
    { key: 'href', label: 'Link', kind: 'text', group: 'CTA' },
    { key: 'featured', label: 'Recommended badge', kind: 'switch', group: 'Style' },
  ],
  render: (p) => (
    <Link
      href={String(p.href ?? '/programs')}
      className={[
        'group relative flex flex-col p-6 lg:p-7 rounded-md transition-all',
        p.featured
          ? 'bg-bone border-2 border-brown shadow-[0_16px_40px_-20px_rgba(124,84,54,0.45)]'
          : 'bg-bone border border-line/60 hover:border-brown/60',
      ].join(' ')}
    >
      {p.featured ? (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brown text-cream px-3 py-1 text-[9px] tracking-[0.28em] uppercase font-semibold rounded-md whitespace-nowrap">
          Recommended
        </span>
      ) : null}
      <span className="size-10 rounded-full bg-paper border border-brown/30 text-brown flex items-center justify-center font-semibold">
        {String(p.icon ?? '✦')}
      </span>
      <h3 className="mt-5 font-display text-[18px] leading-tight text-ink">{String(p.title ?? '')}</h3>
      <div className="mt-4 flex items-baseline gap-1">
        <span className="font-display text-[34px] leading-none text-ink">{String(p.price ?? '')}</span>
        <span className="text-[12px] text-ink-soft italic">/ visit</span>
      </div>
      <p className="mt-1.5 text-[10px] tracking-[0.22em] uppercase text-brown font-semibold">{String(p.cadence ?? '')}</p>
      <span className="mt-5 inline-flex items-center gap-1.5 text-brown group-hover:text-brown-deep text-[11px] tracking-[0.22em] uppercase font-semibold">
        Learn More <ArrowRight className="size-3.5" />
      </span>
    </Link>
  ),
})

/* CARE STEP — numbered step with title + body */
registerBlock({
  type: 'careStep',
  label: 'Care Step',
  category: 'Content',
  defaultProps: {
    number: '01',
    title: 'Step title',
    body: 'A brief description of what happens at this step.',
  },
  schema: [
    { key: 'number', label: 'Step number', kind: 'text', group: 'Content' },
    { key: 'title', label: 'Title', kind: 'text', group: 'Content' },
    { key: 'body', label: 'Body', kind: 'textarea', group: 'Content' },
  ],
  render: (p) => (
    <div className="flex items-start gap-4">
      <span className="font-display italic text-brown text-[24px] leading-none w-10 shrink-0">
        {String(p.number ?? '01')}
      </span>
      <div>
        <p className="text-[15px] text-ink font-semibold leading-tight">{String(p.title ?? '')}</p>
        <p className="mt-1 text-[13.5px] text-ink-soft leading-[1.55]">{String(p.body ?? '')}</p>
      </div>
    </div>
  ),
})

/* HEADING */
registerBlock({
  type: 'heading',
  label: 'Heading',
  category: 'Content',
  defaultProps: {
    text: 'Section heading',
    level: 'h2',
    fontSize: 'clamp(1.625rem, 3.4vw, 2.5rem)',
    fontWeight: '400',
    color: '',
    textAlign: '',
  },
  schema: [
    { key: 'text', label: 'Text', kind: 'textarea', group: 'Content' },
    {
      key: 'level',
      label: 'Level',
      kind: 'select',
      group: 'Content',
      options: ['h1', 'h2', 'h3', 'h4'].map((v) => ({ value: v, label: v.toUpperCase() })),
    },
    { key: 'fontSize', label: 'Font size', kind: 'cssLength', group: 'Type' },
    { key: 'fontWeight', label: 'Font weight', kind: 'text', group: 'Type', placeholder: '400' },
    { key: 'color', label: 'Color', kind: 'color', group: 'Type' },
    { key: 'textAlign', label: 'Align', kind: 'select', group: 'Type',
      options: [
        { value: '', label: '— default —' },
        { value: 'left', label: 'Left' },
        { value: 'center', label: 'Center' },
        { value: 'right', label: 'Right' },
      ],
    },
  ],
  render: (p) => {
    const level = (typeof p.level === 'string' ? p.level : 'h2') as 'h1' | 'h2' | 'h3' | 'h4'
    const Tag: 'h1' | 'h2' | 'h3' | 'h4' = ['h1', 'h2', 'h3', 'h4'].includes(level) ? level : 'h2'
    return (
      <Tag
        className="font-display leading-[1.05] tracking-[-0.018em]"
        style={styleProps(p)}
      >
        {String(p.text ?? '')}
      </Tag>
    )
  },
})

/* TEXT (paragraph) */
registerBlock({
  type: 'text',
  label: 'Text',
  category: 'Content',
  defaultProps: {
    text: 'A short paragraph of body text.',
    fontSize: '15px',
    color: '',
    textAlign: '',
    maxWidth: '',
  },
  schema: [
    { key: 'text', label: 'Text', kind: 'textarea', group: 'Content' },
    { key: 'fontSize', label: 'Font size', kind: 'cssLength', group: 'Type' },
    { key: 'fontWeight', label: 'Weight', kind: 'text', group: 'Type' },
    { key: 'color', label: 'Color', kind: 'color', group: 'Type' },
    { key: 'textAlign', label: 'Align', kind: 'select', group: 'Type',
      options: [
        { value: '', label: '— default —' },
        { value: 'left', label: 'Left' },
        { value: 'center', label: 'Center' },
        { value: 'right', label: 'Right' },
      ],
    },
    { key: 'maxWidth', label: 'Max width', kind: 'cssLength', group: 'Layout' },
  ],
  render: (p) => (
    <p className="leading-[1.65] text-ink-soft" style={styleProps(p)}>
      {String(p.text ?? '')}
    </p>
  ),
})

/* BUTTON */
registerBlock({
  type: 'button',
  label: 'Button',
  category: 'Content',
  defaultProps: {
    text: 'Click me',
    href: '#',
    variant: 'primary',
    icon: 'none',
  },
  schema: [
    { key: 'text', label: 'Label', kind: 'text', group: 'Content' },
    { key: 'href', label: 'Link', kind: 'text', group: 'Content', placeholder: '/book' },
    { key: 'variant', label: 'Style', kind: 'select', group: 'Style',
      options: [
        { value: 'primary', label: 'Primary (brown filled)' },
        { value: 'outline', label: 'Outline' },
        { value: 'cream', label: 'Cream on dark' },
      ],
    },
    { key: 'icon', label: 'Icon', kind: 'select', group: 'Content',
      options: [
        { value: 'none', label: 'None' },
        { value: 'calendar', label: 'Calendar' },
        { value: 'arrow', label: 'Arrow' },
      ],
    },
  ],
  render: (p) => {
    const href = String(p.href ?? '#')
    const variant = String(p.variant ?? 'primary')
    const icon = String(p.icon ?? 'none')
    const base = 'inline-flex items-center gap-2 px-6 py-3.5 rounded-md text-[11px] tracking-[0.24em] uppercase font-semibold transition-colors'
    const cls =
      variant === 'outline'
        ? `${base} border border-ink text-ink hover:bg-ink hover:text-cream`
        : variant === 'cream'
          ? `${base} bg-cream text-brown hover:bg-paper`
          : `${base} bg-brown text-cream hover:bg-brown-deep`
    return (
      <Link href={href} className={cls}>
        {icon === 'calendar' && <Calendar className="size-4" strokeWidth={2} />}
        {String(p.text ?? '')}
        {icon === 'arrow' && <ArrowRight className="size-4" strokeWidth={2} />}
      </Link>
    )
  },
})

/* IMAGE */
registerBlock({
  type: 'image',
  label: 'Image',
  category: 'Media',
  defaultProps: {
    src: '/photos/hero-telehealth.png',
    alt: '',
    aspectRatio: '4 / 3',
    objectFit: 'cover',
    objectPosition: 'center',
    borderRadius: '8px',
    maxWidth: '',
  },
  schema: [
    { key: 'src', label: 'Image', kind: 'image', group: 'Source' },
    { key: 'alt', label: 'Alt text', kind: 'text', group: 'Source' },
    { key: 'aspectRatio', label: 'Aspect ratio', kind: 'select', group: 'Layout',
      options: [
        { value: '4 / 3', label: '4:3' },
        { value: '1 / 1', label: '1:1 (square)' },
        { value: '16 / 9', label: '16:9' },
        { value: '3 / 4', label: '3:4' },
        { value: '4 / 5', label: '4:5' },
      ],
    },
    { key: 'objectFit', label: 'Fit', kind: 'select', group: 'Layout',
      options: [
        { value: 'cover', label: 'Cover' },
        { value: 'contain', label: 'Contain' },
      ],
    },
    { key: 'objectPosition', label: 'Position', kind: 'text', group: 'Layout', placeholder: 'center' },
    { key: 'borderRadius', label: 'Border radius', kind: 'cssLength', group: 'Style' },
    { key: 'maxWidth', label: 'Max width', kind: 'cssLength', group: 'Layout' },
  ],
  render: (p) => {
    const src = String(p.src ?? '')
    if (!src) return <div className="bg-line/40 rounded-md" style={{ aspectRatio: String(p.aspectRatio ?? '4 / 3') }} />
    return (
      <div
        className="relative overflow-hidden bg-line/30"
        style={{
          aspectRatio: String(p.aspectRatio ?? '4 / 3'),
          borderRadius: String(p.borderRadius ?? ''),
          maxWidth: String(p.maxWidth ?? ''),
          marginLeft: p.maxWidth ? 'auto' : undefined,
          marginRight: p.maxWidth ? 'auto' : undefined,
        }}
      >
        <Image
          src={src}
          alt={String(p.alt ?? '')}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          style={{
            objectFit: (p.objectFit as 'cover' | 'contain') ?? 'cover',
            objectPosition: String(p.objectPosition ?? 'center'),
          }}
        />
      </div>
    )
  },
})

/* SPACER */
registerBlock({
  type: 'spacer',
  label: 'Spacer',
  category: 'Layout',
  defaultProps: { height: '32px' },
  schema: [{ key: 'height', label: 'Height', kind: 'cssLength', group: 'Layout' }],
  render: (p) => <div aria-hidden style={{ height: String(p.height ?? '32px') }} />,
})

/* CTA PANEL — brown rounded panel composite */
registerBlock({
  type: 'ctaPanel',
  label: 'CTA Panel',
  category: 'Sections',
  defaultProps: {
    eyebrow: 'Begin Your Care',
    heading: 'Physician-guided care, designed for you.',
    body: '60-minute initial consultation with a double board-certified physician.',
    primaryText: 'Schedule Consultation',
    primaryHref: '/book',
    secondaryText: 'View Programs',
    secondaryHref: '/programs',
    backgroundColor: '#7C5436',
    color: '#F9F1DC',
  },
  schema: [
    { key: 'eyebrow', label: 'Eyebrow', kind: 'text', group: 'Content' },
    { key: 'heading', label: 'Heading', kind: 'textarea', group: 'Content' },
    { key: 'body', label: 'Body', kind: 'textarea', group: 'Content' },
    { key: 'primaryText', label: 'Primary CTA', kind: 'text', group: 'CTAs' },
    { key: 'primaryHref', label: 'Primary link', kind: 'text', group: 'CTAs' },
    { key: 'secondaryText', label: 'Secondary CTA', kind: 'text', group: 'CTAs' },
    { key: 'secondaryHref', label: 'Secondary link', kind: 'text', group: 'CTAs' },
    { key: 'backgroundColor', label: 'Background', kind: 'color', group: 'Style' },
    { key: 'color', label: 'Text color', kind: 'color', group: 'Style' },
  ],
  render: (p) => (
    <section className="bg-bone">
      <div className="container-velora py-14">
        <div
          className="rounded-2xl px-8 md:px-14 py-12 md:py-14 text-center"
          style={styleProps(p)}
        >
          <p className="text-[10.5px] tracking-[0.32em] uppercase text-gold font-semibold">
            {String(p.eyebrow ?? '')}
          </p>
          <h2
            className="mt-4 font-display leading-[1.05] tracking-[-0.018em]"
            style={{ fontSize: 'clamp(1.625rem, 3.4vw, 2.5rem)' }}
          >
            {String(p.heading ?? '')}
          </h2>
          <p className="mt-5 text-[15px] leading-[1.65] max-w-lg mx-auto opacity-80">
            {String(p.body ?? '')}
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            {p.primaryText ? (
              <Link
                href={String(p.primaryHref ?? '#')}
                className="inline-flex items-center gap-2 bg-cream text-brown hover:bg-paper px-6 py-3.5 rounded-md text-[11px] tracking-[0.24em] uppercase font-semibold transition-colors"
              >
                <Calendar className="size-4" strokeWidth={2} />
                {String(p.primaryText)}
              </Link>
            ) : null}
            {p.secondaryText ? (
              <Link
                href={String(p.secondaryHref ?? '#')}
                className="inline-flex items-center gap-2 border border-cream/40 text-cream hover:bg-cream/10 px-6 py-3.5 rounded-md text-[11px] tracking-[0.24em] uppercase font-semibold transition-colors"
              >
                {String(p.secondaryText)}
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  ),
})

/* SERVICE CARD */
registerBlock({
  type: 'serviceCard',
  label: 'Service Card',
  category: 'Content',
  defaultProps: {
    image: '/photos/card-weight.png',
    title: 'Service Title',
    body: 'Short description of the service offered.',
    href: '#',
    ctaText: 'Learn More',
  },
  schema: [
    { key: 'image', label: 'Image', kind: 'image', group: 'Media' },
    { key: 'title', label: 'Title', kind: 'text', group: 'Content' },
    { key: 'body', label: 'Body', kind: 'textarea', group: 'Content' },
    { key: 'ctaText', label: 'CTA label', kind: 'text', group: 'CTA' },
    { key: 'href', label: 'CTA link', kind: 'text', group: 'CTA' },
  ],
  render: (p) => {
    const href = String(p.href ?? '#')
    return (
      <Link href={href} className="group flex flex-col">
        <div className="relative aspect-[4/3] rounded-md overflow-hidden bg-bone">
          {p.image ? (
            <Image
              src={String(p.image)}
              alt={String(p.title ?? '')}
              fill
              sizes="(min-width: 768px) 33vw, 100vw"
              className="object-cover"
            />
          ) : null}
        </div>
        <h3 className="mt-5 font-display text-[22px] md:text-[24px] leading-tight text-ink">
          {String(p.title ?? '')}
        </h3>
        <p className="mt-2.5 text-[14px] text-ink-soft leading-[1.6] flex-1">
          {String(p.body ?? '')}
        </p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-brown group-hover:text-brown-deep text-[11px] tracking-[0.24em] uppercase font-semibold">
          {String(p.ctaText ?? 'Learn More')} <ArrowRight className="size-3.5" />
        </span>
      </Link>
    )
  },
})

/* HERO — composite block: eyebrow + heading + body + CTAs + side photo */
registerBlock({
  type: 'hero',
  label: 'Hero',
  category: 'Sections',
  defaultProps: {
    eyebrow: 'Physician-Led. Personalized. Results-Driven.',
    heading: 'Optimize Your Health.\nElevate Your Life.',
    body: 'Physician-led telemedicine care for weight management, hormone balance, and longevity. Personalized for you. Designed for lasting results.',
    primaryText: 'Schedule Consultation',
    primaryHref: '/book',
    secondaryText: 'Explore Programs',
    secondaryHref: '/programs',
    image: '/photos/hero-telehealth.png',
    backgroundColor: '#F4EBD3',
  },
  schema: [
    { key: 'eyebrow', label: 'Eyebrow', kind: 'text', group: 'Content' },
    { key: 'heading', label: 'Heading', kind: 'textarea', group: 'Content' },
    { key: 'body', label: 'Body', kind: 'textarea', group: 'Content' },
    { key: 'primaryText', label: 'Primary CTA', kind: 'text', group: 'CTAs' },
    { key: 'primaryHref', label: 'Primary link', kind: 'text', group: 'CTAs' },
    { key: 'secondaryText', label: 'Secondary CTA', kind: 'text', group: 'CTAs' },
    { key: 'secondaryHref', label: 'Secondary link', kind: 'text', group: 'CTAs' },
    { key: 'image', label: 'Hero image', kind: 'image', group: 'Media' },
    { key: 'backgroundColor', label: 'Background', kind: 'color', group: 'Style' },
  ],
  render: (p) => {
    const heading = String(p.heading ?? '')
    return (
      <section className="relative overflow-hidden" style={{ backgroundColor: String(p.backgroundColor ?? '#F4EBD3') }}>
        {p.image ? (
          <div
            className="absolute inset-y-0 right-0 w-[60%] sm:w-[55%] lg:w-[55%]"
            style={{
              backgroundImage: `url(${String(p.image)})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
            aria-hidden
          />
        ) : null}
        {/* cream feather */}
        <div
          className="absolute inset-0 pointer-events-none hidden lg:block"
          style={{
            background: `linear-gradient(to right, ${String(p.backgroundColor ?? '#F4EBD3')} 0%, ${String(p.backgroundColor ?? '#F4EBD3')} 30%, ${String(p.backgroundColor ?? '#F4EBD3')}f5 42%, ${String(p.backgroundColor ?? '#F4EBD3')}d9 52%, ${String(p.backgroundColor ?? '#F4EBD3')}99 62%, ${String(p.backgroundColor ?? '#F4EBD3')}4d 75%, transparent 95%)`,
          }}
        />
        <div className="relative container-velora py-14 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="max-w-xl">
              <p className="text-[10.5px] sm:text-[11px] tracking-[0.32em] uppercase text-brown font-semibold">
                {String(p.eyebrow ?? '')}
              </p>
              <h1
                className="mt-5 font-display leading-[1.04] tracking-[-0.022em] text-ink"
                style={{ fontSize: 'clamp(2.125rem, 5vw, 4rem)', whiteSpace: 'pre-line' }}
              >
                {heading}
              </h1>
              <div className="mt-5 flex items-center gap-2">
                <span className="block w-12 h-px bg-gold" />
                <span className="size-1.5 rotate-45 bg-gold" aria-hidden />
              </div>
              <p className="mt-6 text-[15px] leading-[1.65] text-ink-soft max-w-md">
                {String(p.body ?? '')}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                {p.primaryText ? (
                  <Link
                    href={String(p.primaryHref ?? '#')}
                    className="inline-flex items-center gap-2.5 bg-brown text-cream hover:bg-brown-deep px-6 py-3.5 rounded-md text-[11px] tracking-[0.24em] uppercase font-semibold transition-colors"
                  >
                    <Calendar className="size-4" strokeWidth={2} />
                    {String(p.primaryText)}
                  </Link>
                ) : null}
                {p.secondaryText ? (
                  <Link
                    href={String(p.secondaryHref ?? '#')}
                    className="inline-flex items-center gap-2.5 border border-ink text-ink hover:bg-ink hover:text-cream px-6 py-3.5 rounded-md text-[11px] tracking-[0.24em] uppercase font-semibold transition-colors"
                  >
                    {String(p.secondaryText)}
                    <ArrowRight className="size-4" strokeWidth={2} />
                  </Link>
                ) : null}
              </div>
            </div>
            <div className="hidden lg:block" aria-hidden />
          </div>
        </div>
      </section>
    )
  },
})

/* TESTIMONIAL — quote + name */
registerBlock({
  type: 'testimonial',
  label: 'Testimonial',
  category: 'Content',
  defaultProps: {
    quote: '"My energy and focus came back within a few weeks. Worth every minute."',
    name: 'A. Verified Patient',
    role: '',
    backgroundColor: '#FDFAF1',
  },
  schema: [
    { key: 'quote', label: 'Quote', kind: 'textarea', group: 'Content' },
    { key: 'name', label: 'Attribution', kind: 'text', group: 'Content' },
    { key: 'role', label: 'Role / context', kind: 'text', group: 'Content' },
    { key: 'backgroundColor', label: 'Background', kind: 'color', group: 'Style' },
  ],
  render: (p) => (
    <section style={{ backgroundColor: String(p.backgroundColor ?? '#FDFAF1') }}>
      <div className="container-velora py-14 lg:py-18">
        <figure className="max-w-3xl mx-auto text-center">
          <blockquote className="font-display text-[22px] md:text-[28px] leading-[1.35] tracking-[-0.012em] text-ink italic">
            {String(p.quote ?? '')}
          </blockquote>
          <figcaption className="mt-6 text-[11px] tracking-[0.24em] uppercase text-brown font-semibold">
            {String(p.name ?? '')}
            {p.role ? <span className="text-ink-soft font-normal normal-case ml-2">— {String(p.role)}</span> : null}
          </figcaption>
        </figure>
      </div>
    </section>
  ),
})

/* FAQ ITEM — single Q+A (used inside an Faq Group container) */
registerBlock({
  type: 'faqItem',
  label: 'FAQ Item',
  category: 'Content',
  defaultProps: {
    question: 'Frequently asked question?',
    answer: 'A clear, helpful answer that addresses the question without filler.',
  },
  schema: [
    { key: 'question', label: 'Question', kind: 'text', group: 'Content' },
    { key: 'answer', label: 'Answer', kind: 'textarea', group: 'Content' },
  ],
  render: (p) => (
    <details className="border-t border-line/60 py-5 group">
      <summary className="cursor-pointer text-[15px] font-semibold text-ink list-none flex items-center justify-between gap-4">
        {String(p.question ?? '')}
        <span className="text-brown text-[18px] leading-none transition-transform group-open:rotate-45">+</span>
      </summary>
      <p className="mt-3 text-[14px] text-ink-soft leading-[1.65]">
        {String(p.answer ?? '')}
      </p>
    </details>
  ),
})

/* FAQ GROUP — section with heading + list of FAQ items */
registerBlock({
  type: 'faqGroup',
  label: 'FAQ Group',
  category: 'Sections',
  acceptsChildren: true,
  defaultProps: {
    eyebrow: 'Frequently Asked',
    heading: 'Common questions',
    backgroundColor: '#FDFAF1',
  },
  schema: [
    { key: 'eyebrow', label: 'Eyebrow', kind: 'text', group: 'Content' },
    { key: 'heading', label: 'Heading', kind: 'text', group: 'Content' },
    { key: 'backgroundColor', label: 'Background', kind: 'color', group: 'Style' },
  ],
  render: (p, children) => (
    <section style={{ backgroundColor: String(p.backgroundColor ?? '#FDFAF1') }}>
      <div className="container-velora py-14 lg:py-18">
        <div className="max-w-2xl mx-auto">
          <p className="text-[10.5px] tracking-[0.32em] uppercase text-brown font-semibold text-center">
            {String(p.eyebrow ?? '')}
          </p>
          <h2 className="mt-3 font-display text-[28px] md:text-[34px] leading-tight text-ink text-center">
            {String(p.heading ?? '')}
          </h2>
          <div className="mt-8">{children}</div>
        </div>
      </div>
    </section>
  ),
})

/* FEATURE GRID — section with heading + child feature cards (3 cols) */
registerBlock({
  type: 'featureGrid',
  label: 'Feature Grid',
  category: 'Sections',
  acceptsChildren: true,
  defaultProps: {
    eyebrow: 'What you get',
    heading: 'A complete framework',
    backgroundColor: '#F4EBD3',
  },
  schema: [
    { key: 'eyebrow', label: 'Eyebrow', kind: 'text', group: 'Content' },
    { key: 'heading', label: 'Heading', kind: 'text', group: 'Content' },
    { key: 'backgroundColor', label: 'Background', kind: 'color', group: 'Style' },
  ],
  render: (p, children) => (
    <section style={{ backgroundColor: String(p.backgroundColor ?? '#F4EBD3') }}>
      <div className="container-velora py-14 lg:py-18">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-[10.5px] tracking-[0.32em] uppercase text-brown font-semibold">
            {String(p.eyebrow ?? '')}
          </p>
          <h2 className="mt-3 font-display text-[28px] md:text-[34px] leading-tight text-ink">
            {String(p.heading ?? '')}
          </h2>
        </div>
        <div className="mt-10 grid md:grid-cols-3 gap-6">{children}</div>
      </div>
    </section>
  ),
})

/* FEATURE ITEM — single feature card */
registerBlock({
  type: 'featureItem',
  label: 'Feature',
  category: 'Content',
  defaultProps: {
    title: 'Feature title',
    body: 'A short description of the feature, one or two lines max.',
  },
  schema: [
    { key: 'title', label: 'Title', kind: 'text', group: 'Content' },
    { key: 'body', label: 'Body', kind: 'textarea', group: 'Content' },
  ],
  render: (p) => (
    <div className="bg-paper border border-line/60 rounded-md p-6">
      <h3 className="font-display text-[18px] leading-tight text-ink">{String(p.title ?? '')}</h3>
      <p className="mt-2 text-[13.5px] text-ink-soft leading-[1.55]">{String(p.body ?? '')}</p>
    </div>
  ),
})

/* GALLERY — section with image children in a 3-col grid */
registerBlock({
  type: 'gallery',
  label: 'Gallery',
  category: 'Sections',
  acceptsChildren: true,
  defaultProps: {
    heading: 'Gallery',
    backgroundColor: '#FDFAF1',
  },
  schema: [
    { key: 'heading', label: 'Heading', kind: 'text', group: 'Content' },
    { key: 'backgroundColor', label: 'Background', kind: 'color', group: 'Style' },
  ],
  render: (p, children) => (
    <section style={{ backgroundColor: String(p.backgroundColor ?? '#FDFAF1') }}>
      <div className="container-velora py-14 lg:py-18">
        {p.heading ? (
          <h2 className="font-display text-[24px] md:text-[28px] leading-tight text-ink text-center mb-8">
            {String(p.heading)}
          </h2>
        ) : null}
        <div className="grid md:grid-cols-3 gap-6">{children}</div>
      </div>
    </section>
  ),
})

/* FOOTER (block-style) — simple multi-column footer suitable for in-page placement */
registerBlock({
  type: 'footerBlock',
  label: 'Footer Block',
  category: 'Sections',
  defaultProps: {
    brand: 'Velora Medical Institute',
    tagline: 'Physician-directed telemedicine practice. Direct-pay.',
    copyright: '© Velora Medical Institute · All rights reserved',
    backgroundColor: '#1A140E',
    color: '#F9F1DC',
  },
  schema: [
    { key: 'brand', label: 'Brand', kind: 'text', group: 'Content' },
    { key: 'tagline', label: 'Tagline', kind: 'textarea', group: 'Content' },
    { key: 'copyright', label: 'Copyright', kind: 'text', group: 'Content' },
    { key: 'backgroundColor', label: 'Background', kind: 'color', group: 'Style' },
    { key: 'color', label: 'Text color', kind: 'color', group: 'Style' },
  ],
  render: (p) => (
    <footer style={{ backgroundColor: String(p.backgroundColor ?? '#1A140E'), color: String(p.color ?? '#F9F1DC') }}>
      <div className="container-velora py-12 text-center">
        <p className="font-display text-[20px] tracking-[0.32em] uppercase">
          {String(p.brand ?? '')}
        </p>
        <p className="mt-3 text-[13px] opacity-75 max-w-md mx-auto">
          {String(p.tagline ?? '')}
        </p>
        <p className="mt-8 text-[10.5px] tracking-[0.18em] uppercase opacity-50">
          {String(p.copyright ?? '')}
        </p>
      </div>
    </footer>
  ),
})

/* SERVICE GRID — three service cards in a row */
registerBlock({
  type: 'serviceGrid',
  label: 'Service Grid (3 cards)',
  category: 'Sections',
  acceptsChildren: true,
  defaultProps: {
    eyebrow: 'Our Service Areas',
    heading: 'Personalized Medicine for Every Stage of Life',
    backgroundColor: '#FDFAF1',
  },
  schema: [
    { key: 'eyebrow', label: 'Eyebrow', kind: 'text', group: 'Content' },
    { key: 'heading', label: 'Heading', kind: 'textarea', group: 'Content' },
    { key: 'backgroundColor', label: 'Background', kind: 'color', group: 'Style' },
  ],
  render: (p, children) => (
    <section style={{ backgroundColor: String(p.backgroundColor ?? '#FDFAF1') }}>
      <div className="container-velora py-16 lg:py-20">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-[10.5px] tracking-[0.32em] uppercase text-brown font-semibold">
            {String(p.eyebrow ?? '')}
          </p>
          <h2
            className="mt-4 font-display leading-[1.05] tracking-[-0.018em] text-ink"
            style={{ fontSize: 'clamp(1.625rem, 3.4vw, 2.5rem)' }}
          >
            {String(p.heading ?? '')}
          </h2>
          <div className="mt-5 mx-auto w-12 h-px bg-gold" />
        </div>
        <div className="mt-12 grid md:grid-cols-3 gap-8 lg:gap-10">{children}</div>
      </div>
    </section>
  ),
})
