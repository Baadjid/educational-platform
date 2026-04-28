// pages/projekte/lernzettel/faecher/chemie/themen/anhang/anhang-pse.js
// Anhang — Interaktives Periodensystem der Elemente (118 Elemente)
//
// CSS wird NICHT hier geladen.
// sub.css wird bereits global über den Lernzettel-Einstieg geladen.
// ensureComponentsCSS() lädt nur mindmap/tables/boxes/interactive.

import { initScrollReveal }  from '../../../../../../shared/js/index.js';
import { footerHTML }         from '../../../../../../components/Footer.js';
import { i18n }               from '../../../../../../shared/js/i18n.js';
import {
  ensureComponentsCSS,
  renderSubhead,
  renderTags,
  renderTable,
  renderMerkboxGrid,
  renderInfobox,
  initInteractive,
} from '../../../js/components/components.js';
import { renderPageNav } from '../../../js/components/subnav.js';
import { COLOR, COLOR_RGB, BASE } from '../chemie.js';


/* ════════════════════════════════════════════════════════════════
   ELEMENT-DATENBANK
   [Z, Symbol, Name_DE, Gruppe(1-18 | null=f-Block), Periode,
    Masse_str, EN_str, Kat, Konfig_str]

   Kategorien:
     1  Alkalimetalle         --pse-r1
     2  Erdalkalimetalle      --pse-r2
     3  Übergangsmetalle      --pse-r3
     4  Lanthanoide           --pse-r4
     5  Actinoide             --pse-r5
     6  Post-Transition-Met.  --pse-r6
     7  Halbmetalle           --pse-r7
     8  Nichtmetalle          --pse-r8
     9  Halogene              --pse-r9
    10  Edelgase              --pse-r10
════════════════════════════════════════════════════════════════ */
const EL = [
  // s-Block Periode 1+2
  [  1,'H', 'Wasserstoff',  1,1,'1,008',  '2,20', 8,'1s¹'],
  [  2,'He','Helium',       18,1,'4,003',  '—',   10,'1s²'],
  [  3,'Li','Lithium',       1,2,'6,941',  '0,98', 1,'[He]2s¹'],
  [  4,'Be','Beryllium',     2,2,'9,012',  '1,57', 2,'[He]2s²'],
  // p-Block Periode 2
  [  5,'B', 'Bor',          13,2,'10,81',  '2,04', 7,'[He]2s²2p¹'],
  [  6,'C', 'Kohlenstoff',  14,2,'12,011', '2,55', 8,'[He]2s²2p²'],
  [  7,'N', 'Stickstoff',   15,2,'14,007', '3,04', 8,'[He]2s²2p³'],
  [  8,'O', 'Sauerstoff',   16,2,'15,999', '3,44', 8,'[He]2s²2p⁴'],
  [  9,'F', 'Fluor',        17,2,'18,998', '3,98', 9,'[He]2s²2p⁵'],
  [ 10,'Ne','Neon',         18,2,'20,180', '—',   10,'[He]2s²2p⁶'],
  // Periode 3
  [ 11,'Na','Natrium',       1,3,'22,990', '0,93', 1,'[Ne]3s¹'],
  [ 12,'Mg','Magnesium',     2,3,'24,305', '1,31', 2,'[Ne]3s²'],
  [ 13,'Al','Aluminium',    13,3,'26,982', '1,61', 6,'[Ne]3s²3p¹'],
  [ 14,'Si','Silicium',     14,3,'28,086', '1,90', 7,'[Ne]3s²3p²'],
  [ 15,'P', 'Phosphor',     15,3,'30,974', '2,19', 8,'[Ne]3s²3p³'],
  [ 16,'S', 'Schwefel',     16,3,'32,06',  '2,58', 8,'[Ne]3s²3p⁴'],
  [ 17,'Cl','Chlor',        17,3,'35,45',  '3,16', 9,'[Ne]3s²3p⁵'],
  [ 18,'Ar','Argon',        18,3,'39,948', '—',   10,'[Ne]3s²3p⁶'],
  // Periode 4
  [ 19,'K', 'Kalium',        1,4,'39,098', '0,82', 1,'[Ar]4s¹'],
  [ 20,'Ca','Calcium',       2,4,'40,078', '1,00', 2,'[Ar]4s²'],
  [ 21,'Sc','Scandium',      3,4,'44,956', '1,36', 3,'[Ar]3d¹4s²'],
  [ 22,'Ti','Titan',         4,4,'47,867', '1,54', 3,'[Ar]3d²4s²'],
  [ 23,'V', 'Vanadium',      5,4,'50,942', '1,63', 3,'[Ar]3d³4s²'],
  [ 24,'Cr','Chrom',         6,4,'51,996', '1,66', 3,'[Ar]3d⁵4s¹'],
  [ 25,'Mn','Mangan',        7,4,'54,938', '1,55', 3,'[Ar]3d⁵4s²'],
  [ 26,'Fe','Eisen',         8,4,'55,845', '1,83', 3,'[Ar]3d⁶4s²'],
  [ 27,'Co','Cobalt',        9,4,'58,933', '1,88', 3,'[Ar]3d⁷4s²'],
  [ 28,'Ni','Nickel',       10,4,'58,693', '1,91', 3,'[Ar]3d⁸4s²'],
  [ 29,'Cu','Kupfer',       11,4,'63,546', '1,90', 3,'[Ar]3d¹⁰4s¹'],
  [ 30,'Zn','Zink',         12,4,'65,38',  '1,65', 3,'[Ar]3d¹⁰4s²'],
  [ 31,'Ga','Gallium',      13,4,'69,723', '1,81', 6,'[Ar]3d¹⁰4s²4p¹'],
  [ 32,'Ge','Germanium',    14,4,'72,630', '2,01', 7,'[Ar]3d¹⁰4s²4p²'],
  [ 33,'As','Arsen',        15,4,'74,922', '2,18', 7,'[Ar]3d¹⁰4s²4p³'],
  [ 34,'Se','Selen',        16,4,'78,971', '2,55', 8,'[Ar]3d¹⁰4s²4p⁴'],
  [ 35,'Br','Brom',         17,4,'79,904', '2,96', 9,'[Ar]3d¹⁰4s²4p⁵'],
  [ 36,'Kr','Krypton',      18,4,'83,798', '3,00',10,'[Ar]3d¹⁰4s²4p⁶'],
  // Periode 5
  [ 37,'Rb','Rubidium',      1,5,'85,468', '0,82', 1,'[Kr]5s¹'],
  [ 38,'Sr','Strontium',     2,5,'87,62',  '0,95', 2,'[Kr]5s²'],
  [ 39,'Y', 'Yttrium',       3,5,'88,906', '1,22', 3,'[Kr]4d¹5s²'],
  [ 40,'Zr','Zirconium',     4,5,'91,224', '1,33', 3,'[Kr]4d²5s²'],
  [ 41,'Nb','Niobium',       5,5,'92,906', '1,60', 3,'[Kr]4d⁴5s¹'],
  [ 42,'Mo','Molybdän',      6,5,'95,95',  '2,16', 3,'[Kr]4d⁵5s¹'],
  [ 43,'Tc','Technetium',    7,5,'[98]',   '1,90', 3,'[Kr]4d⁵5s²'],
  [ 44,'Ru','Ruthenium',     8,5,'101,07', '2,20', 3,'[Kr]4d⁷5s¹'],
  [ 45,'Rh','Rhodium',       9,5,'102,906','2,28', 3,'[Kr]4d⁸5s¹'],
  [ 46,'Pd','Palladium',    10,5,'106,42', '2,20', 3,'[Kr]4d¹⁰'],
  [ 47,'Ag','Silber',       11,5,'107,868','1,93', 3,'[Kr]4d¹⁰5s¹'],
  [ 48,'Cd','Cadmium',      12,5,'112,414','1,69', 3,'[Kr]4d¹⁰5s²'],
  [ 49,'In','Indium',       13,5,'114,818','1,78', 6,'[Kr]4d¹⁰5s²5p¹'],
  [ 50,'Sn','Zinn',         14,5,'118,710','1,96', 6,'[Kr]4d¹⁰5s²5p²'],
  [ 51,'Sb','Antimon',      15,5,'121,760','2,05', 7,'[Kr]4d¹⁰5s²5p³'],
  [ 52,'Te','Tellur',       16,5,'127,60', '2,10', 7,'[Kr]4d¹⁰5s²5p⁴'],
  [ 53,'I', 'Iod',          17,5,'126,904','2,66', 9,'[Kr]4d¹⁰5s²5p⁵'],
  [ 54,'Xe','Xenon',        18,5,'131,293','2,60',10,'[Kr]4d¹⁰5s²5p⁶'],
  // Periode 6 — Hauptgitter
  [ 55,'Cs','Cäsium',        1,6,'132,905','0,79', 1,'[Xe]6s¹'],
  [ 56,'Ba','Barium',        2,6,'137,327','0,89', 2,'[Xe]6s²'],
  // 57-71 = Lanthanoide (f-Block, Gruppe null)
  [ 57,'La','Lanthan',      null,6,'138,905','1,10', 4,'[Xe]5d¹6s²'],
  [ 58,'Ce','Cer',          null,6,'140,116','1,12', 4,'[Xe]4f¹5d¹6s²'],
  [ 59,'Pr','Praseodym',    null,6,'140,908','1,13', 4,'[Xe]4f³6s²'],
  [ 60,'Nd','Neodym',       null,6,'144,242','1,14', 4,'[Xe]4f⁴6s²'],
  [ 61,'Pm','Promethium',   null,6,'[145]',  '1,13', 4,'[Xe]4f⁵6s²'],
  [ 62,'Sm','Samarium',     null,6,'150,36', '1,17', 4,'[Xe]4f⁶6s²'],
  [ 63,'Eu','Europium',     null,6,'151,964','1,20', 4,'[Xe]4f⁷6s²'],
  [ 64,'Gd','Gadolinium',   null,6,'157,25', '1,20', 4,'[Xe]4f⁷5d¹6s²'],
  [ 65,'Tb','Terbium',      null,6,'158,925','1,20', 4,'[Xe]4f⁹6s²'],
  [ 66,'Dy','Dysprosium',   null,6,'162,500','1,22', 4,'[Xe]4f¹⁰6s²'],
  [ 67,'Ho','Holmium',      null,6,'164,930','1,23', 4,'[Xe]4f¹¹6s²'],
  [ 68,'Er','Erbium',       null,6,'167,259','1,24', 4,'[Xe]4f¹²6s²'],
  [ 69,'Tm','Thulium',      null,6,'168,934','1,25', 4,'[Xe]4f¹³6s²'],
  [ 70,'Yb','Ytterbium',    null,6,'173,045','1,10', 4,'[Xe]4f¹⁴6s²'],
  [ 71,'Lu','Lutetium',     null,6,'174,967','1,27', 4,'[Xe]4f¹⁴5d¹6s²'],
  // Periode 6 — Hf bis Rn
  [ 72,'Hf','Hafnium',       4,6,'178,49', '1,30', 3,'[Xe]4f¹⁴5d²6s²'],
  [ 73,'Ta','Tantal',        5,6,'180,948','1,50', 3,'[Xe]4f¹⁴5d³6s²'],
  [ 74,'W', 'Wolfram',       6,6,'183,84', '2,36', 3,'[Xe]4f¹⁴5d⁴6s²'],
  [ 75,'Re','Rhenium',       7,6,'186,207','1,90', 3,'[Xe]4f¹⁴5d⁵6s²'],
  [ 76,'Os','Osmium',        8,6,'190,23', '2,20', 3,'[Xe]4f¹⁴5d⁶6s²'],
  [ 77,'Ir','Iridium',       9,6,'192,217','2,20', 3,'[Xe]4f¹⁴5d⁷6s²'],
  [ 78,'Pt','Platin',       10,6,'195,084','2,28', 3,'[Xe]4f¹⁴5d⁹6s¹'],
  [ 79,'Au','Gold',         11,6,'196,967','2,54', 3,'[Xe]4f¹⁴5d¹⁰6s¹'],
  [ 80,'Hg','Quecksilber',  12,6,'200,592','2,00', 3,'[Xe]4f¹⁴5d¹⁰6s²'],
  [ 81,'Tl','Thallium',     13,6,'204,38', '1,62', 6,'[Xe]4f¹⁴5d¹⁰6s²6p¹'],
  [ 82,'Pb','Blei',         14,6,'207,2',  '2,33', 6,'[Xe]4f¹⁴5d¹⁰6s²6p²'],
  [ 83,'Bi','Bismut',       15,6,'208,980','2,02', 6,'[Xe]4f¹⁴5d¹⁰6s²6p³'],
  [ 84,'Po','Polonium',     16,6,'[209]',  '2,00', 7,'[Xe]4f¹⁴5d¹⁰6s²6p⁴'],
  [ 85,'At','Astat',        17,6,'[210]',  '2,20', 9,'[Xe]4f¹⁴5d¹⁰6s²6p⁵'],
  [ 86,'Rn','Radon',        18,6,'[222]',  '—',   10,'[Xe]4f¹⁴5d¹⁰6s²6p⁶'],
  // Periode 7 — Hauptgitter
  [ 87,'Fr','Francium',      1,7,'[223]',  '0,70', 1,'[Rn]7s¹'],
  [ 88,'Ra','Radium',        2,7,'[226]',  '0,90', 2,'[Rn]7s²'],
  // 89-103 = Actinoide (f-Block, Gruppe null)
  [ 89,'Ac','Actinium',     null,7,'[227]',  '1,10', 5,'[Rn]6d¹7s²'],
  [ 90,'Th','Thorium',      null,7,'232,038','1,30', 5,'[Rn]6d²7s²'],
  [ 91,'Pa','Protactinium', null,7,'231,036','1,50', 5,'[Rn]5f²6d¹7s²'],
  [ 92,'U', 'Uran',         null,7,'238,029','1,38', 5,'[Rn]5f³6d¹7s²'],
  [ 93,'Np','Neptunium',    null,7,'[237]',  '1,36', 5,'[Rn]5f⁴6d¹7s²'],
  [ 94,'Pu','Plutonium',    null,7,'[244]',  '1,28', 5,'[Rn]5f⁶7s²'],
  [ 95,'Am','Americium',    null,7,'[243]',  '1,30', 5,'[Rn]5f⁷7s²'],
  [ 96,'Cm','Curium',       null,7,'[247]',  '1,30', 5,'[Rn]5f⁷6d¹7s²'],
  [ 97,'Bk','Berkelium',    null,7,'[247]',  '1,30', 5,'[Rn]5f⁹7s²'],
  [ 98,'Cf','Californium',  null,7,'[251]',  '1,30', 5,'[Rn]5f¹⁰7s²'],
  [ 99,'Es','Einsteinium',  null,7,'[252]',  '1,30', 5,'[Rn]5f¹¹7s²'],
  [100,'Fm','Fermium',      null,7,'[257]',  '1,30', 5,'[Rn]5f¹²7s²'],
  [101,'Md','Mendelevium',  null,7,'[258]',  '1,30', 5,'[Rn]5f¹³7s²'],
  [102,'No','Nobelium',     null,7,'[259]',  '1,30', 5,'[Rn]5f¹⁴7s²'],
  [103,'Lr','Lawrencium',   null,7,'[262]',  '1,30', 5,'[Rn]5f¹⁴7p¹'],
  // Periode 7 — Rf bis Og
  [104,'Rf','Rutherfordium', 4,7,'[267]',  '—',  3,'[Rn]5f¹⁴6d²7s²'],
  [105,'Db','Dubnium',       5,7,'[268]',  '—',  3,'[Rn]5f¹⁴6d³7s²'],
  [106,'Sg','Seaborgium',    6,7,'[271]',  '—',  3,'[Rn]5f¹⁴6d⁴7s²'],
  [107,'Bh','Bohrium',       7,7,'[272]',  '—',  3,'[Rn]5f¹⁴6d⁵7s²'],
  [108,'Hs','Hassium',       8,7,'[270]',  '—',  3,'[Rn]5f¹⁴6d⁶7s²'],
  [109,'Mt','Meitnerium',    9,7,'[278]',  '—',  3,'[Rn]5f¹⁴6d⁷7s²'],
  [110,'Ds','Darmstadtium', 10,7,'[281]',  '—',  3,'[Rn]5f¹⁴6d⁸7s²'],
  [111,'Rg','Röntgenium',   11,7,'[282]',  '—',  3,'[Rn]5f¹⁴6d⁹7s²'],
  [112,'Cn','Copernicium',  12,7,'[285]',  '—',  3,'[Rn]5f¹⁴6d¹⁰7s²'],
  [113,'Nh','Nihonium',     13,7,'[286]',  '—',  6,'[Rn]5f¹⁴6d¹⁰7s²7p¹'],
  [114,'Fl','Flerovium',    14,7,'[289]',  '—',  6,'[Rn]5f¹⁴6d¹⁰7s²7p²'],
  [115,'Mc','Moscovium',    15,7,'[290]',  '—',  6,'[Rn]5f¹⁴6d¹⁰7s²7p³'],
  [116,'Lv','Livermorium',  16,7,'[293]',  '—',  6,'[Rn]5f¹⁴6d¹⁰7s²7p⁴'],
  [117,'Ts','Tennessine',   17,7,'[294]',  '—',  9,'[Rn]5f¹⁴6d¹⁰7s²7p⁵'],
  [118,'Og','Oganesson',    18,7,'[294]',  '—', 10,'[Rn]5f¹⁴6d¹⁰7s²7p⁶'],
];

