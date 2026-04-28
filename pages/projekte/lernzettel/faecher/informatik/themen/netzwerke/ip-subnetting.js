// pages/projekte/lernzettel/faecher/informatik/themen/netzwerke/ip-subnetting.js
// Informatik 6.2 — IPv4/IPv6-Adressierung, Subnetting & CIDR (maximal detailliert)

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
  prev: { label: '6.1 OSI & TCP/IP', link: `${BASE}/themen/netzwerke/osi-tcpip` },
  next: { label: '6.3 Routing', link: `${BASE}/themen/netzwerke/routing` },
};

const TABS = [
  { key: 'ipv4',      label: '🔢 IPv4-Grundlagen' },
  { key: 'subnetting',label: '✂ Subnetting & CIDR' },
  { key: 'ipv6',      label: '🔮 IPv6' },
  { key: 'uebungen',  label: '✏ Übungen' },
];

export default class IpSubnettingPage {
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
            <span>6.2 · IPv4 & Subnetting</span>
          </nav>
          <h1 class="lz-sub-title">IPv4/IPv6-Adressierung, Subnetting & CIDR</h1>
          <p class="lz-sub-desc">Netz‑/Hostanteil, Subnetzmaske, CIDR, private Adressen, VLSM, SLAAC – komplett fürs Abitur</p>
          ${renderTags(['IPv4', 'IPv6', 'Subnetting', 'CIDR', 'VLSM', 'Subnetzmaske', 'SLAAC', 'BPE 10'])}
        </div>
      </section>
      <section class="lz-content-section">
        <div class="lz-section-wrap">
          <nav class="wim-tabs" id="subnettingTabs" aria-label="IPv4 & Subnetting">
            ${TABS.map((t, i) => `<button class="wim-tab${i === 0 ? ' active' : ''}" data-wim="${t.key}">${t.label}</button>`).join('')}
          </nav>
          ${this._panelIPv4()}
          ${this._panelSubnetting()}
          ${this._panelIPv6()}
          ${this._panelUebungen()}
        </div>
      </section>
      <section class="lz-content-section" style="padding-top:0;">
        <div class="lz-section-wrap">${renderPageNav(NAV)}</div>
      </section>
      ${footerHTML(this.router)}`;
  }

  // ========================= IPv4-Grundlagen (detailliert) =========================
  _panelIPv4() {
    return `<div class="wim-category active" data-wim-cat="ipv4">
      ${renderInfobox({ icon: 'fas fa-map-pin', title: 'IPv4-Adresse – 32 Bit', type: 'info',
        body: `Die IPv4-Adresse ist 32 Bit lang und wird üblicherweise in <strong>Dotted‑Decimal</strong> dargestellt (z.B. 192.168.1.1).
               Jede Adresse besteht aus einem <strong>Netzwerkteil</strong> und einem <strong>Hostteil</strong>, getrennt durch die Subnetzmaske.
               Die Subnetzmaske ist ebenfalls 32 Bit lang und setzt Bits für den Netzwerkteil auf <strong>1</strong>, für den Hostteil auf <strong>0</strong>.` })}
      
      <h4 class="lz-h4">Aufbau einer IPv4-Adresse mit Subnetzmaske</h4>
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:1.5rem;border-radius:10px;font-family:monospace;font-size:.85rem;line-height:1.8;">
IP-Adresse:   192 . 168 .   1 .  42
Binär:        11000000.10101000.00000001.00101010
Subnetzmaske: 255 . 255 . 255 .  0   (/24)
Binär:        11111111.11111111.11111111.00000000
               ←── Netzwerkteil (24 Bit) ──→ ←Host→
Netzadresse:  192.168.1.0   (Hostteil = 0)
Broadcast:    192.168.1.255 (Hostteil = 1)
Erste Host:   192.168.1.1
Letzte Host:  192.168.1.254
Anzahl Hosts: 2^(32-24) - 2 = 254
</pre>

      <h4 class="lz-h4">Berechnung der Netzadresse (Bitweise UND-Verknüpfung)</h4>
      <p class="lz-prose">Netzadresse = IP-Adresse & Subnetzmaske (bitweises UND). Beispiel:</p>
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:1rem;border-radius:8px;font-family:monospace;font-size:.8rem;">
IP:      192.168.1.42  → 11000000.10101000.00000001.00101010
Maske:   255.255.255.0 → 11111111.11111111.11111111.00000000
UND:                    11000000.10101000.00000001.00000000 → 192.168.1.0
</pre>

