// pages/projekte/lernzettel/faecher/chemie/themen/1/1-3.js
// Kapitel 1.3 — Stöchiometrie
// 1.3.1  Molare und Zusammensetzungsgrößen
// 1.3.2  Berechnungen zu chemischen Reaktionen

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

// ── WimTabs ──────────────────────────────────────────────────────
const TABS = [
  { key: '131', icon: 'fas fa-balance-scale',  label: '1.3.1 Molare & Zusammensetzungsgrößen' },
  { key: '132', icon: 'fas fa-calculator',     label: '1.3.2 Berechnungen zu Reaktionen'      },
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
  return `<nav class="wim-tabs" role="tablist" id="tabs13">${nav}</nav>${panels}`;
}

function initTabs() {
  const nav = document.getElementById('tabs13');
  if (!nav) return;
  const tabs = nav.querySelectorAll('.wim-tab[data-wim]');
  if (!tabs.length) return;
  const panels = [];
  let el = nav.nextElementSibling;
  while (el) {
    if (el.classList.contains('wim-category')) panels.push(el);
    el = el.nextElementSibling;
  }
  const slider = document.createElement('span');
  slider.className = 'wim-tab-slider';
  nav.appendChild(slider);
  function setSlider(tab) {
    slider.style.width     = `${tab.getBoundingClientRect().width}px`;
    slider.style.transform = `translateX(${tab.offsetLeft}px)`;
  }
  setTimeout(() => setSlider(nav.querySelector('.wim-tab.active') || tabs[0]), 60);
  window.addEventListener('resize', () => { const a = nav.querySelector('.wim-tab.active'); if (a) setSlider(a); });
  tabs.forEach((tab, i) => {
    tab.addEventListener('click', function () {
      tabs.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      setSlider(this);
      this.scrollIntoView({ block: 'nearest', inline: 'center', behavior: 'smooth' });
      const key = this.dataset.wim;
      panels.forEach(p => {
        p.classList.toggle('active', p.dataset.wimCat === key);
        p.classList.toggle('hidden',  p.dataset.wimCat !== key);
      });
    });
    tab.addEventListener('keydown', e => {
      if (e.key === 'ArrowRight') { e.preventDefault(); (tabs[i + 1] || tabs[0]).click(); }
      if (e.key === 'ArrowLeft')  { e.preventDefault(); (tabs[i - 1] || tabs[tabs.length - 1]).click(); }
    });
  });
}

// ════════════════════════════════════════════════════════════════
export default class Chemie_1_3 {
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
          <i class="fas fa-chevron-right"></i><span>1.3</span>
        </div>
        <h1 class="lz-sub-title">Stöchiometrie<br><em>Quantitative Chemie</em></h1>
        <p class="lz-sub-desc">
          Molare und Zusammensetzungsgrößen · Berechnungen zu chemischen Reaktionen ·
          Ausbeute · Titration · Gasgesetze
        </p>
        ${renderTags(['Kap. 1.3', 'Stöchiometrie', 'Mol', 'Berechnungen', 'LK Chemie BW'])}
      </div>
    </section>

    <section class="lz-content-section">
      <div class="lz-section-wrap">
        ${buildWimHTML(k => k === '131' ? this._molar() : this._reaktion())}
      </div>
    </section>

    <section class="lz-content-section" style="padding:1.5rem 0 3rem;">
      <div class="lz-section-wrap">
        ${renderPageNav({
          prev: { label: '1.2 Denk- und Arbeitsweisen',  link: `${BASE}/themen/1/1-2` },
          next: { label: '2.1 Kernchemie',               link: `${BASE}/themen/2/2-1` },
        }, BASE)}
      </div>
    </section>

    ${footerHTML(this.router)}
  `; }

  // ══════════════════════════════════════════════════════════
  // 1.3.1 — Molare und Zusammensetzungsgrößen
  // ══════════════════════════════════════════════════════════
  _molar() { return `
    ${renderSubhead('1.3.1 — Molare und Zusammensetzungsgrößen')}

    <h2 class="lz-h2">Was ist Stöchiometrie?</h2>
    <p class="lz-prose">
      Stöchiometrie (griech. <em>stoicheion</em> = Element, <em>metron</em> = Maß)
      ist die <strong>quantitative Beschreibung der Zusammensetzung von Stoffen
      und der Mengenverhältnisse bei chemischen Reaktionen</strong>.
      Sie ist die rechnerische Grundlage der gesamten Chemie — von der
      Laborpräparation bis zur großtechnischen Synthese.
      Das zentrale Werkzeug: die <strong>Stoffmenge n</strong> in der Einheit Mol.
    </p>

