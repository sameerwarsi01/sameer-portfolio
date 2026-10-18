import math
import os

def generate_study_02():
    width = 600
    height = 450
    lines = 42
    points_per_line = 180

    svg_paths = []

    for i in range(lines):
        y_base = 50 + (i / (lines - 1)) * (height - 100)
        path_data = []

        for j in range(points_per_line):
            x = (j / (points_per_line - 1)) * width
            
            # Distance from two focal nodes (Topographic contour centers)
            d1 = math.hypot(x - 220, y_base - 210)
            d2 = math.hypot(x - 390, y_base - 260)

            # Mathematical elevation wave
            elevation = (
                math.sin(d1 * 0.05 - 1.2) * math.exp(-d1 * 0.007) * 44 +
                math.cos(d2 * 0.06 + 0.8) * math.exp(-d2 * 0.008) * 36 +
                math.sin(x * 0.025 + y_base * 0.02) * 5
            )

            y = y_base - elevation

            if j == 0:
                path_data.append(f"M {x:.2f} {y:.2f}")
            else:
                path_data.append(f"L {x:.2f} {y:.2f}")

        # Gold/bronze stroke with subtle depth fade
        opacity = 0.25 + 0.65 * (i / lines)
        svg_paths.append(
            f'<path d="{" ".join(path_data)}" fill="none" stroke="#d5b883" stroke-width="0.85" stroke-opacity="{opacity:.2f}" />'
        )

    svg_content = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {width} {height}" width="100%" height="100%">
  <rect width="{width}" height="{height}" fill="#0a0b07" />
  {''.join(svg_paths)}
</svg>'''

    os.makedirs("public/generated", exist_ok=True)
    with open("public/generated/study-02.svg", "w", encoding="utf-8") as f:
        f.write(svg_content)
    print("✓ public/generated/study-02.svg created successfully!")

if __name__ == "__main__":
    generate_study_02()