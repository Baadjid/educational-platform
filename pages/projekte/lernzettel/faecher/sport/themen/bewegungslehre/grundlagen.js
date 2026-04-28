// pages/projekte/lernzettel/faecher/sport/themen/bewegungslehre/grundlagen.js
// Bewegungslehre 3.1 — Grundlagen

import { initScrollReveal }  from '../../../../../../../shared/js/index.js';
import { footerHTML }         from '../../../../../../../components/Footer.js';
import { i18n }               from '../../../../../../../shared/js/i18n.js';
import { initWimTabs }       from '../../../../../../../shared/js/wim-tabs.js';
import {
  ensureComponentsCSS,
  renderSubhead, renderTags, renderInfobox, renderTable,
  renderTabs, renderAccordion, renderMerkboxGrid, renderCompare,
  initInteractive,
} from '../../../../js/components/components.js';
import { renderPageNav } from '../../../../js/components/subnav.js';

import { COLOR, COLOR_RGB, BASE } from '../../sport.js';

// ─── WIM-Tab-Daten ───────────────────────────────────────────────
const BEWEGUNGSLEHRE_TABS = [
  { key: 'betrachtung', label: '🔭 Betrachtungsweisen' },
  { key: 'beschreibung', label: '📝 Bewegungsbeschreibung' },
  { key: 'merkmale',     label: '⭐ Bewegungsmerkmale' },
];

export default class SportBewegungslehreGrundlagenPage {
  constructor(router) { this.router = router; }

