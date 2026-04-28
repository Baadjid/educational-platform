// pages/projekte/lernzettel/faecher/sport/themen/trainingslehre/ausdauer.js
// Trainingslehre 2.2 — Ausdauer

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
const AUSDAUER_TABS = [
  { key: 'arten',      label: '📊 Ausdauerarten' },
  { key: 'anpassungen', label: '💪 Anpassungen' },
  { key: 'dauermethode', label: '🏃 Dauermethode' },
  { key: 'intervall',  label: '⚡ Intervall' },
];

export default class SportAusdauerPage {
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
            <span>2.2 · Ausdauer</span>
          </nav>
          <h1 class="lz-sub-title">Ausdauer — <em>Methoden & Training.</em></h1>
          <p class="lz-sub-desc">
            Ausdauerarten, Grundlagenausdauer, Trainingsmethoden von der 
            Dauermethode bis zum Intervalltraining und physiologische Anpassungen.
          </p>
          ${renderTags(['Trainingslehre', '2.2', 'Dauermethode', 'Intervall', 'HIIT', 'GA'])}
        </div>
      </section>

      <section class="lz-content-section">
        <div class="lz-section-wrap">

          <nav class="wim-tabs" id="ausdauerTabs" aria-label="Ausdauer">
            ${AUSDAUER_TABS.map((t, i) => `
              <button class="wim-tab${i === 0 ? ' active' : ''}" data-wim="${t.key}">
                ${t.label}
              </button>`).join('')}
          </nav>

          ${this._panelArten()}
          ${this._panelAnpassungen()}
          ${this._panelDauermethode()}
          ${this._panelIntervall()}

        </div>
      </section>

      <section class="lz-content-section" style="padding-top:0;">
        <div class="lz-section-wrap">
          ${renderPageNav({
            prev: { link: `${BASE}/themen/trainingslehre/grundlagen`,   label: 'Grundlagen' },
            next: { link: `${BASE}/themen/trainingslehre/kraft`,     label: 'Kraft' },
          }, BASE)}
        </div>
      </section>

      ${footerHTML(this.router)}
    `;
  }

  _panelArten() {
    return `
      <div class="wim-category" data-wim-cat="arten">
        <h2 class="lz-h2">Definition und Ausdauerarten</h2>
        ${renderInfobox({
          icon: 'fas fa-person-running', title: 'Definition Ausdauer',
          body: `Ausdauer ist die <strong>Widerstandsfähigkeit gegen Ermüdung</strong> und die 
                 Fähigkeit zur schnellen Regeneration nach Belastung. 
                 Sie ist die Basis aller konditionellen Fähigkeiten und entscheidend für Gesundheit und Leistung.`,
        })}
        ${renderTable({
          headers: ['Klassifikation', 'Arten', 'Merkmal'],
          rows: [
            ['Nach Muskeleinsatz', 'Allgemein (> 1/7 Muskelmasse) / Lokal (< 1/7)', 'Allg. = systemische Wirkung; lokal = peripher'],
            ['Nach Energiestoffwechsel', 'Aerob / Anaerob', 'Mit / ohne ausreichend O₂'],
            ['Nach Belastungsdauer', 'Kurzeit (< 2 min) / Mittelzeit (2–8 min) / Langzeit (> 8 min)', 'Bestimmt dominantes Energiesystem'],
            ['Nach Sportart', 'Grundlagenausdauer / Spezifische Ausdauer', 'Allgemein vs. sportartspezifisch'],
            ['Nach Dynamik', 'Dynamisch / Statisch', 'Bewegt / haltend'],
          ],
          highlight: [2],
        })}
        ${renderInfobox({
          icon: 'fas fa-layer-group', title: 'Grundlagenausdauer (GA)',
          body: `Die GA ist die <strong>allgemeine aerobe Ausdauer</strong> — Basis für alle Sportarten.<br>
                 <strong>Bedeutung:</strong> Höheres Leistungsniveau in Belastungssituationen; 
                 schnellere Regeneration; Grundlage für intensiveres Training; 
                 Gesundheitserhaltung (Herz-Kreislauf, Stoffwechsel).<br>
                 <strong>Messbar</strong> durch: VO₂max, Laktat-Schwelle, Cooper-Test.`,
        })}
        ${renderTable({
          headers: ['Ausdauertyp', 'Dauer', 'Energie', 'Beispiel-Sportart'],
          rows: [
            ['Kurzzeitausdauer (KZA)', '45 s – 2 min', 'Anaerob-laktazid dominant', '400 m, 800 m, 200 m Schwimmen'],
            ['Mittelzeitausdauer (MZA)', '2 – 8 min', 'Aerob-anaerob gemischt', '1500 m, 3000 m, 400 m Schwimmen'],
            ['Langzeitausdauer I (LZA I)', '8 – 30 min', 'Aerob dominant (KH)', '10 km, Crosslauf'],
            ['Langzeitausdauer II (LZA II)', '30 – 90 min', 'Aerob (KH + Fett)', 'Halbmarathon, Radrennen'],
            ['Langzeitausdauer III (LZA III)', '> 90 min', 'Aerob (primär Fett)', 'Marathon, Triathlon, Ultraläufe'],
          ],
          highlight: [4],
        })}
      </div>
    `;
  }

  _panelAnpassungen() {
    return `
      <div class="wim-category hidden" data-wim-cat="anpassungen">
        <h2 class="lz-h2">Anpassungen durch Ausdauertraining</h2>
        
