'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Reveal from '@/components/Reveal'
import styles from './page.module.css'

type Post = {
  _sys: { filename: string }
  coverImage?: string | null
  date: string
  title: string
  excerpt?: string | null
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default function PostsCarousel({ posts }: { posts: Post[] }) {
  const [index, setIndex] = useState(0)
  const [perPage, setPerPage] = useState(3)

  useEffect(() => {
    const mqMobile = window.matchMedia('(max-width: 640px)')
    const mqTablet = window.matchMedia('(max-width: 900px)')
    const update = () => {
      setPerPage(mqMobile.matches ? 1 : mqTablet.matches ? 2 : 3)
      setIndex(0)
    }
    update()
    mqMobile.addEventListener('change', update)
    mqTablet.addEventListener('change', update)
    return () => {
      mqMobile.removeEventListener('change', update)
      mqTablet.removeEventListener('change', update)
    }
  }, [])

  const pageCount = Math.ceil(posts.length / perPage)
  const visible = posts.slice(index * perPage, index * perPage + perPage)

  return (
    <div className={styles.postsCarousel}>
      <div className={styles.postsGrid}>
        {visible.map((post, i) => (
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

      {pageCount > 1 && (
        <div className={styles.carouselControls}>
          <button
            className={styles.arrowBtn}
            onClick={() => setIndex((i) => Math.max(i - 1, 0))}
            disabled={index === 0}
            aria-label="Previous posts"
          >
            &#8592;
          </button>

          <div className={styles.dots}>
            {Array.from({ length: pageCount }).map((_, i) => (
              <button
                key={i}
                className={`${styles.dot} ${i === index ? styles.dotActive : ''}`}
                onClick={() => setIndex(i)}
                aria-label={`Go to page ${i + 1}`}
              />
            ))}
          </div>

          <button
            className={styles.arrowBtn}
            onClick={() => setIndex((i) => Math.min(i + 1, pageCount - 1))}
            disabled={index === pageCount - 1}
            aria-label="Next posts"
          >
            &#8594;
          </button>
        </div>
      )}
    </div>
  )
}
