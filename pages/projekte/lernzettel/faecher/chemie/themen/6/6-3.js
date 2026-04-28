// pages/projekte/lernzettel/faecher/chemie/themen/6/6-3.js
// Kapitel 6.3 — Anwendungen des Massenwirkungsgesetzes
// 6.3.1  Gleichgewichtsreaktionen in der Industrie
// 6.3.2  Löslichkeitsgleichgewichte von Salzen

import { initScrollReveal }  from '../../../../../../../shared/js/index.js';
import { footerHTML }         from '../../../../../../../components/Footer.js';
import { i18n }               from '../../../../../../../shared/js/i18n.js';
import {
  ensureComponentsCSS,
  renderInfobox,
  renderTable,
  renderMerkboxGrid,
  renderFormulaBox,
  renderSubhead,
  renderTags,
  renderAccordion,
  renderCompare,
  initInteractive,
} from '../../../../js/components/components.js';
import { renderPageNav } from '../../../../js/components/subnav.js';
import { COLOR, COLOR_RGB, BASE } from '../../chemie.js';


const TABS = [
  { key: '631', icon: 'fas fa-industry',   label: '6.3.1 Industrielle GG-Reaktionen' },
  { key: '632', icon: 'fas fa-tint',       label: '6.3.2 Löslichkeitsgleichgewichte' },
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
  return `<nav class="wim-tabs" role="tablist" id="tabs63">${nav}</nav>${panels}`;
}

function initTabs() {
  const nav = document.getElementById('tabs63');
  if (!nav) return;
  const tabs = nav.querySelectorAll('.wim-tab[data-wim]');
  if (!tabs.length) return;
  const panels = [];
  let el = nav.nextElementSibling;
  while (el) { if (el.classList.contains('wim-category')) panels.push(el); el = el.nextElementSibling; }
  const slider = document.createElement('span');
  slider.className = 'wim-tab-slider';
  nav.appendChild(slider);
  function setSlider(tab) {
    slider.style.width = `${tab.getBoundingClientRect().width}px`;
    slider.style.transform = `translateX(${tab.offsetLeft}px)`;
  }
  setTimeout(() => setSlider(nav.querySelector('.wim-tab.active') || tabs[0]), 60);
  window.addEventListener('resize', () => { const a = nav.querySelector('.wim-tab.active'); if (a) setSlider(a); });
  tabs.forEach((tab, i) => {
    tab.addEventListener('click', function () {
      tabs.forEach(b => b.classList.remove('active'));
      this.classList.add('active'); setSlider(this);
      this.scrollIntoView({ block: 'nearest', inline: 'center', behavior: 'smooth' });
      const key = this.dataset.wim;
      panels.forEach(p => { p.classList.toggle('active', p.dataset.wimCat === key); p.classList.toggle('hidden', p.dataset.wimCat !== key); });
    });
    tab.addEventListener('keydown', e => {
      if (e.key === 'ArrowRight') { e.preventDefault(); (tabs[i + 1] || tabs[0]).click(); }
      if (e.key === 'ArrowLeft')  { e.preventDefault(); (tabs[i - 1] || tabs[tabs.length - 1]).click(); }
    });
  });
}

export default class Chemie_6_3 {
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
          <i class="fas fa-chevron-right"></i><span>Kapitel 6</span>
          <i class="fas fa-chevron-right"></i><span>6.3</span>
        </div>
        <h1 class="lz-sub-title">Anwendungen des<br><em>Massenwirkungsgesetzes</em></h1>
        <p class="lz-sub-desc">
          Haber-Bosch · Kontaktverfahren · Löslichkeitsprodukt K_L ·
          Fällungsreaktionen · Komplexlöslichkeit · gemeinsamer Ioneneffekt
        </p>
        ${renderTags(['Kap. 6.3', 'MWG-Anwendungen', 'Löslichkeitsprodukt', 'Haber-Bosch', 'LK Chemie BW'])}
      </div>
    </section>

