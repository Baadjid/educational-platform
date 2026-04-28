// components/Footer.js
import { CONFIG } from '../core/config.js';

export function footerHTML(router, options = {}) {
  const { extraColumn = null } = options;

  const renderItem = (item) => {
    const i18nAttr = item.i18n ? ` data-i18n="${item.i18n}"` : '';

    if (item.href) {
      return `<li><a href="${item.href}" target="_blank" rel="noopener noreferrer"${i18nAttr}>${item.label}</a></li>`;
    }
    if (item.link) {
      return `<li><button class="footer-btn" data-link="${item.link}"${i18nAttr}>${item.label}</button></li>`;
    }
    return '';
  };

  const extraColumnHTML = extraColumn ? `
    <div class="footer-column">
      <h4${extraColumn.titleI18n ? ` data-i18n="${extraColumn.titleI18n}"` : ''}>${extraColumn.title}</h4>
      <ul>
        ${extraColumn.items.map(renderItem).join('\n        ')}
      </ul>
    </div>
  ` : '';

  return `
    <footer class="footer">
      <div class="footer-container">

        <div class="footer-main">

          <!-- BRAND -->
          <div class="footer-brand">
            <a class="logo" data-link="/">
              <div class="logo-icon">
                <img src="https://res.cloudinary.com/dglahdmrm/image/upload/q_auto/f_auto/v1775611280/Kirill_Heldt_Logo_rrbwgj.png" alt="Logo"
                     alt="Kirill Heldt"
                     onerror="this.parentElement.innerHTML='<i class=\\'fas fa-k\\'></i>'">
              </div>
              <span class="logo-name">Kirill Heldt</span>
            </a>

            <p class="footer-description" data-i18n="footer.description">
              Frontend Developer & 3D Artist — Performance, 3D und klares Design.
            </p>

            <div class="footer-social">
              <a href="${CONFIG.SOCIAL.GITHUB}" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i></a>
              <a href="${CONFIG.SOCIAL.LINKEDIN}" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin"></i></a>
              <a href="${CONFIG.SOCIAL.TWITCH}" target="_blank" rel="noopener noreferrer"><i class="fab fa-twitch"></i></a>
              <a href="${CONFIG.SOCIAL.TIKTOK}" target="_blank" rel="noopener noreferrer"><i class="fab fa-tiktok"></i></a>
              <a href="${CONFIG.SOCIAL.INSTAGRAM}" target="_blank" rel="noopener noreferrer"><i class="fab fa-instagram"></i></a>
            </div>
          </div>

          <!-- RECHTER BLOCK -->
          <div class="footer-right-block">

            <div class="footer-column">
              <h4 data-i18n="footer.nav.title">Navigation</h4>
              <ul>
                <li><button class="footer-btn" data-link="${CONFIG.ROUTES.HOME}" data-i18n="footer.nav.home">Startseite</button></li>
                <li><button class="footer-btn" data-link="${CONFIG.ROUTES.PORTFOLIO}" data-i18n="footer.nav.portfolio">Portfolio</button></li>
                <li><button class="footer-btn" data-link="${CONFIG.ROUTES.BLENDER}" data-i18n="footer.nav.blender">3D Projekte</button></li>
                <li><button class="footer-btn" data-link="${CONFIG.ROUTES.POEMS}" data-i18n="footer.nav.gedichte">Gedichte</button></li>
                <li><button class="footer-btn" data-link="${CONFIG.ROUTES.LERNSETTEL}" data-i18n="footer.nav.lernzettel">Lernressourcen</button></li>
                <li><button class="footer-btn" data-link="/projekte/study-planner" data-i18n="footer.nav.planner">Schedule Crunch</button></li>
              </ul>
            </div>

            <div class="footer-column">
              <h4 data-i18n="footer.contact.title">Kontakt & Netzwerke</h4>
              <ul>
                <li><a href="mailto:${CONFIG.CONTACT.EMAIL}" data-i18n="footer.contact.email">E-Mail</a></li>
                <li><a href="${CONFIG.SOCIAL.GITHUB}" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                <li><a href="${CONFIG.SOCIAL.LINKEDIN}" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                <li><a href="${CONFIG.SOCIAL.TWITCH}" target="_blank" rel="noopener noreferrer">Twitch</a></li>
                <li><a href="${CONFIG.SOCIAL.TIKTOK}" target="_blank" rel="noopener noreferrer">TikTok</a></li>
                <li><a href="${CONFIG.SOCIAL.INSTAGRAM}" target="_blank" rel="noopener noreferrer">Instagram</a></li>
              </ul>
            </div>

            ${extraColumnHTML}

          </div>
        </div>

        <div class="footer-bottom">
          <p data-i18n="footer.copyright">© 2026 Kirill Heldt · Alle Rechte vorbehalten</p>
          <div class="footer-legal">
            <a data-link="${CONFIG.ROUTES.IMPRESSUM}" data-i18n="footer.impressum">Impressum</a>
            <a data-link="${CONFIG.ROUTES.DATENSCHUTZ}" data-i18n="footer.datenschutz">Datenschutz</a>
          </div>
        </div>

      </div>
    </footer>
  `;
}