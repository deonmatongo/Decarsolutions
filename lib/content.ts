import type { FigureKind } from "@/components/GenerativeFigure";

export const navLinks: {
  href: string;
  label: string;
  hasMenu?: boolean;
}[] = [
  { href: "/services", label: "Services" },
  { href: "/industries", label: "Industries" },
  { href: "/work", label: "Case Studies" },
  { href: "/about", label: "About us" },
  { href: "/pricing", label: "Pricing" },
  { href: "/blog", label: "Blog" },
];

// PLACEHOLDER — swap in real client names once you have permission to use
// them. Never list a company here that is not actually a Decar client.
export const clientLogos = [
  "Client One",
  "Client Two",
  "Client Three",
  "Client Four",
  "Client Five",
  "Client Six",
  "Client Seven",
  "Client Eight",
];

export const valueStatement = {
  heading:
    "Our teams work in an agile rhythm that puts your commercial goals first and delivers the highest business value",
  paragraphs: [
    "We build custom mobile and web software on modern technology. Our in-house engineers don't just write high-quality code — they propose the technical approach that actually solves the business problem in front of you.",
    "We take human-centred design seriously and build on best-practice engineering. Our business runs on trust, so we aim to deliver value at every stage of the software lifecycle, not just at handover.",
  ],
};

export type Service = {
  id: string;
  figure: FigureKind;
  title: string;
  body: string;
};

export const services: Service[] = [
  {
    id: "discovery",
    figure: "torus",
    title: "Product Discovery",
    body: "Building the right thing starts with understanding the problem deeply and working out where the value actually lands for users",
  },
  {
    id: "design",
    figure: "burst",
    title: "Product Design",
    body: "UX and UI work that turns the brief into intuitive, engaging interfaces built around the features that carry the product",
  },
  {
    id: "development",
    figure: "globe",
    title: "Development",
    body: "Our engineers deliver iOS and Android apps, web apps, back-end development and the custom software in between",
  },
  {
    id: "support",
    figure: "barrel",
    title: "Support",
    body: "We stay on after launch with help-desk style support, so your application keeps running at its best",
  },
];

// Extended copy for the dedicated /services page — one entry per service id
// above, with the detail that doesn't fit the homepage teaser card.
export const serviceDetails: Record<
  string,
  { summary: string; deliverables: string[]; stack: string[] }
> = {
  discovery: {
    summary:
      "Before anything gets built, we get specific about the problem: who it's for, what they're doing today instead, and which constraint — budget, timeline, technical debt, internal buy-in — actually shapes the solution. You leave discovery with a scoped plan, not a deck full of possibilities.",
    deliverables: [
      "Stakeholder and user interviews",
      "Competitive and technical landscape review",
      "Scoped roadmap with effort estimates",
      "Risk and dependency map",
    ],
    stack: ["Figma", "Miro", "Notion", "Linear"],
  },
  design: {
    summary:
      "We design the interface around the handful of tasks that actually carry the product, then test that it holds up with real users before a single screen is polished. Visual design comes last, once the flows already work.",
    deliverables: [
      "User flows and information architecture",
      "Low-fidelity prototypes for early testing",
      "High-fidelity UI and a living design system",
      "Handoff specs engineers can build straight from",
    ],
    stack: ["Figma", "Framer", "Storybook"],
  },
  development: {
    summary:
      "Our engineers build the product on a stack chosen for the problem in front of us, not our house favourite. That means native or cross-platform mobile, web apps, and the back-end and APIs that hold it all together — with code review, tests and CI from the first commit.",
    deliverables: [
      "iOS, Android and cross-platform mobile apps",
      "Web applications and marketing sites",
      "APIs, back-end services and data pipelines",
      "CI/CD, code review and automated testing from day one",
    ],
    stack: ["TypeScript", "React & Next.js", "Swift & Kotlin", "Node.js", "PostgreSQL", "AWS / GCP"],
  },
  support: {
    summary:
      "Launch is the start of the software's life, not the end of the project. We stay on with help-desk style support, monitoring, and a maintenance retainer, so issues get caught before your users notice them and the roadmap keeps moving instead of stalling at v1.",
    deliverables: [
      "Uptime and error monitoring with alerting",
      "Bug triage and fix SLAs",
      "Dependency and security patching",
      "Ongoing feature development on a retainer",
    ],
    stack: ["Sentry", "Datadog", "GitHub Actions", "PagerDuty"],
  },
};