/* Lookup Z → Datensatz */
const EM = {};
EL.forEach(e => { EM[e[0]] = e; });

/* Kategorie-Bezeichnungen */
const CAT_SHORT = {
  1:'Alkali', 2:'Erdalkali', 3:'Übergang', 4:'Lanthan.',
  5:'Actinoid', 6:'Metall', 7:'Halbmet.', 8:'Nichtmet.',
  9:'Halogen', 10:'Edelgas',
};
const CAT_LONG = {
  1:'Alkalimetall',      2:'Erdalkalimetall',    3:'Übergangsmetall',
  4:'Lanthanoid',        5:'Actinoid',           6:'Post-Transition-Metall',
  7:'Halbmetall',        8:'Nichtmetall',         9:'Halogen',
  10:'Edelgas',
};
const CAT_HEX = {
  1:'#c62828', 2:'#d84315', 3:'#37474f',
  4:'#6a1b9a', 5:'#4a0072', 6:'#1565c0',
  7:'#2e7d32', 8:'#00695c', 9:'#880e4f', 10:'#263238',
};
/* RGB-Strings, passend zu --pse-rN in sub.css */
const CAT_RGB = {
  1:'198,40,40',  2:'216,67,21',  3:'55,71,79',
  4:'106,27,154', 5:'74,0,114',   6:'21,101,192',
  7:'46,125,50',  8:'0,105,92',   9:'136,14,79', 10:'38,50,56',
};

