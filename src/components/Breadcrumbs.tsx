import { Link } from 'react-router-dom'
import FadeIn from './FadeIn'

interface BreadcrumbsProps {
  items: { label: string; to?: string }[]
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <FadeIn delay={0} y={-10} className="mb-8 md:mb-10">
      <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-[#D7E2EA]/60 text-xs sm:text-sm uppercase tracking-widest">
        <Link to="/" className="hover:text-[#D7E2EA] transition-colors duration-200">
          Home
        </Link>
        {items.map((item) => (
          <span key={item.label} className="flex items-center gap-2">
            <span aria-hidden>/</span>
            {item.to ? (
              <Link to={item.to} className="hover:text-[#D7E2EA] transition-colors duration-200">
                {item.label}
              </Link>
            ) : (
              <span className="text-[#D7E2EA]">{item.label}</span>
            )}
          </span>
        ))}
      </nav>
    </FadeIn>
  )
}
