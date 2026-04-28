// service/overlay.js
import { authService } from './authService.js';
import { initWimTabs } from '../../shared/js/wim-tabs.js';

const GOOGLE_SVG = `<svg class="google-icon" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
  <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
  <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
  <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
  <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
</svg>`;

// ══════════════════════════════════════════════════════════════
// AUTH OVERLAY  –  Login / Register / Logout (mit WIM-Tabs)
// ══════════════════════════════════════════════════════════════
class AuthOverlay {
  constructor() {
    this._modal     = null;
    this._mode      = 'login';
    this._onSuccess = null;
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
        <!-- LOGIN / REGISTER PANEL (mit WIM-Tabs) -->
        <div id="authLoginRegisterPanel">
          <nav class="wim-tabs" id="authWimTabs" aria-label="Anmeldeoptionen">
            <button class="wim-tab active" data-wim="login">Anmelden</button>
            <button class="wim-tab" data-wim="register">Registrieren</button>
          </nav>
          <div class="wim-category" data-wim-cat="login">
            <input class="auth-field" id="authEmail" type="email"
                   placeholder="E-Mail" autocomplete="email">
            <input class="auth-field" id="authPassword" type="password"
                   placeholder="Passwort" autocomplete="current-password">
          </div>
          <div class="wim-category hidden" data-wim-cat="register">
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
        <!-- LOGOUT PANEL -->
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
    this._initWimTabs();
  }

  _initWimTabs() {
    // WIM-Tabs initialisieren und auf Wechsel reagieren
    const container = this._modal.querySelector('#authWimTabs').parentElement;
    initWimTabs(container);
    // Eigene Logik für Tab-Wechsel (Felder leeren, Submit-Button anpassen)
    const tabs = this._modal.querySelectorAll('.wim-tab');
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const target = tab.getAttribute('data-wim');
        this._mode = target;
        this._setError('');
        // Submit-Button Text ändern
        const submitBtn = document.getElementById('authSubmitBtn');
        if (target === 'register') {
          submitBtn.textContent = 'Registrieren';
        } else {
          submitBtn.textContent = 'Anmelden';
        }
        // Passwort-Felder autocomplete anpassen
        const pwdField = this._modal.querySelector('#authPassword');
        const pwdRegField = this._modal.querySelector('#authPasswordRegister');
        if (target === 'register') {
          if (pwdField) pwdField.setAttribute('autocomplete', 'new-password');
          if (pwdRegField) pwdRegField.setAttribute('autocomplete', 'new-password');
        } else {
          if (pwdField) pwdField.setAttribute('autocomplete', 'current-password');
          if (pwdRegField) pwdRegField.setAttribute('autocomplete', 'current-password');
        }
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
    if (result.success) { this.hide(); this._onSuccess?.('login'); }
    else                { this._setError(result.error); }
  }

  async _handleGoogle() {
    this._setError('');
    this._setLoading(true);
    const result = await authService.loginWithGoogle();
    this._setLoading(false);
    if (result.success) { this.hide(); this._onSuccess?.('login'); }
    else                { this._setError(result.error); }
  }

  async _handleLogout() {
    this._setLogoutError('');
    const result = await authService.logout();
    if (result.success) { this.hide(); this._onSuccess?.('logout'); }
    else                { this._setLogoutError(result.error); }
  }

  _setError(msg)        { const el = document.getElementById('authError');       if (el) el.textContent = msg; }
  _setLogoutError(msg)  { const el = document.getElementById('authLogoutError'); if (el) el.textContent = msg; }
  _setLoading(v) {
    const b  = document.getElementById('authSubmitBtn'); if (b)  b.disabled  = v;
    const gb = document.getElementById('authGoogleBtn');  if (gb) gb.disabled = v;
  }

  show(mode = 'login', onSuccess = null) {
    this._onSuccess = onSuccess;
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

    // Login/Register Modus
    loginPanel.style.display  = '';
    logoutPanel.style.display = 'none';
    // Aktiven Tab auf login setzen
    const loginTab = this._modal.querySelector('.wim-tab[data-wim="login"]');
    if (loginTab) loginTab.click();
    // Felder leeren
    const fields = ['authEmail', 'authPassword', 'authEmailRegister', 'authPasswordRegister', 'authDisplayName'];
    fields.forEach(id => { const f = document.getElementById(id); if (f) f.value = ''; });
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
    this._modal = null;
    this._create();
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
    document.getElementById('gateCancelBtn').addEventListener('click', () => {
      this.hide();
      if (window.history.length > 1) window.history.back();
      else window.location.hash = '#/';
    });
    this._modal.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') { this.hide(); if (window.history.length > 1) window.history.back(); }
    });
  }

  show(title, message) {
    if (title)   document.getElementById('gateTitle').textContent  = title;
    if (message) document.getElementById('gateMessage').innerHTML  = message;
    this._modal.classList.add('active');
    setTimeout(() => document.getElementById('gateLoginBtn')?.focus(), 100);
  }

  hide() { this._modal.classList.remove('active'); }
}

export const authOverlay = new AuthOverlay();
export const gateOverlay = new GateOverlay();