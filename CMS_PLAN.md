# CMS Integration Plan — Velora Medical Institute

Audience: implementer agent. Target: working local CMS in ~90 min, no architectural decisions left open.

Repo state at time of writing:
- Next.js `15.5.9`, React `19.2.0`, Tailwind `3.4.17`, TypeScript `^5`
- App Router, RSC throughout
- 15 page files in `app/**` totaling ~2,669 lines (range 17 — `book/page.tsx` — to 582 — `app/page.tsx`)
- Branch: `final-redesign`. Dev server is running on port `3010`. **Do not restart it.**

---

## 1. Decision: **Sanity** (next-sanity v11 + Sanity Studio v4)

Rationale (3 bullets):

1. **Visual editing fidelity is dramatically better.** Sanity's Presentation tool plus `next-sanity/visual-editing` gives true click-on-the-rendered-element-to-open-the-field UX via Stega-encoded strings — works in RSC with zero client-side rewrite. TinaCMS's `useTina` requires every editable page to become a client component (or use a client-component split), which breaks our RSC-first design and forces refactors of Lucide-icon-heavy pages.
2. **Native Next.js 15 / App Router / RSC support.** `next-sanity` ships first-class App Router primitives (`<NextStudio>`, `defineLive`, `sanityFetch`, `<VisualEditing>`, `draftMode()` integration). Tina's App Router story still routes through a generated `client.queries.*` SDK and historically has had RSC/streaming hiccups; its primary docs path is still Pages Router.
3. **Asset handling is built in and free.** Sanity ships an image CDN with on-the-fly transforms and `next-sanity/image` (a `next/image` wrapper). Tina has no built-in media store — local mode writes to `public/`, cloud mode requires wiring S3/DigitalOcean Spaces (extra credentials, extra setup time). Sanity free tier covers us comfortably (3 users, 10k documents, 5GB assets, 1M API CDN requests/mo) and Studio runs locally without an external service for schema work; only persistence requires a free Sanity project (one-time `sanity init`, ~2 min).

**Trade-off accepted:** content lives in Sanity's hosted Content Lake, not in git. We mitigate with `sanity dataset export` snapshots committed to `content-snapshots/` (criterion 5). This is worth giving up for criterion 1 (visual editing was explicitly the user's primary requirement).

**Why not TinaCMS:**
- Tina visual editing requires `'use client'` on every editable page — incompatible with our RSC pages that import server-only patterns (Metadata exports, server-side data fetching).
- Tina's local mode is git-friendly but its admin UI is a sidebar over the page, not Sanity's Presentation split-view; the user said "click a heading on the live page and edit it inline" — both technically support this, but Sanity's overlays land on the actual rendered DOM via Stega without tinaField annotations on every prop.
- Adding Tina would also require refactoring `app/page.tsx` (582 lines, server component) into a client wrapper.

---

## 2. Exact package list

```bash
npm install \
  next-sanity@^11.4.1 \
  sanity@^4.10.0 \
  @sanity/vision@^4.10.0 \
  @sanity/image-url@^1.2.0 \
  @sanity/icons@^3.7.0 \
  @sanity/ui@^2.16.7 \
  @portabletext/react@^4.0.5 \
  styled-components@^6.1.20

npm install -D \
  @sanity/types@^4.10.0
```

Notes for implementer:
- All versions verified current as of 2026-05 via Context7. If `npm install` resolves a higher minor/patch within the same major, accept it.
- `styled-components` is a peer dep of `sanity` (Studio v4). With npm 7+ it auto-installs but we list explicitly so `package.json` records it.
- Do **not** install `@sanity/preview-kit` — `defineLive`/`sanityFetch` from `next-sanity/live` replaces it.
- Do **not** install `@sanity/client` separately — it's re-exported by `next-sanity`.

---

## 3. File-by-file implementation plan

### Files to create

