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
  title: "Web Development & Marketing in Qatar | Qubizon",
  description:
    "Next.js web development, technical SEO, high-intent PPC advertising, and CRM automation for high-growth enterprises in Doha and across Qatar.",
  path: "/locations/qatar",
  keywords: [
    "Digital Marketing Company Qatar",
    "Web Development Company Doha",
    "Best Digital Marketing Agency Qatar",
    "Next.js Web Development Doha",
    "SEO Agency Qatar",
    "PPC Advertising Agency Doha",
    "B2B Web Architecture Qatar",
  ],
});

const QATAR_FAQS = [
  {
    q: "How does Qubizon partner with enterprises and institutions in Qatar?",
    a: "We provide high-velocity cross-border digital engineering aligned with Arabia Standard Time (AST, UTC+3). With just a 2.5-hour time difference from our senior engineering centers and daily direct flights connecting Doha to Kerala, our practitioners maintain direct real-time communication, transparent sprint reviews, and in-person consultations in Doha when required.",
  },
  {
    q: "Can you engineer bilingual Arabic and English web platforms for Qatar audiences?",
    a: "Yes. We specialize in bi-directional web architecture with native Right-to-Left (RTL) Arabic typography, sub-second font loading, and localized search optimization targeting both Qatari nationals and the extensive international expatriate community on Google.com.qa.",
  },
  {
    q: "What digital marketing channels generate the strongest return on investment in Doha?",
    a: "In Qatar's high-income market, high-intent Google Search advertising combined with executive LinkedIn B2B funnels and targeted Meta/Instagram campaigns connected directly to automated WhatsApp lead response workflows yield exceptional conversion rates and lower customer acquisition costs.",
  },
  {
    q: "How do you structure code ownership and data confidentiality for Qatar clients?",
    a: "You retain 100% legal ownership of all code repositories, Git commits, ad accounts, and analytics data from day one. We sign mutual non-disclosure agreements (NDAs) before evaluating any proprietary systems or growth roadmaps.",
  },
];

