import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { NAV_LINKS, SITE } from '../data/site'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `uppercase tracking-wider font-medium transition-opacity duration-200 hover:opacity-70 ${
      isActive ? 'opacity-100 text-[#D7E2EA]' : 'opacity-60 text-[#D7E2EA]'
    }`

  return (
    <header className="sticky top-0 z-50 bg-[#0C0C0C]/90 backdrop-blur-md border-b border-[#D7E2EA]/10">
      <div className="flex items-center justify-between gap-4 px-5 sm:px-8 md:px-10 py-4 md:py-5">
        <Link
          to="/"
          className="text-[#D7E2EA] font-black uppercase tracking-tight text-lg sm:text-xl shrink-0"
          onClick={() => setOpen(false)}
        >
          {SITE.name.split(' ')[0]}
        </Link>

        <nav className="hidden lg:flex flex-wrap items-center justify-end gap-x-5 gap-y-2 text-sm xl:text-base">
          {NAV_LINKS.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.to === '/'} className={linkClass}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <button
          type="button"
          className="lg:hidden text-[#D7E2EA] p-2"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {open ? (
        <div className="lg:hidden fixed inset-0 top-[65px] z-50 bg-[#0C0C0C] px-6 py-10 flex flex-col gap-6 overflow-y-auto">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `text-2xl sm:text-3xl font-medium uppercase tracking-wider text-[#D7E2EA] ${
                  isActive ? 'opacity-100' : 'opacity-60'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      ) : null}
    </header>
  )
}
