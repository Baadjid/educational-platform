// pages/projekte/lernzettel/faecher/sport/themen/gesundheit/gesundheitsbegriff.js
// Sport & Gesundheit 4.1 — Gesundheitsbegriff

import { initScrollReveal }  from '../../../../../../../shared/js/index.js';
import { footerHTML }         from '../../../../../../../components/Footer.js';
import { i18n }               from '../../../../../../../shared/js/i18n.js';
import { initWimTabs }       from '../../../../../../../shared/js/wim-tabs.js';
import {
  ensureComponentsCSS,
  renderSubhead, renderTags, renderInfobox, renderTable,
  renderTabs, renderAccordion, renderMerkboxGrid, renderCompare,
  initInteractive,
} from '../../../../js/components/components.js';
import { renderPageNav } from '../../../../js/components/subnav.js';

import { COLOR, COLOR_RGB, BASE } from '../../sport.js';

// ─── WIM-Tab-Daten für Gesundheitsbegriff ───────────────────────────────
const GESUNDHEIT_TABS = [
  { key: 'vergleich',   label: '⚖️ Modelle im Vergleich' },
  { key: 'risiko',      label: '⚠️ Risikofaktorenmodell' },
  { key: 'salutogenese', label: '💚 Salutogenese' },
];

export default class SportGesundheitsbegriffPage {
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
            <span>4.1 · Gesundheitsbegriff</span>
          </nav>
          <h1 class="lz-sub-title">Gesundheits-<em>begriff.</em></h1>
          <p class="lz-sub-desc">
            Risikofaktorenmodell und Salutogenesemodell — zwei grundlegend 
            verschiedene Perspektiven auf Gesundheit im Sport.
          </p>
          ${renderTags(['Sport & Gesundheit', '4.1', 'Salutogenese', 'Risikofaktoren', 'WHO', 'Antonovsky'])}
        </div>
      </section>

      <section class="lz-content-section">
        <div class="lz-section-wrap">

          ${renderSubhead('Gesundheitsmodelle im Vergleich')}
          <h2 class="lz-h2 reveal">Zwei grundlegende Perspektiven</h2>

          <!-- WIM-Tabs Navigation -->
          <nav class="wim-tabs" id="gesundheitTabs" aria-label="Gesundheitsmodelle Kategorien">
            ${GESUNDHEIT_TABS.map((t, i) => `
              <button class="wim-tab${i === 0 ? ' active' : ''}" data-wim="${t.key}">
                ${t.label}
              </button>`).join('')}
          </nav>

          <!-- Panel 1: Vergleich -->
          ${this._panelVergleich()}

          <!-- Panel 2: Risikofaktorenmodell -->
          ${this._panelRisiko()}

          <!-- Panel 3: Salutogenese -->
          ${this._panelSalutogenese()}

        </div>
      </section>

      <section class="lz-content-section" style="padding-top:0;">
        <div class="lz-section-wrap">
        ${renderPageNav({
          prev: { link: `${BASE}/themen/bewegungslehre/phasenmodelle`,   label: 'Phasenmodelle' },
          next: { link: `${BASE}/themen/gesundheit/verletzungen`,     label: 'Verletzungen' },
        }, BASE)}
          </div>
      </section>

      ${footerHTML(this.router)}
    `;
  }

  // ═══════════════════════════════════════════════════════════════
  // WIM-PANELS
  // ═══════════════════════════════════════════════════════════════

  _panelVergleich() {
    return `
      <div class="wim-category" data-wim-cat="vergleich">
        <h3 class="lz-h3">Modelle im direkten Vergleich</h3>
        ${renderInfobox({
          icon: 'fas fa-notes-medical', title: 'WHO-Definition Gesundheit (1948)',
          body: `„Gesundheit ist ein Zustand vollständigen körperlichen, geistigen und sozialen 
                 Wohlbefindens und nicht nur das Freisein von Krankheit oder Gebrechen."<br><br>
                 <strong>Kritik:</strong> Utopisch, statisch, kaum erreichbar. 
                 Neuere Konzepte betonen <em>Handlungsfähigkeit</em> und <em>Ressourcen</em>.`,
        })}
        ${renderCompare({
          titleA: 'Risikofaktorenmodell (pathogenetisch)',
          titleB: 'Salutogenesemodell (salutogenetisch)',
          listA: [
            'Fragt: Was macht krank?',
            'Fokus: Risikofaktoren eliminieren',
            'Gesundheit = Abwesenheit von Krankheit',
            'Medizinisches, kurative Perspektive',
            'Beispiel: Rauchen → Krebs verhindern',
          ],
          listB: [
            'Fragt: Was erhält gesund?',
            'Fokus: Schutzfaktoren stärken',
            'Gesundheit auf einem Kontinuum',
            'Ressourcenorientierte Perspektive',
            'Beispiel: Kohärenzgefühl stärken',
          ],
        })}
      </div>
    `;
  }

  _panelRisiko() {
    return `
      <div class="wim-category hidden" data-wim-cat="risiko">
        <h3 class="lz-h3">Risikofaktorenmodell (pathogenetisch)</h3>
        <p class="lz-prose">Das pathogenetische Modell fragt nach den Ursachen von Krankheit und versucht, Risikofaktoren zu identifizieren und zu eliminieren. Es ist die klassische medizinische Perspektive.</p>
        
