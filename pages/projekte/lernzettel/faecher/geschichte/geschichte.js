// pages/projekte/lernzettel/faecher/geschichte/geschichte.js
// Geschichte & GK — Übersichtsseite
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

export const COLOR     = '#ff8a65';
export const COLOR_RGB = '255, 138, 101';

// ─── Basis-Route für alle Unterseiten ───────────────────────────

export const BASE = '/projekte/lernzettel/faecher/geschichte';

// ═══════════════════════════════════════════════════════════════
// KAPITEL-DATEN
// Jede Node = ein Unterkapitel mit Link zur eigenen Seite.
// Jedes Hauptthema hat einen eigenen Ordner unter /themen/
// ═══════════════════════════════════════════════════════════════

const CHAPTERS = [

  // ── 1 · EPOCHENSCHWELLE — FRÜHE NEUZEIT ──────────────────────
  {
    num: '1', title: 'Epochenschwelle — Frühe Neuzeit',
    icon: 'fas fa-scroll', color: C.copper.hex, colorRgb: C.copper.rgb,
    nodes: [
      {
        num: '1.1', title: 'Renaissance & Humanismus',
        icon: 'fas fa-palette',
        link: `${BASE}/themen/epochenschwelle/renaissance`,
      },
      {
        num: '1.2', title: 'Zeitalter der Entdeckungen & Kolonialismus',
        icon: 'fas fa-compass',
        link: `${BASE}/themen/epochenschwelle/entdeckungen`,
      },
      {
        num: '1.3', title: 'Reformation & Konfessionalisierung',
        icon: 'fas fa-church',
        link: `${BASE}/themen/epochenschwelle/reformation`,
      },
      {
        num: '1.4', title: 'Dreißigjähriger Krieg',
        icon: 'fas fa-shield-halved',
        link: `${BASE}/themen/epochenschwelle/dreissigjaehriger-krieg`,
      },
    ],
  },

  // ── 2 · INDUSTRIELLE REVOLUTION & SOZIALE FRAGE ──────────────
  {
    num: '2', title: 'Industrielle Revolution & Soziale Frage',
    icon: 'fas fa-industry', color: C.gold.hex, colorRgb: C.gold.rgb,
    nodes: [
      {
        num: '2.1', title: 'Industrielle Revolution in England',
        icon: 'fas fa-gear',
        link: `${BASE}/themen/industrialisierung/england`,
      },
      {
        num: '2.2', title: 'Industrialisierung in Deutschland & USA',
        icon: 'fas fa-train',
        link: `${BASE}/themen/industrialisierung/deutschland-usa`,
      },
      {
        num: '2.3', title: 'Soziale Frage & Arbeiterbewegung',
        icon: 'fas fa-people-group',
        link: `${BASE}/themen/industrialisierung/soziale-frage`,
      },
      {
        num: '2.4', title: 'Bismarcks Sozialgesetzgebung',
        icon: 'fas fa-scale-balanced',
        link: `${BASE}/themen/industrialisierung/bismarck-sozialgesetze`,
      },
      {
        num: '2.5', title: 'Weltwirtschaftskrise & New Deal',
        icon: 'fas fa-chart-line',
        link: `${BASE}/themen/industrialisierung/new-deal`,
      },
    ],
  },

  // ── 3 · KALTER KRIEG ─────────────────────────────────────────
  {
    num: '3', title: 'Kalter Krieg',
    icon: 'fas fa-radiation', color: C.rust.hex, colorRgb: C.rust.rgb,
    nodes: [
      {
        num: '3.1', title: 'Truman-Doktrin, Marshall-Plan & Berlin-Blockade',
        icon: 'fas fa-flag',
        link: `${BASE}/themen/kalter-krieg/anfaenge`,
      },
      {
        num: '3.2', title: 'NATO, Warschauer Pakt & Korea-Krieg',
        icon: 'fas fa-handshake-slash',
        link: `${BASE}/themen/kalter-krieg/nato-wp-korea`,
      },
      {
        num: '3.3', title: 'Kuba-Krise & nukleare Hochrüstung',
        icon: 'fas fa-bomb',
        link: `${BASE}/themen/kalter-krieg/kuba-krise`,
      },
      {
        num: '3.4', title: 'Vietnam, Prager Frühling & Entspannungspolitik',
        icon: 'fas fa-dove',
        link: `${BASE}/themen/kalter-krieg/vietnam-prag-entspannung`,
      },
      {
        num: '3.5', title: 'KSZE Helsinki, Afghanistan & Zerfall der UdSSR',
        icon: 'fas fa-monument',
        link: `${BASE}/themen/kalter-krieg/ende-kalter-krieg`,
      },
    ],
  },

  // ── 4 · HISTORISCHE ERINNERUNGSKULTUR ────────────────────────
  {
    num: '4', title: 'Historische Erinnerungskultur',
    icon: 'fas fa-landmark', color: C.slate.hex, colorRgb: C.slate.rgb,
    nodes: [
      {
        num: '4.1', title: 'Gedächtnistheorie — Jan Assmann',
        icon: 'fas fa-brain',
        link: `${BASE}/themen/erinnerungskultur/gedaechtnistheorie`,
      },
      {
        num: '4.2', title: 'Phasen der NS-Aufarbeitung in Deutschland',
        icon: 'fas fa-hourglass-half',
        link: `${BASE}/themen/erinnerungskultur/ns-aufarbeitung`,
      },
      {
        num: '4.3', title: 'Denkmäler & Gedenkstätten',
        icon: 'fas fa-archway',
        link: `${BASE}/themen/erinnerungskultur/denkmaeler`,
      },
      {
        num: '4.4', title: 'Historikerstreit & Walser-Bubis-Debatte',
        icon: 'fas fa-comments',
        link: `${BASE}/themen/erinnerungskultur/historikerstreit`,
      },
    ],
  },

  // ── 5 · HERAUSFORDERUNGEN DER GEGENWART ──────────────────────
  {
    num: '5', title: 'Herausforderungen der Gegenwart',
    icon: 'fas fa-earth-europe', color: C.plum.hex, colorRgb: C.plum.rgb,
    nodes: [
      {
        num: '5.1', title: 'Terrorismus & asymmetrische Kriegführung',
        icon: 'fas fa-triangle-exclamation',
        link: `${BASE}/themen/gegenwart/terrorismus`,
      },
      {
        num: '5.2', title: 'Europäische Integration & EU-Krisen',
        icon: 'fas fa-circle-nodes',
        link: `${BASE}/themen/gegenwart/eu-krisen`,
      },
      {
        num: '5.3', title: 'Ukraine-Konflikt',
        icon: 'fas fa-wheat-awn',
        link: `${BASE}/themen/gegenwart/ukraine`,
      },
      {
        num: '5.4', title: 'Klimawandel & Migration',
        icon: 'fas fa-wind',
        link: `${BASE}/themen/gegenwart/klima-migration`,
      },
      {
        num: '5.5', title: 'Demokratie unter Druck',
        icon: 'fas fa-vote-yea',
        link: `${BASE}/themen/gegenwart/demokratie`,
      },
    ],
  },

  // ── 6 · GEDENKTAGE ───────────────────────────────────────────
  {
    num: '6', title: 'Gedenktage',
    icon: 'fas fa-calendar-days', color: C.teal.hex, colorRgb: C.teal.rgb,
    nodes: [
      {
        num: '6.1', title: 'Gedenktage in Deutschland',
        icon: 'fas fa-map-location-dot',
        link: `${BASE}/themen/gedenktage/deutschland`,
      },
      {
        num: '6.2', title: 'Europäische & weltweite Gedenktage',
        icon: 'fas fa-globe',
        link: `${BASE}/themen/gedenktage/europa-welt`,
      },
    ],
  },

];

