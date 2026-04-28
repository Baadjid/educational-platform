// pages/projekte/lernzettel/faecher/informatik/themen/programmierung/struktogramme.js
// Informatik 4.3 — Struktogramme & Pseudocode

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
  prev: { label: '4.2 Algorithmen & Sortieren', link: `${BASE}/themen/programmierung/algorithmen` },
  next: { label: '4.4 Datenstrukturen', link: `${BASE}/themen/programmierung/datenstrukturen` },
};

const TABS = [
  { key: 'pseudocode',   label: '📝 Pseudocode' },
  { key: 'struktogramm', label: '📊 Struktogramm (Nassi‑Shneiderman)' },
  { key: 'beispiele',    label: '💡 Beispiele' },
  { key: 'uebungen',     label: '✏ Übungen' },
];

export default class StruktogrammePage {
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
            <span>4.3 · Struktogramme & Pseudocode</span>
          </nav>
          <h1 class="lz-sub-title">Struktogramme & Pseudocode</h1>
          <p class="lz-sub-subtitle">Algorithmen grafisch und textuell darstellen – Nassi‑Shneiderman, strukturierte Programmierung</p>
          ${renderTags(['Struktogramm', 'Pseudocode', 'Nassi-Shneiderman', 'Struktogramm', 'BPE 4'])}
        </div>
      </section>
      <section class="lz-content-section">
        <div class="lz-section-wrap">
          <nav class="wim-tabs" id="struktogrammeTabs" aria-label="Struktogramme & Pseudocode">
            ${TABS.map((t, i) => `<button class="wim-tab${i === 0 ? ' active' : ''}" data-wim="${t.key}">${t.label}</button>`).join('')}
          </nav>
          ${this._panelPseudocode()}
          ${this._panelStruktogramm()}
          ${this._panelBeispiele()}
          ${this._panelUebungen()}
        </div>
      </section>
      <section class="lz-content-section" style="padding-top:0;">
        <div class="lz-section-wrap">${renderPageNav(NAV)}</div>
      </section>
      ${footerHTML(this.router)}`;
  }

  _panelPseudocode() {
    return `<div class="wim-category active" data-wim-cat="pseudocode">
      ${renderInfobox({ icon: 'fas fa-pen-fancy', title: 'Was ist Pseudocode?', type: 'info',
        body: `Pseudocode ist eine <strong>sprachunabhängige, menschenlesbare Beschreibung</strong> eines Algorithmus.
               Er verwendet strukturierte Sprachelemente (wie <code>if</code>, <code>while</code>, <code>for</code>)
               aber keine spezifische Syntax einer Programmiersprache. Ideal für Entwurf und Kommunikation.` })}
      <h3 class="lz-h3">Pseudocode – Konventionen (angelehnt an DIN 66253)</h3>
      ${renderTable({
        headers: ['Konstrukt', 'Pseudocode‑Syntax', 'Bedeutung'],
        rows: [
          ['Zuweisung', '<code>x ← 5</code> oder <code>x := 5</code>', 'Weise x den Wert 5 zu'],
          ['Eingabe', '<code>Eingabe(x)</code> oder <code>read x</code>', 'Lese Wert von Tastatur/Sensor'],
          ['Ausgabe', '<code>Ausgabe(x)</code> oder <code>print x</code>', 'Schreibe Wert auf Bildschirm'],
          ['Verzweigung', '<code>if Bedingung then ... else ... endif</code>', 'Bedingte Ausführung'],
          ['Fallunterscheidung', '<code>switch variable case wert1: ... break; ... endswitch</code>', 'Mehrfachverzweigung'],
          ['Schleife (kopfgesteuert)', '<code>while Bedingung do ... endwhile</code>', 'Wiederholung solange Bedingung wahr'],
          ['Schleife (fußgesteuert)', '<code>repeat ... until Bedingung</code>', 'Wiederholung bis Bedingung wahr'],
          ['Zählschleife', '<code>for i = 1 to n do ... endfor</code>', 'Zählschleife von 1 bis n'],
          ['Funktion', '<code>function name(parameter) ... return wert endfunction</code>', 'Unterprogramm'],
        ],
      })}
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:1.5rem;border-radius:10px;font-family:monospace;font-size:.85rem;line-height:1.7;">
<span style="color:#94a3b8;">// Beispiel: Maximum von drei Zahlen</span>
<span style="color:#60a5fa;">function</span> max3(a, b, c)
    max ← a
    <span style="color:#60a5fa;">if</span> b > max <span style="color:#60a5fa;">then</span>
        max ← b
    <span style="color:#60a5fa;">endif</span>
    <span style="color:#60a5fa;">if</span> c > max <span style="color:#60a5fa;">then</span>
        max ← c
    <span style="color:#60a5fa;">endif</span>
    <span style="color:#60a5fa;">return</span> max
<span style="color:#60a5fa;">endfunction</span>
</pre>
    </div>`;
  }

  _panelStruktogramm() {
    return `<div class="wim-category hidden" data-wim-cat="struktogramm">
      <h3 class="lz-h3">Struktogramm (Nassi‑Shneiderman‑Diagramm)</h3>
      ${renderInfobox({ icon: 'fas fa-square', title: 'Grafische Darstellung von Algorithmen', type: 'info',
        body: `Ein Struktogramm ist ein <strong>zweidimensionales Blockdiagramm</strong>, das die
               Struktur eines Algorithmus zeigt. Jede Art von Anweisung hat eine eigene grafische Form.
               Vorteil: Keine Pfeile (wie im PAP), die Leseflussrichtung ist immer von oben nach unten.` })}
      <h4 class="lz-h4">Elemente eines Struktogramms</h4>
      ${renderTable({
        headers: ['Element', 'Grafische Form', 'Beschreibung'],
        rows: [
          ['Anweisung / Operation', 'Rechteck mit Text', 'Einfache Anweisung (z.B. Zuweisung, Funktionsaufruf)'],
          ['Verzweigung (if‑then‑else)', 'Rechteck mit aufgeteiltem inneren Bereich (Ja/Nein‑Zweige)', 'Bedingte Ausführung zweier Alternativen'],
          ['Fallunterscheidung (switch)', 'Mehrere nebeneinanderliegende Blöcke', 'Mehrfachverzweigung'],
          ['Schleife (while)', 'Rechteck mit Schleifenbedingung am oberen Rand', 'Kopfgesteuerte Schleife'],
          ['Schleife (repeat‑until)', 'Rechteck mit Bedingung am unteren Rand', 'Fußgesteuerte Schleife'],
          ['Zählschleife (for)', 'Rechteck mit Laufvariable und Bereich', 'Zählschleife'],
          ['Unterprogrammaufruf', 'Rechteck mit doppelten Seitenlinien', 'Aufruf einer Funktion'],
          ['Block / Sequenz', 'Übereinandergestapelte Rechtecke', 'Hintereinanderausführung'],
        ],
      })}
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:1.5rem;border-radius:10px;font-family:monospace;font-size:.85rem;line-height:1.8;text-align:center;">
Struktogramm für Maximum von 3 Zahlen:

┌─────────────────────────────────────┐
│         max3(a, b, c)               │
├─────────────────────────────────────┤
│  max ← a                             │
├───────────────────┬─────────────────┤
│      b > max ?    │                  │
├─────────┬─────────┤                  │
│   Ja    │  Nein   │                  │
│ max ← b │   –     │                  │
├─────────┴─────────┼─────────────────┤
│      c > max ?    │                  │
├─────────┬─────────┤                  │
│   Ja    │  Nein   │                  │
│ max ← c │   –     │                  │
├─────────┴─────────┴─────────────────┤
│        return max                    │
└─────────────────────────────────────┘
</pre>
      ${renderInfobox({ icon: 'fas fa-chalkboard', title: 'Struktogramm vs. PAP', type: 'info',
        body: `• <strong>PAP (Programmablaufplan):</strong> Verwendet Pfeile, kann beliebig springen (auch unstrukturiert).<br>
               • <strong>Struktogramm:</strong> Kommt ohne Pfeile aus, zwingt zu strukturierter Programmierung.<br>
               • <strong>Heute:</strong> Beide werden in Schulen gelehrt, PAP ist etwas verbreiteter, Struktogramme aber klarer.` })}
    </div>`;
  }

  _panelBeispiele() {
    return `<div class="wim-category hidden" data-wim-cat="beispiele">
      <h3 class="lz-h3">Beispiele: Algorithmen in Pseudocode + Struktogramm</h3>
      ${renderAccordion([
        {
          title: 'Beispiel 1: Summe von 1 bis N (iterativ)',
          content: `<strong>Pseudocode:</strong>
<pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:1rem;border-radius:8px;">
function summe(N)
    s ← 0
    for i = 1 to N do
        s ← s + i
    endfor
    return s
endfunction
</pre>
<strong>Struktogramm:</strong>
<pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:1rem;border-radius:8px;">
┌──────────────────────────┐
│     summe(N)             │
├──────────────────────────┤
│ s ← 0                    │
├──────────────────────────┤
│ for i = 1 to N           │
├──────────────────────────┤
│   s ← s + i              │
├──────────────────────────┤
│ return s                 │
└──────────────────────────┘
</pre>`,
        },
        {
          title: 'Beispiel 2: Binärsuche (iterativ)',
          content: `<strong>Pseudocode:</strong>
<pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:1rem;border-radius:8px;">
function binaereSuche(arr, n, gesucht)
    links ← 0
    rechts ← n-1
    while links ≤ rechts do
        mitte ← (links + rechts) // 2
        if arr[mitte] == gesucht then
            return mitte
        else if arr[mitte] < gesucht then
            links ← mitte + 1
        else
            rechts ← mitte - 1
        endif
    endwhile
    return -1
endfunction
</pre>`,
        },
        {
          title: 'Beispiel 3: Primzahltest',
          content: `<strong>Pseudocode:</strong>
<pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:1rem;border-radius:8px;">
function istPrimzahl(n)
    if n ≤ 1 then
        return false
    endif
    for i = 2 to sqrt(n) do
        if n mod i == 0 then
            return false
        endif
    endfor
    return true
endfunction
</pre>`,
        },
      ])}
    </div>`;
  }

  _panelUebungen() {
    return `<div class="wim-category hidden" data-wim-cat="uebungen">
      <h3 class="lz-h3">Übungsaufgaben</h3>
      ${renderAccordion([
        {
          title: 'A1: Schreibe einen Pseudocode für den Bubblesort‑Algorithmus.',
          content: `<pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:1rem;border-radius:8px;">
procedure bubbleSort(arr, n)
    for i = 0 to n-2 do
        swapped ← false
        for j = 0 to n-i-2 do
            if arr[j] > arr[j+1] then
                temp ← arr[j]
                arr[j] ← arr[j+1]
                arr[j+1] ← temp
                swapped ← true
            endif
        endfor
        if not swapped then
            break
        endif
    endfor
endprocedure
</pre>`,
        },
        {
          title: 'A2: Zeichne das Struktogramm für den euklidischen Algorithmus (ggT).',
          content: `<strong>Pseudocode (ggT):</strong>
<pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:1rem;border-radius:8px;">
function ggT(a, b)
    while b ≠ 0 do
        rest ← a mod b
        a ← b
        b ← rest
    endwhile
    return a
endfunction
</pre>
<strong>Struktogramm:</strong>
<pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:1rem;border-radius:8px;">
┌──────────────────────────┐
│        ggT(a, b)         │
├──────────────────────────┤
│ while b ≠ 0              │
├──────────────────────────┤
│   rest ← a mod b         │
│   a ← b                  │
│   b ← rest               │
├──────────────────────────┤
│ return a                 │
└──────────────────────────┘
</pre>`,
        },
        {
          title: 'A3: Was ist der Vorteil eines Struktogramms gegenüber einem klassischen PAP?',
          content: `Struktogramme verzichten auf Pfeile und erlauben keine beliebigen Sprünge (z.B. goto).
          Dadurch wird die <strong>strukturierte Programmierung</strong> erzwungen – der Algorithmus bleibt lesbar.
          PAPs können durch Pfeile unübersichtlich werden („Spaghetti‑Code“).`,
        },
        {
          title: 'A4: Übersetze folgenden Pseudocode in C++:',
          content: `<strong>Pseudocode:</strong>
<pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:1rem;border-radius:8px;">
function fakultaet(n)
    if n ≤ 1 then
        return 1
    else
        return n * fakultaet(n-1)
    endif
endfunction
</pre>
<strong>Lösung (C++):</strong>
<pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:1rem;border-radius:8px;">
int fakultaet(int n) {
    if (n <= 1) return 1;
    else return n * fakultaet(n-1);
}
</pre>`,
        },
      ])}
      ${renderInfobox({ icon: 'fas fa-graduation-cap', title: 'Struktogramme & Pseudocode für die Prüfung', type: 'success',
        body: `• Pseudocode ist sprachneutral – verwende <code>←</code> für Zuweisung, <code>if‑then‑else</code>, <code>while‑do</code>, <code>for</code>.<br>
               • Struktogramm: Rechtecke, keine Pfeile. Verzweigung als aufgeteiltes Rechteck, Schleifen mit Bedingung am Rand.<br>
               • Übung: Algorithmus aus Text in Pseudocode → Struktogramm → Code.` })}
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