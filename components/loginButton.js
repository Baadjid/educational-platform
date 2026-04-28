// components/loginButton.js
// GSAP ist global via <script src="gsap.min.js"> verfügbar.

import { authService } from '../service/auth/authService.js';
import { authOverlay  } from '../service/auth/overlay.js';

function token(name) {
  return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
}

export class LoginButton {
  constructor(containerId) {
    this.container   = document.getElementById(containerId);
    if (!this.container) return;
    this.isLoggedIn  = false;
    this.animationTl = null;
    this._injectGoo();
    this._createParticleContainer();
    this.render();
    this._bindEvents();
    this._subscribeAuth();
  }

  _injectGoo() {
    if (document.querySelector('.goo-filter')) return;
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('class', 'goo-filter');
    Object.assign(svg.style, { position:'absolute', width:'0', height:'0', overflow:'hidden' });
    svg.innerHTML = `<defs><filter id="goo">
      <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur"/>
      <feColorMatrix in="blur" mode="matrix"
        values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo"/>
      <feComposite in="SourceGraphic" in2="goo"/>
    </filter></defs>`;
    document.body.prepend(svg);
  }

  _createParticleContainer() {
    if (!document.getElementById('particle-container')) {
      const el = document.createElement('div');
      el.id = 'particle-container';
      document.body.appendChild(el);
    }
  }

  render() {
    this.container.innerHTML = `
      <div class="login-btn__wrapper">
        <button class="login-btn" id="loginCollisionBtn" aria-label="Login / Logout">
          <i class="fas fa-sign-in-alt dynamic-icon" id="loginDynamicIcon"></i>
          <span class="rollout-content">
            <span class="rollout-text" id="loginRolloutText">LOGIN</span>
          </span>
        </button>
        <div class="login-btn__effect-container">
          <div class="collision-blob blob-left"  id="loginBlobLeft"></div>
          <div class="collision-blob blob-right" id="loginBlobRight"></div>
          <div class="effect-button"             id="loginEffectBtn"></div>
        </div>
      </div>`;
    this._btn       = document.getElementById('loginCollisionBtn');
    this._blobLeft  = document.getElementById('loginBlobLeft');
    this._blobRight = document.getElementById('loginBlobRight');
    this._effectBtn = document.getElementById('loginEffectBtn');
  }

  _bindEvents() {
    this._btn.addEventListener('click', (e) => { e.preventDefault(); this._startCollision(); });
  }

  _subscribeAuth() {
    authService.onAuthStateChange((loggedIn) => {
      this.isLoggedIn = loggedIn;
      this._updateUI();
    });
  }

  _updateUI() {
    const icon = document.getElementById('loginDynamicIcon');
    const text = document.getElementById('loginRolloutText');
    if (!icon || !text) return;
    icon.className   = this.isLoggedIn ? 'fas fa-sign-out-alt dynamic-icon' : 'fas fa-sign-in-alt dynamic-icon';
    text.textContent = this.isLoggedIn ? 'LOGOUT' : 'LOGIN';
  }

  _burstParticles(cx, cy, count = 48) {
    const cont = document.getElementById('particle-container');
    cont.querySelectorAll('.particle').forEach(p => p.remove());
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = 260 + Math.random() * 480;
      const size  = 4 + Math.random() * 12;
      const p     = document.createElement('div');
      p.className     = 'particle';
      p.style.cssText = `width:${size}px;height:${size}px;left:${cx}px;top:${cy}px;opacity:.9;`;
      cont.appendChild(p);
      gsap.to(p, {
        duration: 0.5 + Math.random() * 0.55,
        x: Math.cos(angle) * speed, y: Math.sin(angle) * speed,
        opacity: 0, scale: 0.1, rotation: Math.random() * 360,
        ease: 'power2.out', onComplete: () => p.remove(),
      });
    }
  }

  _startCollision() {
    if (this.animationTl) this.animationTl.kill();
    const primaryHex  = token('--primary');
    const primaryDark = token('--primary-dark');
    const bgElevated  = token('--bg-elevated');
    const rect = this._btn.getBoundingClientRect();
    const cx   = rect.left + rect.width  / 2;
    const cy   = rect.top  + rect.height / 2;

    gsap.set([this._blobLeft, this._blobRight], { opacity: 1, scale: 1 });
    gsap.set(this._blobLeft,  { left:'10%',  top:'40%',    x:'-50%', y:'-50%' });
    gsap.set(this._blobRight, { right:'10%', bottom:'40%', x:'50%',  y:'50%'  });
    gsap.set(this._effectBtn, { scaleY: 1, backgroundColor: bgElevated });

    const tl = gsap.timeline({ onComplete: () => {
      gsap.set([this._blobLeft, this._blobRight], { opacity: 0 });
      authOverlay.show(this.isLoggedIn ? 'logout' : 'login', () => {
        gsap.to(this._btn, { scale: 1.05, duration: 0.15, yoyo: true, repeat: 1 });
      });
    }});

    tl.to(this._blobLeft,  { left:'50%',  top:'50%',    x:'-50%', y:'-50%', scale:1.7, duration:0.45, ease:'back.inOut(0.8)', backgroundColor: primaryHex }, 0);
    tl.to(this._blobRight, { right:'50%', bottom:'50%', x:'50%',  y:'50%',  scale:1.7, duration:0.45, ease:'back.inOut(0.8)', backgroundColor: primaryHex }, 0);
    tl.to(this._effectBtn, { scaleY: 1.6, backgroundColor: primaryHex, duration: 0.2, ease: 'power1.inOut' }, 0.2);
    tl.to([this._blobLeft, this._blobRight], { scale: 2.9, duration: 0.2, ease: 'elastic.out(1,0.3)', backgroundColor: primaryDark }, '+=0.08');
    tl.call(() => {
      this._burstParticles(cx, cy, 52);
      gsap.to(this._btn, { x: 3, duration: 0.06, yoyo: true, repeat: 3, ease: 'none' });
    }, null, null, '+=0.02');
    tl.to(this._blobLeft,  { left:'-25%',  top:'-15%',    scale: 0.3, opacity: 0, duration: 0.5, ease: 'power2.in', x:'-50%', y:'-50%' }, '+=0.1');
    tl.to(this._blobRight, { right:'-25%', bottom:'-15%', scale: 0.3, opacity: 0, duration: 0.5, ease: 'power2.in', x:'50%',  y:'50%'  }, '<');
    tl.to(this._effectBtn, { scaleY: 1, backgroundColor: bgElevated, duration: 0.6, ease: 'elastic.out(0.9,0.5)' }, '-=0.3');
    tl.to(this._btn, { scale: 0.96, duration: 0.1, yoyo: true, repeat: 1, ease: 'power2.out' }, 0);

    this.animationTl = tl;
  }
}