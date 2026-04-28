// pages/projekte/lernzettel/faecher/informatik/themen/grafik/image-processing.js
// Informatik 14.2 — Bildverarbeitung: Filter, Kantenerkennung

import { initScrollReveal } from '../../../../../../../shared/js/index.js';
import { footerHTML }        from '../../../../../../../components/Footer.js';
import { i18n }              from '../../../../../../../shared/js/i18n.js';
import { initWimTabs }       from '../../../../../../../shared/js/wim-tabs.js';
import {
  ensureComponentsCSS, renderTags, renderInfobox, renderTable,
  renderFormulaBox, renderMerkboxGrid, renderCompare,
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
  prev: { label: '14.1 3D-Modellierung', link: `${BASE}/themen/grafik/3d-modelling` },
  next: null,
};

const TABS = [
  { key: 'faltung',    label: '🔲 Filter & Faltung' },
  { key: 'kanten',     label: '🔍 Kantenerkennung (Sobel, Canny)' },
  { key: 'opencv',     label: '💻 OpenCV in der Praxis' },
  { key: 'uebungen',   label: '✏ Übungen' },
];

export default class ImageProcessingPage {
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
            <span>14.2 · Bildverarbeitung</span>
          </nav>
          <h1 class="lz-sub-title">Bildverarbeitung: Filter & Kantenerkennung</h1>
          <p class="lz-sub-subtitle">Faltung (Convolution), Gaußfilter, Sobel, Canny, OpenCV</p>
          ${renderTags(['Bildverarbeitung', 'Faltung', 'Gaußfilter', 'Sobel', 'Canny', 'OpenCV'])}
        </div>
      </section>
      <section class="lz-content-section">
        <div class="lz-section-wrap">
          <nav class="wim-tabs" id="imgProcTabs" aria-label="Bildverarbeitung">
            ${TABS.map((t, i) => `<button class="wim-tab${i === 0 ? ' active' : ''}" data-wim="${t.key}">${t.label}</button>`).join('')}
          </nav>
          ${this._panelFaltung()}
          ${this._panelKanten()}
          ${this._panelOpenCV()}
          ${this._panelUebungen()}
        </div>
      </section>
      <section class="lz-content-section" style="padding-top:0;">
        <div class="lz-section-wrap">${renderPageNav(NAV)}</div>
      </section>
      ${footerHTML(this.router)}`;
  }

  _panelFaltung() {
    return `<div class="wim-category active" data-wim-cat="faltung">
      ${renderInfobox({ icon: 'fas fa-filter', title: 'Faltung (Convolution) – Grundoperation der Bildverarbeitung', type: 'info',
        body: `Ein <strong>Kernel</strong> (Filtermatrix) wird über das Bild geschoben. Für jede Position wird die elementweise Multiplikation und Summation durchgeführt.
               Der Kernel definiert den Effekt (Glättung, Schärfung, Kantenerkennung).` })}
      ${renderFormulaBox({
        label: 'Diskrete 2D‑Faltung',
        formula: '(I * K)[x,y] = Σᵢ Σⱼ I[x+i, y+j] · K[i,j]',
        desc: 'I = Bild, K = Kernel, * = Faltung (korreliert)',
      })}
      <h4 class="lz-h4">Wichtige Filterkerne (3×3)</h4>
      ${renderTable({
        headers: ['Filter', 'Kernel', 'Effekt'],
        rows: [
          ['Identität', '<code>[[0,0,0],[0,1,0],[0,0,0]]</code>', 'Keine Veränderung'],
          ['Gaußscher Weichzeichner (Glättung)', '<code>[[1,2,1],[2,4,2],[1,2,1]] / 16</code>', 'Rauschen reduzieren, unscharf'],
          ['Schärfe', '<code>[[0,-1,0],[-1,5,-1],[0,-1,0]]</code>', 'Kanten hervorheben'],
          ['Box‑Blur', '<code>[[1,1,1],[1,1,1],[1,1,1]] / 9</code>', 'Einfache Glättung'],
          ['Emboss (Relief)', '<code>[[-2,-1,0],[-1,1,1],[0,1,2]]</code>', '3D‑Effekt'],
          ['Kantenerkennung (Laplace)', '<code>[[0,-1,0],[-1,4,-1],[0,-1,0]]</code>', 'Kanten (zweite Ableitung)'],
        ],
      })}
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:0.8rem;border-radius:8px;font-family:monospace;">
Median‑Filter (nicht‑linear):
  Ersetzt Pixel durch den Median der Nachbarschaft.
  Ideal gegen Salt‑and‑Pepper‑Rauschen (Impulsstörungen).
  Keine Unschärfe, aber erhält Kanten besser als Gaußfilter.
</pre>
    </div>`;
  }

  _panelKanten() {
    return `<div class="wim-category hidden" data-wim-cat="kanten">
      <h3 class="lz-h3">Kantenerkennung – Objektgrenzen finden</h3>
      <h4 class="lz-h4">Sobel‑Operator</h4>
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:0.8rem;border-radius:8px;font-family:monospace;">
Sobel‑Kernel für horizontale Kanten (Gx):   Vertikale Kanten (Gy):
  │ -1  0  1 │                               │ -1  -2  -1 │
  │ -2  0  2 │                               │  0   0   0 │
  │ -1  0  1 │                               │  1   2   1 │

Gradient‑Magnitude:  G = √(Gx² + Gy²)
Gradient‑Richtung:   θ = arctan(Gy/Gx)  (wichtig für Canny)
</pre>
      <h4 class="lz-h4">Canny‑Kantenerkennung (State‑of‑the‑Art)</h4>
      ${renderTable({
        headers: ['Schritt', 'Beschreibung'],
        rows: [
          ['1. Gaußscher Weichzeichner', 'Rauschen reduzieren (σ wählbar)'],
          ['2. Gradient berechnen', 'Sobel‑Operator → Betrag und Richtung'],
          ['3. Non‑Maximum Suppression', 'Nur lokale Maxima in Gradientenrichtung behalten → dünne Kanten'],
          ['4. Hysterese‑Schwellenwert', 'Zwei Schwellen: starker Schwellen (sicher Kante) + niedriger Schwellen (Kante nur wenn mit starker verbunden)'],
          ['5. Kantenverfolgung', 'Verbundene Pixel zu Konturen zusammenführen'],
        ],
      })}
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:0.8rem;border-radius:8px;font-family:monospace;">
Canny‑Parameter:
  lower_threshold, upper_threshold: typisch 50, 150 (für 8‑Bit‑Bilder).
  Aperture size für Sobel: meist 3.
  σ für Gauß: ca. 1‑2.
</pre>
    </div>`;
  }

  _panelOpenCV() {
    return `<div class="wim-category hidden" data-wim-cat="opencv">
      <h3 class="lz-h3">OpenCV – Praxisbeispiele (Python)</h3>
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:0.8rem;border-radius:8px;font-family:monospace;">
import cv2
import numpy as np

# Bild laden
img = cv2.imread('bild.jpg')
gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

# Gaußscher Weichzeichner
blur = cv2.GaussianBlur(gray, (5,5), 0)

# Canny‑Kantenerkennung
edges = cv2.Canny(blur, 50, 150)

# Sobel
sobelX = cv2.Sobel(gray, cv2.CV_64F, 1, 0, ksize=3)
sobelY = cv2.Sobel(gray, cv2.CV_64F, 0, 1, ksize=3)
magnitude = np.sqrt(sobelX**2 + sobelY**2)

# Threshold (binäres Bild)
_, thresh = cv2.threshold(gray, 127, 255, cv2.THRESH_BINARY)

# Morphologische Operationen
kernel = np.ones((5,5), np.uint8)
erosion = cv2.erode(thresh, kernel, iterations=1)
dilation = cv2.dilate(thresh, kernel, iterations=1)

# Konturen finden
contours, hierarchy = cv2.findContours(edges, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
cv2.drawContours(img, contours, -1, (0,255,0), 2)

cv2.imshow('Kanten', edges)
cv2.waitKey(0)
</pre>
      ${renderMerkboxGrid([
        { icon: 'fas fa-microchip', title: 'Echtzeitverarbeitung', text: 'OpenCV kann mit CUDA für GPUs beschleunigt werden. Einsatz in Robotik, Drohnen, autonomen Fahrzeugen.' },
        { icon: 'fas fa-brain', title: 'Deep Learning Integration', text: 'OpenCV DNN‑Modul kann vortrainierte Modelle (YOLO, SSD, Mask R‑CNN) laden und inferieren.' },
      ])}
    </div>`;
  }

  _panelUebungen() {
    return `<div class="wim-category hidden" data-wim-cat="uebungen">
      <h3 class="lz-h3">Übungsaufgaben</h3>
      ${renderAccordion([
        {
          title: 'A1: Berechne manuell die Faltung eines 3×3‑Bildausschnitts mit einem Sobel‑Gx‑Kernel.',
          content: `Bildausschnitt: [[10,20,30],[40,50,60],[70,80,90]]; Kernel Gx = [[-1,0,1],[-2,0,2],[-1,0,1]].
          Wert für Zentrum (Index 1,1): (-1*10 + 0*20 + 1*30) + (-2*40 + 0*50 + 2*60) + (-1*70 + 0*80 + 1*90) = (-10+0+30) + (-80+0+120) + (-70+0+90) = 20 + 40 + 20 = 80.`,
        },
        {
          title: 'A2: Wozu dient die Non‑Maximum Suppression im Canny‑Algorithmus?',
          content: `Nach der Gradientenberechnung sind die Kanten "dick". Non‑Maximum Suppression behält nur die Pixel mit lokalem Maximum der Gradientenstärke in Richtung des Gradienten. Dadurch werden Kanten auf ein Pixel dünn reduziert.`,
        },
        {
          title: 'A3: Welchen Vorteil hat der Median‑Filter gegenüber dem Gaußfilter bei Impulsrauschen?',
          content: `Der Median‑Filter entfernt einzelne Ausreißer (z.B. schwarze/weiße Pixel) vollständig, während der Gaußfilter sie nur verschmiert. Die Kantenschärfe bleibt besser erhalten.`,
        },
        {
          title: 'A4: Erkläre die Hysterese‑Schwellenwertsetzung bei Canny.',
          content: `Zwei Schwellen: Ein hoher Schwellen (z.B. 150) definiert "starke Kanten". Ein niedriger Schwellen (z.B. 50) definiert "schwache Kanten". Schwache Kanten werden nur dann als Kanten akzeptiert, wenn sie mit einer starken Kante verbunden sind (8‑Nachbarschaft). Dadurch werden Rauschkanten unterdrückt, während zusammenhängende Kanten erhalten bleiben.`,
        },
      ])}
      ${renderInfobox({ icon: 'fas fa-graduation-cap', title: 'Bildverarbeitung für die Prüfung', type: 'success',
        body: `• Faltung: Kernel über Bild schieben.<br>
               • Gaußfilter: Glättung, Rauschunterdrückung.<br>
               • Sobel: Gradient in x‑ und y‑Richtung.<br>
               • Canny: Gauß → Sobel → Non‑Maximum Suppression → Hysterese.<br>
               • Median‑Filter: Nicht‑linear, gut gegen Impulsrauschen.<br>
               • OpenCV: cv2.Canny(), cv2.Sobel(), cv2.GaussianBlur().` })}
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