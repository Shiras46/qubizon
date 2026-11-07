import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, MapPin, ArrowRight, ShieldCheck, Code2, Search, Target, Share2, HelpCircle } from "lucide-react";
import { constructMetadata } from "@/lib/metadata";
import { SITE_CONFIG } from "@/lib/constants";
import styles from "@/components/locations/LocationPage.module.css";

export const metadata: Metadata = constructMetadata({
  title: "Digital Marketing & Web Development in Kozhikode | Qubizon",
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
        "@type": "Service",
        "@id": `${SITE_CONFIG.domain}/locations/kozhikode#service`,
        "name": "Digital Marketing & Web Development in Kozhikode",
        "provider": { "@id": `${SITE_CONFIG.domain}/#organization` },
        "serviceType": "Web Development and Digital Marketing",
        "areaServed": {
          "@type": "City",
          "name": "Kozhikode",
          "alternateName": "Calicut",
          "containedInPlace": { "@type": "AdministrativeArea", "name": "Kerala", "addressCountry": "IN" },
        },
        "description": "Custom Next.js web application development, technical SEO clustering, performance advertising, and social media marketing for enterprises in Kozhikode, Kerala.",
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
              Learn more about Web Dev <ChevronRight size={14} aria-hidden="true" />
            </Link>
          </div>

          <div className={styles.serviceCard}>
            <div className={styles.cardIcon}><Search size={22} aria-hidden="true" /></div>
            <h3 className={styles.cardTitle}>Local & Technical SEO</h3>
            <p className={styles.cardDesc}>
              Dominate organic search queries in Kozhikode and regional Kerala through semantic schema graphs, keyword clustering, and crawl optimization.
            </p>
            <Link href="/services/seo" className={styles.cardLink}>
              Explore SEO Framework <ChevronRight size={14} aria-hidden="true" />
            </Link>
          </div>

          <div className={styles.serviceCard}>
            <div className={styles.cardIcon}><Target size={22} aria-hidden="true" /></div>
            <h3 className={styles.cardTitle}>Precision Paid Advertising</h3>
            <p className={styles.cardDesc}>
              Target high-intent buyers across Google Ads and Meta platforms with rigorous negative keyword lists and measurable ROAS tracking.
            </p>
            <Link href="/services/paid-advertising" className={styles.cardLink}>
              Discover Paid Ads <ChevronRight size={14} aria-hidden="true" />
            </Link>
          </div>

          <div className={styles.serviceCard}>
            <div className={styles.cardIcon}><Share2 size={22} aria-hidden="true" /></div>
            <h3 className={styles.cardTitle}>Social Growth & Authority</h3>
            <p className={styles.cardDesc}>
              Engage Malabar audiences and global buyers with disciplined brand storytelling, thought leadership, and organic distribution.
            </p>
            <Link href="/services/social-media-marketing" className={styles.cardLink}>
              Explore Social Strategy <ChevronRight size={14} aria-hidden="true" />
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
    </div>
  );
}
