import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, ArrowRight, Box } from "lucide-react";
import { constructMetadata } from "@/lib/metadata";
import { SITE_CONFIG } from "@/lib/constants";
import { CrmPageClient } from "@/components/services/CrmPageClient";
import styles from "@/components/services/ServicesIndex.module.css";

export const metadata: Metadata = constructMetadata({
  title: "CRM & Workflow Automation Platform | Qubizon Digital Solutions",
  description:
    "Unified sales CRM, automated lead routing, live booking calendars, and connected client portals engineered to eliminate manual administrative bottlenecks for growing enterprises.",
  path: "/services/crm",
  keywords: [
    "CRM Development Kerala",
    "Workflow Automation Agency",
    "Lead Management Software",
    "Automated Booking System",
    "Client Portal Development",
    "Enterprise Operations Automation",
  ],
});

export default function CrmPage() {
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
          {
            "@type": "ListItem",
            position: 3,
            name: "CRM & Automation",
            item: `${SITE_CONFIG.domain}/services/crm`,
          },
        ],
      },
      {
        "@type": "Service",
        "@id": `${SITE_CONFIG.domain}/services/crm#service`,
        name: "CRM & Workflow Automation Platform",
        serviceType: "Enterprise Operations & CRM Automation",
        description:
          "End-to-end synchronized sales pipelines, automated multi-channel lead scoring, dynamic booking calendars, and centralized client management platforms.",
        provider: {
          "@type": "Organization",
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
              <Link href="/services" className={styles.breadcrumbLink}>
                Services
              </Link>
              <ChevronRight size={14} className={styles.breadcrumbSeparator} aria-hidden="true" />
            </li>
            <li className={styles.breadcrumbItem}>
              <span className={styles.breadcrumbCurrent} aria-current="page">
                CRM &amp; Automation
              </span>
            </li>
          </ol>
        </nav>
      </div>

      {/* Hero Section */}
      <section className={styles.heroSection} aria-labelledby="crm-page-heading">
        <div className="container">
          <div className={styles.heroContent}>
            <span className={styles.badge}>
              <Box size={14} aria-hidden="true" />
              Connected Enterprise Architecture
            </span>
            <h1 id="crm-page-heading" className={styles.heroTitle}>
              CRM, Automation &amp; <span className="calligraphy">Connected Operations</span>.
            </h1>
            <p className={styles.heroLead}>
              Every marketing lead, customer touchpoint, calendar booking, and project delivery task synchronized into one unified operational workspace. No lost prospective inquiries, and zero manual re-entry between marketing and operations.
            </p>
          </div>
        </div>
      </section>

      {/* CRM Interactive Suite (Displayed Right at Top of Content) */}
      <CrmPageClient />

      {/* Call to Action Banner */}
      <div className="container">
        <div className={styles.ctaBanner}>
          <h2 className={styles.ctaTitle}>
            Ready to Connect Your Digital Operations?
          </h2>
          <p className={styles.ctaDescription}>
            Schedule an architectural consultation with our systems engineers. We will map your customer acquisition channels and design a synchronized workflow engine tailored to your team.
          </p>
          <div className={styles.ctaActions}>
            <Link href="/contact?service=crm" className={styles.primaryBtn}>
              <span>Schedule an Operations Audit</span>
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
            <Link href="/services" className={styles.secondaryBtn}>
              <span>Explore All Agency Services</span>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

