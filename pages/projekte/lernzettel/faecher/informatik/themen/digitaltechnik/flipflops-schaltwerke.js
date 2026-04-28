// pages/projekte/lernzettel/faecher/informatik/themen/digitaltechnik/flipflops-schaltwerke.js
// Informatik 1.3 — FlipFlops & Schaltwerke (RS, D, JK, T)

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
  prev: { label: '1.2 Schaltnetze', link: `${BASE}/themen/digitaltechnik/schaltnetze` },
  next: { label: '1.4 Zustandsdiagramme', link: `${BASE}/themen/digitaltechnik/zustandsdiagramme` },
};

const TABS = [
  { key: 'rs',         label: '🔲 RS-FlipFlop' },
  { key: 'd',          label: '🔷 D-FlipFlop' },
  { key: 'jk',         label: '🔶 JK-FlipFlop' },
  { key: 't',          label: '🔄 T-FlipFlop' },
  { key: 'schaltwerke', label: '⚙ Schaltwerke' },
];

export default class FlipFlopSchaltWerkePage {
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
            <span>1.3 · FlipFlops & Schaltwerke</span>
          </nav>
          <h1 class="lz-sub-title">FlipFlops & Schaltwerke</h1>
          <p class="lz-sub-subtitle">RS, D, JK, T-FlipFlop — Frequenzteiler, Register, Schaltwerke</p>
          ${renderTags(['FlipFlop', 'RS', 'D-FF', 'JK-FF', 'T-FF', 'Schieberegister', 'BPE 1'])}
        </div>
      </section>
      <section class="lz-content-section">
        <div class="lz-section-wrap">
          <nav class="wim-tabs" id="flipflopTabs" aria-label="FlipFlops & Schaltwerke">
            ${TABS.map((t, i) => `<button class="wim-tab${i === 0 ? ' active' : ''}" data-wim="${t.key}">${t.label}</button>`).join('')}
          </nav>
          ${this._panelRS()}
          ${this._panelD()}
          ${this._panelJK()}
          ${this._panelT()}
          ${this._panelSchaltwerke()}
        </div>
      </section>
      <section class="lz-content-section" style="padding-top:0;">
        <div class="lz-section-wrap">${renderPageNav(NAV)}</div>
      </section>
      ${footerHTML(this.router)}`;
  }

  _panelRS() {
    return `<div class="wim-category active" data-wim-cat="rs">
      ${renderInfobox({ icon: 'fas fa-memory', title: 'Was ist ein FlipFlop?', type: 'info',
        body: `Ein <strong>FlipFlop</strong> ist eine digitale Speicherzelle mit <strong>1 Bit Speicherkapazität</strong>.
               Im Gegensatz zu Schaltnetzen hat es ein <strong>Gedächtnis</strong>: Der Ausgang hängt vom
               aktuellen Eingang UND vom vorherigen Zustand ab. FlipFlops sind die Grundbausteine von Registern und Schaltwerken.` })}
      <h3 class="lz-h3">RS-FlipFlop (Set-Reset)</h3>
      <p class="lz-prose">Das einfachste FlipFlop. S=1 setzt den Ausgang Q=1, R=1 rücksetzt Q=0.</p>
      ${renderTable({
        headers: ['S (Set)', 'R (Reset)', 'Q(n+1)', 'Q̄(n+1)', 'Funktion'],
        rows: [
          ['0', '0', 'Q(n)', '¬Q(n)', '🔒 Speichern (kein Eingang)'],
          ['0', '1', '0', '1', '↓ Rücksetzen (Q=0)'],
          ['1', '0', '1', '0', '↑ Setzen (Q=1)'],
          ['1', '1', 'verboten', 'verboten', '⚠️ Verbotener Zustand!'],
        ],
      })}
      ${renderInfobox({ icon: 'fas fa-exclamation-triangle', title: 'Verbotener Zustand S=R=1', type: 'warning',
        body: `Bei S=R=1 sind Q und Q̄ beide 1 — das widerspricht dem Komplementärverhältnis Q̄=¬Q.
               Nach Aufheben des Zustands ist das Folgeverhalten unbestimmt (Race Condition).
               <strong>→ Muss durch Schaltungsdesign vermieden werden!</strong>` })}
      <h4 class="lz-h4">RS-FlipFlop aus NOR-Gattern</h4>
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:1.5rem;border-radius:10px;font-family:monospace;font-size:.85rem;line-height:1.8;">
  S ──┤      ├── Q
      │ NOR1 │
  Q̄ ─┤      ├─┐
                │
  R ──┤      ├── Q̄
      │ NOR2 │
  Q ──┤      ├─┘
Rückkopplung: Ausgänge werden als Eingänge des jeweils anderen Gatters verwendet → stabiler Zustand = Gedächtnis!</pre>
      <h4 class="lz-h4">Charakteristische Gleichung</h4>
      ${renderFormulaBox({
        label: 'RS-FF Charakteristische Gleichung',
        formula: 'Q(n+1) = S + ¬R · Q(n)',
        desc: 'Bedingung: S · R = 0 (verbotener Zustand ausgeschlossen)',
      })}
    </div>`;
  }

  _panelD() {
    return `<div class="wim-category hidden" data-wim-cat="d">
      <h3 class="lz-h3">D-FlipFlop (Data/Delay)</h3>
      <p class="lz-prose">
        Das D-FF löst das Problem des verbotenen Zustands beim RS-FF durch <strong>S=D, R=¬D</strong>.
        Es speichert den Datenwert D zum Zeitpunkt der Taktflanke.
      </p>
      ${renderTable({
        headers: ['D (Data)', 'Takt CLK', 'Q(n+1)', 'Funktion'],
        rows: [
          ['0', '↑ (steigende Flanke)', '0', 'Speichert 0'],
          ['1', '↑ (steigende Flanke)', '1', 'Speichert 1'],
          ['x', '0 oder 1 (keine Flanke)', 'Q(n)', 'Hält alten Wert'],
        ],
      })}
      ${renderFormulaBox({
        label: 'D-FF Charakteristische Gleichung',
        formula: 'Q(n+1) = D',
        desc: 'So einfach: Der Folgezustand ist immer gleich dem D-Eingang (bei Taktflanke)',
      })}
      ${renderCompare({
        titleA: '🔵 Pegelgesteuertes D-Latch',
        titleB: '🟢 Flankengesteuertes D-FF',
        listA: [
          'Transparent solange Enable = 1',
          'Q folgt D während E=1',
          'Anfällig für Glitches',
          'Nicht für Register geeignet',
        ],
        listB: [
          'Übernimmt D nur bei Taktflanke',
          'Steigende (↑) oder fallende (↓) Flanke',
          'Robust gegen Störungen',
          'Standard in digitalen Schaltungen',
        ],
      })}
      <h4 class="lz-h4">Anwendung: Schieberegister</h4>
      <p class="lz-prose">
        D-FFs in Reihe geschaltet: Q jedes FF ist mit D des nächsten verbunden.
        Pro Taktflanke wandern alle Bits eine Position weiter.
      </p>
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:1.5rem;border-radius:10px;font-family:monospace;font-size:.85rem;line-height:1.8;">
Eingang → [D FF1 Q] → [D FF2 Q] → [D FF3 Q] → [D FF4 Q] → Ausgang
                ↑             ↑             ↑             ↑
            CLK ─────────────────────────────────────────</pre>
      ${renderInfobox({ icon: 'fas fa-graduation-cap', title: 'D-FF für die Prüfung', type: 'success',
        body: `D-FF ist das wichtigste FF für moderne Schaltungen: einfach, kein verbotener Zustand.<br>
               <strong>Schlüsselregel:</strong> D=Q(n+1) — der D-Eingang wird direkt zum Folgezustand.
               Das vereinfacht den Entwurf von Schaltwerken enorm (keine Erregertabellen-Aufwand).` })}
    </div>`;
  }

  _panelJK() {
    return `<div class="wim-category hidden" data-wim-cat="jk">
      <h3 class="lz-h3">JK-FlipFlop (universelles FlipFlop)</h3>
      <p class="lz-prose">
        Das JK-FF erweitert das RS-FF: Der verbotene Zustand wird zum <strong>Toggle</strong>-Zustand.
        Bei J=K=1 wechselt der Ausgang bei jeder Taktflanke.
      </p>
      ${renderTable({
        headers: ['J', 'K', 'Q(n+1)', 'Funktion'],
        rows: [
          ['0', '0', 'Q(n)', '🔒 Halten'],
          ['0', '1', '0', '↓ Rücksetzen'],
          ['1', '0', '1', '↑ Setzen'],
          ['1', '1', '¬Q(n)', '🔄 Toggle (umschalten)'],
        ],
      })}
      ${renderFormulaBox({
        label: 'JK-FF Charakteristische Gleichung',
        formula: 'Q(n+1) = J · ¬Q(n) + ¬K · Q(n)',
        desc: 'J setzt (wenn Q=0), K rücksetzt (wenn Q=1), J=K=1 toggled',
      })}
      <h4 class="lz-h4">JK-FF Erregertabelle (für Schaltwerk-Entwurf)</h4>
      ${renderTable({
        headers: ['Q(n)', 'Q(n+1)', 'J', 'K'],
        rows: [
          ['0', '0', '0', 'x (egal)'],
          ['0', '1', '1', 'x (egal)'],
          ['1', '0', 'x (egal)', '1'],
          ['1', '1', 'x (egal)', '0'],
        ],
      })}
      <p class="lz-prose" style="margin-top:0.5rem;">
        x = Don't Care (irrelevant) — vereinfacht die Minimierung erheblich.
      </p>
      ${renderInfobox({ icon: 'fas fa-info-circle', title: 'Erregertabelle verstehen', type: 'info',
        body: `Frage: "Was muss am Eingang anliegen, damit Q von Zustand X nach Y wechselt?"<br>
               Q: 0→0: J=0 (nicht setzen), K=egal (schon 0) → J=0, K=x<br>
               Q: 0→1: J=1 (setzen), K=egal → J=1, K=x<br>
               Q: 1→0: J=egal, K=1 (rücksetzen) → J=x, K=1<br>
               Q: 1→1: J=egal (schon 1), K=0 (nicht rücksetzen) → J=x, K=0` })}
    </div>`;
  }

  _panelT() {
    return `<div class="wim-category hidden" data-wim-cat="t">
      <h3 class="lz-h3">T-FlipFlop (Toggle)</h3>
      <p class="lz-prose">
        Das T-FF ist ein Spezialfall des JK-FF mit <strong>J=K=T</strong>.
        Bei T=1 wechselt der Ausgang bei jeder Taktflanke — er "toggled".
        Bei T=0 hält er seinen Wert.
      </p>
      ${renderTable({
        headers: ['T (Toggle)', 'Q(n+1)', 'Funktion'],
        rows: [
          ['0', 'Q(n)', '🔒 Halten — kein Wechsel'],
          ['1', '¬Q(n)', '🔄 Toggle — Ausgangswert wird invertiert'],
        ],
      })}
      ${renderFormulaBox({
        label: 'T-FF Charakteristische Gleichung',
        formula: 'Q(n+1) = T ⊕ Q(n)',
        desc: 'XOR: T=1 → invertieren, T=0 → halten. Einfach und elegant!',
      })}
      <h4 class="lz-h4">Frequenzteiler — die wichtigste Anwendung</h4>
      <p class="lz-prose">
        T-FFs mit T=1 (dauerhaft) teilen die Taktfrequenz durch 2 bei jeder Stufe.
        n T-FFs in Reihe → Teilerfaktor 2ⁿ.
      </p>
      ${renderTable({
        headers: ['Anzahl T-FFs', 'Teilerfaktor', 'Ausgangsfrequenz bei 1 MHz Takt'],
        rows: [
          ['1', '÷ 2', '500 kHz'],
          ['2', '÷ 4', '250 kHz'],
          ['3', '÷ 8', '125 kHz'],
          ['4', '÷ 16', '62,5 kHz'],
          ['n', '÷ 2ⁿ', 'f₀ / 2ⁿ'],
        ],
      })}
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:1.5rem;border-radius:10px;font-family:monospace;font-size:.85rem;line-height:1.8;">
3-Bit Zähler aus T-FlipFlops (T=1 konstant):

Takt  Q2  Q1  Q0    (binär)  Dezimal
  ↑    0   0   0      000       0
  ↑    0   0   1      001       1
  ↑    0   1   0      010       2
  ↑    0   1   1      011       3
  ↑    1   0   0      100       4
  ↑    1   0   1      101       5
  ↑    1   1   0      110       6
  ↑    1   1   1      111       7
  ↑    0   0   0      000       0  → Überlauf, Start von vorne

Q0 togglet bei jedem Takt
Q1 togglet wenn Q0 von 1→0 fällt
Q2 togglet wenn Q1 von 1→0 fällt</pre>
      ${renderInfobox({ icon: 'fas fa-pencil-alt', title: 'Übungsaufgabe: Frequenzteiler', type: 'success',
        body: `Du hast 1 MHz Takt. Wie viele T-FlipFlops brauchst du für 62,5 kHz Ausgang?<br>
               <strong>Lösung:</strong> 62,5 kHz = 1 MHz ÷ 16 = 1 MHz ÷ 2⁴ → <strong>4 T-FFs</strong>` })}
      <h4 class="lz-h4">Realisierung als JK-FF</h4>
      <p class="lz-prose">T-FF durch JK-FF: <strong>J und K beide mit T-Eingang verbinden.</strong> Bei T=1 → J=K=1 → Toggle.</p>
    </div>`;
  }

  _panelSchaltwerke() {
    return `<div class="wim-category hidden" data-wim-cat="schaltwerke">
      <h3 class="lz-h3">Schaltwerke</h3>
      ${renderInfobox({ icon: 'fas fa-cogs', title: 'Schaltnetz vs. Schaltwerk', type: 'info',
        body: `<strong>Schaltnetz:</strong> Ausgang hängt nur von aktuellen Eingängen ab — kein Gedächtnis.<br>
               <strong>Schaltwerk:</strong> Ausgang hängt von Eingängen UND aktuellem Zustand ab — hat Gedächtnis (FlipFlops).
               Schaltwerke sind <em>getaktete</em> Systeme.` })}
      ${renderCompare({
        titleA: '🔷 Mealy-Schaltwerk',
        titleB: '🔶 Moore-Schaltwerk',
        listA: [
          'Ausgänge abhängig von Zustand UND Eingang',
          'Kann schneller reagieren',
          'Ausgang kann sich asynchron ändern',
          'Weniger Zustände nötig',
        ],
        listB: [
          'Ausgänge hängen NUR vom Zustand ab',
          'Ausgabe ist synchron zum Takt',
          'Robuster, einfacher zu analysieren',
          'Mehr Zustände benötigt',
        ],
      })}
      <h4 class="lz-h4">Schieberegister — wichtigstes Beispiel</h4>
      ${renderTable({
        headers: ['Typ', 'Funktion', 'Anwendung'],
        rows: [
          ['SISO (Serial In, Serial Out)', 'Bit reihenweise ein- und ausgelesen', 'Datenverzögerung, FIFO'],
          ['SIPO (Serial In, Parallel Out)', 'Serieller Eingang, 8 parallele Ausgänge', 'SPI, Treiber-ICs (74HC595)'],
          ['PISO (Parallel In, Serial Out)', '8 parallele Eingänge, serieller Ausgang', 'Tastatur, UART-Sender'],
          ['PIPO (Parallel In, Parallel Out)', 'Einfaches Register, alle Bits gleichzeitig', 'CPU-Register, Datenpuffer'],
        ],
      })}
      <h4 class="lz-h4">Ring- und Johnson-Zähler</h4>
      ${renderTable({
        headers: ['Zähler', 'Funktion', 'Zustandsanzahl', 'Muster'],
        rows: [
          ['Ringzähler', 'Eine 1 wandert im Kreis (Schieberegister mit Rückkopplung Q→D)', 'n (bei n FF)', '0001→0010→0100→1000→...'],
          ['Johnson-Zähler', 'Invertierter Ausgang zurückgekoppelt', '2n', '0000→1000→1100→1110→1111→0111→...'],
        ],
      })}
      ${renderInfobox({ icon: 'fas fa-graduation-cap', title: 'FlipFlops für die Prüfung', type: 'success',
        body: `<strong>D-FF:</strong> Einfachstes, für Schaltwerke ideal (D=Q(n+1))<br>
               <strong>JK-FF:</strong> Universell, Erregertabelle mit Don't-Care kennen<br>
               <strong>T-FF:</strong> Frequenzteiler ÷2 pro Stufe<br>
               <strong>Timing-Diagramme:</strong> Flanke erkennen, Q-Verlauf einzeichnen können` })}
    </div>`;
  }

  init() {
    i18n.init();
    initScrollReveal();
    initInteractive(document.querySelector('.page-informatik-sub'));
    document.querySelectorAll('[data-nav-link]').forEach(btn => {
      btn.addEventListener('click', () => { if (btn.dataset.navLink) window.location.hash = btn.dataset.navLink; });
    });
    initWimTabs(document);
  }
}