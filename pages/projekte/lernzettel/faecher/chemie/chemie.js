// pages/projekte/lernzettel/faecher/chemie/chemie.js
// Chemie — Übersichtsseite
// Enthält nur die Kapitelstruktur + MindMap mit Links.
// Alle Inhalte leben in den jeweiligen Unterseiten.

import { initScrollReveal } from '../../../../../shared/js/index.js';
import { footerHTML }        from '../../../../../components/Footer.js';
import { i18n }              from '../../../../../shared/js/i18n.js';
import {
  ensureComponentsCSS,
  renderMindMapGrid,
  renderSubhead,
  renderTags,
  initMindMap,
} from '../../js/components/components.js';
import {C} from '../../LernzettelPage.js';

// ─── Fach-Design ────────────────────────────────────────────────

export const COLOR     = '#4caf50';
export const COLOR_RGB = '76, 175, 80';

// ─── Basis-Route für alle Unterseiten ───────────────────────────

export const BASE = '/projekte/lernzettel/faecher/chemie';

// ═══════════════════════════════════════════════════════════════
// KAPITEL-DATEN
// Jede Node = ein Unterkapitel mit Link zur eigenen Seite.
// ═══════════════════════════════════════════════════════════════

const CHAPTERS = [
  {
    num: '1', title: 'Die Chemie – eine Naturwissenschaft',
    icon: 'fas fa-microscope', color: C.olive.hex, colorRgb: C.olive.rgb,
    nodes: [
      { num: '1.1', title: 'Die Chemie im Kanon der Naturwissenschaften', icon: 'fas fa-globe',            link: `${BASE}/themen/1/1-1` },
      { num: '1.2', title: 'Denk- und Arbeitsweisen in der Chemie',       icon: 'fas fa-brain',            link: `${BASE}/themen/1/1-2` },
      { num: '1.3', title: 'Stöchiometrie',                                icon: 'fas fa-calculator',       link: `${BASE}/themen/1/1-3` },
    ],
  },
  {
    num: '2', title: 'Kernchemie und Entstehung der Elemente',
    icon: 'fas fa-radiation', color: C.gold.hex, colorRgb: C.gold.rgb,
    nodes: [
      { num: '2.1', title: 'Kernchemie',                   icon: 'fas fa-atom',     link: `${BASE}/themen/2/2-1` },
      { num: '2.2', title: 'Entstehung der Elemente',      icon: 'fas fa-star',     link: `${BASE}/themen/2/2-2` },
    ],
  },
  {
    num: '3', title: 'Atombau und Periodensystem',
    icon: 'fas fa-atom', color: C.rust.hex, colorRgb: C.rust.rgb,
    nodes: [
      { num: '3.1', title: 'Atombau',                                icon: 'fas fa-circle-dot',   link: `${BASE}/themen/3/3-1` },
      { num: '3.2', title: 'Das Periodensystem der Elemente',        icon: 'fas fa-table-cells',  link: `${BASE}/themen/3/3-2` },
    ],
  },
  {
    num: '4', title: 'Chemische Bindung',
    icon: 'fas fa-link', color: C.indigo.hex, colorRgb: C.indigo.rgb,
    nodes: [
      { num: '4.1', title: 'Hauptbindungsarten',                          icon: 'fas fa-link',          link: `${BASE}/themen/4/4-1` },
      { num: '4.2', title: 'Besondere Wechselwirkungen zwischen Molekülen', icon: 'fas fa-magnet',       link: `${BASE}/themen/4/4-2` },
    ],
  },
  {
    num: '5', title: 'Grundzüge der physikalischen Chemie',
    icon: 'fas fa-fire-alt', color: C.wine.hex, colorRgb: C.wine.rgb,
    nodes: [
      { num: '5.1', title: 'Chemische Thermodynamik',       icon: 'fas fa-thermometer-half', link: `${BASE}/themen/5/5-1` },
      { num: '5.2', title: 'Chemische Kinetik',             icon: 'fas fa-tachometer-alt',   link: `${BASE}/themen/5/5-2` },
      { num: '5.3', title: 'Elektrochemische Prozesse',     icon: 'fas fa-bolt',             link: `${BASE}/themen/5/5-3` },
    ],
  },
  {
    num: '6', title: 'Chemisches Gleichgewicht und MWG',
    icon: 'fas fa-balance-scale', color: C.plum.hex, colorRgb: C.plum.rgb,
    nodes: [
      { num: '6.1', title: 'Das chemische Gleichgewicht',                     icon: 'fas fa-arrows-left-right', link: `${BASE}/themen/6/6-1` },
      { num: '6.2', title: 'Beeinflussung des chemischen Gleichgewichts',     icon: 'fas fa-sliders-h',         link: `${BASE}/themen/6/6-2` },
      { num: '6.3', title: 'Anwendungen des Massenwirkungsgesetzes',          icon: 'fas fa-industry',          link: `${BASE}/themen/6/6-3` },
    ],
  },
  {
    num: '7', title: 'Protonen- und Elektronenübertragungsreaktionen',
    icon: 'fas fa-exchange-alt', color: C.slate.hex, colorRgb: C.slate.rgb,
    nodes: [
      { num: '7.1', title: 'Säuren und Basen',    icon: 'fas fa-flask',        link: `${BASE}/themen/7/7-1` },
      { num: '7.2', title: 'Redoxreaktionen',     icon: 'fas fa-battery-half', link: `${BASE}/themen/7/7-2` },
    ],
  },
  {
    num: '8', title: 'Grundzüge der anorganischen Chemie',
    icon: 'fas fa-vial', color: C.copper.hex, colorRgb: C.copper.rgb,
    nodes: [
      { num: '8.1', title: 'Hauptgruppenelemente und Verbindungen',  icon: 'fas fa-th',            link: `${BASE}/themen/8/8-1` },
      { num: '8.2', title: 'Eigenschaften der Nebengruppenelemente', icon: 'fas fa-circle',        link: `${BASE}/themen/8/8-2` },
      { num: '8.3', title: 'Komplexchemie',                        icon: 'fas fa-microchip',     link: `${BASE}/themen/8/8-3` },
    ],
  },
  {
    num: '9', title: 'Strukturen und Reaktionen organischer Verbindungen',
    icon: 'fas fa-dna', color: C.teal.hex, colorRgb: C.teal.rgb,
    nodes: [
      { num: '9.1', title: 'Allgemeine Grundlagen der organischen Chemie', icon: 'fas fa-shapes',          link: `${BASE}/themen/9/9-1` },
      { num: '9.2', title: 'Aliphatische Kohlenwasserstoffe',             icon: 'fas fa-grip-lines',      link: `${BASE}/themen/9/9-2` },
      { num: '9.3', title: 'Aromatische Kohlenwasserstoffe',              icon: 'fas fa-circle-notch',    link: `${BASE}/themen/9/9-3` },
      { num: '9.4', title: 'Organische Verbindungen mit funktionellen Gruppen', icon: 'fas fa-tag',       link: `${BASE}/themen/9/9-4` },
      { num: '9.5', title: 'Naturstoffe',                                 icon: 'fas fa-leaf',            link: `${BASE}/themen/9/9-5` },
      { num: '9.6', title: 'Chemie in Biosystemen',                       icon: 'fas fa-seedling',        link: `${BASE}/themen/9/9-6` },
    ],
  },
  {
    num: '10', title: 'Ausgewählte Anwendungen in der Chemie',
    icon: 'fas fa-industry', color: C.copper.hex, colorRgb: C.copper.rgb,
    nodes: [
      { num: '10.1', title: 'Werkstoffe',                          icon: 'fas fa-layer-group',  link: `${BASE}/themen/10/10-1` },
      { num: '10.2', title: 'Farbstoffe',                          icon: 'fas fa-palette',      link: `${BASE}/themen/10/10-2` },
      { num: '10.3', title: 'Tenside und Waschmittel',             icon: 'fas fa-soap',         link: `${BASE}/themen/10/10-3` },
      { num: '10.4', title: 'Arzneimittel',                        icon: 'fas fa-pills',        link: `${BASE}/themen/10/10-4` },
      { num: '10.5', title: 'Ausgewählte chemisch-technische Verfahren', icon: 'fas fa-cogs',   link: `${BASE}/themen/10/10-5` },
      { num: '10.6', title: 'Umweltbezogene Chemie',               icon: 'fas fa-leaf',         link: `${BASE}/themen/10/10-6` },
    ],
  },
  {
    num: '11', title: 'Analyseverfahren',
    icon: 'fas fa-search', color: C.indigo.hex, colorRgb: C.indigo.rgb,
    nodes: [
      { num: '11.1', title: 'Klassische Analyseverfahren',       icon: 'fas fa-vials',       link: `${BASE}/themen/11/11-1` },
      { num: '11.2', title: 'Instrumentelle Analyseverfahren',   icon: 'fas fa-wave-square', link: `${BASE}/themen/11/11-2` },
    ],
  },
  {
    num: 'A', title: 'Anhang — PSE',
    icon: 'fas fa-table', color: C.plum.hex, colorRgb: C.plum.rgb,
    nodes: [  
      { num: 'A.1', title: 'Periodensystem der Elemente (vollständig)', icon: 'fas fa-table-cells', link: `${BASE}/themen/pse` },
    ],
  },
];

