'use client'

import { useState } from 'react'
import styles from '@/app/services/page.module.css'

interface FaqAccordionItemProps {
  question: string
  answer: string
}

export default function FaqAccordionItem({ question, answer }: FaqAccordionItemProps) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <h3>
        <button
          type="button"
          className={styles.faqQuestion}
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
        >
          <span>{question}</span>
          <span className={`${styles.faqToggle} ${open ? styles.faqToggleOpen : ''}`}>+</span>
        </button>
      </h3>
      <div className={`${styles.faqAnswerWrap} ${open ? styles.faqAnswerWrapOpen : ''}`}>
        <div className={styles.faqAnswerInner}>
          <p className={styles.faqAnswer}>{answer}</p>
        </div>
      </div>
    </>
  )
}
