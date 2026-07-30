import { Link } from 'react-router-dom'

interface ContactButtonProps {
  className?: string
  label?: string
  href?: string
}

const buttonClass =
  'inline-flex items-center justify-center rounded-full px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base text-white font-medium uppercase tracking-widest transition-opacity duration-200 hover:opacity-90'

const buttonStyle = {
  background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
  boxShadow: '0px 4px 4px rgba(181, 1, 167, 0.25), inset 4px 4px 12px #7721B1',
  outline: '2px solid white',
  outlineOffset: '-3px',
} as const

export default function ContactButton({
  className = '',
  label = "let's build together",
  href = '/contact',
}: ContactButtonProps) {
  const classes = `${buttonClass} ${className}`

  if (href.startsWith('/') && !href.startsWith('//')) {
    return (
      <Link to={href} className={classes} style={buttonStyle}>
        {label}
      </Link>
    )
  }

  return (
    <a href={href} className={classes} style={buttonStyle}>
      {label}
    </a>
  )
}
