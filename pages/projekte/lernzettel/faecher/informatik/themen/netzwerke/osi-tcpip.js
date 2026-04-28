// pages/projekte/lernzettel/faecher/informatik/themen/netzwerke/osi-tcpip.js
// Informatik 6.1 — OSI- & TCP/IP-Referenzmodell (maximal detailliert)

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
  prev: { label: '5.4 SOLID', link: `${BASE}/themen/oop/solid` },
  next: { label: '6.2 IPv4 & Subnetting', link: `${BASE}/themen/netzwerke/ip-subnetting` },
};

const TABS = [
  { key: 'osi',      label: '📚 OSI-Modell' },
  { key: 'tcpip',    label: '🌐 TCP/IP-Modell' },
  { key: 'vergleich',label: '⚖ Vergleich & Kapselung' },
  { key: 'uebungen', label: '✏ Übungen' },
];

export default class OsiTcpipPage {
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
            <span>6.1 · OSI & TCP/IP</span>
          </nav>
          <h1 class="lz-sub-title">OSI- & TCP/IP-Referenzmodell</h1>
          <p class="lz-sub-desc">7 Schichten, 4 Schichten, Encapsulation, PDU, Protokolle – komplett fürs Abitur</p>
          ${renderTags(['OSI', 'TCP/IP', 'Schichtenmodell', 'Encapsulation', 'PDU', 'BPE 10'])}
        </div>
      </section>
      <section class="lz-content-section">
        <div class="lz-section-wrap">
          <nav class="wim-tabs" id="osiTabs" aria-label="OSI & TCP/IP">
            ${TABS.map((t, i) => `<button class="wim-tab${i === 0 ? ' active' : ''}" data-wim="${t.key}">${t.label}</button>`).join('')}
          </nav>
          ${this._panelOSI()}
          ${this._panelTCPIP()}
          ${this._panelVergleich()}
          ${this._panelUebungen()}
        </div>
      </section>
      <section class="lz-content-section" style="padding-top:0;">
        <div class="lz-section-wrap">${renderPageNav(NAV)}</div>
      </section>
      ${footerHTML(this.router)}`;
  }

  // ========================= OSI-Panel – maximal detailliert =========================
  _panelOSI() {
    // Jede Schicht wird als eigener Accordion-Eintrag mit umfangreichem Inhalt definiert
    const layerDetails = [
      {
        title: '🔟 Schicht 7 – Anwendungsschicht (Application Layer) – Das Tor zum Benutzer',
        content: `
          ${renderInfobox({ icon: 'fas fa-desktop', title: 'Aufgaben der Anwendungsschicht', type: 'info',
            body: `Die Anwendungsschicht ist die einzige Schicht, mit der der Benutzer direkt interagiert. Sie stellt Netzwerkdienste für Anwendungsprogramme bereit.` })}
          <p class="lz-prose"><strong>Kernaufgaben im Detail:</strong></p>
          <ul class="lz-prose">
            <li><strong>Schnittstelle für Anwendungen:</strong> Bereitstellung von APIs und Diensten wie Dateitransfer, E-Mail, Web-Zugriff.</li>
            <li><strong>Authentifizierung & Autorisierung:</strong> Prüfung der Benutzeridentität und Zugriffsrechte (z.B. Login bei E-Mail).</li>
            <li><strong>Datenformatierung für Anwendungen:</strong> Umsetzung in anwendungsspezifische Formate (z.B. HTTP-Request).</li>
            <li><strong>Session-Management auf Anwendungsebene:</strong> z.B. Login-Zustand über mehrere Requests hinweg (Cookies, Tokens).</li>
          </ul>
          <p class="lz-prose"><strong>Wichtige Protokolle und ihre Verwendung:</strong></p>
          ${renderTable({
            headers: ['Protokoll', 'Port', 'Verwendung', 'Beispiel'],
            rows: [
              ['HTTP/HTTPS', '80/443', 'Webseiten abrufen', 'www.google.de aufrufen'],
              ['FTP', '21', 'Dateiübertragung', 'Upload einer Webseite auf Server'],
              ['SMTP', '25', 'E-Mail versenden', 'E-Mail an Freund schicken'],
              ['POP3 / IMAP', '110 / 143', 'E-Mail empfangen', 'E-Mails vom Server laden'],
              ['DNS', '53', 'Namensauflösung', 'www.google.de → 142.250.185.46'],
              ['DHCP', '67/68', 'Automatische IP-Vergabe', 'Router vergibt IP an Laptop'],
              ['SSH', '22', 'Verschlüsselte Terminal-Sitzung', 'Server administrieren'],
              ['Telnet', '23', 'Unverschlüsselte Terminal-Sitzung', 'historisch, heute unsicher'],
              ['MQTT', '1883', 'IoT-Nachrichten', 'Sensor sendet Temperatur'],
            ],
          })}
          <p class="lz-prose"><strong>PDU:</strong> Daten (Data) – die Nutzdaten ohne zusätzliche Header auf dieser Ebene.</p>
          <p class="lz-prose"><strong>Typische Angriffe auf dieser Schicht:</strong> Phishing, Cross-Site-Scripting (XSS), SQL-Injection.</p>
          <p class="lz-prose"><strong>💡 Beispiel aus dem Alltag:</strong> Du öffnest den Browser, tippst "youtube.com" ein – die Anwendungsschicht des Browsers erzeugt einen HTTP-Request, der an den YouTube-Server geschickt wird. Die Schicht darunter (Darstellung) kümmert sich dann um die Verschlüsselung (HTTPS).</p>
        `,
      },
      {
        title: '🔟 Schicht 6 – Darstellungsschicht (Presentation Layer) – Der Übersetzer',
        content: `
          ${renderInfobox({ icon: 'fas fa-exchange-alt', title: 'Aufgaben der Darstellungsschicht', type: 'info',
            body: `Diese Schicht sorgt dafür, dass zwei unterschiedliche Systeme die Daten verstehen können – sie übersetzt, verschlüsselt und komprimiert.` })}
          <p class="lz-prose"><strong>Kernaufgaben:</strong></p>
          <ul class="lz-prose">
            <li><strong>Datenformatierung (Syntax):</strong> Umwandlung zwischen verschiedenen Zeichensätzen (ASCII, EBCDIC, Unicode) und Datenstrukturen (z.B. Integer-Endianness).</li>
            <li><strong>Verschlüsselung (Encryption):</strong> Gewährleistung der Vertraulichkeit (TLS, SSL, AES, RSA).</li>
            <li><strong>Komprimierung (Compression):</strong> Reduzierung der Datenmenge (ZIP, GZIP, JPEG, MPEG).</li>
            <li><strong>Serialisierung:</strong> Umwandlung von Objekten in übertragbare Formate wie JSON, XML, Protobuf.</li>
          </ul>
          <p class="lz-prose"><strong>Wichtige Standards & Verfahren:</strong></p>
          ${renderTable({
            headers: ['Verfahren', 'Einsatzbereich', 'Beispiel'],
            rows: [
              ['TLS 1.3', 'Verschlüsselung', 'HTTPS-Verbindung im Browser'],
              ['AES-256', 'Symmetrische Verschlüsselung', 'WLAN-Verschlüsselung (WPA2/3)'],
              ['GZIP', 'Komprimierung', 'Webseiten werden komprimiert übertragen'],
              ['UTF-8', 'Zeichensatz', 'Darstellung von Emojis und Sonderzeichen'],
              ['JPEG', 'Bildkomprimierung', 'Fotos im Web'],
              ['ASN.1', 'Datenstruktur-Beschreibung', 'SNMP, LDAP, Zertifikate'],
            ],
          })}
          <p class="lz-prose"><strong>PDU:</strong> Daten (Data) – die Darstellungsschicht verändert die Nutzdaten, fügt aber keinen eigenen Header hinzu (im OSI-Modell; in der Praxis wird TLS als eigenes Protokoll oft als Teil der Darstellungsschicht betrachtet).</p>
          <p class="lz-prose"><strong>💡 Praxisbeispiel:</strong> Wenn du eine verschlüsselte Webseite (https://) besuchst, übernimmt die Darstellungsschicht die TLS-Handshake und verschlüsselt den HTTP-Request, bevor er an die Sitzungsschicht weitergereicht wird. Der Empfänger entschlüsselt die Daten wieder.</p>
        `,
      },
      {
        title: '🔟 Schicht 5 – Sitzungsschicht (Session Layer) – Der Gesprächsmanager',
        content: `
          ${renderInfobox({ icon: 'fas fa-handshake', title: 'Aufgaben der Sitzungsschicht', type: 'info',
            body: `Die Sitzungsschicht verwaltet die Kommunikationssitzung zwischen zwei Endsystemen: Aufbau, Steuerung und Abbau.` })}
          <p class="lz-prose"><strong>Kernaufgaben im Detail:</strong></p>
          <ul class="lz-prose">
            <li><strong>Session-Management:</strong> Aufbau (Connect), Verwaltung (Keep-Alive) und Abbau (Disconnect) von Verbindungen.</li>
            <li><strong>Dialogkontrolle:</strong> Festlegung, ob die Kommunikation im Halbduplex (abwechselnd) oder Vollduplex (gleichzeitig) abläuft.</li>
            <li><strong>Synchronisation (Checkpointing):</strong> Einfügen von Prüfpunkten in lange Datenströme, sodass nach einem Abbruch nicht von vorne begonnen werden muss.</li>
            <li><strong>Recovery:</strong> Wiederherstellung der Verbindung nach Fehlern, z.B. Wiederaufnahme einer unterbrochenen Dateiübertragung.</li>
            <li><strong>Token-Management:</strong> Wer darf wann sprechen (z.B. in einem Videokonferenzsystem).</li>
          </ul>
          <p class="lz-prose"><strong>Wichtige Protokolle / Technologien:</strong></p>
          <ul class="lz-prose">
            <li><strong>NetBIOS</strong> – Datei- und Druckerfreigabe in Windows-Netzen.</li>
            <li><strong>RPC (Remote Procedure Call)</strong> – Aufruf von Funktionen auf entfernten Rechnern.</li>
            <li><strong>PPTP / L2TP</strong> – Tunnelprotokolle für VPNs (hier oft Sitzungsmanagement integriert).</li>
            <li><strong>Session Layer in SQL</strong> – Verwaltung von Datenbanksitzungen.</li>
            <li><strong>Cookies & Sessions im Web</strong> – Obwohl sie auf Anwendungsebene realisiert sind, übernehmen sie typische Sitzungsaufgaben.</li>
          </ul>
          <p class="lz-prose"><strong>PDU:</strong> Daten (Data) – kein eigener Header im klassischen OSI-Modell; die Sitzungsdaten werden als Nutzdaten an die Transportschicht übergeben.</p>
          <p class="lz-prose"><strong>💡 Beispiel:</strong> Bei einem Zoom-Videocall verwaltet diese Schicht die Sitzung: Wer ist Moderator? Wer darf sprechen (Token)? Was passiert, wenn die Verbindung kurz unterbrochen wird? Die Sitzungsschicht stellt sicher, dass nach einer Unterbrechung nicht die ganze Konferenz neu gestartet werden muss, sondern nur die verlorenen Datenpakete nachgeladen werden.</p>
        `,
      },
      {
        title: '🔟 Schicht 4 – Transportschicht (Transport Layer) – Der Qualitätsmanager',
        content: `
          ${renderInfobox({ icon: 'fas fa-truck', title: 'Aufgaben der Transportschicht', type: 'info',
            body: `Sie ist verantwortlich für eine zuverlässige Ende-zu-Ende-Kommunikation zwischen zwei Prozessen (Ports). Hier entscheidet sich, ob TCP (zuverlässig) oder UDP (schnell) verwendet wird.` })}
          <p class="lz-prose"><strong>Kernaufgaben:</strong></p>
          <ul class="lz-prose">
            <li><strong>Segmentierung:</strong> Aufteilen großer Datenblöcke in kleinere Segmente (Maximum Segment Size).</li>
            <li><strong>Flusskontrolle (Flow Control):</strong> Verhindert, dass ein schneller Sender einen langsamen Empfänger überlastet (Sliding Window bei TCP).</li>
            <li><strong>Fehlerkorrektur:</strong> Erkennung verlorener Pakete via Sequenznummern und erneutes Senden (TCP).</li>
            <li><strong>Port-Addressing:</strong> Identifikation der Zielanwendung über Portnummern (0–65535).</li>
            <li><strong>Multiplexing / Demultiplexing:</strong> Mehrere Anwendungen können gleichzeitig über verschiedene Ports kommunizieren.</li>
          </ul>
          <p class="lz-prose"><strong>Vergleich TCP vs. UDP:</strong></p>
          ${renderTable({
            headers: ['Eigenschaft', 'TCP', 'UDP'],
            rows: [
              ['Verbindungsorientiert', 'Ja (3‑Way‑Handshake)', 'Nein (verbindungslos)'],
              ['Zuverlässigkeit', 'Ja (Bestätigungen, Wiederholung)', 'Nein (keine Garantie)'],
              ['Reihenfolge', 'Wird sichergestellt', 'Nicht garantiert'],
              ['Geschwindigkeit', 'Langsamer (Overhead)', 'Sehr schnell'],
              ['Flusskontrolle', 'Ja (Sliding Window)', 'Nein'],
              ['Beispiele', 'HTTP, HTTPS, FTP, SSH, SMTP', 'DNS, VoIP, Videostreaming, Spiele'],
            ],
          })}
          <p class="lz-prose"><strong>Wichtige Header-Felder (TCP):</strong> Quellport, Zielport, Sequenznummer, Bestätigungsnummer, Flags (SYN, ACK, FIN, RST), Fenstergröße, Prüfsumme.</p>
          <p class="lz-prose"><strong>PDU:</strong> Segment (TCP) / Datagramm (UDP).</p>
          <p class="lz-prose"><strong>💡 Praxisbeispiel:</strong> Beim Herunterladen einer großen Datei (z.B. ein ISO-Image) verwendet man TCP, weil jedes Bit korrekt ankommen muss. Bei einem Live-Video-Stream (Twitch) nimmt man UDP, weil gelegentlich verlorene Pakete akzeptabel sind, aber eine Verzögerung durch erneutes Senden vermieden werden muss.</p>
        `,
      },
      {
        title: '🔟 Schicht 3 – Vermittlungsschicht (Network Layer) – Der Wegweiser',
        content: `
          ${renderInfobox({ icon: 'fas fa-map-marked-alt', title: 'Aufgaben der Vermittlungsschicht', type: 'info',
            body: `Logische Adressierung (IP), Routing und Weiterleitung von Paketen durch ein Netzwerk – das Herzstück des Internets.` })}
          <p class="lz-prose"><strong>Kernaufgaben:</strong></p>
          <ul class="lz-prose">
            <li><strong>Routing:</strong> Bestimmung des optimalen Pfades durch das Netz (via Routing-Tabellen und Protokolle wie OSPF, BGP).</li>
            <li><strong>Logische Adressierung (IP):</strong> Jedes Gerät erhält eine eindeutige IP-Adresse (IPv4: 32 Bit, IPv6: 128 Bit).</li>
            <li><strong>Packet Forwarding:</strong> Weiterleitung von Paketen von einem Netz in ein anderes (Router).</li>
            <li><strong>Fragmentierung & Reassembly:</strong> Aufteilen großer Pakete, wenn das nächste Netzwerk eine kleinere MTU (Maximum Transmission Unit) hat.</li>
            <li><strong>TTL (Time To Live):</strong> Verhindert Endlosschleifen im Netz – jeder Router dekrementiert das TTL-Feld.</li>
            <li><strong>ARP (IPv4) / NDP (IPv6):</strong> Zuordnung von IP-Adressen zu MAC-Adressen.</li>
          </ul>
          <p class="lz-prose"><strong>IPv4-Header – die wichtigsten Felder:</strong></p>
          ${renderTable({
            headers: ['Feld', 'Länge', 'Bedeutung'],
            rows: [
              ['Version', '4 Bit', '4 für IPv4, 6 für IPv6'],
              ['IHL', '4 Bit', 'Header-Länge in 32-Bit-Wörtern (min. 5 = 20 Byte)'],
              ['Total Length', '16 Bit', 'Gesamtlänge des Pakets (Header + Daten)'],
              ['TTL', '8 Bit', 'Maximale Anzahl Hops (typisch 64)'],
              ['Protocol', '8 Bit', 'Protokoll der Nutzdaten (6=TCP, 17=UDP, 1=ICMP)'],
              ['Source/Dest IP', '32 Bit', 'Absender- und Empfängeradresse'],
            ],
          })}
          <p class="lz-prose"><strong>IPv4-Adressklassen (historisch) – heute CIDR:</strong></p>
          ${renderTable({
            headers: ['Klasse', 'Adressbereich', 'Standardmaske', 'CIDR', 'Max. Hosts'],
            rows: [
              ['A', '0.0.0.0 – 127.255.255.255', '255.0.0.0', '/8', '~16,7 Mio.'],
              ['B', '128.0.0.0 – 191.255.255.255', '255.255.0.0', '/16', '65.534'],
              ['C', '192.0.0.0 – 223.255.255.255', '255.255.255.0', '/24', '254'],
              ['D', '224.0.0.0 – 239.255.255.255', '-', '-', 'Multicast'],
              ['E', '240.0.0.0 – 255.255.255.255', '-', '-', 'experimentell'],
            ],
          })}
          <p class="lz-prose"><strong>Private IP-Adressen (RFC 1918):</strong> 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16 – nicht im Internet routbar, werden über NAT übersetzt.</p>
          <p class="lz-prose"><strong>Routing – einfache Tabelle:</strong></p>
          <ul class="lz-prose">
            <li><strong>Default-Route 0.0.0.0/0</strong> → Standardgateway (Router ins Internet).</li>
            <li><strong>Direkt verbundene Netze</strong> (z.B. 192.168.1.0/24 über Schnittstelle eth0).</li>
            <li><strong>Statische Routen</strong> oder dynamisches Routing (RIP, OSPF, BGP).</li>
          </ul>
          <p class="lz-prose"><strong>PDU:</strong> Paket (Packet).</p>
          <p class="lz-prose"><strong>💡 Beispiel:</strong> Dein Computer (192.168.1.10) möchte ein Paket an 8.8.8.8 (Google DNS) senden. Die Vermittlungsschicht prüft, dass 8.8.8.8 nicht im lokalen Netz liegt, also wird das Paket an das Standardgateway (192.168.1.1) weitergereicht. Der Router entscheidet anhand seiner Routing-Tabelle, welcher nächste Hop der beste ist. Jeder Hop reduziert die TTL.</p>
        `,
      },
      {
        title: '🔟 Schicht 2 – Sicherungsschicht (Data Link Layer) – Der Nachbarschaftshelfer',
        content: `
          ${renderInfobox({ icon: 'fas fa-ethernet', title: 'Aufgaben der Sicherungsschicht', type: 'info',
            body: `Sie regelt den Zugriff auf das physische Medium, erkennt Übertragungsfehler und adressiert Geräte innerhalb eines lokalen Netzes über MAC-Adressen.` })}
          <p class="lz-prose"><strong>Teilschichten:</strong></p>
          <ul class="lz-prose">
            <li><strong>LLC (Logical Link Control)</strong> – Schnittstelle zur Vermittlungsschicht (Multiplexing von Protokollen wie IP, ARP).</li>
            <li><strong>MAC (Media Access Control)</strong> – Zugriff auf das Medium, Framing, Fehlererkennung, Adressierung mit MAC-Adressen.</li>
          </ul>
          <p class="lz-prose"><strong>MAC-Adresse (48 Bit):</strong></p>
          <ul class="lz-prose">
            <li>Aufbau: 24 Bit Herstellerkennung (OUI) + 24 Bit gerätespezifisch.</li>
            <li>Darstellung: hexadezimal, z.B. <code>00:1A:2B:3C:4D:5E</code>.</li>
            <li>Broadcast: <code>FF:FF:FF:FF:FF:FF</code> → an alle Geräte im selben Netz.</li>
            <li>Multicast: erstes Byte ungerade (z.B. 01:00:5E:...).</li>
          </ul>
          <p class="lz-prose"><strong>Ethernet-Frame (DIX / IEEE 802.3):</strong></p>
          <ul class="lz-prose">
            <li><strong>Präambel (7 Byte)</strong> + <strong>SFD (1 Byte)</strong> – Synchronisation.</li>
            <li><strong>Ziel-MAC (6 Byte)</strong> – Empfänger.</li>
            <li><strong>Quell-MAC (6 Byte)</strong> – Sender.</li>
            <li><strong>Länge/Typ (2 Byte)</strong> – entweder Länge (802.3) oder EtherType (z.B. 0x0800 für IP).</li>
            <li><strong>Daten (46–1500 Byte)</strong> – Nutzdaten (inkl. LLC-Header).</li>
            <li><strong>FCS (4 Byte)</strong> – Frame Check Sequence (CRC) zur Fehlererkennung.</li>
          </ul>
          <p class="lz-prose"><strong>Zugriffsverfahren:</strong></p>
          ${renderTable({
            headers: ['Verfahren', 'Einsatz', 'Beschreibung'],
            rows: [
              ['CSMA/CD', 'Ethernet (kabelgebunden)', 'Collision Detection – Sender hört mit, bei Kollision Backoff-Algorithmus.'],
              ['CSMA/CA', 'WLAN', 'Collision Avoidance – RTS/CTS, IFS, ACK – verhindert Kollisionen weitgehend.'],
              ['Token Passing', 'Token Ring, FDDI (veraltet)', 'Ein Token zirkuliert, nur wer es hat darf senden.'],
            ],
          })}
          <p class="lz-prose"><strong>Switches vs. Hubs:</strong></p>
          <ul class="lz-prose">
            <li><strong>Hub (Schicht 1):</strong> Verteilt jedes Signal an alle Ports → Kollisionen, Halbduplex, eine Kollisionsdomäne.</li>
            <li><strong>Switch (Schicht 2):</strong> Lernt MAC-Adressen, leitet nur an den Ziel-Port weiter → Vollduplex, jede Port ist eigene Kollisionsdomäne.</li>
          </ul>
          <p class="lz-prose"><strong>ARP (Address Resolution Protocol):</strong> Fragt zu einer bekannten IP-Adresse die zugehörige MAC-Adresse an. Broadcast-Request, Unicast-Reply. ARP-Cache speichert die Zuordnung für einige Minuten.</p>
          <p class="lz-prose"><strong>VLAN (IEEE 802.1Q):</strong> Logische Trennung eines physischen Switches in mehrere voneinander isolierte Netze. Kommunikation zwischen VLANs nur über Router (Schicht 3).</p>
          <p class="lz-prose"><strong>PDU:</strong> Frame (Rahmen).</p>
          <p class="lz-prose"><strong>💡 Beispiel:</strong> Wenn du eine Webseite aufrufst, muss dein Rechner die IP des Routers (z.B. 192.168.1.1) in eine MAC-Adresse auflösen. Dazu sendet er einen ARP-Request: "Wer hat 192.168.1.1?" Der Router antwortet mit seiner MAC. Danach kann der Ethernet-Frame mit Ziel-MAC des Routers erstellt werden.</p>
        `,
      },
      {
        title: '🔟 Schicht 1 – Bitübertragungsschicht (Physical Layer) – Die Hardware',
        content: `
          ${renderInfobox({ icon: 'fas fa-plug', title: 'Aufgaben der Bitübertragungsschicht', type: 'info',
            body: `Sie definiert die mechanischen, elektrischen und prozeduralen Eigenschaften der Übertragung: Kabel, Stecker, Spannungen, Lichtsignale, Funkfrequenzen.` })}
          <p class="lz-prose"><strong>Kernaufgaben:</strong></p>
          <ul class="lz-prose">
            <li><strong>Bit-Übertragung:</strong> 0en und 1en werden als elektrische Spannungen, Lichtimpulse oder Funkwellen kodiert.</li>
            <li><strong>Mechanische Spezifikationen:</strong> Steckertypen (RJ45, BNC, LC/SC), Pinbelegungen, Kabeldurchmesser.</li>
            <li><strong>Elektrische Spezifikationen:</strong> Spannungspegel (z.B. +2,5V für 1, 0V für 0 bei manchen Standards), Strom, Impedanz.</li>
            <li><strong>Timing:</strong> Bitrate, Taktsynchronisation (z.B. Manchester-Code zur Selbsttaktung).</li>
            <li><strong>Übertragungsmedien:</strong> Kupferkabel (Twisted Pair, Koaxial), Glasfaser (Multimode, Monomode), Funk.</li>
            <li><strong>Übertragungsmodi:</strong> Simplex (Rundfunk), Halbduplex (Walkie-Talkie), Vollduplex (Telefon).</li>
          </ul>
          <p class="lz-prose"><strong>Übertragungsmedien im Vergleich:</strong></p>
          ${renderTable({
            headers: ['Medium', 'Bitrate (typ.)', 'Reichweite', 'Vorteile', 'Nachteile'],
            rows: [
              ['Twisted Pair (Cat6)', '1–10 Gbit/s', '100 m', 'Günstig, einfach zu verlegen', 'Anfällig für Einstrahlung, begrenzte Reichweite'],
              ['Koaxialkabel', '10 Mbit/s (10Base2)', '185 m', 'Gute Abschirmung, robust', 'Veraltet, sperrig'],
              ['Glasfaser (Multimode)', '10 Gbit/s', 'bis 500 m', 'Hohe Bandbreite, immun gegen EMV', 'Teuer, empfindlich'],
              ['Glasfaser (Monomode)', '100 Gbit/s', '> 100 km', 'Extreme Reichweite, höchste Bandbreite', 'Sehr teure Transceiver'],
              ['WLAN (Wi-Fi 6)', 'bis 9,6 Gbit/s', 'bis 100 m (Sicht)', 'Kabellos, flexibel', 'Störanfällig, geringere Sicherheit'],
            ],
          })}
          <p class="lz-prose"><strong>Wichtige Geräte auf Schicht 1:</strong></p>
          <ul class="lz-prose">
            <li><strong>Repeater:</strong> Verstärkt und regeneriert das Signal, verlängert die Reichweite (2 Ports).</li>
            <li><strong>Hub:</strong> Verteilt das Signal an alle Ports (multiport repeater).</li>
            <li><strong>Media Converter:</strong> Wandelt zwischen Medien um (z.B. Twisted Pair → Glasfaser).</li>
          </ul>
          <p class="lz-prose"><strong>Manchester-Code (Beispiel für Leitungscodierung):</strong> Bei Ethernet (10 Mbit/s) wird jedes Bit durch einen Signalwechsel in der Bitmitte dargestellt: 1 = high→low (10), 0 = low→high (01). Das ermöglicht Selbsttaktung und Kollisionserkennung.</p>
          <p class="lz-prose"><strong>PDU:</strong> Bit (oder Symbol).</p>
          <p class="lz-prose"><strong>💡 Beispiel:</strong> Das Ethernet-Kabel von deinem PC zum Switch überträgt die Bits als elektrische Spannungspegel. Ein Repeater könnte nach 100 Metern das Signal verstärken, um die maximale Segmentlänge zu überschreiten. Ein WLAN-AP nutzt Funkwellen (2,4 GHz oder 5 GHz) zur Übertragung.</p>
        `,
      },
    ];

    return `<div class="wim-category active" data-wim-cat="osi">
      ${renderInfobox({ icon: 'fas fa-layer-group', title: 'OSI-Modell (ISO/OSI)', type: 'info',
        body: `Das <strong>Open Systems Interconnection Model</strong> ist ein Referenzmodell mit 7 Schichten.
               Es wurde von der ISO entwickelt, um Netzwerkkommunikation zu standardisieren.
               Jede Schicht bietet definierte Dienste für die nächsthöhere Schicht an.
               <br><br><strong>Warum?</strong> Vorher: herstellerabhängige Protokolle → keine Interoperabilität.
               OSI schafft klare Regeln, modulare Struktur und erleichtert die Fehlersuche.` })}
      
      <h3 class="lz-h3">Die 7 OSI-Schichten – Übersichtstabelle</h3>
      ${renderTable({
        headers: ['Schicht', 'Name', 'Aufgabe', 'PDU', 'Protokolle / Geräte'],
        rows: [
          ['7', 'Anwendung', 'Benutzeranwendungen, Dienste', 'Daten', 'HTTP, FTP, SMTP, DNS, DHCP'],
          ['6', 'Darstellung', 'Kodierung, Verschlüsselung, Komprimierung', 'Daten', 'TLS, JPEG, ASCII, UTF-8'],
          ['5', 'Sitzung', 'Verwaltung von Verbindungen, Synchronisation', 'Daten', 'NetBIOS, RPC, SMB'],
          ['4', 'Transport', 'Ende-zu-Ende-Kommunikation, Flusskontrolle', 'Segment', 'TCP, UDP'],
          ['3', 'Vermittlung', 'Routing, logische Adressierung (IP)', 'Paket', 'IP, ICMP, Router'],
          ['2', 'Sicherung', 'Fehlererkennung, Medienzugriff (MAC)', 'Frame', 'Ethernet, Switch, MAC'],
          ['1', 'Bitübertragung', 'Übertragung von Bits, elektrische Signale', 'Bit', 'Kabel, Hub, Repeater'],
        ],
      })}
      
      <h4 class="lz-h4">Eselsbrücken (von unten nach oben)</h4>
      ${renderMerkboxGrid([
        { icon: 'fas fa-brain', title: 'Englisch (1→7)', text: 'Please Do Not Throw Sausage Pizza Away → Physical, Data Link, Network, Transport, Session, Presentation, Application' },
        { icon: 'fas fa-brain', title: 'Deutsch (7→1)', text: 'Alle Deutschen Studenten Trinken Verschiedene Sorten Bier → Anwendung, Darstellung, Sitzung, Transport, Vermittlung, Sicherung, Bitübertragung' },
        { icon: 'fas fa-brain', title: 'Alternativ (7→1)', text: 'Alle Programmierer Sind Tierisch Nette, Doofe Personen' },
      ])}
      
      <h3 class="lz-h3">📖 Die 7 Schichten im Detail – mit Protokollen, Beispielen und Prüfungsrelevanz</h3>
      ${renderAccordion(layerDetails)}
      
      <div class="important-note" style="background:rgba(201,168,124,0.08); border-left:4px solid var(--lz-accent); margin-top:1rem; padding:1rem;">
        <strong>⚠️ Abitur‑Tipp:</strong> 
        <ul class="lz-prose" style="margin:0.5rem 0 0 1rem;">
          <li>Die Reihenfolge der Schichten (oben nach unten und umgekehrt) muss sitzen.</li>
          <li>PDU-Namen: Daten (L5–7), Segment (L4), Paket (L3), Frame (L2), Bit (L1).</li>
          <li>Wichtige Protokolle pro Schicht: HTTP (L7), TLS (L6), TCP/UDP (L4), IP (L3), Ethernet (L2).</li>
          <li>Encapsulation: Jede Schicht fügt Header hinzu, beim Empfänger werden sie entfernt.</li>
          <li>Router arbeiten auf L3, Switches auf L2, Hubs/Repeater auf L1.</li>
        </ul>
      </div>
    </div>`;
  }

  // ========================= TCP/IP-Panel (erweitert) =========================
  _panelTCPIP() {
    return `<div class="wim-category hidden" data-wim-cat="tcpip">
      <h3 class="lz-h3">TCP/IP-Referenzmodell</h3>
      ${renderInfobox({ icon: 'fas fa-globe', title: 'Das praktisch verwendete Modell im Internet', type: 'info',
        body: `Das TCP/IP-Modell hat nur <strong>4 Schichten</strong> und fasst die oberen drei OSI-Schichten zusammen.
               Es ist das Modell, das im Internet tatsächlich implementiert ist. Entstanden aus dem ARPANET-Projekt.` })}
      
      <p class="lz-prose"><strong>Die vier Schichten im Überblick:</strong></p>
      ${renderTable({
        headers: ['TCP/IP-Schicht', 'Entspricht OSI', 'Aufgabe', 'Protokolle (Beispiele)', 'PDU'],
        rows: [
          ['Anwendung', '5+6+7', 'Anwendungsdienste, Benutzerschnittstelle', 'HTTP, FTP, SMTP, DNS, SSH, MQTT, TLS', 'Daten'],
          ['Transport', '4', 'Ende-zu-Ende-Verbindung, Ports (0–65535)', 'TCP, UDP', 'Segment/Datagramm'],
          ['Internet', '3', 'Routing, logische Adressierung', 'IPv4, IPv6, ICMP, ARP, IGMP', 'Paket'],
          ['Netzzugang', '1+2', 'Physikalischer Zugriff, MAC, Fehlererkennung', 'Ethernet, WLAN, DSL, PPP', 'Frame/Bit'],
        ],
      })}
      
      <h4 class="lz-h4">Portbereiche (wichtig für Transportlayer)</h4>
      ${renderTable({
        headers: ['Portbereich', 'Bezeichnung', 'Beispiele'],
        rows: [
          ['0–1023', 'System‑/Well‑Known Ports', 'HTTP:80, HTTPS:443, FTP:21, SSH:22, DNS:53, DHCP:67/68'],
          ['1024–49151', 'Registered Ports', 'MySQL:3306, RDP:3389, PostgreSQL:5432'],
          ['49152–65535', 'Dynamic/Private Ports', 'wird vom Betriebssystem für Client‑Verbindungen vergeben (ephemeral ports)'],
        ],
      })}
      
      <h4 class="lz-h4">Der TCP-3-Wege-Handshake (verbindungsorientiert)</h4>
      <ul class="lz-prose">
        <li><strong>SYN</strong> (Client → Server): Client sendet SYN mit eigener Sequenznummer.</li>
        <li><strong>SYN-ACK</strong> (Server → Client): Server bestätigt und sendet eigene Sequenznummer.</li>
        <li><strong>ACK</strong> (Client → Server): Bestätigung des Serversequenz. Verbindung steht.</li>
        <li>Danach erfolgt der Datentransfer, beendet mit FIN/ACK.</li>
      </ul>
      
      <h4 class="lz-h4">TCP vs. UDP – Entscheidungshilfe</h4>
      ${renderCompare({
        titleA: '✅ TCP (Transmission Control Protocol)',
        titleB: '⚡ UDP (User Datagram Protocol)',
        listA: [
          'Verbindungsorientiert (Handshake)',
          'Zuverlässig (Bestätigungen, Wiederholungen)',
          'Reihenfolge bleibt erhalten',
          'Fluss- und Staukontrolle',
          'Höherer Overhead (Header 20 Byte)',
          'Einsatz: Web, E-Mail, Dateitransfer, SSH',
        ],
        listB: [
          'Verbindungslos (fire and forget)',
          'Unzuverlässig (keine Garantie)',
          'Reihenfolge nicht garantiert',
          'Keine Kontrollmechanismen',
          'Geringer Overhead (Header 8 Byte)',
          'Einsatz: VoIP, Videostreaming, DNS, Spiele',
        ],
      })}
      
      <h4 class="lz-h4">IPv4 vs. IPv6 – die wichtigsten Unterschiede</h4>
      ${renderTable({
        headers: ['Merkmal', 'IPv4', 'IPv6'],
        rows: [
          ['Adresslänge', '32 Bit', '128 Bit'],
          ['Anzahl Adressen', '~4,3 × 10⁹', '~3,4 × 10³⁸'],
          ['Darstellung', 'Dotted Decimal (192.168.1.1)', 'Hexadezimal (2001:db8::1)'],
          ['NAT', 'Häufig notwendig', 'Nicht mehr benötigt (genug Adressen)'],
          ['Sicherheit', 'IPsec optional', 'IPsec integriert'],
          ['Autokonfiguration', 'DHCP oder manuell', 'SLAAC (stateless) + DHCPv6'],
        ],
      })}
      
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:1.5rem;border-radius:10px;font-family:monospace;font-size:.85rem;line-height:1.8;">
TCP/IP-Protokollstack (vereinfacht):

  ┌─────────────────────────────────────────────┐
  │  HTTP  │ FTP │ SMTP │ DNS │ MQTT │ SSH │ ... │ ← Anwendung (L5–L7)
  ├─────────────────────────────────────────────┤
  │              TCP            │      UDP       │ ← Transport (L4)
  ├─────────────────────────────────────────────┤
  │                 IP (IPv4 / IPv6)            │ ← Internet (L3)
  ├─────────────────────────────────────────────┤
  │   Ethernet   │  WLAN  │  PPP  │  ...        │ ← Netzzugang (L1–L2)
  └─────────────────────────────────────────────┘
      </pre>
      <p class="lz-prose">TCP bietet verbindungsorientierte, zuverlässige Übertragung (3‑Way‑Handshake, Sequenznummern, Bestätigungen). UDP ist verbindungslos, schnell und wird für Echtzeitanwendungen genutzt.</p>
    </div>`;
  }

  // ========================= Vergleich & Kapselung (erweitert) =========================
  _panelVergleich() {
    return `<div class="wim-category hidden" data-wim-cat="vergleich">
      <h3 class="lz-h3">OSI vs. TCP/IP – Gegenüberstellung</h3>
      ${renderCompare({
        titleA: '📋 OSI-Modell (7 Schichten)',
        titleB: '🌐 TCP/IP-Modell (4 Schichten)',
        listA: [
          'Theoretisches Referenzmodell (ISO)',
          'Strenge Trennung der Schichten',
          'Jede Schicht klar definiert',
          'Weniger verbreitet in der Praxis',
          'Wird für Lehre und Dokumentation genutzt',
          'Untere Schichten: Physical, Data Link',
          'Obere Schichten: Session, Presentation, Application',
        ],
        listB: [
          'Praktisches Modell des Internets',
          'Obere Schichten zusammengefasst',
          'Flexibler, historisch gewachsen',
          'De facto Standard',
          'Grundlage für Netzwerkprotokolle',
          'Netzzugang kombiniert Physical + Data Link',
          'Anwendung vereint Session/Presentation/Application',
        ],
      })}
      
      <h4 class="lz-h4">Datenkapselung (Encapsulation / Decapsulation) – Schritt für Schritt</h4>
      <p class="lz-prose">
        Beim Senden wandern die Daten von der Anwendungsschicht (oben) nach unten. Jede Schicht fügt einen eigenen Header (und ggf. Trailer) hinzu.
        Beim Empfangen läuft es umgekehrt – jede Schicht entfernt ihren Header.
      </p>
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:1.5rem;border-radius:10px;font-family:monospace;font-size:.85rem;line-height:1.8;">
Sender:                               Empfänger:
┌─────────────────┐                  ┌─────────────────┐
│ Anwendung (L7)  │  Daten           │ Anwendung (L7)  │
├─────────────────┤                  ├─────────────────┤
│ Transport (L4)  │  TCP‑Header      │ Transport (L4)  │
│                 │  + Daten         │                 │
├─────────────────┤                  ├─────────────────┤
│ Vermittlung(L3) │  IP‑Header       │ Vermittlung(L3) │
│                 │  + TCP + Daten   │                 │
├─────────────────┤                  ├─────────────────┤
│ Sicherung (L2)  │  MAC‑Header      │ Sicherung (L2)  │
│                 │  + IP + TCP +    │                 │
│                 │  Daten + FCS     │                 │
├─────────────────┤                  ├─────────────────┤
│ Bitübertrag.(L1)│  Bits            │ Bitübertrag.(L1)│
└─────────────────┘                  └─────────────────┘

PDU‑Namen: 
  L7: Daten (Data)
  L4: Segment (TCP) / Datagramm (UDP)
  L3: Paket (Packet)
  L2: Frame (Rahmen)
  L1: Bit (Bit)
      </pre>
      
      <h4 class="lz-h4">Beispiel für Encapsulation: HTTP-Request (z.B. Aufruf einer Webseite)</h4>
      <ol class="lz-prose" style="margin-left:1.5rem;">
        <li><strong>Anwendungsschicht (L7):</strong> Browser erzeugt HTTP-GET (z.B. "GET /index.html HTTP/1.1") – das sind die Nutzdaten.</li>
        <li><strong>Transportschicht (L4):</strong> TCP fügt einen Header hinzu mit Quellport (z.B. 49152) und Zielport (80). Dazu Sequenznummern, Flags, Fenstergröße → Segment.</li>
        <li><strong>Vermittlungsschicht (L3):</strong> IP fügt Header hinzu mit Quell-IP (192.168.1.10) und Ziel-IP (93.184.216.34) → Paket.</li>
        <li><strong>Sicherungsschicht (L2):</strong> Ethernet fügt MAC-Header (Quell-MAC, Ziel-MAC des Routers) und FCS (Trailer) hinzu → Frame.</li>
        <li><strong>Bitübertragungsschicht (L1):</strong> Bits werden als elektrische Signale auf das Kabel gelegt.</li>
        <li><strong>Empfang:</strong> Die Schichten arbeiten in umgekehrter Reihenfolge und entfernen jeweils die Header.</li>
      </ol>
      
      <h4 class="lz-h4">Wichtige Begriffe rund um die Kapselung</h4>
      ${renderMerkboxGrid([
        { icon: 'fas fa-box', title: 'Encapsulation', text: 'Hinzufügen von Headern beim Senden (von oben nach unten).' },
        { icon: 'fas fa-box-open', title: 'Decapsulation', text: 'Entfernen von Headern beim Empfangen (von unten nach oben).' },
        { icon: 'fas fa-code-branch', title: 'PDU', text: 'Protocol Data Unit – die Dateneinheit einer Schicht (Segment, Paket, Frame, Bit).' },
        { icon: 'fas fa-arrows-alt', title: 'SAP', text: 'Service Access Point – Schnittstelle zwischen zwei Schichten (z.B. Ports bei TCP).' },
      ])}
      
      ${renderInfobox({ icon: 'fas fa-graduation-cap', title: 'Prüfungsrelevanz', type: 'success',
        body: `• OSI: 7 Schichten mit Namen, Aufgaben und Beispielprotokollen.<br>
               • TCP/IP: 4 Schichten, Zuordnung zu OSI.<br>
               • Encapsulation: Welcher Header wird wo hinzugefügt? Welche PDU?<br>
               • Merksprüche für die Schichtenreihenfolge.<br>
               • Wichtige Protokolle: TCP, UDP, IP, ARP, HTTP, DNS, DHCP.<br>
               • Unterschied Router (L3) vs. Switch (L2) vs. Hub (L1).` })}
    </div>`;
  }

  // ========================= Übungen (erweitert) =========================
  _panelUebungen() {
    return `<div class="wim-category hidden" data-wim-cat="uebungen">
      <h3 class="lz-h3">Übungsaufgaben & Selbsttest</h3>
      ${renderAccordion([
        {
          title: 'A1: Nenne die sieben OSI-Schichten in der richtigen Reihenfolge (von unten nach oben).',
          content: `1. Bitübertragungsschicht (Physical)<br>
          2. Sicherungsschicht (Data Link)<br>
          3. Vermittlungsschicht (Network)<br>
          4. Transportschicht (Transport)<br>
          5. Sitzungsschicht (Session)<br>
          6. Darstellungsschicht (Presentation)<br>
          7. Anwendungsschicht (Application)`,
        },
        {
          title: 'A2: Welche OSI-Schicht wird von Routern verwendet? Welche von Switches?',
          content: `Router arbeiten auf <strong>Schicht 3 (Vermittlung)</strong> – sie leiten IP-Pakete weiter.<br>
          Switches arbeiten auf <strong>Schicht 2 (Sicherung)</strong> – sie leiten Frames anhand von MAC-Adressen weiter.<br>
          Hubs und Repeater auf Schicht 1.`,
        },
        {
          title: 'A3: Was ist eine PDU? Gib Beispiele für verschiedene Schichten.',
          content: `PDU = Protocol Data Unit – die Datenmenge, die eine Schicht an die darunterliegende weitergibt.<br>
          Schicht 4: Segment (TCP) / Datagramm (UDP)<br>
          Schicht 3: Paket (Packet)<br>
          Schicht 2: Frame (Rahmen)`,
        },
        {
          title: 'A4: Erkläre den Begriff "Encapsulation" am Beispiel einer HTTP-Anfrage.',
          content: `1. Browser (Anwendung) erzeugt HTTP-Request (Daten).<br>
          2. Transport (TCP) fügt TCP-Header hinzu (Ports, Sequenznummer) → Segment.<br>
          3. Internet (IP) fügt IP-Header hinzu (Quell‑/Ziel‑IP) → Paket.<br>
          4. Netzzugang (Ethernet) fügt MAC-Header und FCS hinzu → Frame.<br>
          5. Bits werden auf das Kabel gelegt.`,
        },
        {
          title: 'A5: Wofür steht CSMA/CD und wo wird es eingesetzt?',
          content: `Carrier Sense Multiple Access / Collision Detection – bei kabelgebundenem Ethernet (z.B. 10BaseT).<br>
          Geräte hören, ob das Medium frei ist, senden dann. Bei einer Kollision wird abgebrochen und nach zufälliger Zeit erneut versucht (Backoff).`,
        },
        {
          title: 'A6: Welche drei privaten IP-Adressbereiche gibt es laut RFC 1918?',
          content: `• 10.0.0.0/8 (10.0.0.0 – 10.255.255.255)<br>
          • 172.16.0.0/12 (172.16.0.0 – 172.31.255.255)<br>
          • 192.168.0.0/16 (192.168.0.0 – 192.168.255.255)`,
        },
        {
          title: 'A7: Warum wurde IPv6 eingeführt? Nenne zwei Vorteile.',
          content: `IPv4-Adressraum ist erschöpft (nur ~4,3 Mrd. Adressen). IPv6 bietet 128 Bit → 3,4×10^38 Adressen.<br>
          Weitere Vorteile: integrierte IPsec, keine NAT mehr nötig, effizienteres Routing, autoconfiguration (SLAAC).`,
        },
        {
          title: 'A8: Welche Aufgabe hat der ARP (Address Resolution Protocol)?',
          content: `ARP wandelt eine bekannte IP-Adresse in die zugehörige MAC-Adresse um, damit auf Schicht 2 kommuniziert werden kann.<br>
          Der ARP-Request ist ein Broadcast, die Antwort (Reply) ein Unicast.`,
        },
        {
          title: 'A9: Beschreibe den DHCP-Prozess (DORA).',
          content: `D – Discover: Client sucht Server (Broadcast)<br>
          O – Offer: Server bietet IP und Konfiguration an<br>
          R – Request: Client fordert die angebotene Konfiguration an<br>
          A – Acknowledge: Server bestätigt und vergibt die IP (Lease)`,
        },
        {
          title: 'A10: Ein User kann sich nicht bei einer Website einloggen. Ping auf die Website funktioniert. Auf welcher OSI-Schicht liegt das Problem wahrscheinlich?',
          content: `Da das Netzwerk funktioniert (Schicht 1–3 OK), liegt das Problem meist auf Schicht 7 (Anwendung) – z.B. falsches Passwort, Serverfehler, fehlerhafte Anwendung.`,
        },
        {
          title: 'A11: Welche Aussage über TCP ist richtig? (a) verbindungslos, (b) verwendet Sequenznummern, (c) kein Handshake',
          content: `(b) TCP verwendet Sequenznummern für die Reihenfolge und Bestätigungen. TCP ist verbindungsorientiert und nutzt einen 3-Wege-Handshake.`,
        },
        {
          title: 'A12: Was ist die MTU und welche Rolle spielt sie auf Schicht 3?',
          content: `MTU = Maximum Transmission Unit. Wenn ein IP-Paket größer ist als die MTU des nächsten Netzsegments, muss es fragmentiert werden. Dies geschieht auf Schicht 3.`,
        },
        {
          title: 'A13: Wofür steht das TTL-Feld im IP-Header?',
          content: `Time To Live – begrenzt die maximale Anzahl von Routern (Hops), die ein Paket passieren darf. Jeder Router dekrementiert die TTL um 1, bei 0 wird das Paket verworfen.`,
        },
      ])}
      
      <h4 class="lz-h4">🎯 Quizfragen (Multiple Choice – zum Selbsttest)</h4>
      ${renderAccordion([
        {
          title: 'Frage 1: Auf welcher OSI-Schicht arbeitet ein Router hauptsächlich?',
          content: 'Antwort: Schicht 3 (Vermittlungsschicht) – Router leiten IP-Pakete weiter.',
        },
        {
          title: 'Frage 2: Welches Protokoll gehört zur Transportschicht und garantiert zuverlässige Datenübertragung?',
          content: 'TCP (Transmission Control Protocol). UDP ist unzuverlässig.',
        },
        {
          title: 'Frage 3: Was ist die Einheit (PDU) auf der Sicherungsschicht?',
          content: 'Frame (Rahmen).',
        },
        {
          title: 'Frage 4: Welche Aussage über CSMA/CA ist richtig?',
          content: 'CSMA/CA wird bei WLAN verwendet, um Kollisionen zu vermeiden (Collision Avoidance), z.B. mit RTS/CTS.',
        },
        {
          title: 'Frage 5: Wofür steht die Abkürzung "TLS"?',
          content: 'Transport Layer Security – Nachfolger von SSL, verschlüsselt die Verbindung auf der Darstellungsschicht (OSI Schicht 6).',
        },
        {
          title: 'Frage 6: Welcher Port wird standardmäßig für HTTPS verwendet?',
          content: 'Port 443.',
        },
        {
          title: 'Frage 7: Was ist ein Switch auf Schicht 2?',
          content: 'Ein Switch leitet Frames basierend auf MAC-Adressen weiter und lernt die MAC-Tabelle selbstständig.',
        },
      ])}
      
      <div class="important-note" style="background:rgba(122,158,126,0.08); border-left-color: var(--tertiary); margin-top:1rem; padding:1rem;">
        <strong>✅ Abi‑Check:</strong> Wenn du alle obigen Fragen beantworten kannst, bist du gut vorbereitet!
      </div>
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