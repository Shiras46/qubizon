---
name: production-readiness
description: Pre-release verification protocol covering build integrity, performance targets, Core Web Vitals profiling, security checks, and deployment safeguards.
---

# Production Readiness Skill

This skill defines the verification checklist and protocol before deploying or releasing code.

## Prerequisite Checks

Before beginning the production readiness audit:
1. Identify the project framework, package manager, and build tool from project configuration.
2. Verify availability of performance profiling tools:
   - Check if `chrome-devtools-mcp` is active (tools: `performance_start_trace`, `performance_analyze_insight`, `lighthouse_audit`).
   - Check if `modern-web-guidance` is available for performance optimization patterns.
   - If MCP tools are unavailable, perform build-size analysis and manual audit procedures instead.
3. Confirm that no production deployment commands are executed without prior user approval.

## Step-by-Step Procedure

### Step 1: Static Analysis & Build Verification
- Execute type checking and linting configured in the project (e.g., `npm run lint`, `tsc --noEmit`).
- Run the production build command (e.g., `npm run build`).
- Verify the build finishes with exit code 0 and check bundle output sizes for oversized chunks or redundant dependencies.

### Step 2: Core Web Vitals & Performance Profiling (Target-Driven Evaluation)
- Launch the production build in a local preview environment.
- If `chrome-devtools-mcp` is verified and operational:
  - Run `performance_start_trace`, interact with primary workflows, and call `performance_stop_trace`.
  - Use `performance_analyze_insight` or `lighthouse_audit` to evaluate Core Web Vitals targets:
    - **LCP (Largest Contentful Paint)**: Target ≤ 2.5s
    - **INP (Interaction to Next Paint)**: Target ≤ 200ms
    - **CLS (Cumulative Layout Shift)**: Target ≤ 0.1
  - **Important**: Treat these thresholds as measurable evaluation targets, not guaranteed outcomes. Report the exact recorded metrics, hardware/network throttling conditions, and tested URL.
- If profiling tools are unavailable:
  - Document bundle analysis metrics (total JS transfer size, asset sizes) and conduct manual profiling via browser DevTools.

### Step 3: Security & Environment Safeguards (Architecture-Dependent)
- Check that all required production environment variables are documented in an `.env.example` file with placeholder values.
- Verify that no secret keys or database connection strings are exposed in client bundles or client-facing code.
- If backend APIs exist, verify rate limiting and server-side authorization boundaries are configured.

### Step 4: Approval & Release Gate
- Present an audit report summarizing:
  - Build status and bundle sizes.
  - Measured Core Web Vitals against evaluation targets under specified test conditions.
  - Verification of `.gitignore` and security boundaries.
- **Do not proceed with database migrations, tag releases, or deployment commands without receiving explicit approval from the user.**

## Acceptance Criteria
- [ ] Clean production build and zero static type/lint errors verified through terminal execution.
- [ ] Core Web Vitals targets measured and reported with specific environment conditions and findings.
- [ ] Environment variables validated and secret leakage checked across client assets.
- [ ] Explicit user authorization requested and confirmed prior to executing any deployment actions.