    <section class="lz-content-section">
      <div class="lz-section-wrap">
        ${buildWimHTML(k => k === '631' ? this._industrie() : this._loeslichkeit())}
      </div>
    </section>

    <section class="lz-content-section" style="padding:1.5rem 0 3rem;">
      <div class="lz-section-wrap">
        ${renderPageNav({
          prev: { label: '6.2 Beeinflussung des GG',  link: `${BASE}/themen/6/6-2` },
          next: { label: '7.1 Säuren und Basen',       link: `${BASE}/themen/7/7-1` },
        }, BASE)}
      </div>
    </section>
    ${footerHTML(this.router)}
  `; }

  // ══════════════════════════════════════════════════════════
  // 6.3.1 — Gleichgewichtsreaktionen in der Industrie
  // ══════════════════════════════════════════════════════════
  _industrie() { return `
    ${renderSubhead('6.3.1 — Gleichgewichtsreaktionen in der Industrie')}

    <h2 class="lz-h2">Thermodynamik und Kinetik als industrielle Herausforderung</h2>
    <p class="lz-prose">
      Industrielle Syntheseprozesse stehen immer vor demselben Dilemma:
      Die thermodynamisch optimalen Bedingungen (niedriger T für exotherme Reaktionen,
      hoher Druck für Δn_gas < 0) sind oft kinetisch ungünstig.
      Die Lösung: <strong>Katalysatoren</strong> ermöglichen einen Kompromiss —
      akzeptable Geschwindigkeit bei moderaten Temperaturen,
      während Druck und Produktabtrennung die Ausbeute sichern.
    </p>

