// core/routes/protected.js
import { i18n } from '../../shared/js/i18n.js';

// Geschützte Basis-Routen — alle Unterseiten sind automatisch mitgeschützt
export const PROTECTED_ROUTES = new Set([
  '/projekte/gedichte',
  '/portfolio',
  '/projekte/study-planner',
]);

// ============================================
// ROUTE-MATCHING (inkl. Unterpfade)
// ============================================

export function isRouteProtected(route) {
  for (const p of PROTECTED_ROUTES) {
    if (route === p || route.startsWith(p + '/')) return true;
  }
  return false;
}

export function getProtectedBase(route) {
  if (!route) return null;
  for (const p of PROTECTED_ROUTES) {
    if (route === p || route.startsWith(p + '/')) return p;
  }
  return null;
}

// ============================================
// I18N-KEYS FÜR GESCHÜTZTE ROUTEN
// ============================================

const GATE_TITLE_KEYS = {
  '/projekte/gedichte':       'lock.gedichte.title',
  '/projekte/study-planner':  'lock.study-planner.title',
  '/portfolio':               'lock.portfolio.title',
};

const GATE_MESSAGE_KEYS = {
  '/projekte/gedichte':       'lock.gedichte.message',
  '/projekte/study-planner':  'lock.study-planner.message',
  '/portfolio':               'lock.portfolio.message',
};

const GATE_TEXT_FALLBACK = {
  '/projekte/gedichte': {
    title:   'Gedichte — Zugang gesperrt',
    message: 'Melde dich an, um meine persönlichen Gedichte zu lesen.',
  },
  '/projekte/study-planner': {
    title:   'Schedule Crunch — Zugang gesperrt',
    message: 'Melde dich an, um die Lernplaner-App zu nutzen.',
  },
  '/portfolio': {
    title:   'Portfolio — Zugang gesperrt',
    message: 'Melde dich an, um mein vollständiges Portfolio zu sehen.',
  },
};

// ============================================
// HAUPTFUNKTIONEN
// ============================================

export function getLockTitle(route) {
  const base = getProtectedBase(route) ?? route;
  const key  = GATE_TITLE_KEYS[base];
  if (key && i18n && typeof i18n.t === 'function') {
    const translated = i18n.t(key);
    if (translated && translated !== key) return translated;
  }
  return GATE_TEXT_FALLBACK[base]?.title ?? 'Zugang gesperrt';
}

export function getLockMessage(route) {
  const base = getProtectedBase(route) ?? route;
  const key  = GATE_MESSAGE_KEYS[base];
  if (key && i18n && typeof i18n.t === 'function') {
    const translated = i18n.t(key);
    if (translated && translated !== key) return translated;
  }
  return GATE_TEXT_FALLBACK[base]?.message ?? 'Dieser Bereich ist nur für angemeldete Nutzer zugänglich.';
}

export function getLockTitleKey(route) {
  const base = getProtectedBase(route) ?? route;
  return GATE_TITLE_KEYS[base] ?? 'lock.default.title';
}

export function getLockMessageKey(route) {
  const base = getProtectedBase(route) ?? route;
  return GATE_MESSAGE_KEYS[base] ?? 'lock.default.message';
}

// ============================================
// RENDER-HELFER
// ============================================

/** Hilfsfunktion: erzeugt das locked-overlay HTML-Fragment.
 *  data-gate-route wird immer als Basis-Route gespeichert —
 *  overlay.js liest daraus die Route für Sprachwechsel-Reaktion. */
function _lockOverlayHTML(route) {
  const base        = getProtectedBase(route) ?? route;
  const titleKey    = getLockTitleKey(base);
  const messageKey  = getLockMessageKey(base);
  const titleFb     = getLockTitle(base);
  const messageFb   = getLockMessage(base);

  return `
    <div class="locked-overlay"
         data-gate-route="${base}"
         data-gate-title-key="${titleKey}"
         data-gate-message-key="${messageKey}"
         data-gate-title-fallback="${titleFb}"
         data-gate-message-fallback="${messageFb}">
      <i class="fas fa-lock"></i>
    </div>`;
}

/** Overlay für WimSection-Karten (article hat position:relative). */
export function renderLockOverlay(route) {
  if (!isRouteProtected(route)) return '';
  return _lockOverlayHTML(route);
}

/** Geschützter Button für Sidebar-Navigation (kein Inline-Style). */
export function renderProtectedButton(route, innerHtml, additionalClasses = '') {
  if (!isRouteProtected(route)) {
    return `<button class="${additionalClasses}" data-link="${route}">${innerHtml}</button>`;
  }
  return `
    <div class="lock-wrap">
      <button class="${additionalClasses}" data-link="${route}">${innerHtml}</button>
      ${_lockOverlayHTML(route)}
    </div>`;
}

/** Geschützter Footer-Link als <li> (kein Inline-Style). */
export function renderProtectedFooterLink(route, label, i18nKey) {
  const i18nAttr = i18nKey ? ` data-i18n="${i18nKey}"` : '';

  if (!isRouteProtected(route)) {
    return `<li><button class="footer-btn" data-link="${route}"${i18nAttr}>${label}</button></li>`;
  }
  return `
    <li class="lock-wrap footer-lock-item">
      <button class="footer-btn" data-link="${route}"${i18nAttr}>${label}</button>
      ${_lockOverlayHTML(route)}
    </li>`;
}