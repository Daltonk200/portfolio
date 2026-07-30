import { Link } from 'react-router-dom'
import { BG } from '../assets/bg'
import { DECOR } from '../assets/decorations'
import AnimatedText from '../components/AnimatedText'
import BgAtmosphere from '../components/BgAtmosphere'
import Breadcrumbs from '../components/Breadcrumbs'
import ContactButton from '../components/ContactButton'
import Decoration from '../components/Decoration'
import FadeIn from '../components/FadeIn'
import PageHero from '../components/PageHero'
import ViewMoreLink from '../components/ViewMoreLink'
import { EXPERIENCE } from '../data/experience'
import {
  ABOUT_FULL,
  ABOUT_STORY,
  CORE_VALUES,
  SITE,
  WHY_AI,
} from '../data/site'

export default function AboutPage() {
  const timelinePreview = EXPERIENCE.slice(0, 3)

  return (
    <BgAtmosphere
      src={BG.figure}
      intensity={0.18}
      position="center top"
      className="min-h-screen"
      overlay="linear-gradient(180deg, rgba(12,12,12,0.93) 0%, rgba(12,12,12,0.86) 35%, rgba(12,12,12,0.96) 100%)"
    >
      <div className="px-5 sm:px-8 md:px-10 py-12 sm:py-16 md:py-20">
        <div className="mx-auto max-w-5xl">
          <Breadcrumbs items={[{ label: 'About' }]} />
          <PageHero title="about me" subtitle={ABOUT_FULL} />
        </div>
      </div>

      {/* My story — text left, Baymax flush to the viewport right edge */}
      <section className="relative w-full overflow-visible py-16 sm:py-20 md:min-h-[520px] lg:min-h-[600px]">
        <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8 md:px-10 md:pr-[min(48vw,560px)]">
          <FadeIn y={30}>
            <h2 className="hero-heading mb-8 text-left text-4xl font-black uppercase sm:text-6xl">
              {ABOUT_STORY.headline}
            </h2>
          </FadeIn>
          <div className="max-w-xl space-y-6 text-left">
            {ABOUT_STORY.paragraphs.map((p, i) => (
              <FadeIn key={i} delay={i * 0.1} y={20}>
                <p className="text-base font-medium leading-relaxed text-[#D7E2EA] sm:text-lg">
                  {p}
                </p>
              </FadeIn>
            ))}
          </div>
        </div>

        <FadeIn
          delay={0.2}
          y={20}
          className="pointer-events-none mt-10 flex justify-end md:absolute md:inset-y-0 md:right-0 md:mt-0 md:flex md:items-end md:justify-end"
        >
          <img
            src={DECOR.baymax}
            alt="Friendly welcome"
            draggable={false}
            loading="lazy"
            className="h-auto w-[min(88vw,420px)] max-w-none select-none object-contain object-right mix-blend-screen sm:w-[min(70vw,480px)] md:h-full md:w-auto md:max-h-[640px]"
          />
        </FadeIn>
      </section>

      <div className="px-5 sm:px-8 md:px-10 pb-12 sm:pb-16 md:pb-20">
        <section className="relative mx-auto max-w-5xl overflow-hidden py-16">
          <Decoration
            src={DECOR.builders}
            alt="Collaborative builders"
            className="absolute bottom-0 left-[-6%] w-[140px] sm:left-[-2%] sm:w-[200px] md:w-[260px]"
            delay={0.2}
            x={-70}
            y={0}
          />
          <Decoration
            src={DECOR.stackLayers}
            alt="Layered systems"
            className="absolute right-[-4%] top-[10%] w-[110px] sm:right-0 sm:w-[160px] md:w-[200px]"
            delay={0.25}
            x={70}
            y={0}
          />
          <FadeIn y={30}>
            <h2 className="hero-heading relative z-10 mb-12 text-center text-4xl font-black uppercase sm:text-6xl">
              career journey
            </h2>
          </FadeIn>
          <div className="relative z-10 space-y-8 border-l border-[#D7E2EA]/20 pl-6 sm:pl-10">
            {timelinePreview.map((item, i) => (
              <FadeIn key={item.id} delay={i * 0.1} y={20}>
                <div className="relative">
                  <span className="absolute -left-[1.9rem] top-1 h-3 w-3 rounded-full bg-[#D7E2EA] sm:-left-[2.9rem]" />
                  <p className="mb-1 text-xs uppercase tracking-widest text-[#D7E2EA]/50">
                    {item.period}
                  </p>
                  <h3 className="text-xl font-medium uppercase text-[#D7E2EA]">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm text-[#D7E2EA]/70">{item.org}</p>
                  <p className="mt-3 font-light leading-relaxed text-[#D7E2EA]/80">
                    {item.summary}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
          <div className="relative z-10 mt-10 flex justify-center">
            <ViewMoreLink to="/experience" label="Full Experience" />
          </div>
        </section>

        <section className="mx-auto max-w-5xl py-16">
          <FadeIn y={30}>
            <h2 className="hero-heading mb-12 text-center text-4xl font-black uppercase sm:text-6xl">
              core values
            </h2>
          </FadeIn>
          <div className="grid gap-6 sm:grid-cols-2">
            {CORE_VALUES.map((value, i) => (
              <FadeIn key={value.title} delay={i * 0.08} y={20}>
                <div className="rounded-[28px] border border-[#D7E2EA]/25 p-6 sm:p-8">
                  <h3 className="mb-3 text-lg font-medium uppercase tracking-wider text-[#D7E2EA]">
                    {value.title}
                  </h3>
                  <p className="font-light leading-relaxed text-[#D7E2EA]/70">
                    {value.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-3xl py-16 text-center">
          <FadeIn y={30}>
            <h2 className="hero-heading mb-8 text-4xl font-black uppercase sm:text-6xl">
              {WHY_AI.title}
            </h2>
          </FadeIn>
          <AnimatedText
            text={WHY_AI.body}
            className="font-medium leading-relaxed text-[#D7E2EA]"
            style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)' }}
          />
        </section>

        <section className="relative mx-auto flex max-w-3xl flex-col items-center gap-8 py-10">
          <Decoration
            src={DECOR.handshake}
            alt="Partnership"
            className="absolute -left-4 top-0 w-[100px] opacity-90 sm:left-0 sm:w-[140px]"
            delay={0.1}
            x={-40}
            y={0}
          />
          <img
            src={SITE.portrait}
            alt={SITE.name}
            className="relative z-10 w-48 object-contain sm:w-64"
            loading="lazy"
          />
          <ContactButton label="let's work together" href="/contact" />
          <Link
            to="/tech"
            className="text-sm uppercase tracking-widest text-[#D7E2EA]/60 transition-colors hover:text-[#D7E2EA]"
          >
            Explore tech stack →
          </Link>
        </section>
      </div>
    </BgAtmosphere>
  )
}
