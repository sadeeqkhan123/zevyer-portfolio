// Zevyer services and sub-services. Edit this file to update service copy,
// images and which case studies appear on each page.

export type ServiceIcon = 'bot' | 'globe' | 'smartphone' | 'megaphone' | 'palette' | 'code'

export type Faq = { q: string; a: string }
export type Point = { title: string; body: string }

export type SubService = {
  slug: string
  title: string
  short: string
  /** Two short paragraphs for the overview. */
  overview: [string, string]
  includes: string[]
  outcomes: Point[]
  tools: string[]
  faqs: Faq[]
  /** Case study slugs from lib/site.ts. Empty → the parent service's work is shown. */
  caseStudies: string[]
  image: string
  imageAlt: string
}

export type Service = {
  slug: string
  title: string
  short: string
  description: string
  /** Kept for the home page and contact form. */
  deliverables: string[]
  icon: ServiceIcon
  image: string
  imageAlt: string
  benefits: Point[]
  process: Point[]
  tools: string[]
  faqs: Faq[]
  subServices: SubService[]
}

const img = (slot: string) => `/services/${slot.replace('/', '--')}.webp`

export const SERVICES: Service[] = [
  /* ------------------------------------------------------------------ */
  {
    slug: 'ai-agents',
    title: 'AI Agents & Automation',
    short: 'Custom AI agents that handle support, sales and operations around the clock.',
    description:
      'We design and deploy AI agents and automations that take repetitive work off your team — from customer support and lead qualification to CRM updates and reporting.',
    deliverables: ['Customer support & sales agents', 'Workflow & CRM automation', 'Chatbots for web and WhatsApp', 'Analytics and insight dashboards'],
    icon: 'bot',
    image: img('ai-agents'),
    imageAlt: 'Robotic hand reaching into a glowing network of connected points',
    benefits: [
      { title: 'Always on', body: 'Agents answer, qualify and route requests 24/7, so customers never wait for office hours.' },
      { title: 'Less manual work', body: 'Copy-paste tasks, data entry and status updates run on their own and stay consistent.' },
      { title: 'Grounded in your data', body: 'Agents read from your documents, CRM and systems — not generic answers from the internet.' },
      { title: 'Human in the loop', body: 'Clear hand-off rules send sensitive or complex cases to your team with full context.' },
    ],
    process: [
      { title: 'Map the work', body: 'We shadow the process, list the repetitive steps and pick the ones with the clearest payoff.' },
      { title: 'Prototype fast', body: 'A working agent on real examples within days, so you can judge the quality early.' },
      { title: 'Integrate & guard', body: 'Connect to your tools, add guardrails, permissions, logging and escalation paths.' },
      { title: 'Measure & tune', body: 'Track resolution, accuracy and time saved, then keep improving prompts and flows.' },
    ],
    tools: ['Claude AI', 'OpenAI', 'LangChain', 'Python', 'Node.js', 'Supabase'],
    faqs: [
      { q: 'Will an AI agent replace my team?', a: 'No. Agents take over repetitive, rules-based work so your team can focus on the conversations and decisions that need a person. Every agent we build has a clear hand-off to a human.' },
      { q: 'Is my data safe?', a: 'We use business-grade AI providers that do not train on your data, keep credentials server-side and only give agents access to the systems they need.' },
      { q: 'Which AI model do you use?', a: 'We choose per task — Claude, OpenAI or open-source models — based on quality, speed, cost and where your data must stay.' },
      { q: 'How long does a first agent take?', a: 'A focused first agent usually goes from kickoff to pilot in two to four weeks, depending on integrations.' },
    ],
    subServices: [
      {
        slug: 'customer-support-agents',
        title: 'Customer Support & Sales Agents',
        short: 'AI agents that answer customers, qualify leads and book meetings — trained on your business.',
        overview: [
          'Your customers ask the same questions every day: pricing, availability, order status, how-to. A support and sales agent answers them instantly in your brand voice, using your own policies, catalogue and help content.',
          'When a conversation needs a person, the agent hands it over with a summary, so your team never starts from zero. For sales, it qualifies leads with your criteria and books calls straight into your calendar.',
        ],
        includes: [
          'Agent trained on your FAQs, policies, products and past tickets',
          'Lead qualification with your own criteria and scoring',
          'Meeting booking and calendar integration',
          'Human hand-off with conversation summary',
          'Multi-language replies',
          'Conversation analytics and quality review',
        ],
        outcomes: [
          { title: 'Instant first response', body: 'Every customer gets an answer in seconds, day or night.' },
          { title: 'Fewer repetitive tickets', body: 'Common questions are resolved before they reach your team.' },
          { title: 'Warmer sales pipeline', body: 'Leads arrive qualified, with their needs already captured.' },
        ],
        tools: ['Claude AI', 'OpenAI', 'Node.js', 'Supabase'],
        faqs: [
          { q: 'Where can the agent live?', a: 'On your website, inside your app, on WhatsApp or in your help desk — or all of them, sharing one brain.' },
          { q: 'What if the agent does not know an answer?', a: 'It says so and passes the conversation to your team instead of guessing. You decide which topics always go to a person.' },
          { q: 'Can it connect to our CRM or help desk?', a: 'Yes. We connect agents to tools like HubSpot, Zoho, Zendesk, Freshdesk or your own systems through their APIs.' },
        ],
        caseStudies: ['turbo', 'gull'],
        image: img('ai-agents/customer-support-agents'),
        imageAlt: 'Support agent with a headset adjusting his microphone at his desk',
      },
      {
        slug: 'workflow-automation',
        title: 'Workflow & CRM Automation',
        short: 'Connect your tools and let routine work — data entry, follow-ups, reports — run on its own.',
        overview: [
          'Most teams lose hours every week moving information between tools: copying leads into the CRM, chasing approvals, building the same report every Monday. We automate those steps end to end.',
          'Where a step needs judgement — reading an email, classifying a document, extracting details from a PDF — we add AI so the workflow can handle real-world, messy input reliably.',
        ],
        includes: [
          'Process mapping and automation opportunity review',
          'CRM automation: lead capture, enrichment, assignment and follow-ups',
          'AI document and email processing',
          'Approval flows and notifications',
          'Scheduled reports and alerts',
          'Monitoring, error alerts and documentation',
        ],
        outcomes: [
          { title: 'Hours back every week', body: 'Routine steps run automatically, without reminders.' },
          { title: 'Cleaner data', body: 'Information is entered once and synced everywhere, the same way every time.' },
          { title: 'Faster turnaround', body: 'Requests move through approvals without waiting in inboxes.' },
        ],
        tools: ['Python', 'Node.js', 'OpenAI', 'Claude AI', 'PostgreSQL'],
        faqs: [
          { q: 'Do you use Zapier or Make, or custom code?', a: 'Both. We use no-code tools when they are the simplest reliable option and custom code when you need more control, volume or security.' },
          { q: 'What happens if an automation fails?', a: 'Every workflow has logging and alerts, so failures are caught and retried or flagged to a person — never silently lost.' },
          { q: 'Can you automate our existing CRM?', a: 'Yes. We work with the CRM you already use rather than forcing a migration.' },
        ],
        caseStudies: ['aver', 'eco-zindagi'],
        image: img('ai-agents/workflow-automation'),
        imageAlt: 'Hand drawing a process flowchart on a whiteboard',
      },
      {
        slug: 'chatbots',
        title: 'Chatbots for Web & WhatsApp',
        short: 'Conversational assistants on your website, app and WhatsApp — text or voice.',
        overview: [
          'Customers want to message you where they already are. We build chat and voice assistants for your website, mobile app and WhatsApp Business that understand natural language and act on it.',
          'Beyond answering questions, a chatbot can take orders, check status, collect details and trigger actions in your systems — turning conversations into completed tasks.',
        ],
        includes: [
          'Website chat widget designed to match your brand',
          'WhatsApp Business API integration',
          'Voice conversations where useful',
          'Actions in your systems: orders, bookings, status checks',
          'Admin view of conversations',
          'Analytics on topics and resolution',
        ],
        outcomes: [
          { title: 'Meet customers where they are', body: 'One assistant across web, app and WhatsApp.' },
          { title: 'Conversations that finish tasks', body: 'Orders, bookings and updates happen inside the chat.' },
          { title: 'Insight into demand', body: 'See what customers ask for most and where they get stuck.' },
        ],
        tools: ['Claude AI', 'OpenAI', 'Next.js', 'Node.js'],
        faqs: [
          { q: 'Do you support WhatsApp?', a: 'Yes, through the official WhatsApp Business Platform, including templates for notifications and follow-ups.' },
          { q: 'Can the chatbot speak?', a: 'Yes. We build voice assistants with natural speech for use cases where talking is faster than typing.' },
          { q: 'Can we edit what it says?', a: 'Yes. Content, tone and rules are editable without a developer for most day-to-day changes.' },
        ],
        caseStudies: ['gull', 'turbo'],
        image: img('ai-agents/chatbots'),
        imageAlt: 'Hands typing a message on a smartphone',
      },
      {
        slug: 'ai-analytics',
        title: 'AI Analytics & Insight Dashboards',
        short: 'Dashboards that turn raw data into clear answers, with AI summaries you can act on.',
        overview: [
          'Data is only useful when people can read it. We bring your numbers together from sales, marketing, operations or devices into dashboards built around the decisions you make.',
          'AI adds a layer on top: plain-language summaries, anomaly alerts and the ability to ask questions of your data without writing queries.',
        ],
        includes: [
          'KPI definition workshop',
          'Data pipelines from your tools, databases and devices',
          'Interactive dashboards for web and mobile',
          'AI summaries and natural-language questions',
          'Anomaly and threshold alerts',
          'Access control by team or role',
        ],
        outcomes: [
          { title: 'One source of truth', body: 'Everyone looks at the same numbers, updated automatically.' },
          { title: 'Faster decisions', body: 'Summaries and alerts surface what changed and why it matters.' },
          { title: 'Less reporting work', body: 'No more building the same spreadsheet by hand every week.' },
        ],
        tools: ['Python', 'PostgreSQL', 'Supabase', 'Next.js', 'Claude AI'],
        faqs: [
          { q: 'Which data sources can you connect?', a: 'Databases, spreadsheets, CRMs, ad platforms, payment providers, IoT devices and most tools with an API or export.' },
          { q: 'Do we need a data warehouse?', a: 'Not always. For many teams a well-structured database is enough; we recommend a warehouse only when volume calls for it.' },
          { q: 'Can AI make mistakes reading our data?', a: 'AI summaries are always linked to the underlying numbers so anyone can verify them, and we test them against known results.' },
        ],
        caseStudies: ['gull', 'eco-zindagi', 'the-meta-future', 'the-meta-future-ai'],
        image: img('ai-agents/ai-analytics'),
        imageAlt: 'Monitor showing bar charts, line graphs and data tables beside a laptop',
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'web-development',
    title: 'Web Development',
    short: 'Fast, secure, scalable websites and web platforms built to convert.',
    description:
      'Marketing sites, platforms and web apps engineered for speed, accessibility and growth — with a polished experience on every screen size.',
    deliverables: ['Company & landing websites', 'Web apps & SaaS platforms', 'E-commerce stores', 'CMS & integrations'],
    icon: 'globe',
    image: img('web-development'),
    imageAlt: 'Developer coding on a laptop in front of three monitors full of code',
    benefits: [
      { title: 'Fast by default', body: 'Modern frameworks, optimized images and clean code for top Core Web Vitals scores.' },
      { title: 'Built to be found', body: 'Technical SEO, structured data and semantic markup from day one.' },
      { title: 'Easy to update', body: 'A content setup your team can edit without calling a developer.' },
      { title: 'Secure & scalable', body: 'Managed hosting, HTTPS, backups and architecture that grows with traffic.' },
    ],
    process: [
      { title: 'Discovery & sitemap', body: 'Goals, audience, content and the pages you need, mapped before any design.' },
      { title: 'Design', body: 'Wireframes, then high-fidelity designs for desktop and mobile that you approve.' },
      { title: 'Development', body: 'Built in sprints on a staging link you can review at any time.' },
      { title: 'Launch & care', body: 'Testing, SEO checks, analytics, go-live and ongoing support.' },
    ],
    tools: ['Next.js', 'React', 'Tailwind CSS', 'Node.js', 'Vercel', 'Stripe'],
    faqs: [
      { q: 'How long does a website take?', a: 'A company website typically takes three to six weeks. Web apps and platforms depend on scope; we agree on a timeline before starting.' },
      { q: 'Will I be able to edit the content myself?', a: 'Yes. We set up a CMS or editable content so your team can update text, images and pages.' },
      { q: 'Do you handle hosting and domains?', a: 'Yes. We can set up and manage hosting, domains, email records and SSL, or work with your existing provider.' },
      { q: 'Is the site mobile-friendly?', a: 'Every site is designed mobile-first and tested on real phones, tablets and desktops.' },
    ],
    subServices: [
      {
        slug: 'business-websites',
        title: 'Company & Landing Websites',
        short: 'Professional websites and landing pages that explain what you do and turn visitors into enquiries.',
        overview: [
          'Your website is often the first conversation with a customer. We build company sites and campaign landing pages that load fast, read clearly and make the next step obvious.',
          'Every page is written and structured around what your visitors need to know — services, proof, pricing or process — with clear calls to action and contact paths, including WhatsApp.',
        ],
        includes: [
          'Sitemap, content structure and copy support',
          'Custom design for desktop, tablet and mobile',
          'Contact, quote and lead forms',
          'Technical SEO and structured data',
          'Analytics and conversion tracking',
          'Editable content for your team',
        ],
        outcomes: [
          { title: 'A credible first impression', body: 'A modern, consistent site that matches the quality of your work.' },
          { title: 'More enquiries', body: 'Clear calls to action and short forms that make contacting you easy.' },
          { title: 'Visible in search', body: 'Pages structured so search engines understand your services.' },
        ],
        tools: ['Next.js', 'React', 'Tailwind CSS', 'Vercel'],
        faqs: [
          { q: 'Can you write the content?', a: 'Yes. We can write or polish your copy so it is clear, consistent and search-friendly.' },
          { q: 'Can you redesign our existing site?', a: 'Yes. We keep what works, migrate your content and set up redirects so you keep your search rankings.' },
          { q: 'Do you build multilingual sites?', a: 'Yes, including right-to-left languages such as Urdu and Arabic.' },
        ],
        caseStudies: ['sartaj-united', 'eminent-enterprises', 'eco-zindagi'],
        image: img('web-development/business-websites'),
        imageAlt: 'Hands on a laptop editing a modern website homepage',
      },
      {
        slug: 'web-apps-saas',
        title: 'Web Apps & SaaS Platforms',
        short: 'Customer portals, dashboards and SaaS products — from MVP to a scalable platform.',
        overview: [
          'When your product lives in the browser, it has to be fast, secure and easy to use. We design and build web applications and SaaS platforms with accounts, roles, payments and the core workflows your users rely on.',
          'We start with the smallest version that proves value, then grow the platform with you — adding features, integrations and scale as your user base grows.',
        ],
        includes: [
          'Product scoping and MVP definition',
          'Authentication, user roles and permissions',
          'Subscriptions and payments',
          'Admin panel and reporting',
          'Installable PWA support',
          'APIs, testing and CI/CD',
        ],
        outcomes: [
          { title: 'Launch sooner', body: 'A focused MVP in users’ hands quickly, so you learn from real usage.' },
          { title: 'Room to grow', body: 'An architecture that scales without a rewrite.' },
          { title: 'Recurring revenue ready', body: 'Billing, plans and trials built in from the start.' },
        ],
        tools: ['Next.js', 'React', 'Node.js', 'PostgreSQL', 'Supabase', 'Stripe'],
        faqs: [
          { q: 'Do I own the code?', a: 'Yes. You own the code, the data and the accounts. Everything is in your repositories.' },
          { q: 'Can you take over an existing app?', a: 'Yes. We start with a code review, fix what is risky and then continue development.' },
          { q: 'What is a PWA?', a: 'A progressive web app installs on phones and desktops like an app, straight from the browser, without the app stores.' },
        ],
        caseStudies: ['aver', 'turbo', 'gull', 'the-meta-future-ai'],
        image: img('web-development/web-apps-saas'),
        imageAlt: 'Laptop showing a web analytics dashboard with live visitor counts',
      },
      {
        slug: 'ecommerce',
        title: 'E-commerce Stores',
        short: 'Online stores and ordering sites with smooth checkout, payments and delivery options.',
        overview: [
          'We build online stores and ordering experiences that make buying easy: clear product pages, fast search, flexible options and a checkout with as few steps as possible.',
          'Behind the scenes we connect payments, inventory, delivery and notifications, so orders flow straight to the people who fulfil them.',
        ],
        includes: [
          'Product catalogue with variants and options',
          'Cart, checkout and online payments',
          'Delivery, pickup and branch selection',
          'Order tracking and customer accounts',
          'Deals, discounts and pre-orders',
          'Store admin and sales reports',
        ],
        outcomes: [
          { title: 'Smoother checkout', body: 'Fewer steps and clear options mean fewer abandoned carts.' },
          { title: 'Orders without phone calls', body: 'Customers order and track on their own, any time.' },
          { title: 'Repeat customers', body: 'Accounts and saved details make the next order faster.' },
        ],
        tools: ['Next.js', 'React', 'Stripe', 'PostgreSQL', 'Vercel'],
        faqs: [
          { q: 'Shopify or custom?', a: 'Shopify is great for standard retail. We build custom when you need special ordering flows, local payment methods or deep integrations.' },
          { q: 'Which payment methods do you support?', a: 'Cards, Stripe, local gateways, bank transfer and cash on delivery — whatever suits your market.' },
          { q: 'Can you connect our inventory system?', a: 'Yes. We sync stock and orders with your existing system or set up a new one.' },
        ],
        caseStudies: ['your-foods', 'eco-zindagi', 'printrie'],
        image: img('web-development/ecommerce'),
        imageAlt: 'Hand holding a credit card above a laptop, paying online',
      },
      {
        slug: 'cms-integrations',
        title: 'CMS & Integrations',
        short: 'Content management your team can use, connected to the tools you already run on.',
        overview: [
          'A great website has to stay up to date. We set up content management so your team can publish pages, blogs, listings and catalogues without touching code.',
          'We also connect your site to the rest of your business — CRM, email marketing, booking, payments, maps and analytics — so data flows where it is needed.',
        ],
        includes: [
          'Headless or traditional CMS setup',
          'Content models for pages, blogs, listings and catalogues',
          'Editor roles and publishing workflow',
          'CRM and email marketing integration',
          'Third-party APIs: maps, booking, payments',
          'Content migration from your old site',
        ],
        outcomes: [
          { title: 'Publish in minutes', body: 'Your team updates content without waiting on developers.' },
          { title: 'Connected systems', body: 'Leads, orders and subscribers land in the right tool automatically.' },
          { title: 'Consistent content', body: 'Structured content keeps every page on-brand.' },
        ],
        tools: ['Next.js', 'Node.js', 'PostgreSQL', 'Firebase'],
        faqs: [
          { q: 'Which CMS do you recommend?', a: 'It depends on your team and content. We work with headless CMSs, WordPress and custom admin panels, and recommend the simplest fit.' },
          { q: 'Can you migrate our existing content?', a: 'Yes, including images, URLs and redirects so nothing breaks.' },
          { q: 'Will editors need training?', a: 'We include a short walkthrough and written guide for your editors.' },
        ],
        caseStudies: ['eminent-enterprises', 'sartaj-united'],
        image: img('web-development/cms-integrations'),
        imageAlt: 'Hands typing on a laptop open to a blog post editor',
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'app-development',
    title: 'App Development',
    short: 'iOS and Android apps with clean UX, from MVP to scale.',
    description:
      'Mobile products designed around real users and built to ship — from first prototype through launch, analytics and iteration.',
    deliverables: ['iOS & Android apps', 'Cross-platform builds', 'MVPs & prototypes', 'App store launch support'],
    icon: 'smartphone',
    image: img('app-development'),
    imageAlt: 'Hand holding a smartphone showing a wallet app, with app screen designs behind',
    benefits: [
      { title: 'One codebase, two stores', body: 'Cross-platform builds reach iOS and Android without doubling the cost.' },
      { title: 'Designed for thumbs', body: 'Interfaces built for one-handed use, real network conditions and real people.' },
      { title: 'Ship, learn, improve', body: 'Analytics and fast release cycles so the app gets better every month.' },
      { title: 'Connected experience', body: 'Apps that work with your website, backend, payments and devices.' },
    ],
    process: [
      { title: 'Define the product', body: 'Users, core journeys and the smallest feature set worth launching.' },
      { title: 'Prototype & test', body: 'Clickable prototypes tested with real users before development starts.' },
      { title: 'Build in sprints', body: 'Regular test builds on your own phone so you see progress every week.' },
      { title: 'Launch & iterate', body: 'Store submission, analytics, crash monitoring and a roadmap for what is next.' },
    ],
    tools: ['React Native & Expo', 'Flutter', 'Firebase', 'Supabase', 'Node.js', 'Figma'],
    faqs: [
      { q: 'Native or cross-platform?', a: 'For most products, cross-platform (React Native or Flutter) gives native-quality apps on both stores from one codebase. We recommend native only when a feature truly needs it.' },
      { q: 'How much does an app cost?', a: 'It depends on features and integrations. After a short discovery we give a fixed scope and estimate, often starting with an MVP.' },
      { q: 'Do you publish to the App Store and Google Play?', a: 'Yes. We prepare listings and handle submission and review for both stores.' },
      { q: 'Do you maintain apps after launch?', a: 'Yes. We offer ongoing updates, OS compatibility fixes, monitoring and new features.' },
    ],
    subServices: [
      {
        slug: 'ios-android',
        title: 'iOS & Android Apps',
        short: 'Polished mobile apps for iPhone and Android with the features your users expect.',
        overview: [
          'We build mobile apps that feel at home on every phone: smooth navigation, fast loading, offline support where it matters and notifications that bring people back.',
          'From sign-in and payments to maps, live tracking and device connections, we handle the full app — including the backend and admin tools behind it.',
        ],
        includes: [
          'UX and UI design for iOS and Android',
          'Accounts and sign-in by phone, email or social',
          'Push notifications and in-app messaging',
          'Payments, wallets and subscriptions',
          'Maps, location and live tracking',
          'Backend API and admin panel',
        ],
        outcomes: [
          { title: 'A daily-use product', body: 'An app customers keep on their home screen.' },
          { title: 'Direct channel to users', body: 'Notifications and accounts let you reach customers directly.' },
          { title: 'Store-ready quality', body: 'Built to pass store review and earn good ratings.' },
        ],
        tools: ['React Native & Expo', 'Flutter', 'Firebase', 'Supabase'],
        faqs: [
          { q: 'Can the app work offline?', a: 'Yes. We design key screens to work offline and sync when the connection returns.' },
          { q: 'Can the app connect to hardware?', a: 'Yes. We have built apps that connect to IoT devices over Bluetooth and the cloud.' },
          { q: 'Will it work on older phones?', a: 'We test on a range of devices and OS versions and agree the minimum supported versions with you.' },
        ],
        caseStudies: ['turbo', 'eminent-enterprises', 'eco-zindagi'],
        image: img('app-development/ios-android'),
        imageAlt: 'Three smartphones from different makers on a wooden table',
      },
      {
        slug: 'cross-platform',
        title: 'Cross-Platform Builds',
        short: 'One codebase for iOS, Android and the web — faster to build, easier to maintain.',
        overview: [
          'Cross-platform frameworks let one team ship to iPhone, Android and the web together. You get consistent features everywhere and roughly half the long-term maintenance.',
          'We pair a shared codebase with platform-specific polish, so each version still feels native — and pair it with a PWA when you also want an installable web app.',
        ],
        includes: [
          'Shared codebase in React Native, Expo or Flutter',
          'Web and PWA version from the same project',
          'One account across every platform',
          'Over-the-air updates for quick fixes',
          'Shared design system across platforms',
          'Automated builds for each store',
        ],
        outcomes: [
          { title: 'Lower cost', body: 'One team and one codebase instead of three.' },
          { title: 'Same features everywhere', body: 'Releases land on every platform at once.' },
          { title: 'Faster fixes', body: 'Over-the-air updates ship small changes without store delays.' },
        ],
        tools: ['React Native & Expo', 'Flutter', 'React', 'Next.js'],
        faqs: [
          { q: 'Is cross-platform slower than native?', a: 'For most business and consumer apps, users cannot tell the difference. We profile performance and drop to native code for any feature that needs it.' },
          { q: 'React Native or Flutter?', a: 'Both are excellent. We usually choose React Native when you also have a React web app, and Flutter for highly custom visual interfaces.' },
          { q: 'Can we add a web version later?', a: 'Yes. With Expo and React Native Web, much of the app can be reused on the web.' },
        ],
        caseStudies: ['turbo'],
        image: img('app-development/cross-platform'),
        imageAlt: 'Laptop, monitor, tablet and smartphone showing the same wallpaper on one desk',
      },
      {
        slug: 'mvp-prototyping',
        title: 'MVPs & Prototypes',
        short: 'Validate your idea quickly with a clickable prototype or a lean first version.',
        overview: [
          'Before investing in a full product, prove the idea. We turn concepts into clickable prototypes for investor and user feedback, then into a lean MVP with only the features that matter most.',
          'You get something real to test in weeks, a clear view of what users actually want and a solid foundation to build on — not a throwaway.',
        ],
        includes: [
          'Product workshop and feature prioritisation',
          'User journeys and wireframes',
          'Clickable high-fidelity prototype',
          'User testing sessions and findings',
          'Lean MVP build with analytics',
          'Roadmap for the next releases',
        ],
        outcomes: [
          { title: 'Answers before big spend', body: 'Learn what works with real users before scaling up.' },
          { title: 'Investor-ready demo', body: 'A working product to show, not just slides.' },
          { title: 'A foundation to grow', body: 'MVP code built to be extended, not rewritten.' },
        ],
        tools: ['Figma', 'React Native & Expo', 'Next.js', 'Supabase'],
        faqs: [
          { q: 'How fast can we have a prototype?', a: 'A clickable prototype usually takes one to two weeks; a lean MVP typically four to eight weeks.' },
          { q: 'What if the idea changes after testing?', a: 'That is the point of an MVP. We plan in short sprints so we can change direction cheaply.' },
          { q: 'Can you help with the product strategy?', a: 'Yes. We help define users, the core problem and what to build first.' },
        ],
        caseStudies: ['gull', 'turbo'],
        image: img('app-development/mvp-prototyping'),
        imageAlt: 'Man sketching a mobile app wireframe on paper',
      },
      {
        slug: 'app-launch',
        title: 'App Store Launch Support',
        short: 'Store listings, submission, review and post-launch monitoring handled end to end.',
        overview: [
          'Getting an app approved and noticed takes more than uploading a build. We prepare store listings, screenshots and privacy details, handle submission and work through any review feedback.',
          'After launch we monitor crashes, reviews and usage, and plan the first updates based on what real users do.',
        ],
        includes: [
          'Developer account setup for Apple and Google',
          'Store listing copy, screenshots and preview assets',
          'Privacy labels and policy requirements',
          'Submission and review management',
          'Crash reporting and analytics setup',
          'Post-launch update plan',
        ],
        outcomes: [
          { title: 'Smooth approval', body: 'Fewer rejections thanks to store guidelines being covered upfront.' },
          { title: 'A stronger listing', body: 'Clear screenshots and copy that explain the app’s value.' },
          { title: 'Confident first weeks', body: 'Monitoring catches issues before most users notice.' },
        ],
        tools: ['React Native & Expo', 'Flutter', 'Firebase'],
        faqs: [
          { q: 'Can you publish an app another team built?', a: 'Yes. We review the build against store guidelines and handle the submission.' },
          { q: 'What if the app is rejected?', a: 'We address the reviewer’s feedback and resubmit. Most issues are resolved within a few days.' },
          { q: 'Do you help with app store optimisation?', a: 'Yes. We research keywords and refine listing copy and visuals to improve discovery.' },
        ],
        caseStudies: ['eminent-enterprises'],
        image: img('app-development/app-launch'),
        imageAlt: 'Team celebrating around a colleague holding a laptop',
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'digital-marketing',
    title: 'Digital Marketing & Growth',
    short: 'SEO, paid ads, social and content — data-driven and built for ROI.',
    description:
      'Full-funnel campaigns that bring the right people in and turn them into customers, with clear reporting on what is working.',
    deliverables: ['SEO & content strategy', 'Paid ads (Google, Meta)', 'Social media management', 'Lead generation funnels'],
    icon: 'megaphone',
    image: img('digital-marketing'),
    imageAlt: 'Team around a table covered in marketing charts, reports and laptops',
    benefits: [
      { title: 'Tied to revenue', body: 'We track leads, sales and cost per acquisition — not just clicks and likes.' },
      { title: 'Full funnel', body: 'Awareness, consideration and conversion planned as one system.' },
      { title: 'Clear reporting', body: 'Simple monthly reports showing spend, results and what we do next.' },
      { title: 'Built with your product', body: 'Marketing and website changes come from the same team, so tests ship fast.' },
    ],
    process: [
      { title: 'Audit & goals', body: 'Review your channels, analytics and competitors; agree on targets.' },
      { title: 'Strategy & setup', body: 'Channel plan, tracking, audiences and creative direction.' },
      { title: 'Launch campaigns', body: 'Content, ads and funnels go live with clear test hypotheses.' },
      { title: 'Optimise & report', body: 'Weekly optimisation and monthly reports on results and next steps.' },
    ],
    tools: ['Figma', 'Next.js', 'OpenAI', 'Claude AI'],
    faqs: [
      { q: 'How soon will we see results?', a: 'Paid campaigns can bring leads within days. SEO and content build over months. We set realistic milestones for each channel.' },
      { q: 'Do you manage our ad budget?', a: 'Ad spend is paid directly by you to the platforms. Our fee covers strategy, creative and management.' },
      { q: 'Which platforms do you work with?', a: 'Google Search and YouTube, Meta (Facebook and Instagram), LinkedIn and TikTok, chosen based on where your customers are.' },
      { q: 'Do you lock us into long contracts?', a: 'No. We work month to month after an initial setup period.' },
    ],
    subServices: [
      {
        slug: 'seo-content',
        title: 'SEO & Content Strategy',
        short: 'Get found on Google with technical SEO and content that answers what customers search for.',
        overview: [
          'Search is where customers look when they are ready to buy. We fix the technical issues that hold your site back, then plan and produce content around the questions your customers actually search for.',
          'We focus on search terms with business value — services, locations and buying questions — and measure progress in rankings, organic traffic and enquiries.',
        ],
        includes: [
          'Technical SEO audit and fixes',
          'Keyword and competitor research',
          'On-page optimisation for key pages',
          'Content calendar, articles and landing pages',
          'Local SEO and Google Business Profile',
          'Monthly ranking and traffic reports',
        ],
        outcomes: [
          { title: 'Compounding traffic', body: 'Content keeps bringing visitors long after it is published.' },
          { title: 'Buyers, not browsers', body: 'Pages target searches made by people ready to act.' },
          { title: 'Lower cost per lead', body: 'Organic leads reduce dependence on paid ads over time.' },
        ],
        tools: ['Next.js', 'OpenAI', 'Claude AI'],
        faqs: [
          { q: 'Can you guarantee first place on Google?', a: 'No one honest can. We commit to best-practice work, transparent reporting and steady improvement on terms that matter to your business.' },
          { q: 'Do you write the content?', a: 'Yes. Our writers produce content with subject input from your team, and every piece is edited by a person.' },
          { q: 'How long does SEO take?', a: 'Technical fixes can help within weeks; content usually shows meaningful results in three to six months.' },
        ],
        caseStudies: [],
        image: img('digital-marketing/seo-content'),
        imageAlt: 'Planner with sticky tabs labelled SEO, SEA and Content beside a laptop',
      },
      {
        slug: 'paid-ads',
        title: 'Paid Ads (Google & Meta)',
        short: 'Search, social and video campaigns managed for leads and sales, not vanity metrics.',
        overview: [
          'Paid ads put you in front of the right people immediately. We plan and run campaigns on Google, Meta and other platforms with tight targeting, strong creative and conversion tracking set up properly.',
          'Every campaign runs with clear tests — audiences, offers, creative — and budget moves to what performs, week by week.',
        ],
        includes: [
          'Campaign strategy and budget planning',
          'Conversion tracking and pixel setup',
          'Ad copy and creative production',
          'Audience building and retargeting',
          'Landing page recommendations',
          'Weekly optimisation and monthly reports',
        ],
        outcomes: [
          { title: 'Leads from day one', body: 'Campaigns start generating enquiries as soon as they launch.' },
          { title: 'Spend that works harder', body: 'Budget shifts to the ads and audiences that convert.' },
          { title: 'Full visibility', body: 'You see cost per lead and return on spend clearly.' },
        ],
        tools: ['Figma', 'OpenAI'],
        faqs: [
          { q: 'What budget do we need?', a: 'It depends on your market and goals. We recommend a starting test budget after the audit and scale what works.' },
          { q: 'Do you create the ad visuals?', a: 'Yes. Our design team produces static, carousel and video creative.' },
          { q: 'Will we own the ad accounts?', a: 'Yes. Accounts are set up in your name and we work in them with access you control.' },
        ],
        caseStudies: [],
        image: img('digital-marketing/paid-ads'),
        imageAlt: 'Laptop showing an analytics dashboard with charts and a heatmap',
      },
      {
        slug: 'social-media',
        title: 'Social Media Management',
        short: 'Consistent, on-brand social content and community management across your channels.',
        overview: [
          'Social media keeps your brand visible and trusted. We plan monthly content, design and write posts, publish on schedule and respond to your community.',
          'Content is built around your goals — launches, offers, events or thought leadership — and reviewed against engagement and reach every month.',
        ],
        includes: [
          'Channel strategy and content pillars',
          'Monthly content calendar',
          'Post design, reels and captions',
          'Scheduling and publishing',
          'Community management',
          'Monthly performance report',
        ],
        outcomes: [
          { title: 'Always active', body: 'A steady presence without your team writing every post.' },
          { title: 'Recognisable brand', body: 'A consistent look and voice across every channel.' },
          { title: 'Engaged audience', body: 'Conversations and comments handled quickly and professionally.' },
        ],
        tools: ['Figma', 'OpenAI', 'Claude AI'],
        faqs: [
          { q: 'Which platforms do you manage?', a: 'Instagram, Facebook, LinkedIn, TikTok and X — we recommend focusing on the two or three where your audience is most active.' },
          { q: 'Do we approve posts first?', a: 'Yes. You review and approve the monthly calendar before anything is published.' },
          { q: 'Can you run events and launches?', a: 'Yes, including virtual events, product launches and promotional campaigns.' },
        ],
        caseStudies: ['envision-galleria'],
        image: img('digital-marketing/social-media'),
        imageAlt: 'Hand holding a smartphone showing a grid of social media posts',
      },
      {
        slug: 'lead-generation',
        title: 'Lead Generation Funnels',
        short: 'Landing pages, offers and follow-ups designed to turn visitors into qualified leads.',
        overview: [
          'A lead generation funnel connects your traffic to your sales team. We design the offer, the landing page, the form and the automated follow-up so interested visitors become real conversations.',
          'We test headlines, forms and offers, and connect everything to your CRM so no lead slips through the cracks.',
        ],
        includes: [
          'Offer and funnel strategy',
          'High-converting landing pages',
          'Lead magnets and quote request flows',
          'Email and WhatsApp follow-up sequences',
          'CRM integration and lead scoring',
          'A/B testing and conversion reporting',
        ],
        outcomes: [
          { title: 'More leads from the same traffic', body: 'Better pages and offers convert more visitors.' },
          { title: 'Faster follow-up', body: 'Automated replies reach leads while they are still interested.' },
          { title: 'Qualified pipeline', body: 'Scoring helps sales focus on the leads most likely to buy.' },
        ],
        tools: ['Next.js', 'Node.js', 'OpenAI'],
        faqs: [
          { q: 'Is this for B2B or B2C?', a: 'Both. B2B funnels focus on quote requests and calls; B2C funnels on sign-ups, bookings and first purchases.' },
          { q: 'Can you connect leads to our CRM?', a: 'Yes. Leads flow into your CRM with source and campaign data attached.' },
          { q: 'Do you combine this with ads?', a: 'Usually, yes. Funnels work best paired with paid ads or SEO to bring in traffic.' },
        ],
        caseStudies: ['what-the-food', 'sartaj-united'],
        image: img('digital-marketing/lead-generation'),
        imageAlt: 'Man presenting sales charts on a large screen to colleagues',
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'brand-design',
    title: 'Brand & Creative Design',
    short: 'Identity, UI/UX and visuals that make your brand look the part.',
    description:
      'Brand identities, design systems and product interfaces that stay consistent from your logo to your app screens.',
    deliverables: ['Logo & brand identity', 'UI/UX design', 'Design systems', 'Marketing creatives'],
    icon: 'palette',
    image: img('brand-design'),
    imageAlt: 'Creative team around a table with laptops and colour samples in a studio',
    benefits: [
      { title: 'Look established', body: 'A professional identity that builds trust before the first conversation.' },
      { title: 'Consistent everywhere', body: 'One visual language across website, app, social and print.' },
      { title: 'Design that works', body: 'Interfaces based on user research and tested before they are built.' },
      { title: 'Ready for developers', body: 'Organised files and components that speed up development.' },
    ],
    process: [
      { title: 'Discovery', body: 'Your story, audience, competitors and what makes you different.' },
      { title: 'Concepts', body: 'Distinct creative directions presented with real-world mockups.' },
      { title: 'Refine', body: 'We develop the chosen direction with your feedback.' },
      { title: 'Deliver', body: 'Final files, guidelines and components ready for every use.' },
    ],
    tools: ['Figma', 'Tailwind CSS', 'React'],
    faqs: [
      { q: 'How many logo concepts do we get?', a: 'Typically two to three distinct directions, then rounds of refinement on the one you choose.' },
      { q: 'Do we get the source files?', a: 'Yes. You receive all final files in the formats you need, plus the editable source files.' },
      { q: 'Can you design for our developers?', a: 'Yes. We deliver developer-ready Figma files — or build the design ourselves.' },
      { q: 'Can you refresh our existing brand?', a: 'Yes. A refresh keeps the recognition you have built while modernising the look.' },
    ],
    subServices: [
      {
        slug: 'brand-identity',
        title: 'Logo & Brand Identity',
        short: 'A distinctive logo and visual identity, with guidelines to keep it consistent.',
        overview: [
          'Your brand is how people remember you. We create logos and identities rooted in your story and audience — with the colours, typography and visual style to carry them everywhere.',
          'Everything comes with clear guidelines, so your team, partners and printers apply the brand correctly every time.',
        ],
        includes: [
          'Brand discovery workshop',
          'Logo concepts and refinement',
          'Colour palette and typography',
          'Brand guidelines document',
          'Business cards, stationery and social templates',
          'Logo files for web, print and social',
        ],
        outcomes: [
          { title: 'Instant recognition', body: 'A memorable mark that sets you apart from competitors.' },
          { title: 'Professional credibility', body: 'A polished identity that matches the quality of your service.' },
          { title: 'Easy to apply', body: 'Guidelines and templates keep everything on-brand.' },
        ],
        tools: ['Figma'],
        faqs: [
          { q: 'How long does a brand identity take?', a: 'Usually three to five weeks from discovery to final files.' },
          { q: 'Do you help with naming?', a: 'Yes. We can run a naming exercise and check basic domain and social handle availability.' },
          { q: 'Who owns the logo?', a: 'You do. Full rights transfer to you on final payment.' },
        ],
        caseStudies: ['the-meta-future', 'envision-galleria'],
        image: img('brand-design/brand-identity'),
        imageAlt: 'Notebook with hand-lettered logo sketches next to colour swatches',
      },
      {
        slug: 'ui-ux-design',
        title: 'UI/UX Design',
        short: 'Clear, attractive interfaces for websites and apps, designed around how people use them.',
        overview: [
          'Good UX makes a product feel effortless. We research how your users think, map their journeys and design interfaces that get them to their goal with less friction.',
          'Designs are prototyped and tested before development, then handed over with every state, screen size and interaction documented.',
        ],
        includes: [
          'User research and journey mapping',
          'Information architecture and wireframes',
          'High-fidelity UI for web and mobile',
          'Interactive prototypes',
          'Usability testing',
          'Developer handoff with specs and assets',
        ],
        outcomes: [
          { title: 'Easier to use', body: 'Fewer support questions and fewer drop-offs.' },
          { title: 'Higher conversion', body: 'Clear flows guide users to sign up, buy or book.' },
          { title: 'Faster development', body: 'Complete designs mean fewer questions during the build.' },
        ],
        tools: ['Figma', 'React', 'Tailwind CSS'],
        faqs: [
          { q: 'Do you redesign existing products?', a: 'Yes. We start with a UX audit to find the biggest issues, then redesign in priority order.' },
          { q: 'Do you test with real users?', a: 'Yes, through moderated sessions and unmoderated tests, depending on budget and timeline.' },
          { q: 'Is accessibility included?', a: 'Yes. We design for readable contrast, clear focus states and screen readers.' },
        ],
        caseStudies: ['turbo', 'your-foods', 'what-the-food', 'the-meta-future'],
        image: img('brand-design/ui-ux-design'),
        imageAlt: 'Designer working on app screen layouts at a desktop monitor',
      },
      {
        slug: 'design-systems',
        title: 'Design Systems',
        short: 'Reusable components and rules that keep every screen consistent and speed up delivery.',
        overview: [
          'As products grow, inconsistencies creep in. A design system gives your team one set of components, tokens and rules — in design and in code — so new screens are faster to make and always on-brand.',
          'We build systems in Figma and as coded components, documented so designers and developers use them the same way.',
        ],
        includes: [
          'Interface audit and inventory',
          'Design tokens: colour, type, spacing, radius',
          'Component library in Figma',
          'Coded React components',
          'Usage guidelines and documentation',
          'Accessibility standards built in',
        ],
        outcomes: [
          { title: 'Consistent product', body: 'Every screen uses the same proven building blocks.' },
          { title: 'Faster delivery', body: 'New features are assembled, not designed from scratch.' },
          { title: 'Easier scaling', body: 'New team members ramp up quickly with clear documentation.' },
        ],
        tools: ['Figma', 'React', 'Tailwind CSS'],
        faqs: [
          { q: 'Do we need a design system?', a: 'If you have more than one product, a growing team or frequent new screens, a design system usually pays for itself quickly.' },
          { q: 'Can you build on our existing components?', a: 'Yes. We start from what you have and standardise it.' },
          { q: 'Which frameworks do you support?', a: 'Primarily React with Tailwind CSS; we can adapt to your stack.' },
        ],
        caseStudies: ['the-meta-future'],
        image: img('brand-design/design-systems'),
        imageAlt: 'Two monitors showing grids of web page layouts and screen designs',
      },
      {
        slug: 'marketing-creatives',
        title: 'Marketing Creatives',
        short: 'Social posts, ads, presentations and print designed to stop the scroll and stay on-brand.',
        overview: [
          'Campaigns live or die on their creative. We design social posts, ad sets, presentations, brochures and event material that grab attention and stay true to your brand.',
          'We work as an on-demand creative team — from single assets to monthly creative support for your marketing calendar.',
        ],
        includes: [
          'Social media posts and stories',
          'Ad creatives in every required size',
          'Short-form video and motion graphics',
          'Pitch decks and presentations',
          'Brochures, flyers and print',
          'Event and exhibition material',
        ],
        outcomes: [
          { title: 'Scroll-stopping content', body: 'Creative designed for attention on busy feeds.' },
          { title: 'On-brand at volume', body: 'Lots of assets, one consistent look.' },
          { title: 'Faster campaigns', body: 'A ready creative team means launches are not held up by design.' },
        ],
        tools: ['Figma'],
        faqs: [
          { q: 'Can we order creatives monthly?', a: 'Yes. Many clients use a monthly creative retainer with a set number of assets.' },
          { q: 'How fast is turnaround?', a: 'Most single assets are delivered in two to three working days.' },
          { q: 'Do you produce video?', a: 'Yes — short-form social video, motion graphics and product animations.' },
        ],
        caseStudies: ['envision-galleria'],
        image: img('brand-design/marketing-creatives'),
        imageAlt: 'Graphic designer working on colourful social media post designs',
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'custom-software',
    title: 'Custom Software',
    short: 'Bespoke tools and enterprise software shaped to how you work.',
    description:
      'When off-the-shelf tools do not fit, we build software around your processes — dashboards, internal tools and integrations.',
    deliverables: ['Internal tools & dashboards', 'API & system integrations', 'Enterprise software', 'Maintenance & support'],
    icon: 'code',
    image: img('custom-software'),
    imageAlt: 'Software developers working at monitors in a bright open office',
    benefits: [
      { title: 'Fits your process', body: 'Software shaped around how your business actually runs, not the other way round.' },
      { title: 'No per-seat surprises', body: 'Own your tools instead of paying growing subscription fees.' },
      { title: 'Systems that talk', body: 'Integrations end the double entry between disconnected tools.' },
      { title: 'Reliable for years', body: 'Tested, documented and monitored, with long-term support.' },
    ],
    process: [
      { title: 'Requirements', body: 'Workshops with the people who will use the software every day.' },
      { title: 'Architecture', body: 'A technical plan for data, security, integrations and hosting.' },
      { title: 'Iterative build', body: 'Working software every sprint, reviewed with your team.' },
      { title: 'Rollout & support', body: 'Data migration, training, go-live and ongoing maintenance.' },
    ],
    tools: ['Python', 'Node.js', 'PostgreSQL', 'Docker', 'Prisma', 'GitHub'],
    faqs: [
      { q: 'When is custom software worth it?', a: 'When off-the-shelf tools force workarounds, when subscription costs grow with your team, or when your process is a competitive advantage.' },
      { q: 'Who owns the software?', a: 'You do — code, data and infrastructure accounts.' },
      { q: 'Can you work with our IT team?', a: 'Yes. We regularly work alongside in-house teams and follow your security and deployment standards.' },
      { q: 'Do you provide documentation?', a: 'Yes. Technical documentation, user guides and handover sessions are part of every project.' },
    ],
    subServices: [
      {
        slug: 'internal-tools',
        title: 'Internal Tools & Dashboards',
        short: 'Admin panels, operations tools and dashboards that replace spreadsheets and manual steps.',
        overview: [
          'Many businesses run on spreadsheets that have outgrown themselves. We turn them into proper internal tools — with forms, permissions, workflows and dashboards — that your team actually enjoys using.',
          'The result is fewer errors, real-time visibility and processes that no longer depend on one person knowing which tab to update.',
        ],
        includes: [
          'Admin panels and back-office tools',
          'Operations and order management',
          'Role-based access and audit logs',
          'Real-time dashboards and KPIs',
          'Spreadsheet and data migration',
          'Exports, reports and notifications',
        ],
        outcomes: [
          { title: 'Fewer errors', body: 'Validated forms replace fragile spreadsheets.' },
          { title: 'Real-time visibility', body: 'Managers see the status of work without asking.' },
          { title: 'Scalable operations', body: 'Processes that keep working as the team grows.' },
        ],
        tools: ['Next.js', 'React', 'PostgreSQL', 'Prisma'],
        faqs: [
          { q: 'Can you start from our spreadsheets?', a: 'Yes. Your spreadsheets are the best specification we can get — we migrate the data and keep what works.' },
          { q: 'Can staff use it on mobile?', a: 'Yes. Internal tools are responsive and can be installed as an app on phones.' },
          { q: 'How secure is it?', a: 'We use proper authentication, role-based permissions, encrypted connections and audit logs.' },
        ],
        caseStudies: ['the-meta-future-ai', 'printrie'],
        image: img('custom-software/internal-tools'),
        imageAlt: 'Tablet showing a Kanban task board in front of monitors with charts',
      },
      {
        slug: 'api-integrations',
        title: 'API & System Integrations',
        short: 'Connect your apps, devices, payments and data so information flows automatically.',
        overview: [
          'Disconnected systems mean double entry, mismatched numbers and slow processes. We connect your software through APIs — CRMs, ERPs, payment gateways, market data feeds, IoT devices and more.',
          'We also build clean APIs for your own products, so partners, apps and future tools can connect to your data safely.',
        ],
        includes: [
          'Integration audit and data flow design',
          'Third-party API integrations',
          'Custom REST and webhook APIs',
          'IoT and device data pipelines',
          'Payment and wallet integrations',
          'Monitoring, retries and error alerts',
        ],
        outcomes: [
          { title: 'Enter data once', body: 'Information syncs automatically between systems.' },
          { title: 'Real-time data', body: 'Live updates instead of nightly exports.' },
          { title: 'Ready for partners', body: 'Clean APIs that others can build on.' },
        ],
        tools: ['Node.js', 'Python', 'Supabase', 'Docker', 'Stripe'],
        faqs: [
          { q: 'What if a system has no API?', a: 'We look for alternatives — exports, database access, webhooks or, as a last resort, careful automation of the interface.' },
          { q: 'How do you keep integrations reliable?', a: 'With retries, queues, logging and alerts, so temporary outages never lose data.' },
          { q: 'Can you integrate hardware devices?', a: 'Yes. We have connected IoT devices to cloud platforms and apps.' },
        ],
        caseStudies: ['gull', 'eco-zindagi', 'turbo'],
        image: img('custom-software/api-integrations'),
        imageAlt: 'Monitor showing Python code that parses JSON data',
      },
      {
        slug: 'enterprise-software',
        title: 'Enterprise Software',
        short: 'Secure, auditable platforms for complex, regulated or high-stakes work.',
        overview: [
          'Some software has to be more than good — it has to be provable. We build platforms for regulated and complex environments with audit trails, versioning, permissions and evidence built in.',
          'Our in-house product Aver, which produces signed, verifiable evidence for clinical bioinformatics labs, reflects how we approach this kind of work.',
        ],
        includes: [
          'Requirements and compliance mapping',
          'Secure architecture and access control',
          'Audit trails and versioned records',
          'Signed reports and evidence exports',
          'Containerised, reproducible deployments',
          'Documentation for auditors and IT',
        ],
        outcomes: [
          { title: 'Audit-ready', body: 'Every change is recorded and traceable.' },
          { title: 'Dependable', body: 'Deterministic, tested software that behaves the same every time.' },
          { title: 'Secure by design', body: 'Least-privilege access and encrypted data throughout.' },
        ],
        tools: ['Python', 'Docker', 'PostgreSQL', 'GitHub'],
        faqs: [
          { q: 'Do you work with regulated industries?', a: 'Yes, including healthcare and life sciences, where traceability and validation matter.' },
          { q: 'Can it run on our own servers?', a: 'Yes. We deliver containerised software that runs in your cloud or on-premises.' },
          { q: 'How do you handle security reviews?', a: 'We provide architecture documentation and work with your security team through their review process.' },
        ],
        caseStudies: ['aver', 'the-meta-future-ai'],
        image: img('custom-software/enterprise-software'),
        imageAlt: 'Employees working at computers on shared desks in an open-plan office',
      },
      {
        slug: 'maintenance-support',
        title: 'Maintenance & Support',
        short: 'Monitoring, updates, fixes and improvements to keep your software healthy.',
        overview: [
          'Software needs care after launch: security patches, dependency updates, bug fixes and small improvements. We keep your website, app or platform secure, fast and up to date.',
          'Support plans include monitoring and agreed response times, plus a monthly block of time for improvements — so your product keeps getting better.',
        ],
        includes: [
          'Uptime and error monitoring',
          'Security patches and dependency updates',
          'Bug fixes with agreed response times',
          'Backups and recovery checks',
          'Performance reviews',
          'Monthly improvement hours',
        ],
        outcomes: [
          { title: 'Peace of mind', body: 'Problems are spotted and fixed before customers notice.' },
          { title: 'Always secure', body: 'Updates applied regularly, not after an incident.' },
          { title: 'Steady improvement', body: 'Small upgrades every month keep the product current.' },
        ],
        tools: ['GitHub', 'Vercel', 'Docker', 'Node.js'],
        faqs: [
          { q: 'Can you support software built by another team?', a: 'Yes. We start with a technical review and a handover, then take over support.' },
          { q: 'What are your response times?', a: 'They depend on the plan; critical issues are prioritised and handled first.' },
          { q: 'Is there a minimum contract?', a: 'Support plans are monthly, with a short notice period.' },
        ],
        caseStudies: [],
        image: img('custom-software/maintenance-support'),
        imageAlt: 'Engineer holding a laptop beside illuminated server racks',
      },
    ],
  },
]

export function getService(slug: string) {
  return SERVICES.find((s) => s.slug === slug)
}

export function getSubService(serviceSlug: string, subSlug: string) {
  const service = getService(serviceSlug)
  const sub = service?.subServices.find((s) => s.slug === subSlug)
  return service && sub ? { service, sub } : undefined
}

/** Unique case study slugs across a service's sub-services, in order. */
export function serviceCaseStudySlugs(service: Service) {
  return [...new Set(service.subServices.flatMap((s) => s.caseStudies))]
}