/* ════════════════════════════════════════════════════════════════
   HAUPTGITTER 7×18
   0      = unsichtbare Lücke
   negativ = Platzhalter für den f-Block-Verweis
   positiv = Ordnungszahl
════════════════════════════════════════════════════════════════ */
const GRID = [
  /* P1 */ [1,  0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0,  0,  0,  0,  0,  2],
  /* P2 */ [3,  4,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  5,  6,  7,  8,  9, 10],
  /* P3 */ [11,12,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 13, 14, 15, 16, 17, 18],
  /* P4 */ [19,20, 21,22,23,24,25,26,27,28,29,30, 31, 32, 33, 34, 35, 36],
  /* P5 */ [37,38, 39,40,41,42,43,44,45,46,47,48, 49, 50, 51, 52, 53, 54],
  /* P6 */ [55,56,-57,72,73,74,75,76,77,78,79,80, 81, 82, 83, 84, 85, 86],
  /* P7 */ [87,88,-89,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118],
];
const LA = [57,58,59,60,61,62,63,64,65,66,67,68,69,70,71];
const AC = [89,90,91,92,93,94,95,96,97,98,99,100,101,102,103];


/* ════════════════════════════════════════════════════════════════
   PAGE-KLASSE
════════════════════════════════════════════════════════════════ */
export default class Chemie_Anhang_PSE {
  constructor(router) {
    this.router  = router;
    this._active = null; // aktuell hervorgehobene Zelle
    this._detail = null; // Detail-Panel DOM-Element
  }

