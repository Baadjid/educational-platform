// pages/projekte/lernzettel/faecher/sport/themen/sportbiologie/energiebereitstellung.js
// Sportbiologie 1.4 — Energiebereitstellung

import { initScrollReveal }  from '../../../../../../../shared/js/index.js';
import { footerHTML }         from '../../../../../../../components/Footer.js';
import { i18n }               from '../../../../../../../shared/js/i18n.js';
import { initWimTabs }       from '../../../../../../../shared/js/wim-tabs.js';
import {
  ensureComponentsCSS,
  renderSubhead,
  renderTags,
  renderInfobox,
  renderFormulaBox,
  renderTable,
  renderTabs,
  renderAccordion,
  renderMerkboxGrid,
  renderCompare,
  initInteractive,
} from '../../../../js/components/components.js';
import { renderPageNav } from '../../../../js/components/subnav.js';

import { COLOR, COLOR_RGB, BASE } from '../../sport.js';

// ─── WIM-Tab-Daten ───────────────────────────────────────────────
const ENERGIE_TABS = [
  { key: 'grundlagen', label: '⚡ ATP & Grundlagen' },
  { key: 'anaerob',    label: '🔥 Anaerob' },
  { key: 'aerob',      label: '🌿 Aerob' },
  { key: 'schwellen',  label: '📈 Schwellen & Laktat' },
  { key: 'diagnostik', label: '🧪 Diagnostik' },
];

export default class SportEnergiebereitstellungPage {
  constructor(router) { this.router = router; }

  render() {
    ensureComponentsCSS();
    const el = document.createElement('div');
    el.className = 'page page-sport-sub';

    if (!document.querySelector('link[href*="sub.css"]')) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'pages/projekte/lernzettel/styles/sub.css';
      document.head.appendChild(link);
    }

    el.style.setProperty('--kap-color',     COLOR);
    el.style.setProperty('--kap-color-rgb', COLOR_RGB);
    el.style.setProperty('--lz-accent',     COLOR);
    el.style.setProperty('--lz-accent-rgb', COLOR_RGB);

