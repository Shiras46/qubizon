"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, ChevronDown } from "lucide-react";
import { ConsultationModal } from "@/components/common/ConsultationModal";
import styles from "./HeroSection.module.css";

const TRUST_TAGS = [
  "Next.js App Router",
  "Technical SEO",
  "Precision PPC Ads",
  "Social Growth",
  "Core Web Vitals",
];

export function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className={styles.hero} aria-labelledby="hero-heading">
      <div className="container">
        {/* Dark Cinematic Stage Card (Matching Reference Image) */}
        <div className={styles.heroCard}>
          <div className={styles.cardHeader}>
            <div className={styles.brandBadge}>
              <span className={styles.brandSymbol} aria-hidden="true">❖</span>
              <span className={styles.brandText}>QUBIZON</span>
            </div>
          </div>

          <div className={styles.heroGrid}>
            {/* Left Column: Headline, Narrative, CTA, Scroll Down */}
            <div className={styles.leftCol}>
              <h1 id="hero-heading" className={styles.headline}>
                All your digital needs in{" "}
                <span className={styles.headlineAccent}>one cube.</span>
              </h1>

              <p className={styles.subheadline}>
                Eliminate vendor fragmentation. Qubizon synchronizes custom Next.js website engineering,
                technical SEO, precision paid ads, social media marketing, and authoritative content for
                businesses in Kozhikode, Thrissur, and across Kerala.
              </p>

              <div className={styles.ctaWrapper}>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className={styles.pillCta}
                  aria-haspopup="dialog"
                >
                  <span className={styles.ctaIconSquare} aria-hidden="true">
                    <ArrowRight size={14} />
                  </span>
                  <span>GET IN TOUCH</span>
                </button>
              </div>

              <a href="#about" className={styles.scrollDown} aria-label="Scroll down to About section">
                <span>SCROLL DOWN</span>
                <ChevronDown size={14} aria-hidden="true" />
              </a>
            </div>

            {/* Right Column: Directional Spotlight Team Photo */}
            <div className={styles.rightCol}>
              <div className={styles.imageFrame}>
                <Image
                  src="/hero-collaboration.jpg"
                  alt="Qubizon digital advisory and engineering team collaborating"
                  width={680}
                  height={460}
                  priority
                  className={styles.heroImage}
                />
              </div>
            </div>
          </div>

          {/* Bottom Trust Marks Bar */}
          <div className={styles.trustBar} aria-label="Core Technical Capabilities">
            {TRUST_TAGS.map((tag, idx) => (
              <span key={idx} className={styles.trustItem}>
                <span className={styles.trustDiamond} aria-hidden="true">❖</span>
                <span>{tag}</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Accessible Consultation Popup Modal */}
      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}
