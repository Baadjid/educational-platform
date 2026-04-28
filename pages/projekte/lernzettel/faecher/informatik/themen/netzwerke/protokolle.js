// pages/projekte/lernzettel/faecher/informatik/themen/netzwerke/protokolle.js
// Informatik 6.4 — Netzwerkprotokolle (maximal detailliert)

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
  prev: { label: '6.3 Routing', link: `${BASE}/themen/netzwerke/routing` },
  next: { label: '6.5 Netzwerksicherheit', link: `${BASE}/themen/netzwerke/sicherheit` },
};

const TABS = [
  { key: 'arp_icmp', label: '🔗 ARP & ICMP' },
  { key: 'tcp_udp',  label: '📦 TCP & UDP' },
  { key: 'dns_dhcp', label: '🌐 DNS & DHCP' },
  { key: 'tls',      label: '🔒 TLS/SSL' },
  { key: 'uebungen', label: '✏ Übungen' },
];

export default class ProtokolePage {
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
            <span>6.4 · Netzwerkprotokolle</span>
          </nav>
          <h1 class="lz-sub-title">Netzwerkprotokolle: ARP, ICMP, TCP, UDP, DNS, DHCP, TLS</h1>
          <p class="lz-sub-subtitle">Aufgaben, Ports, Verbindungsaufbau, Handshakes – komplett fürs Abitur</p>
          ${renderTags(['ARP', 'ICMP', 'TCP', 'UDP', 'DNS', 'DHCP', 'TLS', 'BPE 10'])}
        </div>
      </section>
      <section class="lz-content-section">
        <div class="lz-section-wrap">
          <nav class="wim-tabs" id="protokolleTabs" aria-label="Netzwerkprotokolle">
            ${TABS.map((t, i) => `<button class="wim-tab${i === 0 ? ' active' : ''}" data-wim="${t.key}">${t.label}</button>`).join('')}
          </nav>
          ${this._panelArpIcmp()}
          ${this._panelTcpUdp()}
          ${this._panelDnsDhcp()}
          ${this._panelTls()}
          ${this._panelUebungen()}
        </div>
      </section>
      <section class="lz-content-section" style="padding-top:0;">
        <div class="lz-section-wrap">${renderPageNav(NAV)}</div>
      </section>
      ${footerHTML(this.router)}`;
  }

  // ========================= ARP & ICMP (detailliert) =========================
  _panelArpIcmp() {
    return `<div class="wim-category active" data-wim-cat="arp_icmp">
      <h3 class="lz-h3">ARP – Address Resolution Protocol</h3>
      ${renderInfobox({ icon: 'fas fa-link', title: 'IP → MAC im lokalen Netz', type: 'info',
        body: `ARP löst eine <strong>IPv4-Adresse in eine MAC-Adresse</strong> auf. Dies ist notwendig, weil auf Schicht 2 (Ethernet) nur mit MAC-Adressen gearbeitet wird.
               <br><br>Der Sender sendet einen <strong>ARP-Request</strong> als Broadcast ("Wer hat IP 192.168.1.5?"). Der Besitzer dieser IP antwortet mit einem <strong>ARP-Reply</strong> (Unicast), der seine MAC-Adresse enthält. Die Zuordnung wird im <strong>ARP-Cache</strong> gespeichert (Timeout typisch 2–20 Minuten).` })}
      
