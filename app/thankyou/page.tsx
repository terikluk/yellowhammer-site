import type { Metadata } from 'next'
import Link from 'next/link'
import WaveDivider from '@/components/WaveDivider'
import styles from './page.module.css'

export const metadata: Metadata = { title: 'Thank You' }

export default function ThankYou() {
  return (
    <section className={styles.thankHero}>
      <div className={styles.thankInner}>
        <p className="section-label">Yellowhammer Studios</p>
        <h1 className={styles.thankH1}>
          Message
          <br />
          <em>Received.</em>
        </h1>
        <p className={styles.thankTagline}>
          Thank you for reaching out. We&rsquo;ll be in touch within 48 hours.
        </p>
        <p className={styles.exploreText}>
          In the meantime, feel free to explore our work.
        </p>
        <div className={styles.btnRow}>
          <Link href="/portfolio" className="btn">
            View Our Work
          </Link>
          <Link href="/services" className="btn">
            Our Services
          </Link>
        </div>
      </div>
      <div className={styles.sectionWave}>
        <WaveDivider fill="var(--espresso)" />
      </div>
    </section>
  )
}
