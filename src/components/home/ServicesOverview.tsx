"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Code2, Network, Sparkles, Target, FileText } from "lucide-react";
import styles from "./ServicesOverview.module.css";

interface ServiceItem {
  id: string;
  number: string;
  tagline: string;
  title: string;
  description: string;
  href: string;
  tags: string[];
}

const SERVICES_LIST: ServiceItem[] = [
  {
    id: "web-development",
    number: "01",
    tagline: "NEXT.JS 14 APP ROUTER // SUB-SECOND LCP",
    title: "Website Development & Web Architecture",
    description:
      "From ultra-fast Next.js web applications to custom CRM integrations, we build the robust technical backbone of your digital presence with strict sub-second performance.",
    href: "/services/web-development",
    tags: ["Next.js App Router", "Sub-Second LCP", "WCAG 2.1 AA"],
  },
  {
    id: "seo",
    number: "02",
    tagline: "SCHEMA ENTITY GRAPH // CRAWL OPTIMIZATION",
    title: "Technical SEO & Schema Entity Modeling",
    description:
      "Enterprise crawl optimization, structured data entity graphs, and search-intent architecture that secure top-tier organic visibility and lower customer acquisition costs.",
    href: "/services/seo",
    tags: ["Schema.org Graphs", "Crawl Budget Engineering", "Topical Authority"],
  },
  {
    id: "social-media",
    number: "03",
    tagline: "BRAND STORYTELLING // MULTI-CHANNEL",
    title: "Social Media Strategy & Brand Narrative",
    description:
      "Strategic narrative building, executive thought leadership, and visual asset production that converts passive attention into qualified business pipeline.",
    href: "/services/social-media-marketing",
    tags: ["Narrative Design", "Brand Authority", "Multi-Channel Distribution"],
  },
  {
    id: "paid-ads",
    number: "04",
    tagline: "PRECISION ROAS // SERVER-SIDE TELEMETRY",
    title: "High-Intent Paid Advertising & Telemetry",
    description:
      "Precision Google Search and Meta Ads campaigns backed by negative keyword clustering, server-side conversion tracking, and rigorous return on ad spend (ROAS).",
    href: "/services/paid-advertising",
    tags: ["Google Ads", "Server-Side Telemetry", "Negative Clustering"],
  },
  {
    id: "content-marketing",
    number: "05",
    tagline: "EDITORIAL AUTHORITY // TOPICAL PILLARS",
    title: "Content Marketing & Editorial Authority",
    description:
      "Search-aligned whitepapers, case studies, and authoritative pillar content designed to educate decision-makers and dominate competitive regional search queries.",
    href: "/services/content-marketing",
    tags: ["Topical Pillars", "B2B Technical Copy", "Lead Magnets"],
  },
];

const SERVICE_ICONS: Record<string, typeof Code2> = {
  "web-development": Code2,
  seo: Network,
  "social-media": Sparkles,
  "paid-ads": Target,
  "content-marketing": FileText,
};

