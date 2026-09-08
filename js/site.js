/* =====================================================================
   CONFIGURACIÓN DEL SITIO — textos y datos de contacto (ES / EN)
   Editá este archivo para cambiar la bio, el lema, la trayectoria o los contactos.
   Las obras van en js/works.js
   ===================================================================== */
window.SITE = {
  name: "Maymara Brugnoli",

  // Número de WhatsApp en formato internacional, SOLO dígitos (sin +, sin espacios).
  // Ej. Argentina: 549 + código de área + número  ->  "5492611234567"
  // Mientras esté vacío ("") los botones de WhatsApp no se muestran.
  whatsapp: "5492616940320",   // WhatsApp de la artista

  email: "maymarabrugnoli24@gmail.com",
  instagram: "maymara.brugnoli.art",     // usuario de Instagram (sin @)
  facebook: "",                          // URL completa del perfil de Facebook, o "" para ocultar

  // Obra de la portada: el "id" de una obra de js/works.js
  heroWork: "mujer-espada-mariposa",

  // Foto para la sección Bio y foto de una muestra (opcional, "" para ocultar)
  portrait: "img/portrait.jpg",
  expoPhoto: "img/expo-2019.jpg",

  // URL pública del sitio (para compartir en redes / Google)
  url: "https://juanrfernandez.github.io/Arte-Maymara/",

  // Trayectoria: una línea por muestra/premio, de más reciente a más antigua
  cv: [
    { year: "2024", es: "«La materia social», La Bancaria, Mendoza — muestra colectiva", en: "“La materia social”, La Bancaria, Mendoza — group show" },
    { year: "2024", es: "«Puentes», Salas de Arte Libertad, Guaymallén — muestra colectiva", en: "“Puentes”, Salas de Arte Libertad, Guaymallén — group show" },
    { year: "2023", es: "Muestra colectiva, Radio Nacional", en: "Group show, Radio Nacional" },
    { year: "2022", es: "Muestra colectiva, INV", en: "Group show, INV" },
    { year: "2020", es: "6.º Salón de Pintura Pequeño Formato — 2.º premio", en: "6th Small Format Painting Salon — 2nd prize" },
    { year: "2019", es: "Muestra, Legislatura — Senado de Mendoza", en: "Exhibition, Legislature — Senate of Mendoza" },
    { year: "2019", es: "Muestra colectiva, Galería Piazza", en: "Group show, Galería Piazza" },
    { year: "2019", es: "Seleccionada, Arte Atuel", en: "Selected, Arte Atuel" },
    { year: "2018", es: "Bodega Piedras 202", en: "Bodega Piedras 202" },
    { year: "2017", es: "Sala de Arte Libertad", en: "Sala de Arte Libertad" },
    { year: "2016", es: "Sala de Arte Libertad · Arte en Construcción", en: "Sala de Arte Libertad · Arte en Construcción" },
    { year: "2012", es: "Bienal Arte Atuel", en: "Arte Atuel Biennial" },
    { year: "2008", es: "Salón Regional Vendimia de Artes Visuales", en: "Vendimia Regional Visual Arts Salon" }
  ],

  text: {
    es: {
      kicker: "Artista plástica · Mendoza, Argentina",
      tagline: "Obras figurativas en óleo que transforman emociones en imágenes.",
      worksSub: "Para quienes buscan conexión y belleza con sentido.",
      metaDescription:
        "Maymara Brugnoli, artista plástica de Mendoza, Argentina. Obras figurativas en óleo que transforman emociones en imágenes. Obras, biografía y contacto.",
      // Bio: cada elemento del array es un párrafo (el primero se muestra más grande).
      bio: [
        "Soy Maymara Brugnoli, artista plástica. Mi obra figurativa en óleo no busca solo decorar: abre un espacio de conexión íntima con las emociones.",
        "Mi propósito es crear un vínculo emocional con quien mira, dando forma visual a lo que las palabras no alcanzan, invitando a descubrir nuevas miradas sobre lo cotidiano y a despertar sensibilidad a través del color y la figura.",
        "Los temas aparecen, no los elijo: me eligen. Es algo que hace ruido o molesta, como los materiales que uso, que también son disparadores de sensaciones. Siempre fui figurativa: pinté óleo sobre tela empastado y fui transformando, desestructurando, rompiendo estereotipos. Hoy trabajo también con técnica mixta y no descarto ningún material.",
        "Me formé en clínicas de arte contemporáneo con Luis Ciceri (2000–2002) y Daniel Bernal, y actualmente con Egar Murillo. Vivo y trabajo en Mendoza, Argentina."
      ],
      cvTitle: "Trayectoria",
      expoCaption: "Muestra, 2019",
      contactSub: "¿Te interesa alguna obra o querés encargar una pieza? Escribime por WhatsApp o por mail.",
      // Mensaje que se abre en WhatsApp al consultar por una obra ({title} se reemplaza solo)
      waMessage: "Hola Maymara, me interesa la obra «{title}». ¿Está disponible?",
      waGeneric: "Hola Maymara, vi tu página y quería consultarte por tus obras."
    },
    en: {
      kicker: "Visual artist · Mendoza, Argentina",
      tagline: "Figurative oil paintings that turn emotions into images.",
      worksSub: "For those seeking beauty with meaning and emotional connection.",
      metaDescription:
        "Maymara Brugnoli, visual artist from Mendoza, Argentina. Figurative oil paintings that turn emotions into images. Works, biography and contact.",
      bio: [
        "I'm Maymara Brugnoli, a visual artist. My figurative oil paintings go beyond decoration: they open an intimate space for emotional connection.",
        "My purpose is to create an emotional bond with the viewer, giving visual form to what words cannot reach, inviting new ways of seeing the everyday and awakening sensitivity through colour and figure.",
        "Subjects appear; I don't choose them — they choose me. Something that makes noise or disturbs, like the materials I use, which are also triggers of sensations. I have always been figurative: I painted thick impasto oil on canvas and kept transforming, deconstructing, breaking stereotypes. Today I also work in mixed media and rule out no material.",
        "I trained in contemporary art clinics with Luis Ciceri (2000–2002) and Daniel Bernal, and currently with Egar Murillo. I live and work in Mendoza, Argentina."
      ],
      cvTitle: "Exhibitions",
      expoCaption: "Exhibition, 2019",
      contactSub: "Interested in a work or a commission? Write me on WhatsApp or by email.",
      waMessage: "Hi Maymara, I'm interested in the work “{title}”. Is it available?",
      waGeneric: "Hi Maymara, I saw your website and would like to ask about your works."
    }
  }
};
