import Link from "next/link";
import { ArrowRight, ShieldCheck, Zap, Users } from "lucide-react";
import styles from "./ConversionSection.module.css";

const CREDIBILITY_POINTS = [
  {
    icon: Users,
    title: "Senior Engineering Access",
    desc: "Direct communication with senior full-stack developers and technical SEO strategists from day one.",
  },
  {
    icon: ShieldCheck,
    title: "Zero Sales Pressure",
    desc: "Transparent architectural audits and objective assessments rather than pushy agency sales quotas.",
  },
  {
    icon: Zap,
    title: "High-Velocity Turnaround",
    desc: "Fast discovery-to-roadmap delivery with verifiable milestones and zero vendor fragmentation.",
  },
];

export function ConversionSection() {
  return (
    <section className={styles.section} aria-labelledby="conversion-heading">
      <div className="container">
        {/* Massive 36px Curved Dark Stage Card (matching Image 5 Testimonial/Closing pattern) */}
        <div className={styles.stageCard}>
          <div className={styles.ambientGlow} aria-hidden="true" />

          <div className={styles.innerContent}>
            <div className={styles.leftCol}>
              <div className={styles.badgeWrapper}>
                <span className={styles.badgeDiamond} aria-hidden="true">❖</span>
                <span className={styles.badge}>START THE CONVERSATION</span>
              </div>
              <h2 id="conversion-heading" className={styles.title}>
                Ready to Unify Your Digital Strategy?
              </h2>
              <p className={styles.description}>
                Schedule an introductory technical consultation. We will analyze your web architecture, evaluate your organic search footprint, and map out a coordinated growth plan.
              </p>

              <div className={styles.ctaGroup}>
                <Link href="/contact" className={styles.ctaButton}>
                  <span>Let&apos;s Talk About Your Project</span>
                  <span className={styles.ctaArrowCircle} aria-hidden="true">
                    <ArrowRight size={14} />
                  </span>
                </Link>
                <p className={styles.supportingText}>
                  Direct communication with senior engineers and strategists &bull; Zero sales pressure
                </p>
              </div>
            </div>

            {/* Right Column: Architectural Guarantee Cards (matching Image 5 preview panel) */}
            <div className={styles.rightCol} aria-label="Our Service Commitments">
              {CREDIBILITY_POINTS.map((pt, idx) => {
                const Icon = pt.icon;
                return (
                  <div key={idx} className={styles.credCard}>
                    <div className={styles.credIconWrapper}>
                      <Icon size={20} aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className={styles.credTitle}>{pt.title}</h3>
                      <p className={styles.credDesc}>{pt.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
