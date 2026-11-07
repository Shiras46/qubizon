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

      {/* Unified Architecture Delivery Lifecycle */}
      <section style={{ padding: "clamp(3rem, 6vw, 5rem) 0", background: "rgba(255, 255, 255, 0.8)", borderTop: "1px solid rgba(0, 0, 0, 0.06)", borderBottom: "1px solid rgba(0, 0, 0, 0.06)" }}>
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 3rem auto" }}>
            <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--brand-blue, #00488e)", display: "block", marginBottom: "0.5rem" }}>
              • PRACTITIONER METHODOLOGY /
            </span>
            <h2 style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 800, color: "var(--clr-foreground, #0a0a0a)", letterSpacing: "-0.02em", marginBottom: "1rem" }}>
              The 5-Stage Unified Digital Transformation Cycle
            </h2>
            <p style={{ fontSize: "1rem", color: "var(--color-text-secondary, #64748b)", lineHeight: 1.65 }}>
              Traditional agencies isolate web development from marketing and customer relationship management. Qubizon synchronizes every discipline into one continuous technical sprint cycle.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
            <div style={{ background: "#ffffff", border: "1px solid rgba(0, 0, 0, 0.08)", borderRadius: "16px", padding: "1.75rem" }}>
              <span style={{ fontSize: "12px", fontWeight: 800, color: "var(--brand-blue, #00488e)", display: "block", marginBottom: "0.5rem" }}>STAGE 01</span>
              <h3 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "0.5rem", color: "#0a0a0a" }}>Technical Scoping &amp; Audits</h3>
              <p style={{ fontSize: "0.925rem", color: "#64748b", lineHeight: 1.6, margin: 0 }}>
                We inspect existing codebase performance, Core Web Vitals, Google Search Console indexing logs, and CRM data flows to identify structural bottlenecks and immediate conversion opportunities.
              </p>
            </div>

            <div style={{ background: "#ffffff", border: "1px solid rgba(0, 0, 0, 0.08)", borderRadius: "16px", padding: "1.75rem" }}>
              <span style={{ fontSize: "12px", fontWeight: 800, color: "var(--brand-blue, #00488e)", display: "block", marginBottom: "0.5rem" }}>STAGE 02</span>
              <h3 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "0.5rem", color: "#0a0a0a" }}>Design Systems &amp; WCAG AA Tokens</h3>
              <p style={{ fontSize: "0.925rem", color: "#64748b", lineHeight: 1.6, margin: 0 }}>
                We define semantic color palettes, clamp-based responsive typography, visible focus rings, and accessible navigation hierarchies that look executive-grade and comply with international accessibility standards.
              </p>
            </div>

            <div style={{ background: "#ffffff", border: "1px solid rgba(0, 0, 0, 0.08)", borderRadius: "16px", padding: "1.75rem" }}>
              <span style={{ fontSize: "12px", fontWeight: 800, color: "var(--brand-blue, #00488e)", display: "block", marginBottom: "0.5rem" }}>STAGE 03</span>
              <h3 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "0.5rem", color: "#0a0a0a" }}>Sub-Second Next.js Engineering</h3>
              <p style={{ fontSize: "0.925rem", color: "#64748b", lineHeight: 1.6, margin: 0 }}>
                We write custom React Server Components with TypeScript, achieving sub-second mobile Largest Contentful Paint (LCP) and 0.00 Cumulative Layout Shift without brittle WordPress plugins.
              </p>
            </div>

            <div style={{ background: "#ffffff", border: "1px solid rgba(0, 0, 0, 0.08)", borderRadius: "16px", padding: "1.75rem" }}>
              <span style={{ fontSize: "12px", fontWeight: 800, color: "var(--brand-blue, #00488e)", display: "block", marginBottom: "0.5rem" }}>STAGE 04</span>
              <h3 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "0.5rem", color: "#0a0a0a" }}>CRM Pipeline &amp; Lead Ingestion</h3>
              <p style={{ fontSize: "0.925rem", color: "#64748b", lineHeight: 1.6, margin: 0 }}>
                Every website contact form, consultation modal, and advertising landing page connects instantly to automated CRM pipelines, tagging leads, notifying sales reps, and initiating automated follow-up sequences.
              </p>
            </div>

            <div style={{ background: "#ffffff", border: "1px solid rgba(0, 0, 0, 0.08)", borderRadius: "16px", padding: "1.75rem" }}>
              <span style={{ fontSize: "12px", fontWeight: 800, color: "var(--brand-blue, #00488e)", display: "block", marginBottom: "0.5rem" }}>STAGE 05</span>
              <h3 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "0.5rem", color: "#0a0a0a" }}>Technical SEO &amp; Demand Generation</h3>
              <p style={{ fontSize: "0.925rem", color: "#64748b", lineHeight: 1.6, margin: 0 }}>
                We deploy Schema.org entity graphs, crawl budget controls, and authoritative topical editorial clusters that attract qualified regional and international organic search traffic.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services FAQ Section */}
      <section style={{ padding: "clamp(3rem, 5vw, 4.5rem) 0" }}>
        <div className="container" style={{ maxWidth: "880px" }}>
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--brand-blue, #00488e)", display: "block", marginBottom: "0.5rem" }}>
              • FREQUENTLY ASKED QUESTIONS /
            </span>
            <h2 style={{ fontSize: "clamp(1.5rem, 2.5vw, 2.25rem)", fontWeight: 800, color: "#0a0a0a", letterSpacing: "-0.02em" }}>
              Answers About Our Digital Disciplines
            </h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <div style={{ background: "#ffffff", border: "1px solid rgba(0,0,0,0.08)", borderRadius: "14px", padding: "1.5rem" }}>
              <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "var(--brand-blue, #00488e)", marginBottom: "0.5rem" }}>
                Can we engage Qubizon for individual services or only the full unified package?
              </h3>
              <p style={{ fontSize: "0.925rem", color: "#475569", lineHeight: 1.6, margin: 0 }}>
                You can engage Qubizon for individual standalone disciplines—such as custom Next.js App Router development, a technical SEO crawl audit, or CRM workflow automation—or as an integrated full-stack growth partner. All deliverables are designed modularly with zero lock-in.
              </p>
            </div>

            <div style={{ background: "#ffffff", border: "1px solid rgba(0,0,0,0.08)", borderRadius: "14px", padding: "1.5rem" }}>
              <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "var(--brand-blue, #00488e)", marginBottom: "0.5rem" }}>
                How does Qubizon ensure website speed and Core Web Vitals compliance?
              </h3>
              <p style={{ fontSize: "0.925rem", color: "#475569", lineHeight: 1.6, margin: 0 }}>
                We avoid bulky WordPress page builders and heavy jQuery libraries. We develop exclusively on the Next.js App Router with React Server Components, self-hosted web fonts, automated image optimization with next/image, and edge CDN distribution. This guarantees Largest Contentful Paint (LCP) under 1.2s and zero Cumulative Layout Shift.
              </p>
            </div>

            <div style={{ background: "#ffffff", border: "1px solid rgba(0,0,0,0.08)", borderRadius: "14px", padding: "1.5rem" }}>
              <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "var(--brand-blue, #00488e)", marginBottom: "0.5rem" }}>
                What CRM and workflow automation capabilities do you provide?
              </h3>
              <p style={{ fontSize: "0.925rem", color: "#475569", lineHeight: 1.6, margin: 0 }}>
                Our CRM and automation platform provides visual sales deal pipelines, multi-channel lead capture from web forms and social campaigns, automated calendar appointment booking, customer project portals, and instant notifications via email and WhatsApp.
              </p>
            </div>

            <div style={{ background: "#ffffff", border: "1px solid rgba(0,0,0,0.08)", borderRadius: "14px", padding: "1.5rem" }}>
              <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "var(--brand-blue, #00488e)", marginBottom: "0.5rem" }}>
                Who owns the code, creative assets, and advertising accounts?
              </h3>
              <p style={{ fontSize: "0.925rem", color: "#475569", lineHeight: 1.6, margin: 0 }}>
                You retain 100% intellectual property ownership of all custom code, GitHub repositories, ad accounts (Google Ads, Meta, LinkedIn), analytics properties, and visual design assets. We operate on complete transparency without proprietary agency dependencies.
              </p>
            </div>
          </div>
        </div>
      </section>

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
