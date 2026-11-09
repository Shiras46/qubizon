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
  title: "Web Development & Marketing in Kuwait | Qubizon",
  description:
    "Next.js web development, technical SEO, high-intent PPC advertising, and CRM automation for high-growth enterprises in Kuwait City and across Kuwait.",
  path: "/locations/kuwait",
  keywords: [
    "Digital Marketing Company Kuwait",
    "Web Development Company Kuwait City",
    "Best Digital Marketing Agency Kuwait",
    "Next.js Web Development Kuwait",
    "SEO Agency Kuwait",
    "PPC Advertising Agency Kuwait",
    "B2B Web Architecture Kuwait",
  ],
});

const KUWAIT_FAQS = [
  {
    q: "How does Qubizon partner with enterprises and commercial groups in Kuwait?",
    a: "We provide high-velocity cross-border digital engineering aligned with Arabia Standard Time (AST, UTC+3). With just a 2.5-hour time difference from our senior engineering centers and direct flights connecting Kuwait City to Kerala, our practitioners maintain real-time Slack and WhatsApp collaboration, bi-weekly sprint reviews, and in-person consultations in Kuwait when required.",
  },
  {
    q: "Can you design bilingual Arabic and English e-commerce platforms for Kuwait consumers?",
    a: "Yes. We engineer high-speed Next.js storefronts with native Right-to-Left (RTL) Arabic typography, sub-second product filtering, and multi-currency checkouts supporting KNET and international credit cards.",
  },
  {
    q: "What digital advertising channels generate the strongest return on investment in Kuwait?",
    a: "In Kuwait's affluent market, high-intent Google Search advertising combined with executive LinkedIn B2B funnels and targeted Meta/Instagram campaigns connected directly to automated WhatsApp lead response workflows yield exceptional conversion rates and lower customer acquisition costs.",
  },
  {
    q: "How do you structure code ownership and data confidentiality for Kuwait clients?",
    a: "You retain 100% legal ownership of all code repositories, Git commits, ad accounts, and analytics data from day one. We sign mutual non-disclosure agreements (NDAs) before evaluating any proprietary systems or growth roadmaps.",
  },
];

