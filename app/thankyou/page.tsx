import type { Metadata } from 'next'
import Link from 'next/link'
import styles from './page.module.css'

export const metadata: Metadata = { title: 'Thank You' }

export default function ThankYou() {
  return (
    <>
      <section className={styles.hero}>
        <img
          src="/Business Card 1.jpg"
          alt=""
          className={styles.heroImg}
          aria-hidden="true"
        />
        <div className={styles.heroContent}>
          <p className={styles.eyebrow}>Yellowhammer Studios</p>
          <h1 className={styles.h1}>
            Message
            <br />
            <em>Received.</em>
          </h1>
          <p className={styles.tagline}>
            Thank you for reaching out. We&rsquo;ll be in touch within 48
            hours.
          </p>
          <div className="amber-rule" />
        </div>
      </section>

      <section id="explore">
        <div className={styles.explore}>
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
      </section>
    </>
  )
}