        <h3 class="lz-h3">Muskelzelle</h3>
        ${renderMerkboxGrid([
          { icon: 'fas fa-circle-dot', title: 'Mitochondrien ↑', text: 'Anzahl und Größe steigen → mehr aerobe ATP-Kapazität.' },
          { icon: 'fas fa-droplet',    title: 'Kapillarisierung ↑', text: 'Mehr Kapillaren pro Muskelfaser → bessere O₂-Versorgung.' },
          { icon: 'fas fa-flask',      title: 'Oxidative Enzyme ↑', text: 'Succinatdehydrogenase, Citratsynthase etc. werden hochreguliert.' },
          { icon: 'fas fa-database',   title: 'Glykogenspeicher ↑', text: 'Muskuläre Glykogenkapazität steigt um 20–50 %.' },
          { icon: 'fas fa-dna',        title: 'Myoglobin ↑', text: 'Sauerstoffspeicherprotein in der Muskelzelle nimmt zu.' },
          { icon: 'fas fa-arrows-turn-to-dots', title: 'Fasertyp-Shift', text: 'Typ IIx → Typ IIa (oxidativere Eigenschaften bei Ausdauertraining).' },
        ])}

        <h3 class="lz-h3" style="margin-top:1.5rem;">Herz-Kreislauf</h3>
        ${renderTable({
          headers: ['Parameter', 'Veränderung', 'Bedeutung'],
          rows: [
            ['Herzvolumen', '↑ 10–25 % (exzentrische Hypertrophie)', 'Größere Kammern → höheres SV'],
            ['Schlagvolumen (Ruhe)', '↑ 90–120 ml (vs. 70–80 ml)', 'Weniger Schläge nötig für gleiches HZV'],
            ['Ruheherzfrequenz', '↓ 40–55 S/min (vs. 70–80 S/min)', 'Ökonomisierung — Sportlerherz'],
            ['HZV (maximal)', '↑ 30–40 l/min (vs. ~20 l/min)', 'Höhere O₂-Transportkapazität'],
            ['Blutvolumen', '↑ 10–15 %', 'Mehr Plasma + Erythrozyten'],
            ['Kapillardichte', '↑ in Arbeitsmuskulatur', 'Bessere Diffusion, kürzere Diffusionswege'],
          ],
          highlight: [2],
        })}
      </div>
    `;
  }

  _panelDauermethode() {
    return `
      <div class="wim-category hidden" data-wim-cat="dauermethode">
        <h2 class="lz-h2">Trainingsmethoden: Dauermethoden</h2>
        
        <h3 class="lz-h3">Extensive Dauermethode</h3>
        ${renderTable({
          headers: ['Parameter', 'Wert'],
          rows: [
            ['Intensität', '60–75 % HFmax · unter aerober Schwelle (< 2 mmol/l Laktat)'],
            ['Dauer', '45–120 min (GA1-Bereich)'],
            ['Umfang', 'Mittel bis hoch'],
            ['Pausen', 'Keine'],
            ['Ziel', 'Grundlagenausdauer, Fettstoffwechsel, Regeneration, Erholung'],
          ],
        })}
        ${renderInfobox({
          type: 'tip', icon: 'fas fa-lightbulb', title: 'Anwendung',
          body: `Ideal als <strong>Regenerationseinheit</strong> und Fettstoffwechseltraining. 
                 Sprachtests möglich (Talk-Test): Man sollte sich während des Laufens 
                 noch in vollständigen Sätzen unterhalten können.`,
        })}

