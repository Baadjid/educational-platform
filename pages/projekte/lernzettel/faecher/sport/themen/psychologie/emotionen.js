// pages/projekte/lernzettel/faecher/sport/themen/psychologie/emotionen.js
// Psychologie & Gesellschaft 5.2 — Emotionen, Stress & Aggression

import { initScrollReveal }  from '../../../../../../../shared/js/index.js';
import { footerHTML }         from '../../../../../../../components/Footer.js';
import { i18n }               from '../../../../../../../shared/js/i18n.js';
import { initWimTabs }       from '../../../../../../../shared/js/wim-tabs.js';
import {
  ensureComponentsCSS, renderSubhead, renderTags, renderInfobox,
  renderTable, renderTabs, renderAccordion, renderMerkboxGrid,
  renderCompare, initInteractive,
} from '../../../../js/components/components.js';
import { renderPageNav } from '../../../../js/components/subnav.js';

import { COLOR, COLOR_RGB, BASE } from '../../sport.js';

// ─── WIM-Tab-Daten ───────────────────────────────────────────────
const EMOTIONEN_TABS = [
  { key: 'emotionen', label: '😤 Emotionen & Arousal' },
  { key: 'stress',    label: '😰 Stress' },
  { key: 'aggression', label: '😡 Aggression' },
];

