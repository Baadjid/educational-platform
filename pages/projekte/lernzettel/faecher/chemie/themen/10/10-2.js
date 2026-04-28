// pages/projekte/lernzettel/faecher/chemie/themen/10/10-2.js
// Kapitel 10.2 — Farbstoffe
// 10.2.1  Grundlagen der Farbigkeit
// 10.2.2  Natürliche Farbstoffe
// 10.2.3  Synthetische Farbstoffe
// 10.2.4  Färbeverfahren

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
  { key: '1021', icon: 'fas fa-eye',           label: '10.2.1–2 Farbigkeit & Naturfarbst.' },
  { key: '1022', icon: 'fas fa-palette',       label: '10.2.3–4 Synth. Farbstoffe & Färben'},
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
  return `<nav class="wim-tabs" role="tablist" id="tabs102">${nav}</nav>${panels}`;
}

function initTabs() {
  const nav = document.getElementById('tabs102');
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

export default class Chemie_10_2 {
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
          <i class="fas fa-chevron-right"></i><span>Kapitel 10</span>
          <i class="fas fa-chevron-right"></i><span>10.2</span>
        </div>
        <h1 class="lz-sub-title">Farbstoffe<br><em>Chromophore, Auxochrome und Färbeverfahren</em></h1>
        <p class="lz-sub-desc">
          Lichtabsorption · Chromophor · Auxochrom · Azofarbstoffe ·
          Indigo · Reaktivfarbstoffe · Beizenfärbung
        </p>
        ${renderTags(['Kap. 10.2', 'Farbstoffe', 'Chromophor', 'Azofarbstoff', 'Indigo', 'LK Chemie BW'])}
      </div>
    </section>

    <section class="lz-content-section">
      <div class="lz-section-wrap">
        ${buildWimHTML(k => k === '1021' ? this._farbigkeit() : this._synthFarben())}
      </div>
    </section>

    <section class="lz-content-section" style="padding:1.5rem 0 3rem;">
      <div class="lz-section-wrap">
        ${renderPageNav({
          prev: { label: '10.1 Werkstoffe',        link: `${BASE}/themen/10/10-1` },
          next: { label: '10.3 Tenside & Waschmittel', link: `${BASE}/themen/10/10-3` },
        }, BASE)}
      </div>
    </section>
    ${footerHTML(this.router)}
  `; }

  _farbigkeit() { return `
    ${renderSubhead('10.2.1 — Grundlagen der Farbigkeit · 10.2.2 — Natürliche Farbstoffe')}

    <h2 class="lz-h2">Warum erscheinen Stoffe farbig?</h2>
    <p class="lz-prose">
      Wir nehmen Farbe wahr, wenn ein Stoff sichtbares Licht <strong>selektiv absorbiert</strong>
      und das nicht absorbierte Licht reflektiert oder transmittiert.
      Die wahrgenommene Farbe ist die <strong>Komplementärfarbe</strong> zur absorbierten Wellenlänge.
    </p>

    ${renderTable({
      headers: ['Absorbierte Wellenlänge [nm]', 'Absorbierte Farbe', 'Wahrgenommene Komplementärfarbe'],
      rows: [
        ['380–430', 'Violett',      'Gelb-grün'],
        ['430–480', 'Blau',         'Orange'],
        ['480–500', 'Blau-grün',    'Rot'],
        ['500–530', 'Grün',         'Rotviolett (Magenta)'],
        ['530–560', 'Gelbgrün',     'Violett'],
        ['560–580', 'Gelb',         'Blau-violett'],
        ['580–620', 'Orange',       'Blau'],
        ['620–700', 'Rot',          'Blau-grün (Cyan)'],
      ],
      highlight: [1, 7],
    })}

    <h3 class="lz-h3" style="margin-top:1.75rem;">Chromophor-Auxochrom-Konzept</h3>

    ${renderMerkboxGrid([
      {
        icon: 'fas fa-palette',
        title: 'Chromophor — farbbringende Gruppe',
        text: `Chromophor (griech. chroma = Farbe, phoros = träger):
               Atomgruppe mit π-Elektronen, die Licht im sichtbaren Bereich absorbieren kann.
               Ursache: π→π*-Übergänge (in konjugierten Systemen) oder n→π*-Übergänge (Lone-Pair).
               Wichtige Chromophore: –N=N– (Azogruppe); –NO₂ (Nitrogruppe); –N=O;
               C=C–C=C–…(konjugiertes System); C=O (Keto/Aldehyd); Porphyrin.
               Je länger das konjugierte π-System, desto bathochrom (zu längerer Wellenlänge) verschoben.`,
      },
      {
        icon: 'fas fa-plus',
        title: 'Auxochrom — farbvertiefende/bindende Gruppe',
        text: `Auxochrom (griech. auxo = vergrößern): Gruppe, die selbst keine Farbe gibt,
               aber die Absorption des Chromophors verstärkt (bathochrome Verschiebung)
               und oft die Löslichkeit/Haftfähigkeit am Substrat verbessert.
               Wichtige Auxochrome (Donoren): –OH, –OR, –NH₂, –NHR, –NR₂, –SR.
               Sie erhöhen die e⁻-Dichte im Chromophor durch +M-Effekt.`,
      },
      {
        icon: 'fas fa-compress-alt',
        title: 'Bathochrome vs. Hypsochrome Verschiebung',
        text: `Bathochrom (Rotverschiebung): Absorption zu längerer λ verschoben → dunklere/tiefere Farbe.
               Ursache: Erweiterung des konjugierten Systems; Lösungsmitteleffekte (+solvatochrom).
               Hypsochrom (Blauverschiebung): Absorption zu kürzerer λ → hellere Farbe.
               Intensivierung (hyperchromer Effekt): Absorptionsstärke ε steigt.`,
      },
      {
        icon: 'fas fa-link',
        title: 'Beizen — Metallkomplex als Farbstoff-Haftmittel',
        text: `Beize (Mordant): Metallsalz (Al³⁺, Fe³⁺, Cr³⁺, Sn²⁺), das an Faser adsorbiert
               und mit dem Farbstoff einen stabilen Metallkomplex bildet.
               Bespiele: Alizarin + Al³⁺ → rot; Alizarin + Fe³⁺ → blauviolett; Alizarin + Cr³⁺ → dunkelbraun.
               Gleicher Farbstoff + verschiedene Beize → verschiedene Farben!`,
      },
    ])}

    <h3 class="lz-h3" style="margin-top:1.75rem;">Natürliche Farbstoffe (10.2.2)</h3>

    ${renderTable({
      headers: ['Farbstoff', 'Quelle', 'Chemische Klasse', 'Farbe', 'Historische / aktuelle Bedeutung'],
      rows: [
        ['Indigo',           'Indigofera tinctoria (Indigopflanze); früher auch Waid',   'Bisindolyliden (2 Indol-Einheiten); Küpenfarbstoff', 'Blau',         'Ältester bekannter Textilfarbstoff (5000 v. Chr. Indus-Zivilisation); Jeans heute: synthetisch'],
        ['Alizarin',         'Krapp-Wurzel (Rubia tinctorum)',                           'Anthrachinon; Beizenfarbstoff',                        'Rot/Violett',  'Türkischrot; heute synthetisch; Krapplack'],
        ['Hämatin (Logwood)','Campecheholz (Haematoxylum campechianum)',                 'Xanthon-Derivat (Flavon-Klasse)',                      'Blau-schwarz',  'Wichtigster Beizenfarbstoff 16.–19. Jh.; für schwarze Seide'],
        ['Purpur (Tyrian)','Murex-Schnecken (Hexaplex trunculus)',                        'Dibromindigotin',                                     'Blauviolett',  '10 000 Schnecken für 1 g Farbstoff; kaiserliches Rom; extrem teuer'],
        ['Indanthren-Blau (Küpenfarbe)', 'Synthetisch (aber nat. Vorbild Indigo)',        'Anthrachinonring-System',                              'Blau',         'Lichtechter als Indigo; Jeans heute'],
        ['β-Carotin',        'Karotten, Grünpflanzen (Chromatoplasten)',                  'Tetraterpenkette mit 11 konjugierten DB',              'Orange',        'Provitamin A; Lebensmittelfarbstoff E160a; auch in Tomaten (Lycopin), Paprika (Capsanthin)'],
        ['Chlorophyll a/b',  'Alle Grünpflanzen',                                        'Mg-Porphyrinkomplex (Chlorin-System)',                  'Grün',          'Lichtabsorption Fotosynthese; E140 (Lebensmittelfarbe)'],
        ['Häm',              'Blut aller Wirbeltiere',                                   'Fe²⁺-Porphyrinkomplex (Protoporphyrin IX)',             'Rot',           'O₂-Carrier; verantwortlich für Fleischfarbe (Myoglobin)'],
        ['Anthocyane',       'Rote/blaue Früchte (Heidelbeere, Brombeere), rote Kohl',  'Flavylium-Kation; pH-abhängige Farbe!',                'Rot↔Blau (pH)', 'Natürlicher Indikator! Rot bei sauer, grün bei basisch, blau bei neutral'],
        ['Curcumin',         'Kurkuma-Wurzel (Curcuma longa)',                           'Dicinnamoylmethan',                                   'Gelb (E100)',    'Gewürzfarbstoff; antioxidativ; auch pH-Indikator'],
        ['Saffron (Safran)', 'Crocus sativus (Stempel)',                                 'Crocetin/Crocin (Carotinoid-Diester)',                 'Gelb-orange',   'Teuerste Gewürz der Welt; ~100 000 Blüten/kg; E164'],
      ],
      highlight: [0, 3, 8],
    })}
  `; }

  _synthFarben() { return `
    ${renderSubhead('10.2.3 — Synthetische Farbstoffe · 10.2.4 — Färbeverfahren')}

    <h3 class="lz-h3">Azofarbstoffe — die wichtigste Farbstoffklasse</h3>
    <p class="lz-prose">
      <strong>Azofarbstoffe</strong> enthalten die charakteristische
      <strong>Azogruppe –N=N–</strong> (Chromophor) und stellen
      mit ~50% den größten Anteil aller synthetischen Farbstoffe.
      Sie werden durch <strong>Diazotierung + Azokupplung</strong> synthetisiert.
    </p>

    ${renderTable({
      headers: ['Schritt', 'Reaktion', 'Bedingungen', 'Produkt'],
      rows: [
        ['Diazotierung', 'ArNH₂ + NaNO₂ + 2HCl (0–5°C) → ArN₂⁺Cl⁻ + NaCl + 2H₂O', '0–5°C (Diazoniumsalz instabil bei höherer T!); starke Säure nötig', 'Aryldiazoniumsalz (ArN₂⁺)'],
        ['Azokupplung (elektr. Substitution)', 'ArN₂⁺ + Ar\'OH oder Ar\'NR₂ → Ar–N=N–Ar\' (Azoverbindung)', 'pH 5–9 (sauer für Phenole, basisch für Amine); Kupplungskomponente = aktivierter Aromat', 'Azofarbstoff (–N=N– verbindet zwei Aromate)'],
      ],
      highlight: [0, 1],
    })}

    ${renderTable({
      headers: ['Azofarbstoff', 'Diazoantin', 'Kupplungskomponente', 'Farbe', 'Anwendung'],
      rows: [
        ['Methylorange',   'Sulfanilsäure',           'Dimethylanilin',        'Orange-rot (sauer) / Gelb (basisch)',  'Säure-Base-Indikator (pK_In = 3,5); pH 3,1–4,4'],
        ['Kongorot',       'Benzidin (kanzerogen!)',   'Naphthionsäure',        'Rot (direkt)',                          'Direktfarbstoff für Baumwolle; Amyloid-Nachweis'],
        ['Sudan I',        'Anilin',                   'β-Naphthol',            'Orange-rot',                            'Fettlöslich; Lebensmittelfarbstoff (früher; jetzt verboten)'],
        ['Tartrazin (E102)','4-Aminobenzolsulfonsäure','1-(4-Sulfophenyl)-3-methylpyrazolon', 'Gelb', 'Lebensmittelfarbstoff; Limo, Gummibärchen'],
        ['Chrysoidin',     'Anilin',                   'm-Phenylendiamin',      'Gelb-orange',                           'Baumwollfärbung; Lederfärbung'],
        ['Disperse Red 1', 'para-Nitranilin',          'N-Ethyl-N-(2-hydroxyethyl)anilin', 'Rot', 'Polyesterfärbung (Dispersionsfarbstoff)'],
      ],
      highlight: [0],
    })}

    <h3 class="lz-h3" style="margin-top:1.75rem;">Weitere wichtige Farbstoffklassen</h3>

    ${renderTable({
      headers: ['Klasse', 'Chromophor-System', 'Beispiele', 'Eigenschaften', 'Substrate'],
      rows: [
        ['Triphenylmethanfarbstoffe', 'Triarylmethan-Kation (delokalisiert)', 'Malachitgrün (C₂₅H₃₀N₂, grün), Kristallviolett, Fuchsin (rot)', 'Leuchtendes Farben; lichtunemp-findlich; eher basisch', 'Leder, Papier; Biologie (Gram-Färbung!); wenig Textil'],
        ['Anthrachinonfarbstoffe',   'Anthrachinonring + NH₂/OH-Gruppen', 'Alizarin (rot), Indanthren (blau), Chinacridon (rot)', 'Sehr lichtecht; thermostabil', 'Wolle (Beize), Polyester (Dispersionsf.), Kunststoffe'],
        ['Indigo und Indigoide',     'Bisindolyliden',           'Indigo, Thioindigo (rot), Indigoid-Küpenfarben', 'Lichtecht; Küpen-Verfahren nötig (Reduktion → Leukobasis)', 'Denim/Jeans, Wolle, Baumwolle'],
        ['Reaktivfarbstoffe',        'Azo oder Anthrachinon + reaktive Gruppe', 'Remazol (Vinylsulfon), Levafix (Triazin)', 'Kovalente Bindung ans Substrat → extrem waschecht', 'Baumwolle, Wolle, Seide'],
        ['Küpenfarbstoffe',          'Große konjugierte aromatische Systeme', 'Indigo, Vat Blue 4, Thren-Farben', 'Reduktion zu löslichem Leuco → Aufziehen → Oxidation zum Farbstoff', 'Baumwolle, Denim'],
        ['Dispersionsfarbstoffe',    'Azo, Anthrachinon, Chinophthalon', 'Disperse Yellow 3, Disperse Red 1', 'Wasserunlöslich; Feinstdispersion; Einlagerung in Polymer', 'Polyester, Polyamid, Acetatseide'],
        ['Direktfarbstoffe',         'Polykondensierte Azo-Verbindungen', 'Kongorot, Direktblau 1', 'Wasserlöslich; gehen direkt ohne Beize an Cellulose', 'Baumwolle; schlechte Waschechtheit'],
        ['Schwefelfarbstoffe',       'Schwefelhaltige Polyaromaten', 'Schwefelblau, Immedialfarben', 'Günstig; alkalisch unlöslich; Leuco-Verfahren', 'Baumwolle (Jeans-Schwarz)'],
      ],
      highlight: [3, 4],
    })}

    <h3 class="lz-h3" style="margin-top:1.75rem;">Färbeverfahren (10.2.4)</h3>

    ${renderTable({
      headers: ['Verfahren', 'Farbstoffklasse', 'Prinzip', 'Substrat', 'Waschechtheit'],
      rows: [
        ['Direktfärbung',       'Direktfarbstoffe',     'Wasserlöslicher FS zieht direkt auf Cellulose auf (Van-der-Waals + H-Brücken)', 'Baumwolle, Leinen', 'Schlecht–mittel'],
        ['Beizenfärbung',       'Beizenfarbstoffe',     'Metallsalz (Beize) zuerst; dann FS bildet Metallkomplex in der Faser', 'Wolle, Seide, historisch Baumwolle', 'Gut (unlöslicher Komplex)'],
        ['Küpenfärbung',        'Küpenfarbstoffe (Indigo, Indanthren)', 'FS mit Na₂S₂O₄ reduzieren → Leuko-Form (löslich) → Faser zieht Leuko auf → Luftoxidation → unlöslicher FS in Faser', 'Baumwolle (Denim)', 'Sehr gut'],
        ['Reaktivfärbung',      'Reaktivfarbstoffe',    'FS reagiert kovalent mit Cellulose-OH (oder Wolle-NH₂) → stabile kovalente Bindung', 'Baumwolle, Wolle', 'Sehr gut (kovalent)'],
        ['Dispersions-Färbung', 'Dispersionsfarbstoffe','FS in Feinstdispersion; bei T > T_g des Polymers diffundiert FS in Faser → Abkühlen → eingeschlossen', 'Polyester, PA, Acetat', 'Gut (eingeschlossen)'],
        ['Saure Färbung',       'Säurefarbstoffe (anionisch)', 'In saurem Bad: ionische Bindung FS-Anion an protonierte Amino-NH₃⁺-Gruppen der Faser', 'Wolle, Seide, Nylon', 'Mittel–gut'],
        ['Kationische Färbung', 'Basische Farbstoffe (kationisch)', 'Kationischer FS bindet an anionische Carboxylat-Gruppen der Faser', 'Acryl, modif. Polyester', 'Sehr gut'],
      ],
      highlight: [2, 3],
    })}

    ${renderInfobox({
      type: 'blue', icon: 'fas fa-tshirt', title: 'Indigo-Jeans-Chemie — Küpenfärbung im Detail',
      body: `Indigo ist wasserunlöslich (blaue Form) → kann nicht direkt auf Baumwolle aufgebracht werden.<br><br>
             <strong>Schritt 1 — Reduktion zur Leukobasis:</strong><br>
             Indigo (blau, C₁₆H₁₀N₂O₂) + Na₂S₂O₄ + NaOH → Leuko-Indigo (gelb, wasserlöslich)<br><br>
             <strong>Schritt 2 — Aufziehen:</strong><br>
             Garn/Stoff zieht Leuko-Indigo auf (löslich; H-Brücken an Cellulose-OH)<br><br>
             <strong>Schritt 3 — Oxidation:</strong><br>
             Luft oxidiert Leuko-Indigo → Indigo (blau) → unlöslich in Faser gefangen.<br><br>
             <strong>Besonderheit Jeans:</strong>
             Indigo sitzt nur oberflächlich auf den Garnen (nicht tief eingedrungen) →
             Abnutzung (Wear-Effect) → Fading / authentische Washed-Look durch Reibung.`,
    })}

    ${renderInfobox({
      type: 'success', icon: 'fas fa-graduation-cap', title: 'Zusammenfassung — Farbstoffe',
      body: `<strong>Farbigkeit:</strong> Selektive Absorption sichtb. Licht → Komplementärfarbe wahrgenommen<br>
             <strong>Chromophor:</strong> π-Elektronensystem absorbiert (–N=N–, C=C konj., –NO₂); je länger: bathocromer Effekt<br>
             <strong>Auxochrom:</strong> vertieft Farbe (+M-Effekt: –OH, –NH₂); verbessert Haftung<br>
             <strong>Azofarbstoffe:</strong> Diazotierung (0–5°C) + Azokupplung → –N=N– · ~50% aller Farbstoffe<br>
             <strong>Indigo:</strong> Küpenverfahren; Leukobasis (gelb, löslich) → Oxidation → Indigo (blau, unlöslich)<br>
             <strong>Reaktivfarbstoffe:</strong> kovalente Bindung ans Substrat → höchste Waschechtheit<br>
             <strong>Beizenfärbung:</strong> Metallion + FS → Komplex in Faser; gleicher FS + verschiedene Beize → verschiedene Farben`,
    })}
  `; }

  init() {
    i18n.init();
    initScrollReveal();
    initInteractive(document);
    initTabs();
  }
}