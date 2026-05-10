import type { Metadata } from 'next'
import { loadPageSchema } from '@/lib/editor/server'
import { getDefaultSchema } from '@/lib/editor/initial-schemas'
import { PublicPageRenderer } from '@/components/editor/PublicPageRenderer'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'About Velora Medical Institute',
  description:
    'Velora Medical Institute is a physician-directed, direct-pay telemedicine practice focused on metabolic health, weight management, and hormone optimization.',
}

export default async function AboutPage() {
  const saved = await loadPageSchema('about')
  const schema = saved ?? getDefaultSchema('about')
  return <PublicPageRenderer schema={schema} />
}
