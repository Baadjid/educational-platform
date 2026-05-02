// service/auth/overlay.js
import { authService } from './authService.js';
import { getLockTitle, getLockMessage, getProtectedBase } from '../../core/routes/protected.js';


const GOOGLE_SVG = `<svg class="google-icon" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
  <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
  <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
  <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
  <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
</svg>`;

// ── Globaler Click-Handler für .locked-overlay (Karten / Sidebar / Footer) ──
document.addEventListener('click', (e) => {
  const overlay = e.target.closest('.locked-overlay');
  if (!overlay) return;
  e.preventDefault();
  e.stopPropagation();

  // Route direkt aus data-gate-route lesen (wird von protected.js immer gesetzt)
  const route = overlay.dataset.gateRoute ?? null;

  gateOverlay.show(
    getLockTitle(route)   || overlay.dataset.gateTitleFallback   || 'Zugang gesperrt',
    getLockMessage(route) || overlay.dataset.gateMessageFallback || 'Dieser Bereich ist nur für angemeldete Nutzer zugänglich.',
    { fromRouteGuard: false, route },
  );
});

// ── Auth-Tabs Init ─────────────────────────────────────────────
function initAuthTabs(container) {
  const tabsEl = container.querySelector('.wim-tabs[data-auth-tabs]');
  if (!tabsEl) return;

  const tabs = tabsEl.querySelectorAll('.wim-tab[data-auth]');
  if (!tabs.length) return;

  let slider = tabsEl.querySelector('.wim-tab-slider');
  if (!slider) {
    slider = document.createElement('span');
    slider.className = 'wim-tab-slider';
    tabsEl.appendChild(slider);
  }

  const positionSlider = (tab) => {
    slider.style.transform = `translateX(${tab.offsetLeft}px)`;
    slider.style.width     = `${tab.getBoundingClientRect().width}px`;
  };

  const smoothScroll = (target, toLeft, duration = 400) => {
    const start     = target.scrollLeft;
    const delta     = toLeft - start;
    const startTime = performance.now();
    const ease      = t => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    const step = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      target.scrollLeft = start + delta * ease(progress);
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };

  const centerTab = (tab) => {
    const to = tab.offsetLeft + tab.offsetWidth / 2 - tabsEl.clientWidth / 2;
    smoothScroll(tabsEl, to);
  };

  const activatePanel = (key) => {
    container.querySelectorAll('[data-auth-cat]').forEach(panel => {
      const isTarget = panel.dataset.authCat === key;
      panel.classList.toggle('hidden', !isTarget);
      panel.classList.toggle('active',  isTarget);
    });
  };

  const initial = tabsEl.querySelector('.wim-tab.active') || tabs[0];
  if (initial) {
    tabs.forEach(t => t.classList.remove('active'));
    initial.classList.add('active');
    activatePanel(initial.dataset.auth);
    setTimeout(() => positionSlider(initial), 50);
  }

  window.addEventListener('resize', () => {
    const active = tabsEl.querySelector('.wim-tab.active');
    if (active) positionSlider(active);
  });

  tabs.forEach((tab, index) => {
    tab.addEventListener('click', function () {
      const key = this.dataset.auth;
      tabs.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      positionSlider(this);
      centerTab(this);
      activatePanel(key);
    });

    tab.addEventListener('keydown', function (e) {
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
}

// ══════════════════════════════════════════════════════════════
// AUTH OVERLAY  –  Login / Register / Logout
// ══════════════════════════════════════════════════════════════
class AuthOverlay {
  constructor() {
    this._modal = null;
    this._mode  = 'login';
    this._create();
  }

  _create() {
    if (document.getElementById('authOverlay')) {
      this._modal = document.getElementById('authOverlay');
      return;
    }
    const el = document.createElement('div');
    el.id        = 'authOverlay';
    el.className = 'auth-overlay';
    el.innerHTML = `
      <div class="auth-card" role="dialog" aria-modal="true">
        <div id="authLoginRegisterPanel">

          <nav class="wim-tabs" data-auth-tabs aria-label="Anmeldeoptionen">
            <button class="wim-tab active" data-auth="login">Anmelden</button>
            <button class="wim-tab"        data-auth="register">Registrieren</button>
          </nav>

          <div class="wim-category" data-auth-cat="login">
            <input class="auth-field" id="authEmail" type="email"
                   placeholder="E-Mail" autocomplete="email">
            <input class="auth-field" id="authPassword" type="password"
                   placeholder="Passwort" autocomplete="current-password">
          </div>
          <div class="wim-category hidden" data-auth-cat="register">
            <input class="auth-field" id="authDisplayName" type="text"
                   placeholder="Anzeigename (optional)" autocomplete="name">
            <input class="auth-field" id="authEmailRegister" type="email"
                   placeholder="E-Mail" autocomplete="email">
            <input class="auth-field" id="authPasswordRegister" type="password"
                   placeholder="Passwort" autocomplete="new-password">
          </div>

          <p class="auth-error" id="authError" aria-live="polite"></p>
          <div class="auth-actions">
            <button class="auth-submit-btn" id="authSubmitBtn">Anmelden</button>
            <div class="auth-divider">oder</div>
            <button class="auth-google-btn" id="authGoogleBtn">
              ${GOOGLE_SVG} Mit Google fortfahren
            </button>
            <button class="auth-cancel-btn" id="authCancelBtn">Abbrechen</button>
          </div>
        </div>

        <div id="authLogoutPanel" style="display:none;">
          <div class="auth-logout-panel">
            <div class="auth-logout-avatar" id="authAvatarIcon">
              <i class="fas fa-user"></i>
            </div>
            <p class="auth-logout-name"  id="authUserName">–</p>
            <p class="auth-logout-email" id="authUserEmail">–</p>
          </div>
          <p class="auth-error" id="authLogoutError" aria-live="polite"></p>
          <div class="auth-actions">
            <button class="auth-submit-btn" id="authLogoutBtn">Abmelden</button>
            <button class="auth-cancel-btn" id="authLogoutCancelBtn">Abbrechen</button>
          </div>
        </div>
      </div>`;
    document.body.appendChild(el);
    this._modal = el;
    this._bindEvents();
    initAuthTabs(this._modal);
    this._bindTabCallbacks();
  }

  _bindTabCallbacks() {
    const tabs = this._modal.querySelectorAll('.wim-tab[data-auth]');
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const target = tab.dataset.auth;
        this._mode = target;
        this._setError('');
        document.getElementById('authSubmitBtn').textContent =
          target === 'register' ? 'Registrieren' : 'Anmelden';
        const ac = target === 'register' ? 'new-password' : 'current-password';
        this._modal.querySelector('#authPassword')?.setAttribute('autocomplete', ac);
        this._modal.querySelector('#authPasswordRegister')?.setAttribute('autocomplete', ac);
      });
    });
  }

  _bindEvents() {
    document.getElementById('authSubmitBtn').addEventListener('click', () => this._handleSubmit());
    document.getElementById('authGoogleBtn').addEventListener('click', () => this._handleGoogle());
    document.getElementById('authCancelBtn').addEventListener('click', () => this.hide());
    document.getElementById('authLogoutBtn').addEventListener('click', () => this._handleLogout());
    document.getElementById('authLogoutCancelBtn').addEventListener('click', () => this.hide());
    this._modal.addEventListener('click', (e) => { if (e.target === this._modal) this.hide(); });
    this._modal.addEventListener('keydown', (e) => {
      if (e.key === 'Enter')  { this._mode === 'logout' ? this._handleLogout() : this._handleSubmit(); }
      if (e.key === 'Escape') { this.hide(); }
    });
  }

  async _handleSubmit() {
    let email, password, name;
    if (this._mode === 'register') {
      email    = document.getElementById('authEmailRegister').value.trim();
      password = document.getElementById('authPasswordRegister').value;
      name     = document.getElementById('authDisplayName').value.trim();
    } else {
      email    = document.getElementById('authEmail').value.trim();
      password = document.getElementById('authPassword').value;
      name     = '';
    }
    this._setError('');
    this._setLoading(true);
    const result = this._mode === 'register'
      ? await authService.register(email, password, name)
      : await authService.login(email, password);
    this._setLoading(false);
    if (result.success) { this.hide(); window.location.reload(); }
    else                { this._setError(result.error); }
  }

  async _handleGoogle() {
    this._setError('');
    this._setLoading(true);
    const result = await authService.loginWithGoogle();
    this._setLoading(false);
    if (result.success) { this.hide(); window.location.reload(); }
    else                { this._setError(result.error); }
  }

  async _handleLogout() {
    this._setLogoutError('');
    const result = await authService.logout();
    if (result.success) { this.hide(); window.location.reload(); }
    else                { this._setLogoutError(result.error); }
  }

  _setError(msg)        { const el = document.getElementById('authError');       if (el) el.textContent = msg; }
  _setLogoutError(msg)  { const el = document.getElementById('authLogoutError'); if (el) el.textContent = msg; }
  _setLoading(v) {
    const b  = document.getElementById('authSubmitBtn'); if (b)  b.disabled  = v;
    const gb = document.getElementById('authGoogleBtn');  if (gb) gb.disabled = v;
  }

  show(mode = 'login') {
    this._setError('');
    this._setLogoutError('');
    const loginPanel  = document.getElementById('authLoginRegisterPanel');
    const logoutPanel = document.getElementById('authLogoutPanel');

    if (mode === 'logout') {
      this._mode = 'logout';
      loginPanel.style.display  = 'none';
      logoutPanel.style.display = '';
      const user = authService.currentUser;
      document.getElementById('authUserName').textContent  = user?.displayName || 'Kein Name';
      document.getElementById('authUserEmail').textContent = user?.email || '';
      document.getElementById('authAvatarIcon').innerHTML  = user?.photoURL
        ? `<img src="${user.photoURL}" alt="Avatar" style="width:100%;height:100%;border-radius:50%;object-fit:cover;">`
        : '<i class="fas fa-user"></i>';
      this._modal.classList.add('active');
      setTimeout(() => document.getElementById('authLogoutBtn')?.focus(), 100);
      return;
    }

    loginPanel.style.display  = '';
    logoutPanel.style.display = 'none';

    const loginTab = this._modal.querySelector('.wim-tab[data-auth="login"]');
    if (loginTab) loginTab.click();

    ['authEmail', 'authPassword', 'authEmailRegister', 'authPasswordRegister', 'authDisplayName']
      .forEach(id => { const f = document.getElementById(id); if (f) f.value = ''; });

    this._modal.classList.add('active');
    setTimeout(() => document.getElementById('authEmail')?.focus(), 100);
  }

  hide() { this._modal.classList.remove('active'); }
}

