// pages/projekte/lernzettel/faecher/sport/themen/trainingslehre/kraft.js
// Trainingslehre 2.3 — Kraft

import { initScrollReveal }  from '../../../../../../../shared/js/index.js';
import { footerHTML }         from '../../../../../../../components/Footer.js';
import { i18n }               from '../../../../../../../shared/js/i18n.js';
import { initWimTabs }       from '../../../../../../../shared/js/wim-tabs.js';
import {
  ensureComponentsCSS,
  renderSubhead, renderTags, renderInfobox, renderFormulaBox,
  renderTable, renderTabs, renderAccordion, renderMerkboxGrid,
  renderCompare, initInteractive,
} from '../../../../js/components/components.js';
import { renderPageNav } from '../../../../js/components/subnav.js';

import { COLOR, COLOR_RGB, BASE } from '../../sport.js';

// ─── WIM-Tab-Daten ───────────────────────────────────────────────
const KRAFT_TABS = [
  { key: 'kraftarten',   label: '💪 Kraftarten' },
  { key: 'methoden',     label: '🏋️ Methoden' },
  { key: 'arbeitsweise', label: '⚙️ Arbeitsweisen' },
  { key: 'anpassungen',  label: '📈 Anpassungen' },
  { key: 'tests',        label: '🧪 Tests' },
];

export default class SportKraftPage {
  constructor(router) { this.router = router; }

