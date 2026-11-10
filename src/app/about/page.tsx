import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ChevronRight,
  CheckCircle2,
  XCircle,
  ShieldCheck,
  Layers,
  Cpu,
  TrendingUp,
  Box,
  Check,
  Users,
  Code2,
  Network,
  Sparkles,
  Target,
  FileText,
} from "lucide-react";
import { constructMetadata } from "@/lib/metadata";
import { SITE_CONFIG, CORE_SERVICES } from "@/lib/constants";
import styles from "@/components/about/AboutPage.module.css";

export const metadata: Metadata = constructMetadata({
  title: "About Our Unified Agency Model",
  description:
    "Discover Qubizon Digital Solutions: an integrated digital agency unifying Next.js web development, technical SEO, social media, paid ads, and content marketing under one disciplined team.",
  path: "/about",
});

const PRINCIPLES = [
  {
    icon: ShieldCheck,
    title: "Single Accountability",
    description:
      "One team owns your technical architecture, organic search, creative assets, and advertising funnels. No multi-vendor finger-pointing.",
  },
  {
    icon: Cpu,
    title: "100% Client Ownership",
    description:
      "All code repositories, ad accounts, analytics properties, and content assets belong fully to you. Zero proprietary lock-in.",
  },
  {
    icon: TrendingUp,
    title: "Verifiable Benchmarks",
    description:
      "We measure performance with Core Web Vitals targets, clean conversion tracking, and qualified pipeline growth—never vanity metrics.",
  },
  {
    icon: Layers,
    title: "Engineering Discipline",
    description:
      "We apply rigorous software engineering standards to digital marketing: strict type safety, accessibility compliance, and structured data.",
  },
];

const ENGAGEMENT_STEPS = [
  {
    number: "01",
    phase: "Phase 1: Diagnostics",
    title: "Technical & Market Audit",
    description:
      "We inspect your current codebase, Core Web Vitals, organic search footprint, ad spend efficiency, and content assets to identify exact friction points and growth bottlenecks.",
  },
  {
    number: "02",
    phase: "Phase 2: Strategy",
    title: "Unified Architecture Blueprint",
    description:
      "We design a synchronized roadmap connecting your web infrastructure, search-intent silos, ad acquisition funnels, and editorial distribution into one coherent action plan.",
  },
  {
    number: "03",
    phase: "Phase 3: Execution",
    title: "Disciplined Sprint Rollout",
    description:
      "Our cross-functional practitioners execute in synchronized bi-weekly sprints—shipping clean Next.js code, semantic schema, conversion-focused copy, and optimized campaigns.",
  },
  {
    number: "04",
    phase: "Phase 4: Optimization",
    title: "Measurement & Continuous Refinement",
    description:
      "We monitor real user metrics, crawl health, conversion rates, and acquisition costs, systematically refining campaigns and codebases based on verifiable empirical data.",
  },
];

const CUBE_FACES = [
  {
    title: "Website Development",
    face: "Front Face • Bedrock",
    description:
      "Engineered with Next.js App Router for sub-second speeds, zero layout shift, and WCAG 2.1 AA accessibility.",
    synergy: "Provides the ultra-fast, accessible foundation required for high organic rankings and ad conversion.",
    href: "/services/web-development",
  },
  {
    title: "Search Engine Optimization",
    face: "Top Face • Discovery",
    description:
      "Technical crawl optimization, semantic Schema.org modeling, and search-intent architecture.",
    synergy: "Guides the informational structure and URL hierarchy of the web development roadmap.",
    href: "/services/seo",
  },
  {
    title: "Social Media Marketing",
    face: "Right Face • Distribution",
    description:
      "Executive thought leadership, community management, and multi-channel brand storytelling.",
    synergy: "Distributes authoritative content assets to establish trust and generate qualified referral traffic.",
    href: "/services/social-media-marketing",
  },
  {
    title: "Paid Advertising",
    face: "Left Face • Acceleration",
    description:
      "Precision search and paid social campaigns optimized for high-intent customer acquisition.",
    synergy: "Routes paid prospects to custom, high-speed landing pages engineered directly within the codebase.",
    href: "/services/paid-advertising",
  },
  {
    title: "Content Marketing",
    face: "Back Face • Authority",
    description:
      "Search-aligned editorial, technical guides, and conversion copywriting that convince decision-makers.",
    synergy: "Powers both organic search topical authority and social distribution campaigns.",
    href: "/services/content-marketing",
  },
];

