import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, MapPin, ArrowRight, Building2, Compass, CheckCircle2, ShieldCheck, Sparkles, Globe2, Plane, Clock, Shield } from "lucide-react";
import { constructMetadata } from "@/lib/metadata";
import { SITE_CONFIG } from "@/lib/constants";
import styles from "@/components/locations/LocationPage.module.css";

export const metadata: Metadata = constructMetadata({
  title: "Global Service Areas & Regional Hubs | Qubizon",
  description:
    "Explore Qubizon's service areas across the UAE, Saudi Arabia, Qatar, Kuwait, Bahrain, Oman, India, and our international delivery corridors in the USA, UK, and APAC.",
  path: "/locations",
  keywords: [
    "Digital Marketing Company UAE",
    "Web Development Company Saudi Arabia",
    "Digital Marketing Qatar",
    "Web Engineering Kuwait",
    "Digital Agency Bahrain",
    "Web Development Oman",
    "Digital Marketing Agency Kerala",
    "Global Software Development Corridors",
  ],
});

const GLOBAL_COUNTRIES = [
  { code: "AE", name: "United Arab Emirates", flag: "🇦🇪", href: "/locations/uae", tag: "Enterprise Hub (Dubai & Abu Dhabi)", desc: "Sub-second Next.js web applications, Dubai Land Department RERA real estate compliance, UAE FTA 5% VAT invoice structures, and bilingual Arabic RTL search optimization." },
  { code: "SA", name: "Saudi Arabia", flag: "🇸🇦", href: "/locations/saudi-arabia", tag: "Vision 2030 (Riyadh & Jeddah)", desc: "ZATCA Phase 2 e-invoicing compliance, Mada and Apple Pay checkout integration, and Google.com.sa entity optimization tailored to the Saudi Vision 2030 economic transformation." },
  { code: "QA", name: "Qatar", flag: "🇶🇦", href: "/locations/qatar", tag: "Commercial Corridor (Doha & Lusail)", desc: "Qatar Central Bank compliant payment gateways, sub-second 5G performance across Ooredoo and Vodafone, and luxury hospitality booking platforms in Lusail and West Bay." },
  { code: "KW", name: "Kuwait", flag: "🇰🇼", href: "/locations/kuwait", tag: "Retail & KNET (Kuwait City)", desc: "Native KNET debit gateway integration, high-ticket retail e-commerce architectures, and automated WhatsApp sales pipelines across Kuwait City, Shuwaikh, and Hawally." },
  { code: "BH", name: "Bahrain", flag: "🇧🇭", href: "/locations/bahrain", tag: "Fintech & Logistics (Manama)", desc: "Central Bank of Bahrain (CBB) regulatory alignment, local AWS Middle East (me-south-1) edge caching, and BenefitPay mobile wallet checkout integration." },
  { code: "OM", name: "Oman", flag: "🇴🇲", href: "/locations/oman", tag: "Vision 2040 (Muscat & Sohar)", desc: "OmanNet and Central Bank of Oman payment rails, bilingual Arabic search authority, and B2B industrial export portals aligned with Oman Vision 2040 objectives." },
  { code: "IN", name: "India (Kerala HQ)", flag: "🇮🇳", href: "/locations", tag: "Senior Engineering Center (Kozhikode & Thrissur)", desc: "Central engineering headquarters providing full-stack Next.js development, technical SEO, precision Google Ads management, and Indian DPDP Act 2023 compliance." },
  { code: "US", name: "United States", flag: "🇺🇸", href: "/contact?region=usa", tag: "Cross-Border SaaS (NY & CA)", desc: "Sub-second edge rendering across North American CDNs, Stripe billing integration, and high-converting demand generation funnels for US commercial enterprises." },
  { code: "GB", name: "United Kingdom", flag: "🇬🇧", href: "/contact?region=uk", tag: "Fintech & B2B Corridors (London)", desc: "UK GDPR compliant data architectures, London fintech integrations, and targeted LinkedIn and Google Ads B2B customer acquisition funnels." },
  { code: "AU", name: "Australia", flag: "🇦🇺", href: "/contact?region=australia", tag: "Growth Marketing (Sydney & Melbourne)", desc: "High-performance web architecture, Privacy Act 1988 data security, and precision Google Ads management for Australian retail and professional services." },
  { code: "SG", name: "Singapore", flag: "🇸🇬", href: "/contact?region=singapore", tag: "APAC Commercial Hub", desc: "PDPA compliant cloud web systems, sub-second APAC edge routing, and multilingual Southeast Asian commercial lead generation funnels." },
  { code: "CA", name: "Canada", flag: "🇨🇦", href: "/contact?region=canada", tag: "Tech Innovation (Toronto & Vancouver)", desc: "PIPEDA compliant web applications, bilingual English-French localization, and scalable subscription billing architectures for North American markets." },
  { code: "DE", name: "Germany", flag: "🇩🇪", href: "/contact?region=germany", tag: "DACH Engineering & GDPR Compliance", desc: "Strict European Union GDPR compliance, German engineering standards, and localized B2B industrial machinery search optimization." },
  { code: "FR", name: "France", flag: "🇫🇷", href: "/contact?region=france", tag: "European Luxury & Retail", desc: "High-fashion digital storefronts, sub-second European CDN performance, and localized French e-commerce checkout funnels." },
  { code: "NL", name: "Netherlands", flag: "🇳🇱", href: "/contact?region=netherlands", tag: "Logistics & High-Tech Corridor", desc: "Amsterdam tech corridor integrations, Rotterdam maritime logistics tracking portals, and European data residency compliance." },
  { code: "ES", name: "Spain", flag: "🇪🇸", href: "/contact?region=spain", tag: "Southern European Hub", desc: "Spanish language search engine optimization, hospitality booking engines, and cross-border digital marketing for Iberian enterprises." },
  { code: "NZ", name: "New Zealand", flag: "🇳🇿", href: "/contact?region=new-zealand", tag: "Oceania Business Corridor", desc: "Cloud web development, Privacy Act 2020 alignment, and performance PPC advertising for New Zealand commercial enterprises." },
  { code: "MY", name: "Malaysia", flag: "🇲🇾", href: "/contact?region=malaysia", tag: "ASEAN Trade & Cloud", desc: "Malaysian PDPA compliance, FPX online banking integration, and regional Kuala Lumpur e-commerce growth marketing." },
  { code: "PH", name: "Philippines", flag: "🇵🇭", href: "/contact?region=philippines", tag: "Digital Services Corridor", desc: "Data Privacy Act 2012 alignment, GCash payment integration, and high-velocity mobile customer acquisition funnels." },
  { code: "ID", name: "Indonesia", flag: "🇮🇩", href: "/contact?region=indonesia", tag: "SEA E-Commerce Scale", desc: "Indonesian PDP Law compliance, GoPay and OVO integration, and high-concurrency mobile application performance architectures." },
  { code: "TH", name: "Thailand", flag: "🇹🇭", href: "/contact?region=thailand", tag: "Hospitality & Digital Commerce", desc: "Thai PDPA compliance, PromptPay QR payment integration, and international tourism and medical direct booking platforms." },
  { code: "ZA", name: "South Africa", flag: "🇿🇦", href: "/contact?region=south-africa", tag: "African Financial & Tech Hub", desc: "POPIA data protection compliance, PayFast and Ozow payment rails, and Johannesburg and Cape Town digital transformation." },
  { code: "NG", name: "Nigeria", flag: "🇳🇬", href: "/contact?region=nigeria", tag: "West African Enterprise Corridor", desc: "NDPR compliant data systems, Paystack and Flutterwave API integration, and high-velocity fintech lead acquisition funnels." },
  { code: "KE", name: "Kenya", flag: "🇰🇪", href: "/contact?region=kenya", tag: "East African Innovation Corridor", desc: "Data Protection Act 2019 compliance, M-Pesa mobile money integration, and Nairobi technology hub digital marketing." },
];

