// pages/projekte/lernzettel/faecher/sport/themen/trainingslehre/lerntheorie.js
// Trainingslehre 2.8 — Lerntheorie & Spielvermittlung

import { initScrollReveal }  from '../../../../../../../shared/js/index.js';
import { footerHTML }         from '../../../../../../../components/Footer.js';
import { i18n }               from '../../../../../../../shared/js/i18n.js';
import { initWimTabs }       from '../../../../../../../shared/js/wim-tabs.js';
import {
  ensureComponentsCSS,
  renderSubhead, renderTags, renderInfobox, renderTable,
  renderTabs, renderAccordion, renderMerkboxGrid, renderVTimeline,
  renderCompare, initInteractive,
} from '../../../../js/components/components.js';
import { renderPageNav } from '../../../../js/components/subnav.js';

import { COLOR, COLOR_RGB, BASE } from '../../sport.js';

// ─── WIM-Tab-Daten ───────────────────────────────────────────────
const LERNTHEORIE_TABS = [
  { key: 'motorisch',  label: '🧠 Motorisches Lernen' },
  { key: 'phasen',     label: '📊 Phasenmodelle' },
  { key: 'methodik',   label: '🔧 Methodik' },
  { key: 'spiel',      label: '🏐 Spielvermittlung' },
];

export default class SportLerntheoriePage {
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
            <span>2.8 · Lerntheorie & Spielvermittlung</span>
          </nav>
          <h1 class="lz-sub-title">Lerntheorie & <em>Spielvermittlung.</em></h1>
          <p class="lz-sub-desc">
            Motorisches Lernen, Phasenmodelle, methodische Übungsreihen,
            Spielvermittlungsmodelle und integrative Sportspieldidaktik.
          </p>
          ${renderTags(['Trainingslehre', '2.8', 'Motorisches Lernen', 'Spielvermittlung', 'Methodik'])}
        </div>
      </section>

      <section class="lz-content-section">
        <div class="lz-section-wrap">

          <nav class="wim-tabs" id="lerntheorieTabs" aria-label="Lerntheorie & Spielvermittlung">
            ${LERNTHEORIE_TABS.map((t, i) => `
              <button class="wim-tab${i === 0 ? ' active' : ''}" data-wim="${t.key}">
                ${t.label}
              </button>`).join('')}
          </nav>

          ${this._panelMotorisch()}
          ${this._panelPhasen()}
          ${this._panelMethodik()}
          ${this._panelSpiel()}

        </div>
      </section>

      <section class="lz-content-section" style="padding-top:0;">
        <div class="lz-section-wrap">
          ${renderPageNav({
            prev: { link: `${BASE}/themen/trainingslehre/technik`,   label: 'Technik & Taktik' },
            next: { link: `${BASE}/themen/bewegungslehre/grundlagen`,     label: 'Bewegungslehre — Grundlagen' },
          }, BASE)}
        </div>
      </section>


      ${footerHTML(this.router)}
    `;
  }

  _panelMotorisch() {
    return `
      <div class="wim-category" data-wim-cat="motorisch">
        <h2 class="lz-h2">Motorisches Lernen und Lernmodelle</h2>
        ${renderInfobox({
          icon: 'fas fa-brain', title: 'Definition motorisches Lernen',
          body: `Motorisches Lernen ist ein relativ <strong>dauerhafter Erwerb motorischer Fertigkeiten</strong> 
                 durch Übung und Erfahrung. Es führt zu stabilen Veränderungen in neuronalen Verschaltungen 
                 (Langzeitpotenzierung, synaptische Plastizität). 
                 Unterschied zu Konditionierung: Lernen ist kognitiv vermittelt.`,
        })}
        ${renderTable({
          headers: ['Gedächtnisform', 'Inhalt', 'Bewusstsein'],
          rows: [
            ['Explizites (deklaratives) Gedächtnis', 'Wissen über Fakten und Ereignisse ("dass")', 'Bewusst abrufbar'],
            ['Implizites (prozedurales) Gedächtnis', 'Bewegungsfertigkeiten, Gewohnheiten ("wie")', 'Unbewusst, automatisch'],
          ],
          highlight: [1],
        })}
        ${renderInfobox({
          type: 'tip', icon: 'fas fa-lightbulb', title: 'Automatisierung',
          body: `Ziel des motorischen Lernens ist die <strong>Automatisierung</strong>: 
                 Die Bewegung wird ins prozedurale Gedächtnis überführt und kann ohne 
                 bewusste Aufmerksamkeit ausgeführt werden → kognitive Ressourcen frei für 
                 taktische Entscheidungen. 
                 Automatisierung erfordert tausende kontextuelle Wiederholungen.`,
        })}
      </div>
    `;
  }

  _panelPhasen() {
    return `
      <div class="wim-category hidden" data-wim-cat="phasen">
        <h2 class="lz-h2">Stufenmodelle des motorischen Lernens</h2>
        
        <h3 class="lz-h3">Meinel & Schnabel (3 Phasen)</h3>
        ${renderVTimeline([
          {
            year: 'Phase 1',
            title: 'Grobkoordination',
            text: 'Erste Annäherung an die Bewegungsaufgabe. Grobes Bewegungsmuster erkennbar, aber inkonsistent, unökonomisch, viele Fehler. Hohe kognitive Aufmerksamkeit nötig.',
          },
          {
            year: 'Phase 2',
            title: 'Feinkoordination',
            text: 'Optimierung des Bewegungsablaufs. Fehlerreduktion, Flüssigkeit und Rhythmik verbessern sich. Stabilisierung unter Standardbedingungen.',
          },
          {
            year: 'Phase 3',
            title: 'Variable Verfügbarkeit',
            text: 'Automatisierung abgeschlossen. Technik stabil unter wechselnden Bedingungen (Stress, Ermüdung, Gegner). Individuelle Gestaltungsmöglichkeiten.',
          },
        ])}

