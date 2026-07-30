import FadeIn from './FadeIn'

interface DecorationProps {
  src: string
  alt?: string
  className?: string
  delay?: number
  x?: number
  y?: number
}

/** Static decorative PNG — fade in only, no magnet / hover follow. */
export default function Decoration({
  src,
  alt = '',
  className = '',
  delay = 0.15,
  x = 0,
  y = 30,
}: DecorationProps) {
  return (
    <FadeIn delay={delay} x={x} y={y} duration={0.9} className={`pointer-events-none ${className}`}>
      <img
        src={src}
        alt={alt}
        className="pointer-events-none h-auto w-full select-none object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.45)]"
        draggable={false}
        loading="lazy"
      />
    </FadeIn>
  )
}
