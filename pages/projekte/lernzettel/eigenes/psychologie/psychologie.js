// pages/projekte/lernzettel/eigenes/psychologie/psychologie.js
// Psychologie-Kompendium + Entscheidungsmatrix (Prokrastination)
// WIM-Tabs · Accordions · Dialog-Bubbles · Zitat-Cards · i18n

import { initScrollReveal } from '../../../../../shared/js/index.js';
import { footerHTML } from '../../../../../components/Footer.js';
import { i18n } from '../../../../../shared/js/i18n.js';
import { de, en, ru, es } from './js/translation/translation.js';

// ══════════════════════════════════════════════════════════
// TAB-DEFINITIONEN
// ══════════════════════════════════════════════════════════

const PSYCH_TABS = [
  { id: 'tiefenpsychologie', icon: 'fas fa-couch',         sections: 4 },
  { id: 'behaviorismus',     icon: 'fas fa-bell',          sections: 4 },
  { id: 'kognitive',         icon: 'fas fa-microchip',     sections: 4 },
  { id: 'humanistische',     icon: 'fas fa-seedling',      sections: 4 },
  { id: 'neurowissenschaft', icon: 'fas fa-brain',         sections: 4 },
  { id: 'sozialpsychologie', icon: 'fas fa-users',         sections: 4 },
  { id: 'prokrastination',   icon: 'fas fa-hourglass-half', sections: 0 },
];

// Prokrastinations-Bereiche (17 Kategorien — universell)
const PROKR_AREAS = [
  'bildung', 'morgenroutine', 'mentale_kompetenz', 'beziehungen',
  'hobbys', 'gaming', 'passiver_konsum', 'ernaehrung_zucker',
  'koerperpflege', 'koerperhaltung', 'rhetorik', 'raumordnung',
  'gewohnheiten', 'ernaehrung', 'schlaf', 'smartphone', 'finanzen',
];

// ══════════════════════════════════════════════════════════
// PAGE CLASS
// ══════════════════════════════════════════════════════════

export default class PsychologiePage {
  constructor(router) {
    this.router = router;
    this._activeTab = PSYCH_TABS[0].id;
    this._onTabClick = this._onTabClick.bind(this);
    this._onAccordionClick = this._onAccordionClick.bind(this);
    this._onLangChange = this._onLangChange.bind(this);
    this._resizeHandler = null;
  }

  render() {
    i18n.load({ de, en, ru, es });

    const el = document.createElement('div');
    el.className = 'page page-psychologie';

    if (!document.querySelector('link[href*="psychologie.css"]')) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'pages/projekte/lernzettel/eigenes/psychologie/styles/psychologie.css';
      document.head.appendChild(link);
    }

