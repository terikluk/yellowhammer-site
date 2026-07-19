'use client'

import { useState } from 'react'
import Link from 'next/link'
import Reveal from '@/components/Reveal'
import styles from './page.module.css'
import { INSTALLMENT_MONTHS, monthlyPaymentFor, money } from './pricing'

type PackageOption = {
  key: string
  title: string
  price: number
}

type AddOn = {
  key: string
  label: string
  price: number
  details?: string[]
}

const ADD_ONS: AddOn[] = [
  { key: 'page', label: 'Additional page', price: 200 },
  { key: 'blog', label: 'Blog setup', price: 200 },
  { key: 'testimonials', label: 'Testimonials section', price: 150 },
  { key: 'faq', label: 'FAQ section', price: 150 },
  { key: 'ecommerce', label: 'E-commerce setup (up to 10 products)', price: 500 },
  { key: 'products', label: 'Additional products (per 10)', price: 100 },
  { key: 'booking', label: 'Booking/scheduling integration', price: 300 },
  { key: 'integration', label: 'Third-party integration (each)', price: 200 },
  { key: 'newsletter', label: 'Email newsletter setup', price: 150 },
  { key: 'logo-refresh', label: 'Logo refresh', price: 300 },
  {
    key: 'social-kit',
    label: 'Social media starter kit',
    price: 300,
    details: [
      '5 branded Canva post templates (announcement, quote/testimonial, promo, tip, event)',
      '2 story templates',
      'Instagram highlight covers',
      'Brand reference card (hex codes, fonts, quick usage notes)',
    ],
  },
]

// Add-ons that duplicate what a package already includes — hidden (and
// auto-deselected) whenever that package is chosen. Rise includes a blog,
// testimonials, and an FAQ section; Flight includes everything Rise does,
// plus booking and e-commerce.
const INCLUDED_BY_PACKAGE: Record<string, string[]> = {
  nest: [],
  rise: ['blog', 'testimonials', 'faq'],
  flight: ['blog', 'testimonials', 'faq', 'booking', 'ecommerce'],
}

const RUSH_RATE = 0.25

export default function EstimateCalculator({ packages }: { packages: PackageOption[] }) {
  const [packageKey, setPackageKey] = useState(packages[0].key)
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([])
  const [rush, setRush] = useState(false)
  const [expandedInfo, setExpandedInfo] = useState<string | null>(null)
  const [billing, setBilling] = useState<'full' | 'monthly'>('full')

  const pkg = packages.find((p) => p.key === packageKey) ?? packages[0]
  const includedKeys = INCLUDED_BY_PACKAGE[packageKey] ?? []
  const visibleAddOns = ADD_ONS.filter((a) => !includedKeys.includes(a.key))
  const chosenAddOns = visibleAddOns.filter((a) => selectedAddOns.includes(a.key))
  const addOnsTotal = chosenAddOns.reduce((sum, a) => sum + a.price, 0)
  const subtotal = pkg.price + addOnsTotal
  const total = rush ? subtotal * (1 + RUSH_RATE) : subtotal
  const monthlyPayment = monthlyPaymentFor(total)

  function selectPackage(key: string) {
    setPackageKey(key)
    const excluded = INCLUDED_BY_PACKAGE[key] ?? []
    setSelectedAddOns((prev) => prev.filter((k) => !excluded.includes(k)))
  }

  function toggleAddOn(key: string) {
    setSelectedAddOns((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]
    )
  }

  function toggleInfo(key: string) {
    setExpandedInfo((prev) => (prev === key ? null : key))
  }

  const summaryLines = [
    `${pkg.title} package — ${money(pkg.price)}`,
    ...chosenAddOns.map((a) => `${a.label} — ${money(a.price)}`),
    ...(rush ? ['Rush delivery — +25%'] : []),
    billing === 'monthly'
      ? `12-month plan: ${money(monthlyPayment)}/mo (includes Website Care), then $150/mo Care or full handoff`
      : `Estimated total: ${money(total)}`,
  ]
  const message = `I'm interested in building an estimate:\n\n${summaryLines.join('\n')}\n\nPlease confirm this estimate and next steps.`

  return (
    <Reveal variant="text" className={styles.calculator}>
      <p className="section-label" style={{ textAlign: 'center' } as React.CSSProperties}>
        Build Your Estimate
      </p>
      <p className={styles.calculatorLead}>
        Pick a package and add exactly what you need — the total updates as you go.
        Add-ons already included in your selected package won&rsquo;t show up twice.
      </p>

      <div className={styles.calcBillingRow}>
        <button
          type="button"
          className={`${styles.calcBillingBtn} ${billing === 'full' ? styles.calcBillingBtnActive : ''}`}
          onClick={() => setBilling('full')}
        >
          Pay in Full
        </button>
        <button
          type="button"
          className={`${styles.calcBillingBtn} ${billing === 'monthly' ? styles.calcBillingBtnActive : ''}`}
          onClick={() => setBilling('monthly')}
        >
          12-Month Plan
        </button>
      </div>

      <div className={styles.calcPackageRow}>
        {packages.map((p) => (
          <button
            key={p.key}
            type="button"
            className={`${styles.calcPackageBtn} ${packageKey === p.key ? styles.calcPackageBtnActive : ''}`}
            onClick={() => selectPackage(p.key)}
          >
            <span>{p.title}</span>
            <span className={styles.calcPackageBtnPrice}>{money(p.price)}</span>
          </button>
        ))}
      </div>

      <div className={styles.calcAddOnList}>
        {visibleAddOns.map((a) => (
          <div key={a.key} className={styles.calcAddOnGroup}>
            <div className={styles.calcAddOnRow}>
              <label className={styles.calcAddOnLabel}>
                <input
                  type="checkbox"
                  checked={selectedAddOns.includes(a.key)}
                  onChange={() => toggleAddOn(a.key)}
                />
                {a.label}
              </label>
              <span className={styles.calcAddOnRight}>
                {a.details && (
                  <button
                    type="button"
                    className={styles.calcInfoToggle}
                    onClick={() => toggleInfo(a.key)}
                  >
                    {expandedInfo === a.key ? 'Hide details' : "What's included?"}
                  </button>
                )}
                <span className={styles.calcAddOnPrice}>+{money(a.price)}</span>
              </span>
            </div>
            {a.details && expandedInfo === a.key && (
              <ul className={styles.calcInfoPanel}>
                {a.details.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
        <label className={styles.calcAddOnRow}>
          <span className={styles.calcAddOnLabel}>
            <input type="checkbox" checked={rush} onChange={() => setRush((r) => !r)} />
            Rush delivery
          </span>
          <span className={styles.calcAddOnPrice}>+25%</span>
        </label>
      </div>

      {billing === 'monthly' ? (
        <>
          <div className={styles.calcTotalBar}>
            <span>Estimated Monthly Payment</span>
            <span className={styles.calcTotalAmount}>{money(monthlyPayment)}/mo</span>
          </div>
          <p className={styles.calcMonthlyNote}>
            {INSTALLMENT_MONTHS} monthly payments (includes Website Care). After that, it drops to
            our standard $150/mo Care Plan — or a full handoff if you&rsquo;d rather take it from
            there.
          </p>
        </>
      ) : (
        <div className={styles.calcTotalBar}>
          <span>Estimated Total</span>
          <span className={styles.calcTotalAmount}>{money(total)}</span>
        </div>
      )}

      <Link
        href={`/contact?type=${pkg.key}&message=${encodeURIComponent(message)}`}
        className={`btn ${styles.calcCta}`}
      >
        Get Your Exact Quote
      </Link>
    </Reveal>
  )
}
