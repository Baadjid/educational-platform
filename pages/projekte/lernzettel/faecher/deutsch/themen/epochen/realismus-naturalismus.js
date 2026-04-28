// pages/projekte/lernzettel/faecher/deutsch/themen/epochen/realismus-naturalismus.js
// Deutsch 5.4 — Realismus · Naturalismus · Jahrhundertwende

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

export default class DeutschRealismusNaturalismusPage {
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
            <span>5.4 · Realismus & Naturalismus</span>
          </nav>
          <h1 class="lz-sub-title">Realismus ·<br><em>Naturalismus · Moderne.</em></h1>
          <p class="lz-sub-desc">Wirklichkeitstreue · Industrialisierung · Sekundenstil · Décadence · Impressionismus</p>
          ${renderTags(['Kapitel 5.4', 'Epochen', 'ca. 1848–1910'])}
        </div>
      </section>

      <!-- ══ REALISMUS ══ -->
      <section class="lz-content-section">
        <div class="lz-section-wrap">
          ${renderSubhead('ca. 1848 – 1890')}
          <h2 class="lz-h2 reveal">Poetischer (bürgerlicher) Realismus</h2>
          <p class="lz-prose reveal">
            Nach den gescheiterten Revolutionen von 1848 zieht sich das Bürgertum ins Private zurück.
            Literatur soll die Wirklichkeit zeigen — aber poetisch verklärt, nicht roh und hässlich.
          </p>
          ${renderMerkboxGrid([
            {
              icon:  'fas fa-eye',
              title: 'Wirklichkeitstreue',
              text:  'Genaue Beobachtung und Darstellung der Realität. Keine Romantisierung — aber auch keine schonungslose Hässlichkeit.',
            },
            {
              icon:  'fas fa-home',
              title: 'Rückzug ins Private',
              text:  'Nach 1848: Resignation, Biedermeier-Nachwirkung. Regionalliteratur, Dorfgeschichte, bürgerliches Milieu.',
            },
            {
              icon:  'fas fa-industry',
              title: 'Industrialisierung',
              text:  'Gesellschaftlicher Wandel durch Technik und Kapitalismus wird literarisch verarbeitet — aber noch nicht so schonungslos wie im Naturalismus.',
            },
            {
              icon:  'fas fa-hourglass-half',
              title: 'Vergänglichkeit',
              text:  'Thema der Zeit: Was bleibt, wenn alles vergeht? Erinnerung, Tradition, bürgerliche Werte.',
            },
          ])}
          ${renderTable({
            headers: ['Autor', 'Werk', 'Thema'],
            rows: [
              ['Theodor Fontane',      '<em>Effi Briest</em> (1895)',           'Ehebruch, Gesellschaftskonventionen, Schuld und Strafe'],
              ['Theodor Fontane',      '<em>Irrungen, Wirrungen</em> (1888)',   'Liebe über Standesgrenzen hinweg'],
              ['Gottfried Keller',     '<em>Der grüne Heinrich</em> (1854)',    'Bildungsroman, Künstlerproblematik, Schweizer Bürgertum'],
              ['Theodor Storm',        '<em>Der Schimmelreiter</em> (1888)',     'Ehrgeiz, Gemeinschaft, Schicksal, Nordsee-Milieu'],
              ['Wilhelm Raabe',        '<em>Der Hungerpastor</em> (1864)',       'Bürgertum, Bildung, soziale Frage'],
            ],
          })}
          ${renderInfobox({
            type:  '',
            icon:  'fas fa-pen-nib',
            title: 'Theodor Fontane (1819–1898)',
            body:  'Bedeutendster Realist der deutschen Literatur. Kritisiert subtil die preußische Gesellschaft '
                 + 'und ihre starren Konventionen. <em>Effi Briest</em>: Effi bricht die Ehe — die Gesellschaft '
                 + 'vernichtet sie, obwohl sie längst vergeben hat. Fontanes lakonisch-irischer Ton ist einzigartig.',
          })}
        </div>
      </section>

