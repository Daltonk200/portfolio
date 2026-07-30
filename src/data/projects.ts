export type ProjectFilter =
  | 'All'
  | 'AI'
  | 'SaaS'
  | 'Automation'
  | 'Full Stack'
  | 'Startup'

export interface Project {
  number: string
  slug: string
  category: string
  filters: ProjectFilter[]
  name: string
  tagline: string
  tags: string[]
  tech: string[]
  featured?: boolean
  liveUrl?: string
  githubUrl?: string
  images: {
    col1Top: string
    col1Bottom: string
    col2: string
  }
  overview: string
  problem: string
  solution: string
  architecture: string[]
  features: string[]
  challenges: string[]
  results: string[]
  lessons: string[]
  future: string[]
}

const M = (n: number) =>
  `https://pub-86dc5b5484314368ac5436a674b0d919.r2.dev/hero%20sections/animated%20(${n}).webp`

export const PROJECTS: Project[] = [
  {
    number: '01',
    slug: 'nextise-outreach-platform',
    category: 'AI SaaS',
    filters: ['AI', 'SaaS', 'Full Stack'],
    name: 'Nextise Outreach Platform',
    tagline: 'AI-assisted outreach sequences that help teams personalize at scale.',
    tags: ['SaaS', 'Outreach', 'AI'],
    tech: ['Next.js', 'Node.js', 'PostgreSQL', 'OpenAI', 'Webhooks'],
    featured: true,
    liveUrl: '#',
    images: { col1Top: M(10), col1Bottom: M(12), col2: M(22) },
    overview:
      'A SaaS platform for modern outreach—combining sequencing, CRM sync, and LLM-assisted personalization.',
    problem:
      'Sales and growth teams spend hours writing repetitive messages and stitching tools together manually.',
    solution:
      'Built a web app where teams manage sequences, enrich context, and generate tailored outreach with human approval gates.',
    architecture: [
      'Next.js frontend with authenticated workspaces',
      'Node API for campaigns, contacts, and jobs',
      'LLM service for draft generation with structured prompts',
      'Webhook-driven sync with external CRMs',
    ],
    features: [
      'Campaign builder & sequencing',
      'AI draft suggestions',
      'Contact enrichment hooks',
      'Activity timeline & status tracking',
    ],
    challenges: [
      'Keeping AI copy on-brand without over-automating sends',
      'Reliable background jobs for sync and retries',
    ],
    results: [
      'Faster campaign setup for early users',
      'Clearer separation between AI assist and human send',
    ],
    lessons: [
      'Approval UX is as important as model quality',
      'Observability on jobs prevents silent outreach failures',
    ],
    future: ['Deeper CRM native sync', 'Multi-channel sequences', 'Team analytics'],
  },
  {
    number: '02',
    slug: 'whatsapp-ai-agent',
    category: 'AI Product',
    filters: ['AI', 'Automation'],
    name: 'WhatsApp AI Agent',
    tagline: 'A production messaging agent that answers, routes, and takes action.',
    tags: ['WhatsApp', 'Agent', 'Automation'],
    tech: ['Node.js', 'OpenAI', 'n8n', 'Redis', 'Webhooks'],
    featured: true,
    liveUrl: '#',
    githubUrl: '#',
    images: { col1Top: M(7), col1Bottom: M(14), col2: M(16) },
    overview:
      'An AI agent connected to WhatsApp that handles FAQs, qualifies leads, and escalates complex cases.',
    problem:
      'Businesses lose leads overnight when no one is available to reply on messaging channels.',
    solution:
      'Designed an agent with tools, memory of recent context, and clear escalation to a human inbox.',
    architecture: [
      'WhatsApp provider webhooks → agent runtime',
      'LLM planner with tool-calling',
      'Knowledge retrieval for FAQs',
      'n8n for CRM / sheet side effects',
    ],
    features: [
      '24/7 first response',
      'Lead qualification flows',
      'Human handoff',
      'Conversation logging',
    ],
    challenges: [
      'Latency on tool chains',
      'Preventing unsafe or off-policy replies',
    ],
    results: [
      'Faster first response times',
      'Reduced manual FAQ load',
    ],
    lessons: [
      'Channel constraints shape prompt design',
      'Guardrails belong in tools, not only prompts',
    ],
    future: ['Voice notes understanding', 'Multi-language routing', 'Analytics dashboard'],
  },
  {
    number: '03',
    slug: 'smart-restaurant-ordering',
    category: 'Startup',
    filters: ['Startup', 'Full Stack', 'SaaS'],
    name: 'Smart Restaurant Ordering Platform',
    tagline: 'Digital ordering that connects guests, kitchen, and operations.',
    tags: ['Ordering', 'Startup', 'Full Stack'],
    tech: ['React', 'Node.js', 'PostgreSQL', 'Realtime updates'],
    featured: true,
    liveUrl: '#',
    images: { col1Top: M(18), col1Bottom: M(21), col2: M(23) },
    overview:
      'A restaurant ordering platform covering menu browsing, cart, order status, and kitchen-facing views.',
    problem:
      'Paper tickets and fragmented channels create errors and slow service during peak hours.',
    solution:
      'Unified digital ordering with clear status transitions from guest to kitchen.',
    architecture: [
      'Customer web app',
      'Admin / kitchen dashboard',
      'Order API with status machine',
      'Postgres as source of truth',
    ],
    features: [
      'Menu & modifiers',
      'Checkout flow',
      'Order tracking',
      'Kitchen queue',
    ],
    challenges: [
      'Handling peak concurrency',
      'Keeping kitchen UX extremely simple',
    ],
    results: [
      'Cleaner order handoff',
      'Foundation for multi-location rollout',
    ],
    lessons: [
      'Ops UX beats fancy visuals in hospitality',
      'Status clarity reduces support tickets',
    ],
    future: ['Table QR modes', 'Loyalty', 'Delivery partner hooks'],
  },
  {
    number: '04',
    slug: 'prepstudio-ai-interview-coach',
    category: 'AI',
    filters: ['AI', 'Full Stack'],
    name: 'PrepStudio AI Interview Coach',
    tagline: 'Practice interviews with structured AI feedback—not vague chat.',
    tags: ['AI', 'Education', 'Coach'],
    tech: ['Next.js', 'OpenAI', 'PostgreSQL', 'TypeScript'],
    featured: false,
    liveUrl: '#',
    images: { col1Top: M(8), col1Bottom: M(15), col2: M(25) },
    overview:
      'An interview practice product that simulates rounds, scores answers against rubrics, and tracks improvement.',
    problem:
      'Generic ChatGPT practice lacks structure, scoring, and progress tracking.',
    solution:
      'Built session-based coaching with rubrics, timed answers, and actionable feedback.',
    architecture: [
      'Next.js app with auth',
      'Session & rubric models in Postgres',
      'LLM scoring with structured JSON',
      'History dashboard for progress',
    ],
    features: [
      'Role-specific question banks',
      'Timed practice modes',
      'Rubric scoring',
      'Feedback history',
    ],
    challenges: [
      'Consistent scoring across sessions',
      'Balancing encouragement with honesty',
    ],
    results: [
      'Clearer practice loops for users',
      'Reusable rubric patterns for other AI coaches',
    ],
    lessons: [
      'Structure beats freeform chat for learning products',
      'Show the rubric to build trust in AI scores',
    ],
    future: ['Voice interviews', 'Peer mock mode', 'Company-specific packs'],
  },
]

export const getProjectBySlug = (slug: string) => PROJECTS.find((p) => p.slug === slug)

export const getFeaturedProjects = () => PROJECTS.filter((p) => p.featured).slice(0, 3)

export const PROJECT_FILTERS: ProjectFilter[] = [
  'All',
  'AI',
  'SaaS',
  'Automation',
  'Full Stack',
  'Startup',
]