    ${renderAccordion([
      {
        title: 'Haber-Bosch-Verfahren — Ammoniaksynthese',
        content: `<p class="lz-prose"><strong>Reaktion:</strong> N₂(g) + 3H₂(g) ⇌ 2NH₃(g)
                  · ΔH° = −92,4 kJ/mol · K_c(25°C) ≈ 977 · K_c(500°C) ≈ 0,04</p>
                  ${renderTable({
                    headers: ['Parameter', 'Industriell gewählt', 'Begründung'],
                    rows: [
                      ['Temperatur', '400–500°C', 'Kompromiss: K_c noch ausreichend; Fe-Katalysator aktiv; Reaktion nicht zu langsam'],
                      ['Druck', '200–400 bar', 'Δn_gas = −2 → hoher Druck → mehr NH₃; trotz hoher Investitionskosten lohnenswert'],
                      ['Katalysator', 'α-Fe + K₂O/Al₂O₃/CaO', 'Fe: aktives Zentrum (N₂-Adsorption und -Spaltung); K₂O: Promotor (erhöht Aktivität); Al₂O₃: Trägerstoff; CaO: verhindert Sintern'],
                      ['Produktabtrennung', 'NH₃-Kondensation (flüssig, −33°C)', 'Entfernt NH₃ aus Gleichgewicht → Nachschub von Reaktion'],
                      ['Edukt-Recycling', 'Nicht umgesetzte Gase rückgeführt', 'Umsatz nur 15%/Durchgang, aber durch Recycling >90% gesamt'],
                      ['Eduktherstellung', 'N₂ aus Luftzerlegung (Linde); H₂ aus Steam-Reforming (CH₄+H₂O→CO+3H₂)', 'Reforming ist CO₂-intensiv → grünes H₂ aus Elektrolyse zukünftig'],
                    ],
                  })}
                  <p class="lz-prose"><strong>Globale Bedeutung:</strong>
                  ~150 Mio. t NH₃/Jahr → ~80% zu Düngemittel (Harnstoff, Ammoniumnitrat) →
                  ermöglicht Ernährung von ~4 Mrd. Menschen →
                  ohne Haber-Bosch wäre die aktuelle Weltbevölkerung nicht zu ernähren.
                  Gleichzeitig: ~1,8% des globalen Energieverbrauchs und ~1,4% der CO₂-Emissionen.</p>`,
      },
      {
        title: 'Kontaktverfahren — Schwefelsäureproduktion',
        content: `<p class="lz-prose"><strong>Reaktion (Schlüsselschritt):</strong>
                  2SO₂(g) + O₂(g) ⇌ 2SO₃(g) · ΔH° = −197,7 kJ/mol · Δn_gas = −1</p>
                  ${renderTable({
                    headers: ['Schritt', 'Reaktion', 'Bedingungen'],
                    rows: [
                      ['1. SO₂-Erzeugung', 'S + O₂ → SO₂ oder 4FeS₂ + 11O₂ → 2Fe₂O₃ + 8SO₂', 'Rösten von Schwefelkies oder Verbrennen von S'],
                      ['2. Katalytische Oxidation', '2SO₂ + O₂ ⇌ 2SO₃', 'V₂O₅/K₂S₂O₇ auf SiO₂; 400–600°C; mehrere Kontaktstufen; Ausbeute >99,7%'],
                      ['3. Absorption', 'SO₃ + H₂SO₄(konz.) → H₂S₂O₇ (Oleum)', 'Wasser-Zugabe zu SO₃ erzeugt Schwefelsäurenebel → stattdessen konz. H₂SO₄ verwendet'],
                      ['4. Verdünnung', 'H₂S₂O₇ + H₂O → 2H₂SO₄', 'Geregelte Zugabe von Wasser zu Oleum'],
                    ],
                  })}
                  <p class="lz-prose"><strong>Doppelkontaktverfahren:</strong>
                  Moderne Anlagen verwenden Zwischenabsorption (nach 3 Katalysatorstufen
                  wird SO₃ absorbiert, dann nochmal über Katalysator → >99,9% Ausbeute,
                  weniger SO₂-Emissionen).<br>
                  <strong>Weltproduktion:</strong> ~200 Mio. t H₂SO₄/Jahr — meistproduziertes
                  Industriechemikalie. Verwendung: Düngemittel (Phosphorsäure), Metallverhüttung,
                  Chemieproduktion, Reinigungsmittel.</p>`,
      },
      {
        title: 'Methanolsynthese — CO + H₂ → CH₃OH',
        content: `<p class="lz-prose"><strong>Reaktion:</strong>
                  CO(g) + 2H₂(g) ⇌ CH₃OH(g) · ΔH° = −90,5 kJ/mol · Δn_gas = −2</p>
                  <p class="lz-prose"><strong>Bedingungen:</strong>
                  250°C, 50–100 bar, Cu/ZnO/Al₂O₃-Katalysator.<br>
                  Früher: ZnO/Cr₂O₃, 350°C, 300 bar (Hochdruckverfahren).<br>
                  Heute: Niederdruckverfahren (ICI-Prozess) — günstiger und sicherer.</p>
                  <p class="lz-prose"><strong>Bedeutung:</strong>
                  ~100 Mio. t Methanol/Jahr; Rohstoff für Formaldehyd (HCHO),
                  Essigsäure (CH₃COOH via Monsanto-Prozess),
                  Kraftstoff (Direktgemisch oder Konversion zu DME, Ethylen),
                  Fuel-Cell-Anwendungen.</p>`,
      },
      {
        title: 'Wassergas-Shift-Reaktion — CO + H₂O ⇌ CO₂ + H₂',
        content: `<p class="lz-prose"><strong>Reaktion:</strong>
                  CO(g) + H₂O(g) ⇌ CO₂(g) + H₂(g) · ΔH° = −41,2 kJ/mol · Δn_gas = 0</p>
                  <p class="lz-prose"><strong>Bedeutung:</strong>
                  Kernreaktion der H₂-Erzeugung aus Erdgas (Steam-Reforming-Produktgas).
                  Δn_gas = 0 → Druck irrelevant; exotherm → niedriger T bevorzugt.
                  Zwei Stufen: Hochtemperaturshift (Fe₂O₃/Cr₂O₃, 300–500°C, ~80% Umsatz)
                  + Niedertemperaturshift (Cu/ZnO, 180–250°C, >98% Umsatz gesamt).</p>
                  <p class="lz-prose"><strong>Produktgas nach WGS:</strong>
                  CO₂ + H₂ (+ geringe CO-Reste). CO₂ wird abgetrennt (PSA oder MDEA-Wäsche).
                  Reines H₂ für Ammoniaksynthese, Hydrierungen, Brennstoffzellen.</p>`,
      },
    ])}

