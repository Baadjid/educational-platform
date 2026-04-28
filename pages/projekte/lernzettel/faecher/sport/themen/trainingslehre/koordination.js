// pages/projekte/lernzettel/faecher/sport/themen/trainingslehre/koordination.js
// Trainingslehre 2.6 — Koordination

import { initScrollReveal }  from '../../../../../../../shared/js/index.js';
import { footerHTML }         from '../../../../../../../components/Footer.js';
import { i18n }               from '../../../../../../../shared/js/i18n.js';
import { initWimTabs }       from '../../../../../../../shared/js/wim-tabs.js';
import {
  ensureComponentsCSS,
  renderSubhead, renderTags, renderInfobox, renderTable,
  renderTabs, renderAccordion, renderMerkboxGrid, initInteractive,
} from '../../../../js/components/components.js';
import { renderPageNav } from '../../../../js/components/subnav.js';
import { COLOR, COLOR_RGB, BASE } from '../../sport.js';

// ─── WIM-Tab-Daten ───────────────────────────────────────────────
const KOORDINATION_TABS = [
  { key: 'faehigkeiten', label: '🎯 Fähigkeiten' },
  { key: 'kar',          label: '📊 KAR-Modell' },
  { key: 'training',     label: '🏋️ Training' },
];

export default class SportKoordinationPage {
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
            <span>2.6 · Koordination</span>
          </nav>
          <h1 class="lz-sub-title">Koordination — <em>Fähigkeiten & Training.</em></h1>
          <p class="lz-sub-desc">
            Koordinative Fähigkeiten, das KAR-Modell, Druckbedingungen und
            Trainingsformen zur Verbesserung der Bewegungssteuerung.
          </p>
          ${renderTags(['Trainingslehre', '2.6', 'KAR', 'Koordination', 'Gleichgewicht', 'Reaktion'])}
        </div>
      </section>

      <section class="lz-content-section">
        <div class="lz-section-wrap">

          <nav class="wim-tabs" id="koordinationTabs" aria-label="Koordination">
            ${KOORDINATION_TABS.map((t, i) => `
              <button class="wim-tab${i === 0 ? ' active' : ''}" data-wim="${t.key}">
                ${t.label}
              </button>`).join('')}
          </nav>

          ${this._panelFaehigkeiten()}
          ${this._panelKar()}
          ${this._panelTraining()}

        </div>
      </section>

      <section class="lz-content-section" style="padding-top:0;">
        <div class="lz-section-wrap">
          ${renderPageNav({
            prev: { link: `${BASE}/themen/trainingslehre/beweglichkeit`,   label: 'Beweglichkeit' },
            next: { link: `${BASE}/themen/trainingslehre/technik`,     label: 'Technik & Techniktraining' },
          }, BASE)}
        </div>
      </section>


