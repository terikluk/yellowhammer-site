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

      <section className={styles.storySection}>
        <div className={styles.storyInner}>
          <Reveal variant="text">
            <p className="section-label">Our Story</p>
            <p className={styles.storyLead}>
              Every business has a story, and we believe your website and
              brand should tell it well.
            </p>
            <p className={styles.storyBody}>
              Yellowhammer Studios is a mother-daughter creative team serving
              businesses from Huntsville, Alabama, and Montgomery, Texas.
              Together, we create websites, branding, and marketing materials
              that help businesses make a strong first impression and build
              lasting trust with their customers.
            </p>
            <p className={styles.storyBody}>
              As wives, mothers, and Christians, our faith shapes the way we
              approach our work. We believe in treating people with honesty,
              serving with excellence, and building relationships that last
              long after a project is complete. Those values influence every
              decision we make, from the first conversation to the final
              launch.
            </p>
            <p className={styles.storyBody}>
              We genuinely enjoy the creative process. Whether we&rsquo;re
              designing a website, refining a brand, or perfecting the
              smallest design detail, we believe thoughtful work makes a
              difference. We aren&rsquo;t interested in rushing projects or
              delivering something that simply checks a box. Our goal is to
              create work that reflects the quality and character of the
              businesses we serve.
            </p>
            <p className={styles.storyBody}>
              We know that for many business owners, a website or logo
              isn&rsquo;t just another project. It&rsquo;s something
              you&rsquo;ve invested your time, money, and heart into.
              That&rsquo;s why we take the time to listen, communicate
              clearly, and build solutions that are both beautiful and
              practical.
            </p>
            <p className={styles.storyBody}>
              While technology continues to change, our approach remains the
              same: create work with care, treat people well, and stand
              behind what we build.
            </p>
            <p className={styles.storyBody}>
              Whether you&rsquo;re launching a new business, refreshing your
              brand, or looking for someone to provide ongoing support,
              we&rsquo;d be honored to help you build something you&rsquo;re
              proud to share.
            </p>
          </Reveal>
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

          <div className={styles.teamCardWrap}>
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
          </div>

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
