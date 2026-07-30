import { Link } from 'react-router-dom'
import { BG } from '../assets/bg'
import ContactButton from '../components/ContactButton'
import FadeIn from '../components/FadeIn'
import Magnet from '../components/Magnet'
import { SITE } from '../data/site'

export default function HeroSection() {
  return (
    <section
      className="relative flex h-[calc(100vh-65px)] min-h-[640px] flex-col"
      style={{ overflowX: 'clip' }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `url(${BG.figure})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
          opacity: 0.28,
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 70% 60% at 50% 45%, rgba(12,12,12,0.35) 0%, rgba(12,12,12,0.88) 70%, #0C0C0C 100%), linear-gradient(180deg, rgba(12,12,12,0.55) 0%, rgba(12,12,12,0.2) 40%, #0C0C0C 100%)',
        }}
      />

      <div className="relative z-20 mt-6 px-5 sm:mt-8 sm:px-8 md:mt-6 md:px-10">
        <FadeIn delay={0.15} y={40}>
          <h1
            className="hero-heading w-full text-center font-black uppercase leading-[0.95] tracking-tight"
            style={{ fontSize: 'clamp(1.5rem, 6.2vw, 6.75rem)' }}
          >
            hi, i&apos;m mbeng bright
          </h1>
        </FadeIn>
      </div>

      {/* Centering on outer shell — FadeIn/Magnet transforms won't fight left-1/2 */}
      <div className="pointer-events-none absolute left-1/2 top-[46%] z-10 w-[min(72vw,520px)] -translate-x-1/2 -translate-y-1/2 sm:w-[min(58vw,480px)] md:w-[440px] lg:w-[500px]">
        <FadeIn delay={0.6} y={30} className="pointer-events-auto">
          <Magnet
            padding={150}
            strength={3}
            activeTransition="transform 0.3s ease-out"
            inactiveTransition="transform 0.6s ease-in-out"
          >
            <img
              src={SITE.portrait}
              alt={`${SITE.name} - ${SITE.role}`}
              className="pointer-events-none h-auto w-full select-none object-contain"
              draggable={false}
            />
          </Magnet>
        </FadeIn>
      </div>

      <div className="relative z-20 mt-auto flex items-end justify-between px-5 pb-7 sm:px-8 sm:pb-8 md:px-10 md:pb-10">
        <FadeIn delay={0.35} y={20}>
          <p
            className="max-w-[200px] font-light uppercase leading-snug tracking-wide text-[#D7E2EA] sm:max-w-[280px] md:max-w-[340px]"
            style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
          >
            an ai &amp; full-stack engineer building intelligent products, scalable
            systems, and automation that solve real business problems.
          </p>
        </FadeIn>

        <FadeIn delay={0.5} y={20}>
          <div className="flex flex-col items-end gap-3 sm:flex-row">
            <ContactButton label="let's build together" href="/contact" />
            <Link
              to="/projects"
              className="inline-flex items-center justify-center rounded-full border-2 border-[#D7E2EA] px-6 py-3 text-xs font-medium uppercase tracking-widest text-[#D7E2EA] transition-colors duration-200 hover:bg-[#D7E2EA]/10 sm:text-sm"
            >
              See work
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
