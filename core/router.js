// core/router.js

import { navbar } from '../components/Navbar.js';
import { initSidebar } from '../shared/js/sidebar.js';
import { initTheme } from '../shared/js/theme.js';
import { initScrollTop } from '../shared/js/scroll.js';
import { de, en, ru, es } from './translation/translation.js';
import { i18n } from '../shared/js/i18n.js';
import { initActivitiesScroll } from '../shared/js/index.js';
import { authService } from '../service/auth/authService.js';
import { gateOverlay } from '../service/auth/overlay.js';
import { 
  isRouteProtected,
  getProtectedBase,
  getLockTitle, 
  getLockMessage 
} from './routes/protected.js';

// ── Import aller Fach‑Routen ───────────────────────────────────
import { CHEMIE_TITLE_KEYS, CHEMIE_ROUTES, CHEMIE_TITLE_TRANSLATION } from './routes/faecher/chemie_routes.js';
import { DEUTSCH_TITLE_KEYS, DEUTSCH_ROUTES, DEUTSCH_TITLE_TRANSLATION } from './routes/faecher/deutsch_routes.js';
import { ENGLISCH_TITLE_KEYS, ENGLISCH_ROUTES, ENGLISCH_TITLE_TRANSLATION } from './routes/faecher/englisch_routes.js';
import { ETHIK_TITLE_KEYS, ETHIK_ROUTES, ETHIK_TITLE_TRANSLATION } from './routes/faecher/ethik_routes.js';
import { GESCHICHTE_TITLE_KEYS, GESCHICHTE_ROUTES, GESCHICHTE_TITLE_TRANSLATION } from './routes/faecher/geschichte_routes.js';
import { INFORMATIK_TITLE_KEYS, INFORMATIK_ROUTES, INFORMATIK_TITLE_TRANSLATION } from './routes/faecher/informatik_routes.js';
import { SPANISCH_TITLE_KEYS, SPANISCH_ROUTES, SPANISCH_TITLE_TRANSLATION } from './routes/faecher/spanisch_routes.js';
import { SPORT_TITLE_KEYS, SPORT_ROUTES, SPORT_TITLE_TRANSLATION } from './routes/faecher/sport_routes.js';

// ── Hauptseiten ────────────────────────────────────────────────
const MAIN_TITLE_KEYS = {
  '/':                                          'page.title.home',
  '/portfolio':                                 'page.title.portfolio',
  '/projekte/blender':                          'page.title.blender',
  '/projekte/blender/js/hotkeys':               'page.title.blender.hotkeys',
  '/projekte/gedichte':                         'page.title.gedichte',
  '/projekte/lernzettel':                       'page.title.lernzettel',
  '/projekte/study-planner':                    'page.title.planner',
  '/projekte/lernzettel/eigenes/psychologie':   'page.title.lz.psychologie',
  '/404':                                       'page.title.404',
};

const MAIN_ROUTES = {
  '/':                        () => import('../pages/home/Home.js'),
  '/portfolio':               () => import('../pages/portfolio/Portfolio.js'),
  '/projekte/blender':        () => import('../pages/projekte/blender/BlenderPage.js'),
  '/projekte/blender/js/hotkeys': () => import('../pages/projekte/blender/js/BlenderHotkeys.js'),
  '/projekte/study-planner':   () => import('../pages/projekte/study-planner/StudyPlannerPage.js'),
  '/projekte/gedichte':       () => import('../pages/projekte/gedichte/GedichtePage.js'),
  '/projekte/lernzettel':     () => import('../pages/projekte/lernzettel/LernzettelPage.js'),
  '/projekte/lernzettel/eigenes/psychologie': () => import('../pages/projekte/lernzettel/eigenes/psychologie/psychologie.js'),
  '/404':                     () => import('../pages/NotFound.js'),
};

