import { Link, useParams } from 'react-router-dom'
import Breadcrumbs from '../components/Breadcrumbs'
import FadeIn from '../components/FadeIn'
import { getPostBySlug } from '../data/blog'

export default function BlogPostPage() {
  const { slug } = useParams()
  const post = slug ? getPostBySlug(slug) : undefined

  if (!post) {
    return (
      <div className="px-5 py-24 text-center text-[#D7E2EA]">
        <p className="mb-6 uppercase tracking-widest">Article not found.</p>
        <Link to="/blog" className="underline">
          Back to blog
        </Link>
      </div>
    )
  }

  return (
    <article className="px-5 sm:px-8 md:px-10 py-12 sm:py-16 md:py-20">
      <div className="mx-auto max-w-3xl">
        <Breadcrumbs
          items={[
            { label: 'Blog', to: '/blog' },
            { label: post.title },
          ]}
        />

        <FadeIn y={30}>
          <div className="flex flex-wrap gap-3 mb-4 text-[10px] uppercase tracking-widest text-[#D7E2EA]/50">
            <span>{post.category}</span>
            <span>·</span>
            <span>{post.date}</span>
            <span>·</span>
            <span>{post.readTime}</span>
          </div>
          <h1
            className="hero-heading font-black uppercase leading-none tracking-tight mb-8"
            style={{ fontSize: 'clamp(2rem, 7vw, 72px)' }}
          >
            {post.title}
          </h1>
          <p className="text-[#D7E2EA]/80 font-light text-lg leading-relaxed mb-12 border-b border-[#D7E2EA]/15 pb-10">
            {post.excerpt}
          </p>
        </FadeIn>

        <div className="space-y-6">
          {post.content.map((paragraph, i) => (
            <FadeIn key={i} delay={Math.min(i * 0.05, 0.3)} y={16}>
              <p className="text-[#D7E2EA]/85 font-light leading-relaxed text-base sm:text-lg">
                {paragraph}
              </p>
            </FadeIn>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 mt-12 pt-8 border-t border-[#D7E2EA]/15">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-[#D7E2EA]/25 px-4 py-1.5 text-xs uppercase tracking-widest text-[#D7E2EA]/70"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-10">
          <Link
            to="/blog"
            className="text-[#D7E2EA] uppercase tracking-widest text-sm hover:opacity-70 transition-opacity"
          >
            ← All insights
          </Link>
        </div>
      </div>
    </article>
  )
}