    <!-- ─── Das Mol ─── -->
    <h3 class="lz-h3">Das Mol — Brücke zwischen Teilchen und Masse</h3>
    <p class="lz-prose">
      Atome und Moleküle sind zu klein und zu leicht, um einzeln gewogen zu werden.
      Das <strong>Mol</strong> löst dieses Problem: Es ist die Stoffmenge, die genau
      <strong>6,022 140 76 · 10²³</strong> Teilchen enthält (Avogadro-Konstante Nₐ,
      seit 2019 exakt definiert). Diese Zahl ist so gewählt, dass die Molmasse M
      in g/mol numerisch gleich der relativen Atommasse Aᵣ (aus dem PSE) ist.
    </p>

    ${renderFormulaBox({
      label:   'Die vier Wege zur Stoffmenge n',
      formula: 'n = m / M &nbsp;=&nbsp; N / Nₐ &nbsp;=&nbsp; V / Vₘ &nbsp;=&nbsp; c · V',
      desc:    'n [mol] · m [g] · M [g/mol] · N [Teilchenanzahl] · Nₐ = 6,022·10²³ mol⁻¹ · V_Gas [L] · Vₘ [L/mol] · c [mol/L] · V_Lsg [L]',
    })}

    ${renderTable({
      headers: ['Größe', 'Symbol', 'Einheit', 'Definition / Formel', 'Beispiel: H₂SO₄'],
      rows: [
        ['Stoffmenge',         'n',   'mol',    'n = m/M = N/Nₐ = V/Vₘ = c·V',   'n = 9,8 g / 98,08 g/mol = 0,100 mol'],
        ['Molmasse',           'M',   'g/mol',  'M = Σ Aᵣ(Atome) in Formeleinheit','M(H₂SO₄) = 2·1,008 + 32,06 + 4·16,00 = 98,08 g/mol'],
        ['Masse',              'm',   'g',      'm = n · M',                       'm = 0,100 mol · 98,08 g/mol = 9,808 g'],
        ['Molares Volumen',    'Vₘ',  'L/mol',  'Vₘ = V/n (nur Gase)',             'Vₘ(ideal, 0°C, 1013 hPa) = 22,414 L/mol'],
        ['Konzentration',      'c',   'mol/L',  'c = n/V',                         'c = 0,100 mol / 0,250 L = 0,400 mol/L'],
        ['Teilchenanzahl',     'N',   '—',      'N = n · Nₐ',                      'N = 0,100 · 6,022·10²³ = 6,022·10²²'],
        ['Avogadro-Konstante', 'Nₐ',  'mol⁻¹', 'Nₐ = 6,022 140 76 · 10²³ mol⁻¹', 'Exakt seit SI-Reform 2019'],
      ],
      highlight: [0, 4],
    })}

    <!-- ─── Molmasse berechnen ─── -->
    <h3 class="lz-h3" style="margin-top:1.75rem;">Molmasse bestimmen — aus dem PSE</h3>
    <p class="lz-prose">
      Die Molmasse M einer Verbindung ergibt sich aus der
      <strong>Summe der relativen Atommassen Aᵣ</strong> aller Atome in der
      Summenformel, abgelesen aus dem Periodensystem.
    </p>

    ${renderTable({
      headers: ['Verbindung', 'Summenformel', 'Berechnung', 'M [g/mol]'],
      rows: [
        ['Wasser',           'H₂O',       '2·1,008 + 15,999',                              '18,015'],
        ['Kochsalz',         'NaCl',      '22,990 + 35,453',                               '58,44'],
        ['Schwefelsäure',    'H₂SO₄',     '2·1,008 + 32,06 + 4·15,999',                   '98,08'],
        ['Glucose',          'C₆H₁₂O₆',  '6·12,011 + 12·1,008 + 6·15,999',               '180,16'],
        ['Calciumcarbonat',  'CaCO₃',     '40,078 + 12,011 + 3·15,999',                   '100,09'],
        ['Ammoniak',         'NH₃',       '14,007 + 3·1,008',                              '17,031'],
        ['Ethanol',          'C₂H₅OH',   '2·12,011 + 6·1,008 + 15,999',                  '46,069'],
        ['Essigsäure',       'CH₃COOH',  '2·12,011 + 4·1,008 + 2·15,999',               '60,052'],
        ['EDTA',             'C₁₀H₁₆N₂O₈','10·12,011+16·1,008+2·14,007+8·15,999',       '292,24'],
        ['Hämoglobin (ca.)', '—',         'Proteinkomplex mit 4 Häm-Gruppen',             '~64 500'],
      ],
      highlight: [0, 2, 3],
    })}

    ${renderInfobox({
      type: 'warning', icon: 'fas fa-exclamation-triangle', title: 'Häufige Fehler bei der Molmassenberechnung',
      body: `<strong>① Isotopenmassen vs. Atommassen:</strong>
             Im PSE stehen <em>mittlere</em> Atommassen (Isotopenmischung).
             Cl: Aᵣ = 35,453 (nicht 35 oder 37!) — dies ist der Mittelwert aus
             ⁳⁵Cl (75,77 %) und ³⁷Cl (24,23 %).<br>
             <strong>② Kristallwasser nicht vergessen:</strong>
             CuSO₄ · 5H₂O: M = 159,62 + 5·18,015 = 249,69 g/mol (nicht 159,62!)<br>
             <strong>③ Formeleinheit beachten:</strong>
             NaCl ist eine Formeleinheit aus einem Na⁺ und einem Cl⁻.
             Na₂SO₄: zwei Na, ein S, vier O.`,
    })}

