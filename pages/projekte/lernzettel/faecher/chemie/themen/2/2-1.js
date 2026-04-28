// pages/projekte/lernzettel/faecher/chemie/themen/2/2-1.js
// Kapitel 2.1 — Kernchemie
// 2.1.1  Kernbausteine – Nukleonen
// 2.1.2  Stabilität von Atomkernen und Kernreaktionen

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
  renderVTimeline,
  initInteractive,
} from '../../../../js/components/components.js';
import { renderPageNav } from '../../../../js/components/subnav.js';
import { COLOR, COLOR_RGB, BASE } from '../../chemie.js';

const TABS = [
  { key: '211', icon: 'fas fa-atom',        label: '2.1.1 Kernbausteine – Nukleonen'            },
  { key: '212', icon: 'fas fa-radiation',   label: '2.1.2 Stabilität & Kernreaktionen'          },
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
  return `<nav class="wim-tabs" role="tablist" id="tabs21">${nav}</nav>${panels}`;
}

function initTabs() {
  const nav = document.getElementById('tabs21');
  if (!nav) return;
  const tabs = nav.querySelectorAll('.wim-tab[data-wim]');
  if (!tabs.length) return;
  const panels = [];
  let el = nav.nextElementSibling;
  while (el) {
    if (el.classList.contains('wim-category')) panels.push(el);
    el = el.nextElementSibling;
  }
  const slider = document.createElement('span');
  slider.className = 'wim-tab-slider';
  nav.appendChild(slider);
  function setSlider(tab) {
    slider.style.width     = `${tab.getBoundingClientRect().width}px`;
    slider.style.transform = `translateX(${tab.offsetLeft}px)`;
  }
  setTimeout(() => setSlider(nav.querySelector('.wim-tab.active') || tabs[0]), 60);
  window.addEventListener('resize', () => { const a = nav.querySelector('.wim-tab.active'); if (a) setSlider(a); });
  tabs.forEach((tab, i) => {
    tab.addEventListener('click', function () {
      tabs.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      setSlider(this);
      this.scrollIntoView({ block: 'nearest', inline: 'center', behavior: 'smooth' });
      const key = this.dataset.wim;
      panels.forEach(p => {
        p.classList.toggle('active', p.dataset.wimCat === key);
        p.classList.toggle('hidden',  p.dataset.wimCat !== key);
      });
    });
    tab.addEventListener('keydown', e => {
      if (e.key === 'ArrowRight') { e.preventDefault(); (tabs[i + 1] || tabs[0]).click(); }
      if (e.key === 'ArrowLeft')  { e.preventDefault(); (tabs[i - 1] || tabs[tabs.length - 1]).click(); }
    });
  });
}

export default class Chemie_2_1 {
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
          <i class="fas fa-chevron-right"></i><span>Kapitel 2</span>
          <i class="fas fa-chevron-right"></i><span>2.1</span>
        </div>
        <h1 class="lz-sub-title">Kernchemie<br><em>Nukleonen, Stabilität und Kernreaktionen</em></h1>
        <p class="lz-sub-desc">
          Aufbau des Atomkerns · Nuklidschreibweise · Radioaktivität ·
          Zerfallsreihen · Halbwertszeit · Kernspaltung · Kernfusion
        </p>
        ${renderTags(['Kap. 2.1', 'Kernchemie', 'Radioaktivität', 'Halbwertszeit', 'LK Chemie BW'])}
      </div>
    </section>

    <section class="lz-content-section">
      <div class="lz-section-wrap">
        ${buildWimHTML(k => k === '211' ? this._nukleonen() : this._stabilitaet())}
      </div>
    </section>

    <section class="lz-content-section" style="padding:1.5rem 0 3rem;">
      <div class="lz-section-wrap">
        ${renderPageNav({
          prev: { label: '1.3 Stöchiometrie',          link: `${BASE}/themen/1/1-3` },
          next: { label: '2.2 Entstehung der Elemente', link: `${BASE}/themen/2/2-2` },
        }, BASE)}
      </div>
    </section>

