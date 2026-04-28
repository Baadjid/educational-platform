// pages/projekte/lernzettel/faecher/deutsch/themen/gattungen/lyrik.js
// Deutsch 2.3 — Lyrik: Gedichte

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

import { COLOR, COLOR_RGB, BASE } from '../../deutsch.js';



export default class DeutschLyrikPage {
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
            <span>2.3 · Lyrik</span>
          </nav>
          <h1 class="lz-sub-title">Lyrik —<br><em>Gedichte.</em></h1>
          <p class="lz-sub-desc">Lyrisches Ich · Vers & Strophe · Metrum · Reim · Klang · Gedichtformen</p>
          ${renderTags(['Kapitel 2.3', 'Lyrik', 'Abitur 2026'])}
        </div>
      </section>

      <!-- ══ LYRISCHES ICH ══ -->
      <section class="lz-content-section">
        <div class="lz-section-wrap">
          ${renderSubhead('Sprecher')}
          <h2 class="lz-h2 reveal">Das lyrische Ich</h2>
          <p class="lz-prose reveal">
            Das <strong>lyrische Ich</strong> ist eine fiktive Sprecherinstanz — nicht identisch
            mit dem Autor. Es ist die „Stimme" des Gedichts, vom Dichter erschaffen.
          </p>

          ${renderTable({
            headers: ['Sprecherform', 'Merkmale'],
            rows: [
              ['Lyrisches Ich',   'Spricht in der 1. Person — subjektiv, persönlich'],
              ['Lyrisches Du',    'Ansprache an eine Person oder Sache (Apostrophe)'],
              ['Lyrisches Wir',   'Kollektive Perspektive — Gemeinschaft, Volk, Menschheit'],
              ['Rollengedicht',   'Sprecherin schlüpft in eine klar definierte Rolle (z.B. historische Person)'],
              ['Kein Ich',        'Beschreibendes Gedicht ohne erkennbare Sprecherinstanz'],
            ],
          })}

          ${renderInfobox({
            type:  'tip',
            icon:  'fas fa-lightbulb',
            title: 'Wichtig in der Analyse',
            body:  'Sage niemals „Der Autor schreibt…", sondern immer '
                 + '<strong>„Das lyrische Ich…"</strong> oder <strong>„Der/Die Sprecher*in…"</strong>. '
                 + 'Der Autor und die Sprecherinstanz sind verschiedene Entitäten.',
          })}
        </div>
      </section>

      <!-- ══ VERS & STROPHE ══ -->
      <section class="lz-content-section">
        <div class="lz-section-wrap">
          ${renderSubhead('Formales')}
          <h2 class="lz-h2 reveal">Vers, Strophe & Reim</h2>

          ${renderMerkboxGrid([
            {
              icon:  'fas fa-minus',
              title: 'Vers',
              text:  'Eine einzelne Zeile des Gedichts. Versende kann betont sein (männlich) oder unbetont ausklingen (weiblich).',
            },
            {
              icon:  'fas fa-layer-group',
              title: 'Strophe',
              text:  'Eine Gruppe zusammengehöriger Verse. Häufigste Formen: Vierzeiler (Quartett), Dreizeiler (Terzine), Zweizeiler (Distichon).',
            },
            {
              icon:  'fas fa-music',
              title: 'Refrain',
              text:  'Wiederkehrende Strophe oder Versgruppe — schafft Struktur und Einprägsamkeit.',
            },
          ])}

          ${renderTable({
            headers: ['Reimschema', 'Schema', 'Wirkung'],
            rows: [
              ['<strong>Paarreim</strong>',        'aa bb', 'Eindringlich, simpel, einprägsam'],
              ['<strong>Kreuzreim</strong>',        'ab ab', 'Harmonisch, ausgewogen, häufigste Form'],
              ['<strong>Umarmender Reim</strong>',  'abba',  'Einschließend, komplex, elegant'],
              ['<strong>Schweifreim</strong>',      'aab ccb', 'Variationsreich, volksliedhaft'],
              ['<strong>Freie Verse</strong>',      '—',     'Kein festes Schema — moderne Lyrik, Freiheit'],
            ],
          })}

