"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, MessageSquare, Phone, Mail } from "lucide-react";
import { ConsultationModal } from "@/components/common/ConsultationModal";
import { SITE_CONFIG } from "@/lib/constants";
import styles from "./ConversionSection.module.css";

export function ConversionSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className={styles.ctaSection} id="contact" aria-labelledby="cta-heading">
        <div className={styles.container}>
          <div className={styles.ctaStage}>
            <div className={styles.ctaGrid}>
              {/* Left: Architectural Collaboration Visual Frame */}
              <div className={styles.imageColumn}>
                <div className={styles.imageFrame}>
                  <Image
                    src="/hero-collaboration.jpg"
                    alt="Qubizon Engineering &amp; Growth Consultation Desk"
                    fill
                    sizes="(max-width: 960px) 100vw, 48vw"
                    className={styles.ctaImage}
                  />
                  <div className={styles.imageOverlay} />
                  <div className={styles.imageBadge}>
                    <span className={styles.badgeDot} />
                    <span>Direct Engineering Desk &bull; Kerala &amp; GCC</span>
                  </div>
                </div>
              </div>

              {/* Right: Architectural Consultation Card */}
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
                    href={`https://wa.me/${SITE_CONFIG.phoneTel.replace(/\+/g, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.btnOutline}
                  >
                    <MessageSquare size={13} className={styles.whatsAppIcon} aria-hidden="true" />
                    <span>Chat on WhatsApp</span>
                    <ArrowRight size={12} className={styles.outlineArrow} aria-hidden="true" />
                  </a>
                </div>

                {/* Direct Reach Channels */}
                <div className={styles.directChannels}>
                  <a href={`tel:${SITE_CONFIG.phoneTel}`} className={styles.channelLink}>
                    <Phone size={13} className={styles.channelIcon} aria-hidden="true" />
                    <span>{SITE_CONFIG.phone}</span>
                  </a>
                  <span className={styles.channelDivider}>•</span>
                  <a href={`mailto:${SITE_CONFIG.email}`} className={styles.channelLink}>
                    <Mail size={13} className={styles.channelIcon} aria-hidden="true" />
                    <span>{SITE_CONFIG.email}</span>
                  </a>
                </div>
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
