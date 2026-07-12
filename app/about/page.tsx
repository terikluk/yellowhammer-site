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
            Thoughtful design, built by family.
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

      <section className={styles.storySection}>
        <div className={styles.storyInner}>
          <Reveal variant="text">
            <p className="section-label">Better Together</p>
            <p className={styles.storyLead}>
              Yellowhammer Studios is built on more than a shared love of
              design. It&rsquo;s built on family.
            </p>
            <p className={styles.storyBody}>
              Working from Huntsville, Alabama, and Montgomery, Texas, we
              combine different strengths, ideas, and experiences to serve
              businesses with the same care we&rsquo;d want for our own.
            </p>
            <p className={styles.storyBody}>
              Some projects begin with Theresa&rsquo;s eye for structure and
              strategy. Others begin with Claire&rsquo;s creativity and
              visual storytelling. Every project is shaped by both of us
              before it&rsquo;s complete.
            </p>
            <p className={styles.storyBody}>
              No matter where our clients are located, they&rsquo;ll always
              work with real people who care deeply about the details and
              about building something that lasts.
            </p>
          </Reveal>
        </div>
      </section>

      <section className={styles.teamWrap}>
        <div className={styles.teamInner}>
          <Reveal variant="text">
            <p className="section-label">Meet the Team</p>
            <h2 className={styles.h2}>
              The Faces Behind
              <br />
              <em>Yellowhammer Studios</em>
            </h2>
          </Reveal>

          <div className={styles.teamGrid}>
            <div className={styles.profile}>
              <div className={styles.photoWrap}>
                <div className={styles.photoAccent} />
                <div className={styles.photoFrame}>
                  <Image
                    src="/Theresa Kluk.jpeg"
                    alt="Theresa Kluk"
                    width={480}
                    height={600}
                    className={styles.photo}
                  />
                </div>
              </div>
              <p className={styles.name}>Theresa Kluk</p>
              <p className={styles.title}>Founder &amp; Creative Director</p>
              <p className={styles.bio}>
                Based in Huntsville, Alabama, Theresa brings a love for
                thoughtful design, photography, and building websites that
                are as functional as they are beautiful. She enjoys refining
                every detail until it feels just right, believing that great
                design isn&rsquo;t about being flashy, it&rsquo;s about
                helping businesses earn trust and tell their story well.
              </p>
              <p className={styles.bio}>
                As a wife, mother, and Christian, Theresa approaches every
                project with integrity, patience, and genuine care for the
                people behind the business.
              </p>
            </div>

            <div className={styles.profile}>
              <div className={styles.photoWrap}>
                <div className={styles.photoAccent} />
                <div className={styles.photoFrame}>
                  <Image
                    src="/Claire2.png"
                    alt="Claire Wilson"
                    width={480}
                    height={600}
                    className={styles.photo}
                    style={{ objectPosition: 'center top' }}
                  />
                </div>
              </div>
              <p className={styles.name}>Claire Wilson</p>
              <p className={styles.title}>Designer &amp; Creative Partner</p>
              <p className={styles.bio}>
                Based in Montgomery, Texas, Claire has a natural eye for
                visual storytelling and a talent for creating brands that
                feel welcoming, polished, and authentic. Whether she&rsquo;s
                designing graphics, developing content, or collaborating on
                websites, she brings creativity, warmth, and fresh
                perspective to every project.
              </p>
              <p className={styles.bio}>
                As a wife, mother, and Christian, Claire believes the best
                work is built through honesty, collaboration, and a heart to
                serve others well.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.closingSection}>
        <Reveal variant="text" className={styles.closing}>
          <p className={styles.closingLine}>
            We&rsquo;d love the opportunity to learn about your business and
            help you build something you&rsquo;re proud to share.
          </p>
          <Link href="/contact" className={`btn ${styles.closingCta}`}>
            Let&rsquo;s Talk
          </Link>
        </Reveal>
        <div className={styles.sectionWave}>
          <WaveDivider fill="var(--espresso)" />
        </div>
      </section>
    </>
  )
}
