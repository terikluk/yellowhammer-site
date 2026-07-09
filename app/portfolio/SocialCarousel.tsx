'use client'

import { useState, useEffect } from 'react'
import Reveal from '@/components/Reveal'
import styles from './page.module.css'

type SocialItem = {
  src: string
  alt: string
  title: string
  type: 'client' | 'concept' | 'inhouse'
}

export default function SocialCarousel({ items }: { items: SocialItem[] }) {
  const [index, setIndex] = useState(0)
  const [perPage, setPerPage] = useState(3)

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 700px)')
    const update = () => {
      setPerPage(mq.matches ? 2 : 3)
      setIndex(0)
    }
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  const pageCount = Math.ceil(items.length / perPage)
  const visible = items.slice(index * perPage, index * perPage + perPage)

  return (
    <div className={styles.carousel}>
      <div className={styles.socialGrid}>
        {visible.map((p, i) => (
          <Reveal key={p.src} className={styles.card} delay={i * 120}>
            <div className={styles.squareFrame}>
              <div className={styles.squareImgWrap}>
                <img src={p.src} alt={p.alt} className={styles.fillImg} />
              </div>
            </div>
            <div className={styles.meta}>
              <span className={styles.cat}>Social Media</span>
              <h3 className={styles.cardTitle}>{p.title}</h3>
              <span className={p.type === 'client' ? styles.badgeClient : styles.badgeConcept}>
                {p.type === 'client' ? 'Client Project' : p.type === 'inhouse' ? 'In-House' : 'Concept Project'}
              </span>
            </div>
          </Reveal>
        ))}
      </div>

      {pageCount > 1 && (
        <div className={styles.carouselControls}>
          <button
            className={styles.arrowBtn}
            onClick={() => setIndex((i) => Math.max(i - 1, 0))}
            disabled={index === 0}
            aria-label="Previous"
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
            aria-label="Next"
          >
            &#8594;
          </button>
        </div>
      )}
    </div>
  )
}
