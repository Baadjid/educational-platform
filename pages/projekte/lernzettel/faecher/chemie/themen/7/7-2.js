// pages/projekte/lernzettel/faecher/chemie/themen/7/7-2.js
// Kapitel 7.2 — Redoxreaktionen
// 7.2.1  Redoxreaktionen als Donator-Akzeptor-Reaktionen
// 7.2.2  Oxidationszahlen
// 7.2.3  Entwickeln von Redoxgleichungen
// 7.2.4  Standardredoxpotenziale und Redoxgleichgewichte
// 7.2.5  Anwendungen von Redoxreaktionen

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
  { key: '721', icon: 'fas fa-exchange-alt',  label: '7.2.1 Donator-Akzeptor'      },
  { key: '722', icon: 'fas fa-sort-numeric-up',label: '7.2.2 Oxidationszahlen'      },
  { key: '723', icon: 'fas fa-pencil-alt',    label: '7.2.3 Redoxgleichungen'       },
  { key: '724', icon: 'fas fa-battery-three-quarters', label: '7.2.4 Standardpotenziale' },
  { key: '725', icon: 'fas fa-flask',         label: '7.2.5 Anwendungen'            },
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
  return `<nav class="wim-tabs" role="tablist" id="tabs72">${nav}</nav>${panels}`;
}

