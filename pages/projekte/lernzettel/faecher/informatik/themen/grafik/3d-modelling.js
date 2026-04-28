// pages/projekte/lernzettel/faecher/informatik/themen/grafik/3d-modelling.js
// Informatik 14.1 — Rastergrafik, Vektorgrafik & 3D-Modellierung

import { initScrollReveal } from '../../../../../../../shared/js/index.js';
import { footerHTML }        from '../../../../../../../components/Footer.js';
import { i18n }              from '../../../../../../../shared/js/i18n.js';
import { initWimTabs }       from '../../../../../../../shared/js/wim-tabs.js';
import {
  ensureComponentsCSS, renderTags, renderInfobox, renderTable,
  renderMerkboxGrid, renderCompare,
  initInteractive,
} from '../../../../js/components/components.js';
import { COLOR, COLOR_RGB, BASE } from '../../informatik.js';

function renderPageNav({ prev, next }) {
  return `<nav class="lz-page-nav">
    ${prev ? `<button class="lz-page-nav-btn lz-page-nav-btn--prev" data-link="${prev.link}"><i class="fas fa-arrow-left"></i><span>${prev.label}</span></button>` : '<div></div>'}
    <button class="lz-page-nav-btn lz-page-nav-btn--up" data-link="${BASE}"><i class="fas fa-th-large"></i><span>Übersicht</span></button>
    ${next ? `<button class="lz-page-nav-btn lz-page-nav-btn--next" data-link="${next.link}"><span>${next.label}</span><i class="fas fa-arrow-right"></i></button>` : '<div></div>'}
  </nav>`;
}

const NAV = {
  prev: { label: '13.3 Angriffe & Defense', link: `${BASE}/themen/security/attacks-defense` },
  next: { label: '14.2 Bildverarbeitung', link: `${BASE}/themen/grafik/image-processing` },
};

const TABS = [
  { key: 'raster',      label: '🖼 Rastergrafik' },
  { key: 'vektor',      label: '📐 Vektorgrafik' },
  { key: '3d',          label: '🎲 3D‑Rendering Pipeline' },
  { key: 'uebungen',    label: '✏ Übungen' },
];

export default class ModellingPage {
  constructor(router) { this.router = router; }

  render() {
    ensureComponentsCSS();
    const el = document.createElement('div');
    el.className = 'page page-informatik-sub';
    if (!document.querySelector('link[href*="sub.css"]')) {
      const l = document.createElement('link'); l.rel = 'stylesheet';
      l.href = 'pages/projekte/lernzettel/styles/sub.css'; document.head.appendChild(l);
    }
    el.style.setProperty('--kap-color', COLOR); el.style.setProperty('--kap-color-rgb', COLOR_RGB);
    el.style.setProperty('--lz-accent', COLOR); el.style.setProperty('--lz-accent-rgb', COLOR_RGB);
    el.innerHTML = this._html(); return el;
  }

  _html() {
    return `
      <section class="lz-sub-hero">
        <div class="lz-sub-hero-orb" aria-hidden="true"></div>
        <div class="lz-sub-hero-inner">
          <nav class="lz-sub-breadcrumb">
            <button class="lz-bread-link" data-nav-link="/projekte/lernzettel">Lernzettel</button>
            <i class="fas fa-chevron-right"></i>
            <button class="lz-bread-link" data-nav-link="${BASE}">Informatik</button>
            <i class="fas fa-chevron-right"></i>
            <span>14.1 · 3D-Modellierung & Grafik</span>
          </nav>
          <h1 class="lz-sub-title">Rastergrafik, Vektorgrafik & 3D‑Rendering</h1>
          <p class="lz-sub-subtitle">Pixel vs. Kurven, Rendering‑Pipeline, OpenGL, Shader</p>
          ${renderTags(['Rastergrafik', 'Vektorgrafik', 'Rendering Pipeline', 'OpenGL', 'Shader'])}
        </div>
      </section>
      <section class="lz-content-section">
        <div class="lz-section-wrap">
          <nav class="wim-tabs" id="grafikTabs" aria-label="Computergrafik">
            ${TABS.map((t, i) => `<button class="wim-tab${i === 0 ? ' active' : ''}" data-wim="${t.key}">${t.label}</button>`).join('')}
          </nav>
          ${this._panelRaster()}
          ${this._panelVektor()}
          ${this._panel3d()}
          ${this._panelUebungen()}
        </div>
      </section>
      <section class="lz-content-section" style="padding-top:0;">
        <div class="lz-section-wrap">${renderPageNav(NAV)}</div>
      </section>
      ${footerHTML(this.router)}`;
  }