| Path | Purpose |
|---|---|
| `sanity.config.ts` | Studio config: projectId, dataset, plugins (structureTool, presentationTool, visionTool), schemaTypes |
| `sanity.cli.ts` | CLI config for `npx sanity` commands (dataset import/export) |
| `sanity/env.ts` | Reads & validates `NEXT_PUBLIC_SANITY_PROJECT_ID`, `NEXT_PUBLIC_SANITY_DATASET`, `NEXT_PUBLIC_SANITY_API_VERSION`, `SANITY_API_READ_TOKEN` |
| `sanity/lib/client.ts` | Exports `sanityClient` (read-only, `useCdn: true`, stega off) |
| `sanity/lib/live.ts` | `defineLive({ client, serverToken, browserToken, strict: true })` → exports `sanityFetch` and `<SanityLive>` |
| `sanity/lib/image.ts` | `urlFor(source)` builder using `@sanity/image-url` |
| `sanity/lib/queries.ts` | All GROQ queries via `defineQuery()` (HOME_QUERY, PAGE_BY_SLUG_QUERY, SETTINGS_QUERY, FAQ_QUERY, PHYSICIANS_QUERY) |
| `sanity/schemaTypes/index.ts` | Aggregates and exports `schemaTypes: SchemaTypeDefinition[]` |
| `sanity/schemaTypes/documents/homePage.ts` | HomePage singleton schema |
| `sanity/schemaTypes/documents/page.ts` | GenericPage schema (slug-driven) |
| `sanity/schemaTypes/documents/physician.ts` | Physician profile schema |
| `sanity/schemaTypes/documents/faqItem.ts` | FAQ Q/A pair schema |
| `sanity/schemaTypes/documents/siteSettings.ts` | Site-wide nav/footer/legal singleton |
| `sanity/schemaTypes/objects/hero.ts` | Hero block (eyebrow, title, subtitle, primaryCta, secondaryCta, image) |
| `sanity/schemaTypes/objects/pageHero.ts` | Inner-page hero variant |
| `sanity/schemaTypes/objects/serviceCard.ts` | Service card (title, body, image, href) |
| `sanity/schemaTypes/objects/featureGrid.ts` | Feature grid section (eyebrow, heading, items[]) |
| `sanity/schemaTypes/objects/callout.ts` | Callout/CTA banner section |
| `sanity/schemaTypes/objects/numberedList.ts` | Numbered "process" list section |
| `sanity/schemaTypes/objects/imageWithText.ts` | Two-column image + rich text |
| `sanity/schemaTypes/objects/cta.ts` | Reusable button/link `{label, href, style: 'primary' \| 'secondary'}` |
| `sanity/schemaTypes/objects/seo.ts` | `{title, description, ogImage}` for `metadata` exports |
| `sanity/schemaTypes/objects/portableText.ts` | Portable Text array with custom marks (em→brown italic) |
| `sanity/lib/portable-text-components.tsx` | React components for `<PortableText>` rendering matching site typography |
| `app/studio/[[...tool]]/page.tsx` | Embedded Studio page (`<NextStudio config={config} />`) |
| `app/studio/[[...tool]]/layout.tsx` | Bypass site layout for Studio (no header/footer) |
| `app/api/draft-mode/enable/route.ts` | Presentation tool draft-mode entry (`draftMode().enable()`) |
| `app/api/draft-mode/disable/route.ts` | Disable draft mode |
| `components/cms/section-renderer.tsx` | Maps `section._type` → React component (delegates to existing components/site/*) |
| `components/cms/sanity-image.tsx` | Wraps `next-sanity/image` for the project's image needs |
| `components/cms/visual-editing-wrapper.tsx` | Client component that renders `<VisualEditing />` when `draftMode` enabled (called from root layout) |
| `scripts/seed-content.ts` | One-shot seeder: writes existing hand-coded copy to Sanity via `@sanity/client` |
| `scripts/export-snapshot.sh` | `sanity dataset export production content-snapshots/$(date +%Y-%m-%d).tar.gz` |
| `.env.local.example` | Template for the four env vars |
| `content-snapshots/.gitkeep` | Hold dataset snapshots in git |

### Files to modify

| Path | Change |
|---|---|
| `app/layout.tsx` | Import `<SanityLive>` and `<VisualEditingWrapper>`; render both inside `<body>` after `{children}` |
| `app/page.tsx` | Replace hardcoded copy with `await sanityFetch({query: HOME_QUERY})`; render via `<SectionRenderer sections={data.sections} />`; keep all wrapper JSX/Tailwind classes intact, only swap text/image sources |
| `app/about/page.tsx` | Same pattern: fetch generic page by slug `'about'`, render hero + sections |
| `app/weight-management/page.tsx` | Fetch page by slug `'weight-management'` |
| `app/hormone-therapy/page.tsx` | Fetch page by slug `'hormone-therapy'` |
| `app/longevity/page.tsx` | Fetch page by slug `'longevity'` |
| `app/programs/page.tsx` | Fetch page by slug `'programs'` |
| `app/individual-visits/page.tsx` | Fetch page by slug `'individual-visits'` |
| `app/physicians/page.tsx` | Fetch `physician` collection + page by slug `'physicians'` |
| `app/faq/page.tsx` | Fetch `faqItem[]` + page by slug `'faq'` |
| `app/contact/page.tsx` | Fetch page by slug `'contact'` (form stays hand-coded) |
| `app/legal/hipaa/page.tsx` | Fetch page by slug `'legal/hipaa'` |
| `app/legal/privacy/page.tsx` | Fetch page by slug `'legal/privacy'` |
| `app/legal/terms/page.tsx` | Fetch page by slug `'legal/terms'` |
| `next.config.mjs` | Add `images.remotePatterns` entry for `cdn.sanity.io` |
| `package.json` | Add scripts: `"studio:dev": "sanity dev"`, `"typegen": "sanity typegen generate"`, `"snapshot": "bash scripts/export-snapshot.sh"` |
| `.gitignore` | Add `.env.local`, `dist/`, `.sanity/` |
| `tsconfig.json` | Add `"sanity"` to `include` if not already covered by glob |

### Files to leave alone

- `app/book/page.tsx` (17 lines, just embeds external scheduler — content not editor-worthy)
- `app/intake/page.tsx` (31 lines, form gateway)
- `app/api/**` except the new draft-mode routes
- `components/ui/**` (shadcn primitives — untouched)
- `components/site/site-header.tsx` and `site-footer.tsx` — Phase 1 stays hardcoded; Phase 2 (out of scope) can move to `siteSettings`
- `app/sitemap.ts`, `app/robots.ts`, `app/not-found.tsx`
- `lib/**`, `hooks/**`, `styles/**`, `tailwind.config.ts`, `postcss.config.mjs`
- All Tailwind class strings in any modified page (we preserve design)

---

## 4. Schema definitions

All schemas use `defineType` / `defineField` from `sanity` for full TS inference.

### `siteSettings` (singleton, document)

```ts
defineType({
  name: 'siteSettings', type: 'document', title: 'Site Settings',
  fields: [
    defineField({name: 'siteName', type: 'string', initialValue: 'Velora Medical Institute', validation: r => r.required()}),
    defineField({name: 'defaultSeo', type: 'seo', validation: r => r.required()}),
    defineField({name: 'phone', type: 'string'}),
    defineField({name: 'email', type: 'string'}),
    defineField({name: 'address', type: 'text', rows: 3}),
  ],
})
```

### `homePage` (singleton, document)

```ts
defineType({
  name: 'homePage', type: 'document', title: 'Home Page',
  fields: [
    defineField({name: 'seo', type: 'seo', validation: r => r.required()}),
    defineField({name: 'hero', type: 'hero', validation: r => r.required()}),
    defineField({
      name: 'sections', type: 'array', title: 'Page Sections',
      of: [
        {type: 'serviceCardGrid'},   // wraps serviceCard[]
        {type: 'featureGrid'},
        {type: 'callout'},
        {type: 'numberedList'},
        {type: 'imageWithText'},
        {type: 'portableTextBlock'},
      ],
      options: {insertMenu: {views: [{name: 'list'}, {name: 'grid'}]}},
    }),
  ],
  preview: {prepare: () => ({title: 'Home Page'})},
})
```

### `page` (generic, document)

```ts
defineType({
  name: 'page', type: 'document', title: 'Page',
  fields: [
    defineField({name: 'title', type: 'string', validation: r => r.required()}),
    defineField({
      name: 'slug', type: 'slug',
      options: {source: 'title', maxLength: 96},
      validation: r => r.required(),
    }),
    defineField({name: 'seo', type: 'seo'}),
    defineField({name: 'pageHero', type: 'pageHero', validation: r => r.required()}),
    defineField({
      name: 'sections', type: 'array',
      of: [
        {type: 'featureGrid'}, {type: 'callout'}, {type: 'numberedList'},
        {type: 'imageWithText'}, {type: 'portableTextBlock'}, {type: 'serviceCardGrid'},
      ],
    }),
  ],
})
```

### `physician` (document)

```ts
defineType({
  name: 'physician', type: 'document',
  fields: [
    defineField({name: 'name', type: 'string', validation: r => r.required()}),
    defineField({name: 'credentials', type: 'string'}),       // e.g. "MD, FACP"
    defineField({name: 'title', type: 'string'}),             // role
    defineField({name: 'photo', type: 'image', options: {hotspot: true}, fields: [
      defineField({name: 'alt', type: 'string', validation: r => r.required()}),
    ]}),
    defineField({name: 'bio', type: 'portableText'}),
    defineField({name: 'order', type: 'number', initialValue: 0}),
  ],
  orderings: [{title: 'Display order', name: 'orderAsc', by: [{field: 'order', direction: 'asc'}]}],
})
```

### `faqItem` (document)

```ts
defineType({
  name: 'faqItem', type: 'document',
  fields: [
    defineField({name: 'question', type: 'string', validation: r => r.required()}),
    defineField({name: 'answer', type: 'portableText', validation: r => r.required()}),
    defineField({name: 'category', type: 'string', options: {
      list: ['General', 'Weight Management', 'Hormone Therapy', 'Billing', 'Telemedicine'],
    }}),
    defineField({name: 'order', type: 'number', initialValue: 0}),
  ],
})
```

### Object types

`hero`:
```ts
defineType({name: 'hero', type: 'object', fields: [
  defineField({name: 'eyebrow', type: 'string'}),
  defineField({name: 'title', type: 'string', validation: r => r.required()}),
  defineField({name: 'titleEmphasis', type: 'string', description: 'Optional italicized fragment of title'}),
  defineField({name: 'subtitle', type: 'text', rows: 3}),
  defineField({name: 'primaryCta', type: 'cta'}),
  defineField({name: 'secondaryCta', type: 'cta'}),
  defineField({name: 'image', type: 'image', options: {hotspot: true}, fields: [
    defineField({name: 'alt', type: 'string', validation: r => r.required()}),
  ]}),
]})
```

`pageHero`: same as `hero` minus background image complexity (uses bone bg).

`cta`:
```ts
defineType({name: 'cta', type: 'object', fields: [
  defineField({name: 'label', type: 'string', validation: r => r.required()}),
  defineField({name: 'href', type: 'string', validation: r => r.required()}),
  defineField({name: 'style', type: 'string', options: {list: ['primary', 'secondary']}, initialValue: 'primary'}),
]})
```

`serviceCard`:
```ts
defineType({name: 'serviceCard', type: 'object', fields: [
  defineField({name: 'title', type: 'string', validation: r => r.required()}),
  defineField({name: 'body', type: 'text', rows: 3, validation: r => r.required()}),
  defineField({name: 'href', type: 'string', validation: r => r.required()}),
  defineField({name: 'image', type: 'image', options: {hotspot: true}, fields: [
    defineField({name: 'alt', type: 'string', validation: r => r.required()}),
  ]}),
]})
```

`serviceCardGrid`:
```ts
defineType({name: 'serviceCardGrid', type: 'object', fields: [
  defineField({name: 'eyebrow', type: 'string'}),
  defineField({name: 'heading', type: 'string', validation: r => r.required()}),
  defineField({name: 'cards', type: 'array', of: [{type: 'serviceCard'}], validation: r => r.min(1).max(6)}),
]})
```

`featureGrid`:
```ts
defineType({name: 'featureGrid', type: 'object', fields: [
  defineField({name: 'eyebrow', type: 'string'}),
  defineField({name: 'heading', type: 'string', validation: r => r.required()}),
  defineField({name: 'subheading', type: 'text', rows: 2}),
  defineField({name: 'columns', type: 'number', initialValue: 3, options: {list: [2, 3, 4]}}),
  defineField({name: 'items', type: 'array', of: [{type: 'object', name: 'feature', fields: [
    defineField({name: 'icon', type: 'string', description: 'Lucide icon name (e.g. Stethoscope, ShieldCheck)'}),
    defineField({name: 'title', type: 'string', validation: r => r.required()}),
    defineField({name: 'body', type: 'text', rows: 3}),
  ]}]}),
]})
```

`callout`:
```ts
defineType({name: 'callout', type: 'object', fields: [
  defineField({name: 'eyebrow', type: 'string'}),
  defineField({name: 'heading', type: 'string', validation: r => r.required()}),
  defineField({name: 'body', type: 'text', rows: 4}),
  defineField({name: 'cta', type: 'cta'}),
  defineField({name: 'background', type: 'string', initialValue: 'bone',
    options: {list: ['bone', 'paper', 'ink', 'brown']}}),
]})
```

`numberedList`:
```ts
defineType({name: 'numberedList', type: 'object', fields: [
  defineField({name: 'eyebrow', type: 'string'}),
  defineField({name: 'heading', type: 'string', validation: r => r.required()}),
  defineField({name: 'items', type: 'array', of: [{type: 'object', name: 'step', fields: [
    defineField({name: 'title', type: 'string', validation: r => r.required()}),
    defineField({name: 'body', type: 'text', rows: 3}),
  ]}]}),
]})
```

`imageWithText`:
```ts
defineType({name: 'imageWithText', type: 'object', fields: [
  defineField({name: 'eyebrow', type: 'string'}),
  defineField({name: 'heading', type: 'string', validation: r => r.required()}),
  defineField({name: 'body', type: 'portableText'}),
  defineField({name: 'image', type: 'image', options: {hotspot: true}, fields: [
    defineField({name: 'alt', type: 'string', validation: r => r.required()}),
  ]}),
  defineField({name: 'imagePosition', type: 'string', initialValue: 'right', options: {list: ['left', 'right']}}),
  defineField({name: 'cta', type: 'cta'}),
]})
```

`portableTextBlock`:
```ts
defineType({name: 'portableTextBlock', type: 'object', fields: [
  defineField({name: 'eyebrow', type: 'string'}),
  defineField({name: 'heading', type: 'string'}),
  defineField({name: 'content', type: 'portableText', validation: r => r.required()}),
  defineField({name: 'maxWidth', type: 'string', initialValue: 'prose', options: {list: ['prose', 'wide', 'full']}}),
]})
```

`portableText`:
```ts
defineType({
  name: 'portableText', type: 'array',
  of: [
    {type: 'block', styles: [
      {title: 'Normal', value: 'normal'},
      {title: 'H2', value: 'h2'},
      {title: 'H3', value: 'h3'},
    ], marks: {
      decorators: [
        {title: 'Bold', value: 'strong'},
        {title: 'Brown emphasis', value: 'brownEm'},
      ],
      annotations: [{name: 'link', type: 'object', fields: [
        defineField({name: 'href', type: 'string', validation: r => r.required()}),
      ]}],
    }},
  ],
})
```

`seo`:
```ts
defineType({name: 'seo', type: 'object', fields: [
  defineField({name: 'title', type: 'string', validation: r => r.max(70)}),
  defineField({name: 'description', type: 'text', rows: 2, validation: r => r.max(160)}),
  defineField({name: 'ogImage', type: 'image'}),
]})
```

### Image asset
Use Sanity's built-in `image` type everywhere (with `hotspot: true` and a required `alt` field). Stored in Content Lake, served via `cdn.sanity.io`.

---

## 5. Content migration approach

**Hybrid: scaffolding script + manual hero polish.**

The current copy lives in 15 page files. Manual entry would take ~3 hours; a one-shot seeder is faster and safer.

Implementation:

1. Create `scripts/seed-content.ts` — a Node TS script run via `npx tsx scripts/seed-content.ts`.
2. The script imports `@sanity/client` with a write token (`SANITY_API_WRITE_TOKEN`, scope: Editor) loaded from `.env.local`.
3. The script defines TS literals representing every page's current content, structured to match the schemas above. The implementer extracts strings from the existing `app/**/page.tsx` files **mechanically** (the JSX is text-heavy and copy-paste-friendly). For each page:
   - Read the source file
   - Pull eyebrow/title/subtitle from `<PageHero ...>` props
   - For each `<Section>` block, build a matching schema object (`featureGrid`, `callout`, etc.)
4. Use `client.createOrReplace()` keyed by deterministic IDs:
   - `homePage` document → `_id: 'homePage'`
   - `siteSettings` → `_id: 'siteSettings'`
   - Each `page` → `_id: 'page-${slug}'`
   - Each `physician` → `_id: 'physician-${slug}'`
   - Each `faqItem` → `_id: 'faq-${slug}'`
5. Image assets: keep referencing the existing Unsplash URLs **as external string URLs in the `image.asset` field via `client.assets.upload('image', await fetch(url))`** so they end up in Sanity's CDN. The script downloads each Unsplash photo once, uploads it, and uses the returned `_ref` in the document. Two existing logo/hero photos in `public/` are uploaded the same way from disk.
6. After seeding, the implementer manually opens `/studio` and **only** verifies — does not re-enter content. Hero alt text and SEO descriptions are sanity-checked by hand (~5 min).

**Snapshot:** immediately after seeding, run `npm run snapshot` to commit `content-snapshots/initial-seed.tar.gz` so we have a git-tracked rollback point.

---

## 6. Page rendering refactor

Pattern for every page: server component fetches via `sanityFetch`, passes data into existing layout JSX. **All Tailwind classes, container divs, section structure, and Lucide icons stay exactly as they are** — only the text strings and image `src`s come from `data`.

### `app/page.tsx` skeleton (~10 lines core; full file ~50 lines after refactor)

```tsx
import {sanityFetch} from '@/sanity/lib/live'
import {HOME_QUERY} from '@/sanity/lib/queries'
import {HomeHero} from '@/components/site/home-hero'
import {SectionRenderer} from '@/components/cms/section-renderer'

export default async function HomePage() {
  const {data} = await sanityFetch({query: HOME_QUERY})
  if (!data) return null
  return (
    <>
      <HomeHero hero={data.hero} />
      <SectionRenderer sections={data.sections} documentId={data._id} documentType="homePage" />
    </>
  )
}
```

`HomeHero` is updated to accept `hero` prop with the schema shape; its internal markup stays. Same applies to `PageHero`.

### Generic page skeleton (`about`, `weight-management`, `hormone-therapy`, `longevity`, `programs`, `individual-visits`, `contact`, `legal/*`)

```tsx
import type {Metadata} from 'next'
import {sanityFetch} from '@/sanity/lib/live'
import {PAGE_BY_SLUG_QUERY} from '@/sanity/lib/queries'
import {PageHero} from '@/components/site/page-hero'
import {SectionRenderer} from '@/components/cms/section-renderer'
import {buildMetadata} from '@/sanity/lib/metadata'

const SLUG = 'about' // change per file

export async function generateMetadata(): Promise<Metadata> {
  const {data} = await sanityFetch({query: PAGE_BY_SLUG_QUERY, params: {slug: SLUG}, stega: false})
  return buildMetadata(data?.seo, data?.title)
}

export default async function AboutPage() {
  const {data} = await sanityFetch({query: PAGE_BY_SLUG_QUERY, params: {slug: SLUG}})
  if (!data) return null
  return (
    <>
      <PageHero hero={data.pageHero} documentId={data._id} />
      <SectionRenderer sections={data.sections} documentId={data._id} documentType="page" />
    </>
  )
}
```

### `app/physicians/page.tsx` skeleton

```tsx
import {sanityFetch} from '@/sanity/lib/live'
import {PHYSICIANS_PAGE_QUERY} from '@/sanity/lib/queries'
import {PageHero} from '@/components/site/page-hero'
import {SectionRenderer} from '@/components/cms/section-renderer'
import {PhysicianCard} from '@/components/site/physician-card' // existing or extracted

export default async function PhysiciansPage() {
  const {data} = await sanityFetch({query: PHYSICIANS_PAGE_QUERY})
  if (!data) return null
  return (
    <>
      <PageHero hero={data.page.pageHero} />
      <section className="bg-paper"><div className="container-velora py-16 grid lg:grid-cols-2 gap-10">
        {data.physicians.map((p) => <PhysicianCard key={p._id} physician={p} />)}
      </div></section>
      <SectionRenderer sections={data.page.sections} documentId={data.page._id} documentType="page" />
    </>
  )
}
```

### `app/faq/page.tsx` skeleton

```tsx
import {sanityFetch} from '@/sanity/lib/live'
import {FAQ_PAGE_QUERY} from '@/sanity/lib/queries'
import {PageHero} from '@/components/site/page-hero'
import {FaqAccordion} from '@/components/site/faq-accordion'

export default async function FaqPage() {
  const {data} = await sanityFetch({query: FAQ_PAGE_QUERY})
  if (!data) return null
  return (
    <>
      <PageHero hero={data.page.pageHero} />
      <section className="bg-bone"><div className="container-velora py-16">
        <FaqAccordion items={data.faqItems} />
      </div></section>
    </>
  )
}
```

### `components/cms/section-renderer.tsx` (key file)

```tsx
import {Callout, FeatureGrid, NumberedList, ImageWithText, ServiceCardGrid, PortableTextBlock} from '@/components/site/sections'

const REGISTRY = {
  callout: Callout,
  featureGrid: FeatureGrid,
  numberedList: NumberedList,
  imageWithText: ImageWithText,
  serviceCardGrid: ServiceCardGrid,
  portableTextBlock: PortableTextBlock,
} as const

export function SectionRenderer({sections}: {sections: Array<{_type: keyof typeof REGISTRY; _key: string}>}) {
  return <>{sections?.map((s) => {
    const Component = REGISTRY[s._type]
    return Component ? <Component key={s._key} {...s as any} /> : null
  })}</>
}
```

The implementer creates `components/site/sections/{callout,featureGrid,numberedList,imageWithText,serviceCardGrid,portableTextBlock}.tsx` by extracting JSX patterns directly from the existing pages — preserving Tailwind classes verbatim. Each accepts its schema shape as props.

**Lucide icon mapping:** the `featureGrid` schema stores icon names as strings. `components/site/sections/featureGrid.tsx` maps them through:
```tsx
import {Stethoscope, ShieldCheck, Activity, Sparkles, /* ... */} from 'lucide-react'
const ICONS = {Stethoscope, ShieldCheck, Activity, Sparkles, /* full registered list */}
```
Document the supported icon names in a `// SUPPORTED_ICONS:` comment at top of file.

