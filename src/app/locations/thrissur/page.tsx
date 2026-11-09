import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, MapPin, ArrowRight, ShieldCheck, Code2, Search, Target, Share2 } from "lucide-react";
import { constructMetadata } from "@/lib/metadata";
import { SITE_CONFIG } from "@/lib/constants";
import styles from "@/components/locations/LocationPage.module.css";

export const metadata: Metadata = constructMetadata({
  title: "Web Development & Marketing Thrissur | Qubizon",
  description:
    "High-performance website development, technical SEO, and conversion-focused digital marketing engineered for retail, commercial, and enterprise businesses in Thrissur, Kerala.",
  path: "/locations/thrissur",
  keywords: [
    "Digital Marketing Thrissur",
    "Web Development Company Thrissur",
    "SEO Agency Thrissur",
    "Website Designers Thrissur",
    "Social Media Marketing Thrissur",
    "PPC Services Kerala",
  ],
});

export default function ThrissurLocationPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": SITE_CONFIG.domain },
          { "@type": "ListItem", "position": 2, "name": "Service Areas", "item": `${SITE_CONFIG.domain}/locations` },
          { "@type": "ListItem", "position": 3, "name": "Thrissur", "item": `${SITE_CONFIG.domain}/locations/thrissur` },
        ],
      },
      {
        "@type": "Service",
        "@id": `${SITE_CONFIG.domain}/locations/thrissur#service`,
        "name": "Digital Marketing & Web Development in Thrissur",
        "provider": { "@id": `${SITE_CONFIG.domain}/#organization` },
        "serviceType": "Web Development and Digital Marketing",
        "areaServed": {
          "@type": "City",
          "name": "Thrissur",
          "alternateName": "Trichur",
          "containedInPlace": { "@type": "AdministrativeArea", "name": "Kerala", "addressCountry": "IN" },
        },
        "description": "Custom Next.js web application development, technical SEO clustering, performance advertising, and social media marketing for commercial enterprises in Thrissur, Kerala.",
      },
    ],
  };

  const FAQS = [
    {
      q: "What types of businesses does Qubizon serve in Thrissur?",
      a: "We support Thrissur’s thriving commercial ecosystem—including retail brands, jewelry chains, real estate developers, healthcare institutions, and manufacturing exporters—with high-converting digital platforms and targeted growth campaigns.",
    },
    {
      q: "Can you upgrade our existing slow WordPress or Magento site in Thrissur?",
      a: "Yes. We specialize in modernizing legacy, slow-loading websites into headless Next.js platforms that achieve perfect 100/100 Lighthouse performance, sub-second page loads, and zero layout shift.",
    },
    {
      q: "How does Qubizon approach Local and Technical SEO in Thrissur?",
      a: "Rather than generic keyword stuffing, we implement structured Schema.org entity graphs, crawl budget engineering, localized content clusters, and high-authority digital PR to guarantee sustainable top-tier Google rankings.",
    },
    {
      q: "How do we get started with a consultation for our Thrissur business?",
      a: "Simply complete our structured consultation form or email info@qubizon.com. We schedule a direct discovery call with our technical lead to evaluate your current architecture and outline a measurable digital growth roadmap.",
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
          <li aria-current="page">Thrissur</li>
        </ul>
      </nav>

      <header className={styles.hero}>
        <div className={styles.badge}>
          <MapPin size={14} aria-hidden="true" />
          <span>Regional Service Area • Central Kerala</span>
        </div>
        <h1 className={styles.title}>
          Digital Marketing & Web Development <span className="calligraphy">in Thrissur</span>
        </h1>
        <p className={styles.lead}>
          Empowering Thrissur’s business leaders with modern web architecture, technical search engine
          dominance, and high-yield paid marketing. Built for measurable business revenue and zero digital bloat.
        </p>
        <div className={styles.ctaRow}>
          <Link href="/contact" className={styles.primaryBtn}>
            <span>Request Discovery Call</span>
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
          <Link href="/work" className={styles.secondaryBtn}>
            <span>Review Our Performance Benchmarks</span>
          </Link>
        </div>
      </header>

      {/* Services Breakdown */}
      <section className={styles.section} aria-labelledby="thrissur-services">
        <h2 id="thrissur-services" className={styles.sectionTitle}>
          Integrated Digital Solutions for Thrissur Enterprises
        </h2>
        <p className={styles.sectionSubtitle}>
          We deliver complete digital synchronization so your web platform, organic search, and advertising
          work in harmony to drive qualified customer inquiries.
        </p>

        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <div className={styles.cardIcon}><Code2 size={22} aria-hidden="true" /></div>
            <h3 className={styles.cardTitle}>Custom Next.js Web Development</h3>
            <p className={styles.cardDesc}>
              Sub-second web platforms with server-side rendering, rigorous security, and seamless mobile responsiveness across all devices.
            </p>
            <Link href="/services/web-development" className={styles.cardLink}>
              Explore Web Development <ChevronRight size={14} aria-hidden="true" />
            </Link>
          </div>

          <div className={styles.serviceCard}>
            <div className={styles.cardIcon}><Search size={22} aria-hidden="true" /></div>
            <h3 className={styles.cardTitle}>Technical & Regional SEO</h3>
            <p className={styles.cardDesc}>
              Topical authority clustering and crawl optimization that capture high-value commercial searches in Thrissur and across Kerala.
            </p>
            <Link href="/services/seo" className={styles.cardLink}>
              Explore SEO Framework <ChevronRight size={14} aria-hidden="true" />
            </Link>
          </div>

          <div className={styles.serviceCard}>
            <div className={styles.cardIcon}><Target size={22} aria-hidden="true" /></div>
            <h3 className={styles.cardTitle}>Paid Acquisition & PPC</h3>
            <p className={styles.cardDesc}>
              Targeted Google Ads and paid social campaigns built with continuous conversion tracking, negative keywords, and verified ROAS.
            </p>
            <Link href="/services/paid-advertising" className={styles.cardLink}>
              Explore Paid Ads <ChevronRight size={14} aria-hidden="true" />
            </Link>
          </div>

          <div className={styles.serviceCard}>
            <div className={styles.cardIcon}><Share2 size={22} aria-hidden="true" /></div>
            <h3 className={styles.cardTitle}>Social Brand Strategy</h3>
            <p className={styles.cardDesc}>
              Professional storytelling, LinkedIn thought leadership, and Instagram community growth for Thrissur commercial brands.
            </p>
            <Link href="/services/social-media-marketing" className={styles.cardLink}>
              Explore Social Strategy <ChevronRight size={14} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* Service Delivery */}
      <section className={styles.deliveryCard} aria-labelledby="thrissur-delivery">
        <div className={styles.badge}>
          <ShieldCheck size={14} aria-hidden="true" />
          <span>Disciplined Engineering</span>
        </div>
        <h2 id="thrissur-delivery" className={styles.sectionTitle}>
          Direct, Agile Execution for Thrissur Clients
        </h2>
        <p className={styles.sectionSubtitle}>
          We operate without bureaucratic middle-management layers, giving your leadership team direct access to the software engineers and growth strategists building your digital presence.
        </p>

        <div className={styles.deliveryGrid}>
          <div className={styles.deliveryItem}>
            <h4>1. Rapid Prototyping & Audits</h4>
            <p>We audit your existing assets and create interactive functional prototypes to validate direction early.</p>
          </div>
          <div className={styles.deliveryItem}>
            <h4>2. Strict Code Quality & Security</h4>
            <p>Every line of code is typed with TypeScript, tested for accessibility (WCAG 2.1 AA), and secured against common vulnerabilities.</p>
          </div>
          <div className={styles.deliveryItem}>
            <h4>3. Measurable Commercial Outcomes</h4>
            <p>Clear reporting on Core Web Vitals, organic search positions, and qualified leads generated every month.</p>
          </div>
        </div>
      </section>

      {/* Key Economic Sectors in Thrissur */}
      <section style={{ marginTop: "3rem", marginBottom: "3rem", background: "rgba(255, 255, 255, 0.8)", border: "1px solid rgba(0, 0, 0, 0.08)", borderRadius: "20px", padding: "clamp(2rem, 4vw, 3rem)" }}>
        <h2 className={styles.sectionTitle} style={{ textAlign: "center", marginBottom: "1rem" }}>
          Specialized Digital Solutions for Thrissur Enterprises
        </h2>
        <p className={styles.sectionSubtitle} style={{ textAlign: "center", maxWidth: "750px", margin: "0 auto 2.5rem auto" }}>
          Known as the cultural and financial capital of Kerala, Thrissur is home to leading banking institutions, jewellery conglomerates, and manufacturing hubs that demand high-trust digital platforms:
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
          <div style={{ background: "#ffffff", border: "1px solid rgba(0, 0, 0, 0.06)", borderRadius: "14px", padding: "1.5rem" }}>
            <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--brand-blue, #00488e)", marginBottom: "0.5rem" }}>
              Banking, NBFC &amp; Financial Services
            </h3>
            <p style={{ fontSize: "0.9rem", color: "#64748b", lineHeight: 1.6, margin: 0 }}>
              Rigorous, accessible web interfaces engineered with strict CSP security headers, encrypted API endpoints, and financial trust signals for Thrissur&apos;s established banking and chit-fund ecosystems.
            </p>
          </div>

          <div style={{ background: "#ffffff", border: "1px solid rgba(0, 0, 0, 0.06)", borderRadius: "14px", padding: "1.5rem" }}>
            <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--brand-blue, #00488e)", marginBottom: "0.5rem" }}>
              Gold, Jewellery &amp; Luxury Retail
            </h3>
            <p style={{ fontSize: "0.9rem", color: "#64748b", lineHeight: 1.6, margin: 0 }}>
              Omnichannel digital product showcases with live gold-rate integration, high-resolution visual rendering, and targeted NRI paid campaigns across Dubai, Abu Dhabi, and Doha.
            </p>
          </div>

          <div style={{ background: "#ffffff", border: "1px solid rgba(0, 0, 0, 0.06)", borderRadius: "14px", padding: "1.5rem" }}>
            <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--brand-blue, #00488e)", marginBottom: "0.5rem" }}>
              Ayurveda, Wellness &amp; Hospitality
            </h3>
            <p style={{ fontSize: "0.9rem", color: "#64748b", lineHeight: 1.6, margin: 0 }}>
              Consultation booking engines, multilingual global search architecture, and authentic brand storytelling connecting traditional Ayurvedic health resorts with international wellness travelers.
            </p>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className={styles.section} aria-labelledby="thrissur-faqs">
        <h2 id="thrissur-faqs" className={styles.sectionTitle}>
          Frequently Asked Questions — Thrissur Services
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
          • CENTRAL KERALA COMMERCIAL FRAMEWORK /
        </span>
        <h2 style={{ fontSize: "clamp(1.6rem, 2.5vw, 2.1rem)", fontWeight: 800, letterSpacing: "-0.02em", color: "#0a0a0a", marginBottom: "1rem" }}>
          Enterprise Digital Standards for Thrissur Commercial Clients
        </h2>
        <p style={{ fontSize: "1rem", lineHeight: 1.65, color: "#4a5568", maxWidth: "860px", marginBottom: "2rem" }}>
          As the cultural and banking epicenter of Kerala, Thrissur commands a sophisticated financial and retail base. From the bustling jewellery retail hubs of High Road and Kuruppam Road to banking headquarters and healthcare institutions, Qubizon delivers rock-solid web architecture, localized SEO, and omnichannel advertising.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))", gap: "1.5rem", marginBottom: "2.5rem" }}>
          <div style={{ background: "#ffffff", padding: "1.75rem", borderRadius: "14px", border: "1px solid #e2e8f0" }}>
            <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#0a0a0a", marginBottom: "0.5rem" }}>
              Financial Trust Signals &amp; Security Rigor
            </h3>
            <p style={{ fontSize: "0.88rem", lineHeight: 1.6, color: "#64748b", margin: 0 }}>
              For Thrissur&apos;s financial services and NBFCs, trust is non-negotiable. We implement enterprise security headers (CSP, HSTS, X-Frame-Options), end-to-end TLS 1.3 encryption, and DPDP Act 2023 compliant data governance protocols to safeguard sensitive customer data.
            </p>
          </div>

          <div style={{ background: "#ffffff", padding: "1.75rem", borderRadius: "14px", border: "1px solid #e2e8f0" }}>
            <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#0a0a0a", marginBottom: "0.5rem" }}>
              High-Speed Mobile Showcase for Luxury Retail
            </h3>
            <p style={{ fontSize: "0.88rem", lineHeight: 1.6, color: "#64748b", margin: 0 }}>
              Gold jewelers and luxury retail brands in Thrissur require sub-second image loading and crystal-clear visual catalogs. We build with Next.js image optimization, responsive AVIF formats, and zero layout shift (CLS = 0.00) to keep high-value shoppers engaged.
            </p>
          </div>

          <div style={{ background: "#ffffff", padding: "1.75rem", borderRadius: "14px", border: "1px solid #e2e8f0" }}>
            <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#0a0a0a", marginBottom: "0.5rem" }}>
              NRI Audience Targeting across Gulf Corridors
            </h3>
            <p style={{ fontSize: "0.88rem", lineHeight: 1.6, color: "#64748b", margin: 0 }}>
              Thrissur has a vast expatriate diaspora across Dubai, Abu Dhabi, Doha, and Kuwait. Our precision PPC campaigns and international SEO models connect Thrissur developers, healthcare providers, and jewellers directly with high-intent NRI decision-makers.
            </p>
          </div>

          <div style={{ background: "#ffffff", padding: "1.75rem", borderRadius: "14px", border: "1px solid #e2e8f0" }}>
            <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#0a0a0a", marginBottom: "0.5rem" }}>
              Omnichannel CRM &amp; Instant WhatsApp Routing
            </h3>
            <p style={{ fontSize: "0.88rem", lineHeight: 1.6, color: "#64748b", margin: 0 }}>
              Every lead generated through Google Search advertising or organic landing pages triggers official WhatsApp Business API webhooks, alerting your showroom managers and sales reps within seconds to initiate direct consultation.
            </p>
          </div>
        </div>

        <div style={{ borderTop: "1px solid #e2e8f0", paddingTop: "1.5rem", fontSize: "0.88rem", color: "#64748b", lineHeight: 1.6 }}>
          <strong>Related Services in Thrissur:</strong> Discover our specialized capabilities in{" "}
          <Link href="/services/web-development" style={{ color: "#00488e", fontWeight: 600, textDecoration: "none" }}>Next.js Web Development</Link>,{" "}
          <Link href="/services/seo" style={{ color: "#00488e", fontWeight: 600, textDecoration: "none" }}>Thrissur Technical SEO</Link>,{" "}
          <Link href="/services/paid-advertising" style={{ color: "#00488e", fontWeight: 600, textDecoration: "none" }}>High-ROAS Google Ads</Link>, and{" "}
          <Link href="/services/crm" style={{ color: "#00488e", fontWeight: 600, textDecoration: "none" }}>Automated CRM Workflows</Link>. Explore our industry frameworks for{" "}
          <Link href="/industries" style={{ color: "#00488e", fontWeight: 600, textDecoration: "none" }}>Thrissur Banking, Retail &amp; Healthcare</Link>.
        </div>
      </section>

      {/* Thrissur Central Kerala Commercial Framework */}
      <section style={{ marginTop: "3.5rem", background: "#ffffff", padding: "3rem clamp(1.5rem, 4vw, 3rem)", borderRadius: "20px", border: "1px solid #e2e8f0" }}>
        <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#00488e", display: "block", marginBottom: "0.5rem" }}>
          • CENTRAL KERALA BANKING &amp; RETAIL HUBS /
        </span>
        <h2 style={{ fontSize: "clamp(1.5rem, 2.4vw, 2.1rem)", fontWeight: 800, letterSpacing: "-0.02em", color: "#0a0a0a", marginBottom: "1rem" }}>
          Specialized Digital Architecture for Thrissur Verticals
        </h2>
        <p style={{ fontSize: "1rem", lineHeight: 1.65, color: "#4a5568", maxWidth: "860px", marginBottom: "2rem" }}>
          From the commercial banking institutions centered around Round South to gold jewellery retail empires on High Road, our web architectures are built for high financial trust.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))", gap: "1.5rem" }}>
          <div style={{ background: "#f8fafc", padding: "1.75rem", borderRadius: "14px", border: "1px solid #e2e8f0" }}>
            <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "#0a0a0a", marginBottom: "0.5rem" }}>
              Gold &amp; Jewellery Retail Corridors
            </h3>
            <p style={{ fontSize: "0.88rem", lineHeight: 1.6, color: "#64748b", margin: 0 }}>
              Tailored for premier jewellery showrooms. High-resolution product showcases with zero layout shift, real-time gold rate API feeds, and targeted NRI campaigns across Dubai and Doha.
            </p>
          </div>

          <div style={{ background: "#f8fafc", padding: "1.75rem", borderRadius: "14px", border: "1px solid #e2e8f0" }}>
            <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "#0a0a0a", marginBottom: "0.5rem" }}>
              Banking &amp; NBFC Headquarters
            </h3>
            <p style={{ fontSize: "0.88rem", lineHeight: 1.6, color: "#64748b", margin: 0 }}>
              Engineered with strict Content Security Policy (CSP), TLS 1.3 encryption, DPDP Act 2023 data compliance, and automated loan eligibility consultation workflows.
            </p>
          </div>

          <div style={{ background: "#f8fafc", padding: "1.75rem", borderRadius: "14px", border: "1px solid #e2e8f0" }}>
            <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "#0a0a0a", marginBottom: "0.5rem" }}>
              Ayurveda, Medical &amp; Hospital Networks
            </h3>
            <p style={{ fontSize: "0.88rem", lineHeight: 1.6, color: "#64748b", margin: 0 }}>
              Custom patient appointment portals, NABH data compliance, multilingual wellness tourism landing pages, and automated WhatsApp appointment confirmations.
            </p>
          </div>
        </div>
      </section>

      {/* Bottom CTA Card */}
      <section style={{ marginTop: "4rem", background: "linear-gradient(135deg, #0b1530 0%, #00488e 100%)", borderRadius: "24px", padding: "clamp(2.5rem, 5vw, 4rem)", color: "#ffffff", textAlign: "center" }}>
        <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#ffbe0b", display: "block", marginBottom: "0.75rem" }}>
          • PARTNER WITH QUBIZON FOR THRISSUR MARKET EXPANSION /
        </span>
        <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.75rem)", fontWeight: 800, letterSpacing: "-0.02em", color: "#ffffff", marginBottom: "1rem" }}>
          Ready to Out-Engineer Your Competition in Thrissur?
        </h2>
        <p style={{ fontSize: "1rem", color: "rgba(255, 255, 255, 0.8)", maxWidth: "720px", margin: "0 auto 2rem auto", lineHeight: 1.65 }}>
          Schedule a technical discovery session with our senior engineering team to inspect your web architecture, Google search rankings, and paid acquisition funnels.
        </p>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <Link
            href="/contact?location=thrissur"
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
