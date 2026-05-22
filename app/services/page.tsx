import type { Metadata } from 'next'
import Link from 'next/link'
import Hero from '@/components/Hero'
import styles from './page.module.css'

export const metadata: Metadata = { title: 'Services' }

const services = [
  {
    num: '01',
    label: 'Brand Identity',
    title: 'Logo & Brand',
    titleEm: 'Identity',
    desc: 'A strong mark is the foundation of everything else. We build identities that carry weight — from the initial concept through a complete, ready-to-use brand system.',
    price: '$750',
    period: '',
    includes: [
      'Custom logo design, up to 3 concepts',
      'Color palette',
      'Typography system',
      'Brand guidelines',
    ],
    alt: false,
  },
  {
    num: '02',
    label: 'Digital',
    title: 'Website Design\n& ',
    titleEm: 'Development',
    desc: 'Websites built for performance and longevity. Custom-coded or platform-built — designed to fit your brand, not a template.',
    price: '$1,500',
    period: '',
    includes: [
      'Custom-coded or platform-built — your choice',
      'Mobile responsive design',
      'Domain and hosting setup',
      'One round of revisions',
    ],
    alt: true,
  },
  {
    num: '03',
    label: 'Social Media',
    title: 'Social Media',
    titleEm: 'Design',
    desc: 'Consistent, elevated content that looks like it belongs together. We design your feed so you can focus on what you do best. Organic only — no paid ads.',
    price: '$300',
    period: '/month',
    includes: [
      'Organic content design for Instagram, TikTok, LinkedIn, and Facebook',
      'No paid ads',
      'Cancel anytime with 30 days notice',
    ],
    alt: false,
  },
  {
    num: '04',
    label: 'Ongoing Support',
    title: 'Website',
    titleEm: 'Maintenance',
    desc: "Keep your site current, secure, and working properly without lifting a finger. We handle the small stuff so you don't have to think about it.",
    descExtra: true,
    price: '$125',
    period: '/month',
    includes: [
      'Minor updates and content changes',
      'Domain and hosting management',
      'Cancel anytime with 30 days notice',
    ],
    alt: true,
  },
]

export default function Services() {
  return (
    <>
      <Hero
        eyebrow="Services & Pricing"
        h1Line1="Our"
        h1Em="Services"
        tagline="Transparent pricing. Custom craft. No templates."
      />

      <div className="section-divider" />

      {services.map((s) => (
        <section
          key={s.num}
          id={s.label.toLowerCase().replace(/\s+/g, '-')}
          className={`${styles.serviceSection} ${s.alt ? styles.serviceSectionAlt : ''}`}
        >
          <div className={styles.serviceInner}>
            <div className={styles.serviceLeft}>
              <p className={styles.serviceNum}>{s.num}</p>
              <p className="section-label">{s.label}</p>
              <h2 className={styles.serviceTitle}>
                {s.title}
                <br />
                <em>{s.titleEm}</em>
              </h2>
              <p className={styles.serviceDesc}>{s.desc}</p>
              {s.descExtra && (
                <p className={styles.serviceDescExtra}>
                  Already have a website?{' '}
                  <Link href="/contact" className={styles.inlineLink}>
                    Ask about maintenance and refresh packages.
                  </Link>
                </p>
              )}
              <div className={styles.price}>
                <span className={styles.priceLabel}>Starting at</span>
                <span className={styles.priceAmount}>
                  {s.price}
                  {s.period && (
                    <span className={styles.pricePeriod}>{s.period}</span>
                  )}
                </span>
              </div>
            </div>
            <div className={styles.serviceRight}>
              <p className={styles.includesLabel}>What&rsquo;s included</p>
              <ul className={styles.includesList}>
                {s.includes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <Link href="/contact" className="btn">
                Let&rsquo;s Talk
              </Link>
            </div>
          </div>
        </section>
      ))}

      {/* HOW IT WORKS */}
      <section className={styles.process}>
        <p className={styles.processLabel}>The Process</p>
        <h2 className={styles.processHeading}>
          How it
          <br />
          <em>works.</em>
        </h2>
        <div className="amber-rule" style={{ marginTop: '1.8rem' } as React.CSSProperties} />
        <div className={styles.stepsGrid}>
          {[
            {
              n: 'Step 01',
              title: 'Reach Out',
              body: 'Tell us about your project through our contact form or give us a call.',
            },
            {
              n: 'Step 02',
              title: 'Get the Questionnaire',
              body: 'We’ll send you our brand questionnaire so every detail is tailored to your vision.',
            },
            {
              n: 'Step 03',
              title: 'We Get to Work',
              body: 'Once we understand your brand, we build with intention and keep you involved every step of the way.',
            },
          ].map((step) => (
            <div key={step.n} className={styles.step}>
              <p className={styles.stepNumber}>{step.n}</p>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDesc}>{step.body}</p>
            </div>
          ))}
        </div>
        <div className={styles.processCta}>
          <Link href="/contact" className="btn">
            Start Your Project
          </Link>
        </div>
      </section>
    </>
  )
}
