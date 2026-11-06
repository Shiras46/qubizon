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
      "Our architects map out design systems, responsive wireframes, Schema entity graphs, and conversion paths, iterating until every detail is perfectly aligned.",
  },
  {
    num: "03",
    title: "Engineering & Sprints",
    description:
      "We bring the solutions to life with clean, type-safe Next.js code, semantic HTML, accessible micro-interactions, and high-velocity sprint execution.",
  },
  {
    num: "04",
    title: "Launch & Telemetry",
    description:
      "Rigorous pre-release testing ensures a flawless launch, followed by continuous Core Web Vitals monitoring, search indexing velocity, and ROI optimization.",
  },
];

export function ProcessSection() {
  return (
    <section className={styles.processSection} id="process" aria-labelledby="process-heading">
      <div className={styles.container}>
        <h2 id="process-heading" className={styles.headingLarge}>
          Our{" "}
          <span className="accent-wrapper">
            Process
            <svg className="scribble scribble-spark" viewBox="0 0 40 40" aria-hidden="true">
              <path
                d="M20,5 L20,15 M35,20 L25,20 M20,35 L20,25 M5,20 L15,20 M30,10 L23,17 M30,30 L23,23 M10,30 L17,23 M10,10 L17,17"
                fill="none"
                stroke="#00488E"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </h2>
        <p className={styles.lead}>
          A streamlined 4-step workflow engineered for maximum operational efficiency, technical precision,
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