    <!-- ─── Zusammensetzungsgrößen ─── -->
    <h3 class="lz-h3" style="margin-top:1.75rem;">Zusammensetzungsgrößen</h3>
    <p class="lz-prose">
      Zur Beschreibung von Mischungen und Lösungen gibt es verschiedene
      Konzentrationsmaße. Je nach Aufgabentyp ist eines geeigneter als das andere.
    </p>

    ${renderTable({
      headers: ['Größe', 'Symbol', 'Formel', 'Einheit', 'Typische Anwendung', 'Beispiel'],
      rows: [
        ['Stoffmengenkonzentration',
         'c',
         'c = n(Stoff) / V(Lösung)',
         'mol/L',
         'Titrationen, Gleichgewichtsrechnungen, pH-Berechnung',
         'c(HCl) = 0,1 mol/L: 0,1 mol HCl in 1 Liter Lösung'],
        ['Massenkonzentration',
         'β',
         'β = m(Stoff) / V(Lösung)',
         'g/L',
         'Klinische Chemie (Blutbild), Lebensmittelanalytik',
         'β(Glucose) = 5,0 g/L im Blut (Normbereich)'],
        ['Massenanteil',
         'w',
         'w = m(Stoff) / m(Lösung)',
         'dimensionslos / %',
         'Etiketten, Konzentrierte Säuren (HCl 37 %, H₂SO₄ 96 %)',
         'w(NaCl) = 0,09 = 9 % in Kochsalzlösung'],
        ['Molenfraktion (Molenbruch)',
         'x',
         'xᵢ = nᵢ / Σnⱼ',
         'dimensionslos',
         'Gasgemische, Dampfdruckberechnung (Raoult), Thermodynamik',
         'Luft: x(N₂) ≈ 0,781; x(O₂) ≈ 0,209; x(Ar) ≈ 0,009'],
        ['Volumenanteil',
         'φ',
         'φ = V(Stoff) / V(Gemisch)',
         'dimensionslos / %',
         'Gasgemische (Luftzusammensetzung), Alkohol in Getränken',
         'Bier: φ(Ethanol) ≈ 0,05 = 5 vol%'],
        ['Stoffmengenanteil',
         'y',
         'yᵢ = nᵢ / n(ges)',
         'dimensionslos / mol%',
         'Gasanalysen, Gasgemische',
         'Atemluft: y(CO₂) ≈ 0,04 % = 400 ppm'],
      ],
      highlight: [0, 2],
    })}

    ${renderInfobox({
      type: 'blue', icon: 'fas fa-flask', title: 'Umrechnung zwischen Massenanteil w und Konzentration c',
      body: `Gegeben: w (Massenanteil) und ρ (Dichte der Lösung, g/mL) → gesucht: c (mol/L)<br><br>
             <strong>Formel:</strong> c = (w · ρ · 1000) / M<br>
             (Faktor 1000: Umrechnung g/mL → g/L)<br><br>
             <strong>Beispiel — konzentrierte Salzsäure:</strong><br>
             w(HCl) = 0,37 (37 %), ρ = 1,19 g/mL, M(HCl) = 36,46 g/mol<br>
             c = (0,37 · 1,19 · 1000) / 36,46 = 440,3 / 36,46 = <strong>12,1 mol/L</strong><br><br>
             <strong>Beispiel — konzentrierte Schwefelsäure:</strong><br>
             w(H₂SO₄) = 0,96, ρ = 1,84 g/mL, M = 98,08 g/mol<br>
             c = (0,96 · 1,84 · 1000) / 98,08 = <strong>18,0 mol/L</strong>`,
    })}

    <!-- ─── Ideales Gasgesetz ─── -->
    <h3 class="lz-h3" style="margin-top:1.75rem;">Das ideale Gasgesetz und das molare Volumen</h3>
    <p class="lz-prose">
      Für <strong>ideale Gase</strong> (keine intermolekularen Wechselwirkungen,
      Teilchen selbst volumenlos) gilt die allgemeine Zustandsgleichung.
      Reale Gase weichen davon ab — bei hohen Drücken und tiefen Temperaturen
      stärker (Van-der-Waals-Gleichung nötig).
    </p>

    ${renderFormulaBox({
      label:   'Ideales Gasgesetz',
      formula: 'p · V = n · R · T',
      desc:    'p [Pa] · V [m³] (oder p [bar], V [L]) · n [mol] · R = 8,314 J/(mol·K) = 8,314 Pa·m³/(mol·K) = 0,08314 L·bar/(mol·K) · T [K]',
    })}

