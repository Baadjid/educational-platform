// pages/projekte/lernzettel/faecher/informatik/themen/digitaltechnik/schaltnetze.js
// Informatik 1.2 — Schaltnetze, KV-Diagramme & DNF

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
  prev: { label: '1.1 Zahlensysteme', link: `${BASE}/themen/digitaltechnik/zahlensysteme` },
  next: { label: '1.3 FlipFlops & Schaltwerke', link: `${BASE}/themen/digitaltechnik/flipflops-schaltwerke` },
};

const TABS = [
  { key: 'grundgatter',     label: '🔌 Grundgatter' },
  { key: 'wahrheitstabelle', label: '📋 Wahrheitstabelle' },
  { key: 'dnf',             label: '📝 DNF' },
  { key: 'kv',              label: '🗺 KV-Diagramm' },
  { key: 'praxis',          label: '🏗 Praxisschaltungen' },
];

export default class SchaltNetzePage {
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
            <span>1.2 · Schaltnetze & KV-Diagramme</span>
          </nav>
          <h1 class="lz-sub-title">Schaltnetze, KV-Diagramme & DNF</h1>
          <p class="lz-sub-subtitle">Logikgatter, boolesche Algebra, Minimierung</p>
          ${renderTags(['Schaltnetze', 'Logikgatter', 'DNF', 'KV-Diagramm', 'De Morgan', 'BPE 1'])}
        </div>
      </section>
      <section class="lz-content-section">
        <div class="lz-section-wrap">
          <nav class="wim-tabs" id="schaltnetzeTabs" aria-label="Schaltnetze">
            ${TABS.map((t, i) => `<button class="wim-tab${i === 0 ? ' active' : ''}" data-wim="${t.key}">${t.label}</button>`).join('')}
          </nav>
          ${this._panelGrundgatter()}
          ${this._panelWahrheitstabelle()}
          ${this._panelDNF()}
          ${this._panelKV()}
          ${this._panelPraxis()}
        </div>
      </section>
      <section class="lz-content-section" style="padding-top:0;">
        <div class="lz-section-wrap">${renderPageNav(NAV)}</div>
      </section>
      ${footerHTML(this.router)}`;
  }

  _panelGrundgatter() {
    return `<div class="wim-category active" data-wim-cat="grundgatter">
      ${renderInfobox({ icon: 'fas fa-lightbulb', title: 'Was ist ein Schaltnetz?', type: 'info',
        body: `Ein <strong>Schaltnetz</strong> ist eine digitale Schaltung, deren Ausgang
               <em>ausschließlich</em> von den aktuellen Eingangswerten abhängt —
               kein Gedächtnis, keine Zeit. Aufgebaut aus <strong>Logikgattern</strong>.` })}
      <h3 class="lz-h3">Die 6 Grundgatter</h3>
      ${renderTable({
        headers: ['Gatter', 'Symbol', 'Formel', 'Funktion'],
        rows: [
          ['NOT (Inverter)', '¬A / Ā', 'Y = ¬A', '0→1, 1→0 — Invertierung'],
          ['AND (UND)', 'A ∧ B', 'Y = A · B', '1 nur wenn ALLE Eingänge 1 sind'],
          ['OR (ODER)', 'A ∨ B', 'Y = A + B', '1 wenn MINDESTENS EIN Eingang 1 ist'],
          ['NAND', 'A ⊼ B', 'Y = ¬(A·B)', 'Gegenteil AND — <strong>universelles Gatter</strong>'],
          ['NOR', 'A ⊽ B', 'Y = ¬(A+B)', 'Gegenteil OR — <strong>universelles Gatter</strong>'],
          ['XOR', 'A ⊕ B', 'Y = A ⊕ B', '1 wenn Eingänge <strong>verschieden</strong> sind'],
        ],
      })}
      <h4 class="lz-h4">Wahrheitstabelle aller Grundgatter</h4>
      ${renderTable({
        headers: ['A', 'B', '¬A', 'A AND B', 'A OR B', 'A NAND B', 'A NOR B', 'A XOR B'],
        rows: [
          ['0', '0', '1', '0', '0', '1', '1', '0'],
          ['0', '1', '1', '0', '1', '1', '0', '1'],
          ['1', '0', '0', '0', '1', '1', '0', '1'],
          ['1', '1', '0', '1', '1', '0', '0', '0'],
        ],
      })}
      ${renderInfobox({ icon: 'fas fa-star', title: 'NAND und NOR: Universelle Gatter', type: 'success',
        body: `<strong>Jede</strong> boolesche Funktion lässt sich mit nur NAND-Gattern (oder nur NOR) aufbauen.<br>
               <strong>NOT aus NAND:</strong> NAND(A, A) = ¬A<br>
               <strong>AND aus NAND:</strong> NAND(NAND(A,B), NAND(A,B)) = A·B<br>
               <strong>OR aus NAND:</strong> NAND(¬A, ¬B) = A+B &nbsp; (De Morgan!)` })}
      <h4 class="lz-h4">De Morgan'sche Gesetze</h4>
      ${renderFormulaBox({ label: 'De Morgan — 1. Gesetz', formula: '¬(A · B) = ¬A + ¬B',
        desc: '"NAND ist gleich OR mit invertierten Eingängen"' })}
      ${renderFormulaBox({ label: 'De Morgan — 2. Gesetz', formula: '¬(A + B) = ¬A · ¬B',
        desc: '"NOR ist gleich AND mit invertierten Eingängen"' })}
      <h4 class="lz-h4">Anwendung De Morgan: Umformen</h4>
      ${renderAccordion([
        {
          title: 'Beispiel: ¬(A·B·C) umformen',
          content: `¬(A·B·C) = ¬A + ¬B + ¬C &nbsp; (De Morgan mehrfach anwenden)<br>
          Aus einem 3-Eingang-NAND wird ein OR mit invertierten Eingängen.`,
        },
        {
          title: 'Merktrick De Morgan',
          content: `"Strich über Klammer ziehen, Zeichen dazwischen ändern: · ↔ +"<br>
          ¬(A · B) → ¬A + ¬B &nbsp;&nbsp; | &nbsp;&nbsp; ¬(A + B) → ¬A · ¬B<br>
          <strong>Doppelte Negation:</strong> ¬(¬A) = A — hebt sich auf.`,
        },
      ])}
    </div>`;
  }

  _panelWahrheitstabelle() {
    return `<div class="wim-category hidden" data-wim-cat="wahrheitstabelle">
      <h3 class="lz-h3">Von der Aufgabe zur Wahrheitstabelle</h3>
      <p class="lz-prose">
        Bei n Eingängen gibt es genau <strong>2ⁿ Zeilen</strong>. Alle Kombinationen systematisch aufschreiben.
      </p>
      ${renderInfobox({ icon: 'fas fa-road', title: 'Vorgehensweise', type: 'info',
        body: `<strong>1.</strong> Eingänge und Ausgänge identifizieren<br>
               <strong>2.</strong> Alle 2ⁿ Kombinationen aufschreiben (wie Binärzähler: 00…0 bis 11…1)<br>
               <strong>3.</strong> Für jede Zeile: Ausgang = 0 oder 1?<br>
               <strong>4.</strong> Formel aus den "1"-Zeilen ableiten (→ DNF)` })}
      <h4 class="lz-h4">Beispiel: Alarmanlage</h4>
      <p class="lz-prose">
        Alarm (Y=1) wenn: Tür offen (T=1) <strong>UND</strong> Bewegung (B=1),
        <strong>ODER</strong> Fenster eingebrochen (F=1).
      </p>
      ${renderTable({
        headers: ['T (Tür)', 'B (Bewegung)', 'F (Fenster)', 'Y (Alarm)', 'Grund'],
        rows: [
          ['0', '0', '0', '<strong>0</strong>', 'Alles ruhig'],
          ['0', '0', '1', '<strong>1</strong>', 'Fenster!'],
          ['0', '1', '0', '<strong>0</strong>', 'Bewegung, Tür zu'],
          ['0', '1', '1', '<strong>1</strong>', 'Fenster!'],
          ['1', '0', '0', '<strong>0</strong>', 'Tür auf, keine Bewegung'],
          ['1', '0', '1', '<strong>1</strong>', 'Fenster!'],
          ['1', '1', '0', '<strong>1</strong>', 'Tür + Bewegung'],
          ['1', '1', '1', '<strong>1</strong>', 'Alles aktiv'],
        ],
      })}
      <h4 class="lz-h4">Boolesche Gesetze zur Vereinfachung</h4>
      ${renderTable({
        headers: ['Gesetz', 'AND-Form', 'OR-Form'],
        rows: [
          ['Identität', 'A · 1 = A', 'A + 0 = A'],
          ['Nullelement', 'A · 0 = 0', 'A + 1 = 1'],
          ['Idempotenz', 'A · A = A', 'A + A = A'],
          ['Komplement', 'A · ¬A = 0', 'A + ¬A = 1'],
          ['Doppelneg.', '¬(¬A) = A', '—'],
          ['Distributiv', 'A·(B+C) = A·B+A·C', 'A+(B·C) = (A+B)·(A+C)'],
          ['Absorption', 'A·(A+B) = A', 'A+(A·B) = A'],
        ],
      })}
      ${renderInfobox({ icon: 'fas fa-pencil-alt', title: 'Übungsaufgabe: Zwei-Sensor-Alarm', type: 'success',
        body: `Eine Alarmanlage soll auslösen, wenn Sensor A <strong>ODER</strong> Sensor B aktiv ist,
               aber der Deaktivierungsschalter D = 0.<br>
               <strong>Aufgabe:</strong> Erstelle die Wahrheitstabelle (3 Eingänge = 8 Zeilen).<br>
               <strong>Lösung:</strong> Y=1 wenn D=0 UND (A=1 ODER B=1).` })}
    </div>`;
  }

  _panelDNF() {
    return `<div class="wim-category hidden" data-wim-cat="dnf">
      <h3 class="lz-h3">Disjunktive Normalform (DNF)</h3>
      <p class="lz-prose">
        Die DNF besteht aus einer OR-Verknüpfung von <strong>Mintermen</strong>.
        Ein Minterm ist ein AND-Term, in dem <strong>alle Variablen</strong> vorkommen.
      </p>
      ${renderInfobox({ icon: 'fas fa-list-ol', title: 'DNF-Aufstellungsregel', type: 'info',
        body: `Für jede Zeile mit Y=1:<br>
               • Variable = 1: direkt übernehmen (A)<br>
               • Variable = 0: invertieren (¬A)<br>
               • Alle mit AND verbinden → Minterm<br>
               • Alle Minterme mit OR verbinden` })}
      <h4 class="lz-h4">Alarmanlage: DNF aufstellen</h4>
      <p class="lz-prose">Y=1 bei Zeilen: 001, 011, 101, 110, 111</p>
      ${renderFormulaBox({
        label: 'DNF der Alarmanlage (unkürzt)',
        formula: 'Y = (¬T·¬B·F) ∨ (¬T·B·F) ∨ (T·¬B·F) ∨ (T·B·¬F) ∨ (T·B·F)',
      })}
      ${renderAccordion([
        {
          title: 'Algebraische Vereinfachung der Alarmanlage',
          content: `<pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:1rem;border-radius:8px;font-size:.85rem;white-space:pre-wrap;">
(¬T·¬B·F) ∨ (¬T·B·F) = ¬T·F·(¬B∨B) = ¬T·F
(T·¬B·F) ∨ (T·B·F)   = T·F·(¬B∨B)  = T·F
→ ¬T·F ∨ T·F = F·(¬T∨T) = F·1 = F

(T·B·¬F) ∨ (T·B·F) = T·B·(¬F∨F) = T·B

Ergebnis: <strong>Y = F ∨ (T·B)</strong></pre>
          <p>Bedeutung: Alarm wenn Fenster eingebrochen ODER (Tür offen UND Bewegung).</p>`,
        },
        {
          title: 'Für die Prüfung: DNF-Vorgehen (5 Schritte)',
          content: `<ol style="line-height:2;">
            <li>Wahrheitstabelle vollständig aufstellen (2ⁿ Zeilen)</li>
            <li>Alle Zeilen mit Y=1 markieren</li>
            <li>Pro Zeile einen Minterm aufschreiben (negiert bei 0)</li>
            <li>Minterme mit OR verbinden → vollständige DNF</li>
            <li>Algebraisch vereinfachen oder KV-Diagramm verwenden</li>
          </ol>`,
        },
      ])}
    </div>`;
  }

  _panelKV() {
    return `<div class="wim-category hidden" data-wim-cat="kv">
      <h3 class="lz-h3">KV-Diagramm (Karnaugh-Veitch)</h3>
      <p class="lz-prose">
        Grafisches Verfahren zur <strong>Minimierung boolescher Funktionen</strong>.
        Schneller und fehlerunanfälliger als algebraische Vereinfachung.
      </p>
      <h4 class="lz-h4">Aufbau: 2, 3 und 4 Variablen</h4>
      ${renderTable({
        headers: ['Variablen', 'Größe', 'Zeilen/Spalten-Beschriftung'],
        rows: [
          ['2 (A, B)', '2×2 = 4 Felder', 'A: 0,1 / B: 0,1'],
          ['3 (A, B, C)', '2×4 = 8 Felder', 'A: 0,1 / BC: <strong>00,01,11,10</strong> (Gray-Code!)'],
          ['4 (A,B,C,D)', '4×4 = 16 Felder', 'AB: <strong>00,01,11,10</strong> / CD: <strong>00,01,11,10</strong>'],
        ],
      })}
      ${renderInfobox({ icon: 'fas fa-exclamation-triangle', title: 'WICHTIG: Gray-Code-Reihenfolge!', type: 'warning',
        body: `Spalten/Zeilen folgen dem <strong>Gray-Code: 00 → 01 → 11 → 10</strong> — NICHT 00→01→10→11!<br>
               Benachbarte Felder unterscheiden sich immer in <strong>genau einem Bit</strong>.
               Das ermöglicht das Zusammenfassen zu einfacheren Termen.` })}
      <h4 class="lz-h4">KV-Diagramm als Tabelle (3 Variablen — Beispiel)</h4>
      <p class="lz-prose">Y=1 bei: A=0,BC=01 | A=0,BC=11 | A=0,BC=10 | A=1,BC=10</p>
      ${renderTable({
        headers: ['', 'BC=00', 'BC=01', 'BC=11', 'BC=10'],
        rows: [
          ['<strong>A=0</strong>', '0', '<strong class="kv-one">1</strong>', '<strong class="kv-one">1</strong>', '<strong class="kv-one">1</strong>'],
          ['<strong>A=1</strong>', '0', '0', '0', '<strong class="kv-one">1</strong>'],
        ],
      })}
      <h4 class="lz-h4">Gruppierungsregeln</h4>
      ${renderMerkboxGrid([
        { icon: 'fas fa-expand-arrows-alt', title: 'Größtmögliche Gruppen', text: 'Immer die größte mögliche Gruppe wählen. Mehr 1er = einfacherer Term.' },
        { icon: 'fas fa-calculator', title: 'Nur Zweierpotenzen', text: 'Gruppengrößen: 1, 2, 4, 8, 16. Keine 3er oder 5er!' },
        { icon: 'fas fa-infinity', title: 'Rand ist zyklisch', text: 'Links↔Rechts und Oben↔Unten sind Nachbarn (Torus-Topologie).' },
        { icon: 'fas fa-check', title: 'Jede 1 mindestens einmal', text: '1er dürfen mehrfach verwendet werden. Alle müssen abgedeckt sein.' },
      ])}
      <h4 class="lz-h4">Term aus Gruppe ablesen</h4>
      ${renderInfobox({ icon: 'fas fa-eye', title: 'Regel: Was sich ändert, fällt weg', type: 'info',
        body: `Variable konstant 1 in Gruppe → Variable kommt in Term<br>
               Variable konstant 0 in Gruppe → negierte Variable kommt in Term<br>
               Variable wechselt 0↔1 in Gruppe → Variable fällt weg<br>
               <strong>Je größer die Gruppe, desto weniger Variablen verbleiben!</strong>` })}
      ${renderAccordion([
        {
          title: 'Gruppen ablesen im obigen Beispiel',
          content: `
          <strong>Gruppe 1</strong> (A=0, BC=01 und BC=11): B wechselt (0→1), C bleibt 1, A bleibt 0 → Term: <strong>¬A·C</strong><br>
          <strong>Gruppe 2</strong> (A=0, BC=11 und BC=10): C wechselt (1→0), B bleibt 1, A bleibt 0 → Term: <strong>¬A·B</strong><br>
          <strong>Gruppe 3</strong> (A=0,BC=10 und A=1,BC=10): A wechselt, B=1, C=0 → Term: <strong>B·¬C</strong><br>
          <strong>Ergebnis: Y = ¬A·C ∨ ¬A·B ∨ B·¬C</strong>`,
        },
      ])}
    </div>`;
  }

  _panelPraxis() {
    return `<div class="wim-category hidden" data-wim-cat="praxis">
      <h3 class="lz-h3">Wichtige Praxisschaltungen</h3>
      ${renderMerkboxGrid([
        { icon: 'fas fa-plus-circle',  title: 'Halbaddierer',        text: 'Addiert 2 Bits. Summe S = A ⊕ B (XOR). Übertrag C = A ∧ B (AND).' },
        { icon: 'fas fa-plus',         title: 'Volladdierer',        text: 'Addiert 2 Bits + Eingangsübertrag Cᵢₙ. S=A⊕B⊕Cᵢₙ, Cₒᵤₜ=(A·B)+(Cᵢₙ·(A⊕B)).' },
        { icon: 'fas fa-filter',       title: 'Multiplexer (MUX)',   text: '2ⁿ Dateneingänge, n Steuerleitungen, 1 Ausgang. Wählt einen Eingang durch.' },
        { icon: 'fas fa-share-alt',    title: 'Demultiplexer',       text: '1 Eingang, n Steuerleitungen, 2ⁿ Ausgänge. Leitet Eingang auf einen Ausgang.' },
        { icon: 'fas fa-exchange-alt', title: 'Codeumsetzer',        text: 'Wandelt Codierungen um, z.B. BCD → 7-Segment. 4 Eingänge, 7 Ausgänge.' },
        { icon: 'fas fa-balance-scale','title': 'Komparator',        text: 'Vergleicht zwei Binärzahlen. Ausgänge für A>B, A=B, A<B.' },
      ])}
      <h4 class="lz-h4">Halbaddierer — Wahrheitstabelle</h4>
      ${renderTable({
        headers: ['A', 'B', 'Summe S (A ⊕ B)', 'Übertrag C (A ∧ B)'],
        rows: [
          ['0', '0', '0', '0'],
          ['0', '1', '1', '0'],
          ['1', '0', '1', '0'],
          ['1', '1', '0', '1'],
        ],
      })}
      ${renderFormulaBox({
        label: 'Halbaddierer',
        formula: 'S = A ⊕ B &emsp;&emsp; C = A ∧ B',
        desc: '1 XOR-Gatter + 1 AND-Gatter = kompletter Halbaddierer',
      })}
      <h4 class="lz-h4">7-Segment-Anzeige (Codeumsetzer)</h4>
      ${renderTable({
        headers: ['Ziffer', 'a', 'b', 'c', 'd', 'e', 'f', 'g'],
        rows: [
          ['0', '1', '1', '1', '1', '1', '1', '0'],
          ['1', '0', '1', '1', '0', '0', '0', '0'],
          ['2', '1', '1', '0', '1', '1', '0', '1'],
          ['3', '1', '1', '1', '1', '0', '0', '1'],
          ['4', '0', '1', '1', '0', '0', '1', '1'],
          ['5', '1', '0', '1', '1', '0', '1', '1'],
          ['6', '1', '0', '1', '1', '1', '1', '1'],
          ['7', '1', '1', '1', '0', '0', '0', '0'],
          ['8', '1', '1', '1', '1', '1', '1', '1'],
          ['9', '1', '1', '1', '1', '0', '1', '1'],
        ],
      })}
      ${renderInfobox({ icon: 'fas fa-graduation-cap', title: 'Prüfungsaufgaben-Typen', type: 'success',
        body: `<strong>Typ 1:</strong> Wahrheitstabelle aus Textaufgabe erstellen<br>
               <strong>Typ 2:</strong> DNF aus Wahrheitstabelle ableiten<br>
               <strong>Typ 3:</strong> KV-Diagramm erstellen und Funktion minimieren<br>
               <strong>Typ 4:</strong> Schaltung aus Formel zeichnen (Gatter-Symbole!)<br>
               <strong>Typ 5:</strong> De Morgan anwenden (NAND/NOR umformen)` })}
    </div>`;
  }

  init() {
    i18n.init();
    initScrollReveal();
    initInteractive(document.querySelector('.page-informatik-sub'));
    document.querySelectorAll('[data-nav-link]').forEach(btn => {
      btn.addEventListener('click', () => { if (btn.dataset.navLink) window.location.hash = btn.dataset.navLink; });
    });
    initWimTabs(document);
  }
}