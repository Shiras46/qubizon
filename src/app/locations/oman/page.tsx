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
  title: "Web Development & Digital Marketing in Oman | Qubizon",
  description:
    "Next.js web development, technical SEO, high-intent PPC advertising, and CRM automation for growing enterprises across Muscat, Sohar, and the Sultanate of Oman.",
  path: "/locations/oman",
  keywords: [
    "Digital Marketing Company Oman",
    "Web Development Company Muscat",
    "Best Digital Marketing Agency Oman",
    "Next.js Web Development Muscat",
    "SEO Agency Oman",
    "PPC Advertising Agency Muscat",
    "B2B Web Architecture Oman",
    "Oman Vision 2040 Digital Solutions",
  ],
});

const OMAN_FAQS = [
  {
    q: "How does Qubizon collaborate with enterprises across the Sultanate of Oman?",
    a: "We provide high-velocity cross-border digital engineering aligned with Gulf Standard Time (GST, UTC+4). With only a 1.5-hour time difference from our senior engineering center and multiple direct daily flights connecting Muscat to Kerala, our engineering leads participate in live sprint standups, strategic planning, and in-person consultations across Muscat and Sohar.",
  },
  {
    q: "Can you build bilingual Arabic and English websites optimized for Oman's local market?",
    a: "Yes. We engineer bi-directional web platforms with native Right-to-Left (RTL) Arabic typography, sub-second web font rendering, and localized schema markup optimized for Google.com.om to connect with both Omani citizens and international business stakeholders.",
  },
  {
    q: "What digital marketing strategies deliver the highest conversion rates in Oman?",
    a: "High-intent Google Search advertising combined with localized SEO and targeted Meta/Instagram campaigns connected directly to automated WhatsApp lead response systems generate exceptional engagement. In Oman's relationship-driven commercial market, rapid conversational response is the decisive factor in deal conversion.",
  },
  {
    q: "How do you guarantee code ownership, intellectual property, and data confidentiality?",
    a: "You retain 100% legal ownership of your code repositories, Git branches, ad accounts, and analytics properties from the first commit. We sign legally enforceable bilateral non-disclosure agreements (NDAs) prior to discussing any proprietary workflows or commercial roadmaps.",
  },
];