    ${footerHTML(this.router)}
  `; }

  // ══════════════════════════════════════════════════════════
  // 2.1.1 — Kernbausteine – Nukleonen
  // ══════════════════════════════════════════════════════════
  _nukleonen() { return `
    ${renderSubhead('2.1.1 — Kernbausteine – Nukleonen')}

    <h2 class="lz-h2">Der Atomkern — Aufbau und Struktur</h2>
    <p class="lz-prose">
      Der Atomkern ist der zentrale, extrem dichte Teil des Atoms.
      Er enthält fast die gesamte Masse (~99,97 %) des Atoms, aber
      nur etwa 10⁻¹⁴ m Durchmesser (Atom: ~10⁻¹⁰ m).
      Würde man den Kern auf die Größe eines Fußballs aufblasen,
      wäre das Atom so groß wie ein Fußballstadion.
      Der Kern besteht aus <strong>Nukleonen</strong> — dem Oberbegriff
      für Protonen und Neutronen.
    </p>

    <!-- Nukleonen-Tabelle -->
    <h3 class="lz-h3">Die Kernbausteine: Protonen und Neutronen</h3>

    ${renderTable({
      headers: ['Eigenschaft', 'Proton (p)', 'Neutron (n)', 'Elektron (e⁻)'],
      rows: [
        ['Symbol',          'p, ¹₁H',              'n, ¹₀n',              'e⁻, ⁰₋₁e'],
        ['Ladung',          '+1 (= +1,602·10⁻¹⁹ C)', 'neutral (0)',       '−1 (= −1,602·10⁻¹⁹ C)'],
        ['Ruhemasse',       '1,672 623 · 10⁻²⁷ kg', '1,674 929 · 10⁻²⁷ kg','9,109 · 10⁻³¹ kg'],
        ['Relative Masse',  '1,007 276 u',           '1,008 665 u',        '0,000 549 u (≈ 1/1836 mp)'],
        ['Ort',             'Atomkern',              'Atomkern',           'Elektronenhülle (Orbital)'],
        ['Zusammensetzung', '2 up-Quarks + 1 down-Quark', '1 up-Quark + 2 down-Quarks', 'Elementarteilchen (kein Quark-Aufbau)'],
        ['Stabilität',      'Stabil (freies Proton)', 'Instabil frei: n → p + e⁻ + ν̄_e (t½ ≈ 15 min)', 'Stabil'],
      ],
      highlight: [0, 2],
    })}

    ${renderInfobox({
      type: 'blue', icon: 'fas fa-info-circle', title: 'Die atomare Masseneinheit u',
      body: `1 u (unified atomic mass unit, auch Dalton Da) ist definiert als
             <strong>1/12 der Masse eines ¹²C-Atoms</strong>:<br>
             1 u = 1,660 539 · 10⁻²⁷ kg<br>
             Die relative Atommasse Aᵣ ist dimensionslos und gibt an, wie viel mal
             schwerer ein Atom als 1/12 eines ¹²C-Atoms ist.<br><br>
             <strong>Umrechnung:</strong> M [g/mol] = Aᵣ · 1 g/mol<br>
             (numerisch gleich, aber M hat die Einheit g/mol, Aᵣ ist dimensionslos)`,
    })}

    <!-- Nuklidschreibweise -->
    <h3 class="lz-h3" style="margin-top:1.75rem;">Nuklidschreibweise und wichtige Begriffe</h3>
    <p class="lz-prose">
      Ein <strong>Nuklid</strong> ist eine Atomsorte mit definierter Protonenzahl Z
      und Massenzahl A. Die Nuklidschreibweise gibt beide Zahlen kompakt an:
    </p>

    ${renderFormulaBox({
      label:   'Nuklidschreibweise',
      formula: '<sup>A</sup><sub>Z</sub>X &nbsp; oder &nbsp; X-A',
      desc:    'A = Massenzahl (Gesamtzahl der Nukleonen = Z + N) · Z = Ordnungszahl / Kernladungszahl (Protonenzahl) · N = Neutronenzahl = A − Z · X = Elementsymbol',
    })}