export const tailoredSolutions: Service[] = [
  {
    id: "managed",
    figure: "globe",
    title: "Managed teams",
    body: "Looking for a team that will deliver the whole thing? Ours takes your idea through discovery, design, build and launch, and owns the outcome end to end.",
  },
  {
    id: "augmentation",
    figure: "barrel",
    title: "Staff augmentation",
    body: "Need people who slot into the team you already have? Our engineers join your squad, pick up the work, and take the load off the people carrying it now.",
  },
];

export type Audience = "corporation" | "startup";

export const benefits: Record<Audience, { title: string; body: string }[]> = {
  corporation: [
    {
      title: "Expertise",
      body: "The combined experience on your project goes well beyond what any one person accumulates in a career.",
    },
    {
      title: "Transparency",
      body: "You are kept up to date at every step. Business runs on trust, and trust runs on knowing where things stand.",
    },
    {
      title: "Governance that fits",
      body: "We work inside your procurement, security and compliance processes rather than around them.",
    },
    {
      title: "Time is crucial",
      body: "You save the resource you can never buy back. Optimisation is second nature to how we plan a build.",
    },
  ],
  startup: [
    {
      title: "Expertise",
      body: "You get senior people from day one, not a team you have to train before it produces anything.",
    },
    {
      title: "Transparency",
      body: "Fixed milestones and weekly demos, so your runway is never spent guessing at progress.",
    },
    {
      title: "Unique approach",
      body: "We want to understand you and your market. Templates are cheap; the right product decision is not.",
    },
    {
      title: "Speed to market",
      body: "We cut scope to what proves the idea, ship it, and build the rest once the market has answered.",
    },
  ],
};

export const processSteps = [
  {
    num: "01",
    title: "Discover",
    body: "We learn your business, your users, and the constraint that actually matters most.",
  },
  {
    num: "02",
    title: "Design",
    body: "Wireframes and prototypes so you see the product before a line of code is written.",
  },
  {
    num: "03",
    title: "Build",
    body: "Agile sprints, weekly demos, and a backlog you can see and reprioritize anytime.",
  },
  {
    num: "04",
    title: "Automate",
    body: "We wire up the workflows and integrations so the system runs itself where it can.",
  },
  {
    num: "05",
    title: "Support & scale",
    body: "Launch day is the start, not the finish. We stay on to monitor, fix, and grow it.",
  },
];

// PLACEHOLDER — illustrative projects, not real client work. Swap for real
// case studies as they land; keep the same shape (challenge, approach,
// result) so /work/[slug] keeps working.
export const workItems = [
  {
    slug: "warehouse-inventory-platform",
    tags: ["Web", "Automation"],
    title: "Warehouse Inventory Platform",
    body: "A real-time dashboard syncing stock levels across a dozen locations, replacing a spreadsheet three people updated by hand.",
    client: "Logistics operator, 12 sites",
    challenge:
      "Stock counts lived in a shared spreadsheet three people updated by hand. Numbers drifted out of sync within a day, and nobody could tell which site's figures to trust when a customer called about an order.",
    approach:
      "We shipped a real-time inventory dashboard that pulled stock movements directly from each site's scanner hardware, replacing the manual entry step entirely. Discrepancies now raise a flag automatically instead of surfacing as a customer complaint weeks later.",
    result:
      "Stock discrepancies dropped to near zero within the first month, and the ops team stopped spending their Monday mornings reconciling numbers by hand.",
    stack: ["Next.js", "PostgreSQL", "WebSockets", "AWS"],
  },
  {
    slug: "personal-finance-coach-app",
    tags: ["Mobile", "AI"],
    title: "Personal Finance Coach App",
    body: "An iOS/Android app with an AI coach that flags risky spending patterns before they become a real problem.",
    client: "Consumer fintech startup",
    challenge:
      "Budgeting apps that just show a pie chart of last month's spending arrive too late to change anything. The founders wanted something that caught a risky pattern while it was still forming.",
    approach:
      "We built a cross-platform app with an AI layer that watches spending velocity, not just totals, and nudges the user before a pattern becomes a shortfall — plain-language, not a wall of graphs.",
    result:
      "Beta users opened the app nearly daily rather than once a month, and the team used that engagement data to close a seed round.",
    stack: ["React Native", "Node.js", "Plaid", "OpenAI API"],
  },
  {
    slug: "support-deflection-system",
    tags: ["AI", "Automation"],
    title: "Support Deflection System",
    body: "A chatbot wired into the ticketing workflow, resolving the majority of Tier-1 requests without a human touch.",
    client: "B2B SaaS, mid-market",
    challenge:
      "Tier-1 tickets — password resets, plan questions, status lookups — were burying the two-person support team and pushing first-response times past a day.",
    approach:
      "We wired a chatbot directly into the existing ticketing workflow so it could actually take action — reset a password, pull an order status — rather than just answer questions, and handed off to a human cleanly when it couldn't.",
    result:
      "The bot now resolves the majority of Tier-1 tickets without a human touch, and first-response time for the tickets that do reach a person dropped from a day to under an hour.",
    stack: ["Python", "OpenAI API", "Zendesk API", "Redis"],
  },
];

