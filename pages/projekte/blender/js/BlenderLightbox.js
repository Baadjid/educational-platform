// pages/projekte/blender/BlenderLightbox.js
// Lightbox-Overlay für Blender-Galerie — mit i18n-Integration
// Optimiert: Einmaliges Rendering, dann nur Daten-Update

import { i18n } from '../../../../shared/js/i18n.js';

export class BlenderLightbox {
  constructor() {
    this._currentIndex = 0;
    this._images = [];
    this._project = null;
    this._el = null;
    this._isRendered = false;
    this._onKeyDown = this._onKeyDown.bind(this);
  }

  open(project, startIndex = 0) {
    this._project = project;
    this._images = project.images || [{ url: project.src, caption: project.title }];
    this._currentIndex = startIndex;

    if (!this._el) {
      this._inject();
    }
    
    if (!this._isRendered) {
      this._render();
      this._isRendered = true;
    } else {
      this._updateContent();
    }

    requestAnimationFrame(() => {
      this._el.classList.add('lb-visible');
    });

    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', this._onKeyDown);
  }

  close() {
    if (!this._el) return;
    this._el.classList.remove('lb-visible');
    document.body.style.overflow = '';
    document.removeEventListener('keydown', this._onKeyDown);
  }

  destroy() {
    this.close();
    if (this._el) {
      this._el.remove();
      this._el = null;
      this._isRendered = false;
    }
  }

  _inject() {
    if (!document.querySelector('link[href*="blender-lightbox.css"]')) {
      const link = document.createElement('link');
      link.rel  = 'stylesheet';
      link.href = 'pages/projekte/blender/styles/blender-lightbox.css';
      document.head.appendChild(link);
    }

    this._el = document.createElement('div');
    this._el.className = 'lb-overlay';
    this._el.setAttribute('role', 'dialog');
    this._el.setAttribute('aria-modal', 'true');
    document.body.appendChild(this._el);

    this._el.addEventListener('click', (e) => {
      if (e.target === this._el) this.close();
    });
  }

  _render() {
    // Grundstruktur einmalig erstellen
    this._el.innerHTML = `
      <div class="lb-container">
        <button class="lb-close" aria-label="Schließen">
          <i class="fas fa-times"></i>
        </button>
        <div class="lb-image-wrap">
          <img class="lb-main-img" alt="">
          <div class="lb-counter"></div>
        </div>
        <div class="lb-bottom">
          <div class="lb-thumbs"></div>
          <div class="lb-info">
            <div class="lb-info-main">
              <div class="lb-info-meta"></div>
              <h3 class="lb-info-title"></h3>
              <p class="lb-info-desc"></p>
              <div class="lb-tags"></div>
            </div>
          </div>
        </div>
      </div>
    `;

    // Navigation nur einmal hinzufügen
    const imageWrap = this._el.querySelector('.lb-image-wrap');
    
    const prevBtn = document.createElement('button');
    prevBtn.className = 'lb-nav lb-prev';
    prevBtn.setAttribute('aria-label', 'Vorheriges Bild');
    prevBtn.innerHTML = '<i class="fas fa-chevron-left"></i>';
    prevBtn.addEventListener('click', () => this._navigate(-1));
    
    const nextBtn = document.createElement('button');
    nextBtn.className = 'lb-nav lb-next';
    nextBtn.setAttribute('aria-label', 'Nächstes Bild');
    nextBtn.innerHTML = '<i class="fas fa-chevron-right"></i>';
    nextBtn.addEventListener('click', () => this._navigate(1));
    
    imageWrap.appendChild(prevBtn);
    imageWrap.appendChild(nextBtn);

    // Thumbnails-Container
    const thumbsContainer = this._el.querySelector('.lb-thumbs');
    
    // Events für statische Elemente
    this._el.querySelector('.lb-close')
      ?.addEventListener('click', () => this.close());
  }

