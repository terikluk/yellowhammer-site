import type { Metadata } from 'next'
import Link from 'next/link'
import HeroCarousel from '@/components/HeroCarousel'
import WaveDivider from '@/components/WaveDivider'
import Reveal from '@/components/Reveal'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Website design, social media management, and brand identity services from Yellowhammer Studios — Huntsville, AL.',
}

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
      'Two rounds of revisions',
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
      <section className={styles.svcHero}>
        <div className={styles.svcHeroInner}>
          <div className={styles.svcHeroText}>
            <p className="section-label">Services & Pricing</p>
            <h1 className={styles.svcHeroH1}>
              Our
              <br />
              <em>Services</em>
            </h1>
            <p className={styles.svcHeroTagline}>
              Transparent pricing. Custom craft. No templates.
            </p>
          </div>
          <HeroCarousel
            items={[
              { src: '/process-code.jpg', caption: 'Clean, custom-coded websites' },
              { src: '/process-canva.jpg', caption: 'Brand identities, built from scratch' },
              { src: '/Wags_Social.png', caption: 'Social content that stops the scroll' },
            ]}
          />
        </div>
      </section>

      {services.map((s, i) => {
        const nextIsAlt = i < services.length - 1 ? services[i + 1].alt : false
        return (
        <section
          key={s.num}
          id={s.label.toLowerCase().replace(/\s+/g, '-')}
          className={`${styles.serviceSection} ${s.alt ? styles.serviceSectionAlt : ''}`}
        >
          <div className={styles.serviceCard}>
            <div className={styles.serviceAccent}>
              <span>{s.label}</span>
            </div>
            <Reveal variant="text" className={styles.serviceLeft}>
              <p className={styles.serviceNum}>{s.num}</p>
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
            </Reveal>
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
          <div className={styles.sectionWave}>
            <WaveDivider fill={nextIsAlt ? 'var(--ink)' : 'var(--paper)'} />
          </div>
        </section>
        )
      })}

      {/* HOW IT WORKS */}
      <section className={styles.process}>
        <Reveal variant="text">
          <p className="section-label" style={{ textAlign: 'center' } as React.CSSProperties}>
            The Process
          </p>
          <h2 className={styles.processHeading}>
            How it
            <br />
            <em>works.</em>
          </h2>
        </Reveal>
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
          ].map((step, i) => (
            <Reveal key={step.n} variant="text" delay={i * 120} className={styles.step}>
              <p className={styles.stepNumber}>{step.n}</p>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDesc}>{step.body}</p>
            </Reveal>
          ))}
        </div>
        <div className={styles.processWave}>
          <WaveDivider fill="var(--amber-wash)" />
        </div>
      </section>

      {/* FINAL CTA */}
      <div className={styles.ctaWrap}>
        <div className={styles.ctaInner}>
          <Reveal variant="text" className={styles.ctaText}>
            <p className="section-label">Start a Project</p>
            <h2 className={styles.ctaH2}>
              Ready to work
              <br />
              <em>together?</em>
            </h2>
            <p className={styles.ctaBody}>
              We take on a small number of projects each year and give each
              one our full attention.
            </p>
            <Link href="/contact" className="btn">
              Start Your Project
            </Link>
          </Reveal>
        </div>
        <div className={styles.sectionWave}>
          <WaveDivider fill="var(--espresso)" />
        </div>
      </div>
    </>
  )
}
