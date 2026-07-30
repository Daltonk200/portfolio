import { Link } from 'react-router-dom'
import { BG } from '../assets/bg'
import BgAtmosphere from '../components/BgAtmosphere'
import Breadcrumbs from '../components/Breadcrumbs'
import FadeIn from '../components/FadeIn'
import PageHero from '../components/PageHero'
import { BLOG_POSTS } from '../data/blog'

export default function BlogPage() {
  return (
    <BgAtmosphere
      src={BG.figure}
      intensity={0.16}
      position="center"
      className="min-h-screen"
      overlay="linear-gradient(180deg, rgba(12,12,12,0.94) 0%, rgba(12,12,12,0.88) 50%, rgba(12,12,12,0.96) 100%)"
    >
      <div className="px-5 sm:px-8 md:px-10 py-12 sm:py-16 md:py-20">
        <div className="mx-auto max-w-5xl">
          <Breadcrumbs items={[{ label: 'Blog' }]} />
          <PageHero
            title="insights"
            subtitle="Notes on AI agents, engineering patterns, and building products that ship."
          />

          <div className="space-y-6">
            {BLOG_POSTS.map((post, i) => (
              <FadeIn key={post.slug} delay={i * 0.08} y={24}>
                <Link
                  to={`/blog/${post.slug}`}
                  className="block rounded-[28px] border border-[#D7E2EA]/25 p-6 sm:p-8 bg-[#0C0C0C]/50 backdrop-blur-sm hover:bg-[#D7E2EA]/5 transition-colors duration-200"
                >
                  <div className="flex flex-wrap items-center gap-3 mb-3 text-[10px] uppercase tracking-widest text-[#D7E2EA]/50">
                    <span>{post.category}</span>
                    <span>·</span>
                    <span>{post.date}</span>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h2 className="text-[#D7E2EA] font-medium uppercase text-xl sm:text-2xl tracking-tight mb-3">
                    {post.title}
                  </h2>
                  <p className="text-[#D7E2EA]/70 font-light leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-[#D7E2EA]/20 px-3 py-1 text-[10px] uppercase tracking-widest text-[#D7E2EA]/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </BgAtmosphere>
  )
}
