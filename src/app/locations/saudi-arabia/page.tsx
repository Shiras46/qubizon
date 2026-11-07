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
  Share2,
  Database,
  Building2,
  CheckCircle2,
  Clock,
  Sparkles,
  Zap,
} from "lucide-react";
import { constructMetadata } from "@/lib/metadata";
import { SITE_CONFIG } from "@/lib/constants";
import styles from "@/components/locations/LocationPage.module.css";

export const metadata: Metadata = constructMetadata({
  title: "Web Development & Marketing in Saudi Arabia | Qubizon",
  description:
    "Next.js web development, technical SEO, ZATCA e-invoicing, performance PPC ads, and CRM automation for enterprises in Riyadh, Jeddah, and across Saudi Arabia.",
  path: "/locations/saudi-arabia",
  keywords: [
    "Digital Marketing Company Saudi Arabia",
    "Web Development Company Riyadh",
    "Best Digital Marketing Agency KSA",
    "Next.js Web Development Saudi Arabia",
    "SEO Agency Riyadh",
    "SEO Company Jeddah",
    "PPC Advertising Agency Saudi Arabia",
    "ZATCA E-Invoicing Next.js Integration",
    "B2B Web Development Saudi Vision 2030",
  ],
});

const SAUDI_FAQS = [
  {
    q: "How does Qubizon support Saudi Vision 2030 digital transformation initiatives?",
    a: "We engineer enterprise Next.js App Router applications, bilingual Arabic and English digital experiences, and automated customer workflows that align with the digital acceleration goals of Saudi Vision 2030. We build modern, cloud-native platforms with sub-second speeds, zero legacy dependencies, and scalable infrastructure.",
  },
  {
    q: "Can you integrate ZATCA Phase 2 e-invoicing and Saudi tax compliance into custom web applications?",
    a: "Yes. Our software engineering team designs cryptographic API connectors and automated invoice generation pipelines adhering to ZATCA (Zakat, Tax and Customs Authority) Phase 2 e-invoicing standards, generating compliant XML/JSON payloads, cryptographic timestamps, and mandatory QR codes.",
  },
  {
    q: "How do your practitioners coordinate with teams in Riyadh, Jeddah, and the Eastern Province?",
    a: "Saudi Arabia operates on Arabia Standard Time (AST, UTC+3), which is just 2.5 hours behind our engineering centers. We provide real-time Slack and WhatsApp communication channels, scheduled weekly sprint reviews, and direct video standups with senior engineers without intermediary account managers.",
  },
  {
    q: "Do you build bilingual Arabic and English web interfaces with native RTL layout support?",
    a: "Yes. We engineer bi-directional web applications with full Right-to-Left (RTL) Arabic typography, optimized Arabic web font loading, and culturally resonant UX patterns designed for Saudi consumers and government/enterprise procurement stakeholders.",
  },
  {
    q: "What digital advertising strategies work best for the Saudi Arabian commercial market?",
    a: "In Saudi Arabia, high-intent Google Search advertising paired with executive LinkedIn B2B funnels and high-production Meta/Snapchat campaigns yield exceptional pipeline generation when connected directly to automated WhatsApp Business lead routing.",
  },
  {
    q: "What contract and payment terms do you provide for Saudi corporate clients?",
    a: "We offer commercial agreements in Saudi Riyals (SAR), US Dollars (USD), or Indian Rupees (INR) with standard corporate bank transfer options. All contracts include full intellectual property assignment guaranteeing 100% client code and asset ownership from day one.",
  },
];

