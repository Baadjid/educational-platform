// pages/projekte/lernzettel/faecher/sport/themen/bewegungslehre/physik.js
// Bewegungslehre 3.2 — Physikalische Gesetzmäßigkeiten

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
const PHYSIK_TABS = [
  { key: 'newton',  label: '⚖️ Newton' },
  { key: 'impuls',  label: '💥 Impuls' },
  { key: 'rotation', label: '🔄 Rotation' },
];

export default class SportPhysikPage {
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
            <span>3.2 · Physikalische Gesetzmäßigkeiten</span>
          </nav>
          <h1 class="lz-sub-title">Physikalische <em>Gesetzmäßigkeiten.</em></h1>
          <p class="lz-sub-desc">
            Newtonsche Gesetze, Impuls und Kraftstoß, Translation und Rotation —
            die mechanischen Grundlagen sportlicher Bewegungen.
          </p>
          ${renderTags(['Bewegungslehre', '3.2', 'Newton', 'Impuls', 'Rotation', 'Trägheit'])}
        </div>
      </section>

      <section class="lz-content-section">
        <div class="lz-section-wrap">

          <nav class="wim-tabs" id="physikTabs" aria-label="Physikalische Gesetzmäßigkeiten">
            ${PHYSIK_TABS.map((t, i) => `
              <button class="wim-tab${i === 0 ? ' active' : ''}" data-wim="${t.key}">
                ${t.label}
              </button>`).join('')}
          </nav>

          ${this._panelNewton()}
          ${this._panelImpuls()}
          ${this._panelRotation()}

        </div>
      </section>

     <section class="lz-content-section" style="padding-top:0;">
        <div class="lz-section-wrap">
          ${renderPageNav({
            prev: { link: `${BASE}/themen/bewegungslehre/grundlagen`,   label: 'Grundlagen' },
            next: { link: `${BASE}/themen/bewegungslehre/kraft-zeit-diagramme`,     label: 'Kraft-Zeit-Diagramme' },
          }, BASE)}
        </div>
      </section>

