# Velora Content Audit

Single-pass classification of every section with substantive copy. KEEP = on-voice, specific, doing real work. WEAK = vague / generic / filler / fails the swap test. BLOCKED = needs facts not in the codebase or brief.

Total sections audited: **74**
- KEEP: **51**
- WEAK: **18**
- BLOCKED: **5**

---

## app/page.tsx (HomePage)

| Lines | Section | Class | Reason |
|---|---|---|---|
| 24 | `<HomeHero />` | mixed | See `home-hero.tsx` block below |
| 27–76 | "Our Approach" — eyebrow, headline, body, bullets | KEEP | Specific concerns named (fatigue, weight regain, hormonal imbalance), names the practice, mechanism of care described. Headline is on-voice. |
| 79–112 | "Our Services" — heading + 2 service cards | KEEP | Each card has tagline / mechanism / 3 concrete bullets and named program. Reference-image-matched. |
| 115 / 356–498 | "How It Works" — 4 steps + trust strip + 4 trust badges | mostly KEEP, **WEAK**: "Focused On You" badge label + intro line "Personalized care designed around your health, your goals, and your life." | Steps are concrete. Badge "Focused On You" is platitude. Intro is generic — true for any practice. |
| 118 / 543–658 | "Pricing" — title, subhead, 3 cards, individual visits row, footer line | KEEP | Reference-image-matched. Prices, visit counts, durations, all specific. |
| 121–184 | "Structured Programs" section on home — heading, intro, 3 program cards, 3 bullet trust list | mostly KEEP, **WEAK** trust list ("Consistent, scheduled physician follow-up" / "Safe, medically supervised treatment" / "Long-term clinical improvement") | The 3 bullets at the bottom restate what the cards already say in vaguer form. |
| 187–213 | "Meet Our Physicians" — heading, 2 physician cards | KEEP | Real names, real credentials, specific approach descriptions. |
| 216–245 | "Patient Experience" testimonials (4 quotes w/ initials) | **BLOCKED** | Quotes and initials are fabricated. Cannot rewrite — the only honest move is to flag for replacement with real patient quotes or remove the section. Will replace inline with `[TESTIMONIAL NEEDED]` flags. |
| 248–275 | "Why Velora" — 4 numbered items | KEEP | Each item has a concrete mechanism (no fixed protocols, evidence-based prescribing, ongoing adjustment, structured follow-up). |
| 278–322 | Home FAQ (5 Q's) | KEEP | Real, physician-voiced answers; specific to GLP-1, hormone, telemedicine. |
| 325–347 | Final CTA — "Begin physician-guided treatment with a comprehensive evaluation" | **WEAK** | Subhead "Focused on long-term health and sustainable results — directed by physicians from your first visit forward." is hedged, no concrete next step beyond CTA buttons. Headline OK. CTAs OK. |

## components/site/home-hero.tsx

| Lines | Section | Class | Reason |
|---|---|---|---|
| 28–35 | Brand mark stack (logo, "VELORA", "Medical Institute") | KEEP | Brand. |
| 38–44 | Categories eyebrow ("Telemedicine Care · Obesity Medicine · Hormone Therapy") | KEEP | Concrete, names categories. |
| 47–56 | Headline ("Physician-Guided / Weight Loss & / Hormone Optimization") | KEEP | Reference-image-matched. Specific to outcome. |
| 62–66 | Body copy ("Personalized telemedicine care for metabolic health…") | **WEAK** | Passes swap test partially — "personalized…guided by physicians and refined over time" is generic. No state info, no visit duration, no audience. |
| 89–106 | 3 feature items (Telemedicine Visits / Physician-Led Care / Personalized Plans) | **WEAK** | Body lines ("Private. Convenient. Secure." / "Expert guidance every step." / "Tailored to your biology and goals.") are pure fluff. Swap-test failures. |
| 108–124 | Bottom utility row ("Physician-Led · Evidence-Based · Results-Driven" + "Optimize your health. Elevate your life.") | **WEAK** | Three keyword tags + tagline are generic / platitude. |

## app/about/page.tsx

| Lines | Section | Class | Reason |
|---|---|---|---|
| 16–22 | PageHero — title + subtitle | mostly KEEP, headline KEEP, **WEAK** subtitle ("the right care, applied consistently") | Subtitle ends on a platitude. |
| 25–52 | "Our Standard" manifesto | KEEP | Specific contrast to standardized clinics; named credentials (double board-certified Internal Medicine + Obesity Medicine); names insurance limit being eliminated. |
| 55–76 | "What We Do" pillars | KEEP | Real specialties, concrete mechanisms. |
| 79–107 | "Operating Principles" (5 numbered items) | KEEP | Each has mechanism. |
| 110–132 | "The Practice" facts grid (4 tiles) | KEEP | Concrete operational facts. |
| 135–151 | Final CTA | KEEP | Specific concrete CTAs. |

## app/hormone-therapy/page.tsx

| Lines | Section | Class | Reason |
|---|---|---|---|
| 17 / 309–396 | HormoneHero — eyebrow, headline, body, CTAs, pricing strip, photo caption | KEEP | Specific pricing, named outcomes ("Restore balance / Reclaim energy"), product photo + caption. Reference-matched. |
| 20–45 | Overview | KEEP | Mechanism described (assessment → individualized plan → monitoring). |
| 48–74 | "What's Included" 6-tile grid | KEEP | Each tile is concrete. |
| 77–109 | "What We Evaluate" symptom grid | KEEP | Specific symptoms. |
| 112–169 | Care Options — Individual vs. Program | KEEP | Concrete prices, visit counts, savings. |
| 172–191 | Treatment Journey (4 steps with cadences) | KEEP | Real cadences ("~2 weeks", "4–8 weeks"). |
| 194–219 | "Why Physician-Guided Care" | KEEP | Each item has a mechanism. |
| 222–251 | Important Information | KEEP | Concrete operational facts (eligibility, lab testing, medication costs). |
| 254–277 | FAQ (7 questions) | KEEP | Specific physician-voice answers. |
| 280–301 | Final CTA | KEEP | Specific, named programs. |

## app/weight-management/page.tsx

| Lines | Section | Class | Reason |
|---|---|---|---|
| 17 / 311–404 | WeightHero | KEEP | Headline reference-matched, specific pricing strip. |
| 20–45 | Overview | KEEP | Concrete mechanism. |
| 48–74 | What's Included | KEEP | Each tile concrete. |
| 77–106 | "Who This Is For" 8-item list | KEEP | Specific patient situations. |
| 109–172 | Care Options | KEEP | Specific. |
| 175–198 | Treatment Journey | KEEP | Real cadences. |
| 201–226 | Why Physician-Guided | KEEP | Mechanism each. |
| 229–254 | Important Information | KEEP | Operational facts. |
| 257–279 | FAQ | KEEP | Specific physician answers. |
| 282–303 | Final CTA | KEEP | Concrete. |

## app/programs/page.tsx

| Lines | Section | Class | Reason |
|---|---|---|---|
| 16–28 | PageHero | KEEP | Specific. |
| 31–104 | Programs at a Glance — 3 program tiles | KEEP | Specific cadences, prices, savings, visit counts. |
| 107–136 | "Why Structured Programs" | KEEP | Mechanism stated; bullets specific. |
| 139–161 | Cancellation policy (Program Policy) | KEEP | Concrete dollar amounts. |
| 164–187 | Final CTA — heading + subtitle "Your physician will help determine whether program-based care is the right fit for your goals and clinical profile." | KEEP | Specific. |

## app/physicians/page.tsx

| Lines | Section | Class | Reason |
|---|---|---|---|
| 16–21 | PageHero | KEEP | Specific. |
| 23–62 | Physician profiles (2) — bios, credentials, focus areas | KEEP | Real names, credentials, specific focus areas. |
| 65–75 | Joint statement / shared philosophy | KEEP | On-voice quote. |
| 78–97 | Final CTA | KEEP | Concrete. |

## app/intake/page.tsx + intake-form.tsx

| Section | Class | Reason |
|---|---|---|
| Page hero (page.tsx 13–27) | KEEP | Headline + subtitle are specific to the form's purpose. |
| Intake sections / labels / option lists / consents (intake-form.tsx 9–500) | KEEP | All medically specific. Consent text is concrete and operational. |
| Help-aside copy ("Email care@…") | KEEP | Specific. |
| Done state (110–135) | KEEP | Specific. |

## app/contact/page.tsx + contact-form.tsx

| Lines | Section | Class | Reason |
|---|---|---|---|
| page.tsx 14–29 | Contact hero — H1 "We're here to help you start" + subtitle | **WEAK** | Headline is generic, swap-test fails. Subtitle response-time claim "within one business day" is OK if real. |
| page.tsx 34–61 | Contact info cards (Email/Phone/Hours/Location) | KEEP | Concrete contact info, hours, phone. |
| contact-form.tsx 64–106 | Form heading "Tell us how we can help" + footer privacy line | mostly KEEP, **WEAK** heading "Tell us how we can help" is filler | The form heading is generic. |

## app/faq/page.tsx

| Lines | Section | Class | Reason |
|---|---|---|---|
| 14–40 | 3 Q&A arrays (weight, hormone, practice) | KEEP | Specific physician answers. |
| 45–51 | PageHero | KEEP | Specific subtitle. |
| 53–102 | 3 grouped sections w/ sticky headings + intros | KEEP | Each intro tags the topic concretely. |
| 104–122 | Final CTA | KEEP | Specific. |

## app/book/page.tsx + booking-client.tsx

| Section | Class | Reason |
|---|---|---|
| booking-client.tsx 23–52 (OPTIONS array) | KEEP | Each option has duration, price, description, 3 concrete bullets. |
| 138–156 (header) | KEEP | "three steps" heading + specific subtitle. |
| Step 1 / Step 2 / Step 3 cards & helpers | KEEP | Operational, specific. |
| Sidebar "Important to Know" (438–454) | KEEP | Concrete (telemed / payment / intake). |
| Confirmation (515–562) — three steps "Confirmation Email / Complete Intake / Telemedicine Visit" | **WEAK** — body of step 03 ("Receive secure video link 24h prior to your appointment") is a specific operational claim; if true, KEEP; if not verified, BLOCKED. | Flag for verification: the "24h prior" claim is unverified. |

## app/legal/* (privacy, hipaa, terms)

| File | Class | Reason |
|---|---|---|
| privacy/page.tsx | KEEP | Standard accurate privacy boilerplate; specific to direct-pay telemed. |
| hipaa/page.tsx | KEEP | Standard HIPAA notice. Specific contact email. |
| terms/page.tsx | KEEP | Specific cancellation fees & policies match site. |

## app/not-found.tsx

| Section | Class | Reason |
|---|---|---|
| 4–22 | Whole 404 | **WEAK** | "Let's get you back on course" is platitude; doesn't direct user to specific Velora next step. |

## components/site/site-footer.tsx

| Lines | Section | Class | Reason |
|---|---|---|---|
| 28–55 | Top CTA bar — "Physician-guided care, designed for you." + 2 CTAs | KEEP | Specific named programs. |
| 59–89 | Link grid — brand description + email/phone/location + 3 columns of links | mostly KEEP, **WEAK**: brand sentence "Physician-directed care in metabolic health, weight management, and hormone optimization. Direct-pay, telemedicine-based practice led by double board-certified physicians." is decent but could be tighter | Acceptable; close to KEEP. Marking borderline KEEP. |
| 92–100 | Compliance fineprint | KEEP | Standard, specific. |

## components/site/page-hero.tsx

Component shell only — no copy. Skip.

---

## WEAK summary (rewrite targets)

1. Home: HomeHero body copy (62–66)
2. Home: HomeHero 3 feature item bodies (89–106)
3. Home: HomeHero utility row keywords + tagline (108–124)
4. Home: How It Works intro line (418–420) + "Focused On You" badge (492)
5. Home: Programs trust 3-bullet list (170–183)
6. Home: Final CTA subhead (334–336)
7. About: PageHero subtitle (line 19) — light edit only
8. Contact: H1 + subtitle (14–28)
9. Contact form: heading "Tell us how we can help" (66–67)
10. 404 page (4–22)
11. Booking confirmation step "24h prior to your appointment" — flag for verification

## BLOCKED summary

1. Home Testimonials (216–245) — all 4 testimonial quotes + initials are fabricated. Will replace with `[TESTIMONIAL NEEDED]` flags or recommend section removal.
2. Booking confirmation "24h prior" claim — flag verification.
3. State licensure — "Patients must be located in a state where our physicians are licensed" appears repeatedly without naming the states. Flag `[STATES NEEDED]` near conversion points.
4. Footer "licensed in select states" same — `[STATES NEEDED]`.
5. Hours "Mon–Fri · 8am–6pm CT" + phone (833) 583-5672 — assumed real per existing copy; flag for confirmation if synthetic.
