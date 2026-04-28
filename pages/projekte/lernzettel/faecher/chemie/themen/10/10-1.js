// pages/projekte/lernzettel/faecher/chemie/themen/10/10-1.js
// Kapitel 10.1 — Werkstoffe
// 10.1.1  Aufbau und Bildung synthetischer organischer Polymere
// 10.1.2  Struktur und Eigenschaften von Kunststoffen
// 10.1.3  Verarbeitung von Kunststoffen
// 10.1.4  Maßgeschneiderte synthetische Polymere
// 10.1.5  Verwertung von Kunststoffen
// 10.1.6  Metallische Werkstoffe
// 10.1.7  Silicone, Silicate und Glas

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
  { key: '1011', icon: 'fas fa-cubes',       label: '10.1.1–2 Polymere & Kunststoffe'  },
  { key: '1012', icon: 'fas fa-industry',    label: '10.1.3–5 Verarbeitung & Verwertung'},
  { key: '1013', icon: 'fas fa-hammer',      label: '10.1.6 Metallische Werkstoffe'    },
  { key: '1014', icon: 'fas fa-vial',        label: '10.1.7 Silicone, Silicate & Glas' },
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
  return `<nav class="wim-tabs" role="tablist" id="tabs101">${nav}</nav>${panels}`;
}