    <h3 class="lz-h3" style="margin-top:1.75rem;">Vergleich industrieller GG-Reaktionen</h3>

    ${renderTable({
      headers: ['Prozess', 'Reaktion (vereinfacht)', 'ΔH°', 'Δn_gas', 'T [°C]', 'p [bar]', 'Katalysator', 'Weltprod.'],
      rows: [
        ['Haber-Bosch',      'N₂+3H₂⇌2NH₃',        'exo', '−2', '400–500', '200–400', 'Fe+K₂O',         '150 Mio. t NH₃'],
        ['Kontaktverfahren', '2SO₂+O₂⇌2SO₃',        'exo', '−1', '400–600', '1–3',    'V₂O₅/K₂S₂O₇',   '200 Mio. t H₂SO₄'],
        ['Methanol',         'CO+2H₂⇌CH₃OH',        'exo', '−2', '250',     '50–100',  'Cu/ZnO/Al₂O₃',   '100 Mio. t'],
        ['HNO₃ (Stufe 1)',   '4NH₃+5O₂⇌4NO+6H₂O',  'exo', '+2', '900',     '1–10',   'Pt/Rh-Netz',      '−'],
        ['WGS-Reaktion',     'CO+H₂O⇌CO₂+H₂',      'exo', '0',  '200–500', 'variabel','Fe₂O₃ / Cu/ZnO', 'H₂-Produktion'],
        ['Esterbildung',     'RCOOH+R\'OH⇌Ester+H₂O','leicht exo','0','60–120','1',  'H₂SO₄',           'Lösungsmittel, Riechstoffe'],
      ],
      highlight: [0, 1],
    })}
  `; }

  // ══════════════════════════════════════════════════════════
  // 6.3.2 — Löslichkeitsgleichgewichte von Salzen
  // ══════════════════════════════════════════════════════════
  _loeslichkeit() { return `
    ${renderSubhead('6.3.2 — Löslichkeitsgleichgewichte von Salzen')}

    <h3 class="lz-h3">Das Löslichkeitsprodukt K_L</h3>
    <p class="lz-prose">
      Wenn ein Salz in Wasser gelöst wird und ein Gleichgewicht zwischen
      dem festen Salz und seinen hydratisierten Ionen in Lösung entsteht,
      beschreibt das <strong>Löslichkeitsprodukt K_L</strong> dieses Gleichgewicht.
    </p>

    ${renderFormulaBox({
      label:   'Löslichkeitsgleichgewicht und K_L',
      formula: 'A_m B_n (s) ⇌ m A^(n+)(aq) + n B^(m−)(aq) &nbsp; → &nbsp; K_L = [A^(n+)]^m · [B^(m−)]^n',
      desc:    'Feststoff nicht im K_L-Ausdruck (Aktivität = 1) · K_L nur temperaturabhängig · Einheit: mol^(m+n)/L^(m+n) — oft ohne Einheit angegeben (bezogen auf Standardzustand 1 mol/L)',
    })}

    <h3 class="lz-h3" style="margin-top:1.75rem;">Löslichkeit s und K_L — Umrechnung</h3>

    ${renderFormulaBox({
      label:   'Beziehung zwischen Löslichkeit s und K_L (für AxBy-Salze)',
      formula: 'K_L = (m·s)^m · (n·s)^n = m^m · n^n · s^(m+n)',
      desc:    's: molare Löslichkeit [mol/L] (Menge Salz, die sich in 1 L löst) · Beispiel NaCl (1:1): K_L = s² · AgCl: K_L = s² · CaF₂ (1:2): K_L = s · (2s)² = 4s³',
    })}