// ══════════════════════════════════════════════════════════════
// GATE OVERLAY  –  "Bitte anmelden"
// ══════════════════════════════════════════════════════════════
class GateOverlay {
  constructor() {
    this._modal          = null;
    this._fromRouteGuard = false;
    this._route          = null;  // Basis-Route → Sprachwechsel-Reaktion
    this._create();
    this._bindLanguageUpdate();
  }

  _create() {
    if (document.getElementById('gateOverlay')) {
      this._modal = document.getElementById('gateOverlay');
      return;
    }
    const el = document.createElement('div');
    el.id        = 'gateOverlay';
    el.className = 'gate-overlay';
    el.innerHTML = `
      <div class="gate-card" role="dialog" aria-modal="true">
        <i class="fas fa-lock gate-icon"></i>
        <h2 class="gate-title" id="gateTitle">Zugang gesperrt</h2>
        <p class="gate-message" id="gateMessage">
          Dieser Bereich ist nur für angemeldete Nutzer zugänglich.<br>
          Bitte melde dich an oder erstelle ein Konto.
        </p>
        <div class="gate-actions">
          <button class="auth-submit-btn" id="gateLoginBtn">
            <i class="fas fa-sign-in-alt" style="margin-right:8px;"></i>Jetzt anmelden
          </button>
          <button class="auth-cancel-btn" id="gateCancelBtn">Zurück</button>
        </div>
      </div>`;
    document.body.appendChild(el);
    this._modal = el;
    this._bindEvents();
  }