        ${renderTable({
          headers: ['Risikofaktoren', 'Kategorie', 'Sport als Gegenmaßnahme'],
          rows: [
            ['Bewegungsmangel', 'Verhaltensbezogen', 'Ausdauer- und Krafttraining'],
            ['Übergewicht (BMI ≥ 25)', 'Verhaltensbezogen', 'Kalorienverbrauch, Muskelmasse'],
            ['Bluthochdruck', 'Physiologisch', 'Ausdauertraining senkt Ruheblutdruck'],
            ['Rauchen', 'Verhaltensbezogen', 'Sport als positiver Gegenpol'],
            ['Stress / psychische Belastung', 'Psychosozial', 'Stressabbau durch Sport'],
            ['Schlechte Ernährung', 'Verhaltensbezogen', 'Bewusstsein für Energiebedarf'],
            ['Genetische Prädisposition', 'Nicht beeinflussbar', 'Präventives Training'],
          ],
          highlight: [0],
        })}
        
        ${renderInfobox({
          type: 'tip', icon: 'fas fa-lightbulb', title: 'Sport als primäre Prävention',
          body: `Regelmäßige körperliche Aktivität reduziert das Risiko für:<br>
                 • Herz-Kreislauf-Erkrankungen (−30–50 %)<br>
                 • Typ-2-Diabetes (−40–60 %)<br>
                 • Bestimmte Krebsarten (−20–30 %)<br>
                 • Depression (−30–40 %)<br>
                 • Osteoporose und Sturzverletzungen`,
        })}
        
        <h4 class="lz-h4" style="margin-top:1.5rem;">Kritik am Risikofaktorenmodell</h4>
        <p class="lz-prose">Das Modell ist defizitorientiert, berücksichtigt wenig psychosoziale Faktoren und erklärt nicht, warum manche Menschen trotz Risikofaktoren gesund bleiben.</p>
      </div>
    `;
  }

  _panelSalutogenese() {
    return `
      <div class="wim-category hidden" data-wim-cat="salutogenese">
        <h3 class="lz-h3">Salutogenesemodell (Aaron Antonovsky)</h3>
        
        ${renderInfobox({
          icon: 'fas fa-seedling', title: 'Grundidee der Salutogenese',
          body: `Aaron Antonovsky (1979) fragte: <strong>Warum bleiben Menschen gesund</strong>, 
                 obwohl sie Belastungen ausgesetzt sind? 
                 Gesundheit und Krankheit bilden ein <strong>Kontinuum</strong> — 
                 niemand ist vollständig gesund oder krank.`,
        })}
        
        ${renderMerkboxGrid([
          { icon: 'fas fa-brain',         title: 'Kohärenzgefühl (SOC)', text: 'Zentrales Konzept — das Gefühl, dass das Leben verstehbar, handhabbar und bedeutsam ist.' },
          { icon: 'fas fa-lightbulb',     title: 'Verstehbarkeit', text: 'Erlebnisse erscheinen geordnet, vorhersehbar, erklärbar — kognitive Komponente.' },
          { icon: 'fas fa-wrench',        title: 'Handhabbarkeit', text: 'Ressourcen (intern + extern) reichen zur Bewältigung — Kontrollüberzeugung.' },
          { icon: 'fas fa-heart',         title: 'Bedeutsamkeit', text: 'Leben erscheint es wert, Energie zu investieren — motivationale Komponente.' },
          { icon: 'fas fa-shield-halved', title: 'GRRs', text: 'Widerstandsressourcen: Soziales Netz, Geld, Wissen, Gesundheit, Spiritualität.' },
          { icon: 'fas fa-arrows-left-right', title: 'Gesundheits-Kontinuum', text: 'Bewegliches Spektrum von krank → gesund. Ziel: Richtung Gesundheitspol bewegen.' },
        ])}
        
        ${renderInfobox({
          icon: 'fas fa-dumbbell', title: 'Sport und Salutogenese',
          body: `Sport stärkt das Kohärenzgefühl:<br>
                 • <strong>Verstehbarkeit:</strong> Trainingswirkungen werden erlebbar erklärt.<br>
                 • <strong>Handhabbarkeit:</strong> Körper ist kontrollierbar, Leistung planbar.<br>
                 • <strong>Bedeutsamkeit:</strong> Sportliche Ziele geben Sinn, Gemeinschaft im Verein.<br><br>
                 Zudem stärkt Sport allgemeine Widerstandsressourcen (Gesundheit, soziale Einbindung).`,
        })}
        
        <h4 class="lz-h4" style="margin-top:1.5rem;">Praxisbeispiel: Sport in der Rehabilitation</h4>
        <p class="lz-prose">Ein salutogenetischer Ansatz in der Sporttherapie fragt nicht nur "Welche Defizite hat der Patient?", sondern "Welche Ressourcen kann der Patient nutzen?" und "Wie kann das Kohärenzgefühl gestärkt werden?"</p>
      </div>
    `;
  }

  // ═══════════════════════════════════════════════════════════════

  init() {
    i18n.init(); 
    initScrollReveal();
    initInteractive(document.querySelector('.page-sport-sub'));
    document.querySelectorAll('[data-nav-link]').forEach(btn => {
      btn.addEventListener('click', () => { 
        window.location.hash = btn.dataset.navLink; 
      });
    });
    // WIM-Tabs initialisieren
    initWimTabs(document);
  }
}