    ${renderTable({
      headers: ['Salz', 'GG-Gleichung', 'K_L (25°C)', 'K_L-Ausdruck', 'Löslichkeit s [mol/L]'],
      rows: [
        ['AgCl',     'AgCl ⇌ Ag⁺ + Cl⁻',                    '1,8·10⁻¹⁰',  '[Ag⁺][Cl⁻]',              's = √K_L = 1,34·10⁻⁵'],
        ['AgBr',     'AgBr ⇌ Ag⁺ + Br⁻',                    '5,4·10⁻¹³',  '[Ag⁺][Br⁻]',              's = 7,3·10⁻⁷'],
        ['AgI',      'AgI ⇌ Ag⁺ + I⁻',                      '8,5·10⁻¹⁷',  '[Ag⁺][I⁻]',               's = 9,2·10⁻⁹'],
        ['CaF₂',     'CaF₂ ⇌ Ca²⁺ + 2F⁻',                   '3,9·10⁻¹¹',  '[Ca²⁺][F⁻]²',             's = ∛(K_L/4) = 2,1·10⁻⁴'],
        ['BaSO₄',    'BaSO₄ ⇌ Ba²⁺ + SO₄²⁻',                '1,1·10⁻¹⁰',  '[Ba²⁺][SO₄²⁻]',           's = 1,05·10⁻⁵'],
        ['PbSO₄',    'PbSO₄ ⇌ Pb²⁺ + SO₄²⁻',                '1,6·10⁻⁸',   '[Pb²⁺][SO₄²⁻]',           's = 1,26·10⁻⁴'],
        ['Ca₃(PO₄)₂','Ca₃(PO₄)₂ ⇌ 3Ca²⁺ + 2PO₄³⁻',         '2,1·10⁻³³',  '[Ca²⁺]³[PO₄³⁻]²',         's sehr klein'],
        ['CaCO₃',    'CaCO₃ ⇌ Ca²⁺ + CO₃²⁻',                '3,4·10⁻⁹',   '[Ca²⁺][CO₃²⁻]',            's = 5,8·10⁻⁵'],
        ['Mg(OH)₂',  'Mg(OH)₂ ⇌ Mg²⁺ + 2OH⁻',               '5,6·10⁻¹²',  '[Mg²⁺][OH⁻]²',             's = ∛(K_L/4) = 1,1·10⁻⁴'],
        ['Fe(OH)₃',  'Fe(OH)₃ ⇌ Fe³⁺ + 3OH⁻',               '2,8·10⁻³⁹',  '[Fe³⁺][OH⁻]³',              's sehr klein (extrem unlöslich)'],
        ['PbCrO₄',   'PbCrO₄ ⇌ Pb²⁺ + CrO₄²⁻',              '2,8·10⁻¹³',  '[Pb²⁺][CrO₄²⁻]',           's = 5,3·10⁻⁷ (gelber Niederschlag)'],
        ['NaCl',     'NaCl ⇌ Na⁺ + Cl⁻',                    '~37 mol²/L²', '[Na⁺][Cl⁻]',               's = 6,1 mol/L (gut löslich)'],
      ],
      highlight: [0, 1, 2, 3],
    })}

    <h3 class="lz-h3" style="margin-top:1.75rem;">Fällungsreaktionen — Wann fällt ein Niederschlag aus?</h3>
    <p class="lz-prose">
      Ein Niederschlag entsteht, wenn das Ionenprodukt Q (mit momentanen Konzentrationen)
      den Wert K_L überschreitet.
    </p>

    ${renderTable({
      headers: ['Vergleich Q mit K_L', 'Bedeutung', 'Konsequenz'],
      rows: [
        ['Q < K_L', 'Ionenprodukt kleiner als K_L → Lösung untersättigt', 'Kein Niederschlag; Salz löst sich auf (falls vorhanden)'],
        ['Q = K_L', 'System im Gleichgewicht → gesättigte Lösung', 'Gleichgewicht; keine Abscheidung, kein Auflösen'],
        ['Q > K_L', 'Ionenprodukt größer als K_L → Lösung übersättigt', 'Niederschlag bildet sich, bis Q = K_L (Sättigung)'],
      ],
      highlight: [2],
    })}

