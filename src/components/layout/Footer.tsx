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
              <div className={styles.contactIconWrapper} style={{ background: "rgba(255, 255, 255, 0.15)", color: "#FFFFFF" }}>
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
            <Link href="/services" className={styles.footerLinkHighlight}>
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
            <Link href="/solutions" className={styles.footerLinkHighlight}>
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
            <Link href="/industries" className={styles.footerLinkHighlight}>
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
            <Link href="/locations" className={styles.footerLinkHighlight}>
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
            <Link href="/contact" className={styles.footerLinkHighlight}>
              Schedule Technical Discovery &rarr;
            </Link>
          </div>
        </div>

        {/* Global 24-Country Corridors Bar */}
        <div className={styles.corridorsBar}>
          <span className={styles.corridorsTitle}>
            Global Software Development &amp; Marketing Corridors:
          </span>
          <div className={styles.corridorsList}>
            {GLOBAL_COUNTRIES.map((country, index) => (
              <Link
                key={index}
                href={country.href}
                className={styles.corridorTag}
              >
                <span>{country.flag}</span>
                <span>{country.name}</span>
              </Link>
            ))}
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