        <h3 class="lz-h3" style="margin-top:1.5rem;">Fitts & Posner (3 Phasen)</h3>
        ${renderTable({
          headers: ['Phase', 'Bezeichnung', 'Merkmal', 'Feedback'],
          rows: [
            ['1', 'Kognitiv', 'Bewusste Kontrolle, viele Fehler, langsam', 'Explizit, viel KP nötig'],
            ['2', 'Assoziativ', 'Optimierung, weniger Fehler, effizienter', 'Selektiv, auf Hauptfehler'],
            ['3', 'Autonom', 'Automatisch, Dual-Task möglich, schnell', 'Minimal, Athlet selbst kompetent'],
          ],
          highlight: [2],
        })}
      </div>
    `;
  }

  _panelMethodik() {
    return `
      <div class="wim-category hidden" data-wim-cat="methodik">
        <h2 class="lz-h2">Methoden der Bewegungsvermittlung</h2>
        ${renderTable({
          headers: ['Methode', 'Beschreibung', 'Vorteil', 'Einsatz'],
          rows: [
            ['Ganzheitsmethode', 'Bewegung wird sofort in ihrer Gesamtheit geübt', 'Natürlicher Bewegungsrhythmus erhalten', 'Einfache Bewegungen, Anfänger'],
            ['Teilmethode', 'Aufgliederung in Teilschritte, die einzeln geübt werden', 'Gezielte Fehlerkorrektur möglich', 'Komplexe Bewegungen, Spezialisten'],
            ['Ganz-Teil-Ganz-Methode', 'Erst Ganzbewegung → dann Teile üben → wieder Ganz', 'Überblick + Detailarbeit', 'Standard in der Praxis'],
          ],
          highlight: [2],
        })}
        ${renderInfobox({
          icon: 'fas fa-list-ol', title: 'Methodische Übungsreihe (MÜR)',
          body: `Eine MÜR führt schrittweise von einfachen Vor- und Hilfsübungen zur Zielübung:<br>
                 <strong>Prinzip:</strong> Vom Einfachen zum Komplexen · Vom Leichten zum Schweren · 
                 Vom Bekannten zum Unbekannten.<br>
                 Beispiel Salto rückwärts: Rolle rückwärts → Sprung auf Matte → 
                 Rad → Überschlag → Salto am Minitrampolin → freier Salto.`,
        })}
      </div>
    `;
  }

  _panelSpiel() {
    return `
      <div class="wim-category hidden" data-wim-cat="spiel">
        <h2 class="lz-h2">Spielvermittlungsmodelle</h2>
        ${renderCompare({
          titleA: 'Traditionell-technisches Modell',
          titleB: 'Taktisch-spielorientiertes Modell',
          listA: [
            'Technik zuerst, dann Spiel',
            'Drills und Technikübungen dominieren',
            'Annahme: gute Technik = gutes Spiel',
            'Wenig Spielspaß in frühen Phasen',
            'Für motorisch Begabte geeignet',
          ],
          listB: [
            'Spielerfahrung zuerst, dann Technik',
            'Modifizierte Spiele (Small-Sided Games)',
            'Taktikverständnis motiviert Techniklernen',
            'Sofortiger Spielspaß und Engagement',
            'TGfU-Ansatz (Teaching Games for Understanding)',
          ],
        })}
        ${renderMerkboxGrid([
          { icon: 'fas fa-dice',       title: 'Spielreihe',           text: 'Stufenweise Verkomplizierung: 1:1 → 2:1 → 2:2 → … → Regelspiel.' },
          { icon: 'fas fa-sliders',    title: 'Modifiziertes Spiel',  text: 'Veränderte Regeln/Feld/Spielerzahl für gezielte Lernanforderungen.' },
          { icon: 'fas fa-users',      title: 'Small-Sided Games',    text: 'Kleine Spielformen (3v3, 4v4) → mehr Ballkontakte, höhere Entscheidungsfrequenz.' },
          { icon: 'fas fa-lightbulb',  title: 'Problemlöseansatz',    text: 'Schüler lösen taktische Probleme selbst → tieferes Verständnis, Transfer.' },
        ])}
        ${renderAccordion([
          {
            title: 'Integrative Sportspielvermittlung (Konzept nach Kröger & Roth)',
            content: `<strong>Grundidee:</strong> Alle Sportspiele basieren auf gleichen taktischen 
                       Kernproblemen (Angriff, Abwehr, Raum nutzen). 
                       Durch sportartenübergreifende Basisspiele werden übertragbare Spielfähigkeiten entwickelt.<br><br>
                       <strong>Basisspiele:</strong><br>
                       • <em>Zielschussspiele</em> (Fußball, Hockey, Handball)<br>
                       • <em>Rückschlagspiele</em> (Tennis, Volleyball, Badminton)<br>
                       • <em>Wurfspiele</em> (Basketball, Netball)<br><br>
                       <strong>Transfer:</strong> Taktisches Wissen aus einem Spiel 
                       erleichtert das Erlernen anderer Spiele derselben Kategorie.`,
          },
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