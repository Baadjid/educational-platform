// pages/projekte/lernzettel/faecher/informatik/themen/os/memory-management.js
// Informatik 11.2 — Speicherverwaltung (Paging, Segmentation, virtueller Speicher)

import { initScrollReveal } from '../../../../../../../shared/js/index.js';
import { footerHTML }        from '../../../../../../../components/Footer.js';
import { i18n }              from '../../../../../../../shared/js/i18n.js';
import { initWimTabs }       from '../../../../../../../shared/js/wim-tabs.js';
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
  prev: { label: '11.1 Prozesse', link: `${BASE}/themen/os/processes` },
  next: { label: '11.3 Dateisysteme', link: `${BASE}/themen/os/filesystems` },
};

const TABS = [
  { key: 'virtuell',    label: '📦 Virtueller Speicher' },
  { key: 'paging',      label: '📄 Paging' },
  { key: 'segmentation',label: '📐 Segmentierung' },
  { key: 'uebungen',    label: '✏ Übungen' },
];

export default class MemoryManagementPage {
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
            <span>11.2 · Speicherverwaltung</span>
          </nav>
          <h1 class="lz-sub-title">Speicherverwaltung: Paging, Segmentation & virtueller Speicher</h1>
          <p class="lz-sub-subtitle">Virtuelle Adressen, MMU, Seitentabelle, Page Fault, Swap</p>
          ${renderTags(['Virtueller Speicher', 'Paging', 'Segmentierung', 'MMU', 'Page Fault', 'Swap'])}
        </div>
      </section>
      <section class="lz-content-section">
        <div class="lz-section-wrap">
          <nav class="wim-tabs" id="memoryTabs" aria-label="Speicherverwaltung">
            ${TABS.map((t, i) => `<button class="wim-tab${i === 0 ? ' active' : ''}" data-wim="${t.key}">${t.label}</button>`).join('')}
          </nav>
          ${this._panelVirtuell()}
          ${this._panelPaging()}
          ${this._panelSegmentation()}
          ${this._panelUebungen()}
        </div>
      </section>
      <section class="lz-content-section" style="padding-top:0;">
        <div class="lz-section-wrap">${renderPageNav(NAV)}</div>
      </section>
      ${footerHTML(this.router)}`;
  }

  _panelVirtuell() {
    return `<div class="wim-category active" data-wim-cat="virtuell">
      ${renderInfobox({ icon: 'fas fa-memory', title: 'Virtueller Speicher – mehr RAM als vorhanden', type: 'info',
        body: `Jeder Prozess glaubt, er habe den gesamten Adressraum für sich allein.
               Das Betriebssystem übersetzt <strong>virtuelle Adressen</strong> über eine <strong>Seitentabelle</strong>
               in <strong>physische Adressen</strong>. Nicht genutzte Seiten werden auf die Festplatte ausgelagert (Swap).` })}
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:0.8rem;border-radius:8px;font-family:monospace;">
Virtuelle Adresse: [ VPN (Virtual Page Number) | Offset ]
                          │
                          ▼ MMU (Memory Management Unit)
                          │ Seitentabelle (im Speicher)
                          ▼
Physische Adresse:  [ PPN (Physical Page Number) | Offset ]

Page Table Entry (PTE) enthält:
  - PPN (Physical Page Number) oder 0 wenn nicht im RAM
  - Present‑Bit: 1 = Seite im RAM, 0 = auf Festplatte (Swap)
  - Dirty‑Bit: Seite wurde beschrieben (muss bei Rauswurf zurückgeschrieben werden)
  - Access‑Bit: Seite wurde gelesen/geschrieben (für Ersetzungsstrategien)
</pre>
      <h4 class="lz-h4">Page Fault – Seitenfehler</h4>
      <p class="lz-prose">
        Wenn eine Seite nicht im RAM ist (Present‑Bit=0), löst die CPU einen <strong>Page Fault</strong> aus.
        Das Betriebssystem lädt die Seite von der Festplatte (Swap) in den RAM – ein teurer Vorgang (Millisekunden).
      </p>
    </div>`;
  }

  _panelPaging() {
    return `<div class="wim-category hidden" data-wim-cat="paging">
      <h3 class="lz-h3">Paging – Feste Blockgrößen (z.B. 4 KB)</h3>
      ${renderInfobox({ icon: 'fas fa-table-cells', title: 'Vorteile & Nachteile', type: 'info',
        body: `Vorteile: Keine externe Fragmentierung, einfache Verwaltung, erlaubt virtuellen Speicher.<br>
               Nachteile: Interne Fragmentierung (letzte Seite oft nicht voll), Seitentabellen‑Overhead.` })}
      <h4 class="lz-h4">Seitenersetzungsalgorithmen</h4>
      ${renderTable({
        headers: ['Algorithmus', 'Prinzip', 'Vorteil', 'Nachteil'],
        rows: [
          ['FIFO', 'Älteste Seite zuerst', 'Einfach', 'Belady‑Anomalie (mehr RAM → mehr Page Faults)'],
          ['LRU (Least Recently Used)', 'Am längsten nicht genutzte Seite', 'Gute Heuristik', 'Schwer in Hardware umzusetzen'],
          ['Clock (Second Chance)', 'FIFO mit Referenz‑Bit', 'Effizient, häufig verwendet', 'Nicht optimal'],
          ['Optimal (OPT)', 'Seite, die am längsten nicht gebraucht wird', 'Theoretisch optimal', 'Nicht implementierbar (Zukunft unbekannt)'],
        ],
      })}
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:0.8rem;border-radius:8px;font-family:monospace;">
Mehrstufige Seitentabellen (z.B. x86‑64 mit 4 Ebenen):
  - Reduziert Speicherbedarf für Seitentabellen (nur benötigte Ebenen werden angelegt).
  - Jede Ebene ist eine Tabelle von Zeigern auf die nächste Ebene.
  - Virtuelle Adresse wird in mehrere Teile zerlegt (z.B. 9,9,9,12 Bit).
</pre>
    </div>`;
  }

  _panelSegmentation() {
    return `<div class="wim-category hidden" data-wim-cat="segmentation">
      <h3 class="lz-h3">Segmentierung – Variable Blöcke (Code, Daten, Stack)</h3>
      ${renderCompare({
        titleA: '📦 Paging',
        titleB: '📐 Segmentierung',
        listA: [
          'Feste Blockgröße (z.B. 4 KB)',
          'Interne Fragmentierung möglich',
          'Keine semantische Trennung',
          'Einfachere Hardware',
          'Seitentabelle pro Prozess',
        ],
        listB: [
          'Variable Blockgröße (Segment)',
          'Externe Fragmentierung möglich',
          'Code/Daten/Stack getrennt schützbar',
          'Segmenttabelle pro Prozess',
          'Unterstützt Sharing (z.B. gleicher Code)',
        ],
      })}
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:0.8rem;border-radius:8px;font-family:monospace;">
Segmentierung mit virtuellen Adressen:
  Virtuelle Adresse: [ Segmentnummer | Offset ]
                           │
                           ▼ Segmenttabelle
                           │ (Basisadresse, Länge, Schutzbits)
                           ▼
  Physische Adresse: Basis + Offset  (wenn Offset < Länge)

Typische Segmente (x86):
  - Code Segment (.text): read‑only, execute
  - Data Segment (.data): read‑write
  - Stack Segment: read‑write, wächst nach unten
  - Heap Segment: read‑write, wächst nach oben

Moderne Systeme: Kombination (Segmentierung + Paging) – z.B. x86-64 nutzt hauptsächlich Paging, Segmentierung ist oft "flat".
</pre>
    </div>`;
  }

  _panelUebungen() {
    return `<div class="wim-category hidden" data-wim-cat="uebungen">
      <h3 class="lz-h3">Übungsaufgaben</h3>
      ${renderAccordion([
        {
          title: 'A1: Ein System mit 32‑Bit virtueller Adresse, Seitengröße 4 KB (12 Bit Offset). Wie viele Seiten gibt es maximal?',
          content: `Virtuelle Seitenzahl = 2^(32-12) = 2^20 = 1.048.576 Seiten.`,
        },
        {
          title: 'A2: Was passiert bei einem Page Fault?',
          content: `Die CPU unterbricht den Prozess. Das Betriebssystem sucht eine freie Seite im RAM. Wenn keine frei ist, wird eine Seite ausgelagert (Ersetzungsalgorithmus). Die benötigte Seite wird von der Festplatte in den RAM geladen. Die Seitentabelle wird aktualisiert. Der Prozess wird fortgesetzt.`,
        },
        {
          title: 'A3: Erkläre den Unterschied zwischen interner und externer Fragmentierung.',
          content: `Interne Fragmentierung: Innerhalb eines Speicherblocks (z.B. Seite) wird Platz verschwendet, weil die angeforderte Größe kleiner ist als die Blockgröße. Externe Fragmentierung: Zwischen belegten Blöcken entstehen Lücken, die zu klein für neue Anforderungen sind (bei variablen Blockgrößen).`,
        },
        {
          title: 'A4: Warum ist die Belady‑Anomalie bei FIFO interessant?',
          content: `Bei FIFO kann es vorkommen, dass eine Erhöhung der RAM‑Größe zu mehr Page Faults führt. Das widerspricht der Intuition, dass mehr RAM immer besser ist. LRU und andere Algorithmen haben dieses Problem nicht.`,
        },
      ])}
      ${renderInfobox({ icon: 'fas fa-graduation-cap', title: 'Speicherverwaltung für die Prüfung', type: 'success',
        body: `• Virtueller Speicher: Jeder Prozess hat eigenen Adressraum.<br>
               • Paging: Feste Seiten, Seitentabelle, Page Fault, Ersetzungsalgorithmen (LRU, Clock).<br>
               • Segmentierung: Variable Segmente (Code, Daten, Stack).<br>
               • MMU übersetzt virtuell → physisch.<br>
               • Swap: Auslagerung auf Festplatte.` })}
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