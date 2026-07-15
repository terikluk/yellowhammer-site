import type { Metadata } from 'next'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'How Yellowhammer Studios collects, uses, and protects information submitted through this website.',
}

export default function Privacy() {
  return (
    <section className={styles.legalPage}>
      <div className={styles.introBlock}>
        <p className="section-label" style={{ textAlign: 'center' } as React.CSSProperties}>
          Legal
        </p>
        <h1 className={styles.heading}>Privacy Policy</h1>
        <p className={styles.lastUpdated}>Last updated: July 15, 2026</p>
      </div>

      <div className={styles.divider} />

      <div className={styles.content}>
        <div className={styles.section}>
          <p>
            Yellowhammer Studios (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or
            &ldquo;our&rdquo;) respects your privacy. This policy explains
            what information we collect through this website, how we use
            it, and the choices you have.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Information We Collect</h2>
          <p>
            When you use our Contact form or Start Your Project
            questionnaire, we collect the information you choose to
            provide, which may include your name, business name, email
            address, phone number, project details, and any files you
            upload (such as logos or brand materials).
          </p>
          <p>
            We also use Google Analytics to understand general site usage
            &mdash; such as which pages are visited and how long people
            stay &mdash; which relies on cookies and similar technology.
            This data is aggregated and not tied to your name or contact
            details.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>How We Use Your Information</h2>
          <p>We use the information you submit to:</p>
          <ul>
            <li>Respond to your inquiry or questionnaire submission</li>
            <li>Understand your business and plan a project scope</li>
            <li>Communicate with you about your project</li>
          </ul>
          <p>
            We do not sell, rent, or trade your information to third
            parties for marketing purposes.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Third-Party Services</h2>
          <p>We rely on a small number of trusted services to run this site:</p>
          <ul>
            <li>
              <strong>Resend</strong> &mdash; delivers form submissions to
              our inbox by email
            </li>
            <li>
              <strong>Google Analytics</strong> &mdash; provides aggregate
              website usage statistics
            </li>
            <li>
              <strong>Vercel</strong> &mdash; hosts this website
            </li>
          </ul>
          <p>
            Each of these services processes data under their own privacy
            policies and security practices.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Data Retention</h2>
          <p>
            We keep information you submit for as long as it&rsquo;s
            useful to our business relationship with you &mdash; for
            example, for the duration of a project and a reasonable time
            after. You can request that we delete your information at any
            time (see &ldquo;Your Rights&rdquo; below).
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Your Rights</h2>
          <p>
            You can ask us what information we have about you, request a
            correction, or request that we delete it, by emailing{' '}
            <a href="mailto:tkluk@yellowhammerstudios.com">
              tkluk@yellowhammerstudios.com
            </a>
            .
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Data Security</h2>
          <p>
            We take reasonable steps to protect the information you share
            with us, but no method of transmission or storage over the
            internet is completely secure, and we can&rsquo;t guarantee
            absolute security.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Children&rsquo;s Privacy</h2>
          <p>
            This website is not directed at children under 13, and we do
            not knowingly collect information from children.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Changes to This Policy</h2>
          <p>
            We may update this policy from time to time. Changes will be
            posted on this page with an updated revision date.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Contact Us</h2>
          <p>
            Questions about this policy? Email{' '}
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
