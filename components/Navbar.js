// components/Navbar.js
// Navbar-Komponente
//
// Verhalten:
//  ← Pfeil-Button  → navigiert schichtenweise zum nächsten registrierten Parent-Route
//  Logo-Icon       → immer direkt zu /portfolio
//  Prev-Name-Link  → history-basiert: bis zu 10 Schritte zurück (chronologisch)
//  Page-Title      → nur sichtbar, wenn er keine anderen Elemente überdeckt

const HISTORY_KEY   = 'nav-history';
const HISTORY_LIMIT = 10;

export class Navbar {
  constructor() {
    this.router      = null;        // wird via setRouter() gesetzt
    this.currentPath = '/';

    // ── History ────────────────────────────────────────────────
    // _stack  = [{path, label}, …]  (persistiert in sessionStorage)
    // _cursor = index der aktuellen Seite in _stack
    const saved = this._loadHistory();
    this._stack  = saved.stack;
    this._cursor = saved.cursor;

    // Flag: wird gesetzt, wenn wir via history-back navigieren,
    // damit die Rücknavigation keinen neuen push auslöst
    this._backNav = false;

    // Titel
    this.pageTitle = '';

    // ResizeObserver für Kollisionserkennung (wird in init() gesetzt)
    this._resizeObs = null;
  }

  // ── Router-Referenz (wird vom Router nach dessen init() gesetzt) ───
  setRouter(router) {
    this.router = router;
  }

  // ════════════════════════════════════════════════════════════════
  // RENDER
  // ════════════════════════════════════════════════════════════════

  render() {
    const isHome = this.currentPath === '/';
    return `
      <div class="nav-container">
        <div class="nav-logo-area" id="navLogo">
          ${isHome ? this._renderHomeLogo() : this._renderSubLogo()}
        </div>
        <div class="nav-page-title" id="navPageTitle" aria-live="polite"></div>
        <div id="loginButtonContainer" class="nav-login-container"></div>
        <button id="menuBtn" class="menu-btn" aria-label="Menü öffnen">
          <span></span><span></span><span></span>
        </button>
      </div>
    `;
  }

  _renderHomeLogo() {
    return `
      <a class="logo logo-home" data-link="/">
        <div class="logo-icon">
          <img src="https://res.cloudinary.com/dglahdmrm/image/upload/q_auto/f_auto/v1775611280/Kirill_Heldt_Logo_rrbwgj.png" alt="Logo"
               onerror="this.parentElement.innerHTML='<i class=\\'fas fa-k\\'></i>'">
        </div>
        <span class="logo-name">Kirill Heldt</span>
      </a>
    `;
  }

  _renderSubLogo() {
    const prevLabel = this._getPrevLabel();
    return `
      <div class="logo logo-sub">
        <button class="nav-back-btn" id="navParentBtn" title="Zur übergeordneten Seite">
          <i class="fas fa-arrow-left"></i>
        </button>
        <a class="logo-icon-link" data-link="/portfolio">
          <div class="logo-icon">
            <img src="https://res.cloudinary.com/dglahdmrm/image/upload/q_auto/f_auto/v1775611280/Kirill_Heldt_Logo_rrbwgj.png" alt="Logo"
                 onerror="this.parentElement.innerHTML='<i class=\\'fas fa-k\\'></i>'">
          </div>
        </a>
        <button class="logo-prev-name" id="navHistoryBtn" title="Verlauf zurück">
          ${prevLabel}
        </button>
      </div>
    `;
  }

  // ════════════════════════════════════════════════════════════════
  // UPDATE (wird vom Router nach jedem Routenwechsel aufgerufen)
  // ════════════════════════════════════════════════════════════════

  update(path) {
    this.currentPath = path;
    const logoArea = document.getElementById('navLogo');
    if (logoArea) {
      logoArea.innerHTML = path === '/'
        ? this._renderHomeLogo()
        : this._renderSubLogo();
      this._bindLogoButtons();
    }
    // Titel-Sichtbarkeit nach Update neu prüfen
    requestAnimationFrame(() => this._checkCollision());
  }

