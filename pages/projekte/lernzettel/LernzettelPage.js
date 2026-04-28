// pages/projekte/lernzettel/LernzettelPage.js
// Lernzettel-Übersicht — vollständig i18n-fähig

import { initScrollReveal } from '../../../shared/js/index.js';
import { footerHTML } from '../../../components/Footer.js';
import { i18n } from '../../../shared/js/i18n.js';
import { de, en, ru, es } from './js/translation/translation.js';
import { getQuestionKeys, questionsDE, questionsEN, questionsRU, questionsES } from './js/interactive_questions.js';

// ══════════════════════════════════════════════════════════
// FÄCHER-DATEN
// ══════════════════════════════════════════════════════════

export const C = {
  gold:    { hex: '#c9a87c', rgb: '201, 168, 124' },
  olive:   { hex: '#7a9e7e', rgb: '122, 158, 126' },
  bronze:  { hex: '#a68a5b', rgb: '166, 138, 91'  },
  slate:   { hex: '#5c9ead', rgb: '92, 158, 173'  },
  copper:  { hex: '#b87333', rgb: '184, 115, 51'  },
  wine:    { hex: '#8b4557', rgb: '139, 69, 87'   },
  teal:    { hex: '#2e8b8b', rgb: '46, 139, 139'  },
  indigo:  { hex: '#5b6abf', rgb: '91, 106, 191'  },
  rust:    { hex: '#a0522d', rgb: '160, 82, 45'   },
  plum:    { hex: '#7b5ea7', rgb: '123, 94, 167'  },
  cyan:    { hex: '#00bcd4', rgb: '0, 188, 212'   },
};

const FAECHER = [
  { id: 'chemie',     titleKey: 'lz.fach.chemie',     icon: 'fas fa-flask',          color: '#4caf50', link: '/projekte/lernzettel/faecher/chemie',     topicCount: 11 },
  { id: 'deutsch',    titleKey: 'lz.fach.deutsch',     icon: 'fas fa-book-open',      color: '#e57373', link: '/projekte/lernzettel/faecher/deutsch',    topicCount: 7 },
  { id: 'englisch',   titleKey: 'lz.fach.englisch',    icon: 'fas fa-globe-americas', color: '#42a5f5', link: '/projekte/lernzettel/faecher/englisch',   topicCount: 6 },
  { id: 'ethik',      titleKey: 'lz.fach.ethik',       icon: 'fas fa-balance-scale',  color: '#ab47bc', link: '/projekte/lernzettel/faecher/ethik',      topicCount: 10 },
  { id: 'geschichte', titleKey: 'lz.fach.geschichte',  icon: 'fas fa-landmark',       color: '#ff8a65', link: '/projekte/lernzettel/faecher/geschichte', topicCount: 11 },
  { id: 'informatik', titleKey: 'lz.fach.informatik',  icon: 'fas fa-laptop-code',    color: '#26c6da', link: '/projekte/lernzettel/faecher/informatik', topicCount: 5 },
  { id: 'spanisch',   titleKey: 'lz.fach.spanisch',    icon: 'fas fa-pepper-hot',     color: '#ffa726', link: '/projekte/lernzettel/faecher/spanisch',   topicCount: 3 },
  { id: 'sport',      titleKey: 'lz.fach.sport',       icon: 'fas fa-running',        color: '#66bb6a', link: '/projekte/lernzettel/faecher/sport',      topicCount: 5 },
];

const EIGENE_INHALTE = [
  { id: 'psychologie',     icon: 'fas fa-brain', accentColor: '#7c4dff', link: '/projekte/lernzettel/eigenes/psychologie' },
];


// ══════════════════════════════════════════════════════════
// HELPERS
// ══════════════════════════════════════════════════════════

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ══════════════════════════════════════════════════════════
// PAGE CLASS
// ══════════════════════════════════════════════════════════

export default class LernzettelPage {
  constructor(router) {
    this.router = router;
    this._onGridClick = this._onGridClick.bind(this);
    this._onOverlayClose = this._onOverlayClose.bind(this);
    this._onLangChange = this._onLangChange.bind(this);
    this._queues = {};
    this._indices = {};
    this._interval = null;
  }

  render() {
    const el = document.createElement('div');
    el.className = 'page page-lernzettel';

    if (!document.querySelector('link[href*="lernzettel.css"]')) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'pages/projekte/lernzettel/styles/lernzettel.css';
      document.head.appendChild(link);
    }

    // UI-Übersetzungen + Fragen-Bundles in i18n laden
    i18n.load({
      de: { ...de, ...questionsDE },
      en: { ...en, ...questionsEN },
      ru: { ...ru, ...questionsRU },
      es: { ...es, ...questionsES },
    });

