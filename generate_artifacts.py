import math
import os

# Render isometric projection coordinates with larger scale
def project_iso(x, y, z, origin_x=300, origin_y=290, scale=56):
    iso_x = origin_x + (x - y) * math.cos(math.radians(30)) * scale
    iso_y = origin_y + (x + y) * math.sin(math.radians(30)) * scale - z * scale
    return round(iso_x, 2), round(iso_y, 2)

def generate_svg():
    os.makedirs("public/generated", exist_ok=True)
    svg_lines = [
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 580" fill="none" class="w-full h-full">'
    ]
    
    dim = 3
    gap = 0.14
    cube_size = 1.0 - gap

    # Render back-to-front
    for z in range(dim):
        for y in range(dim):
            for x in range(dim):
                # Highlight active computing nodes
                is_accent = (x == 2 and y == 0 and z == 2) or (x == 0 and y == 2 and z == 1) or (x == 2 and y == 2 and z == 0)
                
                top_fill = "#34d399" if is_accent else "#1c1f26"
                left_fill = "#10b981" if is_accent else "#14171c"
                right_fill = "#059669" if is_accent else "#0e1014"
                stroke = "#6ee7b7" if is_accent else "#2d3139"

                x0, y0, z0 = x + gap, y + gap, z + gap
                x1, y1, z1 = x0 + cube_size, y0 + cube_size, z0 + cube_size

                # Top Face
                p_top = [
                    project_iso(x0, y0, z1), project_iso(x1, y0, z1),
                    project_iso(x1, y1, z1), project_iso(x0, y1, z1)
                ]
                pts_top = " ".join(f"{px},{py}" for px, py in p_top)
                svg_lines.append(f'<polygon points="{pts_top}" fill="{top_fill}" stroke="{stroke}" stroke-width="1.4" stroke-linejoin="round"/>')

                # Left Face
                p_left = [
                    project_iso(x0, y1, z0), project_iso(x1, y1, z0),
                    project_iso(x1, y1, z1), project_iso(x0, y1, z1)
                ]
                pts_left = " ".join(f"{px},{py}" for px, py in p_left)
                svg_lines.append(f'<polygon points="{pts_left}" fill="{left_fill}" stroke="{stroke}" stroke-width="1.4" stroke-linejoin="round"/>')

                # Right Face
                p_right = [
                    project_iso(x1, y0, z0), project_iso(x1, y1, z0),
                    project_iso(x1, y1, z1), project_iso(x1, y0, z1)
                ]
                pts_right = " ".join(f"{px},{py}" for px, py in p_right)
                svg_lines.append(f'<polygon points="{pts_right}" fill="{right_fill}" stroke="{stroke}" stroke-width="1.4" stroke-linejoin="round"/>')

    svg_lines.append('</svg>')
    
    with open("public/generated/cube-artifact.svg", "w") as f:
        f.write("\n".join(svg_lines))
    print("✓ Updated public/generated/cube-artifact.svg with high-impact scaling")

if __name__ == "__main__":
    generate_svg()