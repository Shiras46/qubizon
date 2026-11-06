"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import styles from "./AboutSection.module.css";

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const p1Ref = useRef<HTMLHeadingElement>(null);
  const p2Ref = useRef<HTMLParagraphElement>(null);
  const p3Ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      [p1Ref, p2Ref, p3Ref].forEach((r) => {
        r.current?.style.setProperty("--p-opacity", "1");
      });
      return;
    }

    let ticking = false;

    const updateScrollReveal = () => {
      const vh = window.innerHeight;
      const paragraphs = [
        { ref: p1Ref, minOpacity: 0.35 },
        { ref: p2Ref, minOpacity: 0.22 },
        { ref: p3Ref, minOpacity: 0.15 },
      ];

      paragraphs.forEach(({ ref, minOpacity }, index) => {
        const el = ref.current;
        if (!el) return;

        const rect = el.getBoundingClientRect();

        // The active reading window: starts fading in at 82% of viewport,
        // reaches peak 100% illumination when at 48% of viewport.
        const triggerStart = vh * 0.82;
        const triggerEnd = vh * 0.48;

        let progress = (triggerStart - rect.top) / (triggerStart - triggerEnd);
        progress = Math.max(0, Math.min(1, progress));

        // For the very first paragraph, ensure it starts well visible if section is near top
        const effectiveMin = index === 0 ? Math.max(minOpacity, 0.45) : minOpacity;
        const opacity = effectiveMin + progress * (1 - effectiveMin);

        el.style.setProperty("--p-opacity", opacity.toFixed(3));
      });

      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollReveal);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    // Initial calculation on mount
    updateScrollReveal();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={styles.aboutSection}
      id="about"
      aria-labelledby="about-heading"
    >
      <div className={styles.container}>
        <div className={styles.aboutGrid}>
          {/* Left Column: Sticky Editorial Image Frame */}
          <div className={styles.imageColumn}>
            <div className={styles.imageFrame}>
              <Image
                src="/hero-collaboration.jpg"
                alt="Qubizon Digital Solutions - Unified Agency Team Collaborating"
                fill
                sizes="(max-width: 960px) 100vw, 45vw"
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

          {/* Right Column: Scroll-Revealing Narrative Content */}
          <div className={styles.contentColumn}>
            <p className={styles.categoryTag}>
              • BRAND &amp; WEBSITES FOR HIGH-GROWTH ENTERPRISES /
            </p>

            <div className={styles.narrativeBlock}>
              {/* Paragraph 1: Illuminates first */}
              <h2
                ref={p1Ref}
                id="about-heading"
                className={`${styles.narrativeItem} ${styles.narrativePrimary}`}
              >
                The market has evolved, the ambition has grown, and you understand the business
                differently than you did two years ago.
              </h2>

              {/* Paragraph 2: Illuminates as user scrolls */}
              <p
                ref={p2Ref}
                className={`${styles.narrativeItem} ${styles.narrativeSecondary}`}
              >
                At some point, fragmented agencies, unvetted freelancers, and legacy platforms
                stop keeping up and start telling an older version of your story.
              </p>

              {/* Paragraph 3: Illuminates with punchline & gold accent */}
              <p
                ref={p3Ref}
                className={`${styles.narrativeItem} ${styles.narrativeHighlight}`}
              >
                That&apos;s the moment when it&apos;s time to build with{" "}
                <span className={styles.brandCalligraphy}>Qubizon</span>.
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
