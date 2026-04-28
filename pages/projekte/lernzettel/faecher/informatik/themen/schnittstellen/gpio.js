// pages/projekte/lernzettel/faecher/informatik/themen/schnittstellen/gpio.js
// Informatik 3.1 — GPIO: digitale & analoge Ein-/Ausgabe

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
  prev: { label: '2.6 Pipelining & Cache', link: `${BASE}/themen/mikrocontroller/pipelining-cache` },
  next: { label: '3.2 ADC & DAC', link: `${BASE}/themen/schnittstellen/adc-dac` },
};

const TABS = [
  { key: 'grundlagen', label: '📌 Grundlagen' },
  { key: 'digital_out', label: '💡 Digitaler Ausgang' },
  { key: 'digital_in', label: '🔘 Digitaler Eingang' },
  { key: 'analog', label: '📊 Analog mit PWM' },
  { key: 'uebungen', label: '✏ Übungen' },
];

export default class GpioPage {
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
            <span>3.1 · GPIO</span>
          </nav>
          <h1 class="lz-sub-title">GPIO — digitale & analoge Ein-/Ausgabe</h1>
          <p class="lz-sub-subtitle">Ports, DDRx, PINx, PORTx, Taster entprellen, PWM als Analog-Ersatz</p>
          ${renderTags(['GPIO', 'DDR', 'PORT', 'PIN', 'Taster', 'Entprellung', 'BPE 3'])}
        </div>
      </section>
      <section class="lz-content-section">
        <div class="lz-section-wrap">
          <nav class="wim-tabs" id="gpioTabs" aria-label="GPIO">
            ${TABS.map((t, i) => `<button class="wim-tab${i === 0 ? ' active' : ''}" data-wim="${t.key}">${t.label}</button>`).join('')}
          </nav>
          ${this._panelGrundlagen()}
          ${this._panelDigitalOut()}
          ${this._panelDigitalIn()}
          ${this._panelAnalog()}
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
      ${renderInfobox({ icon: 'fas fa-microchip', title: 'Was ist GPIO?', type: 'info',
        body: `<strong>General Purpose Input/Output</strong> — universelle Ein‑/Ausgabepins eines Mikrocontrollers.
               Jeder Pin kann als <strong>Eingang</strong> (Sensor lesen) oder <strong>Ausgang</strong> (LED, Motor) konfiguriert werden.
               Auf AVR‑Controllern wird jeder Pin über drei Register gesteuert: DDRx, PORTx, PINx.` })}
      <h3 class="lz-h3">Die drei wichtigsten GPIO‑Register (AVR)</h3>
      ${renderTable({
        headers: ['Register', 'Bedeutung', 'Schreibbar?', 'Funktion'],
        rows: [
          ['<code>DDRx</code>', 'Data Direction Register', 'Ja', 'Bestimmt Richtung: 1 = Ausgang, 0 = Eingang'],
          ['<code>PORTx</code>', 'Data Register', 'Ja', 'Ausgang: setzt Pin auf HIGH/LOW; Eingang: aktiviert Pull‑up'],
          ['<code>PINx</code>', 'Input Pins Address', 'Nein (nur lesen)', 'Liest den aktuellen Pegel des Pins (0 oder 1)'],
        ],
      })}
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:1.5rem;border-radius:10px;font-family:monospace;font-size:.85rem;line-height:1.7;">
<span style="color:#94a3b8;">// Beispiel: Port B, Pin 5 (Arduino Pin 13 / LED)</span>
DDRB  |= (1 << DDB5);   <span style="color:#94a3b8;">// Pin als Ausgang (DDRx)</span>
PORTB |= (1 << PORTB5); <span style="color:#94a3b8;">// HIGH setzen</span>
PORTB &= ~(1 << PORTB5);<span style="color:#94a3b8;">// LOW setzen</span>

<span style="color:#94a3b8;">// Taster an Port D, Pin 2 lesen (mit Pull‑up)</span>
DDRD  &= ~(1 << DDD2);  <span style="color:#94a3b8;">// Eingang</span>
PORTD |= (1 << PORTD2); <span style="color:#94a3b8;">// Pull‑up aktivieren</span>
<span style="color:#60a5fa;">if</span> (PIND & (1 << PD2)) { <span style="color:#94a3b8;">// Taster losgelassen?</span>
    <span style="color:#94a3b8;">// ...</span>
}</pre>
      ${renderInfobox({ icon: 'fas fa-lightbulb', title: 'Pull‑up Widerstand', type: 'info',
        body: `Wenn ein Pin als Eingang konfiguriert ist, kann ein <strong>interner Pull‑up</strong> aktiviert werden (PORTx = 1).
               Der Pin wird dann über einen internen Widerstand auf HIGH gezogen — ein Taster schaltet ihn auf GND (LOW).
               <strong>Vorteil:</strong> Kein externer Widerstand nötig.` })}
    </div>`;
  }

  _panelDigitalOut() {
    return `<div class="wim-category hidden" data-wim-cat="digital_out">
      <h3 class="lz-h3">Digitaler Ausgang — LED steuern</h3>
      ${renderTable({
        headers: ['Funktion', 'Arduino (C++)', 'AVR‑Register (C)', 'Assembler'],
        rows: [
          ['Pin als Ausgang', '<code>pinMode(13, OUTPUT);</code>', '<code>DDRB |= (1<<5);</code>', '<code>sbi DDRB, 5</code>'],
          ['HIGH setzen', '<code>digitalWrite(13, HIGH);</code>', '<code>PORTB |= (1<<5);</code>', '<code>sbi PORTB, 5</code>'],
          ['LOW setzen', '<code>digitalWrite(13, LOW);</code>', '<code>PORTB &= ~(1<<5);</code>', '<code>cbi PORTB, 5</code>'],
          ['Toggle', '<code>digitalWrite(13, !digitalRead(13));</code>', '<code>PINB = (1<<5);</code>', '<code>sbi PINB, 5</code>'],
        ],
      })}
      <h4 class="lz-h4">Praktisches Beispiel: LED blinken (Arduino)</h4>
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:1.5rem;border-radius:10px;font-family:monospace;font-size:.85rem;line-height:1.7;">
<span style="color:#60a5fa;">void</span> setup() {
    pinMode(LED_BUILTIN, OUTPUT);
}

<span style="color:#60a5fa;">void</span> loop() {
    digitalWrite(LED_BUILTIN, HIGH);
    delay(1000);
    digitalWrite(LED_BUILTIN, LOW);
    delay(1000);
}</pre>
      ${renderInfobox({ icon: 'fas fa-exclamation-triangle', title: 'Strombegrenzung beachten!', type: 'warning',
        body: `Jeder GPIO‑Pin kann maximal <strong>20‑40 mA</strong> liefern (abhängig vom µC).
               Eine rote LED ohne Vorwiderstand zerstört den Pin oder die LED.
               <strong>Vorwiderstand:</strong> R = (U_µC − U_LED) / I_LED (z.B. (5V − 2V)/0,02A = 150Ω).` })}
    </div>`;
  }

  _panelDigitalIn() {
    return `<div class="wim-category hidden" data-wim-cat="digital_in">
      <h3 class="lz-h3">Digitaler Eingang — Taster auswerten</h3>
      <p class="lz-prose">
        Ein Taster wird meist zwischen Pin und GND geschaltet, der interne Pull‑up aktiviert.
        Ungedrückt = HIGH, gedrückt = LOW.
      </p>
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:1.5rem;border-radius:10px;font-family:monospace;font-size:.85rem;line-height:1.7;">
<span style="color:#60a5fa;">const int</span> tasterPin = 2;
<span style="color:#60a5fa;">const int</span> ledPin   = 13;

<span style="color:#60a5fa;">void</span> setup() {
    pinMode(tasterPin, INPUT_PULLUP);  <span style="color:#94a3b8;">// Pull‑up aktivieren</span>
    pinMode(ledPin, OUTPUT);
}

<span style="color:#60a5fa;">void</span> loop() {
    <span style="color:#60a5fa;">if</span> (digitalRead(tasterPin) == LOW) {  <span style="color:#94a3b8;">// Taster gedrückt</span>
        digitalWrite(ledPin, HIGH);
    } <span style="color:#60a5fa;">else</span> {
        digitalWrite(ledPin, LOW);
    }
}</pre>
      <h4 class="lz-h4">Entprellung — warum und wie?</h4>
      ${renderInfobox({ icon: 'fas fa-waveform', title: 'Prellen des Tasters', type: 'info',
        body: `Mechanische Taster "prellen": Beim Drücken oder Loslassen öffnen/schließen sie mehrfach
               innerhalb von ~5‑20 ms. Die CPU würde das als mehrere Drücker erkennen.<br>
               <strong>Lösungen:</strong> Software‑Entprellung (delay(), Timer) oder Hardware‑RC‑Glied.` })}
      ${renderAccordion([
        {
          title: 'Software-Entprellung (einfach mit delay())',
          content: `<pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:1rem;border-radius:8px;font-family:monospace;font-size:.85rem;">
<span style="color:#60a5fa;">if</span> (digitalRead(tasterPin) == LOW) {
    delay(20);                      <span style="color:#94a3b8;">// Prellzeit abwarten</span>
    <span style="color:#60a5fa;">if</span> (digitalRead(tasterPin) == LOW) {
        <span style="color:#94a3b8;">// Gültiger Tastendruck</span>
    }
}</pre>`,
        },
        {
          title: 'Fortgeschritten: Entprellung mit Timer (nicht‑blockierend)',
          content: `Speichere den letzten Zeitpunkt des Tastendrucks (millis()) und ignoriere weitere
                    Wechsel innerhalb von 20 ms — ideal für Echtzeitsysteme.`,
        },
      ])}
    </div>`;
  }

  _panelAnalog() {
    return `<div class="wim-category hidden" data-wim-cat="analog">
      <h3 class="lz-h3">Analoge Ausgabe mit PWM (Pulsweitenmodulation)</h3>
      <p class="lz-prose">
        Echte analoge Ausgänge haben die meisten µC nicht. Stattdessen wird <strong>PWM</strong> verwendet:
        Der Pin schaltet sehr schnell zwischen HIGH und LOW, der Mittelwert ergibt eine analoge Spannung.
      </p>
      ${renderFormulaBox({
        label: 'Duty Cycle → Mittelwert',
        formula: 'U_avg = U_HIGH × (t_on / T)',
        desc: 'Beispiel: 5V, 50% Duty Cycle → 2,5V. 8‑Bit PWM (0‑255): Wert 128 ≈ 50%',
      })}
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:1.5rem;border-radius:10px;font-family:monospace;font-size:.85rem;line-height:1.7;">
<span style="color:#60a5fa;">void</span> setup() {
    pinMode(9, OUTPUT);   <span style="color:#94a3b8;">// Pin 9 unterstützt PWM</span>
}

<span style="color:#60a5fa;">void</span> loop() {
    <span style="color:#94a3b8;">// Fade-In / Fade-Out</span>
    <span style="color:#60a5fa;">for</span> (<span style="color:#60a5fa;">int</span> i = 0; i <= 255; i++) {
        analogWrite(9, i);
        delay(10);
    }
    <span style="color:#60a5fa;">for</span> (<span style="color:#60a5fa;">int</span> i = 255; i >= 0; i--) {
        analogWrite(9, i);
        delay(10);
    }
}</pre>
      ${renderInfobox({ icon: 'fas fa-microphone', title: 'Analoger Eingang?', type: 'info',
        body: `Für echte analoge Eingänge (z.B. Potentiometer) wird ein <strong>ADC (Analog‑Digital‑Converter)</strong> verwendet.
               Das ist ein eigenes Thema — siehe Kapitel <strong>3.2 ADC & DAC</strong>.` })}
    </div>`;
  }

  _panelUebungen() {
    return `<div class="wim-category hidden" data-wim-cat="uebungen">
      <h3 class="lz-h3">Übungsaufgaben</h3>
      ${renderAccordion([
        {
          title: 'A1: Welche Register werden für einen Ausgangspin benötigt?',
          content: `<strong>DDRx</strong> (Richtung: 1 = Ausgang) und <strong>PORTx</strong> (Wert: 1 = HIGH, 0 = LOW).<br>
          Optional kann man mit <code>PINx</code> den Wert toggeln: <code>PINB |= (1<<5);</code>.`,
        },
        {
          title: 'A2: Wie konfiguriert man einen Pin als Eingang mit Pull‑up auf AVR‑Register‑Ebene?',
          content: `<code>DDRD &= ~(1 << DDD2);</code> (Eingang)<br>
          <code>PORTD |= (1 << PORTD2);</code> (Pull‑up aktiv)<br>
          Lesen: <code>if (PIND & (1 << PD2)) { /* Pin ist HIGH */ }</code>`,
        },
        {
          title: 'A3: Warum benötigt eine LED einen Vorwiderstand? Berechne ihn für 5V, 2V LED, 20mA.',
          content: `R = (U_µC − U_LED) / I = (5V − 2V) / 0,02A = 3V / 0,02A = <strong>150 Ω</strong>.<br>
          Nächstgelegener Normwert: 180 Ω oder 220 Ω (etwas dunkler, aber sicher).`,
        },
        {
          title: 'A4: Erkläre das Prellen eines Tasters und nenne zwei Entprellmethoden.',
          content: `Beim Schließen des Kontakts federt der Taster → mehrere HIGH/LOW‑Wechsel in < 20 ms.<br>
          <strong>Methoden:</strong> 1) Software‑delay(20) nach erstem Kontakt, 2) Timer‑gesteuerte Abtastung,
          3) RC‑Glied + Schmitt‑Trigger (Hardware).`,
        },
      ])}
      ${renderInfobox({ icon: 'fas fa-graduation-cap', title: 'GPIO für die Prüfung', type: 'success',
        body: `<strong>DDRx</strong> = Richtung, <strong>PORTx</strong> = Ausgangswert / Pull‑up,
               <strong>PINx</strong> = Eingang lesen. Pull‑up = internen Widerstand nach HIGH aktivieren.
               Taster: meist gegen GND mit Pull‑up → gedrückt = LOW.<br>
               PWM = schnelles Ein‑/Ausschalten → Mittelwert = analoge Spannung.` })}
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