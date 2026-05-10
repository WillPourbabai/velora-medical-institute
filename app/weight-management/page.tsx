import type { Metadata } from 'next'
import { loadPageSchema } from '@/lib/editor/server'
import { getDefaultSchema } from '@/lib/editor/initial-schemas'
import { PublicPageRenderer } from '@/components/editor/PublicPageRenderer'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Medical Weight Management',
  description:
    'Physician-guided GLP-1 weight management. Personalized plans, evidence-based medication, and ongoing care to lose weight, improve metabolism, and keep it off.',
}

export default async function WeightManagementPage() {
  const saved = await loadPageSchema('weight-management')
  const schema = saved ?? getDefaultSchema('weight-management')
  return <PublicPageRenderer schema={schema} />
}
