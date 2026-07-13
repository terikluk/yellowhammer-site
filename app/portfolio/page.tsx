import type { Metadata } from 'next'
import Link from 'next/link'
import HeroCarousel from '@/components/HeroCarousel'
import WaveDivider from '@/components/WaveDivider'
import Reveal from '@/components/Reveal'
import styles from './page.module.css'
import WebsiteCarousel from './WebsiteCarousel'
import SocialCarousel from './SocialCarousel'
import LogoCarousel from './LogoCarousel'

export const metadata: Metadata = {
  title: 'Portfolio',
  description:
    'See our portfolio of website designs, social media graphics, and brand marks for clients across Alabama and Texas.',
}

const websiteProjects = [
  {
    slug: 'two-angry-bakers',
    title: 'Two Angry Bakers',
    desc: 'Cake pop bakery — Tomball, TX',
    iframeTitle: 'Two Angry Bakers website preview',
    iframeClass: '',
    liveUrl: 'https://2angrybakers.com',
    type: 'client' as const,
  },
  {
    slug: 'restoration-church',
    title: 'Restore Church Huntsville',
    desc: 'Community church website — Huntsville, AL',
    iframeTitle: 'Restore Church Huntsville website preview',
    iframeClass: '',
    liveUrl: 'https://restorationchurchcom.vercel.app',
    type: 'concept' as const,
  },
  {
    slug: 'dusty-rose-salon',
    title: 'Dusty Rose Salon & Spa',
    desc: 'Boutique salon & spa — Franklin, TN',
    iframeTitle: 'Dusty Rose Salon & Spa website preview',
    iframeClass: '',
    liveUrl: 'https://aspensalonandspacom.vercel.app',
    type: 'concept' as const,
  },
  {
    slug: 'sailors-chiropractic',
    title: 'Sailors Chiropractic',
    desc: 'Chiropractic clinic website — Huntsville, AL',
    iframeTitle: 'Sailors Chiropractic website preview',
    iframeClass: '',
    liveUrl: 'https://sailors-chiropractic.vercel.app',
    type: 'concept' as const,
  },
  {
    slug: 'shuttle-sips',
    title: 'Shuttle Sips',
    desc: 'Dirty soda shop — Houston, TX',
    iframeTitle: 'Shuttle Sips website preview',
    iframeClass: '',
    liveUrl: 'https://shuttlesipscom.vercel.app',
    type: 'concept' as const,
  },
  {
    slug: 'barrel-grain',
    title: 'Barrel & Grain',
    desc: 'Craft homebrew supply store — Hot Springs, AR',
    iframeTitle: 'Barrel & Grain website preview',
    iframeClass: '',
    liveUrl: 'https://barrel-grain.vercel.app',
    type: 'concept' as const,
  },
  {
    slug: 'bennett-group',
    title: 'The Bennett Group',
    desc: 'Office furniture & workplace design — Kansas City, MO',
    iframeTitle: 'The Bennett Group website preview',
    iframeClass: '',
    liveUrl: 'https://thebennettgroupcom.vercel.app',
    type: 'concept' as const,
  },
  {
    slug: 'linea-group',
    title: 'Linea Group',
    desc: 'Architecture & design firm — The Woodlands, TX',
    iframeTitle: 'Linea Group website preview',
    iframeClass: styles.iframeLinea,
    liveUrl: 'https://linea-group.vercel.app',
    type: 'concept' as const,
  },
  {
    slug: 'smoky-mountain-adventures',
    title: 'Smoky Mountain River Adventures',
    desc: 'Tube, kayak & canoe rentals — Townsend, TN',
    iframeTitle: 'Smoky Mountain River Adventures website preview',
    iframeClass: '',
    liveUrl: 'https://smoky-mountain-adventures.vercel.app',
    type: 'concept' as const,
  },
]

const socialProjects = [
  { src: '/Yellowhammer_Social_Media.png', alt: 'Yellowhammer Studios social media', title: 'Yellowhammer Studios', type: 'inhouse' as const },
  { src: '/Two_Angry_Bakers_Social.png', alt: 'Two Angry Bakers social media', title: 'Two Angry Bakers', type: 'client' as const },
  { src: '/Barrel_&_Grain_Social_Media.png', alt: 'Barrel & Grain social media', title: 'Barrel & Grain', type: 'concept' as const },
  { src: "/Sugga's_Social_Media.png", alt: "Suga's Bakery social media", title: "Suga's Bakery", type: 'concept' as const },
  { src: '/Linea_Social_Media.png', alt: 'Linea Group social media', title: 'Linea Group', type: 'concept' as const },
  { src: '/Wags_Social.png', alt: 'Wags Pet Boutique social media', title: 'Wags Pet Boutique', type: 'concept' as const },
  { src: '/Rocket_City_Social_Media.png', alt: 'Rocket City Roots social media', title: 'Rocket City Roots', type: 'concept' as const },
  { src: '/Guard_Dog_Social.png', alt: 'Guard Dog Home Defense social media', title: 'Guard Dog Home Defense', type: 'concept' as const },
  { src: '/Wavescape_Social.png', alt: 'Wavescape social media', title: 'Wavescape', type: 'concept' as const },
]

