import type { Metadata } from 'next'
import { LegalPage } from '@/components/site/legal-page'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Velora Medical Institute Terms of Service, including financial, telemedicine, and cancellation policies.',
}

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Terms of Service"
      lastUpdated="May 2026"
      intro="By accessing the Velora Medical Institute website or scheduling care with our practice, you agree to the following terms."
      sections={[
        {
          heading: 'Direct-Pay Practice',
          body: (
            <p>Velora Medical Institute is a direct-pay medical practice. Services are not billed to insurance. Payment is required prior to services. Medication, laboratory, and pharmacy costs are billed separately by the respective provider.</p>
          ),
        },
        {
          heading: 'Telemedicine Care',
          body: (
            <p>Care is delivered through secure telemedicine. You acknowledge that telemedicine has limitations compared to in-person evaluation, and that your physician may recommend in-person care when appropriate.</p>
          ),
        },
        {
          heading: 'Cancellation Policy',
          body: (
            <>
              <p>Appointments must be canceled or rescheduled at least 24 hours in advance. Initial consultation late cancellation: $95. Follow-up visit late cancellation or no-show: $75.</p>
              <p>Patients enrolled in structured programs may cancel at any time. In the event of early termination: Weight Management Program — $400 fee; Hormone Therapy Program — $250 fee. These fees reflect the reduced per-visit investment associated with program-based care.</p>
            </>
          ),
        },
        {
          heading: 'No Medical Advice on the Website',
          body: (
            <p>Information on this website is for general educational purposes and is not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of a qualified physician with any questions you may have regarding a medical condition.</p>
          ),
        },
        {
          heading: 'Intellectual Property',
          body: (
            <p>All content on this website, including text, graphics, logos, and images, is the property of Velora Medical Institute or its licensors and is protected by intellectual property laws.</p>
          ),
        },
        {
          heading: 'Contact',
          body: (
            <p>Questions about these terms can be directed to <a href="mailto:care@veloramedical.com" className="underline underline-offset-2">care@veloramedical.com</a>.</p>
          ),
        },
      ]}
    />
  )
}