export type WorkItem = (typeof workItems)[number];

export const team = {
  heading: "Decar is a software house powered by people",
  body: "Meet the strategists, designers and engineers who turn ideas into products people actually use. From discovery and design through development and long-term support, we build solutions that fit your business objectives rather than our preferred stack. The range of problems this team has already solved is what lets us reach the right answer for yours faster.",
};

// PLACEHOLDER — illustrative figures for a growing studio. Replace with real
// numbers once you have them to stand behind.
export const aboutStats = [
  { num: "30+", label: "Projects shipped" },
  { num: "12", label: "Industries served" },
  { num: "6 wks", label: "Median MVP timeline" },
  { num: "92%", label: "Clients who extend the engagement" },
];

export const aboutValues = [
  {
    title: "Senior by default",
    body: "Every engagement is staffed with people who've shipped this kind of problem before, not people learning on your project.",
  },
  {
    title: "One process, not a pitch deck",
    body: "Discovery, design, build, support — the same process for a startup MVP and an enterprise integration, scaled to fit.",
  },
  {
    title: "Direct communication",
    body: "You talk to the people building the thing. No account layer translating your feedback into a ticket a week later.",
  },
  {
    title: "We own the outcome",
    body: "A finished feature that doesn't solve the problem isn't finished. We measure the project against your goal, not the ticket count.",
  },
];

export const careers = {
  heading: "We're always open to hearing from good people",
  body: "We don't run a standing careers board — headcount grows around the work we've actually won. If you're a designer, engineer or delivery lead who wants to work this way, send us what you've built and we'll keep you in mind for the next opening that fits.",
  ctaLabel: "Introduce yourself",
};

export const faqs = [
  {
    q: "What is a software house?",
    a: "A software house provides a full development team — designers, engineers, QA and delivery — that builds custom software for other businesses. Instead of hiring and managing those specialists yourself, you engage a team that already works together.",
  },
  {
    q: "Why choose custom software over an off-the-shelf product?",
    a: "Off-the-shelf tools solve the average version of a problem. Custom software is shaped around the specific constraint your business actually has, and it can build on the internal expertise and data you already hold — which no vendor product can replicate.",
  },
  {
    q: "How long does a typical project take?",
    a: "Most MVPs ship in 6–10 weeks; larger platforms and multi-service builds run longer. You'll get a real timeline after discovery, not a guess.",
  },
  {
    q: "Do you work fixed price or on a retainer?",
    a: "Both — fixed-scope projects get a fixed quote; ongoing or evolving work runs on a retainer. We'll recommend whichever genuinely fits your project rather than whichever suits us.",
  },
  {
    q: "How does the team work day to day?",
    a: "Engineers, designers, QA and a delivery lead work as one team on your project. We run in iterative cycles with sprint planning, weekly demos and a backlog you can see and reprioritise, so the plan adapts as what you learn changes it.",
  },
  {
    q: "What does the development process look like?",
    a: "Discovery to understand the problem, design to get the experience right, then build, test and deploy in iterations. Each stage ends with something you can look at and react to, rather than a status report.",
  },
  {
    q: "Can you build on top of tools we already use?",
    a: "Yes — most of our automation work connects to your existing CRM, e-commerce platform or ops tools rather than replacing them. Replacing a working system is the expensive option and rarely the right one.",
  },
  {
    q: "What services does Decar offer?",
    a: "Product discovery and UX/UI design; mobile development for iOS and Android, native or cross-platform; web applications and marketing sites; back-end and API work; AI features where they genuinely earn their place; and the automation that connects it all together.",
  },
  {
    q: "What happens after launch?",
    a: "Every project includes a support window post-launch, and ongoing maintenance and growth retainers are available after that. We stay on to monitor, fix and keep improving what we built.",
  },
];

export type Industry = {
  slug: string;
  title: string;
  summary: string;
  points: string[];
};

