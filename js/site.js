/* =====================================================================
   CONFIGURACIÓN DEL SITIO — textos y datos de contacto (ES / EN)
   Editá este archivo para cambiar la bio, el lema o los contactos.
   Las obras van en js/works.js
   ===================================================================== */
window.SITE = {
  name: "Maymara Brugnoli",

  // Número de WhatsApp en formato internacional, SOLO dígitos (sin +, sin espacios).
  // Ej. Argentina: 549 + código de área + número  ->  "5492611234567"
  whatsapp: "5492610000000",            // TODO: poner el número real

  email: "maymarabrugnoli24@gmail.com",
  instagram: "maymara.brugnoli.art",     // usuario de Instagram (sin @)
  facebook: "",                          // URL completa del perfil de Facebook, o "" para ocultar

  // Imagen grande de la portada: el "id" de una obra de js/works.js
  heroWork: "placeholder-03",

  // Foto para la sección Bio
  portrait: "img/portrait.jpg",

  // URL pública del sitio (para compartir en redes / Google)
  url: "https://juanrfernandez.github.io/Arte-Maymara/",

  text: {
    es: {
      kicker: "Artista visual · Mendoza, Argentina",   // TODO: confirmar ciudad
      tagline: "Pinturas figurativas al óleo que convierten emociones en imágenes.",
      worksSub: "Para quienes buscan belleza con significado y conexión emocional.",
      metaDescription:
        "Maymara Brugnoli, artista visual. Pinturas figurativas al óleo que convierten emociones en imágenes. Obras, biografía y contacto.",
      // Bio: cada elemento del array es un párrafo. TEXTO PROVISORIO — reemplazar por el texto real.
      bio: [
        "Soy Maymara Brugnoli, artista visual. Pinto al óleo figuras y escenas que nacen de emociones: momentos de calma, de memoria, de encuentro. Cada obra busca convertir lo que sentimos en una imagen que se pueda mirar, y volver a mirar.",
        "Trabajo desde mi taller en Mendoza, Argentina. Mis cuadros están pensados para quienes buscan belleza con significado y una conexión emocional con lo que cuelgan en su casa.",
        "Realizo obras por encargo y envíos a todo el país y al exterior."
      ],
      contactSub: "¿Te interesa alguna obra o querés encargar un cuadro? Escribime por WhatsApp o por mail.",
      // Mensaje que se abre en WhatsApp al consultar por una obra ({title} y {year} se reemplazan solos)
      waMessage: "Hola Maymara, me interesa la obra «{title}» ({year}). ¿Está disponible?",
      waGeneric: "Hola Maymara, vi tu página y quería consultarte por tus obras."
    },
    en: {
      kicker: "Visual artist · Mendoza, Argentina",
      tagline: "Figurative oil paintings that turn emotions into images.",
      worksSub: "For those seeking beauty with meaning and emotional connection.",
      metaDescription:
        "Maymara Brugnoli, visual artist. Figurative oil paintings that turn emotions into images. Works, biography and contact.",
      bio: [
        "I'm Maymara Brugnoli, a visual artist. I paint figures and scenes in oil that are born from emotions: moments of calm, of memory, of encounter. Each work seeks to turn what we feel into an image you can look at — and look at again.",
        "I work from my studio in Mendoza, Argentina. My paintings are made for those seeking beauty with meaning and an emotional connection with what they hang in their homes.",
        "I take commissions and ship nationwide and abroad."
      ],
      contactSub: "Interested in a work or a commission? Write me on WhatsApp or by email.",
      waMessage: "Hi Maymara, I'm interested in the work “{title}” ({year}). Is it available?",
      waGeneric: "Hi Maymara, I saw your website and would like to ask about your works."
    }
  }
};
