// pages/projekte/lernzettel/faecher/chemie/themen/4/4-2.js
// Kapitel 4.2 — Besondere Wechselwirkungen zwischen Molekülen
// 4.2.1  Van-der-Waals-Kräfte
// 4.2.2  Wasserstoffbrückenbindungen

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
  { key: '421', icon: 'fas fa-wind',     label: '4.2.1 Van-der-Waals-Kräfte'       },
  { key: '422', icon: 'fas fa-link',     label: '4.2.2 Wasserstoffbrückenbindungen' },
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
  return `<nav class="wim-tabs" role="tablist" id="tabs42">${nav}</nav>${panels}`;
}

function initTabs() {
  const nav = document.getElementById('tabs42');
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

export default class Chemie_4_2 {
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
          <i class="fas fa-chevron-right"></i><span>4.2</span>
        </div>
        <h1 class="lz-sub-title">Besondere Wechselwirkungen<br><em>zwischen Molekülen</em></h1>
        <p class="lz-sub-desc">
          Van-der-Waals-Kräfte · London-Dispersion · Dipol-Dipol ·
          Wasserstoffbrückenbindungen · Anomalie des Wassers
        </p>
        ${renderTags(['Kap. 4.2', 'Zwischenmolekulare Kräfte', 'Van-der-Waals', 'H-Brücken', 'LK Chemie BW'])}
      </div>
    </section>

    <section class="lz-content-section">
      <div class="lz-section-wrap">
        ${buildWimHTML(k => k === '421' ? this._vdw() : this._hbruecken())}
      </div>
    </section>

    <section class="lz-content-section" style="padding:1.5rem 0 3rem;">
      <div class="lz-section-wrap">
        ${renderPageNav({
          prev: { label: '4.1 Hauptbindungsarten',      link: `${BASE}/themen/4/4-1` },
          next: { label: '5.1 Chemische Thermodynamik', link: `${BASE}/themen/5/5-1` },
        }, BASE)}
      </div>
    </section>
    ${footerHTML(this.router)}
  `; }

  // ══════════════════════════════════════════════════════════
  // 4.2.1 — Van-der-Waals-Kräfte
  // ══════════════════════════════════════════════════════════
  _vdw() { return `
    ${renderSubhead('4.2.1 — Van-der-Waals-Kräfte')}

    <h2 class="lz-h2">Zwischenmolekulare Wechselwirkungen</h2>
    <p class="lz-prose">
      Auch zwischen neutralen, unpolaren Molekülen wirken anziehende Kräfte —
      sonst könnten Gase wie Ar, N₂ oder CH₄ nicht verflüssigt werden.
      Diese schwachen, nicht-kovalenten Wechselwirkungen werden
      unter dem Begriff <strong>Van-der-Waals-Kräfte</strong> zusammengefasst
      (nach Johannes Diderik van der Waals, 1873).
      Sie sind 10–1000× schwächer als kovalente Bindungen,
      aber für viele makroskopische Eigenschaften entscheidend.
    </p>

    ${renderTable({
      headers: ['Kraft', 'Auch genannt', 'Ursache', 'Stärke', 'Abstandsabhängigkeit', 'Beispiele'],
      rows: [
        ['Keesom-Wechselwirkung',
         'Dipol-Dipol-Kraft',
         'Anziehung zwischen permanenten Dipolen (ausgerichtete Orientierung bevorzugt)',
         '5–25 kJ/mol',
         '∝ r⁻⁶ (bei thermischer Bewegung)',
         'HCl–HCl, SO₂, Aceton, Formaldehyd'],
        ['Debye-Wechselwirkung',
         'Dipol-induzierter Dipol',
         'Permanenter Dipol polarisiert benachbartes Molekül → induzierten Dipol',
         '2–10 kJ/mol',
         '∝ r⁻⁶',
         'HCl–Ar, H₂O–CO₂, polare + unpolare Moleküle'],
        ['London-Dispersionskraft',
         'London-Kraft, fluktuierende Dipole',
         'Momentane Dipole durch Elektronenschwankungen polarisieren Nachbarn → synchronisierte Fluktuationen',
         '0,1–40 kJ/mol (variiert stark)',
         '∝ r⁻⁶',
         'Alle Moleküle (auch Edelgase, Alkane, I₂)'],
      ],
      highlight: [2],
    })}

    <h3 class="lz-h3" style="margin-top:1.75rem;">London-Dispersionskräfte im Detail</h3>
    <p class="lz-prose">
      Die <strong>London-Dispersionskraft</strong> (Fritz London, 1930)
      ist die einzige intermolekulare Kraft, die bei allen Molekülen auftritt —
      also auch bei unpolaren. Ohne sie wäre flüssiges Argon oder festes I₂ undenkbar.
    </p>

    ${renderMerkboxGrid([
      {
        icon: 'fas fa-arrows-alt-h',
        title: 'Polarisierbarkeit α',
        text: `Je größer ein Molekül, desto leichter können die Elektronen
               aus ihrer Gleichgewichtslage verschoben werden →
               größere momentane Dipole → stärkere London-Kraft.
               Polarisierbarkeit α ∝ Molekülgröße, Molmasse, Elektronenzahl.
               Einheit: C²·m²/J oder Å³.`,
      },
      {
        icon: 'fas fa-ruler',
        title: 'Stärke der London-Kraft',
        text: `E_London ∝ −(α₁·α₂) / r⁶
               Nimmt mit der 6. Potenz des Abstands ab → sehr kurzreichweitig.
               Für große, polarisierbare Moleküle (I₂, Hexan) kann die
               London-Kraft beträchtlich werden (40 kJ/mol).
               Für kleine Edelgase (He): sehr schwach (~0,08 kJ/mol).`,
      },
      {
        icon: 'fas fa-chart-line',
        title: 'Siedepunkt-Trend bei Edelgasen und Alkanen',
        text: `He: −269°C · Ne: −246°C · Ar: −186°C · Kr: −153°C · Xe: −108°C
               Methan: −161°C · Ethan: −89°C · Propan: −42°C · Butan: −1°C · Pentan: 36°C
               Ausschließlich London-Kräfte — Trend folgt Molmasse/Polarisierbarkeit.`,
      },
    ])}

    ${renderTable({
      headers: ['Stoff', 'M [g/mol]', 'Siedepunkt [°C]', 'Dominierende zwischenmol. Kraft', 'Erklärung'],
      rows: [
        ['He',      '4',    '−269', 'London (sehr schwach)', 'Kleinste Polarisierbarkeit überhaupt; kfz bei T nahe 0 K'],
        ['Ne',      '20',   '−246', 'London',                'Wenig Elektronen → geringe Polarisierbarkeit'],
        ['Ar',      '40',   '−186', 'London',                'Mehr Elektronen → stärkere London-Kraft'],
        ['I₂',      '254',  '+184', 'London (stark)',        'Sehr viele Elektronen, hohe Polarisierbarkeit → fester Feststoff!'],
        ['CH₄',     '16',   '−161', 'London',                'Unpolar, tetrasym. → nur London'],
        ['n-Pentan','72',   '+36',  'London (mittel-stark)', 'Lineare Kette → große Kontaktfläche → stärkere London-Kraft als Neopentan'],
        ['Neopentan','72',  '+9',   'London (schwächer)',    'Kugelförmig → kleinere Kontaktfläche trotz gleicher M → niedrigerer Smp.'],
        ['HCl',     '36',   '−85',  'Dipol-Dipol + London', 'ΔEN(H–Cl)=1,0 → permanenter Dipol; zusätzlich London'],
        ['HF',      '20',   '+20',  'H-Brücken (dominant)', 'Trotz kleiner M hoher Siedepunkt: starke H-Brücken'],
        ['H₂O',     '18',   '+100', 'H-Brücken (sehr stark)','Höchster Smp. der H₂X-Reihe: 4 H-Brücken pro Molekül möglich'],
        ['Aceton',  '58',   '+56',  'Dipol-Dipol (C=O)',     'Starke Dipol-Dipol durch C=O-Gruppe; kein H an O → keine H-Brücken'],
        ['Ethanol',  '46',  '+78',  'H-Brücken + Dipol',     'OH-Gruppe → H-Brücken; höherer Smp. als Diethylether (M=74, 35°C)'],
      ],
      highlight: [6, 9, 11],
    })}

    ${renderInfobox({
      type: 'blue', icon: 'fas fa-info-circle', title: 'Molekülgeometrie beeinflusst London-Kräfte — Verzweigung',
      body: `Zwei Isomere mit gleicher Molmasse haben oft verschiedene Siedepunkte,
             weil ihre Geometrie die Kontaktfläche und damit die London-Kraft bestimmt:<br><br>
             <strong>n-Pentan (C₅H₁₂):</strong> Sdp. 36°C — gestreckte Kette, große Kontaktfläche<br>
             <strong>Isopenten (Isopentyl):</strong> Sdp. 28°C — leicht verzweigt<br>
             <strong>Neopentan (2,2-Dimethylpropan):</strong> Sdp. 9°C — kugelförmig, kleine Fläche<br><br>
             Gleiches Prinzip erklärt, warum Geckos an Wänden haften:
             Millionen haarförmiger Strukturen (Setae) maximieren London-Kontaktfläche
             mit der Wand (~10 N Haftkraft bei 200 cm²).`,
    })}

    <h3 class="lz-h3" style="margin-top:1.75rem;">Van-der-Waals-Gleichung — reale Gase</h3>

    ${renderFormulaBox({
      label:   'Van-der-Waals-Gleichung für reale Gase',
      formula: '(p + a · n²/V²) · (V − n·b) = n·R·T',
      desc:    'a [L²·bar/mol²]: korrigiert inneren Druck durch zwischenmol. Anziehung (größer = stärkere VdW-Kräfte) · b [L/mol]: korrigiert Eigenvolumen der Moleküle · Größere, polarisierbarere Moleküle → größeres a',
    })}

    ${renderTable({
      headers: ['Gas', 'a [L²·bar/mol²]', 'b [L/mol]', 'Sdp. [°C]', 'Kommentar'],
      rows: [
        ['He',   '0,034', '0,0238', '−269', 'Kleinstes a: fast ideal'],
        ['H₂',   '0,244', '0,0266', '−253', '—'],
        ['N₂',   '1,39',  '0,0391', '−196', 'Verflüssigung bei −196°C (Linde-Verfahren)'],
        ['CO₂',  '3,64',  '0,0427', '−78 (Sublimation)', 'Stark; kritischer Punkt 31°C, 74 bar'],
        ['NH₃',  '4,17',  '0,0371', '−33',  'H-Brücken erhöhen a'],
        ['H₂O',  '5,54',  '0,0305', '+100', 'Starke H-Brücken → sehr großes a'],
        ['CCl₄', '20,4',  '0,1383', '+77',  'Großes, polarisierbares Molekül → hohe London-Kraft'],
        ['Xe',   '4,19',  '0,0516', '−108', 'Schweres Edelgas; große Polarisierbarkeit'],
      ],
      highlight: [0, 5],
    })}
  `; }

  // ══════════════════════════════════════════════════════════
  // 4.2.2 — Wasserstoffbrückenbindungen
  // ══════════════════════════════════════════════════════════
  _hbruecken() { return `
    ${renderSubhead('4.2.2 — Wasserstoffbrückenbindungen')}

    <h3 class="lz-h3">Was ist eine Wasserstoffbrücke?</h3>
    <p class="lz-prose">
      Eine <strong>Wasserstoffbrückenbindung (H-Brücke)</strong> ist eine
      besonders starke zwischenmolekulare Wechselwirkung, die entsteht, wenn
      ein Wasserstoffatom, das kovalent an ein stark elektronegatives Atom
      (F, O oder N) gebunden ist, mit dem freien Elektronenpaar eines weiteren
      elektronegativen Atoms interagiert.
    </p>

    ${renderFormulaBox({
      label:   'Schema einer Wasserstoffbrücke',
      formula: 'D–H ··· A',
      desc:    'D (Donor): elektronegatives Atom, das H kovalent gebunden hält (F, O, N) · H: das „Brücken-H" — trägt δ⁺ durch Bindung an D · A (Akzeptor): elektronegatives Atom mit freiem EP (F, O, N, seltener Cl, S) · Punktlinie: die H-Brücke selbst (schwache elektrostatische + partielle kovalente Wechselwirkung)',
    })}

    <h3 class="lz-h3" style="margin-top:1.5rem;">Bedingungen und Stärke</h3>

    ${renderMerkboxGrid([
      {
        icon: 'fas fa-check-circle',
        title: 'Donator-Bedingungen',
        text: `Das Atom D muss stark elektronegativ sein (F > O > N > Cl, S kaum).
               Es muss ein H-Atom kovalent tragen, das dadurch δ⁺ polarisiert ist.
               Wichtigste Donatorgruppen: O–H (Alkohole, Wasser, Carbonsäuren),
               N–H (Amine, Amide, DNA-Basen), F–H (HF).`,
      },
      {
        icon: 'fas fa-dot-circle',
        title: 'Akzeptor-Bedingungen',
        text: `Das Atom A muss freie Elektronenpaare haben und elektronegativ sein.
               F, O, N am häufigsten. Das δ⁺-Wasserstoffatom wird vom FEP angezogen.
               Ein Molekül kann gleichzeitig Donor und Akzeptor sein
               (z.B. H₂O: 2 Donoren, 2 Akzeptoren).`,
      },
      {
        icon: 'fas fa-ruler-combined',
        title: 'Geometrie der H-Brücke',
        text: `Der D–H···A-Winkel ist idealerweise 180° (linear).
               Abweichungen bis ~120° noch möglich (schwächere Brücke).
               H···A-Abstand typisch 150–220 pm (kürzer als Van-der-Waals, länger als kovalent).
               D–A-Abstand: ~250–310 pm.`,
      },
      {
        icon: 'fas fa-weight-hanging',
        title: 'Stärke der H-Brücke',
        text: `Stärker als Van-der-Waals (~10–40 kJ/mol), deutlich schwächer als kovalente Bindung.
               Reihenfolge: F–H···F > O–H···O > N–H···N > N–H···O > O–H···N.
               F–H···F: bis 160 kJ/mol (sehr stark; [FHF]⁻ als Sonderfall).
               O–H···O: 20–30 kJ/mol (Wasser, Alkohole).
               N–H···O: 10–20 kJ/mol (Amide, DNA-Basen).`,
      },
    ])}

    <h3 class="lz-h3" style="margin-top:1.75rem;">H-Brücken in der Reihe der Hydride</h3>
    <p class="lz-prose">
      Die Siedepunkte der Hydride der 6. Hauptgruppe (H₂O, H₂S, H₂Se, H₂Te)
      zeigen ein ungewöhnliches Muster: Normalerweise steigen Siedepunkte
      mit der Molmasse. H₂O hat aber einen viel höheren Siedepunkt als erwartet —
      ein klares Zeichen für starke H-Brücken:
    </p>

    ${renderTable({
      headers: ['Stoff', 'M [g/mol]', 'Sdp. [°C]', 'Smp. [°C]', 'H-Brücken?', 'Anomalie?'],
      rows: [
        ['H₂O',  '18',  '+100', '0',    'Ja (stark: O–H···O)', 'Stark — viel zu hoch ohne H-Brücken (erwartet: ca. −80°C)'],
        ['H₂S',  '34',  '−60',  '−82',  'Sehr schwach (S kaum)', 'Nein — folgt Erwartung'],
        ['H₂Se', '81',  '−41',  '−66',  'Keine', 'Nein'],
        ['H₂Te', '130', '−4',   '−49',  'Keine', 'Nein — aber Sdp. noch immer unter H₂O!'],
        ['NH₃',  '17',  '−33',  '−78',  'Ja (N–H···N)', 'Mäßig — 1 Donor, 1 Akzeptor pro NH₃; weniger als H₂O'],
        ['PH₃',  '34',  '−87',  '−134', 'Keine', 'Nein'],
        ['HF',   '20',  '+20',  '−83',  'Ja (sehr stark: F–H···F)', 'Stark — Sdp. viel höher als HCl (−85°C); Ketten-H-Brücken'],
        ['HCl',  '36',  '−85',  '−115', 'Sehr schwach', 'Nein'],
      ],
      highlight: [0, 6],
    })}

    <h3 class="lz-h3" style="margin-top:1.75rem;">Die Anomalien des Wassers</h3>
    <p class="lz-prose">
      Wasser ist die außergewöhnlichste Substanz auf der Erde —
      seine einzigartigen Eigenschaften verdankt es nahezu ausschließlich
      dem dichten Netzwerk aus Wasserstoffbrücken.
    </p>

    ${renderAccordion([
      {
        title: 'Dichteanomalie — Eis schwimmt auf Wasser',
        content: `<p class="lz-prose"><strong>Beobachtung:</strong>
                  Eis (0°C) hat eine Dichte von nur 0,917 g/cm³,
                  während flüssiges Wasser bei 0°C eine Dichte von 0,9998 g/cm³ hat.
                  Maximum der Dichte: bei +4°C (0,99997 g/cm³).</p>
                  <p class="lz-prose"><strong>Erklärung:</strong>
                  Im Eisgitter ist jedes H₂O-Molekül durch 4 H-Brücken tetraedrisch
                  koordiniert → offenes, hexagonales Gitter mit viel Leerraum.
                  Beim Schmelzen brechen einige H-Brücken → Moleküle können näher
                  rücken → Dichte steigt. Von 0–4°C überwiegt dieser Effekt;
                  über 4°C überwiegt die thermische Ausdehnung.</p>
                  <p class="lz-prose"><strong>Ökologische Bedeutung:</strong>
                  Eis schwimmt oben → isoliert den See → verhindert Tiefgefrieren →
                  aquatisches Leben überlebt den Winter. In den meisten Flüssigkeiten
                  sinkt das Festkörper zum Boden.`,
      },
      {
        title: 'Hohe spezifische Wärmekapazität',
        content: `<p class="lz-prose"><strong>c_p(H₂O) = 4,182 J/(g·K)</strong> —
                  die höchste aller gängigen Flüssigkeiten.</p>
                  <p class="lz-prose">Zum Erwärmen von 1 kg Wasser um 1°C
                  braucht man 4,182 kJ — für Eisen nur 0,45 kJ, für Ethanol nur 2,44 kJ.</p>
                  <p class="lz-prose"><strong>Ursache:</strong> Viel zugeführte Energie
                  wird zunächst zum Brechen von H-Brücken verbraucht (nicht zur Temperaturerhöhung).
                  <strong>Folgen:</strong> Meere und Seen als Wärmespeicher →
                  Klimaregulierung; Kühlmittel in Kühlkreisläufen und im menschlichen Körper
                  (Schweiß kühlt effizient).`,
      },
      {
        title: 'Hohe Verdampfungsenthalpie',
        content: `<p class="lz-prose"><strong>ΔH_vap(H₂O, 100°C) = 2260 J/g = 40,65 kJ/mol</strong></p>
                  <p class="lz-prose">Zum Vergleich: Ethanol 841 J/g, Aceton 524 J/g, Diethylether 352 J/g.
                  Die Verdampfung von 1 mL Wasser entzieht dem Körper ~2260 J → effektive Kühlung durch Schwitzen.</p>
                  <p class="lz-prose"><strong>Ursache:</strong> Alle (im Mittel 3,5)
                  H-Brücken pro Molekül müssen beim Übergang in die Gasphase gebrochen werden.</p>`,
      },
      {
        title: 'Hohe Oberflächenspannung',
        content: `<p class="lz-prose"><strong>γ(H₂O, 20°C) = 72,75 mN/m</strong> —
                  höchste aller häufigen Flüssigkeiten (außer Quecksilber: 465 mN/m).</p>
                  <p class="lz-prose"><strong>Ursache:</strong> Oberflächenmoleküle haben
                  weniger H-Brücken-Nachbarn als Innenmoleküle → Bestreben, Oberfläche
                  zu minimieren → Tropfenbildung, Tragen von Wasserläufern.</p>
                  <p class="lz-prose"><strong>Anwendungen:</strong>
                  Wasserläufer-Insekten · Kapillarwirkung in Pflanzen
                  (zusammen mit Adhäsion an Zellwänden) ·
                  Lungenflüssigkeit-Stabilisierung durch Surfactant.`,
      },
      {
        title: 'Universallösungsmittel — Hydratation und Dissoziation',
        content: `<p class="lz-prose">Wasser löst ionische Verbindungen (NaCl, KNO₃)
                  durch <strong>Hydratation</strong>: Die δ⁺-Seite (H) umgibt Anionen,
                  die δ⁻-Seite (O) umgibt Kationen. Hydratationsenthalpie kompensiert
                  die Gitterenergie.</p>
                  <p class="lz-prose">Wasser löst polare Moleküle durch H-Brücken
                  (Ethanol, Glucose, Aminosäuren). Unpolare Stoffe werden abgestoßen
                  (hydrophober Effekt — Grundlage der Membranstruktur!).</p>
                  <p class="lz-prose"><strong>Autoprotolyse:</strong>
                  H₂O + H₂O ⇌ H₃O⁺ + OH⁻ (K_W = 10⁻¹⁴ bei 25°C) → pH-Konzept.</p>`,
      },
    ])}

    <h3 class="lz-h3" style="margin-top:1.75rem;">H-Brücken in Biomolekülen</h3>

    ${renderTable({
      headers: ['Biomolekül', 'H-Brückentyp', 'Funktion', 'Besonderheit'],
      rows: [
        ['DNA-Doppelhelix',
         'N–H···N, N–H···O (Watson-Crick-Basenpaare)',
         'Zusammenhalt beider DNA-Stränge; Spezifität der Basenpaarung A–T, G–C',
         'A–T: 2 H-Brücken · G–C: 3 H-Brücken → G-C-reiche DNA stabiler (höhere Schmelztemperatur)'],
        ['Proteine (α-Helix)',
         'N–H···O=C (Peptidbindung, jede 4. AS)',
         'Stabilisierung der Helixstruktur; rechtsgängig',
         'Alle H-Brücken innerhalb derselben Polypeptidkette; parallel zur Helixachse'],
        ['Proteine (β-Faltblatt)',
         'N–H···O=C (zwischen benachbarten Strängen)',
         'Stabilisierung des Faltblatts; parallel oder antiparallel',
         'Mehrere Ketten lateral durch H-Brücken verbunden'],
        ['Cellulose',
         'O–H···O (zwischen Glucoseketten)',
         'Rigidität der Pflanzenzellwand; wasserunlöslichkeit trotz polarer OH-Gruppen',
         'Intra- und intermolekulare H-Brücken; Mikrofibrillenbündel (Holz: bis 200 MPa Zugfestigkeit)'],
        ['Enzyme–Substrat',
         'N–H···O, O–H···N, O–H···O',
         'Substrat-Erkennung und -Orientierung im aktiven Zentrum (Schlüssel-Schloss)',
         'Spezifische H-Brücken-Muster definieren Substratspezifität'],
      ],
      highlight: [0, 1],
    })}

    ${renderInfobox({
      type: 'success', icon: 'fas fa-graduation-cap', title: 'Zusammenfassung — Zwischenmolekulare Wechselwirkungen',
      body: `<strong>Van-der-Waals-Kräfte (Überblick):</strong><br>
             Keesom (Dipol–Dipol) · Debye (Dipol–induzierten Dipol) · London (fluktuierende Dipole)<br>
             Alle ∝ r⁻⁶ · London wirkt bei ALLEN Molekülen · Stärke ∝ Polarisierbarkeit (Molmasse, Form)<br><br>
             <strong>Wasserstoffbrücken:</strong><br>
             D–H···A: D und A müssen F, O oder N sein · Stärke 10–40 kJ/mol<br>
             Erklären Anomalien von H₂O und HF · Fundamental für Biochemie (DNA, Proteine, Cellulose)<br><br>
             <strong>Siedepunkt-Ranking bei gleicher Molmasse:</strong><br>
             H-Brücken > Dipol-Dipol > London (unpolar)<br>
             Verzweigtere Moleküle: niedrigerer Sdp. als linear (weniger London-Kontaktfläche)`,
    })}
  `; }

  init() {
    i18n.init();
    initScrollReveal();
    initInteractive(document);
    initTabs();
  }
}