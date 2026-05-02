// components/Sidebar.js
import { CONFIG } from '../core/config.js';
import { renderProtectedButton } from '../core/routes/protected.js';

export function sidebarHTML() {
  return `
    <div id="sidebarOverlay" class="sidebar-overlay"></div>

    <div class="sidebar-panel">
      <div class="sidebar-head">
        <span data-i18n="sidebar.title">Navigation</span>
        <button id="sidebarClose" class="sidebar-close" aria-label="Schließen">
          <i class="fas fa-times"></i>
        </button>
      </div>

      <nav class="sidebar-nav">
        <div class="sidebar-section-label" data-i18n="sidebar.section.pages">Seiten</div>

        ${renderProtectedButton(CONFIG.ROUTES.HOME, '<i class="fas fa-home"></i><span data-i18n="sidebar.home">Willkommen</span>', 'sidebar-link')}
        ${renderProtectedButton(CONFIG.ROUTES.PORTFOLIO, '<i class="fas fa-briefcase"></i><span data-i18n="sidebar.portfolio">Portfolio</span>', 'sidebar-link')}

        <div class="sidebar-divider"></div>
        <div class="sidebar-section-label" data-i18n="sidebar.section.projects">Projekte</div>

        ${renderProtectedButton(CONFIG.ROUTES.BLENDER,       '<i class="fas fa-cube"></i><span data-i18n="sidebar.blender">Blender 3D</span>',                 'sidebar-link')}
        ${renderProtectedButton(CONFIG.ROUTES.LERNSETTEL,    '<i class="fas fa-book-open"></i><span data-i18n="sidebar.lernzettel">Lernressourcen</span>',      'sidebar-link')}
        ${renderProtectedButton(CONFIG.ROUTES.POEMS,      '<i class="fas fa-feather-alt"></i><span data-i18n="sidebar.gedichte">Gedichte</span>',            'sidebar-link')}
        ${renderProtectedButton(CONFIG.ROUTES.SCHEDULECRUNCH, '<i class="fas fa-calendar-alt"></i><span data-i18n="sidebar.planner">Schedule Crunch</span>',    'sidebar-link')}

        <div class="sidebar-divider"></div>
        <div class="sidebar-section-label" data-i18n="sidebar.section.social">Social</div>
        <a class="sidebar-link" href="https://github.com/Baadjid" target="_blank" rel="noopener">
          <i class="fab fa-github"></i><span>GitHub</span>
        </a>
        <a class="sidebar-link" href="https://www.linkedin.com/feed/" target="_blank" rel="noopener">
          <i class="fab fa-linkedin"></i><span>LinkedIn</span>
        </a>
        <a class="sidebar-link" href="https://www.instagram.com/esencia_silvestre61/" target="_blank" rel="noopener">
          <i class="fab fa-instagram"></i><span>Instagram</span>
        </a>
        <a class="sidebar-link" href="https://www.twitch.tv/baadjid" target="_blank" rel="noopener">
          <i class="fab fa-twitch"></i><span>Twitch</span>
        </a>
        <a class="sidebar-link" href="https://www.tiktok.com/@baadjid" target="_blank" rel="noopener">
          <i class="fab fa-tiktok"></i><span>TikTok</span>
        </a>
      </nav>

      <div class="sidebar-foot">
        <button id="themeBtnSidebar" class="theme-toggle-btn">
          <i class="fas fa-sun"></i>
          <span class="theme-label">Light Mode</span>
        </button>

        <div id="langSection" style="display:none">
          <div class="lang-label" data-i18n="sidebar.lang.label">Sprache</div>
          <div class="lang-grid">
            <button class="lang-btn active" data-lang="de">🇩🇪 DE</button>
            <button class="lang-btn" data-lang="ru">🇷🇺 RU</button>
            <button class="lang-btn" data-lang="en">🇺🇸 EN</button>
            <button class="lang-btn" data-lang="es">🇪🇸 ES</button>
          </div>
        </div>
      </div>
    </div>
  `;
}