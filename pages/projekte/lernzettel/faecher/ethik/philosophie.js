// pages/projekte/lernzettel/faecher/ethik/philosophie.js
// ══════════════════════════════════════════════════════════════════
// Philosophie — Übersichtsseite (Lernzettel Abitur 2026 BW)
// Architektur-Muster: identisch mit deutsch.js / chemie.js
// ══════════════════════════════════════════════════════════════════

import { initScrollReveal, refreshScrollReveal } from '../../../../../shared/js/scroll.js';
import { footerHTML }          from '../../../../../components/Footer.js';
import { i18n }                from '../../../../../shared/js/i18n.js';
import { CONFIG } from '../../../../../core/config.js';
import {
  ensureComponentsCSS,
  renderMindMapGrid,
  initMindMap,
  loadComponentCSS,
} from '../../js/components/components.js';
import {C} from '../../LernzettelPage.js';

// ── Design-Tokens ──────────────────────────────────────────────
export const COLOR     = '#c9a87c';
export const COLOR_RGB = '201, 168, 124';
export const BASE      = '/projekte/lernzettel/faecher/ethik';


// ══════════════════════════════════════════════════════════════════
// KAPITEL-DATEN
// ══════════════════════════════════════════════════════════════════

const CHAPTERS = [

  // ── Kap. 1 — Vorsokratik ──────────────────────────────────────
  {
    num: '1', title: 'Die Vorsokratik', icon: 'fas fa-water',
    color: C.olive.hex, colorRgb: C.olive.rgb,
    nodes: [
      { num: '1.1', title: 'Kulturhistorischer Hintergrund',    icon: 'fas fa-landmark',        link: `${BASE}/themen/vorsokratik/hintergrund` },
      { num: '1.2', title: 'Ionische Naturphilosophen',         icon: 'fas fa-water',            link: `${BASE}/themen/vorsokratik/ionische-naturphilosophen` },
      { num: '1.3', title: 'Von Pythagoras bis Demokrit',       icon: 'fas fa-shapes',           link: `${BASE}/themen/vorsokratik/pythagoras-demokrit` },
      { num: '1.4', title: 'Die Sophisten',                     icon: 'fas fa-comments',         link: `${BASE}/themen/vorsokratik/sophisten` },
    ],
  },

  // ── Kap. 2 — Klassische griechische Philosophie ───────────────
  {
    num: '2', title: 'Klassische Antike', icon: 'fas fa-university',
    color: C.gold.hex, colorRgb: C.gold.rgb,
    nodes: [
      { num: '2.1', title: 'Sokrates',                          icon: 'fas fa-comment-dots',     link: `${BASE}/themen/klassische-antike/sokrates` },
      { num: '2.2', title: 'Platon — Staat & Ideenlehre',       icon: 'fas fa-mountain-sun',     link: `${BASE}/themen/klassische-antike/platon` },
      { num: '2.3', title: 'Aristoteles — Logik & Ethik',       icon: 'fas fa-scale-balanced',   link: `${BASE}/themen/klassische-antike/aristoteles` },
    ],
  },

  // ── Kap. 3 — Hellenismus ──────────────────────────────────────
  {
    num: '3', title: 'Hellenistische Schulen', icon: 'fas fa-spa',
    color: C.teal.hex, colorRgb: C.teal.rgb,
    nodes: [
      { num: '3.1', title: 'Epikur',                            icon: 'fas fa-leaf',             link: `${BASE}/themen/hellenistische-schulen/epikur` },
      { num: '3.2', title: 'Die Stoa',                          icon: 'fas fa-shield-halved',    link: `${BASE}/themen/hellenistische-schulen/stoa` },
      { num: '3.3', title: 'Skeptizismus',                      icon: 'fas fa-question',         link: `${BASE}/themen/hellenistische-schulen/skeptizismus` },
    ],
  },

  // ── Kap. 4 — Neuplatonismus / Patristik ───────────────────────
  {
    num: '4', title: 'Neuplatonismus & Patristik', icon: 'fas fa-sun',
    color: C.bronze.hex, colorRgb: C.bronze.rgb,
    nodes: [
      { num: '4.1', title: 'Plotin',                            icon: 'fas fa-circle-notch',     link: `${BASE}/themen/neuplatonismus-patristik/plotin` },
      { num: '4.2', title: 'Augustinus',                        icon: 'fas fa-cross',            link: `${BASE}/themen/neuplatonismus-patristik/augustinus` },
    ],
  },

  // ── Kap. 5 — Mittelalter ──────────────────────────────────────
  {
    num: '5', title: 'Mittelalter & Scholastik', icon: 'fas fa-church',
    color: C.wine.hex, colorRgb: C.wine.rgb,
    nodes: [
      { num: '5.1', title: 'Anselm von Canterbury',             icon: 'fas fa-pray',             link: `${BASE}/themen/mittelalter/anselm` },
      { num: '5.2', title: 'Petrus Abälard',                    icon: 'fas fa-gavel',            link: `${BASE}/themen/mittelalter/petrus` },
      { num: '5.3', title: 'Hildegard von Bingen',              icon: 'fas fa-seedling',         link: `${BASE}/themen/mittelalter/hildegard` },
      { num: '5.4', title: 'Thomas von Aquin',                  icon: 'fas fa-book',             link: `${BASE}/themen/mittelalter/thomas` },
      { num: '5.5', title: 'Meister Eckhart',                   icon: 'fas fa-eye',              link: `${BASE}/themen/mittelalter/eckhart` },
      { num: '5.6', title: 'Nikolaus von Kues',                 icon: 'fas fa-infinity',         link: `${BASE}/themen/mittelalter/nikolaus` },
    ],
  },

  // ── Kap. 6 — Neuzeit ──────────────────────────────────────────
  {
    num: '6', title: 'Neuzeit', icon: 'fas fa-compass',
    color: C.indigo.hex, colorRgb: C.indigo.rgb,
    nodes: [
      { num: '6.1', title: 'Erasmus & Giordano Bruno',          icon: 'fas fa-feather',          link: `${BASE}/themen/neuzeit/bruno` },
      { num: '6.2', title: 'Rationalismus — Descartes, Spinoza, Leibniz', icon: 'fas fa-brain',  link: `${BASE}/themen/neuzeit/rationalismus` },
      { num: '6.3', title: 'Hobbes — Leviathan',                icon: 'fas fa-crown',            link: `${BASE}/themen/neuzeit/hobbes` },
      { num: '6.4', title: 'Empirismus — Locke, Berkeley, Hume',icon: 'fas fa-flask',            link: `${BASE}/themen/neuzeit/empirismus` },
    ],
  },

  // ── Kap. 7 — Aufklärung ───────────────────────────────────────
  {
    num: '7', title: 'Aufklärung', icon: 'fas fa-lightbulb',
    color: C.slate.hex, colorRgb: C.slate.rgb,
    nodes: [
      { num: '7.1', title: 'Voltaire',                          icon: 'fas fa-pen-fancy',        link: `${BASE}/themen/aufklaerung/voltaire` },
      { num: '7.2', title: 'La Mettrie',                        icon: 'fas fa-cogs',             link: `${BASE}/themen/aufklaerung/la-mettrie` },
      { num: '7.3', title: 'Rousseau — Gesellschaftsvertrag',   icon: 'fas fa-handshake',        link: `${BASE}/themen/aufklaerung/rousseau` },
      { num: '7.4', title: 'Kant — Kritische Philosophie',      icon: 'fas fa-star',             link: `${BASE}/themen/aufklaerung/kant` },
    ],
  },

  // ── Kap. 8 — Deutscher Idealismus ─────────────────────────────
  {
    num: '8', title: 'Deutscher Idealismus', icon: 'fas fa-mountain',
    color: C.copper.hex, colorRgb: C.copper.rgb,
    nodes: [
      { num: '8.1', title: 'Fichte — Das Ich',                  icon: 'fas fa-user',             link: `${BASE}/themen/deutscher-idealismus/fichte` },
      { num: '8.2', title: 'Hegel — Dialektik & Geist',         icon: 'fas fa-arrows-spin',      link: `${BASE}/themen/deutscher-idealismus/hegel` },
      { num: '8.3', title: 'Schelling — Naturphilosophie',      icon: 'fas fa-tree',             link: `${BASE}/themen/deutscher-idealismus/schelling` },
    ],
  },

  // ── Kap. 9 — 19. Jahrhundert ──────────────────────────────────
  {
    num: '9', title: '19. Jahrhundert', icon: 'fas fa-industry',
    color: C.rust.hex, colorRgb: C.rust.rgb,
    nodes: [
      { num: '9.1', title: 'Marx — Entfremdung & Kapital',      icon: 'fas fa-hammer',           link: `${BASE}/themen/19-jahrhundert/marx` },
      { num: '9.2', title: 'Kierkegaard — Existenz',            icon: 'fas fa-person',           link: `${BASE}/themen/19-jahrhundert/kierkegaard` },
      { num: '9.3', title: 'Schopenhauer — Wille',              icon: 'fas fa-cloud',            link: `${BASE}/themen/19-jahrhundert/schopenhauer` },
      { num: '9.4', title: 'Nietzsche — Übermensch',            icon: 'fas fa-bolt',             link: `${BASE}/themen/19-jahrhundert/nietzsche` },
    ],
  },

  // ── Kap. 10 — Philosophie der Gegenwart ───────────────────────
  {
    num: '10', title: 'Gegenwart', icon: 'fas fa-atom',
    color: C.plum.hex, colorRgb: C.plum.rgb,
    nodes: [
      { num: '10.1', title: 'Wittgenstein — Sprache & Logik',   icon: 'fas fa-language',         link: `${BASE}/themen/gegenwart/wittgenstein` },
      { num: '10.2', title: 'Heidegger — Sein und Zeit',        icon: 'fas fa-hourglass-half',   link: `${BASE}/themen/gegenwart/heidegger` },
      { num: '10.3', title: 'Adorno — Kritische Theorie',       icon: 'fas fa-masks-theater',    link: `${BASE}/themen/gegenwart/adorno` },
      { num: '10.4', title: 'Foucault — Macht & Diskurs',       icon: 'fas fa-microscope',       link: `${BASE}/themen/gegenwart/foucault` },
    ],
  },
];

