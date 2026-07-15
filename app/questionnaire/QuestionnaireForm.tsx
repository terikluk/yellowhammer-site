'use client'

import { useState } from 'react'
import styles from './page.module.css'
import { submitQuestionnaire } from './actions'

const deliverableOptions = [
  'Logo & Brand Identity',
  'Website Design',
  'Social Media Design',
  'Ongoing Social Media Management',
  'All of the Above',
]

const noGrammarly = {
  'data-gramm': 'false',
  'data-gramm_editor': 'false',
  'data-enable-grammarly': 'false',
}

export default function QuestionnaireForm() {
  const [selectedTypes, setSelectedTypes] = useState<string[]>([])

  function toggleType(value: string) {
    setSelectedTypes((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    )
  }

  const wantsBranding =
    selectedTypes.includes('Logo & Brand Identity') || selectedTypes.includes('All of the Above')
  const wantsWebsite =
    selectedTypes.includes('Website Design') || selectedTypes.includes('All of the Above')
  const wantsSocial =
    selectedTypes.includes('Social Media Design') ||
    selectedTypes.includes('Ongoing Social Media Management') ||
    selectedTypes.includes('All of the Above')

  let sectionCount = 0
  const nextSection = () => String(++sectionCount).padStart(2, '0')

  return (
    <form action={submitQuestionnaire} encType="multipart/form-data">
      {/* ABOUT YOUR BUSINESS — always shown */}
      <div className={styles.qSection}>
        <p className={styles.qLabel}>Section {nextSection()}</p>
        <h2 className={styles.qTitle}>About Your Business</h2>

        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label htmlFor="business-name">Business Name</label>
            <input type="text" id="business-name" name="business-name" required {...noGrammarly} />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="your-name">Your Name &amp; Role</label>
            <input
              type="text"
              id="your-name"
              name="your-name"
              placeholder="e.g. Jane Smith, Owner"
              required
              {...noGrammarly}
            />
          </div>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="current-website">
            Current Website <span className={styles.optional}>(optional)</span>
          </label>
          <input type="url" id="current-website" name="current-website" placeholder="https://" {...noGrammarly} />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="business-description">What does your business do?</label>
          <textarea
            id="business-description"
            name="business-description"
            rows={4}
            placeholder="Describe your products, services, and what makes you different..."
            {...noGrammarly}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="ideal-customer">Who is your ideal customer?</label>
          <textarea
            id="ideal-customer"
            name="ideal-customer"
            rows={4}
            placeholder="Describe their age, lifestyle, values, and what they're looking for..."
            {...noGrammarly}
          />
        </div>
      </div>

      {/* WHAT DO YOU NEED — always shown, drives everything below */}
      <div className={styles.qSection}>
        <p className={styles.qLabel}>Section {nextSection()}</p>
        <h2 className={styles.qTitle}>What Do You Need?</h2>

        <div className={styles.formGroup}>
          <label>
            What are you looking for?{' '}
            <span className={styles.optional}>(select all that apply)</span>
          </label>
          <div className={styles.checkboxGroup}>
            {deliverableOptions.map((val) => (
              <label key={val} className={styles.checkboxLabel}>
                <input
                  type="checkbox"
                  name="deliverables"
                  value={val}
                  checked={selectedTypes.includes(val)}
                  onChange={() => toggleType(val)}
                />
                {val}
              </label>
            ))}
          </div>
          {selectedTypes.length === 0 && (
            <p className={styles.hint}>
              Select at least one — the rest of the form will only ask about what applies to you.
            </p>
          )}
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
            {...noGrammarly}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="brand-files">
            Upload your logo or brand files{' '}
            <span className={styles.optional}>(optional)</span>
          </label>
          <input
            type="file"
            id="brand-files"
            name="brand-files"
            multiple
            accept="image/*,.pdf,.ai,.eps,.svg"
            className={styles.fileInput}
          />
          <p className={styles.hint}>Logos, brand guidelines, mood boards — whatever you have.</p>
        </div>
      </div>

      {/* YOUR BRAND PERSONALITY — only if branding is wanted */}
      {wantsBranding && (
        <div className={styles.qSection}>
          <p className={styles.qLabel}>Section {nextSection()}</p>
          <h2 className={styles.qTitle}>Your Brand Personality</h2>

          <div className={styles.formGroup}>
            <label htmlFor="brand-materials">
              Any specific brand materials you need?{' '}
              <span className={styles.optional}>(optional)</span>
            </label>
            <textarea
              id="brand-materials"
              name="brand-materials"
              rows={3}
              placeholder="e.g. Business cards, letterhead, signage, social media templates..."
              {...noGrammarly}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="brand-words">3–5 words that describe your brand</label>
            <textarea
              id="brand-words"
              name="brand-words"
              rows={3}
              placeholder="e.g. Warm, Trustworthy, Artisan, Modern, Approachable..."
              {...noGrammarly}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="avoid-words">3–5 words you want to avoid</label>
            <textarea
              id="avoid-words"
              name="avoid-words"
              rows={3}
              placeholder="e.g. Corporate, Cheap, Busy, Loud..."
              {...noGrammarly}
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
              {...noGrammarly}
            />
          </div>
        </div>
      )}

      {/* VISUAL DIRECTION — only if branding is wanted */}
      {wantsBranding && (
        <div className={styles.qSection}>
          <p className={styles.qLabel}>Section {nextSection()}</p>
          <h2 className={styles.qTitle}>Visual Direction</h2>

          <div className={styles.formGroup}>
            <label htmlFor="colors-love">Colors you love and why</label>
            <textarea
              id="colors-love"
              name="colors-love"
              rows={3}
              placeholder="e.g. Deep greens — they feel grounded and natural..."
              {...noGrammarly}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="colors-avoid">Colors you want to avoid</label>
            <textarea
              id="colors-avoid"
              name="colors-avoid"
              rows={3}
              placeholder="e.g. Neon, overly bright colors, or anything that feels clinical..."
              {...noGrammarly}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="admired-brands">3 brands you admire visually and why</label>
            <textarea
              id="admired-brands"
              name="admired-brands"
              rows={4}
              placeholder="e.g. Aesop — clean, minimal, sophisticated. Magnolia — warm and handcrafted..."
              {...noGrammarly}
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
      )}

      {/* WEBSITE DETAILS — only if website is wanted */}
      {wantsWebsite && (
        <div className={styles.qSection}>
          <p className={styles.qLabel}>Section {nextSection()}</p>
          <h2 className={styles.qTitle}>Website Details</h2>

          <div className={styles.formGroup}>
            <label htmlFor="website-features">
              Any must-have pages or features?
            </label>
            <textarea
              id="website-features"
              name="website-features"
              rows={4}
              placeholder="e.g. Online booking, e-commerce, blog, portfolio gallery, contact form..."
              {...noGrammarly}
            />
          </div>
        </div>
      )}

      {/* SOCIAL MEDIA DETAILS — only if social is wanted */}
      {wantsSocial && (
        <div className={styles.qSection}>
          <p className={styles.qLabel}>Section {nextSection()}</p>
          <h2 className={styles.qTitle}>Social Media Details</h2>

          <div className={styles.formGroup}>
            <label htmlFor="social-platforms">Which platforms matter most to you?</label>
            <textarea
              id="social-platforms"
              name="social-platforms"
              rows={3}
              placeholder="e.g. Instagram, TikTok, Facebook, LinkedIn..."
              {...noGrammarly}
            />
          </div>
        </div>
      )}

      {/* THE PROJECT — always shown */}
      <div className={styles.qSection}>
        <p className={styles.qLabel}>Section {nextSection()}</p>
        <h2 className={styles.qTitle}>The Project</h2>

        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label htmlFor="timeline">Timeline</label>
            <input
              type="text"
              id="timeline"
              name="timeline"
              placeholder="e.g. 6 weeks, end of Q3, ASAP..."
              {...noGrammarly}
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

      {/* ANYTHING ELSE — always shown */}
      <div className={`${styles.qSection} ${styles.qSectionLast}`}>
        <p className={styles.qLabel}>Section {nextSection()}</p>
        <h2 className={styles.qTitle}>Anything Else</h2>

        <div className={styles.formGroup}>
          <label htmlFor="anything-else">Anything else you&rsquo;d like us to know?</label>
          <textarea
            id="anything-else"
            name="anything-else"
            rows={5}
            placeholder="Inspiration, concerns, links to mood boards, specific requests — anything goes..."
            {...noGrammarly}
          />
        </div>
      </div>

      <div className={styles.submitWrap}>
        <button type="submit" className={styles.submit}>
          Submit Questionnaire
        </button>
      </div>
    </form>
  )
}
