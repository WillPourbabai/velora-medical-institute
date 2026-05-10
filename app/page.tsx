import { loadPageSchema } from '@/lib/editor/server'
import { getDefaultSchema } from '@/lib/editor/initial-schemas'
import { PublicPageRenderer } from '@/components/editor/PublicPageRenderer'

// Re-evaluate schema on each request so saves show up without a rebuild
export const dynamic = 'force-dynamic'

export default async function HomePage() {
  const saved = await loadPageSchema('home')
  const schema = saved ?? getDefaultSchema('home')
  return <PublicPageRenderer schema={schema} />
}
