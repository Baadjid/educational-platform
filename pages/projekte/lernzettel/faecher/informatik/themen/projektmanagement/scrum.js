// pages/projekte/lernzettel/faecher/informatik/themen/projektmanagement/scrum.js
// Informatik 10.1 — Scrum & agiles Projektmanagement

import { initScrollReveal }  from '../../../../../../../shared/js/index.js';
import { footerHTML }         from '../../../../../../../components/Footer.js';
import { i18n }               from '../../../../../../../shared/js/i18n.js';
import { initWimTabs }        from '../../../../../../../shared/js/wim-tabs.js';
import {
  ensureComponentsCSS, renderTags, renderInfobox, renderTable,
  renderAccordion, renderMerkboxGrid, renderFormulaBox, renderCompare,
  initInteractive,
} from '../../../../js/components/components.js';
import { COLOR, COLOR_RGB, BASE } from '../../informatik.js';

function renderPageNav({ prev, next }) {
  return `<nav class="lz-page-nav">
    ${prev ? `<button class="lz-page-nav-btn lz-page-nav-btn--prev" data-link="${prev.link}"><i class="fas fa-arrow-left"></i><span>${prev.label}</span></button>` : '<div></div>'}
    <button class="lz-page-nav-btn lz-page-nav-btn--up" data-link="${BASE}"><i class="fas fa-th-large"></i><span>Übersicht</span></button>
    ${next ? `<button class="lz-page-nav-btn lz-page-nav-btn--next" data-link="${next.link}"><span>${next.label}</span><i class="fas fa-arrow-right"></i></button>` : '<div></div>'}
  </nav>`;
}

const NAV = {
  prev: { label: '9.6 Advanced AI', link: `${BASE}/themen/ki/advanced-ai` },
  next: { label: '10.2 Qualitätssicherung', link: `${BASE}/themen/projektmanagement/qualitaetssicherung` },
};

const TABS = [
  { key: 'modelle',    label: '🏗 Vorgehensmodelle' },
  { key: 'scrum',      label: '🔄 Scrum' },
  { key: 'userstories',label: '📋 User Stories' },
  { key: 'uebungen',   label: '✏ Übungen' },
];

export default class ScrumPage {
  constructor(router) { this.router = router; }

