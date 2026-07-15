import type { Metadata } from 'next'
import { Cormorant_Garamond } from 'next/font/google'
import { GoogleAnalytics } from '@next/third-parties/google'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import RingBackground from '@/components/RingBackground'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
})

const siteUrl = 'https://yellowhammerstudios.com'

const businessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Yellowhammer Studios',
  image: `${siteUrl}/bird.png`,
  logo: `${siteUrl}/bird.png`,
  url: siteUrl,
  telephone: '+1-832-425-0224',
  email: 'tkluk@yellowhammerstudios.com',
  description:
    'A creative studio specializing in website design, social media, and brand identity — made with craft and intention.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Huntsville',
    addressRegion: 'AL',
    addressCountry: 'US',
  },
  areaServed: ['Huntsville, AL', 'Montgomery, TX', 'United States'],
  priceRange: '$150-$3400',
  sameAs: [
    'https://www.linkedin.com/in/yellowhammer-studios',
    'https://www.instagram.com/yellowhammer_studios/',
    'https://www.tiktok.com/@yellowhammer_studios',
  ],
}

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Yellowhammer Studios',
    template: '%s — Yellowhammer Studios',
  },
  description:
    'Yellowhammer Studios is a creative studio in Huntsville, AL specializing in website design, social media, and brand identity — made with craft and intention.',
  keywords: [
    'website design Huntsville AL',
    'branding Huntsville Alabama',
    'social media design',
    'logo design Huntsville',
    'creative studio Alabama',
    'Yellowhammer Studios',
  ],
  icons: {
    icon: '/bird.png',
    apple: '/bird.png',
  },
  openGraph: {
    type: 'website',
    siteName: 'Yellowhammer Studios',
    title: 'Yellowhammer Studios',
    description:
      'A creative studio in Huntsville, AL specializing in website design, social media, and brand identity.',
    url: siteUrl,
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Yellowhammer Studios' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yellowhammer Studios',
    description:
      'A creative studio in Huntsville, AL specializing in website design, social media, and brand identity.',
    images: ['/og-image.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cormorant.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd) }}
        />
        <Nav />
        <RingBackground />
        <main>{children}</main>
        <Footer />
      </body>
      <GoogleAnalytics gaId="G-7MZKCP4KSQ" />
    </html>
  )
}