      <h4 class="lz-h4">ARP-Paketaufbau (vereinfacht)</h4>
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:1rem;border-radius:8px;font-family:monospace;font-size:0.8rem;">
ARP-Request (Broadcast):  
  +-------------------------------------------------+
  | Ziel-MAC: FF:FF:FF:FF:FF:FF (Broadcast)        |
  | Quell-MAC: AA:AA:AA:AA:AA:AA (Sender)          |
  | Typ: 0x0806 (ARP)                              |
  +-------------------------------------------------+
  | ARP-Header:                                     |
  |   Hardware-Typ: 1 (Ethernet)                   |
  |   Protokoll-Typ: 0x0800 (IPv4)                 |
  |   Opcode: 1 (Request)                          |
  |   Quell-MAC: AA:AA:AA:AA:AA:AA                 |
  |   Quell-IP: 192.168.1.10                       |
  |   Ziel-MAC: 00:00:00:00:00:00 (unbekannt)      |
  |   Ziel-IP: 192.168.1.5                         |
  +-------------------------------------------------+

ARP-Reply (Unicast):  
  +-------------------------------------------------+
  | Ziel-MAC: AA:AA:AA:AA:AA:AA (Sender des Req)   |
  | Quell-MAC: BB:BB:BB:BB:BB:BB (Antworter)       |
  | Typ: 0x0806 (ARP)                              |
  +-------------------------------------------------+
  | ARP-Header:                                     |
  |   Opcode: 2 (Reply)                            |
  |   Quell-MAC: BB:BB:BB:BB:BB:BB                 |
  |   Quell-IP: 192.168.1.5                        |
  |   Ziel-MAC: AA:AA:AA:AA:AA:AA                  |
  |   Ziel-IP: 192.168.1.10                        |
  +-------------------------------------------------+
</pre>

      <h4 class="lz-h4">ARP-Cache (Beispiel Windows / Linux)</h4>
      ${renderTable({
        headers: ['Schnittstelle', 'IP-Adresse', 'MAC-Adresse', 'Typ'],
        rows: [
          ['192.168.1.1', '192.168.1.1', '00-14-22-33-44-55', 'dynamisch'],
          ['192.168.1.5', '192.168.1.5', 'AA-BB-CC-DD-EE-FF', 'dynamisch'],
          ['192.168.1.10', '192.168.1.10', '11-22-33-44-55-66', 'statisch (Eintrag)'],
        ],
      })}
      
      <p class="lz-prose"><strong>Sicherheitsaspekte:</strong> ARP-Spoofing (ARP-Cache-Poisoning) – ein Angreifer sendet gefälschte ARP-Replys, um Datenverkehr umzuleiten (Man-in-the-Middle). Abwehr: dynamische ARP-Inspektion auf Switches, statische ARP-Einträge.</p>

      <h3 class="lz-h3">ICMP – Internet Control Message Protocol</h3>
      ${renderInfobox({ icon: 'fas fa-diagnoses', title: 'Fehlermeldungen & Diagnose', type: 'info',
        body: `ICMP dient zum Austausch von <strong>Fehlermeldungen</strong> und <strong>Diagnoseinformationen</strong> zwischen Netzwerkgeräten.
               Bekannteste Anwendung: <strong>ping</strong> (Echo Request / Echo Reply) und <strong>traceroute</strong> (Time Exceeded).` })}
      
      <h4 class="lz-h4">Wichtige ICMP-Typen und -Codes</h4>
      ${renderTable({
        headers: ['Typ', 'Code', 'Bedeutung', 'Verwendung'],
        rows: [
          ['0', '0', 'Echo Reply', 'Antwort auf Ping'],
          ['3', '0', 'Destination Network Unreachable', 'Netz nicht erreichbar'],
          ['3', '1', 'Destination Host Unreachable', 'Host nicht erreichbar'],
          ['3', '3', 'Port Unreachable', 'UDP-Port nicht erreichbar (z.B. kein Dienst)'],
          ['8', '0', 'Echo Request', 'Ping-Anfrage'],
          ['11', '0', 'Time Exceeded (TTL abgelaufen)', 'Wird von traceroute genutzt'],
          ['5', '1', 'Redirect (Host)', 'Router sagt: besseren Weg nehmen'],
        ],
      })}
      
