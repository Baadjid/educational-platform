// pages/projekte/lernzettel/faecher/chemie/themen/10/10-5.js
// Kapitel 10.5 — Ausgewählte chemisch-technische Verfahren
// 10.5.1–10.5.6

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
  { key: 'a', icon: 'fas fa-industry',     label: '10.5.1–3 NH₃, HNO₃, H₂SO₄'    },
  { key: 'b', icon: 'fas fa-bolt',         label: '10.5.4–5 Chloralkali & Aluminium'},
  { key: 'c', icon: 'fas fa-oil-drum',     label: '10.5.6 Erdölverarbeitung'        },
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
  return `<nav class="wim-tabs" role="tablist" id="tabs105">${nav}</nav>${panels}`;
}

function initTabs() {
  const nav = document.getElementById('tabs105');
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

export default class Chemie_10_5 {
  constructor(router) { this.router = router; }
  render() {
    ensureComponentsCSS();
    [['lernzettel.css', 'pages/projekte/lernzettel/styles/lernzettel.css'],['sub.css', 'pages/projekte/lernzettel/styles/sub.css'], ['wim.css', 'shared/styles/components/wim.css']].forEach(([id, href]) => {
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
        <div class="lz-sub-breadcrumb"><button data-link="${BASE}" class="lz-bread-link">Chemie</button><i class="fas fa-chevron-right"></i><span>Kapitel 10</span><i class="fas fa-chevron-right"></i><span>10.5</span></div>
        <h1 class="lz-sub-title">Chemisch-technische Verfahren<br><em>Großindustrielle Syntheseprozesse</em></h1>
        <p class="lz-sub-desc">Haber-Bosch · Ostwald-Verfahren · Kontaktverfahren · Chloralkali-Elektrolyse · Aluminiumgewinnung · Erdölverarbeitung</p>
        ${renderTags(['Kap. 10.5', 'Chemietechnik', 'Haber-Bosch', 'Chloralkali', 'Erdöl', 'LK Chemie BW'])}
      </div>
    </section>
    <section class="lz-content-section"><div class="lz-section-wrap">${buildWimHTML(k => { if (k === 'a') return this._stickstoff(); if (k === 'b') return this._elektrolyse(); return this._erdoel(); })}</div></section>
    <section class="lz-content-section" style="padding:1.5rem 0 3rem;"><div class="lz-section-wrap">${renderPageNav({ prev: { label: '10.4 Arzneimittel', link: `${BASE}/themen/10/10-4` }, next: { label: '10.6 Umweltbezogene Chemie', link: `${BASE}/themen/10/10-6` } }, BASE)}</div></section>
    ${footerHTML(this.router)}
  `; }

  _stickstoff() { return `
    ${renderSubhead('10.5.1 — Ammoniak · 10.5.2 — Salpetersäure · 10.5.3 — Schwefelsäure')}

    <h3 class="lz-h3">10.5.1 — Haber-Bosch-Verfahren (Ammoniak)</h3>
    ${renderFormulaBox({ label: 'Ammoniak-Synthese', formula: 'N₂ + 3H₂ ⇌ 2NH₃   ΔH° = −92,4 kJ/mol · Δn_gas = −2', desc: 'Bedingungen: 400–500°C (kinetisch) · 200–400 bar (thermodynamisch, Δn_gas < 0) · Katalysator: α-Fe + K₂O (Promotor) + Al₂O₃ (Trägerstoff) · Umsatz: ~15% pro Durchgang; NH₃ kondensiert; Recycling → >90% gesamt' })}
    ${renderTable({ headers: ['Parameter', 'Industriell gewählt', 'Kompromiss zwischen'], rows: [['Temperatur', '400–500°C', 'Thermodynamik (niedrig besser) vs. Kinetik (hoch besser) + Katalysatoraktivität'], ['Druck', '200–400 bar', 'Thermodynamik (hoch besser) vs. Investitionskosten + Sicherheit'], ['Katalysator', 'α-Fe + K₂O (Promotor)', 'Aktivität (hohe T) vs. Lebensdauer (niedrige T)'], ['NH₃-Abtrennung', 'Kondensation (−33°C)', 'Le Chatelier: Produkt entfernen → Gleichgewicht verschiebt sich']], highlight: [0, 1] })}

    <h3 class="lz-h3" style="margin-top:1.75rem;">10.5.2 — Ostwald-Verfahren (Salpetersäure)</h3>
    ${renderTable({ headers: ['Schritt', 'Reaktion', 'Bedingungen'], rows: [['1. Ammoniakverbrennung', '4NH₃ + 5O₂ → 4NO + 6H₂O (ΔH° = −906 kJ)', 'Pt/Rh-Netz, 900°C; sehr kurze Kontaktzeit; Umsatz ~97%'], ['2. NO-Oxidation', '2NO + O₂ → 2NO₂', 'Kühlung auf ~50°C; spontan; Luft'], ['3. Absorption', '3NO₂ + H₂O → 2HNO₃ + NO', '50–70°C; NO zurück in Schritt 2; konzentrierte HNO₃ bis 65%']], highlight: [0] })}

    <h3 class="lz-h3" style="margin-top:1.75rem;">10.5.3 — Kontaktverfahren (Schwefelsäure)</h3>
    ${renderTable({ headers: ['Schritt', 'Reaktion', 'Bedingungen'], rows: [['1. SO₂-Erzeugung', 'S + O₂ → SO₂ oder 4FeS₂ + 11O₂ → 2Fe₂O₃ + 8SO₂', 'Schwefelverbrennung oder Erzröstung'], ['2. Katalytische Oxidation', '2SO₂ + O₂ ⇌ 2SO₃  ΔH° = −197,7 kJ/mol', 'V₂O₅/K₂S₂O₇; 400–600°C; mehrere Katalysatorstufen; Doppelkontakt-Verfahren → >99,9%'], ['3. Absorption', 'SO₃ + H₂SO₄(konz.) → H₂S₂O₇ (Oleum)', 'Wasser direkt → Schwefelsäurenebel (Aerosol)! → deshalb Oleum'], ['4. Verdünnung', 'H₂S₂O₇ + H₂O → 2H₂SO₄', 'Geregelt']], highlight: [1] })}

    ${renderInfobox({ type: 'success', icon: 'fas fa-graduation-cap', title: 'Zusammenfassung — Stickstoff-Schwefel-Chemie', body: `<strong>Haber-Bosch:</strong> N₂+3H₂⇌2NH₃ · exo · Δn_gas=−2 → hoher Druck, mittl. T (400–500°C), Fe-Kat., NH₃ kondensieren<br><strong>Ostwald:</strong> NH₃→NO→NO₂→HNO₃ · Pt/Rh-Kat. (Schritt 1); Kühlung+Luftoxidation (Schritt 2); Absorption (Schritt 3)<br><strong>Kontaktverf.:</strong> SO₂→SO₃ (V₂O₅-Kat.) → H₂SO₄ · Doppelkontakt >99,9% · Absorption in Oleum (nicht Wasser!)` })}
  `; }

  _elektrolyse() { return `
    ${renderSubhead('10.5.4 — Chloralkali-Elektrolyse · 10.5.5 — Aluminiumgewinnung')}

    <h3 class="lz-h3">10.5.4 — Chloralkali-Elektrolyse nach dem Membranverfahren</h3>
    <p class="lz-prose">Die <strong>Chloralkali-Elektrolyse</strong> ist das Verfahren zur Herstellung von Chlor (Cl₂), Wasserstoff (H₂) und Natronlauge (NaOH) aus gesättigter Natriumchloridlösung (Sole). Weltproduktion: ~75 Mio. t Cl₂/Jahr.</p>
    ${renderTable({ headers: ['Membranverfahren', 'Anolytraum (Anode, +)', 'Catholytraum (Kathode, −)', 'Membran'], rows: [['Reaktion', '2Cl⁻ → Cl₂ + 2e⁻ (Oxidation)', '2H₂O + 2e⁻ → H₂ + 2OH⁻ (Reduktion)', 'Kationenaustauschermembran (Nafion): nur Na⁺ und H₂O durchlässig; trennt Cl⁻ von OH⁻'], ['Produkte', 'Cl₂(g) + abgereicherte Sole', 'H₂(g) + NaOH-Lösung (~30%)', '—'], ['Vorteile gegenüber Quecksilberverf.', 'Kein Hg; sicher; Energie effizient', '—', 'Reinere NaOH; kein Hg-Kontamination']] })}
    ${renderTable({ headers: ['Produkt', 'Verwendung'], rows: [['Cl₂', 'PVC (Vinylchlorid-Monomer); Lösungsmittel (CHCl₃, CCl₄); Desinfektionsmittel; Chlorkautschuk; Pestizide'], ['NaOH', 'Seifen; Zellstoff/Papier (Sulfit-Aufschluss); Aluminium (Bauxit-Aufschluss); Textilien (Mercerisation); pH-Einstellung'], ['H₂', 'Haber-Bosch (NH₃); Hydrierungen; Brennstoffzellen (zukünftig)']]})}

    <h3 class="lz-h3" style="margin-top:1.75rem;">10.5.5 — Aluminiumgewinnung (Hall-Héroult-Verfahren)</h3>
    <p class="lz-prose">Aluminium kommt häufig als Bauxit vor (Al₂O₃·nH₂O + Fe₂O₃ + SiO₂). Gewinnung erfolgt in zwei Stufen: Bayer-Prozess + Hall-Héroult-Prozess.</p>
    ${renderTable({ headers: ['Schritt', 'Verfahren', 'Reaktion', 'Bedingungen'], rows: [['1. Aufschluss', 'Bayer-Prozess', 'Bauxit + NaOH → Natriumaluminat [Al(OH)₄]⁻; Fe₂O₃ als Rotschlamm bleibt', '140–250°C; 4–6 bar NaOH-Lösung; selektiv für Al'], ['2. Fällung', 'Hydrolyse', '[Al(OH)₄]⁻ →(Kühlung + Al(OH)₃-Impfkristalle) Al(OH)₃ · Al(OH)₃ →(900°C) Al₂O₃ + H₂O', 'Calcinierung zur wasserfreien Al₂O₃ (Tonerde)'], ['3. Elektrolyse', 'Hall-Héroult', 'Kathode: Al³⁺ + 3e⁻ → Al(l) · Anode (C): 2O²⁻ → O₂ + 4e⁻ (C-Anoden verbrennen: C + O₂ → CO₂)', '960°C; Al₂O₃ in geschm. Kryolith (Na₃AlF₆) gelöst; 4–6 V; 100–300 kA']], highlight: [2] })}
    ${renderInfobox({ type: 'warning', icon: 'fas fa-bolt', title: 'Energiebedarf der Aluminiumgewinnung', body: `13–14 kWh pro kg Al (primär) → sehr energieintensiv (vgl. Stahl: 0,4 kWh/kg).<br>Recycling: nur 5% der Primärenergie → Al-Recycling extrem wichtig!<br>Primär-Al: ~60% der Weltproduktion in China (günstige Strompreise durch Kohlekraft).<br>„Konservendose aus flüssiger Elektrizität" — aber Recycling ist vorbildlich.` })}
  `; }

  _erdoel() { return `
    ${renderSubhead('10.5.6 — Erdölverarbeitung')}
    <h2 class="lz-h2">Erdöl — Rohstoff und Energieträger</h2>
    <p class="lz-prose">Erdöl (Rohöl) ist ein komplexes Gemisch aus Kohlenwasserstoffen verschiedener Kettenlänge (C₁–C₄₀+), das durch Zersetzung organischer Materie (Algen, Zooplankton) unter Wärme und Druck über Millionen Jahre entstanden ist. Weltweit werden täglich ~100 Mio. Barrel (= ~16 Mio. m³) gefördert.</p>

    ${renderTable({ headers: ['Fraktion', 'Siedebereich [°C]', 'C-Zahl', 'Verwendung'], rows: [['Raffineriegas', '<30', 'C₁–C₄', 'LPG, Petrochemie-Grundstoff'], ['Leichtnaphtha', '30–90', 'C₄–C₈', 'Lösungsmittel; Steam-Cracking → Ethylen'], ['Schwernaphtha', '90–180', 'C₇–C₁₂', 'Reforming → Benzin-Benzol-Toluol-Xylol (BTX); Benzin'], ['Kerosin (Petroleum)', '180–260', 'C₁₁–C₁₄', 'Flugzeugtreibstoff (Jet-A1), Heizöl, Leuchtmittel (hist.)'], ['Dieselöl (Gasöl, leicht)', '260–340', 'C₁₄–C₂₀', 'Diesel-KFZ; Heizöl EL'], ['Schweres Gasöl', '340–400', 'C₂₀–C₂₅', 'FCC-Feed; Marine-Diesel; Ausgangsstoff Schmieröl'], ['Schmieröl', '400–500', 'C₂₅–C₄₀', 'Motoröle, Getriebe, Industrieschmierung'], ['Rückstand (Bitumen, Asphalt)', '>500', '>C₄₀', 'Straßenbau (Bitumen); Dachbahnen; Schiffstreibstoff (Bunker C)']], highlight: [2, 3, 4] })}

    <h3 class="lz-h3" style="margin-top:1.75rem;">Raffinerievorgänge</h3>
    ${renderAccordion([
      { title: 'Fraktionierte Destillation — physikalische Trennung', content: `<p class="lz-prose">Rohöl wird in einer atmosphärischen Destillationskolonne bei 350°C eingespeist. Leichtere Fraktionen steigen auf, schwerere sinken ab. Mehrere Böden mit Glocken → Kondensation an verschiedenen Temperaturniveaus → Fraktionsabzug. Vakuumdestillation: schwere Rückstände (Bitumen-ähnlich) werden unter Vakuum (10–50 mbar) weiter destilliert → Schmieröl, Gasöl.</p>` },
      { title: 'Katalytisches Cracken (FCC) — Kettenlängenreduktion', content: `<p class="lz-prose"><strong>Fluid Catalytic Cracking (FCC):</strong> Schweres Gasöl (C₂₀+) wird mit Zeolith-Katalysator (400–550°C) in kürzere Ketten gecrackt.<br>Mechanismus: Carbeniumion-Mechanismus; Zeolith erzeugt H⁺ → protoniert Alkan → Carbeniumion → β-Spaltung → kürzere Ketten.<br>Produkt: Benzin, LPG, Propylen (wichtiger Petrochemie-Baustein).<br>Katalysatorkreislauf: Zeolith gecrackt → Ablagerung von Koks → Regeneration durch Abbrennen des Kokses mit Luft (FCC: Fluidized Catalytic Cracking wegen Wirbelschichtbett des Kats.).</p>` },
      { title: 'Reforming — Oktan-Zahl-Verbesserung und Aromatensynthese', content: `<p class="lz-prose"><strong>Katalytisches Reforming (Platforming):</strong><br>Naphtha (C₇–C₁₁-Alkan-reiches Gemisch) + Pt/Re/Al₂O₃-Katalysator + H₂ (Schutzgas), 480–530°C, 10–40 bar.<br>Reaktionen: Dehydrozyklisierung (Alkan → Aromat + H₂), Dehydrogenierung (Cyclohexan → Benzol + 3H₂), Isomerisierung.<br>Produkt: Reformat (benzinreich + Aromaten BTX); hohe Oktanzahl; H₂ als Nebenprodukt (wertvoll!).<br><strong>Oktanzahl (ROZ/MOZ):</strong> Klopffestigkeit des Benzins; Iso-Oktan=100, n-Heptan=0. Super E10: ROZ 95.</p>` },
      { title: 'Alkylierung und Isomerisierung', content: `<p class="lz-prose"><strong>Alkylierung:</strong> Isoalkan + Alken → hochverzweigter Alkan (HF oder H₂SO₄ als Katalysator).<br>Isobutan + Isobutylen → 2,2,4-Trimethylpentan (Isooktan, ROZ=100!) → Benzin.<br><strong>Isomerisierung:</strong> n-Pentan/Hexan → Isopentan/Isohexan → höhere Oktanzahl; Pt-Katalysator, 150–250°C.<br>Moderne Raffinerie kombiniert alle Prozesse → >95% Ausnutzung des Rohöls.</p>` },
    ])}

    ${renderInfobox({ type: 'success', icon: 'fas fa-graduation-cap', title: 'Zusammenfassung — Chemisch-technische Verfahren', body: `<strong>Chloralkali (Membranverf.):</strong> 2NaCl + 2H₂O → Cl₂(Anode) + H₂(Kathode) + 2NaOH · Nafion-Membran trennt<br><strong>Aluminium (Hall-Héroult):</strong> Al₂O₃ in Kryolith (960°C) → 13–14 kWh/kg; Recycling: 5%<br><strong>Erdöl:</strong> Frakts. Destillation → FCC (Zeolith-Cracken) → Reforming (Aromate/OZ) → Alkylierung<br><strong>Alle 6 Verfahren kennen:</strong> Rohstoffe · Bedingungen · Produkte · technische Besonderheiten` })}
  `; }
  init() { i18n.init(); initScrollReveal(); initInteractive(document); initTabs(); }
}