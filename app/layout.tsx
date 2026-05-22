import type { Metadata } from 'next'
import { Cormorant_Garamond } from 'next/font/google'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import RingBackground from '@/components/RingBackground'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
})

export const metadata: Metadata = {
  title: {
    default: 'Yellowhammer Studios',
    template: '%s — Yellowhammer Studios',
  },
  description:
    'A creative practice devoted to craft, precision, and the quiet power of work made well.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cormorant.className}>
        <Nav />
        <RingBackground />
        {children}
        <Footer />
      </body>
    </html>
  )
}