const CUBE_ICONS = [Code2, Network, Sparkles, Target, FileText];

export default function AboutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: SITE_CONFIG.domain,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "About",
            item: `${SITE_CONFIG.domain}/about`,
          },
        ],
      },
      {
        "@type": "AboutPage",
        "@id": `${SITE_CONFIG.domain}/about#webpage`,
        url: `${SITE_CONFIG.domain}/about`,
        name: "About Qubizon Digital Solutions",
        description:
          "Learn about Qubizon Digital Solutions and our unified digital agency model combining web development, SEO, social media, paid ads, and content marketing.",
        isPartOf: {
          "@type": "WebSite",
          "@id": `${SITE_CONFIG.domain}/#website`,
          name: SITE_CONFIG.name,
          url: SITE_CONFIG.domain,
        },
      },
    ],
  };

  return (
    <main id="main-content" className={styles.mainContainer}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Breadcrumb Navigation */}
      <div className="container">
        <nav aria-label="Breadcrumb" className={styles.breadcrumbNav}>
          <ol className={styles.breadcrumbList}>
            <li className={styles.breadcrumbItem}>
              <Link href="/" className={styles.breadcrumbLink}>
                Home
              </Link>
              <ChevronRight size={14} className={styles.breadcrumbSeparator} aria-hidden="true" />
            </li>
            <li className={styles.breadcrumbItem}>
              <span className={styles.breadcrumbCurrent} aria-current="page">
                About
              </span>
            </li>
          </ol>
        </nav>
      </div>

      {/* Hero Section: Modern Split Architecture (Image 2 & 3 Inspiration) */}
      <section className={styles.heroSection} aria-labelledby="about-hero-heading">
        <div className="container">
          <div className={styles.heroSplit}>
            <div className={styles.heroLeft}>
              <span className={styles.badge}>
                <Box size={14} aria-hidden="true" />
                Unified Agency Architecture
              </span>
              <h1 id="about-hero-heading" className={styles.heroTitle}>
                A Unified Digital Discipline Engineered to Eliminate <span className="calligraphy">Agency Fragmentation</span>
              </h1>
              <p className={styles.heroLead}>
                {SITE_CONFIG.name} was established around a simple observation: modern businesses waste
                valuable momentum coordinating between isolated web developers, SEO consultants, ad
                buyers, and copywriters who never communicate. We unify all five disciplines into one
                disciplined, accountable partner.
              </p>

              <div className={styles.heroActions}>
                <Link href="/contact" className={styles.btnPill}>
                  <span>Schedule a Discovery Session</span>
                  <ArrowRight size={13} aria-hidden="true" />
                </Link>
                <div className={styles.trustIndicators}>
                  <span className={styles.trustItem}>
                    <Check size={14} className={styles.trustIcon} aria-hidden="true" />
                    <span>100% Client IP Ownership</span>
                  </span>
                  <span className={styles.trustItem}>
                    <Check size={14} className={styles.trustIcon} aria-hidden="true" />
                    <span>Zero Monolithic Bloat</span>
                  </span>
                </div>
              </div>
            </div>

            <div className={styles.heroRight}>
              <div className={styles.heroVisualFrame}>
                <div className={styles.floatingBadge}>
                  <span className={styles.emeraldPulse} />
                  <span>UNIFIED AGENCY COLLECTIVE / KERALA &amp; GCC</span>
                </div>
                <Image
                  src="/hero-collaboration.jpg"
                  alt="Qubizon cross-functional digital engineering and strategic marketing team collaboration"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className={styles.heroImage}
                />
              </div>
            </div>
          </div>

          {/* Bottom Proof Strip: 4 Modern Cards (Image 3 Inspiration) */}
          <div className={styles.heroStatsGrid}>
            <div className={styles.heroStatCard}>
              <div className={styles.heroStatHeader}>
                <div className={styles.statIconBadge}>
                  <Users size={18} aria-hidden="true" />
                </div>
                <span className={styles.statEyebrow}>TEAM ARCHITECTURE</span>
              </div>
              <p className={styles.statValue}>1 Team</p>
              <p className={styles.statLabel}>Single point of technical and strategic ownership</p>
            </div>
            <div className={styles.heroStatCard}>
              <div className={styles.heroStatHeader}>
                <div className={styles.statIconBadge}>
                  <Layers size={18} aria-hidden="true" />
                </div>
                <span className={styles.statEyebrow}>CROSS-DISCIPLINE</span>
              </div>
              <p className={styles.statValue}>5 Disciplines</p>
              <p className={styles.statLabel}>Web, SEO, Social, Paid Ads, and Content in sync</p>
            </div>
            <div className={styles.heroStatCard}>
              <div className={styles.heroStatHeader}>
                <div className={styles.statIconBadge}>
                  <ShieldCheck size={18} aria-hidden="true" />
                </div>
                <span className={styles.statEyebrow}>CLIENT GUARANTEE</span>
              </div>
              <p className={styles.statValue}>100%</p>
              <p className={styles.statLabel}>Client code, data, and asset ownership guaranteed</p>
            </div>
            <div className={styles.heroStatCard}>
              <div className={styles.heroStatHeader}>
                <div className={styles.statIconBadge}>
                  <CheckCircle2 size={18} aria-hidden="true" />
                </div>
                <span className={styles.statEyebrow}>TARGET STANDARDS</span>
              </div>
              <p className={styles.statValue}>WCAG 2.1 AA</p>
              <p className={styles.statLabel}>Accessibility and Core Web Vitals target standards</p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem vs Unified Approach: Modern Vision/Mission Cards (Image 1 Inspiration) */}
      <section className={`${styles.section} ${styles.sectionOffwhite}`} aria-labelledby="problem-heading">
        <div className="container">
          <div className={styles.sectionHeader}>
            <p className={styles.sectionBadge}>The Industry Problem</p>
            <h2 id="problem-heading" className={styles.sectionTitle}>
              Why Fragmented Agency Models Waste Time and Capital
            </h2>
            <p className={styles.sectionLead}>
              When digital disciplines operate in organizational silos, your business pays the cost in
              delayed sprints, misaligned incentives, and conflicting technical implementations.
            </p>
          </div>

          <div className={styles.comparisonGrid}>
            <div className={`${styles.comparisonCard} ${styles.comparisonCardFragmented}`}>
              <div className={styles.comparisonHeader}>
                <XCircle size={22} className={styles.iconNegative} aria-hidden="true" />
                <h3 className={styles.comparisonTitle}>The Typical Fragmented Model</h3>
              </div>
              <ul className={styles.comparisonList}>
                <li className={styles.comparisonItem}>
                  <XCircle size={18} className={styles.iconNegative} aria-hidden="true" />
                  <span>
                    <strong>Developers vs. SEOs:</strong> Developers deploy client-rendered code that
                    blocks web crawlers; SEO auditors deliver 60-page PDF audit reports that developers
                    never implement.
                  </span>
                </li>
                <li className={styles.comparisonItem}>
                  <XCircle size={18} className={styles.iconNegative} aria-hidden="true" />
                  <span>
                    <strong>Ad Spend on Slow Pages:</strong> Media buyers run costly PPC campaigns to
                    slow, generic homepages with poor message match, inflating customer acquisition costs.
                  </span>
                </li>
                <li className={styles.comparisonItem}>
                  <XCircle size={18} className={styles.iconNegative} aria-hidden="true" />
                  <span>
                    <strong>Siloed Content Production:</strong> Content writers publish blog posts without
                    keyword intent research or distribution plans, producing traffic that never converts.
                  </span>
                </li>
                <li className={styles.comparisonItem}>
                  <XCircle size={18} className={styles.iconNegative} aria-hidden="true" />
                  <span>
                    <strong>Vendor Blame Games:</strong> When revenue stalls, each agency blames the
                    other, leaving business owners trapped mediating technical disputes.
                  </span>
                </li>
              </ul>
              <div className={styles.comparisonFooter}>
                <span className={styles.warningNote}>
                  Eliminates multi-vendor finger-pointing and fragmented accountability.
                </span>
              </div>
            </div>

            <div className={`${styles.comparisonCard} ${styles.comparisonCardUnified}`}>
              <div className={styles.comparisonHeader}>
                <CheckCircle2 size={22} className={styles.iconPositive} aria-hidden="true" />
                <h3 className={styles.comparisonTitle}>The Qubizon Unified Cube Model</h3>
              </div>
              <ul className={styles.comparisonList}>
                <li className={styles.comparisonItem}>
                  <CheckCircle2 size={18} className={styles.iconPositive} aria-hidden="true" />
                  <span>
                    <strong>SEO-Native Development:</strong> Our developers write semantic Next.js
                    App Router code with automated Schema markup and sub-second Largest Contentful Paint.
                  </span>
                </li>
                <li className={styles.comparisonItem}>
                  <CheckCircle2 size={18} className={styles.iconPositive} aria-hidden="true" />
                  <span>
                    <strong>Engineered Ad Funnels:</strong> Paid campaigns land on dedicated, ultra-fast
                    landing pages built directly in your codebase with precise server-side conversion tracking.
                  </span>
                </li>
                <li className={styles.comparisonItem}>
                  <CheckCircle2 size={18} className={styles.iconPositive} aria-hidden="true" />
                  <span>
                    <strong>Strategic Editorial Sprints:</strong> Content writers and social strategists
                    collaborate on high-authority pillar assets that target commercial search queries and build brand authority.
                  </span>
                </li>
                <li className={styles.comparisonItem}>
                  <CheckCircle2 size={18} className={styles.iconPositive} aria-hidden="true" />
                  <span>
                    <strong>Unified Accountability:</strong> A single multidisciplinary agency team
                    responsible for technical integrity, search visibility, and commercial conversion.
                  </span>
                </li>
              </ul>
              <div className={styles.comparisonFooter}>
                <a href="#workflow-heading" className={styles.learnMoreLink}>
                  <span>Explore Our 4-Phase Delivery Cycle &rarr;</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Cube Disciplines: Modern 2027 Balanced Multi-Card Grid (Image 4 Inspiration) */}
      <section className={styles.section} aria-labelledby="cube-heading">
        <div className="container">
          <div className={styles.sectionHeader}>
            <p className={styles.sectionBadge}>The Five Disciplines</p>
            <h2 id="cube-heading" className={styles.sectionTitle}>
              All Your Digital Needs In One Cube
            </h2>
            <p className={styles.sectionLead}>
              The cube represents structural stability and multidimensional coherence. Each face of the
              Qubizon cube represents a core competency that reinforces the other four.
            </p>
          </div>

          <div className={styles.cubeGrid}>
            {CUBE_FACES.map((face, idx) => {
              const IconComp = CUBE_ICONS[idx] || Box;
              return (
                <article key={idx} className={`${styles.cubeCard} ${styles[`cubeCard_${idx}`] || ""}`}>
                  <div>
                    <div className={styles.cubeCardHeader}>
                      <span className={styles.cubeFaceTag}>{face.face}</span>
                      <div className={styles.cubeIconBadge} aria-hidden="true">
                        <IconComp size={18} />
                      </div>
                    </div>
                    <h3 className={styles.cubeTitle}>{face.title}</h3>
                    <p className={styles.cubeDescription}>{face.description}</p>
                  </div>
                  <div>
                    <div className={styles.cubeSynergy}>
                      <strong>Cube Synergy:</strong> {face.synergy}
                    </div>
                    <Link href={face.href} className={styles.cubeLink}>
                      <span>Explore {face.title}</span>
                      <ArrowRight size={14} aria-hidden="true" />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Client Lifecycle Timeline */}
      <section className={`${styles.section} ${styles.sectionOffwhite}`} aria-labelledby="workflow-heading">
        <div className="container">
          <div className={styles.sectionHeader}>
            <p className={styles.sectionBadge}>Working Methodology</p>
            <h2 id="workflow-heading" className={styles.sectionTitle}>
              What to Expect When Working With Qubizon
            </h2>
            <p className={styles.sectionLead}>
              We replace subjective guesswork with a disciplined, transparent execution cycle designed
              for accountability from day one.
            </p>
          </div>

          <div className={styles.timelineGrid}>
            {ENGAGEMENT_STEPS.map((step, idx) => (
              <div key={idx} className={styles.timelineCard}>
                <div className={styles.stepNumber}>{step.number}</div>
                <p className={styles.stepPhase}>{step.phase}</p>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDescription}>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dark Obsidian Section: Client Commitments */}
      <section className={styles.darkSection} aria-labelledby="expectations-heading">
        <div className="container">
          <div className={styles.darkHeader}>
            <p className={styles.darkBadge}>Client Experience</p>
            <h2 id="expectations-heading" className={styles.darkTitle}>
              Our Commitments to Every Client Partner
            </h2>
            <p className={styles.darkLead}>
              We believe agency partnerships should be transparent, respectful, and free of artificial
              complexity.
            </p>
          </div>

          <div className={styles.expectationsGrid}>
            <div className={styles.expectationCard}>
              <h3>Direct Access to Practitioners</h3>
              <p>
                You communicate directly with the engineers, strategists, and copywriters doing the work.
                No middle-tier account coordinators filtering technical requirements or creating delays.
              </p>
            </div>
            <div className={styles.expectationCard}>
              <h3>Clean Documentation &amp; Standards</h3>
              <p>
                Every line of code is committed to your repository with clear Git logs. Every strategy is
                documented in plain language with measurable acceptance criteria.
              </p>
            </div>
            <div className={styles.expectationCard}>
              <h3>Zero Vendor Lock-In</h3>
              <p>
                We build with open, modern standards like Next.js, standard TypeScript, and clean CSS.
                You are never locked into proprietary CMS themes or hostage hosting arrangements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Guiding Principles */}
      <section className={styles.section} aria-labelledby="principles-heading">
        <div className="container">
          <div className={styles.sectionHeader}>
            <p className={styles.sectionBadge}>Operating Principles</p>
            <h2 id="principles-heading" className={styles.sectionTitle}>
              The Standards That Guide Our Execution
            </h2>
            <p className={styles.sectionLead}>
              We prioritize sustainable craft and commercial clarity over agency hype and temporary shortcuts.
            </p>
          </div>

          <div className={styles.valuesGrid}>
            {PRINCIPLES.map((principle, idx) => {
              const Icon = principle.icon;
              return (
                <div key={idx} className={styles.valueCard}>
                  <Icon size={24} className={styles.valueIcon} aria-hidden="true" />
                  <div>
                    <h3>{principle.title}</h3>
                    <p>{principle.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* About Qubizon Agency FAQs (Clean Modular Container) */}
          <div className={styles.faqSectionContainer}>
            <div className={styles.faqHeaderBlock}>
              <span className={styles.faqBadge}>
                • AGENCY INTEGRATION FAQS /
              </span>
              <h2 className={styles.faqTitle}>
                Common Questions About Partnering With Qubizon
              </h2>
            </div>

            <div className={styles.faqGrid}>
              <div className={styles.faqCardItem}>
                <h3 className={styles.faqCardTitle}>
                  How does Qubizon differ from a traditional digital marketing agency?
                </h3>
                <p className={styles.faqCardAnswer}>
                  Traditional digital marketing agencies treat web design, SEO, and paid advertising as disconnected silos managed by outsourced freelancers. Qubizon operates as an integrated software and growth collective. Our software engineers build high-performance Next.js architectures that directly empower our technical SEO strategists, while paid campaigns feed real-time CRM pipelines.
                </p>
              </div>

              <div className={styles.faqCardItem}>
                <h3 className={styles.faqCardTitle}>
                  Where are Qubizon’s engineering and strategy teams located?
                </h3>
                <p className={styles.faqCardAnswer}>
                  We are based in Kerala, India, with active regional service hubs across Kozhikode (Calicut) and Thrissur. We partner with fast-growing regional enterprises, healthcare systems, retail chains, and international commercial brands operating across the GCC (UAE, Saudi Arabia, Qatar) and global markets.
                </p>
              </div>

              <div className={styles.faqCardItem}>
                <h3 className={styles.faqCardTitle}>
                  What is Qubizon’s policy on intellectual property and code ownership?
                </h3>
                <p className={styles.faqCardAnswer}>
                  You retain 100% legal ownership of all source code, git repositories, advertising accounts, domain registrations, and analytics data from day one. We never enforce proprietary vendor lock-in or hostage retainer agreements; every system we engineer is built on documented, open-standard technologies.
                </p>
              </div>

              <div className={styles.faqCardItem}>
                <h3 className={styles.faqCardTitle}>
                  How do sprint cycles and communication work during active projects?
                </h3>
                <p className={styles.faqCardAnswer}>
                  We operate in bi-weekly agile delivery sprints with direct practitioner Slack/WhatsApp channels and scheduled review demonstrations. You communicate directly with the software engineers and growth leads executing your project—ensuring rapid iteration without intermediary account management bureaucracy.
                </p>
              </div>
            </div>
          </div>

          {/* Enterprise Engineering Culture & Operational Governance Framework (Clean Modular Container) */}
          <div className={styles.governanceContainer}>
            <span className={styles.governanceBadge}>
              • ENGINEERING CULTURE &amp; OPERATIONAL GOVERNANCE /
            </span>
            <h2 className={styles.governanceTitle}>
              How Our Cross-Functional Squads Deliver Predictable Results
            </h2>
            <p className={styles.governanceLead}>
              At Qubizon, we believe that software engineering and digital marketing should not be segregated into different rooms. Our delivery pods are organized as cross-functional squads containing senior TypeScript engineers, technical SEO analysts, performance media buyers, and conversion copywriters collaborating synchronously on every client initiative.
            </p>

            <div className={styles.governanceGrid}>
              <div className={styles.governanceItem}>
                <h3 className={styles.governanceItemTitle}>
                  1. Zero Third-Party Vendor Dependencies
                </h3>
                <p className={styles.governanceItemText}>
                  We do not outsource core development or campaign management to white-label contractors. Every line of code, every Google Ads conversion action, and every technical SEO knowledge graph is architected and maintained directly by our in-house engineering team.
                </p>
              </div>

              <div className={styles.governanceItem}>
                <h3 className={styles.governanceItemTitle}>
                  2. Strict Code Quality &amp; Accessibility Gates
                </h3>
                <p className={styles.governanceItemText}>
                  Every production deployment is subjected to automated continuous integration pipelines verifying strict TypeScript compiler safety, ESLint security rules, and WCAG 2.1 AA accessibility conformance to ensure all digital experiences are resilient and universally usable.
                </p>
              </div>

              <div className={styles.governanceItem}>
                <h3 className={styles.governanceItemTitle}>
                  3. Transparent Milestone Execution
                </h3>
                <p className={styles.governanceItemText}>
                  We replace vague monthly status reports with transparent sprint retrospectives. Clients receive direct visibility into Git pull request reviews, live preview staging environments, and real-time Google Analytics 4 telemetry dashboards showing verifiable commercial outcomes.
                </p>
              </div>

              <div className={styles.governanceItem}>
                <h3 className={styles.governanceItemTitle}>
                  4. International Data Sovereignty
                </h3>
                <p className={styles.governanceItemText}>
                  Whether delivering for clients in Kerala or international enterprises across Dubai, Riyadh, London, or New York, we enforce strict compliance with regional data protection frameworks (Indian DPDP Act 2023, European GDPR, UAE Federal Decree-Law No. 45/2021).
                </p>
              </div>
            </div>

            <div className={styles.governanceEcosystem}>
              <strong>Explore Our Integrated Ecosystem:</strong> Review our core disciplines in{" "}
              <Link href="/services/web-development">Web Architecture</Link>,{" "}
              <Link href="/services/seo">Technical SEO</Link>,{" "}
              <Link href="/services/paid-advertising">Paid Advertising</Link>, and{" "}
              <Link href="/services/crm">CRM Systems</Link>. Explore regional delivery hubs across{" "}
              <Link href="/locations/uae">UAE</Link>,{" "}
              <Link href="/locations/saudi-arabia">Saudi Arabia</Link>, and{" "}
              <Link href="/locations">Global Corridors</Link>.
            </div>
          </div>

          {/* Call to Action Banner (Obsidian Editorial Stage) */}
          <div className={styles.ctaBanner}>
            <h2 className={styles.ctaTitle}>
              Ready for a Unified, Disciplined Digital Partner?
            </h2>
            <p className={styles.ctaDescription}>
              Schedule a technical discovery session. We will review your current architecture,
              search footprint, and conversion funnel to map a synchronized growth roadmap.
            </p>
            <div className={styles.ctaActions}>
              <Link href="/contact" className={styles.primaryBtn}>
                <span>Schedule a Discovery Session</span>
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
              <Link href="/services" className={styles.secondaryBtn}>
                <span>Explore All Five Disciplines</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