  /* ── render() — NUR Komponenten-CSS, kein sub.css ─────────── */
  render() {
    ensureComponentsCSS();
    // sub.css + lernzettel.css werden global durch den SPA-Einstieg geladen.

    const root = document.createElement('div');
    root.className = 'page page-lz page-lz-sub';
    root.style.setProperty('--lz-accent',     COLOR);
    root.style.setProperty('--lz-accent-rgb', COLOR_RGB);
    root.style.setProperty('--kap-color',     COLOR);
    root.style.setProperty('--kap-color-rgb', COLOR_RGB);
    root.innerHTML = this._html();
    return root;
  }

  /* ── Statisches HTML-Gerüst ────────────────────────────────── */
  _html() { return `
    <section class="lz-sub-hero"
             style="--kap-color:${COLOR};--kap-color-rgb:${COLOR_RGB};">
      <div class="lz-sub-hero-inner">
        <div class="lz-sub-hero-orb" aria-hidden="true"></div>
        <div class="lz-sub-breadcrumb">
          <button data-link="${BASE}" class="lz-bread-link">Chemie</button>
          <i class="fas fa-chevron-right"></i><span>Anhang</span>
          <i class="fas fa-chevron-right"></i><span>PSE</span>
        </div>
        <h1 class="lz-sub-title">
          Periodensystem<br><em>der Elemente</em>
        </h1>
        <p class="lz-sub-desc">
          Alle 118 Elemente · Klicke für Details ·
          EN (Pauling) · Elektronenkonfiguration · Periodische Trends
        </p>
        ${renderTags(['Anhang','PSE','118 Elemente','Elektronegativität','Trends','LK Chemie BW'])}
      </div>
    </section>

    <section class="lz-content-section">
      <div class="lz-section-wrap" style="max-width:1200px;">

        ${renderSubhead('Interaktives Periodensystem')}

        <!-- Legende -->
        <div class="pse-legend">
          ${Object.entries(CAT_LONG).map(([k,v]) => `
            <div class="pse-legend-item">
              <span class="pse-legend-dot"
                    style="background:${CAT_HEX[k]};"></span>
              <span>${v}</span>
            </div>`).join('')}
        </div>

        <!-- PSE-Grid -->
        <div class="pse-outer">
          <div class="pse-grid" id="pse-grid"></div>
        </div>

        <!-- Detail-Panel (erscheint nach Klick) -->
        <div class="pse-detail" id="pse-detail">
          <div id="pse-detail-inner"></div>
        </div>

      </div>
    </section>

    <section class="lz-content-section">
      <div class="lz-section-wrap">

        ${renderSubhead('Periodische Trends')}

        ${renderTable({
          headers: ['Eigenschaft','Trend → (Periode)','Trend ↓ (Gruppe)','Begründung'],
          rows: [
            ['Atomradius',          'Nimmt ab',                        'Nimmt zu',   '→: mehr Protonen, gleiche Schale · ↓: neue Schale wird gefüllt'],
            ['Ionisierungsenergie', 'Nimmt zu (Ausnahmen: B<Be; O<N)', 'Nimmt ab',   '→: kleinerer Radius + höhere Kernladung · ↓: äußere e⁻ weiter vom Kern'],
            ['Elektronegativität',  'Zunehm. (Li 0,98 → F 3,98)',      'Abnehm.',    'F: höchste EN aller Elemente · Cs: niedrigste (0,79)'],
            ['Metallcharakter',     'Nimmt ab',                        'Nimmt zu',   'Alkalimetalle = stärkste Metalle · Halbmetalle diagonal'],
            ['Max. Oxidationsstufe','≈ Gruppenummer (Hauptgruppen)',    'Konstant',   'Valenzelektronen bestimmen max. OZ'],
          ],
          highlight: [0,2,3],
        })}

        ${renderMerkboxGrid([
          {
            icon: 'fas fa-atom',
            title: 'Konfigurationsausnahmen',
            text: 'Cr (24): [Ar]3d⁵4s¹ statt 3d⁴4s² → halbvolle d-Schale besonders stabil.\n'
                + 'Cu (29): [Ar]3d¹⁰4s¹ statt 3d⁹4s² → volle d-Schale stabil.\n'
                + 'Ähnlich: Mo, Ag, Au, Pd, Ru, Rh.',
          },
          {
            icon: 'fas fa-globe',
            title: 'Häufigkeit in der Erdkruste',
            text: 'O: 49,2% · Si: 28,2% · Al: 8,2% · Fe: 5,6%\n'
                + 'Ca: 4,2% · Na: 2,4% · K: 2,4% · Mg: 2,3%\n'
                + 'Alle anderen zusammen: < 0,5%',
          },
          {
            icon: 'fas fa-thermometer-half',
            title: 'Aggregatzustände (25°C, 1 bar)',
            text: 'Gase: H, N, O, F, Cl + alle 6 Edelgase\n'
                + 'Flüssig (nur 2!): Hg (Metall) · Br (Nichtmetall)\n'
                + 'Festkörper: alle anderen 110 Elemente\n'
                + 'Höchster Schmp.: W (3422°C)',
          },
          {
            icon: 'fas fa-fire',
            title: 'IE₁ – Ausnahmen',
            text: 'IE₁(Be) > IE₁(B): B hat ein einzelnes 2p-Elektron → leichter zu entfernen.\n'
                + 'IE₁(N) > IE₁(O): O hat doppelt besetztes 2p-Orbital → e⁻-Abstoßung.\n'
                + 'Gleich in Periode 3: Mg>Al · P>S',
          },
        ])}

        ${renderInfobox({
          type: 'blue',
          icon: 'fas fa-lightbulb',
          title: 'PSE-Aufbau — Warum diese Anordnung?',
          body: '<strong>Gruppen (Spalten):</strong> gleiche Valenzelektronenkonfiguration → ähnliche chemische Eigenschaften.<br>'
              + '<strong>Perioden (Zeilen):</strong> gleiche Hauptquantenzahl n der äußersten Schale.<br>'
              + '<strong>Blöcke:</strong> s-Block (Gr. 1+2) · p-Block (Gr. 13–18) · d-Block (Gr. 3–12) · f-Block (La/Ac, getrennt dargestellt).',
        })}

      </div>
    </section>

    <section class="lz-content-section" style="padding:1.5rem 0 3rem;">
      <div class="lz-section-wrap">
        ${renderPageNav({
          prev: { label:'11.2 Instrumentelle Analytik', link:`${BASE}/themen/11/11-2` },
        }, BASE)}
      </div>
    </section>

    ${footerHTML(this.router)}
  `;}


