import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, BookOpen, Clock, Calendar, ArrowRight, Sparkles, CheckCircle2, ShieldCheck, Layers } from "lucide-react";
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

const BLOG_FAQS = [
  {
    q: "What technical topics does Qubizon cover in these engineering blueprints?",
    a: "We publish detailed architectural analyses covering sub-second Next.js App Router performance, Schema.org entity graph modeling, crawl budget optimization, server-side conversion tracking telemetry, and verified Core Web Vitals remediation protocols.",
  },
  {
    q: "Are these benchmarks based on simulated environments or live production sites?",
    a: "All data, metrics, and findings are derived directly from live production web applications, verified Google Search Console performance records, and audited Google Tag Manager telemetry deployed for clients in Kerala and GCC markets.",
  },
  {
    q: "Can other developers and engineering teams adapt these architectural patterns?",
    a: "Yes. All blueprints published in our library utilize open-source web standards, standard Next.js configuration APIs, and W3C semantic markup that engineering teams can readily implement across their own enterprise platforms.",
  },
  {
    q: "How frequently does Qubizon release new technical analyses and case studies?",
    a: "We publish comprehensive, peer-reviewed engineering analyses on a bi-weekly cadence, prioritizing quality, repeatable metrics, and deep code examination over superficial high-volume content generation.",
  },
  {
    q: "How can businesses request a technical evaluation of their own codebase?",
    a: "Organizations can submit an architectural audit inquiry through our contact portal to receive a practitioner-led assessment of their Core Web Vitals, crawl efficiency, and conversion architecture.",
  },
];

