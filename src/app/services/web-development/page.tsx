import type { Metadata } from "next";
import { ServicePageTemplate, type ServicePageProps } from "@/components/services/ServicePageTemplate";
import { constructMetadata } from "@/lib/metadata";

export const metadata: Metadata = constructMetadata({
  title: "Website Development & Web Architecture Services",
  description:
    "Custom Next.js App Router web development engineered for sub-second speeds, zero layout shift, strict WCAG 2.1 AA accessibility, and high conversion rates.",
  path: "/services/web-development",
});

const WEB_DEV_DATA: ServicePageProps = {
  id: "web-development",
  disciplineNumber: "Core Discipline 01",
  title: "Website Development",
  slug: "web-development",
  heroHeadline: "High-Performance Next.js Web Architecture",
  heroSummary:
    "We engineer bespoke digital platforms built on the modern Next.js App Router. Every interface is designed with strict design tokens, sub-second Core Web Vitals, and WCAG 2.1 AA accessibility from the very first line of code.",
  primaryCtaText: "Plan Your Web Architecture",
  problemHeading: "Why Traditional Agency Web Development Fails Modern Businesses",
  problemSubheading:
    "Most web projects suffer from bloated templates, brittle plugin ecosystems, and disconnected developers who don't understand SEO or conversion mechanics.",
  clientChallenges: [
    "Monolithic templates loaded with dozens of third-party plugins that degrade page speeds and introduce critical security vulnerabilities.",
    "Poor Core Web Vitals (high LCP and CLS) that actively depress organic search rankings and increase paid media bounce rates.",
    "Unstyled, inaccessible HTML that fails basic keyboard navigation and creates compliance risks under WCAG 2.1 AA standards.",
    "Fragile codebases where minor updates break layouts or require expensive ongoing developer intervention.",
  ],
  qubizonSolution:
    "Qubizon rejects generic page builders. We build on clean Next.js React Server Components (RSC) and strict TypeScript, delivering resilient digital platforms that load instantaneously across all viewports.",
  solutionHighlights: [
    "Native Next.js App Router architecture keeping client-side JavaScript bundles minimal and fast.",
    "Comprehensive design token systems (CSS variables, fluid clamp typography, semantic color roles).",
    "Pre-release verification protocol targeting sub-second LCP and zero Cumulative Layout Shift.",
    "Built-in keyboard tab sequences, visible focus rings, and valid semantic landmarks.",
  ],
  capabilitiesHeading: "Full-Stack Web Engineering Capabilities",
  capabilities: [
    {
      title: "Next.js App Router Engineering",
      description: "Custom full-stack web applications leveraging React Server Components, streaming SSR, and edge route handlers.",
      deliverables: ["Modular React Component Tree", "Strict TypeScript Type Checking", "Server Actions with Schema Validation"],
    },
    {
      title: "Design Systems & Token Architecture",
      description: "Scalable, maintainable CSS token architectures ensuring total visual consistency across every layout.",
      deliverables: ["Semantic HSL/OKLCH Color Palettes", "Fluid Typographic Scale (clamp())", "Responsive Breakpoint Tokens"],
    },
    {
      title: "Performance & Core Web Vitals Tuning",
      description: "Deep performance optimization targeting green Core Web Vitals metrics across mobile and desktop environments.",
      deliverables: ["Self-Hosted Zero-CLS Font Pipelines", "Modern Image Optimization & Priority Loading", "Minimal JavaScript Bundle Profiles"],
    },
    {
      title: "Headless Content & API Integrations",
      description: "Connecting modern frontends to headless CMS platforms, customer databases, and marketing automation APIs.",
      deliverables: ["REST and GraphQL API Adapters", "Webhook Invalidation & Incremental Static Regeneration", "Strict Secret & Credential Isolation"],
    },
  ],
  methodologyHeading: "From Technical Blueprint to Production Launch",
  methodologySteps: [
    {
      step: "01",
      title: "Architecture & Token Definition",
      description: "We map out technical requirements, database models, route hierarchies, and establish the core CSS design tokens.",
    },
    {
      step: "02",
      title: "Component & Layout Sprints",
      description: "We build responsive, accessible React Server Components with visible focus states and WCAG 2.1 AA compliant contrast.",
    },
    {
      step: "03",
      title: "Performance & Security Profiling",
      description: "We run rigorous Chrome DevTools traces, audit Core Web Vitals, verify HTTP security headers, and sanitize API inputs.",
    },
    {
      step: "04",
      title: "Production Release & Telemetry",
      description: "We execute clean static builds, verify sitemap indexation endpoints, and configure analytics telemetry.",
    },
  ],
  outcomesHeading: "Real Engineering Outcomes (Without Unsupported Hype)",
  outcomes: [
    {
      title: "Sub-Second LCP Performance",
      description: "By leveraging React Server Components, critical content paints in under 1.5 seconds on mobile 4G networks.",
    },
    {
      title: "Zero Layout Shift (CLS ≤ 0.05)",
      description: "Pre-allocated image aspect ratios and self-hosted fonts prevent unexpected element jumps during page load.",
    },
    {
      title: "Accessible to All Users",
      description: "Keyboard navigability and verified contrast ratios ensure your website meets commercial accessibility standards.",
    },
    {
      title: "Lower Total Cost of Ownership",
      description: "A clean, modern codebase without fragile plugin dependencies eliminates recurring patch emergencies.",
    },
  ],
  cubeConnectionHeading: "How Web Development Connects to the Qubizon Cube",
  cubeConnectionSummary:
    "In the Qubizon model, your website is the operational anchor for all digital growth. It directly powers and amplifies our other four disciplines:",
  disciplineConnections: [
    {
      discipline: "Search Engine Optimization",
      relationship: "Clean semantic HTML, server rendering, and automated XML sitemaps provide the ideal crawl foundation for organic rankings.",
      href: "/services/seo",
    },
    {
      discipline: "Paid Advertising",
      relationship: "Sub-second landing page speeds directly lower bounce rates, increase conversion efficiency, and improve ad platform quality scores.",
      href: "/services/paid-advertising",
    },
    {
      discipline: "Content Marketing",
      relationship: "Fast, readable editorial layouts with clear typographic hierarchy turn casual readers into qualified commercial inquiries.",
      href: "/services/content-marketing",
    },
  ],
  faqs: [
    {
      question: "What technology stack does Qubizon use for website development?",
      answer: "We build using modern Next.js (App Router), React, TypeScript, and modern CSS architecture with design tokens. We avoid bulky page builders or fragile multi-plugin WordPress themes in order to ensure long-term speed, security, and maintainability.",
    },
    {
      question: "Can non-technical team members update content?",
      answer: "Yes. We configure modern headless content management systems (such as Sanity, Strapi, or Markdown-based workflows) so non-technical team members can publish articles, update case studies, and modify copy without touching source code.",
    },
    {
      question: "What information is needed to start a website development project?",
      answer: "We begin with a technical discovery consultation where we review your brand guidelines, primary commercial goals, desired site structure, and existing technical stack (hosting, domain access, integrations).",
    },
    {
      question: "How do you ensure accessibility on the websites you build?",
      answer: "Accessibility is embedded into our development workflow from day one. We use native semantic HTML, check color contrast ratios against WCAG 2.1 AA benchmarks, implement clear :focus-visible indicators, and test full keyboard navigation using Chrome DevTools.",
    },
  ],
  ctaHeadline: "Ready to Build a Fast, Accessible Web Platform?",
  ctaSummary:
    "Schedule a technical consultation with our engineering team to evaluate your website roadmap and receive a clear architectural proposal.",
  siblingServices: [
    {
      title: "Search Engine Optimization",
      href: "/services/seo",
      description: "Technical crawl audits, schema modeling, and topical content silos.",
    },
    {
      title: "Social Media Marketing",
      href: "/services/social-media-marketing",
      description: "Brand storytelling and active community management across channels.",
    },
    {
      title: "Paid Advertising",
      href: "/services/paid-advertising",
      description: "High-intent search, display, and social acquisition campaigns.",
    },
    {
      title: "Content Marketing",
      href: "/services/content-marketing",
      description: "Authoritative editorial and technical copywriting that converts.",
    },
  ],
};

export default function WebDevServicePage() {
  return <ServicePageTemplate {...WEB_DEV_DATA} />;
}
