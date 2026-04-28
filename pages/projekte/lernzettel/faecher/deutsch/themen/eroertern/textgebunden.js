// pages/projekte/lernzettel/faecher/deutsch/themen/eroertern/textgebunden.js
// Deutsch 3.2 — Textgebundene Erörterung

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


export default class DeutschTextgebundenPage {
  constructor(router) { this.router = router; }

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
      <section class="lz-sub-hero">
        <div class="lz-sub-hero-orb" aria-hidden="true"></div>
        <div class="lz-sub-hero-inner">
          <nav class="lz-sub-breadcrumb">
            <button class="lz-bread-link" data-nav-link="/projekte/lernzettel">Lernzettel</button>
            <i class="fas fa-chevron-right"></i>
            <button class="lz-bread-link" data-nav-link="${BASE}">Deutsch</button>
            <i class="fas fa-chevron-right"></i>
            <span>3.2 · Textgebundene Erörterung</span>
          </nav>
          <h1 class="lz-sub-title">Textgebundene<br><em>Erörterung.</em></h1>
          <p class="lz-sub-desc">Aufbau · Analyse + Erörterung · Zitieren · Häufige Fehler</p>
          ${renderTags(['Kapitel 3.2', 'Erörterung', 'Abitur 2026'])}
        </div>
      </section>

      <!-- ══ WAS IST SIE? ══ -->
      <section class="lz-content-section">
        <div class="lz-section-wrap">
          ${renderSubhead('Definition')}
          <h2 class="lz-h2 reveal">Was ist die textgebundene Erörterung?</h2>
          <p class="lz-prose reveal">
            Die <strong>textgebundene Erörterung</strong> ist die häufigste Aufgabe im
            Deutsch-Abitur BW. Ein Ausgangstext (Kommentar, Essay, Rede) wird zuerst analysiert,
            dann kritisch erörtert. Es geht also um zwei Fragen: <em>Was sagt der Text und
            wie sagt er es?</em> — und: <em>Hat er damit recht?</em>
          </p>
          ${renderCompare({
            titleA: '🔬 Analyse des Textes',
            titleB: '⚖️ Eigene Erörterung',
            listA: [
              'Argumentationsgang des Autors nachvollziehen',
              'Sprachliche Mittel benennen und deuten',
              'Intention des Autors erschließen',
              'Neutral, beschreibend, ohne eigene Meinung',
            ],
            listB: [
              'Eigene Position zum Thema des Textes beziehen',
              'Eigene Argumente für und gegen die These des Autors',
              'Schwächen, Einseitigkeiten im Text konkret benennen',
              'Klar wertend, begründet formulieren',
            ],
          })}
        </div>
      </section>

      <!-- ══ AUFBAU ══ -->
      <section class="lz-content-section">
        <div class="lz-section-wrap">
          ${renderSubhead('Gliederung')}
          <h2 class="lz-h2 reveal">Aufbau der textgebundenen Erörterung</h2>
          ${renderTable({
            headers: ['Teil', 'Inhalt', 'Umfang'],
            rows: [
              ['<strong>Einleitung</strong>',
               'Autor · Titel · Textsorte · Erscheinungsdatum · Thema · Kernthese des Textes',
               '~10 %'],
              ['<strong>Hauptteil A — Analyse</strong>',
               'Gedankengang · Argumentationsstruktur · sprachliche Gestaltung (Mittel + Wirkung)',
               '~35 %'],
              ['<strong>Hauptteil B — Erörterung</strong>',
               'Kritische Auseinandersetzung · eigene Argumente · Bewertung der Thesen',
               '~45 %'],
              ['<strong>Schluss</strong>',
               'Zusammenfassung · persönliche Stellungnahme · evtl. Ausblick',
               '~10 %'],
            ],
          })}
          ${renderInfobox({
            type:  'tip',
            icon:  'fas fa-pen',
            title: 'Muster-Einleitung',
            body:  'In dem Kommentar <em>„[Titel]"</em> aus <em>[Zeitung]</em> vom <em>[Datum]</em> '
                 + 'setzt sich <em>[Autor]</em> mit der Frage auseinander, '
                 + '<em>[Thema in einem Satz]</em>. Er/Sie vertritt dabei die These, dass '
                 + '<em>[Kernthese]</em>.',
          })}
        </div>
      </section>

