// pages/projekte/gedichte/GedichtePage.js
// Gedichte-Seite mit Themen-Tabs — mit i18n-Integration

import { initScrollReveal } from '../../../shared/js/index.js';
import { footerHTML } from '../../../components/Footer.js';
import { i18n } from '../../../shared/js/i18n.js';
import { de, en, ru, es } from './js/translation/translation.js';
import { POEM_CATEGORIES, fetchPoems, getPoemsByCategory, getPoemById } from '../../../data/poems.js';
import { initWimTabs } from '../../../shared/js/wim-tabs.js';


export default class GedichtePage {
  constructor(router) {
    this.router = router;
    this.currentCategory = 'all';
    this.currentPoemId = null;
    this.poems = [];
    this._bindMethods();
  }

  _bindMethods() {
    this._onPoemClick = this._onPoemClick.bind(this);
    this._onNavClick  = this._onNavClick.bind(this);
  }

  render() {
    i18n.load({ de, en, ru, es });

    const el = document.createElement('div');
    el.className = 'page page-gedichte';

    if (!document.querySelector('link[href*="gedichte.css"]')) {
      const link = document.createElement('link');
      link.rel  = 'stylesheet';
      link.href = 'pages/projekte/gedichte/styles/gedichte.css';
      document.head.appendChild(link);
    }

    el.innerHTML = this._getHTML();
    return el;
  }

  _getHTML() {
    return `
      <!-- HERO -->
      <section class="gedichte-hero">
        <div class="gedichte-hero-inner">
          <div class="gedichte-hero-orb" aria-hidden="true"></div>
          <div class="gedichte-hero-content">
            <p class="gedichte-eyebrow" data-i18n="gd.eyebrow">Poesie — Gedanken — Verse</p>
            <h1 class="gedichte-headline">
              <span data-i18n="gd.headline.1">Worte, die zwischen</span><br>
              <em data-i18n="gd.headline.2">den Zeilen leuchten.</em>
            </h1>
            <div class="gedichte-scroll-hint">
              <div class="gedichte-scroll-mouse"><div class="gedichte-scroll-wheel"></div></div>
            </div>
          </div>
        </div>
      </section>

      <!-- POETRY SECTION -->
      <section class="poetry-section">
        <div class="poetry-inner">

          <!-- Kategorie-Tabs -->
          <nav class="wim-tabs poetry-tabs reveal" role="tablist">
            ${POEM_CATEGORIES.map(cat => `
              <button class="wim-tab poetry-tab ${cat.id === 'all' ? 'active' : ''}"
                      data-wim="${cat.id}"
                      role="tab">
                <i class="fas fa-${cat.icon}"></i>
                <span data-i18n="gd.cat.${cat.id}">${cat.label}</span>
              </button>
            `).join('')}
          </nav>

          <div class="poetry-layout">
            <!-- Gedicht-Liste (links) -->
            <div class="poetry-list-wrap">
              <div class="poetry-list-label" data-i18n="gd.list.label">Sammlung</div>
              <div class="poetry-list" id="poemsList">
                <div class="auth-spinner" style="margin:2rem auto;"></div>
              </div>
            </div>

            <!-- Gedicht-Anzeige (rechts) -->
            <div id="poemDisplay" class="poem-display"></div>
          </div>

        </div>
      </section>

      ${footerHTML(this.router, {
        extraColumn: {
          title: 'Klassiker',
          titleI18n: 'gd.footer.extra.title',
          items: [
            { label: 'Маяковский', href: 'https://rupoem.ru/mayakovskij/all.aspx' },
            { label: 'Есенин',     href: 'https://rupoem.ru/esenin/all.aspx' },
            { label: 'Пушкин',     href: 'https://rupoem.ru/pushkin/all.aspx' },
            { label: 'Zurück zum Portfolio', link: '/portfolio', i18n: 'gd.footer.extra.back' }
          ]
        }
      })}
    `;
  }

  async init() {
    i18n.init();
    initScrollReveal();

    this.poems = await fetchPoems();

    if (this.poems.length === 0) {
      const list = document.getElementById('poemsList');
      if (list) list.innerHTML = '<p style="padding:1rem;color:var(--text-muted);">Keine Gedichte gefunden.</p>';
      return;
    }

    const first = getPoemsByCategory(this.poems, this.currentCategory);
    if (first.length > 0) this.currentPoemId = first[0].id;

    this._renderAll();

    initWimTabs(document, {
      onTabChange: (key) => this._onCategoryChange(key),
    });

    const list    = document.getElementById('poemsList');
    const display = document.getElementById('poemDisplay');
    if (list)    list.addEventListener('click', this._onPoemClick);
    if (display) display.addEventListener('click', this._onNavClick);
  }

