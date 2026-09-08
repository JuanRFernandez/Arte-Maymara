# Maymara Brugnoli — sitio web

Portfolio de la artista visual Maymara Brugnoli. Sitio estático (HTML + CSS + JS, sin frameworks ni build),
bilingüe ES/EN, publicado gratis con **GitHub Pages** desde la rama `main`.

**URL:** https://juanrfernandez.github.io/Arte-Maymara/

## Estructura

| Archivo / carpeta | Qué es | ¿Se edita? |
|---|---|---|
| `index.html` | Única página: portada, obras, bio, contacto | Casi nunca |
| `js/works.js` | **Lista de obras** (título, técnica, medidas, año, serie) | **Sí — cada obra nueva** |
| `js/site.js` | **Textos ES/EN** (lema, bio, contacto, WhatsApp, imagen de portada) | **Sí — textos y contacto** |
| `js/main.js` | Lógica: idioma, grilla, filtros por serie, visor | No |
| `css/style.css` | Estilos | Solo para cambios de diseño |
| `img/obras/` + `img/obras/thumbs/` | Fotos optimizadas (1400 px) y miniaturas (720 px) | Se generan con el script |
| `img/portrait.jpg` | Foto para la sección Bio | Reemplazar |
| `img/og-cover.jpg` | Imagen al compartir el link (WhatsApp, redes) | Se genera con el script |
| `fonts/` | Tipografías alojadas localmente (Jost + DM Sans) | No |
| `tools/optimize_images.py` | Optimiza fotos nuevas | — |
| `tools/make_og_cover.py` | Genera `img/og-cover.jpg` a partir de una obra | — |
| `_originals/` | Fotos originales pesadas — **no se suben al repo** (`.gitignore`) | — |

## Agregar obras

```bash
pip install pillow                                  # una sola vez
cp ~/Descargas/fotos-nuevas/*.jpg _originals/       # 1. copiar originales
python3 tools/optimize_images.py _originals/        # 2. genera img/obras/ y thumbs/
# 3. agregar una entrada por obra en js/works.js (id = nombre del archivo generado, sin .jpg)
python3 -m http.server 8000                         # 4. probar en http://localhost:8000
git add -A && git commit -m "Agregar obras" && git push   # 5. publicar (GitHub Pages tarda ~1 min)
```

Formato de una obra en `js/works.js`:

```js
{
  id: "mujer-con-sombrero",                       // = img/obras/mujer-con-sombrero.jpg
  title: { es: "Mujer con sombrero", en: "Woman with a hat" },
  year: 2024,
  technique: { es: "Óleo sobre lienzo", en: "Oil on canvas" },
  size: "60 × 80 cm",
  series: { es: "Retratos", en: "Portraits" },    // opcional; los filtros aparecen si hay 2+ series
  description: { es: "", en: "" },                // opcional
  available: true                                 // false = muestra "Vendida"
}
```

## Cambiar textos, bio o contacto

Todo está en `js/site.js`: `whatsapp` (solo dígitos, con código de país), `email`, `instagram`,
`heroWork` (id de la obra de portada), y los textos en `text.es` / `text.en`.

## Publicación

GitHub Pages → Settings → Pages → *Deploy from a branch* → `main` / `/ (root)`.
Cada `git push` a `main` actualiza el sitio en ~1 minuto. Si algún día se compra un dominio propio,
se agrega un archivo `CNAME` con el dominio y se configuran los DNS (A/CNAME) hacia GitHub Pages.
