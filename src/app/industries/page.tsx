import type { Metadata } from "next";
import Link from "next/link";
import {
  Building2,
  HeartPulse,
  ShoppingBag,
  Factory,
  UtensilsCrossed,
  Coins,
  Truck,
  GraduationCap,
  Sparkles,
  Wrench,
  ChevronRight,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Globe2,
} from "lucide-react";
import { constructMetadata } from "@/lib/metadata";
import { SITE_CONFIG } from "@/lib/constants";
import styles from "@/components/locations/LocationPage.module.css";

export const metadata: Metadata = constructMetadata({
  title: "Software & Marketing by Industry | Qubizon",
  description:
    "Specialized Next.js web development, technical SEO, performance PPC, and automated CRM architectures tailored to real estate, healthcare, retail, manufacturing, and key commercial industries.",
  path: "/industries",
  keywords: [
    "Software by Industry",
    "Digital Marketing for Real Estate",
    "Healthcare Web Development",
    "Retail E-Commerce Solutions",
    "Manufacturing B2B Marketing",
    "Hospitality Booking Software",
    "Fintech Web Architecture",
    "Logistics Software Systems",
    "EdTech Web Platforms",
    "Automobile Workshop Software",
  ],
});

const INDUSTRIES_FAQS = [
  {
    q: "How does Qubizon customize solutions for specific industry sectors?",
    a: "We do not believe in generic one-size-fits-all websites. For each sector, our engineering team maps customer acquisition funnels, regulatory requirements (such as HIPAA for healthcare, ZATCA for Saudi manufacturing, or RERA for GCC real estate), and operational integrations (such as inventory sync, booking calendars, or payment gateways) directly into the code layer.",
  },
  {
    q: "Can you integrate our existing industry software with our new web platform?",
    a: "Yes. We regularly build bi-directional API bridges connecting Next.js web applications to industry-standard ERPs (SAP, Oracle, Odoo), CRM systems (Salesforce, HubSpot, Zoho), electronic medical record (EMR) databases, property management systems, and specialized field service software.",
  },
  {
    q: "What digital marketing strategies work best for B2B industrial vs B2C retail sectors?",
    a: "For B2B industries (manufacturing, logistics, commercial real estate), we deploy high-intent Google Search advertising combined with executive LinkedIn targeting, account-based marketing (ABM), and technical SEO whitepaper funnels. For B2C sectors (retail, hospitality, salons), we deploy visual Meta/Instagram ads, local Google Maps optimization, and automated WhatsApp re-engagement flows.",
  },
  {
    q: "How do you ensure data confidentiality and compliance across regulated industries?",
    a: "We implement defense-in-depth security standards including role-based access control, cryptographic data encryption at rest and in transit, strict HSTS configurations, and full compliance with regional privacy laws (Indian DPDP Act, GDPR, and Gulf cybersecurity mandates).",
  },
];

