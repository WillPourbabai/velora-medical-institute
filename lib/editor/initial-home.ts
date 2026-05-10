import type { PageSchema } from './schema'

/**
 * Default homepage schema — mirrors the rich hand-coded homepage
 * (hero, services, longevity, telehealth, care path, programs preview,
 * physicians composite, final CTA) so the public site looks identical
 * the moment the schema renderer takes over.
 */
export const initialHomeSchema: PageSchema = {
  version: 1,
  blocks: [
    /* ---------- 1. HERO (decomposed for fine-grained editing) ---------- */
    {
      id: 'home_hero',
      type: 'splitSection',
      props: {
        image: '/photos/hero-telehealth.png',
        imageAspect: '4 / 3',
        imageSide: 'right',
        backgroundColor: '#F4EBD3',
        paddingTop: '64px',
        paddingBottom: '72px',
      },
      children: [
        { id: 'home_hero_eyebrow', type: 'text', props: { text: 'Physician-Led. Personalized. Results-Driven.', fontSize: '11px', color: '#7C5436', fontWeight: '600' } },
        { id: 'home_hero_heading', type: 'heading', props: { text: 'Optimize Your Health.\nElevate Your Life.', level: 'h1', fontSize: 'clamp(2.125rem, 5vw, 4rem)' } },
        { id: 'home_hero_body', type: 'text', props: { text: 'Physician-led telemedicine care for weight management, hormone balance, and longevity. Personalized for you. Designed for lasting results.', maxWidth: '32rem' } },
        {
          id: 'home_hero_buttons',
          type: 'container',
          props: { display: 'flex', gap: '12px' },
          children: [
            { id: 'home_hero_btn_primary', type: 'button', props: { text: 'Schedule Consultation', href: '/book', variant: 'primary', icon: 'calendar' } },
            { id: 'home_hero_btn_secondary', type: 'button', props: { text: 'Explore Programs', href: '/programs', variant: 'outline', icon: 'arrow' } },
          ],
        },
      ],
    },

    /* ---------- 2. PHYSICIAN-LED CARE composite ---------- */
    {
      id: 'home_physician_led',
      type: 'section',
      props: { backgroundColor: '#F4EBD3', paddingTop: '48px', paddingBottom: '64px' },
      children: [
        {
          id: 'home_physician_led_image',
          type: 'image',
          props: {
            src: '/physician-led-care.png',
            alt: 'Drs. Tolebeyan and Amini — double board-certified in Internal Medicine and Obesity Medicine — flanking the Velora care framework.',
            aspectRatio: '3 / 2',
            objectFit: 'contain',
            borderRadius: '8px',
            maxWidth: '1180px',
          },
        },
      ],
    },

    /* ---------- 3. SERVICE AREAS — 3 cards ---------- */
    {
      id: 'home_services',
      type: 'serviceGrid',
      props: {
        eyebrow: 'Our Service Areas',
        heading: 'Personalized Medicine for Every Stage of Life',
        backgroundColor: '#FDFAF1',
      },
      children: [
        {
          id: 'home_services_card_weight',
          type: 'serviceCard',
          props: {
            image:
              'https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=1600&q=80',
            title: 'Weight Management',
            body: 'Physician-guided GLP-1 therapy and medical optimization programs to help you lose weight, improve metabolism, and sustain long-term results.',
            href: '/weight-management',
            ctaText: 'Learn More',
          },
        },
        {
          id: 'home_services_card_hormone',
          type: 'serviceCard',
          props: {
            image:
              'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1600&q=80',
            title: 'Hormone Optimization',
            body: 'Restore balance, improve energy, enhance mood, and support overall hormonal health through personalized hormone therapy.',
            href: '/hormone-therapy',
            ctaText: 'Learn More',
          },
        },
        {
          id: 'home_services_card_longevity',
          type: 'serviceCard',
          props: {
            image:
              'https://images.unsplash.com/photo-1502323777036-f29e3972d82f?auto=format&fit=crop&w=1600&q=80',
            title: 'Longevity & Preventive Medicine',
            body: 'Proactive, personalized strategies to optimize health, prevent disease, and support long-term vitality.',
            href: '/longevity',
            ctaText: 'Learn More',
          },
        },
      ],
    },

    /* ---------- 4. LONGEVITY — split (photo + 6-pillar grid) ---------- */
    {
      id: 'home_longevity',
      type: 'splitSection',
      props: {
        image:
          'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1600&q=80',
        imageAspect: '4 / 5',
        imageSide: 'left',
        backgroundColor: '#F4EBD3',
        paddingTop: '64px',
        paddingBottom: '72px',
      },
      children: [
        {
          id: 'home_longevity_eyebrow',
          type: 'text',
          props: {
            text: 'PHYSICIAN-GUIDED LONGEVITY CARE',
            fontSize: '11px',
            color: '#7C5436',
            fontWeight: '600',
          },
        },
        {
          id: 'home_longevity_heading',
          type: 'heading',
          props: {
            text: 'Six pillars. One framework for living well.',
            level: 'h2',
            fontSize: 'clamp(1.625rem, 3.2vw, 2.25rem)',
          },
        },
        {
          id: 'home_longevity_body',
          type: 'text',
          props: {
            text: 'A coordinated approach that connects every system — cellular health, hormones, recovery, and prevention — into one personalized longevity plan.',
            maxWidth: '32rem',
          },
        },
        {
          id: 'home_longevity_pillars',
          type: 'container',
          props: { display: 'grid', gridCols: '2', gap: '12px' },
          children: [
            { id: 'p1', type: 'pillar', props: { icon: '◇', title: 'Cellular Health', body: 'Mitochondrial function, oxidative stress, biomarkers of aging.' } },
            { id: 'p2', type: 'pillar', props: { icon: '♥', title: 'Hormone Optimization', body: 'Bioidentical replacement and continuous lab-driven adjustment.' } },
            { id: 'p3', type: 'pillar', props: { icon: '✦', title: 'Inflammation Control', body: 'Targeting chronic low-grade inflammation that drives disease.' } },
            { id: 'p4', type: 'pillar', props: { icon: '☾', title: 'Sleep & Stress', body: 'Recovery quality is the foundation everything else builds on.' } },
            { id: 'p5', type: 'pillar', props: { icon: '↗', title: 'Recovery & Performance', body: 'Strength, mobility, and the physiology of feeling capable.' } },
            { id: 'p6', type: 'pillar', props: { icon: '✚', title: 'Preventive Health', body: 'Catching what matters early, with lab work that goes deeper.' } },
          ],
        },
        {
          id: 'home_longevity_cta',
          type: 'button',
          props: { text: 'Explore Longevity Care', href: '/longevity', variant: 'outline', icon: 'arrow' },
        },
      ],
    },

    /* ---------- 5. TELEHEALTH EXPERIENCE — split (content + photo) ---------- */
    {
      id: 'home_telehealth',
      type: 'splitSection',
      props: {
        image:
          'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1600&q=80',
        imageAspect: '4 / 3',
        imageSide: 'right',
        backgroundColor: '#FDFAF1',
        paddingTop: '64px',
        paddingBottom: '72px',
      },
      children: [
        {
          id: 'home_telehealth_eyebrow',
          type: 'text',
          props: { text: "WHAT YOU'LL EXPERIENCE", fontSize: '11px', color: '#7C5436', fontWeight: '600' },
        },
        {
          id: 'home_telehealth_heading',
          type: 'heading',
          props: { text: 'A real consultation, not a chatbot.', level: 'h2', fontSize: 'clamp(1.625rem, 3.2vw, 2.25rem)' },
        },
        {
          id: 'home_telehealth_body',
          type: 'text',
          props: {
            text: 'Sit down at your laptop and meet your physician face-to-face. We walk through your history, your labs, and your goals — then build a written plan you can come back to between visits.',
            maxWidth: '32rem',
          },
        },
        {
          id: 'home_telehealth_features',
          type: 'container',
          props: { display: 'grid', gridCols: '2', gap: '14px' },
          children: [
            { id: 'tf1', type: 'pillar', props: { icon: '✓', title: 'Direct video visit', body: 'With a double board-certified physician.' } },
            { id: 'tf2', type: 'pillar', props: { icon: '◆', title: 'Comprehensive review', body: 'Of metabolic and hormonal labs.' } },
            { id: 'tf3', type: 'pillar', props: { icon: '✎', title: 'Written treatment plan', body: 'And clear next steps.' } },
            { id: 'tf4', type: 'pillar', props: { icon: '✉', title: 'Secure messaging', body: 'Between scheduled visits.' } },
          ],
        },
      ],
    },

    /* ---------- 6. CARE PATH — Step 1 + Step 2 + DIFFERENCE row ---------- */
    {
      id: 'home_carepath_intro',
      type: 'section',
      props: { backgroundColor: '#F4EBD3', paddingTop: '64px', paddingBottom: '24px' },
      children: [
        {
          id: 'home_carepath_eyebrow',
          type: 'text',
          props: { text: 'START YOUR JOURNEY', fontSize: '11px', color: '#7C5436', fontWeight: '600', textAlign: 'center' },
        },
        {
          id: 'home_carepath_heading',
          type: 'heading',
          props: { text: 'Personalized Care.\nGuided by Physicians.\nDesigned for You.', level: 'h2', textAlign: 'center', fontSize: 'clamp(1.875rem, 3.6vw, 2.75rem)' },
        },
      ],
    },
    {
      id: 'home_carepath_steps',
      type: 'section',
      props: { backgroundColor: '#F4EBD3', paddingTop: '24px', paddingBottom: '64px' },
      children: [
        {
          id: 'home_carepath_steps_grid',
          type: 'container',
          props: { display: 'grid', gridCols: '2', gap: '32px' },
          children: [
            { id: 'cs1', type: 'careStep', props: { number: '01', title: 'Initial Consultation (Tele Visit)', body: 'Comprehensive evaluation, lab review, and personalized plan tailored to your goals.' } },
            { id: 'cs2', type: 'careStep', props: { number: '02', title: 'Choose Your Care Path', body: 'After your consultation, we recommend the best path forward — individual visits or a structured program.' } },
            { id: 'cs3', type: 'careStep', props: { number: '03', title: 'Ongoing Adjustment', body: 'Visits refine the plan based on labs and your real-world response.' } },
            { id: 'cs4', type: 'careStep', props: { number: '04', title: 'Long-Term Support', body: 'Secure messaging and regular checkpoints — care that compounds.' } },
          ],
        },
      ],
    },

    /* ---------- 7. PROGRAMS PREVIEW — 3 mini program cards ---------- */
    {
      id: 'home_programs_preview',
      type: 'section',
      props: { backgroundColor: '#FDFAF1', paddingTop: '72px', paddingBottom: '72px' },
      children: [
        {
          id: 'home_programs_eyebrow',
          type: 'text',
          props: { text: 'STRUCTURED PROGRAMS · LASTING RESULTS', fontSize: '11px', color: '#7C5436', fontWeight: '600' },
        },
        {
          id: 'home_programs_heading',
          type: 'heading',
          props: { text: 'Physician-Guided Programs Designed for Long-Term Results', level: 'h2', fontSize: 'clamp(1.75rem, 3.4vw, 2.5rem)' },
        },
        {
          id: 'home_programs_grid',
          type: 'container',
          props: { display: 'grid', gridCols: '3', gap: '20px' },
          children: [
            { id: 'mp1', type: 'miniProgram', props: { icon: '✚', title: 'Medical Weight Management', price: '$145', cadence: '16 visits over 12 months', href: '/weight-management' } },
            { id: 'mp2', type: 'miniProgram', props: { icon: '✦', title: 'Metabolic & Hormone Optimization', price: '$180', cadence: '5 visit program (40 min)', href: '/hormone-therapy', featured: true } },
            { id: 'mp3', type: 'miniProgram', props: { icon: '◆', title: 'Signature Longevity Program', price: '$220', cadence: '5 visit program (60 min)', href: '/longevity' } },
          ],
        },
      ],
    },

    /* ---------- 8. FINAL CTA ---------- */
    {
      id: 'home_cta',
      type: 'ctaPanel',
      props: {
        eyebrow: 'Begin Your Care',
        heading: 'Begin physician-guided care today.',
        body: '60-minute initial consultation with a double board-certified physician. Personalized plan delivered in writing.',
        primaryText: 'Schedule Consultation',
        primaryHref: '/book',
        secondaryText: 'View Programs',
        secondaryHref: '/programs',
        backgroundColor: '#7C5436',
        color: '#F9F1DC',
      },
    },
  ],
}
