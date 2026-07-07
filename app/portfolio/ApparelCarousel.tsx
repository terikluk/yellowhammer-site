'use client'

import { useState, useEffect } from 'react'
import styles from './page.module.css'

type ApparelItem = {
  src: string
  alt: string
  title: string
}

export default function ApparelCarousel({ items }: { items: ApparelItem[] }) {
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
      <div className={styles.apparelTrack}>
        {visible.map((item) => (
          <div key={item.src} className={styles.card}>
            <div className={styles.apparelImgWrap}>
              <img src={item.src} alt={item.alt} className={styles.apparelImg} />
            </div>
            <div className={`${styles.meta} ${styles.logoMeta}`}>
              <span className={styles.cat}>Apparel Design</span>
              <h3 className={styles.cardTitle}>{item.title}</h3>
            </div>
          </div>
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
