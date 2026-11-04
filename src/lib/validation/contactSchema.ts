/**
 * Strict server-side validation schema and type guards for client enquiries.
 * Implemented without external runtime dependencies for maximum performance,
 * zero package bloat, and strict compliance with repository security rules.
 */

export const ALLOWED_SERVICES = [
  "web-development",
  "seo",
  "social-media-marketing",
  "paid-advertising",
  "content-marketing",
  "multiple-services",
  "not-sure",
] as const;

export type ServiceType = (typeof ALLOWED_SERVICES)[number];

export const ALLOWED_BUDGETS = [
  "under-5k",
  "5k-10k",
  "10k-25k",
  "25k-plus",
  "not-decided",
] as const;

export type BudgetType = (typeof ALLOWED_BUDGETS)[number];

export const ALLOWED_TIMEFRAMES = [
  "immediate",
  "1-3-months",
  "flexible",
] as const;

export type TimeframeType = (typeof ALLOWED_TIMEFRAMES)[number];

export interface ContactSubmissionPayload {
  service: ServiceType;
  projectName?: string;
  projectSummary: string;
  websiteUrl?: string;
  fullName: string;
  email: string;
  phone?: string;
  companyName?: string;
  budget?: BudgetType;
  timeframe?: TimeframeType;
  privacyAcknowledged: boolean;
  // Honeypot field (must be empty)
  website_confirm?: string;
}

export interface ValidationSuccess {
  isValid: true;
  data: ContactSubmissionPayload;
}

export interface ValidationError {
  isValid: false;
  errors: Record<string, string>;
}

export type ValidationResult = ValidationSuccess | ValidationError;

// Standard RFC 5322 compliant email regex
const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;

// Standard URL regex allowing http/https
const URL_REGEX =
  /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(:\d+)?(\/.*)?$/i;

// Set of all strictly allowed top-level keys
const ALLOWED_KEYS = new Set([
  "service",
  "projectName",
  "projectSummary",
  "websiteUrl",
  "fullName",
  "email",
  "phone",
  "companyName",
  "budget",
  "timeframe",
  "privacyAcknowledged",
  "website_confirm",
]);

/**
 * Sanitizes input string by stripping null bytes and non-printable control characters.
 */
export function sanitizeString(input: string): string {
  // Strip null bytes and non-printable ASCII control characters except \r, \n, \t
  return input.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, "").trim();
}

/**
 * Validates incoming unknown payload against strict schema.
 */
