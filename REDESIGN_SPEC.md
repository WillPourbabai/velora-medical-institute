# Velora Redesign — Build Spec (final)

Based on 11 mockups in `/public/velora-pics/`. Each mockup is a layout reference. Build the page in HTML/Tailwind so a screenshot of the live page matches the mockup.

## Theme (global)
- BG: warm cream `#F4EBD3` (page) / `#F9F1DC` (lighter sections) / `#FDFAF1` (cards)
- Text: dark espresso ink `#1A140E`
- Accent gold: `#C9A064` (eyebrows, accents, leaf logo, hairlines)
- CTA buttons: chocolate brown `#7C5436` filled, rounded-md, cream text, uppercase tracking, calendar icon — "SCHEDULE CONSULTATION" pattern
- Outline CTA: ink border, ink text, rounded-md
- Fonts: Fraunces (serif headlines), Inter (sans body)
- Logo: leaf-V monogram (teal leaves, gold strokes) + "VELORA" / "MEDICAL INSTITUTE" stacked

## Nav (every page)
- Sticky cream bar, no border at top
- LEFT: leaf-V mark + "VELORA / MEDICAL INSTITUTE" stacked wordmark
- CENTER: About · Services▼ · Programs · Pricing · FAQ · Contact (uppercase 11px, tracking-wide, gold accent on Services dropdown indicator and active-page underline)
- RIGHT: brown filled "📅 SCHEDULE CONSULTATION" rounded button

## HOMEPAGE (`/`)

### Hero — `07FC939F`
50/50 split, cream:
- LEFT: tiny gold "OUR SERVICES" eyebrow → big serif "Comprehensive Care.\nEvidence-Based Results." → small gold rule → body copy → brown "📅 SCHEDULE YOUR CONSULTATION" pill
- RIGHT: photo of female doctor in white coat at desk (use cropped right half of `07FC939F`)

### Service areas — 3 cards (still part of `07FC939F`)
- Centered "OUR SERVICE AREAS" eyebrow + "Personalized Medicine for Every Stage of Life" headline
- 3 cards, no border, photo above text:
  - Weight Management → photo from `B5E82679` product crop
  - Hormone Optimization → photo from `F85A00FB` product crop
  - Longevity & Preventive Medicine → photo from `5CCFF3EA` cropped to woman+sunset
- Each: photo, title (serif), body (3 lines), brown "LEARN MORE →" link

### Telehealth experience — `859210E4`
Single full-width image section. Above it: small eyebrow + headline ("What you'll experience"). Could just embed the mockup image directly since the laptop+notebook composition IS the section.

### Longevity care — `5CCFF3EA`
Use the full mockup image as a full-width section background. The 6-pillar overlay is part of the photo. Add a heading above: "Physician-Guided Longevity Care" + intro line. Then below the image: 6 pillar cards (Cellular Health, Hormone Optimization, Health, Inflammation Control, Sleep & Stress, Recovery & Performance) each with icon + body.

### Care Path — `A0278AEC`
Two stacked panels:
- Step 1 panel (cream): split — LEFT "START YOUR JOURNEY" eyebrow → "Personalized Care. Guided by Physicians.\nDesigned for You." → small gold "Double Board-Certified Physicians" badge → body → brown "BOOK INITIAL CONSULTATION" button. RIGHT: photo of woman at desk on telehealth call (use `A0278AEC` cropped step 1) with "1 INITIAL CONSULTATION (TELE VISIT)" overlay badge top-right
- Step 2 panel (cream): centered "2 CHOOSE YOUR CARE PATH" headline + subline. Background: forked-road photo (use `A0278AEC` cropped step 2). Two A/B comparison cards floating below: A INDIVIDUAL FOLLOW-UP VISITS (Flexible / As-needed / Short-term focus) + B (RECOMMENDED) STRUCTURED PROGRAMS (Comprehensive / Root-cause / Sustainable / Long-term)
- Bottom: "THE DIFFERENCE — Individual visits treat pieces. Program-based care builds the whole foundation." + 4-tile row (Evidence-Based / Personalized / Measurable Results / Long-Term Approach)

### Programs preview — `92724046`/`E2CD6435` summary
Compressed version of the programs page hero with a "VIEW ALL PROGRAMS" link to /programs.

### Final CTA
Brown panel with cream V leaf, "Begin physician-guided care today" + cream SCHEDULE button.