export default function QatarLocationPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_CONFIG.domain },
          { "@type": "ListItem", position: 2, name: "Service Areas", item: `${SITE_CONFIG.domain}/locations` },
          { "@type": "ListItem", position: 3, name: "Qatar Hub", item: `${SITE_CONFIG.domain}/locations/qatar` },
        ],
      },
      {
        "@type": "Service",
        "@id": `${SITE_CONFIG.domain}/locations/qatar#service`,
        name: "Enterprise Web Development & Digital Marketing in Qatar",
        provider: { "@id": `${SITE_CONFIG.domain}/#organization` },
        serviceType: "Next.js Web Engineering, Technical SEO, Performance PPC, CRM Automation",
        areaServed: [
          {
            "@type": "Country",
            name: "Qatar",
          },
          {
            "@type": "City",
            name: "Doha",
            containedInPlace: { "@type": "Country", name: "Qatar" },
          },
        ],
        description:
          "Enterprise Next.js web application engineering, technical search engine optimization, performance PPC marketing, and CRM automation for commercial enterprises across Doha and Qatar.",
      },
      {
        "@type": "FAQPage",
        mainEntity: QATAR_FAQS.map((faq) => ({
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
          <li aria-current="page">Qatar Hub</li>
        </ul>
      </nav>

      {/* Hero Header */}
      <header className={styles.hero}>
        <div className={styles.badge}>
          <Globe2 size={14} aria-hidden="true" />
          <span>GCC Expansion • Doha • Lusail • Qatar National Vision 2030</span>
        </div>
        <h1 className={styles.title}>
          Enterprise Web Development &amp; <span className="calligraphy">Digital Growth in Qatar</span>
        </h1>
        <p className={styles.lead}>
          Empowering premier corporate groups, luxury retail brands, real estate innovators, and industrial enterprises across Doha and Lusail. We architect sub-second Next.js web applications, dominate regional search on Google.com.qa, and execute precision performance marketing campaigns that convert.
        </p>

        <div className={styles.ctaRow}>
          <Link href="/contact?location=qatar" className={styles.primaryBtn}>
            <span>Schedule Qatar Discovery Session</span>
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
          <a
            href="https://wa.me/917902911961?text=Hi%20Qubizon%2C%20I%20am%20contacting%20you%20from%20Qatar%20regarding%20a%20digital%20project."
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondaryBtn}
          >
            <span>Direct WhatsApp Consultation &rarr;</span>
          </a>
        </div>
      </header>

      {/* Why Qatar Enterprises Choose Qubizon */}
      <section className={styles.section} aria-labelledby="why-qatar-heading">
        <h2 id="why-qatar-heading" className={styles.sectionTitle}>
          Why Qatar Commercial Leaders Partner With Qubizon
        </h2>
        <p className={styles.sectionSubtitle}>
          In Qatar&apos;s high-income, digitally advanced market, corporate organizations need authentic software engineering rather than superficial agency page builders:
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem", marginTop: "2rem" }}>
          <div style={{ background: "#ffffff", border: "1px solid rgba(0, 0, 0, 0.08)", borderRadius: "16px", padding: "1.75rem", boxShadow: "0 2px 12px rgba(0,0,0,0.03)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "0.75rem" }}>
              <Zap size={22} style={{ color: "var(--brand-blue, #00488e)" }} aria-hidden="true" />
              <h3 style={{ fontSize: "1.15rem", fontWeight: 700, margin: 0, color: "#0a0a0a" }}>Sub-Second 5G Web Performance</h3>
            </div>
            <p style={{ fontSize: "0.925rem", color: "#64748b", lineHeight: 1.6, margin: 0 }}>
              With Qatar boasting world-leading 5G mobile coverage, consumer expectations for page load speed are uncompromising. Our Next.js App Router applications load in under 1.2 seconds with zero visual layout shift.
            </p>
          </div>

          <div style={{ background: "#ffffff", border: "1px solid rgba(0, 0, 0, 0.08)", borderRadius: "16px", padding: "1.75rem", boxShadow: "0 2px 12px rgba(0,0,0,0.03)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "0.75rem" }}>
              <Globe2 size={22} style={{ color: "var(--brand-blue, #00488e)" }} aria-hidden="true" />
              <h3 style={{ fontSize: "1.15rem", fontWeight: 700, margin: 0, color: "#0a0a0a" }}>Bilingual Arabic &amp; English RTL</h3>
            </div>
            <p style={{ fontSize: "0.925rem", color: "#64748b", lineHeight: 1.6, margin: 0 }}>
              Native Right-to-Left (RTL) Arabic styling, customized Arabic web font pipelines, and bidirectional UI design that provides effortless navigation for both Qatari citizens and international executive audiences.
            </p>
          </div>

          <div style={{ background: "#ffffff", border: "1px solid rgba(0, 0, 0, 0.08)", borderRadius: "16px", padding: "1.75rem", boxShadow: "0 2px 12px rgba(0,0,0,0.03)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "0.75rem" }}>
              <Clock size={22} style={{ color: "var(--brand-blue, #00488e)" }} aria-hidden="true" />
              <h3 style={{ fontSize: "1.15rem", fontWeight: 700, margin: 0, color: "#0a0a0a" }}>Real-Time AST Time-Zone Overlap</h3>
            </div>
            <p style={{ fontSize: "0.925rem", color: "#64748b", lineHeight: 1.6, margin: 0 }}>
              Operating with only a 2.5-hour time difference from Doha, our senior practitioners maintain synchronous daily standups, instant Slack messaging, and rapid execution on campaign optimizations.
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

      {/* Core Services for Qatar */}
      <section className={styles.section} aria-labelledby="qatar-services-heading" style={{ marginTop: "3.5rem" }}>
        <h2 id="qatar-services-heading" className={styles.sectionTitle}>
          Integrated Capabilities for the Qatar Market
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
            <h3 className={styles.cardTitle}>Technical SEO &amp; Google.com.qa Dominance</h3>
            <p className={styles.cardDesc}>
              Structured Schema.org entity graphs, crawl budget engineering, and bilingual keyword clustering to capture high-value commercial queries in Qatar.
            </p>
            <Link href="/services/seo" className={styles.cardLink}>
              Explore Technical SEO <ChevronRight size={14} aria-hidden="true" />
            </Link>
          </div>

          <div className={styles.serviceCard}>
            <div className={styles.cardIcon}><Target size={22} aria-hidden="true" /></div>
            <h3 className={styles.cardTitle}>Precision PPC &amp; Paid Media</h3>
            <p className={styles.cardDesc}>
              High-intent Google Ads and LinkedIn B2B funnels targeting High-Net-Worth Individuals (HNWIs) and corporate executives across Doha and Lusail.
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

      {/* Target Industries in Qatar */}
      <section style={{ marginTop: "3.5rem", background: "rgba(255, 255, 255, 0.85)", border: "1px solid rgba(0, 0, 0, 0.08)", borderRadius: "20px", padding: "clamp(2rem, 4vw, 3.5rem)" }}>
        <h2 className={styles.sectionTitle} style={{ textAlign: "center", marginBottom: "1rem" }}>
          Specialized Digital Solutions for Qatar Verticals
        </h2>
        <p className={styles.sectionSubtitle} style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 2.5rem auto" }}>
          We architect digital platforms tailored to the economic requirements of high-priority sectors in Qatar:
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
          <div style={{ background: "#ffffff", border: "1px solid rgba(0, 0, 0, 0.06)", borderRadius: "14px", padding: "1.5rem" }}>
            <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--brand-blue, #00488e)", marginBottom: "0.5rem" }}>
              Real Estate, Lusail &amp; Pearl Developments
            </h3>
            <p style={{ fontSize: "0.9rem", color: "#64748b", lineHeight: 1.6, margin: 0 }}>
              Masterplan showcase portals, investor lead capture engines, and immersive project presentations supporting luxury developments across The Pearl-Qatar and Lusail City.
            </p>
          </div>

          <div style={{ background: "#ffffff", border: "1px solid rgba(0, 0, 0, 0.06)", borderRadius: "14px", padding: "1.5rem" }}>
            <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--brand-blue, #00488e)", marginBottom: "0.5rem" }}>
              Hospitality, Luxury Dining &amp; Tourism
            </h3>
            <p style={{ fontSize: "0.9rem", color: "#64748b", lineHeight: 1.6, margin: 0 }}>
              High-converting direct booking engines, interactive restaurant menus, and multi-lingual global search optimization attracting international guests and affluent residents.
            </p>
          </div>

          <div style={{ background: "#ffffff", border: "1px solid rgba(0, 0, 0, 0.06)", borderRadius: "14px", padding: "1.5rem" }}>
            <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--brand-blue, #00488e)", marginBottom: "0.5rem" }}>
              Healthcare &amp; Specialized Medical Centers
            </h3>
            <p style={{ fontSize: "0.9rem", color: "#64748b", lineHeight: 1.6, margin: 0 }}>
              Patient appointment booking engines, physician specialization directories, and regional healthcare search optimization complying with Qatar Ministry of Public Health standards.
            </p>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className={styles.section} aria-labelledby="qatar-faqs" style={{ marginTop: "3.5rem" }}>
        <h2 id="qatar-faqs" className={styles.sectionTitle}>
          Frequently Asked Questions — Qatar Services
        </h2>
        <div className={styles.faqList}>
          {QATAR_FAQS.map((faq, index) => (
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
          • QATAR NATIONAL VISION 2030 &amp; ARCHITECTURAL PROTOCOL /
        </span>
        <h2 style={{ fontSize: "clamp(1.6rem, 2.5vw, 2.1rem)", fontWeight: 800, letterSpacing: "-0.02em", color: "#0a0a0a", marginBottom: "1rem" }}>
          Enterprise Digital Standards for Qatar Commercial Clients
        </h2>
        <p style={{ fontSize: "1rem", lineHeight: 1.65, color: "#4a5568", maxWidth: "860px", marginBottom: "2rem" }}>
          Leading enterprises across West Bay, Lusail Smart City, The Pearl, and Ras Laffan require scalable digital ecosystems aligned with Qatar National Vision 2030. Qubizon builds sub-second Next.js web applications, high-intent Google.com.qa search knowledge graphs, and automated CRM pipelines designed for Qatar&apos;s premium commercial landscape.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))", gap: "1.5rem", marginBottom: "2.5rem" }}>
          <div style={{ background: "#ffffff", padding: "1.75rem", borderRadius: "14px", border: "1px solid #e2e8f0" }}>
            <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#0a0a0a", marginBottom: "0.5rem" }}>
              Qatar Central Bank (QCB) &amp; QPAY Compliance
            </h3>
            <p style={{ fontSize: "0.88rem", lineHeight: 1.6, color: "#64748b", margin: 0 }}>
              We architect secure checkout and payment workflows integrating directly with Qatar Central Bank compliant gateways (QPAY, Dibsy, SkipCash, Sadad QA). Our payment architectures enforce end-to-end encryption, 3D-Secure 2.0 biometric challenge verification, and zero client-side credential storage.
            </p>
          </div>

          <div style={{ background: "#ffffff", padding: "1.75rem", borderRadius: "14px", border: "1px solid #e2e8f0" }}>
            <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#0a0a0a", marginBottom: "0.5rem" }}>
              Ooredoo &amp; Vodafone Qatar 5G Performance
            </h3>
            <p style={{ fontSize: "0.88rem", lineHeight: 1.6, color: "#64748b", margin: 0 }}>
              Qatar features one of the most technologically advanced digital consumer bases globally. By caching static assets across regional Middle East edge servers and optimizing font asset pipelines, we deliver sub-second Largest Contentful Paint (LCP &lt; 0.85s) across both Ooredoo and Vodafone 5G networks.
            </p>
          </div>

          <div style={{ background: "#ffffff", padding: "1.75rem", borderRadius: "14px", border: "1px solid #e2e8f0" }}>
            <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#0a0a0a", marginBottom: "0.5rem" }}>
              Bilingual Arabic RTL &amp; Google.com.qa Entity Domination
            </h3>
            <p style={{ fontSize: "0.88rem", lineHeight: 1.6, color: "#64748b", margin: 0 }}>
              We develop bidirectional Next.js architectures with native Right-to-Left (RTL) Arabic typography and Schema.org entity graphs. This captures commercial search intent from Qatari government entities, semi-state bodies, and high-net-worth individual investors across both Arabic and English queries.
            </p>
          </div>

          <div style={{ background: "#ffffff", padding: "1.75rem", borderRadius: "14px", border: "1px solid #e2e8f0" }}>
            <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#0a0a0a", marginBottom: "0.5rem" }}>
              Automated High-Ticket Lead Qualification
            </h3>
            <p style={{ fontSize: "0.88rem", lineHeight: 1.6, color: "#64748b", margin: 0 }}>
              In Qatar&apos;s competitive real estate, luxury automotive, and hospitality verticals, rapid response time is critical. Our serverless webhook pipelines route inbound inquiries directly into your CRM and trigger instant WhatsApp Business confirmation messages within seconds of form submission.
            </p>
          </div>
        </div>

        <div style={{ borderTop: "1px solid #e2e8f0", paddingTop: "1.5rem", fontSize: "0.88rem", color: "#64748b", lineHeight: 1.6 }}>
          <strong>Related Services in the State of Qatar:</strong> Explore our specialized capabilities in{" "}
          <Link href="/services/web-development" style={{ color: "#00488e", fontWeight: 600, textDecoration: "none" }}>Qatar Web Architecture</Link>,{" "}
          <Link href="/services/seo" style={{ color: "#00488e", fontWeight: 600, textDecoration: "none" }}>Doha Technical SEO</Link>,{" "}
          <Link href="/services/paid-advertising" style={{ color: "#00488e", fontWeight: 600, textDecoration: "none" }}>Performance Google Ads</Link>, and{" "}
          <Link href="/services/crm" style={{ color: "#00488e", fontWeight: 600, textDecoration: "none" }}>CRM Pipeline Automation</Link>. Learn more about our solutions for{" "}
          <Link href="/industries" style={{ color: "#00488e", fontWeight: 600, textDecoration: "none" }}>Qatar Hospitality &amp; Real Estate</Link>.
        </div>
      </section>

      {/* Qatar Doha & Lusail Commercial Framework */}
      <section style={{ marginTop: "3.5rem", background: "#ffffff", padding: "3rem clamp(1.5rem, 4vw, 3rem)", borderRadius: "20px", border: "1px solid #e2e8f0" }}>
        <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#00488e", display: "block", marginBottom: "0.5rem" }}>
          • DOHA &amp; LUSAIL DIGITAL CORRIDORS /
        </span>
        <h2 style={{ fontSize: "clamp(1.5rem, 2.4vw, 2.1rem)", fontWeight: 800, letterSpacing: "-0.02em", color: "#0a0a0a", marginBottom: "1rem" }}>
          Specialized Digital Architecture for Qatar Verticals
        </h2>
        <p style={{ fontSize: "1rem", lineHeight: 1.65, color: "#4a5568", maxWidth: "860px", marginBottom: "2rem" }}>
          From multinational corporate headquarters in West Bay to master-planned developments across Lusail Marina and The Pearl-Qatar, we engineer bespoke digital platforms that convert affluent Gulf audiences.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))", gap: "1.5rem" }}>
          <div style={{ background: "#f8fafc", padding: "1.75rem", borderRadius: "14px", border: "1px solid #e2e8f0" }}>
            <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "#0a0a0a", marginBottom: "0.5rem" }}>
              Lusail Real Estate &amp; Masterplan Portals
            </h3>
            <p style={{ fontSize: "0.88rem", lineHeight: 1.6, color: "#64748b", margin: 0 }}>
              Tailored for property developers and luxury asset managers. Interactive masterplan viewers, floorplan lead gates, and targeted NRI investment campaigns across the UAE, Kuwait, and London.
            </p>
          </div>

          <div style={{ background: "#f8fafc", padding: "1.75rem", borderRadius: "14px", border: "1px solid #e2e8f0" }}>
            <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "#0a0a0a", marginBottom: "0.5rem" }}>
              West Bay Financial &amp; Legal Institutions
            </h3>
            <p style={{ fontSize: "0.88rem", lineHeight: 1.6, color: "#64748b", margin: 0 }}>
              Engineered with strict Content Security Policy (CSP), QCB compliant encryption, QPAY debit gateway integration, and bilingual Arabic-English corporate communication portals.
            </p>
          </div>

          <div style={{ background: "#f8fafc", padding: "1.75rem", borderRadius: "14px", border: "1px solid #e2e8f0" }}>
            <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "#0a0a0a", marginBottom: "0.5rem" }}>
              Luxury Dining &amp; Hospitality Booking Engines
            </h3>
            <p style={{ fontSize: "0.88rem", lineHeight: 1.6, color: "#64748b", margin: 0 }}>
              Sub-second direct table reservation engines, interactive culinary menus, and geo-targeted social advertising capturing high-spending residents across Doha, Lusail, and Katara Cultural Village.
            </p>
          </div>
        </div>
      </section>

      {/* Bottom CTA Card */}
      <section style={{ marginTop: "4rem", background: "linear-gradient(135deg, #0b1530 0%, #00488e 100%)", borderRadius: "24px", padding: "clamp(2.5rem, 5vw, 4rem)", color: "#ffffff", textAlign: "center" }}>
        <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#ffbe0b", display: "block", marginBottom: "0.75rem" }}>
          • PARTNER WITH QUBIZON FOR QATAR MARKET GROWTH /
        </span>
        <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.75rem)", fontWeight: 800, letterSpacing: "-0.02em", color: "#ffffff", marginBottom: "1rem" }}>
          Ready to Out-Engineer Your Competition in Qatar?
        </h2>
        <p style={{ fontSize: "1rem", color: "rgba(255, 255, 255, 0.8)", maxWidth: "720px", margin: "0 auto 2rem auto", lineHeight: 1.65 }}>
          Schedule a technical discovery session with our senior engineering team to inspect your web architecture, Google.com.qa rankings, and paid acquisition funnels.
        </p>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <Link
            href="/contact?location=qatar"
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

