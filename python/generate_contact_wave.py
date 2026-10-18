import math
import os

def generate_contact_wave():
    width = 1600
    height = 360
    lines = 45 # Exact overlapping wave count matching image_35.png
    points = 240

    svg_paths = []

    for i in range(lines):
        t = i / (lines - 1)
        path_data = []

        # Complex high-frequency curve generation matching computational grid (image_35.png)
        for j in range(points):
            x = (j / (points - 1)) * width
            norm_x = j / (points - 1)

            # S-shape curve signature sweep (Horizontal high-low progression)
            curve = math.sin(norm_x * math.pi * 0.95 + 0.15)
            
            # Sub-frequency noise to simulate computational overlapping (frequency matrix style)
            ripple = math.cos(norm_x * math.pi * 2.8 - 0.5) * 6.5 * math.sin(norm_x * math.pi)
            
            # Multi-layer vertical shifts representing custom sweep wave ribbon
            elevation = (1.0 - norm_x) * 110 + 45
            spread = (t - 0.45) * (45 + norm_x * 90)

            # Combined base curves, computational ripples, and spreads
            y = (height * 0.55) + spread - (curve * elevation) + ripple

            if j == 0:
                path_data.append(f"M {x:.2f} {y:.2f}")
            else:
                path_data.append(f"L {x:.2f} {y:.2f}")

        # Precise gradient matching the ultra-thin, dense sweep in image_35.png
        opacity = 0.04 + 0.28 * math.sin(t * math.pi)
        svg_paths.append(
            f'<path d="{" ".join(path_data)}" fill="none" stroke="#c8e98a" stroke-width="0.5" stroke-opacity="{opacity:.3f}" />'
        )

    svg_content = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {width} {height}" width="100%" height="100%" fill="none">
  {''.join(svg_paths)}
</svg>'''

    os.makedirs("public/generated", exist_ok=True)
    with open("public/generated/contact-wave.svg", "w", encoding="utf-8") as f:
        f.write(svg_content)
    print("✓ Beautiful computational wave image generated in public/generated/contact-wave.svg!")

if __name__ == "__main__":
    generate_contact_wave()