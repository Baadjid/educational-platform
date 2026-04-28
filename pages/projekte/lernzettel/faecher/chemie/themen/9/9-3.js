// pages/projekte/lernzettel/faecher/chemie/themen/9/9-3.js
// Kapitel 9.3 — Aromatische Kohlenwasserstoffe
// 9.3.1  Der aromatische Zustand
// 9.3.2  Substituierte Benzene
// 9.3.3  Biologische Aktivität aromatischer Verbindungen

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
  { key: '931', icon: 'fas fa-ring',          label: '9.3.1 Aromatischer Zustand'    },
  { key: '932', icon: 'fas fa-exchange-alt',  label: '9.3.2 Substituierte Benzene'   },
  { key: '933', icon: 'fas fa-dna',           label: '9.3.3 Biologische Aktivität'   },
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
  return `<nav class="wim-tabs" role="tablist" id="tabs93">${nav}</nav>${panels}`;
}

function initTabs() {
  const nav = document.getElementById('tabs93');
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

export default class Chemie_9_3 {
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
          <i class="fas fa-chevron-right"></i><span>9.3</span>
        </div>
        <h1 class="lz-sub-title">Aromatische Kohlenwasserstoffe<br><em>Benzol, Aromatizität und SEAr</em></h1>
        <p class="lz-sub-desc">
          Hückel-Regel · Benzol-Struktur · Elektrophile aromatische Substitution ·
          Orientierungsregeln · Polycyclische Aromaten · biologische Aktivität
        </p>
        ${renderTags(['Kap. 9.3', 'Aromatik', 'Benzol', 'SEAr', 'Hückel', 'LK Chemie BW'])}
      </div>
    </section>

    <section class="lz-content-section">
      <div class="lz-section-wrap">
        ${buildWimHTML(k => {
          if (k === '931') return this._aromat();
          if (k === '932') return this._substituiert();
          if (k === '933') return this._biologie();
          return '';
        })}
      </div>
    </section>

    <section class="lz-content-section" style="padding:1.5rem 0 3rem;">
      <div class="lz-section-wrap">
        ${renderPageNav({
          prev: { label: '9.2 Aliphatische KW',          link: `${BASE}/themen/9/9-2` },
          next: { label: '9.4 Funktionelle Gruppen',      link: `${BASE}/themen/9/9-4` },
        }, BASE)}
      </div>
    </section>
    ${footerHTML(this.router)}
  `; }

  _aromat() { return `
    ${renderSubhead('9.3.1 — Der aromatische Zustand')}

    <h2 class="lz-h2">Benzol — Geschichte und Struktur</h2>
    <p class="lz-prose">
      Benzol (C₆H₆) wurde 1825 von Michael Faraday entdeckt. Die ungewöhnliche
      Stabilität und die Ungewilligkeit, wie ein Alken zu reagieren, verblüffte
      die Chemiker für Jahrzehnte. August Kekulé (1865) schlug die cyclische
      Doppelbindungsstruktur vor — die Wirklichkeit ist komplexer.
    </p>

    ${renderMerkboxGrid([
      {
        icon: 'fas fa-ring',
        title: 'Kekulé-Struktur und ihre Unzulänglichkeit',
        text: `Kekulé (1865): alternierend C–C und C=C im 6-Ring.
               Problem 1: Zwei Kekulé-Strukturen sind gleichwertig → Resonanzhybrid!
               Problem 2: Ein Alken würde mit Br₂ addieren → Benzol tut das nicht (ohne Kat.)!
               Problem 3: Wenn die Bindungen alternieren, wäre ortho-Substitution in 2 Isomeren
               möglich → nur 1 ortho-Isomer bekannt!`,
      },
      {
        icon: 'fas fa-circle',
        title: 'Resonanzhybrid — die Wahrheit',
        text: `Benzol ist ein Resonanzhybrid beider Kekulé-Strukturen.
               Alle C–C-Bindungen sind gleich lang (139 pm; zwischen 134 pm C=C und 154 pm C–C).
               6 π-Elektronen gleichmäßig über den gesamten Ring delokalisiert.
               Darstellung: Ring mit Kreis innen (statt alternierenden Strichen).`,
      },
      {
        icon: 'fas fa-chart-bar',
        title: 'Resonanzenergie — Messung der Stabilisierung',
        text: `Benzol ist ~150 kJ/mol stabiler als hypothetisches „Cyclohexatrien":
               Hydrierung Benzol: ΔH = −208 kJ/mol (für 3 C=C erwartet: −360 kJ/mol).
               Differenz = Resonanzenergie ≈ 150 kJ/mol → enorme Stabilisierung!
               Diese Stabilisierung macht Aromaten träge gegenüber Addition.`,
      },
      {
        icon: 'fas fa-layer-group',
        title: 'Orbitalerklärung der Aromatizität',
        text: `Alle 6 C-Atome: sp²-hybridisiert, planar (120°).
               Je ein unhybridisiertes p-Orbital senkrecht zur Ringebene.
               6 p-Orbitale überlappen zu 6 π-Molekülorbitalen:
               3 bindend (besetzt), 3 antibindend (leer).
               6 π-Elektronen (3 Paare) besetzen die 3 bindenden MOs.`,
      },
    ])}

    <h3 class="lz-h3" style="margin-top:1.75rem;">Hückel-Regel — Aromatizität</h3>
    <p class="lz-prose">
      Erich Hückel (1931) formulierte die Bedingungen für Aromatizität:
    </p>

    ${renderFormulaBox({
      label:   'Hückel-Regel',
      formula: 'Ein cyclisch konjugiertes π-System ist aromatisch, wenn es (4n + 2) π-Elektronen enthält (n = 0, 1, 2, 3, …)',
      desc:    'n=0: 2 π-e⁻ · n=1: 6 π-e⁻ (Benzol) · n=2: 10 π-e⁻ · n=3: 14 π-e⁻ · Antiaromatisch: 4n π-e⁻ (n=1: 4 e⁻ = Cyclobutadien; n=2: 8 e⁻ = Cyclooctatetraen)',
    })}

    ${renderTable({
      headers: ['Verbindung', 'π-Elektronen', '4n+2?', 'Aromatisch?', 'Eigenschaften'],
      rows: [
        ['Benzol C₆H₆',              '6 (n=1)', 'Ja (6=4·1+2)', 'Ja',         'Prototyp Aromat; sehr stabil; SEAr'],
        ['Cyclopentadienyl-Anion C₅H₅⁻', '6 (n=1)', 'Ja',        'Ja (6 π)',   'Aromatisches Ion! pK_s(CpH) ≈ 16; stabilisiert durch Aromatizität'],
        ['Tropyliumkation C₇H₇⁺',    '6 (n=1)', 'Ja',            'Ja (6 π)',   'Aromatisches Kation; sehr stabil'],
        ['Naphthalin C₁₀H₈',         '10 (n=2)','Ja (10=4·2+2)','Ja',         'Polycyclisch; ähnliche Reaktionen wie Benzol'],
        ['Azulen C₁₀H₈',             '10 (n=2)','Ja',            'Ja',         'Isomer Naphthalin; Dipol! 5- und 7-Ring fusioniert'],
        ['Pyridin C₅H₅N',            '6 (n=1)', 'Ja',            'Ja',         'Heteroaromat; N ersetzt CH; sp²-N im Ring'],
        ['Pyrrol C₄H₄NH',            '6 (n=1)', 'Ja',            'Ja',         'Heteroaromat; N-FEP Teil des π-Systems; +M-Effekt'],
        ['Furan C₄H₄O',              '6 (n=1)', 'Ja',            'Ja',         'Heteroaromat; O-FEP im π-System; weniger stabil als Benzol'],
        ['Cyclobutadien C₄H₄',       '4 (n=1)', 'Nein (4=4·1)', 'Antiaromat.','Extrem instabil; t½ < ms; rechteckige Struktur'],
        ['Cyclooctatetraen C₈H₈',    '8 (n=2)', 'Nein (8=4·2)', 'Nicht-arom.','Wanne-Form; reagiert wie Alken (Ringflip nötig für Planarität)'],
        ['[18]Annulen C₁₈H₁₈',       '18 (n=4)','Ja (18=4·4+2)','Ja',         'Aufgrund Größe schwächer aromatisch; NMR beweist Aromatizität'],
      ],
      highlight: [0, 4, 8],
    })}
  `; }

  _substituiert() { return `
    ${renderSubhead('9.3.2 — Substituierte Benzene')}

    <h3 class="lz-h3">Elektrophile aromatische Substitution (SEAr) — Mechanismus</h3>
    <p class="lz-prose">
      Die typische Reaktion des Benzolrings ist nicht Addition (würde Aromatizität zerstören),
      sondern <strong>elektrophile Substitution</strong>: Ein H-Atom wird durch ein Elektrophil
      ersetzt. Die Aromatizität bleibt erhalten.
    </p>

    ${renderInfobox({
      type: '', icon: 'fas fa-list-ol', title: 'SEAr-Mechanismus (Zweistufig)',
      body: `<strong>Schritt 1 (langsam, geschwindigkeitsbestimmend):</strong><br>
             Elektrophil E⁺ greift das π-System an → σ-Komplex (Wheland-Intermediat, Areniumion).
             Das positive Ion ist über drei C-Atome delokalisiert (drei Resonanzstrukturen).
             Hier ist die Aromatizität temporär aufgehoben.<br><br>
             <strong>Schritt 2 (schnell):</strong><br>
             Proton H⁺ wird abgespalten (Base nimmt es auf) → Aromatizität wird wiederhergestellt.
             Kein Nu-Angriff wie bei normaler Elektrophiladdition → Substitution, nicht Addition!<br><br>
             <strong>Warum Substitution statt Addition?</strong>
             Der Gewinn an Aromatizitätsstabilisierung (150 kJ/mol) überwiegt den Verlust
             einer C–H-Bindung → Substitution energetisch günstiger.`,
    })}

    <h3 class="lz-h3" style="margin-top:1.75rem;">Wichtige SEAr-Reaktionen</h3>

    ${renderTable({
      headers: ['Reaktion', 'Elektrophil E⁺', 'Erzeugung von E⁺', 'Produkt', 'Bedingungen'],
      rows: [
        ['Nitrierung',       'NO₂⁺ (Nitroniumion)', 'HNO₃ + H₂SO₄ → NO₂⁺ + H₂O + HSO₄⁻', 'Nitrobenzol C₆H₅NO₂', '0–60°C; konz. H₂SO₄ als Katalysator + Kälte; >60°C: Dinitro'],
        ['Sulfonierung',     'SO₃ (oder +H→ HSO₃⁺)', 'H₂SO₄(röchend)/SO₃', 'Benzolsulfonsäure C₆H₅SO₃H', '~80°C; reversibel! (rückgängig mit Dampf)'],
        ['Halogenierung',    'X⁺ (Br⁺ oder Cl⁺)', 'Br₂/FeBr₃ oder Cl₂/AlCl₃ (Lewis-Säure erzeugt E⁺)', 'Brombenzol/Chlorbenzol', 'Kein Licht nötig! (SEAr, nicht Radikale)'],
        ['Friedel-Crafts-Alkylierung', 'R⁺ (Carbeni.-ion)', 'RCl + AlCl₃ → R⁺ + AlCl₄⁻', 'Alkylbenzol', 'Nachteil: Mehrfachalkylierung; Umlagerungen möglich'],
        ['Friedel-Crafts-Acylierung',  'RCO⁺ (Acylium)', 'RCOCl + AlCl₃ → RCO⁺ + AlCl₄⁻', 'Arylketon', 'Kein Umlagerungsproblem; Stöchiometrie AlCl₃ nötig'],
      ],
      highlight: [0, 2, 4],
    })}

    <h3 class="lz-h3" style="margin-top:1.75rem;">Orientierungsregeln — Substituenten lenken den Angriff</h3>
    <p class="lz-prose">
      Wenn Benzol bereits einen Substituenten trägt, greift das Elektrophil bei der
      zweiten Substitution bevorzugt an bestimmten Positionen an.
      Die Position hängt von der elektronischen Wirkung des ersten Substituenten ab.
    </p>

    ${renderTable({
      headers: ['Substituenten-Typ', 'Effekt auf Ring', 'Bevorzugte Position', 'Beispiele', 'Reaktivität vs. Benzol'],
      rows: [
        ['Ortho-/para-Direktoren (+M oder starker +I)',
         'Erhöhen e⁻-Dichte am Ring; aktivieren (besonders o und p)',
         'ortho (1,2) und para (1,4)',
         '–OH, –OR, –NH₂, –NHR, –NR₂, –F, –Cl, –Br, –I, –CH₃, –C₂H₅',
         'Reaktiver als Benzol (außer Halogene: leicht langsamer)'],
        ['meta-Direktoren (–M oder starker –I)',
         'Erniedrigen e⁻-Dichte am Ring; deaktivieren (besonders o und p, daher relativ meta)',
         'meta (1,3)',
         '–NO₂, –CN, –CHO, –COOH, –COOR, –SO₃H, –C≡N, –NR₃⁺, –CF₃',
         'Viel langsamer als Benzol; braucht härtere Bedingungen'],
      ],
      highlight: [0, 1],
    })}

    ${renderInfobox({
      type: 'blue', icon: 'fas fa-lightbulb', title: 'Warum ortho/para und meta?',
      body: `<strong>+M-Substituent (z.B. –OH am Benzol → Phenol):</strong><br>
             Resonanzstrukturen zeigen erhöhte e⁻-Dichte an <em>ortho</em> und <em>para</em>:
             –O–C₆H₅ → [–O=C₆H₄⁻ ↔ …] → ortho und para negativ geladen (nukleophiler) →
             E⁺ greift dort an.<br><br>
             <strong>–M-Substituent (z.B. –NO₂):</strong><br>
             Resonanzstrukturen zeigen erniedrigte e⁻-Dichte an <em>ortho</em> und <em>para</em>:
             –NO₂ zieht Elektronen aus ortho und para ab → diese sind e⁻-ärmer als meta →
             E⁺ greift bevorzugt an meta an (der am wenigsten deaktivierte Ort).`,
    })}

    <h3 class="lz-h3" style="margin-top:1.75rem;">Nomenklatur substituierter Benzole</h3>

    ${renderTable({
      headers: ['Trivialname', 'IUPAC-Name', 'Formel', 'Eigenschaften / Verwendung'],
      rows: [
        ['Toluol',          'Methylbenzol',        'C₆H₅–CH₃',          'Lösungsmittel; Farbe (Sdp. 111°C); Ausgangsstoff für TNT'],
        ['Xylol',           '1,2-/1,3-/1,4-Dimethylbenzol','C₆H₄(CH₃)₂', 'Lösungsmittel; Herstellung Polyester (PET aus Terephthalsäure)'],
        ['Cumol',           'Isopropylbenzol',     'C₆H₅–CH(CH₃)₂',    'Ausgangsstoff Phenol+Aceton (Cumol-Phenol-Prozess)'],
        ['Styrol',          'Vinylbenzol (Ethenylbenzol)', 'C₆H₅–CH=CH₂','Monomer Polystyrol (PS, EPS=Styropor); Sdb. 145°C'],
        ['Phenol',          'Hydroxybenzol',       'C₆H₅–OH',           'Desinfektionsmittel; Ausgangsstoff Bisphenol A, Aspirin, Epoxidharze'],
        ['Anilin',          'Aminobenzol (Benzenamin)', 'C₆H₅–NH₂',     'Farbstoffindustrie (Azofarbstoffe); Polyurethan-Ausgangsstoff'],
        ['Benzoesäure',     'Benzenecarbonsäure',  'C₆H₅–COOH',         'Konservierungsmittel (E210); pK_s=4,20; Darstellung durch KMnO₄-Oxidation von Toluol'],
        ['Benzaldehyd',     'Benzencarbaldehyd',   'C₆H₅–CHO',          'Bittermandelöl; Backgeschmack; Parfüm; Aromachemie'],
        ['Nitrobenzol',     'Nitrobenzol',         'C₆H₅–NO₂',          'Ausgangsstoff Anilin (durch Reduktion); gelblich, giftig'],
        ['Chlorbenzol',     'Chlorbenzol',         'C₆H₅–Cl',           'Lösungsmittel; Ausgangsstoff DDT (heute verboten)'],
        ['Acetophenon',     '1-Phenylethanon',     'C₆H₅–COCH₃',        'Riechstoff; FrC-Acylierung: C₆H₆ + CH₃COCl/AlCl₃'],
      ],
      highlight: [0, 4, 5],
    })}

    <h3 class="lz-h3" style="margin-top:1.75rem;">Polycyclische aromatische Kohlenwasserstoffe (PAK)</h3>

    ${renderTable({
      headers: ['PAK', 'Struktur', 'Ringe', 'Vorkommen', 'Besonderheit'],
      rows: [
        ['Naphthalin',   'C₁₀H₈', '2 ankondensierte Benzolringe',   'Steinkohleteer; historisch: Mottenkugeln', 'Resonanzenergie 255 kJ/mol; SEAr bevorzugt Position 1'],
        ['Anthracen',    'C₁₄H₁₀','3 linear ankondensiert',          'Steinkohleteer; Farbstoffvorläufer',       'Position 9/10 reaktivstes SEAr-Zentrum; UV-aktiv'],
        ['Phenanthren',  'C₁₄H₁₀','3 angular ankondensiert',         'Steinkohleteer; Isomer Anthracen',         'Stabiler als Anthracen; Grundgerüst Steroide!'],
        ['Pyren',        'C₁₆H₁₀','4 Ringe (komplex fusioniert)',    'PAK-Abgase; Verbrennungsprodukte',         'Intensiv fluoreszierend; gut gelöst in Öl'],
        ['Benzo[a]pyren','C₂₀H₁₂','5 Ringe (bay-region)',            'Zigarettenrauch, Grillrauch, Abgas',       'Stark krebserzeugend! (IARC Gruppe 1); epoxid-diol-Aktivierung'],
        ['Coronen',      'C₂₄H₁₂','7 Ringe (kreisförmig)',           'PAK-Abgase; Rußpartikel',                  'Hochsymmetrisch; ein zentraler Ring'],
      ],
      highlight: [3, 4],
    })}
  `; }

  _biologie() { return `
    ${renderSubhead('9.3.3 — Biologische Aktivität aromatischer Verbindungen')}

    <h3 class="lz-h3">Aromatische Verbindungen in Biologie und Medizin</h3>
    <p class="lz-prose">
      Aromatische Ringe kommen in unzähligen biologisch aktiven Molekülen vor —
      von DNA-Basen über Aminosäuren bis zu Hormonen, Arzneimitteln und Toxinen.
      Die planare, rigide Struktur des Aromaten und seine Fähigkeit zu
      π-π-Stacking und hydrophoben Wechselwirkungen sind biologisch entscheidend.
    </p>

    ${renderTable({
      headers: ['Verbindungsklasse', 'Beispiele', 'Aromatischer Ring', 'Biologische Funktion'],
      rows: [
        ['DNA-Basen (Purine)',         'Adenin, Guanin',                  'Bicyclisch (Purin): Pyrimidin + Imidazol fusioniert', 'Genetische Information; Watson-Crick-Basenpaarung'],
        ['DNA-Basen (Pyrimidine)',     'Cytosin, Thymin, Uracil',         'Pyrimidinring (6-gliedrig, 2N)',                    'Komplementäre Basenpaarung; H-Brücken'],
        ['Aromatische Aminosäuren',    'Phe, Tyr, Trp, His',              'Phenyl (Phe); Phenol (Tyr); Indol (Trp); Imidazol (His)', 'Proteinstruktur (hydrophober Kern); Enzymkatalyse (His)'],
        ['Hormone',                    'Thyroxin (T₄), Östrogen, Testosteron', 'Phenyl+Phenol (Thyroxin); Steroid (Östrogen/Test.)', 'Signalmoleküle; hormonelle Regulation'],
        ['Neurotransmitter',           'Dopamin, Serotonin, Adrenalin',   'Catechol (Dopamin/Adrenalin); Indol (Serotonin)',   'Synaptische Übertragung; Stimmung; Bewegung'],
        ['Vitamine',                   'Vitamin K, Vitamin E (Tocopherol)','Naphthochinon (Vit. K); Chroman (Vit. E)',          'Blutgerinnung; Antioxidans'],
        ['Arzneimittel',               'Aspirin, Ibuprofen, Paracetamol, Penicillin', 'Phenyl- oder Heteroaryl-Gruppen', 'Schmerz, Entzündung, Fieber; Antibiose'],
        ['Farbstoffe',                 'Indigo, Häm, Chlorophyll, Azofarbstoffe', 'Ausgedehnte π-Systeme',              'Farbe durch Lichtabsorption (π→π*-Übergänge)'],
        ['PAK und Toxine',             'Benzo[a]pyren, Aflatoxin, Benzol', 'Mehrkernige Aromaten',                    'Mutagenität; Kanzerogenität (DNA-Addukte nach Epoxidierung)'],
        ['Antibiotika',                'Chloramphenicol, Tetracycline',   'Nitrophenyl (Chloramphenicol); polycyclisch (Tetracyclin)', 'Protein-Biosynthese-Hemmung'],
      ],
      highlight: [0, 2, 4, 8],
    })}

    <h3 class="lz-h3" style="margin-top:1.75rem;">Karzinogenität von PAK — Metabolische Aktivierung</h3>
    <p class="lz-prose">
      PAK selbst sind meist nicht direkt krebserzeugend — sie werden erst durch
      Stoffwechselenzyme (Cytochrom P450) zu reaktiven Elektrophilen metabolisiert,
      die dann an DNA-Basen binden und Mutationen auslösen.
    </p>

    ${renderAccordion([
      {
        title: 'Benzo[a]pyren — Metabolismus und DNA-Schaden',
        content: `<p class="lz-prose"><strong>Schritt 1:</strong> CYP1A1/CYP1B1 epoxidiert die 7,8-Doppelbindung
                  → Benzo[a]pyren-7,8-epoxid<br>
                  <strong>Schritt 2:</strong> Epoxidhydrolase öffnet Epoxid → 7,8-Diol<br>
                  <strong>Schritt 3:</strong> CYP3A4 epoxidiert die 9,10-Doppelbindung →
                  (+)-anti-Benzo[a]pyren-7,8-diol-9,10-epoxid (BPDE) — das eigentliche Karzinogen!<br>
                  <strong>Schritt 4:</strong> BPDE reagiert mit dem N2 von Guanin in DNA →
                  stabiler DNA-Addukt → wenn nicht repariert: Mutation (G→T Transversion)<br>
                  → aktiviertes p53-Tumorsuppressorgen: Schlüsselmutation bei Lungenkrebs durch Rauchen</p>
                  <p class="lz-prose"><strong>Schutzenzyme:</strong> Glutathion-S-Transferasen (GST) konjugieren BPDE mit Glutathion → wasserlöslich → Ausscheidung.
                  Genetische Varianten von GST → unterschiedliches Krebsrisiko.</p>`,
      },
      {
        title: 'Aromatische Aminosäuren — Tyrosin-Biochemie',
        content: `<p class="lz-prose"><strong>Tyrosin</strong> (4-Hydroxyphenylalanin) ist Ausgangsstoff für:</p>
                  <p class="lz-prose">
                  Tyrosin → Dihydroxyphenylalanin (DOPA) →(Dopadecarboxylase) Dopamin
                  → (Dopamin-β-Hydroxylase) Noradrenalin → (PNMT) Adrenalin<br><br>
                  Tyrosin → Melanin (Pigment; Tyrosinase; fehlt bei Albinismus)<br>
                  Tyrosin → Thyroxin T₄ (Schilddrüsenhormon; enthält 4 Jod-Atome am Ring!)<br>
                  Tyrosin → Coenzym Q (Ubichinon; Atmungskette)<br><br>
                  <strong>Phenylketonurie (PKU):</strong>
                  Fehlende Phenylalanin-Hydroxylase → Phe sammelt sich an → Neurotoxizität.
                  Behandlung: Phe-arme Diät. Screening: Guthrie-Test bei Neugeborenen.</p>`,
      },
      {
        title: 'Heteroaromaten in der Biologie',
        content: `<p class="lz-prose"><strong>Purine (Adenin, Guanin):</strong>
                  Bicyclischer Heteroaromat (Pyrimidin + Imidazol fusioniert).
                  In DNA/RNA; ATP/ADP/AMP; Kofaktoren (FAD, NAD⁺ enthalten Adenin).<br><br>
                  <strong>Pyrimidine (Cytosin, Thymin, Uracil):</strong>
                  6-gliedriger Heteroaromat mit zwei N-Atomen.
                  Cytosin + Guanin: 3 H-Brücken (stärker als A-T/A-U: 2 H-Brücken).<br><br>
                  <strong>Histidin im aktiven Zentrum:</strong>
                  Imidazolring (pK_s ≈ 6,0): kann bei physiologischem pH sowohl protoniert
                  als auch deprotoniert vorliegen → perfekt als Säure-Base-Katalysator!
                  Beispiel: Serin-Proteasen (Trypsin, Chymotrypsin): His · Ser · Asp Triade.<br><br>
                  <strong>Porphyrin-System:</strong>
                  Tetrapyrrol-Makrocyclus (4 Pyrrolringe + Brückenkohlenstoffe) →
                  aromatisches System mit 18 π-Elektronen (Hückel n=4).
                  Zentral: Fe²⁺ (Häm) oder Mg²⁺ (Chlorophyll) oder Co³⁺ (Vit. B₁₂).</p>`,
      },
    ])}

    ${renderTable({
      headers: ['Aromatisches Arzneimittel', 'Wirkstoffklasse', 'Ring-System', 'Wirkmechanismus'],
      rows: [
        ['Aspirin (Acetylsalicylsäure)', 'NSAID',             'Phenyl + Ester + Säure',       'Irreversible COX-1/2-Hemmung durch Acetylierung → kein PG'],
        ['Ibuprofen',                    'NSAID',             'Isobutylphenyl',                'Reversible COX-1/2-Hemmung; racemisch (S-Form aktiv)'],
        ['Paracetamol (Acetaminophen)',   'Analgetikum',       'Aminophenol + Amid',            'COX-3? Unklarer Mech.; Lebertoxisch bei Überdosis (NAPQI)'],
        ['Penicillin G',                 'β-Lactam-Antibiotikum','Phenyl + β-Lactam + Thiazolidin', 'PBP-Hemmung → Zellwandsynthesehemmung → Bakterientod'],
        ['Chlorpromazin',                'Neuroleptikum',      'Phenothiazin (tricyclisch)',    'D₂-Dopamin-Antagonist; schizophrenie-behandlung'],
        ['Tamoxifen',                    'SERM (Antiöstrogen)','Stilben-Grundgerüst',           'ERα-Modulierung; Brustkrebstherapie'],
        ['Atorvastatin (Lipitor)',        'Statin',            'Pyrrole + Fluorophenyl',        'HMG-CoA-Reduktase-Hemmer → weniger Cholesterol'],
        ['Ciprofloxacin',                'Chinolon-Antibiotikum','Fluorchinolon',               'DNA-Gyrase-Hemmung (Topoisomerase II) → kein Bakterien-DNA-Replikation'],
      ],
      highlight: [0, 3, 7],
    })}

    ${renderInfobox({
      type: 'success', icon: 'fas fa-graduation-cap', title: 'Zusammenfassung — Aromatische KW',
      body: `<strong>Aromatizität:</strong> Hückel 4n+2 π-e⁻ · planar · cyclisch konjugiert · Benzol: 6 π-e⁻ (n=1)<br>
             <strong>Resonanzenergie:</strong> ~150 kJ/mol bei Benzol → Träge gegenüber Addition<br>
             <strong>SEAr-Mechanismus:</strong> E⁺ → σ-Komplex (Areniumion) → H⁺ weg → Aromatizität zurück<br>
             <strong>Wichtige SEAr:</strong> Nitrierung (NO₂⁺/H₂SO₄) · Halogenierung (X₂/Lewis-Säure) · Friedel-Crafts (AlCl₃)<br>
             <strong>Orientierung:</strong> +M/+I → o/p-Direktoren · −M/−I → m-Direktoren<br>
             <strong>PAK:</strong> Naphthalin, Anthracen, Benzo[a]pyren (krebserzeugend nach Aktivierung)<br>
             <strong>Biologie:</strong> DNA-Basen, Aminosäuren (Phe/Tyr/Trp/His), Neurotransmitter, Hormone, Pharmaka`,
    })}
  `; }

  init() {
    i18n.init();
    initScrollReveal();
    initInteractive(document);
    initTabs();
  }
}