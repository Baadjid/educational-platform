// pages/projekte/lernzettel/faecher/chemie/themen/7/7-1.js
// Kapitel 7.1 — Säuren und Basen
// 7.1.1  Säure-Base-Theorie nach Brønsted
// 7.1.2  Säure-Base-Gleichgewichte
// 7.1.3  Amphoterie
// 7.1.4  Neutralisationsreaktionen
// 7.1.5  Säure-Base-Theorie nach Lewis
// 7.1.6  Säuren und Basen im Alltag

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
  { key: '711', icon: 'fas fa-vials',          label: '7.1.1 Brønsted-Theorie'     },
  { key: '712', icon: 'fas fa-chart-line',      label: '7.1.2 Säure-Base-GG'       },
  { key: '713', icon: 'fas fa-exchange-alt',    label: '7.1.3 Amphoterie'          },
  { key: '714', icon: 'fas fa-equals',          label: '7.1.4 Neutralisation'      },
  { key: '715', icon: 'fas fa-atom',            label: '7.1.5 Lewis-Theorie'       },
  { key: '716', icon: 'fas fa-home',            label: '7.1.6 Alltag'              },
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
  return `<nav class="wim-tabs" role="tablist" id="tabs71">${nav}</nav>${panels}`;
}

function initTabs() {
  const nav = document.getElementById('tabs71');
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

export default class Chemie_7_1 {
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
          <i class="fas fa-chevron-right"></i><span>7.1</span>
        </div>
        <h1 class="lz-sub-title">Säuren und Basen<br><em>Brønsted, Lewis und Gleichgewichte</em></h1>
        <p class="lz-sub-desc">
          Protonenübertragung · pH-Wert · K_s, K_b, K_w ·
          Amphoterie · Puffer · Neutralisation · Lewis-Säuren/-Basen
        </p>
        ${renderTags(['Kap. 7.1', 'Säuren', 'Basen', 'pH-Wert', 'Puffer', 'LK Chemie BW'])}
      </div>
    </section>

    <section class="lz-content-section">
      <div class="lz-section-wrap">
        ${buildWimHTML(k => {
          if (k === '711') return this._bronsted();
          if (k === '712') return this._gleichgewicht();
          if (k === '713') return this._amphoterie();
          if (k === '714') return this._neutralisation();
          if (k === '715') return this._lewis();
          if (k === '716') return this._alltag();
          return '';
        })}
      </div>
    </section>

    <section class="lz-content-section" style="padding:1.5rem 0 3rem;">
      <div class="lz-section-wrap">
        ${renderPageNav({
          prev: { label: '6.3 Anwendungen des MWG',  link: `${BASE}/themen/6/6-3` },
          next: { label: '7.2 Redoxreaktionen',       link: `${BASE}/themen/7/7-2` },
        }, BASE)}
      </div>
    </section>
    ${footerHTML(this.router)}
  `; }

  // ══════════════════════════════════════════════════════════
  // 7.1.1 — Säure-Base-Theorie nach Brønsted
  // ══════════════════════════════════════════════════════════
  _bronsted() { return `
    ${renderSubhead('7.1.1 — Säure-Base-Theorie nach Brønsted')}

    <h2 class="lz-h2">Historische Entwicklung der Säure-Base-Konzepte</h2>

    ${renderTable({
      headers: ['Theorie', 'Autor / Jahr', 'Säure-Definition', 'Basen-Definition', 'Reichweite'],
      rows: [
        ['Arrhenius',   '1884', 'Liefert H⁺ in wässriger Lösung: HCl → H⁺ + Cl⁻', 'Liefert OH⁻ in wässriger Lösung: NaOH → Na⁺ + OH⁻', 'Nur wässrige Lösungen; sehr eingeschränkt'],
        ['Brønsted-Lowry','1923','Protonendonator: gibt H⁺ ab', 'Protonenakzeptor: nimmt H⁺ auf', 'Wässrige und nichtwässrige Lösungen; sehr allgemein'],
        ['Lewis',        '1923','Elektronenpaarakzeptor: nimmt EP auf', 'Elektronenpaardonator: gibt EP ab', 'Umfassendste Definition; erfasst auch protonenfreie Reaktionen'],
      ],
      highlight: [1],
    })}

    <h3 class="lz-h3" style="margin-top:1.75rem;">Brønsted-Lowry-Theorie — Protonenübertragung</h3>
    <p class="lz-prose">
      Nach <strong>Brønsted und Lowry</strong> (1923) sind Säure-Base-Reaktionen
      immer <strong>Protonenübertragungen</strong>: Eine Säure (HA) gibt ein Proton H⁺
      an eine Base (B) ab. Es entstehen immer ein <strong>korrespondierendes Paar</strong>
      aus Säure und konjugierter Base sowie ein zweites aus Base und konjugierter Säure.
    </p>

    ${renderFormulaBox({
      label:   'Allgemeines Brønsted-Schema',
      formula: 'HA + B ⇌ A⁻ + BH⁺',
      desc:    'HA = Säure (Protonendonator) · B = Base (Protonenakzeptor) · A⁻ = konjugierte Base zu HA (korrespondierendes Paar: HA/A⁻) · BH⁺ = konjugierte Säure zu B (korrespondierendes Paar: B/BH⁺)',
    })}

    ${renderTable({
      headers: ['Reaktion', 'Säure₁', 'Base₂', 'Konj. Base₁', 'Konj. Säure₂', 'Richtung'],
      rows: [
        ['HCl + H₂O ⇌ H₃O⁺ + Cl⁻',       'HCl',       'H₂O',     'Cl⁻',       'H₃O⁺',      '→ vollständig (starke Säure)'],
        ['NH₃ + H₂O ⇌ NH₄⁺ + OH⁻',       'H₂O',       'NH₃',     'OH⁻',       'NH₄⁺',      '← überwiegend (schwache Base)'],
        ['CH₃COOH + H₂O ⇌ H₃O⁺ + CH₃COO⁻','CH₃COOH',  'H₂O',     'CH₃COO⁻',  'H₃O⁺',      '← überwiegend (schwache Säure)'],
        ['HF + NH₃ ⇌ F⁻ + NH₄⁺',          'HF',        'NH₃',     'F⁻',        'NH₄⁺',      '→ bevorzugt'],
        ['H₂SO₄ + HNO₃ ⇌ H₃SO₄⁺ + NO₃⁻', 'H₂SO₄',    'HNO₃',    'HSO₄⁻',    'H₂NO₃⁺',   'Nichtw. LM: Säure als Base!'],
        ['NH₄⁺ + OH⁻ ⇌ NH₃ + H₂O',        'NH₄⁺',      'OH⁻',     'NH₃',       'H₂O',       '→ vollständig'],
      ],
      highlight: [0, 2],
    })}

    <h3 class="lz-h3" style="margin-top:1.75rem;">Korrespondierende Säure-Base-Paare</h3>
    <p class="lz-prose">
      Jede Säure hat genau eine <strong>konjugierte Base</strong> (= Säure minus H⁺)
      und jede Base eine <strong>konjugierte Säure</strong> (= Base plus H⁺).
      Zwischen den Stärken gilt: <em>Eine starke Säure hat eine schwache konjugierte Base —
      und umgekehrt.</em>
    </p>

    ${renderTable({
      headers: ['Säure (HA)', 'K_s (25°C)', 'pK_s', 'Konjugierte Base (A⁻)', 'Stärke der konj. Base'],
      rows: [
        ['HClO₄ (Perchlorsäure)',  '~10¹⁰',    '~−10',  'ClO₄⁻',     'Extrem schwach (praktisch keine Base)'],
        ['HI',                     '~10⁹',     '~−9',   'I⁻',         'Nahezu keine Basizität'],
        ['HBr',                    '~10⁸',     '~−8',   'Br⁻',        'Nahezu keine Basizität'],
        ['HCl',                    '~10⁶',     '~−6',   'Cl⁻',        'Nahezu keine Basizität'],
        ['H₂SO₄ (1. Stufe)',       '~10³',     '~−3',   'HSO₄⁻',      'Sehr schwach; selbst eine Säure (pK_s=1,99)'],
        ['HNO₃',                   '~25',      '~−1,4', 'NO₃⁻',       'Praktisch keine Basizität'],
        ['H₃O⁺',                   '55,5',     '−1,74', 'H₂O',        'Extrem schwach'],
        ['HSO₄⁻',                  '1,2·10⁻²', '1,99',  'SO₄²⁻',      'Sehr schwach'],
        ['H₂SO₃',                  '1,2·10⁻²', '1,92',  'HSO₃⁻',      'Schwach'],
        ['H₃PO₄',                  '7,5·10⁻³', '2,12',  'H₂PO₄⁻',    'Schwach'],
        ['HF',                     '3,5·10⁻⁴', '3,45',  'F⁻',         'Schwach; basischer als Cl⁻'],
        ['CH₃COOH (Essigsäure)',   '1,8·10⁻⁵', '4,75',  'CH₃COO⁻',   'Schwach; Pufferbase'],
        ['H₂CO₃',                  '4,3·10⁻⁷', '6,37',  'HCO₃⁻',      'Mittelschwach; Blutpuffer'],
        ['H₂S',                    '9,5·10⁻⁸', '7,02',  'HS⁻',        'Mittelschwach'],
        ['NH₄⁺',                   '5,6·10⁻¹⁰','9,25',  'NH₃',        'Mittlere Base'],
        ['HCO₃⁻',                  '4,7·10⁻¹¹','10,33', 'CO₃²⁻',      'Mittlere Base'],
        ['HPO₄²⁻',                 '4,8·10⁻¹³','12,32', 'PO₄³⁻',      'Starke Base'],
        ['H₂O',                    '1,8·10⁻¹⁶','15,74', 'OH⁻',        'Starke Base'],
        ['NH₃',                    '~10⁻³⁸',   '~38',   'NH₂⁻',       'Extrem starke Base'],
      ],
      highlight: [0, 5, 11, 14],
    })}

    ${renderInfobox({
      type: 'warning', icon: 'fas fa-exclamation-triangle', title: 'Wichtige Merkregel: Säure- und Basenstärke',
      body: `<strong>Je stärker die Säure, desto schwächer die konjugierte Base — und umgekehrt.</strong><br><br>
             Starke Säuren (HCl, HBr, HNO₃): vollständige Dissoziation in Wasser → K_s >> 1 → konj. Base praktisch inaktiv.<br>
             Schwache Säuren (CH₃COOH, HF): teilweise Dissoziation → K_s << 1 → konj. Base merklich basisch.<br><br>
             <strong>Richtung der Protonenübertragung:</strong>
             Immer von der stärkeren Säure zur stärkeren Base (Gleichgewicht liegt auf der Seite der schwächeren Säure und schwächeren Base).`,
    })}
  `; }

  // ══════════════════════════════════════════════════════════
  // 7.1.2 — Säure-Base-Gleichgewichte
  // ══════════════════════════════════════════════════════════
  _gleichgewicht() { return `
    ${renderSubhead('7.1.2 — Säure-Base-Gleichgewichte')}

    <h3 class="lz-h3">Das Ionenprodukt des Wassers K_w</h3>
    <p class="lz-prose">
      Reines Wasser dissoziiert in einem sehr kleinen Ausmaß — die
      <strong>Autoprotolyse des Wassers</strong>. Das zugehörige Gleichgewicht
      beschreibt das Ionenprodukt K_w.
    </p>

    ${renderFormulaBox({
      label:   'Autoprotolyse des Wassers',
      formula: '2H₂O ⇌ H₃O⁺ + OH⁻ &nbsp; K_w = [H₃O⁺][OH⁻] = 10⁻¹⁴ (25°C)',
      desc:    'K_w = 10⁻¹⁴ mol²/L² bei 25°C · K_w steigt mit T (endotherm) · Bei 0°C: K_w = 1,1·10⁻¹⁵ · Bei 100°C: K_w = 5,5·10⁻¹³ · Neutral: [H₃O⁺] = [OH⁻] = 10⁻⁷ mol/L (bei 25°C)',
    })}

    <h3 class="lz-h3" style="margin-top:1.75rem;">pH-Wert und pOH-Wert</h3>

    ${renderFormulaBox({
      label:   'pH-Definition und Zusammenhang mit pOH',
      formula: 'pH = −lg[H₃O⁺] &nbsp; · &nbsp; pOH = −lg[OH⁻] &nbsp; · &nbsp; pH + pOH = 14 (bei 25°C)',
      desc:    '[H₃O⁺] [mol/L] · pH < 7: sauer · pH = 7: neutral (bei 25°C) · pH > 7: basisch · Achtung: pH = 7 ist nur bei 25°C neutral! Bei höherer T ist neutral-pH < 7.',
    })}

    ${renderTable({
      headers: ['[H₃O⁺] [mol/L]', 'pH', '[OH⁻] [mol/L]', 'pOH', 'Milieu'],
      rows: [
        ['1',          '0',   '10⁻¹⁴', '14',  'Stark sauer (1 mol/L HCl)'],
        ['10⁻¹',       '1',   '10⁻¹³', '13',  'Sehr sauer'],
        ['10⁻²',       '2',   '10⁻¹²', '12',  'Sauer (Magensaft pH 1–2)'],
        ['10⁻³',       '3',   '10⁻¹¹', '11',  'Sauer (Essig pH 3)'],
        ['10⁻⁴',       '4',   '10⁻¹⁰', '10',  'Schwach sauer (Kaffee pH 5)'],
        ['10⁻⁷',       '7',   '10⁻⁷',  '7',   'Neutral (reines H₂O bei 25°C)'],
        ['10⁻⁹',       '9',   '10⁻⁵',  '5',   'Schwach basisch (Meerwasser pH 8,2)'],
        ['10⁻¹¹',      '11',  '10⁻³',  '3',   'Basisch (Haushaltsreiniger pH 11)'],
        ['10⁻¹³',      '13',  '10⁻¹',  '1',   'Stark basisch (Natronlauge)'],
        ['10⁻¹⁴',      '14',  '1',     '0',   'Extrem basisch (1 mol/L NaOH)'],
      ],
      highlight: [5],
    })}

    <h3 class="lz-h3" style="margin-top:1.75rem;">Säurekonstante K_s und Basenkonstante K_b</h3>

    ${renderFormulaBox({
      label:   'Säurekonstante K_s (auch K_a)',
      formula: 'HA + H₂O ⇌ H₃O⁺ + A⁻ &nbsp;→&nbsp; K_s = [H₃O⁺][A⁻] / [HA]',
      desc:    'K_s [mol/L] · pK_s = −lg K_s · Je kleiner pK_s (je größer K_s), desto stärker die Säure · H₂O erscheint nicht im Ausdruck (Aktivität des reinen Lösungsmittels = 1)',
    })}

    ${renderFormulaBox({
      label:   'Basenkonstante K_b und Zusammenhang mit K_s',
      formula: 'B + H₂O ⇌ BH⁺ + OH⁻ &nbsp;→&nbsp; K_b = [BH⁺][OH⁻] / [B] &nbsp;·&nbsp; K_s · K_b = K_w = 10⁻¹⁴',
      desc:    'K_b des konjugierten Paar-Partners: K_b(A⁻) = K_w / K_s(HA) · pK_s + pK_b = 14 · NH₃: K_b = 1,8·10⁻⁵; pK_b = 4,75; pK_s(NH₄⁺) = 9,25',
    })}

    <h3 class="lz-h3" style="margin-top:1.75rem;">pH-Berechnung für verschiedene Systeme</h3>

    ${renderTable({
      headers: ['System', 'Näherungsformel', 'Gültig wenn', 'Beispiel'],
      rows: [
        ['Starke Säure (c mol/L)',
         'pH = −lg c',
         'c ≥ 10⁻⁶ mol/L (sonst H₂O-Beitrag)',
         'c(HCl) = 0,01 M → pH = 2,00'],
        ['Schwache Säure (K_s, c)',
         'pH = ½(pK_s − lg c) = ½(pK_s + pC)',
         'c >> K_s (Näherung: α << 1; gilt wenn K_s/c < 0,01)',
         'c(CH₃COOH) = 0,1 M, pK_s=4,75 → pH = ½(4,75+1) = 2,88'],
        ['Starke Base (c mol/L)',
         'pOH = −lg c → pH = 14 − pOH',
         'c ≥ 10⁻⁶ mol/L',
         'c(NaOH) = 0,01 M → pOH = 2 → pH = 12'],
        ['Schwache Base (K_b, c)',
         'pOH = ½(pK_b − lg c)',
         'c >> K_b',
         'c(NH₃) = 0,1 M, pK_b=4,75 → pOH = ½(4,75+1) = 2,88 → pH = 11,12'],
        ['Pufferlösung (HA + A⁻)',
         'pH = pK_s + lg([A⁻]/[HA])',
         'Henderson-Hasselbalch; gut bei [A⁻]/[HA] = 0,1–10',
         'Acetat-Puffer: [CH₃COO⁻]=[CH₃COOH] → pH = pK_s = 4,75'],
        ['Ampholyt (z.B. HCO₃⁻)',
         'pH ≈ ½(pK_s1 + pK_s2)',
         'Näherung für Zwischenstufe einer mehrprot. Säure',
         'HCO₃⁻: pH ≈ ½(6,37+10,33) = 8,35'],
        ['Salz starker Säure/starker Base',
         'pH = 7 (25°C)',
         'Vollständige Dissoziation, keine Hydrolyse',
         'NaCl, KNO₃, Na₂SO₄'],
        ['Salz schwacher Säure/starker Base',
         'pH = 7 + ½pK_s + ½lg c',
         'Hydrolyse der konjugierten Base',
         'CH₃COONa 0,1 M: pH = 7 + ½(4,75) + ½(−1) = 8,88'],
        ['Salz starker Säure/schwacher Base',
         'pH = 7 − ½pK_b − ½lg c',
         'Hydrolyse des konjugierten Salzes',
         'NH₄Cl 0,1 M: pH = 7 − ½(4,75) − ½(−1) = 5,12'],
      ],
      highlight: [0, 2, 4],
    })}

    <h3 class="lz-h3" style="margin-top:1.75rem;">Pufferlösungen — Theorie und Berechnung</h3>
    <p class="lz-prose">
      Ein <strong>Puffer</strong> ist eine Lösung, die pH-Änderungen bei Zugabe
      von Säure oder Base weitgehend abfängt. Er besteht aus einer schwachen Säure
      und ihrer konjugierten Base (oder umgekehrt).
    </p>

    ${renderFormulaBox({
      label:   'Henderson-Hasselbalch-Gleichung',
      formula: 'pH = pK_s + lg([A⁻]/[HA])',
      desc:    '[A⁻]: Konzentration der konjugierten Base · [HA]: Konzentration der Säure · Pufferoptimum: [A⁻] = [HA] → pH = pK_s · Pufferbereich: pH = pK_s ± 1 (Verhältnis 1:10 bis 10:1)',
    })}

    ${renderTable({
      headers: ['Puffersystem', 'pK_s', 'Pufferbereich', 'Biologische/Praktische Bedeutung'],
      rows: [
        ['CH₃COOH / CH₃COO⁻',   '4,75', '3,75–5,75',  'Essigpuffer; Lebensmittelchemie; Labor'],
        ['H₂CO₃ / HCO₃⁻',       '6,37', '5,37–7,37',  'Blutpuffer (1. System): verhindert pH-Abfall bei Stoffwechselsäuren'],
        ['H₂PO₄⁻ / HPO₄²⁻',    '7,21', '6,21–8,21',  'Blutpuffer (2. System); Zellinneres; Laborpuffer (PBS)'],
        ['HCO₃⁻ / CO₃²⁻',       '10,33','9,33–11,33', 'Alkalischer Bereich'],
        ['NH₄⁺ / NH₃',           '9,25', '8,25–10,25', 'Basischer Puffer'],
        ['TRIS-Puffer',           '8,06', '7,0–9,0',    'Biochemie-Labor; stabil, nicht metabolisch'],
        ['HEPES',                 '7,55', '6,8–8,2',    'Zellkultur; physiologische Puffer'],
      ],
      highlight: [1, 2],
    })}

    ${renderInfobox({
      type: 'blue', icon: 'fas fa-heartbeat', title: 'Blutpuffer — Leben hängt am pH',
      body: `Normaler Blut-pH: 7,35–7,45. Abweichung um ±0,4 → lebensbedrohlich.<br><br>
             <strong>CO₂/HCO₃⁻-System (Hauptpuffer):</strong><br>
             CO₂(aq) + H₂O ⇌ H₂CO₃ ⇌ H⁺ + HCO₃⁻ (pK_s = 6,1 effektiv)<br>
             [HCO₃⁻]/[CO₂] ≈ 20:1 im Blut → pH = 6,1 + lg(20) = 6,1 + 1,3 = <strong>7,4</strong><br><br>
             <strong>Regulation:</strong><br>
             Säureüberschuss (Azidose): Lunge atmet mehr CO₂ ab (pH ↑); Niere scheidet H⁺ aus<br>
             Baseüberschuss (Alkalose): weniger Atemzüge → CO₂ steigt → pH ↓<br><br>
             Henderson-Hasselbalch: pH = pK_s + lg([HCO₃⁻]/[CO₂]) = 6,10 + lg(24/1,2) = <strong>7,40</strong>`,
    })}
  `; }

  // ══════════════════════════════════════════════════════════
  // 7.1.3 — Amphoterie
  // ══════════════════════════════════════════════════════════
  _amphoterie() { return `
    ${renderSubhead('7.1.3 — Amphoterie')}

    <h3 class="lz-h3">Amphotere Stoffe — sowohl Säure als auch Base</h3>
    <p class="lz-prose">
      Ein <strong>amphoterer Stoff</strong> (Ampholyt) kann sowohl als Säure
      (Protonendonator) als auch als Base (Protonenakzeptor) reagieren,
      je nach Reaktionspartner. Er hat sowohl einen protonierbaren
      als auch einen deprotonierbaren Teil.
    </p>

    ${renderMerkboxGrid([
      {
        icon: 'fas fa-tint',
        title: 'Wasser — der klassische Ampholyt',
        text: `Als Säure: H₂O + NH₃ ⇌ OH⁻ + NH₄⁺ (gibt H⁺ an NH₃ ab)
               Als Base: H₂O + HCl → H₃O⁺ + Cl⁻ (nimmt H⁺ von HCl auf)
               Autoprotolyse: 2H₂O ⇌ H₃O⁺ + OH⁻ (H₂O ist Säure UND Base)`,
      },
      {
        icon: 'fas fa-minus',
        title: 'Zwischenstufen mehrprotiger Säuren',
        text: `H₂CO₃ → HCO₃⁻ → CO₃²⁻
               HCO₃⁻ ist Ampholyt: Als Säure → CO₃²⁻ + H⁺; als Base → H₂CO₃
               H₂PO₄⁻ und HPO₄²⁻ sind ebenfalls Ampholyte.
               pH des Ampholyten ≈ ½(pK_s1 + pK_s2)`,
      },
      {
        icon: 'fas fa-atom',
        title: 'Aminosäuren — biologische Ampholyte',
        text: `Aminosäuren tragen sowohl eine Amino- (-NH₂, Base) als auch
               eine Carboxylgruppe (-COOH, Säure).
               Im zwitterionischen Zustand: -NH₃⁺ / -COO⁻
               Isoelektrischer Punkt pI = ½(pK_s1 + pK_s2): keine Nettoladu.`,
      },
      {
        icon: 'fas fa-layer-group',
        title: 'Amphotere Hydroxide',
        text: `Al(OH)₃, Zn(OH)₂, Cr(OH)₃, Pb(OH)₂ lösen sich sowohl
               in Säure als auch in starker Base.
               In Säure: Al(OH)₃ + 3H⁺ → Al³⁺ + 3H₂O
               In Lauge: Al(OH)₃ + OH⁻ → [Al(OH)₄]⁻ (Tetrahydroxoaluminat)`,
      },
    ])}

    <h3 class="lz-h3" style="margin-top:1.75rem;">Amphotere Metall-Hydroxide im Detail</h3>

    ${renderTable({
      headers: ['Hydroxid', 'Reaktion mit Säure', 'Reaktion mit Base', 'Anion in Lauge', 'Bedeutung'],
      rows: [
        ['Al(OH)₃', 'Al(OH)₃ + 3HCl → AlCl₃ + 3H₂O', 'Al(OH)₃ + NaOH → Na[Al(OH)₄]', '[Al(OH)₄]⁻ (Tetrahydroxoaluminat)', 'Tonerdehydrat; Antazida; Aluminiumproduktion'],
        ['Zn(OH)₂', 'Zn(OH)₂ + 2HCl → ZnCl₂ + 2H₂O', 'Zn(OH)₂ + 2NaOH → Na₂[Zn(OH)₄]', '[Zn(OH)₄]²⁻ (Tetrahydroxozinkat)', 'Galvanische Zink-Beschichtung'],
        ['Cr(OH)₃', 'Cr(OH)₃ + 3HCl → CrCl₃ + 3H₂O', 'Cr(OH)₃ + NaOH → Na[Cr(OH)₄]', '[Cr(OH)₄]⁻', 'Chromgerberei; Pigmente'],
        ['Pb(OH)₂', 'Pb(OH)₂ + 2HNO₃ → Pb(NO₃)₂ + 2H₂O', 'Pb(OH)₂ + 2NaOH → Na₂[Pb(OH)₄]', '[Pb(OH)₄]²⁻ (Plumbat)', 'Blei-Akkumulator'],
        ['Be(OH)₂', 'Be(OH)₂ + H₂SO₄ → BeSO₄ + 2H₂O', 'Be(OH)₂ + 2NaOH → Na₂[Be(OH)₄]', '[Be(OH)₄]²⁻ (Beryllat)', 'Beryllium selten; toxisch'],
      ],
      highlight: [0, 1],
    })}

    <h3 class="lz-h3" style="margin-top:1.75rem;">Aminosäuren — Amphoterie biologischer Moleküle</h3>

    ${renderTable({
      headers: ['pH-Bereich', 'Ladungszustand', 'Dominante Form', 'Bezeichnung'],
      rows: [
        ['pH << pI (stark sauer)', 'Gesamt positiv (+1)', 'H₃N⁺–CHR–COOH', 'Kation (vollständig protoniert)'],
        ['pH = pI (isoelektrisch)', 'Gesamt neutral (0)', 'H₃N⁺–CHR–COO⁻', 'Zwitterion (amphoter)'],
        ['pH >> pI (stark basisch)', 'Gesamt negativ (−1)', 'H₂N–CHR–COO⁻', 'Anion (vollständig deprotoniert)'],
      ],
      highlight: [1],
    })}

    ${renderTable({
      headers: ['Aminosäure', 'pK_s1 (-COOH)', 'pK_s2 (-NH₃⁺)', 'pI = ½(pK_s1+pK_s2)', 'Seitenkettengruppe'],
      rows: [
        ['Glycin (Gly, G)',      '2,35', '9,78',  '6,06',  'H (keine Seitenkette)'],
        ['Alanin (Ala, A)',      '2,35', '9,87',  '6,11',  'CH₃'],
        ['Glutaminsäure (Glu,E)','2,10', '9,47',  '3,22',  '-CH₂-CH₂-COOH (sauer; pK_R=4,07)'],
        ['Lysin (Lys, K)',       '2,16', '10,67', '9,74',  '-CH₂-CH₂-CH₂-CH₂-NH₂ (basisch)'],
        ['Histidin (His, H)',    '1,82', '9,17',  '7,64',  'Imidazolring (pK_R=6,00; wichtig für Enzymkatalyse)'],
        ['Cystein (Cys, C)',     '1,92', '10,70', '5,07',  '-CH₂-SH (pK_R=8,18; Disulfidbrücken)'],
      ],
      highlight: [0, 2, 3],
    })}
  `; }

  // ══════════════════════════════════════════════════════════
  // 7.1.4 — Neutralisationsreaktionen
  // ══════════════════════════════════════════════════════════
  _neutralisation() { return `
    ${renderSubhead('7.1.4 — Neutralisationsreaktionen')}

    <h3 class="lz-h3">Grundprinzip der Neutralisation</h3>
    <p class="lz-prose">
      Bei einer <strong>Neutralisationsreaktion</strong> reagiert eine Säure mit einer Base.
      Im Kern handelt es sich immer um die Reaktion von H₃O⁺ und OH⁻
      — die Netto-Ionengleichung ist bei starken Säuren und Basen immer:
    </p>

    ${renderFormulaBox({
      label:   'Netto-Ionengleichung der Neutralisation (starke Säure + starke Base)',
      formula: 'H₃O⁺(aq) + OH⁻(aq) → 2H₂O(l) &nbsp; ΔH° = −57,3 kJ/mol',
      desc:    'Dies ist die Neutralisationsenthalpie ΔH_N für starke Säuren/Basen · Bei schwachen Säuren/Basen: ΔH_N < −57,3 kJ/mol (weniger exotherm, da Dissoziationsenergie nötig)',
    })}

    ${renderTable({
      headers: ['Reaktionstyp', 'Gleichung', 'Produkt-pH', 'ΔH_N [kJ/mol]', 'Erklärung'],
      rows: [
        ['Starke Säure + starke Base', 'HCl + NaOH → NaCl + H₂O', '= 7 (neutral)', '−57,3', 'NaCl: kein Hydrolyse'],
        ['Starke Säure + schwache Base', 'HCl + NH₃ → NH₄Cl', '< 7 (sauer)', '−52,2', 'NH₄⁺ hydrolysiert: NH₄⁺ + H₂O ⇌ NH₃ + H₃O⁺'],
        ['Schwache Säure + starke Base', 'CH₃COOH + NaOH → CH₃COONa + H₂O', '> 7 (basisch)', '−55,9', 'CH₃COO⁻ hydrolysiert: CH₃COO⁻ + H₂O ⇌ CH₃COOH + OH⁻'],
        ['Schwache Säure + schwache Base', 'CH₃COOH + NH₃ → CH₃COONH₄', '≈ 7 (je nach K)', '−50,4', 'Abhängig von pK_s und pK_b; pH = 7 + ½(pK_s − pK_b)'],
      ],
      highlight: [0, 1, 2],
    })}

    <h3 class="lz-h3" style="margin-top:1.75rem;">Titration — quantitative Bestimmung durch Neutralisation</h3>
    <p class="lz-prose">
      Bei einer <strong>Säure-Base-Titration</strong> wird die unbekannte Konzentration
      des Analyten durch kontrollierte Zugabe einer Maßlösung bekannter Konzentration bestimmt.
      Am <strong>Äquivalenzpunkt</strong> sind Säure und Base im stöchiometrischen
      Verhältnis vorhanden.
    </p>

    ${renderFormulaBox({
      label:   'Äquivalenzpunkt-Bedingung (für einprotonige Säuren)',
      formula: 'c(Säure) · V(Säure) = c(Base) · V(Base)',
      desc:    'Allgemein: n(H⁺) = n(OH⁻) am Äquivalenzpunkt · Bei mehrprotigen Säuren: n(Säure) · z = n(Base) · z_B · z = Anzahl abgebbarer H⁺',
    })}

    ${renderTable({
      headers: ['Titration', 'Äquivalenzpunkt-pH', 'Geeigneter Indikator', 'Begründung'],
      rows: [
        ['HCl + NaOH (stark/stark)',         'pH = 7,00',    'Bromthymolblau (6,0–7,6), Phenolphthalein (8,2–10,0)', 'Nur H₂O entsteht; weiter pH-Sprung → viele Indikatoren geeignet'],
        ['HCl + NH₃ (stark/schwach)',         'pH < 7 (~5)',  'Methylrot (4,4–6,2), Methylorange (3,1–4,4)',           'NH₄Cl entsteht; sauer durch Hydrolyse; Sprung bei saurem pH'],
        ['CH₃COOH + NaOH (schwach/stark)',    'pH > 7 (~9)',  'Phenolphthalein (8,2–10,0)',                            'CH₃COONa entsteht; basisch durch Hydrolyse; Sprung bei bas. pH'],
        ['CH₃COOH + NH₃ (schwach/schwach)',   'pH ≈ 7',      'Kein Indikator geeignet!',                              'Sehr kleiner pH-Sprung; Indikatoren zu ungenau; Potentiometrie'],
        ['H₂SO₄ + NaOH (zweiprotig)',         '2 ÄP-Punkte', 'Methylrot (1. ÄP), Phenolphthalein (2. ÄP)',            'Erste ÄP bei c·V₁; zweite bei 2c·V₁'],
        ['H₃PO₄ + NaOH (dreiprotig)',         '3 ÄP-Punkte', 'Methylorange, Phenolphthalein, Thymolphthalein',        '3 Stufen; pK_s1=2,12, pK_s2=7,21, pK_s3=12,32'],
      ],
      highlight: [0, 2, 3],
    })}

    ${renderAccordion([
      {
        title: 'pH-Kurve der starken Säure-Base-Titration (HCl + NaOH)',
        content: `<p class="lz-prose"><strong>Verlauf:</strong>
                  Vor ÄP: pH steigt langsam (saurer Bereich).
                  Nahe ÄP: steiler Anstieg (pH-Sprung von ~3 bis ~11 innerhalb von 0,1 mL!).
                  Nach ÄP: pH steigt wieder langsam (basischer Bereich).<br><br>
                  <strong>Vor ÄP:</strong> pH = −lg[H⁺] = −lg(n_rest·HCl / V_total)<br>
                  <strong>Am ÄP (pH 7):</strong> Kein Überschuss; nur H₂O<br>
                  <strong>Nach ÄP:</strong> pOH = −lg[OH⁻] → pH = 14 − pOH<br><br>
                  <strong>Puffer-Region:</strong> Bei schwachen Säuren gibt es einen Halbäquivalenzpunkt
                  (HÄP, bei ½V_ÄP): pH = pK_s (Henderson-Hasselbalch mit [A⁻]=[HA]).</p>`,
      },
      {
        title: 'Indikatoren — Farbumschlag als pH-Nachweis',
        content: `<p class="lz-prose">Indikatoren sind schwache Säuren HIn,
                  bei denen Säureform (HIn) und Basenform (In⁻) verschiedene Farben haben:</p>
                  <p class="lz-prose">HIn + H₂O ⇌ H₃O⁺ + In⁻ (K_In = Indikatorkonstante)<br>
                  pH = pK_In + lg([In⁻]/[HIn])<br>
                  Umschlagsbereich: pH = pK_In ± 1</p>
                  ${renderTable({
                    headers: ['Indikator', 'Saure Farbe', 'Basische Farbe', 'Umschlagsbereich pH', 'pK_In'],
                    rows: [
                      ['Methylviolett',     'Gelb',     'Blauviolett',  '0,0–1,6',   '0,8'],
                      ['Methylorange',      'Rot',      'Gelb',         '3,1–4,4',   '3,7'],
                      ['Methylrot',         'Rot',      'Gelb',         '4,4–6,2',   '5,1'],
                      ['Bromthymolblau',    'Gelb',     'Blau',         '6,0–7,6',   '7,0'],
                      ['Phenolphthalein',   'Farblos',  'Pink-rot',     '8,2–10,0',  '9,4'],
                      ['Thymolphthalein',   'Farblos',  'Blau',         '9,4–10,6',  '10,0'],
                      ['Alizaringelb',      'Gelb',     'Rot',          '10,1–12,0', '11,0'],
                    ],
                  })}`,
      },
    ])}
  `; }

  // ══════════════════════════════════════════════════════════
  // 7.1.5 — Säure-Base-Theorie nach Lewis
  // ══════════════════════════════════════════════════════════
  _lewis() { return `
    ${renderSubhead('7.1.5 — Säure-Base-Theorie nach Lewis')}

    <h3 class="lz-h3">Lewis-Konzept — Elektronenpaarübertragung</h3>
    <p class="lz-prose">
      Gilbert Lewis (1923) erweiterte das Säure-Base-Konzept über Protonenübertragungen
      hinaus auf alle Reaktionen, bei denen ein <strong>Elektronenpaar</strong>
      von einem Donator auf einen Akzeptor übertragen wird.
      Dies ist das allgemeinste Säure-Base-Konzept.
    </p>

    ${renderCompare({
      titleA: 'Lewis-Säure',
      titleB: 'Lewis-Base',
      listA: [
        'Elektronenpaarakzeptor — nimmt EP auf',
        'Hat ein leeres Orbital oder elektropositives Zentrum',
        'Brønsted-Säuren sind immer auch Lewis-Säuren (H⁺ hat leeres 1s)',
        'Beispiele: BF₃, AlCl₃, FeCl₃, Fe³⁺, Cu²⁺, H⁺, SO₃, CO₂',
        'Lewis-Säuren, die keine Brønsted-Säuren sind: BF₃, AlCl₃',
      ],
      listB: [
        'Elektronenpaardonator — gibt EP ab',
        'Hat ein freies Elektronenpaar (FEP)',
        'Brønsted-Basen sind immer auch Lewis-Basen',
        'Beispiele: NH₃, H₂O, OH⁻, F⁻, Cl⁻, CO, Alkohole, Ether',
        'Lewis-Basen entsprechen Liganden in der Komplexchemie',
      ],
    })}

    <h3 class="lz-h3" style="margin-top:1.75rem;">Lewis-Säure-Base-Reaktionen</h3>

    ${renderTable({
      headers: ['Reaktion', 'Lewis-Säure', 'Lewis-Base', 'Produkt', 'Bindungstyp'],
      rows: [
        ['BF₃ + NH₃ → F₃B←NH₃',          'BF₃ (leeres p-Orbital)',    'NH₃ (FEP am N)',       'F₃B←NH₃ (Addukt)',     'Koordinative Bindung'],
        ['AlCl₃ + Cl⁻ → [AlCl₄]⁻',       'AlCl₃ (elektrophil)',       'Cl⁻ (FEP)',            '[AlCl₄]⁻ (Tetrachloroaluminat)', 'Koordinative Bindung'],
        ['Fe³⁺ + 6CN⁻ → [Fe(CN)₆]³⁻',   'Fe³⁺ (Metall-Kation)',      'CN⁻ (FEP am C)',       '[Fe(CN)₆]³⁻ (Komplex)','Ligand-Metall-Bindung'],
        ['SO₃ + H₂O → H₂SO₄',            'SO₃ (elektrophiles S)',      'H₂O (FEP am O)',       'H₂SO₄',                'Koordination → Protolyse'],
        ['CO₂ + OH⁻ → HCO₃⁻',           'CO₂ (elektrophiles C)',      'OH⁻ (FEP am O)',       'HCO₃⁻',                'Koordination; C₂→C₃'],
        ['H⁺ + :NH₃ → NH₄⁺',            'H⁺ (leeres 1s-Orbital)',     'NH₃ (FEP am N)',       'NH₄⁺',                 'Koordinative N–H-Bindung'],
        ['ZnCl₂ + 4NH₃ → [Zn(NH₃)₄]²⁺','Zn²⁺ (leere d-Orbitale)',   'NH₃ (FEP am N)',       '[Zn(NH₃)₄]²⁺',        'Komplexbildung'],
      ],
      highlight: [0, 2, 5],
    })}

    ${renderInfobox({
      type: 'blue', icon: 'fas fa-link', title: 'Lewis-Konzept und Komplexchemie',
      body: `Das Lewis-Säure-Base-Konzept ist die Grundlage der gesamten <strong>Komplexchemie</strong>:<br>
             Alle Liganden sind Lewis-Basen (Elektronenpaardonatoren mit FEP).<br>
             Alle Zentralmetallkationen sind Lewis-Säuren (Elektronenpaarakzeptoren).<br><br>
             Beispiel: [Cu(NH₃)₄]²⁺<br>
             Cu²⁺ (Lewis-Säure) + 4 NH₃ (Lewis-Basen) → tiefblauer Komplex<br><br>
             HSAB-Konzept (Pearson, 1963): „Harte" Lewis-Säuren bevorzugen
             „harte" Basen; „weiche" Säuren bevorzugen „weiche" Basen.<br>
             Hart (kleine, hochgeladene): Al³⁺, H⁺, BF₃ + F⁻, OH⁻, H₂O<br>
             Weich (polarisierbar): Cu⁺, Ag⁺, Hg²⁺ + I⁻, RS⁻, CO`,
    })}

    <h3 class="lz-h3" style="margin-top:1.75rem;">Vergleich der drei Säure-Base-Theorien</h3>

    ${renderTable({
      headers: ['Theorie', 'Säure', 'Base', 'Anwendungsgebiet', 'Übergeordnet?'],
      rows: [
        ['Arrhenius', 'Liefert H⁺ in H₂O', 'Liefert OH⁻ in H₂O', 'Nur wässrig', 'Spezialfall von Brønsted'],
        ['Brønsted-Lowry', 'Protonendonator', 'Protonenakzeptor', 'Wässrig + nichtwässrig', 'Spezialfall von Lewis'],
        ['Lewis', 'Elektronenpaarakzeptor', 'Elektronenpaardonator', 'Alle Phasen; protonenlos', 'Allgemeinste Theorie'],
      ],
      highlight: [2],
    })}
  `; }

  // ══════════════════════════════════════════════════════════
  // 7.1.6 — Säuren und Basen im Alltag
  // ══════════════════════════════════════════════════════════
  _alltag() { return `
    ${renderSubhead('7.1.6 — Säuren und Basen im Alltag')}

    <h3 class="lz-h3">Wichtige Säuren und Basen im Alltag</h3>

    ${renderTable({
      headers: ['Stoff', 'Formel', 'pH (typisch)', 'Vorkommen / Anwendung', 'Chemie'],
      rows: [
        ['Magensäure',             'HCl(aq)',          '1–2',    'Magen; Proteinverdauung; Keimabwehr',           'HCl + Pepsinogen → Pepsin; Denaturierung'],
        ['Zitronensäure',          'C₆H₈O₇',          '2–3',    'Zitrusfrüchte; Konservierung (E330); Reiniger', 'Triprote Carbonsäure; pK_s1=3,13'],
        ['Essigsäure',             'CH₃COOH',          '3–4',    'Essig (5–8%); Konservierung; Lösungsmittel',   'Schwache Säure; pK_s=4,75; K_s=1,8·10⁻⁵'],
        ['Kohlensäure',            'H₂CO₃/CO₂(aq)',    '4–5',    'Mineralwasser; Kohlensäuregetränke',            'CO₂+H₂O⇌H₂CO₃; pK_s1=6,37 (effektiv)'],
        ['Milchsäure',             'CH₃-CH(OH)-COOH',  '4–5',    'Joghurt, Sauerkraut; Muskelmetabolismus',      'Fermentation; L-Form im Körper, D+L bei Ferment.'],
        ['Salicylsäure',           'C₇H₆O₃',          '~3',     'ASS-Vorläufer; Konservierung; Keratolytikum',   'Hydroxybenzoesäure; pK_s=2,97'],
        ['Borsäure',               'H₃BO₃',            '5–6',    'Augenwasser; Insektizid; Pufferlösung',        'Schwache Lewis-Säure; Mono- oder Polyborate'],
        ['Ammoniak (wässrig)',      'NH₃(aq)',           '11–12',  'Haushaltsreiniger; Dünger; Synthese',          'Schwache Base; K_b=1,8·10⁻⁵; Vorsicht: Dämpfe!'],
        ['Natronlauge',            'NaOH(aq)',          '13–14',  'Industrie; Seifenherstellung; Laugengebäck',    'Starke Base; vollständige Dissoziation'],
        ['Backnatron',             'NaHCO₃',            '8–9',    'Backtriebmittel; Antazida; Feuerlöscher',       'Amphoter; HCO₃⁻; CO₂↑ bei T → Triebwirkung'],
        ['Kalk/Calciumhydroxid',   'Ca(OH)₂',           '12',     'Bau; Wasseraufbereitung; Bodenverbesserung',    'Mäßig löslich; Kalkwasser-Test auf CO₂'],
        ['Salzsäure (technisch)',   'HCl(aq)',           '0–1',    'Metallbeizen; pH-Korrektur Schwimmbad; Reinigen','Starke Säure; Konz. 37%; ätzend (GHS 05)'],
        ['Schwefelsäure',          'H₂SO₄',             '<0',     'Akkus; Dünger; Chemieindustrie',               '2-protonig; ΔH_Lösung sehr exotherm; niemals Wasser zu konz. H₂SO₄!'],
        ['Phosphorsäure',          'H₃PO₄',             '~2',     'Cola (E338); Lebensmittel; Metallreinigung',    '3-protonig; pK_s1=2,12, pK_s2=7,21, pK_s3=12,32'],
      ],
      highlight: [0, 7, 8],
    })}

    <h3 class="lz-h3" style="margin-top:1.75rem;">Säuren und Basen in biologischen Systemen</h3>

    ${renderMerkboxGrid([
      {
        icon: 'fas fa-heartbeat',
        title: 'Blut-pH-Regulation',
        text: `Normaler Blut-pH: 7,35–7,45.
               Azidose (pH < 7,35): zu viel H⁺ (metabolisch: Ketoazidose; respiratorisch: CO₂-Retention)
               Alkalose (pH > 7,45): zu wenig H⁺ (Hyperventilation, Erbrechen)
               Puffer: HCO₃⁻/CO₂ (Hauptpuffer) + H₂PO₄⁻/HPO₄²⁻ + Proteine`,
      },
      {
        icon: 'fas fa-stomach',
        title: 'Magensäure und Antazida',
        text: `Magen pH 1–2: HCl aktiviert Pepsin → Proteinspaltung.
               Zu viel Säure: Sodbrennen (GERD), Ulcus pepticum.
               Antazida: NaHCO₃ (Backnatron), Al(OH)₃, Mg(OH)₂ — neutralisieren H⁺.
               Protonenpumpenhemmer (Omeprazol): hemmen H⁺/K⁺-ATPase — modern.`,
      },
      {
        icon: 'fas fa-leaf',
        title: 'Säuren in Pflanzen',
        text: `Ameisensäure (HCOOH): Ameisen, Brennnesseln — pK_s=3,75.
               Oxalsäure ((COOH)₂): Rhabarber, Spinat — bindet Ca²⁺ → Nierensteine.
               Weinsäure: Weintrauben — Weinstein (Kaliumhydrogentartrat).
               Apfelsäure: Äpfel — Malusäure; verantwortlich für sauren Geschmack.`,
      },
      {
        icon: 'fas fa-industry',
        title: 'Industrielle Bedeutung',
        text: `Schwefelsäure: meistproduziertes Industriechemikalie (~270 Mio. t/Jahr).
               Salzsäure: Metallbeizen, pH-Einstellung, Kunststoff-Vorbehandlung.
               Natronlauge: Seife, Papier (Sulfatverfahren), Aluminiumproduktion.
               Ammoniak → Harnstoff, Ammoniumnitrat (Dünger); global lebensnotwendig.`,
      },
    ])}

    ${renderAccordion([
      {
        title: 'Säureemissionen und Saurer Regen',
        content: `<p class="lz-prose"><strong>Entstehung:</strong><br>
                  SO₂ + H₂O → H₂SO₃ (Schweflige Säure; pK_s1=1,81)<br>
                  2SO₂ + O₂ → 2SO₃ (katalytisch in Atmosphäre) → SO₃ + H₂O → H₂SO₄<br>
                  NO + ½O₂ → NO₂ → 3NO₂ + H₂O → 2HNO₃ + NO<br>
                  CO₂ + H₂O ⇌ H₂CO₃ (natürlicher Beitrag; pH_Regen_normal ≈ 5,6)</p>
                  <p class="lz-prose"><strong>Folgen des sauren Regens:</strong><br>
                  pH < 4,5: Waldschäden (Nadelabwurf; Nährstoffauswaschung)<br>
                  Versauerung von Seen → Fischsterben<br>
                  Korrosion von Kalkstein-Gebäuden: CaCO₃ + H₂SO₄ → CaSO₄ + CO₂ + H₂O<br>
                  Schäden an Statuen, historischen Gebäuden, Brücken.<br><br>
                  <strong>Gegenmaßnahmen:</strong><br>
                  Entschwefelung von Rauchgasen (REA: Ca(OH)₂ + SO₂ → CaSO₃ + H₂O)<br>
                  Katalysatoren bei Kfz (NOₓ-Reduktion)<br>
                  Seenbekalkung (CaO oder CaCO₃).</p>`,
      },
      {
        title: 'Reinigungsmittel — pH und chemische Wirkung',
        content: `<p class="lz-prose"><strong>Saure Reiniger (pH < 7):</strong><br>
                  Kalkentferner: H₂SO₄ (verdünnt) oder Zitronensäure + Essigsäure<br>
                  CaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂↑ (Kalk löst sich durch Säure)<br>
                  WC-Reiniger: HCl-haltig (pH 1–2); entfernt Urinstein (Calciumphosphat)<br><br>
                  <strong>Alkalische Reiniger (pH > 7):</strong><br>
                  Rohrreiniger: NaOH (pH 14); Verseifung von Fetten → lösliche Seife<br>
                  RCOOH + NaOH → RCOONa (Seife) + H₂O<br>
                  Backofen-Reiniger: NaOH + Tenside; verseift eingebrannte Fette<br>
                  Geschirrspülmittel (Maschine): NaOH + Na₂CO₃ + Komplexbildner (EDTA, NTA)</p>`,
      },
      {
        title: 'pH-Messungen — Glaselektrode und pH-Meter',
        content: `<p class="lz-prose"><strong>Prinzip der Glaselektrode:</strong><br>
                  Dünne Glasmembran (spezielle Zusammensetzung) ist selektiv
                  für H⁺-Ionen durchlässig. Entstehendes Membranpotenzial
                  ist proportional zu Δ(pH):<br>
                  E = const. − 59,16 mV · pH (bei 25°C; Nernst-Faktor)<br><br>
                  Referenzelektrode: Kalomel- oder Ag/AgCl-Elektrode (konstantes E°).<br>
                  Kalibrierung: Mindestens 2 Pufferlösungen (pH 4,01 und 7,00 oder pH 7,00 und 10,00).<br>
                  Vorteil: Schnell, genau (±0,01 pH-Einheiten), weit verbreitet.<br>
                  Nachteil: Keine Messung in wasserfreien Systemen; HF löst Glas.</p>`,
      },
    ])}

    ${renderInfobox({
      type: 'success', icon: 'fas fa-graduation-cap', title: 'Zusammenfassung — Säuren und Basen',
      body: `<strong>Brønsted:</strong> Säure = Protonendonator · Base = Protonenakzeptor · Korrespondierende Paare HA/A⁻<br>
             <strong>Stärke:</strong> K_s = [H⁺][A⁻]/[HA] · pK_s = −lg K_s · starke Säure: kleines pK_s<br>
             <strong>pH:</strong> pH = −lg[H₃O⁺] · K_w = [H₃O⁺][OH⁻] = 10⁻¹⁴ · pH + pOH = 14<br>
             <strong>Puffer:</strong> pH = pK_s + lg([A⁻]/[HA]) · Optimum bei pH = pK_s<br>
             <strong>Amphoterie:</strong> H₂O, Zwischenstufen, Al(OH)₃, Aminosäuren<br>
             <strong>Neutralisation:</strong> H₃O⁺ + OH⁻ → 2H₂O · ΔH = −57,3 kJ/mol<br>
             <strong>Lewis:</strong> Säure = EP-Akzeptor · Base = EP-Donator · umfasst Komplexbildung`,
    })}
  `; }

  init() {
    i18n.init();
    initScrollReveal();
    initInteractive(document);
    initTabs();
  }
}