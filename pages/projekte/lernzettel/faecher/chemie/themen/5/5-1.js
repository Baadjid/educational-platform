// pages/projekte/lernzettel/faecher/chemie/themen/5/5-1.js
// Kapitel 5.1 — Chemische Thermodynamik
// 5.1.1  Energie und Energieerhaltung
// 5.1.2  Der erste Hauptsatz der Thermodynamik
// 5.1.3  Der zweite Hauptsatz der Thermodynamik
// 5.1.4  Die freie Enthalpie

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
  { key: '511', icon: 'fas fa-fire',           label: '5.1.1 Energie & Erhaltung'      },
  { key: '512', icon: 'fas fa-temperature-high',label: '5.1.2 Erster Hauptsatz'        },
  { key: '513', icon: 'fas fa-random',          label: '5.1.3 Zweiter Hauptsatz'       },
  { key: '514', icon: 'fas fa-balance-scale',   label: '5.1.4 Freie Enthalpie'         },
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
  return `<nav class="wim-tabs" role="tablist" id="tabs51">${nav}</nav>${panels}`;
}

function initTabs() {
  const nav = document.getElementById('tabs51');
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

export default class Chemie_5_1 {
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
          <i class="fas fa-chevron-right"></i><span>5.1</span>
        </div>
        <h1 class="lz-sub-title">Chemische Thermodynamik<br><em>Energie, Entropie und Spontaneität</em></h1>
        <p class="lz-sub-desc">
          Energieerhaltung · Enthalpie · Hess'scher Wärmesatz · Entropie ·
          Freie Enthalpie · Spontaneität chemischer Reaktionen
        </p>
        ${renderTags(['Kap. 5.1', 'Thermodynamik', 'Enthalpie', 'Entropie', 'ΔG', 'LK Chemie BW'])}
      </div>
    </section>

    <section class="lz-content-section">
      <div class="lz-section-wrap">
        ${buildWimHTML(k => {
          if (k === '511') return this._energie();
          if (k === '512') return this._erster();
          if (k === '513') return this._zweiter();
          if (k === '514') return this._gibbs();
          return '';
        })}
      </div>
    </section>

    <section class="lz-content-section" style="padding:1.5rem 0 3rem;">
      <div class="lz-section-wrap">
        ${renderPageNav({
          prev: { label: '4.2 Zwischenmolekulare Kräfte', link: `${BASE}/themen/4/4-2` },
          next: { label: '5.2 Chemische Kinetik',         link: `${BASE}/themen/5/5-2` },
        }, BASE)}
      </div>
    </section>
    ${footerHTML(this.router)}
  `; }

  // ══════════════════════════════════════════════════════════
  // 5.1.1 — Energie und Energieerhaltung
  // ══════════════════════════════════════════════════════════
  _energie() { return `
    ${renderSubhead('5.1.1 — Energie und Energieerhaltung')}

    <h2 class="lz-h2">Energie in der Chemie</h2>
    <p class="lz-prose">
      Jede chemische Reaktion ist untrennbar mit Energieumsätzen verbunden.
      Die Chemische Thermodynamik untersucht, welche Energieformen auftreten,
      wie Energie zwischen System und Umgebung ausgetauscht wird und —
      entscheidend — <strong>warum und ob eine Reaktion überhaupt abläuft</strong>.
    </p>

    <h3 class="lz-h3">Systeme und ihre Grenzen</h3>

    ${renderTable({
      headers: ['Systemtyp', 'Stoff-Austausch', 'Energie-Austausch', 'Beispiel', 'Thermodynamisch'],
      rows: [
        ['Offenes System',     'Ja',  'Ja',  'Brennende Kerze, Lebewesen, offener Kolben', 'Behandlung komplex — Enthalpie H bevorzugt'],
        ['Geschlossenes System','Nein','Ja',  'Verschlossener Kolben, Kalorimeter',         'Austausch nur als Wärme Q und Arbeit W'],
        ['Isoliertes System',  'Nein','Nein', 'Ideale Thermosflasche, Universum als Ganzes', 'ΔU = 0; Q = 0; W = 0'],
      ],
      highlight: [0],
    })}

    <h3 class="lz-h3" style="margin-top:1.75rem;">Energieformen und Umwandlungen</h3>

    ${renderMerkboxGrid([
      {
        icon: 'fas fa-fire',
        title: 'Innere Energie U',
        text: `Summe aller kinetischen und potenziellen Energien aller Teilchen im System:
               Translationsenergie, Rotationsenergie, Schwingungsenergie der Atome,
               Elektronenenergie, Kernenergie.
               U ist eine Zustandsfunktion — nur Differenz ΔU = U₂ − U₁ ist messbar.`,
      },
      {
        icon: 'fas fa-thermometer-half',
        title: 'Wärme Q',
        text: `Energie, die aufgrund einer Temperaturdifferenz übertragen wird.
               Q > 0: System nimmt Wärme auf (endotherm).
               Q < 0: System gibt Wärme ab (exotherm).
               Q ist eine Prozessgröße — hängt vom Weg ab (keine Zustandsfunktion).`,
      },
      {
        icon: 'fas fa-compress-arrows-alt',
        title: 'Arbeit W',
        text: `Volumenarbeit: W = −p_ext · ΔV (System gegen äußeren Druck).
               Bei konstantem Druck und ΔV > 0: System leistet Arbeit (W < 0).
               Weitere Arbeitsformen: elektrische Arbeit (Batterien), Oberflächenarbeit.
               W ist wie Q eine Prozessgröße.`,
      },
      {
        icon: 'fas fa-bolt',
        title: 'Enthalpie H',
        text: `H = U + p·V — definierte Zustandsfunktion.
               Bei konstantem Druck: ΔH = Q_p (Wärme bei konst. p).
               Die für die Chemie praktisch wichtigste Energiegröße,
               da die meisten Reaktionen bei konstantem Atmosphärendruck ablaufen.`,
      },
    ])}

    ${renderFormulaBox({
      label:   'Wärme und Kalorimetrie',
      formula: 'Q = m · c_spez · ΔT &nbsp; oder &nbsp; Q = C_Kalor · ΔT',
      desc:    'm [g] · c_spez: spezifische Wärmekapazität [J/(g·K)] · ΔT = T_End − T_Anf [K] · C_Kalor: Wärmekapazität des Kalorimeters [J/K] · c_spez(H₂O) = 4,182 J/(g·K)',
    })}

    <h3 class="lz-h3" style="margin-top:1.75rem;">Kalorimetrie — experimentelle Bestimmung von ΔH</h3>

    ${renderTable({
      headers: ['Kalorimeter-Typ', 'Bedingung', 'Gemessene Größe', 'Berechnung', 'Anwendung'],
      rows: [
        ['Kaffeebecher-Kalorimeter', 'p = const. (offen)', 'ΔT der Lösung', 'ΔH = −m·c·ΔT / n_Stoff', 'Neutralisations-, Lösungsenthalpie; Schule'],
        ['Bombe-Kalorimeter', 'V = const. (geschlossen)', 'ΔT im Wasserbad', 'ΔU = −C_Kalor·ΔT / n; ΔH = ΔU + Δn_gas·R·T', 'Verbrennungsenthalpien; genaue Messungen'],
        ['Differentialkalorimeter DSC', 'p = const.; kontr. Heizrate', 'Wärmefluss vs. T', 'Phasenübergänge, Reaktionsenthalpien direkt', 'Pharmakologie, Materialforschung, Polymerchemie'],
      ],
      highlight: [0],
    })}

    ${renderInfobox({
      type: 'warning', icon: 'fas fa-exclamation-triangle', title: 'Vorzeichenkonvention — System-Perspektive!',
      body: `In der IUPAC-Konvention ist immer die Perspektive des <strong>Systems</strong>:<br><br>
             <strong>ΔH < 0 (negativ):</strong> exotherm — System gibt Wärme ab → Umgebung erwärmt sich.<br>
             <strong>ΔH > 0 (positiv):</strong> endotherm — System nimmt Wärme auf → Umgebung kühlt ab.<br><br>
             Häufiger Fehler: „Bei exothermer Reaktion wird Wärme frei" — dies gilt aus Sicht der Umgebung.
             Das System verliert Energie → ΔH < 0.<br><br>
             <strong>Q = −ΔH_Reaktion</strong> (Kalorimeter misst die von der Umgebung aufgenommene Wärme,
             die dem negativen Wert der Reaktionsenthalpie entspricht).`,
    })}
  `; }

  // ══════════════════════════════════════════════════════════
  // 5.1.2 — Der erste Hauptsatz der Thermodynamik
  // ══════════════════════════════════════════════════════════
  _erster() { return `
    ${renderSubhead('5.1.2 — Der erste Hauptsatz der Thermodynamik')}

    <h3 class="lz-h3">Formulierung und Bedeutung</h3>
    <p class="lz-prose">
      Der <strong>erste Hauptsatz der Thermodynamik</strong> ist das
      Gesetz der Energieerhaltung, angewendet auf thermodynamische Systeme.
      Energie kann weder erzeugt noch vernichtet werden —
      sie kann nur zwischen verschiedenen Formen umgewandelt werden
      oder zwischen System und Umgebung übertragen werden.
    </p>

    ${renderFormulaBox({
      label:   'Erster Hauptsatz der Thermodynamik',
      formula: 'ΔU = Q + W &nbsp; (IUPAC-Konvention)',
      desc:    'ΔU: Änderung der inneren Energie des Systems [J] · Q: zugeführte Wärme (Q>0: System nimmt auf) [J] · W: am System verrichtete Arbeit (W>0: Umgebung verrichtet Arbeit am System) [J] · Alternativnotation: ΔU = Q − W (W = vom System verrichtete Arbeit)',
    })}

    ${renderFormulaBox({
      label:   'Enthalpie und 1. HS bei konstantem Druck',
      formula: 'H = U + p·V &nbsp; → &nbsp; ΔH = ΔU + p·ΔV &nbsp; = &nbsp; Q_p',
      desc:    'Bei konstantem Druck: Volumenarbeit W = −p·ΔV → ΔU = Q_p − p·ΔV → Q_p = ΔU + p·ΔV = ΔH · ΔH direkt messbar durch Kalorimetrie',
    })}

    <h3 class="lz-h3" style="margin-top:1.75rem;">Reaktionsenthalpie und Standardbedingungen</h3>
    <p class="lz-prose">
      Die <strong>Standardreaktionsenthalpie ΔH°_R</strong> ist die Reaktionsenthalpie
      unter Standardbedingungen: T = 298,15 K (25°C), p° = 100 kPa (1 bar),
      alle Stoffe in ihrem Standardzustand (stabilste Form des reinen Elements oder Verbindung).
    </p>

    ${renderTable({
      headers: ['Enthalpietyp', 'Symbol', 'Definition', 'Beispiel'],
      rows: [
        ['Reaktionsenthalpie',    'ΔH°_R', 'Enthalpieänderung bei der Reaktion gemäß Gleichung', 'N₂ + 3H₂ → 2NH₃: ΔH°_R = −92,4 kJ/mol'],
        ['Bildungsenthalpie',     'ΔH°_f', 'ΔH bei Bildung von 1 mol Verbindung aus Elementen (Standardzustand)', 'H₂O(l): ΔH°_f = −285,8 kJ/mol · CO₂(g): −393,5 kJ/mol'],
        ['Verbrennungsenthalpie', 'ΔH°_c', 'ΔH bei vollständiger Verbrennung mit O₂', 'CH₄(g): ΔH°_c = −890 kJ/mol · C₆H₁₂O₆(s): −2803 kJ/mol'],
        ['Neutralisationsenthalpie','ΔH°_N','ΔH bei Reaktion von 1 mol H⁺ mit 1 mol OH⁻', 'Starke S./B.: ΔH°_N = −57,3 kJ/mol'],
        ['Lösungsenthalpie',      'ΔH°_sol','ΔH beim Lösen von 1 mol Stoff in viel Lösungsmittel', 'NaOH: −44,5 kJ/mol · NH₄NO₃: +25,7 kJ/mol'],
        ['Gitterenthalpie',       'ΔH°_L', 'ΔH bei Bildung von 1 mol Ionenkristall aus gasförmigen Ionen', 'NaCl: −787 kJ/mol'],
        ['Hydratationsenthalpie', 'ΔH°_hyd','ΔH bei Hydratation von 1 mol gasförmiger Ionen', 'Na⁺: −406 kJ/mol · Cl⁻: −363 kJ/mol'],
      ],
      highlight: [0, 1],
    })}

    <h3 class="lz-h3" style="margin-top:1.75rem;">Hess'scher Wärmesatz und Bildungsenthalpien</h3>
    <p class="lz-prose">
      Der <strong>Hess'sche Wärmesatz</strong> (1840) folgt direkt aus dem 1. HS:
      Da die Enthalpie eine Zustandsfunktion ist, ist ΔH unabhängig vom Reaktionsweg —
      nur Anfangs- und Endzustand bestimmen ΔH_R.
    </p>

    ${renderFormulaBox({
      label:   'Hess\'scher Wärmesatz — Berechnung aus Bildungsenthalpien',
      formula: 'ΔH°_R = Σ ν_Produkte · ΔH°_f(Produkte) − Σ ν_Edukte · ΔH°_f(Edukte)',
      desc:    'ν: stöchiometrische Koeffizienten · ΔH°_f der stabilen Elementform = 0 kJ/mol (Definition) · Beispiel: C(Graphit), O₂(g), H₂(g), N₂(g), Fe(s): alle ΔH°_f = 0',
    })}

    ${renderTable({
      headers: ['Verbindung', 'ΔH°_f [kJ/mol]', 'Aggregatzustand'],
      rows: [
        ['H₂O',         '−285,8',  'l'],
        ['H₂O',         '−241,8',  'g (Verdampfung +44,0 kJ/mol)'],
        ['CO₂',         '−393,5',  'g'],
        ['CO',          '−110,5',  'g'],
        ['NH₃',         '−46,1',   'g'],
        ['NO',          '+90,3',   'g (endotherm!)'],
        ['NO₂',         '+33,2',   'g'],
        ['HCl',         '−92,3',   'g'],
        ['NaCl',        '−411,1',  's'],
        ['CH₄',         '−74,8',   'g'],
        ['C₂H₅OH',      '−277,7',  'l'],
        ['C₆H₁₂O₆',    '−1273,1', 's (Glucose)'],
        ['Saccharose',  '−2222,0', 's'],
        ['CaCO₃',       '−1206,9', 's (Calcit)'],
        ['Fe₂O₃',       '−824,2',  's'],
        ['Al₂O₃',       '−1675,7', 's (sehr stabil!)'],
      ],
      highlight: [0, 2, 9],
    })}

    ${renderAccordion([
      {
        title: 'Berechnungsbeispiel: Verbrennungsenthalpie von Ethan C₂H₆',
        content: `<p class="lz-prose"><strong>Reaktionsgleichung:</strong>
                  2 C₂H₆(g) + 7 O₂(g) → 4 CO₂(g) + 6 H₂O(l)</p>
                  <p class="lz-prose"><strong>Schritt 1 — Bildungsenthalpien:</strong><br>
                  ΔH°_f(C₂H₆) = −84,7 kJ/mol · ΔH°_f(O₂) = 0 · ΔH°_f(CO₂) = −393,5 kJ/mol · ΔH°_f(H₂O,l) = −285,8 kJ/mol</p>
                  <p class="lz-prose"><strong>Schritt 2 — Hess:</strong><br>
                  ΔH°_R = [4·(−393,5) + 6·(−285,8)] − [2·(−84,7) + 7·0]<br>
                  = [−1574,0 + (−1714,8)] − [−169,4]<br>
                  = −3288,8 + 169,4 = <strong>−3119,4 kJ</strong><br>
                  Pro mol Ethan: −3119,4/2 = <strong>−1559,7 kJ/mol</strong></p>`,
      },
      {
        title: 'Born-Haber-Kreisprozess — Gitterenergie von CaF₂',
        content: `<p class="lz-prose">Über Hess'schen Wärmesatz kann die nicht direkt
                  messbare Gitterenergie berechnet werden:</p>
                  <p class="lz-prose">
                  Ca(s) → Ca(g): +178 kJ/mol (Sublimation)<br>
                  F₂(g) → 2F(g): +159 kJ/mol (Dissoziation)<br>
                  Ca(g) → Ca²⁺(g) + 2e⁻: IE₁+IE₂ = +590+1145 = +1735 kJ/mol<br>
                  2F(g) + 2e⁻ → 2F⁻(g): 2×(−328) = −656 kJ/mol (EA)<br>
                  ΔH°_f(CaF₂,s) = −1228 kJ/mol (experimentell)<br><br>
                  Gitterenergie U = ΔH°_f − (Sub+Dis+IE+EA)<br>
                  U = −1228 − (178+159+1735−656) = −1228 − 1416 = <strong>−2644 kJ/mol</strong></p>`,
      },
      {
        title: 'Kirchhoff\'sches Gesetz — Temperaturabhängigkeit von ΔH',
        content: `<p class="lz-prose">ΔH hängt von der Temperatur ab, weil die
                  Wärmekapazitäten der Edukte und Produkte verschieden sind:</p>
                  <div class="lz-formula-box">
                    <div class="lz-formula-main">ΔH°_R(T₂) = ΔH°_R(T₁) + ΔC_p · (T₂ − T₁)</div>
                    <div class="lz-formula-desc">ΔC_p = Σ C_p(Produkte) − Σ C_p(Edukte) [J/(mol·K)]</div>
                  </div>
                  <p class="lz-prose">Für viele Reaktionen ist ΔC_p klein →
                  ΔH ändert sich wenig mit T. Bei großen Temperaturbereichen
                  (z.B. Hochtemperaturreaktionen) wird die Korrektur wichtig.</p>`,
      },
    ])}
  `; }

  // ══════════════════════════════════════════════════════════
  // 5.1.3 — Der zweite Hauptsatz der Thermodynamik
  // ══════════════════════════════════════════════════════════
  _zweiter() { return `
    ${renderSubhead('5.1.3 — Der zweite Hauptsatz der Thermodynamik')}

    <h3 class="lz-h3">Das Problem mit dem ersten Hauptsatz</h3>
    <p class="lz-prose">
      Der erste Hauptsatz sagt nichts darüber, <em>in welche Richtung</em>
      eine Reaktion abläuft. Energieerhaltung erlaubt Wärmefluss vom Kälteren
      zum Wärmeren — doch das beobachtet man nie. Der
      <strong>zweite Hauptsatz</strong> beantwortet die Frage nach der
      <em>Richtung</em> spontaner Prozesse.
    </p>

    ${renderInfobox({
      type: 'blue', icon: 'fas fa-random', title: 'Formulierungen des 2. Hauptsatzes',
      body: `<strong>Clausius (1850):</strong> Wärme fließt spontan immer vom wärmeren
             zum kälteren Körper, nie umgekehrt.<br><br>
             <strong>Kelvin (1851):</strong> Es ist unmöglich, eine periodisch arbeitende
             Maschine zu konstruieren, die ausschließlich Wärme in Arbeit umwandelt
             (kein Perpetuum mobile zweiter Art).<br><br>
             <strong>Entropieformulierung (modern):</strong> Die Gesamtentropie
             des Universums (System + Umgebung) kann bei spontanen Prozessen
             nur zunehmen oder konstant bleiben — niemals abnehmen:<br>
             <strong>ΔS_Universum = ΔS_System + ΔS_Umgebung ≥ 0</strong>`,
    })}

    <h3 class="lz-h3" style="margin-top:1.75rem;">Entropie S — das Maß für Unordnung</h3>
    <p class="lz-prose">
      Die <strong>Entropie S</strong> ist eine thermodynamische Zustandsfunktion,
      die quantitativ beschreibt, wie viele Mikrozustände einem makroskopischen
      Zustand entsprechen — also ein Maß für <em>Unordnung</em> oder
      <em>Verteilung</em> auf Teilchenebene.
    </p>

    ${renderFormulaBox({
      label:   'Boltzmann-Gleichung (statistische Thermodynamik)',
      formula: 'S = k_B · ln(Ω)',
      desc:    'S: Entropie [J/K] · k_B = 1,381·10⁻²³ J/K (Boltzmann-Konstante) · Ω: Anzahl der Mikrozustände (Thermodynamische Wahrscheinlichkeit) · Auf Boltzmanns Grabstein in Wien eingraviert',
    })}

    ${renderFormulaBox({
      label:   'Thermodynamische Definition der Entropie (reversibel)',
      formula: 'dS = δQ_rev / T &nbsp; oder &nbsp; ΔS = Q_rev / T',
      desc:    'Nur für reversible Prozesse exakt · T: absolute Temperatur [K] · ΔS [J/K] oder [J/(mol·K)] · Je niedriger T, desto mehr Entropieänderung pro Wärmeeinheit',
    })}

    <h3 class="lz-h3" style="margin-top:1.75rem;">Entropieänderungen verstehen</h3>

    ${renderTable({
      headers: ['Prozess', 'ΔS', 'Erklärung auf Teilchenebene'],
      rows: [
        ['Schmelzen:         Fest → Flüssig',       '> 0', 'Mehr Unordnung: Teilchen nicht mehr im Gitter fixiert; mehr Mikrozustände'],
        ['Verdampfen:        Flüssig → Gas',         '> 0 (stark)', 'Viel mehr Unordnung: Gasteilchen füllen viel größeres Volumen; Ω enorm größer'],
        ['Auflösen:         Salz → Lösung',          '> 0 (meist)', 'Ionen hydratiert und über Lösung verteilt; Ausnahme: H-Brücken-Strukturbildung'],
        ['Gasreaktion +Δn:   Mehr Gasmole',          '> 0', 'Mehr Gasteilchen → mehr Mikrozustände; 1 mol N₂O₄ → 2 mol NO₂: ΔS > 0'],
        ['Gasreaktion −Δn:   Weniger Gasmole',        '< 0', 'Weniger Gasteilchen → weniger Mikrozustände; N₂ + 3H₂ → 2NH₃: ΔS < 0'],
        ['Temperaturerhöhung',                        '> 0', 'Mehr kinetische Energie → mehr zugängliche Energiezustände → größeres Ω'],
        ['Druckerhöhung eines Gases',                '< 0', 'Kleineres Volumen → weniger Mikrozustände; Ω sinkt'],
        ['Kristallisation',  '< 0',                  'Geordneteres Gitter → weniger Mikrozustände; ΔS_System < 0 (aber ΔS_Umgebung > 0)'],
      ],
      highlight: [1, 4],
    })}

    ${renderTable({
      headers: ['Stoff', 'S° [J/(mol·K)]', 'Aggregatzustand', 'Erklärung'],
      rows: [
        ['C (Diamant)',  '2,4',   's', 'Sehr geordnet; starres Gitter; kleinstes S°'],
        ['C (Graphit)',  '5,7',   's', 'Schichten können gleiten; mehr Unordnung als Diamant'],
        ['Fe',           '27,3',  's', 'Metall; Elektronengasbeitrag'],
        ['NaCl',         '72,1',  's', 'Ionengitter; zwei Ionensorten'],
        ['H₂O',          '69,9',  'l', 'Flüssig; H-Brücken-Netzwerk'],
        ['H₂',           '130,6', 'g', 'Gas; viel höher als flüssig/fest'],
        ['N₂',           '191,6', 'g', '—'],
        ['O₂',           '205,1', 'g', '—'],
        ['CO₂',          '213,8', 'g', 'Mehr Atome → mehr Schwingungsfreiheitsgrade'],
        ['C₂H₅OH',       '160,7', 'l', 'Komplexes Molekül; viele Freiheitsgrade'],
        ['C₆H₁₂O₆',     '210,5', 's', 'Großes Molekül; viele Schwingungsmoden'],
      ],
      highlight: [4, 5],
    })}

    ${renderFormulaBox({
      label:   'Standardreaktionsentropie',
      formula: 'ΔS°_R = Σ ν_Prod · S°(Prod) − Σ ν_Edukt · S°(Edukt)',
      desc:    'S°-Werte aus Tabellen [J/(mol·K)] · Achtung: Nicht gleich Null für Elemente! (nur ΔH°_f = 0 für Elemente im Standardzustand)',
    })}

    <h3 class="lz-h3" style="margin-top:1.75rem;">Dritter Hauptsatz — absoluter Nullpunkt der Entropie</h3>

    ${renderInfobox({
      type: '', icon: 'fas fa-snowflake', title: 'Dritter Hauptsatz (Nernst-Theorem)',
      body: `Die Entropie eines perfekten Kristalls einer reinen Substanz
             nähert sich dem Wert Null, wenn die Temperatur gegen den absoluten
             Nullpunkt geht:<br><br>
             <strong>lim(T→0 K) S = 0</strong> (nur für perfekte Kristalle)<br><br>
             Dies ermöglicht die Bestimmung <em>absoluter</em> Entropiewerte S°
             (im Gegensatz zu ΔH°, wo nur Differenzen messbar sind).<br><br>
             Praktisch: Bei T = 0 K gibt es genau einen Mikrozustand →
             Ω = 1 → S = k_B · ln(1) = 0. Residualentropie bei Gläsern und
             gemischten Kristallen bleibt > 0 (Unordnung eingefroren).`,
    })}
  `; }

  // ══════════════════════════════════════════════════════════
  // 5.1.4 — Die freie Enthalpie
  // ══════════════════════════════════════════════════════════
  _gibbs() { return `
    ${renderSubhead('5.1.4 — Die freie Enthalpie (Gibbs-Energie)')}

    <h3 class="lz-h3">Spontaneität — das zentrale Kriterium</h3>
    <p class="lz-prose">
      Warum laufen manche Reaktionen spontan ab und andere nicht?
      Weder ΔH noch ΔS allein entscheiden:
      Exotherme Reaktionen (ΔH < 0) laufen meist spontan, aber nicht immer.
      Endotherme Reaktionen (ΔH > 0) laufen spontan, wenn ΔS groß genug.
      Das Kriterium für Spontaneität muss beide Größen kombinieren.
      Das leistet die <strong>freie Enthalpie G</strong> (Gibbs-Energie,
      nach Josiah Willard Gibbs, 1878).
    </p>

    ${renderFormulaBox({
      label:   'Gibbs-Helmholtz-Gleichung — Definition der freien Enthalpie',
      formula: 'G = H − T · S &nbsp; → &nbsp; ΔG = ΔH − T · ΔS',
      desc:    'G: freie Enthalpie [J oder kJ] · H: Enthalpie · T: Temperatur [K] (nicht °C!) · S: Entropie · ΔG < 0: spontan · ΔG = 0: Gleichgewicht · ΔG > 0: nicht spontan (Rückreaktion spontan)',
    })}

    <h3 class="lz-h3" style="margin-top:1.75rem;">Spontaneität in Abhängigkeit von ΔH und ΔS</h3>

    ${renderTable({
      headers: ['ΔH', 'ΔS', 'ΔG = ΔH − T·ΔS', 'Spontaneität', 'Beispiel'],
      rows: [
        ['< 0 (exotherm)',  '> 0',  '< 0 immer',                'Immer spontan (bei allen T)',      'Verbrennung; Explosion; Fe₂O₃-Bildung (Rosten)'],
        ['< 0 (exotherm)',  '< 0',  '< 0 nur wenn |ΔH| > T·|ΔS|','Spontan nur bei niedrigen T',     'NH₃-Synthese (Haber-Bosch): spontan, aber langsam; HF-Bildung'],
        ['> 0 (endotherm)', '> 0',  '< 0 nur wenn T·ΔS > ΔH',   'Spontan nur bei hohen T',         'CaCO₃-Zersetzung (T > 840°C); Elektrolyse; Schmelzen'],
        ['> 0 (endotherm)', '< 0',  '> 0 immer',                 'Nie spontan (Rückreaktion läuft)', 'Bildung von NO aus N₂+O₂ (ΔH=+180, ΔS<0)'],
      ],
      highlight: [0, 3],
    })}

    ${renderInfobox({
      type: 'blue', icon: 'fas fa-info-circle', title: 'Umkehrtemperatur — wann ändert sich das Vorzeichen von ΔG?',
      body: `Bei ΔH und ΔS mit gleichem Vorzeichen gibt es eine
             <strong>Umkehrtemperatur T_U</strong>, bei der ΔG = 0 (Gleichgewicht).
             Ober- oder unterhalb davon ändert sich die Spontaneität:<br><br>
             <strong>T_U = ΔH / ΔS</strong><br><br>
             Beispiel CaCO₃-Zersetzung: CaCO₃(s) → CaO(s) + CO₂(g)<br>
             ΔH° = +178 kJ/mol · ΔS° = +161 J/(mol·K) = +0,161 kJ/(mol·K)<br>
             T_U = 178 / 0,161 = <strong>1106 K ≈ 833°C</strong><br>
             Bei T > 833°C: ΔG < 0 → spontane Zersetzung (Kalkbrennen!)<br>
             Bei T < 833°C: ΔG > 0 → CaO + CO₂ → CaCO₃ bevorzugt`,
    })}

    <h3 class="lz-h3" style="margin-top:1.75rem;">Standardwerte und Berechnung von ΔG°</h3>

    ${renderFormulaBox({
      label:   'Standardfreie Enthalpie aus Bildungswerten',
      formula: 'ΔG°_R = Σ ν_Prod · ΔG°_f(Prod) − Σ ν_Edukt · ΔG°_f(Edukt)',
      desc:    'oder äquivalent: ΔG°_R = ΔH°_R − T · ΔS°_R · ΔG°_f (Elemente in Standardform) = 0 kJ/mol',
    })}

    ${renderTable({
      headers: ['Verbindung', 'ΔH°_f [kJ/mol]', 'S° [J/(mol·K)]', 'ΔG°_f [kJ/mol]', 'Bedeutung'],
      rows: [
        ['H₂O(l)',     '−285,8', '69,9',  '−237,1', 'Sehr stabil (kovalente O-H-Bindungen)'],
        ['H₂O(g)',     '−241,8', '188,7', '−228,6', 'Stabiler als H₂+O₂; weniger als flüssig'],
        ['CO₂(g)',     '−393,5', '213,8', '−394,4', 'Endprodukt aller C-Verbrennung'],
        ['CO(g)',      '−110,5', '197,7', '−137,2', 'Metastabil; Reduktionsmittel'],
        ['NH₃(g)',     '−46,1',  '192,8', '−16,5',  'Positives ΔG°: Zersetzung bevorzugt bei hoher T'],
        ['NO(g)',      '+90,3',  '210,8', '+86,6',  'Positiv: Bildung nicht spontan (braucht Energie)'],
        ['Fe₂O₃(s)',   '−824,2', '87,4',  '−742,2', 'Rosten stark begünstigt'],
        ['Al₂O₃(s)',   '−1675,7','50,9',  '−1582,3','Sehr stabiles Oxid; Aluminothermie möglich'],
        ['CaCO₃(s)',   '−1206,9','92,9',  '−1128,8','Kalk stabil bei Raumtemp.'],
        ['C₆H₁₂O₆(s)','−1273,1','210,5', '−910,6', 'Glucose; Verbrennung stark exergon'],
        ['Saccharose', '−2222,0','360,0', '−1543,0','Weit weg vom GG → spontane Verbrennung'],
      ],
      highlight: [0, 5, 7],
    })}

    <h3 class="lz-h3" style="margin-top:1.75rem;">ΔG und das chemische Gleichgewicht</h3>

    ${renderFormulaBox({
      label:   'Zusammenhang ΔG° und Gleichgewichtskonstante K',
      formula: 'ΔG° = −R · T · ln K &nbsp; ↔ &nbsp; K = e^(−ΔG°/RT)',
      desc:    'R = 8,314 J/(mol·K) · T [K] · K dimensionslos (bezogen auf Standardzustand) · K > 1 (ΔG° < 0): Produkte bevorzugt · K < 1 (ΔG° > 0): Edukte bevorzugt',
    })}

    ${renderTable({
      headers: ['ΔG° [kJ/mol]', 'K bei 25°C', 'Bedeutung'],
      rows: [
        ['+200',  '~10⁻³⁵', 'Praktisch keine Produktbildung (starke Edukt-Bevorzugung)'],
        ['+100',  '~10⁻¹⁸', 'Extrem wenig Produkt'],
        ['+10',   '~10⁻²',  'Produkte kaum gebildet'],
        ['0',     '1',       'Gleichgewicht genau in der Mitte'],
        ['−10',   '~57',     'Produkte leicht bevorzugt'],
        ['−100',  '~10¹⁸',  'Praktisch vollständige Umsetzung'],
        ['−200',  '~10³⁵',  'Extrem vollständige Umsetzung'],
      ],
      highlight: [3, 5],
    })}

    ${renderFormulaBox({
      label:   'ΔG unter Nicht-Standardbedingungen',
      formula: 'ΔG = ΔG° + R · T · ln Q',
      desc:    'Q: Reaktionsquotient (wie K, aber mit momentanen Konzentrationen, nicht GG-Konzentrationen) · Q < K: ΔG < 0 → Reaktion läuft vorwärts · Q > K: ΔG > 0 → Reaktion läuft rückwärts · Q = K: ΔG = 0 → Gleichgewicht',
    })}

    ${renderAccordion([
      {
        title: 'Exkurs: Elektrochemie und freie Enthalpie',
        content: `<p class="lz-prose">Elektrochemische Zellen wandeln freie Enthalpie
                  direkt in elektrische Energie um (oder umgekehrt bei Elektrolyse):</p>
                  <div class="lz-formula-box">
                    <div class="lz-formula-main">ΔG = −n · F · E_Zelle</div>
                    <div class="lz-formula-desc">n: Anzahl übertragener Elektronen · F = 96 485 C/mol (Faraday-Konstante) · E_Zelle: Zellspannung [V]</div>
                  </div>
                  <p class="lz-prose">ΔG° = −n·F·E°_Zelle &nbsp; und &nbsp; E°_Zelle = (R·T/nF)·ln K<br><br>
                  Galvanische Zelle (Batterie): ΔG < 0, E > 0 → spontan, liefert Strom.<br>
                  Elektrolyse: ΔG > 0, E < 0 → nicht spontan, braucht Strom.</p>`,
      },
      {
        title: 'Berechnungsbeispiel: Haber-Bosch-Prozess',
        content: `<p class="lz-prose"><strong>N₂(g) + 3 H₂(g) → 2 NH₃(g)</strong></p>
                  <p class="lz-prose">
                  ΔH°_R = 2·(−46,1) − 0 = −92,2 kJ/mol<br>
                  ΔS°_R = 2·(192,8) − [191,6 + 3·130,6] = 385,6 − 583,4 = −197,8 J/(mol·K)<br>
                  ΔG°_R (298 K) = −92 200 − 298·(−197,8) = −92 200 + 58 944 = <strong>−33 256 J/mol ≈ −33,3 kJ/mol</strong><br><br>
                  Bei 500°C (773 K, Prozessbedingung):<br>
                  ΔG°_R (773 K) = −92 200 − 773·(−197,8) = −92 200 + 152 905 = <strong>+60 700 J/mol > 0!</strong><br><br>
                  → Bei Prozesstemperatur thermodynamisch ungünstig!
                  Aber ohne Katalysator zu langsam bei 25°C. Kompromiss: 400–500°C mit Fe-Katalysator;
                  hoher Druck (250–350 bar) verschiebt GG zu NH₃ (Le Chatelier: weniger Gasteilchen).</p>`,
      },
    ])}

    ${renderInfobox({
      type: 'success', icon: 'fas fa-graduation-cap', title: 'Zusammenfassung Thermodynamik',
      body: `<strong>1. HS:</strong> ΔU = Q + W · Energie erhalten · ΔH = Q_p (bei const. p)<br>
             <strong>2. HS:</strong> ΔS_Univ ≥ 0 · S = k_B·ln Ω · ΔS = Q_rev/T<br>
             <strong>3. HS:</strong> S(0K, perfekter Kristall) = 0 → absolute S-Werte messbar<br>
             <strong>Freie Enthalpie:</strong> ΔG = ΔH − T·ΔS · ΔG < 0: spontan · ΔG = 0: GG · ΔG > 0: nicht spontan<br>
             <strong>GG-Konstante:</strong> ΔG° = −RT·ln K · K = e^(−ΔG°/RT)<br>
             <strong>Elektrochemie:</strong> ΔG = −nFE<br>
             <strong>Hess:</strong> ΔH°_R = Σν·ΔH°_f(Prod) − Σν·ΔH°_f(Edukt) · ΔG°_f(Elemente) = 0`,
    })}
  `; }

  init() {
    i18n.init();
    initScrollReveal();
    initInteractive(document);
    initTabs();
  }
}