// pages/projekte/lernzettel/faecher/chemie/themen/8/8-1.js
// Kapitel 8.1 — Hauptgruppenelemente und Verbindungen
// 8.1.1  Vorkommen und Darstellung der Elemente
// 8.1.2  Verbindungen der Hauptgruppenelemente

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
  { key: '811', icon: 'fas fa-mountain',    label: '8.1.1 Vorkommen & Darstellung' },
  { key: '812', icon: 'fas fa-flask',       label: '8.1.2 Verbindungen'            },
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
  return `<nav class="wim-tabs" role="tablist" id="tabs81">${nav}</nav>${panels}`;
}

function initTabs() {
  const nav = document.getElementById('tabs81');
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

export default class Chemie_8_1 {
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
          <i class="fas fa-chevron-right"></i><span>8.1</span>
        </div>
        <h1 class="lz-sub-title">Hauptgruppenelemente<br><em>Vorkommen, Darstellung und Verbindungen</em></h1>
        <p class="lz-sub-desc">
          Alkali- und Erdalkalimetalle · Halogene · Chalkogene ·
          Stickstoffgruppe · Wichtige Verbindungen und technische Prozesse
        </p>
        ${renderTags(['Kap. 8.1', 'Hauptgruppen', 'Halogene', 'Alkali', 'Anorganische Chemie', 'LK Chemie BW'])}
      </div>
    </section>

    <section class="lz-content-section">
      <div class="lz-section-wrap">
        ${buildWimHTML(k => k === '811' ? this._vorkommen() : this._verbindungen())}
      </div>
    </section>

    <section class="lz-content-section" style="padding:1.5rem 0 3rem;">
      <div class="lz-section-wrap">
        ${renderPageNav({
          prev: { label: '7.2 Redoxreaktionen',           link: `${BASE}/themen/7/7-2` },
          next: { label: '8.2 Nebengruppenelemente',       link: `${BASE}/themen/8/8-2` },
        }, BASE)}
      </div>
    </section>
    ${footerHTML(this.router)}
  `; }

  // ══════════════════════════════════════════════════════════
  // 8.1.1 — Vorkommen und Darstellung der Elemente
  // ══════════════════════════════════════════════════════════
  _vorkommen() { return `
    ${renderSubhead('8.1.1 — Vorkommen und Darstellung der Hauptgruppenelemente')}

    <h2 class="lz-h2">Überblick: Hauptgruppen im PSE</h2>
    <p class="lz-prose">
      Die Hauptgruppenelemente (Gruppen 1, 2 und 13–18) bilden den s- und p-Block
      des Periodensystems. Ihre Chemie wird durch die Valenzelektronenkonfiguration
      und die zunehmende Metallizität von rechts nach links und von oben nach unten bestimmt.
    </p>

    ${renderTable({
      headers: ['Gruppe', 'Name', 'Valenz-konfiguration', 'Typische Oxide', 'Metall oder Nichtmetall', 'Darstellung der Elemente'],
      rows: [
        ['1',  'Alkalimetalle',     'ns¹',       'M₂O, M₂O₂, MO₂', 'Metall (weich, reaktiv)', 'Schmelzflusselektrolyse (Na: Downs-Zelle); Li durch Elektrolyse LiCl-Schmelze'],
        ['2',  'Erdalkalimetalle',  'ns²',       'MO, M(OH)₂',      'Metall',                  'Mg: Elektrolyse MgCl₂-Schmelze (Seewasser); Ca: Elektrolyse CaCl₂-Schmelze'],
        ['13', 'Borgruppe',         'ns²np¹',    'M₂O₃ (B,Al)',     'B: Halbmetall; Al: Metall','Al: Hall-Héroult (Elektrolyse Al₂O₃ in Kryolith); B: Reduktion B₂O₃ mit Mg'],
        ['14', 'Kohlenstoffgruppe', 'ns²np²',    'CO₂, SiO₂, GeO₂', 'C,Si: Nichtmetall/HM; Sn,Pb: Metall','Si: SiO₂ + 2C → Si + 2CO (Carbothermie); Hochreinigung: Zonenraffination'],
        ['15', 'Stickstoffgruppe',  'ns²np³',    'N₂O₃–N₂O₅, P₄O₁₀','N,P: Nichtmetall; As,Sb: HM; Bi: Metall','N₂: Luftzerlegung (Linde-Verfahren); P: Elektroofen aus Ca₃(PO₄)₂+C+SiO₂'],
        ['16', 'Chalkogene',        'ns²np⁴',    'SO₂, SO₃, SeO₂',  'O,S,Se: Nichtmetall; Te: HM; Po: Metall','O₂: Luftzerlegung; S: Frasch-Verfahren (Schwefelabbau aus Lagerstätten) oder Claus-Prozess'],
        ['17', 'Halogene',          'ns²np⁵',    'X₂O, HX',         'Nichtmetalle',            'F₂: Elektrolyse HF in KF·2HF (kein chemi. Weg!); Cl₂: Chloralkali-Elektrolyse; Br₂: Oxidation Br⁻ mit Cl₂; I₂: Oxidation I⁻ mit Cl₂'],
        ['18', 'Edelgase',          'ns²np⁶',    'XeF₂, XeO₃',      'Gase (einatomig)',        'He,Ne,Ar,Kr: Luftzerlegung; Rn: radioaktiver Zerfall von Ra; He auch aus Erdgas'],
      ],
      highlight: [0, 6, 7],
    })}

    <h3 class="lz-h3" style="margin-top:1.75rem;">Alkalimetalle (Gruppe 1) — Vorkommen und Gewinnung</h3>

    ${renderTable({
      headers: ['Element', 'Hauptvorkommen', 'Darstellungsverfahren', 'Besonderheit'],
      rows: [
        ['Li', 'Spodumen LiAl(Si₂O₆); Lithiophillit; Sole (Chile, Australien)', 'Elektrolyse LiCl-Schmelze (mit KCl-Zusatz, Fp. 450°C)', 'Wachsende Bedeutung für Li-Ionen-Akkus; ~400 000 t/Jahr'],
        ['Na', 'NaCl (Steinsalz, Meerwasser 3,5%); Na₂SO₄; Na₂CO₃ (Trona)', 'Downs-Zelle: Elektrolyse NaCl-Schmelze + CaCl₂ (Fp. 590°C) → Na + Cl₂', 'Industriell wichtigstes Alkalimetall; ~500 000 t/Jahr'],
        ['K', 'Sylvin KCl; Carnallit KMgCl₃·6H₂O; Kalilauge', 'Thermische Reduktion: KCl + Na → NaCl + K (Gleichgewicht K entzogen durch Destillation)', 'Kein Elektrolyse-Weg wegen niedrigem Kp(K) = 760°C'],
        ['Rb,Cs', 'Lepidolith; Pollucit (CsAlSi₂O₆)', 'Reduktion mit Ca; Dest. aus Erzen', 'Cs: Photoeffekt; Cs-Atomuhren (Zeitstandard)'],
        ['Fr', 'Zerfallsprodukt von Ac-227', 'Natürlich (t½ = 22 min)', 'Radioaktiv; kaum untersucht'],
      ],
      highlight: [0, 1],
    })}

    <h3 class="lz-h3" style="margin-top:1.75rem;">Halogene (Gruppe 17) — Vorkommen, Gewinnung und Reaktivität</h3>

    ${renderTable({
      headers: ['Halogen', 'Aggregatzustand (25°C)', 'Farbe', 'Vorkommen', 'Darstellung', 'E° [V]'],
      rows: [
        ['F₂', 'Gas',        'Hellgelb',     'CaF₂ (Flussspat), Na₃AlF₆ (Kryolith), Fluorapatit Ca₅(PO₄)₃F', 'Nur durch Elektrolyse! KF·2HF-Schmelze (kein Oxidationsmittel stärker als F₂)', '+2,87'],
        ['Cl₂','Gas',        'Gelbgrün',     'NaCl (Steinsalz, Meerwasser), KCl, Sylvin', 'Chloralkali-Elektrolyse (NaCl-Lösung); Nebenprod. der Na-Darstellung', '+1,36'],
        ['Br₂','Flüssig',    'Rotbraun',     'MgBr₂ (Meerwasser, Salzseen, Solen)', 'Oxidation: Cl₂ + 2Br⁻ → 2Cl⁻ + Br₂; Meerwasserextraktion', '+1,07'],
        ['I₂', 'Feststoff',  'Schwarz-grau', 'NaIO₃ (Chilesalpeter), Schilddrüse, Meeresalgen', 'Cl₂ + 2I⁻ → 2Cl⁻ + I₂; auch aus NaIO₃ mit SO₂: 2IO₃⁻+5SO₂+4H₂O→I₂+5SO₄²⁻+8H⁺', '+0,54'],
        ['At', 'Feststoff?', 'Schwarz?',     'Natürlich kaum vorhanden (t½ ≈ 8 h)', 'Kernreaktion: ²⁰⁹Bi + ⁴He → ²¹¹At + 2n', '+0,3?'],
      ],
      highlight: [0, 1],
    })}

    ${renderInfobox({
      type: 'blue', icon: 'fas fa-lightbulb', title: 'Reaktivitätstrend der Halogene',
      body: `<strong>Oxidationskraft:</strong> F₂ > Cl₂ > Br₂ > I₂ (abnehmend mit steigendem Z)<br>
             Jedes Halogen kann das nächstschwerere aus seinen Salzen verdrängen:<br>
             Cl₂ + 2Br⁻ → 2Cl⁻ + Br₂ ✓ (E° = +1,36 − (+1,07) = +0,29 V → spontan)<br>
             Br₂ + 2Cl⁻ → 2Br⁻ + Cl₂ ✗ (E° < 0 → nicht spontan)<br><br>
             <strong>HX-Säurestärke:</strong> HF schwach (pK_s=3,45); HCl > HBr > HI stark<br>
             Gegenintuitiv bei F: F–H-Bindung kurz und stark → schlechte Dissoziation.`,
    })}

    <h3 class="lz-h3" style="margin-top:1.75rem;">Stickstoff und Phosphor (Gruppe 15) — Vorkommen und Darstellung</h3>

    ${renderTable({
      headers: ['Element', 'Anteil Erdkruste/Atmosphäre', 'Vorkommen (Mineralien)', 'Darstellung', 'Modifikationen'],
      rows: [
        ['N₂', '78,1 Vol.% Atmosphäre', 'NaNO₃ (Chilesalpeter); KNO₃ (Kalisalpeter); in Proteinen und DNA', 'Linde-Verfahren: fraktionierte Destillation flüssiger Luft (Kp(N₂)=−196°C, Kp(O₂)=−183°C)', 'Nur N₂ (Molekül mit Dreifachbindung); N≡N: 945 kJ/mol'],
        ['P',  '0,1% Erdkruste',         'Ca₃(PO₄)₂ (Phosphorit, Apatit); Fluorapatit Ca₅(PO₄)₃F', 'Elektrothermisch: Ca₃(PO₄)₂ + 5C + 3SiO₂ → 3CaSiO₃ + 5CO + P₄↑ · Kondensation → weißer P', 'Weißer P (P₄, sehr reaktiv, giftig), roter P (amorph, stabiler), schwarzer P (stabil, Halbleiter)'],
      ],
    })}

    <h3 class="lz-h3" style="margin-top:1.75rem;">Schwefel (Gruppe 16) — Vorkommen und Gewinnung</h3>

    ${renderAccordion([
      {
        title: 'Frasch-Verfahren — Schwefelgewinnung aus Lagerstätten',
        content: `<p class="lz-prose">Gediegener Schwefel in unterirdischen Lagerstätten
                  (Mississippi, Texas, Polen): wird durch drei konzentrische Rohre erschlossen.</p>
                  <p class="lz-prose">① Äußeres Rohr: Heißwasser (150–160°C) einpressen → Schwefel schmilzt (Smp.=119°C)<br>
                  ② Mittleres Rohr: Pressluft einblasen → Schwefelschaum aufsteigt<br>
                  ③ Inneres Rohr: Schwefel-Wasser-Gemisch aufsteigt (Aufwärtsförderung)<br><br>
                  Reinheit des Produkts: >99,5% S. Bedeutung heute: Rohöl-Entschwefelung
                  (Claus-Prozess) liefert mehr S als Frasch.</p>`,
      },
      {
        title: 'Claus-Prozess — Schwefelrückgewinnung aus H₂S',
        content: `<p class="lz-prose">H₂S entsteht bei der Entschwefelung von Erdgas und Rohöl.
                  Der <strong>Claus-Prozess</strong> wandelt ihn zu elementarem Schwefel um:</p>
                  <p class="lz-prose">Stufe 1 (thermisch, 1200°C): H₂S + ½O₂ → S + H₂O (Verbrennung)<br>
                  H₂S + 1½O₂ → SO₂ + H₂O (1/3 oxidiert zu SO₂)<br>
                  Stufe 2 (katalytisch, 200–300°C): 2H₂S + SO₂ → 3S + 2H₂O (auf Al₂O₃/TiO₂)<br>
                  Ausbeute: >98% S. Weltproduktion Schwefel: ~70 Mio. t/Jahr.</p>`,
      },
    ])}
  `; }

  // ══════════════════════════════════════════════════════════
  // 8.1.2 — Verbindungen der Hauptgruppenelemente
  // ══════════════════════════════════════════════════════════
  _verbindungen() { return `
    ${renderSubhead('8.1.2 — Verbindungen der Hauptgruppenelemente')}

    <h3 class="lz-h3">Verbindungen der Alkalimetalle</h3>

    ${renderTable({
      headers: ['Verbindungsklasse', 'Beispiele', 'Struktur / Eigenschaften', 'Darstellung / Verwendung'],
      rows: [
        ['Oxide',       'Na₂O, K₂O (normale Oxide)', 'Ionengitter · stark basisch mit H₂O (M₂O+H₂O→2MOH)', 'Verbrennung in wenig O₂; techn. wenig bedeutend'],
        ['Peroxide',    'Na₂O₂, K₂O₂ (Peroxide, O₂²⁻)', 'O₂²⁻: OZ(O)=−1; starke Oxidationsmittel; Na₂O₂+H₂O→2NaOH+H₂O₂', 'Verbrennung in viel O₂; Bleichmittel; O₂-Erzeuger'],
        ['Superoxide',  'KO₂, RbO₂, CsO₂ (O₂⁻)',        'O₂⁻ (Superoxid-Ion); paramagnetisch; KO₂+H₂O→KOH+H₂O₂+O₂↑', 'Atemschutzgeräte: KO₂ liefert O₂'],
        ['Hydroxide',   'NaOH, KOH (Natron-/Kalilauge)', 'Stark basisch; gute Löslichkeit; Schichten aus OH⁻ und Na⁺', 'Seife, Papier, Aluminium; Chloralkali-Elektrolyse'],
        ['Carbonate',   'Na₂CO₃ (Soda), K₂CO₃ (Pottasche)', 'CO₃²⁻-Gitter; Na₂CO₃ aus Solvay-Prozess', 'Glas, Waschmittel, Wasser-Enthärtung (Soda fällt CaCO₃)'],
        ['Hydrogencarbonate','NaHCO₃ (Backnatron)', 'HCO₃⁻; amphoter; zersetzt sich bei T: 2NaHCO₃→Na₂CO₃+H₂O+CO₂', 'Backtriebmittel, Antazida, Feuerlöscher'],
        ['Halogenide',  'NaCl, KBr, LiCl', 'Ionengitter (NaCl-Typ); gut löslich', 'Steinsalz; LiCl in Li-Batterie; KBr in Medizin'],
        ['Nitrate',     'NaNO₃ (Chilesalpeter), KNO₃ (Kalisalpeter)', 'Starke Oxidationsmittel; NO₃⁻; schmelzen ohne Zersetzung', 'Dünger; Schwarzpulver (KNO₃+C+S); Sprengstoffe'],
      ],
      highlight: [3, 5],
    })}

    <h3 class="lz-h3" style="margin-top:1.75rem;">Verbindungen des Calciums (Erdalkalimetall)</h3>

    ${renderTable({
      headers: ['Verbindung', 'Formel', 'Darstellung', 'Eigenschaften', 'Technische Verwendung'],
      rows: [
        ['Calciumoxid (Branntkalk)', 'CaO', 'CaCO₃ →(>840°C) CaO + CO₂ (Kalkbrennen)', 'Weißes, hartes Pulver; exotherm mit H₂O (Löschwärme 64 kJ/mol)', 'Zement, Mörtel, Stahlerzeugung, Wasseraufbereitung'],
        ['Calciumhydroxid (Kalkhydrat, Löschkalk)', 'Ca(OH)₂', 'CaO + H₂O → Ca(OH)₂ (stark exotherm)', 'Weiß, mäßig löslich (Kalkwasser), stark basisch pH~12', 'Mörtel, CO₂-Nachweis (Kalkwassertrübung), Bodenverbesserung, Rauchgasentschwefelung'],
        ['Calciumcarbonat', 'CaCO₃', 'Natürlich (Kalkstein, Marmor, Kreide, Muscheln)', 'Weiß, wasserunlöslich, löst sich in CO₂-haltigem Wasser', 'Bauwerkstoff (Marmor), Kreide, Zahncreme (Schleifmittel), Papier'],
        ['Calciumsulfat (Gips)', 'CaSO₄·2H₂O', 'Natürlich; oder SO₃+CaCO₃→CaSO₄+CO₂ (REA-Gips)', 'Abbinden: CaSO₄·½H₂O + 1½H₂O → CaSO₄·2H₂O', 'Gipskarton, Medizin (Gipsverband), Bauindustrie; REA-Gips aus Rauchgasentschwf.'],
        ['Calciumchlorid', 'CaCl₂', 'Nebenprodukt Solvay-Prozess; oder CaCO₃+2HCl', 'Hygroskopisch; sehr gut löslich; Lösungswärme stark', 'Entfeuchtungsmittel, Streumittel (Enteisen), Tiefkühlsole'],
        ['Calciumphosphat', 'Ca₃(PO₄)₂', 'Natürlich (Knochen, Apatit); Ausfällen aus Ca²⁺+PO₄³⁻', 'Wasserunlöslich; Hauptmineral in Knochen und Zähnen', 'Dünger (Superphosphat: Ca₃(PO₄)₂+H₂SO₄→Ca(H₂PO₄)₂+CaSO₄); Biomaterial'],
      ],
      highlight: [0, 1, 3],
    })}

    <h3 class="lz-h3" style="margin-top:1.75rem;">Stickstoffverbindungen — Oxidationsstufen und Chemie</h3>

    ${renderTable({
      headers: ['Verbindung', 'OZ(N)', 'Formel', 'Eigenschaften', 'Bedeutung'],
      rows: [
        ['Ammoniak',         '−3', 'NH₃',   'Farbloses Gas, stechend; Kp=−33°C; basisch; gut wasserlöslich', 'Haber-Bosch (150 Mio. t/Jahr); Kühlmittel; Basis aller N-Verbindungen'],
        ['Hydrazin',         '−2', 'N₂H₄',  'Flüssig; Reduktionsmittel; toxisch, canceroßen', 'Raketentreibstoff; Korrosionsschutz (Kesselwasser)'],
        ['Distickstoffoxid', '+1', 'N₂O',   'Lachgas; Kp=−88,5°C; Narkotikum; Treibmittel', 'Lachgasanästhesie (historisch); Fahrzeugleistungssteigerung (NOS)'],
        ['Stickstoffmonoxid','+2', 'NO',    'Farbloses Gas; radikal (11 VE!); E°=+90 kJ/mol; reagiert rasch mit O₂→NO₂', 'Zwischenprodukt Ostwald-Verfahren; Neurotransmitter (NO) im Körper!'],
        ['Distickstofftriox.','+3','N₂O₃',  'Blau; instabil; salpetrige Anhydrid → HNO₂', 'Selten; Forschung'],
        ['Stickstoffdioxid', '+4', 'NO₂',   'Braun-rot; Radikal; stechend; giftig; 2NO₂⇌N₂O₄', 'Ostwald-Verfahren (NO₂→HNO₃); Luftverschmutzung (Diesel)'],
        ['Salpetersäure',    '+5', 'HNO₃',  'Starke Säure; starkes Oxidationsmittel; gelb (NO₂-Verunrein.); Kp=83°C', 'Ostwald-Verfahren; Dünger (NH₄NO₃); Sprengstoffe (TNT, Nitroglycerin); Königswasser'],
      ],
      highlight: [0, 3, 6],
    })}

    ${renderInfobox({
      type: '', icon: 'fas fa-industry', title: 'Ostwald-Verfahren — Salpetersäuresynthese',
      body: `Ausgangsstoff: NH₃ (aus Haber-Bosch)<br><br>
             <strong>Schritt 1 (katalytisch, 900°C, Pt/Rh-Netz):</strong><br>
             4NH₃ + 5O₂ → 4NO + 6H₂O (ΔH° = −906 kJ/mol)<br><br>
             <strong>Schritt 2 (Kühlung):</strong><br>
             2NO + O₂ → 2NO₂<br><br>
             <strong>Schritt 3 (Absorption):</strong><br>
             3NO₂ + H₂O → 2HNO₃ + NO (NO wird zurückgeführt)<br><br>
             Produkt: 50–65% HNO₃; durch Destillation auf 68% konzentrierbar
             (azeotropes Gemisch). Fuming Nitric Acid (>86%): Raketenoxidator.`,
    })}

    <h3 class="lz-h3" style="margin-top:1.75rem;">Schwefelverbindungen</h3>

    ${renderTable({
      headers: ['Verbindung', 'OZ(S)', 'Formel', 'Darstellung', 'Eigenschaften / Anwendung'],
      rows: [
        ['Schwefelwasserstoff', '−2', 'H₂S',   'Fäulnis; S+H₂ bei T; FeS+HCl→FeCl₂+H₂S', 'Giftig! (wie HCN); schwache Säure pK_s=7,02; Kipp-Apparat; Analytik (Trennungsgang)'],
        ['Schwefeldioxid',     '+4', 'SO₂',   'S+O₂ oder CaSO₄-Reduktion; Röstprozesse', 'Stechend, giftig; Konservierungsmittel (E220 in Wein); Bleichmittel; Kontaktverf.'],
        ['Schwefelsäure',      '+6', 'H₂SO₄', 'Kontaktverfahren: SO₂+½O₂→SO₃→H₂SO₄', 'Stärkste Säure (2-protonig); hygroskopisch; oxidierend (konz.); Doppelkontakt'],
        ['Natriumsulfat',      '+6', 'Na₂SO₄', 'Glaubersalz·10H₂O natürlich; oder NaCl+H₂SO₄', 'Waschmittelzusatz (Trennmittel); Glasherstellung; Na₂SO₄·10H₂O: Latentwärmespeicher'],
        ['Natriumthiosulfat',  '+2', 'Na₂S₂O₃','Na₂SO₃+S→Na₂S₂O₃ (oder Nebenprodukt Papier)', 'Fixierbad Fotografie; Iodometrie; Vergiftungsantidot (Cyanid: S₂O₃²⁻+CN⁻→SCN⁻)'],
      ],
      highlight: [0, 2],
    })}

    <h3 class="lz-h3" style="margin-top:1.75rem;">Halogenverbindungen</h3>

    ${renderAccordion([
      {
        title: 'Halogenwasserstoffe HX — Eigenschaften und Säurestärke',
        content: `${renderTable({
          headers: ['HX', 'Kp [°C]', 'pK_s in H₂O', 'Bindungslänge [pm]', 'Bindungsenergie [kJ/mol]', 'Charakteristikum'],
          rows: [
            ['HF', '+19,5', '3,45 (schwach!)', '92', '569', 'H-Brücken → assoziiert; HF-Glas-Ätzmittel; Flusssäure corrosiv'],
            ['HCl','-85,0', '<−6 (stark)',    '127', '431', 'Stechend; in Magen (Salzsäure); Konz. 37% (rauchend)'],
            ['HBr','-67,0', '<−8 (stark)',    '141', '366', 'Stärker als HCl; Bromwasserstoff; kaum techn. bedeutung'],
            ['HI', '-35,4', '<−9 (stark)',    '161', '297', 'Stärkste Säure der Reihe; reduzierend (I⁻ leicht oxidierbar)'],
          ],
        })}
        <p class="lz-prose"><strong>Säurestärke-Paradoxon HF:</strong>
        F ist am elektronegativsten → man könnte stärkste Säure erwarten.
        Aber: H–F-Bindung ist die stärkste aller H–X-Bindungen (569 kJ/mol) →
        schlechte Dissoziation in H₂O → schwache Säure. Außerdem:
        HF bildet stabile HF₂⁻-Ionen (F⁻ + HF) mit K=1000 L/mol → effektive Pufferung.</p>`,
      },
      {
        title: 'Disproportionierung von Cl₂ in Wasser (Chlorwasser)',
        content: `<p class="lz-prose"><strong>Reaktion:</strong> Cl₂ + H₂O ⇌ HCl + HClO (K_c ≈ 4·10⁻⁴)</p>
                  <p class="lz-prose">Cl₂ wird gleichzeitig oxidiert (→ HClO, OZ: +1) und
                  reduziert (→ HCl, OZ: −1): <strong>Disproportionierung</strong>.</p>
                  <p class="lz-prose"><strong>In Lauge (stärker):</strong>
                  Cl₂ + 2NaOH → NaCl + NaOCl + H₂O (K ≈ 7·10¹⁵ — nahezu vollständig)<br>
                  NaOCl (Natriumhypochlorit) = aktiver Bestandteil von Chlorbleichlauge.</p>
                  <p class="lz-prose"><strong>Bei Erwärmen / hoher T:</strong>
                  3Cl₂ + 6NaOH → 5NaCl + NaClO₃ + 3H₂O<br>
                  NaClO₃ (Natriumchlorat) entsteht → Herbizid; Streichholzoxidationsmittel.</p>`,
      },
      {
        title: 'Interhalogenverbindungen — Verbindungen der Halogene untereinander',
        content: `<p class="lz-prose">Halogene können miteinander Verbindungen bilden
                  (das leichtere ist der elektronegativer Partner):</p>
                  ${renderTable({
                    headers: ['Verbindung', 'Struktur (VSEPR)', 'OZ größeres Halogen', 'Eigenschaften'],
                    rows: [
                      ['ClF',   'Linear',            '+1', 'Reaktiver als Cl₂ und F₂'],
                      ['BrF₃',  'T-Form (3 BP, 2 FEP)', '+3', 'Fließt wie Wasser; löst Metalle'],
                      ['IF₅',   'Quadrat.-pyramidal', '+5', 'Fluorierungsmittel'],
                      ['IF₇',   'Pentagonal-bipyramidal', '+7', 'Stärkstes Fluorierungsmittel'],
                      ['ClF₃',  'T-Form',             '+3', 'Ätzend; Raketenoxidator'],
                    ],
                  })}`,
      },
    ])}

    ${renderInfobox({
      type: 'success', icon: 'fas fa-graduation-cap', title: 'Zusammenfassung Hauptgruppenelemente',
      body: `<strong>Reaktivitätstrend:</strong> Metallizität nimmt ↓ und ← im PSE zu<br>
             <strong>Halogene:</strong> Oxidationskraft F₂>Cl₂>Br₂>I₂ · Säurestärke HF<HCl<HBr<HI<br>
             <strong>Alkalimetalle:</strong> Darstellung durch Schmelzflusselektrolyse · starke RM<br>
             <strong>Stickstoff:</strong> −3 (NH₃) bis +5 (HNO₃); N₂ sehr stabil (945 kJ/mol)<br>
             <strong>Schwefel:</strong> Frasch-Verfahren/Claus-Prozess; −2 (H₂S) bis +6 (H₂SO₄)<br>
             <strong>Calcium:</strong> CaO/Ca(OH)₂/CaCO₃/CaSO₄ — alle bautechnisch wichtig`,
    })}
  `; }

  init() {
    i18n.init();
    initScrollReveal();
    initInteractive(document);
    initTabs();
  }
}