// pages/projekte/blender/BlenderPage.js
// Mobile: Horizontaler Scroll-Strip ohne Lightbox, Info toggelbar

import { initScrollReveal } from '../../../shared/js/index.js';
import { RENDERS_META, RENDER_CATEGORIES, getRendersByCategory, getRenderById } from '../../../data/blender/renders-meta.js';
import { RENDERS_IMAGES, getThumbnail } from '../../../data/blender/renders-images.js';
import { CONFIG } from '../../../core/config.js';
import { footerHTML } from '../../../components/Footer.js';
import { i18n } from '../../../shared/js/i18n.js';
import { de, en, ru, es } from './js/translation/translation.js';
import { initWimTabs } from '../../../shared/js/wim-tabs.js';

function isTouchOnly() {
  return window.matchMedia('(hover: none) and (pointer: coarse)').matches;
}

// Prüft, ob ein Render mehrere Bilder hat
function hasMultipleImages(renderId) {
  return RENDERS_IMAGES[renderId] && RENDERS_IMAGES[renderId].length > 1;
}

// Holt alle Bilder für einen Render (für mobile Scroll-Strips)
function getAllImagesForRender(renderId) {
  const images = RENDERS_IMAGES[renderId] || [];
  return images.map(img => ({
    src: img.thumb,       
    thumb: img.thumb,
    caption: img.caption,
    url: img.full          
  }));
}

export default class BlenderPage {
  constructor(router) {
    this.router = router;
    this.currentCategory = 'all';
    this._currentActiveItem = null; // Speichert das aktuell geöffnete Overlay
    this._onGalleryClick = this._onGalleryClick.bind(this);
    this._initScrollStrips = this._initScrollStrips.bind(this);
  }

  render() {
    i18n.load({ de, en, ru, es });

    const el = document.createElement('div');
    el.className = 'page page-blender';

    if (!document.querySelector('link[href*="blender.css"]')) {
      const link = document.createElement('link');
      link.rel  = 'stylesheet';
      link.href = 'pages/projekte/blender/styles/blender.css';
      document.head.appendChild(link);
    }

    el.innerHTML = this._getHTML();
    return el;
  }

  _getHTML() {
    return `
      <section class="blender-hero">
        <div class="blender-hero-inner">
          <div class="blender-hero-orb" aria-hidden="true"></div>
          <div class="blender-hero-content">
            <p class="blender-eyebrow" data-i18n="bl.eyebrow">3D Art · Cinematic Visualization · Physically Based Rendering</p>
            <h1 class="blender-headline">
              <span data-i18n="bl.headline.1">Digitale Welten erschaffen aus</span><br>
              <em data-i18n="bl.headline.2">Licht, Materialität und Atmosphäre.</em>
            </h1>
            <div class="blender-scroll-hint">
              <div class="blender-scroll-mouse"><div class="blender-scroll-wheel"></div></div>
            </div>
          </div>
        </div>
      </section>

      <section class="blender-gallery-section">
        <div class="blender-gallery-wrap">

          <nav class="wim-tabs reveal" id="blenderTabs">
            ${RENDER_CATEGORIES.map(cat => `
              <button class="wim-tab ${cat.id === 'all' ? 'active' : ''}"
                      data-wim="${cat.id}">
                <span data-i18n="bl.cat.${cat.id}">${cat.label}</span>
              </button>
            `).join('')}
          </nav>

          <div class="blender-section-head reveal">
            <div class="blender-section-meta">
              <p class="blender-meta-tag" data-i18n="bl.meta.tag">DIGITAL 3D DESIGN</p>
              <p class="blender-meta-sub" data-i18n="bl.meta.sub">Modeling · Texturing · Lighting · Compositing</p>
            </div>
            <div class="blender-section-info">
              <h2 data-i18n="bl.section.title">Ausgewählte 3D-Projekte</h2>
              <p data-i18n="bl.section.desc">
                Alle Arbeiten entstehen vollständig in Blender — von Modellierung
                über PBR-Materialien bis zum finalen High-Resolution-Render.
                ${!isTouchOnly() ? 'Klicke auf ein Projekt für alle Bilder und Details.' : 'Tippe auf eine Karte für Details, streiche zum Scrollen durch die Varianten.'}
              </p>
            </div>
            <a class="btn-secondary" data-link="/projekte/blender/js/hotkeys">
              <i class="fa-solid fa-keyboard"></i>
              <span data-i18n="bl.hotkeys.link">Hotkeys-Referenz</span>
            </a>
          </div>

          <div class="blender-gallery-grid" id="blenderGallery">
            ${this._renderGalleryItems('all')}
          </div>

        </div>
      </section>

      ${footerHTML(this.router, {
        extraColumn: {
          title: '3D & Portfolio',
          titleI18n: 'bl.footer.extra.title',
          items: [
            { label: 'Hot Keys', link: CONFIG.BLENDER.HOTKEYS, i18n: 'bl.hotkeys.link' }
          ]
        }
      })}
    `;
  }

