"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ConsultationModal } from "@/components/common/ConsultationModal";
import styles from "./HeroSection.module.css";

const MARQUEE_ITEMS = [
  "Next.js App Router",
  "Technical SEO",
  "Schema Entity Graphs",
  "High-Intent PPC Ads",
  "Sub-Second Core Web Vitals",
  "Social Media Strategy",
  "Content Authority",
  "Conversion Rate Optimization",
  "Kerala Enterprise Growth",
];

export function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className={styles.hero} id="hero" aria-labelledby="hero-heading">
        <div className={styles.heroContent}>
          <p className={styles.categoryTag}>
            • DIGITAL ARCHITECTURE &amp; ENGINEERING FOR HIGH-GROWTH ENTERPRISES /
          </p>

          <h1 id="hero-heading" className={styles.headingHuge}>
            Transforming Vision into <br />
            <span className={styles.heroCalligraphy}>Digital Reality</span>.
          </h1>

          <p className={styles.lead}>
            Qubizon is a premier digital agency specializing in custom Next.js web architecture,
            technical search engine optimization, precision paid advertising, and high-impact brand
            storytelling. We combine engineering precision with creative vision to build high-performance
            digital systems for ambitious enterprises in Kozhikode, Thrissur, and across Kerala.
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
            <a href="#services" className={styles.btnOutline}>
              <span>Explore Capabilities</span>
              <span className={styles.arrowCircle} aria-hidden="true">
                <ArrowRight size={13} />
              </span>
            </a>
          </div>

          {/* Quick Architecture Trust Chips */}
          <div className={styles.trustBadges}>
            <span className={styles.trustBadge}>
              <span className={styles.trustDot} />
              <span>Next.js 14 App Router</span>
            </span>
            <span className={styles.trustBadge}>
              <span className={styles.trustDot} />
              <span>Sub-Second LCP</span>
            </span>
            <span className={styles.trustBadge}>
              <span className={styles.trustDot} />
              <span>Zero Monolithic Bloat</span>
            </span>
          </div>
        </div>

        {/* Architectural Visual Stage & Vector Schematic */}
        <div className={styles.heroAestheticOverlay} aria-hidden="true">
          {/* Glass Telemetry HUD Card */}
          <div className={styles.glassHudCard}>
            <div className={styles.hudHeader}>
              <div className={styles.hudStatusDot} />
              <span className={styles.hudTitle}>SYSTEM_TELEMETRY // KERALA_NODE</span>
            </div>
            <div className={styles.hudGrid}>
              <div className={styles.hudMetric}>
                <span className={styles.hudValue}>99.4%</span>
                <span className={styles.hudLabel}>LIGHTHOUSE SCORE</span>
              </div>
              <div className={styles.hudMetric}>
                <span className={styles.hudValue}>0.00</span>
                <span className={styles.hudLabel}>LAYOUT SHIFT</span>
              </div>
            </div>
            <div className={styles.hudFooter}>
              <span>LAT: 11.2588° N</span>
              <span>LON: 75.7804° E</span>
              <span>KOZHIKODE • THRISSUR</span>
            </div>
          </div>
          <svg viewBox="0 0 800 800" className={styles.schematicSvg}>
            <defs>
              <linearGradient id="blueprint-grad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="rgba(0,0,0,0.01)" />
                <stop offset="50%" stopColor="rgba(0,0,0,0.18)" />
                <stop offset="100%" stopColor="rgba(0,0,0,0.01)" />
              </linearGradient>
            </defs>
            <g>
              {/* Vertical Spines */}
              <line x1="400" y1="80" x2="400" y2="720" stroke="url(#blueprint-grad)" strokeWidth="1" />
              <line
                x1="424"
                y1="180"
                x2="424"
                y2="620"
                stroke="url(#blueprint-grad)"
                strokeWidth="0.5"
                strokeDasharray="4 4"
              />

              {/* Red Pulse Node (SYS_READY) */}
              <circle cx="400" cy="150" r="3.5" className={styles.pulseNode} fill="#FF3B30" />
              <text x="416" y="153" className={styles.schematicLabel}>
                SYS_READY
              </text>

              {/* Rotating Square Box (DATA_LINK_01) */}
              <line x1="400" y1="300" x2="550" y2="300" stroke="rgba(0,0,0,0.1)" strokeWidth="1" />
              <rect
                x="545"
                y="295"
                width="10"
                height="10"
                className={styles.rotateBox}
                fill="none"
                stroke="rgba(0,0,0,0.25)"
                strokeWidth="0.75"
              />
              <text x="568" y="303" className={styles.schematicLabel}>
                DATA_LINK_01
              </text>

              {/* Blue Core Ring (CORE_V1) */}
              <circle cx="400" cy="450" r="9" fill="none" stroke="rgba(0,72,142,0.3)" strokeWidth="1" />
              <circle cx="400" cy="450" r="2.5" fill="#00488E" />
              <text x="338" y="455" className={styles.schematicLabelLeft}>
                CORE_V1
              </text>

              {/* Angled Branch (NODE_SEC) */}
              <line x1="400" y1="600" x2="250" y2="600" stroke="rgba(0,0,0,0.1)" strokeWidth="1" />
              <path d="M 250 600 L 230 580" stroke="rgba(0,0,0,0.2)" fill="none" strokeWidth="1" />
              <text x="175" y="585" className={styles.schematicLabel}>
                NODE_SEC
              </text>

              {/* Geometric Dashed Crosshair */}
              <g opacity="0.15">
                <circle cx="610" cy="490" r="42" fill="none" stroke="#000000" strokeWidth="0.6" strokeDasharray="3 3" />
                <line x1="565" y1="490" x2="655" y2="490" stroke="#000000" strokeWidth="0.6" />
                <line x1="610" y1="445" x2="610" y2="535" stroke="#000000" strokeWidth="0.6" />
              </g>

              {/* Kerala GPS Coordinates */}
              <text x="690" y="740" className={styles.schematicLabel} opacity="0.55">
                [ 11.25 / 75.78 ]
              </text>
            </g>
          </svg>
        </div>
      </section>

      {/* Infinite Marquee Ticker */}
      <section className={styles.marqueeSection} aria-label="Capabilities and Benchmarks Marquee">
        <p className={styles.marqueeTagline}>
          Technologies & Standards that lead <span className={styles.marqueeDotAccent}>.</span>
        </p>
        <div className={styles.marqueeContainer}>
          <div className={styles.marqueeContent}>
            {MARQUEE_ITEMS.concat(MARQUEE_ITEMS).map((item, idx) => (
              <span key={idx} className={styles.marqueeItem}>
                <span>{item}</span>
                <span className={styles.dotSep}>•</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Modal */}
      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
