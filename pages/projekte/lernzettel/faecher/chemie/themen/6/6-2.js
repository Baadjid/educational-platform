// pages/projekte/lernzettel/faecher/chemie/themen/6/6-2.js
// Kapitel 6.2 — Beeinflussung des chemischen Gleichgewichts
// 6.2.1  Einfluss der Temperatur und des Drucks
// 6.2.2  Einfluss weiterer Reaktionsbedingungen

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
  { key: '621', icon: 'fas fa-thermometer-half', label: '6.2.1 Temperatur & Druck'        },
  { key: '622', icon: 'fas fa-sliders-h',         label: '6.2.2 Weitere Bedingungen'       },
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
  return `<nav class="wim-tabs" role="tablist" id="tabs62">${nav}</nav>${panels}`;
}

function initTabs() {
  const nav = document.getElementById('tabs62');
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

export default class Chemie_6_2 {
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
          <i class="fas fa-chevron-right"></i><span>6.2</span>
        </div>
        <h1 class="lz-sub-title">Beeinflussung des<br><em>chemischen Gleichgewichts</em></h1>
        <p class="lz-sub-desc">
          Prinzip von Le Chatelier · Temperatur- und Druckeinfluss ·
          Konzentration · Katalysator · Lösungsmittel
        </p>
        ${renderTags(['Kap. 6.2', 'Le Chatelier', 'GG-Verschiebung', 'Temperatur', 'LK Chemie BW'])}
      </div>
    </section>

    <section class="lz-content-section">
      <div class="lz-section-wrap">
        ${buildWimHTML(k => k === '621' ? this._tundp() : this._weitere())}
      </div>
    </section>

    <section class="lz-content-section" style="padding:1.5rem 0 3rem;">
      <div class="lz-section-wrap">
        ${renderPageNav({
          prev: { label: '6.1 Das chemische Gleichgewicht',     link: `${BASE}/themen/6/6-1` },
          next: { label: '6.3 Anwendungen des MWG',            link: `${BASE}/themen/6/6-3` },
        }, BASE)}
      </div>
    </section>
    ${footerHTML(this.router)}
  `; }

  // ══════════════════════════════════════════════════════════
  // 6.2.1 — Einfluss der Temperatur und des Drucks
  // ══════════════════════════════════════════════════════════
  _tundp() { return `
    ${renderSubhead('6.2.1 — Einfluss der Temperatur und des Drucks')}

    <h2 class="lz-h2">Prinzip von Le Chatelier</h2>
    <p class="lz-prose">
      Das <strong>Prinzip von Le Chatelier</strong> (Henry Louis Le Chatelier, 1884)
      — auch <em>Prinzip des kleinsten Zwangs</em> genannt — ist eine qualitative
      Vorhersageregel für die Verschiebung eines chemischen Gleichgewichts
      bei Einwirkung einer äußeren Störung:
    </p>

    ${renderInfobox({
      type: 'blue', icon: 'fas fa-balance-scale', title: 'Prinzip von Le Chatelier — Formulierung',
      body: `„Wenn auf ein System im Gleichgewicht ein äußerer Zwang ausgeübt wird,
             verschiebt sich das Gleichgewicht in die Richtung,
             die diesen Zwang <strong>verkleinert</strong>."<br><br>
             Thermodynamische Grundlage: Das System minimiert seine freie Enthalpie.
             Bei Störung gilt momentan Q ≠ K → ΔG ≠ 0 → Reaktion läuft in die Richtung,
             die Q wieder zu K bringt.<br><br>
             <strong>Achtung:</strong> Le Chatelier ist eine Näherungsregel —
             sie gilt streng für ideale Systeme und gibt nur die Richtung, nicht das Ausmaß an.`,
    })}

    <!-- Temperatureinfluss -->
    <h3 class="lz-h3" style="margin-top:1.75rem;">Einfluss der Temperatur</h3>
    <p class="lz-prose">
      Temperaturänderungen sind die einzige Störung, die den Wert von
      <strong>K_c selbst</strong> ändert (nicht nur die GG-Lage).
      Die anderen Faktoren (Konzentration, Druck) verschieben nur die Lage,
      lassen K unberührt.
    </p>

    ${renderTable({
      headers: ['Reaktionstyp', 'T-Erhöhung → Einfluss auf K', 'GG-Verschiebung', 'Erklärung', 'Beispiel'],
      rows: [
        ['Exotherm (ΔH < 0)',
         'K nimmt ab (K₂ < K₁)',
         'In Richtung Edukte (←)',
         'Wärme ist „Produkt" → T-Erhöhung = Produkt hinzufügen → GG weicht aus',
         'NH₃-Synthese: N₂+3H₂⇌2NH₃ (ΔH=−92 kJ) · Höhere T → weniger NH₃'],
        ['Endotherm (ΔH > 0)',
         'K nimmt zu (K₂ > K₁)',
         'In Richtung Produkte (→)',
         'Wärme ist „Edukt" → T-Erhöhung = mehr Edukt → mehr Produkt',
         'CaCO₃-Zersetzung: K steigt mit T → erst bei >840°C spontan'],
        ['ΔH = 0 (ideal)',
         'K bleibt konstant',
         'Keine Verschiebung',
         'Hin- und Rückreaktion gleich stark beschleunigt',
         'Selten in der Praxis; H₂+I₂⇌2HI (ΔH≈0) · K nahezu T-unabhängig'],
      ],
      highlight: [0, 1],
    })}

    ${renderFormulaBox({
      label:   'Van\'t Hoff\'sche Gleichgewichtsgleichung (quantitativ)',
      formula: 'ln(K₂/K₁) = −(ΔH°_R / R) · (1/T₂ − 1/T₁)',
      desc:    'ΔH°_R [J/mol] · R = 8,314 J/(mol·K) · T₁, T₂ [K] · Grafisch: ln K vs. 1/T → Gerade; Steigung = −ΔH°_R/R',
    })}

    ${renderTable({
      headers: ['Reaktion', 'ΔH°_R [kJ/mol]', 'K bei 25°C', 'K bei 500°C', 'Trend'],
      rows: [
        ['N₂ + 3H₂ ⇌ 2NH₃',            '−92,4',  '977 L²/mol²',    '~0,040 L²/mol²', 'K sinkt stark mit T (exotherm)'],
        ['2SO₂ + O₂ ⇌ 2SO₃',            '−197,7', '~3·10²⁸ L/mol', '~1·10⁵ L/mol',  'K sinkt mit T (exotherm)'],
        ['N₂O₄ ⇌ 2NO₂',                 '+57,2',  '5,9·10⁻³ mol/L','~0,94 mol/L',   'K steigt mit T (endotherm)'],
        ['CaCO₃(s) ⇌ CaO(s) + CO₂(g)', '+178',   '~10⁻²³ mol/L', '~0,24 mol/L (900°C)','Stark endotherm; K steigt'],
      ],
      highlight: [0, 2],
    })}

    <!-- Druckeinfluss -->
    <h3 class="lz-h3" style="margin-top:1.75rem;">Einfluss des Drucks (bei Gasreaktionen)</h3>
    <p class="lz-prose">
      Druckänderungen verschieben das Gleichgewicht bei Gasreaktionen,
      wenn sich die Gesamtanzahl der Gasmole ändert (Δn_gas ≠ 0).
      Der Wert von K_c bleibt dabei unverändert — nur K_p ändert sich
      (weil K_p auf Partialdrücke bezogen ist).
    </p>

    ${renderTable({
      headers: ['Druckänderung', 'Δn_gas > 0 (mehr Gasmole auf Prod.-Seite)', 'Δn_gas < 0 (weniger Gasmole auf Prod.-Seite)', 'Δn_gas = 0 (gleich viele Gasmole)'],
      rows: [
        ['p steigt (Kompression)',   'GG → Edukte (←) [weniger Gasmole]',   'GG → Produkte (→) [weniger Gasmole]',    'Keine Verschiebung'],
        ['p sinkt (Expansion)',      'GG → Produkte (→) [mehr Gasmole]',    'GG → Edukte (←) [mehr Gasmole]',         'Keine Verschiebung'],
        ['Inertgas zugeben (const. V)','Keine Verschiebung (Partialdrücke der Reaktanden unverändert)','Keine Verschiebung','Keine Verschiebung'],
        ['Inertgas zugeben (const. p)','Partialdrücke sinken → wie Drucksenkung → GG → mehr Gasmole','Wie Drucksenkung','Keine Verschiebung'],
      ],
      highlight: [0, 1],
    })}

    ${renderTable({
      headers: ['Reaktion', 'Δn_gas', 'Druckerhöhung begünstigt…', 'Industrielle Konsequenz'],
      rows: [
        ['N₂ + 3H₂ ⇌ 2NH₃',  '2−4 = −2', 'Produkt NH₃ (→)',   'Haber-Bosch: 200–400 bar → höhere NH₃-Ausbeute'],
        ['2SO₂+O₂ ⇌ 2SO₃',   '2−3 = −1', 'Produkt SO₃ (→)',   'Kontaktverfahren: erhöhter Druck vorteilhaft'],
        ['N₂O₄ ⇌ 2NO₂',      '2−1 = +1', 'Edukt N₂O₄ (←)',   'Bei hohem Druck: mehr N₂O₄ (farblos); bei niedrigem: mehr NO₂ (braun)'],
        ['H₂ + I₂ ⇌ 2HI',    '2−2 = 0',  'Kein Einfluss',     'Druckänderung wirkungslos'],
        ['CO+3H₂ ⇌ CH₄+H₂O', '2−4 = −2', 'Produkte (→)',      'Methanisierung bei hohem Druck bevorzugt'],
      ],
      highlight: [0, 2],
    })}

    ${renderInfobox({
      type: '', icon: 'fas fa-compress', title: 'Druckeinfluss — warum K_c konstant bleibt',
      body: `Druckerhöhung erhöht alle Konzentrationen gleichmäßig (c = n/V; kleineres V → größere c).
             Im Reaktionsquotienten Q ändern sich alle Terme — aber in einer Weise,
             die Q von K_c wegbringt, weshalb das GG sich verschiebt, bis Q = K_c wieder gilt.<br><br>
             <strong>Beispiel N₂ + 3H₂ ⇌ 2NH₃ (K_c = 977 bei 25°C):</strong><br>
             Start im GG: [N₂] = 0,1 M, [H₂] = 0,3 M, [NH₃] = 0,2 M<br>
             Q = (0,2)² / (0,1 · (0,3)³) = 0,04/0,0027 = 14,8 (< K_c = 977?)<br>
             Druckverdoppelung → alle c verdoppeln sich: [N₂]=0,2, [H₂]=0,6, [NH₃]=0,4<br>
             Q' = (0,4)² / (0,2 · (0,6)³) = 0,16/0,0432 = 3,7 (< 977 noch mehr)<br>
             → Reaktion läuft in Richtung NH₃ (→), bis Q = K_c = 977 wieder erreicht.`,
    })}
  `; }

  // ══════════════════════════════════════════════════════════
  // 6.2.2 — Einfluss weiterer Reaktionsbedingungen
  // ══════════════════════════════════════════════════════════
  _weitere() { return `
    ${renderSubhead('6.2.2 — Einfluss weiterer Reaktionsbedingungen')}

    <h3 class="lz-h3">Konzentrationsänderungen</h3>
    <p class="lz-prose">
      Ändert man die Konzentration eines Reaktionsteilnehmers (Edukt oder Produkt),
      verschiebt sich das Gleichgewicht — K_c bleibt konstant.
      Der Reaktionsquotient Q weicht von K ab → System reagiert, bis Q = K wieder gilt.
    </p>

    ${renderTable({
      headers: ['Störung', 'Momentaner Effekt auf Q', 'GG-Verschiebung', 'Langfristiger Effekt'],
      rows: [
        ['Edukt-Konzentration erhöhen (c(A) ↑)',
         'Q sinkt unter K (Nenner größer)',
         'In Richtung Produkte (→)',
         'c(Produkte) steigen; c(A) sinkt wieder; alle anderen Edukte auch etwas verbraucht'],
        ['Produkt-Konzentration erhöhen (c(P) ↑)',
         'Q steigt über K (Zähler größer)',
         'In Richtung Edukte (←)',
         'c(P) sinkt wieder; c(Edukte) steigen'],
        ['Edukt entfernen (c(A) ↓)',
         'Q steigt über K',
         'In Richtung Edukte (←)',
         'Mehr Edukte gebildet; Produkte verbraucht'],
        ['Produkt entfernen (c(P) ↓)',
         'Q sinkt unter K',
         'In Richtung Produkte (→)',
         'Mehr Produkte gebildet; Ausbeute steigt!'],
      ],
      highlight: [0, 3],
    })}

    ${renderInfobox({
      type: 'blue', icon: 'fas fa-lightbulb', title: 'Praktische Nutzung der Konzentrationsverschiebung',
      body: `<strong>Produkt abtrennen → vollständigerer Umsatz:</strong><br>
             Esterbildung: CH₃COOH + C₂H₅OH ⇌ CH₃COOC₂H₅ + H₂O<br>
             → Wasser entfernen (Molsieb, Wasserabscheider, Dean-Stark-Apparatur)<br>
             → GG verschiebt sich immer mehr zu Produkten → quasi vollständige Veresterung<br><br>
             <strong>Edukt im Überschuss:</strong><br>
             Dieselbe Reaktion: Ethanol im Überschuss (z.B. 5-fach Mol-Überschuss)<br>
             → GG liegt weiter rechts → höhere Ausbeute an Ester<br><br>
             <strong>Haber-Bosch:</strong> NH₃ wird kontinuierlich aus dem GG entfernt
             (Kondensation) → Reaktion läuft ständig Richtung NH₃.`,
    })}

    <h3 class="lz-h3" style="margin-top:1.75rem;">Einfluss des Katalysators</h3>

    ${renderMerkboxGrid([
      {
        icon: 'fas fa-tachometer-alt',
        title: 'Katalysator beschleunigt das Erreichen des GG',
        text: `Ein Katalysator senkt die Aktivierungsenergie E_A für Hin- UND Rückreaktion
               gleichermaßen. Er bringt das System schneller ins Gleichgewicht,
               aber verändert weder K_c noch die Gleichgewichtslage.
               Beispiel: Fe-Katalysator im Haber-Bosch-Verfahren —
               ohne ihn würde das GG erst nach Jahren eingestellt.`,
      },
      {
        icon: 'fas fa-not-equal',
        title: 'K_c bleibt unverändert',
        text: `Da ΔG° (und damit K_c) nicht von der Reaktionskinetik abhängt,
               verändert ein Katalysator das thermodynamische Gleichgewicht nicht.
               Die Gleichgewichtskonzentrationen sind mit und ohne Katalysator identisch —
               nur die Zeit bis zum Erreichen ist kürzer.`,
      },
      {
        icon: 'fas fa-crosshairs',
        title: 'Selektivitätskatalyse — anderes Produkt, nicht mehr davon',
        text: `Manche Katalysatoren können selektiv einen Reaktionsweg bevorzugen
               und so das Verhältnis verschiedener möglicher Produkte ändern.
               Dies beeinflusst nicht K einer Einzelreaktion,
               sondern welche Reaktion am schnellsten abläuft.
               Beispiel: Pd-Katalysator: selektive Hydrierung von Dienen zu Monoalkenen.`,
      },
    ])}

    <h3 class="lz-h3" style="margin-top:1.75rem;">Einfluss des Lösungsmittels</h3>
    <p class="lz-prose">
      In Lösungen beeinflusst die Wahl des Lösungsmittels das GG durch:
    </p>

    ${renderTable({
      headers: ['Einfluss', 'Mechanismus', 'Beispiel'],
      rows: [
        ['Ionenstärke',        'Hohe Ionenkonzentration → Aktivitätskoeffizienten sinken → effektive Konz. sinkt → K_a scheinbar kleiner', 'Schwache Säuren: K_a bei I > 0 verschieden von K_a° (Debye-Hückel)'],
        ['Dielektrizitätskonstante ε', 'Hohes ε → bessere Ionentrennung → Dissoziation begünstigt', 'H₂O (ε=78,4) löst Ionen gut; Benzol (ε=2,3) schlecht → kaum Dissoziation'],
        ['Spezifische Wechselwirkungen', 'H-Brücken, Komplexbildung mit LM → Aktivität der Reaktanden geändert', 'Ketone in DMF reagieren anders als in H₂O; Wasser stabilisiert Ionen durch Hydratation'],
        ['Verdünnung',         'c sinkt → Q ändert sich → GG verschiebt sich', 'Schwache Elektrolyte: Verdünnung → mehr Dissoziation (Ostwaldsche Verdünnungsgesetz)'],
      ],
      highlight: [3],
    })}

    <h3 class="lz-h3" style="margin-top:1.75rem;">Gesamtübersicht: Was beeinflusst das GG wie?</h3>

    ${renderTable({
      headers: ['Störung', 'K_c ändert sich?', 'GG-Lage verschiebt sich?', 'In welche Richtung?'],
      rows: [
        ['T erhöhen',                         'JA (↓ exotherm; ↑ endotherm)', 'Ja',   'Richtung endotherme Seite (Wärme „verbrauchen")'],
        ['T senken',                          'JA (↑ exotherm; ↓ endotherm)', 'Ja',   'Richtung exotherme Seite (Wärme „erzeugen")'],
        ['p erhöhen (Δn_gas ≠ 0)',            'Nein',                          'Ja',   'Richtung weniger Gasmole'],
        ['p senken (Δn_gas ≠ 0)',             'Nein',                          'Ja',   'Richtung mehr Gasmole'],
        ['p ändern (Δn_gas = 0)',             'Nein',                          'Nein', 'Keine Verschiebung'],
        ['Edukt-c erhöhen',                   'Nein',                          'Ja',   'Richtung Produkte (→)'],
        ['Produkt-c erhöhen',                 'Nein',                          'Ja',   'Richtung Edukte (←)'],
        ['Produkt entfernen',                 'Nein',                          'Ja',   'Richtung Produkte (→)'],
        ['Katalysator hinzufügen',            'Nein',                          'Nein', 'Kein Einfluss auf GG-Lage; nur schnelleres Erreichen'],
        ['Inertgas (const. V)',               'Nein',                          'Nein','Keine Verschiebung (Partialdrücke unverändert)'],
        ['Inertgas (const. p)',               'Nein',                          'Ja',   'Richtung mehr Gasmole (wie Drucksenkung)'],
        ['Lösungsmittel ändern',              'Ja (K°_c ändert sich)',         'Ja',   'Je nach Wechselwirkung'],
      ],
      highlight: [0, 1, 5, 8],
    })}

    ${renderAccordion([
      {
        title: 'Quantitatives Beispiel: Haber-Bosch-Optimierung',
        content: `<p class="lz-prose"><strong>N₂(g) + 3H₂(g) ⇌ 2NH₃(g)</strong>
                  ΔH° = −92,4 kJ/mol · K_c(25°C) = 977 L²/mol² · K_c(500°C) = 0,040 L²/mol²</p>
                  <p class="lz-prose"><strong>Thermodynamisch optimal wäre:</strong><br>
                  Niedriger Druck: ← nein, Δn_gas = −2 → hoher Druck begünstigt NH₃<br>
                  Niedrige Temperatur: exotherm → niedriges T → hohe Ausbeute (K_c groß)<br>
                  → Aber: Bei 25°C ist die Reaktion kinetisch zu langsam!<br><br>
                  <strong>Praktischer Kompromiss:</strong><br>
                  400–500°C (akzeptable Geschwindigkeit mit Fe-Katalysator) +
                  200–400 bar (hohe GG-Ausbeute trotz schlechterer K_c) +
                  NH₃ kontinuierlich kondensieren und entfernen (Produktabtrennung)<br>
                  Reale Ausbeute: ~15% NH₃ pro Durchgang; Recycling der Edukte → wirtschaftlich</p>`,
      },
      {
        title: 'Quantitatives Beispiel: N₂O₄ ⇌ 2NO₂ — Druckeinfluss',
        content: `<p class="lz-prose"><strong>K_c = 5,9·10⁻³ mol/L bei 25°C</strong><br>
                  GG-Konzentrationen bei p = 1 bar: [N₂O₄] = 0,0886 mol/L, [NO₂] = 0,0228 mol/L</p>
                  <p class="lz-prose"><strong>Druckverdoppelung (V halbiert) → alle c verdoppeln sich momentan:</strong><br>
                  [N₂O₄]' = 0,1772 mol/L, [NO₂]' = 0,0456 mol/L<br>
                  Q' = (0,0456)² / 0,1772 = 0,01174 > K_c = 5,9·10⁻³<br>
                  → Q > K → GG verschiebt sich in Richtung N₂O₄ (←)<br>
                  → Weniger NO₂ (braun), mehr N₂O₄ (farblos) → Farbänderung sichtbar!</p>
                  <p class="lz-prose"><strong>Neues GG nach Verschiebung:</strong>
                  Berechnung über ICE-Tabelle (analog 6-1.js) → neue GG-Konzentrationen
                  mit K_c = 5,9·10⁻³ erfüllt, aber bei höheren Absolutwerten.</p>`,
      },
      {
        title: 'Puffersysteme — praktische Anwendung der GG-Beeinflussung',
        content: `<p class="lz-prose">Puffer sind Lösungen, die Konzentrationsstörungen
                  (Säure- oder Basenzugabe) weitgehend abfangen — ein klassisches
                  Beispiel für die praktische Nutzung des GG-Gleichgewichts:</p>
                  <p class="lz-prose"><strong>Acetat-Puffer: CH₃COOH ⇌ H⁺ + CH₃COO⁻</strong><br>
                  Bei H⁺-Zugabe: H⁺ + CH₃COO⁻ → CH₃COOH (Pufferreaktion, GG ←)<br>
                  Bei OH⁻-Zugabe: OH⁻ + CH₃COOH → CH₃COO⁻ + H₂O (GG →)<br><br>
                  Henderson-Hasselbalch: pH = pK_a + lg([A⁻]/[HA])<br>
                  Pufferoptimum bei [A⁻] = [HA] → pH = pK_a (für Acetat: pH = 4,75)<br>
                  Pufferkapazität maximal bei pH = pK_a ± 1</p>`,
      },
    ])}

    ${renderInfobox({
      type: 'success', icon: 'fas fa-graduation-cap', title: 'Zusammenfassung — GG-Beeinflussung',
      body: `<strong>Le Chatelier:</strong> Störung → GG weicht aus, bis Störung minimiert<br>
             <strong>Temperatur:</strong> Einzige Größe, die K_c ändert · exotherm: T↑ → K↓ · endotherm: T↑ → K↑<br>
             <strong>Druck:</strong> K_c konstant · Δn_gas < 0: p↑ → mehr Produkt · Δn_gas = 0: kein Effekt<br>
             <strong>Konzentration:</strong> K_c konstant · Edukt↑ → mehr Produkt · Produkt entfernen → mehr Produkt<br>
             <strong>Katalysator:</strong> K_c und GG-Lage konstant · nur schnelleres Erreichen<br>
             <strong>Haber-Bosch-Kompromiss:</strong> Hoher Druck (Ausbeute) + mittlere T (Geschwindigkeit) + Produktabtrennung`,
    })}
  `; }

  init() {
    i18n.init();
    initScrollReveal();
    initInteractive(document);
    initTabs();
  }
}