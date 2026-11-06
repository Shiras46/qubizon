import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, BookOpen, Clock, Calendar, ArrowRight, Sparkles } from "lucide-react";
import { constructMetadata } from "@/lib/metadata";
import { SITE_CONFIG } from "@/lib/constants";
import { BLOG_POSTS } from "@/lib/blog-data";
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
                  <span style={{ fontSize: "11px", fontWeight: 700, padding: "2px 8px", background: "var(--brand-yellow-subtle)", color: "var(--color-accent-text)", borderRadius: "12px" }}>
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
