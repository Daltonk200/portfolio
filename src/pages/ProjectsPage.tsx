import { Search } from 'lucide-react'
import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import Breadcrumbs from '../components/Breadcrumbs'
import FadeIn from '../components/FadeIn'
import PageHero from '../components/PageHero'
import {
  PROJECT_FILTERS,
  PROJECTS,
  type ProjectFilter,
} from '../data/projects'

export default function ProjectsPage() {
  const [filter, setFilter] = useState<ProjectFilter>('All')
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return PROJECTS.filter((p) => {
      const matchesFilter = filter === 'All' || p.filters.includes(filter)
      const matchesQuery =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.tagline.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q)) ||
        p.tech.some((t) => t.toLowerCase().includes(q))
      return matchesFilter && matchesQuery
    })
  }, [filter, query])

  return (
    <div className="px-5 sm:px-8 md:px-10 py-12 sm:py-16 md:py-20">
      <div className="mx-auto max-w-6xl">
        <Breadcrumbs items={[{ label: 'Projects' }]} />
        <PageHero
          title="projects"
          subtitle="Case studies across AI products, SaaS, automation, and full-stack builds."
        />

        <div className="flex flex-col gap-6 mb-12">
          <div className="relative max-w-md">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[#D7E2EA]/50"
            />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search projects, tags, tech..."
              className="w-full rounded-full border-2 border-[#D7E2EA]/30 bg-transparent pl-11 pr-5 py-3 text-[#D7E2EA] placeholder:text-[#D7E2EA]/40 outline-none focus:border-[#D7E2EA] transition-colors"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {PROJECT_FILTERS.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setFilter(f)}
                className={`rounded-full border-2 px-4 py-2 text-xs sm:text-sm uppercase tracking-widest transition-colors duration-200 ${
                  filter === f
                    ? 'border-[#D7E2EA] bg-[#D7E2EA]/15 text-[#D7E2EA]'
                    : 'border-[#D7E2EA]/25 text-[#D7E2EA]/60 hover:border-[#D7E2EA]/50'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          {filtered.map((project, i) => (
            <FadeIn key={project.slug} delay={Math.min(i * 0.06, 0.3)} y={30}>
              <Link
                to={`/projects/${project.slug}`}
                className="group block h-full rounded-[32px] sm:rounded-[40px] border-2 border-[#D7E2EA] overflow-hidden hover:opacity-90 transition-opacity duration-200"
              >
                <div className="relative h-56 sm:h-64 overflow-hidden">
                  <img
                    src={project.images.col2}
                    alt={project.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-5 sm:p-7">
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <span className="text-[#D7E2EA]/50 text-xs uppercase tracking-widest">
                      {project.number} · {project.category}
                    </span>
                  </div>
                  <h2 className="text-[#D7E2EA] font-medium uppercase text-xl sm:text-2xl mb-2">
                    {project.name}
                  </h2>
                  <p className="text-[#D7E2EA]/70 font-light text-sm leading-relaxed mb-4">
                    {project.tagline}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-[#D7E2EA]/25 px-3 py-1 text-[10px] uppercase tracking-widest text-[#D7E2EA]/70"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.slice(0, 4).map((t) => (
                      <span
                        key={t}
                        className="text-[#D7E2EA]/45 text-[10px] uppercase tracking-wider"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>

        {filtered.length === 0 ? (
          <p className="text-center text-[#D7E2EA]/50 py-20 uppercase tracking-widest text-sm">
            No projects match your filters.
          </p>
        ) : null}
      </div>
    </div>
  )
}
