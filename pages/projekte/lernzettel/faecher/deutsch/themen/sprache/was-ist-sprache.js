// pages/projekte/lernzettel/faecher/deutsch/themen/sprache/was-ist-sprache.js
// Deutsch 1.1 — Was ist Sprache? — Erklärungsansätze

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
  renderCompare,
  initInteractive,
} from '../../../../js/components/components.js';
import { renderPageNav } from '../../../../js/components/subnav.js';

import { COLOR, COLOR_RGB, BASE } from '../../deutsch.js';

export default class DeutschWasIstSprachePage {
  constructor(router) {
    this.router = router;
  }

  render() {
    ensureComponentsCSS();

    const el = document.createElement('div');
    el.className = 'page page-deutsch-sub';

    if (!document.querySelector('link[href*="sub.css"]')) {
      const l = document.createElement('link');
      l.rel = 'stylesheet';
      l.href = 'pages/projekte/lernzettel/styles/sub.css';
      document.head.appendChild(l);
    }

    el.style.setProperty('--kap-color',     COLOR);
    el.style.setProperty('--kap-color-rgb', COLOR_RGB);
    el.style.setProperty('--lz-accent',     COLOR);
    el.style.setProperty('--lz-accent-rgb', COLOR_RGB);

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
            <span>1.1 · Was ist Sprache?</span>
          </nav>

          <h1 class="lz-sub-title">
            Was ist Sprache? —<br>
            <em>Erklärungsansätze.</em>
          </h1>

          <p class="lz-sub-desc">
            Zeichensystem · Arbitrarität · Sprechakttheorie · Sprache und Denken
          </p>

          ${renderTags(['Kapitel 1.1', 'Linguistik', 'Abitur 2026'])}
        </div>
      </section>

      <!-- ══════════════ SPRACHE ALS ZEICHENSYSTEM ══════════════ -->
      <section class="lz-content-section">
        <div class="lz-section-wrap">

          ${renderSubhead('Grundlagen')}
          <h2 class="lz-h2 reveal">Sprache als Zeichensystem</h2>

          <p class="lz-prose reveal">
            Sprache ist ein <strong>künstliches, von Menschen geschaffenes Zeichensystem</strong>,
            das zur Verständigung dient. Im Gegensatz zu natürlichen Zeichen (Rauch → Feuer)
            sind sprachliche Zeichen durch gesellschaftliche Übereinkunft entstanden.
          </p>

          ${renderMerkboxGrid([
            {
              icon:  'fas fa-shuffle',
              title: 'Arbitrarität',
              text:  'Die Beziehung zwischen Lautform (Signifikant) und Bedeutung (Signifikat) ist willkürlich — es gibt keinen natürlichen Grund, warum ein Baum „Baum" heißt.',
            },
            {
              icon:  'fas fa-handshake',
              title: 'Konventionalität',
              text:  'Sprachzeichen beruhen auf gesellschaftlicher Übereinkunft. Alle Sprecher einer Gemeinschaft akzeptieren dieselben Zeichen.',
            },
            {
              icon:  'fas fa-sitemap',
              title: 'Systematik',
              text:  'Sprache folgt Regeln (Grammatik), die das Kombinieren von Zeichen ermöglichen.',
            },
            {
              icon:  'fas fa-infinity',
              title: 'Produktivität',
              text:  'Mit endlich vielen Zeichen können unendlich viele Äußerungen gebildet werden.',
            },
            {
              icon:  'fas fa-layer-group',
              title: 'Doppelte Gliederung',
              text:  'Sprache besteht aus bedeutungslosen Einheiten (Laute / Phoneme) und bedeutungstragenden Einheiten (Wörter / Morpheme).',
            },
          ])}

          ${renderInfobox({
            type:  'tip',
            icon:  'fas fa-dog',
            title: 'Beispiel: Das Zeichen „Hund"',
            body:  `<ul style="margin:0.5rem 0 0 1.2rem; line-height:1.9;">
                      <li><strong>Signifikant (Lautform):</strong> /hʊnt/ — wie wir es aussprechen</li>
                      <li><strong>Signifikat (Bedeutung):</strong> vierbeiniges Haustier, bellt, ist treu</li>
                      <li><strong>Referent:</strong> der konkrete Hund in der Realität</li>
                      <li><strong>Arbitrarität:</strong> In anderen Sprachen heißt dasselbe Tier <em>dog</em>, <em>chien</em>, <em>perro</em> — rein konventionell.</li>
                    </ul>`,
          })}

        </div>
      </section>

      <!-- ══════════════ SPRECHAKTTHEORIE ══════════════ -->
      <section class="lz-content-section">
        <div class="lz-section-wrap">

          ${renderSubhead('Austin & Searle')}
          <h2 class="lz-h2 reveal">Sprache als soziales Handeln</h2>

          <p class="lz-prose reveal">
            Sprechen ist nicht nur Informieren — <strong>Sprechen ist Handeln</strong>.
            Jede Äußerung vollzieht nach Austin drei Akte gleichzeitig:
          </p>

          ${renderTable({
            headers: ['Akt', 'Was passiert?', 'Beispiel'],
            rows: [
              [
                '<strong>Lokutionärer Akt</strong>',
                'Das Aussprechen von Wörtern mit bestimmter Bedeutung',
                '„Die Tür ist offen."',
              ],
              [
                '<strong>Illokutionärer Akt</strong>',
                'Die beabsichtigte Handlung: Bitte, Befehl, Warnung, Versprechen …',
                'Aufforderung: „Schließ bitte die Tür!"',
              ],
              [
                '<strong>Perlokutionärer Akt</strong>',
                'Die tatsächliche Wirkung beim Empfänger',
                'Der Angesprochene schließt die Tür (oder auch nicht).',
              ],
            ],
          })}

          ${renderInfobox({
            type:  '',
            icon:  'fas fa-graduation-cap',
            title: 'Abitur-Relevanz',
            body:  'In der Textanalyse fragst du immer: Was beabsichtigt der Autor mit seiner Äußerung '
                 + '(<em>illokutionärer Akt</em>) und welche Wirkung erzielt er beim Leser '
                 + '(<em>perlokutionärer Akt</em>)?',
          })}

        </div>
      </section>

      <!-- ══════════════ SPRACHE UND DENKEN ══════════════ -->
      <section class="lz-content-section">
        <div class="lz-section-wrap">

          ${renderSubhead('Kognition & Sprache')}
          <h2 class="lz-h2 reveal">Sprache und Denken</h2>

          <p class="lz-prose reveal">
            Beeinflusst die Sprache, die wir sprechen, wie wir die Welt wahrnehmen?
            Zwei Positionen stehen sich gegenüber:
          </p>

          ${renderCompare({
            titleA: '🔵 Sapir-Whorf-Hypothese',
            titleB: '🔴 Gegenposition',
            listA: [
              'Sprache beeinflusst (schwache Version) oder bestimmt (starke Version) unser Denken.',
              'Eskimo-Sprachen haben viele Wörter für „Schnee" → differenziertere Wahrnehmung.',
              'Sprachen ohne Zukunftsform → anderes Zeitverständnis.',
              'Gendergerechte Sprache → Bewusstsein für Geschlechterrollen.',
            ],
            listB: [
              'Denken ist unabhängig von Sprache — Sprache ist nur Werkzeug.',
              'Tiere ohne Sprache können denken und Probleme lösen.',
              'Vorsprachliche Kinder zeigen kognitives Verständnis.',
              'Menschen können Konzepte denken, für die sie keine Worte haben.',
            ],
          })}

          ${renderAccordion([
            {
              title:   '🎯 Abitur-Relevanz: Wo taucht das Thema auf?',
              content: `<ul style="line-height:1.9; margin-left:1.2rem;">
                          <li>Gendergerechte Sprache und ihre gesellschaftliche Wirkung</li>
                          <li>Politische Sprache und Manipulation durch Frames</li>
                          <li>Mehrsprachigkeit und Identität</li>
                          <li>Bedeutung von Sprachbildung für Chancengleichheit</li>
                        </ul>`,
            },
            {
              title:   '📚 Wichtige Begriffe im Überblick',
              content: `<ul style="line-height:1.9; margin-left:1.2rem;">
                          <li><strong>Signifikant:</strong> Lautform / Ausdruck eines Zeichens</li>
                          <li><strong>Signifikat:</strong> Bedeutung / Inhalt eines Zeichens</li>
                          <li><strong>Referent:</strong> Das reale Objekt, auf das verwiesen wird</li>
                          <li><strong>Arbitrarität:</strong> Willkürlichkeit der Zeichenbeziehung</li>
                          <li><strong>Konventionalität:</strong> Gesellschaftliche Übereinkunft</li>
                          <li><strong>Linguistisches Relativitätsprinzip:</strong> Sapir-Whorf-Hypothese</li>
                        </ul>`,
            },
          ])}

        </div>
      </section>

      <!-- ══════════════ PAGE NAVIGATION BOTTOM ══════════════ -->
      <section class="lz-content-section" style="padding:1.5rem 0 3rem;">
        <div class="lz-section-wrap">
          ${renderPageNav({
            prev: { label: '7.4 Sprachliche Mittel — Vorher / Nachher', link: `${BASE}/themen/kurzgeschichte/stilmittel-analyse` },
            next: { label: '1.2 Leistung & kommunikative Funktion', link: `${BASE}/themen/sprache/leistung-funktion` },
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