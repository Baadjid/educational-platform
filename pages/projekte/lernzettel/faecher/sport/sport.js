// pages/projekte/lernzettel/faecher/sport/sport.js
// Sport — Übersichtsseite · 5 Hauptbereiche
// Struktur basiert auf dem BW-Bildungsplan Abitur 2026

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

export const COLOR     = '#ff5722';
export const COLOR_RGB = '255, 87, 34';
export const BASE      = '/projekte/lernzettel/faecher/sport';

// ═══════════════════════════════════════════════════════════════
// KAPITEL-DATEN
// Struktur: Hauptbereich → Unterkapitel → Link zur Unterseite
// ═══════════════════════════════════════════════════════════════

const CHAPTERS = [

  // ── 1 · SPORTBIOLOGIE ────────────────────────────────────────
  {
    num: '1', title: 'Sportbiologie',
    icon: 'fas fa-heartbeat', color: COLOR, colorRgb: COLOR_RGB,
    nodes: [
      {
        num: '1.1', title: 'Herz-Kreislauf-System',
        icon: 'fas fa-heart',
        link: `${BASE}/themen/sportbiologie/herz-kreislauf`,
      },
      {
        num: '1.2', title: 'Passiver Bewegungsapparat',
        icon: 'fas fa-bone',
        link: `${BASE}/themen/sportbiologie/passiver-bewegungsapparat`,
      },
      {
        num: '1.3', title: 'Aktiver Bewegungsapparat',
        icon: 'fas fa-person-running',
        link: `${BASE}/themen/sportbiologie/aktiver-bewegungsapparat`,
      },
      {
        num: '1.4', title: 'Energiebereitstellung',
        icon: 'fas fa-bolt',
        link: `${BASE}/themen/sportbiologie/energiebereitstellung`,
      },
    ],
  },

  // ── 2 · TRAININGSLEHRE ───────────────────────────────────────
  {
    num: '2', title: 'Trainingslehre',
    icon: 'fas fa-dumbbell', color: C.slate.hex, colorRgb: C.slate.rgb,
    nodes: [
      {
        num: '2.1', title: 'Grundlagen des Trainings',
        icon: 'fas fa-layer-group',
        link: `${BASE}/themen/trainingslehre/grundlagen`,
      },
      {
        num: '2.2', title: 'Ausdauer',
        icon: 'fas fa-person-running',
        link: `${BASE}/themen/trainingslehre/ausdauer`,
      },
      {
        num: '2.3', title: 'Kraft',
        icon: 'fas fa-dumbbell',
        link: `${BASE}/themen/trainingslehre/kraft`,
      },
      {
        num: '2.4', title: 'Schnelligkeit',
        icon: 'fas fa-gauge-high',
        link: `${BASE}/themen/trainingslehre/schnelligkeit`,
      },
      {
        num: '2.5', title: 'Beweglichkeit',
        icon: 'fas fa-arrows-up-down',
        link: `${BASE}/themen/trainingslehre/beweglichkeit`,
      },
      {
        num: '2.6', title: 'Koordination',
        icon: 'fas fa-circle-nodes',
        link: `${BASE}/themen/trainingslehre/koordination`,
      },
      {
        num: '2.7', title: 'Technik & Techniktraining',
        icon: 'fas fa-cogs',
        link: `${BASE}/themen/trainingslehre/technik`,
      },
      {
        num: '2.8', title: 'Lerntheorie & Spielvermittlung',
        icon: 'fas fa-chalkboard-teacher',
        link: `${BASE}/themen/trainingslehre/lerntheorie`,
      },
    ],
  },

  // ── 3 · BEWEGUNGSLEHRE ───────────────────────────────────────
  {
    num: '3', title: 'Bewegungslehre',
    icon: 'fas fa-wave-square', color: C.gold.hex, colorRgb: C.gold.rgb,
    nodes: [
      {
        num: '3.1', title: 'Grundlagen der Bewegungslehre',
        icon: 'fas fa-eye',
        link: `${BASE}/themen/bewegungslehre/grundlagen`,
      },
      {
        num: '3.2', title: 'Physikalische Gesetzmäßigkeiten',
        icon: 'fas fa-atom',
        link: `${BASE}/themen/bewegungslehre/physik`,
      },
      {
        num: '3.3', title: 'Kraft-Zeit-Diagramme',
        icon: 'fas fa-chart-line',
        link: `${BASE}/themen/bewegungslehre/kraft-zeit-diagramme`,
      },
      {
        num: '3.4', title: 'Biomechanische Prinzipien',
        icon: 'fas fa-ruler-combined',
        link: `${BASE}/themen/bewegungslehre/biomechanik`,
      },
      {
        num: '3.5', title: 'Phasenmodelle',
        icon: 'fas fa-diagram-project',
        link: `${BASE}/themen/bewegungslehre/phasenmodelle`,
      },
    ],
  },

  // ── 4 · SPORT UND GESUNDHEIT ─────────────────────────────────
  {
    num: '4', title: 'Sport und Gesundheit',
    icon: 'fas fa-shield-heart', color: C.teal.hex, colorRgb: C.teal.rgb,
    nodes: [
      {
        num: '4.1', title: 'Gesundheitsbegriff',
        icon: 'fas fa-notes-medical',
        link: `${BASE}/themen/gesundheit/gesundheitsbegriff`,
      },
      {
        num: '4.2', title: 'Verletzungen im Sport',
        icon: 'fas fa-bandage',
        link: `${BASE}/themen/gesundheit/verletzungen`,
      },
      {
        num: '4.3', title: 'Auf- und Abwärmen',
        icon: 'fas fa-fire',
        link: `${BASE}/themen/gesundheit/aufwaermen`,
      },
      {
        num: '4.4', title: 'Sport und Ernährung',
        icon: 'fas fa-apple-whole',
        link: `${BASE}/themen/gesundheit/ernaehrung`,
      },
      {
        num: '4.5', title: 'Doping',
        icon: 'fas fa-syringe',
        link: `${BASE}/themen/gesundheit/doping`,
      },
    ],
  },

  // ── 5 · PSYCHOLOGIE, SOZIALES & GESELLSCHAFT ─────────────────
  {
    num: '5', title: 'Psychologie, Soziales & Gesellschaft',
    icon: 'fas fa-brain', color: C.indigo.hex, colorRgb: C.indigo.rgb,
    nodes: [
      {
        num: '5.1', title: 'Motive und Motivation im Sport',
        icon: 'fas fa-fire-flame-curved',
        link: `${BASE}/themen/psychologie/motivation`,
      },
      {
        num: '5.2', title: 'Emotionen, Stress & Aggression',
        icon: 'fas fa-face-angry',
        link: `${BASE}/themen/psychologie/emotionen`,
      },
      {
        num: '5.3', title: 'Regeln im Sport',
        icon: 'fas fa-scale-balanced',
        link: `${BASE}/themen/psychologie/regeln`,
      },
    ],
  },

];

// ═══════════════════════════════════════════════════════════════
// PAGE CLASS
// ═══════════════════════════════════════════════════════════════

export default class SportPage {
  constructor(router) {
    this.router = router;
  }

  render() {
    ensureComponentsCSS();

    const el = document.createElement('div');
    el.className = 'page page-sport';

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
              <i class="fas fa-dumbbell" style="color:${COLOR};"></i>
              Sport · Abitur 2026 · Baden-Württemberg
            </p>

            <h1 class="lernzettel-headline">
              <span>Sport —</span><br>
              <em style="color:${COLOR};">Lernzettel.</em>
            </h1>

            <p class="lernzettel-hero-desc">
              5 Themenbereiche, ${totalNodes} Unterkapitel — vollständig strukturiert.
              Von Sportbiologie über Trainingslehre bis hin zu Psychologie & Gesellschaft.
            </p>

            ${renderTags([
              '5 Bereiche',
              `${totalNodes} Kapitel`,
              'Sportbiologie',
              'Trainingslehre',
              'Abitur 2026',
              'BW',
            ])}

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

          ${renderSubhead('Themenübersicht')}

          <h2 class="lz-h2 reveal" style="margin-bottom:0.5rem;">
            Alle 5 Themenbereiche
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