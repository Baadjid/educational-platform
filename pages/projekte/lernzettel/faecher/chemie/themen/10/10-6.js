// pages/projekte/lernzettel/faecher/chemie/themen/10/10-6.js
// Kapitel 10.6 — Umweltbezogene Chemie
// 10.6.1  Der Kreislauf des Kohlenstoffs
// 10.6.2  Der Kreislauf des Stickstoffs
// 10.6.3  Belastungen der Atmosphäre
// 10.6.4  Belastungen der Gewässer
// 10.6.5  Belastungen des Bodens

import { initScrollReveal }  from '../../../../../../../shared/js/index.js';
import { footerHTML }         from '../../../../../../../components/Footer.js';
import { i18n }               from '../../../../../../../shared/js/i18n.js';
import {
  ensureComponentsCSS, renderInfobox, renderTable, renderMerkboxGrid,
  renderFormulaBox, renderSubhead, renderTags, renderAccordion, renderCompare, initInteractive,
} from '../../../../js/components/components.js';
import { renderPageNav } from '../../../../js/components/subnav.js';

import { COLOR, COLOR_RGB, BASE } from '../../chemie.js';

const TABS = [
  { key: 'a', icon: 'fas fa-recycle',     label: '10.6.1–2 C- & N-Kreislauf'    },
  { key: 'b', icon: 'fas fa-smog',        label: '10.6.3 Atmosphären-Belastung' },
  { key: 'c', icon: 'fas fa-water',       label: '10.6.4–5 Gewässer & Boden'    },
];

function buildWimHTML(contentFn) {
  const nav = TABS.map((t, i) => `<button class="wim-tab${i === 0 ? ' active' : ''}" data-wim="${t.key}" role="tab"><i class="${t.icon}"></i><span>${t.label}</span></button>`).join('');
  const panels = TABS.map((t, i) => `<div class="wim-category${i === 0 ? ' active' : ' hidden'}" data-wim-cat="${t.key}" role="tabpanel">${contentFn(t.key)}</div>`).join('');
  return `<nav class="wim-tabs" role="tablist" id="tabs106">${nav}</nav>${panels}`;
}

function initTabs() {
  const nav = document.getElementById('tabs106');
  if (!nav) return;
  const tabs = nav.querySelectorAll('.wim-tab[data-wim]');
  if (!tabs.length) return;
  const panels = [];
  let el = nav.nextElementSibling;
  while (el) { if (el.classList.contains('wim-category')) panels.push(el); el = el.nextElementSibling; }
  const slider = document.createElement('span');
  slider.className = 'wim-tab-slider';
  nav.appendChild(slider);
  function setSlider(tab) { slider.style.width = `${tab.getBoundingClientRect().width}px`; slider.style.transform = `translateX(${tab.offsetLeft}px)`; }
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
      if (e.key === 'ArrowLeft') { e.preventDefault(); (tabs[i - 1] || tabs[tabs.length - 1]).click(); }
    });
  });
}

export default class Chemie_10_6 {
  constructor(router) { this.router = router; }
  render() {
    ensureComponentsCSS();
    [['lernzettel.css', 'pages/projekte/lernzettel/styles/lernzettel.css'], ['sub.css', 'pages/projekte/lernzettel/styles/sub.css'], ['wim.css', 'shared/styles/components/wim.css']].forEach(([id, href]) => {
      if (!document.querySelector(`link[href*="${id}"]`)) { const l = document.createElement('link'); l.rel = 'stylesheet'; l.href = href; document.head.appendChild(l); }
    });
    const el = document.createElement('div');
    el.className = 'page page-chemie page-chemie-sub';
    el.style.setProperty('--lz-accent', COLOR); el.style.setProperty('--lz-accent-rgb', COLOR_RGB);
    el.innerHTML = this._html(); return el;
  }
  _html() { return `
    <section class="lz-sub-hero" style="--kap-color:${COLOR};--kap-color-rgb:${COLOR_RGB};">
      <div class="lz-sub-hero-inner"><div class="lz-sub-hero-orb" aria-hidden="true"></div>
        <div class="lz-sub-breadcrumb"><button data-link="${BASE}" class="lz-bread-link">Chemie</button><i class="fas fa-chevron-right"></i><span>Kapitel 10</span><i class="fas fa-chevron-right"></i><span>10.6</span></div>
        <h1 class="lz-sub-title">Umweltbezogene Chemie<br><em>Kreisläufe, Belastungen und Schutzmaßnahmen</em></h1>
        <p class="lz-sub-desc">Kohlenstoffkreislauf · Treibhauseffekt · Stickstoffkreislauf · Ozonloch · Saurer Regen · Gewässerbelastung · Bodenschutz</p>
        ${renderTags(['Kap. 10.6', 'Umweltchemie', 'Treibhauseffekt', 'Eutrophierung', 'Saurer Regen', 'LK Chemie BW'])}
      </div>
    </section>
    <section class="lz-content-section"><div class="lz-section-wrap">${buildWimHTML(k => { if (k === 'a') return this._kreislauefe(); if (k === 'b') return this._atmosphaere(); return this._gewaesserBoden(); })}</div></section>
    <section class="lz-content-section" style="padding:1.5rem 0 3rem;"><div class="lz-section-wrap">${renderPageNav({ prev: { label: '10.5 Technische Verfahren', link: `${BASE}/themen/10/10-5` }, next: { label: '11.1 Klassische Analyseverfahren', link: `${BASE}/themen/11/11-1` } }, BASE)}</div></section>
    ${footerHTML(this.router)}
  `; }