const PAGE_TITLE_KEYS = {
  ...MAIN_TITLE_KEYS,
  ...CHEMIE_TITLE_KEYS,
  ...DEUTSCH_TITLE_KEYS,
  ...ENGLISCH_TITLE_KEYS,
  ...ETHIK_TITLE_KEYS,
  ...GESCHICHTE_TITLE_KEYS,
  ...INFORMATIK_TITLE_KEYS,
  ...SPANISCH_TITLE_KEYS,
  ...SPORT_TITLE_KEYS,
};

const ALL_ROUTES = {
  ...MAIN_ROUTES,
  ...CHEMIE_ROUTES,
  ...DEUTSCH_ROUTES,
  ...ENGLISCH_ROUTES,
  ...ETHIK_ROUTES,
  ...GESCHICHTE_ROUTES,
  ...INFORMATIK_ROUTES,
  ...SPANISCH_ROUTES,
  ...SPORT_ROUTES,
};

const ALL_TITLE_TRANSLATIONS = {
  ...CHEMIE_TITLE_TRANSLATION,
  ...DEUTSCH_TITLE_TRANSLATION,
  ...ENGLISCH_TITLE_TRANSLATION,
  ...ETHIK_TITLE_TRANSLATION,
  ...GESCHICHTE_TITLE_TRANSLATION,
  ...INFORMATIK_TITLE_TRANSLATION,
  ...SPANISCH_TITLE_TRANSLATION,
  ...SPORT_TITLE_TRANSLATION,
};

const BASE_DE = {
  ...de,
  ...ALL_TITLE_TRANSLATIONS,
};

// Seiten, die Sprachauswahl anzeigen
const LANG_ROUTES = new Set([
  '/', '/portfolio', '/projekte/blender', '/projekte/gedichte',
  '/projekte/lernzettel', '/projekte/lernzettel/eigenes/psychologie',
  '/projekte/blender/js/hotkeys', '/404',
]);

class Router {
  constructor() {
    this.currentRoute   = '/';
    this.previousRoute  = null;
    this.previousPage   = null;
    this.routes         = ALL_ROUTES;
    this._canvasCleanup = null;
    this.init();
  }

  getParentRoute(path) {
    const segments = path.split('/').filter(Boolean);
    for (let i = segments.length - 1; i > 0; i--) {
      const candidate = '/' + segments.slice(0, i).join('/');
      if (this.routes[candidate]) return candidate;
    }
    return '/';
  }

  init() {
    i18n.load({ de: BASE_DE, en, ru, es });
    
    window.addEventListener('languageChanged', () => {
      this._applyTitle(this.currentRoute);
    });

    document.addEventListener('click', (e) => {
      const el = e.target.closest('[data-link]');
      if (!el) return;
      e.preventDefault();
      this.navigateTo(el.getAttribute('data-link'));
    });

    window.addEventListener('hashchange', () => this.handleRoute());
    window.addEventListener('load',       () => this.handleRoute());

    initTheme();
    initSidebar();
    initScrollTop();
    navbar.setRouter(this);
  }

  navigateTo(path, anchor = null) {
    if (anchor) sessionStorage.setItem('scrollToAnchor', anchor);
    window.location.hash = path === '/' ? '' : path;
    if (this.currentRoute === path) this.handleRoute();
  }

