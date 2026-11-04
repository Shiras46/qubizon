"use client";

import { useState, useRef, FormEvent } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  AlertCircle,
  Loader2,
  ShieldCheck,
  Check,
} from "lucide-react";
import styles from "./ContactForm.module.css";
import {
  ALLOWED_SERVICES,
  ServiceType,
  ALLOWED_BUDGETS,
  BudgetType,
  ALLOWED_TIMEFRAMES,
  TimeframeType,
} from "@/lib/validation/contactSchema";

interface FormDataState {
  service: ServiceType;
  projectName: string;
  projectSummary: string;
  websiteUrl: string;
  fullName: string;
  email: string;
  phone: string;
  companyName: string;
  budget: BudgetType | "";
  timeframe: TimeframeType | "";
  privacyAcknowledged: boolean;
  website_confirm: string; // Honeypot
}

const INITIAL_FORM_STATE: FormDataState = {
  service: "web-development",
  projectName: "",
  projectSummary: "",
  websiteUrl: "",
  fullName: "",
  email: "",
  phone: "",
  companyName: "",
  budget: "",
  timeframe: "",
  privacyAcknowledged: false,
  website_confirm: "",
};

const SERVICE_LABELS: Record<ServiceType, string> = {
  "web-development": "Website Development",
  seo: "Search Engine Optimization",
  "social-media-marketing": "Social Media Marketing",
  "paid-advertising": "Paid Advertising",
  "content-marketing": "Content Marketing",
  "multiple-services": "Multiple Disciplines",
  "not-sure": "Not Sure Yet / Consultation",
};

const BUDGET_LABELS: Record<BudgetType, string> = {
  "under-5k": "Under $5,000",
  "5k-10k": "$5,000 – $10,000",
  "10k-25k": "$10,000 – $25,000",
  "25k-plus": "$25,000+",
  "not-decided": "Not decided yet",
};

const TIMEFRAME_LABELS: Record<TimeframeType, string> = {
  immediate: "Immediately (Within 2–4 weeks)",
  "1-3-months": "Within 1 to 3 months",
  flexible: "Flexible / Planning phase",
};

