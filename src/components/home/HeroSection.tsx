"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Layers, Sparkles, CheckCircle2, Gauge } from "lucide-react";
import { ConsultationModal } from "@/components/common/ConsultationModal";
import styles from "./HeroSection.module.css";

export function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className={styles.hero} aria-labelledby="hero-heading">
      {/* Massive Architectural Brand Watermark */}
      <div className={styles.watermark} aria-hidden="true">
        QUBIZON
      </div>

      <div className="container">
        <div className={styles.heroContent}>
          <div className={styles.pillBadge}>
            <span className={styles.badgeDiamond} aria-hidden="true">❖</span>
            <Layers size={14} aria-hidden="true" />
            <span>Digital Marketing & Web Development • Kerala</span>
          </div>

          <h1 id="hero-heading" className={styles.headline}>
            All your digital needs in <span className={styles.headlineAccent}>one cube.</span>
          </h1>

          <p className={styles.subheadline}>
            Eliminate vendor fragmentation. Qubizon synchronizes custom Next.js website engineering,
            technical SEO, precision paid ads, social media marketing, and authoritative content for
            businesses in Kozhikode, Thrissur, and across Kerala.
          </p>

          <div className={styles.ctaGroup}>
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className={styles.primaryCta}
              aria-haspopup="dialog"
            >
              <Sparkles size={18} aria-hidden="true" />
              <span>Request Discovery Call</span>
              <span className={styles.ctaArrowCircle} aria-hidden="true">
                <ArrowRight size={14} />
              </span>
            </button>

            <Link href="/contact" className={styles.secondaryCta}>
              <span>Full Proposal Form</span>
              <span className={styles.ctaArrowCircleSecondary} aria-hidden="true">
                <ArrowRight size={14} />
              </span>
            </Link>
          </div>

          {/* Floating Metric Proof Cards (Matching Reference Architecture) */}
          <div className={styles.floatingCardsRow} aria-label="Key Agency Verification Standards">
            <div className={styles.proofCard}>
              <div className={styles.proofHeader}>
                <span className={styles.proofMetric}>10+ YEARS</span>
                <span className={styles.proofTag}>
                  <CheckCircle2 size={12} aria-hidden="true" />
                  VERIFIED
                </span>
              </div>
              <p className={styles.proofLabel}>DIGITAL ENGINEERING</p>
              <p className={styles.proofDescription}>
                A decade of expertise delivering unified website performance and measurable search pipeline.
              </p>
            </div>

            <div className={styles.proofCard}>
              <div className={styles.proofHeader}>
                <span className={styles.proofMetric}>≤ 1.2s</span>
                <span className={styles.proofTag}>
                  <Gauge size={12} aria-hidden="true" />
                  SPEED
                </span>
              </div>
              <p className={styles.proofLabel}>CORE WEB VITALS</p>
              <p className={styles.proofDescription}>
                Sub-second LCP and zero Cumulative Layout Shift built into every Next.js client deployment.
              </p>
            </div>
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
