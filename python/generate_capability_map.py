import os

def generate_capability_map():
    width = 680
    height = 540

    # Sameer's actual stack nodes
    nodes = {
        "next": {"label": "Next.js", "x": 340, "y": 270, "is_center": True},
        "react": {"label": "React", "x": 190, "y": 150},
        "ts": {"label": "TypeScript", "x": 520, "y": 155},
        "python": {"label": "Python", "x": 190, "y": 390},
        "mongo": {"label": "MongoDB", "x": 340, "y": 450},
        "node": {"label": "Node.js", "x": 520, "y": 380},
    }

    links = [
        ("next", "react"),
        ("next", "ts"),
        ("next", "python"),
        ("next", "mongo"),
        ("next", "node"),
        ("react", "ts"),
        ("react", "python"),
        ("ts", "node"),
        ("python", "mongo"),
        ("node", "mongo"),
    ]

    # Generate dot-matrix grid background
    dots_svg = []
    for x in range(30, width, 32):
        for y in range(30, height, 32):
            dots_svg.append(f'<circle cx="{x}" cy="{y}" r="0.8" fill="#323528" opacity="0.6"/>')

    # Generate connection lines
    lines_svg = []
    for src_k, tgt_k in links:
        s = nodes[src_k]
        t = nodes[tgt_k]
        lines_svg.append(
            f'<line x1="{s["x"]}" y1="{s["y"]}" x2="{t["x"]}" y2="{t["y"]}" stroke="#22261a" stroke-width="1" />'
        )

    # Generate nodes
    nodes_svg = []
    for k, n in nodes.items():
        x, y = n["x"], n["y"]
        if n.get("is_center"):
            nodes_svg.append(f'''
            <g>
                <circle cx="{x}" cy="{y}" r="32" fill="#0c0d09" stroke="#2c3021" stroke-width="1.2" />
                <circle cx="{x}" cy="{y}" r="26" fill="#080906" stroke="#1f2317" stroke-width="1" />
                <path d="M {x-6} {y} L {x+6} {y} M {x} {y-6} L {x} {y+6}" stroke="#c8e98a" stroke-width="1.2" />
                <text x="{x}" y="{y+50}" text-anchor="middle" fill="#d8dad0" font-size="13px" font-family="monospace">{n["label"]}</text>
            </g>
            ''')
        else:
            nodes_svg.append(f'''
            <g>
                <circle cx="{x}" cy="{y}" r="14" fill="#080906" stroke="#25291b" stroke-width="1.2" />
                <circle cx="{x}" cy="{y}" r="5" fill="#080906" stroke="#4d533b" stroke-width="1" />
                <text x="{x}" y="{y+32}" text-anchor="middle" fill="#8e9084" font-size="12px" font-family="monospace">{n["label"]}</text>
            </g>
            ''')

    svg_content = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {width} {height}" width="100%" height="100%">
    <rect width="{width}" height="{height}" fill="#080906" />
    {''.join(dots_svg)}
    {''.join(lines_svg)}
    {''.join(nodes_svg)}
</svg>'''

    os.makedirs("public/generated", exist_ok=True)
    with open("public/generated/capability-map.svg", "w", encoding="utf-8") as f:
        f.write(svg_content)
    print("✓ public/generated/capability-map.svg updated with your real stack!")

if __name__ == "__main__":
    generate_capability_map()