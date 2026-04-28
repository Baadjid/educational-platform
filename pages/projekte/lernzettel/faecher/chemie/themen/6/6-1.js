// pages/projekte/lernzettel/faecher/chemie/themen/6/6-1.js
// Kapitel 6.1 — Das chemische Gleichgewicht
// 6.1.1  Umkehrbarkeit chemischer Reaktionen
// 6.1.2  Einstellung des chemischen Gleichgewichts
// 6.1.3  Massenwirkungsgesetz und Gleichgewichtskonstante

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
  { key: '611', icon: 'fas fa-exchange-alt',  label: '6.1.1 Umkehrbarkeit'         },
  { key: '612', icon: 'fas fa-sync-alt',      label: '6.1.2 GG-Einstellung'        },
  { key: '613', icon: 'fas fa-square-root-alt', label: '6.1.3 MWG & K'            },
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
  return `<nav class="wim-tabs" role="tablist" id="tabs61">${nav}</nav>${panels}`;
}

function initTabs() {
  const nav = document.getElementById('tabs61');
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

export default class Chemie_6_1 {
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
          <i class="fas fa-chevron-right"></i><span>Kapitel 6</span>
          <i class="fas fa-chevron-right"></i><span>6.1</span>
        </div>
        <h1 class="lz-sub-title">Das chemische Gleichgewicht<br><em>Dynamik, Einstellung und MWG</em></h1>
        <p class="lz-sub-desc">
          Reversible Reaktionen · Dynamisches Gleichgewicht ·
          Massenwirkungsgesetz · K_c · K_p · Reaktionsquotient Q
        </p>
        ${renderTags(['Kap. 6.1', 'Chemisches Gleichgewicht', 'MWG', 'Kc', 'LK Chemie BW'])}
      </div>
    </section>

    <section class="lz-content-section">
      <div class="lz-section-wrap">
        ${buildWimHTML(k => {
          if (k === '611') return this._umkehr();
          if (k === '612') return this._einstellung();
          if (k === '613') return this._mwg();
          return '';
        })}
      </div>
    </section>

    <section class="lz-content-section" style="padding:1.5rem 0 3rem;">
      <div class="lz-section-wrap">
        ${renderPageNav({
          prev: { label: '5.3 Elektrochemische Prozesse',    link: `${BASE}/themen/5/5-3` },
          next: { label: '6.2 Beeinflussung des Gleichgewichts', link: `${BASE}/themen/6/6-2` },
        }, BASE)}
      </div>
    </section>
    ${footerHTML(this.router)}
  `; }

  _umkehr() { return `
    ${renderSubhead('6.1.1 — Umkehrbarkeit chemischer Reaktionen')}

    <h2 class="lz-h2">Irreversible und reversible Reaktionen</h2>
    <p class="lz-prose">
      Nicht alle chemischen Reaktionen laufen vollständig in eine Richtung ab.
      Man unterscheidet grundlegend zwischen <strong>irreversiblen</strong>
      (praktisch vollständig ablaufenden) und <strong>reversiblen</strong>
      (umkehrbaren) Reaktionen.
    </p>

    ${renderCompare({
      titleA: 'Irreversible (praktisch vollständige) Reaktionen',
      titleB: 'Reversible (umkehrbare) Reaktionen',
      listA: [
        'Laufen praktisch vollständig in eine Richtung ab',
        'Gleichgewicht liegt extrem weit auf Produktseite (K >> 1)',
        'Produkte sind sehr stabil oder weichen aus (Gas, Niederschlag)',
        'Gleichgewichtspfeil → statt ⇌',
        'Beispiel: Na + H₂O → NaOH + ½H₂ (H₂ entweicht)',
        'Beispiel: HCl(aq) + NaOH(aq) → NaCl + H₂O (K ≈ 10¹⁴)',
        'Beispiel: Mg + O₂ → MgO (ΔG° = −569 kJ/mol, K extrem groß)',
      ],
      listB: [
        'Laufen gleichzeitig in beide Richtungen ab',
        'Gleichgewicht stellt sich bei bestimmtem Konzentrationsverhältnis ein',
        'Edukte und Produkte liegen nebeneinander vor',
        'Doppelpfeil ⇌ in der Gleichung',
        'Beispiel: N₂ + 3H₂ ⇌ 2NH₃ (K_c = 977 bei 25°C)',
        'Beispiel: CH₃COOH + C₂H₅OH ⇌ CH₃COOC₂H₅ + H₂O',
        'Beispiel: CO₂(g) + H₂O ⇌ H₂CO₃ (⇌ H⁺ + HCO₃⁻)',
      ],
    })}

    <h3 class="lz-h3" style="margin-top:1.75rem;">Gründe für unvollständige Reaktionen</h3>

    ${renderTable({
      headers: ['Ursache', 'Erklärung', 'Beispiele'],
      rows: [
        ['Thermodynamisches GG', 'ΔG° nicht stark negativ → K nicht >> 1 → Edukte verbleiben', 'Esterbildung (K_c ≈ 4); NH₃-Synthese; SO₂-Oxidation'],
        ['Kinetisch gehemmt',    'ΔG° negativ, aber hohe E_A → Reaktion zu langsam (kinetische Stabilität)', 'N₂ + O₂ (thermodynamisch ungünstig + kinetisch gehemmt); H₂ + O₂ ohne Zündfunke'],
        ['Flüchtige Produkte',   'Gas entweicht → Rückreaktion unmöglich bei offenem System', 'CaCO₃ → CaO + CO₂↑ (irreversibel im offenen System)'],
        ['Unlöslicher Niederschlag', 'Festes Produkt scheidet aus → Ionenkonzentration sinkt → Rückreaktion stark gehemmt', 'AgNO₃ + NaCl → AgCl↓ + NaNO₃ (K_L(AgCl) = 1,8·10⁻¹⁰)'],
      ],
      highlight: [0],
    })}

    ${renderInfobox({
      type: 'blue', icon: 'fas fa-balance-scale', title: 'Thermodynamik vs. Kinetik — Zwei verschiedene Fragen',
      body: `<strong>Thermodynamik (ΔG, K_c):</strong> Fragt, ob eine Reaktion spontan abläuft
             und wie weit sie geht (Gleichgewichtslage). Zeitunabhängig.<br><br>
             <strong>Kinetik (k, E_A):</strong> Fragt, wie schnell die Reaktion abläuft.
             Zeitabhängig.<br><br>
             <strong>Diamant → Graphit:</strong> Thermodynamisch spontan bei Raumtemperatur
             (ΔG < 0, K >> 1), aber kinetisch so gehemmt (E_A extrem hoch), dass
             es praktisch nie passiert. „Diamonds are forever" — kinetisch, nicht thermodynamisch!<br><br>
             <strong>H₂ + O₂:</strong> Thermodynamisch stark spontan (ΔG° = −237 kJ/mol),
             aber ohne Zündfunken oder Katalysator kinetisch gehemmt (E_A hoch).`,
    })}
  `; }

  _einstellung() { return `
    ${renderSubhead('6.1.2 — Einstellung des chemischen Gleichgewichts')}

    <h3 class="lz-h3">Das dynamische Gleichgewicht</h3>
    <p class="lz-prose">
      Im <strong>chemischen Gleichgewicht</strong> laufen Hin- und Rückreaktion
      weiterhin mit derselben Geschwindigkeit ab —
      es ist kein statischer Stillstand, sondern ein
      <strong>dynamisches Gleichgewicht</strong>.
      Makroskopisch sind keine Änderungen mehr sichtbar;
      mikroskopisch ist der Reaktionsprozess ständig aktiv.
    </p>

    ${renderMerkboxGrid([
      {
        icon: 'fas fa-sync-alt',
        title: 'Dynamisch — keine Ruhe auf Teilchenebene',
        text: `v_Hin = v_Rück: Beide Reaktionsrichtungen laufen gleichzeitig
               mit gleicher Geschwindigkeit. ¹⁸O-Markierungsexperimente
               bestätigen: Im GG wechseln Atome ständig die Seiten —
               makroskopisch unsichtbar, submikroskopisch aktiv.`,
      },
      {
        icon: 'fas fa-ruler',
        title: 'Konstante Konzentrationen',
        text: `Alle Konzentrationen (Edukte und Produkte) bleiben nach
               Erreichen des Gleichgewichts zeitlich konstant.
               Diese Konzentrationen heißen GG-Konzentrationen.
               Das GG ist unabhängig davon, ob man von Edukten
               oder Produkten startet.`,
      },
      {
        icon: 'fas fa-lock',
        title: 'Geschlossenes System nötig',
        text: `Chemisches GG kann sich nur in einem geschlossenen System
               einstellen (kein Stoff-Austausch mit Umgebung).
               Beispiel: Wasser + CO₂ ⇌ H₂CO₃ in verschlossener Flasche.
               In offener Flasche: CO₂ entweicht → GG verschiebt sich laufend.`,
      },
      {
        icon: 'fas fa-thermometer-half',
        title: 'Temperaturabhängig',
        text: `Die Lage des Gleichgewichts (Wert von K) hängt nur von
               der Temperatur ab — nicht von Konzentration oder Druck.
               Konzentrations- und Druckänderungen verschieben die
               Gleichgewichtslage, aber K bleibt konstant (bei const. T).`,
      },
    ])}

    <h3 class="lz-h3" style="margin-top:1.75rem;">Zeitlicher Verlauf der GG-Einstellung</h3>
    <p class="lz-prose">
      Beim Start mit reinen Edukten: v_Hin zunächst maximal, v_Rück = 0.
      Mit wachsenden Produktkonzentrationen steigt v_Rück,
      mit sinkenden Eduktkonzentrationen sinkt v_Hin —
      bis schließlich v_Hin = v_Rück: Gleichgewicht.
    </p>

    ${renderTable({
      headers: ['Zeitpunkt', 'c(Edukte)', 'c(Produkte)', 'v_Hin', 'v_Rück', 'Zustand'],
      rows: [
        ['t = 0 (Start)',     'c₀ (maximal)', '0',             'maximal', '0',       'Nur Hinreaktion'],
        ['0 < t < t_GG',     'abnehmend',    'zunehmend',      'sinkend', 'steigend','Annäherung ans GG'],
        ['t = t_GG',         'konstant (c_GG)','konstant (c_GG)','= v_Rück','= v_Hin','Dynamisches GG'],
        ['t > t_GG',         'konstant',      'konstant',       '= v_Rück','= v_Hin','Gleichgewicht bleibt'],
      ],
      highlight: [2],
    })}

    ${renderInfobox({
      type: '', icon: 'fas fa-vial', title: 'Nachweis des dynamischen Gleichgewichts — Isotopenmarkierung',
      body: `Gibt man zu einer Essigsäure-Ethanol-GG-Mischung ¹⁸O-markiertes
             Wasser (H₂¹⁸O) hinzu, findet man nach kurzer Zeit ¹⁸O sowohl
             im Wasser als auch im Ester und in der Essigsäure —
             obwohl sich die Konzentrationen nicht ändern.<br><br>
             Beweis: Im GG findet ständig Hin- und Rückreaktion statt;
             Atome werden kontinuierlich ausgetauscht.`,
    })}

    <h3 class="lz-h3" style="margin-top:1.75rem;">Gleichgewicht — unabhängig vom Startpunkt</h3>

    ${renderTable({
      headers: ['Experiment', 'Start', 'Gleichgewicht c(NH₃)', 'K_c bei 500°C'],
      rows: [
        ['A', 'Nur N₂ (1,0 M) + H₂ (3,0 M)', '0,444 M',     '977 L²/mol²'],
        ['B', 'Nur NH₃ (2,0 M)',               '0,444 M NH₃', '977 L²/mol²'],
        ['C', 'N₂ (0,5 M) + H₂ (1,5 M) + NH₃ (0,5 M)', '0,444 M', '977 L²/mol²'],
      ],
    })}

    <p class="lz-prose">
      Unabhängig vom Startpunkt stellt sich dasselbe Gleichgewicht ein —
      das ist eine fundamentale Eigenschaft des thermodynamischen Gleichgewichts.
    </p>
  `; }

  _mwg() { return `
    ${renderSubhead('6.1.3 — Massenwirkungsgesetz und Gleichgewichtskonstante')}

    <h3 class="lz-h3">Das Massenwirkungsgesetz (MWG)</h3>
    <p class="lz-prose">
      Das <strong>Massenwirkungsgesetz</strong> (Guldberg & Waage, 1864)
      beschreibt quantitativ die Konzentrationen der Reaktionsteilnehmer
      im Gleichgewicht. Es folgt aus der thermodynamischen Bedingung ΔG = 0
      (Gleichgewicht) und aus der kinetischen Bedingung v_Hin = v_Rück.
    </p>

    ${renderFormulaBox({
      label:   'Massenwirkungsgesetz für aA + bB ⇌ cC + dD',
      formula: 'K_c = [C]ᶜ · [D]ᵈ / ([A]ᵃ · [B]ᵇ)',
      desc:    '[X]: GG-Konzentration in mol/L · Exponenten = stöchiometrische Koeffizienten · Feste Stoffe (Aktivität = 1) und reines Lösungsmittel werden NICHT berücksichtigt · K_c: nur temperaturabhängig; druck- und konzentrationsunabhängig',
    })}

    ${renderInfobox({
      type: 'warning', icon: 'fas fa-exclamation-triangle', title: 'Wichtige Regeln beim MWG-Aufstellen',
      body: `<strong>① Feste Stoffe:</strong> Werden nicht in K_c aufgenommen (Aktivität = 1).<br>
             CaCO₃(s) ⇌ CaO(s) + CO₂(g) → K_c = [CO₂] (nur Gas!)<br><br>
             <strong>② Reines Wasser als Lösungsmittel:</strong> Wird nicht aufgenommen.<br>
             CH₃COOH(aq) ⇌ H⁺(aq) + CH₃COO⁻(aq) → K_a = [H⁺][CH₃COO⁻]/[CH₃COOH]<br><br>
             <strong>③ Koeffizienten:</strong> Gehen als Exponenten ein (nicht als Faktoren!).<br>
             N₂ + 3H₂ ⇌ 2NH₃ → K_c = [NH₃]²/([N₂]·[H₂]³)<br><br>
             <strong>④ Richtung:</strong> K_c für die Hinreaktion; K_c(Rück) = 1/K_c(Hin).<br>
             <strong>⑤ Vielfaches:</strong> Verdoppelung der Gleichung → K_c wird quadriert.`,
    })}

    <h3 class="lz-h3" style="margin-top:1.75rem;">K_c und K_p — Konzentrationen und Partialdrücke</h3>

    ${renderFormulaBox({
      label:   'K_p — Gleichgewichtskonstante über Partialdrücke (für Gasreaktionen)',
      formula: 'K_p = K_c · (RT)^Δn_gas',
      desc:    'Δn_gas = (Summe Koeffizienten Gase Produkte) − (Summe Koeffizienten Gase Edukte) · R = 0,08314 L·bar/(mol·K) · Wenn Δn_gas = 0: K_p = K_c · K_p dimensionslos (bezogen auf p° = 1 bar)',
    })}

    ${renderTable({
      headers: ['Reaktion', 'K_c-Ausdruck', 'Δn_gas', 'K_p = K_c · …', 'Typischer K-Wert bei 25°C'],
      rows: [
        ['N₂ + 3H₂ ⇌ 2NH₃', '[NH₃]²/([N₂][H₂]³)', '2−4 = −2', 'K_c · (RT)⁻²', 'K_c ≈ 977 L²/mol² (25°C); K_p ≈ 6,0·10⁻² bar⁻²'],
        ['2SO₂ + O₂ ⇌ 2SO₃', '[SO₃]²/([SO₂]²[O₂])', '2−3 = −1', 'K_c · (RT)⁻¹', 'K_c ≈ 3,4·10²⁸ L/mol (sehr groß → vollst. Umsatz theor. möglich)'],
        ['H₂ + I₂ ⇌ 2HI', '[HI]²/([H₂][I₂])', '0', 'K_c = K_p', 'K_c ≈ 794 (dimensionslos)'],
        ['N₂O₄ ⇌ 2NO₂', '[NO₂]²/[N₂O₄]', '2−1 = +1', 'K_c · (RT)¹', 'K_c ≈ 5,9·10⁻³ mol/L (25°C)'],
        ['CH₃COOH ⇌ H⁺+CH₃COO⁻', '[H⁺][CH₃COO⁻]/[CH₃COOH]', 'n.a. (Lösung)', '—', 'K_a = 1,8·10⁻⁵ mol/L'],
        ['H₂O ⇌ H⁺ + OH⁻', '[H⁺][OH⁻]', 'n.a.', '—', 'K_W = 1,0·10⁻¹⁴ mol²/L² (25°C)'],
        ['CaCO₃(s)⇌CaO(s)+CO₂(g)', '[CO₂]', '1−0 = +1', 'K_p = K_c·RT', 'K_c ≈ 3,9·10⁻² mol/L bei 900°C'],
      ],
      highlight: [0, 4, 5],
    })}

    <h3 class="lz-h3" style="margin-top:1.75rem;">Reaktionsquotient Q — Vergleich mit K</h3>
    <p class="lz-prose">
      Der <strong>Reaktionsquotient Q</strong> hat dieselbe mathematische Form
      wie K_c, wird aber mit den <em>momentanen</em> (nicht GG-)Konzentrationen berechnet.
      Q sagt aus, in welche Richtung die Reaktion ablaufen wird:
    </p>

    ${renderTable({
      headers: ['Vergleich', 'Bedeutung', 'Reaktion läuft…', 'Freie Enthalpie'],
      rows: [
        ['Q < K_c', 'Zu wenig Produkt im Vergleich zum GG', 'In Richtung Produkte (vorwärts: →)', 'ΔG < 0'],
        ['Q = K_c', 'System ist im Gleichgewicht', 'Gar nicht (v_Hin = v_Rück)', 'ΔG = 0'],
        ['Q > K_c', 'Zu viel Produkt im Vergleich zum GG', 'In Richtung Edukte (rückwärts: ←)', 'ΔG > 0'],
      ],
      highlight: [1],
    })}

    <h3 class="lz-h3" style="margin-top:1.75rem;">Interpretation von K-Werten</h3>

    ${renderTable({
      headers: ['K-Wert', 'GG-Lage', 'Praktische Bedeutung', 'Beispiel'],
      rows: [
        ['K >> 1 (z.B. >10⁶)',  'Weit auf Produktseite', 'Reaktion läuft praktisch vollständig; hohe Ausbeute', 'H₂ + ½O₂ ⇌ H₂O: K ≈ 10⁴¹'],
        ['K = 1–1000',          'Beide Seiten bedeutsam', 'Gleichgewicht muss optimiert werden (T, p, c)', 'Esterbildung: K ≈ 4; HI-Bildung: K ≈ 794'],
        ['K << 1 (z.B. <10⁻⁶)','Weit auf Eduktseite', 'Kaum Produktbildung; Reaktion kaum sinnvoll nutzbar', 'N₂ + O₂ ⇌ 2NO: K_c ≈ 10⁻³⁰ (25°C)'],
      ],
      highlight: [0, 2],
    })}

    ${renderAccordion([
      {
        title: 'GG-Berechnung — Methode der ICE-Tabelle',
        content: `<p class="lz-prose">ICE-Tabelle: <strong>I</strong>nitial – <strong>C</strong>hange – <strong>E</strong>quilibrium</p>
                  <p class="lz-prose"><strong>Beispiel: N₂O₄ ⇌ 2NO₂, K_c = 5,9·10⁻³ mol/L bei 25°C</strong><br>
                  Start: c(N₂O₄) = 0,100 mol/L, c(NO₂) = 0</p>
                  ${renderTable({
                    headers: ['', 'N₂O₄', '⇌', '2 NO₂'],
                    rows: [
                      ['I (initial)',     '0,100',    '', '0'],
                      ['C (change)',      '−x',       '', '+2x'],
                      ['E (equilibrium)', '0,100−x',  '', '2x'],
                    ],
                  })}
                  <p class="lz-prose"><br>
                  K_c = (2x)² / (0,100−x) = 5,9·10⁻³<br>
                  4x² + 5,9·10⁻³·x − 5,9·10⁻⁴ = 0<br>
                  x = [−5,9·10⁻³ + √(3,48·10⁻⁵ + 9,44·10⁻³)] / 8<br>
                  x = (−0,00590 + 0,09721) / 8 = 0,09131/8 = <strong>0,01141 mol/L</strong><br><br>
                  c_GG(NO₂) = 2x = 0,0228 mol/L<br>
                  c_GG(N₂O₄) = 0,100 − 0,01141 = 0,0886 mol/L<br>
                  Probe: K_c = (0,0228)² / 0,0886 = 5,87·10⁻³ ≈ 5,9·10⁻³ ✓</p>`,
      },
      {
        title: 'Zusammenhang K_c und ΔG° — Van\'t Hoff\'sche Reaktionsisotherme',
        content: `<p class="lz-prose">Der fundamentale Zusammenhang zwischen
                  Thermodynamik und Gleichgewicht:</p>
                  <div class="lz-formula-box">
                    <div class="lz-formula-main">ΔG° = −R·T·ln K_c &nbsp; ↔ &nbsp; K_c = e^(−ΔG°/RT)</div>
                    <div class="lz-formula-desc">R = 8,314 J/(mol·K) · T [K] · ΔG° [J/mol]</div>
                  </div>
                  <p class="lz-prose">Und unter Nicht-Standardbedingungen (momentane Konzentrationen Q):</p>
                  <div class="lz-formula-box">
                    <div class="lz-formula-main">ΔG = ΔG° + R·T·ln Q = R·T·ln(Q/K)</div>
                  </div>
                  <p class="lz-prose">Q < K → ΔG < 0 → Reaktion läuft vorwärts (spontan)<br>
                  Q = K → ΔG = 0 → Gleichgewicht<br>
                  Q > K → ΔG > 0 → Reaktion läuft rückwärts</p>`,
      },
      {
        title: 'Temperaturabhängigkeit von K — Van\'t Hoff\'sche GG-Gleichung',
        content: `<p class="lz-prose">K_c ist nur von der Temperatur abhängig.
                  Die Abhängigkeit wird durch die Van't Hoff'sche GG-Gleichung beschrieben:</p>
                  <div class="lz-formula-box">
                    <div class="lz-formula-main">ln(K₂/K₁) = −(ΔH°_R/R)·(1/T₂ − 1/T₁)</div>
                    <div class="lz-formula-desc">Analog zur Arrhenius-Gleichung · Auftrag ln K vs. 1/T → Gerade, Steigung = −ΔH°_R/R</div>
                  </div>
                  <p class="lz-prose"><strong>Folgerungen:</strong><br>
                  Exotherme Reaktion (ΔH < 0): K sinkt bei T-Erhöhung → GG verschiebt sich zu Edukten.<br>
                  Endotherme Reaktion (ΔH > 0): K steigt bei T-Erhöhung → GG verschiebt sich zu Produkten.<br><br>
                  Dies erklärt quantitativ das qualitative Prinzip von Le Chatelier!</p>`,
      },
    ])}

    ${renderInfobox({
      type: 'success', icon: 'fas fa-graduation-cap', title: 'Zusammenfassung — Gleichgewicht und MWG',
      body: `<strong>Dynamisches GG:</strong> v_Hin = v_Rück · c konstant · mikroskopisch aktiv<br>
             <strong>MWG:</strong> K_c = [Prod]^ν / [Edukt]^ν · Feststoffe/H₂O (LM) außen vor<br>
             <strong>K_p = K_c · (RT)^Δn_gas</strong> für Gasreaktionen<br>
             <strong>Reaktionsquotient Q:</strong> Q < K → vorwärts · Q = K → GG · Q > K → rückwärts<br>
             <strong>ICE-Tabelle</strong> für quantitative GG-Berechnungen<br>
             <strong>ΔG° = −RT·ln K</strong> · K = e^(−ΔG°/RT)<br>
             <strong>T-Abhängigkeit:</strong> ln(K₂/K₁) = −(ΔH°/R)·(1/T₂ − 1/T₁)`,
    })}
  `; }

  init() {
    i18n.init();
    initScrollReveal();
    initInteractive(document);
    initTabs();
  }
}