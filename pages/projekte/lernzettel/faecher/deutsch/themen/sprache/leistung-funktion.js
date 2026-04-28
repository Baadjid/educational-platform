// pages/projekte/lernzettel/faecher/deutsch/themen/sprache/leistung-funktion.js
// Deutsch 1.2 — Leistung & kommunikative Funktion von Sprache

import { initScrollReveal }  from '../../../../../../../shared/js/index.js';
import { footerHTML }         from '../../../../../../../components/Footer.js';
import { i18n }               from '../../../../../../../shared/js/i18n.js';
import {
  ensureComponentsCSS,
  renderSubhead,
  renderTags,
  renderInfobox,
  renderTable,
  renderAccordion,
  renderMerkboxGrid,
  initInteractive,
} from '../../../../js/components/components.js';
import { renderPageNav } from '../../../../js/components/subnav.js';
import {
  ensureAudioCardCSS,
  renderAudioCard,
} from '../../../../js/components/audio-card.js';

import { COLOR, COLOR_RGB, BASE } from '../../deutsch.js';

// ─── Audio-URL ───────────────────────────────────────────────

const AUDIO_FRAMES = 'https://audio.jukehost.co.uk/CcV8C2LXyGZto6EG1g3BIkNQMnAmLkc8';

export default class DeutschLeistungFunktionPage {
  constructor(router) {
    this.router = router;
  }

  render() {
    ensureComponentsCSS();
    ensureAudioCardCSS();

    const el = document.createElement('div');
    el.className = 'page page-deutsch-sub';

    if (!document.querySelector('link[href*="sub.css"]')) {
      const l = document.createElement('link');
      l.rel = 'stylesheet';
      l.href = 'pages/projekte/lernzettel/styles/sub.css';
      document.head.appendChild(l);
    }

    el.style.setProperty('--kap-color',       COLOR);
    el.style.setProperty('--kap-color-rgb',   COLOR_RGB);
    el.style.setProperty('--lz-accent',       COLOR);
    el.style.setProperty('--lz-accent-rgb',   COLOR_RGB);
    el.style.setProperty('--audio-color',     COLOR);
    el.style.setProperty('--audio-color-rgb', COLOR_RGB);

    el.innerHTML = this._html();
    return el;
  }

