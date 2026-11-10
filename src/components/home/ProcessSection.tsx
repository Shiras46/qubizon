import styles from "./ProcessSection.module.css";

interface Step {
  num: string;
  title: string;
  description: string;
}

const STEPS: Step[] = [
  {
    num: "01",
    title: "Discover",
    description:
      "We learn about your business, your audience, and what you want to achieve.",
  },
  {
    num: "02",
    title: "Plan",
    description:
      "We recommend suitable services and outline a clear approach for your project.",
  },
  {
    num: "03",
    title: "Create",
    description:
      "Our team develops your digital solution with care and attention to your requirements.",
  },
  {
    num: "04",
    title: "Support and Improve",
    description:
      "We help you review your results and identify opportunities to improve over time.",
  },
];

export function ProcessSection() {
  return (
    <section className={styles.processSection} id="process" aria-labelledby="process-heading">
      <div className={styles.container}>
        <p className={styles.sectionBadge}>• HOW WE WORK /</p>
        <h2 id="process-heading" className={styles.headingLarge}>
          Our 4-step approach to moving your business <span className="calligraphy">forward</span>.
        </h2>
        <p className={styles.lead}>
          A clear, connected approach engineered to develop practical digital tools that support your workflows and business growth.
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
