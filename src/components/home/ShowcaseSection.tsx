import Link from "next/link";
import { ArrowRight } from "lucide-react";
import styles from "./ShowcaseSection.module.css";

interface ProjectItem {
  id: string;
  name: string;
  summary: string;
  disciplines: string[];
  location: string;
  href: string;
}

interface FeaturedCard {
  id: string;
  name: string;
  location: string;
  disciplines: string[];
  metric: string;
  badge: string;
  gradient: string;
  href: string;
}

const FEATURED_CARDS: FeaturedCard[] = [
  {
    id: "maritime-vis",
    name: "Kerala Maritime & Logistics",
    location: "Kozhikode, India",
    disciplines: ["Next.js App Router", "Technical SEO", "UI/UX"],
    metric: "0.62s Mobile LCP",
    badge: "ENTERPRISE PORTAL",
    gradient: "linear-gradient(135deg, #0d1b2a 0%, #1b263b 60%, #00488e 100%)",
    href: "/work",
  },
  {
    id: "asterion-vis",
    name: "Asterion Financial Intelligence",
    location: "Thrissur, India",
    disciplines: ["Schema.org Modeling", "Search Intent", "Analytics"],
    metric: "Top 3 Organic Share",
    badge: "FINANCIAL ADVISORY",
    gradient: "linear-gradient(135deg, #141416 0%, #202025 60%, #ffbe0b22 100%)",
    href: "/work",
  },
  {
    id: "vythiri-vis",
    name: "Vythiri Luxury Retreats",
    location: "Wayanad, India",
    disciplines: ["Direct Booking Engine", "Narrative Design", "PPC"],
    metric: "4.8x Return on Ad Spend",
    badge: "LUXURY HOSPITALITY",
    gradient: "linear-gradient(135deg, #0a1128 0%, #001f54 60%, #00488e 100%)",
    href: "/work",
  },
];

const PROJECTS: ProjectItem[] = [
  {
    id: "maritime",
    name: "Kerala Maritime & Logistics",
    summary:
      "Turned a complex regional supply chain and freight management portal into an ultra-fast Next.js platform with automated tracking and sub-second mobile LCP.",
    disciplines: ["NEXT.JS WEB DEV", "TECHNICAL SEO", "UI/UX DESIGN"],
    location: "KOZHIKODE, INDIA",
    href: "/work",
  },
  {
    id: "asterion",
    name: "Asterion Financial Intelligence",
    summary:
      "Engineered deep Schema.org entity modeling and search-intent architecture, capturing high-intent commercial queries across regional wealth advisory markets.",
    disciplines: ["TECHNICAL SEO", "SCHEMA MODELING", "CONTENT STRATEGY"],
    location: "THRISSUR, INDIA",
    href: "/work",
  },
  {
    id: "malabar-retail",
    name: "Malabar Retail Network",
    summary:
      "Eliminated 34% of PPC budget waste by deploying negative keyword clustering, server-side conversion API telemetry, and engineered landing funnels.",
    disciplines: ["PAID ADVERTISING", "CONVERSION TRACKING", "PERFORMANCE CRO"],
    location: "KERALA, INDIA",
    href: "/work",
  },
  {
    id: "vythiri",
    name: "Vythiri Luxury Retreats",
    summary:
      "Repositioned an eco-luxury hospitality brand through synchronized executive storytelling, multi-channel social distribution, and direct booking engines.",
    disciplines: ["SOCIAL MEDIA", "BRAND STORYTELLING", "CONTENT MARKETING"],
    location: "WAYANAD, INDIA",
    href: "/work",
  },
];

export function ShowcaseSection() {
  return (
    <section className={styles.showcaseSection} id="portfolio" aria-labelledby="showcase-heading">
      <div className={styles.container}>
        {/* Section Header: Matching DNOIN Reference Section 3 */}
        <div className={styles.sectionHeader}>
          <p className={styles.sectionBadge}>• SELECTED RECENT WORKS /</p>
          <div className={styles.titleRow}>
            <div className={styles.titleCol}>
              <h2 id="showcase-heading" className={styles.headingHuge}>
                Recent <span className="calligraphy">Projects</span>.
              </h2>
              <p className={styles.lead}>
                Disciplined Next.js web applications, high-intent technical SEO graphs, and synchronized digital ecosystems.
              </p>
            </div>
            <Link href="/work" className={styles.btnPill}>
              <span>View All Projects</span>
              <span className={styles.arrowCircle} aria-hidden="true">
                <ArrowRight size={13} />
              </span>
            </Link>
          </div>
        </div>

        {/* 3-Column Visual Project Cards: Matching Reference Image Section 3 */}
        <div className={styles.visualGrid}>
          {FEATURED_CARDS.map((card) => (
            <Link key={card.id} href={card.href} className={styles.visualCard}>
              <div className={styles.cardVisualFrame} style={{ background: card.gradient }}>
                <div className={styles.cardGridPattern} />
                <div className={styles.cardBadgeRow}>
                  <span className={styles.cardPill}>{card.badge}</span>
                </div>
                <div className={styles.cardMetricRow}>
                  <span className={styles.metricVal}>{card.metric}</span>
                  <span className={styles.metricLabel}>VERIFIED BENCHMARK</span>
                </div>
              </div>
              <div className={styles.cardMeta}>
                <span className={styles.cardLocation}>• {card.location}</span>
                <h3 className={styles.cardTitle}>{card.name}</h3>
                <span className={styles.cardDisciplines}>{card.disciplines.join(" • ")}</span>
              </div>
            </Link>
          ))}
        </div>

        {/* Directory Breakdown Header: Matching Reference Image Section 4 */}
        <div className={styles.directoryHeader}>
          <p className={styles.directoryBadge}>• DETAILED ARCHITECTURAL ENGAGEMENTS /</p>
        </div>

        {/* Project Detailed Rows */}
        <div className={styles.projectList}>
          {PROJECTS.map((project) => (
            <Link key={project.id} href={project.href} className={styles.projectRow}>
              {/* Left Column: Project Name */}
              <div className={styles.colTitle}>
                <h3 className={styles.projectName}>{project.name}</h3>
              </div>

              {/* Middle Column: Project Summary */}
              <div className={styles.colSummary}>
                <p className={styles.projectSummary}>{project.summary}</p>
              </div>

              {/* Right Column: Disciplines & Location */}
              <div className={styles.colMeta}>
                <div className={styles.disciplineList}>
                  {project.disciplines.map((d, idx) => (
                    <span key={idx} className={styles.disciplineTag}>
                      {d}
                    </span>
                  ))}
                </div>
                <span className={styles.locationTag}>{project.location}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
