'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowUpRight, Check } from 'lucide-react'
import { toast } from 'sonner'
import { cn } from '@/lib/utils'

const MEDICAL_HISTORY = [
  'Hypertension','Diabetes / Prediabetes','Thyroid Disorder','Cardiovascular Disease',
  'Kidney Disease','Liver Disease','Sleep Apnea','Depression / Anxiety',
  'Polycystic Ovary Syndrome (PCOS)','History of Blood Clots (DVT/PE)','Pancreatitis','Gallbladder Disease',
]
const FAMILY_HISTORY = [
  'Diabetes','Hypertension','Cardiovascular disease','Thyroid disorder','Obesity',
  'Polycystic Ovary Syndrome (PCOS)','Medullary thyroid cancer or MEN2','Blood clots (DVT/PE)',
]
const HORMONE_SYMPTOMS = [
  'Fatigue / Low Energy','Decreased Libido','Weight Gain','Difficulty Losing Weight',
  'Brain Fog / Poor Concentration','Mood Changes / Irritability','Poor Sleep / Insomnia',
  'Menopause-Related Symptoms','Symptoms Suggestive of Low Testosterone',
]

const SECTIONS = [
  { id: 'patient', label: 'Patient' },
  { id: 'medical', label: 'Medical History' },
  { id: 'family', label: 'Family History' },
  { id: 'meds', label: 'Medications' },
  { id: 'weight', label: 'Weight & Metabolic' },
  { id: 'hormone', label: 'Hormone Symptoms' },
  { id: 'lifestyle', label: 'Lifestyle' },
  { id: 'goals', label: 'Goals' },
  { id: 'consents', label: 'Consents' },
]