export default function BlogIndexPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_CONFIG.domain },
          { "@type": "ListItem", position: 2, name: "Blog & Insights", item: `${SITE_CONFIG.domain}/blog` },
        ],
      },
      {
        "@type": "Blog",
        "@id": `${SITE_CONFIG.domain}/blog#blog`,
        name: "Qubizon Engineering & Digital Insights",
        publisher: { "@id": `${SITE_CONFIG.domain}/#organization` },
        url: `${SITE_CONFIG.domain}/blog`,
        description: "Technical SEO, web architecture, and digital growth articles published by Qubizon Digital Solutions.",
      },
      {
        "@type": "FAQPage",
        mainEntity: BLOG_FAQS.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.a,
          },
        })),
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
          <li aria-current="page">Blog &amp; Insights</li>
        </ul>
      </nav>

      <header className={styles.hero}>
        <div className={styles.badge}>
          <BookOpen size={14} aria-hidden="true" />
          <span>Engineering &amp; Strategy Library</span>
        </div>
        <h1 className={styles.title}>
          Technical Insights &amp; <span className="calligraphy">Growth Methodologies</span>
        </h1>
        <p className={styles.lead}>
          In-depth technical guides, search engine optimization frameworks, and architectural case analyses
          curated by the Qubizon practitioner team to eliminate digital agency fragmentation.
        </p>
      </header>

      {/* Featured Articles Grid */}
      <section aria-label="Published Articles and Architectural Blueprints">
        <div className={styles.grid}>
          {BLOG_POSTS.map((post) => (
            <article key={post.slug} className={styles.card}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span className={styles.cardCategory}>{post.category}</span>
                <span style={{ fontSize: "11px", fontWeight: 700, padding: "2px 8px", background: "var(--brand-yellow-subtle, rgba(255,190,11,0.15))", color: "var(--color-accent-text, #0a0a0a)", borderRadius: "12px" }}>
                  VERIFIED GUIDE
                </span>
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

      {/* Research Methodology Standards */}
      <section style={{ marginTop: "4rem", background: "rgba(255, 255, 255, 0.8)", border: "1px solid rgba(0, 0, 0, 0.08)", borderRadius: "24px", padding: "clamp(2rem, 4vw, 3rem)" }}>
        <h2 style={{ fontSize: "clamp(1.5rem, 2.2vw, 2.25rem)", fontWeight: 800, color: "var(--clr-foreground, #0a0a0a)", marginBottom: "1rem", letterSpacing: "-0.02em" }}>
          Our Engineering &amp; Research Protocol
        </h2>
        <p style={{ fontSize: "1rem", color: "var(--color-text-secondary, #64748b)", lineHeight: "1.65", maxWidth: "800px", marginBottom: "2rem" }}>
          Unlike traditional digital marketing blogs filled with superficial AI listicles, every blueprint published in the Qubizon library is grounded in production codebases, measurable Core Web Vitals, and verifiable commercial outcomes:
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.5rem" }}>
          <div style={{ background: "#ffffff", border: "1px solid rgba(0, 0, 0, 0.06)", borderRadius: "16px", padding: "1.5rem" }}>
            <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--brand-blue, #00488e)", marginBottom: "0.5rem" }}>
              Next.js Architecture
            </h3>
            <p style={{ fontSize: "0.9rem", color: "var(--color-text-secondary, #64748b)", lineHeight: "1.55" }}>
              Benchmarking sub-second Largest Contentful Paint (LCP), zero layout shifts, and React Server Components over monolithic CMS templates.
            </p>
            <Link href="/services/web-development" style={{ display: "inline-block", marginTop: "0.75rem", fontSize: "12px", fontWeight: 700, color: "var(--brand-blue)" }}>
              View Web Architecture &rarr;
            </Link>
          </div>

          <div style={{ background: "#ffffff", border: "1px solid rgba(0, 0, 0, 0.06)", borderRadius: "16px", padding: "1.5rem" }}>
            <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--brand-blue, #00488e)", marginBottom: "0.5rem" }}>
              Technical Crawl Optimization
            </h3>
            <p style={{ fontSize: "0.9rem", color: "var(--color-text-secondary, #64748b)", lineHeight: "1.55" }}>
              Structuring deep Schema.org entity graphs, canonical hierarchies, and automated XML sitemaps to maximize search indexation velocity.
            </p>
            <Link href="/services/seo" style={{ display: "inline-block", marginTop: "0.75rem", fontSize: "12px", fontWeight: 700, color: "var(--brand-blue)" }}>
              View Technical SEO &rarr;
            </Link>
          </div>

          <div style={{ background: "#ffffff", border: "1px solid rgba(0, 0, 0, 0.06)", borderRadius: "16px", padding: "1.5rem" }}>
            <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--brand-blue, #00488e)", marginBottom: "0.5rem" }}>
              Telemetry &amp; Conversion Rates
            </h3>
            <p style={{ fontSize: "0.9rem", color: "var(--color-text-secondary, #64748b)", lineHeight: "1.55" }}>
              Deploying server-side event telemetry and negative keyword clusters to eliminate ad spend leakage and improve verified customer acquisition.
            </p>
            <Link href="/services/paid-advertising" style={{ display: "inline-block", marginTop: "0.75rem", fontSize: "12px", fontWeight: 700, color: "var(--brand-blue)" }}>
              View Paid Advertising &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Editorial Standards & Publishing FAQ */}
      <section style={{ marginTop: "3.5rem", background: "rgba(255, 255, 255, 0.9)", border: "1px solid rgba(0, 0, 0, 0.08)", borderRadius: "20px", padding: "clamp(2rem, 4vw, 3rem)" }}>
        <h2 style={{ fontSize: "clamp(1.5rem, 2.2vw, 2.1rem)", fontWeight: 800, color: "var(--clr-foreground, #0a0a0a)", marginBottom: "1rem", letterSpacing: "-0.02em" }}>
          Publishing Standards &amp; Research Ethics
        </h2>
        <p style={{ fontSize: "0.95rem", color: "var(--color-text-secondary, #64748b)", lineHeight: "1.65", marginBottom: "2rem" }}>
          Our engineering publications serve as practical, code-level references for CTOs, product directors, and digital marketing leaders navigating digital scale:
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
          <div style={{ background: "#ffffff", border: "1px solid rgba(0, 0, 0, 0.06)", borderRadius: "14px", padding: "1.5rem" }}>
            <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "var(--brand-blue, #00488e)", marginBottom: "0.5rem" }}>
              Code-Level Reproducibility
            </h3>
            <p style={{ fontSize: "0.9rem", color: "#64748b", lineHeight: 1.55, margin: 0 }}>
              All code snippets, Next.js configuration blocks, and Schema.org JSON-LD templates published in our articles are tested against the current Next.js production runtime and verified in Google Rich Results Test.
            </p>
          </div>

          <div style={{ background: "#ffffff", border: "1px solid rgba(0, 0, 0, 0.06)", borderRadius: "14px", padding: "1.5rem" }}>
            <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "var(--brand-blue, #00488e)", marginBottom: "0.5rem" }}>
              Zero Synthetic Fluff Policy
            </h3>
            <p style={{ fontSize: "0.9rem", color: "#64748b", lineHeight: 1.55, margin: 0 }}>
              We reject generic automated AI listicles. Every blueprint is authored by practising software developers and search marketing architects with real client implementation experience.
            </p>
          </div>

          <div style={{ background: "#ffffff", border: "1px solid rgba(0, 0, 0, 0.06)", borderRadius: "14px", padding: "1.5rem" }}>
            <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "var(--brand-blue, #00488e)", marginBottom: "0.5rem" }}>
              Regular Core Web Vitals Audits
            </h3>
            <p style={{ fontSize: "0.9rem", color: "#64748b", lineHeight: 1.55, margin: 0 }}>
              Performance benchmarks are measured on real-world Indian 4G/5G mobile network devices and desktop Chrome profiles, ensuring realistic data for regional Kerala businesses.
            </p>
          </div>
        </div>

        {/* Structured Editorial FAQs */}
        <div style={{ marginTop: "2.5rem", paddingTop: "2rem", borderTop: "1px solid rgba(0, 0, 0, 0.06)" }}>
          <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#0a0a0a", marginBottom: "1.25rem" }}>
            Frequently Asked Questions About Our Research
          </h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {BLOG_FAQS.map((faq, idx) => (
              <div key={idx} style={{ background: "#ffffff", border: "1px solid rgba(0, 0, 0, 0.05)", borderRadius: "12px", padding: "1.25rem" }}>
                <h4 style={{ fontSize: "1rem", fontWeight: 700, color: "var(--brand-blue, #00488e)", marginBottom: "0.35rem" }}>
                  {faq.q}
                </h4>
                <p style={{ fontSize: "0.9rem", color: "#64748b", lineHeight: 1.6, margin: 0 }}>
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Editorial Intent & Consultation Banner */}
      <div className={styles.ctaBox} style={{ marginTop: "3.5rem" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: "var(--brand-blue)" }}>
          <Sparkles size={18} aria-hidden="true" />
          <span style={{ fontSize: "12px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em" }}>
            Practitioner Editorial Protocol
          </span>
        </div>
        <h3>Need an Architectural or SEO Audit for Your Application?</h3>
        <p>
          We do not publish shallow, generic AI-written listicles. Every blueprint reflects active codebases,
          benchmarked Lighthouse metrics, and verifiable organic search performance across Kozhikode, Thrissur, and Kerala.
        </p>
        <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: "6px", color: "var(--brand-blue)", fontWeight: 700, textDecoration: "none", marginTop: "4px" }}>
          <span>Request an Architectural Audit</span>
          <ArrowRight size={16} aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}
