import type { Metadata } from 'next'
import Link from 'next/link'
import HeroCarousel from '@/components/HeroCarousel'
import WaveDivider from '@/components/WaveDivider'
import Reveal from '@/components/Reveal'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Services & Pricing',
  description:
    'Website design, social media management, and brand identity services from Yellowhammer Studios — Huntsville, AL.',
}

const services = [
  {
    num: '01',
    label: 'Digital',
    title: 'Website Design & Development',
    desc: 'Custom websites designed from the ground up for your business. No templates, no page builders — every website is custom-built for performance, clarity, and long-term growth.',
    price: '$2,200',
    period: '',
    startingAt: true,
    featured: true,
    includes: [
      'Custom Design',
      'Responsive Development',
      'Contact Forms',
      'Basic SEO',
      'Analytics',
      'Launch Support',
    ],
  },
  {
    num: '02',
    label: 'Identity',
    title: 'Brand Identity',
    desc: 'A thoughtful visual foundation for businesses that want to be remembered.',
    price: '$950',
    period: '',
    startingAt: true,
    includes: [
      'Logo Design',
      'Color Palette',
      'Typography',
      'Brand Guidelines',
      'Final Asset Package',
    ],
  },
  {
    num: '03',
    label: 'Website Care',
    title: 'Website Care Plan',
    desc: 'We handle the technical side so you can focus on running your business.',
    price: '$150',
    period: '/month',
    startingAt: true,
    includes: [
      'Content Updates',
      'Security Monitoring',
      'Hosting Management',
      'Priority Support',
    ],
  },
  {
    num: '04',
    label: 'Social',
    title: 'Social Content',
    desc: 'Beautiful, branded content designed to keep your business visible and consistent across digital platforms.',
    price: 'Custom',
    period: '',
    startingAt: false,
    includes: [
      'Instagram, TikTok, LinkedIn & Facebook',
      'Organic content, no paid ads',
      'Cancel anytime, 30 days notice',
    ],
  },
]

const whyUs = [
  {
    title: 'Understanding First',
    body: 'Before any design begins, we take time to learn your business, your goals, and the people you serve.',
  },
  {
    title: 'Nothing Off the Shelf',
    body: 'Every website, brand, and piece of content is created specifically for you — never templated, never reused.',
  },
  {
    title: 'Growing With You',
    body: 'We’re here long after launch, staying on as a creative partner as your business changes and grows.',
  },
]

