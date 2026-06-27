'use client'

import { useState, useEffect } from 'react'
import ScaledIframe from './ScaledIframe'
import styles from './page.module.css'

type Project = {
  slug: string
  title: string
  desc: string
  iframeTitle: string
  iframeClass: string
  liveUrl?: string
  type?: 'client' | 'concept'
}

export default function WebsiteCarousel({ projects }: { projects: Project[] }) {
  const [index, setIndex] = useState(0)
  const [perPage, setPerPage] = useState(2)

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 900px)')
    const update = () => {
      setPerPage(mq.matches ? 1 : 2)
      setIndex(0)
    }
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  const total = projects.length
  const pageCount = Math.ceil(total / perPage)
  const visible = projects.slice(index * perPage, index * perPage + perPage)

  return (
    <div className={styles.carousel}>
      <div className={styles.carouselTrack}>
        {visible.map((p) => (
          <div key={p.slug} className={styles.card}>
            <a
              href={p.liveUrl ?? `/${p.slug}.html`}
              className={styles.imgLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={styles.imgWrap}>
                <ScaledIframe
                  src={p.liveUrl ?? `/${p.slug}.html`}
                  title={p.iframeTitle}
                  iframeHeight={p.slug === 'linea-group' ? 900 : 720}
                />
              </div>
            </a>
            <div className={styles.meta}>
              <span className={styles.cat}>Website Design</span>
              <h3 className={styles.cardTitle}>{p.title}</h3>
              <p className={styles.cardDesc}>{p.desc}</p>
              <div className={styles.cardFooter}>
                <a
                  href={p.liveUrl ?? `/${p.slug}.html`}
                  className={styles.portLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Site &rarr;
                </a>
                <span className={p.type === 'client' ? styles.badgeClient : styles.badgeConcept}>
                  {p.type === 'client' ? 'Client Project' : 'Concept Project'}
                </span>
              </div>
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