// ═══════════════════════════════════════════════════════════════
// PAGE CLASS
// ═══════════════════════════════════════════════════════════════

export default class GeschichtePage {
  constructor(router) {
    this.router = router;
  }

  render() {
    ensureComponentsCSS();

    const el = document.createElement('div');
    el.className = 'page page-geschichte';

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
    // Gesamtzahl der Unterkapitel dynamisch berechnen
    const totalNodes = CHAPTERS.reduce((sum, ch) => sum + ch.nodes.length, 0);

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
              <i class="fas fa-landmark" style="color:${COLOR};"></i>
              Geschichte &amp; GK · Abitur 2026 · Baden-Württemberg
            </p>

            <h1 class="lernzettel-headline">
              <span>Geschichte —</span><br>
              <em style="color:${COLOR};">Lernzettel.</em>
            </h1>

            <p class="lernzettel-hero-desc">
              ${CHAPTERS.length} Themenbereiche, ${totalNodes} Unterkapitel — vollständig strukturiert.
              Von der Frühen Neuzeit über den Kalten Krieg bis zu den Herausforderungen der Gegenwart.
            </p>

            ${renderTags([`${CHAPTERS.length} Themenbereiche`, `${totalNodes} Unterkapitel`, 'GK', 'Abitur 2026', 'BW'])}

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
            Alle ${totalNodes} Unterkapitel
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