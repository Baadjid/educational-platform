// pages/projekte/lernzettel/faecher/chemie/themen/10/10-3.js
// Kapitel 10.3 — Tenside und Waschmittel
// 10.3.1  Tenside als grenzflächenaktive Stoffe
// 10.3.2  Anwendungen von Tensiden
// 10.3.3  Waschmittel

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
  { key: 'a', icon: 'fas fa-soap',        label: '10.3.1–2 Tenside & Anwendungen' },
  { key: 'b', icon: 'fas fa-tshirt',      label: '10.3.3 Waschmittel'             },
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
  return `<nav class="wim-tabs" role="tablist" id="tabs103">${nav}</nav>${panels}`;
}

function initTabs() {
  const nav = document.getElementById('tabs103');
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

export default class Chemie_10_3 {
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
          <i class="fas fa-chevron-right"></i><span>Kapitel 10</span>
          <i class="fas fa-chevron-right"></i><span>10.3</span>
        </div>
        <h1 class="lz-sub-title">Tenside und Waschmittel<br><em>Amphiphile, Mizellen und Waschchemie</em></h1>
        <p class="lz-sub-desc">
          Amphiphile Molekülstruktur · Mizellbildung · Tensidklassen ·
          CMC · Waschmittelinhaltsstoffe · Wasserenthärtung
        </p>
        ${renderTags(['Kap. 10.3', 'Tenside', 'Waschmittel', 'Mizellen', 'Amphiphil', 'LK Chemie BW'])}
      </div>
    </section>

    <section class="lz-content-section">
      <div class="lz-section-wrap">
        ${buildWimHTML(k => k === 'a' ? this._tenside() : this._waschmittel())}
      </div>
    </section>

    <section class="lz-content-section" style="padding:1.5rem 0 3rem;">
      <div class="lz-section-wrap">
        ${renderPageNav({
          prev: { label: '10.2 Farbstoffe',          link: `${BASE}/themen/10/10-2` },
          next: { label: '10.4 Arzneimittel',          link: `${BASE}/themen/10/10-4` },
        }, BASE)}
      </div>
    </section>
    ${footerHTML(this.router)}
  `; }

  _tenside() { return `
    ${renderSubhead('10.3.1 — Tenside als grenzflächenaktive Stoffe · 10.3.2 — Anwendungen')}

    <h2 class="lz-h2">Tenside — amphiphile Grenzflächenaktive</h2>
    <p class="lz-prose">
      <strong>Tenside</strong> (surface active agents, Surfactants) sind Verbindungen
      mit einem <strong>hydrophilen Kopf</strong> (polar, wasserliebend) und einem
      <strong>hydrophoben Schwanz</strong> (unpolar, fettliebend).
      Diese <strong>amphiphile Struktur</strong> ermöglicht es ihnen,
      Grenzflächen zwischen wässriger und fettiger Phase zu stabilisieren.
    </p>

    ${renderMerkboxGrid([
      {
        icon: 'fas fa-circle',
        title: 'Mizellbildung und CMC',
        text: `Unterhalb der kritischen Mizellkonzentration (CMC): Tenside liegen als Monomere vor
               oder besetzen die Wasser-Luft-Grenzfläche (Erniedrigung der Oberflächenspannung).
               Oberhalb CMC: Tenside aggregieren zu Mizellen (sphärisch: Schwänze innen, Köpfe außen).
               Mizellen lösen Fette durch Einlagerung ins hydrophobe Innere → Emulsifizierung.
               Typische CMC: 0,1–10 mmol/L.`,
      },
      {
        icon: 'fas fa-tint',
        title: 'Netzmittel — Oberflächenspannung senken',
        text: `Tenside lagern sich an die Wasser-Luft-Grenzfläche an.
               Wasser: γ = 72 mN/m → mit Tensid: γ < 40 mN/m.
               Bessere Benetzung von Oberflächen (Lotus-Effekt aufgehoben).
               Anwendung: Waschprozess (Wasser muss in Gewebeporen eindringen);
               Pestizidsprühung (bessere Haftung auf Blättern).`,
      },
      {
        icon: 'fas fa-oil-can',
        title: 'Emulgierung',
        text: `Emulgator: Tensid stabilisiert Öl-in-Wasser (O/W) oder Wasser-in-Öl (W/O) Emulsion.
               O/W: Schwanz im Öl, Kopf im Wasser (Milch, Mayonnaise, Lotion).
               W/O: Kopf im Wasser-tröpfchen, Schwanz in Öl (Butter, Margarine).
               HLB-Wert (Hydrophilic-Lipophilic Balance): HLB 3–6: W/O; HLB 8–18: O/W.`,
      },
      {
        icon: 'fas fa-recycle',
        title: 'Biologische Abbaubarkeit',
        text: `Moderne Tenside müssen >90% biologisch abbaubar sein (EU-Verordnung).
               Lineare Alkylsulfonate (LAS): leicht biologisch abbaubar.
               Verzweigte Alkylbenzolsulfonate (ABS, historisch): schwer abbaubar → Flussschaum in 1960er.
               Phosphate in Waschmitteln (→ Eutrophierung): in EU verboten seit 1994 (in D bereits 1990).`,
      },
    ])}

    ${renderTable({
      headers: ['Tensidklasse', 'Kopfgruppe', 'Ladung', 'Darstellung', 'Anwendungen', 'Bioabbaubarkeit'],
      rows: [
        ['Anionische Tenside',   '–COO⁻ (Carboxylat = Seife) oder –SO₃⁻ (Sulfonat) oder –SO₄⁻ (Sulfat)', 'Negativ',   'Fettverseifung (Seife); Sulfonierung + Neutralisation (LAS)', 'Waschmittel (Haupttensid), Shampoos, Geschirrspüler', 'Gut (LAS) bis mittel (ABS)'],
        ['Kationische Tenside',  'Quartäres N-Atom (NR₄⁺)',                      'Positiv',   'Quartärisierung von Aminen; Methylierung',               'Weichspüler, Haarkonditionierer, Desinfektionsmittel (CTAB, QUAT)', 'Mäßig'],
        ['Amphotere Tenside',    'Betaine (–N⁺(CH₃)₂–CH₂–COO⁻) oder Sulfobetaine', 'Neutral (intern zwitterionisch)', 'Aminosäureamidesynthese',     'Babyshampoos, Kosmetik; milde; verträglich mit Haut', 'Gut'],
        ['Nichtionische Tenside','Polyoxyethylen (–O–CH₂CH₂–)ₙ–OH (PEG-Ketten) oder Zuckereinheiten (APG)', 'Keine', 'Ethoxylierung von Fettalkoholen; Umsetzung mit Glucose', 'Geschirrspüler, Kosmetik; hartwasserbeständig; mild', 'Gut'],
      ],
      highlight: [0, 3],
    })}

    ${renderTable({
      headers: ['Tensid', 'Vollname', 'Klasse', 'CMC [mmol/L]', 'Wichtigste Anwendung'],
      rows: [
        ['SDS/SLS',  'Natriumdodecylsulfat / Sodium Lauryl Sulfate', 'Anionisch (Sulfat)', '8,2', 'Laborpuffer (PAGE-Elektrophorese, SDS-PAGE); Zahnpasta; Shampoos'],
        ['CTAB',     'Cetyltrimethylammoniumbromid',                 'Kationisch (Quat)',  '0,9', 'Desinfektionsmittel; DNA-Extraktion im Labor'],
        ['Triton X-100', 'Polyethylenglykol-p-isooctylphenylether', 'Nichtionisch',       '0,24','Laborpuffer; Protein-Solubilisierung; gentle detergent'],
        ['APG (C8-C16)', 'Alkylpolyglykoside',                      'Nichtionisch',       'variabel', 'Kosmetik, Waschmittel; biologisch gut abbaubar; mild'],
        ['Lecithin (PC)','Phosphatidylcholin',                       'Amphoter (natiürl)', '—',  'Lebensmittelemulgator (E322, Schokolade, Margarine); Liposomen'],
      ],
      highlight: [0, 4],
    })}
  `; }

  _waschmittel() { return `
    ${renderSubhead('10.3.3 — Waschmittel')}

    <h3 class="lz-h3">Waschmittelinhaltsstoffe und ihre Funktionen</h3>
    <p class="lz-prose">
      Moderne Waschmittel sind komplexe Formulierungen aus vielen Komponenten,
      die zusammen Schmutz lösen, Wasser enthärten, Flecken bleichen und
      Farben schützen. Typische Vollwaschmittel enthalten 10–20 verschiedene Inhaltsstoffe.
    </p>

    ${renderTable({
      headers: ['Inhaltsstoffgruppe', 'Funktion', 'Wichtige Vertreter', 'Anteil [%]'],
      rows: [
        ['Tenside (Waschaktivsubstanzen)', 'Fettlösung; Emulgierung; Schmutzablösung', 'LAS (anionisch), Fettalkoholethoxylate (nichtionisch), Seife', '10–25%'],
        ['Builder (Gerüststoffe)',         'Wasserenthärtung (Komplex. von Ca²⁺/Mg²⁺); Pufferung; Tensidverstärkung', 'Zeolith A (NaAlSiO₄); Citrat; EDTA (stark chelat.); früher: Phosphate', '20–40%'],
        ['Bleichmittel',                   'Entfernung von Tee-, Kaffee-, Obstsaftflecken (oxidative Bleiche)', 'Natriumpercarbonat (Na₂CO₃·1,5H₂O₂) → in H₂O: H₂O₂; Bleichaktivator TAED', '10–25%'],
        ['Enzyme',                         'Katalytischer Abbau von Protein-, Stärke-, Fett-Flecken', 'Protease (Proteinflecken: Blut, Gras), Amylase (Stärke), Lipase (Fett), Cellulase (Faserpflege)', '0,1–1%'],
        ['Füllstoffe (Stellmittel)',        'Auflockerung des Pulvers; Rieselfähigkeit; Verdünnung', 'Natriumsulfat Na₂SO₄; Natriumchlorid NaCl (Tabletten)', '10–40%'],
        ['Vergrauungsinhibitoren',          'Verhindern Rückablagerung von Schmutz auf Wäsche', 'Carboxymethylcellulose (CMC), PVP', '<1%'],
        ['Optische Aufheller',             'Fluoreszenz: UV → sichtbares Blaulicht → Wäsche wirkt weißer', 'Stilben-Derivate (z.B. Tinopal CBS)', '<0,1%'],
        ['Konservierungsmittel',           'Verhindern Enzymdegradation im Flüssigwaschmittel', 'Isothiazolinone (MIT/CMIT), Bronopol', '<0,1%'],
        ['Duftstoffe',                     'Produktaroma; kein Reinigungsnutzen', 'Terpene, Ester, Aldehyde; komplexe Mischungen', '<1%'],
        ['Schaumregulatoren',              'Verhindert Überschäumen (Maschine)', 'Silikonöle, Seife (schaumarm!)', '<1%'],
        ['Soil Release Polymere',          'Modifiziert Faser → Schmutz haftet schlechter; leichteres Waschen', 'Polyester-PEG-Copolymere', '<1%'],
      ],
      highlight: [0, 1, 2, 3],
    })}

    <h3 class="lz-h3" style="margin-top:1.75rem;">Wasserenthärtung — der Builder-Mechanismus</h3>
    <p class="lz-prose">
      Hartes Wasser enthält Ca²⁺- und Mg²⁺-Ionen, die Tenside inaktivieren
      (Bildung unlöslicher Ca-Seifen) und Kalkstein ablagern.
      Builder enthärten das Wasser durch Komplexierung oder Fällung dieser Ionen.
    </p>

    ${renderTable({
      headers: ['Enthärter', 'Mechanismus', 'Vorteile', 'Nachteile'],
      rows: [
        ['Natriumphosphat (historisch)', 'Komplex: [Ca(PO₄)]⁻-Komplex löslich; Na₅P₃O₁₀ (Tripolyphosphat NTP)', 'Sehr effektiv; phosphatpuffert pH', 'Eutrophierung der Gewässer! EU-Verbot 1994 (D: 1990)'],
        ['Zeolith A (NaAlSiO₄, Sasil)', 'Ionenaustausch: Ca²⁺ gegen Na⁺ im Zeolithgitter', 'Biologisch abbaubar; günstig', 'Unlöslich → bleibt in Wäsche; schlechter bei Mg²⁺'],
        ['Natriumcitrat',               'Komplex: [Ca(Citrat)]⁻ löslich', 'Gut abbaubar; kein Phosphat', 'Weniger wirksam bei sehr hartem Wasser'],
        ['Polyacrylat',                 'Komplex: Carboxylgruppen binden Ca²⁺/Mg²⁺ (Cobuilder)', 'Cobuilder zu Zeolith; löslich', 'Schlechter abbaubar; ergänzend eingesetzt'],
        ['EDTA',                        'Sehr starker Chelatkomplex mit Ca²⁺/Mg²⁺/Fe³⁺', 'Extrem effektiv; auch Schwermetalle', 'Persistenz! Nicht abbaubar; kaum noch in Waschmitteln; Laboreinsatz'],
      ],
      highlight: [1, 2],
    })}

    ${renderInfobox({
      type: 'blue', icon: 'fas fa-vial', title: 'Bleichaktivator TAED — Wie entsteht Peressigsäure beim Waschen?',
      body: `<strong>Problem:</strong> H₂O₂ bleicht erst oberhalb 60°C effizient.
             Moderne Niedrigtemperatur-Wäsche (30–40°C) erfordert Aktivierung.<br><br>
             <strong>Lösung — TAED (Tetraacetylethylendiamin):</strong><br>
             Natriumpercarbonat → in Wasser: Na₂CO₃ + H₂O₂<br>
             H₂O₂ + TAED → Peressigsäure (CH₃–CO–O–OH) + N-Diacetylethylendiamin<br><br>
             Peressigsäure ist ein <strong>stärkeres Oxidationsmittel als H₂O₂</strong>
             und bleicht bereits bei 30–40°C effizient.
             E°(Peressigsäure) > E°(H₂O₂).<br><br>
             <strong>Reaktion mit Farbstoffflecken:</strong>
             Oxidative Spaltung der chromophoren Azo-/konjugierten Gruppen →
             farblose Abbauprodukte.`,
    })}

    ${renderAccordion([
      {
        title: 'Enzyme im Waschmittel — Biotenside der Zukunft',
        content: `<p class="lz-prose"><strong>Protease (z.B. Savinase, Subtilisin):</strong>
                  Hydrolysiert Peptidbindungen → Abbau von Protein-Flecken (Blut, Gras, Ei, Milch).
                  Optimum pH 8–10 (alkalisch, wie Waschmittellösung). Thermostabile Varianten (bis 60°C).
                  Nobel-Preis-Anwendung: Subtilisin aus Bacillus licheniformis; gezielt mutiert (site-directed mutagenesis)
                  für Stabilität in Waschmittel-Milieu (Oxidationsbeständigkeit durch Met → Ala).</p>
                  <p class="lz-prose"><strong>Lipase (z.B. Lipolase):</strong>
                  Hydrolysiert Triglyceride → Fettsäuren + Glycerin → Wasserlöslich.
                  Problem: Lipase inaktiviert von Tensiden → Mikroverkapselung oder engineering.
                  Aus Humicola lanuginosa, produziert in Aspergillus oryzae.</p>
                  <p class="lz-prose"><strong>Cellulase:</strong>
                  Spaltet β-1,4-glycosidische Bindungen → Baumwollfibrillen-Enden abschneiden →
                  weniger Pilling → Farben frischer (nicht für Bleichreinigung).</p>`,
      },
      {
        title: 'Umweltaspekte von Waschmitteln',
        content: `<p class="lz-prose"><strong>Phosphate (historisch):</strong>
                  NPO₄³⁻ + Ca²⁺ → Ca₃(PO₄)₂-Fällung + im Gewässer → Algenwachstum (Eutrophierung) →
                  Sauerstoffentzug → Fischsterben → Gewässertod. EU-Verbot 1994 (Haushalt).</p>
                  <p class="lz-prose"><strong>Grüne Tenside:</strong>
                  APG (Alkylpolyglykoside): aus Zucker + Fettalkohol → nachwachsend; gut abbaubar.
                  Sophorolipide, Rhamnolipide: mikrobielle Biosurfactants; ökologisch; noch teuer.</p>
                  <p class="lz-prose"><strong>Wasserverbrauch:</strong>
                  Wäsche: ~50 L/Waschgang. Waschmittelkonzentration steigt (1/3-Tabletten), senkt Verpackung + Transport-CO₂.
                  Cold-Wash-Trend (30°C): spart ~40% Energie vs. 60°C; Enzyme ermöglichen ähnliche Reinigung.</p>`,
      },
    ])}

    ${renderInfobox({
      type: 'success', icon: 'fas fa-graduation-cap', title: 'Zusammenfassung — Tenside & Waschmittel',
      body: `<strong>Tensid:</strong> amphiphil (hydrophiler Kopf + hydrophober Schwanz) · Mizell-Bildung über CMC<br>
             <strong>Klassen:</strong> Anionisch (LAS, Seife) · Kationisch (Quat) · Amphoter (Betain) · Nichtionisch (APG, PEG)<br>
             <strong>Wirkung:</strong> Grenzflächenaktivität · Emulgierung · Netzwirkung · Dispergierung<br>
             <strong>Waschmittel-Hauptinhaltsstoffe:</strong> Tenside · Builder (Zeolith, Citrat) · Percarbonat+TAED (Bleiche) · Enzyme<br>
             <strong>Phosphat-Verbot:</strong> Eutrophierung; ersetzt durch Zeolith A und Citrat<br>
             <strong>TAED:</strong> H₂O₂ + TAED → Peressigsäure → Kaltbleiche (30–40°C)`,
    })}
  `; }

  init() {
    i18n.init();
    initScrollReveal();
    initInteractive(document);
    initTabs();
  }
}