      <h4 class="lz-h4">Private IPv4-Adressen (RFC 1918)</h4>
      ${renderTable({
        headers: ['Bereich', 'CIDR', 'Anzahl Adressen', 'Verwendung'],
        rows: [
          ['10.0.0.0 – 10.255.255.255', '10.0.0.0/8', '16.777.216', 'Große private Netze (Firmen)'],
          ['172.16.0.0 – 172.31.255.255', '172.16.0.0/12', '1.048.576', 'Mittlere private Netze'],
          ['192.168.0.0 – 192.168.255.255', '192.168.0.0/16', '65.536', 'Heimnetzwerke (Standard)'],
        ],
      })}
      <p class="lz-prose">Diese Adressen sind nicht im Internet routbar. Für den Zugriff ins Internet wird Network Address Translation (NAT) verwendet.</p>

      <h4 class="lz-h4">Besondere IPv4-Adressen</h4>
      ${renderTable({
        headers: ['Adresse', 'Bedeutung', 'Erklärung'],
        rows: [
          ['127.0.0.1', 'Loopback', 'Eigener Rechner (localhost). Alle Adressen 127.0.0.0/8 sind Loopback.'],
          ['0.0.0.0', 'Unbekannte / alle Adressen', 'Wird z.B. von DHCP-Client als Quelladresse verwendet.'],
          ['255.255.255.255', 'Lokaler Broadcast', 'Wird an alle Geräte im lokalen Netz gesendet (nicht weitergeleitet).'],
          ['169.254.0.0/16', 'Link‑Local (APIPA)', 'Automatisch zugewiesen, wenn kein DHCP-Server erreichbar ist.'],
        ],
      })}

      <h4 class="lz-h4">Netzklassen (historisch) – heute durch CIDR ersetzt</h4>
      ${renderTable({
        headers: ['Klasse', 'Erstes Oktett', 'Standardmaske', 'CIDR', 'Max. Hosts', 'Verwendung'],
        rows: [
          ['A', '1–126', '255.0.0.0', '/8', '16.777.214', 'Große Organisationen'],
          ['B', '128–191', '255.255.0.0', '/16', '65.534', 'Mittelgroße Netze'],
          ['C', '192–223', '255.255.255.0', '/24', '254', 'Kleine Netze'],
          ['D', '224–239', '-', '-', '-', 'Multicast'],
          ['E', '240–255', '-', '-', '-', 'Experimentell'],
        ],
      })}
      <p class="lz-prose"><strong>Wichtig:</strong> Die klassische Einteilung ist veraltet. Heute wird <strong>CIDR</strong> (Classless Inter-Domain Routing) verwendet, bei dem die Präfixlänge beliebig sein kann (z.B. /23, /27).</p>
    </div>`;
  }

  // ========================= Subnetting & CIDR (massiv erweitert) =========================
  _panelSubnetting() {
    return `<div class="wim-category hidden" data-wim-cat="subnetting">
      <h3 class="lz-h3">Subnetting – Ein Netzwerk in Teilnetze aufteilen</h3>
      ${renderInfobox({ icon: 'fas fa-cut', title: 'Warum Subnetting?', type: 'info',
        body: `Subnetting teilt ein großes Netz in kleinere, logische Einheiten auf. Vorteile:
               <ul><li>Reduzierung der Broadcast-Domänen (weniger unnötiger Verkehr)</li>
               <li>Bessere Sicherheit (Trennung von Abteilungen)</li>
               <li>Effizientere Nutzung des Adressraums</li>
               <li>Vereinfachte Fehlersuche und Verwaltung</li></ul>` })}
      
      <h4 class="lz-h4">Grundformeln fürs Subnetting</h4>
      ${renderFormulaBox({
        label: 'Anzahl Subnetze',
        formula: '2^s  (s = Anzahl geliehener Bits)',
        desc: 'Aus dem Hostteil werden s Bits für das Subnetz "geliehen".',
      })}
      ${renderFormulaBox({
        label: 'Anzahl Hosts pro Subnetz',
        formula: '2^(32 - neue Präfixlänge) - 2',
        desc: 'Minus 2 für Netzwerk- und Broadcastadresse.',
      })}
      ${renderFormulaBox({
        label: 'Schrittweite (Inkrement)',
        formula: '256 - letztes Maskenoktet (bei /8-/30)',
        desc: 'Abstand zwischen den Subnetz-Netzadressen.',
      })}

