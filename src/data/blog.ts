export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  category: string
  date: string
  readTime: string
  tags: string[]
  content: string[]
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'designing-reliable-ai-agents',
    title: 'Designing Reliable AI Agents (Not Just Clever Demos)',
    excerpt:
      'How to move from chat prototypes to agents that call tools, fail safely, and earn user trust.',
    category: 'AI',
    date: '2026-06-12',
    readTime: '8 min',
    tags: ['AI', 'Agents', 'Architecture'],
    content: [
      'Most AI demos impress for five minutes and collapse in production. Reliability starts with clear goals, constrained tools, and measurable success criteria.',
      'Treat the model as a planner and writer—not the source of truth. Ground answers with retrieval, enforce structured outputs, and escalate to humans when confidence is low.',
      'Instrument everything: prompts, tool calls, latency, cost, and user corrections. Without logs, you cannot improve.',
      'Ship a narrow vertical slice first. One channel, one workflow, one definition of done—then expand.',
    ],
  },
  {
    slug: 'n8n-vs-custom-automation',
    title: 'When to Use n8n vs Custom Automation Services',
    excerpt:
      'A practical decision framework for ops automation: speed, visibility, and when code wins.',
    category: 'Engineering',
    date: '2026-05-03',
    readTime: '6 min',
    tags: ['Automation', 'n8n', 'Backend'],
    content: [
      'n8n shines when non-engineers need visibility and when integrations change weekly. Custom services win when logic is complex, latency-sensitive, or tightly coupled to your domain model.',
      'A hybrid often works best: n8n for orchestration edges, Node services for core business rules.',
      'Always design for failure—retries, dead-letter paths, and clear alerts beat silent success dashboards.',
    ],
  },
  {
    slug: 'mvp-scope-for-ai-startups',
    title: 'Scoping an AI MVP Without Boiling the Ocean',
    excerpt:
      'Ruthless scope, one killer workflow, and the architecture choices that keep options open.',
    category: 'Product',
    date: '2026-03-18',
    readTime: '7 min',
    tags: ['MVP', 'Startups', 'AI'],
    content: [
      'An AI MVP is still an MVP. Pick one user, one painful job, and one measurable outcome.',
      'Prefer boring infrastructure around a sharp AI feature. Auth, billing, and CRUD should be conventional so you can iterate on the intelligence layer.',
      'Plan for evals from day one—even a spreadsheet of golden examples beats vibes-based shipping.',
    ],
  },
  {
    slug: 'full-stack-patterns-for-llm-apps',
    title: 'Full-Stack Patterns for LLM-Powered Apps',
    excerpt:
      'Streaming UIs, server-side tool execution, and cost controls that belong in your architecture.',
    category: 'Engineering',
    date: '2026-01-22',
    readTime: '9 min',
    tags: ['Full Stack', 'LLM', 'TypeScript'],
    content: [
      'Keep secrets and tool credentials on the server. Stream tokens to the client; execute tools behind your API.',
      'Cache embeddings and reuse prompts carefully. Cost spikes usually come from naive loops, not the first request.',
      'Type your tool schemas. Structured outputs plus TypeScript contracts reduce an entire class of runtime surprises.',
    ],
  },
]

export const getPostBySlug = (slug: string) => BLOG_POSTS.find((p) => p.slug === slug)