function initTabs() {
  const nav = document.getElementById('tabs101');
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

export default class Chemie_10_1 {
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
          <i class="fas fa-chevron-right"></i><span>10.1</span>
        </div>
        <h1 class="lz-sub-title">Werkstoffe<br><em>Kunststoffe, Metalle, Glas und Silicate</em></h1>
        <p class="lz-sub-desc">
          Polymerisation · Polykondensation · Thermoplaste/Duroplaste/Elastomere ·
          Recycling · Stahl · Silicone · Glas
        </p>
        ${renderTags(['Kap. 10.1', 'Werkstoffe', 'Kunststoffe', 'Polymere', 'Glas', 'LK Chemie BW'])}
      </div>
    </section>

    <section class="lz-content-section">
      <div class="lz-section-wrap">
        ${buildWimHTML(k => {
          if (k === '1011') return this._polymere();
          if (k === '1012') return this._verarbeitung();
          if (k === '1013') return this._metalle();
          if (k === '1014') return this._silicone();
          return '';
        })}
      </div>
    </section>

    <section class="lz-content-section" style="padding:1.5rem 0 3rem;">
      <div class="lz-section-wrap">
        ${renderPageNav({
          prev: { label: '9.6 Chemie in Biosystemen',  link: `${BASE}/themen/9/9-6`   },
          next: { label: '10.2 Farbstoffe',             link: `${BASE}/themen/10/10-2` },
        }, BASE)}
      </div>
    </section>
    ${footerHTML(this.router)}
  `; }

  // ══════════════════════════════════════════════════════════
  // 10.1.1 + 10.1.2 — Polymere und Kunststoffe
  // ══════════════════════════════════════════════════════════
  _polymere() { return `
    ${renderSubhead('10.1.1 — Aufbau und Bildung · 10.1.2 — Struktur und Eigenschaften')}

    <h2 class="lz-h2">Polymere — Makromoleküle mit Wiederholeinheiten</h2>
    <p class="lz-prose">
      <strong>Polymere</strong> sind Makromoleküle aus vielen gleichen oder ähnlichen
      Wiederholeinheiten (Monomere), die durch kovalente Bindungen verknüpft sind.
      Das Molgewicht liegt typisch bei 10³ bis 10⁷ g/mol (Oligomere: <1000 g/mol).
      Kunststoffe sind synthetische Polymere, die sich verformen lassen.
    </p>

    <h3 class="lz-h3">Polymerisationsreaktionen — Überblick</h3>

    ${renderCompare({
      titleA: 'Kettenpolymerisation (Additionspolymerisation)',
      titleB: 'Stufenwachstumsreaktion (Polykondensation / Polyaddition)',
      listA: [
        'Monomer: Alkene oder Verbindungen mit aktivierbaren Mehrfachbindungen',
        'Mechanismus: Kettenwachstum (Initiation → Propagation → Termination)',
        'Ketteninitiator (Radikale, Ionen, Koordination) nicht in Kette eingebaut',
        'Kein Nebenprodukt; sehr schnell; M_n steigt sofort',
        'Produkt: Additionspolymer (enthält alle Atome des Monomers)',
        'Beispiele: PE, PP, PS, PVC, PMMA (Plexiglas), PTFE (Teflon)',
      ],
      listB: [
        'Monomer: Bifunktionelle Verbindungen (2 verschiedene/gleiche funktionelle Gruppen)',
        'Mechanismus: schrittweise Reaktion zwischen je zwei Monomeren (dann Dimere → Trimere …)',
        'Kondensat (kleines Mol.) wird abgespalten (Polykondensation: H₂O, HCl) oder nicht (Polyaddition)',
        'Langsam; hohes M_n erst bei hohem Umsatz; alle Stufen gleichzeitig',
        'Produkt: Kondensationspolymer',
        'Polykondensation: Polyester, Nylon (Polyamide), Polycarbonate, Silikonharz · Polyaddition: PUR',
      ],
    })}

    <h3 class="lz-h3" style="margin-top:1.75rem;">Radikalische Kettenpolymerisation — Mechanismus</h3>

    ${renderTable({
      headers: ['Phase', 'Reaktion', 'Details'],
      rows: [
        ['Initiation (Startschritt)', 'I₂ →(hν oder Δ) 2 I• → I• + CH₂=CHR → I–CH₂–ĊHR', 'Initiator z.B. AIBN (Azobisisobutyronitril), Benzoylperoxid; Radikale erzeugt'],
        ['Propagation (Kettenwachstum)', 'I–CH₂–ĊHR + n CH₂=CHR → Kettenwachstum', 'Schnell (k_p ~ 10²–10⁴ L/mol·s); 10²–10⁵ Wiederholungen'],
        ['Termination (Kettenabbruch)', 'Kombination: 2 R• → R–R (Rekombination)', 'Zwei Radikale treffen aufeinander → tot; Disproportionierung möglich'],
        ['Kettenübertragung', '~ Lösungsmittel/Monomer überträgt H-Atom auf Kette → neue Kette', 'Beeinflusst Molmasse; regulierbar durch Regler (z.B. Dodecanthiol)'],
      ],
      highlight: [1],
    })}

    ${renderTable({
      headers: ['Polymer', 'Monomer', 'Polymerisationstyp', 'Eigenschaften', 'Anwendungen', 'Weltprod. [Mio. t/J]'],
      rows: [
        ['Polyethylen (PE-HD/-LD)', 'Ethen CH₂=CH₂', 'Radikal (LD) / ZN (HD)', 'Unpolar; chem. inert; flexibel (LD) oder hart (HD)', 'Flaschen, Folien, Rohre, Verpackung', '~120'],
        ['Polypropylen (PP)',       'Propen',           'ZN-Katalyse (isotaktisch)', 'Leichter als PE; hitzebeständiger; isotaktisch: hart', 'Verpackung, Textilien, Autoteile', '~80'],
        ['Polystyrol (PS)',         'Styrol C₆H₅CH=CH₂','Radikal',              'Amorph, spröde, transparent; Schaumstoff EPS (Styropor)', 'Verpackung, Trinkbecher, Dämmstoffe', '~25'],
        ['PVC',                     'Vinylchlorid',     'Radikal',               'Hart ohne Weichmacher (H-PVC); weich mit Phthalt-WM (W-PVC)', 'Rohre, Fenster, Kabel, Bodenbelag', '~45'],
        ['PTFE (Teflon)',           'Tetrafluorethen',  'Radikal',               'Chemisch extrem beständig; niedrigster Reibkoeffizient; T bis 260°C', 'Bratpfannenbeschichtung, Dichtungen, Elektronik', '~0,25'],
        ['PMMA (Plexiglas)',        'Methylmethacrylat', 'Radikal',              'Transparent (90% Lichtdurchlässigkeit!); UV-stabil; spröde', 'Scheiben, Linsen, Leuchtmittel, Zahncreme', '~3'],
        ['Polystyrol-Schaum (EPS)', 'Styrol',           'Suspension + Treibm.',  'Geschlossenzellig; leicht; Wärmedämmend', 'Verpackungsschaum, Gebäudedämmung', '~10'],
        ['PAN (Polyacrylnitril)',    'Acrylnitril',      'Radikal',               'Hochfestig; spinnbar; Ausgangstoff für Carbonfasern', 'Acryl-Wolle, Carbonfaser-Vorläufer', '~5'],
      ],
      highlight: [0, 3, 4],
    })}

    <h3 class="lz-h3" style="margin-top:1.75rem;">Polykondensation — Stufenwachstum mit Nebenprodukt</h3>

    ${renderTable({
      headers: ['Polymer', 'Monomere', 'Kondensat', 'Reaktion (vereinfacht)', 'Anwendungen'],
      rows: [
        ['Nylon-6,6 (Polyamid PA6,6)', 'Hexamethylendiamin + Adipinsäure', 'H₂O', 'H₂N–(CH₂)₆–NH₂ + HOOC–(CH₂)₄–COOH → –[NH(CH₂)₆NHCO(CH₂)₄CO]ₙ– + nH₂O', 'Textilfasern, Zahnräder, Kabel-Ummantelung'],
        ['Nylon-6 (PA6)',              'ε-Caprolactam (Ringöffnung)',       '—',    'Ringöffnungspolymerisation: cyclisches Amid öffnet sich → Kette', 'Ähnlich Nylon-6,6; Carp., Angelschnur'],
        ['Polyester (PET)',            'Terephthalsäure + Ethylenglycol',   'H₂O', 'HOOC–C₆H₄–COOH + HOCH₂CH₂OH → –[OC–C₆H₄–COOCH₂CH₂O]ₙ– + nH₂O', 'PET-Flaschen, Textilfasern, Folien (Dacron/Trevira)'],
        ['Polycarbonat (PC)',          'Bisphenol A + Phosgen',             'HCl', 'HOC₆H₄C(CH₃)₂C₆H₄OH + COCl₂ → Polycarbonatkette + 2HCl', 'CD/DVD, Schutzhelme, Brillengläser'],
        ['Phenol-Formaldehyd (Bakelite)', 'Phenol + Formaldehyd',           'H₂O', 'Dreidimensional vernetzt; irreversibel', 'Steckdosen, Greifscheiben, Bügeleisen-Griffe (Duroplast)'],
      ],
      highlight: [0, 2, 4],
    })}

    <h3 class="lz-h3" style="margin-top:1.75rem;">Polyaddition — kein Kondensat</h3>

    ${renderTable({
      headers: ['Polymer', 'Monomere A + B', 'Reaktion', 'Eigenschaften', 'Anwendungen'],
      rows: [
        ['Polyurethan (PUR)', 'Polyisocyanat (–N=C=O) + Polyol (–OH)', 'R–NCO + R\'–OH → R–NH–CO–O–R\' (Urethan-Gruppe)', 'Je nach Vernetzungsgrad: flexibler Schaum bis Hartschaum', 'Matratzenschaum, Dämm-PUR, Lacke, Klebstoffe, Skischuhe'],
        ['Epoxidharz (EP)',   'Bisphenol-A-Diglycidylether + Amin (Härter)', 'Epoxidring + NH₂ → β-Hydroxyamin', 'Dreidimensionale Vernetzung; sehr fest und chemikalienstabil', 'Klebstoffe (Zweikomponenten), Lacke, Faserverbundwerkstoffe'],
      ],
    })}

    <h3 class="lz-h3" style="margin-top:1.75rem;">Kunststofftypen — Struktur und Eigenschaften</h3>

    ${renderTable({
      headers: ['Typ', 'Struktur', 'Verhalten beim Erhitzen', 'Mechanische Eigenschaften', 'Beispiele'],
      rows: [
        ['Thermoplaste',  'Lineare oder schwach verzweigte Ketten; keine oder wenige Quervernetzungen', 'Erweichen (T_g oder T_m); umformbar; wieder erstarrend → reversibel', 'Oft hart-spröde (amorph) oder zäh (teilkristallin)', 'PE, PP, PS, PVC, PET, PMMA, PC, PA'],
        ['Duroplaste',    'Stark dreidimensional vernetzt (Netzwerk)', 'Zersetzung statt Erweichen (ab ~200°C); unschmelzbar', 'Hart, starr, spröde; hohe Formstabilität; chemikalienbeständig', 'Bakelit, Epoxidharze, Melamin-Formaldehyd, Phenol-Formaldehyd'],
        ['Elastomere',    'Weitmaschig vernetzt (Vulkanisierung); amorph', 'Elastisch im breiten T-Bereich; kein Schmelzen', 'Gummielastisch; gummiartig; >100% Dehnung reversibel', 'Naturkautschuk (vulkanisiert), SBR, EPDM, Silikon-Elastomer'],
      ],
      highlight: [0, 2],
    })}

    ${renderInfobox({
      type: 'blue', icon: 'fas fa-thermometer', title: 'Glasübergangstemperatur T_g und Schmelztemperatur T_m',
      body: `<strong>T_g (Glasübergang):</strong> Temperatur, bei der amorphe Polymere vom
             „Glaszustand" (starr, spröde) in den „gummiartigen Zustand" übergehen.
             Unterhalb T_g: Kettensegmente eingefroren. Oberhalb T_g: Beweglichkeit.<br>
             PS: T_g = 100°C · PVC: T_g = 87°C · PMMA: T_g = 115°C · PC: T_g = 147°C<br><br>
             <strong>T_m (Schmelzpunkt):</strong> Nur bei teilkristallinen Thermoplasten.
             PE-HD: T_m = 135°C · PP: T_m = 165°C · PET: T_m = 260°C · PA6,6: T_m = 265°C<br><br>
             <strong>Kristallinität:</strong> Polymer kann nie vollständig kristallisieren (zu lange Ketten).
             PE-HD: ~80% kristallin · PE-LD: ~50% · PS: 0% (amorph)`,
    })}
  `; }

  // ══════════════════════════════════════════════════════════
  // 10.1.3 + 10.1.4 + 10.1.5 — Verarbeitung, maßgeschneidert, Verwertung
  // ══════════════════════════════════════════════════════════
  _verarbeitung() { return `
    ${renderSubhead('10.1.3 — Verarbeitung · 10.1.4 — Maßgeschneiderte Polymere · 10.1.5 — Verwertung')}

    <h3 class="lz-h3">Verarbeitungsverfahren für Kunststoffe</h3>

    ${renderTable({
      headers: ['Verfahren', 'Geeignet für', 'Prinzip', 'Typische Produkte'],
      rows: [
        ['Spritzgießen',      'Thermoplaste',       'Plastifizierter KST wird unter Druck in gekühlte Form gespritzt → erstarrt → Entformen', 'Kaffeekapseln, Autoknöpfe, Gehäuse, Verpackungsdeckel'],
        ['Extrusion',         'Thermoplaste',       'Schneckenextruder plastifiziert → Masseaustritt durch Düse → kontinuierliches Profil', 'Rohre, Folien, Fensterprofile, Fasern'],
        ['Blasformen',        'Thermoplaste',       'Schlauch aus Extruder → Luft einblasen → Hohlkörper', 'Flaschen, Kanister, Tanks'],
        ['Pressen (Formpressen)', 'Duroplaste',     'Vorwärmung + Druck in Form → irreversible Vernetzung', 'Steckdosen, Lenkradnaben, Brems-/Kupplungsbeläge'],
        ['Vakuumtiefziehen',  'Thermoplastfolien',  'Folie erwärmen → über Form anlegen → Vakuum → Abkühlen', 'Blister-Verpackungen, Tiefkühlschalen, Badewannen'],
        ['Faserverbund',      'Duroplaste + Fasern','Fasern (Glas-, Kohlenstoff-, Aramidfasern) mit Harz tränken → aushärten', 'Flügzeugteile, Windturbinenblätter, Sportgeräte, Karosserien'],
        ['Schäumen',          'Thermo-/Elastomere', 'Treibmittel in Polymerschmelze → Aufschäumen → Erstarren', 'Matratzen, Dämmstoffe, Verpackungsschaum'],
      ],
      highlight: [0, 1, 5],
    })}

    <h3 class="lz-h3" style="margin-top:1.75rem;">Maßgeschneiderte Polymere (10.1.4)</h3>

    ${renderMerkboxGrid([
      {
        icon: 'fas fa-arrows-alt-h',
        title: 'Copolymere',
        text: `Zwei oder mehr verschiedene Monomere → Kette mit gemischter Zusammensetzung.
               Statistisch: zufällige Verteilung (z.B. SBR = Styrol-Butadien-Kautschuk)
               Alternierend: regelmäßiger Wechsel A-B-A-B
               Block: lange A-A-A...A-B-B-B...B-Blöcke (Styrol-Butadien-Block = SBS: thermoplastisches Elastomer)
               Pfropf: Hauptkette A, Seitenketten B`,
      },
      {
        icon: 'fas fa-network-wired',
        title: 'Vernetzte Polymere',
        text: `Querbrücken zwischen Ketten durch Vernetzungsmittel.
               Vulkanisierung: Kautschuk + Schwefel → Disulfidbrücken → Elastomer.
               Strahlungsvernetzung: PE unter Elektronenstrahlen → PE-X (PEX); bessere T-Beständigkeit.
               Hochvernetzt (Duroplaste) vs. weitmaschig (Elastomere).`,
      },
      {
        icon: 'fas fa-layer-group',
        title: 'Faserverstärkte Kunststoffe (FVK)',
        text: `GFK (Glasfaserverstärkter KST): E-Glas-Fasern + Epoxid/UP-Harz; günstig; Boote, Behälter.
               CFK (Carbonfaserverstärkt): PAN→Carbonfaser (2000°C-Behandlung); teurer; Luft-/Raumfahrt, Sportartikel.
               AFK (Aramidfaser, Kevlar): aromatisches Polyamid; schusssicher; Schutzwesten.
               Spezifische Festigkeit oft besser als Stahl!`,
      },
      {
        icon: 'fas fa-flask',
        title: 'Funktionelle Polymere',
        text: `Ionenaustauscher: Polystyrolsulfonsäure (Kation-Austauscher); Wasserenthärtung.
               Leitfähige Polymere (Shirakawa/MacDiarmid/Heeger, Nobel 2000): Polyacetylen, PEDOT:PSS → OLEDs, Solarzel.
               Superabsorber: Polyacrylat-Netzwerk; 1 g absorbiert 500 g H₂O; Windeln, Hygiene.
               Bioabbaubare KST: PLA (Polymilchsäure), PHA (Polyhydroxyalkanoate) → Biokompostierung.`,
      },
    ])}

    <h3 class="lz-h3" style="margin-top:1.75rem;">Verwertung von Kunststoffen (10.1.5)</h3>

    ${renderTable({
      headers: ['Verwertungsweg', 'Beschreibung', 'Kunststoffe geeignet', 'Vorteile', 'Nachteile'],
      rows: [
        ['Werkstoffliches Recycling (mechanisch)', 'Sortieren → Zerkleinern → Einschmelzen → Granulat → neues Produkt', 'Thermoplaste: PE, PP, PET, PS, PVC (schwierig: Cl)', 'Rohstofferhalt; relativ günstig', 'Qualitätsverlust (Downcycling); Sortenreinheit nötig; Duroplaste nicht möglich'],
        ['Chemisches Recycling (rohstoffliches R.)', 'Polymer → Monomere oder Grundchemikalien (Depolymerisation, Pyrolyse, Hydrolyse)', 'Alle Polymere; Mischfraktionen möglich', 'Sortenreinheit egal; hohe Produktqualität (virgin quality)', 'Teuer; energieintensiv; wenig etabliert (2023: <2% Anteil)'],
        ['Energetische Verwertung (Verbrennung)', 'Verbrennung in Müllheizkraftwerk → Wärme/Strom', 'Alle Kunststoffe (Mischfraktionen)', 'Energierückgewinnung; keine Sortierung', 'CO₂-Emission; kein Rohstofferhalt; bei PVC: HCl/Dioxin → Filterung nötig'],
        ['Deponierung',                             'Ablagerung auf Deponie', 'Alle (alte Praxis)', 'Billig', 'Umweltschädlich; verboten in EU für organische Abfälle seit 2005'],
      ],
      highlight: [0, 1],
    })}

    ${renderInfobox({
      type: 'warning', icon: 'fas fa-recycle', title: 'Kunststoffkennzeichnungen und Recycling-Codes',
      body: `<strong>SPI-Recycling-Codes (Resin Identification Code):</strong><br>
             ①  PETE – PET (Flaschen) · gut recyclebar<br>
             ②  HDPE – PE-HD (Flaschen, Rohre) · gut recyclebar<br>
             ③  PVC (Rohre, Fenster) · schwierig (Cl → HCl); selten recycelt<br>
             ④  LDPE – PE-LD (Folien, Tüten) · schlecht (leicht, Sortierung schwierig)<br>
             ⑤  PP (Verpackungen, Kästen) · zunehmend recycelt<br>
             ⑥  PS (Einwegbecher, Schaumstoff) · kaum recycelt<br>
             ⑦  Andere (PC, ABS, PLA …) · je nach Stoff<br><br>
             <strong>EU-Ziel:</strong> 55% Kunststoffverpackungen recycelt bis 2030 (Verpackungsrichtlinie).
             Getrennte Sammlung Gelbe Tonne/Wertstofftonne in Deutschland.`,
    })}
  `; }

  // ══════════════════════════════════════════════════════════
  // 10.1.6 — Metallische Werkstoffe
  // ══════════════════════════════════════════════════════════
  _metalle() { return `
    ${renderSubhead('10.1.6 — Metallische Werkstoffe')}

    <h3 class="lz-h3">Stahl — technisch wichtigster metallischer Werkstoff</h3>
    <p class="lz-prose">
      <strong>Stahl</strong> ist eine Eisen-Kohlenstoff-Legierung mit einem
      C-Gehalt zwischen 0,002% und 2,14%. Er ist nach Eisen das am häufigsten
      verwendete Metall (Weltproduktion ~1,9 Mrd. t/Jahr, 2023).
    </p>

    ${renderTable({
      headers: ['Stahltyp', 'C-Gehalt [%]', 'Eigenschaften', 'Anwendungen'],
      rows: [
        ['Tiefstziehlstahl (IF-Stahl)', '<0,003', 'Extrem weich und duktil; kein interstitielles C', 'Automobilkarosserie-Tiefziehen'],
        ['Baustahl (S235, S355)',        '0,15–0,25', 'Allgemein; hohe Festigkeit; schweißbar', 'Brücken, Gebäude, Träger'],
        ['Einsatzstahl',                '0,10–0,20', 'Weicher Kern + harter Rand (Aufkohlung)', 'Zahnräder, Wellen'],
        ['Vergütungsstahl',             '0,35–0,65', 'Gehärtet + angelassen; gute Kombination Festigkeit/Zähigkeit', 'Schrauben, Achsen, Kurbelwellen'],
        ['Werkzeugstahl',               '0,70–1,30', 'Sehr hart; verschleißbeständig', 'Bohrer, Feilen, Messer'],
        ['Gusseisen',                   '>2,14',     'Gut gießbar; spröde; 2–4% C', 'Motorblöcke, Gullydeckel, Maschinengestelle'],
        ['Edelstahl (V2A 1.4301)',       '0,07',      '>10,5% Cr (Passivschicht Cr₂O₃); korrosionsbeständig', 'Küchenmesser, Besteck, chemische Apparate, Chirurgie'],
        ['Edelstahl (V4A 1.4401)',       '0,07',      'Wie V2A + ~2% Mo → säurefest', 'Chloridreiche Umgebung; Meeresumgebung, Papierindustrie'],
      ],
      highlight: [6, 7],
    })}

    ${renderAccordion([
      {
        title: 'Wärmebehandlung von Stahl — Härten, Anlassen, Glühen',
        content: `<p class="lz-prose"><strong>Härten:</strong>
                  Stahl auf >Ac3-Temperatur (Austenitisieren, ~850°C) erhitzen → alle Gefüge auflösen →
                  schnell abschrecken (Wasser, Öl) → Martensit entsteht (tetragonal verzerrter Ferrit;
                  C „eingefroren" → Verspannung → sehr hart, aber spröde).</p>
                  <p class="lz-prose"><strong>Anlassen (Tempern):</strong>
                  Nach Härten: 150–700°C erhitzen → C diffundiert teilweise aus → Verspannung abgebaut →
                  Martensit → Angelassener Martensit (weniger hart, aber weniger spröde).</p>
                  <p class="lz-prose"><strong>Spannungsfreiglühen (Normalglühen):</strong>
                  ~850°C halten + langsam abkühlen → entspanntes Ferrit-Perlit-Gefüge → weich + gut bearbeitbar.</p>
                  <p class="lz-prose"><strong>Randschichthärten:</strong>
                  Einsatzhärten: Aufkohlen bei 900°C in CO-reicher Atmosphäre → C diffundiert in Rand →
                  Härtung des Randes, Kern weich. Induktionshärten: elektrische Induktion erhitzt nur Oberfläche.</p>`,
      },
      {
        title: 'Aluminium und Aluminiumlegierungen',
        content: `<p class="lz-prose"><strong>Reines Aluminium:</strong>
                  Dichte: 2,70 g/cm³ (vs. Fe: 7,87 g/cm³) → sehr leicht.
                  T_schm = 660°C; gute Leitfähigkeit (60% von Cu); natürliche Passivschicht Al₂O₃.
                  Schwache Festigkeit reines Al → Legierungen nötig.</p>
                  <p class="lz-prose"><strong>Duraluminium (Al-Cu-Mg-Legierung, „Dural"):</strong>
                  Al + 4% Cu + 0,5% Mg + 0,5% Mn → Warmauslagern → CuAl₂-Ausscheidungen →
                  Festigkeit stark erhöht (bis 500 MPa!) bei gleicher Dichte.
                  Spezifische Festigkeit besser als viele Stähle → Luftfahrt (1906 erstes Duraluminium, Zeppelin!).</p>
                  <p class="lz-prose"><strong>Weitere wichtige Al-Legierungen:</strong>
                  Al-Si (Gusslegierung): Motorblöcke, Zylinderköpfe.
                  Al-Mg: Schiffsrümpfe, Meeresanwendungen (korrosionsbeständig).
                  Al-Mg-Si (6xxx): Fensterprofile, Fahrradrahmen, Aufliegersattel.
                  Al-Zn-Mg-Cu (7xxx): höchste Festigkeit; Flugzeugstrukturteile.</p>`,
      },
      {
        title: 'Titan und andere Hochleistungsmetalle',
        content: `<p class="lz-prose"><strong>Titan (Ti):</strong>
                  Dichte: 4,51 g/cm³; T_schm = 1668°C; korrosionsbeständig (TiO₂-Passivschicht).
                  Biokompatibel → Implantate (Hüften, Zahnimplantate).
                  Ti-6Al-4V: häufigste Titanlegierung; Luft-/Raumfahrt, Medizin.
                  Nachteil: teuer (~20 €/kg); schwer zu bearbeiten.</p>
                  <p class="lz-prose"><strong>Wolfram (W):</strong>
                  Höchster Schmelzpunkt aller Metalle: 3422°C.
                  Glühfadenwerkstoffe (historisch); Wolframcarbid WC → Hartmetall (Bohrwerkzeuge, Zerspanwerkzeuge).</p>
                  <p class="lz-prose"><strong>Nickel-Superlegierungen:</strong>
                  Ni + Cr + Co + Mo + Ti + Al → T-Beständigkeit bis 1100°C.
                  Turbinenschaufeln (Flugzeugtriebwerke, Gasturbinen).
                  Einkristalline Turbinenschaufeln (keine Korngrenzen → keine Kriechverformung).</p>`,
      },
    ])}
  `; }

  // ══════════════════════════════════════════════════════════
  // 10.1.7 — Silicone, Silicate und Glas
  // ══════════════════════════════════════════════════════════
  _silicone() { return `
    ${renderSubhead('10.1.7 — Silicone, Silicate und Glas')}

    <h3 class="lz-h3">Silicium — das anorganische Analogon zum Kohlenstoff</h3>
    <p class="lz-prose">
      Silicium (Si, Z=14) ist das zweithäufigste Element der Erdkruste (28,2%).
      Es kommt nie elementar vor, sondern stets in oxidierter Form: als
      SiO₂ (Quarz, Sand, Flint) oder als Silicate (Mineral-Bausteine der Gesteine).
      Si–O-Bindungen sind sehr stabil (Bindungsenergie: 452 kJ/mol),
      da O elektronegativer ist und Si d-Orbitale für pπ-dπ-Bindungsanteile nutzt.
    </p>

    <h3 class="lz-h3">Silicate — Strukturprinzip und Klassifikation</h3>
    <p class="lz-prose">
      Grundbaustein aller Silicate: das <strong>SiO₄⁴⁻-Tetraeder</strong>.
      Durch Verknüpfung der Tetraeder (Ecken geteilt, gemeinsame Sauerstoff-Atome)
      entstehen verschiedene Strukturtypen.
    </p>

    ${renderTable({
      headers: ['Silicatklasse', 'Si:O-Verhältnis', 'Einheit', 'Mineralbeispiele', 'Besonderheit'],
      rows: [
        ['Inselsilicate (Nesosilicate)', '1:4', 'SiO₄⁴⁻ (isoliert)', 'Olivin (Mg,Fe)₂SiO₄, Zirkon ZrSiO₄, Granat', 'Keine gemeinsamen O-Atome; hohe Symmetrie'],
        ['Sorosilicate (Gruppen)',       '2:7', 'Si₂O₇⁶⁻', 'Epidot, Vesuvianit', 'Zwei Tetraeder teilen 1 O-Atom'],
        ['Ringsilicate (Cyclosilicate)', '1:3', 'Si₃O₉⁶⁻ oder Si₆O₁₈¹²⁻', 'Benitoit, Beryll Be₃Al₂Si₆O₁₈ (Smaragd!)', 'Ring aus 3 oder 6 Tetraedern'],
        ['Kettensilicate (Inosilicate)', '1:3 (Einfach)', '[SiO₃]ₙ²ⁿ⁻', 'Pyroxene (Diopsid CaMgSi₂O₆, Enstatit)', 'Unendliche Einzelketten'],
        ['Bandsilicate',                '4:11 (Doppelkett.)','[Si₄O₁₁]ₙ⁶ⁿ⁻', 'Amphibole (Hornblende, Asbest)', 'Doppelketten; Asbest: gesundheitsschädlich!'],
        ['Schichtsilicate (Phyllosilicate)','2:5', '[Si₂O₅]ₙ²ⁿ⁻', 'Glimmer (Muskovit, Biotit), Ton, Kaolin, Talg', 'Ebene Schichten → Spaltbarkeit (Glimmer!), Quellung (Ton)'],
        ['Gerüstsilicate (Tektosilicate)', '1:2', '[SiO₂]ₙ', 'Quarz SiO₂, Feldspäte (KAlSi₃O₈), Zeolithe', 'Alle O-Atome geteilt; härteste Silicate; Si kann durch Al ersetzt werden'],
      ],
      highlight: [5, 6],
    })}

    <h3 class="lz-h3" style="margin-top:1.75rem;">Silicone — Si–O–Si mit organischen Seitengruppen</h3>
    <p class="lz-prose">
      <strong>Silicone</strong> (Polysiloxane) sind Polymere mit anorganischem
      Si–O–Si-Rückgrat und organischen (meist Methyl- oder Phenyl-)Seitengruppen.
      Sie vereinen Vorteile anorganischer (Hitzebeständigkeit, chemische Stabilität)
      und organischer (Flexibilität, Hydrophobie) Werkstoffe.
    </p>

    ${renderFormulaBox({
      label:   'Grundstruktur eines Polysiloxans (Siliconöl/Silikonkautschuk)',
      formula: '–[Si(CH₃)₂–O]ₙ– (Polydimethylsiloxan, PDMS)',
      desc:    'Si–O-Bindungswinkel: 140–180° (flexibel) · Si–O-Bindungsenergie: 452 kJ/mol · Glasübergang: T_g ≈ −125°C → flexibel bis sehr tief · T-Beständigkeit: −60°C bis +250°C (Kautschuk)',
    })}

    ${renderTable({
      headers: ['Siliconyp', 'Vernetzungsgrad', 'Aggregatzustand', 'Eigenschaften', 'Anwendungen'],
      rows: [
        ['Siliconöl (PDMS)',       'keine Vernetzung; linear',   'Flüssig (η variabel)', 'Wasserabweisend; elektrisch isolierend; thermisch stabil; nicht toxisch', 'Kosmetika, Schmierstoffe, Trennmittel, Antischaum, Hydraulikflüssigkeiten'],
        ['Siliconkautschuk (LSR/HTV)', 'Weitmaschig vernetzt',  'Elastisch',            'Elastisch −60–250°C; biokompatibel; gute El. Isolation', 'Dichtungen, Implantate (Brustimpl.), Baby-Sauger, Küchenartikel, Elektroisolation'],
        ['Siliconharz (Silicone)', 'Stark dreidimensional vernetzt', 'Fest/harz',        'Sehr hitzebeständig; chemikalienstabil; wasserabweisend', 'Farben, Lacke, Imprägnierungen (Mauerwerk), elektrische Isolationen'],
        ['Silicongelschäume',      'Vernetzt, aufgeschäumt',    'Schaum',               'Leicht; druckabsorbierend; medizinisch inert', 'Wundauflagen, Sitzkissen (Rollstuhl), Dämpfungsmaterialien'],
      ],
      highlight: [1],
    })}

    <h3 class="lz-h3" style="margin-top:1.75rem;">Glas — amorpher Festkörper</h3>
    <p class="lz-prose">
      <strong>Glas</strong> ist ein amorpher (nicht-kristalliner) anorganischer
      Feststoff, der durch schnelles Abkühlen einer Schmelze entsteht, ohne
      dass Kristallisation stattfindet. Es gibt keine scharf definierte
      Schmelztemperatur — Glas erweicht kontinuierlich.
    </p>

    ${renderTable({
      headers: ['Glastyp', 'Zusammensetzung', 'Eigenschaften', 'Anwendungen'],
      rows: [
        ['Kalk-Natron-Glas (Fensterglas)', 'SiO₂ 72%, Na₂O 14%, CaO 10%, MgO 2%', 'Günstig; Sdp. 1500°C; α_th = 9·10⁻⁶/K', 'Fenster, Flaschen, Trinkgläser; >90% Glasproduktion'],
        ['Borosilicatglas (Pyrex, Duran)', 'SiO₂ 80%, B₂O₃ 12%, Na₂O 4%, Al₂O₃ 2%', 'Niedriger α_th = 3·10⁻⁶/K; chemikalienbeständig; T-schockfest', 'Laborglasware, Kochgeschirr (Jenaer Glas), Teleskopspiegel'],
        ['Quarzglas',                       'SiO₂ 100% (>99,9%)',           'α_th ≈ 0,55·10⁻⁶/K; UV-durchlässig; T_g ≈ 1200°C', 'UV-Lampen, Optik, Halbleitertechnik, Laborgeräte'],
        ['Bleikristall',                    'SiO₂ 56%, PbO 28%, K₂O 12%, …', 'Hoher Brechungsindex (n≈1,55); hohe Dispersion; Weichheit', 'Hochwertige Trinkgläser, Prismen, Kronleuchter; PbO heute oft ersetzt'],
        ['Glasfasern (E-Glas)',             'SiO₂ 54%, Al₂O₃ 14%, CaO 22%, …', 'Hohe Zugfestigkeit; günstig', 'Glasfaserverbundwerkstoffe, Lichtwellenleiter'],
        ['Glaskeramik (Ceran, Zerodur)',     'Li₂O-Al₂O₃-SiO₂-System',     'α_th ≈ 0 (null!); durchsichtig; widerstandsfähig', 'Kochfeldplatten, Teleskopspiegel (Zerodur: Null-Ausdehnungskoeffizient)'],
        ['Floatglas-Verfahren (Pilkington)', 'Wie Kalk-Natron-Glas',        'Ebene Oberfläche durch Aufschwimmen auf geschmolzenem Sn', 'Fensterscheiben (99% aller Flachgläser); 1952 erfunden'],
      ],
      highlight: [0, 1, 5],
    })}

    ${renderInfobox({
      type: 'blue', icon: 'fas fa-lightbulb', title: 'Glasherstellung — Floatglas-Verfahren (Pilkington, 1952)',
      body: `<strong>Schmelze:</strong> Quarzsand + Soda (Na₂CO₃) + Kalk (CaCO₃) in Wannenofen bei ~1600°C.<br>
             Soda: Na₂CO₃ → Na₂O + CO₂ (erniedrigt Schmelzpunkt der SiO₂-Struktur durch Netzwerkwandler).<br><br>
             <strong>Floatbad:</strong> Glasschmelze fließt auf Zinnbad (Sn, flüssig) → schwimmt auf (ρ_Glas < ρ_Sn) →
             perfekt ebene Unterseite durch Sn; Oberseite durch Gasatmosphäre geglättet →
             Breite einstellbar durch Walzen.<br><br>
             <strong>Kühlofen (Lehr):</strong> Kontrolliertes Abkühlen von ~600°C auf RT über ~100 m
             (ohne Abkühlspannungen einzufrieren).`,
    })}

    ${renderInfobox({
      type: 'success', icon: 'fas fa-graduation-cap', title: 'Zusammenfassung — Werkstoffe',
      body: `<strong>Polymerisation:</strong> Kettenpolymerisation (Radikale; AE-Typ; kein Nebenprodukt) vs. Stufenwachstum (Polykondensation: H₂O; Polyaddition: kein Kondensat)<br>
             <strong>KST-Typen:</strong> Thermoplasten (schmelzbar; T_g/T_m) · Duroplaste (vernetzt; unschmelzbar) · Elastomere (weitmaschig vernetzt; gummielastisch)<br>
             <strong>Verarbeitung:</strong> Spritzguss (Therm.) · Extrusion · Pressen (Dur.) · Faserverbund<br>
             <strong>Recycling:</strong> mechanisch (Therm.) · chemisch · energetisch<br>
             <strong>Stahl:</strong> Fe + 0,002–2,14% C · Edelstahl: >10,5% Cr → Passivschicht<br>
             <strong>Silicate:</strong> SiO₄⁴⁻ Tetraeder als Baustein · Gerüst (Quarz, Feldspat) · Schicht (Ton, Glimmer)<br>
             <strong>Silicone:</strong> Si–O–Si-Rückgrat + org. Seitenketten · T-stabil · biokompatibel<br>
             <strong>Glas:</strong> amorph · SiO₂-Netzwerk + Netzwerkwandler (Na₂O) + Netzwerkbildner (B₂O₃, Al₂O₃) · Floatglas`,
    })}
  `; }

  init() {
    i18n.init();
    initScrollReveal();
    initInteractive(document);
    initTabs();
  }
}