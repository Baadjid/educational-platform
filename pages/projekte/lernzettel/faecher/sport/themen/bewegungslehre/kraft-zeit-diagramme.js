// pages/projekte/lernzettel/faecher/sport/themen/bewegungslehre/kraft-zeit-diagramme.js
// Bewegungslehre 3.3 — Kraft-Zeit-Diagramme

import { initScrollReveal }  from '../../../../../../../shared/js/index.js';
import { footerHTML }         from '../../../../../../../components/Footer.js';
import { i18n }               from '../../../../../../../shared/js/i18n.js';
import { initWimTabs }       from '../../../../../../../shared/js/wim-tabs.js';
import {
  ensureComponentsCSS,
  renderSubhead, renderTags, renderInfobox, renderFormulaBox,
  renderTable, renderTabs, renderAccordion, renderMerkboxGrid,
  initInteractive,
} from '../../../../js/components/components.js';
import { renderPageNav } from '../../../../js/components/subnav.js';

import { COLOR, COLOR_RGB, BASE } from '../../sport.js';

// ─── WIM-Tab-Daten ───────────────────────────────────────────────
const KRAFTZEIT_TABS = [
  { key: 'horizontal', label: '↔️ Horizontale Kraft' },
  { key: 'vertikal',   label: '↕️ Vertikale Kraft' },
];

export default class SportKraftZeitPage {
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
            <span>3.3 · Kraft-Zeit-Diagramme</span>
          </nav>
          <h1 class="lz-sub-title">Kraft-Zeit-<em>Diagramme.</em></h1>
          <p class="lz-sub-desc">
            Horizontale und vertikale Kraftverläufe — Bodenreaktionskräfte beim 
            Springen, Laufen und Landen biomechanisch verstehen und interpretieren.
          </p>
          ${renderTags(['Bewegungslehre', '3.3', 'Kraftmessplatte', 'GRF', 'Bodenreaktionskraft', 'RFD'])}
        </div>
      </section>

      <section class="lz-content-section">
        <div class="lz-section-wrap">

          ${renderInfobox({
            icon: 'fas fa-chart-line', title: 'Was sind Kraft-Zeit-Diagramme?',
            body: `Kraft-Zeit-Diagramme zeigen den zeitlichen Verlauf der <strong>Bodenreaktionskraft (GRF – Ground Reaction Force)</strong> 
                   während sportlicher Bewegungen. Gemessen mit einer <strong>Kraftmessplatte</strong>.<br>
                   Die Fläche unter der Kurve entspricht dem <strong>Kraftstoß J = F × Δt = Δp</strong> — 
                   also der Impulsänderung des Körpers.`,
          })}

          <nav class="wim-tabs" id="kraftzeitTabs" aria-label="Kraft-Zeit-Diagramme">
            ${KRAFTZEIT_TABS.map((t, i) => `
              <button class="wim-tab${i === 0 ? ' active' : ''}" data-wim="${t.key}">
                ${t.label}
              </button>`).join('')}
          </nav>

          ${this._panelHorizontal()}
          ${this._panelVertikal()}

        </div>
      </section>

      <section class="lz-content-section" style="padding-top:0;">
        <div class="lz-section-wrap">
          ${renderPageNav({
            prev: { link: `${BASE}/themen/bewegungslehre/physik`,   label: 'Physikalische Gesetze' },
            next: { link: `${BASE}/themen/bewegungslehre/biomechanik`,     label: 'Biomechanische Prinzipien' },
          }, BASE)}
        </div>
      </section>

