# Workspace Operational Rules

These rules govern all AI coding assistance and automated agent actions within this repository (`D:\project\qubizon seo`).

## 1. Inspection Before Modification
Always inspect existing repository structure, files, configurations, and installed dependencies before proposing changes or editing files. Never overwrite or remove existing functionality without explicit understanding and justification.

## 2. Clear & Accessible Communication
Explain architectural choices, trade-offs, and technical solutions in clear, beginner-friendly language while preserving precision. Avoid unnecessary jargon; provide context for why a specific pattern is recommended.

## 3. High-Quality Interface Standards
Build user interfaces that are maintainable, responsive, accessible (targeting WCAG 2.1 AA), and performant. Avoid generic, unstyled, or placeholder implementations.

## 4. Documentation & Version Alignment
Follow official documentation matching the actual installed framework, runtime, and major dependency versions. Do not apply deprecated patterns or assumptions from mismatched versions.

## 5. Secret Protection & Credential Hygiene
Never expose API keys, tokens, database credentials, or secrets in code, logs, or chat outputs. Ensure `.env*` files with sensitive values are untracked in version control and excluded via `.gitignore`.

## 6. Server-Side Input Validation
Validate and sanitize all untrusted user input, URL parameters, and API request payloads on the server or API layer. Client-side validation is solely for user experience, never for security.

## 7. Server-Side Authorization Enforcement
Enforce authentication checks and authorization permissions strictly on the server or data layer. Never rely exclusively on client-side routing guards or hidden UI elements to protect sensitive operations.

## 8. Verifiable Testing & Claims
Never state that a test, build, lint, or audit passed unless it was genuinely executed and its passing output verified in the current session. Always report actual test outputs, metrics, and failures transparently.

## 9. Explicit Approval Gates
Obtain explicit user approval before executing:
- Destructive commands (e.g., deleting untracked files, dropping schemas, force-pushing)
- Dependency upgrades or major package installations
- Database migrations or schema mutations
- Production builds or deployments

## 10. Preservation of User Work
Preserve all existing comments, docstrings, formatting conventions, and user-authored code unless specifically instructed to modify them. Provide clear change summaries detailing modified paths and operational impacts.
