// pages/projekte/lernzettel/faecher/informatik/themen/iot/sensoren-aktoren.js
// Informatik 7.2 — IoT-Sensoren, Aktoren & ESP32

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
  prev: { label: '7.1 MQTT', link: `${BASE}/themen/iot/mqtt` },
  next: { label: '7.3 Advanced IoT', link: `${BASE}/themen/iot/advanced-iot` },
};

const TABS = [
  { key: 'esp32',    label: '🔮 ESP32-Plattform' },
  { key: 'sensoren', label: '🌡 Sensoren' },
  { key: 'aktoren',  label: '⚙ Aktoren' },
  { key: 'uebungen', label: '✏ Übungen' },
];

export default class SensorenAktorenPage {
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
            <span>7.2 · IoT-Sensoren & ESP32</span>
          </nav>
          <h1 class="lz-sub-title">IoT-Sensoren, Aktoren & ESP32-Plattform</h1>
          <p class="lz-sub-subtitle">BME280, DHT22, HC-SR04, Deep Sleep, FreeRTOS</p>
          ${renderTags(['ESP32', 'BME280', 'DHT22', 'Deep Sleep', 'Aktor', 'GPIO', 'BPE 11'])}
        </div>
      </section>
      <section class="lz-content-section">
        <div class="lz-section-wrap">
          <nav class="wim-tabs" id="sensorenTabs" aria-label="IoT-Sensoren & ESP32">
            ${TABS.map((t, i) => `<button class="wim-tab${i === 0 ? ' active' : ''}" data-wim="${t.key}">${t.label}</button>`).join('')}
          </nav>
          ${this._panelESP32()}
          ${this._panelSensoren()}
          ${this._panelAktoren()}
          ${this._panelUebungen()}
        </div>
      </section>
      <section class="lz-content-section" style="padding-top:0;">
        <div class="lz-section-wrap">${renderPageNav(NAV)}</div>
      </section>
      ${footerHTML(this.router)}`;
  }

  _panelESP32() {
    return `<div class="wim-category active" data-wim-cat="esp32">
      ${renderInfobox({ icon: 'fas fa-microchip', title: 'ESP32 – Das IoT‑Kraftpaket', type: 'info',
        body: `Der <strong>ESP32</strong> von Espressif ist der meistgenutzte µC für IoT:
               Preis ~3‑5€, Dual‑Core 240 MHz, WLAN + Bluetooth, viele Peripherie (ADC, DAC, I²C, SPI, UART, CAN, Touch).` })}
      ${renderTable({
        headers: ['Eigenschaft', 'ESP32', 'Arduino Uno (ATmega328P)'],
        rows: [
          ['CPU', 'Dual‑Core Xtensa LX6, 240 MHz', 'AVR, 16 MHz'],
          ['SRAM', '520 KB', '2 KB'],
          ['Flash', '4‑16 MB (extern)', '32 KB'],
          ['WLAN', '802.11 b/g/n (integriert)', 'Nein (Shield nötig)'],
          ['Bluetooth', 'BT Classic + BLE', 'Nein'],
          ['ADC', '12 Bit, 18 Kanäle', '10 Bit, 6 Kanäle'],
          ['DAC', '8 Bit, 2 Kanäle', 'Nein'],
          ['Betriebsspannung', '3,3 V (I/O!)', '5 V'],
          ['Stromaufnahme', '~240 mA (WiFi aktiv), 10 µA (Deep Sleep)', '~50 mA'],
        ],
      })}
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:1rem;border-radius:8px;font-family:monospace;font-size:.85rem;">
<span style="color:#94a3b8;">// Deep Sleep – extrem stromsparend</span>
esp_sleep_enable_timer_wakeup(<span style="color:#34d399;">30</span> * <span style="color:#34d399;">1000000</span>); <span style="color:#94a3b8;">// 30 Sekunden</span>
esp_deep_sleep_start();   <span style="color:#94a3b8;">// µC schläft, danach Reset</span>

<span style="color:#94a3b8;">// Touch‑Pins (kapazitiv)</span>
<span style="color:#60a5fa;">int</span> touch = touchRead(T0);   <span style="color:#94a3b8;">// GPIO4</span>

<span style="color:#94a3b8;">// Hall‑Sensor (eingebaut)</span>
<span style="color:#60a5fa;">int</span> hall = hallRead();

<span style="color:#94a3b8;">// Dual‑Core‑Aufgaben (FreeRTOS)</span>
xTaskCreatePinnedToCore(task1, <span style="color:#fbbf24;">"Task1"</span>, <span style="color:#34d399;">10000</span>, NULL, <span style="color:#34d399;">1</span>, NULL, <span style="color:#34d399;">0</span>);
xTaskCreatePinnedToCore(task2, <span style="color:#fbbf24;">"Task2"</span>, <span style="color:#34d399;">10000</span>, NULL, <span style="color:#34d399;">1</span>, NULL, <span style="color:#34d399;">1</span>);
</pre>
    </div>`;
  }

  _panelSensoren() {
    return `<div class="wim-category hidden" data-wim-cat="sensoren">
      <h3 class="lz-h3">Wichtige IoT‑Sensoren</h3>
      ${renderTable({
        headers: ['Sensor', 'Messgröße', 'Interface', 'Auflösung', 'Typische Anwendung'],
        rows: [
          ['DHT22', 'Temperatur + Luftfeuchte', '1‑Wire (proprietär)', '0,1°C / 0,1%', 'Raumklima'],
          ['BME280', 'Temp + Druck + Feuchte', 'I²C / SPI', '0,01 hPa', 'Wetterstation, Höhenmessung'],
          ['DS18B20', 'Temperatur', '1‑Wire', '0,0625°C', 'Wassertemperatur, Kühlkette'],
          ['MPU‑6050', 'Beschleunigung + Gyroskop', 'I²C', '±16g / ±2000°/s', 'Lageerkennung, Schrittmessung'],
          ['HC‑SR04', 'Abstand (Ultraschall)', 'GPIO (Trig/Echo)', '~0,3 cm', 'Entfernungsmessung, Roboter'],
          ['PIR HC‑SR501', 'Bewegung (Infrarot)', 'GPIO (digital)', 'An/Aus', 'Alarmanlage, Lichtsteuerung'],
          ['MQ‑2', 'Gas (Rauch, LPG, Methan)', 'ADC (analog)', 'variabel', 'Gaswarner, Rauchmelder'],
        ],
      })}
      <h4 class="lz-h4">BME280 – vollständiges Code‑Beispiel</h4>
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:1rem;border-radius:8px;font-family:monospace;">
<span style="color:#60a5fa;">#include</span> <span style="color:#fbbf24;">&lt;Wire.h&gt;</span>
<span style="color:#60a5fa;">#include</span> <span style="color:#fbbf24;">&lt;Adafruit_BME280.h&gt;</span>

Adafruit_BME280 bme;

<span style="color:#60a5fa;">void</span> setup() {
    Wire.begin();
    <span style="color:#60a5fa;">if</span> (!bme.begin(<span style="color:#34d399;">0x76</span>)) { <span style="color:#94a3b8;">// I²C‑Adresse 0x76 (manchmal 0x77)</span>
        Serial.println(<span style="color:#fbbf24;">"Sensor nicht gefunden"</span>);
        <span style="color:#60a5fa;">return</span>;
    }
    bme.setSampling(Adafruit_BME280::MODE_NORMAL,
                    Adafruit_BME280::SAMPLING_X16,
                    Adafruit_BME280::SAMPLING_X16,
                    Adafruit_BME280::SAMPLING_X16,
                    Adafruit_BME280::FILTER_X16);
}

<span style="color:#60a5fa;">void</span> loop() {
    Serial.printf(<span style="color:#fbbf24;">"T: %.1f°C | H: %.1f%% | P: %.1f hPa\n"</span>,
                  bme.readTemperature(),
                  bme.readHumidity(),
                  bme.readPressure() / <span style="color:#34d399;">100.0f</span>);
    delay(<span style="color:#34d399;">2000</span>);
}
</pre>
    </div>`;
  }

  _panelAktoren() {
    return `<div class="wim-category hidden" data-wim-cat="aktoren">
      <h3 class="lz-h3">Aktoren – Das IoT reagiert</h3>
      ${renderMerkboxGrid([
        { icon: 'fas fa-lightbulb', title: 'LED / WS2812B', text: 'Digitale Ausgänge (HIGH/LOW) oder adressierbare RGB‑LEDs (WS2812B, NeoPixel) – ein Datenpin, viele Farben.' },
        { icon: 'fas fa-fan', title: 'Motor / Relais', text: 'DC‑Motor mit H‑Brücke (L298N) + PWM für Geschwindigkeit. Relais für 230V Lasten (Transistor oder Optokoppler).' },
        { icon: 'fas fa-tv', title: 'OLED‑Display (SSD1306)', text: '128×64 Pixel über I²C. Kein Hintergrundlicht nötig – stromsparend. Library: U8g2 oder Adafruit_SSD1306.' },
        { icon: 'fas fa-volume-up', title: 'Buzzer / Lautsprecher', text: 'Passiver Buzzer via PWM (Tonhöhe = Frequenz). Aktiver Buzzer: nur HIGH/LOW. MAX98357 für Audio‑Streaming.' },
        { icon: 'fas fa-microchip', title: 'Servo', text: 'PWM‑Signal (50 Hz), Pulsbreite 1‑2 ms → Position 0‑180°. Bibliothek: ESP32Servo.' },
      ])}
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:1rem;border-radius:8px;font-family:monospace;">
<span style="color:#94a3b8;">// WS2812B (NeoPixel) mit ESP32</span>
<span style="color:#60a5fa;">#include</span> <span style="color:#fbbf24;">&lt;Adafruit_NeoPixel.h&gt;</span>
Adafruit_NeoPixel strip(<span style="color:#34d399;">8</span>, <span style="color:#34d399;">5</span>, NEO_GRB + NEO_KHZ800);
strip.begin();
strip.setPixelColor(<span style="color:#34d399;">0</span>, strip.Color(<span style="color:#34d399;">255</span>, <span style="color:#34d399;">0</span>, <span style="color:#34d399;">0</span>)); <span style="color:#94a3b8;">// Rot</span>
strip.show();

<span style="color:#94a3b8;">// Servo mit ESP32 (PWM automatisch)</span>
<span style="color:#60a5fa;">#include</span> <span style="color:#fbbf24;">&lt;ESP32Servo.h&gt;</span>
Servo servo;
servo.attach(<span style="color:#34d399;">12</span>);
servo.write(<span style="color:#34d399;">90</span>);   <span style="color:#94a3b8;">// Mittelstellung</span>
</pre>
    </div>`;
  }

  _panelUebungen() {
    return `<div class="wim-category hidden" data-wim-cat="uebungen">
      <h3 class="lz-h3">Übungsaufgaben</h3>
      ${renderAccordion([
        {
          title: 'A1: Nenne drei Vorteile des ESP32 gegenüber einem Arduino Uno für IoT.',
          content: `Integriertes WLAN und Bluetooth, viel mehr RAM/Flash, Dual‑Core, höhere Taktfrequenz, Deep‑Sleep (10 µA), mehr ADC‑Kanäle und 12‑Bit Auflösung.`,
        },
        {
          title: 'A2: Welche Schnittstelle nutzt der BME280 typischerweise? Wie viele Leitungen werden benötigt?',
          content: `I²C (SDA, SCL) – 2 Leitungen + GND, optional VCC. Alternativ SPI (4 Leitungen).`,
        },
        {
          title: 'A3: Warum ist Deep Sleep für batteriebetriebene IoT‑Geräte wichtig?',
          content: `Der ESP32 verbraucht im Deep Sleep nur ~10 µA statt 240 mA (mit WLAN). Damit kann eine Batterie Jahre halten, anstatt Stunden.`,
        },
        {
          title: 'A4: Wie steuert man einen DC‑Motor in zwei Richtungen mit einem ESP32?',
          content: `Verwendung einer H‑Brücke (z.B. L298N). Zwei GPIOs legen die Richtung fest (IN1, IN2). Ein dritter PWM‑Pin (Enable) regelt die Geschwindigkeit.`,
        },
      ])}
      ${renderInfobox({ icon: 'fas fa-graduation-cap', title: 'IoT‑Sensoren & Aktoren für die Prüfung', type: 'success',
        body: `• ESP32: Dual‑Core, WLAN/BT, Deep Sleep, 3,3V‑Logik.<br>
               • Typische Sensoren: DHT22 (Temperatur/Feuchte), BME280 (Temp/Druck/Feuchte), HC‑SR04 (Abstand).<br>
               • Aktoren: LED, Servo, Motor mit H‑Brücke, OLED‑Display.<br>
               • Schnittstellen: I²C, SPI, 1‑Wire, GPIO, PWM.` })}
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