import type { CSSProperties, ReactNode } from 'react'

interface BgAtmosphereProps {
  src: string
  children: ReactNode
  className?: string
  /** 0–1 how strong the photo shows through the dark wash */
  intensity?: number
  position?: string
  overlay?: string
  style?: CSSProperties
}

export default function BgAtmosphere({
  src,
  children,
  className = '',
  intensity = 0.35,
  position = 'center',
  overlay = 'linear-gradient(180deg, rgba(12,12,12,0.92) 0%, rgba(12,12,12,0.78) 45%, rgba(12,12,12,0.94) 100%)',
  style,
}: BgAtmosphereProps) {
  return (
    <section
      className={`relative overflow-hidden ${className}`}
      style={style}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `url(${src})`,
          backgroundSize: 'cover',
          backgroundPosition: position,
          backgroundRepeat: 'no-repeat',
          opacity: intensity,
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ background: overlay }}
      />
      <div className="relative z-10">{children}</div>
    </section>
  )
}
