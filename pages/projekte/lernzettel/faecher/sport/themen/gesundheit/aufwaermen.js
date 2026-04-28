// pages/projekte/lernzettel/faecher/sport/themen/gesundheit/aufwaermen.js
// Sport & Gesundheit 4.3 — Auf- und Abwärmen

import { initScrollReveal }  from '../../../../../../../shared/js/index.js';
import { footerHTML }         from '../../../../../../../components/Footer.js';
import { i18n }               from '../../../../../../../shared/js/i18n.js';
import { initWimTabs }       from '../../../../../../../shared/js/wim-tabs.js';
import {
  ensureComponentsCSS, renderSubhead, renderTags, renderInfobox,
  renderTable, renderTabs, renderMerkboxGrid, renderCompare, initInteractive,
} from '../../../../js/components/components.js';
import { renderPageNav } from '../../../../js/components/subnav.js';

import { COLOR, COLOR_RGB, BASE } from '../../sport.js';

// ─── WIM-Tab-Daten ───────────────────────────────────────────────
const AUFWARMEN_TABS = [
  { key: 'aufwaermen', label: '🔥 Aufwärmen' },
  { key: 'abwaermen',  label: '❄️ Abwärmen' },
];

export default class SportAufwaermenPage {
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
            <span>4.3 · Auf- und Abwärmen</span>
          </nav>
          <h1 class="lz-sub-title">Auf- und <em>Abwärmen.</em></h1>
          <p class="lz-sub-desc">
            Physiologische Grundlagen, allgemeines und spezielles Aufwärmen,
            Abwärmmaßnahmen und ihre Bedeutung für Leistung und Regeneration.
          </p>
          ${renderTags(['Sport & Gesundheit', '4.3', 'Aufwärmen', 'Cool-Down', 'Prävention'])}
        </div>
      </section>

      <section class="lz-content-section">
        <div class="lz-section-wrap">

          <nav class="wim-tabs" id="aufwaermenTabs" aria-label="Auf- und Abwärmen">
            ${AUFWARMEN_TABS.map((t, i) => `
              <button class="wim-tab${i === 0 ? ' active' : ''}" data-wim="${t.key}">
                ${t.label}
              </button>`).join('')}
          </nav>

          ${this._panelAufwaermen()}
          ${this._panelAbwaermen()}

        </div>
      </section>

      <section class="lz-content-section" style="padding-top:0;">
        <div class="lz-section-wrap">
          ${renderPageNav({
            prev: { link: `${BASE}/themen/gesundheit/verletzungen`,   label: 'Verletzungen' },
            next: { link: `${BASE}/themen/gesundheit/ernaehrung`,     label: 'Ernährung' },
          }, BASE)}
        </div>
      </section>

      ${footerHTML(this.router)}
    `;
  }

  _panelAufwaermen() {
    return `
      <div class="wim-category" data-wim-cat="aufwaermen">
        <h2 class="lz-h2">Aufwärmen — physiologische Grundlagen</h2>
        ${renderMerkboxGrid([
          { icon: 'fas fa-thermometer-three-quarters', title: 'Temperatur ↑', text: 'Muskeltemperatur von ~37 auf ~39 °C → Enzyme aktiver, Kontraktion schneller.' },
          { icon: 'fas fa-heart-pulse',                title: 'Herzfrequenz ↑', text: 'Cardiac output steigt → mehr O₂ für die Muskulatur bereitgestellt.' },
          { icon: 'fas fa-droplet',                   title: 'Durchblutung ↑', text: 'Gefäßerweiterung in der Arbeitsmuskulatur → bessere Versorgung.' },
          { icon: 'fas fa-expand',                    title: 'Dehnfähigkeit ↑', text: 'Warme Muskeln sind dehnfähiger → niedrigeres Verletzungsrisiko.' },
          { icon: 'fas fa-brain',                     title: 'ZNS-Aktivierung', text: 'Reaktionszeit sinkt, neuromuskuläre Ansteuerung verbessert sich.' },
          { icon: 'fas fa-bolt',                      title: 'Energiestoffwechsel', text: 'Enzymatische Prozesse beschleunigt → schnellere ATP-Bereitstellung.' },
        ])}
        ${renderCompare({
          titleA: 'Allgemeines Aufwärmen', titleB: 'Spezielles Aufwärmen',
          listA: [
            'Erhöht Körpertemperatur + Herzfrequenz allgemein',
            'Sportartunspezifisch (Laufen, Radfahren)',
            'Dauer: 10–15 Minuten',
            'Intensität: Locker, ~60 % HFmax',
            'Inhalt: Großflächige Muskelgruppen',
          ],
          listB: [
            'Spezifische Vorbereitung auf die Sportart',
            'Sportartspezifische Bewegungen',
            'Dauer: 5–15 Minuten',
            'Intensität: Progressiv steigernd',
            'Inhalt: Technikübungen, Steigerungsläufe',
          ],
        })}
      </div>
    `;
  }

  _panelAbwaermen() {
    return `
      <div class="wim-category hidden" data-wim-cat="abwaermen">
        <h2 class="lz-h2">Abwärmen (Cool-Down)</h2>
        ${renderInfobox({
          icon: 'fas fa-snowflake', title: 'Bedeutung des Abwärmens',
          body: `Das Abwärmen beschleunigt die Erholung nach Belastung und verhindert negative Nacheffekte:<br>
                 • Laktatabbau beschleunigt (aktiver > passiver Abbau).<br>
                 • Verhindert Blutpooling in der Extremitätenmuskulatur.<br>
                 • Normalisierung von HF und Blutdruck.<br>
                 • Muskelentspannung und Prävention von Muskelverhärtungen.`,
        })}
        ${renderTable({
          headers: ['Phase', 'Inhalt', 'Dauer', 'Intensität'],
          rows: [
            ['Auslaufen / Ausradeln', 'Lockere aerobe Bewegung', '5–10 min', '50–60 % HFmax'],
            ['Statisches Dehnen', 'Hauptbeanspruchte Muskeln dehnen', '10–15 min', 'Sanft, Ziehen spüren'],
            ['Regenerationsmaßnahmen', 'Massage, Kältebad, Kompression', '5–20 min', 'Passiv'],
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