  _kreislauefe() { return `
    ${renderSubhead('10.6.1 — Kohlenstoffkreislauf · 10.6.2 — Stickstoffkreislauf')}
    <h2 class="lz-h2">Der globale Kohlenstoffkreislauf</h2>
    ${renderTable({ headers: ['Reservoir', 'C-Menge [Gt C]', 'Verweilzeit', 'Wichtigste Flüsse'], rows: [['Atmosphäre (als CO₂)', '860', 'Jahre', 'Fotosynthese (−120 Gt/a), Atmung+Zers. (+120 Gt/a), Verbrennung (+10 Gt/a)'], ['Ozean (gelöst)', '38 000', 'Jahrhunderte', 'CO₂-Lösung (physikalisch + biologisch), carbonat-Puffer'], ['Terrestrische Biosphäre (Pflanzen+Boden)', '2500', 'Jahrzehnte–Jahrhunderte', 'Fotosynthese, Humusbildung, Bodenrespiration'], ['Fossile Brennstoffe', '4000', 'Mio. Jahre', 'Verbrennung (~10 Gt C/a → 37 Gt CO₂/a) → netto anthropogen!'], ['Gesteine (Kalk, Dolomit)', '50 000 000', 'Mio. Jahre', 'Verwitterung, Vulkanismus (langsam)']], highlight: [0, 3] })}

    ${renderInfobox({ type: 'warning', icon: 'fas fa-temperature-high', title: 'Treibhauseffekt — natürlicher und anthropogener Anteil', body: `<strong>Natürlicher Treibhauseffekt:</strong> ohne ihn wäre T_Erde = −18°C (statt +15°C = Differenz: 33°C durch natürliche Treibhausgase H₂O, CO₂, CH₄, N₂O).<br><br><strong>Anthropogener Treibhauseffekt (verstärkt):</strong><br>CO₂ von 280 ppm (vorindustr.) → 420 ppm (2023) → Temperaturanstieg ~1,1°C seit 1850.<br>Strahlungsantrieb: CO₂ +2,0 W/m²; CH₄ +0,5 W/m²; N₂O +0,2 W/m²; FCKW +0,3 W/m².<br><br><strong>Globale Erwärmungspotenziale (GWP100):</strong> CO₂ = 1 (Referenz); CH₄ = 27; N₂O = 273; FCKW = 4750–14 800.<br>Methan: Rinderhaltung (Entärung), Reisfelder, Mülldeponien, Leckagen.<br><strong>Paris-Abkommen (2015):</strong> <2°C Erwärmung; angestrebt <1,5°C.` })}

    <h3 class="lz-h3" style="margin-top:1.75rem;">Der globale Stickstoffkreislauf</h3>
    ${renderTable({ headers: ['Prozess', 'Reaktion', 'Organismus/Ursache', 'Bedeutung'], rows: [['N₂-Fixierung (biologisch)', 'N₂ → NH₃ → NH₄⁺ (Nitrogenase)', 'Rhizobium (Leguminosen), Cyanobakterien, freilebende Bakterien', '~120 Mio. t N/Jahr; Grundlage landwirtschaftl. Fruchtbarkeit'], ['N₂-Fixierung (industriell, Haber-Bosch)', 'N₂ + 3H₂ → 2NH₃', 'Haber-Bosch-Verfahren', '~130 Mio. t N/Jahr → verdoppelt natürliche Fixierung!'], ['Nitrifikation', 'NH₄⁺ → NO₂⁻ (Nitrosomonas) → NO₃⁻ (Nitrobacter)', 'Autotrophe Bodenbakterien', 'Aerob; in Böden und Gewässern; Nitrat wasserlöslich → Auswaschung'], ['Denitrifikation', 'NO₃⁻ → N₂O → N₂ (anaerob)', 'Pseudomonas, andere Anaerobier', 'Rückführung zu N₂; in Gewässersedimenten; N₂O ist Treibhausgas!'], ['Ammonifikation', 'Proteine → NH₄⁺ (Hydrolyse durch Mikroben)', 'Saprophytische Bakterien', 'Mineralisierung von organ. N-Verbindungen'], ['Assimilation', 'NO₃⁻ oder NH₄⁺ → Aminosäuren (Pflanzen)', 'Pflanzen, Mikroben', 'Einbau in Biomasse']], highlight: [0, 2, 3] })}

    ${renderInfobox({ type: 'blue', icon: 'fas fa-seedling', title: 'Stickstoff-Überschuss in der Landwirtschaft — Eutrophierung', body: `<strong>Problem:</strong> Überdüngung → NO₃⁻ und NH₄⁺ im Boden/Grundwasser erhöht.<br>Nitrat im Trinkwasser: EU-Grenzwert 50 mg/L NO₃⁻; Überschreitung in Ackerbaugebieten.<br>Nitrat → (Darm): Nitrit → N-Nitroso-Verbindungen (krebsverdächtig); Methämoglobin (Säuglinge!).<br><br><strong>Eutrophierung:</strong> Überschuss-Nährstoffe (N, P) in Gewässer → Algenwachstum → Algenblüte → Absterben → Bakterienabbau → O₂-Verbrauch → Fischsterben → Gewässertod (Hypertrophierung).<br><br>Düngeverordnung (Deutschland): max. 170 kg N/ha · Jahr auf Nitrat-sensitiven Flächen.` })}
  `; }

