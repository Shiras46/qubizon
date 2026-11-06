import styles from "./ProcessSection.module.css";

interface Step {
  num: string;
  title: string;
  description: string;
}

const STEPS: Step[] = [
  {
    num: "01",
    title: "Discovery & Audit",
    description:
      "We dive deep into your brand, unit economics, market landscape, technical stack, and competitor search intent to identify high-leverage growth opportunities.",
  },
  {
    num: "02",
    title: "Architecture & Design",
    description:
      "Our architects map out design systems, responsive wireframes, Schema entity graphs, and conversion paths, iterating until every detail is aligned.",
  },
  {
    num: "03",
    title: "Engineering & Sprints",
    description:
      "We bring the solutions to life with clean, type-safe Next.js code, semantic HTML, accessible micro-interactions, and high-velocity bi-weekly sprints.",
  },
  {
    num: "04",
    title: "Launch & Telemetry",
    description:
      "Rigorous pre-release testing ensures a flawless launch, followed by continuous Core Web Vitals telemetry, search indexing, and ROI optimization.",
  },
];

export function ProcessSection() {
  return (
    <section className={styles.processSection} id="process" aria-labelledby="process-heading">
      <div className={styles.container}>
        <p className={styles.sectionBadge}>• WORKING METHODOLOGY /</p>
        <h2 id="process-heading" className={styles.headingLarge}>
          Our 4-step execution <span className="calligraphy">blueprint</span>.
        </h2>
        <p className={styles.lead}>
          A disciplined workflow engineered for maximum operational efficiency, technical precision,
          and verifiable business outcomes.
        </p>

        <div className={styles.processSteps}>
          {STEPS.map((step) => (
            <div key={step.num} className={styles.processStep}>
              <div className={styles.stepNum}>{step.num}</div>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDesc}>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