  render() {
    ensureComponentsCSS();
    const el = document.createElement('div');
    el.className = 'page page-sport-sub';
    if (!document.querySelector('link[href*="sub.css"]')) {
      const l = document.createElement('link');
      l.rel = 'stylesheet'; l.href = 'pages/projekte/lernzettel/styles/sub.css';
      document.head.appendChild(l);
    }
    el.style.setProperty('--kap-color', COLOR);
    el.style.setProperty('--kap-color-rgb', COLOR_RGB);
    el.style.setProperty('--lz-accent', COLOR);
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
            <span>2.3 · Kraft</span>
          </nav>
          <h1 class="lz-sub-title">Kraft — <em>Arten & Training.</em></h1>
          <p class="lz-sub-desc">
            Maximalkraft, Schnellkraft, Kraftausdauer, Trainingsmethoden,
            Anpassungen und Testverfahren.
          </p>
          ${renderTags(['Trainingslehre', '2.3', 'Maximalkraft', 'Hypertrophie', 'IK-Training', '1RM'])}
        </div>
      </section>

      <section class="lz-content-section">
        <div class="lz-section-wrap">

          <nav class="wim-tabs" id="kraftTabs" aria-label="Kraft">
            ${KRAFT_TABS.map((t, i) => `
              <button class="wim-tab${i === 0 ? ' active' : ''}" data-wim="${t.key}">
                ${t.label}
              </button>`).join('')}
          </nav>

          ${this._panelKraftarten()}
          ${this._panelMethoden()}
          ${this._panelArbeitsweise()}
          ${this._panelAnpassungen()}
          ${this._panelTests()}

        </div>
      </section>

      <section class="lz-content-section" style="padding-top:0;">
        <div class="lz-section-wrap">
          ${renderPageNav({
            prev: { link: `${BASE}/themen/trainingslehre/ausdauer`,   label: 'Ausdauer' },
            next: { link: `${BASE}/themen/trainingslehre/schnelligkeit`,     label: 'Schnelligkeit' },
          }, BASE)}
        </div>
      </section>


      ${footerHTML(this.router)}
    `;
  }

  _panelKraftarten() {
    return `
      <div class="wim-category" data-wim-cat="kraftarten">
        <h2 class="lz-h2">Kraftfähigkeiten</h2>
        ${renderInfobox({
          icon: 'fas fa-dumbbell', title: 'Definition Kraft',
          body: `Kraft ist die Fähigkeit des Nerv-Muskel-Systems, durch Muskelkontraktion 
                 <strong>Widerstände zu überwinden</strong> (konzentrisch), 
                 ihnen <strong>entgegenzuwirken</strong> (exzentrisch) oder 
                 sie zu <strong>halten</strong> (isometrisch).`,
        })}
        ${renderTable({
          headers: ['Kraftart', 'Definition', 'Schlüsselparameter', 'Sportbeispiel'],
          rows: [
            ['Maximalkraft', 'Höchstmögliche Kraft bei willkürlicher Kontraktion', '1RM (One Repetition Maximum)', 'Gewichtheben, Kugelstoßen'],
            ['Schnellkraft', 'Fähigkeit, in kurzer Zeit hohe Kraftwerte zu entwickeln', 'Rate of Force Development (RFD)', 'Sprint-Start, Sprung, Wurf'],
            ['Kraftausdauer', 'Widerstandsfähigkeit gegen Ermüdung bei Krafteinsätzen', 'Wiederholungszahl bei % 1RM', 'Rudern, Turnen, Kampfsport'],
            ['Reaktivkraft', 'Kraft im Dehnungs-Verkürzungs-Zyklus', 'Stiffness, Kontaktzeit', 'Sprinten, Springen, Werfen'],
          ],
          highlight: [0],
        })}
        ${renderFormulaBox({
          label: 'Schnellkraft / Leistung',
          formula: 'P = F × v',
          desc: 'P = Leistung [W] · F = Kraft [N] · v = Geschwindigkeit [m/s]',
        })}
      </div>
    `;
  }

  _panelMethoden() {
    return `
      <div class="wim-category hidden" data-wim-cat="methoden">
        <h2 class="lz-h2">Krafttrainingsmethoden</h2>
        ${renderTable({
          headers: ['Methode', 'Intensität (% 1RM)', 'Wdh.', 'Sätze', 'Pause', 'Primäres Ziel'],
          rows: [
            ['MA-Training (Muskelaufbau)', '65–80 %', '8–12', '3–5', '60–90 s', 'Hypertrophie (Querschnittszunahme)'],
            ['IK-Training (Intramusku. Koordination)', '85–100 %', '1–5', '3–6', '3–5 min', 'Maximalkraft (neurale Adaptation)'],
            ['Kraftausdauertraining', '30–60 %', '15–30+', '2–4', '30–60 s', 'Lokale Ausdauer'],
            ['Schnellkrafttraining', '30–60 %', '5–8 (explosiv)', '3–5', '2–3 min', 'RFD, DVZ'],
            ['Plyometrisches Training', 'Körpergewicht', '5–10', '3–5', '2–3 min', 'Reaktivkraft, DVZ'],
            ['Exzentrisches Training', '100–130 %', '4–8', '3–4', '3–5 min', 'Max. Hypertrophie, Verletzungsprävention'],
          ],
          highlight: [0],
        })}
        
        <h3 class="lz-h3" style="margin-top:1.5rem;">MA-Training (Muskelaufbau)</h3>
        ${renderInfobox({
          icon: 'fas fa-expand', title: 'Muskelaufbautraining (Hypertrophie)',
          body: `<strong>Mechanismus:</strong> Mechanische Spannung + metabolischer Stress + 
                 Muskelschäden → Proteinsynthese > Proteinabbau → Hypertrophie.<br>
                 <strong>Typ-II-Fasern</strong> wachsen primär (größeres Hypertrophiepotenzial).<br>
                 <strong>Wichtig:</strong> Ausreichend Protein (~1.6–2.2 g/kg/Tag) + Kalorienüberschuss.`,
        })}
        ${renderCompare({
          titleA: 'Myofibrilläre Hypertrophie', titleB: 'Sarkoplasmatische Hypertrophie',
          listA: ['Zunahme von Aktin/Myosin-Filamenten', 'Realer Kraftanstieg', 'Niedrige Wdh., hohe Last (5–8)', 'Dauerhafter Zuwachs'],
          listB: ['Zunahme von Sarkoplasma/Glykogen', 'Optisch mehr Volumen', 'Höhere Wdh., moderate Last (12–20)', 'Rascheres „Pumping"'],
        })}

        <h3 class="lz-h3" style="margin-top:1.5rem;">IK-Training</h3>
        ${renderInfobox({
          icon: 'fas fa-brain', title: 'Intramuskuläres Koordinationstraining',
          body: `Verbessert die <strong>neurale Steuerung</strong> des Muskels:<br>
                 • <strong>Rekrutierung:</strong> Mehr motorische Einheiten gleichzeitig aktiv.<br>
                 • <strong>Frequenzierung:</strong> Höhere Impulsrate der Motoneuronen.<br>
                 • <strong>Synchronisation:</strong> Zeitlich besser abgestimmte Aktivierung.<br>
                 Maximalkraftgewinn <em>ohne</em> wesentliche Muskelquerschnittszunahme möglich 
                 (relevant für Sportarten mit Gewichtsklassen).`,
        })}

        <h3 class="lz-h3" style="margin-top:1.5rem;">Pyramidentraining</h3>
        ${renderInfobox({
          icon: 'fas fa-caret-up', title: 'Pyramidentraining',
          body: `<strong>Steigende Pyramide:</strong> Gewicht ↑, Wdh. ↓ von Satz zu Satz.<br>
                 z. B. 15 → 12 → 10 → 8 → 6 Wdh. (mit steigendem Gewicht).<br>
                 <strong>Doppelpyramide:</strong> Steigerung + Abstieg → höchste Intensität in der Mitte.<br>
                 <strong>Vorteil:</strong> Gutes Aufwärmen, Kombination von MA- und IK-Reizen.`,
        })}
      </div>
    `;
  }

  _panelArbeitsweise() {
    return `
      <div class="wim-category hidden" data-wim-cat="arbeitsweise">
        <h2 class="lz-h2">Trainingsformen nach Arbeitsweise</h2>
        ${renderTable({
          headers: ['Trainingsform', 'Beschreibung', 'Vorteil', 'Nachteil / Einschränkung'],
          rows: [
            ['Konzentrisch / positiv-dynamisch', 'Muskel verkürzt sich aktiv gegen Widerstand', 'Einfach, sicher, alltagsnah', 'Geringster Hypertrophiereiz'],
            ['Exzentrisch / negativ-dynamisch', 'Muskel verlängert sich unter Bremsung', 'Stärkster Hypertrophiereiz, 40 % mehr Kraft', 'Mehr DOMS, höheres Verletzungsrisiko'],
            ['Isometrisch / statisch', 'Keine Längenänderung, Haltearbeit', 'Gelenkschonend, überall durchführbar', 'Nur im trainierten Winkelbereich wirksam'],
            ['Isokinetisch', 'Konstante Winkelgeschwindigkeit via Dynamometer', 'Maximale Spannung über gesamten ROM', 'Nur mit Spezialgeräten möglich'],
            ['Plyometrisch', 'DVZ: exzentrisch → kurz isometrisch → konzentrisch', 'Reaktivkraft, Explosivkraft', 'Hohe Gelenkbelastung, nur für Trainierte'],
          ],
          highlight: [4],
        })}
        ${renderInfobox({
          type: 'warning', icon: 'fas fa-triangle-exclamation', title: 'Gefahren im Krafttraining',
          body: `<strong>Pressatmung (Valsalva-Manöver):</strong> Gefährlicher Druckanstieg → Ohnmacht, Herz-Kreislauf-Belastung. Beim Heben ausatmen!<br>
                 <strong>Ego-Lifting:</strong> Zu schwere Gewichte → Technikversagen → Verletzungen (Bandscheibe, Rotatorenmanschette, Kreuzbänder).<br>
                 <strong>Muskelkater als Warnsignal:</strong> Starker DOMS → Regenerationszeit beachten, keine Vollbelastung.<br>
                 <strong>Asymmetrien:</strong> Einseitige Trainingsschwerpunkte → Muskeldysbalancen → Haltungsschäden.`,
        })}
      </div>
    `;
  }

  _panelAnpassungen() {
    return `
      <div class="wim-category hidden" data-wim-cat="anpassungen">
        <h2 class="lz-h2">Anpassungen durch Krafttraining</h2>
        
        <h3 class="lz-h3">Kurzfristig (Wochen 1–4)</h3>
        ${renderMerkboxGrid([
          { icon: 'fas fa-brain',       title: 'Neurale Adaptation', text: 'Schnellster Kraftzuwachs: bessere Rekrutierung, Frequenzierung, Synchronisation.' },
          { icon: 'fas fa-fire',         title: 'Intramuskuläre Koordination ↑', text: 'Bis zu 20–30 % Kraftzuwachs ohne messbaren Muskelzuwachs.' },
          { icon: 'fas fa-heart-pulse',  title: 'Kardiovaskuläre Anpassung', text: 'Herz gewöhnt sich an Druckbelastung (konz. Hypertrophie bei reinem Krafttraining).' },
          { icon: 'fas fa-shield-halved', title: 'Sehnen & Bänder', text: 'Erhöhte Kollagensynthese → zugfestere Sehnen (langsamer als Muskeln).' },
        ])}

        <h3 class="lz-h3" style="margin-top:1.5rem;">Langfristig (Monate–Jahre)</h3>
        ${renderTable({
          headers: ['Struktur', 'Anpassung', 'Zeitraum'],
          rows: [
            ['Muskeln', 'Hypertrophie (Querschnitt ↑, mehr Myofibrillen)', '4–8 Wochen sichtbar'],
            ['Knochen', 'Erhöhte Knochendichte (Osteoporose-Prävention)', 'Monate–Jahre'],
            ['Sehnen', 'Dickere, zugfestere Sehnen', '3–6 Monate'],
            ['Knorpel', 'Verbesserte Nährstoffversorgung durch Bewegung', 'Dauerhaft bei Training'],
            ['Hormonsystem', 'Optimierter Testosteron/Cortisol-Quotient', 'Wochen–Monate'],
            ['Stoffwechsel', 'Erhöhter Grundumsatz durch Muskelmasse', 'Monate'],
          ],
        })}
      </div>
    `;
  }

  _panelTests() {
    return `
      <div class="wim-category hidden" data-wim-cat="tests">
        <h2 class="lz-h2">Krafttests und Diagnostik</h2>
        ${renderTable({
          headers: ['Test', 'Misst', 'Durchführung', 'Normwerte (Orientierung)'],
          rows: [
            ['1RM-Test', 'Maximalkraft', 'Schritteweise Steigerung bis max. 1 Wdh.', 'Individuell (KG-bezogen)'],
            ['Liegestütz-Test (60 s)', 'Kraftausdauer Oberkörper', 'Max. Wdh. in 60 s, korrekte Technik', '♂ gut: >35; ♀ gut: >18'],
            ['Sit-up-Test (60 s)', 'Rumpfkraftausdauer', 'Max. Wdh. in 60 s, Hände hinter Kopf', '♂ gut: >30; ♀ gut: >25'],
            ['Standweitsprung', 'Schnellkraft Beine', 'Beidbeiniger Absprung, Landungsmessung', '♂ ~180–220 cm; ♀ ~140–180 cm'],
            ['CMJ / SJ (Sprungkraft)', 'Schnell-/Reaktivkraft', 'Countermovement Jump / Squat Jump', 'CMJ > SJ (DVZ-Effekt sichtbar)'],
            ['Klimmzug-Test', 'Relative Kraftausdauer Oberkörper', 'Max. Wdh. bis Erschöpfung', '♂ gut: >8; ♀ gut: >3'],
          ],
          highlight: [3],
        })}
        ${renderFormulaBox({
          label: 'Epley-Formel (1RM-Schätzung)',
          formula: '1RM = Gewicht × (1 + Wdh. / 30)',
          desc: 'Schätzung des 1RM aus submaximaler Last. Genauer im Bereich 4–10 Wdh.',
        })}
        ${renderInfobox({
          type: 'tip', icon: 'fas fa-lightbulb', title: 'Relativer vs. absoluter Kraftwert',
          body: `<strong>Absolute Kraft:</strong> Kräftester Athlet hebt das meiste Gewicht.<br>
                 <strong>Relative Kraft</strong> = 1RM / Körpergewicht — fairerer Vergleich 
                 zwischen verschieden schweren Athleten. 
                 Leichtgewichtige Turner oder Kletterer haben oft die höchste relative Kraft.`,
        })}
      </div>
    `;
  }

  init() {
    i18n.init(); initScrollReveal();
    initInteractive(document.querySelector('.page-sport-sub'));
    document.querySelectorAll('[data-nav-link]').forEach(btn => {
      btn.addEventListener('click', () => { window.location.hash = btn.dataset.navLink; });
    });
    initWimTabs(document);
  }
}