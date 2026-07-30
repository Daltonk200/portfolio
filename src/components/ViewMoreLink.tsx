import { Link } from 'react-router-dom'

interface ViewMoreLinkProps {
  to: string
  label?: string
  className?: string
  light?: boolean
}

export default function ViewMoreLink({
  to,
  label = 'View More',
  className = '',
  light = false,
}: ViewMoreLinkProps) {
  return (
    <Link
      to={to}
      className={`inline-flex items-center justify-center rounded-full border-2 px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base font-medium uppercase tracking-widest transition-colors duration-200 ${
        light
          ? 'border-[#0C0C0C] text-[#0C0C0C] hover:bg-[#0C0C0C]/5'
          : 'border-[#D7E2EA] text-[#D7E2EA] hover:bg-[#D7E2EA]/10'
      } ${className}`}
    >
      {label}
    </Link>
  )
}
