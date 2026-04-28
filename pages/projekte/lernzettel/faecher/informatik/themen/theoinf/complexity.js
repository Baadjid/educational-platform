// pages/projekte/lernzettel/faecher/informatik/themen/theoinf/complexity.js
// Informatik 12.2 — Berechenbarkeit & Komplexität (P, NP, NP-vollständig, Halteproblem)

import { initScrollReveal } from '../../../../../../../shared/js/index.js';
import { footerHTML }        from '../../../../../../../components/Footer.js';
import { i18n }              from '../../../../../../../shared/js/i18n.js';
import { initWimTabs }       from '../../../../../../../shared/js/wim-tabs.js';
import {
  ensureComponentsCSS, renderTags, renderInfobox, renderTable,
  renderMerkboxGrid, renderFormulaBox, renderCompare,
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
  prev: { label: '12.1 Automaten', link: `${BASE}/themen/theoinf/automaten` },
  next: { label: '12.3 Formale Sprachen', link: `${BASE}/themen/theoinf/formal-languages` },
};

const TABS = [
  { key: 'komplexitaet', label: '⏱ P & NP' },
  { key: 'npvoll',       label: '🔬 NP‑vollständig' },
  { key: 'halteproblem', label: '🛑 Halteproblem & Turingmaschine' },
  { key: 'uebungen',     label: '✏ Übungen' },
];

