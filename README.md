# Portfolio — Sameer Warsi

> A minimalist, typography-driven personal portfolio engineered with Next.js (App Router), TypeScript, and Tailwind CSS. Features custom computational parametric artwork, an interactive isometric 3D Rubik's cube, playable web experiments, and strict container-aligned layouts.

---

## Table of Contents

- Overview
- Key Features
- Tech Stack
- Project Architecture
- Parametric Artwork Generation
- Getting Started
- Deployment
- Connect

---

## Overview

Designed with an editorial, dark-mode aesthetic (#080906) inspired by high-craft computational interfaces. The portfolio combines performance optimizations with micro-interactions:

- Dynamic reading/scroll progress indicator pinned to a blurred navigation header.
- Real isometric 3D CSS Rubik's cube simulation with step-by-step solving sequences.
- Independent arcade game modules (Classic Snake & Cyber Matrix Buffer Breach).
- Bounded container divider architecture matching monospaced grid standards.

---

## Key Features

- Interactive Hero Experience: Real 3D CSS isometric matrix that executes procedural algorithm solves and exposes interactive states (Play animation / Static view).
- Selected Work: High-visibility case study layout featuring stacked interface descriptors, live preview links, and technology badges.
- Parametric Vector Artwork: Custom Python scripts generating high-frequency sinusoidal ribbons and network node maps rendered natively as optimized SVGs.
- Arcade Lab (Games):
  - 01 Snake: Smooth canvas-driven classic game with step modes and custom controls.
  - 02 Breach: Matrix buffer code-matching protocol game with time pressure and sequence tracking.
- One-Click Communication: Quick-copy interactive email clipboard action with visual feedback, GitHub profile integration, and custom command palette hints.

---

## Tech Stack

- Framework: Next.js (App Router, React 19)
- Language: TypeScript
- Styling: Tailwind CSS, CSS 3D Transforms
- Artwork & Math: Python 3 (math, svg generators)
- Icons: Custom Inline SVG Paths
- Deployment: Vercel

---

## Project Architecture

├── public/
│   └── generated/               # Python-generated vector assets
│       ├── about-wave.svg
│       ├── capability-map.svg
│       ├── contact-wave.svg
│       └── hero-field.svg
├── python/                      # Algorithmic SVG generation scripts
│   ├── generate_about_wave.py
│   ├── generate_capability_map.py
│   └── generate_contact_wave.py
├── src/
│   ├── app/
│   │   ├── globals.css          # Color palette & root typography
│   │   ├── layout.tsx           # Metadata, fonts, and base structure
│   │   └── page.tsx             # Root page assembler
│   ├── canvas/
│   │   └── HeroInteractive.tsx  # Isometric 3D Rubik's cube engine
│   ├── components/
│   │   ├── games/
│   │   │   ├── BreachGame.tsx   # Cyber buffer sequence hacking minigame
│   │   │   └── SnakeGame.tsx    # Canvas-driven arcade snake
│   │   ├── layout/
│   │   │   └── Header.tsx       # Dynamic scroll progress bar & navbar
│   │   ├── section/
│   │   │   ├── About.tsx        # Bio, capability summary & study artwork
│   │   │   ├── Contact.tsx      # Email copy mechanism & sub-footer
│   │   │   ├── Games.tsx        # Playable arcade container & tabs
│   │   │   ├── Hero.tsx         # Headline typography & 3D canvas
│   │   │   ├── SelectedWork.tsx # Project portfolio showcase
│   │   │   └── Toolkit.tsx      # Connected capability matrix
│   │   └── ui/
│   │       └── ProjectCard.tsx  # Modular showcase row component
│   └── data/
│       └── projects.ts          # Project metadata, stack, and URLs
└── package.json

---

## Parametric Artwork Generation

The vector artwork throughout the site is generated mathematically via Python. If you wish to regenerate or modify the amplitude, frequency, or point density of the curves:

# Generate the contact section sweeping wave
python python/generate_contact_wave.py

# Generate capability map & about ribbons
python python/generate_about_wave.py
python python/generate_capability_map.py

Generated SVGs will be output directly into public/generated/.

---

## Getting Started

### Prerequisites

- Node.js (v18.17.0 or higher)
- npm, pnpm, or yarn
- Python 3.8+ (optional, for regenerating vector graphics)

### Installation

1. Clone the repository:
   git clone https://github.com/sameerwarsi01/portfolio.git
   cd portfolio

2. Install dependencies:
   npm install
   # or
   pnpm install

3. Start the development server:
   npm run dev

4. Open in browser:
   Navigate to http://localhost:3000 to view the application.

---

## Deployment

The easiest way to deploy this Next.js app is via the Vercel Platform:

1. Push your repository to GitHub.
2. Import the project into your Vercel Dashboard.
3. Vercel automatically detects Next.js settings and configures the build command (npm run build).

---

## Connect

- Name: Md Sameer Warsi
- Email: sameerwarsibgp786@gmail.com
- LinkedIn: sameer-warsi-b85067314
- GitHub: @sameerwarsi01

---

Developed with curiosity & precision. © 2026 Sameer Warsi.