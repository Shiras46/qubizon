export interface BlogPostSummary {
  slug: string;
  title: string;
  seoTitle?: string;
  category: string;
  excerpt: string;
  date: string;
  readTime: string;
  isDraft?: boolean;
}

export const BLOG_POSTS: BlogPostSummary[] = [
  {
    slug: "why-nextjs-outperforms-wordpress-kerala-enterprises",
    title: "Why Next.js Outperforms Traditional WordPress for High-Growth Kerala Enterprises",
    seoTitle: "Why Next.js Outperforms WordPress in Kerala",
    category: "Web Architecture",
    excerpt:
      "A technical comparison analyzing sub-second Core Web Vitals, security overhead, crawl efficiency, and long-term TCO between monolithic CMS platforms and custom Next.js App Router applications.",
    date: "2026-10-18",
    readTime: "6 min read",
    isDraft: true,
  },
  {
    slug: "technical-seo-crawl-budget-optimization-guide",
    title: "Crawl Budget Engineering & Semantic Schema Modeling for Regional Competitiveness",
    seoTitle: "Crawl Budget & Schema SEO Optimization Guide",
    category: "Technical SEO",
    excerpt:
      "How enterprise businesses in Kozhikode and Thrissur can leverage Schema.org entity graphs, canonical hierarchy, and robots.txt directives to maximize search engine indexing velocity.",
    date: "2026-10-12",
    readTime: "8 min read",
    isDraft: true,
  },
  {
    slug: "performance-ppc-budget-waste-reduction",
    title: "Eliminating PPC Budget Waste: Negative Keyword Clustering & Server-Side Conversion Tracking",
    seoTitle: "Eliminating PPC Budget Waste with Smart Tracking",
    category: "Paid Advertising",
    excerpt:
      "A practical blueprint for commercial businesses looking to reduce cost-per-acquisition by eliminating untargeted search queries and establishing high-intent landing page parity.",
    date: "2026-10-05",
    readTime: "5 min read",
    isDraft: true,
  },
];

