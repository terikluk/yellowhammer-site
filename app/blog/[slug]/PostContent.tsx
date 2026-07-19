'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useTina, tinaField } from 'tinacms/dist/react'
import { TinaMarkdown } from 'tinacms/dist/rich-text'
import Reveal from '@/components/Reveal'
import WaveDivider from '@/components/WaveDivider'
import type { PostQuery } from '@/tina/__generated__/types'
import styles from '../page.module.css'
import postStyles from './post.module.css'

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default function PostContent(props: {
  query: string
  variables: { relativePath: string }
  data: PostQuery
}) {
  const { data } = useTina(props)
  const post = data.post

  return (
    <>
      <section className={styles.blogHero}>
        <div className={styles.blogHeroInner}>
          <p className="section-label" data-tina-field={tinaField(post, 'date')}>
            {formatDate(post.date)}
          </p>
          <h1 className={styles.blogHeroH1} data-tina-field={tinaField(post, 'title')}>
            {post.title}
          </h1>
          {post.author && (
            <p className={styles.blogHeroTagline} data-tina-field={tinaField(post, 'author')}>
              By {post.author}
            </p>
          )}
        </div>
      </section>

      <section className={postStyles.postSection}>
        {post.coverImage && (
          <Reveal className={postStyles.postCoverWrap}>
            <Image
              src={post.coverImage}
              alt=""
              width={1200}
              height={700}
              className={postStyles.postCover}
              data-tina-field={tinaField(post, 'coverImage')}
              priority
            />
          </Reveal>
        )}
        <Reveal
          variant="text"
          className={postStyles.postBody}
          data-tina-field={tinaField(post, 'body')}
        >
          <TinaMarkdown content={post.body} />
        </Reveal>
        <Reveal variant="text" className={postStyles.postBack}>
          <Link href="/blog" className="btn">
            ← Back to Blog
          </Link>
        </Reveal>
        <div className={styles.postsWave}>
          <WaveDivider fill="var(--espresso)" />
        </div>
      </section>
    </>
  )
}
