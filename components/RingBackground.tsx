'use client'

import React from 'react'
import { usePathname } from 'next/navigation'

type Ring = [number, string, string, number, number, number]

const DEFAULT_RINGS: Ring[] = [
  [260, '38%', '8%',  11, 0,   0.07],
  [195, '72%', '18%', 9,  3.5, 0.06],
  [230, '45%', '88%', 13, 2,   0.08],
  [175, '30%', '55%', 10, 5,   0.07],
]

// Pages using the bright/paper theme don't use this dark-theme decorative element.
const LIGHT_PAGES = ['/', '/portfolio', '/services', '/about', '/contact']

export default function RingBackground({ rings = DEFAULT_RINGS }: { rings?: Ring[] }) {
  const pathname = usePathname()
  if (LIGHT_PAGES.includes(pathname)) return null

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
        overflow: 'hidden',
      }}
    >
      {rings.map((r, i) => (
        <img
          key={i}
          src="/Gold_Circle.png"
          alt=""
          style={
            {
              position: 'absolute',
              pointerEvents: 'none',
              objectFit: 'contain',
              '--ring-opacity': r[5],
              width: r[0],
              height: r[0],
              top: r[1],
              left: r[2],
              animation: `ring-fade ${r[3]}s ease-in-out ${r[4]}s infinite both, ring-spin-bg ${Math.round(r[3] * 2.5)}s linear infinite`,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  )
}
