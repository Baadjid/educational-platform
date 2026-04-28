// pages/projekte/lernzettel/faecher/informatik/themen/digitaltechnik/zahlensysteme.js
// Informatik 1.1 — Zahlensysteme & Codes

import { initScrollReveal }  from '../../../../../../../shared/js/index.js';
import { footerHTML }         from '../../../../../../../components/Footer.js';
import { i18n }               from '../../../../../../../shared/js/i18n.js';
import { initWimTabs }        from '../../../../../../../shared/js/wim-tabs.js';
import {
  ensureComponentsCSS, renderTags, renderInfobox, renderTable,
  renderAccordion, renderMerkboxGrid, renderFormulaBox, initInteractive,
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
  prev: null,
  next: { label: '1.2 Schaltnetze & KV-Diagramme', link: `${BASE}/themen/digitaltechnik/schaltnetze` },
};

const TABS = [
  { key: 'grundlagen', label: '📖 Grundlagen' },
  { key: 'dual',       label: '⚡ Dualsystem & ZK' },
  { key: 'hex',        label: '🔢 Hexadezimal' },
  { key: 'bcd',        label: '🗂 BCD & ASCII' },
  { key: 'uebungen',   label: '🧮 Übungen' },
];

export default class ZahlensystemePage {
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
            <span>1.1 · Zahlensysteme & Codes</span>
          </nav>
          <h1 class="lz-sub-title">Zahlensysteme & Codes</h1>
          <p class="lz-sub-subtitle">Dual, Hexadezimal, BCD, ASCII — die Basis aller Digitalelektronik</p>
          ${renderTags(['Zahlensysteme', 'Binär', 'Hexadezimal', 'BCD', 'ASCII', 'Zweierkomplement', 'BPE 1'])}
        </div>
      </section>
      <section class="lz-content-section">
        <div class="lz-section-wrap">
          <nav class="wim-tabs" id="zahlensystemeTabs" aria-label="Zahlensysteme">
            ${TABS.map((t, i) => `<button class="wim-tab${i === 0 ? ' active' : ''}" data-wim="${t.key}">${t.label}</button>`).join('')}
          </nav>
          ${this._panelGrundlagen()}
          ${this._panelDual()}
          ${this._panelHex()}
          ${this._panelBCD()}
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
      ${renderInfobox({ icon: 'fas fa-lightbulb', title: 'Warum andere Zahlensysteme?', type: 'info',
        body: `Computer kennen nur zwei Zustände: <strong>An (= 1)</strong> und <strong>Aus (= 0)</strong>.
               Deshalb arbeiten sie intern immer im <strong>Dualsystem (Basis 2)</strong>.
               Hexadezimal ist die Kurzschreibweise. BCD und ASCII sind Zeichencodierungen.` })}
      ${renderMerkboxGrid([
        { icon: 'fas fa-toggle-on',    title: 'Dezimalsystem',     text: 'Basis 10, Ziffern 0–9. Jede Stelle = Potenz von 10. Unser Alltags-Zahlensystem.' },
        { icon: 'fas fa-microchip',    title: 'Dualsystem',        text: 'Basis 2, Ziffern 0 und 1. Jede Stelle = Potenz von 2. Das System der Computer.' },
        { icon: 'fas fa-code',         title: 'Hexadezimalsystem', text: 'Basis 16, Ziffern 0–9 und A–F. 1 Hex-Ziffer = 4 Bit. Kompakter als Binär.' },
        { icon: 'fas fa-table-cells',  title: 'BCD-Code',          text: 'Jede Dezimalziffer einzeln als 4 Bit. Für Taschenrechner, Displays, Kassensysteme.' },
      ])}
      <h3 class="lz-h3" style="margin-top:2rem;">Das Stellenwertsystem</h3>
      <p class="lz-prose">Alle Zahlensysteme: Jede Stelle hat einen Stellenwert = Potenz der Basis.</p>
      ${renderTable({
        headers: ['Stelle', 'Dezimal (Basis 10)', 'Dual (Basis 2)', 'Hex (Basis 16)'],
        rows: [
          ['Stelle 0 (rechts)', '10⁰ = 1', '2⁰ = 1', '16⁰ = 1'],
          ['Stelle 1', '10¹ = 10', '2¹ = 2', '16¹ = 16'],
          ['Stelle 2', '10² = 100', '2² = 4', '16² = 256'],
          ['Stelle 3', '10³ = 1.000', '2³ = 8', '16³ = 4.096'],
          ['Stelle 4', '10⁴ = 10.000', '2⁴ = 16', '16⁴ = 65.536'],
        ],
      })}
      ${renderInfobox({ icon: 'fas fa-bookmark', title: 'Beispiel: 42 in allen Systemen', type: 'success',
        body: `<strong>42₁₀</strong> = 4×10¹+2×10⁰ = 42 ✓<br>
               <strong>101010₂</strong> = 1×2⁵+0×2⁴+1×2³+0×2²+1×2¹+0×2⁰ = 32+8+2 = 42 ✓<br>
               <strong>2A₁₆</strong> = 2×16¹+A(=10)×16⁰ = 32+10 = 42 ✓` })}
    </div>`;
  }

  _panelDual() {
    return `<div class="wim-category hidden" data-wim-cat="dual">
      <h3 class="lz-h3">Das Dualsystem</h3>
      ${renderTable({
        headers: ['Begriff', 'Definition', 'Wertebereich'],
        rows: [
          ['Bit', '1 binäre Stelle: 0 oder 1', '0 bis 1'],
          ['Nibble', '4 Bit', '0 bis 15'],
          ['Byte', '8 Bit', '0 bis 255'],
          ['MSB', 'Most Significant Bit — linkestes, größtes Bit', '—'],
          ['LSB', 'Least Significant Bit — rechtestes, kleinstes Bit', '—'],
        ],
      })}
      <h4 class="lz-h4">Dezimal → Binär: Wiederholte Division durch 2</h4>
      ${renderFormulaBox({
        label: 'Beispiel: 13₁₀ → Binär',
        formula: `13÷2=6 Rest <strong>1</strong> | 6÷2=3 Rest <strong>0</strong> | 3÷2=1 Rest <strong>1</strong> | 1÷2=0 Rest <strong>1</strong><br>
                  → von unten lesen: <strong>1101₂</strong>`,
        desc: 'Probe: 1×2³+1×2²+0×2¹+1×2⁰ = 8+4+0+1 = 13 ✓',
      })}
      <h4 class="lz-h4">Binär → Dezimal: Stellenwerte addieren</h4>
      ${renderTable({
        headers: ['Bit-Position', '2⁷=128', '2⁶=64', '2⁵=32', '2⁴=16', '2³=8', '2²=4', '2¹=2', '2⁰=1'],
        rows: [
          ['10110101', '1', '0', '1', '1', '0', '1', '0', '1'],
          ['Beitrag', '128', '0', '32', '16', '0', '4', '0', '1'],
        ],
      })}
      ${renderInfobox({ icon: 'fas fa-calculator', title: '10110101₂ = 128+32+16+4+1 = 181₁₀', type: 'success',
        body: '<strong>Merke:</strong> Potenzen von 2 auswendig: 1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024' })}
      <h4 class="lz-h4" style="margin-top:2rem;">Negative Zahlen: Zweierkomplement (ZK)</h4>
      <p class="lz-prose">MSB ist Vorzeichenbit: <strong>0 = positiv, 1 = negativ</strong>. Addition und Subtraktion funktionieren identisch.</p>
      ${renderAccordion([
        {
          title: 'Schritt-für-Schritt: −13 im ZK (8 Bit)',
          content: `<ol class="lz-list">
            <li>Positive Zahl binär: 13 = <code>0000 1101</code></li>
            <li>Alle Bits invertieren (Einerkomplement): <code>1111 0010</code></li>
            <li>1 addieren: <code>1111 0011</code> ← Das ist −13</li>
          </ol>
          <p><strong>Probe:</strong> 1111 0011 → invertieren = 0000 1100 → +1 = 0000 1101 = 13 ✓</p>`,
        },
        {
          title: 'Addition im ZK: 8−5 = 3',
          content: `<pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:1rem;border-radius:8px;font-family:monospace;">
  0000 1000  (+8)
+ 1111 1011  (−5 im ZK)
─────────────────────
  0000 0011  (+3) ✓   (Übertrag ignoriert)</pre>`,
        },
        {
          title: 'Wertebereich bei n Bit',
          content: `${renderTable({
            headers: ['Bits', 'Vorzeichenlos (unsigned)', 'Mit Vorzeichen (signed)'],
            rows: [
              ['4 Bit', '0 bis 15', '−8 bis +7'],
              ['8 Bit', '0 bis 255', '−128 bis +127'],
              ['16 Bit', '0 bis 65.535', '−32.768 bis +32.767'],
              ['32 Bit', '0 bis ~4,3 Mrd.', '~−2,1 Mrd. bis ~+2,1 Mrd.'],
            ],
          })}`,
        },
      ])}
    </div>`;
  }

  _panelHex() {
    return `<div class="wim-category hidden" data-wim-cat="hex">
      <h3 class="lz-h3">Das Hexadezimalsystem</h3>
      <p class="lz-prose">
        Hex (Basis 16) ist die <strong>Kurzschreibweise für Binärzahlen</strong>.
        Da 16 = 2⁴: <strong>1 Hex-Ziffer = genau 4 Bit (1 Nibble)</strong>.
      </p>
      ${renderTable({
        headers: ['Dez', 'Bin', 'Hex', 'Dez', 'Bin', 'Hex'],
        rows: [
          ['0', '0000', '0', '8', '1000', '8'],
          ['1', '0001', '1', '9', '1001', '9'],
          ['2', '0010', '2', '10', '1010', '<strong>A</strong>'],
          ['3', '0011', '3', '11', '1011', '<strong>B</strong>'],
          ['4', '0100', '4', '12', '1100', '<strong>C</strong>'],
          ['5', '0101', '5', '13', '1101', '<strong>D</strong>'],
          ['6', '0110', '6', '14', '1110', '<strong>E</strong>'],
          ['7', '0111', '7', '15', '1111', '<strong>F</strong>'],
        ],
      })}
      <h4 class="lz-h4">Binär ↔ Hex: Gruppen zu je 4 Bit</h4>
      ${renderFormulaBox({
        label: 'Beispiel: 1010 1111 0011₂ → Hex',
        formula: '1010 | 1111 | 0011 &nbsp;→&nbsp; <strong>A</strong> | <strong>F</strong> | <strong>3</strong> = <strong>0xAF3</strong>',
        desc: 'Probe: 10×256+15×16+3 = 2560+240+3 = 2803₁₀ ✓',
      })}
      <h4 class="lz-h4">Hex → Dezimal</h4>
      ${renderFormulaBox({
        label: '0x1F4 → Dezimal',
        formula: '1×16²+F(=15)×16¹+4×16⁰ = 256+240+4 = <strong>500₁₀</strong>',
      })}
      <h4 class="lz-h4">Dezimal → Hex: Division durch 16</h4>
      ${renderFormulaBox({
        label: '500₁₀ → Hex',
        formula: '500÷16=31 R<strong>4</strong> | 31÷16=1 R<strong>15=F</strong> | 1÷16=0 R<strong>1</strong> → von unten: <strong>0x1F4</strong>',
      })}
      ${renderInfobox({ icon: 'fas fa-map-marker-alt', title: 'Hex in der Praxis', type: 'info',
        body: `<strong>Speicheradressen:</strong> 0xFFFF = 16-Bit-Adressraum<br>
               <strong>Farben:</strong> #3b82f6 = R:59, G:130, B:246<br>
               <strong>ASCII:</strong> 'A' = 0x41 = 65₁₀<br>
               <strong>Maschinencode:</strong> MOV AX, 0x0042` })}
    </div>`;
  }

  _panelBCD() {
    return `<div class="wim-category hidden" data-wim-cat="bcd">
      <h3 class="lz-h3">BCD-Code</h3>
      <p class="lz-prose">Jede <strong>Dezimalziffer einzeln</strong> in 4 Bit kodieren. Kombinationen 1010–1111 sind im BCD <strong>ungültig</strong>.</p>
      ${renderTable({
        headers: ['Dezimal', 'BCD', 'Normales Binär', 'Identisch?'],
        rows: [
          ['5', '0101', '0000 0101', '✓ gleich'],
          ['12', '0001 0010', '0000 1100', '✗ verschieden'],
          ['47', '0100 0111', '0010 1111', '✗ verschieden'],
          ['99', '1001 1001', '0110 0011', '✗ verschieden'],
        ],
      })}
      ${renderInfobox({ icon: 'fas fa-question-circle', title: 'Wann wird BCD verwendet?', type: 'info',
        body: `Taschenrechner, Uhren, Kassensysteme — überall wo Rundungsfehler durch Binärdarstellung
               vermieden werden müssen und die Ziffern einzeln angezeigt werden.` })}
      <h3 class="lz-h3" style="margin-top:2.5rem;">ASCII-Code</h3>
      <p class="lz-prose">7-Bit-Zeichencodierung (0–127). Extended ASCII: 8 Bit (0–255).</p>
      ${renderTable({
        headers: ['Zeichen', 'Dezimal', 'Hexadezimal', 'Binär'],
        rows: [
          ['Leerzeichen', '32', '0x20', '0010 0000'],
          ['<code>0</code>–<code>9</code>', '48–57', '0x30–0x39', 'Ziffer + 48 = ASCII'],
          ['<code>A</code>', '65', '0x41', '0100 0001'],
          ['<code>Z</code>', '90', '0x5A', '0101 1010'],
          ['<code>a</code>', '97', '0x61', '0110 0001'],
          ['<code>z</code>', '122', '0x7A', '0111 1010'],
        ],
      })}
      ${renderMerkboxGrid([
        { icon: 'fas fa-sort-numeric-up', title: 'Ziffern 0–9', text: 'ASCII 48–57. Ziffer + 48 = Code. Bit-Pattern: 011xxxx.' },
        { icon: 'fas fa-font', title: 'Groß/Klein', text: 'Abstand A(65)↔a(97) = 32 = 0x20 = Bit 5. Umschalten: XOR 0x20.' },
        { icon: 'fas fa-globe', title: 'Unicode/UTF-8', text: 'ASCII reicht nicht für ä,ö,ü. UTF-8: rückwärtskompatibel, über 140.000 Zeichen.' },
      ])}
    </div>`;
  }

  _panelUebungen() {
    return `<div class="wim-category hidden" data-wim-cat="uebungen">
      <h3 class="lz-h3">Umrechnungsregeln — Schnellübersicht</h3>
      ${renderTable({
        headers: ['Von → Nach', 'Methode'],
        rows: [
          ['Dezimal → Binär', 'Wiederholte Division durch 2, Reste von unten lesen'],
          ['Binär → Dezimal', 'Stellenwerte (2⁰, 2¹, 2²…) mit Bits multiplizieren, addieren'],
          ['Binär ↔ Hex', '4er-Gruppen von rechts, Tabelle anwenden'],
          ['Dezimal → Hex', 'Division durch 16, Reste (0–F) von unten'],
          ['Hex → Dezimal', 'Stellenwerte (16⁰, 16¹…) × Ziffernwerte addieren'],
          ['Positiv → ZK (negativ)', 'Binär schreiben → alle Bits invertieren → +1'],
        ],
      })}
      <h3 class="lz-h3" style="margin-top:2rem;">Übungsaufgaben</h3>
      ${renderAccordion([
        {
          title: 'A1: 75₁₀ → Binär und Hex',
          content: `<strong>Binär:</strong> 75÷2=37R1, 37÷2=18R1, 18÷2=9R0, 9÷2=4R1, 4÷2=2R0, 2÷2=1R0, 1÷2=0R1 → <strong>1001011₂</strong><br>
          <strong>Hex:</strong> 0100|1011 → <strong>0x4B</strong>. Probe: 4×16+11=75 ✓`,
        },
        {
          title: 'A2: 0xFF → Dezimal und Binär',
          content: `<strong>Dezimal:</strong> 15×16+15 = 240+15 = <strong>255₁₀</strong><br>
          <strong>Binär:</strong> F=1111, F=1111 → <strong>11111111₂</strong> (maximaler Bytewert)`,
        },
        {
          title: 'A3: −37₁₀ im ZK (8 Bit)',
          content: `37₁₀ = 0010 0101₂ → invertieren: 1101 1010 → +1: <strong>1101 1011₂</strong><br>
          Probe: invertieren=0010 0100 → +1=0010 0101=37 ✓`,
        },
        {
          title: 'A4: Welche ZK-Zahl ist 1000 0000₂?',
          content: `MSB=1 → negativ. Invertieren: 0111 1111 → +1: 1000 0000.<br>
          Warte — das ist −128! Grenzfall: die negativste 8-Bit-Zahl. Wertebereich: −128 bis +127.`,
        },
        {
          title: "A5: ASCII-Code von 'H' und berechne 'h'",
          content: `'A'=65 → 'H' ist der 8. Buchstabe → 65+7=<strong>72 (0x48)</strong><br>
          'h' = 72+32 = <strong>104 (0x68)</strong> (Bit 5 setzen: 72 XOR 32 = 104)`,
        },
      ])}
      ${renderInfobox({ icon: 'fas fa-graduation-cap', title: 'Prüfungstipp — Zahlensysteme', type: 'success',
        body: `Zweierkomplement und Hex↔Binär sind klassische Abituraufgaben.<br>
               <strong>Lerne auswendig:</strong> 1, 2, 4, 8, 16, 32, 64, 128, 256.<br>
               Merkhilfe: "1 Kilo = 1024 = 2¹⁰"` })}
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