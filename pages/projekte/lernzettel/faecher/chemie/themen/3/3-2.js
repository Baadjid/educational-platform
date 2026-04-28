// pages/projekte/lernzettel/faecher/chemie/themen/3/3-2.js
// Kapitel 3.2 — Das Periodensystem der Elemente
// 3.2.1  Historie
// 3.2.2  Ordnungsprinzip im Periodensystem
// 3.2.3  Periodizität der Eigenschaften

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
  renderCompare,
  initInteractive,
} from '../../../../js/components/components.js';
import { renderPageNav } from '../../../../js/components/subnav.js';
import { COLOR, COLOR_RGB, BASE } from '../../chemie.js';

const TABS = [
  { key: '321', icon: 'fas fa-history',        label: '3.2.1 Historie'                   },
  { key: '322', icon: 'fas fa-table',          label: '3.2.2 Ordnungsprinzip'            },
  { key: '323', icon: 'fas fa-chart-line',     label: '3.2.3 Periodizität'               },
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
  return `<nav class="wim-tabs" role="tablist" id="tabs32">${nav}</nav>${panels}`;
}

function initTabs() {
  const nav = document.getElementById('tabs32');
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

export default class Chemie_3_2 {
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
          <i class="fas fa-chevron-right"></i><span>Kapitel 3</span>
          <i class="fas fa-chevron-right"></i><span>3.2</span>
        </div>
        <h1 class="lz-sub-title">Das Periodensystem<br><em>der Elemente</em></h1>
        <p class="lz-sub-desc">
          Geschichte des PSE · Aufbau und Ordnungsprinzip ·
          Periodische Eigenschaften: Atomradius, IE, EN, Elektronenaffinität
        </p>
        ${renderTags(['Kap. 3.2', 'PSE', 'Periodizität', 'Elektronegativität', 'LK Chemie BW'])}
      </div>
    </section>

    <section class="lz-content-section">
      <div class="lz-section-wrap">
        ${buildWimHTML(k => {
          if (k === '321') return this._historie();
          if (k === '322') return this._ordnung();
          if (k === '323') return this._periodizitaet();
          return '';
        })}
      </div>
    </section>

    <section class="lz-content-section" style="padding:1.5rem 0 3rem;">
      <div class="lz-section-wrap">
        ${renderPageNav({
          prev: { label: '3.1 Atombau',         link: `${BASE}/themen/3/3-1` },
          next: { label: '4.1 Hauptbindungsarten', link: `${BASE}/themen/4/4-1` },
        }, BASE)}
      </div>
    </section>
    ${footerHTML(this.router)}
  `; }

  // ══════════════════════════════════════════════════════════
  // 3.2.1 — Historie
  // ══════════════════════════════════════════════════════════
  _historie() { return `
    ${renderSubhead('3.2.1 — Historie des Periodensystems')}

    <h2 class="lz-h2">Die Entdeckung der Periodizität</h2>
    <p class="lz-prose">
      Die Entwicklung des Periodensystems ist eine der großartigsten
      intellektuellen Leistungen der Chemiegeschichte. Sie zeigt,
      wie aus empirischen Daten ein universelles Ordnungsprinzip gefunden wurde.
    </p>

    ${renderVTimeline([
      {
        year: 'vor 1860 — Erste Systematisierungsversuche',
        title: 'Triaden und Oktaven',
        text: `Döbereiner (1829): <strong>Triaden</strong> — Gruppen aus drei Elementen
               mit ähnlichen Eigenschaften, bei denen die mittlere Atommasse
               dem Mittel der äußeren entspricht.
               Beispiele: Li–Na–K (7–23–39: Mittel=23 ✓); Ca–Sr–Ba; Cl–Br–I.
               Newlands (1865): <strong>Gesetz der Oktaven</strong> — jedes achte Element
               hat ähnliche Eigenschaften (nach steigender Atommasse geordnet).
               Funktioniert nur bis Ca; wird von der chemischen Gesellschaft abgelehnt.`,
      },
      {
        year: '1869 — Dmitri Mendelejew (und Lothar Meyer)',
        title: 'Das erste moderne Periodensystem',
        text: `Mendelejew und Lothar Meyer entwickeln unabhängig voneinander
               das Periodensystem geordnet nach steigender relativer Atommasse.
               Mendelejews entscheidende Leistung: Er lässt bewusst
               <strong>Lücken</strong> für noch unbekannte Elemente
               und sagt deren Eigenschaften präzise vorher.
               Vorhergesagt: Eka-Aluminium (→ Gallium, 1875),
               Eka-Bor (→ Scandium, 1879), Eka-Silicium (→ Germanium, 1886).
               Alle drei stimmten exzellent mit den Vorhersagen überein.`,
      },
      {
        year: '1894–1900 — Edelgase',
        title: 'Eine neue Gruppe wird entdeckt',
        text: `Ramsay und Rayleigh entdecken Argon (1894), Helium (1895),
               Neon, Krypton, Xenon (1898). Mendelejew war zunächst skeptisch,
               ordnete sie aber schließlich als neue Gruppe 0 ein.
               Demonstration: Das PSE ist erweiterungsfähig.`,
      },
      {
        year: '1913 — Henry Moseley',
        title: 'Ordnungszahl statt Atommasse',
        text: `Moseley misst Röntgenfluoreszenz-Spektren vieler Elemente und
               zeigt: Die Frequenz der charakteristischen Röntgenstrahlung ist
               proportional zum <strong>Quadrat der Kernladungszahl Z</strong>.
               → Das PSE muss nach Z (Protonenzahl), nicht nach Atommasse sortiert sein.
               Erklärt die Anomalien bei Ar/K, Co/Ni, Te/I.
               Tragisch: Moseley fiel 1915 im 1. Weltkrieg — mit 27 Jahren.`,
      },
      {
        year: '1945 — Actinide als neue Reihe',
        title: 'Seaborg und die Actinide',
        text: `Glenn Seaborg erkennt, dass die Transurane (Z > 89)
               eine eigene f-Block-Reihe bilden (analog zu Lanthanoiden).
               Die Actinide werden aus dem Hauptteil des PSE herausgelöst
               und als separate Reihe dargestellt.
               Seaborg ist der einzige Mensch, nach dem noch zu seinen Lebzeiten
               ein Element benannt wurde: Seaborgium (Sg, Z=106, 1997).`,
      },
      {
        year: '1994–2016 — Superschwere Elemente',
        title: 'Periode 7 vollständig',
        text: `GSI Darmstadt, RIKEN Japan, JINR Dubna und LLNL USA synthetisieren
               die Elemente Z=107 bis Z=118.
               2016: IUPAC bestätigt die Namen für Z=113 (Nihonium, Nh),
               Z=115 (Moscovium, Mc), Z=117 (Tennessine, Ts), Z=118 (Oganesson, Og).
               Periode 7 ist damit vollständig. Z=118 schließt als Edelgas die 7. Periode.`,
      },
    ])}

    ${renderInfobox({
      type: 'blue', icon: 'fas fa-lightbulb', title: 'Mendelejews Vorhersage — Wissenschaftliche Methode in Perfektion',
      body: `Mendelejews Vorhersage für Eka-Silicium (1871) vs. Germanium (entdeckt 1886):<br><br>
             <table style="width:100%; border-collapse:collapse; font-size:0.9rem;">
               <tr style="background:rgba(255,255,255,0.1);">
                 <th style="padding:6px; text-align:left;">Eigenschaft</th>
                 <th style="padding:6px; text-align:left;">Mendelejews Vorhersage</th>
                 <th style="padding:6px; text-align:left;">Tatsächlich (Ge)</th>
               </tr>
               <tr><td style="padding:6px;">Atommasse</td><td>72</td><td>72,63</td></tr>
               <tr><td style="padding:6px;">Dichte</td><td>5,5 g/cm³</td><td>5,35 g/cm³</td></tr>
               <tr><td style="padding:6px;">Färbung</td><td>grau</td><td>grausilbrig</td></tr>
               <tr><td style="padding:6px;">Oxidform</td><td>EkaSiO₂, Dichte 4,7</td><td>GeO₂, Dichte 4,7</td></tr>
               <tr><td style="padding:6px;">Chlorid</td><td>EkaSiCl₄, Kp < 100°C</td><td>GeCl₄, Kp = 83°C</td></tr>
             </table><br>
             Diese Übereinstimmung überzeugte die gesamte chemische Gemeinschaft.`,
    })}
  `; }

  // ══════════════════════════════════════════════════════════
  // 3.2.2 — Ordnungsprinzip im Periodensystem
  // ══════════════════════════════════════════════════════════
  _ordnung() { return `
    ${renderSubhead('3.2.2 — Ordnungsprinzip im Periodensystem')}

    <h3 class="lz-h3">Aufbau des modernen PSE</h3>
    <p class="lz-prose">
      Das moderne PSE ordnet alle bekannten Elemente nach aufsteigender
      <strong>Ordnungszahl Z</strong> (Kernladungszahl = Protonenzahl).
      Die Anordnung in Perioden und Gruppen spiegelt die
      Elektronenkonfiguration und damit die periodisch wiederkehrenden
      Eigenschaften wider.
    </p>

    ${renderTable({
      headers: ['Begriff', 'Definition', 'Anzahl', 'Elektronenkonfiguration'],
      rows: [
        ['Periode',      'Waagrechte Zeile; alle Elemente einer Periode haben dieselbe Anzahl besetzter Elektronenschalen', '7 Perioden', 'Perioden-Nr. = höchste Hauptquantenzahl n der Valenzelektronen'],
        ['Gruppe (HG)',  'Senkrechte Spalte; Elemente einer Gruppe haben ähnliche chem. Eigenschaften', '18 Gruppen (IUPAC-Nummerierung 1–18)', 'Gleiches äußeres Elektronenkonfigurationsmuster'],
        ['Hauptgruppen', 'Gruppen 1, 2 (s-Block) und 13–18 (p-Block)', '8 Hauptgruppen', 'Valenzelektronen im s- oder p-Orbital der äußersten Schale'],
        ['Nebengruppen', 'Gruppen 3–12 (d-Block)', '10 Nebengruppen', 'Valenzelektronen füllen das d-Orbital'],
        ['Lanthanoide',  'Z = 57–71; separater Block unter PSE', '15 Elemente', '4f-Orbitale werden gefüllt'],
        ['Actinoide',    'Z = 89–103; separater Block unter PSE', '15 Elemente', '5f-Orbitale werden gefüllt'],
      ],
      highlight: [0, 1],
    })}

    <h3 class="lz-h3" style="margin-top:1.75rem;">Die Blöcke des PSE</h3>

    ${renderMerkboxGrid([
      {
        icon: 'fas fa-square',
        title: 's-Block (Gruppen 1–2)',
        text: `H, He, Alkalimetalle (Li–Fr), Erdalkalimetalle (Be–Ra).
               Valenzelektronen im s-Orbital.
               Gruppe 1: ns¹ → leicht Elektron abgebbar (Reduktionsmittel).
               Gruppe 2: ns² → 2 Elektronen abgebbar.
               Reaktiv, weiche Metalle (außer H und He).`,
      },
      {
        icon: 'fas fa-th',
        title: 'd-Block (Gruppen 3–12)',
        text: `Übergangsmetalle: Ti, V, Cr, Mn, Fe, Co, Ni, Cu, Zn, Ag, Au, Pt …
               d-Orbitale werden gefüllt ((n−1)d, ns).
               Mehrere Oxidationsstufen möglich (variable Valenz).
               Farbige Ionen (d-d-Übergänge). Katalysatoren.
               Magnetismus: Fe, Co, Ni ferromagnetisch.`,
      },
      {
        icon: 'fas fa-border-style',
        title: 'p-Block (Gruppen 13–18)',
        text: `Bor-Gruppe bis Edelgase (B, C, N, O, F, Ne, Al, Si, P, S, Cl, Ar …).
               np-Orbitale werden gefüllt.
               Enthält Metalle, Halbmetalle (Metalloide: B, Si, Ge, As, Sb, Te)
               und Nichtmetalle.
               Gruppe 17 (Halogene): ns²np⁵ → sehr reaktiv.
               Gruppe 18 (Edelgase): ns²np⁶ → extrem unreaktiv.`,
      },
      {
        icon: 'fas fa-ellipsis-h',
        title: 'f-Block (Lanthanoide + Actinoide)',
        text: `4f (Lanthanoide, Z=57–71) und 5f (Actinoide, Z=89–103).
               Sehr ähnliche Eigenschaften innerhalb jeder Reihe
               (f-Orbitale tief im Atom; kaum Einfluss auf Chemie).
               Actinoide alle radioaktiv; ab Curium nur künstlich.
               Lanthanoide: seltene Erden; wichtig für Magnete, Leuchtmittel, Laser.`,
      },
    ])}

    <h3 class="lz-h3" style="margin-top:1.75rem;">Hauptgruppen — Überblick</h3>

    ${renderTable({
      headers: ['Gruppe', 'Name', 'Valenzconf.', 'Typische Elemente', 'Chemisches Verhalten'],
      rows: [
        ['1 (IA)',  'Alkalimetalle',     'ns¹',         'Li, Na, K, Rb, Cs, Fr',  'Sehr reaktive Metalle; reagieren heftig mit Wasser → H₂; Oxide basisch'],
        ['2 (IIA)', 'Erdalkalimetalle',  'ns²',         'Be, Mg, Ca, Sr, Ba, Ra', 'Reaktive Metalle; weniger als Alkali; Ca wichtig (Knochen, CaCO₃)'],
        ['13',      'Borgruppe',         'ns²np¹',      'B, Al, Ga, In, Tl',      'B: Halbmetall, Lewissäure; Al: wichtigstes Leichtmetall'],
        ['14',      'Kohlenstoffgruppe', 'ns²np²',      'C, Si, Ge, Sn, Pb',      'C: organische Chemie; Si: Halbleiter; Sn/Pb: klassische Metalle'],
        ['15',      'Stickstoffgruppe',  'ns²np³',      'N, P, As, Sb, Bi',       'N₂ sehr stabil (Dreifachbindung); P: Grundlage der DNA; As: giftig'],
        ['16',      'Chalkogene',        'ns²np⁴',      'O, S, Se, Te, Po',       'O₂ wichtigstes Oxidationsmittel; S: S₈, viele Verbindungen (H₂SO₄)'],
        ['17',      'Halogene',          'ns²np⁵',      'F, Cl, Br, I, At',       'Stärkste Oxidationsmittel; F₂ reaktivstes Element; X₂ farbig'],
        ['18',      'Edelgase',          'ns²np⁶',      'He, Ne, Ar, Kr, Xe, Rn', 'Volle Valenzschale → kaum reaktiv; XeF₂/XeF₄ existieren'],
      ],
      highlight: [0, 6, 7],
    })}

    ${renderInfobox({
      type: 'warning', icon: 'fas fa-exclamation-circle', title: 'Anomalien — wenn die Reihenfolge nicht stimmt',
      body: `Einige Elementpaare sind in der Atommassen-Reihenfolge umgekehrt zur Z-Reihenfolge,
             was Mendelejews System störte — aber mit der Ordnungszahl korrekt ist:<br><br>
             <strong>Ar (Aᵣ=39,95) steht vor K (Aᵣ=39,10)</strong> — aber Ar hat Z=18, K hat Z=19 ✓<br>
             <strong>Co (Aᵣ=58,93) steht vor Ni (Aᵣ=58,69)</strong> — aber Co hat Z=27, Ni hat Z=28 ✓<br>
             <strong>Te (Aᵣ=127,60) steht vor I (Aᵣ=126,90)</strong> — aber Te hat Z=52, I hat Z=53 ✓<br><br>
             Moseley löste dieses Rätsel 1913 durch die Bestimmung der Ordnungszahl.`,
    })}
  `; }

  // ══════════════════════════════════════════════════════════
  // 3.2.3 — Periodizität der Eigenschaften
  // ══════════════════════════════════════════════════════════
  _periodizitaet() { return `
    ${renderSubhead('3.2.3 — Periodizität der Eigenschaften')}

    <h3 class="lz-h3">Warum sind Eigenschaften periodisch?</h3>
    <p class="lz-prose">
      Physikalische und chemische Eigenschaften der Elemente wiederholen sich
      periodisch, weil die <strong>Valenzschalenkonfiguration</strong> periodisch
      wiederkehrt. Elemente in einer Gruppe haben dieselbe Anzahl und Art
      von Valenzelektronen → ähnliche Chemie.
      Mehrere fundamentale Eigenschaften zeigen klare Trends:
    </p>

    <!-- Atomradius -->
    <h3 class="lz-h3">1. Atomradius</h3>
    <p class="lz-prose">
      Der Atomradius ist kein klar definierter Wert — er hängt davon ab, wie man ihn misst
      (kovalenter Radius, Van-der-Waals-Radius, metallischer Radius, ionischer Radius).
      Die Trends sind jedoch eindeutig:
    </p>

    ${renderTable({
      headers: ['Trend', 'Richtung im PSE', 'Ursache', 'Beispiel'],
      rows: [
        ['Innerhalb einer Periode →', 'Atomradius nimmt ab (von links nach rechts)',
         'Z nimmt zu → stärkere Kernladung zieht Elektronen näher → gleiche Schale, aber stärker gebunden',
         'Li: 152 pm → Be: 112 pm → B: 87 pm → C: 77 pm → N: 75 pm → O: 73 pm → F: 72 pm'],
        ['Innerhalb einer Gruppe ↓', 'Atomradius nimmt zu (von oben nach unten)',
         'Neue Schale wird gefüllt → äußere Elektronen weiter vom Kern entfernt; Abschirmungseffekt',
         'F: 72 pm → Cl: 99 pm → Br: 114 pm → I: 133 pm'],
        ['Ionenradius Kationen', 'Kleiner als Atomradius',
         'Elektronen abgegeben → verbleibende Elektronen stärker vom Kern angezogen',
         'Na: 186 pm → Na⁺: 102 pm · Fe: 126 pm → Fe²⁺: 78 pm, Fe³⁺: 65 pm'],
        ['Ionenradius Anionen', 'Größer als Atomradius',
         'Elektronen aufgenommen → erhöhte Abstoßung → Elektronen weichen aus',
         'Cl: 99 pm → Cl⁻: 181 pm · O: 73 pm → O²⁻: 140 pm'],
      ],
      highlight: [0, 1],
    })}

    <!-- Ionisierungsenergie -->
    <h3 class="lz-h3" style="margin-top:1.75rem;">2. Ionisierungsenergie (IE)</h3>
    <p class="lz-prose">
      Die <strong>erste Ionisierungsenergie IE₁</strong> ist die Energie,
      die benötigt wird, um ein Elektron aus dem gasförmigen Atom im Grundzustand
      zu entfernen: X(g) → X⁺(g) + e⁻.
    </p>

    ${renderTable({
      headers: ['Trend', 'Richtung', 'Ursache', 'Ausnahmen / Besonderheiten'],
      rows: [
        ['Innerhalb Periode →', 'IE₁ nimmt generell zu',
         'Zunehmende Kernladung Z; gleiche Schale → Elektronen fester gebunden',
         'Be > B: 2s² (volle Unterschale) > 2p¹; N > O: halbvolle 2p³ besonders stabil (Hund-Regel)'],
        ['Innerhalb Gruppe ↓', 'IE₁ nimmt ab',
         'Zunehmender Atomradius → äußere Elektronen weiter entfernt und besser abgeschirmt',
         'He hat höchste IE₁ (2372 kJ/mol); Cs hat niedrigste der Alkalimetalle (376 kJ/mol)'],
        ['Successive IE', 'IE₁ < IE₂ < IE₃ < …; großer Sprung nach Edelgaskonfig.',
         'Jedes weitere Elektron von schon positivem Ion; nach Valenzschale → nächste Schale (viel höher)',
         'Na: IE₁=496, IE₂=4562 kJ/mol (riesiger Sprung nach 1 Valenz-e⁻)'],
      ],
    })}

    ${renderTable({
      headers: ['Element', 'Z', 'IE₁ [kJ/mol]', 'Besonderheit'],
      rows: [
        ['H',   '1',  '1312', '—'],
        ['He',  '2',  '2372', 'Höchste IE₁ aller Elemente'],
        ['Li',  '3',  '520',  'Alkalimetall; 1 leicht abgebbares Elektron'],
        ['Be',  '4',  '900',  'Be > B: 2s² stabil'],
        ['B',   '5',  '801',  'Einzel-2p¹ leichter zu entfernen als volles 2s²'],
        ['C',   '6',  '1086', '—'],
        ['N',   '7',  '1402', 'Halbvolles 2p³ besonders stabil → N > O'],
        ['O',   '8',  '1314', 'Gepaarte 2p-Elektronen abstoßen sich → leichter zu entfernen'],
        ['F',   '9',  '1681', '—'],
        ['Ne',  '10', '2081', 'Edelgas; sehr hoch'],
        ['Na',  '11', '496',  'Alkalimetall'],
        ['Mg',  '12', '738',  '—'],
        ['Al',  '13', '577',  'Al < Mg: 3p¹ leichter als volles 3s²'],
        ['Cl',  '17', '1251', 'Halogen'],
        ['Ar',  '18', '1521', 'Edelgas'],
        ['K',   '19', '419',  'Niedrigste IE₁ der ersten vier Perioden'],
        ['Cs',  '55', '376',  'Niedrigste IE₁ der Alkalimetalle'],
        ['Fr',  '87', '~380', 'Radioaktiv; niedrigste IE₁ aller Elemente (geschätzt)'],
      ],
      highlight: [1, 6],
    })}

    <!-- Elektronegativität -->
    <h3 class="lz-h3" style="margin-top:1.75rem;">3. Elektronegativität (EN)</h3>
    <p class="lz-prose">
      Die <strong>Elektronegativität (EN)</strong> ist ein Maß für die Fähigkeit
      eines Atoms in einer chemischen Bindung, die Bindungselektronen
      zu sich zu ziehen. Sie ist kein messbares Einzelatom-Merkmal,
      sondern eine aus Bindungsdaten abgeleitete Größe.
    </p>

    ${renderMerkboxGrid([
      {
        icon: 'fas fa-ruler',
        title: 'Pauling-Skala (1932)',
        text: `Häufigste Skala. Basiert auf Bindungsenergien:
               ΔEN² ∝ D(A–B) − ½[D(A–A) + D(B–B)]
               F hat den höchsten Wert: EN(F) = 3,98.
               O: 3,44 · N: 3,04 · Cl: 3,16 · H: 2,20.
               Cs hat den niedrigsten Wert: EN(Cs) = 0,79.`,
      },
      {
        icon: 'fas fa-calculator',
        title: 'Mulliken-Skala (1934)',
        text: `Basiert auf IE und Elektronenaffinität EA:
               EN_M = (IE₁ + EA) / 2
               Physikalisch begründet, aber weniger verbreitet.
               Zeigt dieselben Trends wie Pauling.`,
      },
      {
        icon: 'fas fa-chart-bar',
        title: 'Allred-Rochow-Skala (1958)',
        text: `Basiert auf effektiver Kernladung und Atomradius:
               EN = 0,359 · Z_eff / r² + 0,744
               Nützlich, wenn strukturelle Daten bekannt sind.
               Zeigt dieselben Trends.`,
      },
    ])}

    ${renderTable({
      headers: ['Trend', 'Richtung im PSE', 'Ursache'],
      rows: [
        ['Innerhalb Periode →', 'EN nimmt zu', 'Zunehmende Kernladung Z bei gleichem n; stärkere Anziehung auf Bindungselektronen'],
        ['Innerhalb Gruppe ↓', 'EN nimmt ab', 'Zunehmender Atomradius; äußere Elektronen weiter entfernt; stärkere Abschirmung'],
        ['Maximum', 'F (3,98)', 'Kleinster Atomradius + höchste effektive Kernladung im p-Block'],
        ['Minimum', 'Fr (0,70)', 'Größter Atomradius + schwächste effektive Kernladung durch maximale Abschirmung'],
      ],
      highlight: [2, 3],
    })}

    <!-- Elektronenaffinität -->
    <h3 class="lz-h3" style="margin-top:1.75rem;">4. Elektronenaffinität (EA)</h3>
    <p class="lz-prose">
      Die <strong>Elektronenaffinität EA</strong> ist die Energie, die bei der
      Aufnahme eines Elektrons durch ein neutrales, gasförmiges Atom
      freigesetzt (oder zugeführt) wird: X(g) + e⁻ → X⁻(g).
      Positives EA-Vorzeichen = Energie wird freigesetzt = exotherm.
    </p>

    ${renderTable({
      headers: ['Element', 'EA [kJ/mol]', 'Bemerkung'],
      rows: [
        ['Cl',   '349',  'Höchste EA der Halogene — günstigere Elektronendichte als F'],
        ['F',    '328',  'Trotz höchster EN kleinere EA als Cl (kleines Orbital → Abstoßung beim 2. e⁻)'],
        ['O',    '141',  'Erste EA; zweite EA(O²⁻) stark negativ (Abstoßung!)'],
        ['S',    '200',  '—'],
        ['H',    '73',   '—'],
        ['C',    '122',  '—'],
        ['N',    '−7',  'Negativ! Halbvolle 2p³ besonders stabil → kein Gewinn durch weiteres e⁻'],
        ['Be',   '−48',  'Negativ! Volle 2s² → kein Platz für weiteres e⁻ ohne Schalensprung'],
        ['Ne',   '−29',  'Negativ; Edelgas — volle Schale'],
        ['Mg',   '−21',  'Negativ; volle 3s²'],
      ],
      highlight: [0, 6],
    })}

    <!-- Metallcharakter und weitere Eigenschaften -->
    <h3 class="lz-h3" style="margin-top:1.75rem;">5. Metallcharakter und weitere periodische Eigenschaften</h3>

    ${renderTable({
      headers: ['Eigenschaft', 'Trend in Periode →', 'Trend in Gruppe ↓', 'Zusammenhang mit Elektronenkonfiguration'],
      rows: [
        ['Metallcharakter', 'Nimmt ab (Metall → Halbmetall → Nichtmetall)', 'Nimmt zu', 'Geringe IE + niedrige EN → Metall; umgekehrt → Nichtmetall'],
        ['Ionisierungsenergie', 'Nimmt zu (mit Ausnahmen)', 'Nimmt ab', 'Kernladung, Abschirmung, Orbitalform'],
        ['Elektronegativität', 'Nimmt zu', 'Nimmt ab', 'Effektive Kernladung und Atomradius'],
        ['Atomradius', 'Nimmt ab', 'Nimmt zu', 'Kernladung (Periode) vs. neue Schale (Gruppe)'],
        ['Elektronegatv. Differenz ΔEN', '—', '—', 'ΔEN < 0,4: unpolare kovalente Bindung; 0,4–1,7: polar kovalent; > 1,7: ionisch (als Faustregel)'],
        ['Oxidationszahlen', 'Höchste OZ = Gruppe-Nr.', 'Niedrigste OZ = Gruppe-Nr. − 8 (ab Gr. 15)', 'Valenzelectronen können alle abgegeben oder aufgenommen werden'],
        ['Siedepunkt Metalle', 'Peak bei d-Metallen (W: 5555°C)', 'Nimmt ab bei HG', 'Metallbindung durch d-Elektronen besonders stark'],
      ],
      highlight: [0, 4],
    })}

    ${renderAccordion([
      {
        title: 'Abschirmung und effektive Kernladung — Slater-Regeln',
        content: `<p class="lz-prose">Die <strong>effektive Kernladung</strong> Z_eff ist die
                  Kernladung, die ein Valenzelektron nach Abzug der Abschirmung durch
                  innere Elektronen tatsächlich „spürt":</p>
                  <p class="lz-prose"><strong>Z_eff = Z − σ</strong> (σ = Abschirmkonstante)</p>
                  <p class="lz-prose"><strong>Slater-Regeln (vereinfacht):</strong><br>
                  ① Elektronen in gleicher Schale: σ = 0,35 pro Elektron<br>
                  ② Elektronen in n−1-Schale: σ = 0,85 (für s,p-Elektronen in Hauptschale) oder 1,00 (für d/f-Elektronen)<br>
                  ③ Elektronen in n−2 oder tiefer: σ = 1,00<br><br>
                  <strong>Beispiel Na (Z=11, Konfig. [Ne]3s¹):</strong><br>
                  σ = 8·0,85 + 2·1,00 = 6,80 + 2,00 = 8,80<br>
                  Z_eff = 11 − 8,80 = <strong>2,20</strong><br><br>
                  <strong>Beispiel Cl (Z=17, Konfig. [Ne]3s²3p⁵):</strong><br>
                  σ = 6·0,35 + 8·0,85 + 2·1,00 = 2,10 + 6,80 + 2,00 = 10,90<br>
                  Z_eff = 17 − 10,90 = <strong>6,10</strong><br>
                  → Cl „spürt" fast dreimal mehr Kernladung als Na → stärker gebundene Elektronen</p>`,
      },
      {
        title: 'Diagonalbeziehungen im PSE',
        content: `<p class="lz-prose">Diagonal benachbarte Elemente (1 Periode runter, 1 Gruppe rechts)
                  haben ähnliche Eigenschaften — weil sich Ladungsdichte und Elektronegativität
                  ähneln:</p>
                  ${renderTable({
                    headers: ['Paar', 'Gemeinsame Eigenschaften'],
                    rows: [
                      ['Li / Mg', 'Beide bilden normale Oxide (Li₂O, MgO) statt Peroxide; ähnliche Reaktivität mit N₂; LiI ähnlich kovalent wie MgI₂'],
                      ['Be / Al', 'Beide amphoter (Oxide lösen sich in Säure und Lauge); Halogenide kovalent und Lewis-Säuren; Berylliumaluminat: Chrysoberill'],
                      ['B / Si',  'Beide Halbmetalle; saure Oxide (B₂O₃, SiO₂); Halogenide hydrolysieren leicht; Halbleiterverhalten'],
                    ],
                  })}`,
      },
    ])}

    ${renderInfobox({
      type: 'success', icon: 'fas fa-graduation-cap', title: 'Zusammenfassung periodische Eigenschaften',
      body: `<strong>In einer Periode (→ steigendes Z):</strong>
             Atomradius ↓ · IE₁ ↑ (mit Ausnahmen) · EN ↑ · Metallcharakter ↓<br><br>
             <strong>In einer Gruppe (↓ steigendes n):</strong>
             Atomradius ↑ · IE₁ ↓ · EN ↓ · Metallcharakter ↑<br><br>
             <strong>Ausnahmen IE₁:</strong><br>
             Be > B (volles 2s² > einzelnes 2p¹)<br>
             N > O (halbvolles 2p³ > gepaarte 2p⁴)<br>
             Analoge Ausnahmen in allen Perioden bei gleichen Konfigurationen<br><br>
             <strong>Ausnahmen EA:</strong><br>
             Cl > F (F-Orbital zu klein → Abstoßung)<br>
             N < 0 (halbvolles 2p³ → keine EA)<br>
             Be, Mg, Ne, Ar < 0 (volle s²- bzw. p⁶-Unterschale)`,
    })}
  `; }

  init() {
    i18n.init();
    initScrollReveal();
    initInteractive(document);
    initTabs();
  }
}