function renderServiceVisual(id: string) {
  switch (id) {
    case "web-development":
      return (
        <svg viewBox="0 0 440 220" className={styles.visualSvg} aria-hidden="true" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="440" height="220" fill="#141413" />
          <path d="M0 40h440M0 80h440M0 120h440M0 160h440M0 200h440M40 0v220M80 0v220M120 0v220M160 0v220M200 0v220M240 0v220M280 0v220M320 0v220M360 0v220M400 0v220" stroke="rgba(249,239,231,0.04)" strokeWidth="1" />
          <rect x="40" y="45" width="360" height="135" rx="12" fill="#1C1C1B" stroke="rgba(249,239,231,0.12)" strokeWidth="1" />
          <circle cx="65" cy="65" r="4" fill="#ef4444" />
          <circle cx="80" cy="65" r="4" fill="#f59e0b" />
          <circle cx="95" cy="65" r="4" fill="#10b981" />
          <text x="120" y="69" fill="rgba(249,239,231,0.4)" fontSize="10" fontFamily="monospace">qubizon-core@2027 ~ next.js app router</text>
          <rect x="65" y="90" width="160" height="6" rx="3" fill="#ef4444" opacity="0.8" />
          <rect x="235" y="90" width="90" height="6" rx="3" fill="rgba(249,239,231,0.2)" />
          <rect x="65" y="108" width="100" height="6" rx="3" fill="#10b981" opacity="0.8" />
          <rect x="175" y="108" width="160" height="6" rx="3" fill="rgba(249,239,231,0.25)" />
          <rect x="65" y="126" width="200" height="6" rx="3" fill="rgba(249,239,231,0.3)" />
          <rect x="65" y="146" width="120" height="20" rx="10" fill="rgba(16,185,129,0.15)" stroke="rgba(16,185,129,0.4)" strokeWidth="1" />
          <text x="75" y="160" fill="#10b981" fontSize="9" fontFamily="monospace" fontWeight="700">LCP 0.68s / 100 CWV</text>
        </svg>
      );
    case "seo":
      return (
        <svg viewBox="0 0 440 220" className={styles.visualSvg} aria-hidden="true" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="440" height="220" fill="#141413" />
          <path d="M0 40h440M0 80h440M0 120h440M0 160h440M0 200h440M40 0v220M80 0v220M120 0v220M160 0v220M200 0v220M240 0v220M280 0v220M320 0v220M360 0v220M400 0v220" stroke="rgba(249,239,231,0.04)" strokeWidth="1" />
          <line x1="220" y1="110" x2="110" y2="70" stroke="rgba(249,239,231,0.25)" strokeWidth="1.5" strokeDasharray="3 3" />
          <line x1="220" y1="110" x2="330" y2="70" stroke="rgba(249,239,231,0.25)" strokeWidth="1.5" strokeDasharray="3 3" />
          <line x1="220" y1="110" x2="130" y2="165" stroke="rgba(249,239,231,0.25)" strokeWidth="1.5" strokeDasharray="3 3" />
          <line x1="220" y1="110" x2="310" y2="165" stroke="rgba(249,239,231,0.25)" strokeWidth="1.5" strokeDasharray="3 3" />
          <circle cx="220" cy="110" r="28" fill="#1C1C1B" stroke="#ef4444" strokeWidth="2" />
          <circle cx="220" cy="110" r="16" fill="rgba(239,68,68,0.2)" />
          <text x="220" y="114" fill="#f9efe7" fontSize="10" fontFamily="monospace" fontWeight="700" textAnchor="middle">ENTITY</text>
          <rect x="70" y="55" width="85" height="26" rx="13" fill="#1C1C1B" stroke="rgba(249,239,231,0.2)" strokeWidth="1" />
          <text x="112" y="72" fill="#f9efe7" fontSize="9" fontFamily="monospace" textAnchor="middle">Schema.org</text>
          <rect x="285" y="55" width="90" height="26" rx="13" fill="#1C1C1B" stroke="rgba(249,239,231,0.2)" strokeWidth="1" />
          <text x="330" y="72" fill="#f9efe7" fontSize="9" fontFamily="monospace" textAnchor="middle">CrawlBudget</text>
          <rect x="90" y="152" width="85" height="26" rx="13" fill="#1C1C1B" stroke="rgba(249,239,231,0.2)" strokeWidth="1" />
          <text x="132" y="169" fill="#f9efe7" fontSize="9" fontFamily="monospace" textAnchor="middle">RankGraph</text>
          <rect x="265" y="152" width="90" height="26" rx="13" fill="#1C1C1B" stroke="rgba(249,239,231,0.2)" strokeWidth="1" />
          <text x="310" y="169" fill="#f9efe7" fontSize="9" fontFamily="monospace" textAnchor="middle">IndexPulse</text>
        </svg>
      );
    case "social-media":
      return (
        <svg viewBox="0 0 440 220" className={styles.visualSvg} aria-hidden="true" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="440" height="220" fill="#141413" />
          <path d="M0 40h440M0 80h440M0 120h440M0 160h440M0 200h440M40 0v220M80 0v220M120 0v220M160 0v220M200 0v220M240 0v220M280 0v220M320 0v220M360 0v220M400 0v220" stroke="rgba(249,239,231,0.04)" strokeWidth="1" />
          <path d="M40 120 Q90 50 140 120 T240 120 T340 120 T400 120" stroke="rgba(249,239,231,0.2)" strokeWidth="1.5" fill="none" />
          <path d="M40 120 Q110 80 180 120 T320 120 T400 120" stroke="#ef4444" strokeWidth="2" fill="none" />
          <path d="M40 120 Q80 150 160 120 T280 120 T400 120" stroke="rgba(249,239,231,0.3)" strokeWidth="1" fill="none" />
          <rect x="160" y="65" width="120" height="34" rx="17" fill="#1C1C1B" stroke="rgba(249,239,231,0.2)" strokeWidth="1" />
          <circle cx="180" cy="82" r="5" fill="#ef4444" />
          <text x="195" y="86" fill="#f9efe7" fontSize="10" fontFamily="monospace" fontWeight="700">STORY ENGINE</text>
          <rect x="70" y="150" width="85" height="24" rx="12" fill="#1C1C1B" stroke="rgba(249,239,231,0.15)" strokeWidth="1" />
          <text x="112" y="166" fill="rgba(249,239,231,0.7)" fontSize="9" fontFamily="monospace" textAnchor="middle">LINKEDIN</text>
          <rect x="178" y="150" width="85" height="24" rx="12" fill="#1C1C1B" stroke="rgba(249,239,231,0.15)" strokeWidth="1" />
          <text x="220" y="166" fill="rgba(249,239,231,0.7)" fontSize="9" fontFamily="monospace" textAnchor="middle">YOUTUBE</text>
          <rect x="285" y="150" width="85" height="24" rx="12" fill="#1C1C1B" stroke="rgba(249,239,231,0.15)" strokeWidth="1" />
          <text x="327" y="166" fill="rgba(249,239,231,0.7)" fontSize="9" fontFamily="monospace" textAnchor="middle">META B2B</text>
        </svg>
      );
    case "paid-ads":
      return (
        <svg viewBox="0 0 540 220" className={styles.visualSvg} aria-hidden="true" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="540" height="220" fill="#141413" />
          <path d="M0 40h540M0 80h540M0 120h540M0 160h540M0 200h540M40 0v220M80 0v220M120 0v220M160 0v220M200 0v220M240 0v220M280 0v220M320 0v220M360 0v220M400 0v220M440 0v220M480 0v220M520 0v220" stroke="rgba(249,239,231,0.04)" strokeWidth="1" />
          <circle cx="270" cy="110" r="75" stroke="rgba(249,239,231,0.1)" strokeWidth="1" />
          <circle cx="270" cy="110" r="50" stroke="rgba(249,239,231,0.15)" strokeWidth="1" />
          <circle cx="270" cy="110" r="24" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="3 3" />
          <line x1="270" y1="35" x2="270" y2="185" stroke="rgba(249,239,231,0.12)" strokeWidth="1" />
          <line x1="195" y1="110" x2="345" y2="110" stroke="rgba(249,239,231,0.12)" strokeWidth="1" />
          <rect x="60" y="80" width="125" height="60" rx="10" fill="#1C1C1B" stroke="rgba(249,239,231,0.15)" strokeWidth="1" />
          <text x="75" y="102" fill="rgba(249,239,231,0.4)" fontSize="9" fontFamily="monospace">BLENDED ROAS</text>
          <text x="75" y="126" fill="#10b981" fontSize="16" fontFamily="monospace" fontWeight="800">4.82x</text>
          <rect x="355" y="80" width="125" height="60" rx="10" fill="#1C1C1B" stroke="rgba(249,239,231,0.15)" strokeWidth="1" />
          <text x="370" y="102" fill="rgba(249,239,231,0.4)" fontSize="9" fontFamily="monospace">NEGATIVE CLUSTERS</text>
          <text x="370" y="126" fill="#f9efe7" fontSize="16" fontFamily="monospace" fontWeight="800">100% CLEAN</text>
        </svg>
      );
    case "content-marketing":
      return (
        <svg viewBox="0 0 540 220" className={styles.visualSvg} aria-hidden="true" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="540" height="220" fill="#141413" />
          <path d="M0 40h540M0 80h540M0 120h540M0 160h540M0 200h540M40 0v220M80 0v220M120 0v220M160 0v220M200 0v220M240 0v220M280 0v220M320 0v220M360 0v220M400 0v220M440 0v220M480 0v220M520 0v220" stroke="rgba(249,239,231,0.04)" strokeWidth="1" />
          <rect x="80" y="50" width="380" height="120" rx="12" fill="#1C1C1B" stroke="rgba(249,239,231,0.15)" strokeWidth="1" />
          <rect x="100" y="70" width="110" height="12" rx="3" fill="#ef4444" opacity="0.85" />
          <rect x="100" y="90" width="190" height="6" rx="3" fill="rgba(249,239,231,0.4)" />
          <rect x="100" y="102" width="150" height="6" rx="3" fill="rgba(249,239,231,0.25)" />
          <rect x="100" y="114" width="170" height="6" rx="3" fill="rgba(249,239,231,0.25)" />
          <rect x="100" y="135" width="95" height="18" rx="9" fill="rgba(239,68,68,0.15)" stroke="rgba(239,68,68,0.4)" strokeWidth="1" />
          <text x="108" y="148" fill="#ef4444" fontSize="9" fontFamily="monospace" fontWeight="700">TOPICAL PILLAR</text>
          <rect x="320" y="70" width="125" height="24" rx="6" fill="rgba(249,239,231,0.08)" stroke="rgba(249,239,231,0.15)" strokeWidth="1" />
          <text x="332" y="86" fill="#f9efe7" fontSize="9" fontFamily="monospace">Cluster Magnet</text>
          <rect x="320" y="102" width="125" height="24" rx="6" fill="rgba(249,239,231,0.08)" stroke="rgba(249,239,231,0.15)" strokeWidth="1" />
          <text x="332" y="118" fill="#f9efe7" fontSize="9" fontFamily="monospace">B2B Whitepaper</text>
          <rect x="320" y="134" width="125" height="24" rx="6" fill="rgba(249,239,231,0.08)" stroke="rgba(249,239,231,0.15)" strokeWidth="1" />
          <text x="332" y="150" fill="#f9efe7" fontSize="9" fontFamily="monospace">Entity Authority</text>
        </svg>
      );
    default:
      return null;
  }
}

