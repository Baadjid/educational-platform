// pages/projekte/lernzettel/faecher/sport/themen/trainingslehre/schnelligkeit.js
// Trainingslehre 2.4 — Schnelligkeit

import { initScrollReveal }  from '../../../../../../../shared/js/index.js';
import { footerHTML }         from '../../../../../../../components/Footer.js';
import { i18n }               from '../../../../../../../shared/js/i18n.js';
import { initWimTabs }       from '../../../../../../../shared/js/wim-tabs.js';
import {
  ensureComponentsCSS,
  renderSubhead, renderTags, renderInfobox, renderFormulaBox,
  renderTable, renderTabs, renderAccordion, renderMerkboxGrid,
  renderCompare, initInteractive,
} from '../../../../js/components/components.js';
import { renderPageNav } from '../../../../js/components/subnav.js';

import { COLOR, COLOR_RGB, BASE } from '../../sport.js';

// ─── WIM-Tab-Daten ───────────────────────────────────────────────
const SCHNELLIGKEIT_TABS = [
  { key: 'formen',      label: '⚡ Formen' },
  { key: 'reaktion',    label: '🧠 Reaktion' },
  { key: 'aktion',      label: '🏃 Aktionsschnelligkeit' },
  { key: 'ausdauer',    label: '⏱️ Schnelligkeitsausdauer' },
];

export default class SportSchnelligkeitPage {
  constructor(router) { this.router = router; }

