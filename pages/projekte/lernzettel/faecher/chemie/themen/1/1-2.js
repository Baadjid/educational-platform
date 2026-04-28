// pages/projekte/lernzettel/faecher/chemie/themen/1/1-2.js
// Kapitel 1.2 — Denk- und Arbeitsweisen in der Chemie
// 1.2.1 Begriffe und Größen
// 1.2.2 Gesetze, Modelle und Theorien in der Chemie
// 1.2.3 Erkenntnisgewinn in der Chemie
// 1.2.4 Vorbereitung, Durchführung und Auswertung chemischer Experimente

import { initScrollReveal }  from '../../../../../../../shared/js/index.js';
import { footerHTML }         from '../../../../../../../components/Footer.js';
import { i18n }               from '../../../../../../../shared/js/i18n.js';
import { renderWimSection, initWimTabs } from '../../../../../../../components/WimSection.js';
import {
  ensureComponentsCSS,
  renderInfobox,
  renderTable,
  renderMerkboxGrid,
  renderVTimeline,
  renderSubhead,
  renderTags,
  renderAccordion,
  renderCompare,
  renderFormulaBox,
  initInteractive,
} from '../../../../js/components/components.js';
import { renderPageNav } from '../../../../js/components/subnav.js';
import { COLOR, COLOR_RGB, BASE } from '../../chemie.js';

// ── WimTab-System (1:1 nach wim-tabs.js / wim.css) ──────────────
const TABS = [
  { key: '121', icon: 'fas fa-ruler-combined', label: '1.2.1 Begriffe & Größen'        },
  { key: '122', icon: 'fas fa-cube',           label: '1.2.2 Gesetze, Modelle, Theorien'},
  { key: '123', icon: 'fas fa-search',         label: '1.2.3 Erkenntnisgewinn'          },
  { key: '124', icon: 'fas fa-flask',          label: '1.2.4 Experimentieren'           },
];

function buildWimHTML(contentFn) {
  const nav = TABS.map((t, i) => `
    <button class="wim-tab${i === 0 ? ' active' : ''}" data-wim="${t.key}" role="tab">
      <i class="${t.icon}"></i><span>${t.label}</span>
    </button>`).join('');
  const panels = TABS.map((t, i) => `
    <div class="wim-category${i === 0 ? ' active' : ' hidden'}" data-wim-cat="${t.key}" role="tabpanel">
      ${contentFn(t.key)}
    </div>`).join('');
  return `<nav class="wim-tabs" role="tablist" id="tabs12">${nav}</nav>${panels}`;
}

// ════════════════════════════════════════════════════════════════
export default class Chemie_1_2 {
  constructor(router) { this.router = router; }

  render() {
    ensureComponentsCSS();
    [
      ['lernzettel.css', 'pages/projekte/lernzettel/styles/lernzettel.css'],
      ['sub.css', 'pages/projekte/lernzettel/styles/sub.css'],
      ['wim.css',        'shared/styles/components/wim.css'],
    ].forEach(([id, href]) => {
      if (!document.querySelector(`link[href*="${id}"]`)) {
        const l = document.createElement('link'); l.rel = 'stylesheet'; l.href = href;
        document.head.appendChild(l);
      }
    });
    const el = document.createElement('div');
    el.className = 'page page-chemie page-chemie-sub';
    el.style.setProperty('--lz-accent', COLOR);
    el.style.setProperty('--lz-accent-rgb', COLOR_RGB);
    el.innerHTML = this._html();
    return el;
  }

  _html() { return `
    <section class="lz-sub-hero" style="--kap-color:${COLOR};--kap-color-rgb:${COLOR_RGB};">
      <div class="lz-sub-hero-inner">
        <div class="lz-sub-hero-orb" aria-hidden="true"></div>
        <div class="lz-sub-breadcrumb">
          <button data-link="${BASE}" class="lz-bread-link">Chemie</button>
          <i class="fas fa-chevron-right"></i><span>Kapitel 1</span>
          <i class="fas fa-chevron-right"></i><span>1.2</span>
        </div>
        <h1 class="lz-sub-title">
          Denk- und Arbeitsweisen<br><em>in der Chemie</em>
        </h1>
        <p class="lz-sub-desc">
          Begriffe und Größen · Gesetze, Modelle und Theorien ·
          Erkenntnisgewinn · Vorbereitung, Durchführung und Auswertung von Experimenten
        </p>
        ${renderTags(['Kap. 1.2', 'Methodik', 'Wissenschaftstheorie', 'SI-Einheiten', 'Experiment'])}
      </div>
    </section>

    <section class="lz-content-section">
      <div class="lz-section-wrap">
        ${buildWimHTML(k => {
          if (k === '121') return this._begriffe();
          if (k === '122') return this._gesetze();
          if (k === '123') return this._erkenntnis();
          if (k === '124') return this._experiment();
          return '';
        })}
      </div>
    </section>

    <section class="lz-content-section" style="padding:1.5rem 0 3rem;">
      <div class="lz-section-wrap">
        ${renderPageNav({
          prev: { label: '1.1 Chemie im Kanon',  link: `${BASE}/themen/1/1-1` },
          next: { label: '1.3 Stöchiometrie',    link: `${BASE}/themen/1/1-3` },
        }, BASE)}
      </div>
    </section>

    ${footerHTML(this.router)}
  `; }