const LOCATION_FAQS = [
  {
    q: "How does Qubizon deliver software engineering and digital marketing across 24+ countries?",
    a: "We operate a high-velocity cross-border delivery model. Our senior engineering collective is centralized in Kerala, India—providing world-class technical talent, high sprint velocity, and cost advantages—while maintaining dedicated time-zone alignment with GCC clients (UTC+3, UTC+4), European teams (GMT/CET), and US commercial stakeholders.",
  },
  {
    q: "What makes your GCC delivery corridor (UAE, Saudi Arabia, Qatar, Kuwait, Bahrain, Oman) so effective?",
    a: "Our proximity to the Gulf (1.5 to 2.5 hours time difference and daily direct flights) enables live agile standups, same-day executive communication, native bilingual Arabic/English UX engineering, and localized tax/invoice compliance (ZATCA Phase 2, UAE FTA VAT, KNET).",
  },
  {
    q: "How do you handle IP ownership and legal contracts for international clients?",
    a: "All international clients retain 100% legal ownership of code repositories, Git branches, ad accounts, and analytics data from the first sprint. We sign binding mutual Non-Disclosure Agreements (NDAs) prior to scoping any proprietary workflows.",
  },
  {
    q: "Do you offer in-person consultations for enterprise clients outside India?",
    a: "Yes. Our practice leads frequently travel to Dubai, Riyadh, Doha, and regional GCC commercial centers for in-person architectural discovery sessions, ERP integration workshops, and executive quarterly reviews.",
  },
];