  render() {
    ensureComponentsCSS();
    const el = document.createElement('div');
    el.className = 'page page-sport-sub';
    if (!document.querySelector('link[href*="sub.css"]')) {
      const l = document.createElement('link');
      l.rel = 'stylesheet'; l.href = 'pages/projekte/lernzettel/styles/sub.css';
      document.head.appendChild(l);
    }
    el.style.setProperty('--kap-color', COLOR);
    el.style.setProperty('--kap-color-rgb', COLOR_RGB);
    el.style.setProperty('--lz-accent', COLOR);
    el.style.setProperty('--lz-accent-rgb', COLOR_RGB);
    el.innerHTML = this._html();
    return el;
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
            <span>3.1 · Grundlagen der Bewegungslehre</span>
          </nav>
          <h1 class="lz-sub-title">Grundlagen der <em>Bewegungslehre.</em></h1>
          <p class="lz-sub-desc">
            Betrachtungsweisen, Bewegungsbeschreibung und qualitative 
            Bewegungsmerkmale nach Meinel & Schnabel.
          </p>
          ${renderTags(['Bewegungslehre', '3.1', 'Bewegungsmerkmale', 'Analyse', 'Qualität'])}
        </div>
      </section>

      <section class="lz-content-section">
        <div class="lz-section-wrap">

          <nav class="wim-tabs" id="bewegungslehreTabs" aria-label="Bewegungslehre Grundlagen">
            ${BEWEGUNGSLEHRE_TABS.map((t, i) => `
              <button class="wim-tab${i === 0 ? ' active' : ''}" data-wim="${t.key}">
                ${t.label}
              </button>`).join('')}
          </nav>

          ${this._panelBetrachtung()}
          ${this._panelBeschreibung()}
          ${this._panelMerkmale()}

        </div>
      </section>

      <section class="lz-content-section" style="padding-top:0;">
        <div class="lz-section-wrap">
          ${renderPageNav({
            prev: { link: `${BASE}/themen/trainingslehre/lerntheorie`,   label: 'Lerntheorie' },
            next: { link: `${BASE}/themen/bewegungslehre/physik`,     label: 'Physikalische Gesetze' },
          }, BASE)}
        </div>
      </section>
      
      ${footerHTML(this.router)}
    `;
  }

  _panelBetrachtung() {
    return `
      <div class="wim-category" data-wim-cat="betrachtung">
        <h2 class="lz-h2">Betrachtungsweisen der Bewegungslehre</h2>
        ${renderInfobox({
          icon: 'fas fa-eye', title: 'Was ist Bewegungslehre?',
          body: `Die Bewegungslehre (Motologie / Biomechanik) untersucht sportliche Bewegungen aus 
                 verschiedenen Perspektiven, um sie zu <strong>beschreiben, erklären und optimieren</strong>. 
                 Sie verbindet Physik, Anatomie, Neurophysiologie und Pädagogik.`,
        })}
        ${renderTable({
          headers: ['Betrachtungsweise', 'Fragestellung', 'Methode', 'Ziel'],
          rows: [
            ['Biomechanisch', 'Welche Kräfte und Hebel wirken?', 'Kinematik, Kinetik, Kraft-Zeit-Messung', 'Optimierung der Leistung'],
            ['Qualitativ-pädagogisch', 'Wie sieht die Bewegung aus? Was ist zu verbessern?', 'Beobachtung, Videoanalyse', 'Techniktraining'],
            ['Neurophysiologisch', 'Wie wird die Bewegung gesteuert?', 'EMG, Neuroimaging', 'Lernoptimierung'],
            ['Entwicklungsbezogen', 'Wie verändert sich Bewegung im Lebensverlauf?', 'Längsschnittstudien', 'Altersgerechte Förderung'],
          ],
          highlight: [0],
        })}
      </div>
    `;
  }

  _panelBeschreibung() {
    return `
      <div class="wim-category hidden" data-wim-cat="beschreibung">
        <h2 class="lz-h2">Bewegungsbeschreibung</h2>
        <p class="lz-prose">
          Bewegungen werden nach definierten Kategorien beschrieben, 
          um eine einheitliche Fachsprache zu gewährleisten und Vergleiche zu ermöglichen.
        </p>
        ${renderTable({
          headers: ['Beschreibungskategorie', 'Parameter', 'Beispiel'],
          rows: [
            ['Räumlich', 'Richtung, Bahn, Amplitude, Körperhaltung', 'Wurfrichtung, Kniewinkel beim Sprung'],
            ['Zeitlich', 'Dauer, Tempo, Rhythmus, Frequenz', 'Kontaktzeit beim Sprint, Schrittfrequenz'],
            ['Dynamisch', 'Kraft, Impuls, Beschleunigung', 'Abdruckkraft, Kraftverlauf'],
            ['Koordinativ', 'Gleichzeitigkeit / Nacheinander von Teilbewegungen', 'Arm-Bein-Koordination beim Schwimmen'],
          ],
        })}
        ${renderInfobox({
          type: 'tip', icon: 'fas fa-lightbulb', title: 'Kinematik vs. Kinetik',
          body: `<strong>Kinematik:</strong> Beschreibt Bewegung ohne Berücksichtigung der Ursachen 
                 (Weg, Geschwindigkeit, Beschleunigung) — das „Wie".<br>
                 <strong>Kinetik:</strong> Erklärt Bewegung durch die wirkenden Kräfte — das „Warum".<br>
                 Beide zusammen ermöglichen vollständige biomechanische Analyse.`,
        })}
      </div>
    `;
  }

  _panelMerkmale() {
    return `
      <div class="wim-category hidden" data-wim-cat="merkmale">
        <h2 class="lz-h2">Qualitative Bewegungsmerkmale (Meinel & Schnabel)</h2>
        <p class="lz-prose">
          Die qualitativen Bewegungsmerkmale ermöglichen eine standardisierte 
          Beurteilung sportlicher Bewegungen ohne aufwändige Messtechnik — 
          wichtig für Trainer und Sportlehrer.
        </p>
        ${renderAccordion([
          {
            title: '1. Bewegungskopplung',
            content: `<strong>Definition:</strong> Fähigkeit, Teilbewegungen zeitlich-räumlich zu koordinieren.<br>
                       <strong>Günstig:</strong> Teilbewegungen fließen nahtlos ineinander über (z. B. Anlauf → Absprung → Flug beim Hochsprung).<br>
                       <strong>Ungünstig:</strong> Ruckartige, abgehackte Übergänge zwischen Phasen.`,
          },
          {
            title: '2. Bewegungsfluss',
            content: `<strong>Definition:</strong> Kontinuität und Flüssigkeit des Bewegungsablaufs ohne störende Unterbrechungen.<br>
                       <strong>Günstig:</strong> Glatter, welliger Bewegungsfluss mit harmonischen Übergängen.<br>
                       <strong>Ungünstig:</strong> Stockungen, unnötige Pausen, abrupte Richtungsänderungen ohne Vorbereitung.`,
          },
          {
            title: '3. Bewegungsrhythmus',
            content: `<strong>Definition:</strong> Zeitlich-dynamische Gliederung der Bewegung in Spannungs- und Entspannungsphasen.<br>
                       <strong>Günstig:</strong> Bewegung folgt einem sportartspezifischen Rhythmusmuster 
                       (z. B. Anlauf-Rhythmus im Stabhochsprung).<br>
                       <strong>Ungünstig:</strong> Arrhythmie, ungleichmäßige Schritt- oder Armfrequenz.`,
          },
          {
            title: '4. Bewegungspräzision / -konstanz',
            content: `<strong>Definition:</strong> Genauigkeit der Bewegungsausführung im Hinblick auf Ziel und Wiederholbarkeit.<br>
                       <strong>Präzision:</strong> Treffsicherheit, räumliche Genauigkeit (z. B. Darts, Bogenschießen).<br>
                       <strong>Konstanz:</strong> Stabile Reproduzierbarkeit unter gleichen Bedingungen.`,
          },
          {
            title: '5. Bewegungsumfang (Amplitude)',
            content: `<strong>Definition:</strong> Räumliche Ausdehnung der Bewegung (Range of Motion der Gelenke).<br>
                       <strong>Günstig:</strong> Volle Ausnutzung des Bewegungsumfangs → längerer Beschleunigungsweg, mehr Kraft.<br>
                       <strong>Ungünstig:</strong> Eingeschränkte Amplitude durch Beweglichkeits- oder Koordinationsdefizite.`,
          },
          {
            title: '6. Bewegungstempo / -geschwindigkeit',
            content: `<strong>Definition:</strong> Geschwindigkeit der Gesamtbewegung oder von Teilbewegungen.<br>
                       <strong>Optimales Tempo:</strong> Situationsabhängig — maximales Tempo beim Sprint, 
                       kontrolliertes Tempo beim Techniklernen.<br>
                       <strong>Fehler:</strong> Zu schnell (Technik bricht zusammen) oder zu langsam (kein Trainingseffekt).`,
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