import { useEffect, useRef, useState, type ReactNode } from 'react'

interface MagnetProps {
  children: ReactNode
  padding?: number
  strength?: number
  activeTransition?: string
  inactiveTransition?: string
  className?: string
}

export default function Magnet({
  children,
  padding = 100,
  strength = 2,
  activeTransition = 'transform 0.3s ease-out',
  inactiveTransition = 'transform 0.6s ease-in-out',
  className,
}: MagnetProps) {
  const ref = useRef<HTMLDivElement>(null)
  const activeRef = useRef(false)
  const [transform, setTransform] = useState('translate3d(0px, 0px, 0)')
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const el = ref.current
      if (!el) return

      const rect = el.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2

      const distX = Math.abs(e.clientX - centerX)
      const distY = Math.abs(e.clientY - centerY)
      const withinX = distX < rect.width / 2 + padding
      const withinY = distY < rect.height / 2 + padding

      if (withinX && withinY) {
        const offsetX = (e.clientX - centerX) / strength
        const offsetY = (e.clientY - centerY) / strength
        if (!activeRef.current) {
          activeRef.current = true
          setIsActive(true)
        }
        setTransform(`translate3d(${offsetX}px, ${offsetY}px, 0)`)
      } else if (activeRef.current) {
        activeRef.current = false
        setIsActive(false)
        setTransform('translate3d(0px, 0px, 0)')
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [padding, strength])

  return (
    <div
      ref={ref}
      className={className}
      style={{
        transform,
        transition: isActive ? activeTransition : inactiveTransition,
        willChange: 'transform',
      }}
    >
      {children}
    </div>
  )
}
