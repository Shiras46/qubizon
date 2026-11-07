"use client";

import { useState, useRef } from "react";
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
  Check,
  Sparkles,
  ExternalLink,
  ChevronRight,
  X,
} from "lucide-react";
import { ConsultationModal } from "@/components/common/ConsultationModal";
import { type ServiceType } from "@/lib/validation/contactSchema";
import styles from "./ServicesIndex.module.css";

/* 1. Core Services from Image 1 */
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
    isCrmTrigger: true,
  },
];

/* 2. CRM Modules from Image 2 */
interface CrmCard {
  id: string;
  category: string;
  title: string;
  description: string;
  accentColor: string;
  bullets: string[];
  actionLabel: string;
}

const CRM_MODULES: CrmCard[] = [
  {
    id: "lead-mgmt",
    category: "LEAD MANAGEMENT",
    title: "Automated Lead Management",
    accentColor: "#00488e",
    description:
      "Every marketing channel feeds directly into your unified sales CRM system, ensuring prospective leads arrive automatically tagged, categorized, and scored for immediate sales follow-up.",
    bullets: [
      "Custom lead capture forms",
      "Multi-channel & social lead capture",
      "Customizable lead scoring & pipeline status",
    ],
    actionLabel: "Explore Lead Management",
  },
  {
    id: "crm-core",
    category: "CRM",
    title: "CRM",
    accentColor: "#0284c7",
    description:
      "Every contact record holds the stage, the tags and the full communication history side by side.",
    bullets: [
      "Visual sales pipeline",
      "Unified inbox",
      "Centralized contact records",
    ],
    actionLabel: "Explore CRM",
  },
  {
    id: "booking-engine",
    category: "ADVANCED BOOKING ENGINE",
    title: "Booking",
    accentColor: "#d97706",
    description:
      "The booking page reflects your live calendar, your service durations and your buffers — and takes payment at the moment of booking.",
    bullets: [
      "Custom appointment types",
      "Calendar sync",
      "Time-zone intelligence",
    ],
    actionLabel: "Explore Booking",
  },
  {
    id: "business-ops",
    category: "BUSINESS OPERATIONS",
    title: "Business Operations",
    accentColor: "#16a34a",
    description:
      "Every job carries its task list, its assignments and its deadlines, attached to the customer it belongs to.",
    bullets: [
      "Dynamic task checklists & deadlines",
      "Automated job routing",
      "Centralized customer records",
    ],
    actionLabel: "Explore Business Operations",
  },
  {
    id: "workflow-automation",
    category: "WORKFLOW AUTOMATION",
    title: "Workflow Automation",
    accentColor: "#dc2626",
    description:
      "Workflows fire on a trigger, templates start every job from your best version of it, and approvals are captured on a form rather than in a thread.",
    bullets: [
      "Instant event triggers",
      "Best-practice SOP templates",
      "Form-based digital sign-offs",
    ],
    actionLabel: "Explore Automation",
  },
  {
    id: "client-mgmt",
    category: "CLIENT MANAGEMENT",
    title: "Client Management",
    accentColor: "#059669",
    description:
      "Your team manages every client relationship centrally, and each client gets a professional login to their own project.",
    bullets: [
      "Dedicated client portal login",
      "Milestone progress tracking",
      "Direct asset and file repository",
    ],
    actionLabel: "Explore Client Management",
  },
];

/* 3. Seven Connected Stages from Image 3 */
interface PipelineStep {
  step: number;
  category: "CRM" | "BOOKING" | "OPERATIONS";
  title: string;
  tagline: string;
  description: string;
}

