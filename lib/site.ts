// Zevyer site content. Edit this file to update copy, services and case studies.

export const COMPANY = {
  name: 'Zevyer',
  tagline: '360° Digital & AI Agency',
  description:
    'Zevyer is a 360° digital agency and AI-automation company. We plan, design, build and grow digital products — AI agents, websites, apps and marketing — under one roof.',
  email: 'iamsadeeqkhan123@gmail.com',
  whatsapp: 'https://wa.link/nksx9o',
  socials: [
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/sadeeqkhan1/' },
    { label: 'Discord', url: 'https://discord.com/users/zevyertech' },
    { label: 'Linktree', url: 'https://linktr.ee/sadeeqkhanhere' },
  ],
} as const

export const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Case Studies', href: '/work' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
] as const

export type ServiceIcon = 'bot' | 'globe' | 'smartphone' | 'megaphone' | 'palette' | 'code'

export type Service = {
  slug: string
  title: string
  short: string
  description: string
  deliverables: string[]
  icon: ServiceIcon
}

export const SERVICES: Service[] = [
  {
    slug: 'ai-agents',
    title: 'AI Agents & Automation',
    short: 'Custom AI agents that handle support, sales and operations around the clock.',
    description:
      'We design and deploy AI agents and automations that take repetitive work off your team — from customer support and lead qualification to CRM updates and reporting.',
    deliverables: ['Customer support & sales agents', 'Workflow & CRM automation', 'Chatbots for web and WhatsApp', 'Analytics and insight dashboards'],
    icon: 'bot',
  },
  {
    slug: 'web-development',
    title: 'Web Development',
    short: 'Fast, secure, scalable websites and web platforms built to convert.',
    description:
      'Marketing sites, platforms and web apps engineered for speed, accessibility and growth — with a polished experience on every screen size.',
    deliverables: ['Company & landing websites', 'Web apps & SaaS platforms', 'E-commerce stores', 'CMS & integrations'],
    icon: 'globe',
  },
  {
    slug: 'app-development',
    title: 'App Development',
    short: 'iOS and Android apps with clean UX, from MVP to scale.',
    description:
      'Mobile products designed around real users and built to ship — from first prototype through launch, analytics and iteration.',
    deliverables: ['iOS & Android apps', 'Cross-platform builds', 'MVPs & prototypes', 'App store launch support'],
    icon: 'smartphone',
  },
  {
    slug: 'digital-marketing',
    title: 'Digital Marketing & Growth',
    short: 'SEO, paid ads, social and content — data-driven and built for ROI.',
    description:
      'Full-funnel campaigns that bring the right people in and turn them into customers, with clear reporting on what is working.',
    deliverables: ['SEO & content strategy', 'Paid ads (Google, Meta)', 'Social media management', 'Lead generation funnels'],
    icon: 'megaphone',
  },
  {
    slug: 'brand-design',
    title: 'Brand & Creative Design',
    short: 'Identity, UI/UX and visuals that make your brand look the part.',
    description:
      'Brand identities, design systems and product interfaces that stay consistent from your logo to your app screens.',
    deliverables: ['Logo & brand identity', 'UI/UX design', 'Design systems', 'Marketing creatives'],
    icon: 'palette',
  },
  {
    slug: 'custom-software',
    title: 'Custom Software',
    short: 'Bespoke tools and enterprise software shaped to how you work.',
    description:
      'When off-the-shelf tools do not fit, we build software around your processes — dashboards, internal tools and integrations.',
    deliverables: ['Internal tools & dashboards', 'API & system integrations', 'Enterprise software', 'Maintenance & support'],
    icon: 'code',
  },
]

