"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import styles from "./WorkSection.module.css";

interface CaseStudyPreview {
  id: string;
  number: string;
  badge: string;
  title: string;
  summary: string;
  tags: string[];
  metrics: { label: string; value: string }[];
  href: string;
}

const CASE_STUDIES: CaseStudyPreview[] = [
  {
    id: "app-router-migration",
    number: "01",
    badge: "Architectural Benchmark",
    title: "Next.js App Router & Core Web Vitals Platform",
    summary: "A reference implementation proving how modern Server Components and zero-layout-shift font pipelines achieve sub-second LCP and flawless keyboard navigation.",
    tags: ["Next.js", "TypeScript", "WCAG 2.1 AA", "CWV LCP ≤ 1.2s"],
    metrics: [
      { label: "CWV LCP Metric", value: "≤ 1.2s" },
      { label: "Accessibility Score", value: "100%" },
    ],
    href: "/work",
  },
  {
    id: "technical-seo-clustering",
    number: "02",
    badge: "Methodology Framework",
    title: "Topical Authority & Crawl Optimization Model",
    summary: "A structured demonstration of parent-child URL hierarchies, automated JSON-LD schema graphs, and canonical clustering designed to capture competitive organic search intent.",
    tags: ["Technical SEO", "Schema.org", "Topical Silos", "XML Sitemaps"],
    metrics: [
      { label: "Crawl Coverage", value: "100%" },
      { label: "Schema Validation", value: "Zero Errors" },
    ],
    href: "/work",
  },
  {
    id: "b2b-lead-funnel",
    number: "03",
    badge: "CRO Demonstration",
    title: "Accessible Multi-Step Lead Capture System",
    summary: "A conversion-optimized inquiry workflow featuring inline user validation, strict server-side schema verification, and accessible error boundaries.",
    tags: ["CRO", "Zod Validation", "Server Actions", "Accessibility"],
    metrics: [
      { label: "Form Standards", value: "WCAG 2.1 AA" },
      { label: "Telemetry Precision", value: "100%" },
    ],
    href: "/work",
  },
];

export function WorkSection() {
  const [activeId, setActiveId] = useState(CASE_STUDIES[0].id);
  const activeStudy = CASE_STUDIES.find((s) => s.id === activeId) || CASE_STUDIES[0];

  return (
    <section className={styles.section} aria-labelledby="work-heading">
      <div className="container">
        <div className={styles.headerArea}>
          <p className={styles.sectionBadge}>Proven Methodology</p>
          <h2 id="work-heading" className={styles.sectionTitle}>
            Recent Works
          </h2>
          <p className={styles.sectionDescription}>
            Explore our architectural benchmarks and strategic frameworks. We believe in transparent engineering standards rather than unverifiable marketing claims.
          </p>
        </div>

        {/* Project Selector Tabs */}
        <div className={styles.tabBar} role="tablist" aria-label="Select Featured Work">
          {CASE_STUDIES.map((study) => (
            <button
              key={study.id}
              role="tab"
              aria-selected={study.id === activeId}
              aria-controls={`work-panel-${study.id}`}
              id={`work-tab-${study.id}`}
              className={styles.tabButton}
              onClick={() => setActiveId(study.id)}
            >
              <span>{study.number}</span> {study.badge}
            </button>
          ))}
        </div>

        {/* Grand Showcase Card matching Reference Design */}
        <div
          id={`work-panel-${activeStudy.id}`}
          role="tabpanel"
          aria-labelledby={`work-tab-${activeStudy.id}`}
          className={styles.showcaseCard}
        >
          {/* Left Column: Index, Title, Summary, Action */}
          <div className={styles.leftCol}>
            <div className={styles.projectNumberBadge}>
              <span className={styles.dot} aria-hidden="true" />
              <span>{activeStudy.number}</span>
            </div>

            <h3 className={styles.projectTitle}>{activeStudy.title}</h3>

            <p className={styles.projectSummary}>{activeStudy.summary}</p>

            <Link
              href={activeStudy.href}
              className={styles.inspectLink}
              aria-label={`Inspect Methodology: ${activeStudy.title}`}
            >
              <span>Inspect Methodology</span>
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>

          {/* Center Column: Device Mockup on Pedestal with Ambient Lighting */}
          <div className={styles.centerCol} aria-hidden="true">
            <div className={styles.pedestalGlow} />
            <div className={styles.deviceFrame}>
              <div className={styles.deviceSpeaker} />
              <div className={styles.deviceScreen}>
                <div className={styles.screenHeader}>
                  <div className={styles.screenPill}>Qubizon Cloud</div>
                  <Sparkles size={14} className={styles.screenIcon} />
                </div>
                <div className={styles.screenGraphic}>
                  <div className={styles.screenGraphicBar} />
                  <div className={styles.screenGraphicBox}>
                    <span>100%</span>
                    <small>AUDITED</small>
                  </div>
                </div>
                <div className={styles.screenLines}>
                  <div className={styles.line1} />
                  <div className={styles.line2} />
                  <div className={styles.line3} />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Services Provided & Metrics */}
          <div className={styles.rightCol}>
            <div className={styles.servicesBlock}>
              <h4 className={styles.blockHeading}>Services Provided</h4>
              <div className={styles.pillGroup} aria-label="Key Technologies & Targets">
                {activeStudy.tags.map((tag, idx) => (
                  <span key={idx} className={styles.servicePill}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className={styles.metricsBlock}>
              {activeStudy.metrics.map((m, idx) => (
                <div key={idx} className={styles.metricItem}>
                  <p className={styles.metricLabel}>{m.label}</p>
                  <p className={styles.metricValue}>{m.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Closing Action */}
        <div className={styles.ctaWrapper}>
          <Link href="/work" className={styles.viewAllLink}>
            <span>View All Architectural Case Studies</span>
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
