/* =====================================================================
   OBRAS — una entrada por cuadro. El orden acá es el orden en la web.
   Para agregar una obra:
     1. python3 tools/optimize_images.py _originals/mi-foto.jpg
        -> genera img/obras/mi-foto.jpg y img/obras/thumbs/mi-foto.jpg
     2. Copiá un bloque de abajo y completá los datos (id = nombre del archivo sin .jpg)
   Campos opcionales: series, description, available (true por defecto), sold (false)
   ===================================================================== */
window.WORKS = [
  {
    id: "placeholder-01",
    title: { es: "Obra de ejemplo 1", en: "Sample work 1" },
    year: 2025,
    technique: { es: "Óleo sobre lienzo", en: "Oil on canvas" },
    size: "80 × 100 cm",
    series: { es: "Retratos", en: "Portraits" },
    description: { es: "", en: "" },
    available: true
  },
  {
    id: "placeholder-02",
    title: { es: "Obra de ejemplo 2", en: "Sample work 2" },
    year: 2025,
    technique: { es: "Óleo sobre lienzo", en: "Oil on canvas" },
    size: "60 × 80 cm",
    series: { es: "Retratos", en: "Portraits" },
    available: true
  },
  {
    id: "placeholder-03",
    title: { es: "Obra de ejemplo 3", en: "Sample work 3" },
    year: 2024,
    technique: { es: "Óleo sobre lienzo", en: "Oil on canvas" },
    size: "100 × 80 cm",
    series: { es: "Escenas", en: "Scenes" },
    available: false
  },
  {
    id: "placeholder-04",
    title: { es: "Obra de ejemplo 4", en: "Sample work 4" },
    year: 2024,
    technique: { es: "Óleo sobre tela", en: "Oil on canvas" },
    size: "50 × 50 cm",
    series: { es: "Escenas", en: "Scenes" },
    available: true
  },
  {
    id: "placeholder-05",
    title: { es: "Obra de ejemplo 5", en: "Sample work 5" },
    year: 2024,
    technique: { es: "Óleo sobre lienzo", en: "Oil on canvas" },
    size: "70 × 90 cm",
    series: { es: "Retratos", en: "Portraits" },
    available: true
  },
  {
    id: "placeholder-06",
    title: { es: "Obra de ejemplo 6", en: "Sample work 6" },
    year: 2023,
    technique: { es: "Óleo sobre madera", en: "Oil on wood" },
    size: "70 × 50 cm",
    series: { es: "Escenas", en: "Scenes" },
    available: true
  },
  {
    id: "placeholder-07",
    title: { es: "Obra de ejemplo 7", en: "Sample work 7" },
    year: 2023,
    technique: { es: "Óleo sobre lienzo", en: "Oil on canvas" },
    size: "60 × 90 cm",
    series: { es: "Retratos", en: "Portraits" },
    available: false
  },
  {
    id: "placeholder-08",
    title: { es: "Obra de ejemplo 8", en: "Sample work 8" },
    year: 2023,
    technique: { es: "Óleo sobre lienzo", en: "Oil on canvas" },
    size: "80 × 100 cm",
    series: { es: "Escenas", en: "Scenes" },
    available: true
  },
  {
    id: "placeholder-09",
    title: { es: "Obra de ejemplo 9", en: "Sample work 9" },
    year: 2022,
    technique: { es: "Óleo sobre lienzo", en: "Oil on canvas" },
    size: "90 × 70 cm",
    series: { es: "Escenas", en: "Scenes" },
    available: true
  },
  {
    id: "placeholder-10",
    title: { es: "Obra de ejemplo 10", en: "Sample work 10" },
    year: 2022,
    technique: { es: "Óleo sobre lienzo", en: "Oil on canvas" },
    size: "60 × 70 cm",
    series: { es: "Retratos", en: "Portraits" },
    available: true
  }
];