    el.innerHTML = this._getHTML();
    return el;
  }

  // ── HTML ───────────────────────────────────────────────

  _getHTML() {
    return `
      <!-- HERO -->
      <section class="psy-hero">
        <div class="psy-hero-inner">
          <div class="psy-hero-orb" aria-hidden="true"></div>
          <div class="psy-hero-content">
            <p class="psy-eyebrow">
              <i class="fas fa-brain"></i>
              <span data-i18n="psy.eyebrow">Kompendium · Psychologie</span>
            </p>
            <h1 class="psy-headline">
              <span data-i18n="psy.headline.1">Psychologie verstehen</span><br>
              <em data-i18n="psy.headline.2">Von der Theorie zur Lebenskunst.</em>
            </h1>
            <p class="psy-hero-desc" data-i18n="psy.hero.desc">
              Von Tiefenpsychologie bis Neurowissenschaft — die wichtigsten Perspektiven,
              wie sie zusammenhängen und was sie für den Alltag bedeuten.
            </p>
            <div class="psy-scroll-hint">
              <div class="psy-scroll-mouse"><div class="psy-scroll-wheel"></div></div>
            </div>
          </div>
        </div>
      </section>

      <!-- MAIN CONTENT -->
      <section class="psy-content">
        <div class="psy-content-wrap">

          <!-- WIM-Style Tab Navigation -->
          <nav class="wim-tabs reveal" id="psyTabs" role="tablist">
            ${PSYCH_TABS.map((tab, i) => `
              <button class="wim-tab ${i === 0 ? 'active' : ''}"
                      data-psy-tab="${tab.id}"
                      role="tab"
                      aria-selected="${i === 0}">
                <i class="${tab.icon}"></i>
                <span data-i18n="psy.tab.${tab.id}"></span>
              </button>
            `).join('')}
          </nav>

          <!-- Tab Panels -->
          <div class="psy-panels" id="psyPanels">
            ${PSYCH_TABS.map((tab, i) =>
              tab.id === 'prokrastination'
                ? this._renderProkrastinationPanel(tab, i === 0)
                : this._renderPsychPanel(tab, i === 0)
            ).join('')}
          </div>

        </div>
      </section>

      ${footerHTML(this.router, {
        extraColumn: {
          title: 'Psychologie & Weiterführendes',
          titleI18n: 'psy.footer.extra.title',
          items: [
            { label: 'Stanford Encyclopedia of Philosophy', href: 'https://plato.stanford.edu/entries/psychology/' },
            { label: 'Simply Psychology', href: 'https://www.simplypsychology.org/' },
            { label: 'Zurück zur Übersicht', link: '/projekte/lernzettel', i18n: 'psy.footer.extra.back' },
            { label: 'Portfolio', link: '/portfolio', i18n: 'psy.footer.extra.portfolio' },
          ]
        }
      })}
    `;
  }

  // ── Psychologie-Panel (Quote + Intro + Accordions) ─────

  _renderPsychPanel(tab, isActive) {
    return `
      <div class="psy-panel ${isActive ? 'active' : ''}"
           data-psy-panel="${tab.id}"
           role="tabpanel">

        <!-- Zitat-Card -->
        <div class="psy-quote-card">
          <div class="psy-quote-icon"><i class="fas fa-quote-left"></i></div>
          <blockquote class="psy-quote-text" data-i18n="psy.${tab.id}.quote"></blockquote>
          <cite class="psy-quote-author" data-i18n="psy.${tab.id}.quote.author"></cite>
        </div>

        <!-- Intro -->
        <div class="psy-panel-intro">
          <div class="psy-panel-icon"><i class="${tab.icon}"></i></div>
          <div class="psy-panel-intro-text">
            <h2 data-i18n="psy.${tab.id}.title"></h2>
            <p data-i18n="psy.${tab.id}.intro"></p>
          </div>
        </div>

        <!-- Accordions -->
        <div class="psy-accordions">
          ${Array.from({ length: tab.sections }, (_, i) => `
            <div class="psy-accordion">
              <button class="psy-accordion-head" aria-expanded="false">
                <span class="psy-accordion-num">${String(i + 1).padStart(2, '0')}</span>
                <span class="psy-accordion-title" data-i18n="psy.${tab.id}.sec${i}.title"></span>
                <span class="psy-accordion-chevron"><i class="fas fa-chevron-down"></i></span>
              </button>
              <div class="psy-accordion-body">
                <div class="psy-accordion-content" data-i18n="psy.${tab.id}.sec${i}.text"></div>
              </div>
            </div>
          `).join('')}
        </div>

      </div>
    `;
  }

  // ── Prokrastination-Panel (Dialog-Bubbles) ─────────────

  _renderProkrastinationPanel(tab, isActive) {
    return `
      <div class="psy-panel ${isActive ? 'active' : ''}"
           data-psy-panel="${tab.id}"
           role="tabpanel">

        <!-- Intro-Zitat -->
        <div class="psy-quote-card">
          <div class="psy-quote-icon"><i class="fas fa-quote-left"></i></div>
          <blockquote class="psy-quote-text" data-i18n="psy.prokr.quote"></blockquote>
          <cite class="psy-quote-author" data-i18n="psy.prokr.quote.author"></cite>
        </div>

        <!-- Intro -->
        <div class="psy-panel-intro">
          <div class="psy-panel-icon"><i class="${tab.icon}"></i></div>
          <div class="psy-panel-intro-text">
            <h2 data-i18n="psy.prokr.title"></h2>
            <p data-i18n="psy.prokr.intro"></p>
          </div>
        </div>

        <!-- Dialog-Bubbles pro Bereich -->
        <div class="psy-dialog-list">
          ${PROKR_AREAS.map((area, i) => `
            <div class="psy-dialog-pair" style="animation-delay: ${i * 0.04}s">
              <!-- Frage (links) -->
              <div class="psy-bubble psy-bubble--question">
                <div class="psy-bubble-header">
                  <span class="psy-bubble-num">${String(i + 1).padStart(2, '0')}</span>
                  <span class="psy-bubble-label" data-i18n="psy.prokr.${area}.label"></span>
                </div>
                <p class="psy-bubble-text" data-i18n="psy.prokr.${area}.q"></p>
              </div>
              <!-- Antwort (rechts) -->
              <div class="psy-bubble psy-bubble--answer">
                <p class="psy-bubble-text" data-i18n="psy.prokr.${area}.a"></p>
                <div class="psy-bubble-metric">
                  <span class="psy-metric-label" data-i18n="psy.prokr.impact">Impact</span>
                  <span class="psy-metric-bar">
                    <span class="psy-metric-fill" data-i18n-attr="style" style="--fill: var(--prokr-fill-${area}, 70%)"></span>
                  </span>
                </div>
              </div>
            </div>
          `).join('')}
        </div>

        <!-- Zusammenfassung -->
        <div class="psy-summary-card">
          <div class="psy-summary-icon"><i class="fas fa-bullseye"></i></div>
          <h3 data-i18n="psy.prokr.summary.title"></h3>
          <p data-i18n="psy.prokr.summary.text"></p>
        </div>

      </div>
    `;
  }

  // ── Init ───────────────────────────────────────────────

  init() {
    i18n.init();
    initScrollReveal();
    this._initWimTabs();

    const panels = document.getElementById('psyPanels');
    if (panels) panels.addEventListener('click', this._onAccordionClick);

    window.addEventListener('languageChanged', this._onLangChange);
  }

  cleanup() {
    const tabsNav = document.getElementById('psyTabs');
    if (tabsNav) {
      tabsNav.querySelectorAll('.wim-tab').forEach(btn => {
        btn.removeEventListener('click', this._onTabClick);
      });
    }
    if (this._resizeHandler) window.removeEventListener('resize', this._resizeHandler);

    const panels = document.getElementById('psyPanels');
    if (panels) panels.removeEventListener('click', this._onAccordionClick);

    window.removeEventListener('languageChanged', this._onLangChange);
  }

  // ── WIM-Tab-Initialisierung (Slider + Overflow) ────────

  _initWimTabs() {
    const tabsContainer = document.getElementById('psyTabs');
    if (!tabsContainer) return;
    const tabs = tabsContainer.querySelectorAll('.wim-tab[data-psy-tab]');
    if (!tabs.length) return;

    // Slider erstellen
    const slider = document.createElement('span');
    slider.className = 'wim-tab-slider';
    tabsContainer.appendChild(slider);

    const positionSlider = (activeTab) => {
      slider.style.transform = `translateX(${activeTab.offsetLeft}px)`;
      slider.style.width = `${activeTab.getBoundingClientRect().width}px`;
    };

    const initialActive = tabsContainer.querySelector('.wim-tab.active') || tabs[0];
    setTimeout(() => positionSlider(initialActive), 50);

    // Tab-Klick
    tabs.forEach((tab, index) => {
      tab.addEventListener('click', (e) => {
        this._onTabClick(e);
        positionSlider(tab);

        // Scroll tab into view
        const tabCenter = tab.offsetLeft + tab.offsetWidth / 2;
        const containerCenter = tabsContainer.clientWidth / 2;
        this._smoothScroll(tabsContainer, tabCenter - containerCenter - tabsContainer.scrollLeft);
      });

      // Keyboard-Navigation
      tab.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') {
          e.preventDefault();
          const next = tabs[index + 1] || tabs[0];
          next.focus(); next.click();
        } else if (e.key === 'ArrowLeft') {
          e.preventDefault();
          const prev = tabs[index - 1] || tabs[tabs.length - 1];
          prev.focus(); prev.click();
        }
      });
    });

    // Resize → Slider repositionieren
    this._resizeHandler = () => {
      const active = tabsContainer.querySelector('.wim-tab.active');
      if (active) positionSlider(active);
    };
    window.addEventListener('resize', this._resizeHandler);
  }

  _smoothScroll(target, amount) {
    const start = target.scrollLeft;
    const end = start + amount;
    const duration = 380;
    const startTime = performance.now();
    const ease = (t) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    const step = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      target.scrollLeft = start + (end - start) * ease(progress);
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }

  // ── Tab Click ──────────────────────────────────────────

  _onTabClick(e) {
    const btn = e.target.closest('.wim-tab[data-psy-tab]');
    if (!btn) return;

    const tabId = btn.dataset.psyTab;
    if (tabId === this._activeTab) return;
    this._activeTab = tabId;

    // Tabs umschalten
    document.querySelectorAll('#psyTabs .wim-tab').forEach(t => {
      t.classList.remove('active');
      t.setAttribute('aria-selected', 'false');
    });
    btn.classList.add('active');
    btn.setAttribute('aria-selected', 'true');

    // Panels umschalten
    document.querySelectorAll('#psyPanels .psy-panel').forEach(p => {
      const isTarget = p.dataset.psyPanel === tabId;
      p.classList.toggle('active', isTarget);
    });
  }

  // ── Accordion Click ────────────────────────────────────

  _onAccordionClick(e) {
    const head = e.target.closest('.psy-accordion-head');
    if (!head) return;

    const accordion = head.parentElement;
    const isOpen = accordion.classList.contains('open');

    // Alle im gleichen Panel schließen
    const panel = accordion.closest('.psy-panel');
    if (panel) {
      panel.querySelectorAll('.psy-accordion.open').forEach(a => {
        if (a !== accordion) {
          a.classList.remove('open');
          a.querySelector('.psy-accordion-head')?.setAttribute('aria-expanded', 'false');
        }
      });
    }

    accordion.classList.toggle('open', !isOpen);
    head.setAttribute('aria-expanded', String(!isOpen));
  }

  // ── Sprachwechsel ──────────────────────────────────────

  _onLangChange() {
    const wrap = document.querySelector('.psy-content-wrap');
    if (wrap) i18n._patchDOM(wrap);
  }
}