    ${renderTable({
      headers: ['Bedingung', 'T', 'p', 'Vₘ', 'Bezeichnung'],
      rows: [
        ['Normalbedingungen (NTP)',    '273,15 K (0 °C)',   '101 325 Pa (1 atm)',   '22,414 L/mol', 'Historisch; in alten Tabellen'],
        ['Standardbedingungen (STP)', '273,15 K (0 °C)',   '100 000 Pa (1 bar)',   '22,711 L/mol', 'IUPAC seit 1982; aktuelle Tabellen'],
        ['Raumtemperatur',            '298,15 K (25 °C)',  '100 000 Pa (1 bar)',   '24,789 L/mol', 'Üblich für thermodynamische Standardgrößen'],
      ],
      highlight: [1],
    })}

    ${renderAccordion([
      {
        title: 'Historische Gasgesetze — Spezialfälle des idealen Gasgesetzes',
        content: `${renderTable({
          headers: ['Gesetz', 'Bedingung', 'Formel', 'Grafik'],
          rows: [
            ['Boyle-Mariotte (1662)', 'T = const. (isotherm)', 'p · V = const. → p₁V₁ = p₂V₂', 'Hyperbel p–V'],
            ['Gay-Lussac (1802)',     'V = const. (isochor)',  'p / T = const. → p₁/T₁ = p₂/T₂', 'Gerade p–T'],
            ['Charles / Amontons (1787)', 'p = const. (isobar)', 'V / T = const. → V₁/T₁ = V₂/T₂', 'Gerade V–T'],
            ['Avogadro (1811)',       'T, p = const.',         'V / n = const. → gleiche n, gleiche V', 'Gerade V–n'],
          ],
        })}
        <p class="lz-prose" style="margin-top:0.75rem;">
          Alle vier Gesetze sind Spezialfälle von p·V = n·R·T, bei denen jeweils
          eine oder zwei Größen konstant gehalten werden.
        </p>`,
      },
      {
        title: 'Van-der-Waals-Gleichung für reale Gase',
        content: `<p class="lz-prose">Reale Gase weichen vom idealen Verhalten ab, weil:</p>
                  <p class="lz-prose">① Die Teilchen selbst ein Eigenvolumen haben (Kovolumen b)<br>
                  ② Zwischenmolekulare Kräfte wirken (innerer Druck a/V²)</p>
                  <div class="lz-formula-box">
                    <div class="lz-formula-main">(p + a·n²/V²) · (V − n·b) = n·R·T</div>
                    <div class="lz-formula-desc">
                      a [L²·bar/mol²] = innerer Druckterm (Maß für Wechselwirkungen)<br>
                      b [L/mol] = Kovolumen (Eigenvolumen der Teilchen)<br>
                      Beispiel: CO₂: a = 3,640, b = 0,04267 — deutliche Abweichung vom Idealgas
                    </div>
                  </div>`,
      },
    ])}

    <!-- ─── Verdünnen / Mischen ─── -->
    <h3 class="lz-h3" style="margin-top:1.75rem;">Verdünnen und Mischen von Lösungen</h3>

    ${renderFormulaBox({
      label:   'Verdünnung — Stoffmenge bleibt konstant',
      formula: 'c₁ · V₁ = c₂ · V₂',
      desc:    'c₁, V₁: Ausgangslösung · c₂, V₂: verdünnte Lösung · V(Wasser) = V₂ − V₁',
    })}

    ${renderFormulaBox({
      label:   'Mischen zweier Lösungen gleichen Stoffes',
      formula: 'c_mix = (c₁·V₁ + c₂·V₂) / (V₁ + V₂)',
      desc:    'Gilt näherungsweise — genau nur wenn keine Volumenkontrakion (z.B. H₂SO₄ + H₂O kontrahiert stark!)',
    })}

    ${renderInfobox({
      type: 'warning', icon: 'fas fa-exclamation-triangle', title: 'Vorsicht beim Verdünnen konzentrierter Säuren',
      body: `<strong>IMMER Säure ins Wasser — nie Wasser zur Säure!</strong><br>
             Beim Verdünnen von H₂SO₄ (konzentriert) wird enorm viel Wärme frei
             (Hydratationsenthalpie der H⁺-Ionen ≈ −1100 kJ/mol).
             Wenn Wasser zur Säure gegeben wird, verdampft das Wasser schlagartig —
             es spritzt ätzende konzentrierte Säure umher (Laugenspritzer-Effekt).<br>
             Immer: Säure <em>langsam unter Rühren</em> ins Wasser — so wird die Wärme
             auf die große Wassermenge verteilt.`,
    })}
  `; }

  // ══════════════════════════════════════════════════════════
  // 1.3.2 — Berechnungen zu chemischen Reaktionen
  // ══════════════════════════════════════════════════════════
  _reaktion() { return `
    ${renderSubhead('1.3.2 — Berechnungen zu chemischen Reaktionen')}

