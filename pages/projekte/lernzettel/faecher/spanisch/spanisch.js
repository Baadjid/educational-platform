// pages/projekte/lernzettel/faecher/spanisch/spanisch.js
// Spanisch — Übersichtsseite · 3 Hauptthemen

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

export const COLOR     = '#2d7a9e';
export const COLOR_RGB = '45, 122, 158';
export const BASE      = '/projekte/lernzettel/faecher/spanisch';

// ═══════════════════════════════════════════════════════════════
// KAPITEL-DATEN
// ═══════════════════════════════════════════════════════════════

const CHAPTERS = [
  {
    num: '1', title: 'Gramática — Grammatik',
    icon: 'fas fa-spell-check', color: C.bronze.hex, colorRgb: C.bronze.rgb,
    nodes: [
      { num: '1.1', title: 'Tiempos verbales — Zeitformen',       icon: 'fas fa-clock',           link: `${BASE}/themen/grammatik/zeitformen`    },
      { num: '1.2', title: 'Ser vs. Estar',                       icon: 'fas fa-balance-scale',   link: `${BASE}/themen/grammatik/ser-estar`     },
      { num: '1.3', title: 'Subjuntivo — Konjunktiv',             icon: 'fas fa-theater-masks',   link: `${BASE}/themen/grammatik/subjuntivo`    },
      { num: '1.4', title: 'Discurso indirecto — Indirekte Rede', icon: 'fas fa-comment-dots',    link: `${BASE}/themen/grammatik/indirekte-rede`},
      { num: '1.5', title: 'Pronombres — Objektpronomen',         icon: 'fas fa-link',            link: `${BASE}/themen/grammatik/objektpronomen`},
      { num: '1.6', title: 'Oraciones condicionales — Si-Sätze',  icon: 'fas fa-code-branch',     link: `${BASE}/themen/grammatik/si-saetze`     },
      { num: '1.7', title: 'Imperativo — Imperativ',              icon: 'fas fa-exclamation',     link: `${BASE}/themen/grammatik/imperativo`    },
      { num: '1.8', title: 'Relativos & Satzbau',                 icon: 'fas fa-project-diagram', link: `${BASE}/themen/grammatik/relativsaetze` },
    ],
  },
  {
    num: '2', title: 'Vocabulario — Wortschatz',
    icon: 'fas fa-book-open', color: C.olive.hex, colorRgb: C.olive.rgb,
    nodes: [
      { num: '2.1', title: 'Vocabulario básico — Grundwortschatz',             icon: 'fas fa-font',              link: `${BASE}/themen/wortschatz/grundwortschatz`        },
      { num: '2.2', title: 'Sociedad & Política',                              icon: 'fas fa-users',             link: `${BASE}/themen/wortschatz/gesellschaft-politik`   },
      { num: '2.3', title: 'Medio ambiente — Umwelt & Nachhaltigkeit',         icon: 'fas fa-leaf',              link: `${BASE}/themen/wortschatz/umwelt`                 },
      { num: '2.4', title: 'Identidad & Migración',                            icon: 'fas fa-passport',          link: `${BASE}/themen/wortschatz/identitaet-migration`   },
      { num: '2.5', title: 'Tecnología & Medios digitales',                    icon: 'fas fa-microchip',         link: `${BASE}/themen/wortschatz/technologie`            },
      { num: '2.6', title: 'Conectores & Frases útiles',                       icon: 'fas fa-arrows-left-right', link: `${BASE}/themen/wortschatz/konnektoren`            },
    ],
  },
  {
    num: '3', title: 'Civilización — Landeskunde',
    icon: 'fas fa-globe-europe', color: C.rust.hex, colorRgb: C.rust.rgb,
    nodes: [
      { num: '3.1', title: 'España: Historia & Política',                      icon: 'fas fa-landmark',       link: `${BASE}/themen/landeskunde/spanien-geschichte`         },
      { num: '3.2', title: 'España: Regionen, Kultur & Gesellschaft',          icon: 'fas fa-map-marked-alt', link: `${BASE}/themen/landeskunde/spanien-kultur`             },
      { num: '3.3', title: 'Latinoamérica — Überblick & Geschichte',           icon: 'fas fa-globe-americas', link: `${BASE}/themen/landeskunde/lateinamerika`              },
      { num: '3.4', title: 'Sociedad latinoamericana — Gesellschaftsthemen',   icon: 'fas fa-people-group',   link: `${BASE}/themen/landeskunde/gesellschaft-lateinamerika` },
      { num: '3.5', title: 'Literatura & Arte hispanohablante',                icon: 'fas fa-feather-alt',    link: `${BASE}/themen/landeskunde/literatur-kunst`            },
    ],
  },
];