export function ContactForm() {
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3>(1);
  const [formData, setFormData] = useState<FormDataState>(INITIAL_FORM_STATE);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [apiError, setApiError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedReference, setSubmittedReference] = useState<string | null>(null);

  const stepHeadingRef = useRef<HTMLHeadingElement | null>(null);

  const setStep = (step: 1 | 2 | 3) => {
    setCurrentStep(step);
    setApiError(null);
    setTimeout(() => {
      stepHeadingRef.current?.focus();
    }, 50);
  };

  // Step 1 Validation
  const validateStep1 = (): boolean => {
    const errors: Record<string, string> = {};
    if (!formData.service || !ALLOWED_SERVICES.includes(formData.service)) {
      errors.service = "Please select a service of interest.";
    }
    if (!formData.projectSummary.trim()) {
      errors.projectSummary = "Please provide a short project summary (min 10 characters).";
    } else if (formData.projectSummary.trim().length < 10) {
      errors.projectSummary = "Project summary must be at least 10 characters.";
    } else if (formData.projectSummary.length > 2000) {
      errors.projectSummary = "Project summary cannot exceed 2,000 characters.";
    }

    if (formData.websiteUrl.trim()) {
      const urlRegex = /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(:\d+)?(\/.*)?$/i;
      if (!urlRegex.test(formData.websiteUrl.trim())) {
        errors.websiteUrl = "Please provide a valid website address (e.g. https://example.com).";
      }
    }

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Step 2 Validation
  const validateStep2 = (): boolean => {
    const errors: Record<string, string> = {};
    if (!formData.fullName.trim()) {
      errors.fullName = "Please enter your full name.";
    } else if (formData.fullName.trim().length < 2) {
      errors.fullName = "Name must be at least 2 characters.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      errors.email = "Please enter your business email.";
    } else if (!emailRegex.test(formData.email.trim())) {
      errors.email = "Please provide a valid business email address.";
    }

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleNextFromStep1 = () => {
    if (validateStep1()) {
      setStep(2);
    }
  };

  const handleNextFromStep2 = () => {
    if (validateStep2()) {
      setStep(3);
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setApiError(null);

    // Final checks
    if (!validateStep1() || !validateStep2()) {
      setApiError("Please resolve field errors before submitting.");
      return;
    }

    if (!formData.privacyAcknowledged) {
      setFieldErrors((prev) => ({
        ...prev,
        privacyAcknowledged: "You must acknowledge our privacy policy to submit an enquiry.",
      }));
      return;
    }

    setIsSubmitting(true);

    try {
      const payload: Record<string, unknown> = {
        service: formData.service,
        projectSummary: formData.projectSummary.trim(),
        fullName: formData.fullName.trim(),
        email: formData.email.trim(),
        privacyAcknowledged: true,
      };

      if (formData.projectName.trim()) payload.projectName = formData.projectName.trim();
      if (formData.websiteUrl.trim()) payload.websiteUrl = formData.websiteUrl.trim();
      if (formData.phone.trim()) payload.phone = formData.phone.trim();
      if (formData.companyName.trim()) payload.companyName = formData.companyName.trim();
      if (formData.budget) payload.budget = formData.budget;
      if (formData.timeframe) payload.timeframe = formData.timeframe;
      if (formData.website_confirm) payload.website_confirm = formData.website_confirm; // honeypot

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok) {
        if (response.status === 422 && result.details) {
          setFieldErrors(result.details);
          setApiError("Some fields could not be verified. Please review the errors above.");
        } else if (response.status === 429) {
          setApiError("Too many enquiries received from your network. Please wait before trying again.");
        } else {
          setApiError(result.error || "A system error occurred. Please try again.");
        }
        setIsSubmitting(false);
        return;
      }

      // Success
      setSubmittedReference(result.referenceId || "QUB-CONFIRMED");
      setIsSubmitting(false);
    } catch {
      setApiError("Network connection interrupted. Please check your internet connection and try again.");
      setIsSubmitting(false);
    }
  };

  // SUCCESS CONFIRMATION STATE
  if (submittedReference) {
    return (
      <div className={styles.formContainer} aria-live="polite">
        <div className={styles.successCard}>
          <div className={styles.successIcon} aria-hidden="true">
            <CheckCircle2 size={36} />
          </div>
          <h2 className={styles.successTitle}>Enquiry Confirmed</h2>
          <p className={styles.successLead}>
            Thank you, {formData.fullName}. Your project inquiry has been securely received by our
            technical architecture team.
          </p>

          <div>
            <span className={styles.refBadge}>Reference: {submittedReference}</span>
          </div>

          <div className={styles.nextStepsBox}>
            <p className={styles.nextStepsTitle}>What Happens Next</p>
            <ol className={styles.nextStepsList}>
              <li>
                <strong>Architectural Review:</strong> Our senior engineers and strategists will review
                your project summary and requirements.
              </li>
              <li>
                <strong>Direct Response:</strong> A practitioner from the relevant discipline will
                contact you at <strong>{formData.email}</strong> with initial thoughts or an invitation
                to a discovery session.
              </li>
              <li>
                <strong>Zero Pressure:</strong> We discuss feasibility, engineering timelines, and
                strategic milestones—no high-pressure sales pitches.
              </li>
            </ol>
          </div>

          <div style={{ display: "flex", justifyContent: "center", gap: "var(--space-4)" }}>
            <Link href="/services" className={styles.btnPrimary}>
              <span>Explore Our Disciplines</span>
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
            <Link href="/" className={styles.btnSecondary}>
              <span>Back to Home</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.formContainer}>
      {/* Screen Reader Progress Announcement */}
      <div className="sr-only" aria-live="polite">
        Step {currentStep} of 3:{" "}
        {currentStep === 1
          ? "Project Overview"
          : currentStep === 2
          ? "Contact Details"
          : "Review & Submit"}
      </div>

      {/* Visible Step Indicator */}
      <div className={styles.stepper} aria-label="Form Progress">
        <div
          className={`${styles.stepItem} ${
            currentStep === 1
              ? styles.stepActive
              : currentStep > 1
              ? styles.stepCompleted
              : ""
          }`}
        >
          <div className={styles.stepNumber}>
            {currentStep > 1 ? <Check size={16} aria-hidden="true" /> : "1"}
          </div>
          <span className={styles.stepLabel}>1. Project Overview</span>
        </div>

        <div className={styles.stepSeparator} aria-hidden="true" />

        <div
          className={`${styles.stepItem} ${
            currentStep === 2
              ? styles.stepActive
              : currentStep > 2
              ? styles.stepCompleted
              : ""
          }`}
        >
          <div className={styles.stepNumber}>
            {currentStep > 2 ? <Check size={16} aria-hidden="true" /> : "2"}
          </div>
          <span className={styles.stepLabel}>2. Contact Details</span>
        </div>

        <div className={styles.stepSeparator} aria-hidden="true" />

        <div
          className={`${styles.stepItem} ${
            currentStep === 3 ? styles.stepActive : ""
          }`}
        >
          <div className={styles.stepNumber}>3</div>
          <span className={styles.stepLabel}>3. Review & Submit</span>
        </div>
      </div>

      {/* API Level Error Alert */}
      {apiError && (
        <div className={styles.alertError} role="alert">
          <div style={{ display: "flex", alignItems: "center", gap: "var(--space-2)" }}>
            <AlertCircle size={18} aria-hidden="true" />
            <span>{apiError}</span>
          </div>
        </div>
      )}

      {/* STEP 1: PROJECT OVERVIEW */}
      {currentStep === 1 && (
        <div>
          <h2
            ref={stepHeadingRef}
            tabIndex={-1}
            className={styles.stepTitle}
          >
            Step 1 — Project Overview
          </h2>
          <p className={styles.stepDescription}>
            Tell us about your organization and the digital capabilities you are looking to build or optimize.
          </p>

          {/* Service Selector Grid */}
          <div className={styles.fieldGroup} style={{ marginBottom: "var(--space-6)" }}>
            <span id="service-label" className={styles.label}>
              <span>Primary Discipline of Interest *</span>
            </span>
            <div
              role="radiogroup"
              aria-labelledby="service-label"
              className={styles.serviceGrid}
            >
              {ALLOWED_SERVICES.map((srv) => {
                const isSelected = formData.service === srv;
                return (
                  <button
                    key={srv}
                    type="button"
                    role="radio"
                    aria-checked={isSelected}
                    onClick={() => {
                      setFormData((prev) => ({ ...prev, service: srv }));
                      setFieldErrors((prev) => ({ ...prev, service: "" }));
                    }}
                    className={`${styles.servicePill} ${
                      isSelected ? styles.servicePillActive : ""
                    }`}
                  >
                    <span
                      style={{
                        width: 16,
                        height: 16,
                        borderRadius: "50%",
                        border: "2px solid currentColor",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                      aria-hidden="true"
                    >
                      {isSelected && (
                        <span
                          style={{
                            width: 8,
                            height: 8,
                            borderRadius: "50%",
                            backgroundColor: "currentColor",
                          }}
                        />
                      )}
                    </span>
                    <span>{SERVICE_LABELS[srv]}</span>
                  </button>
                );
              })}
            </div>
            {fieldErrors.service && (
              <span className={styles.errorMessage} role="alert">
                {fieldErrors.service}
              </span>
            )}
          </div>

          <div className={styles.formGrid}>
            <div className={styles.fieldGroup}>
              <label htmlFor="projectName" className={styles.label}>
                <span>Project or Brand Name</span>
                <span className={styles.optionalTag}>Optional</span>
              </label>
              <input
                id="projectName"
                type="text"
                maxLength={150}
                placeholder="e.g. Acme Platform Redesign"
                value={formData.projectName}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, projectName: e.target.value }))
                }
                className={styles.input}
              />
            </div>

            <div className={styles.fieldGroup}>
              <label htmlFor="websiteUrl" className={styles.label}>
                <span>Current Website Address</span>
                <span className={styles.optionalTag}>Optional</span>
              </label>
              <input
                id="websiteUrl"
                type="url"
                maxLength={255}
                placeholder="https://example.com"
                value={formData.websiteUrl}
                onChange={(e) => {
                  setFormData((prev) => ({ ...prev, websiteUrl: e.target.value }));
                  setFieldErrors((prev) => ({ ...prev, websiteUrl: "" }));
                }}
                className={`${styles.input} ${
                  fieldErrors.websiteUrl ? styles.inputError : ""
                }`}
                aria-invalid={!!fieldErrors.websiteUrl}
                aria-describedby={fieldErrors.websiteUrl ? "url-error" : undefined}
              />
              {fieldErrors.websiteUrl && (
                <span id="url-error" className={styles.errorMessage} role="alert">
                  {fieldErrors.websiteUrl}
                </span>
              )}
            </div>

            <div className={`${styles.fieldGroup} ${styles.fullWidth}`}>
              <label htmlFor="projectSummary" className={styles.label}>
                <span>Short Project Summary & Objectives *</span>
              </label>
              <textarea
                id="projectSummary"
                rows={5}
                maxLength={2000}
                placeholder="Briefly describe what you're looking to achieve (e.g. migration to Next.js, organic search clustering, paid customer acquisition overhaul)..."
                value={formData.projectSummary}
                onChange={(e) => {
                  setFormData((prev) => ({ ...prev, projectSummary: e.target.value }));
                  setFieldErrors((prev) => ({ ...prev, projectSummary: "" }));
                }}
                className={`${styles.textarea} ${
                  fieldErrors.projectSummary ? styles.inputError : ""
                }`}
                aria-invalid={!!fieldErrors.projectSummary}
                aria-describedby={
                  fieldErrors.projectSummary ? "summary-error" : undefined
                }
              />
              {fieldErrors.projectSummary && (
                <span id="summary-error" className={styles.errorMessage} role="alert">
                  {fieldErrors.projectSummary}
                </span>
              )}
            </div>
          </div>

          <div className={styles.buttonGroup} style={{ justifyContent: "flex-end" }}>
            <button
              type="button"
              onClick={handleNextFromStep1}
              className={styles.btnPrimary}
            >
              <span>Continue to Contact Details</span>
              <ArrowRight size={16} aria-hidden="true" />
            </button>
          </div>
        </div>
      )}

      {/* STEP 2: CONTACT DETAILS */}
      {currentStep === 2 && (
        <div>
          <h2
            ref={stepHeadingRef}
            tabIndex={-1}
            className={styles.stepTitle}
          >
            Step 2 — Contact Details & Scope
          </h2>
          <p className={styles.stepDescription}>
            Provide your business contact information so our technical team can prepare a thoughtful response.
          </p>

          <div className={styles.formGrid}>
            <div className={styles.fieldGroup}>
              <label htmlFor="fullName" className={styles.label}>
                <span>Full Name *</span>
              </label>
              <input
                id="fullName"
                type="text"
                autoComplete="name"
                maxLength={100}
                placeholder="Jane Doe"
                value={formData.fullName}
                onChange={(e) => {
                  setFormData((prev) => ({ ...prev, fullName: e.target.value }));
                  setFieldErrors((prev) => ({ ...prev, fullName: "" }));
                }}
                className={`${styles.input} ${
                  fieldErrors.fullName ? styles.inputError : ""
                }`}
                aria-invalid={!!fieldErrors.fullName}
                aria-describedby={fieldErrors.fullName ? "name-error" : undefined}
              />
              {fieldErrors.fullName && (
                <span id="name-error" className={styles.errorMessage} role="alert">
                  {fieldErrors.fullName}
                </span>
              )}
            </div>

            <div className={styles.fieldGroup}>
              <label htmlFor="email" className={styles.label}>
                <span>Business Email *</span>
              </label>
              <input
                id="email"
                type="email"
                autoComplete="email"
                maxLength={255}
                placeholder="jane@company.com"
                value={formData.email}
                onChange={(e) => {
                  setFormData((prev) => ({ ...prev, email: e.target.value }));
                  setFieldErrors((prev) => ({ ...prev, email: "" }));
                }}
                className={`${styles.input} ${
                  fieldErrors.email ? styles.inputError : ""
                }`}
                aria-invalid={!!fieldErrors.email}
                aria-describedby={fieldErrors.email ? "email-error" : undefined}
              />
              {fieldErrors.email && (
                <span id="email-error" className={styles.errorMessage} role="alert">
                  {fieldErrors.email}
                </span>
              )}
            </div>

            <div className={styles.fieldGroup}>
              <label htmlFor="companyName" className={styles.label}>
                <span>Company or Organization</span>
                <span className={styles.optionalTag}>Optional</span>
              </label>
              <input
                id="companyName"
                type="text"
                autoComplete="organization"
                maxLength={150}
                placeholder="Acme Corp"
                value={formData.companyName}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, companyName: e.target.value }))
                }
                className={styles.input}
              />
            </div>

            <div className={styles.fieldGroup}>
              <label htmlFor="phone" className={styles.label}>
                <span>Phone Number</span>
                <span className={styles.optionalTag}>Optional</span>
              </label>
              <input
                id="phone"
                type="tel"
                autoComplete="tel"
                maxLength={50}
                placeholder="+1 (555) 000-0000"
                value={formData.phone}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, phone: e.target.value }))
                }
                className={styles.input}
              />
            </div>

            <div className={styles.fieldGroup}>
              <label htmlFor="budget" className={styles.label}>
                <span>Approximate Budget</span>
                <span className={styles.optionalTag}>Optional</span>
              </label>
              <select
                id="budget"
                value={formData.budget}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    budget: e.target.value as BudgetType | "",
                  }))
                }
                className={styles.select}
              >
                <option value="">Select an approximate range...</option>
                {ALLOWED_BUDGETS.map((b) => (
                  <option key={b} value={b}>
                    {BUDGET_LABELS[b]}
                  </option>
                ))}
              </select>
            </div>

            <div className={styles.fieldGroup}>
              <label htmlFor="timeframe" className={styles.label}>
                <span>Target Start Timeframe</span>
                <span className={styles.optionalTag}>Optional</span>
              </label>
              <select
                id="timeframe"
                value={formData.timeframe}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    timeframe: e.target.value as TimeframeType | "",
                  }))
                }
                className={styles.select}
              >
                <option value="">Select a target timeframe...</option>
                {ALLOWED_TIMEFRAMES.map((t) => (
                  <option key={t} value={t}>
                    {TIMEFRAME_LABELS[t]}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className={styles.buttonGroup}>
            <button
              type="button"
              onClick={() => setStep(1)}
              className={styles.btnSecondary}
            >
              <ArrowLeft size={16} aria-hidden="true" />
              <span>Back to Step 1</span>
            </button>

            <button
              type="button"
              onClick={handleNextFromStep2}
              className={styles.btnPrimary}
            >
              <span>Review Enquiry</span>
              <ArrowRight size={16} aria-hidden="true" />
            </button>
          </div>
        </div>
      )}

      {/* STEP 3: REVIEW & SUBMIT */}
      {currentStep === 3 && (
        <form onSubmit={handleSubmit} noValidate>
          <h2
            ref={stepHeadingRef}
            tabIndex={-1}
            className={styles.stepTitle}
          >
            Step 3 — Review & Submit
          </h2>
          <p className={styles.stepDescription}>
            Please review your information before final submission. You can click &quot;Edit&quot; on any section to adjust your details.
          </p>

          {/* Honeypot field (hidden visually and non-focusable) */}
          <label htmlFor="website_confirm" className="sr-only">
            Leave this field blank
          </label>
          <input
            id="website_confirm"
            type="text"
            name="website_confirm"
            tabIndex={-1}
            aria-hidden="true"
            autoComplete="off"
            value={formData.website_confirm}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, website_confirm: e.target.value }))
            }
            className={styles.honeypotField}
          />

          <div className={styles.reviewBox}>
            {/* Step 1 Review */}
            <div className={styles.reviewSection}>
              <div className={styles.reviewHeader}>
                <span className={styles.reviewSectionTitle}>Project Overview</span>
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className={styles.editButton}
                  aria-label="Edit Project Overview in Step 1"
                >
                  Edit
                </button>
              </div>

              <div className={styles.reviewItem}>
                <span className={styles.reviewLabel}>Service:</span>
                <span className={styles.reviewValue}>
                  {SERVICE_LABELS[formData.service]}
                </span>
              </div>

              {formData.projectName && (
                <div className={styles.reviewItem}>
                  <span className={styles.reviewLabel}>Project Name:</span>
                  <span className={styles.reviewValue}>{formData.projectName}</span>
                </div>
              )}

              {formData.websiteUrl && (
                <div className={styles.reviewItem}>
                  <span className={styles.reviewLabel}>Website:</span>
                  <span className={styles.reviewValue}>{formData.websiteUrl}</span>
                </div>
              )}

              <div style={{ marginTop: "var(--space-2)" }}>
                <span className={styles.reviewLabel}>Summary:</span>
                <div className={styles.reviewSummaryText}>
                  {formData.projectSummary}
                </div>
              </div>
            </div>

            {/* Step 2 Review */}
            <div className={styles.reviewSection}>
              <div className={styles.reviewHeader}>
                <span className={styles.reviewSectionTitle}>Contact Details</span>
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className={styles.editButton}
                  aria-label="Edit Contact Details in Step 2"
                >
                  Edit
                </button>
              </div>

              <div className={styles.reviewItem}>
                <span className={styles.reviewLabel}>Contact Name:</span>
                <span className={styles.reviewValue}>{formData.fullName}</span>
              </div>

              <div className={styles.reviewItem}>
                <span className={styles.reviewLabel}>Business Email:</span>
                <span className={styles.reviewValue}>{formData.email}</span>
              </div>

              {formData.companyName && (
                <div className={styles.reviewItem}>
                  <span className={styles.reviewLabel}>Company:</span>
                  <span className={styles.reviewValue}>{formData.companyName}</span>
                </div>
              )}

              {formData.phone && (
                <div className={styles.reviewItem}>
                  <span className={styles.reviewLabel}>Phone:</span>
                  <span className={styles.reviewValue}>{formData.phone}</span>
                </div>
              )}

              {formData.budget && (
                <div className={styles.reviewItem}>
                  <span className={styles.reviewLabel}>Budget:</span>
                  <span className={styles.reviewValue}>
                    {BUDGET_LABELS[formData.budget]}
                  </span>
                </div>
              )}

              {formData.timeframe && (
                <div className={styles.reviewItem}>
                  <span className={styles.reviewLabel}>Timeframe:</span>
                  <span className={styles.reviewValue}>
                    {TIMEFRAME_LABELS[formData.timeframe]}
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Privacy Acknowledgement */}
          <div className={styles.privacyGroup}>
            <input
              id="privacyAcknowledged"
              type="checkbox"
              checked={formData.privacyAcknowledged}
              onChange={(e) => {
                setFormData((prev) => ({
                  ...prev,
                  privacyAcknowledged: e.target.checked,
                }));
                setFieldErrors((prev) => ({ ...prev, privacyAcknowledged: "" }));
              }}
              className={styles.checkbox}
              aria-invalid={!!fieldErrors.privacyAcknowledged}
              aria-describedby={
                fieldErrors.privacyAcknowledged ? "privacy-error" : undefined
              }
            />
            <label htmlFor="privacyAcknowledged" className={styles.privacyLabel}>
              I acknowledge that the information submitted above will be processed by Qubizon Digital
              Solutions solely to respond to this commercial inquiry in accordance with our{" "}
              <Link href="/privacy" target="_blank" className={styles.privacyLink}>
                Privacy Policy
              </Link>
              . Qubizon never sells, shares, or rents personal client information.
            </label>
          </div>
          {fieldErrors.privacyAcknowledged && (
            <p id="privacy-error" className={styles.errorMessage} style={{ marginBottom: "var(--space-4)" }} role="alert">
              {fieldErrors.privacyAcknowledged}
            </p>
          )}

          <div className={styles.buttonGroup}>
            <button
              type="button"
              onClick={() => setStep(2)}
              disabled={isSubmitting}
              className={styles.btnSecondary}
            >
              <ArrowLeft size={16} aria-hidden="true" />
              <span>Back to Step 2</span>
            </button>

            <button
              type="submit"
              disabled={isSubmitting}
              className={styles.btnPrimary}
            >
              {isSubmitting ? (
                <>
                  <Loader2 size={16} className="animate-spin" aria-hidden="true" />
                  <span>Submitting Enquiry...</span>
                </>
              ) : (
                <>
                  <ShieldCheck size={16} aria-hidden="true" />
                  <span>Submit Confidential Enquiry</span>
                </>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
