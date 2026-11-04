---
name: creative-motion-3d
description: Workflows and standards for 3D-inspired interactive experiences, cube visual motifs, GPU-accelerated motion choreography, and accessible micro-interactions tailored to the Qubizon brand.
---

# Creative Motion & 3D Web Experiences

This skill guides the design and implementation of distinctive 3D-inspired brand interactions, purposeful motion choreography, and tactile user interfaces for Qubizon Digital Solutions (*"All your digital needs in one cube"*).

## Core Principles & Constraints

1. **Brand Motif**: The interactive 3D cube is Qubizon's core visual metaphor. It organizes multi-disciplinary digital services (Website Development, SEO, Social Media Marketing, Paid Advertising, and Content Marketing) into a cohesive, tactile experience.
2. **Simplest Effective Solution First**:
   - Always evaluate modern CSS 3D transforms (`perspective`, `transform-style: preserve-3d`, `rotate3d()`, `matrix3d()`) and SVG/Canvas before considering external libraries.
   - **Explicit Approval Gate**: Never automatically install or import heavy 3D or animation libraries (such as Three.js, `@react-three/fiber`, GSAP, or Framer Motion) without first evaluating technical necessity, performance trade-offs, and obtaining explicit user permission.
3. **Performance & GPU Efficiency**:
   - Animate exclusively compositor-friendly properties (`transform` and `opacity`). Never animate layout or paint triggers (`width`, `height`, `margin`, `top`, `left`, `filter`).
   - Use `will-change` sparingly on active elements and remove it once animations settle.
   - Target strict 60fps/120fps execution with zero frame drops or Cumulative Layout Shift (CLS).

## Step-by-Step Procedure

### Step 1: 3D Cube Architecture & Service Mapping
- Structure the cube faces or interactive faceted panels to represent core agency service pillars:
  - **Front Face**: Web Development & Architecture (Modern Next.js, performance, UI/UX).
  - **Top Face**: Search Engine Optimization (Technical SEO, rankings, organic authority).
  - **Right Face**: Social Media Marketing (Brand engagement, community, social reach).
  - **Left Face**: Paid Advertising & Performance Marketing (PPC, conversion campaigns, ROI).
  - **Back Face**: Content Marketing & Strategy (Authority copy, brand narrative, distribution).
  - **Bottom Face**: Core Foundation & Analytics (Data intelligence, reporting, infrastructure).
- Ensure each face or panel is individually actionable, revealing service capabilities and direct calls to action upon interaction.

### Step 2: Interaction Design & Choreography
- **Micro-Interactions**: Hover states, magnetic button cues, and focal glow transitions must remain crisp (150ms–300ms ease-out). Avoid long, sluggish tween durations.
- **Scroll Choreography**: Coordinate scroll-driven reveals so elements enter naturally with purposeful hierarchy. Avoid distracting parallax layers or auto-scrolling triggers that hijack the user's scrollbar.
- **Tactile Feedback**: Interactive cube manipulation (dragging, rotating, or clicking face tabs) must respond immediately with zero input latency.

### Step 3: Accessibility (a11y) & Reduced Motion Compliance
- **Reduced Motion Support**:
  ```css
  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
  ```
  When reduced motion is preferred, present the services in a clean, high-contrast, accessible 2D grid layout rather than animated 3D rotation.
- **Keyboard Navigation**:
  - All interactive faces and service panels must be reachable via standard `Tab` navigation.
  - Provide dedicated arrow-key or button controls (e.g., "Previous Service", "Next Service") to navigate between faces without requiring pointer/drag gestures.
  - Maintain prominent `:focus-visible` outlines on all interactive controls.

### Step 4: Responsive & Mobile Fallbacks
- On mobile viewports (< 768px) and touch devices:
  - Do not force continuous 3D pointer tracking or complex drag gestures that conflict with native page scrolling.
  - Implement touch-friendly carousel cards, swipable segmented faces, or an isometric 2.5D perspective card stack.
  - Ensure touch targets are at least 44x44px with adequate tap spacing.

## Acceptance Criteria
- [ ] 3D cube visual metaphor aligns with Qubizon's 5 core service offerings.
- [ ] Lightweight CSS 3D or native web platform features preferred over third-party runtime bundles.
- [ ] No animation libraries installed without explicit evaluation and prior user approval.
- [ ] Strict 60fps compositor performance with zero Cumulative Layout Shift (CLS).
- [ ] Complete `prefers-reduced-motion` fallback provided.
- [ ] Full keyboard accessibility for all service panels with clear focus rings.
- [ ] Smooth, non-blocking touch experience across mobile and tablet viewports.