  _bindEvents() {
    document.getElementById('gateLoginBtn').addEventListener('click', () => {
      this.hide();
      authOverlay.show('login');
    });

    // Button, Backdrop und Escape verhalten sich identisch
    const goBack = () => {
      const navigateHome = this._fromRouteGuard;
      this.hide();
      if (navigateHome) window.location.hash = '';
    };

    document.getElementById('gateCancelBtn').addEventListener('click', goBack);
    this._modal.addEventListener('click', (e) => { if (e.target === this._modal) goBack(); });
    this._modal.addEventListener('keydown', (e) => { if (e.key === 'Escape') goBack(); });
  }

  // Bei Sprachwechsel: Titel + Nachricht live neu auflösen
  _bindLanguageUpdate() {
    window.addEventListener('languageChanged', () => {
      if (!this._modal?.classList.contains('active')) return;
      if (!this._route) return;

      document.getElementById('gateTitle').textContent   = getLockTitle(this._route);
      document.getElementById('gateMessage').textContent = getLockMessage(this._route);
    });
  }

  /**
   * @param {string}  title
   * @param {string}  message
   * @param {object}  opts
   * @param {boolean} opts.fromRouteGuard  true → goBack() navigiert zur Startseite
   * @param {string}  opts.route           Basis-Route (z.B. '/projekte/gedichte')
   */
  show(title, message, { fromRouteGuard = false, route = null } = {}) {
    this._fromRouteGuard = fromRouteGuard;
    this._route          = route ? (getProtectedBase(route) ?? route) : null;

    document.getElementById('gateTitle').textContent   = title   || 'Zugang gesperrt';
    document.getElementById('gateMessage').textContent = message || 'Dieser Bereich ist nur für angemeldete Nutzer zugänglich.';

    this._modal.classList.add('active');
    setTimeout(() => document.getElementById('gateLoginBtn')?.focus(), 100);
  }

  hide() {
    this._modal.classList.remove('active');
    this._route          = null;
    this._fromRouteGuard = false;
  }
}

export const authOverlay = new AuthOverlay();
export const gateOverlay = new GateOverlay();