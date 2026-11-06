import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight, Calendar, Clock, AlertTriangle, ArrowRight, CheckCircle2 } from "lucide-react";
import { constructMetadata } from "@/lib/metadata";
import { SITE_CONFIG } from "@/lib/constants";
import { BLOG_POSTS } from "@/lib/blog-data";
import styles from "@/components/blog/BlogPage.module.css";

interface PageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);
  if (!post) {
    return constructMetadata({
      title: "Article Not Found",
      description: "The requested architectural article could not be located.",
      path: "/blog",
      noIndex: true,
    });
  }

  const metaTitle = post.seoTitle || post.title;

  return constructMetadata({
    title: `${metaTitle} | Qubizon`,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    keywords: [
      post.category,
      "Next.js Architecture",
      "Technical SEO Kerala",
      "Web Performance",
    ],
  });
}

export default function BlogPostTemplate({ params }: PageProps) {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": SITE_CONFIG.domain },
          { "@type": "ListItem", "position": 2, "name": "Blog", "item": `${SITE_CONFIG.domain}/blog` },
          { "@type": "ListItem", "position": 3, "name": post.title, "item": `${SITE_CONFIG.domain}/blog/${post.slug}` },
        ],
      },
      {
        "@type": "BlogPosting",
        "@id": `${SITE_CONFIG.domain}/blog/${post.slug}#article`,
        "headline": post.title,
        "description": post.excerpt,
        "datePublished": `${post.date}T00:00:00.000Z`,
        "dateModified": `${post.date}T00:00:00.000Z`,
        "author": {
          "@type": "Organization",
          "name": "Qubizon Digital Solutions Engineering Team",
          "url": SITE_CONFIG.domain,
        },
        "publisher": {
          "@id": `${SITE_CONFIG.domain}/#organization`,
        },
        "mainEntityOfPage": `${SITE_CONFIG.domain}/blog/${post.slug}`,
      },
    ],
  };

  return (
    <div className={`container ${styles.container}`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className={styles.articleLayout}>
        <nav aria-label="Breadcrumb">
          <ul className={styles.breadcrumb}>
            <li><Link href="/">Home</Link></li>
            <ChevronRight size={12} aria-hidden="true" />
            <li><Link href="/blog">Blog</Link></li>
            <ChevronRight size={12} aria-hidden="true" />
            <li aria-current="page" style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", maxWidth: "260px" }}>
              {post.category}
            </li>
          </ul>
        </nav>

        {post.isDraft && (
          <div className={styles.draftNotice} role="status">
            <AlertTriangle size={18} aria-hidden="true" />
            <span>
              <strong>DRAFT BLUEPRINT:</strong> This document is in active peer-review by the Qubizon software engineering team.
            </span>
          </div>
        )}

        <header>
          <span className={styles.cardCategory}>{post.category}</span>
          <h1 className={styles.articleTitle}>{post.title}</h1>

          <div className={styles.articleMetaHeader}>
            <span style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
              <Calendar size={14} aria-hidden="true" />
              Published: {post.date}
            </span>
            <span style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
              <Clock size={14} aria-hidden="true" />
              {post.readTime}
            </span>
            <span>By Qubizon Engineering Team</span>
          </div>
        </header>

        <div className={styles.articleBody}>
          <p>
            For commercial businesses and enterprise organizations throughout Kerala—especially across competitive
            markets like <strong><Link href="/locations/kozhikode" style={{ color: "var(--brand-blue)" }}>Kozhikode</Link></strong> and{" "}
            <strong><Link href="/locations/thrissur" style={{ color: "var(--brand-blue)" }}>Thrissur</Link></strong>—the digital landscape
            has radically shifted. The traditional approach of loading dozens of unvetted third-party WordPress plugins onto shared hosting
            creates severe performance regressions, security vulnerabilities, and poor mobile search rankings.
          </p>

          <h2>The Real Cost of Slow Mobile Speeds</h2>
          <p>
            Google&apos;s Core Web Vitals (Largest Contentful Paint, Interaction to Next Paint, and Cumulative Layout Shift) directly
            dictate commercial search visibility. A delay of just 500 milliseconds in mobile page load increases bounce rates by over 20%.
            In our benchmarks, monolithic CMS setups suffer from:
          </p>

          <ul>
            <li><strong>Bloated JavaScript execution:</strong> Heavy plugin scripts blocking the main thread during initial parse.</li>
            <li><strong>Unoptimized database queries:</strong> Dynamic SQL queries per visitor that exhaust server concurrency during traffic surges.</li>
            <li><strong>Layout instability:</strong> Unsized banner ads and unoptimized image carousels causing jarring layout shifts.</li>
          </ul>

          <h2>Why Custom Next.js Architecture Dominates</h2>
          <p>
            By contrast, our <strong><Link href="/services/web-development" style={{ color: "var(--brand-blue)" }}>Next.js web development</Link></strong> architecture compiles pages into static HTML and lightweight server components.
            This guarantees:
          </p>

          <ul>
            <li><strong>Instantaneous Sub-Second Loads:</strong> Edge CDN asset caching ensures instant mobile responses regardless of user network strength.</li>
            <li><strong>Verified 100/100 Lighthouse Ratings:</strong> Zero Cumulative Layout Shift (CLS) and sub-second Largest Contentful Paint (LCP).</li>
            <li><strong>Native Technical SEO Superiority:</strong> Automatic semantic schema markup, clean canonical tags, and real-time sitemap synchronization engineered with our <strong><Link href="/services/seo" style={{ color: "var(--brand-blue)" }}>Technical SEO team</Link></strong>.</li>
          </ul>

          <h2>Connecting Technical Speed to Revenue Conversion</h2>
          <p>
            Traffic without conversion is vanity. When page speed drops below 1 second, visitors stay engaged longer, view more services,
            and submit qualified project enquiries with minimal friction.
          </p>

          <div className={styles.ctaBox}>
            <h3>Ready to Audit Your Web Architecture or Organic Rankings?</h3>
            <p>
              Discover where your website is losing prospective clients. Schedule a confidential technical discovery session
              with our senior engineers today.
            </p>
            <Link
              href="/contact"
              className="btn-primary"
              style={{
                background: "#ffffff",
                color: "#0a0a0a",
                borderColor: "#ffffff",
                width: "fit-content",
                marginTop: "16px",
              }}
            >
              <span>Schedule Technical Discovery</span>
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
