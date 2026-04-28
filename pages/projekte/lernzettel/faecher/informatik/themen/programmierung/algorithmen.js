// pages/projekte/lernzettel/faecher/informatik/themen/programmierung/algorithmen.js
// Informatik 4.2 — Algorithmen, Felder & Sortierverfahren

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
  prev: { label: '4.1 Programmier-Grundlagen', link: `${BASE}/themen/programmierung/grundlagen` },
  next: { label: '4.3 Struktogramme & Pseudocode', link: `${BASE}/themen/programmierung/struktogramme` },
};

const TABS = [
  { key: 'algorithmus', label: '🧩 Was ist ein Algorithmus?' },
  { key: 'felder',      label: '📊 Felder (Arrays)' },
  { key: 'sortieren',   label: '📈 Sortierverfahren' },
  { key: 'suchen',      label: '🔍 Suchverfahren' },
  { key: 'uebungen',    label: '✏ Übungen' },
];

export default class AlgorithmenPage {
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
            <span>4.2 · Algorithmen & Sortieren</span>
          </nav>
          <h1 class="lz-sub-title">Algorithmen, Felder & Sortierverfahren</h1>
          <p class="lz-sub-subtitle">Eigenschaften von Algorithmen, Array‑Operationen, Bubblesort, Selectionsort, Binärsuche</p>
          ${renderTags(['Algorithmus', 'Array', 'Bubblesort', 'Selectionsort', 'Binärsuche', 'Laufzeit', 'BPE 4'])}
        </div>
      </section>
      <section class="lz-content-section">
        <div class="lz-section-wrap">
          <nav class="wim-tabs" id="algorithmenTabs" aria-label="Algorithmen">
            ${TABS.map((t, i) => `<button class="wim-tab${i === 0 ? ' active' : ''}" data-wim="${t.key}">${t.label}</button>`).join('')}
          </nav>
          ${this._panelAlgorithmus()}
          ${this._panelFelder()}
          ${this._panelSortieren()}
          ${this._panelSuchen()}
          ${this._panelUebungen()}
        </div>
      </section>
      <section class="lz-content-section" style="padding-top:0;">
        <div class="lz-section-wrap">${renderPageNav(NAV)}</div>
      </section>
      ${footerHTML(this.router)}`;
  }

  _panelAlgorithmus() {
    return `<div class="wim-category active" data-wim-cat="algorithmus">
      ${renderInfobox({ icon: 'fas fa-cogs', title: 'Was ist ein Algorithmus?', type: 'info',
        body: `Ein <strong>Algorithmus</strong> ist eine eindeutige Handlungsvorschrift zur Lösung eines Problems.
               Er besteht aus endlich vielen, klar definierten Schritten. Ein Programm ist die Umsetzung eines Algorithmus in einer Programmiersprache.` })}
      <h3 class="lz-h3">Eigenschaften eines Algorithmus</h3>
      ${renderTable({
        headers: ['Eigenschaft', 'Bedeutung'],
        rows: [
          ['Determiniertheit', 'Jeder Schritt ist eindeutig definiert (keine Interpretationsspielräume)'],
          ['Ausführbarkeit', 'Jeder Schritt kann von einem Menschen oder Computer tatsächlich ausgeführt werden'],
          ['Finitheit', 'Der Algorithmus terminiert nach endlich vielen Schritten'],
          ['Eingabe', 'Er hat eine (oder mehrere) Eingaben (auch 0 möglich)'],
          ['Ausgabe', 'Er produziert eine (oder mehrere) Ausgaben'],
        ],
      })}
      <h4 class="lz-h4">Laufzeitkomplexität (Big‑O‑Notation)</h4>
      ${renderTable({
        headers: ['Komplexität', 'Name', 'Beispielalgorithmus'],
        rows: [
          ['O(1)', 'konstant', 'Array‑Zugriff, einfache Rechnung'],
          ['O(log n)', 'logarithmisch', 'Binärsuche, binärer Baum'],
          ['O(n)', 'linear', 'Lineare Suche, Schleife einmal durchlaufen'],
          ['O(n log n)', 'loglinear', 'Mergesort, Heapsort, Quicksort (avg)'],
          ['O(n²)', 'quadratisch', 'Bubblesort, Selectionsort, einfache Schleifen'],
          ['O(2ⁿ)', 'exponentiell', 'Towers of Hanoi, naive Rekursion'],
        ],
      })}
    </div>`;
  }

  _panelFelder() {
    return `<div class="wim-category hidden" data-wim-cat="felder">
      <h3 class="lz-h3">Felder (Arrays) in C/C++</h3>
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:1.5rem;border-radius:10px;font-family:monospace;font-size:.85rem;line-height:1.7;">
<span style="color:#94a3b8;">// Deklaration und Initialisierung</span>
<span style="color:#60a5fa;">int</span> zahlen[5];                     <span style="color:#94a3b8;">// uninitialisiert</span>
<span style="color:#60a5fa;">int</span> fibonacci[6] = {0, 1, 1, 2, 3, 5};  <span style="color:#94a3b8;">// mit Werten</span>
<span style="color:#60a5fa;">int</span> quadrat[] = {1, 4, 9, 16};     <span style="color:#94a3b8;">// Größe wird automatisch 4</span>

<span style="color:#94a3b8;">// Zugriff</span>
zahlen[0] = 42;                     <span style="color:#94a3b8;">// erstes Element (Index 0)</span>
<span style="color:#60a5fa;">int</span> letztes = fibonacci[5];         <span style="color:#94a3b8;">// letztes Element (Index 5)</span>

<span style="color:#94a3b8;">// Mehrdimensionale Arrays</span>
<span style="color:#60a5fa;">int</span> matrix[3][3] = {
    {1, 2, 3},
    {4, 5, 6},
    {7, 8, 9}
};
matrix[1][2] = 42;                  <span style="color:#94a3b8;">// Zeile 1, Spalte 2</span>

<span style="color:#94a3b8;">// Arrays über Zeiger (dynamisch)</span>
<span style="color:#60a5fa;">int</span>* dynArray = <span style="color:#60a5fa;">new int</span>[10];        <span style="color:#94a3b8;">// 10 Elemente auf Heap</span>
dynArray[0] = 100;
<span style="color:#60a5fa;">delete[]</span> dynArray;                <span style="color:#94a3b8;">// Speicher freigeben</span>

<span style="color:#94a3b8;">// Arraylänge ermitteln (C++17, nur bei stack‑Arrays)</span>
<span style="color:#60a5fa;">int</span> arr[] = {1,2,3,4,5};
<span style="color:#60a5fa;">int</span> len = <span style="color:#60a5fa;">sizeof</span>(arr) / <span style="color:#60a5fa;">sizeof</span>(arr[0]);  <span style="color:#94a3b8;">// 5</span>
</pre>
      ${renderInfobox({ icon: 'fas fa-exclamation-triangle', title: 'Typische Array‑Fehler', type: 'warning',
        body: `• <strong>Index außerhalb des Bereichs</strong> → undefiniertes Verhalten, möglicher Absturz.<br>
               • <strong>Array als Parameter in Funktionen</strong> → zerfällt zu Zeiger, Größeninformation verloren.
               Deshalb oft zusätzlicher Längenparameter nötig.<br>
               • <strong>Keine dynamische Größenänderung</strong> → in C++ <code>std::vector</code> verwenden.` })}
    </div>`;
  }

  _panelSortieren() {
    return `<div class="wim-category hidden" data-wim-cat="sortieren">
      <h3 class="lz-h3">Bubblesort – einfachster Sortieralgorithmus</h3>
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:1.5rem;border-radius:10px;font-family:monospace;font-size:.85rem;line-height:1.7;">
<span style="color:#60a5fa;">void</span> bubbleSort(<span style="color:#60a5fa;">int</span> arr[], <span style="color:#60a5fa;">int</span> n) {
    <span style="color:#60a5fa;">for</span> (<span style="color:#60a5fa;">int</span> i = 0; i < n-1; i++) {
        <span style="color:#60a5fa;">for</span> (<span style="color:#60a5fa;">int</span> j = 0; j < n-i-1; j++) {
            <span style="color:#60a5fa;">if</span> (arr[j] > arr[j+1]) {
                <span style="color:#94a3b8;">// Tauschen</span>
                <span style="color:#60a5fa;">int</span> temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
}
<span style="color:#94a3b8;">// Laufzeit: O(n²) im Durchschnitt und Worst Case</span>
</pre>
      <h4 class="lz-h4">Selectionsort – sortiert durch Auswahl des Minimums</h4>
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:1.5rem;border-radius:10px;font-family:monospace;font-size:.85rem;line-height:1.7;">
<span style="color:#60a5fa;">void</span> selectionSort(<span style="color:#60a5fa;">int</span> arr[], <span style="color:#60a5fa;">int</span> n) {
    <span style="color:#60a5fa;">for</span> (<span style="color:#60a5fa;">int</span> i = 0; i < n-1; i++) {
        <span style="color:#60a5fa;">int</span> minIdx = i;
        <span style="color:#60a5fa;">for</span> (<span style="color:#60a5fa;">int</span> j = i+1; j < n; j++) {
            <span style="color:#60a5fa;">if</span> (arr[j] < arr[minIdx]) minIdx = j;
        }
        <span style="color:#94a3b8;">// Tauschen</span>
        <span style="color:#60a5fa;">int</span> temp = arr[i];
        arr[i] = arr[minIdx];
        arr[minIdx] = temp;
    }
}
<span style="color:#94a3b8;">// Laufzeit: immer O(n²)</span>
</pre>
      ${renderTable({
        headers: ['Algorithmus', 'Beste Laufzeit', 'Durchschnitt', 'Schlechteste', 'Stabil?', 'In‑Place?'],
        rows: [
          ['Bubblesort', 'O(n)', 'O(n²)', 'O(n²)', 'Ja', 'Ja'],
          ['Selectionsort', 'O(n²)', 'O(n²)', 'O(n²)', 'Nein', 'Ja'],
          ['Insertionsort', 'O(n)', 'O(n²)', 'O(n²)', 'Ja', 'Ja'],
          ['Mergesort', 'O(n log n)', 'O(n log n)', 'O(n log n)', 'Ja', 'Nein (extra Speicher)'],
          ['Quicksort', 'O(n log n)', 'O(n log n)', 'O(n²)', 'Nein', 'Ja'],
          ['Heapsort', 'O(n log n)', 'O(n log n)', 'O(n log n)', 'Nein', 'Ja'],
        ],
      })}
      ${renderInfobox({ icon: 'fas fa-chart-line', title: 'Wann welcher Sortieralgorithmus?', type: 'info',
        body: `• <strong>Kleine Arrays (< 50 Elemente):</strong> Insertionsort oder Selectionsort (geringer Overhead).<br>
               • <strong>Große Arrays:</strong> Quicksort (schnell im Durchschnitt) oder Mergesort (stabil).<br>
               • <strong>Schon fast sortierte Arrays:</strong> Insertionsort oder Bubblesort mit frühem Abbruch.<br>
               • <strong>Echtzeitanforderungen:</strong> Heapsort (garantierte O(n log n)).` })}
    </div>`;
  }

  _panelSuchen() {
    return `<div class="wim-category hidden" data-wim-cat="suchen">
      <h3 class="lz-h3">Lineare Suche (unsortierte Arrays)</h3>
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:1.5rem;border-radius:10px;font-family:monospace;font-size:.85rem;line-height:1.7;">
<span style="color:#60a5fa;">int</span> lineareSuche(<span style="color:#60a5fa;">int</span> arr[], <span style="color:#60a5fa;">int</span> n, <span style="color:#60a5fa;">int</span> gesucht) {
    <span style="color:#60a5fa;">for</span> (<span style="color:#60a5fa;">int</span> i = 0; i < n; i++) {
        <span style="color:#60a5fa;">if</span> (arr[i] == gesucht) <span style="color:#60a5fa;">return</span> i;   <span style="color:#94a3b8;">// Index gefunden</span>
    }
    <span style="color:#60a5fa;">return</span> -1;   <span style="color:#94a3b8;">// nicht gefunden</span>
}
<span style="color:#94a3b8;">// Laufzeit: O(n) (im Worst Case n Vergleiche)</span>
</pre>
      <h4 class="lz-h4">Binärsuche (nur für sortierte Arrays)</h4>
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:1.5rem;border-radius:10px;font-family:monospace;font-size:.85rem;line-height:1.7;">
<span style="color:#60a5fa;">int</span> binaereSuche(<span style="color:#60a5fa;">int</span> arr[], <span style="color:#60a5fa;">int</span> links, <span style="color:#60a5fa;">int</span> rechts, <span style="color:#60a5fa;">int</span> gesucht) {
    <span style="color:#60a5fa;">while</span> (links <= rechts) {
        <span style="color:#60a5fa;">int</span> mitte = links + (rechts - links) / 2;   <span style="color:#94a3b8;">// Vermeidet Overflow</span>
        <span style="color:#60a5fa;">if</span> (arr[mitte] == gesucht) <span style="color:#60a5fa;">return</span> mitte;
        <span style="color:#60a5fa;">if</span> (arr[mitte] < gesucht) links = mitte + 1;
        <span style="color:#60a5fa;">else</span> rechts = mitte - 1;
    }
    <span style="color:#60a5fa;">return</span> -1;
}
<span style="color:#94a3b8;">// Laufzeit: O(log n) – extrem schnell auch bei großen Arrays</span>
</pre>
      ${renderCompare({
        titleA: 'Lineare Suche',
        titleB: 'Binärsuche',
        listA: [
          'Funktioniert auf unsortierten Arrays',
          'Laufzeit O(n)',
          'Einfach zu implementieren',
          'Keine Voraussetzungen',
        ],
        listB: [
          'Benötigt sortiertes Array',
          'Laufzeit O(log n)',
          'Deutlich schneller für große n',
          'Aufwand für Sortieren vorher (O(n log n))',
        ],
      })}
    </div>`;
  }

  _panelUebungen() {
    return `<div class="wim-category hidden" data-wim-cat="uebungen">
      <h3 class="lz-h3">Übungsaufgaben</h3>
      ${renderAccordion([
        {
          title: 'A1: Was ist die Laufzeit von Bubblesort im besten Fall? Wie kann man ihn optimieren?',
          content: `Beste Laufzeit O(n) wenn das Array bereits sortiert ist – durch eine Flagge, die bei keinem Tausch die Schleife vorzeitig beendet.<br>
          Optimierter Bubblesort: <code>bool swapped;</code> in der äußeren Schleife, nach innerer Schleife abbrechen wenn <code>!swapped</code>.`,
        },
        {
          title: 'A2: Implementiere eine Funktion, die ein Array umkehrt (reverse).',
          content: `<pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:1rem;border-radius:8px;">
<span style="color:#60a5fa;">void</span> reverse(<span style="color:#60a5fa;">int</span> arr[], <span style="color:#60a5fa;">int</span> n) {
    <span style="color:#60a5fa;">for</span> (<span style="color:#60a5fa;">int</span> i = 0; i < n/2; i++) {
        <span style="color:#60a5fa;">int</span> temp = arr[i];
        arr[i] = arr[n-1-i];
        arr[n-1-i] = temp;
    }
}</pre>`,
        },
        {
          title: 'A3: Wie viele Vergleiche benötigt die Binärsuche im schlimmsten Fall für ein Array mit 1.000.000 Elementen?',
          content: `⌈log₂(1.000.000)⌉ ≈ 20 Vergleiche. Die lineare Suche bräuchte im Worst Case 1.000.000 Vergleiche.`,
        },
        {
          title: 'A4: Wann ist Insertionsort schneller als Quicksort?',
          content: `Bei sehr kleinen Arrays (< 50 Elemente) oder fast sortierten Arrays. Viele Quicksort‑Implementierungen wechseln für kleine Teilarrays zu Insertionsort.`,
        },
      ])}
      ${renderInfobox({ icon: 'fas fa-graduation-cap', title: 'Algorithmen für die Prüfung', type: 'success',
        body: `Sortieren: Bubblesort, Selectionsort, Insertionsort (einfach, O(n²)). Quicksort und Mergesort (effizient, O(n log n)).<br>
               Suchen: Lineare Suche (O(n)), Binärsuche (O(log n), benötigt sortiertes Array).<br>
               Laufzeiten mit Big‑O abschätzen können.` })}
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