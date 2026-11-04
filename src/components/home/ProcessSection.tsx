import styles from "./ProcessSection.module.css";

interface Step {
  number: string;
  phase: string;
  title: string;
  description: string;
}

const STEPS: Step[] = [
  {
    number: "01",
    phase: "Phase 01",
    title: "Discovery & Audit",
    description: "We analyze your existing technical stack, organic keyword coverage, conversion bottlenecks, and competitor positioning to establish baseline realities.",
  },
  {
    number: "02",
    phase: "Phase 02",
    title: "Unified Strategy",
    description: "We map out an interconnected plan uniting web architecture, technical SEO silos, social channels, and paid acquisition into a single calendar.",
  },
  {
    number: "03",
    phase: "Phase 03",
    title: "High-Velocity Execution",
    description: "Our engineers and strategists build, write, and deploy in focused sprints — maintaining design tokens, accessibility standards, and clean code.",
  },
  {
    number: "04",
    phase: "Phase 04",
    title: "Measurement & Growth",
    description: "We monitor Core Web Vitals, organic indexing health, and pipeline conversion rates, continuously refining campaigns based on verified telemetry.",
  },
];

export function ProcessSection() {
  return (
    <section className={styles.section} aria-labelledby="process-heading">
      <div className="container">
        {/* Nested Rounded Canvas Container (Matching Reference Image Section 4) */}
        <div className={styles.nestedContainer}>
          {/* Asymmetrical Header matching Reference Pattern */}
          <div className={styles.headerRow}>
            <div className={styles.badgeWrapper}>
              <span className={styles.badgeDiamond} aria-hidden="true">❖</span>
              <p className={styles.sectionBadge}>HOW IT WORKS (STEP BY STEP)</p>
            </div>

            <div className={styles.headingContent}>
              <h2 id="process-heading" className={styles.sectionTitle}>
                How We Partner With Your Team
              </h2>
              <p className={styles.sectionDescription}>
                A structured, repeatable four-step process built to minimize friction, provide complete visibility, and ensure every deliverable hits measurable targets.
              </p>
            </div>
          </div>

          {/* 2-Column Grid of High-Radius Bento Step Cards (matching Reference Image) */}
          <div className={styles.stepsGrid}>
            {STEPS.map((step) => (
              <div key={step.number} className={styles.stepCard}>
                <div className={styles.stepBadge} aria-hidden="true">
                  {step.number}
                </div>

                <div className={styles.cardContent}>
                  <div className={styles.cardHeaderRow}>
                    <h3 className={styles.stepTitle}>{step.title}</h3>
                    <span className={styles.phaseIndicator}>{step.phase}</span>
                  </div>
                  <p className={styles.stepDescription}>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