// ─── Stats ──────────────────────────────────────────────────────

const STATS = [
  { value: '3',    label: 'Hauptthemen'    },
  { value: '19',   label: 'Unterkapitel'   },
  { value: 'B2+',  label: 'Sprachniveau'   },
  { value: '2026', label: 'Abiturjahrgang' },
];

function renderStats() {
  return `<div class="lz-es-stats">${STATS.map(s => `
    <div class="lz-es-stat">
      <span class="lz-es-stat-val" style="color:${COLOR};">${s.value}</span>
      <span class="lz-es-stat-label">${s.label}</span>
    </div>`).join('')}</div>`;
}

// ─── Abitur-Fokus ────────────────────────────────────────────────

const FOCUS = [
  { icon: 'fas fa-clock',         title: 'Zeitformen',           badge: 'Grammatik',   link: `${BASE}/themen/grammatik/zeitformen`,                 desc: 'Indefinido vs. Imperfecto, Perfecto, alle Zeiten mit Signalwörtern.' },
  { icon: 'fas fa-theater-masks', title: 'Subjuntivo',           badge: 'Grammatik',   link: `${BASE}/themen/grammatik/subjuntivo`,                 desc: 'WUDHU-Regel, Presente & Imperfecto de Subjuntivo, alle Auslöser.'    },
  { icon: 'fas fa-balance-scale', title: 'Ser vs. Estar',        badge: 'Grammatik',   link: `${BASE}/themen/grammatik/ser-estar`,                  desc: 'Alle Kontexte, bedeutungsändernde Adjektive, Häufige Fehler.'        },
  { icon: 'fas fa-code-branch',   title: 'Si-Sätze',             badge: 'Grammatik',   link: `${BASE}/themen/grammatik/si-saetze`,                  desc: 'Drei Typen — real, irreal Gegenwart, irreal Vergangenheit.'          },
  { icon: 'fas fa-passport',      title: 'Identidad & Migración', badge: 'Wortschatz', link: `${BASE}/themen/wortschatz/identitaet-migration`,       desc: 'Schlüsselvokabular für die häufigsten Abitur-Themen.'               },
  { icon: 'fas fa-landmark',      title: 'España: Historia',     badge: 'Landeskunde', link: `${BASE}/themen/landeskunde/spanien-geschichte`,        desc: 'Transición, Autonomien, Franco-Diktatur — Hintergrund für Texte.'   },
];

// ═══════════════════════════════════════════════════════════════
// PAGE CLASS
// ═══════════════════════════════════════════════════════════════

export default class SpanischPage {
  constructor(router) { this.router = router; }

  render() {
    ensureComponentsCSS();
    const el = document.createElement('div');
    el.className = 'page page-spanisch';
    [
      ['lernzettel.css', 'pages/projekte/lernzettel/styles/lernzettel.css'],
      ['spanisch.css',   'pages/projekte/lernzettel/faecher/spanisch/spanisch.css'],
    ].forEach(([id, href]) => {
      if (!document.querySelector(`link[href*="${id}"]`)) {
        const l = document.createElement('link'); l.rel = 'stylesheet'; l.href = href;
        document.head.appendChild(l);
      }
    });
    el.style.setProperty('--lz-accent',     COLOR);
    el.style.setProperty('--lz-accent-rgb', COLOR_RGB);
    el.innerHTML = this._html();
    return el;
  }

