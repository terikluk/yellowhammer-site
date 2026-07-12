import type { Metadata } from 'next'
import Link from 'next/link'
import Hero from '@/components/Hero'
import WaveDivider from '@/components/WaveDivider'
import Reveal from '@/components/Reveal'
import ScaledIframe from './portfolio/ScaledIframe'
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
        eyebrow="Websites • Branding • Creative Support"
        h1Line1="Yellowhammer"
        h1Em="Studios"
        tagline="Helping your business make the best first impression."
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
              Every Business
              <br />
              <em>Has a Story</em>
            </h2>
            <p className={styles.body}>
              Every business has a story worth telling. We create websites,
              branding, and creative content that help you earn trust from
              the very first impression.
            </p>
          </div>
          <div className={styles.practiceDark}>
            <p className={styles.practiceDarkLabel}>What We Do</p>
            <div className={styles.servicesScroll}>
              {[
                {
                  title: 'Brand Identity',
                  body: 'A memorable brand people recognize and trust.',
                },
                {
                  title: 'Website Design & Development',
                  body: 'Professional websites that build trust from the very first click.',
                },
                {
                  title: 'Social Media Design',
                  body: 'Consistent, professional content that keeps your business top of mind.',
                },
                {
                  title: 'Website Maintenance',
                  body: 'Peace of mind knowing your website is always secure and running smoothly.',
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
            <h2 className={styles.h2} style={{ marginBottom: '2.5rem' }}>
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
                name: 'Ali T.',
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
            See the work behind <em>the words</em>.
          </h2>
          <p className={styles.collageBody}>
            Every business is different. That&rsquo;s why every website and
            brand we create is built around the people behind it.
          </p>
          <div className={styles.previewGrid}>
            <div className={styles.previewItem}>
              <a
                href="https://2angrybakers.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.previewCard}
                aria-label="Open Two Angry Bakers website"
              >
                <ScaledIframe
                  src="https://2angrybakers.com"
                  title="Two Angry Bakers website preview"
                />
              </a>
              <p className={styles.previewCaption}>
                <span className={styles.previewCaptionTitle}>2 Angry Bakers</span>
                <span className={styles.previewCaptionMeta}>Brand Identity • Website</span>
              </p>
            </div>
            <div className={styles.previewItem}>
              <a
                href="https://smoky-mountain-adventures.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.previewCard}
                aria-label="Open Smoky Mountain River Adventures website"
              >
                <ScaledIframe
                  src="https://smoky-mountain-adventures.vercel.app"
                  title="Smoky Mountain River Adventures website preview"
                />
              </a>
              <p className={styles.previewCaption}>
                <span className={styles.previewCaptionTitle}>Smoky Mountain Gear</span>
                <span className={styles.previewCaptionMeta}>Website • Booking Experience</span>
              </p>
            </div>
          </div>
          <Link href="/portfolio" className={styles.btnAmber}>
            Explore Our Portfolio
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
            Whether you&rsquo;re launching something new, refreshing your
            brand, or simply looking for a creative partner you can count on,
            we&rsquo;d love to hear your story and help bring it to life.
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
