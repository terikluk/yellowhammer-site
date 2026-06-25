import type { Metadata } from 'next'
import Link from 'next/link'
import Hero from '@/components/Hero'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Yellowhammer Studios',
  description:
    'A creative studio in Huntsville, AL devoted to website design, social media, and brand identity — made with craft and intention.',
}

export default function Home() {
  return (
    <>
      <Hero
        eyebrow="Est. in the pursuit of craft"
        h1Line1="Yellowhammer"
        h1Em="Studios"
        tagline="Where creative vision meets deliberate making."
        cta={{ href: '/about', label: 'Discover the Studio' }}
      />

      <div className="section-divider" />

      <section id="studio">
        <div className={styles.section}>
          <div className={styles.twoCol}>
            <div>
              <p className="section-label">The Studio</p>
              <h2 className={styles.h2}>
                Made with
                <br />
                <em>intention</em>
              </h2>
            </div>
            <div>
              <p className={styles.body}>
                Yellowhammer Studios is a creative practice devoted to craft,
                precision, and the quiet power of work made well. We bring
                together design, narrative, and material intelligence — building
                things that last because they were built to mean something.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="services"
        className={styles.servicesSection}
      >
        <div className={styles.servicesSectionInner}>
          <p className="section-label">What We Do</p>
          <h2 className={styles.h2} style={{ marginBottom: '3rem' }}>
            Areas of <em>practice</em>
          </h2>
        </div>
        <div className={styles.servicesGrid}>
          {[
            {
              title: 'Brand Identity',
              body: 'Custom logos, color palettes, typography systems, and brand guidelines that give your business a cohesive visual identity.',
            },
            {
              title: 'Website Design & Development',
              body: 'Custom-coded websites built for clarity and impact, plus ongoing maintenance and updates.',
            },
            {
              title: 'Social Media Design',
              body: 'Organic content design for Instagram, TikTok, LinkedIn, and Facebook to keep your brand consistent and engaging.',
            },
            {
              title: 'Website Maintenance',
              body: 'Minor updates, content changes, domain and hosting management. Cancel anytime with 30 days notice. Starting at $125/month.',
            },
          ].map(({ title, body }) => (
            <div key={title} className={styles.serviceCard}>
              <div className={styles.cardIcon} />
              <h3 className={styles.cardTitle}>{title}</h3>
              <p className={styles.cardBody}>{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="reviews" className={styles.reviewsSection}>
        <div className={styles.reviewsInner}>
          <p className="section-label">Client Love</p>
          <h2 className={styles.h2} style={{ marginBottom: '3rem' }}>
            What people are <em>saying</em>
          </h2>
          <div className={styles.reviewsGrid}>
            {[
              {
                name: 'Zoë B.',
                quote: 'Took my vision and turned it into a beautiful, easy to use website that perfectly represents my business. Every detail was thoughtfully done, and very quick to make any adjustments I requested. It\'s everything I wanted and more.',
              },
              {
                name: 'A&Z',
                quote: 'They truly listened to my vision and transformed it into a beautiful, functional website that exceeded my expectations. The final website is not only visually stunning but also easy to navigate. I\'ve already received so many compliments on it!',
              },
              {
                name: 'Taylor P.',
                quote: 'They really took the time to understand the brand and brought everything to life exactly how we pictured it — honestly even better. Communication was top-notch the whole way through, and any changes we wanted were handled quickly without any hassle. 10/10 experience.',
              },
            ].map(({ name, quote }) => (
              <div key={name} className={styles.reviewCard}>
                <div className={styles.reviewStars}>★★★★★</div>
                <p className={styles.reviewQuote}>&ldquo;{quote}&rdquo;</p>
                <div className={styles.reviewMeta}>
                  <span className={styles.reviewName}>{name}</span>
                  <span className={styles.reviewSource}>Google Review</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact">
        <div className={styles.contactSection}>
          <p className="section-label">Get in Touch</p>
          <h2 className={styles.contactH2}>
            Let&rsquo;s make
            <br />
            <em>something together</em>
          </h2>
          <p className={styles.contactBody}>
            We work with a select number of clients each year. If your project
            calls for craft and intention, we&rsquo;d like to hear from you.
          </p>
          <Link href="/contact" className="btn">
            Let&rsquo;s Talk
          </Link>
        </div>
      </section>
    </>
  )
}