  render() {
    ensureComponentsCSS();
    const el = document.createElement('div');
    el.className = 'page page-informatik-sub';
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
            <button class="lz-bread-link" data-nav-link="${BASE}">Informatik</button>
            <i class="fas fa-chevron-right"></i>
            <span>10.1 · Scrum</span>
          </nav>
          <h1 class="lz-sub-title">Scrum & agiles Projektmanagement</h1>
          <p class="lz-sub-subtitle">Wasserfall vs. agil, Scrum‑Rollen, Artefakte, Events, User Stories</p>
          ${renderTags(['Scrum', 'Agil', 'Sprint', 'User Story', 'Product Owner', 'BPE 14'])}
        </div>
      </section>
      <section class="lz-content-section">
        <div class="lz-section-wrap">
          <nav class="wim-tabs" id="scrumTabs" aria-label="Scrum">
            ${TABS.map((t, i) => `<button class="wim-tab${i === 0 ? ' active' : ''}" data-wim="${t.key}">${t.label}</button>`).join('')}
          </nav>
          ${this._panelModelle()}
          ${this._panelScrum()}
          ${this._panelUserStories()}
          ${this._panelUebungen()}
        </div>
      </section>
      <section class="lz-content-section" style="padding-top:0;">
        <div class="lz-section-wrap">${renderPageNav(NAV)}</div>
      </section>
      ${footerHTML(this.router)}`;
  }

  _panelModelle() {
    return `<div class="wim-category active" data-wim-cat="modelle">
      ${renderInfobox({ icon: 'fas fa-lightbulb', title: 'Warum Vorgehensmodelle?', type: 'info',
        body: `Softwareentwicklung ist komplex – ohne Struktur entstehen Chaos, Budgetüberschreitungen und schlechte Qualität.
               <strong>Vorgehensmodelle</strong> definieren, wie ein Projekt strukturiert, geplant und durchgeführt wird.` })}
      ${renderCompare({
        titleA: '📋 Klassisch: Wasserfallmodell',
        titleB: '🔄 Agil: Scrum / Kanban',
        listA: [
          'Strikte Phasen: Analyse → Design → Impl. → Test',
          'Nächste Phase erst nach Abschluss der vorherigen',
          'Umfangreiche Dokumentation vorab',
          'Änderungen schwierig und teuer',
          'Geeignet für stabile Anforderungen (z.B. Bau, Hardware)',
          'Risiko: Fehler erst am Ende entdeckt',
        ],
        listB: [
          'Kurze Iterationen (Sprints, 1‑4 Wochen)',
          'Kontinuierliche Auslieferung von Teilprodukten',
          'Anforderungen können sich ändern',
          'Enge Zusammenarbeit mit Kunde',
          'Geeignet für sich ändernde Anforderungen',
          'Risiko: erfordert diszipliniertes Team',
        ],
      })}
      <h4 class="lz-h4">Weitere Vorgehensmodelle</h4>
      ${renderTable({
        headers: ['Modell', 'Beschreibung', 'Stärke', 'Schwäche'],
        rows: [
          ['V‑Modell', 'Wasserfall + parallele Testplanung', 'Frühe Testplanung', 'Noch unflexibler'],
          ['Spiralmodell', 'Iterativ mit Risikoanalyse', 'Risikomanagement', 'Komplex, teuer'],
          ['Kanban', 'Flow‑basiert, WIP‑Limits', 'Sehr flexibel, kontinuierlich', 'Kein fester Rhythmus'],
          ['XP (Extreme Programming)', 'Agil + technische Praktiken', 'Hohe Code‑Qualität', 'Intensives Pair Programming'],
        ],
      })}
    </div>`;
  }

  _panelScrum() {
    return `<div class="wim-category hidden" data-wim-cat="scrum">
      <h3 class="lz-h3">Scrum – Rollen, Artefakte, Events</h3>
      <h4 class="lz-h4">Scrum‑Rollen</h4>
      ${renderMerkboxGrid([
        { icon: 'fas fa-user-tie', title: 'Product Owner (PO)', text: 'Verantwortet Product Backlog, priorisiert nach Geschäftswert, einzige Person, die Backlog‑Prios setzt.' },
        { icon: 'fas fa-shield-halved', title: 'Scrum Master (SM)', text: 'Coach und Moderator, schützt Team vor Störungen, entfernt Impediments, keine Führungskraft.' },
        { icon: 'fas fa-users', title: 'Development Team', text: '3‑9 Personen, selbstorganisierend, cross‑funktional, entscheidet, wie Sprint‑Ziel erreicht wird.' },
      ])}
      <h4 class="lz-h4">Scrum‑Artefakte</h4>
      ${renderTable({
        headers: ['Artefakt', 'Beschreibung', 'Verantwortlich'],
        rows: [
          ['Product Backlog', 'Priorisierte Liste ALLER Anforderungen (User Stories)', 'Product Owner'],
          ['Sprint Backlog', 'Ausgewählte Stories für aktuellen Sprint + Aufgaben', 'Development Team'],
          ['Increment', 'Potenziell auslieferbares Produktinkrement am Sprint‑Ende', 'Development Team'],
          ['Definition of Done (DoD)', 'Gemeinsame Kriterien, wann eine Story "fertig" ist', 'Team gemeinsam'],
        ],
      })}
      <h4 class="lz-h4">Scrum‑Events (Ceremonies)</h4>
      ${renderTable({
        headers: ['Event', 'Wer', 'Wann', 'Dauer (4‑W‑Sprint)', 'Zweck'],
        rows: [
          ['Sprint', 'Alle', 'Kontinuierlich', '1‑4 Wochen', 'Zeitbox für ein Increment'],
          ['Sprint Planning', 'Alle', 'Sprint‑Beginn', 'max. 8h', 'Was wird gemacht? Wie?'],
          ['Daily Scrum', 'Team + SM', 'Täglich', '15 min', 'Synchronisation: Gestern/Heute/Hindernisse'],
          ['Sprint Review', 'Alle + Stakeholder', 'Sprint‑Ende', 'max. 4h', 'Increment zeigen, Feedback'],
          ['Sprint Retrospektive', 'Alle', 'Nach Review', 'max. 3h', 'Prozess verbessern'],
        ],
      })}
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:0.8rem;border-radius:8px;font-family:monospace;">
Scrum‑Ablauf visualisiert:
Product Backlog          Sprint Backlog         Increment
┌─────────────────┐      ┌──────────────┐      ┌──────────┐
│ 1. User Login   │  ┌──▶│ Task 1.1     │      │          │
│ 2. Dashboard    │  │   │ Task 1.2     │─────▶│  Version │
│ 3. Profil       │──┘   │ Task 1.3     │      │  0.1.0   │
│ 4. Nachrichten  │      │ Task 2.1     │      │          │
│ ...             │      └──────────────┘      └──────────┘
└─────────────────┘      ←── Sprint (2 Wochen) ──▶
</pre>
    </div>`;
  }

  _panelUserStories() {
    return `<div class="wim-category hidden" data-wim-cat="userstories">
      <h3 class="lz-h3">User Stories & Story Points</h3>
      ${renderInfobox({ icon: 'fas fa-sticky-note', title: 'Was ist eine User Story?', type: 'info',
        body: `Eine <strong>User Story</strong> beschreibt eine Anforderung aus Nutzerperspektive:
               <strong>"Als [Rolle] möchte ich [Funktion], damit [Nutzen]."</strong><br>
               Beispiel: "Als Benutzer möchte ich mich mit E‑Mail und Passwort einloggen, damit ich auf meine persönlichen Daten zugreifen kann."` })}
      <h4 class="lz-h4">INVEST‑Kriterien für gute User Stories</h4>
      ${renderTable({
        headers: ['Buchstabe', 'Kriterium', 'Bedeutung'],
        rows: [
          ['I', 'Independent', 'Unabhängig von anderen Stories'],
          ['N', 'Negotiable', 'Verhandelbar – kein starrer Vertrag'],
          ['V', 'Valuable', 'Liefert Wert für den Nutzer'],
          ['E', 'Estimable', 'Schätzbar in Aufwand'],
          ['S', 'Small', 'Klein genug für einen Sprint'],
          ['T', 'Testable', 'Prüfbar – hat Akzeptanzkriterien'],
        ],
      })}
      <h4 class="lz-h4">Story Points & Velocity</h4>
      <p class="lz-prose">
        <strong>Story Points</strong> sind relative Schätzungen des Aufwands (z.B. Fibonacci: 1,2,3,5,8,13,21).
        <strong>Planning Poker</strong>: Team schätzt gemeinsam, Diskussion fördern.
        <strong>Velocity</strong> = Summe der Story Points pro Sprint (Durchschnitt der letzten 3 Sprints).
      </p>
      ${renderFormulaBox({
        label: 'Sprint‑Planung mit Velocity',
        formula: 'Velocity = Σ Story Points abgeschlossener Stories pro Sprint',
        desc: 'Beispiel: Velocity 25 SP/Sprint, Backlog 100 SP → ca. 4 Sprints',
      })}
    </div>`;
  }

  _panelUebungen() {
    return `<div class="wim-category hidden" data-wim-cat="uebungen">
      <h3 class="lz-h3">Übungsaufgaben</h3>
      ${renderAccordion([
        {
          title: 'A1: Nenne die drei Scrum‑Rollen und beschreibe kurz ihre Aufgaben.',
          content: `• <strong>Product Owner:</strong> Priorisiert das Product Backlog, verantwortlich für den Geschäftswert.<br>
          • <strong>Scrum Master:</strong> Coach, entfernt Hindernisse, schützt das Team.<br>
          • <strong>Development Team:</strong> Selbstorganisierend, liefert das Increment.`,
        },
        {
          title: 'A2: Was ist der Unterschied zwischen Product Backlog und Sprint Backlog?',
          content: `Product Backlog enthält <strong>alle</strong> Anforderungen für das gesamte Produkt, priorisiert vom PO.
          Sprint Backlog ist die Teilmenge, die das Team für den aktuellen Sprint auswählt, plus Aufgaben.`,
        },
        {
          title: 'A3: Schreibe eine User Story für "Passwort vergessen"‑Funktion.',
          content: `"Als registrierter Benutzer möchte ich mein Passwort zurücksetzen können, damit ich wieder Zugang zu meinem Konto erhalte, wenn ich es vergessen habe."`,
        },
        {
          title: 'A4: Erkläre den Begriff "Velocity" in Scrum.',
          content: `Velocity ist die Anzahl der Story Points, die ein Team durchschnittlich pro Sprint abschließt.
          Sie wird aus den letzten 3 Sprints berechnet und dient zur Planung zukünftiger Sprints.`,
        },
      ])}
      ${renderInfobox({ icon: 'fas fa-graduation-cap', title: 'Scrum für die Prüfung', type: 'success',
        body: `• Wasserfall vs. agil – Unterschiede kennen.<br>
               • Scrum‑Rollen: PO, SM, Development Team.<br>
               • Artefakte: Product Backlog, Sprint Backlog, Increment.<br>
               • Events: Sprint Planning, Daily, Review, Retrospektive.<br>
               • User Story: "Als … möchte ich … damit …"<br>
               • INVEST, Story Points, Velocity.` })}
    </div>`;
  }

  init() {
    i18n.init(); initScrollReveal();
    initInteractive(document.querySelector('.page-informatik-sub'));
    document.querySelectorAll('[data-nav-link]').forEach(btn => {
      btn.addEventListener('click', () => { if (btn.dataset.navLink) window.location.hash = btn.dataset.navLink; });
    });
    initWimTabs(document);
  }
}