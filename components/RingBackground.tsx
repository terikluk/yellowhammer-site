'use client'

import React from 'react'

type Ring = [number, string, string, number, number, number]

const DEFAULT_RINGS: Ring[] = [
  [260, '38%', '8%',  11, 0,   0.07],
  [195, '72%', '18%', 9,  3.5, 0.06],
  [230, '45%', '88%', 13, 2,   0.08],
  [175, '30%', '55%', 10, 5,   0.07],
]

export default function RingBackground({ rings = DEFAULT_RINGS }: { rings?: Ring[] }) {
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
