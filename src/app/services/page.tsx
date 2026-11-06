import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, ArrowRight, Layers, Box, CheckCircle2 } from "lucide-react";
import { constructMetadata } from "@/lib/metadata";
import { CORE_SERVICES, SITE_CONFIG } from "@/lib/constants";
import styles from "@/components/services/ServicesIndex.module.css";

export const metadata: Metadata = constructMetadata({
  title: "Services & Capabilities",
  description:
    "Explore Qubizon's five integrated digital disciplines: Website Development, Technical SEO, Social Media Marketing, Paid Advertising, and Content Marketing.",
  path: "/services",
});

const DISCIPLINE_NUMBERS: Record<string, string> = {
  "web-dev": "01 / WEB",
  "seo": "02 / SEARCH",
  "social-media": "03 / SOCIAL",
  "paid-ads": "04 / ADS",
  "content": "05 / CONTENT",
};

const DISCIPLINE_HIGHLIGHTS: Record<string, string[]> = {
  "web-dev": ["Next.js App Router Architecture", "Sub-second LCP & 0.00 CLS", "WCAG 2.1 AA Accessibility"],
  "seo": ["Technical Crawl Budget Engineering", "Semantic Schema Graph Modeling", "Search-Intent Clustering"],
  "social-media": ["Executive Thought Leadership", "Multi-Channel Distribution", "Active Community Engagement"],
  "paid-ads": ["Negative Keyword Clustering", "Server-Side Conversion Tracking", "Engineered Ad Funnels"],
  "content": ["Search-Aligned Editorial Guides", "Topical Authority Silos", "High-Converting Sales Collateral"],
};

export default function ServicesPage() {
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
            name: "Services",
            item: `${SITE_CONFIG.domain}/services`,
          },
        ],
      },
      {
        "@type": "CollectionPage",
        "@id": `${SITE_CONFIG.domain}/services#webpage`,
        url: `${SITE_CONFIG.domain}/services`,
        name: "Services & Capabilities | Qubizon",
        description:
          "Explore Qubizon's five integrated disciplines: Web Development, SEO, Social Media, Paid Ads, and Content Marketing.",
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
                Services
              </span>
            </li>
          </ol>
        </nav>
      </div>

      {/* Hero Section */}
      <section className={styles.heroSection} aria-labelledby="services-hero-heading">
        <div className="container">
          <div className={styles.heroContent}>
            <span className={styles.badge}>
              <Box size={14} aria-hidden="true" />
              Unified Discipline Architecture
            </span>
            <h1 id="services-hero-heading" className={styles.heroTitle}>
              Five Disciplines. <span className="calligraphy">Unified Execution.</span>
            </h1>
            <p className={styles.heroLead}>
              {SITE_CONFIG.slogan} We eliminate agency fragmentation by integrating software engineering,
              technical search architecture, precision paid advertising, social presence, and authoritative
              editorial content into a single synchronized growth engine.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className={styles.servicesSection} aria-labelledby="core-services-heading">
        <div className="container">
          <div className={styles.servicesGrid}>
            {CORE_SERVICES.map((service) => {
              const numLabel = DISCIPLINE_NUMBERS[service.id] || "01 / SERVICE";
              const highlights = DISCIPLINE_HIGHLIGHTS[service.id] || [];

              return (
                <article key={service.id} className={styles.serviceCard}>
                  <div>
                    <div className={styles.cardHeader}>
                      <span className={styles.disciplineNumber}>{numLabel}</span>
                      <span className={styles.faceTag}>{service.cubeFace} Face</span>
                    </div>

                    <h2 className={styles.cardTitle}>{service.title}</h2>
                    <p className={styles.cardDescription}>{service.shortDescription}</p>

                    <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "8px", marginBottom: "24px" }}>
                      {highlights.map((h, i) => (
                        <li key={i} style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13px", color: "var(--color-text-secondary)" }}>
                          <CheckCircle2 size={14} color="var(--brand-blue)" aria-hidden="true" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className={styles.cardFooter}>
                    <Link href={service.href} className={styles.exploreLink}>
                      <span>Explore Discipline</span>
                      <ArrowRight size={14} aria-hidden="true" />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Call to Action Banner */}
          <div className={styles.ctaBanner}>
            <h2 className={styles.ctaTitle}>
              Ready for a Unified Digital Platform?
            </h2>
            <p className={styles.ctaDescription}>
              Schedule a technical discovery session. We will audit your current web performance,
              organic search visibility, and conversion funnels to map out an integrated roadmap.
            </p>
            <div className={styles.ctaActions}>
              <Link href="/contact" className={styles.primaryBtn}>
                <span>Schedule a Discovery Call</span>
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
              <Link href="/work" className={styles.secondaryBtn}>
                <span>Inspect Our Benchmarks</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