// ═══════════════════════════════════════════════════════════════
// PAGE CLASS
// ═══════════════════════════════════════════════════════════════

export default class ChemiePage {
  constructor(router) {
    this.router = router;
  }

  render() {
    ensureComponentsCSS();

    const el = document.createElement('div');
    el.className = 'page page-chemie';

    // Lernzettel-CSS laden (Hero-Styles)
    if (!document.querySelector('link[href*="lernzettel.css"]')) {
      const link = document.createElement('link');
      link.rel  = 'stylesheet';
      link.href = 'pages/projekte/lernzettel/styles/lernzettel.css';
      document.head.appendChild(link);
    }

    // Fach-CSS-Variable auf gesamten Seitenbereich anwenden
    el.style.setProperty('--lz-accent',     COLOR);
    el.style.setProperty('--lz-accent-rgb', COLOR_RGB);

    el.innerHTML = this._getHTML();
    return el;
  }

  _getHTML() {
    return `
      <!-- ══════════════ HERO ══════════════ -->
      <section class="lernzettel-hero">
        <div class="lernzettel-hero-inner">
          <div class="lernzettel-hero-orb"
               style="background:radial-gradient(circle,
                 rgba(${COLOR_RGB},0.18) 0%,
                 rgba(${COLOR_RGB},0.06) 55%,
                 transparent 75%);"
               aria-hidden="true"></div>

          <div class="lernzettel-hero-content">
            <p class="lernzettel-eyebrow">
              <i class="fas fa-flask" style="color:${COLOR};"></i>
              Chemie · Abitur 2026 · Baden-Württemberg
            </p>

            <h1 class="lernzettel-headline">
              <span>Chemie —</span><br>
              <em style="color:${COLOR};">Lernzettel.</em>
            </h1>

            <p class="lernzettel-hero-desc">
              11 Kapitel, vollständig strukturiert. Wähle ein Unterkapitel
              und tauche direkt in den Inhalt ein.
            </p>

            ${renderTags(['11 Kapitel', 'LK', 'Abitur 2026', 'BW'])}

            <div class="lernzettel-scroll-hint">
              <div class="lernzettel-scroll-mouse">
                <div class="lernzettel-scroll-wheel"
                     style="background:${COLOR};"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ══════════════ MIND-MAP ══════════════ -->
      <section class="lz-content-section lz-mindmap-section">
        <div class="lz-section-wrap">

          ${renderSubhead('Kapitelübersicht')}

          <h2 class="lz-h2 reveal" style="margin-bottom:0.5rem;">
            Alle 11 Kapitel
          </h2>
          <p class="lz-prose reveal" style="max-width:580px; margin-bottom:2.5rem;">
            Klicke auf ein Unterkapitel, um direkt dorthin zu navigieren.
            Jede Sektion ist eigenständig und vollständig ausgearbeitet.
          </p>

          <div class="reveal">
            ${renderMindMapGrid(CHAPTERS)}
          </div>

        </div>
      </section>

      ${footerHTML(this.router)}
    `;
  }

  init() {
    i18n.init();
    initScrollReveal();
    initMindMap(document);
  }
}