// pages/projekte/lernzettel/faecher/deutsch/themen/epochen/expressionismus-exil.js
// Deutsch 5.5 — Expressionismus · Weimarer Republik · Exil

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

export default class DeutschExpressionismusExilPage {
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
            <span>5.5 · Expressionismus · Exil</span>
          </nav>
          <h1 class="lz-sub-title">Expressionismus ·<br><em>Republik · Exil.</em></h1>
          <p class="lz-sub-desc">Großstadtlyrik · Neue Sachlichkeit · Brecht · Exilliteratur · NS-Zeit</p>
          ${renderTags(['Kapitel 5.5', 'Epochen', 'ca. 1910–1945'])}
        </div>
      </section>

      <!-- ══ EXPRESSIONISMUS ══ -->
      <section class="lz-content-section">
        <div class="lz-section-wrap">
          ${renderSubhead('ca. 1910 – 1925')}
          <h2 class="lz-h2 reveal">Expressionismus</h2>
          <p class="lz-prose reveal">
            Krieg, Großstadt, Industrialisierung — die Generation des Expressionismus schreit ihren
            Aufschrei gegen eine Welt im Verfall. Nicht Abbild der Realität, sondern Ausdruck
            innerer Erschütterung.
          </p>
          ${renderMerkboxGrid([
            {
              icon:  'fas fa-city',
              title: 'Großstadtlyrik',
              text:  'Die Großstadt als Alptraum: Enge, Anonymität, Lärm, Masse. Verfremdung des Alltäglichen durch grelle Metaphern.',
            },
            {
              icon:  'fas fa-bomb',
              title: 'Weltuntergangsstimmung',
              text:  'Apokalyptische Visionen vor und während des Ersten Weltkriegs. Krieg als kollektiver Wahnsinn.',
            },
            {
              icon:  'fas fa-paint-brush',
              title: 'Sprache als Schrei',
              text:  'Zerstörte Syntax, Neologismen, grelle Metaphern, Ellipsen. Sprache sprengt ihre Grenzen.',
            },
            {
              icon:  'fas fa-user-slash',
              title: 'Der „neue Mensch"',
              text:  'Utopische Gegenbewegung: Hoffnung auf einen von Krieg und Kapitalismus befreiten neuen Menschen.',
            },
          ])}
          ${renderTable({
            headers: ['Autor', 'Werk', 'Besonderheit'],
            rows: [
              ['Georg Trakl',    '<em>„Grodek"</em>, <em>„Verfall"</em>',        'Melancholie, Tod, Herbst — dunkelste Lyrik des Expressionismus'],
              ['Georg Heym',     '<em>„Der Gott der Stadt"</em>',                 'Stadt als Moloch-Gottheit, apokalyptische Bilder'],
              ['Gottfried Benn', '<em>„Morgue"</em> (1912)',                       'Tabuthema Leichnam — radikale Schockästhetik'],
              ['Ernst Toller',   '<em>„Die Wandlung"</em> (1919)',                 'Antikriegsdrama, Bühnenexpressionismus'],
            ],
          })}
        </div>
      </section>

      <!-- ══ WEIMARER REPUBLIK ══ -->
      <section class="lz-content-section">
        <div class="lz-section-wrap">
          ${renderSubhead('1919 – 1933')}
          <h2 class="lz-h2 reveal">Weimarer Republik & Neue Sachlichkeit</h2>
          <p class="lz-prose reveal">
            Die erste deutsche Demokratie — kulturell produktiv, politisch instabil.
            Die <strong>Neue Sachlichkeit</strong> ersetzt Expressionismus durch nüchterne,
            kritisch-realistische Beobachtung der Gegenwart.
          </p>
          ${renderMerkboxGrid([
            {
              icon:  'fas fa-camera',
              title: 'Neue Sachlichkeit',
              text:  'Sachlicher, illusionsloser Blick auf die Gegenwart. Keine Romantik, kein Pathos — Reportage, Protokoll, Zeitkritik.',
            },
            {
              icon:  'fas fa-mask',
              title: 'Kabarett & Satire',
              text:  'Kritik an Gesellschaft, Militarismus und aufkommendem Nationalismus durch Humor und Ironie.',
            },
            {
              icon:  'fas fa-theater-masks',
              title: 'Episches Theater (Brecht)',
              text:  'Theater soll nicht unterhalten, sondern zum Nachdenken bewegen. Verfremdungseffekt — Zuschauer soll Distanz behalten.',
            },
          ])}
          ${renderTable({
            headers: ['Autor', 'Werk', 'Thema'],
            rows: [
              ['Bertolt Brecht',   '<em>„Dreigroschenoper"</em> (1928)',         'Bürgertum und Kriminalität als zwei Seiten derselben Medaille'],
              ['Bertolt Brecht',   '<em>„Mutter Courage"</em> (1939)',           'Krieg als Geschäft, Widerspruch zwischen Überleben und Moral'],
              ['Erich Kästner',    '<em>„Fabian"</em> (1931)',                    'Moralischer Mensch in moralloser Gesellschaft, Weimarer Untergang'],
              ['Hans Fallada',     '<em>„Kleiner Mann — was nun?"</em> (1932)',   'Massenarbeitslosigkeit, kleiner Angestellter in der Krise'],
              ['Heinrich Mann',    '<em>„Der Untertan"</em> (1918)',              'Wilhelminischer Untertanengeist, Militarismus'],
            ],
          })}
        </div>
      </section>