      <h4 class="lz-h4">CIDR-Tabelle (häufige Präfixe)</h4>
      ${renderTable({
        headers: ['CIDR', 'Subnetzmaske', 'Anzahl Subnetze (aus /24)', 'Hosts pro Subnetz', 'Anwendung'],
        rows: [
          ['/24', '255.255.255.0', '1', '254', 'Standard-Heimnetz'],
          ['/25', '255.255.255.128', '2', '126', 'Kleinere Büronetze'],
          ['/26', '255.255.255.192', '4', '62', 'Abteilungsnetze'],
          ['/27', '255.255.255.224', '8', '30', 'Kleinere Arbeitsgruppen'],
          ['/28', '255.255.255.240', '16', '14', 'Sehr kleine Gruppen'],
          ['/29', '255.255.255.248', '32', '6', 'Punkt-zu-Punkt (minimal)'],
          ['/30', '255.255.255.252', '64', '2', 'Router-Links (klassisch)'],
          ['/31', '255.255.255.254', '128', '2*', 'P2P ohne Broadcast (RFC 3021)'],
        ],
      })}
      <p class="lz-prose"><em>* Bei /31 entfällt die Broadcast-Adresse, daher 2 nutzbare Adressen (kein Abzug).</em></p>

      <h4 class="lz-h4">Beispiel 1: Einfaches Subnetting – /24 in vier /26er</h4>
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:1rem;border-radius:8px;font-family:monospace;font-size:.8rem;">
Ausgangsnetz: 192.168.10.0/24 (254 Hosts)
Gewünscht: 4 gleich große Subnetze

1. 4 Subnetze → 2 Bits leihen (2^2 = 4) → neue Präfixlänge /26.
2. Schrittweite = 256 - 192 = 64.
3. Subnetze:
   - 192.168.10.0/26   (Netz .0, Broadcast .63, Hosts .1 – .62)
   - 192.168.10.64/26  (Netz .64, Broadcast .127, Hosts .65 – .126)
   - 192.168.10.128/26 (Netz .128, Broadcast .191, Hosts .129 – .190)
   - 192.168.10.192/26 (Netz .192, Broadcast .255, Hosts .193 – .254)
</pre>

      <h4 class="lz-h4">Beispiel 2: Subnetzberechnung aus IP und Maske</h4>
      <p class="lz-prose">Gegeben: IP 172.16.5.200 mit Subnetzmaske 255.255.248.0 (/21). Bestimme Netzadresse, Broadcast, Hostbereich.</p>
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:1rem;border-radius:8px;font-family:monospace;font-size:.8rem;">
Maske 255.255.248.0 = /21 → 21 Netzbits, 11 Hostbits.
Schrittweite im 3. Oktett: 256 - 248 = 8.
Subnetze: 172.16.0.0/21, 172.16.8.0/21, 172.16.16.0/21, ...
5 liegt im Bereich 0–7 → Netzadresse = 172.16.0.0/21.
Broadcast = 172.16.7.255 (da 0 + 8 - 1 = 7).
Hostbereich = 172.16.0.1 – 172.16.7.254.
</pre>

      <h4 class="lz-h4">VLSM – Variable Length Subnet Mask (prüfungsrelevant)</h4>
      <p class="lz-prose">Bei VLSM werden innerhalb eines Netzes unterschiedlich große Subnetze verwendet, um Adressen optimal auszunutzen. Man beginnt mit dem größten benötigten Subnetz.</p>
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:1rem;border-radius:8px;font-family:monospace;font-size:.8rem;">
Beispiel: Netz 192.168.1.0/24, benötigt:
  - Subnetz A: 60 Hosts   → /26 (62 Hosts)
  - Subnetz B: 28 Hosts   → /27 (30 Hosts)
  - Subnetz C: 12 Hosts   → /28 (14 Hosts)
  - Subnetz D: 2 Hosts (Router) → /30 (2 Hosts)

Lösung (VLSM):
  192.168.1.0/26     (A: .1 – .62)
  192.168.1.64/27    (B: .65 – .94)
  192.168.1.96/28    (C: .97 – .110)
  192.168.1.112/30   (D: .113 – .114)
  192.168.1.116 – .255 bleiben frei.
</pre>

