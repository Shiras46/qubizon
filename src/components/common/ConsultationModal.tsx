"use client";

import { useState, useEffect, useRef, FormEvent } from "react";
import { X, CheckCircle2, ShieldCheck, ArrowRight, Loader2 } from "lucide-react";
import { ALLOWED_SERVICES, type ServiceType } from "@/lib/validation/contactSchema";
import styles from "./ConsultationModal.module.css";

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: ServiceType;
}

export function ConsultationModal({ isOpen, onClose, initialService = "web-development" }: ConsultationModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const firstInputRef = useRef<HTMLInputElement>(null);

  const [service, setService] = useState<ServiceType>(initialService);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [projectSummary, setProjectSummary] = useState("");
  const [privacyAcknowledged, setPrivacyAcknowledged] = useState(false);
  const [websiteConfirm, setWebsiteConfirm] = useState(""); // Honeypot field

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  // Focus trap & ESC key handler
  useEffect(() => {
    if (!isOpen) return;

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        onClose();
        return;
      }

      if (e.key === "Tab" && modalRef.current) {
        const focusableElements = modalRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusableElements.length === 0) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    // Lock body scroll
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // Focus initial input
    setTimeout(() => {
      firstInputRef.current?.focus();
    }, 50);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setFormError(null);

    // Client-side quick checks
    if (!fullName.trim() || !email.trim() || !projectSummary.trim()) {
      setFormError("Please provide your name, business email, and a brief project overview.");
      return;
    }

    if (!privacyAcknowledged) {
      setFormError("Please acknowledge the privacy terms before submitting.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service,
          fullName: fullName.trim(),
          email: email.trim(),
          phone: phone.trim() ? phone.trim() : undefined,
          projectSummary: projectSummary.trim(),
          privacyAcknowledged: true,
          website_confirm: websiteConfirm, // Honeypot
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Submission could not be completed. Please try again.");
      }

      setIsSuccess(true);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "An unexpected error occurred.";
      setFormError(message);
    } finally {
      setIsSubmitting(false);
    }
  }

  function handleReset() {
    setIsSuccess(false);
    setFullName("");
    setEmail("");
    setPhone("");
    setProjectSummary("");
    setPrivacyAcknowledged(false);
    onClose();
  }

  return (
    <div
      className={styles.backdrop}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="presentation"
    >
      <div
        ref={modalRef}
        className={styles.modal}
        role="dialog"
        aria-modal="true"
        aria-labelledby="consultation-modal-title"
      >
        <button
          type="button"
          className={styles.closeButton}
          onClick={onClose}
          aria-label="Close consultation modal"
        >
          <X size={20} aria-hidden="true" />
        </button>

        {!isSuccess ? (
          <>
            <div className={styles.badge}>
              <ShieldCheck size={14} aria-hidden="true" />
              <span>Direct Strategy Discovery</span>
            </div>

            <h2 id="consultation-modal-title" className={styles.title}>
              Request a Technical Discovery Session
            </h2>
            <p className={styles.description}>
              Speak directly with our senior engineers and digital marketing strategists. We evaluate your
              growth bottlenecks across Kerala and global markets.
            </p>

            <form onSubmit={handleSubmit} className={styles.form} noValidate>
              {/* Honeypot */}
              <input
                type="text"
                name="website_confirm"
                value={websiteConfirm}
                onChange={(e) => setWebsiteConfirm(e.target.value)}
                tabIndex={-1}
                autoComplete="off"
                className={styles.honeypot}
                aria-hidden="true"
              />

              <div className={styles.row}>
                <div className={styles.formGroup}>
                  <label htmlFor="modal-fullname" className={styles.label}>
                    Your Name *
                  </label>
                  <input
                    ref={firstInputRef}
                    id="modal-fullname"
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Rahul Menon"
                    className={styles.input}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="modal-email" className={styles.label}>
                    Business Email *
                  </label>
                  <input
                    id="modal-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@company.com"
                    className={styles.input}
                  />
                </div>
              </div>

              <div className={styles.row}>
                <div className={styles.formGroup}>
                  <label htmlFor="modal-phone" className={styles.label}>
                    Phone Number (Optional)
                  </label>
                  <input
                    id="modal-phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    className={styles.input}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="modal-service" className={styles.label}>
                    Primary Focus *
                  </label>
                  <select
                    id="modal-service"
                    value={service}
                    onChange={(e) => setService(e.target.value as ServiceType)}
                    className={styles.select}
                  >
                    <option value="web-development">Website Development (Next.js)</option>
                    <option value="seo">Search Engine Optimization (SEO)</option>
                    <option value="social-media-marketing">Social Media Marketing</option>
                    <option value="paid-advertising">Paid Advertising (PPC)</option>
                    <option value="content-marketing">Content Marketing</option>
                    <option value="multiple-services">Integrated Unified Cube (All)</option>
                    <option value="not-sure">General Consultation / Exploration</option>
                  </select>
                </div>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="modal-summary" className={styles.label}>
                  Project Summary or Goals *
                </label>
                <textarea
                  id="modal-summary"
                  required
                  rows={3}
                  value={projectSummary}
                  onChange={(e) => setProjectSummary(e.target.value)}
                  placeholder="Outline your commercial goals, target market (e.g. Kerala, GCC, or global), and current timeline..."
                  className={styles.textarea}
                />
              </div>

              <label className={styles.checkboxLabel}>
                <input
                  type="checkbox"
                  required
                  checked={privacyAcknowledged}
                  onChange={(e) => setPrivacyAcknowledged(e.target.checked)}
                  className={styles.checkbox}
                />
                <span>
                  I agree to confidential data handling under Qubizon&apos;s privacy policy.
                </span>
              </label>

              {formError && <p className={styles.errorText} role="alert">{formError}</p>}

              <button
                type="submit"
                disabled={isSubmitting}
                className={styles.submitBtn}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={16} className="animate-spin" aria-hidden="true" />
                    <span>Transmitting Discovery Request...</span>
                  </>
                ) : (
                  <>
                    <span>Confirm Consultation Request</span>
                    <ArrowRight size={16} aria-hidden="true" />
                  </>
                )}
              </button>
            </form>
          </>
        ) : (
          <div className={styles.successCard}>
            <div className={styles.successIcon}>
              <CheckCircle2 size={32} aria-hidden="true" />
            </div>
            <h2 className={styles.successTitle}>Request Confirmed</h2>
            <p className={styles.successText}>
              Thank you, {fullName}. Our engineering and strategy leadership team will review your
              details and reach out to <strong>{email}</strong> within 1 business day.
            </p>
            <button
              type="button"
              onClick={handleReset}
              className={styles.submitBtn}
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
