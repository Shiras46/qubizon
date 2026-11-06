"use client";

import { useState } from "react";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants";
import { ConsultationModal } from "@/components/common/ConsultationModal";
import styles from "./ConversionSection.module.css";

export function ConversionSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className={styles.ctaSection} id="contact" aria-labelledby="cta-heading">
        <div className={styles.container}>
          <h2 id="cta-heading" className={styles.headingHuge}>
            Ready to build something{" "}
            <span className="accent-wrapper">
              <span className="calligraphy">amazing?</span>
              <svg
                className="scribble scribble-underline"
                viewBox="0 0 200 12"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path
                  d="M0,10 Q50,0 100,10 T200,10"
                  fill="none"
                  stroke="#FF3B30"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h2>

          <p className={styles.lead}>
            Let&apos;s turn your vision into a digital masterpiece. Reach out today and let&apos;s discuss
            your next high-performance web platform, technical SEO roadmap, or synchronized ad campaign.
          </p>

          <div className={styles.actionGroup}>
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className={styles.btnPrimary}
              aria-haspopup="dialog"
            >
              Start a Project
            </button>

            <a
              href="https://wa.me/917902911961"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnOutline}
            >
              <span className="accent-wrapper">
                Contact Us on WhatsApp
                <svg
                  className="scribble scribble-underline"
                  viewBox="0 0 200 12"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path
                    d="M0,10 Q50,0 100,10 T200,10"
                    fill="none"
                    stroke="#00488E"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </section>

      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