    <h3 class="lz-h3">Der stöchiometrische Rechenweg</h3>
    <p class="lz-prose">
      Alle stöchiometrischen Berechnungen zu Reaktionen folgen demselben
      universellen Schema, das auf dem <strong>Koeffizientenverhältnis</strong>
      der balancierten Reaktionsgleichung basiert.
      Die Koeffizienten geben direkt das Stoffmengenverhältnis der Reaktionsteilnehmer an.
    </p>

    ${renderInfobox({
      type: '', icon: 'fas fa-list-ol', title: 'Der universelle stöchiometrische Lösungsweg',
      body: `<strong>①</strong> Reaktionsgleichung aufstellen und atomar bilanzieren<br>
             <strong>②</strong> Gegebene Größe in Stoffmenge n umrechnen: n = m/M oder n = c·V oder n = V_Gas/Vₘ<br>
             <strong>③</strong> Koeffizientenverhältnis ablesen: n(B) = n(A) · Koeff(B)/Koeff(A)<br>
             <strong>④</strong> Gesuchte Stoffmenge in gewünschte Größe umrechnen<br>
             <strong>⑤</strong> Einheitenprobe; Plausibilitätsprüfung (Größenordnung sinnvoll?)<br>
             <strong>⑥</strong> Ggf. Ausbeute berücksichtigen: m_real = m_theor · η`,
    })}

    ${renderFormulaBox({
      label:   'Koeffizientenverhältnis für aA + bB → cC + dD',
      formula: 'n(A) : n(B) : n(C) : n(D) = a : b : c : d',
      desc:    'Beispiel: N₂ + 3H₂ → 2NH₃ → n(H₂) = 3 · n(N₂) → n(NH₃) = 2 · n(N₂)',
    })}

    <!-- ─── Ausbeute ─── -->
    <h3 class="lz-h3" style="margin-top:1.75rem;">Ausbeute, Umsatz und limitierendes Reagenz</h3>

    ${renderTable({
      headers: ['Begriff', 'Symbol', 'Formel', 'Bedeutung'],
      rows: [
        ['Theoretische Ausbeute', 'n_theor / m_theor',
         'Aus stöchiometrischer Rechnung (100 % Umsatz, keine Verluste)',
         'Maximale mögliche Produktmenge nach dem Koeffizientenverhältnis'],
        ['Tatsächliche Ausbeute', 'n_real / m_real',
         'Experimentell bestimmt (wiegen, titrieren, …)',
         'Tatsächlich isolierte Produktmenge nach Aufarbeitung'],
        ['Ausbeute', 'η (eta)',
         'η = m_real / m_theor · 100 %',
         'Effizienz der Reaktion; im Labor oft 60–95 %; selten 100 %'],
        ['Umsatz', 'U',
         'U = (n₀ − n_GG) / n₀ · 100 %',
         'Wie viel Prozent des Edukts hat tatsächlich reagiert?'],
        ['Selektivität', 'S',
         'S = n(Zielprodukt) / n(umgesetztes Edukt) · 100 %',
         'Anteil des Edukts, das zum Zielprodukt wird (nicht zu Nebenprodukten)'],
      ],
      highlight: [2],
    })}

    ${renderInfobox({
      type: 'blue', icon: 'fas fa-search', title: 'Das limitierende Reagenz bestimmen',
      body: `Wenn Edukte <strong>nicht im stöchiometrischen Verhältnis</strong> eingesetzt werden,
             ist das <em>zuerst verbrauchte Edukt</em> das limitierende Reagenz —
             es bestimmt die maximale theoretische Ausbeute.<br><br>
             <strong>Vorgehensweise:</strong><br>
             ① Stoffmengen aller Edukte berechnen: n₁ = m₁/M₁, n₂ = m₂/M₂<br>
             ② Für jedes Edukt prüfen, wie viel Produkt es liefern könnte:<br>
             &nbsp;&nbsp;&nbsp;n_Produkt(aus A) = n(A) · Koeff(P)/Koeff(A)<br>
             &nbsp;&nbsp;&nbsp;n_Produkt(aus B) = n(B) · Koeff(P)/Koeff(B)<br>
             ③ Das kleinere Ergebnis bestimmt die tatsächliche theoretische Ausbeute.
             Das entsprechende Edukt ist das limitierende Reagenz.<br><br>
             <strong>Beispiel:</strong> 5,6 g Fe + 3,2 g S → FeS<br>
             n(Fe) = 5,6/55,85 = 0,1002 mol → n_FeS = 0,1002 mol<br>
             n(S) = 3,2/32,06 = 0,0998 mol → n_FeS = 0,0998 mol<br>
             → S ist das limitierende Reagenz → m_theor(FeS) = 0,0998 · 87,91 = 8,78 g`,
    })}

