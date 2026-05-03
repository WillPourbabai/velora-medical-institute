# Velora Medical Institute

A physician-directed, direct-pay telemedicine practice website for **Velora Medical Institute** —
focused on metabolic health, medical weight management, and bioidentical hormone therapy.

Built with **Next.js 15**, **React 19**, **Tailwind CSS**, and an editorial design system inspired
by premium clinical wellness brands.

## Stack

- **Framework**: Next.js 15 (App Router) + React 19
- **Styling**: Tailwind CSS 3 + custom design tokens (Velora palette)
- **Typography**: Fraunces (display) + Inter (body) via `next/font/google`
- **UI primitives**: shadcn/ui (Radix) where needed, plus custom components
- **Forms**: Native React state + native validation
- **Toasts**: Sonner

## Pages

```
/                       Home
/weight-management      Medical Weight Management service page
/hormone-therapy        Hormone Therapy (BHRT) service page
/programs               Structured programs comparison
/physicians             Physician profiles
/about                  About the practice
/faq                    Patient FAQ
/book                   3-step booking flow (?type=weight|hormone|combined)
/intake                 9-section patient intake & consent form
/contact                Contact form + practice information
/legal/privacy          Privacy policy
/legal/hipaa            HIPAA notice
/legal/terms            Terms of service
```

## API routes

```
POST /api/contact       Contact form submissions
POST /api/booking       Consultation booking requests
POST /api/intake        Patient intake submissions
```

All API routes currently log to the console. To wire email delivery, add **Resend** (already installed
as a dependency) or your CRM of choice and replace the `console.log` calls in `app/api/*/route.ts`.

## Design tokens

```
bone   #F4EFE6   — page background
cream  #FAF6EE   — surfaces
ink    #181F1B   — primary text + dark sections
sage   #54675A   — accent / brand
gold   #B89968   — secondary accent
line   #DCD4C5   — borders
```

Display font: **Fraunces**. Body font: **Inter**.

## Local development

```bash
npm install
npm run dev    # http://localhost:3000
```

Build:

```bash
npm run build
npm start
```

## Deployment

Designed to deploy to **Vercel** with no configuration. Push to a connected GitHub repo and
Vercel will detect the Next.js app automatically.

## License

© Velora Medical Institute. All rights reserved.
