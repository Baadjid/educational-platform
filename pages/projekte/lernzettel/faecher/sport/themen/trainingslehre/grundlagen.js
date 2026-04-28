// pages/projekte/lernzettel/faecher/sport/themen/trainingslehre/grundlagen.js
// Trainingslehre 2.1 — Grundlagen des Trainings

import { initScrollReveal }  from '../../../../../../../shared/js/index.js';
import { footerHTML }         from '../../../../../../../components/Footer.js';
import { i18n }               from '../../../../../../../shared/js/i18n.js';
import { initWimTabs }       from '../../../../../../../shared/js/wim-tabs.js';
import {
  ensureComponentsCSS,
  renderSubhead, renderTags, renderInfobox, renderFormulaBox,
  renderTable, renderTabs, renderAccordion, renderMerkboxGrid,
  renderCompare, renderVTimeline, initInteractive,
} from '../../../../js/components/components.js';
import { renderPageNav } from '../../../../js/components/subnav.js';
import { COLOR, COLOR_RGB, BASE } from '../../sport.js';

// ─── WIM-Tab-Daten ───────────────────────────────────────────────
const TRAININGSGRUNDLAGEN_TABS = [
  { key: 'adaptation',   label: '📈 Adaptation' },
  { key: 'reizschwelle', label: '🎯 Reizschwelle' },
  { key: 'leistung',     label: '🏆 Leistung' },
  { key: 'belastung',    label: '⚙️ Belastung' },
  { key: 'prinzipien',   label: '📋 Prinzipien' },
  { key: 'planung',      label: '📅 Planung' },
];

export default class SportTrainingsgrundlagenPage {
  constructor(router) { this.router = router; }