  render() {
    ensureComponentsCSS();
    const el = document.createElement('div');
    el.className = 'page page-sport-sub';
    if (!document.querySelector('link[href*="sub.css"]')) {
      const l = document.createElement('link');
      l.rel = 'stylesheet'; l.href = 'pages/projekte/lernzettel/styles/sub.css';
      document.head.appendChild(l);
    }
    el.style.setProperty('--kap-color', COLOR);
    el.style.setProperty('--kap-color-rgb', COLOR_RGB);
    el.style.setProperty('--lz-accent', COLOR);
    el.style.setProperty('--lz-accent-rgb', COLOR_RGB);
    el.innerHTML = this._html();
    return el;
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
            <span>2.4 · Schnelligkeit</span>
          </nav>
          <h1 class="lz-sub-title">Schnelligkeit — <em>Formen & Training.</em></h1>
          <p class="lz-sub-desc">
            Reaktionsschnelligkeit, Aktionsschnelligkeit, Schnelligkeitsausdauer
            und die spezifischen Trainingsmethoden für maximale Geschwindigkeit.
          </p>
          ${renderTags(['Trainingslehre', '2.4', 'Reaktion', 'Sprint', 'RFD', 'Schnelligkeitsausdauer'])}
        </div>
      </section>

      <section class="lz-content-section">
        <div class="lz-section-wrap">

          <nav class="wim-tabs" id="schnelligkeitTabs" aria-label="Schnelligkeit">
            ${SCHNELLIGKEIT_TABS.map((t, i) => `
              <button class="wim-tab${i === 0 ? ' active' : ''}" data-wim="${t.key}">
                ${t.label}
              </button>`).join('')}
          </nav>

          ${this._panelFormen()}
          ${this._panelReaktion()}
          ${this._panelAktion()}
          ${this._panelAusdauer()}

        </div>
      </section>

      <section class="lz-content-section" style="padding-top:0;">
        <div class="lz-section-wrap">
          ${renderPageNav({
            prev: { link: `${BASE}/themen/trainingslehre/kraft`,   label: 'Kraft' },
            next: { link: `${BASE}/themen/trainingslehre/beweglichkeit`,     label: 'Beweglichkeit' },
          }, BASE)}
        </div>
      </section>


      ${footerHTML(this.router)}
    `;
  }

  _panelFormen() {
    return `
      <div class="wim-category" data-wim-cat="formen">
        <h2 class="lz-h2">Schnelligkeitsformen</h2>
        ${renderInfobox({
          icon: 'fas fa-gauge-high', title: 'Definition Schnelligkeit',
          body: `Schnelligkeit ist die Fähigkeit, motorische Aktionen unter den gegebenen 
                 Bedingungen in <strong>kürzestmöglicher Zeit</strong> auszuführen. 
                 Sie ist eine der am stärksten genetisch determinierten konditionellen Fähigkeiten 
                 (~70 % genetisch, ~30 % trainierbar).`,
        })}
        ${renderTable({
          headers: ['Form', 'Definition', 'Neurophysiologische Basis', 'Sport-Beispiel'],
          rows: [
            ['Reaktionsschnelligkeit', 'Zeit zwischen Startsignal und Beginn der Bewegung (Reaktionszeit)', 'Schnelle ZNS-Verarbeitung, kurze Übertragungszeit', 'Startreaktion 100 m, Torwart'],
            ['Aktionsschnelligkeit (azyklisch)', 'Geschwindigkeit einer einzelnen Bewegung', 'Hohe RFD, gute IK', 'Schlagbewegung, Wurf, Tritt'],
            ['Aktionsschnelligkeit (zyklisch)', 'Maximale Schrittfrequenz über kurze Distanz', 'Hohe Frequenzierung, schnelle Typ-II-Fasern', 'Sprint 30–60 m, Kurbel beim Rad'],
            ['Schnelligkeitsausdauer', 'Fähigkeit, hohe Geschwindigkeit länger aufrechtzuerhalten', 'Laktattoleranz, anaerob-laktazid', '200 m, 400 m, 100 m Schwimmen'],
          ],
          highlight: [2],
        })}
        ${renderInfobox({
          type: 'warning', icon: 'fas fa-triangle-exclamation', title: 'Schnelligkeitsbarriere',
          body: `Durch häufiges Training bei <em>submaximaler</em> Geschwindigkeit kann sich eine 
                 <strong>Schnelligkeitsbarriere</strong> einschleifen — das ZNS optimiert für die 
                 häufig geübte Geschwindigkeit, nicht für die maximale. 
                 Lösung: Immer mit 100 % Intensität trainieren, ausreichend Pause.`,
        })}
      </div>
    `;
  }

  _panelReaktion() {
    return `
      <div class="wim-category hidden" data-wim-cat="reaktion">
        <h2 class="lz-h2">Reaktionsschnelligkeit</h2>
        ${renderTable({
          headers: ['Reaktionstyp', 'Beschreibung', 'Reaktionszeit'],
          rows: [
            ['Einfachreaktion', 'Bekanntes Signal, bekannte Antwort', '100–200 ms'],
            ['Auswahlreaktion', 'Mehrere mögliche Signale/Antworten', '200–400 ms'],
            ['Diskriminationsreaktion', 'Relevante von irrelevanten Signalen unterscheiden', '300–600 ms'],
          ],
          highlight: [0],
        })}
        ${renderMerkboxGrid([
          { icon: 'fas fa-eye',         title: 'Visuell', text: 'Längste Verarbeitungszeit (~200 ms) — aber präziseste Reizerkennung.' },
          { icon: 'fas fa-volume-high', title: 'Auditiv', text: 'Schnellste Reaktion (~150 ms) — Startschuss beim Sprint.' },
          { icon: 'fas fa-hand-pointer', title: 'Taktil', text: 'Direkter Reiz (~130 ms) — z. B. Startblock-Druck.' },
        ])}
        ${renderAccordion([
          {
            title: 'Training der Reaktionsschnelligkeit',
            content: `<ul style="margin:0;padding-left:1.2rem;line-height:1.9;">
              <li>Wiederholte Startübungen auf wechselnde Signale</li>
              <li>Reaktionsspiele (Ballsportarten, Kampfsport)</li>
              <li>Optische / akustische / taktile Signale variieren</li>
              <li>Antizipationstraining (vorausschauendes Reaktieren)</li>
              <li>Müdigkeitsfreier Zustand (frisch, ausgeruht)</li>
            </ul>`,
          },
        ])}
      </div>
    `;
  }

  _panelAktion() {
    return `
      <div class="wim-category hidden" data-wim-cat="aktion">
        <h2 class="lz-h2">Training der Aktionsschnelligkeit</h2>
        ${renderTable({
          headers: ['Trainingsinhalt', 'Intensität', 'Dauer/Distanz', 'Pause', 'Wiederholungen'],
          rows: [
            ['Kurzsprint', '95–100 % vmax', '20–60 m', '> 3 min', '5–8'],
            ['Fliehender Sprint', '100 % vmax', '20–40 m (nach Anlauf)', '> 3 min', '4–6'],
            ['Bergaufsprints', '100 %', '20–30 m', '> 3 min', '5–10'],
            ['Bergabsprints', '> 100 % (überschnell)', '20–30 m', '> 3 min', '4–6'],
            ['Zugsprints (Tubing)', 'Überschnell', '20–40 m', '> 3 min', '4–6'],
            ['Komplextraining', '100 %', 'Kurze Einheiten', 'Vollst. Erholung', '4–8'],
          ],
        })}
        ${renderInfobox({
          type: 'tip', icon: 'fas fa-lightbulb', title: 'Schnelligkeitstraining — Grundregeln',
          body: `<strong>1. Ausgeruht trainieren:</strong> Nur in frischem Zustand (Beginn der Einheit).<br>
                 <strong>2. Maximale Intensität:</strong> Jeder Reiz muss nahe 100 % sein.<br>
                 <strong>3. Vollständige Erholung:</strong> Mindestens 3–5 min zwischen Sprints (alaktazides System).<br>
                 <strong>4. Wenig Wiederholungen:</strong> Qualität vor Quantität — Ermüdung verhindert maximale Geschwindigkeit.`,
        })}
      </div>
    `;
  }

  _panelAusdauer() {
    return `
      <div class="wim-category hidden" data-wim-cat="ausdauer">
        <h2 class="lz-h2">Schnelligkeitsausdauer</h2>
        ${renderInfobox({
          icon: 'fas fa-battery-half', title: 'Abgrenzung',
          body: `Schnelligkeitsausdauer = Fähigkeit, <strong>hohe Geschwindigkeit über 
                 10–30 Sekunden</strong> aufrechtzuerhalten. 
                 Energetische Basis: anaerob-laktazid (maximale Glykolyse).<br>
                 Unterschied zur reinen Ausdauer: Intensität nahe maximal; 
                 Unterschied zur reinen Schnelligkeit: Dauer > 10 s.`,
        })}
        ${renderTable({
          headers: ['Methode', 'Intensität', 'Dauer', 'Pause', 'Wdh.'],
          rows: [
            ['Maximale Intervalle', '95–100 %', '10–30 s', '2–3 min (unvollst.)', '6–10'],
            ['Extensive Sprints', '85–95 %', '30–60 s', '3–5 min', '4–8'],
            ['400 m-Training', '90–95 %', '35–55 s', '5–10 min', '3–5'],
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