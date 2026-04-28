// pages/projekte/lernzettel/faecher/chemie/themen/11/11-2.js
// Kapitel 11.2 — Instrumentelle Analyseverfahren
// 11.2.1  Spektroskopische Methoden
// 11.2.2  Chromatographische Methoden
// 11.2.3  Elektrochemische Methoden

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
  { key: 'a', icon: 'fas fa-wave-square',  label: '11.2.1 Spektroskopie'           },
  { key: 'b', icon: 'fas fa-columns',      label: '11.2.2 Chromatographie'          },
  { key: 'c', icon: 'fas fa-bolt',         label: '11.2.3 Elektrochemische Methoden'},
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
  return `<nav class="wim-tabs" role="tablist" id="tabs112">${nav}</nav>${panels}`;
}

function initTabs() {
  const nav = document.getElementById('tabs112');
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

export default class Chemie_11_2 {
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
          <i class="fas fa-chevron-right"></i><span>11.2</span>
        </div>
        <h1 class="lz-sub-title">Instrumentelle Analyseverfahren<br><em>Spektroskopie, Chromatographie, Elektrochemie</em></h1>
        <p class="lz-sub-desc">
          UV/VIS · IR · NMR · MS · AAS · GC · HPLC · Potentiometrie ·
          Polarographie · Lambert-Beer · Nernst-Gleichung
        </p>
        ${renderTags(['Kap. 11.2', 'Spektroskopie', 'Chromatographie', 'NMR', 'HPLC', 'LK Chemie BW'])}
      </div>
    </section>

    <section class="lz-content-section">
      <div class="lz-section-wrap">
        ${buildWimHTML(k => {
          if (k === 'a') return this._spektroskopie();
          if (k === 'b') return this._chromatographie();
          return this._elektrochemisch();
        })}
      </div>
    </section>

    <section class="lz-content-section" style="padding:1.5rem 0 3rem;">
      <div class="lz-section-wrap">
        ${renderPageNav({
          prev: { label: '11.1 Klassische Analyse',    link: `${BASE}/themen/11/11-1` },
          next: { label: 'Anhang: Periodensystem',      link: `${BASE}/themen/pse` },
        }, BASE)}
      </div>
    </section>
    ${footerHTML(this.router)}
  `; }

  // ══════════════════════════════════════════════════════════
  // 11.2.1 — Spektroskopische Methoden
  // ══════════════════════════════════════════════════════════
  _spektroskopie() { return `
    ${renderSubhead('11.2.1 — Spektroskopische Methoden')}

    <h2 class="lz-h2">Spektroskopie — Wechselwirkung von Strahlung mit Materie</h2>
    <p class="lz-prose">
      Spektroskopische Methoden nutzen die Wechselwirkung elektromagnetischer Strahlung
      mit Materie. Je nach Wellenlängenbereich werden verschiedene Energieniveaus
      angeregt — und damit verschiedene Informationen über die Probe erhalten.
    </p>

    ${renderTable({
      headers: ['Methode', 'Wellenlänge / Frequenz', 'Angeregter Übergang', 'Information', 'Empfindlichkeit'],
      rows: [
        ['γ-Strahlung (Mössbauer)', '0,01–0,5 nm', 'Kernübergänge', 'Kernumgebung, Oxidationsstufe (Fe, Sn)', 'Sehr hoch'],
        ['Röntgenfluoreszenz (RFA/XRF)', '0,01–2 nm', 'Röntgenemission nach Innerschalen-Anregung', 'Elementanalyse ohne Aufschluss; nicht-destruktiv', 'Hoch; ppm'],
        ['UV/VIS-Spektroskopie', '200–800 nm', 'Elektronenübergänge (π→π*, n→π*)', 'Strukturaufklärung, Quantifizierung (Lambert-Beer)', '10⁻⁵–10⁻⁶ mol/L'],
        ['IR-Spektroskopie', '2,5–25 µm (4000–400 cm⁻¹)', 'Molekülschwingungen (Strecken, Beugen)', 'Funktionelle Gruppen; Strukturaufklärung', 'µg-mg Bereich'],
        ['Raman-Spektroskopie', '400–4000 cm⁻¹ (inelast.)', 'Raman-Streuung; komplementär zu IR', 'Symm. Schwingungen (IR-inaktiv); wasserkompatibel', 'µg; SERS: Einzelmolekül'],
        ['NMR-Spektroskopie', 'Radiowellen (100–900 MHz für ¹H)', 'Kernspin-Übergänge im Magnetfeld', 'Detaillierte Molekülstruktur; Konnektivität; Stereochemie', 'mg Bereich; relativ unempfindlich'],
        ['ESR/EPR', 'Mikrowellen (~9 GHz)', 'Elektronenspin-Übergänge', 'Radikale, Übergangsmetallkomplexe', 'Sehr hoch; spezifisch für Radikale'],
        ['Atomabsorptionsspektroskopie (AAS)', '200–800 nm (Elementspezifisch)', 'Elektronenübergang in atomarer Flamme/Graphit', 'Elementspezifische Quantifizierung', 'ppb (µg/L)'],
        ['Massenspektrometrie (MS)', 'Nicht EM-Strahlung; Massenfilter', 'Ionisierung + m/z-Trennung', 'Molmasse; Struktur; Isotopenmuster; Sequenzierung', 'fg–ag; höchste Empfindlichkeit!'],
        ['Fluoreszenzspektroskopie', '200–800 nm', 'Absorption + Emission (S₀→S₁→S₀)', 'Quantifizierung fluoresz. Substanzen; Fingerprint', '10⁻¹²–10⁻¹⁵ mol/L; sehr empfindlich'],
      ],
      highlight: [2, 3, 5, 7, 8],
    })}

    <h3 class="lz-h3" style="margin-top:1.75rem;">UV/VIS-Spektroskopie und Lambert-Beer-Gesetz</h3>

    ${renderFormulaBox({
      label:   'Lambert-Beer-Gesetz',
      formula: 'A = ε · c · d  (Extinktion = molarer Extinktionskoeffizient × Konzentration × Schichtdicke)',
      desc:    'A = −lg(I/I₀) = −lg T (T = Transmission) · ε [L/(mol·cm)]: charakteristisch für Stoff bei gegebener λ · c [mol/L]: Konzentration · d [cm]: Weglänge (Küvette) · Linear bis A < 1 (Abweichungen bei hohen Konz. oder polychromatischer Strahlung)',
    })}

    ${renderTable({
      headers: ['Anwendung', 'λ_max [nm]', 'ε [L/mol·cm]', 'Analyt', 'Nachweis/Assay'],
      rows: [
        ['Proteinbestimmung (Bradford)',       '595',  '~35 000', 'Proteine',      'Coomassie Brilliant Blue G250 + Protein → Blau'],
        ['DNA-Quantifizierung',                '260',  '~6600 (dsDNA)', 'DNA/RNA', 'Nukleinsäureabasorption; A₂₆₀/A₂₈₀ = Reinheit'],
        ['Phenolnachweis (Folin-Ciocalteu)',   '750',  '~5000',   'Polyphenole',   'Mo(VI)blau nach Reduktion'],
        ['Glucose (Hexokinase-Assay)',         '340',  '~6220',   'Glucose',       'NADH-Absorption; Glucose + ATP → G6P → NADPH'],
        ['Nitrit (Griess-Reagenz)',             '540',  '~45 000', 'NO₂⁻',         'Azofarbstoff; rötlich-rosa'],
        ['Permanganat (eigene Farbe)',          '525',  '~2400',   'MnO₄⁻',        'Eigenabsorption; direkte Konzentrationsbestimmung'],
        ['Fe(III) mit Thiocyanat',             '480',  '~5000',   'Fe³⁺',         '[Fe(SCN)]²⁺; blutrot; Spurenbestimmung'],
      ],
      highlight: [1, 4],
    })}

    <h3 class="lz-h3" style="margin-top:1.75rem;">IR-Spektroskopie — funktionelle Gruppen erkennen</h3>

    ${renderTable({
      headers: ['Schwingungstyp', 'Wellenzahl [cm⁻¹]', 'Intensität', 'Funktionelle Gruppe', 'Hinweise'],
      rows: [
        ['O–H-Streckschwingung (Alkohol)', '3200–3550 (breit)', 'Stark, breit', '–OH (Alkohole)', 'H-Brücken → Verbreiterung; freies OH: schmal bei 3620 cm⁻¹'],
        ['O–H-Streckschwingung (Säure)',   '2500–3300 (sehr breit)', 'Mittel, sehr breit', '–COOH', 'Dimere → extrem breite Bande; charakteristisch für Carbonsäure'],
        ['N–H-Streckschwingung',           '3300–3500',        'Mittel',        '–NH₂ oder –NH–', 'Primäre Amine: 2 Banden; sekund.: 1 Bande; schärfer als O–H'],
        ['C–H aromatisch',                 '3000–3100',        'Schwach',       'Arom. C–H',      'Über 3000 cm⁻¹; unter 3000 cm⁻¹ = aliphath. C–H'],
        ['C–H aliphatisch',                '2850–3000',        'Stark',         'CH₃, CH₂, CH',   'Sym./asym. Streckschwingung; fast immer vorhanden'],
        ['C≡N-Streckschwingung',           '2200–2270',        'Stark',         'Nitril –C≡N',    'Charakteristisch; leere Region sonst'],
        ['C≡C-Streckschwingung',           '2100–2260',        'Mittel–schwach','Alkin –C≡C–',    'Terminale Alkine: stark; interne: schwach (IR-inaktiv bei Symmetrie)'],
        ['C=O-Streckschwingung (Aldehyd)', '1720–1740',        'Sehr stark',    '–CHO',           'Zusätzlich: C–H-Aldehyd bei 2700+2850 cm⁻¹'],
        ['C=O-Streckschwingung (Keton)',   '1705–1725',        'Sehr stark',    '>C=O',           'Charakteristisch; mit aromatischem Ring: ~1680 cm⁻¹'],
        ['C=O (Carbonsäure)',              '1700–1725',        'Sehr stark',    '–COOH',          'Kombination mit O–H-Bande → eindeutig'],
        ['C=O (Ester)',                    '1735–1750',        'Sehr stark',    '–COOR',          'Höchste Wellenzahl unter Carbonylen; zusätzlich C–O bei 1050–1300'],
        ['C=O (Amid)',                     '1630–1690',        'Stark',         '–CONH–',         'Niedrigste Wellenzahl; + N–H bei 3300 (Amid-II-Bande bei 1540 cm⁻¹)'],
        ['C=C aromatisch',                 '1450–1600',        'Mittel',        'Aromat.',        'Charakteristisches Muster; Ring-Streckschwingungen'],
        ['C–O-Streckschwingung',           '1000–1300',        'Stark',         'Alkohole, Ether, Ester', 'Fingerprint-Region; komplex'],
      ],
      highlight: [0, 7, 8, 10, 11],
    })}

    <h3 class="lz-h3" style="margin-top:1.75rem;">NMR-Spektroskopie — ¹H- und ¹³C-NMR</h3>
    <p class="lz-prose">
      Die <strong>Kernresonanzspektroskopie (NMR)</strong> nutzt die Präzession von Kernen
      mit Spin (¹H, ¹³C, ¹⁵N, ³¹P) im Magnetfeld. Die <strong>chemische Verschiebung δ [ppm]</strong>
      relativ zum Standard TMS (Tetramethylsilan, δ=0) charakterisiert die Umgebung des Kerns.
    </p>

    ${renderTable({
      headers: ['Protonentyp', 'δ [ppm] (¹H-NMR)', 'Erklärung der Lage'],
      rows: [
        ['TMS (Standard)',                  '0,00',      'Referenz (tetramethylsilan)'],
        ['Alkyl-CH₃ (primär)',              '0,7–1,0',   'Stark abgeschirmt; kein elektronenziehender Nachbar'],
        ['Alkyl-CH₂ (sekundär)',            '1,2–1,4',   'Etwas weniger abgeschirmt als CH₃'],
        ['Alkyl-CH (tertiär)',              '1,4–1,7',   'Leicht entschirmt'],
        ['Allyl-H (neben C=C)',             '1,6–2,2',   '+I-Effekt durch Doppelb.'],
        ['Benzyl-H (–CH₂–Ar)',             '2,3–2,5',   'Aryl entschirmt leicht'],
        ['–OCH₃ (Methylether)',            '3,2–3,8',   'O-Atom: –I entschirmt; +M rückschirmend → mittleres δ'],
        ['–CH₂–Cl',                        '3,5–3,8',   'Cl entschirmt durch –I'],
        ['–CH₂–OH oder –CH(OH)',           '3,4–4,0',   'O-Atom entschirmt durch –I'],
        ['Aldehydisches H (–CHO)',          '9,0–10,5',  'Stark entschirmt durch C=O (σ- und π-Effekt)'],
        ['Aromaten-H',                     '6,5–8,0',   'Ringstromanisotropie: Magnetfeldverstärkung im Ring'],
        ['Vinyl-H (=CH–)',                 '4,5–6,5',   'Anisotropie der Doppelbindung'],
        ['Alkin-H (≡CH)',                  '2,0–3,5',   'Abschirmung durch Dreifachbindung (Magnetfeldaufhebung axial)'],
        ['–COOH',                          '10–12',     'Stark saures, entschirmtes H; breite Bande'],
        ['N–H (Amin)',                      '0,5–5,0',   'Breit; pH-abhängig; austauschbar (mit D₂O verschwindend)'],
        ['O–H (Alkohol)',                   '0,5–5,0',   'Breit; austauschbar'],
      ],
      highlight: [9, 10, 13],
    })}

    ${renderMerkboxGrid([
      {
        icon: 'fas fa-layer-group',
        title: 'Spin-Spin-Kopplung (J-Kopplung)',
        text: `Benachbarte H-Atome koppeln über Bindungen → Aufspaltung.
               n+1-Regel: Signal aufgespalten in (n+1) Linien, wenn n äquivalente Nachbar-H vorhanden.
               CH₃: Triplett (2 Nachbar-H aus CH₂, aufgespalten zu 2+1=3 Linien).
               CH₂ neben CH₃: Quartett (3 Nachbar-H → 3+1=4 Linien).
               Kopplungskonstante J [Hz]: 3J_HH (vicinale) ~6–8 Hz; trans ~12–18 Hz; cis ~6–12 Hz.`,
      },
      {
        icon: 'fas fa-calculator',
        title: 'Integration — Verhältnis der H-Atome',
        text: `Die Fläche (Integral) eines Signals ist proportional zur Anzahl der äquivalenten H-Atome.
               Ethylacetat CH₃COOCH₂CH₃: 3 Signale im Verhältnis 3:2:3 (CH₃CO:OCH₂:CH₃).
               Integration + chemische Verschiebung + Aufspaltungsmuster → vollständige Strukturaufklärung möglich.`,
      },
      {
        icon: 'fas fa-atom',
        title: '¹³C-NMR — Kohlenstoff-Spektrum',
        text: `Alle C-Atome direkt sichtbar (kein Kopplung H–H).
               δ(¹³C) Bereiche: Alkyl-C: 0–50 ppm · O-gebundenes C: 50–90 · Aromat./Alken: 100–150 · Carbonyl C=O: 155–220 ppm.
               Breitband-¹³C (BB-decoupled): alle H entkoppelt → jede C-Spezies = 1 Singulett.
               DEPT: unterscheidet CH₃ (positiv), CH₂ (negativ), CH (positiv), quart. C (fehlt).`,
      },
      {
        icon: 'fas fa-project-diagram',
        title: '2D-NMR — COSY, HSQC, HMBC',
        text: `COSY (¹H–¹H): zeigt welche H-Atome miteinander koppeln → Konnektivität der H-H-Bindungen.
               HSQC: zeigt direkte C–H-Bindungen (1J_CH) → Zuordnung ¹H zu ¹³C-Signal.
               HMBC: zeigt 2- und 3-bindige C–H-Kopplung → Fernkorrelationen → Verknüpfungspunkte von Strukturfragmenten.
               Diese 2D-Methoden erlauben Strukturaufklärung großer Moleküle.`,
      },
    ])}

    <h3 class="lz-h3" style="margin-top:1.75rem;">Massenspektrometrie (MS)</h3>

    ${renderTable({
      headers: ['Schritt', 'Technologie / Varianten', 'Prinzip', 'Anwendung'],
      rows: [
        ['Ionisierung',       'EI (Elektronenstoß, 70 eV), ESI (Elektrospray), MALDI (Laser), APCI, APPI, CI', 'EI: Elektron-Beschuss → radikalkation M⁺• · ESI: Ionisierung im elektrischen Feld (gentle; große Biomol.) · MALDI: Laser + Matrix (Kristalle) → Desorption', 'EI: Gasphasen-Mol. (GC-MS) · ESI: Proteine, Peptide, Oligonukleotide · MALDI: Polymere, Proteine'],
        ['Massentrennung',    'Quadrupol, TOF (Flugzeit), Sektorfeld, Ionenfalle (IT), Orbitrap, FT-ICR', 'Quadrupol: Stabilitätsbedingung im Wechselfeld (Einzel-m/z oder Scan) · TOF: t_Flug ∝ √(m/z) (höhere m/z langsamer) · Orbitrap: elektrostatische Ionenfalle → FT → ultrahohes Auflösung', 'Quadrupol: einfach, Routineeinsatz · TOF: hohe Masse, Proteine (MALDI-TOF) · Orbitrap: Metabolomics, Proteomics, Hochgenauigkeit'],
        ['Detektion',         'Sekundärelektronenvervielfacher (SEV), FT-Detektor', 'Ionenaufprall → Elektronen-Kaskade → Signal · FT: Bildung Frequenzmuster → Fourier-Transformation', '—'],
        ['MS/MS (Tandem-MS)', 'Triple-Quad (QqQ), Q-TOF, IT-Orbitrap, LTQ', 'Vorläuferion isoliert → CID-Fragmentierung → Produkt-MS/MS → Strukturinformation', 'Quantifizierung (MRM/SRM); Strukturaufklärung; Sequenzierung (Peptide, DNA)'],
      ],
      highlight: [0, 3],
    })}

    ${renderTable({
      headers: ['MS-Signal / Phänomen', 'Definition', 'Bedeutung für Strukturaufklärung'],
      rows: [
        ['Molekülion M⁺• (EI)',   'Nicht-fragmentiertes Radikalkation; m/z = M (Molmasse)',             'Gibt Molmasse an (oft schwach oder fehlend bei labilem Mol.)'],
        ['[M+H]⁺ (ESI)',          'Protoniertes Molekülion; m/z = M+1',                                  'Soft-Ionisation; kein Zerfallen; Molmasse direkt'],
        ['Basispeak',             'Intensivstes Fragment (=100% rel. Intensität)',                        'Oft stabilstes Carbeniumion; charakteristisch für Verbindungsklasse'],
        ['α-Spaltung',            'Bindungsbruch α zum Heteroatom oder zur Doppelb.', 'Aldehyde: CHO⁺ bei m/z=29 · Ketone: R-CO⁺ · Alkohole: [M-OH]⁺'],
        ['McLafferty-Umlagerung', '6-gliedriger ÜZ; β-H übertragen; γ-Spaltung', 'Charakteristisch für Carbonyle mit γ-H; geradzahliges Fragment'],
        ['Isotopenmuster',        'Natürliche Isotope erzeugen charakteristische Muster', 'Cl: M:M+2 = 3:1 (³⁵Cl:³⁷Cl) · Br: M:M+2 = 1:1 · Si: komplexes Muster'],
        ['m/z-Wert (hochgenau)', 'Exakte Masse erlaubt Molekülformel-Bestimmung', 'Orbitrap/FT-ICR: Δm < 1 ppm → C₁₀H₁₄O₂ vs. C₉H₁₂NO eindeutig unterscheidbar'],
      ],
      highlight: [0, 5, 6],
    })}

    <h3 class="lz-h3" style="margin-top:1.75rem;">Atomabsorptionsspektroskopie (AAS)</h3>
    <p class="lz-prose">
      Die <strong>AAS</strong> bestimmt einzelne Elemente durch Messung der Absorption
      elementspezifischer Strahlung durch atomisierte Probe. Sie ist das
      Standardverfahren zur Schwermetallbestimmung in Wasser, Lebensmitteln und biologischen Proben.
    </p>

    ${renderTable({
      headers: ['AAS-Variante', 'Atomisierung', 'T [°C]', 'Empfindlichkeit', 'Anwendung'],
      rows: [
        ['Flammen-AAS (F-AAS)',   'Flamme (Luft/C₂H₂ oder N₂O/C₂H₂)', '1700–2800', 'mg/L (ppm)', 'Routine; schnell; viele Elemente; weniger empfindlich'],
        ['Graphitofen-AAS (GF-AAS, ET-AAS)', 'Graphitrohr elektrisch erhitzt', '2000–2700', 'µg/L (ppb)', 'Sehr empfindlich; kleine Probenmengen (10–50 µL); Blut, Gewebe'],
        ['Hydridtechnik (HG-AAS)', 'Hydriderzeugung (NaBH₄): As, Se, Sb → AsCH, SeH₂ …', '900 (Quarzküvette)', 'ng/L (ppt)', 'Spezifisch für Hydridbildner: As, Sb, Bi, Se, Te, Hg (kalt)'],
        ['Kalt-Dampf-Technik (CV-AAS)', 'Hg²⁺ + SnCl₂ → Hg(g)', 'Raumtemperatur', 'ng/L (ppt)', 'Speziell für Quecksilber (Hg); Umweltanalytik'],
      ],
      highlight: [0, 1],
    })}
  `; }

  // ══════════════════════════════════════════════════════════
  // 11.2.2 — Chromatographische Methoden
  // ══════════════════════════════════════════════════════════
  _chromatographie() { return `
    ${renderSubhead('11.2.2 — Chromatographische Methoden')}

    <h2 class="lz-h2">Chromatographie — Trennung durch Verteilung</h2>
    <p class="lz-prose">
      Chromatographie trennt Gemische durch unterschiedliche Verteilung der Komponenten
      zwischen einer <strong>stationären Phase</strong> (Säulenmaterial, Papier, Kieselgel)
      und einer <strong>mobilen Phase</strong> (Lösungsmittel, Gas).
      Weniger stark retardierte Stoffe eluieren früher; stärker retardierte später.
    </p>

    ${renderTable({
      headers: ['Methode', 'Abk.', 'Stationäre Phase', 'Mobile Phase', 'Trennprinzip', 'Anwendungen'],
      rows: [
        ['Gaschromatographie',    'GC',    'Flüssigfilm (stationäre Phase auf Kapillare: z.B. Polydimethylsiloxan)', 'Trägergas: He, N₂, H₂',          'Flüchtigkeit + Löslichkeit; Siedepunkt-ähnliche Trennung', 'Flüchtige organische Verbindungen, Alkane, Pestizide, Ethanol-Blutalkohol, Aromen'],
        ['HPLC (Umkehrphase)',    'RP-HPLC','C₁₈-Silica (unpolar)',          'Wasser/MeCN oder MeOH-Gradient', 'Hydrophobizität; unpolare Analyte: längere Retentionszeit', 'Arzneimittel, Pestizide, Aminosäuren, Proteine, Vitamine, Pharmakokinetik'],
        ['HPLC (Normalphase)',    'NP-HPLC','Polar: Silica, NH₂, CN',        'Hexan/IPA oder EtOAc',           'Polarität; polar = stärker zurückgehalten',                 'Lipide, Fettsäuren, fettlösliche Vitamine, Steroide'],
        ['Ionenaustausch-Chrom.','IEC/IC', 'Ionenaustauschharz (Sulfonat/Quartär-Amin)', 'Pufferlösungen + Salz-Gradient', 'Ionenladung und -stärke',          'Ionen (Anionen/Kationen), Aminosäuren (Ninhydrin-Detektion), Proteine'],
        ['Größenausschlusschrom.','SEC/GPC','Poröses Gel (Dextran, Polyacrylamid)', 'Wässriger Puffer',          'Molekülgröße (zu groß = zuerst elu.)',                      'Molmassenbestimmung von Polymeren, Proteinen'],
        ['Affinitätschromato.',  'AC',     'Ligand (Antikörper, Enzym, Ni²⁺) an Matrix', 'Puffer → Elution durch Salzgradient/Kompetitor', 'Spezifische Bindung (Lock-and-Key)',              'Antikörperreinigung (ProteinA/G), His-Tag-Reinigung (Ni-NTA), Enzymreinigung'],
        ['Dünnschichtchromato.', 'DC/TLC', 'Kieselgel auf Al/Glas-Platte',   'Lösungsmittelgemisch',           'Polare, unpolare Analyte nach Polarität getrennt',          'Qualitätskontrolle, Reaktionsmonitoring, Drogen-Screening, Lebensmittelfarben'],
        ['Papierchromatographie','PC',     'Cellulosepapier',                 'Lösungsmittelgemisch',           'Polare/wasserähnliche Analyte',                            'Aminosäuren, Zucker, Pflanzenfarbstoffe (historisch/Schule)'],
      ],
      highlight: [0, 1, 3],
    })}

    <h3 class="lz-h3" style="margin-top:1.75rem;">Gaschromatographie (GC) — wichtige Grundlagen</h3>

    ${renderMerkboxGrid([
      {
        icon: 'fas fa-thermometer-half',
        title: 'Temperaturprogramm',
        text: `Isotherme Trennung: konstante Säulentemperatur → geeignet für engen Siedepunktbereich.
               Temperaturgradient: langsame Erwärmung von Starttemperatur auf Endtemperatur →
               bessere Trennung breiter Siedepunktbereiche; Standard in der Praxis.
               Typisch: 50°C (2 min) → 10°C/min → 280°C (5 min).
               Injektionstemperatur: ~20–30°C über höchstem Siedepunkt.`,
      },
      {
        icon: 'fas fa-adjust',
        title: 'Detektoren in der GC',
        text: `FID (Flammenionisationsdetektor): H₂/Luft-Flamme; ionisiert org. Verbindungen → Strom.
               Universell für organische Moleküle; sehr empfindlich; kein Wasser/CO₂-Signal.
               ECD (Elektroneneinfangdetektor): hoch empfindlich für halogenierte Verbindungen (Pestizide!); Ni-63-Radioqelle.
               MS (Massenspektrometer): GC-MS: universell + selektiv; Strukturinformation.
               TCD: universell, weniger empfindlich; für anorganische Gase (H₂, N₂, CO₂).`,
      },
      {
        icon: 'fas fa-chart-area',
        title: 'Retentionszeit und Van-Deemter-Gleichung',
        text: `Retentionszeit t_R: Zeit von Injektion bis Elution (substanzspezifisch bei konstanten Bedingungen).
               Kapazitätsfaktor k = (t_R − t_M)/t_M (t_M = Totzeit = unretardierter Peak).
               Trennzahl (Anzahl theoretischer Böden N): N = 16(t_R/W)² (W = Peakbreite Basis).
               Van-Deemter: H = A + B/u + C·u (H = Bodenäquivalent; u = Trägergas-Geschwindigkeit).`,
      },
    ])}

    <h3 class="lz-h3" style="margin-top:1.75rem;">HPLC — wichtige Grundlagen und Anwendungen</h3>

    ${renderTable({
      headers: ['HPLC-Parameter', 'Typische Werte / Optionen', 'Bedeutung'],
      rows: [
        ['Säulentyp (RP-HPLC)',  'C₁₈ (ODS), C₈, C₄ (Proteine), Phenyl, CN', 'C₁₈: unpolarstes; stark retardiert Hydrophobe; Phenyl: π-π-Interaktionen; C₄: Proteine'],
        ['Mobile Phase (RP)',    'Wasser + Acetonitril (MeCN) oder Methanol; pH 2–8 (pH 2: Säuren protoniert)', 'Gradient: Start polar (viel Wasser) → immer unpolarer (mehr org.) → kürzere Retention hydrophober Stoffe'],
        ['Detektor (UV)',        'UV/DAD: 200–400 nm; VIS: 400–800 nm', 'Einfach; universal; DAD: Spektrum jedes Peaks → Reinheitsprüfung'],
        ['Detektor (MS)',        'HPLC-ESI-MS/MS; LC-MS/MS', 'Selectivität + Empfindlichkeit; Spurenanalytik Arzneimittel, Pestizide, Metaboliten'],
        ['Detektor (FLD)',       'Fluoreszenz (λ_ex/λ_em variabel)', 'Höchste Empfindlichkeit für fluoreszierende Stoffe; weniger universal'],
        ['Peakfläche = Quantifizierung', 'Fläche ∝ Konzentration (bei linearem Bereich)', 'Externe Kalibrierung oder interner Standard; isokratisch oder gradient'],
      ],
    })}

    <h3 class="lz-h3" style="margin-top:1.75rem;">Ionenchromatographie (IC) — Anionen und Kationen</h3>
    <p class="lz-prose">
      Die <strong>Ionenchromatographie</strong> trennt und quantifiziert Ionen
      in wässrigen Lösungen. Sie ist Standard für die Bestimmung von Trinkwasser-Anionen
      (F⁻, Cl⁻, NO₂⁻, NO₃⁻, SO₄²⁻, PO₄³⁻).
    </p>

    ${renderFormulaBox({
      label:   'IC: Suppressor + Leitfähigkeitsdetektor',
      formula: 'Probe → Trennsäule → Suppressor (Unterdrückt Hintergrundsignal der Eluenten) → Leitfähigkeitsdetektor',
      desc:    'Suppressor: Anionenanalytik → Carbonat/Bicarbonat-Elution → Suppressor neutralisiert zu CO₂ + H₂O → Hintergrundleitfähigkeit sinkt → Anionen detektierbar · Auflösung: F⁻, Cl⁻, NO₂⁻, Br⁻, NO₃⁻, PO₄³⁻, SO₄²⁻ in ~20 min · Grenzwerte Trinkwasser: NO₃⁻: 50 mg/L; SO₄²⁻: 250 mg/L; F⁻: 1,5 mg/L',
    })}
  `; }

  // ══════════════════════════════════════════════════════════
  // 11.2.3 — Elektrochemische Methoden
  // ══════════════════════════════════════════════════════════
  _elektrochemisch() { return `
    ${renderSubhead('11.2.3 — Elektrochemische Analysemethoden')}

    <h2 class="lz-h2">Elektrochemische Analytik — Strom und Spannung messen</h2>
    <p class="lz-prose">
      Elektrochemische Methoden nutzen elektrische Größen (Potential, Strom, Ladung)
      zur Bestimmung von Analyten. Die wichtigsten Methoden sind
      Potentiometrie (Gleichgewichtspotential) und Voltammetrie/Polarographie
      (Strom-Spannungs-Beziehungen).
    </p>

    <h3 class="lz-h3">Potentiometrie — Gleichgewichtspotential messen</h3>

    ${renderFormulaBox({
      label:   'Nernst-Gleichung (Grundlage der Potentiometrie)',
      formula: 'E = E° + (RT/nF)·ln([Ox]/[Red]) = E° + (0,0592/n)·lg([Ox]/[Red])  (bei 25°C)',
      desc:    'E: gemessenes Potential · E°: Standardpotential · n: Anzahl übertragener e⁻ · F: Faraday-Konstante (96 485 C/mol) · [Ox]/[Red]: Konzentrationsquotient · Ausnahme: Feste Stoffe und reine Flüssigkeiten: Aktivität = 1',
    })}

    ${renderTable({
      headers: ['Elektrode', 'Typ', 'Reaktion', 'Anwendung', 'Nernst-Gleichung'],
      rows: [
        ['Glaselektrode (pH)', 'Ionenselektive E. für H⁺', 'H⁺-Austausch an Glasmembran (Na⁺ ↔ H⁺)', 'pH-Messung (0–14)', 'E = const. − 0,0592 · pH (Nernst-Faktor 59,2 mV/pH bei 25°C)'],
        ['Kalomel-Elektrode (KE)', 'Referenzelektrode (konstant)', 'Hg/Hg₂Cl₂/KCl (gesättigt): E = +0,244 V (vs. SHE)', 'Referenz für alle Messungen', '—'],
        ['Ag/AgCl-Elektrode', 'Referenzelektrode (mod.)', 'AgCl + e⁻ ⇌ Ag + Cl⁻', 'Referenz; einfacher als Kalomel (kein Hg)', 'E = 0,197 V (vs. SHE) bei KCl-Sättigung'],
        ['Ag⁺/Ag-Elektrode', 'Messindikatorelektrode', 'Ag⁺ + e⁻ ⇌ Ag', 'Argentometrie; Argentometrische Fällungstitrationen', 'E = 0,799 + 0,0592·lg[Ag⁺]'],
        ['Redoxelektrode (Pt)', 'Indikatorelektrode', 'Pt inert; nimmt Potential des Redoxpaares an', 'Redoxtitrationen (MnO₄⁻/Fe²⁺; I₂/I⁻)', 'E = E° + 0,0592/n · lg([Ox]/[Red])'],
        ['ISE (Ca²⁺-Elektrode)', 'Ionenselektive E. für Ca²⁺', 'Ca²⁺-selektive Membran (PVC + Ionophor)', 'Ca²⁺ in Blut (klinisch); Wasseranalyse', 'E = const. + (0,0592/2)·lg[Ca²⁺]'],
        ['ISE (NO₃⁻)', 'Ionenselektive E. für NO₃⁻', 'Quartäres Ammoniumsalz als Ionophor in Membran', 'Nitratbestimmung Boden/Wasser', 'E = const. − 0,0592·lg[NO₃⁻]'],
        ['Biosensor (z.B. Glucosesensor)', 'Enzym-Elektrode', 'Glucose + O₂ →(GOX) Gluconolacton + H₂O₂; H₂O₂ → O₂ + 2H⁺ + 2e⁻ (Pt-Elektrode)', 'Blutzuckermessung; 500 Mio. tägl. Messungen global', 'Strom ∝ [Glucose]'],
      ],
      highlight: [0, 7],
    })}

    <h3 class="lz-h3" style="margin-top:1.75rem;">Voltammetrie und Polarographie</h3>
    <p class="lz-prose">
      Bei der <strong>Voltammetrie</strong> wird ein kontrolliertes Spannungsprogramm
      an einer Arbeitselektrode angelegt und der fließende Strom gemessen.
      Der Halbstufenpotential E_½ identifiziert das Redoxsystem;
      der Stufenstrom (oder Peakstrom) ist der Konzentration proportional.
    </p>

    ${renderTable({
      headers: ['Methode', 'Elektrode', 'Spannungsprogramm', 'Besonderheit', 'Anwendung'],
      rows: [
        ['Polarographie (klassisch)', 'Tropfende Hg-Elektrode (DME)', 'Linearer Spannungsrampe', 'Hg: niedriger H₂-Überspannung; gute Reproduzierbarkeit; Hg-Entsorgung nötig', 'Schwermetalle: Pb²⁺, Cd²⁺, Zn²⁺, Cu²⁺ in mV/L-Bereich'],
        ['Differentielle Pulsvoltammetrie (DPV)', 'HMDE oder Hg-Film, GCE', 'Pulse überlagert linearem Scan', 'Sehr empfindlich (ppb); trennt benachbarte Redoxsysteme', 'Spurenanalytik Schwermetalle; Arzneimittel'],
        ['Striptingvoltammetrie (ASV)', 'Hängende Hg-Tropfen oder Bismuth-Film-E.', 'Anreicherung (Vorkonzentration) + Stripping-Puls', 'ppt-Empfindlichkeit durch Anreicherungsschritt', 'Ultra-Spurenanalytik: Pb, Cd, Zn in Seewasser, Blut'],
        ['Cyclische Voltammetrie (CV)', 'GCE, Pt, Hg', 'Dreiecksspannung hin und zurück', 'Qualitative Methode: Reversibilität von Redoxprozessen prüfen; E° bestimmen', 'Elektrodenkinetik; Untersuchung neuer Verbindungen; Batterieforschung'],
        ['Amperometrie', 'Feste Elektrode (Pt, GCE)', 'Festes Potential (EDEN für Analyt)', 'Strom = direktes Maß für Konzentration', 'Biosensoren (Glucose → H₂O₂ → 0,6 V Pt), O₂-Sensor (Clark-Elektrode)'],
        ['Coulometrie', 'Arbeitselektrode (Pt)', 'Vollständiger Umsatz bei festem Potential', 'Absolute Methode (Faraday-Gesetz: n = Q/zF); kein Standard nötig', 'Karl-Fischer-Titrationen (Wassergehalt); Referenzverfahren'],
      ],
      highlight: [2, 3, 4],
    })}

    ${renderInfobox({
      type: 'blue', icon: 'fas fa-heartbeat', title: 'Glucosesensor — Elektrochemie im Alltag',
      body: `<strong>Prinzip (amperometrisch):</strong><br>
             Glucose + O₂ →(Glucose-Oxidase, GOX) Gluconolacton + H₂O₂<br>
             H₂O₂ → O₂ + 2H⁺ + 2e⁻ (bei +0,6 V an Pt-Elektrode)<br>
             Strom I ∝ [Glucose] → Konzentration berechnet<br><br>
             <strong>Kontinuierliche Glucosemessung (CGM):</strong>
             Sensor unter der Haut (Interstitialflüssigkeit); ~14 Tage Lebensdauer.
             Glucose ↔ Blutzucker Korrelation ~5–10 min Verzögerung.
             isCGM, rtCGM → Closed-Loop-Systeme (künstliche Bauchspeicheldrüse → automatische Insulingabe).<br><br>
             Weltmarkt Diabetes-Monitoring: ~50 Mrd. $/Jahr.`,
    })}

    ${renderInfobox({
      type: 'success', icon: 'fas fa-graduation-cap', title: 'Zusammenfassung — Instrumentelle Analytik',
      body: `<strong>UV/VIS:</strong> Lambert-Beer A=ε·c·d · Chromophore (π→π*, n→π*) · Kalibrierkurve<br>
             <strong>IR:</strong> Schwingungsübergänge · Fingerprint 400–1500 cm⁻¹ · C=O: 1700–1750 · O–H: 3200–3550 (breit) · N–H: 3300–3500<br>
             <strong>NMR:</strong> δ [ppm] = chem. Verschiebung · Aromat. H: 6,5–8,0 · CHO: 9–11 · n+1-Regel · Integration ∝ Anzahl H<br>
             <strong>MS:</strong> m/z · M⁺• (EI) oder [M+H]⁺ (ESI) · Isotopenmuster (Cl: 3:1) · Hochauflösung → Summenformel<br>
             <strong>AAS:</strong> Elementspezifisch · Flammen-AAS (ppm) · Graphitofen-AAS (ppb) · Lambert-Beer-analog<br>
             <strong>GC:</strong> Flüchtige Verbindungen · FID/MS-Detektor · Retentionszeit<br>
             <strong>HPLC:</strong> RP-C₁₈ (unpolar: später elution) · UV/DAD/MS-Detektion · Gradient<br>
             <strong>pH-Glaselektrode:</strong> E = const. − 59,2 mV/pH · Potentiometrie<br>
             <strong>Glucosesensor:</strong> GOX + Pt-Elektrode (amperometrisch) · I ∝ [Glucose]`,
    })}
  `; }

  init() {
    i18n.init();
    initScrollReveal();
    initInteractive(document);
    initTabs();
  }
}