        <h3 class="lz-h3" style="margin-top:1.5rem;">Intensive Dauermethode</h3>
        ${renderTable({
          headers: ['Parameter', 'Wert'],
          rows: [
            ['Intensität', '75–90 % HFmax · zwischen aeroben und anaeroben Schwelle (2–4 mmol/l)'],
            ['Dauer', '20–60 min (GA2/Tempodauerlauf)'],
            ['Umfang', 'Mittel'],
            ['Pausen', 'Keine'],
            ['Ziel', 'Aerobe Kapazität, Schwelle anheben, Wettkampfvorbereitung'],
          ],
        })}
        ${renderInfobox({
          icon: 'fas fa-fire', title: 'Tempodauerlauf',
          body: `Klassische Methode zur Verbesserung der <strong>Wettkampfausdauer</strong>. 
                 Intensität ~10–15 s/km unter Wettkampftempo. 
                 Höchster Trainingsreiz unter den Dauermethoden.`,
        })}

        <h3 class="lz-h3" style="margin-top:1.5rem;">Tempowechsel & Fahrtspiel</h3>
        ${renderCompare({
          titleA: 'Tempowechselmethode', titleB: 'Fahrtspiel (Fartlek)',
          listA: [
            'Planmäßige Intensitätswechsel',
            'Vordefinierte Zeitintervalle',
            'z. B. 5 min GA1 / 3 min GA2 / 2 min WSA',
            'Systematisch, kontrollierbar',
          ],
          listB: [
            'Spontane, spielerische Tempowechsel',
            'Nach Gelände, Gefühl oder Musik',
            'Schwedische Ursprünge (Gosta Holmér)',
            'Motivierend, abwechslungsreich',
          ],
        })}
      </div>
    `;
  }

  _panelIntervall() {
    return `
      <div class="wim-category hidden" data-wim-cat="intervall">
        <h2 class="lz-h2">Trainingsmethoden: Intervallmethoden</h2>
        ${renderInfobox({
          icon: 'fas fa-arrows-left-right', title: 'Grundprinzip der Intervallmethode',
          body: `Belastung und <strong>aktive Pause</strong> wechseln sich ab. 
                 Entscheidend: Die Pause ist <em>unvollständig</em> — der nächste Reiz erfolgt, 
                 bevor der Körper vollständig erholt ist. Dies erzeugt kumulative Ermüdung 
                 und einen stärkeren Trainingsreiz als die Dauermethode.`,
        })}
        ${renderTable({
          headers: ['Methode', 'Intensität', 'Dauer Belastung', 'Pausen', 'WH', 'Ziel'],
          rows: [
            ['Extensive Intervallmethode', '60–80 % HFmax', '1–3 min', 'Unvollst. (45 s–2 min)', '10–20', 'GA, aerobe Kapazität'],
            ['Intensive Intervallmethode', '80–95 % HFmax', '30 s–2 min', 'Unvollst. (1–3 min)', '4–10', 'VO₂max, anaerobe Schwelle'],
            ['HIIT (High Intensity)', '90–100 % HFmax', '10–60 s', 'Kurz (10–60 s)', '6–12', 'VO₂max, EPOC, Fettabbau'],
            ['Tabata', '~170 % VO₂max', '20 s', '10 s', '8 pro Runde', 'Maximale Ausdauerkapazität'],
          ],
          highlight: [2],
        })}
        ${renderInfobox({
          icon: 'fas fa-stopwatch', title: 'Wiederholungsmethode (≠ Intervall)',
          body: `Vollständige Erholung zwischen den Belastungen (Puls < 100 S/min). 
                 Daher: Gleiche Qualität bei jeder Wiederholung. 
                 Einsatz: Techniktraining, Schnelligkeit, Maximalkraft. 
                 <strong>Nicht für Ausdauerentwicklung geeignet</strong> — Intensität pro Wiederholung zu hoch, 
                 Gesamtvolumen zu gering.`,
        })}
        ${renderAccordion([
          {
            title: 'HIIT — wissenschaftliche Evidenz',
            content: `Studien zeigen: <strong>HIIT verbessert VO₂max</strong> genauso effektiv oder besser 
                       als Dauermethoden — in deutlich kürzerer Zeit. 
                       Nachbrenneffekt (EPOC) erhöht Kalorienverbrauch bis 24 h nach Training. 
                       Aber: Hohe Belastung für Gelenke, Sehnen, ZNS → max. 2–3×/Woche.`,
          },
          {
            title: 'Belastungs-Pausen-Verhältnis',
            content: `<strong>Extensiv:</strong> 1:1 bis 1:2 (Belastung : Pause)<br>
                       <strong>Intensiv:</strong> 1:2 bis 1:3<br>
                       <strong>Wiederholungsmethode:</strong> 1:5 bis 1:10<br>
                       Das Verhältnis bestimmt, wie vollständig die Erholung ist und 
                       welches Energiesystem dominiert.`,
          },
        ])}
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