import math
import os
from common import save_svg

def generate_hero_field():
    width, height = 1440, 900
    lines = []
    
    # 28 layered subtle topographic waves
    num_curves = 28
    for i in range(num_curves):
        y_base = 80 + i * 28
        points = []
        for x in range(0, width + 40, 30):
            # Gentle mathematical wave calculation
            wave1 = math.sin((x * 0.0035) + (i * 0.2)) * 35
            wave2 = math.cos((x * 0.0018) - (i * 0.15)) * 20
            y = y_base + wave1 + wave2
            points.append(f"{x:.1f},{y:.1f}")
            
        pts_str = " ".join(points)
        # Ultra subtle matcha tone line
        lines.append(
            f'<polyline points="{pts_str}" fill="none" stroke="#a3c470" stroke-opacity="0.04" stroke-width="0.8" />'
        )

    save_svg("hero-field.svg", width, height, lines, title="Hero Contour Field")

if __name__ == "__main__":
    generate_hero_field()