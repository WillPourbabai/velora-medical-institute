import type { PageSchema } from './schema'
import { initialHomeSchema } from './initial-home'

/**
 * Map: route slug → default schema. Used as a fallback when no saved
 * page JSON exists yet, and as the seed for new routes.
 */
const SCHEMAS: Record<string, PageSchema> = {
  home: initialHomeSchema,
  about: {
    version: 1,
    blocks: [
      {
        id: 'about_hero',
        type: 'hero',
        props: {
          eyebrow: 'About Velora',
          heading: 'Built for the\nlong run.',
          body: 'Velora Medical Institute is a direct-pay telemedicine practice focused on weight management, hormone optimization, and longevity care.',
          primaryText: 'Schedule Consultation',
          primaryHref: '/book',
          secondaryText: 'Meet Our Physicians',
          secondaryHref: '/physicians',
          image: '/photos/hero-telehealth.png',
          backgroundColor: '#F4EBD3',
        },
      },
      {
        id: 'about_intro',
        type: 'section',
        props: { backgroundColor: '#FDFAF1', paddingTop: '64px', paddingBottom: '64px' },
        children: [
          {
            id: 'about_intro_eyebrow',
            type: 'text',
            props: { text: 'OUR APPROACH', textAlign: 'center', fontSize: '11px' },
          },
          {
            id: 'about_intro_heading',
            type: 'heading',
            props: {
              text: 'Care designed around your physiology',
              level: 'h2',
              textAlign: 'center',
              fontSize: 'clamp(1.625rem, 3.4vw, 2.5rem)',
            },
          },
          {
            id: 'about_intro_body',
            type: 'text',
            props: {
              text: 'Every plan begins with a comprehensive physician evaluation. Treatment is refined visit by visit based on your labs and your response.',
              textAlign: 'center',
              maxWidth: '40rem',
            },
          },
        ],
      },
      {
        id: 'about_cta',
        type: 'ctaPanel',
        props: {
          eyebrow: 'Begin Your Care',
          heading: 'Schedule a comprehensive evaluation.',
          body: '60-minute initial visit with a double board-certified physician.',
          primaryText: 'Schedule Consultation',
          primaryHref: '/book',
          secondaryText: 'View Programs',
          secondaryHref: '/programs',
          backgroundColor: '#7C5436',
          color: '#F9F1DC',
        },
      },
    ],
  },
}

export function getDefaultSchema(slug: string): PageSchema {
  if (SCHEMAS[slug]) return SCHEMAS[slug]
  // Generic blank starter for unknown slugs
  return {
    version: 1,
    blocks: [
      {
        id: `${slug}_hero`,
        type: 'hero',
        props: {
          eyebrow: 'New Page',
          heading: `${slug.charAt(0).toUpperCase()}${slug.slice(1)}`,
          body: 'Edit this hero by clicking it.',
          primaryText: 'Schedule Consultation',
          primaryHref: '/book',
          backgroundColor: '#F4EBD3',
        },
      },
    ],
  }
}

/** Map between URL pathname and storage slug */
export function pathnameToSlug(pathname: string): string {
  if (!pathname || pathname === '/') return 'home'
  return pathname.replace(/^\//, '').replace(/\/$/, '').replace(/\//g, '__')
}

/** All the routes the builder is wired to render schema-driven */
export const SCHEMA_DRIVEN_ROUTES = new Set<string>(['home', 'about'])
