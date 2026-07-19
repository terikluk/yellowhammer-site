'use client'

import { useEffect, useRef, useState } from 'react'

interface RevealProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  className?: string
  delay?: number
  variant?: 'scale' | 'text'
}

export default function Reveal({ children, className = '', delay = 0, variant = 'scale', ...rest }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const hiddenClass = variant === 'text' ? 'reveal-text-hidden' : 'reveal-hidden'
  const visibleClass = variant === 'text' ? 'reveal-text-visible' : 'reveal-visible'

  return (
    <div
      ref={ref}
      className={`${className} ${visible ? visibleClass : hiddenClass}`}
      style={{ transitionDelay: `${delay}ms` }}
      {...rest}
    >
      {children}
    </div>
  )
}
