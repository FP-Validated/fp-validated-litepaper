# FP Validated Litepaper Modernization Design

Date: 2026-06-24

## Goal

Modernize the current FP Validated litepaper site into a product-grade, extensible implementation while preserving the existing deployed design and protecting the original single-file HTML source.

The new implementation will be developed as a separate test site. The current `fp-validated-litepaper.html` file remains untouched and acts as the visual/content baseline.

## Scope

In scope:

- Create a separate modern test site under `modern/`.
- Rebuild the current litepaper with Next.js App Router, React, TypeScript, and Tailwind CSS.
- Preserve the current visual design, layout rhythm, section order, dark theme, typography, image usage, scroll reveal behavior, language toggle, nav scroll-spy, marquees, and galleries.
- Split content, layout, UI primitives, and page assembly into maintainable modules.
- Add product-grade basics: metadata, accessibility improvements, type checking, linting, local dev server, and production build verification.

Out of scope:

- Redesigning the brand, visual style, information architecture, or content strategy.
- Changing the production deployment at `https://litepaper.4pillars.info/`.
- Editing `fp-validated-litepaper.html`.
- Introducing a CMS or backend service in this iteration.

## Architecture

The test implementation will live in `modern/`.

Planned structure:

```text
modern/
  app/
    globals.css
    layout.tsx
    page.tsx
  components/
    layout/
      Sidebar.tsx
      TopStrip.tsx
      PageFooter.tsx
    sections/
      CoverSection.tsx
      VisionSection.tsx
      FootprintSection.tsx
      TeamSection.tsx
      NetworksSection.tsx
      PrinciplesSection.tsx
      ArchitectureSection.tsx
      SecuritySection.tsx
      ObservabilitySection.tsx
      OperationsSection.tsx
      CoverageSection.tsx
      LiveSection.tsx
      RoadmapSection.tsx
    ui/
      Carousel.tsx
      Chip.tsx
      DiagramFrame.tsx
      Reveal.tsx
      RowList.tsx
      StatGrid.tsx
  content/
    litepaper.ts
  public/
    img/
  package.json
  tsconfig.json
```

`app/page.tsx` will assemble the page from section components. `content/litepaper.ts` will hold structured text, stats, network chips, gallery items, team entries, and roadmap items. Components will receive data through typed props instead of embedding large content arrays in markup.

## Styling

The current visual system will be preserved:

- Black background, restrained grayscale palette, fixed left sidebar on desktop, single-column mobile layout.
- Existing max widths, section spacing, borders, dark panels, stat grids, pill chips, carousel proportions, and reveal motion.
- Pretendard web font loading.

Tailwind CSS will provide utility styling, but existing design tokens will be represented through CSS custom properties in `globals.css` so the implementation remains close to the current visual language.

## Interactivity

Client-side components will handle:

- EN/KO language toggle with localStorage persistence.
- Scroll reveal animation.
- Sidebar active-state scroll-spy.
- Marquee content generation.
- Carousel arrows, dots, keyboard navigation, and drag scrolling.

The page remains static and can be built without a backend.

## Assets

Existing files under `img/` will be copied into `modern/public/img/` for test-site isolation. External FP Validated logo usage may be replaced with the existing local symbol only if needed for reliable local development, but the first implementation should preserve current image sources unless a build or rendering issue requires localization.

## Quality Criteria

The implementation is complete when:

- `fp-validated-litepaper.html` is unchanged.
- `modern/` runs locally with `npm run dev`.
- `npm run lint` and `npm run build` complete successfully.
- The test page visually matches the deployed site closely at desktop and mobile widths.
- Language toggle, sidebar nav active state, reveal animation, marquee, TVL display, and both galleries work.
- Basic metadata and accessible labels are present.

## Risks

- Exact pixel matching may require iterative CSS tuning after browser screenshots.
- Inline SVG diagrams from the original HTML are large and should be moved carefully to avoid changing appearance.
- The current page mixes English and Korean content through `data-ko`; restructuring into typed content must preserve HTML fragments such as `<br>` and emphasis where needed.

## Implementation Notes

Because this directory is not a git repository, the design document cannot be committed locally. File-level isolation will protect the original source: all generated application files go under `modern/`, and the original HTML remains untouched.