      <h4 class="lz-h4">Ping & Traceroute – Praxisbeispiele</h4>
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:1rem;border-radius:8px;font-family:monospace;font-size:0.8rem;">
$ ping google.de
PING google.de (142.250.185.35) 56(84) bytes of data.
64 bytes from 142.250.185.35: icmp_seq=1 ttl=117 time=9.83 ms
64 bytes from 142.250.185.35: icmp_seq=2 ttl=117 time=9.74 ms

$ traceroute google.de
 1  router (192.168.1.1)  2.1 ms
 2  * * *
 3  core-router (10.0.0.1)  5.3 ms
 4  border-router (203.0.113.1)  8.7 ms
 5  google.de (142.250.185.35)  10.2 ms
</pre>
      <p class="lz-prose"><strong>Abitur-Tipp:</strong> Ping nutzt ICMP Echo Request/Reply. Traceroute sendet Pakete mit steigender TTL – wenn die TTL auf 0 fällt, sendet der Router eine ICMP Time Exceeded Nachricht zurück. So wird jeder Hop sichtbar.</p>
    </div>`;
  }

  // ========================= TCP & UDP (massiv erweitert) =========================
  _panelTcpUdp() {
    return `<div class="wim-category hidden" data-wim-cat="tcp_udp">
      <h3 class="lz-h3">TCP vs. UDP – der Vergleich</h3>
      ${renderCompare({
        titleA: '🔒 TCP (Transmission Control Protocol)',
        titleB: '⚡ UDP (User Datagram Protocol)',
        listA: [
          'Verbindungsorientiert (3‑Way‑Handshake)',
          'Zuverlässig (ACK, Wiederholung)',
          'Reihenfolge garantiert (Sequenznummern)',
          'Fluss‑ und Überlastkontrolle (Sliding Window)',
          'Langsamer, höherer Overhead (Header 20 Byte)',
          'HTTP, HTTPS, FTP, SSH, SMTP, Telnet',
        ],
        listB: [
          'Verbindungslos (fire and forget)',
          'Unzuverlässig (kein ACK)',
          'Reihenfolge nicht garantiert',
          'Keine Flusskontrolle',
          'Schnell, geringer Overhead (Header 8 Byte)',
          'DNS, DHCP, VoIP, Videostreaming, Gaming',
        ],
      })}
      
      <h4 class="lz-h4">TCP 3‑Way‑Handshake im Detail</h4>
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:1rem;border-radius:8px;font-family:monospace;font-size:0.8rem;">
Client (192.168.1.10:49152)          Server (93.184.216.34:80)
       │                                      │
       │───── SYN (seq=100) ──────────────────▶│
       │                                      │
       │◀──── SYN+ACK (seq=300, ack=101) ─────│
       │                                      │
       │───── ACK (ack=301) ──────────────────▶│
       │                                      │
       ├────── Verbindung steht (ESTABLISHED) ─┤
       │                                      │
       │───── Daten (HTTP-Request) ───────────▶│
       │◀──── Daten (HTTP-Response) ───────────│
       │                                      │
       │───── FIN ────────────────────────────▶│
       │◀──── ACK ─────────────────────────────│
       │◀──── FIN ─────────────────────────────│
       │───── ACK ────────────────────────────▶│
       ├────── Verbindung geschlossen ──────────┤
</pre>

      <h4 class="lz-h4">TCP-Header – die wichtigsten Felder</h4>
      ${renderTable({
        headers: ['Feld', 'Länge', 'Bedeutung'],
        rows: [
          ['Quellport', '16 Bit', 'Port der sendenden Anwendung (ephemeral)'],
          ['Zielport', '16 Bit', 'Port der empfangenden Anwendung (z.B. 80 für HTTP)'],
          ['Sequenznummer', '32 Bit', 'Nummer des ersten Datenbytes in diesem Segment'],
          ['Bestätigungsnummer', '32 Bit', 'Nächste erwartete Sequenznummer (nur wenn ACK-Flag gesetzt)'],
          ['Datenoffset', '4 Bit', 'Länge des Headers in 32-Bit-Wörtern (min. 5 = 20 Byte)'],
          ['Flags', '9 Bit (oft 6)', 'SYN, ACK, FIN, RST, PSH, URG, ...'],
          ['Fenster', '16 Bit', 'Anzahl Bytes, die der Empfänger noch aufnehmen kann (Flow Control)'],
          ['Prüfsumme', '16 Bit', 'Fehlererkennung über Header + Daten + Pseudo-Header'],
          ['Dringender Zeiger', '16 Bit', 'Offset für dringende Daten (URG-Flag)'],
          ['Optionen', '0–40 Byte', 'z.B. MSS, SACK, Timestamps'],
        ],
      })}
      
