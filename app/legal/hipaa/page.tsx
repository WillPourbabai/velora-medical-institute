import type { Metadata } from 'next'
import { LegalPage } from '@/components/site/legal-page'

export const metadata: Metadata = {
  title: 'HIPAA Notice of Privacy Practices',
  description: 'Velora Medical Institute Notice of Privacy Practices for Protected Health Information.',
}

export default function HipaaPage() {
  return (
    <LegalPage
      eyebrow="Legal · HIPAA"
      title="Notice of Privacy Practices"
      lastUpdated="May 2026"
      intro="This notice describes how medical information about you may be used and disclosed and how you can get access to this information. Please review it carefully."
      sections={[
        {
          heading: 'Our Commitment to Your Privacy',
          body: (
            <p>Velora Medical Institute is required by law to maintain the privacy of your Protected Health Information (PHI), provide this notice of our legal duties and privacy practices, and follow the terms of this notice.</p>
          ),
        },
        {
          heading: 'How We May Use and Disclose Your PHI',
          body: (
            <>
              <p><strong className="text-ink font-medium">Treatment.</strong> We use and disclose your PHI to provide, coordinate, and manage your medical care.</p>
              <p><strong className="text-ink font-medium">Payment.</strong> We may use and disclose your PHI for billing and payment purposes related to the services you receive.</p>
              <p><strong className="text-ink font-medium">Healthcare Operations.</strong> We may use and disclose your PHI to support our internal business operations such as quality assessment, training, and accreditation.</p>
            </>
          ),
        },
        {
          heading: 'Your Rights',
          body: (
            <>
              <p>You have the right to inspect and copy your medical records, request an amendment, request a list of disclosures, request restrictions on certain uses, and request confidential communications.</p>
              <p>To exercise any of these rights, please email care@veloramedical.com.</p>
            </>
          ),
        },
        {
          heading: 'Complaints',
          body: (
            <p>If you believe your privacy rights have been violated, you may file a complaint with us or with the U.S. Department of Health and Human Services. You will not be retaliated against for filing a complaint.</p>
          ),
        },
      ]}
    />
  )
}
