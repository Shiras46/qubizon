"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Smartphone,
  Monitor,
  Globe,
  Cloud,
  Users,
  Palette,
  TrendingUp,
  Compass,
  Database,
  ArrowRight,
  Sparkles,
  ChevronRight,
} from "lucide-react";
import { ConsultationModal } from "@/components/common/ConsultationModal";
import { type ServiceType } from "@/lib/validation/contactSchema";
import styles from "./ServicesIndex.module.css";

/* Core Services from Image 1 */
interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: typeof Smartphone;
  iconBgColor: string;
  iconColor: string;
  link?: string;
  isCrmTrigger?: boolean;
}

const ALL_SERVICES: ServiceItem[] = [
  {
    id: "mobile-apps",
    title: "Mobile Apps",
    description: "Android and iOS mobile app - native and webview",
    icon: Smartphone,
    iconBgColor: "rgba(0, 72, 142, 0.12)",
    iconColor: "#00488e",
    link: "/contact?service=mobile-apps",
  },
  {
    id: "web-dev",
    title: "Web Development",
    description: "Website designing and development",
    icon: Monitor,
    iconBgColor: "rgba(255, 190, 11, 0.18)",
    iconColor: "#d97706",
    link: "/services/web-development",
  },
  {
    id: "seo",
    title: "SEO",
    description: "Search engine optimization and marketing",
    icon: Globe,
    iconBgColor: "rgba(139, 92, 246, 0.14)",
    iconColor: "#7c3aed",
    link: "/services/seo",
  },
  {
    id: "cloud-service",
    title: "Cloud Service",
    description: "AWS for better speed and security",
    icon: Cloud,
    iconBgColor: "rgba(16, 185, 129, 0.15)",
    iconColor: "#059669",
    link: "/contact?service=cloud",
  },
  {
    id: "smm",
    title: "SMM",
    description: "Social media management and marketing",
    icon: Users,
    iconBgColor: "rgba(244, 63, 94, 0.14)",
    iconColor: "#e11d48",
    link: "/services/social-media-marketing",
  },
  {
    id: "design",
    title: "Design",
    description: "Quality designs for social media and other promotions",
    icon: Palette,
    iconBgColor: "rgba(132, 204, 22, 0.18)",
    iconColor: "#65a30d",
    link: "/contact?service=design",
  },
  {
    id: "offshore",
    title: "Offshore Resource",
    description: "Provide offshore resource to manage your projects",
    icon: TrendingUp,
    iconBgColor: "rgba(249, 115, 22, 0.15)",
    iconColor: "#ea580c",
    link: "/contact?service=offshore",
  },
  {
    id: "consulting",
    title: "Consulting",
    description: "Helps to find solution for your business",
    icon: Compass,
    iconBgColor: "rgba(6, 182, 212, 0.15)",
    iconColor: "#0891b2",
    link: "/contact?service=consulting",
  },
  {
    id: "crm-suite",
    title: "CRM & Automation",
    description: "Automated lead management, pipelines & connected operations",
    icon: Database,
    iconBgColor: "rgba(0, 72, 142, 0.16)",
    iconColor: "#00488e",
    link: "/services/crm",
    isCrmTrigger: true,
  },
];

export function ServicesPageClient() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<ServiceType>("multiple-services");

  const openInquiry = (topic: string) => {
    let serviceType: ServiceType = "multiple-services";
    const lower = topic.toLowerCase();
    if (lower.includes("web") || lower.includes("mobile") || lower.includes("cloud")) {
      serviceType = "web-development";
    } else if (lower.includes("seo")) {
      serviceType = "seo";
    } else if (lower.includes("smm") || lower.includes("social")) {
      serviceType = "social-media-marketing";
    } else if (lower.includes("ads") || lower.includes("paid")) {
      serviceType = "paid-advertising";
    } else if (lower.includes("content")) {
      serviceType = "content-marketing";
    }
    setSelectedService(serviceType);
    setIsModalOpen(true);
  };

  return (
    <>
      {/* Top View Switcher Navigation */}
      <section className={styles.tabBarSection} aria-label="Service Category Switcher">
        <div className="container">
          <div className={styles.tabBarWrapper}>
            <div className={`${styles.tabBtn} ${styles.tabBtnActive}`}>
              <Sparkles size={14} className={styles.tabIcon} aria-hidden="true" />
              <span>All Agency Services</span>
              <span className={styles.tabBadge}>8 Disciplines</span>
            </div>

            <Link href="/services/crm" className={styles.tabBtn}>
              <Database size={14} className={styles.tabIcon} aria-hidden="true" />
              <span>CRM &amp; Connected Platform</span>
              <span className={styles.tabBadgePulse}>Explore CRM Page ➔</span>
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION: All Services Grid (Image 1 Model) */}
      <section className={styles.servicesSection} aria-labelledby="all-services-heading">
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionCategory}>• COMPREHENSIVE DIGITAL CAPABILITIES /</span>
            <h2 id="all-services-heading" className={styles.sectionHeading}>
              End-to-End Digital Engineering &amp; Growth.
            </h2>
            <p className={styles.sectionDescription}>
              From custom mobile and Next.js applications to technical search authority, scalable AWS cloud infrastructure, and automated CRM pipelines.
            </p>
          </div>

          <div className={styles.minimalCardsGrid}>
            {ALL_SERVICES.map((srv) => {
              const IconComp = srv.icon;

              if (srv.isCrmTrigger) {
                return (
                  <Link
                    key={srv.id}
                    href="/services/crm"
                    className={`${styles.minimalCard} ${styles.crmTriggerCard}`}
                    aria-label="Navigate to CRM & Connected Platform Page"
                  >
                    <div className={styles.cardIconWrapper}>
                      <span
                        className={styles.iconCircle}
                        style={{ backgroundColor: srv.iconBgColor }}
                      >
                        <IconComp size={22} style={{ color: srv.iconColor }} aria-hidden="true" />
                      </span>
                      <span className={styles.crmInteractivePill}>View CRM Page ➔</span>
                    </div>

                    <h3 className={styles.minimalCardTitle}>{srv.title}</h3>
                    <p className={styles.minimalCardDesc}>{srv.description}</p>

                    <div className={styles.minimalCardFooter}>
                      <span className={styles.crmLinkText}>
                        <span>Explore CRM Platform</span>
                        <ArrowRight size={14} aria-hidden="true" />
                      </span>
                    </div>
                  </Link>
                );
              }

              return (
                <div key={srv.id} className={styles.minimalCard}>
                  <div className={styles.cardIconWrapper}>
                    <span
                      className={styles.iconCircle}
                      style={{ backgroundColor: srv.iconBgColor }}
                    >
                      <IconComp size={22} style={{ color: srv.iconColor }} aria-hidden="true" />
                    </span>
                  </div>

                  <h3 className={styles.minimalCardTitle}>{srv.title}</h3>
                  <p className={styles.minimalCardDesc}>{srv.description}</p>

                  <div className={styles.minimalCardFooter}>
                    {srv.link?.startsWith("/") && !srv.link.includes("?") ? (
                      <Link href={srv.link} className={styles.cardActionLink}>
                        <span>Learn More</span>
                        <ArrowRight size={13} aria-hidden="true" />
                      </Link>
                    ) : (
                      <button
                        type="button"
                        onClick={() => openInquiry(srv.title)}
                        className={styles.cardActionBtn}
                      >
                        <span>Start Inquiry</span>
                        <ChevronRight size={13} aria-hidden="true" />
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Consultation Modal */}
      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialService={selectedService}
      />
    </>
  );
}
