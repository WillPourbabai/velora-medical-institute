import type { Metadata } from 'next'
import { LegalPage } from '@/components/site/legal-page'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How Velora Medical Institute collects, uses, and safeguards your information.',
}

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Privacy Policy"
      lastUpdated="May 2026"
      intro="Velora Medical Institute (“Velora,” “we,” “us”) is committed to protecting the privacy of patients and visitors. This Privacy Policy explains what information we collect, how we use it, and the choices you have regarding your information."
      sections={[
        {
          heading: 'Information We Collect',
          body: (
            <>
              <p>We collect information you provide when you book a consultation, complete patient intake, or contact our team — including name, contact details, demographic information, medical history, and treatment preferences.</p>
              <p>We also collect technical information such as browser type, device, and pages visited, used to maintain and improve our website.</p>
            </>
          ),
        },
        {
          heading: 'How We Use Your Information',
          body: (
            <>
              <p>We use your information to schedule appointments, deliver clinical care, process payments, fulfill legal and regulatory obligations, and communicate with you about your treatment.</p>
              <p>Protected Health Information (PHI) is governed by our HIPAA Notice of Privacy Practices.</p>
            </>
          ),
        },
        {
          heading: 'Sharing of Information',
          body: (
            <>
              <p>We share your information only as needed to provide care, with payment processors, laboratory and pharmacy partners involved in your treatment, and where required by law. We do not sell your personal information.</p>
            </>
          ),
        },
        {
          heading: 'Security',
          body: (
            <p>We use administrative, technical, and physical safeguards designed to protect the confidentiality and integrity of your information. No method of transmission or storage is fully secure, and we cannot guarantee absolute security.</p>
          ),
        },
        {
          heading: 'Your Choices',
          body: (
            <p>You may request access, correction, or deletion of your personal information by emailing care@veloramedical.com. Certain medical records are retained for the duration required by applicable law.</p>
          ),
        },
        {
          heading: 'Contact',
          body: (
            <p>Questions about this policy can be directed to <a href="mailto:care@veloramedical.com" className="underline underline-offset-2">care@veloramedical.com</a>.</p>
          ),
        },
      ]}
    />
  )
}
