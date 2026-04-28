// pages/projekte/lernzettel/faecher/chemie/themen/5/5-3.js
// Kapitel 5.3 — Elektrochemische Prozesse
// 5.3.1  Elektrische Leitung und Elektrolyte
// 5.3.2  Elektroden und Elektrodenpotenziale
// 5.3.3  Elektrochemische Zellen und Zellspannung
// 5.3.4  Elektrolytische Prozesse

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
  { key: '531', icon: 'fas fa-plug',          label: '5.3.1 Leitung & Elektrolyte'    },
  { key: '532', icon: 'fas fa-battery-half',  label: '5.3.2 Elektroden & Potenziale'  },
  { key: '533', icon: 'fas fa-bolt',          label: '5.3.3 Zellen & Zellspannung'    },
  { key: '534', icon: 'fas fa-industry',      label: '5.3.4 Elektrolytische Prozesse' },
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
  return `<nav class="wim-tabs" role="tablist" id="tabs53">${nav}</nav>${panels}`;
}

function initTabs() {
  const nav = document.getElementById('tabs53');
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

export default class Chemie_5_3 {
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
          <i class="fas fa-chevron-right"></i><span>Kapitel 5</span>
          <i class="fas fa-chevron-right"></i><span>5.3</span>
        </div>
        <h1 class="lz-sub-title">Elektrochemische Prozesse<br><em>Leitung, Potenziale, Zellen und Elektrolyse</em></h1>
        <p class="lz-sub-desc">
          Elektrolyte · Elektroden · Nernst-Gleichung · Galvanische Zellen ·
          Batterien · Elektrolyse · Faraday'sche Gesetze
        </p>
        ${renderTags(['Kap. 5.3', 'Elektrochemie', 'Nernst', 'Elektrolyse', 'Batterien', 'LK Chemie BW'])}
      </div>
    </section>

    <section class="lz-content-section">
      <div class="lz-section-wrap">
        ${buildWimHTML(k => {
          if (k === '531') return this._leitung();
          if (k === '532') return this._elektroden();
          if (k === '533') return this._zellen();
          if (k === '534') return this._elektrolyse();
          return '';
        })}
      </div>
    </section>

    <section class="lz-content-section" style="padding:1.5rem 0 3rem;">
      <div class="lz-section-wrap">
        ${renderPageNav({
          prev: { label: '5.2 Chemische Kinetik',          link: `${BASE}/themen/5/5-2` },
          next: { label: '6.1 Das chemische Gleichgewicht', link: `${BASE}/themen/6/6-1` },
        }, BASE)}
      </div>
    </section>
    ${footerHTML(this.router)}
  `; }

  // ══════════════════════════════════════════════════════════
  // 5.3.1 — Elektrische Leitung und Elektrolyte
  // ══════════════════════════════════════════════════════════
  _leitung() { return `
    ${renderSubhead('5.3.1 — Elektrische Leitung und Elektrolyte')}

    <h2 class="lz-h2">Arten der elektrischen Leitung</h2>
    <p class="lz-prose">
      Elektrischer Strom ist stets mit dem Transport elektrischer Ladungsträger
      verbunden. In der Chemie unterscheidet man grundlegend zwei Mechanismen:
      die <strong>Elektronenleitung</strong> (metallische Leitung) und die
      <strong>Ionenleitung</strong> (elektrolytische Leitung).
    </p>

    ${renderTable({
      headers: ['Leitungstyp', 'Ladungsträger', 'Beispiele', 'Temperaturabhängigkeit', 'Zustand'],
      rows: [
        ['Elektronenleitung (1. Art)',
         'Freie Elektronen im Elektronengas',
         'Metalle (Cu, Fe, Ag), Graphit, Halbleiter',
         'Leitfähigkeit sinkt mit T↑ (mehr Gitterschwingungen stören Elektronenfluss)',
         'Festkörper (kein Stofftransport)'],
        ['Ionenleitung (2. Art)',
         'Kationen und Anionen bewegen sich in entgegengesetzte Richtungen',
         'Elektrolytlösungen, Salzschmelzen, Festkörperelektrolyte (z.B. ZrO₂)',
         'Leitfähigkeit steigt mit T↑ (mehr Ionenbeweglichkeit, weniger Viskosität)',
         'Flüssigkeit oder Schmelze (Stofftransport findet statt)'],
        ['Supraleitung',
         'Cooper-Paare von Elektronen (quantenmechanisch)',
         'Pb bei T < 7,2 K; YBa₂Cu₃O₇ bei T < 92 K (Hochtemperatur-SL)',
         'Nur unterhalb kritischer Temperatur T_c; Leitfähigkeit → ∞',
         'Festkörper bei Tiefsttemperatur; R = 0 exakt'],
      ],
      highlight: [0, 1],
    })}

    <h3 class="lz-h3" style="margin-top:1.75rem;">Elektrolyte — Begriffe und Stärke</h3>
    <p class="lz-prose">
      Ein <strong>Elektrolyt</strong> ist ein Stoff, der in wässriger Lösung
      oder als Schmelze in Ionen dissoziert und damit elektrischen Strom leitet.
      Die <strong>Stärke</strong> eines Elektrolyten bezieht sich auf den
      Grad der Dissoziation α (Dissoziationsgrad).
    </p>

    ${renderTable({
      headers: ['Elektrolyttyp', 'Dissoziationsgrad α', 'Definition', 'Beispiele'],
      rows: [
        ['Starker Elektrolyt', 'α ≈ 1 (vollständig)', 'Vollständige Dissoziation in Ionen in wässriger Lösung', 'Starke Säuren: HCl, HBr, HI, HNO₃, H₂SO₄(1. Stufe), HClO₄ · Starke Basen: NaOH, KOH, Ba(OH)₂ · Salze: NaCl, KNO₃, CaCl₂'],
        ['Schwacher Elektrolyt', 'α << 1 (teilweise)', 'Nur ein Teil der Moleküle dissoziert; Gleichgewicht mit undissoziierten Molekülen', 'Schwache Säuren: CH₃COOH (α≈0,01), H₂CO₃, HCN, H₂S · Schwache Basen: NH₃, Amine · Wasser: α = 1,8·10⁻⁹'],
        ['Nichtleiter',         'α = 0',               'Keine Ionenbildung in Lösung',                                                   'Saccharose, Glucose, Harnstoff, Ethanol, Benzol (in Wasser)'],
      ],
      highlight: [0, 1],
    })}

    <h3 class="lz-h3" style="margin-top:1.75rem;">Leitfähigkeit von Elektrolytlösungen</h3>

    ${renderFormulaBox({
      label:   'Elektrische Leitfähigkeit einer Elektrolytlösung',
      formula: 'κ = σ = 1/ρ = L · A⁻¹ · d⁻¹ &nbsp; [S/m]',
      desc:    'κ: spezifische Leitfähigkeit [S/m = A/(V·m)] · ρ: spezifischer Widerstand [Ω·m] · Molare Leitfähigkeit: Λ_m = κ / c [S·m²/mol] · Bei Verdünnung: starke E. → Λ_m steigt leicht · schwache E. → Λ_m steigt stark (mehr Dissoziation)',
    })}

    ${renderTable({
      headers: ['Größe', 'Symbol', 'Einheit', 'Bedeutung'],
      rows: [
        ['Widerstand',              'R',    'Ω',     'R = U/I (Ohmsches Gesetz)'],
        ['Leitwert',                'G',    'S = Ω⁻¹','G = 1/R = I/U'],
        ['Spezifischer Widerstand', 'ρ',    'Ω·m',   'ρ = R · A/l (geometrieunabhängig)'],
        ['Spezifische Leitfähigkeit','κ',   'S/m',   'κ = 1/ρ; materialspezifisch'],
        ['Molare Leitfähigkeit',    'Λ_m',  'S·m²/mol','Λ_m = κ/c; lässt sich auf Grenzwert Λ°_m extrapolieren'],
        ['Ionenäquivalentleitfähigkeit','λ', 'S·m²/mol','Beitrag eines Ionentyps: Λ°_m = Σ z_i · λ_i (Kohlrausch)'],
      ],
    })}

    ${renderTable({
      headers: ['Ion', 'λ° [S·cm²/mol] bei 25°C', 'Besonderheit'],
      rows: [
        ['H⁺ (H₃O⁺)',  '349,8', 'Extrem hoch: Grotthuss-Mechanismus (Protonenhüpfen)'],
        ['OH⁻',         '198,3', 'Hoch: ähnlicher Mechanismus wie H⁺'],
        ['K⁺',          '73,5',  'Hoch für Alkalimetall: kleiner hydratisierter Radius'],
        ['Na⁺',          '50,1',  'Kleiner als K⁺ trotz kleinerem Ion: stärkere Hydratation'],
        ['Li⁺',          '38,7',  'Kleinster Alkalikation: stärkste Hydratation → langsam'],
        ['Cl⁻',          '76,3',  '—'],
        ['SO₄²⁻',        '160,0', 'Doppelt geladen → erhöhter Beitrag'],
        ['Ca²⁺',         '119,0', 'Doppelt geladen'],
      ],
      highlight: [0, 1],
    })}

    ${renderInfobox({
      type: 'blue', icon: 'fas fa-lightbulb', title: 'Grotthuss-Mechanismus — warum H⁺ so schnell leitet',
      body: `Protonen leiten nicht durch physische Wanderung von H₃O⁺-Ionen,
             sondern durch ein <strong>Protonenhüpfen</strong> (Proton hopping)
             entlang des Wasserstoffbrücken-Netzwerks:<br><br>
             H₃O⁺–OH₂ → H₂O–H₃O⁺ (Proton springt von O zu O)<br><br>
             Dies erklärt die ~7× höhere Mobilität von H⁺ gegenüber Na⁺.
             Analoger Mechanismus für OH⁻ (rückwärts).
             Entdeckt von Theodore von Grotthuss (1806) — lange vor dem
             Verständnis der Atomstruktur!`,
    })}
  `; }

  // ══════════════════════════════════════════════════════════
  // 5.3.2 — Elektroden und Elektrodenpotenziale
  // ══════════════════════════════════════════════════════════
  _elektroden() { return `
    ${renderSubhead('5.3.2 — Elektroden und Elektrodenpotenziale')}

    <h3 class="lz-h3">Die Phasengrenze Metall | Elektrolyt</h3>
    <p class="lz-prose">
      An der Grenzfläche zwischen einem Metall und einer Elektrolytlösung
      stellen sich <strong>Elektroden­potenziale</strong> ein — durch das
      Bestreben des Metalls, Ionen in Lösung abzugeben (oder aufzunehmen).
      Diese Potenziale sind die Grundlage aller elektrochemischen Zellen.
    </p>

    ${renderMerkboxGrid([
      {
        icon: 'fas fa-arrow-circle-right',
        title: 'Elektrochemische Auflösung (Oxidation)',
        text: `Zink in Wasser: Zn(s) → Zn²⁺(aq) + 2e⁻
               Metallatome gehen als Ionen in Lösung; Elektronen bleiben im Metall.
               Metall lädt sich negativ auf → es entsteht eine negative Ladungsschicht.
               Dies ist eine Oxidation: Zn(0) → Zn(+II).`,
      },
      {
        icon: 'fas fa-arrow-circle-left',
        title: 'Elektrochemische Abscheidung (Reduktion)',
        text: `Kupfer in CuSO₄: Cu²⁺(aq) + 2e⁻ → Cu(s)
               Ionen aus der Lösung nehmen Elektronen auf und werden abgeschieden.
               Metall lädt sich positiv auf (Elektronen werden aufgenommen).
               Dies ist eine Reduktion: Cu(+II) → Cu(0).`,
      },
      {
        icon: 'fas fa-layer-group',
        title: 'Elektrochemische Doppelschicht',
        text: `An der Phasengrenze bildet sich eine Doppelschicht:
               Metallseite: überschüssige Elektronen (oder Mangel).
               Lösungsseite: ausgerichtete Ionen und Wassermoleküle.
               Diese Doppelschicht erzeugt das Elektrodenpotenzial.
               Helmholtz-Schicht (starr) + Gouy-Chapman-Schicht (diffus).`,
      },
    ])}

    <h3 class="lz-h3" style="margin-top:1.75rem;">Standardelektrodenpotenziale und SHE</h3>
    <p class="lz-prose">
      Absolute Elektrodenpotenziale sind nicht messbar — nur
      <strong>Potenzialdifferenzen</strong> zwischen zwei Elektroden.
      Als Referenz dient die <strong>Standard-Wasserstoffelektrode (SHE/NHE)</strong>,
      der willkürlich der Wert E° = 0,000 V zugewiesen wird.
    </p>

    ${renderInfobox({
      type: '', icon: 'fas fa-flask', title: 'Standard-Wasserstoffelektrode (SHE) — die universelle Referenz',
      body: `<strong>Aufbau:</strong> Platindraht (platiniert) taucht in 1 mol/L HCl;
             H₂-Gas (1 bar) wird über die Elektrode geleitet.<br><br>
             <strong>Gleichgewichtsreaktion:</strong> 2H⁺(aq, 1 mol/L) + 2e⁻ ⇌ H₂(g, 1 bar)<br><br>
             <strong>Standardbedingungen:</strong> c(H⁺) = 1 mol/L, p(H₂) = 1 bar, T = 298 K<br><br>
             Per Definition: E°(SHE) = 0,000 V<br>
             Alle anderen Standardpotenziale E° werden gegen SHE gemessen.`,
    })}

    ${renderFormulaBox({
      label:   'Nernst-Gleichung — Potenzial unter Nicht-Standardbedingungen',
      formula: 'E = E° + (R·T)/(n·F) · ln([Ox]/[Red])',
      desc:    'E: Elektrodenpotenzial [V] · E°: Standardelektrodenpotenzial [V] · R = 8,314 J/(mol·K) · T [K] · n: Anzahl übertragener Elektronen · F = 96 485 C/mol · Bei 25°C: E = E° + (0,0592/n) · lg([Ox]/[Red])',
    })}

    <h3 class="lz-h3" style="margin-top:1.75rem;">Standardelektrodenpotenziale — Elektrochemische Spannungsreihe</h3>
    <p class="lz-prose">
      Die Elektroden werden in aufsteigender Reihenfolge ihrer Standardpotenziale
      geordnet — das ergibt die <strong>elektrochemische Spannungsreihe</strong>.
      Unedlere Metalle (negativeres E°) stehen oben, edlere (positiveres E°) unten.
    </p>

    ${renderTable({
      headers: ['Halbzellenreaktion (Reduktion)', 'E° [V]', 'Einordnung'],
      rows: [
        ['Li⁺ + e⁻ → Li',                '−3,04', 'Unedelste Metalle; stärkste Reduktionsmittel'],
        ['K⁺ + e⁻ → K',                  '−2,93', '—'],
        ['Ca²⁺ + 2e⁻ → Ca',              '−2,87', '—'],
        ['Na⁺ + e⁻ → Na',                '−2,71', '—'],
        ['Mg²⁺ + 2e⁻ → Mg',              '−2,37', '—'],
        ['Al³⁺ + 3e⁻ → Al',              '−1,66', '—'],
        ['Zn²⁺ + 2e⁻ → Zn',              '−0,76', 'Unedel; Zinkanode in Batterien'],
        ['Fe²⁺ + 2e⁻ → Fe',              '−0,44', 'Rosten: Fe → Fe²⁺'],
        ['Ni²⁺ + 2e⁻ → Ni',              '−0,25', '—'],
        ['Pb²⁺ + 2e⁻ → Pb',              '−0,13', 'Bleiakkumulator-Anode'],
        ['2H⁺ + 2e⁻ → H₂',               '0,000', '← Referenz (SHE)'],
        ['Cu²⁺ + 2e⁻ → Cu',              '+0,34', 'Edelmetallbereich; Kupfer'],
        ['O₂ + 2H₂O + 4e⁻ → 4OH⁻',      '+0,40', 'Sauerstoffreduktion (neutral/basisch)'],
        ['Cu⁺ + e⁻ → Cu',                '+0,52', '—'],
        ['Fe³⁺ + e⁻ → Fe²⁺',             '+0,77', 'Wichtige Redoxreaktion'],
        ['Ag⁺ + e⁻ → Ag',                '+0,80', 'Edel; Silber'],
        ['Hg²⁺ + 2e⁻ → Hg',              '+0,85', '—'],
        ['O₂ + 4H⁺ + 4e⁻ → 2H₂O',        '+1,23', 'Sauerstoffreduktion (sauer)'],
        ['Cr₂O₇²⁻+14H⁺+6e⁻ → 2Cr³⁺+7H₂O','+1,33','Starkes Oxidationsmittel'],
        ['Cl₂ + 2e⁻ → 2Cl⁻',             '+1,36', 'Chlorgas: starkes Oxidationsmittel'],
        ['MnO₄⁻+8H⁺+5e⁻ → Mn²⁺+4H₂O',   '+1,51', 'Permanganat: Redoxtitration'],
        ['F₂ + 2e⁻ → 2F⁻',               '+2,87', 'Stärkstes Oxidationsmittel'],
      ],
      highlight: [10, 17, 20, 21],
    })}

    ${renderInfobox({
      type: 'warning', icon: 'fas fa-exclamation-triangle', title: 'Spannungsreihe lesen — Regeln',
      body: `<strong>Reduktionspotenziale:</strong> Alle E°-Werte beziehen sich auf die Reduktionsrichtung.<br><br>
             <strong>Reaktivität:</strong>
             Metall mit negativem E° → unedel → gibt leicht Elektronen ab → Reduktionsmittel.<br>
             Halbzelle mit positivem E° → edel → nimmt leicht Elektronen auf → Oxidationsmittel.<br><br>
             <strong>Spontane Reaktion:</strong>
             Unedlere Halbzelle reagiert als Anode (Oxidation),
             edlere als Kathode (Reduktion) → E_Zelle = E°_Kathode − E°_Anode > 0.<br><br>
             <strong>Merke:</strong> Zn löst sich in CuSO₄ auf (E°(Zn) < E°(Cu)) → Zn reduziert Cu²⁺.
             Cu löst sich nicht in ZnSO₄ auf (E°(Cu) > E°(Zn)).`,
    })}

    <h3 class="lz-h3" style="margin-top:1.75rem;">Anwendung der Nernst-Gleichung</h3>

    ${renderTable({
      headers: ['Halbreaktion', 'E° [V]', 'Nernst-Gleichung', 'Beispielrechnung'],
      rows: [
        ['Cu²⁺ + 2e⁻ → Cu',
         '+0,34',
         'E = 0,34 + (0,0592/2)·lg[Cu²⁺]',
         'c(Cu²⁺) = 0,01 mol/L: E = 0,34 + (0,0296)·(−2) = 0,34 − 0,059 = 0,281 V'],
        ['Zn²⁺ + 2e⁻ → Zn',
         '−0,76',
         'E = −0,76 + (0,0592/2)·lg[Zn²⁺]',
         'c(Zn²⁺) = 1 mol/L: E = −0,76 + 0 = −0,760 V (Standard)'],
        ['MnO₄⁻+8H⁺+5e⁻ → Mn²⁺+4H₂O',
         '+1,51',
         'E = 1,51 + (0,0592/5)·lg([MnO₄⁻][H⁺]⁸/[Mn²⁺])',
         'pH-Abhängigkeit: −8·0,0592/5 ≈ −0,095 V pro pH-Einheit → stark pH-abhängig!'],
        ['2H⁺ + 2e⁻ → H₂',
         '0,000',
         'E = 0 + (0,0592/2)·lg([H⁺]²/p(H₂))',
         'pH 7: E = (0,0592/2)·lg(10⁻¹⁴) = 0,0296·(−14) = −0,414 V'],
      ],
      highlight: [3],
    })}
  `; }

  // ══════════════════════════════════════════════════════════
  // 5.3.3 — Elektrochemische Zellen und Zellspannung
  // ══════════════════════════════════════════════════════════
  _zellen() { return `
    ${renderSubhead('5.3.3 — Elektrochemische Zellen und Zellspannung')}

    <h3 class="lz-h3">Aufbau einer galvanischen Zelle</h3>
    <p class="lz-prose">
      Eine <strong>galvanische Zelle</strong> (voltaische Zelle) wandelt
      die freie Enthalpie einer spontanen Redoxreaktion direkt in
      elektrische Energie um. Sie besteht aus zwei Halbzellen,
      die durch ein Salzbrücke (oder poröse Membran) verbunden sind.
    </p>

    ${renderTable({
      headers: ['Komponente', 'Funktion', 'Beispiel Daniell-Element'],
      rows: [
        ['Anode (−)',         'Oxidation findet statt; Elektronen fließen ab',         'Zink-Elektrode: Zn(s) → Zn²⁺(aq) + 2e⁻'],
        ['Kathode (+)',       'Reduktion findet statt; Elektronen fließen zu',          'Kupfer-Elektrode: Cu²⁺(aq) + 2e⁻ → Cu(s)'],
        ['Elektrolytlösungen','Ionenleitung in jeder Halbzelle',                       'ZnSO₄(aq) | CuSO₄(aq)'],
        ['Salzbrücke',        'Ionenleitung zwischen Halbzellen; verhindert Ladungsaufbau', 'KCl-Agar-Gel oder KNO₃-Lösung'],
        ['Externes Kabel',    'Elektronenleitung von Anode zu Kathode',                'Kupferdraht'],
        ['Voltmeter',         'Misst die Zellspannung (EMK)',                          'U_Zelle = E_Kathode − E_Anode'],
      ],
      highlight: [0, 1],
    })}

    ${renderFormulaBox({
      label:   'Zellspannung (elektromotorische Kraft EMK)',
      formula: 'E_Zelle = E_Kathode − E_Anode &nbsp; (unter Standardbed.: E°_Zelle = E°_Kathode − E°_Anode)',
      desc:    'E_Zelle > 0: spontane Reaktion (ΔG < 0) · E_Zelle < 0: Reaktion nicht spontan (Elektrolyse nötig) · ΔG° = −n·F·E°_Zelle · n: Elektronen pro Formeleinheit · F = 96 485 C/mol',
    })}

    <h3 class="lz-h3" style="margin-top:1.75rem;">Wichtige galvanische Zellen und Batterien</h3>

    ${renderAccordion([
      {
        title: 'Daniell-Element (1836) — Klassische galvanische Zelle',
        content: `<p class="lz-prose"><strong>Aufbau:</strong>
                  Zn|ZnSO₄(aq) ‖ CuSO₄(aq)|Cu</p>
                  <p class="lz-prose"><strong>Halbzellenreaktionen:</strong><br>
                  Anode (−): Zn(s) → Zn²⁺(aq) + 2e⁻ (E° = −0,76 V)<br>
                  Kathode (+): Cu²⁺(aq) + 2e⁻ → Cu(s) (E° = +0,34 V)<br>
                  Gesamt: Zn(s) + Cu²⁺(aq) → Zn²⁺(aq) + Cu(s)</p>
                  <p class="lz-prose"><strong>Zellspannung:</strong>
                  E°_Zelle = +0,34 − (−0,76) = <strong>+1,10 V</strong><br>
                  ΔG° = −2·96485·1,10 = <strong>−212 kJ/mol</strong></p>`,
      },
      {
        title: 'Bleiakkumulator (1859) — Wiederaufladbarer Akkumulator',
        content: `<p class="lz-prose"><strong>Elektrolyt:</strong> H₂SO₄ (c ≈ 4 mol/L, ρ ≈ 1,28 g/mL bei voll geladen)</p>
                  <p class="lz-prose"><strong>Entladung (Galvanische Zelle):</strong><br>
                  Anode (−): Pb(s) + SO₄²⁻ → PbSO₄(s) + 2e⁻ (E° = −0,36 V)<br>
                  Kathode (+): PbO₂(s) + SO₄²⁻ + 4H⁺ + 2e⁻ → PbSO₄(s) + 2H₂O (E° = +1,69 V)<br>
                  E°_Zelle = +1,69 − (−0,36) = <strong>+2,05 V pro Zelle</strong></p>
                  <p class="lz-prose"><strong>12V-Autobatterie:</strong> 6 Zellen × 2,05 V = 12,3 V<br>
                  <strong>Aufladen:</strong> Reaktion wird elektrisch umgekehrt.<br>
                  <strong>Ladezustandsdiagnose:</strong> Dichte der H₂SO₄ messen
                  (bei Entladung sinkt c(H₂SO₄) → ρ sinkt).<br>
                  <strong>Vorteile:</strong> Günstig, bewährt, hohe Stromstärken.<br>
                  <strong>Nachteile:</strong> Schwer (Pb!), H₂-Gasentwicklung beim Laden, Pb giftig.</p>`,
      },
      {
        title: 'Lithium-Ionen-Akkumulator — Moderne Energiespeicherung',
        content: `<p class="lz-prose"><strong>Prinzip:</strong> Li⁺-Ionen wandern beim Laden/Entladen
                  zwischen zwei Interkalationsmaterialien (Einlagerung in Schichtgitter).</p>
                  <p class="lz-prose"><strong>Entladung:</strong><br>
                  Anode (−): Li_xC₆ → C₆ + x Li⁺ + x e⁻ (Graphit gibt Li⁺ ab)<br>
                  Kathode (+): Li₁₋ₓCoO₂ + x Li⁺ + x e⁻ → LiCoO₂ (oder LiFePO₄, NMC)</p>
                  <p class="lz-prose"><strong>Eigenschaften:</strong>
                  E_Zelle ≈ 3,6–4,2 V · Energiedichte: 150–300 Wh/kg (viel besser als Pb: 35 Wh/kg) ·
                  Kein Memory-Effekt · Selbstentladung gering (~5%/Monat) ·
                  Lebensdauer: 500–2000 Zyklen.<br>
                  Nobel-Preis Chemie 2019: Goodenough, Whittingham, Yoshino.</p>`,
      },
      {
        title: 'Wasserstoff-Brennstoffzelle (PEM) — Direkte H₂-zu-Strom-Umwandlung',
        content: `<p class="lz-prose"><strong>Elektrolyt:</strong>
                  Protonenleitende Membran (Nafion®) — nur H⁺ kann passieren.</p>
                  <p class="lz-prose"><strong>Anode (−): Oxidation:</strong>
                  H₂ → 2H⁺ + 2e⁻ (Pt-Katalysator)<br>
                  <strong>Kathode (+): Reduktion:</strong>
                  ½O₂ + 2H⁺ + 2e⁻ → H₂O (Pt-Katalysator)<br>
                  <strong>Gesamt:</strong> H₂ + ½O₂ → H₂O (E°_Zelle = 1,23 V)</p>
                  <p class="lz-prose"><strong>Wirkungsgrad:</strong> ~50–60% elektrisch
                  (Wärmekraftmaschine: Carnot-Limit limitiert; Brennstoffzelle nicht!)<br>
                  <strong>Emissionen:</strong> nur H₂O<br>
                  <strong>Herausforderungen:</strong> H₂-Infrastruktur, Pt-Katalysator teuer,
                  Membranbeständigkeit, CO vergiftet Pt-Katalysator (< 10 ppm CO!).</p>`,
      },
      {
        title: 'Konzentrationszellen — Potenzial durch Konzentrationsunterschiede',
        content: `<p class="lz-prose">Zwei identische Halbzellen mit verschiedenen
                  Ionenkonzentrationen erzeugen eine Spannung:</p>
                  <p class="lz-prose"><strong>Beispiel Cu|Cu²⁺(0,001 M) ‖ Cu²⁺(1,000 M)|Cu:</strong><br>
                  Anode: Cu → Cu²⁺(0,001 M) + 2e⁻<br>
                  Kathode: Cu²⁺(1,000 M) + 2e⁻ → Cu<br>
                  E_Zelle = (0,0592/2) · lg(1,000/0,001) = 0,0296 · 3 = <strong>0,089 V</strong></p>
                  <p class="lz-prose"><strong>Biologische Bedeutung:</strong>
                  Membranpotenzial (Nernst-Potenzial) — Na⁺/K⁺-Gradient über Zellmembran
                  erzeugt ~−70 mV Ruhepotenzial (Aktionspotenzial bei Nerven).
                  pH-Messung mit Glaselektrode: H⁺-Konzentrationszelle!</p>`,
      },
    ])}

    ${renderFormulaBox({
      label:   'Zellnotation (IUPAC)',
      formula: 'Anode | Anodenlösung ‖ Kathodenlösung | Kathode',
      desc:    '| = Phasengrenze · ‖ = Salzbrücke · Einzelstrich | für direkte Phasengrenzen (ohne Salzbrücke) · Beispiel Daniell: Zn(s) | Zn²⁺(aq, 1 M) ‖ Cu²⁺(aq, 1 M) | Cu(s)',
    })}
  `; }

  // ══════════════════════════════════════════════════════════
  // 5.3.4 — Elektrolytische Prozesse
  // ══════════════════════════════════════════════════════════
  _elektrolyse() { return `
    ${renderSubhead('5.3.4 — Elektrolytische Prozesse')}

    <h3 class="lz-h3">Grundprinzip der Elektrolyse</h3>
    <p class="lz-prose">
      Bei der <strong>Elektrolyse</strong> wird eine nicht spontane Redoxreaktion
      durch Zufuhr elektrischer Energie erzwungen — es ist der Umkehrprozess
      zur galvanischen Zelle. Eine externe Spannungsquelle (Gleichspannung)
      treibt den Strom gegen die thermodynamisch bevorzugte Richtung.
    </p>

    ${renderCompare({
      titleA: 'Galvanische Zelle (Batterie)',
      titleB: 'Elektrolytische Zelle (Elektrolyse)',
      listA: [
        'Spontane Redoxreaktion (ΔG < 0)',
        'Erzeugt elektrische Energie',
        'E_Zelle > 0',
        'Anode: Oxidation (negative Elektrode)',
        'Kathode: Reduktion (positive Elektrode)',
        'Kein externer Stromfluss nötig',
      ],
      listB: [
        'Nicht-spontane Redoxreaktion (ΔG > 0)',
        'Verbraucht elektrische Energie',
        'Externe Spannung > E_Zelle nötig (Zersetzungsspannung + Überspannung)',
        'Anode: Oxidation (positive Elektrode, + Pol)',
        'Kathode: Reduktion (negative Elektrode, − Pol)',
        'Externe Stromquelle zwingend erforderlich',
      ],
    })}

    <h3 class="lz-h3" style="margin-top:1.75rem;">Faraday'sche Gesetze der Elektrolyse</h3>

    ${renderFormulaBox({
      label:   '1. Faraday\'sches Gesetz',
      formula: 'm = (M · I · t) / (z · F)',
      desc:    'm: abgeschiedene/aufgelöste Masse [g] · M: Molmasse [g/mol] · I: Stromstärke [A] · t: Zeit [s] · z: Ladungszahl (Anzahl übertragener Elektronen pro Ion) · F = 96 485 C/mol',
    })}

    ${renderFormulaBox({
      label:   '2. Faraday\'sches Gesetz',
      formula: 'm₁/m₂ = (M₁/z₁) / (M₂/z₂) = M₁_äq / M₂_äq',
      desc:    'Bei gleicher Ladung Q werden von verschiedenen Stoffen Massen proportional zu ihren molaren Äquivalentmassen M/z abgeschieden · M_äq = M/z: molare Äquivalentmasse [g/mol]',
    })}

    ${renderTable({
      headers: ['Stoff', 'z', 'M [g/mol]', 'M_äq [g/mol]', 'Abgeschieden pro 96 485 C (1 mol e⁻)'],
      rows: [
        ['Cu',  '2', '63,55',   '31,78',   '31,78 g Cu (½ mol)'],
        ['Ag',  '1', '107,87',  '107,87',  '107,87 g Ag (1 mol)'],
        ['Al',  '3', '26,98',   '8,99',    '8,99 g Al (⅓ mol)'],
        ['Ni',  '2', '58,69',   '29,35',   '29,35 g Ni'],
        ['Zn',  '2', '65,38',   '32,69',   '32,69 g Zn'],
        ['H₂',  '2', '2,016',   '1,008',   '1,008 g H₂ = 11,2 L (STP)'],
        ['O₂',  '4', '32,00',   '8,00',    '8,00 g O₂ = 5,6 L (STP)'],
        ['Cl₂', '2', '70,90',   '35,45',   '35,45 g Cl₂ = 11,2 L (STP)'],
      ],
      highlight: [0, 5, 6],
    })}

    <h3 class="lz-h3" style="margin-top:1.75rem;">Elektrolyse wässriger Lösungen — Elektrodenreaktionen</h3>
    <p class="lz-prose">
      In wässrigen Lösungen konkurrieren immer die Ionen des gelösten Salzes
      mit dem Wasser um Entladung an den Elektroden.
      Welche Reaktion stattfindet, hängt von den Elektrodenpotenzialen
      und der <strong>Überspannung</strong> ab.
    </p>

    ${renderInfobox({
      type: 'blue', icon: 'fas fa-info-circle', title: 'Überspannung (Overpotential) η',
      body: `Die tatsächlich benötigte Spannung zur Elektrolyse übersteigt den
             thermodynamischen Wert um die <strong>Überspannung η</strong>:<br><br>
             U_real = U_theoret + η_Anode + η_Kathode + IR-Abfall<br><br>
             <strong>Ursachen der Überspannung:</strong><br>
             ① Aktivierungsüberspannung: kinetische Hemmung des Ladungstransfers<br>
             ② Diffusionsüberspannung: langsame Zufuhr/Abfuhr von Reaktanden<br>
             ③ Widerstandsüberspannung: ohmscher Widerstand im Elektrolyten<br><br>
             <strong>Wichtigste Überspannung:</strong>
             H₂-Entwicklung auf Hg: η ≈ 1,2 V! → bei NaCl-Elektrolyse scheidet
             Na-Amalgam ab (trotz negativem E°), weil H₂-Abscheidung stark gehemmt ist.`,
    })}

    ${renderTable({
      headers: ['Elektrolyt', 'Kathode (Reduktion)', 'Anode (Oxidation)', 'Gesamtreaktion', 'Zersetzungsspannung'],
      rows: [
        ['Wasser (H₂O)',
         '2H₂O + 2e⁻ → H₂↑ + 2OH⁻ (oder: 2H⁺ + 2e⁻ → H₂↑)',
         '2H₂O → O₂↑ + 4H⁺ + 4e⁻',
         '2H₂O → 2H₂ + O₂ (Knallgas)',
         '≥ 1,23 V (theor.); ~1,7 V (prakt. mit η)'],
        ['NaCl(aq) verdünnt',
         '2H₂O + 2e⁻ → H₂↑ + 2OH⁻',
         '2Cl⁻ → Cl₂↑ + 2e⁻ (oder H₂O-Oxidation bei geringer c(Cl⁻))',
         'Technisch: Chloralkali-Elektrolyse',
         '≥ 2,2 V (prakt.)'],
        ['CuSO₄(aq)',
         'Cu²⁺ + 2e⁻ → Cu (bevorzugt vor H₂!)',
         'Cu → Cu²⁺ + 2e⁻ (lösliche Cu-Anode) oder 2H₂O → O₂ (inerte Anode)',
         'Elektrolytische Kupferraffination',
         '≈ 0,34 V + η'],
        ['AlCl₃(Schmelze bei 1000°C)',
         'Al³⁺ + 3e⁻ → Al(l)',
         '2Cl⁻ → Cl₂ + 2e⁻ oder C-Anode: C + O²⁻ → CO₂ + 4e⁻',
         'Aluminiumgewinnung (Hall-Héroult)',
         '≈ 4–5 V'],
      ],
      highlight: [0, 2],
    })}

    <h3 class="lz-h3" style="margin-top:1.75rem;">Technische Elektrolyseprozesse</h3>

    ${renderTable({
      headers: ['Verfahren', 'Produkte', 'Elektrolyt', 'Bedingungen', 'Weltproduktion / Bedeutung'],
      rows: [
        ['Chloralkali-Elektrolyse\n(Membranverfahren)',
         'Cl₂ (Anode), H₂ (Kathode), NaOH (Anolytraum)',
         'NaCl(aq) gesättigt',
         'Kationentauschermembran trennt Anolytraum / Katholytraum',
         '~75 Mio. t Cl₂/Jahr; Grundlage PVC, Lösungsmittel, Arzneimittel'],
        ['Aluminiumgewinnung\n(Hall-Héroult, 1886)',
         'Al (Kathode)',
         'Al₂O₃ gelöst in geschmolzenem Kryolith (Na₃AlF₆, ~960°C)',
         'C-Elektroden; 4–6 V; ~300 kA pro Zelle',
         '~65 Mio. t Al/Jahr; energieintensiv (13–14 kWh/kg Al)'],
        ['Wasserelektrolyse\n(alkalisch oder PEM)',
         'H₂ (Kathode), O₂ (Anode)',
         'KOH(aq) 30% oder Nafion-Membran (PEM)',
         '60–80°C; 1,8–2,1 V pro Zelle (prakt.)',
         'Grüner H₂; Power-to-Gas; Grundlage Wasserstoffwirtschaft'],
        ['Kupferraffination',
         'Reinkupfer (99,99%) an Kathode',
         'CuSO₄/H₂SO₄(aq)',
         'Rohkupfer-Anode löst sich; Edelmetalle (Ag, Au) fallen als Anodenschlamm',
         'Wertvoller Anodenschlamm enthält Ag, Au, Se, Te'],
        ['Galvanik (Elektroplattierung)',
         'Metallschicht auf Substrat',
         'Metallsalz des aufzutragenden Metalls',
         'Substrat = Kathode; Metallanode (oder inerte Anode)',
         'Vernickelung, Vergoldung, Verchromung, Verzinkung (Korrosionsschutz)'],
      ],
      highlight: [0, 1, 2],
    })}

    ${renderAccordion([
      {
        title: 'Berechnungsbeispiel: Kupferabscheidung',
        content: `<p class="lz-prose"><strong>Aufgabe:</strong>
                  Wie lange muss man 2,50 A durch CuSO₄(aq) leiten,
                  um 3,175 g Cu abzuscheiden?</p>
                  <p class="lz-prose"><strong>Lösung:</strong><br>
                  z(Cu) = 2; M(Cu) = 63,55 g/mol; I = 2,50 A; m = 3,175 g<br><br>
                  m = M·I·t / (z·F) → t = m·z·F / (M·I)<br>
                  t = 3,175 · 2 · 96485 / (63,55 · 2,50)<br>
                  t = 612 680 / 158,875 = <strong>3858 s ≈ 64,3 min</strong></p>`,
      },
      {
        title: 'Berechnungsbeispiel: Wasserelektrolyse',
        content: `<p class="lz-prose"><strong>Aufgabe:</strong>
                  Ein Elektrolyseur liefert 5,00 L H₂ (STP, 0°C, 1013 hPa) pro Stunde.
                  Welche Stromstärke ist nötig?</p>
                  <p class="lz-prose"><strong>Lösung:</strong><br>
                  n(H₂) = V/Vₘ = 5,00 L / 22,414 L/mol = 0,2231 mol/h<br>
                  2H⁺ + 2e⁻ → H₂ → z(H₂) = 2<br>
                  Q = n·z·F = 0,2231 · 2 · 96485 = 43 059 C/h<br>
                  I = Q/t = 43 059 C / 3600 s = <strong>11,96 A ≈ 12,0 A</strong></p>`,
      },
      {
        title: 'Korrosion — elektrochemischer Metallabbau',
        content: `<p class="lz-prose">Korrosion ist elektrochemischer Metallabbau durch
                  galvanische Lokalelemente an der Metalloberfläche.</p>
                  <p class="lz-prose"><strong>Eisenkorrosion (Rosten) — zweistufiger Prozess:</strong><br>
                  Anode (Eisen): Fe → Fe²⁺ + 2e⁻ (E° = −0,44 V)<br>
                  Kathode (Sauerstoff in feuchter Luft): O₂ + 2H₂O + 4e⁻ → 4OH⁻ (E° = +0,40 V)<br>
                  Gesamt: 2Fe + O₂ + 2H₂O → 2Fe(OH)₂ → Fe₂O₃·nH₂O (Rost)<br><br>
                  <strong>Korrosionsschutz:</strong><br>
                  ① Opferanode: Zn- oder Mg-Anode (unedler) löst sich auf statt Fe<br>
                  ② Verzinkung: dünne Zn-Schicht schützt durch Opferanoden-Wirkung<br>
                  ③ Lackierung / Beschichtung: trennt Fe von Elektrolyt (H₂O, O₂)<br>
                  ④ Passivierung: Fe mit Cr → Cr₂O₃-Schutzschicht (Edelstahl: ≥10,5% Cr)<br>
                  ⑤ Kathodischer Schutz: äußere Gleichspannung macht Fe zur Kathode</p>`,
      },
    ])}

    ${renderInfobox({
      type: 'success', icon: 'fas fa-graduation-cap', title: 'Zusammenfassung Elektrochemie',
      body: `<strong>Leitungstypen:</strong> 1. Art (Elektronen/Metalle) vs. 2. Art (Ionen/Elektrolyte) · Grotthuss für H⁺<br>
             <strong>Elektroden:</strong> Anode = Oxidation · Kathode = Reduktion (immer!)<br>
             <strong>SHE:</strong> E° = 0,000 V · Referenz für alle Standardpotenziale<br>
             <strong>Nernst:</strong> E = E° + (0,0592/n)·lg([Ox]/[Red]) bei 25°C<br>
             <strong>Zellspannung:</strong> E_Zelle = E_Kathode − E_Anode · ΔG = −nFE<br>
             <strong>Faraday:</strong> m = MIt/(zF) · M_äq = M/z<br>
             <strong>Wichtige Zellen:</strong> Daniell (Zn/Cu, 1,10 V) · Bleiakku (2,05 V/Zelle) · Li-Ion (3,6 V) · Brennstoffzelle (1,23 V)<br>
             <strong>Korrosion:</strong> Fe als Anode (E° = −0,44 V); O₂ als Kathode; Schutz durch Opferanode, Passivierung, Lackierung`,
    })}
  `; }

  init() {
    i18n.init();
    initScrollReveal();
    initInteractive(document);
    initTabs();
  }
}