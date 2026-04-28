// pages/projekte/lernzettel/faecher/sport/themen/trainingslehre/beweglichkeit.js
// Trainingslehre 2.5 — Beweglichkeit

import { initScrollReveal }  from '../../../../../../../shared/js/index.js';
import { footerHTML }         from '../../../../../../../components/Footer.js';
import { i18n }               from '../../../../../../../shared/js/i18n.js';
import { initWimTabs }       from '../../../../../../../shared/js/wim-tabs.js';
import {
  ensureComponentsCSS,
  renderSubhead, renderTags, renderInfobox, renderTable,
  renderTabs, renderAccordion, renderMerkboxGrid, renderCompare,
  initInteractive,
} from '../../../../js/components/components.js';
import { renderPageNav } from '../../../../js/components/subnav.js';

import { COLOR, COLOR_RGB, BASE } from '../../sport.js';

// ─── WIM-Tab-Daten ───────────────────────────────────────────────
const BEWEGLICHKEIT_TABS = [
  { key: 'definition', label: '📐 Definition & Arten' },
  { key: 'reflexe',    label: '🧠 Reflexe & Hemmungen' },
  { key: 'aktiv',      label: '🏃 Aktives Dehnen' },
  { key: 'passiv',     label: '🤝 Passives Dehnen' },
];

export default class SportBeweglichkeitPage {
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
            <span>2.5 · Beweglichkeit</span>
          </nav>
          <h1 class="lz-sub-title">Beweglichkeit — <em>Dehnen & Flexibilität.</em></h1>
          <p class="lz-sub-desc">
            Arten der Beweglichkeit, Dehnreflexe, aktives und passives Dehnen —
            alles zur Verbesserung von Range of Motion und Verletzungsprävention.
          </p>
          ${renderTags(['Trainingslehre', '2.5', 'Dehnen', 'ROM', 'Flexibilität', 'PNF'])}
        </div>
      </section>

      <section class="lz-content-section">
        <div class="lz-section-wrap">

          <nav class="wim-tabs" id="beweglichkeitTabs" aria-label="Beweglichkeit">
            ${BEWEGLICHKEIT_TABS.map((t, i) => `
              <button class="wim-tab${i === 0 ? ' active' : ''}" data-wim="${t.key}">
                ${t.label}
              </button>`).join('')}
          </nav>

          ${this._panelDefinition()}
          ${this._panelReflexe()}
          ${this._panelAktiv()}
          ${this._panelPassiv()}

        </div>
      </section>

      <section class="lz-content-section" style="padding-top:0;">
        <div class="lz-section-wrap">
          ${renderPageNav({
            prev: { link: `${BASE}/themen/trainingslehre/schnelligkeit`,   label: 'Schnelligkeit' },
            next: { link: `${BASE}/themen/trainingslehre/koordination`,     label: 'Koordination' },
          }, BASE)}
        </div>
      </section>

