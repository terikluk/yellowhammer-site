'use client'

import { useState } from 'react'
import Link from 'next/link'
import Reveal from '@/components/Reveal'
import styles from './page.module.css'

type PackageOption = {
  key: string
  title: string
  price: number
}

const ADD_ONS = [
  { key: 'page', label: 'Additional page', price: 100 },
  { key: 'blog', label: 'Blog setup', price: 200 },
  { key: 'ecommerce', label: 'E-commerce setup (up to 10 products)', price: 500 },
  { key: 'products', label: 'Additional products (per 10)', price: 100 },
  { key: 'booking', label: 'Booking/scheduling integration', price: 250 },
  { key: 'integration', label: 'Third-party integration (each)', price: 200 },
  { key: 'newsletter', label: 'Email newsletter setup', price: 150 },
  { key: 'logo-refresh', label: 'Logo refresh', price: 300 },
  { key: 'social-kit', label: 'Social media starter kit', price: 250 },
]

const RUSH_RATE = 0.25

function money(n: number) {
  return `$${Math.round(n).toLocaleString()}`
}

export default function EstimateCalculator({ packages }: { packages: PackageOption[] }) {
  const [packageKey, setPackageKey] = useState(packages[0].key)
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([])
  const [rush, setRush] = useState(false)

  const pkg = packages.find((p) => p.key === packageKey) ?? packages[0]
  const chosenAddOns = ADD_ONS.filter((a) => selectedAddOns.includes(a.key))
  const addOnsTotal = chosenAddOns.reduce((sum, a) => sum + a.price, 0)
  const subtotal = pkg.price + addOnsTotal
  const total = rush ? subtotal * (1 + RUSH_RATE) : subtotal

  function toggleAddOn(key: string) {
    setSelectedAddOns((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]
    )
  }

  const summaryLines = [
    `${pkg.title} package — ${money(pkg.price)}`,
    ...chosenAddOns.map((a) => `${a.label} — ${money(a.price)}`),
    ...(rush ? ['Rush delivery — +25%'] : []),
    `Estimated total: ${money(total)}`,
  ]
  const message = `I'm interested in building an estimate:\n\n${summaryLines.join('\n')}\n\nPlease confirm this estimate and next steps.`

  return (
    <Reveal variant="text" className={styles.calculator}>
      <p className="section-label" style={{ textAlign: 'center' } as React.CSSProperties}>
        Build Your Estimate
      </p>
      <p className={styles.calculatorLead}>
        Pick a package and add exactly what you need — the total updates as you go.
      </p>

      <div className={styles.calcPackageRow}>
        {packages.map((p) => (
          <button
            key={p.key}
            type="button"
            className={`${styles.calcPackageBtn} ${packageKey === p.key ? styles.calcPackageBtnActive : ''}`}
            onClick={() => setPackageKey(p.key)}
          >
            <span>{p.title}</span>
            <span className={styles.calcPackageBtnPrice}>{money(p.price)}</span>
          </button>
        ))}
      </div>

      <div className={styles.calcAddOnList}>
        {ADD_ONS.map((a) => (
          <label key={a.key} className={styles.calcAddOnRow}>
            <span className={styles.calcAddOnLabel}>
              <input
                type="checkbox"
                checked={selectedAddOns.includes(a.key)}
                onChange={() => toggleAddOn(a.key)}
              />
              {a.label}
            </span>
            <span className={styles.calcAddOnPrice}>+{money(a.price)}</span>
          </label>
        ))}
        <label className={styles.calcAddOnRow}>
          <span className={styles.calcAddOnLabel}>
            <input type="checkbox" checked={rush} onChange={() => setRush((r) => !r)} />
            Rush delivery
          </span>
          <span className={styles.calcAddOnPrice}>+25%</span>
        </label>
      </div>

      <div className={styles.calcTotalBar}>
        <span>Estimated Total</span>
        <span className={styles.calcTotalAmount}>{money(total)}</span>
      </div>

      <Link
        href={`/contact?type=${pkg.key}&message=${encodeURIComponent(message)}`}
        className={`btn ${styles.calcCta}`}
      >
        Get Your Exact Quote
      </Link>
    </Reveal>
  )
}
