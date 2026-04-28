// pages/projekte/lernzettel/faecher/sport/themen/trainingslehre/technik.js
// Trainingslehre 2.7 — Technik & Techniktraining

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
import { COLOR, COLOR_RGB, BASE } from '../../sport.js';
import { renderPageNav } from '../../../../js/components/subnav.js';

// ─── WIM-Tab-Daten ───────────────────────────────────────────────
const TECHNIK_TABS = [
  { key: 'technik',      label: '🎯 Technik' },
  { key: 'techniktrain', label: '🔄 Techniktraining' },
  { key: 'taktik',       label: '♟️ Taktik' },
];

export default class SportTechnikPage {
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
            <span>2.7 · Technik & Techniktraining</span>
          </nav>
          <h1 class="lz-sub-title">Technik & <em>Taktik.</em></h1>
          <p class="lz-sub-desc">
            Sportliche Technik, Techniktraining, Taktik und Taktiktraining —
            die kognitiv-motorischen Grundlagen des Lernens im Sport.
          </p>
          ${renderTags(['Trainingslehre', '2.7', 'Techniktraining', 'Taktik', 'Feedback', 'Modell'])}
        </div>
      </section>

      <section class="lz-content-section">
        <div class="lz-section-wrap">

          <nav class="wim-tabs" id="technikTabs" aria-label="Technik & Taktik">
            ${TECHNIK_TABS.map((t, i) => `
              <button class="wim-tab${i === 0 ? ' active' : ''}" data-wim="${t.key}">
                ${t.label}
              </button>`).join('')}
          </nav>

          ${this._panelTechnik()}
          ${this._panelTechniktraining()}
          ${this._panelTaktik()}

        </div>
      </section>
      
      <section class="lz-content-section" style="padding-top:0;">
        <div class="lz-section-wrap">
          ${renderPageNav({
            prev: { link: `${BASE}/themen/trainingslehre/koordination`,   label: 'Koordination' },
            next: { link: `${BASE}/themen/trainingslehre/lerntheorie`,     label: 'Lerntheorie' },
          }, BASE)}
        </div>
      </section>


