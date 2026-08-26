import type { FigureKind } from "@/components/GenerativeFigure";

// Nav mirrors the reference design. Items with `href: "#"` have no
// destination in this project yet — point them at real routes as you build them.
export const navLinks: {
  href: string;
  label: string;
  hasMenu?: boolean;
}[] = [
  { href: "#services", label: "Services" },
  { href: "#", label: "Industries", hasMenu: true },
  { href: "#work", label: "Case Studies" },
  { href: "#", label: "About us" },
  { href: "#", label: "Pricing" },
  { href: "#", label: "Blog" },
];

export type Service = {
  id: string;
  figure: FigureKind;
  title: string;
  body: string;
};

export const services: Service[] = [
  {
    id: "web",
    figure: "globe",
    title: "Web Development",
    body: "Marketing sites, e-commerce, and web apps built on modern frameworks and made to be fast on day one and day 1,000",
  },
  {
    id: "mobile",
    figure: "barrel",
    title: "Mobile Development",
    body: "Native iOS and Android, or cross-platform when speed matters more than platform-native polish — your call, our craft",
  },
  {
    id: "ai",
    figure: "burst",
    title: "AI Solutions",
    body: "Chatbots, copilots, and predictive tools built where AI actually earns its keep, not bolted on for the pitch deck",
  },
  {
    id: "automation",
    figure: "torus",
    title: "Automation",
    body: "Workflows that connect your CRM, ops, and reporting so your team stops copy-pasting between tabs for a living",
  },
];

export const whyDecar = [
  {
    title: "One team, every discipline",
    body: "No juggling separate vendors for design, dev, AI, and ops — and no translation lost between them.",
  },
  {
    title: "Built to scale",
    body: "Architecture decisions are made with your next 10x in mind, not just your launch date.",
  },
  {
    title: "Transparent delivery",
    body: "Fixed milestones, weekly demos, and a shared roadmap — you always know where the project stands.",
  },
  {
    title: "Support that doesn't end at launch",
    body: "We stay on after go-live to monitor, maintain, and keep improving what we built.",
  },
];

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

export const workItems = [
  {
    tags: ["Web", "Automation"],
    title: "Warehouse Inventory Platform",
    body: "A real-time dashboard syncing stock levels across a dozen locations, replacing a spreadsheet three people updated by hand.",
  },
  {
    tags: ["Mobile", "AI"],
    title: "Personal Finance Coach App",
    body: "An iOS/Android app with an AI coach that flags risky spending patterns before they become a real problem.",
  },
  {
    tags: ["AI", "Automation"],
    title: "Support Deflection System",
    body: "A chatbot wired into the ticketing workflow, resolving the majority of Tier-1 requests without a human touch.",
  },
];

export const faqs = [
  {
    q: "How long does a typical project take?",
    a: "Most MVPs ship in 6–10 weeks; larger platforms and multi-service builds run longer. You'll get a real timeline after discovery, not a guess.",
  },
  {
    q: "Do you work with fixed price or hourly billing?",
    a: "Both — fixed-scope projects get a fixed quote; ongoing or evolving work runs on a retainer. We'll recommend whichever fits your project.",
  },
  {
    q: "Can you build on top of tools we already use?",
    a: "Yes — most automation work connects to your existing CRM, e-commerce platform, or ops tools rather than replacing them.",
  },
  {
    q: "What happens after launch?",
    a: "Every project includes a support window post-launch, and ongoing maintenance/growth retainers are available after that.",
  },
];

export const footerColumns = [
  {
    heading: "Company",
    links: [
      { href: "#services", label: "Services" },
      { href: "#work", label: "Work" },
      { href: "#process", label: "Process" },
    ],
  },
  {
    heading: "Contact",
    links: [
      {
        href: "mailto:hello@decarsolutions.com",
        label: "hello@decarsolutions.com",
      },
      { href: "#contact", label: "Book a call" },
    ],
  },
  {
    heading: "Follow",
    links: [
      { href: "#", label: "LinkedIn" },
      { href: "#", label: "Instagram" },
      { href: "#", label: "GitHub" },
    ],
  },
];
