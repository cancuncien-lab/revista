/* Lista de paquetes publicados. Para agregar uno nuevo:
   1. Crear la carpeta /<slug>/ con su index.html y sus imágenes.
   2. Agregar una entrada aquí. La portada raíz y la barra de pestañas se actualizan solas. */
window.PAQUETES = [
  {
    slug: "primera-vez",
    num: 1,
    titulo: "Nunca he ido a Cancún",
    corto: "Primera vez",
    sub: "5 días · Isla Mujeres, Chichén Itzá y Tulum · 2 días para conocer Cancún caminando",
    color: "#FF7A59"
  },
  {
    slug: "xcaret",
    num: 2,
    titulo: "Quiero ir a Xcaret sin romper el cochinito",
    corto: "Xcaret",
    sub: "5 días · 3 parques de Grupo Xcaret · $0 cargos en sitio",
    color: "#0E7C8C"
  }
];

(function () {
  var paquetes = window.PAQUETES;
  var path = location.pathname.replace(/\/+$/, "");
  var slugActual = path.split("/").filter(Boolean)[0] || "";
  var esRaiz = slugActual === "";

  var css = document.createElement("style");
  css.textContent =
    ".pk-bar{font-family:'Karla',system-ui,sans-serif;background:#FAF3E7;border-bottom:1px solid #E4D9C6;" +
    "color:#0C5A68;position:relative;z-index:30}" +
    ".pk-in{max-width:1000px;margin:0 auto;display:flex;align-items:center;gap:6px;padding:0 16px;" +
    "overflow-x:auto;scrollbar-width:none;-webkit-overflow-scrolling:touch}" +
    ".pk-in::-webkit-scrollbar{display:none}" +
    ".pk-home{font-size:12.5px;letter-spacing:.08em;text-transform:uppercase;text-decoration:none;color:#0C5A68;" +
    "padding:12px 10px 12px 0;white-space:nowrap;border-right:1px solid #E4D9C6;margin-right:4px;font-weight:700}" +
    ".pk-tab{text-decoration:none;color:#3F6E69;font-size:13.5px;padding:12px 12px;white-space:nowrap;" +
    "border-bottom:3px solid transparent;margin-bottom:-1px;transition:color .15s ease}" +
    ".pk-tab:hover{color:#0E7C8C}" +
    ".pk-tab.on{color:#0E7C8C;font-weight:700;border-bottom-color:#0E7C8C}" +
    ".pk-tab small{opacity:.65;margin-right:5px;font-weight:400}";
  document.head.appendChild(css);

  if (esRaiz) return; /* la portada raíz pinta sus propias tarjetas */

  var bar = document.createElement("nav");
  bar.className = "pk-bar";
  bar.setAttribute("aria-label", "Paquetes");
  var html = '<div class="pk-in"><a class="pk-home" href="/">Cancun100 · Paquetes</a>';
  paquetes.forEach(function (p) {
    html += '<a class="pk-tab' + (p.slug === slugActual ? " on" : "") + '" href="/' + p.slug + '/">' +
      "<small>" + p.num + "</small>" + p.corto + "</a>";
  });
  html += "</div>";
  bar.innerHTML = html;
  document.body.insertBefore(bar, document.body.firstChild);
})();