  /* ════════════════════════════════════════════════════════════
     GRID AUFBAUEN — wird in init() aufgerufen
  ════════════════════════════════════════════════════════════ */
  _buildGrid() {
    const grid = document.getElementById('pse-grid');
    this._detail = document.getElementById('pse-detail');
    if (!grid) return;

    /* Hilfs-Ersteller */
    const gap = () => {
      const d = document.createElement('div');
      d.className = 'pse-gap';
      return d;
    };

    const placeholder = (range, sub) => {
      const d = document.createElement('div');
      d.className = 'pse-placeholder';
      d.innerHTML = `<span class="pse-ph-range">${range}</span>
                     <span class="pse-ph-sub">${sub}</span>`;
      return d;
    };

    const fLabel = (text) => {
      const d = document.createElement('div');
      d.className = 'pse-f-label';
      d.textContent = text;
      return d;
    };

    /* ── Hauptperioden 1–7 ─────────────────────────────────── */
    GRID.forEach((row, rowIdx) => {
      row.forEach((z, colIdx) => {
        if (z === 0) {
          grid.appendChild(gap());
        } else if (z < 0) {
          // Platzhalter mit Pfeil zum f-Block
          grid.appendChild(placeholder(
            z === -57 ? '57–71' : '89–103',
            z === -57 ? 'La–Lu ↓' : 'Ac–Lr ↓',
          ));
        } else {
          /*
            Tooltip-Richtung bestimmen:
            - Periode 1 oder 2 → Tooltip nach UNTEN (pse-tip-down)
            - linke Kante (Spalte 0) → Tooltip nach rechts verschoben (pse-tip-right)
            - rechte Kante (Spalte 16+) → Tooltip nach links verschoben (pse-tip-left)
          */
          const tipDown  = rowIdx <= 1;
          const tipRight = colIdx === 0;
          const tipLeft  = colIdx >= 16;
          grid.appendChild(this._makeCell(z, tipDown, tipRight, tipLeft));
        }
      });
    });

    /* ── f-Block: Lanthanoide ─────────────────────────────── */
    grid.appendChild(fLabel('Lanthanoide  (4f-Block, Periode 6)'));
    grid.appendChild(gap()); grid.appendChild(gap()); // 2 Lücken links
    LA.forEach((z, i) => {
      grid.appendChild(this._makeCell(z,
        /* tipDown */  false,
        /* tipRight */ i === 0,
        /* tipLeft */  i === 14,
      ));
    });
    grid.appendChild(gap()); // 1 Lücke rechts

    /* ── f-Block: Actinoide ──────────────────────────────── */
    grid.appendChild(fLabel('Actinoide  (5f-Block, Periode 7)'));
    grid.appendChild(gap()); grid.appendChild(gap());
    AC.forEach((z, i) => {
      grid.appendChild(this._makeCell(z, false, i === 0, i === 14));
    });
    grid.appendChild(gap());
  }