  cleanup() {
    const list    = document.getElementById('poemsList');
    const display = document.getElementById('poemDisplay');
    if (list)    list.removeEventListener('click', this._onPoemClick);
    if (display) display.removeEventListener('click', this._onNavClick);
  }

  // ── Event Handler ──────────────────────────────────────────

  _onCategoryChange(category) {
    this.currentCategory = category;
    const poems = getPoemsByCategory(this.poems, category);
    if (poems.length > 0) this.currentPoemId = poems[0].id;
    this._renderAll();
  }

  _onPoemClick(e) {
    const btn = e.target.closest('[data-poem-id]');
    if (!btn) return;
    this.currentPoemId = parseInt(btn.dataset.poemId, 10);
    this._renderAll();
  }

  _onNavClick(e) {
    const btn = e.target.closest('[data-nav]');
    if (!btn) return;

    const poems      = getPoemsByCategory(this.poems, this.currentCategory);
    const currentIdx = poems.findIndex(p => p.id === this.currentPoemId);
    const dir        = btn.dataset.nav;

    if (dir === 'next') {
      this.currentPoemId = poems[(currentIdx + 1) % poems.length].id;
    } else if (dir === 'prev') {
      this.currentPoemId = poems[(currentIdx - 1 + poems.length) % poems.length].id;
    }

    this._renderAll();
  }

  // ── Render ─────────────────────────────────────────────────

  _renderAll() {
    this._renderList();
    this._renderPoem();
  }

  _renderList() {
    const el = document.getElementById('poemsList');
    if (!el) return;

    const poems = getPoemsByCategory(this.poems, this.currentCategory);

    el.innerHTML = poems.map((poem, idx) => `
      <button class="poem-btn ${poem.id === this.currentPoemId ? 'active' : ''}"
              data-poem-id="${poem.id}">
        <div class="poem-btn-num">${String(idx + 1).padStart(2, '0')}</div>
        <h3>${poem.title}</h3>
        <p>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
               stroke="currentColor" stroke-width="2">
            <rect x="3" y="4" width="18" height="18" rx="2"/>
            <line x1="16" y1="2" x2="16" y2="6"/>
            <line x1="8"  y1="2" x2="8"  y2="6"/>
            <line x1="3"  y1="10" x2="21" y2="10"/>
          </svg>
          ${poem.date}
        </p>
      </button>
    `).join('');
  }

  _renderPoem() {
    const el = document.getElementById('poemDisplay');
    if (!el) return;

    const poem = getPoemById(this.poems, this.currentPoemId);
    if (!poem) return;

    const poems      = getPoemsByCategory(this.poems, this.currentCategory);
    const currentIdx = poems.findIndex(p => p.id === this.currentPoemId);

    const stanzas = poem.stanzas
      .map(s => `<div class="poem-stanza">${s}</div>`)
      .join('');

    el.innerHTML = `
      <div class="poem-card" style="background-image: linear-gradient(${poem.bgOverlay}, ${poem.bgOverlay}), url('${poem.bgImage}'); --poem-accent: ${poem.accentColor};">
        <svg class="quote-mark" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">
          <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11
                   c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"/>
          <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11
                   c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"/>
        </svg>
        <div class="poem-text-box">
          <h3 class="poem-title-el">${poem.title}</h3>
          <div class="poem-dateline"><span>${poem.date}</span></div>
          <div class="poem-text-area">${stanzas}</div>
          <div class="poem-signature">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" stroke-width="2">
              <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"/>
              <line x1="16" y1="8"  x2="2"  y2="22"/>
              <line x1="17.5" y1="15" x2="9" y2="15"/>
            </svg>
          </div>
        </div>
      </div>

      <nav class="poem-nav">
        <button class="poem-nav-btn prev" data-nav="prev">
          <div class="nav-circle">←</div>
          <span data-i18n="gd.nav.prev">Vorheriges</span>
        </button>
        <span class="poem-counter">${currentIdx + 1} / ${poems.length}</span>
        <button class="poem-nav-btn next" data-nav="next">
          <span data-i18n="gd.nav.next">Nächstes</span>
          <div class="nav-circle">→</div>
        </button>
      </nav>
    `;

    i18n._patchDOM(el);

    const card = el.querySelector('.poem-card');
    if (card) {
      card.style.animation = 'none';
      requestAnimationFrame(() => { card.style.animation = ''; });
    }
  }
}