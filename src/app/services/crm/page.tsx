import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, ArrowRight, Box } from "lucide-react";
import { constructMetadata } from "@/lib/metadata";
import { SITE_CONFIG } from "@/lib/constants";
import { CrmPageClient } from "@/components/services/CrmPageClient";
import styles from "@/components/services/ServicesIndex.module.css";

export const metadata: Metadata = constructMetadata({
  title: "CRM & Workflow Automation Platform | Qubizon",
  description:
    "Unified sales CRM, automated lead routing, live booking calendars, and connected client portals engineered to eliminate manual bottlenecks for modern enterprises.",
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

const CRM_FAQS = [
  {
    q: "How does Qubizon's CRM connect marketing channels to sales follow-up?",
    a: "Every lead captured through Google Search Ads, Meta campaigns, and on-site contact forms feeds directly into a centralized sales pipeline via encrypted webhook endpoints. Prospects are automatically categorized by service discipline, assigned a lead score based on intent, and routed to your sales team with automated email/SMS notifications.",
  },
  {
    q: "Can this CRM platform integrate with existing software and accounting tools?",
    a: "Yes. Our systems engineers build native API connectors and webhook listeners for major email marketing providers, payment gateways (Razorpay, Stripe), calendar engines (Google Calendar, Outlook), and enterprise communication channels (WhatsApp Business API, Slack).",
  },
  {
    q: "How does the automated booking engine eliminate no-shows and scheduling friction?",
    a: "The booking calendar synchronizes real-time availability across team schedules with custom buffers and time-zone intelligence. Prospects receive automated appointment confirmations and reminder sequences via WhatsApp and SMS, reducing client no-shows by up to 60%.",
  },
  {
    q: "How is client and project data secured under this operational architecture?",
    a: "We implement role-based access control (RBAC), end-to-end TLS 1.3 encryption, and strict database isolation. Client records, project deliverables, and consultation communications are stored in secure cloud environments with full client administrative ownership and zero vendor lock-in.",
  },
];

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
      {
        "@type": "FAQPage",
        mainEntity: CRM_FAQS.map((faq) => ({
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

      {/* Architectural FAQs Section */}
      <div className="container" style={{ marginTop: "4rem", marginBottom: "3rem" }}>
        <div style={{ background: "rgba(255, 255, 255, 0.85)", border: "1px solid rgba(0, 0, 0, 0.08)", borderRadius: "24px", padding: "clamp(2rem, 4vw, 3.5rem)" }}>
          <h2 style={{ fontSize: "clamp(1.6rem, 2.4vw, 2.5rem)", fontWeight: 800, color: "var(--clr-foreground, #0a0a0a)", marginBottom: "1rem", letterSpacing: "-0.02em" }}>
            Frequently Asked Questions on CRM &amp; Automation
          </h2>
          <p style={{ fontSize: "1rem", color: "var(--color-text-secondary, #64748b)", lineHeight: "1.6", maxWidth: "800px", marginBottom: "2rem" }}>
            Review key architectural considerations for connecting your customer acquisition funnels directly to internal sales and project fulfillment workflows:
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "1.5rem" }}>
            {CRM_FAQS.map((faq, idx) => (
              <div key={idx} style={{ background: "#ffffff", border: "1px solid rgba(0, 0, 0, 0.06)", borderRadius: "16px", padding: "1.5rem" }}>
                <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "var(--clr-foreground, #0a0a0a)", marginBottom: "0.5rem", lineHeight: "1.4" }}>
                  {faq.q}
                </h3>
                <p style={{ fontSize: "0.9rem", color: "var(--color-text-secondary, #64748b)", lineHeight: "1.55" }}>
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

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
