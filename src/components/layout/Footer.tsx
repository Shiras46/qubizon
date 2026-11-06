import Link from "next/link";
import Image from "next/image";
import { SITE_CONFIG, CORE_SERVICES } from "@/lib/constants";
import styles from "./Footer.module.css";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer} aria-label="Site Footer">
      <div className={styles.container}>
        <div className={styles.footerTop}>
          <div className={styles.footerBrand}>
            <Link href="/" className={styles.brand} aria-label={`${SITE_CONFIG.name} Home`}>
              <Image
                src="/Logo Png-12.png"
                alt={SITE_CONFIG.name}
                width={150}
                height={46}
                className={styles.brandLogo}
              />
            </Link>
            <p className={styles.brandTagline}>Creativity + Engineering.</p>
            <p className={styles.brandSub}>
              Building high-performance Next.js web applications, technical SEO graphs, and synchronized digital ecosystems.
            </p>
          </div>

          <div className={styles.footerLinks}>
            <div className={styles.linkCol}>
              <h4 className={styles.linkTitle}>Services</h4>
              {CORE_SERVICES.map((service) => (
                <Link key={service.id} href={service.href} className={styles.footerLink}>
                  {service.title}
                </Link>
              ))}
            </div>

            <div className={styles.linkCol}>
              <h4 className={styles.linkTitle}>Company</h4>
              <Link href="/about" className={styles.footerLink}>
                About Us
              </Link>
              <Link href="/services" className={styles.footerLink}>
                All Services
              </Link>
              <Link href="/work" className={styles.footerLink}>
                Showcase & Work
              </Link>
              <Link href="/blog" className={styles.footerLink}>
                Engineering Insights
              </Link>
              <Link href="/locations" className={styles.footerLink}>
                Service Areas (Kerala)
              </Link>
              <Link href="/locations/kozhikode" className={styles.footerLink}>
                Kozhikode Agency
              </Link>
              <Link href="/locations/thrissur" className={styles.footerLink}>
                Thrissur Agency
              </Link>
            </div>

            <div className={styles.linkCol}>
              <h4 className={styles.linkTitle}>Connect</h4>
              <a
                href={SITE_CONFIG.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.footerLink}
              >
                Instagram: @qubizon
              </a>
              <a
                href={SITE_CONFIG.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.footerLink}
              >
                LinkedIn: Qubizon
              </a>
              <a href={`tel:${SITE_CONFIG.phoneTel}`} className={styles.footerLink}>
                Phone: {SITE_CONFIG.phone}
              </a>
              <a href={`mailto:${SITE_CONFIG.email}`} className={styles.footerLink}>
                Email: {SITE_CONFIG.email}
              </a>
              <a
                href="https://wa.me/917902911961"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.footerLink}
              >
                WhatsApp Consultation
              </a>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p>&copy; {currentYear} Qubizon Digital Solutions. All rights reserved.</p>
          <div className={styles.legalLinks}>
            <Link href="/privacy" className={styles.legalLink}>
              Privacy Policy
            </Link>
            <Link href="/contact" className={styles.legalLink}>
              Contact & Project Inquiry
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