const PIPELINE_STEPS: PipelineStep[] = [
  {
    step: 1,
    category: "CRM",
    title: "Lead",
    tagline: "Capture every enquiry",
    description: "Forms on your site and social channels feed straight into the platform.",
  },
  {
    step: 2,
    category: "CRM",
    title: "CRM",
    tagline: "Organise in one pipeline",
    description: "Every contact, tagged and staged, with the full history attached.",
  },
  {
    step: 3,
    category: "CRM",
    title: "Follow-up",
    tagline: "Automate the nurture",
    description: "Email and SMS sequences keep conversations warm without manual chasing.",
  },
  {
    step: 4,
    category: "BOOKING",
    title: "Booking",
    tagline: "Confirm the slot",
    description: "Clients pick a time that matches real availability and pay a deposit.",
  },
  {
    step: 5,
    category: "OPERATIONS",
    title: "Customer",
    tagline: "Onboard with a portal",
    description: "A professional login where clients see status, files and next steps.",
  },
  {
    step: 6,
    category: "OPERATIONS",
    title: "Operations",
    tagline: "Deliver on schedule",
    description: "Tasks, workflow templates and approvals keep the job moving.",
  },
  {
    step: 7,
    category: "OPERATIONS",
    title: "Growth",
    tagline: "Repeat what works",
    description: "Turn your best process into a template and run it again on the next job.",
  },
];