      <h4 class="lz-h4">TCP-Flags – die Steuerbits</h4>
      ${renderTable({
        headers: ['Flag', 'Name', 'Bedeutung'],
        rows: [
          ['SYN', 'Synchronize', 'Verbindungsaufbau – Sequenznummer wird gesetzt'],
          ['ACK', 'Acknowledgment', 'Bestätigungsnummer ist gültig (fast immer gesetzt nach erstem Paket)'],
          ['FIN', 'Finish', 'Verbindungsabbau – Sender hat keine Daten mehr'],
          ['RST', 'Reset', 'Sofortiger Verbindungsabbruch (Fehler)'],
          ['PSH', 'Push', 'Daten sofort an Anwendung liefern (kein Pufferung)'],
          ['URG', 'Urgent', 'Dringende Daten – dringender Zeiger ist gültig'],
        ],
      })}
      
      <h4 class="lz-h4">Sliding Window (Flusskontrolle)</h4>
      <p class="lz-prose">Der Empfänger gibt in jedem ACK seine aktuelle Fenstergröße an (Window Size). Der Sender darf maximal so viele Bytes unbestätigt senden. Dadurch wird der langsame Empfänger nicht überlastet.</p>
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:1rem;border-radius:8px;font-family:monospace;font-size:0.8rem;">
Sender                                          Empfänger
  │──── SEQ=1 (1000 Byte) ──▶│ (Fenster=3000)
  │──── SEQ=1001 (1000 Byte)─▶│
  │──── SEQ=2001 (1000 Byte)─▶│
  │◀──────── ACK=3001, Fenster=2000 ──────────│
  │ (nur noch 2000 Byte erlaubt)
</pre>
      <p class="lz-prose"><strong>Überlastkontrolle (Congestion Control):</strong> Zusätzlich zur Flusskontrolle passt TCP die Senderate an, um Staus im Netz zu vermeiden (Slow Start, Congestion Avoidance, Fast Retransmit).</p>
      
      <h4 class="lz-h4">UDP – der schnelle Bruder</h4>
      <p class="lz-prose">UDP-Header ist nur 8 Byte lang: Quellport, Zielport, Länge, Prüfsumme. Es gibt keine Verbindungsherstellung, keine Bestätigungen, keine Flusskontrolle. Deshalb ideal für Echtzeitanwendungen (VoIP, Video-Streaming, Online-Spiele), bei denen gelegentliche Paketverluste akzeptabel sind, aber Verzögerungen nicht.</p>
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:1rem;border-radius:8px;font-family:monospace;font-size:0.8rem;">
UDP-Header (8 Byte):
+----------+----------+----------+----------+
| Quellport| Zielport |  Länge   |Prüfsumme |
+----------+----------+----------+----------+
|               Daten (bis 65507 Byte)        |
+---------------------------------------------+
</pre>
    </div>`;
  }

  // ========================= DNS & DHCP (massiv erweitert) =========================
  _panelDnsDhcp() {
    return `<div class="wim-category hidden" data-wim-cat="dns_dhcp">
      <h3 class="lz-h3">DNS – Domain Name System</h3>
      ${renderInfobox({ icon: 'fas fa-globe', title: 'Das Telefonbuch des Internets', type: 'info',
        body: `DNS übersetzt menschenlesbare Domainnamen (www.google.de) in IP-Adressen (142.250.185.35). Es ist eine weltweit verteilte, hierarchische Datenbank.` })}
      
      <h4 class="lz-h4">Hierarchie der Nameserver</h4>
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:1rem;border-radius:8px;font-family:monospace;font-size:0.8rem;">
                 [Root-Nameserver]  (13 logische Server, z.B. a.root-servers.net)
                         │
                 [TLD-Nameserver]  (z.B. .com, .de, .org)
                         │
         [Authoritative Nameserver]  (z.B. ns1.google.com)
                         │
                 [Resolver]  (meist ISP oder 8.8.8.8)
                         │
                   [Client]
</pre>
      <p class="lz-prose">Die Auflösung erfolgt rekursiv oder iterativ. Der Client fragt seinen Resolver (meist Router oder 8.8.8.8). Dieser fragt dann die Root-, TLD- und autoritativen Server, bis er die Antwort erhält. Die Antwort wird für die Dauer der TTL (Time to Live) gecacht.</p>
      
