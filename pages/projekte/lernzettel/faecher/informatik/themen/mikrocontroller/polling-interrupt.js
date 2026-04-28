// pages/projekte/lernzettel/faecher/informatik/themen/mikrocontroller/polling-interrupt.js
// Informatik 2.4 — Polling vs. Interrupt

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
  prev: { label: '2.3 Interrupts & Timer', link: `${BASE}/themen/mikrocontroller/interrupts-timer` },
  next: { label: '2.5 Assembler & PAP', link: `${BASE}/themen/mikrocontroller/assembler` },
};

const TABS = [
  { key: 'polling',   label: '🔁 Polling' },
  { key: 'interrupt', label: '⚡ Interrupt' },
  { key: 'vergleich', label: '⚖ Vergleich' },
  { key: 'anwendung', label: '🎯 Wann was?' },
  { key: 'uebungen',  label: '✏ Übungen' },
];

export default class PollingInterruptPage {
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
            <span>2.4 · Polling vs. Interrupt</span>
          </nav>
          <h1 class="lz-sub-title">Polling vs. Interrupt</h1>
          <p class="lz-sub-subtitle">Zwei grundlegende Prinzipien der Ereignisbehandlung</p>
          ${renderTags(['Polling', 'Interrupt', 'ISR', 'Ereignisbehandlung', 'Reaktionszeit', 'BPE 2'])}
        </div>
      </section>
      <section class="lz-content-section">
        <div class="lz-section-wrap">
          <nav class="wim-tabs" id="pollingTabs" aria-label="Polling vs Interrupt">
            ${TABS.map((t, i) => `<button class="wim-tab${i === 0 ? ' active' : ''}" data-wim="${t.key}">${t.label}</button>`).join('')}
          </nav>
          ${this._panelPolling()}
          ${this._panelInterrupt()}
          ${this._panelVergleich()}
          ${this._panelAnwendung()}
          ${this._panelUebungen()}
        </div>
      </section>
      <section class="lz-content-section" style="padding-top:0;">
        <div class="lz-section-wrap">${renderPageNav(NAV)}</div>
      </section>
      ${footerHTML(this.router)}`;
  }

  _panelPolling() {
    return `<div class="wim-category active" data-wim-cat="polling">
      ${renderInfobox({ icon: 'fas fa-search', title: 'Was ist Polling?', type: 'info',
        body: `Beim <strong>Polling (Abfragen)</strong> fragt das Programm in einer Schleife
               kontinuierlich nach, ob ein Ereignis eingetreten ist.
               Wie ein Kind, das immer wieder fragt: "Sind wir schon da?"` })}
      <h3 class="lz-h3">Polling in C</h3>
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:1.5rem;border-radius:10px;font-family:monospace;font-size:.85rem;line-height:1.7;">
<span style="color:#94a3b8;">// Polling: Taster an Pin D2 prüfen</span>
<span style="color:#60a5fa;">void</span> loop() {
    <span style="color:#60a5fa;">while</span> (<span style="color:#34d399;">true</span>) {
        <span style="color:#94a3b8;">// Kontinuierliche Abfrage in der Hauptschleife:</span>
        <span style="color:#60a5fa;">if</span> (PIND & (1 << <span style="color:#fbbf24;">PD2</span>)) {  <span style="color:#94a3b8;">// Ist Bit 2 von PIND gesetzt?</span>
            <span style="color:#94a3b8;">// Taster ist gedrückt → Aktion ausführen</span>
            LED_an();
        }
        <span style="color:#94a3b8;">// Alle anderen Aufgaben ebenfalls hier</span>
        andere_aufgabe();
    }
}</pre>
      <h4 class="lz-h4">Eigenschaften des Pollings</h4>
      ${renderTable({
        headers: ['Eigenschaft', 'Ausprägung beim Polling'],
        rows: [
          ['CPU-Auslastung', 'Hoch — CPU prüft ständig, auch wenn nichts passiert'],
          ['Reaktionszeit', 'Variabel — abhängig von Schleifen-Durchlaufzeit'],
          ['Programmstruktur', 'Einfach, linear, leicht debuggbar'],
          ['Energie-Effizienz', 'Schlecht — CPU kann nicht schlafen'],
          ['Mehrere Ereignisse', 'Problematisch — Reihenfolge bestimmt Priorität'],
          ['Echtzeitfähigkeit', 'Eingeschränkt — bei langen Schleifen können Ereignisse verpasst werden'],
        ],
      })}
      ${renderMerkboxGrid([
        { icon: 'fas fa-plus-circle', title: 'Vorteile Polling', text: 'Einfach zu verstehen und zu debuggen. Kein Kontext-Switching-Overhead. Deterministisch wenn Schleife bekannt.' },
        { icon: 'fas fa-minus-circle', title: 'Nachteile Polling', text: 'Verschwendet CPU-Zeit. Schlechte Energieeffizienz. Reaktionszeit unvorhersehbar bei komplexer Schleife.' },
      ])}
    </div>`;
  }

  _panelInterrupt() {
    return `<div class="wim-category hidden" data-wim-cat="interrupt">
      ${renderInfobox({ icon: 'fas fa-bolt', title: 'Was ist der Interrupt-Ansatz?', type: 'info',
        body: `Beim <strong>Interrupt-Prinzip</strong> arbeitet die CPU ihr normales Programm ab.
               Wenn ein Ereignis eintritt, wird sie <em>sofort</em> und automatisch unterbrochen —
               unabhängig davon, was sie gerade tut.
               Wie ein Arzt: arbeitet normal, aber reagiert sofort wenn der Notfallpiepser geht.` })}
      <h3 class="lz-h3">Interrupt in C</h3>
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:1.5rem;border-radius:10px;font-family:monospace;font-size:.85rem;line-height:1.7;">
<span style="color:#94a3b8;">// Interrupt-gesteuert: Taster an INT0 (PD2)</span>

volatile <span style="color:#60a5fa;">bool</span> taster_gedrueckt = <span style="color:#34d399;">false</span>;

ISR(<span style="color:#60a5fa;">INT0_vect</span>) {          <span style="color:#94a3b8;">// ISR wird bei Tasterdrücken aufgerufen</span>
    taster_gedrueckt = <span style="color:#34d399;">true</span>;  <span style="color:#94a3b8;">// Nur Flag setzen!</span>
}

<span style="color:#60a5fa;">void</span> setup() {
    EIMSK |= (1 << <span style="color:#fbbf24;">INT0</span>);    <span style="color:#94a3b8;">// INT0 aktivieren</span>
    EICRA |= (1 << <span style="color:#fbbf24;">ISC01</span>);   <span style="color:#94a3b8;">// Fallende Flanke</span>
    <span style="color:#34d399;">sei</span>();                   <span style="color:#94a3b8;">// Globale Interrupts ein</span>
}

<span style="color:#60a5fa;">void</span> loop() {
    <span style="color:#60a5fa;">if</span> (taster_gedrueckt) {
        taster_gedrueckt = <span style="color:#34d399;">false</span>;
        LED_an();           <span style="color:#94a3b8;">// Hauptprogramm erledigt die Arbeit</span>
    }
    andere_aufgabe();       <span style="color:#94a3b8;">// CPU ist frei für andere Aufgaben</span>
}</pre>
      <h4 class="lz-h4">Eigenschaften des Interrupt-Prinzips</h4>
      ${renderTable({
        headers: ['Eigenschaft', 'Ausprägung bei Interrupt'],
        rows: [
          ['CPU-Auslastung', 'Niedrig — CPU kann schlafen oder andere Aufgaben erledigen'],
          ['Reaktionszeit', 'Schnell und vorhersehbar (wenige Taktzyklen Latenz)'],
          ['Programmstruktur', 'Komplexer (ISR + Hauptprogramm + shared variables)'],
          ['Energie-Effizienz', 'Gut — CPU-Sleep mit Wake-on-Interrupt möglich'],
          ['Mehrere Ereignisse', 'Gut — Prioritäten durch Vektortabelle definiert'],
          ['Echtzeitfähigkeit', 'Gut — bekannte maximale Reaktionszeit'],
        ],
      })}
    </div>`;
  }

  _panelVergleich() {
    return `<div class="wim-category hidden" data-wim-cat="vergleich">
      <h3 class="lz-h3">Direkter Vergleich</h3>
      ${renderCompare({
        titleA: '🔁 Polling',
        titleB: '⚡ Interrupt',
        listA: [
          'CPU prüft ständig in Schleife',
          'Ereignis kann verpasst werden (zu langsame Schleife)',
          'Einfache Programmstruktur',
          'Schlechte Energieeffizienz (busy waiting)',
          'Reaktionszeit = Schleifendurchlaufzeit',
          'Gut für sehr schnelle, häufige Ereignisse',
          'Kein Overhead durch Kontext-Switching',
        ],
        listB: [
          'CPU wird bei Ereignis sofort unterbrochen',
          'Kein Ereignis wird verpasst',
          'Komplexere Programmstruktur (volatile!)',
          'CPU kann sleep; Energieeffizienz sehr gut',
          'Reaktionszeit = wenige Taktzyklen',
          'Gut für seltene, zeitkritische Ereignisse',
          'Kleiner Overhead durch ISR-Einstieg (Kontext)',
        ],
      })}
      <h4 class="lz-h4">Reaktionszeit im Detail</h4>
      ${renderTable({
        headers: ['Methode', 'Beste Reaktionszeit', 'Schlechteste Reaktionszeit', 'Determinismus'],
        rows: [
          ['Polling (einfach)', '1 Schleifendurchlauf', '1 Schleifendurchlauf', 'Deterministisch'],
          ['Polling (komplex)', '~1 Schleifendurchlauf', 'Viele Schleifen + Subroutinen', 'Schlecht'],
          ['Interrupt', '3–8 Taktzyklen (Latenz)', 'ISR-Dauer + Latenz', 'Gut vorhersehbar'],
        ],
      })}
      ${renderInfobox({ icon: 'fas fa-lightbulb', title: 'Sonderfall: Busy-Wait vs. Sleep-with-Interrupt', type: 'info',
        body: `<strong>Polling (busy wait):</strong> CPU läuft immer → 100% CPU-Last, viel Strom.<br>
               <strong>Sleep + Wake-on-Interrupt:</strong> CPU schläft, Interrupt weckt sie auf → 99% weniger Strom.
               Entscheidend für Batteriebetrieb (IoT, Wearables).` })}
    </div>`;
  }

  _panelAnwendung() {
    return `<div class="wim-category hidden" data-wim-cat="anwendung">
      <h3 class="lz-h3">Wann Polling, wann Interrupt?</h3>
      ${renderTable({
        headers: ['Situation', 'Empfehlung', 'Begründung'],
        rows: [
          ['Taster mit Entprellung', 'Interrupt + Debounce', 'Sofortige Reaktion, dann Software-Entprellung'],
          ['ADC-Messung auslesen', 'Interrupt (ADC complete)', 'CPU kann andere Dinge tun während ADC wandelt'],
          ['UART-Daten empfangen', 'Interrupt (UART RXC)', 'Datenverlust wenn Byte überschrieben bevor gelesen'],
          ['Status-LED blinken lassen', 'Timer-Interrupt', 'Präzises Timing ohne Hauptschleife zu blockieren'],
          ['Einfacher Taster, unkritisch', 'Polling', 'Einfacher Code, ausreichende Reaktionszeit'],
          ['SPI-Daten pollen (High-Speed)', 'Polling', 'SPI kann schneller als Interrupt-Overhead sein'],
          ['Batteriebetriebenes Gerät', 'Interrupt + Sleep', 'CPU schläft → minimaler Stromverbrauch'],
          ['Komplexes Echtzeitsystem', 'RTOS + Interrupts', 'Betriebssystem verwaltet Prioritäten und Tasks'],
        ],
      })}
      ${renderMerkboxGrid([
        { icon: 'fas fa-battery-full', title: 'Energiesparen', text: 'Sleep-Mode + Wake-on-Interrupt: CPU schläft im Leerlauf. Nur Interrupt weckt sie. Stromverbrauch < 1 µA möglich.' },
        { icon: 'fas fa-tasks', title: 'RTOS-Alternative', text: 'Bei komplexen Systemen: RTOS (FreeRTOS). Tasks laufen "parallel" durch Scheduling. Interrupts für Hardware-Events.' },
        { icon: 'fas fa-bug', title: 'Häufige Fehler', text: 'Vergessenes volatile, ISR zu lang, Interrupts zu früh einschalten, Stack-Overflow durch tiefe ISR-Verschachtelung.' },
      ])}
    </div>`;
  }

  _panelUebungen() {
    return `<div class="wim-category hidden" data-wim-cat="uebungen">
      <h3 class="lz-h3">Übungsaufgaben</h3>
      ${renderAccordion([
        {
          title: 'A1: Nenne 3 Nachteile von Polling gegenüber Interrupt',
          content: `1. <strong>CPU-Verschwendung:</strong> CPU prüft ständig auch wenn nichts passiert<br>
          2. <strong>Energie:</strong> Kein Sleep möglich → schlechte Energieeffizienz<br>
          3. <strong>Reaktionszeit:</strong> Abhängig von Schleifendurchlaufzeit — bei komplexem Programm unzuverlässig`,
        },
        {
          title: 'A2: Warum muss eine shared Variable volatile sein?',
          content: `Der Compiler optimiert und kann Variablen in CPU-Registern "cachen".<br>
          Ohne volatile: Compiler "sieht" Änderungen durch die ISR nicht und verwendet veralteten Wert.<br>
          <code>volatile uint8_t flag</code> erzwingt: immer aus Speicher lesen/schreiben.`,
        },
        {
          title: 'A3: Erkläre den Ablauf wenn INT0 auslöst, während die CPU gerade eine Multiplikation ausführt',
          content: `1. CPU beendet die aktuelle Multiplikation (laufender Befehl wird fertig)<br>
          2. PC (Rücksprungadresse) wird auf Stack gelegt, I-Bit in SREG gelöscht<br>
          3. Sprung zur ISR-Adresse (aus INT0-Vektor, z.B. 0x0001)<br>
          4. ISR wird ausgeführt<br>
          5. RETI: PC vom Stack → zurück zur Multiplikations-Rückkehradresse`,
        },
        {
          title: 'A4: Wann ist Polling besser als Interrupt?',
          content: `1. Sehr häufige Ereignisse: Interrupt-Overhead (ISR-Einstieg) wäre größer als Polling<br>
          2. Einfache Systeme: Wo Komplexität vermieden werden soll<br>
          3. High-Speed-Interfaces: z.B. SPI mit 50 MHz — Interrupt kann nicht schnell genug sein`,
        },
      ])}
      ${renderInfobox({ icon: 'fas fa-graduation-cap', title: 'Polling vs. Interrupt für die Prüfung', type: 'success',
        body: `<strong>Polling:</strong> Aktive Abfrage, CPU immer beschäftigt, einfach.<br>
               <strong>Interrupt:</strong> Reaktiv, CPU frei für andere Aufgaben, volatile nötig.<br>
               <strong>Faustregel:</strong> Seltene, zeitkritische Ereignisse → Interrupt. Häufige, unkritische → Polling.` })}
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