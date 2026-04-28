// pages/projekte/lernzettel/faecher/informatik/themen/digitaltechnik/vhdl-fpga.js
// Informatik 1.5 — VHDL/Verilog & FPGAs

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
  prev: { label: '1.4 Zustandsdiagramme', link: `${BASE}/themen/digitaltechnik/zustandsdiagramme` },
  next: { label: '2.1 CPU-Architektur', link: `${BASE}/themen/mikrocontroller/architektur` },
};

const TABS = [
  { key: 'fpga',      label: '🔌 FPGA-Grundlagen' },
  { key: 'vhdl',      label: '📝 VHDL-Grundstruktur' },
  { key: 'vergleich', label: '⚡ VHDL vs. Verilog' },
  { key: 'beispiele', label: '💻 Codebeispiele' },
  { key: 'aufgabe',   label: '✏ Aufgabe: Ringzähler' },
];

export default class VHDLFpgaPage {
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
            <span>1.5 · VHDL & FPGAs</span>
          </nav>
          <h1 class="lz-sub-title">VHDL/Verilog & FPGAs</h1>
          <p class="lz-sub-subtitle">Hardwarebeschreibungssprachen, FPGA-Architektur, praktische Beispiele</p>
          ${renderTags(['FPGA', 'VHDL', 'Verilog', 'HDL', 'Synthesis', 'Simulation'])}
        </div>
      </section>
      <section class="lz-content-section">
        <div class="lz-section-wrap">
          <nav class="wim-tabs" id="vhdlTabs" aria-label="VHDL & FPGAs">
            ${TABS.map((t, i) => `<button class="wim-tab${i === 0 ? ' active' : ''}" data-wim="${t.key}">${t.label}</button>`).join('')}
          </nav>
          ${this._panelFPGA()}
          ${this._panelVHDL()}
          ${this._panelVergleich()}
          ${this._panelBeispiele()}
          ${this._panelAufgabe()}
        </div>
      </section>
      <section class="lz-content-section" style="padding-top:0;">
        <div class="lz-section-wrap">${renderPageNav(NAV)}</div>
      </section>
      ${footerHTML(this.router)}`;
  }

  _panelFPGA() {
    return `<div class="wim-category active" data-wim-cat="fpga">
      ${renderInfobox({ icon: 'fas fa-microchip', title: 'Was ist ein FPGA?', type: 'info',
        body: `<strong>Field Programmable Gate Array</strong> — ein Chip, dessen interne
               Schaltung <em>nach der Herstellung</em> beliebig konfiguriert werden kann.
               Im Gegensatz zu einem Mikroprozessor führt er keine Software aus,
               sondern <strong>ist</strong> die Schaltung selbst.` })}
      <h3 class="lz-h3">FPGA vs. andere Chips</h3>
      ${renderTable({
        headers: ['Eigenschaft', 'FPGA', 'ASIC', 'Mikrocontroller'],
        rows: [
          ['Programmierbarkeit', '✅ Beliebig rekonfigurierbar', '❌ Einmalig bei Herstellung', '✅ Software-programmierbar'],
          ['Rechengeschwindigkeit', '⚡ Sehr hoch (parallel)', '⚡ Höchste', '🔶 Mittel (sequentiell)'],
          ['Kosten (Prototyp)', '💰 Mittel (ab ~50€)', '💰💰💰 Sehr hoch (>1 Mio€ Maskenkosten)', '💵 Günstig (ab 1€)'],
          ['Kosten (Serienproduktion)', '💰💰 Hoch pro Stück', '💵 Sehr günstig', '💵 Günstig'],
          ['Entwicklungszeit', '🔶 Wochen bis Monate', '🔴 Monate bis Jahre', '🟢 Tage bis Wochen'],
          ['Energieverbrauch', '🔶 Mittel', '🟢 Niedrig', '🟢 Niedrig'],
          ['Anwendung', 'Prototypen, Nischen, Crypto', 'Massenproduktion (CPU, GPU)', 'Embedded Systems'],
        ],
      })}
      <h4 class="lz-h4">FPGA-Architektur: Interne Bausteine</h4>
      ${renderMerkboxGrid([
        { icon: 'fas fa-table-cells', title: 'LUT (Look-Up Table)', text: 'Grundbaustein des FPGA. Programmierbare Wahrheitstabelle mit n Eingängen. LUT-4 kann jede 4-variable boolesche Funktion realisieren.' },
        { icon: 'fas fa-memory', title: 'Flip-Flop-Register', text: 'Jede LUT hat ein D-FF daneben. Für getaktete Logik (Register, Zähler, Zustandsmaschinen).' },
        { icon: 'fas fa-route', title: 'Routing-Matrix', text: 'Programmierbare Verbindungsdrähte. Das Herstellen dieser Verbindungen ist der größte Teil der "Programmierung".' },
        { icon: 'fas fa-database', title: 'Block RAM (BRAM)', text: 'Dedizierter RAM-Speicher im FPGA. Sehr schnell, verschiedene Größen (2Kb – 36Kb pro Block).' },
        { icon: 'fas fa-calculator', title: 'DSP-Blöcke', text: 'Multiplizierer und Addierer in Hardware. Für Signalverarbeitung, Kryptographie, Machine Learning.' },
        { icon: 'fas fa-plug', title: 'I/O-Blöcke', text: 'Konfigurierbare Pins: LVCMOS, LVDS, verschiedene Spannungen. High-Speed-Interfaces bis GHz.' },
      ])}
    </div>`;
  }

  _panelVHDL() {
    return `<div class="wim-category hidden" data-wim-cat="vhdl">
      <h3 class="lz-h3">VHDL-Grundstruktur</h3>
      <p class="lz-prose">
        VHDL (<strong>Very High Speed Integrated Circuit HDL</strong>) ist eine
        Hardware-Beschreibungssprache — kein normales Programm, sondern eine
        <em>Beschreibung</em> digitaler Schaltungen, die synthetisiert wird.
      </p>
      <h4 class="lz-h4">Pflichtstruktur: ENTITY + ARCHITECTURE</h4>
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:1.5rem;border-radius:10px;font-family:monospace;font-size:.85rem;line-height:1.7;">
<span style="color:#60a5fa;">LIBRARY</span> ieee;
<span style="color:#60a5fa;">USE</span> ieee.std_logic_1164.<span style="color:#34d399;">ALL</span>;

<span style="color:#94a3b8;">-- ENTITY: Definition der Schnittstelle (Ein-/Ausgänge)</span>
<span style="color:#60a5fa;">ENTITY</span> und_gatter <span style="color:#60a5fa;">IS</span>
  <span style="color:#60a5fa;">PORT</span> (
    a : <span style="color:#60a5fa;">IN</span>  std_logic;    <span style="color:#94a3b8;">-- Eingang a</span>
    b : <span style="color:#60a5fa;">IN</span>  std_logic;    <span style="color:#94a3b8;">-- Eingang b</span>
    y : <span style="color:#60a5fa;">OUT</span> std_logic     <span style="color:#94a3b8;">-- Ausgang y</span>
  );
<span style="color:#60a5fa;">END</span> und_gatter;

<span style="color:#94a3b8;">-- ARCHITECTURE: Beschreibung des Verhaltens</span>
<span style="color:#60a5fa;">ARCHITECTURE</span> behavioral <span style="color:#60a5fa;">OF</span> und_gatter <span style="color:#60a5fa;">IS</span>
<span style="color:#60a5fa;">BEGIN</span>
  y <= a <span style="color:#60a5fa;">AND</span> b;    <span style="color:#94a3b8;">-- Concurrent Signal Assignment</span>
<span style="color:#60a5fa;">END</span> behavioral;</pre>
      <h4 class="lz-h4">Wichtige VHDL-Konzepte</h4>
      ${renderTable({
        headers: ['Konzept', 'VHDL-Syntax', 'Bedeutung'],
        rows: [
          ['Signal', '<code>SIGNAL s : std_logic;</code>', 'Interne Verbindung, wie Draht'],
          ['Concurrent Assignment', '<code>y <= a AND b;</code>', 'Alle Zeilen laufen "gleichzeitig"'],
          ['Process', '<code>PROCESS(clk) BEGIN ... END PROCESS;</code>', 'Sequentiell ausgewertet, reaktiv auf Signale'],
          ['If-Then-Else', '<code>IF clk = \'1\' THEN ... ELSIF ... END IF;</code>', 'Bedingte Zuweisung im Process'],
          ['Rising Edge', '<code>rising_edge(clk)</code>', 'Erkennung steigende Taktflanke'],
          ['Std_logic', '<code>\'0\', \'1\', \'Z\', \'X\'</code>', '9-wertige Logik (0, 1, HiZ, unknown…)'],
        ],
      })}
      <h4 class="lz-h4">Getaktetes D-FlipFlop in VHDL</h4>
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:1.5rem;border-radius:10px;font-family:monospace;font-size:.85rem;line-height:1.7;">
<span style="color:#60a5fa;">PROCESS</span> (clk, reset)
<span style="color:#60a5fa;">BEGIN</span>
  <span style="color:#60a5fa;">IF</span> reset = <span style="color:#fbbf24;">'1'</span> <span style="color:#60a5fa;">THEN</span>
    q <= <span style="color:#fbbf24;">'0'</span>;                   <span style="color:#94a3b8;">-- Asynchroner Reset</span>
  <span style="color:#60a5fa;">ELSIF</span> rising_edge(clk) <span style="color:#60a5fa;">THEN</span>
    q <= d;                    <span style="color:#94a3b8;">-- Flankengesteuert</span>
  <span style="color:#60a5fa;">END IF</span>;
<span style="color:#60a5fa;">END PROCESS</span>;</pre>
    </div>`;
  }

  _panelVergleich() {
    return `<div class="wim-category hidden" data-wim-cat="vergleich">
      <h3 class="lz-h3">VHDL vs. Verilog — Vergleich</h3>
      ${renderCompare({
        titleA: '📘 VHDL',
        titleB: '📗 Verilog / SystemVerilog',
        listA: [
          'Europäisch/akademischer Standard',
          'Stark typisiert (strenge Typprüfung)',
          'Ausführliche, lesbare Syntax',
          'ENTITY + ARCHITECTURE trennt Interface und Implementierung',
          'Bevorzugt in Europa und Militär/Luft & Raumfahrt',
          'Lernkurve steiler, aber fehlerresistenter',
        ],
        listB: [
          'US-amerikanisch/industrieller Standard',
          'C-ähnliche Syntax (einfacher für Programmierer)',
          'Kompakterer Code',
          'module ... endmodule Struktur',
          'Bevorzugt in der Halbleiterindustrie',
          'SystemVerilog erweitert um OOP, Assertions',
        ],
      })}
      <h4 class="lz-h4">Syntax-Vergleich: Gleiche Schaltung in beiden Sprachen</h4>
      ${renderTable({
        headers: ['Konzept', 'VHDL', 'Verilog'],
        rows: [
          ['Kommentar', '<code>-- Kommentar</code>', '<code>// Kommentar</code>'],
          ['Modul-Deklaration', '<code>ENTITY name IS PORT(...); END;</code>', '<code>module name (input a, output b);</code>'],
          ['Abschluss', '<code>END ARCHITECTURE;</code>', '<code>endmodule</code>'],
          ['Concurrent Assignment', '<code>y <= a AND b;</code>', '<code>assign y = a & b;</code>'],
          ['Sequentieller Block', '<code>PROCESS(clk) BEGIN ... END PROCESS;</code>', '<code>always @(posedge clk) begin ... end</code>'],
          ['If-Statement', '<code>IF x = \'1\' THEN ... END IF;</code>', '<code>if (x == 1) begin ... end</code>'],
          ['Datentypen', '<code>std_logic, integer, boolean</code>', '<code>reg, wire, logic (SV)</code>'],
          ['Bitvektor', '<code>std_logic_vector(3 DOWNTO 0)</code>', '<code>[3:0]</code>'],
          ['Konkatenation', '<code>a & b</code>', '<code>{a, b}</code>'],
          ['Reset', '<code>IF reset = \'1\' THEN q <= \'0\';</code>', '<code>if (reset) q <= 1\'b0;</code>'],
        ],
      })}
      ${renderInfobox({ icon: 'fas fa-info-circle', title: 'Was soll ich lernen?', type: 'info',
        body: `Für das Abitur BW: <strong>VHDL</strong> (da in der Schule meist gelehrt).<br>
               Für Studium/Beruf: Beide lernen! VHDL in Europa/Militär, Verilog/SystemVerilog in der Halbleiterindustrie.<br>
               <strong>SystemVerilog</strong> ist der aktuelle Industriestandard für RTL-Design und Verifikation.` })}
    </div>`;
  }

  _panelBeispiele() {
    return `<div class="wim-category hidden" data-wim-cat="beispiele">
      <h3 class="lz-h3">VHDL-Codebeispiele</h3>
      ${renderAccordion([
        {
          title: 'AND-Gatter (einfachstes Beispiel)',
          content: `<pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:1rem;border-radius:8px;font-family:monospace;font-size:.85rem;line-height:1.7;">
ENTITY and_gate IS
  PORT (a, b : IN std_logic; y : OUT std_logic);
END and_gate;

ARCHITECTURE rtl OF and_gate IS
BEGIN
  y <= a AND b;
END rtl;</pre>`,
        },
        {
          title: 'Volladdierer',
          content: `<pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:1rem;border-radius:8px;font-family:monospace;font-size:.85rem;line-height:1.7;">
ENTITY full_adder IS
  PORT (a, b, cin : IN std_logic;
        sum, cout  : OUT std_logic);
END full_adder;

ARCHITECTURE rtl OF full_adder IS
BEGIN
  sum  <= a XOR b XOR cin;
  cout <= (a AND b) OR (cin AND (a XOR b));
END rtl;</pre>`,
        },
        {
          title: '4-Bit Multiplexer (2:1)',
          content: `<pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:1rem;border-radius:8px;font-family:monospace;font-size:.85rem;line-height:1.7;">
ENTITY mux_4bit IS
  PORT (a, b : IN  std_logic_vector(3 DOWNTO 0);
        sel  : IN  std_logic;
        y    : OUT std_logic_vector(3 DOWNTO 0));
END mux_4bit;

ARCHITECTURE rtl OF mux_4bit IS
BEGIN
  y <= a WHEN sel = '0' ELSE b;
END rtl;</pre>`,
        },
        {
          title: '4-Bit Aufwärtszähler (mit Reset und Enable)',
          content: `<pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:1rem;border-radius:8px;font-family:monospace;font-size:.85rem;line-height:1.7;">
LIBRARY ieee;
USE ieee.std_logic_1164.ALL;
USE ieee.numeric_std.ALL;

ENTITY counter_4bit IS
  PORT (clk, reset, en : IN  std_logic;
        q              : OUT std_logic_vector(3 DOWNTO 0));
END counter_4bit;

ARCHITECTURE rtl OF counter_4bit IS
  SIGNAL cnt : unsigned(3 DOWNTO 0) := (OTHERS => '0');
BEGIN
  PROCESS (clk, reset)
  BEGIN
    IF reset = '1' THEN
      cnt <= (OTHERS => '0');
    ELSIF rising_edge(clk) THEN
      IF en = '1' THEN
        cnt <= cnt + 1;
      END IF;
    END IF;
  END PROCESS;
  q <= std_logic_vector(cnt);
END rtl;</pre>`,
        },
      ])}
    </div>`;
  }

  _panelAufgabe() {
    return `<div class="wim-category hidden" data-wim-cat="aufgabe">
      <h3 class="lz-h3">Aufgabe: 4-Bit Ringzähler</h3>
      ${renderInfobox({ icon: 'fas fa-tasks', title: 'Aufgabenstellung', type: 'info',
        body: `Schreibe einen <strong>4-Bit Ringzähler</strong> in VHDL.<br><br>
               Ein Ringzähler hat genau eine 1, die im Kreis wandert:<br>
               <code>0001 → 0010 → 0100 → 1000 → 0001 → ...</code><br><br>
               Anforderungen:<br>
               • Asynchroner Reset (setzt auf 0001 zurück)<br>
               • Enable-Eingang (en=1 zählt, en=0 hält)<br>
               • 4 Ausgänge q(3 DOWNTO 0)` })}
      <h4 class="lz-h4">Zustandsdiagramm des Ringzählers</h4>
      ${renderTable({
        headers: ['Zustand', 'Q3Q2Q1Q0', 'Folgezustand', 'Folge-Q'],
        rows: [
          ['S0 (Start)', '0001', 'S1', '0010'],
          ['S1', '0010', 'S2', '0100'],
          ['S2', '0100', 'S3', '1000'],
          ['S3', '1000', 'S0', '0001'],
        ],
      })}
      ${renderAccordion([
        {
          title: '💡 Lösungshinweis',
          content: `<p>Das Schlüsselprinzip: In VHDL kann man Bitrotation mit Vektorschlicing machen:<br>
          <code>reg <= reg(2 DOWNTO 0) & reg(3);</code><br>
          Das nimmt die Bits 2,1,0 und hängt Bit 3 dahinter — Rotation nach links!</p>`,
        },
        {
          title: '✅ Musterlösung (VHDL)',
          content: `<pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:1.5rem;border-radius:10px;font-family:monospace;font-size:.85rem;line-height:1.7;">
LIBRARY ieee;
USE ieee.std_logic_1164.ALL;

ENTITY ring_counter IS
  PORT (
    clk   : IN  std_logic;
    reset : IN  std_logic;
    en    : IN  std_logic;
    q     : OUT std_logic_vector(3 DOWNTO 0)
  );
END ring_counter;

ARCHITECTURE behavioral OF ring_counter IS
  SIGNAL reg : std_logic_vector(3 DOWNTO 0) := "0001";
BEGIN
  PROCESS(clk, reset)
  BEGIN
    IF reset = '1' THEN
      reg <= "0001";               -- Asynchroner Reset auf 0001
    ELSIF rising_edge(clk) THEN
      IF en = '1' THEN
        reg <= reg(2 DOWNTO 0) & reg(3);  -- Linksrotation
      END IF;
    END IF;
  END PROCESS;

  q <= reg;
END behavioral;</pre>`,
        },
        {
          title: '🔁 Verilog-Variante (zum Vergleich)',
          content: `<pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:1.5rem;border-radius:10px;font-family:monospace;font-size:.85rem;line-height:1.7;">
module ring_counter(
  input       clk, reset, en,
  output reg [3:0] q
);
  always @(posedge clk or posedge reset) begin
    if (reset)
      q <= 4'b0001;
    else if (en)
      q <= {q[2:0], q[3]};  // Linksrotation (Konkatenation)
  end
endmodule</pre>`,
        },
      ])}
      ${renderInfobox({ icon: 'fas fa-graduation-cap', title: 'VHDL für die Prüfung', type: 'success',
        body: `<strong>Muss beherrscht werden:</strong><br>
               • ENTITY/ARCHITECTURE-Struktur aufschreiben<br>
               • PROCESS mit rising_edge(clk) und asynchronem Reset<br>
               • Concurrent vs. Sequential Assignments<br>
               • std_logic und std_logic_vector<br>
               <strong>Simulation:</strong> ModelSim, GHDL (kostenlos), EDA Playground (online)` })}
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