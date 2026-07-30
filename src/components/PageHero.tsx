import FadeIn from './FadeIn'

interface PageHeroProps {
  title: string
  subtitle?: string
  light?: boolean
}

export default function PageHero({ title, subtitle, light = false }: PageHeroProps) {
  return (
    <div className="mb-16 sm:mb-20 md:mb-28">
      <FadeIn delay={0} y={40}>
        <h1
          className={`font-black uppercase leading-none tracking-tight ${
            light ? 'text-[#0C0C0C]' : 'hero-heading'
          }`}
          style={{ fontSize: 'clamp(2.75rem, 10vw, 140px)' }}
        >
          {title}
        </h1>
      </FadeIn>
      {subtitle ? (
        <FadeIn delay={0.1} y={20}>
          <p
            className={`mt-6 max-w-2xl font-light leading-relaxed ${
              light ? 'text-[#0C0C0C]/70' : 'text-[#D7E2EA]'
            }`}
            style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)' }}
          >
            {subtitle}
          </p>
        </FadeIn>
      ) : null}
    </div>
  )
}
