"use client";

import { useEffect } from "react";

/**
 * Pro-Level Lightweight Scroll Reveal Observer
 * Uses native IntersectionObserver to animate content into view as users scroll.
 * 100% SEO-safe: content is visible by default; reveal classes are applied progressively.
 * Respects prefers-reduced-motion.
 */
export function ScrollObserver() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Honor reduced-motion preferences
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            // Unobserve after revealing for zero ongoing CPU overhead
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    // Progressive enhancement: query high-impact structural blocks
    const selector = [
      "[data-reveal]",
      ".reveal-card",
      "main > section",
      ".heroStatsGrid",
      ".expectationsGrid",
      ".valuesGrid",
      ".outcomesGrid",
      ".statsStrip",
    ].join(", ");

    const elements = document.querySelectorAll<HTMLElement>(selector);

    elements.forEach((el, index) => {
      // Avoid hiding top hero section
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.75) {
        el.classList.add("is-revealed");
        return;
      }

      el.classList.add("reveal-init");
      // Add staggered delay to child cards if within a grid
      if (el.parentElement?.classList.contains("expectationsGrid") ||
          el.parentElement?.classList.contains("outcomesGrid") ||
          el.parentElement?.classList.contains("valuesGrid")) {
        el.style.transitionDelay = `${(index % 4) * 90}ms`;
      }
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return null;
}