export default class ComplexityPage {
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
            <span>12.2 · Berechenbarkeit & Komplexität</span>
          </nav>
          <h1 class="lz-sub-title">Berechenbarkeit & Komplexität</h1>
          <p class="lz-sub-subtitle">P, NP, NP‑vollständig, Turingmaschine, Halteproblem</p>
          ${renderTags(['P', 'NP', 'NP‑vollständig', 'Turingmaschine', 'Halteproblem', 'Komplexität'])}
        </div>
      </section>
      <section class="lz-content-section">
        <div class="lz-section-wrap">
          <nav class="wim-tabs" id="complexityTabs" aria-label="Komplexität">
            ${TABS.map((t, i) => `<button class="wim-tab${i === 0 ? ' active' : ''}" data-wim="${t.key}">${t.label}</button>`).join('')}
          </nav>
          ${this._panelKomplexitaet()}
          ${this._panelNPVoll()}
          ${this._panelHalteproblem()}
          ${this._panelUebungen()}
        </div>
      </section>
      <section class="lz-content-section" style="padding-top:0;">
        <div class="lz-section-wrap">${renderPageNav(NAV)}</div>
      </section>
      ${footerHTML(this.router)}`;
  }

  _panelKomplexitaet() {
    return `<div class="wim-category active" data-wim-cat="komplexitaet">
      ${renderInfobox({ icon: 'fas fa-hourglass-half', title: 'Was ist Komplexität?', type: 'info',
        body: `Die Komplexitätstheorie untersucht, wie viele <strong>Schritte (Zeit)</strong> und wie viel <strong>Speicher (Platz)</strong>
               ein Algorithmus in Abhängigkeit von der Eingabelänge n benötigt.
               Nicht konstante Laufzeiten, sondern das <strong>Wachstum</strong> (O‑Notation) ist entscheidend.` })}
      ${renderTable({
        headers: ['Klasse', 'Definition', 'Beispiele'],
        rows: [
          ['P', 'Probleme lösbar in polynomieller Zeit O(nᵏ)', 'Sortieren, kürzester Pfad, Multiplikation'],
          ['NP', 'Lösung verifizierbar in polynomieller Zeit (nicht unbedingt findbar)', 'Travelling Salesman (Entscheidung), Clique, SAT'],
          ['NP‑vollständig', 'NP + alle anderen NP‑Probleme darauf reduzierbar', 'SAT (Cook‑Levin), 3‑SAT, TSP‑Entscheidung'],
          ['NP‑schwer', 'Mindestens so schwer wie NP‑vollständig (nicht unbedingt in NP)', 'TSP‑Optimierung'],
          ['co‑NP', 'Komplement von NP‑Problemen', 'TAUTOLOGY (ist eine Formel Tautologie?)'],
          ['PSPACE', 'Lösbar mit polynomiellem Speicher', 'Planspiele, bestimmte Roboterplanung'],
          ['EXP', 'Lösbar in exponentieller Zeit', 'Go‑Spiel (exakt)'],
        ],
      })}
      <h4 class="lz-h4">P = NP? – Das Millenium‑Problem</h4>
      ${renderInfobox({ icon: 'fas fa-question', title: 'Die wichtigste offene Frage der Informatik', type: 'warning',
        body: `Wenn man eine Lösung schnell <em>prüfen</em> kann (NP) – kann man sie dann auch schnell <em>finden</em> (P)?
               Die meisten Informatiker glauben: <strong>P ≠ NP</strong>, aber bewiesen ist es nicht.
               Ein Beweis wäre 1 Million Dollar wert (Clay Mathematics Institute).` })}
    </div>`;
  }

  _panelNPVoll() {
    return `<div class="wim-category hidden" data-wim-cat="npvoll">
      <h3 class="lz-h3">NP‑vollständigkeit – Die schwersten Probleme in NP</h3>
      ${renderInfobox({ icon: 'fas fa-chain', title: 'Reduktionen', type: 'info',
        body: `Ein Problem B ist NP‑vollständig, wenn:
               1. B ∈ NP (Lösung ist schnell verifizierbar).
               2. Jedes Problem A ∈ NP kann in polynomieller Zeit auf B reduziert werden (A ≤ₚ B).
               Wenn ein NP‑vollständiges Problem in P läge, wäre P = NP.` })}
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:0.8rem;border-radius:8px;font-family:monospace;">
SAT (Erfüllbarkeit boolescher Formeln) – erstes NP‑vollständiges Problem (Cook‑Levin 1971).

Weitere NP‑vollständige Probleme:
  - 3‑SAT (SAT mit Klauseln von genau 3 Literalen)
  - Clique (existiert ein vollständiger Teilgraph der Größe k?)
  - Vertex Cover (existiert eine Knotenüberdeckung der Größe k?)
  - Hamiltonkreis (existiert ein Kreis, der jeden Knoten genau einmal besucht?)
  - Travelling Salesman Entscheidungsversion (gibt es eine Tour mit Länge ≤ L?)
  - Rucksackproblem (Subset Sum)

Typische Vorgehensweise zum Nachweis von NP‑Vollständigkeit:
  1. Zeige B ∈ NP.
  2. Reduziere ein bekanntes NP‑vollständiges Problem (z.B. 3‑SAT) auf B.
</pre>
    </div>`;
  }

  _panelHalteproblem() {
    return `<div class="wim-category hidden" data-wim-cat="halteproblem">
      <h3 class="lz-h3">Halteproblem – Unentscheidbarkeit</h3>
      ${renderInfobox({ icon: 'fas fa-stop', title: 'Alan Turing (1936)', type: 'warning',
        body: `Das Halteproblem ist <strong>unentscheidbar</strong>: Es gibt kein Programm, das für <strong>jedes beliebige Programm P
               und jede Eingabe E</strong> entscheiden kann, ob P mit E irgendwann anhält oder ewig läuft.
               Beweis durch Widerspruch mit einer Diagonalisierung.` })}
      <h4 class="lz-h4">Turingmaschine – Abstraktes Rechenmodell</h4>
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:0.8rem;border-radius:8px;font-family:monospace;">
Turingmaschine (TM):
  - Unendliches Band (Speicher) in Zellen unterteilt.
  - Lese‑/Schreibkopf, der sich nach links oder rechts bewegen kann.
  - Endliche Zustandsmenge Q.
  - Übergangsfunktion δ(q, a) → (q', a', Richtung).

"Jeder Computer ist äquivalent zu einer Turingmaschine" (Church‑Turing‑These).

Berechenbarkeit:
  ✅ Berechenbar: Sortieren, Primzahltest, Compiler, ...
  ❌ Nicht berechenbar: Halteproblem, 10. Hilbert‑Problem (Lösbarkeit diophantischer Gleichungen)
  ? Entscheidbar: Prädikatenlogik erster Stufe ist unentscheidbar.
</pre>
      ${renderMerkboxGrid([
        { icon: 'fas fa-check', title: 'Church‑Turing‑These', text: 'Alles, was intuitiv berechenbar ist, kann eine Turingmaschine berechnen. Nicht beweisbar, aber allgemein akzeptiert.' },
        { icon: 'fas fa-ban', title: 'Reduktion', text: 'Problem A auf B reduzieren: Wenn B lösbar, dann A auch lösbar. Wenn A unlösbar: B auch unlösbar. Wird genutzt, um Unentscheidbarkeit zu zeigen.' },
      ])}
    </div>`;
  }

  _panelUebungen() {
    return `<div class="wim-category hidden" data-wim-cat="uebungen">
      <h3 class="lz-h3">Übungsaufgaben</h3>
      ${renderAccordion([
        {
          title: 'A1: Erkläre den Unterschied zwischen P und NP.',
          content: `P: Probleme, die in polynomieller Zeit gelöst werden können (effizient). NP: Probleme, bei denen eine Lösung in polynomieller Zeit verifiziert werden kann. Alle P‑Probleme sind in NP, aber es ist unbekannt, ob P = NP oder P ⊂ NP.`,
        },
        {
          title: 'A2: Nenne drei NP‑vollständige Probleme.',
          content: `SAT, 3‑SAT, Clique, Vertex Cover, Hamiltonkreis, Travelling Salesman (Entscheidungsversion), Rucksackproblem.`,
        },
        {
          title: 'A3: Warum ist das Halteproblem nicht berechenbar?',
          content: `Angenommen, es gäbe ein Programm H(P, E), das entscheidet, ob P(E) anhält. Dann konstruiert man ein Programm Q, das H verwendet, um sich selbst zu widersprechen: Q ruft H(Q, Q) auf; wenn H sagt "hält", dann geht Q in eine Endlosschleife; wenn H sagt "hält nicht", dann stoppt Q sofort. Das führt zu einem Widerspruch.`,
        },
        {
          title: 'A4: Was besagt die Church‑Turing‑These?',
          content: `Jede Funktion, die intuitiv als berechenbar angesehen werden kann, kann von einer Turingmaschine berechnet werden. Sie ist eine These, kein mathematisch bewiesener Satz, aber allgemein akzeptiert.`,
        },
      ])}
      ${renderInfobox({ icon: 'fas fa-graduation-cap', title: 'Komplexität für die Prüfung', type: 'success',
        body: `• P: polynomiell lösbar.<br>
               • NP: Lösung verifizierbar in polynomieller Zeit.<br>
               • NP‑vollständig: schwerste Probleme in NP; wenn eines in P, dann P=NP.<br>
               • Halteproblem: nicht berechenbar (Turing).<br>
               • Turingmaschine: theoretisches Modell eines Computers.` })}
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