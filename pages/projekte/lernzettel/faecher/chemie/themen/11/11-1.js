// pages/projekte/lernzettel/faecher/chemie/themen/11/11-1.js
// Kapitel 11.1 — Klassische Analyseverfahren
// 11.1.1  Qualitative Analyse
// 11.1.2  Quantitative Analyse

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
  { key: 'a', icon: 'fas fa-search',    label: '11.1.1 Qualitative Analyse'  },
  { key: 'b', icon: 'fas fa-balance-scale', label: '11.1.2 Quantitative Analyse'},
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
  return `<nav class="wim-tabs" role="tablist" id="tabs111">${nav}</nav>${panels}`;
}

function initTabs() {
  const nav = document.getElementById('tabs111');
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

export default class Chemie_11_1 {
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
          <i class="fas fa-chevron-right"></i><span>Kapitel 11</span>
          <i class="fas fa-chevron-right"></i><span>11.1</span>
        </div>
        <h1 class="lz-sub-title">Klassische Analyseverfahren<br><em>Qualitative und quantitative Analyse</em></h1>
        <p class="lz-sub-desc">
          Kationentrennungsgang · Anionennachweis · Flammenfärbung ·
          Maßanalyse · Gravimetrie · Titrimetrie · Fehlerrechnung
        </p>
        ${renderTags(['Kap. 11.1', 'Qualitative Analyse', 'Titration', 'Gravimetrie', 'Kationen', 'LK Chemie BW'])}
      </div>
    </section>

    <section class="lz-content-section">
      <div class="lz-section-wrap">
        ${buildWimHTML(k => k === 'a' ? this._qualitativ() : this._quantitativ())}
      </div>
    </section>

    <section class="lz-content-section" style="padding:1.5rem 0 3rem;">
      <div class="lz-section-wrap">
        ${renderPageNav({
          prev: { label: '10.6 Umweltbezogene Chemie',    link: `${BASE}/themen/10/10-6` },
          next: { label: '11.2 Instrumentelle Analytik',   link: `${BASE}/themen/11/11-2` },
        }, BASE)}
      </div>
    </section>
    ${footerHTML(this.router)}
  `; }

  // ══════════════════════════════════════════════════════════
  // 11.1.1 — Qualitative Analyse
  // ══════════════════════════════════════════════════════════
  _qualitativ() { return `
    ${renderSubhead('11.1.1 — Qualitative Analyse')}

    <h2 class="lz-h2">Was ist qualitative Analyse?</h2>
    <p class="lz-prose">
      Die <strong>qualitative Analyse</strong> stellt fest, <em>welche</em>
      Stoffe oder Ionen in einer Probe vorhanden sind — ohne ihre Menge zu bestimmen.
      Sie nutzt charakteristische chemische Reaktionen (Fällungen, Farbreaktionen,
      Gasbildung, Flammenfärbung), die eindeutige Nachweise für bestimmte Ionen liefern.
    </p>

    <h3 class="lz-h3">Flammenfärbung — Kationennachweis durch Atomemission</h3>
    <p class="lz-prose">
      Bestimmte Metall-Ionen färben die Flamme charakteristisch, wenn sie thermisch
      angeregt werden. Elektronen werden auf höhere Energieniveaus angehoben und
      emittieren beim Zurückfallen zur Grundzustandsfrequenz spezifische Photonen.
    </p>

    ${renderTable({
      headers: ['Ion', 'Flammenfarbe', 'Wellenlänge [nm]', 'Beobachtung', 'Interferenz'],
      rows: [
        ['Li⁺',  'Karmesinrot',    '670',           'Intensiv rot; gut sichtbar',                'Ca²⁺ ähnlich; Kobaltblauglas hilft'],
        ['Na⁺',  'Intensiv gelb',  '589 (Dublett)', 'Dominiert; überdeckt alle anderen Farben!', 'Allgegenwärtige Verunreinigung; Na stört alle anderen'],
        ['K⁺',   'Violett',        '766/770',       'Schwach violett; durch Kobaltblauglas sichtbar (Na herausgefiltert)', 'Von Na-Gelb überdeckt ohne Filter'],
        ['Ca²⁺', 'Ziegelrot',      '616/623',       'Ziegelrot–orange',                          'Ähnl. Sr; Spektroskop nötig'],
        ['Sr²⁺', 'Karmesin',       '606/636/687',   'Kräftiges Rot',                             'Ähnl. Ca; Li'],
        ['Ba²⁺', 'Gelbgrün',       '524/514',       'Blassgrün',                                 'Deutlich von Ca unterscheidbar'],
        ['Cu²⁺', 'Blaugrün',       '515/521',       'Typische blaugrüne Flamme',                 'Cu in HCl: intensiver blaue Halogenidflamme'],
        ['Pb²⁺', 'Blau-weiß',      '405/406',       'Schwach bläulich weiß',                     'Schwach; kein eindeutiger Nachweis'],
        ['Fe³⁺', 'Keine/gelb',     '—',             'Kaum Flammenfärbung',                       'Für Fe besser Fällungsreaktionen'],
        ['Zn²⁺', 'Blau-weiß-grün','—',             'Schwach',                                   'Kein eindeutiger Nachweis'],
      ],
      highlight: [0, 1, 2, 6],
    })}

    <h3 class="lz-h3" style="margin-top:1.75rem;">Nachweis der wichtigsten Kationen — systematische Übersicht</h3>

    ${renderTable({
      headers: ['Ion', 'Nachweis-Reagenz', 'Reaktion', 'Beobachtung', 'Löslichkeit Niederschlag'],
      rows: [
        ['Ag⁺',   'HCl / Cl⁻',            'Ag⁺ + Cl⁻ → AgCl↓',            'Weißer Niederschlag (lichtempfindlich → grau); löslich in NH₃', 'AgCl: K_L=1,8·10⁻¹⁰; AgBr: K_L=5,0·10⁻¹³; AgI: K_L=8,5·10⁻¹⁷'],
        ['Pb²⁺',  'H₂SO₄ / SO₄²⁻',        'Pb²⁺ + SO₄²⁻ → PbSO₄↓',        'Weißer Niederschlag; löslich in NaOH (Amphoterie)',         'PbSO₄: K_L=1,6·10⁻⁸; PbCrO₄: gelb'],
        ['Ba²⁺',  'H₂SO₄ / SO₄²⁻',        'Ba²⁺ + SO₄²⁻ → BaSO₄↓',        'Weißer, feinkörniger Nd.; unlöslich in Säuren!',            'BaSO₄: K_L=1,1·10⁻¹⁰; Röntgenkontrastmittel'],
        ['Fe²⁺',  'K₃[Fe(CN)₆]',           'Fe²⁺ + [Fe(CN)₆]³⁻ → Turnbull-Blau', 'Dunkelblauer Nd. (heute: Berliner Blau)',           '—'],
        ['Fe³⁺',  'KSCN oder K₄[Fe(CN)₆]', 'Fe³⁺ + SCN⁻ → [Fe(SCN)]²⁺ (blutrot)', 'Intensiv blutrot in Lösung',                    'SCN⁻: Empfindlichster Nachweis; noch 0,01 mg/L nachweisbar'],
        ['Cu²⁺',  'NH₃ (konz.)',            'Cu²⁺ + 4NH₃ → [Cu(NH₃)₄]²⁺',  'Tiefdunkelblau; charakteristisch',                         'Tetraamminkupfer(II)-Ion; intensives Blau'],
        ['Al³⁺',  'NaOH + Aluminon',        'Al³⁺ + 3OH⁻ → Al(OH)₃↓ (weiß, gallertartig)', 'In NaOH löslich: [Al(OH)₄]⁻ (amphoter)', 'Aluminon = Aurintricarbonsäure: rot mit Al³⁺'],
        ['Ca²⁺',  'C₂O₄²⁻ (Oxalat)',       'Ca²⁺ + C₂O₄²⁻ → CaC₂O₄↓',     'Weißer Nd.; unlöslich in Essigsäure, löslich in HCl',     'CaC₂O₄: K_L=2,3·10⁻⁹'],
        ['Mg²⁺',  'NH₃ + (NH₄)₂HPO₄',      'Mg²⁺ + NH₄⁺ + PO₄³⁻ → MgNH₄PO₄↓', 'Weißer kr. Nd. (Ammonium-Magnesiumphosphat)',      'Löslich in HCl; unlöslich in NH₃'],
        ['NH₄⁺',  'NaOH, dann Nessler',     'NH₄⁺ + OH⁻ → NH₃↑ (Lackmuspapier blau)', 'Ammoniak-Geruch; rotes Lackmuspapier wird blau', 'Nessler (K₂[HgI₄]/KOH): brauner Nd.'],
        ['Hg²⁺',  'SnCl₂',                  'Hg²⁺ + Sn²⁺ → Hg₂Cl₂↓ → Hg↓', 'Erst weißer Nd. (Kalomel Hg₂Cl₂), dann Grau (Hg)',     'Empfindlicher Schwermetall-Nachweis'],
        ['Ni²⁺',  'Dimethylglyoxim (DMG)',   'Ni²⁺ + 2DMG⁻ → [Ni(DMG)₂]↓',  'Roter kristalliner Nd. (sehr charakteristisch)',           'Unlöslich in Wasser; pH 5–9; spezifisch für Ni²⁺'],
      ],
      highlight: [3, 4, 5, 11],
    })}

    <h3 class="lz-h3" style="margin-top:1.75rem;">Nachweis der wichtigsten Anionen</h3>

    ${renderTable({
      headers: ['Ion', 'Nachweis-Reagenz', 'Reaktion/Beobachtung', 'Bedingungen', 'Interferenz'],
      rows: [
        ['Cl⁻',   'AgNO₃ / HNO₃',    'AgCl↓ (weiß); löslich in NH₃; unlöslich in HNO₃', 'Ansäuern mit HNO₃ (kein H₂SO₄!)',   'Br⁻, I⁻, CN⁻, SCN⁻, S²⁻ stören'],
        ['Br⁻',   'AgNO₃ / HNO₃',    'AgBr↓ (hellgelb); schwer löslich in NH₃',          '—',                                   'AgBr gelber als AgCl'],
        ['I⁻',    'AgNO₃ / HNO₃',    'AgI↓ (gelb); unlöslich in NH₃; unlöslich in HNO₃', '—',                                   'AgI intensiv gelb; + Stärke → blau (wenn I₂ freigesetzt)'],
        ['SO₄²⁻', 'BaCl₂ / HCl',     'BaSO₄↓ (weiß, feinkörnig); unlöslich in konz. HCl!', 'Ansäuern mit HCl (kein H₂SO₄)',    'Ba(CO₃) und Ba(SO₃) löslich in HCl → keine Interferenz'],
        ['CO₃²⁻', 'HCl / CO₂-Nachweis', 'CO₃²⁻ + 2H⁺ → H₂O + CO₂↑; CO₂ trübt Kalkwasser', 'Nachweis CO₂: Ca(OH)₂-Lösung',    'SO₃²⁻ ebenfalls CO₂-ähnlicher Geruch'],
        ['SO₃²⁻', 'H₂SO₄',           'SO₃²⁻ + 2H⁺ → SO₂↑ (stechend) + H₂O; bleicht Permanganat', '—',                         'SO₂ entfärbt KMnO₄; Nachweis auf feuchtem Pb-Acetat-Papier (Schwärzung)'],
        ['NO₃⁻',  'FeSO₄/konz. H₂SO₄ (Ringprobe)', 'Fe²⁺ + NO + H₂SO₄ → [Fe(NO)]²⁺ (brauner Ring)', 'Schichten: konz. H₂SO₄ unter Probe; brauner Ring', 'Klassische Ringprobe; Nitrit stört'],
        ['NO₂⁻',  'Griess-Reagenz',   'NO₂⁻ + Sulfanilsäure → Diazoniumion + α-Naphthylamin → Azofarb. (rot)', 'pH 2–3', 'Spezifisch für Nitrit; Einsatz auch in Wasseranalyse'],
        ['PO₄³⁻', 'Ammoniummolybdat (AMM) + HNO₃', '12 MoO₄²⁻ + PO₄³⁻ + 3NH₄⁺ + 24H⁺ → (NH₄)₃[PMo₁₂O₄₀]↓ (gelb)', '60°C; klar gelber Nd.', 'Arsensäure störend; PO₄ in Wässern (Eutrophierungsindikator)'],
        ['S²⁻',   'Pb-Acetat-Papier', 'Pb²⁺ + S²⁻ → PbS↓ (schwarz)',                    'Gasraum',                              'Geruch nach Fauleiern (H₂S); sehr empfindlich'],
        ['CN⁻',   'AgNO₃',           'Ag⁺ + CN⁻ → AgCN↓ (weiß); löslich in überschuss CN⁻ → [Ag(CN)₂]⁻', '—',               'Extrem giftig! Nicht selbst ausprobieren'],
        ['F⁻',    'CaCl₂ + H₂SO₄',  'Ätzt Glas (SiO₂ + 4HF → SiF₄ + 2H₂O); kein klarer Nd.', 'Spezialnachweis nötig',          'F⁻: einziges Halogenid ohne klaren AgF-Nd. (AgF löslich!)'],
      ],
      highlight: [0, 3, 4, 6, 8],
    })}

    <h3 class="lz-h3" style="margin-top:1.75rem;">Nachweis organischer Verbindungen und funktioneller Gruppen</h3>

    ${renderTable({
      headers: ['Verbindungsklasse', 'Nachweisreagenz', 'Reaktion', 'Beobachtung'],
      rows: [
        ['Aldehyde',          'Tollens-Reagenz [Ag(NH₃)₂]⁺',   'RCHO + 2[Ag(NH₃)₂]⁺ + 2OH⁻ → RCOO⁻ + 2Ag↓ + 4NH₃ + H₂O', 'Silberspiegel auf Glaswand (Silberabscheidung)'],
        ['Aldehyde (+ red. Zucker)', 'Fehling-Lösung (Cu²⁺ + Tartrat)', 'RCHO + 2Cu²⁺ + 5OH⁻ → RCOO⁻ + Cu₂O↓ + 3H₂O', 'Blau → ziegelroter Nd. (Cu₂O)'],
        ['Alkohole (prim./sek.)','KMnO₄ (sauer) oder K₂Cr₂O₇', 'Oxidation: Alkohol → Aldehyd → Carbonsäure (prim.) oder Keton (sek.)', 'Violett → farblos (KMnO₄); orange → grün (K₂Cr₂O₇)'],
        ['Phenole',           'FeCl₃',                          'Phenol + Fe³⁺ → Eisen-Phenolat-Komplex',                    'Violett bis dunkelblau-schwarz (je nach Phenol)'],
        ['Carbonsäuren',      'Na₂CO₃',                         'RCOOH + Na₂CO₃ → RCOONa + CO₂↑ + H₂O',                    'Kohlendioxid-Gasentwicklung'],
        ['Stärke',            'Iod/Iodid-Lösung',               'I₃⁻ lagert sich in Amylose-Helix ein',                      'Tiefblau-violett (reversibel bei Erwärmen)'],
        ['Glucose/reduzierende Zucker', 'Fehling/Tollens',      's.o.',                                                        's.o.'],
        ['Amine (prim., arom.)','NaNO₂/HCl (0–5°C)',           'Diazotierungsprobe: Farbloses Diazoniumion → Azokupplung', 'Mit Kupplungskomponente: farbiger Azofarbstoff'],
        ['Halogene (org.-gebunden)', 'Beilstein-Probe (Kupferdraht)', 'C–X-Verbindung auf glühenden Cu-Draht → CuX₂-Flüchtige', 'Grüne Flamme (Beilstein-Probe; qualitativ)'],
        ['Doppelbindung',     'Bromwasser',                      'Elektrophile Addition: C=C + Br₂ → Br–C–C–Br',              'Entfärbung des rotbraunen Bromwassers'],
        ['Dreifachbindung',   'Ammoniakalische AgNO₃',          'HC≡C– + [Ag(NH₃)₂]⁺ → AgC≡C–Ag↓ (Silberacetylid)',        'Weißer Nd. (Achtung: Explosiv bei Trocknen!)'],
        ['Proteine',          'Biuret-Reaktion (NaOH + CuSO₄)', 'Cu²⁺ + Peptidbin-dungen → Chelatkomplex',                   'Violettfärbung (mindestens 2 Peptidbindungen = mind. Tripeptid)'],
        ['Proteine/Aminosäuren', 'Ninhydrin-Reaktion',          'Aminosäure + Ninhydrin → Ruhemann-Lila',                    'Blau-violett bei α-Aminosäuren; gelb bei Pro; für DC-Nachweis'],
      ],
      highlight: [0, 1, 5, 9, 11],
    })}

    ${renderAccordion([
      {
        title: 'Systematischer Kationentrennungsgang (Auszug)',
        content: `<p class="lz-prose">Beim <strong>Kationentrennungsgang</strong> wird ein Kationengemisch
                  durch schrittweise Fällung in Gruppen aufgeteilt:</p>
                  <p class="lz-prose"><strong>Gruppe 1 (Salzsäure-Gruppe):</strong>
                  HCl → fällt Ag⁺, Pb²⁺, Hg₂²⁺ als schwerlösliche Chloride.<br>
                  AgCl (weiß) + NH₃ → löslich = Ag⁺ ✓ · PbCl₂ (weiß) + heißes Wasser → löslich = Pb²⁺ ✓</p>
                  <p class="lz-prose"><strong>Gruppe 2 (H₂S-Gruppe, sauer):</strong>
                  H₂S aus HCl → fällt Cu²⁺, Pb²⁺, Hg²⁺, Bi³⁺, Cd²⁺, As³⁺, Sb³⁺, Sn²⁺ als Sulfide.<br>
                  CuS (schwarz), PbS (schwarz), HgS (schwarz), Bi₂S₃ (braun), CdS (gelb).</p>
                  <p class="lz-prose"><strong>Gruppe 3 (H₂S-Gruppe, basisch):</strong>
                  H₂S in NH₃ → fällt Ni²⁺, Co²⁺, Fe²⁺/³⁺, Mn²⁺, Zn²⁺ als Sulfide oder Hydroxide.<br>
                  ZnS (weiß), NiS (schwarz), Fe(OH)₃ (rotbraun), Mn(OH)₂ (weiß→braun).</p>
                  <p class="lz-prose"><strong>Gruppe 4 (Ammoniumcarbonat-Gruppe):</strong>
                  (NH₄)₂CO₃ in NH₃ → fällt Ca²⁺, Sr²⁺, Ba²⁺ als Carbonate.<br>
                  CaCO₃ (weiß), SrCO₃ (weiß), BaCO₃ (weiß) → unterschieden durch Flammenfärbung + Sulfat-Test.</p>
                  <p class="lz-prose"><strong>Gruppe 5 (lösliche Kationen):</strong>
                  Na⁺, K⁺, NH₄⁺, Mg²⁺ → bleiben in Lösung → Flammenfärbung, Nessler-Test.</p>`,
      },
      {
        title: 'Papierchromatographie und Dünnschichtchromatographie (DC)',
        content: `<p class="lz-prose"><strong>Prinzip:</strong> Trennung von Gemischen nach Verteilung zwischen stationärer Phase (Papier/Kieselgel) und mobiler Phase (Laufmittel). Weniger polare Stoffe wandern weiter (höherer R_f); polare Stoffe werden stärker durch die stationäre Phase retardiert.</p>
                  <p class="lz-prose"><strong>R_f-Wert:</strong>
                  R_f = Laufweite Substanz / Laufweite Lösungsmittelfront (0 ≤ R_f ≤ 1)
                  R_f ist charakteristisch für jede Substanz bei gegebenem System (Laufmittel + stationäre Phase).</p>
                  <p class="lz-prose"><strong>Anwendungen:</strong><br>
                  DC/PC: Aminosäure-Identifizierung (Ninhydrin-Färbung) ·
                  Zuckernachweis (Anilin-Phthalat-Spray) ·
                  Farbstoff-Analyse (Lebensmittelfarben) ·
                  Pflanzenfarbstoffe (Chlorophyll, Carotin) ·
                  Drogen-Screening (TLC)</p>
                  <p class="lz-prose"><strong>Laufmittel-Polarität:</strong>
                  Stark polar: Wasser, Methanol → polare Stoffe trennen.
                  Mittel: Ethylacetat, Aceton.
                  Unpolar: Hexan, Petrolether → unpolare Stoffe trennen (Lipide).</p>`,
      },
    ])}
  `; }

  // ══════════════════════════════════════════════════════════
  // 11.1.2 — Quantitative Analyse
  // ══════════════════════════════════════════════════════════
  _quantitativ() { return `
    ${renderSubhead('11.1.2 — Quantitative Analyse')}

    <h2 class="lz-h2">Quantitative Analyse — wie viel ist da?</h2>
    <p class="lz-prose">
      Die <strong>quantitative Analyse</strong> bestimmt die <em>Menge</em> oder
      <em>Konzentration</em> eines Analyten in einer Probe. Die wichtigsten
      klassischen Methoden sind Gravimetrie (Wägen) und Titrimetrie (Maßanalyse).
    </p>

    <h3 class="lz-h3">Gravimetrie — Wägungsanalyse</h3>
    <p class="lz-prose">
      Bei der <strong>Gravimetrie</strong> wird der Analyt durch eine definierte
      chemische Reaktion in einen schwerlöslichen Niederschlag überführt,
      der abfiltriert, geglüht und gewogen wird.
    </p>

    ${renderFormulaBox({
      label:   'Gravimetrische Berechnung',
      formula: 'Gehalt Analyt [g] = m(Niederschlag) · M(Analyt) / M(Niederschlag) · stöchiometrischer Faktor',
      desc:    'M = Molmasse · Faktor aus Stöchiometrie der Fällungsreaktion · Beispiel: Ba²⁺ → BaSO₄: m(Ba) = m(BaSO₄) · M(Ba)/M(BaSO₄) = m(BaSO₄) · 137,33/233,40',
    })}

    ${renderTable({
      headers: ['Analyt', 'Fällungsreagenz', 'Niederschlagsform', 'Wägeform (nach Glühen)', 'Anmerkungen'],
      rows: [
        ['Ba²⁺',  'H₂SO₄ (verdünnt)',   'BaSO₄',             'BaSO₄ (stabil bis 1400°C)',     'Klassische Ba-Gravimetrie; Nd. schwerlöslich, schwer zu filtrieren (feinkörnig)'],
        ['SO₄²⁻', 'BaCl₂',              'BaSO₄',             'BaSO₄',                          'Bestimmung Sulfat in Wasser, Gips, Dünger'],
        ['Cl⁻',   'AgNO₃',              'AgCl',              'AgCl',                            'Lichtempfindlich! Dunkel halten; K_L(AgCl)=1,8·10⁻¹⁰'],
        ['Ca²⁺',  '(NH₄)₂C₂O₄ (Oxalat)', 'CaC₂O₄·H₂O',    'CaO (nach Glühen >900°C)',       'Oder gewogen als CaC₂O₄; Umrechnung beachten'],
        ['Al³⁺',  'NH₃/8-Hydroxychinolin','Al(Oxin)₃',       'Al₂O₃ (600°C)',                  '8-Hydroxychinolin: selektiv; schöner kr. Nd.'],
        ['Fe³⁺',  'NH₃',                'Fe(OH)₃',           'Fe₂O₃ (800°C)',                  'Gelatinöser Nd.; schlecht zu filtrieren; Trocknen/Glühen nötig'],
        ['Ni²⁺',  'Dimethylglyoxim',    'Ni(DMG)₂',          'NiO (nach Verbrennen)',           'Empfindlichste Gravimetrie; rote Nadeln; M(Ni(DMG)₂)=288,9'],
        ['Mg²⁺',  '(NH₄)₂HPO₄',        'MgNH₄PO₄',         'Mg₂P₂O₇ (900°C)',                'Aufwändige Fällung; wird zunehmend durch AAS ersetzt'],
      ],
      highlight: [0, 1, 6],
    })}

    <h3 class="lz-h3" style="margin-top:1.75rem;">Titrimetrie (Maßanalyse) — Titrationsmethoden im Überblick</h3>
    <p class="lz-prose">
      Bei einer <strong>Titration</strong> wird die Maßlösung (Titrant, bekannte
      Konzentration) kontrolliert zur Analytenprobe zugegeben, bis der
      <strong>Äquivalenzpunkt</strong> erreicht ist — dann ist der Analyt vollständig
      umgesetzt. Der Äquivalenzpunkt wird durch einen Indikator oder
      potentiometrisch/photometrisch detektiert.
    </p>

    ${renderFormulaBox({
      label:   'Grundgleichung der Titrimetrie',
      formula: 'n(Analyt) · z_A = n(Titrant) · z_T  →  c_A · V_A · z_A = c_T · V_T · z_T',
      desc:    'z = Anzahl der äquivalenten Gruppen pro Molekül (Valenzzahl) · z(HCl)=1 · z(H₂SO₄)=2 · z(H₃PO₄)=1,2,3 je nach ÄP · n = c·V',
    })}

    ${renderTable({
      headers: ['Titrationstyp', 'Reaktionsprinzip', 'Maßlösung', 'Indikator / Detektion', 'Analyt-Beispiele'],
      rows: [
        ['Säure-Base-Titration', 'H⁺ + OH⁻ → H₂O', 'NaOH, HCl, H₂SO₄', 'Phenolphthalein (pH 8–10), Bromthymolblau, Methylorange; pH-Meter (potentiometrisch)', 'Essigsäure, Phosphorsäure, NH₃, Carbonat, Soda-Ascheid.'],
        ['Fällungstitration (Argentometrie)', 'Ag⁺ + X⁻ → AgX↓ (X=Cl⁻, Br⁻, SCN⁻)', 'AgNO₃ oder KSCN', 'Mohr: K₂CrO₄ (ziegelroter Ag₂CrO₄-ÄP); Volhard: SCN⁻ + Fe³⁺ → blutrot; Fajans: Adsorptionsindikator', 'Chlorid in Trinkwasser, Lebensmitteln, Körperflüssigkeiten'],
        ['Komplexometrie (EDTA)', 'M^n+ + Y⁴⁻ → [MY]^(n-4)', 'EDTA (Na₂H₂Y, 0,01 M)', 'EBT (Eriochromschwarz T): rotviolett → blau am ÄP; Murexid (Ca); PAN (Cu)', 'Ca²⁺+Mg²⁺ (Wasserhärte); Zn²⁺; Cu²⁺; Fe³⁺ (pH 2)'],
        ['Redoxtitration (Permanganometrie)', 'MnO₄⁻+8H⁺+5e⁻→Mn²⁺+4H₂O', 'KMnO₄ (0,02 M)', 'Eigenindikation: violett → farblos → bleibend rosa (ÄP)', 'Fe²⁺, H₂O₂, Oxalat, Ca²⁺ (indirekt), NO₂⁻'],
        ['Redoxtitration (Iodometrie)', '2S₂O₃²⁻ → S₄O₆²⁻ + 2e⁻', 'Na₂S₂O₃ (0,1 M)', 'Stärke-Iod: blau → farblos am ÄP', 'Cl₂, Br₂, I₂, H₂O₂, Cu²⁺ (Jodid-Reduktion → I₂ → Na₂S₂O₃)'],
        ['Redoxtitration (Cerimetrie)', 'Ce⁴⁺ + e⁻ → Ce³⁺ (E°=+1,44 V)', 'Ce(SO₄)₂', 'Ferroin (blaurot → blass); potentiometrisch', 'Fe²⁺, Oxalat, As(III); stabiler als KMnO₄'],
        ['Karl-Fischer-Titration', 'H₂O + I₂ + SO₂ + 3Py + MeOH → 2Py·HI + Py·SO₃Me', 'Karl-Fischer-Reagenz (I₂+SO₂+Py+MeOH)', 'Potentiometrische Endpunktbestimmung', 'Wassergehalt in Lösungsmitteln, Pharmazeutika, Lebensmitteln'],
      ],
      highlight: [0, 2, 4],
    })}

    <h3 class="lz-h3" style="margin-top:1.75rem;">Primärstandards und Maßlösungen</h3>
    <p class="lz-prose">
      Ein <strong>Primärstandard</strong> ist eine Substanz, die folgende Anforderungen erfüllt:
      sehr rein (>99,9%), bekannte Zusammensetzung, stabil, gut handhabbar,
      hohes Molgewicht (→ kleine relative Wägefehler), gut löslich.
    </p>

    ${renderTable({
      headers: ['Primärstandard', 'Formel', 'M [g/mol]', 'Verwendung zur Einstellung von', 'Besonderheit'],
      rows: [
        ['Kaliumhydrogenphthalat (KHP)', 'KHC₈H₄O₄', '204,23', 'NaOH-Maßlösung', 'Stabil, hygrophoob, große M → kleiner Wägefehler; pK_s(COOH)=5,4'],
        ['Natriumcarbonat',             'Na₂CO₃',    '105,99', 'HCl-Maßlösung', 'Getrocknet bei 270°C; sorgfältig trocknen!'],
        ['Kaliumdichromat',             'K₂Cr₂O₇',  '294,18', 'Na₂S₂O₃-Maßlösung (Iodometrie)', 'Toxisch (Cr(VI))! Sehr stabil; primäres Oxidationsmittel'],
        ['Kaliumbromat',                'KBrO₃',     '167,00', 'Na₂S₂O₃ (Iodometrie)', 'Stabil; BrO₃⁻ + I⁻ → I₂ → Na₂S₂O₃'],
        ['Oxalsäure',                   'H₂C₂O₄·2H₂O','126,07','KMnO₄ (Permanganometrie)', 'Leicht oxidierbar; MnO₄⁻ + C₂O₄²⁻ → Mn²⁺ + CO₂; autokatalytisch (Mn²⁺!)'],
        ['Zinkstaub / Zink',            'Zn',         '65,38', 'EDTA-Maßlösung (Komplexometrie)', 'Zn + HCl → ZnCl₂ + H₂ → Einstellung der EDTA-Konzentration'],
        ['Silbernitrat',                'AgNO₃',     '169,87', 'NaCl-Maßlösung (Fällungstit.)',   'Lichtempfindlich! Dunkel aufbewahren; stabiler Primärstandard'],
      ],
      highlight: [0, 2, 4],
    })}

    <h3 class="lz-h3" style="margin-top:1.75rem;">Fehlerrechnung in der analytischen Chemie</h3>

    ${renderMerkboxGrid([
      {
        icon: 'fas fa-bullseye',
        title: 'Richtigkeit und Präzision',
        text: `Richtigkeit (accuracy): Übereinstimmung des Mittelwerts mit dem wahren Wert.
               Präzision (precision): Reproduzierbarkeit; Streuung der Einzelmesswerte.
               Systmatischer Fehler (bias): verschiebt alle Werte in gleiche Richtung; beeinflusst Richtigkeit.
               Zufälliger Fehler: beeinflusst Präzision; durch Wiederholen reduzierbar.`,
      },
      {
        icon: 'fas fa-ruler',
        title: 'Standardabweichung und Vertrauensbereich',
        text: `Standardabweichung s = √(Σ(xᵢ−x̄)²/(n−1))
               Relatives Standardabweichung RSD = s/x̄ · 100% [%]
               Vertrauensbereich: x̄ ± t · s/√n (t = Student-t-Faktor)
               n=3 Messungen, P=95%: t = 4,303; n=5: t = 2,776; n=∞: t = 1,960`,
      },
      {
        icon: 'fas fa-search-plus',
        title: 'Nachweis- und Bestimmungsgrenze',
        text: `Nachweisgrenze (NG): kleinste Konzentration, die mit 99% Sicherheit
               von Null unterscheidbar ist. NG = 3 · s_Blank / Steigung.
               Bestimmungsgrenze (BG): kleinste Konzentration, die quantitativ bestimmt
               werden kann. BG = 10 · s_Blank / Steigung.
               Empfindlichkeit: Steigung der Kalibrierfunktion.`,
      },
      {
        icon: 'fas fa-chart-line',
        title: 'Kalibriergerade und interne Standardisierung',
        text: `Externe Kalibrierung: Standardlösungen bekannter Konzentrationen messen →
               lineare Regression y = a + bx → Konzentration aus Messwert berechnen.
               Interne Standardisierung: Interner Standard (IS) in bekannter Menge
               der Probe zugegeben → Verhältnis Signal_Analyt / Signal_IS kompensiert
               Matrixeffekte und Injektionsvariabilität.`,
      },
    ])}

    ${renderInfobox({
      type: 'success', icon: 'fas fa-graduation-cap', title: 'Zusammenfassung — Klassische Analytik',
      body: `<strong>Qualitativ:</strong> Flammenfärbung (Na: gelb; K: violett; Cu: blaugrün; Ca: ziegelrot)<br>
             <strong>Kationennachweise:</strong> Ag⁺→AgCl (weiß) · Fe³⁺→[Fe(SCN)]²⁺ (blutrot) · Cu²⁺→[Cu(NH₃)₄]²⁺ (dunkelblau) · Ni²⁺→Ni(DMG)₂ (rot)<br>
             <strong>Anionennachweise:</strong> Cl⁻→AgCl · SO₄²⁻→BaSO₄ · CO₃²⁻→CO₂↑ · NO₃⁻→Ringprobe<br>
             <strong>Organisch:</strong> Tollens/Fehling (Aldehyde) · KMnO₄/Cr₂O₇²⁻ (Alkohole) · Bromwasser (Doppelb.) · FeCl₃ (Phenole) · Biuret (Proteine)<br>
             <strong>Gravimetrie:</strong> Fällen → Filtrieren → Glühen → Wägen<br>
             <strong>Titrimetrie:</strong> c_A·V_A·z_A = c_T·V_T·z_T · ÄP durch Indikator oder potentiometrisch`,
    })}
  `; }

  init() {
    i18n.init();
    initScrollReveal();
    initInteractive(document);
    initTabs();
  }
}