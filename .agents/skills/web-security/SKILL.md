---
name: web-security
description: Protocols and standards for securing web applications, handling secrets, enforcing server-side authorization, validating input, and configuring defensive HTTP headers.
---

# Web Security Skill

This skill guides defensive web security implementation, tailored conditionally to the actual application architecture.

## Prerequisite Checks

Before applying security measures:
1. Determine application architecture:
   - Static site: Focus on transport security, client-side safety, content integrity, and public header configurations.
   - Dynamic site / Fullstack: Enforce server-side authentication, session security, CSRF protection, and database query safety.
2. Check `.gitignore` to verify environment and secret files (`.env`, `.env.local`, `*.pem`, `*.key`) are properly excluded from version control.
3. Check availability of `chrome-devtools-mcp` before attempting automated network header or console error verification.

## Step-by-Step Procedure

### Step 1: Secret Management & Environment Hygiene
- Keep sensitive credentials (database strings, API keys, webhook secrets) in server-side environment variables only.
- Never prefix sensitive variables with public identifiers (e.g., `NEXT_PUBLIC_` or `VITE_`).
- Ensure templates (`.env.example`) contain empty dummy values, never production or staging secrets.

### Step 2: Server-Side Validation & Sanitization (Conditional on Backend/API Presence)
- Where server endpoints, Server Actions, or API handlers exist:
  - Enforce schema validation (e.g., Zod, Yup, or Joi) on all incoming request bodies, query strings, and headers.
  - Reject unexpected fields and strictly type-check parameters.
  - Where database access occurs, use parameterized queries, ORM query builders, or prepared statements to eliminate SQL/NoSQL injection risks.

### Step 3: Authentication & Authorization (Conditional on Protected Routes)
- For systems with user state or access controls:
  - Enforce role and identity checks strictly on the server before serving private data or executing mutations.
  - Never trust client-side claims or hidden UI flags alone.
  - Use secure session cookies with `HttpOnly`, `Secure`, and `SameSite=Lax` or `Strict`.
  - For state-changing operations via traditional cookie-based form submissions, ensure CSRF defenses are implemented according to framework standards.

### Step 4: Defensive Security Headers (Conditional on Server/Hosting Capabilities)
- When custom HTTP response headers can be configured (via middleware, server config, or hosting headers):
  - `Content-Security-Policy`: Define trusted script, style, and media sources. Tailor CSP rules specifically to actual external assets (fonts, analytics, CDN scripts) rather than applying blanket policies that break functionality.
  - `X-Frame-Options: DENY` or `SAMEORIGIN` to mitigate clickjacking.
  - `X-Content-Type-Options: nosniff` to prevent MIME-type sniffing.
  - `Referrer-Policy: strict-origin-when-cross-origin`.
  - `Strict-Transport-Security: max-age=63072000; includeSubDomains; preload` for HTTPS enforcement.

### Step 5: Verification & Header Inspection
- If `chrome-devtools-mcp` is active and the application is served locally:
  - Use `list_network_requests` and `get_network_request` to verify response headers on document requests.
  - Use `list_console_messages` to check for CSP violation warnings or mixed content errors.
- If MCP is unavailable:
  - Verify headers via local curl commands or inspecting middleware/server configuration files directly.

## Acceptance Criteria
- [ ] No hardcoded secrets, private tokens, or credentials in any tracked repository file.
- [ ] `.gitignore` verifies that `.env*` files with secrets are untracked.
- [ ] All dynamic input points validated on the server layer before processing.
- [ ] Authorization checks verified at data access points, not solely on UI components.
- [ ] Configured security headers match actual application asset requirements without console CSP errors.
