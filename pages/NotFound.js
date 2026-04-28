// pages/NotFound.js
// 404-Fehlerseite — mit i18n-Integration und Anzeige der angefragten Route

import { i18n } from '../shared/js/i18n.js';

const _notFoundBundles = {
  de: {
    'nf.subtitle': 'Seite nicht gefunden',
    'nf.text':     'Diese Seite existiert noch nicht, wurde verschoben oder befindet sich gerade im Aufbau. Schau gerne später nochmal vorbei.',
    'nf.hint':     'Manche Seiten entstehen gerade noch',
    'nf.btn':      'Zur Startseite',
    'nf.route':    'Angefragte Seite:',
  },
  en: {
    'nf.subtitle': 'Page not found',
    'nf.text':     'This page does not exist yet, has been moved, or is currently under construction. Feel free to check back later.',
    'nf.hint':     'Some pages are still being built',
    'nf.btn':      'To the home page',
    'nf.route':    'Requested page:',
  },
  ru: {
    'nf.subtitle': 'Страница не найдена',
    'nf.text':     'Эта страница ещё не существует, была перемещена или находится в разработке. Загляни позже.',
    'nf.hint':     'Некоторые страницы ещё создаются',
    'nf.btn':      'На главную',
    'nf.route':    'Запрошенная страница:',
  },
  es: {
    'nf.subtitle': 'Página no encontrada',
    'nf.text':     'Esta página aún no existe, fue movida o está en construcción. Vuelve a visitarla más tarde.',
    'nf.hint':     'Algunas páginas aún están en construcción',
    'nf.btn':      'A la página de inicio',
    'nf.route':    'Página solicitada:',
  },
};

export default class NotFoundPage {
  constructor(router) {
    this.router = router;
    this._requestedRoute = null;
  }

  setRequestedRoute(route) {
    this._requestedRoute = route;
  }

  render() {
    i18n.load(_notFoundBundles);

    const el = document.createElement('div');
    el.className = 'page page-not-found';
    el.innerHTML = `
      <div class="not-found-container">
        <i class="fas fa-compass not-found-icon"></i>
        <h1 class="not-found-title">404</h1>
        <h2 class="not-found-subtitle" data-i18n="nf.subtitle"></h2>
        <p class="not-found-text" data-i18n="nf.text"></p>
        ${this._requestedRoute ? `
          <div class="not-found-route">
            <span data-i18n="nf.route">Angefragte Seite:</span>
            <code>${this._requestedRoute}</code>
          </div>
        ` : ''}
        <div class="not-found-hint">
          <i class="fas fa-hard-hat"></i>
          <span data-i18n="nf.hint"></span>
        </div>
        <button class="btn-primary" data-link="/">
          <i class="fas fa-home"></i>
          <span data-i18n="nf.btn"></span>
        </button>
      </div>
    `;

    this._injectStyles();
    return el;
  }

  _injectStyles() {
    if (document.getElementById('not-found-styles')) return;

    const style = document.createElement('style');
    style.id = 'not-found-styles';
    style.textContent = `
      .not-found-container {
        min-height: 80vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        padding: 4rem 2rem;
        gap: 1.25rem;
        max-width: 600px;
        margin: 0 auto;
      }

      .not-found-icon {
        font-size: 3.5rem;
        color: var(--primary);
        opacity: 0.75;
      }

      .not-found-title {
        font-size: 6rem;
        font-weight: 900;
        color: var(--primary);
        line-height: 1;
        margin: 0;
      }

      .not-found-subtitle {
        font-size: 1.75rem;
        color: var(--text-primary);
        margin: 0;
      }

      .not-found-text {
        color: var(--text-secondary);
        max-width: 420px;
        line-height: 1.7;
        margin: 0;
      }

      .not-found-route {
        display: inline-flex;
        align-items: center;
        gap: 0.75rem;
        padding: 0.5rem 1.25rem;
        background: rgba(255, 255, 255, 0.05);
        border: 1px solid var(--border);
        border-radius: 12px;
        font-size: 0.85rem;
        margin-top: 0.5rem;
      }

      .not-found-route code {
        background: rgba(0, 0, 0, 0.2);
        padding: 0.2rem 0.5rem;
        border-radius: 6px;
        font-family: monospace;
        font-size: 0.85rem;
      }

      .not-found-hint {
        display: inline-flex;
        align-items: center;
        gap: 0.6rem;
        padding: 0.5rem 1.25rem;
        background: var(--primary-container);
        border: 1px solid var(--border);
        border-radius: 100px;
        font-size: 0.85rem;
        color: var(--primary);
        margin-bottom: 0.5rem;
      }

      .not-found-hint i {
        font-size: 0.9rem;
      }
    `;
    document.head.appendChild(style);
  }

  init() {
    i18n.init();
  }
}