export type CaseStudy = {
  slug: string
  title: string
  url: string
  category: string
  year: string
  summary: string
  impact: string
  role: string
  contributions: string[]
  technologies: string[]
  image: string
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: 'the-meta-future',
    title: 'The Meta Future',
    url: 'themetafuture.com',
    category: 'Platform',
    year: '2024',
    summary: 'AI-powered insights platform for future trends and market analysis.',
    impact: 'Delivered insights to 10K+ users across 15 countries',
    role: 'Product lead & creative direction',
    contributions: [
      'Led product strategy from concept to launch',
      'Designed the user experience for complex data visualization',
      'Managed a cross-functional team of 8+ professionals',
      'Implemented an AI recommendation engine',
      'Created the brand identity and visual design system',
    ],
    technologies: ['Next.js', 'AI/ML', 'Design System', 'User Research'],
    image: '/project-metafuture-logo.png',
  },
  {
    slug: 'the-meta-future-ai',
    title: 'The Meta Future AI',
    url: 'themetafuture.ai',
    category: 'SaaS',
    year: '2024',
    summary: 'Advanced AI analytics suite for business intelligence.',
    impact: 'Enabled enterprise clients to increase ROI by 40%',
    role: 'Project management & strategy',
    contributions: [
      'Managed the development timeline and milestone delivery',
      'Conducted competitive analysis and market research',
      'Led stakeholder alignment meetings',
      'Implemented agile workflows and sprint planning',
      'Designed the product roadmap for the next 18 months',
    ],
    technologies: ['Analytics', 'B2B SaaS', 'Project Management'],
    image: '/project-metafuture-logo.png',
  },
  {
    slug: 'what-the-food',
    title: 'What The Food',
    url: 'whatthefood.io',
    category: 'Consumer App',
    year: '2023',
    summary: 'Food discovery and recommendation platform.',
    impact: 'Engaged 50K+ food enthusiasts with curated recommendations',
    role: 'Product management',
    contributions: [
      'Designed the recommendation algorithm and UX flow',
      'Built community features and engagement mechanics',
      'Managed content partnerships with 200+ restaurants',
      'Optimized the conversion funnel, increasing signups by 35%',
      'Led user research interviews and testing',
    ],
    technologies: ['React', 'Mobile', 'Community Building'],
    image: '/project-whatthefood-logo.png',
  },
  {
    slug: 'printrie',
    title: 'Printrie',
    url: 'printrie.com',
    category: 'E-commerce',
    year: '2023',
    summary: 'On-demand printing and personalization platform.',
    impact: 'Processed 100K+ orders generating $2M+ revenue',
    role: 'Project coordination & operations',
    contributions: [
      'Coordinated vendor relationships and the supply chain',
      'Optimized the order fulfillment process',
      'Managed customer support escalations',
      'Implemented quality assurance workflows',
      'Reduced delivery time by 25%',
    ],
    technologies: ['E-commerce', 'Logistics', 'Operations'],
    image: '/project-printrie-logo.png',
  },
  {
    slug: 'envision-galleria',
    title: 'Envision Galleria',
    url: 'envisiongalleria.com',
    category: 'Creative Platform',
    year: '2023',
    summary: 'Digital gallery and artist collaboration platform.',
    impact: 'Showcased work from 500+ artists worldwide',
    role: 'Creative direction',
    contributions: [
      'Curated gallery experiences and exhibitions',
      'Designed artist onboarding and tools',
      'Created the marketing strategy and brand positioning',
      'Organized virtual events attracting 5K+ attendees',
      'Developed community engagement programs',
    ],
    technologies: ['Creative Direction', 'Community', 'Brand Strategy'],
    image: '/project-envision-logo.png',
  },
]

export const STATS = [
  { value: '60+', label: 'Projects delivered' },
  { value: '5', label: 'Countries served' },
  { value: '6', label: 'Service lines' },
  { value: '360°', label: 'End-to-end delivery' },
]

export const PROCESS = [
  { step: '01', title: 'Discover', body: 'We learn your goals, users and market, then agree on scope, timeline and success metrics.' },
  { step: '02', title: 'Design', body: 'Strategy, UX and visual design come together into a clear plan and clickable prototypes.' },
  { step: '03', title: 'Build', body: 'Our team ships in short sprints with regular demos, so you always see real progress.' },
  { step: '04', title: 'Launch & grow', body: 'We launch, measure and keep improving — through marketing, automation and new features.' },
]

export const PRODUCTS = [
  {
    name: 'Lilayn',
    label: 'Virtual AI fitting room',
    body: 'An e-commerce layer that lets shoppers try garments on virtually — building buyer confidence and reducing costly returns.',
    image: '/lilayn-logo.png',
    status: 'Product',
  },
  {
    name: 'Computational biology',
    label: 'Research companion',
    body: 'An AI tool for healthcare and science teams to navigate complex biological datasets for discovery and genetic insight.',
    image: null,
    status: 'In development',
  },
] as const

export const PILLARS = [
  { title: 'Client-centric', body: 'Deep discovery so every engagement maps to your goals, not a generic playbook.' },
  { title: 'AI-driven', body: 'We remove repetitive work, personalize experiences and make data usable day to day.' },
  { title: 'Built to scale', body: 'Architecture and campaigns designed to keep performing as you grow.' },
  { title: 'Always improving', body: 'Tight feedback loops on campaigns, processes and models so results compound.' },
]

export const INDUSTRIES = ['E-commerce', 'Healthcare', 'Technology', 'SaaS', 'Creative', 'Startups & SMEs']
