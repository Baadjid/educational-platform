// pages/projekte/lernzettel/faecher/chemie/themen/9/9-5.js
// Kapitel 9.5 — Naturstoffe
// 9.5.1  Kohlenhydrate
// 9.5.2  Fette
// 9.5.3  Aminosäuren, Peptide und Proteine

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
  { key: '951', icon: 'fas fa-candy-cane',   label: '9.5.1 Kohlenhydrate'             },
  { key: '952', icon: 'fas fa-oil-can',       label: '9.5.2 Fette'                     },
  { key: '953', icon: 'fas fa-dna',           label: '9.5.3 Aminosäuren & Proteine'   },
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
  return `<nav class="wim-tabs" role="tablist" id="tabs95">${nav}</nav>${panels}`;
}

function initTabs() {
  const nav = document.getElementById('tabs95');
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

export default class Chemie_9_5 {
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
          <i class="fas fa-chevron-right"></i><span>9.5</span>
        </div>
        <h1 class="lz-sub-title">Naturstoffe<br><em>Kohlenhydrate, Fette und Proteine</em></h1>
        <p class="lz-sub-desc">
          Monosaccharide · Mutarotation · glycosidische Bindung · Cellulose vs. Stärke ·
          Fettsäuren · Seifen · Aminosäuren · Peptidbindung · Proteinstruktur
        </p>
        ${renderTags(['Kap. 9.5', 'Kohlenhydrate', 'Fette', 'Proteine', 'Aminosäuren', 'LK Chemie BW'])}
      </div>
    </section>

    <section class="lz-content-section">
      <div class="lz-section-wrap">
        ${buildWimHTML(k => {
          if (k === '951') return this._kohlenhydrate();
          if (k === '952') return this._fette();
          if (k === '953') return this._proteine();
          return '';
        })}
      </div>
    </section>

    <section class="lz-content-section" style="padding:1.5rem 0 3rem;">
      <div class="lz-section-wrap">
        ${renderPageNav({
          prev: { label: '9.4 Funktionelle Gruppen',  link: `${BASE}/themen/9/9-4` },
          next: { label: '9.6 Chemie in Biosystemen', link: `${BASE}/themen/9/9-6` },
        }, BASE)}
      </div>
    </section>
    ${footerHTML(this.router)}
  `; }

  // ══════════════════════════════════════════════════════════
  // 9.5.1 — Kohlenhydrate
  // ══════════════════════════════════════════════════════════
  _kohlenhydrate() { return `
    ${renderSubhead('9.5.1 — Kohlenhydrate')}

    <h2 class="lz-h2">Was sind Kohlenhydrate?</h2>
    <p class="lz-prose">
      Kohlenhydrate (Saccharide, Zucker) sind organische Verbindungen
      mit der allgemeinen Summenformel Cₙ(H₂O)ₘ — daher der Name
      (formal: Kohlenstoff + Wasser). Sie bilden die Hauptenergiesource
      der meisten Lebewesen und übernehmen strukturelle Funktionen
      (Cellulose in Pflanzenzellen, Chitin in Insekten).
    </p>

    ${renderTable({
      headers: ['Klasse', 'Definition', 'Formel', 'Beispiele'],
      rows: [
        ['Monosaccharide', 'Einfachzucker; nicht weiter hydrolysierbar', 'C_n(H₂O)_n; Triosen n=3, Pentosen n=5, Hexosen n=6', 'Glucose, Fructose, Galactose, Ribose, Deoxyribose'],
        ['Disaccharide',   'Zwei Monosaccharide über glycosidische Bindung', '2×Monosaccharid − H₂O', 'Saccharose (Glc+Fru), Lactose (Glc+Gal), Maltose (Glc+Glc)'],
        ['Oligosaccharide','3–10 Monosaccharide', 'Kurzketten', 'Raffinose, Stachyose; Blutgruppenantigene'],
        ['Polysaccharide', 'Viele Monosaccharide (n > 10)', '(Monosaccharid)ₙ − (n−1)H₂O', 'Stärke, Glykogen, Cellulose, Chitin, Heparin'],
      ],
      highlight: [0, 3],
    })}

    <h3 class="lz-h3" style="margin-top:1.75rem;">D-Glucose — das zentrale Monosaccharid</h3>
    <p class="lz-prose">
      D-Glucose (Traubenzucker, Dextrose, C₆H₁₂O₆) ist das wichtigste
      Monosaccharid: Hauptenergielieferant der Zelle; Ausgangsstoff für
      Stärke und Cellulose; zentrales Metabolit in Glykolyse und Citratzyklus.
    </p>

    ${renderMerkboxGrid([
      {
        icon: 'fas fa-ruler-vertical',
        title: 'Fischer-Projektion (offenkettige Form)',
        text: `D-Glucose: Aldohexose mit 4 Stereozentren (C2–C5).
               Streckt die Kette vertikal auf: C1 (CHO) oben, C6 (CH₂OH) unten.
               Horizontale Bindungen zeigen aus der Papierebene heraus.
               D-Form: OH am C5 (vorletzte C) rechts → D-Zucker (nach D-Glycerinaldehyd).
               L-Form: OH am C5 links → L-Glucose (biologisch meist inaktiv).`,
      },
      {
        icon: 'fas fa-ring',
        title: 'Haworth-Projektion (Ringform)',
        text: `Glucose zyklisiert durch nucleophilen Angriff des C5-OH auf die Aldehyd-Gruppe (C1).
               Dabei entsteht ein 6-gliedriger Pyranose-Ring (Pyranose = enthält O im Ring).
               C1 wird zum anomeren C-Atom (früheres Aldehyd-C; jetzt Halbacetal-C).
               α-D-Glucose: OH an C1 axial (nach unten in Haworth).
               β-D-Glucose: OH an C1 equatorial (nach oben in Haworth).`,
      },
      {
        icon: 'fas fa-sync-alt',
        title: 'Mutarotation',
        text: `Gelöste Glucose stellt sich ins Gleichgewicht:
               α-D-Glucose ⇌ offenkettige Form ⇌ β-D-Glucose
               GG-Verhältnis: α: ~36%; offenkettig: ~0,003%; β: ~64%.
               Optische Rotation ändert sich beim Lösen (Mutarotation):
               α: [α]D = +112°; GG: [α]D = +52,7°; β: [α]D = +18,7°.
               Zeitraum bis GG: Stunden (ohne Katalysator); schnell mit H⁺ oder OH⁻.`,
      },
      {
        icon: 'fas fa-dot-circle',
        title: 'Anomeres C-Atom',
        text: `Das C1-Atom der Glucose (Aldehyd-C) wird bei der Ringbildung zum
               anomeren C-Atom: Es trägt vier verschiedene Substituenten → chiral.
               Unterschied zu C2–C5: Das anomere C geht durch Ringöffnung in Lösung
               ins Gleichgewicht → kann oxidiert werden (Tollens, Fehling → reduzierender Zucker!).
               Nicht-reduzierende Zucker: OH an anomeren C ist in glycosidischer Bindung → keine Ringöffnung.`,
      },
    ])}

    ${renderTable({
      headers: ['Eigenschaft', 'α-D-Glucose', 'β-D-Glucose', 'Erklärung'],
      rows: [
        ['OH an C1',            'Axial (nach unten in Haworth)', 'Equatorial (nach oben)', 'Haworth-Konvention: axial = unten beim D-Zucker'],
        ['Sesselkonformation',  'OH axial (ungünstiger)', 'OH equatorial (günstiger)', 'β-Form in Sesselkonformation stabiler (weniger 1,3-diaxiale WW)'],
        ['GG-Anteil',           '~36%',                          '~64%',                  'β dominiert wegen Stabilität in Sesselkonformation'],
        ['Optische Rotation',   '+112°',                         '+18,7°',                'Frisch gelöste Kristalle zeigen α- oder β-Rotation; GG: +52,7°'],
        ['Reduzierende Wirkung','Ja (offenkettig ⇌ ring)',       'Ja (offenkettig ⇌ ring)','Beide zeigen Tollens+/Fehling+ durch Ringöffnung → freie Aldehydgruppe'],
      ],
      highlight: [1, 2],
    })}

    <h3 class="lz-h3" style="margin-top:1.75rem;">Wichtige Monosaccharide</h3>

    ${renderTable({
      headers: ['Monosaccharid', 'Klasse', 'Formel', 'Vorkommen / Funktion', 'Besonderheit'],
      rows: [
        ['D-Glucose',      'Aldohexose',   'C₆H₁₂O₆', 'Blut (Blutzucker); Stärke (Baustein); Zellatmung Substrat', 'Wichtigstes Monosaccharid; Bezugspunkt für D/L'],
        ['D-Fructose',     'Ketohexose',   'C₆H₁₂O₆', 'Früchte (Fruchtzucker); Honig (~40%); Saccharose (Baustein)', 'Süßester natürlicher Zucker; bildet Furanose-Ring (5-gliedrig)'],
        ['D-Galactose',    'Aldohexose',   'C₆H₁₂O₆', 'Lactose (Milchzucker, Baustein); Glycolipide (Gehirn)', 'C4-Epimer der Glucose (OH an C4 anders)'],
        ['D-Ribose',       'Aldopentose',  'C₅H₁₀O₅', 'RNA-Rückgrat; ATP, NAD⁺, FAD (Coenzyme)', 'In RNA; bei Arabinose C2-Epimer'],
        ['2-Desoxy-D-Ribose','2-Desoxyaldopentose','C₅H₁₀O₄', 'DNA-Rückgrat', 'Kein OH an C2 → DNA stabil (RNA labil wegen C2-OH)'],
        ['D-Mannose',      'Aldohexose',   'C₆H₁₂O₆', 'Glycoproteine; Zellwanderkennung', 'C2-Epimer der Glucose'],
        ['N-Acetylglucosamin','Aminozucker','—',        'Chitin (Insektenpanzer); Peptidoglykan (Bakterienzellwand)', 'NH-Acetylgruppe statt OH an C2'],
        ['Glucuronsäure',  'Uronsäure',    '—',        'Hyaluronsäure; UDP-Glucuronid (Biotransformation)', 'C6 oxidiert zur COOH-Gruppe'],
      ],
      highlight: [0, 1, 3, 4],
    })}

    <h3 class="lz-h3" style="margin-top:1.75rem;">Glycosidische Bindung und Disaccharide</h3>
    <p class="lz-prose">
      Die <strong>glycosidische Bindung</strong> (O-glycosidische Bindung) entsteht
      durch Kondensation des OH an anomeren C-Atom eines Monosaccharids mit einem
      OH einer anderen Verbindung (Alkohol oder anderes Saccharid) unter Wasserabspaltung.
      Der Bindungstyp (α oder β) hängt von der Konfiguration am anomeren C ab
      und ist biologisch entscheidend.
    </p>

    ${renderTable({
      headers: ['Disaccharid', 'Bausteine', 'Bindung', 'Reduzierend?', 'Enzyme zur Spaltung', 'Biologische Bedeutung'],
      rows: [
        ['Saccharose (Rohrzucker)', 'α-D-Glucose + β-D-Fructose', 'α(1→2)β (C1 Glc − C2 Fru; beide anomere C blockiert!)', 'Nein!', 'Saccharase (Invertase)', 'Haupttransportzucker in Pflanzen; 185 Mio. t/Jahr; Süßungsmittel'],
        ['Lactose (Milchzucker)',   'β-D-Galactose + D-Glucose',   'β(1→4) (C1 Gal − C4 Glc; C1 Glc frei)', 'Ja', 'Lactase (fehlt bei Lactose-Intoleranz)', 'In Säugetiermilch; 4–5%; Säuglingsernährung; Lactase-Mangel → Diarrhoe'],
        ['Maltose',                'α-D-Glucose + D-Glucose',      'α(1→4) (C1−C4; C1 des zweiten Glc frei)', 'Ja', 'Maltase', 'Stärkeabbauprodukt; Keimung (Malz); Bierbrauen'],
        ['Cellobiose',             'β-D-Glucose + D-Glucose',      'β(1→4) (C1−C4)', 'Ja', 'Cellobiase (nicht im Menschen!)', 'Cellulose-Abbauprodukt; nicht verdaulich für Mensch'],
        ['Trehalose',              'α-D-Glucose + α-D-Glucose',    'α(1→1)α (beide C1 blockiert)', 'Nein!', 'Trehalase', 'Insekten-Blutsucker; Extremophile (Austrocknung-Schutz); Insekten-Hämolymphe'],
      ],
      highlight: [0, 1, 4],
    })}

    <h3 class="lz-h3" style="margin-top:1.75rem;">Polysaccharide — Stärke, Cellulose und Glykogen</h3>

    ${renderCompare({
      titleA: 'Stärke (Amylose + Amylopektin)',
      titleB: 'Cellulose',
      listA: [
        'Bindung: α(1→4)-glycosidisch + α(1→6)-Verzweigungen (Amylopektin)',
        'α-Bindung → Kette nimmt Helix-Form an (Amylose: ~6 Glc pro Helixwindung)',
        'Verdaulich! Amylase spaltet α-glycosidische Bindungen',
        'Funktion: Energiespeicher in Pflanzen (Kartoffel, Weizen, Mais)',
        'Amylose (~20%): unverzweigt; löst sich in Wasser (Iod → blau!)',
        'Amylopektin (~80%): verzweigt alle 24–30 Glucose; unlöslich',
      ],
      listB: [
        'Bindung: β(1→4)-glycosidisch; keine Verzweigungen',
        'β-Bindung → Kette gestreckt; Nachbarketten über H-Brücken verknüpft',
        'Nicht verdaulich für Menschen! Kein β-Glucosidase im menschlichen Darm',
        'Funktion: Strukturelement Pflanzenzellwand; Holz 40–50% Cellulose',
        'Hochmolekulare Kristallin-Struktur; hohe Zugfestigkeit (≈200 MPa)',
        'Termiten/Wiederkäuer: Darmbakterien mit Cellulasen → verdaulich',
      ],
    })}

    ${renderInfobox({
      type: 'blue', icon: 'fas fa-microscope', title: 'Iod-Stärke-Reaktion — α vs. β-Polysaccharid',
      body: `Stärke (speziell Amylose) reagiert mit Iod-Iodid-Lösung (Lugol'sche Lösung)
             zu einer <strong>intensiv blauvioletten Färbung</strong>.<br><br>
             <strong>Ursache:</strong> I₂-Moleküle lagern sich in die Helixkavität der Amylose ein
             → Ladungsübertragungskomplex → starke Lichtabsorption bei ~640 nm → blauviolett.<br>
             <strong>Cellulose (β-Bindung):</strong> keine Helixstruktur → keine Einlagerung → keine Blaufärbung!<br>
             <strong>Temperaturabhängigkeit:</strong> Beim Erhitzen löst sich der Komplex auf
             (Blaufärbung verschwindet bei >80°C) → reversibel beim Abkühlen.<br>
             <strong>Nachweis:</strong> Iod-Stärke-Reaktion ist Nachweis für Stärke UND für freies Iod.`,
    })}

    ${renderTable({
      headers: ['Polysaccharid', 'Bausteine', 'Bindung', 'Struktur', 'Funktion'],
      rows: [
        ['Stärke (Amylose)',    'D-Glucose',         'α(1→4)',          'Helix; löslich',           'Energiespeicher Pflanzen; Nahrungsmittel'],
        ['Stärke (Amylopektin)','D-Glucose',         'α(1→4) + α(1→6)', 'Stark verzweigt; unlöslich','Energiespeicher Pflanzen; Hauptanteil der Stärke'],
        ['Glykogen',            'D-Glucose',         'α(1→4) + α(1→6)', 'Stärker verzweigt als AMP', 'Energiespeicher Leber+Muskel (Mensch); schnell mobilisierbar'],
        ['Cellulose',           'D-Glucose',         'β(1→4)',           'Gestreckt; Fibrillen; H-Brücken', 'Pflanzenzellwand; Holz; Baumwolle'],
        ['Chitin',              'N-Acetylglucosamin','β(1→4)',           'Ähnl. Cellulose',          'Insektenpanzer, Krebsschalen, Pilzzellwand'],
        ['Heparin',             'Glucosamin+Glucuronsäure (alternierend)', 'α/β(1→4)',  'Anionisch (viele –SO₃H und –COO⁻)', 'Antikoagulans (hemmt Thrombin und Faktor Xa); Arzneimittel'],
        ['Hyaluronsäure',       'N-AcGlu + Glucuronsäure', 'β(1→4) + β(1→3)', 'Hochviskos; bindet viel Wasser', 'Gelenkknorpel, Glaskörper Auge; Kosmetik'],
        ['Pektin',              'Galacturonsäure',   'α(1→4)',           'Säure-Polysaccharid; geliert', 'Pflanzenzellwand; Gelierung von Marmelade'],
      ],
      highlight: [0, 3, 5],
    })}
  `; }

  // ══════════════════════════════════════════════════════════
  // 9.5.2 — Fette
  // ══════════════════════════════════════════════════════════
  _fette() { return `
    ${renderSubhead('9.5.2 — Fette')}

    <h2 class="lz-h2">Lipide — Fette, Öle und verwandte Verbindungen</h2>
    <p class="lz-prose">
      <strong>Lipide</strong> sind hydrophobe oder amphiphile Biomoleküle,
      die sich in organischen Lösungsmitteln, aber kaum in Wasser lösen.
      Die wichtigste Klasse sind die <strong>Triacylglycerine (Fette/Öle)</strong>:
      Triester des Glycerins mit Fettsäuren.
    </p>

    <h3 class="lz-h3">Fettsäuren — Klassifikation und Eigenschaften</h3>

    ${renderTable({
      headers: ['Fettsäure', 'Kürzel', 'Doppelb.', 'Schmp. [°C]', 'Vorkommen', 'Besonderheit'],
      rows: [
        ['Buttersäure',         'C4:0',  '0 (gesättigt)', '−8',    'Butter (~4%)', 'Ranziger Geruch; kurzkettig; wasserlöslich'],
        ['Laurinsäure',         'C12:0', '0',             '+44',   'Kokosnussöl (~50%)', 'Mittelkettig; antibakteriell'],
        ['Palmitinsäure',       'C16:0', '0',             '+63',   'Palmöl (~44%), Tier-Fette (25%)', 'Häufigste gesättigte FS; Ausgangsstoff Biosynthese'],
        ['Stearinsäure',        'C18:0', '0',             '+70',   'Rindertalg (~20%), Kakaobutter (~35%)', 'Gesättigte C18-Fettsäure; sehr hochschmelzend'],
        ['Ölsäure',             'C18:1 (Δ9)', '1 (cis)', '+16',  'Olivenöl (~80%), fast alle Öle/Fette', 'Häufigste einfach ungesättigte FS; cis-Doppelb. bei C9'],
        ['Linolsäure',          'C18:2 (Δ9,12)', '2 (cis)', '−5', 'Sonnenblumenöl (~65%), Maiskeimöl', 'Essenzielle FS (ω-6); Membranbaustein; muss zugeführt werden'],
        ['Linolensäure',        'C18:3 (Δ9,12,15)', '3 (cis)', '−11','Leinöl (~55%), Walnussöl', 'Essenzielle FS (ω-3); Vorläufer EPA/DHA'],
        ['Arachidonsäure',      'C20:4 (Δ5,8,11,14)', '4', '−50','Schweineschmalz, tierische Fette', 'Essenzielle FS (ω-6); Prostaglandin-Vorläufer'],
        ['EPA (Eicosapentaensäure)', 'C20:5 (ω-3)', '5', '−54', 'Fischöl (Lachs, Makrele)', 'Starke entzündungshemmende Wirkung'],
        ['DHA (Docosahexaensäure)', 'C22:6 (ω-3)', '6', '−44', 'Fischöl; Gehirn, Netzhaut', 'Wichtig für Gehirnentwicklung; Säuglingsernährung'],
        ['Erucasäure',          'C22:1 (Δ13)', '1', '+33', 'Raps (alt, >40%); moderner Raps <2% (0-Raps)', 'Herzschädigend in hohen Mengen → Züchtung 0-Raps'],
        ['Trans-Ölsäure (Elaidinsäure)', 'C18:1 (trans)', '1 (trans)', '+44', 'Teilgehärtete Fette, Margarine (alt)', 'Trans-Fette: atherosklerotisch! EU: Kennzeichnungspflicht'],
      ],
      highlight: [4, 5, 6, 11],
    })}

    ${renderInfobox({
      type: 'blue', icon: 'fas fa-info-circle', title: 'ω-Nomenklatur und Essentielle Fettsäuren',
      body: `<strong>ω-Nomenklatur:</strong> Zählt die Doppelbindung vom Methylende (ω) der Kette:
             ω-3 (n-3): 3. C vom Methylende hat erste DB (z.B. Linolensäure, EPA, DHA)
             ω-6 (n-6): 6. C vom Methylende (z.B. Linolsäure, Arachidonsäure)<br><br>
             <strong>Essentielle Fettsäuren:</strong> Können im menschlichen Körper nicht synthetisiert werden
             (kein Enzym für Doppelbindungen jenseits Δ9 von der Carboxylgruppe) → müssen mit
             Nahrung zugeführt werden: Linolsäure (ω-6) und Linolensäure (ω-3).<br><br>
             <strong>ω-3 vs. ω-6:</strong> Ideales Verhältnis ω-6:ω-3 ≈ 2–4:1 (westliche Ernährung: ~15:1!)
             → Entzündungsfördernd bei zu viel ω-6.`,
    })}

    <h3 class="lz-h3" style="margin-top:1.75rem;">Struktur der Triacylglycerine (Fette/Öle)</h3>

    ${renderFormulaBox({
      label:   'Allgemeine Struktur eines Triacylglycerins (Fett)',
      formula: 'Glycerin + 3 Fettsäuren → Triglycerid + 3 H₂O',
      desc:    'Glycerin: HOCH₂-CH(OH)-CH₂OH · Veresterung aller 3 OH-Gruppen mit Fettsäuren · sn-1, sn-2, sn-3: Stereospecific Numbering der Glycerin-Positionen · Natürliche Fette: meist gemischte Triglyceride (verschiedene FS an sn-1/2/3)',
    })}

    ${renderTable({
      headers: ['Fett/Öl', 'Hauptfettsäure(n)', 'gesättigt [%]', 'einfach ungesättigt [%]', 'mehrfach ungesättigt [%]', 'Zustand (25°C)'],
      rows: [
        ['Kokosfett',      'Laurin (C12:0), Myristin (C14:0)',  '87', '6',  '2',  'Fest (Schmp. ~25°C)'],
        ['Palmöl',         'Palmitin (C16:0), Ölsäure (C18:1)', '49', '37', '9',  'Halbfest'],
        ['Rindertalg',     'Stearin (C18:0), Palmitin',          '52', '44', '3',  'Fest'],
        ['Schweineschmalz','Palmitin, Ölsäure',                  '39', '45', '11', 'Halbfest'],
        ['Olivenöl',       'Ölsäure (C18:1) ~80%',              '14', '73', '11', 'Flüssig'],
        ['Rapsöl (mod.)',  'Ölsäure ~60%, Linolensäure ~10%',   '7',  '62', '28', 'Flüssig'],
        ['Sonnenblumenöl', 'Linolsäure (C18:2) ~65%',           '11', '20', '65', 'Flüssig'],
        ['Leinöl',         'Linolensäure (C18:3, ω-3) ~55%',   '10', '18', '70', 'Flüssig (trocknend)'],
        ['Fischöl',        'EPA + DHA (ω-3)',                    '25', '40', '35', 'Flüssig'],
      ],
      highlight: [0, 5, 7],
    })}

    <h3 class="lz-h3" style="margin-top:1.75rem;">Reaktionen der Fette</h3>

    ${renderAccordion([
      {
        title: 'Verseifung — Alkalische Fetthydrolyse (Seifenherstellung)',
        content: `<p class="lz-prose"><strong>Reaktion:</strong>
                  Fett + 3 NaOH → Glycerin + 3 RCOONa (Natriumsalze = Seife)</p>
                  <p class="lz-prose"><strong>Kalt-/Warmverseifung:</strong>
                  Kaltverseifung: Fett + konz. NaOH bei RT → Naturseife.
                  Heißverseifung: mit Dampf → schneller; dann NaCl-Aussalzung → Seife + Glycerin</p>
                  <p class="lz-prose"><strong>Seifenwirkung (Emulgierung):</strong>
                  Amphiphil: Carboxylat-Kopf (hydrophil) + Fettsäurekette (hydrophob).
                  In Wasser: Bildung von Mizellen um Fettpartikel → Durchmesser 1–100 nm.
                  Harte Wasser: Ca(RCOO)₂ und Mg(RCOO)₂ unlöslich → Kalkseife → Schaumverlust.
                  Synthetische Tenside (Detergenzien) lösen das Kalkwasser-Problem (Sulfonate).</p>`,
      },
      {
        title: 'Hydrierung — Härtung von Ölen zu Margarine',
        content: `<p class="lz-prose"><strong>Partielle Hydrierung:</strong>
                  Flüssiges Pflanzenöl + H₂ →(Ni/Pd-Kat., 150–200°C) gehärtetes Fett (Margarine)</p>
                  <p class="lz-prose">Ziel: Umwandlung ungesättigter FS in gesättigte →
                  höherer Schmelzpunkt → feste Konsistenz für Margarine/Backfett.<br><br>
                  <strong>Problem: Trans-Fettsäuren!</strong>
                  Bei unvollständiger Hydrierung entstehen Trans-Doppelbindungen statt cis.
                  Trans-Fette verhalten sich wie gesättigte Fette (erhöhen LDL, senken HDL)
                  → atherosklerotisch! EU-Verordnung 2021: max. 2 g TFA/100 g Fett.
                  Moderne Technologien: Interesterifizierung (kein TFA) oder Fraktionierung.</p>`,
      },
      {
        title: 'Oxidation — Ranzigkeit und Autooxidation',
        content: `<p class="lz-prose">Ungesättigte Fettsäuren können an den Doppelbindungen durch
                  Sauerstoff (aus der Luft) oxidiert werden → <strong>Autooxidation → Ranzigkeit</strong>.</p>
                  <p class="lz-prose"><strong>Mechanismus (radikalisch):</strong><br>
                  Initiation: R–CH=CH–R\' + ³O₂ → ROOH (Lipidperoxid)
                  → bei Wärme: ROOH → RO• + •OH<br>
                  Propagation: RO• + R\'H → ROH + R\'• → + O₂ → R\'OO• → ...<br>
                  Produkte: Aldehyde, Ketone, Alkohole, kurzkettige FS → ranziger Geruch/Geschmack<br><br>
                  <strong>Schutzmaßnahmen:</strong> Antioxidantien (Vit. E, BHA E320, BHT E321 = Radikalfänger);
                  N₂-Begasung; lichtundurchlässige Verpackung; Kühlschrank.</p>`,
      },
      {
        title: 'Phospholipide und biologische Membranen',
        content: `<p class="lz-prose"><strong>Phospholipide (Glycerophospholipide):</strong>
                  Glycerin + 2 Fettsäuren + Phosphatgruppe + polarer Kopf (Cholin, Ethanolamin, Serin).
                  Amphiphil: 2 hydrophobe FS-Schwänze + 1 hydrophiler Phosphatdiester-Kopf.</p>
                  <p class="lz-prose"><strong>Biologische Membran (Lipid-Doppelschicht):</strong>
                  Phospholipide ordnen sich spontan zu Doppelschichten an (Schwänze innen, Köpfe außen).
                  Flüssig-kristallin: laterale Diffusion der Lipide (Fluid Mosaic Model, Singer/Nicolson 1972).
                  Cholesterin: reguliert Membranfluidität (↑ flüssig bei kalt; ↑ starr bei heiß).
                  Integralmembranproteine: in Lipidschicht eingebettet; viele Funktionen (Transport, Rezeptoren).</p>`,
      },
    ])}
  `; }

  // ══════════════════════════════════════════════════════════
  // 9.5.3 — Aminosäuren, Peptide und Proteine
  // ══════════════════════════════════════════════════════════
  _proteine() { return `
    ${renderSubhead('9.5.3 — Aminosäuren, Peptide und Proteine')}

    <h3 class="lz-h3">Die 20 proteinogenen Aminosäuren</h3>
    <p class="lz-prose">
      Aminosäuren sind die Bausteine der Proteine. Alle proteinogenen (= in Proteinen
      vorkommenden) Aminosäuren sind <strong>L-α-Aminosäuren</strong>: Sie tragen
      Amino- (–NH₂) und Carbonsäuregruppe (–COOH) am selben α-C-Atom
      und sind L-konfiguriert (außer Glycin: kein Stereozentrum).
    </p>

    ${renderFormulaBox({
      label:   'Allgemeine Struktur einer L-α-Aminosäure',
      formula: 'H₂N–CH(R)–COOH &nbsp; (mit Seitenkette R)',
      desc:    'α-C: trägt –NH₂, –COOH, –H und Seitenkette R → chiral (außer Gly: R=H) · In Lösung meist Zwitterion: H₃N⁺–CH(R)–COO⁻ · pI = isoelektrischer Punkt: keine Nettoladu',
    })}

    ${renderTable({
      headers: ['AS (3-/1-Buchstabe)', 'Seitenkette (R)', 'Klasse', 'pI', 'Besonderheit'],
      rows: [
        ['Glycin (Gly, G)',      'H',                         'Unpolar, aliphatisch', '5,97', 'Kein Stereozentrum; kleinste AS; hohe Flexibilität in Proteinen'],
        ['Alanin (Ala, A)',      'CH₃',                       'Unpolar, aliphatisch', '6,11', 'Häufigste AS; C-Methylgruppe'],
        ['Valin (Val, V)',       'CH(CH₃)₂',                  'Unpolar, aliphatisch', '5,96', 'Essentiell; verzweigtkettig'],
        ['Leucin (Leu, L)',      'CH₂CH(CH₃)₂',               'Unpolar, aliphatisch', '5,98', 'Essentiell; häufig in Leucin-Reißverschluss-Domänen'],
        ['Isoleucin (Ile, I)',   'CH(CH₃)CH₂CH₃',             'Unpolar, aliphatisch', '6,02', 'Essentiell; zwei Stereozentren'],
        ['Prolin (Pro, P)',      '-(CH₂)₃- (Ringschluss)',    'Unpolar, cyclisch',    '6,30', 'Sekundäre AS; Ring verhindert H-Brücken an N → knickt α-Helix!'],
        ['Phenylalanin (Phe, F)','CH₂C₆H₅',                   'Aromatisch, unpolar',  '5,48', 'Essentiell; aromatischer Ring; PKU (Phenylketonurie)'],
        ['Tryptophan (Trp, W)', 'CH₂-Indolyl',                'Aromatisch, unpolar',  '5,89', 'Essentiell; Indolring; Vorstufe Serotonin; größte AS; UV-Absorption 280 nm'],
        ['Methionin (Met, M)',   'CH₂CH₂SCH₃',                'Schwefelhaltig, unpolar','5,74','Essentiell; Startcodon AUG → immer N-terminal in Translation; SAM'],
        ['Cystein (Cys, C)',     'CH₂SH',                      'Schwefelhaltig',        '5,07', 'SH-Gruppe: Disulfidbindung (–S–S–) zwischen Cys → Proteinstruktur'],
        ['Serin (Ser, S)',       'CH₂OH',                      'Polar, neutral',        '5,68', 'OH-Gruppe; Phosphorylierung (Signalweg); aktives Zentrum Serin-Proteasen'],
        ['Threonin (Thr, T)',    'CH(OH)CH₃',                  'Polar, neutral',        '5,87', 'Essentiell; zwei Stereozentren; O-Glycosylierung'],
        ['Asparagin (Asn, N)',   'CH₂CONH₂',                   'Polar, neutral',        '5,41', 'Amid; N-Glycosylierung; Asn-Pro-Thr: häufige Glycosylierungsstelle'],
        ['Glutamin (Gln, Q)',    'CH₂CH₂CONH₂',                'Polar, neutral',        '5,65', 'Amid; N-Transportform; häufig in Glutamin-Synthetase-Reaktion'],
        ['Tyrosin (Tyr, Y)',     'CH₂C₆H₄OH',                  'Aromatisch, polar',     '5,66', 'Phenol-OH; Phosphorylierung (Tyrosin-Kinasen!); Dopamin-Vorläufer'],
        ['Aspartat (Asp, D)',    'CH₂COO⁻',                    'Negativ geladen',       '2,77', 'Carboxylat; basisch aktiv im aktiven Zentrum (Asp-Proteasen wie HIV-Protease)'],
        ['Glutamat (Glu, E)',    'CH₂CH₂COO⁻',                 'Negativ geladen',       '3,22', 'Carboxylat; Neurotransmitter; Glutamat in Würze (Umami)'],
        ['Lysin (Lys, K)',       '(CH₂)₄NH₃⁺',                 'Positiv geladen',       '9,74', 'Primäres Amin; Acetylierung (Histone); bildet Schiff-Base'],
        ['Arginin (Arg, R)',     '(CH₂)₃NHC(=NH)NH₂ (Guanidinium)', 'Positiv geladen, stark', '10,76', 'pK_s=12,5; immer positiv; Substrat NO-Synthase'],
        ['Histidin (His, H)',    'CH₂-Imidazolyl',              'Pos. geladen (pH-abhäng.)', '7,59', 'pK_s=6,0; Säure-Base-Katalysator in Enzymen; Hämoglobin (O₂-Bindung)'],
      ],
      highlight: [5, 9, 14, 19],
    })}

    <h3 class="lz-h3" style="margin-top:1.75rem;">Peptidbindung und Peptide</h3>

    ${renderFormulaBox({
      label:   'Peptidbindung — Kondensation zweier Aminosäuren',
      formula: 'H₂N–CHR₁–COOH + H₂N–CHR₂–COOH → H₂N–CHR₁–CO–NH–CHR₂–COOH + H₂O',
      desc:    'Peptidbindung: –CO–NH– (zwischen Carbonyl-C einer AS und Amino-N der nächsten) · Partielle Doppelbindungscharakter: C–N-Bindung 130 pm (zwischen σ=147 und π=127 pm) → planar! · ω-Winkel: meist trans (180°); selten cis (bei Pro: 0°) · Keine freie Rotation um die Peptidbindung',
    })}

    ${renderTable({
      headers: ['Peptidbindung — Besonderheiten', 'Erklärung', 'Bedeutung'],
      rows: [
        ['Planarität', 'Mesomerie: C=O ↔ C⁻–O⁻ mit C=N⁺; partielle Doppelbindung C–N → planar', 'Rotations-Einschränkung: nur φ (um N–Cα) und ψ (um Cα–C) frei'],
        ['trans-Konfiguration', 'R-Gruppen auf verschiedenen Seiten der Peptidbindung', 'Weniger sterische Abstoßung als cis; cis nur bei Pro-Peptiden (~30%)'],
        ['Ramachandran-Plot', 'φ und ψ-Winkel erlaubte Bereiche (von Ramachandran 1963)', 'α-Helix: φ=−57°, ψ=−47° · β-Faltblatt: φ=−120°, ψ=+120°'],
        ['Nomenklatur', 'N-Terminus (freies –NH₂) bis C-Terminus (freies –COOH)', 'Sequenz: von N nach C geschrieben (z.B. H₂N–Gly–Ala–Val–COOH)'],
      ],
    })}

    <h3 class="lz-h3" style="margin-top:1.75rem;">Proteinstruktur — vier Ebenen</h3>

    ${renderMerkboxGrid([
      {
        icon: 'fas fa-code',
        title: 'Primärstruktur (1°)',
        text: `Aminosäuresequenz: die lineare Abfolge der AS in der Polypeptidkette.
               Bestimmt durch DNA-Sequenz (Codon-AS-Zuordnung).
               Enthält alle Information zur Faltung (Anfinsen-Dogma: Primärstruktur bestimmt 3D).
               Beispiel: Insulin: A-Kette (21 AS) + B-Kette (30 AS), durch 2 Disulfidbrücken verbunden.`,
      },
      {
        icon: 'fas fa-spiral',
        title: 'Sekundärstruktur (2°)',
        text: `Lokale räumliche Struktur durch H-Brücken zwischen Peptidbindungsatomen.
               α-Helix: rechtsgängig; 3,6 AS/Windung; H-Brücke zwischen C=O (i) und N–H (i+4).
               β-Faltblatt: parallel oder antiparallel; gestreckte Ketten; seitwärts H-Brücken.
               β-Turn: 4 AS; U-Kehre; H-Brücke C=O(1) – NH(4); verbindet β-Stränge.
               310-Helix, π-Helix: seltener.`,
      },
      {
        icon: 'fas fa-cube',
        title: 'Tertiärstruktur (3°)',
        text: `Gesamte 3D-Faltung der Polypeptidkette im Raum.
               Stabilisiert durch: Disulfidbindungen (–S–S– bei Cys) · hydrophobe Wechselwirkungen
               (unpolare Seitenketten im Inneren) · Ionenbindungen (Asp/Glu ↔ Lys/Arg) ·
               H-Brücken (Seitenketten) · Van-der-Waals-Kräfte.
               Globuläre Proteine (Enzyme, Hämoglobin) vs. Faserproteine (Kollagen, Keratin).`,
      },
      {
        icon: 'fas fa-layer-group',
        title: 'Quartärstruktur (4°)',
        text: `Assoziation mehrerer Polypeptidketten (Untereinheiten/Monomere) zu einem
               Multiproteinkomplex (Oligomer).
               Hämoglobin: Tetramer (2α + 2β); kooperative O₂-Bindung (Sigmoide Kurve).
               Kollagen: Tripelhelix (3 Ketten).
               Antikörper IgG: 4 Ketten (2 schwer, 2 leicht) durch Disulfidbrücken.`,
      },
    ])}

    ${renderAccordion([
      {
        title: 'Denaturierung und Renaturierung von Proteinen',
        content: `<p class="lz-prose"><strong>Denaturierung:</strong>
                  Zerstörung der Sekundär-, Tertiär- und Quartärstruktur
                  (die Primärstruktur bleibt intakt!).
                  Ursachen: Hitze (>40–60°C; erhöhte thermische Bewegung bricht H-Brücken),
                  Extremer pH (Ionisierung/Desionisierung von Seitenketten),
                  chaotrope Reagenzien (Harnstoff 8M, Guanidiniumchlorid 6M),
                  organische Lösungsmittel (Ethanol; SDS = Natriumdodecylsulfat),
                  Schwermetalle (Hg²⁺, Pb²⁺ blockieren SH-Gruppen).</p>
                  <p class="lz-prose"><strong>Renaturierung:</strong>
                  Wenn Denaturierung reversibel → Protein faltet zurück.
                  Anfinsen-Experiment 1961: Ribonuclease A → 8M Harnstoff + β-Mercaptoethanol (alle S–S gespalten) → entfaltet; dann: Entfernung Denaturans → spontane Rückfaltung zur nativen Form → gleiche Aktivität! Nobel-Preis 1972.
                  Chaperone (Hsp70, GroEL) helfen bei der Faltung in vivo → vermeiden Aggregation.</p>`,
      },
      {
        title: 'Enzymaktivität — aktives Zentrum und Substratspezifität',
        content: `<p class="lz-prose">Enzyme sind Proteinkatalysatoren mit enormer Spezifität.
                  Das <strong>aktive Zentrum</strong> ist eine Tasche/Spalte im Protein
                  mit 3–12 Aminosäureresten, die das Substrat binden und katalytisch umwandeln.</p>
                  <p class="lz-prose"><strong>Schlüssel-Schloss-Modell (Fischer, 1894):</strong>
                  Substrat passt exakt in das aktive Zentrum wie Schlüssel ins Schloss → starre Komplementarität.</p>
                  <p class="lz-prose"><strong>Induced Fit-Modell (Koshland, 1958):</strong>
                  Substratbindung induziert Konformationsänderung des Enzyms → bessere Passung →
                  erklärt breiteres Substratspektrum mancher Enzyme.</p>
                  <p class="lz-prose"><strong>Katalytische Triade (Serin-Proteasen: Trypsin, Chymotrypsin):</strong>
                  Ser195 – His57 – Asp102: zusammen wirken sie als Säure-Base-System.
                  Asp stabilisiert protoniertes His → His aktiviert Ser → Ser greift C=O des Substrats an
                  → Acyl-Enzym-Intermediat → H₂O → Freisetzung.</p>`,
      },
      {
        title: 'Peptidanalytik — Sequenzierung',
        content: `<p class="lz-prose"><strong>Edman-Abbau (1950):</strong>
                  Phenylisothiocyanat (PITC) reagiert mit freiem N-Terminus → zyklisches PTH-AS
                  → HPLC-Identifizierung → N-terminale AS bestimmt.
                  Pro Schritt: 1 AS vom N-Terminus entfernt; Peptid bleibt intakt → nächste Runde.
                  Praktische Grenze: ~50 AS (Fehlerakkumulation).</p>
                  <p class="lz-prose"><strong>Massenspektrometrie (ESI-MS/MS, MALDI-TOF):</strong>
                  Peptid fragmentiert im MS → Fragmente (b-Ionen, y-Ionen) → Sequenz aus Massendifferenzen.
                  Moderner Standard; kann Proteine in Gemischen sequenzieren (Proteomics).
                  Nobel-Preis 2002: Fenn und Tanaka für ESI und MALDI.</p>`,
      },
    ])}

    ${renderInfobox({
      type: 'success', icon: 'fas fa-graduation-cap', title: 'Zusammenfassung Naturstoffe',
      body: `<strong>Kohlenhydrate:</strong> (CH₂O)ₙ · Aldosen/Ketosen · Pyranose/Furanose-Ring · Mutarotation · anomeres C · α(1→4): Stärke (verdaulich) · β(1→4): Cellulose (unverdaulich, H-Brücken-Fibrillen)<br>
             <strong>Disaccharide:</strong> Saccharose (α,β-1,2: nicht reduzierend!) · Lactose (β-1,4: reduzierend) · Maltose (α-1,4: reduzierend)<br>
             <strong>Fettsäuren:</strong> gesättigt (fest) vs. ungesättigt cis (flüssig); trans (schädlich!) · ω-3/ω-6 essentiell<br>
             <strong>Fette = Triglyceride:</strong> Glycerin + 3 FS · Verseifung → Seife + Glycerin · Hydrierung → Margarine (Trans-Problem!)<br>
             <strong>Aminosäuren:</strong> L-α-Aminosäuren · Zwitterion · pI = ½(pK₁+pK₂) · 20 proteinogen<br>
             <strong>Peptidbindung:</strong> –CO–NH– · planar (Mesomerie) · trans (meist) · N→C-Terminus<br>
             <strong>Proteinstruktur:</strong> 1° Sequenz · 2° α-Helix/β-Faltblatt (H-Brücken) · 3° Tertiär (Disulfide, hydrophob) · 4° Quaternär`,
    })}
  `; }

  init() {
    i18n.init();
    initScrollReveal();
    initInteractive(document);
    initTabs();
  }
}