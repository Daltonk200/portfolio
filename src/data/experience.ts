export interface ExperienceItem {
  id: string
  type: 'work' | 'freelance' | 'milestone'
  title: string
  org: string
  period: string
  location?: string
  summary: string
  responsibilities: string[]
  achievements: string[]
}

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: 'freelance-ai',
    type: 'freelance',
    title: 'AI & Full-Stack Engineer',
    org: 'Independent / Client work',
    period: '2022 — Present',
    location: 'Remote',
    summary:
      'Building AI products, automations, and full-stack apps for startups and growing businesses.',
    responsibilities: [
      'Design and ship web apps with React/Next.js and Node backends',
      'Build AI agents and LLM integrations for real workflows',
      'Automate ops pipelines with n8n and custom services',
      'Advise founders on architecture and MVP scope',
    ],
    achievements: [
      'Delivered multi-channel AI agents used in production messaging',
      'Shipped SaaS outreach tooling with automation at the core',
      'Helped startups go from idea to usable MVP in weeks',
    ],
  },
  {
    id: 'nextise',
    type: 'work',
    title: 'Lead Builder — Outreach Platform',
    org: 'Nextise',
    period: '2024 — 2025',
    summary:
      'Core engineering for an AI-assisted outreach SaaS: sequencing, personalization, and integrations.',
    responsibilities: [
      'Owned key product surfaces and API design',
      'Integrated LLM-assisted copy and lead workflows',
      'Improved reliability of sync jobs and webhooks',
    ],
    achievements: [
      'Reduced manual outreach steps for early users',
      'Established patterns for safe AI-assisted messaging',
    ],
  },
  {
    id: 'restaurant',
    type: 'milestone',
    title: 'Smart Restaurant Ordering Platform',
    org: 'Startup build',
    period: '2023 — 2024',
    summary:
      'End-to-end ordering experience connecting menus, kitchen flow, and customer channels.',
    responsibilities: [
      'Full-stack implementation of ordering and admin flows',
      'Realtime-ish status updates and order tracking',
    ],
    achievements: [
      'Validated ordering UX with real restaurant workflows',
      'Laid groundwork for multi-location expansion',
    ],
  },
  {
    id: 'prepstudio',
    type: 'milestone',
    title: 'PrepStudio AI Interview Coach',
    org: 'Personal / Product experiment',
    period: '2024',
    summary:
      'AI coach that simulates interviews, scores answers, and guides improvement loops.',
    responsibilities: [
      'Conversation design and scoring rubrics',
      'Session history and feedback UX',
    ],
    achievements: [
      'Demonstrated structured AI feedback beyond chat wrappers',
    ],
  },
  {
    id: 'foundation',
    type: 'work',
    title: 'Software Engineer',
    org: 'Earlier roles & projects',
    period: '2019 — 2022',
    summary:
      'Built foundations in web development, APIs, and product-minded engineering.',
    responsibilities: [
      'Feature delivery across frontend and backend',
      'Collaboration with designers and stakeholders',
    ],
    achievements: [
      'Grew from feature contributor to owning product slices end-to-end',
    ],
  },
]