      <!-- ══ POSITIONIERUNG ══ -->
      <section class="lz-content-section">
        <div class="lz-section-wrap">
          ${renderSubhead('Erörterungsteil')}
          <h2 class="lz-h2 reveal">Die drei Möglichkeiten der Positionierung</h2>
          ${renderMerkboxGrid([
            {
              icon:  'fas fa-check-double',
              title: 'Zustimmung',
              text:  'Ansichten stimmen überein: Zustimmung formulieren + eigene ergänzende Argumente bringen, die den Autor stützen.',
            },
            {
              icon:  'fas fa-circle-half-stroke',
              title: 'Teilweise Zustimmung',
              text:  'Differenziert vorgehen: Zustimmen wo berechtigt, widersprechen wo nicht — jeweils mit Begründung.',
            },
            {
              icon:  'fas fa-xmark',
              title: 'Widerspruch',
              text:  'Gegenargumente ausführen, Schwächen konkret benennen, eigene Position klar und begründet vertreten.',
            },
          ])}
        </div>
      </section>

      <!-- ══ ANALYSE-LEITFADEN ══ -->
      <section class="lz-content-section">
        <div class="lz-section-wrap">
          ${renderSubhead('Hauptteil A')}
          <h2 class="lz-h2 reveal">Analyse: Was untersuchen?</h2>
          ${renderTable({
            headers: ['Analyseaspekt', 'Leitfragen'],
            rows: [
              ['<strong>Argumentationsgang</strong>',  'Wie baut der Autor seine Argumentation auf? Wo steht die These? Werden Gegenargumente berücksichtigt?'],
              ['<strong>Argumenttypen</strong>',        'Welche Arten von Argumenten verwendet er? (Fakten, Autorität, Norm, Analogie …)'],
              ['<strong>Sprachliche Mittel</strong>',   'Welche Stilmittel setzt er ein? Welche Wirkung haben sie? Wie ist der Ton?'],
              ['<strong>Textsortenmerkmale</strong>',   'Wie kommentiert er? Sachlich oder polemisch? Gibt es Ironie?'],
              ['<strong>Intention</strong>',             'Was will der Autor beim Leser erreichen? (Überzeugung, Emotion, Handlung)'],
            ],
          })}
        </div>
      </section>

      <!-- ══ ERÖRTERUNGS-LEITFADEN ══ -->
      <section class="lz-content-section">
        <div class="lz-section-wrap">
          ${renderSubhead('Hauptteil B')}
          <h2 class="lz-h2 reveal">Erörterung: Kritisch auseinandersetzen</h2>
          ${renderAccordion([
            {
              title:   '✅ Sinnvolle Kritikpunkte',
              content: `<ul style="line-height:1.9; margin-left:1.2rem;">
                          <li><strong>Richtigkeit bestreiten:</strong> Eine These des Autors ist faktisch nicht haltbar</li>
                          <li><strong>Kausalität bezweifeln:</strong> Die angenommene Ursache-Wirkungs-Beziehung stimmt nicht</li>
                          <li><strong>Verallgemeinerung angreifen:</strong> Gegenbeispiele bringen</li>
                          <li><strong>Differenzieren:</strong> Im Einzelnen genauer unterscheiden als der Autor</li>
                          <li><strong>Einseitigkeit aufzeigen:</strong> Wichtige Perspektiven fehlen</li>
                        </ul>`,
            },
            {
              title:   '⚠️ Häufige Fehler im Erörterungsteil',
              content: `<ul style="line-height:1.9; margin-left:1.2rem;">
                          <li>Text nur paraphrasieren statt zu erörtern</li>
                          <li>Krampfhaft widersprechen ohne Begründung</li>
                          <li>Eigene Meinung ohne Argumente („Ich finde, dass …")</li>
                          <li>Keine klare eigene Position am Ende</li>
                          <li>Erörterung und Analyse vermischen</li>
                        </ul>`,
            },
            {
              title:   '📝 Richtig zitieren & Textbelege',
              content: `${renderTable({
                headers: ['Form', 'Beispiel'],
                rows: [
                  ['<strong>Direktes Zitat</strong>',   '„Wir müssen endlich handeln" (Z. 12), fordert der Autor …'],
                  ['<strong>Indirektes Zitat</strong>',  'Der Autor behauptet, die Gesellschaft müsse handeln (vgl. Z. 12).'],
                  ['<strong>Paraphrase</strong>',        'In Zeile 12 f. betont der Autor die Dringlichkeit des Handelns.'],
                ],
              })}`,
            },
          ])}
        </div>
      </section>

      <!-- ══════════════ PAGE NAVIGATION BOTTOM ══════════════ -->
      <section class="lz-content-section" style="padding:1.5rem 0 3rem;">
        <div class="lz-section-wrap">
          ${renderPageNav({
            prev: { label: '3.1 Argumentationsarten', link: `${BASE}/themen/eroertern/argumentieren` },
            next: { label: '3.3 Dialektische Erörterung', link: `${BASE}/themen/eroertern/dialektisch` },
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
      btn.addEventListener('click', () => { window.location.hash = btn.dataset.navLink; });
    });
    document.querySelectorAll('[data-link]').forEach(btn => {
      btn.addEventListener('click', () => { window.location.hash = btn.dataset.link; });
    });
  }
}