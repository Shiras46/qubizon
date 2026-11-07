import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, MapPin, ArrowRight, Building2, Compass, CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";
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
          <Compass size={14} aria-hidden="true" />
          <span>Regional Coverage • Kerala, India</span>
        </div>
        <h1 className={styles.title}>
          Kerala Regional <span className="calligraphy">Service Areas</span>
        </h1>
        <p className={styles.lead}>
          Qubizon provides high-performance web development, technical SEO, and conversion-optimized marketing
          for businesses throughout Kerala. We combine regional market insights with world-class engineering standards.
        </p>
      </header>

      {/* Priority Regional Hubs */}
      <section className={styles.section} aria-labelledby="priority-markets">
        <h2 id="priority-markets" className={styles.sectionTitle}>
          Priority Regional Hubs
        </h2>
        <div className={styles.servicesGrid}>
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
