// pages/projekte/lernzettel/faecher/englisch/englisch.js
// Englisch — Übersichtsseite
// Enthält nur die Kapitelstruktur + MindMap mit Links.
// Alle Inhalte leben in den jeweiligen Unterseiten.

import { initScrollReveal } from '../../../../../shared/js/index.js';
import { footerHTML }        from '../../../../../components/Footer.js';
import { i18n }              from '../../../../../shared/js/i18n.js';
import { CONFIG } from '../../../../../core/config.js';
import {
  ensureComponentsCSS,
  renderMindMapGrid,
  renderSubhead,
  renderTags,
  initMindMap,
} from '../../js/components/components.js';
import {C} from '../../LernzettelPage.js';

// ─── Fach-Design ────────────────────────────────────────────────

export const COLOR     = '#3b82f6';
export const COLOR_RGB = '59, 130, 246';

// ─── Basis-Route für alle Unterseiten ───────────────────────────

export const BASE = '/projekte/lernzettel/faecher/englisch';

// ═══════════════════════════════════════════════════════════════
// KAPITEL-DATEN
// Jede Node = ein Unterkapitel mit Link zur eigenen Seite.
// ═══════════════════════════════════════════════════════════════

const CHAPTERS = [
  {
    num: '1', title: 'USA — Land of Dreams?',
    icon: 'fas fa-flag-usa', color: C.bronze.hex, colorRgb: C.bronze.rgb,
    nodes: [
      { num: '1.1', title: 'Foundations of the USA',         icon: 'fas fa-landmark',          link: `${BASE}/themen/usa/foundations` },
      { num: '1.2', title: 'African American History',       icon: 'fas fa-fist-raised',       link: `${BASE}/themen/usa/african-american` },
      { num: '1.3', title: 'Immigration',                    icon: 'fas fa-plane-arrival',     link: `${BASE}/themen/usa/immigration` },
      { num: '1.4', title: 'Multiculturalism',               icon: 'fas fa-people-group',      link: `${BASE}/themen/usa/multiculturalism` },
      { num: '1.5', title: 'Security & Freedom',             icon: 'fas fa-shield-halved',     link: `${BASE}/themen/usa/security-freedom` },
      { num: '1.6', title: 'Foreign Policy',                 icon: 'fas fa-globe-americas',    link: `${BASE}/themen/usa/foreign-policy` },
      { num: '1.7', title: 'Economy',                        icon: 'fas fa-chart-line',        link: `${BASE}/themen/usa/economy` },
      { num: '1.8', title: 'Social Welfare',                 icon: 'fas fa-hand-holding-heart',link: `${BASE}/themen/usa/social-welfare` },
      { num: '1.9', title: 'Political System',               icon: 'fas fa-building-columns',  link: `${BASE}/themen/usa/political-system` },
      { num: '1.10', title: 'Religion in the USA',           icon: 'fas fa-church',            link: `${BASE}/themen/usa/religion` },
    ],
  },
  {
    num: '2', title: 'Great Britain & Its People',
    icon: 'fas fa-crown', color: C.gold.hex, colorRgb: C.gold.rgb,
    nodes: [
      { num: '2.1', title: 'History: Empire & Commonwealth', icon: 'fas fa-ship',              link: `${BASE}/themen/gb/world-power` },
      { num: '2.2', title: 'Post-colonial Britain',          icon: 'fas fa-map',               link: `${BASE}/themen/gb/post-colonial` },
      { num: '2.3', title: 'Britain & Europe (Brexit)',      icon: 'fas fa-star-of-david',     link: `${BASE}/themen/gb/europe-brexit` },
      { num: '2.4', title: 'Political System',               icon: 'fas fa-building-columns',  link: `${BASE}/themen/gb/political-system` },
      { num: '2.5', title: 'United Kingdom & Devolution',    icon: 'fas fa-map-location-dot',  link: `${BASE}/themen/gb/united-kingdom` },
      { num: '2.6', title: 'Multicultural Society',          icon: 'fas fa-people-roof',       link: `${BASE}/themen/gb/multicultural` },
      { num: '2.7', title: 'Religion in Britain',            icon: 'fas fa-place-of-worship',  link: `${BASE}/themen/gb/religion` },
      { num: '2.8', title: 'Social Welfare',                 icon: 'fas fa-hand-holding-heart',link: `${BASE}/themen/gb/social-welfare` },
      { num: '2.9', title: 'Economy',                        icon: 'fas fa-sterling-sign',     link: `${BASE}/themen/gb/economy` },
    ],
  },
  {
    num: '3', title: 'Living in a Modern World',
    icon: 'fas fa-globe', color: C.slate.hex, colorRgb: C.slate.rgb,
    nodes: [
      { num: '3.1', title: 'Globalization',                  icon: 'fas fa-earth-europe',      link: `${BASE}/themen/modern/globalization` },
      { num: '3.2', title: 'Poverty',                        icon: 'fas fa-scale-unbalanced',  link: `${BASE}/themen/modern/poverty` },
      { num: '3.3', title: 'Migration',                      icon: 'fas fa-person-walking-luggage', link: `${BASE}/themen/modern/migration` },
      { num: '3.4', title: 'Environmental Challenges',       icon: 'fas fa-leaf',              link: `${BASE}/themen/modern/environment` },
      { num: '3.5', title: 'Americanization',                icon: 'fas fa-burger',            link: `${BASE}/themen/modern/americanization` },
      { num: '3.6', title: 'English as a World Language',    icon: 'fas fa-language',          link: `${BASE}/themen/modern/english-language` },
      { num: '3.7', title: 'Genetic Engineering',            icon: 'fas fa-dna',               link: `${BASE}/themen/modern/genetic-engineering` },
      { num: '3.8', title: 'Big Data & Privacy',             icon: 'fas fa-database',          link: `${BASE}/themen/modern/big-data` },
      { num: '3.9', title: 'Social Media',                   icon: 'fas fa-hashtag',           link: `${BASE}/themen/modern/social-media` },
      { num: '3.10', title: 'Media Corporations',            icon: 'fas fa-tower-broadcast',   link: `${BASE}/themen/modern/media-corporations` },
    ],
  },
  {
    num: '4', title: 'Literature & Film',
    icon: 'fas fa-film', color: C.teal.hex, colorRgb: C.teal.rgb,
    nodes: [
      { num: '4.1', title: 'Shakespeare',                         icon: 'fas fa-masks-theater',     link: `${BASE}/themen/literature/shakespeare` },
      { num: '4.2', title: 'Identity & Racial Prejudice',         icon: 'fas fa-user-group',        link: `${BASE}/themen/literature/identity-racial` },
      { num: '4.3', title: 'Exploring Alternative Worlds',        icon: 'fas fa-book-open',         link: `${BASE}/themen/literature/alternative-worlds` },
      { num: '4.4', title: 'Migration & Cross-Cultural Encounters', icon: 'fas fa-arrows-left-right', link: `${BASE}/themen/literature/migration-cross-cultural` },
      { num: '4.5', title: 'Asian Communities in Britain',        icon: 'fas fa-torii-gate',        link: `${BASE}/themen/literature/asian-communities` },
    ],
  },
  {
    num: '5', title: 'Vokabular',
    icon: 'fas fa-spell-check', color: C.copper.hex, colorRgb: C.copper.rgb,
    nodes: [
      { num: '5.1', title: 'Globalization Vocabulary',       icon: 'fas fa-earth-americas',    link: `${BASE}/themen/vocab/globalization` },
      { num: '5.2', title: 'Diversity Vocabulary',           icon: 'fas fa-circle-nodes',      link: `${BASE}/themen/vocab/diversity` },
      { num: '5.3', title: 'Ecology Vocabulary',             icon: 'fas fa-seedling',          link: `${BASE}/themen/vocab/ecology` },
      { num: '5.4', title: 'Consumerism Vocabulary',         icon: 'fas fa-cart-shopping',     link: `${BASE}/themen/vocab/consumerism` },
      { num: '5.5', title: 'USA Vocabulary',                 icon: 'fas fa-flag-usa',          link: `${BASE}/themen/vocab/usa` },
      { num: '5.6', title: 'UK Vocabulary',                  icon: 'fas fa-crown',             link: `${BASE}/themen/vocab/uk` },
      { num: '5.7', title: 'Work & Career Vocabulary',       icon: 'fas fa-briefcase',         link: `${BASE}/themen/vocab/work` },
      { num: '5.8', title: 'Cartoon Analysis Vocabulary',    icon: 'fas fa-pencil',            link: `${BASE}/themen/vocab/cartoon` },
    ],
  },
  {
    num: '6', title: 'Schreibstrategien & Analyse',
    icon: 'fas fa-pen-nib', color: C.indigo.hex, colorRgb: C.indigo.rgb,
    nodes: [
      { num: '6.1', title: 'Useful Phrases',                 icon: 'fas fa-quote-left',        link: `${BASE}/themen/skills/useful-phrases` },
      { num: '6.2', title: 'Text Analysis',                  icon: 'fas fa-magnifying-glass',  link: `${BASE}/themen/skills/text-analysis` },
      { num: '6.3', title: 'Analyzing Non-fictional Texts',  icon: 'fas fa-newspaper',         link: `${BASE}/themen/skills/analyzing-nonfiction` },
      { num: '6.4', title: 'Analyzing Fictional Texts',      icon: 'fas fa-book',              link: `${BASE}/themen/skills/analyzing-fiction` },
      { num: '6.5', title: 'Different Writing Strategies',   icon: 'fas fa-layer-group',       link: `${BASE}/themen/skills/writing-strategies` },
    ],
  },
  {
    num: '7', title: 'Grammatik',
    icon: 'fas fa-check-double', color: C.rust.hex, colorRgb: C.rust.rgb,
    nodes: [
      { num: '7.1', title: 'Grammar Reference',              icon: 'fas fa-book-bookmark',     link: `${BASE}/themen/grammar/reference` },
      { num: '7.2', title: 'Grammar Exercises',              icon: 'fas fa-pen-to-square',     link: `${BASE}/themen/grammar/exercises` },
    ],
  },
];

