"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./CustomCursor.module.css";

export function CustomCursor() {
  const [isEnabled, setIsEnabled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isCardHovered, setIsCardHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);

  const mousePos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    // Only enable on desktop devices with fine pointer (mouse/trackpad) and no reduced-motion preference
    if (typeof window === "undefined") return;

    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!finePointer || reducedMotion) {
      return;
    }

    setIsEnabled(true);

    const onMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);

      // Instant inner dot placement for crisp zero-latency response
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };

    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    // Dynamic hover detection for clickable and elevated elements
    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const isInteractive = Boolean(
        target.closest(
          'a, button, [role="button"], input, textarea, select, label, summary, [data-cursor="hover"]'
        )
      );
      const isCard = Boolean(
        !isInteractive &&
          target.closest('article, [class*="Card"], [class*="card"], [data-cursor="card"]')
      );

      setIsHovered(isInteractive);
      setIsCardHovered(isCard);
    };

    // Smooth linear interpolation (lerp) loop for fluid trailing physics
    const LERP_FACTOR = 0.18;
    const updateRing = () => {
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * LERP_FACTOR;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * LERP_FACTOR;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0)`;
      }

      rafId.current = requestAnimationFrame(updateRing);
    };

    rafId.current = requestAnimationFrame(updateRing);

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);
    document.addEventListener("mouseover", onMouseOver, { passive: true });

    return () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("mouseover", onMouseOver);
    };
  }, [isVisible]);

  if (!isEnabled) return null;

  return (
    <div className={styles.cursorContainer} aria-hidden="true">
      <div
        ref={ringRef}
        className={`${styles.cursorRing} ${isHovered ? styles.cursorRingHovered : ""} ${
          isCardHovered ? styles.cursorRingCard : ""
        } ${isClicking ? styles.cursorRingClicking : ""} ${
          isVisible ? styles.cursorVisible : ""
        }`}
      />
      <div
        ref={dotRef}
        className={`${styles.cursorDot} ${isHovered ? styles.cursorDotHovered : ""} ${
          isClicking ? styles.cursorDotClicking : ""
        } ${isVisible ? styles.cursorVisible : ""}`}
      />
    </div>
  );
}
