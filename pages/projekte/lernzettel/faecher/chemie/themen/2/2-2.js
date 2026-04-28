// pages/projekte/lernzettel/faecher/chemie/themen/2/2-2.js
// Kapitel 2.2 — Entstehung der Elemente
// 2.2.1  Kernsynthese der Elemente
// 2.2.2  Häufigkeit der Elemente

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
  renderVTimeline,
  initInteractive,
} from '../../../../js/components/components.js';
import { renderPageNav } from '../../../../js/components/subnav.js';
import { COLOR, COLOR_RGB, BASE } from '../../chemie.js';

const TABS = [
  { key: '221', icon: 'fas fa-star',        label: '2.2.1 Kernsynthese der Elemente' },
  { key: '222', icon: 'fas fa-chart-bar',   label: '2.2.2 Häufigkeit der Elemente'  },
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
  return `<nav class="wim-tabs" role="tablist" id="tabs22">${nav}</nav>${panels}`;
}

function initTabs() {
  const nav = document.getElementById('tabs22');
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

export default class Chemie_2_2 {
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
          <i class="fas fa-chevron-right"></i><span>2.2</span>
        </div>
        <h1 class="lz-sub-title">Entstehung der Elemente<br><em>Nukleosynthese und Häufigkeiten</em></h1>
        <p class="lz-sub-desc">
          Big Bang · Primordiale Nukleosynthese · Stellare Kernfusion ·
          Supernovae · Häufigkeit der Elemente auf Erde und im Universum
        </p>
        ${renderTags(['Kap. 2.2', 'Nukleosynthese', 'Kosmochemie', 'Elementhäufigkeit', 'LK Chemie BW'])}
      </div>
    </section>

    <section class="lz-content-section">
      <div class="lz-section-wrap">
        ${buildWimHTML(k => k === '221' ? this._kernsynthese() : this._haeufigkeit())}
      </div>
    </section>

    <section class="lz-content-section" style="padding:1.5rem 0 3rem;">
      <div class="lz-section-wrap">
        ${renderPageNav({
          prev: { label: '2.1 Kernchemie',     link: `${BASE}/themen/2/2-1` },
          next: { label: '3.1 Atombau',        link: `${BASE}/themen/3/3-1` },
        }, BASE)}
      </div>
    </section>

    ${footerHTML(this.router)}
  `; }

  // ══════════════════════════════════════════════════════════
  // 2.2.1 — Kernsynthese der Elemente
  // ══════════════════════════════════════════════════════════
  _kernsynthese() { return `
    ${renderSubhead('2.2.1 — Kernsynthese der Elemente')}

    <h2 class="lz-h2">Woher kommen die Elemente?</h2>
    <p class="lz-prose">
      Die chemischen Elemente, aus denen alles Materie besteht — einschließlich
      unserer Körper — wurden nicht bei der Entstehung des Universums vollständig
      erzeugt. Sie entstanden und entstehen noch heute in verschiedenen
      kosmischen Prozessen: beim Urknall, in Sternen und bei Sternexplosionen.
      Die Wissenschaft, die sich damit befasst, heißt <strong>Nukleosynthese</strong>.
    </p>

    ${renderVTimeline([
      {
        year:  'T = 0 — Urknall (Big Bang)',
        title: 'Entstehung von Raum, Zeit, Energie',
        text:  `Vor ~13,8 Milliarden Jahren: das Universum beginnt in einem
                extrem heißen, dichten Zustand (T > 10³² K).
                In den ersten Bruchteilen einer Sekunde: Quarks und Leptonen bilden sich.
                Nach ~10⁻⁶ s: Quarks verbinden sich zu Protonen und Neutronen.
                Das Universum ist noch zu heiß für stabile Kerne.`,
      },
      {
        year:  'T ≈ 1–3 min — Primordiale Nukleosynthese',
        title: 'Entstehung von H, He, Li',
        text:  `Temperatur sinkt auf ~10⁹ K: Protonen und Neutronen können zu
                leichten Kernen fusionieren.
                ¹H (Protium): ~75 % der Baryonenmasse
                ⁴He: ~25 % (fast alle Neutronen werden in He eingebaut)
                ²H (Deuterium): ~0,003 % · ³He: Spuren · ⁷Li: ~10⁻⁹
                Nach ~20 min: Universum zu kalt für Kernfusion → primordialer Nukleosynthese-Cocktail fixiert.
                Schwerere Elemente entstehen hier nicht — Universum expandiert und kühlt zu schnell.`,
      },
      {
        year:  'T ≈ 200 Mio. Jahre — Erste Sterne (Population III)',
        title: 'Wasserstoff-Brennen in Sternen',
        text:  `Erste Sterne bilden sich aus H und He.
                Im Kern: H-Brennen (pp-Kette oder CNO-Zyklus bei massereicheren Sternen).
                Produkt: ⁴He aus 4 ¹H.
                Diese Sterne sind massiver und kurzlebiger als heutige Sterne.
                Am Ende: Supernovae verteilen erste schwere Elemente.`,
      },
      {
        year:  'Sterninneres — He-, C-, Ne-Brennen',
        title: 'Aufbau der mittleren Elemente (C bis Fe)',
        text:  `Nach H-Erschöpfung zündet Helium-Brennen (T ≈ 10⁸ K):
                3 ⁴He → ¹²C (Triple-Alpha-Prozess) · ¹²C + ⁴He → ¹⁶O.
                Dann C-Brennen (T ≈ 5·10⁸ K): ¹²C + ¹²C → ²⁴Mg oder ²³Na + p oder ²⁰Ne + ⁴He.
                Ne-, O-, Si-Brennen: Elemente bis Eisen (⁵⁶Fe) entstehen.
                ⁵⁶Fe ist das Ende: maximale Bindungsenergie/Nukleon → keine weitere Energiegewinnung durch Fusion möglich.`,
      },
      {
        year:  'Supernova — Kollaps und Explosion',
        title: 'Entstehung der Elemente jenseits von Eisen',
        text:  `Massereicher Stern (M > 8 M☉): Kern kollabiert zu Neutronenstern (oder schwarzem Loch).
                Explosion der äußeren Schichten — Supernova Typ II.
                Extrem hoher Neutronenfluss: r-Prozess (rapid neutron capture) →
                Elemente von Fe bis U und Th entstehen in Sekundenbruchteilen.
                Schwerere Elemente bei Neutronensternverschmelzungen (Gravitationswellen, 2017: GW170817 → Gold, Platin).
                s-Prozess (slow): in AGB-Sternen; Elemente bis Bi.`,
      },
      {
        year:  'Heute — Kosmische Spallation und andere Prozesse',
        title: 'Li, Be, B und weitere seltene Isotope',
        text:  `Li, Be, B entstehen kaum in Sternen (zu schnell verbraucht).
                Hauptquelle: Kosmische Spallation — hochenergetische Kosmische-Strahlung
                trifft C, N, O in der Atmosphäre → Kernfragmente.
                ¹⁴C: ¹⁴N + ¹n (kos. Strahlung) → ¹⁴C + ¹H (Grundlage der C-14-Datierung).`,
      },
    ])}

    <!-- Nukleosynthese-Prozesse im Detail -->
    <h3 class="lz-h3" style="margin-top:1.75rem;">Nukleosynthese-Prozesse im Überblick</h3>

    ${renderTable({
      headers: ['Prozess', 'Ort', 'Temperatur', 'Erzeugte Elemente', 'Reaktionsbeispiel'],
      rows: [
        ['Big Bang Nukleosynthese (BBN)', 'Frühes Universum (t ≈ 1–20 min)', '10⁸–10⁹ K', '¹H (75%), ⁴He (25%), ²H, ³He, ⁷Li', '¹H + ¹H → ²H + e⁺ + ν'],
        ['pp-Kette (Proton-Proton)',      'Kerne kleiner Sterne (M ≤ M☉)', '~1,5 · 10⁷ K', '⁴He aus ¹H', '4 ¹H → ⁴He + 2e⁺ + 2ν + 26,7 MeV'],
        ['CNO-Zyklus',                   'Kerne massereicher Sterne',       '> 1,7 · 10⁷ K', '⁴He aus ¹H (C, N, O als Katalysatoren)', '¹²C+¹H→¹³N→¹³C+¹H→¹⁴N+¹H→¹⁵O→¹⁵N+¹H→¹²C+⁴He'],
        ['Triple-Alpha-Prozess',         'He-Brennen im Sternkern',         '~10⁸ K',       '¹²C, ¹⁶O', '3 ⁴He → ¹²C (+7,27 MeV) · ¹²C + ⁴He → ¹⁶O'],
        ['C/Ne/O/Si-Brennen',            'Kerne sehr massereicher Sterne',  '5·10⁸–3·10⁹ K','¹²C bis ⁵⁶Fe', '²⁸Si+⁴He→³²S; … → ⁵⁶Fe (Endpunkt)'],
        ['s-Prozess (slow n-capture)',   'AGB-Sterne, He-Schale',           '~3 · 10⁸ K',   'Sr, Ba, Pb, Bi (Z=34–83)', '⁵⁶Fe+n→⁵⁷Fe → … → ¹⁰⁹Ag (mit β⁻-Zerfällen)'],
        ['r-Prozess (rapid n-capture)',  'Supernovae Typ II, Neutronensternverschmelzung', '>10⁹ K', 'Alle Z > 56 bis U, Th (Gold, Platin, Uran)', 'Schnelle n-Einfänge, dann β⁻-Zerfall zur Stabilität'],
        ['Spallation (kosmisch)',        'Atmosphäre, interstellar',         '—',            '⁶Li, ⁷Li, ⁹Be, ¹⁰B, ¹¹B', '¹⁶O + kosmische Strahlung → ⁶Li + …'],
      ],
      highlight: [2, 6],
    })}

    <!-- Triple-Alpha-Prozess -->
    ${renderInfobox({
      type: 'blue', icon: 'fas fa-star', title: 'Der Triple-Alpha-Prozess — Kohlenststoff, die Grundlage des Lebens',
      body: `Wie entsteht ¹²C in Sternen? Ein direkter Dreifach-Stoß dreier He-Kerne ist
             extrem unwahrscheinlich. Die Lösung: ein zweistufiger Prozess:<br><br>
             <strong>Stufe 1:</strong> ⁴He + ⁴He → ⁸Be (instabil! t½ = 8,2·10⁻¹⁷ s)<br>
             <strong>Stufe 2:</strong> ⁸Be + ⁴He → ¹²C* (angeregter Zustand, 7,65 MeV)<br>
             <strong>Stufe 3:</strong> ¹²C* → ¹²C + γ (Grundzustand)<br><br>
             <strong>Der Hoyle-Zustand:</strong> Fred Hoyle sagte 1953 voraus, dass ¹²C
             einen angeregten Zustand bei genau 7,65 MeV haben muss —
             sonst wäre kein ¹²C entstanden, und es gäbe kein Leben.
             Diese Resonanz wurde tatsächlich gefunden (experimentell bestätigt 1953).
             Dies ist ein berühmtes Beispiel für anthropisches Denken in der Physik.`,
    })}

    ${renderAccordion([
      {
        title: 'Die pp-Kette im Detail — Energiequelle der Sonne',
        content: `<p class="lz-prose">Die <strong>Proton-Proton-Kette</strong> ist der
                  Hauptenergielieferant in Sternen bis zur Masse der Sonne (M ≤ M☉).
                  Sie läuft in drei Ästen ab (pp I, pp II, pp III), wobei pp I dominiert:</p>
                  <p class="lz-prose"><strong>pp-I-Kette:</strong><br>
                  ¹H + ¹H → ²H + e⁺ + ν_e + 0,42 MeV (langsam — schwache WW)<br>
                  ²H + ¹H → ³He + γ + 5,49 MeV<br>
                  ³He + ³He → ⁴He + 2 ¹H + 12,86 MeV<br><br>
                  <strong>Nettoreaktion:</strong> 4 ¹H → ⁴He + 2e⁺ + 2ν_e + 2γ + 26,7 MeV<br><br>
                  Die Sonne wandelt ~6,2 · 10¹¹ kg H in He pro Sekunde um.
                  Massendefekt: ~4,3 · 10⁹ kg/s → E = Δm·c² ≈ 3,85 · 10²⁶ W (Sonne Leuchtkraft).</p>`,
      },
      {
        title: 'Der CNO-Zyklus — Katalytische H-Fusion in massereicheren Sternen',
        content: `<p class="lz-prose">Bei Sternen mit M > 1,3 M☉ und T > 1,7 · 10⁷ K
                  dominiert der <strong>CNO-Zyklus</strong>. C, N, O wirken als
                  Katalysatoren und werden am Ende regeneriert:</p>
                  <p class="lz-prose">
                  ¹²C + ¹H → ¹³N + γ<br>
                  ¹³N → ¹³C + e⁺ + ν_e (β⁺, t½ = 9,97 min)<br>
                  ¹³C + ¹H → ¹⁴N + γ<br>
                  ¹⁴N + ¹H → ¹⁵O + γ (langsamster Schritt!)<br>
                  ¹⁵O → ¹⁵N + e⁺ + ν_e (β⁺, t½ = 2,04 min)<br>
                  ¹⁵N + ¹H → ¹²C + ⁴He (Regeneration!)<br><br>
                  Nettoreaktion: identisch zur pp-Kette: 4 ¹H → ⁴He + 2e⁺ + 2ν_e + Energie.<br>
                  Wichtig: In Sternen mit M > 1,3 M☉ dominiert CNO über pp.</p>`,
      },
      {
        title: 'r-Prozess — Entstehung der schweren Elemente bei Neutronensternverschmelzungen',
        content: `<p class="lz-prose">Der <strong>r-Prozess</strong> (rapid neutron capture process)
                  läuft in extremen Umgebungen mit extrem hohem Neutronenfluss ab.
                  In Mikro- bis Millisekunden werden viele Neutronen eingefangen,
                  bevor β⁻-Zerfall stattfinden kann — es entstehen sehr neutronenreiche
                  Kerne, die dann nach dem r-Prozess zu stabilen Isotopen zerfallen.</p>
                  <p class="lz-prose"><strong>Ort:</strong>
                  Lange diskutiert — Supernovae oder Neutronensternverschmelzungen?
                  2017: Gravitationswellenereignis GW170817 (zwei verschmelzende
                  Neutronensterne) zeigte elektromagnetisches Signal (Kilonova),
                  das Spektrallinien von Sr, Ba, Gold, Platin zeigte →
                  <strong>Neutronensternverschmelzungen sind die Hauptquelle für r-Prozess-Elemente</strong>.<br><br>
                  ~3 Erdmassen Gold wurden bei GW170817 gebildet.</p>`,
      },
    ])}
  `; }

  // ══════════════════════════════════════════════════════════
  // 2.2.2 — Häufigkeit der Elemente
  // ══════════════════════════════════════════════════════════
  _haeufigkeit() { return `
    ${renderSubhead('2.2.2 — Häufigkeit der Elemente')}

    <h3 class="lz-h3">Elementhäufigkeiten — woher wissen wir das?</h3>
    <p class="lz-prose">
      Die Häufigkeit der Elemente kann auf verschiedenen Skalen betrachtet werden:
      im gesamten Universum (kosmisch), in der Sonne (stellar),
      auf der Erde (terrestrisch/Clarke-Werte) und im menschlichen Körper.
      Die Methoden unterscheiden sich: Spektralanalyse für Sonne und Sterne,
      geochemische Analysen für die Erdkruste.
    </p>

    <!-- Kosmische Häufigkeit -->
    <h3 class="lz-h3">Häufigkeit der Elemente im Universum</h3>

    ${renderInfobox({
      type: 'blue', icon: 'fas fa-globe', title: 'Spektralanalyse — Fenster in die kosmische Zusammensetzung',
      body: `<strong>Wie bestimmt man die Zusammensetzung von Sternen?</strong><br>
             Jedes Element absorbiert und emittiert Licht bei charakteristischen
             Wellenlängen (Spektrallinien — entstehen durch Elektronenübergänge).
             Aus dem Absorptionsspektrum des Sternenlichts kann man auf die
             Elementzusammensetzung der Sternatmosphäre schließen.<br><br>
             <strong>Kirchhoff'sche Gesetze:</strong><br>
             ① Heißes kontinuierliches Medium (z.B. Sternkern) → Kontinuumsspektrum<br>
             ② Heißes, dünnes Gas → Emissionsspektrum (Linien)<br>
             ③ Kühles Gas vor Kontinuumsquelle → Absorptionsspektrum (dunkle Linien)`,
    })}

    ${renderTable({
      headers: ['Element', 'Symbol', 'Kosmische Häufigkeit (Atome, relativ zu Si=10⁶)', 'Hauptentstehungsprozess'],
      rows: [
        ['Wasserstoff', 'H',  '2,79 · 10¹⁰',  'Big Bang Nukleosynthese'],
        ['Helium',      'He', '2,72 · 10⁹',   'Big Bang (25%) + Sterne (H-Brennen)'],
        ['Sauerstoff',  'O',  '2,38 · 10⁷',   'He-Brennen (¹²C+⁴He→¹⁶O), O-Brennen'],
        ['Kohlenstoff', 'C',  '1,01 · 10⁷',   'Triple-Alpha-Prozess (3⁴He→¹²C)'],
        ['Neon',        'Ne', '3,44 · 10⁶',   'C-Brennen'],
        ['Stickstoff',  'N',  '3,13 · 10⁶',   'CNO-Zyklus, H-Brennen'],
        ['Magnesium',   'Mg', '1,07 · 10⁶',   'Ne-Brennen'],
        ['Silicium',    'Si', '1,00 · 10⁶',   'O-Brennen (Referenzwert)'],
        ['Eisen',       'Fe', '9,00 · 10⁵',   'Si-Brennen; Maximum der Bindungsenergie'],
        ['Schwefel',    'S',  '5,15 · 10⁵',   'O-Brennen'],
        ['Aluminium',   'Al', '8,49 · 10⁴',   'C-Brennen, Ne-Brennen'],
        ['Kalzium',     'Ca', '6,11 · 10⁴',   'O-/Si-Brennen'],
        ['Nickel',      'Ni', '4,93 · 10⁴',   'Si-Brennen'],
        ['Natrium',     'Na', '5,74 · 10⁴',   'C-Brennen'],
        ['Gold',        'Au', '~0,2',          'r-Prozess (Neutronensternverschmelzung)'],
        ['Uran',        'U',  '~0,009',        'r-Prozess'],
      ],
      highlight: [0, 1, 8],
    })}

    ${renderInfobox({
      type: '', icon: 'fas fa-chart-line', title: 'Odd-Even-Effekt und Häufigkeitspeaks',
      body: `<strong>Odd-Even-Effekt (Harkins-Regel):</strong>
             Elemente mit gerader Ordnungszahl Z sind im Universum häufiger
             als benachbarte ungerade Elemente. Grund: Gerade Z/N-Kombinationen
             bilden energetisch günstigere Kerne (Paarungsenergie).<br><br>
             <strong>Häufigkeitspeak bei Fe (Z=26):</strong>
             Eisen hat die höchste Bindungsenergie pro Nukleon aller Elemente
             (~8,8 MeV/Nukleon). Im Si-Brennen akkumuliert sich daher ⁵⁶Fe —
             Fusion jenseits von Fe ist nicht mehr exotherm.<br><br>
             <strong>Einbruch bei Li, Be, B:</strong>
             Diese Elemente entstehen weder im Big Bang noch effizient in Sternen —
             sie werden dort sogar verbraucht. Hauptquelle: kosmische Spallation.`,
    })}

    <!-- Erdkruste -->
    <h3 class="lz-h3" style="margin-top:1.75rem;">Elementhäufigkeit in der Erdkruste — Clarke-Werte</h3>
    <p class="lz-prose">
      Die <strong>Clarke-Werte</strong> (nach Frank Wigglesworth Clarke, 1889)
      geben die durchschnittliche Massenkonzentration der Elemente in der
      Erdkruste (obere 16 km) an. Wichtig: Die Erde als Ganzes hat eine
      andere Zusammensetzung (Fe und Ni dominieren im Erdkern).
    </p>

    ${renderTable({
      headers: ['Rang', 'Element', 'Symbol', 'Massenanteil Erdkruste [%]', 'Hauptminerale / Vorkommen'],
      rows: [
        ['1', 'Sauerstoff',   'O',  '46,4',  'Silikate (SiO₄⁴⁻), Oxide (Al₂O₃, Fe₂O₃), Wasser'],
        ['2', 'Silicium',     'Si', '28,2',  'Quarz (SiO₂), Feldspäte (KAlSi₃O₈), Glimmer'],
        ['3', 'Aluminium',    'Al', '8,23',  'Feldspäte, Bauxit (Al₂O₃·nH₂O), Korund (Al₂O₃)'],
        ['4', 'Eisen',        'Fe', '5,63',  'Hämatit (Fe₂O₃), Magnetit (Fe₃O₄), Pyrit (FeS₂)'],
        ['5', 'Kalzium',      'Ca', '4,15',  'Calcit/Aragonit (CaCO₃), Gips (CaSO₄·2H₂O), Feldspäte'],
        ['6', 'Natrium',      'Na', '2,36',  'Halit (NaCl), Natronfeldspat (NaAlSi₃O₈), Meerwasser'],
        ['7', 'Magnesium',    'Mg', '2,33',  'Olivin ((Mg,Fe)₂SiO₄), Dolomit (CaMg(CO₃)₂)'],
        ['8', 'Kalium',       'K',  '2,09',  'Kaliglimmer (Muskovit), Kaligranit, Sylvin (KCl)'],
        ['9', 'Titan',        'Ti', '0,565', 'Rutil (TiO₂), Ilmenit (FeTiO₃)'],
        ['10','Wasserstoff',  'H',  '0,14',  'Wasser (H₂O), Hydroxile in Silikaten, organische Materie'],
        ['—', 'Kohlenstoff',  'C',  '0,02',  'Calcit/Dolomit (CO₃²⁻), organische Materie, Kohle'],
        ['—', 'Gold',         'Au', '4·10⁻⁷','Gold (gediegenes Metall), Telluride — extrem selten'],
        ['—', 'Platin',       'Pt', '5·10⁻⁷','Platingruppe-Mineralien — ultramafische Gesteine'],
      ],
      highlight: [0, 1, 2],
    })}

    <!-- Menschlicher Körper -->
    <h3 class="lz-h3" style="margin-top:1.75rem;">Elementzusammensetzung des menschlichen Körpers</h3>

    ${renderMerkboxGrid([
      {
        icon: 'fas fa-tint',
        title: 'O, C, H, N — ~96 % der Körpermasse',
        text: `O: 65 % (Wasser, Proteine, Fette, Kohlenhydrate — alle sauerstoffhaltig)
               C: 18 % (Grundgerüst aller Biomoleküle)
               H: 10 % (Wasser, CH-Bindungen in Biomolekülen)
               N: 3 % (Aminosäuren/Proteine, DNA/RNA-Basen)`,
      },
      {
        icon: 'fas fa-bone',
        title: 'Ca, P — Knochen und Zähne',
        text: `Ca: 1,5 % — Hydroxylapatit Ca₁₀(PO₄)₆(OH)₂ in Knochen/Zähnen;
               Ca²⁺ für Muskelkontraktion, Signalübertragung
               P: 1,0 % — ATP, DNA/RNA-Rückgrat (Phosphodiester),
               Phospholipide (Membranen), Hydroxylapatit`,
      },
      {
        icon: 'fas fa-heartbeat',
        title: 'K, S, Na, Cl, Mg — Elektrolyte und Cofaktoren',
        text: `K: 0,25 % — intrazelluläres Hauptkation, Ruhemembranpotential
               Na: 0,15 % — extrazelluläres Kation, Osmose, Nervenleitung
               Mg: 0,05 % — Cofaktor für >300 Enzyme, ATP-Mg²⁺-Komplex
               Fe: 0,006 % — Hämoglobin (O₂-Transport), Cytochrome (Atmungskette)`,
      },
      {
        icon: 'fas fa-microscope',
        title: 'Spurenelemente — biologisch unverzichtbar',
        text: `Zn: 0,003 % — ~300 Enzyme (Zinkfinger-Proteine, Carboanhydrase)
               Cu: 0,0001 % — Cytochrom-c-Oxidase, Ceruloplasmin (Fe-Stoffwechsel)
               I: 0,00002 % — Schilddrüsenhormone (T₃, T₄)
               Se: Spuren — Selenoproteine, Glutathionperoxidase (Antioxidans)
               Co: Spuren — Vitamin B₁₂ (Cobalamin, cobalthaltige Corrinstruktur)`,
      },
    ])}

    <!-- Vergleich Universum/Erdkruste/Körper -->
    <h3 class="lz-h3" style="margin-top:1.75rem;">Vergleich: Universum — Erdkruste — Menschlicher Körper</h3>

    ${renderTable({
      headers: ['Element', 'Universum (Atom-%)', 'Erdkruste (Masse-%)', 'Mensch (Masse-%)', 'Erklärung der Unterschiede'],
      rows: [
        ['H',  '93,5 %',   '0,14 %',   '10 %',  'Im Universum: Hauptprodukt BB; auf Erde: im Wasser, Silikaten; im Körper: Wasser und Biomoleküle'],
        ['He', '6,5 %',    '<0,001 %', '—',     'Edelgas — flüchtig; entweicht aus Atmosphäre; kein Einbau in Minerale oder Biomoleküle'],
        ['O',  '0,054 %',  '46,4 %',   '65 %',  'Anreicherung auf Erde durch Bindung in Silikaten/Oxiden; im Körper durch Wasser + Biomoleküle'],
        ['C',  '0,031 %',  '0,02 %',   '18 %',  'Kosmisch: Triple-Alpha; im Körper: Grundelement aller Biomoleküle — extreme biologische Anreicherung'],
        ['N',  '0,015 %',  '0,003 %',  '3 %',   'Atmosphäre: N₂ (78 %) wird dort nicht gezählt; Körper: Proteine, DNA'],
        ['Fe', '0,003 %',  '5,63 %',   '0,006 %','Si-Brennen → häufigstes Schwermetall; Eisenkern der Erde; im Körper: Hämoglobin'],
        ['Si', '0,003 %',  '28,2 %',   '<0,001 %','Extrem häufig in Erdkruste (Silikatgesteinsplanet); kaum im Körper (keine Biomoleküle)'],
      ],
      highlight: [0, 2, 3],
    })}

    ${renderInfobox({
      type: 'success', icon: 'fas fa-graduation-cap', title: 'Zusammenfassung — Entstehung und Häufigkeit der Elemente',
      body: `<strong>Big Bang:</strong> H (75 %) + He (25 %) + Spuren D, ³He, ⁷Li<br>
             <strong>Sterne (H-Brennen):</strong> ⁴He aus 4 H; pp-Kette (kleine Sterne) / CNO-Zyklus (große Sterne)<br>
             <strong>Sterne (He-Brennen):</strong> ¹²C via Triple-Alpha; ¹⁶O<br>
             <strong>Sterne (C/Ne/O/Si-Brennen):</strong> Elemente von C bis Fe (stabilstes Nuklid)<br>
             <strong>Supernovae / Neutronensternverschmelzungen:</strong> Alle Elemente > Fe (r-Prozess: Au, Pt, U)<br>
             <strong>Häufigste Elemente:</strong> Universum: H, He · Erdkruste: O, Si, Al · Körper: O, C, H<br>
             <strong>Odd-Even-Effekt:</strong> Gerade Z häufiger als ungerade<br>
             <strong>Fe-Peak:</strong> Maximum Bindungsenergie/Nukleon → Anhäufung bei Si-Brennen<br>
             <strong>Li/Be/B-Einbruch:</strong> Kosmische Spallation als Hauptquelle`,
    })}
  `; }

  init() {
    i18n.init();
    initScrollReveal();
    initInteractive(document);
    initTabs();
  }
}