      <h4 class="lz-h4">Wichtige DNS-Record-Typen</h4>
      ${renderTable({
        headers: ['Record', 'Beschreibung', 'Beispiel'],
        rows: [
          ['A', 'Domain → IPv4-Adresse', 'example.com A 93.184.216.34'],
          ['AAAA', 'Domain → IPv6-Adresse', 'example.com AAAA 2606:2800:220:1:248:1893:25c8:1946'],
          ['CNAME', 'Alias (kanonischer Name)', 'www.example.com CNAME example.com'],
          ['MX', 'Mail Exchange (E-Mail-Server)', 'example.com MX 10 mail.example.com'],
          ['NS', 'Nameserver für die Zone', 'example.com NS ns1.example.com'],
          ['PTR', 'Reverse DNS (IP → Domain)', '34.216.184.93.in-addr.arpa PTR example.com'],
          ['TXT', 'Textinformationen (SPF, DKIM, etc.)', 'example.com TXT "v=spf1 include:_spf.google.com ~all"'],
          ['SOA', 'Start of Authority (Zoneninformationen)', 'admin.example.com, Serial, Refresh, Retry, Expire, TTL'],
        ],
      })}
      
      <h4 class="lz-h4">DNS-Query – Beispiel für "www.google.de"</h4>
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:1rem;border-radius:8px;font-family:monospace;font-size:0.8rem;">
1. Client fragt Resolver (8.8.8.8): "www.google.de?"
2. Resolver fragt Root-Server: "Wo ist .de?"
3. Root antwortet: "Frage die TLD-Server für .de (z.B. a.nic.de)"
4. Resolver fragt .de-TLD-Server: "Wo ist google.de?"
5. TLD antwortet: "Autoritative Server für google.de sind ns1.google.com"
6. Resolver fragt ns1.google.com: "IP von www.google.de?"
7. ns1 antwortet: "A-Record: 142.250.185.35"
8. Resolver gibt Antwort an Client zurück und cacht sie für 300 Sekunden (TTL)
</pre>
      <p class="lz-prose"><strong>Merke:</strong> DNS verwendet UDP Port 53 für kleine Anfragen (Standard), bei Antworten > 512 Byte wechselt es zu TCP Port 53.</p>
      
      <h3 class="lz-h3">DHCP – Dynamic Host Configuration Protocol</h3>
      ${renderInfobox({ icon: 'fas fa-network-wired', title: 'Automatische Netzwerkkonfiguration', type: 'info',
        body: `DHCP weist Clients automatisch eine <strong>IP-Adresse, Subnetzmaske, Standardgateway, DNS-Server</strong> und weitere Optionen zu. Der Ablauf heißt <strong>DORA</strong> (Discover, Offer, Request, Acknowledge).` })}
      
      <h4 class="lz-h4">DORA im Detail</h4>
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:1rem;border-radius:8px;font-family:monospace;font-size:0.8rem;">
Client (0.0.0.0:68)                DHCP-Server (192.168.1.1:67)
       │                                      │
       │ 1. DHCP DISCOVER (Broadcast)         │
       │    "Gibt es einen DHCP-Server?"      │
       │─────────────────────────────────────▶│
       │                                      │
       │ 2. DHCP OFFER                        │
       │    "Ich biete Dir IP 192.168.1.100"  │
       │◀─────────────────────────────────────│
       │                                      │
       │ 3. DHCP REQUEST (Broadcast)          │
       │    "Ich nehme 192.168.1.100"         │
       │─────────────────────────────────────▶│
       │                                      │
       │ 4. DHCP ACK                          │
       │    "Bestätigt, Lease gültig"         │
       │◀─────────────────────────────────────│
       │                                      │
       ├── Client konfiguriert sich ──────────┤
</pre>
      
      <h4 class="lz-h4">DHCP-Optionen (Auszug)</h4>
      ${renderTable({
        headers: ['Option', 'Bedeutung', 'Beispielwert'],
        rows: [
          ['1', 'Subnetzmaske', '255.255.255.0'],
          ['3', 'Router (Gateway)', '192.168.1.1'],
          ['6', 'DNS-Server', '8.8.8.8, 8.8.4.4'],
          ['15', 'Domainname', 'example.com'],
          ['51', 'Lease-Time', '86400 Sekunden (1 Tag)'],
          ['54', 'Server-Identifier', '192.168.1.1'],
        ],
      })}
      
