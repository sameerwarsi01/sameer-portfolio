# Parametric Vector Art Generators (Python)

This directory contains standalone Python mathematical scripts designed to generate procedural SVG vector artworks utilized across the portfolio's background and study sections.

---

## 1. Overview & Math Pipeline

All graphics are computed deterministically using standard mathematical functions (`sin`, `cos`, linear interpolation, and bezier curves) rather than external heavy asset libraries.

- No External Dependencies: Built entirely using Python's native `math` and standard file I/O libraries.
- Vector Accuracy: Outputs crisp, scalable vector graphics (.svg) placed directly into `public/generated/`.
- Precision Tuning: Configurable parameters for frequency, amplitude, stroke weight, opacity gradients, and canvas bounds.

---

## 2. Script Manifest & Generated Assets

1. generate_contact_wave.py:
   - Output: public/generated/contact-wave.svg
   - Role: Generates the high-frequency decaying sine-wave ribbon featured behind the Contact section.
   - Core Math: Multi-frequency harmonic wave superposition with decaying edge amplitudes.

2. generate_about_wave.py:
   - Output: public/generated/about-wave.svg
   - Role: Generates smooth flowing ribbon lines for the About section study showcase.
   - Core Math: Variable-phase sinusoidal ribbons with gradient opacity mapping.

3. generate_capability_map.py:
   - Output: public/generated/capability-map.svg
   - Role: Produces the network node constellation matrix used in the Toolkit section.
   - Core Math: Deterministic coordinate distribution with distance-based threshold connections.

4. generate-cube-poster.py:
   - Output: Fallback poster image asset for the 3D isometric cube hero section.

5. common.py:
   - Shared utility functions, SVG header/footer wrappers, and coordinate transformation helpers.

---

## 3. How to Run & Regenerate

### Requirements
- Python 3.8 or higher installed on your system.

### Execution

Root directory se kisi bhi script ko run karne ke liye:

python python/generate_contact_wave.py
python python/generate_about_wave.py
python python/generate_capability_map.py

Sari generated `.svg` files automatically `public/generated/` folder me update ho jayengi.

---

## 4. Customizing Parameters

Agar aapko wave ki height, density ya color change karna ho, toh directly script me values modify kar sakte hain:
- AMPLITUDE: Wave ki vertical height control karta hai.
- FREQUENCY: Wave ki density (kitne curves banenge) set karta hai.
- STROKE_COLOR: Line ka hex color (jaise `#181914` ya `#c8e98a`).
- OPACITY: Gradient transparency depth set karta hai.

---

Developed for portfolio parametric visualization. © 2026 Sameer Warsi.