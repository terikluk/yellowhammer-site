import type { Metadata } from 'next'
import Hero from '@/components/Hero'
import styles from './page.module.css'
import { submitQuestionnaire } from './actions'

export const metadata: Metadata = { title: 'Start Your Project' }

export default function Questionnaire() {
  return (
    <>
      <Hero
        eyebrow="Start Your Project"
        h1Line1="Tell us about"
        h1Em="your brand."
        tagline="Every great brand starts with the right questions."
      />

      <div className={styles.wrap}>
        <p className={styles.intro}>
          Take a few minutes to fill this out — the more detail you give us, the
          better we can serve you.
        </p>

        <form action={submitQuestionnaire}>

          {/* SECTION 1 */}
          <div className={styles.qSection}>
            <p className={styles.qLabel}>Section 01</p>
            <h2 className={styles.qTitle}>About Your Business</h2>

            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="business-name">Business Name</label>
                <input type="text" id="business-name" name="business-name" required />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="your-name">Your Name &amp; Role</label>
                <input type="text" id="your-name" name="your-name" required />
              </div>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="current-website">
                Current Website{' '}
                <span className={styles.optional}>(optional)</span>
              </label>
              <input
                type="url"
                id="current-website"
                name="current-website"
                placeholder="https://"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="business-description">
                What does your business do?
              </label>
              <textarea
                id="business-description"
                name="business-description"
                rows={4}
                placeholder="Describe your products, services, and what makes you different..."
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="ideal-customer">Who is your ideal customer?</label>
              <textarea
                id="ideal-customer"
                name="ideal-customer"
                rows={4}
                placeholder="Describe their age, lifestyle, values, and what they're looking for..."
              />
            </div>
          </div>

          {/* SECTION 2 */}
          <div className={styles.qSection}>
            <p className={styles.qLabel}>Section 02</p>
            <h2 className={styles.qTitle}>Your Brand Personality</h2>

            <div className={styles.formGroup}>
              <label htmlFor="brand-words">3–5 words that describe your brand</label>
              <textarea
                id="brand-words"
                name="brand-words"
                rows={3}
                placeholder="e.g. Warm, Trustworthy, Artisan, Modern, Approachable..."
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="avoid-words">3–5 words you want to avoid</label>
              <textarea
                id="avoid-words"
                name="avoid-words"
                rows={3}
                placeholder="e.g. Corporate, Cheap, Busy, Loud..."
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="brand-feeling">
                What feeling should someone have after interacting with your brand?
              </label>
              <textarea
                id="brand-feeling"
                name="brand-feeling"
                rows={4}
                placeholder="e.g. Inspired, confident, at ease, excited to work with you..."
              />
            </div>
          </div>

          {/* SECTION 3 */}
          <div className={styles.qSection}>
            <p className={styles.qLabel}>Section 03</p>
            <h2 className={styles.qTitle}>Visual Direction</h2>

            <div className={styles.formGroup}>
              <label htmlFor="colors-love">Colors you love and why</label>
              <textarea
                id="colors-love"
                name="colors-love"
                rows={3}
                placeholder="e.g. Deep greens — they feel grounded and natural..."
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="colors-avoid">Colors you want to avoid</label>
              <textarea
                id="colors-avoid"
                name="colors-avoid"
                rows={3}
                placeholder="e.g. Neon, overly bright colors, or anything that feels clinical..."
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="admired-brands">
                3 brands you admire visually and why
              </label>
              <textarea
                id="admired-brands"
                name="admired-brands"
                rows={4}
                placeholder="e.g. Aesop — clean, minimal, sophisticated. Magnolia — warm and handcrafted..."
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="style-preference">Style Preference</label>
              <select id="style-preference" name="style-preference" defaultValue="">
                <option value="" disabled />
                <option value="modern-minimal">Modern &amp; Minimal</option>
                <option value="warm-organic">Warm &amp; Organic</option>
                <option value="bold-edgy">Bold &amp; Edgy</option>
                <option value="classic-elegant">Classic &amp; Elegant</option>
                <option value="not-sure">Not Sure Yet</option>
              </select>
            </div>
          </div>

          {/* SECTION 4 */}
          <div className={styles.qSection}>
            <p className={styles.qLabel}>Section 04</p>
            <h2 className={styles.qTitle}>The Project</h2>

            <div className={styles.formGroup}>
              <label>
                What are you looking for?{' '}
                <span className={styles.optional}>(select all that apply)</span>
              </label>
              <div className={styles.checkboxGroup}>
                {[
                  'Logo & Brand Identity',
                  'Website Design',
                  'Social Media Design',
                  'All of the Above',
                ].map((val) => (
                  <label key={val} className={styles.checkboxLabel}>
                    <input type="checkbox" name="deliverables" value={val} />
                    {val}
                  </label>
                ))}
              </div>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="existing-branding">
                Do you have existing branding to work with?
              </label>
              <textarea
                id="existing-branding"
                name="existing-branding"
                rows={3}
                placeholder="e.g. Yes — we have a logo but need everything else. Or: Starting from scratch..."
              />
            </div>

            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="timeline">Timeline</label>
                <input
                  type="text"
                  id="timeline"
                  name="timeline"
                  placeholder="e.g. 6 weeks, end of Q3, ASAP..."
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="budget">Budget Range</label>
                <select id="budget" name="budget" defaultValue="">
                  <option value="" disabled />
                  <option value="under-500">Under $500</option>
                  <option value="500-1000">$500–$1,000</option>
                  <option value="1000-2500">$1,000–$2,500</option>
                  <option value="2500-5000">$2,500–$5,000</option>
                  <option value="5000+">$5,000+</option>
                </select>
              </div>
            </div>
          </div>

          {/* SECTION 5 */}
          <div className={`${styles.qSection} ${styles.qSectionLast}`}>
            <p className={styles.qLabel}>Section 05</p>
            <h2 className={styles.qTitle}>Anything Else</h2>

            <div className={styles.formGroup}>
              <label htmlFor="anything-else">
                Anything else you&rsquo;d like us to know?
              </label>
              <textarea
                id="anything-else"
                name="anything-else"
                rows={5}
                placeholder="Inspiration, concerns, links to mood boards, specific requests — anything goes..."
              />
            </div>
          </div>

          <div className={styles.submitWrap}>
            <button type="submit" className={styles.submit}>
              Submit Questionnaire
            </button>
          </div>
        </form>
      </div>
    </>
  )
}
