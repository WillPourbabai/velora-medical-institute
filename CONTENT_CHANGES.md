# Velora Content Changes — One-Pass Diff Summary

Files modified: **8**

1. `components/site/home-hero.tsx`
2. `app/page.tsx`
3. `app/about/page.tsx`
4. `app/contact/page.tsx`
5. `app/contact/contact-form.tsx`
6. `app/not-found.tsx`
7. `app/book/booking-client.tsx`
8. `components/site/site-footer.tsx`

KEEP-classified files left untouched: `app/hormone-therapy/page.tsx`, `app/weight-management/page.tsx`, `app/programs/page.tsx`, `app/physicians/page.tsx`, `app/intake/*`, `app/faq/page.tsx`, `app/book/page.tsx`, `app/legal/*`, `components/site/page-hero.tsx`.

---

## 1. components/site/home-hero.tsx

### Hero body copy (line ~63)

**Before:**
> Personalized telemedicine care for metabolic health, weight management, and hormone balance — guided by physicians and refined over time to support lasting results.

**After:**
> A direct-pay telemedicine practice for adults pursuing GLP-1 weight management or bioidentical hormone therapy — evaluated, prescribed, and monitored by double board-certified physicians. 60-minute initial visit, $295. [STATES NEEDED: list of states where physicians are licensed]

### Three feature items (lines ~91–105)

**Before:**
- "Telemedicine Visits" — "Private. Convenient. Secure."
- "Physician-Led Care" — "Expert guidance every step."
- "Personalized Plans" — "Tailored to your biology and goals."

**After:**
- "Secure Video Visits" — "60-min initial · 30-min follow-up · HIPAA-compliant."
- "Double Board-Certified" — "Internal Medicine + Obesity Medicine."
- "Plan Built From Your Labs" — "Reviewed at every visit, adjusted as you respond."

### Bottom utility row (lines ~110–123)

**Before:** "Physician-Led · Evidence-Based · Results-Driven … Optimize your health. Elevate your life."

**After:** "Direct Pay · No Insurance · GLP-1 & BHRT · Telemedicine Only … Sustained improvement, measured one visit at a time."

---

## 2. app/page.tsx

### How It Works intro (line ~418)

**Before:** "Personalized care designed around your health, your goals, and your life."

**After:** "From booking to first prescription in under two weeks for most patients, then a defined cadence of physician follow-up after that."

### Trust badge (line ~492)

**Before:** label="Focused On You"
**After:** label="Direct Pay Pricing"

### Programs trust 3-bullet list (lines ~170–183)

**Before:**
- "Consistent, scheduled physician follow-up"
- "Safe, medically supervised treatment"
- "Long-term clinical improvement"

**After:**
- "Per-visit price drops from $295/$195 to $145 inside a program"
- "Cadence is set in advance — no chasing follow-ups"
- "Cancel any time, with stated early-termination terms"

### Testimonials section (lines ~216–245)

**Before:** Four fabricated testimonials with initials A.M., S.K., R.T., L.D. and invented quotes. Heading: "Representative experiences from physician-guided care."

**After:** Heading rewritten to "In patients' own words." Four `[TESTIMONIAL NEEDED]` placeholders for both initials and quote bodies, plus a `[LEGAL REVIEW]` flag near the disclaimer. Section structure preserved so the design renders.

### Final CTA subhead (line ~334)

**Before:** "Focused on long-term health and sustainable results — directed by physicians from your first visit forward."

**After:** "$295 for a 60-minute physician evaluation. Pay after we confirm a time that works for you — no charge to request a slot."

---

## 3. app/about/page.tsx

### PageHero subtitle (line 19)

**Before:** "…Our work is built around a single principle: the right care, applied consistently."

**After:** "…Two double board-certified physicians; no insurance, no fixed protocols, no rotating provider on every visit."

---

## 4. app/contact/page.tsx

### H1 + subtitle (lines 18–28)