  _panelRaster() {
    return `<div class="wim-category active" data-wim-cat="raster">
      ${renderInfobox({ icon: 'fas fa-image', title: 'Rastergrafik (Bitmap)', type: 'info',
        body: `Bild als Matrix von <strong>Pixeln</strong> (Bildpunkten). Jeder Pixel speichert Farbinformationen (z.B. RGB).
               Bei Vergrößerung werden Pixel sichtbar (Treppeneffekt). Auflösung = Breite × Höhe in Pixel.` })}
      ${renderTable({
        headers: ['Farbmodell', 'Kanäle', 'Verwendung', 'Bittiefe'],
        rows: [
          ['RGB', 'R,G,B (je 0‑255)', 'Bildschirme, Web', '24 Bit (3×8)'],
          ['RGBA', 'R,G,B,A (A=Transparenz)', 'Web, PNG', '32 Bit (4×8)'],
          ['CMYK', 'Cyan, Magenta, Yellow, Key (Black)', 'Druck', '32 Bit'],
          ['HSV/HSL', 'Hue, Saturation, Value/Lightness', 'Farbauswahl, Bildverarbeitung', '—'],
          ['YCbCr', 'Luminanz + Chrominanz', 'JPEG, Video', '—'],
        ],
      })}
      <h4 class="lz-h4">Dateiformate</h4>
      ${renderTable({
        headers: ['Format', 'Kompression', 'Transparenz', 'Einsatz'],
        rows: [
          ['PNG', 'Verlustfrei (Deflate)', 'Ja (Alpha‑Kanal)', 'Logos, Screenshots, Web'],
          ['JPEG', 'Verlustbehaftet (DCT)', 'Nein', 'Fotos, komplexe Bilder'],
          ['GIF', 'Verlustfrei (LZW)', 'Ja (1‑Bit)', 'Animationen, einfache Grafiken'],
          ['BMP', 'Unkomprimiert (oder RLE)', 'Nein', 'Windows‑Bitmaps (veraltet)'],
        ],
      })}
    </div>`;
  }

  _panelVektor() {
    return `<div class="wim-category hidden" data-wim-cat="vektor">
      <h3 class="lz-h3">Vektorgrafik – Mathematische Beschreibung</h3>
      ${renderCompare({
        titleA: '🔲 Rastergrafik',
        titleB: '📐 Vektorgrafik',
        listA: [
          'Pixelraster',
          'Qualitätsverlust beim Skalieren',
          'Große Dateien bei hoher Auflösung',
          'Fotos, komplexe Szenen',
          'Photoshop, GIMP',
        ],
        listB: [
          'Kurven (Bézier, Splines, Pfade)',
          'Beliebig skalierbar (verlustfrei)',
          'Kompakt für einfache Formen',
          'Logos, Illustrationen, Schriften',
          'Illustrator, Inkscape, CorelDRAW',
        ],
      })}
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:0.8rem;border-radius:8px;font-family:monospace;">
Bézier‑Kurve: definiert durch 2 Endpunkte und 2 Kontrollpunkte.
Cubic Bézier: B(t) = (1-t)³·P₀ + 3(1-t)²·t·P₁ + 3(1-t)·t²·P₂ + t³·P₃, t∈[0,1]

Dateiformate:
  - SVG (Scalable Vector Graphics): XML‑basiert, Web‑Standard.
  - EPS / AI / PDF (PostScript‑basiert) – professioneller Druck.
</pre>
    </div>`;
  }

