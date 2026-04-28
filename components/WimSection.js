// components/WimSection.js
// Wiederverwendbare "Was ich mache" Section für Home und Portfolio
// Mit i18n-Integration

import { i18n } from '../shared/js/i18n.js';
import { de, en, ru, es } from './translation/translations.js';
import { initWimTabs } from '../shared/js/wim-tabs.js';

// ================================================================
// Icon-Map: iconKey → PNG-Pfad (für eigene Icons statt FontAwesome)
// ================================================================
const ICON_IMAGES = {
  'blender-custom':   'https://res.cloudinary.com/dglahdmrm/image/upload/q_auto/f_auto/v1775611250/blender_Icon_zam2sz.png',
  'education-custom': 'https://res.cloudinary.com/dglahdmrm/image/upload/q_auto/f_auto/v1775611250/abiunity_Icon_ddix3a.png',
  'flutter-custom':   'assets/icons/flutter_Icon.png',
};

// ================================================================
// Interne Hilfsfunktionen
// ================================================================

function _renderCardStats(stat1Key, stat1Fallback, stat2Key, stat2Fallback, stat3Key, stat3Fallback) {
  return `
    <div class="card-stats">
      <div class="stat">
        <div class="stat-value" data-i18n="${stat1Key}">${stat1Fallback}</div>
        <div class="stat-label">Status</div>
      </div>
      <div class="stat">
        <div class="stat-value" data-i18n="${stat2Key}">${stat2Fallback}</div>
        <div class="stat-label">Fokus</div>
      </div>
      <div class="stat">
        <div class="stat-value" data-i18n="${stat3Key}">${stat3Fallback}</div>
        <div class="stat-label">Bereich</div>
      </div>
    </div>
  `;
}

function _renderWimCard(size, iconKey, iconFA, badgeMod, badgeKey, badgeFallback, titleKey, titleFallback, descKey, descFallback, ctaKey, ctaFallback, href, internal, stats = '') {
  const sizeClass = size.split(' ').map(s => `card-${s}`).join(' ');

  const badge = badgeKey
    ? `<span class="card-badge${badgeMod ? ' ' + badgeMod : ''}" data-i18n="${badgeKey}">${badgeFallback}</span>`
    : '';

  const ctaBtn = ctaKey
    ? `<div class="card-footer"><span class="card-cta"><span data-i18n="${ctaKey}">${ctaFallback}</span> <i class="fas fa-arrow-right"></i></span></div>`
    : '';

  const imgSrc = ICON_IMAGES[iconKey];
  const iconContent = imgSrc
    ? `<img src="${imgSrc}" alt="${titleFallback}" class="card-icon-img" draggable="false">`
    : `<i class="${iconFA}"></i>`;

  const inner = `
    <div class="card-content">
      <div class="card-header">
        <div class="card-icon ${iconKey}">${iconContent}</div>
        ${badge}
      </div>
      <div class="card-body">
        <h3 class="card-title" data-i18n="${titleKey}">${titleFallback}</h3>
        <p class="card-description" data-i18n="${descKey}">${descFallback}</p>
        ${stats}
      </div>
      ${ctaBtn}
    </div>
  `;

  if (internal) {
    return `
      <article class="content-card ${sizeClass}">
        <button class="content-card-link" data-link="${href}">${inner}</button>
      </article>
    `;
  }

  return `
    <article class="content-card ${sizeClass}">
      <a href="${href}" class="content-card-link" target="_blank" rel="noopener noreferrer">${inner}</a>
    </article>
  `;
}

