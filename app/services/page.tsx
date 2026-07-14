import type { Metadata } from 'next'
import Link from 'next/link'
import HeroCarousel from '@/components/HeroCarousel'
import WaveDivider from '@/components/WaveDivider'
import Reveal from '@/components/Reveal'
import FaqAccordionItem from '@/components/FaqAccordionItem'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Services & Pricing',
  description:
    'Website design, social media management, and brand identity services from Yellowhammer Studios — Huntsville, AL.',
}

const packages = [
  {
    key: 'nest',
    image: '/nest.png',
    title: 'Nest',
    tagline: 'Perfect for new or small businesses that need a professional online presence.',
    price: '$2,200',
    careDays: 30,
    bestFor: ['New businesses', 'Solo entrepreneurs', 'Local service providers'],
    plus: 'What’s Included',
    includes: [
      'Up to 5 pages',
      'Responsive design',
      'Contact form',
      'Basic SEO',
      'Google Analytics',
      'Launch support',
    ],
    cta: 'Choose Nest',
  },
  {
    key: 'rise',
    image: '/rise.png',
    title: 'Rise',
    tagline: 'Designed for growing businesses that need more room to expand.',
    price: '$2,800',
    careDays: 60,
    bestFor: ['Growing companies', 'Businesses needing more content', 'Companies expanding online'],
    plus: 'Everything in Nest, plus',
    featured: true,
    includes: [
      'Up to 10 pages',
      'Blog',
      'Testimonials',
      'FAQ section',
      'Additional custom layouts',
      'More design customization',
    ],
    cta: 'Choose Rise',
  },
  {
    key: 'flight',
    image: '/flight.png',
    title: 'Flight',
    tagline: 'Our most complete website package for businesses ready to scale.',
    price: '$3,400',
    careDays: 90,
    bestFor: ['Established businesses', 'Larger websites', 'Companies needing advanced functionality'],
    plus: 'Everything in Rise, plus',
    includes: [
      'Up to 20 pages',
      'Booking or scheduling',
      'Small e-commerce',
      'Advanced integrations',
      'More complex functionality',
      'Priority launch support',
    ],
    cta: 'Choose Flight',
  },
]

const services = [
  {
    num: '01',
    label: 'Identity',
    title: 'Brand Identity',
    desc: 'A thoughtful visual foundation for businesses that want to be remembered.',
    price: '$950',
    period: '',
    startingAt: true,
    cta: 'Build My Brand',
    includes: [
      'Logo Design',
      'Color Palette',
      'Typography',
      'Brand Guidelines',
      'Final Asset Package',
    ],
  },
  {
    num: '02',
    label: 'Website Care',
    title: 'Website Care Plan',
    desc: 'We handle the technical side so you can focus on running your business.',
    price: '$150',
    period: '/mo',
    startingAt: true,
    cta: 'Maintain My Website',
    includes: [
      'Content Updates',
      'Website Health Monitoring',
      'Hosting Management',
      'Priority Support',
      'Cancel anytime, 30 days notice',
    ],
  },
  {
    num: '03',
    label: 'Social',
    title: 'Social Content',
    desc: 'Beautiful, branded content designed to keep your business visible and consistent across digital platforms.',
    price: '$500',
    period: '/mo',
    startingAt: true,
    cta: 'Grow My Audience',
    includes: [
      '2 posts per week, adapted for each platform',
      'Instagram, TikTok, LinkedIn & Facebook',
      'Organic content, no paid ads',
      'Cancel anytime, 30 days notice',
    ],
  },
]

const whyUs = [
  {
    title: 'Understanding First',
    body: 'Before any design begins, we take time to learn your business, your goals, and the people you serve.',
  },
  {
    title: 'Nothing Off the Shelf',
    body: 'Every website, brand, and piece of content is created specifically for you — never templated, never reused.',
  },
  {
    title: 'Growing With You',
    body: 'We’re here long after launch, staying on as a creative partner as your business changes and grows.',
  },
]

