"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Layers, Sparkles } from "lucide-react";
import { InteractiveCube } from "@/components/cube/InteractiveCube";
import { ConsultationModal } from "@/components/common/ConsultationModal";
import styles from "./HeroSection.module.css";

export function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className={styles.hero} aria-labelledby="hero-heading">
      <div className="container">
        <div className={styles.heroContent}>
          <div className={styles.pillBadge}>
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
              <ArrowRight size={18} aria-hidden="true" />
            </button>

            <Link href="/contact" className={styles.secondaryCta}>
              <span>Full Proposal Form</span>
            </Link>
          </div>
        </div>

        {/* Signature Interactive Service Cube */}
        <div className={styles.cubeShowcase}>
          <InteractiveCube />
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
