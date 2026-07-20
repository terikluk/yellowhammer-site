import type { MetadataRoute } from 'next'
import client from '@/tina/__generated__/client'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = 'https://yellowhammerstudios.com'

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: base, lastModified: new Date(), changeFrequency: 'monthly', priority: 1 },
    { url: `${base}/portfolio`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/services`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/blog`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/contact`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.6 },
    { url: `${base}/privacy`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.2 },
    { url: `${base}/terms`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.2 },
  ]

  let postRoutes: MetadataRoute.Sitemap = []
  try {
    const { data } = await client.queries.postConnection()
    postRoutes = (data.postConnection.edges ?? [])
      .map((edge) => edge?.node)
      .filter((node): node is NonNullable<typeof node> => Boolean(node))
      .map((post) => ({
        url: `${base}/blog/${post._sys.filename}`,
        lastModified: new Date(post.date),
        changeFrequency: 'yearly' as const,
        priority: 0.6,
      }))
  } catch {
    // if Tina content can't be fetched at build time, still ship the static routes
  }

  return [...staticRoutes, ...postRoutes]
}
