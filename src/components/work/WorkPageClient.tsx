"use client";

import { useState, useRef, KeyboardEvent } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Code,
  Search,
  Target,
  FileText,
  Layers,
  Sparkles,
  CheckCircle2,
  Cpu,
  ShieldAlert,
} from "lucide-react";
import styles from "./WorkPage.module.css";

export type BenchmarkCategory = "all" | "architecture" | "methodology" | "conversion";

export interface BenchmarkEntry {
  id: string;
  category: "architecture" | "methodology" | "conversion";
  badge: string;
  title: string;
  categoryLabel: string;
  problem: string;
  approach: string;
  decisions: string;
  demonstrates: string;
  benchmarks: string[];
  serviceTitle: string;
  serviceHref: string;
}

const BENCHMARKS: BenchmarkEntry[] = [
  {
    id: "app-router-cwv",
    category: "architecture",
    badge: "Architectural Benchmark",
    categoryLabel: "Web Engineering",
    title: "Next.js App Router & Core Web Vitals Platform Architecture",
    problem:
      "Modern businesses lose conversions and search visibility when traditional CMS platforms or monolithic React SPAs load heavy JavaScript (>500kB), causing slow Largest Contentful Paint (LCP > 3.5s) and layout shifts.",
    approach:
      "Engineered an App Router reference architecture utilizing React Server Components, zero-layout-shift font pipelines (next/font), and scoped CSS tokens without heavy component framework bloat.",
    decisions:
      "Enforced a strict budget of <100kB first-load JS; replaced runtime CSS-in-JS with native CSS Modules; implemented accessible skip-link and focus management; configured hardware-accelerated transitions.",
    demonstrates:
      "Sub-second mobile LCP, 0.00 Cumulative Layout Shift, zero hydration mismatches, and complete WCAG 2.1 AA keyboard accessibility on production edge hosting.",
    benchmarks: ["Mobile LCP ≤ 1.2s", "CLS: 0.00", "FID/INP ≤ 50ms", "First Load JS < 90kB"],
    serviceTitle: "Website Development",
    serviceHref: "/services/web-development",
  },
  {
    id: "schema-topical-authority",
    category: "methodology",
    badge: "Methodology Framework",
    categoryLabel: "Technical SEO",
    title: "Topical Authority Silos & Automated Schema.org Graph Modeling",
    problem:
      "Scattered blog posts and flat URL structures fail to convey entity depth to search engines, causing crawlers to miss topical relevance and rich snippet opportunities in competitive search verticals.",
    approach:
      "Designed a parent-child URL hierarchy with structured topic clusters (/services/[discipline]) paired with an automated multi-entity JSON-LD schema graph generator (Organization, Service, FAQPage, BreadcrumbList).",
    decisions:
      "Injected schemas server-side into raw HTML to guarantee zero client-side rendering delay for crawlers; eliminated thin doorway pages; enforced bidirectional contextual links between complementary services.",
    demonstrates:
      "Complete entity traversal for search engine crawlers, programmatic rich-result eligibility in Google Search, and clean indexing signals without keyword stuffing.",
    benchmarks: ["100% Schema.org Validation", "Zero Broken Links", "1x H1 Strict Hierarchy", "Canonical Enforced"],
    serviceTitle: "Search Engine Optimization",
    serviceHref: "/services/seo",
  },
  {
    id: "b2b-lead-capture",
    category: "conversion",
    badge: "Conversion Experiment",
    categoryLabel: "Conversion UX",
    title: "Frictionless, Accessible B2B Inbound Lead Funnel",
    problem:
      "B2B inquiry forms routinely experience 40%–60% abandonment due to inaccessible form inputs, unannounced client validation errors on screen readers, and excessive multi-step hurdles.",
    approach:
      "Engineered a single-step, low-friction inquiry model featuring explicit visual labels, real-time client validation, and strict server-side Zod schema verification with accessible error announcements.",
    decisions:
      "Bound input errors via aria-describedby and announced them through aria-live polite regions; ensured touch targets meet the 44x44px minimum; strictly sanitized all inputs on the server layer.",
    demonstrates:
      "Friction-free mobile and assistive technology input, zero malformed payloads reaching sales backends, and reduced user drop-off across commercial inquiry paths.",
    benchmarks: ["100% WCAG 2.1 AA Form Compliance", "Server-Side Zod Validation", "Touch Targets ≥ 44px", "Zero Layout Shift"],
    serviceTitle: "Paid Advertising & Web Dev",
    serviceHref: "/services/paid-advertising",
  },
  {
    id: "executive-content-engine",
    category: "methodology",
    badge: "Methodology Framework",
    categoryLabel: "Content Strategy",
    title: "Multi-Channel B2B Executive Thought Leadership & Content Engine",
    problem:
      "Enterprise marketing teams waste creative capital producing disjointed assets: blog articles, social media posts, and sales decks frequently contradict each other and fail to influence buying committees.",
    approach:
      "Created an integrated editorial governance framework where deep-dive technical research is systematically repurposed into executive LinkedIn briefs, high-intent SEO silos, and commercial conversion collateral.",
    decisions:
      "Established a unified narrative guidelines repository; aligned social publishing calendars directly with commercial search query intent; eliminated unverified buzzwords in favor of empirical methodologies.",
    demonstrates:
      "Fourfold creative leverage from a single research sprint while maintaining absolute brand voice coherence and authoritative market positioning.",
    benchmarks: ["Unified Narrative Matrix", "4x Format Repurposing", "100% Search-Intent Alignment", "Zero Thin Content"],
    serviceTitle: "Content Marketing & Social Media",
    serviceHref: "/services/content-marketing",
  },
  {
    id: "paid-landing-alignment",
    category: "architecture",
    badge: "Architectural Benchmark",
    categoryLabel: "Performance Marketing",
    title: "High-Relevance Paid Acquisition & Landing Page Performance Matrix",
    problem:
      "PPC media spend is frequently wasted when ads direct clicks to slow, generic homepages that lack message consistency with the ad copy, inflating bounce rates and driving up Cost Per Acquisition (CPA).",
    approach:
      "Constructed dedicated, high-speed landing page templates with exact headline-to-query match, server-rendered layouts, and precise server-side conversion API event dispatching.",
    decisions:
      "Extracted UTM campaign parameters cleanly without hydration delay; maintained sub-second initial render; positioned prominent conversion paths above the fold on mobile viewports.",
    demonstrates:
      "Enhanced ad relevance scores in ad auctions, lower bounce rates from paid traffic, and verified attribution modeling without relying on fragile third-party client cookies.",
    benchmarks: ["First Contentful Paint < 800ms", "100% Query-to-Headline Match", "Server-Side Conversion APIs", "Clean Attribution"],
    serviceTitle: "Paid Advertising",
    serviceHref: "/services/paid-advertising",
  },
  {
    id: "cube-motion-experience",
    category: "conversion",
    badge: "Conversion Experiment",
    categoryLabel: "Creative Motion",
    title: "Accessible CSS 3D Cube Visual Architecture",
    problem:
      "Agencies often implement heavy WebGL and Three.js 3D animations (1.5MB+ JavaScript) that drain mobile batteries, degrade Core Web Vitals, and remain completely inaccessible to keyboard and screen-reader users.",
    approach:
      "Developed a hardware-accelerated CSS 3D matrix representing Qubizon's five integrated disciplines, paired with accessible WAI-ARIA tab controls and automatic graceful fallbacks.",
    decisions:
      "Rendered the 3D perspective entirely with native CSS transforms (0kB external library overhead); bound keyboard arrow keys for navigation; implemented instant 2D fallback for prefers-reduced-motion.",
    demonstrates:
      "Distinctive, branded 3D storytelling with zero impact on mobile performance, 60fps rendering, and complete keyboard accessibility.",
    benchmarks: ["0kB Added 3D Dependencies", "60fps GPU Hardware Acceleration", "WAI-ARIA Tablist Support", "prefers-reduced-motion Ready"],
    serviceTitle: "Website Development",
    serviceHref: "/services/web-development",
  },
];