  _html() {
    return `
      <!-- ══════════════ SUB-HERO ══════════════ -->
      <section class="lz-sub-hero">
        <div class="lz-sub-hero-orb" aria-hidden="true"></div>
        <div class="lz-sub-hero-inner">

          <nav class="lz-sub-breadcrumb">
            <button class="lz-bread-link" data-nav-link="/projekte/lernzettel">Lernzettel</button>
            <i class="fas fa-chevron-right"></i>
            <button class="lz-bread-link" data-nav-link="${BASE}">Deutsch</button>
            <i class="fas fa-chevron-right"></i>
            <span>1.2 · Leistung & kommunikative Funktion</span>
          </nav>

          <h1 class="lz-sub-title">
            Leistung & kommunikative<br>
            <em>Funktion von Sprache.</em>
          </h1>

          <p class="lz-sub-desc">
            Organon-Modell · Vier-Seiten-Modell · Sprechakttheorie · Frames
          </p>

          ${renderTags(['Kapitel 1.2', 'Kommunikation', 'Abitur 2026'])}
        </div>
      </section>

      <!-- ══════════════ AUDIO ══════════════ -->
      <section class="lz-content-section lz-audio-section">
        <div class="lz-section-wrap">
          ${renderSubhead('Eigener Beitrag')}
          <h2 class="lz-h2 reveal" style="margin-bottom:0.5rem;">Jetzt anhören</h2>
          <p class="lz-prose reveal" style="max-width:580px; margin-bottom:0;">
            Frames als sprachliche Gestaltungsmittel politischer Kommunikation —
            direkt anknüpfend an Bühlers Appellfunktion und Watzlawicks Beziehungsebene.
          </p>
          ${renderAudioCard('Wie Frames unser politisches Denken beeinflussen', 'Sprachliche Rahmen prägen, wie wir politische Realität wahrnehmen — lang bevor wir anfangen zu argumentieren. Ein persönlicher Audiobeitrag zur Verbindung von Linguistik, Kognition und politischer Kommunikation.', AUDIO_FRAMES)}
        </div>
      </section>

      <!-- ══════════════ INHALT ══════════════ -->
      <section class="lz-content-section">
        <div class="lz-section-wrap">

          ${renderSubhead('Überblick')}
          <h2 class="lz-h2 reveal">Sprachfunktionen im Überblick</h2>

          ${renderMerkboxGrid([
            {
              icon:  'fas fa-globe',
              title: 'Darstellungsfunktion',
              text:  'Informiert über Sachverhalte und Wirklichkeit (Bühler: Symbolfunktion).',
            },
            {
              icon:  'fas fa-face-smile',
              title: 'Ausdrucksfunktion',
              text:  'Gibt Gefühle und innere Zustände des Senders preis (Bühler: Symptomfunktion).',
            },
            {
              icon:  'fas fa-bullhorn',
              title: 'Appellfunktion',
              text:  'Soll den Empfänger zu Handlungen oder Einstellungen bewegen (Bühler: Signalfunktion).',
            },
          ])}

        </div>
      </section>

      <!-- ── Organon-Modell ── -->
      <section class="lz-content-section">
        <div class="lz-section-wrap">

          ${renderSubhead('Karl Bühler (1934)')}
          <h2 class="lz-h2 reveal">Das Organon-Modell</h2>

          ${renderInfobox({
            type:  'tip',
            icon:  'fas fa-lightbulb',
            title: 'Merksatz',
            body:  'Sprache ist Werkzeug (<em>organon</em>) — sie steht immer '
                 + 'zwischen Sender, Empfänger und Welt und erfüllt alle drei '
                 + 'Funktionen gleichzeitig, aber in unterschiedlicher Gewichtung.',
          })}

          ${renderTable({
            headers: ['Funktion', 'Bezug', 'Dominiert in …'],
            rows: [
              ['Darstellungsfunktion', 'Welt / Sachverhalte', 'Sachtexten, Berichten, Wissenschaft'],
              ['Ausdrucksfunktion',    'Sender / Ich',        'Lyrik, Tagebuch, persönlichem Brief'],
              ['Appellfunktion',       'Empfänger / Du',      'Werbung, politischer Rede, Aufruf'],
            ],
          })}

        </div>
      </section>

      <!-- ── Vier-Seiten-Modell ── -->
      <section class="lz-content-section">
        <div class="lz-section-wrap">

          ${renderSubhead('Schulz von Thun')}
          <h2 class="lz-h2 reveal">Das Vier-Seiten-Modell</h2>

          ${renderAccordion([
            {
              title:   '1️⃣ Sachinhalt — Worüber informiere ich?',
              content: 'Die sachliche Information, Daten und Fakten. Kriterien: wahr / unwahr, relevant / irrelevant.',
            },
            {
              title:   '2️⃣ Selbstkundgabe — Was gebe ich von mir preis?',
              content: 'Was der Sender unbewusst über sich selbst, seine Werte und Gefühle mitteilt.',
            },
            {
              title:   '3️⃣ Beziehung — Wie stehe ich zu dir?',
              content: 'Ausgedrückt durch Formulierung, Tonfall, Mimik und Gestik. Oft entscheidender als der Sachinhalt.',
            },
            {
              title:   '4️⃣ Appell — Wozu will ich dich veranlassen?',
              content: 'Die Absicht, den Empfänger zu einem bestimmten Handeln zu bewegen. Offen (Befehl) oder verdeckt (Manipulation).',
            },
          ])}

          ${renderInfobox({
            type:  '',
            icon:  'fas fa-car',
            title: 'Klassisches Beispiel: „Die Ampel ist grün!"',
            body:  `<ul style="margin:0.5rem 0 0 1.2rem; line-height:1.8;">
                      <li><strong>Sachinhalt:</strong> Die Ampel zeigt Grün.</li>
                      <li><strong>Selbstkundgabe:</strong> Ich bin aufmerksam / ungeduldig.</li>
                      <li><strong>Beziehung:</strong> Du solltest besser aufpassen.</li>
                      <li><strong>Appell:</strong> Fahr endlich los!</li>
                    </ul>`,
          })}

        </div>
      </section>

      <!-- ── Watzlawick ── -->
      <section class="lz-content-section">
        <div class="lz-section-wrap">

          ${renderSubhead('Paul Watzlawick')}
          <h2 class="lz-h2 reveal">5 Kommunikationsaxiome</h2>

          ${renderTable({
            headers: ['Axiom', 'Kernaussage'],
            rows: [
              ['1', 'Man kann nicht <em>nicht</em> kommunizieren.'],
              ['2', 'Jede Kommunikation hat einen Inhalts- und einen Beziehungsaspekt.'],
              ['3', 'Kommunikation ist kreisförmig (Interpunktionsproblem).'],
              ['4', 'Digitale (verbale) und analoge (nonverbale) Modalitäten.'],
              ['5', 'Kommunikation ist symmetrisch oder komplementär.'],
            ],
          })}

        </div>
      </section>

      <!-- ══════════════ PAGE NAVIGATION BOTTOM ══════════════ -->
      <section class="lz-content-section" style="padding:1.5rem 0 3rem;">
        <div class="lz-section-wrap">
          ${renderPageNav({
            prev: { label: '1.1 Was ist Sprache?', link: `${BASE}/themen/sprache/was-ist-sprache` },
            next: { label: '1.3 Sprachvarietäten', link: `${BASE}/themen/sprache/sprachvarietaeten` },
          }, BASE)}
        </div>
      </section>

      ${footerHTML(this.router)}
    `;
  }

  init() {
    i18n.init();
    initScrollReveal();
    initInteractive(document);

    document.querySelectorAll('[data-nav-link]').forEach(btn => {
      btn.addEventListener('click', () => {
        window.location.hash = btn.dataset.navLink;
      });
    });

    document.querySelectorAll('[data-link]').forEach(btn => {
      btn.addEventListener('click', () => { window.location.hash = btn.dataset.link; });
    });
  }
}