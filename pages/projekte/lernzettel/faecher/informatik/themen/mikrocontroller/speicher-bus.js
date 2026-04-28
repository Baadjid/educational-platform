// pages/projekte/lernzettel/faecher/informatik/themen/mikrocontroller/speicher-bus.js
// Informatik 2.2 — Speicher, Bussysteme & Adressierung

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
  prev: { label: '2.1 CPU-Architektur', link: `${BASE}/themen/mikrocontroller/architektur` },
  next: { label: '2.3 Interrupts & Timer', link: `${BASE}/themen/mikrocontroller/interrupts-timer` },
};

const TABS = [
  { key: 'speichertypen', label: '💾 Speichertypen' },
  { key: 'avr_speicher',  label: '🗂 AVR-Speicher' },
  { key: 'bussysteme',    label: '🔌 Bussysteme' },
  { key: 'adressierung',  label: '📍 Adressierungsarten' },
  { key: 'uebungen',      label: '✏ Übungen' },
];

export default class SpeicherBusPage {
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
            <span>2.2 · Speicher & Bussysteme</span>
          </nav>
          <h1 class="lz-sub-title">Speicher, Bussysteme & Adressierung</h1>
          <p class="lz-sub-subtitle">RAM, ROM, Flash, EEPROM, Harvard, von Neumann, Adressierungsarten</p>
          ${renderTags(['Speicher', 'RAM', 'Flash', 'EEPROM', 'Bus', 'Adressierung', 'BPE 2'])}
        </div>
      </section>
      <section class="lz-content-section">
        <div class="lz-section-wrap">
          <nav class="wim-tabs" id="speicherTabs" aria-label="Speicher & Bus">
            ${TABS.map((t, i) => `<button class="wim-tab${i === 0 ? ' active' : ''}" data-wim="${t.key}">${t.label}</button>`).join('')}
          </nav>
          ${this._panelSpeichertypen()}
          ${this._panelAVRSpeicher()}
          ${this._panelBussysteme()}
          ${this._panelAdressierung()}
          ${this._panelUebungen()}
        </div>
      </section>
      <section class="lz-content-section" style="padding-top:0;">
        <div class="lz-section-wrap">${renderPageNav(NAV)}</div>
      </section>
      ${footerHTML(this.router)}`;
  }

  _panelSpeichertypen() {
    return `<div class="wim-category active" data-wim-cat="speichertypen">
      <h3 class="lz-h3">Überblick Speichertypen</h3>
      ${renderTable({
        headers: ['Typ', 'Flüchtig?', 'Schreibbar?', 'Zugriffszeit', 'Größe', 'Anwendung'],
        rows: [
          ['Register', 'Ja', 'Ja', '< 1 ns', 'Bytes', 'CPU-intern, AVR: 32 × 8 Bit'],
          ['SRAM', 'Ja', 'Ja', '1–10 ns', 'KB–MB', 'Arbeitsspeicher im µC'],
          ['DRAM', 'Ja', 'Ja', '10–100 ns', 'GB', 'PC-Arbeitsspeicher (braucht Refresh)'],
          ['Flash', 'Nein', 'Ja (in Sektoren)', '50–100 ns lesen, ms schreiben', 'KB–GB', 'Programmspeicher µC, USB-Sticks, SSDs'],
          ['EEPROM', 'Nein', 'Ja (byteweise)', 'ms schreiben', 'Bytes–KB', 'Konfigurationsdaten, Kalibrierwerte'],
          ['ROM/PROM', 'Nein', 'Nein / einmalig', '50 ns', 'KB–MB', 'Festwert-Tabellen, Zeichensätze'],
          ['Cache (SRAM)', 'Ja', 'Ja', '< 1 ns', 'KB–MB', 'Puffer zwischen CPU und RAM'],
        ],
      })}
      ${renderMerkboxGrid([
        { icon: 'fas fa-bolt', title: 'Flüchtig (Volatile)', text: 'Inhalt geht verloren wenn Strom weg. SRAM, DRAM, Cache, Register.' },
        { icon: 'fas fa-save', title: 'Nicht-flüchtig (NVM)', text: 'Inhalt bleibt erhalten. Flash, EEPROM, ROM. Für Programmspeicher im Mikrocontroller.' },
        { icon: 'fas fa-tachometer-alt', title: 'Speicherhierarchie', text: 'Register > Cache > SRAM > Flash > HDD: Geschwindigkeit nimmt ab, Kapazität nimmt zu.' },
      ])}
      <h4 class="lz-h4">Flash-Speicher Besonderheiten</h4>
      ${renderTable({
        headers: ['Eigenschaft', 'Wert (AVR ATmega328P)', 'Bedeutung'],
        rows: [
          ['Kapazität', '32 KB', 'Reicht für ~16.000 16-Bit-Befehle'],
          ['Schreib-Einheit', 'Seite (64 Bytes)', 'Muss seitenweise gelöscht und geschrieben werden'],
          ['Endurance', '~10.000 Schreibzyklen', 'Danach degradiert der Speicher — Flash ist nicht für häufiges Schreiben gedacht'],
          ['Lesezugriff', 'Direkter Zugriff', 'CPU liest direkt — kein Umweg über Controller nötig'],
        ],
      })}
    </div>`;
  }

  _panelAVRSpeicher() {
    return `<div class="wim-category hidden" data-wim-cat="avr_speicher">
      <h3 class="lz-h3">AVR ATmega328P Speicherräume</h3>
      ${renderTable({
        headers: ['Speicherraum', 'Größe', 'Adressbereich', 'Zugriff', 'Inhalt'],
        rows: [
          ['Flash (Programmspeicher)', '32 KB', '0x0000–0x3FFF (16-Bit-Wörter)', 'LPM, SPM, direkt durch CPU', 'Programmcode, Konstanten (PROGMEM)'],
          ['SRAM (Datenspeicher)', '2 KB', '0x0100–0x08FF', 'LD/ST, direkter Zugriff', 'Stack, globale Variablen, Heap'],
          ['Register-File', '32 × 1 Byte', '0x0000–0x001F im I/O-Raum', 'ADD, LD, ST, alle ALU-Befehle', 'R0–R31 (allgemeine Register)'],
          ['I/O-Register', '64 Bytes (Standard)', '0x0020–0x005F', 'IN/OUT, SBI/CBI', 'PORT, DDR, PIN, Timer-Register, USART…'],
          ['Ext. I/O-Register', '160 Bytes', '0x0060–0x00FF', 'LDS/STS', 'Erweiterte Peripherieregister'],
          ['EEPROM', '1 KB', 'Eigener Raum', 'EEAR, EEDR, EECR Register', 'Persistente Konfiguration'],
        ],
      })}
      ${renderInfobox({ icon: 'fas fa-exclamation-triangle', title: 'Wichtig: Zwei verschiedene Adressräume!', type: 'warning',
        body: `Beim AVR sind Flash und SRAM <strong>separate Adressräume</strong> (Harvard!).
               Adresse 0x0100 im Flash ist eine andere Adresse als 0x0100 im SRAM.<br>
               Konstanten im Flash werden mit dem Schlüsselwort <code>PROGMEM</code> deklariert
               und mit <code>pgm_read_byte()</code> gelesen.` })}
      <h4 class="lz-h4">Stack im SRAM</h4>
      ${renderTable({
        headers: ['Operation', 'SP-Änderung', 'SRAM-Auswirkung'],
        rows: [
          ['PUSH Rd', 'SP ← SP − 1', 'Byte wird an SP-Adresse geschrieben'],
          ['POP Rd', 'SP ← SP + 1', 'Byte wird von (SP+1)-Adresse gelesen'],
          ['CALL addr', 'SP ← SP − 2', '2-Byte-Rücksprungadresse auf Stack'],
          ['RET', 'SP ← SP + 2', '2-Byte-Rücksprungadresse vom Stack in PC'],
        ],
      })}
      ${renderInfobox({ icon: 'fas fa-info-circle', title: 'Stack wächst nach unten', type: 'info',
        body: `Initialisierung: SP = 0x08FF (Ende des SRAM).<br>
               Jeder PUSH verkleinert SP (Stack wächst in Richtung kleinerer Adressen).<br>
               Stack-Overflow: SP unterschreitet 0x0100 → überschreibt globale Variablen!` })}
    </div>`;
  }

  _panelBussysteme() {
    return `<div class="wim-category hidden" data-wim-cat="bussysteme">
      <h3 class="lz-h3">Bussysteme</h3>
      <p class="lz-prose">
        Ein <strong>Bus</strong> ist ein gemeinsam genutztes Leitungssystem zur Kommunikation
        zwischen CPU, Speicher und Peripherie. Es gibt drei logische Teilbusse:
      </p>
      ${renderTable({
        headers: ['Bus', 'Richtung', 'Breite (typisch)', 'Funktion'],
        rows: [
          ['Adressbus', 'CPU → Speicher/IO (unidirektional)', '16–64 Bit', 'Gibt an, welche Adresse gelesen/geschrieben wird. 16 Bit → 2¹⁶ = 65.536 Adressen.'],
          ['Datenbus', 'Bidirektional', '8, 16, 32, 64 Bit', 'Transportiert die eigentlichen Daten/Befehle.'],
          ['Steuerbus', 'Bidirektional', '4–12 Leitungen', 'R/W̄ (Lesen/Schreiben), CS̄ (Chip Select), CLK, IRQ (Interrupt Request), …'],
        ],
      })}
      ${renderFormulaBox({
        label: 'Adressraum',
        formula: 'Adressierbare Adressen = 2^(Adressbusbreite)',
        desc: '16-Bit Adressbus → 2¹⁶ = 65.536 Byte = 64 KB Adressraum',
      })}
      <h4 class="lz-h4">Schnittstellen-Busse (externe Kommunikation)</h4>
      ${renderTable({
        headers: ['Bus', 'Leitungen', 'Geschwindigkeit', 'Anwendung'],
        rows: [
          ['SPI', '4 (MOSI, MISO, SCK, CS)', 'bis 50 MHz', 'Displays, SD-Karten, ADC/DAC, Flash'],
          ['I²C', '2 (SDA, SCL)', '100 kHz – 3,4 MHz', 'Sensoren, EEPROMs, kleine Peripherie'],
          ['UART', '2 (TX, RX)', 'bis 1 Mbit/s', 'Serielles Terminal, Bluetooth-Module'],
          ['USB', '2 (D+, D−)', 'bis 20 Gbit/s', 'PC-Verbindung, Massenspeicher'],
          ['CAN', '2 (CANH, CANL, differentiell)', 'bis 1 Mbit/s', 'Automobil, industrielle Steuerungen'],
        ],
      })}
    </div>`;
  }

  _panelAdressierung() {
    return `<div class="wim-category hidden" data-wim-cat="adressierung">
      <h3 class="lz-h3">Adressierungsarten beim AVR</h3>
      <p class="lz-prose">
        Wie ein Befehl seine Operanden "findet", wird durch die <strong>Adressierungsart</strong> bestimmt.
      </p>
      ${renderTable({
        headers: ['Adressierungsart', 'Syntax (AVR)', 'Operand liegt…', 'Beispiel'],
        rows: [
          ['Register (direkt)', 'ADD Rd, Rr', '…im Register Rd/Rr', 'ADD R16, R17 → R16 + R17'],
          ['Sofortoperand (immediate)', 'LDI Rd, K', '…direkt im Befehl', 'LDI R16, 42 → R16 = 42'],
          ['Direkte Speicheradressierung', 'LDS Rd, k', '…an fester Adresse k im SRAM', 'LDS R16, 0x0200'],
          ['Indirekte Adressierung', 'LD Rd, X', '…an Adresse in X/Y/Z-Register', 'LD R16, X (X = 0x0200)'],
          ['Indirekt mit Displacement', 'LDD Rd, Y+q', '…an Y/Z + Versatz q', 'LDD R16, Y+4'],
          ['Indirekt mit Post-Inkrement', 'LD Rd, X+', '…an X, dann X ← X+1', 'Für Schleifen über Arrays'],
          ['Indirekt mit Pre-Dekrement', 'LD Rd, −X', 'X ← X−1, dann an X', 'Stack-Operationen'],
          ['Relativ (für Sprünge)', 'RJMP +k', '…PC + k (relative Sprungweite)', 'RJMP −5 (5 Schritte zurück)'],
        ],
      })}
      ${renderInfobox({ icon: 'fas fa-lightbulb', title: 'Wann welche Adressierungsart?', type: 'info',
        body: `<strong>Einzelne Variable:</strong> Direktadressierung (LDS/STS)<br>
               <strong>Array durchlaufen:</strong> Indirektes mit Post-Inkrement (LD Rd, Z+)<br>
               <strong>Struct/Record:</strong> Indirektes mit Displacement (LDD Rd, Y+offset)<br>
               <strong>Konstante aus Flash:</strong> LPM mit Z-Register` })}
    </div>`;
  }

  _panelUebungen() {
    return `<div class="wim-category hidden" data-wim-cat="uebungen">
      <h3 class="lz-h3">Übungsaufgaben</h3>
      ${renderAccordion([
        {
          title: 'A1: Adressraum berechnen — wie viele Bytes kann ein 20-Bit-Adressbus adressieren?',
          content: `2²⁰ = 1.048.576 Byte = <strong>1 MB</strong><br>
          Der x86-8086 hatte 20 Adressleitungen → 1 MB Adressraum (historisch). Daher der "640 KB limit" Mythos.`,
        },
        {
          title: 'A2: SRAM vs. Flash beim ATmega328P — wo liegt was?',
          content: `<strong>Flash (32 KB):</strong> Programmcode, PROGMEM-Konstanten — nicht flüchtig<br>
          <strong>SRAM (2 KB):</strong> Stack, globale/lokale Variablen, Heap — flüchtig<br>
          <strong>EEPROM (1 KB):</strong> Persistente Konfiguration (z.B. Kalibrierung) — nicht flüchtig, byteweise schreibbar`,
        },
        {
          title: 'A3: Erkläre den Unterschied zwischen LD R16, X und LD R16, X+',
          content: `<strong>LD R16, X:</strong> Lädt Byte von Adresse in X nach R16. X bleibt unverändert.<br>
          <strong>LD R16, X+:</strong> Lädt Byte von Adresse in X nach R16, dann X ← X + 1.<br>
          Post-Inkrement ist ideal für Array-Iteration: In jeder Schleife zeigt X auf das nächste Element.`,
        },
        {
          title: 'A4: Was ist der Von-Neumann-Flaschenhals?',
          content: `Programm und Daten teilen einen Bus. CPU kann nicht gleichzeitig Befehl holen UND Daten lesen.<br>
          Lösung Harvard-Architektur: Zwei getrennte Busse → Befehl + Daten gleichzeitig möglich.<br>
          Moderner Kompromiss: Moderne x86 CPUs haben intern Harvard-ähnliche Caches.`,
        },
      ])}
      ${renderInfobox({ icon: 'fas fa-graduation-cap', title: 'Speicher für die Prüfung', type: 'success',
        body: `Flash (nicht flüchtig, Programm), SRAM (flüchtig, Daten, Stack), EEPROM (nicht flüchtig, Konfiguration).<br>
               Harvard = getrennter Programm- und Datenspeicher.<br>
               Adressraumformel: 2^n Adressen bei n Adressleitungen.` })}
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