const faqs = [
  {
    q: 'Do you use WordPress?',
    a: 'No — Yellowhammer builds modern, custom websites using current technologies for better performance, flexibility, and long-term reliability.',
  },
  {
    q: 'Do you work with businesses outside Huntsville and Montgomery?',
    a: 'Yes — we work with businesses anywhere in the U.S. Since our whole process is designed around flexible communication (email, text, phone, video call), it works just as smoothly whether you’re local or across the country.',
  },
  {
    q: 'What platform do you build on?',
    a: 'We build every website with Next.js and host it on Vercel — a modern combination that keeps pages loading fast and your site reliably online.',
  },
  {
    q: 'Will my website show up on Google?',
    a: 'Yes — every website includes foundational SEO (fast loading speed, mobile optimization, proper structure, and metadata) to help search engines find and rank your site. For a more aggressive SEO strategy, that’s something we can build out separately.',
  },
  {
    q: 'Can you redesign my existing website?',
    a: 'Yes. Rather than working within your current platform — Squarespace, WordPress, Wix, or otherwise — we rebuild your site from scratch on our own custom platform for better performance and long-term flexibility.',
  },
  {
    q: 'Can I update my website myself?',
    a: 'Some websites may include simple editing capabilities depending on the project, but most clients prefer the Website Care Plan so we can handle updates and maintenance for them. If you’d rather not continue with Care, we’re happy to hand everything off — hosting, domain, and site files — so you’re fully set up on your own.',
  },
  {
    q: 'Do I own my website?',
    a: 'Yes. Once your project is paid in full, you own the finished website and all approved design assets created specifically for your project.',
  },
  {
    q: 'Who owns the hosting and other accounts my site uses?',
    a: 'Whenever possible, we set up hosting and supporting services — like your contact form’s email delivery — under your own accounts, not ours, so you retain full ownership and control regardless of whether you continue with Care.',
  },
  {
    q: 'Do you offer payment plans?',
    a: 'Yes — flexible payment options are available to help make your project more accessible.',
  },
  {
    q: 'How do you get paid?',
    a: 'We send a secure invoice through Wave for each payment, with the option to pay by bank transfer or card — whichever works best for you.',
  },
  {
    q: 'What do you need from clients to get started?',
    a: 'It depends on the project — if you already have a logo, we’ll need those files; if we’re creating your brand from scratch, that’s already covered. Beyond that, we mainly just need any personal photos you’d like featured (like a team or about photo) — everything else, including color and style preferences, we’ll cover together in our project questionnaire.',
  },
  {
    q: 'Will you write my website’s content, or do I need to provide it?',
    a: 'Either works. We can write your website’s content from scratch, or if you already have text you’d like to use, we’ll edit and polish it to fit the site.',
  },
  {
    q: 'How long does a project take?',
    a: 'Turnaround depends on our current workload and the project’s scope, but Brand Identity can move as quickly as 1 week, and websites as quickly as 2 weeks.',
  },
  {
    q: 'How do we communicate during a project?',
    a: 'Whatever’s most comfortable for you — email, text, phone, or video call. For edits and revisions, the more detailed your feedback, the better; specific notes help us capture exactly what you’re picturing.',
  },
  {
    q: 'How many rounds of revisions do I get?',
    a: 'We don’t put a hard cap on revisions — our goal is getting it just right for you, not rushing through a set number of rounds. If a request grows into a new direction or added scope, we’ll simply talk it through together before moving forward.',
  },
  {
    q: 'What happens after launch?',
    a: 'Many clients continue with our Website Care Plan, so we can handle updates, maintenance, and ongoing support after your site goes live.',
  },
]

