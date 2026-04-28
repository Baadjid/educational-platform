// pages/projekte/lernzettel/faecher/informatik/informatik.js
// Informatik TG — Übersichtsseite
// Struktur nach BPE (Bildungsplaneinheiten) + weiterführende Themen

import { initScrollReveal } from '../../../../../shared/js/index.js';
import { footerHTML }        from '../../../../../components/Footer.js';
import { i18n }              from '../../../../../shared/js/i18n.js';
import { CONFIG } from '../../../../../core/config.js';
import {
  ensureComponentsCSS,
  renderMindMapGrid,
  renderSubhead,
  renderTags,
  initMindMap,
} from '../../js/components/components.js';
import {C} from '../../LernzettelPage.js';

// ─── Fach-Design ────────────────────────────────────────────────

export const COLOR     = '#3b82f6';
export const COLOR_RGB = '59, 130, 246';

// ─── Basis-Route für alle Unterseiten ───────────────────────────

export const BASE = '/projekte/lernzettel/faecher/informatik';

// ═══════════════════════════════════════════════════════════════
// KAPITEL-DATEN
// ═══════════════════════════════════════════════════════════════

const CHAPTERS = [

  // ── 1 · DIGITALTECHNIK & GRUNDLAGEN ───────────────────────────
  {
    num: '1',
    title: 'Digitaltechnik & Grundlagen',
    icon: 'fas fa-microchip',
    color: C.copper.hex,
    colorRgb: C.copper.rgb,
    nodes: [
      {
        num: '1.1',
        title: 'Zahlensysteme & Codes (Dual, Hex, BCD, ASCII)',
        icon: 'fas fa-calculator',
        link: `${BASE}/themen/digitaltechnik/zahlensysteme`,
      },
      {
        num: '1.2',
        title: 'Schaltnetze, KV-Diagramme & DNF',
        icon: 'fas fa-th',
        link: `${BASE}/themen/digitaltechnik/schaltnetze`,
      },
      {
        num: '1.3',
        title: 'FlipFlops & Schaltwerke (RS, D, JK, T)',
        icon: 'fas fa-toggle-on',
        link: `${BASE}/themen/digitaltechnik/flipflops-schaltwerke`,
      },
      {
        num: '1.4',
        title: 'Zustandsdiagramme & synchrone Zähler',
        icon: 'fas fa-chart-simple',
        link: `${BASE}/themen/digitaltechnik/zustandsdiagramme`,
      },
      {
        num: '1.5',
        title: 'VHDL/Verilog & FPGAs',
        icon: 'fas fa-pen-fancy',
        link: `${BASE}/themen/digitaltechnik/vhdl-fpga`,
      },
    ],
  },

  // ── 2 · MIKROCONTROLLER-ARCHITEKTUR & ASSEMBLER ───────────────
  {
    num: '2',
    title: 'Mikrocontroller-Architektur & Assembler',
    icon: 'fas fa-microchip',
    color: C.indigo.hex,
    colorRgb: C.indigo.rgb,
    nodes: [
      {
        num: '2.1',
        title: 'CPU-Aufbau, ALU, Register & Flags',
        icon: 'fas fa-microchip',
        link: `${BASE}/themen/mikrocontroller/architektur`,
      },
      {
        num: '2.2',
        title: 'Speicher, Bussysteme & Adressierung (Harvard/von Neumann)',
        icon: 'fas fa-bus',
        link: `${BASE}/themen/mikrocontroller/speicher-bus`,
      },
      {
        num: '2.3',
        title: 'Interrupts & Timer',
        icon: 'fas fa-bell',
        link: `${BASE}/themen/mikrocontroller/interrupts-timer`,
      },
      {
        num: '2.4',
        title: 'Polling vs. Interrupt — Vergleich & Prinzipien',
        icon: 'fas fa-code-branch',
        link: `${BASE}/themen/mikrocontroller/polling-interrupt`,
      },
      {
        num: '2.5',
        title: 'Assembler-Programmierung & PAP',
        icon: 'fas fa-file-code',
        link: `${BASE}/themen/mikrocontroller/assembler`,
      },
      {
        num: '2.6',
        title: 'Pipelining, Caches & Multicore-Architekturen',
        icon: 'fas fa-tachometer-alt',
        link: `${BASE}/themen/mikrocontroller/pipelining-cache`,
      },
    ],
  },

  // ── 3 · HARDWARE-SCHNITTSTELLEN & PERIPHERIE ──────────────────
  {
    num: '3',
    title: 'Hardware-Schnittstellen & Peripherie',
    icon: 'fas fa-plug',
    color: C.teal.hex,
    colorRgb: C.teal.rgb,
    nodes: [
      {
        num: '3.1',
        title: 'GPIO — digitale & analoge Ein-/Ausgabe',
        icon: 'fas fa-arrows-up-down',
        link: `${BASE}/themen/schnittstellen/gpio`,
      },
      {
        num: '3.2',
        title: 'ADC & DAC — Analog/Digital-Wandlung',
        icon: 'fas fa-chart-line',
        link: `${BASE}/themen/schnittstellen/adc-dac`,
      },
      {
        num: '3.3',
        title: 'PWM — Pulsweitenmodulation',
        icon: 'fas fa-chart-bar',
        link: `${BASE}/themen/schnittstellen/pwm`,
      },
      {
        num: '3.4',
        title: 'Serielle Protokolle: SPI, I²C, UART',
        icon: 'fas fa-exchange-alt',
        link: `${BASE}/themen/schnittstellen/spi-i2c-uart`,
      },
      {
        num: '3.5',
        title: 'USB, CAN-Bus, Ethernet-Controller',
        icon: 'fas fa-usb',
        link: `${BASE}/themen/schnittstellen/usb-can`,
      },
    ],
  },

  // ── 4 · PROGRAMMIERUNG ────────────────────────────────────────
  {
    num: '4',
    title: 'Programmierung',
    icon: 'fas fa-code',
    color: C.cyan.hex,
    colorRgb: C.cyan.rgb,
    nodes: [
      {
        num: '4.1',
        title: 'Grundlagen höherer Programmiersprachen (C/C++)',
        icon: 'fas fa-terminal',
        link: `${BASE}/themen/programmierung/grundlagen`,
      },
      {
        num: '4.2',
        title: 'Algorithmen, Felder & Sortierverfahren',
        icon: 'fas fa-arrow-down-wide-short',
        link: `${BASE}/themen/programmierung/algorithmen`,
      },
      {
        num: '4.3',
        title: 'Struktogramme & Pseudocode',
        icon: 'fas fa-draw-polygon',
        link: `${BASE}/themen/programmierung/struktogramme`,
      },
      {
        num: '4.4',
        title: 'Datenstrukturen: Listen, Stapel, Bäume',
        icon: 'fas fa-sitemap',
        link: `${BASE}/themen/programmierung/datenstrukturen`,
      },
      {
        num: '4.5',
        title: 'Dynamische Datenstrukturen, Hashing & Graphen',
        icon: 'fas fa-diagram-project',
        link: `${BASE}/themen/programmierung/dynamische-datenstrukturen`,
      },
      {
        num: '4.6',
        title: 'Design Patterns & Clean Code',
        icon: 'fas fa-cubes',
        link: `${BASE}/themen/programmierung/design-patterns`,
      },
    ],
  },

  // ── 5 · OBJEKTORIENTIERTER ENTWURF ────────────────────────────
  {
    num: '5',
    title: 'Objektorientierter Entwurf',
    icon: 'fas fa-cube',
    color: C.indigo.hex,
    colorRgb: C.indigo.rgb,
    nodes: [
      {
        num: '5.1',
        title: 'Klassen, Objekte & Kapselung',
        icon: 'fas fa-cube',
        link: `${BASE}/themen/oop/klassen-objekte`,
      },
      {
        num: '5.2',
        title: 'Vererbung, Polymorphie & Schnittstellen',
        icon: 'fas fa-code-fork',
        link: `${BASE}/themen/oop/vererbung-polymorphie`,
      },
      {
        num: '5.3',
        title: 'UML — Klassen-, Objekt-, Sequenzdiagramm',
        icon: 'fas fa-diagram-project',
        link: `${BASE}/themen/oop/uml`,
      },
      {
        num: '5.4',
        title: 'SOLID-Prinzipien & fortgeschrittene OOP-Konzepte',
        icon: 'fas fa-gem',
        link: `${BASE}/themen/oop/solid`,
      },
    ],
  },

  // ── 6 · VERNETZTE SYSTEME & SICHERHEIT ────────────────────────
  {
    num: '6',
    title: 'Vernetzte Systeme & Sicherheit',
    icon: 'fas fa-globe',
    color: C.teal.hex,
    colorRgb: C.teal.rgb,
    nodes: [
      {
        num: '6.1',
        title: 'OSI- & TCP/IP-Referenzmodell',
        icon: 'fas fa-layer-group',
        link: `${BASE}/themen/netzwerke/osi-tcpip`,
      },
      {
        num: '6.2',
        title: 'IPv4/IPv6-Adressierung, Subnetting & CIDR',
        icon: 'fas fa-map-pin',
        link: `${BASE}/themen/netzwerke/ip-subnetting`,
      },
      {
        num: '6.3',
        title: 'Routing, Routingtabellen & Gateway',
        icon: 'fas fa-route',
        link: `${BASE}/themen/netzwerke/routing`,
      },
      {
        num: '6.4',
        title: 'Netzwerkprotokolle (ARP, ICMP, TCP, UDP, DNS, DHCP, TLS)',
        icon: 'fas fa-file-alt',
        link: `${BASE}/themen/netzwerke/protokolle`,
      },
      {
        num: '6.5',
        title: 'Netzwerkkomponenten, VLAN & Sicherheit (Firewall, DMZ)',
        icon: 'fas fa-shield-halved',
        link: `${BASE}/themen/netzwerke/sicherheit`,
      },
      {
        num: '6.6',
        title: 'IPv6-Advanced, BGP, MPLS, SDN, Netzwerkautomation',
        icon: 'fas fa-cloud-arrow-up',
        link: `${BASE}/themen/netzwerke/advanced-networking`,
      },
    ],
  },

  // ── 7 · INTERNET DER DINGE (IoT) ──────────────────────────────
  {
    num: '7',
    title: 'Internet der Dinge (IoT)',
    icon: 'fas fa-wifi',
    color: C.wine.hex,
    colorRgb: C.wine.rgb,
    nodes: [
      {
        num: '7.1',
        title: 'MQTT — Pub/Sub, QoS, Broker, Retain, LWT',
        icon: 'fas fa-comments',
        link: `${BASE}/themen/iot/mqtt`,
      },
      {
        num: '7.2',
        title: 'IoT-Sensoren, Aktoren & ESP32-Plattform',
        icon: 'fas fa-temperature-high',
        link: `${BASE}/themen/iot/sensoren-aktoren`,
      },
      {
        num: '7.3',
        title: 'LoRaWAN, NB-IoT, Edge Computing, IoT-Sicherheit',
        icon: 'fas fa-tower-broadcast',
        link: `${BASE}/themen/iot/advanced-iot`,
      },
    ],
  },

  // ── 8 · DATENBANKSYSTEME ──────────────────────────────────────
  {
    num: '8',
    title: 'Datenbanksysteme',
    icon: 'fas fa-database',
    color: C.olive.hex,
    colorRgb: C.olive.rgb,
    nodes: [
      {
        num: '8.1',
        title: 'Entity-Relationship-Modell & Normalisierung (1NF-3NF)',
        icon: 'fas fa-table',
        link: `${BASE}/themen/datenbanken/er-modell`,
      },
      {
        num: '8.2',
        title: 'SQL — Abfragen, JOINs, Aggregatfunktionen, Subqueries',
        icon: 'fas fa-database',
        link: `${BASE}/themen/datenbanken/sql`,
      },
      {
        num: '8.3',
        title: 'ACID, Transaktionen, NoSQL (MongoDB, Redis)',
        icon: 'fas fa-cloud-upload-alt',
        link: `${BASE}/themen/datenbanken/advanced-db`,
      },
    ],
  },

  // ── 9 · KÜNSTLICHE INTELLIGENZ ────────────────────────────────
  {
    num: '9',
    title: 'Künstliche Intelligenz',
    icon: 'fas fa-brain',
    color: C.rust.hex,
    colorRgb: C.rust.rgb,
    nodes: [
      {
        num: '9.1',
        title: 'Suchalgorithmen: Minimax, Breiten-/Tiefensuche, A*',
        icon: 'fas fa-search',
        link: `${BASE}/themen/ki/suchalgorithmen`,
      },
      {
        num: '9.2',
        title: 'Maschinelles Lernen: k-NN & k-Means',
        icon: 'fas fa-chart-line',
        link: `${BASE}/themen/ki/ml-knn-kmeans`,
      },
      {
        num: '9.3',
        title: 'Neuronale Netze: Perzeptron, Aktivierungsfunktionen',
        icon: 'fas fa-project-diagram',
        link: `${BASE}/themen/ki/neuronale-netze`,
      },
      {
        num: '9.4',
        title: 'Entscheidungsbäume & Random Forest',
        icon: 'fas fa-tree',
        link: `${BASE}/themen/ki/decision-trees`,
      },
      {
        num: '9.5',
        title: 'Deep Learning (CNNs, RNNs), Backpropagation, Transformers',
        icon: 'fas fa-project-diagram',
        link: `${BASE}/themen/ki/deep-learning`,
      },
      {
        num: '9.6',
        title: 'Reinforcement Learning, Explainable AI, KI-Ethik',
        icon: 'fas fa-robot',
        link: `${BASE}/themen/ki/advanced-ai`,
      },
    ],
  },

  // ── 10 · PROJEKTMANAGEMENT & QUALITÄTSSICHERUNG ───────────────
  {
    num: '10',
    title: 'Projektmanagement & Qualitätssicherung',
    icon: 'fas fa-clipboard-list',
    color: C.slate.hex,
    colorRgb: C.slate.rgb,
    nodes: [
      {
        num: '10.1',
        title: 'Scrum & agiles Projektmanagement',
        icon: 'fas fa-chart-line',
        link: `${BASE}/themen/projektmanagement/scrum`,
      },
      {
        num: '10.2',
        title: 'Qualitätssicherung, Testen & Verifikation (Unit-Tests)',
        icon: 'fas fa-vial',
        link: `${BASE}/themen/projektmanagement/qualitaetssicherung`,
      },
      {
        num: '10.3',
        title: 'DevOps, CI/CD, Testautomatisierung, Containervirtualisierung',
        icon: 'fas fa-infinity',
        link: `${BASE}/themen/projektmanagement/devops`,
      },
    ],
  },

  // ── 11 · BETRIEBSSYSTEME & VIRTUALISIERUNG ────────────────────
  {
    num: '11',
    title: 'Betriebssysteme & Virtualisierung',
    icon: 'fas fa-desktop',
    color: C.bronze.hex,
    colorRgb: C.bronze.rgb,
    nodes: [
      {
        num: '11.1',
        title: 'Prozesse, Threads & Scheduling',
        icon: 'fas fa-tasks',
        link: `${BASE}/themen/os/processes`,
      },
      {
        num: '11.2',
        title: 'Speicherverwaltung (Paging, Segmentation, virtueller Speicher)',
        icon: 'fas fa-memory',
        link: `${BASE}/themen/os/memory-management`,
      },
      {
        num: '11.3',
        title: 'Dateisysteme & I/O-Management',
        icon: 'fas fa-folder-tree',
        link: `${BASE}/themen/os/filesystems`,
      },
      {
        num: '11.4',
        title: 'Virtualisierung (KVM, Docker, Kubernetes)',
        icon: 'fas fa-cubes',
        link: `${BASE}/themen/os/virtualization`,
      },
    ],
  },

  // ── 12 · THEORETISCHE INFORMATIK ──────────────────────────────
  {
    num: '12',
    title: 'Theoretische Informatik',
    icon: 'fas fa-square-root-alt',
    color: C.indigo.hex,
    colorRgb: C.indigo.rgb,
    nodes: [
      {
        num: '12.1',
        title: 'Automatentheorie (DFA, NFA, reguläre Ausdrücke)',
        icon: 'fas fa-chart-gantt',
        link: `${BASE}/themen/theoinf/automaten`,
      },
      {
        num: '12.2',
        title: 'Berechenbarkeit & Komplexität (P, NP, NP-Vollständigkeit)',
        icon: 'fas fa-chart-line',
        link: `${BASE}/themen/theoinf/complexity`,
      },
      {
        num: '12.3',
        title: 'Formale Sprachen & Grammatiken (Chomsky-Hierarchie)',
        icon: 'fas fa-language',
        link: `${BASE}/themen/theoinf/formal-languages`,
      },
    ],
  },

  // ── 13 · IT-SICHERHEIT & KRYPTOGRAPHIE ────────────────────────
  {
    num: '13',
    title: 'IT-Sicherheit & Kryptographie',
    icon: 'fas fa-shield-halved',
    color: C.gold.hex,
    colorRgb: C.gold.rgb,
    nodes: [
      {
        num: '13.1',
        title: 'Symmetrische & asymmetrische Verschlüsselung (AES, RSA)',
        icon: 'fas fa-lock',
        link: `${BASE}/themen/security/cryptography`,
      },
      {
        num: '13.2',
        title: 'Hashfunktionen, digitale Signaturen & Zertifikate (PKI)',
        icon: 'fas fa-stamp',
        link: `${BASE}/themen/security/hash-pki`,
      },
      {
        num: '13.3',
        title: 'Angriffstechniken (SQL-Injection, XSS, Buffer Overflow) & Defense',
        icon: 'fas fa-bug',
        link: `${BASE}/themen/security/attacks-defense`,
      },
    ],
  },

  // ── 14 · COMPUTERGRAFIK & BILDVERARBEITUNG ────────────────────
  {
    num: '14',
    title: 'Computergrafik & Bildverarbeitung',
    icon: 'fas fa-palette',
    color: C.cyan.hex,
    colorRgb: C.cyan.rgb,
    nodes: [
      {
        num: '14.1',
        title: 'Rastergrafik, Vektorgrafik & 3D-Modellierung (OpenGL)',
        icon: 'fas fa-cube',
        link: `${BASE}/themen/grafik/3d-modelling`,
      },
      {
        num: '14.2',
        title: 'Bildverarbeitung: Filter, Kantenerkennung (Sobel, Canny)',
        icon: 'fas fa-filter',
        link: `${BASE}/themen/grafik/image-processing`,
      },
    ],
  },

];

