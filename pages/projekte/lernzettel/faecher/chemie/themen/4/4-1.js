// pages/projekte/lernzettel/faecher/chemie/themen/4/4-1.js
// Kapitel 4.1 — Hauptbindungsarten
// 4.1.1  Überblick
// 4.1.2  Atombindung
// 4.1.3  Ionenbindung
// 4.1.4  Metallbindung

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
  { key: '411', icon: 'fas fa-project-diagram', label: '4.1.1 Überblick'    },
  { key: '412', icon: 'fas fa-share-alt',        label: '4.1.2 Atombindung'  },
  { key: '413', icon: 'fas fa-magnet',           label: '4.1.3 Ionenbindung' },
  { key: '414', icon: 'fas fa-layer-group',      label: '4.1.4 Metallbindung'},
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
  return `<nav class="wim-tabs" role="tablist" id="tabs41">${nav}</nav>${panels}`;
}

function initTabs() {
  const nav = document.getElementById('tabs41');
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

export default class Chemie_4_1 {
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
          <i class="fas fa-chevron-right"></i><span>Kapitel 4</span>
          <i class="fas fa-chevron-right"></i><span>4.1</span>
        </div>
        <h1 class="lz-sub-title">Hauptbindungsarten<br><em>Atom-, Ionen- und Metallbindung</em></h1>
        <p class="lz-sub-desc">
          Überblick chemischer Bindungen · Kovalente Bindung · Lewis-Formeln ·
          VSEPR · Ionengitter · Metallbindung · Struktur-Eigenschafts-Konzept
        </p>
        ${renderTags(['Kap. 4.1', 'Chemische Bindung', 'Lewis', 'VSEPR', 'Ionenbindung', 'LK Chemie BW'])}
      </div>
    </section>

    <section class="lz-content-section">
      <div class="lz-section-wrap">
        ${buildWimHTML(k => {
          if (k === '411') return this._ueberblick();
          if (k === '412') return this._atom();
          if (k === '413') return this._ionen();
          if (k === '414') return this._metall();
          return '';
        })}
      </div>
    </section>

    <section class="lz-content-section" style="padding:1.5rem 0 3rem;">
      <div class="lz-section-wrap">
        ${renderPageNav({
          prev: { label: '3.2 Periodensystem',             link: `${BASE}/themen/3/3-2` },
          next: { label: '4.2 Zwischenmolekulare Kräfte',  link: `${BASE}/themen/4/4-2` },
        }, BASE)}
      </div>
    </section>
    ${footerHTML(this.router)}
  `; }

  // ══════════════════════════════════════════════════════════
  // 4.1.1 — Überblick
  // ══════════════════════════════════════════════════════════
  _ueberblick() { return `
    ${renderSubhead('4.1.1 — Überblick chemischer Bindungen')}

    <h2 class="lz-h2">Warum gehen Atome Bindungen ein?</h2>
    <p class="lz-prose">
      Chemische Bindungen entstehen, weil der gebundene Zustand energetisch
      günstiger ist als der Zustand freier Atome — das System gibt Energie ab
      und gewinnt Stabilität. Das treibende Prinzip ist das
      <strong>Bestreben nach abgeschlossener Valenzschale</strong>
      (Edelgaskonfiguration, Oktettregel) durch gemeinsame Elektronen,
      Elektronenübertragung oder Elektronenabgabe an ein Elektronengas.
    </p>

    ${renderTable({
      headers: ['Bindungstyp', 'Beteiligte Teilchen', 'Bindungsprinzip', 'Typische Partner', 'Bindungsenergie', 'Beispiele'],
      rows: [
        ['Atombindung (kovalent)',
         'Nichtmetall-Atome',
         'Gemeinsame Elektronenpaare (EP) zwischen Atomen; EP gehören beiden Atomen',
         'Nichtmetall + Nichtmetall · Bei ähnlicher EN',
         '150–1000 kJ/mol (stark)',
         'H₂, Cl₂, H₂O, NH₃, CO₂, CH₄, Benzol'],
        ['Ionenbindung',
         'Kationen + Anionen',
         'Elektrostatische Anziehung zwischen entgegengesetzt geladenen Ionen im Kristallgitter',
         'Metall + Nichtmetall · Großer ΔEN (>1,7 nach Pauling)',
         '600–4000 kJ/mol (sehr stark)',
         'NaCl, CaF₂, MgO, K₂SO₄, CaCO₃'],
        ['Metallbindung',
         'Metallkationen + delokalisierte Elektronen',
         'Positiv geladene Metallrümpfe im Elektronengas (Elektronengas-Modell)',
         'Metall + Metall (Legierungen) · Reine Metalle',
         '100–850 kJ/mol (variabel)',
         'Fe, Cu, Au, Al, Stahl (Fe/C), Messing (Cu/Zn)'],
      ],
      highlight: [0, 1, 2],
    })}

    ${renderInfobox({
      type: 'blue', icon: 'fas fa-lightbulb', title: 'ΔEN als Entscheidungskriterium (Faustregel)',
      body: `Die Elektronegativitätsdifferenz ΔEN zweier bindender Atome gibt einen
             ersten Hinweis auf den Bindungstyp:<br><br>
             <strong>ΔEN < 0,4:</strong> Unpolare (homöopolare) kovalente Bindung
             → nahezu gleiche EN, Elektronen gleichmäßig verteilt (H–H, Cl–Cl, C–H)<br>
             <strong>ΔEN 0,4–1,7:</strong> Polare kovalente Bindung
             → Elektronen stärker zum elektronegativeren Partner (H–Cl, H₂O, NH₃)<br>
             <strong>ΔEN > 1,7:</strong> Ionenbindung
             → Elektronenübertragung; ionischer Charakter dominiert (NaCl: ΔEN=2,1)<br><br>
             <em>Achtung: Dies sind Faustregeln — Übergänge sind fließend.
             Selbst NaCl hat ~25 % kovalenten Charakter.</em>`,
    })}

    <h3 class="lz-h3" style="margin-top:1.75rem;">Bindungseigenschaften im Vergleich</h3>

    ${renderTable({
      headers: ['Eigenschaft', 'Kovalent (unpolar)', 'Kovalent (polar)', 'Ionisch', 'Metallisch'],
      rows: [
        ['Schmelzpunkt',       'Niedrig bis hoch (Netzwerk)', 'Niedrig bis mittel', 'Hoch (800–2800 °C)', 'Mittel bis sehr hoch (−39 bis 3422 °C)'],
        ['Siedepunkt',         'Niedrig (Moleküle)',          'Niedrig bis mittel', 'Sehr hoch',          'Mittel bis sehr hoch'],
        ['Härte',              'Weich (Molkrist.) bis sehr hart (Diamant)', 'Weich',  'Hart, aber spröde',  'Verformbar (duktil, hämmerbar)'],
        ['El. Leitfähigkeit',  'Keine',                      'Keine',              'Nur als Schmelze/Lösung (Ionen beweglich)', 'Sehr hoch (freie Elektronen)'],
        ['Löslichkeit in H₂O', 'Schlecht (unpolar)',          'Oft gut (polar)',    'Oft gut (Ionendissoziation)', 'Keine (reagiert oft)'],
        ['Löslichkeit in unp. LM', 'Gut',                   'Schlecht',           'Schlecht',            '—'],
        ['Beispiel',           'I₂, CCl₄',                  'HCl, H₂O',          'NaCl, CaO',           'Cu, Fe'],
      ],
      highlight: [3],
    })}

    <h3 class="lz-h3" style="margin-top:1.75rem;">Oktettregel und ihre Ausnahmen</h3>
    <p class="lz-prose">
      Die <strong>Oktettregel</strong> (Lewis, 1916) besagt: Atome streben eine
      Elektronenkonfiguration mit 8 Valenzelektronen an (Edelgaskonfiguration),
      indem sie Elektronen teilen, aufnehmen oder abgeben.
      Sie gilt für die meisten Hauptgruppenelemente der 2. und 3. Periode —
      hat aber wichtige Ausnahmen:
    </p>

    ${renderTable({
      headers: ['Ausnahme', 'Beispiele', 'Erklärung'],
      rows: [
        ['Oktettunterschreitung', 'BF₃ (6 VE), BeCl₂ (4 VE), AlCl₃ (6 VE)', 'B, Be, Al haben weniger als 4 Bindungspartner; können kein Oktett erreichen → starke Lewis-Säuren (nehmen gerne EP auf)'],
        ['Oktettüberschreitung',  'PCl₅ (10 VE), SF₆ (12 VE), ClF₃ (10 VE)', 'Elemente ab 3. Periode können d-Orbitale nutzen (umstritten) oder tolerierten hypervalente Strukturen; 5 oder 6 Bindungspartner möglich'],
        ['Radikale (ungerade e⁻)', 'NO (11 VE), NO₂, ClO₂', 'Ungerade Elektronenzahl → ein ungepaartes Elektron; Oktett strukturell nicht erreichbar; oft reaktive Zwischenstufen'],
        ['Duettregel (H, He, Li)', 'H₂, HCl, LiH', 'H und He streben nur 2 Elektronen (Heliumkonfiguration) an'],
      ],
      highlight: [1],
    })}
  `; }

  // ══════════════════════════════════════════════════════════
  // 4.1.2 — Atombindung
  // ══════════════════════════════════════════════════════════
  _atom() { return `
    ${renderSubhead('4.1.2 — Atombindung (Kovalente Bindung)')}

    <h3 class="lz-h3">Grundprinzip der kovalenten Bindung</h3>
    <p class="lz-prose">
      Bei der Atombindung teilen sich zwei Atome <strong>gemeinsame
      Elektronenpaare (bindende EP)</strong>. Die Elektronen befinden sich
      in einem gemeinsamen Orbital zwischen den Kernen — die Anziehung beider
      Kerne auf die geteilten Elektronen überwiegt die gegenseitige
      Kern-Kern-Abstoßung. Die Bindungsenergie entspricht der Energie,
      die benötigt wird, um die Bindung homolytisch zu brechen
      (Bildung zweier Radikale).
    </p>

    ${renderFormulaBox({
      label:   'Bindungsenergie und Bindungslänge',
      formula: 'E_Bind ∝ Bindungsordnung / Bindungslänge',
      desc:    'Mehr Bindungen zwischen denselben Atomen → kürzer + stärker · C–C: 347 kJ/mol, 154 pm · C=C: 614 kJ/mol, 134 pm · C≡C: 839 kJ/mol, 120 pm',
    })}

    <h3 class="lz-h3" style="margin-top:1.75rem;">Lewis-Schreibweise — Regeln</h3>
    <p class="lz-prose">
      Die Lewis-Formel stellt bindende und freie Elektronenpaare dar.
      Jeder Strich entspricht einem bindenden EP (2 Elektronen),
      jedes Punktpaar einem freien EP. Die Schritte zum Aufstellen:
    </p>

    ${renderMerkboxGrid([
      {
        icon: 'fas fa-list-ol',
        title: 'Schritt 1 — Valenzelektronen zählen',
        text: `Summe aller Valenzelektronen aller Atome addieren.
               Bei Anionen: Ladung addieren (z.B. OH⁻: 6+1+1=8).
               Bei Kationen: Ladung subtrahieren (z.B. NH₄⁺: 5+4×1−1=8).`,
      },
      {
        icon: 'fas fa-sitemap',
        title: 'Schritt 2 — Gerüst aufstellen',
        text: `Zentralatom (meist das seltenere oder weniger elektronegative) in die Mitte.
               Alle Atome mit Einfachbindungen verbinden.
               Jede Bindung verbraucht 2 Elektronen aus dem Pool.`,
      },
      {
        icon: 'fas fa-fill',
        title: 'Schritt 3 — Außenatome auffüllen',
        text: `Außenatome zuerst mit freien EP auffüllen bis zum Oktett
               (H: Duett). Verbleibende Elektronen auf das Zentralatom.`,
      },
      {
        icon: 'fas fa-check-circle',
        title: 'Schritt 4 — Oktettregel prüfen',
        text: `Falls Zentralatom kein Oktett hat: freie EP der Außenatome
               in Mehrfachbindungen (Doppel- oder Dreifachbindungen) umwandeln.
               Ladungen prüfen (formale Ladungen minimal halten).`,
      },
    ])}

    ${renderTable({
      headers: ['Molekül', 'VE gesamt', 'Lewis-Formel (Beschreibung)', 'Bindungstypen', 'Formale Ladungen'],
      rows: [
        ['H₂O',    '8',   'O in Mitte, 2 O–H, 2 freie EP am O',              '2 Einfachbindungen',             'alle 0'],
        ['NH₃',    '8',   'N in Mitte, 3 N–H, 1 freies EP am N',             '3 Einfachbindungen',             'alle 0'],
        ['CO₂',    '16',  'C in Mitte, je 1 C=O Doppelbindung links/rechts',  '2 Doppelbindungen',              'alle 0'],
        ['CO',     '10',  'C≡O Dreifachbindung + je 1 freies EP',             '1 Dreifachbindung',              'C:−1, O:+1 (formal)'],
        ['HCN',    '10',  'H–C≡N Dreifachbindung',                           '1 Einfach- + 1 Dreifachbindung', 'alle 0'],
        ['NO₂⁻',  '18',  'N in Mitte, 1 N=O + 1 N–O mit freiem EP, +1 EP am N', 'Resonanzstrukturen',         'O:−1 je nach Grenzstruktur'],
        ['SO₄²⁻', '32',  'S in Mitte, 4 S–O (oder 2 S=O + 2 S–O)',         'Resonanz; 4 äquivalente S–O',    'Gesamtladung −2'],
        ['BF₃',   '24',  'B in Mitte, 3 B–F, B hat nur 6 VE (kein Oktett)', '3 Einfachbindungen',             'B:0, F:0'],
        ['PCl₅',  '40',  'P in Mitte, 5 P–Cl, P hat 10 VE (hypervalent)',   '5 Einfachbindungen',             'alle 0'],
        ['NH₄⁺',  '8',   'N in Mitte, 4 N–H (kein freies EP)',               '4 Einfachbindungen',             'N:+1'],
      ],
      highlight: [0, 1, 2],
    })}

    <h3 class="lz-h3" style="margin-top:1.75rem;">Resonanzstrukturen</h3>
    <p class="lz-prose">
      Wenn mehrere gleichwertige Lewis-Formeln aufgestellt werden können,
      spricht man von <strong>Resonanzstrukturen</strong>. Das tatsächliche
      Molekül ist keiner dieser Strukturen, sondern ein
      <strong>Resonanzhybrid</strong> — ein Mittelwert aller Grenzstrukturen.
      Mesomerie stabilisiert das Molekül (Resonanzenergie).
    </p>

    ${renderTable({
      headers: ['Verbindung', 'Resonanzstrukturen', 'Hybridstruktur (tatsächlich)', 'Resonanzenergie'],
      rows: [
        ['Ozon O₃',       '2 gleichwertige: O=O–O⁻ ↔ ⁻O–O=O',            'Beide O–O-Bindungen gleichwertig: 1,5-Bindungsordnung, 128 pm', '~37 kJ/mol'],
        ['NO₃⁻',          '3 gleichwertige: je eine N=O und zwei N–O⁻',    'Alle N–O-Bindungen gleich: Länge 124 pm',                       '~42 kJ/mol'],
        ['Benzol C₆H₆',   'Kekulé-Strukturen: alternierend C=C und C–C',  'Alle C–C-Bindungen gleich: 140 pm (zwischen 134 und 154 pm)',  '~150 kJ/mol'],
        ['CO₃²⁻',         '3 gleichwertige Grenzstrukturen',               'Alle C–O gleich: 129 pm',                                       '~60 kJ/mol'],
        ['SO₂',           '2: S=O–O⁻ ↔ O=S–O⁻',                          'S–O-Bindungen gleich lang',                                     'Gering'],
      ],
      highlight: [2],
    })}

    <h3 class="lz-h3" style="margin-top:1.75rem;">VSEPR-Modell — Molekülgeometrie</h3>
    <p class="lz-prose">
      Das <strong>VSEPR-Modell</strong> (Valence Shell Electron Pair Repulsion,
      Gillespie-Nyholm, 1957) ermöglicht die Vorhersage der Molekülgeometrie
      aus der Lewis-Formel. Grundprinzip: Alle Elektronenpaare (bindend und frei)
      stoßen sich ab und nehmen maximalen Abstand zueinander ein.
      Freie Elektronenpaare (FEP) stoßen stärker ab als bindende (BEP):
      FEP–FEP > FEP–BEP > BEP–BEP.
    </p>

    ${renderTable({
      headers: ['EP gesamt', 'Davon FEP', 'Elektronengeometrie', 'Molekülgeometrie', 'Bindungswinkel', 'Beispiele'],
      rows: [
        ['2', '0', 'Linear',             'Linear',            '180°',           'BeCl₂, CO₂, CS₂, HCN'],
        ['3', '0', 'Trigonal-planar',    'Trigonal-planar',   '120°',           'BF₃, SO₃, NO₃⁻, CO₃²⁻'],
        ['3', '1', 'Trigonal-planar',    'Gewinkelt',         '<120° (~117°)',  'SO₂, O₃, NO₂⁻'],
        ['4', '0', 'Tetraedrisch',       'Tetraedrisch',      '109,5°',         'CH₄, SiCl₄, SO₄²⁻, NH₄⁺'],
        ['4', '1', 'Tetraedrisch',       'Trigonal-pyramidal','<109,5° (~107°)','NH₃, PCl₃, NF₃'],
        ['4', '2', 'Tetraedrisch',       'Gewinkelt',         '<107° (~104,5°)','H₂O, H₂S, OF₂'],
        ['5', '0', 'Trigonal-bipyramidal','Trigonal-bipyramidal','90°/120°',   'PCl₅, PF₅, AsF₅'],
        ['5', '1', 'Trigonal-bipyramidal','Wippe (Seesaw)',   '~173°/~102°',   'SF₄, IF₄⁺, XeO₂F₂'],
        ['5', '2', 'Trigonal-bipyramidal','T-Form',           '~87°/~180°',    'ClF₃, BrF₃'],
        ['5', '3', 'Trigonal-bipyramidal','Linear',           '180°',          'XeF₂, I₃⁻, IF₂⁻'],
        ['6', '0', 'Oktaedrisch',        'Oktaedrisch',       '90°',           'SF₆, PCl₆⁻, [Fe(CN)₆]³⁻'],
        ['6', '1', 'Oktaedrisch',        'Quadr.-pyramidal',  '<90°',          'IF₅, BrF₅, XeOF₄'],
        ['6', '2', 'Oktaedrisch',        'Quadratisch-planar','90°',           'XeF₄, [PtCl₄]²⁻, ICl₄⁻'],
      ],
      highlight: [3, 4, 5],
    })}

    ${renderInfobox({
      type: 'warning', icon: 'fas fa-info-circle', title: 'VSEPR — Winkelabweichungen durch freie Elektronenpaare',
      body: `Freie EP beanspruchen mehr Raum als bindende EP → drücken bindende EP zusammen:<br><br>
             <strong>CH₄:</strong> 4 BEP → idealer Tetraeder → 109,5°<br>
             <strong>NH₃:</strong> 3 BEP + 1 FEP → 107,3° (1 FEP drückt BEP zusammen)<br>
             <strong>H₂O:</strong> 2 BEP + 2 FEP → 104,5° (2 FEP noch stärker)<br><br>
             Merkregel: Pro FEP sinkt der Winkel um ~2,5°.
             Mehrfachbindungen nehmen mehr Raum ein als Einfachbindungen
             und drücken Nachbarwinkel etwas zusammer.`,
    })}

    <h3 class="lz-h3" style="margin-top:1.75rem;">Polarität von Molekülen</h3>
    <p class="lz-prose">
      Eine Bindung ist polar, wenn ΔEN > 0,4. Ob das gesamte
      <strong>Molekül</strong> ein Dipolmoment besitzt, hängt von der
      <strong>Geometrie</strong> ab: Wenn sich die Bindungsdipole
      aufheben (vektoriell), ist das Molekül trotz polarer Bindungen
      unpolar.
    </p>

    ${renderTable({
      headers: ['Molekül', 'Geometrie', 'Polare Bindungen?', 'Dipolmoment μ', 'Erklärung'],
      rows: [
        ['CO₂',   'Linear',           'Ja (C=O polar)',    '0 D (unpolar)',       'Die beiden C=O-Dipole zeigen in entgegengesetzte Richtungen → heben sich auf'],
        ['H₂O',   'Gewinkelt 104,5°', 'Ja (O–H polar)',    '1,85 D (stark polar)','Gewinkelte Geometrie → Dipole addieren sich, kein Auslöschen'],
        ['NH₃',   'Trigo.-pyramidal', 'Ja (N–H polar)',    '1,47 D (polar)',      'Pyramidal → Dipol zeigt zur Spitze (N mit FEP)'],
        ['CCl₄',  'Tetraedrisch',     'Ja (C–Cl polar)',   '0 D (unpolar)',       'Regelmäßiger Tetraeder → alle 4 Dipole heben sich auf'],
        ['CHCl₃', 'Tetraedrisch (verzerrt)', 'Ja',         '1,02 D (polar)',      'Unsymmetrisch: 3 Cl + 1 H → resultierender Dipol'],
        ['BF₃',   'Trigonal-planar',  'Ja (B–F polar)',    '0 D (unpolar)',       'Ebene Geometrie, 120° → Vektorsumme = 0'],
        ['PCl₅',  'Trig.-bipyramidal','Ja',                '0 D (unpolar)',       'Symmetrisch: axiale und äquatoriale Dipole heben sich auf'],
        ['SF₄',   'Wippe',            'Ja',                '0,6 D (leicht polar)','Asymmetrisch wegen FEP'],
      ],
      highlight: [0, 1, 2],
    })}

    ${renderAccordion([
      {
        title: 'σ- und π-Bindungen — Orbitalüberlappung',
        content: `<p class="lz-prose"><strong>σ-Bindung (Sigma):</strong>
                  Axiale Überlappung der Orbitale entlang der Kernverbindungsachse.
                  Jede Einfachbindung ist eine σ-Bindung.
                  Freie Drehbarkeit um die σ-Bindungsachse möglich
                  (sofern keine π-Bindung).</p>
                  <p class="lz-prose"><strong>π-Bindung (Pi):</strong>
                  Seitliche Überlappung von p-Orbitalen parallel zur Kernachse.
                  Entsteht zusätzlich zur σ-Bindung bei Doppel- und Dreifachbindungen.
                  Keine freie Drehbarkeit → E/Z-Isomerie bei Doppelbindungen möglich.</p>
                  <p class="lz-prose"><strong>Bindungsordnung:</strong><br>
                  Einfachbindung = 1σ · Doppelbindung = 1σ + 1π · Dreifachbindung = 1σ + 2π<br>
                  C=C: σ aus sp²-sp², π aus p_z-p_z · C≡C: σ aus sp-sp, 2π aus p_y-p_y und p_z-p_z</p>`,
      },
      {
        title: 'Hybridisierung — sp³, sp², sp',
        content: `<p class="lz-prose">Um die Geometrie von Kohlenstoffverbindungen
                  zu erklären, werden die s- und p-Orbitale zu
                  <strong>Hybridorbitalen</strong> gemischt:</p>
                  ${renderTable({
                    headers: ['Hybridisierung', 'Orbitale gemischt', 'Geometrie', 'Winkel', 'Beispiel'],
                    rows: [
                      ['sp³', 's + 3p → 4 sp³', 'Tetraedrisch', '109,5°', 'CH₄, NH₃, H₂O, C in Alkanen'],
                      ['sp²', 's + 2p → 3 sp² + 1 reines p', 'Trigonal-planar', '120°', 'C in Alkenen, Benzol, C=O-Gruppe'],
                      ['sp',  's + 1p → 2 sp + 2 reine p', 'Linear', '180°', 'C in Alkinen, CO₂, HCN'],
                    ],
                  })}
                  <p class="lz-prose" style="margin-top:0.75rem;">
                  Faustregel: Hybridisierung = Anzahl σ-Bindungspartner + Anzahl FEP am Zentralatom<br>
                  4 → sp³ · 3 → sp² · 2 → sp</p>`,
      },
      {
        title: 'Bindungslänge und Bindungsenergie — Übersicht',
        content: `${renderTable({
          headers: ['Bindung', 'Länge [pm]', 'Energie [kJ/mol]', 'Bemerkung'],
          rows: [
            ['H–H',    '74',   '436',  'Referenz'],
            ['C–H',    '109',  '413',  'Grundbaustein organischer Verbindungen'],
            ['C–C',    '154',  '347',  'Alkan'],
            ['C=C',    '134',  '614',  'Alken'],
            ['C≡C',    '120',  '839',  'Alkin'],
            ['C–N',    '147',  '305',  '—'],
            ['C=N',    '128',  '615',  '—'],
            ['C≡N',    '116',  '891',  'Sehr stark'],
            ['C–O',    '143',  '358',  'Ether, Alkohol'],
            ['C=O',    '122',  '745',  'Aldehyd, Keton, Ester'],
            ['O–H',    '96',   '463',  'Wasser, Alkohole — H-Brücken!'],
            ['N–H',    '101',  '391',  'Amine — H-Brücken!'],
            ['F–F',    '142',  '155',  'Schwach! Abstoßung der F-FEP'],
            ['N≡N',    '110',  '941',  'Stärkste Bindung im PSE'],
          ],
          highlight: [4, 13],
        })}`,
      },
    ])}
  `; }

  // ══════════════════════════════════════════════════════════
  // 4.1.3 — Ionenbindung
  // ══════════════════════════════════════════════════════════
  _ionen() { return `
    ${renderSubhead('4.1.3 — Ionenbindung')}

    <h3 class="lz-h3">Entstehung von Ionen und Ionenverbindungen</h3>
    <p class="lz-prose">
      Ionenbindungen entstehen durch vollständige <strong>Elektronenübertragung</strong>
      von einem Metall auf ein Nichtmetall. Das Metall gibt Elektronen ab
      (wird Kation), das Nichtmetall nimmt sie auf (wird Anion).
      Die entgegengesetzt geladenen Ionen ziehen sich elektrostatisch an
      (Coulomb-Kraft) und ordnen sich in einem <strong>Ionenkristallgitter</strong> an.
    </p>

    ${renderFormulaBox({
      label:   'Coulomb-Wechselwirkungsenergie zwischen zwei Ionen',
      formula: 'E = (z₊ · z₋ · e²) / (4πε₀ · r)',
      desc:    'z₊, z₋: Ladungszahlen (z.B. Na⁺: +1, Cl⁻: −1) · e = 1,602·10⁻¹⁹ C · ε₀ = 8,854·10⁻¹² C²/(N·m²) · r: Abstand der Ionenmittelpunkte [m] · Energie nimmt mit r⁻¹ ab (langreichweitig!)',
    })}

    <h3 class="lz-h3" style="margin-top:1.75rem;">Born-Haber-Kreisprozess — Energetik der Ionenbildung</h3>
    <p class="lz-prose">
      Die <strong>Gitterenergie</strong> ist die Energie, die beim Aufbau des
      Ionenkristalls aus gasförmigen Ionen freigesetzt wird
      (oder zum Zerstören des Gitters benötigt wird).
      Sie ist nicht direkt messbar, kann aber über den
      <strong>Born-Haber-Kreisprozess</strong> (Hess'scher Wärmesatz) berechnet werden.
    </p>

    ${renderTable({
      headers: ['Schritt', 'Vorgang', 'Energiebeitrag', 'Beispiel NaCl'],
      rows: [
        ['① Sublimation',      'Na(s) → Na(g)',                         'ΔH_sub > 0 (endotherm)', '+107 kJ/mol'],
        ['② Dissoziation',     '½ Cl₂(g) → Cl(g)',                     'ΔH_dis > 0 (endotherm)', '+121 kJ/mol'],
        ['③ Ionisierung',      'Na(g) → Na⁺(g) + e⁻',                  'IE₁ > 0 (endotherm)',    '+496 kJ/mol'],
        ['④ Elektronenaffinität','Cl(g) + e⁻ → Cl⁻(g)',               'EA < 0 (exotherm)',       '−349 kJ/mol'],
        ['⑤ Gitterenergie',    'Na⁺(g) + Cl⁻(g) → NaCl(s)',            'U < 0 (exotherm, stark)', '−787 kJ/mol'],
        ['∑ Bildungsenthalpie','Na(s) + ½ Cl₂(g) → NaCl(s)',           'ΔH_f = ΣΔH_Schritte',   '−411 kJ/mol ✓'],
      ],
      highlight: [4, 5],
    })}

    ${renderInfobox({
      type: 'blue', icon: 'fas fa-info-circle', title: 'Gitterenergie — Kapiza-Madelung-Formel',
      body: `Die Gitterenergie U eines idealen Ionenkristalls lässt sich berechnen:<br><br>
             <strong>U = −N_A · M · z₊ · z₋ · e² / (4πε₀ · r₀) · (1 − 1/n)</strong><br><br>
             M = Madelung-Konstante (strukturabhängig: NaCl = 1,748; CsCl = 1,763; ZnS Wurtzit = 1,641)<br>
             n = Born-Exponent (Härte des Ions, aus Compressibilität: 5–12)<br>
             r₀ = kürzester Ionen-Ionen-Abstand<br><br>
             <strong>Trend Gitterenergie:</strong>
             Nimmt zu bei · kleineren Ionen (größeres r₀ → schwächere Bindung) ·
             höheren Ladungen (z₊ · z₋ → MgO z=2×2=4 viel größer als NaCl 1×1=1)`,
    })}

    <h3 class="lz-h3" style="margin-top:1.75rem;">Kristallgittertypen</h3>

    ${renderTable({
      headers: ['Gittertyp', 'Koordinationszahl', 'Beispiele', 'Bedingung (r₊/r₋)', 'Eigenschaften'],
      rows: [
        ['NaCl-Typ (kubisch-flächenzentriert)', '6:6', 'NaCl, KCl, MgO, FeO, AgCl', '0,41–0,73', 'Häufigster Ionengittertyp; Na⁺ in Oktaederlücken der Cl⁻-fcc'],
        ['CsCl-Typ (kubisch-primitiv)',          '8:8', 'CsCl, CsBr, TlCl',          '>0,73',     'Große Kationen; einfach kubisches Gitter'],
        ['ZnS Zinkblende (kubisch)',             '4:4', 'ZnS, GaAs, SiC, AgI',       '0,22–0,41', 'Kationen in Tetraederlücken; kovalenter Charakter'],
        ['ZnS Wurtzit (hexagonal)',              '4:4', 'ZnS (metastab), ZnO, BN',   '0,22–0,41', 'Hexagonal; ähnlich Zinkblende'],
        ['Fluorit CaF₂ (kubisch)',               '8:4', 'CaF₂, BaF₂, ZrO₂, UO₂',   '>0,73',     'Ca²⁺ kubisch, F⁻ in Tetraederlücken; 1:2-Stöchiometrie'],
        ['Rutil TiO₂ (tetragonal)',              '6:3', 'TiO₂, SnO₂, MnO₂',        '0,41–0,73', 'Ti⁴⁺ oktaedrisch koordiniert; 1:2-Stöchiometrie'],
        ['Perowskit ABO₃',                       '12:6:6','CaTiO₃, BaTiO₃, SrTiO₃', '—',        'Technisch wichtig: Ferroelektrika, Supraleiter'],
      ],
      highlight: [0, 4],
    })}

    <h3 class="lz-h3" style="margin-top:1.75rem;">Eigenschaften von Ionenverbindungen</h3>

    ${renderMerkboxGrid([
      {
        icon: 'fas fa-thermometer-full',
        title: 'Hohe Schmelz- und Siedepunkte',
        text: `Starke Coulomb-Kräfte zwischen den Ionen müssen überwunden werden.
               NaCl: Smp. 801°C, Sdp. 1413°C.
               MgO (z=2): Smp. 2852°C (viel höher wegen größerer Ladung).
               Trend: größere Ladungen und kleinere Radien → höhere Gitterenergie → höherer Schmelzpunkt.`,
      },
      {
        icon: 'fas fa-bolt',
        title: 'Elektrische Leitfähigkeit',
        text: `Im Festkörper: keine Leitfähigkeit (Ionen fest im Gitter).
               In der Schmelze: Ionen beweglich → Leiter.
               In wässriger Lösung: Ionen hydratisiert und beweglich → Elektrolyt.
               Starke Elektrolyte: vollständige Dissoziation (NaCl, HCl, NaOH).
               Schwache Elektrolyte: unvollständig (CH₃COOH, NH₃).`,
      },
      {
        icon: 'fas fa-hammer',
        title: 'Sprödigkeit',
        text: `Ionenkristalle sind hart aber spröde.
               Mechanische Belastung verschiebt Gitterschichten →
               gleich geladene Ionen kommen nebeneinander → Abstoßung → Riss.
               Gegensatz zu Metallen: keine plastische Verformung möglich.
               Beispiel: Salzwürfel spalten entlang von Spaltflächen.`,
      },
      {
        icon: 'fas fa-tint',
        title: 'Löslichkeit in Wasser',
        text: `Wasser ist Dipol → hydratisiert Kationen (O-Seite) und Anionen (H-Seite).
               Hydratationsenthalpie kompensiert teilweise die Gitterenergie.
               ΔH_Lösung = ΔH_Hydrat + U (Gitterenergie) = kann positiv oder negativ sein.
               LiF schwer löslich (hohe Gitterenergie überwiegt).
               CsI leichter löslich.`,
      },
    ])}
  `; }

  // ══════════════════════════════════════════════════════════
  // 4.1.4 — Metallbindung
  // ══════════════════════════════════════════════════════════
  _metall() { return `
    ${renderSubhead('4.1.4 — Metallbindung')}

    <h3 class="lz-h3">Das Elektronengas-Modell (Drude, 1900)</h3>
    <p class="lz-prose">
      In Metallen geben die Atome ihre Valenzelektronen in ein
      gemeinsames, delokalisiertes <strong>Elektronengas</strong> ab.
      Die zurückbleibenden positiv geladenen <strong>Metallionen (Metallrümpfe)</strong>
      ordnen sich in einem regelmäßigen Gitter an und werden durch das
      gleichmäßig verteilte Elektronengas zusammengehalten.
      Dieses einfache Modell erklärt die wichtigsten Metalleigenschaften.
    </p>

    ${renderMerkboxGrid([
      {
        icon: 'fas fa-bolt',
        title: 'Elektrische Leitfähigkeit',
        text: `Freie Elektronen im Elektronengas können sich im elektrischen Feld
               ungehindert bewegen → Stromfluss ohne Ionenbewegung.
               Höchste Leitfähigkeit: Ag > Cu > Au > Al > Fe.
               Bei höherer Temperatur: stärkere Gitterschwingungen hemmen
               Elektronen → Leitfähigkeit sinkt (metallisches Verhalten).`,
      },
      {
        icon: 'fas fa-thermometer-half',
        title: 'Wärmeleitfähigkeit',
        text: `Elektronen transportieren kinetische Energie schnell durch das Gitter.
               Metalle leiten Wärme viel besser als Nichtmetalle oder Ionenkristalle.
               Wiedemann-Franz-Gesetz: Wärme- und elektrische Leitfähigkeit
               sind proportional (beide durch freie Elektronen).`,
      },
      {
        icon: 'fas fa-expand-arrows-alt',
        title: 'Duktilität und Verformbarkeit',
        text: `Gitterschichten können aneinander abgleiten, ohne die Bindung zu zerstören.
               Das Elektronengas füllt immer den Raum zwischen den Rümpfen.
               Im Gegensatz zu Ionenkristallen: keine Abstoßung gleichgeladener Schichten.
               → Metalle sind hämmerbar (duktil) und ziehbar (dehnbar).`,
      },
      {
        icon: 'fas fa-sun',
        title: 'Metallischer Glanz',
        text: `Freie Elektronen können alle Photonen-Frequenzen absorbieren
               und wieder emittieren → reflektieren Licht aller Wellenlängen.
               Ergebnis: silbriger Glanz (alle Metalle).
               Ausnahmen: Cu (rötlich) und Au (gelblich) durch spezielle
               Bandstruktur und relativistische Effekte.`,
      },
    ])}

    <h3 class="lz-h3" style="margin-top:1.75rem;">Metallische Kristallstrukturen</h3>
    <p class="lz-prose">
      Metalle kristallisieren in dichten Packungen, die den Raum
      optimal ausnutzen. Es gibt drei häufige Strukturen:
    </p>

    ${renderTable({
      headers: ['Struktur', 'Abk.', 'Koordinationszahl', 'Raumfüllung', 'Beispiele'],
      rows: [
        ['Kubisch-dichteste Packung (Schichtfolge ABCABC)', 'kfz (fcc)', '12', '74,05 %', 'Cu, Ag, Au, Al, Ni, Pb, Pt · Edelmetalle'],
        ['Hexagonal-dichteste Packung (Schichtfolge ABABAB)', 'hdp (hcp)', '12', '74,05 %', 'Mg, Zn, Ti, Co, Be · viele Übergangsmetalle'],
        ['Kubisch-raumzentriert', 'krz (bcc)', '8', '68,02 %', 'Fe (α, δ), Na, K, Cr, Mo, W, V · Alkalimetalle'],
        ['Kubisch-primitiv', 'kp', '6', '52,36 %', 'α-Po (einziges Metall); sehr selten'],
      ],
      highlight: [0, 1],
    })}

    ${renderInfobox({
      type: '', icon: 'fas fa-layer-group', title: 'Oktaeder- und Tetraederlücken in dichten Packungen',
      body: `In dicht gepackten Metallen (kfz und hdp) entstehen zwischen den
             Atomen zwei Arten von Lücken:<br><br>
             <strong>Oktaederlücken:</strong> Von 6 Atomen umgeben; Radius r_Lücke ≈ 0,414 · r_Atom.
             Anzahl = gleich der Atomzahl.<br>
             <strong>Tetraederlücken:</strong> Von 4 Atomen umgeben; r_Lücke ≈ 0,225 · r_Atom.
             Anzahl = doppelt so viele wie Atome.<br><br>
             Diese Lücken sind für <strong>Einlagerungsverbindungen</strong> wichtig:
             Kohlenstoff in Eisen (Stahl): C-Atome besetzen Oktaederlücken im kfz-Fe (γ-Fe/Austenit).
             H in Pd: H₂ dissoziiert, H in Oktaederlücken → Pd-H-Speicher.`,
    })}

    <h3 class="lz-h3" style="margin-top:1.75rem;">Legierungen</h3>
    <p class="lz-prose">
      Legierungen sind feste Lösungen (oder Verbindungen) von zwei oder mehr Metallen
      (oder Metall + Nichtmetall). Sie haben oft bessere Eigenschaften
      als die reinen Metalle.
    </p>

    ${renderTable({
      headers: ['Legierungstyp', 'Struktur', 'Bedingung', 'Beispiele', 'Eigenschaften'],
      rows: [
        ['Substitutionslegierung', 'Fremdatome ersetzen Wirtsatome im Gitter', 'Ähnliche Atomradien (±15 %), gleiche Kristallstruktur, ähnliche EN und Valenz (Hume-Rothery-Regeln)', 'Messing (Cu/Zn), Bronze (Cu/Sn), Ag/Au', 'Oft härtere und korrosionsbeständigere Produkte'],
        ['Einlagerungslegierung', 'Kleine Fremdatome in Gitterlücken', 'Fremdatom deutlich kleiner als Wirtatom (r < 0,59 r_Wirt)', 'Stahl (Fe/C), Interstitielle Hydride (PdH_x)', 'Drastisch veränderte mechanische Eigenschaften'],
        ['Intermetallische Verbindung', 'Geordnete Struktur mit fester Stöchiometrie', 'Deutliche Größen- oder EN-Unterschiede', 'Ni₃Al (Superlegierung), Cu₃Au, FeSi', 'Oft spröde aber hitzebeständig'],
      ],
      highlight: [0, 1],
    })}

    ${renderTable({
      headers: ['Legierung', 'Zusammensetzung', 'Eigenschaften / Anwendung'],
      rows: [
        ['Stahl',         'Fe + 0,02–2,14 % C (+ Cr, Ni, Mo …)', 'Höhere Festigkeit als Reineisen; Baustahl, Werkzeugstahl, Edelstahl (>10,5% Cr)'],
        ['Gusseisen',     'Fe + >2,14 % C', 'Gut gießbar, spröder als Stahl; Motorblöcke, Rohre'],
        ['Messing',       'Cu + 10–40 % Zn', 'Gelblich, korrosionsbeständig, gut bearbeitbar; Armaturen, Münzen, Musikinstrumente'],
        ['Bronze',        'Cu + 5–25 % Sn', 'Härter als Cu, gut gießbar; Glocken, Skulpturen, historisch Werkzeuge/Waffen'],
        ['Aluminium-Leg.','Al + Cu, Mg, Si, Zn', 'Leicht + fest (Duraluminium: Al/Cu/Mg); Flugzeugbau, Fahrzeuge'],
        ['Amalgam',       'Hg + Ag, Sn, Cu, Zn', 'Zahnfüllungen (historisch); flüssig → hart (Abbindereaktion)'],
        ['Nitinol',       'Ni + Ti (ca. 1:1)', 'Formgedächtnislegierung; Medizintechnik, Aktoren'],
        ['Heusler-Leg.',  'Cu₂MnAl o.ä.', 'Ferromagnetisch trotz nichtmagnetischer Komponenten; Spintronik'],
      ],
      highlight: [0, 2, 4],
    })}

    ${renderCompare({
      titleA: 'Bändermodell — Leiter vs. Nichtleiter',
      titleB: 'Bandlücke und Halbleiter',
      listA: [
        'Elektronen in Festkörpern besetzen Energiebänder (Valenz- und Leitungsband)',
        'Leiter (Metalle): Valenz- und Leitungsband überlappen → freie Elektronen',
        'Isolatoren: Große Bandlücke E_g > 4 eV (z.B. Diamant: 5,5 eV; SiO₂: 9 eV)',
        'Keine Elektronen im Leitungsband bei Raumtemperatur',
      ],
      listB: [
        'Halbleiter: Kleine Bandlücke E_g < 3 eV (Si: 1,12 eV, Ge: 0,67 eV, GaAs: 1,43 eV)',
        'Bei Raumtemperatur: wenige Elektronen thermisch ins Leitungsband angehoben',
        'Dotierung: gezieltes Einbringen von Fremdatomen (n-Typ: P in Si; p-Typ: B in Si)',
        'Grundlage aller modernen Elektronik: Transistoren, Dioden, Solarzellen',
      ],
    })}

    ${renderInfobox({
      type: 'success', icon: 'fas fa-graduation-cap', title: 'Zusammenfassung Hauptbindungsarten',
      body: `<strong>Atombindung:</strong> Gemeinsame EP; Lewis-Formel + VSEPR → Geometrie; polar/unpolar durch ΔEN und Symmetrie<br>
             <strong>σ-Bindung:</strong> axial; jede Einfachbindung · <strong>π-Bindung:</strong> seitlich; in Mehr-fachbindungen<br>
             <strong>Ionenbindung:</strong> Elektronenübertragung → Ionen im Gitter; Born-Haber; Gitterenergie ∝ z₊·z₋/r<br>
             <strong>Metallbindung:</strong> Delokalisiertes Elektronengas; erklärt Leitfähigkeit, Glanz, Duktilität<br>
             <strong>ΔEN-Faustregel:</strong> < 0,4 → unpolar kovalent · 0,4–1,7 → polar kovalent · > 1,7 → ionisch`,
    })}
  `; }

  init() {
    i18n.init();
    initScrollReveal();
    initInteractive(document);
    initTabs();
  }
}