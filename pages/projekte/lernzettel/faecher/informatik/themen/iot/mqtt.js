// pages/projekte/lernzettel/faecher/informatik/themen/iot/mqtt.js
// Informatik 7.1 — MQTT

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
  prev: { label: '6.6 Advanced Networking', link: `${BASE}/themen/netzwerke/advanced-networking` },
  next: { label: '7.2 IoT-Sensoren & ESP32', link: `${BASE}/themen/iot/sensoren-aktoren` },
};

const TABS = [
  { key: 'grundlagen', label: '📡 Pub/Sub & Broker' },
  { key: 'qos',        label: '📊 QoS & LWT' },
  { key: 'code',       label: '💻 ESP32‑Code' },
  { key: 'uebungen',   label: '✏ Übungen' },
];

export default class MqttPage {
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
            <span>7.1 · MQTT</span>
          </nav>
          <h1 class="lz-sub-title">MQTT — Pub/Sub, QoS, Broker, LWT</h1>
          <p class="lz-sub-subtitle">Leichtgewichtiges IoT‑Messaging‑Protokoll, Topics, Wildcards</p>
          ${renderTags(['MQTT', 'Pub/Sub', 'Broker', 'QoS', 'LWT', 'Retained', 'BPE 11'])}
        </div>
      </section>
      <section class="lz-content-section">
        <div class="lz-section-wrap">
          <nav class="wim-tabs" id="mqttTabs" aria-label="MQTT">
            ${TABS.map((t, i) => `<button class="wim-tab${i === 0 ? ' active' : ''}" data-wim="${t.key}">${t.label}</button>`).join('')}
          </nav>
          ${this._panelGrundlagen()}
          ${this._panelQos()}
          ${this._panelCode()}
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
      ${renderInfobox({ icon: 'fas fa-satellite-dish', title: 'Was ist MQTT?', type: 'info',
        body: `<strong>Message Queuing Telemetry Transport</strong> – leichtgewichtiges Pub/Sub‑Protokoll für IoT.
               Entwickelt für unzuverlässige Netze und ressourcenschwache Geräte.
               Header: nur 2 Byte (HTTP: ~700 Byte). Transport: TCP (Port 1883) oder TLS (8883).` })}
      <h3 class="lz-h3">Publish/Subscribe‑Prinzip</h3>
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:1rem;border-radius:8px;font-family:monospace;line-height:1.6;">
                    ┌──────────────────┐
ESP32-Sensor ───PUB─▶│                  │──▶ Smartphone-App
(haus/wohnzimmer/temp) │     BROKER        │   (SUB: haus/#)
                    │  (mosquitto,      │
Arduino-LED  ◀───SUB─│   HiveMQ,        │◀── PC-Dashboard
(haus/led/steuerung)   │   mosquitto.org)│    (PUB: haus/led/steuerung)
                    └──────────────────┘

Publisher kennen Subscriber nicht – völlige Entkopplung!
Broker verteilt Nachrichten an alle passenden Subscriber.
</pre>
      <h4 class="lz-h4">Topics & Wildcards</h4>
      ${renderTable({
        headers: ['Topic / Wildcard', 'Bedeutung', 'Beispiel'],
        rows: [
          ['<code>haus/wohnzimmer/temp</code>', 'Exaktes Topic', 'Nur dieses Topic'],
          ['<code>haus/+/temp</code>', 'Single‑Level‑Wildcard (+)', 'haus/wohnzimmer/temp, haus/kueche/temp'],
          ['<code>haus/#</code>', 'Multi‑Level‑Wildcard (#)', 'haus/..., haus/.../..., haus/wohnzimmer/temp/...'],
          ['<code>#</code>', 'Alles (nur als letztes Zeichen)', 'Alle Nachrichten im gesamten Broker'],
        ],
      })}
    </div>`;
  }

  _panelQos() {
    return `<div class="wim-category hidden" data-wim-cat="qos">
      <h3 class="lz-h3">Quality of Service (QoS) – Nachrichten‑Garantien</h3>
      ${renderTable({
        headers: ['Level', 'Name', 'Verhalten', 'Overhead', 'Anwendung'],
        rows: [
          ['0', 'At most once', 'Fire & Forget – kann verloren gehen', 'Minimal', 'Sensordaten (Verlust tolerierbar)'],
          ['1', 'At least once', 'Bestätigung (ACK), Duplikate möglich', 'Mittel', 'Alarme, Statusmeldungen'],
          ['2', 'Exactly once', '4‑Wege‑Handshake, keine Duplikate', 'Hoch', 'Kritische Befehle, Bezahlungen'],
        ],
      })}
      <h4 class="lz-h4">Retained Messages & LWT (Last Will & Testament)</h4>
      ${renderMerkboxGrid([
        { icon: 'fas fa-bookmark', title: 'Retained Message', text: 'Broker speichert letzte Nachricht eines Topics. Neue Subscriber erhalten sie sofort – auch wenn kein Publisher mehr aktiv ist.' },
        { icon: 'fas fa-skull-crossbones', title: 'LWT (Last Will & Testament)', text: 'Client hinterlegt beim Connect eine "letzte Nachricht". Bei unerwartetem Verbindungsabbruch sendet Broker diese automatisch.' },
        { icon: 'fas fa-clock', title: 'Keep‑Alive', text: 'Client sendet regelmäßig PINGREQ. Keine Antwort → Client gilt als getrennt → LWT wird gesendet.' },
      ])}
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:1rem;border-radius:8px;font-family:monospace;">
MQTT‑Nachricht (PUBLISH) – Felder:
  Topic:   "haus/wohnzimmer/temp"
  Payload:  "23.5"
  QoS:      1
  Retain:   true
  Dup:      false
</pre>
    </div>`;
  }

  _panelCode() {
    return `<div class="wim-category hidden" data-wim-cat="code">
      <h3 class="lz-h3">MQTT mit ESP32 (PubSubClient‑Bibliothek)</h3>
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:1rem;border-radius:8px;font-family:monospace;font-size:.85rem;line-height:1.6;">
<span style="color:#60a5fa;">#include</span> <span style="color:#fbbf24;">&lt;WiFi.h&gt;</span>
<span style="color:#60a5fa;">#include</span> <span style="color:#fbbf24;">&lt;PubSubClient.h&gt;</span>

<span style="color:#60a5fa;">const char</span>* ssid     = <span style="color:#fbbf24;">"WLAN‑SSID"</span>;
<span style="color:#60a5fa;">const char</span>* password = <span style="color:#fbbf24;">"WLAN‑Passwort"</span>;
<span style="color:#60a5fa;">const char</span>* mqttServer = <span style="color:#fbbf24;">"broker.hivemq.com"</span>;
<span style="color:#60a5fa;">const int</span>   mqttPort   = <span style="color:#34d399;">1883</span>;

WiFiClient espClient;
PubSubClient mqtt(espClient);

<span style="color:#60a5fa;">void</span> callback(<span style="color:#60a5fa;">char</span>* topic, <span style="color:#60a5fa;">byte</span>* payload, <span style="color:#60a5fa;">unsigned int</span> len) {
    <span style="color:#60a5fa;">String</span> msg = <span style="color:#60a5fa;">String</span>((<span style="color:#60a5fa;">char</span>*)payload).substring(0, len);
    Serial.printf(<span style="color:#fbbf24;">"Nachricht auf %s: %s\n"</span>, topic, msg.c_str());
}

<span style="color:#60a5fa;">void</span> reconnect() {
    <span style="color:#60a5fa;">while</span> (!mqtt.connected()) {
        <span style="color:#94a3b8;">// LWT (Last Will)</span>
        <span style="color:#60a5fa;">if</span> (mqtt.connect(<span style="color:#fbbf24;">"ESP32‑Client"</span>, <span style="color:#34d399;">nullptr</span>, <span style="color:#34d399;">nullptr</span>,
                         <span style="color:#fbbf24;">"haus/status"</span>, <span style="color:#34d399;">0</span>, <span style="color:#34d399;">true</span>, <span style="color:#fbbf24;">"offline"</span>)) {
            mqtt.publish(<span style="color:#fbbf24;">"haus/status"</span>, <span style="color:#fbbf24;">"online"</span>, <span style="color:#34d399;">true</span>); <span style="color:#94a3b8;">// Retained</span>
            mqtt.subscribe(<span style="color:#fbbf24;">"haus/led"</span>);
        } <span style="color:#60a5fa;">else</span> {
            delay(<span style="color:#34d399;">5000</span>);
        }
    }
}

<span style="color:#60a5fa;">void</span> setup() {
    WiFi.begin(ssid, password);
    <span style="color:#60a5fa;">while</span> (WiFi.status() != WL_CONNECTED) delay(500);
    mqtt.setServer(mqttServer, mqttPort);
    mqtt.setCallback(callback);
}

<span style="color:#60a5fa;">void</span> loop() {
    <span style="color:#60a5fa;">if</span> (!mqtt.connected()) reconnect();
    mqtt.loop();
    <span style="color:#94a3b8;">// Temperatur alle 5s publizieren</span>
    <span style="color:#60a5fa;">static</span> uint32_t last = 0;
    <span style="color:#60a5fa;">if</span> (millis() - last > 5000) {
        last = millis();
        <span style="color:#60a5fa;">float</span> temp = random(200, 300) / 10.0;
        <span style="color:#60a5fa;">char</span> buf[16];
        sprintf(buf, <span style="color:#fbbf24;">"%.1f"</span>, temp);
        mqtt.publish(<span style="color:#fbbf24;">"haus/wohnzimmer/temp"</span>, buf);
    }
}
</pre>
      ${renderInfobox({ icon: 'fas fa-graduation-cap', title: 'MQTT für die Prüfung', type: 'success',
        body: `• Pub/Sub: Broker, Publisher, Subscriber – entkoppelt.<br>
               • Topics: hierarchisch, Wildcards + und #.<br>
               • QoS 0/1/2: Unterschiede kennen.<br>
               • Retained Message: letzte Nachricht bleibt erhalten.<br>
               • LWT: Benachrichtigung bei unerwartetem Client‑Verlust.` })}
    </div>`;
  }

  _panelUebungen() {
    return `<div class="wim-category hidden" data-wim-cat="uebungen">
      <h3 class="lz-h3">Übungsaufgaben</h3>
      ${renderAccordion([
        {
          title: 'A1: Erkläre das Pub/Sub‑Prinzip anhand eines Smart‑Home‑Szenarios.',
          content: `Temperatursensor (Publisher) sendet Werte an Topic "haus/wohnzimmer/temp". Broker verteilt an alle Subscriber (App, Dashboard, Heizungssteuerung). Publisher und Subscriber kennen sich nicht – hohe Flexibilität.`,
        },
        {
          title: 'A2: Wofür steht QoS 2? Wie viele Nachrichten werden garantiert?',
          content: `QoS 2 = "Exactly once". Vier‑Wege‑Handshake (PUBLISH → PUBREC → PUBREL → PUBCOMP). Es kommt genau eine Nachricht an, keine Duplikate.`,
        },
        {
          title: 'A3: Welche Topics passen auf das Pattern "sensor/+/data" ?',
          content: `sensor/temperatur/data, sensor/feuchtigkeit/data, aber nicht sensor/temperatur/data/extra (weil + nur eine Ebene ersetzt).`,
        },
        {
          title: 'A4: Wann verwendet man eine Retained Message?',
          content: `Wenn ein neuer Subscriber sofort den aktuellen Zustand erfahren soll, ohne auf den nächsten Publish warten zu müssen. Z.B. "haus/led/status" – nach Verbindung weiß die App sofort, ob die LED an oder aus ist.`,
        },
      ])}
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