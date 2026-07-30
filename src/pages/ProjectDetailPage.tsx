import { Link, useParams } from 'react-router-dom'
import type { ReactNode } from 'react'
import Breadcrumbs from '../components/Breadcrumbs'
import FadeIn from '../components/FadeIn'
import LiveProjectButton from '../components/LiveProjectButton'
import { getProjectBySlug } from '../data/projects'

function Section({
  title,
  children,
  delay = 0,
}: {
  title: string
  children: ReactNode
  delay?: number
}) {
  return (
    <FadeIn delay={delay} y={24} className="mb-12 sm:mb-16">
      <h2 className="text-[#D7E2EA] font-medium uppercase tracking-widest text-sm mb-4">
        {title}
      </h2>
      {children}
    </FadeIn>
  )
}

export default function ProjectDetailPage() {
  const { slug } = useParams()
  const project = slug ? getProjectBySlug(slug) : undefined

  if (!project) {
    return (
      <div className="px-5 py-24 text-center text-[#D7E2EA]">
        <p className="mb-6 uppercase tracking-widest">Project not found.</p>
        <Link to="/projects" className="underline">
          Back to projects
        </Link>
      </div>
    )
  }

  return (
    <div className="px-5 sm:px-8 md:px-10 py-12 sm:py-16 md:py-20">
      <div className="mx-auto max-w-5xl">
        <Breadcrumbs
          items={[
            { label: 'Projects', to: '/projects' },
            { label: project.name },
          ]}
        />

        <FadeIn y={40}>
          <p className="text-[#D7E2EA]/50 text-sm uppercase tracking-widest mb-3">
            {project.number} · {project.category}
          </p>
          <h1
            className="hero-heading font-black uppercase leading-none tracking-tight mb-6"
            style={{ fontSize: 'clamp(2.5rem, 8vw, 100px)' }}
          >
            {project.name}
          </h1>
          <p className="text-[#D7E2EA] font-light text-lg sm:text-xl max-w-2xl mb-8">
            {project.tagline}
          </p>
          <div className="flex flex-wrap gap-3 mb-12">
            <LiveProjectButton href={project.liveUrl} />
            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border-2 border-[#D7E2EA] px-8 py-3 text-sm text-[#D7E2EA] font-medium uppercase tracking-widest hover:bg-[#D7E2EA]/10 transition-colors"
              >
                GitHub
              </a>
            ) : null}
          </div>
        </FadeIn>

        <div className="flex gap-3 sm:gap-4 md:gap-5 mb-16">
          <div className="flex w-[40%] flex-col gap-3 sm:gap-4">
            <img
              src={project.images.col1Top}
              alt=""
              className="w-full object-cover rounded-[32px] sm:rounded-[48px]"
              style={{ height: 'clamp(120px, 16vw, 220px)' }}
              loading="lazy"
            />
            <img
              src={project.images.col1Bottom}
              alt=""
              className="w-full object-cover rounded-[32px] sm:rounded-[48px]"
              style={{ height: 'clamp(150px, 22vw, 320px)' }}
              loading="lazy"
            />
          </div>
          <div className="w-[60%]">
            <img
              src={project.images.col2}
              alt={project.name}
              className="h-full w-full object-cover rounded-[32px] sm:rounded-[48px]"
              loading="lazy"
            />
          </div>
        </div>

        <Section title="Overview">
          <p className="text-[#D7E2EA]/85 font-light leading-relaxed text-lg">
            {project.overview}
          </p>
        </Section>
        <Section title="Problem" delay={0.05}>
          <p className="text-[#D7E2EA]/85 font-light leading-relaxed text-lg">
            {project.problem}
          </p>
        </Section>
        <Section title="Solution" delay={0.05}>
          <p className="text-[#D7E2EA]/85 font-light leading-relaxed text-lg">
            {project.solution}
          </p>
        </Section>
        <Section title="Architecture" delay={0.05}>
          <ul className="space-y-2 text-[#D7E2EA]/75 font-light">
            {project.architecture.map((a) => (
              <li key={a}>• {a}</li>
            ))}
          </ul>
        </Section>
        <Section title="Features" delay={0.05}>
          <div className="flex flex-wrap gap-2">
            {project.features.map((f) => (
              <span
                key={f}
                className="rounded-full border border-[#D7E2EA]/25 px-4 py-2 text-sm text-[#D7E2EA]"
              >
                {f}
              </span>
            ))}
          </div>
        </Section>
        <Section title="Tech Stack" delay={0.05}>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="rounded-full border-2 border-[#D7E2EA] px-4 py-2 text-xs uppercase tracking-widest text-[#D7E2EA]"
              >
                {t}
              </span>
            ))}
          </div>
        </Section>
        <Section title="Challenges" delay={0.05}>
          <ul className="space-y-2 text-[#D7E2EA]/75 font-light">
            {project.challenges.map((c) => (
              <li key={c}>• {c}</li>
            ))}
          </ul>
        </Section>
        <Section title="Gallery" delay={0.05}>
          <div className="grid gap-4 sm:grid-cols-3">
            {[project.images.col1Top, project.images.col1Bottom, project.images.col2].map(
              (src) => (
                <img
                  key={src}
                  src={src}
                  alt=""
                  className="w-full h-40 object-cover rounded-[24px]"
                  loading="lazy"
                />
              ),
            )}
          </div>
        </Section>
        <Section title="Results" delay={0.05}>
          <ul className="space-y-2 text-[#D7E2EA]/75 font-light">
            {project.results.map((r) => (
              <li key={r}>• {r}</li>
            ))}
          </ul>
        </Section>
        <Section title="Lessons Learned" delay={0.05}>
          <ul className="space-y-2 text-[#D7E2EA]/75 font-light">
            {project.lessons.map((l) => (
              <li key={l}>• {l}</li>
            ))}
          </ul>
        </Section>
        <Section title="Future Improvements" delay={0.05}>
          <ul className="space-y-2 text-[#D7E2EA]/75 font-light">
            {project.future.map((f) => (
              <li key={f}>• {f}</li>
            ))}
          </ul>
        </Section>

        <div className="pt-8 border-t border-[#D7E2EA]/15">
          <Link
            to="/projects"
            className="text-[#D7E2EA] uppercase tracking-widest text-sm hover:opacity-70 transition-opacity"
          >
            ← All projects
          </Link>
        </div>
      </div>
    </div>
  )
}