export default function KuwaitLocationPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_CONFIG.domain },
          { "@type": "ListItem", position: 2, name: "Service Areas", item: `${SITE_CONFIG.domain}/locations` },
          { "@type": "ListItem", position: 3, name: "Kuwait Hub", item: `${SITE_CONFIG.domain}/locations/kuwait` },
        ],
      },
      {
        "@type": "Service",
        "@id": `${SITE_CONFIG.domain}/locations/kuwait#service`,
        name: "Enterprise Web Development & Digital Marketing in Kuwait",
        provider: { "@id": `${SITE_CONFIG.domain}/#organization` },
        serviceType: "Next.js Web Engineering, Technical SEO, Performance PPC, CRM Automation",
        areaServed: [
          {
            "@type": "Country",
            name: "Kuwait",
          },
          {
            "@type": "City",
            name: "Kuwait City",
            containedInPlace: { "@type": "Country", name: "Kuwait" },
          },
        ],
        description:
          "Enterprise Next.js web application engineering, technical search engine optimization, performance PPC marketing, and CRM automation for commercial enterprises across Kuwait City and Kuwait.",
      },
      {
        "@type": "FAQPage",
        mainEntity: KUWAIT_FAQS.map((faq) => ({
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
          <li aria-current="page">Kuwait Hub</li>
        </ul>
      </nav>

      {/* Hero Header */}
      <header className={styles.hero}>
        <div className={styles.badge}>
          <Globe2 size={14} aria-hidden="true" />
          <span>GCC Expansion • Kuwait City • Al Ahmadi • Hawalli</span>
        </div>
        <h1 className={styles.title}>
          Enterprise Web Development &amp; <span className="calligraphy">Digital Growth in Kuwait</span>
        </h1>
        <p className={styles.lead}>
          Empowering premier corporate groups, retail leaders, healthcare institutions, and digital innovators across Kuwait City and Hawalli. We architect sub-second Next.js web platforms, dominate Google Kuwait search rankings with technical SEO, and execute precision performance advertising campaigns that convert.
        </p>

        <div className={styles.ctaRow}>
          <Link href="/contact?location=kuwait" className={styles.primaryBtn}>
            <span>Schedule Kuwait Discovery Session</span>
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
          <a
            href="https://wa.me/917902911961?text=Hi%20Qubizon%2C%20I%20am%20contacting%20you%20from%20Kuwait%20regarding%20a%20digital%20project."
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondaryBtn}
          >
            <span>Direct WhatsApp Consultation &rarr;</span>
          </a>
        </div>
      </header>

      {/* Why Kuwait Enterprises Choose Qubizon */}
      <section className={styles.section} aria-labelledby="why-kuwait-heading">
        <h2 id="why-kuwait-heading" className={styles.sectionTitle}>
          Why Kuwait Commercial Leaders Partner With Qubizon
        </h2>
        <p className={styles.sectionSubtitle}>
          In Kuwait&apos;s affluent, mobile-centric market, businesses require genuine software engineering and conversion architecture rather than superficial agency templates:
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem", marginTop: "2rem" }}>
          <div style={{ background: "#ffffff", border: "1px solid rgba(0, 0, 0, 0.08)", borderRadius: "16px", padding: "1.75rem", boxShadow: "0 2px 12px rgba(0,0,0,0.03)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "0.75rem" }}>
              <Zap size={22} style={{ color: "var(--brand-blue, #00488e)" }} aria-hidden="true" />
              <h3 style={{ fontSize: "1.15rem", fontWeight: 700, margin: 0, color: "#0a0a0a" }}>Sub-Second Mobile Speeds</h3>
            </div>
            <p style={{ fontSize: "0.925rem", color: "#64748b", lineHeight: 1.6, margin: 0 }}>
              With Kuwait having one of the world&apos;s highest smartphone and 5G penetration rates, our Next.js App Router applications load in under 1.2 seconds with zero visual layout shift.
            </p>
          </div>

          <div style={{ background: "#ffffff", border: "1px solid rgba(0, 0, 0, 0.08)", borderRadius: "16px", padding: "1.75rem", boxShadow: "0 2px 12px rgba(0,0,0,0.03)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "0.75rem" }}>
              <Globe2 size={22} style={{ color: "var(--brand-blue, #00488e)" }} aria-hidden="true" />
              <h3 style={{ fontSize: "1.15rem", fontWeight: 700, margin: 0, color: "#0a0a0a" }}>Bilingual Arabic &amp; English RTL</h3>
            </div>
            <p style={{ fontSize: "0.925rem", color: "#64748b", lineHeight: 1.6, margin: 0 }}>
              Native Right-to-Left (RTL) Arabic styling, customized Arabic web font pipelines, and bidirectional UI design providing effortless navigation for Kuwaiti consumers and international expatriates.
            </p>
          </div>

          <div style={{ background: "#ffffff", border: "1px solid rgba(0, 0, 0, 0.08)", borderRadius: "16px", padding: "1.75rem", boxShadow: "0 2px 12px rgba(0,0,0,0.03)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "0.75rem" }}>
              <Clock size={22} style={{ color: "var(--brand-blue, #00488e)" }} aria-hidden="true" />
              <h3 style={{ fontSize: "1.15rem", fontWeight: 700, margin: 0, color: "#0a0a0a" }}>Real-Time AST Time-Zone Overlap</h3>
            </div>
            <p style={{ fontSize: "0.925rem", color: "#64748b", lineHeight: 1.6, margin: 0 }}>
              Operating with only a 2.5-hour time difference from Kuwait City, our senior practitioners maintain synchronous daily standups, instant Slack messaging, and rapid execution on campaign optimizations.
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

      {/* Core Services for Kuwait */}
      <section className={styles.section} aria-labelledby="kuwait-services-heading" style={{ marginTop: "3.5rem" }}>
        <h2 id="kuwait-services-heading" className={styles.sectionTitle}>
          Integrated Capabilities for the Kuwait Market
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
            <h3 className={styles.cardTitle}>Technical SEO &amp; Google Kuwait Dominance</h3>
            <p className={styles.cardDesc}>
              Structured Schema.org entity graphs, crawl budget engineering, and bilingual keyword clustering to capture high-value commercial queries in Kuwait.
            </p>
            <Link href="/services/seo" className={styles.cardLink}>
              Explore Technical SEO <ChevronRight size={14} aria-hidden="true" />
            </Link>
          </div>

          <div className={styles.serviceCard}>
            <div className={styles.cardIcon}><Target size={22} aria-hidden="true" /></div>
            <h3 className={styles.cardTitle}>Precision PPC &amp; Paid Media</h3>
            <p className={styles.cardDesc}>
              High-intent Google Ads and LinkedIn B2B funnels targeting High-Net-Worth Individuals (HNWIs) and corporate executives across Kuwait City.
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
      <section className={styles.section} aria-labelledby="kuwait-faqs" style={{ marginTop: "3.5rem" }}>
        <h2 id="kuwait-faqs" className={styles.sectionTitle}>
          Frequently Asked Questions — Kuwait Services
        </h2>
        <div className={styles.faqList}>
          {KUWAIT_FAQS.map((faq, index) => (
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
        <h2 style={{ fontSize: "clamp(1.6rem, 2.5vw, 2.1rem)", fontWeight: 800, letterSpacing: "-0.02em", color: "#0a0a0a", marginBottom: "1rem" }}>
          Enterprise Digital Standards for Kuwait Commercial Clients
        </h2>
        <p style={{ fontSize: "1rem", lineHeight: 1.65, color: "#4a5568", maxWidth: "860px", marginBottom: "2rem" }}>
          Commercial organizations operating across Kuwait City, Shuwaikh Industrial Area, Salmiya, and Hawally operate in a high-purchasing-power digital environment where mobile commerce exceeds 85% of total transactions. Qubizon builds robust Next.js digital platforms that combine local payment rails with sub-second performance.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))", gap: "1.5rem", marginBottom: "2.5rem" }}>
          <div style={{ background: "#ffffff", padding: "1.75rem", borderRadius: "14px", border: "1px solid #e2e8f0" }}>
            <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#0a0a0a", marginBottom: "0.5rem" }}>
              Native KNET &amp; CBK Payment Integration
            </h3>
            <p style={{ fontSize: "0.88rem", lineHeight: 1.6, color: "#64748b", margin: 0 }}>
              Kuwait consumers overwhelmingly prefer KNET debit payment gateways. Our headless e-commerce and billing systems directly integrate with official KNET payment aggregators (Hesabe, Tap, MyFatoorah, UPAY) with automated callback verification, multi-factor OTP validation, and full Central Bank of Kuwait (CBK) data sovereignty compliance.
            </p>
          </div>

          <div style={{ background: "#ffffff", padding: "1.75rem", borderRadius: "14px", border: "1px solid #e2e8f0" }}>
            <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#0a0a0a", marginBottom: "0.5rem" }}>
              GCC Edge Caching &amp; 5G Network Optimization
            </h3>
            <p style={{ fontSize: "0.88rem", lineHeight: 1.6, color: "#64748b", margin: 0 }}>
              With Kuwait boasting some of the world&apos;s fastest 5G mobile networks across Zain, Ooredoo, and STC, user expectations for speed are unforgiving. We deploy serverless edge caching nodes across regional cloud points of presence, ensuring Largest Contentful Paint (LCP &lt; 0.9s) and zero layout shifts.
            </p>
          </div>

          <div style={{ background: "#ffffff", padding: "1.75rem", borderRadius: "14px", border: "1px solid #e2e8f0" }}>
            <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#0a0a0a", marginBottom: "0.5rem" }}>
              Arabic RTL Knowledge Graph &amp; Google.com.kw Authority
            </h3>
            <p style={{ fontSize: "0.88rem", lineHeight: 1.6, color: "#64748b", margin: 0 }}>
              We build bidirectional web architectures with semantic Right-to-Left (RTL) Arabic typography, proper schema markup, and localized Kuwait keyword clustering. This captures premium high-intent searches from Kuwaiti family offices, government procurement teams, and retail consumers.
            </p>
          </div>

          <div style={{ background: "#ffffff", padding: "1.75rem", borderRadius: "14px", border: "1px solid #e2e8f0" }}>
            <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#0a0a0a", marginBottom: "0.5rem" }}>
              Instant WhatsApp Business Pipeline Routing
            </h3>
            <p style={{ fontSize: "0.88rem", lineHeight: 1.6, color: "#64748b", margin: 0 }}>
              In the Kuwait market, WhatsApp is the definitive sales closing channel. Every lead inquiry from your Google Ads, Instagram campaigns, or organic search traffic instantly triggers official WhatsApp Business API webhooks, alerting your sales reps within 30 seconds to initiate high-touch deal discussions.
            </p>
          </div>
        </div>

        <div style={{ borderTop: "1px solid #e2e8f0", paddingTop: "1.5rem", fontSize: "0.88rem", color: "#64748b", lineHeight: 1.6 }}>
          <strong>Related Services in the State of Kuwait:</strong> Discover how we integrate{" "}
          <Link href="/services/web-development" style={{ color: "#00488e", fontWeight: 600, textDecoration: "none" }}>Next.js Web Development</Link>,{" "}
          <Link href="/services/seo" style={{ color: "#00488e", fontWeight: 600, textDecoration: "none" }}>Kuwait Technical SEO</Link>,{" "}
          <Link href="/services/paid-advertising" style={{ color: "#00488e", fontWeight: 600, textDecoration: "none" }}>High-ROAS Google Ads</Link>, and{" "}
          <Link href="/services/crm" style={{ color: "#00488e", fontWeight: 600, textDecoration: "none" }}>Omnichannel CRM Automation</Link> for established Kuwait enterprises. Explore our sector solutions for{" "}
          <Link href="/industries" style={{ color: "#00488e", fontWeight: 600, textDecoration: "none" }}>Kuwait Real Estate &amp; Retail</Link>.
        </div>
      </section>

      {/* Kuwait Key Commercial Sectors Framework */}
      <section style={{ marginTop: "3.5rem", background: "#ffffff", padding: "3rem clamp(1.5rem, 4vw, 3rem)", borderRadius: "20px", border: "1px solid #e2e8f0" }}>
        <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#00488e", display: "block", marginBottom: "0.5rem" }}>
          • KUWAIT CITY &amp; SHUWAIKH COMMERCIAL HUBS /
        </span>
        <h2 style={{ fontSize: "clamp(1.5rem, 2.4vw, 2.1rem)", fontWeight: 800, letterSpacing: "-0.02em", color: "#0a0a0a", marginBottom: "1rem" }}>
          Specialized Digital Architecture for Kuwait Verticals
        </h2>
        <p style={{ fontSize: "1rem", lineHeight: 1.65, color: "#4a5568", maxWidth: "860px", marginBottom: "2rem" }}>
          From established family conglomerates in Kuwait City to retail brands across Salmiya and industrial suppliers in Shuwaikh, our systems are engineered for Kuwait&apos;s unique consumer purchasing power.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))", gap: "1.5rem" }}>
          <div style={{ background: "#f8fafc", padding: "1.75rem", borderRadius: "14px", border: "1px solid #e2e8f0" }}>
            <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "#0a0a0a", marginBottom: "0.5rem" }}>
              Luxury Retail &amp; Headless E-Commerce
            </h3>
            <p style={{ fontSize: "0.88rem", lineHeight: 1.6, color: "#64748b", margin: 0 }}>
              Tailored for Kuwait&apos;s high average order values (AOV). Sub-second product filtering, zero layout shift, seamless KNET debit payment checkout, and automated WhatsApp order tracking.
            </p>
          </div>

          <div style={{ background: "#f8fafc", padding: "1.75rem", borderRadius: "14px", border: "1px solid #e2e8f0" }}>
            <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "#0a0a0a", marginBottom: "0.5rem" }}>
              Automotive Showrooms &amp; Garages
            </h3>
            <p style={{ fontSize: "0.88rem", lineHeight: 1.6, color: "#64748b", margin: 0 }}>
              Interactive vehicle inventory showcases, service booking slots with WhatsApp reminders, digital job cards, and geo-targeted Google Ads capturing emergency service requests.
            </p>
          </div>

          <div style={{ background: "#f8fafc", padding: "1.75rem", borderRadius: "14px", border: "1px solid #e2e8f0" }}>
            <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "#0a0a0a", marginBottom: "0.5rem" }}>
              Commercial Real Estate &amp; Office Leasing
            </h3>
            <p style={{ fontSize: "0.88rem", lineHeight: 1.6, color: "#64748b", margin: 0 }}>
              Digital leasing agreement portals, floorplan download lead gates, investor discovery funnels, and real-time CRM lead routing to Kuwait commercial leasing executives.
            </p>
          </div>
        </div>
      </section>

      {/* Bottom CTA Card */}
      <section style={{ marginTop: "4rem", background: "linear-gradient(135deg, #0b1530 0%, #00488e 100%)", borderRadius: "24px", padding: "clamp(2.5rem, 5vw, 4rem)", color: "#ffffff", textAlign: "center" }}>
        <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#ffbe0b", display: "block", marginBottom: "0.75rem" }}>
          • PARTNER WITH QUBIZON FOR KUWAIT MARKET GROWTH /
        </span>
        <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.75rem)", fontWeight: 800, letterSpacing: "-0.02em", color: "#ffffff", marginBottom: "1rem" }}>
          Ready to Out-Engineer Your Competition in Kuwait?
        </h2>
        <p style={{ fontSize: "1rem", color: "rgba(255, 255, 255, 0.8)", maxWidth: "720px", margin: "0 auto 2rem auto", lineHeight: 1.65 }}>
          Schedule a technical discovery session with our senior engineering team to inspect your web architecture, Google.com.kw rankings, and paid acquisition funnels.
        </p>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <Link
            href="/contact?location=kuwait"
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