    ${renderTable({
      headers: ['Begriff', 'Definition', 'Beispiele'],
      rows: [
        ['Nuklid',       'Atomsorte mit bestimmter Z und N',                               '¹²₆C, ¹³₆C, ¹⁴₆C sind drei verschiedene Nuklide'],
        ['Element',      'Alle Atome mit gleicher Ordnungszahl Z (gleiche Protonenzahl)',  'Alle C-Atome: Z = 6, unabhängig von N'],
        ['Isotope',      'Nuklide desselben Elements (gleiche Z, verschiedene N)',          '¹²C (N=6), ¹³C (N=7), ¹⁴C (N=8) — alle Z=6'],
        ['Isobare',      'Nuklide mit gleicher Massenzahl A, aber verschiedener Z',        '¹⁴C (Z=6) und ¹⁴N (Z=7): A=14, aber verschiedene Elemente'],
        ['Isotone',      'Nuklide mit gleicher Neutronenzahl N, aber verschiedener Z',     '¹³C (N=7, Z=6) und ¹⁴N (N=7, Z=7)'],
        ['Kernisomere',  'Gleiche Z und N, aber verschiedene Energiezustände des Kerns',   '⁹⁹ᵐTc (metastabil) und ⁹⁹Tc (Grundzustand)'],
      ],
      highlight: [2],
    })}

    ${renderTable({
      headers: ['Nuklid', 'Z', 'N', 'A', 'Stabiles Isotop?', 'Natürl. Häufigkeit'],
      rows: [
        ['¹H (Protium)',    '1', '0',  '1',  'Ja', '99,985 %'],
        ['²H (Deuterium)',  '1', '1',  '2',  'Ja', '0,015 %'],
        ['³H (Tritium)',    '1', '2',  '3',  'Nein (β⁻, t½ = 12,3 a)', 'Spurenmengen (kosm. Strahlung)'],
        ['¹²C',             '6', '6',  '12', 'Ja', '98,93 %'],
        ['¹³C',             '6', '7',  '13', 'Ja', '1,07 %'],
        ['¹⁴C',             '6', '8',  '14', 'Nein (β⁻, t½ = 5730 a)', 'Spurenmengen (kosm. Strahlung)'],
        ['²³⁵U',            '92','143','235','Nein (α, t½ = 7,04·10⁸ a)', '0,72 %'],
        ['²³⁸U',            '92','146','238','Nein (α, t½ = 4,47·10⁹ a)', '99,27 %'],
      ],
      highlight: [0, 3],
    })}

    <!-- Kernkräfte -->
    <h3 class="lz-h3" style="margin-top:1.75rem;">Die Kernkraft — starke Wechselwirkung</h3>
    <p class="lz-prose">
      Warum zerfällt der Kern nicht? Protonen stoßen sich elektrostatisch ab
      (Coulomb-Abstoßung, alle positiv geladen). Der Kern wird trotzdem zusammengehalten
      durch die <strong>starke Wechselwirkung</strong> (Kernkraft), eine der vier
      fundamentalen Kräfte der Physik.
    </p>

    ${renderTable({
      headers: ['Eigenschaft', 'Starke Kernkraft', 'Elektrostatische Kraft (Coulomb)'],
      rows: [
        ['Träger',        'Gluonen (zwischen Quarks); Pionen (zwischen Nukleonen)',  'Photonen'],
        ['Reichweite',    'Sehr kurz: ≈ 1–2 fm (10⁻¹⁵ m)',                          'Unendlich (1/r²)'],
        ['Stärke',        '~100-fach stärker als Coulomb-Kraft auf kurze Distanz',  '1 (Referenz)'],
        ['Wirkung',       'Anzieht alle Nukleonen (p–p, p–n, n–n gleich)',           'Stößt p–p und p–p ab; n–n neutral'],
        ['Folge',         'Hält Kern zusammen gegen Coulomb-Abstoßung',              'Versucht, Kern auseinanderzutreiben'],
      ],
    })}