    <h3 class="lz-h3" style="margin-top:1.75rem;">Gründe für Ausbeuteverluste</h3>

    ${renderMerkboxGrid([
      {
        icon: 'fas fa-flask',
        title: 'Gleichgewichtsreaktion',
        text: `Reversible Reaktionen erreichen kein vollständiges Umsatz.
               Esterbildung: GG-Konstante K_c ≈ 4 → theoretisch max. ~67 % ohne
               Optimierung. Lösung: Produkt abtrennen (Le Chatelier) oder
               Edukt-Überschuss.`,
      },
      {
        icon: 'fas fa-random',
        title: 'Nebenreaktionen',
        text: `Parallel zur Hauptreaktion entstehen Nebenprodukte.
               Beispiel: Nitrierung von Benzol → ortho/para-Nitrobenzol
               als Hauptprodukt, aber auch meta-Isomer.
               Reagiert auch mit Oxidationsmitteln zu weiteren Produkten.`,
      },
      {
        icon: 'fas fa-filter',
        title: 'Aufarbeitungsverluste',
        text: `Filtration, Umkristallisation, Destillation, Extraktion —
               jeder Aufreinigungsschritt verursacht mechanische Verluste
               (am Kolbenrand, im Filter, durch Löslichkeit in der Mutterlauge).`,
      },
      {
        icon: 'fas fa-thermometer-half',
        title: 'Zersetzung / Instabilität',
        text: `Produkt zersetzt sich unter Reaktionsbedingungen (Temperatur,
               Säure/Base, Licht). Beispiel: H₂O₂ zersetzt sich zu H₂O + ½O₂,
               besonders katalytisch beschleunigt durch Fe³⁺, MnO₂.`,
      },
    ])}

    <!-- ─── Titrationsrechnung ─── -->
    <h3 class="lz-h3" style="margin-top:1.75rem;">Titrationsrechnungen</h3>
    <p class="lz-prose">
      Bei einer Titration wird die unbekannte Konzentration des <strong>Analyten</strong>
      durch Reaktion mit einer Lösung bekannter Konzentration (der
      <strong>Maßlösung</strong> oder <strong>Titerlösung</strong>) bestimmt.
      Am <strong>Äquivalenzpunkt</strong> haben Analyt und Maßlösung im
      stöchiometrischen Verhältnis reagiert.
    </p>

    ${renderFormulaBox({
      label:   'Allgemeine Titrationsformel',
      formula: 'c(A) · V(A) · z(A) = c(B) · V(B) · z(B)',
      desc:    'z = Äquivalenzzahl (Anzahl übertragener H⁺ oder e⁻ pro Formeleinheit) · Am Äquivalenzpunkt: n(A)·z(A) = n(B)·z(B)',
    })}

    ${renderTable({
      headers: ['Titrationstyp', 'Reaktion', 'Indikator / Endpunkterkennung', 'Äquivalenzzahl z', 'Beispielrechnung'],
      rows: [
        ['Säure-Base-Titration (Alkalimetrie)',
         'HCl + NaOH → NaCl + H₂O',
         'Phenolphthalein (Umschlag pH 8,2–10,0) oder Bromthymolblau (pH 6,0–7,6)',
         'z = 1 für HCl und NaOH',
         '20,00 mL HCl (unbekannt) + 18,45 mL NaOH (c = 0,1000 mol/L) → c(HCl) = 0,1000·18,45/20,00 = 0,09225 mol/L'],
        ['Säure-Base (mehrprotonige Säure)',
         'H₃PO₄ + 3 NaOH → Na₃PO₄ + 3 H₂O',
         'Thymolphthalein (vollständige Deprotonierung)',
         'z(H₃PO₄) = 3; z(NaOH) = 1',
         'c(H₃PO₄) = c(NaOH) · V(NaOH) / (3 · V(H₃PO₄))'],
        ['Redoxtitration (Permanganometrie)',
         'MnO₄⁻ + 5 Fe²⁺ + 8 H⁺ → Mn²⁺ + 5 Fe³⁺ + 4 H₂O',
         'Eigenindikation: KMnO₄ (violett → entfärbt sich); Endpunkt: bleibende Rosafärbung',
         'z(MnO₄⁻) = 5; z(Fe²⁺) = 1',
         'n(Fe²⁺) = 5 · n(MnO₄⁻); c(Fe²⁺) = 5 · c(KMnO₄) · V(KMnO₄) / V(Probe)'],
        ['Komplexometrie (EDTA-Titration)',
         'Ca²⁺ + H₂Y²⁻ → [CaY]²⁻ + 2 H⁺',
         'Eriochromschwarz T (EBT): Wein-rot → Blau am Endpunkt; pH 10 (Ammoniak-Puffer)',
         'z = 1 für Ca²⁺ und EDTA (1:1-Komplex)',
         'n(Ca²⁺) = n(EDTA); c(Ca²⁺) = c(EDTA) · V(EDTA) / V(Probe)'],
        ['Fällungstitration (Argentometrie, Mohr)',
         'Ag⁺ + Cl⁻ → AgCl↓ (K_L = 1,8·10⁻¹⁰)',
         'K₂CrO₄ als Indikator: Ag₂CrO₄ (ziegelrot) fällt erst nach vollständiger Cl⁻-Fällung',
         'z = 1',
         'c(Cl⁻) = c(AgNO₃) · V(AgNO₃) / V(Probe)'],
      ],
      highlight: [0, 2],
    })}

