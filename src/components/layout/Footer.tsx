import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MessageCircle, MapPin, ExternalLink, ArrowRight } from "lucide-react";
import { SITE_CONFIG, CORE_SERVICES } from "@/lib/constants";
import styles from "./Footer.module.css";

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
              Qubizon Digital Solutions is an enterprise software engineering and digital growth collective. We architect high-performance Next.js 15 web applications, technical SEO knowledge graphs, high-intent PPC advertising campaigns, and automated CRM pipelines for ambitious commercial brands across Kozhikode, Thrissur, the UAE, Saudi Arabia, Qatar, Kuwait, Bahrain, and Oman.
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
                <span className={styles.contactCardLabel}>Commercial Corridors</span>
                <span className={styles.contactCardValue}>Kerala (HQ) &bull; UAE &bull; GCC</span>
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

          {/* Col 2: CRM & Connected Suite */}
          <div className={styles.linkCol}>
            <h4 className={styles.linkTitle}>CRM &amp; Business Suite</h4>
            <Link href="/services/crm#lead-management" className={styles.footerLink}>
              Automated Lead Capture
            </Link>
            <Link href="/services/crm#pipeline" className={styles.footerLink}>
              Visual Sales Pipeline
            </Link>
            <Link href="/services/crm#booking" className={styles.footerLink}>
              Live Booking &amp; Calendar Sync
            </Link>
            <Link href="/services/crm#automation" className={styles.footerLink}>
              Workflow &amp; SLA Automation
            </Link>
            <Link href="/services/crm#client-management" className={styles.footerLink}>
              Client Management Portal
            </Link>
            <Link href="/services/crm#whatsapp" className={styles.footerLink}>
              WhatsApp Business API Hub
            </Link>
            <Link href="/services/crm" className={styles.footerLink} style={{ color: "#ffbe0b", fontWeight: 600 }}>
              Explore CRM Solutions &rarr;
            </Link>
          </div>

          {/* Col 3: Solutions by Industry */}
          <div className={styles.linkCol}>
            <h4 className={styles.linkTitle}>Solutions by Industry</h4>
            <Link href="/work#real-estate" className={styles.footerLink}>
              Real Estate &amp; Property
            </Link>
            <Link href="/work#healthcare" className={styles.footerLink}>
              Healthcare &amp; Hospitals
            </Link>
            <Link href="/work#retail" className={styles.footerLink}>
              Retail &amp; E-Commerce
            </Link>
            <Link href="/work#manufacturing" className={styles.footerLink}>
              Manufacturing &amp; Export
            </Link>
            <Link href="/work#hospitality" className={styles.footerLink}>
              Hospitality &amp; Dining
            </Link>
            <Link href="/work#fintech" className={styles.footerLink}>
              Fintech &amp; Banking
            </Link>
            <Link href="/work#logistics" className={styles.footerLink}>
              Logistics &amp; Transport
            </Link>
          </div>

          {/* Col 4: GCC & Regional Hubs */}
          <div className={styles.linkCol}>
            <h4 className={styles.linkTitle}>GCC &amp; Regional Hubs</h4>
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
              <span className={styles.countryFlag}>🇴🇲</span> Oman
            </Link>
            <Link href="/locations" className={styles.footerLink} style={{ color: "#ffbe0b", fontWeight: 600 }}>
              <span className={styles.countryFlag}>🇮🇳</span> Kerala (Kozhikode &bull; Thrissur) &rarr;
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
              🇦🇪 UAE FTA Compliance
            </Link>
            <Link href="/contact" className={styles.footerLink} style={{ color: "#ffbe0b", fontWeight: 600 }}>
              Schedule Technical Discovery &rarr;
            </Link>
          </div>
        </div>

        {/* Engineering Standards Strip */}
        <div className={styles.assuranceStrip}>
          <div className={styles.assuranceItem}>
            <strong>Sub-Second Speed:</strong> Median LCP &lt; 1.0s across GCC &amp; Indian CDNs
          </div>
          <div className={styles.assuranceItem}>
            <strong>Enterprise Security:</strong> Strict HSTS, A+ SSL &amp; DPDP / GDPR Governance
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
