// pages/projekte/lernzettel/faecher/sport/themen/psychologie/motivation.js
// Psychologie & Gesellschaft 5.1 — Motive und Motivation

import { initScrollReveal }  from '../../../../../../../shared/js/index.js';
import { footerHTML }         from '../../../../../../../components/Footer.js';
import { i18n }               from '../../../../../../../shared/js/i18n.js';
import { initWimTabs }       from '../../../../../../../shared/js/wim-tabs.js';
import {
  ensureComponentsCSS, renderSubhead, renderTags, renderInfobox,
  renderTable, renderTabs, renderAccordion, renderMerkboxGrid,
  renderCompare, renderVTimeline, initInteractive,
} from '../../../../js/components/components.js';
import { renderPageNav } from '../../../../js/components/subnav.js';

import { COLOR, COLOR_RGB, BASE } from '../../sport.js';

// ─── WIM-Tab-Daten ───────────────────────────────────────────────
const MOTIVATION_TABS = [
  { key: 'motive',      label: '🎯 Motive & Motivation' },
  { key: 'leistung',    label: '📊 Leistungsmotivation' },
];

export default class SportMotivationPage {
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
            <span>5.1 · Motive und Motivation</span>
          </nav>
          <h1 class="lz-sub-title">Motive und <em>Motivation.</em></h1>
          <p class="lz-sub-desc">
            Sportmotive, intrinsische und extrinsische Motivation, 
            Leistungsmotivation und Motivationstheorien im Sport.
          </p>
          ${renderTags(['Psychologie', '5.1', 'Motivation', 'Leistungsmotivation', 'Atkinson', 'Flow'])}
        </div>
      </section>

      <section class="lz-content-section">
        <div class="lz-section-wrap">

          <nav class="wim-tabs" id="motivationTabs" aria-label="Motive und Motivation">
            ${MOTIVATION_TABS.map((t, i) => `
              <button class="wim-tab${i === 0 ? ' active' : ''}" data-wim="${t.key}">
                ${t.label}
              </button>`).join('')}
          </nav>

          ${this._panelMotive()}
          ${this._panelLeistung()}

        </div>
      </section>

      <section class="lz-content-section" style="padding-top:0;">
        <div class="lz-section-wrap">
          ${renderPageNav({
            prev: { link: `${BASE}/themen/gesundheit/doping`,   label: 'Doping' },
            next: { link: `${BASE}/themen/psychologie/emotionen`,     label: 'Emotionen & Stress' },
          }, BASE)}
        </div>
      </section>

      ${footerHTML(this.router)}
    `;
  }

  _panelMotive() {
    return `
      <div class="wim-category" data-wim-cat="motive">
        <h2 class="lz-h2">Motive und Motivation im Sport</h2>
        ${renderInfobox({
          icon: 'fas fa-fire-flame-curved', title: 'Definitionen',
          body: `<strong>Motiv:</strong> Relativ überdauernde, persönlichkeitsspezifische Bereitschaft, 
                 bestimmte Situationen als bedeutsam zu erleben (z. B. Leistungsstreben, Anschluss).<br>
                 <strong>Motivation:</strong> Aktueller Zustand der Aktivierung — Motiv trifft auf passende Situation.<br>
                 <strong>Formel:</strong> Motivation = Person (Motiv) × Situation (Anreiz)`,
        })}
        ${renderTable({
          headers: ['Sportmotiv', 'Beschreibung', 'Beispiel'],
          rows: [
            ['Leistung', 'Eigene Fähigkeiten zeigen, Vergleich', 'Wettkampf, Bestzeit verbessern'],
            ['Anschluss', 'Sozialer Kontakt, Zugehörigkeit', 'Vereinssport, Mannschaft'],
            ['Gesundheit', 'Körper fit halten, Krankheitsprävention', 'Laufen für das Herz'],
            ['Spaß / Freude', 'Eigenwert der Bewegung', 'Spielen, Tanzen'],
            ['Figur / Ästhetik', 'Körperliche Erscheinung', 'Fitness-Studio'],
            ['Ausgleich / Stress', 'Entspannung, Abschalten', 'Joggen nach der Arbeit'],
          ],
        })}
        ${renderCompare({
          titleA: 'Intrinsische Motivation', titleB: 'Extrinsische Motivation',
          listA: [
            'Aus innerer Überzeugung / Freude',
            'Aktivität ist Selbstzweck',
            'Nachhaltiger, stabiler',
            'Beispiel: Laufen weil es Freude macht',
            'Fördern: Autonomie, Kompetenz, Eingebundenheit',
          ],
          listB: [
            'Durch externe Anreize angetrieben',
            'Mittel zum Zweck',
            'Kurzfristiger wirksam',
            'Beispiel: Sport für Pokal/Prämie',
            'Gefahr: Korrumpierungseffekt',
          ],
        })}
      </div>
    `;
  }

  _panelLeistung() {
    return `
      <div class="wim-category hidden" data-wim-cat="leistung">
        <h2 class="lz-h2">Leistungsmotivation und Theorien</h2>
        ${renderAccordion([
          {
            title: 'Risikowahl-Modell nach Atkinson',
            content: `<strong>Kernaussage:</strong> Sportler wählen Aufgaben nach ihrer 
                       <em>Erfolgsmotivation</em> vs. <em>Misserfolgsmotivation</em>.<br><br>
                       <strong>Erfolgsmotivierte</strong> (HE > HM): Bevorzugen mittelschwere Aufgaben 
                       (50 % Erfolgswahrscheinlichkeit) → maximale Herausforderung.<br><br>
                       <strong>Misserfolgsmotivierte</strong> (HM > HE): Meiden mittelschwere Aufgaben → 
                       wählen sehr leichte (sichere Erfolge) oder sehr schwere Aufgaben (Scheitern 
                       vorhersehbar → kein Gesichtsverlust).<br><br>
                       <strong>Formel:</strong> T(Erfolg) = M(E) × P(E) × I(E) — 
                       Motivation × Erfolgswahrscheinlichkeit × Anreizwert`,
          },
          {
            title: 'Attributionstheorie (Weiner)',
            content: `<strong>Frage:</strong> Worauf führe ich Erfolg / Misserfolg zurück?<br><br>
                       <strong>Attributionsdimensionen:</strong><br>
                       • Locus of Control: intern (Fähigkeit, Anstrengung) vs. extern (Glück, Aufgabe)<br>
                       • Stabilität: stabil (Fähigkeit) vs. variabel (Anstrengung, Glück)<br>
                       • Kontrollierbarkeit: kontrollierbar vs. unkontrollierbar<br><br>
                       <strong>Sporpädagogisch:</strong> Förderliche Attribution = Erfolg intern & stabil 
                       (Fähigkeit), Misserfolg intern & variabel (fehlende Anstrengung) → 
                       erhöht Selbstwirksamkeit.`,
          },
          {
            title: 'Flow-Erleben (Csikszentmihalyi)',
            content: `Flow = optimaler Erlebenszustand völliger Aufgabenversunkenheit.<br><br>
                       <strong>Bedingungen:</strong> Balance zwischen <em>Anforderung</em> und <em>Fähigkeit</em>. 
                       Zu leicht → Langeweile; zu schwer → Angst.<br><br>
                       <strong>Merkmale:</strong> Zeitvergessen, Selbstvergessenheit, Handlungs-Bewusstseins-Verschmelzung, 
                       klare Ziele, direktes Feedback.<br><br>
                       <strong>Im Sport:</strong> Zone-Erleben im Wettkampf, optimaler Leistungszustand.`,
          },
        ])}
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