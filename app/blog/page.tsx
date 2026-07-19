import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Reveal from '@/components/Reveal'
import WaveDivider from '@/components/WaveDivider'
import client from '@/tina/__generated__/client'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Behind-the-scenes updates, design thinking, and stories from Yellowhammer Studios projects.',
}

export const revalidate = 60

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default async function Blog() {
  const { data } = await client.queries.postConnection({ sort: 'date' })
  const posts = (data.postConnection.edges ?? [])
    .map((edge) => edge?.node)
    .filter((node): node is NonNullable<typeof node> => Boolean(node))
    .reverse()

  return (
    <>
      <section className={styles.blogListHero}>
        <div className={styles.blogListHeroInner}>
          <div className={styles.blogListHeroText}>
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
          <div className={styles.blogListHeroImgWrap}>
            <Image
              src="/blog-hero.jpg"
              alt=""
              fill
              sizes="(max-width: 900px) 100vw, 480px"
              className={styles.blogListHeroImg}
              priority
            />
          </div>
        </div>
      </section>

      <section className={styles.postsSection}>
        {posts.length === 0 ? (
          <p className={styles.empty}>No posts yet — check back soon.</p>
        ) : (
          <div className={styles.postsGrid}>
            {posts.map((post, i) => (
              <Reveal key={post._sys.filename} delay={i * 100} className={styles.postCard}>
                <Link href={`/blog/${post._sys.filename}`} className={styles.postCardLink}>
                  {post.coverImage && (
                    <div className={styles.postCardImageWrap}>
                      <Image
                        src={post.coverImage}
                        alt=""
                        width={600}
                        height={400}
                        className={styles.postCardImage}
                      />
                    </div>
                  )}
                  <div className={styles.postCardBody}>
                    <p className={styles.postCardDate}>{formatDate(post.date)}</p>
                    <h2 className={styles.postCardTitle}>{post.title}</h2>
                    {post.excerpt && <p className={styles.postCardExcerpt}>{post.excerpt}</p>}
                    <span className={styles.postCardReadMore}>Read More →</span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        )}
        <div className={styles.postsWave}>
          <WaveDivider fill="var(--espresso)" />
        </div>
      </section>
    </>
  )
}
