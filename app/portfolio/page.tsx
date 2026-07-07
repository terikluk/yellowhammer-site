import type { Metadata } from 'next'
import Link from 'next/link'
import Hero from '@/components/Hero'
import styles from './page.module.css'
import WebsiteCarousel from './WebsiteCarousel'
import ApparelCarousel from './ApparelCarousel'
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

const apparelProjects = [
  { src: '/WT_Selah.jpg', alt: 'Selah — music note and script', title: 'Selah' },
  { src: '/WT_Not_Today_Satan.jpg', alt: 'Not Today Satan — snake design', title: 'Not Today Satan' },
  { src: '/WT_Raven.jpg', alt: 'Raven — Luke 12:24 raven with coffee', title: 'Raven' },
  { src: '/WT_Feeding_Retro.jpg', alt: 'Feeding of the 5000 — retro badge John 6:9', title: 'Feeding of the 5,000' },
  { src: '/WT_Angel_Visit.jpg', alt: 'Be Not Afraid — angel ophanim design', title: 'Be Not Afraid' },
  { src: '/WT_Better_Idea.jpg', alt: 'Big Fish — Jonah in the whale', title: 'Big Fish' },
  { src: '/WT_Holy_Guacamole.jpg', alt: 'Holy Guacamole t-shirt design', title: 'Holy Guacamole' },
  { src: '/WT_Alpha_Omega.jpg', alt: 'Alpha and Omega — Jesus cross typography', title: 'Alpha & Omega' },
  { src: '/WT_Faith_Over_Fear.jpg', alt: 'Faith Over Fear — distressed block lettering', title: 'Faith Over Fear' },
  { src: '/WT_Fruit_Spirit.jpg', alt: 'Fruit of the Spirit — Galatians 5:22-23 olive branch', title: 'Fruit of the Spirit' },
  { src: '/WT_Sweet_Words.jpg', alt: 'Sweet Words — Proverbs 16:24 bee design', title: 'Sweet Words' },
  { src: '/WT_Shepherd.jpg', alt: 'The Good Shepherd — Psalm 23:1', title: 'The Good Shepherd' },
  { src: '/WT_Samson.jpg', alt: 'Samson — Judges 15:15 comic style', title: 'Samson' },
  { src: '/WT_Leave_99.jpg', alt: 'Leave the 99 — Luke 15:4-7 lost sheep', title: 'Leave the 99' },
  { src: '/WT_Word_Alive.jpg', alt: 'The Word is Alive — tree growing from Bible', title: 'The Word is Alive' },
  { src: '/WT_Flowers.jpg', alt: 'Flowers in the Field — Matthew 6:28', title: 'Flowers in the Field' },
  { src: '/WT_El_Roi.jpg', alt: 'El Roi — desert landscape badge', title: 'El Roi' },
]

const logoProjects = [
  { src: '/Two_Angry_Bakers_Logo.png', alt: 'Two Angry Bakers logo', title: 'Two Angry Bakers', extraPad: false, type: 'client' as const },
  { src: '/Wholly_Tees_Logo.png', alt: 'Wholly Tees logo', title: 'Wholly Tees', extraPad: true, type: 'inhouse' as const },
  { src: '/Linea_Group.png', alt: 'Linea Group logo', title: 'Linea Group', extraPad: false, type: 'concept' as const },
  { src: "/Suga's.png", alt: "Suga's Bakery logo", title: "Suga's Bakery", extraPad: true, type: 'concept' as const },
  { src: '/Grain_&_Barrel.png', alt: 'Barrel & Grain logo', title: 'Barrel & Grain', extraPad: false, type: 'concept' as const },
  { src: '/sailors-logo.svg', alt: 'Sailors Chiropractic logo', title: 'Sailors Chiropractic', extraPad: true, type: 'concept' as const },
  { src: '/Green_Top_Juice.png', alt: 'Green Top Juice logo', title: 'Green Top Juice', extraPad: false, type: 'concept' as const },
  { src: '/Rizzario_Manufacturing_Company.png', alt: 'Rizzario Manufacturing Company logo', title: 'Rizzario', extraPad: true, type: 'concept' as const },
  { src: '/Wags_Pet_Boutique.png', alt: 'Wags Pet Boutique logo', title: 'Wags Pet Boutique', extraPad: false, type: 'concept' as const },
  { src: '/Blue_Shield_Home_Repair.png', alt: 'Blue Shield Home Repair logo', title: 'Blue Shield Home Repair', extraPad: false, type: 'concept' as const },
  { src: '/guard_dog.png', alt: 'Guard Dog Home Defense logo', title: 'Guard Dog Home Defense', extraPad: true, type: 'concept' as const },
  { src: '/wavescape.png', alt: 'Wavescape logo', title: 'Wavescape', extraPad: true, type: 'concept' as const },
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
            <span className={styles.portCount}>{websiteProjects.length} Projects</span>
          </div>
          <WebsiteCarousel projects={websiteProjects} />
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
            <span className={styles.portCount}>9 Projects</span>
          </div>
          <SocialCarousel items={socialProjects} />
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
            <span className={styles.portCount}>12 Marks</span>
          </div>
          <LogoCarousel items={logoProjects} />
        </div>
      </section>

      {/* APPAREL */}
      <section id="apparel" className={`${styles.portSection} ${styles.portSectionAlt}`}>
        <div className={styles.portInner}>
          <div className={styles.portHeader}>
            <div>
              <p className="section-label">Apparel</p>
              <h2 className={styles.portH2}>
                T-Shirt
                <br />
                <em>Design</em>
              </h2>
            </div>
            <span className={styles.portCount}>{apparelProjects.length} Designs</span>
          </div>
          <ApparelCarousel items={apparelProjects} />
          <p className={styles.apparelNote}>
            Designs for <em>Wholly Tees</em> — a faith-inspired apparel brand in the works.
          </p>
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
