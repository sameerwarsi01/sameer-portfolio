import math
import os

def generate_wave_ribbon():
    width = 900
    height = 120
    lines = 32
    points = 180

    svg_paths = []

    for i in range(lines):
        t = i / (lines - 1)
        path_data = []

        for j in range(points):
            x = (j / (points - 1)) * width
            norm_x = (x / width) * 2 - 1  # -1 to 1

            # Bell curve envelope: ends taper down to thin line
            envelope = math.exp(-3.5 * (norm_x ** 2))

            # Sinusoidal wave twist
            wave = math.sin(norm_x * math.pi * 1.5 + (t * 2.2))
            thickness = (t - 0.5) * 45 * envelope

            y = (height / 2) - (wave * 25 * envelope) + thickness

            if j == 0:
                path_data.append(f"M {x:.2f} {y:.2f}")
            else:
                path_data.append(f"L {x:.2f} {y:.2f}")

        # Matcha green stroke with subtle opacity
        opacity = 0.20 + 0.55 * math.sin(t * math.pi)
        svg_paths.append(
            f'<path d="{" ".join(path_data)}" fill="none" stroke="#c8e98a" stroke-width="0.75" stroke-opacity="{opacity:.2f}" />'
        )

    svg_content = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {width} {height}" width="100%" height="100%" fill="none">
  {''.join(svg_paths)}
</svg>'''

    os.makedirs("public/generated", exist_ok=True)
    with open("public/generated/about-wave.svg", "w", encoding="utf-8") as f:
        f.write(svg_content)
    print("✓ public/generated/about-wave.svg successfully generated!")

if __name__ == "__main__":
    generate_wave_ribbon()