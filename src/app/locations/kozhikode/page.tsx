import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, MapPin, ArrowRight, ShieldCheck, Code2, Search, Target, Share2, HelpCircle } from "lucide-react";
import { constructMetadata } from "@/lib/metadata";
import { SITE_CONFIG } from "@/lib/constants";
import styles from "@/components/locations/LocationPage.module.css";

export const metadata: Metadata = constructMetadata({
  title: "Web Development & Marketing Kozhikode | Qubizon",
  description:
    "Partner with Qubizon for high-performance Next.js web development, technical SEO, and ROI-driven digital marketing tailored for growing businesses in Kozhikode and Malabar.",
  path: "/locations/kozhikode",
  keywords: [
    "Digital Marketing Kozhikode",
    "Web Development Company Kozhikode",
    "SEO Services Kozhikode",
    "Website Designers Calicut",
    "Social Media Agency Kozhikode",
    "PPC Agency Kerala",
  ],
});

export default function KozhikodeLocationPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": SITE_CONFIG.domain },
          { "@type": "ListItem", "position": 2, "name": "Service Areas", "item": `${SITE_CONFIG.domain}/locations` },
          { "@type": "ListItem", "position": 3, "name": "Kozhikode", "item": `${SITE_CONFIG.domain}/locations/kozhikode` },
        ],
      },
      {
        "@type": "ProfessionalService",
        "@id": `${SITE_CONFIG.domain}/locations/kozhikode#service`,
        "name": "Qubizon Digital Solutions — Kozhikode Hub",
        "image": `${SITE_CONFIG.domain}/icon.png`,
        "url": `${SITE_CONFIG.domain}/locations/kozhikode`,
        "telephone": SITE_CONFIG.phoneTel,
        "email": SITE_CONFIG.email,
        "priceRange": "$$$",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Cyberpark / Mavoor Road Commercial Hub",
          "addressLocality": "Kozhikode",
          "addressRegion": "Kerala",
          "postalCode": "673016",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 11.2588,
          "longitude": 75.7804
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            "opens": "09:00",
            "closes": "18:00"
          }
        ],
        "areaServed": [
          { "@type": "City", "name": "Kozhikode", "alternateName": "Calicut" },
          { "@type": "AdministrativeArea", "name": "Malabar" },
          { "@type": "AdministrativeArea", "name": "Kerala" }
        ],
        "sameAs": [
          SITE_CONFIG.social.linkedin,
          SITE_CONFIG.social.instagram,
          "https://clutch.co/profile/qubizon",
          "https://www.goodfirms.co/company/qubizon"
        ],
        "description": "Enterprise Next.js web application development, technical SEO clustering, performance Google Ads, and CRM workflow automation for commercial leaders in Kozhikode and Malabar."
      },
    ],
  };

  const FAQS = [
    {
      q: "Does Qubizon work with businesses based in Kozhikode (Calicut)?",
      a: "Yes. Qubizon delivers end-to-end digital solutions—from custom Next.js web platforms to local search engine optimization—for commercial, retail, healthcare, and export businesses operating across Kozhikode and the Malabar region.",
    },
    {
      q: "How does project collaboration work for Kozhikode clients?",
      a: "We operate a transparent, agile delivery model with direct access to senior practitioners. We conduct initial scoping sessions remotely or on-site as required, followed by scheduled bi-weekly sprint reviews, shared task boards, and real-time communication.",
    },
    {
      q: "Why choose Next.js web development over standard CMS platforms in Kozhikode?",
      a: "Standard WordPress or generic CMS sites frequently suffer from sluggish load times, bloated plugins, and poor mobile Core Web Vitals. Our custom Next.js builds deliver sub-second loading speeds, zero layout shift, and clean code that significantly outranks competitors on Google.",
    },
    {
      q: "Can you help our Kozhikode business target customers in the GCC or international markets?",
      a: "Absolutely. Many Kozhikode enterprises serve clients across the UAE, Saudi Arabia, and global markets. We architect multilingual SEO, regional paid ad campaigns, and international-grade web platforms designed to convert cross-border buyers.",
    },
  ];

  return (
    <div className={`container ${styles.pageContainer}`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <nav aria-label="Breadcrumb">
        <ul className={styles.breadcrumb}>
          <li><Link href="/">Home</Link></li>
          <ChevronRight size={12} aria-hidden="true" />
          <li><Link href="/locations">Locations</Link></li>
          <ChevronRight size={12} aria-hidden="true" />
          <li aria-current="page">Kozhikode</li>
        </ul>
      </nav>

      <header className={styles.hero}>
        <div className={styles.badge}>
          <MapPin size={14} aria-hidden="true" />
          <span>Regional Service Area • Malabar, Kerala</span>
        </div>
        <h1 className={styles.title}>
          Digital Marketing & Web Development <span className="calligraphy">in Kozhikode</span>
        </h1>
        <p className={styles.lead}>
          Powering Kozhikode’s commercial brands, retail innovators, healthcare providers, and export enterprises
          with disciplined Next.js web architecture, technical SEO, and conversion-focused digital marketing.
        </p>
        <div className={styles.ctaRow}>
          <Link href="/contact" className={styles.primaryBtn}>
            <span>Consult With Our Engineering Team</span>
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
          <Link href="/work" className={styles.secondaryBtn}>
            <span>View Architecture Benchmarks</span>
          </Link>
        </div>
      </header>

      {/* Services Breakdown */}
      <section className={styles.section} aria-labelledby="kozhikode-services">
        <h2 id="kozhikode-services" className={styles.sectionTitle}>
          Tailored Digital Disciplines for Kozhikode Enterprises
        </h2>
        <p className={styles.sectionSubtitle}>
          Instead of dealing with separate, disconnected freelancers or agencies, Qubizon provides a single unified
          delivery cube to drive measurable growth.
        </p>

        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <div className={styles.cardIcon}><Code2 size={22} aria-hidden="true" /></div>
            <h3 className={styles.cardTitle}>High-Speed Web Development</h3>
            <p className={styles.cardDesc}>
              Custom React & Next.js platforms built for instantaneous mobile navigation, strict WCAG 2.1 AA accessibility, and maximum sales conversion.
            </p>
            <Link href="/services/web-development" className={styles.cardLink}>
              Next.js Web Development Services in Kozhikode <ChevronRight size={14} aria-hidden="true" />
            </Link>
          </div>

          <div className={styles.serviceCard}>
            <div className={styles.cardIcon}><Search size={22} aria-hidden="true" /></div>
            <h3 className={styles.cardTitle}>Local & Technical SEO</h3>
            <p className={styles.cardDesc}>
              Dominate organic search queries in Kozhikode and regional Kerala through semantic schema graphs, keyword clustering, and crawl optimization.
            </p>
            <Link href="/services/seo" className={styles.cardLink}>
              Technical SEO &amp; Schema Services in Kozhikode <ChevronRight size={14} aria-hidden="true" />
            </Link>
          </div>

          <div className={styles.serviceCard}>
            <div className={styles.cardIcon}><Target size={22} aria-hidden="true" /></div>
            <h3 className={styles.cardTitle}>Precision Paid Advertising</h3>
            <p className={styles.cardDesc}>
              Target high-intent buyers across Google Ads and Meta platforms with rigorous negative keyword lists and measurable ROAS tracking.
            </p>
            <Link href="/services/paid-advertising" className={styles.cardLink}>
              Performance PPC &amp; Google Ads Management <ChevronRight size={14} aria-hidden="true" />
            </Link>
          </div>

          <div className={styles.serviceCard}>
            <div className={styles.cardIcon}><Share2 size={22} aria-hidden="true" /></div>
            <h3 className={styles.cardTitle}>Social Growth & Authority</h3>
            <p className={styles.cardDesc}>
              Engage Malabar audiences and global buyers with disciplined brand storytelling, thought leadership, and organic distribution.
            </p>
            <Link href="/services/social-media-marketing" className={styles.cardLink}>
              Social Media Strategy &amp; Executive Distribution <ChevronRight size={14} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* Service Delivery Model */}
      <section className={styles.deliveryCard} aria-labelledby="delivery-heading">
        <div className={styles.badge}>
          <ShieldCheck size={14} aria-hidden="true" />
          <span>Execution Integrity</span>
        </div>
        <h2 id="delivery-heading" className={styles.sectionTitle}>
          How We Deliver For Kozhikode Businesses
        </h2>
        <p className={styles.sectionSubtitle}>
          We combine local market understanding with enterprise-grade engineering standards.
        </p>

        <div className={styles.deliveryGrid}>
          <div className={styles.deliveryItem}>
            <h4>1. Strategic Discovery</h4>
            <p>We analyze your local competitive landscape, technical blockers, and revenue targets before writing code.</p>
          </div>
          <div className={styles.deliveryItem}>
            <h4>2. Direct Practitioner Access</h4>
            <p>You work directly with our senior software engineers and SEO strategists, avoiding account management layers.</p>
          </div>
          <div className={styles.deliveryItem}>
            <h4>3. Verifiable Performance</h4>
            <p>Every milestone is backed by verifiable metrics: Lighthouse 100 speed scores, indexation rates, and verified lead flow.</p>
          </div>
        </div>
      </section>

      {/* Key Economic Sectors in Kozhikode */}
      <section style={{ marginTop: "3rem", marginBottom: "3rem", background: "rgba(255, 255, 255, 0.8)", border: "1px solid rgba(0, 0, 0, 0.08)", borderRadius: "20px", padding: "clamp(2rem, 4vw, 3rem)" }}>
        <h2 className={styles.sectionTitle} style={{ textAlign: "center", marginBottom: "1rem" }}>
          Specialized Digital Solutions for Kozhikode Industries
        </h2>
        <p className={styles.sectionSubtitle} style={{ textAlign: "center", maxWidth: "750px", margin: "0 auto 2.5rem auto" }}>
          From the vibrant commercial hubs of SM Street and Mavoor Road to Cyberpark and Malabar export corridors, we architect tailored digital platforms for regional market leaders:
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
          <div style={{ background: "#ffffff", border: "1px solid rgba(0, 0, 0, 0.06)", borderRadius: "14px", padding: "1.5rem" }}>
            <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--brand-blue, #00488e)", marginBottom: "0.5rem" }}>
              Healthcare &amp; Hospital Networks
            </h3>
            <p style={{ fontSize: "0.9rem", color: "#64748b", lineHeight: 1.6, margin: 0 }}>
              Custom patient appointment portals, doctor directory schemas, and medical tourism landing pages optimized for Gulf NRI and international travelers seeking premier Calicut healthcare facilities.
            </p>
          </div>

          <div style={{ background: "#ffffff", border: "1px solid rgba(0, 0, 0, 0.06)", borderRadius: "14px", padding: "1.5rem" }}>
            <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--brand-blue, #00488e)", marginBottom: "0.5rem" }}>
              Retail &amp; Direct-to-Consumer Brands
            </h3>
            <p style={{ fontSize: "0.9rem", color: "#64748b", lineHeight: 1.6, margin: 0 }}>
              High-converting Next.js digital storefronts engineered with zero layout shift and instant search filtering, powering Calicut jewelers, textile houses, and food exporters.
            </p>
          </div>

          <div style={{ background: "#ffffff", border: "1px solid rgba(0, 0, 0, 0.06)", borderRadius: "14px", padding: "1.5rem" }}>
            <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--brand-blue, #00488e)", marginBottom: "0.5rem" }}>
              Malabar Export &amp; Spices Enterprises
            </h3>
            <p style={{ fontSize: "0.9rem", color: "#64748b", lineHeight: 1.6, margin: 0 }}>
              B2B catalog portals, international Google Ads search funnels, and enterprise multilingual websites connecting Kozhikode manufacturers with importers across the GCC and Europe.
            </p>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className={styles.section} aria-labelledby="kozhikode-faqs">
        <h2 id="kozhikode-faqs" className={styles.sectionTitle}>
          Frequently Asked Questions — Kozhikode Services
        </h2>
        <div className={styles.faqList}>
          {FAQS.map((faq, index) => (
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
          • MALABAR REGIONAL COMMERCIAL FRAMEWORK /
        </span>
        <h2 style={{ fontSize: "clamp(1.6rem, 2.5vw, 2.1rem)", fontWeight: 800, letterSpacing: "-0.02em", color: "#0a0a0a", marginBottom: "1rem" }}>
          Enterprise Digital Standards for Kozhikode &amp; Malabar Businesses
        </h2>
        <p style={{ fontSize: "1rem", lineHeight: 1.65, color: "#4a5568", maxWidth: "860px", marginBottom: "2rem" }}>
          From technology startups in UL Cyberpark and Government Cyberpark to legacy mercantile houses across SM Street and Valiyangadi, Kozhikode businesses face unprecedented digital opportunities. Qubizon replaces slow WordPress themes with high-performance Next.js 15 web applications and data-driven marketing funnels.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))", gap: "1.5rem", marginBottom: "2.5rem" }}>
          <div style={{ background: "#ffffff", padding: "1.75rem", borderRadius: "14px", border: "1px solid #e2e8f0" }}>
            <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#0a0a0a", marginBottom: "0.5rem" }}>
              India DPDP Act 2023 &amp; Data Security
            </h3>
            <p style={{ fontSize: "0.88rem", lineHeight: 1.6, color: "#64748b", margin: 0 }}>
              We build custom web architectures adhering strictly to the Digital Personal Data Protection (DPDP) Act 2023. All form submissions, lead data, and customer identities are handled with encrypted database protocols, secure consent mechanisms, and TLS 1.3 encryption.
            </p>
          </div>

          <div style={{ background: "#ffffff", padding: "1.75rem", borderRadius: "14px", border: "1px solid #e2e8f0" }}>
            <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#0a0a0a", marginBottom: "0.5rem" }}>
              Hyper-Local Malabar SEO &amp; Google Maps Visibility
            </h3>
            <p style={{ fontSize: "0.88rem", lineHeight: 1.6, color: "#64748b", margin: 0 }}>
              We build location-specific Schema.org LocalBusiness graphs for Kozhikode, Mavoor Road, Thondayad, and Hilite City. This unlocks map pack rankings on Google Maps and high-intent local search queries from customers across Calicut and Malappuram.
            </p>
          </div>

          <div style={{ background: "#ffffff", padding: "1.75rem", borderRadius: "14px", border: "1px solid #e2e8f0" }}>
            <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#0a0a0a", marginBottom: "0.5rem" }}>
              Gulf NRI Export Corridor Connectivity
            </h3>
            <p style={{ fontSize: "0.88rem", lineHeight: 1.6, color: "#64748b", margin: 0 }}>
              Kozhikode enterprises possess unique commercial ties to the GCC. We optimize international landing pages for high-ticket NRI buyers across the UAE, Saudi Arabia, Qatar, and Kuwait seeking Calicut real estate, specialized medical treatments, and wholesale commercial imports.
            </p>
          </div>

          <div style={{ background: "#ffffff", padding: "1.75rem", borderRadius: "14px", border: "1px solid #e2e8f0" }}>
            <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#0a0a0a", marginBottom: "0.5rem" }}>
              Unified WhatsApp API &amp; CRM Funnel Automation
            </h3>
            <p style={{ fontSize: "0.88rem", lineHeight: 1.6, color: "#64748b", margin: 0 }}>
              Every lead generated through Google Ads or social media advertising instantly triggers official WhatsApp Business API confirmations and assigns the prospect to your sales reps inside unified CRM workflows within seconds.
            </p>
          </div>
        </div>

        <div style={{ borderTop: "1px solid #e2e8f0", paddingTop: "1.5rem", fontSize: "0.88rem", color: "#64748b", lineHeight: 1.6 }}>
          <strong>Related Services in Kozhikode:</strong> Explore our specialized services in{" "}
          <Link href="/services/web-development" style={{ color: "#00488e", fontWeight: 600, textDecoration: "none" }}>Next.js Web Development</Link>,{" "}
          <Link href="/services/seo" style={{ color: "#00488e", fontWeight: 600, textDecoration: "none" }}>Technical SEO</Link>,{" "}
          <Link href="/services/paid-advertising" style={{ color: "#00488e", fontWeight: 600, textDecoration: "none" }}>Performance Google Ads</Link>, and{" "}
          <Link href="/services/crm" style={{ color: "#00488e", fontWeight: 600, textDecoration: "none" }}>Automated CRM Workflows</Link>. Review our sector architectures for{" "}
          <Link href="/industries" style={{ color: "#00488e", fontWeight: 600, textDecoration: "none" }}>Healthcare, Retail &amp; Manufacturing</Link>.
        </div>
      </section>

      {/* Kozhikode Cyberpark & Malabar Trade Framework */}
      <section style={{ marginTop: "3.5rem", background: "#ffffff", padding: "3rem clamp(1.5rem, 4vw, 3rem)", borderRadius: "20px", border: "1px solid #e2e8f0" }}>
        <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#00488e", display: "block", marginBottom: "0.5rem" }}>
          • CYBERPARK &amp; MALABAR COMMERCIAL HUBS /
        </span>
        <h2 style={{ fontSize: "clamp(1.5rem, 2.4vw, 2.1rem)", fontWeight: 800, letterSpacing: "-0.02em", color: "#0a0a0a", marginBottom: "1rem" }}>
          Specialized Digital Architecture for Kozhikode Verticals
        </h2>
        <p style={{ fontSize: "1rem", lineHeight: 1.65, color: "#4a5568", maxWidth: "860px", marginBottom: "2rem" }}>
          From technology ventures in UL Cyberpark and Government Cyberpark to historic mercantile houses in Valiyangadi, we engineer high-performance platforms tailored to Calicut&apos;s dynamic market.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))", gap: "1.5rem" }}>
          <div style={{ background: "#f8fafc", padding: "1.75rem", borderRadius: "14px", border: "1px solid #e2e8f0" }}>
            <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "#0a0a0a", marginBottom: "0.5rem" }}>
              Cyberpark SaaS &amp; Tech Startups
            </h3>
            <p style={{ fontSize: "0.88rem", lineHeight: 1.6, color: "#64748b", margin: 0 }}>
              Tailored for product teams scaling globally. Next.js 15 App Router applications, self-hosted font pipelines, international Stripe billing, and developer documentation portals.
            </p>
          </div>

          <div style={{ background: "#f8fafc", padding: "1.75rem", borderRadius: "14px", border: "1px solid #e2e8f0" }}>
            <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "#0a0a0a", marginBottom: "0.5rem" }}>
              SM Street &amp; Mavoor Road Retail Chains
            </h3>
            <p style={{ fontSize: "0.88rem", lineHeight: 1.6, color: "#64748b", margin: 0 }}>
              Headless e-commerce storefronts engineered for jewelers, textile stores, and retail brands. Sub-second product filtering, UPI checkout, and automated WhatsApp order updates.
            </p>
          </div>

          <div style={{ background: "#f8fafc", padding: "1.75rem", borderRadius: "14px", border: "1px solid #e2e8f0" }}>
            <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "#0a0a0a", marginBottom: "0.5rem" }}>
              Malabar Export &amp; Global Trade Corridors
            </h3>
            <p style={{ fontSize: "0.88rem", lineHeight: 1.6, color: "#64748b", margin: 0 }}>
              B2B quotation systems, international trade catalogs, and precision Google Ads capturing commercial buyers across Dubai, Abu Dhabi, Doha, and European trading ports.
            </p>
          </div>
        </div>
      </section>

      {/* Bottom CTA Card */}
      <section style={{ marginTop: "4rem", background: "linear-gradient(135deg, #0b1530 0%, #00488e 100%)", borderRadius: "24px", padding: "clamp(2.5rem, 5vw, 4rem)", color: "#ffffff", textAlign: "center" }}>
        <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#ffbe0b", display: "block", marginBottom: "0.75rem" }}>
          • PARTNER WITH QUBIZON FOR KOZHIKODE MARKET EXPANSION /
        </span>
        <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.75rem)", fontWeight: 800, letterSpacing: "-0.02em", color: "#ffffff", marginBottom: "1rem" }}>
          Ready to Out-Engineer Your Competition in Calicut?
        </h2>
        <p style={{ fontSize: "1rem", color: "rgba(255, 255, 255, 0.8)", maxWidth: "720px", margin: "0 auto 2rem auto", lineHeight: 1.65 }}>
          Schedule a technical discovery session with our senior engineering team to inspect your web architecture, Google search rankings, and paid acquisition funnels.
        </p>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <Link
            href="/contact?location=kozhikode"
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