  render() {
    ensureComponentsCSS();
    const el = document.createElement('div');
    el.className = 'page page-sport-sub';
    if (!document.querySelector('link[href*="sub.css"]')) {
      const l = document.createElement('link');
      l.rel = 'stylesheet';
      l.href = 'pages/projekte/lernzettel/styles/sub.css';
      document.head.appendChild(l);
    }
    el.style.setProperty('--kap-color',     COLOR);
    el.style.setProperty('--kap-color-rgb', COLOR_RGB);
    el.style.setProperty('--lz-accent',     COLOR);
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
            <span>2.1 · Grundlagen des Trainings</span>
          </nav>
          <h1 class="lz-sub-title">Grundlagen des <em>Trainings.</em></h1>
          <p class="lz-sub-desc">
            Adaptation, Superkompensation, Reizschwellengesetz, Belastungskomponenten
            und die wichtigsten Trainingsprinzipien im Überblick.
          </p>
          ${renderTags(['Trainingslehre', '2.1', 'Superkompensation', 'Belastung', 'Prinzipien'])}
        </div>
      </section>

      <section class="lz-content-section">
        <div class="lz-section-wrap">

          <nav class="wim-tabs" id="trainingsgrundlagenTabs" aria-label="Trainingsgrundlagen">
            ${TRAININGSGRUNDLAGEN_TABS.map((t, i) => `
              <button class="wim-tab${i === 0 ? ' active' : ''}" data-wim="${t.key}">
                ${t.label}
              </button>`).join('')}
          </nav>

          ${this._panelAdaptation()}
          ${this._panelReizschwelle()}
          ${this._panelLeistung()}
          ${this._panelBelastung()}
          ${this._panelPrinzipien()}
          ${this._panelPlanung()}

        </div>
      </section>

      <section class="lz-content-section" style="padding-top:0;">
        <div class="lz-section-wrap">
          ${renderPageNav({
            prev: { link: `${BASE}/themen/sportbiologie/energiebereitstellung`,   label: 'Energiebereitstellung' },
            next: { link: `${BASE}/themen/trainingslehre/ausdauer`,     label: 'Ausdauer' },
          }, BASE)}
        </div>
      </section>

      ${footerHTML(this.router)}
    `;
  }

  _panelAdaptation() {
    return `
      <div class="wim-category" data-wim-cat="adaptation">
        <h2 class="lz-h2">Adaptation und Superkompensation</h2>
        <p class="lz-prose">
          Sportliches Training erzeugt Reize, die den Körper aus seinem
          Gleichgewicht (Homöostase) bringen. Die biologische Antwort ist
          Adaptation — der Körper passt sich an, um zukünftigen Reizen
          besser standhalten zu können.
        </p>
        ${renderInfobox({
          icon: 'fas fa-arrows-rotate', title: 'Superkompensationsmodell (Folbordt & Jakowlew)',
          body: `<ol style="margin:0;padding-left:1.4rem;line-height:2.0;">
            <li><strong>Belastungsphase:</strong> Energiespeicher werden verbraucht, Leistungsniveau sinkt.</li>
            <li><strong>Ermüdungsphase:</strong> Tiefster Punkt der Leistungsfähigkeit direkt nach der Belastung.</li>
            <li><strong>Erholungsphase:</strong> Regeneration bis auf Ausgangsniveau (Restitution).</li>
            <li><strong>Superkompensation:</strong> Körper „überschießt" das Ausgangsniveau → erhöhte Leistungsfähigkeit.</li>
            <li><strong>Involution:</strong> Ohne neuen Reiz sinkt das Niveau wieder ab.</li>
          </ol>`,
        })}
        ${renderTable({
          headers: ['Reizzeitpunkt', 'Wirkung', 'Ergebnis'],
          rows: [
            ['In der Ermüdungsphase (zu früh)', 'Übertraining', 'Leistungsabfall, Verletzungsgefahr'],
            ['Auf dem Superkompensationsgipfel (optimal)', 'Kumulativer Trainingseffekt', 'Kontinuierlicher Leistungsanstieg'],
            ['Nach Involution (zu spät)', 'Kein kumulativer Effekt', 'Leistung bleibt konstant'],
          ],
          highlight: [1],
        })}
        ${renderInfobox({
          type: 'warning', icon: 'fas fa-triangle-exclamation', title: 'Grenzen des Modells',
          body: `Das Superkompensationsmodell ist eine <strong>Vereinfachung</strong>. 
                 In der Praxis überlagern sich verschiedene Ermüdungsformen (neuromuskulär, metabolisch, psychisch). 
                 Das <em>Fitnessmüdigkeitsmodell</em> (Banister) beschreibt Trainingsanpassungen realistischer, 
                 ist aber komplexer.`,
        })}
      </div>
    `;
  }

  _panelReizschwelle() {
    return `
      <div class="wim-category hidden" data-wim-cat="reizschwelle">
        <h2 class="lz-h2">Reizschwellengesetz (Reizstufenregel)</h2>
        <p class="lz-prose">
          Nicht jeder Trainingsreiz löst eine Adaptation aus. 
          Entscheidend ist die <strong>Reizschwelle</strong> — der Mindestumfang/Mindestintensität,
          ab dem biologische Anpassungen stattfinden.
        </p>
        ${renderMerkboxGrid([
          { icon: 'fas fa-arrow-down', title: 'Unterschwelliger Reiz', text: 'Zu schwach — keine Adaptation. Erhaltung bei dauerhafter Unterschreitung nicht möglich.' },
          { icon: 'fas fa-arrow-right', title: 'Schwellenreiz', text: 'Gerade ausreichend — minimale Anpassung. Erhält das aktuelle Leistungsniveau.' },
          { icon: 'fas fa-star', title: 'Überschwelliger Reiz (optimal)', text: 'Ausreichend stark — optimale Adaptation ohne Schäden. Trainingsziel!' },
          { icon: 'fas fa-exclamation-triangle', title: 'Zu starker Reiz', text: 'Überforderung — Schäden, Übertraining, kein Trainingseffekt oder Leistungsabfall.' },
        ])}
        ${renderInfobox({
          type: 'tip', icon: 'fas fa-lightbulb', title: 'Progressive Overload',
          body: `Mit zunehmendem Trainingszustand muss die <strong>Reizschwelle angehoben</strong> werden 
                 (Prinzip der progressiven Belastungssteigerung). 
                 Was für einen Anfänger ein optimaler Reiz ist, ist für einen Leistungssportler unterschwellig. 
                 Belastung kann über Intensität, Umfang oder Dichte gesteigert werden.`,
        })}
      </div>
    `;
  }

  _panelLeistung() {
    return `
      <div class="wim-category hidden" data-wim-cat="leistung">
        <h2 class="lz-h2">Die sportliche Leistung</h2>
        <p class="lz-prose">
          Sportliche Leistung ist das Ergebnis eines komplexen Zusammenspiels 
          konditioneller, technisch-taktischer, psychischer und konstitutioneller Faktoren.
        </p>
        ${renderTable({
          headers: ['Leistungsfaktor', 'Komponenten', 'Trainierbarkeit'],
          rows: [
            ['Kondition', 'Kraft, Ausdauer, Schnelligkeit, Beweglichkeit, Koordination', 'Sehr hoch'],
            ['Technik', 'Bewegungsfertigkeiten, Automatisierung', 'Hoch (zeitaufwändig)'],
            ['Taktik', 'Spielintelligenz, Entscheidungsgeschwindigkeit', 'Mittel–hoch'],
            ['Psyche', 'Motivation, Konzentration, Stressresistenz, Willenskraft', 'Mittel'],
            ['Konstitution', 'Anthropometrie, Körperbau, Genetik', 'Gering (genetisch determiniert)'],
          ],
          highlight: [0],
        })}
        ${renderInfobox({
          icon: 'fas fa-balance-scale', title: 'Leistungsfähigkeit vs. Trainierbarkeit',
          body: `<strong>Leistungsfähigkeit</strong> = aktueller Leistungsstand (abhängig von Training + Genetik).<br>
                 <strong>Trainierbarkeit</strong> = Ausmaß der möglichen Anpassung durch Training 
                 (sinkt mit zunehmendem Leistungsstand — Gesetzmäßigkeit abnehmender Grenzleistungen).<br>
                 Anfänger profitieren stärker von gleichem Training als Hochleistungssportler.`,
        })}
      </div>
    `;
  }

  _panelBelastung() {
    return `
      <div class="wim-category hidden" data-wim-cat="belastung">
        <h2 class="lz-h2">Belastungskomponenten</h2>
        <p class="lz-prose">
          Die 5 Belastungskomponenten beschreiben, <em>wie</em> ein Training gestaltet wird.
          Ihre Kombination bestimmt den Trainingsreiz und die Adaptation.
        </p>
        ${renderTable({
          headers: ['Komponente', 'Definition', 'Beispiel', 'Steuerung'],
          rows: [
            ['Belastungsintensität', 'Stärke des Reizes', '80 % 1RM, 85 % HFmax, 6 min/km', '↑ Intensität → anaerober, kraftbetonter'],
            ['Belastungsumfang', 'Gesamtmenge der Arbeit (Zeit/Wiederholungen/km)', '30 min, 3 × 10 Wdh., 10 km', '↑ Umfang → aerober, ausdauerbetont'],
            ['Belastungsdichte', 'Verhältnis Belastung : Pause', '1:2 (Intervall), 1:5 (Kraft)', '↑ Dichte → weniger Erholung → konditionell'],
            ['Belastungsdauer', 'Zeitdauer einer Belastungseinheit', '45 s Sprint, 20 min Dauerlauf', 'Bestimmt Energiesystem'],
            ['Belastungshäufigkeit', 'Trainingseinheiten pro Woche/Zyklus', '3×/Woche, 6×/Woche', 'Zu hoch → Übertraining; zu niedrig → kein Effekt'],
          ],
        })}
        ${renderFormulaBox({
          label: 'Trainingsvolumen',
          formula: 'Volumen = Sätze × Wiederholungen × Gewicht',
          desc: 'Maß für die Gesamtarbeit einer Krafttrainingseinheit',
        })}
        ${renderInfobox({
          type: 'tip', icon: 'fas fa-lightbulb', title: 'Intensität vs. Umfang — der klassische Konflikt',
          body: `Intensität und Umfang können nicht gleichzeitig maximal sein. 
                 Typische Periodisierung: <strong>Aufbauphase</strong> = hoher Umfang, moderate Intensität → 
                 <strong>Wettkampfphase</strong> = reduzierter Umfang, hohe Intensität (Taper).`,
        })}
      </div>
    `;
  }

  _panelPrinzipien() {
    return `
      <div class="wim-category hidden" data-wim-cat="prinzipien">
        <h2 class="lz-h2">Trainingsprinzipien</h2>
        <p class="lz-prose">
          Trainingsprinzipien sind allgemeingültige Regeln für eine effektive und
          gesundheitserhaltende Trainingsgestaltung — unabhängig von Sportart und Niveau.
        </p>
        ${renderAccordion([
          {
            title: '1. Prinzip des trainingswirksamen Reizes',
            content: `Nur Reize, die die individuelle Reizschwelle überschreiten, 
                       lösen Adaptation aus. Zu schwache Reize erhalten das Niveau oder 
                       führen zu Rückgang. → Reizschwellengesetz.`,
          },
          {
            title: '2. Prinzip der progressiven Belastungssteigerung',
            content: `Belastung muss systematisch gesteigert werden, 
                       da der Körper sich an den aktuellen Reiz gewöhnt (Gewöhnungseffekt). 
                       Steigerung über Intensität, Umfang oder Dichte möglich. 
                       <strong>10%-Regel:</strong> Belastung nicht mehr als 10 % pro Woche steigern.`,
          },
          {
            title: '3. Prinzip der optimalen Relation von Belastung und Erholung',
            content: `Superkompensation findet nur bei ausreichender Erholung statt. 
                       Training auf dem Superkompensationsgipfel → kumulativer Effekt. 
                       Zu wenig Erholung → Übertraining. Zu viel Erholung → Involution.`,
          },
          {
            title: '4. Prinzip der Wiederholung und Kontinuität',
            content: `Einmalige Reize hinterlassen keine dauerhaften Anpassungen. 
                       Regelmäßiges, kontinuierliches Training ist Voraussetzung für Leistungsentwicklung. 
                       <em>„Use it or lose it"</em> — Reversibilitätsprinzip.`,
          },
          {
            title: '5. Prinzip der Individualität und Altersgemäßheit',
            content: `Trainingsreize müssen dem individuellen Leistungsstand, Alter, 
                       Gesundheitszustand und den persönlichen Zielen angepasst werden. 
                       Gleiche Belastung wirkt bei verschiedenen Personen verschieden.`,
          },
          {
            title: '6. Prinzip der Periodisierung und Zyklisierung',
            content: `Training wird in Zyklen (Mikrozyklus = 1 Woche, Mesozyklus = 4–6 Wochen, 
                       Makrozyklus = Saison/Jahr) geplant. 
                       Belastungs- und Entlastungsphasen wechseln sich ab → 
                       Vermeidung von Übertraining + Sicherung von Superkompensation.`,
          },
          {
            title: '7. Prinzip der Spezialisierung',
            content: `Mit fortschreitendem Leistungsniveau und zunehmendem Alter wird 
                       das Training spezifischer (sportartspezifische Übungen, Belastungsstrukturen). 
                       Breite Grundlagenausbildung im Kinder- und Jugendalter ist Basis.`,
          },
        ])}
      </div>
    `;
  }

  _panelPlanung() {
    return `
      <div class="wim-category hidden" data-wim-cat="planung">
        <h2 class="lz-h2">Trainingsplanung und -steuerung</h2>
        ${renderTable({
          headers: ['Planungsebene', 'Zeitraum', 'Inhalt'],
          rows: [
            ['Makrozyklus', '3–12 Monate (Saison)', 'Periodisierung, Wettkampfplanung, Gesamtziele'],
            ['Mesozyklus', '3–6 Wochen', 'Trainingsblock mit spezifischem Schwerpunkt'],
            ['Mikrozyklus', '1 Woche', 'Wöchentliche Trainingseinheiten, Erholungstage'],
            ['Trainingseinheit', '1–2 Stunden', 'Aufwärmen + Hauptteil + Ausklang'],
          ],
          highlight: [0],
        })}
        ${renderInfobox({
          icon: 'fas fa-fire', title: 'Aufbau einer Trainingseinheit',
          body: `<strong>1. Aufwärmen (10–20 min):</strong> Allgemein (Puls/Temperatur) + spezifisch (sportartspezifische Bewegungen).<br>
                 <strong>2. Hauptteil (30–60 min):</strong> Technik vor Kondition; Schnelligkeit vor Kraft vor Ausdauer.<br>
                 <strong>3. Ausklang (10–15 min):</strong> Cool-Down, Stretching, Regenerationsmaßnahmen.`,
        })}
        ${renderCompare({
          titleA: 'Übertraining', titleB: 'Tapering',
          listA: [
            'Zu viel Training ohne ausreichend Erholung',
            'Leistungsabfall trotz Training',
            'Müdigkeit, Motivationsverlust',
            'Erhöhte Verletzungsanfälligkeit',
            'Therapie: Wochen-/Monatelange Pause',
          ],
          listB: [
            'Gezielte Reduktion vor Wettkampf',
            'Superkompsation ausnutzen',
            'Umfang ↓, Intensität ↑ oder konstant',
            '1–3 Wochen vor Wettkampf',
            'Leistungssteigerung um 2–8 %',
          ],
        })}
      </div>
    `;
  }

  init() {
    i18n.init();
    initScrollReveal();
    initInteractive(document.querySelector('.page-sport-sub'));
    document.querySelectorAll('[data-nav-link]').forEach(btn => {
      btn.addEventListener('click', () => { window.location.hash = btn.dataset.navLink; });
    });
    initWimTabs(document);
  }
}