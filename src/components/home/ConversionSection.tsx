"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, MessageSquare, Phone, Mail } from "lucide-react";
import { ConsultationModal } from "@/components/common/ConsultationModal";
import styles from "./ConversionSection.module.css";

export function ConversionSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className={styles.ctaSection} id="contact" aria-labelledby="cta-heading">
        <div className={styles.container}>
          <div className={styles.ctaGrid}>
            {/* Left: Architectural Collaboration Visual Frame */}
            <div className={styles.imageColumn}>
              <div className={styles.imageFrame}>
                <Image
                  src="/hero-collaboration.jpg"
                  alt="Qubizon Engineering & Growth Consultation Desk"
                  fill
                  sizes="(max-width: 960px) 100vw, 48vw"
                  className={styles.ctaImage}
                />
                <div className={styles.imageOverlay} />
                <div className={styles.imageBadge}>
                  <span className={styles.badgeDot} />
                  <span>Direct Engineering Desk • Kerala, India</span>
                </div>
              </div>
            </div>

            {/* Right: Architectural Consultation Card (Matching DNOIN Reference Section 7) */}
            <div className={styles.contentColumn}>
              <p className={styles.sectionBadge}>• LET&apos;S WORK TOGETHER /</p>
              <h2 id="cta-heading" className={styles.headingHuge}>
                Let&apos;s work <span className="calligraphy">Together</span>.
              </h2>

              <p className={styles.lead}>
                Ready to transform your vision into market authority? Speak directly with our technical directors in Kozhikode and Thrissur. We review requirements and deliver a verifiable architectural roadmap within one business day.
              </p>

              <div className={styles.actionGroup}>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className={styles.btnPrimary}
                  aria-haspopup="dialog"
                >
                  <span>Start a Project</span>
                  <span className={styles.arrowCircle} aria-hidden="true">
                    <ArrowRight size={13} />
                  </span>
                </button>

                <a
                  href="https://wa.me/917902911961"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.btnOutline}
                >
                  <span>Chat on WhatsApp</span>
                  <span className={styles.arrowCircle} aria-hidden="true">
                    <MessageSquare size={13} />
                  </span>
                </a>
              </div>

              {/* Direct Reach Channels */}
              <div className={styles.directChannels}>
                <a href="tel:07902911961" className={styles.channelLink}>
                  <Phone size={14} className={styles.channelIcon} aria-hidden="true" />
                  <span>079029 11961</span>
                </a>
                <span className={styles.channelDivider}>•</span>
                <a href="mailto:info@qubizon.com" className={styles.channelLink}>
                  <Mail size={14} className={styles.channelIcon} aria-hidden="true" />
                  <span>info@qubizon.com</span>
                </a>
              </div>
            </div>
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
