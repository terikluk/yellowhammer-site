import type { Metadata } from 'next'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'The terms that govern your use of the Yellowhammer Studios website.',
}

export default function Terms() {
  return (
    <section className={styles.legalPage}>
      <div className={styles.introBlock}>
        <p className="section-label" style={{ textAlign: 'center' } as React.CSSProperties}>
          Legal
        </p>
        <h1 className={styles.heading}>Terms of Service</h1>
        <p className={styles.lastUpdated}>Last updated: July 15, 2026</p>
      </div>

      <div className={styles.divider} />

      <div className={styles.content}>
        <div className={styles.section}>
          <p>
            These terms govern your use of this website. By using this
            site, you agree to them. If you don&rsquo;t agree, please
            don&rsquo;t use the site.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Use of This Website</h2>
          <p>
            This website is provided to share information about
            Yellowhammer Studios and its services, and to let you get in
            touch or start a project. You agree to use it only for these
            purposes, and not to misuse it &mdash; including attempting to
            scrape, copy, or reverse-engineer the site, or submitting
            false or malicious information through our forms.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Intellectual Property</h2>
          <p>
            The design, text, graphics, and other content on this website
            belong to Yellowhammer Studios and may not be copied or reused
            without permission. Work created for a client project is
            governed separately by that project&rsquo;s signed agreement,
            not by these terms.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>No Professional Advice</h2>
          <p>
            Content on this site is provided for general informational
            purposes and doesn&rsquo;t constitute legal, financial, or
            professional advice specific to your situation.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Third-Party Links</h2>
          <p>
            This site may link to external websites we don&rsquo;t control.
            We aren&rsquo;t responsible for the content or practices of
            those sites.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>No Warranties</h2>
          <p>
            This website is provided &ldquo;as is&rdquo; without
            warranties of any kind, express or implied. We don&rsquo;t
            guarantee the site will always be available, error-free, or
            uninterrupted.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, Yellowhammer Studios
            isn&rsquo;t liable for any indirect, incidental, or
            consequential damages arising from your use of this website.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Governing Law</h2>
          <p>
            These terms are governed by the laws of the State of Alabama,
            without regard to conflict-of-law principles.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Changes to These Terms</h2>
          <p>
            We may update these terms from time to time. Changes will be
            posted on this page with an updated revision date.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Contact Us</h2>
          <p>
            Questions about these terms? Email{' '}
            <a href="mailto:tkluk@yellowhammerstudios.com">
              tkluk@yellowhammerstudios.com
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  )
}