export const industries: Industry[] = [
  {
    slug: "retail-ecommerce",
    title: "Retail & e-commerce",
    summary:
      "Storefronts, inventory and fulfilment systems that hold up during a launch or a sale spike, not just on a quiet Tuesday.",
    points: [
      "Headless storefronts and checkout integrations",
      "Inventory and order-management systems",
      "Personalisation and recommendation features",
    ],
  },
  {
    slug: "fintech-insurance",
    title: "Fintech & insurance",
    summary:
      "Products that move money or underwrite risk, built with the audit trail, security review and edge-case handling that space demands.",
    points: [
      "KYC/AML-aware onboarding flows",
      "Payments, ledgers and reconciliation",
      "Dashboards for risk and compliance teams",
    ],
  },
  {
    slug: "healthcare",
    title: "Healthcare",
    summary:
      "Patient-facing and clinical tools designed around real care workflows, with the data handling that regulated environments require.",
    points: [
      "Patient portals and appointment scheduling",
      "Clinical workflow and records tooling",
      "Integrations with existing practice-management systems",
    ],
  },
  {
    slug: "logistics-supply-chain",
    title: "Logistics & supply chain",
    summary:
      "Visibility across warehouses, fleets and vendors — replacing the spreadsheet-and-phone-call process most operators still run on.",
    points: [
      "Real-time inventory and fleet dashboards",
      "Route and warehouse-slotting optimisation",
      "EDI and vendor-system integrations",
    ],
  },
  {
    slug: "professional-services",
    title: "Professional services",
    summary:
      "Internal tools and client-facing portals that cut the manual admin out of billing, reporting and case management.",
    points: [
      "Client portals and self-service reporting",
      "Billing, time-tracking and invoicing tools",
      "Document and case-management workflows",
    ],
  },
  {
    slug: "manufacturing",
    title: "Manufacturing",
    summary:
      "Shop-floor and back-office software that connects machine data to the planning decisions people are actually making.",
    points: [
      "Production and quality-tracking dashboards",
      "Predictive maintenance from machine data",
      "ERP and MES integrations",
    ],
  },
];

export type PricingPlan = {
  id: string;
  name: string;
  tagline: string;
  price: string;
  cadence: string;
  bestFor: string;
  bullets: string[];
  featured?: boolean;
};

// Indicative starting points, not fixed quotes — every engagement gets a
// firm number after discovery, once real scope exists to price against.
export const pricingPlans: PricingPlan[] = [
  {
    id: "sprint",
    name: "Discovery Sprint",
    tagline: "Get a scoped plan before you commit to a build.",
    price: "From $6,000",
    cadence: "one-off, 1–2 weeks",
    bestFor: "Teams validating an idea or scoping a bigger build",
    bullets: [
      "Stakeholder and user interviews",
      "Technical feasibility review",
      "Scoped roadmap with effort estimates",
      "Fixed-price proposal for the build phase",
    ],
  },
  {
    id: "managed",
    name: "Managed Build",
    tagline: "A full team that owns your project end to end.",
    price: "From $18,000/mo",
    cadence: "fixed-scope or ongoing",
    bestFor: "Startups and businesses shipping a product from scratch",
    bullets: [
      "Design, engineering, QA and delivery lead",
      "Weekly demos and a backlog you can reprioritise",
      "Fixed-scope quote or rolling monthly engagement",
      "Post-launch support window included",
    ],
    featured: true,
  },
  {
    id: "augmentation",
    name: "Staff Augmentation",
    tagline: "Senior engineers who slot into your existing team.",
    price: "From $9,500/mo per engineer",
    cadence: "monthly, cancel anytime",
    bestFor: "Teams that need more hands, not a new process",
    bullets: [
      "Engineers join your sprint rituals and tools",
      "No minimum term beyond 30 days' notice",
      "Mix of seniority to match your team's gaps",
      "Direct line to the engineer, not an account layer",
    ],
  },
  {
    id: "retainer",
    name: "Support Retainer",
    tagline: "Keep a shipped product running and improving.",
    price: "From $3,000/mo",
    cadence: "monthly",
    bestFor: "Products already live that need upkeep, not a rebuild",
    bullets: [
      "Uptime and error monitoring with alerting",
      "Bug-fix SLAs and dependency patching",
      "A block of hours for ongoing feature work",
      "Monthly review of what shipped and what's next",
    ],
  },
];

export const pricingFaqs = [
  {
    q: "Why isn't there a fixed price on the page?",
    a: "Because a number that ignores your actual scope isn't a real quote — it's a guess dressed up as one. Every engagement gets a firm price after a short discovery pass, once we know what we're actually pricing.",
  },
  {
    q: "Can we switch between models mid-project?",
    a: "Yes — it's common to start with a Discovery Sprint, move into a Managed Build, then drop to a Support Retainer after launch. The team and context carry over, so switching doesn't cost you a ramp-up period.",
  },
  {
    q: "Is there a minimum engagement length?",
    a: "Discovery Sprints are one-off. Managed Builds run for the length of the fixed-scope project. Staff Augmentation and Support Retainers run month to month with 30 days' notice — no long lock-in.",
  },
];

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tag: string;
  body: string[];
};