    ${renderInfobox({
      type: 'blue', icon: 'fas fa-flask', title: 'Fällungsrechnung — Beispiel AgCl',
      body: `<strong>Aufgabe:</strong> Fällt AgCl aus, wenn 50 mL 0,001 mol/L AgNO₃
             mit 50 mL 0,001 mol/L NaCl gemischt werden?
             K_L(AgCl) = 1,8·10⁻¹⁰ mol²/L²<br><br>
             <strong>Schritt 1 — Mischkonzentrationen:</strong><br>
             c(Ag⁺) = 0,001/2 = 5·10⁻⁴ mol/L<br>
             c(Cl⁻) = 0,001/2 = 5·10⁻⁴ mol/L<br><br>
             <strong>Schritt 2 — Ionenprodukt Q:</strong><br>
             Q = c(Ag⁺)·c(Cl⁻) = (5·10⁻⁴)² = 2,5·10⁻⁷<br><br>
             <strong>Schritt 3 — Vergleich:</strong><br>
             Q = 2,5·10⁻⁷ >> K_L = 1,8·10⁻¹⁰ → Q > K_L → <strong>Niederschlag fällt aus!</strong>`,
    })}

    <h3 class="lz-h3" style="margin-top:1.75rem;">Gemeinsamer Ioneneffekt (Common Ion Effect)</h3>
    <p class="lz-prose">
      Gibt man zu einer gesättigten Salzlösung ein Salz mit einem gemeinsamen Ion,
      sinkt die Löslichkeit des Ursprungssalzes — der
      <strong>gemeinsame Ioneneffekt</strong> (Le Chatelier!).
    </p>

    ${renderTable({
      headers: ['System', 'Gemeinsames Ion', 'Effekt', 'Rechenbeispiel'],
      rows: [
        ['AgCl in NaCl-Lösung',
         'Cl⁻',
         'Zusätzliche Cl⁻ erhöhen Q über K_L → mehr AgCl fällt aus → s(AgCl) sinkt',
         'In 0,1 M NaCl: s = K_L/[Cl⁻] = 1,8·10⁻¹⁰/0,1 = 1,8·10⁻⁹ mol/L (viel kleiner als 1,34·10⁻⁵ in reinem H₂O!)'],
        ['BaSO₄ in Na₂SO₄-Lösung',
         'SO₄²⁻',
         'Mehr SO₄²⁻ → BaSO₄ fällt besser aus',
         'In 0,01 M Na₂SO₄: s = K_L/[SO₄²⁻] = 1,1·10⁻¹⁰/0,01 = 1,1·10⁻⁸ mol/L'],
        ['CaF₂ in NaF-Lösung',
         'F⁻',
         's(CaF₂) sinkt drastisch',
         'In 0,1 M NaF: K_L = [Ca²⁺](0,1)² → [Ca²⁺] = 3,9·10⁻⁹ mol/L'],
      ],
      highlight: [0],
    })}

    <h3 class="lz-h3" style="margin-top:1.75rem;">Temperaturabhängigkeit der Löslichkeit</h3>

    ${renderTable({
      headers: ['Stoff', 'Löslichkeit bei 20°C [g/L]', 'Löslichkeit bei 80°C [g/L]', 'Trend', 'ΔH_sol'],
      rows: [
        ['NaNO₃',   '880',  '1480', '↑ stark mit T',     '+20,5 kJ/mol (endotherm)'],
        ['KNO₃',    '316',  '1690', '↑ sehr stark mit T','endotherm'],
        ['NaCl',    '360',  '380',  '↑ kaum mit T',      '+3,9 kJ/mol'],
        ['Na₂SO₄',  '195',  '~480 (32°C max)', '↑ bis 32°C, dann ↓', 'Phasenübergang Na₂SO₄·10H₂O'],
        ['CaCO₃',   '0,014','0,006', '↓ mit T',           'exotherm; CO₂ wird bei T weniger löslich'],
        ['Ca(OH)₂', '1,85', '0,94', '↓ mit T',            'exotherm'],
        ['CO₂(g)',   '~1,7', '~0,6', '↓ mit T (Gas)',      'Austreiben bei T: Sprudeln beim Erwärmen'],
      ],
      highlight: [0, 1, 4, 6],
    })}

