import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import WaveDivider from '@/components/WaveDivider'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Meet the team behind Yellowhammer Studios — a creative practice in Huntsville, Alabama devoted to intentional, craft-driven design.',
}

export default function About() {
  return (
    <>
      <section className={styles.aboutHero}>
        <div className={styles.aboutHeroInner}>
          <p className="section-label">The Studio</p>
          <h1 className={styles.aboutHeroH1}>
            The Studio Behind
            <br />
            <em>the Work</em>
          </h1>
          <p className={styles.aboutHeroTagline}>
            Two designers. Two cities. One vision.
          </p>
        </div>
      </section>

      <section className={styles.teamWrap}>
        <div className={styles.teamInner}>
          <p className="section-label">Meet the Team</p>
          <h2 className={styles.h2}>
            The people behind
            <br />
            <em>the craft</em>
          </h2>

          <div className={styles.teamGrid}>
            <div className={styles.profile}>
              <div className={styles.photoFrame}>
                <Image
                  src="/Theresa Kluk.jpeg"
                  alt="Theresa Kluk"
                  width={340}
                  height={453}
                  className={styles.photo}
                />
              </div>
              <p className={styles.name}>Theresa Kluk</p>
              <p className={styles.title}>Creative Director</p>
              <p className={styles.bio}>
                Theresa is based in Huntsville, Alabama with a background rooted
                in photography, ministry, and brand design. Over the past five
                years she&rsquo;s been building brands, creating social content,
                and chasing the feeling that happens when everything in a design
                clicks into place. Her eye for composition, light, and intention
                shapes everything she makes. Guided by her faith, she works with
                integrity, purpose, and care for the people behind every project.
                She believes every detail matters — and she&rsquo;ll spend as
                long as it takes to get it right. That&rsquo;s not a flaw.
                That&rsquo;s the work.
              </p>
            </div>

            <div className={styles.profile}>
              <div className={styles.photoFrame}>
                <Image
                  src="/Claire2.png"
                  alt="Claire Wilson"
                  width={340}
                  height={453}
                  className={styles.photo}
                  style={{ objectPosition: 'center top' }}
                />
              </div>
              <p className={styles.name}>Claire Wilson</p>
              <p className={styles.title}>Designer</p>
              <p className={styles.bio}>
                Claire is based in Montgomery, Texas with a sharp eye and a
                heart for meaningful work. She&rsquo;s spent years designing for
                ministry and social media, developing an instinct for content
                that connects with real people. Guided by her faith, she
                approaches every project with intention and creativity. She
                brings a fresh perspective and a natural sense of visual rhythm
                that makes her work feel effortless — even when it isn&rsquo;t.
              </p>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '4rem' }}>
            <Link href="/contact" className="btn">
              Let&rsquo;s Talk
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.closingSection}>
        <div className={styles.closing}>
          <div className="amber-rule" />
          <p className={styles.closingLine}>
            Crafting Modern Heritage — with purpose, precision, and faith.
          </p>
        </div>
        <div className={styles.sectionWave}>
          <WaveDivider fill="var(--espresso)" />
        </div>
      </section>
    </>
  )
}