      <p class="lz-prose"><strong>Lease-Zeit:</strong> Die IP wird nur für eine begrenzte Zeit vergeben. Nach der Hälfte der Lease-Zeit versucht der Client die Verlängerung (Renewal). Wenn keine Verlängerung möglich ist, gibt der Client die IP am Ende der Lease frei.</p>
      <p class="lz-prose"><strong>APIPA (Automatic Private IP Addressing):</strong> Falls kein DHCP-Server erreichbar ist, vergibt Windows eine Adresse aus dem Bereich 169.254.0.0/16. Nur für lokale Kommunikation geeignet.</p>
    </div>`;
  }

  // ========================= TLS/SSL (massiv erweitert) =========================
  _panelTls() {
    return `<div class="wim-category hidden" data-wim-cat="tls">
      <h3 class="lz-h3">TLS/SSL – Transport Layer Security</h3>
      ${renderInfobox({ icon: 'fas fa-lock', title: 'Verschlüsselung im Internet', type: 'info',
        body: `TLS (Nachfolger von SSL) verschlüsselt TCP‑Verbindungen. Genutzt von <strong>HTTPS</strong> (Port 443), IMAPS, SMTPS. Bietet <strong>Vertraulichkeit</strong> (Verschlüsselung), <strong>Integrität</strong> (MAC) und <strong>Authentizität</strong> (Zertifikate).` })}
      
      <h4 class="lz-h4">TLS-Handshake im Detail (vereinfacht)</h4>
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:1rem;border-radius:8px;font-family:monospace;font-size:0.8rem;line-height:1.6;">
Client                                     Server
  │── ClientHello ─────────────────────────▶│
  │   (unterstützte Cipher Suites,          │
  │    TLS-Version, Client Random)          │
  │                                          │
  │◀── ServerHello ──────────────────────────│
  │    (gewählte Cipher Suite,              │
  │     Server Random)                      │
  │                                          │
  │◀── Certificate ─────────────────────────│
  │    (Server-Zertifikat, enthält Public Key)│
  │                                          │
  │◀── ServerHelloDone ─────────────────────│
  │                                          │
  │── ClientKeyExchange ───────────────────▶│
  │    (Pre‑Master‑Secret, verschlüsselt    │
  │     mit Server-Public-Key)              │
  │                                          │
  ├─── Beide berechnen Session Key ─────────┤
  │    (Master Secret aus Pre-Master + Randoms)│
  │                                          │
  │── ChangeCipherSpec ────────────────────▶│
  │── Finished (verschlüsselt) ─────────────▶│
  │                                          │
  │◀── ChangeCipherSpec ─────────────────────│
  │◀── Finished (verschlüsselt) ─────────────│
  │                                          │
  ├─── Verschlüsselte Daten ─────────────────┤
</pre>
      
      <h4 class="lz-h4">Begriffe und Abläufe</h4>
      ${renderTable({
        headers: ['Begriff', 'Erklärung'],
        rows: [
          ['CA (Certificate Authority)', 'Vertrauenswürdige Stelle, die Zertifikate signiert (z.B. Let’s Encrypt, DigiCert)'],
          ['Public Key (asymmetrisch)', 'Im Zertifikat enthalten, kann von jedem genutzt werden, um Daten zu verschlüsseln (nur der Server kann sie mit seinem Private Key entschlüsseln).'],
          ['Private Key (asymmetrisch)', 'Geheim auf dem Server, dient zum Entschlüsseln des Pre-Master-Secrets und zum Signieren'],
          ['Pre‑Master‑Secret', 'Vom Client generiert, mit Public Key verschlüsselt, wird zur Ableitung des Session Keys genutzt'],
          ['Session Key (symmetrisch)', 'Wird aus Pre-Master-Secret und den beiden Randoms berechnet. Verschlüsselt die eigentlichen Daten (z.B. AES).'],
          ['Cipher Suite', 'Kombination aus Schlüsselaustausch (z.B. ECDHE), Authentifizierung (RSA), Verschlüsselung (AES-256-GCM) und HMAC (SHA-384)'],
        ],
      })}
      