          ${renderTable({
            headers: ['Reimart', 'Erläuterung', 'Beispiel'],
            rows: [
              ['Reiner Reim',    'Vollständige Übereinstimmung ab letztem betonten Vokal', 'Haus – Maus'],
              ['Unreiner Reim',  'Ähnliche, aber nicht identische Laute',                 'Haus – raus'],
              ['Männlicher Reim','Einsilbig, endet auf betonte Silbe',                    'Geist – weist'],
              ['Weiblicher Reim','Zweisilbig, endet auf unbetonte Silbe',                 'laufen – kaufen'],
              ['Reicher Reim',   'Auch der Konsonant vor dem Vokal reimt',                'Stunde – Wunde'],
            ],
          })}
        </div>
      </section>

      <!-- ══ METRUM ══ -->
      <section class="lz-content-section">
        <div class="lz-section-wrap">
          ${renderSubhead('Rhythmus')}
          <h2 class="lz-h2 reveal">Metrum & Rhythmus</h2>

          <p class="lz-prose reveal">
            Das <strong>Metrum</strong> ist das regelmäßige Muster von betonten (<strong>X</strong>)
            und unbetonten (<em>x</em>) Silben. Der <strong>Rhythmus</strong> ist die
            tatsächliche Betonung beim Lesen — er kann vom Metrum abweichen.
          </p>

          ${renderTable({
            headers: ['Metrum', 'Muster', 'Beispiel', 'Wirkung'],
            rows: [
              ['<strong>Jambus</strong>',   'x X (unbetont–betont)',            'ge-DICHT, be-FREYT',       'Steigend, leicht, beschwingt, fließend'],
              ['<strong>Trochäus</strong>', 'X x (betont–unbetont)',            'LE-ben, RO-se',             'Fallend, bestimmt, marschmäßig'],
              ['<strong>Daktylus</strong>', 'X x x (betont–unbetont–unbetont)', 'MÜ-he-los, KÖ-nig-reich',  'Fallend, walzend, elegisch'],
              ['<strong>Anapäst</strong>',  'x x X (unbetont–unbetont–betont)', 'pa-ra-DIES, un-be-KANNT',  'Steigend, drängend, vorantreibend'],
            ],
          })}

          ${renderInfobox({
            type:  '',
            icon:  'fas fa-music',
            title: 'Beispielanalyse: Jambus',
            body:  '<em>Es WAR ein KÖ-nig IN Thu-LE</em><br>'
                 + '<em>ge-TREU bis IN das GRAB</em><br><br>'
                 + 'Goethe: „Der König in Thule" — Jambischer Tetrameter, '
                 + 'der fließende Rhythmus unterstreicht den erzählenden, balladenhaften Charakter.',
          })}
        </div>
      </section>

      <!-- ══ KLANG ══ -->
      <section class="lz-content-section">
        <div class="lz-section-wrap">
          ${renderSubhead('Lautebene')}
          <h2 class="lz-h2 reveal">Klanggestalt & sprachliche Bilder</h2>

          ${renderTable({
            headers: ['Mittel', 'Definition', 'Beispiel', 'Wirkung'],
            rows: [
              ['<strong>Alliteration</strong>',     'Gleicher Anlaut bei betonten Wörtern',        'Wind und Wetter',          'Einprägsam, rhythmisch verbindend'],
              ['<strong>Assonanz</strong>',          'Gleiche Vokale in betonten Silben',           'Tal und Nacht',            'Melodisch, harmonisierend'],
              ['<strong>Onomatopoesie</strong>',     'Wörter ahmen Klänge nach (Lautmalerei)',      'rauschen, knistern, zirpen', 'Sinnlich, unmittelbar, lebendig'],
              ['<strong>Anapher</strong>',           'Wiederholung am Versanfang',                  'Ich sehe… / Ich höre…',    'Eindringlich, aufbauend, strukturierend'],
              ['<strong>Euphonie</strong>',          'Wohlklang durch weiche Konsonanten (l, m, n)', '—',                       'Harmonisch, beruhigend'],
              ['<strong>Kakophonie</strong>',        'Missklang durch harte Konsonanten (k, t, p)',  '—',                       'Hart, beunruhigend, dissonant'],
            ],
          })}