export default function OmanLocationPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_CONFIG.domain },
          { "@type": "ListItem", position: 2, name: "Service Areas", item: `${SITE_CONFIG.domain}/locations` },
          { "@type": "ListItem", position: 3, name: "Oman Hub", item: `${SITE_CONFIG.domain}/locations/oman` },
        ],
      },
      {
        "@type": "Service",
        "@id": `${SITE_CONFIG.domain}/locations/oman#service`,
        name: "Enterprise Web Development & Digital Marketing in Oman",
        provider: { "@id": `${SITE_CONFIG.domain}/#organization` },
        serviceType: "Next.js Web Engineering, Technical SEO, Performance PPC, CRM Automation",
        areaServed: [
          {
            "@type": "Country",
            name: "Oman",
          },
          {
            "@type": "City",
            name: "Muscat",
            containedInPlace: { "@type": "Country", name: "Oman" },
          },
          {
            "@type": "City",
            name: "Sohar",
            containedInPlace: { "@type": "Country", name: "Oman" },
          },
        ],
        description:
          "Enterprise Next.js web application development, technical search engine optimization, performance PPC marketing, and CRM automation for commercial enterprises across Muscat, Sohar, and Oman.",
      },
      {
        "@type": "FAQPage",
        mainEntity: OMAN_FAQS.map((faq) => ({
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
    <div className={styles.container}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className={styles.breadcrumbs}>
        <ol>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <ChevronRight size={14} aria-hidden="true" />
            <Link href="/locations">Service Areas</Link>
          </li>
          <li aria-current="page">
            <ChevronRight size={14} aria-hidden="true" />
            <span>Oman Hub</span>
          </li>
        </ol>
      </nav>

      {/* Hero Header */}
      <header className={styles.header}>
        <div className={styles.regionBadge}>
          <Globe2 size={15} aria-hidden="true" />
          <span>SULTANATE OF OMAN & GCC COMMERCIAL CORRIDOR</span>
        </div>
        <h1 className={styles.title}>
          Premier Web Development & Digital Marketing in Oman
        </h1>
        <p className={styles.subtitle}>
          Senior cross-border digital engineering for high-growth enterprises across Muscat, Sohar, and Salalah. We combine modern Next.js 15 web applications, technical SEO, performance paid advertising, and automated lead management systems to accelerate your commercial revenue under Oman Vision 2040.
        </p>

        <div className={styles.statsStrip}>
          <div className={styles.statCard}>
            <span className={styles.statValue}>1.5 hrs</span>
            <span className={styles.statLabel}>Time Difference (GST, UTC+4)</span>
          </div>
          <div className={styles.statCard}>
            <span className={styles.statValue}>100%</span>
            <span className={styles.statLabel}>Direct Code & Ad Account Ownership</span>
          </div>
          <div className={styles.statCard}>
            <span className={styles.statValue}>&lt; 1.0s</span>
            <span className={styles.statLabel}>Median LCP Across GCC Networks</span>
          </div>
          <div className={styles.statCard}>
            <span className={styles.statValue}>Bilingual</span>
            <span className={styles.statLabel}>Native RTL Arabic & English UX</span>
          </div>
        </div>
      </header>

      {/* Why Qubizon for Oman Enterprises */}
      <section style={{ marginTop: "3.5rem" }}>
        <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#00488e", display: "block", marginBottom: "0.5rem" }}>
          • STRATEGIC CAPABILITY /
        </span>
        <h2 style={{ fontSize: "clamp(1.75rem, 3vw, 2.25rem)", fontWeight: 800, letterSpacing: "-0.02em", color: "#0a0a0a", marginBottom: "1.25rem" }}>
          Why Oman&apos;s Leading Enterprises Partner with Qubizon
        </h2>
        <p style={{ fontSize: "1.05rem", lineHeight: 1.7, color: "#4a5568", maxWidth: "880px", marginBottom: "2rem" }}>
          As the Sultanate of Oman advances toward its Vision 2040 diversification goals, businesses across Muscat and industrial hubs like Sohar require scalable digital infrastructure that outperforms traditional agency retainers. Qubizon delivers senior engineering rigor, transparent project delivery, and verifiable search engine visibility without the inflated agency overheads common in the Gulf region.
        </p>

        <div className={styles.solutionsGrid}>
          <div className={styles.solutionCard}>
            <Code2 size={24} style={{ color: "#00488e", marginBottom: "1rem" }} aria-hidden="true" />
            <h3 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "0.5rem", color: "#0a0a0a" }}>
              Next.js 15 Web Applications
            </h3>
            <p style={{ fontSize: "0.92rem", lineHeight: 1.6, color: "#4a5568" }}>
              Custom server-rendered React and Next.js applications engineered for enterprise reliability, instantaneous Core Web Vitals, and seamless bilingual Arabic/English switching.
            </p>
          </div>

          <div className={styles.solutionCard}>
            <Search size={24} style={{ color: "#00488e", marginBottom: "1rem" }} aria-hidden="true" />
            <h3 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "0.5rem", color: "#0a0a0a" }}>
              Technical SEO on Google.com.om
            </h3>
            <p style={{ fontSize: "0.92rem", lineHeight: 1.6, color: "#4a5568" }}>
              Comprehensive on-page, semantic entity, and technical search engine optimization designed to capture high-value commercial search intent in Muscat, Sohar, and regional GCC markets.
            </p>
          </div>

          <div className={styles.solutionCard}>
            <Target size={24} style={{ color: "#00488e", marginBottom: "1rem" }} aria-hidden="true" />
            <h3 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "0.5rem", color: "#0a0a0a" }}>
              Performance PPC & Social Funnels
            </h3>
            <p style={{ fontSize: "0.92rem", lineHeight: 1.6, color: "#4a5568" }}>
              High-intent Google Ads search campaigns, executive LinkedIn account targeting, and localized Instagram ads managed strictly to verified customer acquisition cost (CAC) and ROAS.
            </p>
          </div>

          <div className={styles.solutionCard}>
            <Database size={24} style={{ color: "#00488e", marginBottom: "1rem" }} aria-hidden="true" />
            <h3 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "0.5rem", color: "#0a0a0a" }}>
              B2B CRM & WhatsApp Lead Systems
            </h3>
            <p style={{ fontSize: "0.92rem", lineHeight: 1.6, color: "#4a5568" }}>
              Unified CRM pipelines connecting incoming web forms and official WhatsApp Business API triggers directly into your sales team&apos;s workflow with automated SLA escalation.
            </p>
          </div>
        </div>
      </section>

      {/* Industrial & Commercial Sectors */}
      <section style={{ marginTop: "4rem", background: "#f8fafc", padding: "3rem clamp(1.5rem, 4vw, 3rem)", borderRadius: "20px", border: "1px solid #e2e8f0" }}>
        <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#00488e", display: "block", marginBottom: "0.5rem" }}>
          • SECTOR SPECIALIZATIONS /
        </span>
        <h2 style={{ fontSize: "clamp(1.6rem, 2.5vw, 2rem)", fontWeight: 800, letterSpacing: "-0.02em", color: "#0a0a0a", marginBottom: "1rem" }}>
          Digital Solutions Tailored to Oman&apos;s Economic Pillars
        </h2>
        <p style={{ fontSize: "1rem", lineHeight: 1.65, color: "#4a5568", maxWidth: "820px", marginBottom: "2rem" }}>
          Our engineering frameworks are mapped directly to the commercial realities and regulatory frameworks of key industries operating across the Sultanate.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
          <div style={{ background: "#ffffff", padding: "1.75rem", borderRadius: "14px", border: "1px solid #e2e8f0" }}>
            <Building2 size={22} style={{ color: "#00488e", marginBottom: "0.75rem" }} aria-hidden="true" />
            <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#0a0a0a", marginBottom: "0.5rem" }}>
              Logistics, Ports & Industrial Supply (Sohar & Salalah)
            </h3>
            <p style={{ fontSize: "0.88rem", lineHeight: 1.6, color: "#64748b" }}>
              Enterprise portal development, freight tracking dashboards, and international trade lead capture architectures designed for maritime logistics and free zone manufacturers.
            </p>
          </div>

          <div style={{ background: "#ffffff", padding: "1.75rem", borderRadius: "14px", border: "1px solid #e2e8f0" }}>
            <Sparkles size={22} style={{ color: "#00488e", marginBottom: "0.75rem" }} aria-hidden="true" />
            <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#0a0a0a", marginBottom: "0.5rem" }}>
              Hospitality, Eco-Tourism & Real Estate (Muscat)
            </h3>
            <p style={{ fontSize: "0.88rem", lineHeight: 1.6, color: "#64748b" }}>
              Ultra-fast experiential websites with integrated direct booking engines, multi-currency payment gateways, and international search visibility for luxury resorts and developments.
            </p>
          </div>

          <div style={{ background: "#ffffff", padding: "1.75rem", borderRadius: "14px", border: "1px solid #e2e8f0" }}>
            <Zap size={22} style={{ color: "#00488e", marginBottom: "0.75rem" }} aria-hidden="true" />
            <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#0a0a0a", marginBottom: "0.5rem" }}>
              Retail, Automotive & Field Services
            </h3>
            <p style={{ fontSize: "0.88rem", lineHeight: 1.6, color: "#64748b" }}>
              Omnichannel inventory sync, automated service booking calendars, and localized WhatsApp commerce flows enabling continuous sales conversion across the Sultanate.
            </p>
          </div>
        </div>
      </section>

      {/* Cross-Border Engineering Collaboration */}
      <section style={{ marginTop: "4rem" }}>
        <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#00488e", display: "block", marginBottom: "0.5rem" }}>
          • COLLABORATION MODEL /
        </span>
        <h2 style={{ fontSize: "clamp(1.6rem, 2.5vw, 2rem)", fontWeight: 800, letterSpacing: "-0.02em", color: "#0a0a0a", marginBottom: "1rem" }}>
          Seamless Cross-Border Engineering Alignment
        </h2>
        <p style={{ fontSize: "1rem", lineHeight: 1.65, color: "#4a5568", maxWidth: "820px", marginBottom: "2rem" }}>
          Operating across the Oman-India commercial corridor combines regional business acumen with deep engineering talent and cost efficiency.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
          <div style={{ border: "1px solid #e2e8f0", padding: "1.75rem", borderRadius: "14px" }}>
            <Clock size={20} style={{ color: "#00488e", marginBottom: "0.75rem" }} aria-hidden="true" />
            <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "#0a0a0a", marginBottom: "0.5rem" }}>
              Same-Time-Zone Standups
            </h3>
            <p style={{ fontSize: "0.88rem", lineHeight: 1.6, color: "#64748b" }}>
              With only 90 minutes difference (GST, UTC+4), your operational hours overlap almost 100% with our development teams, guaranteeing real-time communication during your active workday.
            </p>
          </div>

          <div style={{ border: "1px solid #e2e8f0", padding: "1.75rem", borderRadius: "14px" }}>
            <ShieldCheck size={20} style={{ color: "#00488e", marginBottom: "0.75rem" }} aria-hidden="true" />
            <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "#0a0a0a", marginBottom: "0.5rem" }}>
              HSTS & Enterprise Security
            </h3>
            <p style={{ fontSize: "0.88rem", lineHeight: 1.6, color: "#64748b" }}>
              Every web property is secured with A+ SSL/TLS configurations, HTTP Strict Transport Security (HSTS), server-side input sanitization, and compliance with regional data protection standards.
            </p>
          </div>

          <div style={{ border: "1px solid #e2e8f0", padding: "1.75rem", borderRadius: "14px" }}>
            <Globe2 size={20} style={{ color: "#00488e", marginBottom: "0.75rem" }} aria-hidden="true" />
            <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "#0a0a0a", marginBottom: "0.5rem" }}>
              Direct Flight Connectivity
            </h3>
            <p style={{ fontSize: "0.88rem", lineHeight: 1.6, color: "#64748b" }}>
              Multiple daily non-stop flights connect Muscat International Airport (MCT) with Kerala, making executive planning retreats and in-person technical workshops exceptionally convenient.
            </p>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section style={{ marginTop: "4rem" }}>
        <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#00488e", display: "block", marginBottom: "0.5rem" }}>
          • ANSWERS & CLARIFICATIONS /
        </span>
        <h2 style={{ fontSize: "clamp(1.6rem, 2.5vw, 2rem)", fontWeight: 800, letterSpacing: "-0.02em", color: "#0a0a0a", marginBottom: "2rem" }}>
          Frequently Asked Questions for Oman Commercial Clients
        </h2>
        <div className={styles.faqList}>
          {OMAN_FAQS.map((faq, index) => (
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

      {/* Bottom CTA Card */}
      <section style={{ marginTop: "4rem", background: "linear-gradient(135deg, #0b1530 0%, #00488e 100%)", borderRadius: "24px", padding: "clamp(2.5rem, 5vw, 4rem)", color: "#ffffff", textAlign: "center" }}>
        <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#ffbe0b", display: "block", marginBottom: "0.75rem" }}>
          • PARTNER WITH QUBIZON FOR OMAN COMMERCIAL GROWTH /
        </span>
        <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.75rem)", fontWeight: 800, letterSpacing: "-0.02em", color: "#ffffff", marginBottom: "1rem" }}>
          Accelerate Your Enterprise Growth in the Sultanate of Oman
        </h2>
        <p style={{ fontSize: "1rem", color: "rgba(255, 255, 255, 0.8)", maxWidth: "720px", margin: "0 auto 2rem auto", lineHeight: 1.65 }}>
          Schedule a technical discovery session with our senior engineering team to inspect your web architecture, Google.com.om rankings, and paid acquisition funnels.
        </p>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <Link
            href="/contact?location=oman"
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

