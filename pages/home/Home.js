// pages/home/Home.js
// Startseite (Willkommen) — mit i18n-Integration

import { initScrollReveal, initStatCounters, initActivitiesScroll } from '../../shared/js/index.js';
import { footerHTML } from '../../components/Footer.js';
import { renderWimSection, initWimTabs } from '../../components/WimSection.js';
import { i18n } from '../../shared/js/i18n.js';
import { de, en, ru, es } from './js/translation/translation.js';
import { initBackground } from '../../shared/js/background.js';

export default class HomePage {
  constructor(router) {
    this.router = router;
    this._holoCleanup = null;
    this._canvasCleanup = null;
  }

  render() {
    // i18n-Bundles laden
    i18n.load({ de, en, ru, es });

    const el = document.createElement('div');
    el.className = 'page page-home';

    // Styles nachladen
    if (!document.querySelector('link[href*="home.css"]')) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'pages/home/styles/home.css';
      document.head.appendChild(link);
    }

    el.innerHTML = this._getHTML();
    return el;
  }

  _getHTML() {
    return `
      <!-- HERO mit INFO-CARD -->
      <section class="home-hero" id="home">
        <div class="section-container">
          <div class="home-hero-grid">

            <!-- Hero Text -->
            <div class="home-hero-content reveal">
              <h1>
                <span data-i18n="home.hero.h1.line1">Kreative</span>
                <span class="highlight" data-i18n="home.hero.h1.line2">Webentwicklung</span>
                <span data-i18n="home.hero.h1.line3">für dein Projekt</span>
              </h1>
              <p class="hero-description" data-i18n="home.hero.description">
                Ich bin Kirill — Frontend-Entwickler, 3D Artist und Content Creator aus Deutschland.
                Ich baue Websites, die nicht nur funktionieren, sondern begeistern.
              </p>
              <div class="hero-chips">
                <span class="hero-chip"><i class="fas fa-code"></i><span data-i18n="home.hero.chip.frontend">Frontend Dev</span></span>
                <span class="hero-chip"><i class="fas fa-cube"></i><span data-i18n="home.hero.chip.3d">3D / Blender</span></span>
                <span class="hero-chip"><i class="fas fa-film"></i><span data-i18n="home.hero.chip.content">Content Creator</span></span>
                <span class="hero-chip"><i class="fas fa-graduation-cap"></i><span data-i18n="home.hero.chip.abitur">Abitur 2026</span></span>
              </div>
              <div class="hero-buttons">
                <button class="btn-primary" data-link="/portfolio">
                  <span data-i18n="home.hero.btn.portfolio">Portfolio ansehen</span>
                  <i class="fas fa-arrow-right"></i>
                </button>
                <button class="btn-secondary" data-link="/portfolio" data-anchor="contact">
                  <span data-i18n="home.hero.btn.contact">Kontakt aufnehmen</span>
                </button>
              </div>
            </div>

            <!-- INFO-CARD -->
            <div class="card-section reveal stagger-2">
              <div class="card-wrapper" id="holoCard">
                <div id="card">
                  <div class="inside">
                    <div class="card__shine"></div>
                    <div class="card__glare"></div>

                    <!-- Avatar Content -->
                    <div class="card__content avatar__content">
                      <img class="avatar"
                          <img src="https://res.cloudinary.com/dglahdmrm/image/upload/q_auto/f_auto/v1775611260/profile_flnnc6.png"
                          alt="Kirill Heldt"
                          onerror="this.style.display='none'; this.parentElement.querySelector('.avatar-placeholder').style.display='flex';">
                      <div class="avatar-placeholder" style="display: none;">
                        <span>KH</span>
                      </div>
                    </div>

                    <!-- Details Content -->
                    <div class="card__content">
                      <div class="card__details">
                        <h3 data-i18n="home.card.name">Kirill Heldt</h3>
                        <p data-i18n="home.card.role">Frontend Dev & 3D Artist</p>

                        <div class="card-info-content">
                          <div class="card-info-row">
                            <i class="fas fa-map-marker-alt"></i>
                            <span data-i18n="home.card.location">Deutschland</span>
                          </div>
                          <div class="card-info-row">
                            <i class="fas fa-globe"></i>
                            <span data-i18n="home.card.languages">DE · RU · EN · ES</span>
                          </div>
                        </div>

                        <div class="card-social-row">
                          <a href="https://www.twitch.tv/baadjid" target="_blank" rel="noopener" class="social-link-icon twitch" title="Twitch">
                            <i class="fab fa-twitch"></i>
                          </a>
                          <a href="https://www.tiktok.com/@baadjid" target="_blank" rel="noopener" class="social-link-icon tiktok" title="TikTok">
                            <i class="fab fa-tiktok"></i>
                          </a>
                          <a href="https://www.instagram.com/esencia_silvestre61/" target="_blank" rel="noopener" class="social-link-icon instagram" title="Instagram">
                            <i class="fab fa-instagram"></i>
                          </a>
                          <a href="https://github.com/Baadjid" target="_blank" rel="noopener" class="social-link-icon github" title="GitHub">
                            <i class="fab fa-github"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      ${renderWimSection()}

      ${footerHTML(this.router)}
    `;
  }

  _initContactButton() {
    const contactBtn = document.querySelector('[data-link="/portfolio"][data-anchor="contact"]');

    if (contactBtn) {
      contactBtn.addEventListener('click', (e) => {
        e.preventDefault();
        window.location.hash = '/portfolio';
        sessionStorage.setItem('scrollToAnchor', 'contact');

        if (window.location.hash === '#/portfolio') {
          setTimeout(() => {
            const contactSection = document.getElementById('contact');
            if (contactSection) {
              contactSection.scrollIntoView({ behavior: 'smooth' });
            }
          }, 300);
        }
      });
    }
  }

  init() {
    // i18n initialisieren
    i18n.init();
    
    // Background initialisieren und Cleanup-Funktion speichern
    this._canvasCleanup = initBackground();
    
    initScrollReveal();
    initStatCounters();
    initActivitiesScroll();

    import('../../pages/portfolio/js/holographic-card.js').then(module => {
      this._holoCleanup = module.initHolographicCard();
    });

    initWimTabs();
    this._initContactButton();
  }

  cleanup() {
    if (this._holoCleanup) this._holoCleanup();
    if (this._canvasCleanup) this._canvasCleanup();
  }

  // Canvas-Cleanup-Funktion für den Router
  getCanvasCleanup() {
    return this._canvasCleanup;
  }
}