      ${footerHTML(this.router)}
    `;
  }

  _panelNewton() {
    return `
      <div class="wim-category" data-wim-cat="newton">
        <h2 class="lz-h2">Newtonsche Gesetze im Sport</h2>
        ${renderAccordion([
          {
            title: '1. Trägheitsgesetz (Lex Prima)',
            content: `<strong>Aussage:</strong> Ein Körper verharrt im Zustand der Ruhe oder gleichförmigen 
                       geradlinigen Bewegung, solange keine äußere Kraft auf ihn einwirkt.<br><br>
                       <strong>Sportliche Relevanz:</strong><br>
                       • Einen rollenden Ball stoppt nur eine Gegenkraft (Bremsen, Fangen).<br>
                       • Beim Bremsschritt im Basketball muss die Trägheit durch Muskelkraft überwunden werden.<br>
                       • Kopf-Hals-Beschleunigungstrauma: Kopf „bleibt zurück" bei plötzlicher Körperbewegung.`,
          },
          {
            title: '2. Aktionsgesetz / Grundgesetz der Mechanik (Lex Secunda)',
            content: `<strong>Formel:</strong> F = m × a (Kraft = Masse × Beschleunigung)<br><br>
                       <strong>Umgestellt:</strong> a = F / m → Größere Kraft oder kleinere Masse = höhere Beschleunigung.<br><br>
                       <strong>Sportliche Relevanz:</strong><br>
                       • Kugelstoßen: Mehr Kraft → weiter gestoßene Kugel (gleiche Masse).<br>
                       • Leichter Rennradfahrer hat bei gleicher Kraft mehr Beschleunigung.<br>
                       • Kraftkurve beim Sprungabdruck → höhere Abfluggeschwindigkeit.`,
          },
          {
            title: '3. Reaktionsgesetz (Lex Tertia) — Actio = Reactio',
            content: `<strong>Aussage:</strong> Jede Kraft (Actio) erzeugt eine gleich große, 
                       entgegengesetzte Gegenkraft (Reactio).<br><br>
                       <strong>Sportliche Relevanz:</strong><br>
                       • <strong>Abdruckkraft:</strong> Fuß drückt auf Boden → Boden drückt zurück → Körper beschleunigt aufwärts.<br>
                       • <strong>Paddeln:</strong> Paddel drückt Wasser nach hinten → Boot fährt nach vorne.<br>
                       • <strong>Bodenreaktionskraft (GRF):</strong> Gemessen mit Kraftmessplatten — entscheidend für Ganganalyse.`,
          },
        ])}
        ${renderTable({
          headers: ['Gesetz', 'Formel / Prinzip', 'Sportbeispiel'],
          rows: [
            ['Trägheitsgesetz', 'Kein ΔBewegung ohne Kraft', 'Rollender Ball, Körper im Freiflug'],
            ['F = m × a', 'Kraft = Masse × Beschleunigung', 'Sprung, Wurf, Sprint-Start'],
            ['Actio = Reactio', 'F₁₂ = −F₂₁', 'Abdruckkraft, Schwimmstoß, Stabhochsprung'],
          ],
          highlight: [1],
        })}
      </div>
    `;
  }

  _panelImpuls() {
    return `
      <div class="wim-category hidden" data-wim-cat="impuls">
        <h2 class="lz-h2">Impuls, Kraftstoß und Impulsübertragung</h2>
        ${renderFormulaBox({
          label: 'Impuls',
          formula: 'p = m × v',
          desc: 'p = Impuls [kg·m/s] · m = Masse [kg] · v = Geschwindigkeit [m/s]',
        })}
        ${renderFormulaBox({
          label: 'Kraftstoß',
          formula: 'J = F × Δt = Δp = m × Δv',
          desc: 'J = Kraftstoß [N·s] · F = Kraft [N] · Δt = Zeitdauer · Δp = Impulsänderung',
        })}
        ${renderInfobox({
          icon: 'fas fa-hand-fist', title: 'Impulsübertragung im Sport',
          body: `<strong>Prinzip:</strong> Um einem Körper (Ball, Wurfobjekt, Gegner) einen möglichst 
                 großen Impuls zu geben, muss entweder die Kraft <em>oder</em> die Einwirkzeit maximiert werden.<br><br>
                 <strong>Technik „Follow-through":</strong> Beim Golf, Tennis, Fußball verlängert das 
                 Durchschwingen (follow-through) die Einwirkzeit Δt → größerer Kraftstoß → mehr Impuls auf Ball.`,
        })}
        ${renderTable({
          headers: ['Anwendung', 'Ziel', 'Mechanismus'],
          rows: [
            ['Fangen eines schnellen Balls', 'Kraft reduzieren', 'Δt ↑ durch Zurückziehen der Hände → F ↓ (gleicher Impuls)'],
            ['Abfangen eines Sturzes (Judorolle)', 'Aufprallkraft verringern', 'Kontaktfläche + Δt ↑ → F ↓'],
            ['Wurfanlauf (Speer)', 'Impuls auf Wurfgerät maximieren', 'v ↑ des Körpers vor Abwurf'],
            ['Prellen beim Basketball', 'Kontrollierte Impulsübertragung', 'F × Δt = konstant → kontrollierter Rückprall'],
          ],
        })}
      </div>
    `;
  }

  _panelRotation() {
    return `
      <div class="wim-category hidden" data-wim-cat="rotation">
        <h2 class="lz-h2">Translation und Rotation</h2>
        ${renderCompare({
          titleA: 'Translation (Geradlinige Bewegung)',
          titleB: 'Rotation (Drehbewegung)',
          listA: [
            'Alle Körperpunkte bewegen sich parallel',
            'Beschrieben durch: s, v, a, F',
            'F = m × a',
            'p = m × v',
            'Wk = ½ × m × v²',
          ],
          listB: [
            'Körperpunkte drehen um Achse',
            'Beschrieben durch: φ, ω, α, M',
            'M = I × α (Drehmoment)',
            'L = I × ω (Drehimpuls)',
            'Wrot = ½ × I × ω²',
          ],
        })}
        ${renderTable({
          headers: ['Rotationsgröße', 'Symbol', 'Einheit', 'Analogon Translation'],
          rows: [
            ['Winkel', 'φ (phi)', 'rad', 'Weg s'],
            ['Winkelgeschwindigkeit', 'ω (omega)', 'rad/s', 'Geschwindigkeit v'],
            ['Winkelbeschleunigung', 'α (alpha)', 'rad/s²', 'Beschleunigung a'],
            ['Drehmoment', 'M', 'N·m', 'Kraft F'],
            ['Massenträgheitsmoment', 'I', 'kg·m²', 'Masse m'],
            ['Drehimpuls', 'L = I × ω', 'kg·m²/s', 'Impuls p'],
          ],
          highlight: [4],
        })}
        ${renderFormulaBox({
          label: 'Massenträgheitsmoment',
          formula: 'I = m × r²  (Punktmasse)',
          desc: 'r = Abstand der Masse von der Drehachse. Je weiter die Masse von der Achse entfernt, desto größer I.',
        })}
        ${renderAccordion([
          {
            title: 'Erhaltung des Drehimpulses — Pirouette & Eiskunstlauf',
            content: `<strong>Prinzip:</strong> Ohne äußeres Drehmoment bleibt L = I × ω = konstant.<br><br>
                       <strong>Wenn I abnimmt</strong> (Arme an den Körper ziehen → r ↓ → I ↓), 
                       <strong>dann muss ω zunehmen</strong> → schnellere Rotation.<br><br>
                       Eiskunstläufer ziehen beim Pirouettenstart die Arme an → 
                       von ~1 Umdrehung/s auf ~5–6 Umdrehungen/s möglich!`,
          },
          {
            title: 'Drehmoment im Sport',
            content: `<strong>M = F × r</strong> (Kraft × Hebelarm)<br><br>
                       Größeres Drehmoment durch:<br>
                       • Größere Kraft F (Muskelkraft)<br>
                       • Längeren Hebelarm r (z. B. ausgestreckter Arm beim Tennis)<br><br>
                       <strong>Beispiele:</strong><br>
                       • Schlagbewegung Tennis: langer Arm = großes M auf Schläger → höhere Schlagkraft.<br>
                       • Kniebeuge: Kniemoment = Gewicht × horizontaler Abstand Knie-Schwerlot.`,
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