function initTabs() {
  const nav = document.getElementById('tabs72');
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

export default class Chemie_7_2 {
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
          <i class="fas fa-chevron-right"></i><span>Kapitel 7</span>
          <i class="fas fa-chevron-right"></i><span>7.2</span>
        </div>
        <h1 class="lz-sub-title">Redoxreaktionen<br><em>Elektronenübertragung und Elektrochemie</em></h1>
        <p class="lz-sub-desc">
          Donator-Akzeptor-Prinzip · Oxidationszahlen · Redoxgleichungen ·
          Standardpotenziale · Nernst-Gleichung · Anwendungen
        </p>
        ${renderTags(['Kap. 7.2', 'Redox', 'Oxidationszahlen', 'Elektrochemie', 'LK Chemie BW'])}
      </div>
    </section>

    <section class="lz-content-section">
      <div class="lz-section-wrap">
        ${buildWimHTML(k => {
          if (k === '721') return this._donator();
          if (k === '722') return this._oxzahl();
          if (k === '723') return this._gleichungen();
          if (k === '724') return this._potenziale();
          if (k === '725') return this._anwendungen();
          return '';
        })}
      </div>
    </section>

    <section class="lz-content-section" style="padding:1.5rem 0 3rem;">
      <div class="lz-section-wrap">
        ${renderPageNav({
          prev: { label: '7.1 Säuren und Basen',              link: `${BASE}/themen/7/7-1` },
          next: { label: '8.1 Hauptgruppenelemente',           link: `${BASE}/themen/8/8-1` },
        }, BASE)}
      </div>
    </section>
    ${footerHTML(this.router)}
  `; }

  // ══════════════════════════════════════════════════════════
  // 7.2.1 — Redoxreaktionen als Donator-Akzeptor-Reaktionen
  // ══════════════════════════════════════════════════════════
  _donator() { return `
    ${renderSubhead('7.2.1 — Redoxreaktionen als Donator-Akzeptor-Reaktionen')}

    <h2 class="lz-h2">Oxidation und Reduktion — immer gleichzeitig</h2>
    <p class="lz-prose">
      Redoxreaktionen sind <strong>Elektronenübertragungsreaktionen</strong>:
      Ein Reaktionspartner gibt Elektronen ab (Oxidation), der andere nimmt sie auf (Reduktion).
      Oxidation und Reduktion laufen immer gleichzeitig und im exakt gleichen Ausmaß ab —
      es gibt keine Oxidation ohne Reduktion und umgekehrt.
    </p>

    ${renderTable({
      headers: ['Begriff', 'Definition', 'Merkregel', 'Beispiel Zn/CuSO₄'],
      rows: [
        ['Oxidation',        'Abgabe von Elektronen; Erhöhung der Oxidationszahl', 'OIL: Oxidation Is Loss (of electrons)', 'Zn → Zn²⁺ + 2e⁻ (Zn wird oxidiert, OZ: 0→+2)'],
        ['Reduktion',        'Aufnahme von Elektronen; Erniedrigung der Oxidationszahl', 'RIG: Reduction Is Gain (of electrons)', 'Cu²⁺ + 2e⁻ → Cu (Cu²⁺ wird reduziert, OZ: +2→0)'],
        ['Reduktionsmittel', 'Gibt Elektronen ab; wird selbst oxidiert', 'Donator der Elektronen; „edles" Opfer', 'Zn ist Reduktionsmittel (es reduziert Cu²⁺)'],
        ['Oxidationsmittel', 'Nimmt Elektronen auf; wird selbst reduziert', 'Akzeptor der Elektronen', 'Cu²⁺ ist Oxidationsmittel (es oxidiert Zn)'],
      ],
      highlight: [0, 1],
    })}

    ${renderInfobox({
      type: 'blue', icon: 'fas fa-lightbulb', title: 'Merkhilfen OIL RIG und LEO GER',
      body: `<strong>OIL RIG:</strong> Oxidation Is Loss, Reduction Is Gain (of electrons)<br>
             <strong>LEO GER:</strong> Loss of Electrons = Oxidation · Gain of Electrons = Reduction<br>
             <strong>AnOx RedKat:</strong> Anode = Oxidation · Kathode = Reduktion (Elektrochemie)`,
    })}

    <h3 class="lz-h3" style="margin-top:1.75rem;">Redox als Donator-Akzeptor-Reaktion</h3>
    <p class="lz-prose">
      Analog zur Brønsted-Säure-Base-Theorie (Protonenübertragung) sind
      Redoxreaktionen <strong>Elektronenübertragungen</strong>:
    </p>

    ${renderCompare({
      titleA: 'Brønsted-Säure-Base (Protonenübertragung)',
      titleB: 'Redox (Elektronenübertragung)',
      listA: [
        'Donator = Säure (gibt H⁺ ab)',
        'Akzeptor = Base (nimmt H⁺ auf)',
        'Korrespondierendes Paar: HA/A⁻',
        'Stärke: pK_s (je kleiner, desto stärker)',
        'Typisch: wässrige Lösungen',
      ],
      listB: [
        'Donator = Reduktionsmittel (gibt e⁻ ab)',
        'Akzeptor = Oxidationsmittel (nimmt e⁻ auf)',
        'Redoxpaar: Red/Ox (z.B. Zn/Zn²⁺, Fe²⁺/Fe³⁺)',
        'Stärke: Standardpotenzial E° (je negativer, desto stärker als Red.-mittel)',
        'Auch in Gasphase und Festkörpern möglich',
      ],
    })}

    <h3 class="lz-h3" style="margin-top:1.75rem;">Wichtige Oxidationsmittel und Reduktionsmittel</h3>

    ${renderTable({
      headers: ['Stoff', 'Funktion', 'Halbreaktion', 'E° [V]', 'Anwendung'],
      rows: [
        ['F₂',       'Oxid.-mittel', 'F₂ + 2e⁻ → 2F⁻',                    '+2,87', 'Stärkstes Oxidationsmittel; Fluorierungen'],
        ['MnO₄⁻(sauer)', 'Oxid.-mittel', 'MnO₄⁻+8H⁺+5e⁻ → Mn²⁺+4H₂O',  '+1,51', 'Permanganometrie; Desinfektion'],
        ['Cr₂O₇²⁻(sauer)', 'Oxid.-mittel', 'Cr₂O₇²⁻+14H⁺+6e⁻ → 2Cr³⁺+7H₂O','+1,33','Dichromat; Analytik (Cerimetrie)'],
        ['Cl₂',      'Oxid.-mittel', 'Cl₂ + 2e⁻ → 2Cl⁻',                  '+1,36', 'Wasserdesinfektion; Chlorierung'],
        ['O₂(sauer)','Oxid.-mittel', 'O₂+4H⁺+4e⁻ → 2H₂O',                '+1,23', 'Verbrennung; biologische Oxidation'],
        ['H₂O₂',     'Oxid. o. Red.','H₂O₂+2H⁺+2e⁻ → 2H₂O (+1,78 V) oder H₂O₂→O₂+2H⁺+2e⁻ (−0,68 V)', '±', 'Bleichen; Desinfektion; Raketentreibstoff'],
        ['Fe²⁺',     'Red.-mittel', 'Fe³⁺ + e⁻ → Fe²⁺',                   '+0,77', 'Titanometrie; Fenton-Reagenz'],
        ['Zn',       'Red.-mittel', 'Zn²⁺ + 2e⁻ → Zn',                    '−0,76', 'Opferanode; galvanische Elemente'],
        ['Na',       'Red.-mittel', 'Na⁺ + e⁻ → Na',                       '−2,71', 'Starkes Red.-mittel; sehr reaktiv'],
        ['Li',       'Red.-mittel', 'Li⁺ + e⁻ → Li',                       '−3,04', 'Stärkstes Reduktionsmittel'],
      ],
      highlight: [0, 9],
    })}
  `; }

  // ══════════════════════════════════════════════════════════
  // 7.2.2 — Oxidationszahlen
  // ══════════════════════════════════════════════════════════
  _oxzahl() { return `
    ${renderSubhead('7.2.2 — Oxidationszahlen')}

    <h3 class="lz-h3">Definition und Regeln der Oxidationszahl</h3>
    <p class="lz-prose">
      Die <strong>Oxidationszahl (OZ)</strong> ist eine formale Größe, die angibt,
      wie viele Elektronen ein Atom in einer Verbindung im Vergleich
      zum neutralen Element „besitzt" oder „abgegeben hat" — unter der Annahme,
      dass die Bindungselektronen vollständig dem elektronegativeren Partner gehören.
      Sie ist kein physikalisch messbarer Wert, sondern ein Hilfsmittel zum
      Erkennen und Bilanzieren von Redoxreaktionen.
    </p>

    ${renderMerkboxGrid([
      {
        icon: 'fas fa-atom',
        title: 'Regel 1 — Elemente',
        text: `OZ = 0 für Elemente in reiner Form, unabhängig von der Modifikation.
               Na(s): OZ(Na) = 0
               O₂(g): OZ(O) = 0
               S₈: OZ(S) = 0
               P₄: OZ(P) = 0`,
      },
      {
        icon: 'fas fa-plus-circle',
        title: 'Regel 2 — Einfache Ionen',
        text: `OZ = Ionenladung bei einatomigen Ionen.
               Na⁺: OZ(Na) = +1
               Ca²⁺: OZ(Ca) = +2
               Cl⁻: OZ(Cl) = −1
               O²⁻: OZ(O) = −2
               Fe³⁺: OZ(Fe) = +3`,
      },
      {
        icon: 'fas fa-water',
        title: 'Regel 3 — Sauerstoff und Wasserstoff',
        text: `O in Verbindungen: OZ = −2 (Ausnahme: Peroxide O₂²⁻: −1; F₂O: +2; O₂F₂: +1; O₃: 0)
               H in Verbindungen: OZ = +1 (Ausnahme: Metallhydride z.B. NaH, CaH₂: −1)`,
      },
      {
        icon: 'fas fa-plus',
        title: 'Regel 4 — Summenregel',
        text: `Summe aller OZ in einer neutralen Verbindung = 0.
               Summe aller OZ in einem Ion = Ionenladung.
               SO₄²⁻: OZ(S) + 4·(−2) = −2 → OZ(S) = +6
               NH₄⁺: OZ(N) + 4·(+1) = +1 → OZ(N) = −3`,
      },
    ])}

    <h3 class="lz-h3" style="margin-top:1.75rem;">Oxidationszahlen bestimmen — Übungsbeispiele</h3>

    ${renderTable({
      headers: ['Verbindung/Ion', 'Rechnung', 'OZ des markierten Elements', 'Interpretation'],
      rows: [
        ['H₂O',         'OZ(H)=+1; 2·(+1)+OZ(O)=0', 'OZ(O) = −2',  'Sauerstoff in Wasser: −2'],
        ['H₂O₂',        '2·(+1)+2·OZ(O)=0', 'OZ(O) = −1',            'Peroxid: O hat OZ −1'],
        ['HNO₃',        '+1+OZ(N)+3·(−2)=0', 'OZ(N) = +5',           'Salpetersäure: N im höchsten Zustand'],
        ['NO',           'OZ(N)+OZ(O)=0', 'OZ(N) = +2',              'Stickstoffmonoxid'],
        ['NO₂',          'OZ(N)+2·(−2)=0', 'OZ(N) = +4',             'Stickstoffdioxid'],
        ['N₂H₄',         'OZ(N)+2·(+1)=0', 'OZ(N) = −2',             'Hydrazin: N reduzierter Zustand'],
        ['NH₃',          'OZ(N)+3·(+1)=0', 'OZ(N) = −3',             'Ammoniak: N niedrigster Zustand'],
        ['SO₄²⁻',        'OZ(S)+4·(−2)=−2', 'OZ(S) = +6',            'Sulfat: S in höchstem Zustand'],
        ['SO₃²⁻',        'OZ(S)+3·(−2)=−2', 'OZ(S) = +4',            'Sulfit: S mittlerer Zustand'],
        ['S₂O₃²⁻',       '2·OZ(S)+3·(−2)=−2', 'OZ(S) = +2',         'Thiosulfat: mittlerer Zustand'],
        ['MnO₄⁻',        'OZ(Mn)+4·(−2)=−1', 'OZ(Mn) = +7',          'Permanganat: Mn im höchsten Zustand'],
        ['Cr₂O₇²⁻',      '2·OZ(Cr)+7·(−2)=−2', 'OZ(Cr) = +6',       'Dichromat: Cr(VI)'],
        ['Fe₃O₄',        'OZ(Fe): gemischt', 'OZ(Fe) = +8/3 ≈ 2,67', 'Magnetit: Mix Fe²⁺ und Fe³⁺ (1:2)'],
        ['Na₂S₂O₈',      'OZ(O)=−2; OZ(Na)=+1; 2·(+1)+2·OZ(S)+8·(−2)=0', 'OZ(S) = +7', 'Peroxodisulfat: S(VII) — starkes Oxidationsmittel'],
      ],
      highlight: [1, 10, 11],
    })}

    ${renderInfobox({
      type: 'warning', icon: 'fas fa-exclamation-triangle', title: 'Häufige Fehler bei Oxidationszahlen',
      body: `<strong>① O in Peroxiden (O₂²⁻):</strong> OZ(O) = −1, nicht −2! (H₂O₂, Na₂O₂, BaO₂)<br>
             <strong>② O in Sauerstoffdifluorid OF₂:</strong> F ist elektronegativer → OZ(O) = +2, OZ(F) = −1<br>
             <strong>③ H in Metallhydriden:</strong> OZ(H) = −1! (NaH, CaH₂, LiAlH₄: H hat negative OZ)<br>
             <strong>④ Nicht-ganzzahlige OZ:</strong> Möglich in gemischten Verbindungen (Fe₃O₄)
             oder im Mittel über mehrere gleichartige Atome (S₂O₃²⁻: S = +2 im Mittel,
             aber tatsächlich S⁰ + S⁴⁺!)<br>
             <strong>⑤ OZ ≠ echte Ladung:</strong> OZ ist eine Hilfsgröße, keine tatsächliche Ionenladung!
             Kohlenstoff in CH₄ hat OZ(C) = −4, aber es gibt kein C⁴⁻-Ion.`,
    })}
  `; }

  // ══════════════════════════════════════════════════════════
  // 7.2.3 — Entwickeln von Redoxgleichungen
  // ══════════════════════════════════════════════════════════
  _gleichungen() { return `
    ${renderSubhead('7.2.3 — Entwickeln von Redoxgleichungen')}

    <h3 class="lz-h3">Methoden zum Bilanzieren von Redoxgleichungen</h3>
    <p class="lz-prose">
      Redoxgleichungen müssen atomär (Atome) und elektrisch (Ladungen)
      ausgeglichen sein. Es gibt zwei Hauptmethoden:
      die <strong>Oxidationszahlmethode</strong> und die
      <strong>Halbzellengleichungsmethode</strong> (Ionenelektronenmethode).
    </p>

    ${renderInfobox({
      type: '', icon: 'fas fa-list-ol', title: 'Halbzellengleichungs-Methode — systematischer Lösungsweg',
      body: `<strong>①</strong> Oxidations- und Reduktionshalbreaktion getrennt aufschreiben<br>
             <strong>②</strong> Atome (außer O und H) ausgleichen<br>
             <strong>③</strong> O-Atome mit H₂O ausgleichen<br>
             <strong>④</strong> H-Atome mit H⁺ (sauer) oder OH⁻ (basisch) ausgleichen<br>
             <strong>⑤</strong> Ladungen mit e⁻ ausgleichen<br>
             <strong>⑥</strong> Halbgleichungen so multiplizieren, dass e⁻ sich aufheben<br>
             <strong>⑦</strong> Halbgleichungen addieren; e⁻ kürzen; vereinfachen`,
    })}

    ${renderAccordion([
      {
        title: 'Beispiel 1 (sauer): MnO₄⁻ + Fe²⁺ → Mn²⁺ + Fe³⁺',
        content: `<p class="lz-prose"><strong>Schritt 1 — Halbgleichungen:</strong><br>
                  Reduktion: MnO₄⁻ → Mn²⁺ (Mn: +7 → +2, nimmt 5e⁻ auf)<br>
                  Oxidation: Fe²⁺ → Fe³⁺ (Fe: +2 → +3, gibt 1e⁻ ab)</p>
                  <p class="lz-prose"><strong>Schritt 2–5 — Halbgleichungen ausgleichen:</strong><br>
                  Reduktion: MnO₄⁻ + 8H⁺ + 5e⁻ → Mn²⁺ + 4H₂O<br>
                  (4 O → 4H₂O → 8H⁺ nötig; Ladung: −1+8·(+1)−5 = +2 ✓)<br>
                  Oxidation: Fe²⁺ → Fe³⁺ + e⁻<br>
                  (Ladung: +2 = +3−1 ✓)</p>
                  <p class="lz-prose"><strong>Schritt 6–7 — Addieren (×5 für Fe):</strong><br>
                  MnO₄⁻ + 8H⁺ + 5e⁻ → Mn²⁺ + 4H₂O<br>
                  5 Fe²⁺ → 5 Fe³⁺ + 5e⁻<br>
                  ────────────────────────────────<br>
                  <strong>MnO₄⁻ + 8H⁺ + 5Fe²⁺ → Mn²⁺ + 4H₂O + 5Fe³⁺</strong><br>
                  Probe: Mn: 1=1 ✓ Fe: 5=5 ✓ O: 4=4 ✓ H: 8=8 ✓ Ladung: −1+8+5·(+2) = +17; +2+0+5·(+3) = +17 ✓</p>`,
      },
      {
        title: 'Beispiel 2 (sauer): Cr₂O₇²⁻ + C₂H₅OH → Cr³⁺ + CH₃COOH',
        content: `<p class="lz-prose"><strong>Halbgleichungen:</strong><br>
                  Reduktion: Cr₂O₇²⁻ + 14H⁺ + 6e⁻ → 2Cr³⁺ + 7H₂O (Cr: +6→+3; 6e⁻; 2 Cr-Atome!)<br>
                  Oxidation: C₂H₅OH → CH₃COOH + 4H⁺ + 4e⁻<br>
                  (C: −1→+0 im Mittel (2 C: gesamt +4 geändert); H und O über H₂O/H⁺ ausgleichen)<br>
                  Detailliert: C₂H₅OH + H₂O → CH₃COOH + 4H⁺ + 4e⁻ (Ladung: 0+0 = 0+4−4 ✓)</p>
                  <p class="lz-prose"><strong>Ausgleich der Elektronen (kgV(6,4)=12):</strong><br>
                  ×2: 2Cr₂O₇²⁻ + 28H⁺ + 12e⁻ → 4Cr³⁺ + 14H₂O<br>
                  ×3: 3C₂H₅OH + 3H₂O → 3CH₃COOH + 12H⁺ + 12e⁻<br>
                  ────────────────────────────────────────────────────────<br>
                  <strong>2Cr₂O₇²⁻ + 16H⁺ + 3C₂H₅OH → 4Cr³⁺ + 11H₂O + 3CH₃COOH</strong></p>`,
      },
      {
        title: 'Beispiel 3 (basisch): Cl₂ → Cl⁻ + ClO₃⁻ (Disproportionierung)',
        content: `<p class="lz-prose"><strong>Disproportionierung:</strong> Cl₂ wird gleichzeitig oxidiert und reduziert.</p>
                  <p class="lz-prose"><strong>Reduktion:</strong> Cl₂ + 2e⁻ → 2Cl⁻ (Cl: 0 → −1)<br>
                  <strong>Oxidation:</strong> Cl₂ → 2ClO₃⁻ + ... (Cl: 0 → +5; 5e⁻ pro Cl-Atom; 2 Cl = 10e⁻)<br>
                  Im Basischen (Schritt 3–5): Cl₂ + 12OH⁻ → 2ClO₃⁻ + 6H₂O + 10e⁻<br>
                  (Ladung: 0−12 = −2+0−10 = −12 ✓)</p>
                  <p class="lz-prose"><strong>Ausgleich (×5 Reduktion, ×1 Oxidation):</strong><br>
                  5Cl₂ + 10e⁻ → 10Cl⁻<br>
                  Cl₂ + 12OH⁻ → 2ClO₃⁻ + 6H₂O + 10e⁻<br>
                  ─────────────────────────────────────────<br>
                  <strong>6Cl₂ + 12OH⁻ → 10Cl⁻ + 2ClO₃⁻ + 6H₂O</strong> →
                  <strong>3Cl₂ + 6OH⁻ → 5Cl⁻ + ClO₃⁻ + 3H₂O</strong></p>`,
      },
      {
        title: 'Oxidationszahlmethode — alternative Vorgehensweise',
        content: `<p class="lz-prose"><strong>Methode:</strong><br>
                  ① OZ aller Elemente bestimmen<br>
                  ② Erhöhung ΔOZ_Ox und Erniedrigung ΔOZ_Red berechnen<br>
                  ③ Koeffizienten so wählen, dass abgegebene = aufgenommene Elektronen<br>
                  ④ Atome ausgleichen (H und O mit H₂O und H⁺/OH⁻)</p>
                  <p class="lz-prose"><strong>Beispiel MnO₄⁻ + Fe²⁺:</strong><br>
                  Mn: +7 → +2 (ΔOZ = 5; Reduktion; nimmt 5 e⁻ auf)<br>
                  Fe: +2 → +3 (ΔOZ = 1; Oxidation; gibt 1 e⁻ ab)<br>
                  Ausgleich: 1 Mn × 5e⁻ = 5 Fe × 1e⁻ → Koeffizient: 1 MnO₄⁻ : 5 Fe²⁺<br>
                  → MnO₄⁻ + 5Fe²⁺ + 8H⁺ → Mn²⁺ + 5Fe³⁺ + 4H₂O</p>`,
      },
    ])}
  `; }

  // ══════════════════════════════════════════════════════════
  // 7.2.4 — Standardredoxpotenziale und Redoxgleichgewichte
  // ══════════════════════════════════════════════════════════
  _potenziale() { return `
    ${renderSubhead('7.2.4 — Standardredoxpotenziale und Redoxgleichgewichte')}

    <h3 class="lz-h3">Die elektrochemische Spannungsreihe</h3>
    <p class="lz-prose">
      Das <strong>Standardelektrodenpotenzial E°</strong> einer Halbzelle ist das Potenzial
      gegen die Standard-Wasserstoffelektrode (SHE, E° = 0 V) unter Standardbedingungen
      (alle Konzentrationen 1 mol/L, alle Partialdrücke 1 bar, T = 298 K).
      Es quantifiziert die Neigung eines Redoxpaares zu reduzieren oder zu oxidieren.
    </p>

    ${renderTable({
      headers: ['Halbzellenreaktion (Reduktion)', 'E° [V]', 'Ox.-Mittel-Stärke', 'Red.-Mittel-Stärke'],
      rows: [
        ['F₂ + 2e⁻ → 2F⁻',                         '+2,87', 'Stärkstes Ox.-Mittel', 'F⁻: schwächstes Red.-Mittel'],
        ['H₂O₂ + 2H⁺ + 2e⁻ → 2H₂O',                '+1,78', 'Sehr stark',            '—'],
        ['MnO₄⁻ + 8H⁺ + 5e⁻ → Mn²⁺ + 4H₂O',        '+1,51', 'Stark',                'Mn²⁺: schwach'],
        ['Au³⁺ + 3e⁻ → Au',                          '+1,50', 'Stark',                'Au: edel, kaum reagiert'],
        ['Cl₂ + 2e⁻ → 2Cl⁻',                        '+1,36', 'Stark',                'Cl⁻: schwach'],
        ['Cr₂O₇²⁻+14H⁺+6e⁻ → 2Cr³⁺+7H₂O',          '+1,33', 'Stark',                '—'],
        ['O₂ + 4H⁺ + 4e⁻ → 2H₂O',                   '+1,23', 'Wichtig (sauer)',       'H₂O: schwach'],
        ['Br₂ + 2e⁻ → 2Br⁻',                        '+1,07', 'Mittel-stark',          'Br⁻: schwach'],
        ['Ag⁺ + e⁻ → Ag',                            '+0,80', 'Mittelstark',           'Ag: edel'],
        ['Fe³⁺ + e⁻ → Fe²⁺',                         '+0,77', 'Mittelstark',           'Fe²⁺: mittel'],
        ['O₂ + 2H₂O + 4e⁻ → 4OH⁻',                  '+0,40', 'Mittel (neutral/bas.)', '—'],
        ['Cu²⁺ + 2e⁻ → Cu',                          '+0,34', 'Schwach-mittel',        'Cu: edel vs. Fe'],
        ['2H⁺ + 2e⁻ → H₂',                           '0,000', '← Referenz (SHE)',      '← Referenz'],
        ['Fe²⁺ + 2e⁻ → Fe',                          '−0,44', 'Schwach',               'Fe: unedel; Rosten'],
        ['Zn²⁺ + 2e⁻ → Zn',                          '−0,76', 'Sehr schwach',          'Zn: starkes Red.-Mittel'],
        ['Al³⁺ + 3e⁻ → Al',                          '−1,66', 'Sehr schwach',          'Al: sehr starkes Red.-Mittel'],
        ['Na⁺ + e⁻ → Na',                            '−2,71', 'Praktisch keine',       'Na: sehr starkes Red.-Mittel'],
        ['Li⁺ + e⁻ → Li',                            '−3,04', 'Stärkstes Ox.-Mittel', 'Li: stärkstes Red.-Mittel'],
      ],
      highlight: [0, 12, 17],
    })}

    <h3 class="lz-h3" style="margin-top:1.75rem;">Nernst-Gleichung und Konzentrationsabhängigkeit</h3>

    ${renderFormulaBox({
      label:   'Nernst-Gleichung (allgemein)',
      formula: 'E = E° + (R·T)/(n·F) · ln([Ox]/[Red]) &nbsp; Bei 25°C: E = E° + (0,0592/n) · lg([Ox]/[Red])',
      desc:    'n: Anzahl übertragener e⁻ · [Ox]: Konzentration der oxidierten Form · [Red]: Konzentration der reduzierten Form · Feste Metalle/Gase nach Konvention: Aktivität = 1 (p in bar für Gase)',
    })}

    ${renderTable({
      headers: ['Halbzelle', 'Nernst-Gleichung', 'Effekt bei Konzentrationsänderung'],
      rows: [
        ['Cu²⁺/Cu', 'E = 0,34 + (0,0592/2)·lg[Cu²⁺]', 'c(Cu²⁺) ↓ → E ↓ → weniger oxidierend'],
        ['Fe³⁺/Fe²⁺', 'E = 0,77 + 0,0592·lg([Fe³⁺]/[Fe²⁺])', '[Fe³⁺]/[Fe²⁺] ↑ → E ↑ → stärker oxidierend'],
        ['MnO₄⁻/Mn²⁺', 'E = 1,51 + (0,0592/5)·lg([MnO₄⁻][H⁺]⁸/[Mn²⁺])', 'pH ↑ → E sinkt stark (8H⁺ im Ausdruck!)'],
        ['H⁺/H₂', 'E = 0 + (0,0592/2)·lg([H⁺]²/p(H₂)) = −0,0592·pH', 'pH 7: E = −0,0592·7 = −0,414 V'],
        ['Zn²⁺/Zn', 'E = −0,76 + (0,0592/2)·lg[Zn²⁺]', 'c(Zn²⁺) ↓ → E ↓ → stärker reduzierend'],
      ],
      highlight: [2, 3],
    })}

    <h3 class="lz-h3" style="margin-top:1.75rem;">Redoxgleichgewichte — Zusammenhang K und E°</h3>

    ${renderFormulaBox({
      label:   'Zusammenhang K, ΔG° und E°_Zelle',
      formula: 'ΔG° = −n·F·E°_Zelle = −R·T·ln K &nbsp; → &nbsp; E°_Zelle = (R·T/nF)·ln K = (0,0592/n)·lg K',
      desc:    'Positive E°_Zelle (= K > 1): spontane Redoxreaktion · E°_Zelle = E°_Kathode − E°_Anode · Beispiel: Zn + Cu²⁺: E° = 0,34−(−0,76) = +1,10 V → K = 10^(n·E°/0,0592) = 10^(2·1,10/0,0592) = 10^37,2 → nahezu vollständig',
    })}

    ${renderTable({
      headers: ['Redoxreaktion', 'E°_Zelle [V]', 'ΔG° [kJ/mol]', 'K (25°C)', 'Beurteilung'],
      rows: [
        ['Zn + Cu²⁺ → Zn²⁺ + Cu',           '+1,10', '−212',  '~10³⁷',   'Vollständig (→)'],
        ['Fe + 2Fe³⁺ → 3Fe²⁺',              '+0,77', '−148',  '~10²⁵',   'Nahezu vollständig'],
        ['2Fe²⁺ + Cl₂ → 2Fe³⁺ + 2Cl⁻',     '+0,59', '−114',  '~10¹⁹',   'Vollständig'],
        ['Cu + 2Fe³⁺ → Cu²⁺ + 2Fe²⁺',      '+0,43', '−83',   '~10¹⁴',   'Vollständig'],
        ['2Br⁻ + Cl₂ → Br₂ + 2Cl⁻',        '+0,29', '−56',   '~10⁹·⁸',  'Vollständig'],
        ['2I⁻ + Cl₂ → I₂ + 2Cl⁻',          '+1,36−0,54=+0,82','−158','~10²⁷',  'Vollständig'],
        ['Cu + 2H⁺ → Cu²⁺ + H₂',            '−0,34', '+66',   '~10⁻¹¹',  'Nicht spontan (← bevorzugt)'],
        ['Ag + HCl → AgCl + ½H₂',           '−0,22', '+43',   '~10⁻⁷·³', 'Kaum spontan'],
      ],
      highlight: [0, 6],
    })}
  `; }

  // ══════════════════════════════════════════════════════════
  // 7.2.5 — Anwendungen von Redoxreaktionen
  // ══════════════════════════════════════════════════════════
  _anwendungen() { return `
    ${renderSubhead('7.2.5 — Anwendungen von Redoxreaktionen')}

    <h3 class="lz-h3">Redoxtitrationen</h3>
    <p class="lz-prose">
      Redoxtitrationen nutzen Oxidations-Reduktions-Reaktionen zur quantitativen
      Bestimmung von Stoffen. Das Äquivalenzprinzip: <strong>n(e⁻) übertragen = gleich</strong>.
    </p>

    ${renderTable({
      headers: ['Titrationstyp', 'Maßlösung', 'Halbreaktion Maßlösung', 'Indikation', 'Anwendungsbeispiele'],
      rows: [
        ['Permanganometrie',
         'KMnO₄ (0,02 mol/L)',
         'MnO₄⁻+8H⁺+5e⁻→Mn²⁺+4H₂O (E°=+1,51 V)',
         'Eigenindikation: violett → farblos; Endpunkt: bleibende Rosafärbung',
         'Fe²⁺, C₂O₄²⁻, H₂O₂, NO₂⁻; H₂SO₄-sauer'],
        ['Dichromametrie',
         'K₂Cr₂O₇ (0,01 mol/L)',
         'Cr₂O₇²⁻+14H⁺+6e⁻→2Cr³⁺+7H₂O (E°=+1,33 V)',
         'Diphenylaminosulfat (Indikator; blauviolett → grün am ÄP)',
         'Fe²⁺-Gehalt (Titrierkurve); Alkohol-Bestimmung im Blut (ehem. Atemalkohol)'],
        ['Iodometrie',
         'Na₂S₂O₃ (Thiosulfat)',
         '2S₂O₃²⁻ → S₄O₆²⁻ + 2e⁻ (Tetrathionat)',
         'Stärke-Lösung: blau → farblos am ÄP',
         'Cl₂, Br₂, I₂, H₂O₂, Cu²⁺, AsO₄³⁻; sehr genau'],
        ['Cerimetrie',
         'Ce(SO₄)₂ oder (NH₄)₂Ce(NO₃)₆',
         'Ce⁴⁺ + e⁻ → Ce³⁺ (E°=+1,44 V in H₂SO₄)',
         'Ferroin-Indikator (blau→rot); oder potentiometrisch',
         'Fe²⁺, Oxalat, As(III); stabiler als KMnO₄'],
        ['Bromatometrie',
         'KBrO₃',
         'BrO₃⁻+6H⁺+6e⁻→Br⁻+3H₂O (E°=+1,44 V)',
         'Methylrot oder Methyl-Orange (entfärbt sich am ÄP)',
         'Arsen(III), Antimon(III), organische Verbindungen'],
      ],
      highlight: [0, 2],
    })}

    <h3 class="lz-h3" style="margin-top:1.75rem;">Redoxreaktionen in der Natur und Technik</h3>

    ${renderAccordion([
      {
        title: 'Fotosynthese und Zellatmung — biologische Redoxketten',
        content: `<p class="lz-prose"><strong>Fotosynthese (lichtgetrieben, endergon):</strong><br>
                  6CO₂ + 6H₂O + Lichtenergie → C₆H₁₂O₆ + 6O₂<br>
                  Lichtreaktion: H₂O → O₂ + 4H⁺ + 4e⁻ (Oxidation, PSII)<br>
                  Dunkelreaktion: CO₂ + 4H⁺ + 4e⁻ → CH₂O + H₂O (Reduktion, Calvin-Zyklus)<br>
                  Elektronen fließen von H₂O → Plastochinon → Cytb₆f → Plastocyanin → PSI → NADP⁺ → NADPH<br><br>
                  <strong>Zellatmung (spontan, exergon):</strong><br>
                  C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O · ΔG° = −2870 kJ/mol<br>
                  Elektronen fließen von NADH → Komplex I → Ubichinon → Komplex III → Cytochrom c → Komplex IV → O₂<br>
                  Protonengradient treibt ATP-Synthase an (chemiosmotisches Prinzip).</p>`,
      },
      {
        title: 'Rost und Korrosionsschutz',
        content: `<p class="lz-prose"><strong>Eisenkorrosion — elektrochemisches Lokalelement:</strong><br>
                  Anode (Fe): Fe → Fe²⁺ + 2e⁻ (E° = −0,44 V)<br>
                  Kathode (O₂, feucht): O₂ + 2H₂O + 4e⁻ → 4OH⁻ (E° = +0,40 V)<br>
                  E_Zelle = 0,40−(−0,44) = +0,84 V → ΔG° = −4·96485·0,84 = −324 kJ/mol → spontan<br>
                  Produkt: Fe(OH)₂ → Fe(OH)₃ → Fe₂O₃·nH₂O (Rost)<br><br>
                  <strong>Korrosionsschutz-Methoden:</strong><br>
                  ① Passivierung: Cr-Zugabe → Cr₂O₃-Deckschicht (Edelstahl, mind. 10,5% Cr)<br>
                  ② Opferanode: Zn (E°=−0,76 V) schützter Fe; auch Mg-Anode bei Schiffen<br>
                  ③ Beschichtung: Lack, Zinkchromat, Zinnplatierung (Weißblech)<br>
                  ④ Kathodischer Schutz: externe Gleichspannung macht Fe zur Kathode<br>
                  ⑤ Inhibitoren: Phosphorsäure bildet Fe₃(PO₄)₂-Schutzschicht</p>`,
      },
      {
        title: 'Metallgewinnung — Redoxreaktionen im Hochofen und durch Elektrolyse',
        content: `<p class="lz-prose"><strong>Hochofen — Eisengewinnung (Reduktion durch CO):</strong><br>
                  Direkte Reduktion (hohe T): Fe₂O₃ + 3CO → 2Fe + 3CO₂<br>
                  CO-Erzeugung: C + O₂ → CO₂ · CO₂ + C → 2CO (Boudouard-GG)<br>
                  Eisengewinnung: Fe₂O₃ → Fe₃O₄ → FeO → Fe (stufenweise Reduktion)<br>
                  Roheisen: 3–4% C, 1% Si, 1% Mn → Stahl: C < 2,14% durch Frischen (O₂-Einblasen)<br><br>
                  <strong>Aluminiumgewinnung — Schmelzflusselektrolyse (Hall-Héroult):</strong><br>
                  Al₂O₃ gelöst in Kryolith (Na₃AlF₆) bei 960°C<br>
                  Kathode: Al³⁺ + 3e⁻ → Al(l)<br>
                  Anode (C): 2O²⁻ → O₂ + 4e⁻ (Anoden werden dabei verbraucht!)<br>
                  Energiebedarf: ~13 kWh/kg Al → sehr energieintensiv → Recycling wichtig (5% der Energie)</p>`,
      },
      {
        title: 'Bleichen und Desinfektion — Oxidationsmittel im Alltag',
        content: `<p class="lz-prose"><strong>Chlor und Hypochlorit:</strong><br>
                  Cl₂ + H₂O ⇌ HClO + HCl · HClO: aktives Bleichmittel und Desinfektionsmittel<br>
                  HClO + organische Farbstoffe → Oxidation → Entfärbung<br>
                  Wasseraufbereitung: Cl₂ oder NaOCl (Natriumhypochlorit) → pH 6,5–7,5 optimal<br>
                  Desinfektionswirkung: HClO oxidiert bakterielle Enzyme → Abtötung<br><br>
                  <strong>Wasserstoffperoxid H₂O₂:</strong><br>
                  H₂O₂ + organische Verbindungen → Oxidation · Blondiermittel (Haare, 6–12%)<br>
                  H₂O₂ → H₂O + ½O₂ (zerfällt; durch Fe³⁺/MnO₂ katalysiert)<br>
                  Medizinisch: 3% für Wunddesinfektion · 30% (Perhydrol) für Labor<br>
                  Rakete: 90% H₂O₂ + Katalysator → Dampfstrahl (Monopropellant)<br><br>
                  <strong>Ozon O₃:</strong><br>
                  O₃ + H₂O → HO• + HO₂• (Hydroxy-Radikal; sehr reaktiv)<br>
                  Trinkwasseraufbereitung: keimtötend ohne Chlorgeschmack · teuer; instabil</p>`,
      },
    ])}

    ${renderInfobox({
      type: 'success', icon: 'fas fa-graduation-cap', title: 'Zusammenfassung — Redoxreaktionen',
      body: `<strong>Oxidation:</strong> Elektronenabgabe · OZ erhöht · Reduktionsmittel<br>
             <strong>Reduktion:</strong> Elektronenaufnahme · OZ erniedrigt · Oxidationsmittel<br>
             <strong>OZ-Regeln:</strong> Elemente=0 · einfache Ionen=Ladung · O=−2 (Ausn.: Peroxide −1) · H=+1 (Ausn.: Hydride −1) · Summe=0/Ladung<br>
             <strong>Redoxgleichungen (Halbzellenmethod.):</strong> Atome → O (H₂O) → H (H⁺) → Ladung (e⁻) → kgV<br>
             <strong>Spannungsreihe:</strong> E° steigt von Li (−3,04V) bis F₂ (+2,87V) · unedel = starkes Red.-Mittel<br>
             <strong>Nernst:</strong> E = E° + (0,0592/n)·lg([Ox]/[Red]) · pH-Abhängigkeit bei H⁺ im Ausdruck<br>
             <strong>Zellspannung:</strong> E_Zelle = E°_Kathode − E°_Anode · ΔG° = −nFE°<br>
             <strong>K:</strong> lg K = n·E°/0,0592 · E° > 0 → K > 1 → spontan`,
    })}
  `; }

  init() {
    i18n.init();
    initScrollReveal();
    initInteractive(document);
    initTabs();
  }
}