      <h4 class="lz-h4">Supernetting (Route Aggregation)</h4>
      <p class="lz-prose">Zusammenfassen mehrerer aufeinanderfolgender Netze zu einem größeren Netz, um Routing-Tabellen zu verkleinern. Beispiel: 192.168.0.0/24, 192.168.1.0/24, 192.168.2.0/24, 192.168.3.0/24 → Supernet 192.168.0.0/22.</p>
    </div>`;
  }

  // ========================= IPv6 (massiv erweitert) =========================
  _panelIPv6() {
    return `<div class="wim-category hidden" data-wim-cat="ipv6">
      <h3 class="lz-h3">IPv6 – Der Nachfolger von IPv4</h3>
      ${renderInfobox({ icon: 'fas fa-globe', title: '128 Bit – genug für alle', type: 'info',
        body: `IPv6 hat eine Adresslänge von <strong>128 Bit</strong> (16 Byte). Das ergibt
               <strong>340.282.366.920.938.463.463.374.607.431.768.211.456</strong> mögliche Adressen
               – etwa 5×10²⁸ pro Quadratmeter der Erdoberfläche.
               <br><br>Darstellung: 8 Gruppen à 16 Bit, hexadezimal, durch Doppelpunkt getrennt.
               Führende Nullen einer Gruppe dürfen weggelassen werden, <strong>::</strong> ersetzt eine oder mehrere aufeinanderfolgende Nullgruppen (nur einmal pro Adresse).` })}
      
      <h4 class="lz-h4">IPv6-Adressverkürzung – Beispiele</h4>
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:1rem;border-radius:8px;font-family:monospace;font-size:.8rem;">
Original:     2001:0db8:85a3:0000:0000:8a2e:0370:7334
Führende Nullen weg: 2001:db8:85a3:0:0:8a2e:370:7334
:: für Nullgruppen:   2001:db8:85a3::8a2e:370:7334

Loopback:     ::1
IPv4-kompatibel (Embedded): ::ffff:192.168.1.1
</pre>

      <h4 class="lz-h4">IPv6-Adresstypen</h4>
      ${renderTable({
        headers: ['Typ', 'Präfix', 'Beschreibung', 'Beispiel'],
        rows: [
          ['Global Unicast', '2000::/3', 'Öffentliche, weltweit eindeutige Adressen', '2001:db8::1'],
          ['Link-Local', 'fe80::/10', 'Nur im lokalen Netz (Vergleichbar APIPA), automatisch konfiguriert', 'fe80::1'],
          ['Unique Local (ULA)', 'fc00::/7', 'Private Adressen (vergleichbar RFC 1918), nicht im Internet routbar', 'fd00::1'],
          ['Multicast', 'ff00::/8', 'An eine Gruppe von Empfängern', 'ff02::1 (alle Knoten im lokalen Netz)'],
          ['Anycast', '-', 'Eine Adresse, die mehreren Geräten zugewiesen ist; das nächste antwortet', '-'],
          ['Loopback', '::1/128', 'Eigener Rechner', '::1'],
        ],
      })}

      <h4 class="lz-h4">SLAAC – Stateless Address Autoconfiguration</h4>
      ${renderInfobox({ icon: 'fas fa-magic', title: 'Automatische Konfiguration ohne DHCP', type: 'info',
        body: `IPv6-Geräte können sich selbstständig eine Adresse zuweisen, ohne zentralen Server.
               Router senden periodisch <strong>Router Advertisements (RA)</strong> (ICMPv6 Typ 134) mit dem Netzpräfix (z.B. 2001:db8:1::/64).
               Der Client kombiniert das Präfix mit seiner <strong>Interface-ID</strong> (aus MAC-Adresse via EUI-64 oder zufällig generiert für Privacy).` })}
      
      <h4 class="lz-h4">EUI-64 – Interface-ID aus MAC-Adresse</h4>
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:1rem;border-radius:8px;font-family:monospace;font-size:.8rem;">
MAC-Adresse:  00:1A:2B:3C:4D:5E
EUI-64:      001A:2BFF:FE3C:4D5E

Schritte:
1. MAC in zwei Hälften teilen: 00:1A:2B | 3C:4D:5E
2. FF:FE in die Mitte: 00:1A:2B:FF:FE:3C:4D:5E
3. 7. Bit (Universal/Local) flippen (hier 00 → 02)
   Ergebnis: 021A:2BFF:FE3C:4D5E
</pre>
      <p class="lz-prose">Aus Datenschutzgründen verwenden moderne Betriebssysteme oft <strong>Privacy Extensions</strong> (temporäre, zufällige Interface-IDs), die regelmäßig wechseln.</p>

