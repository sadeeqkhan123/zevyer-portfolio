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
  /** Public site without protocol. Omit for private builds. */
  url?: string
  category: string
  year?: string
  status: 'Live' | 'In progress' | 'Our product' | 'Private build'
  /** What Zevyer built, e.g. ['Website', 'Mobile app']. */
  scope: string[]
  summary: string
  /** Headline result or what the project delivers. */
  impact: string
  role: string
  contributions: string[]
  technologies: string[]
  image: string
  /** 'cover' for full-bleed artwork, 'contain' for a logo on a coloured panel. */
  imageFit?: 'cover' | 'contain'
  imageBg?: string
  featured?: boolean
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: 'eco-zindagi',
    title: 'Eco Zindagi',
    url: 'ecozindagi.com',
    category: 'Clean-tech & IoT',
    status: 'Live',
    scope: ['Website', 'Device tech', 'AI integration', 'Mobile app'],
    summary:
      'Pakistan’s clean-tech startup building smart bins and indoor composting devices like the EcoBuck for homes, housing societies, campuses and cities.',
    impact: 'One connected platform: website, smart-device technology, AI data reading and a companion app',
    role: 'Website, device technology, AI integrations & app',
    contributions: [
      'Designed and built the website with shop, pre-booking and cart',
      'Developed the technology solution behind the EcoBuck smart composting device',
      'Integrated AI to read and interpret data coming from the device',
      'Built the companion app that connects users to their device',
      'Created B2B pages for housing societies, campuses and city pilots',
    ],
    technologies: ['IoT', 'AI integration', 'Mobile app', 'E-commerce'],
    image: '/work/eco-zindagi.png',
    imageFit: 'contain',
    imageBg: 'linear-gradient(140deg,#f2fbf3,#e3f5e6)',
    featured: true,
  },
  {
    slug: 'turbo',
    title: 'Turbo',
    url: 'turbo-mobile.expo.app',
    category: 'Mobility',
    status: 'In progress',
    scope: ['Mobile app', 'PWA website'],
    summary:
      'A ride-hailing product for Lagos: book rides, track your driver live, pay from the Turbo Vault wallet and talk to Turbo AI.',
    impact: 'One Turbo account across an installable web app (PWA) and native mobile app',
    role: 'Product design & cross-platform development',
    contributions: [
      'Ride booking with live driver tracking',
      'Turbo Vault in-app wallet for payments',
      'Turbo AI assistant built into the experience',
      'Installable PWA for desktop and mobile web',
      'Single sign-in by phone or email across every platform',
    ],
    technologies: ['Expo', 'React Native', 'PWA', 'AI assistant'],
    image: '/work/turbo.png',
    imageFit: 'contain',
    imageBg: 'radial-gradient(circle at 50% 40%,#1c1d22,#0b0b0d)',
    featured: true,
  },
  {
    slug: 'aver',
    title: 'Aver',
    url: 'aver.bio',
    category: 'HealthTech SaaS',
    status: 'Our product',
    scope: ['SaaS platform', 'Open-source CLI'],
    summary:
      'Continuous validation for clinical bioinformatics pipelines. Aver benchmarks pipelines against public reference materials, flags changes that move the numbers and signs the evidence.',
    impact: 'Signed, deterministic evidence packs a lab inspector can verify',
    role: 'Zevyer product — built and run in-house',
    contributions: [
      'Benchmarks against GIAB and SEQC2 truth sets with hap.py, vcfeval and som.py',
      'Fingerprints every tool, container digest, parameter and reference',
      'Detects drift and grades it from Informational to Critical with versioned rules',
      'Produces signed evidence packs with a hash-chained audit history',
      'Ships a free, open-source CLI: pip install aver-bio',
    ],
    technologies: ['Python', 'Nextflow', 'nf-core', 'Snakemake', 'Docker'],
    image: '/work/aver.png',
    imageFit: 'contain',
    imageBg: 'linear-gradient(140deg,#f6fafa,#e6f0f0)',
    featured: true,
  },
  {
    slug: 'gull',
    title: 'Gull',
    category: 'AI Assistant',
    status: 'Private build',
    scope: ['Voice AI web app'],
    summary:
      'A voice “second brain” for a BTC/USDT spot trading desk. You talk to a glowing eye; it answers out loud in trading language and opens charts, analysis and news on screen.',
    impact: 'Full market read, news check and trade plan — on voice command',
    role: 'Concept, AI engineering & full-stack build',
    contributions: [
      'Wake-word voice conversation with a natural in-browser neural voice',
      'Live price, order book and Fear & Greed data from public market feeds',
      'AI market analysis and news scanning with bull/base/bear scenarios',
      'Trade plans with entry, stop, targets, size and rule-enforced WAIT signals',
      'Per-user sign-in with journal and settings synced across devices',
    ],
    technologies: ['Claude AI', 'Kokoro TTS', 'Supabase', 'Vercel'],
    image: '/work/gull.svg',
    imageFit: 'cover',
  },
  {
    slug: 'eminent-enterprises',
    title: 'Eminent Enterprises',
    url: 'eminentpak.com',
    category: 'Real Estate',
    status: 'In progress',
    scope: ['Website', 'Mobile app'],
    summary:
      'Real estate advisory and property services across Islamabad and Rawalpindi, with construction through its sister brand Buraq Eminent Constructors.',
    impact: 'Property search, construction portfolio and an upcoming mobile app in one brand',
    role: 'Website & app design and development',
    contributions: [
      'Property search for buying, renting and new projects',
      'Construction portfolio for Buraq Eminent Constructors',
      'Area guides, insights blog, calculators and shortlist/compare tools',
      'Overseas Pakistanis hub for remote buyers',
      'The Eminent App for Android, coming to Google Play',
    ],
    technologies: ['Next.js', 'Mobile app', 'Real-estate listings'],
    image: '/work/eminent.png',
    imageFit: 'contain',
    imageBg: 'linear-gradient(140deg,#f4f3ff,#e9e7fb)',
  },
  {
    slug: 'your-foods',
    title: 'Your Foods',
    url: 'yourfoods.com.pk',
    category: 'Food & Delivery',
    status: 'Live',
    scope: ['Ordering website'],
    summary: 'Online ordering for a pizza, burger and shakes brand delivering in Islamabad.',
    impact: 'Order in under a minute — delivery or pickup, with live order tracking',
    role: 'Website design & development',
    contributions: [
      'Full menu with size, spice, drink and extra customisation',
      'Deals with built-in flavour pickers',
      'Delivery or pickup with branch selection',
      'Cart, checkout and order tracking',
      'Customer sign-in for faster repeat orders',
    ],
    technologies: ['Web app', 'E-commerce', 'UI/UX'],
    image: '/work/yourfoods.png',
    imageFit: 'contain',
    imageBg: '#ffffff',
  },
  {
    slug: 'sartaj-united',
    title: 'Sartaj United',
    url: 'sartajunited.com',
    category: 'Trading & Logistics',
    status: 'Live',
    scope: ['Corporate website'],
    summary:
      'A Kabul-based trading company supplying DAP and urea fertilizer and staple food commodities to NGOs, UN agencies and agribusinesses.',
    impact: 'A B2B site built around quotes for NGOs and procurement teams',
    role: 'Website design & development',
    contributions: [
      'Product catalogue with fertilizer grades and food items',
      'Dedicated page for NGOs and UN agencies',
      'Five-step “how we work” process from request to handover',
      'Quote request flow and downloadable company profile',
      'WhatsApp, phone and email contact paths',
    ],
    technologies: ['Web development', 'B2B', 'Content'],
    image: '/work/sartaj-united.png',
    imageFit: 'contain',
    imageBg: 'linear-gradient(140deg,#fff7f5,#fdecea)',
  },
  {
    slug: 'the-meta-future',
    title: 'The Meta Future',
    url: 'themetafuture.com',
    category: 'Platform',
    year: '2024',
    status: 'Live',
    scope: ['Platform', 'Brand identity'],
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
    status: 'Live',
    scope: ['SaaS', 'Delivery management'],
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
    status: 'Live',
    scope: ['Consumer app', 'Product management'],
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
    status: 'Live',
    scope: ['E-commerce', 'Operations'],
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
    status: 'Live',
    scope: ['Creative platform', 'Brand strategy'],
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

export type Product = {
  name: string
  label: string
  body: string
  image: string
  imageClass: string
  status: string
  href?: string
}

export const PRODUCTS: Product[] = [
  {
    name: 'Lilayn',
    label: 'Virtual AI fitting room',
    body: 'An e-commerce layer that lets shoppers try garments on virtually — building buyer confidence and reducing costly returns.',
    image: '/lilayn-logo.png',
    imageClass: 'h-12 w-auto',
    status: 'Product',
  },
  {
    name: 'Aver',
    label: 'Continuous validation for clinical bioinformatics',
    body: 'Benchmarks clinical pipelines against public reference materials, flags any change that moves the numbers and produces signed evidence an inspector can verify.',
    image: '/work/aver-mark.png',
    imageClass: 'h-9 w-auto',
    status: 'Live',
    href: '/work/aver',
  },
]

/** Logos are the projects' own GitHub organisation avatars (github.com/<org>.png). */
export const TECH_STACK = [
  { name: 'Next.js', logo: '/tech/nextjs.png' },
  { name: 'React', logo: '/tech/reactjs.png' },
  { name: 'React Native & Expo', logo: '/tech/expo.png' },
  { name: 'Node.js', logo: '/tech/nodejs.png' },
  { name: 'Python', logo: '/tech/python.png' },
  { name: 'Tailwind CSS', logo: '/tech/tailwindlabs.png' },
  { name: 'Claude AI', logo: '/tech/anthropics.png' },
  { name: 'OpenAI', logo: '/tech/openai.png' },
  { name: 'LangChain', logo: '/tech/langchain-ai.png' },
  { name: 'Supabase', logo: '/tech/supabase.png' },
  { name: 'PostgreSQL', logo: '/tech/postgres.png' },
  { name: 'MongoDB', logo: '/tech/mongodb.png' },
  { name: 'Firebase', logo: '/tech/firebase.png' },
  { name: 'Prisma', logo: '/tech/prisma.png' },
  { name: 'Docker', logo: '/tech/docker.png' },
  { name: 'Vercel', logo: '/tech/vercel.png' },
  { name: 'Stripe', logo: '/tech/stripe.png' },
  { name: 'Flutter', logo: '/tech/flutter.png' },
  { name: 'Figma', logo: '/tech/figma.png' },
  { name: 'Motion', logo: '/tech/motiondivision.png' },
  { name: 'GitHub', logo: '/tech/github.png' },
]

export const PILLARS = [
  { title: 'Client-centric', body: 'Deep discovery so every engagement maps to your goals, not a generic playbook.' },
  { title: 'AI-driven', body: 'We remove repetitive work, personalize experiences and make data usable day to day.' },
  { title: 'Built to scale', body: 'Architecture and campaigns designed to keep performing as you grow.' },
  { title: 'Always improving', body: 'Tight feedback loops on campaigns, processes and models so results compound.' },
]

export const INDUSTRIES = [
  'Clean-tech & IoT',
  'Mobility',
  'HealthTech',
  'FinTech & Trading',
  'Real Estate',
  'Food & Delivery',
  'Trading & Logistics',
  'E-commerce',
  'SaaS',
]