  // ══════════════════════════════════════════════════════════
  // 1.2.1 — Begriffe und Größen
  // ══════════════════════════════════════════════════════════
  _begriffe() { return `
    ${renderSubhead('1.2.1 — Begriffe und Größen')}

    <h3 class="lz-h3">Das Internationale Einheitensystem (SI)</h3>
    <p class="lz-prose">
      Wissenschaftliche Kommunikation erfordert präzise, international einheitliche
      Größenangaben. Das <strong>Système International d'Unités (SI)</strong>,
      beschlossen 1960 und zuletzt 2019 grundlegend revidiert, definiert
      sieben Basisgrößen, aus denen alle anderen abgeleitet werden.
      Jede physikalische Größe besteht aus <strong>Zahlenwert × Einheit</strong>.
      Einheiten immer mitschreiben — eine Zahl ohne Einheit ist in der
      Naturwissenschaft wertlos.
    </p>

    ${renderTable({
      headers: ['SI-Basisgröße', 'Symbol', 'Einheit', 'Einheitszeichen', 'Definition (seit 2019)'],
      rows: [
        ['Länge',          'l',    'Meter',    'm',   'Lichtlaufstrecke in 1/299 792 458 s'],
        ['Masse',          'm',    'Kilogramm','kg',  'Festgelegt durch Planck-Konstante h = 6,626 070 15 · 10⁻³⁴ J·s'],
        ['Zeit',           't',    'Sekunde',  's',   '9 192 631 770 Perioden der Cs-133-Hyperfeinstruktur'],
        ['Stromstärke',    'I',    'Ampere',   'A',   'Festgelegt durch Elementarladung e = 1,602 176 634 · 10⁻¹⁹ C'],
        ['Temperatur',     'T',    'Kelvin',   'K',   'Festgelegt durch Boltzmann-Konstante k_B = 1,380 649 · 10⁻²³ J/K'],
        ['Stoffmenge',     'n',    'Mol',      'mol', 'Festgelegt durch Avogadro-Konstante Nₐ = 6,022 140 76 · 10²³ mol⁻¹'],
        ['Lichtstärke',    'I_v',  'Candela',  'cd',  'Festgelegt durch photometrisches Strahlungsäquivalent'],
      ],
      highlight: [4, 5],
    })}

    <h3 class="lz-h3" style="margin-top:1.75rem;">Die wichtigsten chemischen Größen</h3>

    ${renderTable({
      headers: ['Größe', 'Symbol', 'SI-Einheit', 'Gebräuchlich in Chemie', 'Zentralformel', 'Hinweis'],
      rows: [
        ['Masse',              'm',   'kg',         'g, mg, µg',          'm = n · M',                 '1 kg = 1000 g; in Chemierechnungen stets g'],
        ['Stoffmenge',         'n',   'mol',         'mmol, µmol, nmol',   'n = m/M = N/Nₐ = c·V',     'Brücke zwischen Teilchen- und Massenebene'],
        ['Molmasse',           'M',   'kg/mol',      'g/mol',              'M = m/n',                   'Numerisch gleich Mᵣ (dimensionslos)'],
        ['Teilchenanzahl',     'N',   '—',           '—',                  'N = n · Nₐ',                '—'],
        ['Avogadro-Konstante', 'Nₐ',  'mol⁻¹',      '—',                  'Nₐ = 6,022 · 10²³ mol⁻¹',  'Exakt seit SI-Reform 2019'],
        ['Konzentration',      'c',   'mol/m³',      'mol/L = mol/dm³',    'c = n/V',                   '1 mol/L = 1 M; V immer in Liter einsetzen!'],
        ['Massenkonzentration','β',   'kg/m³',       'g/L',                'β = m/V',                   'Nicht mit c verwechseln!'],
        ['Massenanteil',       'w',   'dimensionslos','%',                  'w = m_i/m_ges',             'w(NaCl) = 0,09 = 9 %'],
        ['Volumenanteil',      'φ',   'dimensionslos','%',                  'φ = V_i/V_ges',             'Achtung: Volumenkontrakion bei Mischungen!'],
        ['Druck',              'p',   'Pa',          'bar, hPa, atm',      'p = F/A',                   '1 bar = 10⁵ Pa; 1 atm = 101 325 Pa'],
        ['Temperatur',         'T',   'K',           '°C',                 'T [K] = ϑ [°C] + 273,15',  'T immer in K bei Gasgesetzen/Thermodynamik!'],
        ['Enthalpie',          'H',   'J',           'kJ, kJ/mol',         'ΔH = Q_p (bei const. p)',   'Zustandsfunktion: unabhängig vom Reaktionsweg'],
        ['Entropie',           'S',   'J/K',         'J/(mol·K)',           'ΔS = Q_rev/T',              'Maß für Unordnung; steigt beim Schmelzen, Verdampfen'],
        ['Freie Enthalpie',    'G',   'J',           'kJ, kJ/mol',         'ΔG = ΔH − T·ΔS',           'ΔG < 0: spontan; ΔG = 0: Gleichgewicht'],
      ],
      highlight: [1, 5, 10],
    })}

    ${renderInfobox({
      type: 'blue', icon: 'fas fa-atom', title: 'Das Mol — die wichtigste Einheit der Chemie',
      body: `Das Mol verbindet die <strong>submikroskopische Teilchenebene</strong>
             mit der <strong>makroskopisch wägbaren Laborwelt</strong>:<br>
             1 mol = 6,022 · 10²³ Teilchen (Atome, Moleküle, Ionen, Elektronen — je nach Kontext).<br><br>
             <strong>Warum gerade diese Zahl?</strong><br>
             Nₐ ist so gewählt, dass die Molmasse M in g/mol numerisch gleich der
             relativen Atommasse Aᵣ ist (aus dem PSE ablesbar).<br>
             Beispiel: Aᵣ(C) = 12,011 → M(C) = 12,011 g/mol → 1 mol C = 12,011 g.<br><br>
             <strong>Rechenbeispiele:</strong><br>
             1 mol H₂O: M = 2·1,008 + 15,999 = 18,015 g/mol → 18,015 g enthält 6,022·10²³ Moleküle<br>
             1 mol NaCl: M = 22,990 + 35,453 = 58,44 g/mol → 58,44 g enthält 6,022·10²³ Formeleinheiten<br>
             1 mol Elektronen: F = Nₐ·e = 96 485 C (Faraday-Konstante)`,
    })}

    ${renderFormulaBox({
      label: 'Das Mol — alle Umrechnungen',
      formula: 'n = m/M = N/Nₐ = V/Vₘ = c·V',
      desc: 'n [mol] · m [g] · M [g/mol] · N [Teilchen] · Nₐ = 6,022·10²³ mol⁻¹ · V [L] · Vₘ [L/mol] · c [mol/L]',
    })}

    <h3 class="lz-h3" style="margin-top:1.75rem;">Intensive vs. Extensive Größen</h3>
    <p class="lz-prose">
      Eine grundlegende Unterscheidung in der Thermodynamik und bei Stoffbeschreibungen:
    </p>

    ${renderTable({
      headers: ['Typ', 'Definition', 'Merkmal', 'Chemische Beispiele'],
      rows: [
        ['Intensiv',
         'Unabhängig von der Stoffmenge — charakterisieren den Stoff selbst',
         'Wert ändert sich nicht, wenn man das System verdoppelt',
         'Dichte ρ, Temperatur T, Druck p, Konzentration c, Molmasse M, Schmelzpunkt, Siedepunkt, Brechungsindex, elektrische Leitfähigkeit (spezifisch)'],
        ['Extensiv',
         'Proportional zur Stoffmenge — addieren sich bei Vereinigung zweier gleicher Systeme',
         'Wert verdoppelt sich, wenn man das System verdoppelt',
         'Masse m, Volumen V, Stoffmenge n, Wärmekapazität C, Energie E, Enthalpie H, Entropie S, elektrische Ladung Q'],
      ],
    })}

    <h3 class="lz-h3" style="margin-top:1.75rem;">Vorsätze im SI-System</h3>

    ${renderTable({
      headers: ['Vorsatz', 'Symbol', 'Faktor', 'Beispiel in Chemie'],
      rows: [
        ['Giga',   'G',  '10⁹',   'G mol/L — sehr ungewöhnlich; eher in Physik'],
        ['Mega',   'M',  '10⁶',   'MΩ (Megaohm) in Elektrochemie'],
        ['Kilo',   'k',  '10³',   'kg (Kilogramm), kJ/mol (Kilojoule pro Mol)'],
        ['Hekto',  'h',  '10²',   'hPa (Hektopascal) — Luftdruck'],
        ['Dezi',   'd',  '10⁻¹',  'dm³ = Liter'],
        ['Zenti',  'c',  '10⁻²',  'cm (Zentimeter)'],
        ['Milli',  'm',  '10⁻³',  'mmol, mL, mg'],
        ['Mikro',  'µ',  '10⁻⁶',  'µmol (sehr geringe Enzymmengen), µg/L (Spurenanalytik)'],
        ['Nano',   'n',  '10⁻⁹',  'nmol (Peptide, Hormonspiegel), nm (Wellenlänge UV/Vis)'],
        ['Pico',   'p',  '10⁻¹²', 'pmol (Proteomics, Massenspektrometrie)'],
      ],
      highlight: [2, 6, 7],
    })}

    ${renderInfobox({
      type: 'warning', icon: 'fas fa-exclamation-triangle', title: 'Die häufigsten Einheitenfehler im Abitur',
      body: `<strong>①  c in mol/L, nicht mol/mL!</strong><br>
             1 mol/mL = 1000 mol/L — ein Faktor-1000-Fehler, der das Ergebnis ruiniert.
             Immer V in Liter (dm³) einsetzen bei c = n/V.<br><br>
             <strong>② T immer in Kelvin</strong> bei Gasgesetzen, Arrhenius, ΔG = ΔH − T·ΔS.<br>
             Wer 25 °C statt 298,15 K einsetzt, bekommt falsche Ergebnisse.<br><br>
             <strong>③ M in g/mol, nicht kg/mol</strong> in Alltagsrechnungen
             (obwohl SI kg/mol wäre; in Chemie ist g/mol Standard).<br><br>
             <strong>④ Einheitenprobe immer machen:</strong>
             n = m/M → g / (g/mol) = g · mol/g = mol ✓<br>
             c = n/V → mol / L = mol/L ✓`,
    })}
  `; }