      ${footerHTML(this.router)}
    `;
  }

  _panelDefinition() {
    return `
      <div class="wim-category" data-wim-cat="definition">
        <h2 class="lz-h2">Beweglichkeit — Definition und Arten</h2>
        ${renderInfobox({
          icon: 'fas fa-arrows-up-down', title: 'Definition Beweglichkeit',
          body: `Beweglichkeit (Flexibilität / Mobilität) ist die Fähigkeit, 
                 Bewegungen mit <strong>großer Schwingungsweite</strong> in den Gelenken 
                 selbst oder mit Hilfe äußerer Kräfte auszuführen. 
                 Sie ist das Ergebnis von <em>Gelenkbeweglichkeit</em> (passiv, anatomisch limitiert) 
                 und <em>Dehnfähigkeit</em> der Muskel-Sehnen-Einheit (aktiv beeinflussbar).`,
        })}
        ${renderTable({
          headers: ['Art', 'Beschreibung', 'Limitierender Faktor'],
          rows: [
            ['Aktive Beweglichkeit', 'Durch eigene Muskelkraft erzielter ROM', 'Muskelkraft der Antagonisten + Dehnfähigkeit'],
            ['Passive Beweglichkeit', 'Durch externe Kraft (Partner, Schwerkraft) erzielter ROM', 'Gelenkaufbau, Muskelelastizität, Bänder'],
            ['Allgemeine Beweglichkeit', 'Große Gelenke (Schulter, Hüfte, WS)', 'Gelenkspezifisch'],
            ['Spezifische Beweglichkeit', 'Sportartspezifische Gelenke und Bewegungen', 'Trainingsstand, Technik'],
          ],
          highlight: [1],
        })}
        ${renderInfobox({
          type: 'tip', icon: 'fas fa-lightbulb', title: 'Passive > aktive Beweglichkeit',
          body: `Passive Beweglichkeit ist immer größer als aktive. Die Differenz 
                 entspricht dem „aktiven Beweglichkeitsdefizit" — Potenzial, das durch 
                 Kräftigungsübungen im Endbereich geschlossen werden kann 
                 (<em>Strength through length</em>-Prinzip).`,
        })}
      </div>
    `;
  }

  _panelReflexe() {
    return `
      <div class="wim-category hidden" data-wim-cat="reflexe">
        <h2 class="lz-h2">Neurophysiologische Grundlagen des Dehnens</h2>
        ${renderAccordion([
          {
            title: 'Muskelspindel (Dehnungsrezeptor) — Ia-Afferenzen',
            content: `<strong>Lage:</strong> Parallel zu Muskelfasern (intrafusal).<br>
                       <strong>Funktion:</strong> Registriert Länge und Dehnungsgeschwindigkeit des Muskels.<br>
                       <strong>Reflex:</strong> Bei schneller Dehnung → Ia-Afferenz → Rückenmark → 
                       motorische Neuronen → <strong>Dehnungsreflex</strong> (Muskel zieht sich zusammen!).<br>
                       <strong>Konsequenz:</strong> Ballistisches Dehnen aktiviert den Dehnungsreflex → 
                       höheres Verletzungsrisiko.`,
          },
          {
            title: 'Golgi-Sehnenorgan (GTO) — Ib-Afferenzen',
            content: `<strong>Lage:</strong> Im Übergang Muskel-Sehne.<br>
                       <strong>Funktion:</strong> Registriert Spannung im Muskel (besonders bei Kontraktion).<br>
                       <strong>Reflex:</strong> Bei hoher Spannung → Ib-Afferenz → inhibitorisches Interneuron → 
                       <strong>autogene Hemmung</strong> (Muskel erschlafft zum Schutz vor Überlast).<br>
                       <strong>Nutzung:</strong> PNF-Techniken nutzen diesen Mechanismus für tieferes Dehnen.`,
          },
          {
            title: 'Reziproke Hemmung',
            content: `Kontraktion des Agonisten → neuronale Hemmung des Antagonisten → 
                       Antagonist kann tiefer gedehnt werden.<br>
                       Beispiel: Aktive Kontraktion der Hüftbeuger → Hüftstrecker werden reziprok gehemmt 
                       → tieferes Dehnen der ischiocruralen Muskulatur möglich.`,
          },
        ])}
      </div>
    `;
  }

  _panelAktiv() {
    return `
      <div class="wim-category hidden" data-wim-cat="aktiv">
        <h2 class="lz-h2">Aktive Dehnmethoden</h2>
        ${renderTable({
          headers: ['Methode', 'Beschreibung', 'Haltezeit', 'Empfehlung'],
          rows: [
            ['Aktiv-statisch', 'Eigenspannung hält den Endbereich (ohne Schwung)', '10–30 s', 'Aufwärmen, nach Training'],
            ['Dynamisch-aktiv (Schwingen)', 'Kontrollierte Pendelbeweg. im schmerzfreien Bereich', 'Kein Halten (10–15 Wdh.)', 'Aufwärmen vor Schnelligkeit/Kraft'],
            ['Funktionell-dynamisch', 'Sportartspezifische Bewegungen mit großem ROM', 'Flüssig, keine Pause', 'Spezielles Aufwärmen'],
          ],
        })}
        ${renderInfobox({
          icon: 'fas fa-fire', title: 'Dynamisches Aufwärmdehnen vs. statisches Dehnen',
          body: `<strong>Vor dem Training:</strong> Dynamisches Dehnen empfohlen — aktiviert die Muskeln, 
                 erhöht Durchblutung, verbessert kurzfristige Beweglichkeit ohne Kraftverlust.<br>
                 <strong>Statisches Dehnen vor dem Training:</strong> Kann kurzfristig Kraft und Schnelligkeit 
                 reduzieren (Hemmung des Dehnreflexes) — besser nach dem Training.`,
        })}
      </div>
    `;
  }

  _panelPassiv() {
    return `
      <div class="wim-category hidden" data-wim-cat="passiv">
        <h2 class="lz-h2">Passive Dehnmethoden</h2>
        ${renderTable({
          headers: ['Methode', 'Beschreibung', 'Haltezeit', 'Besonderheit'],
          rows: [
            ['Passiv-statisch', 'Externe Kraft (Schwerkraft, Partner) hält Dehnung', '20–60 s', 'Effektivste Langzeit-ROM-Verbesserung'],
            ['PNF: CR (Contract-Relax)', 'Kontraktion Agonist → Entspannung → tiefere Dehnung', '6 s Kontr. + 20–30 s Dehnen', 'Nutzt autogene Hemmung'],
            ['PNF: AC (Agonist-Contract)', 'Kontraktion Antagonist → reziproke Hemmung', '6 s Kontr. + passive Dehnung', 'Reziproke Hemmung'],
            ['PNF: CRAC', 'CR + AC kombiniert', 'Kombination', 'Tiefster erreichbarer ROM'],
          ],
          highlight: [1],
        })}
        ${renderInfobox({
          icon: 'fas fa-star', title: 'PNF — Propriozeptive Neuromuskuläre Fazilitation',
          body: `PNF-Techniken sind die <strong>effektivsten Methoden</strong> zur Steigerung der Beweglichkeit.<br>
                 <strong>CR-Methode:</strong> Zu dehnender Muskel maximal anspannen (6 s) → entspannen → 
                 Partner dehnt tiefer (autogene Hemmung durch GTO).<br>
                 Wichtig: Qualifizierter Partner nötig, keine ruckartigen Bewegungen.`,
        })}
        ${renderMerkboxGrid([
          { icon: 'fas fa-clock',   title: 'Trainingsfrequenz', text: 'Täglich oder mind. 3–4×/Woche für nachhaltige ROM-Verbesserung.' },
          { icon: 'fas fa-thermometer-half', title: 'Aufgewärmt dehnen', text: 'Warme Muskulatur (~38 °C) ist dehnfähiger. Niemals kalt intensiv dehnen.' },
          { icon: 'fas fa-heart',   title: 'Schmerzfrei', text: 'Dehnen bis zum Ziehen, nicht bis zum Schmerz. Schmerz = Warnsignal.' },
          { icon: 'fas fa-arrows-down-to-line', title: 'Kreatin & Alter', text: 'Beweglichkeit nimmt mit Alter ab (Bindegewebsveränderungen) → frühzeitig trainieren.' },
        ])}
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