  _atmosphaere() { return `
    ${renderSubhead('10.6.3 — Belastungen der Atmosphäre')}
    <h3 class="lz-h3">Saurer Regen — SO₂ und NOₓ</h3>
    ${renderTable({ headers: ['Schadstoff', 'Quelle', 'Chemie in der Atmosphäre', 'Folgen', 'Gegenmaßnahmen'], rows: [['SO₂', 'Kohlekraftwerke, Industrieemissionen, Vulkane', 'SO₂ + H₂O → H₂SO₃; 2SO₂ + O₂ →(Partikel) 2SO₃; SO₃ + H₂O → H₂SO₄ (saurer Regen)', 'pH Regen < 4,5; Waldschäden; Gewässerversauerung; Gebäudeschäden (CaCO₃ + H₂SO₄ → CaSO₄)', 'REA (Rauchgasentschwefelungsanlage): SO₂ + Ca(OH)₂ → CaSO₃ + H₂O (oder CaSO₄)'], ['NOₓ (NO, NO₂)', 'KFZ, Kraftwerke, Landwirtschaft (N₂O)', '2NO + O₂ → 2NO₂; 3NO₂ + H₂O → 2HNO₃ + NO', 'Saurer Regen; Ozon-Vorläufer (Smog); NO₂ giftig (MAK: 0,95 mg/m³)', 'Kfz-Kat. (3-Wege); SCR (Harnstoff→NH₃ → NO → N₂ + H₂O); Feuerungsoptimierung'], ['PM2.5 / Feinstaub', 'Verbrennungsmotoren (Ruß), Industrie, Landwirtschaft', 'Lungengängig < 2,5 µm; PM10 < 10 µm', 'Herz-Kreislauf-Erkrankungen; Atemwegserkrankungen (COPD, Lungenkrebs); WHO-Grenzwert: 5 µg/m³ (PM2.5)', 'Partikelfilter (DPF); Filteranlagen Industrie; E-Mobilität']] })}

    <h3 class="lz-h3" style="margin-top:1.75rem;">Stratosphärisches Ozon und Ozonloch</h3>
    ${renderTable({ headers: ['Aspekt', 'Details'], rows: [['Natürliche Ozonbildung', 'O₂ + hν (λ < 240 nm) → 2 O· → O· + O₂ + M → O₃ + M (Chapman-Zyklus)'], ['Natürlicher Abbau', 'O₃ + hν → O₂ + O· → Gleichgewicht (~300 DU, Dobson Units)'], ['Anthropogener Abbau (FCKW)', 'FCKW (Freon, CCl₂F₂) → UV-Photolyse → Cl· Radikal → Cl· + O₃ → ClO· + O₂ → ClO· + O → Cl· + O₂ (Kat.: 1 Cl· zerstört ~100 000 O₃!)'], ['Ozonloch', 'Über Antarktis (und Arktis) im Frühjahr; −78°C: polarer Stratosphären-Wolken (PSC) → heterogene Reaktionen → mehr Cl·; maximale Ausdehnung: 1980er/1990er'], ['Montrealer Protokoll (1987)', 'Verbot von FCKW; Ersatz durch HFKW (kein Cl; aber Treibhausgas!) und HFKW-Alternativen (HFO, CO₂, Ammoniak)'], ['Erholung', 'Ozonschicht erholt sich langsam: Projektion vollständige Erholung ~2060–2070 (NH), ~2080–2095 (SH)']] })}

    ${renderInfobox({ type: 'blue', icon: 'fas fa-sun', title: 'Troposphärisches Ozon — photochemischer Smog', body: `Gegensatz zum stratosphärischen Ozon (gut!) ist troposphärisches Ozon (Smog!) schädlich.<br><br><strong>Bildung:</strong> NO₂ + hν → NO + O· → O· + O₂ → O₃<br>Voraussetzung: NOₓ + flüchtige organische Verbindungen (VOC) + Sonnenlicht → Photosmog.<br><br><strong>Gesundheitsschäden:</strong> Lungenreizung; verschlimmert Asthma; Vegetation (Ernteausfälle).<br>EU-Zielwert: max. 120 µg/m³ O₃ über 8h (als Tagesmittel); oft überschritten im Sommer!<br><br><strong>Los-Angeles-Smog (Photosmog):</strong> warmes, sonniges Klima + hoher Kfz-Dichte + Inversionswetterlage.` })}
  `; }

