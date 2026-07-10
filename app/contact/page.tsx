import type { Metadata } from 'next'
import styles from './page.module.css'
import ContactForm from './ContactForm'
import WaveDivider from '@/components/WaveDivider'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Start a project with Yellowhammer Studios. We take on a small number of clients each year and give each one our full attention.',
}

export default function Contact() {
  return (
    <section className={styles.contactHero}>
      <img
        src="/yellowhammer_3.png"
        alt=""
        aria-hidden="true"
        className={styles.contactHeroImg}
      />
      <div className={styles.contactHeroFade} aria-hidden="true" />
      <div className={styles.contactCardWrap}>
        <div className={styles.amberPanel}>
          <p className={`${styles.eyebrowLight} fade-up-in`} style={{ animationDelay: '0.1s' }}>
            Get in Touch
          </p>
          <h1 className={`${styles.contactHeading} fade-up-in`} style={{ animationDelay: '0.22s' }}>
            Let&rsquo;s Build <em>Something</em>
          </h1>
        </div>

        <div className={`${styles.card} fade-up-in`} style={{ animationDelay: '0.34s' }}>
          <ContactForm />

          <div className={styles.infoRow}>
            <div className={styles.infoBlock}>
              <p className={styles.infoLabel}>Email</p>
              <a href="mailto:tkluk@yellowhammerstudios.com">
                tkluk@yellowhammerstudios.com
              </a>
            </div>
            <div className={styles.infoBlock}>
              <p className={styles.infoLabel}>Phone</p>
              <a href="tel:8324250224">832-425-0224</a>
            </div>
            <div className={styles.infoBlock}>
              <p className={styles.infoLabel}>Location</p>
              <p>Huntsville, AL</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.sectionWave}>
        <WaveDivider fill="var(--espresso)" />
      </div>
    </section>
  )
}
