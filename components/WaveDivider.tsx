interface WaveDividerProps {
  fill: string
  flip?: boolean
}

export default function WaveDivider({ fill, flip = false }: WaveDividerProps) {
  return (
    <svg
      viewBox="0 0 1440 100"
      preserveAspectRatio="none"
      aria-hidden="true"
      style={{
        display: 'block',
        width: '100%',
        height: '70px',
        transform: flip ? 'scaleY(-1)' : undefined,
      }}
    >
      <path
        d="M0,40 C240,90 480,0 720,30 C960,60 1200,10 1440,50 L1440,100 L0,100 Z"
        fill={fill}
      />
    </svg>
  )
}