    el.innerHTML = this._html();
    return el;
  }

  _html() {
    return `
      <section class="lz-sub-hero">
        <div class="lz-sub-hero-orb" aria-hidden="true"></div>
        <div class="lz-sub-hero-inner">
          <nav class="lz-sub-breadcrumb">
            <button class="lz-bread-link" data-nav-link="/projekte/lernzettel">Lernzettel</button>
            <i class="fas fa-chevron-right"></i>
            <button class="lz-bread-link" data-nav-link="${BASE}">Sport</button>
            <i class="fas fa-chevron-right"></i>
            <span>1.4 · Energiebereitstellung</span>
          </nav>
          <h1 class="lz-sub-title">Energie-<em>bereitstellung.</em></h1>
          <p class="lz-sub-desc">
            ATP-Resynthese, anaerobe und aerobe Systeme, Laktat,
            Schwellenkonzepte und die Leistungsdiagnostik im Überblick.
          </p>
          ${renderTags(['Sportbiologie', '1.4', 'ATP', 'Laktat', 'VO₂max', 'Conconi'])}
        </div>
      </section>

      <section class="lz-content-section">
        <div class="lz-section-wrap">

          <nav class="wim-tabs" id="energieTabs" aria-label="Energiebereitstellung">
            ${ENERGIE_TABS.map((t, i) => `
              <button class="wim-tab${i === 0 ? ' active' : ''}" data-wim="${t.key}">
                ${t.label}
              </button>`).join('')}
          </nav>

          ${this._panelGrundlagen()}
          ${this._panelAnaerob()}
          ${this._panelAerob()}
          ${this._panelSchwellen()}
          ${this._panelDiagnostik()}

        </div>
      </section>

      <section class="lz-content-section" style="padding-top:0;">
        <div class="lz-section-wrap">
          ${renderPageNav({
            prev: { link: `${BASE}/themen/sportbiologie/aktiver-bewegungsapparat`,   label: 'Aktiver Bewegungsapparat' },
            next: { link: `${BASE}/themen/trainingslehre/grundlagen`,     label: 'Trainingslehre — Grundlagen' },
          }, BASE)}
        </div>
      </section>

      ${footerHTML(this.router)}
    `;
  }

  _panelGrundlagen() {
    return `
      <div class="wim-category" data-wim-cat="grundlagen">
        <h2 class="lz-h2">Adenosintriphosphat — universelle Energiewährung</h2>
        <p class="lz-prose">
          Alle energieverbrauchenden Prozesse in der Muskelzelle (Querbrückenzyklus, 
          Ionenpumpen, Proteinbiosynthese) nutzen ausschließlich <strong>ATP</strong> als 
          direkte Energiequelle. Der ATP-Vorrat der Muskelzelle reicht nur für ~2 Sekunden 
          — kontinuierliche Resynthese ist lebenswichtig.
        </p>
        ${renderFormulaBox({
          label: 'ATP-Hydrolyse (Energiefreisetzung)',
          formula: 'ATP → ADP + Pᵢ + ~30 kJ/mol',
          desc: 'ADP = Adenosindiphosphat · Pᵢ = anorganisches Phosphat',
        })}
        ${renderInfobox({
          icon: 'fas fa-database', title: '„Grundstoffe" der Energiebereitstellung',
          body: `<strong>Kohlenhydrate (Glukose/Glykogen):</strong> 4 kcal/g — schnell verfügbar, anaerob + aerob abbaubar. Speicher: ~500 g Glykogen.<br>
                 <strong>Fette (Fettsäuren + Glycerin):</strong> 9 kcal/g — großer Speicher (~80.000 kcal), nur aerob nutzbar, langsamer.<br>
                 <strong>Proteine (Aminosäuren):</strong> 4 kcal/g — Notreserve bei Energiemangel, nicht primär für Sport.`,
        })}
        ${renderTable({
          headers: ['Energiesystem', 'Substrat', 'Sauerstoff', 'Kapazität', 'Dauer', 'Laktat'],
          rows: [
            ['Anaerob-alaktazid (ATP-PC)', 'Kreatinphosphat', 'Nein', 'Sehr gering', '0–10 s', 'Nein'],
            ['Anaerob-laktazid (Glykolyse)', 'Glukose/Glykogen', 'Nein', 'Mittel', '10 s–2 min', 'Ja'],
            ['Aerob-glukosidisch', 'Glukose/Glykogen', 'Ja', 'Mittel', '2–90 min', 'Minimal'],
            ['Aerob-lipolytisch', 'Fettsäuren', 'Ja', 'Sehr hoch', '> 30 min', 'Nein'],
          ],
          highlight: [0],
        })}
      </div>
    `;
  }

  _panelAnaerob() {
    return `
      <div class="wim-category hidden" data-wim-cat="anaerob">
        <h2 class="lz-h2">Anaerobe Energiebereitstellung</h2>
        <div class="lz-subsection">
          <h3 class="lz-h3">Anaerob-alaktazid (ATP-PC)</h3>
          ${renderInfobox({
            icon: 'fas fa-bolt', title: 'Anaerob-alaktazid',
            body: `<strong>Substrat:</strong> Kreatinphosphat (KP) im Muskel.<br>
                   <strong>Reaktion:</strong> KP + ADP → Kreatin + ATP (Lohmann-Reaktion).<br>
                   <strong>Dauer:</strong> Ca. 6–10 Sekunden maximale Leistung.<br>
                   <strong>Kein Laktat</strong> — daher „alaktazid".<br>
                   <strong>Regeneration:</strong> KP-Speicher in 3–5 min vollständig aufgefüllt (aerob).`,
          })}
          ${renderFormulaBox({
            label: 'Lohmann-Reaktion',
            formula: 'KP + ADP ⇌ ATP + Kreatin',
            desc: 'Katalysiert durch Kreatinkinase (CK). Reversibel — ATP kann KP wieder regenerieren.',
          })}
          ${renderMerkboxGrid([
            { icon: 'fas fa-bolt', title: 'Leistung', text: 'Höchste Leistungsabgabe aller Energiesysteme (> 1000 W).' },
            { icon: 'fas fa-clock', title: 'Kapazität', text: 'Sehr gering — KP-Speicher ~20 mmol/kg Muskel.' },
            { icon: 'fas fa-running', title: 'Sport', text: '100 m Sprint, Hochsprung, Gewichtheben, Sprünge.' },
            { icon: 'fas fa-pills', title: 'Kreatin-Supplementierung', text: 'Erhöht KP-Speicher um ~20 % → Leistungssteigerung bei Wiederholungssprints.' },
          ])}
        </div>
        <div class="lz-subsection" style="margin-top:2rem;">
          <h3 class="lz-h3">Anaerob-laktazid (Glykolyse)</h3>
          ${renderInfobox({
            icon: 'fas fa-fire', title: 'Anaerob-laktazid (schnelle Glykolyse)',
            body: `<strong>Substrat:</strong> Glukose (aus Blut) oder Glykogen (Muskel).<br>
                   <strong>Ort:</strong> Zytoplasma (Sarkoplasma) der Muskelzelle.<br>
                   <strong>Produkt:</strong> 2 ATP pro Glukose + <strong>Laktat + H⁺</strong>.<br>
                   <strong>Dauer:</strong> 10 s bis ca. 2 Minuten.<br>
                   Die Anhäufung von H⁺-Ionen (Azidose) hemmt die Enzymatik → Ermüdung.`,
          })}
          ${renderFormulaBox({
            label: 'Anaerobe Glykolyse (vereinfacht)',
            formula: 'Glukose → 2 Laktat + 2 H⁺ + 2 ATP',
            desc: 'Glykogen → 3 ATP (Glykogen hat bereits eine Phosphatgruppe)',
          })}
          ${renderInfobox({
            icon: 'fas fa-vial', title: 'Laktat — nicht nur Abfallprodukt',
            body: `<strong>Laktat ≠ Milchsäure!</strong> Laktat (C₃H₅O₃⁻) und H⁺ entstehen getrennt.<br>
                   Laktat kann von anderen Muskelfasern, Herzmuskel und Leber aerob verstoffwechselt werden 
                   (<em>Cori-Zyklus</em>: Leber → Glukoneogenese aus Laktat).<br>
                   Ruhe-Laktat: ~1 mmol/l. Ausbelastung: 12–20 mmol/l.`,
          })}
        </div>
      </div>
    `;
  }

  _panelAerob() {
    return `
      <div class="wim-category hidden" data-wim-cat="aerob">
        <h2 class="lz-h2">Aerobe Energiebereitstellung</h2>
        <div class="lz-subsection">
          <h3 class="lz-h3">Vollständiger Glukoseabbau — 3 Teilprozesse</h3>
          ${renderTable({
            headers: ['Teilprozess', 'Ort', 'Substrat → Produkt', 'ATP-Ausbeute'],
            rows: [
              ['Glykolyse', 'Zytoplasma', 'Glukose → 2 Pyruvat', '2 ATP (netto)'],
              ['Citratzyklus (Krebszyklus)', 'Mitochondrien-Matrix', '2 Acetyl-CoA → CO₂ + H₂O', '2 ATP + NADH + FADH₂'],
              ['Atmungskette (oxid. Phosphorylierung)', 'Innere Mitochondrienmembran', 'NADH/FADH₂ + O₂ → H₂O', '~32–34 ATP'],
            ],
            highlight: [2],
          })}
          ${renderFormulaBox({
            label: 'Vollständige aerobe Glykolyse',
            formula: 'C₆H₁₂O₆ + 6 O₂ → 6 CO₂ + 6 H₂O + ~36–38 ATP',
            desc: 'Im Vergleich: Anaerobe Glykolyse liefert nur 2 ATP pro Glukose.',
          })}
          ${renderInfobox({
            type: 'tip', icon: 'fas fa-lightbulb', title: 'Pyruvat-Weiche',
            body: `<strong>O₂ ausreichend:</strong> Pyruvat → Acetyl-CoA (durch Pyruvatdehydrogenase) → Mitochondrium → Citratzyklus.<br>
                   <strong>O₂ knapp:</strong> Pyruvat → Laktat (durch Laktatdehydrogenase, LDH) → anaerobe Glykolyse dominiert.`,
          })}
        </div>
        <div class="lz-subsection" style="margin-top:2rem;">
          <h3 class="lz-h3">Aerobe Fettverbrennung (β-Oxidation)</h3>
          ${renderInfobox({
            icon: 'fas fa-oil-can', title: 'Fettsäureabbau',
            body: `<strong>Voraussetzung:</strong> Ausreichend O₂, ausreichend Carnitin (Transport der FS ins Mitochondrium).<br>
                   <strong>Aktivierung:</strong> Fettsäure + CoA + ATP → Acyl-CoA (im Zytoplasma).<br>
                   <strong>β-Oxidation:</strong> Im Mitochondrium — schrittweise Abspaltung von Acetyl-CoA-Einheiten.<br>
                   <strong>Acetyl-CoA</strong> → Citratzyklus → Atmungskette → ATP.`,
          })}
          ${renderFormulaBox({
            label: 'Palmitinsäure (C16) — Gesamtbilanz',
            formula: 'C₁₆H₃₂O₂ + 23 O₂ → 16 CO₂ + 16 H₂O + ~129 ATP',
            desc: '7× β-Oxidation → 8 Acetyl-CoA → jeweils Citratzyklus + Atmungskette',
          })}
          ${renderCompare({
            titleA: 'Fettverbrennung', titleB: 'KH-Verbrennung',
            listA: [
              'Mehr ATP pro Gramm (9 kcal/g)',
              'Sehr großer Speicher',
              'Langsam — braucht viel O₂',
              'Dominant bei niedriger Intensität',
              'Kein Laktat',
            ],
            listB: [
              'Weniger ATP/g (4 kcal/g)',
              'Begrenzter Speicher (~500 g)',
              'Schnell verfügbar (aerob + anaerob)',
              'Dominant bei hoher Intensität',
              'Laktat bei Sauerstoffmangel',
            ],
          })}
        </div>
      </div>
    `;
  }

  _panelSchwellen() {
    return `
      <div class="wim-category hidden" data-wim-cat="schwellen">
        <h2 class="lz-h2">Aerobe und anaerobe Schwelle</h2>
        <p class="lz-prose">
          Mit steigender Belastungsintensität wechselt die dominante Energiequelle.
          Zwei Schwellenwerte markieren qualitative Umstellungen im Stoffwechsel.
        </p>
        ${renderTable({
          headers: ['Schwelle', 'Laktat', 'HF (ca.)', 'Intensität', 'Bezeichnung'],
          rows: [
            ['Aerobe Schwelle (AeS)', '~2 mmol/l', '65–75 % HFmax', 'Moderat', 'Laktat = Laktatelimination (steady state)'],
            ['Anaerobe Schwelle (AnS)', '~4 mmol/l', '80–90 % HFmax', 'Hoch', 'Laktat-Steady-State-Maximum (MLSS)'],
            ['Maximale Intensität', '> 8–12 mmol/l', '95–100 % HFmax', 'Maximal', 'Laktatakkumulation, Abbruch zwingend'],
          ],
          highlight: [1],
        })}
        ${renderInfobox({
          icon: 'fas fa-chart-line', title: 'Bedeutung der Schwellen fürs Training',
          body: `<strong>Unterhalb der AeS:</strong> Rein aerob, primär Fettstoffwechsel — Grundlagenausdauer, Regeneration.<br>
                 <strong>Zwischen AeS und AnS:</strong> Aerob mit KH-Beteiligung — Ausdauerleistung, Tempodauerlauf.<br>
                 <strong>Über der AnS:</strong> Anaerob-laktazid dominiert — Intervalltraining, Wettkampf kurzer Distanzen.<br>
                 Ziel des Ausdauertrainings: Schwellen zu höheren Intensitäten verschieben!`,
        })}
        ${renderAccordion([
          {
            title: 'Laktatstufentest — Ablauf und Auswertung',
            content: `<strong>Ablauf:</strong> Stufenweise Belastungssteigerung (z. B. alle 3–4 min +0,5 m/s oder +25 W). 
                       Am Ende jeder Stufe Laktatbestimmung aus Ohrläppchenblut + HF-Messung.<br><br>
                       <strong>Auswertung:</strong> Laktat-Leistungs-Kurve (LLK) erstellen.<br>
                       Individuelle Schwellen ablesen (IAT: Individuell anaerobe Schwelle nach Stegmann, 
                       oder die klassische 4-mmol/l-Schwelle nach Mader).<br><br>
                       <strong>Trainingsbereiche:</strong> GA1 (Grundlage 1, unter AeS), GA2 (zwischen AeS & AnS), 
                       WSA (Wettkampfspezifische Ausdauer, um AnS), SpA (Spezifische Ausdauer, über AnS).`,
          },
          {
            title: 'Laktatleistungskurve (LLK) — Form und Interpretation',
            content: `<strong>Typischer Verlauf:</strong> S-förmige (sigmoide) Kurve.<br>
                       Bis ca. 2 mmol/l: flacher Anstieg (aerob kompensiert).<br>
                       Zwischen 2–4 mmol/l: steiler Anstieg (aerob-anaerobe Übergangszone).<br>
                       Ab 4 mmol/l: exponentieller Anstieg (anaerob dominiert).<br><br>
                       <strong>Trainingsadaptation:</strong> Kurve verschiebt sich nach rechts → gleiche Laktatkonzentration 
                       bei höherer Geschwindigkeit/Leistung.`,
          },
        ])}
      </div>
    `;
  }

  _panelDiagnostik() {
    return `
      <div class="wim-category hidden" data-wim-cat="diagnostik">
        <h2 class="lz-h2">Conconi-Test & Leistungsdiagnostik</h2>
        ${renderInfobox({
          icon: 'fas fa-flask', title: 'Conconi-Test (1982)',
          body: `<strong>Prinzip:</strong> Nicht-invasive Bestimmung der anaeroben Schwelle via 
                 Herzfrequenz-Leistungs-Beziehung — <em>ohne</em> Blutabnahme.<br>
                 <strong>Grundannahme:</strong> HF steigt linear mit der Leistung bis zur 
                 anaeroben Schwelle → danach Abknickpunkt (<em>Deflektionspunkt</em>) durch 
                 veränderte Kreislaufregulation.`,
        })}
        ${renderTable({
          headers: ['Aspekt', 'Laktatstufentest', 'Conconi-Test'],
          rows: [
            ['Invasivität', 'Invasiv (Blutabnahme)', 'Nicht-invasiv (nur HF)'],
            ['Messgenauigkeit', 'Sehr hoch (Goldstandard)', 'Geringer (Deflektionspunkt nicht immer sichtbar)'],
            ['Kosten/Aufwand', 'Hoch (Labor, Teststreifen)', 'Niedrig (Pulsmesser reicht)'],
            ['Praktikabilität', 'Labor/Testumgebung nötig', 'Auch im Gelände durchführbar'],
            ['Kritik', '—', 'Deflektionspunkt nicht reproduzierbar validiert'],
          ],
        })}
        ${renderInfobox({
          icon: 'fas fa-list-ol', title: 'Conconi-Test — Durchführung',
          body: `<ol style="margin:0;padding-left:1.4rem;line-height:2.0;">
            <li>Aufwärmen (10–15 min locker).</li>
            <li>Stufenweise Steigerung der Laufgeschwindigkeit (alle 200 m + 0,5 km/h, oder alle 1 min + 1 km/h).</li>
            <li>Kontinuierliche HF-Messung (Pulsuhr).</li>
            <li>Test bis zur individuellen Erschöpfung.</li>
            <li>HF gegen Geschwindigkeit auftragen → Deflektionspunkt = anaerobe Schwelle.</li>
          </ol>`,
        })}
        ${renderMerkboxGrid([
          { icon: 'fas fa-heartbeat', title: 'HFmax-Formel', text: 'HFmax ≈ 220 − Lebensalter (grobe Schätzung). Abweichung ±10–15 S/min.' },
          { icon: 'fas fa-chart-bar', title: 'Trainingsbereiche', text: 'GA1: 60–75 % HFmax | GA2: 76–88 % | WSA: 89–95 % | SpA: > 95 %.' },
          { icon: 'fas fa-stopwatch', title: 'Cooper-Test', text: '12-Minuten-Lauf — zurückgelegte Distanz korreliert mit VO₂max. Einfacher Feldtest.' },
          { icon: 'fas fa-microscope', title: 'Spiroergometrie', text: 'Goldstandard für VO₂max-Messung. Atemgasanalyse unter maximaler Belastung.' },
        ])}
      </div>
    `;
  }

  init() {
    i18n.init();
    initScrollReveal();
    initInteractive(document.querySelector('.page-sport-sub'));
    document.querySelectorAll('[data-nav-link]').forEach(btn => {
      btn.addEventListener('click', () => {
        const link = btn.dataset.navLink;
        if (link) window.location.hash = link;
      });
    });
    initWimTabs(document);
  }
}