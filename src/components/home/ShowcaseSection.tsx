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
        <div className={styles.sectionHeader}>
          <p className={styles.sectionBadge}>• SELECTED RECENT WORKS /</p>
          <div className={styles.titleRow}>
            <h2 id="showcase-heading" className={styles.headingHuge}>
              Work engineered for <span className="calligraphy">market authority</span>.
            </h2>
            <p className={styles.lead}>
              Explore verifiable architectures and disciplined digital systems delivered
              for ambitious regional and enterprise clients.
            </p>
          </div>
        </div>

        {/* Project List (Matching Image 1 Reference Model) */}
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

        {/* View All Benchmarks Pill CTA */}
        <div className={styles.viewAll}>
          <Link href="/work" className={styles.btnOutline}>
            <span>View All Architectural Benchmarks</span>
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
