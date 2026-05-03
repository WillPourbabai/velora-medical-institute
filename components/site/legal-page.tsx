import { Section } from '@/components/site/section'

interface LegalSection {
  heading: string
  body: React.ReactNode
}

export function LegalPage({
  eyebrow, title, lastUpdated, intro, sections,
}: {
  eyebrow: string
  title: string
  lastUpdated: string
  intro: React.ReactNode
  sections: LegalSection[]
}) {
  return (
    <>
      <section className="bg-cream border-b border-line">
        <div className="container-velora pt-14 md:pt-20 pb-12">
          <p className="eyebrow">{eyebrow}</p>
          <h1
            className="mt-4 font-display leading-[1.04] tracking-[-0.018em] text-ink max-w-3xl"
            style={{ fontSize: 'clamp(2rem, 5.5vw, 3.625rem)' }}
          >
            {title}
          </h1>
          <p className="mt-5 text-[12px] tracking-[0.18em] uppercase text-sage">Last updated · {lastUpdated}</p>
        </div>
      </section>
      <Section bg="bone">
        <div className="container-narrow !mx-0 lg:!mx-auto !px-0">
          <div className="prose-velora">
            <p className="text-[16.5px] leading-relaxed text-ink-soft">{intro}</p>
            {sections.map((s) => (
              <section key={s.heading} className="mt-12">
                <h2 className="font-display text-[26px] md:text-[32px] leading-tight text-ink">{s.heading}</h2>
                <div className="mt-5 text-[15.5px] leading-relaxed text-ink-soft space-y-4">{s.body}</div>
              </section>
            ))}
          </div>
        </div>
      </Section>
    </>
  )
}
