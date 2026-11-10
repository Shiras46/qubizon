"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Code2, Network, Sparkles, Target, Palette, Users, Cpu } from "lucide-react";
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
    id: "digital-marketing",
    number: "01",
    tagline: "STRATEGIC CAMPAIGNS // BRAND AWARENESS",
    title: "Digital Marketing",
    description:
      "Reach your audience with strategic digital campaigns designed to improve brand awareness, attract potential customers, and support business growth.",
    href: "/services/paid-advertising",
    tags: ["Digital Campaigns", "Brand Awareness", "Audience Growth"],
  },
  {
    id: "web-development",
    number: "02",
    tagline: "RESPONSIVE WEBSITES // ALL DEVICES",
    title: "Web Development",
    description:
      "We build responsive, user-friendly websites that present your business professionally and work smoothly across desktop, tablet, and mobile devices.",
    href: "/services/web-development",
    tags: ["Responsive Design", "Modern Architecture", "Mobile-Optimized"],
  },
  {
    id: "graphic-design",
    number: "03",
    tagline: "MEMORABLE BRANDING // DIGITAL & PRINT",
    title: "Graphic Design",
    description:
      "Make your brand memorable with professional design for logos, social media graphics, marketing materials, and other digital or print assets. We create designs that reflect your identity and communicate your message clearly.",
    href: "/services/content-marketing",
    tags: ["Logo Design", "Marketing Materials", "Brand Identity"],
  },
  {
    id: "seo",
    number: "04",
    tagline: "SEARCH VISIBILITY // RELEVANT TERMS",
    title: "Search Engine Optimization (SEO)",
    description:
      "Improve your website’s visibility in search results. Our SEO services help strengthen your site, target relevant search terms, and make it easier for potential customers to find your business.",
    href: "/services/seo",
    tags: ["Search Visibility", "Keyword Targeting", "On-Page SEO"],
  },
  {
    id: "social-media",
    number: "05",
    tagline: "COMMUNITY ENGAGEMENT // CONTENT PLANNING",
    title: "Social Media Marketing (SMM)",
    description:
      "Build your online community and keep your brand active on social media. We support your business with content planning, creative posts, audience engagement, and campaign management.",
    href: "/services/social-media-marketing",
    tags: ["Content Planning", "Audience Engagement", "Campaign Management"],
  },
  {
    id: "crm",
    number: "06",
    tagline: "LEAD TRACKING // CUSTOMER MANAGEMENT",
    title: "CRM Solutions",
    description:
      "Organize customer information and manage your sales process more effectively. We help businesses make better use of CRM tools for lead tracking, follow-ups, and customer relationship management.",
    href: "/services/crm",
    tags: ["Lead Tracking", "Sales Follow-ups", "Customer Relationships"],
  },
  {
    id: "custom-software",
    number: "07",
    tagline: "PRACTICAL TOOLS // WORKFLOW AUTOMATION",
    title: "Custom Software Solutions",
    description:
      "Simplify your operations with software designed around your business needs. We help plan and develop practical digital tools that support your workflows and objectives.",
    href: "/solutions",
    tags: ["Workflow Automation", "Tailored Tools", "Business Software"],
  },
];

const SERVICE_ICONS: Record<string, typeof Code2> = {
  "digital-marketing": Target,
  "web-development": Code2,
  "graphic-design": Palette,
  seo: Network,
  "social-media": Sparkles,
  crm: Users,
  "custom-software": Cpu,
};

