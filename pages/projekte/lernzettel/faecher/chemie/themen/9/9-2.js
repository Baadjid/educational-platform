// pages/projekte/lernzettel/faecher/chemie/themen/9/9-2.js
// Kapitel 9.2 — Aliphatische Kohlenwasserstoffe
// 9.2.1  Nomenklatur aliphatischer Kohlenwasserstoffe
// 9.2.2  Gesättigte kettenförmige Kohlenwasserstoffe
// 9.2.3  Ungesättigte kettenförmige Kohlenwasserstoffe

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
  { key: '921', icon: 'fas fa-signature',    label: '9.2.1 Nomenklatur'               },
  { key: '922', icon: 'fas fa-minus',        label: '9.2.2 Alkane (gesättigt)'        },
  { key: '923', icon: 'fas fa-not-equal',    label: '9.2.3 Alkene & Alkine (ungesätt.)'},
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
  return `<nav class="wim-tabs" role="tablist" id="tabs92">${nav}</nav>${panels}`;
}

function initTabs() {
  const nav = document.getElementById('tabs92');
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

export default class Chemie_9_2 {
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
          <i class="fas fa-chevron-right"></i><span>Kapitel 9</span>
          <i class="fas fa-chevron-right"></i><span>9.2</span>
        </div>
        <h1 class="lz-sub-title">Aliphatische Kohlenwasserstoffe<br><em>Alkane, Alkene und Alkine</em></h1>
        <p class="lz-sub-desc">
          IUPAC-Nomenklatur · Homologe Reihen · Radikalische Halogenierung ·
          Elektrophile Addition · Markovnikov · Diels-Alder
        </p>
        ${renderTags(['Kap. 9.2', 'Alkane', 'Alkene', 'Alkine', 'Halogenierung', 'LK Chemie BW'])}
      </div>
    </section>

    <section class="lz-content-section">
      <div class="lz-section-wrap">
        ${buildWimHTML(k => {
          if (k === '921') return this._nomenklatur();
          if (k === '922') return this._alkane();
          if (k === '923') return this._ungesaettigt();
          return '';
        })}
      </div>
    </section>

    <section class="lz-content-section" style="padding:1.5rem 0 3rem;">
      <div class="lz-section-wrap">
        ${renderPageNav({
          prev: { label: '9.1 Grundlagen org. Chemie',   link: `${BASE}/themen/9/9-1` },
          next: { label: '9.3 Aromatische KW',            link: `${BASE}/themen/9/9-3` },
        }, BASE)}
      </div>
    </section>
    ${footerHTML(this.router)}
  `; }

  _nomenklatur() { return `
    ${renderSubhead('9.2.1 — Nomenklatur aliphatischer Kohlenwasserstoffe')}

    <h3 class="lz-h3">Alkane — gesättigte Kohlenwasserstoffe</h3>

    ${renderTable({
      headers: ['Name', 'n(C)', 'Formel', 'Schmp. [°C]', 'Sdp. [°C]', 'Zustand (25°C)'],
      rows: [
        ['Methan',     '1',  'CH₄',      '−182,5','−161,5','Gas'],
        ['Ethan',      '2',  'C₂H₆',     '−183,3','−88,6', 'Gas'],
        ['Propan',     '3',  'C₃H₈',     '−187,7','−42,1', 'Gas'],
        ['Butan',      '4',  'C₄H₁₀',    '−138,3','−0,5',  'Gas (LPG: flüssig unter Druck)'],
        ['Pentan',     '5',  'C₅H₁₂',    '−129,7','+36,1', 'Flüssig'],
        ['Hexan',      '6',  'C₆H₁₄',    '−95,3', '+68,7', 'Flüssig'],
        ['Heptan',     '7',  'C₇H₁₆',    '−90,6', '+98,4', 'Flüssig'],
        ['Oktan',      '8',  'C₈H₁₈',    '−56,8', '+125,7','Flüssig'],
        ['Nonan',      '9',  'C₉H₂₀',    '−53,5', '+150,8','Flüssig'],
        ['Decan',     '10',  'C₁₀H₂₂',   '−29,7', '+174,1','Flüssig'],
        ['Eicosan',   '20',  'C₂₀H₄₂',   '+36,7', '+343',  'Wachs'],
        ['Triacontan','30',  'C₃₀H₆₂',   '+65,8', '++450', 'Fest'],
      ],
      highlight: [4, 7],
    })}

    <h3 class="lz-h3" style="margin-top:1.75rem;">IUPAC-Nomenklatur für Alkane — Schritt für Schritt</h3>

    ${renderTable({
      headers: ['Schritt', 'Regel', 'Anwendungsbeispiel'],
      rows: [
        ['1. Hauptkette', 'Längste ununterbrochene C-Kette = Grundname', '2-Methylbutan: Hauptkette = 4 C = Butan (nicht 3 C)'],
        ['2. Nummerierung', 'Kette so nummerieren, dass Substituenten niedrigste Lokanten', '2-Methylbutan: Methyl hat Nummer 2 (nicht 3)'],
        ['3. Substituenten', 'Alle Alkylgruppen benennen: Methyl, Ethyl, Propyl, Isopropyl, tert-Butyl …', '2,3-Dimethylbutan: zwei Methylgruppen an C2 und C3'],
        ['4. Alphabetisch', 'Mehrere verschiedene Substituenten alphabetisch ordnen (Präfixe di-, tri- zählen nicht!)', '3-Ethyl-2-methylpentan (nicht 2-methyl-3-ethyl!)'],
        ['5. Mehrfachbindungen', '-en (Doppelb.), -in (Dreifachb.) mit niedrigstem Lokanten', '1-Buten (CH₂=CH-CH₂-CH₃); 2-Butin (CH₃-C≡C-CH₃)'],
        ['6. Verzweigungen', 'Iso- und Neopräfixe historisch; IUPAC bevorzugt systematisch', 'Isobutan = 2-Methylpropan; Neopenta = 2,2-Dimethylpropan'],
      ],
    })}

    <h3 class="lz-h3" style="margin-top:1.75rem;">Wichtige Alkylgruppen</h3>

    ${renderTable({
      headers: ['Gruppe', 'Abkürzung', 'Struktur', 'Entstehung durch', 'Beispiel im Komplex'],
      rows: [
        ['Methyl',      'Me',   '–CH₃',                      'Methan − H',                 '2-Methylbutan'],
        ['Ethyl',       'Et',   '–CH₂CH₃',                   'Ethan − H',                  '3-Ethylpentan'],
        ['n-Propyl',    'n-Pr', '–CH₂CH₂CH₃',               'Propan − H (von Kette)',      'n-Propylgruppe'],
        ['Isopropyl',   'i-Pr', '–CH(CH₃)₂',                 'Propan − H (vom mittleren C)','2-Isopropylpentan = 2-(propan-2-yl)pentan'],
        ['n-Butyl',     'n-Bu', '–CH₂CH₂CH₂CH₃',             'Butan − H (von Kettenende)', '—'],
        ['sec-Butyl',   's-Bu', '–CH(CH₃)CH₂CH₃',            'Butan − H (von C2)',          '—'],
        ['Isobutyl',    'i-Bu', '–CH₂CH(CH₃)₂',              'Isobutan − H (von CH₂)',      '—'],
        ['tert-Butyl',  't-Bu', '–C(CH₃)₃',                  'Isobutan − H (vom quartären C)','Neopentyl = 2,2-Dimethylpropyl'],
        ['Vinyl',       'Vi',   '–CH=CH₂',                   'Ethen − H',                  'Vinylchlorid = Chlorethen'],
        ['Allyl',       '—',    '–CH₂–CH=CH₂',               'Propen − H (vom CH₂)',        'Allylchlorid = 3-Chlor-1-propen'],
        ['Phenyl',      'Ph',   '–C₆H₅',                     'Benzol − H',                  'Phenylgruppe am aliphat. Substrat'],
        ['Benzyl',      'Bn',   '–CH₂–C₆H₅',                 'Toluol − H (vom CH₃)',        'Benzylchlorid = (Chlormethyl)benzol'],
      ],
      highlight: [3, 7, 9],
    })}

    <h3 class="lz-h3" style="margin-top:1.75rem;">Alkene und Alkine — E/Z-Nomenklatur</h3>

    ${renderTable({
      headers: ['Verbindung', 'IUPAC-Name', 'E/Z', 'Besonderheit'],
      rows: [
        ['CH₂=CH₂',              'Ethen (Ethylen)',              '—',          'Keine E/Z (identische Substituenten)'],
        ['CH₃–CH=CH₂',           'Propen (Propylen)',            '—',          'Keine E/Z (ein Ende = CH₂)'],
        ['CH₃–CH=CH–CH₃',        '(E)-But-2-en; (Z)-But-2-en',  'E/Z möglich','(E) = trans; (Z) = cis (CH₃ Priorität > H)'],
        ['CH₂=CH–Cl',            'Chlorethen (Vinylchlorid)',     '—',          'PVC-Monomer; CH₂=CH₂ + Cl₂ → Addition'],
        ['CH₂=C(CH₃)₂',          '2-Methylpropen (Isobutylen)',  '—',          'Keine E/Z (zwei gleiche CH₃ an einem C)'],
        ['CH≡CH',                 'Ethin (Acetylen)',             '—',          'Keine E/Z bei Alkinen'],
        ['CH₃–C≡C–H',             'Propin (Methylacetylen)',      '—',          'Terminales Alkin; C–H sehr acide (pK_s≈25)'],
        ['(CH₃)₂C=CHCH₂CH₂CH=C(CH₃)₂', 'Limonen (Beispiel)','—',            'Terpene: Isoprenprinzip'],
      ],
      highlight: [2, 5],
    })}
  `; }

  _alkane() { return `
    ${renderSubhead('9.2.2 — Gesättigte kettenförmige Kohlenwasserstoffe (Alkane)')}

    <h3 class="lz-h3">Struktur und Eigenschaften der Alkane</h3>
    <p class="lz-prose">
      Alkane (Paraffine) sind gesättigte Kohlenwasserstoffe mit der allgemeinen
      Formel <strong>C_nH_{2n+2}</strong> (offenkettig) oder <strong>C_nH_{2n}</strong>
      (Cycloalkane). Alle C-Atome sind sp³-hybridisiert (Tetraeder, 109,5°).
      Alle Bindungen sind unpolar oder sehr schwach polar (ΔEN(C–H) ≈ 0,35).
    </p>

    ${renderMerkboxGrid([
      {
        icon: 'fas fa-oil-can',
        title: 'Physikalische Eigenschaften',
        text: `Siedepunkte steigen regelmäßig mit der Kettenlänge (+20–30°C pro CH₂).
               Verzweigung senkt Sdp. (weniger London-Kontaktfläche; kugeligere Form).
               Unpolar → wasserunlöslich; lösen sich in unpolaren LM (Benzin, Hexan).
               Bei RT: C₁–C₄ Gase, C₅–C₁₆ Flüssigkeiten, ≥C₁₇ Feststoffe (Wachse).`,
      },
      {
        icon: 'fas fa-fire',
        title: 'Verbrennung — wichtigste Reaktion',
        text: `Vollständige Verbrennung: CₙH_{2n+2} + (3n+1)/2 O₂ → n CO₂ + (n+1) H₂O
               Methan: CH₄ + 2O₂ → CO₂ + 2H₂O (ΔH° = −890 kJ/mol)
               Unvollständig: CO-Bildung (Kohlenmonoxid, giftig!) bei O₂-Mangel.
               Verbrennung energiereicher Primärtreibstoff: Benzin, Diesel, Kerosin, Erdgas.`,
      },
      {
        icon: 'fas fa-shield-alt',
        title: 'Chemische Stabilität (Inertheit)',
        text: `Keine reaktiven Gruppen → wenig reaktiv. Säuren, Basen, Oxidationsmittel,
               Reduktionsmittel greifen nicht an.
               „Paraffine" = lat. parum affinis = wenig verwandt (mit Reaktanden).
               Reaktiv nur unter drastischen Bedingungen: Verbrennung, Halogenierung mit UV.`,
      },
    ])}

    <h3 class="lz-h3" style="margin-top:1.75rem;">Radikalische Halogenierung — Mechanismus</h3>
    <p class="lz-prose">
      Die wichtigste Reaktion der Alkane. Unter UV-Licht oder Wärme werden H-Atome
      durch Halogen-Atome ersetzt. Verläuft über einen
      <strong>Radikalkettenmechanismus</strong>.
    </p>

    ${renderTable({
      headers: ['Phase', 'Schritt', 'Reaktionsgleichung', 'Energetik'],
      rows: [
        ['Initiation (Startschritt)', 'Homolyse von Cl₂ durch UV-Licht', 'Cl₂ →(hν) 2 Cl•', 'Endotherm; E_A = Bindungsenergie Cl–Cl = 243 kJ/mol'],
        ['Propagation 1 (Kettenschritt)', 'Cl• greift H-Atom des Alkans an', 'CH₄ + Cl• → •CH₃ + HCl', 'ΔH = +4 kJ/mol (fast thermoneutral; E_A klein)'],
        ['Propagation 2 (Kettenschritt)', '•CH₃ reagiert mit Cl₂', '•CH₃ + Cl₂ → CH₃Cl + Cl•', 'ΔH = −108 kJ/mol (stark exotherm)'],
        ['Termination 1', 'Zwei Radikale rekombinieren', 'Cl• + Cl• → Cl₂', 'Exotherm; kein Aktivierungsenergie'],
        ['Termination 2', 'Zwei Radikale rekombinieren', '•CH₃ + Cl• → CH₃Cl', 'Exotherm'],
        ['Termination 3', 'Zwei Radikale rekombinieren', '•CH₃ + •CH₃ → C₂H₆', 'Erklärt Ethan-Nebenprodukt!'],
      ],
      highlight: [1, 2],
    })}

    ${renderInfobox({
      type: 'warning', icon: 'fas fa-exclamation-triangle', title: 'Selektivität der Halogenierung — Cl₂ vs. Br₂',
      body: `<strong>Cl₂-Halogenierung:</strong> wenig selektiv; alle H-Atome werden ungefähr gleich gut
             abstrahiert; statistisches Produktgemisch bei langen Ketten.<br>
             <strong>Br₂-Halogenierung:</strong> sehr selektiv; bevorzugt tertiäre > sekundäre > primäre H.
             Grund: Brom-Radikal langsamer (späterer TS; TS ähnelt mehr dem Produkt →
             Stabilität des entstehenden C-Radikals wichtiger: tert > sek > prim).<br><br>
             <strong>Hammond-Postulat:</strong> Bei exothermen Reaktionen ähnelt der TS den Edukten;
             bei endothermen Reaktionen ähnelt der TS den Produkten.<br>
             Cl• + RH → sehr exotherm → frühzeitiger TS → wenig selektiv.<br>
             Br• + RH → endotherm → später TS → hoch selektiv.`,
    })}

    <h3 class="lz-h3" style="margin-top:1.75rem;">Konformationsanalyse der Alkane</h3>
    <p class="lz-prose">
      Durch Rotation um C–C-Bindungen entstehen verschiedene
      <strong>Konformere</strong>. Diese sind beim Ethan-Modell am einfachsten zu sehen:
    </p>

    ${renderTable({
      headers: ['Konformation', 'Torsionswinkel', 'Relative Energie', 'Beschreibung'],
      rows: [
        ['Gestaffelt (staggered)',    '60°, 180°, 300°', '0 kJ/mol (Referenz)', 'Maximale Entfernung der H-Atome; stabilste Form'],
        ['Ekliptisch (eclipsed)',     '0°, 120°, 240°',  '+12 kJ/mol',          'H-Atome übereinander; Torsionsspannung'],
        ['Gauche (Butan)',            '60°',             '+4 kJ/mol vs. anti',   'Beide CH₃ gauche; sterische Wechselwirkung'],
        ['Anti (Butan)',              '180°',            '0 kJ/mol (Referenz)',  'Beide CH₃ maximal entfernt; stabilste Form'],
        ['Eclipsed (CH₃ übereinander)','0°',             '+19 kJ/mol',           'Stärkste sterische Wechselwirkung'],
      ],
      highlight: [0, 3],
    })}

    <h3 class="lz-h3" style="margin-top:1.75rem;">Cycloalkane — Ringspannung</h3>

    ${renderTable({
      headers: ['Cycloalkan', 'n(C)', 'Ringspannung [kJ/mol]', 'Konformation', 'Besonderheit'],
      rows: [
        ['Cyclopropan',   '3', '114',  'Planar (erzwungen)', 'Sehr reaktiv; addiert HX wie Alken (Ringöffnung)'],
        ['Cyclobutan',    '4', '110',  'Gefaltet (Schmetterling)', 'Instabil; Ringöffnung möglich'],
        ['Cyclopentan',   '5', '26',   'Umschlagende Envelope-Konformation', 'Noch mäßige Spannung'],
        ['Cyclohexan',    '6', '0',    'Sesselkonformation (stabil); auch Wanne', 'Stabiles Ringsystem; Leitstruktur'],
        ['Cycloheptan',   '7', '27',   'Komplexe Konformation', 'Mäßig stabil'],
        ['Cyclooctan',    '8', '42',   'Wannenkonformation', 'Transannulare Spannungen'],
      ],
      highlight: [3],
    })}

    ${renderInfobox({
      type: 'blue', icon: 'fas fa-chair', title: 'Cyclohexan — Sesselkonformation',
      body: `Cyclohexan nimmt bevorzugt die <strong>Sesselkonformation</strong> ein
             (Ringspannung ≈ 0; keine Baeyer-Spannung, keine Pitzer-Spannung).<br><br>
             Im Sessel gibt es zwei Typen von H-Atomen:<br>
             <strong>Axial (a):</strong> senkrecht zur Ringebene (3 oben, 3 unten)<br>
             <strong>Equatorial (e):</strong> annähernd in der Ringebene, leicht geneigt<br><br>
             Große Substituenten (z.B. –C(CH₃)₃) bevorzugen <strong>equatoriale</strong>
             Position (weniger 1,3-diaxiale Wechselwirkungen).<br>
             Ring-Flip: axiale ↔ equatoriale Positionen tauschen (aktiviert, ΔG ≈ 45 kJ/mol).<br>
             Methylcyclohexan: Methyl equatorial 95%; axial 5% (ΔG = 7,3 kJ/mol).`,
    })}
  `; }

  _ungesaettigt() { return `
    ${renderSubhead('9.2.3 — Ungesättigte kettenförmige Kohlenwasserstoffe')}

    <h3 class="lz-h3">Alkene — Struktur und allgemeine Eigenschaften</h3>
    <p class="lz-prose">
      Alkene (Olefine) enthalten mindestens eine C=C-Doppelbindung.
      Allgemeine Formel: C_nH_{2n} (bei einer Doppelbindung).
      Die C=C-Bindung besteht aus einer σ- (sp²–sp²) und einer π-Bindung (p–p).
      Der Bindungswinkel an den sp²-C-Atomen beträgt ~120°; alle vier Atome der C=C-Gruppe
      liegen in einer Ebene. Keine freie Rotation um die Doppelbindung (→ E/Z-Isomerie).
    </p>

    ${renderTable({
      headers: ['Verbindung', 'Formel', 'Sdp. [°C]', 'E/Z', 'Reaktionen (Auswahl)'],
      rows: [
        ['Ethen (Ethylen)',    'CH₂=CH₂',        '−104', '—',   'Polymerisation → PE; + HBr → Brometan; + H₂O/H⁺ → Ethanol'],
        ['Propen (Propylen)',  'CH₃CH=CH₂',      '−47',  '—',   '+ HBr → 2-Brompropan (MRK); + H₂O → 2-Propanol; → PP'],
        ['(Z)-2-Buten',       'cis-CH₃CH=CHCH₃','  3,7', 'Z',   'cis-Isomer; Sdp. höher als trans durch stat. Dipolmoment'],
        ['(E)-2-Buten',       'trans-CH₃CH=CHCH₃','0,9','E',   'trans-Isomer; stabileres Isomer (weniger sterische Abl.)'],
        ['2-Methylpropen',    '(CH₃)₂C=CH₂',    '−6,9', '—',   '+ HBr → 2-Bromo-2-methylpropan; Trisubst. Doppelb.'],
        ['1,3-Butadien',      'CH₂=CH-CH=CH₂',  '−4,4', '—',   'Dien: Diels-Alder-Reaktion; Monomer für synthet. Kautschuk'],
        ['Isopren (2-Methylbutadien)', 'CH₂=C(CH₃)-CH=CH₂', '34', '—', 'Natürliches Dien; Monomer für cis-Polyisopren (Naturkautschuk)'],
      ],
      highlight: [0, 5],
    })}

    <h3 class="lz-h3" style="margin-top:1.75rem;">Elektrophile Addition an Alkene (AE)</h3>

    ${renderAccordion([
      {
        title: 'Mechanismus: Addition von HBr an Propen',
        content: `<p class="lz-prose"><strong>Schritt 1 — Protonierung der Doppelbindung (geschwindigkeitsbestimmend):</strong><br>
                  H⁺ + CH₃CH=CH₂ → CH₃C⁺H–CH₃ (sek. Carbeniumion) — Markovnikov!<br>
                  Das sekundäre Carbeniumion ist stabiler als das primäre:<br>
                  CH₃C⁺H–CH₃ > CH₃CH₂–CH₂⁺</p>
                  <p class="lz-prose"><strong>Schritt 2 — Angriff von Br⁻:</strong><br>
                  CH₃C⁺H–CH₃ + Br⁻ → CH₃CHBr–CH₃ (2-Brompropan) — Markovnikov-Produkt</p>
                  <p class="lz-prose"><strong>Nicht-Markovnikov-Produkt (anti-MRK):</strong><br>
                  Mit Peroxiden: HBr + R• → Br• (radikalisch); Br• greift an C1 an →
                  stabiles sekundäres C-Radikal an C2 → H• von HBr an C2 → 1-Brompropan</p>`,
      },
      {
        title: 'Addition von Br₂ an Alkene — Bromeinfärbung und Brückenmechanismus',
        content: `<p class="lz-prose"><strong>Nachweis von C=C-Doppelbindungen:</strong>
                  Bromwasser (Br₂ in H₂O) oder Brom/CCl₄ wird durch Alkene entfärbt.
                  Br₂ ist rotbraun; das Additionsprodukt ist farblos.</p>
                  <p class="lz-prose"><strong>Mechanismus — Bromoniumion-Intermediat:</strong><br>
                  Schritt 1: Br₂ polarisiert sich in Nähe des π-Systems → Br-Br-Dipol →
                  Br⁺ (δ+) greift π-System an → Bromoniumion-Intermediat (cyclisch, 3-gliedrig)
                  mit positivem Br im Ring.<br>
                  Schritt 2: Br⁻ greift von der gegenüberliegenden Seite an (anti) →
                  trans-1,2-Dibromid (anti-Addition!).</p>
                  <p class="lz-prose"><strong>Stereochemie:</strong>
                  cis-2-Buten + Br₂ → (meso)-2,3-Dibrombutan (anti-Addition!)<br>
                  trans-2-Buten + Br₂ → (±)-2,3-Dibrombutan (Racemat)</p>`,
      },
      {
        title: 'Addition von H₂O — Hydratisierung (Wasser-Addition)',
        content: `<p class="lz-prose"><strong>Säurekatalytische Hydratisierung (Markovnikov):</strong><br>
                  CH₂=CH₂ + H₂O →(H⁺, 200°C, 70 bar) CH₃CH₂OH<br>
                  Mechanismus: H⁺ protoniert Doppelbindung → Carbeniumion → H₂O als Nu → Oxoniumion → Ethanol<br>
                  Markovnikov: OH geht an das C mit mehr H bei asymm. Alkenen</p>
                  <p class="lz-prose"><strong>Oxymercurierung-Demercurierung (milde Bedingungen, Markovnikov):</strong><br>
                  1. Hg(OAc)₂/H₂O: Markovnikov-Addition → CH₃CH(HgOAc)OH (Organomercury)<br>
                  2. NaBH₄/NaOH: C–Hg-Bindung gespalten → MRK-Alkohol ohne Umlagerung<br><br>
                  <strong>Hydroborierung-Oxidation (Anti-Markovnikov):</strong><br>
                  1. BH₃·THF (oder 9-BBN): syn-Addition von B an weniger subs. C →<br>
                  2. H₂O₂/NaOH: Oxidation → Anti-MRK-Alkohol (syn-Addition!)<br>
                  Beispiel: 1-Propanol aus Propen (nicht 2-Propanol wie bei MRK)</p>`,
      },
      {
        title: 'Ozonolyse — Abbau von Doppelbindungen',
        content: `<p class="lz-prose"><strong>Ozonolyse:</strong> O₃ reagiert mit Doppelbindungen → Spaltung.
                  Zwei Stufen: (1) O₃/CH₂Cl₂ (kalt) → Molozonid → Ozonid; (2) reduktiv (Zn/H₃O⁺) → Aldehyde/Ketone oder oxidativ (H₂O₂) → Ketone/Carbonsäuren</p>
                  <p class="lz-prose"><strong>Beispiele:</strong><br>
                  CH₃CH=CHCH₃ →(1)O₃ (2)Zn/H₃O⁺→ 2 × CH₃CHO (Ethanal)<br>
                  (CH₃)₂C=CH₂ →(1)O₃ (2)Zn/H₃O⁺→ Aceton + Formaldehyd<br>
                  Oxidativ: terminale C=C → Carbonsäure + Keton oder CO₂<br><br>
                  <strong>Anwendung:</strong> Strukturaufklärung durch Abbau; Düfte/Riechstoffe aus ungesättigten Fetten;
                  OzonOLYSE → man erkennt, welche Gruppen wo in der Ausgangsstruktur saßen.</p>`,
      },
    ])}

    <h3 class="lz-h3" style="margin-top:1.75rem;">Alkine — Dreifachbindung und sp-Hybridisierung</h3>

    ${renderTable({
      headers: ['Eigenschaft', 'Alkin', 'Vergleich Alkan/Alken'],
      rows: [
        ['Hybridisierung',         'sp (linear, 180°)',       'Alkan sp³ (109,5°); Alken sp² (120°)'],
        ['Bindungsordnung C≡C',    '3 (1σ + 2π)',             'Alkan: 1 σ; Alken: 1σ + 1π'],
        ['Bindungslänge C≡C',      '120 pm',                   'C–C: 154 pm; C=C: 134 pm'],
        ['Bindungsenergie C≡C',    '839 kJ/mol',               'C–C: 347; C=C: 614 kJ/mol'],
        ['Azidität des CH (terminale Alkine)', 'pK_s ≈ 25',  'Ethan: pK_s ≈ 50; Ethen: pK_s ≈ 44 → Alkinyl-H deutlich acider!'],
        ['Physik. Eigenschaften',  'Sdp. zwischen Alkan u. Alken ähnlicher Masse', 'Unpolar; kaum wasserlöslich'],
        ['Charakteristische Reaktionen', 'Hydratation (Markovnikov) → Enol → Keton (Keto-Enol-Tautomerie); Hydroborierung (Anti-MRK) → Aldehyd; Metallacetylide', '—'],
      ],
      highlight: [4, 6],
    })}

    ${renderAccordion([
      {
        title: 'Diels-Alder-Reaktion — [4+2]-Cycloaddition',
        content: `<p class="lz-prose">Die <strong>Diels-Alder-Reaktion</strong> (Otto Diels und Kurt Alder, Nobelpreis 1950)
                  ist eine der wichtigsten Reaktionen der organischen Synthese:
                  Ein <strong>Dien</strong> (4π) und ein <strong>Dienophil</strong> (2π)
                  reagieren zu einem sechsgliedrigen Ring.</p>
                  <p class="lz-prose"><strong>Voraussetzungen:</strong><br>
                  ① Dien muss in <em>s-cis</em>-Konformation vorliegen (s-trans reagiert nicht!)<br>
                  ② Dienophil muss elektronenarme Doppelbindung haben (–CHO, –COOH, –NO₂, –CN)<br>
                  ③ Reaktion konzertiert (kein Intermediat!); thermisch erlaubt (Holonomie)<br><br>
                  <strong>Stereochemie:</strong><br>
                  syn-Addition: Substituenten des Dienophils bleiben cis/trans erhalten → endo-Regel<br>
                  endo-Produkt kinetisch bevorzugt; exo-Produkt thermodynamisch stabiler<br><br>
                  <strong>Beispiel:</strong> 1,3-Butadien + Ethylen → Cyclohexen (kein EWG: langsam)<br>
                  1,3-Butadien + Maleinsäureanhydrid → Tetrahydrophthalsäureanhydrid (schnell)</p>`,
      },
      {
        title: 'Kautschuk und Polymere aus Dienen',
        content: `<p class="lz-prose"><strong>Naturkautschuk:</strong>
                  Polyisopren aus Latex des Kautschukbaums (Hevea brasiliensis).
                  Struktur: cis-1,4-Polyisopren (alle Doppelbindungen cis-konfiguriert → elastisch).
                  Guttapercha: trans-1,4-Polyisopren (starr, brüchig).<br><br>
                  <strong>Synthese von cis-Polyisopren (Ziegler-Natta):</strong><br>
                  n CH₂=C(CH₃)-CH=CH₂ →(TiCl₄/AlR₃) cis-[CH₂–C(CH₃)=CH–CH₂]ₙ<br><br>
                  <strong>Vulkanisierung (Goodyear, 1839):</strong>
                  Schwefelbrücken zwischen Ketten → Elastomernetzwerk (Gummi).
                  Wenig S (~2%): Weichgummi (Reifen). Viel S (~30%): Hartgummi (Ebonit).<br><br>
                  <strong>Synthetischer Kautschuk:</strong> Styrol-Butadien-Kautschuk (SBR): 75% Butadien + 25% Styrol; Hauptanwendung: Autoreifen.</p>`,
      },
    ])}

    ${renderInfobox({
      type: 'success', icon: 'fas fa-graduation-cap', title: 'Zusammenfassung — Aliphatische KW',
      body: `<strong>Alkane:</strong> CₙH₂ₙ₊₂ · sp³ · 109,5° · Verbrennung + radikalische Halogenierung · Cycloalkane: Ringspannung (Cyclohexan = 0 → Sessel)<br>
             <strong>Alkene:</strong> CₙH₂ₙ · sp² · 120° · C=C: σ+π · E/Z-Isomerie · Elektrophile Addition: Markovnikov!<br>
             <strong>Br₂-Test:</strong> Entfärbung Bromwasser → Doppelbindung (oder Dreifachbindung) vorhanden<br>
             <strong>AE-Mechanismus:</strong> H⁺ → Carbeniumion (stabiler) → Nu⁻<br>
             <strong>Alkine:</strong> sp · 180° · C≡C: σ+2π · Acide CH (pK_s≈25) · Hydratation → Keton<br>
             <strong>Diels-Alder:</strong> Dien (s-cis!) + Dienophil (EWG) → 6-Ring · konzertiert · syn · endo-Regel`,
    })}
  `; }

  init() {
    i18n.init();
    initScrollReveal();
    initInteractive(document);
    initTabs();
  }
}