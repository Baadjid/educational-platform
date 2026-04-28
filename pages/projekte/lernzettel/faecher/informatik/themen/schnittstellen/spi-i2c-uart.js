// pages/projekte/lernzettel/faecher/informatik/themen/schnittstellen/spi-i2c-uart.js
// Informatik 3.4 — Serielle Protokolle: SPI, I²C, UART

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
  prev: { label: '3.3 PWM', link: `${BASE}/themen/schnittstellen/pwm` },
  next: { label: '3.5 USB, CAN-Bus, Ethernet', link: `${BASE}/themen/schnittstellen/usb-can` },
};

const TABS = [
  { key: 'uart', label: '🔌 UART (seriell)' },
  { key: 'i2c',  label: '🔗 I²C (IIC)' },
  { key: 'spi',  label: '⚡ SPI' },
  { key: 'vergleich', label: '⚖ Vergleich' },
  { key: 'uebungen', label: '✏ Übungen' },
];

export default class SpiI2cUartPage {
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
            <span>3.4 · SPI, I²C & UART</span>
          </nav>
          <h1 class="lz-sub-title">Serielle Protokolle: SPI, I²C & UART</h1>
          <p class="lz-sub-subtitle">Datenübertragung zwischen µC und Peripherie – synchron/asynchron, Master/Slave</p>
          ${renderTags(['UART', 'SPI', 'I²C', 'I2C', 'Serielle Schnittstelle', 'Master/Slave', 'BPE 3'])}
        </div>
      </section>
      <section class="lz-content-section">
        <div class="lz-section-wrap">
          <nav class="wim-tabs" id="serialTabs" aria-label="Serielle Protokolle">
            ${TABS.map((t, i) => `<button class="wim-tab${i === 0 ? ' active' : ''}" data-wim="${t.key}">${t.label}</button>`).join('')}
          </nav>
          ${this._panelUART()}
          ${this._panelI2C()}
          ${this._panelSPI()}
          ${this._panelVergleich()}
          ${this._panelUebungen()}
        </div>
      </section>
      <section class="lz-content-section" style="padding-top:0;">
        <div class="lz-section-wrap">${renderPageNav(NAV)}</div>
      </section>
      ${footerHTML(this.router)}`;
  }

  _panelUART() {
    return `<div class="wim-category active" data-wim-cat="uart">
      ${renderInfobox({ icon: 'fas fa-exchange-alt', title: 'UART – Universal Asynchronous Receiver/Transmitter', type: 'info',
        body: `Asynchrone, bidirektionale Punkt‑zu‑Punkt‑Verbindung.
               <strong>Keine gemeinsame Taktleitung</strong> – beide Seiten müssen vorher auf gleiche Baudrate eingestellt sein.
               Typische Anwendungen: PC‑µC‑Kommunikation (USB‑UART‑Bridge), GPS‑Module, Bluetooth‑HC‑05.` })}
      <h3 class="lz-h3">UART‑Signalleitungen</h3>
      ${renderTable({
        headers: ['Leitung', 'Richtung', 'Bedeutung'],
        rows: [
          ['TX (Transmit)', 'µC → Empfänger', 'Sendet Daten vom µC zum anderen Gerät'],
          ['RX (Receive)', 'µC ← Empfänger', 'Empfängt Daten vom anderen Gerät'],
          ['GND', 'Masse', 'Bezugspotential (zwingend nötig!)'],
          ['RTS/CTS (optional)', 'bidirektional', 'Hardware‑Flusskontrolle'],
        ],
      })}
      <h4 class="lz-h4">Datenframe (asynchron)</h4>
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:1.5rem;border-radius:10px;font-family:monospace;font-size:.85rem;line-height:1.8;">
Start‑Bit  Datenbits (meist 8)  Parität (optional)  Stop‑Bit(s)
    │            │                    │                 │
    ▼            ▼                    ▼                 ▼
  [ 0 ] [ 1 0 1 0 0 1 1 0 ] [ P ] [ 1 ]

Baudrate = Bits pro Sekunde (inkl. Start/Stop/Parität)
Beispiel: 9600 Baud, 8N1 (8 Datenbits, keine Parität, 1 Stop‑Bit)
→ Übertragungsdauer pro Byte = 10 Bit / 9600 = 1,04 ms
</pre>
      <h4 class="lz-h4">Arduino‑Beispiel (Serial.print)</h4>
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:1.5rem;border-radius:10px;font-family:monospace;font-size:.85rem;line-height:1.7;">
<span style="color:#60a5fa;">void</span> setup() {
    Serial.begin(9600);          <span style="color:#94a3b8;">// Baudrate einstellen</span>
}
<span style="color:#60a5fa;">void</span> loop() {
    Serial.println(<span style="color:#fbbf24;">"Hello µC"</span>);
    delay(1000);
}

<span style="color:#94a3b8;">// AVR‑Register für UART</span>
UBRR0H = (F_CPU / (16UL * 9600) - 1) >> 8;   <span style="color:#94a3b8;">// Baudrate einstellen</span>
UBRR0L = (F_CPU / (16UL * 9600) - 1);
UCSR0B = (1 << TXEN0) | (1 << RXEN0);        <span style="color:#94a3b8;">// Senden/Empfangen aktivieren</span>
UCSR0C = (1 << UCSZ01) | (1 << UCSZ00);      <span style="color:#94a3b8;">// 8 Datenbits, 1 Stop, keine Parität</span>
</pre>
    </div>`;
  }

  _panelI2C() {
    return `<div class="wim-category hidden" data-wim-cat="i2c">
      <h3 class="lz-h3">I²C – Inter‑Integrated Circuit (IIC)</h3>
      ${renderInfobox({ icon: 'fas fa-chart-line', title: '2‑Leiter‑Bus mit Adressierung', type: 'info',
        body: `Synchroner Bus mit <strong>Master‑Slave‑Architektur</strong>. Jeder Slave hat eine eindeutige 7‑Bit‑Adresse.
               <strong>SDA</strong> (Daten), <strong>SCL</strong> (Takt). Mehrere Slaves möglich, auch mehrere Master.
               Typisch: Sensoren (BME280, MPU6050), EEPROMs, OLED‑Displays.` })}
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:1.5rem;border-radius:10px;font-family:monospace;font-size:.85rem;line-height:1.8;">
I²C‑Frame:
┌──────┬─────────┬──────────┬─────────┬─────────┬──────┐
│ Start│ Adresse │ R/W‑Bit │ ACK (vom Slave) │ Daten │ Stop│
└──────┴─────────┴──────────┴─────────┴─────────┴──────┘

Beispiel: Master liest 1 Byte von Slave mit Adresse 0x40
→ Start | 0x40 (Adresse) | 1 (Read) | ACK | 1 Byte Daten | NACK | Stop

Pull‑up Widerstände: SDA und SCL müssen auf VCC gezogen werden (typisch 4,7 kΩ).
</pre>
      <h4 class="lz-h4">Arduino‑Beispiel (Wire‑Bibliothek)</h4>
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:1.5rem;border-radius:10px;font-family:monospace;font-size:.85rem;line-height:1.7;">
<span style="color:#60a5fa;">#include</span> <span style="color:#fbbf24;">&lt;Wire.h&gt;</span>

<span style="color:#60a5fa;">void</span> setup() {
    Wire.begin();                 <span style="color:#94a3b8;">// als Master initialisieren</span>
    Serial.begin(9600);
}

<span style="color:#60a5fa;">void</span> loop() {
    Wire.requestFrom(<span style="color:#34d399;">0x40</span>, <span style="color:#34d399;">1</span>);   <span style="color:#94a3b8;">// 1 Byte von Adresse 0x40 anfordern</span>
    <span style="color:#60a5fa;">while</span> (Wire.available()) {
        <span style="color:#60a5fa;">byte</span> data = Wire.read();
        Serial.println(data);
    }
    delay(500);
}</pre>
    </div>`;
  }

  _panelSPI() {
    return `<div class="wim-category hidden" data-wim-cat="spi">
      <h3 class="lz-h3">SPI – Serial Peripheral Interface</h3>
      ${renderInfobox({ icon: 'fas fa-bolt', title: 'Schneller 4‑Leiter‑Bus', type: 'info',
        body: `Synchron, vollduplex, Master‑Slave. <strong>MISO, MOSI, SCK, SS</strong>.
               Jeder Slave benötigt eine eigene CS‑Leitung (Chip Select). Sehr hohe Geschwindigkeiten (bis 50+ MHz).
               Typisch: SD‑Karten, Displays (TFT, ILI9341), Flash‑Speicher, ADC/DAC‑Chips.` })}
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:1.5rem;border-radius:10px;font-family:monospace;font-size:.85rem;line-height:1.8;">
SPI‑Signale:
  MOSI (Master Out Slave In)   → Daten vom Master zum Slave
  MISO (Master In Slave Out)   → Daten vom Slave zum Master
  SCK  (Serial Clock)          → Takt (vom Master erzeugt)
  SS   (Slave Select)          → Aktiviert den Slave (LOW)

SPI‑Modi (CPOL/CPHA) bestimmen Taktpolarität und ‑phase.
</pre>
      <h4 class="lz-h4">Arduino‑Beispiel (SPI‑Bibliothek)</h4>
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:1.5rem;border-radius:10px;font-family:monospace;font-size:.85rem;line-height:1.7;">
<span style="color:#60a5fa;">#include</span> <span style="color:#fbbf24;">&lt;SPI.h&gt;</span>

<span style="color:#60a5fa;">const int</span> csPin = 10;

<span style="color:#60a5fa;">void</span> setup() {
    pinMode(csPin, OUTPUT);
    digitalWrite(csPin, HIGH);
    SPI.begin();                     <span style="color:#94a3b8;">// SPI initialisieren</span>
    SPI.setClockDivider(SPI_CLOCK_DIV4);  <span style="color:#94a3b8;">// 4 MHz bei 16 MHz CPU</span>
}

<span style="color:#60a5fa;">void</span> loop() {
    digitalWrite(csPin, LOW);        <span style="color:#94a3b8;">// Slave auswählen</span>
    <span style="color:#60a5fa;">byte</span> response = SPI.transfer(0x55); <span style="color:#94a3b8;">// Senden und gleichzeitig empfangen</span>
    digitalWrite(csPin, HIGH);
}</pre>
    </div>`;
  }

  _panelVergleich() {
    return `<div class="wim-category hidden" data-wim-cat="vergleich">
      <h3 class="lz-h3">Direkter Vergleich der Protokolle</h3>
      ${renderTable({
        headers: ['Eigenschaft', 'UART', 'I²C', 'SPI'],
        rows: [
          ['Art', 'Asynchron', 'Synchron', 'Synchron'],
          ['Leitungen', '2 (TX, RX) + GND', '2 (SDA, SCL) + GND', '4 (MOSI, MISO, SCK, SS) + GND'],
          ['Vollduplex', 'Ja', 'Nein (halbduplex)', 'Ja'],
          ['Adressierung', 'Nein (Punkt‑zu‑Punkt)', 'Ja (7‑Bit / 10‑Bit)', 'Nein (über SS)'],
          ['Max. Geräte', '2', '112 (mit 7‑Bit)', 'Begrenzt durch Anzahl SS‑Pins'],
          ['Geschwindigkeit', 'bis ~1 Mbit/s', '100 kHz – 3,4 MHz', 'bis 50+ MHz'],
          ['Übertragungssicherheit', 'Start/Stop‑Bits, Parität', 'ACK/NACK, Arbitration', 'Keine (nur CS)'],
          ['Pull‑up', 'Nein', 'Ja (auf SDA/SCL)', 'Nein'],
          ['Typische Anwendung', 'Debug‑Ausgabe, GPS', 'Sensoren, EEPROMs', 'SD‑Karten, Displays'],
        ],
      })}
      ${renderMerkboxGrid([
        { icon: 'fas fa-check-circle', title: 'UART', text: 'Einfach für 2 Geräte, asynchron, Baudrate muss passen. Ideal für PC‑Kommunikation.' },
        { icon: 'fas fa-check-circle', title: 'I²C', text: 'Wenige Pins, viele Geräte, aber langsamer. Pull‑up nötig.' },
        { icon: 'fas fa-check-circle', title: 'SPI', text: 'Sehr schnell, vollduplex, aber viele Pins. Jeder Slave braucht eigene CS.' },
      ])}
    </div>`;
  }

  _panelUebungen() {
    return `<div class="wim-category hidden" data-wim-cat="uebungen">
      <h3 class="lz-h3">Übungsaufgaben</h3>
      ${renderAccordion([
        {
          title: 'A1: Berechne die Übertragungsdauer für 100 Bytes über UART bei 115200 Baud, 8N1.',
          content: `8N1 = 8 Daten + 1 Start + 1 Stop = 10 Bit pro Byte.<br>
          100 Byte × 10 Bit = 1000 Bit. Dauer = 1000 Bit / 115200 Bit/s ≈ <strong>8,68 ms</strong>.`,
        },
        {
          title: 'A2: Ein I²C‑Bus läuft mit 100 kHz. Wie lange dauert die Übertragung von 32 Bytes (inkl. Adresse)?',
          content: `Pro Byte: 8 Daten + 1 ACK = 9 Bit. Adresse: 7 Bit + 1 R/W + 1 ACK ≈ 9 Bit. Start/Stop je 1 Bit.<br>
          Summe ≈ 2 (Start/Stop) + 9 (Adresse) + 32 × 9 (Daten) ≈ 2 + 9 + 288 = 299 Bit.<br>
          Dauer = 299 / 100.000 ≈ <strong>2,99 ms</strong>.`,
        },
        {
          title: 'A3: Wozu dienen die Pull‑up‑Widerstände bei I²C?',
          content: `SDA und SCL sind Open‑Drain‑Leitungen. Die Treiber können nur auf GND ziehen, nicht aktiv HIGH.
          Die Pull‑ups ziehen die Leitungen auf HIGH, wenn kein Gerät zieht. So ist eine Arbitrierung (Bus‑Konfliktlösung) möglich.`,
        },
        {
          title: 'A4: Welches Protokoll würdest du für einen Temperatursensor wählen, der 3 cm vom µC entfernt ist? Begründe.',
          content: `I²C: 2 Leitungen, viele Sensoren verfügbar (BME280, BMP180). Oder SPI für höhere Geschwindigkeit.
          UART wäre Overkill, da Punkt‑zu‑Punkt und asynchron.`,
        },
      ])}
      ${renderInfobox({ icon: 'fas fa-graduation-cap', title: 'Serielle Protokolle für die Prüfung', type: 'success',
        body: `UART: asynchron, 2 Leitungen, Baudrate, 8N1 häufig.<br>
               I²C: synchron, 2 Leitungen (SDA, SCL), Pull‑up, Adressierung, langsam.<br>
               SPI: synchron, 4 Leitungen, vollduplex, sehr schnell, kein Adressierungs‑Overhead.<br>
               <strong>Merke:</strong> Je mehr Leitungen, desto schneller (in der Regel).` })}
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