// ══════════════════════════════════════════════════════════════════
// PAGE CLASS
// ══════════════════════════════════════════════════════════════════

export default class PhilosophiePage {
  constructor(router) {
    this.router = router;
  }

  render() {
    ensureComponentsCSS();
    loadComponentCSS('pages/projekte/lernzettel/styles/lernzettel.css');
    loadComponentCSS('pages/projekte/lernzettel/styles/sub.css');

    const el = document.createElement('div');
    el.className = 'page page-philosophie';
    el.style.setProperty('--lz-accent',     COLOR);
    el.style.setProperty('--lz-accent-rgb', COLOR_RGB);
    el.innerHTML = this._getHTML();
    return el;
  }

  _getHTML() {
    return `

      <!-- ═══════════════════ HERO ═══════════════════ -->
      <section class="lernzettel-hero">
        <div class="lernzettel-hero-orb" style="
          background: radial-gradient(circle,
            rgba(${COLOR_RGB}, 0.18) 0%,
            rgba(${COLOR_RGB}, 0.06) 45%,
            transparent 72%);
        "></div>

        <div class="lernzettel-hero-inner reveal">
          <div class="lernzettel-eyebrow">
            <i class="fas fa-graduation-cap"></i>
            Lernzettel · Abitur 2026
          </div>

          <h1 class="lernzettel-headline">
            Geschichte der<br><em>Philosophie</em>
          </h1>

          <p class="lernzettel-hero-desc">
            Von den Vorsokratikern bis zur Gegenwart —
            2 500 Jahre Denken über Sein, Erkenntnis, Ethik und Gesellschaft.
            Strukturiert für das Abitur in Baden-Württemberg.
          </p>

          <div class="lernzettel-scroll-hint">
            <div class="lernzettel-scroll-mouse">
              <div class="lernzettel-scroll-wheel"></div>
            </div>
          </div>
        </div>
      </section>

      <!-- ═══════════════════ MIND-MAP ═══════════════════ -->
      <section class="lz-section lz-section--schule" id="content">
        <div class="lz-section-wrap">

          <div class="lz-section-head reveal">
            <span class="lz-section-badge">
              <i class="fas fa-scroll"></i> Philosophiegeschichte
            </span>
            <h2 class="lz-section-title">10 Kapitel · Antike bis Gegenwart</h2>
            <p class="lz-section-sub">
              Jedes Kapitel behandelt eine Epoche mit ihren zentralen Denkern,
              Thesen und Originalzitaten — aufbereitet für Klausuren und mündliche Prüfungen.
            </p>
          </div>

          <div class="lz-mindmap-section reveal">
            ${renderMindMapGrid(CHAPTERS)}
          </div>

        </div>
      </section>

      <!-- ═══════════════════ FOOTER ═══════════════════ -->
      ${footerHTML(this.router, {
        extraColumn: {
          title: 'Weitere Quellen',
          items: [
            { label: 'Ethik-Abi by BOE', href: CONFIG.ETHIK.BOE, }
          ]
        }
      })}
    `;
  }

  init() {
    i18n.init();
    initScrollReveal();
    refreshScrollReveal();
    initMindMap(document);
  }
}