"""Deterministic, dependency-light SVG helpers. All artwork is original."""
from pathlib import Path
import math

OUT = Path(__file__).resolve().parent.parent / 'public' / 'generated'
OUT.mkdir(parents=True, exist_ok=True)
SEED = 2718

def save_svg(name, width, height, parts, title="Procedural system field"):
    body = "".join(parts)
    (OUT / name).write_text(
        f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {width} {height}"><title>{title}</title>{body}</svg>',
        encoding="utf-8"
    )
    print(f"Generated: {OUT / name}")

def path(points, stroke="#a6b79f", opacity=0.5, width=0.7):
    coords = " ".join(f"{x:.1f},{y:.1f}" for x, y in points)
    return f'<polyline points="{coords}" fill="none" stroke="{stroke}" stroke-opacity="{opacity}" stroke-width="{width}"/>'