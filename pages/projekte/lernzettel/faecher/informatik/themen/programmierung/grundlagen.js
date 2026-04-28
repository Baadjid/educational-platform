// pages/projekte/lernzettel/faecher/informatik/themen/programmierung/grundlagen.js
// Informatik 4.1 — Grundlagen höherer Programmiersprachen (C/C++)

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
  prev: { label: '3.5 USB, CAN & Ethernet', link: `${BASE}/themen/schnittstellen/usb-can` },
  next: { label: '4.2 Algorithmen & Sortieren', link: `${BASE}/themen/programmierung/algorithmen` },
};

const TABS = [
  { key: 'ueberblick',   label: '📖 Überblick' },
  { key: 'datentypen',   label: '📊 Datentypen' },
  { key: 'kontrollstrukturen', label: '🔄 Kontrollstrukturen' },
  { key: 'funktionen',   label: '⚙ Funktionen' },
  { key: 'zeiger',       label: '📍 Zeiger & Arrays' },
  { key: 'uebungen',     label: '✏ Übungen' },
];

export default class GrundlagenPage {
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
            <span>4.1 · Programmier-Grundlagen</span>
          </nav>
          <h1 class="lz-sub-title">Grundlagen höherer Programmiersprachen</h1>
          <p class="lz-sub-subtitle">C/C++ – Datentypen, Kontrollstrukturen, Funktionen, Zeiger</p>
          ${renderTags(['C', 'C++', 'Datentypen', 'Schleifen', 'Funktionen', 'Zeiger', 'BPE 4'])}
        </div>
      </section>
      <section class="lz-content-section">
        <div class="lz-section-wrap">
          <nav class="wim-tabs" id="grundlagenTabs" aria-label="Programmier-Grundlagen">
            ${TABS.map((t, i) => `<button class="wim-tab${i === 0 ? ' active' : ''}" data-wim="${t.key}">${t.label}</button>`).join('')}
          </nav>
          ${this._panelUeberblick()}
          ${this._panelDatentypen()}
          ${this._panelKontrollstrukturen()}
          ${this._panelFunktionen()}
          ${this._panelZeiger()}
          ${this._panelUebungen()}
        </div>
      </section>
      <section class="lz-content-section" style="padding-top:0;">
        <div class="lz-section-wrap">${renderPageNav(NAV)}</div>
      </section>
      ${footerHTML(this.router)}`;
  }

  _panelUeberblick() {
    return `<div class="wim-category active" data-wim-cat="ueberblick">
      ${renderInfobox({ icon: 'fas fa-code', title: 'Was ist eine höhere Programmiersprache?', type: 'info',
        body: `Höhere Sprachen (C, C++, Python, Java) abstrahieren von der Maschinenhardware.
               Sie verwenden menschenlesbare Syntax, Datentypen, Kontrollstrukturen und Funktionen.
               Ein Compiler übersetzt sie in Maschinencode. C/C++ ist besonders hardwarenah und effizient.` })}
      <h3 class="lz-h3">C vs. C++ – Die wichtigsten Unterschiede</h3>
      ${renderCompare({
        titleA: '⚙ C (prozedural)',
        titleB: '🖥 C++ (objektorientiert)',
        listA: [
          'Prozedurale Programmierung',
          'Keine Klassen / Objekte',
          'Structs nur mit Daten',
          'malloc/free für dynamischen Speicher',
          'Keine Standard‑Template‑Bibliothek (STL)',
          'Häufig in Embedded‑Systemen',
        ],
        listB: [
          'Objektorientiert (Klassen, Vererbung, Polymorphie)',
          'Klassen mit Methoden und Konstruktoren',
          'new/delete (bzw. smart pointer)',
          'STL: vector, string, map, algorithm',
          'RAII (Resource Acquisition Is Initialization)',
          'Arduino verwendet C++ (aber eingeschränkt)',
        ],
      })}
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:1.5rem;border-radius:10px;font-family:monospace;font-size:.85rem;line-height:1.7;">
<span style="color:#94a3b8;">// Minimales C++ Programm</span>
<span style="color:#60a5fa;">#include</span> <span style="color:#fbbf24;">&lt;iostream&gt;</span>

<span style="color:#60a5fa;">int</span> main() {
    std::cout << <span style="color:#fbbf24;">"Hallo Welt!"</span> << std::endl;
    <span style="color:#60a5fa;">return</span> 0;
}

<span style="color:#94a3b8;">// Gleiches in C</span>
<span style="color:#60a5fa;">#include</span> <span style="color:#fbbf24;">&lt;stdio.h&gt;</span>
<span style="color:#60a5fa;">int</span> main() {
    printf(<span style="color:#fbbf24;">"Hallo Welt!\\n"</span>);
    <span style="color:#60a5fa;">return</span> 0;
}</pre>
    </div>`;
  }

  _panelDatentypen() {
    return `<div class="wim-category hidden" data-wim-cat="datentypen">
      <h3 class="lz-h3">Primitive Datentypen (C/C++)</h3>
      ${renderTable({
        headers: ['Typ', 'Größe (typisch)', 'Wertebereich', 'Formatbeispiel'],
        rows: [
          ['<code>bool</code>', '1 Byte', '<code>true</code> / <code>false</code>', '<code>bool flag = true;</code>'],
          ['<code>char</code>', '1 Byte', '-128 bis 127 (signed) oder 0‑255', '<code>char buchstabe = \'A\';</code>'],
          ['<code>int</code>', '2‑4 Byte', '-32.768 bis 32.767 (16 Bit) oder ±2 Mrd. (32 Bit)', '<code>int zahl = 42;</code>'],
          ['<code>unsigned int</code>', '2‑4 Byte', '0‑65.535 (16 Bit) oder 0‑4,3 Mrd.', '<code>unsigned int u = 1000U;</code>'],
          ['<code>long</code>', '4‑8 Byte', 'plattformabhängig (mind. 32 Bit)', '<code>long gro = 100000L;</code>'],
          ['<code>float</code>', '4 Byte', '±1,18E‑38 bis ±3,4E+38', '<code>float pi = 3.1415f;</code>'],
          ['<code>double</code>', '8 Byte', '±2,23E‑308 bis ±1,79E+308', '<code>double genauer = 3.1415926535;</code>'],
          ['<code>void</code>', '0 Byte', 'kein Wert', '<code>void funktion();</code>'],
        ],
      })}
      <h4 class="lz-h4">Modifizierer</h4>
      ${renderTable({
        headers: ['Modifizierer', 'Wirkung', 'Beispiel'],
        rows: [
          ['<code>signed</code>', 'Vorzeichen behalten (Standard bei int/char)', '<code>signed char c = -5;</code>'],
          ['<code>unsigned</code>', 'Nur nicht‑negative Zahlen', '<code>unsigned int pos = 255;</code>'],
          ['<code>short</code>', 'Kleiner (mind. 16 Bit)', '<code>short s = 32000;</code>'],
          ['<code>long</code>', 'Größer (mind. 32 Bit)', '<code>long l = 100000L;</code>'],
          ['<code>const</code>', 'Konstante (nicht veränderbar)', '<code>const float G = 9.81f;</code>'],
          ['<code>static</code>', 'Lebensdauer über Funktionsaufrufe hinaus', '<code>static int zaehler = 0;</code>'],
          ['<code>volatile</code>', 'Verhindert Optimierungen (für ISR/Register)', '<code>volatile uint8_t flag;</code>'],
        ],
      })}
      ${renderInfobox({ icon: 'fas fa-microchip', title: 'AVR‑spezifische Typen (stdint.h)', type: 'info',
        body: `<code>uint8_t</code> (unsigned 8 Bit), <code>int16_t</code> (signed 16 Bit), <code>uint32_t</code> (unsigned 32 Bit).
               Diese sind plattformunabhängig und in der Embedded‑Programmierung Pflicht.` })}
    </div>`;
  }

  _panelKontrollstrukturen() {
    return `<div class="wim-category hidden" data-wim-cat="kontrollstrukturen">
      <h3 class="lz-h3">Bedingte Anweisungen</h3>
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:1.5rem;border-radius:10px;font-family:monospace;font-size:.85rem;line-height:1.7;">
<span style="color:#94a3b8;">// if‑else</span>
<span style="color:#60a5fa;">if</span> (temperatur > 30) {
    Serial.println(<span style="color:#fbbf24;">"Heiß!"</span>);
} <span style="color:#60a5fa;">else if</span> (temperatur < 10) {
    Serial.println(<span style="color:#fbbf24;">"Kalt!"</span>);
} <span style="color:#60a5fa;">else</span> {
    Serial.println(<span style="color:#fbbf24;">"Angenehm"</span>);
}

<span style="color:#94a3b8;">// switch‑case</span>
<span style="color:#60a5fa;">switch</span> (zustand) {
    <span style="color:#60a5fa;">case</span> 0:
        ausgabe = <span style="color:#fbbf24;">"AUS"</span>;
        <span style="color:#60a5fa;">break</span>;
    <span style="color:#60a5fa;">case</span> 1:
        ausgabe = <span style="color:#fbbf24;">"AN"</span>;
        <span style="color:#60a5fa;">break</span>;
    <span style="color:#60a5fa;">default</span>:
        ausgabe = <span style="color:#fbbf24;">"Unbekannt"</span>;
}</pre>
      <h4 class="lz-h4">Schleifen</h4>
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:1.5rem;border-radius:10px;font-family:monospace;font-size:.85rem;line-height:1.7;">
<span style="color:#94a3b8;">// for‑Schleife (Zählschleife)</span>
<span style="color:#60a5fa;">for</span> (<span style="color:#60a5fa;">int</span> i = 0; i < 10; i++) {
    summe += i;
}

<span style="color:#94a3b8;">// while‑Schleife (kopfgesteuert)</span>
<span style="color:#60a5fa;">while</span> (sensorWert > schwellwert) {
    regelung();
    sensorWert = messen();
}

<span style="color:#94a3b8;">// do‑while (fußgesteuert – mindestens einmal)</span>
<span style="color:#60a5fa;">do</span> {
    taster = digitalRead(tasterPin);
} <span style="color:#60a5fa;">while</span> (taster == LOW);

<span style="color:#94a3b8;">// break / continue</span>
<span style="color:#60a5fa;">for</span> (<span style="color:#60a5fa;">int</span> i = 0; i < 100; i++) {
    <span style="color:#60a5fa;">if</span> (i == 50) <span style="color:#60a5fa;">break</span>;        <span style="color:#94a3b8;">// Schleife abbrechen</span>
    <span style="color:#60a5fa;">if</span> (i % 2 == 0) <span style="color:#60a5fa;">continue</span>;    <span style="color:#94a3b8;">// Gerade überspringen</span>
    verarbeite(i);
}</pre>
    </div>`;
  }

  _panelFunktionen() {
    return `<div class="wim-category hidden" data-wim-cat="funktionen">
      <h3 class="lz-h3">Funktionen – Wiederverwendbare Codeblöcke</h3>
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:1.5rem;border-radius:10px;font-family:monospace;font-size:.85rem;line-height:1.7;">
<span style="color:#94a3b8;">// Funktionsdeklaration (Prototyp)</span>
<span style="color:#60a5fa;">int</span> addiere(<span style="color:#60a5fa;">int</span> a, <span style="color:#60a5fa;">int</span> b);

<span style="color:#94a3b8;">// Funktionsdefinition</span>
<span style="color:#60a5fa;">int</span> addiere(<span style="color:#60a5fa;">int</span> a, <span style="color:#60a5fa;">int</span> b) {
    <span style="color:#60a5fa;">return</span> a + b;
}

<span style="color:#94a3b8;">// Aufruf</span>
<span style="color:#60a5fa;">int</span> ergebnis = addiere(5, 3);

<span style="color:#94a3b8;">// Übergabe per Referenz (C++) – ändert Originalvariable</span>
<span style="color:#60a5fa;">void</span> tausche(<span style="color:#60a5fa;">int</span>& x, <span style="color:#60a5fa;">int</span>& y) {
    <span style="color:#60a5fa;">int</span> tmp = x;
    x = y;
    y = tmp;
}

<span style="color:#94a3b8;">// Standardparameter (C++)</span>
<span style="color:#60a5fa;">void</span> blink(<span style="color:#60a5fa;">int</span> pin, <span style="color:#60a5fa;">int</span> dauer = 100) {
    digitalWrite(pin, HIGH);
    delay(dauer);
    digitalWrite(pin, LOW);
}
blink(13);        <span style="color:#94a3b8;">// dauer = 100</span>
blink(13, 500);   <span style="color:#94a3b8;">// dauer = 500</span></pre>
      ${renderInfobox({ icon: 'fas fa-layer-group', title: 'Call‑by‑Value vs. Call‑by‑Reference', type: 'info',
        body: `<strong>Call‑by‑Value:</strong> Kopie des Werts – Änderungen in Funktion haben keine Auswirkung außerhalb.<br>
               <strong>Call‑by‑Reference (C++):</strong> Übergabe per <code>&</code> – Funktion arbeitet direkt mit Original.<br>
               <strong>Call‑by‑Pointer (C):</strong> Übergabe der Adresse (<code>*</code>) – manuelles Dereferenzieren.` })}
    </div>`;
  }

  _panelZeiger() {
    return `<div class="wim-category hidden" data-wim-cat="zeiger">
      <h3 class="lz-h3">Zeiger (Pointer) – Adressen direkt manipulieren</h3>
      <p class="lz-prose">
        Zeiger speichern Speicheradressen. Sie sind fundamental für dynamischen Speicher,
        Arrays und hardwarenahe Programmierung (Registerzugriff).
      </p>
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:1.5rem;border-radius:10px;font-family:monospace;font-size:.85rem;line-height:1.7;">
<span style="color:#60a5fa;">int</span> wert = 42;
<span style="color:#60a5fa;">int</span>* ptr = &wert;        <span style="color:#94a3b8;">// ptr zeigt auf Adresse von wert</span>
*ptr = 100;              <span style="color:#94a3b8;">// wert ist jetzt 100 (Dereferenzierung)</span>

<span style="color:#94a3b8;">// Zeiger auf Arrays (Arithmetik)</span>
<span style="color:#60a5fa;">int</span> arr[5] = {10, 20, 30, 40, 50};
<span style="color:#60a5fa;">int</span>* p = arr;            <span style="color:#94a3b8;">// zeigt auf arr[0]</span>
<span style="color:#60a5fa;">int</span> dritter = *(p + 2);  <span style="color:#94a3b8;">// arr[2] = 30</span>

<span style="color:#94a3b8;">// Dynamischer Speicher (Heap) – C++</span>
<span style="color:#60a5fa;">int</span>* dyn = <span style="color:#60a5fa;">new int</span>(5);    <span style="color:#94a3b8;">// Speicher allokieren</span>
<span style="color:#60a5fa;">delete</span> dyn;               <span style="color:#94a3b8;">// Freigeben (sonst Memory Leak!)</span>

<span style="color:#94a3b8;">// Dynamischer Speicher – C (malloc/free)</span>
<span style="color:#60a5fa;">int</span>* dyn_c = (<span style="color:#60a5fa;">int</span>*)malloc(<span style="color:#60a5fa;">sizeof</span>(<span style="color:#60a5fa;">int</span>));
*dyn_c = 5;
free(dyn_c);

<span style="color:#94a3b8;">// Nullpointer (zeigt auf nichts)</span>
<span style="color:#60a5fa;">int</span>* nix = nullptr;      <span style="color:#94a3b8;">// C++11</span>
<span style="color:#60a5fa;">int</span>* nix_c = NULL;       <span style="color:#94a3b8;">// C</span>
</pre>
      ${renderInfobox({ icon: 'fas fa-exclamation-triangle', title: 'Häufige Zeigerfehler', type: 'warning',
        body: `• <strong>Dangling Pointer:</strong> Zeiger zeigt auf bereits freigegebenen Speicher.<br>
               • <strong>Memory Leak:</strong> Speicher nicht freigegeben (kein delete/free).<br>
               • <strong>Null‑Pointer‑Dereferenzierung:</strong> Zugriff auf Adresse 0 → Programmabsturz.<br>
               • <strong>Buffer Overflow:</strong> Schreiben über Array‑Grenzen hinaus.` })}
    </div>`;
  }

  _panelUebungen() {
    return `<div class="wim-category hidden" data-wim-cat="uebungen">
      <h3 class="lz-h3">Übungsaufgaben</h3>
      ${renderAccordion([
        {
          title: 'A1: Schreibe eine Funktion, die prüft, ob eine Zahl eine Primzahl ist.',
          content: `<pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:1rem;border-radius:8px;">
<span style="color:#60a5fa;">bool</span> istPrimzahl(<span style="color:#60a5fa;">int</span> n) {
    <span style="color:#60a5fa;">if</span> (n <= 1) <span style="color:#60a5fa;">return false</span>;
    <span style="color:#60a5fa;">for</span> (<span style="color:#60a5fa;">int</span> i = 2; i * i <= n; i++) {
        <span style="color:#60a5fa;">if</span> (n % i == 0) <span style="color:#60a5fa;">return false</span>;
    }
    <span style="color:#60a5fa;">return true</span>;
}</pre>`,
        },
        {
          title: 'A2: Was ist der Unterschied zwischen <code>int* ptr</code> und <code>int& ref</code>?',
          content: `<strong><code>int* ptr</code></strong> ist ein Zeiger. Er kann umgebogen werden (auf andere Variable zeigen) und muss dereferenziert werden (<code>*ptr</code>). Kann nullptr sein.<br>
          <strong><code>int& ref</code></strong> ist eine Referenz (nur C++). Sie ist ein Alias und muss bei Erstellung initialisiert werden. Kann nicht umgebogen werden und ist nie nullptr.`,
        },
        {
          title: 'A3: Erkläre den Begriff "Call‑by‑Value" und "Call‑by‑Reference" anhand eines Beispiels.',
          content: `<strong>Call‑by‑Value:</strong> Die Funktion erhält eine Kopie. Änderungen bleiben lokal.<br>
          <code>void increment(int x) { x++; }</code> → Aufruf <code>int a=5; increment(a);</code> → a bleibt 5.<br>
          <strong>Call‑by‑Reference (C++):</strong> <code>void increment(int& x) { x++; }</code> → a wird 6.`,
        },
        {
          title: 'A4: Wozu dient das Schlüsselwort <code>volatile</code> in der Embedded‑Programmierung?',
          content: `Verhindert, dass der Compiler Zugriffe auf eine Variable optimiert (z.B. durch Weglassen oder Caching in Registern).
          Notwendig für Variablen, die sich außerhalb des normalen Programmflusses ändern können (Interrupt‑Service‑Routinen, Hardware‑Register).`,
        },
      ])}
      ${renderInfobox({ icon: 'fas fa-graduation-cap', title: 'Grundlagen für die Prüfung', type: 'success',
        body: `Datentypen: int, char, float, double, unsigned, const, volatile.<br>
               Kontrollstrukturen: if, switch, for, while, do‑while.<br>
               Funktionen: Parameterübergabe (Value/Reference/Pointer), Rückgabewerte.<br>
               Zeiger: Adressoperator (&), Dereferenzierung (*), Zeigerarithmetik.<br>
               Dynamischer Speicher: new/delete (C++), malloc/free (C).` })}
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