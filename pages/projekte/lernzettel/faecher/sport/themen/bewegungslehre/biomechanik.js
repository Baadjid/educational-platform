// pages/projekte/lernzettel/faecher/sport/themen/bewegungslehre/biomechanik.js
// Bewegungslehre 3.4 — Biomechanische Prinzipien

import { initScrollReveal }  from '../../../../../../../shared/js/index.js';
import { footerHTML }         from '../../../../../../../components/Footer.js';
import { i18n }               from '../../../../../../../shared/js/i18n.js';
import { initWimTabs }       from '../../../../../../../shared/js/wim-tabs.js';
import {
  ensureComponentsCSS,
  renderSubhead, renderTags, renderInfobox, renderFormulaBox,
  renderTable, renderTabs, renderAccordion, renderMerkboxGrid,
  initInteractive,
} from '../../../../js/components/components.js';
import { renderPageNav } from '../../../../js/components/subnav.js';
import { COLOR, COLOR_RGB, BASE } from '../../sport.js';

// ─── WIM-Tab-Daten ───────────────────────────────────────────────
const BIOMECHANIK_TABS = [
  { key: 'prinzipien', label: '📐 6 Prinzipien' },
  { key: 'vergleich',  label: '📊 Vergleichstabelle' },
];

export default class SportBiomechanikPage {
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
            <span>3.4 · Biomechanische Prinzipien</span>
          </nav>
          <h1 class="lz-sub-title">Biomechanische <em>Prinzipien.</em></h1>
          <p class="lz-sub-desc">
            Die sechs biomechanischen Prinzipien nach Hochmuth — universelle 
            Regeln zur Analyse und Optimierung sportlicher Bewegungen.
          </p>
          ${renderTags(['Bewegungslehre', '3.4', 'Hochmuth', 'Beschleunigungsweg', 'Impulserhaltung'])}
        </div>
      </section>

      <section class="lz-content-section">
        <div class="lz-section-wrap">

          ${renderInfobox({
            icon: 'fas fa-ruler-combined', title: 'Biomechanische Prinzipien (Hochmuth)',
            body: `Die biomechanischen Prinzipien sind allgemeine Gesetzmäßigkeiten, 
                   die für eine Vielzahl sportlicher Techniken gelten. 
                   Sie dienen als <strong>Analyseraster</strong> für Trainer und ermöglichen 
                   systematische Technikverbesserungen.`,
          })}

          <nav class="wim-tabs" id="biomechanikTabs" aria-label="Biomechanische Prinzipien">
            ${BIOMECHANIK_TABS.map((t, i) => `
              <button class="wim-tab${i === 0 ? ' active' : ''}" data-wim="${t.key}">
                ${t.label}
              </button>`).join('')}
          </nav>

          ${this._panelPrinzipien()}
          ${this._PanelVergleich()}

        </div>
      </section>

      <section class="lz-content-section" style="padding-top:0;">
        <div class="lz-section-wrap">
          ${renderPageNav({
            prev: { link: `${BASE}/themen/bewegungslehre/kraft-zeit-diagramme`,   label: 'Kraft-Zeit-Diagramme' },
            next: { link: `${BASE}/themen/bewegungslehre/phasenmodelle`,     label: 'Phasenmodelle' },
          }, BASE)}
        </div>
      </section>
      
