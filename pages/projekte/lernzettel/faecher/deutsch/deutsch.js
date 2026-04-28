// pages/projekte/lernzettel/faecher/deutsch/deutsch.js
// Deutsch — Übersichtsseite
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

// ─── Fach-Design ────────────────────────────────────────────────

export const COLOR     = '#ffcc00';
export const COLOR_RGB = '255, 204, 0';

// ─── Basis-Route für alle Unterseiten ───────────────────────────

export const BASE = '/projekte/lernzettel/faecher/deutsch';

// ═══════════════════════════════════════════════════════════════
// KAPITEL-DATEN
// Alle Icons: nur FontAwesome 6 Free (fas / far / fab)
// ═══════════════════════════════════════════════════════════════

const CHAPTERS = [

  // ── 1 · SPRACHE, SPRECHEN, KOMMUNIKATION ────────────────────
  {
    num: '1', title: 'Sprache, Sprechen, Kommunikation',
    icon: 'fas fa-comments', color: COLOR, colorRgb: COLOR_RGB,
    nodes: [
      {
        num: '1.1', title: 'Was ist Sprache? — Erklärungsansätze',
        icon: 'fas fa-language',
        link: `${BASE}/themen/sprache/was-ist-sprache`,
      },
      {
        num: '1.2', title: 'Leistung & kommunikative Funktion',
        icon: 'fas fa-satellite-dish',
        link: `${BASE}/themen/sprache/leistung-funktion`,
      },
      {
        num: '1.3', title: 'Sprachvarietäten und ihre Reichweite',
        icon: 'fas fa-globe',
        link: `${BASE}/themen/sprache/sprachvarietaeten`,
      },
      {
        num: '1.4', title: 'Sprachgeschichte & Sprachwandel',
        icon: 'fas fa-clock-rotate-left',
        link: `${BASE}/themen/sprache/sprachwandel`,
      },
    ],
  },

  // ── 2 · LITERARISCHE GATTUNGEN & SACHTEXTE ──────────────────
  {
    num: '2', title: 'Literarische Gattungen & Sachtexte',
    icon: 'fas fa-book-open', color: COLOR, colorRgb: COLOR_RGB,
    nodes: [
      {
        num: '2.1', title: 'Epik — Erzählende Texte',
        icon: 'fas fa-feather',
        link: `${BASE}/themen/gattungen/epik`,
      },
      {
        num: '2.2', title: 'Dramatik — Bühnentexte',
        icon: 'fas fa-masks-theater',
        link: `${BASE}/themen/gattungen/dramatik`,
      },
      {
        num: '2.3', title: 'Lyrik — Gedichte',
        icon: 'fas fa-music',
        link: `${BASE}/themen/gattungen/lyrik`,
      },
      {
        num: '2.4', title: 'Sachtexte & Textsorten',
        icon: 'fas fa-newspaper',
        link: `${BASE}/themen/gattungen/sachtexte`,
      },
      {
        num: '2.5', title: 'Reden & Rhetorik',
        icon: 'fas fa-microphone',
        link: `${BASE}/themen/gattungen/reden`,
      },
      {
        num: '2.6', title: 'Analyse & Interpretation',
        icon: 'fas fa-magnifying-glass',
        link: `${BASE}/themen/gattungen/analyse`,
      },
    ],
  },

  // ── 3 · ERÖRTERN & ARGUMENTIEREN ────────────────────────────
  {
    num: '3', title: 'Erörtern & Argumentieren',
    icon: 'fas fa-scale-balanced', color: COLOR, colorRgb: COLOR_RGB,
    nodes: [
      {
        num: '3.1', title: 'Argumentationsarten & Grundstruktur',
        icon: 'fas fa-list-check',
        link: `${BASE}/themen/eroertern/argumentieren`,
      },
      {
        num: '3.2', title: 'Textgebundene Erörterung',
        icon: 'fas fa-file-lines',
        link: `${BASE}/themen/eroertern/textgebunden`,
      },
      {
        num: '3.3', title: 'Dialektische Erörterung (Pro & Contra)',
        icon: 'fas fa-right-left',
        link: `${BASE}/themen/eroertern/dialektisch`,
      },
      {
        num: '3.4', title: 'Lineare / steigernde Erörterung',
        icon: 'fas fa-arrow-trend-up',
        link: `${BASE}/themen/eroertern/linear`,
      },
    ],
  },

  // ── 4 · SPRACHLICHE MITTEL ──────────────────────────────────
  {
    num: '4', title: 'Sprachliche Mittel',
    icon: 'fas fa-paintbrush', color: COLOR, colorRgb: COLOR_RGB,
    nodes: [
      {
        num: '4.1', title: 'Klangfiguren',
        icon: 'fas fa-wave-square',         // fa-waveform-lines ist Pro → wave-square ist free
        link: `${BASE}/themen/stilmittel/klangfiguren`,
      },
      {
        num: '4.2', title: 'Wortfiguren & Tropen',
        icon: 'fas fa-quote-left',
        link: `${BASE}/themen/stilmittel/wortfiguren`,
      },
      {
        num: '4.3', title: 'Satz- & Strukturfiguren',
        icon: 'fas fa-code-branch',
        link: `${BASE}/themen/stilmittel/satzfiguren`,
      },
      {
        num: '4.4', title: 'Ironie, Sarkasmus & weitere Mittel',
        icon: 'fas fa-face-grin-tongue-wink',
        link: `${BASE}/themen/stilmittel/ironie`,
      },
      {
        num: '4.5', title: 'Analyse-Methodik & Formulierungshilfen',
        icon: 'fas fa-pen-ruler',
        link: `${BASE}/themen/stilmittel/analyse-methodik`,
      },
    ],
  },

  // ── 5 · EPOCHEN & STRÖMUNGEN ────────────────────────────────
  {
    num: '5', title: 'Epochen & literarische Strömungen',
    icon: 'fas fa-hourglass-half', color: COLOR, colorRgb: COLOR_RGB,
    nodes: [
      {
        num: '5.1', title: 'Mittelalter & frühe Neuzeit',
        icon: 'fas fa-chess-rook',
        link: `${BASE}/themen/epochen/mittelalter`,
      },
      {
        num: '5.2', title: 'Barock & Aufklärung',
        icon: 'fas fa-landmark',
        link: `${BASE}/themen/epochen/barock-aufklaerung`,
      },
      {
        num: '5.3', title: 'Sturm & Drang · Klassik · Romantik',
        icon: 'fas fa-feather',
        link: `${BASE}/themen/epochen/klassik-romantik`,
      },
      {
        num: '5.4', title: 'Realismus · Naturalismus · Jahrhundertwende',
        icon: 'fas fa-industry',
        link: `${BASE}/themen/epochen/realismus-naturalismus`,
      },
      {
        num: '5.5', title: 'Expressionismus · Weimarer Republik · Exil',
        icon: 'fas fa-person-running',
        link: `${BASE}/themen/epochen/expressionismus-exil`,
      },
      {
        num: '5.6', title: 'Nachkrieg & Gegenwartsliteratur',
        icon: 'fas fa-city',
        link: `${BASE}/themen/epochen/nachkrieg-gegenwart`,
      },
    ],
  },

  // ── 6 · AKADEMISCHE SPRACHE & SPRECHAKTE ────────────────────
  {
    num: '6', title: 'Akademische Sprache & Sprechakte',
    icon: 'fas fa-graduation-cap', color: COLOR, colorRgb: COLOR_RGB,
    nodes: [
      {
        num: '6.1', title: 'Akademische Hochsprache (C1 / C2)',
        icon: 'fas fa-book',
        link: `${BASE}/themen/akademisch/hochsprache`,
      },
      {
        num: '6.2', title: 'Performative Verben — Assertive',
        icon: 'fas fa-bullhorn',
        link: `${BASE}/themen/akademisch/assertive`,
      },
      {
        num: '6.3', title: 'Performative Verben — Direktive & Expressive',
        icon: 'fas fa-hand-point-right',
        link: `${BASE}/themen/akademisch/direktive`,
      },
      {
        num: '6.4', title: 'Performative Verben — Deklarative & Bewertende',
        icon: 'fas fa-gavel',
        link: `${BASE}/themen/akademisch/deklarative`,
      },
    ],
  },

  // ── 7 · KURZGESCHICHTEN & PROSAANALYSE ──────────────────────
  {
    num: '7', title: 'Kurzgeschichten & Prosaanalyse',
    icon: 'fas fa-file-alt', color: COLOR, colorRgb: COLOR_RGB,
    nodes: [
      {
        num: '7.1', title: 'Merkmale der Kurzgeschichte',
        icon: 'fas fa-list',
        link: `${BASE}/themen/kurzgeschichte/merkmale`,
      },
      {
        num: '7.2', title: 'Einleitung & Inhaltsangabe schreiben',
        icon: 'fas fa-pen',
        link: `${BASE}/themen/kurzgeschichte/einleitung`,
      },
      {
        num: '7.3', title: 'Erzähltechnische Mittel analysieren',
        icon: 'fas fa-magnifying-glass-chart',
        link: `${BASE}/themen/kurzgeschichte/erzaehltechnik`,
      },
      {
        num: '7.4', title: 'Sprachliche Mittel — Vorher / Nachher',
        icon: 'fas fa-code-compare',
        link: `${BASE}/themen/kurzgeschichte/stilmittel-analyse`,
      },
    ],
  },
];

// ═══════════════════════════════════════════════════════════════
// PAGE CLASS
// ═══════════════════════════════════════════════════════════════

export default class DeutschPage {
  constructor(router) {
    this.router = router;
  }

  render() {
    ensureComponentsCSS();

    const el = document.createElement('div');
    el.className = 'page page-deutsch';

    if (!document.querySelector('link[href*="lernzettel.css"]')) {
      const link = document.createElement('link');
      link.rel  = 'stylesheet';
      link.href = 'pages/projekte/lernzettel/styles/lernzettel.css';
      document.head.appendChild(link);
    }

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
              <i class="fas fa-book-open" style="color:${COLOR};"></i>
              Deutsch · Abitur 2026 · Baden-Württemberg
            </p>

            <h1 class="lernzettel-headline">
              <span>Deutsch —</span><br>
              <em style="color:${COLOR};">Lernzettel.</em>
            </h1>

            <p class="lernzettel-hero-desc">
              8 Kapitel, vollständig strukturiert. Wähle ein Unterkapitel
              und tauche direkt in den Inhalt ein.
            </p>

            ${renderTags(['8 Kapitel', 'LK', 'Abitur 2026', 'BW'])}

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
            Alle 8 Kapitel
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