      <h4 class="lz-h4">Zertifikatskette – Vertrauensaufbau</h4>
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:1rem;border-radius:8px;font-family:monospace;font-size:0.8rem;">
[Root‑CA] (im Betriebssystem vertrauenswürdig)
     │ signiert
[Intermediate‑CA]
     │ signiert
[Server‑Zertifikat] (z.B. für www.example.com)

Der Client prüft die Signaturkette bis zur Root‑CA. 
Nur wenn alle Signaturen gültig sind und der Domainname stimmt, wird die Verbindung akzeptiert.
</pre>
      <p class="lz-prose"><strong>Häufige Angriffe:</strong> Man-in-the-Middle (wenn Zertifikat nicht überprüft wird), Downgrade-Angriffe (erzwingen schwacher Cipher Suites), Heartbleed (Bug in OpenSSL). Moderne TLS-Versionen (1.3) schließen viele dieser Lücken.</p>
      
      <h4 class="lz-h4">TLS 1.3 – Vereinfachung und Geschwindigkeit</h4>
      <p class="lz-prose">TLS 1.3 reduziert den Handshake auf 1 Round-Trip (1-RTT) oder sogar 0-RTT. Veraltete und unsichere Verfahren (z.B. RSA-Schlüsselaustausch) wurden entfernt. Nur noch forward-secure Verfahren wie ECDHE sind erlaubt.</p>
    </div>`;
  }

  // ========================= Übungen (erweitert) =========================
  _panelUebungen() {
    return `<div class="wim-category hidden" data-wim-cat="uebungen">
      <h3 class="lz-h3">Übungsaufgaben & Selbsttest</h3>
      ${renderAccordion([
        {
          title: 'A1: Wofür wird ARP benötigt?',
          content: `ARP wandelt eine IP-Adresse in die zugehörige MAC-Adresse um. Ohne ARP könnte ein Gerät keinen Ethernet‑Frame adressieren, weil auf Schicht 2 nur MAC-Adressen verwendet werden.`,
        },
        {
          title: 'A2: Was ist der Unterschied zwischen ICMP Echo Request und Echo Reply?',
          content: `Echo Request (Typ 8) ist der Ping-Request, Echo Reply (Typ 0) die Antwort. Mit ping wird geprüft, ob ein Ziel erreichbar ist und wie lange die Antwort dauert.`,
        },
        {
          title: 'A3: Nenne drei Unterschiede zwischen TCP und UDP.',
          content: `1. TCP verbindungsorientiert, UDP verbindungslos.<br>
          2. TCP zuverlässig (ACK, Wiederholung), UDP unzuverlässig.<br>
          3. TCP hat Fluss- und Überlastkontrolle, UDP nicht.<br>
          4. TCP Header 20 Byte, UDP Header 8 Byte.<br>
          5. TCP erhält Reihenfolge, UDP nicht.`,
        },
        {
          title: 'A4: Erkläre den TCP 3‑Way‑Handshake mit den Flags SYN, SYN-ACK, ACK.',
          content: `Client sendet SYN (seq=x). Server antwortet mit SYN+ACK (seq=y, ack=x+1). Client bestätigt mit ACK (ack=y+1). Danach ist die Verbindung hergestellt.`,
        },
        {
          title: 'A5: Wie funktioniert der DHCP-Prozess (DORA)?',
          content: `D – Discover: Client sucht Server (Broadcast).<br>
          O – Offer: Server bietet IP und Konfiguration an.<br>
          R – Request: Client fordert die angebotene Konfiguration an.<br>
          A – Acknowledge: Server bestätigt endgültig.`,
        },
        {
          title: 'A6: Welche Aufgabe hat das Zertifikat im TLS‑Handshake?',
          content: `Das Zertifikat enthält den Public Key des Servers und wird von einer CA signiert. Der Client prüft die Signatur und kann so sicher sein, dass er mit dem echten Server spricht (nicht einem Man‑in‑the‑Middle). Zudem ermöglicht es den asymmetrischen Schlüsselaustausch.`,
        },
        {
          title: 'A7: Wofür wird der AAAA‑Record bei DNS verwendet?',
          content: `Der AAAA‑Record (Quad‑A) ordnet einen Domainnamen einer IPv6‑Adresse zu. Entsprechend dem A‑Record für IPv4.`,
        },
        {
          title: 'A8: Warum verwendet DNS normalerweise UDP und nicht TCP?',
          content: `DNS-Anfragen sind klein (meist unter 512 Byte). UDP ist schnell und benötigt keine Verbindungsherstellung. Nur bei großen Antworten (z.B. Zonentransfers) oder wenn die Antwort nicht in ein UDP-Paket passt, wechselt DNS zu TCP.`,
        },
        {
          title: 'A9: Was passiert, wenn ein Client keinen DHCP-Server findet?',
          content: `Der Client weist sich selbst eine sogenannte APIPA-Adresse zu (169.254.x.x /16). Damit kann er nur innerhalb des lokalen Netzes kommunizieren, aber nicht ins Internet.`,
        },
        {
          title: 'A10: Erkläre den Begriff "Forward Secrecy" im Zusammenhang mit TLS.',
          content: `Forward Secrecy bedeutet, dass der verwendete Sitzungsschlüssel nicht aus dem langfristigen Private Key des Servers abgeleitet werden kann. Selbst wenn der Private Key später kompromittiert wird, können frühere Sitzungen nicht entschlüsselt werden. Dies wird durch ephemeren Schlüsselaustausch (ECDHE) erreicht.`,
        },
      ])}
      