  _updateContent() {
    const p = this._project;
    const img = this._images[this._currentIndex];
    const total = this._images.length;
    const id = p.id;

    // Hauptbild aktualisieren
    const mainImg = this._el.querySelector('.lb-main-img');
    mainImg.src = img.url;
    mainImg.alt = img.caption || p.title;
    
    // Counter aktualisieren
    const counter = this._el.querySelector('.lb-counter');
    counter.textContent = `${this._currentIndex + 1} / ${total}`;
    
    // Navigation anzeigen/ausblenden
    const prevBtn = this._el.querySelector('.lb-prev');
    const nextBtn = this._el.querySelector('.lb-next');
    if (total > 1) {
      prevBtn.style.display = 'flex';
      nextBtn.style.display = 'flex';
    } else {
      prevBtn.style.display = 'none';
      nextBtn.style.display = 'none';
    }

    // Thumbnails aktualisieren
    const thumbsContainer = this._el.querySelector('.lb-thumbs');
    thumbsContainer.innerHTML = this._images.map((img, i) => `
      <button class="lb-thumb ${i === this._currentIndex ? 'active' : ''}"
              data-index="${i}"
              aria-label="Bild ${i + 1}">
        <img src="${img.url.replace('/w_1920,', '/w_120,')}" alt="">
      </button>
    `).join('');
    
    // Thumbnail-Events neu binden
    thumbsContainer.querySelectorAll('.lb-thumb').forEach(btn => {
      btn.addEventListener('click', () => {
        this._currentIndex = parseInt(btn.dataset.index, 10);
        this._updateContent();
      });
    });

    // Metadaten aktualisieren
    const metaContainer = this._el.querySelector('.lb-info-meta');
    metaContainer.innerHTML = `
      <span class="lb-info-engine">${p.engine}</span>
      <span class="lb-info-sep">·</span>
      <span>${p.tool}</span>
      <span class="lb-info-sep">·</span>
      <span>${p.resolution}</span>
      <span class="lb-info-sep">·</span>
      <span>${p.date}</span>
    `;
    
    const titleEl = this._el.querySelector('.lb-info-title');
    titleEl.textContent = p.title;
    
    const descEl = this._el.querySelector('.lb-info-desc');
    descEl.setAttribute('data-i18n', `bl.r.${id}.desc`);
    descEl.textContent = i18n.t(`bl.r.${id}.desc`) || p.description || '';
    
    const tagsContainer = this._el.querySelector('.lb-tags');
    tagsContainer.innerHTML = (p.tags || [])
      .map((t, i) => `<span class="lb-tag" data-i18n="bl.r.${id}.tag${i + 1}">${t}</span>`)
      .join('');
    
    // ArtStation Button (falls vorhanden)
    let artStationBtn = this._el.querySelector('.lb-artstation-btn');
    if (p.artStationUrl) {
      if (!artStationBtn) {
        artStationBtn = document.createElement('a');
        artStationBtn.className = 'lb-artstation-btn';
        artStationBtn.target = '_blank';
        artStationBtn.rel = 'noopener';
        artStationBtn.innerHTML = '<i class="fas fa-external-link-alt"></i> ArtStation';
        this._el.querySelector('.lb-info').appendChild(artStationBtn);
      }
      artStationBtn.href = p.artStationUrl;
      artStationBtn.style.display = 'inline-flex';
    } else if (artStationBtn) {
      artStationBtn.style.display = 'none';
    }

    // i18n patchen
    i18n._patchDOM(this._el);
  }

  _navigate(dir) {
    const total = this._images.length;
    this._currentIndex = (this._currentIndex + dir + total) % total;
    this._updateContent();
  }

  _onKeyDown(e) {
    if (e.key === 'Escape')      this.close();
    if (e.key === 'ArrowRight')  this._navigate(1);
    if (e.key === 'ArrowLeft')   this._navigate(-1);
  }
}