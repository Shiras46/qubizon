import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, BookOpen, Clock, Calendar, ArrowRight, Sparkles } from "lucide-react";
import { constructMetadata } from "@/lib/metadata";
import { SITE_CONFIG } from "@/lib/constants";
import styles from "@/components/blog/BlogPage.module.css";

export const metadata: Metadata = constructMetadata({
  title: "Engineering & Digital Marketing Insights | Qubizon",
  description:
    "Architectural blueprints, technical SEO methodologies, and conversion optimization insights for business leaders and engineers in Kerala and global markets.",
  path: "/blog",
  keywords: [
    "Technical SEO Insights",
    "Next.js Web Development Kerala",
    "Conversion Rate Optimization",
    "Digital Marketing Strategies Kerala",
  ],
});

export interface BlogPostSummary {
  slug: string;
  title: string;
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
    category: "Paid Advertising",
    excerpt:
      "A practical blueprint for commercial businesses looking to reduce cost-per-acquisition by eliminating untargeted search queries and establishing high-intent landing page parity.",
    date: "2026-10-05",
    readTime: "5 min read",
    isDraft: true,
  },
];

export default function BlogIndexPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": SITE_CONFIG.domain },
          { "@type": "ListItem", "position": 2, "name": "Blog & Insights", "item": `${SITE_CONFIG.domain}/blog` },
        ],
      },
      {
        "@type": "Blog",
        "@id": `${SITE_CONFIG.domain}/blog#blog`,
        "name": "Qubizon Engineering & Digital Insights",
        "publisher": { "@id": `${SITE_CONFIG.domain}/#organization` },
        "url": `${SITE_CONFIG.domain}/blog`,
        "description": "Technical SEO, web architecture, and digital growth articles published by Qubizon Digital Solutions.",
      },
    ],
  };

  return (
    <div className={`container ${styles.container}`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <nav aria-label="Breadcrumb">
        <ul className={styles.breadcrumb}>
          <li><Link href="/">Home</Link></li>
          <ChevronRight size={12} aria-hidden="true" />
          <li aria-current="page">Blog & Insights</li>
        </ul>
      </nav>

      <header className={styles.hero}>
        <div className={styles.badge}>
          <BookOpen size={14} aria-hidden="true" />
          <span>Engineering & Strategy Library</span>
        </div>
        <h1 className={styles.title}>
          Technical Insights & Growth Methodologies
        </h1>
        <p className={styles.lead}>
          In-depth technical guides, search engine optimization frameworks, and architectural case analyses
          curated by the Qubizon practitioner team.
        </p>
      </header>

      <section aria-label="Published Articles and Architectural Blueprints">
        <div className={styles.grid}>
          {BLOG_POSTS.map((post) => (
            <article key={post.slug} className={styles.card}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span className={styles.cardCategory}>{post.category}</span>
                {post.isDraft && (
                  <span style={{ fontSize: "11px", fontWeight: 700, padding: "2px 8px", background: "rgba(255, 190, 11, 0.15)", color: "#855d00", borderRadius: "12px" }}>
                    DRAFT
                  </span>
                )}
              </div>
              <h2 className={styles.cardTitle}>
                <Link href={`/blog/${post.slug}`} style={{ color: "inherit", textDecoration: "none" }}>
                  {post.title}
                </Link>
              </h2>
              <p className={styles.cardExcerpt}>{post.excerpt}</p>
              <div className={styles.cardMeta}>
                <span style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}>
                  <Calendar size={12} aria-hidden="true" />
                  {post.date}
                </span>
                <span style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}>
                  <Clock size={12} aria-hidden="true" />
                  {post.readTime}
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Editorial Intent & Consultation Banner */}
      <div className={styles.ctaBox}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: "var(--brand-blue)" }}>
          <Sparkles size={18} aria-hidden="true" />
          <span style={{ fontSize: "12px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em" }}>
            Practitioner Editorial Protocol
          </span>
        </div>
        <h3>Need an Architectural or SEO Audit for Your Application?</h3>
        <p>
          We do not publish shallow, generic AI-written listicles. Every blueprint reflects active codebases,
          benchmarked Lighthouse metrics, and verifiable organic search performance.
        </p>
        <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: "6px", color: "var(--brand-blue)", fontWeight: 700, textDecoration: "none", marginTop: "4px" }}>
          <span>Request an Architectural Audit</span>
          <ArrowRight size={16} aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}