      <!-- ══ EXILLITERATUR ══ -->
      <section class="lz-content-section">
        <div class="lz-section-wrap">
          ${renderSubhead('1933 – 1945')}
          <h2 class="lz-h2 reveal">Nationalsozialismus & Exilliteratur</h2>
          <p class="lz-prose reveal">
            Ab 1933 werden oppositionelle Schriftsteller verfolgt, ihre Bücher verbrannt.
            Wer kann, flieht ins Ausland und schreibt im Exil gegen das Regime.
          </p>
          ${renderMerkboxGrid([
            {
              icon:  'fas fa-fire',
              title: 'Bücherverbrennung (1933)',
              text:  'Organisierte Verbrennung von Büchern jüdischer, linker und oppositioneller Autoren. Heine 1820: „Dort, wo man Bücher verbrennt, verbrennt man auch am Ende Menschen."',
            },
            {
              icon:  'fas fa-plane',
              title: 'Exil',
              text:  'Viele Autoren fliehen nach Frankreich, in die USA, in die Schweiz, die UdSSR. Schreiben gegen Heimweh, Ohnmacht und den Faschismus.',
            },
            {
              icon:  'fas fa-pen',
              title: 'Innere Emigration',
              text:  'Autoren, die in Deutschland blieben, schrieben in Codes, versteckt oder zogen sich ins Private zurück.',
            },
          ])}
          ${renderTable({
            headers: ['Autor', 'Werk', 'Besonderheit'],
            rows: [
              ['Bertolt Brecht',  '<em>„Leben des Galilei"</em> (1943)',          'Intellektueller Opportunismus vs. moralischer Widerstand'],
              ['Thomas Mann',     '<em>„Doktor Faustus"</em> (1947)',             'Deutschland und der Teufelspakt — Allegorie auf den Faschismus'],
              ['Anna Seghers',    '<em>„Das siebte Kreuz"</em> (1942)',           'Flucht aus KZ, Solidarität und Menschlichkeit unter Terror'],
              ['Heinrich Böll',   '<em>„Wo warst du, Adam?"</em> (1951)',         'Absurdität und Sinnlosigkeit des Zweiten Weltkriegs'],
            ],
          })}
          ${renderInfobox({
            type:  'tip',
            icon:  'fas fa-graduation-cap',
            title: 'Brecht im Abitur',
            body:  'Bertolt Brecht ist ein Klassiker im BW-Abitur. Wichtig: '
                 + '<strong>Episches Theater</strong> = Zuschauer soll nicht mitfühlen, sondern '
                 + '<strong>nachdenken</strong>. Mittel: Verfremdungseffekt, Songs, Schilder, '
                 + 'Sprechen aus der Rolle, historische Stoffe. '
                 + 'Häufig geprüft: <em>„Mutter Courage"</em>, <em>„Leben des Galilei"</em>.',
          })}
        </div>
      </section>

      <!-- ══════════════ PAGE NAVIGATION BOTTOM ══════════════ -->
      <section class="lz-content-section" style="padding:1.5rem 0 3rem;">
        <div class="lz-section-wrap">
          ${renderPageNav({
            prev: { label: '5.4 Realismus · Naturalismus · Jahrhundertwende', link: `${BASE}/themen/epochen/realismus-naturalismus` },
            next: { label: '5.6 Nachkrieg & Gegenwartsliteratur', link: `${BASE}/themen/epochen/nachkrieg-gegenwart` },
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