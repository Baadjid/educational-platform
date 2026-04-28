// pages/projekte/lernzettel/faecher/informatik/themen/digitaltechnik/zustandsdiagramme.js
// Informatik 1.4 — Zustandsdiagramme & synchrone Zähler

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
  prev: { label: '1.3 FlipFlops', link: `${BASE}/themen/digitaltechnik/flipflops-schaltwerke` },
  next: { label: '1.5 VHDL & FPGAs', link: `${BASE}/themen/digitaltechnik/vhdl-fpga` },
};

const TABS = [
  { key: 'grundlagen', label: '📖 Grundlagen' },
  { key: 'entwurf_d',  label: '🔷 Entwurf mit D-FF' },
  { key: 'entwurf_jk', label: '🔶 Entwurf mit JK-FF' },
  { key: 'zaehler',    label: '🔢 Synchrone Zähler' },
  { key: 'uebungen',   label: '✏ Übungen' },
];

export default class ZustandsDiagrammePage {
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
            <span>1.4 · Zustandsdiagramme</span>
          </nav>
          <h1 class="lz-sub-title">Zustandsdiagramme & synchrone Zähler</h1>
          <p class="lz-sub-subtitle">Moore, Mealy, D-FF & JK-FF Entwurf, Zustandscodierung</p>
          ${renderTags(['Zustandsdiagramm', 'Moore', 'Mealy', 'D-FF', 'JK-FF', 'Zähler', 'BPE 1'])}
        </div>
      </section>
      <section class="lz-content-section">
        <div class="lz-section-wrap">
          <nav class="wim-tabs" id="zustandTabs" aria-label="Zustandsdiagramme">
            ${TABS.map((t, i) => `<button class="wim-tab${i === 0 ? ' active' : ''}" data-wim="${t.key}">${t.label}</button>`).join('')}
          </nav>
          ${this._panelGrundlagen()}
          ${this._panelEntwurfD()}
          ${this._panelEntwurfJK()}
          ${this._panelZaehler()}
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
      ${renderInfobox({ icon: 'fas fa-circle-nodes', title: 'Zustandsdiagramm = grafisches Schaltwerk', type: 'info',
        body: `Ein <strong>Zustandsdiagramm</strong> beschreibt das zeitliche Verhalten eines Schaltwerks.
               Kreise = Zustände, Pfeile = Übergänge (mit Bedingung beschriftet).
               Aus dem Diagramm lässt sich direkt die digitale Schaltung ableiten.` })}
      ${renderCompare({
        titleA: '🔶 Moore-Automat',
        titleB: '🔷 Mealy-Automat',
        listA: [
          'Ausgang hängt NUR vom Zustand ab',
          'Ausgang steht im Zustandskreis',
          'Ausgabe ist synchron (stabil)',
          'Braucht mehr Zustände',
          'Einfacher zu analysieren',
          'Beispiel: Ampel',
        ],
        listB: [
          'Ausgang hängt von Zustand UND Eingang ab',
          'Ausgang steht am Übergangs-Pfeil',
          'Ausgabe kann asynchron schwanken',
          'Weniger Zustände nötig',
          'Reagiert schneller auf Eingaben',
          'Beispiel: Türschloss',
        ],
      })}
      <h4 class="lz-h4">Elemente eines Zustandsdiagramms</h4>
      ${renderTable({
        headers: ['Element', 'Darstellung', 'Bedeutung'],
        rows: [
          ['Zustand', 'Kreis mit Name/Ausgabe', 'Aktuelle Konfiguration des Systems'],
          ['Anfangszustand', 'Kreis mit eingehendem Pfeil (ohne Quelle)', 'Startzustand nach Reset'],
          ['Übergang', 'Pfeil mit Bedingung', 'Zustandswechsel wenn Bedingung wahr'],
          ['Ausgabe (Moore)', 'Im Kreis oder darunter', 'Ausgabewert in diesem Zustand'],
          ['Ausgabe (Mealy)', 'Am Pfeil (Bedingung/Ausgabe)', 'Ausgabewert bei diesem Übergang'],
        ],
      })}
      <h4 class="lz-h4">Zustandscodierung</h4>
      ${renderTable({
        headers: ['Methode', 'Beschreibung', 'Vorteil'],
        rows: [
          ['Binärcodierung', 'Minimalste Anzahl FFs: n FFs für 2ⁿ Zustände', 'Wenig Hardware'],
          ['One-Hot', '1 FF pro Zustand, genau ein FF=1 aktiv', 'Schnell, einfache Logik'],
          ['Gray-Code', 'Pro Übergang ändert sich nur 1 Bit', 'Keine Störimpulse bei Übergängen'],
          ['Johnson-Code', 'Wie Gray, mit T-FFs realisiert', 'Noch weniger Glitches'],
        ],
      })}
    </div>`;
  }

  _panelEntwurfD() {
    return `<div class="wim-category hidden" data-wim-cat="entwurf_d">
      <h3 class="lz-h3">Entwurfsverfahren mit D-FlipFlops</h3>
      ${renderInfobox({ icon: 'fas fa-star', title: 'D-FF: Der einfachste Entwurfsweg', type: 'success',
        body: `<strong>Goldene Regel:</strong> Bei D-FlipFlops ist D direkt der gewünschte Folgezustand!<br>
               D = Q(n+1) — einfach aus der Zustandsfolgetabelle ablesen, keine Erregertabelle nötig.<br>
               Das macht D-FFs für modernen Schaltwerks-Entwurf zum Standard.` })}
      <h4 class="lz-h4">Entwurfsschritte (5 Schritte)</h4>
      ${renderAccordion([
        {
          title: 'Schritt 1: Zustandsdiagramm erstellen',
          content: `Alle Zustände, Übergänge und Ausgaben aus der Aufgabenstellung ableiten.<br>
          Beispiel: 2-Bit synchroner Aufwärtszähler → 4 Zustände: S0(00), S1(01), S2(10), S3(11)`,
        },
        {
          title: 'Schritt 2: Zustände codieren',
          content: `Jedem Zustand eine Binärcodierung zuweisen. Für n Zustände: log₂(n) FFs.<br>
          2-Bit Zähler: S0=00, S1=01, S2=10, S3=11 → 2 FFs: Q1, Q0`,
        },
        {
          title: 'Schritt 3: Zustandsfolgetabelle aufstellen',
          content: `${renderTable({
            headers: ['Zustand (Q1Q0)', 'Folgezustand (Q1+Q0+)', 'Ausgang'],
            rows: [
              ['S0: 00', '01', '—'],
              ['S1: 01', '10', '—'],
              ['S2: 10', '11', '—'],
              ['S3: 11', '00 (Überlauf)', '—'],
            ],
          })}`,
        },
        {
          title: 'Schritt 4: D-Eingänge ablesen (D = Q(n+1))',
          content: `${renderTable({
            headers: ['Q1(n)', 'Q0(n)', 'Q1(n+1)', 'Q0(n+1)', 'D1', 'D0'],
            rows: [
              ['0', '0', '0', '1', '<strong>0</strong>', '<strong>1</strong>'],
              ['0', '1', '1', '0', '<strong>1</strong>', '<strong>0</strong>'],
              ['1', '0', '1', '1', '<strong>1</strong>', '<strong>1</strong>'],
              ['1', '1', '0', '0', '<strong>0</strong>', '<strong>0</strong>'],
            ],
          })}
          <p><strong>Schlüssel:</strong> D1 = Q1(n+1) und D0 = Q0(n+1) — direkt aus Spalte Folgezustand!</p>`,
        },
        {
          title: 'Schritt 5: Schaltfunktion minimieren (KV-Diagramm)',
          content: `Aus der D-Tabelle die booleschen Funktionen ableiten und mit KV minimieren:<br>
          D1 = Q1⊕Q0 = Q1·¬Q0 + ¬Q1·Q0 (XOR!)<br>
          D0 = ¬Q0<br>
          → 2-Bit Aufwärtszähler = 1 XOR-Gatter + 1 NOT-Gatter + 2 D-FFs`,
        },
      ])}
    </div>`;
  }

  _panelEntwurfJK() {
    return `<div class="wim-category hidden" data-wim-cat="entwurf_jk">
      <h3 class="lz-h3">Entwurfsverfahren mit JK-FlipFlops</h3>
      <p class="lz-prose">
        Bei JK-FFs muss die <strong>Erregertabelle</strong> verwendet werden,
        um aus den Zustandsübergängen die J- und K-Eingänge zu bestimmen.
        Vorteil: Don't-Care-Einträge vereinfachen die Minimierung.
      </p>
      ${renderInfobox({ icon: 'fas fa-table', title: 'JK-FF Erregertabelle (Wiederholung)', type: 'info',
        body: `Q: 0→0 → J=0, K=x &emsp; | &emsp; Q: 0→1 → J=1, K=x<br>
               Q: 1→0 → J=x, K=1 &emsp; | &emsp; Q: 1→1 → J=x, K=0<br>
               x = Don't Care (beliebig)` })}
      <h4 class="lz-h4">2-Bit Zähler mit JK-FFs — vollständige Erregertabelle</h4>
      ${renderTable({
        headers: ['Q1', 'Q0', 'Q1+', 'Q0+', 'J1', 'K1', 'J0', 'K0'],
        rows: [
          ['0', '0', '0', '1', '0', 'x', '1', 'x'],
          ['0', '1', '1', '0', '1', 'x', 'x', '1'],
          ['1', '0', '1', '1', 'x', '0', '1', 'x'],
          ['1', '1', '0', '0', 'x', '1', 'x', '1'],
        ],
      })}
      <h4 class="lz-h4">Minimierung mit KV-Diagramm</h4>
      ${renderAccordion([
        {
          title: 'J1 minimieren (aus obiger Tabelle)',
          content: `${renderTable({
            headers: ['', 'Q0=0', 'Q0=1'],
            rows: [
              ['Q1=0', '0', '1'],
              ['Q1=1', 'x', 'x'],
            ],
          })}
          Gruppe: Zeile Q1=1 (zwei x) + Q1=0,Q0=1 (Wert 1) → J1 = Q0`,
        },
        {
          title: 'Ergebnis: Schaltfunktionen für 2-Bit Zähler',
          content: `<strong>J1 = Q0</strong> &emsp; K1 = Q0<br>
          <strong>J0 = 1</strong> (immer 1!) &emsp; K0 = 1 (immer 1!)<br>
          → Q0 wechselt immer, Q1 wechselt nur wenn Q0=1 — macht Sinn!`,
        },
      ])}
    </div>`;
  }

  _panelZaehler() {
    return `<div class="wim-category hidden" data-wim-cat="zaehler">
      <h3 class="lz-h3">Synchrone Zähler</h3>
      ${renderCompare({
        titleA: '⏱ Asynchroner Zähler (Ripple)',
        titleB: '⚡ Synchroner Zähler',
        listA: [
          'FFs werden kaskadiert: Q₀ taktet FF₁',
          'Einfach aufzubauen',
          'Verzögerung akkumuliert (Ripple-Effekt)',
          'Glitches bei höheren Stufen möglich',
          'Für hohe Frequenzen ungeeignet',
        ],
        listB: [
          'Alle FFs am gleichen Takt',
          'Kein Ripple, gleichzeitiger Übergang',
          'Schneller und stabiler',
          'Braucht mehr kombinatorische Logik',
          'Standard in modernen Designs',
        ],
      })}
      <h4 class="lz-h4">Gängige synchrone Zähler</h4>
      ${renderTable({
        headers: ['Zähler', 'Anzahl Zustände', 'Folge', 'Besonderheit'],
        rows: [
          ['2-Bit Binärzähler', '4', '0→1→2→3→0', 'Einfachster Aufwärtszähler'],
          ['3-Bit Binärzähler', '8', '0→1→…→7→0', 'J=K=1 für Q0, J1=K1=Q0, J2=K2=Q1·Q0'],
          ['BCD-Zähler', '10', '0→1→…→9→0', 'Dezimalzähler, Reset bei 10 (1010)'],
          ['Gray-Code-Zähler', '2ⁿ', 'Pro Schritt nur 1 Bit ändern', 'Kein Glitch, 2-Bit: 00→01→11→10→00'],
          ['Ring-Zähler', 'n', '1000→0100→0010→0001', 'Aus T-FFs, nur 1 Bit aktiv'],
        ],
      })}
      <h4 class="lz-h4">Gray-Code-Zähler (2-Bit) — Zustandsdiagramm</h4>
      ${renderTable({
        headers: ['Zustand', 'Codierung (Q1Q0)', 'Folgezustand', 'Folge-Code'],
        rows: [
          ['S0', '00', 'S1', '01'],
          ['S1', '01', 'S2', '11'],
          ['S2', '11', 'S3', '10'],
          ['S3', '10', 'S0', '00'],
        ],
      })}
      ${renderInfobox({ icon: 'fas fa-info-circle', title: 'Warum Gray-Code?', type: 'info',
        body: `Bei jedem Übergang wechselt <strong>genau 1 Bit</strong>.
               Das verhindert kurze Störimpulse (Glitches) die entstehen, wenn mehrere Bits
               gleichzeitig wechseln sollen aber tiny Zeitunterschiede auftreten.
               Wichtig bei Positionssensoren, Analog-Digital-Wandlern.` })}
    </div>`;
  }

  _panelUebungen() {
    return `<div class="wim-category hidden" data-wim-cat="uebungen">
      <h3 class="lz-h3">Übungsaufgaben</h3>
      ${renderAccordion([
        {
          title: 'Aufgabe 1: Ampel-Zustandsdiagramm (Moore)',
          content: `<p>Eine Ampel hat 4 Zustände: ROT, ROT-GELB, GRÜN, GELB.<br>
          Zeichne das Zustandsdiagramm als Moore-Automat. Ausgabe: Welche Lampen leuchten?</p>
          <p><strong>Lösung:</strong><br>
          ROT (A=1,B=0,C=0) → ROT-GELB (A=1,B=1,C=0) → GRÜN (A=0,B=0,C=1) → GELB (A=0,B=1,C=0) → ROT<br>
          Alle Übergänge mit Zeitbedingung (Takt), kein Eingang nötig → Moore.`,
        },
        {
          title: 'Aufgabe 2: Zustandsfolgetabelle für 3-Bit Aufwärtszähler mit D-FF',
          content: `${renderTable({
            headers: ['Q2Q1Q0', 'Q2+Q1+Q0+', 'D2', 'D1', 'D0'],
            rows: [
              ['000', '001', '0', '0', '1'],
              ['001', '010', '0', '1', '0'],
              ['010', '011', '0', '1', '1'],
              ['011', '100', '1', '0', '0'],
              ['100', '101', '1', '0', '1'],
              ['101', '110', '1', '1', '0'],
              ['110', '111', '1', '1', '1'],
              ['111', '000', '0', '0', '0'],
            ],
          })}
          <p><strong>Merke:</strong> D = Q(n+1) — einfach die Folgezustand-Spalten übernehmen!</p>`,
        },
        {
          title: 'Aufgabe 3: Waschmaschinen-Automat (Mealy)',
          content: `<p>Zustände: AUS, WASCHEN, SPÜLEN, SCHLEUDERN<br>
          Eingang: Start-Taster (S=1)<br>
          Ausgabe: Aktives Programm</p>
          <p><strong>Übergänge:</strong><br>
          AUS →(S=1)→ WASCHEN →(fertig)→ SPÜLEN →(fertig)→ SCHLEUDERN →(fertig)→ AUS<br>
          AUS →(S=0)→ AUS (bleibt)</p>
          <p>Bei Mealy: Ausgabe steht am Pfeil (Bedingung/Ausgabe).<br>
          Bei Moore: Ausgabe steht im Zustand.</p>`,
        },
      ])}
      ${renderInfobox({ icon: 'fas fa-graduation-cap', title: 'Zustandsdiagramme für die Prüfung', type: 'success',
        body: `<strong>Entwurf mit D-FF ist am einfachsten:</strong> D = Q(n+1) direkt aus Tabelle.<br>
               <strong>Entwurf mit JK-FF:</strong> Erregertabelle anwenden, Don't-Care nutzen.<br>
               <strong>KV-Diagramm:</strong> Für Minimierung der Schaltfunktionen aus Tabelle.` })}
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