    el.innerHTML = this._getHTML();
    return el;
  }

  // ── HTML ───────────────────────────────────────────────

  _getHTML() {
    return `
      <!-- HERO -->
      <section class="lernzettel-hero">
        <div class="lernzettel-hero-inner">
          <div class="lernzettel-hero-orb" aria-hidden="true"></div>
          <div class="lernzettel-hero-content">
            <p class="lernzettel-eyebrow">
              <i class="fas fa-graduation-cap"></i>
              <span data-i18n="lz.eyebrow">Abitur 2026 · Baden-Württemberg</span>
            </p>
            <h1 class="lernzettel-headline">
              <span data-i18n="lz.headline.1">Strukturierte</span><br>
              <em data-i18n="lz.headline.2">Lernressourcen.</em>
            </h1>
            <p class="lernzettel-hero-desc" data-i18n="lz.hero.desc">
              Schulwissen, Psychologie und persönliche Entwicklung — systematisch aufbereitet, frei zugänglich.
            </p>
            <div class="lernzettel-scroll-hint">
              <div class="lernzettel-scroll-mouse"><div class="lernzettel-scroll-wheel"></div></div>
            </div>
          </div>
        </div>
      </section>

      <!-- ═══ SCHULFÄCHER ═══ -->
      <section class="lz-section lz-section--schule">
        <div class="lz-section-wrap">
          <header class="lz-section-head reveal">
            <span class="lz-section-badge"><i class="fas fa-school"></i> <span data-i18n="lz.schule.badge"></span></span>
            <h2 class="lz-section-title" data-i18n="lz.schule.title">Study Hub</h2>
            <p class="lz-section-sub" data-i18n="lz.schule.sub">8 Fächer · Zusammenfassungen, Notizen und Übersichten für die Prüfungsvorbereitung.</p>
          </header>
          <div class="lernzettel-grid" id="faecherGrid">
            ${FAECHER.map(f => this._renderFachCard(f)).join('')}
          </div>
        </div>
      </section>

      <!-- ═══ EIGENE INHALTE ═══ -->
      <section class="lz-section lz-section--eigen">
        <div class="lz-section-wrap">
          <header class="lz-section-head reveal">
            <span class="lz-section-badge lz-section-badge--eigen"><i class="fas fa-lightbulb"></i> <span data-i18n="lz.eigen.badge">Beyond School</span></span>
            <h2 class="lz-section-title" data-i18n="lz.eigen.title">Eigene Inhalte</h2>
            <p class="lz-section-sub" data-i18n="lz.eigen.sub">Themen, die mich persönlich bewegen.</p>
          </header>
          <div class="lz-eigen-grid reveal">
            ${EIGENE_INHALTE.map(item => this._renderEigenCard(item)).join('')}
          </div>
        </div>
      </section>

      <!-- Overlay -->
      <div class="lz-overlay" id="lzOverlay">
        <div class="lz-overlay-panel">
          <div class="lz-overlay-head">
            <div class="lz-overlay-icon" id="lzOverlayIcon"></div>
            <h3 id="lzOverlayTitle"></h3>
            <button class="lz-overlay-close" id="lzOverlayClose" aria-label="Schließen"><i class="fas fa-times"></i></button>
          </div>
          <ul class="lz-overlay-list" id="lzOverlayList"></ul>
        </div>
      </div>

      ${footerHTML(this.router)}
    `;
  }

  // ── Fach-Karte ─────────────────────────────────────────

  _renderFachCard(fach) {
    const keys = getQuestionKeys(fach.id);
    const shuffled = shuffle(keys);
    this._queues[fach.id] = shuffled;
    this._indices[fach.id] = 0;

    return `
      <div class="lz-card" data-fach-id="${fach.id}" data-link="${fach.link}" style="--fach-color: ${fach.color};">
        <div class="lz-card-inner">
          <div class="lz-card-icon"><i class="${fach.icon}"></i></div>
          <h3 class="lz-card-title" data-i18n="${fach.titleKey}"></h3>
          <div class="lz-card-question" id="lzQ-${fach.id}">
            <span class="lz-q-text" data-i18n="${shuffled[0]}"></span>
          </div>
        </div>
        <button class="lz-card-info" aria-label="Info" data-info-id="${fach.id}"><i class="fas fa-info"></i></button>
      </div>
    `;
  }

  // ── Eigen-Karte ────────────────────────────────────────

  _renderEigenCard(item) {
    return `
      <article class="lz-eigen-card" style="--eigen-accent: ${item.accentColor};">
        <button class="lz-eigen-card-link" data-link="${item.link}">
          <div class="lz-eigen-icon"><i class="${item.icon}"></i></div>
          <div class="lz-eigen-body">
            <span class="lz-eigen-label" data-i18n="lz.eigen.${item.id}.label"></span>
            <h3 class="lz-eigen-title" data-i18n="lz.eigen.${item.id}.title"></h3>
            <p class="lz-eigen-desc" data-i18n="lz.eigen.${item.id}.desc"></p>
          </div>
          <div class="lz-eigen-arrow"><i class="fas fa-arrow-right"></i></div>
        </button>
      </article>
    `;
  }

  // ── Init ───────────────────────────────────────────────

  init() {
    i18n.init();
    initScrollReveal();

    const grid = document.getElementById('faecherGrid');
    if (grid) grid.addEventListener('click', this._onGridClick);

    document.getElementById('lzOverlayClose')?.addEventListener('click', this._onOverlayClose);
    document.getElementById('lzOverlay')?.addEventListener('click', (e) => {
      if (e.target.id === 'lzOverlay') this._onOverlayClose();
    });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') this._onOverlayClose(); });

    window.addEventListener('languageChanged', this._onLangChange);
    this._startQuestionRotation();
  }

  cleanup() {
    const grid = document.getElementById('faecherGrid');
    if (grid) grid.removeEventListener('click', this._onGridClick);
    window.removeEventListener('languageChanged', this._onLangChange);
    if (this._interval) { clearInterval(this._interval); this._interval = null; }
  }

  // ── Sprachwechsel → Fragen aktualisieren ───────────────

  _onLangChange() {
    FAECHER.forEach(fach => {
      const el = document.getElementById(`lzQ-${fach.id}`);
      if (!el) return;
      const textEl = el.querySelector('.lz-q-text');
      if (!textEl) return;
      const currentKey = textEl.dataset.i18n;
      if (currentKey) textEl.textContent = i18n.t(currentKey);
    });
  }

  // ── Fragen-Rotation (30s) ──────────────────────────────

  _startQuestionRotation() {
    this._interval = setInterval(() => {
      FAECHER.forEach(f => this._rotateQuestion(f.id));
    }, 30000);
  }

  _rotateQuestion(fachId) {
    const el = document.getElementById(`lzQ-${fachId}`);
    if (!el) return;
    const textEl = el.querySelector('.lz-q-text');
    if (!textEl) return;

    this._indices[fachId]++;
    if (this._indices[fachId] >= this._queues[fachId].length) {
      this._queues[fachId] = shuffle(this._queues[fachId]);
      this._indices[fachId] = 0;
    }

    const nextKey = this._queues[fachId][this._indices[fachId]];

    el.classList.add('lz-q-out');
    setTimeout(() => {
      textEl.dataset.i18n = nextKey;
      textEl.textContent = i18n.t(nextKey);
      el.classList.remove('lz-q-out');
      el.classList.add('lz-q-in');
      setTimeout(() => el.classList.remove('lz-q-in'), 500);
    }, 400);
  }

  // ── Grid Click ─────────────────────────────────────────

  _onGridClick(e) {
    const infoBtn = e.target.closest('.lz-card-info');
    if (infoBtn) {
      e.stopPropagation();
      const fach = FAECHER.find(f => f.id === infoBtn.dataset.infoId);
      if (fach) this._openOverlay(fach);
      return;
    }
    const card = e.target.closest('.lz-card[data-link]');
    if (card) window.location.hash = card.dataset.link;
  }

  // ── Overlay ────────────────────────────────────────────

  _openOverlay(fach) {
    const overlay = document.getElementById('lzOverlay');
    const icon = document.getElementById('lzOverlayIcon');
    const title = document.getElementById('lzOverlayTitle');
    const list = document.getElementById('lzOverlayList');
    if (!overlay || !icon || !title || !list) return;

    icon.innerHTML = `<i class="${fach.icon}"></i>`;
    icon.style.setProperty('--fach-color', fach.color);
    title.textContent = i18n.t(fach.titleKey);

    list.innerHTML = Array.from({ length: fach.topicCount }, (_, i) => {
      const key = `lz.topics.${fach.id}.${i}`;
      return `
        <li style="animation-delay: ${i * 0.05}s">
          <span class="lz-topic-dot" style="background: ${fach.color}"></span>
          ${i18n.t(key)}
        </li>
      `;
    }).join('');

    overlay.classList.add('lz-visible');
    document.body.style.overflow = 'hidden';
  }

  _onOverlayClose() {
    const overlay = document.getElementById('lzOverlay');
    if (!overlay) return;
    overlay.classList.remove('lz-visible');
    document.body.style.overflow = '';
  }
}