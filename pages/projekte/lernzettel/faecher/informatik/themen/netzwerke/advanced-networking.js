// pages/projekte/lernzettel/faecher/informatik/themen/netzwerke/advanced-networking.js
// Informatik 6.6 — IPv6-Advanced, BGP, MPLS, SDN, Netzwerkautomation

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
  prev: { label: '6.5 Netzwerksicherheit', link: `${BASE}/themen/netzwerke/sicherheit` },
  next: { label: '7.1 MQTT', link: `${BASE}/themen/iot/mqtt` },
};

const TABS = [
  { key: 'ipv6',    label: '🌐 IPv6-Advanced' },
  { key: 'bgp',     label: '🛣 BGP' },
  { key: 'mpls_sdn',label: '🏷 MPLS & SDN' },
  { key: 'uebungen',label: '✏ Übungen' },
];

export default class AdvancedNetworkingPage {
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
            <span>6.6 · IPv6-Advanced, BGP, MPLS, SDN</span>
          </nav>
          <h1 class="lz-sub-title">IPv6-Advanced, BGP, MPLS & SDN</h1>
          <p class="lz-sub-subtitle">NDP, SLAAC, Autonome Systeme, Label Switching, Software Defined Networking</p>
          ${renderTags(['IPv6', 'NDP', 'SLAAC', 'BGP', 'MPLS', 'SDN', 'AS'])}
        </div>
      </section>
      <section class="lz-content-section">
        <div class="lz-section-wrap">
          <nav class="wim-tabs" id="advNetTabs" aria-label="Advanced Networking">
            ${TABS.map((t, i) => `<button class="wim-tab${i === 0 ? ' active' : ''}" data-wim="${t.key}">${t.label}</button>`).join('')}
          </nav>
          ${this._panelIPv6()}
          ${this._panelBGP()}
          ${this._panelMplsSdn()}
          ${this._panelUebungen()}
        </div>
      </section>
      <section class="lz-content-section" style="padding-top:0;">
        <div class="lz-section-wrap">${renderPageNav(NAV)}</div>
      </section>
      ${footerHTML(this.router)}`;
  }

  _panelIPv6() {
    return `<div class="wim-category active" data-wim-cat="ipv6">
      ${renderInfobox({ icon: 'fas fa-globe', title: 'IPv6-Advanced – NDP & SLAAC', type: 'info',
        body: `IPv6 ersetzt ARP durch <strong>Neighbor Discovery Protocol (NDP)</strong> (basiert auf ICMPv6).
               SLAAC (Stateless Address Autoconfiguration) erlaubt automatische Konfiguration ohne DHCP.` })}
      <h4 class="lz-h4">NDP – Nachrichtentypen</h4>
      ${renderTable({
        headers: ['Nachricht', 'Funktion', 'IPv4‑Äquivalent'],
        rows: [
          ['Neighbor Solicitation (NS)', 'Fragt MAC einer IPv6 an', 'ARP Request'],
          ['Neighbor Advertisement (NA)', 'Antwort mit MAC', 'ARP Reply'],
          ['Router Solicitation (RS)', 'Client sucht Router', 'DHCP Discover'],
          ['Router Advertisement (RA)', 'Router gibt Präfix bekannt', 'DHCP Offer'],
        ],
      })}
      <h4 class="lz-h4">SLAAC – Ablauf</h4>
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:1rem;border-radius:8px;font-family:monospace;">
1. Client erzeugt Link‑Local: fe80:: + Interface‑ID (aus MAC, EUI‑64 oder zufällig).
2. Client sendet Router Solicitation (RS) an ff02::2 (alle Router).
3. Router antwortet mit Router Advertisement (RA) – enthält Präfix (z.B. 2001:db8::/64).
4. Client kombiniert Präfix + Interface‑ID → globale IPv6-Adresse.
5. DAD (Duplicate Address Detection) prüft, ob Adresse bereits verwendet wird.
</pre>
      ${renderTable({
        headers: ['IPv6-Adresstyp', 'Präfix', 'Beschreibung'],
        rows: [
          ['Global Unicast', '2000::/3', 'Öffentlich routbare Adresse'],
          ['Link‑Local', 'fe80::/10', 'Nur im lokalen Netz (vergleichbar APIPA)'],
          ['Unique Local', 'fc00::/7', 'Privat, vergleichbar RFC1918'],
          ['Multicast', 'ff00::/8', 'Gruppenadressen (z.B. ff02::1 = alle Knoten im LAN)'],
          ['Anycast', 'aus Unicast‑Raum', 'Adresse, die mehrere Geräte teilen – das nächste antwortet'],
        ],
      })}
    </div>`;
  }

  _panelBGP() {
    return `<div class="wim-category hidden" data-wim-cat="bgp">
      <h3 class="lz-h3">BGP – Border Gateway Protocol</h3>
      ${renderInfobox({ icon: 'fas fa-globe', title: 'Das Routing‑Protokoll des Internets', type: 'info',
        body: `BGP verbindet <strong>Autonome Systeme (AS)</strong> – Netzwerke unter einer gemeinsamen Verwaltung (z.B. ISP, Universität).
               Jedes AS hat eine eindeutige ASN. BGP ist ein <strong>Path‑Vector‑Protokoll</strong>.` })}
      ${renderTable({
        headers: ['BGP‑Attribut', 'Bedeutung'],
        rows: [
          ['AS_PATH', 'Liste der AS, die durchlaufen werden – verhindert Schleifen'],
          ['NEXT_HOP', 'IP des nächsten Hops'],
          ['LOCAL_PREF', 'Bevorzugter Ausgangsweg (höher = besser), nur innerhalb AS'],
          ['MED', 'Multi‑Exit Discriminator – bevorzugter Eingangsweg (niedriger = besser)'],
        ],
      })}
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:1rem;border-radius:8px;font-family:monospace;">
BGP Best Path Selection (vereinfacht):
  1. Höchste LOCAL_PREF
  2. Kürzester AS_PATH
  3. Niedrigster ORIGIN
  4. Niedrigster MED
  5. eBGP vor iBGP
  6. Niedrigste Router‑ID

eBGP = zwischen verschiedenen AS
iBGP = innerhalb eines AS
</pre>
    </div>`;
  }

  _panelMplsSdn() {
    return `<div class="wim-category hidden" data-wim-cat="mpls_sdn">
      <h3 class="lz-h3">MPLS – Multiprotocol Label Switching</h3>
      ${renderInfobox({ icon: 'fas fa-tags', title: 'Label‑basierte Weiterleitung', type: 'info',
        body: `MPLS fügt einen kurzen <strong>Label</strong> (20 Bit) zwischen L2 und L3 ein.
               Router im Kern tauschen nur Labels (keine IP‑Lookup) → sehr schnell.
               Ermöglicht Traffic Engineering, VPNs (L3VPN, L2VPN).` })}
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:1rem;border-radius:8px;font-family:monospace;">
MPLS‑Header (32 Bit):
┌──────────────┬─────┬───┬─────┐
│   Label (20) │ TC(3)│ S │ TTL │
└──────────────┴─────┴───┴─────┘
  Label = Forwarding‑Entscheidung
  TC = Traffic Class (QoS)
  S = Bottom of Stack (1 = letztes Label)
  TTL = Time to Live
</pre>
      <h3 class="lz-h3">SDN – Software Defined Networking</h3>
      ${renderCompare({
        titleA: '🔵 Klassisches Netzwerk',
        titleB: '🟢 SDN',
        listA: [
          'Control Plane und Data Plane auf jedem Gerät',
          'Konfiguration per CLI (gerätespezifisch)',
          'Schwer zu automatisieren',
          'Änderungen langsam, manuell',
        ],
        listB: [
          'Control Plane zentral (SDN‑Controller)',
          'Data Plane nur Weiterleitung (OpenFlow)',
          'Einheitliche API (REST, gRPC)',
          'Programmatische Netzwerksteuerung (DevOps)',
        ],
      })}
      ${renderInfobox({ icon: 'fas fa-code', title: 'Netzwerkautomation', type: 'info',
        body: `Tools wie <strong>Ansible, Terraform, Python (Netmiko, NAPALM)</strong> ermöglichen die automatisierte Konfiguration von Netzwerkgeräten.
               Zusammen mit CI/CD (Git, Jenkins) entsteht <strong>NetDevOps</strong> – beschleunigt Änderungen und reduziert Fehler.` })}
    </div>`;
  }

  _panelUebungen() {
    return `<div class="wim-category hidden" data-wim-cat="uebungen">
      <h3 class="lz-h3">Übungsaufgaben</h3>
      ${renderAccordion([
        {
          title: 'A1: Erkläre den Unterschied zwischen Link‑Local und Global Unicast in IPv6.',
          content: `Link‑Local (fe80::/10) ist nur im selben Netz gültig, wird nicht geroutet. Global Unicast (2000::/3) ist weltweit eindeutig und wird im Internet geroutet.`,
        },
        {
          title: 'A2: Was ist ein Autonomes System (AS) und wozu dient BGP?',
          content: `Ein AS ist ein Netzwerk unter einer gemeinsamen Verwaltung (z.B. Telekom). BGP tauscht Routing‑Informationen zwischen verschiedenen AS aus, damit Pakete das Internet durchqueren können.`,
        },
        {
          title: 'A3: Warum ist MPLS schneller als IP‑Routing?',
          content: `MPLS verwendet feste Labels anstelle von variablen IP‑Adressen. Die Label‑Lookup ist einfacher und schneller als ein Longest Prefix Match. Zudem entfällt die IP‑Header‑Analyse im Kern.`,
        },
        {
          title: 'A4: Was ist der Vorteil von SDN gegenüber klassischen Netzwerken?',
          content: `Zentrale Steuerung, programmierbare Schnittstellen, Automatisierung, schnellere Änderungen, geräteunabhängige Konfiguration (OpenFlow).`,
        },
      ])}
      ${renderInfobox({ icon: 'fas fa-graduation-cap', title: 'Advanced Networking – Prüfungsrelevanz', type: 'success',
        body: `• IPv6: NDP, SLAAC, Adresstypen – grundlegendes Wissen.<br>
               • BGP: AS, AS_PATH, eBGP/iBGP – Überblick.<br>
               • MPLS: Label, LSR, LER – Prinzip.<br>
               • SDN: Trennung von Control und Data Plane, OpenFlow.<br>
               Für das Abitur sind die Grundlagen (IPv6, NDP) wichtiger; BGP/MPLS/SDN sind weiterführend.` })}
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