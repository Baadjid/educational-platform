// pages/projekte/lernzettel/faecher/informatik/themen/theoinf/automaten.js
// Informatik 12.1 — Automatentheorie (DFA, NFA, reguläre Ausdrücke)

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
  prev: { label: '11.4 Virtualisierung', link: `${BASE}/themen/os/virtualization` },
  next: { label: '12.2 Komplexität', link: `${BASE}/themen/theoinf/complexity` },
};

const TABS = [
  { key: 'dfa',   label: '🤖 Deterministische Automaten (DFA)' },
  { key: 'nfa',   label: '🎲 Nichtdeterminismus (NFA)' },
  { key: 'regex', label: '📝 Reguläre Ausdrücke' },
  { key: 'uebungen', label: '✏ Übungen' },
];

export default class AutomatenPage {
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
            <span>12.1 · Automatentheorie</span>
          </nav>
          <h1 class="lz-sub-title">Automatentheorie: DFA, NFA & RegEx</h1>
          <p class="lz-sub-subtitle">Endliche Automaten, Übergangstabellen, Potenzmengenkonstruktion</p>
          ${renderTags(['DFA', 'NFA', 'RegEx', 'Automat', 'reguläre Sprachen'])}
        </div>
      </section>
      <section class="lz-content-section">
        <div class="lz-section-wrap">
          <nav class="wim-tabs" id="automatenTabs" aria-label="Automatentheorie">
            ${TABS.map((t, i) => `<button class="wim-tab${i === 0 ? ' active' : ''}" data-wim="${t.key}">${t.label}</button>`).join('')}
          </nav>
          ${this._panelDFA()}
          ${this._panelNFA()}
          ${this._panelRegex()}
          ${this._panelUebungen()}
        </div>
      </section>
      <section class="lz-content-section" style="padding-top:0;">
        <div class="lz-section-wrap">${renderPageNav(NAV)}</div>
      </section>
      ${footerHTML(this.router)}`;
  }

  _panelDFA() {
    return `<div class="wim-category active" data-wim-cat="dfa">
      ${renderInfobox({ icon: 'fas fa-robot', title: 'Was ist ein endlicher Automat?', type: 'info',
        body: `Ein <strong>endlicher Automat (EA)</strong> ist ein mathematisches Modell für Systeme mit endlich vielen Zuständen.
               Er liest ein Eingabewort zeichenweise und wechselt je nach Zustand und Zeichen in einen neuen Zustand.
               Ein DFA (deterministischer Automat) hat für jeden Zustand und jedes Zeichen <strong>genau einen</strong> Folgezustand.` })}
      <h4 class="lz-h4">Formale Definition eines DFA</h4>
      ${renderFormulaBox({
        label: 'DFA = (Q, Σ, δ, q₀, F)',
        formula: 'Q = Zustandsmenge, Σ = Eingabealphabet, δ: Q×Σ → Q Übergangsfunktion, q₀ ∈ Q Startzustand, F ⊆ Q Endzustände',
      })}
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:0.8rem;border-radius:8px;font-family:monospace;">
Beispiel: DFA für Wörter, die mit "ab" enden.
Zustände: Q = {q0, q1, q2}
Alphabet: Σ = {a, b}
Start: q0
Endzustand: F = {q2}
Übergangstabelle:
  Zustand | a  | b
  ────────┼────┼────
    q0    | q1 | q0
    q1    | q1 | q2
    q2    | q1 | q0

Eingabe "abab": q0 → a→ q1 → b→ q2 → a→ q1 → b→ q2 (akzeptiert)
Eingabe "aba":  q0 → a→ q1 → b→ q2 → a→ q1 (nicht akzeptiert)
</pre>
    </div>`;
  }

  _panelNFA() {
    return `<div class="wim-category hidden" data-wim-cat="nfa">
      <h3 class="lz-h3">NFA – Nichtdeterministischer endlicher Automat</h3>
      ${renderInfobox({ icon: 'fas fa-question', title: 'Mehrere mögliche Übergänge', type: 'info',
        body: `Beim NFA kann es aus einem Zustand für das gleiche Symbol <strong>mehrere (oder keine)</strong> Übergänge geben.
               Ein NFA akzeptiert, wenn <strong>mindestens ein</strong> Berechnungspfad in einem Endzustand endet.
               NFA und DFA sind gleich mächtig (jeder NFA kann in einen DFA umgewandelt werden – Potenzmengenkonstruktion).` })}
      ${renderTable({
        headers: ['Eigenschaft', 'DFA', 'NFA'],
        rows: [
          ['Übergänge', 'Genau einer pro (Zustand, Symbol)', 'Beliebig viele (auch 0)'],
          ['ε‑Übergänge', 'Nicht erlaubt', 'Erlaubt (ε‑NFA)'],
          ['Umwandlung', '—', 'NFA → DFA möglich (Potenzmenge)'],
          ['Zustandszahl', 'Evtl. exponentiell mehr als NFA', 'Oft kleiner/übersichtlicher'],
        ],
      })}
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:0.8rem;border-radius:8px;font-family:monospace;">
NFA für "a* | b*" (beliebig viele a oder beliebig viele b):
Zustände: q0 (Start), q1, q2 (Endzustand)
Übergänge:
  q0 --a--> q1,   q1 --a--> q1
  q0 --b--> q2,   q2 --b--> q2
  ε‑Übergang: q0 --ε--> q1, q0 --ε--> q2 (optional)

Potenzmengenkonstruktion (NFA → DFA):
  Zustände des DFA sind Mengen von NFA‑Zuständen.
  Startzustand: ε‑Hülle(q0) = {q0, q1, q2}
  Übergang für a: {q1} usw.
</pre>
    </div>`;
  }

  _panelRegex() {
    return `<div class="wim-category hidden" data-wim-cat="regex">
      <h3 class="lz-h3">Reguläre Ausdrücke (RegEx)</h3>
      ${renderInfobox({ icon: 'fas fa-code', title: 'Beschreibung regulärer Sprachen', type: 'info',
        body: `Reguläre Ausdrücke sind eine kompakte Notation für reguläre Sprachen (die von endlichen Automaten erkannt werden).
               Jeder reguläre Ausdruck kann in einen NFA (und damit DFA) umgewandelt werden und umgekehrt.` })}
      ${renderTable({
        headers: ['Operator', 'Syntax', 'Bedeutung', 'Beispiel'],
        rows: [
          ['Literal', '<code>a</code>', 'Das Zeichen a', '<code>a</code> passt auf "a"'],
          ['Konkatenation', '<code>ab</code>', 'a gefolgt von b', '<code>ab</code> passt auf "ab"'],
          ['Alternative (ODER)', '<code>a|b</code>', 'a oder b', '<code>a|b</code> passt auf "a" oder "b"'],
          ['Kleene‑Stern', '<code>a*</code>', 'a beliebig oft (auch 0)', '<code>a*</code> passt auf "", "a", "aa", ...'],
          ['Kleene‑Plus', '<code>a+</code>', 'a mindestens einmal', '<code>a+</code> passt auf "a", "aa", ...'],
          ['Optional', '<code>a?</code>', 'a 0 oder 1 Mal', '<code>a?</code> passt auf "" oder "a"'],
          ['Zeichenklasse', '<code>[a‑z]</code>', 'Beliebiges Zeichen aus der Menge', '<code>[0‑9]</code> für Ziffer'],
          ['Negierte Klasse', '<code>[^a]</code>', 'Zeichen außer a', '<code>[^0‑9]</code> keine Ziffer'],
        ],
      })}
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:0.8rem;border-radius:8px;font-family:monospace;">
Beispiele:
  [0-9]+          → eine oder mehr Ziffern (Dezimalzahl)
  [a-zA-Z_][a-zA-Z0-9_]*  → gültiger Bezeichner in vielen Sprachen
  ^(0|[1-9][0-9]*)$       → positive ganze Zahlen ohne führende Nullen
  \\d{4}-\\d{2}-\\d{2}    → Datum (YYYY-MM-DD)
  (a|b)*abb               → Wörter, die auf "abb" enden

Reguläre Ausdrücke in der Praxis:
  - grep, sed, awk (Textverarbeitung)
  - Validierung von Formularen (E‑Mail, Telefonnummer)
  - Lexikalische Analyse (Compilerbau)
</pre>
    </div>`;
  }

  _panelUebungen() {
    return `<div class="wim-category hidden" data-wim-cat="uebungen">
      <h3 class="lz-h3">Übungsaufgaben</h3>
      ${renderAccordion([
        {
          title: 'A1: Entwirf einen DFA, der Binärzahlen erkennt, die durch 3 teilbar sind.',
          content: `Lösung: 3 Zustände (Rest 0,1,2). Übergänge: Bei Eingabe 0: Rest r → (2r) mod 3; bei 1: r → (2r+1) mod 3. Startzustand = Rest 0. Endzustand = Rest 0.`,
        },
        {
          title: 'A2: Wandle den NFA aus dem Beispiel (a*|b*) in einen DFA um (Potenzmengenkonstruktion).',
          content: `ε‑Hülle(q0) = {q0, q1, q2} = A. Übergang a: von q1 nach q1, von q2 keine, von q0 nach q1 → {q1} = B. Übergang b: {q2} = C. Von B: a → {q1}=B, b → { } = ∅. Von C: a→∅, b→{q2}=C. ∅ auf a,b → ∅. Endzustände: alle Mengen, die q1 oder q2 enthalten (B, C, A). DFA hat Zustände A, B, C, ∅.`,
        },
        {
          title: 'A3: Schreibe einen regulären Ausdruck für E‑Mail‑Adressen (vereinfacht).',
          content: `[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}`,
        },
        {
          title: 'A4: Warum sind NFA und DFA gleich mächtig?',
          content: `Für jeden NFA kann man einen äquivalenten DFA konstruieren (Potenzmengenkonstruktion). Die Sprache, die ein NFA akzeptiert, ist regulär – und umgekehrt kann jede reguläre Sprache von einem DFA akzeptiert werden.`,
        },
      ])}
      ${renderInfobox({ icon: 'fas fa-graduation-cap', title: 'Automatentheorie für die Prüfung', type: 'success',
        body: `• DFA: deterministisch, genau ein Folgezustand.<br>
               • NFA: nichtdeterministisch, mehrere Folgezustände möglich, ε‑Übergänge.<br>
               • Reguläre Ausdrücke: beschreiben reguläre Sprachen (gleiche Mächtigkeit wie DFA/NFA).<br>
               • Potenzmengenkonstruktion: NFA → DFA.<br>
               • Anwendungen: Lexer (Compiler), Suchmaschinen, Textverarbeitung.` })}
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