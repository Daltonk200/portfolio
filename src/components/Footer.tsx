import { ArrowUp } from 'lucide-react'
import { Link } from 'react-router-dom'
import { BG } from '../assets/bg'
import { NAV_LINKS, SITE } from '../data/site'

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="relative overflow-hidden px-5 sm:px-8 md:px-10 pt-14 sm:pt-16 pb-10 sm:pb-12 ">
      {/* Atmospheric clouds — compact bottom glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[200px] sm:h-[240px] md:h-[280px]"
      >
        <img
          src={BG.clouds}
          alt=""
          className="absolute bottom-0 right-0 h-full w-auto max-w-none min-w-[90%] object-cover object-right-bottom opacity-75 mix-blend-screen"
          style={{
            WebkitMaskImage:
              'linear-gradient(to left, #000 45%, transparent 100%)',
            maskImage: 'linear-gradient(to left, #000 45%, transparent 100%)',
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, #0C0C0C 0%, rgba(12,12,12,0.65) 35%, rgba(12,12,12,0.25) 65%, rgba(12,12,12,0.6) 100%)',
          }}
        />
      </div>

      {/* Compact row: brand · links · connect */}
      <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between lg:gap-10">
        <div className="shrink-0">
          <p className="text-[#D7E2EA] font-black uppercase tracking-tight text-xl sm:text-2xl">
            {SITE.name}
          </p>
          <p className="mt-1 text-[#D7E2EA]/55 font-light uppercase tracking-wide text-xs sm:text-sm">
            {SITE.role}
          </p>
        </div>

        <nav className="flex flex-wrap gap-x-5 gap-y-2 text-sm uppercase tracking-wider lg:justify-center lg:flex-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-[#D7E2EA]/70 hover:text-[#D7E2EA] transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm uppercase tracking-wider shrink-0 lg:justify-end">
          <a
            href={`mailto:${SITE.email}`}
            className="text-[#D7E2EA]/70 hover:text-[#D7E2EA] transition-colors duration-200 normal-case tracking-wide"
          >
            {SITE.email}
          </a>
          <a
            href={SITE.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#D7E2EA]/70 hover:text-[#D7E2EA] transition-colors duration-200"
          >
            WhatsApp
          </a>
          <a
            href={SITE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#D7E2EA]/70 hover:text-[#D7E2EA] transition-colors duration-200"
          >
            LinkedIn
          </a>
          <a
            href={SITE.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#D7E2EA]/70 hover:text-[#D7E2EA] transition-colors duration-200"
          >
            GitHub
          </a>
        </div>
      </div>

      <div className="relative z-10 mt-8 flex flex-wrap items-center justify-between gap-3">
        <p className="text-[#D7E2EA]/60 text-xs uppercase tracking-widest">
          © {new Date().getFullYear()} {SITE.name}. All rights reserved.
        </p>
        <button
          type="button"
          onClick={scrollTop}
          className="inline-flex items-center gap-2 text-[#D7E2EA] text-xs uppercase tracking-widest hover:opacity-70 transition-opacity duration-200"
        >
          Back to Top <ArrowUp size={14} />
        </button>
      </div>
    </footer>
  )
}
