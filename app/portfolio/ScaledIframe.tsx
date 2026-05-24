'use client'
import { useEffect, useRef } from 'react'

interface Props {
  src: string
  title: string
  iframeHeight?: number
}

export default function ScaledIframe({ src, title, iframeHeight = 720 }: Props) {
  const wrapRef = useRef<HTMLDivElement>(null)
  const iframeRef = useRef<HTMLIFrameElement>(null)

  useEffect(() => {
    const apply = () => {
      if (!wrapRef.current || !iframeRef.current) return
      const scale = wrapRef.current.offsetWidth / 1280
      iframeRef.current.style.transform = `scale(${scale})`
    }
    apply()
    const ro = new ResizeObserver(apply)
    if (wrapRef.current) ro.observe(wrapRef.current)
    return () => ro.disconnect()
  }, [])

  return (
    <div ref={wrapRef} style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
      <iframe
        ref={iframeRef}
        src={src}
        title={title}
        scrolling="no"
        tabIndex={-1}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '1280px',
          height: `${iframeHeight}px`,
          border: 'none',
          transformOrigin: 'top left',
          pointerEvents: 'none',
        }}
      />
    </div>
  )
}
