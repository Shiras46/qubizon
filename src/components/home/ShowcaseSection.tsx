import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import styles from "./ShowcaseSection.module.css";

interface ProjectItem {
  id: string;
  category: string;
  name: string;
  summary: string;
  href: string;
}

const PROJECTS: ProjectItem[] = [
  {
    id: "logistics",
    category: "Enterprise Web Architecture",
    name: "Kerala Maritime & Logistics Portal",
    summary: "High-concurrency Next.js platform automating freight tracking with sub-second LCP.",
    href: "/work",
  },
  {
    id: "wealth",
    category: "Technical SEO & Schema Entity",
    name: "Asterion Financial Intelligence",
    summary: "Capturing high-intent regional search queries with deep Schema.org entity modeling.",
    href: "/work",
  },
  {
    id: "retail",
    category: "Paid Advertising & Telemetry",
    name: "Malabar Retail Network",
    summary: "Reduced cost-per-acquisition by 34% via negative clustering and server-side tracking.",
    href: "/work",
  },
  {
    id: "hospitality",
    category: "Social Media & Brand Narrative",
    name: "Vythiri Luxury Retreats",
    summary: "Cinematic storytelling and executive branding driving direct resort reservations.",
    href: "/work",
  },
  {
    id: "industrial",
    category: "Full-Spectrum Architecture",
    name: "Kozhikode Industrial Supplies",
    summary: "Synchronized web application and localized technical search dominance.",
    href: "/work",
  },
];

export function ShowcaseSection() {
  return (
    <section className={styles.showcaseSection} id="portfolio" aria-labelledby="showcase-heading">
      <div className={styles.container}>
        <h2 id="showcase-heading" className={styles.headingHuge}>
          <span className="accent-wrapper">
            The Showcase
            <svg
              className="scribble scribble-underline"
              viewBox="0 0 200 12"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                d="M0,10 Q50,0 100,10 T200,10"
                fill="none"
                stroke="#00488E"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </h2>
        <p className={styles.lead}>
          A glimpse into recent digital engineering, technical search optimizations, and conversion-focused systems
          delivered for ambitious regional and global brands.
        </p>

        {/* Featured Project */}
        <div className={styles.featuredProject}>
          <div className={styles.featuredContent}>
            <p className={styles.featuredBadge}>
              <span className="accent-wrapper">
                Featured Case Study
                <svg className="scribble scribble-spark" viewBox="0 0 40 40" aria-hidden="true">
                  <path
                    d="M20,5 L20,15 M35,20 L25,20 M20,35 L20,25 M5,20 L15,20"
                    fill="none"
                    stroke="#FF3B30"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </p>
            <h3 className={styles.featuredTitle}>Enterprise Healthcare & Diagnostics Portal</h3>
            <p className={styles.featuredDesc}>
              We engineered a mission-critical web application for a premier hospital group across Kozhikode and Thrissur.
              Built on Next.js App Router with real-time slot scheduling, Schema.org medical entities, and sub-second
              Core Web Vitals, resulting in a 140% surge in qualified online consultations.
            </p>
            <div className={styles.tags}>
              <span className={styles.tag}>Next.js App Router</span>
              <span className={styles.tag}>Schema.org Medical Graph</span>
              <span className={styles.tag}>
                <span className="accent-wrapper">
                  Sub-Second LCP
                  <svg
                    className="scribble scribble-underline"
                    viewBox="0 0 200 12"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M0,10 Q50,0 100,10 T200,10"
                      fill="none"
                      stroke="#FF3B30"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </span>
            </div>
          </div>

          <div className={styles.featuredImageWrapper}>
            <Image
              src="/hero-collaboration.jpg"
              alt="Qubizon Enterprise Case Study - System Architecture"
              fill
              sizes="(max-width: 820px) 100vw, 50vw"
              className={styles.featuredImage}
            />
          </div>
        </div>

        {/* Project List */}
        <div className={styles.projectList}>
          {PROJECTS.map((project) => (
            <Link key={project.id} href={project.href} className={styles.projectRow}>
              <div>
                <p className={styles.projectCategory}>{project.category}</p>
                <h4 className={styles.projectName}>{project.name}</h4>
                <p className={styles.projectSummary}>{project.summary}</p>
              </div>
              <span className={styles.projectLink}>
                View Project <ArrowRight size={14} aria-hidden="true" />
              </span>
            </Link>
          ))}
        </div>

        <div className={styles.viewAll}>
          <Link href="/work" className={styles.btnOutline}>
            View All Projects & Benchmarks
          </Link>
        </div>
      </div>
    </section>
  );
}