function renderServiceVisual(id: string) {
  switch (id) {
    case "digital-marketing":
      return (
        <svg viewBox="0 0 440 220" className={styles.visualSvg} aria-hidden="true" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="440" height="220" fill="#141413" />
          <path d="M0 40h440M0 80h440M0 120h440M0 160h440M0 200h440M40 0v220M80 0v220M120 0v220M160 0v220M200 0v220M240 0v220M280 0v220M320 0v220M360 0v220M400 0v220" stroke="rgba(249,239,231,0.04)" strokeWidth="1" />
          <circle cx="220" cy="110" r="60" stroke="rgba(255,190,11,0.3)" strokeWidth="1.5" strokeDasharray="4 4" />
          <circle cx="220" cy="110" r="32" fill="rgba(0,72,142,0.3)" stroke="#00488E" strokeWidth="2" />
          <text x="220" y="114" fill="#FFFFFF" fontSize="10" fontFamily="monospace" fontWeight="700" textAnchor="middle">CAMPAIGN</text>
          <rect x="50" y="75" width="110" height="42" rx="10" fill="#1C1C1B" stroke="rgba(249,239,231,0.15)" strokeWidth="1" />
          <text x="65" y="94" fill="rgba(249,239,231,0.5)" fontSize="9" fontFamily="monospace">REACH GROWTH</text>
          <text x="65" y="109" fill="#22c55e" fontSize="13" fontFamily="monospace" fontWeight="800">+184%</text>
          <rect x="280" y="75" width="110" height="42" rx="10" fill="#1C1C1B" stroke="rgba(249,239,231,0.15)" strokeWidth="1" />
          <text x="295" y="94" fill="rgba(249,239,231,0.5)" fontSize="9" fontFamily="monospace">AWARENESS</text>
          <text x="295" y="109" fill="#FFBE0B" fontSize="13" fontFamily="monospace" fontWeight="800">OPTIMIZED</text>
        </svg>
      );
    case "web-development":
      return (
        <svg viewBox="0 0 440 220" className={styles.visualSvg} aria-hidden="true" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="440" height="220" fill="#141413" />
          <path d="M0 40h440M0 80h440M0 120h440M0 160h440M0 200h440M40 0v220M80 0v220M120 0v220M160 0v220M200 0v220M240 0v220M280 0v220M320 0v220M360 0v220M400 0v220" stroke="rgba(249,239,231,0.04)" strokeWidth="1" />
          <rect x="40" y="45" width="360" height="135" rx="12" fill="#1C1C1B" stroke="rgba(249,239,231,0.12)" strokeWidth="1" />
          <circle cx="65" cy="65" r="4" fill="#ef4444" />
          <circle cx="80" cy="65" r="4" fill="#f59e0b" />
          <circle cx="95" cy="65" r="4" fill="#10b981" />
          <text x="120" y="69" fill="rgba(249,239,231,0.4)" fontSize="10" fontFamily="monospace">qubizon-web ~ responsive architecture</text>
          <rect x="65" y="90" width="160" height="6" rx="3" fill="#00488E" />
          <rect x="235" y="90" width="90" height="6" rx="3" fill="rgba(249,239,231,0.2)" />
          <rect x="65" y="108" width="100" height="6" rx="3" fill="#10b981" />
          <rect x="175" y="108" width="160" height="6" rx="3" fill="rgba(249,239,231,0.25)" />
          <rect x="65" y="146" width="140" height="20" rx="10" fill="rgba(16,185,129,0.15)" stroke="rgba(16,185,129,0.4)" strokeWidth="1" />
          <text x="75" y="160" fill="#10b981" fontSize="9" fontFamily="monospace" fontWeight="700">DESKTOP • TABLET • MOBILE</text>
        </svg>
      );
    case "graphic-design":
      return (
        <svg viewBox="0 0 440 220" className={styles.visualSvg} aria-hidden="true" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="440" height="220" fill="#141413" />
          <path d="M0 40h440M0 80h440M0 120h440M0 160h440M0 200h440M40 0v220M80 0v220M120 0v220M160 0v220M200 0v220M240 0v220M280 0v220M320 0v220M360 0v220M400 0v220" stroke="rgba(249,239,231,0.04)" strokeWidth="1" />
          <rect x="60" y="55" width="120" height="110" rx="14" fill="#1C1C1B" stroke="rgba(255,190,11,0.4)" strokeWidth="1.5" />
          <circle cx="120" cy="100" r="24" fill="rgba(255,190,11,0.15)" />
          <text x="120" y="145" fill="#f9efe7" fontSize="9" fontFamily="monospace" textAnchor="middle">LOGO &amp; IDENTITY</text>
          <rect x="220" y="55" width="160" height="48" rx="10" fill="#1C1C1B" stroke="rgba(249,239,231,0.15)" strokeWidth="1" />
          <text x="235" y="83" fill="#f9efe7" fontSize="10" fontFamily="monospace" fontWeight="700">MARKETING ASSETS</text>
          <rect x="220" y="117" width="160" height="48" rx="10" fill="#1C1C1B" stroke="rgba(0,72,142,0.4)" strokeWidth="1" />
          <text x="235" y="145" fill="#00488E" fontSize="10" fontFamily="monospace" fontWeight="700">PRINT &amp; DIGITAL</text>
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
          <circle cx="220" cy="110" r="28" fill="#1C1C1B" stroke="#00488E" strokeWidth="2" />
          <circle cx="220" cy="110" r="16" fill="rgba(0,72,142,0.2)" />
          <text x="220" y="114" fill="#f9efe7" fontSize="10" fontFamily="monospace" fontWeight="700" textAnchor="middle">SEO RANK</text>
          <rect x="70" y="55" width="85" height="26" rx="13" fill="#1C1C1B" stroke="rgba(249,239,231,0.2)" strokeWidth="1" />
          <text x="112" y="72" fill="#f9efe7" fontSize="9" fontFamily="monospace" textAnchor="middle">Keywords</text>
          <rect x="285" y="55" width="90" height="26" rx="13" fill="#1C1C1B" stroke="rgba(249,239,231,0.2)" strokeWidth="1" />
          <text x="330" y="72" fill="#f9efe7" fontSize="9" fontFamily="monospace" textAnchor="middle">Visibility</text>
          <rect x="90" y="152" width="85" height="26" rx="13" fill="#1C1C1B" stroke="rgba(249,239,231,0.2)" strokeWidth="1" />
          <text x="132" y="169" fill="#f9efe7" fontSize="9" fontFamily="monospace" textAnchor="middle">On-Page</text>
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
          <path d="M40 120 Q110 80 180 120 T320 120 T400 120" stroke="#FFBE0B" strokeWidth="2" fill="none" />
          <rect x="150" y="65" width="140" height="34" rx="17" fill="#1C1C1B" stroke="rgba(249,239,231,0.2)" strokeWidth="1" />
          <circle cx="170" cy="82" r="5" fill="#FFBE0B" />
          <text x="185" y="86" fill="#f9efe7" fontSize="10" fontFamily="monospace" fontWeight="700">COMMUNITY SMM</text>
          <rect x="70" y="150" width="85" height="24" rx="12" fill="#1C1C1B" stroke="rgba(249,239,231,0.15)" strokeWidth="1" />
          <text x="112" y="166" fill="rgba(249,239,231,0.7)" fontSize="9" fontFamily="monospace" textAnchor="middle">CONTENT</text>
          <rect x="178" y="150" width="85" height="24" rx="12" fill="#1C1C1B" stroke="rgba(249,239,231,0.15)" strokeWidth="1" />
          <text x="220" y="166" fill="rgba(249,239,231,0.7)" fontSize="9" fontFamily="monospace" textAnchor="middle">ENGAGE</text>
          <rect x="285" y="150" width="85" height="24" rx="12" fill="#1C1C1B" stroke="rgba(249,239,231,0.15)" strokeWidth="1" />
          <text x="327" y="166" fill="rgba(249,239,231,0.7)" fontSize="9" fontFamily="monospace" textAnchor="middle">CAMPAIGN</text>
        </svg>
      );
    case "crm":
      return (
        <svg viewBox="0 0 440 220" className={styles.visualSvg} aria-hidden="true" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="440" height="220" fill="#141413" />
          <path d="M0 40h440M0 80h440M0 120h440M0 160h440M0 200h440M40 0v220M80 0v220M120 0v220M160 0v220M200 0v220M240 0v220M280 0v220M320 0v220M360 0v220M400 0v220" stroke="rgba(249,239,231,0.04)" strokeWidth="1" />
          <rect x="60" y="50" width="320" height="120" rx="12" fill="#1C1C1B" stroke="rgba(249,239,231,0.15)" strokeWidth="1" />
          <rect x="80" y="70" width="100" height="22" rx="6" fill="#00488E" />
          <text x="130" y="85" fill="#FFFFFF" fontSize="9" fontFamily="monospace" fontWeight="700" textAnchor="middle">LEAD PIPELINE</text>
          <rect x="200" y="70" width="80" height="22" rx="6" fill="rgba(249,239,231,0.1)" />
          <text x="240" y="85" fill="#f9efe7" fontSize="9" fontFamily="monospace" textAnchor="middle">FOLLOW-UP</text>
          <rect x="80" y="105" width="280" height="8" rx="4" fill="rgba(249,239,231,0.2)" />
          <rect x="80" y="125" width="200" height="8" rx="4" fill="rgba(249,239,231,0.15)" />
          <rect x="80" y="145" width="120" height="16" rx="8" fill="rgba(16,185,129,0.2)" />
          <text x="140" y="157" fill="#10b981" fontSize="8" fontFamily="monospace" textAnchor="middle">ACTIVE CRM SYNC</text>
        </svg>
      );
    case "custom-software":
      return (
        <svg viewBox="0 0 440 220" className={styles.visualSvg} aria-hidden="true" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="440" height="220" fill="#141413" />
          <path d="M0 40h440M0 80h440M0 120h440M0 160h440M0 200h440M40 0v220M80 0v220M120 0v220M160 0v220M200 0v220M240 0v220M280 0v220M320 0v220M360 0v220M400 0v220" stroke="rgba(249,239,231,0.04)" strokeWidth="1" />
          <rect x="50" y="50" width="160" height="120" rx="12" fill="#1C1C1B" stroke="rgba(249,239,231,0.15)" strokeWidth="1" />
          <text x="70" y="75" fill="#00488E" fontSize="10" fontFamily="monospace" fontWeight="700">WORKFLOW API</text>
          <rect x="70" y="90" width="120" height="6" rx="3" fill="rgba(249,239,231,0.3)" />
          <rect x="70" y="105" width="90" height="6" rx="3" fill="rgba(249,239,231,0.2)" />
          <rect x="70" y="125" width="100" height="20" rx="6" fill="rgba(0,72,142,0.2)" stroke="#00488E" strokeWidth="1" />
          <text x="120" y="139" fill="#00488E" fontSize="9" fontFamily="monospace" textAnchor="middle">EXECUTE</text>
          <rect x="230" y="50" width="160" height="120" rx="12" fill="#1C1C1B" stroke="rgba(249,239,231,0.15)" strokeWidth="1" />
          <text x="250" y="75" fill="#FFBE0B" fontSize="10" fontFamily="monospace" fontWeight="700">CUSTOM MODULE</text>
          <rect x="250" y="90" width="120" height="6" rx="3" fill="rgba(249,239,231,0.3)" />
          <rect x="250" y="105" width="100" height="6" rx="3" fill="rgba(249,239,231,0.2)" />
          <rect x="250" y="125" width="110" height="20" rx="6" fill="rgba(255,190,11,0.2)" stroke="#FFBE0B" strokeWidth="1" />
          <text x="305" y="139" fill="#FFBE0B" fontSize="9" fontFamily="monospace" textAnchor="middle">AUTOMATED</text>
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
          <p className={styles.sectionBadge}>• OUR SERVICES /</p>
          <div className={styles.titleRow}>
            <h2 id="services-heading" className={styles.headingLarge}>
              Comprehensive Services Built to Move Your Business{" "}
              <span className="calligraphy">Forward</span>.
            </h2>
            <p className={styles.lead}>
              From digital marketing and web development to graphic design, SEO, social media, CRM, and custom software, we bring the tools and expertise to help your business move forward.
            </p>
          </div>
        </div>

        {/* 7-Card Grid Architecture */}
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
                {/* Top Visual Banner Frame */}
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

        {/* Mission & Vision Section + Wide Visual Banner */}
        <div className={styles.visionMissionSection}>
          <div className={styles.visionMissionHeader}>
            <span className={styles.visionMissionBadge}>• OUR MISSION &amp; VISION /</span>
            <h2 className={styles.visionMissionTitle}>
              Empowering businesses with <span className="calligraphy">effective digital solutions</span>.
            </h2>
          </div>

          <div className={styles.visionMissionGrid}>
            {/* Our Mission Card */}
            <article className={styles.visionMissionCard}>
              <h3 className={styles.cardHead}>Our Mission</h3>
              <div className={styles.cardParagraphs}>
                <p className={styles.cardParagraph}>
                  Our mission is to empower businesses with effective digital solutions that support growth, improve customer connections, and simplify everyday operations.
                </p>
                <p className={styles.cardParagraph}>
                  We aim to deliver thoughtful service, dependable technology, and work tailored to each client’s goals.
                </p>
              </div>
              <Link href="/about" className={styles.cardLearnMore}>
                <span>Learn more</span>
                <ArrowRight size={13} aria-hidden="true" />
              </Link>
            </article>

            {/* Our Vision Card */}
            <article className={styles.visionMissionCard}>
              <h3 className={styles.cardHead}>Our Vision</h3>
              <div className={styles.cardParagraphs}>
                <p className={styles.cardParagraph}>
                  Our vision is to become a trusted digital partner for businesses seeking to grow and succeed in an ever-changing online world.
                </p>
                <p className={styles.cardParagraph}>
                  We strive to make digital tools and strategies more accessible, useful, and impactful for every business we serve.
                </p>
              </div>
              <Link href="/services" className={styles.cardLearnMore}>
                <span>Learn more</span>
                <ArrowRight size={13} aria-hidden="true" />
              </Link>
            </article>
          </div>

          {/* Wide Photographic Banner Frame */}
          <div className={styles.wideVisualBanner}>
            <div className={styles.bannerFloatingBadge}>
              <span className={styles.pulseDot} />
              <span>DIGITAL SERVICES &bull; WEB &bull; DESIGN &bull; SEO &bull; SMM &bull; CRM &bull; SOFTWARE</span>
            </div>
            <Image
              src="/hero-collaboration.jpg"
              alt="Qubizon Digital Solutions team collaboration"
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
