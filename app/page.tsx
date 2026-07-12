import type { Metadata } from 'next'
import Link from 'next/link'
import Hero from '@/components/Hero'
import WaveDivider from '@/components/WaveDivider'
import Reveal from '@/components/Reveal'
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
        theme="light"
        eyebrow="Est. in the pursuit of craft"
        h1Line1="Yellowhammer"
        h1Em="Studios"
        tagline="Websites, branding, and creative support for growing businesses."
        cta={{ href: '/services', label: 'Our Services' }}
        image="/yellowhammer_still.png"
        video="/yellowhammer_landing.mp4"
      />

      <section id="studio" className={styles.practiceSection}>
        {/* placeholder background — swap for real photography */}
        <div className={styles.practiceBg} aria-hidden="true" />
        <div className={styles.practiceCard}>
          <div className={styles.practiceAccent}>
            <span>The Studio</span>
          </div>
          <div className={styles.practiceLight}>
            <h2 className={styles.h2}>
              Made with
              <br />
              <em>intention</em>
            </h2>
            <p className={styles.body}>
              Yellowhammer Studios is a creative practice devoted to craft,
              precision, and the quiet power of work made well. We bring
              together design, narrative, and material intelligence — building
              things that last because they were built to mean something.
            </p>
          </div>
          <div className={styles.practiceDark}>
            <p className={styles.practiceDarkLabel}>What We Do</p>
            <div className={styles.servicesScroll}>
              {[
                {
                  title: 'Brand Identity',
                  body: 'Logos, palettes, and typography systems.',
                },
                {
                  title: 'Website Design & Development',
                  body: 'Custom-coded sites, built to last.',
                },
                {
                  title: 'Social Media Design',
                  body: 'Content for Instagram, TikTok, and LinkedIn.',
                },
                {
                  title: 'Website Maintenance',
                  body: 'Ongoing updates, starting at $125/month.',
                },
              ].map(({ title, body }) => (
                <div key={title} className={styles.serviceChip}>
                  <h3 className={styles.serviceChipTitle}>{title}</h3>
                  <p className={styles.serviceChipBody}>{body}</p>
                </div>
              ))}
            </div>
            <Link href="/services" className={styles.practiceCta}>
              See All Services →
            </Link>
          </div>
        </div>
        <div className={styles.practiceWave}>
          <WaveDivider fill="var(--paper)" />
        </div>
      </section>

      <section id="reviews" className={styles.reviewsSection}>
        <div className={styles.reviewsInner}>
          <Reveal variant="text">
            <p className="section-label">Client Love</p>
            <h2 className={styles.h2} style={{ marginBottom: '3rem' }}>
              What people are <em>saying</em>
            </h2>
          </Reveal>
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
            ].map(({ name, quote }, i) => (
              <Reveal key={name} className={styles.reviewCard} delay={i * 120}>
                <div className={styles.reviewStars}>★★★★★</div>
                <p className={styles.reviewQuote}>&ldquo;{quote}&rdquo;</p>
                <div className={styles.reviewMeta}>
                  <span className={styles.reviewName}>{name}</span>
                  <span className={styles.reviewSource}>Google Review</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.collageSection}>
        <Reveal variant="text" className={styles.collagePanel}>
          <h2 className={styles.collageH2}>
            Think bold. <em>Build intentional.</em>
          </h2>
          <p className={styles.collageBody}>
            See the brand identities, websites, and campaigns we&rsquo;ve
            brought to life for studios and small businesses alike.
          </p>
          <Link href="/portfolio" className={styles.btnAmber}>
            View the Portfolio
          </Link>
        </Reveal>
      </section>

      <section id="contact" className={styles.contactWrap}>
        <Reveal variant="text" className={styles.contactSection}>
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
          <Link href="/contact" className={styles.btnAmber}>
            Let&rsquo;s Talk
          </Link>
        </Reveal>
        <div className={styles.contactWave}>
          <WaveDivider fill="var(--espresso)" />
        </div>
      </section>
    </>
  )
}
