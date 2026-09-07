#!/usr/bin/env python3
"""
Genera img/og-cover.jpg (1200x630): la imagen que aparece al compartir el link en WhatsApp/Instagram/Google.

Uso:
    python3 tools/make_og_cover.py img/obras/nombre-de-la-obra.jpg
"""
import sys
from pathlib import Path
from PIL import Image, ImageOps

ROOT = Path(__file__).resolve().parent.parent
W, H = 1200, 630

src = Path(sys.argv[1]) if len(sys.argv) > 1 else None
if not src or not src.exists():
    print(__doc__); sys.exit(1)

img = ImageOps.exif_transpose(Image.open(src)).convert("RGB")
cover = ImageOps.fit(img, (W, H), Image.LANCZOS, centering=(0.5, 0.4))
out = ROOT / "img" / "og-cover.jpg"
cover.save(out, "JPEG", quality=82, optimize=True, progressive=True)
print("ok ->", out)