  // ══════════════════════════════════════════════════════════
  // 1.2.2 — Gesetze, Modelle und Theorien
  // ══════════════════════════════════════════════════════════
  _gesetze() { return `
    ${renderSubhead('1.2.2 — Gesetze, Modelle und Theorien in der Chemie')}

    <h3 class="lz-h3">Die Hierarchie naturwissenschaftlichen Wissens</h3>
    <p class="lz-prose">
      Naturwissenschaftliches Wissen ist nicht gleichwertig — es ist in einer
      <strong>epistemischen Hierarchie</strong> geordnet, die unterschiedliche
      Grade der empirischen Absicherung und erklärenden Kraft widerspiegelt.
    </p>

    ${renderTable({
      headers: ['Stufe', 'Geltungsanspruch', 'Entstehung', 'Funktion', 'Chemisches Beispiel'],
      rows: [
        ['Beobachtung',
         'Unmittelbar, aber perspektivisch',
         'Sinneswahrnehmung, Messung',
         'Rohdaten für die Wissenschaft',
         '„Eisenstück in Salzsäure: Gasentwicklung; Lösung erwärmt sich"'],
        ['Hypothese',
         'Vorläufig, noch nicht ausreichend geprüft',
         'Kreative Idee; muss falsifizierbar sein (Popper)',
         'Ausgangspunkt für Experimente',
         'Dalton 1803: „Atome sind unteilbare, harte Kugeln"'],
        ['Empirisches Gesetz',
         'Gut gesichert durch viele Experimente; beschreibt WAS passiert',
         'Induktiv aus wiederholten Beobachtungen',
         'Vorhersage von Messwerten ohne tiefere Erklärung',
         'Massenerhaltung (Lavoisier); Boyle-Mariotte p·V = const.; Beer-Lambert-Gesetz'],
        ['Modell',
         'Vereinfachung der Realität; nützlich im Gültigkeitsbereich',
         'Abstraktion; deduktive Vorhersagen möglich',
         'Erklärung und Vorhersage auf anschaulicher Ebene',
         'Kugelmodell (Stöchiometrie); Orbitalmodell; VSEPR; Lewis-Formel; MWG'],
        ['Theorie',
         'Umfassendes, gut bewährtes Erklärungssystem; erklärt WARUM',
         'Synthese vieler Gesetze und Modelle; quantitative Vorhersagen',
         'Einheitliche Erklärung vieler Phänomene auf fundamentaler Ebene',
         'Quantenmechanik (Atombau, Bindung); Thermodynamik; MO-Theorie; Kinetische Gastheorie'],
      ],
      highlight: [2, 3, 4],
    })}

    ${renderInfobox({
      type: '', icon: 'fas fa-cube', title: 'Modelle in der Chemie — Gültigkeitsbereiche',
      body: `Modelle sind <strong>bewusste Vereinfachungen</strong> — sie sind nicht „falsch",
             sondern haben einen <em>definierten Gültigkeitsbereich</em>:<br><br>
             <strong>Dalton-Kugelmodell:</strong> Erklärt Massenerhaltung und konstante Proportionen ✓ —
             Aber: erklärt keine Spektrallinien, keine Bindungswinkel ✗<br>
             <strong>Bohr-Modell:</strong> Erklärt H-Spektrum exakt ✓ —
             Aber: versagt bei Mehrelektronenatomen ✗<br>
             <strong>Quantenmechanisches Modell:</strong> Erklärt alle Spektren, Bindungslängen,
             -winkel und -energien ✓ — Aber: sehr abstrakt, kaum anschaulich ✗<br><br>
             <em>Regel: Das einfachste Modell wählen, das die Fragestellung beantwortet —
             aber das komplexere verwenden, wenn das einfache versagt.</em>`,
    })}

    <h3 class="lz-h3" style="margin-top:1.75rem;">Fundamentale Gesetze der Chemie</h3>

    ${renderAccordion([
      {
        title: 'Gesetz der Massenerhaltung (Lavoisier, 1789)',
        content: `<p class="lz-prose">In einem <strong>geschlossenen System</strong> bleibt
                  die Gesamtmasse bei jeder chemischen Reaktion konstant:
                  <strong>m(Edukte) = m(Produkte)</strong>.</p>
                  <p class="lz-prose"><strong>Teilchenebene:</strong> Atome werden
                  bei chemischen Reaktionen weder erzeugt noch vernichtet —
                  sie werden nur neu angeordnet und kombiniert.
                  Dies ist die Grundlage für das Bilanzieren von Reaktionsgleichungen
                  und die stöchiometrische Rechnung.</p>
                  <p class="lz-prose"><strong>Historische Bedeutung:</strong>
                  Vor Lavoisier glaubte man an Phlogiston — einen unsichtbaren
                  „Brennstoff", der beim Verbrennen entweicht. Lavoisier widerlegte
                  dies durch präzises Wiegen: Metalle nehmen beim Verbrennen Masse zu
                  (Oxidation mit Sauerstoff).</p>`,
      },
      {
        title: 'Gesetz der konstanten Proportionen (Proust, 1799)',
        content: `<p class="lz-prose">Eine reine chemische Verbindung setzt sich immer
                  aus denselben Elementen in denselben <strong>konstanten Massenverhältnissen</strong>
                  zusammen, unabhängig von der Herstellungsmethode, dem Herkunftsort
                  oder der eingesetzten Menge.</p>
                  <p class="lz-prose"><strong>Beispiele:</strong><br>
                  H₂O: immer 88,81 % O und 11,19 % H (Massenprozent)<br>
                  NaCl: immer 39,34 % Na und 60,66 % Cl<br>
                  CO₂: immer 72,73 % O und 27,27 % C</p>
                  <p class="lz-prose"><strong>Ausnahmen:</strong> Nichtstöchiometrische
                  Verbindungen (Bertholide), z.B. Fe₁₋ₓO (Wüstit) — ein Kristall mit
                  Fehlstellen. Diese sind jedoch Festkörper-Phänomene, keine
                  molekularen Verbindungen.</p>`,
      },
      {
        title: 'Gesetz der multiplen Proportionen (Dalton, 1803)',
        content: `<p class="lz-prose">Wenn zwei Elemente mehr als eine Verbindung
                  miteinander bilden, stehen die Massen des einen Elements
                  (bei gleicher Masse des anderen) in einem
                  <strong>einfachen ganzzahligen Verhältnis</strong>.</p>
                  <p class="lz-prose"><strong>Beispiele:</strong><br>
                  CO und CO₂: Bei gleicher C-Masse sind die O-Massen im Verhältnis 1:2<br>
                  NO und NO₂: O-Massen wie 1:2<br>
                  H₂O und H₂O₂: O-Massen wie 1:2<br>
                  SO₂ und SO₃: O-Massen wie 2:3</p>
                  <p class="lz-prose">Dieses Gesetz war eine starke Stütze für
                  Daltons Atomtheorie: Es folgt zwingend aus der Existenz diskreter
                  Atome mit ganzzahligen Stöchiometrien.</p>`,
      },
      {
        title: 'Massenwirkungsgesetz (Guldberg & Waage, 1864)',
        content: `<p class="lz-prose">Für die reversible Reaktion aA + bB ⇌ cC + dD
                  gilt im chemischen Gleichgewicht:</p>
                  <div class="lz-formula-box">
                    <div class="lz-formula-main">K_c = [C]<sup>c</sup>·[D]<sup>d</sup> / ([A]<sup>a</sup>·[B]<sup>b</sup>)</div>
                    <div class="lz-formula-desc">
                      [X] = Gleichgewichtskonzentration in mol/L ·
                      feste Stoffe (Aktivität = 1) und reines Lösungsmittel werden nicht berücksichtigt ·
                      K_c ist temperaturabhängig, aber druck- und konzentrationsunabhängig
                    </div>
                  </div>
                  <p class="lz-prose"><strong>Interpretation von K_c:</strong><br>
                  K_c ≫ 1: Gleichgewicht auf Produktseite (hohe Ausbeute)<br>
                  K_c ≈ 1: Edukte und Produkte nebeneinander<br>
                  K_c ≪ 1: Gleichgewicht auf Eduktseite (geringe Ausbeute)</p>`,
      },
      {
        title: 'Hess\'scher Wärmesatz (Hess, 1840)',
        content: `<p class="lz-prose">Die Reaktionsenthalpie ΔH einer chemischen Reaktion
                  ist <strong>unabhängig vom Reaktionsweg</strong> — nur Anfangs-
                  und Endzustand bestimmen ΔH. Die Enthalpie ist eine Zustandsfunktion.</p>
                  <p class="lz-prose"><strong>Anwendung:</strong><br>
                  ΔH_R = Σ ΔH_f°(Produkte) − Σ ΔH_f°(Edukte)<br>
                  (Standardbildungsenthalpien ΔH_f° aus Tabellen; Definition:
                  ΔH_f° der stabilen Elementform = 0 kJ/mol)</p>
                  <p class="lz-prose"><strong>Praktische Bedeutung:</strong>
                  Viele Reaktionsenthalpien lassen sich nicht direkt messen
                  (z.B. Verbrennung zu CO, nicht direkt zu CO₂).
                  Mit Hess kann man indirekt rechnen.</p>`,
      },
      {
        title: 'Faraday\'sche Gesetze der Elektrolyse (Faraday, 1833)',
        content: `<p class="lz-prose"><strong>1. Faraday'sches Gesetz:</strong>
                  Die bei der Elektrolyse abgeschiedene Masse m ist proportional
                  zur geflossenen Ladungsmenge Q = I · t.</p>
                  <p class="lz-prose"><strong>2. Faraday'sches Gesetz:</strong>
                  Die Massen verschiedener Stoffe, die durch gleiche Ladungsmengen
                  abgeschieden werden, verhalten sich wie ihre molaren Massen
                  geteilt durch die Ladungszahl z.</p>
                  <div class="lz-formula-box">
                    <div class="lz-formula-main">m = (M · I · t) / (z · F)</div>
                    <div class="lz-formula-desc">F = Faraday-Konstante = 96 485 C/mol = Nₐ · e ·
                    M [g/mol] · I [A] · t [s] · z = Ladungszahl</div>
                  </div>`,
      },
    ])}
  `; }

