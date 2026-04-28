// pages/projekte/lernzettel/faecher/deutsch/themen/stilmittel/satzfiguren.js
// Deutsch 4.3 — Satz- & Strukturfiguren

import { initScrollReveal }  from '../../../../../../../shared/js/index.js';
import { footerHTML }         from '../../../../../../../components/Footer.js';
import { i18n }               from '../../../../../../../shared/js/i18n.js';
import {
  ensureComponentsCSS,
  renderSubhead,
  renderTags,
  renderInfobox,
  renderTable,
  renderMerkboxGrid,
  initInteractive,
} from '../../../../js/components/components.js';
import { renderPageNav } from '../../../../js/components/subnav.js';

import { COLOR, COLOR_RGB, BASE } from '../../deutsch.js';


export default class DeutschSatzfigurenPage {
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
            <span>4.3 · Satzfiguren</span>
          </nav>
          <h1 class="lz-sub-title">Satz- &<br><em>Strukturfiguren.</em></h1>
          <p class="lz-sub-desc">Parallelismus · Ellipse · Inversion · Klimax · Parataxe · Hypotaxe · Enumeration</p>
          ${renderTags(['Kapitel 4.3', 'Stilmittel', 'Abitur 2026'])}
        </div>
      </section>

      <!-- ══ HAUPTTABELLE ══ -->
      <section class="lz-content-section">
        <div class="lz-section-wrap">
          ${renderSubhead('Überblick')}
          <h2 class="lz-h2 reveal">Satz- und Strukturfiguren im Überblick</h2>

          ${renderTable({
            headers: ['Mittel', 'Definition', 'Beispiel', 'Wirkung'],
            rows: [
              ['<strong>Parallelismus</strong>', 'Gleiche grammatische Struktur in aufeinanderfolgenden Sätzen',    '„Ich kam, ich sah, ich siegte"',                   'Rhythmisch, einprägsam, strukturierend'],
              ['<strong>Ellipse</strong>',        'Auslassung grammatisch nötiger Wörter',                           '„Je früher, desto besser"',                        'Dynamisch, verdichtet, direkt'],
              ['<strong>Inversion</strong>',      'Umkehrung der normalen Wortstellung',                             '„Groß war die Freude" (statt: Die Freude war groß)', 'Betont das Vorangestellte, poetisch'],
              ['<strong>Klimax</strong>',         'Steigerung von drei oder mehr Elementen',                         '„Ich kam, ich sah, ich siegte"',                   'Steigernd, dramatisch, zielgerichtet'],
              ['<strong>Antiklimax</strong>',     'Absteigende Reihung — von groß nach klein',                       '„Kaiser, Könige, Bettler"',                        'Ironisch, ernüchternd, desillusionierend'],
              ['<strong>Enumeration</strong>',    'Aufzählung gleichwertiger Begriffe ohne Steigerung',              '„Haus, Hof und Garten"',                           'Vollständig, detailliert, konkretisierend'],
              ['<strong>Chiasmus</strong>',       'Überkreuzstellung der Satzglieder: A-B / B-A',                    '„Die Kunst ist lang, kurz ist das Leben"',         'Elegant, kontrastierend, pointiert'],
              ['<strong>Aposiopese</strong>',     'Abbrechen des Satzes — Gedanke unvollendet',                      '„Wenn du das noch einmal tust, dann…"',            'Bedrohlich, suggestiv, lässt Leser denken'],
              ['<strong>Correctio</strong>',      'Selbstkorrektur: eine Formulierung wird sofort verbessert',       '„Er ist klug — nein, genial!"',                    'Steigernd, authentisch, spontan'],
            ],
          })}
        </div>
      </section>

      <!-- ══ SATZBAU: PARA- UND HYPOTAXE ══ -->
      <section class="lz-content-section">
        <div class="lz-section-wrap">
          ${renderSubhead('Satzkonstruktion')}
          <h2 class="lz-h2 reveal">Parataxe vs. Hypotaxe</h2>

