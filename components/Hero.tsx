import Link from 'next/link'
import Image from 'next/image'
import styles from './Hero.module.css'

interface HeroProps {
  eyebrow: string
  h1Line1: string
  h1Em: string
  tagline?: string
  cta?: { href: string; label: string }
  theme?: 'dark' | 'light'
  image?: string
  video?: string
  compact?: boolean
}

export default function Hero({ eyebrow, h1Line1, h1Em, tagline, cta, theme = 'dark', image = '/yellowhammer_hero.png', video, compact = false }: HeroProps) {
  if (theme === 'light') {
    return (
      <section className={`${styles.heroLight} ${compact ? styles.heroLightCompact : ''}`}>
        {video ? (
          <video
            className={styles.heroLightImage}
            src={video}
            poster={image}
            autoPlay
            muted
            loop
            playsInline
            aria-hidden="true"
          />
        ) : (
          <Image
            className={styles.heroLightImage}
            src={image}
            alt=""
            aria-hidden="true"
            fill
            sizes="100vw"
            priority
          />
        )}
        <div className={styles.heroLightGradient} aria-hidden="true" />
        <div className={styles.heroLightFade} aria-hidden="true" />
        <div className={styles.heroLightNavScrim} aria-hidden="true" />
        <div className={styles.heroLightContent}>
          <p className={styles.eyebrowLight}>{eyebrow}</p>
          <h1 className={styles.h1Light}>
            {h1Line1}
            <br />
            <em>{h1Em}</em>
          </h1>
          {tagline && <p className={styles.taglineLight}>{tagline}</p>}
          {cta && (
            <Link href={cta.href} className={`btn ${styles.heroLightCta}`}>
              {cta.label}
            </Link>
          )}
        </div>
      </section>
    )
  }

  return (
    <section className={styles.hero}>
      <Image
        src="/Gold_Circle.png"
        alt=""
        className={styles.agateImg}
        aria-hidden="true"
        width={800}
        height={800}
        priority
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