export function ServicesPageClient() {
  const [activeTab, setActiveTab] = useState<"services" | "crm">("services");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<ServiceType>("multiple-services");
  const crmSectionRef = useRef<HTMLElement | null>(null);

  const handleCrmClick = () => {
    setActiveTab("crm");
    setTimeout(() => {
      crmSectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

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
      {/* View Switcher Tabs (Pro-Level Quick Switch) */}
      <section className={styles.tabBarSection} aria-label="Service Category Switcher">
        <div className="container">
          <div className={styles.tabBarWrapper}>
            <button
              type="button"
              onClick={() => setActiveTab("services")}
              className={`${styles.tabBtn} ${activeTab === "services" ? styles.tabBtnActive : ""}`}
            >
              <Sparkles size={14} className={styles.tabIcon} aria-hidden="true" />
              <span>All Agency Services</span>
              <span className={styles.tabBadge}>8 Disciplines</span>
            </button>

            <button
              type="button"
              onClick={handleCrmClick}
              className={`${styles.tabBtn} ${activeTab === "crm" ? styles.tabBtnActive : ""}`}
            >
              <Database size={14} className={styles.tabIcon} aria-hidden="true" />
              <span>CRM &amp; Connected Platform</span>
              <span className={styles.tabBadgePulse}>Interactive</span>
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 1: All Services Grid (Image 1 Model) */}
      <section
        className={`${styles.servicesSection} ${activeTab === "services" ? styles.sectionVisible : ""}`}
        aria-labelledby="all-services-heading"
      >
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
                  <button
                    key={srv.id}
                    type="button"
                    onClick={handleCrmClick}
                    className={`${styles.minimalCard} ${styles.crmTriggerCard}`}
                    aria-label="View CRM & Connected Platform Details"
                  >
                    <div className={styles.cardIconWrapper}>
                      <span
                        className={styles.iconCircle}
                        style={{ backgroundColor: srv.iconBgColor }}
                      >
                        <IconComp size={22} style={{ color: srv.iconColor }} aria-hidden="true" />
                      </span>
                      <span className={styles.crmInteractivePill}>Click to Inspect ➔</span>
                    </div>

                    <h3 className={styles.minimalCardTitle}>{srv.title}</h3>
                    <p className={styles.minimalCardDesc}>{srv.description}</p>

                    <div className={styles.minimalCardFooter}>
                      <span className={styles.crmLinkText}>
                        <span>Explore CRM Details</span>
                        <ArrowRight size={14} aria-hidden="true" />
                      </span>
                    </div>
                  </button>
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

      {/* SECTION 2 & 3: CRM Platform Details (Image 2) & Connected Web (Image 3) */}
      <section
        ref={crmSectionRef}
        id="crm-platform"
        className={`${styles.crmSuiteSection} ${activeTab === "crm" ? styles.sectionActive : ""}`}
        aria-labelledby="crm-suite-heading"
      >
        <div className="container">
          {/* Header Banner */}
          <div className={styles.crmHeaderBanner}>
            <div className={styles.crmHeaderLeft}>
              <span className={styles.crmBadge}>
                <Database size={13} aria-hidden="true" />
                ENTERPRISE OPERATIONAL SUITE
              </span>
              <h2 id="crm-suite-heading" className={styles.crmHeading}>
                CRM, Automation &amp; Business Systems
              </h2>
              <p className={styles.crmLead}>
                Every marketing lead, customer touchpoint, calendar booking, and project delivery task synchronized into one unified operational workspace.
              </p>
            </div>

            {activeTab === "crm" && (
              <button
                type="button"
                onClick={() => setActiveTab("services")}
                className={styles.switchBackBtn}
                aria-label="Back to All Agency Services"
              >
                <span>View All Services</span>
                <X size={14} aria-hidden="true" />
              </button>
            )}
          </div>

          {/* Part A: 6 CRM Modular Cards (Image 2 Reference) */}
          <div className={styles.crmModulesGrid}>
            {CRM_MODULES.map((mod) => (
              <article
                key={mod.id}
                className={styles.crmModuleCard}
                style={{ borderTopColor: mod.accentColor }}
              >
                <div className={styles.crmCardHead}>
                  <span
                    className={styles.crmCategoryTag}
                    style={{ color: mod.accentColor }}
                  >
                    {mod.category}
                  </span>
                  <h3 className={styles.crmCardTitle}>{mod.title}</h3>
                </div>

                <p className={styles.crmCardDescription}>{mod.description}</p>

                <ul className={styles.crmBulletList}>
                  {mod.bullets.map((bullet, idx) => (
                    <li key={idx} className={styles.crmBulletItem}>
                      <span className={styles.checkIcon} aria-hidden="true">
                        <Check size={13} strokeWidth={2.6} />
                      </span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <button
                  type="button"
                  onClick={() => openInquiry(mod.title)}
                  className={styles.crmCardAction}
                  style={{ color: mod.accentColor }}
                >
                  <span>{mod.actionLabel}</span>
                  <ArrowRight size={14} aria-hidden="true" />
                </button>
              </article>
            ))}
          </div>

          {/* Part B: One Connected Web Pipeline (Image 3 Reference) */}
          <div className={styles.connectedPipelineStage}>
            <div className={styles.pipelineIntro}>
              <h3 className={styles.pipelineTitle}>
                One connected web, <span className={styles.pipelineAccent}>end to end</span>
              </h3>
              <p className={styles.pipelineSubtitle}>
                Every stage hands off to the next automatically. No re-keying a lead as it becomes a booking, and no losing a customer between the sale and the job.
              </p>
            </div>

            {/* Desktop & Mobile Responsive Connected Flow */}
            <div className={styles.pipelineTrackContainer}>
              <div className={styles.pipelineConnectorLine} aria-hidden="true" />

              <div className={styles.pipelineStepsList}>
                {PIPELINE_STEPS.map((step) => (
                  <div key={step.step} className={styles.pipelineStepItem}>
                    {/* Numbered Node Pill */}
                    <div className={styles.stepNodeBadge}>
                      <span>{step.step}</span>
                    </div>

                    {/* Step Content Card */}
                    <div className={styles.stepCardContent}>
                      <span className={styles.stepCategoryTag}>{step.category}</span>
                      <h4 className={styles.stepTitle}>{step.title}</h4>
                      <p className={styles.stepTagline}>{step.tagline}</p>
                      <p className={styles.stepDetails}>{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Pipeline CTA */}
            <div className={styles.pipelineFooterCta}>
              <button
                type="button"
                onClick={() => openInquiry("Connected Web CRM Architecture")}
                className={styles.pipelineActionBtn}
              >
                <span>Deploy This Architecture for Your Business</span>
                <ArrowRight size={15} aria-hidden="true" />
              </button>
            </div>
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
