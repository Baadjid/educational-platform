// pages/projekte/lernzettel/faecher/informatik/themen/netzwerke/routing.js
// Informatik 6.3 — Routing, Routingtabellen & Gateway

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
  prev: { label: '6.2 IPv4 & Subnetting', link: `${BASE}/themen/netzwerke/ip-subnetting` },
  next: { label: '6.4 Netzwerkprotokolle', link: `${BASE}/themen/netzwerke/protokolle` },
};

const TABS = [
  { key: 'grundlagen', label: '🗺 Routing-Grundlagen' },
  { key: 'routingprotokolle', label: '🔄 Routing-Protokolle' },
  { key: 'gateway',   label: '🚪 Default Gateway & NAT' },
  { key: 'uebungen',  label: '✏ Übungen' },
];

export default class RoutingPage {
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
            <span>6.3 · Routing & Gateway</span>
          </nav>
          <h1 class="lz-sub-title">Routing, Routingtabellen & Gateway</h1>
          <p class="lz-sub-subtitle">Longest Prefix Match, statisch/dynamisch, NAT, Default Gateway</p>
          ${renderTags(['Routing', 'Routingtabelle', 'Gateway', 'NAT', 'Longest Prefix Match', 'BPE 10'])}
        </div>
      </section>
      <section class="lz-content-section">
        <div class="lz-section-wrap">
          <nav class="wim-tabs" id="routingTabs" aria-label="Routing">
            ${TABS.map((t, i) => `<button class="wim-tab${i === 0 ? ' active' : ''}" data-wim="${t.key}">${t.label}</button>`).join('')}
          </nav>
          ${this._panelGrundlagen()}
          ${this._panelRoutingprotokolle()}
          ${this._panelGateway()}
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
      ${renderInfobox({ icon: 'fas fa-route', title: 'Was macht ein Router?', type: 'info',
        body: `Ein <strong>Router</strong> verbindet verschiedene Netzwerke und leitet Pakete anhand der Ziel‑IP-Adresse weiter.
               Er arbeitet auf <strong>Schicht 3 (Vermittlung)</strong> und nutzt eine <strong>Routingtabelle</strong>.
               Die Entscheidung basiert auf dem <strong>Longest Prefix Match</strong> – der spezifischste Eintrag gewinnt.` })}
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:1.5rem;border-radius:10px;font-family:monospace;font-size:.85rem;line-height:1.8;">
Routingtabelle (Beispiel Router R1):
┌──────────────┬──────────────┬─────────────────┬────────────┬────────┐
│   Zielnetz   │ Subnetzmaske │     Gateway     │ Interface │ Metrik │
├──────────────┼──────────────┼─────────────────┼────────────┼────────┤
│ 192.168.1.0  │ 255.255.255.0│ directly conn.  │ eth0       │ 0      │
│ 10.0.0.0     │ 255.255.255.0│ directly conn.  │ eth1       │ 0      │
│ 172.16.0.0   │ 255.255.0.0  │ 10.0.0.2        │ eth1       │ 10     │
│ 0.0.0.0      │ 0.0.0.0      │ 192.168.1.254   │ eth0       │ 1      │
└──────────────┴──────────────┴─────────────────┴────────────┴────────┘

Longest Prefix Match:
  Paket an 10.0.0.5 → passt zu 10.0.0.0/24 (spezifischer als Default) → eth1.
  Paket an 8.8.8.8 → kein Treffer außer Default → 192.168.1.254 (Default Gateway).
</pre>
      <h4 class="lz-h4">Routing-Tabelle – Felder</h4>
      ${renderTable({
        headers: ['Feld', 'Bedeutung'],
        rows: [
          ['Zielnetz + Maske', 'Welches Netz wird adressiert (Netzadresse + CIDR)'],
          ['Gateway', 'Nächster Hop (Router) – "directly connected" wenn direkt erreichbar'],
          ['Interface', 'Über welches lokale Interface gesendet wird'],
          ['Metrik', 'Kosten des Pfads (kleiner = besser)'],
          ['0.0.0.0/0', 'Default Route – wenn kein spezifischerer Eintrag passt'],
        ],
      })}
    </div>`;
  }

  _panelRoutingprotokolle() {
    return `<div class="wim-category hidden" data-wim-cat="routingprotokolle">
      <h3 class="lz-h3">Statisches vs. dynamisches Routing</h3>
      ${renderCompare({
        titleA: '📋 Statisches Routing',
        titleB: '🔄 Dynamisches Routing',
        listA: [
          'Routen manuell eingetragen',
          'Kein Protokoll‑Overhead',
          'Sicher – keine unerwarteten Änderungen',
          'Aufwendig bei großen Netzen',
          'Keine automatische Fehlerumgehung',
          'Geeignet für kleine, stabile Netze',
        ],
        listB: [
          'Routen automatisch durch Protokolle gelernt',
          'Protokoll‑Overhead (CPU, Bandbreite)',
          'Adaptiv – passt sich Ausfällen an',
          'Automatisch skalierbar',
          'Automatische Fehlerumgehung',
          'Geeignet für große, komplexe Netze',
        ],
      })}
      <h4 class="lz-h4">Dynamische Routing-Protokolle</h4>
      ${renderTable({
        headers: ['Protokoll', 'Typ', 'Algorithmus', 'Metrik', 'Einsatz'],
        rows: [
          ['RIP', 'Distance‑Vector', 'Bellman‑Ford', 'Hop‑Count (max. 15)', 'Kleine Netze'],
          ['OSPF', 'Link‑State', 'Dijkstra (SPF)', 'Kosten (Bandbreite)', 'Enterprise‑Netze'],
          ['EIGRP', 'Hybrid (Cisco)', 'DUAL', 'Bandbreite + Verzögerung', 'Cisco‑Netze'],
          ['BGP', 'Path‑Vector', 'Pfad‑Attribute', 'AS_PATH, LOCAL_PREF', 'Internet (AS‑Verbindung)'],
        ],
      })}
    </div>`;
  }

  _panelGateway() {
    return `<div class="wim-category hidden" data-wim-cat="gateway">
      <h3 class="lz-h3">Default Gateway & NAT</h3>
      ${renderInfobox({ icon: 'fas fa-door-open', title: 'Default Gateway', type: 'info',
        body: `Das <strong>Default Gateway</strong> ist die IP-Adresse des Routers, an den ein Gerät Pakete sendet,
               wenn das Ziel <strong>nicht im eigenen Subnetz</strong> liegt.
               Typisch: erste oder letzte Adresse im Subnetz (z.B. 192.168.1.1).` })}
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:1.5rem;border-radius:10px;font-family:monospace;font-size:.85rem;line-height:1.8;">
Heimnetz 192.168.1.0/24:
  Router (Gateway): 192.168.1.1
  PC:               192.168.1.10
  Drucker:          192.168.1.50

PC möchte zu 8.8.8.8 → nicht im eigenen Netz → sendet an Default Gateway 192.168.1.1.

Traceroute (tracert 8.8.8.8):
  1  192.168.1.1   (lokaler Router)
  2  10.0.0.1      (Provider‑Router)
  3  ...           (Internet‑Hops)
  8  8.8.8.8       (Ziel)
</pre>
      <h4 class="lz-h4">NAT – Network Address Translation</h4>
      ${renderInfobox({ icon: 'fas fa-exchange-alt', title: 'Private → öffentliche IP', type: 'info',
        body: `NAT erlaubt vielen Geräten im privaten Netz, mit einer einzigen öffentlichen IP ins Internet zu gehen.
               Der Router ersetzt Quell‑IP und Port (PAT – Port Address Translation) und merkt sich die Zuordnung.
               Dadurch wird der Mangel an IPv4-Adressen abgemildert.` })}
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:1rem;border-radius:8px;font-family:monospace;">
Intern:  192.168.1.10:54321  →  Router  → 203.0.113.1:10234  →  Internet
Antwort: 203.0.113.1:10234  →  Router  → 192.168.1.10:54321  (zurückübersetzt)
</pre>
    </div>`;
  }

  _panelUebungen() {
    return `<div class="wim-category hidden" data-wim-cat="uebungen">
      <h3 class="lz-h3">Übungsaufgaben</h3>
      ${renderAccordion([
        {
          title: 'A1: Ein Router hat folgende Tabelle: 10.0.0.0/24 via eth0, 10.0.1.0/24 via eth1, Default via 10.0.0.1. Wohin geht ein Paket für 10.0.1.55?',
          content: `10.0.1.55 liegt im Netz 10.0.1.0/24 → spezifischer Eintrag → via eth1.`,
        },
        {
          title: 'A2: Was ist der Unterschied zwischen statischem und dynamischem Routing?',
          content: `Statisch: manuelle Einträge, kein Overhead, keine Fehlerumgehung.<br>
          Dynamisch: Protokolle (OSPF, RIP) lernen Routen automatisch, passen sich an, benötigen Ressourcen.`,
        },
        {
          title: 'A3: Warum benötigt man NAT in IPv4-Netzen?',
          content: `IPv4 hat nur 4,3 Mrd. Adressen – nicht genug für alle Geräte. NAT erlaubt private Adressen (RFC1918)
          und übersetzt sie auf eine öffentliche IP. Dadurch können viele Geräte eine gemeinsame öffentliche IP nutzen.`,
        },
        {
          title: 'A4: Was ist der Longest Prefix Match?',
          content: `Wenn mehrere Einträge in der Routingtabelle auf ein Ziel passen (z.B. /24 und /16), wird der Eintrag mit der längsten Subnetzmaske (spezifischsten) gewählt.`,
        },
      ])}
      ${renderInfobox({ icon: 'fas fa-graduation-cap', title: 'Routing für die Prüfung', type: 'success',
        body: `• Routingtabelle lesen und Paketweg bestimmen.<br>
               • Longest Prefix Match verstehen.<br>
               • Statisch vs. dynamisch.<br>
               • Default Gateway = nächster Hop für unbekannte Ziele.<br>
               • NAT = Übersetzung private → öffentliche IP.` })}
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