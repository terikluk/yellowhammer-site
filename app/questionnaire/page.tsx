import type { Metadata } from 'next'
import WaveDivider from '@/components/WaveDivider'
import styles from './page.module.css'
import QuestionnaireForm from './QuestionnaireForm'

export const metadata: Metadata = { title: 'Start Your Project' }

export default function Questionnaire() {
  return (
    <section className={styles.qPage}>
      <div className={styles.introBlock}>
        <p className="section-label" style={{ textAlign: 'center' } as React.CSSProperties}>
          Start Your Project
        </p>
        <h1 className={styles.qHeading}>
          Tell us about <em>your brand.</em>
        </h1>
        <p className={styles.qLead}>
          Every great brand starts with the right questions.
        </p>
      </div>

      <div className={styles.divider} />

      <div className={styles.wrap}>
        <p className={styles.intro}>
          Take a few minutes to fill this out — the more detail you give us, the
          better we can serve you.
        </p>

        <div className={styles.cardWrap}>
          <div className={styles.cardAccent} aria-hidden="true" />
          <div className={styles.card}>
            <QuestionnaireForm />
          </div>
        </div>
      </div>

      <div className={styles.sectionWave}>
        <WaveDivider fill="var(--espresso)" />
      </div>
    </section>
  )
}