    ${renderInfobox({
      type: '', icon: 'fas fa-atom', title: 'Massendefekt und Bindungsenergie',
      body: `Die Masse eines Atomkerns ist <strong>kleiner</strong> als die Summe der
             Massen seiner freien Nukleonen — der <strong>Massendefekt</strong> Δm.<br><br>
             Δm = Z·m_p + N·m_n − m_Kern<br><br>
             Dieser „fehlende" Massenanteil ist als <strong>Bindungsenergie</strong>
             freigesetzt worden (Einstein: E = Δm · c²).<br><br>
             <strong>Beispiel ⁴He (α-Teilchen):</strong><br>
             2·m_p + 2·m_n = 2·1,007276 + 2·1,008665 = 4,031882 u<br>
             m(⁴He-Kern) = 4,001506 u<br>
             Δm = 0,030376 u → E_B = 0,030376 · 931,5 MeV/u = <strong>28,3 MeV</strong><br>
             Bindungsenergie pro Nukleon: 28,3/4 = 7,07 MeV/Nukleon<br><br>
             Maximum bei ⁵⁶Fe: ~8,8 MeV/Nukleon — stabilstes Nuklid im Universum.`,
    })}
  `; }

  // ══════════════════════════════════════════════════════════
  // 2.1.2 — Stabilität von Atomkernen und Kernreaktionen
  // ══════════════════════════════════════════════════════════
  _stabilitaet() { return `
    ${renderSubhead('2.1.2 — Stabilität von Atomkernen und Kernreaktionen')}

    <h3 class="lz-h3">Kernstabilität — wann ist ein Kern stabil?</h3>
    <p class="lz-prose">
      Nicht alle Kombinationen von Proton- und Neutronenzahl bilden stabile Kerne.
      Im <strong>Nuklidkarte</strong> (Segrè-Diagramm, N gegen Z aufgetragen)
      liegen stabile Nuklide auf dem sogenannten <strong>Stabilitätsband</strong>.
    </p>

    ${renderTable({
      headers: ['Bereich', 'N/Z-Verhältnis stabil', 'Grund', 'Instabilität bei Abweichung'],
      rows: [
        ['Leichte Kerne (Z ≤ 20)',   'N/Z ≈ 1',   'Gleiche Zahl n und p optimal; Coulomb-Abstoßung gering',    'Zu viele p → β⁻-Zerfall; zu viele n → β⁺-Zerfall oder Elektroneneinfang'],
        ['Mittlere Kerne (Z = 20–82)', 'N/Z = 1,2–1,5', 'Mehr Neutronen nötig, um Coulomb-Abstoßung zwischen p auszugleichen', 'Zu protonreich → β⁺ oder EC; zu neutronenreich → β⁻'],
        ['Schwere Kerne (Z > 82)',   'N/Z > 1,5',  'Sehr viele Neutronen nötig — trotzdem instabil ab Z > 83', 'Alle Kerne mit Z > 82 (Bi-209 Ausnahme) instabil → α-Zerfall dominiert'],
      ],
    })}

    <p class="lz-prose">
      <strong>Magische Zahlen:</strong> Kerne mit Z oder N = 2, 8, 20, 28, 50, 82, 126
      sind besonders stabil (abgeschlossene Kernschalen, analog Edelgaskonfiguration
      in der Elektronenhülle). Beispiele: ⁴He (Z=N=2), ¹⁶O (Z=N=8),
      ⁴⁰Ca (Z=N=20), ²⁰⁸Pb (Z=82, N=126 — doppelt magisch).
    </p>

    <!-- Radioaktiver Zerfall -->
    <h3 class="lz-h3" style="margin-top:1.75rem;">Radioaktiver Zerfall — die drei klassischen Strahlungsarten</h3>

