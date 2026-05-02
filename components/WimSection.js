// components/WimSection.js
import { i18n } from '../shared/js/i18n.js';
import { de, en, ru, es } from '../core/translation/translation.js';
import { initWimTabs } from '../shared/js/wim-tabs.js';
import { PROTECTED_ROUTES, renderLockOverlay } from '../core/routes/protected.js';

const ICON_IMAGES = {
  'blender-custom':   'https://res.cloudinary.com/dglahdmrm/image/upload/q_auto/f_auto/v1775611250/blender_Icon_zam2sz.png',
  'education-custom': 'https://res.cloudinary.com/dglahdmrm/image/upload/q_auto/f_auto/v1775611250/abiunity_Icon_ddix3a.png',
  'flutter-custom':   'assets/icons/flutter_Icon.png',
};

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

  const lockOverlay = (internal && PROTECTED_ROUTES.has(href)) ? renderLockOverlay(href) : '';

  if (internal) {
    return `
      <article class="content-card ${sizeClass}">
        <button class="content-card-link" data-link="${href}">${inner}</button>
        ${lockOverlay}
      </article>
    `;
  }

  return `
    <article class="content-card ${sizeClass}">
      <a href="${href}" class="content-card-link" target="_blank" rel="noopener noreferrer">${inner}</a>
      ${lockOverlay}
    </article>
  `;
}

// ============================================
// PROJEKTE METADATEN - Zentrale Datenquelle
// ============================================
const PROJECTS_META = [
  { 
    id: 'twitch',
    size: 'large featured',
    iconKey: 'twitch',
    iconFA: 'fab fa-twitch',
    badgeMod: 'live',
    badgeKey: 'wim.twitch.badge',
    badgeFallback: 'Live Projekt',
    titleKey: 'wim.twitch.title',
    titleFallback: 'Twitch Gaming & 3D Live Creation',
    descKey: 'wim.twitch.desc',
    descFallback: 'Gaming-Streams kombiniert mit der Live-Erstellung von 3D-Modellen und Designs – interaktiv, transparent und in Echtzeit.',
    ctaKey: 'wim.twitch.cta',
    ctaFallback: 'Stream ansehen',
    href: 'https://www.twitch.tv/baadjid',
    internal: false,
    category: ['all', 'social'],
    stats: _renderCardStats('wim.twitch.stat1', 'Live', 'wim.twitch.stat2', 'Gaming', 'wim.twitch.stat3', '3D')
  },
  { 
    id: 'blender',
    size: 'medium',
    iconKey: 'blender-custom',
    iconFA: '',
    badgeMod: '',
    badgeKey: 'wim.blender.badge',
    badgeFallback: 'Kreativprojekt',
    titleKey: 'wim.blender.title',
    titleFallback: '3D Visualisierung',
    descKey: 'wim.blender.desc',
    descFallback: 'Hochwertige 3D-Modelle, Animationen und Renderings mit Fokus auf Präzision und Ästhetik.',
    ctaKey: 'wim.blender.cta',
    ctaFallback: 'Galerie öffnen',
    href: '/projekte/blender',
    internal: true,
    category: ['all', 'creative']
  },
  { 
    id: 'tiktok',
    size: 'small',
    iconKey: 'tiktok',
    iconFA: 'fab fa-tiktok',
    badgeMod: '',
    badgeKey: 'wim.tiktok.badge',
    badgeFallback: 'Content Kanal',
    titleKey: 'wim.tiktok.title',
    titleFallback: 'TikTok',
    descKey: 'wim.tiktok.desc',
    descFallback: 'Kurzvideos zu Gaming, 3D und Development – kompakt, verständlich und visuell klar strukturiert.',
    ctaKey: 'wim.tiktok.cta',
    ctaFallback: 'Kanal öffnen',
    href: 'https://www.tiktok.com/@baadjid',
    internal: false,
    category: ['all', 'social']
  },
  { 
    id: 'instagram',
    size: 'small',
    iconKey: 'instagram',
    iconFA: 'fab fa-instagram',
    badgeMod: '',
    badgeKey: 'wim.instagram.badge',
    badgeFallback: 'Content Kanal',
    titleKey: 'wim.instagram.title',
    titleFallback: 'Instagram',
    descKey: 'wim.instagram.desc',
    descFallback: 'Einblicke in Projekte, Designprozesse und kreative Konzepte – modern und konsistent präsentiert.',
    ctaKey: 'wim.instagram.cta',
    ctaFallback: 'Profil ansehen',
    href: 'https://www.instagram.com/esencia_silvestre61/',
    internal: false,
    category: ['all', 'social']
  },
  { 
    id: 'poetry',
    size: 'small',
    iconKey: 'poetry',
    iconFA: 'fas fa-feather-alt',
    badgeMod: '',
    badgeKey: 'wim.poetry.badge',
    badgeFallback: 'Kreativprojekt',
    titleKey: 'wim.poetry.title',
    titleFallback: 'Gedichte & Texte',
    descKey: 'wim.poetry.desc',
    descFallback: 'Literarische Arbeiten mit Fokus auf Ausdruck, Stil und sprachliche Klarheit.',
    ctaKey: 'wim.poetry.cta',
    ctaFallback: 'Texte lesen',
    href: '/projekte/gedichte',
    internal: true,
    category: ['all', 'creative']
  },
  { 
    id: 'github',
    size: 'wide',
    iconKey: 'github',
    iconFA: 'fab fa-github',
    badgeMod: '',
    badgeKey: 'wim.github.badge',
    badgeFallback: 'Open Source',
    titleKey: 'wim.github.title',
    titleFallback: 'Softwareprojekte',
    descKey: 'wim.github.desc',
    descFallback: 'Technische Projekte, Tools und Experimente mit sauberer Architektur und Performance-Fokus.',
    ctaKey: 'wim.github.cta',
    ctaFallback: 'Repository ansehen',
    href: 'https://github.com/Baadjid',
    internal: false,
    category: ['all', 'dev']
  },
  { 
    id: 'lernzettel',
    size: 'wide',
    iconKey: 'education-custom',
    iconFA: '',
    badgeMod: '',
    badgeKey: 'wim.lernzettel.badge',
    badgeFallback: 'Wissensprojekt',
    titleKey: 'wim.lernzettel.title',
    titleFallback: 'Lernressourcen',
    descKey: 'wim.lernzettel.desc',
    descFallback: 'Strukturierte Lernunterlagen und technische Zusammenfassungen – effizient und praxisorientiert.',
    ctaKey: 'wim.lernzettel.cta',
    ctaFallback: 'Ressourcen öffnen',
    href: '/projekte/lernzettel',
    internal: true,
    category: ['all', 'education']
  },
  { 
    id: 'planner',
    size: 'small',
    iconKey: 'flutter-custom',
    iconFA: 'fab fa-calendar-alt',
    badgeMod: 'soon',
    badgeKey: 'wim.planner.badge',
    badgeFallback: 'In Entwicklung',
    titleKey: 'wim.planner.title',
    titleFallback: 'Schedule Crunch',
    descKey: 'wim.planner.desc',
    descFallback: 'Produktivitäts-App zur strukturierten Planung von Lern- und Projektphasen.',
    ctaKey: 'wim.planner.cta',
    ctaFallback: 'Entwicklung verfolgen',
    href: '/projekte/study-planner',
    internal: true,
    category: ['all', 'dev']
  }
];

