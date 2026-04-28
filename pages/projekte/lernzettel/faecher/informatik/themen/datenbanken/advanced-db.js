// pages/projekte/lernzettel/faecher/informatik/themen/datenbanken/advanced-db.js
// Informatik 8.3 — ACID, Transaktionen, NoSQL

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
  prev: { label: '8.2 SQL', link: `${BASE}/themen/datenbanken/sql` },
  next: { label: '9.1 Suchalgorithmen', link: `${BASE}/themen/ki/suchalgorithmen` },
};

const TABS = [
  { key: 'acid',      label: '🔒 ACID & Transaktionen' },
  { key: 'nosql',     label: '🍃 NoSQL (MongoDB, Redis)' },
  { key: 'vergleich', label: '⚖ SQL vs. NoSQL' },
  { key: 'uebungen',  label: '✏ Übungen' },
];

export default class AdvancedDbPage {
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
            <span>8.3 · ACID, Transaktionen & NoSQL</span>
          </nav>
          <h1 class="lz-sub-title">ACID, Transaktionen & NoSQL</h1>
          <p class="lz-sub-subtitle">Atomarität, Isolation, MongoDB, Redis, CAP-Theorem</p>
          ${renderTags(['ACID', 'Transaktion', 'MongoDB', 'Redis', 'NoSQL', 'CAP', 'BPE 9'])}
        </div>
      </section>
      <section class="lz-content-section">
        <div class="lz-section-wrap">
          <nav class="wim-tabs" id="advDbTabs" aria-label="Advanced DB">
            ${TABS.map((t, i) => `<button class="wim-tab${i === 0 ? ' active' : ''}" data-wim="${t.key}">${t.label}</button>`).join('')}
          </nav>
          ${this._panelAcid()}
          ${this._panelNosql()}
          ${this._panelVergleich()}
          ${this._panelUebungen()}
        </div>
      </section>
      <section class="lz-content-section" style="padding-top:0;">
        <div class="lz-section-wrap">${renderPageNav(NAV)}</div>
      </section>
      ${footerHTML(this.router)}`;
  }

  _panelAcid() {
    return `<div class="wim-category active" data-wim-cat="acid">
      ${renderInfobox({ icon: 'fas fa-lightbulb', title: 'Was ist eine Transaktion?', type: 'info',
        body: `Eine <strong>Transaktion</strong> ist eine Folge von Datenbankoperationen, die als logische Einheit behandelt wird.
               Entweder werden <strong>alle</strong> Operationen ausgeführt (COMMIT) oder <strong>keine</strong> (ROLLBACK).` })}
      <h3 class="lz-h3">ACID-Eigenschaften</h3>
      ${renderTable({
        headers: ['Buchstabe', 'Eigenschaft', 'Bedeutung', 'Beispiel'],
        rows: [
          ['A', 'Atomicity (Atomarität)', 'Alles oder nichts – keine Teilausführung', 'Überweisung: Abbuchung UND Gutschrift oder nichts'],
          ['C', 'Consistency (Konsistenz)', 'DB-Regeln bleiben vor und nach Transaktion gültig', 'Konto darf nicht ins Minus gehen (falls Regel)'],
          ['I', 'Isolation (Isolation)', 'Parallele Transaktionen beeinflussen sich nicht', 'Zwei gleichzeitige Überweisungen interferieren nicht'],
          ['D', 'Durability (Dauerhaftigkeit)', 'Committete Daten bleiben auch nach Systemausfall', 'Nach Commit bleiben Daten auch nach Stromausfall'],
        ],
      })}
      <h4 class="lz-h4">Transaktionen in SQL</h4>
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:0.8rem;border-radius:8px;font-family:monospace;">
BEGIN TRANSACTION;
  UPDATE Konto SET Saldo = Saldo - 100 WHERE KontoID = 1;
  IF (SELECT Saldo FROM Konto WHERE KontoID = 1) < 0 THEN
      ROLLBACK;
  ELSE
      UPDATE Konto SET Saldo = Saldo + 100 WHERE KontoID = 2;
      COMMIT;
  END IF;
</pre>
      <h4 class="lz-h4">Isolationsprobleme</h4>
      ${renderTable({
        headers: ['Problem', 'Beschreibung'],
        rows: [
          ['Dirty Read', 'Lesen von noch nicht committeten Daten (könnten zurückgerollt werden)'],
          ['Non-Repeatable Read', 'Gleiche Abfrage liefert andere Ergebnisse wegen zwischenzeitlichem UPDATE'],
          ['Phantom Read', 'Gleiche Abfrage liefert neue Zeilen wegen zwischenzeitlichem INSERT'],
        ],
      })}
      ${renderTable({
        headers: ['Isolationslevel', 'Dirty Read', 'Non-Repeatable Read', 'Phantom'],
        rows: [
          ['READ UNCOMMITTED', '❌ möglich', '❌ möglich', '❌ möglich'],
          ['READ COMMITTED', '✅ verhindert', '❌ möglich', '❌ möglich'],
          ['REPEATABLE READ', '✅ verhindert', '✅ verhindert', '❌ möglich (MySQL: verhindert)'],
          ['SERIALIZABLE', '✅ verhindert', '✅ verhindert', '✅ verhindert'],
        ],
      })}
    </div>`;
  }

  _panelNosql() {
    return `<div class="wim-category hidden" data-wim-cat="nosql">
      <h3 class="lz-h3">NoSQL – Not only SQL</h3>
      ${renderInfobox({ icon: 'fas fa-cloud', title: 'Flexible Schemas, horizontale Skalierbarkeit', type: 'info',
        body: `NoSQL-Datenbanken opfern oft ACID-Garantien für <strong>Skalierbarkeit, Verfügbarkeit und flexible Datenmodelle</strong>.
               Typen: Dokumenten‑, Key‑Value‑, Spalten‑ und Graphdatenbanken.` })}
      ${renderTable({
        headers: ['Typ', 'Datenmodell', 'Vertreter', 'Anwendung'],
        rows: [
          ['Dokument', 'JSON/BSON-Dokumente', 'MongoDB, CouchDB, Firestore', 'Kataloge, CMS, User‑Profile'],
          ['Key‑Value', 'Schlüssel → Wert', 'Redis, DynamoDB, Memcached', 'Caching, Sessions, Counter'],
          ['Spaltenorientiert', 'Spalten‑Familien', 'Apache Cassandra, HBase', 'Zeitreihen, IoT, Analytics'],
          ['Graph', 'Knoten & Kanten', 'Neo4j, ArangoDB', 'Soziale Netze, Empfehlungen'],
        ],
      })}
      <h4 class="lz-h4">MongoDB – Dokument‑Datenbank</h4>
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:0.8rem;border-radius:8px;font-family:monospace;">
// MongoDB-Dokument
{
  "_id": ObjectId("507f1f77bcf86cd799439011"),
  "name": "Max Müller",
  "klasse": "12A",
  "noten": [1, 2, 1, 3],
  "adresse": {
    "stadt": "Stuttgart",
    "plz": "70173"
  }
}

// Abfragen
db.schueler.find({ klasse: "12A" })
db.schueler.find({ "noten": { $lt: 3 } })
db.schueler.insertOne({ name: "Anna", klasse: "11B" })
</pre>
      <h4 class="lz-h4">Redis – In‑Memory Key‑Value Store</h4>
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:0.8rem;border-radius:8px;font-family:monospace;">
SET user:1:name "Max Müller"
GET user:1:name
EXPIRE user:1:session 3600   // TTL 1 Stunde

INCR page:views               // atomarer Zähler

HSET sensor:1 temp 23.5 humidity 65
HGETALL sensor:1

LPUSH tasks "email:send"
RPOP tasks
</pre>
    </div>`;
  }

  _panelVergleich() {
    return `<div class="wim-category hidden" data-wim-cat="vergleich">
      <h3 class="lz-h3">SQL vs. NoSQL – Wann was?</h3>
      ${renderCompare({
        titleA: '📊 SQL (relational)',
        titleB: '🍃 NoSQL (nicht‑relational)',
        listA: [
          'Feste, vordefinierte Schemas',
          'Unterstützt komplexe Abfragen (JOINs)',
          'ACID‑Konformität',
          'Vertikale Skalierung (stärkere Server)',
          'Beispiele: MySQL, PostgreSQL, SQLite',
          'Ideal für: Finanzen, Buchhaltung, CRM',
        ],
        listB: [
          'Flexible, dynamische Schemas',
          'Einfache Abfragen (nach Schlüssel)',
          'Oft BASE (Basically Available, Soft state, Eventual consistency)',
          'Horizontale Skalierung (mehr Server)',
          'Beispiele: MongoDB, Redis, Cassandra',
          'Ideal für: Big Data, Echtzeitanwendungen, Caching',
        ],
      })}
      <h4 class="lz-h4">CAP-Theorem (Brewers Theorem)</h4>
      ${renderInfobox({ icon: 'fas fa-chart-line', title: 'CAP – Consistency, Availability, Partition Tolerance', type: 'info',
        body: `In einem verteilten System kann man nur zwei der drei Eigenschaften gleichzeitig garantieren:
               <strong>Consistency</strong> (alle lesen gleiche Daten), <strong>Availability</strong> (jede Anfrage erhält Antwort),
               <strong>Partition Tolerance</strong> (System arbeitet trotz Netzwerkausfällen). NoSQL‑Systeme wählen oft AP (z.B. Cassandra) oder CP (z.B. MongoDB).` })}
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:0.8rem;border-radius:8px;font-family:monospace;">
CAP-Kategorien:
  CA (nicht verteilt):      traditionelle SQL‑Datenbanken
  CP (Consistency + Partition): MongoDB, HBase
  AP (Availability + Partition): Cassandra, CouchDB
</pre>
    </div>`;
  }

  _panelUebungen() {
    return `<div class="wim-category hidden" data-wim-cat="uebungen">
      <h3 class="lz-h3">Übungsaufgaben</h3>
      ${renderAccordion([
        {
          title: 'A1: Erkläre den Begriff "Dirty Read" und wie man ihn verhindert.',
          content: `Dirty Read: Eine Transaktion liest Daten, die eine andere Transaktion bereits geändert, aber noch nicht committet hat. Wenn die andere Transaktion zurückgerollt wird, liest die erste ungültige Daten. Verhindert durch Isolationslevel READ COMMITTED oder höher.`,
        },
        {
          title: 'A2: Wann verwendet man Redis anstelle einer relationalen DB?',
          content: `Redis ist ideal für Caching, Session‑Speicherung, Echtzeit‑Zähler, Pub/Sub und schnelle Key‑Value‑Lookups. Nicht geeignet für komplexe Abfragen oder wenn ACID wichtig ist.`,
        },
        {
          title: 'A3: Was bedeutet "eventual consistency"?',
          content: `Bei eventual consistency wird nicht garantiert, dass alle Leser sofort die aktuellsten Daten sehen. Nach einiger Zeit (Millisekunden bis Sekunden) werden aber alle Replikate konsistent. Typisch für AP‑Systeme wie Cassandra.`,
        },
        {
          title: 'A4: Warum ist MongoDB gut für Content‑Management‑Systeme (CMS)?',
          content: `MongoDB speichert Dokumente als JSON, ähnlich wie die Datenstrukturen in Web‑Apps. Keine starren Schemas – Artikel können unterschiedliche Felder haben. Skaliert horizontal gut.`,
        },
      ])}
      ${renderInfobox({ icon: 'fas fa-graduation-cap', title: 'Advanced DB für die Prüfung', type: 'success',
        body: `• ACID: Atomicity, Consistency, Isolation, Durability.<br>
               • Transaktionen: COMMIT / ROLLBACK.<br>
               • NoSQL: Dokument (MongoDB), Key‑Value (Redis).<br>
               • CAP‑Theorem: Consistency, Availability, Partition Tolerance – nur zwei gleichzeitig.<br>
               • SQL vs. NoSQL: Entscheidungskriterien.` })}
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