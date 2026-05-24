import type { Metadata } from 'next'
import Link from 'next/link'
import Hero from '@/components/Hero'
import ScaledIframe from './ScaledIframe'
import styles from './page.module.css'

export const metadata: Metadata = { title: 'Portfolio' }

const websiteProjects = [
  {
    slug: 'sailors-chiropractic',
    title: 'Sailors Chiropractic',
    desc: 'Chiropractic clinic website — Huntsville, AL',
    iframeTitle: 'Sailors Chiropractic website preview',
    iframeClass: '',
  },
  {
    slug: 'barrel-grain',
    title: 'Barrel & Grain',
    desc: 'Craft homebrew supply store — Huntsville, AL',
    iframeTitle: 'Barrel & Grain website preview',
    iframeClass: '',
  },
  {
    slug: 'sugas-bakery',
    title: "Suga's Bakery",
    desc: "Custom cake & treat shop — Montgomery, TX",
    iframeTitle: "Suga's Bakery website preview",
    iframeClass: '',
  },
  {
    slug: 'linea-group',
    title: 'Linea Group',
    desc: 'Architecture & design firm — The Woodlands, TX',
    iframeTitle: 'Linea Group website preview',
    iframeClass: styles.iframeLinea,
  },
]

const socialProjects = [
  { src: '/Yellowhammer_Social_Media.png', alt: 'Yellowhammer Studios social media', title: 'Yellowhammer Studios' },
  { src: '/Barrel_&_Grain_Social_Media.png', alt: 'Barrel & Grain social media', title: 'Barrel & Grain' },
  { src: "/Sugga's_Social_Media.png", alt: "Suga's Bakery social media", title: "Suga's Bakery" },
  { src: '/Linea_Social_Media.png', alt: 'Linea Group social media', title: 'Linea Group' },
  { src: '/Wags_Social.png', alt: 'Wags Pet Boutique social media', title: 'Wags Pet Boutique' },
  { src: '/Rocket_City_Social_Media.png', alt: 'Rocket City social media', title: 'Rocket City' },
]

const logoProjects = [
  { src: '/Linea_Group.png', alt: 'Linea Group logo', title: 'Linea Group', extraPad: false },
  { src: "/Suga's.png", alt: "Suga's Bakery logo", title: "Suga's Bakery", extraPad: true },
  { src: '/Grain_&_Barrel.png', alt: 'Barrel & Grain logo', title: 'Barrel & Grain', extraPad: false },
  { src: '/sailors-logo.svg', alt: 'Sailors Chiropractic logo', title: 'Sailors Chiropractic', extraPad: true },
  { src: '/Green_Top_Juice.png', alt: 'Green Top Juice logo', title: 'Green Top Juice', extraPad: false },
  { src: '/Rizzario_Manufacturing_Company.png', alt: 'Rizzario Manufacturing Company logo', title: 'Rizzario', extraPad: true },
  { src: '/Wags_Pet_Boutique.png', alt: 'Wags Pet Boutique logo', title: 'Wags Pet Boutique', extraPad: false },
  { src: '/Blue_Shield_Home_Repair.png', alt: 'Blue Shield Home Repair logo', title: 'Blue Shield Home Repair', extraPad: false },
]

export default function Portfolio() {
  return (
    <>
      <Hero
        eyebrow="Selected Work"
        h1Line1="The"
        h1Em="Portfolio"
        tagline="Websites, social media, and brand marks — made with intention."
      />

      <div className="section-divider" />

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
            </div>
            <span className={styles.portCount}>4 Projects</span>
          </div>
          <div className={styles.webGrid}>
            {websiteProjects.map((p) => (
              <div key={p.slug} className={styles.card}>
                <a
                  href={`/${p.slug}.html`}
                  className={styles.imgLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className={styles.imgWrap}>
                    <ScaledIframe
                      src={`/${p.slug}.html`}
                      title={p.iframeTitle}
                    />
                  </div>
                </a>
                <div className={styles.meta}>
                  <span className={styles.cat}>Website Design</span>
                  <h3 className={styles.cardTitle}>{p.title}</h3>
                  <p className={styles.cardDesc}>{p.desc}</p>
                  <a
                    href={`/${p.slug}.html`}
                    className={styles.portLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Site &rarr;
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOCIAL MEDIA */}
      <section id="social" className={`${styles.portSection} ${styles.portSectionAlt}`}>
        <div className={styles.portInner}>
          <div className={styles.portHeader}>
            <div>
              <p className="section-label">Social</p>
              <h2 className={styles.portH2}>
                Social
                <br />
                <em>Media</em>
              </h2>
            </div>
            <span className={styles.portCount}>6 Projects</span>
          </div>
          <div className={styles.socialGrid}>
            {socialProjects.map((p) => (
              <div key={p.title} className={styles.card}>
                <div className={styles.squareImgWrap}>
                  <img src={p.src} alt={p.alt} className={styles.fillImg} />
                </div>
                <div className={styles.meta}>
                  <span className={styles.cat}>Social Media</span>
                  <h3 className={styles.cardTitle}>{p.title}</h3>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', padding: '3rem 0 1rem' }}>
            <Link href="/contact" className="btn">
              Let&rsquo;s Talk
            </Link>
          </div>
        </div>
      </section>

      {/* LOGOS */}
      <section id="logos" className={styles.portSection}>
        <div className={styles.portInner}>
          <div className={styles.portHeader}>
            <div>
              <p className="section-label">Identity</p>
              <h2 className={styles.portH2}>
                Brand
                <br />
                <em>Marks</em>
              </h2>
            </div>
            <span className={styles.portCount}>8 Marks</span>
          </div>
          <div className={styles.logoGrid}>
            {logoProjects.map((p) => (
              <div key={p.title} className={styles.logoCard}>
                <div
                  className={styles.logoImgWrap}
                  style={p.extraPad ? { padding: '8%' } : undefined}
                >
                  <img src={p.src} alt={p.alt} className={styles.logoImg} />
                </div>
                <div className={`${styles.meta} ${styles.logoMeta}`}>
                  <span className={styles.cat}>Brand Mark</span>
                  <h3 className={styles.cardTitle}>{p.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* CTA */}
      <div className={styles.cta}>
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
      </div>
    </>
  )
}
