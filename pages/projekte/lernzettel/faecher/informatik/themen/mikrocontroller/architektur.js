// pages/projekte/lernzettel/faecher/informatik/themen/mikrocontroller/architektur.js
// Informatik 2.1 — CPU-Aufbau, ALU, Register & Flags

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
  prev: { label: '1.5 VHDL & FPGAs', link: `${BASE}/themen/digitaltechnik/vhdl-fpga` },
  next: { label: '2.2 Speicher & Bussysteme', link: `${BASE}/themen/mikrocontroller/speicher-bus` },
};

const TABS = [
  { key: 'grundstruktur', label: '🏗 Grundstruktur' },
  { key: 'alu',           label: '⚙ ALU & Flags' },
  { key: 'register',      label: '🗂 Register' },
  { key: 'befehlszyklus', label: '🔄 Befehlszyklus' },
  { key: 'uebungen',      label: '✏ Übungen' },
];

export default class ArchitekturPage {
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
            <span>2.1 · CPU-Architektur</span>
          </nav>
          <h1 class="lz-sub-title">CPU-Aufbau, ALU, Register & Flags</h1>
          <p class="lz-sub-subtitle">Von-Neumann, Harvard, AVR-Architektur, Befehlszyklus</p>
          ${renderTags(['CPU', 'ALU', 'Register', 'Flags', 'AVR', 'Von-Neumann', 'BPE 2'])}
        </div>
      </section>
      <section class="lz-content-section">
        <div class="lz-section-wrap">
          <nav class="wim-tabs" id="architekturTabs" aria-label="CPU-Architektur">
            ${TABS.map((t, i) => `<button class="wim-tab${i === 0 ? ' active' : ''}" data-wim="${t.key}">${t.label}</button>`).join('')}
          </nav>
          ${this._panelGrundstruktur()}
          ${this._panelALU()}
          ${this._panelRegister()}
          ${this._panelBefehlszyklus()}
          ${this._panelUebungen()}
        </div>
      </section>
      <section class="lz-content-section" style="padding-top:0;">
        <div class="lz-section-wrap">${renderPageNav(NAV)}</div>
      </section>
      ${footerHTML(this.router)}`;
  }

  _panelGrundstruktur() {
    return `<div class="wim-category active" data-wim-cat="grundstruktur">
      ${renderInfobox({ icon: 'fas fa-microchip', title: 'Was ist eine CPU?', type: 'info',
        body: `Die <strong>Central Processing Unit (CPU)</strong> ist das Herzstück jedes Computers.
               Sie führt Programmbefehle aus, indem sie Daten aus dem Speicher liest, verarbeitet und zurückschreibt.
               Mikrocontroller vereinen CPU, Speicher und Peripherie auf einem Chip.` })}
      <h3 class="lz-h3">Von-Neumann vs. Harvard-Architektur</h3>
      ${renderCompare({
        titleA: '🔵 Von-Neumann-Architektur',
        titleB: '🟢 Harvard-Architektur',
        listA: [
          'Programm und Daten teilen sich <strong>einen Speicher</strong>',
          'Ein gemeinsamer Bus für beides',
          'Einfacher, flexibler',
          'Bottleneck: Von-Neumann-Flaschenhals',
          'Beispiele: x86 PCs, ARM Cortex-A (vereinfacht)',
          'Programm kann sich selbst modifizieren',
        ],
        listB: [
          'Getrennter <strong>Programm-</strong> und <strong>Datenspeicher</strong>',
          'Zwei unabhängige Busse',
          'Kein Von-Neumann-Flaschenhals',
          'Schnelleres Laden: Befehl & Daten gleichzeitig',
          'Beispiele: AVR, PIC, DSP-Chips',
          'Sicherer: Code nicht überschreibbar',
        ],
      })}
      <h4 class="lz-h4">Grundkomponenten eines Prozessors</h4>
      ${renderTable({
        headers: ['Komponente', 'Abkürzung', 'Funktion'],
        rows: [
          ['Steuerwerk', 'CU (Control Unit)', 'Steuert den Ablauf: lädt Befehle, decodiert sie, koordiniert alle Einheiten'],
          ['Rechenwerk', 'ALU (Arithmetic Logic Unit)', 'Führt Rechenoperationen (+,−,×) und logische Operationen (AND, OR, NOT) aus'],
          ['Registersatz', 'RF (Register File)', 'Kleine, extrem schnelle Speicher direkt in der CPU (typisch 32 × 8-Bit beim AVR)'],
          ['Befehlszähler', 'PC (Program Counter)', 'Zeigt auf den nächsten auszuführenden Befehl im Programmspeicher'],
          ['Befehlsregister', 'IR (Instruction Register)', 'Enthält den aktuell ausgeführten Befehl (nach dem Fetch)'],
          ['Stapelzeiger', 'SP (Stack Pointer)', 'Zeigt auf die Spitze des Stapels (Stack) im RAM'],
          ['Statusregister', 'SREG / Flags', 'Enthält Statusinformationen der letzten ALU-Operation (Zero, Carry, …)'],
        ],
      })}
      <h4 class="lz-h4">AVR-Mikrocontroller-Architektur (ATmega328P)</h4>
      ${renderInfobox({ icon: 'fas fa-info-circle', title: 'AVR = Harvard-Architektur + RISC', type: 'info',
        body: `<strong>Programmspeicher:</strong> Flash, 32 KB, nur lesbar während Ausführung<br>
               <strong>Datenspeicher:</strong> SRAM, 2 KB + Register-File<br>
               <strong>RISC:</strong> Reduced Instruction Set — die meisten Befehle in einem Taktzyklus<br>
               <strong>Pipeline:</strong> 2-stufig (Fetch + Execute gleichzeitig)` })}
    </div>`;
  }

  _panelALU() {
    return `<div class="wim-category hidden" data-wim-cat="alu">
      <h3 class="lz-h3">ALU — Arithmetic Logic Unit</h3>
      <p class="lz-prose">
        Die ALU führt alle arithmetischen und logischen Berechnungen durch.
        Sie bekommt zwei Operanden, eine Operation und liefert ein Ergebnis + Statusbits (Flags).
      </p>
      <h4 class="lz-h4">ALU-Operationen</h4>
      ${renderTable({
        headers: ['Kategorie', 'Operation', 'Beispiel (AVR Befehl)', 'Beschreibung'],
        rows: [
          ['Arithmetisch', 'Addition', 'ADD Rd, Rr', 'Rd ← Rd + Rr'],
          ['Arithmetisch', 'Subtraktion', 'SUB Rd, Rr', 'Rd ← Rd − Rr'],
          ['Arithmetisch', 'Inkrement', 'INC Rd', 'Rd ← Rd + 1'],
          ['Arithmetisch', 'Dekrement', 'DEC Rd', 'Rd ← Rd − 1'],
          ['Logisch', 'UND', 'AND Rd, Rr', 'Rd ← Rd AND Rr (bitweise)'],
          ['Logisch', 'ODER', 'OR Rd, Rr', 'Rd ← Rd OR Rr (bitweise)'],
          ['Logisch', 'Exklusiv-ODER', 'EOR Rd, Rr', 'Rd ← Rd XOR Rr (bitweise)'],
          ['Logisch', 'Komplement', 'COM Rd', 'Rd ← 0xFF − Rd (invertieren)'],
          ['Schieben', 'Logisch rechts', 'LSR Rd', 'Rd ← Rd >> 1 (MSB = 0)'],
          ['Schieben', 'Arithmetisch rechts', 'ASR Rd', 'Rd ← Rd >> 1 (MSB bleibt)'],
        ],
      })}
      <h4 class="lz-h4">Statusregister (SREG) — Flags</h4>
      <p class="lz-prose">
        Nach jeder ALU-Operation werden Statusbits (Flags) im SREG aktualisiert.
        Sie sind wichtig für <strong>bedingte Sprungbefehle</strong>.
      </p>
      ${renderTable({
        headers: ['Bit', 'Name', 'Gesetzt wenn…', 'Verwendung'],
        rows: [
          ['Z', 'Zero Flag', 'Ergebnis = 0', 'Prüfen ob gleich (BREQ — Branch if Equal)'],
          ['C', 'Carry Flag', 'Übertrag aus Bit 7', 'Mehrbyte-Addition, Rotationsoperationen'],
          ['N', 'Negative Flag', 'MSB des Ergebnisses = 1', 'Vorzeichenbehaftete Vergleiche'],
          ['V', 'Overflow Flag', 'Vorzeichenüberlauf (signed)', 'Signed-Arithmetik Fehler erkennen'],
          ['S', 'Sign Flag', 'N ⊕ V', 'Vorzeichenvergleich (BRLT, BRGE)'],
          ['H', 'Half Carry', 'Übertrag aus Bit 3', 'BCD-Arithmetik'],
          ['T', 'Transfer Bit', 'Kopiert von/nach mit BLD/BST', 'Bit-Manipulation'],
          ['I', 'Interrupt Enable', '= 1: Interrupts erlaubt', 'Interrupt-Steuerung (SEI/CLI)'],
        ],
      })}
      ${renderInfobox({ icon: 'fas fa-graduation-cap', title: 'Flags für die Prüfung', type: 'success',
        body: `Z-Flag und C-Flag sind die wichtigsten für Prüfungsaufgaben.<br>
               <code>CP Rd, Rr</code> (Compare) setzt Flags ohne Ergebnis zu speichern.<br>
               <code>BREQ label</code> springt wenn Z=1 (d.h. Rd == Rr).` })}
    </div>`;
  }

  _panelRegister() {
    return `<div class="wim-category hidden" data-wim-cat="register">
      <h3 class="lz-h3">Registersatz (Register File)</h3>
      <p class="lz-prose">
        Der AVR ATmega328P hat <strong>32 allgemeine 8-Bit-Register</strong> (R0–R31).
        Sie sind der schnellste Speicher im System — direkt in der CPU, 1 Taktzyklus Zugriff.
      </p>
      ${renderTable({
        headers: ['Register', 'Name/Funktion', 'Besonderheit'],
        rows: [
          ['R0–R15', 'Allgemeine Register', 'Eingeschränkt: kein ANDI, ORI, SUBI, LDI (nur Konstanten mit R16–R31)'],
          ['R16–R23', 'Allgemeine Register (bevorzugt)', 'Alle ALU-Sofortoperationen möglich'],
          ['R24–R25', 'Allgemein + Wortoperationen', 'ADIW/SBIW: 16-Bit Addition/Subtraktion möglich'],
          ['R26:R27', 'X-Register (XL:XH)', '16-Bit-Zeiger für indirekte Adressierung'],
          ['R28:R29', 'Y-Register (YL:YH)', '16-Bit-Zeiger mit Displacement (LDD, STD)'],
          ['R30:R31', 'Z-Register (ZL:ZH)', '16-Bit-Zeiger + Zugriff auf Flash (LPM-Befehl)'],
        ],
      })}
      <h4 class="lz-h4">Spezialregister</h4>
      ${renderTable({
        headers: ['Register', 'Bits', 'Funktion'],
        rows: [
          ['PC (Program Counter)', '16 Bit', 'Adresse des nächsten Befehls im Flash-Speicher'],
          ['SP (Stack Pointer)', 'SPH:SPL (16 Bit)', 'Zeigt auf Stapelspitze im SRAM'],
          ['SREG (Status Register)', '8 Bit (I,T,H,S,V,N,Z,C)', 'Statusflags der letzten ALU-Operation'],
        ],
      })}
      ${renderMerkboxGrid([
        { icon: 'fas fa-bolt', title: 'Register vs. RAM', text: 'Register: 1 Takt Zugriff. SRAM: 2 Takte. Flash: mehrere Takte. Immer so viel in Registern halten wie möglich!' },
        { icon: 'fas fa-arrows-left-right', title: 'X, Y, Z Pointer', text: 'Für Arrays und Strukturen. Z wird auch für LPM (Load Program Memory) gebraucht — konstante Daten aus Flash laden.' },
        { icon: 'fas fa-layer-group', title: 'Stack Pointer', text: 'Anfangswert: Ende des SRAM (0x08FF beim ATmega328P). PUSH verkleinert SP, POP vergrößert SP.' },
      ])}
    </div>`;
  }

  _panelBefehlszyklus() {
    return `<div class="wim-category hidden" data-wim-cat="befehlszyklus">
      <h3 class="lz-h3">Befehlszyklus: Fetch — Decode — Execute</h3>
      ${renderAccordion([
        {
          title: '1. Fetch — Befehl holen',
          content: `<p>Der Befehlszähler (PC) zeigt auf den nächsten Befehl.<br>
          Befehl wird aus dem Programmspeicher (Flash) in das Befehlsregister (IR) geladen.<br>
          PC wird automatisch inkrementiert: PC ← PC + 1 (oder +2 bei 32-Bit-Befehlen)</p>`,
        },
        {
          title: '2. Decode — Befehl decodieren',
          content: `<p>Das Steuerwerk (CU) interpretiert den Opcode im IR.<br>
          Operanden werden aus dem Registersatz gelesen.<br>
          Steuersignale für ALU und andere Einheiten werden erzeugt.</p>`,
        },
        {
          title: '3. Execute — Befehl ausführen',
          content: `<p>ALU führt die Operation aus (oder Speicherzugriff, oder Sprung).<br>
          Ergebnis wird in Zielregister geschrieben.<br>
          SREG-Flags werden aktualisiert.<br>
          Bei AVR: Fetch des nächsten Befehls <em>überlappend</em> mit Execute (2-stufige Pipeline)!</p>`,
        },
      ])}
      <h4 class="lz-h4">AVR-Pipeline (2-stufig)</h4>
      ${renderTable({
        headers: ['Takt', 'Stufe 1 (Fetch)', 'Stufe 2 (Execute)'],
        rows: [
          ['T1', 'Hole Befehl B1', '—'],
          ['T2', 'Hole Befehl B2', 'Führe B1 aus'],
          ['T3', 'Hole Befehl B3', 'Führe B2 aus'],
          ['T4', 'Hole Befehl B4', 'Führe B3 aus'],
        ],
      })}
      <h4 class="lz-h4">RISC vs. CISC</h4>
      ${renderCompare({
        titleA: '⚡ RISC (Reduced Instruction Set)',
        titleB: '🔧 CISC (Complex Instruction Set)',
        listA: [
          'Wenige, einfache Befehle',
          'Jeder Befehl ~1 Taktzyklus',
          'Viele Register nötig (Daten in Registern)',
          'Nur LOAD/STORE greift auf Speicher zu',
          'Beispiele: AVR, ARM, RISC-V, MIPS',
          'Einfaches Pipeline-Design',
        ],
        listB: [
          'Viele, komplexe Befehle',
          'Befehle brauchen 1–20+ Taktzyklen',
          'Weniger Register nötig',
          'Befehle können direkt auf Speicher zugreifen',
          'Beispiele: x86, x86-64 (Intel/AMD)',
          'Mikroprogrammierte Steuerung',
        ],
      })}
      ${renderInfobox({ icon: 'fas fa-info-circle', title: 'Modern: Die Grenze verschwimmt', type: 'info',
        body: `Moderne Intel/AMD CPUs haben CISC-Befehlssatz (x86), übersetzen intern aber zu RISC-artigen
               Micro-Ops. ARM (RISC) dominiert bei Mobilgeräten und Embedded. Apple M-Serie = ARM.` })}
    </div>`;
  }

  _panelUebungen() {
    return `<div class="wim-category hidden" data-wim-cat="uebungen">
      <h3 class="lz-h3">Übungsaufgaben</h3>
      ${renderAccordion([
        {
          title: 'A1: Welche Architektur hat der AVR ATmega328P?',
          content: `<strong>Harvard-Architektur mit RISC-Befehlssatz.</strong><br>
          Getrennter Flash-Speicher (32 KB, Programm) und SRAM (2 KB, Daten).<br>
          2-stufige Pipeline: Fetch + Execute überlappend. ~1 Befehl/Taktzyklus.`,
        },
        {
          title: 'A2: Nach ADD R16, R17 — welche Flags können sich ändern?',
          content: `Z (Ergebnis=0?), C (Übertrag aus Bit 7?), N (MSB=1?), V (Vorzeichenüberlauf?), H (Übertrag aus Bit 3?), S (N⊕V).<br>
          Beispiel: R16=0xFF, R17=0x01 → Ergebnis=0x00, Z=1, C=1, N=0, V=0.`,
        },
        {
          title: 'A3: Wozu braucht man das Z-Register beim AVR?',
          content: `Z-Register (R30:R31) = 16-Bit-Zeiger.<br>
          1. <strong>Indirekte Adressierung im SRAM</strong>: LD Rd, Z lädt Byte von Adresse Z.<br>
          2. <strong>LPM (Load Program Memory)</strong>: Konstantentabellen aus Flash-Speicher lesen.<br>
          Beim ATmega328P ist Flash 16-Bit-wortweise adressiert, LPM arbeitet byteweise.`,
        },
        {
          title: 'A4: Was passiert bei einem CALL-Befehl?',
          content: `1. Aktuelle PC-Adresse (Rücksprungadresse) wird auf den Stack gelegt (PUSH PC).<br>
          2. SP wird um 2 verringert (16-Bit-Adresse).<br>
          3. PC wird auf die Sprungzieladresse gesetzt.<br>
          Bei RET: PC wird vom Stack geholt (POP PC), SP+2.`,
        },
      ])}
      ${renderInfobox({ icon: 'fas fa-graduation-cap', title: 'CPU-Architektur für die Prüfung', type: 'success',
        body: `<strong>Von-Neumann vs. Harvard:</strong> Geteilter vs. getrennter Speicher — Kernunterschied.<br>
               <strong>RISC vs. CISC:</strong> Einfache Befehle/1 Takt vs. komplexe Befehle/mehrere Takte.<br>
               <strong>Flags:</strong> Z und C sind die wichtigsten für Sprungbefehle.` })}
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