export default function IndustriesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_CONFIG.domain },
          { "@type": "ListItem", position: 2, name: "Industries", item: `${SITE_CONFIG.domain}/industries` },
        ],
      },
      {
        "@type": "Service",
        "@id": `${SITE_CONFIG.domain}/industries#service`,
        name: "Industry-Specific Software Engineering & Digital Growth",
        provider: { "@id": `${SITE_CONFIG.domain}/#organization` },
        serviceType: "Industry Web Development, Technical SEO, Performance Marketing, CRM Automation",
        description:
          "Specialized web engineering, technical search engine optimization, and automated growth marketing architectures built for major commercial and industrial sectors.",
      },
      {
        "@type": "FAQPage",
        mainEntity: INDUSTRIES_FAQS.map((faq) => ({
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
          <li aria-current="page">
            <ChevronRight size={14} aria-hidden="true" />
            <span>Software &amp; Marketing by Industry</span>
          </li>
        </ol>
      </nav>

      {/* Header */}
      <header className={styles.header}>
        <div className={styles.regionBadge}>
          <Globe2 size={15} aria-hidden="true" />
          <span>INDUSTRY SPECIALIZATIONS &bull; SECTOR-ALIGNED GROWTH</span>
        </div>
        <h1 className={styles.title}>
          Software Engineering &amp; Digital Growth by Industry
        </h1>
        <p className={styles.subtitle}>
          Every industry has distinct operational cadences, regulatory compliance mandates, and customer decision journeys. Qubizon designs purpose-built web platforms, technical SEO entity graphs, performance PPC campaigns, and automated CRM pipelines tailored to your industry&apos;s exact commercial dynamics.
        </p>

        <div className={styles.statsStrip}>
          <div className={styles.statCard}>
            <span className={styles.statValue}>10+</span>
            <span className={styles.statLabel}>Dedicated Sector Architectures</span>
          </div>
          <div className={styles.statCard}>
            <span className={styles.statValue}>100%</span>
            <span className={styles.statLabel}>Regulated Compliance Alignment</span>
          </div>
          <div className={styles.statCard}>
            <span className={styles.statValue}>Sub-Second</span>
            <span className={styles.statLabel}>Core Web Vitals Across Sectors</span>
          </div>
          <div className={styles.statCard}>
            <span className={styles.statValue}>End-to-End</span>
            <span className={styles.statLabel}>CRM &amp; Payment Gateway Sync</span>
          </div>
        </div>
      </header>

      {/* Industry Solutions Grid */}
      <section style={{ marginTop: "3.5rem" }}>
        <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#00488e", display: "block", marginBottom: "0.5rem" }}>
          • SECTOR MATRIX /
        </span>
        <h2 style={{ fontSize: "clamp(1.75rem, 3vw, 2.25rem)", fontWeight: 800, letterSpacing: "-0.02em", color: "#0a0a0a", marginBottom: "1.25rem" }}>
          Tailored Web &amp; Growth Frameworks for Key Commercial Verticals
        </h2>
        <p style={{ fontSize: "1.05rem", lineHeight: 1.7, color: "#4a5568", maxWidth: "880px", marginBottom: "2.5rem" }}>
          Explore how our unified engineering and growth disciplines solve the unique operational bottlenecks of your sector.
        </p>

        <div className={styles.solutionsGrid}>
          {/* 1. Real Estate */}
          <div className={styles.solutionCard}>
            <Building2 size={26} style={{ color: "#00488e", marginBottom: "1rem" }} aria-hidden="true" />
            <h3 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "0.5rem", color: "#0a0a0a" }}>
              Real Estate &amp; Property Rentals
            </h3>
            <p style={{ fontSize: "0.92rem", lineHeight: 1.6, color: "#4a5568", marginBottom: "1rem" }}>
              High-converting showcase platforms for luxury developers, brokers, and rental agencies across Dubai, Riyadh, and Kerala. Features interactive floor plans, virtual tours, automated WhatsApp inquiry routing, and RERA/Wafi compliance.
            </p>
            <ul style={{ paddingLeft: "1.2rem", fontSize: "0.85rem", color: "#64748b", lineHeight: 1.6 }}>
              <li>Instant WhatsApp lead notification with unit ID</li>
              <li>High-intent Google Ads for off-plan &amp; secondary property</li>
              <li>Automated digital lease generation &amp; deposit tracking</li>
            </ul>
          </div>

          {/* 2. Healthcare */}
          <div className={styles.solutionCard}>
            <HeartPulse size={26} style={{ color: "#00488e", marginBottom: "1rem" }} aria-hidden="true" />
            <h3 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "0.5rem", color: "#0a0a0a" }}>
              Healthcare, Hospitals &amp; Clinics
            </h3>
            <p style={{ fontSize: "0.92rem", lineHeight: 1.6, color: "#4a5568", marginBottom: "1rem" }}>
              Accessible, secure medical platforms for multi-specialty hospitals, aesthetic clinics, and diagnostic networks. Features HIPAA/data privacy compliance, real-time doctor appointment booking, and local search entity dominance.
            </p>
            <ul style={{ paddingLeft: "1.2rem", fontSize: "0.85rem", color: "#64748b", lineHeight: 1.6 }}>
              <li>Doctor schedule &amp; department booking calendar</li>
              <li>Strict patient data encryption &amp; privacy controls</li>
              <li>High-converting Google Search ads for key treatments</li>
            </ul>
          </div>

          {/* 3. Retail & E-Commerce */}
          <div className={styles.solutionCard}>
            <ShoppingBag size={26} style={{ color: "#00488e", marginBottom: "1rem" }} aria-hidden="true" />
            <h3 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "0.5rem", color: "#0a0a0a" }}>
              Retail &amp; Omnichannel E-Commerce
            </h3>
            <p style={{ fontSize: "0.92rem", lineHeight: 1.6, color: "#4a5568", marginBottom: "1rem" }}>
              Ultra-fast headless commerce platforms built on Next.js 15. Real-time multi-branch inventory synchronization, multi-currency checkout, and direct integration with regional payment gateways (KNET, Apple Pay, Mada, UPI).
            </p>
            <ul style={{ paddingLeft: "1.2rem", fontSize: "0.85rem", color: "#64748b", lineHeight: 1.6 }}>
              <li>Sub-second product catalog search &amp; filtering</li>
              <li>Automated WhatsApp order tracking &amp; abandoned cart recovery</li>
              <li>Performance Meta &amp; Google Shopping ROAS optimization</li>
            </ul>
          </div>

          {/* 4. Manufacturing */}
          <div className={styles.solutionCard}>
            <Factory size={26} style={{ color: "#00488e", marginBottom: "1rem" }} aria-hidden="true" />
            <h3 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "0.5rem", color: "#0a0a0a" }}>
              Manufacturing &amp; Industrial B2B
            </h3>
            <p style={{ fontSize: "0.92rem", lineHeight: 1.6, color: "#4a5568", marginBottom: "1rem" }}>
              Enterprise portals and technical marketing engines for industrial manufacturers and global exporters. Capture high-value contract RFPs, manage technical product specifications, and integrate with ERP billing systems.
            </p>
            <ul style={{ paddingLeft: "1.2rem", fontSize: "0.85rem", color: "#64748b", lineHeight: 1.6 }}>
              <li>Technical specification &amp; CAD download lead gating</li>
              <li>Account-Based Marketing (ABM) for procurement heads</li>
              <li>ZATCA Phase 2 &amp; GST tax compliance integration</li>
            </ul>
          </div>

          {/* 5. Hospitality */}
          <div className={styles.solutionCard}>
            <UtensilsCrossed size={26} style={{ color: "#00488e", marginBottom: "1rem" }} aria-hidden="true" />
            <h3 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "0.5rem", color: "#0a0a0a" }}>
              Hospitality, F&amp;B &amp; Luxury Resorts
            </h3>
            <p style={{ fontSize: "0.92rem", lineHeight: 1.6, color: "#4a5568", marginBottom: "1rem" }}>
              Experiential websites for boutique hotels, fine dining establishments, and luxury resort destinations. Eliminates third-party OTA commissions through seamless direct booking engines and digital table reservations.
            </p>
            <ul style={{ paddingLeft: "1.2rem", fontSize: "0.85rem", color: "#64748b", lineHeight: 1.6 }}>
              <li>Direct booking engine with live room inventory</li>
              <li>Digital QR table menus &amp; instant pre-ordering</li>
              <li>Local SEO ranking for tourist &amp; business travel queries</li>
            </ul>
          </div>

          {/* 6. Fintech */}
          <div className={styles.solutionCard}>
            <Coins size={26} style={{ color: "#00488e", marginBottom: "1rem" }} aria-hidden="true" />
            <h3 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "0.5rem", color: "#0a0a0a" }}>
              Fintech, Banking &amp; Insurance
            </h3>
            <p style={{ fontSize: "0.92rem", lineHeight: 1.6, color: "#4a5568", marginBottom: "1rem" }}>
              Security-hardened web applications for neo-banks, digital lending platforms, and wealth management firms. Engineered with zero-trust architecture, automated KYC onboarding, and sub-second calculation engines.
            </p>
            <ul style={{ paddingLeft: "1.2rem", fontSize: "0.85rem", color: "#64748b", lineHeight: 1.6 }}>
              <li>Bank-grade data encryption &amp; SOC2 / CBB compliance</li>
              <li>Automated KYC verification &amp; credit evaluation APIs</li>
              <li>High-intent paid search funnels for loan &amp; wealth products</li>
            </ul>
          </div>

          {/* 7. Logistics */}
          <div className={styles.solutionCard}>
            <Truck size={26} style={{ color: "#00488e", marginBottom: "1rem" }} aria-hidden="true" />
            <h3 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "0.5rem", color: "#0a0a0a" }}>
              Logistics, Freight &amp; Supply Chain
            </h3>
            <p style={{ fontSize: "0.92rem", lineHeight: 1.6, color: "#4a5568", marginBottom: "1rem" }}>
              Real-time shipment tracking portals and rate quotation systems for maritime freight, air cargo, and third-party logistics (3PL) operators connecting GCC ports with global supply corridors.
            </p>
            <ul style={{ paddingLeft: "1.2rem", fontSize: "0.85rem", color: "#64748b", lineHeight: 1.6 }}>
              <li>Instant container &amp; airway bill tracking tool</li>
              <li>Automated multi-modal freight rate calculation</li>
              <li>B2B lead ingestion pipeline for international cargo RFPs</li>
            </ul>
          </div>

          {/* 8. Education */}
          <div className={styles.solutionCard}>
            <GraduationCap size={26} style={{ color: "#00488e", marginBottom: "1rem" }} aria-hidden="true" />
            <h3 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "0.5rem", color: "#0a0a0a" }}>
              Education, EdTech &amp; Universities
            </h3>
            <p style={{ fontSize: "0.92rem", lineHeight: 1.6, color: "#4a5568", marginBottom: "1rem" }}>
              Student recruitment and admissions portals for private universities, international academies, and online learning platforms. Features automated application tracking, fee payment processing, and parent communication bots.
            </p>
            <ul style={{ paddingLeft: "1.2rem", fontSize: "0.85rem", color: "#64748b", lineHeight: 1.6 }}>
              <li>Digital student application &amp; document upload</li>
              <li>Automated admission counselor lead scoring</li>
              <li>Seasonal paid ad campaigns for enrollment cycles</li>
            </ul>
          </div>

          {/* 9. Salons & Spas */}
          <div className={styles.solutionCard}>
            <Sparkles size={26} style={{ color: "#00488e", marginBottom: "1rem" }} aria-hidden="true" />
            <h3 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "0.5rem", color: "#0a0a0a" }}>
              Salons, Spas &amp; Wellness Centers
            </h3>
            <p style={{ fontSize: "0.92rem", lineHeight: 1.6, color: "#4a5568", marginBottom: "1rem" }}>
              Sleek mobile-first booking systems and loyalty platforms for luxury salons, day spas, and wellness clinics. Customers choose their stylist, select service packages, and receive automated WhatsApp reminders to eliminate no-shows.
            </p>
            <ul style={{ paddingLeft: "1.2rem", fontSize: "0.85rem", color: "#64748b", lineHeight: 1.6 }}>
              <li>Live staff availability &amp; slot booking engine</li>
              <li>Automated WhatsApp appointment confirmations &amp; reviews</li>
              <li>Geo-targeted Instagram &amp; Google Maps campaigns</li>
            </ul>
          </div>

          {/* 10. Automobile Workshops */}
          <div className={styles.solutionCard}>
            <Wrench size={26} style={{ color: "#00488e", marginBottom: "1rem" }} aria-hidden="true" />
            <h3 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "0.5rem", color: "#0a0a0a" }}>
              Automobile &amp; Field Service Workshops
            </h3>
            <p style={{ fontSize: "0.92rem", lineHeight: 1.6, color: "#4a5568", marginBottom: "1rem" }}>
              Integrated job-card, vehicle inspection, and service booking software for automotive garages, AC repair services, and commercial field technicians. Features transparent quotation generation and live job status tracking.
            </p>
            <ul style={{ paddingLeft: "1.2rem", fontSize: "0.85rem", color: "#64748b", lineHeight: 1.6 }}>
              <li>Digital vehicle job card &amp; inspection checklists</li>
              <li>WhatsApp job-status updates with photo approvals</li>
              <li>Local emergency breakdown search advertising funnels</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section style={{ marginTop: "4rem" }}>
        <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#00488e", display: "block", marginBottom: "0.5rem" }}>
          • FREQUENTLY ASKED QUESTIONS /
        </span>
        <h2 style={{ fontSize: "clamp(1.6rem, 2.5vw, 2rem)", fontWeight: 800, letterSpacing: "-0.02em", color: "#0a0a0a", marginBottom: "2rem" }}>
          Industry-Specific Engineering &amp; Marketing Inquiries
        </h2>
        <div className={styles.faqList}>
          {INDUSTRIES_FAQS.map((faq, index) => (
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

      {/* CTA Card */}
      <section style={{ marginTop: "4rem", background: "linear-gradient(135deg, #0b1530 0%, #00488e 100%)", borderRadius: "24px", padding: "clamp(2.5rem, 5vw, 4rem)", color: "#ffffff", textAlign: "center" }}>
        <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#ffbe0b", display: "block", marginBottom: "0.75rem" }}>
          • ELEVATE YOUR SECTOR LEADERSHIP WITH QUBIZON /
        </span>
        <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.75rem)", fontWeight: 800, letterSpacing: "-0.02em", color: "#ffffff", marginBottom: "1rem" }}>
          Ready for Industry-Grade Digital Excellence?
        </h2>
        <p style={{ fontSize: "1rem", color: "rgba(255, 255, 255, 0.8)", maxWidth: "720px", margin: "0 auto 2rem auto", lineHeight: 1.65 }}>
          Schedule an architectural discovery session with our sector specialists to inspect your current web stack, conversion metrics, and regional search visibility.
        </p>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <Link
            href="/contact?interest=industries"
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

