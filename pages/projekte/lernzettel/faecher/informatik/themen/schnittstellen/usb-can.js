// pages/projekte/lernzettel/faecher/informatik/themen/schnittstellen/usb-can.js
// Informatik 3.5 — USB, CAN-Bus, Ethernet-Controller

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
  prev: { label: '3.4 SPI, I²C & UART', link: `${BASE}/themen/schnittstellen/spi-i2c-uart` },
  next: { label: '4.1 Programmier-Grundlagen', link: `${BASE}/themen/programmierung/grundlagen` },
};

const TABS = [
  { key: 'usb', label: '🔌 USB' },
  { key: 'can', label: '🚗 CAN-Bus' },
  { key: 'eth',  label: '🌐 Ethernet' },
  { key: 'vergleich', label: '⚖ Vergleich' },
  { key: 'uebungen', label: '✏ Übungen' },
];

export default class UsbCanPage {
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
            <span>3.5 · USB, CAN-Bus & Ethernet</span>
          </nav>
          <h1 class="lz-sub-title">USB, CAN-Bus & Ethernet‑Controller</h1>
          <p class="lz-sub-subtitle">Hochgeschwindigkeits‑Schnittstellen für µC und Peripherie</p>
          ${renderTags(['USB', 'CAN-Bus', 'Ethernet', 'OTG', 'Differenzsignale', 'BPE 3'])}
        </div>
      </section>
      <section class="lz-content-section">
        <div class="lz-section-wrap">
          <nav class="wim-tabs" id="usbCanTabs" aria-label="USB & CAN & Ethernet">
            ${TABS.map((t, i) => `<button class="wim-tab${i === 0 ? ' active' : ''}" data-wim="${t.key}">${t.label}</button>`).join('')}
          </nav>
          ${this._panelUSB()}
          ${this._panelCAN()}
          ${this._panelEthernet()}
          ${this._panelVergleich()}
          ${this._panelUebungen()}
        </div>
      </section>
      <section class="lz-content-section" style="padding-top:0;">
        <div class="lz-section-wrap">${renderPageNav(NAV)}</div>
      </section>
      ${footerHTML(this.router)}`;
  }

  _panelUSB() {
    return `<div class="wim-category active" data-wim-cat="usb">
      ${renderInfobox({ icon: 'fas fa-usb', title: 'USB – Universal Serial Bus', type: 'info',
        body: `Standard für PC‑Peripherie. USB 2.0: 480 Mbit/s (High‑Speed), USB 3.x: bis 20 Gbit/s.
               µCs haben oft USB‑Device (z.B. Arduino Leonardo, ESP32‑S2/S3) oder USB‑OTG (On‑The‑Go) für Host‑Funktionen.
               <strong>Differenzsignale:</strong> D+ und D− für Störfestigkeit.` })}
      <h3 class="lz-h3">USB‑Übertragungsarten</h3>
      ${renderTable({
        headers: ['Typ', 'Beschreibung', 'Anwendung', 'Fehlerkorrektur'],
        rows: [
          ['Control', 'Steuerung/Konfiguration', 'Geräteerkennung, Setup', 'Ja'],
          ['Interrupt', 'Kleine, regelmäßige Daten', 'Maus, Tastatur', 'Ja'],
          ['Bulk', 'Große Datenmengen, garantierte Lieferung', 'Drucker, Massenspeicher', 'Ja (CRC, Wiederholung)'],
          ['Isochron', 'Zeitkritisch, keine Wiederholung', 'Audio, Video', 'Nein (nur CRC‑Erkennung)'],
        ],
      })}
      <h4 class="lz-h4">USB‑Stecker und ‑Controller</h4>
      ${renderTable({
        headers: ['Typ', 'Merkmale', 'Typische µC'],
        rows: [
          ['USB 1.1 Full‑Speed', '12 Mbit/s', 'ATmega16U2 (Arduino Uno als USB‑UART)'],
          ['USB 2.0 Full‑Speed', '12 Mbit/s', 'ATmega32U4 (Arduino Leonardo, Micro)'],
          ['USB 2.0 High‑Speed', '480 Mbit/s', 'ESP32‑S2/S3, RP2040'],
          ['USB‑OTG', 'Kann als Host oder Device arbeiten', 'ESP32, STM32'],
          ['USB‑C', 'Verpolungssicher, bis 20V/5A (Power Delivery)', 'Moderne µCs mit USB‑C‑PHY'],
        ],
      })}
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:1.5rem;border-radius:10px;font-family:monospace;font-size:.85rem;line-height:1.7;">
<span style="color:#94a3b8;">// ESP32 als USB‑Device (TinyUSB Bibliothek)</span>
<span style="color:#60a5fa;">#include</span> <span style="color:#fbbf24;">"TinyUSB.h"</span>

<span style="color:#94a3b8;">// Serial over USB (CDC)</span>
<span style="color:#60a5fa;">void</span> setup() {
    Serial.begin(115200);
}
<span style="color:#60a5fa;">void</span> loop() {
    Serial.println(<span style="color:#fbbf24;">"USB‑CDC funktioniert!"</span>);
    delay(1000);
}</pre>
    </div>`;
  }

  _panelCAN() {
    return `<div class="wim-category hidden" data-wim-cat="can">
      <h3 class="lz-h3">CAN‑Bus – Controller Area Network</h3>
      ${renderInfobox({ icon: 'fas fa-car', title: 'Robuster Bus für Automotive & Industrie', type: 'info',
        body: `Differenzielles Zweidrahtsystem (CAN_H, CAN_L). <strong>Multimaster‑Fähig, Arbitrierung</strong> durch dominante/recessive Bits.
               Nachrichtenbasiert (11‑Bit‑ID oder 29‑Bit‑ID). Hohe Störfestigkeit, Fehlererkennung (CRC, ACK‑Slot).
               Typisch: Fahrzeuge (OBD‑II), Maschinensteuerungen, Medizintechnik.` })}
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:1.5rem;border-radius:10px;font-family:monospace;font-size:.85rem;line-height:1.8;">
CAN‑Frame (Standard 11‑Bit):
┌─────┬──────┬─────┬──────────┬─────┬──────┬─────┐
│ SOF │  ID  │ RTR │ Control  │Data │ CRC  │ ACK │
│ 1b  │ 11b  │ 1b  │   6b     │0‑64b│ 15b  │ 2b  │
└─────┴──────┴─────┴──────────┴─────┴──────┴─────┘

Bit‑Arbitrierung: Die ID mit der niedrigsten Nummer gewinnt.
Nachricht kann von allen Knoten empfangen werden (Broadcast).
</pre>
      <h4 class="lz-h4">CAN‑Controller & Transceiver</h4>
      ${renderTable({
        headers: ['Komponente', 'Aufgabe', 'Beispiel'],
        rows: [
          ['CAN‑Controller', 'Protokoll‑Handling, FIFOs, Filter', 'MCP2515 (extern), SJA1000, viele µC mit integriertem CAN (STM32, ESP32‑S3 nicht)'],
          ['CAN‑Transceiver', 'Pegelwandlung zu differenziellen Signalen', 'TJA1050, MCP2551'],
          ['CAN‑FIFO', 'Puffert mehrere Nachrichten', 'Oft 2‑8 Nachrichten tief'],
        ],
      })}
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:1.5rem;border-radius:10px;font-family:monospace;font-size:.85rem;line-height:1.7;">
<span style="color:#94a3b8;">// Arduino mit MCP2515 CAN‑Modul</span>
<span style="color:#60a5fa;">#include</span> <span style="color:#fbbf24;">&lt;mcp_can.h&gt;</span>
MCP_CAN CAN(10);   <span style="color:#94a3b8;">// CS‑Pin</span>

<span style="color:#60a5fa;">void</span> setup() {
    CAN.begin(MCP_ANY, CAN_500KBPS, MCP_16MHZ);
    CAN.setMode(MCP_NORMAL);
}

<span style="color:#60a5fa;">void</span> loop() {
    <span style="color:#60a5fa;">unsigned char</span> data[8] = {0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0x07, 0x08};
    CAN.sendMsgBuf(0x100, 0, 8, data);   <span style="color:#94a3b8;">// ID 0x100, Standard‑Frame, 8 Byte</span>
    delay(100);
}</pre>
    </div>`;
  }

  _panelEthernet() {
    return `<div class="wim-category hidden" data-wim-cat="eth">
      <h3 class="lz-h3">Ethernet‑Controller für µC</h3>
      ${renderInfobox({ icon: 'fas fa-ethernet', title: 'Kabelgebundene Netzwerkanbindung', type: 'info',
        body: `µCs können über Ethernet‑Controller (z.B. W5500, ENC28J60) in LANs eingebunden werden.
               Meist SPI‑Schnittstelle, integrierter TCP/IP‑Stack (oder extern).
               <strong>Geschwindigkeiten:</strong> 10/100 Mbit/s (Fast Ethernet), selten 1 Gbit/s im Embedded‑Bereich.` })}
      <h4 class="lz-h4">Beliebte Ethernet‑Controller</h4>
      ${renderTable({
        headers: ['Chip', 'Schnittstelle', 'Puffer', 'TCP/IP‑Stack', 'Typische Bibliothek'],
        rows: [
          ['W5500', 'SPI (max 80 MHz)', '32 KB', 'Hardware (integriert)', 'Ethernet3 (Arduino)'],
          ['ENC28J60', 'SPI (~10 MHz)', '8 KB', 'Software (extern)', 'UIPEthernet'],
          ['LAN8720A', 'RMII (mit PHY)', '—', 'Benötigt µC mit MAC', 'lwIP, FreeRTOS+TCP'],
          ['ESP32‑Ethernet', 'RMII (z.B. LAN8720)', '—', 'lwIP (integriert)', 'Ethernet.h'],
        ],
      })}
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:1.5rem;border-radius:10px;font-family:monospace;font-size:.85rem;line-height:1.7;">
<span style="color:#94a3b8;">// Arduino mit W5500 (Ethernet Shield)</span>
<span style="color:#60a5fa;">#include</span> <span style="color:#fbbf24;">&lt;Ethernet.h&gt;</span>

<span style="color:#60a5fa;">byte</span> mac[] = {0xDE, 0xAD, 0xBE, 0xEF, 0xFE, 0xED};
EthernetServer server(80);

<span style="color:#60a5fa;">void</span> setup() {
    Ethernet.begin(mac);   <span style="color:#94a3b8;">// DHCP</span>
    server.begin();
}
<span style="color:#60a5fa;">void</span> loop() {
    EthernetClient client = server.available();
    <span style="color:#60a5fa;">if</span> (client) {
        <span style="color:#94a3b8;">// HTTP‑Anfrage beantworten</span>
        client.println(<span style="color:#fbbf24;">"HTTP/1.1 200 OK"</span>);
        client.println(<span style="color:#fbbf24;">"Content-Type: text/html"</span>);
        client.println();
        client.println(<span style="color:#fbbf24;">"&lt;h1&gt;Hallo µC!&lt;/h1&gt;"</span>);
        client.stop();
    }
}</pre>
      ${renderInfobox({ icon: 'fas fa-wifi', title: 'Alternative: WLAN (ESP32)', type: 'info',
        body: `Für viele Anwendungen ist WLAN (ESP32) einfacher und kostengünstiger als kabelgebundenes Ethernet.
               Ethernet bietet aber deterministischere Latenzen und höhere Störfestigkeit in industrieller Umgebung.` })}
    </div>`;
  }

  _panelVergleich() {
    return `<div class="wim-category hidden" data-wim-cat="vergleich">
      <h3 class="lz-h3">Vergleich der Hochgeschwindigkeits‑Schnittstellen</h3>
      ${renderTable({
        headers: ['Eigenschaft', 'USB 2.0', 'CAN', 'Ethernet (100Base‑TX)'],
        rows: [
          ['Leitungen', '2 (D+, D−) + Strom/Versorgung', '2 (CAN_H, CAN_L) differentiell', '4 (TX±, RX±) bei Twisted Pair'],
          ['Topologie', 'Punkt‑zu‑Punkt (mit Hub möglich)', 'Bus / Multi‑Drop', 'Stern (Switch)'],
          ['Max. Länge', '5 m (High‑Speed)', '500 m (bei 125 kbit/s)', '100 m (Kupfer)'],
          ['Geschwindigkeit', '480 Mbit/s', 'bis 1 Mbit/s (klassisch), CAN‑FD bis 5 Mbit/s', '100 Mbit/s / 1 Gbit/s'],
          ['Adressierung', 'Device‑Adresse (7 Bit)', 'Nachrichten‑ID (11/29 Bit)', 'MAC‑Adresse (48 Bit) + IP'],
          ['Typische µC‑Integration', 'Device (ATmega32U4), OTG (ESP32)', 'Externer Controller (MCP2515) oder integriert', 'Extern (W5500) oder MAC+PHY (STM32)'],
          ['Anwendung', 'PC‑Peripherie, Massenspeicher', 'Automotive, Industrie', 'Netzwerke, IoT‑Gateway'],
        ],
      })}
      ${renderMerkboxGrid([
        { icon: 'fas fa-tachometer-alt', title: 'USB', text: 'Sehr schnell, Plug‑and‑Play, aber kurze Distanz. Ideal für PC‑Anbindung.' },
        { icon: 'fas fa-car', title: 'CAN', text: 'Robust, fehlertolerant, großes Netzwerk (100+ Knoten). Langsam, aber zuverlässig.' },
        { icon: 'fas fa-globe', title: 'Ethernet', text: 'Hochgeschwindigkeit, große Distanz, TCP/IP‑Stack. Komplexer als USB/CAN.' },
      ])}
    </div>`;
  }

  _panelUebungen() {
    return `<div class="wim-category hidden" data-wim-cat="uebungen">
      <h3 class="lz-h3">Übungsaufgaben</h3>
      ${renderAccordion([
        {
          title: 'A1: Welche USB‑Übertragungsart eignet sich für eine Maus? Warum?',
          content: `Interrupt‑Transfer: Kleine Datenpakete (wenige Bytes), regelmäßige Abfrage (z.B. 125 Hz Polling). Keine großen Datenmengen, aber geringe Latenz.`,
        },
        {
          title: 'A2: Erkläre, wie die Arbitrierung beim CAN‑Bus funktioniert.',
          content: `CAN verwendet ein "Wired‑AND" mit dominanten (logisch 0) und recessiven (logisch 1) Bits. Mehrere Knoten senden gleichzeitig.
          Solange alle das gleiche Bit senden, geht es weiter. Sobald ein Knoten ein recessives Bit sendet, aber ein anderer ein dominantes, zieht das dominante Bit die Leitung auf 0.
          Der Knoten mit dem recessiven Bit verliert die Arbitrierung und schaltet seinen Sender ab. So gewinnt die niedrigste ID.`,
        },
        {
          title: 'A3: Warum ist ein Ethernet‑Controller wie der W5500 oft besser als ein reiner PHY?',
          content: `Der W5500 implementiert den kompletten TCP/IP‑Stack in Hardware (Socket‑Puffer, TCP‑Handshake, Checksummen). Entlastet den µC massiv.
          Ein reiner PHY (z.B. LAN8720) benötigt zusätzlich einen MAC‑Controller und viel Software‑Stack (lwIP) – mehr RAM und CPU‑Leistung.`,
        },
        {
          title: 'A4: Welche Vorteile bietet USB‑OTG gegenüber einem reinen Device‑Port?',
          content: `USB‑OTG kann sowohl als Device (z.B. angeschlossen an PC) als auch als Host (z.B. Maus/Tastatur anschließen) arbeiten. Damit können µCs direkt Peripherie steuern.`,
        },
      ])}
      ${renderInfobox({ icon: 'fas fa-graduation-cap', title: 'Fortgeschrittene Schnittstellen für die Prüfung', type: 'success',
        body: `USB: Control/Interrupt/Bulk/Isochron – Anwendungen unterscheiden.<br>
               CAN: differentielle Zweidrahtleitung, Arbitrierung über Nachrichten‑ID, hohe Störfestigkeit.<br>
               Ethernet: TCP/IP‑Stack entweder in Hardware (W5500) oder Software (lwIP).<br>
               <strong>Wichtig:</strong> Nicht jeder µC hat diese Controller – oft externe Chips nötig.` })}
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