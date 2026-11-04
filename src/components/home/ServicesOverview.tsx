"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Code2,
  Search,
  Share2,
  Target,
  FileText,
  BarChart3,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import styles from "./ServicesOverview.module.css";

interface ServiceItem {
  id: string;
  number: string;
  title: string;
  icon: typeof Code2;
  description: string;
  businessValue: string;
  href: string;
  discipline: string;
  tags: string[];
}

const SERVICES_LIST: ServiceItem[] = [
  {
    id: "web-development",
    number: "01",
    title: "Website Development",
    icon: Code2,
    discipline: "Core Discipline 01",
    description: "Custom Next.js platforms designed for sub-second page loads, intuitive user flows, and strict accessibility standards.",
    businessValue: "Drives higher conversion rates by eliminating friction and bounce rates across all device viewports.",
    href: "/services/web-development",
    tags: ["Next.js App Router", "Sub-Second LCP", "WCAG 2.1 AA"],
  },
  {
    id: "seo",
    number: "02",
    title: "Search Engine Optimization",
    icon: Search,
    discipline: "Core Discipline 02",
    description: "Technical crawl audits, semantic schema modeling, and topical content silos that capture high-intent search traffic.",
    businessValue: "Compounds long-term organic pipeline and lowers your sustained customer acquisition costs.",
    href: "/services/seo",
    tags: ["Technical Crawl", "Schema.org Graphs", "Topical Silos"],
  },
  {
    id: "social-media",
    number: "03",
    title: "Social Media Marketing",
    icon: Share2,
    discipline: "Core Discipline 03",
    description: "Multi-platform brand storytelling and active community engagement tailored for business credibility and engagement.",
    businessValue: "Builds defensible brand awareness and nurtures buyer relationships across primary social channels.",
    href: "/services/social-media-marketing",
    tags: ["Brand Narrative", "Community Engagement", "Multi-Channel"],
  },
  {
    id: "paid-ads",
    number: "04",
    title: "Paid Advertising",
    icon: Target,
    discipline: "Core Discipline 04",
    description: "Performance marketing across search and social channels, built with strict conversion tracking and negative keyword controls.",
    businessValue: "Delivers immediate, predictable sales opportunities with verified return on ad spend (ROAS).",
    href: "/services/paid-advertising",
    tags: ["Intent Search PPC", "Conversion Tracking", "Negative Keywords"],
  },
  {
    id: "content-marketing",
    number: "05",
    title: "Content Marketing",
    icon: FileText,
    discipline: "Core Discipline 05",
    description: "Authoritative editorial, technical case studies, and conversion-focused copywriting that answers real search intent.",
    businessValue: "Positions your company as an undisputed category authority and accelerates buyer decision cycles.",
    href: "/services/content-marketing",
    tags: ["Technical Editorial", "Intent Copywriting", "Lead Magnets"],
  },
  {
    id: "data-analytics",
    number: "06",
    title: "Data Intelligence & Analytics",
    icon: BarChart3,
    discipline: "Enabling Foundation",
    description: "Unified telemetry and attribution models that connect web traffic, ad spend, and organic rankings to bottom-line revenue.",
    businessValue: "Ensures every marketing dollar and engineering hour is validated by clean, verifiable data.",
    href: "/services",
    tags: ["Pipeline Attribution", "Core Web Vitals", "Telemetry Schemas"],
  },
];

export function ServicesOverview() {
  const [activeId, setActiveId] = useState(SERVICES_LIST[0].id);
  const activeService = SERVICES_LIST.find((s) => s.id === activeId) || SERVICES_LIST[0];
  const ActiveIcon = activeService.icon;

  return (
    <section id="services" className={styles.section} aria-labelledby="services-heading">
      <div className="container">
        {/* Asymmetrical Header matching Reference Image Pattern */}
        <div className={styles.headerRow}>
          <div className={styles.badgeWrapper}>
            <span className={styles.badgeDiamond} aria-hidden="true">❖</span>
            <p className={styles.sectionBadge}>INTEGRATED DISCIPLINES</p>
          </div>

          <div className={styles.headingContent}>
            <h2 id="services-heading" className={styles.sectionTitle}>
              Five Disciplines. One Unified Model.
            </h2>
            <p className={styles.sectionDescription}>
              Instead of stitching together disconnected freelancers and isolated agencies, Qubizon provides a single multidisciplinary team executing in tight alignment.
            </p>
            <div className={styles.headerCtaWrapper}>
              <Link href="/services" className={styles.headerCta}>
                <span>Explore all services</span>
                <span className={styles.ctaArrowCircle} aria-hidden="true">
                  <ArrowRight size={14} />
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* Studio Interactive Layout (matching Image 4 design pattern) */}
        <div className={styles.studioLayout}>
          {/* Left: Interactive Discipline List with Dividers */}
          <div className={styles.interactiveList} role="tablist" aria-label="Agency Disciplines">
            {SERVICES_LIST.map((service) => {
              const isActive = service.id === activeId;
              return (
                <button
                  key={service.id}
                  role="tab"
                  id={`service-tab-${service.id}`}
                  aria-selected={isActive}
                  aria-controls={`service-panel-${service.id}`}
                  className={`${styles.listItem} ${isActive ? styles.listItemActive : ""}`}
                  onClick={() => setActiveId(service.id)}
                  onMouseEnter={() => setActiveId(service.id)}
                >
                  <div className={styles.itemTitleRow}>
                    <span className={styles.itemNumber}>{service.number}</span>
                    <span className={styles.itemTitle}>{service.title}</span>
                  </div>

                  <ArrowRight
                    size={18}
                    className={`${styles.itemArrow} ${isActive ? styles.itemArrowActive : ""}`}
                    aria-hidden="true"
                  />
                </button>
              );
            })}
          </div>

          {/* Right: Immersive Preview Showcase Card (matching Image 4 preview thumbnail) */}
          <div
            id={`service-panel-${activeService.id}`}
            role="tabpanel"
            aria-labelledby={`service-tab-${activeService.id}`}
            className={styles.spotlightCard}
          >
            <div className={styles.spotlightHeader}>
              <div className={styles.iconCircle}>
                <ActiveIcon size={28} aria-hidden="true" />
              </div>
              <span className={styles.spotlightDisciplineBadge}>{activeService.discipline}</span>
            </div>

            <h3 className={styles.spotlightTitle}>{activeService.title}</h3>
            <p className={styles.spotlightDescription}>{activeService.description}</p>
            <p className={styles.spotlightBusinessValue}>{activeService.businessValue}</p>

            <div className={styles.tagGroup} aria-label="Key Deliverables">
              {activeService.tags.map((tag, idx) => (
                <span key={idx} className={styles.pillTag}>
                  {tag}
                </span>
              ))}
            </div>

            <div className={styles.spotlightFooter}>
              <Link
                href={activeService.href}
                className={styles.exploreLink}
                aria-label={`Explore ${activeService.title}`}
              >
                <span>Explore service</span>
                <span className={styles.ctaArrowCircleExplore} aria-hidden="true">
                  <ArrowRight size={14} />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
