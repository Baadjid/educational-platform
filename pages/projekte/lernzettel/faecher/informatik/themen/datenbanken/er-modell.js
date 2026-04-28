// pages/projekte/lernzettel/faecher/informatik/themen/datenbanken/er-modell.js
// Informatik 8.1 — ER-Modell & Normalisierung

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
  prev: { label: '7.3 Advanced IoT', link: `${BASE}/themen/iot/advanced-iot` },
  next: { label: '8.2 SQL', link: `${BASE}/themen/datenbanken/sql` },
};

const TABS = [
  { key: 'ermodell',    label: '📐 ER-Modell' },
  { key: 'kardinalitaet',label: '🔢 Kardinalitäten' },
  { key: 'normalisierung',label: '🔧 Normalisierung (1NF‑3NF)' },
  { key: 'uebungen',    label: '✏ Übungen' },
];

export default class ErModellPage {
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
            <span>8.1 · ER-Modell & Normalisierung</span>
          </nav>
          <h1 class="lz-sub-title">ER-Modell & Normalisierung (1NF-3NF)</h1>
          <p class="lz-sub-subtitle">Entity, Attribut, Beziehung, Kardinalitäten, Normalformen</p>
          ${renderTags(['ER-Modell', 'Normalisierung', '1NF', '2NF', '3NF', 'Primärschlüssel', 'BPE 9'])}
        </div>
      </section>
      <section class="lz-content-section">
        <div class="lz-section-wrap">
          <nav class="wim-tabs" id="erTabs" aria-label="ER-Modell">
            ${TABS.map((t, i) => `<button class="wim-tab${i === 0 ? ' active' : ''}" data-wim="${t.key}">${t.label}</button>`).join('')}
          </nav>
          ${this._panelERModell()}
          ${this._panelKardinalitaet()}
          ${this._panelNormalisierung()}
          ${this._panelUebungen()}
        </div>
      </section>
      <section class="lz-content-section" style="padding-top:0;">
        <div class="lz-section-wrap">${renderPageNav(NAV)}</div>
      </section>
      ${footerHTML(this.router)}`;
  }

  _panelERModell() {
    return `<div class="wim-category active" data-wim-cat="ermodell">
      ${renderInfobox({ icon: 'fas fa-diagram-project', title: 'Was ist das ER-Modell?', type: 'info',
        body: `Das <strong>Entity-Relationship-Modell</strong> ist ein grafisches Werkzeug zur Datenmodellierung.
               Es beschreibt die Struktur einer Datenbank unabhängig vom DBMS.
               Die drei Grundbausteine sind: <strong>Entitäten</strong> (Objekte), <strong>Attribute</strong> (Eigenschaften) und <strong>Beziehungen</strong> (Verbindungen).` })}
      <h3 class="lz-h3">Elemente des ER-Diagramms</h3>
      ${renderTable({
        headers: ['Element', 'Symbol', 'Beschreibung', 'Beispiel'],
        rows: [
          ['Entität', 'Rechteck', 'Ein Objekt der realen Welt', 'Schüler, Kurs, Lehrer'],
          ['Attribut', 'Ellipse', 'Eigenschaft einer Entität', 'Name, Geburtsdatum, Gehalt'],
          ['Primärschlüssel', 'Unterstrichenes Attribut', 'Eindeutiger Identifikator', 'SchülerID, Personalnr.'],
          ['Beziehung', 'Raute', 'Verbindung zwischen Entitäten', 'besucht, lehrt, arbeitet_in'],
        ],
      })}
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:1rem;border-radius:8px;font-family:monospace;line-height:1.6;">
ER-Diagramm (Schulverwaltung):

