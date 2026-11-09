import type { Metadata } from "next";
import Link from "next/link";
import {
  ChevronRight,
  Globe2,
  ArrowRight,
  ShieldCheck,
  Code2,
  Search,
  Target,
  Database,
  Building2,
  Clock,
  Sparkles,
  Zap,
} from "lucide-react";
import { constructMetadata } from "@/lib/metadata";
import { SITE_CONFIG } from "@/lib/constants";
import styles from "@/components/locations/LocationPage.module.css";

export const metadata: Metadata = constructMetadata({
  title: "Web Development & Marketing in Bahrain | Qubizon",
  description:
    "Next.js web development, technical SEO, high-intent PPC advertising, and CRM automation for high-growth enterprises in Manama and across Bahrain.",
  path: "/locations/bahrain",
  keywords: [
    "Digital Marketing Company Bahrain",
    "Web Development Company Manama",
    "Best Digital Marketing Agency Bahrain",
    "Next.js Web Development Bahrain",
    "SEO Agency Bahrain",
    "PPC Advertising Agency Bahrain",
    "B2B Web Architecture Bahrain",
  ],
});

const BAHRAIN_FAQS = [
  {
    q: "How does Qubizon partner with enterprises and financial firms in Bahrain?",
    a: "We provide high-velocity cross-border digital engineering aligned with Arabia Standard Time (AST, UTC+3). With just a 2.5-hour time difference from our senior engineering centers, our practitioners maintain real-time Slack and WhatsApp collaboration, bi-weekly sprint reviews, and in-person consultations in Manama when required.",
  },
  {
    q: "Can you engineer bank-grade secure web platforms for Bahrain fintech and financial institutions?",
    a: "Yes. We engineer web applications with strict Content Security Policy (CSP), TLS 1.3 encryption, HSTS headers, and parameterized server actions adhering to regional Central Bank of Bahrain (CBB) digital guidelines.",
  },
  {
    q: "What digital advertising strategies generate the strongest return on investment in Bahrain?",
    a: "In Bahrain's corporate and retail sectors, high-intent Google Search advertising combined with executive LinkedIn B2B funnels and targeted Meta/Instagram campaigns connected directly to automated WhatsApp lead response workflows yield exceptional conversion rates.",
  },
  {
    q: "How do you structure code ownership and data confidentiality for Bahrain clients?",
    a: "You retain 100% legal ownership of all code repositories, Git commits, ad accounts, and analytics data from day one. We sign mutual non-disclosure agreements (NDAs) before evaluating any proprietary systems or growth roadmaps.",
  },
];

