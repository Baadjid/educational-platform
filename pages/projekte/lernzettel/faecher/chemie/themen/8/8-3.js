// pages/projekte/lernzettel/faecher/chemie/themen/8/8-3.js
// Kapitel 8.3 — Komplexchemie
// 8.3.1  Aufbau und Nomenklatur von Komplexen
// 8.3.2  Struktur und Eigenschaften von Komplexen
// 8.3.3  Stabilität von Komplexverbindungen
// 8.3.4  Darstellung und Bedeutung von Komplexen
// 8.3.5  Komplexometrie

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
  { key: '831', icon: 'fas fa-atom',          label: '8.3.1 Aufbau & Nomenklatur'   },
  { key: '832', icon: 'fas fa-shapes',        label: '8.3.2 Struktur & Eigenschaften'},
  { key: '833', icon: 'fas fa-shield-alt',    label: '8.3.3 Stabilität'             },
  { key: '834', icon: 'fas fa-industry',      label: '8.3.4 Darstellung & Bedeutung'},
  { key: '835', icon: 'fas fa-vial',          label: '8.3.5 Komplexometrie'         },
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
  return `<nav class="wim-tabs" role="tablist" id="tabs83">${nav}</nav>${panels}`;
}

function initTabs() {
  const nav = document.getElementById('tabs83');
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

export default class Chemie_8_3 {
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
          <i class="fas fa-chevron-right"></i><span>Kapitel 8</span>
          <i class="fas fa-chevron-right"></i><span>8.3</span>
        </div>
        <h1 class="lz-sub-title">Komplexchemie<br><em>Aufbau, Eigenschaften und Anwendungen</em></h1>
        <p class="lz-sub-desc">
          Liganden · Koordinationszahl · Nomenklatur · Ligandenfeld ·
          Isomerie · Chelate · EDTA · Komplexometrie
        </p>
        ${renderTags(['Kap. 8.3', 'Komplexchemie', 'Liganden', 'EDTA', 'Koordinationschemie', 'LK Chemie BW'])}
      </div>
    </section>

    <section class="lz-content-section">
      <div class="lz-section-wrap">
        ${buildWimHTML(k => {
          if (k === '831') return this._aufbau();
          if (k === '832') return this._struktur();
          if (k === '833') return this._stabilitaet();
          if (k === '834') return this._bedeutung();
          if (k === '835') return this._komplexometrie();
          return '';
        })}
      </div>
    </section>

    <section class="lz-content-section" style="padding:1.5rem 0 3rem;">
      <div class="lz-section-wrap">
        ${renderPageNav({
          prev: { label: '8.2 Nebengruppenelemente',    link: `${BASE}/themen/8/8-2` },
          next: { label: '9.1 Grundlagen organische Chemie', link: `${BASE}/themen/9/9-1` },
        }, BASE)}
      </div>
    </section>
    ${footerHTML(this.router)}
  `; }

  // ══════════════════════════════════════════════════════════
  // 8.3.1 — Aufbau und Nomenklatur von Komplexen
  // ══════════════════════════════════════════════════════════
  _aufbau() { return `
    ${renderSubhead('8.3.1 — Aufbau und Nomenklatur von Komplexen')}

    <h2 class="lz-h2">Was ist ein Komplex?</h2>
    <p class="lz-prose">
      Ein <strong>Koordinationskomplex</strong> (Komplex) besteht aus einem
      zentralen Metall-Atom oder -Ion (<strong>Zentralteilchen</strong>), das von
      mehreren Molekülen oder Ionen (<strong>Liganden</strong>) über
      koordinative Bindungen umgeben ist.
      Die Koordinationsverbindung wurde systematisch von Alfred Werner (1893) beschrieben,
      wofür er 1913 den Nobelpreis erhielt.
      Im Lewis-Säure-Base-Konzept sind alle Liganden Lewis-Basen (EP-Donatoren)
      und das Zentralteilchen ist eine Lewis-Säure (EP-Akzeptor).
    </p>

    ${renderMerkboxGrid([
      {
        icon: 'fas fa-dot-circle',
        title: 'Zentralteilchen (ZT)',
        text: `Meist ein Übergangsmetall-Kation (Fe³⁺, Co³⁺, Cu²⁺, Pt²⁺ …)
               oder seltener ein Hauptgruppenmetall (Al³⁺, Si⁴⁺) oder Nichtmetall.
               Muss leere oder niedrig besetzte Orbitale haben (Lewis-Säure).
               Bestimmt: Koordinationszahl, Geometrie, Farbe, Magnetismus.`,
      },
      {
        icon: 'fas fa-link',
        title: 'Ligand (L)',
        text: `Molekül oder Ion mit freiem Elektronenpaar → Lewis-Base.
               Einzähnig (monodentate): 1 Bindungsstelle (Cl⁻, NH₃, H₂O, CN⁻, CO)
               Zweizähnig (bidentate): 2 Bindungsstellen (Ethylendiamin en, C₂O₄²⁻ Oxalat)
               Sechszähnig (hexadentate): 6 Bindungsstellen (EDTA⁴⁻)`,
      },
      {
        icon: 'fas fa-hashtag',
        title: 'Koordinationszahl (KZ)',
        text: `Anzahl der Liganden-Bindungsstellen (Donoratome) am ZT.
               KZ 2: linear (z.B. [Ag(NH₃)₂]⁺)
               KZ 4: tetraedrisch oder quadratisch-planar
               KZ 6: oktaedrisch (häufigste; Co³⁺, Fe³⁺, Cr³⁺, Pt⁴⁺)
               KZ bestimmt die Geometrie des Komplexes.`,
      },
      {
        icon: 'fas fa-box',
        title: 'Koordinationssphäre',
        text: `Die innere Koordinationssphäre: ZT + Liganden → im Komplex-Symbol in [  ] eingeschlossen.
               Die äußere Sphäre: Gegenionen (Ionencharakter).
               Beispiel: [Co(NH₃)₆]Cl₃ → [Co(NH₃)₆]³⁺ (innere Sphäre) + 3 Cl⁻ (äußere Sphäre).`,
      },
    ])}

    <h3 class="lz-h3" style="margin-top:1.75rem;">Wichtige Liganden und ihre Bezeichnungen</h3>

    ${renderTable({
      headers: ['Ligand (frei)', 'Ligandname (im Komplex)', 'Donoratoram', 'Zähnigkeit', 'Beispiel im Komplex'],
      rows: [
        ['H₂O',             'aqua',          'O',    'monodentate', '[Fe(H₂O)₆]³⁺ (Hexaaquaeisen(III))'],
        ['NH₃',             'ammin',         'N',    'monodentate', '[Cu(NH₃)₄]²⁺ (Tetraamminkupfer(II))'],
        ['Cl⁻',             'chlorido',      'Cl',   'monodentate', '[PtCl₄]²⁻ (Tetrachloridoplatin(II))'],
        ['CN⁻',             'cyanido',       'C',    'monodentate', '[Fe(CN)₆]⁴⁻ (Hexacyanidoferrat(II))'],
        ['CO',              'carbonyl',      'C',    'monodentate', '[Ni(CO)₄] (Tetracarbonylnickel(0))'],
        ['OH⁻',             'hydroxido',     'O',    'monodentate', '[Al(OH)₄]⁻ (Tetrahydroxidoaluminat)'],
        ['NO₂⁻',            'nitrito (via N: nitro, via O: nitrito)', 'N oder O', 'monodentate', '[Co(NO₂)₆]³⁻'],
        ['SCN⁻',            'thiocyanato (via S: thiocyanato, via N: isothiocyanato)', 'S oder N', 'monodentate', '[Fe(SCN)]²⁺ (blutrot!)'],
        ['NH₂CH₂CH₂NH₂ (en)', 'ethylendiamin / 1,2-ethandiamin', 'N,N', 'bidentate', '[Co(en)₃]³⁺'],
        ['C₂O₄²⁻ (Oxalat)', 'oxalato',       'O,O',  'bidentate',  '[Fe(C₂O₄)₃]³⁻'],
        ['2,2\'-Bipyridin (bipy)', 'bipyridyl', 'N,N', 'bidentate',  '[Ru(bipy)₃]²⁺ (Photosensibilisator)'],
        ['Acetylacetonat acac⁻', 'acetylacetonato', 'O,O', 'bidentate', '[Cu(acac)₂]'],
        ['EDTA⁴⁻',          'ethylendiamintetraacetato', 'N,N,O,O,O,O', 'hexadentate (6-zähnig)', '[Fe(EDTA)]⁻'],
        ['Porphyrin',       'porphyrinato', 'N,N,N,N', 'tetradentate', 'Hämoglobin (Fe), Chlorophyll (Mg)'],
      ],
      highlight: [0, 1, 8, 12],
    })}

    <h3 class="lz-h3" style="margin-top:1.75rem;">Nomenklatur nach IUPAC</h3>

    ${renderInfobox({
      type: '', icon: 'fas fa-list-ol', title: 'IUPAC-Nomenklatur für Komplexe — Regeln',
      body: `<strong>① Kation vor Anion</strong> (wie bei Salzen)<br>
             <strong>② Innere Sphäre: Liganden alphabetisch, dann Zentralatom</strong><br>
             Reihenfolge: Liganden (alphabetisch nach Ligandname) + Zentralatom (mit OZ in röm. Ziffern)<br>
             <strong>③ Liganden-Präfixe:</strong> di-, tri-, tetra-, penta-, hexa- (bei einfachen Liganden)<br>
             bis-, tris-, tetrakis-, … (bei mehrsilbigen Liganden und Chelaten)<br>
             <strong>④ Anionische Liganden enden auf -o</strong> (chlorido, cyanido, hydroxido)<br>
             <strong>⑤ Anionische Komplexe enden auf -at</strong> ([Fe(CN)₆]⁴⁻ = Hexacyanidoferrat(II)-Ion)<br>
             <strong>⑥ Kationische/neutrale Komplexe:</strong> normale Elementnamen`,
    })}

    ${renderTable({
      headers: ['Formel', 'IUPAC-Name', 'ZT', 'OZ', 'KZ', 'Geometrie'],
      rows: [
        ['[Fe(H₂O)₆]³⁺',     'Hexaaquaeisen(III)-Ion',                   'Fe',  '+3', '6', 'Oktaedrisch'],
        ['[Cu(NH₃)₄]²⁺',     'Tetraamminkupfer(II)-Ion',                  'Cu',  '+2', '4', 'Quadratisch-planar'],
        ['[Ag(NH₃)₂]⁺',      'Diamminesilber(I)-Ion',                     'Ag',  '+1', '2', 'Linear'],
        ['[Fe(CN)₆]⁴⁻',      'Hexacyanidoferrat(II)-Ion',                 'Fe',  '+2', '6', 'Oktaedrisch'],
        ['[Fe(CN)₆]³⁻',      'Hexacyanidoferrat(III)-Ion',                'Fe',  '+3', '6', 'Oktaedrisch'],
        ['[PtCl₄]²⁻',        'Tetrachloridoplatinat(II)-Ion',             'Pt',  '+2', '4', 'Quadratisch-planar'],
        ['[Pt(NH₃)₂Cl₂]',    'Diammindichlorioplatin(II)',                 'Pt',  '+2', '4', 'Quadratisch-planar'],
        ['[Co(NH₃)₆]Cl₃',    'Hexaamminecobalt(III)-chlorid',             'Co',  '+3', '6', 'Oktaedrisch'],
        ['[Co(en)₃]³⁺',      'Tris(ethylendiamin)cobalt(III)-Ion',        'Co',  '+3', '6', 'Oktaedrisch'],
        ['[Cr(NH₃)₃Cl₃]',    'Triammintrichloridochrom(III)',              'Cr',  '+3', '6', 'Oktaedrisch'],
        ['K₂[PtCl₄]',        'Kaliumtetrachloridoplatinat(II)',            'Pt',  '+2', '4', 'Quadratisch-planar (Außen: K⁺)'],
        ['[Fe(EDTA)]⁻',       'Ethylendiamintetraacetatoferrat(III)-Ion',  'Fe',  '+3', '6', 'Oktaedrisch (EDTA 6-zähnig)'],
        ['Ni(CO)₄',           'Tetracarbonylnickel(0)',                     'Ni',  '0',  '4', 'Tetraedrisch'],
        ['[Zn(OH)₄]²⁻',      'Tetrahydroxidozinkat(II)-Ion',              'Zn',  '+2', '4', 'Tetraedrisch'],
      ],
      highlight: [0, 6, 12],
    })}
  `; }

  // ══════════════════════════════════════════════════════════
  // 8.3.2 — Struktur und Eigenschaften von Komplexen
  // ══════════════════════════════════════════════════════════
  _struktur() { return `
    ${renderSubhead('8.3.2 — Struktur und Eigenschaften von Komplexen')}

    <h3 class="lz-h3">Geometrien von Komplexen</h3>

    ${renderTable({
      headers: ['Koordinationszahl', 'Geometrie', 'Beispiele', 'Häufige Zentralteilchen', 'Bindungswinkel'],
      rows: [
        ['2', 'Linear',                    '[Ag(NH₃)₂]⁺, [AuCl₂]⁻, [Cu(CN)₂]⁻, [Hg(CN)₂]',            'Ag⁺, Au⁺, Cu⁺, Hg²⁺ (d¹⁰)', '180°'],
        ['3', 'Trigonal-planar (selten)',   '[HgI₃]⁻, [Cu(CN)₃]²⁻',                                       'selten; meist größere KZ bevorzugt', '120°'],
        ['4', 'Tetraedrisch',              '[ZnCl₄]²⁻, [CoCl₄]²⁻, Ni(CO)₄, [CuCl₄]²⁻ (verzerrt)',     'Zn²⁺, Co²⁺ (high-spin d⁷), Ni(0), Cu²⁺', '109,5°'],
        ['4', 'Quadratisch-planar',        '[PtCl₄]²⁻, [Pt(NH₃)₂Cl₂], [Cu(NH₃)₄]²⁺, [AuCl₄]⁻',       'Pt²⁺, Pd²⁺, Au³⁺, Cu²⁺, Ni²⁺ (d⁸)', '90°'],
        ['5', 'Trigonal-bipyramidal',      '[Fe(CO)₅], [CuCl₅]³⁻',                                        'Fe(0), Cu²⁺',                 '90°/120°'],
        ['5', 'Quadratische Pyramide',     '[VO(acac)₂], [Ni(CN)₅]³⁻',                                    'V⁴⁺, Ni²⁺',                   '~90°'],
        ['6', 'Oktaedrisch (häufigste!)',   '[Fe(H₂O)₆]³⁺, [Co(NH₃)₆]³⁺, [Cr(en)₃]³⁺, [Fe(CN)₆]³⁻',  'fast alle Übergangsmetall-Kationen', '90°'],
        ['8', 'Würfel (selten)',            '[Mo(CN)₈]⁴⁻, [TaF₈]³⁻',                                      'frühe Übergangsmetalle, große Ionen', '—'],
      ],
      highlight: [3, 6],
    })}

    <h3 class="lz-h3" style="margin-top:1.75rem;">Isomerie bei Komplexen</h3>
    <p class="lz-prose">
      Komplexe können in verschiedenen isomeren Formen vorliegen — gleiche Zusammensetzung,
      verschiedene Struktur → verschiedene Eigenschaften.
    </p>

    ${renderAccordion([
      {
        title: 'cis-/trans-Isomerie (geometrische Isomerie)',
        content: `<p class="lz-prose">Bei oktaedrischen und quadratisch-planaren Komplexen mit
                  mindestens zwei verschiedenen Ligandentypen existieren cis- und trans-Isomere:</p>
                  <p class="lz-prose"><strong>[Pt(NH₃)₂Cl₂] — Cisplatin vs. Transplatin:</strong><br>
                  cis-[Pt(NH₃)₂Cl₂] (<strong>Cisplatin</strong>): beide Cl⁻ nebeneinander (90°) →
                  bindet an DNA-Guanin-Basen intrastrang → kreuzt DNA → Zellzyklusarrest → Krebstherapie (Nobel-Preis 1965)<br>
                  trans-[Pt(NH₃)₂Cl₂] (<strong>Transplatin</strong>): beide Cl⁻ gegenüber (180°) →
                  inaktiv als Zytostatikum; DNA-Schädigung anders → nicht klinisch verwendet</p>
                  <p class="lz-prose"><strong>Im Oktaeder:</strong>
                  [Co(NH₃)₄Cl₂]⁺ hat zwei Isomere:
                  cis (beide Cl benachbart; violett) und trans (beide Cl gegenüber; grün).
                  Farb- und Aktivitätsunterschiede entstehen durch verschiedene Ligandenfeld-Geometrie.</p>`,
      },
      {
        title: 'Ionisationsisomerie und Bindungsisomerie',
        content: `<p class="lz-prose"><strong>Ionisationsisomerie:</strong>
                  gleiche Summenformel; aber verschiedene Ionen in innerer vs. äußerer Sphäre.</p>
                  <p class="lz-prose">
                  [Co(NH₃)₅Cl]SO₄ · SO₄²⁻ außen (fällt mit Ba²⁺ aus)<br>
                  [Co(NH₃)₅(SO₄)]Cl · Cl⁻ außen (fällt mit Ag⁺ aus)</p>
                  <p class="lz-prose"><strong>Bindungsisomerie (Verknüpfungsisomerie):</strong>
                  Ein Ligand kann über verschiedene Atome binden (ambidente Liganden).</p>
                  <p class="lz-prose">
                  Nitrito (über O): [Co(NH₃)₅(ONO)]²⁺ → rot (instabil)<br>
                  Nitro (über N): [Co(NH₃)₅(NO₂)]²⁺ → gelb (stabiler)<br>
                  SCN⁻: über S (thiocyanato) oder über N (isothiocyanato)</p>`,
      },
      {
        title: 'Optische Isomerie (Chiralität) bei Komplexen',
        content: `<p class="lz-prose">Oktaedrische Komplexe mit drei gleichartigen
                  zweizähnigen Liganden (wie [Co(en)₃]³⁺) sind chiral —
                  sie existieren als nicht-überlagerbares Spiegelbild:</p>
                  <p class="lz-prose">Δ-[Co(en)₃]³⁺ (Delta, rechtsdrehend) und
                  Λ-[Co(en)₃]³⁺ (Lambda, linksdrehend) — beide optisch aktiv.<br>
                  Sie drehen die Polarisationsebene von linear polarisiertem Licht.<br>
                  In Lösung racemisieren sie langsam.<br><br>
                  <strong>Biologische Bedeutung:</strong>
                  Viele biologisch aktive Metallkomplexe sind chiral:
                  Cobalamin (Vitamin B₁₂), Cisplatin-Derivate, natürliche Enzyme.</p>`,
      },
    ])}

    <h3 class="lz-h3" style="margin-top:1.75rem;">Ligandenfeldtheorie — Farbe und Magnetismus</h3>
    <p class="lz-prose">
      In einem oktaedrischen Ligandenfeld werden die fünf entarteten d-Orbitale
      in zwei Gruppen aufgespalten: die energetisch höheren <strong>e_g-Orbitale</strong>
      (d_z², d_x²-y²; zeigen auf Liganden) und die niedrigeren
      <strong>t₂g-Orbitale</strong> (d_xy, d_xz, d_yz; zeigen zwischen Liganden).
      Die Aufspaltungsenergie ist <strong>Δ_o</strong> (oktaedrisch).
    </p>

    ${renderTable({
      headers: ['d-Konfiguration', 'High-Spin (schwacher Ligand)', 'Low-Spin (starker Ligand)', 'Beispiele'],
      rows: [
        ['d⁰', '—', '—', 'Ti⁴⁺, Sc³⁺ (farblos, diamagn.)'],
        ['d¹', 't₂g¹ (1 ungepaart)', 't₂g¹ (kein Unterschied)', 'Ti³⁺ (violett)'],
        ['d²', 't₂g² (2 ungepaart)', 't₂g² (kein Unterschied)', 'V³⁺ (grün)'],
        ['d³', 't₂g³ (3 ungepaart)', 't₂g³ (kein Unterschied)', 'Cr³⁺ (grün); maximale Anzahl ungepaarter e⁻ bei d³ gleich'],
        ['d⁴', 't₂g³ e_g¹ (4 ungepaart)', 't₂g⁴ (2 ungepaart)', 'Cr²⁺ (HS); Mn³⁺ (LS bei CN⁻)'],
        ['d⁵', 't₂g³ e_g² (5 ungepaart)', 't₂g⁵ (1 ungepaart)', 'Mn²⁺, Fe³⁺ (HS blass); [Fe(CN)₆]³⁻ (LS)'],
        ['d⁶', 't₂g⁴ e_g² (4 ungepaart)', 't₂g⁶ (0 ungepaart; diamagn.)', 'Fe²⁺ (HS); [Co(NH₃)₆]³⁺, [Fe(CN)₆]⁴⁻ (LS)'],
        ['d⁷', 't₂g⁵ e_g² (3 ungepaart)', 't₂g⁶ e_g¹ (1 ungepaart)', 'Co²⁺ (HS rosa); [Co(CN)₆]⁴⁻ (LS)'],
        ['d⁸', 't₂g⁶ e_g² (2 ungepaart)', 'q.-planar (0 ungepaart)', 'Ni²⁺ (HS); [PtCl₄]²⁻, [Ni(CN)₄]²⁻ (q.-pl., LS, diamagn.)'],
        ['d⁹', 't₂g⁶ e_g³ (1 ungepaart)', '= HS', 'Cu²⁺ (blau; Jahn-Teller-verzerrter Okt.)'],
        ['d¹⁰', 'alles besetzt (diamagn.)', '= HS', 'Zn²⁺, Cu⁺ (farblos)'],
      ],
      highlight: [5, 6, 10],
    })}

    ${renderInfobox({
      type: 'blue', icon: 'fas fa-magnet', title: 'Magnetismus als Sonde für Spin-Zustand',
      body: `<strong>Paramagnetismus:</strong> Ungepaarte Elektronen → Substanz wird in Magnetfeld angezogen.<br>
             <strong>Diamagnetismus:</strong> Alle Elektronen gepaart → schwach aus Magnetfeld abgestoßen.<br><br>
             <strong>Effektives magnetisches Moment μ_eff (in Bohr-Magneton μ_B):</strong><br>
             μ_eff = √(n(n+2)) · μ_B &nbsp; (n = Anzahl ungepaarter Elektronen)<br><br>
             Beispiel: [FeF₆]³⁻ (d⁵, high-spin, 5 ungepaarte e⁻):<br>
             μ_eff = √(5·7) · μ_B = √35 · μ_B ≈ 5,92 μ_B<br><br>
             Beispiel: [Fe(CN)₆]³⁻ (d⁵, low-spin, 1 ungepaartes e⁻):<br>
             μ_eff = √(1·3) · μ_B = √3 · μ_B ≈ 1,73 μ_B<br><br>
             Messung des magnetischen Moments → Anzahl ungepaarter e⁻ → Spin-Zustand!`,
    })}
  `; }

  // ══════════════════════════════════════════════════════════
  // 8.3.3 — Stabilität von Komplexverbindungen
  // ══════════════════════════════════════════════════════════
  _stabilitaet() { return `
    ${renderSubhead('8.3.3 — Stabilität von Komplexverbindungen')}

    <h3 class="lz-h3">Stabilitätskonstante und Stufenkonstanten</h3>
    <p class="lz-prose">
      Die <strong>Stabilitätskonstante</strong> (Bildungskonstante K_f oder β)
      beschreibt das Gleichgewicht der Komplexbildung.
      Je größer K_f, desto stabiler der Komplex.
    </p>

    ${renderFormulaBox({
      label:   'Gesamtstabilitätskonstante (Bildungskonstante) β',
      formula: 'M + nL ⇌ [MLₙ] &nbsp;→&nbsp; β = [[MLₙ]] / ([M] · [L]ⁿ)',
      desc:    'β [L^n/mol^n]: Produkt der Stufenkonstanten β = K₁ · K₂ · … · Kₙ · Je größer β, desto stabiler der Komplex · Instabilitätskonstante K_inst = 1/β',
    })}

    ${renderTable({
      headers: ['Komplex', 'Ligand', 'lg β (25°C)', 'Stabilität'],
      rows: [
        ['[Ag(NH₃)₂]⁺',    'NH₃',   '7,24',   'Mäßig stabil'],
        ['[Cu(NH₃)₄]²⁺',   'NH₃',   '12,1',   'Stabil (blauer Kupferamminkomplex)'],
        ['[Ni(en)₃]²⁺',    'en',    '18,6',   'Sehr stabil (Chelat!)'],
        ['[Fe(SCN)]²⁺',    'SCN⁻',  '2,3',    'Wenig stabil (Indikator in Titration)'],
        ['[Fe(EDTA)]⁻',    'EDTA',  '25,1',   'Extrem stabil (6-zähnig!)'],
        ['[Ca(EDTA)]²⁻',   'EDTA',  '10,7',   'Stabil (Komplexometrie)'],
        ['[Mg(EDTA)]²⁻',   'EDTA',  '8,7',    'Stabil (Komplexometrie)'],
        ['[Cu(EDTA)]²⁻',   'EDTA',  '18,8',   'Sehr stabil'],
        ['[Fe(CN)₆]⁴⁻',   'CN⁻',   '35,0',   'Extrem stabil (kinetic inert)'],
        ['[Fe(CN)₆]³⁻',   'CN⁻',   '31,0',   'Extrem stabil'],
        ['[Ag(CN)₂]⁻',    'CN⁻',   '21,0',   'Sehr stabil (Cyanidlaugerei!)'],
        ['[Hg(EDTA)]²⁻',  'EDTA',  '21,8',   'Sehr stabil'],
        ['[Zn(NH₃)₄]²⁺',  'NH₃',   '9,1',    'Stabil'],
        ['[Au(CN)₂]⁻',    'CN⁻',   '39,0',   'Stabilster bekannter Metallkomplex!'],
      ],
      highlight: [4, 8, 13],
    })}

    <h3 class="lz-h3" style="margin-top:1.75rem;">Faktoren, die die Stabilität beeinflussen</h3>

    ${renderMerkboxGrid([
      {
        icon: 'fas fa-ring',
        title: 'Chelat-Effekt — Mehrzähnigkeit erhöht Stabilität enorm',
        text: `Mehrzähnige Liganden bilden stabile Ringe mit dem ZT (Chelat = griech. χηλή = Klaue).
               [Cu(NH₃)₄]²⁺ vs. [Cu(en)₂]²⁺:
               4 NH₃: lg β = 12,1
               2 en (= 4 Donoratome): lg β = 20,0 → 10⁸ mal stabiler!
               Thermodynamischer Grund: ΔS der Komplexbildung positiv bei Chelaten
               (mehr Moleküle freigesetzt als gebunden: M + 4NH₃ → 1 Komplex;
               M + 2en → 1 Komplex + 2 freie Moleküle WENIGER freig. → Fehler: M + 2en(4N) → Komplex frei → ΔS > 0 wegen Zähl der Partikel)`,
      },
      {
        icon: 'fas fa-charging-station',
        title: 'HSAB-Prinzip — harte/weiche Säuren und Basen',
        text: `Harte Lewis-Säuren (kleine, hochgeladene Metalle: Fe³⁺, Cr³⁺, Al³⁺) bevorzugen
               harte Lewis-Basen (F⁻, O²⁻, OH⁻, H₂O).
               Weiche Lewis-Säuren (große, niedergeladene Metalle: Cu⁺, Ag⁺, Hg²⁺, Pt²⁺)
               bevorzugen weiche Basen (I⁻, S²⁻, CN⁻, PR₃, CO).
               Hg²⁺+I⁻: [HgI₄]²⁻ sehr stabil · Fe³⁺+F⁻: [FeF₆]³⁻ stabil.`,
      },
      {
        icon: 'fas fa-crown',
        title: 'Elektronenkonfiguration des ZT',
        text: `d⁶-Metallkomplexe (Co³⁺, Rh³⁺, Ir³⁺, Pt⁴⁺, Ru²⁺) sind mit starken Liganden
               extrem inert (kinetisch stabil = langsamer Ligandenaustausch) trotz
               variabler thermodynamischer Stabilität.
               d¹⁰-Metallkomplexe (Zn²⁺, Cd²⁺, Hg²⁺, Cu⁺) sind kinetisch labil
               (schneller Ligandenaustausch).`,
      },
      {
        icon: 'fas fa-layer-group',
        title: 'Koordinationszahl und Geometrie',
        text: `Hohe KZ → mehr Liganden → mehr Bindungen → tendenziell stabiler.
               Oktaedrische Komplexe stabiler als tetraedrische
               (mehr Ligand-Metall-Wechselwirkungen).
               Ausnahme: quadratisch-planare d⁸-Komplexe von Pt²⁺, Pd²⁺ extrem stabil
               (keine axialen Liganden angreifbar)`,
      },
    ])}

    ${renderInfobox({
      type: 'warning', icon: 'fas fa-exclamation-triangle', title: 'Thermodynamische vs. kinetische Stabilität',
      body: `<strong>Thermodynamisch stabil:</strong> K_f groß; Komplex bildet sich spontan (ΔG < 0).<br>
             <strong>Kinetisch inert:</strong> Ligandenaustausch läuft langsam (große Aktivierungsenergie).<br>
             <strong>Kinetisch labil:</strong> Ligandenaustausch schnell (kleine E_A).<br><br>
             Ein Komplex kann:<br>
             ① Thermodynamisch stabil UND kinetisch inert: [Co(NH₃)₆]³⁺ (d⁶ low-spin) — stabil, langsamer Austausch<br>
             ② Thermodynamisch stabil UND kinetisch labil: [Hg(CN)₄]²⁻ — K_f groß, aber schneller Austausch<br>
             ③ Thermodynamisch instabil UND kinetisch inert: Selten; z.B. manche d³-Komplexe<br><br>
             <strong>Merke:</strong> Labile Komplexe eignen sich als Katalysatoren;
             inerte Komplexe für Strukturuntersuchungen und Zytostatika (Cisplatin: kinetisch inert!).`,
    })}
  `; }

  // ══════════════════════════════════════════════════════════
  // 8.3.4 — Darstellung und Bedeutung von Komplexen
  // ══════════════════════════════════════════════════════════
  _bedeutung() { return `
    ${renderSubhead('8.3.4 — Darstellung und Bedeutung von Komplexen')}

    <h3 class="lz-h3">Darstellung von Komplexen</h3>

    ${renderTable({
      headers: ['Methode', 'Prinzip', 'Beispiel', 'Bedingungen'],
      rows: [
        ['Ligandsubstitution', 'Verdrängen eines Liganden durch einen anderen', '[Fe(H₂O)₆]³⁺ + 6CN⁻ → [Fe(CN)₆]³⁻ + 6H₂O', 'Häufig; thermodynamisch getrieben (stabilerer Komplex)'],
        ['Direktsynthese', 'Metall direkt mit Ligand umsetzen', 'Ni + 4CO → Ni(CO)₄ (Mond-Prozess, 50°C)', 'Metallcarbonyle; Ni-Reinigung'],
        ['Oxidation/Reduktion', 'Oxidationsstufe des ZT ändert sich', 'CoCl₂ + 6NH₃ + H₂O₂ → [Co(NH₃)₆]Cl₃', 'Co(II) → Co(III) durch Luftoxidation im Ammin-Überschuss'],
        ['Festphasensynthese', 'Reaktion im festen Zustand', 'CuSO₄ · 5H₂O + 4py → [Cu(py)₄]SO₄ + 5H₂O', 'Trockene Liganden auf Metallsalze; einfach'],
        ['Hydrothermale Synthese', 'Reaktion unter Druck bei höherer T', 'Metall-organische Gerüste (MOFs)', '150–300°C; poröse Strukturen mit riesiger Oberfläche'],
      ],
    })}

    <h3 class="lz-h3" style="margin-top:1.75rem;">Biologische Bedeutung von Metallkomplexen</h3>

    ${renderTable({
      headers: ['Biokomplex', 'Metallzentrum', 'Ligand', 'Funktion', 'Erkrankung bei Mangel/Überschuss'],
      rows: [
        ['Hämoglobin (Hb)',        'Fe²⁺', 'Porphyrin (Häm) + Globin + O₂/CO/NO', 'O₂-Transport im Blut; CO bindet 200× stärker als O₂ (Vergiftung!)', 'Anämie (Fe-Mangel); Hämochromatose (Fe-Überschuss)'],
        ['Myoglobin',              'Fe²⁺', 'Häm + Protein',                         'O₂-Speicherung im Muskel; tiefroter Muskelfarbstoff', 'Muskelatrophie; Myoglobinurie'],
        ['Cytochrome (Cyt c, P450)','Fe²⁺/³⁺','Häm',                              'Elektronenübertragung in Atmungskette; Monooxygenierung (CYP450)', 'Mitochondriale Erkrankungen'],
        ['Chlorophyll a/b',        'Mg²⁺', 'Porphyrin (Chlorin-Ring)',               'Lichtabsorption und Energieübertragung in Fotosynthese', 'Chlorose (Mg-Mangel in Pflanzen)'],
        ['Vitamin B₁₂ (Cobalamin)','Co³⁺', 'Corrinring (ähnl. Porphyrin)',          'Enzymkofaktor (Methylierung, Isomerisierungen; Met-Synthase)', 'Perniziöse Anämie; Neuropathie'],
        ['Carboanhydrase',         'Zn²⁺', 'Histidin (3× in Protein) + OH⁻',        'CO₂ + H₂O ⇌ HCO₃⁻ + H⁺ (schnellste bekannte Enzymreaktion)', 'Glaukom (Hemmung: Acetazolamid)'],
        ['Nitrogenase',            'Fe-Mo-Cofaktor', 'Cys,His', 'N₂ + 8H⁺ + 8e⁻ → 2NH₃ + H₂ (N-Fixierung der Leguminosen)', 'Kein biologisches N-Fixierungsproblem; technisch Haber-Bosch nötig'],
        ['Plastocyanin',           'Cu²⁺/Cu⁺','Cys,Met,His,His', 'Elektronenübertragung in Chloroplast (PS I ↔ Cyt b₆f)', 'Cu-Mangel in Pflanzen'],
        ['Cisplatin',              'Pt²⁺', 'Cl⁻, NH₃ + DNA (N7-Guanin)',             'Zytostatikum: Vernetzt DNA-Stränge → Zelltod', 'Nephrotoxisch; Neurotoxisch'],
        ['Desferrioxamin',         'Fe³⁺', 'Hydroxamatsiderophor',                   'Eisenchelattherapie (Hämochromatose, Thalassämie)', 'Therapiemedikament; nicht natürlich'],
      ],
      highlight: [0, 3, 4, 8],
    })}

    <h3 class="lz-h3" style="margin-top:1.75rem;">Industrielle und technische Bedeutung</h3>

    ${renderAccordion([
      {
        title: 'Mond-Prozess — Nickelreinigung durch Ni(CO)₄',
        content: `<p class="lz-prose"><strong>Prinzip:</strong> Ludwig Mond entdeckte 1890, dass Nickel
                  mit CO einen flüchtigen Komplex bildet — den einzigen industriell
                  genutzten Metallcarbonyl-Weg zur Metallreinigung.</p>
                  <p class="lz-prose"><strong>Schritt 1 (50°C):</strong> Ni + 4CO → Ni(CO)₄ (Kp = 43°C; farblose Flüssigkeit/Gas)<br>
                  Rohnickel reagiert; verunreinigendes Fe, Co kaum.<br>
                  <strong>Schritt 2 (230°C):</strong> Ni(CO)₄ → Ni + 4CO (Zersetzung zu Reinnickel 99,99%)<br><br>
                  <strong>Toxizität:</strong> Ni(CO)₄ extrem giftig (MAK: 0,05 ppm!);
                  krebserzeugend; Pneumonitis und Leberversagen. Strenge Sicherheitsprotokolle nötig.</p>`,
      },
      {
        title: 'Cyanidlaugerei — Goldgewinnung',
        content: `<p class="lz-prose"><strong>MacArthur-Forrest-Verfahren (1887):</strong><br>
                  Au + 2CN⁻ + ½O₂ + H₂O → [Au(CN)₂]⁻ + OH⁻<br>
                  (E°_cell > 0; spontan; sehr stabile Komplexbildung: lg β([Au(CN)₂]⁻) = 39!)<br>
                  <br>
                  Anschließende Rückgewinnung:<br>
                  2[Au(CN)₂]⁻ + Zn → [Zn(CN)₄]²⁻ + 2Au<br>
                  (Zn als Opfermetall; E° = −0,76 V; Au: +0,97 V in Cyanidlösung)<br><br>
                  <strong>Umweltproblematik:</strong> CN⁻ sehr toxisch (Fischsterben, Trinkwasser);
                  Cyanidlacken und -schlamm. Unfälle: Baia-Mare-Katastrophe 2000 (Rumänien):
                  100 000 m³ Cyanidlösung in Theiß/Donau → Ökologische Katastrophe.
                  Suche nach Alternativen (Thiosulfat- oder Chlor-basierte Verfahren).</p>`,
      },
      {
        title: 'Farbstoffe und Pigmente — Metallkomplexe',
        content: `<p class="lz-prose"><strong>Preußisch Blau (Berliner Blau):</strong><br>
                  Fe₄[Fe(CN)₆]₃ · 14H₂O (gemischtes Eisen(II/III)-Cyanid-Polymer)<br>
                  Intensiv blau; wird seit ~1704 als Pigment verwendet.<br>
                  Reaktion: Fe³⁺ + [Fe(CN)₆]⁴⁻ → Berliner Blau (FeIII[FeII(CN)₆] insoluble form)<br>
                  Gegenteil: Turnbull's Blau: Fe²⁺ + [Fe(CN)₆]³⁻ → gleiche Verbindung!<br><br>
                  <strong>Kupferphthalocyanin (CuPc):</strong><br>
                  Cu²⁺ + Phthalocyanin-Ligand → tiefblauer/grüner Farbstoff.
                  Einer der meistproduzierten synthetischen Farbstoffe; Druckfarben, Kunststoffe.<br><br>
                  <strong>Chromgelb:</strong> PbCrO₄ (Pb²⁺ + CrO₄²⁻ → gelbes Pigment)<br>
                  Kanariengelb; aber Pb und Cr(VI) giftig → zunehmend ersetzt durch organische Pigmente.</p>`,
      },
      {
        title: 'Katalyse durch Metallkomplexe',
        content: `<p class="lz-prose">Homogene Übergangsmetallkatalysatoren sind eine
                  der mächtigsten Klassen chemischer Katalysatoren:</p>
                  <p class="lz-prose"><strong>Wacker-Oxidation:</strong>
                  C₂H₄ + PdCl₂ + H₂O → CH₃CHO + Pd + 2HCl
                  (Ethylen → Acetaldehyd; Pd²⁺ wird regeneriert durch Cu²⁺ → Pd-Komplex-Katalyse)<br><br>
                  <strong>Wilkinson-Katalysator [RhCl(PPh₃)₃]:</strong>
                  Homogene Hydrierung von Alkenen bei Raumtemperatur und 1 bar H₂.
                  Spezifität: kein aromatischer Ring; keine Dreifachbindungen.<br><br>
                  <strong>Ziegler-Natta-Katalysatoren (TiCl₃ + AlEt₃):</strong>
                  Stereoregulare Polymerisation von Propylen zu isotaktischem PP.
                  Revolutionierte Kunststoffindustrie; Nobel-Preis 1963.<br><br>
                  <strong>Grubbs-Katalysator (Ru-Carben-Komplex):</strong>
                  Olefin-Metathese (Nobel-Preis 2005); ermöglicht neue Medikamenten-Synthesen.</p>`,
      },
    ])}
  `; }

  // ══════════════════════════════════════════════════════════
  // 8.3.5 — Komplexometrie
  // ══════════════════════════════════════════════════════════
  _komplexometrie() { return `
    ${renderSubhead('8.3.5 — Komplexometrie')}

    <h2 class="lz-h2">Grundlagen der Komplexometrie</h2>
    <p class="lz-prose">
      Die <strong>Komplexometrie</strong> ist ein Titrationsverfahren,
      bei dem Metall-Ionen mit einem Komplexbildner titriert werden.
      Am Äquivalenzpunkt wird das letzte Metallatom in den Komplex überführt.
      Die wichtigste Maßlösung ist <strong>EDTA</strong>.
    </p>

    <h3 class="lz-h3">EDTA — der universelle Komplexbildner</h3>
    <p class="lz-prose">
      <strong>EDTA</strong> (Ethylendiamintetraessigsäure, H₄Y) ist ein
      sechszähniger Ligand mit zwei N- und vier O-Donoratomen.
      Er bildet mit nahezu allen Metallionen im Verhältnis 1:1 sehr stabile
      Chelatkomplexe.
    </p>

    ${renderMerkboxGrid([
      {
        icon: 'fas fa-ring',
        title: 'Struktur von EDTA',
        text: `H₄Y = Ethylendiamintetraessigsäure: (HOOCCH₂)₂N-CH₂-CH₂-N(CH₂COOH)₂
               pK_s-Werte: pK₁=2,0 · pK₂=2,67 · pK₃=6,16 · pK₄=10,26
               Freie Säure: H₄Y · disodium salt: Na₂H₂Y (in der Praxis als Maßlösung)
               Vierwertig deprotoniert: Y⁴⁻ (aktive Form für Komplexbildung)`,
      },
      {
        icon: 'fas fa-equals',
        title: 'Stöchiometrie der Komplexbildung',
        text: `M^(n+) + Y⁴⁻ → [MY]^(n-4) (immer 1:1!)
               Unabhängig von der Ladung des Metallions: immer 1 EDTA pro Metall.
               K_f(MYn-4) = [[MY]^(n-4)] / ([M^n+] · [Y⁴⁻])
               Die pH-abhängige Stabilitätskonstante K_f' berücksichtigt
               die EDTA-Protonierung: K_f' = K_f · α_Y (Anteil von Y⁴⁻ bei gegebenem pH)`,
      },
      {
        icon: 'fas fa-paint-brush',
        title: 'Metallchromschwarz T (Eriochromschwarz T, EBT)',
        text: `Der häufigste Indikator in der Komplexometrie.
               In: freier Indikator HIn²⁻: blau; Metallkomplex MIn⁻: rotviolett.
               Am ÄP: EDTA verdrängt Metallion aus MIn-Komplex (EDTA stabiler!) → blau.
               Farbumschlag: rotviolett → blau am Äquivalenzpunkt.
               Optimaler pH: 9–11 (Ammoniakpuffer); Empfindlich für Ca²⁺, Mg²⁺.`,
      },
      {
        icon: 'fas fa-flask',
        title: 'pH-Abhängigkeit — warum Puffer?',
        text: `In saurem Milieu: EDTA stark protoniert → wenig Y⁴⁻ → scheinbar instabilere Komplexe.
               In basischem Milieu: Metallhydroxide fallen aus (Fe(OH)₃ bei pH>3).
               Optimum: Puffersystem wählen je nach Metall:
               pH 4–5 (Acetatpuffer): Fe³⁺, Bi³⁺, Hg²⁺
               pH 9–10 (Ammoniakpuffer): Ca²⁺, Mg²⁺, Zn²⁺, Cu²⁺
               pH 12 (NaOH): Ba²⁺, Ca²⁺ (ohne Mg²⁺!)`,
      },
    ])}

    <h3 class="lz-h3" style="margin-top:1.75rem;">Stabilitätskonstanten von EDTA-Komplexen und optimaler pH</h3>

    ${renderTable({
      headers: ['Metall-Ion', 'lg K_f(MY)', 'Optimaler pH', 'Indikator', 'Besonderheit'],
      rows: [
        ['Ca²⁺',  '10,7',  '12',      'Murexid; EBT',                'Titration in stark basischem Milieu; Mg²⁺ fällt als Mg(OH)₂ aus → selektiv'],
        ['Mg²⁺',  '8,7',   '9–10',    'EBT (Eriochromschwarz T)',     'Standard; Wasserhärtetitration (Ca²⁺+Mg²⁺ zusammen)'],
        ['Zn²⁺',  '16,5',  '9–10',    'EBT',                          'Genaue Zink-Bestimmung; auch bei pH 5-6 möglich'],
        ['Cu²⁺',  '18,8',  '4–5',     'Murexid (violett→gelb)',       'PAN als Indikator (1-(2-Pyridylazo)-2-naphthol)'],
        ['Fe³⁺',  '25,1',  '1–2',     'Sulfosalicylat (violett→gelb)','Hohe K_f → auch bei niedrigem pH titrierbar; Salicylat-Indikator'],
        ['Pb²⁺',  '18,0',  '5–6',     'PAN, Xylenol-Orange',          'Acetat-Puffer'],
        ['Ni²⁺',  '18,6',  '4–8',     'Murexid',                      '—'],
        ['Co²⁺',  '16,3',  '5–7',     'PAN',                          '—'],
        ['Al³⁺',  '16,1',  '5',       'BTMB (Zurück-Titration nötig)','Sehr langsame Komplexbildung → Rücktitration mit ZnSO₄'],
        ['Ba²⁺',  '7,8',   '12',      'EBT',                          'Sehr großer Kation; schwacher Komplex; pH 12 nötig'],
      ],
      highlight: [0, 1, 4],
    })}

    <h3 class="lz-h3" style="margin-top:1.75rem;">Titrationsmethoden in der Komplexometrie</h3>

    ${renderTable({
      headers: ['Methode', 'Prinzip', 'Anwendung', 'Formel'],
      rows: [
        ['Direkttitration', 'Probelösung (M^n+) direkt mit EDTA-Maßlösung titrieren', 'Ca²⁺, Mg²⁺, Zn²⁺, Cu²⁺, Pb²⁺; schnelle Komplexbildung', 'n(M) = c(EDTA) · V(EDTA)'],
        ['Rücktitration', 'EDTA im Überschuss zugeben, mit Metallsalz (ZnSO₄, MgSO₄) zurücktitrieren', 'Al³⁺, Cr³⁺ (langsame Komplexbildung); unlösliche Metalle', 'n(M) = c(EDTA)·V(EDTA) − c(Zn)·V(Rücktitration)'],
        ['Substitutionstitration', 'ZnY²⁻ + M^n+ → MY^(n-4) + Zn²⁺; Zn²⁺ wird titriert', 'Metalle ohne geeigneten Indikator', 'n(M) = n(Zn) freigesetzt'],
        ['Indirekte Titration', 'Analyt fällt M aus; M-Niederschlag lösen und titrieren', 'Anionen (SO₄²⁻, PO₄³⁻); z.B. SO₄²⁻ + Ba²⁺ → BaSO₄↓ → Ba²⁺ zurücktitrieren', 'n(Analyt) aus Stöchiometrie'],
      ],
      highlight: [0, 1],
    })}

    <h3 class="lz-h3" style="margin-top:1.75rem;">Bestimmung der Wasserhärte</h3>
    <p class="lz-prose">
      Die <strong>Wasserhärte</strong> ist die bekannteste Anwendung der Komplexometrie.
      Sie misst den Ca²⁺- und Mg²⁺-Gehalt von Trinkwasser.
    </p>

    ${renderInfobox({
      type: 'blue', icon: 'fas fa-tint', title: 'Wasserhärte-Bestimmung — Ablauf der Titration',
      body: `<strong>Gesamthärte (Ca²⁺ + Mg²⁺):</strong><br>
             Probe + NH₃/NH₄Cl-Puffer (pH 10) + EBT-Indikator → rotviolett (Ca·EBT + Mg·EBT)<br>
             Titration mit EDTA (c = 0,01 mol/L) → EDTA verdrängt Ca²⁺ und Mg²⁺ von EBT → blau<br>
             Äquivalenzpunkt = Farbumschlag rotviolett → blau<br><br>
             <strong>Calciumhärte allein:</strong><br>
             pH 12 (NaOH) → Mg(OH)₂ fällt aus → nur Ca²⁺ in Lösung<br>
             Indikator: Murexid (rotviolett→violett)<br>
             Magnesiuumhärte = Gesamthärte − Calciumhärte<br><br>
             <strong>Einheiten der Wasserhärte:</strong><br>
             mmol/L (modern IUPAC) · °dH (deutsche Grad) · °fH (franz. Grad) · 1 mmol/L = 5,6 °dH<br>
             Weich: <1,5 mmol/L · Mittel: 1,5–2,5 · Hart: >2,5 mmol/L`,
    })}

    ${renderTable({
      headers: ['Anwendungsbereich', 'Analyt', 'Verfahren', 'Industrielle Relevanz'],
      rows: [
        ['Trinkwasseranalyse', 'Ca²⁺, Mg²⁺ (Gesamthärte)', 'Direkttitration, pH 10, EBT', 'Wasseraufbereitung; Kesselsteinvermeidung; Waschmitteloptimierung'],
        ['Pharmakopöe (Arzneimittelprüfung)', 'Ca²⁺ in Calciumlaktat/Gluconat', 'Direkttitration', 'Qualitätskontrolle pharmazeutischer Ca-Präparate'],
        ['Metallhüttenanalytik', 'Zn²⁺, Pb²⁺, Cu²⁺ in Erzen/Legierungen', 'Direkttitration oder Rücktitration nach Auflösen', 'Bestimmung des Metallgehalts vor Verhüttung'],
        ['Lebensmittelanalytik', 'Ca²⁺ in Milch, Käse, Fruchtsäften', 'Direkttitration nach Aufschluss', 'Nährwertkontrolle; Kennzeichnungspflicht'],
        ['Umweltanalytik', 'Schwermetalle in Abwasser', 'AAS nach Komplexierung; direkte Titration', 'Überwachung von Grenzwerten (EU-Wasserrahmenrichtlinie)'],
        ['Textil-/Galvanikindustrie', 'Zn²⁺ in Galvanikbädern; Ca²⁺ in Härtebestimmung', 'Prozessüberwachung', 'Konstante Badkonzentration; Produktionssteuerung'],
      ],
      highlight: [0],
    })}

    ${renderInfobox({
      type: 'success', icon: 'fas fa-graduation-cap', title: 'Zusammenfassung Komplexchemie',
      body: `<strong>Aufbau:</strong> ZT (Lewis-Säure) + Liganden (Lewis-Basen) · KZ = Anzahl Donorbindungen<br>
             <strong>Nomenklatur:</strong> Liganden alphabetisch + Zentralatom (OZ) · anionische Komplexe: -at<br>
             <strong>Geometrie:</strong> KZ 2→linear · KZ 4→tetraedrisch oder q.-planar (d⁸!) · KZ 6→oktaedrisch<br>
             <strong>Isomerie:</strong> cis/trans · Bindungsisomerie · optische Isomerie (Δ/Λ)<br>
             <strong>Ligandenfeld:</strong> t₂g/e_g-Aufspaltung Δ_o · high-spin (schwacher L) / low-spin (starker L)<br>
             <strong>Stabilität:</strong> lg β (K_f) · Chelat-Effekt · HSAB · kinetisch labil vs. inert<br>
             <strong>EDTA:</strong> 6-zähnig · 1:1-Komplexe · pH je nach Metall · EBT-Indikator (rotviolett→blau)<br>
             <strong>Wasserhärte:</strong> Ca²⁺+Mg²⁺ bei pH 10 mit EBT; nur Ca²⁺ bei pH 12 mit Murexid`,
    })}
  `; }

  init() {
    i18n.init();
    initScrollReveal();
    initInteractive(document);
    initTabs();
  }
}