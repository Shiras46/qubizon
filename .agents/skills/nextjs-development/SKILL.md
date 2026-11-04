---
name: nextjs-development
description: Patterns and workflows for Next.js applications, covering App Router architecture, Server Components, data mutations, caching, and asset optimization.
---

# Next.js Development Skill

This skill applies when Next.js is detected in the workspace.

## Prerequisite Checks

Before executing Next.js specific tasks:
1. Confirm Next.js is installed by inspecting `package.json` for `next` and reviewing its major version (e.g., 14.x, 15.x).
2. Determine whether the project uses App Router (`app/` directory) or Pages Router (`pages/` directory). Adapt routing, metadata, and data fetching conventions accordingly.
3. Check the configured package manager (`npm`, `pnpm`, `yarn`, `bun`) before suggesting any scripts or commands.

## Step-by-Step Procedure

### Step 1: Component Boundary Architecture
- Keep components as React Server Components (RSC) by default for data fetching, backend integration, and reduced bundle size.
- Add `"use client"` only when components require browser interactivity: event listeners (`onClick`, `onChange`), React state (`useState`, `useReducer`), effects (`useEffect`), or browser-only APIs.
- Keep Client Components low in the component tree to avoid converting entire subtrees into client bundles.

### Step 2: Routing & Layout Hierarchy (App Router)
- Implement standard nested route files:
  - `layout.tsx`: Persistent layouts and navigation state across route segments.
  - `page.tsx`: Route segment view and data loader.
  - `loading.tsx`: Streaming fallback UI with React Suspense.
  - `error.tsx`: Client-side error boundary catching runtime exceptions.
  - `not-found.tsx`: Semantic 404 response handler.
- If using Pages Router, use `_app.tsx`, `_document.tsx`, and standard page routing instead.

### Step 3: Server Actions & Mutations (Architecture-Dependent)
- When using Server Actions (`"use server"`):
  - Validate all incoming arguments using schema validation (e.g., Zod) on the server.
  - Verify user authentication and authorization within the action body before applying changes.
  - Trigger selective cache invalidation with `revalidatePath` or `revalidateTag`.
  - Return typed result objects `{ success: boolean, error?: string, data?: T }` rather than letting uncaught exceptions escape to the client.

### Step 4: Asset & Font Optimization
- Use `next/image` for responsive sizing, lazy loading, and prevention of Cumulative Layout Shift (CLS). Specify explicit `width`/`height` or `fill` with appropriate `sizes`.
- Use `next/font` for zero-layout-shift font loading and automatic self-hosting of web fonts.

## Acceptance Criteria
- [ ] Next.js version and routing paradigm confirmed prior to applying conventions.
- [ ] Clear separation between Server and Client Components with minimal client bundle footprint.
- [ ] Input validation and authorization enforced on all Server Actions or Route Handlers.
- [ ] No exposed server credentials or unverified environment variables in Client Components.
- [ ] Production build (`next build`) runs cleanly without unresolved type errors or route errors when verified.
