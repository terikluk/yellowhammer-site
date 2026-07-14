'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import styles from './page.module.css'

const projectTypes = [
  { value: 'logo-brand', label: 'Brand Identity' },
  { value: 'website', label: 'Website Design' },
  { value: 'social', label: 'Social Content' },
  { value: 'maintenance', label: 'Website Care Plan' },
  { value: 'other', label: 'Other' },
]

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
    const checkedProjectTypes = Array.from(
      form.querySelectorAll<HTMLInputElement>('input[name="project-type"]:checked')
    ).map((el) => el.value)

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: get('name'),
          business: get('business'),
          email: get('email'),
          phone: get('phone'),
          projectType: checkedProjectTypes.join(', '),
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
        <label>
          Project Type{' '}
          <span className={styles.optional}>(select any that apply)</span>
        </label>
        <div className={styles.checkboxGroup}>
          {projectTypes.map(({ value, label }) => (
            <label key={value} className={styles.checkboxBox}>
              <input type="checkbox" name="project-type" value={value} />
              <span>{label}</span>
            </label>
          ))}
        </div>
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="message">
          Message{' '}
          <span className={styles.optional}>(optional)</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Tell us about your project..."
        />
      </div>

      {error && <p className={styles.formError}>{error}</p>}

      <button type="submit" className={styles.submit} disabled={submitting}>
        {submitting ? 'Sending…' : 'Send Message'}
      </button>
    </form>
  )
}
