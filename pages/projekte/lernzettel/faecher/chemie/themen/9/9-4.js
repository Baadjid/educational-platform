// pages/projekte/lernzettel/faecher/chemie/themen/9/9-4.js
// Kapitel 9.4 — Organische Verbindungen mit funktionellen Gruppen
// 9.4.1  Funktionelle Gruppen
// 9.4.2  Halogenalkane
// 9.4.3  Amine
// 9.4.4  Alkohole und Phenole
// 9.4.5  Ether
// 9.4.6  Carbonylverbindungen
// 9.4.7  Carbonsäuren und Carbonsäurederivate

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
  { key: '941', icon: 'fas fa-layer-group',   label: '9.4.1–2 Überbl. & Halogenalkane' },
  { key: '942', icon: 'fas fa-user-friends',  label: '9.4.3–4 Amine & Alkohole'        },
  { key: '943', icon: 'fas fa-flask',         label: '9.4.5–6 Ether & Carbonyl'        },
  { key: '944', icon: 'fas fa-atom',          label: '9.4.7 Carbonsäuren & Derivate'   },
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
  return `<nav class="wim-tabs" role="tablist" id="tabs94">${nav}</nav>${panels}`;
}

function initTabs() {
  const nav = document.getElementById('tabs94');
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

export default class Chemie_9_4 {
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
          <i class="fas fa-chevron-right"></i><span>9.4</span>
        </div>
        <h1 class="lz-sub-title">Organische Verbindungen<br><em>mit funktionellen Gruppen</em></h1>
        <p class="lz-sub-desc">
          Halogenalkane · Amine · Alkohole & Phenole · Ether ·
          Carbonylverbindungen · Carbonsäuren · Ester · Amide
        </p>
        ${renderTags(['Kap. 9.4', 'Funktionelle Gruppen', 'Alkohole', 'Carbonsäuren', 'Ester', 'LK Chemie BW'])}
      </div>
    </section>

    <section class="lz-content-section">
      <div class="lz-section-wrap">
        ${buildWimHTML(k => {
          if (k === '941') return this._halogen();
          if (k === '942') return this._amineAlkohole();
          if (k === '943') return this._etherCarbonyl();
          if (k === '944') return this._carbonsaeuren();
          return '';
        })}
      </div>
    </section>

    <section class="lz-content-section" style="padding:1.5rem 0 3rem;">
      <div class="lz-section-wrap">
        ${renderPageNav({
          prev: { label: '9.3 Aromatische KW',  link: `${BASE}/themen/9/9-3` },
          next: { label: '9.5 Naturstoffe',      link: `${BASE}/themen/9/9-5` },
        }, BASE)}
      </div>
    </section>
    ${footerHTML(this.router)}
  `; }

  // 9.4.1 + 9.4.2
  _halogen() { return `
    ${renderSubhead('9.4.1 — Funktionelle Gruppen (Überblick) & 9.4.2 — Halogenalkane')}

    <h3 class="lz-h3">Einfluss funktioneller Gruppen auf physikalische Eigenschaften</h3>

    ${renderTable({
      headers: ['Klasse', 'Gruppe', 'Intermol. Kraft', 'Sdp-Trend vs. Alkan', 'Wasserlöslichkeit'],
      rows: [
        ['Halogenide',    '–X',   'London (+ Dipol bei C–X)', 'Höher (London stärker)',       'Gering (unpolar); CCl₄ unlöslich'],
        ['Alkohole',      '–OH',  'H-Brücken (stark)',        'Viel höher (Ethanol: 78°C)',   'Gut (kleine Alkohole); sinkt mit C-Zahl'],
        ['Ether',         '–O–',  'Dipol-Dipol',              'Niedriger als Alkohole',        'Mäßig; Diethylether: 6,9 g/L'],
        ['Aldehyde/Ketone','C=O', 'Dipol-Dipol (C=O stark)',  'Höher als Alkan, niedriger als Alkohol', 'Gut (kleine), sinkt mit C-Zahl'],
        ['Carbonsäuren',  '–COOH','H-Brücken + Dimere',       'Sehr hoch (Essigsäure: 118°C)','Gut für kleine; sinkt mit Kettenlänge'],
        ['Amine (prim.)', '–NH₂', 'H-Brücken (schwächer als OH)', 'Höher als Alkan',          'Gut für kleine Amine; reagiert mit H⁺'],
        ['Amide',         '–CONH–','H-Brücken (N–H + C=O)',  'Sehr hoch (Formamid: 210°C)', 'Gut; Dimere H-Brücken zwischen Ketten'],
      ],
      highlight: [1, 4, 6],
    })}

    <h3 class="lz-h3" style="margin-top:1.75rem;">Halogenalkane — Struktur und Reaktivität</h3>
    <p class="lz-prose">
      Halogenalkane (Alkylhalogenide) entstehen durch Halogenierung von Alkanen
      oder Addition von HX an Alkene. Das Kohlenstoff–Halogen-Atom ist das
      <strong>reaktive Zentrum</strong>: Das C–X-Kohlenstoffatom ist elektrophil (δ+),
      da X elektronegativer ist als C.
    </p>

    ${renderTable({
      headers: ['Eigenschaft', 'RF (F)', 'RCl', 'RBr', 'RI', 'Trend'],
      rows: [
        ['C–X-Bindungsenergie [kJ/mol]', '485', '339', '284', '213', 'F > Cl > Br > I (abnehmend)'],
        ['C–X-Bindungslänge [pm]',       '139', '178', '193', '214', 'F < Cl < Br < I (zunehmend)'],
        ['Reaktivität in SN',            'Sehr gering', 'Gering-mittel', 'Mittel (Standard)', 'Sehr gut', 'RF < RCl < RBr < RI'],
        ['Abgangsgruppe (leaving group)','Sehr schlecht', 'Gut', 'Sehr gut', 'Exzellent', 'I⁻ > Br⁻ > Cl⁻ >> F⁻'],
      ],
      highlight: [3],
    })}

    <h3 class="lz-h3" style="margin-top:1.75rem;">SN1 vs. SN2 — im Detail</h3>

    ${renderTable({
      headers: ['Merkmal', 'SN1', 'SN2'],
      rows: [
        ['Mechanismus',         '2-stufig: Bildung R⁺ (langsam) → Nu-Angriff (schnell)', '1-stufig: Nu greift konzertiert an, LG geht ab'],
        ['Kinetik',             'v = k · [RX] (unimolekular; Nu-Konzentration egal)', 'v = k · [RX] · [Nu⁻] (bimolekular)'],
        ['Stereochemie',        'Racemisierung (Nu greift von beiden Seiten an planarem C⁺)', 'Walden-Umkehr (Nu greift von hinten; Inversion der Konfiguration)'],
        ['Substrat-Präferenz',  'Tertiär >> sekundär > primär (Carbeniumion-Stabilität)', 'Primär > sekundär >> tertiär (sterische Hinderung)'],
        ['Lösungsmittel',       'Polar-protisch (H₂O, ROH) stabilisiert R⁺ und X⁻', 'Polar-aprotisch (DMSO, DMF, Aceton) favorisiert Nu-Aktivität'],
        ['Nucleophil-Stärke',   'Egal (Nu greift an stabilem R⁺)', 'Wichtig: starke Nu (OH⁻ > H₂O; I⁻ > Cl⁻ in aprotischen LM)'],
        ['Konkurrenz',          'Konkurriert mit E1 (besonders bei hoher T)', 'Konkurriert mit E2 (besonders bei starken Basen + hoher T)'],
        ['Umordnungen',         'Möglich! (Carbeniumion-Umlagerungen: 1,2-H- oder 1,2-CH₃-Shift)', 'Nicht möglich (kein Carbeniumion)'],
      ],
      highlight: [0, 2, 3],
    })}

    ${renderInfobox({
      type: 'blue', icon: 'fas fa-lightbulb', title: 'Abgangsgruppen — Stabilität nach Abgang',
      body: `Eine gute Abgangsgruppe (LG, leaving group) muss nach dem Abgang als
             stabiles Anion (oder neutral) existieren können.<br><br>
             <strong>Gute Abgangsgruppen (geordnet):</strong><br>
             I⁻ > Br⁻ > Cl⁻ > F⁻ (Halogenide) ·
             TsO⁻ (Tosylat) > MsO⁻ (Mesylat) >> OH⁻ ·
             H₂O (nach Protonierung von OH zu OH₂⁺) ·
             N₂ (aus Diazoniumsalzen → sehr schnell)<br><br>
             <strong>Schlechte Abgangsgruppen:</strong>
             OH⁻, NH₂⁻, OR⁻ — zu basisch; müssen erst protoniert werden.
             Deshalb: Alkohole reagieren nicht direkt mit Nu,
             sondern erst nach Protonierung der OH-Gruppe → OH₂⁺ kann als H₂O abgehen.`,
    })}

    <h3 class="lz-h3" style="margin-top:1.75rem;">Wichtige Halogenalkane</h3>

    ${renderTable({
      headers: ['Verbindung', 'Formel', 'Herstellung', 'Verwendung / Bedeutung'],
      rows: [
        ['Chlormethan',        'CH₃Cl',   'CH₄ + Cl₂ (SR, UV)',           'Methylierungsmittel in Synthese'],
        ['Dichlormethan (DCM)','CH₂Cl₂',  'CH₄ + Cl₂ (SR, mehrstufig)',   'Wichtigstes Lösungsmittel org. Chemie; Abbeizer; krebsverdächtig'],
        ['Chloroform',         'CHCl₃',   'CH₄ + Cl₂ (SR)',               'Historisch: Narkotikum; jetzt LM (DCM bevorzugt); CHCl₃+NaOH→CCl₃⁻→CCl₂ (Carben!)'],
        ['Tetrachlormethan',   'CCl₄',    'CH₄ + 4Cl₂',                   'LM (historisch); krebserzeugend; in Feuerlöschern (historisch); Treibhausgas-Vorläufer'],
        ['Vinylchlorid',       'CH₂=CHCl','C₂H₂ + HCl oder Oxychlorierung', 'PVC-Monomer (~40 Mio. t/Jahr); kanzerogen'],
        ['Chloroethylen (Vinylchlorid)','CH₂=CHCl','— s.o.—',             '→ PVC (Polyvinylchlorid)'],
        ['Fluorchlorkohlenwasserstoffe (FCKW, R-11, R-12)', 'CCl₃F, CCl₂F₂', 'Swarts-Fluorierung', 'Ozonabbauend! Montrealer Protokoll 1987: Verbot; ersetzt durch HFKW (kein Cl, aber Treibhausgas)'],
        ['Bromethan',          'C₂H₅Br',  'Ethanol + HBr oder Ethylen + HBr (MRK)', 'Alkylierungsmittel; SN2-Standard'],
        ['Iodmethan',          'CH₃I',    'Methanol + HI oder CH₃Cl + NaI (Finkelstein)', 'Sehr reaktives Methylierungsreagenz; SN2-Modell'],
      ],
      highlight: [1, 6],
    })}
  `; }

  // 9.4.3 + 9.4.4
  _amineAlkohole() { return `
    ${renderSubhead('9.4.3 — Amine & 9.4.4 — Alkohole und Phenole')}

    <h3 class="lz-h3">Amine — Stickstoff als funktionelles Zentrum</h3>
    <p class="lz-prose">
      Amine sind Derivate des Ammoniaks, in dem ein, zwei oder alle drei H-Atome
      durch organische Reste ersetzt sind.
    </p>

    ${renderTable({
      headers: ['Klasse', 'Allg. Formel', 'Beispiel', 'Basizität (pK_b)', 'Besonderheit'],
      rows: [
        ['Primäres Amin (1°)',  'R–NH₂',     'Methylamin CH₃NH₂, Anilin C₆H₅NH₂', 'CH₃NH₂: 3,36; Anilin: 9,37', 'NH₂-Gruppe; Donator für H-Brücken'],
        ['Sekundäres Amin (2°)','R₂NH',      'Dimethylamin (CH₃)₂NH, Piperidin',   'Dimethylamin: 3,23',          '1 H: noch H-Brücken; weniger basisch als primär (stärker als prim. durch +I)'],
        ['Tertiäres Amin (3°)', 'R₃N',       'Trimethylamin (CH₃)₃N, Triethylamin','Trimethylamin: 4,22',         'Kein NH! Keine H-Brücken; sehr guter Proton-Akzeptor'],
        ['Quartäres Ammoniumsalz', 'R₄N⁺X⁻','Cholin, Tetramethylammoniumchlorid', '—',                           'Permanent geladen; keine Basizität'],
        ['Aromatisches Amin',  'ArNH₂',      'Anilin C₆H₅NH₂',                    'pK_b = 9,37 (sehr schwach)',   '–NH₂ über +M mit Ring konjugiert → FEP am N weniger verfügbar → schwache Base'],
      ],
      highlight: [0, 4],
    })}

    ${renderTable({
      headers: ['Reaktion', 'Gleichung', 'Produkt', 'Bedeutung'],
      rows: [
        ['Salzbildung (Protonierung)', 'RNH₂ + HCl → RNH₃⁺Cl⁻', 'Ammoniumsalz', 'Amine als Basen; Salzbildung macht Amine wasserlöslich; Pharmazeutika oft als HCl-Salze'],
        ['Alkylierung', 'RNH₂ + R\'X → R(R\')NH + HX (SN2)', 'Sek. Amin (dann tert.)', 'Schwer kontrollierbar; Mehrfachalkylierung; Hofmann-Methylierung mit CH₃I'],
        ['Acylierung (Schotten-Baumann)', 'RNH₂ + R\'COCl → R\'CO–NHR + HCl', 'Amid (stabil!)', 'Schutz der Aminogruppe; Nylon-Verknüpfung; Peptidbildung'],
        ['Diazotierung', 'ArNH₂ + NaNO₂ + HCl (0–5°C) → ArN₂⁺Cl⁻', 'Diazoniumsalz', 'Wichtig! Kupplung mit Phenolen → Azofarbstoffe (z.B. Methylorange)'],
        ['Azokupplung', 'ArN₂⁺ + ArOH (pH 9–10) → Ar–N=N–Ar–OH', 'Azofarbstoff (rot/orange)', 'Elektrophile Substitution am aktivierten Aromaten; Farbstoffe'],
        ['Oxidation zu Nitroso/Nitro', 'RNH₂ → RNHO → RNO₂ (mit KMnO₄)', 'Nitrosoverbindung', 'Selten nützlich; meist unerwünscht'],
      ],
      highlight: [3, 4],
    })}

    <h3 class="lz-h3" style="margin-top:1.75rem;">Alkohole — OH-Gruppe als Reaktionszentrum</h3>

    ${renderTable({
      headers: ['Klasse', 'Struktur', 'Beispiele', 'pK_s', 'Eigenschaften'],
      rows: [
        ['Primärer Alkohol (1°)', 'R–CH₂–OH', 'Methanol, Ethanol, 1-Propanol, Benzylalkohol', '~16', 'Wenig sterisch gehindert; oxidierbar zu Aldehyd'],
        ['Sekundärer Alkohol (2°)','R₂CH–OH',  '2-Propanol, Menthol, Cyclohexanol',             '~16', 'Oxidierbar zu Keton'],
        ['Tertiärer Alkohol (3°)', 'R₃C–OH',  'tert-Butanol, 2-Methyl-2-propanol',              '~16', 'Kaum oxidierbar; SN1 bevorzugt; E1 leicht'],
        ['Phenol',                 'ArOH',     'Phenol, Kresol, Bisphenol A',                   '~10', 'Viel saurer als Alkohole (pK_s 10 vs. 16); –OH aryl → –M senkt pK_s'],
        ['Diol (Glycol)',           '–(OH)₂',  'Ethylenglycol HOCH₂CH₂OH, Propylenglycol',     '~16', 'Frostschutz; Polyester-Baustein'],
        ['Triol',                  '–(OH)₃',  'Glycerin HOCH₂CH(OH)CH₂OH',                    '~14', 'Kosmetik; Fett-Gerüst; süß, viskos'],
      ],
      highlight: [3, 5],
    })}

    ${renderTable({
      headers: ['Reaktion', 'Bedingungen', 'Produkt', 'Mechanismus', 'Beispiel'],
      rows: [
        ['Veresterung (Fischer)', 'Carbonsäure + H⁺-Kat., Δ', 'Ester + H₂O', 'AAc2 (Acylsubstitution)', 'CH₃OH + CH₃COOH → CH₃COOCH₃ + H₂O'],
        ['Veretherung', 'Alkohol + H₂SO₄, 140°C', 'Ether + H₂O', 'SN2 (primäre Alkohole)', '2 C₂H₅OH → C₂H₅OC₂H₅ + H₂O (Diethylether)'],
        ['Substitution (–OH durch Halogen)', 'HX oder PBr₃ oder SOCl₂', 'Halogenalkan', 'SN1 oder SN2 (über H₂O⁺ als LG)', 'C₂H₅OH + HBr → C₂H₅Br + H₂O'],
        ['Eliminierung zu Alken', 'konz. H₂SO₄, 170°C (oder Al₂O₃, 300°C)', 'Alken + H₂O', 'E1 (über Carbeniumion)', 'C₂H₅OH → CH₂=CH₂ + H₂O'],
        ['Oxidation (1° Alkohol)', 'KMnO₄/K₂Cr₂O₇ (sauer) oder CrO₃/Py', '→ Aldehyd → Carbonsäure', 'Oxidation O-Stufe', 'CH₃OH → HCHO → HCOOH'],
        ['Oxidation (2° Alkohol)', 'K₂Cr₂O₇/H₂SO₄ oder PCC (mild)', 'Keton (nicht weiter)', 'Oxidation O-Stufe', '2-Propanol → Aceton'],
        ['Reaktion mit Natrium', 'ROH + Na → RONa + ½H₂', 'Alkoholat + Wasserstoff', 'Säure-Base; Alkoholat = Base', 'Phenol + NaOH → Natriumphentolat (viel leichter als Alkohol!)'],
        ['Phenol + NaOH', 'ArOH + NaOH → ArO⁻Na⁺ + H₂O', 'Natriumalkoholat', 'Säure-Base (pK_s=10 → reagiert mit NaOH)', 'Phenol saurer als Wasser → reagiert mit NaOH (Alkanol nicht!)'],
      ],
      highlight: [0, 4, 5, 7],
    })}
  `; }

  // 9.4.5 + 9.4.6
  _etherCarbonyl() { return `
    ${renderSubhead('9.4.5 — Ether & 9.4.6 — Carbonylverbindungen')}

    <h3 class="lz-h3">Ether — C–O–C-Brücke</h3>

    ${renderTable({
      headers: ['Ether', 'Formel', 'Sdp. [°C]', 'Verwendung / Besonderheit'],
      rows: [
        ['Diethylether',    'C₂H₅–O–C₂H₅', '34,6', 'Klassisches LM org. Chemie; feuergefährlich; Narkosetikum (historisch); bildet explosive Peroxide mit O₂!'],
        ['THF (Tetrahydrofuran)', 'Cycl. C₄H₈O', '65', 'Polares aprotisches LM; löst viele org. und anorg. Stoffe; auch Peroxidgefahr'],
        ['Dioxan (1,4-)',   'Cycl. C₄H₈O₂', '101', 'Gutes LM; mischbar mit Wasser und org. LM; weniger Peroxidgefahr'],
        ['Diisopropylether','(i-Pr)₂O',       '68', 'Extraktionsmittel; weniger Peroxidbildung als Diethylether'],
        ['Methyl-tert-butylether (MTBE)', '(CH₃)₃C–O–CH₃', '55', 'Benzinzusatz (Oktanzahlerhöhung); umstr. (Grundwasserverschmutzung)'],
        ['Dimethylether (DME)', 'CH₃–O–CH₃', '−24', 'Alternativkraftstoff; Treibmittel (Aerosole); Syntese aus CH₃OH'],
        ['Kronenether',     '18-Kron-6 usw.', 'Fest', 'Komplexieren Metallkationen (K⁺ in 18-Kron-6); Phasentransfer-Katalyse'],
      ],
      highlight: [0, 6],
    })}

    ${renderInfobox({
      type: 'warning', icon: 'fas fa-fire', title: 'Peroxidgefahr bei Ethern',
      body: `Ether (besonders Diethylether und THF) bilden bei Lagerung an Luft und Licht
             langsam <strong>Peroxide (R–O–O–H)</strong> durch Autooxidation:
             R–O–CH₂ + O₂ → R–O–CH(OOH)–<br><br>
             Peroxide sind stark explosiv beim Eindampfen/Destillieren!
             Lagerung: lichtgeschützt, gekühlt, kurz; Peroxidtest vor Destillation:
             Kaliumiodid-Stärke-Streifen oder Titan(IV)sulfat-Lösung (orange = Peroxid!)<br>
             Entfernung: Filtration über Al₂O₃ oder Reduktion mit Fe(II).`,
    })}

    <h3 class="lz-h3" style="margin-top:1.75rem;">Aldehyde und Ketone — die Carbonylgruppe</h3>
    <p class="lz-prose">
      Die <strong>Carbonylgruppe C=O</strong> ist das reaktive Zentrum beider Klassen.
      C ist sp²-hybridisiert, das C=O-System ist planar.
      Das C-Atom ist stark elektrophil (δ+) → Angriff durch Nukleophile!
    </p>

    ${renderCompare({
      titleA: 'Aldehyde (R–CHO)',
      titleB: 'Ketone (R–CO–R\')',
      listA: [
        'C=O am Kettenende; mindestens ein H am Carbonyl-C',
        'Oxidierbar zu Carbonsäure (KMnO₄, CrO₃)',
        'Tollens-Probe: Ag(NH₃)₂⁺ → Ag-Spiegel (Silberspiegel)',
        'Fehling-Probe: Cu²⁺ (blau) → Cu₂O (ziegelrot)',
        'Reaktiv gegenüber Nukleophilen (weniger sterisch abgeschirmt)',
        'Beispiele: Formaldehyd (HCHO), Acetaldehyd (CH₃CHO), Benzaldehyd',
      ],
      listB: [
        'C=O in der Kettenmitte; zwei organische Gruppen am Carbonyl-C',
        'Oxidation schwierig; nur mit sehr starken Mitteln (Haloformreaktion!)',
        'Tollens-Probe: negativ',
        'Fehling-Probe: negativ',
        'Weniger reaktiv (sterische Abschirmung durch zwei Gruppen)',
        'Beispiele: Aceton (CH₃COCH₃), Cyclohexanon, Acetophenon, Benzophenon',
      ],
    })}

    <h3 class="lz-h3" style="margin-top:1.75rem;">Nukleophile Addition an Carbonylverbindungen (NAn)</h3>

    ${renderTable({
      headers: ['Reaktion', 'Nukleophil (Nu)', 'Produkt', 'Gleichung / Bedingungen'],
      rows: [
        ['Hydratation',         'H₂O',               'Diol (gem-Diol, Hydrat)',         'R–CHO + H₂O ⇌ R–CH(OH)₂; GG-abhängig; HCHO fast vollständig hydratisiert'],
        ['Acetalbildung',       'R\'OH (+ H⁺)',       'Halbacetal → Acetal',             'R–CHO + 2R\'OH →(H⁺) R–CH(OR\')₂ + H₂O; Acetale säurestabil, basenlabil'],
        ['Cyanohydrinbildung',  'HCN (= H⁺ + CN⁻)',  'Cyanohydrin (α-Hydroxynitril)',   'R–CHO + HCN ⇌ R–CH(OH)–CN; GG mit KCN/H⁺; +1 C-Atom!; → α-Hydroxycarb.säure'],
        ['Alkyladdition (Grignard)', 'RMgX (Grignard)', 'Alkohol',                      'R\'–CHO + RMgX → R\'–C(R)(OH)H nach Hydrolyse; prim. aus HCHO, sek. aus R\'CHO, tert. aus Keton'],
        ['Carbonylreduktion',   'NaBH₄ oder LiAlH₄', 'Alkohol',                        'NaBH₄: mild (Keton → sek. Alkohol; Aldehyd → prim. Alkohol); LiAlH₄: reduziert auch Ester/Carbonsäuren'],
        ['Aldolreaktion',       'Enolat (aus R–CO–CH₃)', 'β-Hydroxy-Aldehyd/-Keton',   '2 CH₃CHO →(NaOH) CH₃–CH(OH)–CH₂–CHO (Acetaldol)'],
        ['Aldolkondensation',   'Enolat + Carbonyl',  'α,β-ungesättigtes Carbonyl',     'Aldolprodukt → H₂O-Abspaltung →(Δ, Base) CH₃–CH=CH–CHO (Crotonaldehyd)'],
        ['Wittig-Reaktion',     'Ylid R₂P=CR\'₂',    'Alken (C=C)',                     'Carbonyl + Ph₃P=CR\'₂ → R–C=CR\'₂ + Ph₃P=O; spez. für Alken aus Keton'],
        ['Iminbildung',         'R\'NH₂ (primäres Amin)', 'Imin (Schiff-Base, C=N)',     'R–CHO + H₂N–R\' → R–CH=N–R\' + H₂O (reversibel; pH 5–7 optimal)'],
        ['Enaminbildung',       'R₂NH (sekundäres Amin)', 'Enamin (C=C–N)',              'R–CO–CH₂– + R\'₂NH → R–C(NR\'₂)=CH– + H₂O (Stork-Enamin-Synthese)'],
      ],
      highlight: [3, 5, 6],
    })}

    ${renderInfobox({
      type: 'blue', icon: 'fas fa-lightbulb', title: 'Aldolreaktion — Schlüsselreaktion der Biosynthese',
      body: `Die Aldolreaktion ist eine der wichtigsten C–C-knüpfenden Reaktionen.
             In der Biosynthese läuft sie enzymatisch ab (Aldolase in der Glykolyse).<br><br>
             <strong>Mechanismus (basenkatalysiert):</strong><br>
             ① Base (OH⁻) deprotoniert α-C → Enolat (C-Nukleophil)<br>
             ② Enolat greift Carbonyl-C des zweiten Aldehyds an<br>
             ③ Protonierung → β-Hydroxyaldehyd<br>
             ④ Dehydratisierung bei Erhitzen → α,β-ungesättigter Aldehyd (Crotonaldehyd)<br><br>
             <strong>Gekreuzte Aldolreaktion:</strong>
             Zwei verschiedene Carbonylverbindungen — nur sinnvoll wenn eine kein α-H hat
             (z.B. Benzaldehyd als Elektrophil + Aceton als Enolquelle → Benzalaceton).`,
    })}
  `; }

  // 9.4.7
  _carbonsaeuren() { return `
    ${renderSubhead('9.4.7 — Carbonsäuren und Carbonsäurederivate')}

    <h3 class="lz-h3">Carbonsäuren — Struktur und Stärke</h3>
    <p class="lz-prose">
      Carbonsäuren tragen die <strong>Carboxylgruppe –COOH</strong> (= Carbonyl + Hydroxyl).
      Sie bilden in der Regel Dimere durch zwei Wasserstoffbrücken zwischen den COOH-Gruppen.
      Die pK_s-Werte liegen typisch bei 4–5 (stärker als Alkohole, schwächer als HCl).
    </p>

    ${renderTable({
      headers: ['Säure', 'IUPAC-Name', 'pK_s₁', 'Sdp. [°C]', 'Vorkommen / Bedeutung'],
      rows: [
        ['Ameisensäure (HCOOH)',   'Methansäure',        '3,75',  '101',  'Ameisen, Brennnesseln; Konservierungsmittel (E236)'],
        ['Essigsäure (CH₃COOH)',   'Ethansäure',         '4,75',  '118',  'Essig (5–8%); Lösungsmittel; Essigsäureanhydrid; Ausgangsstoff für Aspirin'],
        ['Propionsäure',           'Propansäure',        '4,87',  '141',  'Propionat: Konservierungsmittel (E280–283)'],
        ['Buttersäure',            'Butansäure',         '4,81',  '164',  'Ranzige Butter; Parmesan; Darmflora-Metabolit'],
        ['Palmitinsäure (C16)',    'Hexadecansäure',     '4,9',   '339',  'Gesättigte Fettsäure; Palmöl; Seifenherstellung'],
        ['Ölsäure (C18:1)',        'cis-Octadec-9-ensäure','4,9', '360',  'Häufigste ungesättigte FS; Olivenöl (55–80%); flüssig'],
        ['Oxalsäure (HOOC–COOH)', 'Ethandisäure',       '1,25 / 4,27', '157 (Sublim.)', 'Nieren-/Harnsteine (Calciumoxalat); Rhabarber, Spinat; starke Säure'],
        ['Milchsäure',             '2-Hydroxypropansäure', '3,86', '122', 'Joghurt, Sauerkraut; Muskelstoffwechsel; L-Form (biologisch aktiv)'],
        ['Weinsäure',              '2,3-Dihydroxybutandisäure', '2,99 / 4,34', '—', 'Trauben, Wein; Weinstein = Kaliumhydrogentartrat (KHC₄H₄O₆)'],
        ['Citronensäure',          '2-Hydroxypropan-1,2,3-tricarbonsäure', '3,13', '—', 'Zitrusfrüchte; Citratzyklus; Konservierungsmittel (E330)'],
        ['Benzoesäure',            'Benzenecarbonsäure', '4,20',  '249',  'Konservierungsmittel (E210); Synthese aus Toluol (KMnO₄-Oxidation)'],
        ['Salicylsäure',           '2-Hydroxybenzoesäure','2,97', '211',  'Weidenrinde; Vorstoff Aspirin (Acetylierung der OH-Gruppe)'],
      ],
      highlight: [1, 5, 9],
    })}

    ${renderInfobox({
      type: 'blue', icon: 'fas fa-info-circle', title: 'Warum sind Carbonsäuren so viel stärker als Alkohole?',
      body: `Essigsäure (pK_s = 4,75) ist ~10¹¹-fach stärker als Ethanol (pK_s = 16).<br><br>
             <strong>Grund: Resonanzstabilisierung des Carboxylat-Anions CH₃COO⁻:</strong><br>
             Die negative Ladung ist gleichmäßig über beide Sauerstoffatome verteilt
             (Resonanzstrukturen: –C(=O)–O⁻ ↔ –C(–O⁻)=O → beide C–O-Bindungen gleich lang, 127 pm).<br>
             Das Alkoholat-Anion (RO⁻) hat kein delokalisiertes Anion → weniger stabil.`,
    })}

    <h3 class="lz-h3" style="margin-top:1.75rem;">Carbonsäurederivate — Reaktivität</h3>
    <p class="lz-prose">
      Carbonsäurederivate entstehen durch Austausch der –OH-Gruppe der Carbonsäure
      gegen andere Gruppen. Sie reagieren alle über
      <strong>nukleophile Acylsubstitution</strong> (Additionseliminierungsmechanismus).
      Die Reaktivität nimmt von Acylchlorid bis Amid stark ab.
    </p>

    ${renderFormulaBox({
      label:   'Reaktivitätsreihe der Carbonsäurederivate',
      formula: 'Acylchlorid > Anhydrid >> Ester ≈ Carbonsäure > Amid',
      desc:    'Reaktivität gegenüber Nukleophilen (z.B. H₂O, ROH, RNH₂) · Je schlechter die Abgangsgruppe, desto weniger reaktiv · Cl⁻ > RCOO⁻ > RO⁻ >> RNH⁻ als Abgangsgruppen',
    })}

    ${renderTable({
      headers: ['Derivat', 'Formel', 'Darstellung', 'Reaktionen', 'Beispiele / Verwendung'],
      rows: [
        ['Acylchlorid (Säurechlorid)', 'R–COCl', 'RCOOH + SOCl₂ oder PCl₅', 'Sehr reaktiv: + H₂O → RCOOH + HCl · + ROH → Ester + HCl · + RNH₂ → Amid + HCl', 'Acetylchlorid (CH₃COCl); Benzoylchlorid; Synthesebausteine'],
        ['Anhydrid',                  '(RCO)₂O', '2 RCOOH →(Δ) (RCO)₂O + H₂O', 'Weniger reaktiv als Acylchlorid; + ROH → Ester + RCOOH · + RNH₂ → Amid + RCOOH', 'Essigsäureanhydrid (Aspirin-Synthese); Phthalsäureanhydrid → Weichmacher'],
        ['Ester',                     'R–COO–R\'', 'RCOOH + R\'OH →(H⁺) · oder RCOCl + R\'OH', 'Verseifung (NaOH): RCOOR\' + OH⁻ → RCOO⁻ + R\'OH (irreversibel, da RCOO⁻ keine gute LG) · + RNH₂ → Amid (langsam) · Umesterung', 'Ethylacetat (LM), Fette (Glycerinester), Polyester, Polyacrylat'],
        ['Carbonsäure',               'R–COOH', 'Oxidation Aldehyd/prim. Alkohol', 'Esterbildung (Säurekatalyse, reversibel) · Amid-Bildung (langsam, hohe T) · Decarboxylierung β-Ketosäuren', 'Essigsäure, Benzoesäure, Fettsäuren'],
        ['Amid',                      'R–CO–NHR\'', 'RCOCl + RNH₂ · oder Ester + RNH₂ (langsam)', 'Hydrolyse (sauer oder basisch, langsam!) · Hofmann-Abbau: RCONH₂ + Br₂/NaOH → RNH₂', 'Nylon (Polyamid), Peptid-Bindungen, Harnstoff (CO(NH₂)₂)'],
        ['Nitril',                    'R–C≡N',  'RBr + KCN (SN2) · oder Amid + SOCl₂', 'Hydrolyse: R–CN + H₂O →(H⁺) RCONH₂ →(H⁺) RCOOH · Reduktion: R–CN + 2H₂ → R–CH₂–NH₂', 'Acetonitril (LM); Acrylnitril → Polyacrylnitril; Cyanwasserstoff HCN'],
      ],
      highlight: [0, 2, 4],
    })}

    ${renderAccordion([
      {
        title: 'Esterspaltung (Verseifung) — Mechanismus in sauer und basisch',
        content: `<p class="lz-prose"><strong>Basische Verseifung (irreversibel):</strong><br>
                  R–COOR\' + OH⁻ → R–COO⁻ + R\'–OH<br>
                  Mechanismus (BAc2): OH⁻ greift am Carbonyl-C an → tetraedrisches Intermediat →
                  R\'O⁻ als LG → RCOO⁻ (stabil; reagiert nicht zurück!) → irreversibel.<br><br>
                  <strong>Saure Verseifung (reversibel):</strong><br>
                  R–COOR\' + H₂O →(H⁺) R–COOH + R\'OH<br>
                  H⁺ protoniert Carbonyl-O → elektrophileres C → H₂O als Nu → Tetrahedral → R\'OH ab →
                  R–COOH. Reversibel! (GG liegt bei genug H₂O auf Produktseite).<br><br>
                  <strong>Wichtig:</strong> Seife entsteht durch basische Verseifung von Fetten:
                  Triglycerid + 3 NaOH → Glycerin + 3 RCOONa (Seife)</p>`,
      },
      {
        title: 'Fischer-Veresterung — Reaktionsmechanismus und GG-Optimierung',
        content: `<p class="lz-prose"><strong>Fischer-Veresterung:</strong>
                  RCOOH + R\'OH →(H⁺, Δ) RCOOR\' + H₂O<br>
                  Gleichgewichtsreaktion! K ≈ 4 für Essigsäure + Ethanol.</p>
                  <p class="lz-prose"><strong>Mechanismus (AAc2, Additon-Eliminierung am Acyl-C):</strong><br>
                  ① H⁺ protoniert C=O → elektrophileres C<br>
                  ② R\'OH als Nukleophil greift an → tetraedrisches Zwischenprodukt (mit zwei OH)<br>
                  ③ Einer der OH-Gruppen protoniert → H₂O als LG verliert<br>
                  ④ Deprotonierung → Ester + H⁺ (regeneriert)</p>
                  <p class="lz-prose"><strong>Ausbeute-Optimierung:</strong><br>
                  ① Alkohol im Überschuss (LCh) · ② H₂O entfernen (Molsieb, Wasserabscheider) ·
                  ③ H⁺-Katalysator in katalytischer Menge</p>`,
      },
      {
        title: 'Fette und Seifen — Triester des Glycerins',
        content: `<p class="lz-prose"><strong>Fette (Triacylglycerine):</strong>
                  Glycerin + 3 Fettsäuren → Fett (Triglycerid) + 3H₂O<br>
                  Gesättigte FS (Palmitinsäure, Stearinsäure): Fest (Tierfette, Kokosfett)<br>
                  Ungesättigte FS (Ölsäure, Linolsäure): Flüssig (Pflanzenöle)<br>
                  Cis-Doppelbindungen knick die Kette → weniger dichte Packung → flüssig</p>
                  <p class="lz-prose"><strong>Seifenherstellung (Verseifung):</strong>
                  Fett + 3NaOH → Glycerin + 3RCOONa (Natriumsalze der Fettsäuren = Seife)<br><br>
                  <strong>Seifenwirkung:</strong>
                  Amphiphile Struktur: hydrophiler Kopf (–COO⁻) + hydrophober Schwanz (–C₁₇H₃₅)
                  → Mizellen bilden sich um Fettpartikel → emulgiert → abspülbar.<br>
                  In hartem Wasser (Ca²⁺/Mg²⁺): Kalkseife Ca(RCOO)₂ unlöslich → Kalkablagerungen.</p>`,
      },
    ])}

    ${renderInfobox({
      type: 'success', icon: 'fas fa-graduation-cap', title: 'Zusammenfassung — Funktionelle Gruppen',
      body: `<strong>Halogenalkane:</strong> C–X elektrophil · SN1 (tert., R⁺-Stab.) vs. SN2 (prim., Walden-Umk.) · Abgangsgruppen: I⁻>Br⁻>Cl⁻>>F⁻<br>
             <strong>Amine:</strong> Basen; Basizität: aliph. > NH₃ > aryl (Konjugation!) · Diazotierung → Azofarbstoffe<br>
             <strong>Alkohole:</strong> pK_s≈16 · Oxidation: prim.→Aldehyd→Carbons.; sek.→Keton · Veretherung · Veresterung<br>
             <strong>Phenole:</strong> pK_s≈10 (saurer!) · reagiert mit NaOH (Alkohole nicht!)<br>
             <strong>Aldehyde:</strong> Tollens/Fehling positiv · Oxidation zu RCOOH möglich<br>
             <strong>Ketone:</strong> Tollens/Fehling negativ · nur durch Haloformreaktion spaltbar<br>
             <strong>NAn-Reihenfolge:</strong> HCN/Grignard/NaBH₄/LiAlH₄/H₂O/ROH (Acetal) an Carbonyl<br>
             <strong>Carbonsäurederivate:</strong> Acylchlorid > Anhydrid >> Ester ≈ Säure > Amid<br>
             <strong>Esterhydrolyse:</strong> Basisch (irreversibel) = Verseifung · Sauer (reversibel) · Fette→Seife`,
    })}
  `; }

  init() {
    i18n.init();
    initScrollReveal();
    initInteractive(document);
    initTabs();
  }
}