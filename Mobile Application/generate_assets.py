"""
One-off asset generator for the Pawsitive Pet Academy mobile app.
Draws the finalised badge logo (cream / powder blue / tan palette) with
plain PIL shapes, matching website/assets/logo.svg, and exports every
Expo-required raster size. Not part of the app runtime — safe to delete
after assets/ has been generated, or re-run if you tweak the colours.
"""
from PIL import Image, ImageDraw
import os

CREAM = (255, 253, 208, 255)
POWDER = (176, 224, 230, 255)
TAN = (198, 139, 89, 255)
TAN_DARK = (169, 111, 65, 255)
FUR = (221, 177, 138, 255)
CHARCOAL = (74, 59, 42, 255)
WHITE = (255, 255, 255, 255)
LEAF = (150, 169, 124, 255)

OUT = os.path.join(os.path.dirname(__file__), "assets")
os.makedirs(OUT, exist_ok=True)


def draw_badge(size, pad_ratio=0.0, bg=None):
    """Draw the circular dog badge logo at the given pixel size."""
    S = size
    img = Image.new("RGBA", (S, S), (0, 0, 0, 0) if bg is None else bg)
    d = ImageDraw.Draw(img)
    cx = cy = S / 2
    r = S / 2 * (1 - pad_ratio)

    # outer ring
    d.ellipse([cx - r, cy - r, cx + r, cy + r], fill=CREAM, outline=TAN, width=max(2, int(S * 0.03)))
    r2 = r * 0.88
    d.ellipse([cx - r2, cy - r2, cx + r2, cy + r2], outline=POWDER, width=max(1, int(S * 0.015)))

    # leaves
    leaf_r = S * 0.09
    for ang in (200, -20, 90):
        import math
        lx = cx + math.cos(math.radians(ang)) * r * 0.86
        ly = cy + math.sin(math.radians(ang)) * r * 0.86
        d.ellipse([lx - leaf_r, ly - leaf_r * 0.6, lx + leaf_r, ly + leaf_r * 0.6], fill=LEAF)

    # head (drawn first so ears can tuck slightly behind/beside it)
    head_r = r * 0.5
    head_cy = cy - r * 0.02
    d.ellipse([cx - head_r, head_cy - head_r, cx + head_r, head_cy + head_r], fill=FUR)

    # ears (attached to the sides of the head, angled outward)
    ear_r = head_r * 0.42
    ear_y = head_cy - head_r * 0.62
    d.ellipse([cx - head_r * 0.88 - ear_r, ear_y - ear_r, cx - head_r * 0.88 + ear_r, ear_y + ear_r], fill=TAN)
    d.ellipse([cx + head_r * 0.88 - ear_r, ear_y - ear_r, cx + head_r * 0.88 + ear_r, ear_y + ear_r], fill=TAN)

    # muzzle
    mz_w, mz_h = head_r * 0.56, head_r * 0.42
    mzy = head_cy + head_r * 0.42
    d.ellipse([cx - mz_w, mzy - mz_h, cx + mz_w, mzy + mz_h], fill=CREAM)

    # nose
    n_r = head_r * 0.16
    ny = mzy - mz_h * 0.55
    d.ellipse([cx - n_r, ny - n_r * 0.85, cx + n_r, ny + n_r * 0.85], fill=CHARCOAL)

    # eyes
    eye_r = head_r * 0.11
    eyy = head_cy - head_r * 0.05
    for ex in (-0.4, 0.4):
        exx = cx + ex * head_r
        d.ellipse([exx - eye_r, eyy - eye_r, exx + eye_r, eyy + eye_r], fill=CHARCOAL)

    # heart (below the chin, well inside the badge)
    hr = S * 0.042
    hy = head_cy + head_r * 1.35
    d.ellipse([cx - hr * 1.5, hy - hr, cx, hy + hr], fill=TAN_DARK)
    d.ellipse([cx, hy - hr, cx + hr * 1.5, hy + hr], fill=TAN_DARK)
    d.polygon([(cx - hr * 1.48, hy + hr * 0.25), (cx + hr * 1.48, hy + hr * 0.25), (cx, hy + hr * 1.85)], fill=TAN_DARK)

    return img


def draw_founder(w, h):
    img = Image.new("RGBA", (w, h), POWDER)
    d = ImageDraw.Draw(img)
    cx, cy = w / 2, h * 0.38
    r = h * 0.2
    d.ellipse([cx - r, cy - r, cx + r, cy + r], fill=FUR)
    d.pieslice([cx - r * 1.05, cy - r * 1.2, cx + r * 1.05, cy + r * 0.3], 180, 360, fill=CHARCOAL)
    d.rounded_rectangle([w * 0.28, h * 0.62, w * 0.72, h], radius=w * 0.08, fill=TAN)
    return img


def save(img, name):
    path = os.path.join(OUT, name)
    img.save(path)
    print("wrote", path, img.size)


# App icon (square, opaque background required)
icon = draw_badge(1024, bg=CREAM)
save(icon, "icon.png")

# Adaptive icon foreground (Android) — logo centered with breathing room
adaptive = draw_badge(1024, pad_ratio=0.18, bg=(0, 0, 0, 0))
save(adaptive, "adaptive-icon.png")

# Splash screen: cream canvas with centered logo
splash = Image.new("RGBA", (1242, 2436), CREAM)
badge = draw_badge(420, bg=(0, 0, 0, 0))
splash.alpha_composite(badge, (int(1242 / 2 - 210), int(2436 / 2 - 210)))
save(splash, "splash.png")

# Favicon (web)
save(draw_badge(96, bg=CREAM), "favicon.png")

# In-app header logo + about-page founder placeholder
save(draw_badge(256, bg=(0, 0, 0, 0)), "logo.png")
save(draw_founder(400, 400), "founder.png")

print("done")