    <!-- ─── Aufgabenbeispiele ─── -->
    <h3 class="lz-h3" style="margin-top:1.75rem;">Vollständig durchgerechnete Beispielaufgaben</h3>

    ${renderAccordion([
      {
        title: 'A1 — Masse aus Stoffmenge: Wie viel g CuSO₄·5H₂O für 0,250 mol CuSO₄?',
        content: `<p class="lz-prose"><strong>Gegeben:</strong> n(CuSO₄) = 0,250 mol; M(CuSO₄·5H₂O) = ?</p>
                  <p class="lz-prose"><strong>Schritt 1 — Molmasse:</strong><br>
                  M(CuSO₄) = 63,55 + 32,06 + 4·16,00 = 159,61 g/mol<br>
                  M(5 H₂O) = 5 · 18,015 = 90,075 g/mol<br>
                  M(CuSO₄·5H₂O) = 159,61 + 90,08 = <strong>249,69 g/mol</strong></p>
                  <p class="lz-prose"><strong>Schritt 2 — Masse:</strong><br>
                  m = n · M = 0,250 mol · 249,69 g/mol = <strong>62,42 g</strong></p>`,
      },
      {
        title: 'A2 — Reaktionsberechnung: Verbrennung von Ethan — m(CO₂) aus 15,0 g C₂H₆',
        content: `<p class="lz-prose"><strong>Reaktionsgleichung:</strong><br>
                  2 C₂H₆ + 7 O₂ → 4 CO₂ + 6 H₂O</p>
                  <p class="lz-prose"><strong>Schritt 1 — n(C₂H₆):</strong><br>
                  M(C₂H₆) = 2·12,011 + 6·1,008 = 30,070 g/mol<br>
                  n(C₂H₆) = 15,0 g / 30,070 g/mol = 0,4988 mol</p>
                  <p class="lz-prose"><strong>Schritt 2 — Koeffizientenverhältnis:</strong><br>
                  Koeff(CO₂) / Koeff(C₂H₆) = 4/2 = 2<br>
                  n(CO₂) = 2 · 0,4988 mol = 0,9976 mol</p>
                  <p class="lz-prose"><strong>Schritt 3 — m(CO₂):</strong><br>
                  M(CO₂) = 12,011 + 2·16,00 = 44,011 g/mol<br>
                  m(CO₂) = 0,9976 · 44,011 = <strong>43,9 g</strong></p>`,
      },
      {
        title: 'A3 — Limitierendes Reagenz: 10,0 g Fe + 5,0 g Cl₂ → FeCl₂ oder FeCl₃?',
        content: `<p class="lz-prose"><strong>Reaktionsgleichung (Überschuss Cl₂):</strong><br>
                  2 Fe + 3 Cl₂ → 2 FeCl₃</p>
                  <p class="lz-prose"><strong>Schritt 1 — Stoffmengen der Edukte:</strong><br>
                  n(Fe) = 10,0 / 55,845 = 0,1791 mol<br>
                  n(Cl₂) = 5,0 / 70,906 = 0,0705 mol</p>
                  <p class="lz-prose"><strong>Schritt 2 — Theoretischer Bedarf:</strong><br>
                  Für 0,1791 mol Fe braucht man: n(Cl₂) = 3/2 · 0,1791 = 0,2687 mol — aber nur 0,0705 mol vorhanden!<br>
                  → <strong>Cl₂ ist das limitierende Reagenz</strong></p>
                  <p class="lz-prose"><strong>Schritt 3 — Ausbeute aus Cl₂:</strong><br>
                  n(FeCl₃) = 2/3 · 0,0705 mol = 0,04700 mol<br>
                  m(FeCl₃) = 0,04700 · 162,20 = <strong>7,62 g</strong><br>
                  Fe im Überschuss: Δn(Fe) = 0,1791 − 2/3·0,0705 = 0,1791 − 0,0470 = 0,1321 mol Fe verbleiben unreagiert.</p>`,
      },
      {
        title: 'A4 — Ausbeute: Esterbildung Essigsäure + Ethanol, 78,0 % Ausbeute',
        content: `<p class="lz-prose"><strong>Reaktionsgleichung:</strong><br>
                  CH₃COOH + C₂H₅OH ⇌ CH₃COOC₂H₅ + H₂O</p>
                  <p class="lz-prose"><strong>Gegeben:</strong> 30,0 g Essigsäure; Ausbeute η = 78,0 %</p>
                  <p class="lz-prose"><strong>Schritt 1 — n(CH₃COOH):</strong><br>
                  M(CH₃COOH) = 60,052 g/mol<br>
                  n = 30,0 / 60,052 = 0,4995 mol</p>
                  <p class="lz-prose"><strong>Schritt 2 — theoretische Ausbeute Ethylacetat (1:1):</strong><br>
                  n_theor(CH₃COOC₂H₅) = 0,4995 mol<br>
                  M(CH₃COOC₂H₅) = 88,106 g/mol<br>
                  m_theor = 0,4995 · 88,106 = 44,01 g</p>
                  <p class="lz-prose"><strong>Schritt 3 — tatsächliche Ausbeute:</strong><br>
                  m_real = m_theor · η = 44,01 · 0,780 = <strong>34,3 g</strong></p>`,
      },
      {
        title: 'A5 — Titrationsberechnung: c(H₂SO₄) durch NaOH-Titration',
        content: `<p class="lz-prose"><strong>Gegeben:</strong>
                  20,00 mL H₂SO₄ (unbekannte Konzentration) mit
                  32,60 mL NaOH (c = 0,1000 mol/L) bis Äquivalenzpunkt titriert.</p>
                  <p class="lz-prose"><strong>Reaktionsgleichung:</strong><br>
                  H₂SO₄ + 2 NaOH → Na₂SO₄ + 2 H₂O<br>
                  z(H₂SO₄) = 2; z(NaOH) = 1</p>
                  <p class="lz-prose"><strong>Schritt 1 — n(NaOH):</strong><br>
                  n(NaOH) = 0,1000 mol/L · 0,03260 L = 3,260·10⁻³ mol</p>
                  <p class="lz-prose"><strong>Schritt 2 — n(H₂SO₄):</strong><br>
                  n(H₂SO₄) = n(NaOH) / 2 = 1,630·10⁻³ mol</p>
                  <p class="lz-prose"><strong>Schritt 3 — c(H₂SO₄):</strong><br>
                  c(H₂SO₄) = 1,630·10⁻³ mol / 0,02000 L = <strong>0,08150 mol/L</strong></p>`,
      },
      {
        title: 'A6 — Gasvolumen: V(CO₂) bei Verbrennung von 5,00 g Propan (25°C, 1 bar)',
        content: `<p class="lz-prose"><strong>Reaktionsgleichung:</strong><br>
                  C₃H₈ + 5 O₂ → 3 CO₂ + 4 H₂O</p>
                  <p class="lz-prose"><strong>Schritt 1 — n(C₃H₈):</strong><br>
                  M(C₃H₈) = 3·12,011 + 8·1,008 = 44,097 g/mol<br>
                  n(C₃H₈) = 5,00 / 44,097 = 0,1134 mol</p>
                  <p class="lz-prose"><strong>Schritt 2 — n(CO₂):</strong><br>
                  n(CO₂) = 3 · 0,1134 = 0,3402 mol</p>
                  <p class="lz-prose"><strong>Schritt 3 — V(CO₂) mit idealem Gasgesetz:</strong><br>
                  V = n·R·T/p = 0,3402 · 8,314 · 298,15 / 100000 m³<br>
                  = 0,3402 · 2479,0 / 100000 = 8,433·10⁻³ m³ = <strong>8,43 L</strong></p>`,
      },
    ])}