      <h4 class="lz-h4">NDP – Neighbor Discovery Protocol (ersetzt ARP)</h4>
      <p class="lz-prose">NDP übernimmt auf IPv6 die Aufgaben von ARP, ICMP-Redirect und mehr. Wichtige Funktionen:</p>
      ${renderTable({
        headers: ['ICMPv6-Typ', 'Funktion', 'Vergleich zu IPv4'],
        rows: [
          ['Neighbor Solicitation (135)', 'Fragt MAC einer IPv6-Adresse an', 'ARP Request'],
          ['Neighbor Advertisement (136)', 'Antwort mit MAC', 'ARP Reply'],
          ['Router Solicitation (133)', 'Client sucht Router', 'DHCP Discover (teilweise)'],
          ['Router Advertisement (134)', 'Router sendet Präfix und Optionen', 'DHCP Offer'],
        ],
      })}
      <p class="lz-prose">NDP verwendet Multicast (z.B. Solicited-Node Multicast) statt Broadcast, was das Netz entlastet.</p>

      <h4 class="lz-h4">IPv6 vs. IPv4 – Gegenüberstellung</h4>
      ${renderCompare({
        titleA: 'IPv4',
        titleB: 'IPv6',
        listA: [
          '32 Bit, 4,3 Mrd. Adressen',
          'Dotted‑Decimal (192.168.1.1)',
          'ARP für MAC‑Auflösung (Broadcast)',
          'Broadcast existiert',
          'NAT oft nötig',
          'DHCP meist erforderlich',
          'Header 20–60 Byte, Optionen inkonsistent',
          'Fragmentierung durch Router möglich',
        ],
        listB: [
          '128 Bit, 340 Undezillionen',
          'Hexadezimal mit Doppelpunkten',
          'NDP (ICMPv6) – Multicast',
          'Kein Broadcast (nur Multicast)',
          'Jedes Gerät kann öffentliche Adresse haben',
          'SLAAC autokonfiguriert',
          'Header 40 Byte, Extension Headers',
          'Nur der Sender fragmentiert',
        ],
      })}

      <h4 class="lz-h4">IPv6-Header (vereinfacht)</h4>
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:1rem;border-radius:8px;font-family:monospace;font-size:.8rem;">
 0                   1                   2                   3
 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|Version| Traffic Class |           Flow Label                  |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|         Payload Length        |  Next Header  |   Hop Limit   |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|                                                               |
+                                                               +
|                                                               |
+                       Source Address                          +
|                                                               |
+                                                               +
|                                                               |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|                                                               |
+                                                               +
|                                                               |
+                    Destination Address                        +
|                                                               |
+                                                               +
|                                                               |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
</pre>
      <p class="lz-prose">Vereinfachungen gegenüber IPv4: keine Header-Prüfsumme (weist L2/L4 übernimmt), keine Fragmentierungsfelder (nur Sender fragmentiert), optionale Header sind gekettet.</p>
    </div>`;
  }

  // ========================= Übungen (massiv erweitert) =========================
  _panelUebungen() {
    return `<div class="wim-category hidden" data-wim-cat="uebungen">
      <h3 class="lz-h3">Übungsaufgaben & Selbsttest</h3>
      ${renderAccordion([
        {
          title: 'A1: Berechne Netzadresse, Broadcast und Hostbereich für 192.168.1.45/26.',
          content: `/26 → Maske 255.255.255.192, Schrittweite 64.<br>
          Subnetze: .0, .64, .128, .192. 45 liegt in .0 → Netz 192.168.1.0/26.<br>
          Broadcast: 192.168.1.63. Hosts: 192.168.1.1 – 192.168.1.62.`,
        },
        {
          title: 'A2: Wie viele Subnetze und Hosts pro Subnetz bei /28 aus einem /24?',
          content: `Geliehene Bits = 28 - 24 = 4 → 2^4 = 16 Subnetze.<br>
          Hostbits = 32 - 28 = 4 → 2^4 - 2 = 14 Hosts pro Subnetz.`,
        },
        {
          title: 'A3: Schreibe die IPv6-Adresse 2001:0db8:0000:0000:0000:ff00:0042:8329 in gekürzter Form.',
          content: `2001:db8::ff00:42:8329`,
        },
        {
          title: 'A4: Welche IPv6-Adresse ist die Loopback‑Adresse?',
          content: `::1`,
        },
        {
          title: 'A5: Bestimme die Subnetzmaske, wenn 8 Subnetze aus 192.168.1.0/24 gebildet werden sollen. Wie viele Hosts bleiben pro Subnetz?',
          content: `8 Subnetze = 2^3 → 3 Bits leihen → neue Präfixlänge /27 (255.255.255.224).<br>
          Hostbits = 5 → 2^5 - 2 = 30 Hosts pro Subnetz.`,
        },
        {
          title: 'A6: Welche IPv4-Adressen sind private Adressen? (RFC 1918)',
          content: `10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16.`,
        },
        {
          title: 'A7: Was bedeutet VLSM? Gib ein Beispiel.',
          content: `Variable Length Subnet Mask – innerhalb eines Netzes werden Subnetze unterschiedlicher Größe verwendet.<br>
          Beispiel: Aus 192.168.1.0/24 werden ein /26 (62 Hosts) und zwei /27 (30 Hosts) erstellt.`,
        },
        {
          title: 'A8: Erkläre den Unterschied zwischen Link-Local und Unique Local in IPv6.',
          content: `Link-Local (fe80::/10) ist nur im selben LAN gültig, Router leiten diese Adressen nicht weiter. Unique Local (fc00::/7) ist privat und kann innerhalb einer Organisation geroutet werden, aber nicht ins Internet.`,
        },
        {
          title: 'A9: Wie wird aus einer MAC-Adresse eine EUI-64 für IPv6 gebildet?',
          content: `MAC 00:1A:2B:3C:4D:5E → in zwei Teile: 00:1A:2B und 3C:4D:5E → FF:FE einfügen → 00:1A:2B:FF:FE:3C:4D:5E → 7. Bit flippen (00 → 02) → 021A:2BFF:FE3C:4D5E.`,
        },
        {
          title: 'A10: Wozu dient das Hop Limit in IPv6?',
          content: `Das Hop Limit (vergleichbar TTL in IPv4) begrenzt die maximale Anzahl von Routern, die ein Paket passieren darf. Es wird bei jedem Hop um 1 reduziert; bei 0 wird das Paket verworfen.`,
        },
      ])}
      
