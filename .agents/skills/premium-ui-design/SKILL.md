---
name: premium-ui-design
description: Workflows and standards for building responsive, accessible, polished web user interfaces with modern CSS architecture and zero generic styling.
---

# Premium UI Design Skill

This skill guides the construction of responsive, polished, and accessible web interfaces.

## Prerequisite Checks

Before applying modern styling patterns:
1. Check if the `modern-web-guidance` skill or CLI is available:
   - Run `npx.cmd -y modern-web-guidance@latest search "<topic>"` only if network access and permission are verified.
   - If unavailable or offline, rely on standard modern CSS standards (CSS variables, flexbox, CSS grid, media/container queries).
2. Check if browser inspection tools (e.g., `chrome-devtools-mcp`) are registered before attempting automated visual/DOM verification.

## Step-by-Step Procedure

### Step 1: Design Tokens & Foundation
- Establish a curated color palette using design tokens (HSL or CSS custom properties) with dedicated semantic roles (background, surface, accent, text, border).
- Configure responsive typography with fluid scaling (`clamp()`) and legible font hierarchies.
- Ensure consistent spacing scale (4px/8px rhythm) and predictable elevation layers (subtle borders over aggressive drop shadows).

### Step 2: Component Architecture & Layout
- Prioritize CSS Grid and Flexbox for macro-layouts; adapt layouts using container queries where components are intended to be modular.
- Implement states cleanly: `:hover`, `:focus-visible`, `:active`, and `:disabled`. Focus rings must be clearly visible for keyboard users.
- Add subtle micro-interactions and transitions (150ms-250ms ease-out). Respect reduced motion settings:
  ```css
  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      transition-duration: 0.01ms !important;
    }
  }
  ```

### Step 3: Accessibility (a11y) Integration
- Use native semantic HTML elements (`<nav>`, `<main>`, `<article>`, `<button>`, `<dialog>`) in preference to generic `<div>` wrappers.
- Verify color contrast ratios against WCAG 2.1 AA benchmarks (minimum 4.5:1 for normal text, 3:1 for large text and UI components).
- Ensure interactive elements are keyboard navigable with logical tab sequences and proper ARIA attributes where semantic HTML is insufficient.

### Step 4: Verification & Responsive Testing
- If `chrome-devtools-mcp` is active and a development server is running:
  - Use `resize_page` to test mobile (375px), tablet (768px), and desktop (1280px+) viewports.
  - Call `take_screenshot` or `take_snapshot` to inspect layout integrity and accessibility trees.
- If testing manually or without browser automation, document the tested viewports and verify markup semantics directly.

## Acceptance Criteria
- [ ] No raw, unstyled browser default form controls or buttons.
- [ ] Clean visual hierarchy with cohesive typography and semantic color tokens.
- [ ] Responsive across standard mobile, tablet, and desktop breakpoints without horizontal overflow.
- [ ] Full keyboard accessibility with clear `:focus-visible` indicators.
- [ ] WCAG 2.1 AA color contrast compliance verified or reported.