export function ServicesOverview() {
  return (
    <section className={styles.servicesSection} id="services" aria-labelledby="services-heading">
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <p className={styles.sectionBadge}>• QUBIZON DIGITAL DISCIPLINES /</p>
          <div className={styles.titleRow}>
            <h2 id="services-heading" className={styles.headingLarge}>
              Engineered digital systems that drive{" "}
              <span className="calligraphy">defensible growth</span>.
            </h2>
            <p className={styles.lead}>
              Comprehensive digital capabilities engineered to elevate your brand, streamline customer acquisition,
              and establish unquestioned market leadership across Kerala and beyond.
            </p>
          </div>
        </div>

        {/* 2027 Futuristic Multi-Card Grid (Image Model Architecture) */}
        <div className={styles.servicesGrid}>
          {SERVICES_LIST.map((service) => {
            const IconComp = SERVICE_ICONS[service.id] || Code2;
            return (
              <Link
                key={service.id}
                href={service.href}
                className={`${styles.serviceCard} ${styles[`card_${service.id}`] || ""}`}
                aria-label={`Explore ${service.title}`}
              >
                {/* Top Visual Banner Frame (Reference Image Model) */}
                <div className={styles.cardVisualWrap}>
                  <div className={styles.floatingTag}>
                    <span className={styles.pulseDot} />
                    <span>{`${service.number} // ${service.tagline}`}</span>
                  </div>
                  {renderServiceVisual(service.id)}
                </div>

                {/* Card Body: Title, Icon Badge, Description, Tags, Action */}
                <div className={styles.cardBody}>
                  <div className={styles.titleRowCard}>
                    <h3 className={styles.serviceTitle}>{service.title}</h3>
                    <div className={styles.iconCircleBadge} aria-hidden="true">
                      <IconComp size={20} />
                    </div>
                  </div>

                  <p className={styles.serviceDesc}>{service.description}</p>

                  <div className={styles.tagGroup}>
                    {service.tags.map((tag, idx) => (
                      <span key={idx} className={styles.serviceTag}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className={styles.cardActionRow}>
                    <span className={styles.btnExplore}>
                      <span>Explore Details</span>
                      <ArrowRight size={13} className={styles.arrowIcon} aria-hidden="true" />
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Mission & Vision Section + Wide Visual Banner (Reference Model Architecture) */}
        <div className={styles.visionMissionSection}>
          <div className={styles.visionMissionHeader}>
            <span className={styles.visionMissionBadge}>• ORGANIZATIONAL PURPOSE &amp; COMMITMENT /</span>
            <h2 className={styles.visionMissionTitle}>
              Engineering digital platforms with <span className="calligraphy">unwavering purpose</span>.
            </h2>
          </div>

          <div className={styles.visionMissionGrid}>
            {/* Our Vision Card (Reference Model) */}
            <article className={styles.visionMissionCard}>
              <h3 className={styles.cardHead}>Our Vision</h3>
              <div className={styles.cardParagraphs}>
                <p className={styles.cardParagraph}>
                  To establish an unquestioned benchmark for enterprise digital engineering where technical precision, crawl architecture, and commercial storytelling operate as a unified discipline rather than isolated agency silos.
                </p>
                <p className={styles.cardParagraph}>
                  To empower ambitious regional and international enterprises across Kerala, the UAE, and global commercial corridors with high-velocity Next.js web systems, authoritative search indexation, and measurable customer pipeline.
                </p>
              </div>
              <Link href="/about" className={styles.cardLearnMore}>
                <span>Learn more</span>
                <ArrowRight size={13} aria-hidden="true" />
              </Link>
            </article>

            {/* Our Mission Card (Reference Model) */}
            <article className={styles.visionMissionCard}>
              <h3 className={styles.cardHead}>Our Mission</h3>
              <div className={styles.cardParagraphs}>
                <p className={styles.cardParagraph}>
                  To eliminate agency fragmentation and wasted marketing capital by pairing world-class React Server Component engineering with server-side ad telemetry, bespoke CRM pipelines, and search-intent content authority.
                </p>
                <p className={styles.cardParagraph}>
                  Alongside commercial scale, Qubizon guarantees 100% client intellectual property ownership, zero vendor lock-in, and strict WCAG 2.1 AA accessibility standards across every digital asset we deploy.
                </p>
              </div>
              <Link href="/services" className={styles.cardLearnMore}>
                <span>Learn more</span>
                <ArrowRight size={13} aria-hidden="true" />
              </Link>
            </article>
          </div>

          {/* Wide Photographic Banner Frame (Matching Reference Model) */}
          <div className={styles.wideVisualBanner}>
            <div className={styles.bannerFloatingBadge}>
              <span className={styles.pulseDot} />
              <span>UNIFIED AGENCY COLLECTIVE / ARCHITECTURE &bull; SEO &bull; GROWTH &bull; KERALA &amp; GCC</span>
            </div>
            <Image
              src="/hero-collaboration.jpg"
              alt="Qubizon unified digital agency engineering and strategic leadership collaboration in Kerala and the UAE"
              fill
              sizes="(max-width: 1200px) 100vw, 1560px"
              className={styles.wideBannerImage}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
