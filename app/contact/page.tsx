import type { Metadata } from 'next'
import styles from './page.module.css'
import ContactForm from './ContactForm'
import WaveDivider from '@/components/WaveDivider'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Yellowhammer Studios is a boutique design studio based in Huntsville, Alabama, proudly serving businesses across the United States.',
}

const nextSteps = [
  {
    n: '01',
    body: 'We’ll reply within 48 hours.',
  },
  {
    n: '02',
    body: 'We’ll set up a quick call or send our project questionnaire.',
  },
  {
    n: '03',
    body: 'We’ll put together a plan tailored to your goals.',
  },
]

const validTypes = ['nest', 'rise', 'flight', 'logo-brand', 'social', 'maintenance', 'other']

export default async function Contact({
  searchParams,
}: {
  searchParams: Promise<{ type?: string }>
}) {
  const { type } = await searchParams
  const initialTypes = type && validTypes.includes(type) ? [type] : []

  return (
    <section className={styles.contactPage}>
      <div className={styles.introBlock}>
        <p className="section-label" style={{ textAlign: 'center' } as React.CSSProperties}>
          Get in Touch
        </p>
        <h1 className={styles.contactHeading}>
          Let&rsquo;s Build Something <em>Together</em>
        </h1>
        <p className={styles.contactLead}>
          Tell us a bit about your project below, and we&rsquo;ll be in
          touch soon to talk through the details.
        </p>
      </div>

      <div className={styles.divider} />

      <div className={styles.formBlock}>
        <div className={styles.cardWrap}>
          <div className={styles.cardAccent} aria-hidden="true" />
          <div className={styles.card}>
            <ContactForm initialTypes={initialTypes} />
          </div>
        </div>
      </div>

      <div className={styles.divider} />

      <div className={styles.nextStepsBlock}>
        <p className="section-label" style={{ textAlign: 'center' } as React.CSSProperties}>
          What Happens Next
        </p>
        <div className={styles.nextStepsGrid}>
          {nextSteps.map((step) => (
            <div key={step.n} className={styles.nextStep}>
              <p className={styles.nextStepNumber}>{step.n}</p>
              <p className={styles.nextStepBody}>{step.body}</p>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.divider} />

      <div className={styles.boutiqueBlock}>
        <p className={styles.boutiqueText}>
          Yellowhammer Studios is a boutique design studio based in
          Huntsville, Alabama, proudly serving businesses across the
          United States. Every project is approached with personal
          attention, thoughtful strategy, and craftsmanship from start
          to finish.
        </p>
      </div>

      <div className={styles.sectionWave}>
        <WaveDivider fill="var(--espresso)" />
      </div>
    </section>
  )
}
