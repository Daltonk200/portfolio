import { motion } from 'framer-motion'
import type { CSSProperties, ElementType, ReactNode } from 'react'

type Tag = keyof HTMLElementTagNameMap

// Create each motion component once; creating it during render remounts the
// children (and their state/focus) on every re-render.
const motionCache = new Map<Tag, typeof motion.div>()
const getMotion = (tag: Tag) => {
  let component = motionCache.get(tag)
  if (!component) {
    component = motion.create(tag) as typeof motion.div
    motionCache.set(tag, component)
  }
  return component
}

interface FadeInProps {
  children: ReactNode
  delay?: number
  duration?: number
  x?: number
  y?: number
  className?: string
  as?: ElementType
  style?: CSSProperties
}

export default function FadeIn({
  children,
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  className,
  as = 'div',
  style,
}: FadeInProps) {
  const MotionComponent = getMotion(as as Tag)

  return (
    <MotionComponent
      className={className}
      style={style}
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '50px', amount: 0 }}
      transition={{
        delay,
        duration,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      {children}
    </MotionComponent>
  )
}
