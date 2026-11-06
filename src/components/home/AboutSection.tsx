"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import styles from "./AboutSection.module.css";

const P1_WORDS = [
  "The", "market", "has", "evolved,", "the", "ambition", "has", "grown,",
  "and", "you", "understand", "the", "business", "differently", "than",
  "you", "did", "two", "years", "ago."
];

const P2_WORDS = [
  "At", "some", "point,", "fragmented", "agencies,", "unvetted", "freelancers,",
  "and", "legacy", "platforms", "stop", "keeping", "up", "and", "start",
  "telling", "an", "older", "version", "of", "your", "story."
];

const P3_WORDS = [
  "That's", "the", "moment", "when", "it's", "time", "to", "build", "with"
];

function updateWordsOpacity(
  words: (HTMLSpanElement | null)[],
  rect: DOMRect,
  vh: number,
  triggerStartRatio: number,
  triggerEndRatio: number,
  minOpacity = 0.22
) {
  const triggerStart = vh * triggerStartRatio;
  const triggerEnd = vh * triggerEndRatio;

  let progress = (triggerStart - rect.top) / (triggerStart - triggerEnd);
  progress = Math.max(0, Math.min(1, progress));

  const totalWords = words.length;
  if (totalWords === 0) return;

  const step = 1 / totalWords;
  const wordDuration = Math.min(0.25, step * 2.2);

  for (let i = 0; i < totalWords; i++) {
    const span = words[i];
    if (!span) continue;

    const wordStart = (i / totalWords) * (1 - wordDuration);
    let wordProgress = (progress - wordStart) / wordDuration;
    wordProgress = Math.max(0, Math.min(1, wordProgress));

    const opacity = minOpacity + wordProgress * (1 - minOpacity);
    span.style.opacity = opacity.toFixed(3);
  }
}

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const p1Ref = useRef<HTMLHeadingElement>(null);
  const p2Ref = useRef<HTMLParagraphElement>(null);
  const p3Ref = useRef<HTMLParagraphElement>(null);

  const p1WordRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const p2WordRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const p3WordRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      [...p1WordRefs.current, ...p2WordRefs.current, ...p3WordRefs.current].forEach((span) => {
        if (span) span.style.opacity = "1";
      });
      return;
    }

    let ticking = false;

    const updateScrollReveal = () => {
      const vh = window.innerHeight;

      if (p1Ref.current) {
        const rect1 = p1Ref.current.getBoundingClientRect();
        updateWordsOpacity(p1WordRefs.current, rect1, vh, 0.88, 0.48, 0.28);
      }

      if (p2Ref.current) {
        const rect2 = p2Ref.current.getBoundingClientRect();
        updateWordsOpacity(p2WordRefs.current, rect2, vh, 0.82, 0.44, 0.20);
      }

      if (p3Ref.current) {
        const rect3 = p3Ref.current.getBoundingClientRect();
        updateWordsOpacity(p3WordRefs.current, rect3, vh, 0.78, 0.40, 0.18);
      }

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

          {/* Right Column: Progressive Word-by-Word Scroll Reveal */}
          <div className={styles.contentColumn}>
            <p className={styles.categoryTag}>
              • BRAND &amp; WEBSITES FOR HIGH-GROWTH ENTERPRISES /
            </p>

            <div className={styles.narrativeBlock}>
              {/* Paragraph 1: Word-by-word reveal */}
              <h2
                ref={p1Ref}
                id="about-heading"
                className={`${styles.narrativeItem} ${styles.narrativePrimary}`}
              >
                {P1_WORDS.map((word, i) => (
                  <span
                    key={`p1-${i}`}
                    ref={(el) => {
                      p1WordRefs.current[i] = el;
                    }}
                    className={styles.word}
                  >
                    {word}
                  </span>
                ))}
              </h2>

              {/* Paragraph 2: Word-by-word reveal */}
              <p
                ref={p2Ref}
                className={`${styles.narrativeItem} ${styles.narrativeSecondary}`}
              >
                {P2_WORDS.map((word, i) => (
                  <span
                    key={`p2-${i}`}
                    ref={(el) => {
                      p2WordRefs.current[i] = el;
                    }}
                    className={styles.word}
                  >
                    {word}
                  </span>
                ))}
              </p>

              {/* Paragraph 3: Word-by-word reveal concluding in glowing brand gold */}
              <p
                ref={p3Ref}
                className={`${styles.narrativeItem} ${styles.narrativeHighlight}`}
              >
                {P3_WORDS.map((word, i) => (
                  <span
                    key={`p3-${i}`}
                    ref={(el) => {
                      p3WordRefs.current[i] = el;
                    }}
                    className={styles.word}
                  >
                    {word}
                  </span>
                ))}
                <span
                  ref={(el) => {
                    p3WordRefs.current[P3_WORDS.length] = el;
                  }}
                  className={`${styles.word} ${styles.brandCalligraphy}`}
                >
                  Qubizon.
                </span>
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
