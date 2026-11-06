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
  strokeColor: string;
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
    strokeColor: "#00488E",
  },
  {
    id: "seo",
    number: "02",
    title: "Technical SEO & Schema Entity Modeling",
    description:
      "Enterprise crawl optimization, structured data entity graphs, and search-intent architecture that secure top-tier organic visibility and lower customer acquisition costs.",
    href: "/services/seo",
    tags: ["Schema.org Graphs", "Crawl Budget Engineering", "Topical Authority"],
    strokeColor: "#FF3B30",
  },
  {
    id: "social-media",
    number: "03",
    title: "Social Media Strategy & Brand Narrative",
    description:
      "Strategic narrative building, executive thought leadership, and visual asset production that converts passive attention into qualified business pipeline.",
    href: "/services/social-media-marketing",
    tags: ["Narrative Design", "Brand Authority", "Multi-Channel Distribution"],
    strokeColor: "#00488E",
  },
  {
    id: "paid-ads",
    number: "04",
    title: "High-Intent Paid Advertising & Telemetry",
    description:
      "Precision Google Search and Meta Ads campaigns backed by negative keyword clustering, server-side conversion tracking, and rigorous return on ad spend (ROAS).",
    href: "/services/paid-advertising",
    tags: ["Google Ads", "Server-Side Telemetry", "Negative Clustering"],
    strokeColor: "#FFBE0B",
  },
  {
    id: "content-marketing",
    number: "05",
    title: "Content Marketing & Editorial Authority",
    description:
      "Search-aligned whitepapers, case studies, and authoritative pillar content designed to educate decision-makers and dominate competitive regional search queries.",
    href: "/services/content-marketing",
    tags: ["Topical Pillars", "B2B Technical Copy", "Lead Magnets"],
    strokeColor: "#00488E",
  },
];

export function ServicesOverview() {
  return (
    <section className={styles.servicesSection} id="services" aria-labelledby="services-heading">
      <div className={styles.container}>
        <h2 id="services-heading" className={styles.headingLarge}>
          Our Services
        </h2>

        <div className={styles.servicesIntro}>
          <p className={styles.brandSymbolLead}>Qubizon Disciplines</p>
          <h3 className={styles.headingMedium}>What We Do</h3>
          <p className={styles.lead}>
            Comprehensive digital solutions engineered to elevate your brand, streamline acquisition,
            and establish defensible market leadership across Kerala and beyond.
          </p>
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
                <h4 className={styles.serviceTitle}>
                  <span className="accent-wrapper">
                    {service.title}
                    <svg
                      className="scribble scribble-underline"
                      viewBox="0 0 200 12"
                      preserveAspectRatio="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M0,10 Q50,0 100,10 T200,10"
                        fill="none"
                        stroke={service.strokeColor}
                        strokeWidth="3.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </h4>
              </div>

              <div className={styles.serviceBodyCol}>
                <p className={styles.serviceDesc}>{service.description}</p>
                <div className={styles.serviceMeta}>
                  {service.tags.map((tag, idx) => (
                    <span key={idx} className={styles.serviceTag}>
                      {tag}
                    </span>
                  ))}
                  <span className={styles.serviceLink}>
                    Explore Service <ArrowRight size={14} aria-hidden="true" />
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
