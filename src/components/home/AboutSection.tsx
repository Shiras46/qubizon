"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Target, Globe, ShieldCheck, Plus, Check } from "lucide-react";
import styles from "./AboutSection.module.css";

const P1_WORDS = [
  "Your", "digital", "presence", "is", "often", "the", "first", "way",
  "customers", "discover", "and", "experience", "your", "business."
];

const P2_WORDS = [
  "We", "create", "practical,", "creative,", "and", "results-focused",
  "digital", "solutions", "that", "help", "you", "connect", "with", "your",
  "audience,", "strengthen", "your", "brand,", "and", "achieve", "your",
  "business", "goals.", "Whether", "you’re", "starting", "from", "scratch",
  "or", "ready", "to", "improve", "what", "you", "already", "have,", "our",
  "team", "is", "here", "to", "help."
];

const P3_WORDS = [
  "Good", "digital", "work", "starts", "with", "understanding", "your",
  "goals", "and", "challenges.", "We’re", "here", "to", "support", "your",
  "next", "steps", "with"
];

const STAT_CARDS = [
  {
    icon: Target,
    stat: "OUR MISSION",
    eyebrow: "EFFECTIVE DIGITAL SOLUTIONS",
    label:
      "To empower businesses with effective digital solutions that support growth, improve customer connections, and simplify everyday operations with dependable technology tailored to each client's goals.",
  },
  {
    icon: Globe,
    stat: "OUR VISION",
    eyebrow: "TRUSTED DIGITAL PARTNER",
    label:
      "To become a trusted digital partner for businesses seeking to grow and succeed in an ever-changing online world, making digital tools and strategies accessible, useful, and impactful.",
  },
  {
    icon: ShieldCheck,
    stat: "WHY CHOOSE US",
    eyebrow: "CONNECTED & PRACTICAL",
    label:
      "Tailored solutions shaped around your needs, creative and practical thinking with clear purpose, a connected approach across marketing and software, and reliable collaboration.",
  },
];

function updateWordsOpacity(
  words: (HTMLSpanElement | null)[],
  rect: DOMRect,
  vh: number,
  triggerStartRatio: number,
  triggerEndRatio: number,
  minOpacity = 0.2
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
        updateWordsOpacity(p1WordRefs.current, rect1, vh, 0.88, 0.48, 0.38);
      }

      if (p2Ref.current) {
        const rect2 = p2Ref.current.getBoundingClientRect();
        updateWordsOpacity(p2WordRefs.current, rect2, vh, 0.82, 0.44, 0.38);
      }

      if (p3Ref.current) {
        const rect3 = p3Ref.current.getBoundingClientRect();
        updateWordsOpacity(p3WordRefs.current, rect3, vh, 0.78, 0.40, 0.38);
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
        <div className={styles.aboutStage}>
          {/* Category Tag: + WELCOME TO QUBIZON (Above Split Grid, Anchoring Left) */}
          <div className={styles.tagWrap}>
            <div className={styles.whoWeAreTag}>
              <Plus size={13} className={styles.tagIcon} aria-hidden="true" strokeWidth={3} />
              <span>WELCOME TO QUBIZON DIGITAL SOLUTIONS</span>
            </div>
          </div>

          {/* Split 2-Column Modern Architecture: Synchronized Top Start & Equal Length */}
          <div className={styles.splitGrid}>
            {/* Left Column: Photographic Card with Floating Badge */}
            <div className={styles.imageColumn}>
              <div className={styles.imageFrame}>
                <div className={styles.floatingBadge}>
                  <span className={styles.pulseDot} />
                  <span>CREATIVE, STRATEGIC &amp; PRACTICAL DIGITAL SOLUTIONS</span>
                </div>
                <Image
                  src="/hero-collaboration.jpg"
                  alt="Qubizon unified digital agency engineering and strategic leadership collaboration"
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className={styles.image}
                />
              </div>
            </div>

            {/* Right Column: High-Impact Narrative Aligned to Top & Bottom */}
            <div className={styles.contentColumn}>
              {/* Progressive Word-by-Word Scroll Reveal Narrative Block */}
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

                {/* Paragraph 3: Word-by-word reveal concluding in brand accent */}
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

              {/* Bottom Actions & Trust Indicators Aligned to Image Bottom */}
              <div className={styles.bottomArea}>
                <div className={styles.actionAndTrustRow}>
                  <Link href="/about" className={styles.btnPrimary}>
                    <span>Learn About Us</span>
                    <ArrowRight size={14} aria-hidden="true" />
                  </Link>

                  <div className={styles.trustIndicators}>
                    <span className={styles.trustItem}>
                      <span className={styles.checkCircle}>
                        <Check size={11} strokeWidth={3} aria-hidden="true" />
                      </span>
                      <span>Tailored Solutions</span>
                    </span>
                    <span className={styles.trustItem}>
                      <span className={styles.checkCircle}>
                        <Check size={11} strokeWidth={3} aria-hidden="true" />
                      </span>
                      <span>Creative &amp; Practical Thinking</span>
                    </span>
                    <span className={styles.trustItem}>
                      <span className={styles.checkCircle}>
                        <Check size={11} strokeWidth={3} aria-hidden="true" />
                      </span>
                      <span>Connected Approach</span>
                    </span>
                  </div>
                </div>

                <div className={styles.secondaryLinkRow}>
                  <Link href="/services" className={styles.btnText}>
                    <span>Explore Our Services &rarr;</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom 3 Stat Cards (Integrated Modern Architecture - Image 3 Model) */}
          <div className={styles.statCardsGrid}>
            {STAT_CARDS.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <article key={idx} className={styles.statCard}>
                  <div className={styles.iconBadge}>
                    <IconComp size={22} aria-hidden="true" />
                  </div>
                  <div className={styles.statContent}>
                    <div className={styles.statNumber}>{item.stat}</div>
                    <div className={styles.statEyebrow}>{item.eyebrow}</div>
                    <p className={styles.statLabel}>{item.label}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