export default function SaudiArabiaLocationPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_CONFIG.domain },
          { "@type": "ListItem", position: 2, name: "Service Areas", item: `${SITE_CONFIG.domain}/locations` },
          { "@type": "ListItem", position: 3, name: "Saudi Arabia", item: `${SITE_CONFIG.domain}/locations/saudi-arabia` },
        ],
      },
      {
        "@type": "Service",
        "@id": `${SITE_CONFIG.domain}/locations/saudi-arabia#service`,
        name: "Enterprise Web Development & Digital Marketing in Saudi Arabia",
        provider: { "@id": `${SITE_CONFIG.domain}/#organization` },
        serviceType: "Next.js Web Development, Technical SEO, ZATCA e-Invoicing, PPC Advertising, CRM Automation",
        areaServed: [
          {
            "@type": "Country",
            name: "Saudi Arabia",
            alternateName: "KSA",
          },
          {
            "@type": "City",
            name: "Riyadh",
            containedInPlace: { "@type": "Country", name: "Saudi Arabia" },
          },
          {
            "@type": "City",
            name: "Jeddah",
            containedInPlace: { "@type": "Country", name: "Saudi Arabia" },
          },
          {
            "@type": "City",
            name: "Dammam",
            containedInPlace: { "@type": "Country", name: "Saudi Arabia" },
          },
        ],
        description:
          "Enterprise Next.js web application engineering, technical search engine optimization, performance PPC marketing, ZATCA e-invoicing architecture, and CRM workflow automation for enterprises across Riyadh, Jeddah, Dammam, and Saudi Arabia.",
      },
      {
        "@type": "FAQPage",
        mainEntity: SAUDI_FAQS.map((faq) => ({
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
          <li aria-current="page">Saudi Arabia Hub</li>
        </ul>
      </nav>

      {/* Hero Header */}
      <header className={styles.hero}>
        <div className={styles.badge}>
          <Globe2 size={14} aria-hidden="true" />
          <span>GCC Expansion • Riyadh • Jeddah • Eastern Province</span>
        </div>
        <h1 className={styles.title}>
          Enterprise Web Development &amp; <span className="calligraphy">Digital Growth in Saudi Arabia</span>
        </h1>
        <p className={styles.lead}>
          Empowering ambitious corporate groups, industrial conglomerates, and innovative digital startups across Riyadh, Jeddah, and Dammam. We architect sub-second Next.js web applications, ZATCA-compliant e-invoicing pipelines, technical Arabic SEO, and conversion-engineered performance advertising aligned with Saudi Vision 2030.
        </p>

        <div className={styles.ctaRow}>
          <Link href="/contact?location=saudi-arabia" className={styles.primaryBtn}>
            <span>Schedule Saudi Discovery Session</span>
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
          <a
            href="https://wa.me/917902911961?text=Hi%20Qubizon%2C%20I%20am%20contacting%20you%20from%20Saudi%20Arabia%20regarding%20a%20digital%20project."
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondaryBtn}
          >
            <span>Direct WhatsApp Consultation &rarr;</span>
          </a>
        </div>
      </header>

      {/* Why Saudi Enterprises Choose Qubizon */}
      <section className={styles.section} aria-labelledby="why-saudi-heading">
        <h2 id="why-saudi-heading" className={styles.sectionTitle}>
          Why Saudi Enterprises Partner With Qubizon
        </h2>
        <p className={styles.sectionSubtitle}>
          As Saudi Arabia rapidly accelerates toward its Vision 2030 economic transformation, digital infrastructure requires world-class software engineering rather than superficial agency templates:
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem", marginTop: "2rem" }}>
          <div style={{ background: "#ffffff", border: "1px solid rgba(0, 0, 0, 0.08)", borderRadius: "16px", padding: "1.75rem", boxShadow: "0 2px 12px rgba(0,0,0,0.03)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "0.75rem" }}>
              <Zap size={22} style={{ color: "var(--brand-blue, #00488e)" }} aria-hidden="true" />
              <h3 style={{ fontSize: "1.15rem", fontWeight: 700, margin: 0, color: "#0a0a0a" }}>Senior Software Engineering</h3>
            </div>
            <p style={{ fontSize: "0.925rem", color: "#64748b", lineHeight: 1.6, margin: 0 }}>
              Access elite Next.js full-stack engineers and certified cloud architects who build enterprise-grade platforms on clean React Server Components and strict TypeScript, minimizing technical debt.
            </p>
          </div>

          <div style={{ background: "#ffffff", border: "1px solid rgba(0, 0, 0, 0.08)", borderRadius: "16px", padding: "1.75rem", boxShadow: "0 2px 12px rgba(0,0,0,0.03)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "0.75rem" }}>
              <Globe2 size={22} style={{ color: "var(--brand-blue, #00488e)" }} aria-hidden="true" />
              <h3 style={{ fontSize: "1.15rem", fontWeight: 700, margin: 0, color: "#0a0a0a" }}>Bilingual Arabic &amp; RTL Excellence</h3>
            </div>
            <p style={{ fontSize: "0.925rem", color: "#64748b", lineHeight: 1.6, margin: 0 }}>
              Native Right-to-Left (RTL) Arabic typography, localized search intent keywords on Google.sa, and culturally fluent UX designed for both Saudi citizens and regional commercial partners.
            </p>
          </div>

          <div style={{ background: "#ffffff", border: "1px solid rgba(0, 0, 0, 0.08)", borderRadius: "16px", padding: "1.75rem", boxShadow: "0 2px 12px rgba(0,0,0,0.03)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "0.75rem" }}>
              <ShieldCheck size={22} style={{ color: "var(--brand-blue, #00488e)" }} aria-hidden="true" />
              <h3 style={{ fontSize: "1.15rem", fontWeight: 700, margin: 0, color: "#0a0a0a" }}>ZATCA e-Invoicing Compliance</h3>
            </div>
            <p style={{ fontSize: "0.925rem", color: "#64748b", lineHeight: 1.6, margin: 0 }}>
              Seamless integration with Saudi ZATCA Phase 2 e-invoicing standards, ensuring automated XML tax invoice generation, cryptographic signatures, and real-time portal reporting.
            </p>
          </div>

          <div style={{ background: "#ffffff", border: "1px solid rgba(0, 0, 0, 0.08)", borderRadius: "16px", padding: "1.75rem", boxShadow: "0 2px 12px rgba(0,0,0,0.03)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "0.75rem" }}>
              <Clock size={22} style={{ color: "var(--brand-blue, #00488e)" }} aria-hidden="true" />
              <h3 style={{ fontSize: "1.15rem", fontWeight: 700, margin: 0, color: "#0a0a0a" }}>Near-Zero Time Difference</h3>
            </div>
            <p style={{ fontSize: "0.925rem", color: "#64748b", lineHeight: 1.6, margin: 0 }}>
              With Arabia Standard Time (AST) only 2.5 hours apart from our delivery teams, your leadership enjoys real-time operational communication, urgent turnarounds, and instant sprint synchronization.
            </p>
          </div>
        </div>
      </section>

      {/* Core Services for Saudi Arabia */}
      <section className={styles.section} aria-labelledby="saudi-services-heading" style={{ marginTop: "3.5rem" }}>
        <h2 id="saudi-services-heading" className={styles.sectionTitle}>
          Integrated Capabilities for the Kingdom of Saudi Arabia
        </h2>
        <p className={styles.sectionSubtitle}>
          We deliver synchronized digital solutions that eliminate agency fragmentation and drive verifiable commercial pipeline revenue:
        </p>

        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <div className={styles.cardIcon}><Code2 size={22} aria-hidden="true" /></div>
            <h3 className={styles.cardTitle}>Next.js Web Applications &amp; Portals</h3>
            <p className={styles.cardDesc}>
              Sub-second web platforms, client portals, and e-commerce engines engineered on modern React Server Components with edge caching across Middle East cloud regions.
            </p>
            <Link href="/services/web-development" className={styles.cardLink}>
              Explore Web Architecture <ChevronRight size={14} aria-hidden="true" />
            </Link>
          </div>

          <div className={styles.serviceCard}>
            <div className={styles.cardIcon}><Search size={22} aria-hidden="true" /></div>
            <h3 className={styles.cardTitle}>Technical SEO &amp; Google.sa Authority</h3>
            <p className={styles.cardDesc}>
              Topical authority clustering, Arabic/English Schema.org entity graphs, and crawl budget engineering to achieve dominant commercial rankings on Google Saudi Arabia.
            </p>
            <Link href="/services/seo" className={styles.cardLink}>
              Explore Technical SEO <ChevronRight size={14} aria-hidden="true" />
            </Link>
          </div>

          <div className={styles.serviceCard}>
            <div className={styles.cardIcon}><Target size={22} aria-hidden="true" /></div>
            <h3 className={styles.cardTitle}>Performance PPC &amp; Paid Media</h3>
            <p className={styles.cardDesc}>
              High-intent Google Ads and LinkedIn acquisition funnels targeting enterprise buyers, government contractors, and high-net-worth consumers across Riyadh and Jeddah.
            </p>
            <Link href="/services/paid-advertising" className={styles.cardLink}>
              Explore Paid Advertising <ChevronRight size={14} aria-hidden="true" />
            </Link>
          </div>

          <div className={styles.serviceCard}>
            <div className={styles.cardIcon}><Database size={22} aria-hidden="true" /></div>
            <h3 className={styles.cardTitle}>CRM &amp; WhatsApp Lead Automation</h3>
            <p className={styles.cardDesc}>
              Connecting web contact forms, quotation requests, and ad funnels directly into automated WhatsApp Business APIs and centralized sales deal pipelines.
            </p>
            <Link href="/services/crm" className={styles.cardLink}>
              Explore CRM Automation <ChevronRight size={14} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* Target Industries in Saudi Arabia */}
      <section style={{ marginTop: "3.5rem", background: "rgba(255, 255, 255, 0.85)", border: "1px solid rgba(0, 0, 0, 0.08)", borderRadius: "20px", padding: "clamp(2rem, 4vw, 3.5rem)" }}>
        <h2 className={styles.sectionTitle} style={{ textAlign: "center", marginBottom: "1rem" }}>
          Specialized Digital Solutions for Saudi Growth Verticals
        </h2>
        <p className={styles.sectionSubtitle} style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 2.5rem auto" }}>
          We architect digital platforms tailored to the economic requirements of high-priority sectors in the Kingdom:
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
          <div style={{ background: "#ffffff", border: "1px solid rgba(0, 0, 0, 0.06)", borderRadius: "14px", padding: "1.5rem" }}>
            <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--brand-blue, #00488e)", marginBottom: "0.5rem" }}>
              Giga-Projects &amp; Real Estate Development
            </h3>
            <p style={{ fontSize: "0.9rem", color: "#64748b", lineHeight: 1.6, margin: 0 }}>
              Masterplan showcase portals, investor lead capture engines, and immersive 3D project presentations supporting high-profile developments across Riyadh and the Red Sea corridor.
            </p>
          </div>

          <div style={{ background: "#ffffff", border: "1px solid rgba(0, 0, 0, 0.06)", borderRadius: "14px", padding: "1.5rem" }}>
            <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--brand-blue, #00488e)", marginBottom: "0.5rem" }}>
              Manufacturing, Petrochemical &amp; Logistics
            </h3>
            <p style={{ fontSize: "0.9rem", color: "#64748b", lineHeight: 1.6, margin: 0 }}>
              B2B procurement catalogs, supply chain request portals, and multi-lingual technical documentation hubs serving industrial hubs in Jubail, Yanbu, and Dammam.
            </p>
          </div>

          <div style={{ background: "#ffffff", border: "1px solid rgba(0, 0, 0, 0.06)", borderRadius: "14px", padding: "1.5rem" }}>
            <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--brand-blue, #00488e)", marginBottom: "0.5rem" }}>
              Healthcare Networks &amp; Medical Centers
            </h3>
            <p style={{ fontSize: "0.9rem", color: "#64748b", lineHeight: 1.6, margin: 0 }}>
              Patient appointment booking engines, physician specialization directories, and regional healthcare search optimization complying with Saudi Ministry of Health standards.
            </p>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className={styles.section} aria-labelledby="saudi-faqs" style={{ marginTop: "3.5rem" }}>
        <h2 id="saudi-faqs" className={styles.sectionTitle}>
          Frequently Asked Questions — Saudi Arabia Services
        </h2>
        <div className={styles.faqList}>
          {SAUDI_FAQS.map((faq, index) => (
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
          • PARTNER WITH QUBIZON FOR SAUDI MARKET EXPANSION /
        </span>
        <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.75rem)", fontWeight: 800, letterSpacing: "-0.02em", color: "#ffffff", marginBottom: "1rem" }}>
          Ready to Accelerate Your Enterprise Growth in Saudi Arabia?
        </h2>
        <p style={{ fontSize: "1rem", color: "rgba(255, 255, 255, 0.8)", maxWidth: "720px", margin: "0 auto 2rem auto", lineHeight: 1.65 }}>
          Schedule a technical discovery session with our senior engineering team to inspect your web architecture, ZATCA e-invoicing roadmap, and regional search opportunities.
        </p>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <Link
            href="/contact?location=saudi-arabia"
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
