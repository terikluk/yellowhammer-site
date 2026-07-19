import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import client from '@/tina/__generated__/client'
import PostContent from './PostContent'

export const revalidate = 60

export async function generateStaticParams() {
  const { data } = await client.queries.postConnection()
  return (data.postConnection.edges ?? [])
    .map((edge) => edge?.node?._sys.filename)
    .filter((slug): slug is string => Boolean(slug))
    .map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  try {
    const { data } = await client.queries.post({ relativePath: `${slug}.md` })
    return {
      title: data.post.title,
      description: data.post.excerpt || undefined,
    }
  } catch {
    return {}
  }
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const variables = { relativePath: `${slug}.md` }

  let result
  try {
    result = await client.queries.post(variables)
  } catch {
    notFound()
  }

  return <PostContent query={result.query} variables={variables} data={result.data} />
}
