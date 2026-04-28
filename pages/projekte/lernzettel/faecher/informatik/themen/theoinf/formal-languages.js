// pages/projekte/lernzettel/faecher/informatik/themen/theoinf/formal-languages.js
// Informatik 12.3 — Formale Sprachen & Grammatiken (Chomsky-Hierarchie)

import { initScrollReveal } from '../../../../../../../shared/js/index.js';
import { footerHTML }        from '../../../../../../../components/Footer.js';
import { i18n }              from '../../../../../../../shared/js/i18n.js';
import { initWimTabs }       from '../../../../../../../shared/js/wim-tabs.js';
import {
  ensureComponentsCSS, renderTags, renderInfobox, renderTable,
  renderFormulaBox, renderMerkboxGrid, renderCompare,
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
  prev: { label: '12.2 Komplexität', link: `${BASE}/themen/theoinf/complexity` },
  next: { label: '13.1 Kryptographie', link: `${BASE}/themen/security/cryptography` },
};

const TABS = [
  { key: 'chomsky', label: '📚 Chomsky‑Hierarchie' },
  { key: 'grammatiken', label: '📝 Grammatiken & Beispiele' },
  { key: 'pumping',  label: '🔍 Pumping‑Lemma' },
  { key: 'uebungen', label: '✏ Übungen' },
];

