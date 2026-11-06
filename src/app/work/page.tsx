import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, ArrowRight, Layers, ShieldCheck } from "lucide-react";
import { constructMetadata } from "@/lib/metadata";
import { SITE_CONFIG } from "@/lib/constants";
import { WorkPageClient } from "@/components/work/WorkPageClient";
import styles from "@/components/work/WorkPage.module.css";

export const metadata: Metadata = constructMetadata({
  title: "Work & Architectural Benchmarks",
  description:
    "Review verifiable technical benchmarks, organic search clustering frameworks, and conversion rate optimization models engineered by Qubizon Digital Solutions.",
  path: "/work",
});

export default function WorkPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: SITE_CONFIG.domain,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Work & Architectural Benchmarks",
            item: `${SITE_CONFIG.domain}/work`,
          },
        ],
      },
      {
        "@type": "CollectionPage",
        "@id": `${SITE_CONFIG.domain}/work#webpage`,
        url: `${SITE_CONFIG.domain}/work`,
        name: "Work & Architectural Benchmarks | Qubizon",
        description:
          "Inspect architectural benchmarks, technical frameworks, and conversion models engineered by Qubizon Digital Solutions.",
        isPartOf: {
          "@type": "WebSite",
          "@id": `${SITE_CONFIG.domain}/#website`,
          name: SITE_CONFIG.name,
          url: SITE_CONFIG.domain,
        },
      },
    ],
  };

  return (
    <main id="main-content" className={styles.mainContainer}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Breadcrumb Navigation */}
      <div className="container">
        <nav aria-label="Breadcrumb" className={styles.breadcrumbNav}>
          <ol className={styles.breadcrumbList}>
            <li className={styles.breadcrumbItem}>
              <Link href="/" className={styles.breadcrumbLink}>
                Home
              </Link>
              <ChevronRight size={14} className={styles.breadcrumbSeparator} aria-hidden="true" />
            </li>
            <li className={styles.breadcrumbItem}>
              <span className={styles.breadcrumbCurrent} aria-current="page">
                Work & Benchmarks
              </span>
            </li>
          </ol>
        </nav>
      </div>

      {/* Hero Section */}
      <section className={styles.heroSection} aria-labelledby="work-hero-heading">
        <div className="container">
          <div className={styles.heroContent}>
            <span className={styles.badge}>
              <Layers size={14} aria-hidden="true" />
              Verified Engineering Standards
            </span>
            <h1 id="work-hero-heading" className={styles.heroTitle}>
              Architectural Benchmarks & <span className="calligraphy">Methodology Proof</span>
            </h1>
            <p className={styles.heroLead}>
              We hold our engineering, search strategy, and advertising execution to verifiable,
              reproducible standards. Rather than fabricating client case studies with unverifiable
              revenue figures, we showcase our public architectural benchmarks and technical frameworks.
            </p>

            <div className={styles.noticeBox}>
              <strong>Proof & Demonstration Standard:</strong> All entries below represent public
              reference architectures, technical models, and conversion experiments developed by Qubizon.
              Each entry outlines the core problem, our strategic approach, technical decisions, and
              verifiable target benchmarks. Client-specific case studies are published only when verified
              and formally authorized under client non-disclosure agreements.
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Work Filter & Benchmarks Grid */}
      <div className="container">
        <WorkPageClient />

        {/* Truth in Advertising & NDA Integrity Callout */}
        <section className={styles.integritySection} aria-labelledby="integrity-heading">
          <p className={styles.integrityBadge}>Agency Ethics & Client Protection</p>
          <h2 id="integrity-heading" className={styles.integrityTitle}>
            Our Commitment to Truth in Advertising
          </h2>
          <p className={styles.integrityText}>
            The digital agency industry is saturated with unverified client logos, cherry-picked percentage
            claims, and fabricated testimonials. At Qubizon, we maintain strict client confidentiality
            under mutual non-disclosure agreements. We never publish proprietary revenue numbers, private
            conversion data, or client identifiers without explicit written consent. We believe that
            demonstrated technical rigor, clean code, and transparent methodology provide a far more honest
            reflection of an agency&apos;s capabilities.
          </p>
        </section>

        {/* Call to Action Banner */}
        <div className={styles.ctaBanner}>
          <h2 className={styles.ctaTitle}>
            Ready to Build a High-Performance Digital Platform?
          </h2>
          <p className={styles.ctaDescription}>
            Schedule an architectural review session. We will evaluate your current website performance,
            search structure, and conversion funnels against our engineering benchmarks.
          </p>
          <div className={styles.ctaActions}>
            <Link href="/contact" className={styles.primaryBtn}>
              <span>Schedule an Architectural Review</span>
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
            <Link href="/services" className={styles.secondaryBtn}>
              <span>Explore All Five Disciplines</span>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
