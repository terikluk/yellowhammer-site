'use client'

import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import styles from './page.module.css'

const projectTypes = [
  { value: 'nest', label: 'Website — Nest' },
  { value: 'rise', label: 'Website — Rise' },
  { value: 'flight', label: 'Website — Flight' },
  { value: 'logo-brand', label: 'Brand Identity' },
  { value: 'social', label: 'Social Content' },
  { value: 'maintenance', label: 'Website Care Plan' },
  { value: 'other', label: 'Other' },
]

export default function ContactForm({
  initialTypes = [],
  initialMessage = '',
}: {
  initialTypes?: string[]
  initialMessage?: string
}) {
  const router = useRouter()
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')
  const [selectedTypes, setSelectedTypes] = useState<string[]>(initialTypes)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  function toggleType(value: string) {
    setSelectedTypes((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    )
  }

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
          projectType: selectedTypes
            .map((v) => projectTypes.find((t) => t.value === v)?.label)
            .join(', '),
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
          <label htmlFor="name">
            Full Name <span className={styles.required}>*</span>
          </label>
          <input type="text" id="name" name="name" autoComplete="name" required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="business">Business Name</label>
          <input type="text" id="business" name="business" autoComplete="organization" />
        </div>
      </div>

      <div className={styles.formRow}>
        <div className={styles.formGroup}>
          <label htmlFor="email">
            Email Address <span className={styles.required}>*</span>
          </label>
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
        <div className={styles.dropdownWrap} ref={dropdownRef}>
          <button
            type="button"
            className={styles.dropdownTrigger}
            onClick={() => setDropdownOpen((o) => !o)}
            aria-expanded={dropdownOpen}
          >
            <span className={selectedTypes.length ? '' : styles.dropdownPlaceholder}>
              {selectedTypes.length
                ? projectTypes
                    .filter((t) => selectedTypes.includes(t.value))
                    .map((t) => t.label)
                    .join(', ')
                : 'Select project type(s)'}
            </span>
            <span className={`${styles.dropdownArrow} ${dropdownOpen ? styles.dropdownArrowOpen : ''}`}>
              ▾
            </span>
          </button>
          {dropdownOpen && (
            <div className={styles.dropdownPanel}>
              {projectTypes.map(({ value, label }) => (
                <label key={value} className={styles.dropdownOption}>
                  <input
                    type="checkbox"
                    checked={selectedTypes.includes(value)}
                    onChange={() => toggleType(value)}
                  />
                  <span>{label}</span>
                </label>
              ))}
            </div>
          )}
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
          defaultValue={initialMessage}
        />
      </div>

      {error && <p className={styles.formError}>{error}</p>}

      <button type="submit" className={styles.submit} disabled={submitting}>
        {submitting ? 'Sending…' : 'Send Message'}
      </button>
    </form>
  )
}
