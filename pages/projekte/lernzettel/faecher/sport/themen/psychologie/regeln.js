// pages/projekte/lernzettel/faecher/sport/themen/psychologie/regeln.js
// Psychologie & Gesellschaft 5.3 — Regeln im Sport

import { initScrollReveal }  from '../../../../../../../shared/js/index.js';
import { footerHTML }         from '../../../../../../../components/Footer.js';
import { i18n }               from '../../../../../../../shared/js/i18n.js';
import { initWimTabs }       from '../../../../../../../shared/js/wim-tabs.js';
import {
  ensureComponentsCSS, renderSubhead, renderTags, renderInfobox,
  renderTable, renderTabs, renderAccordion, renderMerkboxGrid,
  renderCompare, initInteractive,
} from '../../../../js/components/components.js';
import { renderPageNav } from '../../../../js/components/subnav.js';

import { COLOR, COLOR_RGB, BASE } from '../../sport.js';

// ─── WIM-Tab-Daten ───────────────────────────────────────────────
const REGELN_TABS = [
  { key: 'bedeutung', label: '📜 Bedeutung & Funktion' },
  { key: 'typen',     label: '🗂️ Regeltypen' },
  { key: 'handlung',  label: '🤝 Handlungsregeln & Fair Play' },
];

export default class SportRegelnPage {
  constructor(router) { this.router = router; }
  render() {
    ensureComponentsCSS();
    const el = document.createElement('div');
    el.className = 'page page-sport-sub';
    if (!document.querySelector('link[href*="sub.css"]')) {
      const l = document.createElement('link'); l.rel = 'stylesheet';
      l.href = 'pages/projekte/lernzettel/styles/sub.css'; document.head.appendChild(l);
    }
    el.style.setProperty('--kap-color', COLOR); el.style.setProperty('--kap-color-rgb', COLOR_RGB);
    el.style.setProperty('--lz-accent', COLOR); el.style.setProperty('--lz-accent-rgb', COLOR_RGB);
    el.innerHTML = this._html(); return el;
  }

  _html() {
    return `
      <section class="lz-sub-hero">
        <div class="lz-sub-hero-orb" aria-hidden="true"></div>
        <div class="lz-sub-hero-inner">
          <nav class="lz-sub-breadcrumb">
            <button class="lz-bread-link" data-nav-link="/projekte/lernzettel">Lernzettel</button>
            <i class="fas fa-chevron-right"></i>
            <button class="lz-bread-link" data-nav-link="${BASE}">Sport</button>
            <i class="fas fa-chevron-right"></i>
            <span>5.3 · Regeln im Sport</span>
          </nav>
          <h1 class="lz-sub-title">Regeln im <em>Sport.</em></h1>
          <p class="lz-sub-desc">
            Bedeutung, Typen und Handlungsregeln im Sport — 
            Fair Play, Normen und gesellschaftliche Funktion des Regelwerks.
          </p>
          ${renderTags(['Psychologie', '5.3', 'Fair Play', 'Regeltypen', 'Handlungsregeln', 'Normen'])}
        </div>
      </section>

      <section class="lz-content-section">
        <div class="lz-section-wrap">

          <nav class="wim-tabs" id="regelnTabs" aria-label="Regeln im Sport">
            ${REGELN_TABS.map((t, i) => `
              <button class="wim-tab${i === 0 ? ' active' : ''}" data-wim="${t.key}">
                ${t.label}
              </button>`).join('')}
          </nav>

          ${this._panelBedeutung()}
          ${this._panelTypen()}
          ${this._panelHandlung()}

        </div>
      </section>

      <section class="lz-content-section" style="padding-top:0;">
        <div class="lz-section-wrap">
          ${renderPageNav({
            prev: { link: `${BASE}/themen/psychologie/emotionen`,   label: 'Emotionen & Stress' },
            next: null,
          }, BASE)}
        </div>
      </section>

      ${footerHTML(this.router)}
    `;
  }

  _panelBedeutung() {
    return `
      <div class="wim-category" data-wim-cat="bedeutung">
        <h2 class="lz-h2">Bedeutung von Regeln im Sport</h2>
        ${renderInfobox({
          icon: 'fas fa-scale-balanced', title: 'Regeln als konstitutives Element des Sports',
          body: `Sport ist ohne Regeln nicht denkbar — Regeln <strong>definieren</strong> die Sportart, 
                 schaffen <strong>Chancengleichheit</strong> und ermöglichen den fairen Wettkampf.<br>
                 Ohne Regeln gibt es keine Leistungsvergleichbarkeit und kein gemeinsames Spiel.`,
        })}
        ${renderMerkboxGrid([
          { icon: 'fas fa-equals',        title: 'Chancengleichheit', text: 'Regeln sorgen für gleiche Startbedingungen für alle Sportler.' },
          { icon: 'fas fa-shield-halved', title: 'Schutzfunktion',    text: 'Schutz vor Verletzungen und unfairem Verhalten durch klare Grenzen.' },
          { icon: 'fas fa-users',         title: 'Soziale Funktion',  text: 'Regeln ermöglichen gemeinschaftliches Handeln und sozialen Vergleich.' },
          { icon: 'fas fa-book',          title: 'Orientierung',      text: 'Regeln geben Spieler, Trainer und Zuschauern Handlungsorientierung.' },
        ])}
      </div>
    `;
  }

