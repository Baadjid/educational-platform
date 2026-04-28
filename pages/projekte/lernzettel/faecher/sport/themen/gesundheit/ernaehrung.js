// pages/projekte/lernzettel/faecher/sport/themen/gesundheit/ernaehrung.js
// Sport & Gesundheit 4.4 — Ernährung

import { initScrollReveal }  from '../../../../../../../shared/js/index.js';
import { footerHTML }         from '../../../../../../../components/Footer.js';
import { i18n }               from '../../../../../../../shared/js/i18n.js';
import { initWimTabs }       from '../../../../../../../shared/js/wim-tabs.js';
import {
  ensureComponentsCSS, renderSubhead, renderTags, renderInfobox, renderFormulaBox,
  renderTable, renderTabs, renderMerkboxGrid, renderCompare, initInteractive,
} from '../../../../js/components/components.js';
import { renderPageNav } from '../../../../js/components/subnav.js';

import { COLOR, COLOR_RGB, BASE } from '../../sport.js';

// ─── WIM-Tab-Daten ───────────────────────────────────────────────
const ERNAEHRUNG_TABS = [
  { key: 'makro', label: '🍽️ Makronährstoffe' },
  { key: 'mikro', label: '💊 Mikronährstoffe' },
  { key: 'wasser', label: '💧 Wasserhaushalt' },
];

export default class SportErnaehrungPage {
  constructor(router) { this.router = router; }
  render() {
    ensureComponentsCSS();
    const el = document.createElement('div');
    el.className = 'page page-sport-sub';
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
            <button class="lz-bread-link" data-nav-link="${BASE}">Sport</button>
            <i class="fas fa-chevron-right"></i>
            <span>4.4 · Sport und Ernährung</span>
          </nav>
          <h1 class="lz-sub-title">Sport und <em>Ernährung.</em></h1>
          <p class="lz-sub-desc">
            Makro- und Mikronährstoffe, Energiebedarf, Wasserhaushalt
            und optimale Ernährung für sportliche Leistung und Gesundheit.
          </p>
          ${renderTags(['Sport & Gesundheit', '4.4', 'Makronährstoffe', 'Hydration', 'Energiebedarf'])}
        </div>
      </section>

      <section class="lz-content-section">
        <div class="lz-section-wrap">

          <nav class="wim-tabs" id="ernaehrungTabs" aria-label="Sport und Ernährung">
            ${ERNAEHRUNG_TABS.map((t, i) => `
              <button class="wim-tab${i === 0 ? ' active' : ''}" data-wim="${t.key}">
                ${t.label}
              </button>`).join('')}
          </nav>

          ${this._panelMakro()}
          ${this._panelMikro()}
          ${this._panelWasser()}

        </div>
      </section>

      <section class="lz-content-section" style="padding-top:0;">
        <div class="lz-section-wrap">
          ${renderPageNav({
            prev: { link: `${BASE}/themen/gesundheit/aufwaermen`,   label: 'Auf- und Abwärmen' },
            next: { link: `${BASE}/themen/gesundheit/doping`,     label: 'Doping' },
          }, BASE)}
        </div>
      </section>

      ${footerHTML(this.router)}
    `;
  }

  _panelMakro() {
    return `
      <div class="wim-category" data-wim-cat="makro">
        <h2 class="lz-h2">Makronährstoffe für Sportler</h2>
        ${renderTable({
          headers: ['Nährstoff', 'Energie', 'Funktion', 'Sportlerbedarf', 'Quellen'],
          rows: [
            ['Kohlenhydrate', '4 kcal/g', 'Primäre Energiequelle, Glykogenspeicher', '5–10 g/kg KG/Tag', 'Vollkorn, Reis, Pasta, Obst'],
            ['Proteine', '4 kcal/g', 'Muskelaufbau/-reparatur, Enzyme, Hormone', '1,2–2,0 g/kg KG/Tag', 'Fleisch, Fisch, Eier, Hülsenfrüchte'],
            ['Fette', '9 kcal/g', 'Energiespeicher, Hormone, Vitamine', '25–35 % der Kalorien', 'Nüsse, Öl, Fisch, Avocado'],
          ],
          highlight: [0],
        })}
        ${renderFormulaBox({
          label: 'Energiebedarf (vereinfacht)',
          formula: 'Gesamtbedarf = Grundumsatz × PAL-Faktor',
          desc: 'PAL (Physical Activity Level): 1,2 (wenig aktiv) bis 1,9 (sehr aktiv). Grundumsatz ~1 kcal/kg/h.',
        })}
      </div>
    `;
  }

  _panelMikro() {
    return `
      <div class="wim-category hidden" data-wim-cat="mikro">
        <h2 class="lz-h2">Mikronährstoffe — Mineralstoffe und Vitamine</h2>
        ${renderTable({
          headers: ['Nährstoff', 'Funktion im Sport', 'Mangelsymptom', 'Quellen'],
          rows: [
            ['Eisen (Fe)', 'O₂-Transport (Hämoglobin), Energiestoffwechsel', 'Müdigkeit, Leistungsabfall', 'Fleisch, Hülsenfrüchte + Vit. C'],
            ['Magnesium (Mg)', 'Muskelkontraktion, Enzymkofaktor, ATP', 'Muskelkrämpfe, Herzrhythmusstörungen', 'Nüsse, Vollkorn, Bananen'],
            ['Calcium (Ca)', 'Knochengesundheit, Muskelkontraktion', 'Knochenprobleme, Muskelzuckungen', 'Milchprodukte, Brokkoli, Mandeln'],
            ['Vitamin D', 'Calciumaufnahme, Muskelfunktion, Immunsystem', 'Knochenabbau, Muskelchwäche', 'Sonnenlicht, Fisch, Eier'],
            ['Vitamin C', 'Kollagensynthese, Antioxidans, Immunsystem', 'Wundheilungsstörung, Ermüdung', 'Zitrusfrüchte, Paprika, Beeren'],
          ],
          highlight: [0],
        })}
      </div>
    `;
  }

  _panelWasser() {
    return `
      <div class="wim-category hidden" data-wim-cat="wasser">
        <h2 class="lz-h2">Wasserhaushalt und Hydration</h2>
        ${renderInfobox({
          type: 'warning', icon: 'fas fa-triangle-exclamation', title: 'Dehydration und Leistung',
          body: `Bereits <strong>2 % Flüssigkeitsverlust</strong> (1,4 kg bei 70 kg KG) 
                 reduzieren die Ausdauerleistung um ~10–15 %.<br>
                 5 % → Hitzeerschöpfung, Krämpfe.<br>
                 8 % → Schwindel, Verwirrung — medizinischer Notfall!`,
        })}
        ${renderTable({
          headers: ['Zeitpunkt', 'Empfehlung', 'Getränk'],
          rows: [
            ['2–3 h vor Sport', '400–600 ml trinken', 'Wasser'],
            ['Während Sport (< 60 min)', '150–250 ml alle 15–20 min', 'Wasser reicht'],
            ['Während Sport (> 60 min)', '150–250 ml + Elektrolyte', 'Isotonisches Sportgetränk'],
            ['Nach Sport', '150 % des Gewichtsverlusts ersetzen', 'Wasser + Na-haltiges Getränk'],
          ],
        })}
      </div>
    `;
  }

  init() {
    i18n.init(); initScrollReveal();
    initInteractive(document.querySelector('.page-sport-sub'));
    document.querySelectorAll('[data-nav-link]').forEach(btn => {
      btn.addEventListener('click', () => { window.location.hash = btn.dataset.navLink; });
    });
    initWimTabs(document);
  }
}