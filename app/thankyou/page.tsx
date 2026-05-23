import type { Metadata } from 'next'
import Link from 'next/link'
import Hero from '@/components/Hero'
import styles from './page.module.css'

export const metadata: Metadata = { title: 'Thank You' }

export default function ThankYou() {
  return (
    <>
      <Hero
        eyebrow="Yellowhammer Studios"
        h1Line1="Message"
        h1Em="Received."
        tagline="Thank you for reaching out. We'll be in touch within 48 hours."
      />

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
