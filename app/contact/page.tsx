import type { Metadata } from 'next'
import Hero from '@/components/Hero'
import styles from './page.module.css'

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

            <form
              className={styles.form}
              name="contact"
              method="post"
              action="/thankyou"
              data-netlify="true"
            >
              <input type="hidden" name="form-name" value="contact" />

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="name">Full Name</label>
                  <input type="text" id="name" name="name" autoComplete="name" />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="business">Business Name</label>
                  <input type="text" id="business" name="business" autoComplete="organization" />
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" name="email" autoComplete="email" />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="phone">
                    Phone Number{' '}
                    <span className={styles.optional}>(optional)</span>
                  </label>
                  <input type="tel" id="phone" name="phone" autoComplete="tel" />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="project-type">Project Type</label>
                <select id="project-type" name="project-type" defaultValue="">
                  <option value="" disabled />
                  <option value="logo-brand">Logo &amp; Brand Identity</option>
                  <option value="website">Website Design &amp; Development</option>
                  <option value="social">Social Media Design</option>
                  <option value="maintenance">Website Maintenance</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Tell us about your project..."
                />
              </div>

              <button type="submit" className={styles.submit}>
                Send Message
              </button>
            </form>
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
