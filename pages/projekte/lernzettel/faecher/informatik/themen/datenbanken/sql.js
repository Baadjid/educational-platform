// pages/projekte/lernzettel/faecher/informatik/themen/datenbanken/sql.js
// Informatik 8.2 — SQL

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
  prev: { label: '8.1 ER-Modell', link: `${BASE}/themen/datenbanken/er-modell` },
  next: { label: '8.3 ACID & NoSQL', link: `${BASE}/themen/datenbanken/advanced-db` },
};

const TABS = [
  { key: 'ddl_dml', label: '🏗 DDL & DML' },
  { key: 'select',   label: '🔍 SELECT & Aggregatfunktionen' },
  { key: 'joins',    label: '🔗 JOINs & Subqueries' },
  { key: 'uebungen', label: '✏ Übungen' },
];

export default class SqlPage {
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
            <span>8.2 · SQL</span>
          </nav>
          <h1 class="lz-sub-title">SQL — Abfragen, JOINs & Aggregatfunktionen</h1>
          <p class="lz-sub-subtitle">DDL, DML, SELECT, WHERE, GROUP BY, JOIN, Subquery</p>
          ${renderTags(['SQL', 'SELECT', 'JOIN', 'GROUP BY', 'Aggregat', 'Subquery', 'BPE 9'])}
        </div>
      </section>
      <section class="lz-content-section">
        <div class="lz-section-wrap">
          <nav class="wim-tabs" id="sqlTabs" aria-label="SQL">
            ${TABS.map((t, i) => `<button class="wim-tab${i === 0 ? ' active' : ''}" data-wim="${t.key}">${t.label}</button>`).join('')}
          </nav>
          ${this._panelDdlDml()}
          ${this._panelSelect()}
          ${this._panelJoins()}
          ${this._panelUebungen()}
        </div>
      </section>
      <section class="lz-content-section" style="padding-top:0;">
        <div class="lz-section-wrap">${renderPageNav(NAV)}</div>
      </section>
      ${footerHTML(this.router)}`;
  }

  _panelDdlDml() {
    return `<div class="wim-category active" data-wim-cat="ddl_dml">
      ${renderInfobox({ icon: 'fas fa-database', title: 'SQL – Structured Query Language', type: 'info',
        body: `SQL ist die Standardsprache für relationale Datenbanken.
               <strong>DDL (Data Definition Language):</strong> Struktur definieren (CREATE, ALTER, DROP).
               <strong>DML (Data Manipulation Language):</strong> Daten einfügen, ändern, löschen (INSERT, UPDATE, DELETE).
               <strong>DQL (Data Query Language):</strong> Daten abfragen (SELECT).` })}
      <h4 class="lz-h4">DDL – Tabellen erstellen</h4>
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:0.8rem;border-radius:8px;font-family:monospace;">
CREATE TABLE Schüler (
    SchülerID   INT PRIMARY KEY AUTO_INCREMENT,
    Name        VARCHAR(100) NOT NULL,
    Klasse      VARCHAR(10),
    Geburtsdatum DATE,
    Note        DECIMAL(3,1) CHECK (Note >= 1.0 AND Note <= 6.0)
);

CREATE TABLE Belegung (
    SchülerID   INT,
    KursID      INT,
    Note        DECIMAL(3,1),
    PRIMARY KEY (SchülerID, KursID),
    FOREIGN KEY (SchülerID) REFERENCES Schüler(SchülerID),
    FOREIGN KEY (KursID) REFERENCES Kurs(KursID)
);
</pre>
      <h4 class="lz-h4">DML – Daten manipulieren</h4>
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:0.8rem;border-radius:8px;font-family:monospace;">
-- Einfügen
INSERT INTO Schüler (Name, Klasse) VALUES ('Max Müller', '12A');
INSERT INTO Schüler VALUES (2, 'Anna Schmidt', '11B', '2006-03-15', 2.1);

-- Ändern
UPDATE Schüler SET Note = 1.7 WHERE SchülerID = 1;
UPDATE Schüler SET Klasse = '12B' WHERE Klasse = '11B';

-- Löschen
DELETE FROM Schüler WHERE SchülerID = 5;
DELETE FROM Schüler WHERE Note > 4.0;
</pre>
    </div>`;
  }

  _panelSelect() {
    return `<div class="wim-category hidden" data-wim-cat="select">
      <h3 class="lz-h3">SELECT – Daten abfragen</h3>
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:0.8rem;border-radius:8px;font-family:monospace;">
-- Grundstruktur (Reihenfolge beachten!)
SELECT   Spalten           -- Was?
FROM     Tabelle           -- Wo?
WHERE    Bedingung         -- Filter (optional)
GROUP BY Spalte            -- Gruppieren (optional)
HAVING   Bedingung         -- Filter nach GROUP BY (optional)
ORDER BY Spalte ASC|DESC   -- Sortieren (optional)
LIMIT    n                 -- Anzahl begrenzen (optional)

-- Beispiele
SELECT * FROM Schüler;
SELECT Name, Note FROM Schüler WHERE Klasse = '12A';
SELECT * FROM Schüler ORDER BY Note ASC;
SELECT DISTINCT Klasse FROM Schüler;
</pre>
      <h4 class="lz-h4">WHERE – Bedingungen</h4>
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:0.5rem;border-radius:8px;">
-- Vergleichsoperatoren: =, <>, <, >, <=, >=
-- Logische Operatoren: AND, OR, NOT
-- Bereich: BETWEEN ... AND ...
-- Liste: IN (Wert1, Wert2, ...)
-- Teilstring: LIKE '%Muster%' ( % = beliebig, _ = genau ein Zeichen)
-- NULL: IS NULL, IS NOT NULL

SELECT * FROM Schüler WHERE Note BETWEEN 1.0 AND 2.5;
SELECT * FROM Schüler WHERE Name LIKE 'M%';
SELECT * FROM Schüler WHERE Klasse IN ('11A', '11B', '12A');
</pre>
      <h4 class="lz-h4">Aggregatfunktionen & GROUP BY</h4>
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:0.8rem;border-radius:8px;font-family:monospace;">
Aggregatfunktionen: COUNT, SUM, AVG, MIN, MAX

SELECT COUNT(*) AS Anzahl FROM Schüler;
SELECT AVG(Note) AS Durchschnitt FROM Schüler;
SELECT Klasse, COUNT(*) AS Anzahl, AVG(Note) AS Durchschnitt
FROM Schüler
GROUP BY Klasse
HAVING AVG(Note) < 3.0
ORDER BY Durchschnitt ASC;
</pre>
    </div>`;
  }

  _panelJoins() {
    return `<div class="wim-category hidden" data-wim-cat="joins">
      <h3 class="lz-h3">JOINs – Tabellen verknüpfen</h3>
      ${renderTable({
        headers: ['JOIN-Typ', 'Beschreibung'],
        rows: [
          ['INNER JOIN', 'Nur Datensätze, die in BEIDEN Tabellen vorkommen'],
          ['LEFT JOIN', 'Alle linken + passende rechte (fehlende = NULL)'],
          ['RIGHT JOIN', 'Alle rechten + passende linke (fehlende = NULL)'],
          ['FULL JOIN', 'Alle aus beiden Tabellen'],
        ],
      })}
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:0.8rem;border-radius:8px;font-family:monospace;">
-- INNER JOIN: Schüler mit ihren Kursnoten
SELECT s.Name, k.Bezeichnung, b.Note
FROM Schüler s
INNER JOIN Belegung b ON s.SchülerID = b.SchülerID
INNER JOIN Kurs k ON b.KursID = k.KursID;

-- LEFT JOIN: ALLE Schüler, auch ohne Belegung
SELECT s.Name, k.Bezeichnung, b.Note
FROM Schüler s
LEFT JOIN Belegung b ON s.SchülerID = b.SchülerID
LEFT JOIN Kurs k ON b.KursID = k.KursID;

-- Subquery: Schüler mit besserer Note als Durchschnitt
SELECT Name, Note
FROM Schüler
WHERE Note < (SELECT AVG(Note) FROM Schüler);
</pre>
      ${renderInfobox({ icon: 'fas fa-graduation-cap', title: 'SQL für die Prüfung', type: 'success',
        body: `• SELECT mit WHERE, ORDER BY, LIMIT.<br>
               • Aggregatfunktionen: COUNT, AVG, SUM, MIN, MAX.<br>
               • GROUP BY und HAVING.<br>
               • INNER JOIN und LEFT JOIN.<br>
               • Subqueries in WHERE.` })}
    </div>`;
  }

  _panelUebungen() {
    return `<div class="wim-category hidden" data-wim-cat="uebungen">
      <h3 class="lz-h3">Übungsaufgaben</h3>
      ${renderAccordion([
        {
          title: 'A1: Schreibe eine SQL-Abfrage, die alle Schüler der Klasse "12A" mit einer Note besser als 2.0 ausgibt, sortiert nach Note aufsteigend.',
          content: `SELECT Name, Note FROM Schüler WHERE Klasse = '12A' AND Note < 2.0 ORDER BY Note ASC;`,
        },
        {
          title: 'A2: Wie lautet die Abfrage für die durchschnittliche Note pro Kurs, nur für Kurse mit mehr als 5 Schülern?',
          content: `SELECT k.Bezeichnung, AVG(b.Note) AS Durchschnitt
                    FROM Belegung b
                    JOIN Kurs k ON b.KursID = k.KursID
                    GROUP BY k.KursID, k.Bezeichnung
                    HAVING COUNT(*) > 5;`,
        },
        {
          title: 'A3: Was ist der Unterschied zwischen INNER JOIN und LEFT JOIN?',
          content: `INNER JOIN liefert nur Zeilen, die in beiden Tabellen einen Treffer haben.
          LEFT JOIN liefert alle Zeilen der linken Tabelle, auch wenn es keinen Treffer in der rechten gibt (dann NULL-Werte).`,
        },
        {
          title: 'A4: Erkläre die Reihenfolge der SELECT-Klauseln.',
          content: `SELECT → FROM → WHERE → GROUP BY → HAVING → ORDER BY → LIMIT.`,
        },
      ])}
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