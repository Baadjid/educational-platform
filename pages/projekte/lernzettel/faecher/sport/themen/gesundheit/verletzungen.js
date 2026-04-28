// pages/projekte/lernzettel/faecher/sport/themen/gesundheit/verletzungen.js
// Sport & Gesundheit 4.2 — Verletzungen im Sport

import { initScrollReveal }  from '../../../../../../../shared/js/index.js';
import { footerHTML }         from '../../../../../../../components/Footer.js';
import { i18n }               from '../../../../../../../shared/js/i18n.js';
import { initWimTabs }       from '../../../../../../../shared/js/wim-tabs.js';
import {
  ensureComponentsCSS, renderSubhead, renderTags, renderInfobox,
  renderTable, renderTabs, renderAccordion, renderMerkboxGrid,
  renderCompare, initInteractive,
} from '../../../../js/components/components.js';
import { renderPageNav } from '../../../../js/components/subnav.js';

import { COLOR, COLOR_RGB, BASE } from '../../sport.js';

// ─── WIM-Tab-Daten ───────────────────────────────────────────────
const VERLETZUNGEN_TABS = [
  { key: 'prellungen', label: '💙 Prellungen & Zerrungen' },
  { key: 'risse',      label: '🔴 Risse & Verstauchungen' },
];

export default class SportVerletzungenPage {
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
            <span>4.2 · Verletzungen im Sport</span>
          </nav>
          <h1 class="lz-sub-title">Verletzungen im <em>Sport.</em></h1>
          <p class="lz-sub-desc">
            Prellungen, Zerrungen, Risse und Verstauchungen — 
            Ursachen, Symptome, Erstversorgung und Prävention.
          </p>
          ${renderTags(['Sport & Gesundheit', '4.2', 'PECH-Regel', 'Zerrung', 'Bandruptur', 'Erste Hilfe'])}
        </div>
      </section>

      <section class="lz-content-section">
        <div class="lz-section-wrap">

          ${renderInfobox({
            icon: 'fas fa-kit-medical', title: 'PECH-Regel — Erste Hilfe bei Sportverletzungen',
            body: `<strong>P</strong>ause: Belastung sofort stoppen, Schonung.<br>
                   <strong>E</strong>is: Kühlung (nicht direkt auf Haut!) → Schwellung ↓, Schmerz ↓.<br>
                   <strong>C</strong>ompression: Druckverband → Blutung/Ödem begrenzen.<br>
                   <strong>H</strong>ochlagerung: Betroffenes Körperteil hochlagern → Rückstrom fördern.<br>
                   Bei Verdacht auf Fraktur, Ruptur oder starken Schmerzen: Arzt aufsuchen!`,
          })}

          <nav class="wim-tabs" id="verletzungenTabs" aria-label="Sportverletzungen">
            ${VERLETZUNGEN_TABS.map((t, i) => `
              <button class="wim-tab${i === 0 ? ' active' : ''}" data-wim="${t.key}">
                ${t.label}
              </button>`).join('')}
          </nav>

          ${this._panelPrellungen()}
          ${this._panelRisse()}

        </div>
      </section>

       <section class="lz-content-section" style="padding-top:0;">
        <div class="lz-section-wrap">
          ${renderPageNav({
            prev: { link: `${BASE}/themen/gesundheit/gesundheitsbegriff`,   label: 'Gesundheitsbegriff' },
            next: { link: `${BASE}/themen/gesundheit/aufwaermen`,     label: 'Auf- und Abwärmen' },
          }, BASE)}
        </div>
      </section>


      ${footerHTML(this.router)}
    `;
  }

  _panelPrellungen() {
    return `
      <div class="wim-category" data-wim-cat="prellungen">
        ${renderTable({
          headers: ['Verletzung', 'Ursache', 'Symptome', 'Therapie'],
          rows: [
            ['Prellung (Contusio)', 'Stumpfes Trauma (Stoß, Aufprall)', 'Schwellung, Hämatom, Schmerz auf Druck', 'PECH, keine Wärme in ersten 24–48 h'],
            ['Muskelzerrung', 'Überdehnung durch exzentrische Überlastung', 'Plötzlicher Ziehschmerz, keine tastbare Lücke', 'PECH, Stretching erst nach Heilung'],
            ['Muskelkrampf', 'Elektrolytmangel, Überlastung, Dehydration', 'Plötzliche, schmerzhafte Kontraktion', 'Dehnen, Massage, Elektrolyte'],
            ['Muskelkater (DOMS)', 'Mikrotraumen durch exzentrisches Training', 'Verzögerter Schmerz 12–72 h post-exercise', 'Aktive Regeneration, Wärme, Zeit'],
          ],
        })}
      </div>
    `;
  }

  _panelRisse() {
    return `
      <div class="wim-category hidden" data-wim-cat="risse">
        ${renderTable({
          headers: ['Verletzung', 'Grad', 'Symptome', 'Therapie'],
          rows: [
            ['Muskelfaserriss', 'Grad I (Zerrung) / II (Teilriss) / III (Totalriss)', 'Lücke tastbar bei Grad III, starker Schmerz', 'PECH, ggf. OP bei Grad III'],
            ['Verstauchung (Distorsion)', 'Grad I–III (nach Bandschaden)', 'Instabilität, Schwellung, Hämatom', 'PECH, Stabilisierung, Physiotherapie'],
            ['Bandzerrung / -riss', 'Grad I (Dehnung) / II (Teilriss) / III (Totalriss)', 'Instabilität, ggf. Drawer-Test positiv', 'Konservativ / operativ je nach Grad'],
            ['Sehnenentzündung (Tendinopathie)', 'Überlastungsschaden', 'Belastungsschmerz, Morgensteifigkeit', 'Entlastung, Exzentriktraining, ggf. Stoßwelle'],
          ],
          highlight: [1],
        })}
        ${renderInfobox({
          type: 'tip', icon: 'fas fa-lightbulb', title: 'Prävention von Sportverletzungen',
          body: `<strong>Aufwärmen:</strong> Erhöht Muskeltemperatur + Durchblutung → Verletzungsrisiko ↓.<br>
                 <strong>Krafttraining:</strong> Gelenkstabilisierende Muskulatur stärken.<br>
                 <strong>Koordination:</strong> Propriozeptives Training → bessere Gelenkstabilisierung.<br>
                 <strong>Ausrüstung:</strong> Passende Schuhe, Bandagen bei Vorschäden.<br>
                 <strong>Technik:</strong> Korrekte Technik verhindert Überlastungen.`,
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