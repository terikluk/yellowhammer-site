'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import styles from './Nav.module.css'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

// Pages using the bright/paper theme — nav should read dark-on-light there
// instead of the site-wide dark-espresso/cream-text default.
const LIGHT_PAGES = ['/', '/portfolio', '/services', '/about', '/contact']

export default function Nav() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const isLightPage = LIGHT_PAGES.includes(pathname)
  const lightText = isLightPage

  useEffect(() => {
    const threshold = 80
    const handleScroll = () => setScrolled(window.scrollY > threshold)
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [pathname])

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <nav className={`${styles.nav} ${scrolled ? (isLightPage ? styles.scrolledLight : styles.scrolled) : ''} ${menuOpen ? styles.menuActive : ''} ${lightText ? styles.onLight : ''}`}>
        <Link href="/" className={styles.logoLink} aria-label="Yellowhammer Studios">
          <img src="/bird.png" alt="" className={styles.logo} />
        </Link>

        {/* Desktop nav */}
        <ul className={styles.list}>
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`${styles.link} ${lightText ? styles.linkOnLight : ''}`}
                aria-current={pathname === href ? 'page' : undefined}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger button (mobile only) */}
        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen(o => !o)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span className={`${styles.bar} ${menuOpen ? styles.barTopOpen : ''} ${lightText && !menuOpen ? styles.barOnLight : ''}`} />
          <span className={`${styles.bar} ${menuOpen ? styles.barMidOpen : ''} ${lightText && !menuOpen ? styles.barOnLight : ''}`} />
          <span className={`${styles.bar} ${menuOpen ? styles.barBotOpen : ''} ${lightText && !menuOpen ? styles.barOnLight : ''}`} />
        </button>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ''}`}
        aria-hidden={!menuOpen}
      >
        <ul className={styles.mobileList}>
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`${styles.mobileLink} ${pathname === href ? styles.mobileLinkActive : ''}`}
                aria-current={pathname === href ? 'page' : undefined}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
