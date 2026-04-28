// pages/portfolio/Portfolio.js
// Vollständige Portfolio-Seite mit allen Sektionen — mit i18n-Integration

import { initScrollReveal, initStatCounters } from '../../shared/js/index.js';
import { initHolographicCard } from './js/holographic-card.js';
import { initSkillCards, cleanupSkillCards } from './js/flip-cards.js';
import { initTimeline } from './js/timeline.js';
import { initLangBars } from './js/lang-bars.js';
import { footerHTML } from '../../components/Footer.js';
import { renderWimSection, initWimTabs } from '../../components/WimSection.js';
import { i18n } from '../../shared/js/i18n.js';
import { de, en, ru, es } from './js/translation/translation.js';

// Timeline-Daten aus zentraler Datenbank
import { TIMELINE_ITEMS } from '../../data/timeline.js';

export default class PortfolioPage {
  constructor(router) {
    this.router = router;
    this._holoCleanup = null;
  }

  render() {
    // i18n-Bundles laden (merge — idempotent)
    i18n.load({ de, en, ru, es });

    const el = document.createElement('div');
    el.className = 'page page-portfolio';

    this._loadStyles();

    el.innerHTML = this._getHTML();
    return el;
  }

  _loadStyles() {
    if (!document.querySelector('link[href*="portfolio.css"]')) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = './pages/portfolio/styles/portfolio.css';
      document.head.appendChild(link);
    }
  }

  _getHTML() {
    return `
      <!-- HERO mit Holo-Card -->
      <section class="port-hero">
        <div class="section-container">
          <div class="port-hero-grid">
            ${this._renderHoloCard()}
            ${this._renderHeroText()}
          </div>
        </div>
      </section>

      <!-- ÜBER MICH -->
      <section class="about" id="about">
        <div class="section-container">
          <div class="section-header reveal">
            <div class="section-label" data-i18n="port.about.label">Über mich</div>
            <h2 class="section-title" data-i18n="port.about.title">Wer ich bin</h2>
          </div>

          <div class="about-grid">
            <div class="about-text">
              <p class="about-intro" data-i18n="port.about.intro">
                Ich bin Kirill Heldt, Frontend-Entwickler und 3D Artist aus Deutschland.
                Meine Leidenschaft verbindet Technologie und Kreativität.
              </p>
              <p data-i18n="port.about.p1">
                Seit Jahren entwickle ich eigenständig Websites, erstelle 3D-Modelle in Blender und
                produziere Content für verschiedene Plattformen. Dabei kombiniere ich technisches
                Know-how mit gestalterischem Anspruch.
              </p>
              <p data-i18n="port.about.p2">
                Mehrsprachigkeit ist für mich selbstverständlich — Deutsch, Russisch,
                Englisch, Spanisch und Kasachisch begleiten meinen Alltag.
              </p>
              <div class="about-highlights">
                <div class="highlight-item"><i class="fas fa-check"></i><span data-i18n="port.about.hl1">Responsive Web Design & SPA-Architektur</span></div>
                <div class="highlight-item"><i class="fas fa-check"></i><span data-i18n="port.about.hl2">3D Modeling & Animation mit Blender</span></div>
                <div class="highlight-item"><i class="fas fa-check"></i><span data-i18n="port.about.hl3">Content Creation auf 3 Plattformen</span></div>
                <div class="highlight-item"><i class="fas fa-check"></i><span data-i18n="port.about.hl4">Interkulturelle Kommunikation auf 5 Sprachen</span></div>
              </div>
            </div>

            <div class="about-mission">
              <div class="mission-card">
                <div class="mission-icon"><i class="fas fa-rocket"></i></div>
                <h3 data-i18n="port.about.mission.title">Meine Mission</h3>
                <p data-i18n="port.about.mission.text">Kreative Lösungen schaffen, die sowohl ästhetisch ansprechend als auch funktional sind.</p>
              </div>

              <div class="langs-card">
                <h4 class="langs-card-title"><i class="fas fa-globe"></i> <span data-i18n="port.about.langs.title">Sprachen</span></h4>
                <div class="lang-bars-section">
                  ${this._renderLangBar('port.about.lang.ru', 'Russisch', 'port.about.lang.ru.lvl', 'Muttersprache · C2', 100)}
                  ${this._renderLangBar('port.about.lang.de', 'Deutsch', 'port.about.lang.de.lvl', 'Muttersprache · C1', 100)}
                  ${this._renderLangBar('port.about.lang.en', 'Englisch', 'port.about.lang.en.lvl', 'C1', 88)}
                  ${this._renderLangBar('port.about.lang.es', 'Spanisch', 'port.about.lang.es.lvl', 'A2', 55)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- SKILLS (Flip Cards) -->
      <section class="skills" id="skills">
        <div class="section-container">
          <div class="section-header reveal">
            <div class="section-label" data-i18n="port.skills.label">Kompetenzen</div>
            <h2 class="section-title" data-i18n="port.skills.title">Fähigkeiten & Fachbereiche</h2>
          </div>
          <div class="skills-grid">
            ${this._renderSkillCard('fas fa-code', 'port.skill.frontend.title', 'Frontend Development', 'port.skill.frontend.desc', 'Entwicklung performanter, skalierbarer Webanwendungen mit modernen Standards und komponentenbasierter Architektur.', 'HTML5,CSS3,JavaScript,ES Modules,Responsive Design,GitHub Pages')}
            ${this._renderSkillCard('fas fa-cube', 'port.skill.3d.title', '3D & Animation', 'port.skill.3d.desc', 'High-End 3D-Modeling, realistische Renderings und dynamische Animationen für visuelle Erlebnisse.', 'Blender,Cycles,EEVEE,Sculpting,Texturing,Animation', '#ea7600')}
            ${this._renderSkillCard('fas fa-palette', 'port.skill.design.title', 'UI/UX Design', 'port.skill.design.desc', 'Nutzerzentrierte Interfaces mit klarer Design-Sprache, modernen Effekten und konsistenten Design-Systemen.', 'Figma,Design Tokens,Glassmorphism,CSS Animation,Dark Mode,Holographic Effects', '#e1306c')}
            ${this._renderSkillCard('fas fa-film', 'port.skill.content.title', 'Content Creation', 'port.skill.content.desc', 'Strategische Content-Produktion, Live-Streaming und nachhaltiger Community-Aufbau.', 'OBS Studio,Twitch,TikTok,Streaming,Community Building,Storytelling', '#9146ff')}
            ${this._renderSkillCard('fas fa-globe', 'port.skill.languages.title', 'Sprachen', 'port.skill.languages.desc', 'Mehrsprachige Kommunikation auf professionellem Niveau mit interkultureller Kompetenz.', 'Deutsch C2,Russisch C2,Englisch C1,Spanisch A2', '#5c9ead')}
            ${this._renderSkillCard('fas fa-tasks', 'port.skill.pm.title', 'Projektmanagement', 'port.skill.pm.desc', 'Strukturierte Arbeitsprozesse mit agilen Methoden, effizientem Git-Workflow und präziser Zeitplanung.', 'Git,GitHub,VS Code,Notion,Zeitmanagement,Python', '#7a9e7e')}
          </div>
        </div>
      </section>

      <!-- LEBENSLAUF (Timeline) -->
      <section class="experience" id="experience">
        <div class="section-container">
          <div class="section-header reveal">
            <div class="section-label" data-i18n="port.exp.label">Mein Werdegang</div>
            <h2 class="section-title" data-i18n="port.exp.title">Berufserfahrung & Bildung</h2>
          </div>

          <div class="timeline-container">
            <div class="timeline-line"></div>
            ${TIMELINE_ITEMS.map((item, idx) => this._renderTimelineItem(item, idx)).join('')}
          </div>
        </div>
      </section>

      ${renderWimSection()}

      <!-- KONTAKT -->
      <section class="kontakt-hero" id="contact">
        <div class="section-container">
          <div class="section-header reveal">
            <div class="section-label" data-i18n="port.contact.label">Kontakt</div>
            <h2 class="section-title" data-i18n="port.contact.title">Lass uns reden</h2>
          </div>

          <div class="kontakt-grid one-column">
            <div class="kontakt-info">
              <h3 data-i18n="port.contact.direct.heading">Direkte Kontakte</h3>

              <div class="kontakt-cards">
                <a href="mailto:kirillheldt206@gmail.com" class="kontakt-card">
                  <div class="kontakt-icon"><i class="fas fa-envelope"></i></div>
                  <div class="kontakt-details">
                    <span class="kontakt-label" data-i18n="port.contact.email.label">E-Mail</span>
                    <span class="kontakt-value">kirillheldt206@gmail.com</span>
                  </div>
                  <i class="fas fa-arrow-right kontakt-arrow"></i>
                </a>

                <div class="kontakt-card">
                  <div class="kontakt-icon"><i class="fas fa-map-marker-alt"></i></div>
                  <div class="kontakt-details">
                    <span class="kontakt-label" data-i18n="port.contact.location.label">Standort</span>
                    <span class="kontakt-value" data-i18n="port.contact.location.value">Deutschland</span>
                  </div>
                </div>
              </div>

              <div class="kontakt-social">
                <h4 data-i18n="port.contact.social.heading">Social Media</h4>
                <div class="social-links-vertical">
                  <a href="https://github.com/Baadjid" target="_blank" rel="noopener" class="social-link github">
                    <div class="social-icon"><i class="fab fa-github"></i></div>
                    <div class="social-content"><span class="social-name">GitHub</span><span class="social-handle">@Baadjid</span></div>
                  </a>
                  <a href="https://www.twitch.tv/baadjid" target="_blank" rel="noopener" class="social-link twitch">
                    <div class="social-icon"><i class="fab fa-twitch"></i></div>
                    <div class="social-content"><span class="social-name">Twitch</span><span class="social-handle">@baadjid</span></div>
                  </a>
                  <a href="https://www.tiktok.com/@baadjid" target="_blank" rel="noopener" class="social-link tiktok">
                    <div class="social-icon"><i class="fab fa-tiktok"></i></div>
                    <div class="social-content"><span class="social-name">TikTok</span><span class="social-handle">@baadjid</span></div>
                  </a>
                  <a href="https://www.instagram.com/esencia_silvestre61/" target="_blank" rel="noopener" class="social-link instagram">
                    <div class="social-icon"><i class="fab fa-instagram"></i></div>
                    <div class="social-content"><span class="social-name">Instagram</span><span class="social-handle">@esencia_silvestre61</span></div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      ${footerHTML(this.router)}
    `;
  }

  _renderHoloCard() {
    return `
      <div class="card-section">
        <div class="card-wrapper" id="holoCard">
          <div id="card">
            <div class="inside">
              <div class="card__shine"></div>
              <div class="card__glare"></div>
              <div class="card__content avatar__content">
                <img class="avatar" src="https://res.cloudinary.com/dglahdmrm/image/upload/q_auto/f_auto/v1775611260/profile_flnnc6.png" alt="Kirill Heldt"
                    onerror="this.style.display='none'; this.parentElement.querySelector('.avatar-placeholder').style.display='flex';">
                <div class="avatar-placeholder" style="display: none;"><span>KH</span></div>
              </div>
              <div class="card__content">
                <div class="card__details">
                  <h3 data-i18n="home.card.name">Kirill Heldt</h3>
                  <p data-i18n="port.card.subtitle">Student</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  _renderHeroText() {
    return `
      <div class="port-hero-text reveal stagger-2">
        <h1>
          <span data-i18n="port.hero.h1.line1">Kreative</span><br>
          <span class="highlight" data-i18n="port.hero.h1.line2">Webentwicklung</span><br>
          <span data-i18n="port.hero.h1.line3">für dein Projekt</span>
        </h1>
        <p class="hero-description" data-i18n="port.hero.description">
          Moderne, responsive Websites mit Fokus auf Performance und Nutzererfahrung —
          von der Idee bis zur Umsetzung.
        </p>
        <div class="hero-buttons">
          <button class="btn-primary port-smooth" data-anchor="content">
            <span data-i18n="port.hero.btn.projects">Projekte ansehen</span>
            <i class="fas fa-arrow-right"></i>
          </button>
          <button class="btn-secondary port-smooth" data-anchor="contact">
            <span data-i18n="port.hero.btn.contact">Kontakt aufnehmen</span>
          </button>
        </div>
        <div class="hero-pills">
          <span class="hero-pill"><i class="fas fa-map-marker-alt"></i><span data-i18n="port.hero.pill.location">Deutschland</span></span>
          <span class="hero-pill"><i class="fas fa-code"></i><span data-i18n="port.hero.pill.frontend">Frontend Dev</span></span>
          <span class="hero-pill"><i class="fas fa-cube"></i><span data-i18n="port.hero.pill.blender">Blender 3D</span></span>
          <span class="hero-pill"><i class="fas fa-globe"></i><span data-i18n="port.hero.pill.langs">DE · RU · EN · ES</span></span>
        </div>
      </div>
    `;
  }

  _renderLangBar(nameKey, nameFallback, levelKey, levelFallback, pct) {
    return `
      <div class="lang-bar-row">
        <div class="lang-bar-meta">
          <span data-i18n="${nameKey}">${nameFallback}</span>
          <span class="lang-bar-level" data-i18n="${levelKey}">${levelFallback}</span>
        </div>
        <div class="lang-bar-track">
          <div class="lang-bar-fill" style="--pct:${pct}%"></div>
        </div>
      </div>
    `;
  }

  _renderSkillCard(icon, titleKey, titleFallback, descKey, descFallback, tagsStr, accent = '') {
    const tags = tagsStr.split(',').map(t => `<span class="skill-tag">${t.trim()}</span>`).join('');
    const iconStyle = accent ? `style="background:${accent}22;color:${accent}"` : '';
    const backStyle = accent ? `style="background:${accent};color:#fff"` : '';

    return `
      <div class="skill-card-flip" tabindex="0" role="button" aria-pressed="false">
        <div class="skill-card-inner">
          <div class="skill-card-front">
            <div class="skill-icon" ${iconStyle}><i class="${icon}"></i></div>
            <h3 data-i18n="${titleKey}">${titleFallback}</h3>
            <div class="flip-indicator"><i class="fas fa-sync-alt"></i></div>
          </div>
          <div class="skill-card-back">
            <div class="skill-icon-small" ${backStyle}><i class="${icon}"></i></div>
            <h3 data-i18n="${titleKey}">${titleFallback}</h3>
            <p data-i18n="${descKey}">${descFallback}</p>
            <div class="skill-tags">${tags}</div>
          </div>
        </div>
      </div>
    `;
  }

  _renderTimelineItem(item, idx) {
  // Die Tags werden jetzt komplett über i18n geladen
  // Die Keys existieren bereits in den Sprachdateien (tl.0.tag1, tl.0.tag2, etc.)
  const tagCount = item.tags.length;
  const tags = Array.from({ length: tagCount }, (_, i) => {
    const tagKey = `tl.${idx}.tag${i + 1}`;
    // Fallback: wenn kein i18n-Key existiert, den ursprünglichen Tag-Text verwenden
    const fallback = item.tags[i];
    return `<span class="tag" data-i18n="${tagKey}">${fallback}</span>`;
  }).join('');

  return `
    <div class="timeline-item ${item.type}" data-start="${item.start}" data-end="${item.end}">
      <div class="timeline-card">
        <div class="card-header">
          <h3 data-i18n="tl.${idx}.title">${item.title}</h3>
          <span class="card-date" data-i18n="tl.${idx}.date">${item.date}</span>
        </div>
        <div class="card-details">
          <div class="card-company" data-i18n="tl.${idx}.company">${item.company}</div>
          <p class="card-description" data-i18n="tl.${idx}.desc">${item.description}</p>
          <div class="card-tags">${tags}</div>
        </div>
      </div>
    </div>
  `;
}

  _renderWimCard(size, iconKey, iconFA, badgeMod, badgeText, title, desc, cta, href, internal, stats = '') {
    const sizeClass = size.split(' ').map(s => `card-${s}`).join(' ');
    const badge = badgeText ? `<span class="card-badge${badgeMod ? ' ' + badgeMod : ''}">${badgeText}</span>` : '';
    const ctaBtn = cta ? `<div class="card-footer"><span class="card-cta">${cta} <i class="fas fa-arrow-right"></i></span></div>` : '';

    const inner = `
      <div class="card-content">
        <div class="card-header">
          <div class="card-icon ${iconKey}"><i class="${iconFA}"></i></div>
          ${badge}
        </div>
        <div class="card-body">
          <h3 class="card-title">${title}</h3>
          <p class="card-description">${desc}</p>
          ${stats}
        </div>
        ${ctaBtn}
      </div>
    `;

    if (internal) {
      return `<article class="content-card ${sizeClass}"><button class="content-card-link" data-link="${href}">${inner}</button></article>`;
    }
    return `<article class="content-card ${sizeClass}"><a href="${href}" class="content-card-link" target="_blank" rel="noopener noreferrer">${inner}</a></article>`;
  }

  _renderCardStats(values) {
    return `
      <div class="card-stats">
        ${values.map(v => `
          <div class="stat">
            <div class="stat-value">${v}</div>
            <div class="stat-label">${v === 'Live' ? 'Status' : v === '3D/Code' ? 'Content' : 'Sprache'}</div>
          </div>
        `).join('')}
      </div>
    `;
  }

   init() {
    i18n.init();

    document.querySelectorAll('.port-smooth[data-anchor]').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.dataset.anchor;
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      });
    });

    initScrollReveal();
    initStatCounters();
    this._holoCleanup = initHolographicCard();
    initSkillCards();  
    initTimeline();
    initLangBars();
    initWimTabs();
  }

  cleanup() {
    if (this._holoCleanup) this._holoCleanup();
    cleanupSkillCards(); 
  }
}