  /* ── Einzelne Elementzelle ────────────────────────────────── */
  _makeCell(z, tipDown, tipRight, tipLeft) {
    const [,sym, name, grp, per, mass, en, cat, cfg] = EM[z];

    const el = document.createElement('div');
    el.className = 'pse-el';

    // Tooltip-Richtungsklassen — müssen 1:1 mit sub.css übereinstimmen
    if (tipDown)  el.classList.add('pse-tip-down');
    if (tipRight) el.classList.add('pse-tip-right');
    if (tipLeft)  el.classList.add('pse-tip-left');

    // data-cat → CSS-Variablen für Farbe
    el.dataset.cat = cat;

    // data-tip → CSS ::after content (white-space:pre → \n = Zeilenumbruch)
    el.dataset.tip = `${z}  ${sym}  ${name}\nMasse: ${mass} u  |  EN: ${en}\n${CAT_LONG[cat]}\n${cfg}`;

    // HTML-Inhalt: 5 Felder gemäß grid-template-areas in sub.css
    el.innerHTML = `
      <span class="pse-el-z">${z}</span>
      <span class="pse-el-u">${mass}</span>
      <span class="pse-el-en">${en}</span>
      <span class="pse-el-cat">${CAT_SHORT[cat]}</span>
      <span class="pse-el-sym">${sym}</span>`;

    el.addEventListener('click', () => this._showDetail(z, el));
    return el;
  }


