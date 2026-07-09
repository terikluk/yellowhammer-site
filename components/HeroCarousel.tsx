'use client'

import { useEffect, useState } from 'react'
import styles from './HeroCarousel.module.css'

export interface HeroCarouselItem {
  src: string
  caption: string
}

interface HeroCarouselProps {
  items: HeroCarouselItem[]
  interval?: number
}

function positionClass(diff: number) {
  if (diff === 0) return styles.imgCenter
  if (diff === 1) return styles.imgNext
  return styles.imgPrev
}

export default function HeroCarousel({ items, interval = 4800 }: HeroCarouselProps) {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setActive((i) => (i + 1) % items.length)
    }, interval)
    return () => clearInterval(id)
  }, [items.length, interval])

  return (
    <div className={styles.wrap} aria-hidden="true">
      <div className={styles.rotator}>
        {items.map((item, i) => {
          const diff = (i - active + items.length) % items.length
          return (
            <img
              key={item.src}
              src={item.src}
              alt=""
              className={`${styles.img} ${positionClass(diff)}`}
            />
          )
        })}
      </div>
      <div className={styles.caption}>
        {items.map((item, i) => (
          <span
            key={item.src}
            className={`${styles.captionText} ${i === active ? styles.captionActive : ''}`}
          >
            {item.caption}
          </span>
        ))}
      </div>
    </div>
  )
}