**Before:**
- H1: "We're here to help you start."
- Sub: "For clinical questions, please book a consultation. For general inquiries, scheduling support, or program information, our team responds within one business day."

**After:**
- H1: "Scheduling, programs, eligibility — non-clinical questions."
- Sub: "For anything clinical, book a consultation — medical advice is not given over email. For state licensure, program enrollment, billing, or rescheduling, our care team replies within one business day, Monday through Friday."

### Location card description (line ~59)

**Before:** "Care delivered virtually in states where our physicians are licensed"
**After:** "Care delivered virtually. [STATES NEEDED: list of states where physicians are licensed]"

---

## 5. app/contact/contact-form.tsx

### Form heading (lines 66–68)

**Before:** "Tell us how we can help"
**After:** "One business day, written reply"

---

## 6. app/not-found.tsx

### Whole 404 (lines 8–19)

**Before:**
- H1: "We couldn't find that page."
- Body: "The page you're looking for may have moved, been renamed, or never existed. Let's get you back on course."
- CTAs: Return Home / Book Consultation

**After:**
- H1: "That page doesn't exist."
- Body: "Most patients land here looking for one of three things: weight management, hormone therapy, or scheduling. Pick the closest:"
- CTAs: Weight Management / Hormone Therapy / Book a $295 Consult

---

## 7. app/book/booking-client.tsx

### Confirmation step 03 (line ~546)

**Before:** "Receive secure video link 24h prior to your appointment."
**After:** "Secure video link arrives by email before your appointment. [STAT NEEDED: confirm exact lead time — 24h is a placeholder]"

---

## 8. components/site/site-footer.tsx

### Location line (line ~81)

**Before:** "Telemedicine practice — licensed in select states"
**After:** "Telemedicine practice — [STATES NEEDED: list of licensed states]"

---

## Open flags inventory

Every flag added in this pass, in one place:

### `[STATES NEEDED]`
- `components/site/home-hero.tsx` — hero body copy
- `app/contact/page.tsx` — Location contact card description
- `components/site/site-footer.tsx` — footer location line

### `[STAT NEEDED]`
- `app/book/booking-client.tsx` — confirmation step 03 video-link lead time

### `[TESTIMONIAL NEEDED]`
- `app/page.tsx` — 4 testimonial placeholders (initials + quote bodies, total 8 inserts)

### `[LEGAL REVIEW]`
- `app/page.tsx` — testimonial section intro / disclosure language

### Pre-existing operational facts that this pass did NOT verify (worth user confirmation)
These are existing copy left untouched but should be sanity-checked:
- Phone number `(833) 583-5672` (footer + contact page + contact-form confirmation)
- Email `care@veloramedical.com` (multiple files)
- Hours `Mon–Fri · 8am–6pm Central` (contact page)
- Cancellation fees: $95 (initial late), $75 (follow-up late/no-show), $400 (Weight program early termination), $250 (Hormone program early termination) — appear in `app/legal/terms/page.tsx` and `app/intake/intake-form.tsx`
- Pricing: $295 / $195 / $145 / $180 — assumed correct per brief
- Visit counts: 16 / 5 / 21 — assumed correct per brief

### No `[PROVIDER INFO NEEDED]`, `[PARTNERSHIP NEEDED]`, `[PRICING NEEDED]`, or `[SERVICES NEEDED]` flags
The brief gave concrete provider names + credentials, pricing, and service scopes — the rewrites stayed inside those facts.

---

## Voice notes for follow-up edits

When filling flags, match the voice rules in `VOICE.md`:
- Operational facts get the **"bold short fact + em-dash + consequence"** pattern.
- States list, when added, should read as plain prose: "Currently licensed in CA, TX, FL, NY, and 18 other states." Avoid "Available in many states across the country."
- Testimonials, when added, should be 2–3 sentences, name a specific clinical detail (cadence, dose change, lab finding), and avoid superlatives. Initials + state (e.g., "A.M., TX") read more honest than first names.