export function IntakeForm() {
  const [submitting, setSubmitting] = useState(false)
  const [done, setDone] = useState(false)

  // Form state
  const [data, setData] = useState({
    patient: {
      fullName: '', dob: '', phone: '', email: '', address: '',
      pcp: '', emergencyName: '', emergencyPhone: '',
    },
    medical: [] as string[],
    cancerType: '',
    otherMedical: '',
    family: [] as string[],
    familyCancer: '',
    otherFamily: '',
    medications: '',
    allergies: { medications: '', reactions: '' },
    weight: { current: '', height: '', priorAttempts: '', priorAttemptsDescribe: '', priorMeds: '' },
    hormoneSymptoms: [] as string[],
    lifestyle: { exercise: '', diet: '', alcohol: 'None', tobacco: 'No' },
    goals: '',
    consents: {
      medicationSafety: false,
      telemedicine: false,
      hipaa: false,
      financial: false,
      cancellation: false,
      medicalConsent: false,
      attestation: false,
    },
    signatureName: '',
    signatureDate: new Date().toISOString().slice(0, 10),
  })

  const toggleArr = (key: 'medical' | 'family' | 'hormoneSymptoms', item: string) => {
    setData((prev) => {
      const arr = prev[key]
      return {
        ...prev,
        [key]: arr.includes(item) ? arr.filter((i) => i !== item) : [...arr, item],
      }
    })
  }

  const allConsents = Object.values(data.consents).every(Boolean)
  const canSubmit = data.patient.fullName && data.patient.dob && data.patient.email && data.signatureName && allConsents

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!canSubmit) {
      toast.error('Please complete all required fields and consents.')
      return
    }
    setSubmitting(true)
    try {
      const res = await fetch('/api/intake', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, submittedAt: new Date().toISOString() }),
      })
      if (!res.ok) throw new Error()
      setDone(true)
      toast.success('Intake submitted', {
        description: 'Your physician will review your information before your visit.',
      })
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } catch {
      toast.error('Submission failed', { description: 'Please try again or email care@veloramedical.com.' })
    } finally {
      setSubmitting(false)
    }
  }

  if (done) {
    return (
      <section className="bg-bone min-h-[60vh] py-24">
        <div className="container-narrow text-center">
          <span className="size-14 rounded-full bg-sage text-cream flex items-center justify-center mx-auto">
            <Check className="size-7" />
          </span>
          <p className="eyebrow mt-7">Intake Submitted</p>
          <h2 className="mt-5 font-display text-[42px] md:text-[58px] leading-[1.04] tracking-[-0.018em] text-ink">
            Thank you — your <em className="not-italic text-sage">intake is complete</em>.
          </h2>
          <p className="mt-7 text-[16.5px] text-ink-soft leading-relaxed max-w-xl mx-auto">
            Your physician will review your information ahead of your visit. If anything additional is needed,
            our care team will contact you directly.
          </p>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
            <Link href="/book" className="btn-primary">Book a Consultation <ArrowUpRight className="size-3.5" /></Link>
            <Link href="/" className="btn-secondary">Return Home</Link>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="bg-bone py-16 md:py-20">
      <div className="container-velora grid lg:grid-cols-12 gap-10">
        {/* Sticky TOC */}
        <aside className="hidden lg:block lg:col-span-3 lg:sticky lg:top-32 self-start">
          <p className="eyebrow mb-5">Sections</p>
          <ol className="space-y-1.5 text-[14px]">
            {SECTIONS.map((s, i) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className="flex items-baseline gap-3 py-1.5 text-ink-soft hover:text-sage transition-colors"
                >
                  <span className="font-display italic text-gold text-[12px] w-6">{(i + 1).toString().padStart(2, '0')}</span>
                  {s.label}
                </a>
              </li>
            ))}
          </ol>
          <div className="mt-8 p-5 bg-paper border border-line">
            <p className="eyebrow text-sage">Need Help?</p>
            <p className="mt-3 text-[13.5px] text-ink-soft leading-relaxed">
              Email <a href="mailto:care@veloramedical.com" className="text-ink underline underline-offset-2">care@veloramedical.com</a> if you have questions while completing your intake.
            </p>
          </div>
        </aside>

        <form onSubmit={handleSubmit} className="lg:col-span-9 space-y-8">
          {/* Section: Patient */}
          <FormSection id="patient" n="01" title="Patient Information">
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Full Name" required>
                <input className="input" required value={data.patient.fullName}
                  onChange={(e) => setData({ ...data, patient: { ...data.patient, fullName: e.target.value } })} />
              </Field>
              <Field label="Date of Birth" required>
                <input type="date" className="input" required value={data.patient.dob}
                  onChange={(e) => setData({ ...data, patient: { ...data.patient, dob: e.target.value } })} />
              </Field>
              <Field label="Phone" required>
                <input type="tel" className="input" required value={data.patient.phone}
                  onChange={(e) => setData({ ...data, patient: { ...data.patient, phone: e.target.value } })} />
              </Field>
              <Field label="Email" required>
                <input type="email" className="input" required value={data.patient.email}
                  onChange={(e) => setData({ ...data, patient: { ...data.patient, email: e.target.value } })} />
              </Field>
              <Field label="Address" className="sm:col-span-2">
                <input className="input" value={data.patient.address}
                  onChange={(e) => setData({ ...data, patient: { ...data.patient, address: e.target.value } })} />
              </Field>
              <Field label="Primary Care Physician (if applicable)" className="sm:col-span-2">
                <input className="input" value={data.patient.pcp}
                  onChange={(e) => setData({ ...data, patient: { ...data.patient, pcp: e.target.value } })} />
              </Field>
              <Field label="Emergency Contact Name">
                <input className="input" value={data.patient.emergencyName}
                  onChange={(e) => setData({ ...data, patient: { ...data.patient, emergencyName: e.target.value } })} />
              </Field>
              <Field label="Emergency Contact Phone">
                <input type="tel" className="input" value={data.patient.emergencyPhone}
                  onChange={(e) => setData({ ...data, patient: { ...data.patient, emergencyPhone: e.target.value } })} />
              </Field>
            </div>
          </FormSection>

          {/* Section: Medical History */}
          <FormSection id="medical" n="02" title="Medical History" subtitle="Please indicate if you have a history of any of the following conditions.">
            <div className="grid sm:grid-cols-2 gap-x-5 gap-y-1">
              {MEDICAL_HISTORY.map((c) => (
                <CheckboxRow key={c} label={c} checked={data.medical.includes(c)} onChange={() => toggleArr('medical', c)} />
              ))}
              <CheckboxRow
                label="History of Cancer"
                checked={data.medical.includes('History of Cancer')}
                onChange={() => toggleArr('medical', 'History of Cancer')}
              />
            </div>
            {data.medical.includes('History of Cancer') && (
              <Field label="Cancer Type" className="mt-5">
                <input className="input" value={data.cancerType}
                  onChange={(e) => setData({ ...data, cancerType: e.target.value })} />
              </Field>
            )}
            <Field label="Other Medical Conditions (please specify diagnosis)" className="mt-5">
              <textarea className="input resize-none" rows={3} value={data.otherMedical}
                onChange={(e) => setData({ ...data, otherMedical: e.target.value })} />
            </Field>
          </FormSection>

          {/* Section: Family History */}
          <FormSection id="family" n="03" title="Family History" subtitle="First-degree relatives (parents, siblings) — please indicate any of the following.">
            <div className="grid sm:grid-cols-2 gap-x-5 gap-y-1">
              {FAMILY_HISTORY.map((c) => (
                <CheckboxRow key={c} label={c} checked={data.family.includes(c)} onChange={() => toggleArr('family', c)} />
              ))}
              <CheckboxRow
                label="Cancer (please specify)"
                checked={data.family.includes('Cancer')}
                onChange={() => toggleArr('family', 'Cancer')}
              />
            </div>
            {data.family.includes('Cancer') && (
              <Field label="Cancer type and relation" className="mt-5">
                <input className="input" value={data.familyCancer}
                  onChange={(e) => setData({ ...data, familyCancer: e.target.value })} />
              </Field>
            )}
            <Field label="Other Family Medical Conditions" className="mt-5">
              <textarea className="input resize-none" rows={3} value={data.otherFamily}
                onChange={(e) => setData({ ...data, otherFamily: e.target.value })} />
            </Field>
          </FormSection>

          {/* Section: Medications */}
          <FormSection id="meds" n="04" title="Current Medications & Allergies"
            subtitle="Please list all prescription medications, over-the-counter medications, and supplements.">
            <Field label="Current Medications & Supplements">
              <textarea className="input resize-none" rows={4} value={data.medications}
                onChange={(e) => setData({ ...data, medications: e.target.value })} />
            </Field>
            <div className="grid sm:grid-cols-2 gap-5 mt-5">
              <Field label="Medication Allergies">
                <input className="input" value={data.allergies.medications}
                  onChange={(e) => setData({ ...data, allergies: { ...data.allergies, medications: e.target.value } })} />
              </Field>
              <Field label="Reaction(s)">
                <input className="input" value={data.allergies.reactions}
                  onChange={(e) => setData({ ...data, allergies: { ...data.allergies, reactions: e.target.value } })} />
              </Field>
            </div>
          </FormSection>

          {/* Section: Weight & Metabolic */}
          <FormSection id="weight" n="05" title="Weight & Metabolic History">
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Current Weight">
                <input className="input" placeholder="e.g. 185 lbs" value={data.weight.current}
                  onChange={(e) => setData({ ...data, weight: { ...data.weight, current: e.target.value } })} />
              </Field>
              <Field label="Height">
                <input className="input" placeholder="e.g. 5&apos;9&quot;" value={data.weight.height}
                  onChange={(e) => setData({ ...data, weight: { ...data.weight, height: e.target.value } })} />
              </Field>
              <Field label="Previous weight loss attempts?">
                <select className="input" value={data.weight.priorAttempts}
                  onChange={(e) => setData({ ...data, weight: { ...data.weight, priorAttempts: e.target.value } })}>
                  <option value="">Select…</option>
                  <option value="No">No</option>
                  <option value="Yes">Yes</option>
                </select>
              </Field>
              <Field label="Prior use of weight management medications?">
                <select className="input" value={data.weight.priorMeds}
                  onChange={(e) => setData({ ...data, weight: { ...data.weight, priorMeds: e.target.value } })}>
                  <option value="">Select…</option>
                  <option value="No">No</option>
                  <option value="Yes">Yes</option>
                </select>
              </Field>
            </div>
            {data.weight.priorAttempts === 'Yes' && (
              <Field label="Please describe prior weight loss attempts" className="mt-5">
                <textarea className="input resize-none" rows={3} value={data.weight.priorAttemptsDescribe}
                  onChange={(e) => setData({ ...data, weight: { ...data.weight, priorAttemptsDescribe: e.target.value } })} />
              </Field>
            )}
          </FormSection>

          {/* Section: Hormone Symptoms */}
          <FormSection id="hormone" n="06" title="Hormone-Related Symptoms" subtitle="Please check all that apply.">
            <div className="grid sm:grid-cols-2 gap-x-5 gap-y-1">
              {HORMONE_SYMPTOMS.map((c) => (
                <CheckboxRow key={c} label={c} checked={data.hormoneSymptoms.includes(c)} onChange={() => toggleArr('hormoneSymptoms', c)} />
              ))}
            </div>
          </FormSection>

          {/* Section: Lifestyle */}
          <FormSection id="lifestyle" n="07" title="Lifestyle">
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Exercise Frequency">
                <input className="input" placeholder="e.g. 3x/week strength + walking" value={data.lifestyle.exercise}
                  onChange={(e) => setData({ ...data, lifestyle: { ...data.lifestyle, exercise: e.target.value } })} />
              </Field>
              <Field label="Diet Pattern">
                <input className="input" placeholder="e.g. Mediterranean, omnivore, low-carb" value={data.lifestyle.diet}
                  onChange={(e) => setData({ ...data, lifestyle: { ...data.lifestyle, diet: e.target.value } })} />
              </Field>
              <Field label="Alcohol Use">
                <select className="input" value={data.lifestyle.alcohol}
                  onChange={(e) => setData({ ...data, lifestyle: { ...data.lifestyle, alcohol: e.target.value } })}>
                  <option value="None">None</option>
                  <option value="Occasional">Occasional</option>
                  <option value="Regular">Regular</option>
                </select>
              </Field>
              <Field label="Tobacco Use">
                <select className="input" value={data.lifestyle.tobacco}
                  onChange={(e) => setData({ ...data, lifestyle: { ...data.lifestyle, tobacco: e.target.value } })}>
                  <option value="No">No</option>
                  <option value="Yes">Yes</option>
                </select>
              </Field>
            </div>
          </FormSection>

          {/* Section: Goals */}
          <FormSection id="goals" n="08" title="Patient Goals" subtitle="Please describe your primary goals for treatment.">
            <Field label="Treatment Goals">
              <textarea className="input resize-none" rows={5} value={data.goals}
                onChange={(e) => setData({ ...data, goals: e.target.value })}
                placeholder="What does success look like for you over the next 6–12 months?" />
            </Field>
          </FormSection>

          {/* Section: Consents */}
          <FormSection id="consents" n="09" title="Required Consents & Acknowledgments"
            subtitle="Please review and acknowledge the following before submitting your intake.">
            <div className="space-y-3">
              <Consent
                checked={data.consents.medicationSafety}
                onChange={(v) => setData({ ...data, consents: { ...data.consents, medicationSafety: v } })}
                title="Medication Safety & Prescribing Policy"
                body="I understand medication recommendations are based on a comprehensive clinical evaluation. Certain medical conditions may limit or prevent the use of specific medications. Treatment decisions are based on physician judgment and safety; prescription is not guaranteed."
              />
              <Consent
                checked={data.consents.telemedicine}
                onChange={(v) => setData({ ...data, consents: { ...data.consents, telemedicine: v } })}
                title="Telemedicine Consent"
                body="I understand telemedicine has limitations compared to in-person evaluation, that technical interruptions may occur, and that my physician may recommend in-person care when appropriate. I understand I should call 911 in the event of a medical emergency. I consent to receive care via telemedicine."
              />
              <Consent
                checked={data.consents.hipaa}
                onChange={(v) => setData({ ...data, consents: { ...data.consents, hipaa: v } })}
                title="HIPAA Privacy Acknowledgment"
                body="I acknowledge I have been provided access to the Notice of Privacy Practices and understand how my medical information may be used for treatment, payment, and healthcare operations."
              />
              <Consent
                checked={data.consents.financial}
                onChange={(v) => setData({ ...data, consents: { ...data.consents, financial: v } })}
                title="Financial Policy"
                body="Velora Medical Institute is a direct-pay practice. Payment is required prior to services; services are not billed to insurance. Medication, laboratory, and pharmacy costs are not included in visit fees."
              />
              <Consent
                checked={data.consents.cancellation}
                onChange={(v) => setData({ ...data, consents: { ...data.consents, cancellation: v } })}
                title="Cancellation Policy"
                body="Appointments must be canceled or rescheduled at least 48 hours in advance. Initial consultation late cancellation: $95. Follow-up visit late cancellation or no-show: $75. Program cancellation incurs early termination fees as stated in the program agreement."
              />
              <Consent
                checked={data.consents.medicalConsent}
                onChange={(v) => setData({ ...data, consents: { ...data.consents, medicalConsent: v } })}
                title="Medical Consent & Medication Risks"
                body="I understand treatment may include prescription medications and have reviewed the possible side effects and risks for both weight management medications and hormone therapy. I understand results vary, ongoing monitoring is required, and I will report side effects promptly. I consent to treatment."
              />
              <Consent
                checked={data.consents.attestation}
                onChange={(v) => setData({ ...data, consents: { ...data.consents, attestation: v } })}
                title="Patient Attestation"
                body="I certify the information provided is accurate and complete. I understand incomplete or inaccurate information may affect my care."
              />
            </div>

            <div className="mt-8 grid sm:grid-cols-2 gap-5">
              <Field label="Type your full name as signature" required>
                <input className="input" required value={data.signatureName}
                  onChange={(e) => setData({ ...data, signatureName: e.target.value })} />
              </Field>
              <Field label="Date" required>
                <input type="date" className="input" required value={data.signatureDate}
                  onChange={(e) => setData({ ...data, signatureDate: e.target.value })} />
              </Field>
            </div>
          </FormSection>

          {/* Submit */}
          <div className="bg-paper border border-line p-7 md:p-10 flex flex-col sm:flex-row gap-5 items-start sm:items-center justify-between">
            <div>
              <p className="eyebrow">Ready to Submit</p>
              <p className="mt-2 text-[14.5px] text-ink-soft leading-relaxed max-w-md">
                {allConsents
                  ? 'All consents acknowledged. Your physician will review your intake before your visit.'
                  : 'Please review and acknowledge each consent above before submitting.'}
              </p>
            </div>
            <button type="submit" disabled={!canSubmit || submitting} className="btn-primary px-7 py-4">
              {submitting ? 'Submitting…' : 'Submit Intake'}
              <ArrowUpRight className="size-3.5" />
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

function FormSection({
  id, n, title, subtitle, children,
}: {
  id: string; n: string; title: string; subtitle?: string; children: React.ReactNode
}) {
  return (
    <section id={id} className="bg-paper border border-line p-7 md:p-10 scroll-mt-32">
      <div className="flex items-baseline gap-4">
        <span className="font-display italic text-gold text-[20px]">{n}</span>
        <div>
          <h2 className="font-display text-[28px] md:text-[34px] leading-tight tracking-[-0.012em] text-ink">{title}</h2>
          {subtitle && <p className="mt-2 text-[14.5px] text-ink-soft leading-relaxed">{subtitle}</p>}
        </div>
      </div>
      <div className="mt-8">{children}</div>
    </section>
  )
}

function Field({ label, required, children, className }: {
  label: string; required?: boolean; children: React.ReactNode; className?: string
}) {
  return (
    <label className={cn('block', className)}>
      <span className="text-[12px] tracking-[0.18em] uppercase text-sage font-medium">
        {label}{required && <span className="text-gold ml-1">*</span>}
      </span>
      <div className="mt-2">{children}</div>
    </label>
  )
}

function CheckboxRow({ label, checked, onChange }: { label: string; checked: boolean; onChange: () => void }) {
  return (
    <label className="checkbox-row">
      <input type="checkbox" checked={checked} onChange={onChange} />
      <span>{label}</span>
    </label>
  )
}

function Consent({
  title, body, checked, onChange,
}: {
  title: string; body: string; checked: boolean; onChange: (v: boolean) => void
}) {
  return (
    <label className={cn(
      'block border p-5 cursor-pointer transition-colors',
      checked ? 'border-sage bg-cream/50' : 'border-line bg-cream/20 hover:border-sage/60',
    )}>
      <div className="flex items-start gap-4">
        <span className={cn(
          'size-5 rounded-sm border-2 shrink-0 flex items-center justify-center mt-0.5 transition-colors',
          checked ? 'border-sage bg-sage' : 'border-line',
        )}>
          {checked && <Check className="size-3 text-cream" />}
        </span>
        <div className="flex-1">
          <p className="font-display text-[18px] leading-tight text-ink">{title}</p>
          <p className="mt-2 text-[13.5px] text-ink-soft leading-relaxed">{body}</p>
        </div>
        <input type="checkbox" className="sr-only" checked={checked} onChange={(e) => onChange(e.target.checked)} required />
      </div>
    </label>
  )
}