export default function LocationsIndexPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_CONFIG.domain },
          { "@type": "ListItem", position: 2, name: "Service Areas", item: `${SITE_CONFIG.domain}/locations` },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: LOCATION_FAQS.map((faq) => ({
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
            <span>Global Service Areas &amp; Hubs</span>
          </li>
        </ol>
      </nav>

      {/* Header */}
      <header className={styles.header}>
        <div className={styles.regionBadge}>
          <Globe2 size={15} aria-hidden="true" />
          <span>CROSS-BORDER DIGITAL ENGINEERING &bull; GCC &bull; GLOBAL CORRIDORS</span>
        </div>
        <h1 className={styles.title}>
          Global Service Areas &amp; Delivery Corridors
        </h1>
        <p className={styles.subtitle}>
          Qubizon delivers unified Next.js 15 web engineering, technical SEO knowledge graphs, and automated growth funnels to high-growth enterprises across the GCC, India, and key international markets across North America, Europe, and the Asia-Pacific region.
        </p>

        <div className={styles.statsStrip}>
          <div className={styles.statCard}>
            <span className={styles.statValue}>24+</span>
            <span className={styles.statLabel}>Commercial Country Corridors</span>
          </div>
          <div className={styles.statCard}>
            <span className={styles.statValue}>100%</span>
            <span className={styles.statLabel}>Client IP &amp; Git Code Ownership</span>
          </div>
          <div className={styles.statCard}>
            <span className={styles.statValue}>Sub-Second</span>
            <span className={styles.statLabel}>LCP on Global CloudFlare/AWS Edge</span>
          </div>
          <div className={styles.statCard}>
            <span className={styles.statValue}>Real-Time</span>
            <span className={styles.statLabel}>Same-Time-Zone Standup Alignment</span>
          </div>
        </div>
      </header>

      {/* Primary GCC Hubs Grid */}
      <section style={{ marginTop: "3.5rem" }}>
        <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#00488e", display: "block", marginBottom: "0.5rem" }}>
          • PRIMARY GCC HUBS /
        </span>
        <h2 style={{ fontSize: "clamp(1.75rem, 3vw, 2.25rem)", fontWeight: 800, letterSpacing: "-0.02em", color: "#0a0a0a", marginBottom: "1.25rem" }}>
          Dedicated Gulf Country Commercial Corridors
        </h2>
        <p style={{ fontSize: "1.05rem", lineHeight: 1.7, color: "#4a5568", maxWidth: "880px", marginBottom: "2rem" }}>
          Explore our dedicated country landing pages with localized market context, statutory e-invoicing compliance, and Arabic/English bi-directional web architecture.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "1.5rem" }}>
          {/* UAE */}
          <div style={{ background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "16px", padding: "2rem", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "0.75rem" }}>
                <span style={{ fontSize: "1.75rem" }}>🇦🇪</span>
                <h3 style={{ fontSize: "1.3rem", fontWeight: 700, color: "#0a0a0a", margin: 0 }}>United Arab Emirates</h3>
              </div>
              <p style={{ fontSize: "0.92rem", lineHeight: 1.6, color: "#64748b", marginBottom: "1rem" }}>
                Dubai &amp; Abu Dhabi enterprise corridor. High-velocity Next.js web applications, UAE FTA e-invoicing compliance, and luxury real estate PPC advertising.
              </p>
            </div>
            <Link href="/locations/uae" style={{ color: "#00488e", fontWeight: 700, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "6px" }}>
              <span>Explore UAE Enterprise Hub</span>
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>

          {/* Saudi Arabia */}
          <div style={{ background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "16px", padding: "2rem", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "0.75rem" }}>
                <span style={{ fontSize: "1.75rem" }}>🇸🇦</span>
                <h3 style={{ fontSize: "1.3rem", fontWeight: 700, color: "#0a0a0a", margin: 0 }}>Saudi Arabia</h3>
              </div>
              <p style={{ fontSize: "0.92rem", lineHeight: 1.6, color: "#64748b", marginBottom: "1rem" }}>
                Riyadh &amp; Jeddah market acceleration under Saudi Vision 2030. ZATCA Phase 2 e-invoicing integration, native Arabic RTL UX, and B2B industrial funnels.
              </p>
            </div>
            <Link href="/locations/saudi-arabia" style={{ color: "#00488e", fontWeight: 700, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "6px" }}>
              <span>Explore Saudi Arabia Hub</span>
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>

          {/* Qatar */}
          <div style={{ background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "16px", padding: "2rem", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "0.75rem" }}>
                <span style={{ fontSize: "1.75rem" }}>🇶🇦</span>
                <h3 style={{ fontSize: "1.3rem", fontWeight: 700, color: "#0a0a0a", margin: 0 }}>Qatar</h3>
              </div>
              <p style={{ fontSize: "0.92rem", lineHeight: 1.6, color: "#64748b", marginBottom: "1rem" }}>
                Doha &amp; Lusail commercial growth. Google.com.qa search dominance, luxury hospitality booking systems, and executive LinkedIn demand generation.
              </p>
            </div>
            <Link href="/locations/qatar" style={{ color: "#00488e", fontWeight: 700, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "6px" }}>
              <span>Explore Qatar Hub</span>
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>

          {/* Kuwait */}
          <div style={{ background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "16px", padding: "2rem", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "0.75rem" }}>
                <span style={{ fontSize: "1.75rem" }}>🇰🇼</span>
                <h3 style={{ fontSize: "1.3rem", fontWeight: 700, color: "#0a0a0a", margin: 0 }}>Kuwait</h3>
              </div>
              <p style={{ fontSize: "0.92rem", lineHeight: 1.6, color: "#64748b", marginBottom: "1rem" }}>
                Kuwait City retail &amp; commercial expansion. KNET payment gateway integration, headless e-commerce, and automated WhatsApp sales pipelines.
              </p>
            </div>
            <Link href="/locations/kuwait" style={{ color: "#00488e", fontWeight: 700, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "6px" }}>
              <span>Explore Kuwait Hub</span>
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>

          {/* Bahrain */}
          <div style={{ background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "16px", padding: "2rem", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "0.75rem" }}>
                <span style={{ fontSize: "1.75rem" }}>🇧🇭</span>
                <h3 style={{ fontSize: "1.3rem", fontWeight: 700, color: "#0a0a0a", margin: 0 }}>Bahrain</h3>
              </div>
              <p style={{ fontSize: "0.92rem", lineHeight: 1.6, color: "#64748b", marginBottom: "1rem" }}>
                Manama financial and logistics corridor. Central Bank of Bahrain (CBB) regulatory compliance, fintech portals, and port logistics solutions.
              </p>
            </div>
            <Link href="/locations/bahrain" style={{ color: "#00488e", fontWeight: 700, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "6px" }}>
              <span>Explore Bahrain Hub</span>
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>

          {/* Oman */}
          <div style={{ background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "16px", padding: "2rem", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "0.75rem" }}>
                <span style={{ fontSize: "1.75rem" }}>🇴🇲</span>
                <h3 style={{ fontSize: "1.3rem", fontWeight: 700, color: "#0a0a0a", margin: 0 }}>Sultanate of Oman</h3>
              </div>
              <p style={{ fontSize: "0.92rem", lineHeight: 1.6, color: "#64748b", marginBottom: "1rem" }}>
                Muscat &amp; Sohar industrial growth under Oman Vision 2040. B2B export portals, tourism booking engines, and bilingual Arabic search optimization.
              </p>
            </div>
            <Link href="/locations/oman" style={{ color: "#00488e", fontWeight: 700, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "6px" }}>
              <span>Explore Oman Hub</span>
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* India Regional Engineering Center */}
      <section style={{ marginTop: "4rem", background: "#f8fafc", padding: "3rem clamp(1.5rem, 4vw, 3rem)", borderRadius: "20px", border: "1px solid #e2e8f0" }}>
        <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#00488e", display: "block", marginBottom: "0.5rem" }}>
          • ENGINEERING HEADQUARTERS &bull; KERALA /
        </span>
        <h2 style={{ fontSize: "clamp(1.6rem, 2.5vw, 2rem)", fontWeight: 800, letterSpacing: "-0.02em", color: "#0a0a0a", marginBottom: "1rem" }}>
          India Regional Delivery Hubs
        </h2>
        <p style={{ fontSize: "1rem", lineHeight: 1.65, color: "#4a5568", maxWidth: "820px", marginBottom: "2rem" }}>
          Our senior software architects and digital strategists are anchored in Kerala&apos;s fastest-growing enterprise technology corridors.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
          <div style={{ background: "#ffffff", padding: "1.75rem", borderRadius: "14px", border: "1px solid #e2e8f0" }}>
            <Building2 size={22} style={{ color: "#00488e", marginBottom: "0.75rem" }} aria-hidden="true" />
            <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#0a0a0a", marginBottom: "0.5rem" }}>
              Kozhikode (Calicut) Regional Hub
            </h3>
            <p style={{ fontSize: "0.88rem", lineHeight: 1.6, color: "#64748b", marginBottom: "1rem" }}>
              High-growth retail, healthcare, real estate, and B2B export engineering across the Malabar commercial center.
            </p>
            <Link href="/locations/kozhikode" style={{ color: "#00488e", fontWeight: 700, fontSize: "0.88rem", textDecoration: "none" }}>
              View Kozhikode Hub &rarr;
            </Link>
          </div>

          <div style={{ background: "#ffffff", padding: "1.75rem", borderRadius: "14px", border: "1px solid #e2e8f0" }}>
            <Building2 size={22} style={{ color: "#00488e", marginBottom: "0.75rem" }} aria-hidden="true" />
            <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#0a0a0a", marginBottom: "0.5rem" }}>
              Thrissur Regional Hub
            </h3>
            <p style={{ fontSize: "0.88rem", lineHeight: 1.6, color: "#64748b", marginBottom: "1rem" }}>
              Jewelry, finance, textile manufacturing, and healthcare digital transformation across Central Kerala.
            </p>
            <Link href="/locations/thrissur" style={{ color: "#00488e", fontWeight: 700, fontSize: "0.88rem", textDecoration: "none" }}>
              View Thrissur Hub &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Global 24-Country Directory Matrix (Dictode-aligned) */}
      <section style={{ marginTop: "4rem" }}>
        <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#00488e", display: "block", marginBottom: "0.5rem" }}>
          • GLOBAL DELIVERY NETWORK /
        </span>
        <h2 style={{ fontSize: "clamp(1.6rem, 2.5vw, 2rem)", fontWeight: 800, letterSpacing: "-0.02em", color: "#0a0a0a", marginBottom: "1rem" }}>
          Software Development &amp; Marketing by Country
        </h2>
        <p style={{ fontSize: "1rem", lineHeight: 1.65, color: "#4a5568", maxWidth: "820px", marginBottom: "2rem" }}>
          Partner with our senior engineering collective from any global commercial center. We provide seamless cross-border collaboration, dedicated regional legal compliance, and sub-second global CDN delivery.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "1rem" }}>
          {GLOBAL_COUNTRIES.map((country) => (
            <Link
              key={country.code}
              href={country.href}
              style={{
                background: "#ffffff",
                border: "1px solid #e2e8f0",
                borderRadius: "12px",
                padding: "1rem 1.25rem",
                textDecoration: "none",
                display: "flex",
                flexDirection: "column",
                transition: "all 0.2s ease",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" }}>
                <span style={{ fontSize: "1.25rem" }}>{country.flag}</span>
                <span style={{ fontWeight: 700, color: "#0a0a0a", fontSize: "0.95rem" }}>{country.name}</span>
              </div>
              <span style={{ fontSize: "0.78rem", color: "#00488e", fontWeight: 700, marginBottom: "4px" }}>{country.tag}</span>
              <p style={{ fontSize: "0.82rem", color: "#64748b", lineHeight: 1.5, margin: 0 }}>{country.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Cross-Border Delivery Model & International Governance Framework */}
      <section style={{ marginTop: "4rem", background: "#f8fafc", padding: "3rem clamp(1.5rem, 4vw, 3rem)", borderRadius: "20px", border: "1px solid #e2e8f0" }}>
        <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#00488e", display: "block", marginBottom: "0.5rem" }}>
          • CROSS-BORDER ENGINEERING ARCHITECTURE /
        </span>
        <h2 style={{ fontSize: "clamp(1.6rem, 2.5vw, 2.1rem)", fontWeight: 800, letterSpacing: "-0.02em", color: "#0a0a0a", marginBottom: "1rem" }}>
          International Delivery Governance &amp; Operating Standards
        </h2>
        <p style={{ fontSize: "1rem", lineHeight: 1.65, color: "#4a5568", maxWidth: "860px", marginBottom: "2rem" }}>
          Delivering enterprise web applications and search dominance across 24 countries requires structured engineering governance. Qubizon combines the technical depth of our India engineering headquarters with regional commercial coordination across the GCC, Europe, and North America.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))", gap: "1.5rem", marginBottom: "2.5rem" }}>
          <div style={{ background: "#ffffff", padding: "1.75rem", borderRadius: "14px", border: "1px solid #e2e8f0" }}>
            <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#0a0a0a", marginBottom: "0.5rem" }}>
              Time-Zone Overlap &amp; Real-Time Sprint Cadence
            </h3>
            <p style={{ fontSize: "0.88rem", lineHeight: 1.6, color: "#64748b", margin: 0 }}>
              Our engineering squads maintain dedicated real-time overlap across Gulf Standard Time (GST), Arabia Standard Time (AST), GMT, and US Eastern Time. Daily asynchronous video updates, shared Git pull request previews, and direct Slack/WhatsApp channels ensure complete transparency without administrative overhead.
            </p>
          </div>

          <div style={{ background: "#ffffff", padding: "1.75rem", borderRadius: "14px", border: "1px solid #e2e8f0" }}>
            <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#0a0a0a", marginBottom: "0.5rem" }}>
              Global Data Sovereignty &amp; Privacy Mandates
            </h3>
            <p style={{ fontSize: "0.88rem", lineHeight: 1.6, color: "#64748b", margin: 0 }}>
              We architect every application around the statutory privacy laws of your jurisdiction. From the European Union General Data Protection Regulation (GDPR) and the Indian DPDP Act 2023 to UAE Federal Decree-Law No. 45/2021 and Saudi Arabia PDPL, data residency and consent controls are engineered directly into the data model.
            </p>
          </div>

          <div style={{ background: "#ffffff", padding: "1.75rem", borderRadius: "14px", border: "1px solid #e2e8f0" }}>
            <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#0a0a0a", marginBottom: "0.5rem" }}>
              100% Unencumbered Intellectual Property
            </h3>
            <p style={{ fontSize: "0.88rem", lineHeight: 1.6, color: "#64748b", margin: 0 }}>
              Under our standard master service agreements, you retain absolute ownership of all proprietary code, database schemas, Figma design systems, Google Ads account histories, and analytics event schemas from day one. We never apply proprietary licensing locks or vendor-hostage clauses.
            </p>
          </div>

          <div style={{ background: "#ffffff", padding: "1.75rem", borderRadius: "14px", border: "1px solid #e2e8f0" }}>
            <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#0a0a0a", marginBottom: "0.5rem" }}>
              Sub-Second Global Edge CDN Distribution
            </h3>
            <p style={{ fontSize: "0.88rem", lineHeight: 1.6, color: "#64748b", margin: 0 }}>
              Every client platform is deployed across modern edge cloud networks with automatic multi-zone routing. Whether your customer is browsing from Dubai, Riyadh, London, Singapore, or New York, your pages compile and render in under 800ms with 100% Core Web Vitals compliance.
            </p>
          </div>

          <div style={{ background: "#ffffff", padding: "1.75rem", borderRadius: "14px", border: "1px solid #e2e8f0" }}>
            <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#0a0a0a", marginBottom: "0.5rem" }}>
              Multi-Currency &amp; Regional Payment Orchestration
            </h3>
            <p style={{ fontSize: "0.88rem", lineHeight: 1.6, color: "#64748b", margin: 0 }}>
              We integrate regional and international merchant gateways with automated fraud filtering, including BenefitPay (Bahrain), KNET (Kuwait), Mada and STC Pay (Saudi Arabia), NAPS (Qatar), OmanNet (Oman), Stripe, and CCAvenue (India). Our checkout architectures adhere strictly to PCI-DSS Level 1 compliance with zero sensitive card storage on application servers.
            </p>
          </div>

          <div style={{ background: "#ffffff", padding: "1.75rem", borderRadius: "14px", border: "1px solid #e2e8f0" }}>
            <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#0a0a0a", marginBottom: "0.5rem" }}>
              Bilingual Data Sovereignty &amp; Hreflang Indexation
            </h3>
            <p style={{ fontSize: "0.88rem", lineHeight: 1.6, color: "#64748b", margin: 0 }}>
              Every international platform engineered by Qubizon enforces strict regional data privacy frameworks (GDPR, UAE PDPL, Saudi PDPL, and India DPDP Act 2023). We deploy canonical hreflang bidirectional mappings across Google, Bing, and Yandex to prevent regional index cannibalization and ensure each country audience sees localized currency, language, and legal disclosures.
            </p>
          </div>
        </div>

        <div style={{ borderTop: "1px solid #e2e8f0", paddingTop: "1.5rem", fontSize: "0.88rem", color: "#64748b", lineHeight: 1.6 }}>
          <strong>Global Pillar Capabilities:</strong> Discover our unified practices in{" "}
          <Link href="/services/web-development" style={{ color: "#00488e", fontWeight: 600, textDecoration: "none" }}>Next.js Web Engineering</Link>,{" "}
          <Link href="/services/seo" style={{ color: "#00488e", fontWeight: 600, textDecoration: "none" }}>Technical Search Optimization</Link>,{" "}
          <Link href="/services/paid-advertising" style={{ color: "#00488e", fontWeight: 600, textDecoration: "none" }}>Performance Marketing</Link>, and{" "}
          <Link href="/services/crm" style={{ color: "#00488e", fontWeight: 600, textDecoration: "none" }}>Omnichannel CRM Automation</Link>. Explore our tailored solutions for{" "}
          <Link href="/industries" style={{ color: "#00488e", fontWeight: 600, textDecoration: "none" }}>Global Enterprise Industries</Link>.
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section style={{ marginTop: "4rem" }}>
        <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#00488e", display: "block", marginBottom: "0.5rem" }}>
          • GLOBAL INQUIRIES /
        </span>
        <h2 style={{ fontSize: "clamp(1.6rem, 2.5vw, 2rem)", fontWeight: 800, letterSpacing: "-0.02em", color: "#0a0a0a", marginBottom: "2rem" }}>
          Frequently Asked Questions on Cross-Border Collaboration
        </h2>
        <div className={styles.faqList}>
          {LOCATION_FAQS.map((faq, index) => (
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
          • CONNECT ACROSS ANY GLOBAL CORRIDOR /
        </span>
        <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.75rem)", fontWeight: 800, letterSpacing: "-0.02em", color: "#ffffff", marginBottom: "1rem" }}>
          Ready to Scale Your Business Internationally?
        </h2>
        <p style={{ fontSize: "1rem", color: "rgba(255, 255, 255, 0.8)", maxWidth: "720px", margin: "0 auto 2rem auto", lineHeight: 1.65 }}>
          Schedule a technical discovery session with our senior architects to discuss your international growth objectives and receive a tailored implementation proposal.
        </p>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <Link
            href="/contact"
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
