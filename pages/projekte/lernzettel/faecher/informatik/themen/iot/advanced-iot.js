// pages/projekte/lernzettel/faecher/informatik/themen/iot/advanced-iot.js
// Informatik 7.3 — LoRaWAN, NB-IoT, Edge Computing, IoT-Sicherheit

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
  prev: { label: '7.2 IoT-Sensoren & ESP32', link: `${BASE}/themen/iot/sensoren-aktoren` },
  next: { label: '8.1 ER-Modell', link: `${BASE}/themen/datenbanken/er-modell` },
};

const TABS = [
  { key: 'lpwan',    label: '📡 LPWAN (LoRa, NB-IoT)' },
  { key: 'edge',     label: '⚡ Edge Computing' },
  { key: 'security', label: '🔒 IoT-Sicherheit' },
  { key: 'uebungen', label: '✏ Übungen' },
];

export default class AdvancedIoTPage {
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
            <span>7.3 · Advanced IoT</span>
          </nav>
          <h1 class="lz-sub-title">LoRaWAN, NB-IoT, Edge Computing & IoT-Sicherheit</h1>
          <p class="lz-sub-subtitle">LPWAN-Technologien, Edge AI, Secure Boot, Flash Encryption</p>
          ${renderTags(['LoRaWAN', 'NB-IoT', 'Edge Computing', 'TFLite Micro', 'IoT-Sicherheit', 'BPE 11'])}
        </div>
      </section>
      <section class="lz-content-section">
        <div class="lz-section-wrap">
          <nav class="wim-tabs" id="advIotTabs" aria-label="Advanced IoT">
            ${TABS.map((t, i) => `<button class="wim-tab${i === 0 ? ' active' : ''}" data-wim="${t.key}">${t.label}</button>`).join('')}
          </nav>
          ${this._panelLpwan()}
          ${this._panelEdge()}
          ${this._panelSecurity()}
          ${this._panelUebungen()}
        </div>
      </section>
      <section class="lz-content-section" style="padding-top:0;">
        <div class="lz-section-wrap">${renderPageNav(NAV)}</div>
      </section>
      ${footerHTML(this.router)}`;
  }

  _panelLpwan() {
    return `<div class="wim-category active" data-wim-cat="lpwan">
      ${renderInfobox({ icon: 'fas fa-tower-cell', title: 'LPWAN – Low Power Wide Area Network', type: 'info',
        body: `LPWAN verbindet IoT‑Geräte über große Distanzen (km) mit minimalem Stromverbrauch.
               Datenraten sind gering (bis ~50 kbit/s). Ideal für Sensoren, die jahrelang mit einer Batterie laufen.` })}
      ${renderTable({
        headers: ['Technologie', 'Reichweite', 'Datenrate', 'Frequenz', 'Kosten', 'Anwendung'],
        rows: [
          ['LoRaWAN', '2‑15 km', '0,3‑50 kbit/s', '868 MHz (EU)', 'Günstig (eigene Infra)', 'Smarte Zähler, Landwirtschaft'],
          ['NB‑IoT', '1‑10 km', '20‑200 kbit/s', 'LTE‑Band', 'SIM‑Karte nötig', 'Parksensoren, Wasserzähler'],
          ['Sigfox', 'bis 50 km', '100 bit/s', '868 MHz', 'Sehr günstig', 'Asset Tracking, Melder'],
          ['LTE‑M', '1‑10 km', '1 Mbit/s', 'LTE‑Band', 'SIM‑Karte', 'Wearables, E‑Health'],
        ],
      })}
      <h4 class="lz-h4">LoRaWAN‑Architektur</h4>
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:1rem;border-radius:8px;font-family:monospace;">
End Device          Gateway          Network Server      Application Server
(Sensor/Aktor)      (LoRa‑Empfänger)  (TTN, Chirpstack)   (Datenverarbeitung)
     │                    │                 │                      │
     │── LoRa (868 MHz) ──▶│── IP/Ethernet ─▶│── HTTPS/MQTT ───────▶│

LoRaWAN‑Klassen:
  Class A: Gerät sendet → kurze Empfangsfenster → schläft (minimaler Strom)
  Class B: Regelmäßige Empfangsfenster (Beacon‑gesteuert)
  Class C: Immer empfangsbereit (höchster Strom, geringste Latenz)
</pre>
    </div>`;
  }

  _panelEdge() {
    return `<div class="wim-category hidden" data-wim-cat="edge">
      <h3 class="lz-h3">Edge Computing & Fog Computing</h3>
      ${renderCompare({
        titleA: '☁ Cloud Computing',
        titleB: '⚡ Edge Computing',
        listA: [
          'Daten werden in die Cloud gesendet',
          'Zentrale Verarbeitung',
          'Latenz: 50‑200 ms',
          'Bandbreite: alle Rohdaten',
          'Keine Offline‑Funktionalität',
        ],
        listB: [
          'Verarbeitung direkt am Gerät / lokal',
          'Nur Ergebnisse/Anomalien gesendet',
          'Latenz: < 1 ms (lokal)',
          'Bandbreite: minimal',
          'Offline‑fähig, datenschutzfreundlich',
        ],
      })}
      <h4 class="lz-h4">Edge AI – KI auf dem Mikrocontroller</h4>
      ${renderTable({
        headers: ['Framework', 'Zielplattform', 'Modellformat', 'Anwendung'],
        rows: [
          ['TensorFlow Lite Micro', 'ARM Cortex‑M, ESP32', '.tflite', 'Bild‑/Spracherkennung, Anomalieerkennung'],
          ['Edge Impulse', 'Arduino, ESP32, nRF52', 'Optimiertes C++', 'Bewegungserkennung, Audio'],
          ['ONNX Runtime', 'Raspberry Pi, Jetson', '.onnx', 'Objekterkennung'],
        ],
      })}
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:1rem;border-radius:8px;font-family:monospace;">
<span style="color:#94a3b8;">// TensorFlow Lite Micro auf ESP32 – Anomalieerkennung (Auszug)</span>
<span style="color:#60a5fa;">#include</span> <span style="color:#fbbf24;">"tensorflow/lite/micro/micro_interpreter.h"</span>

<span style="color:#60a5fa;">const unsigned char</span> model[] = { <span style="color:#94a3b8;">/* .tflite als const‑Array */</span> };
tflite::MicroInterpreter interpreter(model, resolver, tensor_arena);
interpreter.AllocateTensors();

<span style="color:#60a5fa;">float</span>* input = interpreter.input(0)->data.f;
input[0] = readSensor();
interpreter.Invoke();
<span style="color:#60a5fa;">float</span> score = interpreter.output(0)->data.f[0];
</pre>
    </div>`;
  }

  _panelSecurity() {
    return `<div class="wim-category hidden" data-wim-cat="security">
      <h3 class="lz-h3">IoT‑Sicherheit – Schwachstellen und Schutz</h3>
      ${renderInfobox({ icon: 'fas fa-exclamation-triangle', title: 'IoT ist das schwächste Glied', type: 'warning',
        body: `IoT‑Geräte sind oft Einfallstor: Standardpasswörter, veraltete Firmware, unverschlüsselte Kommunikation.
               Mirai‑Botnet (2016) infizierte 600.000 Geräte → Rekord‑DDoS.` })}
      ${renderTable({
        headers: ['Bedrohung', 'Gegenmaßnahme'],
        rows: [
          ['Standardpasswörter', 'Immer ändern bei Inbetriebnahme'],
          ['Veraltete Firmware', 'OTA‑Updates implementieren'],
          ['Unverschlüsselte Komm.', 'TLS/SSL für MQTT (Port 8883), HTTPS'],
          ['Physischer Zugriff', 'Debug‑Schnittstellen (JTAG/UART) deaktivieren'],
          ['Hardcoded Credentials', 'Konfiguration in NVS/EEPROM, nicht im Code'],
          ['Firmware‑Reverse Engineering', 'Flash‑Verschlüsselung (ESP32)'],
        ],
      })}
      <h4 class="lz-h4">ESP32 Security Features</h4>
      ${renderMerkboxGrid([
        { icon: 'fas fa-lock', title: 'Secure Boot', text: 'Nur signierte Firmware wird gestartet. Verhindert Schad‑Firmware.' },
        { icon: 'fas fa-shield-halved', title: 'Flash Encryption', text: 'Flash‑Inhalte AES‑256 verschlüsselt – kein Auslesen per JTAG.' },
        { icon: 'fas fa-key', title: 'NVS Encryption', text: 'Konfigurationsdaten (Passwörter) verschlüsselt ablegen.' },
        { icon: 'fas fa-certificate', title: 'TLS/mTLS', text: 'Mutual TLS: Client und Server authentifizieren sich gegenseitig.' },
      ])}
    </div>`;
  }

  _panelUebungen() {
    return `<div class="wim-category hidden" data-wim-cat="uebungen">
      <h3 class="lz-h3">Übungsaufgaben</h3>
      ${renderAccordion([
        {
          title: 'A1: Wann ist LoRaWAN besser geeignet als NB‑IoT?',
          content: `LoRaWAN: wenn man eigene Netzinfrastruktur aufbauen möchte, keine monatlichen SIM‑Kosten, sehr geringe Datenraten, Batterielaufzeit >5 Jahre. NB‑IoT: wenn Mobilfunkabdeckung vorhanden ist, höhere Datenraten benötigt werden.`,
        },
        {
          title: 'A2: Erkläre das Konzept "Edge Computing" anhand eines Beispiels.',
          content: `Eine Überwachungskamera erkennt per KI (Edge) Personen lokal und sendet nur Alarm‑Meldungen, nicht den Videostream. Spart Bandbreite, reduziert Latenz und schützt Privatsphäre.`,
        },
        {
          title: 'A3: Was ist der Unterschied zwischen Secure Boot und Flash Encryption beim ESP32?',
          content: `Secure Boot stellt sicher, dass nur signierte (vertrauenswürdige) Firmware gestartet wird. Flash Encryption verschlüsselt den gesamten Flash‑Inhalt, um Auslesen von Secrets zu verhindern.`,
        },
        {
          title: 'A4: Warum ist MQTTS (Port 8883) sicherer als MQTT (1883)?',
          content: `MQTTS verwendet TLS‑Verschlüsselung, d.h. alle Nachrichten sind vertraulich und gegen Manipulation geschützt. MQTT überträgt im Klartext – jeder im Netz kann mithören.`,
        },
      ])}
      ${renderInfobox({ icon: 'fas fa-graduation-cap', title: 'Advanced IoT für die Prüfung', type: 'success',
        body: `• LPWAN: LoRaWAN (lange Reichweite, niedriger Strom, eigene Infra), NB‑IoT (Mobilfunk).<br>
               • Edge Computing: Verarbeitung nahe der Datenquelle – geringe Latenz, Datenschutz.<br>
               • IoT‑Sicherheit: Standardpasswörter ändern, verschlüsselte Kommunikation (TLS), Secure Boot, Flash Encryption.` })}
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