    ${renderTable({
      headers: ['Strahlungsart', 'Teilchen / Strahlung', 'Kernreaktion', 'Eigenschaften', 'Abschirmung'],
      rows: [
        ['α-Strahlung',
         'Heliumkern: ⁴₂He²⁺ (2p + 2n)',
         'ᴬ_Z X → ᴬ⁻⁴_{Z−2} Y + ⁴₂He\nBeispiel: ²³⁸U → ²³⁴Th + ⁴He',
         'Ionisierend (stark) · Reichweite in Luft: 3–8 cm · Energie: 4–9 MeV · Monoenergisch',
         'Papier / Haut reicht; inhaliert/verschluckt sehr gefährlich (innere Bestrahlung)'],
        ['β⁻-Strahlung',
         'Elektron e⁻ + Antineutrino ν̄_e',
         'ᴬ_Z X → ᴬ_{Z+1} Y + e⁻ + ν̄_e\nn → p + e⁻ + ν̄_e\nBeispiel: ¹⁴C → ¹⁴N + e⁻ + ν̄_e',
         'Ionisierend (mittel) · Reichweite in Luft: dm–m · Energie: 0–E_max (kontinuierlich) · Neutrino trägt variablen Energieanteil',
         'Einige mm Aluminium; Plexiglas (Bremsstrahlung vermeiden!)'],
        ['β⁺-Strahlung',
         'Positron e⁺ + Neutrino ν_e',
         'ᴬ_Z X → ᴬ_{Z−1} Y + e⁺ + ν_e\np → n + e⁺ + ν_e\nBeispiel: ²²Na → ²²Ne + e⁺ + ν_e',
         'Annihilation mit e⁻ → 2 Photonen (0,511 MeV) · PET-Diagnostik nutzt β⁺',
         'Aluminium + Blei (gegen Annihilationsphotonen)'],
        ['Elektroneneinfang (EC)',
         'Kernnahe Elektronen (K-Schale) eingefangen',
         'p + e⁻ → n + ν_e\nᴬ_Z X + e⁻ → ᴬ_{Z−1} Y + ν_e',
         'Konkurrenz zu β⁺; bevorzugt bei schweren Kernen · Röntgen-Charakterstrahlung als Nebenprodukt',
         '—'],
        ['γ-Strahlung',
         'Hochenerget. Photon (elektromagnet. Strahlung)',
         'Kein Nuklidwechsel! Energieabbau angeregter Kerne\nᴬ_Z X* → ᴬ_Z X + γ',
         'Nicht ionisierend direkt; sehr durchdringend · Energie: 0,01–10 MeV · begleitet α und β',
         'Dickes Blei (>10 cm) oder Beton (>1 m)'],
      ],
      highlight: [0, 1, 4],
    })}

    ${renderInfobox({
      type: 'warning', icon: 'fas fa-radiation', title: 'Strahlenschutz — Grundregeln',
      body: `Die drei Grundprinzipien des Strahlenschutzes:<br>
             <strong>① Distanz:</strong> Intensität nimmt mit 1/r² ab — doppelte Distanz → viertel Intensität.<br>
             <strong>② Zeit:</strong> Aufenthaltsdauer minimieren (Dosis = Dosisleistung × Zeit).<br>
             <strong>③ Abschirmung:</strong> α: Papier · β: Aluminium · γ/X: Blei/Beton.<br><br>
             <strong>Einheiten:</strong><br>
             Aktivität A [Becquerel, Bq] = Zerfälle pro Sekunde<br>
             Energiedosis D [Gray, Gy] = absorbierte Energie pro kg Gewebe [J/kg]<br>
             Äquivalentdosis H [Sievert, Sv] = D · Strahlungs-Wichtungsfaktor w_R<br>
             w_R: γ = 1; β = 1; α = 20 → α-Strahlung 20× biologisch wirksamer!<br>
             Natürliche Hintergrundstrahlung Deutschland: ~2,1 mSv/Jahr`,
    })}

    <!-- Halbwertszeit -->
    <h3 class="lz-h3" style="margin-top:1.75rem;">Zerfallsgesetz und Halbwertszeit</h3>
    <p class="lz-prose">
      Radioaktiver Zerfall ist ein <strong>statistischer Prozess</strong> —
      es ist unmöglich vorherzusagen, wann ein einzelner Kern zerfällt.
      Für eine große Anzahl von Kernen gilt das
      <strong>Zerfallsgesetz</strong>: Die Zerfallsrate ist proportional
      zur Anzahl noch vorhandener radioaktiver Kerne.
    </p>

    ${renderFormulaBox({
      label:   'Radioaktives Zerfallsgesetz',
      formula: 'N(t) = N₀ · e^(−λ·t) &nbsp;&nbsp; oder &nbsp;&nbsp; A(t) = A₀ · e^(−λ·t)',
      desc:    'N(t): Anzahl radioaktiver Kerne zum Zeitpunkt t · N₀: Anfangsanzahl · λ: Zerfallskonstante [s⁻¹] · A = λ·N: Aktivität [Bq] · e: Eulersche Zahl ≈ 2,718',
    })}

