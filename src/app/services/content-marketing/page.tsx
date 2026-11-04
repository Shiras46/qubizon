import type { Metadata } from "next";
import { ServicePageTemplate, type ServicePageProps } from "@/components/services/ServicePageTemplate";
import { constructMetadata } from "@/lib/metadata";

export const metadata: Metadata = constructMetadata({
  title: "Content Marketing & Authority Editorial Services",
  description:
    "Authoritative B2B content marketing, search-aligned editorial, and technical copywriting engineered to build market credibility and convert decision-makers.",
  path: "/services/content-marketing",
});

const CONTENT_MARKETING_DATA: ServicePageProps = {
  id: "content-marketing",
  disciplineNumber: "Core Discipline 05",
  title: "Content Marketing",
  slug: "content-marketing",
  heroHeadline: "High-Authority Editorial & Search-Aligned B2B Copywriting",
  heroSummary:
    "We produce research-backed, expert-level content assets that educate prospective buyers, establish your technical authority, and rank for high-intent search queries. No shallow AI fluff or robotic keyword stuffing — just compelling, commercially relevant writing.",
  primaryCtaText: "Plan Your Content Architecture",
  problemHeading: "Why Most Corporate Content Marketing Fails to Generate Pipeline",
  problemSubheading:
    "Too many organizations churn out low-value articles to hit arbitrary publishing quotas, creating digital ghost towns that buyers ignore and search engines deindex.",
  clientChallenges: [
    "Flooding company blogs with shallow, AI-generated rehashes that communicate zero original insight and erode buyer trust.",
    "Publishing content without search-intent mapping, resulting in dozens of articles that receive zero organic impressions.",
    "Boring corporate jargon filled with meaningless buzzwords that fails to engage discerning technical and executive buyers.",
    "Articles published as dead-ends with no logical internal linking, contextual CTAs, or conversion mechanisms.",
  ],
  qubizonSolution:
    "Qubizon treats content as an engineering discipline. We reverse-engineer the exact informational needs and purchase objections of your target market, crafting authoritative editorial assets that answer complex questions comprehensively.",
  solutionHighlights: [
    "Original practitioner research, subject-matter expert interviews, and proprietary data analysis.",
    "Strict alignment with Google's Helpful Content and E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness) criteria.",
    "Compelling copywriting that translates complex technical capabilities into clear commercial value.",
    "Embedded conversion pathways: downloadable frameworks, audit checklists, and direct consultation CTAs.",
  ],
  capabilitiesHeading: "Strategic Content Marketing Capabilities",
  capabilities: [
    {
      title: "Search-Aligned Topical Pillar Content",
      description: "Comprehensive, definitive guides that establish topical authority and capture hundreds of related organic search queries.",
      deliverables: ["Cornerstone Pillar Page Blueprints", "Cluster Article Series Architecture", "Contextual Internal Linking Graphs"],
    },
    {
      title: "B2B Technical Copywriting & Whitepapers",
      description: "In-depth research papers, architectural teardowns, and technical explainers tailored for engineers and C-suite evaluators.",
      deliverables: ["Practitioner-Level Technical Guides", "Executive Briefings & Industry Whitepapers", "Comparison & Evaluation Matrix Documents"],
    },
    {
      title: "Case Study & Solution Storytelling",
      description: "Transforming successful client initiatives into rigorous, data-backed case studies that prove your execution capabilities.",
      deliverables: ["Challenge-Solution-Outcome Frameworks", "Executive Quote & Testimonial Extraction", "One-Page Sales Enablement PDFs"],
    },
    {
      title: "High-Converting Lead Magnet Assets",
      description: "High-utility resources that incentivize prospective buyers to voluntarily provide contact details for meaningful follow-up.",
      deliverables: ["Technical Audit Checklists & Calculators", "Benchmark Reports & Industry Surveys", "Interactive Evaluation Guides"],
    },
  ],
  methodologyHeading: "Our Editorial Production Process",
  methodologySteps: [
    {
      step: "01",
      title: "Search Intent & Topic Ideation",
      description: "We analyze high-intent search queries, evaluate competitor content gaps, and map out priority topics for your quarterly editorial calendar.",
    },
    {
      step: "02",
      title: "Expert Interviews & Research",
      description: "We interview your internal engineers or domain specialists to gather authentic insights, technical nuances, and proprietary context.",
    },
    {
      step: "03",
      title: "Drafting & Precision Copywriting",
      description: "Our senior copywriters craft engaging, authoritative drafts with clean formatting, subheadings, diagrams, and actionable takeaways.",
    },
    {
      step: "04",
      title: "Optimization & Multi-Channel Distribution",
      description: "We optimize on-page schema, verify readability scores, and repurpose key takeaways into social carousels and email briefs.",
    },
  ],
  outcomesHeading: "Measurable Content Outcomes (Without Fiction)",
  outcomes: [
    {
      title: "Accelerated Sales Cycles",
      description: "Well-crafted content answers key technical objections before sales conversations begin, shortening decision cycles.",
    },
    {
      title: "Topical Search Dominance",
      description: "Structured content clusters signal deep authority to search crawlers, lifting organic rankings across all related service lines.",
    },
    {
      title: "Permanent Business Asset Value",
      description: "Unlike paid ads that stop delivering the moment budget pauses, high-authority content continues driving qualified leads for years.",
    },
    {
      title: "Elevated Brand Reputation",
      description: "Publishing thoughtful, expert perspectives cements your position as a trusted category leader in the eyes of executive peers.",
    },
  ],
  cubeConnectionHeading: "How Content Connects to the Qubizon Cube",
  cubeConnectionSummary:
    "Content is the intellectual fuel that powers every facet of the Qubizon Cube. In our unified structure:",
  disciplineConnections: [
    {
      discipline: "Search Engine Optimization",
      relationship: "Every editorial piece is engineered to satisfy exact search intents, forming the core ranking assets for our SEO strategies.",
      href: "/services/seo",
    },
    {
      discipline: "Social Media Marketing",
      relationship: "Long-form research pieces and frameworks are systematically sliced into thought leadership posts and social carousels.",
      href: "/services/social-media-marketing",
    },
    {
      discipline: "Paid Advertising",
      relationship: "High-value checklists and benchmark reports serve as lead magnets that power cost-effective paid acquisition funnels.",
      href: "/services/paid-advertising",
    },
    {
      discipline: "Website Development",
      relationship: "Content is styled with fluid typography, responsive tables, and clean code blocks for an optimal reading experience.",
      href: "/services/web-development",
    },
  ],
  faqs: [
    {
      question: "How do you handle highly technical or niche industry topics?",
      answer: "We don't use junior generalists. We conduct 30-minute structured interviews with your internal engineers or product leads, transcribe the technical context, and transform practitioner knowledge into polished, authoritative writing.",
    },
    {
      question: "Do you use automated AI tools to write articles?",
      answer: "No. While we use software for search query clustering, research aggregation, and grammar checking, all writing is crafted by experienced human strategists who understand nuance, business context, and audience psychology.",
    },
    {
      question: "Who owns the copyright to the content created?",
      answer: "You do. 100% of the articles, whitepapers, graphics, and lead magnets created during our engagement belong entirely to your company upon delivery.",
    },
    {
      question: "How often should our company publish new content?",
      answer: "We prioritize quality over volume. For most B2B and technical organizations, publishing 2 to 4 comprehensive, authoritative pillar assets per month produces far superior search rankings and commercial leads than publishing daily shallow posts.",
    },
  ],
  ctaHeadline: "Build a Library of Compounding Digital Assets",
  ctaSummary:
    "Schedule an editorial strategy consultation. We will audit your current content footprint, identify key competitor gaps, and design an authoritative publishing roadmap.",
  siblingServices: [
    {
      title: "Website Development",
      href: "/services/web-development",
      description: "High-performance web architecture and design token systems.",
    },
    {
      title: "Search Engine Optimization",
      href: "/services/seo",
      description: "Technical crawl optimization and sustainable organic rankings.",
    },
    {
      title: "Social Media Marketing",
      href: "/services/social-media-marketing",
      description: "Multi-channel brand storytelling and audience distribution.",
    },
    {
      title: "Paid Advertising",
      href: "/services/paid-advertising",
      description: "Data-backed PPC campaigns and conversion-optimized funnels.",
    },
  ],
};

export default function ContentMarketingServicePage() {
  return <ServicePageTemplate {...CONTENT_MARKETING_DATA} />;
}
