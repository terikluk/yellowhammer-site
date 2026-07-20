import type { Metadata } from 'next'
import Image from 'next/image'
import WaveDivider from '@/components/WaveDivider'
import client from '@/tina/__generated__/client'
import PostsCarousel from './PostsCarousel'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Behind-the-scenes updates, design thinking, and stories from Yellowhammer Studios projects.',
}

export const revalidate = 60

export default async function Blog() {
  const { data } = await client.queries.postConnection({ sort: 'date' })
  const posts = (data.postConnection.edges ?? [])
    .map((edge) => edge?.node)
    .filter((node): node is NonNullable<typeof node> => Boolean(node))
    .reverse()

  return (
    <>
      <section className={styles.blogListHero}>
        <Image
          src="/blog-hero.png"
          alt=""
          aria-hidden="true"
          width={1382}
          height={732}
          priority
          className={styles.blogListHeroImg}
        />
        <div className={styles.blogListHeroInner}>
          <p className="section-label">The Blog</p>
          <h1 className={styles.blogHeroH1}>
            Notes from
            <br />
            <em>the Studio</em>
          </h1>
          <p className={styles.blogHeroTagline}>
            Behind-the-scenes updates, design thinking, and stories from
            projects we&rsquo;re proud of.
          </p>
        </div>
      </section>

      <section className={styles.postsSection}>
        {posts.length === 0 ? (
          <p className={styles.empty}>No posts yet — check back soon.</p>
        ) : (
          <PostsCarousel posts={posts} />
        )}
        <div className={styles.postsWave}>
          <WaveDivider fill="var(--espresso)" />
        </div>
      </section>
    </>
  )
}
