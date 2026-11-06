import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import styles from "./AboutSection.module.css";

export function AboutSection() {
  return (
    <section className={styles.aboutSection} id="about" aria-labelledby="about-heading">
      <div className={styles.container}>
        <div className={styles.aboutGrid}>
          {/* Left Column: High-End Agency / Team Image */}
          <div className={styles.imageColumn}>
            <div className={styles.imageFrame}>
              <Image
                src="/hero-collaboration.jpg"
                alt="Qubizon Digital Solutions - Unified Agency Team Collaborating"
                fill
                sizes="(max-width: 900px) 100vw, 45vw"
                className={styles.aboutImage}
                priority={false}
              />
              <div className={styles.imageOverlay} />
              <div className={styles.imageCaption}>
                <span className={styles.captionDot} aria-hidden="true" />
                <span>Unified Agency Architecture • Kerala, India</span>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative Content (Matching Reference Model) */}
          <div className={styles.contentColumn}>
            <p className={styles.categoryTag}>
              • BRAND &amp; WEBSITES FOR HIGH-GROWTH ENTERPRISES /
            </p>

            <div className={styles.narrativeBlock}>
              <h2 id="about-heading" className={styles.narrativePrimary}>
                The market has evolved, the ambition has grown, and you understand the business
                differently than you did two years ago.
              </h2>

              <p className={styles.narrativeSecondary}>
                At some point, fragmented agencies, unvetted freelancers, and legacy platforms
                stop keeping up and start telling an older version of your story.
              </p>

              <p className={styles.narrativeHighlight}>
                That&apos;s the moment when it&apos;s time to build with{" "}
                <span className="calligraphy">Qubizon</span>.
              </p>
            </div>

            {/* Proof Badges */}
            <div className={styles.badgeRow}>
              <span className={styles.proofBadge}>
                <span className={styles.monoNumber}>01</span> Unified Team
              </span>
              <span className={styles.proofBadge}>
                <span className={styles.monoNumber}>05</span> Core Disciplines
              </span>
              <span className={styles.proofBadge}>
                <span className={styles.monoNumber}>100%</span> Code &amp; Asset Ownership
              </span>
            </div>

            {/* Action Buttons */}
            <div className={styles.actionRow}>
              <Link href="/about" className={styles.btnPrimary}>
                <span>Discover Our Model</span>
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
              <Link href="/services" className={styles.btnText}>
                <span>Explore All Five Disciplines &rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
