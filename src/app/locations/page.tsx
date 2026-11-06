import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, MapPin, ArrowRight, Building2, Compass } from "lucide-react";
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

export default function LocationsIndexPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": SITE_CONFIG.domain },
          { "@type": "ListItem", "position": 2, "name": "Service Areas", "item": `${SITE_CONFIG.domain}/locations` },
        ],
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

      {/* Statewide & Remote Delivery */}
      <section className={styles.deliveryCard} aria-labelledby="statewide-delivery">
        <div className={styles.badge}>
          <MapPin size={14} aria-hidden="true" />
          <span>Statewide & Global Remote Engagement</span>
        </div>
        <h2 id="statewide-delivery" className={styles.sectionTitle}>
          Serving Growth Businesses Statewide & Beyond
        </h2>
        <p className={styles.sectionSubtitle}>
          Whether your company is located in Kochi, Thiruvananthapuram, Kannur, or targeting international customers
          in the GCC, our disciplined digital model operates without physical geographical friction.
        </p>
        <Link href="/contact" className={styles.primaryBtn}>
          <span>Schedule a Strategy Discovery</span>
          <ArrowRight size={16} aria-hidden="true" />
        </Link>
      </section>
    </div>
  );
}
