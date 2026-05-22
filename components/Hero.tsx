import Link from 'next/link'
import styles from './Hero.module.css'

interface HeroProps {
  eyebrow: string
  h1Line1: string
  h1Em: string
  tagline?: string
  cta?: { href: string; label: string }
}

export default function Hero({ eyebrow, h1Line1, h1Em, tagline, cta }: HeroProps) {
  return (
    <section className={styles.hero}>
      <img
        src="/Gold_Circle.png"
        alt=""
        className={styles.agateImg}
        aria-hidden="true"
      />
      <div className={styles.content}>
        <p className={styles.eyebrow}>{eyebrow}</p>
        <h1 className={styles.h1}>
          {h1Line1}
          <br />
          <em>{h1Em}</em>
        </h1>
        <div className="amber-rule" />
        {tagline && <p className={styles.tagline}>{tagline}</p>}
        {cta && (
          <Link href={cta.href} className="btn">
            {cta.label}
          </Link>
        )}
      </div>
      <div className={styles.scrollIndicator} aria-hidden="true">
        <span />
      </div>
    </section>
  )
}