  _html() { return `
    <section class="lernzettel-hero lz-es-hero">
      <div class="lernzettel-hero-inner">
        <div class="lernzettel-hero-orb"
             style="background:radial-gradient(circle,rgba(${COLOR_RGB},.18) 0%,rgba(${COLOR_RGB},.06) 55%,transparent 75%);"
             aria-hidden="true"></div>
        <div class="lernzettel-hero-content">
          <p class="lernzettel-eyebrow">
            <i class="fas fa-language" style="color:${COLOR};"></i>
            Español &nbsp;·&nbsp; Abitur 2026 &nbsp;·&nbsp; Baden-Württemberg
          </p>
          <h1 class="lernzettel-headline">
            <span>Español —</span><br>
            <em style="color:${COLOR};">Lernzettel.</em>
          </h1>
          <p class="lernzettel-hero-desc">
            3&nbsp;Hauptthemen, 19&nbsp;Unterkapitel — vollständig für das Spanisch-Abitur
            BW&nbsp;2026 ausgearbeitet. Grammatik, Wortschatz und Landeskunde auf B2+&#8209;Niveau.
          </p>
          ${renderTags(['Grammatik', 'Wortschatz', 'Landeskunde', 'B2+', 'LK', 'Abitur 2026', 'BW'])}
          ${renderStats()}
          <div class="lernzettel-scroll-hint">
            <div class="lernzettel-scroll-mouse">
              <div class="lernzettel-scroll-wheel" style="background:${COLOR};"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="lz-content-section lz-mindmap-section">
      <div class="lz-section-wrap">
        ${renderSubhead('Themenübersicht')}
        <h2 class="lz-h2 reveal" style="margin-bottom:.5rem;">Alle 3&nbsp;Hauptthemen</h2>
        <p class="lz-prose reveal" style="max-width:600px;margin-bottom:2.5rem;">
          Wähle ein Unterkapitel und starte direkt. Jede Seite ist eigenständig,
          vollständig ausgearbeitet und enthält Regeln, Tabellen, Beispiele und Merkhilfen.
        </p>
        <div class="reveal">${renderMindMapGrid(CHAPTERS)}</div>
      </div>
    </section>

    <section class="lz-content-section lz-es-quicknav-section">
      <div class="lz-section-wrap">
        ${renderSubhead('Abitur-Fokus')}
        <h2 class="lz-h2 reveal" style="margin-bottom:.5rem;">Besonders prüfungsrelevant</h2>
        <p class="lz-prose reveal" style="max-width:600px;margin-bottom:2rem;">
          Diese Themen sind in nahezu jeder Abituraufgabe relevant —
          priorisiere sie in deiner Vorbereitung.
        </p>
        <div class="lz-es-focus-grid reveal">
          ${FOCUS.map(f => `
            <a class="lz-es-focus-card"
               data-link="${f.link}"
               style="--focus-color:${COLOR};--focus-color-rgb:${COLOR_RGB};"
               role="button" tabindex="0">
              <div class="lz-es-focus-icon"><i class="${f.icon}"></i></div>
              <div class="lz-es-focus-body">
                <span class="lz-es-focus-badge">${f.badge}</span>
                <div class="lz-es-focus-title">${f.title}</div>
                <div class="lz-es-focus-desc">${f.desc}</div>
              </div>
              <i class="fas fa-arrow-right lz-es-focus-arrow"></i>
            </a>`).join('')}
        </div>
      </div>
    </section>

    ${footerHTML(this.router)}
  `; }

  init() {
    i18n.init();
    initScrollReveal();
    initMindMap(document);
    document.querySelectorAll('.lz-es-focus-card[data-link]').forEach(card => {
      const go = () => { window.location.hash = card.dataset.link; };
      card.addEventListener('click', go);
      card.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); go(); } });
    });
  }
}