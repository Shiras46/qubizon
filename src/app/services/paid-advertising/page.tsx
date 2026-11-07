import type { Metadata } from "next";
import { ServicePageTemplate, type ServicePageProps } from "@/components/services/ServicePageTemplate";
import { constructMetadata } from "@/lib/metadata";

export const metadata: Metadata = constructMetadata({
  title: "Paid Advertising & PPC Growth Marketing | Qubizon",
  description:
    "Data-backed PPC, paid search, and conversion-optimized ad campaigns engineered for measurable return on ad spend and low acquisition costs.",
  path: "/services/paid-advertising",
});

const PAID_ADS_DATA: ServicePageProps = {
  id: "paid-advertising",
  disciplineNumber: "Core Discipline 04",
  title: "Paid Advertising",
  slug: "paid-advertising",
  heroHeadline: "Precision Paid Search, Social & Acquisition Campaigns",
  heroSummary:
    "We eliminate wasted advertising budget by focusing strictly on high-intent buyer queries, tight audience segmentation, and seamless landing page conversion mechanics. Every dollar is tracked to verifiable commercial outcomes.",
  primaryCtaText: "Request a Paid Media Audit",
  problemHeading: "Why Most Paid Advertising Budgets Are Quietly Wasted",
  problemSubheading:
    "Too many agencies bid on loose broad-match keywords and send expensive paid clicks to slow generic homepages, burning capital with zero pipeline return.",
  clientChallenges: [
    "Wasting up to 40% of media budgets on irrelevant broad-match search terms that never had any commercial purchase intent.",
    "Sending expensive paid traffic to slow, multi-second loading homepages with confusing layouts and sky-high bounce rates.",
    "Broken or unverified conversion tracking that credits clicks with no visibility into actual closed sales or pipeline value.",
    "Agencies that prioritize spending your entire budget every month rather than optimizing for strict cost-per-acquisition (CPA) targets.",
  ],
  qubizonSolution:
    "Qubizon unites paid media execution directly with frontend engineering. We engineer custom, fast Next.js campaign landing pages that match the exact search intent of every ad group, maximizing conversion rates and lowering acquisition costs.",
  solutionHighlights: [
    "Aggressive negative keyword sculpting to eliminate non-commercial query waste from day one.",
    "Bespoke, sub-second landing pages engineered specifically for high-intent conversion pathways.",
    "First-party server-side tracking (Google Tag Manager, CAPI) for clean attribution telemetry.",
    "Transparent cost-per-lead (CPL) and return on ad spend (ROAS) reporting tied to your bottom line.",
  ],
  capabilitiesHeading: "Performance Paid Acquisition Capabilities",
  capabilities: [
    {
      title: "Paid Search (Google & Bing Ads)",
      description: "Capturing high-intent buyers actively searching for your commercial solutions right at the moment of decision.",
      deliverables: ["Single-Theme Ad Group Architecture", "Extensive Negative Keyword Matrices", "Search Intent & Extension Optimization"],
    },
    {
      title: "B2B Paid Social (LinkedIn & Meta)",
      description: "Reaching decision-makers by company vertical, job seniority, and exact industry account lists.",
      deliverables: ["Account-Based Marketing (ABM) Targeting", "Carousel & Sponsored Content Creatives", "Lead Gen Form & Native Tracking Setup"],
    },
    {
      title: "Landing Page Conversion Engineering",
      description: "Custom, ultra-fast landing pages crafted specifically to support ad campaigns with zero friction.",
      deliverables: ["High-Contrast Value Proposition Hierarchy", "WCAG 2.1 AA Accessible Lead Forms", "Sub-Second LCP Mobile Optimization"],
    },
    {
      title: "Conversion Tracking & Telemetry",
      description: "Robust first-party tracking implementations that survive browser cookie restrictions and provide clean attribution.",
      deliverables: ["Google Ads Enhanced Conversions", "Meta Conversions API (CAPI) Integration", "CRM & Pipeline Attribution Telemetry"],
    },
  ],
  methodologyHeading: "Our Scientific Performance Process",
  methodologySteps: [
    {
      step: "01",
      title: "Unit Economics & Account Audit",
      description: "We analyze your customer acquisition targets, calculate allowable CPA thresholds, and audit existing campaign history.",
    },
    {
      step: "02",
      title: "Architecture & Landing Page Build",
      description: "We structure tight ad groups, write compelling copy variants, and build dedicated Next.js conversion landing pages.",
    },
    {
      step: "03",
      title: "Controlled Launch & Tracking Verification",
      description: "We deploy campaigns with conservative bid ceilings and verify that every lead form trigger logs accurately in telemetry.",
    },
    {
      step: "04",
      title: "Optimization & Profitable Scaling",
      description: "We prune poor-performing queries, double down on winning hooks, and scale budgets only as CPA targets are proven.",
    },
  ],
  outcomesHeading: "Tangible Acquisition Outcomes (Without Wild Promises)",
  outcomes: [
    {
      title: "Lower Cost Per Qualified Lead",
      description: "By pairing relevant ad copy with high-speed landing pages, Quality Scores improve and cost-per-click decreases.",
    },
    {
      title: "Zero Budget Leakage",
      description: "Continuous negative keyword pruning ensures you never pay for job seekers, students, or irrelevant inquiries.",
    },
    {
      title: "Immediate Sales Pipeline",
      description: "While long-term SEO compounds, paid advertising injects qualified commercial prospects into your sales pipeline immediately.",
    },
    {
      title: "Uncompromising Attribution Clarity",
      description: "You know exactly which campaigns, ad sets, and keywords produce revenue, ending the mystery of marketing ROI.",
    },
  ],
  cubeConnectionHeading: "How Paid Advertising Connects to the Qubizon Cube",
  cubeConnectionSummary:
    "Paid ads perform best when supported by a fast website and authoritative brand content. Within the Qubizon Cube:",
  disciplineConnections: [
    {
      discipline: "Website Development",
      relationship: "Our engineering team builds custom sub-second landing pages tailored to specific ad groups, dramatically reducing bounce rates.",
      href: "/services/web-development",
    },
    {
      discipline: "Search Engine Optimization",
      relationship: "Paid search keyword conversions reveal high-value commercial terms that feed directly into our long-term organic SEO roadmap.",
      href: "/services/seo",
    },
    {
      discipline: "Content Marketing",
      relationship: "Authoritative whitepapers, checklists, and case studies serve as high-converting lead magnets for paid campaigns.",
      href: "/services/content-marketing",
    },
  ],
  featuredArticle: {
    title: "Performance PPC: Eliminating Budget Waste in Google Ads & Paid Social",
    href: "/blog/performance-ppc-budget-waste-reduction",
    excerpt:
      "Stop burning ad spend on broad match traps and broken attribution. Uncover how high-intent search segmentation, negative keyword hygiene, and server-side tracking protect your acquisition budget.",
    readTime: "8 min read",
  },
  faqs: [
    {
      question: "What minimum ad budget is recommended to get started?",
      answer: "We typically recommend a minimum monthly media spend of $2,500 to $5,000 for search campaigns, ensuring sufficient daily click volume to gather statistical significance and optimize bid algorithms rapidly.",
    },
    {
      question: "Do you take a percentage of our advertising spend?",
      answer: "We prefer transparent, flat-fee management retainers or tiered fee structures rather than pure percentage-of-spend models, so our incentives remain aligned with your profitability rather than encouraging you to spend more.",
    },
    {
      question: "How do you handle tracking under modern browser privacy controls?",
      answer: "We implement server-side tracking (such as Meta Conversions API and Google Enhanced Conversions) and first-party domain measurement, ensuring conversion events register accurately without relying on brittle third-party cookies.",
    },
    {
      question: "Who owns the advertising accounts and data?",
      answer: "You do. 100% of campaigns are created inside your own advertising accounts (Google Ads, LinkedIn, Meta). You retain complete ownership of all historical data, pixel assets, and billing relationships at all times.",
    },
  ],
  ctaHeadline: "Maximize Every Dollar in Your Marketing Budget",
  ctaSummary:
    "Schedule an introductory paid media consultation. We will audit your current search queries, review landing page conversion friction, and identify immediate cost-saving opportunities.",
  siblingServices: [
    {
      title: "Website Development",
      href: "/services/web-development",
      description: "High-speed landing pages and bespoke web application architecture.",
    },
    {
      title: "Search Engine Optimization",
      href: "/services/seo",
      description: "Technical crawl optimization and sustainable organic search rankings.",
    },
    {
      title: "Social Media Marketing",
      href: "/services/social-media-marketing",
      description: "Strategic brand distribution and active community engagement.",
    },
    {
      title: "Content Marketing",
      href: "/services/content-marketing",
      description: "Authoritative editorial and technical copywriting that converts.",
    },
  ],
};

export default function PaidAdvertisingServicePage() {
  return <ServicePageTemplate {...PAID_ADS_DATA} />;
}