  _panel3d() {
    return `<div class="wim-category hidden" data-wim-cat="3d">
      <h3 class="lz-h3">3D‑Rendering Pipeline – Von der Geometrie zum Bild</h3>
      ${renderInfobox({ icon: 'fas fa-cube', title: 'Grafikpipeline (OpenGL / DirectX / Vulkan)', type: 'info',
        body: `Die Pipeline wandelt 3D‑Modelle (Vertices, Dreiecke) in 2D‑Pixel (Framebuffer) um.
               Moderne GPUs sind massiv parallelisierte Hardware, die diese Pipeline beschleunigen.` })}
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:0.8rem;border-radius:8px;font-family:monospace;">
Rendering Pipeline (vereinfacht):
1. Vertex Processing (Vertex Shader)
   - Transformation: Model → World → View → Projection
   - Model Matrix: Objekt positionieren/rotieren/skalieren
   - View Matrix: Kameraposition und -richtung
   - Projection Matrix: Perspektive (FOV, Near/Far)

2. Primitive Assembly → Dreiecke aus Vertices

3. Rasterization → Dreiecke → Pixel‑Fragmente

4. Fragment Processing (Fragment / Pixel Shader)
   - Farbberechnung pro Pixel (Beleuchtung, Texturen)
   - Beleuchtungsmodelle: Phong, PBR (Physically Based Rendering)

5. Output Merger: Depth Test (Z‑Buffer), Alpha Blending, Stencil
   → Finales Bild im Framebuffer
</pre>
      ${renderTable({
        headers: ['API', 'Plattform', 'Besonderheit'],
        rows: [
          ['OpenGL', 'Windows, Linux, macOS (bis 4.1)', 'Traditionell, gut dokumentiert'],
          ['Vulkan', 'Windows, Linux, Android', 'Modern, Low‑Level, maximale Performance'],
          ['DirectX 12', 'Windows, Xbox', 'Microsoft‑Standard, Games'],
          ['Metal', 'macOS, iOS', 'Apple‑Standard'],
          ['WebGL', 'Browser (JavaScript)', '3D im Web'],
        ],
      })}
      <h4 class="lz-h4">Shader – Programmierbare Pipeline‑Stufen</h4>
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:0.8rem;border-radius:8px;font-family:monospace;">
Vertex Shader (GLSL Beispiel):
#version 330 core
layout(location = 0) in vec3 aPos;
uniform mat4 model;
uniform mat4 view;
uniform mat4 projection;
void main() {
    gl_Position = projection * view * model * vec4(aPos, 1.0);
}

Fragment Shader (Farbe):
#version 330 core
out vec4 FragColor;
void main() {
    FragColor = vec4(1.0, 0.5, 0.2, 1.0);
}
</pre>
    </div>`;
  }

  _panelUebungen() {
    return `<div class="wim-category hidden" data-wim-cat="uebungen">
      <h3 class="lz-h3">Übungsaufgaben</h3>
      ${renderAccordion([
        {
          title: 'A1: Wann verwendet man Vektorgrafik, wann Rastergrafik?',
          content: `Vektorgrafik für Logos, Illustrationen, Schriften (skalierbar). Rastergrafik für Fotos, komplexe Szenen, wo Farbverläufe und Details wichtig sind.`,
        },
        {
          title: 'A2: Erkläre den Zweck der einzelnen Transformationsmatrizen in der 3D‑Pipeline.',
          content: `Model Matrix: Objekt im Weltraum positionieren. View Matrix: Kameraperspektive. Projection Matrix: Perspektive (3D→2D) mit Tiefeninformation.`,
        },
        {
          title: 'A3: Was ist der Unterschied zwischen Vertex‑ und Fragment‑Shader?',
          content: `Vertex Shader wird pro Vertex ausgeführt und transformiert 3D‑Koordinaten. Fragment Shader wird pro Pixel (Fragment) ausgeführt und berechnet die endgültige Farbe.`,
        },
        {
          title: 'A4: Wozu dient der Z‑Buffer (Depth Buffer)?',
          content: `Der Z‑Buffer speichert für jedes Pixel die Tiefe (Distanz zur Kamera). Beim Rastern wird geprüft, ob ein neues Fragment näher ist als das bereits im Framebuffer – nur dann wird es gezeichnet. Dadurch werden verdeckte Flächen korrekt dargestellt.`,
        },
      ])}
      ${renderInfobox({ icon: 'fas fa-graduation-cap', title: 'Computergrafik für die Prüfung', type: 'success',
        body: `• Rastergrafik: Pixel, Auflösung, RGB/CMYK.<br>
               • Vektorgrafik: Kurven, skalierbar, SVG.<br>
               • 3D‑Pipeline: Vertex → Rasterisierung → Fragment → Output.<br>
               • Shader: Vertex‑ und Fragment‑Shader (GLSL).<br>
               • Transformationen: Model, View, Projection.` })}
    </div>`;
  }

  init() {
    i18n.init(); initScrollReveal();
    initInteractive(document.querySelector('.page-informatik-sub'));
    document.querySelectorAll('[data-nav-link]').forEach(btn => {
      btn.addEventListener('click', () => { if (btn.dataset.navLink) window.location.hash = btn.dataset.navLink; });
    });
    initWimTabs(document);
  }
}