  _panelTypen() {
    return `
      <div class="wim-category hidden" data-wim-cat="typen">
        <h2 class="lz-h2">Regeltypen im Sport</h2>
        ${renderTable({
          headers: ['Regeltyp', 'Beschreibung', 'Beispiel', 'Charakter'],
          rows: [
            ['Konstitutive Regeln', 'Definieren die Sportart — ohne sie existiert das Spiel nicht', 'Ball ins Tor = Tor (Fußball)', 'Unverzichtbar, spieldefinierend'],
            ['Regulative Regeln', 'Verhalten innerhalb des Spiels steuern', 'Keine Hand am Ball (Fußball)', 'Verhaltensnormierend'],
            ['Sicherheitsregeln', 'Schutz der Spieler vor Verletzungen', 'Helmpflicht, Schutzausrüstung', 'Gesundheitsschützend'],
            ['Fairnessregeln (implizit)', 'Ungeschriebene ethische Normen', 'Ball ins Aus werfen bei Verletzung', 'Moralisch, sozial'],
            ['Organisationsregeln', 'Ablauf und Organisation des Wettkampfs', 'Spielzeit, Teilnehmerzahl', 'Administrativ'],
          ],
          highlight: [0],
        })}
      </div>
    `;
  }

  _panelHandlung() {
    return `
      <div class="wim-category hidden" data-wim-cat="handlung">
        <h2 class="lz-h2">Handlungsregeln und Fair Play</h2>
        ${renderInfobox({
          icon: 'fas fa-handshake', title: 'Fair Play',
          body: `Fair Play bedeutet mehr als nur Regelkonformität — es umfasst:<br>
                 <strong>Formales Fair Play:</strong> Einhaltung der Regeln.<br>
                 <strong>Informales Fair Play:</strong> Respektvoller Umgang, Ritterlichkeit 
                 (z. B. Ball absichtlich ins Aus bei Verletzung des Gegners).<br>
                 Fair Play ist ein zentraler Wert des olympischen Gedankens und des Sports insgesamt.`,
        })}
        ${renderAccordion([
          {
            title: 'Normen, Werte und Regeln',
            content: `<strong>Werte:</strong> Allgemeine Vorstellungen vom Wünschenswerten (Gesundheit, Fairness, Respekt).<br>
                       <strong>Normen:</strong> Konkrete Verhaltenserwartungen, die aus Werten abgeleitet werden 
                       (Handschlag nach dem Spiel).<br>
                       <strong>Regeln:</strong> Formalisierte, meist schriftliche Normen mit Sanktionsmechanismus 
                       (Regelwerk, Schiedsrichter).<br><br>
                       Werte → Normen → Regeln (von abstrakt zu konkret).`,
          },
          {
            title: 'Regelübertretung und Sanktionen',
            content: `<strong>Formale Sanktionen:</strong> Gelbe/Rote Karte, Strafstoß, Disqualifikation, Sperre.<br>
                       <strong>Informale Sanktionen:</strong> Soziale Missbilligung, Reputationsverlust, 
                       Ausgrenzung aus der Gruppe.<br><br>
                       <strong>Internalisierung:</strong> Ziel sportpädagogischer Arbeit ist, 
                       dass Sportler Regeln und Werte <em>verinnerlichen</em> — 
                       Regelkonformität aus Überzeugung, nicht aus Angst vor Strafe.`,
          },
          {
            title: 'Gatekeeper-Funktion von Trainern und Lehrern',
            content: `Trainer und Sportlehrer sind zentrale Vermittler von Sportkultur:<br>
                       • Vorbildfunktion (eigenes Verhalten)<br>
                       • Regelklärung und -erklärung<br>
                       • Konsequente, faire Sanktionierung<br>
                       • Förderung von Fair-Play-Verhalten durch Anerkennung<br>
                       • Reflexion von Regelkonflikten im Unterricht.`,
          },
        ])}
        ${renderCompare({
          titleA: 'Regelkonformes Verhalten', titleB: 'Regelumgehung / Regelverstoß',
          listA: [
            'Respektiert Mitbewerber',
            'Langfristig soziale Anerkennung',
            'Stärkt Sportkultur',
            'Intrinsisch motiviert',
          ],
          listB: [
            'Kurzfristiger Vorteil möglich',
            'Verlust von Respekt und Glaubwürdigkeit',
            'Schädigt Sportimage',
            'Normalisiert unfaires Verhalten',
          ],
        })}
      </div>
    `;
  }

  init() {
    i18n.init(); initScrollReveal();
    initInteractive(document.querySelector('.page-sport-sub'));
    document.querySelectorAll('[data-nav-link]').forEach(btn => {
      btn.addEventListener('click', () => { window.location.hash = btn.dataset.navLink; });
    });
    initWimTabs(document);
  }
}