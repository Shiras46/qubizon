"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { SITE_CONFIG, MAIN_NAV_ITEMS, CORE_SERVICES } from "@/lib/constants";
import styles from "./Navbar.module.css";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setIsServicesOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsServicesOpen(false);
    }, 180);
  };

  const handleServicesClick = (e: React.MouseEvent) => {
    // If closed (e.g., touch device or first interaction), open dropdown
    // If already open (e.g., on hover or second click), allow navigation to /services
    if (!isServicesOpen) {
      e.preventDefault();
      setIsServicesOpen(true);
    } else {
      setIsServicesOpen(false);
    }
  };

  // Close menus on ESC key press
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        if (isServicesOpen) setIsServicesOpen(false);
        if (isOpen) setIsOpen(false);
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, isServicesOpen]);

  // Clean up any lingering close timeouts
  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsServicesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.navContainer}`}>
        <Link href="/" className={styles.brand} aria-label={`${SITE_CONFIG.name} Home`}>
          <Image
            src="/Logo Png-07.png"
            alt={SITE_CONFIG.name}
            width={145}
            height={42}
            priority
            className={styles.brandLogo}
          />
        </Link>

        {/* Desktop Navigation */}
        <nav aria-label="Main Navigation">
          <ul className={styles.navLinks}>
            {MAIN_NAV_ITEMS.map((item) => {
              if (item.href === "/services") {
                return (
                  <li
                    key={item.href}
                    ref={dropdownRef}
                    className={styles.dropdownWrapper}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Link
                      href="/services"
                      className={styles.dropdownToggle}
                      onClick={handleServicesClick}
                      aria-expanded={isServicesOpen}
                      aria-haspopup="true"
                    >
                      <span>Services</span>
                      <ChevronDown
                        size={14}
                        aria-hidden="true"
                        className={`${styles.dropdownChevron} ${
                          isServicesOpen ? styles.chevronOpen : ""
                        }`}
                      />
                    </Link>

                    {isServicesOpen && (
                      <div
                        className={styles.dropdownMenu}
                        role="menu"
                        aria-label="Services Submenu"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                      >
                        <Link
                          href="/services"
                          className={styles.dropdownItem}
                          role="menuitem"
                          onClick={() => setIsServicesOpen(false)}
                        >
                          <span className={styles.dropdownTitle}>All Services Overview</span>
                          <span className={styles.dropdownDesc}>Overview of our unified digital disciplines</span>
                        </Link>
                        {CORE_SERVICES.map((service) => (
                          <Link
                            key={service.id}
                            href={service.href}
                            className={styles.dropdownItem}
                            role="menuitem"
                            onClick={() => setIsServicesOpen(false)}
                          >
                            <span className={styles.dropdownTitle}>{service.title}</span>
                            <span className={styles.dropdownDesc}>{service.shortDescription}</span>
                          </Link>
                        ))}
                        <Link
                          href="/services/crm"
                          className={styles.dropdownItem}
                          role="menuitem"
                          onClick={() => setIsServicesOpen(false)}
                        >
                          <span className={styles.dropdownTitle}>CRM &amp; Workflow Automation</span>
                          <span className={styles.dropdownDesc}>Automated lead capture, booking engine &amp; pipeline management</span>
                        </Link>
                        <Link
                          href="/solutions"
                          className={styles.dropdownItem}
                          role="menuitem"
                          onClick={() => setIsServicesOpen(false)}
                        >
                          <span className={styles.dropdownTitle}>AI &amp; Enterprise Solutions</span>
                          <span className={styles.dropdownDesc}>AI chatbots, agentic workflows &amp; WhatsApp Business API</span>
                        </Link>
                        <Link
                          href="/industries"
                          className={styles.dropdownItem}
                          role="menuitem"
                          onClick={() => setIsServicesOpen(false)}
                        >
                          <span className={styles.dropdownTitle}>Software by Industry</span>
                          <span className={styles.dropdownDesc}>Tailored architectures for Real Estate, Healthcare, Retail &amp; B2B</span>
                        </Link>
                        <Link
                          href="/locations/uae"
                          className={styles.dropdownItem}
                          role="menuitem"
                          onClick={() => setIsServicesOpen(false)}
                          style={{ borderTop: "1px solid rgba(0, 72, 142, 0.1)", background: "rgba(0, 72, 142, 0.03)" }}
                        >
                          <span className={styles.dropdownTitle} style={{ color: "var(--brand-blue)" }}>UAE &amp; GCC Enterprise Hub ➔</span>
                          <span className={styles.dropdownDesc}>Custom Next.js &amp; digital growth across Dubai, Abu Dhabi &amp; GCC</span>
                        </Link>
                      </div>
                    )}
                  </li>
                );
              }

              return (
                <li key={item.href}>
                  <Link href={item.href} className={styles.navLink}>
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className={styles.actions}>
          <Link href="/contact" className={styles.ctaButton}>
            <span>Start a Project</span>
            <span className={styles.ctaArrowCircle} aria-hidden="true">
              <ArrowRight size={12} />
            </span>
          </Link>

          <button
            type="button"
            className={styles.mobileToggle}
            onClick={() => setIsOpen((prev) => !prev)}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            aria-label={isOpen ? "Close main navigation menu" : "Open main navigation menu"}
          >
            {isOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div id="mobile-navigation" className={styles.mobileDrawer} role="region" aria-label="Mobile Navigation">
          <ul className={styles.mobileNavLinks}>
            {MAIN_NAV_ITEMS.map((item) => {
              if (item.href === "/services") {
                return (
                  <li key={item.href}>
                    <Link
                      href="/services"
                      className={styles.mobileNavLink}
                      onClick={() => setIsOpen(false)}
                    >
                      Services
                    </Link>
                    <div className={styles.mobileSubNav}>
                      {CORE_SERVICES.map((service) => (
                        <Link
                          key={service.id}
                          href={service.href}
                          className={styles.mobileSubLink}
                          onClick={() => setIsOpen(false)}
                        >
                          • {service.title}
                        </Link>
                      ))}
                      <Link
                        href="/services/crm"
                        className={styles.mobileSubLink}
                        onClick={() => setIsOpen(false)}
                      >
                        • CRM &amp; Workflow Automation
                      </Link>
                      <Link
                        href="/solutions"
                        className={styles.mobileSubLink}
                        onClick={() => setIsOpen(false)}
                      >
                        • AI &amp; Enterprise Solutions
                      </Link>
                      <Link
                        href="/industries"
                        className={styles.mobileSubLink}
                        onClick={() => setIsOpen(false)}
                      >
                        • Solutions by Industry
                      </Link>
                      <Link
                        href="/locations/uae"
                        className={styles.mobileSubLink}
                        onClick={() => setIsOpen(false)}
                        style={{ color: "var(--brand-blue)", fontWeight: 700 }}
                      >
                        ➔ UAE &amp; GCC Hub (Dubai)
                      </Link>
                    </div>
                  </li>
                );
              }
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={styles.mobileNavLink}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <Link
            href="/contact"
            className={styles.mobileCta}
            onClick={() => setIsOpen(false)}
          >
            Let&apos;s Talk About Your Project
          </Link>
        </div>
      )}
    </header>
  );
}