  _renderGalleryItems(category) {
    const renders = getRendersByCategory(category);
    const isMobile = isTouchOnly();
    
    return renders.map((render, i) => {
      const hasMultiple = hasMultipleImages(render.id);
      const thumbnailSrc = getThumbnail(render.id);
      
      // Auf Mobilgeräten: Scroll-Strip für alle Karten mit mehreren Bildern
      if (isMobile && hasMultiple) {
        const images = getAllImagesForRender(render.id);
        return `
          <div class="gallery-item gallery-item--scroll"
               style="animation-delay:${i * 0.1}s"
               data-render-id="${render.id}"
               data-category="${render.category}">
            
            <div class="gallery-scroll-strip" data-scroll-container>
              ${images.map((img, idx) => `
                <div class="gallery-scroll-slide" data-slide-index="${idx}">
                  <img src="${img.src}"
                       alt="${render.title} - ${img.caption || `Variante ${idx + 1}`}"
                       loading="lazy"
                       data-full-src="${img.src}"
                       data-caption="${img.caption || ''}">
                </div>
              `).join('')}
            </div>
            
            <div class="gallery-scroll-dots">
              ${images.map((_, idx) => `
                <span class="gallery-dot ${idx === 0 ? 'active' : ''}" data-dot-index="${idx}"></span>
              `).join('')}
            </div>
            
            <div class="gallery-overlay">
              <div class="gallery-info">
                <h3>${render.title}</h3>
                <p>${render.tool} · ${render.engine}</p>
                <p>${render.date} · ${render.resolution}</p>
                <p class="gallery-scroll-hint-mobile"><i class="fas fa-hand-peace"></i>Scroll</p>
              </div>
            </div>
          </div>
        `;
      }
      
      // Normale Karte für Desktop ODER für Mobil mit Einzelbild
      return `
        <div class="gallery-item"
             style="animation-delay:${i * 0.1}s"
             data-render-id="${render.id}"
             data-category="${render.category}"
             role="button" tabindex="0"
             aria-label="${render.title}">
          <img src="${thumbnailSrc}"
            alt="${render.title}"
            loading="lazy"
            data-render-id="${render.id}"
            class="lazy-load-img">
          <div class="gallery-overlay">
            <div class="gallery-info">
              <h3>${render.title}</h3>
              <p>${render.tool} · ${render.engine}</p>
              <p>${render.date} · ${render.resolution}</p>
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  // Initialisiert die Scroll-Strips für mobile Geräte
  _initScrollStrips() {
    const scrollContainers = document.querySelectorAll('.gallery-scroll-strip');
    
    scrollContainers.forEach(container => {
      const slides = container.querySelectorAll('.gallery-scroll-slide');
      const dots = container.closest('.gallery-item')?.querySelectorAll('.gallery-dot');
      if (!dots || !dots.length) return;
      
      // Aktualisiere aktiven Dot beim Scrollen
      const updateActiveDot = () => {
        const scrollLeft = container.scrollLeft;
        const slideWidth = slides[0]?.offsetWidth || 1;
        const activeIndex = Math.round(scrollLeft / slideWidth);
        
        dots.forEach((dot, idx) => {
          dot.classList.toggle('active', idx === activeIndex);
        });
      };
      
      container.addEventListener('scroll', () => {
        requestAnimationFrame(updateActiveDot);
      });
      
      // Klick auf Dots zum Springen
      dots.forEach((dot, idx) => {
        dot.addEventListener('click', (e) => {
          e.stopPropagation();
          const targetScroll = slides[idx]?.offsetLeft || 0;
          container.scrollTo({
            left: targetScroll,
            behavior: 'smooth'
          });
        });
      });
      
      updateActiveDot();
    });
  }

  // Schließe alle geöffneten Overlays
  _closeAllOverlays() {
    document.querySelectorAll('.gallery-overlay').forEach(overlay => {
      overlay.style.opacity = '0';
    });
    this._currentActiveItem = null;
  }

  // Zeige ein bestimmtes Overlay an und schließe alle anderen
  _showOverlay(item) {
    // Alle anderen schließen
    this._closeAllOverlays();
    
    // Das gewünschte Overlay öffnen
    const overlay = item.querySelector('.gallery-overlay');
    if (overlay) {
      overlay.style.opacity = '0.85';
      this._currentActiveItem = item;
    }
  }

  // Toggle die Info-Overlay auf Mobilgeräten (nur eines gleichzeitig sichtbar)
  _toggleOverlay(item) {
    // Wenn das geklickte Item bereits das aktive ist -> schließen
    if (this._currentActiveItem === item) {
      const overlay = item.querySelector('.gallery-overlay');
      if (overlay) {
        overlay.style.opacity = '0';
      }
      this._currentActiveItem = null;
    } else {
      // Sonst: anderes Item öffnen (schließt automatisch alle anderen)
      this._showOverlay(item);
    }
  }

  async _onGalleryClick(e) {
    const item = e.target.closest('[data-render-id]');
    if (!item) return;

    const isMobile = isTouchOnly();
    
    // Auf Mobilgeräten: Toggle die Info, keine Lightbox
    if (isMobile) {
      e.preventDefault();
      e.stopPropagation();
      
      // Wenn es ein Klick auf einen Dot ist, nichts togglen
      if (e.target.closest('.gallery-dot')) {
        return;
      }
      
      // Toggle das Overlay (nur eines gleichzeitig sichtbar)
      this._toggleOverlay(item);
      return;
    }
    
    // Desktop: Lightbox öffnen
    const id = parseInt(item.dataset.renderId, 10);
    const render = getRenderById(id);
    if (!render) return;
    
    // Lade alle Bilder für die Lightbox
    const images = RENDERS_IMAGES[id] || [];
    const fullImages = images.map(img => ({
      url: img.full,         
      caption: img.caption,
      thumb: img.thumb
    }));
    
    // Dynamisch Lightbox importieren (nur auf Desktop)
    const { BlenderLightbox } = await import('./js/BlenderLightbox.js');
    if (!this._lightbox) {
      this._lightbox = new BlenderLightbox();
    }
    this._lightbox.open({ ...render, images: fullImages }, 0);
  }

  _onCategoryChange(category) {
    const gallery = document.getElementById('blenderGallery');
    if (!gallery) return;

    // Beim Kategoriewechsel alle Overlays schließen
    this._closeAllOverlays();

    gallery.innerHTML = this._renderGalleryItems(category);
    gallery.removeEventListener('click', this._onGalleryClick);
    gallery.addEventListener('click', this._onGalleryClick);

    this._initLazyLoading();
    this._initScrollStrips();

    gallery.querySelectorAll('.gallery-item').forEach((item, i) => {
      item.style.animation      = 'none';
      item.style.animationDelay = `${i * 0.1}s`;
      requestAnimationFrame(() => { item.style.animation = ''; });
    });

    i18n._patchDOM(gallery);
  }

_initLazyLoading() {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
  
        const fullSrc = img.dataset.fullSrc;
        if (fullSrc && img.src !== fullSrc) {
          img.src = fullSrc;
        }
        observer.unobserve(img);
      }
    });
  }, { rootMargin: '100px' });

  document.querySelectorAll('.lazy-load-img, .gallery-scroll-slide img').forEach(img => {
    imageObserver.observe(img);
  });
}

  init() {
    i18n.init();
    initScrollReveal();

    initWimTabs(document, {
      onTabChange: (key) => this._onCategoryChange(key),
    });

    this._initLazyLoading();
    this._initScrollStrips();

    const gallery = document.getElementById('blenderGallery');
    if (gallery) gallery.addEventListener('click', this._onGalleryClick);
  }

  cleanup() {
    this._closeAllOverlays();
    const gallery = document.getElementById('blenderGallery');
    if (gallery) gallery.removeEventListener('click', this._onGalleryClick);
    if (this._lightbox) {
      this._lightbox.destroy();
      this._lightbox = null;
    }
  }
}