    ${renderFormulaBox({
      label:   'Halbwertszeit t½',
      formula: 't½ = ln(2) / λ = 0,6931 / λ',
      desc:    'Zeit, in der die Hälfte der radioaktiven Kerne zerfallen ist · N(t½) = N₀/2 · λ = ln(2)/t½',
    })}

    ${renderFormulaBox({
      label:   'Zerfallsgesetz über Halbwertszeiten',
      formula: 'N(t) = N₀ · (1/2)^(t/t½)',
      desc:    'Praktische Form für Berechnungen ohne e-Funktion · Nach n Halbwertszeiten: N = N₀ · (1/2)ⁿ',
    })}

    ${renderTable({
      headers: ['Nuklid', 'Zerfall', 't½', 'Anwendung / Bedeutung'],
      rows: [
        ['¹⁴C',     'β⁻',    '5 730 a',         'Radiokohlenstoffdatierung (Archäologie, bis ~50 000 a)'],
        ['³H (T)',   'β⁻',    '12,32 a',         'Markierungsexperimente; Fusionsreaktor-Brennstoff'],
        ['⁹⁰Sr',    'β⁻',    '28,8 a',          'Fallout-Nuklid; lagert sich in Knochen ein (Ca-Analogon)'],
        ['¹³⁷Cs',   'β⁻/γ',  '30,17 a',         'Häufigstes Fallout-Nuklid; Kontamination nach Tschernobyl/Fukushima'],
        ['¹³¹I',    'β⁻/γ',  '8,02 d',          'Schilddrüsentherapie und -diagnostik; kurze t½ = rasche Abklingung'],
        ['⁹⁹ᵐTc',  'γ (IT)', '6,01 h',          'Häufigstes Nuklid in der Nuklearmedizin (SPECT-Diagnostik)'],
        ['²²⁶Ra',   'α',     '1 600 a',          'Historisch: Curie; leuchtendes Zifferblatt (bis 1970er)'],
        ['²³⁵U',    'α',     '7,04 · 10⁸ a',    'Kernbrennstoff (Spaltung); angereichertes U in KKW'],
        ['²³⁸U',    'α',     '4,47 · 10⁹ a',    'Häufigstes U-Isotop (99,27 %); Altersbestimmung Gesteine'],
        ['²³⁹Pu',   'α',     '24 100 a',         'Kernwaffenmaterial; entsteht in Reaktoren aus ²³⁸U'],
      ],
      highlight: [0, 5],
    })}

    <!-- Zerfallsreihen -->
    <h3 class="lz-h3" style="margin-top:1.75rem;">Natürliche Zerfallsreihen</h3>
    <p class="lz-prose">
      Schwere radioaktive Nuklide (Z > 82) zerfallen in einer
      <strong>Zerfallsreihe</strong> über mehrere Zwischenprodukte
      bis zu einem stabilen Endprodukt. Es gibt vier natürliche Zerfallsreihen:
    </p>

    ${renderTable({
      headers: ['Reihe', 'Startnuklid', 't½ Startnuklid', 'Endprodukt', 'Massenzahlen A'],
      rows: [
        ['Uranreihe',     '²³⁸U',   '4,47 · 10⁹ a', '²⁰⁶Pb (stabil)', 'A ≡ 2 mod 4 → A = 4n+2'],
        ['Thoriumreihe',  '²³²Th',  '1,40 · 10¹⁰ a','²⁰⁸Pb (stabil)', 'A ≡ 0 mod 4 → A = 4n'],
        ['Actiniumreihe', '²³⁵U',   '7,04 · 10⁸ a', '²⁰⁷Pb (stabil)', 'A ≡ 3 mod 4 → A = 4n+3'],
        ['Neptuniumreihe','²³⁷Np',  '2,14 · 10⁶ a', '²⁰⁹Bi (stabil)', 'A ≡ 1 mod 4 → A = 4n+1; auf Erde kaum vorhanden (t½ kurz)'],
      ],
      highlight: [0],
    })}