const logoProjects = [
  { src: '/Two_Angry_Bakers_Logo.png', alt: 'Two Angry Bakers logo', title: 'Two Angry Bakers', extraPad: false, type: 'client' as const },
  { src: '/Blue_Shield_Home_Repair.png', alt: 'Blue Shield Home Repair logo', title: 'Blue Shield Home Repair', extraPad: false, type: 'concept' as const },
  { src: '/Grain_&_Barrel.png', alt: 'Barrel & Grain logo', title: 'Barrel & Grain', extraPad: false, type: 'concept' as const },
  { src: '/Wholly_Tees_Logo.png', alt: 'Wholly Tees logo', title: 'Wholly Tees', extraPad: true, type: 'inhouse' as const },
  { src: '/guard_dog.png', alt: 'Guard Dog Home Defense logo', title: 'Guard Dog Home Defense', extraPad: true, type: 'concept' as const },
  { src: '/Rizzario_Manufacturing_Company.png', alt: 'Rizzario Manufacturing Company logo', title: 'Rizzario', extraPad: true, type: 'concept' as const },
  { src: "/Suga's.png", alt: "Suga's Bakery logo", title: "Suga's Bakery", extraPad: true, type: 'concept' as const },
  { src: '/Green_Top_Juice.png', alt: 'Green Top Juice logo', title: 'Green Top Juice', extraPad: false, type: 'concept' as const },
  { src: '/Linea_Group.png', alt: 'Linea Group logo', title: 'Linea Group', extraPad: false, type: 'concept' as const },
  { src: '/Wags_Pet_Boutique.png', alt: 'Wags Pet Boutique logo', title: 'Wags Pet Boutique', extraPad: false, type: 'concept' as const },
  { src: '/sailors-logo.svg', alt: 'Sailors Chiropractic logo', title: 'Sailors Chiropractic', extraPad: true, type: 'concept' as const },
  { src: '/wavescape.png', alt: 'Wavescape logo', title: 'Wavescape', extraPad: true, type: 'concept' as const },
]

export default function Portfolio() {
  return (
    <>
      <section className={styles.portHero}>
        <div className={styles.portHeroInner}>
          <div className={styles.portHeroText}>
            <p className="section-label">Selected Work</p>
            <h1 className={styles.portHeroH1}>
              The
              <br />
              <em>Portfolio</em>
            </h1>
            <p className={styles.portHeroTagline}>
              Thoughtful websites, memorable brands, and purposeful design.
            </p>
          </div>
          <HeroCarousel
            items={[
              { src: '/Rocket_City_Social_Media.png', caption: 'Rocket City Roots' },
              { src: '/Guard_Dog_Social.png', caption: 'Guard Dog Home Defense' },
              { src: '/Two_Angry_Bakers_Social.png', caption: 'Two Angry Bakers' },
            ]}
          />
        </div>
      </section>

      {/* WEBSITES */}
      <section id="websites" className={styles.portSection}>
        <div className={styles.portInner}>
          <div className={styles.portHeader}>
            <div>
              <p className="section-label">Digital</p>
              <h2 className={styles.portH2}>
                Website
                <br />
                <em>Design</em>
              </h2>
              <div className={styles.portH2Rule} />
            </div>
          </div>
          <WebsiteCarousel projects={websiteProjects} />
        </div>
        <div className={styles.sectionWave}>
          <WaveDivider fill="var(--ink)" />
        </div>
      </section>

      {/* SOCIAL MEDIA */}
      <section id="social" className={`${styles.portSection} ${styles.portSectionDark}`}>
        <div className={styles.portInner}>
          <div className={styles.portHeader}>
            <div>
              <p className="section-label">Social</p>
              <h2 className={styles.portH2}>
                Social
                <br />
                <em>Content</em>
              </h2>
              <div className={styles.portH2Rule} />
            </div>
          </div>
          <SocialCarousel items={socialProjects} />
          <div style={{ textAlign: 'center', padding: '3rem 0 1rem' }}>
            <Link href="/contact" className="btn">
              Let&rsquo;s Talk
            </Link>
          </div>
        </div>
      </section>

      {/* BRAND IDENTITY (logos + apparel) */}
      <section id="logos" className={`${styles.portSection} ${styles.portSectionAlt}`}>
        <div className={styles.portInner}>
          <div className={styles.portHeader}>
            <div>
              <p className="section-label">Identity</p>
              <h2 className={styles.portH2}>
                Brand
                <br />
                <em>Identity</em>
              </h2>
              <div className={styles.portH2Rule} />
            </div>
          </div>
          <LogoCarousel items={logoProjects} />
        </div>
      </section>

      {/* CTA */}
      <div className={styles.ctaWrap}>
        <Reveal variant="text" className={styles.cta}>
          <p className="section-label">Start a Project</p>
          <h2 className={styles.ctaH2}>
            Ready to add your
            <br />
            <em>project here?</em>
          </h2>
          <p className={styles.ctaBody}>
            We take on a small number of projects each year and give each one our
            full attention.
          </p>
          <Link href="/contact" className="btn">
            Let&rsquo;s Talk
          </Link>
        </Reveal>
        <div className={styles.ctaWave}>
          <WaveDivider fill="var(--espresso)" />
        </div>
      </div>
    </>
  )
}