      <!-- ══ NATURALISMUS ══ -->
      <section class="lz-content-section">
        <div class="lz-section-wrap">
          ${renderSubhead('ca. 1880 – 1900')}
          <h2 class="lz-h2 reveal">Naturalismus</h2>
          <p class="lz-prose reveal">
            Der Naturalismus will die Wirklichkeit wissenschaftlich exakt abbilden — ohne Verklärung.
            Elend, Alkoholismus, Prostitution und Ausbeutung werden schonungslos gezeigt.
          </p>
          ${renderMerkboxGrid([
            {
              icon:  'fas fa-microscope',
              title: 'Wissenschaftlichkeit',
              text:  'Literatur als „Experiment". Einfluss von Darwin (Milieu und Vererbung bestimmen den Menschen) und Zola (Experimentalroman).',
            },
            {
              icon:  'fas fa-stopwatch',
              title: 'Sekundenstil',
              text:  'Exakte Wiedergabe jedes Moments — Pausen, Stottern, Dialekt, Unterbrechungen. Arno Holz: „Kunst = Natur – x".',
            },
            {
              icon:  'fas fa-hammer',
              title: 'Soziale Frage',
              text:  'Industrieproletariat, Armut, Alkohol, Kinderarbeit, Verelendung. Literatur als Anklage gesellschaftlicher Zustände.',
            },
          ])}
          ${renderTable({
            headers: ['Autor', 'Werk', 'Bedeutung'],
            rows: [
              ['Gerhart Hauptmann', '<em>Die Weber</em> (1892)',             'Weberaufstand 1844. Kollektivdrama ohne Helden. Erste soziale Tragödie.'],
              ['Gerhart Hauptmann', '<em>Vor Sonnenaufgang</em> (1889)',     'Alkohol und Vererbung im schlesischen Bergbaumilieu.'],
              ['Arno Holz / Schlaf', '<em>Papa Hamlet</em> (1889)',          'Sekundenstil: minutiöse Realitätswiedergabe'],
              ['Henrik Ibsen',      '<em>Nora</em> (1879)',                  'Frauenfrage, bürgerliche Doppelmoral (Einfluss auf dt. Naturalismus)'],
            ],
          })}
        </div>
      </section>

      <!-- ══ JAHRHUNDERTWENDE ══ -->
      <section class="lz-content-section">
        <div class="lz-section-wrap">
          ${renderSubhead('ca. 1890 – 1910')}
          <h2 class="lz-h2 reveal">Gegenbewegungen & Jahrhundertwende</h2>
          <p class="lz-prose reveal">
            Gegen den „hässlichen" Naturalismus formieren sich ästhetizistische Gegenbewegungen,
            die Schönheit, Stimmung und das Innenleben ins Zentrum stellen.
          </p>
          ${renderTable({
            headers: ['Strömung', 'Merkmale', 'Vertreter'],
            rows: [
              ['<strong>Impressionismus</strong>',  'Stimmungen, flüchtige Eindrücke, subjektive Wahrnehmung', 'Hugo von Hofmannsthal, Arthur Schnitzler'],
              ['<strong>Symbolismus</strong>',       'Symbole statt Aussagen, Klang und Stimmung', 'Stefan George, Rainer Maria Rilke'],
              ['<strong>Jugendstil</strong>',        'Ornament, Schönheit, Ästhetizismus, dekorative Literatur', 'diverse Zeitschriften'],
              ['<strong>Décadence</strong>',         'Verfall, Müdigkeit, Pessimismus, Schönheit im Untergang', 'Thomas Mann <em>„Buddenbrooks"</em>'],
            ],
          })}
          ${renderInfobox({
            type:  '',
            icon:  'fas fa-pen',
            title: 'Rainer Maria Rilke (1875–1926)',
            body:  'Bedeutendster Lyriker der deutschen Moderne. <em>„Dinggedichte"</em>: Objekte werden '
                 + 'von innen heraus beschrieben, nicht von außen betrachtet. <em>„Duineser Elegien"</em> und '
                 + '<em>„Sonette an Orpheus"</em>: Auseinandersetzung mit Tod, Schönheit und dem Wesen '
                 + 'der Kunst. Sprache als Weg zur Existenzerkenntnis.',
          })}
          ${renderCompare({
            titleA: '🏭 Naturalismus',
            titleB: '🌸 Impressionismus / Symbolismus',
            listA: [
              'Schonungslose Wirklichkeitswiedergabe',
              'Soziales Milieu, Armut, Elend',
              'Sekundenstil: wissenschaftliche Exaktheit',
              'Kollektiv und soziale Klasse im Zentrum',
            ],
            listB: [
              'Schönheit, Stimmung, subjektive Wahrnehmung',
              'Ästhetizismus, Innenleben, Symbol',
              'Musikalischer, bildreicher Stil',
              'Individuum und Seelenzustand im Zentrum',
            ],
          })}
        </div>
      </section>

      <!-- ══════════════ PAGE NAVIGATION BOTTOM ══════════════ -->
      <section class="lz-content-section" style="padding:1.5rem 0 3rem;">
        <div class="lz-section-wrap">
          ${renderPageNav({
            prev: { label: '5.3 Sturm & Drang · Klassik · Romantik', link: `${BASE}/themen/epochen/klassik-romantik` },
            next: { label: '5.5 Expressionismus · Exil', link: `${BASE}/themen/epochen/expressionismus-exil` },
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