const CATEGORIES: { id: BenchmarkCategory; label: string }[] = [
  { id: "all", label: "All Demonstrations" },
  { id: "architecture", label: "Architectural Benchmarks" },
  { id: "methodology", label: "Technical Methodology" },
  { id: "conversion", label: "Conversion & UX Experiments" },
];

export function WorkPageClient() {
  const [activeCategory, setActiveCategory] = useState<BenchmarkCategory>("all");
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const filteredBenchmarks =
    activeCategory === "all"
      ? BENCHMARKS
      : BENCHMARKS.filter((item) => item.category === activeCategory);

  const handleTabKeyDown = (e: KeyboardEvent<HTMLButtonElement>, index: number) => {
    let newIndex = index;
    if (e.key === "ArrowRight") {
      newIndex = (index + 1) % CATEGORIES.length;
    } else if (e.key === "ArrowLeft") {
      newIndex = (index - 1 + CATEGORIES.length) % CATEGORIES.length;
    } else if (e.key === "Home") {
      newIndex = 0;
    } else if (e.key === "End") {
      newIndex = CATEGORIES.length - 1;
    } else {
      return;
    }
    e.preventDefault();
    setActiveCategory(CATEGORIES[newIndex].id);
    tabRefs.current[newIndex]?.focus();
  };

  return (
    <div>
      {/* Category Filter Tabs */}
      <div className={styles.filterSection}>
        <div
          role="tablist"
          aria-label="Filter Architectural Benchmarks by Category"
          className={styles.tabList}
        >
          {CATEGORIES.map((cat, idx) => {
            const isActive = activeCategory === cat.id;
            const count =
              cat.id === "all"
                ? BENCHMARKS.length
                : BENCHMARKS.filter((item) => item.category === cat.id).length;

            return (
              <button
                key={cat.id}
                ref={(el) => {
                  tabRefs.current[idx] = el;
                }}
                role="tab"
                id={`tab-${cat.id}`}
                aria-selected={isActive}
                aria-controls={`panel-${cat.id}`}
                tabIndex={isActive ? 0 : -1}
                onClick={() => setActiveCategory(cat.id)}
                onKeyDown={(e) => handleTabKeyDown(e, idx)}
                className={`${styles.tabButton} ${isActive ? styles.tabButtonActive : ""}`}
              >
                <span>{cat.label}</span>
                <span className={styles.tabCount}>{count}</span>
              </button>
            );
          })}
        </div>

        {/* Benchmarks Grid */}
        <div
          role="tabpanel"
          id={`panel-${activeCategory}`}
          aria-labelledby={`tab-${activeCategory}`}
          className={styles.workGrid}
        >
          {filteredBenchmarks.map((item) => (
            <article key={item.id} className={styles.workCard}>
              <div className={styles.cardHeader}>
                <div className={styles.cardBadgeGroup}>
                  <span className={styles.cardTypeBadge}>{item.badge}</span>
                  <span className={styles.categoryTag}>{item.categoryLabel}</span>
                </div>
                <div className={styles.statusIndicator}>
                  <span className={styles.statusDot} aria-hidden="true" />
                  <span>Public Reference Implementation</span>
                </div>
              </div>

              <h2 className={styles.cardTitle}>{item.title}</h2>

              <div className={styles.cardSectionsGrid}>
                <div className={styles.cardSectionBlock}>
                  <p className={styles.blockHeading}>
                    <ShieldAlert size={14} aria-hidden="true" />
                    Problem & Engineering Question
                  </p>
                  <p className={styles.blockText}>{item.problem}</p>
                </div>

                <div className={styles.cardSectionBlock}>
                  <p className={styles.blockHeading}>
                    <Cpu size={14} aria-hidden="true" />
                    Technical & Strategic Approach
                  </p>
                  <p className={styles.blockText}>{item.approach}</p>
                </div>
              </div>

              <div className={styles.demonstrationBlock}>
                <p className={styles.demonstrationTitle}>What This Architecture Demonstrates</p>
                <p className={styles.demonstrationText}>{item.demonstrates}</p>
                <p style={{ marginTop: "var(--space-2)", fontSize: "var(--font-size-xs)", color: "var(--color-text-muted)" }}>
                  <strong>Key Decisions:</strong> {item.decisions}
                </p>
              </div>

              <div className={styles.benchmarksList} aria-label="Verified Target Specifications">
                {item.benchmarks.map((metric, mIdx) => (
                  <span key={mIdx} className={styles.benchmarkPill}>
                    {metric}
                  </span>
                ))}
              </div>

              <div className={styles.cardFooter}>
                <Link
                  href={item.serviceHref}
                  className={styles.serviceLink}
                  aria-label={`Explore ${item.serviceTitle} Capabilities`}
                >
                  <span>Explore {item.serviceTitle} Discipline</span>
                  <ArrowRight size={16} aria-hidden="true" />
                </Link>

                <Link
                  href="/contact"
                  className={styles.serviceLink}
                  aria-label={`Inquire About ${item.title}`}
                >
                  <span>Discuss This Architecture</span>
                  <ArrowRight size={16} aria-hidden="true" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