// ═══════════════════════════════════════════════════════════════
// PAGE CLASS
// ═══════════════════════════════════════════════════════════════

export default class EnglischPage {
  constructor(router) {
    this.router = router;
  }

  render() {
    ensureComponentsCSS();

    const el = document.createElement('div');
    el.className = 'page page-englisch';

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
              <i class="fas fa-book-open" style="color:${COLOR};"></i>
              Englisch · Abitur 2026 · Baden-Württemberg
            </p>

            <h1 class="lernzettel-headline">
              <span>Englisch —</span><br>
              <em style="color:${COLOR};">Lernzettel.</em>
            </h1>

            <p class="lernzettel-hero-desc">
              8 Themenbereiche, vollständig strukturiert. Wähle ein Unterkapitel
              und tauche direkt in den Inhalt ein.
            </p>

            ${renderTags(['8 Bereiche', 'Abitur 2026', 'BW', 'Mündlich + Schriftlich'])}

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
            Alle 8 Themenbereiche
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

      ${footerHTML(this.router, {
        extraColumn: {
          title: 'May also help',
          titleI18n: 'bl.footer.extra.title',
          items: [
            { label: 'Useful phrases', link: CONFIG.ENGLISH.USEFUL_PHRASES},
            { label: 'Analyzing non-fictional texts', link: CONFIG.ENGLISH.ANALYZING_NON_FICTION_TEXTS},
            { label: 'Analyzing fictional texts', link: CONFIG.ENGLISH.ANALYZING_FICTION_TEXTS},
          ]
        }
      })}
    `;
  }

  init() {
    i18n.init();
    initScrollReveal();
    initMindMap(document);
  }
}