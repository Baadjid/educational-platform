// pages/projekte/lernzettel/faecher/chemie/themen/9/9-1.js
// Kapitel 9.1 — Allgemeine Grundlagen der organischen Chemie
// 9.1.1  Namen, Formeln und Strukturen
// 9.1.2  Elektronische Effekte in organischen Verbindungen
// 9.1.3  Der Isomeriebegriff
// 9.1.4  Reagenzien, Substrate, Reaktionen
// 9.1.5  Reaktionstypen in der organischen Chemie

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
  { key: '911', icon: 'fas fa-signature',     label: '9.1.1 Namen & Formeln'        },
  { key: '912', icon: 'fas fa-magnet',        label: '9.1.2 Elektronische Effekte'  },
  { key: '913', icon: 'fas fa-clone',         label: '9.1.3 Isomerie'               },
  { key: '914', icon: 'fas fa-flask',         label: '9.1.4 Reagenzien & Substrate' },
  { key: '915', icon: 'fas fa-exchange-alt',  label: '9.1.5 Reaktionstypen'         },
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
  return `<nav class="wim-tabs" role="tablist" id="tabs91">${nav}</nav>${panels}`;
}

function initTabs() {
  const nav = document.getElementById('tabs91');
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

export default class Chemie_9_1 {
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
          <i class="fas fa-chevron-right"></i><span>9.1</span>
        </div>
        <h1 class="lz-sub-title">Allgemeine Grundlagen<br><em>der organischen Chemie</em></h1>
        <p class="lz-sub-desc">
          IUPAC-Nomenklatur · Elektronische Effekte · Isomerie ·
          Reagenzien und Substrate · Reaktionstypen
        </p>
        ${renderTags(['Kap. 9.1', 'Organische Chemie', 'Nomenklatur', 'Isomerie', 'Reaktionstypen', 'LK Chemie BW'])}
      </div>
    </section>

    <section class="lz-content-section">
      <div class="lz-section-wrap">
        ${buildWimHTML(k => {
          if (k === '911') return this._namen();
          if (k === '912') return this._elektronisch();
          if (k === '913') return this._isomerie();
          if (k === '914') return this._reagenzien();
          if (k === '915') return this._reaktionstypen();
          return '';
        })}
      </div>
    </section>

    <section class="lz-content-section" style="padding:1.5rem 0 3rem;">
      <div class="lz-section-wrap">
        ${renderPageNav({
          prev: { label: '8.3 Komplexchemie',       link: `${BASE}/themen/8/8-3` },
          next: { label: '9.2 Aliphatische KW',     link: `${BASE}/themen/9/9-2` },
        }, BASE)}
      </div>
    </section>
    ${footerHTML(this.router)}
  `; }

  // ══════════════════════════════════════════════════════════
  // 9.1.1 — Namen, Formeln und Strukturen
  // ══════════════════════════════════════════════════════════
  _namen() { return `
    ${renderSubhead('9.1.1 — Namen, Formeln und Strukturen')}

    <h2 class="lz-h2">Das Kohlenstoffatom — Zentrum der organischen Chemie</h2>
    <p class="lz-prose">
      Die organische Chemie ist die Chemie der Kohlenstoffverbindungen.
      Kohlenstoff ist einzigartig: mit vier Valenzelektronen, mittlerer EN (2,5),
      kleinem Atomradius und der Fähigkeit, stabile C–C-Einfach-, Doppel-
      und Dreifachbindungen sowie Ringe zu bilden, ermöglicht er
      eine nahezu unbegrenzte Vielfalt von Molekülstrukturen.
      Es sind mehr organische Verbindungen bekannt (~10 Millionen)
      als anorganische (~1 Million).
    </p>

    ${renderTable({
      headers: ['Eigenschaft', 'Wert / Details', 'Bedeutung für Strukturvielfalt'],
      rows: [
        ['Valenzelektronen', '4 (ns²np²)', 'Kann 4 Bindungen eingehen → verzweigte Ketten, Ringe'],
        ['Hybridisierung',   'sp³ (109,5°), sp² (120°), sp (180°)', 'Tetraeder, planar, linear → viele Geometrien'],
        ['C–C-Bindungsenergie', 'C–C: 347 kJ/mol · C=C: 614 · C≡C: 839', 'Stabile Ketten und Ringe; homologe Reihen'],
        ['Elektronegativität', '2,5 (Pauling)', 'Kann polar oder unpolar binden; H (2,2): kaum polar'],
        ['Kettenbildung', 'Catenation: C–C–C–C … unbegrenzt', 'Einmalig im PSE: Si bildet nur Si₄ stabile Cluster'],
        ['Mehrfachbindungen', 'C=C, C=O, C≡C, C≡N', 'Funktionelle Gruppen, Reaktionszentren'],
      ],
      highlight: [0, 4],
    })}

    <h3 class="lz-h3" style="margin-top:1.75rem;">Schreibweisen organischer Verbindungen</h3>

    ${renderTable({
      headers: ['Schreibweise', 'Beispiel Butan C₄H₁₀', 'Vorteile', 'Nachteile / Anmerkung'],
      rows: [
        ['Molekülformel',           'C₄H₁₀',                        'Kompakt; Elementzusammensetzung', 'Keine Strukturinfo; Isomere nicht unterscheidbar'],
        ['Empirische Formel',       'C₂H₅ (= ½·C₄H₁₀)',             'Einfachstes Verhältnis',          'Kein Hinweis auf Molekülgröße'],
        ['Strukturformel (Lewis)',  'H₃C–CH₂–CH₂–CH₃',              'Alle Bindungen sichtbar',         'Platzaufwendig; FEP nicht immer gezeigt'],
        ['Skelettformel (Zickzack)','Liniensegmente; C an Knickpunkten, H implizit', 'Schnell; klar; Standard in LK', 'H-Atome müssen ergänzt werden'],
        ['Keilstrichformel',        'Keil = vor Ebene; Strichlinie = hinter Ebene', '3D-Darstellung; Stereochemie', 'Aufwendig; nur wenn nötig'],
        ['Halbstrukturformel',      'CH₃CH₂CH₂CH₃',                 'Kompromiss',                      'Nicht eindeutig bei Verzweigung'],
      ],
      highlight: [3],
    })}

    <h3 class="lz-h3" style="margin-top:1.75rem;">IUPAC-Nomenklatur — systematische Namen</h3>

    ${renderInfobox({
      type: '', icon: 'fas fa-list-ol', title: 'IUPAC-Regeln: Schritt für Schritt',
      body: `<strong>① Längste C-Kette</strong> finden → Grundname (Methan, Ethan, Propan, Butan …)<br>
             <strong>② Nummerierung</strong> so, dass Substituenten/funktionelle Gruppen die niedrigsten Nummern haben<br>
             <strong>③ Substituenten</strong> alphabetisch mit Lokant benennen (1-Methyl-, 2-Ethyl- …)<br>
             <strong>④ Funktionelle Gruppe</strong> als Suffix: -ol (Alkohol), -al (Aldehyd), -on (Keton), -säure (Carbonsäure), -amin<br>
             <strong>⑤ Mehrfachbindungen:</strong> -en (Doppelbindung), -in (Dreifachbindung) mit Lokant<br>
             <strong>⑥ Mehrere gleiche Substituenten:</strong> di-, tri-, tetra-`,
    })}

    ${renderTable({
      headers: ['IUPAC-Stammname', 'Kohlenstoffzahl', 'Molekülformel (Alkan)', 'Beispielname (Derivat)'],
      rows: [
        ['Methan',    '1', 'CH₄',    'Chlormethan (CH₃Cl); Methanol (CH₃OH)'],
        ['Ethan',     '2', 'C₂H₆',   '1,2-Dibromethan; Ethanol; Essigsäure (Ethansäure)'],
        ['Propan',    '3', 'C₃H₈',   '2-Propanol (Isopropanol); Propanon (Aceton)'],
        ['Butan',     '4', 'C₄H₁₀',  '1-Butanol; Butansäure (Buttersäure); 2-Methylpropan (Isobutan)'],
        ['Pentan',    '5', 'C₅H₁₂',  '1-Pentanol; 2-Methylbutan; Pentansäure'],
        ['Hexan',     '6', 'C₆H₁₄',  'Cyclohexan; 1-Hexen; Hexansäure'],
        ['Heptan',    '7', 'C₇H₁₆',  '1-Heptanol; 2-Heptanon'],
        ['Oktan',     '8', 'C₈H₁₈',  'Oktan (Benzin-Oktan-Zahl!); 1-Oktanol'],
        ['Nonan',     '9', 'C₉H₂₀',  '—'],
        ['Decan',    '10', 'C₁₀H₂₂', 'Dekansäure (Caprinsäure)'],
        ['Cyclohexan','6 (Ring)', 'C₆H₁₂', 'Cyclohexan → Cyclohexanol → Cyclohexanon → Adipinsäure (Nylon)'],
        ['Benzol',    '6 (arom.)','C₆H₆', 'Methylbenzol (Toluol); Chlorbenzol; Benzoesäure; Phenol'],
      ],
      highlight: [11],
    })}

    <h3 class="lz-h3" style="margin-top:1.75rem;">Funktionelle Gruppen — Überblick</h3>

    ${renderTable({
      headers: ['Klasse', 'Funktionelle Gruppe', 'Strukturmerkmal', 'Suffix / Präfix', 'Beispiel'],
      rows: [
        ['Alkan',         'C–H, C–C (keine funkt. Gruppe)', 'Nur sp³-C', '—', 'Methan, Hexan'],
        ['Alken',         'C=C (Doppelbindung)',             'sp²-C',      '-en',       'Ethen (Ethylen), Propen'],
        ['Alkin',         'C≡C (Dreifachbindung)',           'sp-C',       '-in',       'Ethin (Acetylen), Propin'],
        ['Halogenid',     'C–X (X = F, Cl, Br, I)',         'C–Halogen',  'Halogen(o)-/Fluor-/Chlor-', 'Chlormethan, Brombenzol'],
        ['Alkohol',       '–OH',                             'C–O–H',      '-ol',       'Ethanol, 2-Propanol'],
        ['Ether',         '–O– (R–O–R\')',                    'C–O–C',      'Ether, Oxy-','Diethylether, THF'],
        ['Aldehyd',       '–CHO (C=O an Kettenende)',         'Carbonyl terminal', '-al', 'Methanal (Formaldehyd), Ethanal'],
        ['Keton',         '–CO– (C=O innen)',                 'Carbonyl intern',  '-on',  'Propanon (Aceton), Cyclohexanon'],
        ['Carbonsäure',   '–COOH',                           'C(=O)–OH',   '-säure/-onsäure', 'Essigsäure, Benzoesäure'],
        ['Ester',         '–COO– (R–COO–R\')',                'C(=O)–O–C', '-säure-...-ester', 'Ethylacetat'],
        ['Amin',          '–NH₂ (prim.), –NHR, –NR₂',        'N–H',        '-amin / amino-', 'Methylamin, Anilin'],
        ['Amid',          '–CO–NH– (R–CO–NH₂ prim.)',         'C(=O)–N',    '-amid',     'Ethanamid; Nylon-Verknüpfung'],
        ['Nitril',        '–C≡N',                             'C≡N',        '-nitril / -carbonitril', 'Acetonitril, Benzonitril'],
        ['Sulfonsäure',   '–SO₃H',                           'C–SO₃H',     '-sulfonsäure', 'Benzolsulfonsäure'],
        ['Nitrogruppe',   '–NO₂',                            'C–NO₂',      'nitro-',    'Nitrobenzol, TNT'],
      ],
      highlight: [4, 6, 7, 8, 11],
    })}
  `; }

  // ══════════════════════════════════════════════════════════
  // 9.1.2 — Elektronische Effekte in organischen Verbindungen
  // ══════════════════════════════════════════════════════════
  _elektronisch() { return `
    ${renderSubhead('9.1.2 — Elektronische Effekte in organischen Verbindungen')}

    <h3 class="lz-h3">Induktiver Effekt (I-Effekt)</h3>
    <p class="lz-prose">
      Der <strong>induktive Effekt (I-Effekt)</strong> beschreibt die Verschiebung
      der Bindungselektronen entlang des σ-Bindungsgerüsts aufgrund
      von Elektronegativitätsunterschieden. Er ist entfernungsabhängig
      (nimmt mit jeder weiteren C–C-Bindung stark ab) und dauerhaft
      (im Gegensatz zum mesomeren Effekt, der auf π-Systeme beschränkt ist).
    </p>

    ${renderTable({
      headers: ['Effekttyp', 'Wirkung', 'Gruppen', 'Beispiele'],
      rows: [
        ['+I-Effekt', 'Elektronendonator: schiebt e⁻ in Richtung C-Kette → Kette wird elektronen­reicher', 'Alkylgruppen: –CH₃ > –C₂H₅ > … (Hyperkonjugation!) · Metall-C-Bindungen', 'Methylgruppe destabilisiert Carbanionen, stabilisiert Carbeniumionen: tert > sek > prim'],
        ['−I-Effekt', 'Elektronenakzeptor: zieht e⁻ aus der Kette → Kette ärmer an Elektronen', '–F, –Cl, –Br, –I · –OH, –OR · –NH₂ · –NO₂, –CN · –COOH · –SO₃H · –C=O', 'Cl in Chloressigsäure: pK_s=2,86 (stärker als Essigsäure 4,75)'],
      ],
      highlight: [0, 1],
    })}

    ${renderTable({
      headers: ['Verbindung', 'Substituent', 'I-Effekt', 'pK_s', 'Erklärung'],
      rows: [
        ['Essigsäure (CH₃COOH)',       '–CH₃',     '+I',  '4,75', 'CH₃ destabilisiert CH₃COO⁻ (mehr e⁻) → schwächere Säure'],
        ['Chloressigsäure (ClCH₂COOH)','–CH₂Cl',   '–I',  '2,86', 'Cl zieht e⁻ → stabilisiert ClCH₂COO⁻ → stärkere Säure'],
        ['Dichloressigsäure (Cl₂CHCOOH)','–CHCl₂',  '–I (×2)', '1,48', 'Zwei Cl: noch stärkere Säure'],
        ['Trichloressigsäure (Cl₃CCOOH)','–CCl₃',   '–I (×3)', '0,70', 'Drei Cl: fast so stark wie HCl'],
        ['Fluoracetessäure (FCH₂COOH)', '–CH₂F',    '–I (F > Cl)', '2,57', 'F hat stärksten –I-Effekt (höchste EN)'],
        ['Propionsäure (CH₃CH₂COOH)',   '–C₂H₅',    '+I',  '4,87', 'Etwas stärker als Essigsäure durch +I von Ethyl'],
      ],
      highlight: [0, 1, 3],
    })}

    <h3 class="lz-h3" style="margin-top:1.75rem;">Mesomerer Effekt (+M/−M-Effekt)</h3>
    <p class="lz-prose">
      Der <strong>mesomere Effekt (M-Effekt)</strong> oder <strong>Konjugationseffekt</strong>
      wirkt über π-Systeme (Doppelbindungen, freie Elektronenpaare) durch
      Konjugation und Resonanz. Er ist stärker als der induktive Effekt
      und reichweitenunabhängig (überträgt sich durch das gesamte konjugierte System).
    </p>

    ${renderTable({
      headers: ['Effekttyp', 'Mechanismus', 'Gruppen', 'Beispiel'],
      rows: [
        ['+M-Effekt', 'Gruppe spendet freies EP ins benachbarte π-System → erhöht e⁻-Dichte', '–OH, –OR, –NH₂, –NR₂, –Halogen (σ-Akzeptoren, aber +M!), –O⁻', 'Anilin: –NH₂ am Benzolring → +M → erhöhte e⁻-Dichte an ortho/para-Positionen → Aktivierung für SEAr'],
        ['−M-Effekt', 'Gruppe entzieht e⁻ aus π-System → senkt e⁻-Dichte', '–NO₂, –CN, –CHO, –COOH, –COOR, –SO₃H, –C=O', 'Nitrobenzol: –NO₂ → −M → erniedrigt e⁻-Dichte an ortho/para → Deaktivierung → SEAr nur an meta'],
      ],
      highlight: [0, 1],
    })}

    ${renderInfobox({
      type: 'blue', icon: 'fas fa-info-circle', title: 'Halogene — der Sonderfall: –I und +M gleichzeitig',
      body: `Halogene (F, Cl, Br, I) am Aromaten zeigen <em>beide</em> Effekte:<br>
             <strong>–I-Effekt:</strong> Halogene sind elektronegativer als C → ziehen σ-Elektronen ab<br>
             <strong>+M-Effekt:</strong> Halogen hat freie EP → spendet in π-System (Konjugation mit Ring)<br><br>
             Netto-Ergebnis: +M überwiegt den –I → Halogene sind insgesamt
             <strong>schwache +M-Donoren, aber –I-Akzeptoren</strong><br>
             → Aktivieren ortho/para-Positionen für SEAr (durch +M), aber schwächer als –OH oder –NH₂<br>
             → Senken die Reaktivität gegenüber Benzol (durch –I)`,
    })}

    <h3 class="lz-h3" style="margin-top:1.75rem;">Hyperkonjugation</h3>
    <p class="lz-prose">
      <strong>Hyperkonjugation</strong> ist die Wechselwirkung von besetzten
      σ-Bindungsorbitalen (C–H oder C–C) mit benachbarten leeren p-Orbitalen
      (z.B. in Carbeniumionen oder bei Doppelbindungen). Sie stabilisiert
      Carbeniumionen und erklärt den Stabilitätstrend:
    </p>

    ${renderFormulaBox({
      label:   'Stabilität von Carbeniumionen durch Hyperkonjugation',
      formula: 'tertiär > sekundär > primär > Methyl (CH₃⁺)',
      desc:    'Mehr Alkylgruppen = mehr C–H-σ-Bindungen die hyperkonjugieren können = mehr Stabilisierung · tert: 9 H möglich · sek: 6 H · prim: 3 H · CH₃⁺: 0 H',
    })}

    <h3 class="lz-h3" style="margin-top:1.75rem;">Bindungspolarität und Dipole</h3>

    ${renderTable({
      headers: ['Bindung', 'ΔEN (Pauling)', 'Dipolmoment δ [D]', 'Bedeutung für Reaktivität'],
      rows: [
        ['C–H',  '0,35', '~0,4', 'Schwach polar; C kaum elektrophil'],
        ['C–F',  '1,50', '~1,8', 'Stark polar; C elektrophil; F guter σ-Akzeptor, +M'],
        ['C–Cl', '0,61', '~1,9', 'Polar; C elektrophil; gutes Abgangsgruppe'],
        ['C–O',  '0,89', '~0,7', 'Polar; C elektrophil; O nukleophil'],
        ['C–N',  '0,49', '~0,4', 'Schwach polar; N nukleophil'],
        ['C=O',  '0,89', '~2,3', 'Stark polar; C stark elektrophil (Carbonylangriff)'],
        ['O–H',  '1,24', '~1,5', 'Stark polar; O–H in Säure; H-Brücken!'],
        ['N–H',  '0,84', '~1,3', 'Polar; N nukleophil; H-Brücken'],
      ],
      highlight: [5, 6],
    })}
  `; }

  // ══════════════════════════════════════════════════════════
  // 9.1.3 — Der Isomeriebegriff
  // ══════════════════════════════════════════════════════════
  _isomerie() { return `
    ${renderSubhead('9.1.3 — Der Isomeriebegriff')}

    <h3 class="lz-h3">Überblick: Isomerietypen</h3>
    <p class="lz-prose">
      <strong>Isomere</strong> sind Verbindungen mit gleicher Molekülformel,
      aber verschiedener Struktur oder räumlicher Anordnung.
      Sie können sehr unterschiedliche physikalische und chemische Eigenschaften haben.
    </p>

    ${renderTable({
      headers: ['Isomerieklasse', 'Unterschied', 'Ineinander umwandelbar durch…', 'Beispiel'],
      rows: [
        ['Konstitutionsisomerie\n(Strukturisomerie)', 'Verschiedene Konstitution (Bindungsreihenfolge)', 'Brechen und Knüpfen von Bindungen (chemische Reaktion)', 'Butanol C₄H₁₀O: 1-Butanol, 2-Butanol, 2-Methyl-1-propanol, 2-Methyl-2-propanol (tert-Butanol)'],
        ['Stereoisomerie', 'Gleiche Konstitution; verschiedene Raumanordnung', 'Rotation, Inversion (oder gar nicht)', 'Milchsäure: L- und D-Milchsäure'],
        ['Konformationsisomerie', 'Verschiedene Rotamere um C–C-Bindungen (schnell interkonvertierbar bei RT)', 'Rotation um σ-Bindung (keine Energie nötig)', 'Ethan: ekliptisch ↔ gestaffelt (ΔG = 12 kJ/mol)'],
        ['Konfigurationsisomerie', 'Verschiedene räumliche Anordnung; nicht durch Rotation ineinander überführbar', 'Bruch einer Bindung nötig', 'cis/trans-2-Buten; R/S-2-Brompropan'],
      ],
      highlight: [0, 1],
    })}

    <h3 class="lz-h3" style="margin-top:1.75rem;">Konstitutionsisomerie — Untertypen</h3>

    ${renderTable({
      headers: ['Untertyp', 'Beschreibung', 'Beispiel (Molekülformel C₄H₈O)'],
      rows: [
        ['Kettenisome­rie',     'Verschiedene Länge/Verzweigung der C-Kette',        'Butanal (C₄H₈O) vs. 2-Methylpropanal'],
        ['Stellungsiso­merie',  'Gleiche Gruppe, andere Position an der Kette',      '1-Butanol vs. 2-Butanol (C₄H₁₀O)'],
        ['Funktionsgruppenisomerie', 'Verschiedene funktionelle Gruppen', 'Butanal (Aldehyd) vs. Butanon (Keton); Essigsäure vs. Methylformiat (C₂H₄O₂)'],
        ['Tautomerie',          'Gleichgewicht zwischen zwei Strukturen; reversibel', 'Keto-Enol-Tautomerie: CH₃–CO–CH₃ ⇌ CH₂=C(OH)–CH₃ (Aceton/Propenol)'],
      ],
      highlight: [3],
    })}

    <h3 class="lz-h3" style="margin-top:1.75rem;">Stereoisomerie — geometrische (cis/trans) und optische Isomerie</h3>

    ${renderMerkboxGrid([
      {
        icon: 'fas fa-arrow-right',
        title: 'cis/trans-Isomerie (E/Z-Isomerie)',
        text: `Voraussetzung: eingeschränkte Drehbarkeit (C=C-Doppelbindung oder Ring).
               cis (Z): gleiche Gruppen auf der gleichen Seite.
               trans (E): gleiche Gruppen auf verschiedenen Seiten.
               E/Z-Nomenklatur (CIP-Regeln): Priorität nach Ordnungszahl → Z (zusammen), E (entgegen).
               Beispiel: cis-2-Buten (Sdp. 3,7°C) ≠ trans-2-Buten (Sdp. 0,9°C).`,
      },
      {
        icon: 'fas fa-dot-circle',
        title: 'Chiralität und sterisches Zentrum',
        text: `Ein C-Atom mit vier verschiedenen Substituenten heißt
               chirales Zentrum (asymmetrisches C, Stereozentrum, sp³).
               Chirale Moleküle sind nicht deckungsgleich mit ihrem Spiegelbild.
               Beispiel: 2-Brompropan (CH₃–CHBr–CH₃): C2 trägt H, Br, CH₃, CH₃ → NICHT chiral!
               2-Brombutanol: C2 trägt H, Br, CH₃, CH₂OH → chiral!`,
      },
      {
        icon: 'fas fa-mirror',
        title: 'Enantiomere und Diastereomere',
        text: `Enantiomere: Spiegelbildisomere; drehen Polarisationslicht gleich stark, aber entgegengesetzt (+x° und −x°). Chemisch identisch in achiraler Umgebung; verschieden in chiraler (z.B. Enzyme).
               Diastereomere: Stereoisomere, die keine Spiegelbilder sind; verschiedene physikalische Eigenschaften (Schmelzpunkt, Löslichkeit).`,
      },
      {
        icon: 'fas fa-tag',
        title: 'R/S-Nomenklatur (CIP-Regeln)',
        text: `CIP = Cahn-Ingold-Prelog.
               ① Priorität der 4 Substituenten nach Ordnungszahl Z (höher Z = höhere Priorität).
               ② Gruppe niedrigster Priorität (4) von sich weg drehen (hinten).
               ③ Pfeil 1→2→3: im Uhrzeigersinn = R (rectus); gegen Uhrzeigersinn = S (sinister).
               L/D-System (Kohlenhydrate, Aminosäuren): bezogen auf D/L-Glycerinaldehyd.`,
      },
    ])}

    ${renderTable({
      headers: ['Verbindung', 'Stereozentr.', 'max. Stereoisomere', 'tatsächliche Anzahl', 'Bemerkung'],
      rows: [
        ['2-Brompropan CH₃CHBrCH₃',      '0', '1',  '1',  'C2 hat 2× CH₃ → nicht chiral'],
        ['2-Bromobutanol CH₃CHBrCH₂OH',   '1', '2',  '2',  '(R)- und (S)-Enantiomere'],
        ['2,3-Dibrombutan CH₃CHBrCHBrCH₃','2', '4',  '3',  'Mesoform möglich! C2R,C3S = Mesoform (Spiegelebene)'],
        ['Weinsäure (2,3-DHBA)',            '2', '4',  '3',  'Mesoform: (2R,3S) = optisch inaktiv durch innere Symmetrie'],
        ['Glucose C₆H₁₂O₆',              '4', '16', '16', 'Alle 16 tatsächlich verschieden; D-Glucose ist eines'],
        ['Thalidomid (Contergan)',          '1', '2',  '2',  'R-Form: Schlafmittel; S-Form: teratogen! Racemat war in Markt'],
      ],
      highlight: [2, 3, 5],
    })}
  `; }

  // ══════════════════════════════════════════════════════════
  // 9.1.4 — Reagenzien, Substrate, Reaktionen
  // ══════════════════════════════════════════════════════════
  _reagenzien() { return `
    ${renderSubhead('9.1.4 — Reagenzien, Substrate, Reaktionen')}

    <h3 class="lz-h3">Grundbegriffe organischer Reaktionen</h3>

    ${renderTable({
      headers: ['Begriff', 'Definition', 'Erkennung / Hinweise'],
      rows: [
        ['Substrat',            'Das organische Ausgangsmolekül, das umgewandelt wird', 'Träger der funktionellen Gruppe; oft in größerem Überschuss'],
        ['Reagenz',             'Verbindung, die mit dem Substrat reagiert und die Reaktion herbeiführt', 'Oft anorganisch (H₂, Br₂, NaOH) oder klein organisch'],
        ['Intermediat',         'Kurzlebige Zwischenstufe; kein Isolationsmöglich bei Elementarreaktion', 'Carbeniumion, Carbanion, Radikal, Carbenkomplex'],
        ['Übergangszustand (TS)','Energiemaximum; nicht isolierbar; t½ < 10⁻¹³ s', 'Unterscheidet sich vom Intermediat (lokales Minimum)'],
        ['Reaktionsmechanismus','Gesamtheit aller Elementarschritte von Substrat zu Produkt', 'Mit Elektronen-Kurven-Pfeilen darstellbar'],
        ['Aktivierungsenergie', 'E_A = Differenz TS-Energie − Edukt-Energie', 'Bestimmt Reaktionsgeschwindigkeit (Arrhenius)'],
        ['Reaktionsenthalpie',  'ΔH_R = Produktenergie − Eduktenergie; negativ = exotherm', 'Bestimmt Gleichgewichtslage; unabhängig von E_A'],
      ],
      highlight: [4],
    })}

    <h3 class="lz-h3" style="margin-top:1.75rem;">Elektrophile, Nukleophile und Radikale</h3>

    ${renderCompare({
      titleA: 'Elektrophil (E⁺)',
      titleB: 'Nukleophil (Nu⁻ oder Nu:)',
      listA: [
        'Elektronenmangel — sucht e⁻-reiche Stellen',
        'Lewis-Säure (nimmt EP auf)',
        'Greift C-Atome mit e⁻-Dichte an',
        'Beispiele: H⁺, Br₂ (polarisiert), NO₂⁺, R⁺ (Carbeniumion), BF₃, AlCl₃, SO₃',
        'Angriff bevorzugt auf e⁻-reiche Stellen (Doppelbindungen, aromatische Ringe)',
        'Reaktionstyp: elektrophile Addition (AE), elektrophile Substitution (SEAr)',
      ],
      listB: [
        'Elektronenreichtum — sucht e⁻-arme Stellen',
        'Lewis-Base (gibt EP ab)',
        'Greift C-Atome mit e⁻-Mangel (δ+) an',
        'Beispiele: OH⁻, RO⁻, CN⁻, NH₃, H₂O, I⁻ (weiche Nu), RMgX, RLi',
        'Angriff bevorzugt auf elektrophile Zentren (C=O, C–Halogen, aktiviertes C)',
        'Reaktionstyp: nukleophile Substitution (SN1/SN2), nukleophile Addition (NAn)',
      ],
    })}

    ${renderTable({
      headers: ['Teilchen', 'Typ', 'Beschreibung', 'Entstehung', 'Reaktivität'],
      rows: [
        ['Carbeniumion R₃C⁺', 'Elektrophil', 'Positiv geladenes C; sp²-hybridisiert; leeres p-Orbital', 'Heterolytische Spaltung R–X → R⁺ + X⁻; Protonierung von Alkenen', 'Sehr reaktiv; reagiert mit Nu sehr schnell; stabilisiert durch +I und +M'],
        ['Carbanion R₃C⁻',    'Nukleophil',  'Negativ geladenes C; sp³; FEP am C', 'Metallalkyle (RLi, RMgX); Deprotonierung sehr acider CH-Verbindungen', 'Sehr reaktiv; starke Base; reagiert mit E als Kohlenstoff-Nu'],
        ['Radikal R₃C•',      'Radikal',     'Ungepaartes Elektron am C; sp²-ähnlich', 'Homolytische Spaltung durch Wärme, Licht, Peroxide', 'Sehr reaktiv; Kettenreaktionen; nicht geladen → unempfindlich für Polarität'],
        ['Carben :CR₂',       'Sonderfall',  'Neutrales C mit 2 ungepaarten e⁻', 'Photolyse/Thermolyse von Diazomethan, Ketenen', 'Extrem reaktiv; insertiert in C–H-Bindungen; Cyclopropanbildung'],
      ],
      highlight: [0, 2],
    })}

    <h3 class="lz-h3" style="margin-top:1.75rem;">Elektronen-Kurven-Pfeile — Mechanismus-Notation</h3>

    ${renderInfobox({
      type: '', icon: 'fas fa-long-arrow-alt-right', title: 'Konventionen der Elektronen-Kurven-Pfeile',
      body: `<strong>Gebogener Pfeil (→):</strong> Zeigt die Bewegung eines <em>Elektronenpaares</em>
             vom Donator zum Akzeptor. Der Pfeil zeigt immer <em>wohin die Elektronen gehen</em>,
             nicht wohin das Atom wandert.<br><br>
             <strong>Gebogener Haken-Pfeil (→ mit halbem Pfeil):</strong> Zeigt die Bewegung
             <em>eines einzelnen Elektrons</em> (Radikalreaktionen).<br><br>
             <strong>Goldene Regel:</strong> Pfeile beginnen immer an einem freien EP,
             einer π-Bindung oder einer σ-Bindung — nie am Atomkern oder am H-Atom direkt
             (außer H⁺-Übertragung).<br><br>
             <strong>Formale Ladungen:</strong> Nach jedem Schritt prüfen, ob Ladungserhalt.`,
    })}
  `; }

  // ══════════════════════════════════════════════════════════
  // 9.1.5 — Reaktionstypen in der organischen Chemie
  // ══════════════════════════════════════════════════════════
  _reaktionstypen() { return `
    ${renderSubhead('9.1.5 — Reaktionstypen in der organischen Chemie')}

    <h3 class="lz-h3">Klassifikation organischer Reaktionen</h3>

    ${renderTable({
      headers: ['Reaktionstyp', 'Abk.', 'Was passiert', 'Reaktionsbedingung (typisch)', 'Beispiel'],
      rows: [
        ['Substitution',            'S',   'Ein Atom/Gruppe wird gegen eine andere ausgetauscht', 'Reagenz mit geeigneter Abgangsgruppe', 'CH₃Br + OH⁻ → CH₃OH + Br⁻'],
        ['Addition',                'A',   'Zwei Moleküle vereinigen sich; Mehrfachbindung öffnet sich', 'Reagenz mit Mehrfachbindung im Substrat', 'CH₂=CH₂ + HBr → CH₃CH₂Br'],
        ['Eliminierung',            'E',   'Kleines Molekül wird abgespalten; Mehrfachbindung entsteht', 'Base/Säure; Wärme', 'CH₃CH₂Br + OH⁻ → CH₂=CH₂ + Br⁻ + H₂O'],
        ['Umlagerung',              'U',   'Strukturveränderung ohne Nettozu- oder -abnahme an Atomen', 'Wärme oder Säure/Base', 'Carbeniumion-Wagner-Meerwein; Dienylether-Cope-Umlagerung'],
        ['Oxidation',               'Ox',  'Oxidationszahl steigt (mehr O oder weniger H)', 'Oxidationsmittel (KMnO₄, CrO₃, O₃)', 'CH₃OH → HCHO → HCOOH (schrittweise)'],
        ['Reduktion',               'Red', 'Oxidationszahl sinkt (mehr H oder weniger O)', 'Reduktionsmittel (H₂/Pd, NaBH₄, LiAlH₄)', 'RCHO + H₂ → RCH₂OH; Keton → Alkohol'],
        ['Kondensation',            'K',   'Verbindung zweier Moleküle unter Abspaltung kleiner Mol. (H₂O, ROH)', 'Säure-/Basekatalyse', 'Aldolkondensation; Esterbildung (H₂O abg.)'],
        ['Polymerisation',          'P',   'Viele gleiche oder verschiedene Monomere → Makromolekül', 'Radikale, Ionen oder Koordination', 'n CH₂=CH₂ → (–CH₂–CH₂–)ₙ (Polyethylen)'],
        ['Cycloaddition',           'CA',  'Zwei Moleküle bilden einen Ring durch pericyclische Reaktion', 'Wärme oder Licht; keine Katalysatoren nötig', 'Diels-Alder: Dien + Dienophil → Cyclohexen'],
        ['Pericyclische Reaktion',  'PC',  'Konzertierter Mechanismus über zyklischen TS; keine Ionen/Radikale', 'Thermisch oder photochemisch (Woodward-Hoffmann)', 'Elektrocycl., [4+2], sigmatrope Umlagerung'],
      ],
      highlight: [0, 1, 2, 8],
    })}

    <h3 class="lz-h3" style="margin-top:1.75rem;">Subtypen der Substitution</h3>

    ${renderTable({
      headers: ['Reaktionstyp', 'Abk.', 'Mechanismus', 'Charakteristika', 'Beispiel'],
      rows: [
        ['Nukleophile Substitution (unimolekular)', 'SN1', 'Zweistufig: Bildung Carbeniumion → Angriff Nu', 'Racemisierung; tert. > sek. >> prim.; polare aprotische LM', '(CH₃)₃CBr + H₂O → (CH₃)₃COH (Racemisat)'],
        ['Nukleophile Substitution (bimolekular)', 'SN2', 'Einstufig: Nu greift von hinten an; Walden-Umkehr', 'Inversion; prim. > sek. >> tert.; polare aprotische LM', 'CH₃Br + OH⁻ → CH₃OH + Br⁻ (Inversion)'],
        ['Elektrophile Substitution am Aromaten', 'SEAr', 'σ-Komplex (Arenium-Ion) → Proton verloren', 'Aromatizität bleibt erhalten; E⁺ greift an', 'C₆H₆ + HNO₃/H₂SO₄ → C₆H₅NO₂ + H₂O'],
        ['Radikalische Substitution', 'SR', 'Kettenreaktion: Initiation, Propagation, Termination', 'Regio-unselektiv; Radikale; oft Licht/Peroxide', 'CH₄ + Cl₂ → CH₃Cl + HCl (UV-Licht)'],
      ],
      highlight: [0, 1, 2],
    })}

    <h3 class="lz-h3" style="margin-top:1.75rem;">Subtypen der Addition</h3>

    ${renderTable({
      headers: ['Reaktionstyp', 'Abk.', 'Mechanismus', 'Markovnikov?', 'Beispiel'],
      rows: [
        ['Elektrophile Addition',  'AE',  'E⁺ greift π-System an → Carbeniumion → Nu-Angriff', 'Ja (MRK: H an das C mit mehr H)', 'CH₂=CH₂ + HBr → CH₃CH₂Br · Propylenbromierung: 2-Brompropan'],
        ['Radikalische Addition',  'AR',  'Radikale greifen Doppelbindung an', 'Anti-Markovnikov! (Peroxide: HBr gibt Anti-MRK)', 'HBr + Peroxide + Alken → Br an weniger substitutiertes C'],
        ['Nukleophile Addition',   'AN',  'Nu greift elektrophiles C an (C=O, C=N)', 'Nicht anwendbar (keine HX)', 'H₂O + Aldehyd → Halbacetal; NaBH₄ + Keton → Alkohol'],
        ['syn-Addition (suprafacial)','—', 'Beide Atome treten von der gleichen Seite an', 'Ja (für syn-Produkt)', 'H₂/Pd + Alken → Alkan (H₂ von oben und unten, syn)'],
        ['anti-Addition',          '—',   'Atome treten von entgegengesetzter Seite', '—', 'Br₂ + Cycloalken → trans-Dibromid (anti)'],
      ],
      highlight: [0, 2],
    })}

    ${renderAccordion([
      {
        title: 'Markovnikov-Regel und ihre Erklärung',
        content: `<p class="lz-prose"><strong>Markovnikov-Regel (1869):</strong>
                  Bei Addition von HX an eine unsymmetrische Doppelbindung
                  geht H an das C-Atom, das <em>bereits mehr H-Atome</em> trägt —
                  und X an das C-Atom mit weniger H-Atomen.</p>
                  <p class="lz-prose"><strong>Mechanismus:</strong>
                  H⁺ addiert zuerst → es entsteht das stabilere Carbeniumion
                  (tertiär > sekundär > primär durch +I-Effekt/Hyperkonjugation).<br>
                  Dann greift X⁻ am Carbeniumion an → Markovnikov-Produkt.<br><br>
                  Propan + HBr:<br>
                  H⁺ an C1 → primäres C2⁺ (instabil) → 1-Brompropan (NICHT Markovnikov)<br>
                  H⁺ an C1 → sekundäres C2⁺ → WARTE: H⁺ addiert an C1 → C2⁺ (sekundär, stabiler) → 2-Brompropan ✓</p>`,
      },
      {
        title: 'Eliminierung — E1 vs. E2',
        content: `${renderTable({
          headers: ['Merkmal', 'E1 (unimolekular)', 'E2 (bimolekular)'],
          rows: [
            ['Mechanismus', 'Zweistufig: C⁺-Ion → Base entnimmt H', 'Einstufig: Base und Abgangsgruppe gleichzeitig'],
            ['Kinetik', 'v = k·[Substrat]', 'v = k·[Substrat]·[Base]'],
            ['Stereochemie', 'Syn und Anti möglich (über Carbeniumion)', 'Anti-periplanar (H und LG auf entgegengesetzten Seiten)'],
            ['Konkurrenz', 'Konkurriert mit SN1', 'Konkurriert mit SN2'],
            ['Bevorzugt bei', 'Tert. Substraten; schwache Basen; hohe T', 'Prim./sek. Substraten; starke Basen; niedrigere T'],
            ['Saytzeff-Regel', 'Ja (stabilstes Alken bevorzugt)', 'Ja (meist; Ausnahme: Hofmann-Eliminierung mit RNR₃⁺)'],
          ],
        })}`,
      },
    ])}

    ${renderInfobox({
      type: 'success', icon: 'fas fa-graduation-cap', title: 'Zusammenfassung — Organische Grundlagen',
      body: `<strong>C-Besonderheiten:</strong> 4 Bindungen · Ketten/Ringe · sp³/sp²/sp<br>
             <strong>I-Effekt:</strong> über σ-Kette · +I (Alkyl) vs. −I (Halogene, O, N-Gruppen)<br>
             <strong>M-Effekt:</strong> über π-System · +M (OH, NH₂, Hal) vs. −M (NO₂, CN, C=O)<br>
             <strong>Isomerie:</strong> Konstitution vs. Stereo · cis/trans · R/S (CIP) · Enantiomere/Diastereomere<br>
             <strong>Reaktive Teilchen:</strong> Elektrophil (e⁻-arm) · Nukleophil (e⁻-reich) · Radikal<br>
             <strong>Reaktionstypen:</strong> S (SN1/SN2/SEAr/SR) · A (AE/AR/AN) · E (E1/E2) · Oxidation/Reduktion<br>
             <strong>Markovnikov:</strong> H an das H-reichere C (stabileres Carbeniumion als Zwischenstufe)`,
    })}
  `; }

  init() {
    i18n.init();
    initScrollReveal();
    initInteractive(document);
    initTabs();
  }
}