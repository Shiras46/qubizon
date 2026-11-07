import type { Metadata } from "next";
import { ServicePageTemplate, type ServicePageProps } from "@/components/services/ServicePageTemplate";
import { constructMetadata } from "@/lib/metadata";

export const metadata: Metadata = constructMetadata({
  title: "Search Engine Optimization (SEO) Services",
  description:
    "Technical SEO audits, semantic Schema.org modeling, crawl engineering, and search-intent content clustering for sustainable organic rankings.",
  path: "/services/seo",
});

const SEO_DATA: ServicePageProps = {
  id: "seo",
  disciplineNumber: "Core Discipline 02",
  title: "Search Engine Optimization",
  slug: "seo",
  heroHeadline: "Technical SEO & Organic Pipeline Engineering",
  heroSummary:
    "We don't offer generic keyword stuffing or questionable link schemes. Qubizon builds organic search dominance through code-level crawl engineering, semantic Schema.org structured data, and search-intent topical authority.",
  primaryCtaText: "Request a Technical SEO Audit",
  problemHeading: "Why Conventional SEO Retainers Fail to Move the Needle",
  problemSubheading:
    "Most SEO agencies deliver 60-page PDF reports filled with vanity metrics, leaving your engineers to fix technical problems they don't understand.",
  clientChallenges: [
    "SEO consultants who audit websites but lack the engineering ability to modify source code, resulting in technical fixes that never get deployed.",
    "Shallow keyword stuffing and doorway pages that fail user search intent and trigger algorithmic quality penalties.",
    "Crawl debt caused by broken canonicals, redirect loops, unoptimized XML sitemaps, and slow server response times.",
    "Vanity reporting focused on impressions and low-intent volume rather than qualified sales inquiries and commercial conversions.",
  ],
  qubizonSolution:
    "Qubizon bridges the gap between search strategy and technical execution. Because we engineer the software directly, our SEO specialists implement technical fixes directly in the Next.js repository with zero developer lag.",
  solutionHighlights: [
    "Direct codebase-level remediation of crawl, indexing, and Core Web Vitals bottlenecks.",
    "Comprehensive Schema.org JSON-LD structured data graphs matching semantic search engines.",
    "Data-driven topical authority maps that cluster high-intent commercial and transactional queries.",
    "Transparent reporting tied directly to organic pipeline revenue and search-engine crawl efficiency.",
  ],
  capabilitiesHeading: "Technical & Strategic SEO Capabilities",
  capabilities: [
    {
      title: "Technical Crawl & Indexation Engineering",
      description: "Eliminating technical crawl friction to ensure search engines discover, parse, and index authoritative pages efficiently.",
      deliverables: ["Robots.txt & XML Sitemap Configuration", "Canonical & Alternate URL Mapping", "Crawl Budget & Server Response Optimization"],
    },
    {
      title: "Schema.org Structured Data Modeling",
      description: "Injecting valid JSON-LD schemas that clearly communicate entity relationships to Google, Bing, and AI crawlers.",
      deliverables: ["Organization, Service & WebSite Schemas", "BreadcrumbList & FAQPage Schemas", "Entity Disambiguation Graphs"],
    },
    {
      title: "Search-Intent & Topical Authority Clustering",
      description: "Architecting parent-child URL hierarchies that establish deep topical relevance across core commercial categories.",
      deliverables: ["High-Intent Commercial Keyword Maps", "Topic Cluster Content Blueprints", "Strategic Internal Linking Hierarchies"],
    },
    {
      title: "Core Web Vitals & Search UX Auditing",
      description: "Optimizing the exact page experience metrics Google uses as direct mobile and desktop search ranking signals.",
      deliverables: ["LCP, INP, and CLS Diagnosis", "Font & Asset Rendering Optimization", "Mobile-First Usability Verification"],
    },
  ],
  methodologyHeading: "Our Scientific SEO Methodology",
  methodologySteps: [
    {
      step: "01",
      title: "Deep Technical Crawl Audit",
      description: "We inspect your rendered DOM, server response codes, canonical structures, and heading hierarchies to pinpoint crawl debt.",
    },
    {
      step: "02",
      title: "Code-Level Remediation",
      description: "Our engineers resolve technical defects directly in the codebase, implementing structured data and fixing response headers.",
    },
    {
      step: "03",
      title: "Topical Cluster Deployment",
      description: "We structure and link comprehensive service pillar pages and editorial assets answering exact customer search queries.",
    },
    {
      step: "04",
      title: "Telemetry & Ranking Tracking",
      description: "We monitor Google Search Console indexation status, impression trajectories, and qualified inbound inquiries.",
    },
  ],
  outcomesHeading: "Tangible Search Outcomes (Without False Guarantees)",
  outcomes: [
    {
      title: "Flawless Crawl & Index Efficiency",
      description: "100% of high-value commercial routes properly indexed with zero duplicate content canonical penalties.",
    },
    {
      title: "Compounding Organic Pipeline",
      description: "Sustainable growth in qualified organic search inquiries that reduce your long-term reliance on paid media.",
    },
    {
      title: "Rich Search Engine Results (SERPs)",
      description: "Schema.org structured data qualifies your pages for enhanced snippets, FAQs, and rich search visual features.",
    },
    {
      title: "Algorithmic Resilience",
      description: "Focusing on genuine user utility and clean technical architecture shields your domain from core algorithm shifts.",
    },
  ],
  cubeConnectionHeading: "How SEO Connects to the Qubizon Cube",
  cubeConnectionSummary:
    "Organic search cannot thrive in a vacuum. In the Qubizon model, SEO coordinates seamlessly with our complementary disciplines:",
  disciplineConnections: [
    {
      discipline: "Website Development",
      relationship: "Technical SEO recommendations are implemented natively in our Next.js codebase without vendor friction or handoff delays.",
      href: "/services/web-development",
    },
    {
      discipline: "Content Marketing",
      relationship: "Search intent keyword research directly informs our editorial calendar, ensuring every published asset targets real demand.",
      href: "/services/content-marketing",
    },
    {
      discipline: "Paid Advertising",
      relationship: "Organic search conversion data uncovers winning keywords that inform high-efficiency paid search bidding strategies.",
      href: "/services/paid-advertising",
    },
  ],
  featuredArticle: {
    title: "Technical SEO & Crawl Budget Optimization: Enterprise Architectural Guide",
    href: "/blog/technical-seo-crawl-budget-optimization-guide",
    excerpt:
      "Learn how search engine bots crawl large-scale web applications, how JavaScript hydration impacts indexing efficiency, and how to configure robots.txt and XML sitemaps to protect crawl budget.",
    readTime: "9 min read",
  },
  faqs: [
    {
      question: "How long does it take to see results from technical SEO?",
      answer: "Technical crawl and indexing fixes often show indexation improvements in Google Search Console within 2 to 4 weeks. Organic ranking and traffic compounding typically unfolds over 3 to 6 months as domain authority builds and content clusters are crawled.",
    },
    {
      question: "Do you guarantee #1 rankings on Google?",
      answer: "No, and no ethical SEO agency can. Google's algorithms evolve constantly. What we guarantee is rigorous adherence to Google's Search Essentials, clean code-level technical optimization, and high-utility content architecture designed for sustainable growth.",
    },
    {
      question: "How is Qubizon different from traditional SEO agencies?",
      answer: "Most SEO agencies deliver PDF recommendation lists and leave you to figure out how to implement them. Qubizon is a full-stack digital agency; our engineers directly implement technical schema, robots rules, canonical fixes, and web performance tuning.",
    },
    {
      question: "What information do we need to share to start an SEO audit?",
      answer: "We typically require access to Google Search Console, Google Analytics, and an overview of your primary commercial services and target geographic markets.",
    },
  ],
  ctaHeadline: "Stop Leaving Organic Search Pipeline to Chance",
  ctaSummary:
    "Schedule an introductory SEO consultation. We will analyze your domain's technical health, crawl efficiency, and topical authority footprint.",
  siblingServices: [
    {
      title: "Website Development",
      href: "/services/web-development",
      description: "Custom Next.js App Router engineering and design systems.",
    },
    {
      title: "Content Marketing",
      href: "/services/content-marketing",
      description: "Search-intent editorial and authority copywriting.",
    },
    {
      title: "Paid Advertising",
      href: "/services/paid-advertising",
      description: "Precision PPC and conversion-optimized ad campaigns.",
    },
    {
      title: "Social Media Marketing",
      href: "/services/social-media-marketing",
      description: "Brand storytelling and active community management.",
    },
  ],
};

export default function SeoServicePage() {
  return <ServicePageTemplate {...SEO_DATA} />;
}
