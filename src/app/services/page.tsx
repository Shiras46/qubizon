import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, ArrowRight, Box } from "lucide-react";
import { constructMetadata } from "@/lib/metadata";
import { SITE_CONFIG } from "@/lib/constants";
import { ServicesPageClient } from "@/components/services/ServicesPageClient";
import styles from "@/components/services/ServicesIndex.module.css";

export const metadata: Metadata = constructMetadata({
  title: "Digital Marketing & Web Development Services | Qubizon",
  description:
    "Explore Qubizon's digital capabilities: Mobile Apps, Next.js Web Development, Technical SEO, Cloud Hosting, SMM, and End-to-End CRM Automation in Kerala.",
  path: "/services",
  keywords: [
    "Digital Services Kerala",
    "Mobile App Development Kozhikode",
    "Next.js Web Development Kerala",
    "Technical SEO Agency",
    "Cloud Services AWS Kerala",
    "CRM Workflow Automation",
    "Social Media Marketing",
  ],
});

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
        name: "Services & Capabilities | Qubizon Digital Solutions",
        description:
          "Comprehensive digital capabilities spanning mobile apps, Next.js architecture, technical SEO, cloud hosting, and integrated CRM automation platforms.",
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
              Digital Engineering &amp; <span className="calligraphy">Connected Operations</span>.
            </h1>
            <p className={styles.heroLead}>
              {SITE_CONFIG.slogan} We combine specialized engineering disciplines with integrated CRM platforms. From sub-second Next.js web applications to automated lead nurturing, booking calendars, and centralized operations.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Services & CRM Suite */}
      <ServicesPageClient />

      {/* Call to Action Banner */}
      <div className="container">
        <div className={styles.ctaBanner}>
          <h2 className={styles.ctaTitle}>
            Ready for a Unified Digital Platform?
          </h2>
          <p className={styles.ctaDescription}>
            Schedule a technical discovery session. We will audit your current web performance,
            lead funnels, and business operations to engineer an integrated roadmap.
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
    </main>
  );
}