// ================================================================
// Hauptfunktion: WIM-Section rendern
// ================================================================
export function renderWimSection() {
  i18n.load({ de, en, ru, es });

  return `
    <section class="was-ich-mache" id="content">
      <div class="section-container">
        <div class="wim-container">

          <header class="wim-header reveal">
            <span class="wim-label" data-i18n="wim.label">Projekte & Präsenz</span>
            <h2 class="wim-title" data-i18n="wim.title">Was ich mache</h2>
            <p class="wim-subtitle" data-i18n="wim.subtitle">
              Gaming, Live-3D-Erstellung und digitale Produkte –
              technisch präzise, visuell durchdacht und community-orientiert.
            </p>
          </header>

          <!-- Tab Navigation -->
          <nav class="wim-tabs" role="tablist">
            <button class="wim-tab active" data-wim="all" role="tab"><i class="fas fa-th-large"></i><span data-i18n="wim.tab.all">Alle</span></button>
            <button class="wim-tab" data-wim="social" role="tab"><i class="fas fa-share-nodes"></i><span data-i18n="wim.tab.social">Social Media</span></button>
            <button class="wim-tab" data-wim="creative" role="tab"><i class="fas fa-wand-magic-sparkles"></i><span data-i18n="wim.tab.creative">Kreatives</span></button>
            <button class="wim-tab" data-wim="dev" role="tab"><i class="fas fa-code"></i><span data-i18n="wim.tab.dev">Entwicklung</span></button>
            <button class="wim-tab" data-wim="education" role="tab"><i class="fas fa-graduation-cap"></i><span data-i18n="wim.tab.education">Bildung</span></button>
          </nav>

          <!-- ===================== ALLE ===================== -->
          <div class="wim-category active" data-wim-cat="all">
            <div class="wim-grid">
              ${_renderWimCard('large featured', 'twitch', 'fab fa-twitch', 'live',
                'wim.twitch.badge', 'Live Projekt',
                'wim.twitch.title', 'Twitch Gaming & 3D Live Creation',
                'wim.twitch.desc', 'Gaming-Streams kombiniert mit der Live-Erstellung von 3D-Modellen und Designs – interaktiv, transparent und in Echtzeit.',
                'wim.twitch.cta', 'Stream ansehen',
                'https://www.twitch.tv/baadjid', false,
                _renderCardStats('wim.twitch.stat1', 'Live', 'wim.twitch.stat2', 'Gaming', 'wim.twitch.stat3', '3D'))}

              ${_renderWimCard('medium', 'blender-custom', '', '',
                'wim.blender.badge', 'Kreativprojekt',
                'wim.blender.title', '3D Visualisierung',
                'wim.blender.desc', 'Hochwertige 3D-Modelle, Animationen und Renderings mit Fokus auf Präzision und Ästhetik.',
                'wim.blender.cta', 'Galerie öffnen',
                '/projekte/blender', true)}

              ${_renderWimCard('small', 'tiktok', 'fab fa-tiktok', '',
                'wim.tiktok.badge', 'Content Kanal',
                'wim.tiktok.title', 'TikTok',
                'wim.tiktok.desc', 'Kurzvideos zu Gaming, 3D und Development – kompakt, verständlich und visuell klar strukturiert.',
                'wim.tiktok.cta', 'Kanal öffnen',
                'https://www.tiktok.com/@baadjid', false)}

              ${_renderWimCard('small', 'instagram', 'fab fa-instagram', '',
                'wim.instagram.badge', 'Content Kanal',
                'wim.instagram.title', 'Instagram',
                'wim.instagram.desc', 'Einblicke in Projekte, Designprozesse und kreative Konzepte – modern und konsistent präsentiert.',
                'wim.instagram.cta', 'Profil ansehen',
                'https://www.instagram.com/esencia_silvestre61/', false)}

              ${_renderWimCard('small', 'poetry', 'fas fa-feather-alt', '',
                'wim.poetry.badge', 'Kreativprojekt',
                'wim.poetry.title', 'Gedichte & Texte',
                'wim.poetry.desc', 'Literarische Arbeiten mit Fokus auf Ausdruck, Stil und sprachliche Klarheit.',
                'wim.poetry.cta', 'Texte lesen',
                '/projekte/gedichte', true)}

              ${_renderWimCard('wide', 'github', 'fab fa-github', '',
                'wim.github.badge', 'Open Source',
                'wim.github.title', 'Softwareprojekte',
                'wim.github.desc', 'Technische Projekte, Tools und Experimente mit sauberer Architektur und Performance-Fokus.',
                'wim.github.cta', 'Repository ansehen',
                'https://github.com/Baadjid', false)}

              ${_renderWimCard('wide', 'education-custom', '', '',
                'wim.lernzettel.badge', 'Wissensprojekt',
                'wim.lernzettel.title', 'Lernressourcen',
                'wim.lernzettel.desc', 'Strukturierte Lernunterlagen und technische Zusammenfassungen – effizient und praxisorientiert.',
                'wim.lernzettel.cta', 'Ressourcen öffnen',
                '/projekte/lernzettel', true)}

              ${_renderWimCard('small', 'flutter-custom', 'fab fa-calendar-alt', 'soon',
                'wim.planner.badge', 'In Entwicklung',
                'wim.planner.title', 'Study Planner App',
                'wim.planner.desc', 'Produktivitäts-App zur strukturierten Planung von Lern- und Projektphasen.',
                'wim.planner.cta', 'Entwicklung verfolgen',
                '#', true)}
            </div>
          </div>

          <!-- ===================== SOCIAL ===================== -->
          <div class="wim-category hidden" data-wim-cat="social">
            <div class="wim-grid">
              ${_renderWimCard('large featured', 'twitch', 'fab fa-twitch', 'live',
                'wim.twitch.badge', 'Live Projekt',
                'wim.twitch.title', 'Twitch Gaming & 3D Live Creation',
                'wim.twitch.desc.social', 'Interaktive Gaming-Sessions kombiniert mit 3D-Erstellung in Echtzeit.',
                'wim.twitch.cta', 'Stream ansehen',
                'https://www.twitch.tv/baadjid', false,
                _renderCardStats('wim.twitch.stat1', 'Live', 'wim.twitch.stat2', 'Gaming', 'wim.twitch.stat3.social', 'Community'))}

              ${_renderWimCard('medium', 'tiktok', 'fab fa-tiktok', '',
                'wim.tiktok.badge', 'Content Kanal',
                'wim.tiktok.title', 'TikTok',
                'wim.tiktok.desc.social', 'Kompakte Tutorials und kreative Kurzformate.',
                'wim.tiktok.cta', 'Kanal öffnen',
                'https://www.tiktok.com/@baadjid', false)}

              ${_renderWimCard('medium', 'instagram', 'fab fa-instagram', '',
                'wim.instagram.badge', 'Content Kanal',
                'wim.instagram.title', 'Instagram',
                'wim.instagram.desc.social', 'Kuratiertes Portfolio und visuelle Projekt-Highlights.',
                'wim.instagram.cta', 'Profil ansehen',
                'https://www.instagram.com/esencia_silvestre61/', false)}
            </div>
          </div>

          <!-- ===================== KREATIV ===================== -->
          <div class="wim-category hidden" data-wim-cat="creative">
            <div class="wim-grid">
              ${_renderWimCard('large', 'blender-custom', '', '',
                'wim.blender.badge', 'Portfolio',
                'wim.blender.title', '3D Visualisierung',
                'wim.blender.desc.creative', 'Professionelles 3D-Design und hochwertige Renderings.',
                'wim.blender.cta', 'Portfolio öffnen',
                '/projekte/blender', true)}

              ${_renderWimCard('medium', 'poetry', 'fas fa-feather-alt', '',
                'wim.poetry.badge', 'Kreativprojekt',
                'wim.poetry.title', 'Gedichte & Texte',
                'wim.poetry.desc.creative', 'Literarische Projekte mit stilistischem Anspruch.',
                'wim.poetry.cta', 'Texte lesen',
                '/projekte/gedichte', true)}
            </div>
          </div>

          <!-- ===================== ENTWICKLUNG ===================== -->
          <div class="wim-category hidden" data-wim-cat="dev">
            <div class="wim-grid">
              ${_renderWimCard('large', 'github', 'fab fa-github', '',
                'wim.github.badge', 'Open Source',
                'wim.github.title', 'Softwareprojekte',
                'wim.github.desc.dev', 'Skalierbare Webprojekte und strukturierte Code-Architekturen.',
                'wim.github.cta', 'Repository ansehen',
                'https://github.com/Baadjid', false)}
            </div>
          </div>

          <!-- ===================== BILDUNG ===================== -->
          <div class="wim-category hidden" data-wim-cat="education">
            <div class="wim-grid">
              ${_renderWimCard('large', 'education-custom', '', '',
                'wim.lernzettel.badge', 'Wissensprojekt',
                'wim.lernzettel.title', 'Lernressourcen',
                'wim.lernzettel.desc.edu', 'Systematisch aufbereitete Lernunterlagen zur effizienten Wissensvermittlung.',
                'wim.lernzettel.cta', 'Ressourcen öffnen',
                '/projekte/lernzettel', true)}
            </div>
          </div>

        </div>
      </div>
    </section>
  `;
}

export { initWimTabs };