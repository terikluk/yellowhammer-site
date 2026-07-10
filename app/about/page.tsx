import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import WaveDivider from '@/components/WaveDivider'
import Reveal from '@/components/Reveal'
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
        <img
          src="/yellowhammer_about.png"
          alt=""
          aria-hidden="true"
          className={styles.aboutHeroBgImg}
        />
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
          <Reveal variant="text">
            <p className="section-label">Meet the Team</p>
            <h2 className={styles.h2}>
              The people behind
              <br />
              <em>the craft</em>
            </h2>
          </Reveal>

          <Reveal className={styles.teamCardWrap}>
            <div className={styles.teamCardAccent} />
            <div className={styles.teamCard}>
              <div className={styles.teamCardText}>
                <div className={styles.profileBlock}>
                  <p className={styles.name}>Theresa Kluk</p>
                  <p className={styles.title}>Creative Director</p>
                  <p className={styles.bio}>
                    Based in Huntsville, Alabama, Theresa brings a background in
                    photography, ministry, and brand design to every project.
                    She believes every detail matters — and works with the
                    integrity and care to prove it.
                  </p>
                </div>

                <div className={styles.profileDivider} />

                <div className={styles.profileBlock}>
                  <p className={styles.name}>Claire Wilson</p>
                  <p className={styles.title}>Designer</p>
                  <p className={styles.bio}>
                    Based in Montgomery, Texas, Claire brings a sharp eye and an
                    instinct for content that connects. Guided by her faith,
                    she approaches every project with intention, creativity,
                    and a natural sense of visual rhythm.
                  </p>
                </div>
              </div>

              <div className={styles.teamCardPhoto}>
                <Image
                  src="/teri_claire.png"
                  alt="Theresa Kluk and Claire Wilson"
                  width={600}
                  height={500}
                  className={styles.teamPhoto}
                />
              </div>
            </div>
          </Reveal>

          <div style={{ textAlign: 'center', marginTop: '4rem' }}>
            <Link href="/contact" className="btn">
              Let&rsquo;s Talk
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.closingSection}>
        <Reveal variant="text" className={styles.closing}>
          <p className={styles.closingLine}>
            Crafting Modern Heritage — with purpose, precision, and faith.
          </p>
        </Reveal>
        <div className={styles.sectionWave}>
          <WaveDivider fill="var(--espresso)" />
        </div>
      </section>
    </>
  )
}