// Kategorien-spezifische Description-Overrides
const DESC_OVERRIDES = {
  social: {
    twitch: 'wim.twitch.desc.social',
    tiktok: 'wim.tiktok.desc.social',
    instagram: 'wim.instagram.desc.social'
  },
  creative: {
    blender: 'wim.blender.desc.creative',
    poetry: 'wim.poetry.desc.creative'
  },
  dev: {
    github: 'wim.github.desc.dev'
  },
  education: {
    lernzettel: 'wim.lernzettel.desc.edu'
  }
};

// Stats-Overrides für spezifische Kategorien
const STATS_OVERRIDES = {
  social: {
    twitch: {
      stat3: { key: 'wim.twitch.stat3.social', fallback: 'Community' }
    }
  }
};

function getProjectDescription(project, category) {
  if (category !== 'all' && DESC_OVERRIDES[category] && DESC_OVERRIDES[category][project.id]) {
    return DESC_OVERRIDES[category][project.id];
  }
  return project.descKey;
}

function getProjectStats(project, category) {
  if (category !== 'all' && STATS_OVERRIDES[category] && STATS_OVERRIDES[category][project.id]) {
    const override = STATS_OVERRIDES[category][project.id];
    if (override.stat3) {
      return _renderCardStats(
        project.stats.match(/data-i18n="([^"]+)"/g)?.[0]?.match(/"([^"]+)"/)?.[1] || 'wim.twitch.stat1',
        project.stats.match(/data-i18n="[^"]+">([^<]+)</)?.[1] || 'Live',
        project.stats.match(/data-i18n="[^"]+">([^<]+)</)?.[2] || 'Gaming',
        override.stat3.key,
        override.stat3.fallback
      );
    }
  }
  return project.stats || '';
}

function renderProjectsByCategory(category) {
  const projects = PROJECTS_META.filter(p => p.category.includes(category));
  
  return projects.map(project => {
    const descKey = getProjectDescription(project, category);
    const stats = getProjectStats(project, category);
    
    return _renderWimCard(
      project.size,
      project.iconKey,
      project.iconFA,
      project.badgeMod,
      project.badgeKey,
      project.badgeFallback,
      project.titleKey,
      project.titleFallback,
      descKey,
      project.descFallback,
      project.ctaKey,
      project.ctaFallback,
      project.href,
      project.internal,
      stats
    );
  }).join('');
}

// Kategorien Konfiguration
const CATEGORIES = [
  { id: 'all', label: 'wim.tab.all', labelFallback: 'Alle', icon: 'fas fa-th-large' },
  { id: 'social', label: 'wim.tab.social', labelFallback: 'Social Media', icon: 'fas fa-share-nodes' },
  { id: 'creative', label: 'wim.tab.creative', labelFallback: 'Kreatives', icon: 'fas fa-wand-magic-sparkles' },
  { id: 'dev', label: 'wim.tab.dev', labelFallback: 'Entwicklung', icon: 'fas fa-code' },
  { id: 'education', label: 'wim.tab.education', labelFallback: 'Bildung', icon: 'fas fa-graduation-cap' }
];

export function renderWimSection() {
  i18n.load({ de, en, ru, es });

  const tabsHtml = CATEGORIES.map(cat => `
    <button class="wim-tab ${cat.id === 'all' ? 'active' : ''}" data-wim="${cat.id}" role="tab">
      <i class="${cat.icon}"></i><span data-i18n="${cat.label}">${cat.labelFallback}</span>
    </button>
  `).join('');

  const categoriesHtml = CATEGORIES.map(cat => `
    <div class="wim-category ${cat.id === 'all' ? 'active' : 'hidden'}" data-wim-cat="${cat.id}">
      <div class="wim-grid">
        ${renderProjectsByCategory(cat.id)}
      </div>
    </div>
  `).join('');

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

          <nav class="wim-tabs" role="tablist">
            ${tabsHtml}
          </nav>

          ${categoriesHtml}

        </div>
      </div>
    </section>
  `;
}

export { initWimTabs };