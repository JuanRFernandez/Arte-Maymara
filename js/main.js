/* =====================================================================
   Lógica del sitio: idioma (ES/EN), grilla de obras, filtros, visor.
   No hace falta tocar este archivo para agregar obras o cambiar textos:
   usá js/works.js y js/site.js
   ===================================================================== */
(function () {
  "use strict";

  const SITE = window.SITE || {};
  const WORKS = Array.isArray(window.WORKS) ? window.WORKS : [];

  /* ---------- Textos de la interfaz ---------- */
  const I18N = {
    es: {
      "nav.works": "Obras", "nav.bio": "Bio", "nav.contact": "Contacto",
      "hero.cta": "Ver obras",
      "works.title": "Obras",
      "bio.title": "Sobre mí",
      "contact.title": "Contacto", "contact.wa": "Escribir por WhatsApp",
      "footer.rights": "Todos los derechos reservados",
      "lb.ask": "Consultar por esta obra", "lb.close": "Cerrar", "lb.prev": "Anterior", "lb.next": "Siguiente",
      "filter.all": "Todas", "sold": "Vendida", "available": "Disponible",
      "title": "Maymara Brugnoli — Artista visual",
      "empty": "Todavía no hay obras cargadas."
    },
    en: {
      "nav.works": "Works", "nav.bio": "About", "nav.contact": "Contact",
      "hero.cta": "View works",
      "works.title": "Works",
      "bio.title": "About me",
      "contact.title": "Contact", "contact.wa": "Message on WhatsApp",
      "footer.rights": "All rights reserved",
      "lb.ask": "Ask about this work", "lb.close": "Close", "lb.prev": "Previous", "lb.next": "Next",
      "filter.all": "All", "sold": "Sold", "available": "Available",
      "title": "Maymara Brugnoli — Visual artist",
      "empty": "No works uploaded yet."
    }
  };

  let lang = "es";
  const t = (key) => (I18N[lang] && I18N[lang][key]) || I18N.es[key] || key;
  const tx = (obj) => (obj && typeof obj === "object") ? (obj[lang] || obj.es || obj.en || "") : (obj || "");
  const siteText = (key) => ((SITE.text || {})[lang] || {})[key] || ((SITE.text || {}).es || {})[key] || "";

  /* ---------- Idioma ---------- */
  function detectLang() {
    const q = new URLSearchParams(location.search).get("lang");
    if (q === "en" || q === "es") return q;
    try { const s = localStorage.getItem("lang"); if (s === "en" || s === "es") return s; } catch (e) { /* sin storage */ }
    const nav = (navigator.language || "es").toLowerCase();
    return nav.startsWith("en") ? "en" : "es";
  }

  function applyLang(next) {
    lang = next;
    document.documentElement.lang = lang;
    document.title = t("title");
    const md = document.querySelector('meta[name="description"]');
    if (md) md.setAttribute("content", siteText("metaDescription"));

    document.querySelectorAll("[data-i18n]").forEach((el) => { el.textContent = t(el.dataset.i18n); });
    document.querySelectorAll("[data-i18n-aria]").forEach((el) => { el.setAttribute("aria-label", t(el.dataset.i18nAria)); });
    document.querySelectorAll("[data-site]").forEach((el) => { el.textContent = siteText(el.dataset.site); });
    document.querySelectorAll(".lang-toggle [data-lang]").forEach((el) => { el.classList.toggle("active", el.dataset.lang === lang); });

    renderHero();
    renderBio();
    renderContact();
    renderGallery();
    if (current >= 0) fillLightbox(current);
    try { localStorage.setItem("lang", lang); } catch (e) { /* sin storage */ }
  }

  /* ---------- Helpers ---------- */
  // asset(): permite reemplazar rutas de imágenes por otras (se usa solo en la vista previa de un solo archivo)
  const asset = (p) => (window.__ASSETS && window.__ASSETS[p]) || p;
  const imgFull = (w) => asset(w.image || ("img/obras/" + w.id + ".jpg"));
  const imgThumb = (w) => asset(w.thumb || ("img/obras/thumbs/" + w.id + ".jpg"));
  const isSold = (w) => w.sold === true || w.available === false;
  const metaLine = (w) => [tx(w.technique), w.size, w.year].filter(Boolean).join(" · ");
  const waUrl = (msg) => "https://wa.me/" + String(SITE.whatsapp || "").replace(/\D/g, "") + "?text=" + encodeURIComponent(msg);

  /* ---------- Portada ---------- */
  function renderHero() {
    const img = document.getElementById("heroImg");
    const cap = document.getElementById("heroCaption");
    if (!img) return;
    const w = WORKS.find((x) => x.id === SITE.heroWork) || WORKS[0];
    if (!w) { img.hidden = true; return; }
    const src = imgFull(w);
    if (img.getAttribute("src") !== src) img.src = src;
    img.alt = tx(w.title);
    if (cap) cap.innerHTML = "<em>" + esc(tx(w.title)) + "</em>" + (w.year ? ", " + w.year : "") + " — " + esc(metaLine(w).replace(" · " + w.year, ""));
    img.style.cursor = "pointer";
    img.onclick = () => openLightbox(WORKS.indexOf(w));
  }

  /* ---------- Bio y contacto ---------- */
  function renderBio() {
    const body = document.getElementById("bioBody");
    if (body) body.innerHTML = (siteText("bio") || []).map((p) => "<p>" + p + "</p>").join("");
    const ig = document.getElementById("bioInstagram");
    if (ig) { ig.href = "https://www.instagram.com/" + (SITE.instagram || ""); ig.hidden = !SITE.instagram; }
    const portrait = document.getElementById("portraitImg");
    if (portrait && SITE.portrait) portrait.src = asset(SITE.portrait);
  }

  function renderContact() {
    const igUrl = "https://www.instagram.com/" + (SITE.instagram || "");
    const wa = document.getElementById("waLink");
    if (wa) { wa.href = waUrl(siteText("waGeneric")); wa.hidden = !SITE.whatsapp; }
    const mail = document.getElementById("mailLink");
    if (mail) { mail.href = "mailto:" + (SITE.email || ""); mail.textContent = SITE.email || ""; mail.hidden = !SITE.email; }
    const ig = document.getElementById("igLink");
    if (ig) { ig.href = igUrl; ig.hidden = !SITE.instagram; }
    const igh = document.getElementById("igHandle");
    if (igh) { igh.href = igUrl; igh.textContent = "@" + (SITE.instagram || ""); }
    const fbLabel = document.getElementById("fbLabel"), fbItem = document.getElementById("fbItem"), fb = document.getElementById("fbLink");
    if (fb) { fb.href = SITE.facebook || "#"; }
    if (fbLabel && fbItem) { fbLabel.hidden = fbItem.hidden = !SITE.facebook; }
  }

  /* ---------- Grilla + filtros ---------- */
  let activeSeries = "all";
  let visible = [];   // índices (en WORKS) de las obras visibles, en orden

  // clave estable de una serie (no cambia con el idioma) y etiqueta traducida
  const seriesKey = (w) => (w.series && (w.series.es || tx(w.series))) || "";

  function seriesList() {
    const seen = new Map();
    WORKS.forEach((w) => { const k = seriesKey(w); if (k && !seen.has(k)) seen.set(k, tx(w.series)); });
    return [...seen.entries()]; // [key, label]
  }

  function renderFilters() {
    const box = document.getElementById("filters");
    if (!box) return;
    const list = seriesList();
    if (list.length < 2) { box.hidden = true; box.innerHTML = ""; activeSeries = "all"; return; }
    box.hidden = false;
    const pills = [["all", t("filter.all")]].concat(list);
    box.innerHTML = pills.map(([key, label]) =>
      '<button type="button" class="pill' + (key === activeSeries ? " active" : "") + '" data-series="' + esc(key) + '">' + esc(label) + "</button>"
    ).join("");
    box.querySelectorAll(".pill").forEach((b) => b.addEventListener("click", () => { activeSeries = b.dataset.series; renderGallery(); }));
  }

  function renderGallery() {
    const grid = document.getElementById("grid");
    if (!grid) return;
    renderFilters();
    visible = [];
    if (!WORKS.length) { grid.innerHTML = '<p class="grid-empty">' + t("empty") + "</p>"; return; }
    grid.innerHTML = WORKS.map((w, i) => {
      const show = activeSeries === "all" || seriesKey(w) === activeSeries;
      if (show) visible.push(i);
      return (
        '<figure class="card' + (show ? "" : " hide") + '" data-index="' + i + '" tabindex="0" role="button" aria-label="' + esc(tx(w.title)) + '">' +
          '<div class="card-img">' +
            '<img src="' + imgThumb(w) + '" alt="' + esc(tx(w.title)) + '" loading="lazy" decoding="async">' +
            (isSold(w) ? '<span class="badge">' + t("sold") + "</span>" : "") +
          "</div>" +
          '<figcaption class="card-caption">' +
            '<div class="card-title">' + esc(tx(w.title)) + "</div>" +
            '<p class="card-meta">' + esc(metaLine(w)) + "</p>" +
          "</figcaption>" +
        "</figure>"
      );
    }).join("");
    grid.querySelectorAll(".card").forEach((card) => {
      card.addEventListener("click", () => openLightbox(+card.dataset.index));
      card.addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openLightbox(+card.dataset.index); } });
    });
    // las fotos aparecen con un fundido suave cuando terminan de cargar
    grid.querySelectorAll(".card-img img").forEach((im) => {
      const done = () => im.classList.add("loaded");
      if (im.complete && im.naturalWidth) done(); else { im.addEventListener("load", done, { once: true }); im.addEventListener("error", done, { once: true }); }
    });
  }

  function esc(s) { return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"); }

  /* ---------- Visor ---------- */
  const lb = document.getElementById("lightbox");
  const lbImg = document.getElementById("lbImg");
  let current = -1;

  function fillLightbox(i) {
    const w = WORKS[i];
    if (!w) return;
    lbImg.src = imgFull(w);
    lbImg.alt = tx(w.title);
    document.getElementById("lbTitle").textContent = tx(w.title);
    const status = isSold(w) ? " · " + t("sold") : "";
    document.getElementById("lbMeta").textContent = metaLine(w) + status;
    document.getElementById("lbDesc").textContent = tx(w.description);
    const ask = document.getElementById("lbAsk");
    ask.href = waUrl(siteText("waMessage").replace("{title}", tx(w.title)).replace("{year}", w.year || ""));
    ask.hidden = !SITE.whatsapp || isSold(w);
    const pos = visible.indexOf(i);
    document.getElementById("lbPrev").classList.toggle("disabled", pos <= 0);
    document.getElementById("lbNext").classList.toggle("disabled", pos === -1 || pos >= visible.length - 1);
    // precarga vecinas
    [visible[pos - 1], visible[pos + 1]].forEach((j) => { if (j !== undefined) { const p = new Image(); p.src = imgFull(WORKS[j]); } });
  }

  function openLightbox(i) {
    current = i;
    fillLightbox(i);
    lb.hidden = false;
    document.body.classList.add("no-scroll");
    document.getElementById("lbClose").focus();
  }
  function closeLightbox() {
    lb.hidden = true;
    document.body.classList.remove("no-scroll");
    const card = document.querySelector('.card[data-index="' + current + '"]');
    current = -1;
    if (card) card.focus({ preventScroll: true });
  }
  function step(dir) {
    const pos = visible.indexOf(current);
    const next = visible[pos + dir];
    if (next !== undefined) { current = next; fillLightbox(next); }
  }

  document.getElementById("lbClose").addEventListener("click", closeLightbox);
  document.getElementById("lbPrev").addEventListener("click", () => step(-1));
  document.getElementById("lbNext").addEventListener("click", () => step(1));
  lb.addEventListener("click", (e) => { if (e.target === lb || e.target.classList.contains("lb-imgwrap") || e.target.classList.contains("lb-figure")) closeLightbox(); });
  document.addEventListener("keydown", (e) => {
    if (lb.hidden) return;
    if (e.key === "Escape") closeLightbox();
    else if (e.key === "ArrowLeft") step(-1);
    else if (e.key === "ArrowRight") step(1);
  });
  // deslizar en el celular
  let tx0 = null;
  lb.addEventListener("touchstart", (e) => { tx0 = e.changedTouches[0].clientX; }, { passive: true });
  lb.addEventListener("touchend", (e) => {
    if (tx0 === null) return;
    const dx = e.changedTouches[0].clientX - tx0; tx0 = null;
    if (Math.abs(dx) > 50) step(dx < 0 ? 1 : -1);
  }, { passive: true });

  /* ---------- Header / menú ---------- */
  const header = document.getElementById("siteHeader");
  const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 8);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  const nav = document.getElementById("nav");
  const menuBtn = document.getElementById("menuBtn");
  function setMenu(open) {
    nav.classList.toggle("open", open);
    menuBtn.setAttribute("aria-expanded", String(open));
  }
  menuBtn.addEventListener("click", () => setMenu(!nav.classList.contains("open")));
  nav.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => setMenu(false)));

  document.getElementById("langToggle").addEventListener("click", () => applyLang(lang === "es" ? "en" : "es"));
  document.getElementById("year").textContent = new Date().getFullYear();

  /* ---------- Arranque ---------- */
  applyLang(detectLang());
})();