## `/programs` — `E2CD6435`
- Hero LEFT cream: "STRUCTURED PROGRAMS · LASTING RESULTS." gold eyebrow → "Physician-Guided Programs\nDesigned for Long-Term Results" headline → gold rule → body
- Hero RIGHT: hikers photo (cropped from `E2CD6435`) with "You don't have to climb alone. We guide you every step of the way." pull quote overlaid top-right
- Below: 3 pricing tiers
  1. Medical Weight Management — pill icon, $145/visit, 16 VISITS OVER 12 MONTHS, bullets, white border "EXPLORE PROGRAM"
  2. Metabolic & Hormone Optimization — brown RECOMMENDED tab, sparkle icon, $180/visit, 5 VISIT PROGRAM (40 MIN), bullets, brown "START PROGRAM"
  3. Signature Longevity Program — leaf icon, $220/visit, 5 VISIT PROGRAM (60 MIN), bullets, white border "EXPLORE PROGRAM"
- Below tiers: dark brown card right "Invest in Your Health.\nElevate Your Life." + body + cream SCHEDULE button
- Bottom: 4-tile row (Evidence-Based / Personalized / Measurable Results / Long-Term Approach)

## `/weight-management` — `B5E82679`
- Hero LEFT: "MEDICAL WEIGHT MANAGEMENT" eyebrow → "Medical Weight Loss.\nReal Results. Lasting Change." → body → brown SCHEDULE + cream LEARN MORE
- Hero RIGHT: woman + product photo (cropped from `B5E82679`)
- 4 trust pillars row: Clinically Proven GLP-1 / Metabolic Optimization / Physician-Guided Care / Sustainable Results
- "WHAT'S INCLUDED" row: 4 small cards: Personalized treatment plan / Nutrition & lifestyle / Ongoing monitoring / Educational support
- Stat row: 15-25% / 4-8 weeks / Long-Term Success
- "Are you a candidate?" callout box: BMI > 27, weight regain, etc., brown "FIND OUT" button
- Dark icon strip footer: Physician-Led Care / Safe & Effective / Telemedicine Convenience / Your Journey. Our Expertise. Lasting Results.

## `/hormone-therapy` — `F85A00FB`
- Hero LEFT: "HORMONE OPTIMIZATION" eyebrow → "Personalized Therapy for Men and Women" → body → brown SCHEDULE
- Hero RIGHT: smiling couple + Velora hormone product (cropped from `F85A00FB`)
- Use existing inner-page sections retoned for cream theme

## `/longevity` (new) — `5CCFF3EA`
- Hero: full-width couple-on-sofa photo as background
- Overlay center-left: "PHYSICIAN-GUIDED LONGEVITY CARE" eyebrow + headline + body + brown SCHEDULE
- 6-pillar grid below: each pillar gets a card with icon, title, description
- Closing CTA

## `/individual-visits` (new) — `5D4651C9`
- Breadcrumb "Home → Individual Follow-Up Visits"
- Hero LEFT cream: "Individual Follow-Up Visits" + "ONGOING CARE. LASTING RESULTS." eyebrow + body + brown BOOK button
- Hero RIGHT: photo of woman on telehealth call (cropped from `5D4651C9`)
- "WHY THIS TYPE OF CARE MATTERS" eyebrow + 4-column gold-circle icon grid (Stay on Track / Optimize Results / Monitor & Protect / Personalized Updates)
- "FOLLOW-UP VISIT OPTIONS & PRICING" centered:
  - $195 follow-up card with calendar icon + bullets + brown BOOK button
  - "Package discounts" subtext
- "A Personalized Experience, Every Time" — books image left + 4 numbered items right
- Dark brown panel: "Your Health. Your Goals. Real Results." + cream SCHEDULE button
- Bottom 4-tile row

## `/faq` — `CBACB474`
- Full-width hero: mountain sunset photo (cropped from `CBACB474` removing logo+headline overlay so we render those as HTML)
- HTML overlay center: leaf V mark + "VELORA / MEDICAL INSTITUTE" small + "FREQUENTLY ASKED QUESTIONS" big cream serif
- Below hero: existing FAQ accordion content (Care & Telemedicine + Weight + Hormone + Practice sections)

## Footer
- Cream BG (warm), dark text
- Top row: leaf logo + brand short statement
- 4 columns: Services / Practice / Patients / Contact
- Bottom hairline row: copyright + medical disclaimer

## Photo crops needed (sips)
- `07FC939F` → right half (`hero-doctor.png`)
- `B5E82679` → right portion product/woman (`wm-hero.png`) + small product square for service card (`card-weight.png`)
- `F85A00FB` → right portion couple+product (`hormone-hero.png`) + small product square (`card-hormone.png`)
- `5CCFF3EA` → full image (`longevity-hero.png`) + woman+sunset crop for service card (`card-longevity.png`)
- `E2CD6435` → right portion hikers (`programs-hikers.png`)
- `A0278AEC` → top portion step 1 woman+laptop (`carepath-step1.png`) + bottom portion forked road (`carepath-fork.png`)
- `5D4651C9` → top right woman on call (`individual-hero.png`) + books area (`individual-books.png`)
- `859210E4` → full image (`telehealth-experience.png`)
- `CBACB474` → mountain only, no overlay (`faq-mountain.png`)