export function validateContactSubmission(input: unknown): ValidationResult {
  const errors: Record<string, string> = {};

  if (!input || typeof input !== "object" || Array.isArray(input)) {
    return {
      isValid: false,
      errors: { _root: "Request body must be a valid JSON object." },
    };
  }

  const raw = input as Record<string, unknown>;

  // 1. Reject unexpected or unallowed keys
  for (const key of Object.keys(raw)) {
    if (!ALLOWED_KEYS.has(key)) {
      return {
        isValid: false,
        errors: { [key]: `Unrecognized field '${key}' is not allowed.` },
      };
    }
  }

  // 2. Honeypot Check
  if (raw.website_confirm && typeof raw.website_confirm === "string") {
    if (raw.website_confirm.trim().length > 0) {
      return {
        isValid: false,
        errors: { _root: "Automated submission detected." },
      };
    }
  }

  // 3. Service validation
  if (!raw.service || typeof raw.service !== "string") {
    errors.service = "Please select a service of interest.";
  } else {
    const s = sanitizeString(raw.service);
    if (!ALLOWED_SERVICES.includes(s as ServiceType)) {
      errors.service = "Selected service is invalid.";
    }
  }

  // 4. Project Summary validation
  if (!raw.projectSummary || typeof raw.projectSummary !== "string") {
    errors.projectSummary = "Please provide a brief project summary.";
  } else {
    const summary = sanitizeString(raw.projectSummary);
    if (summary.length < 10) {
      errors.projectSummary = "Project summary must be at least 10 characters.";
    } else if (summary.length > 2000) {
      errors.projectSummary = "Project summary cannot exceed 2,000 characters.";
    }
  }

  // 5. Project Name (Optional)
  let cleanedProjectName: string | undefined;
  if (raw.projectName !== undefined && raw.projectName !== null && raw.projectName !== "") {
    if (typeof raw.projectName !== "string") {
      errors.projectName = "Project name must be a text value.";
    } else {
      const pName = sanitizeString(raw.projectName);
      if (pName.length > 150) {
        errors.projectName = "Project name cannot exceed 150 characters.";
      } else {
        cleanedProjectName = pName;
      }
    }
  }

  // 6. Website URL (Optional)
  let cleanedWebsiteUrl: string | undefined;
  if (raw.websiteUrl !== undefined && raw.websiteUrl !== null && raw.websiteUrl !== "") {
    if (typeof raw.websiteUrl !== "string") {
      errors.websiteUrl = "Website URL must be a text string.";
    } else {
      const url = sanitizeString(raw.websiteUrl);
      if (url.length > 255) {
        errors.websiteUrl = "Website URL cannot exceed 255 characters.";
      } else if (!URL_REGEX.test(url)) {
        errors.websiteUrl = "Please provide a valid website address (e.g. https://example.com).";
      } else {
        cleanedWebsiteUrl = url;
      }
    }
  }

  // 7. Full Name validation
  if (!raw.fullName || typeof raw.fullName !== "string") {
    errors.fullName = "Please enter your full name.";
  } else {
    const name = sanitizeString(raw.fullName);
    if (name.length < 2) {
      errors.fullName = "Name must be at least 2 characters.";
    } else if (name.length > 100) {
      errors.fullName = "Name cannot exceed 100 characters.";
    }
  }

  // 8. Email validation
  if (!raw.email || typeof raw.email !== "string") {
    errors.email = "Please enter a valid business email address.";
  } else {
    const email = sanitizeString(raw.email).toLowerCase();
    if (email.length > 255) {
      errors.email = "Email address cannot exceed 255 characters.";
    } else if (email.includes("..") || !EMAIL_REGEX.test(email)) {
      errors.email = "Please provide a properly formatted email address (e.g. name@company.com).";
    }
  }

  // 9. Phone (Optional)
  let cleanedPhone: string | undefined;
  if (raw.phone !== undefined && raw.phone !== null && raw.phone !== "") {
    if (typeof raw.phone !== "string") {
      errors.phone = "Phone number must be a text string.";
    } else {
      const phone = sanitizeString(raw.phone);
      if (phone.length > 50) {
        errors.phone = "Phone number cannot exceed 50 characters.";
      } else {
        cleanedPhone = phone;
      }
    }
  }

  // 10. Company Name (Optional)
  let cleanedCompany: string | undefined;
  if (raw.companyName !== undefined && raw.companyName !== null && raw.companyName !== "") {
    if (typeof raw.companyName !== "string") {
      errors.companyName = "Company name must be a text string.";
    } else {
      const comp = sanitizeString(raw.companyName);
      if (comp.length > 150) {
        errors.companyName = "Company name cannot exceed 150 characters.";
      } else {
        cleanedCompany = comp;
      }
    }
  }

  // 11. Budget (Optional enum)
  let cleanedBudget: BudgetType | undefined;
  if (raw.budget !== undefined && raw.budget !== null && raw.budget !== "") {
    if (typeof raw.budget !== "string") {
      errors.budget = "Budget must be a valid selection.";
    } else {
      const b = sanitizeString(raw.budget);
      if (!ALLOWED_BUDGETS.includes(b as BudgetType)) {
        errors.budget = "Selected budget range is invalid.";
      } else {
        cleanedBudget = b as BudgetType;
      }
    }
  }

  // 12. Timeframe (Optional enum)
  let cleanedTimeframe: TimeframeType | undefined;
  if (raw.timeframe !== undefined && raw.timeframe !== null && raw.timeframe !== "") {
    if (typeof raw.timeframe !== "string") {
      errors.timeframe = "Timeframe must be a valid selection.";
    } else {
      const t = sanitizeString(raw.timeframe);
      if (!ALLOWED_TIMEFRAMES.includes(t as TimeframeType)) {
        errors.timeframe = "Selected timeframe is invalid.";
      } else {
        cleanedTimeframe = t as TimeframeType;
      }
    }
  }

  // 13. Privacy Acknowledgement
  if (raw.privacyAcknowledged !== true) {
    errors.privacyAcknowledged = "You must acknowledge our privacy policy to submit an enquiry.";
  }

  if (Object.keys(errors).length > 0) {
    return { isValid: false, errors };
  }

  return {
    isValid: true,
    data: {
      service: sanitizeString(raw.service as string) as ServiceType,
      projectName: cleanedProjectName,
      projectSummary: sanitizeString(raw.projectSummary as string),
      websiteUrl: cleanedWebsiteUrl,
      fullName: sanitizeString(raw.fullName as string),
      email: sanitizeString(raw.email as string).toLowerCase(),
      phone: cleanedPhone,
      companyName: cleanedCompany,
      budget: cleanedBudget,
      timeframe: cleanedTimeframe,
      privacyAcknowledged: true,
    },
  };
}