    ${renderInfobox({
      type: 'success', icon: 'fas fa-graduation-cap', title: 'Stöchiometrie-Checkliste für das Abitur',
      body: `✓ Reaktionsgleichung immer zuerst bilanzieren (Atome UND Ladung!)<br>
             ✓ Alle Größen in SI-kompatible Einheiten bringen (g, mol, L, mol/L, K)<br>
             ✓ n immer als Zwischengröße berechnen — nie direkt Massen umrechnen<br>
             ✓ Koeffizientenverhältnis ablesen: n(B) = n(A) · Koeff(B)/Koeff(A)<br>
             ✓ Bei mehreren Edukten: Limitierendes Reagenz bestimmen<br>
             ✓ Ausbeute: m_real = m_theor · η (η als Dezimalzahl, nicht Prozent)<br>
             ✓ Gasrechnungen: T in Kelvin, Vₘ(STP) = 22,711 L/mol oder p·V = n·R·T<br>
             ✓ Titration: z-Wert der Säure beachten (H₂SO₄: z=2, H₃PO₄: z=1,2,3 je nach Indikator)<br>
             ✓ Einheitenprobe am Ende: Einheiten kürzen und prüfen`,
    })}
  `; }

  init() {
    i18n.init();
    initScrollReveal();
    initInteractive(document);
    initTabs();
  }
}