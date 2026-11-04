import styles from "./WhyQubizon.module.css";

interface Pillar {
  number: string;
  title: string;
  body: string;
}

const PILLARS: Pillar[] = [
  {
    number: "01",
    title: "Unified Technical Architecture",
    body: "When web developers, SEO analysts, and copywriters collaborate on the same codebase, there are no communication silos or delayed handoffs. Every feature is engineered for crawlability, performance, and conversion from day one.",
  },
  {
    number: "02",
    title: "Single Accountability Partner",
    body: "Managing five specialized boutique vendors leads to blame games when organic traffic dips or paid conversion drop. With Qubizon, your entire digital pipeline is governed under one responsible roof.",
  },
  {
    number: "03",
    title: "Velocity Through Shared Standards",
    body: "We don't reinvent design systems or tracking schemas on every campaign. Using shared design tokens, modular UI libraries, and cohesive analytics, we bring initiatives to market faster with fewer revisions.",
  },
  {
    number: "04",
    title: "Truth-First Telemetry",
    body: "We focus exclusively on verifiable business metrics — qualified leads, organic keyword ownership, and measurable pipeline ROI. No fabricated case numbers, no manipulated screenshots, and no vanity metrics.",
  },
];

const TICKER_DISCIPLINES = [
  "Custom Website Development",
  "Technical SEO Crawlability",
  "Social Media Marketing",
  "Precision Paid Advertising",
  "Content Marketing",
  "Next.js App Router Architecture",
  "Zero CLS Core Web Vitals",
  "WCAG 2.1 AA Accessibility",
];

export function WhyQubizon() {
  return (
    <section className={styles.section} aria-labelledby="why-heading">
      <div className="container">
        {/* Editorial Introduction Header (matching Image 2 & 3) */}
        <div className={styles.introHeader}>
          <div className={styles.badgeWrapper}>
            <span className={styles.introDot} aria-hidden="true" />
            <span className={styles.sectionBadge}>The Unified Model</span>
          </div>

          <div className={styles.headlineWrapper}>
            <h2 id="why-heading" className={styles.sectionTitle}>
              Why the Cube Structure Out-Executes Fragmented Agencies
            </h2>
            <p className={styles.editorialLead}>
              Traditional digital agencies operate in isolated departments. Qubizon connects your entire web presence into one coherent, multidisciplinary machine.
            </p>
          </div>
        </div>

        {/* 4 Connected Framework Columns */}
        <div className={styles.pillarsGrid}>
          {PILLARS.map((pillar) => (
            <div key={pillar.number} className={styles.pillarCard}>
              <span className={styles.pillarNumber} aria-hidden="true">{pillar.number}</span>
              <h3 className={styles.pillarTitle}>{pillar.title}</h3>
              <p className={styles.pillarBody}>{pillar.body}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Double Overlapping Angled Marquee Ribbons (matching Image 2 & 3) */}
      <div className={styles.ribbonWrapper} aria-hidden="true">
        {/* Ribbon 1: Angled slightly negative */}
        <div className={styles.ribbonTrackOne}>
          <div className={styles.ribbonContent}>
            {[...TICKER_DISCIPLINES, ...TICKER_DISCIPLINES].map((item, idx) => (
              <span key={idx} className={styles.tickerItem}>
                <span className={styles.star}>✦</span> {item}
              </span>
            ))}
          </div>
        </div>

        {/* Ribbon 2: Angled slightly positive crossing ribbon 1 */}
        <div className={styles.ribbonTrackTwo}>
          <div className={styles.ribbonContentReverse}>
            {[...TICKER_DISCIPLINES, ...TICKER_DISCIPLINES].reverse().map((item, idx) => (
              <span key={idx} className={styles.tickerItem}>
                <span className={styles.star}>★</span> {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
