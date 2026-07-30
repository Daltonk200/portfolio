export type TechLevel = 'Expert' | 'Advanced' | 'Proficient' | 'Familiar'

export interface TechItem {
  name: string
  level: TechLevel
  explanation: string
  usedIn: string
  icon: string
}

export interface TechCategory {
  id: string
  name: string
  items: TechItem[]
}

export const TECH_STACK: TechCategory[] = [
  {
    id: 'frontend',
    name: 'Frontend',
    items: [
      {
        name: 'React',
        level: 'Expert',
        explanation: 'Component architecture, hooks, performance patterns.',
        usedIn: 'Most client dashboards and marketing sites',
        icon: 'Atom',
      },
      {
        name: 'Next.js',
        level: 'Advanced',
        explanation: 'App Router, SSR/SSG, API routes, edge-friendly apps.',
        usedIn: 'SaaS frontends and MVPs',
        icon: 'Globe',
      },
      {
        name: 'TypeScript',
        level: 'Expert',
        explanation: 'Typed APIs, safer refactors, shared contracts.',
        usedIn: 'All production projects',
        icon: 'FileCode',
      },
      {
        name: 'Tailwind CSS',
        level: 'Advanced',
        explanation: 'Fast, consistent UI systems without heavy CSS debt.',
        usedIn: 'Portfolios, dashboards, landing pages',
        icon: 'Palette',
      },
      {
        name: 'Framer Motion',
        level: 'Proficient',
        explanation: 'Meaningful motion for hierarchy and delight.',
        usedIn: 'Marketing sites and product onboarding',
        icon: 'Sparkles',
      },
    ],
  },
  {
    id: 'backend',
    name: 'Backend',
    items: [
      {
        name: 'Node.js',
        level: 'Expert',
        explanation: 'APIs, workers, realtime services.',
        usedIn: 'Agent backends and SaaS APIs',
        icon: 'Server',
      },
      {
        name: 'Express / Fastify',
        level: 'Advanced',
        explanation: 'REST services with auth, validation, rate limits.',
        usedIn: 'Outreach platforms and integrations',
        icon: 'Network',
      },
      {
        name: 'REST APIs',
        level: 'Expert',
        explanation: 'Clear contracts, versioning, error design.',
        usedIn: 'All product backends',
        icon: 'Link',
      },
    ],
  },
  {
    id: 'ai',
    name: 'AI',
    items: [
      {
        name: 'OpenAI',
        level: 'Advanced',
        explanation: 'Chat, tools, embeddings, structured outputs.',
        usedIn: 'WhatsApp agent, PrepStudio, Nextise',
        icon: 'Bot',
      },
      {
        name: 'Claude / Gemini',
        level: 'Advanced',
        explanation: 'Multi-model routing for quality and cost.',
        usedIn: 'AI integrations & consulting work',
        icon: 'Brain',
      },
      {
        name: 'RAG / Embeddings',
        level: 'Proficient',
        explanation: 'Ground agents in private knowledge bases.',
        usedIn: 'Support bots and interview coach',
        icon: 'Database',
      },
    ],
  },
  {
    id: 'automation',
    name: 'Automation',
    items: [
      {
        name: 'n8n',
        level: 'Advanced',
        explanation: 'Visual workflows with custom code nodes.',
        usedIn: 'Ops automations and lead pipelines',
        icon: 'Workflow',
      },
      {
        name: 'Webhooks',
        level: 'Expert',
        explanation: 'Event-driven glue between systems.',
        usedIn: 'Messaging, payments, CRM sync',
        icon: 'Webhook',
      },
    ],
  },
  {
    id: 'cloud',
    name: 'Cloud',
    items: [
      {
        name: 'Vercel',
        level: 'Advanced',
        explanation: 'Frontend hosting and edge-friendly deploys.',
        usedIn: 'Most Next.js apps',
        icon: 'Cloud',
      },
      {
        name: 'AWS / Railway',
        level: 'Proficient',
        explanation: 'Services, storage, and always-on workers.',
        usedIn: 'Agent runtimes and APIs',
        icon: 'CloudCog',
      },
    ],
  },
  {
    id: 'devops',
    name: 'DevOps',
    items: [
      {
        name: 'GitHub Actions',
        level: 'Proficient',
        explanation: 'CI checks, previews, and deploy pipelines.',
        usedIn: 'Client and personal repos',
        icon: 'GitBranch',
      },
      {
        name: 'Docker',
        level: 'Familiar',
        explanation: 'Reproducible local and server environments.',
        usedIn: 'Backend services when needed',
        icon: 'Container',
      },
    ],
  },
  {
    id: 'databases',
    name: 'Databases',
    items: [
      {
        name: 'PostgreSQL',
        level: 'Advanced',
        explanation: 'Relational modeling, migrations, indexes.',
        usedIn: 'SaaS products and ordering platforms',
        icon: 'Database',
      },
      {
        name: 'Redis',
        level: 'Proficient',
        explanation: 'Caching, queues, rate limiting.',
        usedIn: 'High-traffic API paths',
        icon: 'Zap',
      },
      {
        name: 'MongoDB',
        level: 'Familiar',
        explanation: 'Document stores for flexible schemas.',
        usedIn: 'Select prototypes and logs',
        icon: 'HardDrive',
      },
    ],
  },
  {
    id: 'tools',
    name: 'Tools',
    items: [
      {
        name: 'Git',
        level: 'Expert',
        explanation: 'Branching, reviews, clean history.',
        usedIn: 'Every project',
        icon: 'GitBranch',
      },
      {
        name: 'Figma',
        level: 'Proficient',
        explanation: 'Design handoff and rapid UI iteration.',
        usedIn: 'Product and marketing UIs',
        icon: 'Figma',
      },
      {
        name: 'Postman / Insomnia',
        level: 'Advanced',
        explanation: 'API exploration and regression checks.',
        usedIn: 'Backend delivery',
        icon: 'Send',
      },
    ],
  },
]

export const TECH_PREVIEW = TECH_STACK.flatMap((c) => c.items).slice(0, 8)
