# System Architecture & Technical Specifications

This document outlines the architectural paradigms, rendering pipeline, component hierarchy, and design decisions governing the portfolio application.

---

## 1. High-Level System Overview

The portfolio is structured around the Next.js App Router, separating static content declarations, interactive 3D client routines, interactive arcade games, and presentational component layers.

[ Client Viewport ]
       │
       ├──> [ Interactive Hero 3D ] (CSS 3D Transforms / preserve-3d Matrix Solving Engine)
       │
       ├──> [ Header Engine ] (Scroll-Linked Reading Progress Bar / Backdrop Filter)
       │
       ├──> [ Structural Layout Layer ] (Navigation, Hero, Work, Toolkit, About, Games, Contact)
       │         │
       │         ├──> [ ProjectCard Engine ] <── [ Centralized Typed Content: src/data/projects.ts ]
       │         │         │
       │         │         ├──> Responsive Bounded Containers (max-w-[1720px])
       │         │         └──> Next.js Optimized Image Pipeline (WebP Formats)
       │         │
       │         └──> [ Arcade Lab ] (Snake Canvas & Matrix Breach Protocol)
       │
       └──> [ Procedural Art Engine ] (Python Math / SVG Coordinate Generators)

---

## 2. Component Hierarchy & Responsibilities

- src/app/page.tsx: Entry orchestrator rendering sections in semantic order (Hero, SelectedWork, Toolkit, About, Games, Contact).
- src/canvas/HeroInteractive.tsx: Isometric 3D Rubik's cube engine using CSS 3D matrix transforms and deterministic solving state machine.
- src/components/layout/Header.tsx: Fixed navigation header with dynamic scroll position calculation driving an animated progress track.
- src/components/ui/ProjectCard.tsx: Modular display unit featuring strict aspect-ratio enforcement, responsive layout styling, and external target metadata.
- src/components/games/SnakeGame.tsx & BreachGame.tsx: Isolated interactive arcade modules with keyboard event listeners and state loop isolation.
- src/data/projects.ts: Single source of truth containing typed schema contracts for featured applications.

---

## 3. Asset Pipeline & Optimization Strategy

1. Visual Media (Showcase):
   - Screen captures are pre-converted to modern .webp formats.
   - Served through next/image with dynamic sizing breakpoints to minimize Cumulative Layout Shift (CLS) and maximize First Contentful Paint (FCP).

2. Procedural Artifacts:
   - Vector graphics and matrix coordinate systems generated via standalone Python scripts (python/generate_*.py).
   - SVG outputs mounted statically within the public/generated/ distribution directory.

---

## 4. State & Styling Paradigms

- Tailwind CSS: Utility-first styling with zero runtime bundle overhead.
- Bounded Container Architecture: Global max-w-[1720px] inner container grid with padding-aligned borders (#181914) replacing edge-to-edge section dividers.
- Dark Mode Native: Engineered with dark-mode aesthetic (#080906) with muted neutral tones (#9ea094, #55574e) and accent lime highlights (#c8e98a).
- TypeScript Strict Mode: Zero implicit any types across data schemas and component props.