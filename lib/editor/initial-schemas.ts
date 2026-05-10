import type { PageSchema } from './schema'
import { initialHomeSchema } from './initial-home'

/**
 * Map: route slug → default schema. Used as a fallback when no saved
 * page JSON exists yet, and as the seed for new routes.
 */
const SCHEMAS: Record<string, PageSchema> = {
  home: initialHomeSchema,

  /* ABOUT */
  about: {
    version: 1,
    blocks: [
      {
        id: 'about_hero',
        type: 'hero',
        props: {
          eyebrow: 'About Velora',
          heading: 'Built for the\nlong run.',
          body: 'Velora Medical Institute is a direct-pay telemedicine practice focused on weight management, hormone optimization, and longevity care — led by double board-certified physicians.',
          primaryText: 'Schedule Consultation',
          primaryHref: '/book',
          secondaryText: 'Meet Our Physicians',
          secondaryHref: '/physicians',
          image: '/photos/hero-telehealth.png',
          backgroundColor: '#F4EBD3',
        },
      },
      {
        id: 'about_approach',
        type: 'section',
        props: { backgroundColor: '#FDFAF1', paddingTop: '72px', paddingBottom: '72px' },
        children: [
          { id: 'about_approach_eyebrow', type: 'text', props: { text: 'OUR APPROACH', textAlign: 'center', fontSize: '11px', color: '#7C5436', fontWeight: '600' } },
          { id: 'about_approach_heading', type: 'heading', props: { text: 'Care designed around your physiology', level: 'h2', textAlign: 'center', fontSize: 'clamp(1.625rem, 3.4vw, 2.5rem)' } },
          { id: 'about_approach_body', type: 'text', props: { text: 'Every plan begins with a comprehensive physician evaluation — labs, history, goals. Treatment is refined visit by visit based on your real-world response.', textAlign: 'center', maxWidth: '40rem' } },
        ],
      },
      {
        id: 'about_pillars',
        type: 'featureGrid',
        props: { eyebrow: 'WHAT WE DO', heading: 'Three pillars, one care framework', backgroundColor: '#F4EBD3' },
        children: [
          { id: 'ap1', type: 'featureItem', props: { title: 'Weight Management', body: 'Physician-guided GLP-1 therapy, metabolic optimization, and ongoing care.' } },
          { id: 'ap2', type: 'featureItem', props: { title: 'Hormone Optimization', body: 'Bioidentical hormone therapy tuned to your labs and refined over time.' } },
          { id: 'ap3', type: 'featureItem', props: { title: 'Longevity & Prevention', body: 'A six-pillar framework for living well — cellular health to recovery.' } },
        ],
      },
      {
        id: 'about_cta',
        type: 'ctaPanel',
        props: {
          eyebrow: 'Begin Your Care',
          heading: 'Schedule a comprehensive evaluation.',
          body: '60-minute initial visit with a double board-certified physician. Personalized plan delivered in writing.',
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

  /* WEIGHT MANAGEMENT */
  'weight-management': {
    version: 1,
    blocks: [
      {
        id: 'wm_hero',
        type: 'hero',
        props: {
          eyebrow: 'Medical Weight Management',
          heading: 'Medical Weight Loss.\nReal Results. Lasting Change.',
          body: 'Physician-guided weight loss with GLP-1 medications and metabolic optimization to help you lose weight, improve health, and keep it off.',
          primaryText: 'Schedule Consultation',
          primaryHref: '/book?type=weight',
          secondaryText: 'Learn More',
          secondaryHref: '#whats-included',
          image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1600&q=80',
          backgroundColor: '#F4EBD3',
        },
      },
      {
        id: 'wm_pillars',
        type: 'featureGrid',
        props: { eyebrow: 'WHAT YOU GET', heading: 'A complete weight management framework', backgroundColor: '#FDFAF1' },
        children: [
          { id: 'wm_p1', type: 'featureItem', props: { title: 'Clinically Proven GLP-1 Medications', body: 'FDA-approved medication for safe, effective results.' } },
          { id: 'wm_p2', type: 'featureItem', props: { title: 'Metabolic Optimization', body: 'Improve metabolism, energy, and body composition.' } },
          { id: 'wm_p3', type: 'featureItem', props: { title: 'Physician-Guided Care', body: 'Direct supervision and ongoing monitoring at every step.' } },
        ],
      },
      {
        id: 'wm_stats',
        type: 'section',
        props: { backgroundColor: '#F4EBD3', paddingTop: '64px', paddingBottom: '64px' },
        children: [
          { id: 'wm_stats_eyebrow', type: 'text', props: { text: 'TYPICAL RESULTS', textAlign: 'center', fontSize: '11px', color: '#7C5436', fontWeight: '600' } },
          { id: 'wm_stats_heading', type: 'heading', props: { text: 'What patients commonly see', level: 'h2', textAlign: 'center', fontSize: 'clamp(1.625rem, 3.2vw, 2.25rem)' } },
          {
            id: 'wm_stats_grid',
            type: 'container',
            props: { display: 'grid', gridCols: '3', gap: '16px' },
            children: [
              { id: 'wm_s1', type: 'pillar', props: { icon: '15–25%', title: 'Average weight loss', body: 'Sustained over 12 months of physician-guided care.' } },
              { id: 'wm_s2', type: 'pillar', props: { icon: '4–8w', title: 'Time to first results', body: 'Most patients see meaningful change within two months.' } },
              { id: 'wm_s3', type: 'pillar', props: { icon: '∞', title: 'Long-term success', body: 'Ongoing supervision keeps the change in place.' } },
            ],
          },
        ],
      },
      {
        id: 'wm_cta',
        type: 'ctaPanel',
        props: {
          eyebrow: 'Are You a Candidate?',
          heading: 'Find out in a 60-minute physician visit.',
          body: 'BMI > 27 with a related condition, BMI > 30, or weight regain after dieting — book a consultation and we\'ll talk through it.',
          primaryText: 'Schedule Consultation',
          primaryHref: '/book?type=weight',
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
export const SCHEMA_DRIVEN_ROUTES = new Set<string>(['home', 'about', 'weight-management'])