export default class SportEmotionenPage {
  constructor(router) { this.router = router; }
  render() {
    ensureComponentsCSS();
    const el = document.createElement('div');
    el.className = 'page page-sport-sub';
    if (!document.querySelector('link[href*="sub.css"]')) {
      const l = document.createElement('link'); l.rel = 'stylesheet';
      l.href = 'pages/projekte/lernzettel/styles/sub.css'; document.head.appendChild(l);
    }
    el.style.setProperty('--kap-color', COLOR); el.style.setProperty('--kap-color-rgb', COLOR_RGB);
    el.style.setProperty('--lz-accent', COLOR); el.style.setProperty('--lz-accent-rgb', COLOR_RGB);
    el.innerHTML = this._html(); return el;
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
            <span>5.2 · Emotionen, Stress & Aggression</span>
          </nav>
          <h1 class="lz-sub-title">Emotionen, Stress & <em>Aggression.</em></h1>
          <p class="lz-sub-desc">
            Emotionen im Sport, Stress und Stressbewältigung, aggressives Verhalten 
            und die wichtigsten Aggressionstheorien.
          </p>
          ${renderTags(['Psychologie', '5.2', 'Stress', 'Aggression', 'Frustration', 'Arousal'])}
        </div>
      </section>

      <section class="lz-content-section">
        <div class="lz-section-wrap">

          <nav class="wim-tabs" id="emotionenTabs" aria-label="Emotionen, Stress & Aggression">
            ${EMOTIONEN_TABS.map((t, i) => `
              <button class="wim-tab${i === 0 ? ' active' : ''}" data-wim="${t.key}">
                ${t.label}
              </button>`).join('')}
          </nav>

          ${this._panelEmotionen()}
          ${this._panelStress()}
          ${this._panelAggression()}

        </div>
      </section>

      <section class="lz-content-section" style="padding-top:0;">
        <div class="lz-section-wrap">
          ${renderPageNav({
            prev: { link: `${BASE}/themen/psychologie/motivation`,   label: 'Motivation' },
            next: { link: `${BASE}/themen/psychologie/regeln`,     label: 'Regeln im Sport' },
          }, BASE)}
        </div>
      </section>

      ${footerHTML(this.router)}
    `;
  }

  _panelEmotionen() {
    return `
      <div class="wim-category" data-wim-cat="emotionen">
        <h2 class="lz-h2">Emotionen im Sport</h2>
        ${renderInfobox({
          icon: 'fas fa-face-smile', title: 'Emotionen im Sport',
          body: `Emotionen beeinflussen Leistung, Motivation und Verhalten im Sport direkt. 
                 Positive Emotionen (Freude, Stolz) fördern Engagement; 
                 negative (Angst, Scham) können hemmen oder mobilisieren.`,
        })}
        ${renderTable({
          headers: ['Konzept', 'Beschreibung', 'Optimal', 'Zu niedrig / hoch'],
          rows: [
            ['Arousal (Aktivierung)', 'Allgemeines Erregungsniveau (physiologisch + kognitiv)', 'Sportartspezifisch optimal', 'Zu niedrig: Apathie; zu hoch: Verkrampfung'],
            ['Zustandsangst', 'Aktueller Angstzustand vor/während Wettkampf', 'Leichte Anspannung förderlich', 'Zu hoch → Leistungseinbußen'],
            ['Eigenschaftsangst', 'Stabile Persönlichkeitseigenschaft', '—', 'Hohe EA → häufige Zustandsangst'],
          ],
        })}
        ${renderAccordion([
          {
            title: 'Yerkes-Dodson-Gesetz (Umgekehrte U-Kurve)',
            content: `<strong>Aussage:</strong> Es gibt ein optimales Aktivierungsniveau für maximale Leistung.<br>
                       Zu niedrige Aktivierung → Untermotivation, Konzentrationsmangel.<br>
                       Optimales Niveau → beste Leistung (individuelle Zone of Optimal Functioning, ZOF).<br>
                       Zu hohe Aktivierung → Angst, Verkrampfung, Fehler.<br><br>
                       <strong>Sportartspezifisch:</strong> Präzisionssportarten (Schießen, Bogenschießen) 
                       → niedriger optimal. Kraftsport, Sprint → höher optimal.`,
          },
          {
            title: 'Catastrophe Theory (Hardy)',
            content: `Wenn kognitive Angst hoch ist, kann ein Anstieg der körperlichen Aktivierung 
                       zu einem <strong>katastrophalen Leistungseinbruch</strong> führen (nicht graduell). 
                       Erholung erfordert starke Aktivierungsreduktion — 
                       relevanter für Sportler mit Wettkampfangst.`,
          },
        ])}
      </div>
    `;
  }

  _panelStress() {
    return `
      <div class="wim-category hidden" data-wim-cat="stress">
        <h2 class="lz-h2">Stress im Sport</h2>
        ${renderInfobox({
          icon: 'fas fa-brain', title: 'Lazarus — transaktionales Stressmodell',
          body: `<strong>Primäre Bewertung:</strong> Ist die Situation bedrohlich? (Bedrohung / Herausforderung / irrelevant)<br>
                 <strong>Sekundäre Bewertung:</strong> Habe ich Ressourcen zur Bewältigung?<br>
                 <strong>Coping:</strong> problemorientiert (Situation verändern) oder 
                 emotionsorientiert (Reaktion regulieren).<br>
                 Stress entsteht, wenn Anforderung > wahrgenommene Ressourcen.`,
        })}
        ${renderCompare({
          titleA: 'Eustress (positiver Stress)', titleB: 'Distress (negativer Stress)',
          listA: [
            'Herausforderung ist handhabbar',
            'Aktiviert und motiviert',
            'Leistungsfördernd',
            'Wettkampfvorfreude, Flow',
          ],
          listB: [
            'Anforderung übersteigt Ressourcen',
            'Lähmend, deaktivierend',
            'Leistungshemmend',
            'Versagensangst, Burnout',
          ],
        })}
      </div>
    `;
  }

  _panelAggression() {
    return `
      <div class="wim-category hidden" data-wim-cat="aggression">
        <h2 class="lz-h2">Aggression im Sport</h2>
        ${renderTable({
          headers: ['Begriff', 'Definition', 'Beispiel'],
          rows: [
            ['Feindseelige Aggression', 'Ziel: Schaden zufügen', 'Absichtliches Foulspiel aus Wut'],
            ['Instrumentelle Aggression', 'Aggression als Mittel zum sportlichen Zweck', 'Hartes, aber faires Zweikampfverhalten'],
            ['Assertivität', 'Energisches, entschlossenes Auftreten OHNE Schädigungsabsicht', 'Kampfbetontes, aber regelkonformes Spiel'],
          ],
          highlight: [2],
        })}
        ${renderAccordion([
          {
            title: 'Frustrations-Aggressions-Theorie (Dollard et al.)',
            content: `<strong>Kernthese:</strong> Frustration führt immer zu Aggression; 
                       Aggression ist immer Folge von Frustration.<br><br>
                       <strong>Im Sport:</strong> Niederlage, Schiedsrichterentscheid, 
                       Gegnerverhalten → Frustration → aggressive Reaktion.<br><br>
                       <strong>Kritik:</strong> Zu vereinfachend — Frustration führt nicht immer zu Aggression 
                       (Berkowitz Revision: nur wenn aggressiver Hinweisreiz vorhanden).`,
          },
          {
            title: 'Lerntheorie der Aggression (Bandura)',
            content: `<strong>Kernthese:</strong> Aggression wird erlernt — durch Beobachtung 
                       und Imitation (Modelllernen) sowie durch Verstärkung.<br><br>
                       <strong>Im Sport:</strong> Aggressive Vorbilder (Star-Spieler foult absichtlich) → 
                       junge Sportler imitieren das Verhalten.<br>
                       Aggression die erfolgreich ist (Foul verhindert Tor) → wird verstärkt → 
                       Wiederholungswahrscheinlichkeit ↑.<br><br>
                       <strong>Konsequenz:</strong> Vorbildfunktion von Trainern und Athleten zentral.`,
          },
          {
            title: 'Katharsis-Hypothese (und ihre Widerlegung)',
            content: `<strong>These:</strong> Sport baut Aggressionen ab (Triebentladung nach Freud).<br><br>
                       <strong>Empirische Befunde:</strong> Die Katharsis-Hypothese ist weitgehend <strong>widerlegt</strong>. 
                       Aggressiver Sport erhöht eher das Aggressionsniveau als es zu senken 
                       (Zillmann: Erregungsübertragung).<br>
                       Ausnahme: Entspannende, nicht-kompetitive Aktivitäten können Stressniveau senken.`,
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