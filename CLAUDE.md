# Instrucciones para Claude Code — Arte-Maymara

Sitio estático del portfolio de Maymara Brugnoli (artista visual, óleos figurativos). Leé `README.md` para la estructura.

## Reglas
- HTML/CSS/JS puro. No agregar frameworks, bundlers, npm ni build steps.
- Todo texto visible tiene versión `es` y `en` (objetos `{ es, en }`). Español es el idioma por defecto.
- Las obras viven SOLO en `js/works.js`; los textos y contacto SOLO en `js/site.js`. No duplicar datos en el HTML.
- El orden en `js/works.js` es el orden en la web (lo más nuevo primero).
- Nunca subir fotos sin optimizar: siempre `python3 tools/optimize_images.py` (originales van a `_originals/`, ignorada por git).
- Mantener el sitio liviano: sin librerías externas, sin Google Fonts (las fuentes están en `fonts/`).
- Antes de hacer push, probar con `python3 -m http.server 8000` y revisar que la grilla y el visor funcionen.

## Tareas típicas
- **Agregar obras:** copiar fotos a `_originals/` → correr el optimizador → agregar entradas en `js/works.js` → commit + push.
- **Cambiar bio / lema / contacto:** editar `js/site.js` (ambos idiomas).
- **Cambiar obra de portada:** `heroWork` en `js/site.js` y regenerar `img/og-cover.jpg` con `tools/make_og_cover.py`.
- **Publicar:** `git push` a `main` (GitHub Pages, ~1 min).

## Títulos, años y medidas de las obras
- Los títulos actuales en `js/works.js` son PROVISORIOS (descriptivos). La artista completa los datos reales en el PDF numerado `lista-de-obras-para-completar.pdf`: el número N corresponde a la entrada N (en orden) de `js/works.js`.
- Al recibir los datos: actualizar `title.es`/`title.en`, agregar `year` (número) y `size` (texto, ej. "80 × 100 cm"); si está vendida, `available: false`.
- El WhatsApp de la artista va en `js/site.js` → `whatsapp` (solo dígitos con código de país). Mientras esté vacío, los botones de WhatsApp no se muestran.
