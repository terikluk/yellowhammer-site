'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import styles from './page.module.css'

export default function ContactForm() {
  const router = useRouter()
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitting(true)
    setError('')

    const form = e.currentTarget
    const get = (name: string) =>
      (form.elements.namedItem(name) as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement)?.value ?? ''

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: get('name'),
          business: get('business'),
          email: get('email'),
          phone: get('phone'),
          projectType: get('project-type'),
          message: get('message'),
        }),
      })

      if (!res.ok) throw new Error()
      router.push('/thankyou')
    } catch {
      setError('Something went wrong. Please try again or email us directly.')
      setSubmitting(false)
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.formRow}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Full Name</label>
          <input type="text" id="name" name="name" autoComplete="name" required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="business">Business Name</label>
          <input type="text" id="business" name="business" autoComplete="organization" />
        </div>
      </div>

      <div className={styles.formRow}>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" name="email" autoComplete="email" required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="phone">
            Phone Number{' '}
            <span className={styles.optional}>(optional)</span>
          </label>
          <input type="tel" id="phone" name="phone" autoComplete="tel" />
        </div>
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="project-type">Project Type</label>
        <select id="project-type" name="project-type" defaultValue="">
          <option value="" disabled />
          <option value="logo-brand">Logo &amp; Brand Identity</option>
          <option value="website">Website Design &amp; Development</option>
          <option value="social">Social Media Design</option>
          <option value="maintenance">Website Maintenance</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Tell us about your project..."
          required
        />
      </div>

      {error && <p className={styles.formError}>{error}</p>}

      <button type="submit" className={styles.submit} disabled={submitting}>
        {submitting ? 'Sending…' : 'Send Message'}
      </button>
    </form>
  )
}
