// pages/projekte/lernzettel/faecher/chemie/themen/8/8-2.js
// Kapitel 8.2 — Eigenschaften der Nebengruppenelemente
// 8.2.1  Vorkommen und Darstellung der d-Block-Elemente
// 8.2.2  Eigenschaften und Verwendung von d-Block-Elementen
// 8.2.3  Nanotechnologie

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
  { key: '821', icon: 'fas fa-mountain',      label: '8.2.1 Vorkommen & Darstellung' },
  { key: '822', icon: 'fas fa-cog',           label: '8.2.2 Eigenschaften & Verwendung'},
  { key: '823', icon: 'fas fa-microscope',    label: '8.2.3 Nanotechnologie'         },
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
  return `<nav class="wim-tabs" role="tablist" id="tabs82">${nav}</nav>${panels}`;
}

function initTabs() {
  const nav = document.getElementById('tabs82');
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

export default class Chemie_8_2 {
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
          <i class="fas fa-chevron-right"></i><span>Kapitel 8</span>
          <i class="fas fa-chevron-right"></i><span>8.2</span>
        </div>
        <h1 class="lz-sub-title">Nebengruppenelemente<br><em>d-Block und Nanotechnologie</em></h1>
        <p class="lz-sub-desc">
          Übergangsmetalle · Vorkommen und Darstellung · Eigenschaften ·
          Farbige Ionen · Katalyse · Nanotechnologie
        </p>
        ${renderTags(['Kap. 8.2', 'Übergangsmetalle', 'd-Block', 'Nanotechnologie', 'LK Chemie BW'])}
      </div>
    </section>

    <section class="lz-content-section">
      <div class="lz-section-wrap">
        ${buildWimHTML(k => {
          if (k === '821') return this._vorkommen();
          if (k === '822') return this._eigenschaften();
          if (k === '823') return this._nano();
          return '';
        })}
      </div>
    </section>

    <section class="lz-content-section" style="padding:1.5rem 0 3rem;">
      <div class="lz-section-wrap">
        ${renderPageNav({
          prev: { label: '8.1 Hauptgruppenelemente', link: `${BASE}/themen/8/8-1` },
          next: { label: '8.3 Komplexchemie',         link: `${BASE}/themen/8/8-3` },
        }, BASE)}
      </div>
    </section>
    ${footerHTML(this.router)}
  `; }

  // ══════════════════════════════════════════════════════════
  // 8.2.1 — Vorkommen und Darstellung der d-Block-Elemente
  // ══════════════════════════════════════════════════════════
  _vorkommen() { return `
    ${renderSubhead('8.2.1 — Vorkommen und Darstellung der d-Block-Elemente')}

    <h2 class="lz-h2">Der d-Block im Periodensystem</h2>
    <p class="lz-prose">
      Die <strong>Übergansmetalle (d-Block-Elemente, Gruppen 3–12)</strong> füllen
      die 3d-, 4d- und 5d-Unterschalen. Sie sind mechanisch robust, hochschmelzend,
      elektrisch leitend und bilden häufig farbige Ionen sowie stabile Komplexe.
      Ihre variablen Oxidationsstufen machen sie zu wichtigen Katalysatoren.
    </p>

    ${renderTable({
      headers: ['Element', 'Z', 'Elektronenkonfiguration', 'Häufige OZ', 'Wichtigste Mineralien / Erze', 'Weltproduktion'],
      rows: [
        ['Ti', '22', '[Ar] 3d² 4s²',  '+2,+3,+4(häufigst)', 'Rutil (TiO₂), Ilmenit (FeTiO₃)',           '~7 Mio. t TiO₂/Jahr; ~220 000 t Ti-Metall'],
        ['V',  '23', '[Ar] 3d³ 4s²',  '+3,+4,+5',           'Vanadinit Pb₅(VO₄)₃Cl, Patronit VS₄',      '~100 000 t V/Jahr; fast alles zu Stahl'],
        ['Cr', '24', '[Ar] 3d⁵ 4s¹ (!)', '+2,+3,+6',        'Chromit FeCr₂O₄',                           '~40 Mio. t Chromit/Jahr; Edelstahl, Pigmente'],
        ['Mn', '25', '[Ar] 3d⁵ 4s²',  '+2,+3,+4,+6,+7',    'Pyrolusit MnO₂, Rhodonit MnSiO₃',           '~20 Mio. t Mn/Jahr; Stahl (Desulfurierung)'],
        ['Fe', '26', '[Ar] 3d⁶ 4s²',  '+2,+3',              'Hämatit Fe₂O₃, Magnetit Fe₃O₄, Pyrit FeS₂','~2 Mrd. t/Jahr (Eisen); häufigstes Schwermetall'],
        ['Co', '27', '[Ar] 3d⁷ 4s²',  '+2,+3',              'Cobaltit CoAsS, Smaltit CoAs₂',             '~170 000 t/Jahr; Legierungen, Li-Ionen-Akku'],
        ['Ni', '28', '[Ar] 3d⁸ 4s²',  '+2',                 'Pentlandit (Fe,Ni)₉S₈, Garnierit',          '~3 Mio. t/Jahr; Edelstahl (18/8: 18% Cr, 8% Ni)'],
        ['Cu', '29', '[Ar] 3d¹⁰ 4s¹ (!)', '+1,+2',          'Chalkopyrit CuFeS₂, Malachit Cu₂CO₃(OH)₂', '~22 Mio. t/Jahr; El. Leitung, Legierungen'],
        ['Zn', '30', '[Ar] 3d¹⁰ 4s²', '+2 (nur!)',          'Sphalerit ZnS, Smithsonit ZnCO₃',           '~14 Mio. t/Jahr; Galvanisierung, Messing'],
        ['Ag', '47', '[Kr] 4d¹⁰ 5s¹', '+1',                 'Argentit Ag₂S, gediegen',                   '~27 000 t/Jahr; Schmuck, Fotografie, Elektronik'],
        ['Au', '79', '[Xe] 4f¹⁴ 5d¹⁰ 6s¹', '+1,+3',        'Gediegen; Telluride (Calaverit AuTe₂)',      '~3 500 t/Jahr; Schmuck, Elektronik'],
        ['Pt', '78', '[Xe] 4f¹⁴ 5d⁹ 6s¹', '+2,+4',         'Platiniridium (gediegen); Sperrylith PtAs₂','~200 t/Jahr; Katalysatoren, Schmuck, Brennstoffzelle'],
        ['W',  '74', '[Xe] 4f¹⁴ 5d⁴ 6s²', '+4,+6',         'Wolframit (Fe,Mn)WO₄, Scheelit CaWO₄',     '~90 000 t/Jahr; höchster Schmelzpunkt (3422°C)'],
      ],
      highlight: [4, 7, 11],
    })}

    <h3 class="lz-h3" style="margin-top:1.75rem;">Darstellung der wichtigsten Übergangsmetalle</h3>

    ${renderAccordion([
      {
        title: 'Eisen — Hochofenprozess (pyrometallurgisch)',
        content: `<p class="lz-prose"><strong>Rohstoffe:</strong> Eisenerz (Fe₂O₃/Fe₃O₄), Koks (C), Kalkstein (CaCO₃)</p>
                  <p class="lz-prose"><strong>Reaktionen im Hochofen (von oben nach unten):</strong><br>
                  ① Trocknung + Vorwärmung (200–700°C)<br>
                  ② Kalkstein-Zersetzung: CaCO₃ → CaO + CO₂ (700–900°C)<br>
                  ③ Boudouard-GG: CO₂ + C ⇌ 2CO (900–1100°C, Koks)<br>
                  ④ Fe₂O₃ + 3CO → 2Fe + 3CO₂ (indirekte Reduktion, 900°C)<br>
                  ⑤ Fe + C (Aufkohlung): Roheisen (3–4% C, 1% Si, 1% Mn, 0,1% P)<br>
                  ⑥ Schlackenbildung: CaO + SiO₂ → CaSiO₃ (flüssig, oben schwimmend)<br><br>
                  <strong>Roheisen → Stahl (Frischen):</strong><br>
                  Sauerstoff einblasen (Linz-Donawitz-Konverter): C + O₂ → CO₂; Si + O₂ → SiO₂;<br>
                  C-Gehalt sinkt von 3–4% auf <2,14% → Stahl (Baustahl ~0,2% C; Federstahl ~0,5%; Werkzeugstahl ~1%).</p>`,
      },
      {
        title: 'Kupfer — Flotation, Rösten, Schmelzen, Raffination',
        content: `<p class="lz-prose"><strong>1. Flotation:</strong> CuFeS₂-Erz + Sammler (Xanthogenat) →
                  Schaumflotation → Cu-Konzentrat (~30% Cu)</p>
                  <p class="lz-prose"><strong>2. Rösten + Schmelzen (Flash-Smelting, Outotec):</strong><br>
                  2CuFeS₂ + 5O₂ → 2CuS + 2FeO + 4SO₂<br>
                  Schlackenbildung (FeO+SiO₂→FeSiO₃) → flüssiges Kupfermatt (~80% Cu)<br><br>
                  <strong>3. Konverter (Bessemerierung):</strong><br>
                  Cu₂S + O₂ → 2Cu + SO₂ → Blasenkupfer (~99% Cu)<br><br>
                  <strong>4. Elektrolytische Raffination:</strong><br>
                  Blasenkupfer-Anode → Cu²⁺ → Kathode: Reinkupfer 99,99%<br>
                  Anodenschlamm enthält Au, Ag, Se, Te → wertvoll!</p>`,
      },
      {
        title: 'Titan — Kroll-Prozess (magnesiothermal)',
        content: `<p class="lz-prose"><strong>Schritt 1 — Chlorierung:</strong><br>
                  TiO₂ + 2Cl₂ + 2C → TiCl₄ + 2CO (800°C)<br>
                  TiCl₄: flüssig, bp = 136°C → leicht reinigbar durch Destillation<br><br>
                  <strong>Schritt 2 — Kroll-Reduktion:</strong><br>
                  TiCl₄ + 2Mg → Ti + 2MgCl₂ (800–850°C, Inertgasatmosphäre)<br>
                  Mg günstiger als Na (Hunter-Prozess); ΔG° = −472 kJ/mol → spontan<br><br>
                  <strong>Schritt 3 — Reinigung:</strong><br>
                  Schwamm-Titan + MgCl₂ → Destillation MgCl₂ → Vakuumschmelze<br>
                  Teuer (~20 €/kg vs. Al ~2 €/kg) → nur für Luft-/Raumfahrt, Implantate, Hochleistung</p>`,
      },
    ])}
  `; }

  // ══════════════════════════════════════════════════════════
  // 8.2.2 — Eigenschaften und Verwendung von d-Block-Elementen
  // ══════════════════════════════════════════════════════════
  _eigenschaften() { return `
    ${renderSubhead('8.2.2 — Eigenschaften und Verwendung von d-Block-Elementen')}

    <h3 class="lz-h3">Charakteristische Eigenschaften der Übergangsmetalle</h3>

    ${renderMerkboxGrid([
      {
        icon: 'fas fa-layer-group',
        title: 'Variable Oxidationsstufen',
        text: `d-Elektronen können unterschiedlich stark abgegeben werden.
               Mn: +2, +3, +4, +6, +7 (alle bekannt; MnO₄⁻: violett, MnO₂: braun, Mn²⁺: blass rosa)
               Fe: +2 (hellgrün), +3 (rotbraun)
               Cr: +2, +3 (grün), +6 (Cr₂O₇²⁻: orange, giftig, krebserzeugend!)
               Grund: d-Orbitale ähnliche Energien → verschiedene Elektronenzahl stabil.`,
      },
      {
        icon: 'fas fa-palette',
        title: 'Farbige Ionen und Verbindungen',
        text: `d-Elektronen können sichtbares Licht absorbieren (d-d-Übergänge).
               Energie ΔE = hν bestimmt die absorbierte Farbe → komplementäre Farbe sichtbar.
               [Cu(H₂O)₄]²⁺: blau (Gegenteil orange) · [Fe(H₂O)₆]³⁺: blass gelb
               Farbe hängt ab von: Ligand (Stärke Ligandenfeld), Metall, OZ, Geometrie.
               Ausnahmen farblos: d⁰ (Ti⁴⁺, Sc³⁺) und d¹⁰ (Cu⁺, Zn²⁺).`,
      },
      {
        icon: 'fas fa-magnet',
        title: 'Magnetismus',
        text: `Ungepaarte d-Elektronen → Paramagnetismus (wird in Magnetfeld angezogen).
               Fe, Co, Ni: ferromagnetisch (starke Kopplung ungepaarter Elektronen → Weißsche Bezirke).
               Magnetismus verloren bei Curie-Temperatur: Fe: 770°C, Co: 1115°C, Ni: 358°C.
               Dimagnetisch: alle d⁰ und d¹⁰ Verbindungen (alle EP); Z.B. Zn²⁺, Cu⁺.`,
      },
      {
        icon: 'fas fa-cog',
        title: 'Katalytische Aktivität',
        text: `Können verschiedene Oxidationsstufen einnehmen → Redoxkatalysatoren.
               Freie d-Orbitale können Substrat adsorbieren und aktivieren.
               Fe: Haber-Bosch (N₂-Adsorption/Spaltung)
               V₂O₅: Kontaktverfahren (SO₂→SO₃)
               Pt, Pd: Kfz-Katalysator, Hydrierungen
               Ni: Fetthärtung (C=C → C–C)`,
      },
    ])}

    <h3 class="lz-h3" style="margin-top:1.75rem;">Farben der Übergangsmetallionen und Ligandenfeldtheorie</h3>
    <p class="lz-prose">
      Die <strong>Ligandenfeldaufspaltung Δ</strong> beschreibt die Energieaufspaltung
      der d-Orbitale durch elektrostatische Wechselwirkung mit den Liganden.
      Die Energie der absorbierten Strahlung entspricht Δ.
    </p>

    ${renderTable({
      headers: ['Ion', 'd-Konfiguration', 'Farbe (wässrig)', 'Absorbierte Farbe', 'Erklärung'],
      rows: [
        ['Ti³⁺',    'd¹',  'Violett',      'Gelb-grün (500 nm)',      'Ein d-Elektron; einfacher d-d-Übergang'],
        ['V³⁺',     'd²',  'Grün',         'Rot (700 nm)',             'Zwei d-Elektronen; mehrere Übergänge'],
        ['Cr³⁺',    'd³',  'Dunkelgrün',   'Rot+Blau (400+700 nm)',   'Stabilste Cr-Stufe; oktaedrisch'],
        ['Mn²⁺',    'd⁵ (halb)', 'Blass rosa', 'Schwach (<1% Transmission)', 'Alle Spinverbotenen Übergänge → sehr blasse Farbe'],
        ['Fe²⁺',    'd⁶',  'Blass grün',   'Rot (700 nm)',             'Leicht oxidierbar zu Fe³⁺'],
        ['Fe³⁺',    'd⁵ (halb)', 'Blass gelb-braun', 'Blau-violett', 'Verbotene Übergänge → blass; in Komplexen intensiv'],
        ['Co²⁺',    'd⁷',  'Rosa',         'Grün (520 nm)',            'Oktaedrisch: rosa; Tetraedrisch: blau (CoCl₄²⁻)'],
        ['Ni²⁺',    'd⁸',  'Grün',         'Rot (700 nm) + UV',        'Oktaedrisch; mehrere Banden'],
        ['Cu²⁺',    'd⁹',  'Blau',         'Orange-rot (~700 nm)',     'Jahn-Teller-Verzerrung; lebhafte Farbe'],
        ['Zn²⁺',    'd¹⁰', 'Farblos',      'Keine sichtbare Absorption','Volle d-Schale → kein d-d-Übergang möglich'],
        ['[CrF₆]³⁻','d³',  'Gelb',         'Blau-violett',             'Schwacher F⁻-Ligand → kleines Δ → langwelliger Übergang'],
        ['[Cr(CN)₆]³⁻','d³','Gelb',         'Blau-violett (stärker)',   'Starker CN⁻-Ligand → großes Δ → kurzwelliger Übergang'],
      ],
      highlight: [8, 9],
    })}

    ${renderInfobox({
      type: 'blue', icon: 'fas fa-palette', title: 'Spektrochemische Reihe der Liganden',
      body: `Liganden ordnen sich nach ihrer Fähigkeit, die d-Orbitale aufzuspalten (Δ):<br><br>
             I⁻ < Br⁻ < S²⁻ < Cl⁻ < F⁻ < OH⁻ < H₂O < SCN⁻ < NH₃ < en < NO₂⁻ < CN⁻ < CO<br>
             <em>schwaches Feld ←————————————→ starkes Feld</em><br><br>
             <strong>Schwaches Ligandenfeld:</strong> kleines Δ → Elektronen besetzen alle d-Orbitale
             nach Hund (high-spin); paramagnetisch; mehr ungepaarte e⁻.<br>
             <strong>Starkes Ligandenfeld:</strong> großes Δ → Elektronen paaren sich zuerst
             in den niedrigeren d-Orbitalen (low-spin); diamagnetisch oder weniger paramagnetisch.<br><br>
             Beispiel Fe³⁺ (d⁵): H₂O → high-spin (5 ungepaarte e⁻); CN⁻ → low-spin (1 ungepaart)`,
    })}

    <h3 class="lz-h3" style="margin-top:1.75rem;">Wichtige Übergangsmetalle und ihre Verbindungen</h3>

    ${renderTable({
      headers: ['Metall', 'Wichtige Verbindungen', 'OZ', 'Farbe', 'Verwendung'],
      rows: [
        ['Fe', 'Fe₂O₃ (Hämatit), Fe₃O₄ (Magnetit), FeSO₄ (grün), Fe₂(SO₄)₃ (gelb), K₃[Fe(CN)₆] (Berliner Blau)', '+2,+3', 'Fe²⁺: hellgrün; Fe³⁺: gelbbraun', 'Stahl; Pigmente; Tintenherstellung; Blutbestandteil (Hämoglobin)'],
        ['Cr', 'CrCl₃ (grün), K₂Cr₂O₇ (orange), K₂CrO₄ (gelb), Cr₂O₃ (grün)', '+3,+6', 'Cr³⁺: grün; Cr⁶⁺: orange/gelb (krebserzeugend!)', 'Edelstahl; Chromleder; Chromgelb (Pb(CrO₄)); KFZ-Beschichtung'],
        ['Mn', 'MnO₂ (braun), KMnO₄ (violett), MnSO₄ (rosa)', '+2,+4,+7', 'Mn²⁺: blass rosa; MnO₄⁻: violett', 'Stahl (Mn entfernt S: MnS); MnO₂: Trockenbatterien; KMnO₄: Desinfektionsmittel, Titration'],
        ['Cu', 'CuSO₄·5H₂O (blau), CuO (schwarz), Cu₂O (rot), Malachit Cu₂CO₃(OH)₂ (grün)', '+1,+2', 'Cu²⁺: blau; Cu⁺: farblos (d¹⁰)', 'Elektrisch. Leitung; Legierungen; CuSO₄: Fungizid (Bordeaux-Brühe); Cu-Vergiftung (grüne Patina)'],
        ['Ni', 'NiSO₄ (grün), NiO (schwarz), Ni(CO)₄ (Tetracarbonyl)', '+2', 'Ni²⁺: grün', 'Edelstahl; Nickel-Metallhydrid-Akku; Hydrierungskatalysator'],
        ['Zn', 'ZnO (weiß), ZnSO₄ (weiß), ZnCl₂ (weiß), Zinkblende ZnS', '+2 (nur)', 'Farblos (d¹⁰)', 'Galvanisierung; Messing; ZnO: Salbe, Sonnenschutz, Pigment; Zn-Luft-Batterie'],
        ['Ti', 'TiO₂ (weiß, rutil/anatas), TiCl₄ (farblos)', '+4 (häufig)', 'Ti⁴⁺: farblos (d⁰); TiO₂: weiß', 'TiO₂: Weißpigment (Titandioxid ersetzt Bleiweiß); Ti-Metall: Luft-/Raumfahrt, Implantate'],
      ],
      highlight: [0, 2, 3],
    })}
  `; }

  // ══════════════════════════════════════════════════════════
  // 8.2.3 — Nanotechnologie
  // ══════════════════════════════════════════════════════════
  _nano() { return `
    ${renderSubhead('8.2.3 — Nanotechnologie')}

    <h2 class="lz-h2">Was ist Nanotechnologie?</h2>
    <p class="lz-prose">
      Die <strong>Nanotechnologie</strong> beschäftigt sich mit der Herstellung,
      Untersuchung und Anwendung von Strukturen und Materialien im Größenbereich
      von <strong>1–100 Nanometer</strong> (1 nm = 10⁻⁹ m = 10 Å).
      In diesem Bereich zeigen Materialien grundlegend andere Eigenschaften
      als im makroskopischen Zustand — weil der Anteil der Oberflächenatome
      gegenüber den Innenatomen dramatisch zunimmt.
    </p>

    ${renderInfobox({
      type: 'blue', icon: 'fas fa-ruler', title: 'Die Nanoskala — einordnen in Größen',
      body: `1 nm = 10⁻⁹ m<br>
             DNA-Doppelhelix: Durchmesser ~2 nm<br>
             Protein (Hämoglobin): ~5 nm<br>
             Nanopartikel (typisch): 5–100 nm<br>
             Rotes Blutkörperchen: 7 000–8 000 nm = 7–8 µm<br>
             Menschliches Haar: 60 000–80 000 nm = 60–80 µm<br><br>
             Zum Vergleich: 1 nm : 1 m = Murmeldurchmesser : Erdumfang`,
    })}

    <h3 class="lz-h3" style="margin-top:1.75rem;">Warum ist Nano anders? — Größenabhängige Eigenschaften</h3>

    ${renderMerkboxGrid([
      {
        icon: 'fas fa-expand-arrows-alt',
        title: 'Oberfläche-zu-Volumen-Verhältnis',
        text: `Für eine Kugel gilt: O/V = 6/d
               Bei d = 1 m: O/V = 6 m⁻¹
               Bei d = 1 nm: O/V = 6·10⁹ m⁻¹
               → 1 Milliarde mal größeres Verhältnis!
               Fast alle Atome sind Oberflächenatome → jedes Atom ist reaktiv zugänglich.
               10 nm-Goldkugel: ~50% Oberflächenatome; 1 nm: ~99%.`,
      },
      {
        icon: 'fas fa-bolt',
        title: 'Quanteneffekte — diskrete Energieniveaus',
        text: `Bei Nanopartikeln sind Elektronen auf kleinstem Raum eingesperrt.
               Quantenmechanische Effekte dominieren: diskrete Energieniveaus
               statt kontinuierliches Band (wie im Festkörper).
               Konsequenz: Farbe, elektrische Leitfähigkeit und andere Eigenschaften
               hängen von der Partikelgröße ab (→ Quantenpunkte!).`,
      },
      {
        icon: 'fas fa-thermometer-half',
        title: 'Veränderte Thermodynamik',
        text: `Schmelzpunkt sinkt mit sinkender Partikelgröße (Gibbs-Thomson-Effekt).
               Au-Nanopartikel (2 nm) schmelzen bei ~300°C statt 1064°C (Bulk).
               Löslichkeit steigt (Ostwald-Reifung: kleine Partikel lösen sich zu Gunsten großer).
               Reaktivität stark erhöht (mehr aktive Oberflächenatome).`,
      },
      {
        icon: 'fas fa-palette',
        title: 'Optische Eigenschaften — Plasmonen',
        text: `Metallnanopartikel zeigen kollektive Elektronenschwingungen (Oberflächenplasmonen).
               Au-Nanopartikel: 20 nm → rot; 100 nm → blau (größenabhängige Farbe!).
               Faraday (1857) beobachtete Rubinglas (Au-NP in Glas).
               TiO₂-Nanopartikel: weißes Pigment; aber auch Photokatalyse unter UV.`,
      },
    ])}

    <h3 class="lz-h3" style="margin-top:1.75rem;">Wichtige Nanostrukturen und -materialien</h3>

    ${renderTable({
      headers: ['Material', 'Größe/Struktur', 'Besondere Eigenschaften', 'Anwendungen'],
      rows: [
        ['Goldnanopartikel (AuNP)',
         '5–100 nm; sphärisch/stäbchenförmig',
         'Oberflächenplasmonen (SPR); größenabhängige Farbe (rot→blau); biokompatibel; einfach funktionalisierbar',
         'Schwangerschaftstest (kolloidales Au); Drug-delivery; Krebstherapie (Hyperthermie); SERS-Spektroskopie'],
        ['Silbernanopartikel (AgNP)',
         '1–100 nm',
         'Stärkste bakterizide Wirkung aller Metalle; breites Wirkspektrum; löst langsam Ag⁺ frei',
         'Antibakterieller Verbandstoff; Beschichtungen; Lebensmittelverpackungen; Wundheilung'],
        ['Eisenoxid-NP (Fe₃O₄)',
         '5–20 nm; superparamagnetisch',
         'Superparamagnetismus (unterhalb Curie-T kein Remanenzmagnetismus); biologisch abbaubar; MRT-kontrastsierend',
         'MRT-Kontrastmittel; magnetische Hyperthermie (Tumortherapie); Drug-Targeting durch Magnetführung'],
        ['TiO₂-Nanopartikel',
         '5–50 nm; Anatas- oder Rutil-Modifikation',
         'Photokatalytisch aktiv (UV); großes Bandgap (3,2 eV Anatas); selbstreinigend; UV-absorbierend',
         'Sonnenschutzmittel (UV-Blocker, transparenter als ZnO); selbstreinigende Oberflächen; Luftreinigung; Fotovolataik'],
        ['Kohlenstoff-Nanoröhren (CNT)',
         'Einwandig (SWCNT) d~1 nm; mehrwandig (MWCNT)',
         'E-Modul >1 TPa (Stahl: 200 GPa); elektrisch leitfähig (metallisch oder halbleitend je nach Chiralität); sehr hohe Wärmeleitfähigkeit',
         'Komposite (Leichtbau); Elektronik (Transistoren); Energiespeicher; Arzneimittelträger; Sensoren'],
        ['Graphen',
         'Monolage Graphit; 2D-Material; d~0,3 nm',
         'Beste bekannte Wärmeleitfähigkeit (~5000 W/mK); höchste intrinsische Festigkeit; transparenter Leiter; Träger-freie 2D-Membran',
         'Transparente Elektroden; Komposite; Membranen (Wasserentsalzung); Sensoren; Nobel-Preis 2010 (Geim, Novoselov)'],
        ['Fullerene (C₆₀)',
         'Hohlkugel aus 60 C-Atomen; d=0,7 nm',
         'Perfekt symmetrisch (Ikosaeder-Symmetrie); kann Moleküle einschließen (Endofullerene); Akzeptor in organischer PV',
         'Organische Solarzellen; Schmierstoff; Supraleitung (K₃C₆₀: T_c=18K); Medizin (ROS-Quencher)'],
        ['Quantenpunkte (QD)',
         'Halbleiter-NP; 2–10 nm; CdSe, CdS, InP',
         'Bandlücke hängt von Größe ab (Quantum-Confinement); enge Emissionsbanden; sehr hell',
         'Displays (QLED); Solarzellen; Bioimaging; LED-Beleuchtung'],
        ['Dendrimere',
         'Baumförmige Makromoleküle; ~1–10 nm',
         'Definierte Molekülgröße; viele Endgruppen an der Oberfläche; monodispers',
         'Drug-delivery (Tumor-targeting); Gen-Transfektion; Katalyse (Metallkomplexe innen)'],
        ['Zeolithe (nano)',
         'Poröse Alumosilikate; Poren: 0,3–1 nm',
         'Molekularsiebe (size-exclusion); saure Zentren; Ionentauscher; hohe interne Oberfläche (1000 m²/g)',
         'Katalytisches Cracken; Wasserweicher (Waschmittel); Gasadsorption/-trennung; Erdöl-Raffination'],
      ],
      highlight: [0, 4, 5, 6],
    })}

    <h3 class="lz-h3" style="margin-top:1.75rem;">Herstellungsmethoden von Nanopartikeln</h3>

    ${renderCompare({
      titleA: 'Top-Down-Methoden (Zerkleinerung)',
      titleB: 'Bottom-Up-Methoden (Aufbau)',
      listA: [
        'Ausgangsmaterial wird in immer kleinere Stücke zerteilt',
        'Kugelmühle (mechanisches Mahlen) → Nanopartikel aus Pulver',
        'Laserablation: Laserstrahl verdampft Metalloberfläche → NP in Lösung',
        'Lithografie (Halbleiterindustrie): Strukturen durch Lichtbelichtung',
        'Elektrochemisches Ätzen: poröse Si-Strukturen',
        'Vorteil: bekannte Ausgangsmaterialien · Nachteil: breite Größenverteilung, Verunreinigungen',
      ],
      listB: [
        'Atome/Moleküle werden zu Nanostrukturen zusammengesetzt',
        'Chemische Fällung: HAuCl₄ + Citrat → AuNP (Turkevich-Methode)',
        'Sol-Gel-Verfahren: Alkoxysilane → SiO₂-NP',
        'CVD (Chemical Vapor Deposition): Graphen/CNT-Wachstum auf Substrat',
        'Molekulares Selbst-Assemblieren: amphiphile Moleküle → Mizellen, Liposomen',
        'Vorteil: enge Größenverteilung, hohe Reinheit · Nachteil: skalierbar teuer',
      ],
    })}

    <h3 class="lz-h3" style="margin-top:1.75rem;">Chancen und Risiken der Nanotechnologie</h3>

    ${renderAccordion([
      {
        title: 'Nanotoxikologie — sind Nanopartikel gefährlich?',
        content: `<p class="lz-prose">Die biologische Wirkung von Nanopartikeln ist
                  noch nicht vollständig verstanden. Folgende Faktoren sind relevant:</p>
                  <p class="lz-prose"><strong>Bedenken:</strong><br>
                  ① Sehr kleine NP (<10 nm) können die Blut-Hirn-Schranke passieren<br>
                  ② Aufnahme durch Zellen (Endozytose) möglich; oxidativer Stress<br>
                  ③ AgNP: biologisch aktiv; silberne Ionen toxisch für Wasserorganismen<br>
                  ④ Einatmen von TiO₂-NP: möglicherweise kanzerogen (IARC: Gruppe 2B)<br>
                  ⑤ CNT: biopersistent, möglicherweise asbestähnliche Faserwirkung<br><br>
                  <strong>Regulierung:</strong>
                  EU-REACH regelt Nanomaterialien; Kennzeichnungspflicht für Lebensmittelzusätze (E171 = TiO₂-NP in EU verboten seit 2022).
                  ECHA: Nanoform-Registrierung separat.</p>`,
      },
      {
        title: 'Nanotechnologie in der Medizin — Drug Delivery und Diagnostik',
        content: `<p class="lz-prose"><strong>Liposomale Nanopartikel (LNP):</strong>
                  Lipidkugeln (50–200 nm) mit hydrophilem Inneren und Außenbereich.
                  Können Wirkstoffe einschließen und kontrolliert freisetzen.
                  mRNA-COVID-Impfstoffe (Pfizer/Moderna): mRNA in LNP verpackt →
                  schützt vor Abbau, ermöglicht Zelleintritt (Endozytose).<br><br>
                  <strong>Magnetische Hyperthermie:</strong>
                  Fe₃O₄-NP im Tumor → Wechselmagnetfeld → Erwärmung auf 42°C →
                  Tumorzellen sterben (Krebstherapie, klinische Studien).<br><br>
                  <strong>SERS-Diagnostik (Surface-Enhanced Raman Scattering):</strong>
                  Au- oder Ag-NP verstärken Raman-Signal bis zu 10¹⁴-fach →
                  Einzelmolekül-Nachweise → Krebs-Biomarker-Nachweis im Blut.</p>`,
      },
      {
        title: 'Nanomaterialien in Energie und Umwelt',
        content: `<p class="lz-prose"><strong>Photokatalyse mit TiO₂-NP:</strong><br>
                  TiO₂ + UV → e⁻ + h⁺ → •OH (Hydroxyl-Radikal) + O₂•⁻<br>
                  Abbau organischer Schadstoffe (Pestizide, Farbstoffe) im Wasser.<br>
                  Selbstreinigende Fensterscheiben: TiO₂-Beschichtung + Regenwasser → clean.<br><br>
                  <strong>Nanokomposite für Batterien:</strong><br>
                  Si-Nanopartikel in Graphenmatrix als Anodenmaterial: Si hat ~10× mehr
                  Li-Kapazität als Graphit, aber 300% Volumenänderung beim Laden →
                  Nanostrukturierung verhindert Partikelriss (nano-Si stabil!).<br><br>
                  <strong>Graphen-Membranen zur Wasseraufbereitung:</strong><br>
                  Einzelschichtiges Graphen mit definierten Nanoporen:
                  lässt H₂O durch, hält Salz-Ionen zurück → Entsalzung mit >100× weniger
                  Energie als Umkehrosmose (noch in Entwicklung).</p>`,
      },
    ])}

    ${renderInfobox({
      type: 'success', icon: 'fas fa-graduation-cap', title: 'Zusammenfassung — Nebengruppenelemente & Nanotechnologie',
      body: `<strong>d-Block:</strong> Variable OZ · Farbige Ionen (d-d-Übergänge; d⁰/d¹⁰: farblos) · Paramagnetismus · Katalytisch<br>
             <strong>Farbe:</strong> Ligandenfeld Δ bestimmt absorbierte Wellenlänge · spektrochemische Reihe: I⁻ < Br⁻ < Cl⁻ < F⁻ < H₂O < NH₃ < CN⁻<br>
             <strong>Wichtige Verbindungen:</strong> KMnO₄ (violett, Redoxtitration) · K₂Cr₂O₇ (orange, giftig) · CuSO₄ (blau) · FeCl₃ (gelbbraun)<br>
             <strong>Nanotechnologie:</strong> 1–100 nm · O/V-Verhältnis dominiert · Quanteneffekte<br>
             <strong>Wichtige Nano-Materialien:</strong> AuNP (Plasmon, Diagnostik) · Fe₃O₄ (MRT) · TiO₂ (Photokatalyse) · CNT (Festigkeit) · Graphen (2D, Leitfähigkeit)<br>
             <strong>Herstellung:</strong> Top-Down (Mahlen, Laser) vs. Bottom-Up (Fällung, CVD)<br>
             <strong>Risiken:</strong> Nanotoxikologie; Lungendeposition; AgNP-Ökotoxizität; reguliert durch REACH`,
    })}
  `; }

  init() {
    i18n.init();
    initScrollReveal();
    initInteractive(document);
    initTabs();
  }
}