  /* ── Detail-Panel anzeigen/verstecken ─────────────────────── */
  _showDetail(z, cellEl) {
    const [,sym, name, grp, per, mass, en, cat, cfg] = EM[z];
    const hex = CAT_HEX[cat];

    // Aktiv-Klasse vom alten Element entfernen
    if (this._active) this._active.classList.remove('pse-el--active');

    // Gleiche Zelle nochmal → Panel schließen
    if (this._active === cellEl) {
      this._active = null;
      this._detail.classList.remove('pse-detail--open');
      return;
    }

    this._active = cellEl;
    cellEl.classList.add('pse-el--active');

    // Inhalt des Detail-Panels
    document.getElementById('pse-detail-inner').innerHTML = `
      <div class="pse-detail-header">
        <div class="pse-detail-badge"
             style="background:linear-gradient(145deg,${hex}cc,${hex}66);">
          <span class="pse-detail-badge-z">${z}</span>
          <span class="pse-detail-badge-sym">${sym}</span>
        </div>
        <div class="pse-detail-meta">
          <h3>${name}</h3>
          <span>${CAT_LONG[cat]}</span>
        </div>
      </div>
      <div class="pse-detail-grid">
        <div class="pse-detail-prop">
          <div class="pse-detail-prop-key">Ordnungszahl</div>
          <div class="pse-detail-prop-val">${z}</div>
        </div>
        <div class="pse-detail-prop">
          <div class="pse-detail-prop-key">Atommasse</div>
          <div class="pse-detail-prop-val">${mass} u</div>
        </div>
        <div class="pse-detail-prop">
          <div class="pse-detail-prop-key">Elektronegativität</div>
          <div class="pse-detail-prop-val">${en}</div>
        </div>
        <div class="pse-detail-prop">
          <div class="pse-detail-prop-key">Periode</div>
          <div class="pse-detail-prop-val">${per}</div>
        </div>
        <div class="pse-detail-prop">
          <div class="pse-detail-prop-key">Gruppe</div>
          <div class="pse-detail-prop-val">${grp ?? 'f-Block'}</div>
        </div>
        <div class="pse-detail-prop" style="grid-column:span 2;">
          <div class="pse-detail-prop-key">Elektronenkonfiguration</div>
          <div class="pse-detail-prop-val"
               style="font-family:monospace;font-size:.8rem;">${cfg}</div>
        </div>
      </div>`;

    // Panel öffnen + sanft hinscrollem
    this._detail.classList.add('pse-detail--open');
    setTimeout(() =>
      this._detail.scrollIntoView({ behavior:'smooth', block:'nearest' }), 60);
  }


  /* ── init() ────────────────────────────────────────────────── */
  init() {
    i18n.init();
    initScrollReveal();
    initInteractive(document);
    this._buildGrid();
  }
}