  ┌─────────┐          ┌─────────┐          ┌─────────┐
  │ Schüler │          │ Belegung│          │  Kurs   │
  ├─────────┤          ├─────────┤          ├─────────┤
  │*ID      │          │ Note    │          │*ID      │
  │ Name    │          └────┬────┘          │ Titel   │
  │ Klasse  │               │               │ Credits │
  └────┬────┘               │               └────┬────┘
       │ 1                  │ n                  │ 1
       └─────── besucht ─────┘       └── besteht ─┘
             (m:n)                         (1:n)

Relationenschreibweise:
  Schüler(<u>SchülerID</u>, Name, Klasse)
  Kurs(<u>KursID</u>, Titel, Credits)
  Belegung(<u>#SchülerID</u>, <u>#KursID</u>, Note)
</pre>
    </div>`;
  }

  _panelKardinalitaet() {
    return `<div class="wim-category hidden" data-wim-cat="kardinalitaet">
      <h3 class="lz-h3">Kardinalitäten (Beziehungstypen)</h3>
      ${renderTable({
        headers: ['Typ', 'Bedeutung', 'Beispiel', 'Darstellung'],
        rows: [
          ['1:1', 'Ein A genau einem B (und umgekehrt)', 'Person ↔ Personalausweis', '1 ─── 1'],
          ['1:n', 'Ein A vielen B, B gehört zu einem A', 'Lehrer ─── Klassen', '1 ─── *'],
          ['m:n (n:m)', 'Viele A zu vielen B', 'Schüler ─── Kurse', '* ─── *'],
        ],
      })}
      <h4 class="lz-h4">m:n-Beziehung auflösen (Zwischentabelle)</h4>
      <p class="lz-prose">
        m:n-Beziehungen können nicht direkt in relationale Tabellen abgebildet werden.
        Sie werden durch eine <strong>Zwischentabelle (Assoziationstabelle)</strong> aufgelöst,
        die die Primärschlüssel beider Entitäten als Fremdschlüssel enthält.
      </p>
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:1rem;border-radius:8px;font-family:monospace;">
Schüler ──(*besucht*)── Kurs   (m:n)

wird aufgelöst zu:
Schüler ──(1:n)── Belegung ──(n:1)── Kurs

Tabellen:
Schüler(<u>SchülerID</u>, Name, Klasse)
Kurs(<u>KursID</u>, Bezeichnung, Lehrer)
Belegung(<u>#SchülerID</u>, <u>#KursID</u>, Note)  ← kombinierter PK
</pre>
      ${renderInfobox({ icon: 'fas fa-info-circle', title: 'Optionale Teilnahme', type: 'info',
        body: `Kardinalitäten können auch optional sein (0..1, 0..n). Beispiel: Ein Mitarbeiter kann 0 oder 1 Firmenwagen haben.` })}
    </div>`;
  }

  _panelNormalisierung() {
    return `<div class="wim-category hidden" data-wim-cat="normalisierung">
      <h3 class="lz-h3">Normalisierung – Redundanzen vermeiden</h3>
      ${renderInfobox({ icon: 'fas fa-check-double', title: 'Ziel: Redundanzfreiheit & Anomalievermeidung', type: 'info',
        body: `Normalisierung ist ein Prozess, der eine Datenbank in eine redundanzfreie Form bringt.
               Jede Normalform stellt strengere Anforderungen als die vorherige.
               Wir betrachten 1NF, 2NF und 3NF (ausreichend für die meisten Anwendungen).` })}
      <h4 class="lz-h4">1. Normalform (1NF) – Atomare Werte</h4>
      <p class="lz-prose">
        <strong>Regel:</strong> Jede Spalte enthält nur atomare (unteilbare) Werte. Keine Mengen oder Wiederholungsgruppen.
      </p>
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:0.5rem;border-radius:8px;">
NICHT 1NF:
Schüler(<u>ID</u>, Name, Fächer)  ← Fächer = "Mathe, Deutsch, Sport"

IN 1NF (aufgelöst):
Schüler(<u>ID</u>, Name, Fach)
  (1, Max, Mathe)
  (1, Max, Deutsch)
  (1, Max, Sport)
</pre>
      <h4 class="lz-h4">2. Normalform (2NF) – Keine partielle Abhängigkeit</h4>
      <p class="lz-prose">
        <strong>Voraussetzung:</strong> 1NF. <strong>Regel:</strong> Jedes Nicht‑Schlüsselattribut muss vom gesamten Primärschlüssel abhängen (keine partielle Abhängigkeit bei zusammengesetztem PK).
      </p>
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:0.5rem;border-radius:8px;">
NICHT 2NF: Belegung(<u>SchülerID</u>, <u>KursID</u>, Note, KursName)
  KursName hängt nur von KursID ab (nicht vom gesamten PK) → partielle Abhängigkeit.

IN 2NF: Belegung(<u>SchülerID</u>, <u>KursID</u>, Note)
        Kurs(<u>KursID</u>, KursName)
</pre>
      <h4 class="lz-h4">3. Normalform (3NF) – Keine transitive Abhängigkeit</h4>
      <p class="lz-prose">
        <strong>Voraussetzung:</strong> 2NF. <strong>Regel:</strong> Kein Nicht‑Schlüsselattribut hängt transitiv von einem anderen Nicht‑Schlüsselattribut ab.
      </p>
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:0.5rem;border-radius:8px;">
NICHT 3NF: Mitarbeiter(<u>Personalnr.</u>, Name, PLZ, Ort)
  PLZ → Ort (transitive Abhängigkeit)

IN 3NF: Mitarbeiter(<u>Personalnr.</u>, Name, PLZ)
        PLZ_Ort(<u>PLZ</u>, Ort)
</pre>
    </div>`;
  }

  _panelUebungen() {
    return `<div class="wim-category hidden" data-wim-cat="uebungen">
      <h3 class="lz-h3">Übungsaufgaben</h3>
      ${renderAccordion([
        {
          title: 'A1: Zeichne ein ER-Diagramm für: Ein Kunde kann mehrere Bestellungen aufgeben. Eine Bestellung gehört zu genau einem Kunden. Eine Bestellung enthält mehrere Produkte. Ein Produkt kann in vielen Bestellungen vorkommen.',
          content: `Entitäten: Kunde, Bestellung, Produkt.<br>
          Beziehungen:<br>
          Kunde (1) ─── (n) Bestellung<br>
          Bestellung (n) ─── (n) Produkt (m:n) → aufgelöst mit Zwischentabelle "Bestellposition" (Menge, Preis).`,
        },
        {
          title: 'A2: Bringe die folgende Tabelle in 3NF: Bestellung(<u>Bestellnr.</u>, Datum, Kundenname, Kundenstadt, Artikel, Menge)',
          content: `1NF: bereits atomar.<br>
          2NF: PK = Bestellnr. Kundenname und Kundenstadt hängen nur von Bestellnr. ab (OK). Artikel und Menge hängen aber von Bestellnr. + Artikel? → Besser: separate Positionstabelle.<br>
          Lösung: Bestellung(<u>Bestellnr.</u>, Datum, KundeID)<br>
          Kunde(<u>KundeID</u>, Name, Stadt)<br>
          Position(<u>Bestellnr.</u>, <u>Artikel</u>, Menge)`,
        },
        {
          title: 'A3: Was ist eine transitive Abhängigkeit? Gib ein Beispiel.',
          content: `Eine transitive Abhängigkeit liegt vor, wenn A → B und B → C, aber C nicht direkt von A abhängt (A → C transitiv). Beispiel: Personalnr. → PLZ, PLZ → Ort. Ort hängt transitiv von Personalnr. ab – sollte in separate Tabelle ausgelagert werden.`,
        },
      ])}
      ${renderInfobox({ icon: 'fas fa-graduation-cap', title: 'ER & Normalisierung für die Prüfung', type: 'success',
        body: `• ER‑Diagramm: Entität (Rechteck), Attribut (Ellipse), Beziehung (Raute).<br>
               • Kardinalitäten: 1:1, 1:n, m:n – m:n braucht Zwischentabelle.<br>
               • 1NF: atomare Werte.<br>
               • 2NF: keine partielle Abhängigkeit bei zusammengesetztem PK.<br>
               • 3NF: keine transitiven Abhängigkeiten.` })}
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