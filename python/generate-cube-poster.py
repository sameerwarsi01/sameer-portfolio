import math
from common import save_svg

def generate():
    width, height = 400, 360
    origin_x, origin_y = 200, 80
    size = 36
    cos30 = math.cos(math.pi / 6)
    sin30 = math.sin(math.pi / 6)

    # Osaid's matcha tones
    top_color = "#d2efa0"
    left_color = "#a8cc72"
    right_color = "#7a9c4a"
    stroke_color = "#0a0b07"
    stroke_width = "2.8"

    polygons = []

    # 1. Top Face
    for r in range(3):
        for c in range(3):
            x = origin_x + (c - r) * size * cos30
            y = origin_y + (c + r) * size * sin30
            p1 = f"{x:.2f},{y:.2f}"
            p2 = f"{(x + size * cos30):.2f},{(y + size * sin30):.2f}"
            p3 = f"{x:.2f},{(y + 2 * size * sin30):.2f}"
            p4 = f"{(x - size * cos30):.2f},{(y + size * sin30):.2f}"
            polygons.append(
                f'<polygon points="{p1} {p2} {p3} {p4}" fill="{top_color}" stroke="{stroke_color}" stroke-width="{stroke_width}" stroke-linejoin="round" />'
            )

    # 2. Left Face
    left_origin_x = origin_x - 3 * size * cos30
    left_origin_y = origin_y + 3 * size * sin30
    h = size * 1.05

    for z in range(3):
        for x_idx in range(3):
            x = left_origin_x + x_idx * size * cos30
            y = left_origin_y + x_idx * size * sin30 + z * h
            p1 = f"{x:.2f},{y:.2f}"
            p2 = f"{(x + size * cos30):.2f},{(y + size * sin30):.2f}"
            p3 = f"{(x + size * cos30):.2f},{(y + size * sin30 + h):.2f}"
            p4 = f"{x:.2f},{(y + h):.2f}"
            polygons.append(
                f'<polygon points="{p1} {p2} {p3} {p4}" fill="{left_color}" stroke="{stroke_color}" stroke-width="{stroke_width}" stroke-linejoin="round" />'
            )

    # 3. Right Face
    right_origin_x = origin_x
    right_origin_y = origin_y + 6 * size * sin30

    for z in range(3):
        for y_idx in range(3):
            x = right_origin_x + y_idx * size * cos30
            y = right_origin_y - y_idx * size * sin30 + z * h
            p1 = f"{x:.2f},{y:.2f}"
            p2 = f"{(x + size * cos30):.2f},{(y - size * sin30):.2f}"
            p3 = f"{(x + size * cos30):.2f},{(y - size * sin30 + h):.2f}"
            p4 = f"{x:.2f},{(y + h):.2f}"
            polygons.append(
                f'<polygon points="{p1} {p2} {p3} {p4}" fill="{right_color}" stroke="{stroke_color}" stroke-width="{stroke_width}" stroke-linejoin="round" />'
            )

    save_svg("cube-poster.svg", width, height, polygons, title="Cube Poster")

if __name__ == "__main__":
    generate()