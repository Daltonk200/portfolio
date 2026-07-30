export interface Service {
  number: string
  slug: string
  name: string
  shortDescription: string
  description: string
  technologies: string[]
  workflow: string[]
  deliverables: string[]
  idealClients: string[]
  faqs: { q: string; a: string }[]
  featured?: boolean
}

export const SERVICES: Service[] = [
  {
    number: '01',
    slug: 'full-stack-development',
    name: 'Full-Stack Development',
    shortDescription:
      'Building modern, scalable web applications using React, Next.js, Node.js, TypeScript, and cloud technologies.',
    description:
      'End-to-end web product development—from UI architecture to APIs and deployment. I build fast, accessible interfaces backed by solid server design so your product can grow without rewrites.',
    technologies: ['React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
    workflow: [
      'Discovery & requirements mapping',
      'Architecture & data model design',
      'Iterative UI + API implementation',
      'Testing, hardening & deployment',
    ],
    deliverables: [
      'Production-ready web app',
      'Documented API',
      'Admin / dashboard surfaces as needed',
      'Deployment & handover notes',
    ],
    idealClients: ['Startups shipping MVPs', 'SMBs modernizing legacy tools', 'Product teams needing velocity'],
    faqs: [
      {
        q: 'Do you work with existing codebases?',
        a: 'Yes—audits, refactors, and feature delivery inside established React/Node stacks are common.',
      },
      {
        q: 'Can you own deployment?',
        a: 'Absolutely. I regularly ship to Vercel, Railway, Render, and cloud VMs with CI pipelines.',
      },
    ],
    featured: true,
  },
  {
    number: '02',
    slug: 'ai-agent-development',
    name: 'AI Agent Development',
    shortDescription:
      "Designing AI assistants, chatbots, and autonomous workflows powered by today's leading language models.",
    description:
      'Custom AI agents that talk to your tools, follow business rules, and stay observable. From WhatsApp bots to internal copilots—designed for reliability, not just demos.',
    technologies: ['OpenAI', 'Claude', 'LangChain / custom orchestration', 'Vector DBs', 'Webhooks'],
    workflow: [
      'Use-case & success metrics definition',
      'Prompt / tool / memory architecture',
      'Integration with channels & APIs',
      'Eval loops, guardrails & monitoring',
    ],
    deliverables: [
      'Working agent in your channel of choice',
      'Tool integrations',
      'Eval checklist & logging',
      'Ops runbook',
    ],
    idealClients: ['Support-heavy businesses', 'Sales/ops teams', 'SaaS products adding copilots'],
    faqs: [
      {
        q: 'Which models do you use?',
        a: 'OpenAI, Claude, Gemini, Groq, OpenRouter—and model routing based on cost/latency needs.',
      },
      {
        q: 'How do you prevent hallucinations?',
        a: 'Grounding with retrieval, strict tools, structured outputs, and human escalation paths.',
      },
    ],
    featured: true,
  },
  {
    number: '03',
    slug: 'workflow-automation',
    name: 'Workflow Automation',
    shortDescription:
      'Connecting business tools with intelligent automations using n8n, APIs, and custom integrations.',
    description:
      'Automate the glue between CRMs, messaging, sheets, and internal systems—so your team spends time on judgment, not copy-paste.',
    technologies: ['n8n', 'Zapier (selectively)', 'REST APIs', 'Webhooks', 'Node.js'],
    workflow: [
      'Map current manual processes',
      'Design triggers, branching & error handling',
      'Build & test workflows',
      'Monitor & iterate',
    ],
    deliverables: ['Live automation workflows', 'Error alerts', 'Documentation', 'Training for your team'],
    idealClients: ['Ops teams drowning in manual work', 'Agencies', 'Founders wearing too many hats'],
    faqs: [
      {
        q: 'n8n or custom code?',
        a: 'n8n for speed and visibility; custom services when logic, scale, or security demands it.',
      },
    ],
    featured: true,
  },
  {
    number: '04',
    slug: 'api-backend-engineering',
    name: 'API & Backend Engineering',
    shortDescription:
      'Creating secure REST APIs, authentication systems, databases, and scalable backend architectures.',
    description:
      'Secure, well-structured backends: auth, data models, rate limits, and APIs that frontend and partners can trust.',
    technologies: ['Node.js', 'Express / Fastify', 'PostgreSQL', 'Redis', 'JWT / OAuth'],
    workflow: [
      'Domain & schema design',
      'Auth & permission model',
      'API implementation & contracts',
      'Load testing & observability',
    ],
    deliverables: ['REST/GraphQL APIs', 'Auth system', 'Database migrations', 'API docs'],
    idealClients: ['Product teams', 'Mobile + web apps', 'Integrations platforms'],
    faqs: [
      {
        q: 'Do you handle auth?',
        a: 'Yes—email/password, OAuth, magic links, and role-based access as needed.',
      },
    ],
  },
  {
    number: '05',
    slug: 'technical-consulting',
    name: 'Technical Consulting',
    shortDescription:
      'Helping startups and businesses plan, validate, and build software solutions that scale.',
    description:
      'Architecture reviews, AI feasibility, stack choices, and roadmaps so you build the right thing before you build too much.',
    technologies: ['Architecture diagrams', 'Tech audits', 'Roadmapping', 'Vendor selection'],
    workflow: [
      'Stakeholder interviews',
      'Current-state assessment',
      'Recommendations & options',
      'Implementation plan',
    ],
    deliverables: ['Written recommendations', 'Architecture diagrams', 'Prioritized roadmap', 'Optional build sprint'],
    idealClients: ['Early-stage startups', 'Founders pre-hire', 'Teams stuck on architecture'],
    faqs: [
      {
        q: 'Fixed scope or ongoing?',
        a: 'Both—single audits or retained advisory alongside build work.',
      },
    ],
  },
  {
    number: '06',
    slug: 'ai-integrations',
    name: 'AI Integrations',
    shortDescription:
      'Integrating OpenAI, Gemini, Claude, Groq, OpenRouter and custom AI pipelines into existing products.',
    description:
      'Drop AI into products you already ship—search, summarization, generation, classification—without rewriting your stack.',
    technologies: ['OpenAI', 'Gemini', 'Claude', 'Groq', 'OpenRouter', 'Embeddings'],
    workflow: [
      'Identify highest-ROI AI surfaces',
      'Prototype prompts & pipelines',
      'Integrate into product UX',
      'Cost/latency tuning',
    ],
    deliverables: ['Integrated AI features', 'Usage metering', 'Fallback strategies', 'Eval harness'],
    idealClients: ['SaaS products', 'Internal tools', 'Content-heavy platforms'],
    faqs: [
      {
        q: 'Can you work inside our monorepo?',
        a: 'Yes—most AI integration work lands as modules inside existing apps.',
      },
    ],
  },
  {
    number: '07',
    slug: 'mvp-development',
    name: 'MVP Development',
    shortDescription:
      'Rapidly building production-ready MVPs that help startups validate ideas quickly.',
    description:
      'From idea to usable product in weeks—focused scope, clean codebase, and room to grow after validation.',
    technologies: ['Next.js', 'Node.js', 'Postgres', 'Auth', 'Payments (as needed)'],
    workflow: [
      'Scope ruthlessly to core value',
      'Build vertical slice end-to-end',
      'Ship to real users',
      'Iterate on feedback',
    ],
    deliverables: ['Launchable MVP', 'Basic analytics', 'Deployed environment', 'Next-sprint backlog'],
    idealClients: ['Founders validating ideas', 'Small teams needing speed'],
    faqs: [
      {
        q: 'How long for an MVP?',
        a: 'Typically 2–6 weeks depending on scope, integrations, and design needs.',
      },
    ],
  },
]

export const getFeaturedServices = () => SERVICES.filter((s) => s.featured).slice(0, 3)
