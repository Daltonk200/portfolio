import { BG } from '../assets/bg'
import BgAtmosphere from '../components/BgAtmosphere'
import Breadcrumbs from '../components/Breadcrumbs'
import FadeIn from '../components/FadeIn'
import PageHero from '../components/PageHero'
import { EXPERIENCE } from '../data/experience'

const typeLabel = {
  work: 'Work',
  freelance: 'Freelance',
  milestone: 'Milestone',
}

export default function ExperiencePage() {
  return (
    <BgAtmosphere
      src={BG.keyboard}
      intensity={0.14}
      position="left center"
      className="min-h-screen"
      overlay="linear-gradient(90deg, rgba(12,12,12,0.92) 0%, rgba(12,12,12,0.88) 50%, rgba(12,12,12,0.96) 100%)"
    >
      <div className="px-5 sm:px-8 md:px-10 py-12 sm:py-16 md:py-20">
        <div className="mx-auto max-w-4xl">
          <Breadcrumbs items={[{ label: 'Experience' }]} />
          <PageHero
            title="experience"
            subtitle="A timeline of roles, freelance work, and product milestones."
          />

          <div className="relative border-l-2 border-[#D7E2EA]/20 pl-8 sm:pl-12 space-y-12">
            {EXPERIENCE.map((item, i) => (
              <FadeIn key={item.id} delay={i * 0.08} y={30}>
                <article className="relative rounded-[24px] border border-[#D7E2EA]/10 bg-[#0C0C0C]/40 backdrop-blur-sm p-5 sm:p-6 -ml-2">
                  <span className="absolute -left-[2.6rem] sm:-left-[3.6rem] top-8 h-4 w-4 rounded-full border-2 border-[#D7E2EA] bg-[#0C0C0C]" />
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="rounded-full border border-[#D7E2EA]/30 px-3 py-1 text-[10px] uppercase tracking-widest text-[#D7E2EA]/70">
                      {typeLabel[item.type]}
                    </span>
                    <span className="text-[#D7E2EA]/50 text-xs uppercase tracking-widest">
                      {item.period}
                    </span>
                  </div>
                  <h2 className="text-[#D7E2EA] font-medium uppercase text-2xl sm:text-3xl tracking-tight">
                    {item.title}
                  </h2>
                  <p className="text-[#D7E2EA]/70 mt-1 mb-4">
                    {item.org}
                    {item.location ? ` · ${item.location}` : ''}
                  </p>
                  <p className="text-[#D7E2EA]/80 font-light leading-relaxed mb-6">
                    {item.summary}
                  </p>
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <h3 className="text-[#D7E2EA] text-xs uppercase tracking-widest mb-2">
                        Responsibilities
                      </h3>
                      <ul className="space-y-2 text-[#D7E2EA]/65 font-light text-sm">
                        {item.responsibilities.map((r) => (
                          <li key={r}>• {r}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-[#D7E2EA] text-xs uppercase tracking-widest mb-2">
                        Achievements
                      </h3>
                      <ul className="space-y-2 text-[#D7E2EA]/65 font-light text-sm">
                        {item.achievements.map((a) => (
                          <li key={a}>• {a}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </BgAtmosphere>
  )
}
