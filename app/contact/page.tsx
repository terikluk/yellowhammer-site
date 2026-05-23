import type { Metadata } from 'next'
import Hero from '@/components/Hero'
import styles from './page.module.css'
import ContactForm from './ContactForm'

export const metadata: Metadata = { title: 'Contact' }

export default function Contact() {
  return (
    <>
      <Hero
        eyebrow="Get in Touch"
        h1Line1="Let's Build"
        h1Em="Something"
        tagline="Tell us about your project and we'll be in touch within 48 hours."
      />

      <section id="contact" className={styles.contactSection}>
        <div className={styles.contactInner}>

          <div className={styles.formCol}>
            <p className="section-label">Send a Message</p>
            <h2 className={styles.h2}>
              Tell us about your
              <br />
              <em>project</em>
            </h2>
            <p className={styles.formIntro}>
              We take on a select number of projects. Every client gets our full
              attention.
            </p>

            <ContactForm />
          </div>

          <div className={styles.infoCol}>
            <div className={styles.infoBlock}>
              <p className={styles.infoLabel}>Email</p>
              <a href="mailto:tkluk@yellowhammerstudios.com">
                tkluk@yellowhammerstudios.com
              </a>
            </div>
            <div className={styles.infoDivider} />
            <div className={styles.infoBlock}>
              <p className={styles.infoLabel}>Phone</p>
              <a href="tel:8324250224">832-425-0224</a>
            </div>
            <div className={styles.infoDivider} />
            <div className={styles.infoBlock}>
              <p className={styles.infoLabel}>Location</p>
              <p>Huntsville, AL</p>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}
