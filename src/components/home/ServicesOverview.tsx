"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import styles from "./ServicesOverview.module.css";

interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  href: string;
  tags: string[];
}

const SERVICES_LIST: ServiceItem[] = [
  {
    id: "web-development",
    number: "01",
    title: "Website Development & Web Architecture",
    description:
      "From ultra-fast Next.js web applications to custom CRM integrations, we build the robust technical backbone of your digital presence with strict sub-second performance.",
    href: "/services/web-development",
    tags: ["Next.js App Router", "Sub-Second LCP", "WCAG 2.1 AA"],
  },
  {
    id: "seo",
    number: "02",
    title: "Technical SEO & Schema Entity Modeling",
    description:
      "Enterprise crawl optimization, structured data entity graphs, and search-intent architecture that secure top-tier organic visibility and lower customer acquisition costs.",
    href: "/services/seo",
    tags: ["Schema.org Graphs", "Crawl Budget Engineering", "Topical Authority"],
  },
  {
    id: "social-media",
    number: "03",
    title: "Social Media Strategy & Brand Narrative",
    description:
      "Strategic narrative building, executive thought leadership, and visual asset production that converts passive attention into qualified business pipeline.",
    href: "/services/social-media-marketing",
    tags: ["Narrative Design", "Brand Authority", "Multi-Channel Distribution"],
  },
  {
    id: "paid-ads",
    number: "04",
    title: "High-Intent Paid Advertising & Telemetry",
    description:
      "Precision Google Search and Meta Ads campaigns backed by negative keyword clustering, server-side conversion tracking, and rigorous return on ad spend (ROAS).",
    href: "/services/paid-advertising",
    tags: ["Google Ads", "Server-Side Telemetry", "Negative Clustering"],
  },
  {
    id: "content-marketing",
    number: "05",
    title: "Content Marketing & Editorial Authority",
    description:
      "Search-aligned whitepapers, case studies, and authoritative pillar content designed to educate decision-makers and dominate competitive regional search queries.",
    href: "/services/content-marketing",
    tags: ["Topical Pillars", "B2B Technical Copy", "Lead Magnets"],
  },
];

export function ServicesOverview() {
  return (
    <section className={styles.servicesSection} id="services" aria-labelledby="services-heading">
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <p className={styles.sectionBadge}>• QUBIZON DIGITAL DISCIPLINES /</p>
          <div className={styles.titleRow}>
            <h2 id="services-heading" className={styles.headingLarge}>
              Engineered digital systems that drive{" "}
              <span className="calligraphy">defensible growth</span>.
            </h2>
            <p className={styles.lead}>
              Comprehensive digital capabilities engineered to elevate your brand, streamline customer acquisition,
              and establish unquestioned market leadership across Kerala and beyond.
            </p>
          </div>
        </div>

        <div className={styles.serviceList}>
          {SERVICES_LIST.map((service) => (
            <Link
              key={service.id}
              href={service.href}
              className={styles.serviceItem}
              aria-label={`Explore ${service.title}`}
            >
              <div className={styles.serviceTitleCol}>
                <span className={styles.serviceIndex}>{service.number} / SERVICE</span>
                <h3 className={styles.serviceTitle}>{service.title}</h3>
              </div>

              <div className={styles.serviceBodyCol}>
                <p className={styles.serviceDesc}>{service.description}</p>
                <div className={styles.serviceMeta}>
                  <div className={styles.tagGroup}>
                    {service.tags.map((tag, idx) => (
                      <span key={idx} className={styles.serviceTag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className={styles.serviceLink}>
                    <span>Explore Discipline</span>
                    <span className={styles.arrowCircle} aria-hidden="true">
                      <ArrowRight size={12} />
                    </span>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
