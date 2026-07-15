import { ImageResponse } from 'next/og'
import { readFileSync } from 'fs'
import { join } from 'path'

export const alt = 'Contact — Yellowhammer Studios'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function OgImage() {
  const fontData = readFileSync(
    join(process.cwd(), 'public/fonts/CormorantGaramond-Light.ttf')
  )

  return new ImageResponse(
    (
      <div
        style={{
          background: '#1a0f08',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 100px',
          fontFamily: 'Cormorant Garamond',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
          <div
            style={{
              fontSize: 14,
              letterSpacing: '0.3em',
              color: '#c8821a',
              textTransform: 'uppercase',
              marginBottom: 28,
            }}
          >
            Huntsville, Alabama
          </div>
          <div
            style={{
              fontSize: 82,
              fontWeight: 300,
              color: '#f5f0e8',
              lineHeight: 1.1,
              marginBottom: 30,
            }}
          >
            Contact
          </div>
          <div
            style={{
              fontSize: 22,
              color: '#6a5040',
              letterSpacing: '0.08em',
            }}
          >
            Let&rsquo;s Build Something Together
          </div>
        </div>

        <img
          src="https://yellowhammerstudios.com/bird.png"
          width={220}
          height={220}
          alt=""
          style={{ opacity: 0.8, marginLeft: 60, flexShrink: 0 }}
        />
      </div>
    ),
    {
      ...size,
      fonts: [{ name: 'Cormorant Garamond', data: fontData, style: 'normal', weight: 300 }],
    }
  )
}