---

## 7. Admin / Studio access

- Studio URL: **`http://localhost:3010/studio`** (mounted via `app/studio/[[...tool]]/page.tsx` using `<NextStudio config={...} />`).
- Local development: no auth — anyone with localhost access can edit (acceptable for now).
- Production gating (Render deployment, future):
  - Use Sanity's built-in identity (Google/GitHub login). The Studio component handles auth via `@sanity/auth` automatically — only users invited to the Sanity project can write.
  - Read-only public site uses `useCdn: true` with the public anon project ID; no token exposed in the bundle.
  - The `SANITY_API_READ_TOKEN` (used by `defineLive` for draft preview) is server-only and never sent to the browser.
  - Optional hardening: wrap `/studio` in `middleware.ts` with a Basic Auth layer behind `STUDIO_USERNAME` / `STUDIO_PASSWORD` env vars in Render. Document this in the README post-deploy but do not implement now.

Visual editing flow:
1. User opens `/studio` → clicks "Presentation" tool in left rail.
2. Presentation iframe loads `/` with `?preview=...` toggling `draftMode`.
3. User clicks any text on the rendered page → form opens in left pane → edits → live update via `<SanityLive>`.

---

## 8. Image upload handling

- Studio's image input uploads directly to Sanity's Content Lake (via `@sanity/client`'s assets endpoint). No S3 or extra bucket required.
- Stored URL format: `https://cdn.sanity.io/images/<projectId>/<dataset>/<assetId>-<dim>.<ext>`.
- Rendered via `next-sanity/image`'s `<Image />` (a `next/image` wrapper) or `imageLoader` directly with `next/image`. The wrapper auto-applies `auto=format`, `fit=min`, responsive `w=`, and quality.
- `next.config.mjs`: add `images: { remotePatterns: [{ protocol: 'https', hostname: 'cdn.sanity.io' }, { protocol: 'https', hostname: 'images.unsplash.com' }] }` (Unsplash kept in case of fallback during transition).
- All schema `image` fields use `options: {hotspot: true}` so editors can re-crop without uploading new files; we honor hotspot via `urlFor(image).width(...).height(...)`.
- All `image` fields require an `alt` text field — enforced by validation.

---

## 9. Risks + mitigations (≥5)

1. **Risk:** Refactor accidentally changes visual design (different padding, font, color).
   **Mitigation:** Implementer must copy Tailwind class strings verbatim from each `app/**/page.tsx` into the new section components. Run a screenshot diff (manual) of `/`, `/about`, `/weight-management` before and after. Don't refactor markup; only swap text/image sources.

2. **Risk:** Server component + Stega causes URL strings to leak invisible Unicode (Stega-encoded debug data) into hrefs, breaking links.
   **Mitigation:** Set `stega: false` on `sanityFetch` calls whose results feed `metadata`, route props, or any `<Link href>`. Specifically: pass `stega: false` in `generateMetadata` calls, and use `vercelStegaCleanAll()` on any string used as an `href`. Add a smoke test step that curls `/about` and greps for invisible chars in the HTML.

3. **Risk:** RSC + Live mode floods the dev server with WebSocket reconnects on hot reload.
   **Mitigation:** `defineLive` uses Server Actions, not WebSockets, so no socket pressure. Confirm `serverToken` and `browserToken` are both set; if `browserToken` is missing the page silently falls back to non-live and editors get confused. Document in `.env.local.example`.

4. **Risk:** Seeder script overwrites manual edits if rerun.
   **Mitigation:** Seeder uses `client.createIfNotExists()` (not `createOrReplace`) for documents that already exist. Add a `--force` flag for explicit overwrites. Always run `npm run snapshot` before invoking the seeder a second time.

5. **Risk:** `sanity init` interactive prompt blocks the implementer's automated flow.
   **Mitigation:** Run `npx sanity@latest init --env --create-project "Velora Medical Institute" --dataset production --output-path . --typescript --visibility public` non-interactively. If the implementer doesn't have a Sanity account, halt and ask the user to run `npx sanity login` once (one-time, ~30 sec); then continue.

6. **Risk:** Lucide icon names diverge between schema strings and component imports.
   **Mitigation:** Define an exhaustive `ICONS` registry in one file with the full list extracted from current pages: `Calendar, ArrowRight, ArrowUpRight, Dna, HeartPulse, Moon, Flame, Sparkles, Activity, ShieldCheck, ClipboardList, Stethoscope, Target, TrendingUp, FlaskConical`. Schema field uses `options.list` to constrain editor choice — no free typing.

7. **Risk:** `next/image` blocks `cdn.sanity.io` and breaks images at runtime.
   **Mitigation:** Update `next.config.mjs` `remotePatterns` in the same commit that introduces image fetching. Verify with `curl -I http://localhost:3010/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2F...`.

8. **Risk:** Studio styled-components SSR warnings break `/studio` route or pollute logs.
   **Mitigation:** Studio route uses its own `layout.tsx` with no SSR-styled-components wrapping; `<NextStudio>` handles its own client-side mount. If warnings appear, set `'use client'` on `app/studio/[[...tool]]/page.tsx` (the `<NextStudio>` component is client-only).

---

## 10. Verification checklist

Implementer runs **all** of these and confirms output before reporting done. **Use port 3010 only** for the existing dev server; do not start a second dev server.

### Build / type checks
```bash
cd /Users/will/velora-medical-institute
npx tsc --noEmit                                # zero errors
npm run lint                                    # zero errors (warnings OK)
npx sanity schema validate                      # schema is valid
npx sanity typegen generate                     # generates sanity.types.ts; no errors
npx next build                                  # builds clean (no static-export errors)
```

### Route smoke test (against running dev server on :3010)
```bash
for path in / /about /physicians /weight-management /hormone-therapy /longevity \
            /programs /individual-visits /contact /faq /book /intake \
            /legal/hipaa /legal/privacy /legal/terms /studio; do
  code=$(curl -s -o /dev/null -w "%{http_code}" "http://localhost:3010$path")
  echo "$code  $path"
done
# Expected: all 200, /studio 200 (Studio HTML shell)
```

### Content smoke test (verify Sanity-driven copy actually appears)
```bash
# Spot-check the home hero title text comes from Sanity, not stale hardcode:
curl -s http://localhost:3010/ | grep -c "Personalized Medicine"   # >= 1
curl -s http://localhost:3010/about | grep -c "Sustained improvement"  # >= 1 (or whatever seeded title)
curl -s http://localhost:3010/faq | grep -c "<details\|accordion"  # FAQ items rendered
```

### Stega cleanliness check
```bash
# No invisible Stega chars leaking into HTML href attributes:
curl -s http://localhost:3010/about | grep -oE 'href="[^"]*"' | head -20 \
  | python3 -c "import sys; [print('LEAK:', l) for l in sys.stdin if any(ord(c) > 127 and c not in '\"' for c in l)]"
# Expected: no LEAK lines
```

### Visual editing smoke test (manual, ~3 min)
1. Open `http://localhost:3010/studio` → sign in with Sanity account → click "Presentation" in left rail.
2. Navigate to `/` in Presentation iframe → click the home hero subtitle text → form opens in left pane → edit text → confirm change appears in iframe within ~1 second.
3. Click a service card image → upload a different image → confirm new image renders.
4. Visit `/about` in Presentation → click any heading → confirm it opens the matching field.
5. Disable draft mode (visit `/api/draft-mode/disable`) → confirm `/` renders the published version.

### Media check
```bash
# Confirm cdn.sanity.io is whitelisted by next/image:
curl -sI "http://localhost:3010/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fxxx%2Fproduction%2Fyyy.jpg&w=640&q=75" | head -1
# Expected: HTTP/1.1 200 (or 400 for unknown asset, but NOT 403)
```

### Snapshot
```bash
npm run snapshot   # produces content-snapshots/<date>.tar.gz, exit 0
```

If every command above passes, report done. If any fails, **fix the cause** — do not skip steps.

---

## Implementer execution order (suggested)

1. `npm install` packages from §2
2. `npx sanity init` (project + dataset)
3. Create `sanity/` directory tree from §3 (schemas + lib)
4. Create `sanity.config.ts`, `sanity.cli.ts`, `app/studio/...` routes
5. Add env vars; verify `/studio` loads (200)
6. Run seeder script — populate dataset
7. Build `components/cms/section-renderer.tsx` and `components/site/sections/*`
8. Refactor `app/page.tsx` first; verify against running site at :3010
9. Refactor remaining pages one at a time, verifying after each
10. Add `<SanityLive>` and `<VisualEditing>` to root layout
11. Wire draft-mode routes; test Presentation tool end-to-end
12. Run full verification checklist (§10)
13. `git add -A && git commit -m "feat: integrate Sanity CMS for visual content editing"`

End of plan.