      ${footerHTML(this.router)}
    `;
  }

  _panelPrinzipien() {
    return `
      <div class="wim-category" data-wim-cat="prinzipien">
        ${renderAccordion([
          {
            title: '1. Prinzip des optimalen Beschleunigungsweges',
            content: `<strong>Aussage:</strong> Je länger der Weg, über den eine Kraft wirkt, 
                       desto größer die erzielte Endgeschwindigkeit.<br><br>
                       <strong>Formel:</strong> v² = 2 × a × s → bei gleichem a gilt: längeres s → größeres v.<br><br>
                       <strong>Sportbeispiele:</strong><br>
                       • <strong>Weitwurf/Speerwerfen:</strong> Langer Anlauf + Ausholbewegung = langer Beschleunigungsweg.<br>
                       • <strong>Kniebeuge tief:</strong> Längerer Weg beim Aufstehen = mehr Arbeitsweg für die Muskulatur.<br>
                       • <strong>Hochsprung Anlauf:</strong> Senkung des KSP in der letzten Strecke verlängert den Abdruckweg.`,
          },
          {
            title: '2. Prinzip der Anfangskraft',
            content: `<strong>Aussage:</strong> Eine vorherige Gegenbewegung (Vorspannung) 
                       erhöht die anschließende Kraftentfaltung.<br><br>
                       <strong>Mechanismen:</strong><br>
                       • Dehnungsreflex (Muskelspindel aktiviert Agonist)<br>
                       • Elastische Energie in Sehnen und Bindegewebe gespeichert (DVZ)<br>
                       • Längerer Weg für die Kraftentwicklung<br><br>
                       <strong>Sportbeispiele:</strong><br>
                       • Kniebeugen vor CMJ (Countermovement Jump)<br>
                       • Ausholbewegung vor dem Schlag/Wurf<br>
                       • Einbeinige Landung vor Richtungswechsel`,
          },
          {
            title: '3. Prinzip der Koordination von Teilimpulsen (Impulsübertragungsprinzip)',
            content: `<strong>Aussage:</strong> Die größte Endgeschwindigkeit des Wurfgegenstands / 
                       distalen Segments entsteht durch zeitlich koordinierte Hintereinanderschalten 
                       von Teilbewegungen (proximal → distal).<br><br>
                       <strong>Ablauf:</strong> Beine → Rumpf → Schulter → Oberarm → Unterarm → Hand<br><br>
                       <strong>Regel:</strong> Jedes nächste Glied beginnt seine Beschleunigung, 
                       wenn das vorherige seine Maximalgeschwindigkeit erreicht hat.<br><br>
                       <strong>Sportbeispiele:</strong> Wurfbewegungen (Handball, Speer, Baseball), 
                       Schlagbewegungen (Tennis, Volleyball-Aufschlag, Karate).`,
          },
          {
            title: '4. Prinzip der Gegenwirkung und des Drehrückstoßes',
            content: `<strong>Aussage:</strong> Jede Bewegung eines Körperteils erzeugt eine 
                       kompensatorische Gegenbewegung eines anderen Körperteils 
                       (Actio = Reactio auf Körperebene).<br><br>
                       <strong>Drehrückstoß:</strong> Rotationsbewegung eines Körperteils erzeugt 
                       entgegengesetzte Rotation des restlichen Körpers.<br><br>
                       <strong>Sportbeispiele:</strong><br>
                       • Anlaufbein beim Weitsprung: Gegenschwingen der Arme für Balance.<br>
                       • Armbewegung beim Laufen: kompensiert Rotationsmoment des Rumpfs.<br>
                       • Hochsprungflug: Bein senken → Hüfte hebt sich (Drehrückstoß).`,
          },
          {
            title: '5. Prinzip der Impulserhaltung',
            content: `<strong>Aussage:</strong> In einem abgeschlossenen System bleibt der 
                       Gesamtimpuls konstant (Impulserhaltungssatz).<br><br>
                       <strong>Im Freiflugsystem:</strong> Kein externer Kraftangriff möglich → 
                       Lage des KSP ändert sich parabolisch, aber interne Umverteilungen ändern 
                       Körpersegmentpositionen.<br><br>
                       <strong>Sportbeispiele:</strong><br>
                       • Hochspringer im Flug: Bewegung der Arme/Beine ändert nicht den KSP-Flugweg.<br>
                       • Weitspringer: „Laufen in der Luft" verhindert frühes Vornüberkippen.<br>
                       • Turmspringer: Körperhaltungsänderungen beeinflussen nur Rotationsgeschwindigkeit.`,
          },
          {
            title: '6. Prinzip der optimalen Tendenz im Beschleunigungsverlauf',
            content: `<strong>Aussage:</strong> Ein gleichmäßig ansteigender Kraftverlauf 
                       (keine Kraftspitzen, kein Kraftabfall) ist mechanisch und biologisch optimal.<br><br>
                       <strong>Optimaler Kraftverlauf:</strong> Kontinuierlich ansteigend bis zum 
                       Punkt der Kraftabgabe (Abwurf, Absprung).<br><br>
                       <strong>Ungünstig:</strong> Kraftverlauf mit Tälern (Unterbrechungen) → 
                       verlorene Energie, reduzierter Gesamtimpuls.<br><br>
                       <strong>Sportbeispiele:</strong> Gewichtheben (Reißen/Stoßen), 
                       Kugelstoßen, Diskuswerfen — glatter Kraftanstieg beim Abdruck.`,
          },
        ])}
      </div>
    `;
  }

  _PanelVergleich() {
    return `
      <div class="wim-category hidden" data-wim-cat="vergleich">
        ${renderTable({
          headers: ['Prinzip', 'Kernaussage (kurz)', 'Schlüssel-Sportbeispiel'],
          rows: [
            ['Opt. Beschleunigungsweg', 'Langer Weg → hohe Endgeschwindigkeit', 'Speerwurf mit langem Anlauf'],
            ['Anfangskraft', 'Vorspannung erhöht Kraftentfaltung', 'Countermovement vor Sprung'],
            ['Koordination Teilimpulse', 'Proximal → distal, zeitlich gestaffelt', 'Handball-Wurf'],
            ['Gegenwirkung', 'Kompensatorische Gegenbewegung', 'Armschwung beim Laufen'],
            ['Impulserhaltung', 'Kein externen Eingriff im Freisystem', 'Weitspringer in der Luft'],
            ['Opt. Beschleunigungsverlauf', 'Gleichmäßig steigend bis Abgabe', 'Kugelstoßen'],
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