'use client'

import { useState, useEffect } from 'react'
import Reveal from '@/components/Reveal'
import styles from './page.module.css'

type LogoItem = {
  src: string
  alt: string
  title: string
  extraPad: boolean
  type: 'client' | 'concept' | 'inhouse'
}

export default function LogoCarousel({ items }: { items: LogoItem[] }) {
  const [index, setIndex] = useState(0)
  const [perPage, setPerPage] = useState(4)

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 700px)')
    const update = () => {
      setPerPage(mq.matches ? 2 : 4)
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
      <div className={styles.logoGrid}>
        {visible.map((p, i) => (
          <Reveal key={p.src} className={styles.logoCard} delay={i * 90}>
            <div
              className={styles.logoImgWrap}
              style={p.extraPad ? { padding: '8%' } : undefined}
            >
              <img src={p.src} alt={p.alt} className={styles.logoImg} />
            </div>
            <div className={`${styles.meta} ${styles.logoMeta}`}>
              <span className={styles.cat}>Logo Design</span>
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
