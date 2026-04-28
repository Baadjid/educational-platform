// pages/projekte/lernzettel/faecher/informatik/themen/mikrocontroller/assembler.js
// Informatik 2.5 — Assembler-Programmierung & PAP

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
  prev: { label: '2.4 Polling vs. Interrupt', link: `${BASE}/themen/mikrocontroller/polling-interrupt` },
  next: { label: '2.6 Pipelining & Cache', link: `${BASE}/themen/mikrocontroller/pipelining-cache` },
};

const TABS = [
  { key: 'grundlagen',   label: '📖 Grundlagen' },
  { key: 'befehle',      label: '⚙ AVR-Befehle' },
  { key: 'ablaufsteuer', label: '🔀 Ablaufsteuerung' },
  { key: 'pap',          label: '📊 PAP' },
  { key: 'uebungen',     label: '✏ Übungen' },
];

export default class AssemblerPage {
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
            <span>2.5 · Assembler & PAP</span>
          </nav>
          <h1 class="lz-sub-title">Assembler-Programmierung & PAP</h1>
          <p class="lz-sub-subtitle">AVR-Befehlssatz, Adressierungsarten, Programmablaufpläne</p>
          ${renderTags(['Assembler', 'AVR', 'Opcode', 'Mnemonic', 'PAP', 'Sprungbefehle', 'BPE 2'])}
        </div>
      </section>
      <section class="lz-content-section">
        <div class="lz-section-wrap">
          <nav class="wim-tabs" id="assemblerTabs" aria-label="Assembler & PAP">
            ${TABS.map((t, i) => `<button class="wim-tab${i === 0 ? ' active' : ''}" data-wim="${t.key}">${t.label}</button>`).join('')}
          </nav>
          ${this._panelGrundlagen()}
          ${this._panelBefehle()}
          ${this._panelAblaufsteuerung()}
          ${this._panelPAP()}
          ${this._panelUebungen()}
        </div>
      </section>
      <section class="lz-content-section" style="padding-top:0;">
        <div class="lz-section-wrap">${renderPageNav(NAV)}</div>
      </section>
      ${footerHTML(this.router)}`;
  }

  _panelGrundlagen() {
    return `<div class="wim-category active" data-wim-cat="grundlagen">
      ${renderInfobox({ icon: 'fas fa-terminal', title: 'Was ist Assembler?', type: 'info',
        body: `<strong>Assembler</strong> ist die niedrigste Programmierebene über dem reinen Maschinencode.
               Jeder Assemblerbefehl (Mnemonic) entspricht exakt einem Maschinenbefehl (Opcode).
               Vorteil: Vollständige Hardware-Kontrolle. Nachteil: Aufwändig, nicht portabel.` })}
      <h3 class="lz-h3">Von der Aufgabe zum Maschinencode</h3>
      ${renderTable({
        headers: ['Ebene', 'Beispiel', 'Beschreibung'],
        rows: [
          ['Hochsprache (C)', '<code>a = b + c;</code>', 'Lesbar, portabel, abstrakt'],
          ['Assembler', '<code>ADD R16, R17</code>', 'Ein Mnemonic = ein Maschinenbefehl'],
          ['Maschinencode (Hex)', '<code>0x0F01</code>', 'Binär-Opcode den die CPU versteht'],
          ['Signale', 'Taktpulse, Steuerleitungen', 'Physikalische Umsetzung im Chip'],
        ],
      })}
      <h4 class="lz-h4">Struktur eines AVR-Assembler-Programms</h4>
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:1.5rem;border-radius:10px;font-family:monospace;font-size:.85rem;line-height:1.7;">
.include "m328Pdef.inc"   <span style="color:#94a3b8;">; Register-Definitionen einbinden</span>

.cseg                      <span style="color:#94a3b8;">; Code-Segment (Flash)</span>
.org 0x0000               <span style="color:#94a3b8;">; Start bei Adresse 0</span>
    rjmp main             <span style="color:#94a3b8;">; Reset-Vektor: springe zu main</span>

.org 0x0009               <span style="color:#94a3b8;">; Timer0 Overflow Vektor</span>
    rjmp timer_isr

main:
    ldi R16, 0xFF          <span style="color:#94a3b8;">; R16 = 0xFF</span>
    out DDRB, R16          <span style="color:#94a3b8;">; Port B alles Ausgang</span>
    sei                    <span style="color:#94a3b8;">; Interrupts freischalten</span>
schleife:
    rjmp schleife          <span style="color:#94a3b8;">; Endlosschleife</span>

timer_isr:
    in R0, SREG            <span style="color:#94a3b8;">; SREG sichern</span>
    <span style="color:#94a3b8;">; ... ISR-Code ...</span>
    out SREG, R0           <span style="color:#94a3b8;">; SREG wiederherstellen</span>
    reti                   <span style="color:#94a3b8;">; Return from Interrupt</span></pre>
    </div>`;
  }

  _panelBefehle() {
    return `<div class="wim-category hidden" data-wim-cat="befehle">
      <h3 class="lz-h3">Wichtige AVR-Befehle</h3>
      <h4 class="lz-h4">Datentransfer</h4>
      ${renderTable({
        headers: ['Befehl', 'Syntax', 'Operation', 'Takte'],
        rows: [
          ['LDI', 'LDI Rd, K', 'Rd ← K (Konstante, nur R16–R31)', '1'],
          ['MOV', 'MOV Rd, Rr', 'Rd ← Rr (Register kopieren)', '1'],
          ['LDS', 'LDS Rd, k', 'Rd ← SRAM[k] (direkt)', '2'],
          ['STS', 'STS k, Rr', 'SRAM[k] ← Rr', '2'],
          ['LD', 'LD Rd, X/Y/Z', 'Rd ← SRAM[X/Y/Z] (indirekt)', '2'],
          ['ST', 'ST X/Y/Z, Rr', 'SRAM[X/Y/Z] ← Rr', '2'],
          ['LPM', 'LPM Rd, Z', 'Rd ← Flash[Z] (Programmspeicher)', '3'],
          ['IN', 'IN Rd, P', 'Rd ← I/O-Register P', '1'],
          ['OUT', 'OUT P, Rr', 'I/O-Register P ← Rr', '1'],
          ['PUSH', 'PUSH Rr', 'Stack ← Rr, SP−−', '2'],
          ['POP', 'POP Rd', 'Rd ← Stack, SP++', '2'],
        ],
      })}
      <h4 class="lz-h4">Arithmetik & Logik</h4>
      ${renderTable({
        headers: ['Befehl', 'Syntax', 'Operation', 'Flags'],
        rows: [
          ['ADD', 'ADD Rd, Rr', 'Rd ← Rd + Rr', 'Z, C, N, V, H, S'],
          ['ADC', 'ADC Rd, Rr', 'Rd ← Rd + Rr + C (mit Carry)', 'Z, C, N, V, H, S'],
          ['SUB', 'SUB Rd, Rr', 'Rd ← Rd − Rr', 'Z, C, N, V, H, S'],
          ['INC', 'INC Rd', 'Rd ← Rd + 1 (C-Flag bleibt!)', 'Z, N, V, S'],
          ['DEC', 'DEC Rd', 'Rd ← Rd − 1 (C-Flag bleibt!)', 'Z, N, V, S'],
          ['AND', 'AND Rd, Rr', 'Rd ← Rd AND Rr', 'Z, N, V=0, S'],
          ['OR', 'OR Rd, Rr', 'Rd ← Rd OR Rr', 'Z, N, V=0, S'],
          ['EOR', 'EOR Rd, Rr', 'Rd ← Rd XOR Rr', 'Z, N, V=0, S'],
          ['COM', 'COM Rd', 'Rd ← 0xFF − Rd', 'Z, C=1, N, V=0, S'],
          ['CP', 'CP Rd, Rr', 'Rd − Rr, Flags setzen, kein Ergebnis', 'Z, C, N, V, H, S'],
        ],
      })}
    </div>`;
  }

  _panelAblaufsteuerung() {
    return `<div class="wim-category hidden" data-wim-cat="ablaufsteuer">
      <h3 class="lz-h3">Ablaufsteuerung: Sprünge & Schleifen</h3>
      <h4 class="lz-h4">Sprungbefehle</h4>
      ${renderTable({
        headers: ['Befehl', 'Bedingung', 'Ausgelöst wenn…', 'Reichweite'],
        rows: [
          ['RJMP label', 'Nie (unbedingt)', 'Immer', '±2 KB'],
          ['JMP addr', 'Nie (unbedingt)', 'Immer (32-Bit)', 'Gesamter Flash'],
          ['BREQ label', 'Z = 1', 'Letztes Ergebnis = 0 (oder CP: gleich)', '±64 Wörter'],
          ['BRNE label', 'Z = 0', 'Nicht gleich', '±64 Wörter'],
          ['BRLT label', 'N ⊕ V = 1', 'Kleiner als (signed)', '±64 Wörter'],
          ['BRGE label', 'N ⊕ V = 0', 'Größer oder gleich (signed)', '±64 Wörter'],
          ['BRCS label', 'C = 1', 'Carry gesetzt (unsigned kleiner)', '±64 Wörter'],
          ['BRCC label', 'C = 0', 'Kein Carry (unsigned größer/gleich)', '±64 Wörter'],
          ['CALL addr', '—', 'Unterprogramm-Aufruf, PC auf Stack', 'Gesamter Flash'],
          ['RET', '—', 'Rückkehr von Unterprogramm', '—'],
        ],
      })}
      <h4 class="lz-h4">Schleifenbeispiele in AVR-Assembler</h4>
      ${renderAccordion([
        {
          title: 'Zählschleife: 10 Mal ausführen',
          content: `<pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:1rem;border-radius:8px;font-family:monospace;font-size:.85rem;line-height:1.7;">
    ldi  R20, 10          ; Zähler = 10
schleife:
    <span style="color:#94a3b8;">; ... Schleifeninhalt ...</span>
    dec  R20              ; Zähler−−, setzt Z-Flag wenn 0
    brne schleife         ; Wiederhole wenn Z=0 (≠0)
    <span style="color:#94a3b8;">; Schleife ist fertig</span></pre>`,
        },
        {
          title: 'If-Else in Assembler',
          content: `<pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:1rem;border-radius:8px;font-family:monospace;font-size:.85rem;line-height:1.7;">
    <span style="color:#94a3b8;">; if (R16 == R17) goto dann; else goto sonst;</span>
    cp   R16, R17         ; Vergleich: R16 − R17 → Flags
    breq dann             ; Springe wenn Z=1 (gleich)
sonst:
    <span style="color:#94a3b8;">; R16 ≠ R17: Code hier</span>
    rjmp ende
dann:
    <span style="color:#94a3b8;">; R16 = R17: Code hier</span>
ende:</pre>`,
        },
        {
          title: 'Array-Iteration mit X-Pointer',
          content: `<pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:1rem;border-radius:8px;font-family:monospace;font-size:.85rem;line-height:1.7;">
    ldi  XL, lo8(array)   ; Unterst. Byte der Array-Adresse
    ldi  XH, hi8(array)   ; Oberstes Byte
    ldi  R20, 8           ; 8 Elemente
loop:
    ld   R16, X+          ; R16 ← [X], X++
    <span style="color:#94a3b8;">; Verarbeitung von R16</span>
    dec  R20
    brne loop</pre>`,
        },
      ])}
    </div>`;
  }

  _panelPAP() {
    return `<div class="wim-category hidden" data-wim-cat="pap">
      <h3 class="lz-h3">PAP — Programmablaufplan</h3>
      <p class="lz-prose">
        Ein <strong>PAP (DIN 66001)</strong> ist ein grafisches Werkzeug zur Darstellung von Algorithmen.
        Er zeigt den Ablauf eines Programms mit standardisierten Symbolen.
      </p>
      ${renderTable({
        headers: ['Symbol', 'Form', 'Bedeutung'],
        rows: [
          ['Start/Ende', 'Abgerundetes Rechteck (Oval)', 'Beginn oder Ende des Programms/Unterprogramms'],
          ['Operation', 'Rechteck', 'Verarbeitung, Zuweisung (z.B. x ← x + 1)'],
          ['Entscheidung', 'Raute (Diamant)', 'Bedingte Verzweigung — Ja/Nein Ausgang'],
          ['E/A', 'Parallelogramm', 'Eingabe oder Ausgabe (Sensor lesen, LED setzen)'],
          ['Unterprogramm', 'Rechteck mit doppelten Seitenlinien', 'Aufruf eines Unterprogramms'],
          ['Verbindung', 'Kleiner Kreis mit Nummer', 'Verbindungspunkt (bei komplexen PAPs)'],
          ['Pfeil', 'Linie mit Pfeilspitze', 'Kontrollfluss — zeigt Richtung des Ablaufs'],
        ],
      })}
      <h4 class="lz-h4">PAP-Beispiel: LED 10 Mal blinken lassen</h4>
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:1.5rem;border-radius:10px;font-family:monospace;font-size:.85rem;line-height:2;text-align:center;">
        ┌──────────┐
        │  START   │
        └────┬─────┘
             │
        ┌────▼─────┐
        │ Zähler=10│
        └────┬─────┘
             │
        ┌────▼─────┐
        │  LED AN  │◄─────────┐
        └────┬─────┘          │
             │                │
        ┌────▼─────┐          │
        │ Warte500ms│          │
        └────┬─────┘          │
             │                │
        ┌────▼─────┐          │
        │ LED AUS  │          │
        └────┬─────┘          │
             │                │
        ┌────▼─────┐          │
        │ Zähler-- │          │
        └────┬─────┘          │
             │                │
          ┌──▼──┐  Ja         │
          │Z>0?│──┘
          └──┬──┘
          Nein│
        ┌────▼─────┐
        │  ENDE   │
        └──────────┘</pre>
      ${renderInfobox({ icon: 'fas fa-graduation-cap', title: 'PAP für die Prüfung', type: 'success',
        body: `PAPs werden oft als Prüfungsaufgabe gegeben: Entweder PAP zu Code, oder Code zu PAP.<br>
               <strong>Wichtig:</strong> Raute hat immer genau 2 Ausgänge (Ja/Nein oder wahr/falsch).<br>
               Schleifen: Entscheidungsraute mit Rücksprungpfeil.` })}
    </div>`;
  }

  _panelUebungen() {
    return `<div class="wim-category hidden" data-wim-cat="uebungen">
      <h3 class="lz-h3">Übungsaufgaben</h3>
      ${renderAccordion([
        {
          title: 'A1: Was macht dieser AVR-Code? (LDI R16, 42; MOV R17, R16; ADD R16, R17)',
          content: `LDI R16, 42 → R16 = 42<br>
          MOV R17, R16 → R17 = 42<br>
          ADD R16, R17 → R16 = 42 + 42 = 84<br>
          Ergebnis: R16 = 84, R17 = 42`,
        },
        {
          title: 'A2: Schreibe AVR-Assembler für: if(R16 > R17) then R16 = 0xFF else R16 = 0x00',
          content: `<pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:1rem;border-radius:8px;font-family:monospace;font-size:.85rem;line-height:1.7;">
    cp  R16, R17      ; Vergleich R16 − R17
    brge dann         ; R16 >= R17 → dann (N⊕V=0)
sonst:
    ldi R16, 0x00     ; R16 < R17 → R16 = 0
    rjmp ende
dann:
    ldi R16, 0xFF     ; R16 >= R17 → R16 = 0xFF
ende:</pre>`,
        },
        {
          title: 'A3: Zeichne PAP für: Summe von 1 bis N berechnen',
          content: `Start → [sum = 0, i = 1] → Raute (i ≤ N?) → Ja: [sum += i] → [i++] → zurück zur Raute
          → Nein: [Ausgabe sum] → Ende<br><br>
          Assembler-Entsprechung:<br>
          <code>ldi R16, 0 (sum) | ldi R17, 1 (i) | ldi R18, N | loop: add R16, R17 | inc R17 | cp R17, R18 | brlo loop</code>`,
        },
      ])}
      ${renderInfobox({ icon: 'fas fa-graduation-cap', title: 'Assembler für die Prüfung', type: 'success',
        body: `<strong>Wichtigste Befehle:</strong> LDI, MOV, ADD, SUB, CP, BREQ, BRNE, RJMP, IN, OUT.<br>
               <strong>Flags:</strong> Z nach CP prüfen → BREQ/BRNE.<br>
               <strong>PAP:</strong> Raute = Entscheidung (2 Ausgänge), Rechteck = Operation.` })}
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