          ${renderTable({
            headers: ['', 'Parataxe', 'Hypotaxe'],
            rows: [
              ['<strong>Definition</strong>',  'Reihung kurzer Hauptsätze (nebenordnend)',           'Verschachtelte Sätze mit Nebensätzen (unterordnend)'],
              ['<strong>Wirkung</strong>',      'Dynamisch, abgehackt, direkt, staccatoartig',        'Komplex, grüblerisch, reflektierend, atemslos'],
              ['<strong>Kontext</strong>',      'Spannung, Entschlossenheit, Überforderung',          'Nachdenklichkeit, Komplexität, innere Zerrissenheit'],
              ['<strong>Beispiel</strong>',     '„Er kam. Er sah. Er schwieg."',                     '„Als er ankam, und obwohl er wusste, dass…"'],
            ],
          })}

          ${renderInfobox({
            type:  'tip',
            icon:  'fas fa-lightbulb',
            title: 'In der Analyse: Parataxe',
            body:  'Parataktische Reihung kurzer Hauptsätze (vgl. Z. 1–3) erzeugt einen '
                 + '<strong>abgehackten, stockenden Rhythmus</strong>, der die '
                 + 'innere Erschöpfung der Figur widerspiegelt. Die fehlende Verbindung '
                 + 'zwischen den Sätzen macht die <strong>emotionale Taubheit</strong> spürbar — '
                 + 'es bleibt keine Kraft, Gedanken zu verknüpfen.',
          })}

          ${renderInfobox({
            type:  'tip',
            icon:  'fas fa-lightbulb',
            title: 'In der Analyse: Hypotaxe',
            body:  'Die hypotaktische Satzstruktur mit mehrfach untergeordneten Nebensätzen '
                 + 'bildet das <strong>Kreisen der Gedanken</strong> ab — die Figur kommt '
                 + 'nicht zum Punkt, verliert sich in Wenn-Dann-Konstruktionen. '
                 + 'Diese <strong>syntaktische Überforderung</strong> spiegelt die '
                 + 'kognitive Überforderung wider.',
          })}
        </div>
      </section>

      <!-- ══ ANALYSEPRAXIS ══ -->
      <section class="lz-content-section">
        <div class="lz-section-wrap">
          ${renderSubhead('Analysepraxis')}
          <h2 class="lz-h2 reveal">Satzfiguren in der Praxis</h2>

          ${renderMerkboxGrid([
            {
              icon:  'fas fa-arrow-up',
              title: 'Klimax erkennen',
              text:  'Drei oder mehr Elemente in aufsteigender Intensität. Der letzte Begriff ist der stärkste. Wirkung: Spannung wird aufgebaut bis zum Höhepunkt.',
            },
            {
              icon:  'fas fa-equals',
              title: 'Parallelismus vs. Chiasmus',
              text:  'Parallelismus: A-B / A-B (gleiche Reihenfolge). Chiasmus: A-B / B-A (gekreuzt). Beide schaffen Rhythmus — Chiasmus pointierter.',
            },
            {
              icon:  'fas fa-scissors',
              title: 'Ellipse richtig deuten',
              text:  'Fehlende Wörter sind kein Fehler — sie sind Stilmittel. Was fehlt, lässt der Leser im Geiste ergänzen. Schafft Tempo und Verdichtung.',
            },
            {
              icon:  'fas fa-pause',
              title: 'Aposiopese deuten',
              text:  'Der abgebrochene Satz lässt das Schlimmste offen. Der Leser ergänzt im Kopf — oft schlimmer als das Ausgesprochene es wäre.',
            },
          ])}
        </div>
      </section>

      <!-- ══════════════ PAGE NAVIGATION BOTTOM ══════════════ -->
      <section class="lz-content-section" style="padding:1.5rem 0 3rem;">
        <div class="lz-section-wrap">
          ${renderPageNav({
            prev: { label: '4.2 Wortfiguren & Tropen', link: `${BASE}/themen/stilmittel/wortfiguren` },
            next: { label: '4.4 Ironie & weitere Mittel', link: `${BASE}/themen/stilmittel/ironie` },
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