export default function BahrainLocationPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_CONFIG.domain },
          { "@type": "ListItem", position: 2, name: "Service Areas", item: `${SITE_CONFIG.domain}/locations` },
          { "@type": "ListItem", position: 3, name: "Bahrain Hub", item: `${SITE_CONFIG.domain}/locations/bahrain` },
        ],
      },
      {
        "@type": "Service",
        "@id": `${SITE_CONFIG.domain}/locations/bahrain#service`,
        name: "Enterprise Web Development & Digital Marketing in Bahrain",
        provider: { "@id": `${SITE_CONFIG.domain}/#organization` },
        serviceType: "Next.js Web Engineering, Technical SEO, Performance PPC, CRM Automation",
        areaServed: [
          {
            "@type": "Country",
            name: "Bahrain",
          },
          {
            "@type": "City",
            name: "Manama",
            containedInPlace: { "@type": "Country", name: "Bahrain" },
          },
        ],
        description:
          "Enterprise Next.js web application engineering, technical search engine optimization, performance PPC marketing, and CRM automation for commercial enterprises across Manama and Bahrain.",
      },
      {
        "@type": "FAQPage",
        mainEntity: BAHRAIN_FAQS.map((faq) => ({
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
    <div className={`container ${styles.pageContainer}`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb">
        <ul className={styles.breadcrumb}>
          <li><Link href="/">Home</Link></li>
          <ChevronRight size={12} aria-hidden="true" />
          <li><Link href="/locations">Service Areas</Link></li>
          <ChevronRight size={12} aria-hidden="true" />
          <li aria-current="page">Bahrain Hub</li>
        </ul>
      </nav>

      {/* Hero Header */}
      <header className={styles.hero}>
        <div className={styles.badge}>
          <Globe2 size={14} aria-hidden="true" />
          <span>GCC Expansion • Manama • Seef • Financial Harbour</span>
        </div>
        <h1 className={styles.title}>
          Enterprise Web Development &amp; <span className="calligraphy">Digital Growth in Bahrain</span>
        </h1>
        <p className={styles.lead}>
          Empowering financial leaders, logistics innovators, corporate groups, and retail pioneers across Manama and Seef. We architect sub-second Next.js web platforms, dominate Google Bahrain search rankings with technical SEO, and execute precision performance advertising campaigns that convert.
        </p>

        <div className={styles.ctaRow}>
          <Link href="/contact?location=bahrain" className={styles.primaryBtn}>
            <span>Schedule Bahrain Discovery Session</span>
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
          <a
            href="https://wa.me/917902911961?text=Hi%20Qubizon%2C%20I%20am%20contacting%20you%20from%20Bahrain%20regarding%20a%20digital%20project."
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondaryBtn}
          >
            <span>Direct WhatsApp Consultation &rarr;</span>
          </a>
        </div>
      </header>

      {/* Why Bahrain Enterprises Choose Qubizon */}
      <section className={styles.section} aria-labelledby="why-bahrain-heading">
        <h2 id="why-bahrain-heading" className={styles.sectionTitle}>
          Why Bahrain Commercial Leaders Partner With Qubizon
        </h2>
        <p className={styles.sectionSubtitle}>
          In Bahrain&apos;s financial and commercial ecosystem, organizations demand authentic software engineering rather than superficial agency templates:
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem", marginTop: "2rem" }}>
          <div style={{ background: "#ffffff", border: "1px solid rgba(0, 0, 0, 0.08)", borderRadius: "16px", padding: "1.75rem", boxShadow: "0 2px 12px rgba(0,0,0,0.03)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "0.75rem" }}>
              <Zap size={22} style={{ color: "var(--brand-blue, #00488e)" }} aria-hidden="true" />
              <h3 style={{ fontSize: "1.15rem", fontWeight: 700, margin: 0, color: "#0a0a0a" }}>Sub-Second Mobile Speeds</h3>
            </div>
            <p style={{ fontSize: "0.925rem", color: "#64748b", lineHeight: 1.6, margin: 0 }}>
              With Bahrain boasting widespread 5G mobile adoption, our Next.js App Router applications load in under 1.2 seconds with zero visual layout shift.
            </p>
          </div>

          <div style={{ background: "#ffffff", border: "1px solid rgba(0, 0, 0, 0.08)", borderRadius: "16px", padding: "1.75rem", boxShadow: "0 2px 12px rgba(0,0,0,0.03)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "0.75rem" }}>
              <Globe2 size={22} style={{ color: "var(--brand-blue, #00488e)" }} aria-hidden="true" />
              <h3 style={{ fontSize: "1.15rem", fontWeight: 700, margin: 0, color: "#0a0a0a" }}>Bilingual Arabic &amp; English RTL</h3>
            </div>
            <p style={{ fontSize: "0.925rem", color: "#64748b", lineHeight: 1.6, margin: 0 }}>
              Native Right-to-Left (RTL) Arabic styling, customized Arabic web font pipelines, and bidirectional UI design providing effortless navigation for Bahraini consumers and international executives.
            </p>
          </div>

          <div style={{ background: "#ffffff", border: "1px solid rgba(0, 0, 0, 0.08)", borderRadius: "16px", padding: "1.75rem", boxShadow: "0 2px 12px rgba(0,0,0,0.03)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "0.75rem" }}>
              <Clock size={22} style={{ color: "var(--brand-blue, #00488e)" }} aria-hidden="true" />
              <h3 style={{ fontSize: "1.15rem", fontWeight: 700, margin: 0, color: "#0a0a0a" }}>Real-Time AST Time-Zone Overlap</h3>
            </div>
            <p style={{ fontSize: "0.925rem", color: "#64748b", lineHeight: 1.6, margin: 0 }}>
              Operating with only a 2.5-hour time difference from Manama, our senior practitioners maintain synchronous daily standups, instant Slack messaging, and rapid execution on campaign optimizations.
            </p>
          </div>

          <div style={{ background: "#ffffff", border: "1px solid rgba(0, 0, 0, 0.08)", borderRadius: "16px", padding: "1.75rem", boxShadow: "0 2px 12px rgba(0,0,0,0.03)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "0.75rem" }}>
              <ShieldCheck size={22} style={{ color: "var(--brand-blue, #00488e)" }} aria-hidden="true" />
              <h3 style={{ fontSize: "1.15rem", fontWeight: 700, margin: 0, color: "#0a0a0a" }}>100% Client IP &amp; Code Ownership</h3>
            </div>
            <p style={{ fontSize: "0.925rem", color: "#64748b", lineHeight: 1.6, margin: 0 }}>
              All code repositories, ad accounts, and analytics properties belong entirely to your company from day one under clean commercial licensing terms with zero vendor lock-in.
            </p>
          </div>
        </div>
      </section>

      {/* Core Services for Bahrain */}
      <section className={styles.section} aria-labelledby="bahrain-services-heading" style={{ marginTop: "3.5rem" }}>
        <h2 id="bahrain-services-heading" className={styles.sectionTitle}>
          Integrated Capabilities for the Bahrain Market
        </h2>
        <p className={styles.sectionSubtitle}>
          We deliver synchronized digital solutions that eliminate agency fragmentation and drive verifiable commercial pipeline revenue:
        </p>

        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <div className={styles.cardIcon}><Code2 size={22} aria-hidden="true" /></div>
            <h3 className={styles.cardTitle}>Next.js Web Applications &amp; Portals</h3>
            <p className={styles.cardDesc}>
              Bespoke corporate platforms, customer portals, and headless digital experiences built on React Server Components for maximum speed and security.
            </p>
            <Link href="/services/web-development" className={styles.cardLink}>
              Explore Web Architecture <ChevronRight size={14} aria-hidden="true" />
            </Link>
          </div>

          <div className={styles.serviceCard}>
            <div className={styles.cardIcon}><Search size={22} aria-hidden="true" /></div>
            <h3 className={styles.cardTitle}>Technical SEO &amp; Google Bahrain Dominance</h3>
            <p className={styles.cardDesc}>
              Structured Schema.org entity graphs, crawl budget engineering, and bilingual keyword clustering to capture high-value commercial queries in Bahrain.
            </p>
            <Link href="/services/seo" className={styles.cardLink}>
              Explore Technical SEO <ChevronRight size={14} aria-hidden="true" />
            </Link>
          </div>

          <div className={styles.serviceCard}>
            <div className={styles.cardIcon}><Target size={22} aria-hidden="true" /></div>
            <h3 className={styles.cardTitle}>Precision PPC &amp; Paid Media</h3>
            <p className={styles.cardDesc}>
              High-intent Google Ads and LinkedIn B2B funnels targeting High-Net-Worth Individuals (HNWIs) and corporate executives across Manama and Seef.
            </p>
            <Link href="/services/paid-advertising" className={styles.cardLink}>
              Explore Paid Advertising <ChevronRight size={14} aria-hidden="true" />
            </Link>
          </div>

          <div className={styles.serviceCard}>
            <div className={styles.cardIcon}><Database size={22} aria-hidden="true" /></div>
            <h3 className={styles.cardTitle}>CRM &amp; WhatsApp Workflow Automation</h3>
            <p className={styles.cardDesc}>
              Connecting web contact forms, quotation requests, and ad funnels directly into automated WhatsApp Business APIs and centralized sales deal pipelines.
            </p>
            <Link href="/services/crm" className={styles.cardLink}>
              Explore CRM Automation <ChevronRight size={14} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className={styles.section} aria-labelledby="bahrain-faqs" style={{ marginTop: "3.5rem" }}>
        <h2 id="bahrain-faqs" className={styles.sectionTitle}>
          Frequently Asked Questions — Bahrain Services
        </h2>
        <div className={styles.faqList}>
          {BAHRAIN_FAQS.map((faq, index) => (
            <details key={index} className={styles.faqItem}>
              <summary className={styles.faqQuestion}>
                <span>{faq.q}</span>
                <ChevronRight size={18} aria-hidden="true" />
              </summary>
              <div className={styles.faqAnswer}>
                <p>{faq.a}</p>
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* Enterprise SLA, Compliance & Technical Governance Framework */}
      <section style={{ marginTop: "4rem", background: "#f8fafc", padding: "3rem clamp(1.5rem, 4vw, 3rem)", borderRadius: "20px", border: "1px solid #e2e8f0" }}>
        <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#00488e", display: "block", marginBottom: "0.5rem" }}>
          • REGULATORY COMPLIANCE &amp; ARCHITECTURAL PROTOCOL /
        </span>
        <h2 style={{ fontSize: "clamp(1.6rem, 2.5vw, 2rem)", fontWeight: 800, letterSpacing: "-0.02em", color: "#0a0a0a", marginBottom: "1rem" }}>
          Enterprise Digital Standards for Bahrain Commercial Clients
        </h2>
        <p style={{ fontSize: "1rem", lineHeight: 1.65, color: "#4a5568", maxWidth: "860px", marginBottom: "2rem" }}>
          Enterprises operating across Manama, Seef, and the Bahrain Financial Harbour require resilient digital platforms that comply with regional data protection laws while delivering superior customer acquisition velocity. Qubizon combines sovereign compliance frameworks with sub-second web engineering.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))", gap: "1.5rem", marginBottom: "2.5rem" }}>
          <div style={{ background: "#ffffff", padding: "1.75rem", borderRadius: "14px", border: "1px solid #e2e8f0" }}>
            <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#0a0a0a", marginBottom: "0.5rem" }}>
              CBB &amp; Regional Regulatory Alignment
            </h3>
            <p style={{ fontSize: "0.88rem", lineHeight: 1.6, color: "#64748b", margin: 0 }}>
              Our web systems are engineered to meet Central Bank of Bahrain (CBB) regulatory guidelines for digital financial channels, including robust role-based access control (RBAC), end-to-end data encryption, audit trails, and strict HTTP Strict Transport Security (HSTS) headers.
            </p>
          </div>

          <div style={{ background: "#ffffff", padding: "1.75rem", borderRadius: "14px", border: "1px solid #e2e8f0" }}>
            <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#0a0a0a", marginBottom: "0.5rem" }}>
              Sub-Second AWS Middle East (me-south-1) Edge
            </h3>
            <p style={{ fontSize: "0.88rem", lineHeight: 1.6, color: "#64748b", margin: 0 }}>
              With AWS hosting active in the Kingdom of Bahrain (me-south-1), our custom Next.js web applications leverage local edge caching, delivering sub-second Largest Contentful Paint (LCP &lt; 0.8s) across Batelco, stc, and Zain mobile networks.
            </p>
          </div>

          <div style={{ background: "#ffffff", padding: "1.75rem", borderRadius: "14px", border: "1px solid #e2e8f0" }}>
            <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#0a0a0a", marginBottom: "0.5rem" }}>
              Bilingual RTL Arabic Search Authority
            </h3>
            <p style={{ fontSize: "0.88rem", lineHeight: 1.6, color: "#64748b", margin: 0 }}>
              We build bidirectional web architectures with native Right-to-Left (RTL) Arabic typography and localized Google.com.bh entity graphs. This captures high-intent searches from both Bahraini nationals and international expatriate commercial decision-makers.
            </p>
          </div>

          <div style={{ background: "#ffffff", padding: "1.75rem", borderRadius: "14px", border: "1px solid #e2e8f0" }}>
            <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#0a0a0a", marginBottom: "0.5rem" }}>
              Unified WhatsApp &amp; CRM Pipeline Integration
            </h3>
            <p style={{ fontSize: "0.88rem", lineHeight: 1.6, color: "#64748b", margin: 0 }}>
              Every lead captured via Google Search advertising or organic search is instantly routed into your sales team&apos;s CRM via official WhatsApp Business API triggers, ensuring immediate response within minutes to maximize high-ticket transaction conversion rates.
            </p>
          </div>
        </div>

        <div style={{ borderTop: "1px solid #e2e8f0", paddingTop: "1.5rem", fontSize: "0.88rem", color: "#64748b", lineHeight: 1.6 }}>
          <strong>Related Services in the Kingdom of Bahrain:</strong> Learn how we integrate{" "}
          <Link href="/services/web-development" style={{ color: "#00488e", fontWeight: 600, textDecoration: "none" }}>Next.js Web Engineering</Link>,{" "}
          <Link href="/services/seo" style={{ color: "#00488e", fontWeight: 600, textDecoration: "none" }}>Technical Search Optimization</Link>,{" "}
          <Link href="/services/paid-advertising" style={{ color: "#00488e", fontWeight: 600, textDecoration: "none" }}>Performance PPC Advertising</Link>, and{" "}
          <Link href="/solutions" style={{ color: "#00488e", fontWeight: 600, textDecoration: "none" }}>Enterprise AI Solutions</Link> for commercial scale.
        </div>
      </section>

      {/* Bahrain Key Commercial Sectors Framework */}
      <section style={{ marginTop: "3.5rem", background: "#ffffff", padding: "3rem clamp(1.5rem, 4vw, 3rem)", borderRadius: "20px", border: "1px solid #e2e8f0" }}>
        <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#00488e", display: "block", marginBottom: "0.5rem" }}>
          • MANAMA &amp; SEEF COMMERCIAL HUBS /
        </span>
        <h2 style={{ fontSize: "clamp(1.5rem, 2.4vw, 2.1rem)", fontWeight: 800, letterSpacing: "-0.02em", color: "#0a0a0a", marginBottom: "1rem" }}>
          Specialized Digital Architecture for Bahrain Verticals
        </h2>
        <p style={{ fontSize: "1rem", lineHeight: 1.65, color: "#4a5568", maxWidth: "860px", marginBottom: "2rem" }}>
          From the financial institutions of Bahrain Financial Harbour to commercial developers in Amwaj Islands and retail conglomerates in Seef, we architect custom digital experiences that drive measurable revenue.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))", gap: "1.5rem" }}>
          <div style={{ background: "#f8fafc", padding: "1.75rem", borderRadius: "14px", border: "1px solid #e2e8f0" }}>
            <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "#0a0a0a", marginBottom: "0.5rem" }}>
              Fintech &amp; Islamic Banking Channels
            </h3>
            <p style={{ fontSize: "0.88rem", lineHeight: 1.6, color: "#64748b", margin: 0 }}>
              Engineered with BenefitPay mobile wallet APIs, Sharia-compliant product calculators, encrypted customer onboarding forms, and Central Bank of Bahrain data localization controls.
            </p>
          </div>

          <div style={{ background: "#f8fafc", padding: "1.75rem", borderRadius: "14px", border: "1px solid #e2e8f0" }}>
            <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "#0a0a0a", marginBottom: "0.5rem" }}>
              Luxury Real Estate &amp; Island Developments
            </h3>
            <p style={{ fontSize: "0.88rem", lineHeight: 1.6, color: "#64748b", margin: 0 }}>
              Interactive project masterplans, GCC investor acquisition campaigns targeting high-net-worth Saudi and Kuwaiti buyers, and automated WhatsApp lead qualification funnels.
            </p>
          </div>

          <div style={{ background: "#f8fafc", padding: "1.75rem", borderRadius: "14px", border: "1px solid #e2e8f0" }}>
            <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "#0a0a0a", marginBottom: "0.5rem" }}>
              Maritime Logistics &amp; Port Trade
            </h3>
            <p style={{ fontSize: "0.88rem", lineHeight: 1.6, color: "#64748b", margin: 0 }}>
              Custom cargo quotation engines, container tracking status integrations, and King Fahd Causeway B2B trade directories capturing commercial procurement intent.
            </p>
          </div>

          <div style={{ background: "#f8fafc", padding: "1.75rem", borderRadius: "14px", border: "1px solid #e2e8f0" }}>
            <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "#0a0a0a", marginBottom: "0.5rem" }}>
              Healthcare &amp; Medical Tourism Portals
            </h3>
            <p style={{ fontSize: "0.88rem", lineHeight: 1.6, color: "#64748b", margin: 0 }}>
              Patient appointment booking systems compliant with National Health Regulatory Authority (NHRA) standards, featuring dual Arabic/English interfaces, doctor credential directories, and secure tele-consultation lead funnels.
            </p>
          </div>
        </div>
      </section>

      {/* Bottom CTA Card */}
      <section style={{ marginTop: "4rem", background: "linear-gradient(135deg, #0b1530 0%, #00488e 100%)", borderRadius: "24px", padding: "clamp(2.5rem, 5vw, 4rem)", color: "#ffffff", textAlign: "center" }}>
        <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#ffbe0b", display: "block", marginBottom: "0.75rem" }}>
          • PARTNER WITH QUBIZON FOR BAHRAIN MARKET GROWTH /
        </span>
        <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.75rem)", fontWeight: 800, letterSpacing: "-0.02em", color: "#ffffff", marginBottom: "1rem" }}>
          Ready to Out-Engineer Your Competition in Bahrain?
        </h2>
        <p style={{ fontSize: "1rem", color: "rgba(255, 255, 255, 0.8)", maxWidth: "720px", margin: "0 auto 2rem auto", lineHeight: 1.65 }}>
          Schedule a technical discovery session with our senior engineering team to inspect your web architecture, Google.com.bh rankings, and paid acquisition funnels.
        </p>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <Link
            href="/contact?location=bahrain"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "14px 32px",
              background: "#ffbe0b",
              color: "#0a0a0a",
              fontWeight: 700,
              fontSize: "14px",
              borderRadius: "9999px",
              textDecoration: "none",
              textTransform: "uppercase",
              letterSpacing: "0.04em",
            }}
          >
            <span>Book a Technical Discovery Call</span>
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
          <Link
            href="/work"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "14px 28px",
              background: "transparent",
              color: "#ffffff",
              border: "1px solid rgba(255, 255, 255, 0.3)",
              fontWeight: 600,
              fontSize: "14px",
              borderRadius: "9999px",
              textDecoration: "none",
            }}
          >
            <span>Inspect Our Benchmarks</span>
          </Link>
        </div>
      </section>
    </div>
  );
}

