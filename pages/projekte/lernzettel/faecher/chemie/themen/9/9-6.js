// pages/projekte/lernzettel/faecher/chemie/themen/9/9-6.js
// Kapitel 9.6 — Chemie in Biosystemen
// 9.6.1  Stoffwechsel und Biokatalyse
// 9.6.2  Autotrophe Assimilation – Fotosynthese
// 9.6.3  Heterotrophe Assimilation
// 9.6.4  Dissimilation – Atmung
// 9.6.5  Dissimilation – Gärung
// 9.6.6  Nucleinsäuren

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
  { key: '961', icon: 'fas fa-cogs',         label: '9.6.1–2 Stoffwechsel & Fotosyn.' },
  { key: '962', icon: 'fas fa-fire-alt',     label: '9.6.3–4 Assimilation & Atmung'   },
  { key: '963', icon: 'fas fa-bread-slice',  label: '9.6.5–6 Gärung & Nucleinsäuren'  },
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
  return `<nav class="wim-tabs" role="tablist" id="tabs96">${nav}</nav>${panels}`;
}

function initTabs() {
  const nav = document.getElementById('tabs96');
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

export default class Chemie_9_6 {
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
          <i class="fas fa-chevron-right"></i><span>Kapitel 9</span>
          <i class="fas fa-chevron-right"></i><span>9.6</span>
        </div>
        <h1 class="lz-sub-title">Chemie in Biosystemen<br><em>Stoffwechsel, Fotosynthese und Nucleinsäuren</em></h1>
        <p class="lz-sub-desc">
          Enzyme · Fotosynthese · Glykolyse · Citratzyklus ·
          Atmungskette · Gärung · DNA-Struktur · Replikation · Translation
        </p>
        ${renderTags(['Kap. 9.6', 'Biosysteme', 'Fotosynthese', 'Atmung', 'DNA', 'LK Chemie BW'])}
      </div>
    </section>

    <section class="lz-content-section">
      <div class="lz-section-wrap">
        ${buildWimHTML(k => {
          if (k === '961') return this._stoffwechsel();
          if (k === '962') return this._atmung();
          if (k === '963') return this._gaerungDNA();
          return '';
        })}
      </div>
    </section>

    <section class="lz-content-section" style="padding:1.5rem 0 3rem;">
      <div class="lz-section-wrap">
        ${renderPageNav({
          prev: { label: '9.5 Naturstoffe',            link: `${BASE}/themen/9/9-5` },
          next: { label: '10.1 Werkstoffe',             link: `${BASE}/themen/10/10-1` },
        }, BASE)}
      </div>
    </section>
    ${footerHTML(this.router)}
  `; }

  // ══════════════════════════════════════════════════════════
  // 9.6.1 + 9.6.2 — Stoffwechsel & Fotosynthese
  // ══════════════════════════════════════════════════════════
  _stoffwechsel() { return `
    ${renderSubhead('9.6.1 — Stoffwechsel und Biokatalyse · 9.6.2 — Fotosynthese')}

    <h2 class="lz-h2">Stoffwechsel — Überblick</h2>
    <p class="lz-prose">
      Der <strong>Stoffwechsel (Metabolismus)</strong> umfasst alle chemischen Reaktionen
      in lebenden Organismen. Er gliedert sich in <strong>Anabolismus</strong>
      (Aufbau von Biomolekülen, energieverbrauchend) und
      <strong>Katabolismus</strong> (Abbau, energieliefernd).
      Zentrales Energieüberträgermolekül: <strong>ATP</strong>.
    </p>

    ${renderTable({
      headers: ['Begriff', 'Definition', 'Beispiele'],
      rows: [
        ['Anabolismus', 'Aufbauender Stoffwechsel; verbraucht Energie (ATP/NADPH)', 'Fotosynthese, Proteinbiosynthese, Glukoneogenese, Fettsäurebiosynthese'],
        ['Katabolismus', 'Abbauender Stoffwechsel; liefert Energie (ATP, NADH, FADH₂)', 'Glykolyse, Citratzyklus, β-Oxidation, Aminosäureabbau'],
        ['Amphibolismus', 'Reaktionen, die in beide Richtungen verlaufen', 'Citratzyklus: sowohl Abbau als auch Biosynthese-Vorstufen'],
        ['Metabolit', 'Zwischenprodukt des Stoffwechsels', 'Pyruvat, Acetyl-CoA, Oxalacetat, Citrat, Malat'],
        ['Coenzym', 'Nicht-Protein-Kofaktor; überträgt chemische Gruppen', 'NAD⁺/NADH (H-Übertragung), FAD/FADH₂, CoA (Acyl-Übertragung), ATP (Phosphat)'],
      ],
      highlight: [0, 1],
    })}

    <h3 class="lz-h3" style="margin-top:1.75rem;">Enzyme — Biokatalysatoren</h3>

    ${renderMerkboxGrid([
      {
        icon: 'fas fa-tachometer-alt',
        title: 'Enzymkinetik — Michaelis-Menten',
        text: `v = v_max · [S] / (K_M + [S])
               K_M: Michaelis-Konstante (Substratkonz. bei v = v_max/2; Maß für Affinität)
               v_max = k_cat · [E_total] (Maximalgeschwindigkeit bei Substratsättigung)
               k_cat: Turnover-Zahl (Umsätze pro Sekunde pro Enzym)
               Katalase: k_cat = 4·10⁷ s⁻¹ (schnellstes bekanntes Enzym)`,
      },
      {
        icon: 'fas fa-code-branch',
        title: 'Allosterische Regulation',
        text: `Allosterische Enzyme: mehrere Bindungsstellen; kooperatives Verhalten.
               Sigmoidale v-[S]-Kurve statt hyperbolisch.
               Positive Kooperativität: Substratbindung erhöht Affinität der anderen UE.
               Inhibitoren/Aktivatoren binden an allosterischer Stelle (nicht am aktiven Zentrum).
               Beispiel: ATCase (Aspartattranscarbamoylase): durch CTP gehemmt, durch ATP aktiviert.`,
      },
      {
        icon: 'fas fa-shield-alt',
        title: 'Hemmung von Enzymen',
        text: `Kompetitiv: Hemmer ähnelt Substrat; konkurriert um aktives Zentrum; aufhebbar durch [S]↑; K_M↑, v_max gleich.
               Unkompetitiv: Hemmer bindet nur an ES-Komplex; K_M↓, v_max↓.
               Nicht-kompetitiv: Hemmer bindet an allo. Stelle; v_max↓; K_M gleich.
               Irreversibel: kovalente Bindung an Enzym (z.B. Aspirin: acetyliert COX; Organophosphate: acetylieren AChE → Nervengift).`,
      },
      {
        icon: 'fas fa-list-ol',
        title: 'Enzymklassen (EC-Nomenklatur)',
        text: `EC 1: Oxidoreduktasen (Redoxreaktionen; z.B. Laktat-Dehydrogenase)
               EC 2: Transferasen (Gruppenübertragung; z.B. Kinase: Phosphatgruppe)
               EC 3: Hydrolasen (Hydrolyse; z.B. Protease, Lipase, Amylase)
               EC 4: Lyasen (Spaltung ohne Wasser; z.B. Aldolase)
               EC 5: Isomerasen (Umwandlung von Isomeren; z.B. Phosphoglucose-Isomerase)
               EC 6: Ligasen (Knüpfung unter ATP-Verbrauch; z.B. Aminoacyl-tRNA-Synthetase)`,
      },
    ])}

    <h3 class="lz-h3" style="margin-top:1.75rem;">Fotosynthese — Aufbau organischer Verbindungen aus CO₂</h3>
    <p class="lz-prose">
      Die <strong>Fotosynthese</strong> ist der Prozess, durch den Pflanzen, Algen
      und Cyanobakterien Lichtenergie in chemische Energie umwandeln und
      CO₂ zu Glucose fixieren.
    </p>

    ${renderFormulaBox({
      label:   'Bruttogleichung der oxygenen Fotosynthese',
      formula: '6 CO₂ + 6 H₂O + Lichtenergie → C₆H₁₂O₆ + 6 O₂',
      desc:    'ΔG° = +2870 kJ/mol (stark endergon → benötigt Licht) · O₂ stammt aus H₂O (nicht aus CO₂!) · Bewiesen durch van Niel, Hill und ¹⁸O-Isotopen-Experimente',
    })}

    ${renderTable({
      headers: ['Phase', 'Ort', 'Eingang', 'Ausgang', 'Schlüsselreaktionen'],
      rows: [
        ['Lichtreaktion',    'Thylakoidmembran (Granastapel)', 'H₂O + Licht (400–700 nm)', 'ATP + NADPH + O₂', 'PS II: H₂O → O₂ + 4H⁺ + 4e⁻ · Elektronentransportkette → Protonengradienten → ATP-Synthase · PS I: NADP⁺ + H⁺ + e⁻ → NADPH'],
        ['Calvin-Zyklus (Dunkelreaktion)', 'Stroma der Chloroplasten', 'CO₂ + ATP + NADPH', 'G3P (Glycerinaldehyd-3-phosphat = Zucker-Vorläufer)', 'RuBisCO: CO₂ + RuBP → 2× 3-PG · ATP-/NADPH-verbrauchende Reduktion → G3P · Regeneration RuBP'],
      ],
      highlight: [0, 1],
    })}

    ${renderAccordion([
      {
        title: 'Lichtreaktion — Fotosysteme und Elektronentransport',
        content: `<p class="lz-prose"><strong>Photosystem II (PSII, P680):</strong>
                  Absorption bei ~680 nm → Chlorophyll a angeregt (P680*) →
                  Elektron geht auf Plastochinon (PQ) → P680⁺ oxidiert H₂O:
                  2H₂O → O₂ + 4H⁺ + 4e⁻ (Wasseroxidation; Mn₄Ca-Cluster).</p>
                  <p class="lz-prose"><strong>Elektronentransportkette:</strong>
                  PQ → Cyt b₆f-Komplex (Q-Zyklus; pumpt H⁺) → Plastocyanin (PC) → PSI.</p>
                  <p class="lz-prose"><strong>Photosystem I (PSI, P700):</strong>
                  Absorption bei ~700 nm → P700* → Ferredoxin → FNR (Flavoprotein) →
                  NADP⁺ + H⁺ + 2e⁻ → NADPH</p>
                  <p class="lz-prose"><strong>ATP-Synthese (Photophosphorylierung):</strong>
                  H⁺-Gradient (4H⁺ pro ATP) über Thylakoidmembran treibt F₀F₁-ATP-Synthase.
                  Gesamt: 2H₂O + 2NADP⁺ + 3ADP + 3Pi → O₂ + 2NADPH + 3ATP</p>`,
      },
      {
        title: 'Calvin-Zyklus — CO₂-Fixierung',
        content: `<p class="lz-prose"><strong>3 Phasen des Calvin-Zyklus:</strong></p>
                  <p class="lz-prose"><strong>① CO₂-Fixierung (Carboxylierung):</strong><br>
                  CO₂ + Ribulose-1,5-bisphosphat (RuBP, C5) →(RuBisCO) 2× 3-Phosphoglycerat (3-PG, C3)<br>
                  RuBisCO = Ribulose-1,5-bisphosphat-Carboxylase/Oxygenase;
                  häufigstes Protein der Erde (~0,7 Mrd. t); aber auch Oxygenase-Aktivität → Photorespiration!<br><br>
                  <strong>② Reduktion:</strong><br>
                  3-PG + ATP → 1,3-Bisphosphoglycerat → + NADPH → Glycerinaldehyd-3-phosphat (G3P, C3)<br><br>
                  <strong>③ Regeneration:</strong><br>
                  5× G3P + ATP → 3× RuBP (C5-Akzeptor regeneriert)<br><br>
                  <strong>Bilanz für 1 Glc (= 6 CO₂):</strong>
                  6CO₂ + 18ATP + 12NADPH → Glucose + 18ADP + 18Pi + 12NADP⁺</p>`,
      },
      {
        title: 'C4-Pflanzen und CAM — Anpassung an Trockenheit',
        content: `<p class="lz-prose"><strong>C3-Pflanzen (Standard):</strong>
                  CO₂ direkt an RuBisCO → 3-PG (C3-Verbindung). Problem bei hoher T/wenig Wasser:
                  Stomata geschlossen → CO₂ sinkt → RuBisCO oxygeniert statt carboxyliert → Photorespiration (ATP-Verlust).</p>
                  <p class="lz-prose"><strong>C4-Pflanzen (Mais, Zuckerrohr):</strong>
                  CO₂-Vorfixierung in Mesophyllzellen durch PEP-Carboxylase (kein O₂-Problem!)
                  → Oxalacetat (C4) → Malat → Transport in Bündelscheidenzellen →
                  CO₂-Freisetzung → Anlieferung an RuBisCO → hohes lokales CO₂ →
                  keine Photorespiration. Vorteil bei hoher T, Licht, trocken.</p>
                  <p class="lz-prose"><strong>CAM (Crassulacean Acid Metabolism) (Kakteen, Sukkulenten):</strong>
                  Stomata nachts öffnen → CO₂-Fixierung als Malat (Malatanspeicherung) →
                  tags Stomata geschlossen → Malat wird decarboxyliert → CO₂ an RuBisCO.
                  Extremer Wasserspar-Modus; weniger effizient aber überlebensfähig in Wüsten.</p>`,
      },
    ])}
  `; }

  // ══════════════════════════════════════════════════════════
  // 9.6.3 + 9.6.4 — Heterotrophe Assimilation & Atmung
  // ══════════════════════════════════════════════════════════
  _atmung() { return `
    ${renderSubhead('9.6.3 — Heterotrophe Assimilation · 9.6.4 — Dissimilation – Atmung')}

    <h3 class="lz-h3">Zellatmung — ATP-Gewinnung aus Glucose</h3>
    <p class="lz-prose">
      Heterotrophe Organismen (Tiere, Pilze, die meisten Bakterien) gewinnen Energie
      durch oxidativen Abbau organischer Verbindungen. Der vollständige aerobe Abbau
      von Glucose liefert maximal ~30–32 ATP.
    </p>

    ${renderFormulaBox({
      label:   'Bruttogleichung der aeroben Zellatmung',
      formula: 'C₆H₁₂O₆ + 6 O₂ → 6 CO₂ + 6 H₂O + ~30 ATP',
      desc:    'ΔG° = −2870 kJ/mol (stark exergon) · Gegenteil der Fotosynthese · ATP-Ausbeute: maximal ~30–32 ATP (theoretisch 38; tatsächlich weniger wegen Protonenleckage)',
    })}

    <h3 class="lz-h3" style="margin-top:1.75rem;">Glykolyse — Glucose → Pyruvat</h3>

    ${renderTable({
      headers: ['Phase', 'Schritte', 'Schlüsselenzyme', 'Energie-Bilanz', 'Produkte'],
      rows: [
        ['Investitionsphase', 'Schritt 1–5: Glucose → Fructose-1,6-bisphosphat → 2× Glycerinaldehyd-3-phosphat (G3P)', 'Hexokinase (1); PFK-1 (3, reguliert!); Aldolase (4)', '−2 ATP (Verbrauch)', '2× G3P'],
        ['Gewinnungsphase', 'Schritt 6–10: 2× G3P → 2× Pyruvat', 'Phosphoglycerat-Kinase (7); Pyruvatkinase (10)', '+4 ATP + 2 NADH (Gewinn)', '2× Pyruvat + 2 NADH + 2 ATP netto'],
      ],
    })}

    ${renderFormulaBox({
      label:   'Glykolyse-Nettobilanz',
      formula: 'Glucose + 2 ADP + 2 Pi + 2 NAD⁺ → 2 Pyruvat + 2 ATP + 2 NADH + 2 H₂O',
      desc:    'Netto: 2 ATP + 2 NADH · Läuft im Cytoplasma ab (kein O₂ benötigt → anaerob möglich!) · PFK-1 (Phosphofruktokinase-1) ist der wichtigste Regulationspunkt: gehemmt durch ATP, Citrat; aktiviert durch AMP, ADP, Fructose-2,6-bisphosphat',
    })}

    <h3 class="lz-h3" style="margin-top:1.75rem;">Pyruvat-Decarboxylierung — Bindeglied</h3>

    ${renderFormulaBox({
      label:   'Pyruvat-Dehydrogenase-Komplex (PDC)',
      formula: 'Pyruvat + CoA + NAD⁺ → Acetyl-CoA + CO₂ + NADH',
      desc:    'Im Mitochondrienmatrix · Irreversibel! (kein Pyruvat aus Acetyl-CoA zurück) · Komplex aus E1 (Pyruvat-Decarboxylase), E2 (Dihydrolipoyl-Transacetylase), E3 (Dihydrolipoamid-Dehydrogenase) · Coenzyme: TPP, Liponat, CoA, FAD, NAD⁺',
    })}

    <h3 class="lz-h3" style="margin-top:1.75rem;">Citratzyklus (Krebszyklus, TCA-Zyklus)</h3>

    ${renderTable({
      headers: ['Schritt', 'Reaktion', 'Enzym', 'Cofaktor', 'Produkte'],
      rows: [
        ['1', 'Acetyl-CoA (C2) + Oxalacetat (C4) → Citrat (C6)', 'Citrat-Synthase', '—', 'Citrat'],
        ['2', 'Citrat → Isocitrat', 'Aconitase', '—', 'Isocitrat'],
        ['3', 'Isocitrat → α-Ketoglutarat + CO₂', 'Isocitrat-Dehydrogenase', 'NAD⁺ → NADH', 'α-Ketoglutarat + CO₂ + NADH'],
        ['4', 'α-Ketoglutarat → Succinyl-CoA + CO₂', 'α-Ketoglutarat-DH-Komplex', 'NAD⁺ → NADH, CoA', 'Succinyl-CoA + CO₂ + NADH'],
        ['5', 'Succinyl-CoA → Succinat', 'Succinyl-CoA-Synthetase', 'GDP → GTP (≈ ATP)', 'Succinat + GTP'],
        ['6', 'Succinat → Fumarat', 'Succinat-Dehydrogenase (Komplex II!)', 'FAD → FADH₂', 'Fumarat + FADH₂'],
        ['7', 'Fumarat → Malat', 'Fumarase', 'H₂O', 'Malat'],
        ['8', 'Malat → Oxalacetat', 'Malat-Dehydrogenase', 'NAD⁺ → NADH', 'Oxalacetat + NADH'],
      ],
      highlight: [2, 3, 7],
    })}

    ${renderFormulaBox({
      label:   'Citratzyklus-Bilanz (pro Acetyl-CoA = 1 Runde)',
      formula: 'Acetyl-CoA + 3NAD⁺ + FAD + GDP + Pi + 2H₂O → 2CO₂ + 3NADH + FADH₂ + GTP + CoA',
      desc:    'Pro Glucose (2 Pyruvat → 2 Acetyl-CoA): 2× obige Bilanz = 6 NADH + 2 FADH₂ + 2 GTP + 4 CO₂',
    })}

    <h3 class="lz-h3" style="margin-top:1.75rem;">Atmungskette und oxidative Phosphorylierung</h3>

    ${renderTable({
      headers: ['Komplex', 'Name', 'Reaktion', 'Gepumpte H⁺', 'Inhibitor (Beispiel)'],
      rows: [
        ['I',   'NADH-CoQ-Reduktase',        'NADH + H⁺ + Q → NAD⁺ + QH₂',                '4 H⁺/2e⁻',  'Rotenon (Pestizid); Piericidin A; Metformin (Diabetes)'],
        ['II',  'Succinat-CoQ-Reduktase',     'Succinat + Q → Fumarat + QH₂',               '0 H⁺',       'Thenoyltrifluoroaceton (TTFA); Carboxin'],
        ['III', 'CoQH₂-Cyt c-Reduktase (Cyt b₆f)', 'QH₂ + 2Cyt c(ox) → Q + 2Cyt c(red)', '4 H⁺/2e⁻ (Q-Zyklus)', 'Antimycin A; Stigmatellin'],
        ['IV',  'Cytochrom c-Oxidase',        '4Cyt c(red) + O₂ + 4H⁺ → 4Cyt c(ox) + 2H₂O', '4 H⁺/2e⁻', 'Cyanid (KCN)! CO! Azid (N₃⁻)'],
        ['V',   'ATP-Synthase (F₀F₁)',         '3–4 H⁺_außen → 3–4 H⁺_innen → ADP + Pi → ATP', '—', 'Oligomycin; DCCD'],
      ],
      highlight: [3, 4],
    })}

    ${renderInfobox({
      type: 'blue', icon: 'fas fa-lightbulb', title: 'Chemiosmotische Theorie (Mitchell, 1961) — Nobel-Preis 1978',
      body: `Peter Mitchell postulierte: Komplexe I, III, IV pumpen H⁺ von Matrix → Intermembranraum
             → elektrochemischer Protonengradient (ΔµH⁺ = ΔpH + Δψ).<br><br>
             ATP-Synthase (F₀F₁): H⁺ strömen durch F₀-Kanal zurück → rotiert F₁-Teil →
             konformationelle Änderung → ATP-Synthese aus ADP + Pi.<br><br>
             <strong>Stöchiometrie:</strong> ~2,7 H⁺ pro ATP (F₀ hat 8–15 c-Untereinheiten;
             jede H⁺-Passage dreht ⅓ Umdrehung; 3 β-Untereinheiten pro volle Umdrehung).<br><br>
             <strong>ATP-Ausbeute pro Glucose (netto):</strong><br>
             Glykolyse: 2 ATP + 2 NADH<br>
             Pyruvat-DH: 2 NADH<br>
             Citratzyklus: 6 NADH + 2 FADH₂ + 2 GTP<br>
             NADH→~2,5 ATP; FADH₂→~1,5 ATP; Gesamt: ~30–32 ATP`,
    })}
  `; }

  // ══════════════════════════════════════════════════════════
  // 9.6.5 + 9.6.6 — Gärung & Nucleinsäuren
  // ══════════════════════════════════════════════════════════
  _gaerungDNA() { return `
    ${renderSubhead('9.6.5 — Dissimilation – Gärung · 9.6.6 — Nucleinsäuren')}

    <h3 class="lz-h3">Gärung — anaerober Glucoseabbau</h3>
    <p class="lz-prose">
      Wenn kein Sauerstoff verfügbar ist, muss NADH regeneriert werden
      (sonst stoppt Glykolyse, da NAD⁺ fehlt). Gärung: Pyruvat als
      Elektronen-Akzeptor → NAD⁺ regeneriert, nur 2 ATP gewonnen.
    </p>

    ${renderTable({
      headers: ['Gärungstyp', 'Mikroorganismus', 'Reaktion', 'Produkte', 'Anwendung'],
      rows: [
        ['Alkoholische Gärung', 'Saccharomyces cerevisiae (Hefen)', 'Pyruvat →(Pyruvat-Decarboxylase) Acetaldehyd + CO₂; Acetaldehyd + NADH →(ADH) Ethanol + NAD⁺', 'Ethanol + CO₂', 'Bier (Hopfen + Gerste), Wein (Trauben), Brot (CO₂ treibt Teig), Bioethanol (Treibstoff)'],
        ['Milchsäuregärung (homofermentativ)', 'Lactobacillus, Streptococcus', 'Pyruvat + NADH →(Laktat-Dehydrogenase) Laktat + NAD⁺', 'Laktat (Milchsäure)', 'Joghurt, Käse, Sauerkraut, Silage; auch im menschlichen Muskel bei anaerober Belastung'],
        ['Milchsäuregärung (heterofermentativ)', 'Leuconostoc, bestimmte Lactobacillus', 'Glucose → Laktat + Ethanol + CO₂', 'Laktat + Ethanol + CO₂', 'Kefir, bestimmte Käsesorten'],
        ['Buttersäuregärung', 'Clostridium butyricum', 'Glucose → Buttersäure + CO₂ + H₂', 'Buttersäure + H₂ + CO₂', 'Käsereifung (Lochkäse: CO₂ bildet Löcher); ranzig werdende Butter'],
        ['Essigsäuregärung (Oxidation)', 'Acetobacter aceti (Essigsäurebakterien)', 'Ethanol + O₂ → Essigsäure + H₂O (streng genommen Oxidation, nicht Gärung!)', 'Essigsäure', 'Essigherstellung aus Wein oder Bier; Weinessig, Apfelessig'],
        ['Propionsäuregärung', 'Propionibacterium', 'Laktat → Propionsäure + Essigsäure + CO₂', 'Propionsäure + CH₃COOH + CO₂', 'Emmentalerkäse (CO₂-Löcher + Propionflavor)'],
      ],
      highlight: [0, 1],
    })}

    ${renderInfobox({
      type: 'blue', icon: 'fas fa-beer', title: 'Alkoholische Gärung — Chemismus',
      body: `<strong>Glykolyse:</strong> Glucose → 2 Pyruvat + 2 ATP + 2 NADH<br>
             <strong>Schritt 1 (Pyruvat-Decarboxylase, Coenzym: TPP):</strong><br>
             CH₃–CO–COOH → CH₃CHO + CO₂<br>
             <strong>Schritt 2 (Alkohol-Dehydrogenase, Coenzym: NADH→NAD⁺):</strong><br>
             CH₃CHO + NADH + H⁺ → CH₃CH₂OH + NAD⁺<br><br>
             <strong>Nettobilanz:</strong> Glucose → 2 Ethanol + 2 CO₂ + 2 ATP<br>
             Gay-Lussac (1810) bestimmte die Stöchiometrie experimentell!<br><br>
             <strong>Vergärungsgrad:</strong> Aus 180 g Glucose entstehen theoretisch 92 g Ethanol + 88 g CO₂
             (46% Ausbeute massebasiert).`,
    })}

    <h3 class="lz-h3" style="margin-top:1.75rem;">Nucleinsäuren — DNA und RNA</h3>
    <p class="lz-prose">
      Nucleinsäuren (DNA, RNA) sind lineare Polymere aus
      <strong>Nucleotiden</strong>. Jedes Nucleotid besteht aus:
      ① einer stickstoffhaltigen Base · ② einem Pentosezucker (Deoxyribose/Ribose)
      · ③ einer Phosphatgruppe. Die Nucleotide sind über
      Phosphodiesterbindungen (3′–5′) verknüpft.
    </p>

    ${renderTable({
      headers: ['Nukleobase', 'Typ', 'In DNA?', 'In RNA?', 'Partnerbase (WC)', 'Strukturmerkmal'],
      rows: [
        ['Adenin (A)',   'Purin',     'Ja', 'Ja', 'Thymin (T) in DNA; Uracil (U) in RNA', '2 H-Brücken (zu T/U)'],
        ['Guanin (G)',   'Purin',     'Ja', 'Ja', 'Cytosin (C)', '3 H-Brücken (zu C); GC-reiche DNA stabiler'],
        ['Cytosin (C)',  'Pyrimidin', 'Ja', 'Ja', 'Guanin (G)', '3 H-Brücken'],
        ['Thymin (T)',   'Pyrimidin', 'Ja', 'Nein (→U)', 'Adenin (A)', 'Nur in DNA; 5-Methyluracil; 2 H-Brücken'],
        ['Uracil (U)',   'Pyrimidin', 'Nein', 'Ja', 'Adenin (A)', 'Nur in RNA; kein Methylgruppe; 2 H-Brücken'],
      ],
      highlight: [0, 1],
    })}

    ${renderCompare({
      titleA: 'DNA (Desoxyribonucleinsäure)',
      titleB: 'RNA (Ribonucleinsäure)',
      listA: [
        'Zucker: 2′-Deoxyribose (kein OH an C2!)',
        'Basen: A, G, C, T (kein U)',
        'Struktur: Doppelhelix (Watson-Crick, 1953)',
        'B-DNA: rechtsgängig; 10 Basenpaare/Windung; Steigang 34 Å',
        'Funktion: genetische Information; Erbgut',
        'Sehr stabil (keine 2′-OH → kein alkalisches Hydrolysepotenzial)',
        'Im Zellkern (Prokaryoten: kein Kern; Plasmide)',
      ],
      listB: [
        'Zucker: Ribose (OH an C2! → weniger stabil)',
        'Basen: A, G, C, U (kein T)',
        'Struktur: meist einzelsträngig',
        'Verschiedene Typen: mRNA, tRNA, rRNA, miRNA, siRNA, snRNA…',
        'Funktion: Informationsübertragung DNA→Protein; Katalyse (Ribozyme)',
        'Weniger stabil (2′-OH → anfällig für Hydrolyse; kurze Lebensdauer)',
        'Im Cytoplasma, Ribosomen, Nukleus',
      ],
    })}

    <h3 class="lz-h3" style="margin-top:1.75rem;">DNA-Doppelhelix — Struktur</h3>

    ${renderMerkboxGrid([
      {
        icon: 'fas fa-dna',
        title: 'Watson-Crick-Modell (1953)',
        text: `Zwei antiparallele Stränge (5′→3′ und 3′→5′ gegenläufig).
               Hydrophobe Basen innen (stapeln durch π-π-Stacking); hydrophiler Zucker-Phosphat-Rücken außen.
               Chargaff-Regeln: [A]=[T]; [G]=[C] → Komplementarität.
               Nobel-Preis 1962: Watson, Crick, Wilkins (Franklin: Röntgenbeugung, 1952).`,
      },
      {
        icon: 'fas fa-ruler',
        title: 'Dimensionen der B-DNA',
        text: `Durchmesser: 2,0 nm (20 Å).
               Steigang einer Windung: 3,4 nm (34 Å).
               Basenpaare pro Windung: 10,4.
               Abstand benachbarter Basenpaare: 0,34 nm (3,4 Å).
               Menschliches Genom: ~3,2 Mrd. Basenpaare / Haploid; 2 m DNA pro Zelle!`,
      },
      {
        icon: 'fas fa-copy',
        title: 'DNA-Replikation (semikonservativ)',
        text: `Meselson-Stahl-Experiment (1958): semikonservative Replikation bewiesen (N-Isotopen).
               DNA-Helicase: öffnet Doppelhelix am Replikationsursprung (Origin).
               Primase: synthetisiert RNA-Primer (5′→3′).
               DNA-Polymerase III: verlängert 5′→3′ (liest 3′→5′ Matrize).
               Leit- und Folgestrang (Okazaki-Fragmente 100–200 nt).
               DNA-Ligase: verbindet Okazaki-Fragmente.`,
      },
      {
        icon: 'fas fa-book',
        title: 'Zentrales Dogma der Molekularbiologie',
        text: `DNA → (Replikation) → DNA
               DNA → (Transkription) → mRNA
               mRNA → (Translation) → Protein
               (Retroviraler Sonderfall: RNA → Reverse Transkriptase → DNA)
               Crick (1958) formulierte; ergänzt durch RNA-Welt-Hypothese
               und post-transkriptionelle Regulation (miRNA, epigenetik).`,
      },
    ])}

    ${renderAccordion([
      {
        title: 'Transkription — DNA → mRNA',
        content: `<p class="lz-prose"><strong>Ablauf (Eukaryoten, vereinfacht):</strong><br>
                  ① RNA-Polymerase II bindet an Promotor (TATA-Box ca. −25 bp) mit Transkriptionsfaktoren<br>
                  ② Doppelhelix öffnet sich: Matritzen-Strang (antisense, 3′→5′) wird abgelesen<br>
                  ③ RNA-Pol II synthetisiert prä-mRNA (5′→3′); komplementär und antiparallel<br>
                  ④ 5′-Cap (7-Methylguanosin) und PolyA-Schwanz (~200 A) hinzugefügt<br>
                  ⑤ Spleißen (Splicing): Introns entfernt, Exons verknüpft → reife mRNA<br>
                  ⑥ Export aus Nukleus → Ribosom</p>`,
      },
      {
        title: 'Translation — mRNA → Protein (genetischer Code)',
        content: `<p class="lz-prose"><strong>Der genetische Code:</strong>
                  3 Basen (Codon) = 1 Aminosäure; 4³ = 64 Codons für 20 AS → degeneriert (mehrere Codons pro AS).<br>
                  Startcodon: AUG (Met) · 3 Stoppcodons: UAA, UAG, UGA.<br><br>
                  <strong>Ablauf (70S/80S Ribosom):</strong><br>
                  ① Initiation: mRNA + Initiations-tRNA (Met-tRNA) am kleine Untereinheit<br>
                  ② Elongation: tRNA bringt AS an A-Site → Peptidyltransferase (rRNA-Ribozym!) bildet Peptidbd. → Translokation<br>
                  ③ Termination: Stoppcodon → Release Factor → Polypeptid freigesetzt<br><br>
                  <strong>tRNA:</strong> Kleeblattstruktur; Anticodon-Schleife erkennt Codon; 3′-CCA-OH trägt AS.
                  Aminoacyl-tRNA-Synthetase: beladt tRNA mit korrekter AS (Zweite GeneticCode-Stufe).</p>`,
      },
      {
        title: 'Mutationen und genetische Erkrankungen',
        content: `<p class="lz-prose"><strong>Punktmutation:</strong> Einzelner Basenaustausch.
                  Stille Mutation: kein AS-Wechsel (Degeneriertheit des Codes).
                  Missense-Mutation: falsche AS → veränderte Proteinfunktion.
                  Nonsense-Mutation: vorzeitiges Stoppcodon → verkürztes Protein.</p>
                  <p class="lz-prose"><strong>Frameshift-Mutation:</strong> Insertion/Deletion von 1–2 Basen → Verschiebung Leserahmen → komplett anderes Protein nach Mutationsstelle.</p>
                  <p class="lz-prose"><strong>Beispiele genetischer Erkrankungen:</strong><br>
                  Sichelzellanämie: β-Globin Glu6→Val (A→T Mutation; E6V) → veränderte Hb-Löslichkeit<br>
                  PKU (Phenylketonurie): Phe-Hydroxylase Mutation → Phe-Akkumulation<br>
                  Tay-Sachs: Hexosaminidase A-Mutation → GM2-Gangliosid Akkumulation im Gehirn<br>
                  CFTR-Mutation (ΔF508): Cystic Fibrosis (Mukoviszidose) → fehlerhafter Cl⁻-Kanal</p>`,
      },
    ])}

    ${renderInfobox({
      type: 'success', icon: 'fas fa-graduation-cap', title: 'Zusammenfassung — Chemie in Biosystemen',
      body: `<strong>Fotosynthese:</strong> Lichtreaktion (Thylakoid: H₂O→O₂, ATP+NADPH) + Calvin (Stroma: CO₂→G3P); C3/C4/CAM<br>
             <strong>Glykolyse:</strong> Glucose → 2 Pyruvat + 2 ATP + 2 NADH (Cytoplasma; anaerob möglich)<br>
             <strong>Pyruvat-DH:</strong> Pyruvat → Acetyl-CoA + CO₂ + NADH (Mitochondrium)<br>
             <strong>Citratzyklus:</strong> 1 Acetyl-CoA → 2CO₂ + 3NADH + FADH₂ + GTP (Matrixraum)<br>
             <strong>Atmungskette:</strong> NADH/FADH₂ → H⁺-Gradient → ATP-Synthase → ~30 ATP (Innenmembran)<br>
             <strong>Gärung:</strong> anaerob; NAD⁺-Regeneration durch Pyruvat als e⁻-Akzeptor; 2 ATP gesamt<br>
             <strong>DNA:</strong> Doppelhelix; A=T (2HB); G≡C (3HB); semikonservative Replikation<br>
             <strong>Zentrales Dogma:</strong> DNA→(Transkr.)→mRNA→(Transl.)→Protein · Triplett-Code; AUG=Start; UAA/UAG/UGA=Stop`,
    })}
  `; }

  init() {
    i18n.init();
    initScrollReveal();
    initInteractive(document);
    initTabs();
  }
}