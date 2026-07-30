import {
  Atom,
  Bot,
  Brain,
  Cloud,
  CloudCog,
  Database,
  Figma,
  FileCode,
  GitBranch,
  Globe,
  HardDrive,
  Link,
  Network,
  Palette,
  Send,
  Server,
  Sparkles,
  Zap,
  type LucideIcon,
} from 'lucide-react'
import { BG } from '../assets/bg'
import { DECOR } from '../assets/decorations'
import BgAtmosphere from '../components/BgAtmosphere'
import Breadcrumbs from '../components/Breadcrumbs'
import Decoration from '../components/Decoration'
import FadeIn from '../components/FadeIn'
import PageHero from '../components/PageHero'
import { TECH_STACK } from '../data/tech'

const ICON_MAP: Record<string, LucideIcon> = {
  Atom,
  Globe,
  FileCode,
  Palette,
  Sparkles,
  Server,
  Network,
  Link,
  Bot,
  Brain,
  Database,
  Workflow: Zap,
  Webhook: Link,
  Cloud,
  CloudCog,
  GitBranch,
  Container: Server,
  Zap,
  HardDrive,
  Figma,
  Send,
}

function TechIcon({ name }: { name: string }) {
  const Icon = ICON_MAP[name] ?? Zap
  return <Icon size={22} className="text-[#D7E2EA]" />
}

export default function TechPage() {
  return (
    <BgAtmosphere
      src={BG.keyboard}
      intensity={0.18}
      position="center"
      className="relative min-h-screen overflow-hidden"
      overlay="linear-gradient(180deg, rgba(12,12,12,0.94) 0%, rgba(12,12,12,0.82) 40%, rgba(12,12,12,0.95) 100%)"
    >
      <Decoration
        src={DECOR.stackLayers}
        alt="Layered architecture"
        className="absolute right-[-2%] top-[12%] z-[5] w-[130px] sm:right-[3%] sm:w-[190px] md:w-[240px]"
        delay={0.2}
        x={50}
        y={0}
      />
      <div className="relative z-10 px-5 sm:px-8 md:px-10 py-12 sm:py-16 md:py-20">
        <div className="mx-auto max-w-5xl">
          <Breadcrumbs items={[{ label: 'Tech Stack' }]} />
          <PageHero
            title="tech stack"
            subtitle="Tools I use to design, build, and ship AI-powered products—with notes on where they show up in real work."
          />

          <div className="space-y-16 sm:space-y-20">
            {TECH_STACK.map((category, ci) => (
              <FadeIn key={category.id} delay={Math.min(ci * 0.05, 0.25)} y={30}>
                <section>
                  <h2 className="text-[#D7E2EA] font-black uppercase tracking-tight text-3xl sm:text-5xl mb-8">
                    {category.name}
                  </h2>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {category.items.map((item) => (
                      <div
                        key={item.name}
                        className="rounded-[28px] border border-[#D7E2EA]/20 p-5 sm:p-6 flex gap-4 bg-[#0C0C0C]/55 backdrop-blur-sm"
                      >
                        <div className="shrink-0 mt-1">
                          <TechIcon name={item.icon} />
                        </div>
                        <div>
                          <div className="flex flex-wrap items-center gap-3 mb-2">
                            <h3 className="text-[#D7E2EA] font-medium uppercase tracking-wider">
                              {item.name}
                            </h3>
                            <span className="rounded-full border border-[#D7E2EA]/30 px-3 py-0.5 text-[10px] uppercase tracking-widest text-[#D7E2EA]/70">
                              {item.level}
                            </span>
                          </div>
                          <p className="text-[#D7E2EA]/70 font-light text-sm leading-relaxed mb-2">
                            {item.explanation}
                          </p>
                          <p className="text-[#D7E2EA]/45 text-xs uppercase tracking-wider">
                            Used in: {item.usedIn}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </BgAtmosphere>
  )
}