    ${renderInfobox({
      type: 'blue', icon: 'fas fa-clock', title: 'Radiokohlenstoffdatierung — ¹⁴C-Methode',
      body: `<strong>Prinzip:</strong> In der Atmosphäre wird ständig ¹⁴C gebildet:
             ¹⁴N + ¹n → ¹⁴C + ¹H (Kosmische Strahlung trifft N-Kern).<br>
             Lebende Organismen nehmen ¹⁴C durch Photosynthese / Nahrung auf →
             ¹⁴C/¹²C-Verhältnis im Gleichgewicht mit der Atmosphäre
             (≈ 1,2 · 10⁻¹² = 1 von 10¹² C-Atomen).<br>
             Nach dem Tod: kein neues ¹⁴C mehr → ¹⁴C zerfällt (t½ = 5730 a).<br><br>
             <strong>Alter-Formel:</strong><br>
             t = (t½ / ln2) · ln(A₀/A_heute) = 8267 a · ln(A₀/A_heute)<br><br>
             <strong>Grenzen:</strong> Bis ca. 50 000 Jahre (danach zu wenig ¹⁴C übrig) ·
             Kalibrierung nötig (atmosphärisches ¹⁴C-Verhältnis nicht konstant →
             Dendrochronologie) · Bombe-Effekt: 1950er Kernwaffentests verdoppelten
             kurzzeitig das ¹⁴C-Verhältnis.`,
    })}

    <!-- Kernreaktionen -->
    <h3 class="lz-h3" style="margin-top:1.75rem;">Künstliche Kernreaktionen</h3>

    ${renderAccordion([
      {
        title: 'Kernspaltung — Fission',
        content: `<p class="lz-prose"><strong>Definition:</strong> Ein schwerer Kern
                  absorbiert ein Neutron und zerfällt in zwei mittelschwere Bruchstücke
                  (Spaltprodukte) unter Freisetzung von 2–3 Neutronen und enormer Energie.</p>
                  <p class="lz-prose"><strong>Reaktion (Beispiel ²³⁵U):</strong><br>
                  ²³⁵U + ¹n → [²³⁶U]* → ⁹²Kr + ¹⁴¹Ba + 3 ¹n + ~200 MeV</p>
                  <p class="lz-prose"><strong>Energiebilanz:</strong><br>
                  ~200 MeV pro Spaltung = 3,2 · 10⁻¹¹ J<br>
                  1 kg ²³⁵U: ~6,7 · 10¹³ J ≡ ~18 000 t TNT (Hiroshima-Bombe: ~15 kt TNT)</p>
                  <p class="lz-prose"><strong>Kettenreaktion:</strong>
                  Freigesetzte Neutronen spalten weitere Kerne.
                  Kritische Masse: Mindestmenge, bei der jede Spaltung im Mittel
                  genau eine weitere auslöst (k_eff = 1).
                  Reaktor: k_eff = 1 (kontrolliert) · Bombe: k_eff > 1 (unkontrolliert).</p>
                  <p class="lz-prose"><strong>Moderation:</strong>
                  Schnelle Neutronen müssen abgebremst werden (thermische Neutronen
                  effizienter für Spaltung). Moderatoren: H₂O, D₂O, Graphit
                  (Stöße mit leichten Kernen → Energieübertrag).</p>`,
      },
      {
        title: 'Kernfusion — Fusion',
        content: `<p class="lz-prose"><strong>Definition:</strong> Zwei leichte Kerne
                  verschmelzen zu einem schwereren Kern unter Freisetzung großer Energie
                  (Massendefekt des Produktkerns > Massendefekt der Edukte).</p>
                  <p class="lz-prose"><strong>D-T-Reaktion (angestrebte Fusionsreaktion):</strong><br>
                  ²H + ³H → ⁴He + ¹n + 17,6 MeV<br>
                  (Deuterium + Tritium → Helium + Neutron)</p>
                  <p class="lz-prose"><strong>Sonne:</strong><br>
                  pp-Kette: 4 ¹H → ⁴He + 2 e⁺ + 2 ν_e + 2 γ + 26,7 MeV<br>
                  Proton-Proton-Kette; läuft bei ~15 Mio. Kelvin im Sonnenkern.</p>
                  <p class="lz-prose"><strong>Voraussetzungen:</strong>
                  Kerne müssen Coulomb-Barriere überwinden → sehr hohe Temperaturen
                  (10⁸ K) und Drücke → Plasma. Auf der Erde: Tokamak (ITER-Projekt, Cadarache)
                  oder Trägheitsfusion (Laser).</p>
                  <p class="lz-prose"><strong>Vergleich Fusion vs. Spaltung:</strong><br>
                  D-T-Fusion: ~339 MJ/g · ²³⁵U-Spaltung: ~83 MJ/g →
                  Fusion ~4× energiereicher pro Masseneinheit.</p>`,
      },
      {
        title: 'Transuranherstellung — künstliche Elemente',
        content: `<p class="lz-prose">Elemente mit Z > 92 (Transurane) kommen
                  in der Natur nicht oder nur in Spuren vor. Sie werden durch
                  <strong>Kernreaktionen</strong> in Reaktoren oder Beschleunigern erzeugt:</p>
                  <p class="lz-prose">
                  ²³⁸U + ¹n → ²³⁹U → ²³⁹Np + β⁻ → ²³⁹Pu + β⁻<br>
                  (Neutroneneinfang; ²³⁹Pu: Kernwaffenmaterial, t½ = 24 100 a)</p>
                  <p class="lz-prose">
                  Schwerionenbeschleuniger (GSI Darmstadt): Schwere Kerne auf Targets schießen →
                  Fusion → kurzlebige superschwere Elemente (Z = 107–118 alle am GSI/RIKEN/JINR entdeckt).
                  Oganesson (Og, Z=118): t½ ≈ 0,89 ms.</p>`,
      },
      {
        title: 'Kernreaktionsgleichungen — Erhaltungssätze',
        content: `<p class="lz-prose">Bei jeder Kernreaktion gelten zwei strikte Erhaltungssätze:</p>
                  ${renderTable({
                    headers: ['Erhaltungsgröße', 'Bedeutung', 'Beispiel-Check'],
                    rows: [
                      ['Massenzahl A', 'Summe der Massenzahlen links = rechts', '²³⁵+1 = 92+141+3 → 236 = 236 ✓'],
                      ['Kernladungszahl Z', 'Summe der Protonenzahlen links = rechts', '92+0 = 36+56+0 → 92 = 92 ✓'],
                    ],
                  })}
                  <p class="lz-prose" style="margin-top:0.75rem;"><strong>Übung — fehlende Nuklide bestimmen:</strong><br>
                  ²⁷Al + ⁴He → ? + ¹n<br>
                  A: 27+4 = A_X+1 → A_X = 30<br>
                  Z: 13+2 = Z_X+0 → Z_X = 15 → Phosphor<br>
                  Ergebnis: ³⁰P + ¹n (erste künstliche Radioaktivität, Curie 1934)</p>`,
      },
    ])}