// ═══════════════════════════════════════════════════════════════
// PAGE CLASS
// ═══════════════════════════════════════════════════════════════

export default class InformatikPage {
  constructor(router) {
    this.router = router;
  }

  render() {
    ensureComponentsCSS();

    const el = document.createElement('div');
    el.className = 'page page-informatik';

    // Lernzettel-CSS laden
    if (!document.querySelector('link[href*="lernzettel.css"]')) {
      const link = document.createElement('link');
      link.rel  = 'stylesheet';
      link.href = 'pages/projekte/lernzettel/styles/lernzettel.css';
      document.head.appendChild(link);
    }

    // Fach-CSS-Variable
    el.style.setProperty('--lz-accent',     COLOR);
    el.style.setProperty('--lz-accent-rgb', COLOR_RGB);

    el.innerHTML = this._getHTML();
    return el;
  }

  _getHTML() {
    return `
      <section class="lernzettel-hero">
        <div class="lernzettel-hero-inner">
          <div class="lernzettel-hero-orb"
               style="background:radial-gradient(circle,
                 rgba(${COLOR_RGB},0.18) 0%,
                 rgba(${COLOR_RGB},0.06) 55%,
                 transparent 75%);"
               aria-hidden="true"></div>

          <div class="lernzettel-hero-content">
            <p class="lernzettel-eyebrow">
              <i class="fas fa-microchip" style="color:${COLOR};"></i>
              Informatik · Übersicht
            </p>

            <h1 class="lernzettel-headline">
              <span>Informatik —</span><br>
              <em style="color:${COLOR};">Lernzettel.</em>
            </h1>

            <p class="lernzettel-hero-desc">
              14 Themenbereiche von Digitaltechnik über KI bis hin zu
              Betriebssystemen, Theoretischer Informatik und IT-Sicherheit.
            </p>

            ${renderTags([
              '14 Kapitel',
              'Digitaltechnik',
              'Programmierung',
              'Netzwerke',
              'KI',
            ])}

            <div class="lernzettel-scroll-hint">
              <div class="lernzettel-scroll-mouse">
                <div class="lernzettel-scroll-wheel"
                     style="background:${COLOR};"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="lz-content-section lz-mindmap-section">
        <div class="lz-section-wrap">

          ${renderSubhead('Kapitelübersicht')}

          <h2 class="lz-h2 reveal" style="margin-bottom:0.5rem;">
            Alle Themenbereiche
          </h2>
          <p class="lz-prose reveal" style="max-width:600px; margin-bottom:2.5rem;">
            Klicke auf ein Unterkapitel, um direkt dorthin zu navigieren.
            Jede Seite enthält Theorie, Tabellen, Codebeispiele und Übungen.
          </p>

          <div class="reveal">
            ${renderMindMapGrid(CHAPTERS)}
          </div>

        </div>
      </section>

      ${footerHTML(this.router, {
        extraColumn: {
          title: 'Formelsammlungen & Spickzettel',
          items: [
            { label: '1_5_2_Formelsammlung_Arduino', href: CONFIG.INFORMATIK.FORMELSAMMLUNG_ARDUINO },
            { label: '1_5_2_Formelsammlung_Informationstechnik', href: CONFIG.INFORMATIK.FORMELSAMMLUNG_IT },
          ]
        }
      })}
    `;
  }

  init() {
    i18n.init();
    initScrollReveal();
    initMindMap(document);
  }
}