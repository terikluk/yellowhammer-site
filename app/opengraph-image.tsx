import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Yellowhammer Studios'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function OgImage() {
  const css = await fetch(
    'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300',
    { headers: { 'User-Agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1)' } }
  ).then((r) => r.text())
  const fontUrl = css.match(/src: url\((.+?)\)/)?.[1] ?? ''
  const fontData = await fetch(fontUrl).then((r) => r.arrayBuffer())

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
        {/* Left: text */}
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
            Yellowhammer Studios
          </div>
          <div
            style={{
              fontSize: 22,
              color: '#6a5040',
              letterSpacing: '0.08em',
            }}
          >
            Website Design · Social Media · Brand Identity
          </div>
        </div>

        {/* Right: bird */}
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
