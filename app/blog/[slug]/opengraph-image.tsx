import { ImageResponse } from 'next/og'
import { readFileSync } from 'fs'
import { join } from 'path'
import client from '@/tina/__generated__/client'

export const alt = 'Yellowhammer Studios Blog Post'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function OgImage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const fontData = readFileSync(
    join(process.cwd(), 'public/fonts/CormorantGaramond-Light.ttf')
  )

  let title = 'Yellowhammer Studios'
  try {
    const { data } = await client.queries.post({ relativePath: `${slug}.md` })
    title = data.post.title
  } catch {
    // fall back to the default title above
  }

  return new ImageResponse(
    (
      <div
        style={{
          background: '#fbf6ec',
          width: '100%',
          height: '100%',
          display: 'flex',
          boxSizing: 'border-box',
          border: '14px solid #fbf6ec',
          borderTop: '14px solid #c8821a',
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
            From the Yellowhammer Studios Blog
          </div>
          <div
            style={{
              fontSize: 62,
              fontWeight: 300,
              color: '#2b1a0d',
              lineHeight: 1.15,
              marginBottom: 30,
            }}
          >
            {title}
          </div>
          <div
            style={{
              fontSize: 22,
              color: '#6b5a45',
              letterSpacing: '0.08em',
            }}
          >
            Yellowhammer Studios
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
