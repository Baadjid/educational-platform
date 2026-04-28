// pages/projekte/lernzettel/faecher/informatik/themen/mikrocontroller/interrupts-timer.js
// Informatik 2.3 — Interrupts & Timer

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
  prev: { label: '2.2 Speicher & Bus', link: `${BASE}/themen/mikrocontroller/speicher-bus` },
  next: { label: '2.4 Polling vs. Interrupt', link: `${BASE}/themen/mikrocontroller/polling-interrupt` },
};

const TABS = [
  { key: 'grundlagen', label: '⚡ Interrupt-Grundlagen' },
  { key: 'ablauf',     label: '🔄 ISR-Ablauf' },
  { key: 'timer',      label: '⏱ Timer/Counter' },
  { key: 'timer_pwm',  label: '📊 Timer für PWM' },
  { key: 'uebungen',   label: '✏ Übungen' },
];

export default class InterruptsTimerPage {
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
            <span>2.3 · Interrupts & Timer</span>
          </nav>
          <h1 class="lz-sub-title">Interrupts & Timer</h1>
          <p class="lz-sub-subtitle">ISR, Interrupt-Vektortabelle, Prescaler, Overflow, PWM</p>
          ${renderTags(['Interrupt', 'ISR', 'Timer', 'Prescaler', 'Overflow', 'PWM', 'BPE 2'])}
        </div>
      </section>
      <section class="lz-content-section">
        <div class="lz-section-wrap">
          <nav class="wim-tabs" id="interruptsTabs" aria-label="Interrupts & Timer">
            ${TABS.map((t, i) => `<button class="wim-tab${i === 0 ? ' active' : ''}" data-wim="${t.key}">${t.label}</button>`).join('')}
          </nav>
          ${this._panelGrundlagen()}
          ${this._panelAblauf()}
          ${this._panelTimer()}
          ${this._panelTimerPWM()}
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
      ${renderInfobox({ icon: 'fas fa-bolt', title: 'Was ist ein Interrupt?', type: 'info',
        body: `Ein <strong>Interrupt</strong> ist ein asynchrones Ereignis, das den normalen Programmablauf
               unterbricht. Die CPU speichert ihren aktuellen Zustand, springt in eine
               <strong>Interrupt-Service-Routine (ISR)</strong>, und kehrt danach zum unterbrochenen
               Programm zurück — als wäre nichts gewesen.` })}
      <h3 class="lz-h3">Arten von Interrupts</h3>
      ${renderTable({
        headers: ['Interrupt-Typ', 'Auslöser', 'Beispiel (AVR)'],
        rows: [
          ['Externer Interrupt', 'Pegelwechsel an einem Pin', 'INT0/INT1: Taster, Sensor-Signal'],
          ['Timer-Interrupt', 'Timer läuft über (Overflow) oder erreicht Wert', 'Timer0 OVF: regelmäßige Ereignisse'],
          ['Compare-Interrupt', 'Timer-Zähler = Vergleichswert', 'Timer1 COMPA: präzise Zeitintervalle'],
          ['USART-Interrupt', 'Byte empfangen oder gesendet', 'USART_RXC: Zeichen vom PC empfangen'],
          ['ADC-Interrupt', 'Analog-Digital-Wandlung fertig', 'ADC: Messung fertig'],
          ['SPI-Interrupt', 'SPI-Übertragung abgeschlossen', 'SPI_STC: Transfer complete'],
          ['WDT-Interrupt', 'Watchdog-Timer abgelaufen', 'WDT: System hat sich aufgehängt'],
        ],
      })}
      <h4 class="lz-h4">Interrupt-Vektortabelle (AVR)</h4>
      <p class="lz-prose">
        Am Anfang des Flash-Speichers (ab Adresse 0x0000) liegen die <strong>Interrupt-Vektoren</strong>:
        Sprungbefehle, die zu den jeweiligen ISRs zeigen.
      </p>
      ${renderTable({
        headers: ['Vektoradresse', 'Interrupt-Quelle', 'Beschreibung'],
        rows: [
          ['0x0000', 'RESET', 'Reset-Vektor — erstes was nach Power-On ausgeführt wird'],
          ['0x0001', 'INT0', 'Externer Interrupt 0 (Pin D2)'],
          ['0x0002', 'INT1', 'Externer Interrupt 1 (Pin D3)'],
          ['0x0006', 'TIMER1 COMPA', 'Timer1 Compare Match A'],
          ['0x0009', 'TIMER0 OVF', 'Timer0 Overflow'],
          ['0x000B', 'USART RXC', 'USART Empfang abgeschlossen'],
          ['0x0015', 'ADC', 'ADC Wandlung fertig'],
        ],
      })}
    </div>`;
  }

  _panelAblauf() {
    return `<div class="wim-category hidden" data-wim-cat="ablauf">
      <h3 class="lz-h3">Ablauf einer Interrupt-Behandlung</h3>
      ${renderAccordion([
        {
          title: '1. Interrupt-Erkennung',
          content: `Das Peripheriegerät (z.B. Timer, UART) setzt ein <strong>Interrupt-Flag</strong>.<br>
          Flag bleibt gesetzt bis die ISR ausgeführt wird (oder manuell gelöscht).<br>
          Voraussetzung: Globaler Interrupt Enable (I-Bit im SREG = 1) AND lokaler Enable-Bit gesetzt.`,
        },
        {
          title: '2. Aktuellen Befehl zu Ende führen',
          content: `Die CPU beendet den aktuell laufenden Befehl noch vollständig.<br>
          Maximale Latenz: 1 Befehl (RISC: meist 1–5 Takte).`,
        },
        {
          title: '3. Kontext sichern',
          content: `PC (Rücksprungadresse) wird auf den Stack gelegt.<br>
          I-Bit im SREG wird gelöscht → weitere Interrupts werden gesperrt.<br>
          <strong>WICHTIG:</strong> SREG und verwendete Register müssen in der ISR selbst gesichert werden!`,
        },
        {
          title: '4. ISR ausführen',
          content: `Sprung zur ISR-Adresse aus der Interrupt-Vektortabelle.<br>
          ISR führt die Aufgabe aus (z.B. Zähler erhöhen, Zeichen speichern).<br>
          ISR sollte <strong>kurz</strong> sein — keine Delays, keine langen Berechnungen!`,
        },
        {
          title: '5. Rücksprung (RETI)',
          content: `RETI-Befehl (Return from Interrupt):<br>
          1. PC wird vom Stack geholt<br>
          2. I-Bit wird wieder gesetzt (Interrupts erlaubt)<br>
          3. Programm läuft an unterbrochener Stelle weiter.`,
        },
      ])}
      <h4 class="lz-h4">ISR in C (Arduino/AVR-GCC)</h4>
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:1.5rem;border-radius:10px;font-family:monospace;font-size:.85rem;line-height:1.7;">
<span style="color:#94a3b8;">// ISR-Makro mit Vektorname</span>
ISR(<span style="color:#60a5fa;">TIMER1_COMPA_vect</span>) {
    <span style="color:#94a3b8;">// Hier ISR-Code — kurz halten!</span>
    count++;            <span style="color:#94a3b8;">// Zähler erhöhen</span>
    <span style="color:#94a3b8;">// RETI wird automatisch vom Compiler eingefügt</span>
}
<span style="color:#94a3b8;">// Interrupt aktivieren:</span>
<span style="color:#34d399;">sei</span>();               <span style="color:#94a3b8;">// Globalen Interrupt Enable setzen (I-Bit)</span>
TIMSK1 |= (1 << <span style="color:#fbbf24;">OCIE1A</span>); <span style="color:#94a3b8;">// Lokalen Enable für Timer1 CompA</span></pre>
      ${renderMerkboxGrid([
        { icon: 'fas fa-clock', title: 'ISR kurz halten', text: 'Keine Delays, keine seriellen Ausgaben. Nur Flag setzen oder Zähler erhöhen. Hauptarbeit im Hauptprogramm erledigen.' },
        { icon: 'fas fa-save', title: 'SREG sichern', text: 'In Assembler: SREG auf Stack sichern und am Ende wiederherstellen. In C macht der Compiler das automatisch.' },
        { icon: 'fas fa-share-alt', title: 'volatile', text: 'Variablen die in ISR und Hauptprogramm verwendet werden MÜSSEN volatile sein: volatile uint8_t count = 0;' },
      ])}
    </div>`;
  }

  _panelTimer() {
    return `<div class="wim-category hidden" data-wim-cat="timer">
      <h3 class="lz-h3">Timer/Counter</h3>
      <p class="lz-prose">
        Timer sind Hardware-Zähler, die unabhängig von der CPU hochzählen.
        Sie ermöglichen präzise Zeitsteuerung ohne Polling.
      </p>
      ${renderTable({
        headers: ['Timer', 'Breite', 'Prescaler-Optionen', 'Besonderheiten'],
        rows: [
          ['Timer0', '8 Bit (0–255)', '1, 8, 64, 256, 1024', 'millis(), delay() in Arduino nutzen Timer0'],
          ['Timer1', '16 Bit (0–65535)', '1, 8, 64, 256, 1024', 'Hohe Präzision, ICU (Input Capture)'],
          ['Timer2', '8 Bit (0–255)', '1, 8, 32, 64, 128, 256, 1024', 'Kann asynchron (ext. 32kHz) laufen'],
        ],
      })}
      <h4 class="lz-h4">Prescaler — Taktteilung</h4>
      ${renderInfobox({ icon: 'fas fa-sliders', title: 'Prescaler macht aus dem CPU-Takt einen langsameren Timer-Takt', type: 'info',
        body: `<strong>CPU-Takt:</strong> f_CPU = 16 MHz (Standard Arduino)<br>
               <strong>Timer-Takt:</strong> f_Timer = f_CPU / Prescaler<br>
               Prescaler 64: f_Timer = 16 MHz / 64 = 250 kHz = 1 Tick alle 4 µs` })}
      ${renderFormulaBox({
        label: 'Timer-Überlaufzeit (Overflow)',
        formula: 'T_overflow = (2^n × Prescaler) / f_CPU',
        desc: 'n = Timer-Bits (8 oder 16). Bei Timer0, Prescaler 1024: (256 × 1024) / 16 MHz ≈ 16,4 ms',
      })}
      ${renderFormulaBox({
        label: 'CTC-Modus (Clear Timer on Compare)',
        formula: 'OCR = (f_CPU / (2 × Prescaler × f_gewünscht)) − 1',
        desc: 'Für 1 Hz bei 16 MHz, Prescaler 1024: (16.000.000 / (2 × 1024 × 1)) − 1 = 7811',
      })}
      <h4 class="lz-h4">Timer-Betriebsmodi</h4>
      ${renderTable({
        headers: ['Modus', 'Funktion', 'Anwendung'],
        rows: [
          ['Normal', 'Zählt von 0 bis MAX (255/65535), Overflow-Interrupt', 'Zeitintervalle, Zählen von Ereignissen'],
          ['CTC (Clear Timer on Compare)', 'Zählt bis OCR-Wert, Reset, Compare-Interrupt', 'Präzise Zeitintervalle, Tonerzeugung'],
          ['Fast PWM', 'Zählt bis TOP, PWM-Ausgang', 'Motor, LED-Helligkeit, DAC-Emulation'],
          ['Phase Correct PWM', 'Hoch und runter zählen, symmetrische PWM', 'Motorsteuerung (weniger Harmonische)'],
          ['Input Capture', 'Speichert Timer-Wert bei Flanke am ICP-Pin', 'Frequenzmessung, Periodendauer messen'],
        ],
      })}
    </div>`;
  }

  _panelTimerPWM() {
    return `<div class="wim-category hidden" data-wim-cat="timer_pwm">
      <h3 class="lz-h3">Timer für PWM (Pulsweitenmodulation)</h3>
      ${renderInfobox({ icon: 'fas fa-chart-bar', title: 'Was ist PWM?', type: 'info',
        body: `<strong>Pulsweitenmodulation</strong> — der Ausgang wechselt schnell zwischen 0 und 1.
               Das Verhältnis der "An"-Zeit zur Periode heißt <strong>Tastverhältnis (Duty Cycle)</strong>.
               Der Mittelwert des Signals entspricht einem analogen Spannungswert.` })}
      ${renderFormulaBox({
        label: 'Duty Cycle',
        formula: 'Duty Cycle = t_on / T × 100 %',
        desc: '50% Duty Cycle bei 5V → 2,5V Mittelwert. Für LED-Helligkeit, Motorgeschwindigkeit.',
      })}
      <h4 class="lz-h4">PWM-Auflösung und Frequenz</h4>
      ${renderTable({
        headers: ['Timer', 'Bits', 'Auflösung', 'PWM-Frequenz (Prescaler 64, 16 MHz)'],
        rows: [
          ['Timer0 (Fast PWM)', '8 Bit', '256 Stufen', '16MHz / (64 × 256) ≈ 977 Hz'],
          ['Timer1 (Fast PWM)', '16 Bit', '65536 Stufen', 'Sehr fein einstellbar'],
          ['Timer2 (Fast PWM)', '8 Bit', '256 Stufen', 'Unabhängig von Timer0'],
        ],
      })}
      <h4 class="lz-h4">PWM in C (Arduino)</h4>
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:1.5rem;border-radius:10px;font-family:monospace;font-size:.85rem;line-height:1.7;">
<span style="color:#94a3b8;">// Arduino analogWrite() nutzt Timer-PWM automatisch</span>
analogWrite(<span style="color:#fbbf24;">9</span>, <span style="color:#fbbf24;">128</span>); <span style="color:#94a3b8;">// Pin 9, 50% Duty Cycle (128/255)</span>

<span style="color:#94a3b8;">// Direkte Register-Konfiguration (Timer1, Fast PWM):</span>
TCCR1A = (1 << <span style="color:#60a5fa;">COM1A1</span>) | (1 << <span style="color:#60a5fa;">WGM11</span>);
TCCR1B = (1 << <span style="color:#60a5fa;">WGM13</span>) | (1 << <span style="color:#60a5fa;">WGM12</span>) | (1 << <span style="color:#60a5fa;">CS11</span>); <span style="color:#94a3b8;">// Prescaler 8</span>
ICR1   = <span style="color:#fbbf24;">19999</span>;  <span style="color:#94a3b8;">// TOP = 20 ms Periode (Servo-Signal)</span>
OCR1A  = <span style="color:#fbbf24;">1500</span>;   <span style="color:#94a3b8;">// 1,5 ms Pulsbreite (Servo Mittelstellung)</span>
DDRB  |= (1 << <span style="color:#60a5fa;">PB1</span>);  <span style="color:#94a3b8;">// OC1A als Ausgang</span></pre>
      ${renderMerkboxGrid([
        { icon: 'fas fa-lightbulb', title: 'LED-Helligkeit', text: '8-Bit PWM: 256 Helligkeitsstufen. analogWrite(pin, 0–255). 0=aus, 255=volle Helligkeit.' },
        { icon: 'fas fa-cog', title: 'Servo-Steuerung', text: 'Servo: 50 Hz PWM, Pulsbreite 1–2 ms für 0°–180°. Timer1 mit ICR1=19999 (20ms Periode).' },
        { icon: 'fas fa-car', title: 'Motor-Geschwindigkeit', text: 'H-Brücke + PWM steuert Motorgeschwindigkeit und Richtung. Duty Cycle = Geschwindigkeit.' },
      ])}
    </div>`;
  }

  _panelUebungen() {
    return `<div class="wim-category hidden" data-wim-cat="uebungen">
      <h3 class="lz-h3">Übungsaufgaben</h3>
      ${renderAccordion([
        {
          title: 'A1: Wie oft läuft Timer0 (8-Bit) bei 16 MHz und Prescaler 256 pro Sekunde über?',
          content: `f_Timer = 16 MHz / 256 = 62.500 Hz<br>
          Timer0 zählt 0–255 → 256 Schritte bis Overflow<br>
          Overflows pro Sekunde = 62.500 / 256 ≈ <strong>244 Mal pro Sekunde</strong>`,
        },
        {
          title: 'A2: Berechne OCR1A für 1 Hz im CTC-Modus (16 MHz, Prescaler 1024)',
          content: `OCR = f_CPU / (2 × Prescaler × f) − 1<br>
          OCR = 16.000.000 / (2 × 1024 × 1) − 1 = 7812 − 1 = <strong>7811</strong><br>
          Timer1 ist 16-Bit (max 65535) → passt!`,
        },
        {
          title: 'A3: Was muss bei Variablen beachtet werden, die in ISR und Hauptschleife verwendet werden?',
          content: `Sie müssen als <code>volatile</code> deklariert werden:<br>
          <code>volatile uint8_t flag = 0;</code><br>
          Ohne volatile kann der Compiler die Variable cachen (in Register halten) und
          Änderungen durch die ISR nicht sehen → Fehler die extrem schwer zu debuggen sind.`,
        },
        {
          title: 'A4: Warum sollte eine ISR kurz sein?',
          content: `1. Während ISR läuft sind andere Interrupts gesperrt (I-Bit=0) → Verzögerungen<br>
          2. Zeitkritische Ereignisse können verpasst werden<br>
          3. Stack-Verbrauch wächst mit ISR-Tiefe (Stack-Overflow möglich)<br>
          → Lösung: In ISR nur Flag setzen, Hauptprogramm erledigt die eigentliche Arbeit.`,
        },
      ])}
      ${renderInfobox({ icon: 'fas fa-graduation-cap', title: 'Interrupts & Timer für die Prüfung', type: 'success',
        body: `Interrupt-Ablauf: Ereignis → Flag → ISR (I-Bit löschen) → RETI (I-Bit setzen).<br>
               Timer-Formeln: T_overflow = (2^n × Prescaler) / f_CPU.<br>
               CTC: präzise Zeitintervalle. PWM: analoger Ausgang durch digitales Signal.` })}
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