  _gewaesserBoden() { return `
    ${renderSubhead('10.6.4 — Belastungen der Gewässer · 10.6.5 — Belastungen des Bodens')}
    <h3 class="lz-h3">Gewässerbelastungen (10.6.4)</h3>
    ${renderTable({ headers: ['Schadstoffe', 'Quelle', 'Chemie / Wirkung', 'Grenzwert / Maßnahme'], rows: [['Nitrat NO₃⁻', 'Düngung, Tierhaltung, Kläranlagen', 'Eutrophierung; Nitratbelastung Grundwasser; Methämoglobin', 'EU: 50 mg/L Trinkwasser; Düngeverordnung DE'], ['Phosphat PO₄³⁻', 'Waschmittel (früher!), Dünger, Kläranlagen', 'Hauptauslöser Eutrophierung (P limitierend in Süßwasser); Algenblüte → O₂-Mangel', 'Phosphatverbot Waschmittel DE 1990; P-Fällung in Kläranlage (Fe³⁺ + PO₄³⁻ → FePO₄↓)'], ['Schwermetalle Hg, Pb, Cd, Cr', 'Industrie, Bergbau, Altlasten, Verbrennung', 'Bioakkumulation in Nahrungskette (Biomagnifikation: 10⁵-Faktor); Nierentoxizität (Cd); Neurotoxizität (Hg)', 'WRRL (EU-Wasserrahmenrichtlinie): Umweltqualitätsnormen; Elimination in Kläranlage'], ['Arzneimittelrückstände', 'Ausscheidung, Tierhaltung, Klinikabwasser', 'Östrogene → Feminisierung von Fischen; Antibiotika → Resistenzentwicklung', 'Kläranlagen entfernen nicht vollständig; 4. Reinigungsstufe (Aktivkohle, Ozon)'], ['Mikroplastik', 'Reifenabrieb, Textilwäsche, Kosmetik, UV-Abbau von Makroplastik', 'Adsorption von Schadstoffen; Aufnahme durch Organismen; Darmverstopfung; Biofilm', 'Kein einheitlicher Grenzwert; Verbot Microbeads in Kosmetik (DE: 2017; EU: 2023)'], ['Pestizide (Herbizide, Insektizide)', 'Landwirtschaft; Haushalte', 'Persistente org. Schadstoffe (POP); Bioakkumulation; endokrin störend; Ökotoxizität', 'EU-Trinkwasser: 0,1 µg/L pro Einzelsubstanz; 0,5 µg/L gesamt']], highlight: [0, 1, 4] })}

    <h3 class="lz-h3" style="margin-top:1.75rem;">Kläranlage — mehrstufige Abwasserreinigung</h3>
    ${renderTable({ headers: ['Stufe', 'Methode', 'Entfernt'], rows: [['1. Mechanische Reinigung', 'Rechen; Sandfang; Vorklärbecken (Sediment.)', 'Grobstoffe; Sand; absetzbare Feststoffe (~30% BSB₅)'], ['2. Biologische Reinigung', 'Belebungsbecken: Aerobe Bakterien bauen organ. Substanz ab (BSB₅); Nitrifikation; Denitrifikation', 'BSB₅ ~95%; NH₄⁺; NO₃⁻; Schwebstoffe'], ['3. Chemische Reinigung', 'P-Fällung: FeCl₃ oder AlCl₃ → FePO₄↓ oder AlPO₄↓', 'Phosphat (>90%)'], ['4. (Opt.) Weitergehende Behandlung', 'Aktivkohle-Adsorption oder Ozonung oder UV-Bestrahlung', 'Arzneimittelrückstände; Mikroverunreinigungen; Keime']] })}

    <h3 class="lz-h3" style="margin-top:1.75rem;">Bodenbelastungen (10.6.5)</h3>
    ${renderMerkboxGrid([{ icon: 'fas fa-radiation', title: 'Schwermetallkontamination', text: `Cadmium: Phosphatdünger (natürliche Verunreinigung); Zigarettenrauch; Nieren-Bioakkumulation (Itai-Itai-Krankheit Japan). Blei: Benzinzusatz (Tetraethylblei, bis ~2000 abgeschafft); Altlasten; Farben. Arsen: Pestizide; Bergbau; Grundwasser in Bangladesch → 100 Mio. betroffen. Sanierung: Phytoremediation (bestimmte Pflanzen akkumulieren Metalle), Bodenaustausch, Immobilisierung.` }, { icon: 'fas fa-tractor', title: 'Pestizide und persistente Schadstoffe', text: `DDT (Dichlordiphenyltrichlorethan): Insektizid; verboten (EU 1972, US 1973), aber noch in Umwelt nachweisbar; bioakkumuliert. PCB (Polychlorierte Biphenyle): Transformatoröle; Bausubstanzen; verboten 1980er; persistente organische Schadstoffe (POP, Stockholm-Konvention). PFAS (per- und polyfluorierte Alkylsubstanzen): „ewige Chemikalien"; Teflon, Feuerlöschmittel; Grundwasserkontamination; EU-Restriktionspläne.` }, { icon: 'fas fa-smog', title: 'Versauerung und Nährstoffeintrag', text: `Saurer Regen: Boden-pH sinkt → Al³⁺ mobilisiert (Wurzelschäden); Ca²⁺/Mg²⁺ ausgewaschen → Nährstoffmangel. Waldsterben (1980er: v.a. SO₂/Fichtennadeln): verursacht durch SO₂ + NOₓ → Kalkung der Böden als Gegenmaßnahme. Stickstoffeintrag: Ammoniakdeposition aus Tierhaltung → Überversorgung mit N → Verdrängung N-armer Ökosysteme (Heiden → Gräser).` }, { icon: 'fas fa-industry', title: 'Altlasten und Bodensanierung', text: `Altlasten: Kontaminierte Böden aus Industriebrachen (Gaswerke, Tankstellen, Rüstungsgelände). Schadstoffe: BTEX (Benzol, Toluol, Ethylbenzol, Xylol aus Benzin), polycyclische Aromaten (PAK), Chlorkohlenwasserstoffe (CKW, Trinkwasserverunreinigung). Sanierungsmethoden: Ex-situ (Aushub + Behandlung), In-situ (Pump-and-Treat, Bioremediation, thermische Behandlung, Monitored Natural Attenuation).` }])}

    ${renderInfobox({ type: 'success', icon: 'fas fa-graduation-cap', title: 'Zusammenfassung — Umweltbezogene Chemie', body: `<strong>Kohlenstoffkreislauf:</strong> Fotosynthese (CO₂→Biomasse) ↔ Atmung/Verbrennung · Anthropogen: +10 Gt C/Jahr · Treibhauseffekt: GWP CO₂=1; CH₄=27; N₂O=273<br><strong>Stickstoffkreislauf:</strong> Fixierung (Rhizobium + Haber-Bosch) → Nitrifikation → Denitrifikation → N₂ · Stickstoffüberschuss → Nitratbelastung + Eutrophierung<br><strong>Atmosphäre:</strong> Saurer Regen (SO₂+NOₓ) · Ozonloch (FCKW, Cl-Radikale) · Photosmog (NOₓ+VOC+UV→O₃)<br><strong>Gewässer:</strong> Eutrophierung (N, P) · Schwermetalle (Bioakkumulation) · Mikroplastik · Pharmaka<br><strong>Boden:</strong> Schwermetalle · DDT/PCB/PFAS (POP) · Versauerung · Altlasten<br><strong>Kläranlage:</strong> 1.(mech.) → 2.(biol., BSB₅) → 3.(chem., P-Fällung) → 4.(opt., Aktivkohle)` })}
  `; }
  init() { i18n.init(); initScrollReveal(); initInteractive(document); initTabs(); }
}