    ${renderAccordion([
      {
        title: 'Selektive Fällung — Trennverfahren in der Analytik',
        content: `<p class="lz-prose">Durch schrittweise Zugabe eines Fällungsreagenzes
                  lassen sich ähnliche Ionen trennen, wenn ihre K_L-Werte
                  hinreichend verschieden sind.</p>
                  <p class="lz-prose"><strong>Beispiel: Ag⁺ und Pb²⁺ durch Cl⁻-Zugabe:</strong><br>
                  K_L(AgCl) = 1,8·10⁻¹⁰ · K_L(PbCl₂) = 1,7·10⁻⁵<br><br>
                  AgCl fällt bei viel niedrigerer c(Cl⁻) aus als PbCl₂.<br>
                  Ag⁺ beginnt zu fallen bei: [Cl⁻] > K_L/[Ag⁺] = 1,8·10⁻⁹ mol/L<br>
                  Pb²⁺ beginnt zu fallen bei: [Cl⁻] > √(K_L/[Pb²⁺]) = 0,013 mol/L<br>
                  → 7 Zehnerpotenzen Unterschied! Selektive Trennung leicht möglich.</p>`,
      },
      {
        title: 'Komplexbildung und Löslichkeit — Amminkomplexe',
        content: `<p class="lz-prose">Durch Komplexbildung kann die effektive
                  Konzentration eines Ions drastisch gesenkt werden — das GG
                  verschiebt sich in Richtung Auflösung (Le Chatelier).</p>
                  <p class="lz-prose"><strong>Beispiel AgCl in NH₃-Lösung:</strong><br>
                  AgCl(s) ⇌ Ag⁺ + Cl⁻ (K_L = 1,8·10⁻¹⁰)<br>
                  Ag⁺ + 2NH₃ ⇌ [Ag(NH₃)₂]⁺ (K_f = 1,7·10⁷)<br>
                  Gesamt: AgCl + 2NH₃ ⇌ [Ag(NH₃)₂]⁺ + Cl⁻<br>
                  K_ges = K_L · K_f = 1,8·10⁻¹⁰ · 1,7·10⁷ = 3,1·10⁻³<br><br>
                  In konz. NH₃ (15 mol/L): [Ag(NH₃)₂⁺] = [Cl⁻] = s<br>
                  s² / (15)² ≈ 3,1·10⁻³ → s ≈ 0,83 mol/L<br>
                  Viel löslicher als ohne NH₃ (1,34·10⁻⁵ mol/L)!</p>
                  <p class="lz-prose"><strong>Weitere Beispiele:</strong><br>
                  Cu(OH)₂ in NH₃-Lösung → tiefblau [Cu(NH₃)₄]²⁺<br>
                  Al(OH)₃ in NaOH → [Al(OH)₄]⁻ (Aluminat — Amphoterie)<br>
                  Au in KCN → [Au(CN)₂]⁻ (Goldauflösung in Cyanidlaugerei)</p>`,
      },
      {
        title: 'pH-Abhängigkeit der Löslichkeit',
        content: `<p class="lz-prose">Für Salze schwacher Säuren oder Basen
                  hängt die Löslichkeit stark vom pH-Wert ab:</p>
                  <p class="lz-prose"><strong>CaCO₃ in Salzsäure:</strong><br>
                  CaCO₃(s) ⇌ Ca²⁺ + CO₃²⁻ (K_L = 3,4·10⁻⁹)<br>
                  CO₃²⁻ + 2H⁺ → H₂O + CO₂↑ (Säure verbraucht CO₃²⁻)<br>
                  → CO₃²⁻-Konzentration sinkt → GG verschiebt sich → CaCO₃ löst sich<br>
                  → Gasentwicklung (CO₂) treibt Auflösung vollständig!<br><br>
                  <strong>Kalkstein-Tropfstein-Chemismus:</strong><br>
                  CaCO₃ + CO₂ + H₂O ⇌ Ca²⁺ + 2HCO₃⁻ (K = 10⁻⁸)<br>
                  Viel CO₂ (Boden) → Kalkstein löst sich → Tropfsteinhöhlen.<br>
                  Wenig CO₂ (Grotte, Verdunstung) → CaCO₃ fällt aus → Stalaktit/Stalagmit.</p>
                  <p class="lz-prose"><strong>Aluminium-Hydroxid — pH-Abhängigkeit:</strong><br>
                  Im Sauren: Al(OH)₃ + 3H⁺ → Al³⁺ + 3H₂O (Lösung als Al³⁺)<br>
                  Neutral: Al(OH)₃ (Fällung)<br>
                  Im Basischen: Al(OH)₃ + OH⁻ → [Al(OH)₄]⁻ (Lösung als Aluminat)<br>
                  → Amphotere Substanz! Minimale Löslichkeit bei pH ≈ 5–7.</p>`,
      },
      {
        title: 'Berechnungsbeispiel: Löslichkeit von BaSO₄',
        content: `<p class="lz-prose"><strong>K_L(BaSO₄) = 1,1·10⁻¹⁰ mol²/L²</strong></p>
                  <p class="lz-prose"><strong>a) In reinem Wasser:</strong><br>
                  BaSO₄ ⇌ Ba²⁺ + SO₄²⁻<br>
                  K_L = s² → s = √(1,1·10⁻¹⁰) = <strong>1,05·10⁻⁵ mol/L</strong><br>
                  m(BaSO₄) = s · M = 1,05·10⁻⁵ · 233,4 = 2,5 mg/L</p>
                  <p class="lz-prose"><strong>b) In 0,01 mol/L Na₂SO₄ (gemeinsamer Ioneneffekt):</strong><br>
                  [SO₄²⁻]_total = 0,01 + s ≈ 0,01 mol/L (da s << 0,01)<br>
                  K_L = [Ba²⁺]·[SO₄²⁻] = s · 0,01<br>
                  s = K_L / 0,01 = 1,1·10⁻¹⁰ / 0,01 = <strong>1,1·10⁻⁸ mol/L</strong><br>
                  → ~1000× weniger löslich als in reinem Wasser!</p>`,
      },
    ])}