  // ════════════════════════════════════════════════════════════════
  // PAGE TITLE
  // ════════════════════════════════════════════════════════════════

  setPageTitle(title) {
    this.pageTitle = title || '';
    const el = document.getElementById('navPageTitle');
    if (!el) return;

    if (this.pageTitle) {
      el.textContent = this.pageTitle;
      el.classList.add('visible');
    } else {
      el.textContent = '';
      el.classList.remove('visible', 'collision-hidden');
    }

    // Kurz warten bis Browser Layout berechnet hat, dann prüfen
    requestAnimationFrame(() => this._checkCollision());
  }

  // ── Kollisionserkennung ────────────────────────────────────────
_checkCollision() {
  // Lazy-init: Resize-Listener direkt hier einrichten,
  // damit er ohne initEvents()-Aufruf funktioniert
  if (!this._collisionListenerReady) {
    this._collisionListenerReady = true;
    window.addEventListener('resize', () => {
      requestAnimationFrame(() => this._checkCollision());
    }, { passive: true });
  }

  const historyBtn = document.getElementById('navHistoryBtn');
  const titleEl    = document.getElementById('navPageTitle');
  const menuBtn    = document.getElementById('menuBtn');
  const logoArea   = document.getElementById('navLogo');

  if (!menuBtn) return;
  const mR = menuBtn.getBoundingClientRect();

  // ── 1. History-Button ausblenden wenn er Burger berührt ────────
  if (historyBtn) {
    const hR = historyBtn.getBoundingClientRect();
    historyBtn.classList.toggle('nav-label-hidden', hR.right + 16 > mR.left);
  }

  // ── 2. Page-Title ausblenden wenn er andere Elemente überdeckt ─
  if (titleEl && this.pageTitle) {
    const tR = titleEl.getBoundingClientRect();
    const lR = logoArea?.getBoundingClientRect();
    const collides =
      (lR && tR.left < lR.right + 16) ||
      (mR && tR.right > mR.left - 16);
    titleEl.classList.toggle('collision-hidden', collides);
  }
}

  // ════════════════════════════════════════════════════════════════
  // HISTORY STACK
  // ════════════════════════════════════════════════════════════════

  /**
   * Vom Router nach jedem Routenwechsel aufgerufen.
   * Bei normaler Navigation: neuen Eintrag pushen.
   * Bei history-back-Navigation (_backNav === true): nur Flag zurücksetzen.
   */
  pushHistory(path, label) {
    if (this._backNav) {
      this._backNav = false;
      return;
    }

    // Gleiche Route nicht doppelt pushen
    if (this._stack[this._cursor]?.path === path) {
      // Label aktualisieren falls jetzt bekannt
      if (label && !this._stack[this._cursor].label) {
        this._stack[this._cursor].label = label;
        this._saveHistory();
      }
      return;
    }

    // Alles nach dem Cursor wegwerfen (wie Browser bei "normaler" Navigation)
    this._stack = this._stack.slice(0, this._cursor + 1);
    this._stack.push({ path, label: label || this._labelFor(path) });

    // Max 10 Einträge
    if (this._stack.length > HISTORY_LIMIT) {
      this._stack.shift();
    }

    this._cursor = this._stack.length - 1;
    this._saveHistory();
  }

  /** Aktualisiert das Label des aktuellen History-Eintrags (nach i18n-Auflösung) */
  updateCurrentLabel(label) {
    if (!label || this._cursor < 0) return;
    if (this._stack[this._cursor]) {
      this._stack[this._cursor].label = label;
      this._saveHistory();
      // Prev-Name-Button aktualisieren
      const btn = document.getElementById('navHistoryBtn');
      if (btn) btn.textContent = this._getPrevLabel();
    }
  }