const faqs = [
  {
    q: 'Do you use WordPress?',
    a: 'No — Yellowhammer builds modern, custom websites using current technologies for better performance, flexibility, and long-term reliability.',
  },
  {
    q: 'What platform do you build on?',
    a: 'Every project is custom-built using modern web technologies selected for your business. That allows us to create websites that are fast, flexible, and built to grow with you.',
  },
  {
    q: 'Can you redesign my existing website?',
    a: 'Absolutely. Whether you need a complete redesign or improvements to an existing site, we’ll recommend the best approach based on your goals.',
  },
  {
    q: 'Can I update my website myself?',
    a: 'Some websites may include simple editing capabilities depending on the project, but many clients prefer the Website Care Plan so we can manage updates for them.',
  },
  {
    q: 'Do I own my website?',
    a: 'Yes. Once your project is paid in full, you own the finished website and all approved design assets created specifically for your project.',
  },
  {
    q: 'Do you offer payment plans?',
    a: 'Yes — flexible payment options are available to help make your project more accessible.',
  },
  {
    q: 'How long does a project take?',
    a: 'It depends on scope, but Brand Identity projects typically take 2–3 weeks, and websites typically take 4–8 weeks.',
  },
  {
    q: 'What happens after launch?',
    a: 'Many clients continue with our Website Care Plan, so we can handle updates, maintenance, and ongoing support after your site goes live.',
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
              Services
              <br />
              <em>&amp; Pricing</em>
            </h1>
            <p className={styles.svcHeroTagline}>
              Every project begins with understanding your business. From
              brand identity to custom websites, everything we create is
              designed with purpose, crafted with care, and priced
              transparently.
            </p>
          </div>
          <HeroCarousel
            items={[
              { src: '/restore-church-preview.jpg', caption: 'Website Design' },
              { src: '/Linea_Group.png', caption: 'Brand Identity' },
              { src: '/Yellowhammer_Social_Media.png', caption: 'Social Content' },
            ]}
          />
        </div>
        <div className={styles.sectionWave}>
          <WaveDivider fill="var(--ink)" />
        </div>
      </section>

      {/* WORKING TOGETHER */}
      <section className={styles.whySection}>
        <Reveal variant="text">
          <p className="section-label" style={{ textAlign: 'center' } as React.CSSProperties}>
            Working Together
          </p>
          <h2 className={styles.whyHeading}>
            What It&rsquo;s Like to
            <br />
            <em>Work Together</em>
          </h2>
        </Reveal>
        <div className={styles.whyList}>
          {whyUs.map((w, i) => (
            <Reveal key={w.title} variant="text" delay={i * 120} className={styles.whyItem}>
              <h3 className={styles.whyItemTitle}>{w.title}</h3>
              <p className={styles.whyItemBody}>{w.body}</p>
            </Reveal>
          ))}
        </div>
        <div className={styles.whySectionWave}>
          <WaveDivider fill="var(--paper)" />
        </div>
      </section>

      <section className={styles.pricingSection}>
        <div className={styles.pricingGrid}>
          {services.map((s) => (
            <div
              key={s.num}
              id={s.label.toLowerCase().replace(/\s+/g, '-')}
              className={`${styles.pricingCard} ${s.featured ? styles.pricingCardFeatured : ''}`}
            >
              <div className={styles.pricingAccent}>
                <span className={styles.pricingNum}>{s.num}</span>
                <span className={styles.pricingLabel}>{s.label}</span>
              </div>
              {s.featured ? (
                <div className={styles.pricingBody}>
                  <div className={styles.pricingMain}>
                    <h2 className={styles.pricingTitle}>{s.title}</h2>
                    <div className={styles.priceRow}>
                      {s.startingAt && <span className={styles.priceStarting}>Starting at</span>}
                      <span className={styles.priceAmount}>{s.price}</span>
                      {s.period && <span className={styles.pricePeriod}>{s.period}</span>}
                    </div>
                    <p className={styles.pricingDesc}>{s.desc}</p>
                    <Link href="/contact" className={`btn ${styles.pricingCta}`}>
                      Let&rsquo;s Talk
                    </Link>
                  </div>
                  <div>
                    <p className={styles.includesLabel}>What&rsquo;s Included</p>
                    <ul className={styles.pricingIncludes}>
                      {s.includes.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ) : (
                <div className={styles.pricingBody}>
                  <h2 className={styles.pricingTitle}>{s.title}</h2>
                  <div className={styles.priceRow}>
                    {s.startingAt && <span className={styles.priceStarting}>Starting at</span>}
                    <span className={styles.priceAmount}>{s.price}</span>
                    {s.period && <span className={styles.pricePeriod}>{s.period}</span>}
                  </div>
                  <p className={styles.pricingDesc}>{s.desc}</p>
                  <p className={styles.includesLabel}>What&rsquo;s Included</p>
                  <ul className={styles.pricingIncludes}>
                    {s.includes.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <Link href="/contact" className={`btn ${styles.pricingCta}`}>
                    Let&rsquo;s Talk
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

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
      </section>

      {/* FAQ */}
      <section className={styles.faq}>
        <Reveal variant="text">
          <p className="section-label" style={{ textAlign: 'center' } as React.CSSProperties}>
            Questions
          </p>
          <h2 className={styles.faqHeading}>
            Frequently Asked
            <br />
            <em>Questions</em>
          </h2>
        </Reveal>
        <div className={styles.faqList}>
          {faqs.map((f, i) => (
            <Reveal key={f.q} variant="text" delay={i * 80} className={styles.faqItem}>
              <h3 className={styles.faqQuestion}>{f.q}</h3>
              <p className={styles.faqAnswer}>{f.a}</p>
            </Reveal>
          ))}
        </div>
        <div className={styles.faqWave}>
          <WaveDivider fill="var(--amber-wash)" />
        </div>
      </section>

      {/* RIGHT FIT */}
      <section className={styles.rightFit}>
        <Reveal variant="text" className={styles.rightFitInner}>
          <p className="section-label" style={{ textAlign: 'center' } as React.CSSProperties}>
            Is This You?
          </p>
          <h2 className={styles.rightFitH2}>
            Is Yellowhammer the
            <br />
            <em>Right Fit?</em>
          </h2>
          <p className={styles.rightFitBody}>
            Yellowhammer Studios works best with businesses that value
            thoughtful design, clear communication, and long-term
            relationships. We intentionally take on a limited number of
            projects each year so every client receives our full attention.
          </p>
        </Reveal>
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
              Every project is thoughtfully crafted to reflect your business,
              your story, and the people you serve.
            </p>
            <Link href="/contact" className="btn">
              Let&rsquo;s Talk
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
