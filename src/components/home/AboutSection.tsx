import { Layers, Users, Clock } from "lucide-react";
import styles from "./AboutSection.module.css";

interface StatCard {
  icon: typeof Layers;
  metric: string;
  description: string;
}

const STATS: StatCard[] = [
  {
    icon: Layers,
    metric: "150+",
    description: "Consulting Engagements across strategy, operations, success and growth.",
  },
  {
    icon: Users,
    metric: "90%+",
    description: "Client retention rate through rigorous and long-term advisory work for business scale.",
  },
  {
    icon: Clock,
    metric: "10+",
    description: "Years of supporting business leaders and management teams for their success.",
  },
];

export function AboutSection() {
  return (
    <section id="about" className={styles.section} aria-labelledby="about-section-heading">
      <div className="container">
        {/* Asymmetric Section Header (matching Image Reference) */}
        <div className={styles.headerRow}>
          <div className={styles.badgeWrapper}>
            <span className={styles.badgeDiamond} aria-hidden="true">❖</span>
            <p className={styles.sectionBadge}>WHO WE ARE</p>
          </div>

          <div className={styles.headingContent}>
            <h2 id="about-section-heading" className={styles.sectionTitle}>
              We work with founders, executives, and leadership teams who are navigating uncertainty, operational complexity, or critical strategic decisions.
            </h2>
          </div>
        </div>

        {/* 3-Column Bento Stat Cards Grid */}
        <div className={styles.statsGrid}>
          {STATS.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div key={idx} className={styles.statCard}>
                <div className={styles.iconWrapper} aria-hidden="true">
                  <Icon size={20} className={styles.icon} />
                </div>
                <div className={styles.metricValue}>{stat.metric}</div>
                <p className={styles.statDescription}>{stat.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

