import { useEffect, useRef, useState } from 'react'

const MARQUEE_IMAGES = [
  'https://pub-86dc5b5484314368ac5436a674b0d919.r2.dev/hero%20sections/animated%20(6).webp',
  'https://pub-86dc5b5484314368ac5436a674b0d919.r2.dev/hero%20sections/animated%20(7).webp',
  'https://pub-86dc5b5484314368ac5436a674b0d919.r2.dev/hero%20sections/animated%20(8).webp',
  'https://pub-86dc5b5484314368ac5436a674b0d919.r2.dev/hero%20sections/animated%20(9).webp',
  'https://pub-86dc5b5484314368ac5436a674b0d919.r2.dev/hero%20sections/animated%20(10).webp',
  'https://pub-86dc5b5484314368ac5436a674b0d919.r2.dev/hero%20sections/animated%20(11).webp',
  'https://pub-86dc5b5484314368ac5436a674b0d919.r2.dev/hero%20sections/animated%20(12).webp',
  'https://pub-86dc5b5484314368ac5436a674b0d919.r2.dev/hero%20sections/animated%20(13).webp',
  'https://pub-86dc5b5484314368ac5436a674b0d919.r2.dev/hero%20sections/animated%20(14).webp',
  'https://pub-86dc5b5484314368ac5436a674b0d919.r2.dev/hero%20sections/animated%20(15).webp',
  'https://pub-86dc5b5484314368ac5436a674b0d919.r2.dev/hero%20sections/animated%20(16).webp',
  'https://pub-86dc5b5484314368ac5436a674b0d919.r2.dev/hero%20sections/animated%20(17).webp',
  'https://pub-86dc5b5484314368ac5436a674b0d919.r2.dev/hero%20sections/animated%20(18).webp',
  'https://pub-86dc5b5484314368ac5436a674b0d919.r2.dev/hero%20sections/animated%20(19).webp',
  'https://pub-86dc5b5484314368ac5436a674b0d919.r2.dev/hero%20sections/animated%20(20).webp',
  'https://pub-86dc5b5484314368ac5436a674b0d919.r2.dev/hero%20sections/animated%20(21).webp',
  'https://pub-86dc5b5484314368ac5436a674b0d919.r2.dev/hero%20sections/animated%20(22).webp',
  'https://pub-86dc5b5484314368ac5436a674b0d919.r2.dev/hero%20sections/animated%20(23).webp',
  'https://pub-86dc5b5484314368ac5436a674b0d919.r2.dev/hero%20sections/animated%20(24).webp',
  'https://pub-86dc5b5484314368ac5436a674b0d919.r2.dev/hero%20sections/animated%20(25).webp',
  'https://pub-86dc5b5484314368ac5436a674b0d919.r2.dev/hero%20sections/animated%20(31).webp',
]

const ROW1 = MARQUEE_IMAGES.slice(0, 11)
const ROW2 = MARQUEE_IMAGES.slice(11)

function MarqueeRow({
  images,
  direction,
  offset,
}: {
  images: string[]
  direction: 'left' | 'right'
  offset: number
}) {
  const tripled = [...images, ...images, ...images]
  const translateX =
    direction === 'right' ? offset - 200 : -(offset - 200)

  return (
    <div
      className="flex gap-3"
      style={{ willChange: 'transform', transform: `translateX(${translateX}px)` }}
    >
      {tripled.map((src, i) => (
        <img
          key={`${src}-${i}`}
          src={src}
          alt=""
          loading={i < images.length ? 'eager' : 'lazy'}
          decoding="async"
          className="rounded-2xl object-cover shrink-0 bg-[#1a1a1a]"
          style={{ width: 420, height: 270 }}
        />
      ))}
    </div>
  )
}

export default function MarqueeSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current
      if (!section) return
      const sectionTop = section.offsetTop
      const scrollOffset =
        (window.scrollY - sectionTop + window.innerHeight) * 0.3
      setOffset(scrollOffset)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section
      ref={sectionRef}
      className="bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden"
    >
      <div className="flex flex-col gap-3">
        <MarqueeRow images={ROW1} direction="right" offset={offset} />
        <MarqueeRow images={ROW2} direction="left" offset={offset} />
      </div>
    </section>
  )
}