      <h4 class="lz-h4">🎯 Quizfragen (Multiple Choice)</h4>
      ${renderAccordion([
        {
          title: 'Frage 1: Was ist die Netzadresse von 192.168.5.76/28?',
          content: '192.168.5.64/28 (Schrittweite 16, 76 liegt zwischen 64 und 79).',
        },
        {
          title: 'Frage 2: Welche Aussage über IPv6 ist richtig?',
          content: 'IPv6 verwendet kein ARP mehr, sondern NDP (ICMPv6).',
        },
        {
          title: 'Frage 3: Wie viele Hosts bietet ein /29-Subnetz?',
          content: '2^(32-29) - 2 = 2^3 - 2 = 6 Hosts.',
        },
        {
          title: 'Frage 4: Welche IPv4-Adresse ist für Loopback reserviert?',
          content: '127.0.0.0/8 (meist 127.0.0.1).',
        },
        {
          title: 'Frage 5: Was bedeutet "::" in einer IPv6-Adresse?',
          content: 'Eine oder mehrere aufeinanderfolgende Gruppen von Nullen (darf nur einmal vorkommen).',
        },
      ])}
      
      ${renderInfobox({ icon: 'fas fa-graduation-cap', title: 'Prüfungsrelevanz – kompakte Checkliste', type: 'success',
        body: `<strong>IPv4:</strong> Aufbau 32 Bit, Subnetzmaske, Netzadresse & Broadcast berechnen (UND-Verknüpfung).<br>
               <strong>CIDR:</strong> Präfixlänge (/24, /26, etc.), Schrittweite = 256 - Maskenoktet.<br>
               <strong>Private Adressen:</strong> 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16.<br>
               <strong>Subnetting:</strong> Anzahl Subnetze = 2^s, Hosts = 2^h - 2, VLSM verstehen.<br>
               <strong>IPv6:</strong> 128 Bit, hexadezimal, ::, Adresstypen (Global Unicast, Link-Local, ULA, Multicast).<br>
               <strong>SLAAC / EUI-64:</strong> Automatische Konfiguration aus Router Advertisement + MAC.<br>
               <strong>NDP:</strong> Ersetzt ARP (Neighbor Solicitation / Advertisement).` })}
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