    ${renderInfobox({
      type: 'success', icon: 'fas fa-graduation-cap', title: 'Zusammenfassung Kernchemie — Abitur-Essentials',
      body: `<strong>Nuklidschreibweise:</strong> ᴬ_Z X — A oben links, Z unten links<br>
             <strong>Isotope:</strong> Gleiche Z, verschiedene N<br>
             <strong>α-Zerfall:</strong> A−4, Z−2 · <strong>β⁻:</strong> A gleich, Z+1 · <strong>β⁺/EC:</strong> A gleich, Z−1 · <strong>γ:</strong> nur Energie, kein Nuklidwechsel<br>
             <strong>Halbwertszeit:</strong> N(t) = N₀·(½)^(t/t½) · t½ = ln2/λ<br>
             <strong>Massendefekt:</strong> Δm → E_B = Δm·c² (stabilste Kerne: 56Fe, ~8,8 MeV/Nukleon)<br>
             <strong>Spaltung:</strong> schwere Kerne + n → 2 Bruchstücke + 2–3 n + ~200 MeV<br>
             <strong>Fusion:</strong> leichte Kerne (D+T) → He + n + 17,6 MeV (Sonne: pp-Kette)<br>
             <strong>Erhaltungssätze:</strong> Σ A links = Σ A rechts · Σ Z links = Σ Z rechts`,
    })}
  `; }

  init() {
    i18n.init();
    initScrollReveal();
    initInteractive(document);
    initTabs();
  }
}