    ${renderInfobox({
      type: 'success', icon: 'fas fa-graduation-cap', title: 'Zusammenfassung — MWG-Anwendungen',
      body: `<strong>Haber-Bosch:</strong> N₂+3H₂⇌2NH₃ · exotherm, Δn_gas=−2 · 400–500°C, 200–400 bar, Fe-Kat. · NH₃ kondensieren<br>
             <strong>Kontaktverfahren:</strong> 2SO₂+O₂⇌2SO₃ · exotherm, Δn_gas=−1 · V₂O₅-Kat. · Doppelkontakt >99,9%<br>
             <strong>K_L:</strong> [A^n+]^m · [B^m−]^n · Feststoff außen vor · Q > K_L → Niederschlag<br>
             <strong>Löslichkeit:</strong> s aus K_L berechnen (Stöchiometrie beachten!)<br>
             <strong>Gemeinsamer Ioneneffekt:</strong> Gleichnamiges Ion → Löslichkeit sinkt<br>
             <strong>Komplexbildung:</strong> Komplexierung senkt freies Ion → Löslichkeit steigt<br>
             <strong>pH-Abhängigkeit:</strong> Salze schwacher Säuren: sauer → besser löslich; Hydroxide: basisch → Amphoterie`,
    })}
  `; }

  init() {
    i18n.init();
    initScrollReveal();
    initInteractive(document);
    initTabs();
  }
}