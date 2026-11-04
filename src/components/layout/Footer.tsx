import Link from "next/link";
import { SITE_CONFIG, MAIN_NAV_ITEMS, CORE_SERVICES } from "@/lib/constants";
import styles from "./Footer.module.css";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer} aria-label="Site Footer">
      <div className={`container ${styles.footerGrid}`}>
        <div className={styles.brandCol}>
          <Link href="/" className={styles.brand}>
            <div className={styles.cubeLogo} aria-hidden="true">Q</div>
            <span className={styles.brandTitle}>{SITE_CONFIG.name}</span>
          </Link>
          <p className={styles.slogan}>{SITE_CONFIG.slogan}</p>
          <p className={styles.description}>{SITE_CONFIG.description}</p>

          <div className={styles.contactBlock}>
            <div>
              <span>Email: </span>
              <a href={`mailto:${SITE_CONFIG.email}`} className={styles.contactLink}>
                {SITE_CONFIG.email}
              </a>
            </div>
            <div>
              <span>Phone: </span>
              <a href={`tel:${SITE_CONFIG.phoneTel}`} className={styles.contactLink}>
                {SITE_CONFIG.phone}
              </a>
            </div>
          </div>

          <ul className={styles.socialList} aria-label="Official Social Profiles">
            <li>
              <a
                href={SITE_CONFIG.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="Qubizon Digital Solutions on LinkedIn"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect x="2" y="9" width="4" height="12"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
            </li>
            <li>
              <a
                href={SITE_CONFIG.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="Qubizon on Instagram"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className={styles.colHeading}>Navigation</h2>
          <ul className={styles.linkList}>
            {MAIN_NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={styles.footerLink}>
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/blog" className={styles.footerLink}>
                Blog & Insights
              </Link>
            </li>
            <li>
              <Link href="/privacy" className={styles.footerLink}>
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className={styles.colHeading}>Core Disciplines</h2>
          <ul className={styles.linkList}>
            {CORE_SERVICES.map((service) => (
              <li key={service.id}>
                <Link href={service.href} className={styles.footerLink}>
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className={styles.colHeading}>Service Areas</h2>
          <ul className={styles.linkList}>
            <li>
              <Link href="/locations/kozhikode" className={styles.footerLink}>
                Kozhikode, Kerala
              </Link>
            </li>
            <li>
              <Link href="/locations/thrissur" className={styles.footerLink}>
                Thrissur, Kerala
              </Link>
            </li>
            <li>
              <Link href="/locations" className={styles.footerLink}>
                All Kerala Hubs
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className={`container ${styles.bottomBar}`}>
        <p>&copy; {currentYear} {SITE_CONFIG.name}. All rights reserved.</p>
        <p>Digital Marketing & Web Development • Kerala, India</p>
      </div>
    </footer>
  );
}