      ${footerHTML(this.router)}
    `;
  }

  _panelHorizontal() {
    return `
      <div class="wim-category" data-wim-cat="horizontal">
        <h2 class="lz-h2">Horizontale Kraft-Zeit-Diagramme</h2>
        <p class="lz-prose">
          Horizontale Kräfte entstehen bei Beschleunigungs- und Bremsphasen —
          sie zeigen, ob der Sportler effektiv Kraft in Vorwärts- oder Rückwärtsbewegung umsetzt.
        </p>
        ${renderTable({
          headers: ['Phase', 'Kraftrichtung', 'Bedeutung', 'Sportbeispiel'],
          rows: [
            ['Bremsphase', 'Entgegen Bewegungsrichtung (negativ)', 'Abbremsen der Vorwärtsbewegung — Energieverlust!', 'Fersenaufsatz beim Laufen'],
            ['Übergangsphase', 'Annähernd null', 'Kraftübergabe, kurz', 'Mittelfußaufsatz'],
            ['Antriebsphase', 'In Bewegungsrichtung (positiv)', 'Beschleunigung — Energiegewinn', 'Abdruck beim Laufen/Springen'],
          ],
          highlight: [2],
        })}
        ${renderInfobox({
          type: 'tip', icon: 'fas fa-lightbulb', title: 'Interpretation: Effizienz der Lauftechnik',
          body: `Ein ökonomischer Läufer hat eine <strong>kleine Bremsphase</strong> (geringe negative GRF) 
                 und eine <strong>große Antriebsphase</strong> (große positive GRF).<br>
                 Fersenläufer: Große Bremsphase, hohe Stoßbelastung → Verletzungsrisiko.<br>
                 Vorfußläufer: Geringe Bremsphase, bessere Energierückgewinnung über DVZ.`,
        })}
        ${renderInfobox({
          icon: 'fas fa-arrows-left-right', title: 'Sprint-Start im K-Z-Diagramm',
          body: `In den ersten Schritten dominiert die <strong>Antriebsphase</strong> stark 
                 (großes positives Signal). Mit zunehmender Geschwindigkeit nähern sich 
                 Brems- und Antriebsphase einander an — im Maximalspeed-Laufen sind beide etwa gleich groß 
                 (Geschwindigkeitskonstanz).`,
        })}
      </div>
    `;
  }

  _panelVertikal() {
    return `
      <div class="wim-category hidden" data-wim-cat="vertikal">
        <h2 class="lz-h2">Vertikale Kraft-Zeit-Diagramme</h2>
        <p class="lz-prose">
          Vertikale Kräfte zeigen Abdrucks- und Landungsbelastungen.
          Die Form der Kurve gibt Aufschluss über Technik, Verletzungsrisiko und Effizienz.
        </p>
        ${renderTable({
          headers: ['Merkmal', 'Bedeutung', 'Wert (typisch)'],
          rows: [
            ['Passive Kraftspitze (1. Gipfel)', 'Stoßwelle beim Auftreffen (Ferse) — passiv, unkontrolliert', '1,5–3,0 × Körpergewicht beim Laufen'],
            ['Aktive Kraftspitze (2. Gipfel)', 'Aktive Stützphase durch Muskeln — kontrolliert', '1,2–2,0 × Körpergewicht'],
            ['Kraftminimum (Tal)', 'Entlastungsmoment beim Schwingen des Standbeins', '0,5–0,8 × Körpergewicht'],
            ['Abdruckkraft (Sprung)', 'Aktive Beschleunigung nach oben', '2,5–4,0 × Körpergewicht'],
            ['Landeverzögerungskraft', 'Kraft beim Aufprall nach Sprung', '3,0–8,0 × Körpergewicht (je nach Technik)'],
          ],
          highlight: [4],
        })}
        ${renderInfobox({
          type: 'warning', icon: 'fas fa-triangle-exclamation', title: 'Verletzungsrisiko durch passive Kraftspitze',
          body: `Die <strong>passive Kraftspitze</strong> (impact peak) beim Fersenaufsatz entsteht sehr schnell 
                 (<20 ms) — zu schnell für reflexive Muskelabfederung. 
                 Hohe passive Spitzen korrelieren mit Stressfrakturen, Knieproblemen und Rückenschmerzen.<br>
                 Weicher Untergrund, gedämpfte Schuhe oder Vorfußlauftechnik reduzieren die passive Spitze.`,
        })}
        ${renderAccordion([
          {
            title: 'Sprung-Abdruckkurve — CMJ vs. SJ',
            content: `<strong>Squat Jump (SJ):</strong> Nur eine Kraftspitze (konzentrische Phase). 
                       Kurve steigt schnell an, erreicht Maximum, fällt beim Abheben auf 0.<br><br>
                       <strong>Counter Movement Jump (CMJ):</strong> Kurve zeigt zunächst 
                       <em>Unterschreitung</em> unter Körpergewicht (Einleitung), 
                       dann steil steigenden Peak (höher als SJ!) → DVZ-Effekt sichtbar.<br>
                       Die Differenz CMJ − SJ = Beitrag des elastisch gespeicherten Energie (DVZ).`,
          },
          {
            title: 'Rate of Force Development (RFD)',
            content: `<strong>RFD = ΔF / Δt</strong> — Steilheit der Kraftanstiegskurve.<br>
                       Entscheidend für Schnellkraftleistungen: Je steiler die Kurve ansteigt, 
                       desto schneller wird hohe Kraft erreicht.<br>
                       Training: Plyometrie, Schnellkrafttraining, Explosivkrafttraining steigern die RFD.`,
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