// PLACEHOLDER — sample posts to demonstrate the /blog template. Replace with
// real writing before launch.
export const blogPosts: BlogPost[] = [
  {
    slug: "buy-vs-build-custom-software",
    title: "Buy vs. build: when off-the-shelf software stops being enough",
    excerpt:
      "Off-the-shelf tools are cheap right up until the workaround they force on you starts costing more than the license did.",
    date: "2026-06-02",
    readTime: "6 min read",
    tag: "Strategy",
    body: [
      "Every off-the-shelf tool is built for the average version of your problem. That's fine, right up until your process has a wrinkle the tool doesn't bend to — and then you're either bending your business to fit the software, or bolting on a spreadsheet to cover the gap.",
      "The tell is usually a workaround that's become permanent: a manual export-and-reimport step, a shared spreadsheet nobody trusts, a person whose job is quietly patching what the system doesn't do. Once that workaround is costing more in time and errors than a build would cost to remove it, the math has already flipped.",
      "Custom software isn't the default answer — most businesses are well served by buying. But when the constraint is specific to how you operate, only something built around that constraint actually removes it. The question isn't 'can we afford to build this,' it's 'what is the workaround actually costing us every month it stays in place.'",
    ],
  },
  {
    slug: "mvp-scope-that-ships",
    title: "The MVP scope that actually ships in six weeks",
    excerpt:
      "Most MVPs slip because the scope was never minimal — it was just smaller. Here's the difference.",
    date: "2026-05-14",
    readTime: "5 min read",
    tag: "Product",
    body: [
      "A scope that's 'smaller' still tries to cover every use case, just with less polish on each. A scope that's minimal picks the one workflow that proves the idea and builds only that, end to end, at full quality.",
      "The way to find that one workflow is to ask what would make a real user come back tomorrow — not what would make a demo look complete. Those are usually different lists, and the demo list is the one that blows the timeline.",
      "Everything else — the settings page, the admin dashboard, the edge cases that affect 2% of users — waits. Not because it doesn't matter, but because you don't yet know if it matters, and six weeks is enough time to find out.",
    ],
  },
  {
    slug: "automation-worth-building",
    title: "How to tell if an automation is actually worth building",
    excerpt:
      "Not every manual process deserves to be automated. Here's the filter we use before we recommend one.",
    date: "2026-04-08",
    readTime: "4 min read",
    tag: "Automation",
    body: [
      "The instinct is to automate anything repetitive. The better filter is frequency times consequence: a task done fifty times a day with low stakes each time is worth automating even if a mistake is cheap, because the time saved compounds fast.",
      "A task done twice a month with a costly mistake if it's wrong is a worse automation candidate than it looks — the volume is too low to justify the build, and a rare failure in an automated process is harder to catch than a rare failure a human was already double-checking.",
      "Before we recommend automating anything, we ask what happens the day it silently breaks. If the answer is 'someone notices within the hour,' build it. If the answer is 'nobody would know for weeks,' it needs monitoring built in before it needs anything else.",
    ],
  },
];

// PLACEHOLDER — replace with Decar's real registered details before launch.
export const companyDetails = {
  name: "Decar Solutions",
  addressLines: ["[Street address]", "[City, postcode]"],
  registration: ["[Company registration no.]", "[VAT ID]"],
  email: "hello@decarsolutions.com",
};

export const socialLinks = [
  { href: "#", label: "Clutch" },
  { href: "#", label: "LinkedIn" },
  { href: "#", label: "Dribbble" },
  { href: "#", label: "Behance" },
  { href: "#", label: "Facebook" },
  { href: "#", label: "Instagram" },
];

export const footerColumns = [
  {
    heading: "Company",
    links: [
      { href: "/services", label: "Services" },
      { href: "/work", label: "Case Studies" },
      { href: "/about", label: "About us" },
      { href: "/pricing", label: "Pricing" },
      { href: "/blog", label: "Blog" },
      { href: "/about#careers", label: "Career" },
    ],
  },
  {
    heading: "Contact",
    links: [
      {
        href: "mailto:hello@decarsolutions.com",
        label: "hello@decarsolutions.com",
      },
      { href: "/contact", label: "Book an appointment" },
    ],
  },
  {
    heading: "Follow us",
    links: socialLinks,
  },
];

export const legalLinks = [
  { href: "/sitemap", label: "Sitemap" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/cookie-policy", label: "Cookie Settings" },
];
