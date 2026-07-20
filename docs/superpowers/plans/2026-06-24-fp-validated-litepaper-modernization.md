# FP Validated Litepaper Modernization Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a separate Next.js test site for the FP Validated litepaper without modifying the original HTML.

**Architecture:** The new app lives under `modern/` and uses Next.js App Router with TypeScript. Content and visual primitives are separated so future pages, language support, and site sections can evolve without editing one large HTML file.

**Tech Stack:** Next.js, React, TypeScript, Tailwind CSS, ESLint, Vitest, Testing Library.

---

### Task 1: Scaffold Test App

**Files:**
- Create: `modern/package.json`
- Create: `modern/next.config.mjs`
- Create: `modern/tsconfig.json`
- Create: `modern/postcss.config.mjs`
- Create: `modern/eslint.config.mjs`
- Create: `modern/vitest.config.ts`
- Create: `modern/tests/litepaper-content.test.ts`
- Copy: `img/*` to `modern/public/img/*`

- [ ] **Step 1: Write failing structural test**

Create `modern/tests/litepaper-content.test.ts` with assertions that the source file is protected and the new app exposes all 13 litepaper sections.

- [ ] **Step 2: Run test to verify it fails**

Run: `cd modern && npm test -- --run`
Expected: FAIL because app dependencies and content module do not exist yet.

- [ ] **Step 3: Add app configuration and dependencies**

Create the package and configuration files needed for Next.js, Tailwind, TypeScript, ESLint, and Vitest.

- [ ] **Step 4: Copy isolated assets**

Run: `mkdir -p modern/public/img && cp img/* modern/public/img/`

- [ ] **Step 5: Run install**

Run: `cd modern && npm install`
Expected: dependencies install and `package-lock.json` is created.

### Task 2: Content Model

**Files:**
- Create: `modern/content/litepaper.ts`
- Modify: `modern/tests/litepaper-content.test.ts`

- [ ] **Step 1: Keep failing content expectations**

Test the nav labels, hero stats, galleries, and language strings from `content/litepaper.ts`.

- [ ] **Step 2: Implement typed content**

Create typed section data, navigation data, stats, team entries, network chips, gallery images, and roadmap entries.

- [ ] **Step 3: Run tests**

Run: `cd modern && npm test -- --run`
Expected: PASS.

### Task 3: Layout And Core UI

**Files:**
- Create: `modern/app/layout.tsx`
- Create: `modern/app/page.tsx`
- Create: `modern/app/globals.css`
- Create: `modern/components/LitepaperApp.tsx`
- Create: `modern/components/layout/Sidebar.tsx`
- Create: `modern/components/layout/TopStrip.tsx`
- Create: `modern/components/layout/PageFooter.tsx`
- Create: `modern/components/ui/Reveal.tsx`
- Create: `modern/components/ui/StatGrid.tsx`
- Create: `modern/components/ui/RowList.tsx`
- Create: `modern/components/ui/Chip.tsx`
- Create: `modern/components/ui/Carousel.tsx`

- [ ] **Step 1: Add page smoke test**

Extend tests so the app module exports renderable section data and validates the current section count.

- [ ] **Step 2: Implement layout shell**

Create metadata, app layout, sidebar, top strip, footer, global CSS tokens, and reusable UI primitives.

- [ ] **Step 3: Run tests**

Run: `cd modern && npm test -- --run`
Expected: PASS.

### Task 4: Section Components

**Files:**
- Create: `modern/components/sections/AllSections.tsx`
- Create: `modern/components/sections/DiagramSvgs.tsx`
- Modify: `modern/components/LitepaperApp.tsx`

- [ ] **Step 1: Add section rendering expectations**

Test that every section id from the nav is represented by a rendered section component.

- [ ] **Step 2: Implement all sections**

Move the current page into React sections while preserving existing design, copy, images, galleries, inline SVG diagrams, and language switching behavior.

- [ ] **Step 3: Run tests**

Run: `cd modern && npm test -- --run`
Expected: PASS.

### Task 5: Verification

**Files:**
- Read-only check: `fp-validated-litepaper.html`
- Build check: `modern/`

- [ ] **Step 1: Confirm original source remains unchanged by path isolation**

Run: `find modern -maxdepth 2 -type f | sort | head` and verify all new app files are under `modern/`.

- [ ] **Step 2: Lint**

Run: `cd modern && npm run lint`
Expected: PASS.

- [ ] **Step 3: Production build**

Run: `cd modern && npm run build`
Expected: PASS.

- [ ] **Step 4: Start local dev server**

Run: `cd modern && npm run dev -- --port 3001`
Expected: server starts at `http://localhost:3001`.

- [ ] **Step 5: Browser smoke check**

Open `http://localhost:3001`, verify desktop/mobile layout renders, galleries display images, language toggle works, and sidebar nav updates during scroll.