      <h4 class="lz-h4">🎯 Quizfragen (Multiple Choice)</h4>
      ${renderAccordion([
        {
          title: 'Frage 1: Welcher Port wird standardmäßig für HTTPS verwendet?',
          content: 'Port 443.',
        },
        {
          title: 'Frage 2: Welches Protokoll wird von ping verwendet?',
          content: 'ICMP (Echo Request / Echo Reply).',
        },
        {
          title: 'Frage 3: Was bedeutet das SYN-Flag im TCP-Header?',
          content: 'SYN (Synchronize) wird beim Verbindungsaufbau gesetzt, um die Sequenznummer zu initialisieren.',
        },
        {
          title: 'Frage 4: Welcher DHCP-Nachrichtentyp wird vom Server als Antwort auf einen Discover gesendet?',
          content: 'DHCP Offer.',
        },
        {
          title: 'Frage 5: Wofür steht "CNAME" bei DNS?',
          content: 'Canonical Name – ein Alias für einen anderen Domainnamen.',
        },
        {
          title: 'Frage 6: Was ist der Hauptvorteil von UDP gegenüber TCP?',
          content: 'Geringere Latenz und kein Overhead für Verbindungsaufbau – ideal für Echtzeitanwendungen.',
        },
        {
          title: 'Frage 7: Welche kryptografische Technik wird im TLS-Handshake für den sicheren Austausch des Pre‑Master‑Secrets verwendet?',
          content: 'Asymmetrische Verschlüsselung (RSA oder ECDHE) mit dem Public Key aus dem Serverzertifikat.',
        },
      ])}
      
      ${renderInfobox({ icon: 'fas fa-graduation-cap', title: 'Protokolle – kompakte Prüfungsübersicht', type: 'success',
        body: `<strong>ARP:</strong> IP → MAC (Broadcast Request, Unicast Reply).<br>
               <strong>ICMP:</strong> Fehlermeldungen, Ping (Echo Request/Reply).<br>
               <strong>TCP:</strong> verbindungsorientiert, zuverlässig, 3WH, Sequenznummern, Ports.<br>
               <strong>UDP:</strong> verbindungslos, unzuverlässig, schnell.<br>
               <strong>DNS:</strong> Domain → IP (A/AAAA), hierarchisch, UDP/TCP Port 53.<br>
               <strong>DHCP:</strong> automatische Konfiguration, DORA (UDP Port 67/68).<br>
               <strong>TLS:</strong> Handshake mit Zertifikaten, verschlüsselte Übertragung (HTTPS).` })}
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