      ${footerHTML(this.router)}
    `;
  }

  _panelFaehigkeiten() {
    return `
      <div class="wim-category" data-wim-cat="faehigkeiten">
        <h2 class="lz-h2">Koordinative Fähigkeiten</h2>
        ${renderInfobox({
          icon: 'fas fa-circle-nodes', title: 'Definition Koordination',
          body: `Koordination ist das Zusammenspiel von <strong>Zentralnervensystem und 
                 Skelettmuskulatur</strong> innerhalb eines gezielten Bewegungsablaufs. 
                 Sie bestimmt Präzision, Ökonomie und Anpassungsfähigkeit von Bewegungen.`,
        })}
        ${renderTable({
          headers: ['Fähigkeit', 'Definition', 'Test-Beispiel', 'Sport-Relevanz'],
          rows: [
            ['Gleichgewichtsfähigkeit', 'Körperlage halten oder wiederherstellen', 'Einbeinstand, Balancieren', 'Turnen, Ski, Surfen'],
            ['Differenzierungsfähigkeit', 'Feinabstimmung von Kraft, Raum, Zeit', 'Dosierter Ballwurf', 'Präzisionssportarten'],
            ['Orientierungsfähigkeit', 'Position und Bewegung im Raum wahrnehmen', 'Ballstafette blind', 'Mannschaftssport, Kampfsport'],
            ['Reaktionsfähigkeit', 'Schnell auf Signale reagieren', 'Reaktionstest', 'Alle Sportarten'],
            ['Rhythmisierungsfähigkeit', 'Bewegungsrhythmus erfassen und umsetzen', 'Seilspringen, Takt halten', 'Tanz, Turnen, Leichtathletik'],
            ['Umstellungsfähigkeit', 'Bewegungsprogramme kurzfristig wechseln', 'Hindernisläufe', 'Spielsportarten'],
            ['Kopplungsfähigkeit', 'Teilbewegungen koordinieren', 'Beidbeinige Übungen', 'Schwimmen, Turnen'],
          ],
          highlight: [0],
        })}
      </div>
    `;
  }

  _panelKar() {
    return `
      <div class="wim-category hidden" data-wim-cat="kar">
        <h2 class="lz-h2">Koordinations-Anforderungs-Regler (KAR)</h2>
        <p class="lz-prose">
          Das KAR-Modell (Neumaier) beschreibt die koordinativen Anforderungen 
          einer sportlichen Situation durch zwei Dimensionen: 
          <strong>Informationsanforderungen</strong> und <strong>Druckbedingungen</strong>.
        </p>
        ${renderTable({
          headers: ['Informationsanforderung', 'Beschreibung', 'Beispiel'],
          rows: [
            ['Optische Analyse', 'Visuell relevante Reize erkennen und verarbeiten', 'Ball tracken, Gegner lesen'],
            ['Akustische Analyse', 'Akustische Informationen für Bewegung nutzen', 'Schiedsrichter, Musik, Kommando'],
            ['Taktil-kinästhetische Analyse', 'Eigenwahrnehmung von Lage, Kraft, Bewegung', 'Gleichgewicht, Kraftdosierung'],
            ['Vestibulär-taktile Analyse', 'Gleichgewichtsorgan + Oberflächensensoren', 'Sturz auffangen, Lagewahrnehmung'],
          ],
        })}
        ${renderTable({
          headers: ['Druckbedingung', 'Beschreibung', 'Steigerung durch…'],
          rows: [
            ['Zeitdruck', 'Wenig Zeit zur Reaktion und Ausführung', 'Schnellere Signale, verkürzte Pausen'],
            ['Präzisionsdruck', 'Hohe Genauigkeit gefordert', 'Kleinere Ziele, engere Toleranzen'],
            ['Komplexitätsdruck', 'Viele Informationen gleichzeitig', 'Mehrere Aufgaben, Doppelaufgaben'],
            ['Situationsdruck', 'Unvorhersehbare, wechselnde Situationen', 'Gegnerkontakt, variable Umgebung'],
            ['Belastungsdruck', 'Koordination unter Ermüdung', 'Training am Ende intensiver Einheiten'],
          ],
          highlight: [4],
        })}
      </div>
    `;
  }

  _panelTraining() {
    return `
      <div class="wim-category hidden" data-wim-cat="training">
        <h2 class="lz-h2">Training koordinativer Fähigkeiten</h2>
        ${renderMerkboxGrid([
          { icon: 'fas fa-random',        title: 'Variationsmethode', text: 'Gleiche Bewegung unter verschiedenen Bedingungen (Tempo, Gerät, Untergrund).' },
          { icon: 'fas fa-puzzle-piece',  title: 'Kombinationsmethode', text: 'Verschiedene Bewegungsaufgaben gleichzeitig oder in Folge.' },
          { icon: 'fas fa-ban',            title: 'Erschwerungsmethode', text: 'Erschwerung durch Zeitdruck, Präzisionsdruck, Ermüdung.' },
          { icon: 'fas fa-lightbulb',      title: 'Improvisationsmethode', text: 'Spontane, kreative Bewegungslösungen finden (Spiel, Tanz).' },
        ])}
        ${renderAccordion([
          {
            title: 'Koordinationstraining im Aufwärmen',
            content: `Koordinationsübungen sind besonders effektiv im <strong>ausgeruhten Zustand</strong> 
                       (Beginn der Einheit), da das ZNS für neue Bewegungsmuster offen ist. 
                       Typische Inhalte: Laufschule (Kniehebelauf, Anfersen, Seitwärtslaufen), 
                       Gleichgewichtsübungen, Ballschule.`,
          },
          {
            title: 'Koordination und Alter',
            content: `<strong>Kindheit (6–12 Jahre):</strong> Optimales Lernalter für motorische Grundfertigkeiten 
                       — maximale neuronale Plastizität. Vielfältige Bewegungserfahrungen sind entscheidend.<br>
                       <strong>Jugend:</strong> Koordinationsphasen der koordinativen Fähigkeiten 
                       (sensible Phasen beachten).<br>
                       <strong>Erwachsene:</strong> Erhaltungstraining; neue Fertigkeiten möglich, aber langsamer.`,
          },
          {
            title: 'Koordination und Technik',
            content: `Koordinative Fähigkeiten sind die <strong>Voraussetzung</strong> für das Erlernen 
                       sportlicher Techniken. Je höher das koordinative Niveau, desto schneller und 
                       stabiler können neue Bewegungsfertigkeiten erworben werden. 
                       Koordinationstraining ist daher auch indirektes Techniktraining.`,
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