# System Architecture & Technical Specifications

This document outlines the architectural paradigms, rendering pipeline, component hierarchy, and design decisions governing the portfolio application.

---

## 1. High-Level System Overview

The portfolio is structured around the Next.js App Router, separating static content declarations, dynamic interactive canvas routines, and presentational component layers.

```text
[ Client Viewport ]
       │
       ├──> [ Interactive Hero Canvas ] (HTML5 Canvas / RequestAnimationFrame Loop)
       │
       ├──> [ Structural Layout Layer ] (Navigation, Hero, Work, Toolkit, About)
       │         │
       │         └──> [ ProjectCard Engine ] <── [ Centralized Typed Content: projects.ts ]
       │                   │
       │                   ├──> Responsive Aspect-Ratio Containers
       │                   └──> Next.js Optimized Image Pipeline (WebP Formats)
       │
       └──> [ Procedural Art Engine ] (Python Math / SVG Coordinate Generators)



---

## 2. Component Hierarchy & Responsibilities

- `src/app/page.tsx`: Entry orchestrator rendering sections in semantic order (Hero, Work, Toolkit, About, Contact).
- `src/canvas/HeroInteractive.tsx`: High-performance interactive geometric canvas reacting to client pointer interactions without blocking UI threads.
- `src/components/ProjectCard.tsx`: Modular display unit featuring strict aspect-ratio enforcement, responsive image presentation (object-contain), and external target metadata.
- `src/content/projects.ts`: Single source of truth containing typed schema contracts for featured applications.

---

## 3. Asset Pipeline & Optimization Strategy

1. **Visual Media (Showcase)**:
   - Screen captures are pre-converted to modern .webp formats.
   - Served through `next/image` with dynamic sizing breakpoints to minimize Cumulative Layout Shift (CLS) and maximize First Contentful Paint (FCP).

2. **Procedural Artifacts**:
   - Vector graphics and matrix coordinate systems generated via standalone Python scripts (`generate_artifacts.py`).
   - SVG outputs mounted statically within the `public/generated/` distribution directory.

---

## 4. State & Styling Paradigms

- **Tailwind CSS**: Strict utility styling ensuring zero runtime CSS bundle overhead.
- **Dark Mode Native**: Engineered with zinc-tier contrasting palettes for prolonged developer reading sessions.
- **TypeScript Strict Mode**: Zero implicit `any` types across data schemas and component props.  