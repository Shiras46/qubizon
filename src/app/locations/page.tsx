import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, MapPin, ArrowRight, Building2, Compass, CheckCircle2, ShieldCheck, Sparkles, Globe2 } from "lucide-react";
import { constructMetadata } from "@/lib/metadata";
import { SITE_CONFIG } from "@/lib/constants";
import styles from "@/components/locations/LocationPage.module.css";

export const metadata: Metadata = constructMetadata({
  title: "Service Areas — Digital Marketing in Kerala | Qubizon",
  description:
    "Explore Qubizon's service areas across Kerala, including dedicated regional expertise in Kozhikode and Thrissur. Unified web engineering, technical SEO, and paid advertising.",
  path: "/locations",
  keywords: [
    "Digital Marketing Agency Kerala",
    "Web Development Kerala",
    "SEO Services Kozhikode",
    "Digital Marketing Thrissur",
    "Web Architecture Kerala",
  ],
});

const LOCATION_FAQS = [
  {
    q: "How does Qubizon deliver digital services across Kerala?",
    a: "We operate a unified delivery model combining regional strategic consulting with high-speed remote engineering. Whether your headquarters are in Kozhikode, Thrissur, Kochi, or Trivandrum, you receive direct senior practitioner collaboration, bi-weekly sprint reviews, and production deployment transparency without physical friction.",
  },
  {
    q: "Why is custom Next.js development preferred for Kerala businesses?",
    a: "Commercial enterprises in Kerala face increasingly mobile-first user traffic. Custom Next.js web applications eliminate plugin bloat, load in sub-second LCP on 4G/5G mobile devices, and score 100/100 on Google Core Web Vitals, providing decisive competitive advantages over legacy WordPress sites.",
  },
  {
    q: "Can businesses outside Kozhikode and Thrissur partner with Qubizon?",
    a: "Yes. While Kozhikode and Thrissur represent our core practitioner hubs, we actively engineer digital platforms and manage high-intent search campaigns for enterprise clients across Kerala, Bangalore, Dubai, and the broader GCC region.",
  },
  {
    q: "How does Qubizon optimize local Google Business Profiles and regional search rankings?",
    a: "We implement code-level geo-coordinates, LocalBusiness schema entities, localized landing page silos, and citation consistency that establish dominant map pack visibility across targeted regional municipalities.",
  },
  {
    q: "Do you offer in-person technical scoping workshops in Kerala?",
    a: "Yes. For enterprise clients requiring executive stakeholder alignment or detailed ERP/CRM systems discovery, our engineering leads conduct on-site discovery workshops across Kozhikode, Thrissur, and Kochi.",
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
    <div className={`container ${styles.pageContainer}`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <nav aria-label="Breadcrumb">
        <ul className={styles.breadcrumb}>
          <li><Link href="/">Home</Link></li>
          <ChevronRight size={12} aria-hidden="true" />
          <li aria-current="page">Service Areas</li>
        </ul>
      </nav>

      <header className={styles.hero}>
        <div className={styles.badge}>
          <Globe2 size={14} aria-hidden="true" />
          <span>Regional &amp; GCC Coverage • Kerala &amp; UAE</span>
        </div>
        <h1 className={styles.title}>
          Regional &amp; International <span className="calligraphy">Service Hubs</span>
        </h1>
        <p className={styles.lead}>
          Qubizon provides high-performance Next.js web development, technical SEO, and conversion-optimized marketing
          for enterprises throughout Kerala and the GCC (Dubai, Abu Dhabi, Sharjah). We combine deep regional market insights with world-class engineering standards.
        </p>
      </header>

      {/* Priority Regional & International Hubs */}
      <section className={styles.section} aria-labelledby="priority-markets">
        <h2 id="priority-markets" className={styles.sectionTitle}>
          Priority Regional &amp; International Hubs
        </h2>
        <div className={styles.servicesGrid}>
          {/* UAE & GCC Hub */}
          <div className={styles.serviceCard} style={{ border: "2px solid rgba(0, 72, 142, 0.2)", background: "rgba(255, 255, 255, 0.95)" }}>
            <div className={styles.cardIcon}><Globe2 size={22} aria-hidden="true" style={{ color: "var(--brand-blue, #00488e)" }} /></div>
            <h3 className={styles.cardTitle}>UAE &amp; GCC Hub (Dubai &amp; Abu Dhabi)</h3>
            <p className={styles.cardDesc}>
              Partnering with commercial leaders and luxury enterprises across Dubai, Abu Dhabi, Sharjah, and the GCC with sub-second Next.js architecture, Google.ae search authority, and WhatsApp lead automation.
            </p>
            <Link href="/locations/uae" className={styles.cardLink} style={{ fontWeight: 700, color: "var(--brand-blue, #00488e)" }}>
              Explore UAE &amp; GCC Services <ChevronRight size={14} aria-hidden="true" />
            </Link>
          </div>

          {/* Kozhikode Hub */}
          <div className={styles.serviceCard}>
            <div className={styles.cardIcon}><Building2 size={22} aria-hidden="true" /></div>
            <h3 className={styles.cardTitle}>Kozhikode (Calicut)</h3>
            <p className={styles.cardDesc}>
              Serving Kozhikode&apos;s dynamic trade, retail, healthcare, and export businesses with custom Next.js
              platforms, localized search visibility, and performance marketing.
            </p>
            <Link href="/locations/kozhikode" className={styles.cardLink}>
              View Kozhikode Services <ChevronRight size={14} aria-hidden="true" />
            </Link>
          </div>

          {/* Thrissur Hub */}
          <div className={styles.serviceCard}>
            <div className={styles.cardIcon}><Building2 size={22} aria-hidden="true" /></div>
            <h3 className={styles.cardTitle}>Thrissur (Trichur)</h3>
            <p className={styles.cardDesc}>
              Supporting Thrissur&apos;s commercial institutions, retail leaders, and manufacturing innovators with
              sub-second web engineering and targeted customer acquisition campaigns.
            </p>
            <Link href="/locations/thrissur" className={styles.cardLink}>
              View Thrissur Services <ChevronRight size={14} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* Statewide Industry Solutions */}
      <section className={styles.section} aria-labelledby="regional-solutions" style={{ marginTop: "3rem" }}>
        <h2 id="regional-solutions" className={styles.sectionTitle}>
          Disciplined Capabilities Across Kerala&apos;s High-Growth Sectors
        </h2>
        <p className={styles.sectionSubtitle} style={{ marginBottom: "2rem", maxWidth: "800px" }}>
          Modern regional businesses require synchronized digital execution rather than fragmented freelancer handoffs.
          Our integrated cube model delivers compound growth across multiple verticals:
        </p>

        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <h3 className={styles.cardTitle}>Retail, Wholesale &amp; E-Commerce</h3>
            <p className={styles.cardDesc}>
              Fast, resilient Next.js storefronts engineered with sub-second catalog navigation and automated local search visibility to capture regional shoppers in Malabar and Central Kerala.
            </p>
            <Link href="/services/web-development" className={styles.cardLink}>
              Explore Web Architecture <ChevronRight size={14} aria-hidden="true" />
            </Link>
          </div>

          <div className={styles.serviceCard}>
            <h3 className={styles.cardTitle}>Healthcare, Diagnostics &amp; Wellness</h3>
            <p className={styles.cardDesc}>
              HIPAA/data-compliant patient inquiry funnels, verified Google Business Profile entity optimization, and zero-leakage search advertising for leading Kerala hospitals and clinics.
            </p>
            <Link href="/services/seo" className={styles.cardLink}>
              Explore Technical SEO <ChevronRight size={14} aria-hidden="true" />
            </Link>
          </div>

          <div className={styles.serviceCard}>
            <h3 className={styles.cardTitle}>Real Estate &amp; Commercial Development</h3>
            <p className={styles.cardDesc}>
              High-intent Google Ads funnels and immersive project showcase portals built to capture qualified property investors and NRI buyers across the GCC and tier-one Indian metros.
            </p>
            <Link href="/services/paid-advertising" className={styles.cardLink}>
              Explore Paid Advertising <ChevronRight size={14} aria-hidden="true" />
            </Link>
          </div>

          <div className={styles.serviceCard}>
            <h3 className={styles.cardTitle}>Manufacturing &amp; Export Enterprises</h3>
            <p className={styles.cardDesc}>
              B2B lead pipelines, global organic search authority, and automated CRM workflows that connect spice, textile, marine, and industrial exporters to international corporate buyers.
            </p>
            <Link href="/services/crm" className={styles.cardLink}>
              Explore CRM &amp; Automation <ChevronRight size={14} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* Kerala Digital Economy Growth Corridors */}
      <section style={{ marginTop: "3rem", background: "rgba(255, 255, 255, 0.85)", border: "1px solid rgba(0, 0, 0, 0.08)", borderRadius: "20px", padding: "clamp(2rem, 4vw, 3rem)" }}>
        <h2 className={styles.sectionTitle} style={{ textAlign: "center", marginBottom: "1rem" }}>
          Kerala&apos;s Digital Transformation Corridors
        </h2>
        <p className={styles.sectionSubtitle} style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 2.5rem auto" }}>
          Kerala is undergoing rapid economic and digital modernisation, driven by national highway upgrades, growing IT corridors, and expanding international trade:
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
          <div style={{ background: "#ffffff", border: "1px solid rgba(0, 0, 0, 0.06)", borderRadius: "14px", padding: "1.5rem" }}>
            <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--brand-blue, #00488e)", marginBottom: "0.5rem" }}>
              Malabar Commercial Corridor (NH-66)
            </h3>
            <p style={{ fontSize: "0.9rem", color: "#64748b", lineHeight: 1.6, margin: 0 }}>
              Connecting Kozhikode, Kannur, and Kasaragod, this northern corridor represents Kerala&apos;s fastest-growing retail and healthcare hub, demanding sub-second mobile digital experiences and localized search dominance.
            </p>
          </div>

          <div style={{ background: "#ffffff", border: "1px solid rgba(0, 0, 0, 0.06)", borderRadius: "14px", padding: "1.5rem" }}>
            <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--brand-blue, #00488e)", marginBottom: "0.5rem" }}>
              Central Kerala Financial &amp; NRI Belt
            </h3>
            <p style={{ fontSize: "0.9rem", color: "#64748b", lineHeight: 1.6, margin: 0 }}>
              Centred in Thrissur, Ernakulam, and Palakkad, this region commands substantial private wealth and remittances. We help financial institutions and luxury brands establish authoritative, high-converting digital footprints.
            </p>
          </div>

          <div style={{ background: "#ffffff", border: "1px solid rgba(0, 0, 0, 0.06)", borderRadius: "14px", padding: "1.5rem" }}>
            <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--brand-blue, #00488e)", marginBottom: "0.5rem" }}>
              Cross-Border GCC Commercial Linkages
            </h3>
            <p style={{ fontSize: "0.9rem", color: "#64748b", lineHeight: 1.6, margin: 0 }}>
              With deep business ties between Kerala and Dubai, Riyadh, Doha, and Muscat, our technical marketing funnels are engineered to engage high-net-worth Gulf NRI audiences seamlessly.
            </p>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className={styles.section} aria-labelledby="regional-faqs" style={{ marginTop: "3rem" }}>
        <h2 id="regional-faqs" className={styles.sectionTitle}>
          Regional Service Delivery Questions
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", marginTop: "1.5rem" }}>
          {LOCATION_FAQS.map((faq, i) => (
            <div
              key={i}
              style={{
                background: "rgba(255, 255, 255, 0.9)",
                border: "1px solid rgba(0, 0, 0, 0.08)",
                borderRadius: "16px",
                padding: "1.5rem",
                boxShadow: "0 2px 10px rgba(0, 0, 0, 0.03)",
              }}
            >
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--clr-foreground, #0a0a0a)", marginBottom: "0.5rem" }}>
                {faq.q}
              </h3>
              <p style={{ fontSize: "0.95rem", color: "var(--color-text-secondary, #64748b)", lineHeight: "1.6" }}>
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Statewide & Remote Delivery */}
      <section className={styles.deliveryCard} aria-labelledby="statewide-delivery" style={{ marginTop: "3.5rem" }}>
        <div className={styles.badge}>
          <MapPin size={14} aria-hidden="true" />
          <span>Statewide &amp; Global Remote Engagement</span>
        </div>
        <h2 id="statewide-delivery" className={styles.sectionTitle}>
          Serving Growth Businesses Statewide &amp; Beyond
        </h2>
        <p className={styles.sectionSubtitle}>
          Whether your company is located in Kochi, Thiruvananthapuram, Kannur, or targeting international customers
          in the GCC, our disciplined digital model operates without physical geographical friction. Discover how custom web engineering and technical SEO can accelerate your pipeline.
        </p>
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginTop: "1.5rem" }}>
          <Link href="/contact" className={styles.primaryBtn}>
            <span>Schedule a Strategy Discovery</span>
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
          <Link href="/blog/why-nextjs-outperforms-wordpress-kerala-enterprises" className={styles.secondaryBtn}>
            <span>Read Next.js Case Study &rarr;</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
