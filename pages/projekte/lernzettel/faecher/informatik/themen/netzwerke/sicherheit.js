// pages/projekte/lernzettel/faecher/informatik/themen/netzwerke/sicherheit.js
// Informatik 6.5 — Netzwerkkomponenten, VLAN & Sicherheit

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
  prev: { label: '6.4 Netzwerkprotokolle', link: `${BASE}/themen/netzwerke/protokolle` },
  next: { label: '6.6 IPv6-Advanced', link: `${BASE}/themen/netzwerke/advanced-networking` },
};

const TABS = [
  { key: 'komponenten', label: '🔌 Netzwerkkomponenten' },
  { key: 'vlan',        label: '🔀 VLAN' },
  { key: 'firewall',    label: '🔥 Firewall & DMZ' },
  { key: 'angriffe',    label: '⚠ Angriffe & Schutz' },
  { key: 'uebungen',    label: '✏ Übungen' },
];

export default class NetzwerksicherheitPage {
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
            <span>6.5 · Netzwerkkomponenten & Sicherheit</span>
          </nav>
          <h1 class="lz-sub-title">Netzwerkkomponenten, VLAN & Sicherheit</h1>
          <p class="lz-sub-subtitle">Hub, Switch, Router, VLAN, Firewall, DMZ, Angriffe</p>
          ${renderTags(['Hub', 'Switch', 'Router', 'VLAN', 'Firewall', 'DMZ', 'BPE 10'])}
        </div>
      </section>
      <section class="lz-content-section">
        <div class="lz-section-wrap">
          <nav class="wim-tabs" id="netzSicherheitTabs" aria-label="Netzwerksicherheit">
            ${TABS.map((t, i) => `<button class="wim-tab${i === 0 ? ' active' : ''}" data-wim="${t.key}">${t.label}</button>`).join('')}
          </nav>
          ${this._panelKomponenten()}
          ${this._panelVlan()}
          ${this._panelFirewall()}
          ${this._panelAngriffe()}
          ${this._panelUebungen()}
        </div>
      </section>
      <section class="lz-content-section" style="padding-top:0;">
        <div class="lz-section-wrap">${renderPageNav(NAV)}</div>
      </section>
      ${footerHTML(this.router)}`;
  }

  _panelKomponenten() {
    return `<div class="wim-category active" data-wim-cat="komponenten">
      ${renderInfobox({ icon: 'fas fa-network-wired', title: 'Netzwerkkomponenten im Vergleich', type: 'info',
        body: `Die wichtigsten Geräte im LAN: Hub, Switch, Router. Sie arbeiten auf unterschiedlichen OSI‑Schichten.` })}
      ${renderTable({
        headers: ['Gerät', 'OSI‑Schicht', 'Funktion', 'Weiterleitung basierend auf'],
        rows: [
          ['Hub', '1 (Bitübertragung)', 'Verteilt Signale an alle Ports (einfacher Repeater)', 'Nichts – blindes Weiterleiten'],
          ['Switch', '2 (Sicherung)', 'Lernt MAC‑Adressen, leitet gezielt weiter', 'MAC‑Adresse (CAM‑Tabelle)'],
          ['Router', '3 (Vermittlung)', 'Verbindet verschiedene IP‑Netze', 'IP‑Adresse (Routingtabelle)'],
          ['L3‑Switch', '2+3', 'Switch mit Routing‑Funktionen', 'MAC + IP'],
          ['Firewall', '3–7', 'Filtert Pakete nach Regeln', 'IP, Port, Protokoll, Inhalt'],
          ['Access Point', '1–2', 'WLAN‑Bridge ins LAN', 'SSID'],
        ],
      })}
      <h4 class="lz-h4">Switch – MAC‑Adresstabelle (CAM)</h4>
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:1rem;border-radius:8px;font-family:monospace;">
Switch lernt: Wenn ein Frame an Port X mit Quell‑MAC Y ankommt, wird Y mit Port X assoziiert.
┌─────────────────────┬──────┐
│ MAC-Adresse         │ Port │
├─────────────────────┼──────┤
│ AA:AA:AA:AA:AA:AA   │  1   │
│ BB:BB:BB:BB:BB:BB   │  2   │
│ CC:CC:CC:CC:CC:CC   │  3   │
└─────────────────────┴──────┘
Unbekannte MAC → Flooding an alle Ports.
Broadcast (FF:FF:FF:FF:FF:FF) → immer Flooding.
</pre>
    </div>`;
  }

  _panelVlan() {
    return `<div class="wim-category hidden" data-wim-cat="vlan">
      <h3 class="lz-h3">VLAN – Virtual Local Area Network</h3>
      ${renderInfobox({ icon: 'fas fa-diagram-project', title: 'Logische Trennung auf einem Switch', type: 'info',
        body: `VLANs unterteilen ein physisches Netzwerk in mehrere logische, isolierte Netze.
               Geräte in verschiedenen VLANs können ohne Router nicht kommunizieren – auch wenn sie am gleichen Switch hängen.
               <strong>802.1Q</strong> fügt einen 4‑Byte‑Tag in den Ethernet‑Frame ein.` })}
      ${renderTable({
        headers: ['Eigenschaft', 'Ohne VLAN', 'Mit VLAN'],
        rows: [
          ['Trennung', 'Physisch (separate Switches)', 'Logisch (Tags im Frame)'],
          ['Sicherheit', 'Alle sehen alle Broadcasts', 'Getrennte Broadcast‑Domains'],
          ['Flexibilität', 'Umverkabelung nötig', 'Software‑Konfiguration'],
          ['Routing', 'Nur über Router', 'Inter‑VLAN‑Routing (Router‑on‑a‑stick)'],
        ],
      })}
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:1rem;border-radius:8px;font-family:monospace;">
802.1Q Frame (VLAN‑Tag):
┌────────┬────────┬────────────┬──────────┬──────────┬─────┐
│ Präambel│ Ziel‑MAC│ Quell‑MAC │ VLAN‑Tag │ EtherType│ Daten│
└────────┴────────┴────────────┴──────────┴──────────┴─────┘
                      ├─ TPID (0x8100) ─┤
                      ├─ PCP (Priorität) ┤
                      ├─ DEI ┤
                      └─ VID (12 Bit) ───┘
</pre>
    </div>`;
  }

  _panelFirewall() {
    return `<div class="wim-category hidden" data-wim-cat="firewall">
      <h3 class="lz-h3">Firewall & DMZ</h3>
      ${renderInfobox({ icon: 'fas fa-shield-halved', title: 'Firewall – Paketfilter', type: 'info',
        body: `Eine Firewall entscheidet anhand von Regeln, ob Pakete passieren dürfen.
               Typen: Paketfilter (IP/Port), Stateful Inspection (Verbindungszustand), Application Layer Gateway (WAF).` })}
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:1rem;border-radius:8px;font-family:monospace;">
Firewall‑Regeln (Beispiel):
┌─────┬──────────────┬──────────────┬──────┬──────────┬────────┐
│ Nr. │ Quelle       │ Ziel         │ Port │ Protokoll│ Aktion │
├─────┼──────────────┼──────────────┼──────┼──────────┼────────┤
│ 1   │ any          │ 192.168.1.0/24│ 80   │ TCP      │ ALLOW  │
│ 2   │ any          │ 192.168.1.0/24│ 443  │ TCP      │ ALLOW  │
│ 3   │ 192.168.1.0/24│ any         │ any  │ any      │ ALLOW  │
│ 4   │ 10.0.0.0/24  │ 192.168.1.0/24│ 22   │ TCP      │ ALLOW  │
│ 5   │ any          │ any          │ any  │ any      │ DENY   │
└─────┴──────────────┴──────────────┴──────┴──────────┴────────┘
Regeln werden von oben nach unten abgearbeitet (First Match).
</pre>
      <h4 class="lz-h4">DMZ – Demilitarisierte Zone</h4>
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:1rem;border-radius:8px;font-family:monospace;">
Internet
    │
[Firewall 1 (extern)]
    │
   DMZ ─── Webserver (80/443)
    │   ─── Mailserver (25/143)
    │
[Firewall 2 (intern)]
    │
 Internes LAN

Vorteile: Öffentliche Server sind vom internen Netz getrennt.
Kompromittierter Webserver gefährdet nicht die internen PCs.
</pre>
    </div>`;
  }

  _panelAngriffe() {
    return `<div class="wim-category hidden" data-wim-cat="angriffe">
      <h3 class="lz-h3">Häufige Netzwerkangriffe & Gegenmaßnahmen</h3>
      ${renderTable({
        headers: ['Angriff', 'Prinzip', 'Schutz'],
        rows: [
          ['DoS / DDoS', 'Überflutung mit Anfragen', 'Rate‑Limiting, CDN, Scrubbing'],
          ['Man‑in‑the‑Middle', 'Angreifer schaltet sich in Kommunikation', 'TLS, Zertifikatsprüfung'],
          ['ARP‑Spoofing', 'Falsche ARP‑Antworten', 'Dynamic ARP Inspection, Port‑Security'],
          ['DNS‑Poisoning', 'Falsche DNS‑Einträge im Cache', 'DNSSEC'],
          ['Port‑Scanning', 'Offene Ports herausfinden', 'Firewall, IDS/IPS'],
          ['Phishing', 'Gefälschte Webseiten/E‑Mails', 'HTTPS prüfen, Schulung'],
          ['Brute‑Force', 'Passwörter durchprobieren', 'Starke Passwörter, 2FA, Rate‑Limit'],
        ],
      })}
      ${renderMerkboxGrid([
        { icon: 'fas fa-lock', title: 'WPA3/WPA2', text: 'WLAN‑Verschlüsselung. WEP und WPA sind unsicher.' },
        { icon: 'fas fa-network-wired', title: 'IoT‑VLAN', text: 'IoT‑Geräte in eigenes VLAN isolieren.' },
        { icon: 'fas fa-key', title: '2FA', text: 'Zwei‑Faktor‑Authentisierung schützt vor gestohlenen Passwörtern.' },
      ])}
    </div>`;
  }

  _panelUebungen() {
    return `<div class="wim-category hidden" data-wim-cat="uebungen">
      <h3 class="lz-h3">Übungsaufgaben</h3>
      ${renderAccordion([
        {
          title: 'A1: Worin unterscheiden sich ein Switch und ein Hub?',
          content: `Hub: sendet alle Daten an alle Ports (gemeinsame Kollisionsdomäne). Switch: leitet gezielt basierend auf MAC‑Adressen weiter (jeder Port eigene Kollisionsdomäne).`,
        },
        {
          title: 'A2: Warum werden VLANs eingesetzt?',
          content: `Sicherheit (getrennte Broadcast‑Domänen), Flexibilität (logische statt physischer Trennung), Reduzierung von Broadcast‑Verkehr.`,
        },
        {
          title: 'A3: Erkläre den Zweck einer DMZ.',
          content: `Die DMZ ist ein Puffernetz zwischen Internet und internem LAN. Öffentliche Dienste (Webserver) stehen in der DMZ, bei Kompromittierung ist das interne LAN geschützt.`,
        },
        {
          title: 'A4: Was ist ARP‑Spoofing und wie schützt man sich?',
          content: `Angreifer sendet gefälschte ARP‑Antworten, um Traffic auf sich umzuleiten (Man‑in‑the‑Middle). Schutz: Dynamic ARP Inspection (DAI) auf Switches, statische ARP‑Einträge.`,
        },
      ])}
      ${renderInfobox({ icon: 'fas fa-graduation-cap', title: 'Netzwerksicherheit für die Prüfung', type: 'success',
        body: `• Hub (Schicht 1), Switch (Schicht 2), Router (Schicht 3).<br>
               • VLAN = logische Trennung auf einem Switch, 802.1Q.<br>
               • Firewall: Regeln (Quelle, Ziel, Port, Aktion).<br>
               • DMZ = Puffernetz für öffentliche Server.<br>
               • Angriffe: DoS, ARP‑Spoofing, Phishing – und Gegenmaßnahmen.` })}
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