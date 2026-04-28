// pages/projekte/lernzettel/faecher/informatik/themen/schnittstellen/adc-dac.js
// Informatik 3.2 — ADC & DAC

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
  prev: { label: '3.1 GPIO', link: `${BASE}/themen/schnittstellen/gpio` },
  next: { label: '3.3 PWM', link: `${BASE}/themen/schnittstellen/pwm` },
};

const TABS = [
  { key: 'adc', label: '📥 ADC (Analog → Digital)' },
  { key: 'dac', label: '📤 DAC (Digital → Analog)' },
  { key: 'praxis', label: '🔧 Praxis & Code' },
  { key: 'uebungen', label: '✏ Übungen' },
];

export default class AdcDacPage {
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
            <span>3.2 · ADC & DAC</span>
          </nav>
          <h1 class="lz-sub-title">ADC & DAC — Analog/Digital-Wandlung</h1>
          <p class="lz-sub-subtitle">Auflösung, Abtastrate, Quantisierung, Successive Approximation, R‑2R‑Leiter</p>
          ${renderTags(['ADC', 'DAC', 'Auflösung', 'Quantisierung', 'Abtastrate', 'BPE 3'])}
        </div>
      </section>
      <section class="lz-content-section">
        <div class="lz-section-wrap">
          <nav class="wim-tabs" id="adcDacTabs" aria-label="ADC & DAC">
            ${TABS.map((t, i) => `<button class="wim-tab${i === 0 ? ' active' : ''}" data-wim="${t.key}">${t.label}</button>`).join('')}
          </nav>
          ${this._panelADC()}
          ${this._panelDAC()}
          ${this._panelPraxis()}
          ${this._panelUebungen()}
        </div>
      </section>
      <section class="lz-content-section" style="padding-top:0;">
        <div class="lz-section-wrap">${renderPageNav(NAV)}</div>
      </section>
      ${footerHTML(this.router)}`;
  }

  _panelADC() {
    return `<div class="wim-category active" data-wim-cat="adc">
      ${renderInfobox({ icon: 'fas fa-waveform', title: 'Was ist ein ADC?', type: 'info',
        body: `<strong>Analog‑Digital‑Converter</strong> wandelt eine kontinuierliche Spannung (z.B. 0‑5V)
               in einen digitalen Zahlenwert (z.B. 0‑1023 bei 10 Bit). Wichtige Parameter:
               <strong>Auflösung (Bit), Abtastrate, Referenzspannung.</strong>` })}
      <h3 class="lz-h3">Auflösung & Quantisierung</h3>
      ${renderFormulaBox({
        label: 'Auflösung in Stufen',
        formula: '2^n (n = Anzahl Bits)',
        desc: '10 Bit → 1024 Stufen, 12 Bit → 4096 Stufen, 16 Bit → 65536 Stufen',
      })}
      ${renderFormulaBox({
        label: 'Spannung pro Schritt (LSB)',
        formula: 'LSB = V_ref / 2^n',
        desc: 'Beispiel: V_ref = 5V, 10 Bit → 5V / 1024 ≈ 4,88 mV pro Schritt',
      })}
      ${renderTable({
        headers: ['Auflösung (Bit)', 'Anzahl Stufen', 'LSB bei 5V Referenz', 'Typische Anwendung'],
        rows: [
          ['8 Bit', '256', '19,53 mV', 'Einfache Sensorik, Joysticks'],
          ['10 Bit', '1024', '4,88 mV', 'AVR‑ADC (Arduino Uno)'],
          ['12 Bit', '4096', '1,22 mV', 'ESP32, präzisere Messungen'],
          ['16 Bit', '65536', '76,3 µV', 'High‑End‑ADC, Labor'],
        ],
      })}
      <h4 class="lz-h4">Abtastrate & Aliasing</h4>
      ${renderInfobox({ icon: 'fas fa-chart-line', title: 'Nyquist‑Shannon‑Abtasttheorem', type: 'warning',
        body: `Die Abtastrate muss mindestens <strong>doppelt so hoch</strong> sein wie die höchste im Signal enthaltene Frequenz.
               Sonst entsteht <strong>Aliasing</strong> — hochfrequente Signale erscheinen als niederfrequente Störungen.
               <strong>f_sample ≥ 2 × f_max</strong>` })}
      <h4 class="lz-h4">ADC‑Typen</h4>
      ${renderTable({
        headers: ['Typ', 'Prinzip', 'Geschwindigkeit', 'Auflösung', 'Anwendung'],
        rows: [
          ['Successive Approximation (SAR)', 'Binäre Suche mit DAC', 'Mittel (100 kSps – 1 MSps)', '8‑16 Bit', 'Standard‑µC‑ADC'],
          ['Delta‑Sigma (ΣΔ)', 'Überabtastung + Rauschformung', 'Langsam (10‑100 Sps)', '16‑24 Bit', 'High‑Präzision, Audio'],
          ['Flash‑ADC', 'Parallelvergleich mit 2ⁿ‑1 Komparatoren', 'Extrem schnell (GSps)', '2‑8 Bit', 'Oszilloskope, Video'],
          ['Integrierend (Dual‑Slope)', 'Lädt Kondensator, misst Zeit', 'Sehr langsam', '12‑20 Bit', 'Multimeter'],
        ],
      })}
    </div>`;
  }

  _panelDAC() {
    return `<div class="wim-category hidden" data-wim-cat="dac">
      <h3 class="lz-h3">DAC — Digital‑Analog‑Converter</h3>
      <p class="lz-prose">
        Ein DAC wandelt einen digitalen Wert in eine analoge Spannung um.
        Wichtige Parameter: Auflösung (Bit), Ausgangsspannungsbereich, Settling Time.
      </p>
      ${renderFormulaBox({
        label: 'Ausgangsspannung',
        formula: 'V_out = (D / 2^n) × V_ref',
        desc: 'D = digitaler Eingangswert (0 … 2^n−1), n = Auflösung, V_ref = Referenzspannung',
      })}
      <h4 class="lz-h4">DAC‑Typen</h4>
      ${renderTable({
        headers: ['Typ', 'Prinzip', 'Vorteile', 'Nachteile'],
        rows: [
          ['R‑2R‑Leiter', 'Widerstandsnetzwerk mit nur zwei Werten (R und 2R)', 'Einfach, gut integrierbar', 'Benötigt viele Widerstände (n+1)'],
          ['PWM‑DAC', 'PWM + Tiefpass (RC‑Glied)', 'Jeder µC mit PWM kann DAC ersetzen', 'Langsam, Welligkeit'],
          ['String‑DAC', 'Kette von Widerständen, Multiplexer', 'Monoton, niedrige Verzerrung', 'Große Fläche bei hoher Auflösung'],
          ['Sigma‑Delta‑DAC', 'Überabtastung + Tiefpass', 'Hohe Auflösung, gut integrierbar', 'Komplexe Steuerung'],
        ],
      })}
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:1.5rem;border-radius:10px;font-family:monospace;font-size:.85rem;line-height:1.7;">
<span style="color:#94a3b8;">// Einfacher PWM‑DAC auf Arduino (8 Bit)</span>
<span style="color:#60a5fa;">void</span> setup() {
    pinMode(9, OUTPUT);
}
<span style="color:#60a5fa;">void</span> loop() {
    <span style="color:#60a5fa;">for</span> (<span style="color:#60a5fa;">int</span> i = 0; i < 256; i++) {
        analogWrite(9, i);   <span style="color:#94a3b8;">// PWM mit 8‑Bit‑Auflösung</span>
        delay(2);
    }
}</pre>
    </div>`;
  }

  _panelPraxis() {
    return `<div class="wim-category hidden" data-wim-cat="praxis">
      <h3 class="lz-h3">ADC auf dem AVR (ATmega328P) — Praxisbeispiel</h3>
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:1.5rem;border-radius:10px;font-family:monospace;font-size:.85rem;line-height:1.7;">
<span style="color:#60a5fa;">const int</span> potPin = A0;   <span style="color:#94a3b8;">// Analoger Eingang</span>
<span style="color:#60a5fa;">const int</span> ledPin = 9;    <span style="color:#94a3b8;">// PWM‑Ausgang</span>

<span style="color:#60a5fa;">void</span> setup() {
    Serial.begin(9600);
    pinMode(ledPin, OUTPUT);
}

<span style="color:#60a5fa;">void</span> loop() {
    <span style="color:#94a3b8;">// ADC-Wert einlesen (0‑1023)</span>
    <span style="color:#60a5fa;">int</span> adcWert = analogRead(potPin);
    
    <span style="color:#94a3b8;">// Spannung berechnen: V = (adcWert / 1023.0) * 5.0</span>
    <span style="color:#60a5fa;">float</span> spannung = adcWert * (5.0 / 1023.0);
    
    Serial.print(<span style="color:#fbbf24;">"ADC: "</span>); Serial.print(adcWert);
    Serial.print(<span style="color:#fbbf24;">" | Spannung: "</span>); Serial.println(spannung);
    
    <span style="color:#94a3b8;">// LED-Helligkeit über PWM steuern (ADC‑Wert / 4)</span>
    analogWrite(ledPin, adcWert / 4);
    
    delay(100);
}</pre>
      <h4 class="lz-h4">AVR‑Register für ADC (Low‑Level)</h4>
      ${renderTable({
        headers: ['Register', 'Bits', 'Funktion'],
        rows: [
          ['ADMUX', 'REFS[1:0], MUX[3:0]', 'Referenzspannung (z.B. AVcc), Kanalwahl'],
          ['ADCSRA', 'ADEN, ADSC, ADATE, ADPS[2:0]', 'ADC aktivieren, Start, Auto‑Trigger, Prescaler'],
          ['ADCL / ADCH', '8+2 Bit (rechtjustiert)', 'Ergebnis (10 Bit) — zuerst ADCL lesen!'],
          ['ADCSRB', 'Bipolar Mode, Trigger Source', 'Zusätzliche Steuerung (nur bei manchen Modellen)'],
        ],
      })}
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:1.5rem;border-radius:10px;font-family:monospace;font-size:.85rem;line-height:1.7;">
<span style="color:#94a3b8;">// ADC initialisieren (AVR‑Register, 10 Bit, Kanal 0)</span>
ADMUX  = (1 << REFS0);           <span style="color:#94a3b8;">// AVcc als Referenz</span>
ADCSRA = (1 << ADEN) | (1 << ADPS2) | (1 << ADPS1);  <span style="color:#94a3b8;">// Enable, Prescaler 64</span>

<span style="color:#94a3b8;">// Einmalige Messung starten und auslesen</span>
ADCSRA |= (1 << ADSC);           <span style="color:#94a3b8;">// Start Conversion</span>
<span style="color:#60a5fa;">while</span> (ADCSRA & (1 << ADSC));    <span style="color:#94a3b8;">// warten auf Fertig</span>
<span style="color:#60a5fa;">uint8_t</span> low  = ADCL;            <span style="color:#94a3b8;">// erst Low-Byte lesen</span>
<span style="color:#60a5fa;">uint8_t</span> high = ADCH;
<span style="color:#60a5fa;">uint16_t</span> result = (high << 8) | low;</pre>
    </div>`;
  }

  _panelUebungen() {
    return `<div class="wim-category hidden" data-wim-cat="uebungen">
      <h3 class="lz-h3">Übungsaufgaben</h3>
      ${renderAccordion([
        {
          title: 'A1: 12‑Bit ADC, Referenz 3,3V — welche Spannung entspricht dem Wert 1024?',
          content: `LSB = 3,3V / 4096 ≈ 0,805 mV<br>
          U = 1024 × 0,805 mV ≈ <strong>0,824 V</strong>`,
        },
        {
          title: 'A2: Ein 8‑Bit ADC misst 2,5V bei 5V Referenz. Welcher Digitalwert wird ausgegeben?',
          content: `Digitalwert = (U_in / V_ref) × 2^n = (2,5V / 5V) × 256 = 0,5 × 256 = <strong>128</strong>`,
        },
        {
          title: 'A3: Warum muss vor dem Auslesen des ADC‑Ergebnisses zuerst ADCL gelesen werden?',
          content: `Die 10 Bit sind auf ADCL (8 Bit) und ADCH (2 Bit) verteilt. Wenn man zuerst ADCH liest,
                    kann ein neuer ADC‑Abschluss dazwischenkommen und die Werte inkonsistent machen.
                    <strong>ADCL zuerst lesen</strong> sichert die Werte atomar.`,
        },
        {
          title: 'A4: Welche maximale Abtastrate hat der AVR‑ADC bei 16 MHz und Prescaler 128?',
          content: `ADC‑Takt = 16 MHz / 128 = 125 kHz. Eine Wandlung dauert 13 ADC‑Takte → 125 kHz / 13 ≈ <strong>9.615 Sps</strong>.`,
        },
      ])}
      ${renderInfobox({ icon: 'fas fa-graduation-cap', title: 'ADC & DAC für die Prüfung', type: 'success',
        body: `Auflösung: 2^n Stufen, LSB = V_ref / 2^n. ADC: analog → digital, DAC: digital → analog.<br>
               AVR‑ADC: 10 Bit, Successive Approximation, Prescaler einstellbar.<br>
               Nyquist: f_sample ≥ 2 × f_max → sonst Aliasing.` })}
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