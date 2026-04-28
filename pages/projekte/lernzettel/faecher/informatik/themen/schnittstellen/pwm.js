// pages/projekte/lernzettel/faecher/informatik/themen/schnittstellen/pwm.js
// Informatik 3.3 — PWM (Pulsweitenmodulation)

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
  prev: { label: '3.2 ADC & DAC', link: `${BASE}/themen/schnittstellen/adc-dac` },
  next: { label: '3.4 SPI, I²C & UART', link: `${BASE}/themen/schnittstellen/spi-i2c-uart` },
};

const TABS = [
  { key: 'grundlagen', label: '📐 Grundlagen' },
  { key: 'anwendungen', label: '💡 Anwendungen' },
  { key: 'avr_timer', label: '⏱ AVR‑Timer PWM' },
  { key: 'uebungen', label: '✏ Übungen' },
];

export default class PwmPage {
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
            <span>3.3 · PWM</span>
          </nav>
          <h1 class="lz-sub-title">PWM — Pulsweitenmodulation</h1>
          <p class="lz-sub-subtitle">Duty Cycle, Frequenz, Auflösung, Timer‑PWM, Anwendungen</p>
          ${renderTags(['PWM', 'Duty Cycle', 'Timer', 'Motorsteuerung', 'LED dimmen', 'BPE 3'])}
        </div>
      </section>
      <section class="lz-content-section">
        <div class="lz-section-wrap">
          <nav class="wim-tabs" id="pwmTabs" aria-label="PWM">
            ${TABS.map((t, i) => `<button class="wim-tab${i === 0 ? ' active' : ''}" data-wim="${t.key}">${t.label}</button>`).join('')}
          </nav>
          ${this._panelGrundlagen()}
          ${this._panelAnwendungen()}
          ${this._panelAVRTimer()}
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
      ${renderInfobox({ icon: 'fas fa-chart-bar', title: 'Was ist PWM?', type: 'info',
        body: `PWM (Pulse Width Modulation) schaltet einen Ausgang sehr schnell zwischen HIGH und LOW.
               Das Verhältnis von <strong>Ein‑ zu Aus‑Zeit</strong> heißt <strong>Duty Cycle</strong>.
               Der Mittelwert ergibt eine analoge Spannung: <strong>U_avg = U_HIGH × DutyCycle</strong>.` })}
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:1.5rem;border-radius:10px;font-family:monospace;font-size:.85rem;line-height:1.8;">
Duty Cycle = 0%   ──────────────────   (immer LOW)
Duty Cycle = 25%  ████───────────────   (25% HIGH, 75% LOW)
Duty Cycle = 50%  ██████████─────────   (Mittelwert = halbe Spannung)
Duty Cycle = 75%  ████████████████───
Duty Cycle = 100% ████████████████████ (immer HIGH)

Bei 5V und 50% Duty Cycle: Mittelwert = 2,5V</pre>
      <h3 class="lz-h3">Wichtige Parameter</h3>
      ${renderTable({
        headers: ['Parameter', 'Beschreibung', 'Beispiel'],
        rows: [
          ['Duty Cycle', 'Anteil der Einschaltdauer pro Periode (0‑100%)', '50% = Hälfte der Zeit HIGH'],
          ['Frequenz', 'Wie oft pro Sekunde wird umgeschaltet?', '1 kHz = 1000 Perioden/s'],
          ['Auflösung', 'Anzahl diskreter Duty‑Cycle‑Stufen', '8 Bit → 256 Stufen (0‑255)'],
        ],
      })}
      ${renderFormulaBox({
        label: 'Mittelwertspannung',
        formula: 'U_avg = U_HIGH × (DutyCycle / 100)',
        desc: 'Bei 5V, 40% Duty Cycle → 5V × 0,4 = 2V',
      })}
    </div>`;
  }

  _panelAnwendungen() {
    return `<div class="wim-category hidden" data-wim-cat="anwendungen">
      <h3 class="lz-h3">Typische PWM‑Anwendungen</h3>
      ${renderMerkboxGrid([
        { icon: 'fas fa-lightbulb', title: 'LED dimmen', text: 'Duty Cycle = Helligkeit. 8‑Bit (256 Stufen) reichen für flüssige Übergänge.' },
        { icon: 'fas fa-fan', title: 'Motorgeschwindigkeit', text: 'Duty Cycle = Drehzahl (bei Gleichstrommotoren). Tiefe Frequenz (~20‑100 Hz) hörbar.' },
        { icon: 'fas fa-volume-up', title: 'Ton‑Erzeugung', text: 'PWM mit hörbaren Frequenzen (z.B. 440 Hz = Kammerton A) + Tiefpass → Sinus? Nein, Rechteck!' },
        { icon: 'fas fa-cog', title: 'Servo‑Steuerung', text: '50 Hz PWM, Pulsbreite 1‑2 ms → 0‑180°. Timer1 auf 20 ms Periode, OCR1A = 1‑2 ms.' },
        { icon: 'fas fa-charging-station', title: 'Spannungswandler', text: 'PWM + Tiefpass = einfacher DAC. Für Audio reicht 8‑Bit bei 44,1 kHz nicht, besser ΣΔ.' },
        { icon: 'fas fa-fill-drip', title: 'Heizungsregelung', text: 'Niedrige Frequenz (0,1‑1 Hz) für Heizstäbe. Trägheit des Systems glättet.' },
      ])}
      <h4 class="lz-h4">PWM‑Frequenz in der Praxis</h4>
      ${renderTable({
        headers: ['Anwendung', 'Empfohlene Frequenz', 'Begründung'],
        rows: [
          ['LED dimmen', '> 100 Hz', 'Flackern vermeiden (ab ~60 Hz unsichtbar)'],
          ['DC‑Motor', '20‑100 Hz', 'Hörbar, aber effizient. Höhere Frequenzen → Verluste im Motor'],
          ['Servo', '50 Hz', 'Standard‑Servos erwarten genau 50 Hz, Pulsbreite 1‑2 ms'],
          ['Audio (Rechteck)', '20 Hz – 20 kHz', 'Hörbarer Ton, aber keine Sinus‑Qualität'],
          ['DAC‑Ersatz', '>> 10 × Signalbandbreite', 'Tiefpassfilter entfernt die PWM‑Trägerfrequenz'],
        ],
      })}
    </div>`;
  }

  _panelAVRTimer() {
    return `<div class="wim-category hidden" data-wim-cat="avr_timer">
      <h3 class="lz-h3">PWM mit AVR‑Timer (Arduino)</h3>
      <p class="lz-prose">
        Auf dem ATmega328P werden PWM‑Ausgänge von den Timern generiert.<br>
        Timer0 → Pin 5,6 (8 Bit, ~977 Hz), Timer1 → Pin 9,10 (16 Bit), Timer2 → Pin 3,11 (8 Bit).
      </p>
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:1.5rem;border-radius:10px;font-family:monospace;font-size:.85rem;line-height:1.7;">
<span style="color:#94a3b8;">// Einfache PWM mit Arduino‑Funktion</span>
<span style="color:#60a5fa;">void</span> setup() {
    pinMode(9, OUTPUT);
}
<span style="color:#60a5fa;">void</span> loop() {
    analogWrite(9, 128);   <span style="color:#94a3b8;">// 50% Duty Cycle, Frequenz ≈ 977 Hz</span>
}

<span style="color:#94a3b8;">// Direkte Timer‑Konfiguration für 16‑Bit PWM (Timer1, Pin 9)</span>
<span style="color:#60a5fa;">void</span> setupTimer1PWM() {
    pinMode(9, OUTPUT);
    TCCR1A = (1 << COM1A1) | (1 << WGM11);   <span style="color:#94a3b8;">// Fast PWM, non‑inverting</span>
    TCCR1B = (1 << WGM13) | (1 << WGM12) | (1 << CS10); <span style="color:#94a3b8;">// Prescaler 1</span>
    ICR1 = 19999;   <span style="color:#94a3b8;">// TOP = 20 ms (50 Hz) → Servo geeignet</span>
    OCR1A = 1500;   <span style="color:#94a3b8;">// 1,5 ms Pulsbreite → Mittelstellung</span>
}</pre>
      ${renderInfobox({ icon: 'fas fa-microchip', title: 'Timer‑PWM Modi', type: 'info',
        body: `<strong>Fast PWM:</strong> Zählt von 0 bis TOP, dann Reset. Frequenz = f_CPU / (Prescaler × (TOP+1)).<br>
               <strong>Phase Correct PWM:</strong> Zählt hoch und runter, symmetrisch, weniger Störungen.<br>
               <strong>TOP</strong> kann entweder 0xFF (8 Bit), 0xFFFF (16 Bit) oder über OCRnA/ICRn festgelegt werden.` })}
    </div>`;
  }

  _panelUebungen() {
    return `<div class="wim-category hidden" data-wim-cat="uebungen">
      <h3 class="lz-h3">Übungsaufgaben</h3>
      ${renderAccordion([
        {
          title: 'A1: Berechne die PWM‑Frequenz für Timer0 (8 Bit, Prescaler 64, 16 MHz Takt) im Fast‑PWM‑Modus.',
          content: `f_PWM = f_CPU / (Prescaler × (TOP+1)) = 16.000.000 / (64 × 256) ≈ <strong>977 Hz</strong>.<br>
          Das ist die Standard‑Arduino‑PWM‑Frequenz auf Pin 5 und 6.`,
        },
        {
          title: 'A2: Ein Servo soll auf 90° gestellt werden (Pulsbreite 1,5 ms bei 50 Hz). Berechne OCR1A für Timer1 (Prescaler 8, ICR1 = 19999).',
          content: `Timer‑Takt = 16 MHz / 8 = 2 MHz → 1 Tick = 0,5 µs.<br>
          Gewünschte Pulsbreite = 1,5 ms = 1500 µs → 1500 µs / 0,5 µs = 3000 Takte.<br>
          OCR1A = 3000 (da ICR1 = 19999 für 20 ms Periode).`,
        },
        {
          title: 'A3: Welchen Duty Cycle (in %) hat ein 8‑Bit PWM‑Wert von 64?',
          content: `Duty Cycle = (Wert / 255) × 100 % = (64 / 255) × 100 % ≈ <strong>25,1 %</strong>.`,
        },
        {
          title: 'A4: Warum ist eine PWM‑Frequenz unter 60 Hz bei LEDs problematisch?',
          content: `Das menschliche Auge nimmt Flackern unter ~60 Hz wahr (Flimmerfusion). Unter 60 Hz sieht man die LED flackern, was unangenehm ist.`,
        },
      ])}
      ${renderInfobox({ icon: 'fas fa-graduation-cap', title: 'PWM für die Prüfung', type: 'success',
        body: `PWM = schnelles Ein‑/Ausschalten. Duty Cycle = Verhältnis t_on / T.<br>
               Mittelwertspannung = U_HIGH × DutyCycle.<br>
               AVR: Timer0/1/2 erzeugen PWM. Frequenz = f_CPU / (Prescaler × (TOP+1)).<br>
               Anwendungen: LED dimmen, Motor‑/Servosteuerung, einfacher DAC.` })}
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