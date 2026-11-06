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
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    <button
                      type="button"
                      className={styles.dropdownToggle}
                      onClick={() => setIsServicesOpen((prev) => !prev)}
                      aria-expanded={isServicesOpen}
                      aria-haspopup="true"
                    >
                      <span>Services</span>
                      <ChevronDown
                        size={14}
                        aria-hidden="true"
                        style={{
                          transform: isServicesOpen ? "rotate(180deg)" : "none",
                          transition: "transform 0.2s ease",
                        }}
                      />
                    </button>

                    {isServicesOpen && (
                      <div className={styles.dropdownMenu} role="menu" aria-label="Services Submenu">
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
