"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Code2,
  Search,
  Share2,
  Target,
  FileText,
  BarChart3,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import styles from "./InteractiveCube.module.css";

interface CubeDiscipline {
  id: string;
  title: string;
  shortTag: string;
  faceClass: string;
  rotation: string;
  icon: typeof Code2;
  description: string;
  href: string;
  isSupporting?: boolean;
  deliverables: string[];
}

const DISCIPLINES: CubeDiscipline[] = [
  {
    id: "web-dev",
    title: "Website Development",
    shortTag: "Web Architecture",
    faceClass: styles.faceFront,
    rotation: "rotateX(-14deg) rotateY(-20deg)",
    icon: Code2,
    description: "Engineered for speed, accessibility, and measurable conversions using modern Next.js and resilient component systems.",
    href: "/services/web-development",
    deliverables: ["Custom Next.js App Router Architecture", "Sub-second LCP & Zero CLS Performance", "WCAG 2.1 AA Accessible Interfaces"],
  },
  {
    id: "seo",
    title: "Search Engine Optimization",
    shortTag: "Organic Search",
    faceClass: styles.faceTop,
    rotation: "rotateX(-80deg) rotateY(-20deg)",
    icon: Search,
    description: "Technical crawl optimization, structured data schemas, and search-intent architecture built for sustainable rankings.",
    href: "/services/seo",
    deliverables: ["Technical Crawl & Indexation Engineering", "Schema.org Structured Data Modeling", "Search-Intent Keyword Clustering"],
  },
  {
    id: "social-media",
    title: "Social Media Marketing",
    shortTag: "Social Growth",
    faceClass: styles.faceRight,
    rotation: "rotateX(-14deg) rotateY(-110deg)",
    icon: Share2,
    description: "Consistent multi-channel presence, community engagement, and brand storytelling that builds genuine market authority.",
    href: "/services/social-media-marketing",
    deliverables: ["Channel Strategy & Editorial Calendars", "Organic Community Engagement", "Consistent Brand Positioning"],
  },
  {
    id: "paid-ads",
    title: "Paid Advertising",
    shortTag: "Performance Ads",
    faceClass: styles.faceLeft,
    rotation: "rotateX(-14deg) rotateY(70deg)",
    icon: Target,
    description: "High-intent paid search and social campaigns optimized for customer acquisition cost and quantifiable return on ad spend.",
    href: "/services/paid-advertising",
    deliverables: ["High-Intent Search & Display PPC", "Retargeting & Audience Segmentation", "Strict Cost-Per-Acquisition Optimization"],
  },
  {
    id: "content",
    title: "Content Marketing",
    shortTag: "Authority Content",
    faceClass: styles.faceBack,
    rotation: "rotateX(-14deg) rotateY(-200deg)",
    icon: FileText,
    description: "High-value editorial, thought leadership, and search-aligned content assets that convert technical buyers.",
    href: "/services/content-marketing",
    deliverables: ["Topical Authority Pillar Strategies", "B2B Editorial & Technical Copywriting", "High-Converting Lead Magnet Assets"],
  },
  {
    id: "analytics",
    title: "Data Intelligence & Analytics",
    shortTag: "Foundation",
    faceClass: styles.faceBottom,
    rotation: "rotateX(60deg) rotateY(-20deg)",
    icon: BarChart3,
    description: "Supporting telemetry and analytics infrastructure underpinning all 5 core disciplines to track pipeline attribution accurately.",
    href: "/services",
    isSupporting: true,
    deliverables: ["Conversion Funnel Telemetry", "Event & Behavioral Tracking", "Cross-Channel Pipeline Attribution"],
  },
];

export function InteractiveCube() {
  const [selectedId, setSelectedId] = useState<string>("web-dev");
  const activeDiscipline = DISCIPLINES.find((d) => d.id === selectedId) || DISCIPLINES[0];

  const handleTabKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>, currentIndex: number) => {
    let targetIndex = -1;
    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      targetIndex = (currentIndex + 1) % DISCIPLINES.length;
    } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      targetIndex = (currentIndex - 1 + DISCIPLINES.length) % DISCIPLINES.length;
    } else if (e.key === "Home") {
      targetIndex = 0;
    } else if (e.key === "End") {
      targetIndex = DISCIPLINES.length - 1;
    }

    if (targetIndex >= 0) {
      e.preventDefault();
      const targetDiscipline = DISCIPLINES[targetIndex];
      setSelectedId(targetDiscipline.id);
      const targetButton = document.getElementById(`tab-${targetDiscipline.id}`);
      targetButton?.focus();
    }
  };

  return (
    <div className={styles.cubeWrapper}>
      {/* Interactive Selector Controls */}
      <div className={styles.controls} role="tablist" aria-label="Qubizon Service Cube Disciplines">
        {DISCIPLINES.map((d, idx) => {
          const isActive = d.id === selectedId;
          return (
            <button
              key={d.id}
              id={`tab-${d.id}`}
              role="tab"
              aria-selected={isActive}
              aria-controls={`tabpanel-${d.id}`}
              tabIndex={isActive ? 0 : -1}
              className={styles.controlButton}
              onClick={() => setSelectedId(d.id)}
              onKeyDown={(e) => handleTabKeyDown(e, idx)}
            >
              {d.shortTag} {d.isSupporting ? "(Enabler)" : ""}
            </button>
          );
        })}
      </div>

      <div className={styles.interactiveStage}>
        {/* 3D Visual Cube Scene (Decorative visual counterpart to the accessible detail card) */}
        <div className={styles.scene} aria-hidden="true">
          <div
            className={styles.cube}
            style={{ transform: activeDiscipline.rotation }}
          >
            {DISCIPLINES.map((d) => {
              const Icon = d.icon;
              const isActive = d.id === selectedId;
              return (
                <div
                  key={d.id}
                  className={`${styles.cubeFace} ${d.faceClass} ${isActive ? styles.faceActive : ""}`}
                >
                  <span className={styles.faceBadge}>
                    {d.isSupporting ? "Enabling Capability" : "Core Discipline"}
                  </span>
                  <div>
                    <Icon className={styles.faceIcon} />
                    <h3 className={styles.faceTitle}>{d.title}</h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Semantic Accessible Detail Card */}
        <div
          role="tabpanel"
          id={`tabpanel-${activeDiscipline.id}`}
          aria-labelledby={`tab-${activeDiscipline.id}`}
          tabIndex={0}
          className={styles.detailCard}
        >
          <div className={styles.detailBadge}>
            <activeDiscipline.icon size={18} />
            <span>{activeDiscipline.isSupporting ? "Supporting Foundation" : "Core Agency Discipline"}</span>
          </div>

          <h2 className={styles.detailTitle}>{activeDiscipline.title}</h2>
          <p className={styles.detailDescription}>{activeDiscipline.description}</p>

          <ul className={styles.deliverablesList} aria-label={`Deliverables for ${activeDiscipline.title}`}>
            {activeDiscipline.deliverables.map((item, idx) => (
              <li key={idx} className={styles.deliverableItem}>
                <CheckCircle2 size={16} className={styles.checkIcon} aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <Link href={activeDiscipline.href} className={styles.serviceLink}>
            <span>Explore {activeDiscipline.title}</span>
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </div>
  );
}