export default function Services() {
  return (
    <>
      <section className={styles.svcHero}>
        <div className={styles.svcHeroInner}>
          <div className={styles.svcHeroText}>
            <p className="section-label">Services & Pricing</p>
            <h1 className={styles.svcHeroH1}>
              Services
              <br />
              <em>&amp; Pricing</em>
            </h1>
            <p className={styles.svcHeroTagline}>
              Every project begins with understanding your business. From
              brand identity to custom websites, everything we create is
              designed with purpose, crafted with care, and priced
              transparently.
            </p>
          </div>
          <HeroCarousel
            items={[
              { src: '/restore-church-preview.jpg', caption: 'Website Design' },
              { src: '/Linea_Group.png', caption: 'Brand Identity' },
              { src: '/Yellowhammer_Social_Media.png', caption: 'Social Content' },
            ]}
          />
        </div>
      </section>

      {/* WORKING TOGETHER */}
      <section className={styles.whySection}>
        <Reveal variant="text">
          <p className="section-label" style={{ textAlign: 'center' } as React.CSSProperties}>
            Working Together
          </p>
          <h2 className={styles.whyHeading}>
            Our
            <br />
            <em>Approach</em>
          </h2>
        </Reveal>
        <div className={styles.whyList}>
          {whyUs.map((w, i) => (
            <Reveal key={w.title} variant="text" delay={i * 120} className={styles.whyItem}>
              <h3 className={styles.whyItemTitle}>{w.title}</h3>
              <p className={styles.whyItemBody}>{w.body}</p>
            </Reveal>
          ))}
        </div>
        <div className={styles.whySectionWave}>
          <WaveDivider fill="var(--cream)" />
        </div>
      </section>

      <section className={styles.pricingSection}>
        <Reveal variant="text" className={styles.packagesIntro}>
          <p className="section-label">Website Design</p>
          <p className={styles.packagesLead}>
            Choose the website that fits your business today.
          </p>
          <p className={styles.packagesSubtext}>
            Every website is custom designed. The difference between each
            package is the amount of content, functionality, and ongoing
            support included.
          </p>
        </Reveal>
        <div className={styles.packagesGrid}>
          {packages.map((p, i) => (
            <Reveal
              key={p.key}
              delay={i * 120}
              className={`${styles.packageCard} ${p.featured ? styles.packageCardFeatured : ''}`}
            >
              {p.featured && <p className={styles.packageKicker}>Most Popular</p>}
              <img src={p.image} alt="" className={styles.packageImage} />
              <div className={styles.packageHeader}>
                <h3 className={styles.packageTitle}>{p.title}</h3>
                <p className={styles.packagePrice}>{p.price}</p>
              </div>
              <p className={styles.packageTagline}>{p.tagline}</p>
              <p className={styles.packageCareIncluded}>
                <span className={styles.packageCheck}>✓</span> Includes {p.careDays} Days of Website Care
              </p>
              <div>
                <p className={styles.packageBestForLabel}>Best For</p>
                <ul className={styles.packageBestFor}>
                  {p.bestFor.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className={styles.packageDivider}>
                <p className={styles.packagePlus}>{p.plus}</p>
                <ul className={styles.packageIncludes}>
                  {p.includes.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <Link href="/contact" className={`btn ${styles.packageCta}`}>
                {p.cta}
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal variant="text" className={styles.careNote}>
          <p className={styles.careNoteText}>
            Every website includes complimentary Website Care after launch
            because the weeks following a launch are when questions,
            updates, and fine-tuning naturally happen. We don&rsquo;t
            disappear the day your site goes live.
          </p>
          <p className={styles.careNoteText}>
            Not sure which package fits? We&rsquo;ll help you choose. If
            your needs change during planning, we&rsquo;ll adjust before
            any work begins.
          </p>
        </Reveal>

        <Reveal variant="text" className={styles.servicesIntro}>
          <p className="section-label">Continue Building Your Brand</p>
        </Reveal>
        <div className={styles.pricingGrid}>
          {services.map((s) => (
            <div
              key={s.num}
              id={s.label.toLowerCase().replace(/\s+/g, '-')}
              className={styles.pricingCard}
            >
              <div className={styles.pricingAccent}>
                <span className={styles.pricingNum}>{s.num}</span>
                <span className={styles.pricingLabel}>{s.label}</span>
              </div>
              <div className={styles.pricingBody}>
                <h2 className={styles.pricingTitle}>{s.title}</h2>
                <div className={styles.priceRow}>
                  {s.startingAt && <span className={styles.priceStarting}>From</span>}
                  <span className={styles.priceAmount}>{s.price}</span>
                  {s.period && <span className={styles.pricePeriod}>{s.period}</span>}
                </div>
                <p className={styles.pricingDesc}>{s.desc}</p>
                <p className={styles.includesLabel}>What&rsquo;s Included</p>
                <ul className={styles.pricingIncludes}>
                  {s.includes.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <Link href="/contact" className={`btn ${styles.pricingCta}`}>
                  {s.cta}
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.pricingWave}>
          <WaveDivider fill="var(--ink)" />
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className={styles.process}>
        <Reveal variant="text">
          <p className="section-label" style={{ textAlign: 'center' } as React.CSSProperties}>
            The Process
          </p>
          <h2 className={styles.processHeading}>
            How it
            <br />
            <em>works.</em>
          </h2>
        </Reveal>
        <div className={styles.stepsGrid}>
          {[
            {
              n: '01',
              title: 'Reach Out',
              body: 'Tell us about your project through our contact form or give us a call.',
            },
            {
              n: '02',
              title: 'Get the Questionnaire',
              body: 'We’ll send you our brand questionnaire so every detail is tailored to your vision.',
            },
            {
              n: '03',
              title: 'We Get to Work',
              body: 'Once we understand your brand, we build with intention and keep you involved every step of the way.',
            },
          ].map((step, i) => (
            <Reveal key={step.n} variant="text" delay={i * 120} className={styles.step}>
              <p className={styles.stepNumber}>{step.n}</p>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDesc}>{step.body}</p>
            </Reveal>
          ))}
        </div>
        <div className={styles.processWave}>
          <WaveDivider fill="var(--paper)" />
        </div>
      </section>

      {/* FAQ */}
      <section className={styles.faq}>
        <Reveal variant="text">
          <p className="section-label" style={{ textAlign: 'center' } as React.CSSProperties}>
            Questions
          </p>
          <h2 className={styles.faqHeading}>
            Frequently Asked
            <br />
            <em>Questions</em>
          </h2>
        </Reveal>
        <div className={styles.faqList}>
          {faqs.map((f, i) => (
            <Reveal key={f.q} variant="text" delay={i * 80} className={styles.faqItem}>
              <FaqAccordionItem question={f.q} answer={f.a} />
            </Reveal>
          ))}
        </div>
        <Reveal variant="text" className={styles.faqClosing}>
          <p className={styles.faqClosingText}>Didn&rsquo;t see your question?</p>
          <Link href="/contact" className="btn">
            Send Us a Message
          </Link>
        </Reveal>
        <div className={styles.faqWave}>
          <WaveDivider fill="var(--ink)" />
        </div>
      </section>

      {/* RIGHT FIT */}
      <section className={styles.rightFit}>
        <Reveal variant="text" className={styles.rightFitInner}>
          <p className="section-label" style={{ textAlign: 'center' } as React.CSSProperties}>
            Is This You?
          </p>
          <h2 className={styles.rightFitH2}>
            Is Yellowhammer the
            <br />
            <em>Right Fit?</em>
          </h2>
          <p className={styles.rightFitBody}>
            Yellowhammer Studios works best with businesses that value
            thoughtful design, clear communication, and long-term
            relationships. Every client gets our full attention, from our
            first conversation through long after launch.
          </p>
        </Reveal>
        <div className={styles.rightFitWave}>
          <WaveDivider fill="var(--amber-wash)" />
        </div>
      </section>

      {/* FINAL CTA */}
      <div className={styles.ctaWrap}>
        <div className={styles.ctaInner}>
          <Reveal variant="text" className={styles.ctaText}>
            <p className="section-label">Start a Project</p>
            <h2 className={styles.ctaH2}>
              Ready to work
              <br />
              <em>together?</em>
            </h2>
            <p className={styles.ctaBody}>
              Every project is thoughtfully crafted to reflect your business,
              your story, and the people you serve.
            </p>
            <Link href="/contact" className="btn">
              Let&rsquo;s Talk
            </Link>
          </Reveal>
        </div>
        <div className={styles.sectionWave}>
          <WaveDivider fill="var(--espresso)" />
        </div>
      </div>
    </>
  )
}
