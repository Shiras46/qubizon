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

      {/* Enterprise Data Governance & API Integration Standards */}
      <section style={{ padding: "clamp(2.5rem, 5vw, 4rem) 0", background: "rgba(255, 255, 255, 0.75)", borderTop: "1px solid rgba(0, 0, 0, 0.06)", borderBottom: "1px solid rgba(0, 0, 0, 0.06)", marginTop: "3rem" }}>
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 2.5rem auto" }}>
            <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--brand-blue, #00488e)", display: "block", marginBottom: "0.5rem" }}>
              • ENTERPRISE INTEGRATION ARCHITECTURE /
            </span>
            <h2 style={{ fontSize: "clamp(1.75rem, 3vw, 2.35rem)", fontWeight: 800, color: "var(--clr-foreground, #0a0a0a)", letterSpacing: "-0.02em", marginBottom: "1rem" }}>
              Secure Lead Ingestion &amp; Automated Lifecycle Governance
            </h2>
            <p style={{ fontSize: "0.975rem", color: "var(--color-text-secondary, #64748b)", lineHeight: 1.65 }}>
              Our CRM and automation platform bridges front-end marketing channels to backend fulfillment systems with zero data leakage, encrypted transmission, and deterministic business rules.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
            <div style={{ background: "#ffffff", border: "1px solid rgba(0, 0, 0, 0.08)", borderRadius: "16px", padding: "1.75rem" }}>
              <h3 style={{ fontSize: "1.15rem", fontWeight: 700, color: "var(--brand-blue, #00488e)", marginBottom: "0.5rem" }}>
                Multi-Channel Ingestion &amp; Webhooks
              </h3>
              <p style={{ fontSize: "0.925rem", color: "#64748b", lineHeight: 1.6, margin: 0 }}>
                Every inquiry from Next.js server actions, Google Ads lead extensions, Meta instant forms, and WhatsApp webhooks routes into a unified inbox with UTM attribution and automated geographic tagging.
              </p>
            </div>

            <div style={{ background: "#ffffff", border: "1px solid rgba(0, 0, 0, 0.08)", borderRadius: "16px", padding: "1.75rem" }}>
              <h3 style={{ fontSize: "1.15rem", fontWeight: 700, color: "var(--brand-blue, #00488e)", marginBottom: "0.5rem" }}>
                Role-Based Access Control (RBAC)
              </h3>
              <p style={{ fontSize: "0.925rem", color: "#64748b", lineHeight: 1.6, margin: 0 }}>
                Granular permission controls protect customer contact information. Sales reps access assigned deals, project managers coordinate active deliverables, and leadership monitors aggregated gross margin and pipeline velocity.
              </p>
            </div>

            <div style={{ background: "#ffffff", border: "1px solid rgba(0, 0, 0, 0.08)", borderRadius: "16px", padding: "1.75rem" }}>
              <h3 style={{ fontSize: "1.15rem", fontWeight: 700, color: "var(--brand-blue, #00488e)", marginBottom: "0.5rem" }}>
                Calendar Sync &amp; Real-Time Availability
              </h3>
              <p style={{ fontSize: "0.925rem", color: "#64748b", lineHeight: 1.6, margin: 0 }}>
                Eliminate back-and-forth appointment scheduling. Live bi-directional synchronization with Google Calendar and Outlook ensures prospects book consultations only during verified open practitioner availability.
              </p>
            </div>

            <div style={{ background: "#ffffff", border: "1px solid rgba(0, 0, 0, 0.08)", borderRadius: "16px", padding: "1.75rem" }}>
              <h3 style={{ fontSize: "1.15rem", fontWeight: 700, color: "var(--brand-blue, #00488e)", marginBottom: "0.5rem" }}>
                Automated Service SLA Enforcement
              </h3>
              <p style={{ fontSize: "0.925rem", color: "#64748b", lineHeight: 1.6, margin: 0 }}>
                Automatic alerts notify managers if inbound high-intent leads remain unanswered after 15 minutes. Ensure immediate response velocity when prospects are evaluating your agency against competitors.
              </p>
            </div>
          </div>
        </div>
      </section>

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

      {/* Enterprise SLA, Compliance & Technical Governance Framework */}
      <div className="container" style={{ marginTop: "4rem", marginBottom: "3rem" }}>
        <div style={{ background: "#f8fafc", padding: "3rem clamp(1.5rem, 4vw, 3rem)", borderRadius: "20px", border: "1px solid #e2e8f0" }}>
          <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#00488e", display: "block", marginBottom: "0.5rem" }}>
            • ARCHITECTURAL SECURITY &amp; INTEGRATION PROTOCOL /
          </span>
          <h2 style={{ fontSize: "clamp(1.6rem, 2.5vw, 2.1rem)", fontWeight: 800, letterSpacing: "-0.02em", color: "#0a0a0a", marginBottom: "1rem" }}>
            Enterprise CRM Integration Standards &amp; Data Security
          </h2>
          <p style={{ fontSize: "1rem", lineHeight: 1.65, color: "#4a5568", maxWidth: "860px", marginBottom: "2rem" }}>
            Deploying omnichannel CRM pipelines across diverse marketing channels requires robust security controls, automated lead deduplication, and zero-loss event streaming. Qubizon designs CRM architectures that bridge customer acquisition directly with field sales operations.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))", gap: "1.5rem", marginBottom: "2.5rem" }}>
            <div style={{ background: "#ffffff", padding: "1.75rem", borderRadius: "14px", border: "1px solid #e2e8f0" }}>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#0a0a0a", marginBottom: "0.5rem" }}>
                Zero-Loss Webhook Ingestion Engine
              </h3>
              <p style={{ fontSize: "0.88rem", lineHeight: 1.6, color: "#64748b", margin: 0 }}>
                Every form submission, consultation booking, and WhatsApp conversation triggers stateless serverless webhooks with HMAC-SHA256 signature verification and exponential backoff retry logic. Data ingestion persists even during third-party CRM maintenance windows.
              </p>
            </div>

            <div style={{ background: "#ffffff", padding: "1.75rem", borderRadius: "14px", border: "1px solid #e2e8f0" }}>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#0a0a0a", marginBottom: "0.5rem" }}>
                Bi-Directional CRM Sync (HubSpot, Salesforce, Zoho)
              </h3>
              <p style={{ fontSize: "0.88rem", lineHeight: 1.6, color: "#64748b", margin: 0 }}>
                We engineer two-way field synchronization with your existing CRM infrastructure. When deal stages advance or contracts are executed, offline conversion webhooks automatically update Google Ads and Meta campaign algorithms to optimize target ROAS.
              </p>
            </div>

            <div style={{ background: "#ffffff", padding: "1.75rem", borderRadius: "14px", border: "1px solid #e2e8f0" }}>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#0a0a0a", marginBottom: "0.5rem" }}>
                WhatsApp Cloud API Automation &amp; Routing
              </h3>
              <p style={{ fontSize: "0.88rem", lineHeight: 1.6, color: "#64748b", margin: 0 }}>
                Official Meta WhatsApp Business Cloud API integration provides automated lead routing, interactive quick-reply buttons, appointment reminder dispatch, and instant sales representative push notifications within 30 seconds of high-intent inquiry.
              </p>
            </div>

            <div style={{ background: "#ffffff", padding: "1.75rem", borderRadius: "14px", border: "1px solid #e2e8f0" }}>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#0a0a0a", marginBottom: "0.5rem" }}>
                Field-Level Encryption &amp; Privacy Mandates
              </h3>
              <p style={{ fontSize: "0.88rem", lineHeight: 1.6, color: "#64748b", margin: 0 }}>
                All personally identifiable information (PII) is encrypted at rest using AES-256 and transmitted exclusively over TLS 1.3 channels. Our CRM data pipelines adhere strictly to the Indian DPDP Act 2023, EU GDPR, and GCC regional privacy laws.
              </p>
            </div>
          </div>

          <div style={{ borderTop: "1px solid #e2e8f0", paddingTop: "1.5rem", fontSize: "0.88rem", color: "#64748b", lineHeight: 1.6 }}>
            <strong>Explore Connected Capabilities:</strong> Discover how our CRM workflows integrate with{" "}
            <Link href="/services/web-development" style={{ color: "#00488e", fontWeight: 600, textDecoration: "none" }}>Web Architecture</Link>,{" "}
            <Link href="/services/seo" style={{ color: "#00488e", fontWeight: 600, textDecoration: "none" }}>Technical SEO</Link>,{" "}
            <Link href="/services/paid-advertising" style={{ color: "#00488e", fontWeight: 600, textDecoration: "none" }}>Paid Advertising</Link>, and{" "}
            <Link href="/solutions" style={{ color: "#00488e", fontWeight: 600, textDecoration: "none" }}>Specialized Solutions</Link>. Learn about regional delivery in{" "}
            <Link href="/locations/uae" style={{ color: "#00488e", fontWeight: 600, textDecoration: "none" }}>UAE</Link>,{" "}
            <Link href="/locations/saudi-arabia" style={{ color: "#00488e", fontWeight: 600, textDecoration: "none" }}>Saudi Arabia</Link>, and{" "}
            <Link href="/locations" style={{ color: "#00488e", fontWeight: 600, textDecoration: "none" }}>Global Corridors</Link>.
          </div>
        </div>
      </div>

      {/* Field-Tested CRM Playbooks & Lead Lifecycle Architecture */}
      <div className="container" style={{ marginBottom: "3rem" }}>
        <div style={{ background: "#ffffff", padding: "3rem clamp(1.5rem, 4vw, 3rem)", borderRadius: "20px", border: "1px solid #e2e8f0" }}>
          <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#00488e", display: "block", marginBottom: "0.5rem" }}>
            • OPERATIONAL AUTOMATION PLAYBOOKS /
          </span>
          <h2 style={{ fontSize: "clamp(1.5rem, 2.4vw, 2.1rem)", fontWeight: 800, letterSpacing: "-0.02em", color: "#0a0a0a", marginBottom: "1rem" }}>
            Automated Lead Lifecycle &amp; Conversion Optimization
          </h2>
          <p style={{ fontSize: "1rem", lineHeight: 1.65, color: "#4a5568", maxWidth: "860px", marginBottom: "2rem" }}>
            Capturing inquiries is only half the battle. Without structured lead grading, automated follow-up cadences, and immediate alert triggers, over 60% of commercial prospects go cold. Our engineering collective builds deterministic workflow systems that guide leads from initial touch to signed contract.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))", gap: "1.5rem" }}>
            <div style={{ background: "#f8fafc", padding: "1.75rem", borderRadius: "14px", border: "1px solid #e2e8f0" }}>
              <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "#0a0a0a", marginBottom: "0.5rem" }}>
                1. Programmatic Lead Scoring
              </h3>
              <p style={{ fontSize: "0.88rem", lineHeight: 1.6, color: "#64748b", margin: 0 }}>
                Inbound leads are evaluated against custom scoring algorithms evaluating corporate email domains, budget thresholds, geographic location, and search intent keyword clusters. High-value enterprise prospects are flagged for immediate priority handling.
              </p>
            </div>

            <div style={{ background: "#f8fafc", padding: "1.75rem", borderRadius: "14px", border: "1px solid #e2e8f0" }}>
              <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "#0a0a0a", marginBottom: "0.5rem" }}>
                2. Automated WhatsApp Nurture Cadence
              </h3>
              <p style={{ fontSize: "0.88rem", lineHeight: 1.6, color: "#64748b", margin: 0 }}>
                When prospects download a whitepaper or request a consultation, official WhatsApp Business API triggers dispatch personalized introductory messages, calendar booking links, and case study briefs within minutes of submission.
              </p>
            </div>

            <div style={{ background: "#f8fafc", padding: "1.75rem", borderRadius: "14px", border: "1px solid #e2e8f0" }}>
              <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "#0a0a0a", marginBottom: "0.5rem" }}>
                3. Closed-Loop Offline Ad Calibration
              </h3>
              <p style={{ fontSize: "0.88rem", lineHeight: 1.6, color: "#64748b", margin: 0 }}>
                When sales teams convert a prospect to an active commercial agreement, our automated webhook updates Google Ads and Meta CAPI with the exact contract value, allowing ad algorithms to optimize for actual revenue rather than cheap vanity form fills.
              </p>
            </div>
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