      ${footerHTML(this.router)}
    `;
  }

  _panelTechnik() {
    return `
      <div class="wim-category" data-wim-cat="technik">
        <h2 class="lz-h2">Sportliche Technik</h2>
        ${renderInfobox({
          icon: 'fas fa-cogs', title: 'Definition sportliche Technik',
          body: `Sportliche Technik ist die <strong>erlerntes, zweckmäßiges Lösungsverfahren</strong> 
                 für eine motorische Aufgabe unter optimaler Ausnutzung der konditionellen und 
                 koordinativen Fähigkeiten sowie biomechanischer Gesetzmäßigkeiten.`,
        })}
        ${renderTable({
          headers: ['Begriff', 'Bedeutung'],
          rows: [
            ['Idealtechnik', 'Biomechanisch optimales, theoretisches Bewegungsmodell'],
            ['Individualtechnik', 'An individuelle Voraussetzungen angepasste persönliche Variante'],
            ['Bewegungsstruktur', 'Räumliche, zeitliche und dynamische Organisation der Bewegung'],
            ['Stabilität', 'Gleichmäßige Technikausführung unter wechselnden Bedingungen'],
            ['Variabilität', 'Anpassungsfähigkeit der Technik an veränderte Situationen'],
          ],
        })}
        ${renderCompare({
          titleA: 'Techniktraining', titleB: 'Taktiktraining',
          listA: [
            'Erlernen/Verbessern von Bewegungsfertigkeiten',
            'Automatisierung von Bewegungsabläufen',
            'Schwerpunkt auf Ausführungsqualität',
            'Feedback über Bewegungspräzision',
          ],
          listB: [
            'Entwicklung von Spielintelligenz',
            'Entscheidungsgeschwindigkeit verbessern',
            'Schwerpunkt auf Situationslösung',
            'Feedback über Ergebnis und Entscheidung',
          ],
        })}
      </div>
    `;
  }

  _panelTechniktraining() {
    return `
      <div class="wim-category hidden" data-wim-cat="techniktrain">
        <h2 class="lz-h2">Methoden des Techniktrainings</h2>
        ${renderMerkboxGrid([
          { icon: 'fas fa-eye',          title: 'Vorzeigen / Demonstration', text: 'Visuelles Idealbild schaffen. Wichtigste Informationsquelle für Anfänger.' },
          { icon: 'fas fa-comment',      title: 'Verbale Instruktion', text: 'Kurze, präzise Erklärung. Nicht zu viele Informationen gleichzeitig!' },
          { icon: 'fas fa-rotate',       title: 'Wiederholung', text: 'Technik muss tausendfach wiederholt werden für Automatisierung (implizites Gedächtnis).' },
          { icon: 'fas fa-chart-bar',    title: 'Feedback / Rückmeldung', text: 'Intern (Propriozeption) + extern (Trainer, Video). Zeitnah und spezifisch.' },
          { icon: 'fas fa-film',         title: 'Video-Feedback', text: 'Vergleich Ideal- vs. Isttechnik. Sehr effektiv für komplexe Bewegungen.' },
          { icon: 'fas fa-puzzle-piece', title: 'Methodische Reihe', text: 'Schrittweise Annäherung von einfachen zu komplexen Bewegungsteilen.' },
        ])}
        ${renderAccordion([
          {
            title: 'Mentales Training',
            content: `Vorstellung einer Bewegung ohne physische Ausführung. 
                       Aktiviert ähnliche neuronale Muster wie die tatsächliche Ausführung.<br>
                       <strong>Effektivität:</strong> 20–30 % so effektiv wie physisches Training; 
                       in Kombination mit physischem Training erhöht es die Lernrate um 15–25 %.<br>
                       Einsatz: Verletzungsphase, Wettkampfvorbereitung, komplexe Techniken.`,
          },
          {
            title: 'Feedback-Arten im Techniktraining',
            content: `<strong>KR (Knowledge of Results):</strong> Rückmeldung über das Ergebnis (Treffer, Zeit, Weite).<br>
                       <strong>KP (Knowledge of Performance):</strong> Rückmeldung über die Ausführungsqualität 
                       (z. B. „Arm war zu gebeugt").<br>
                       <strong>Summary-Feedback:</strong> Zusammenfassung nach mehreren Versuchen.<br>
                       <strong>Bandwidth-Feedback:</strong> Nur Rückmeldung wenn Fehler über Schwellenwert.`,
          },
        ])}
      </div>
    `;
  }

  _panelTaktik() {
    return `
      <div class="wim-category hidden" data-wim-cat="taktik">
        <h2 class="lz-h2">Taktik und Taktiktraining</h2>
        ${renderInfobox({
          icon: 'fas fa-chess', title: 'Definition Taktik',
          body: `Taktik ist die <strong>planmäßige, situationsangepasste Entscheidung und Handlung</strong> 
                 in sportlichen Wettkampfsituationen auf Basis technischer Fertigkeiten und 
                 kognitiver Kompetenzen.`,
        })}
        ${renderTable({
          headers: ['Taktikebene', 'Beschreibung', 'Beispiel'],
          rows: [
            ['Individualtaktik', 'Entscheidungen des Einzelnen', '1-gegen-1-Verhalten, Finten'],
            ['Grupptaktik', 'Zusammenspiel kleiner Einheiten (2–4 Spieler)', 'Doppelpass, Pressing-Dreieck'],
            ['Mannschaftstaktik', 'Systemisches Spielerverhalten aller Spieler', '4-3-3-Formation, Raumdeckung'],
            ['Strategie', 'Langfristige Planung vor dem Wettkampf', 'Gegneranalyse, Spielsystem wählen'],
          ],
          highlight: [2],
        })}
        ${renderAccordion([
          {
            title: 'Methoden des Taktiktrainings',
            content: `<ul style="margin:0;padding-left:1.2rem;line-height:1.9;">
              <li><strong>Situatives Training:</strong> Standardsituationen mit konkreten Aufgaben</li>
              <li><strong>Videoanalyse:</strong> Eigene + gegnerische Spielzüge analysieren</li>
              <li><strong>Taktikübungen:</strong> Übungen in Überzahl/Unterzahl</li>
              <li><strong>Spielformen:</strong> Vereinfachte Spielformen (Small-Sided Games)</li>
              <li><strong>Verbale Analyse:</strong> Nachbesprechung von Entscheidungen</li>
            </ul>`,
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