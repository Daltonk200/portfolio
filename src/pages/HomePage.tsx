import { Link } from 'react-router-dom'
import { BG } from '../assets/bg'
import { DECOR } from '../assets/decorations'
import BgAtmosphere from '../components/BgAtmosphere'
import ContactButton from '../components/ContactButton'
import Decoration from '../components/Decoration'
import FadeIn from '../components/FadeIn'
import ViewMoreLink from '../components/ViewMoreLink'
import { getFeaturedProjects } from '../data/projects'
import { getFeaturedServices } from '../data/services'
import { ABOUT_PREVIEW, METRICS, SITE } from '../data/site'
import { TECH_PREVIEW } from '../data/tech'
import HeroSection from '../sections/HeroSection'
import MarqueeSection from '../sections/MarqueeSection'

export default function HomePage() {
  const services = getFeaturedServices()
  const projects = getFeaturedProjects()

  return (
    <>
      <HeroSection />
      <MarqueeSection />

      {/* About preview — builders (collaboration / engineering) */}
      <section className="relative overflow-hidden px-5 sm:px-8 md:px-10 py-20 sm:py-28 md:py-32">
        <Decoration
          src={DECOR.builders}
          alt="Builders collaborating"
          className="absolute bottom-0 left-[-4%] sm:left-[2%] w-[160px] sm:w-[220px] md:w-[280px] opacity-90"
          delay={0.2}
          x={-60}
          y={0}
        />
        <div className="relative z-10 mx-auto max-w-4xl flex flex-col items-center text-center gap-10">
          <FadeIn y={40}>
            <h2
              className="hero-heading font-black uppercase leading-none tracking-tight"
              style={{ fontSize: 'clamp(2.5rem, 10vw, 120px)' }}
            >
              about me
            </h2>
          </FadeIn>
          <FadeIn delay={0.1} y={20}>
            <p
              className="text-[#D7E2EA] font-medium leading-relaxed max-w-[560px]"
              style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)' }}
            >
              {ABOUT_PREVIEW}
            </p>
          </FadeIn>
          <FadeIn delay={0.2} y={20}>
            <ViewMoreLink to="/about" label="View More" />
          </FadeIn>
        </div>
      </section>

      {/* Featured services */}
      <section className="relative overflow-hidden bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32">
        <Decoration
          src={DECOR.handshake}
          alt="Partnership"
          className="absolute top-[8%] right-[-2%] sm:right-[2%] w-[120px] sm:w-[180px] md:w-[220px] opacity-80 mix-blend-multiply"
          delay={0.15}
          x={60}
          y={0}
        />
        <FadeIn y={40}>
          <h2
            className="text-[#0C0C0C] font-black uppercase text-center mb-16 sm:mb-20"
            style={{ fontSize: 'clamp(2.5rem, 10vw, 120px)' }}
          >
            services
          </h2>
        </FadeIn>
        <div className="relative z-10 mx-auto max-w-5xl">
          {services.map((service, i) => (
            <FadeIn key={service.number} delay={i * 0.1} y={30}>
              <div
                className="flex items-center gap-4 sm:gap-8 md:gap-12 py-8 sm:py-10 md:py-12"
                style={{
                  borderTop: i === 0 ? '1px solid rgba(12, 12, 12, 0.15)' : undefined,
                  borderBottom: '1px solid rgba(12, 12, 12, 0.15)',
                }}
              >
                <span
                  className="font-black text-[#0C0C0C] shrink-0 leading-none"
                  style={{ fontSize: 'clamp(2.5rem, 8vw, 100px)' }}
                >
                  {service.number}
                </span>
                <div className="flex flex-col gap-2">
                  <h3
                    className="font-medium uppercase text-[#0C0C0C]"
                    style={{ fontSize: 'clamp(1rem, 2.2vw, 2rem)' }}
                  >
                    {service.name}
                  </h3>
                  <p
                    className="font-light leading-relaxed max-w-2xl text-[#0C0C0C] opacity-60"
                    style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.2rem)' }}
                  >
                    {service.shortDescription}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
        <div className="relative z-10 flex justify-center mt-14">
          <ViewMoreLink to="/services" light />
        </div>
      </section>

      {/* Featured projects */}
      <section className="relative z-10 bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 px-5 sm:px-8 md:px-10 pt-20 sm:pt-24 md:pt-32 pb-20">
        <FadeIn y={40}>
          <h2
            className="hero-heading font-black uppercase text-center leading-none tracking-tight mb-16 sm:mb-20"
            style={{ fontSize: 'clamp(2.5rem, 10vw, 120px)' }}
          >
            projects
          </h2>
        </FadeIn>
        <div className="mx-auto max-w-6xl grid gap-8 md:grid-cols-3">
          {projects.map((project, i) => (
            <FadeIn key={project.slug} delay={i * 0.1} y={30}>
              <Link
                to={`/projects/${project.slug}`}
                className="group block rounded-[32px] border-2 border-[#D7E2EA] overflow-hidden bg-[#0C0C0C] transition-opacity duration-200 hover:opacity-90"
              >
                <img
                  src={project.images.col2}
                  alt={project.name}
                  className="h-48 w-full object-cover"
                  loading="lazy"
                />
                <div className="p-5 sm:p-6">
                  <p className="text-[#D7E2EA]/60 text-xs uppercase tracking-widest mb-2">
                    {project.category}
                  </p>
                  <h3 className="text-[#D7E2EA] font-medium uppercase text-lg sm:text-xl">
                    {project.name}
                  </h3>
                  <p className="text-[#D7E2EA]/70 font-light mt-2 text-sm leading-relaxed">
                    {project.tagline}
                  </p>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
        <div className="flex justify-center mt-14">
          <ViewMoreLink to="/projects" />
        </div>
      </section>

      {/* Tech preview — stack layers (architecture) */}
      <section className="relative overflow-hidden px-5 sm:px-8 md:px-10 py-20 sm:py-28">
        <Decoration
          src={DECOR.stackLayers}
          alt="Layered tech stack"
          className="absolute top-1/2 -translate-y-1/2 right-[-6%] sm:right-[2%] md:right-[6%] w-[140px] sm:w-[200px] md:w-[260px] opacity-95"
          delay={0.2}
          x={50}
          y={0}
        />
        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <FadeIn y={40}>
            <h2
              className="hero-heading font-black uppercase leading-none tracking-tight mb-12"
              style={{ fontSize: 'clamp(2.5rem, 10vw, 120px)' }}
            >
              tech stack
            </h2>
          </FadeIn>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-12">
            {TECH_PREVIEW.map((tech, i) => (
              <FadeIn key={tech.name} delay={i * 0.05} y={20}>
                <span className="inline-flex rounded-full border border-[#D7E2EA]/40 px-5 py-2.5 text-[#D7E2EA] text-sm uppercase tracking-wider backdrop-blur-sm bg-[#0C0C0C]/40">
                  {tech.name}
                </span>
              </FadeIn>
            ))}
          </div>
          <ViewMoreLink to="/tech" />
        </div>
      </section>

      {/* Metrics */}
      <section className="relative overflow-hidden px-5 sm:px-8 md:px-10 py-20 sm:py-28">
        <Decoration
          src={DECOR.baymax}
          alt=""
          className="absolute bottom-0 right-[-4%] sm:right-0 w-[140px] sm:w-[200px] md:w-[240px] opacity-90"
          delay={0.15}
          x={40}
          y={0}
        />
        <div className="relative z-10 mx-auto max-w-5xl grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {METRICS.map((metric, i) => (
            <FadeIn key={metric.label} delay={i * 0.08} y={30} className="text-center">
              <p
                className="font-black text-[#D7E2EA] leading-none"
                style={{ fontSize: 'clamp(2.5rem, 8vw, 80px)' }}
              >
                {metric.value}
              </p>
              <p className="mt-3 text-[#D7E2EA]/60 uppercase tracking-widest text-xs sm:text-sm">
                {metric.label}
              </p>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* CTA — handshake (partnership) */}
      <BgAtmosphere
        src={BG.figure}
        intensity={0.28}
        position="center top"
        className="relative overflow-hidden px-5 sm:px-8 md:px-10 py-28 sm:py-36"
        overlay="linear-gradient(180deg, rgba(12,12,12,0.88) 0%, rgba(12,12,12,0.72) 50%, rgba(12,12,12,0.92) 100%)"
      >
        <Decoration
          src={DECOR.handshake}
          alt="Let's work together"
          className="absolute bottom-[8%] left-[-2%] sm:left-[4%] w-[140px] sm:w-[200px] md:w-[240px] opacity-95"
          delay={0.25}
          x={-50}
          y={0}
        />
        <div className="relative z-10 mx-auto max-w-3xl flex flex-col items-center text-center gap-8">
          <FadeIn y={40}>
            <h2
              className="hero-heading font-black uppercase leading-none tracking-tight"
              style={{ fontSize: 'clamp(2rem, 8vw, 90px)' }}
            >
              let&apos;s build something impactful
            </h2>
          </FadeIn>
          <FadeIn delay={0.1} y={20}>
            <p className="text-[#D7E2EA] font-medium max-w-lg leading-relaxed">
              have an idea, startup, or business challenge? let&apos;s turn it into
              software that delivers real results.
            </p>
          </FadeIn>
          <FadeIn delay={0.2} y={20}>
            <ContactButton label="let's build together" href="/contact" />
          </FadeIn>
          <p className="text-[#D7E2EA]/40 text-xs uppercase tracking-widest">
            {SITE.availability}
          </p>
        </div>
      </BgAtmosphere>
    </>
  )
}
