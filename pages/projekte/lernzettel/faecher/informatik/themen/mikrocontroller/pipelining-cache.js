// pages/projekte/lernzettel/faecher/informatik/themen/mikrocontroller/pipelining-cache.js
// Informatik 2.6 — Pipelining, Caches & Multicore-Architekturen

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
  prev: { label: '2.5 Assembler & PAP', link: `${BASE}/themen/mikrocontroller/assembler` },
  next: { label: '3.1 GPIO', link: `${BASE}/themen/schnittstellen/gpio` },
};

const TABS = [
  { key: 'pipelining', label: '🔄 Pipelining' },
  { key: 'hazards',    label: '⚠ Hazards' },
  { key: 'cache',      label: '💾 Cache' },
  { key: 'multicore',  label: '🖥 Multicore' },
  { key: 'uebungen',   label: '✏ Übungen' },
];

export default class PipeliningCachePage {
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
            <span>2.6 · Pipelining & Cache</span>
          </nav>
          <h1 class="lz-sub-title">Pipelining, Caches & Multicore</h1>
          <p class="lz-sub-subtitle">Pipeline-Stufen, Hazards, Cache-Hierarchie, Mehrkernarchitekturen</p>
          ${renderTags(['Pipelining', 'Cache', 'Hazard', 'Multicore', 'IPC', 'SIMD', 'BPE 2'])}
        </div>
      </section>
      <section class="lz-content-section">
        <div class="lz-section-wrap">
          <nav class="wim-tabs" id="pipeliningTabs" aria-label="Pipelining & Cache">
            ${TABS.map((t, i) => `<button class="wim-tab${i === 0 ? ' active' : ''}" data-wim="${t.key}">${t.label}</button>`).join('')}
          </nav>
          ${this._panelPipelining()}
          ${this._panelHazards()}
          ${this._panelCache()}
          ${this._panelMulticore()}
          ${this._panelUebungen()}
        </div>
      </section>
      <section class="lz-content-section" style="padding-top:0;">
        <div class="lz-section-wrap">${renderPageNav(NAV)}</div>
      </section>
      ${footerHTML(this.router)}`;
  }

  _panelPipelining() {
    return `<div class="wim-category active" data-wim-cat="pipelining">
      ${renderInfobox({ icon: 'fas fa-water', title: 'Was ist Pipelining?', type: 'info',
        body: `<strong>Pipelining</strong> ist eine Technik, bei der die Befehlsausführung in mehrere
               unabhängige Stufen aufgeteilt wird. Während Stufe 1 den nächsten Befehl holt,
               führt Stufe 2 den aktuellen aus — wie eine Fabrik-Fließband.` })}
      <h3 class="lz-h3">5-stufige klassische RISC-Pipeline</h3>
      ${renderTable({
        headers: ['Stufe', 'Kürzel', 'Aufgabe'],
        rows: [
          ['1 — Fetch', 'IF', 'Befehl aus Speicher (Cache) laden, PC inkrementieren'],
          ['2 — Decode', 'ID', 'Befehl decodieren, Operanden aus Register-File lesen'],
          ['3 — Execute', 'EX', 'ALU-Operation ausführen oder Speicheradresse berechnen'],
          ['4 — Memory', 'MEM', 'Speicher lesen (LOAD) oder schreiben (STORE)'],
          ['5 — Write Back', 'WB', 'Ergebnis ins Register-File zurückschreiben'],
        ],
      })}
      <h4 class="lz-h4">Pipeline-Diagramm (ohne Hazards)</h4>
      ${renderTable({
        headers: ['Takt', 'T1', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'],
        rows: [
          ['Befehl 1', 'IF', 'ID', 'EX', 'MEM', 'WB', '', ''],
          ['Befehl 2', '', 'IF', 'ID', 'EX', 'MEM', 'WB', ''],
          ['Befehl 3', '', '', 'IF', 'ID', 'EX', 'MEM', 'WB'],
        ],
      })}
      ${renderFormulaBox({
        label: 'Pipeline-Durchsatz',
        formula: 'IPC (Instructions per Clock) ≈ 1 bei idealer Pipeline',
        desc: 'Ohne Pipeline: N Befehle × 5 Takte = 5N Takte. Mit Pipeline: N + 4 Takte (fast N Takte für N >> 1)',
      })}
      <h4 class="lz-h4">AVR 2-stufige Pipeline</h4>
      <p class="lz-prose">
        Der AVR hat eine vereinfachte 2-stufige Pipeline: Fetch und Execute überlappend.
        Die meisten Befehle brauchen 1 Takt. Sprünge verursachen 1–3 Takt Penalty (Pipeline-Flush).
      </p>
    </div>`;
  }

  _panelHazards() {
    return `<div class="wim-category hidden" data-wim-cat="hazards">
      <h3 class="lz-h3">Pipeline-Hazards (Konflikte)</h3>
      <p class="lz-prose">
        <strong>Hazards</strong> sind Situationen, bei denen die Pipeline nicht reibungslos fließen kann.
        Sie verursachen <strong>Stalls</strong> (Wartetakte = "Bubbles").
      </p>
      ${renderTable({
        headers: ['Hazard-Typ', 'Ursache', 'Lösung'],
        rows: [
          ['Data Hazard (RAW)', 'Befehl braucht Ergebnis des Vorgängers (Read After Write)', 'Forwarding/Bypassing: Ergebnis direkt weitergeben ohne WB abzuwarten'],
          ['Data Hazard (WAW)', 'Zwei Befehle schreiben dasselbe Register (Write After Write)', 'Out-of-Order-Execution, Registerumbenennung'],
          ['Control Hazard', 'Sprungbefehl — wohin fließt die Pipeline? Unbekannt bis EX', 'Branch Prediction: Schätze Sprungziel vorher'],
          ['Structural Hazard', 'Zwei Befehle brauchen dieselbe Hardware-Einheit gleichzeitig', 'Mehr Hardware-Einheiten (z.B. 2 ALUs), oder Stall'],
        ],
      })}
      <h4 class="lz-h4">Forwarding (Bypassing) — Data Hazard lösen</h4>
      ${renderInfobox({ icon: 'fas fa-share-alt', title: 'Ergebnis direkt weiterleiten', type: 'info',
        body: `<strong>Ohne Forwarding:</strong> ADD R1, R2, R3 / SUB R4, R1, R5 → Warten bis R1 in WB (2 Stalls!)<br>
               <strong>Mit Forwarding:</strong> Ergebnis der ADD-EX-Stufe direkt zur SUB-EX-Stufe leiten → 0 Stalls.<br>
               Hardware-Zusatzschaltung vergleicht Register-Nummern und routet Ergebnisse direkt.` })}
      <h4 class="lz-h4">Branch Prediction — Control Hazard</h4>
      ${renderTable({
        headers: ['Strategie', 'Beschreibung', 'Trefferrate'],
        rows: [
          ['Statisch: "always not taken"', 'Nehme an, Sprung wird nicht ausgeführt', '~60 % (Schleifen-Rückwärtssprünge falsch)'],
          ['Statisch: "backwards taken"', 'Rückwärtssprünge (Schleifen) = taken, Vorwärts = not taken', '~75 %'],
          ['Dynamisch: 2-Bit Sättigung', 'Hardware lernt aus letzten Sprungentscheidungen', '~90–95 %'],
          ['Moderne Prädiktoren', 'Neuronale Netze, TAGE-Prädiktor', '>99 %'],
        ],
      })}
    </div>`;
  }

  _panelCache() {
    return `<div class="wim-category hidden" data-wim-cat="cache">
      <h3 class="lz-h3">Cache-Speicher</h3>
      ${renderInfobox({ icon: 'fas fa-tachometer-alt', title: 'Problem: CPU zu schnell, RAM zu langsam', type: 'info',
        body: `Moderne CPUs: 3 GHz+. DRAM-Zugriffszeit: ~100 ns = 300 Taktzyklen Warten!<br>
               Lösung: <strong>Cache</strong> — kleiner, extrem schneller SRAM-Puffer direkt auf der CPU.
               Prinzip: <strong>Lokalität</strong> — Programme nutzen dieselben Daten/Code-Bereiche immer wieder.` })}
      <h4 class="lz-h4">Cache-Hierarchie</h4>
      ${renderTable({
        headers: ['Cache-Ebene', 'Kapazität', 'Zugriffszeit', 'Bandbreite', 'Wo'],
        rows: [
          ['Register', '< 1 KB', '< 1 ns (1 Takt)', 'Höchste', 'In der CPU'],
          ['L1-Cache', '32–64 KB', '~1–4 ns (4 Takte)', 'Sehr hoch', 'Pro Core, auf CPU-Die'],
          ['L2-Cache', '256 KB – 1 MB', '~5–12 ns (15 Takte)', 'Hoch', 'Pro Core, auf CPU-Die'],
          ['L3-Cache', '4–64 MB', '~30–50 ns (40 Takte)', 'Mittel', 'Geteilt, auf CPU-Die'],
          ['DRAM', '4–128 GB', '~60–100 ns (200 Takte)', 'Niedrig', 'Extern (DIMM)'],
          ['SSD/NVMe', 'TB', '~50–100 µs', 'Sehr niedrig', 'Extern'],
        ],
      })}
      <h4 class="lz-h4">Cache-Funktionsweise: Hit, Miss, Replacement</h4>
      ${renderMerkboxGrid([
        { icon: 'fas fa-check-circle', title: 'Cache Hit', text: 'Gesuchte Daten sind im Cache → sofortiger Zugriff (1–4 Takte). Hit Rate = Hits / (Hits + Misses).' },
        { icon: 'fas fa-times-circle', title: 'Cache Miss', text: '3 Arten: Cold Miss (erste Zugriff), Conflict Miss (Adress-Kollision), Capacity Miss (Cache voll).' },
        { icon: 'fas fa-trash-alt', title: 'Replacement', text: 'Welche Cache-Zeile wird verdrängt? LRU (Least Recently Used) am häufigsten. Random, FIFO als Alternativen.' },
      ])}
      ${renderTable({
        headers: ['Cache-Abbildung', 'Beschreibung', 'Vorteil', 'Nachteil'],
        rows: [
          ['Direct Mapped', 'Jede Hauptspeicher-Adresse → genau 1 Cache-Position', 'Einfach, schnell', 'Conflict Misses häufig'],
          ['Fully Associative', 'Daten können an beliebige Cache-Position', 'Keine Conflict Misses', 'Teure Hardware (comparatoren)'],
          ['N-Way Set Associative', 'Kompromiss: N Plätze pro Set', 'Gut balanciert', 'Komplexer als Direct Mapped'],
        ],
      })}
    </div>`;
  }

  _panelMulticore() {
    return `<div class="wim-category hidden" data-wim-cat="multicore">
      <h3 class="lz-h3">Multicore-Architekturen</h3>
      ${renderInfobox({ icon: 'fas fa-microchip', title: 'Warum Multicore?', type: 'info',
        body: `Seit ~2004 steigt die Taktfrequenz kaum noch (Wärme-Mauer, Leckströme).
               Lösung: <strong>Mehrere Kerne</strong> auf einem Chip.
               Wichtig: Programme müssen parallelisierbar sein, um von Multicore zu profitieren.` })}
      <h4 class="lz-h4">Amdahls Gesetz — Grenzen der Parallelisierung</h4>
      ${renderFormulaBox({
        label: 'Amdahls Gesetz',
        formula: 'Speedup = 1 / (s + (1−s)/n)',
        desc: 's = sequentieller Anteil, n = Anzahl Kerne. Selbst mit ∞ Kernen: max. Speedup = 1/s',
      })}
      ${renderTable({
        headers: ['Seq. Anteil (s)', '2 Kerne', '4 Kerne', '8 Kerne', '∞ Kerne'],
        rows: [
          ['5% (s=0,05)', '1,90×', '3,48×', '5,93×', '20×'],
          ['10% (s=0,10)', '1,82×', '3,08×', '4,71×', '10×'],
          ['25% (s=0,25)', '1,60×', '2,29×', '2,91×', '4×'],
          ['50% (s=0,50)', '1,33×', '1,60×', '1,78×', '2×'],
        ],
      })}
      <h4 class="lz-h4">Parallelisierungstechniken</h4>
      ${renderTable({
        headers: ['Technik', 'Beschreibung', 'Beispiel'],
        rows: [
          ['Multicore', 'Mehrere CPU-Kerne teilen sich Speicher', 'Intel i9: 24 Kerne, AMD EPYC: 128 Kerne'],
          ['Hyperthreading', 'Pro physischem Kern 2 logische Kerne (2 Registersätze)', 'Intel: jeder Core = 2 Threads'],
          ['SIMD', 'Single Instruction, Multiple Data — Vektor-Operationen', 'AVX-512: 512 Bit breit, 16× float gleichzeitig'],
          ['GPU', 'Tausende einfache Kerne für parallele Berechnungen', 'NVIDIA RTX 4090: 16.384 CUDA-Kerne'],
          ['Out-of-Order', 'CPU führt Befehle außer der Reihe aus wenn möglich', 'ROB (Reorder Buffer) hält Reihenfolge scheinbar ein'],
        ],
      })}
      <h4 class="lz-h4">Cache-Kohärenz bei Multicore</h4>
      ${renderInfobox({ icon: 'fas fa-exclamation-triangle', title: 'Problem: Mehrere Caches, ein Speicher', type: 'warning',
        body: `Core 1 und Core 2 haben je einen L1-Cache. Wenn Core 1 einen Wert schreibt,
               hat Core 2 noch den alten Wert im Cache.<br>
               Lösung: <strong>Cache-Kohärenz-Protokoll</strong> (z.B. MESI: Modified, Exclusive, Shared, Invalid).
               Hardware synchronisiert automatisch — aber mit Overhead.` })}
    </div>`;
  }

  _panelUebungen() {
    return `<div class="wim-category hidden" data-wim-cat="uebungen">
      <h3 class="lz-h3">Übungsaufgaben</h3>
      ${renderAccordion([
        {
          title: 'A1: Wie viele Takte spart eine 5-stufige Pipeline bei 100 Befehlen?',
          content: `Ohne Pipeline: 100 × 5 = 500 Takte<br>
          Mit Pipeline: 5 (Anlaufzeit) + 100 − 1 = 104 Takte ≈ 100 Takte<br>
          Speedup ≈ 500/104 ≈ <strong>4,8×</strong> (theoretisch 5×, Anlauf reduziert es)`,
        },
        {
          title: 'A2: Warum ist Cache wichtig? Berechne Zeit ohne Cache (DRAM 100ns, 3 GHz CPU)',
          content: `Ohne Cache: Jeder Speicherzugriff kostet 100 ns = 100 ns × 3 GHz = 300 Takte<br>
          Mit L1-Cache (Hit Rate 95%, 4 Takte): Eff. Zeit = 0,95 × 4 + 0,05 × 300 = 3,8 + 15 ≈ <strong>19 Takte</strong><br>
          Faktor ~16× schneller durch Cache!`,
        },
        {
          title: 'A3: Amdahl: Programm zu 80% parallelisierbar — Speedup mit 8 Kernen?',
          content: `s = 0,20 (20% sequentiell), n = 8<br>
          Speedup = 1 / (0,20 + (1−0,20)/8) = 1 / (0,20 + 0,10) = 1/0,30 = <strong>3,33×</strong><br>
          Trotz 8 Kernen nur 3,3× schneller — der sequentielle Teil ist der Flaschenhals.`,
        },
        {
          title: 'A4: Was ist ein Data Hazard (RAW) und wie wird er gelöst?',
          content: `<strong>RAW (Read After Write):</strong> Befehl 2 liest ein Register das Befehl 1 noch nicht fertig geschrieben hat.<br>
          Beispiel: ADD R1, R2, R3 (Ergebnis in R1 nach EX) | SUB R4, R1, R5 (braucht R1 in EX)<br>
          Lösung: <strong>Forwarding</strong> — Ergebnis aus EX-Stufe direkt zur nächsten EX-Stufe weiterleiten, ohne WB abzuwarten.`,
        },
      ])}
      ${renderInfobox({ icon: 'fas fa-graduation-cap', title: 'Pipelining & Cache für die Prüfung', type: 'success',
        body: `Pipeline: Fetch→Decode→Execute→Memory→WriteBack. Hazards: Data (RAW), Control (Branch), Structural.<br>
               Cache: L1 (schnell, klein) → L2 → L3 → DRAM (langsam, groß). Hit Rate optimieren.<br>
               Amdahl: Speedup begrenzt durch sequentiellen Anteil.` })}
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