#!/usr/bin/env python3
"""
Optimiza fotos de obras para la web.

Uso:
    python3 tools/optimize_images.py _originals/            # procesa toda la carpeta
    python3 tools/optimize_images.py _originals/foto.jpg    # una sola imagen

Para cada imagen de entrada genera:
    img/obras/<nombre>.jpg          (lado mayor 1400 px, calidad 78)  -> lightbox
    img/obras/thumbs/<nombre>.jpg   (lado mayor 720 px,  calidad 76)  -> grilla

El <nombre> es el nombre del archivo original en minúsculas, sin espacios ni acentos.
Los originales NO se suben al repo (carpeta _originals/ está en .gitignore).

Requiere Pillow:  pip install pillow
"""
import sys, re, unicodedata
from pathlib import Path
from PIL import Image, ImageOps

ROOT = Path(__file__).resolve().parent.parent
OUT_FULL = ROOT / "img" / "obras"
OUT_THUMB = OUT_FULL / "thumbs"
MAX_FULL, MAX_THUMB = 1400, 720
Q_FULL, Q_THUMB = 78, 76
EXTS = {".jpg", ".jpeg", ".png", ".webp", ".tif", ".tiff", ".heic"}


def slug(name: str) -> str:
    name = unicodedata.normalize("NFKD", name).encode("ascii", "ignore").decode()
    name = re.sub(r"[^a-zA-Z0-9]+", "-", name).strip("-").lower()
    return name or "obra"


def process(path: Path) -> str:
    img = Image.open(path)
    img = ImageOps.exif_transpose(img)  # respeta la rotación del celular
    if img.mode not in ("RGB", "L"):
        img = img.convert("RGB")
    name = slug(path.stem)
    OUT_FULL.mkdir(parents=True, exist_ok=True)
    OUT_THUMB.mkdir(parents=True, exist_ok=True)

    full = img.copy()
    full.thumbnail((MAX_FULL, MAX_FULL), Image.LANCZOS)
    full.save(OUT_FULL / f"{name}.jpg", "JPEG", quality=Q_FULL, optimize=True, progressive=True)

    th = img.copy()
    th.thumbnail((MAX_THUMB, MAX_THUMB), Image.LANCZOS)
    th.save(OUT_THUMB / f"{name}.jpg", "JPEG", quality=Q_THUMB, optimize=True, progressive=True)

    w, h = img.size
    print(f"{path.name:40s} -> {name}.jpg  ({w}x{h}, ratio {w/h:.2f})")
    return name


def main():
    if len(sys.argv) < 2:
        print(__doc__)
        sys.exit(1)
    src = Path(sys.argv[1])
    files = [src] if src.is_file() else sorted(p for p in src.iterdir() if p.suffix.lower() in EXTS)
    if not files:
        print("No encontré imágenes en", src)
        sys.exit(1)
    for f in files:
        process(f)
    print(f"\nListo: {len(files)} imagen(es). Ahora agregá cada obra en js/works.js")


if __name__ == "__main__":
    main()