  // ── History-Back-Navigation (logo-prev-name button) ────────────
  _navigateHistoryBack() {
    if (!this.router) return;
    if (this._cursor <= 0) {
      this.router.navigateTo('/');
      return;
    }
    this._cursor--;
    this._backNav = true;
    const entry = this._stack[this._cursor];
    this._saveHistory();
    this.router.navigateTo(entry.path);
  }

  // ── Label des vorletzten Eintrags ──────────────────────────────
  _getPrevLabel() {
    if (this._cursor <= 0 || !this._stack[this._cursor - 1]) {
      return 'Zurück';
    }
    return this._stack[this._cursor - 1].label || 'Zurück';
  }

  // ════════════════════════════════════════════════════════════════
  // PARENT NAVIGATION (← Pfeil-Button)
  // ════════════════════════════════════════════════════════════════

  _navigateToParent() {
    if (!this.router) return;
    const parent = this.router.getParentRoute(this.currentPath);
    this.router.navigateTo(parent);
  }

  // ════════════════════════════════════════════════════════════════
  // EVENT-BINDING (nach jedem DOM-Update)
  // ════════════════════════════════════════════════════════════════

  _bindLogoButtons() {
    const parentBtn  = document.getElementById('navParentBtn');
    const historyBtn = document.getElementById('navHistoryBtn');

    parentBtn?.addEventListener('click', () => this._navigateToParent());
    historyBtn?.addEventListener('click', () => this._navigateHistoryBack());
  }

  // ════════════════════════════════════════════════════════════════
  // INIT (nach erstem render() ins DOM)
  // ════════════════════════════════════════════════════════════════

  initEvents() {
    this._bindLogoButtons();

    // ResizeObserver → Kollision bei Größenänderung neu prüfen
    const container = document.querySelector('.nav-container');
    if (container && window.ResizeObserver) {
      this._resizeObs = new ResizeObserver(() => {
        requestAnimationFrame(() => this._checkCollision());
      });
      this._resizeObs.observe(container);
    }
    if (!this.loginButton && document.getElementById('loginButtonContainer')) {
    import('./loginButton.js').then(module => {
      this.loginButton = new module.LoginButton('loginButtonContainer');
    });
  }
  }

  // ════════════════════════════════════════════════════════════════
  // HILFSMETHODEN
  // ════════════════════════════════════════════════════════════════

  _labelFor(path) {
    const NAMES = {
      '/':                                    'Willkommen',
      '/portfolio':                           'Portfolio',
      '/projekte/blender':                    'Blender 3D',
      '/projekte/gedichte':                   'Gedichte',
      '/projekte/lernzettel':                 'Lernzettel',
      '/projekte/lernzettel/faecher/chemie':  'Chemie',
      '/projekte/lernzettel/faecher/deutsch': 'Deutsch',
      '/projekte/lernzettel/faecher/englisch':'Englisch',
      '/projekte/lernzettel/faecher/ethik':   'Ethik',
      '/projekte/lernzettel/faecher/geschichte':'Geschichte',
      '/projekte/lernzettel/faecher/informatik':'Informatik',
      '/projekte/lernzettel/faecher/spanisch':'Spanisch',
      '/projekte/lernzettel/faecher/sport':   'Sport',
    };
    return NAMES[path] || path.split('/').filter(Boolean).pop() || 'Zurück';
  }

  // ── sessionStorage ─────────────────────────────────────────────
  _saveHistory() {
    try {
      sessionStorage.setItem(HISTORY_KEY, JSON.stringify({
        stack:  this._stack,
        cursor: this._cursor,
      }));
    } catch { /* QuotaExceeded o.ä. ignorieren */ }
  }

  _loadHistory() {
    try {
      const raw = sessionStorage.getItem(HISTORY_KEY);
      if (raw) {
        const { stack, cursor } = JSON.parse(raw);
        if (Array.isArray(stack) && typeof cursor === 'number') {
          return { stack, cursor };
        }
      }
    } catch { /* ignorieren */ }
    return { stack: [], cursor: -1 };
  }
}

// ── Singleton ──────────────────────────────────────────────────────
export const navbar = new Navbar();