  async handleRoute() {
    const hash  = window.location.hash.slice(1) || '/';
    const path  = hash.startsWith('/') ? hash : '/' + hash;
    const route = path.split('?')[0];

    this.previousRoute = this.currentRoute;
    this.currentRoute  = route;

    navbar.pushHistory(route);
    navbar.update(route);
    this._updateSidebarLinks(route);

    const effectiveRoute = this.routes[route] ? route : '/404';
    this._updateLangSection(effectiveRoute);
    this._applyTitle(route);

    // ── AUTH-GUARD mit Präfix-Matching ────────────────────────
    if (isRouteProtected(route)) {
      await authService.ready();

      if (!authService.isLoggedIn()) {
        document.getElementById('app').innerHTML = '';

        // Basis-Route für Titel/Nachricht ermitteln (Subrouten korrekt mappen)
        const base    = getProtectedBase(route) ?? route;
        const title   = getLockTitle(base);
        const message = getLockMessage(base);

        // fromRouteGuard: true → "Zurück" navigiert zur Startseite
        gateOverlay.show(title, message, { fromRouteGuard: true, route: base });
        return;
      }
    }

    await this._renderPage(route, effectiveRoute);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  _applyTitle(route) {
    const key        = PAGE_TITLE_KEYS[route] || PAGE_TITLE_KEYS['/404'];
    const translated = i18n.t(key);
    const hasTitle   = translated !== key;
    document.title = hasTitle ? `Kirill Heldt · ${translated}` : 'Kirill Heldt';
    navbar.setPageTitle(hasTitle ? translated : '');
    navbar.updateCurrentLabel(hasTitle ? translated : navbar._labelFor(route));
  }

  async _renderPage(route, effectiveRoute = null) {
    const app = document.getElementById('app');

    if (this.previousPage?.cleanup) this.previousPage.cleanup();
    if (window.__canvasCleanup) { window.__canvasCleanup(); window.__canvasCleanup = null; }

    app.innerHTML = '<div class="page-loading"><div class="loading-spinner"></div></div>';

    const loader = this.routes[effectiveRoute];

    try {
      const module    = await loader();
      const PageClass = module.default;
      const page      = new PageClass(this);

      const el = page.render();
      app.innerHTML = '';
      app.appendChild(el);

      if (page.init) await page.init();

      const { initBackground } = await import('../shared/js/background.js');
      window.__canvasCleanup = initBackground();

      requestAnimationFrame(() => initActivitiesScroll());
      this.previousPage = page;

    } catch (err) {
      console.error('Router‑Fehler:', err);
      this._showErrorPage(err);
      try {
        const { initBackground } = await import('../shared/js/background.js');
        window.__canvasCleanup = initBackground();
      } catch (bgErr) { console.error(bgErr); }
    }
  }

  _showErrorPage(err) {
    const app = document.getElementById('app');
    app.innerHTML = `
      <div class="error-page-container">
        <div class="error-page">
          <i class="fas fa-exclamation-triangle error-icon"></i>
          <h2 class="error-title" data-i18n="page.error.title">Ladefehler</h2>
          <p class="error-text" data-i18n="page.error.text">Die Seite konnte nicht geladen werden.</p>
          <p class="error-detail">${err.message || 'Unbekannter Fehler'}</p>
          <button class="btn-primary error-btn" data-link="/">
            <i class="fas fa-home"></i>
            <span data-i18n="page.error.btn">Startseite</span>
          </button>
        </div>
      </div>
    `;
    if (i18n._patchDOM) i18n._patchDOM(app);
    this._injectErrorStyles();
  }

  _injectErrorStyles() {
    if (document.getElementById('error-page-styles')) return;
    const style = document.createElement('style');
    style.id = 'error-page-styles';
    style.textContent = `
      .error-page-container{min-height:80vh;display:flex;align-items:center;justify-content:center;padding:2rem}
      .error-page{text-align:center;max-width:500px;padding:2rem;background:var(--bg-card);border:1px solid var(--border);border-radius:24px;box-shadow:var(--shadow-lg)}
      .error-icon{font-size:3rem;color:var(--error);margin-bottom:1rem}
      .error-title{font-size:1.5rem;margin-bottom:.5rem;color:var(--text-primary)}
      .error-text{color:var(--text-secondary);margin-bottom:1rem}
      .error-detail{font-size:.8rem;color:var(--text-muted);background:rgba(0,0,0,.05);padding:.5rem;border-radius:8px;margin-bottom:1.5rem;word-break:break-all;font-family:monospace}
      .error-btn{display:inline-flex;align-items:center;gap:.5rem}
    `;
    document.head.appendChild(style);
  }

  _updateSidebarLinks(route) {
    document.querySelectorAll('.sidebar-link[data-link]').forEach(link => {
      link.classList.toggle('active', link.getAttribute('data-link') === route);
    });
  }

  _updateLangSection(route) {
    const section = document.getElementById('langSection');
    if (section) section.style.display = LANG_ROUTES.has(route) ? 'block' : 'none';
  }
}

const router = new Router();
export default router;