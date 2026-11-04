---
name: browser-testing
description: End-to-end browser inspection, user journey verification, and visual regression workflows using verified Chrome DevTools MCP tools or fallback browser runners.
---

# Browser Testing Skill

This skill outlines how to perform automated browser inspection, regression testing, and user flow verification.

## Prerequisite Checks

Before running browser tests:
1. Verify if `chrome-devtools-mcp` is currently available by checking registered MCP tools.
   - Look for tools like `navigate_page`, `click`, `fill`, `take_screenshot`, `list_console_messages`.
   - If tools are absent or the browser instance fails to launch, do not assume automated browser control is functional. Switch to CLI/unit test validation or guide the user through manual browser verification.
2. Confirm that the application's local development or preview server is actively listening on a known URL (e.g., `http://localhost:3000`).

## Step-by-Step Procedure

### Step 1: Session Initialization & Viewport Setup
- Launch or identify an active browser tab using `new_page` or `list_pages`.
- Configure the testing viewport with `resize_page` or `emulate`:
  - Mobile: 375x667 (e.g., iPhone SE equivalent)
  - Tablet: 768x1024 (e.g., iPad portrait)
  - Desktop: 1280x800 or 1440x900
- Navigate to the target page URL with `navigate_page`.

### Step 2: Critical User Journey Testing
- Execute interactive flows using explicit selectors:
  - Text input: `fill` or `fill_form`
  - Button actions: `click`
  - Keyboard navigation: `press_key` (Tab, Enter, Escape)
- Always use `wait_for` to ensure elements or state transitions settle before proceeding to subsequent interaction steps.

### Step 3: Console & Network Health Inspection
- Query runtime browser logs using `list_console_messages`:
  - Identify uncaught JavaScript exceptions, unhandled Promise rejections, and CSP violation warnings.
- Query network traffic using `list_network_requests`:
  - Check for failed HTTP requests (4xx, 5xx status codes).
  - Verify that critical static assets (fonts, images, stylesheets) load with status 200/304.

### Step 4: Visual & Accessibility Inspection
- Capture visual snapshots using `take_screenshot` at key journey milestones or error states.
- Capture accessibility tree data using `take_snapshot` to verify accessible labels, roles, and focus outlines.
- Clean up resources after testing by closing created temporary pages with `close_page`.

## Acceptance Criteria
- [ ] Browser tooling availability explicitly verified before attempting execution.
- [ ] Tested journeys complete without unhandled console errors or broken network requests (status >= 400).
- [ ] Responsive layouts verified across mobile and desktop viewport dimensions.
- [ ] Visual screenshots or DOM snapshots captured as verifiable evidence of test completion.
- [ ] Test reporting specifies actual testing environment, URL, viewport dimensions, and observed outcomes.
