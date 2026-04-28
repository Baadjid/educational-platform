// shared/js/i18n.js
// Zentraler Übersetzungs-Manager — kein Re-render, nur textContent-Patches
//
// Verwendung:
//   import { i18n } from '../../shared/js/i18n.js';
//   i18n.load({ de, en, ru, es });   // einmalig in der Seite
//   i18n.init();                      // in page.init()
//   i18n.t('key')                     // Übersetzung holen
//   i18n.setLang('en')               // Sprache wechseln → patcht nur textContent
//   i18n.destroy()                   // Aufräumen beim Seitenwechsel (Observer stoppen)

const STORAGE_KEY  = 'kh-lang';
const SUPPORTED    = ['de', 'ru', 'en', 'es'];

// ── Persistenz ────────────────────────────────────────────────
function loadStored() {
  try { return localStorage.getItem(STORAGE_KEY); } catch { return null; }
}
function saveStored(lang) {
  try { localStorage.setItem(STORAGE_KEY, lang); } catch { /* */ }
}

function detectLang() {
  const stored = loadStored();
  if (stored && SUPPORTED.includes(stored)) return stored;
  const browser = (navigator.language || 'de').split('-')[0];
  return SUPPORTED.includes(browser) ? browser : 'de';
}

// ── Deep-Merge Helper ─────────────────────────────────────────
function _deepMerge(target, source) {
  const result = { ...target };
  for (const key of Object.keys(source)) {
    const sv = source[key];
    const tv = result[key];
    result[key] =
      sv !== null && typeof sv === 'object' && !Array.isArray(sv) &&
      tv !== null && typeof tv === 'object' && !Array.isArray(tv)
        ? _deepMerge(tv, sv)
        : sv;
  }
  return result;
}

// ── Manager ───────────────────────────────────────────────────
class I18nManager {
  constructor() {
    this._bundles  = {};   // { de: {...}, en: {...}, ... }
    this._lang     = detectLang();
    this._observer = null;
  }

  // ── Bundles registrieren (Deep-Merge pro Sprache) ───────────
  load(bundles) {
    for (const lang of Object.keys(bundles)) {
      if (!this._bundles[lang]) {
        this._bundles[lang] = {};
      }
      this._bundles[lang] = _deepMerge(this._bundles[lang], bundles[lang]);
    }
    return this;
  }

  // ── Schlüssel auflösen ──────────────────────────────────────
  t(key) {
    return (
      this._bundles[this._lang]?.[key] ??
      this._bundles['de']?.[key] ??
      key
    );
  }

  get lang() { return this._lang; }

  // ── Initialisieren: DOM patchen + Observer starten ──────────
  init() {
    this._patchDOM();
    this._updateLangBtns();
    this._syncHtmlAttr();
    this._attachLangBtnListener();
    this._startObserver();
    return this;
  }

  // ── Sprache wechseln ────────────────────────────────────────
  setLang(lang) {
    if (!SUPPORTED.includes(lang)) return;
    if (lang === this._lang) return;

    this._lang = lang;
    saveStored(lang);
    this._syncHtmlAttr();
    this._patchDOM();
    this._updateLangBtns();

    window.dispatchEvent(
      new CustomEvent('languageChanged', { detail: { lang } })
    );
  }

  // ── Alle [data-i18n]-Knoten im aktuellen Dokument patchen ───
  _patchDOM(root = document) {
    // Texte
    root.querySelectorAll('[data-i18n]').forEach(el => {
      const val = this.t(el.dataset.i18n);
      if (val !== el.dataset.i18n) el.textContent = val;
    });
    // Placeholders
    root.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const val = this.t(el.dataset.i18nPlaceholder);
      if (val !== el.dataset.i18nPlaceholder) el.placeholder = val;
    });
    // aria-label
    root.querySelectorAll('[data-i18n-aria]').forEach(el => {
      const val = this.t(el.dataset.i18nAria);
      if (val !== el.dataset.i18nAria) el.setAttribute('aria-label', val);
    });
  }

  // ── .lang-btn aktiv markieren ───────────────────────────────
  _updateLangBtns() {
    document.querySelectorAll('.lang-btn[data-lang]').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === this._lang);
    });
  }

  // ── <html lang="…"> + data-lang setzen ─────────────────────
  _syncHtmlAttr() {
    document.documentElement.setAttribute('lang',      this._lang);
    document.documentElement.setAttribute('data-lang', this._lang);
  }

  // ── Klick auf .lang-btn via Event-Delegation (einmalig) ─────
  _attachLangBtnListener() {
    if (this._btnListenerAttached) return;
    this._btnListenerAttached = true;
    document.body.addEventListener('click', e => {
      const btn = e.target.closest('.lang-btn[data-lang]');
      if (btn) this.setLang(btn.dataset.lang);
    });
  }

  // ── MutationObserver: neue [data-i18n]-Knoten sofort patchen ─
  _startObserver() {
    if (this._observer) return;
    this._observer = new MutationObserver(mutations => {
      for (const m of mutations) {
        for (const node of m.addedNodes) {
          if (node.nodeType !== 1) continue;
          if (node.dataset?.i18n) this._patchDOM(node.parentElement);
          else if (node.querySelector?.('[data-i18n]')) this._patchDOM(node);
        }
      }
    });
    this._observer.observe(document.body, { childList: true, subtree: true });
  }

  // ── Aufräumen beim Seitenwechsel ────────────────────────────
  destroy() {
    if (this._observer) {
      this._observer.disconnect();
      this._observer = null;
    }
    // Event-Listener bleiben bestehen (kein Problem, da global)
  }
}

// Singleton — eine Instanz für die gesamte App
export const i18n = new I18nManager();