  // ══════════════════════════════════════════════════════════
  // 1.2.3 — Erkenntnisgewinn
  // ══════════════════════════════════════════════════════════
  _erkenntnis() { return `
    ${renderSubhead('1.2.3 — Erkenntnisgewinn in der Chemie')}

    <h3 class="lz-h3">Der naturwissenschaftliche Erkenntnisweg</h3>
    <p class="lz-prose">
      Naturwissenschaftliche Erkenntnisse entstehen nicht zufällig —
      sie folgen einem systematischen, <strong>iterativen Prozess</strong>
      der ständigen Wechselwirkung zwischen Theorie und Experiment.
      Karl Popper (1934) formulierte das grundlegende erkenntnistheoretische
      Prinzip: Wissenschaft schreitet durch <em>Falsifikation</em> voran,
      nicht durch Verifikation.
    </p>

    ${renderVTimeline([
      {
        year:  '① Phänomen / Beobachtung',
        title: 'Theoriefreie, genaue Beschreibung',
        text:  `Qualitative und quantitative Beschreibung des Phänomens
                ohne Interpretation oder Erklärung.
                Gute Beobachtungen sind präzise, reproduzierbar und messbar.
                Beispiel: „Beim Versetzen einer farblosen wässrigen Lösung A
                mit Lösung B entsteht sofort ein leuchtend gelber Niederschlag.
                Die Lösung erwärmt sich um 2,3 °C."`,
      },
      {
        year:  '② Wissenschaftliche Frage',
        title: 'Präzise, beantwortbare Fragestellung',
        text:  `Aus der Beobachtung wird eine spezifische Frage abgeleitet,
                die prinzipiell experimentell beantwortbar ist.
                Beispiel: „Welche Ionen bilden den gelben Niederschlag?
                Wie lautet die Nettoreaktionsgleichung?
                Wie groß ist das Löslichkeitsprodukt K_L?"`,
      },
      {
        year:  '③ Hypothese',
        title: 'Falsifizierbare Vorhersage (Wenn-Dann-Aussage)',
        text:  `Eine überprüfbare Vorhersage, die aus bekannten Theorien oder
                Gesetzen abgeleitet wird. Muss experimentell widerlegbar sein.
                Nicht-falsifizierbar = nicht wissenschaftlich (Popper).
                Beispiel: „Wenn die Lösung Pb²⁺-Ionen enthält,
                dann fällt mit CrO₄²⁻ gelbes PbCrO₄ aus (K_L = 2,8·10⁻¹³).
                Der Niederschlag ist unlöslich in Essigsäure, aber löslich in
                Salpetersäure."`,
      },
      {
        year:  '④ Experiment',
        title: 'Kontrollierter, reproduzierbarer Versuch',
        text:  `Nur eine Variable verändern, alle anderen konstant halten
                (ceteris paribus). Blindversuch / Negativkontrolle mitführen.
                Quantitative Messung mit Angabe von Einheiten und
                Messungenauigkeit. Mindestens dreifache Wiederholung
                für statistische Absicherung. Protokoll sofort und vollständig führen.`,
      },
      {
        year:  '⑤ Auswertung und Interpretation',
        title: 'Systematische Datenanalyse',
        text:  `Rohdaten aufbereiten: Tabellen, Diagramme (x/y-Achsen mit Einheiten!),
                Mittelwert und Standardabweichung.
                Hypothese mit Ergebnis vergleichen: Bestätigt (→ weiteres Testen
                nötig, nie endgültig „bewiesen") oder widerlegt (→ neue Hypothese
                formulieren). Fehlerquellen systematisch analysieren.`,
      },
      {
        year:  '⑥ Schluss: Gesetz / Modell / Theorie',
        title: 'Einordnung in den wissenschaftlichen Kontext',
        text:  `Gut bewährte Hypothesen werden in den Kanon des Wissens integriert.
                Publikation in begutachteten Fachzeitschriften (Peer-Review).
                Unabhängige Reproduktion durch andere Gruppen.
                Wissenschaft ist selbstkorrigierend: Irrtümer werden langfristig
                erkannt und revidiert (Beispiel: Phlogiston → Sauerstofftheorie).`,
      },
    ])}

    ${renderInfobox({
      type: 'blue', icon: 'fas fa-brain', title: 'Falsifizierbarkeit — das Kriterium wissenschaftlicher Aussagen',
      body: `Karl Popper (1934, „Logik der Forschung") formulierte:
             Eine Aussage ist genau dann <strong>wissenschaftlich</strong>,
             wenn es im Prinzip möglich ist, sie durch ein Experiment zu widerlegen.<br><br>
             <strong>Falsifizierbar (wissenschaftlich):</strong><br>
             „Alle Säuren reagieren mit Natriumcarbonat unter CO₂-Entwicklung."
             → Falsifizierbar durch einen einzigen Gegenfall (z.B. sehr schwache Säure).<br><br>
             <strong>Nicht falsifizierbar (pseudowissenschaftlich):</strong><br>
             „Homöopathische Mittel wirken, wenn man daran glaubt."
             → Kann durch kein Experiment widerlegt werden (Ad-hoc-Immunisierung).<br><br>
             <strong>Konsequenz:</strong> Keine Anzahl von Bestätigungen kann eine
             Theorie endgültig beweisen. Ein einziges klar negatives Experiment
             kann sie widerlegen. Deshalb ist Wissenschaft immer vorläufig.`,
    })}

    <h3 class="lz-h3" style="margin-top:1.75rem;">Beobachtung vs. Deutung — im Abitur entscheidend</h3>

    ${renderTable({
      headers: ['Beobachtung (makroskopisch)', 'Deutung (submikroskopisch + symbolisch)'],
      rows: [
        ['Weißer, käsiger Niederschlag beim Versetzen mit AgNO₃-Lösung',
         'Ag⁺(aq) + Cl⁻(aq) → AgCl(s)↓ — schwerlösliches Ionengitter fällt aus (K_L(AgCl) = 1,8·10⁻¹⁰ mol²/L²)'],
        ['Violette Lösung (KMnO₄) entfärbt sich beim Zutropfen von Na₂SO₃',
         'MnO₄⁻ (Ox., +VII) + 5e⁻ + 8H⁺ → Mn²⁺ (farblos, +II) + 4H₂O; E°(MnO₄⁻/Mn²⁺) = +1,51 V'],
        ['Gasentwicklung beim Eintropfen von Salzsäure auf Marmor',
         'CaCO₃(s) + 2H⁺(aq) → Ca²⁺(aq) + H₂O + CO₂(g)↑; CO₂ weicht als Gas aus → GG auf Produktseite'],
        ['Temperaturanstieg der Lösung (Kalorimeter: +ΔT)',
         'Exotherme Reaktion: ΔH < 0; freigesetzte Bindungsenergie übersteigt zugeführte; Q = m·c_spez·ΔT'],
        ['Blaufärbung der Stärkelösung bei I₂-Zugabe',
         'I₃⁻-Ionen lagern sich in die Hohlräume der helikalen Stärke-Amylose ein → Charge-Transfer-Komplex → blaue Farbe'],
        ['Gelbe Farbe einer wässrigen Cr₂O₇²⁻-Lösung verschwindet im basischen Bereich',
         '2 CrO₄²⁻ (gelb) + 2H⁺ ⇌ Cr₂O₇²⁻ (orange) + H₂O; im Basischen → CrO₄²⁻ dominiert → gelb'],
        ['Geruch nach Essig beim Erhitzen von Ethanol mit Essigsäure und H₂SO₄',
         'CH₃COOH + C₂H₅OH ⇌ CH₃COOC₂H₅ + H₂O; Ethylacetat (Ester) riecht fruchtig/essigartig; H₂SO₄ als Katalysator und Wasserentzugsmittel'],
      ],
    })}

    ${renderCompare({
      titleA: 'Qualitative Analyse',
      titleB: 'Quantitative Analyse',
      listA: [
        'Fragestellung: „Was ist vorhanden?"',
        'Identifizierung von Stoffen und Ionen',
        'Nachweisreaktionen: Farbreaktion, Niederschlag, Gasgeruch',
        'Flammenprobe: Li⁺ (rot), Na⁺ (gelb), K⁺ (violett), Ca²⁺ (orangerot)',
        'Ergebnis: Stoff identifiziert / nicht vorhanden (ja / nein)',
        'Beispiel: Kationentrennungsgang in der anorganischen Analytik',
      ],
      listB: [
        'Fragestellung: „Wie viel ist vorhanden?"',
        'Bestimmung von Konzentration, Masse oder Reinheit',
        'Titration (Säure-Base, Redox, Komplexometrie), Gravimetrie, Fotometrie',
        'Ergebnis: Zahlenwert + Einheit + Unsicherheitsangabe',
        'Beispiel: HCl-Gehalt einer Lösung durch Titration mit NaOH',
        'Beispiel: Eisengehalt durch KMnO₄-Redoxtitration (Cerimetrie, Permanganometrie)',
      ],
    })}
  `; }

  // ══════════════════════════════════════════════════════════
  // 1.2.4 — Vorbereitung, Durchführung, Auswertung
  // ══════════════════════════════════════════════════════════
  _experiment() { return `
    ${renderSubhead('1.2.4 — Vorbereitung, Durchführung und Auswertung chemischer Experimente')}

    <h3 class="lz-h3">Sicherheit im chemischen Labor</h3>

    ${renderInfobox({
      type: 'danger', icon: 'fas fa-shield-alt', title: 'Grundregeln der Laborsicherheit — unverhandelbar',
      body: `<strong>Persönliche Schutzausrüstung (PSA) — immer:</strong><br>
             Schutzbrille (chemikalienbeständig, nicht nur Sonnenschutzgläser!) ·
             Laborkittel (Baumwolle bevorzugt; kein Synthetik — schmilzt bei Feuer!) ·
             Handschuhe (Nitril: allgemein; dickere für Säuren/Basen; Latexfrei bei Allergikern) ·
             Geschlossene Schuhe (keine Sandalen — Schutzkittel schützt auch Hose/Strumpfhose nicht).<br><br>
             <strong>GHS-Gefahrenpiktogramme kennen und verstehen:</strong><br>
             💀 Akut giftig (oral/inhalativ) ·
             ☠ Totenkopf auf weißem Hintergrund: tödlich ·
             🔥 Entzündlich/Leicht-/Hochentzündlich ·
             💥 Explosiv ·
             ⊕ Oxidierend (fördert Verbrennung) ·
             🌊 Umweltgefährdend (Fisch + Baum) ·
             ❗ Reizend, sensibilisierend, gesundheitsschädlich ·
             🧪 Ätzend (Haut, Augen, Atemwege) ·
             🫁 Gesundheitsgefahr langfristig (krebserzeugend, mutagen, reproduktionstoxisch)<br><br>
             <strong>H-Sätze (Hazard Statements):</strong> beschreiben Gefährdung (z.B. H314: Verursacht schwere Verätzungen)<br>
             <strong>P-Sätze (Precautionary Statements):</strong> Schutzmaßnahmen (z.B. P260: Dämpfe nicht einatmen)<br><br>
             <strong>Entsorgung:</strong> Säuren/Basen → neutralisieren, dann Entsorgungsbehälter ·
             Organische Lösungsmittel → separater Behälter (Halogen-frei / Halogen-haltig getrennt!) ·
             Schwermetallsalze → Schwermetall-Entsorgungsbehälter · Nie in den Ausguss!<br><br>
             <strong>Notfallmaßnahmen:</strong>
             Verätzung Haut/Augen → sofort 10–15 min mit Wasser spülen, dann Arzt ·
             Brand → CO₂-Löscher (kein Wasser bei Lösungsmittelbrand!) ·
             Vergiftung → Notruf 112, ggf. Giftnotruf`,
    })}

    <h3 class="lz-h3" style="margin-top:1.75rem;">Phasen des chemischen Experiments</h3>

    ${renderTable({
      headers: ['Phase', 'Konkrete Schritte', 'Typische Fehler'],
      rows: [
        ['① Vorbereitung\n(Planung)',
         `• Ziel und Hypothese schriftlich festlegen
          • Reaktionsgleichung aufstellen und bilanzieren
          • Sicherheitsdatenblatt (SDB) für alle Chemikalien lesen: GHS-Piktogramme, H- und P-Sätze, Erstmaßnahmen
          • Gefahrenbeurteilung erstellen
          • Benötigte Mengen stöchiometrisch berechnen (kein Bauchgefühl!)
          • Apparatur aufbauen und dichten Verschluss prüfen
          • Entsorgungsgefäße bereitstellen und beschriften
          • Alle benötigten Chemikalien und Geräte auf Vollständigkeit prüfen`,
         'Vorschrift nicht vollständig gelesen · Mengen nicht berechnet · SDB nicht konsultiert'],
        ['② Durchführung',
         `• Zuerst PSA anlegen, dann mit Chemikalien arbeiten
          • Strikt nach Vorschrift — keine eigenmächtigen Änderungen
          • Konzentrierte Säuren/Basen immer ins Wasser geben (nie umgekehrt!)
          • Beobachtungen sofort und vollständig im Protokoll notieren (Zeit, Farbe, Geruch, Temperatur, Niederschlag, Gas)
          • Messwerte mit Einheiten und Messungenauigkeit aufschreiben
          • Unvorhergesehenes (Fehler, Abweichungen) sofort dokumentieren und ggf. Betreuer informieren
          • Alle Abfälle sofort in die richtigen Entsorgungsgefäße`,
         'PSA vergessen · Flüssigkeiten falsch herum gemischt · Beobachtung = Deutung schreiben'],
        ['③ Auswertung\n(Protokoll)',
         `• Beobachtungen beschreiben (makroskopisch, wertfrei, ohne Interpretation)
          • Deutung auf Teilchenebene (Reaktionsgleichung, Ionengleichung, Halbgleichungen)
          • Berechnungen (Ausbeute, Konzentration, Molmasse, …) mit Lösungsweg
          • Fehlerbetrachtung: systematische Fehler (Gerätekalibrierung, Verunreinigung) und zufällige Fehler (Ablesefehler)
          • Vergleich mit Literaturwerten (Prozentuale Abweichung)
          • Hypothese: bestätigt, modifiziert oder widerlegt? — mit Begründung!
          • Quellenangaben für Literaturwerte`,
         'Beobachtung und Deutung vermischt · Keine Fehlerbetrachtung · Einheiten fehlen'],
      ],
      highlight: [0],
    })}

    <h3 class="lz-h3" style="margin-top:1.75rem;">Reaktionsgleichungen aufstellen und bilanzieren</h3>
    <p class="lz-prose">
      Eine ausgewogene Reaktionsgleichung ist die formale Darstellung einer
      chemischen Reaktion auf symbolischer Ebene. Die Grundlage ist die
      <strong>Massenerhaltung</strong>: Atome werden nur neu kombiniert,
      weshalb links und rechts gleich viele Atome jedes Elements stehen müssen.
      Bei Redoxreaktionen muss zusätzlich die <strong>Ladungserhaltung</strong>
      in Ionengleichungen erfüllt sein.
    </p>

    ${renderTable({
      headers: ['Schritt', 'Vorgehensweise', 'Beispiel: Verbrennung von Ethan C₂H₆'],
      rows: [
        ['1. Wortgleichung', 'Edukte und Produkte der vollständigen Verbrennung benennen', 'Ethan + Sauerstoff → Kohlenstoffdioxid + Wasser'],
        ['2. Summenformeln', 'Formeln korrekt einsetzen (unbalanciert)', 'C₂H₆ + O₂ → CO₂ + H₂O'],
        ['3. C-Atome',       'Kohlenstoff zuerst ausgleichen', 'C₂H₆ + O₂ → 2 CO₂ + H₂O'],
        ['4. H-Atome',       'Wasserstoff ausgleichen', 'C₂H₆ + O₂ → 2 CO₂ + 3 H₂O'],
        ['5. O-Atome',       'Sauerstoff ausgleichen (oft als letztes)', 'C₂H₆ + 7/2 O₂ → 2 CO₂ + 3 H₂O'],
        ['6. Ganzzahlig',    'Mit 2 multiplizieren für ganzzahlige Koeffizienten', '2 C₂H₆ + 7 O₂ → 4 CO₂ + 6 H₂O'],
        ['7. Prüfung',       'Atome und ggf. Ladungen links = rechts', 'C: 4=4 ✓ · H: 12=12 ✓ · O: 14=14 ✓'],
        ['8. Zustände',      '(s)/(l)/(g)/(aq) ergänzen', '2 C₂H₆(g) + 7 O₂(g) → 4 CO₂(g) + 6 H₂O(g)'],
      ],
    })}

    ${renderInfobox({
      type: 'success', icon: 'fas fa-file-alt', title: 'Pflichtstruktur eines Versuchsprotokolls',
      body: `<strong>1. Titel und Datum</strong><br>
             <strong>2. Ziel / Hypothese</strong> — Was soll gezeigt/untersucht werden?<br>
             <strong>3. Chemikalien</strong> — Name, Summenformel, Masse/Volumen/Konzentration, GHS-Piktogramme<br>
             <strong>4. Geräte</strong> — vollständige Auflistung und ggf. Skizze der Apparatur<br>
             <strong>5. Durchführung</strong> — knapp, vollständig, in der Vergangenheit, im Aktiv oder Passiv<br>
             <strong>6. Beobachtung</strong> — rein makroskopisch, wertfrei, ohne Deutung<br>
             <strong>7. Auswertung / Deutung</strong> — Reaktionsgleichung, Teilchenebene, Berechnungen<br>
             <strong>8. Fehlerbetrachtung</strong> — systematische und zufällige Fehler, Abweichung von Literaturwerten<br>
             <strong>9. Schlussfolgerung</strong> — Hypothese bestätigt / modifiziert / widerlegt?`,
    })}

    ${renderMerkboxGrid([
      {
        icon: 'fas fa-microscope',
        title: 'Systematischer Fehler',
        text: `Entsteht durch eine konstante Fehlerquelle, die immer in dieselbe Richtung wirkt.
               Ursachen: falsch kalibriertes Messgerät, unsaubere Kolben, Verunreinigungen
               in Chemikalien, falsches Ablesen (Parallaxe bei Bürette).
               <strong>Kann nicht durch Wiederholung beseitigt werden</strong> —
               muss durch Kalibrierung oder Blindversuch erkannt werden.`,
      },
      {
        icon: 'fas fa-dice',
        title: 'Zufälliger Fehler',
        text: `Statistisch verteilte Abweichungen um den wahren Wert.
               Ursachen: Schwankungen beim Ablesen, Zittern beim Pipettieren,
               Temperaturschwankungen, Luftströmungen.
               <strong>Reduzierbar durch Mittelwertbildung</strong> über viele
               Wiederholungen. Messunsicherheit: s = √(Σ(xᵢ − x̄)² / (n−1)).`,
      },
      {
        icon: 'fas fa-calculator',
        title: 'Signifikante Stellen und Genauigkeit',
        text: `Das Ergebnis darf nicht mehr signifikante Stellen haben als
               die ungenaueste Eingangsgröße.
               Beispiel: 12,4 g / 46,07 g/mol → n = 0,2692… mol
               → runden auf 3 sig. Stellen: 0,269 mol (wie 12,4 g, 3 sig. Stellen).
               Relative Unsicherheit: Δx/x · 100 %.
               Absolute Unsicherheit: z.B. ±0,05 mL bei 50-mL-Bürette.`,
      },
    ])}
  `; }

  init() {
    i18n.init();
    initScrollReveal();
    initInteractive(document);
    initWimTabs();
    renderWimSection();
  }
}