export default class FormalLanguagesPage {
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
            <span>12.3 · Formale Sprachen & Grammatiken</span>
          </nav>
          <h1 class="lz-sub-title">Formale Sprachen & Chomsky‑Hierarchie</h1>
          <p class="lz-sub-subtitle">Typ 0‑3, kontextfrei, regulär, kontextsensitiv, Grammatiken</p>
          ${renderTags(['Chomsky', 'Kontextfrei', 'Regulär', 'Grammatik', 'Pumping‑Lemma'])}
        </div>
      </section>
      <section class="lz-content-section">
        <div class="lz-section-wrap">
          <nav class="wim-tabs" id="formalTabs" aria-label="Formale Sprachen">
            ${TABS.map((t, i) => `<button class="wim-tab${i === 0 ? ' active' : ''}" data-wim="${t.key}">${t.label}</button>`).join('')}
          </nav>
          ${this._panelChomsky()}
          ${this._panelGrammatiken()}
          ${this._panelPumping()}
          ${this._panelUebungen()}
        </div>
      </section>
      <section class="lz-content-section" style="padding-top:0;">
        <div class="lz-section-wrap">${renderPageNav(NAV)}</div>
      </section>
      ${footerHTML(this.router)}`;
  }

  _panelChomsky() {
    return `<div class="wim-category active" data-wim-cat="chomsky">
      ${renderInfobox({ icon: 'fas fa-language', title: 'Chomsky‑Hierarchie (Noam Chomsky, 1956)', type: 'info',
        body: `Klassifikation formaler Grammatiken nach ihrer Ausdruckskraft.
               Jede Stufe ist eine echte Teilmenge der nächsthöheren Stufe:
               <strong>Typ 3 ⊂ Typ 2 ⊂ Typ 1 ⊂ Typ 0</strong>.` })}
      ${renderTable({
        headers: ['Typ', 'Name', 'Grammatikregeln', 'Automat', 'Beispielsprache'],
        rows: [
          ['Typ 0', 'Rekursiv aufzählbar', 'α → β (beliebig)', 'Turingmaschine', 'Alle berechenbaren Sprachen'],
          ['Typ 1', 'Kontextsensitiv', 'αAβ → αγβ (|γ|≥1)', 'Linear beschränkter Automat (LBA)', 'aⁿbⁿcⁿ'],
          ['Typ 2', 'Kontextfrei', 'A → γ (A ∈ Nichtterminal)', 'Kellerautomat (PDA)', 'aⁿbⁿ, Klammerstrukturen'],
          ['Typ 3', 'Regulär', 'A → aB oder A → a', 'Endlicher Automat (DFA/NFA)', '(ab)*, [0‑9]+'],
        ],
      })}
      <h4 class="lz-h4">Mengeninklusion</h4>
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:0.8rem;border-radius:8px;font-family:monospace;">
Typ 3 ⊂ Typ 2 ⊂ Typ 1 ⊂ Typ 0

Beispiele für echte Inklusion:
  - aⁿbⁿ ist kontextfrei, aber nicht regulär.
  - aⁿbⁿcⁿ ist kontextsensitiv, aber nicht kontextfrei.
  - Das Halteproblem ist rekursiv aufzählbar (Typ 0), aber nicht entscheidbar.
</pre>
    </div>`;
  }

  _panelGrammatiken() {
    return `<div class="wim-category hidden" data-wim-cat="grammatiken">
      <h3 class="lz-h3">Beispiele für Grammatiken</h3>
      <h4 class="lz-h4">Typ 3 – reguläre Grammatik (rechtslinear)</h4>
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:0.8rem;border-radius:8px;font-family:monospace;">
G = ({S}, {a, b}, P, S)
P:
  S → aS | bS | ε
Erzeugt alle Wörter über {a,b}* (beliebig viele a und b).
</pre>
      <h4 class="lz-h4">Typ 2 – kontextfreie Grammatik (KFG)</h4>
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:0.8rem;border-radius:8px;font-family:monospace;">
G = ({S}, {a, b}, P, S)
P:
  S → aSb | ε
Erzeugt L = { aⁿbⁿ | n ≥ 0 } (gleich viele a und b).
Ableitung: S ⇒ aSb ⇒ aaSbb ⇒ aabb (für n=2).
</pre>
      <h4 class="lz-h4">Typ 1 – kontextsensitive Grammatik</h4>
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:0.8rem;border-radius:8px;font-family:monospace;">
G = ({S, A, B, C}, {a, b, c}, P, S)
P (vereinfacht):
  S → aSBC | aBC
  CB → BC
  aB → ab
  bB → bb
  bC → bc
  cC → cc
Erzeugt L = { aⁿbⁿcⁿ | n ≥ 1 } (gleich viele a, b, c).
</pre>
      <h4 class="lz-h4">Anwendung kontextfreier Grammatiken</h4>
      <p class="lz-prose">
        Kontextfreie Grammatiken beschreiben die Syntax der meisten Programmiersprachen.
        Beispiel Ausdrucksgrammatik (vereinfacht):
      </p>
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:0.8rem;border-radius:8px;font-family:monospace;">
E → E + T | T
T → T * F | F
F → (E) | Zahl | Bezeichner
Diese Grammatik erzeugt arithmetische Ausdrücke mit Operatorpriorität (linksassoziativ).
      </pre>
    </div>`;
  }

  _panelPumping() {
    return `<div class="wim-category hidden" data-wim-cat="pumping">
      <h3 class="lz-h3">Pumping‑Lemma für reguläre Sprachen</h3>
      ${renderInfobox({ icon: 'fas fa-pump-medical', title: 'Werkzeug zum Nachweis der Nicht‑Regularität', type: 'info',
        body: `Wenn eine Sprache regulär ist, muss das Pumping‑Lemma gelten.
               Wenn das Lemma verletzt wird, ist die Sprache <strong>nicht regulär</strong>.
               Das Lemma gilt für alle regulären Sprachen, ist aber nicht hinreichend (manche nicht‑reguläre Sprachen erfüllen es trotzdem).` })}
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:0.8rem;border-radius:8px;font-family:monospace;">
Pumping‑Lemma (regulär):
Für jede reguläre Sprache L existiert eine Pumping‑Länge p ≥ 1, sodass:
  Für jedes w ∈ L mit |w| ≥ p gilt:
    w = xyz mit |xy| ≤ p, |y| ≥ 1, und
    xyⁱz ∈ L für alle i ≥ 0.

Beweis, dass L = { aⁿbⁿ | n ≥ 0 } nicht regulär ist:
  Annahme: L ist regulär → ∃ p.
  Wähle w = aᵖbᵖ (|w| = 2p ≥ p).
  Wegen |xy| ≤ p besteht xy nur aus a's. Also y = aᵏ, k≥1.
  Pumpen: xy²z = aᵖ⁺ᵏbᵖ ∉ L, weil Anzahl a ≠ Anzahl b.
  Widerspruch → L nicht regulär.
</pre>
      <h4 class="lz-h4">Pumping‑Lemma für kontextfreie Sprachen</h4>
      <p class="lz-prose">
        Für kontextfreie Sprachen gibt es ein ähnliches Lemma, das besagt, dass jedes genügend lange Wort in fünf Teile uvwxy zerlegt werden kann, wobei v und x gleichzeitig gepumpt werden können. Damit kann man z.B. zeigen, dass { aⁿbⁿcⁿ | n≥0 } nicht kontextfrei ist.
      </p>
    </div>`;
  }

  _panelUebungen() {
    return `<div class="wim-category hidden" data-wim-cat="uebungen">
      <h3 class="lz-h3">Übungsaufgaben</h3>
      ${renderAccordion([
        {
          title: 'A1: Gebe eine kontextfreie Grammatik für die Sprache der Palindrome über {a, b} an.',
          content: `G = ({S}, {a, b}, P, S) mit P: S → aSa | bSb | a | b | ε. Diese Grammatik erzeugt alle Palindrome (Wörter, die rückwärts gelesen gleich sind).`,
        },
        {
          title: 'A2: Zeige mit dem Pumping‑Lemma, dass L = { aⁿbᵐ | n > m } nicht regulär ist.',
          content: `Annahme L regulär → p. Wähle w = aᵖ⁺¹bᵖ. Wegen |xy| ≤ p besteht xy aus a's. y = aᵏ, k≥1. Pumpen auf i=2: aᵖ⁺¹⁺ᵏbᵖ → Anzahl a > Anzahl b + k, also immer noch n > m? Eigentlich erfüllt xy²z immer noch n > m, also kein Widerspruch. Andere Wahl: w = aᵖbᵖ? Das ist nicht in L (n=m). Man muss ein Wort wählen, bei dem nach Pumpen die Bedingung verletzt wird. Typisch: w = aᵖbᵖ⁻¹ (n = p, m = p-1). Nach Pumpen wird n > m + k, was immer noch n > m ist. Also L ist regulär? Tatsächlich ist { aⁿbᵐ | n > m } = a⁺b* mit n>m, das ist nicht regulär? Man kann zeigen, dass es nicht regulär ist, indem man w = aᵖbᵖ⁻¹ wählt und i=0 (leer pumpen) → aᵖ⁻ᵏbᵖ⁻¹, dann ist Anzahl a = p-k, Anzahl b = p-1, für k=1: a⁽ᵖ⁻¹⁾b⁽ᵖ⁻¹⁾, das ist nicht in L (gleich viele). Widerspruch. Also nicht regulär.`,
        },
        {
          title: 'A3: Welcher Typ der Chomsky‑Hierarchie ist für die Syntax von Programmiersprachen (z.B. C++) typisch?',
          content: `Die meisten Programmiersprachen werden durch <strong>kontextfreie Grammatiken (Typ 2)</strong> beschrieben, aber einige Aspekte (z.B. Deklaration vor Benutzung) sind kontextsensitiv. In der Praxis verwenden Compiler kontextfreie Grammatiken mit zusätzlichen semantischen Analysen.`,
        },
        {
          title: 'A4: Warum ist die Sprache aⁿbⁿ nicht regulär?',
          content: `Ein endlicher Automat hat nur endlich viele Zustände. Um zu zählen, wie viele a's gelesen wurden, um dann ebenso viele b's zu erwarten, bräuchte man unendlich viele Zustände. Das Pumping‑Lemma liefert den formalen Beweis.`,
        },
      ])}
      ${renderInfobox({ icon: 'fas fa-graduation-cap', title: 'Formale Sprachen für die Prüfung', type: 'success',
        body: `• Typ 3 (regulär): DFA/NFA, reguläre Ausdrücke.<br>
               • Typ 2 (kontextfrei): Kellerautomat, Syntax von Programmiersprachen.<br>
               • Typ 1 (kontextsensitiv): LBA, natürliche Sprachen (nicht ganz).<br>
               • Typ 0 (rekursiv aufzählbar): Turingmaschine, Halteproblem.<br>
               • Pumping‑Lemma: um Nicht‑Regularität/Nicht‑Kontextfreiheit zu zeigen.` })}
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