          ${renderTable({
            headers: ['Bild', 'Definition', 'Beispiel'],
            rows: [
              ['<strong>Metapher</strong>',       'Bildliche Übertragung ohne „wie"',          'Das Feuer der Leidenschaft'],
              ['<strong>Vergleich</strong>',       'Übertragung mit „wie" oder „als"',          'Stark wie ein Sturm'],
              ['<strong>Personifikation</strong>', 'Vermenschlichung von Abstrakta / Natur',    'Die Sonne lacht, der Wind flüstert'],
              ['<strong>Symbol</strong>',          'Zeichen mit tieferer übertragener Bedeutung', 'Rose = Liebe / Schönheit / Vergänglichkeit'],
              ['<strong>Allegorie</strong>',       'Durchgehende Metapher / Symbol-Geschichte',  'Platons Höhlengleichnis'],
            ],
          })}
        </div>
      </section>

      <!-- ══ GEDICHTFORMEN ══ -->
      <section class="lz-content-section">
        <div class="lz-section-wrap">
          ${renderSubhead('Formen')}
          <h2 class="lz-h2 reveal">Wichtige Gedichtformen</h2>

          ${renderAccordion([
            {
              title:   '📜 Sonett',
              content: '<ul style="line-height:1.9; margin-left:1.2rem;">'
                     + '<li>14 Verse: 2 Quartette + 2 Terzette</li>'
                     + '<li>Festes Reimschema (variiert nach Epoche)</li>'
                     + '<li>Themen: Liebe, Vergänglichkeit, philosophische Fragen</li>'
                     + '<li>Epochen: Barock, Renaissance, Romantik</li>'
                     + '<li>Beispiel: Andreas Gryphius „Es ist alles eitel"</li>'
                     + '</ul>',
            },
            {
              title:   '⚡ Ballade',
              content: '<ul style="line-height:1.9; margin-left:1.2rem;">'
                     + '<li>Erzählgedicht mit epischen, lyrischen und dramatischen Elementen</li>'
                     + '<li>Handlung, Spannung, oft übernatürliche Elemente</li>'
                     + '<li>Meist in Strophenform mit Refrain</li>'
                     + '<li>Beispiele: Goethe „Der Erlkönig", Schiller „Der Handschuh"</li>'
                     + '</ul>',
            },
            {
              title:   '🎺 Ode',
              content: '<ul style="line-height:1.9; margin-left:1.2rem;">'
                     + '<li>Feierliches, erhabenes Gedicht in hohem Stil</li>'
                     + '<li>Themen: Helden, Götter, große Ideen (Freiheit, Freude)</li>'
                     + '<li>Beispiel: Schiller „An die Freude" (Vorlage für Beethovens 9. Sinfonie)</li>'
                     + '</ul>',
            },
            {
              title:   '😢 Elegie',
              content: '<ul style="line-height:1.9; margin-left:1.2rem;">'
                     + '<li>Klagender, schwermütiger Ton</li>'
                     + '<li>Themen: Verlust, Trauer, Sehnsucht, Vergänglichkeit</li>'
                     + '<li>Oft im Distichon (Hexameter + Pentameter)</li>'
                     + '<li>Beispiel: Goethe „Römische Elegien"</li>'
                     + '</ul>',
            },
            {
              title:   '✊ Hymne',
              content: '<ul style="line-height:1.9; margin-left:1.2rem;">'
                     + '<li>Preisendes, feierliches Lied — ursprünglich religiös</li>'
                     + '<li>Oft freie Rhythmen, kein festes Metrum</li>'
                     + '<li>Beispiel: Goethe „Ganymed", Hölderlin „Hyperions Schicksalslied"</li>'
                     + '</ul>',
            },
          ])}
        </div>
      </section>

      <!-- ══════════════ PAGE NAVIGATION BOTTOM ══════════════ -->
      <section class="lz-content-section" style="padding:1.5rem 0 3rem;">
        <div class="lz-section-wrap">
          ${renderPageNav({
            prev: { label: '2.2 Dramatik', link: `${BASE}/themen/gattungen/dramatik` },
            next: { label: '2.4 Sachtexte', link: `${BASE}/themen/gattungen/sachtexte` },
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