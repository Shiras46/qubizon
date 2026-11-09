import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MessageCircle, MapPin, ArrowRight } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import styles from "./Footer.module.css";

const GLOBAL_COUNTRIES = [
  { name: "UAE", flag: "🇦🇪", href: "/locations/uae" },
  { name: "Saudi Arabia", flag: "🇸🇦", href: "/locations/saudi-arabia" },
  { name: "Qatar", flag: "🇶🇦", href: "/locations/qatar" },
  { name: "Kuwait", flag: "🇰🇼", href: "/locations/kuwait" },
  { name: "Bahrain", flag: "🇧🇭", href: "/locations/bahrain" },
  { name: "Oman", flag: "🇴🇲", href: "/locations/oman" },
  { name: "India", flag: "🇮🇳", href: "/locations" },
  { name: "United States", flag: "🇺🇸", href: "/locations" },
  { name: "United Kingdom", flag: "🇬🇧", href: "/locations" },
  { name: "Australia", flag: "🇦🇺", href: "/locations" },
  { name: "Singapore", flag: "🇸🇬", href: "/locations" },
  { name: "Canada", flag: "🇨🇦", href: "/locations" },
  { name: "Germany", flag: "🇩🇪", href: "/locations" },
  { name: "France", flag: "🇫🇷", href: "/locations" },
  { name: "Netherlands", flag: "🇳🇱", href: "/locations" },
  { name: "Spain", flag: "🇪🇸", href: "/locations" },
  { name: "New Zealand", flag: "🇳🇿", href: "/locations" },
  { name: "Malaysia", flag: "🇲🇾", href: "/locations" },
  { name: "Philippines", flag: "🇵🇭", href: "/locations" },
  { name: "Indonesia", flag: "🇮🇩", href: "/locations" },
  { name: "Thailand", flag: "🇹🇭", href: "/locations" },
  { name: "South Africa", flag: "🇿🇦", href: "/locations" },
  { name: "Nigeria", flag: "🇳🇬", href: "/locations" },
  { name: "Kenya", flag: "🇰🇪", href: "/locations" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer} aria-label="Site Footer">
      <div className={styles.container}>
        {/* Brand & Direct Contact Row */}
        <div className={styles.brandRow}>
          <div className={styles.brandInfo}>
            <Link href="/" className={styles.brand} aria-label={`${SITE_CONFIG.name} Home`}>
              <Image
                src="/Logo Png-12.png"
                alt={SITE_CONFIG.name}
                width={155}
                height={48}
                className={styles.brandLogo}
              />
            </Link>
            <p className={styles.brandTagline}>Creativity + Engineering.</p>
            <p className={styles.brandSub}>
              Qubizon Digital Solutions is an enterprise software engineering and digital growth collective. We architect high-performance Next.js 15 web applications, technical SEO knowledge graphs, high-intent PPC advertising campaigns, and automated CRM pipelines for ambitious commercial brands across Kozhikode, Thrissur, the UAE, Saudi Arabia, Qatar, Kuwait, Bahrain, Oman, and international commercial corridors.
            </p>
          </div>

          <div className={styles.contactCards}>
            <a
              href="https://wa.me/917902911961?text=Hi%20Qubizon%20team%2C%20I%27d%20like%20to%20discuss%20a%20project."
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactCard}
            >
              <div className={styles.contactIconWrapper} style={{ background: "rgba(37, 211, 102, 0.15)", color: "#25D366" }}>
                <MessageCircle size={18} aria-hidden="true" />
              </div>
              <div className={styles.contactCardText}>
                <span className={styles.contactCardLabel}>Instant WhatsApp</span>
                <span className={styles.contactCardValue}>+91 79029 11961</span>
              </div>
            </a>

            <a href={`tel:${SITE_CONFIG.phoneTel}`} className={styles.contactCard}>
              <div className={styles.contactIconWrapper} style={{ background: "rgba(0, 122, 255, 0.15)", color: "#007AFF" }}>
                <Phone size={18} aria-hidden="true" />
              </div>
              <div className={styles.contactCardText}>
                <span className={styles.contactCardLabel}>Direct Consultation</span>
                <span className={styles.contactCardValue}>{SITE_CONFIG.phone}</span>
              </div>
            </a>

            <a href={`mailto:${SITE_CONFIG.email}`} className={styles.contactCard}>
              <div className={styles.contactIconWrapper} style={{ background: "rgba(255, 190, 11, 0.15)", color: "#ffbe0b" }}>
                <Mail size={18} aria-hidden="true" />
              </div>
              <div className={styles.contactCardText}>
                <span className={styles.contactCardLabel}>Official RFP &amp; Enquiries</span>
                <span className={styles.contactCardValue}>{SITE_CONFIG.email}</span>
              </div>
            </a>

            <div className={styles.contactCard}>
              <div className={styles.contactIconWrapper} style={{ background: "rgba(255, 255, 255, 0.1)", color: "#ffffff" }}>
                <MapPin size={18} aria-hidden="true" />
              </div>
              <div className={styles.contactCardText}>
                <span className={styles.contactCardLabel}>Global Corridors</span>
                <span className={styles.contactCardValue}>Kerala (HQ) &bull; GCC &bull; International</span>
              </div>
            </div>
          </div>
        </div>

        {/* 5-Column Categorized Architecture (Dictode-aligned) */}
        <div className={styles.footerLinksGrid}>
          {/* Col 1: Core Services */}
          <div className={styles.linkCol}>
            <h4 className={styles.linkTitle}>Core Services</h4>
            <Link href="/services/web-development" className={styles.footerLink}>
              Website Development
            </Link>
            <Link href="/services/seo" className={styles.footerLink}>
              Search Engine Optimization
            </Link>
            <Link href="/services/paid-advertising" className={styles.footerLink}>
              Performance PPC &amp; Ads
            </Link>
            <Link href="/services/social-media-marketing" className={styles.footerLink}>
              Social Media Marketing
            </Link>
            <Link href="/services/content-marketing" className={styles.footerLink}>
              Content Marketing &amp; PR
            </Link>
            <Link href="/services/web-development#mobile-apps" className={styles.footerLink}>
              Mobile App Development
            </Link>
            <Link href="/services/web-development#cloud-security" className={styles.footerLink}>
              Cloud &amp; DevOps Engineering
            </Link>
            <Link href="/services" className={styles.footerLink} style={{ color: "#ffbe0b", fontWeight: 600 }}>
              All Services Overview &rarr;
            </Link>
          </div>

          {/* Col 2: AI & Development Solutions */}
          <div className={styles.linkCol}>
            <h4 className={styles.linkTitle}>AI &amp; Solutions</h4>
            <Link href="/solutions" className={styles.footerLink}>
              AI Chatbot Development
            </Link>
            <Link href="/solutions" className={styles.footerLink}>
              AI Agent &amp; Workflows
            </Link>
            <Link href="/solutions" className={styles.footerLink}>
              WhatsApp Business API Hub
            </Link>
            <Link href="/solutions" className={styles.footerLink}>
              Subscription &amp; Billing API
            </Link>
            <Link href="/solutions" className={styles.footerLink}>
              GDPR Compliance Software
            </Link>
            <Link href="/solutions" className={styles.footerLink}>
              Digital Lease Management
            </Link>
            <Link href="/solutions" className={styles.footerLink}>
              WhatsApp Marketing Engine
            </Link>
            <Link href="/solutions" className={styles.footerLink} style={{ color: "#ffbe0b", fontWeight: 600 }}>
              All AI &amp; Solutions &rarr;
            </Link>
          </div>

          {/* Col 3: Software by Industry */}
          <div className={styles.linkCol}>
            <h4 className={styles.linkTitle}>Solutions by Industry</h4>
            <Link href="/industries" className={styles.footerLink}>
              Retail &amp; E-Commerce
            </Link>
            <Link href="/industries" className={styles.footerLink}>
              Healthcare &amp; Hospitals
            </Link>
            <Link href="/industries" className={styles.footerLink}>
              Manufacturing &amp; Export
            </Link>
            <Link href="/industries" className={styles.footerLink}>
              Hospitality &amp; Luxury Resorts
            </Link>
            <Link href="/industries" className={styles.footerLink}>
              Real Estate &amp; Rentals
            </Link>
            <Link href="/industries" className={styles.footerLink}>
              Education &amp; EdTech
            </Link>
            <Link href="/industries" className={styles.footerLink}>
              Fintech &amp; Banking
            </Link>
            <Link href="/industries" className={styles.footerLink}>
              Logistics &amp; Transport
            </Link>
            <Link href="/industries" className={styles.footerLink}>
              Salons, Spas &amp; Wellness
            </Link>
            <Link href="/industries" className={styles.footerLink}>
              Automobile Workshops
            </Link>
            <Link href="/industries" className={styles.footerLink} style={{ color: "#ffbe0b", fontWeight: 600 }}>
              All 10 Industries &rarr;
            </Link>
          </div>

          {/* Col 4: GCC & Regional Hubs */}
          <div className={styles.linkCol}>
            <h4 className={styles.linkTitle}>GCC Country Hubs</h4>
            <Link href="/locations/uae" className={styles.footerLink}>
              <span className={styles.countryFlag}>🇦🇪</span> United Arab Emirates
            </Link>
            <Link href="/locations/saudi-arabia" className={styles.footerLink}>
              <span className={styles.countryFlag}>🇸🇦</span> Saudi Arabia
            </Link>
            <Link href="/locations/qatar" className={styles.footerLink}>
              <span className={styles.countryFlag}>🇶🇦</span> Qatar
            </Link>
            <Link href="/locations/kuwait" className={styles.footerLink}>
              <span className={styles.countryFlag}>🇰🇼</span> Kuwait
            </Link>
            <Link href="/locations/bahrain" className={styles.footerLink}>
              <span className={styles.countryFlag}>🇧🇭</span> Bahrain
            </Link>
            <Link href="/locations/oman" className={styles.footerLink}>
              <span className={styles.countryFlag}>🇴🇲</span> Sultanate of Oman
            </Link>
            <Link href="/locations" className={styles.footerLink} style={{ color: "#ffbe0b", fontWeight: 600 }}>
              <span className={styles.countryFlag}>🇮🇳</span> India (Kozhikode &bull; Thrissur) &rarr;
            </Link>
          </div>

          {/* Col 5: Company, Compliance & Trust */}
          <div className={styles.linkCol}>
            <h4 className={styles.linkTitle}>Company &amp; Trust</h4>
            <Link href="/about" className={styles.footerLink}>
              About Our Unified Agency
            </Link>
            <Link href="/work" className={styles.footerLink}>
              Showcase &amp; Benchmarks
            </Link>
            <Link href="/blog" className={styles.footerLink}>
              Engineering Insights (Blog)
            </Link>
            <Link href="/privacy" className={styles.footerLink}>
              Privacy &amp; Data Governance
            </Link>
            <Link href="/locations/saudi-arabia#zatca" className={styles.footerLink}>
              🇸🇦 ZATCA Phase 2 E-Invoicing
            </Link>
            <Link href="/locations/uae#e-invoicing" className={styles.footerLink}>
              🇦🇪 UAE FTA Tax Compliance
            </Link>
            <Link href="/contact" className={styles.footerLink} style={{ color: "#ffbe0b", fontWeight: 600 }}>
              Schedule Technical Discovery &rarr;
            </Link>
          </div>
        </div>

        {/* Global 24-Country Corridors Bar (Dictode-style) */}
        <div style={{ padding: "1.75rem 0", borderBottom: "1px solid rgba(255, 255, 255, 0.08)" }}>
          <span style={{ fontSize: "0.74rem", textTransform: "uppercase", letterSpacing: "0.14em", color: "#94a3b8", display: "block", marginBottom: "0.85rem", fontWeight: 700 }}>
            Global Software Development &amp; Marketing Corridors:
          </span>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px 16px", alignItems: "center" }}>
            {GLOBAL_COUNTRIES.map((country, index) => (
              <Link
                key={index}
                href={country.href}
                style={{
                  color: "rgba(255, 255, 255, 0.7)",
                  textDecoration: "none",
                  fontSize: "0.8rem",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "5px",
                  transition: "color 0.15s ease",
                }}
              >
                <span>{country.flag}</span>
                <span>{country.name}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Global Architectural Overview & Technical Governance */}
        <div className={styles.globalOverview}>
          <h3 className={styles.globalOverviewTitle}>
            Enterprise Digital Engineering &bull; GCC Corridors &bull; International Delivery Governance
          </h3>
          <p className={styles.globalOverviewText}>
            Qubizon Digital Solutions operates as a unified software engineering and commercial growth collective. We engineer high-availability web applications, execute high-intent search engine optimization, manage data-driven paid advertising campaigns, and deploy automated CRM workflows for leading commercial enterprises across Kozhikode, Thrissur, the United Arab Emirates, Saudi Arabia, Qatar, Kuwait, Bahrain, the Sultanate of Oman, and 24 international trade corridors.
          </p>

          <div className={styles.globalOverviewGrid}>
            <div className={styles.globalOverviewCard}>
              <h4 className={styles.globalOverviewCardTitle}>
                Sub-Second Next.js Web Engineering
              </h4>
              <p className={styles.globalOverviewCardDesc}>
                We replace brittle WordPress themes with custom Next.js App Router applications, achieving sub-second Largest Contentful Paint (LCP &lt; 0.9s), zero layout shift (CLS = 0.00), and automated edge CDN caching across global regions.
              </p>
            </div>

            <div className={styles.globalOverviewCard}>
              <h4 className={styles.globalOverviewCardTitle}>
                Technical Search &amp; Knowledge Graphs
              </h4>
              <p className={styles.globalOverviewCardDesc}>
                We build deep Schema.org entity graphs, crawl-budget-engineered robots directives, and bilingual English-Arabic digital experiences that capture high-intent commercial buyers on Google across India and the GCC.
              </p>
            </div>

            <div className={styles.globalOverviewCard}>
              <h4 className={styles.globalOverviewCardTitle}>
                Server-Side Telemetry &amp; Paid Attribution
              </h4>
              <p className={styles.globalOverviewCardDesc}>
                We implement server-side Google Tag Manager and Meta Conversions API (CAPI) with 99.8% signal accuracy, eliminating cookie deprecation tracking loss and connecting ad spend directly to closed CRM revenue.
              </p>
            </div>

            <div className={styles.globalOverviewCard}>
              <h4 className={styles.globalOverviewCardTitle}>
                Omnichannel CRM &amp; Instant WhatsApp Routing
              </h4>
              <p className={styles.globalOverviewCardDesc}>
                Inbound customer inquiries instantly trigger official Meta WhatsApp Business Cloud API webhooks and synchronize with HubSpot, Salesforce, or Zoho CRMs within 30 seconds to maximize sales closing velocity.
              </p>
            </div>

            <div className={styles.globalOverviewCard}>
              <h4 className={styles.globalOverviewCardTitle}>
                Dual-Shore Delivery &amp; Synchronous Time Overlap
              </h4>
              <p className={styles.globalOverviewCardDesc}>
                Our engineering teams maintain dedicated synchronous working hours across Gulf Standard Time (GST), Arabia Standard Time (AST), Indian Standard Time (IST), GMT, and EST, providing real-time Slack/WhatsApp access and bi-weekly demo reviews.
              </p>
            </div>

            <div className={styles.globalOverviewCard}>
              <h4 className={styles.globalOverviewCardTitle}>
                100% Client Code &amp; Data Ownership
              </h4>
              <p className={styles.globalOverviewCardDesc}>
                You retain complete, unencumbered ownership of all Git repositories, databases, analytics events, and advertising accounts from day one. We engineer on open-standard web technologies with zero proprietary lock-in.
              </p>
            </div>

            <div className={styles.globalOverviewCard}>
              <h4 className={styles.globalOverviewCardTitle}>
                Statutory GCC &amp; International Regulatory Compliance
              </h4>
              <p className={styles.globalOverviewCardDesc}>
                We engineer full data sovereignty adherence across regional jurisdictions: UAE Federal Decree-Law No. 45/2021 on Personal Data Protection, Saudi Arabian Personal Data Protection Law (PDPL - Royal Decree M/19), Bahrain Law No. 30 of 2018, Kuwait CITRA cloud regulatory frameworks, Oman Royal Decree 6/2022, Qatar Law No. 13 of 2016, and India DPDP Act 2023. All customer telemetry and data ingestion pipelines are configured with strict regional residency controls and cryptographic audit trails.
              </p>
            </div>

            <div className={styles.globalOverviewCard}>
              <h4 className={styles.globalOverviewCardTitle}>
                Sub-200ms Edge Computing &amp; Distributed Invalidation
              </h4>
              <p className={styles.globalOverviewCardDesc}>
                Our Next.js 15 architectures deploy across distributed Cloudflare and Vercel edge networks with automated Incremental Static Regeneration (ISR), stale-while-revalidate caching headers, and Brotli compression. This ensures enterprise visitors across Dubai, Riyadh, Doha, Kuwait City, Manama, Muscat, Kozhikode, and global financial hubs experience lightning-fast load times with TTFB under 200ms.
              </p>
            </div>

            <div className={styles.globalOverviewCard}>
              <h4 className={styles.globalOverviewCardTitle}>
                Bilingual RTL/LTR Typography &amp; Arabic Search Dominance
              </h4>
              <p className={styles.globalOverviewCardDesc}>
                We design and develop high-converting bilingual user interfaces supporting full right-to-left (RTL) Arabic typography, bidirectional CSS logical properties, and regional dialect keyword adaptation. Our technical search architectures configure reciprocal hreflang tags and localized XML sitemaps to secure dominant visibility on Google across the GCC and international markets.
              </p>
            </div>

            <div className={styles.globalOverviewCard}>
              <h4 className={styles.globalOverviewCardTitle}>
                Enterprise Security Hardening &amp; Zero-Trust Governance
              </h4>
              <p className={styles.globalOverviewCardDesc}>
                All digital properties engineered by Qubizon adhere to OWASP Top 10 security standards. We configure strict Content Security Policies (CSP), HTTP Strict Transport Security (HSTS with preload), X-Content-Type-Options: nosniff, automated rate-limiting against DDoS attacks, and sanitized inputs on both server-side API routes and edge middleware to guarantee zero unauthorized script injection.
              </p>
            </div>

            <div className={styles.globalOverviewCard}>
              <h4 className={styles.globalOverviewCardTitle}>
                Continuous Integration &amp; Automated Test Verification
              </h4>
              <p className={styles.globalOverviewCardDesc}>
                Every repository release passes rigorous CI/CD pipeline validation incorporating static TypeScript compilation, ESLint semantic checks, Lighthouse Core Web Vitals audits, and end-to-end user journey verification. We deliver clean, modular, self-documenting codebases that scale seamlessly with your internal development teams and commercial growth.
              </p>
            </div>

            <div className={styles.globalOverviewCard}>
              <h4 className={styles.globalOverviewCardTitle}>
                Guaranteed SLA &amp; Multi-Channel Technical Support
              </h4>
              <p className={styles.globalOverviewCardDesc}>
                Enterprise clients benefit from dedicated technical account directors, defined response time service level agreements (under 1 hour for critical incidents), proactive 24/7 uptime monitoring, and weekly sprint demos. We function as a seamless extension of your executive leadership, marketing department, and engineering organization.
              </p>
            </div>
          </div>

          <p className={styles.globalOverviewText} style={{ marginTop: "1.25rem", marginBottom: 0, fontSize: "0.82rem", lineHeight: 1.65 }}>
            <strong>Specialized Sector Solutions &amp; Software Architecture:</strong> We provide tailored implementations for 10 primary industries: <Link href="/industries" style={{ color: "#ffbe0b" }}>Real Estate &amp; Construction</Link> (RERA &amp; DLD compliance), <Link href="/industries" style={{ color: "#ffbe0b" }}>Healthcare Networks &amp; Hospitals</Link> (patient privacy &amp; NABH alignment), <Link href="/industries" style={{ color: "#ffbe0b" }}>Retail &amp; Headless E-Commerce</Link> (PCI-DSS &amp; multi-currency checkouts), <Link href="/industries" style={{ color: "#ffbe0b" }}>B2B Manufacturing &amp; Industrial Export</Link>, <Link href="/industries" style={{ color: "#ffbe0b" }}>Hospitality &amp; Luxury Resorts</Link>, <Link href="/industries" style={{ color: "#ffbe0b" }}>Fintech &amp; Banking</Link> (CBB &amp; CBK guidelines), <Link href="/industries" style={{ color: "#ffbe0b" }}>Logistics &amp; Transport</Link>, <Link href="/industries" style={{ color: "#ffbe0b" }}>Education &amp; EdTech</Link>, <Link href="/industries" style={{ color: "#ffbe0b" }}>Salons, Spas &amp; Wellness</Link>, and <Link href="/industries" style={{ color: "#ffbe0b" }}>Automobile Workshops</Link>. Explore our 8 enterprise software solutions: <Link href="/solutions" style={{ color: "#ffbe0b" }}>AI Chatbots</Link>, <Link href="/solutions" style={{ color: "#ffbe0b" }}>AI Agent Workflows</Link>, <Link href="/solutions" style={{ color: "#ffbe0b" }}>WhatsApp Cloud API</Link>, <Link href="/solutions" style={{ color: "#ffbe0b" }}>Recurring Billing APIs</Link>, <Link href="/solutions" style={{ color: "#ffbe0b" }}>GDPR &amp; DPDP Software</Link>, <Link href="/solutions" style={{ color: "#ffbe0b" }}>Digital Lease Systems</Link>, and <Link href="/solutions" style={{ color: "#ffbe0b" }}>WhatsApp Marketing Engines</Link>.
          </p>
        </div>

        {/* Engineering Standards Strip */}
        <div className={styles.assuranceStrip}>
          <div className={styles.assuranceItem}>
            <strong>Sub-Second Speed:</strong> Median LCP &lt; 1.0s across GCC, Indian &amp; Global CDNs
          </div>
          <div className={styles.assuranceItem}>
            <strong>Enterprise Security:</strong> Strict HSTS, A+ SSL, SOC2 Readiness &amp; GDPR Governance
          </div>
          <div className={styles.assuranceItem}>
            <strong>Full IP Ownership:</strong> 100% legal rights to Git code, ad accounts &amp; analytics
          </div>
          <div className={styles.assuranceItem}>
            <strong>Accessibility:</strong> Strict WCAG 2.1 AA compliant semantic HTML architecture
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className={styles.footerBottom}>
          <p className={styles.copyright}>
            &copy; {currentYear} Qubizon Digital Solutions. All rights reserved.
          </p>
          <div className={styles.socialStrip}>
            <a
              href={SITE_CONFIG.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="Qubizon on LinkedIn"
            >
              LinkedIn
            </a>
            <span className={styles.dotDivider}>&bull;</span>
            <a
              href={SITE_CONFIG.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="Qubizon on Instagram"
            >
              Instagram
            </a>
            <span className={styles.dotDivider}>&bull;</span>
            <Link href="/privacy" className={styles.socialLink}>
              Privacy Policy
            </Link>
            <span className={styles.dotDivider}>&bull;</span>
            <Link href="/contact" className={styles.socialLink}>
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
