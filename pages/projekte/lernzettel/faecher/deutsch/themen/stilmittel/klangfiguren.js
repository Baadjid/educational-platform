// pages/projekte/lernzettel/faecher/deutsch/themen/stilmittel/klangfiguren.js
// Deutsch 4.1 — Klangfiguren

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

export default class DeutschKlangfigurenPage {
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
            <span>4.1 · Klangfiguren</span>
          </nav>
          <h1 class="lz-sub-title">Klangfiguren —<br><em>Lautliche Gestaltung.</em></h1>
          <p class="lz-sub-desc">Alliteration · Assonanz · Onomatopoesie · Anapher · Epipher · Refrain</p>
          ${renderTags(['Kapitel 4.1', 'Stilmittel', 'Abitur 2026'])}
        </div>
      </section>

      <!-- ══ ÜBERBLICK ══ -->
      <section class="lz-content-section">
        <div class="lz-section-wrap">
          ${renderSubhead('Überblick')}
          <h2 class="lz-h2 reveal">Was sind Klangfiguren?</h2>
          <p class="lz-prose reveal">
            Klangfiguren (Lautfiguren) nutzen die <strong>akustische Qualität von Sprache</strong> —
            sie arbeiten mit Lautwiederholungen, Rhythmus und Klangähnlichkeiten. Besonders
            in der Lyrik und in politischen Reden eingesetzt, um Texte einprägsam und
            wirkungsstark zu machen.
          </p>

          ${renderTable({
            headers: ['Mittel', 'Definition', 'Beispiel', 'Wirkung'],
            rows: [
              ['<strong>Alliteration</strong>',    'Gleicher Anfangslaut bei betonten Wörtern in Folge',          '„Milch macht müde Männer munter"',       'Einprägsam, rhythmisch, Zusammengehörigkeit'],
              ['<strong>Assonanz</strong>',         'Gleichklang der betonten Vokale (Vokalreim)',                  '„Tal und Nacht", „Der Mond und das Moos"', 'Melodisch, harmonisch, verbindend'],
              ['<strong>Onomatopoesie</strong>',    'Wörter ahmen Klänge/Geräusche nach (Lautmalerei)',            '„rauschen", „knistern", „zwitschern"',    'Sinnlich, unmittelbar, lebendig'],
              ['<strong>Anapher</strong>',          'Wiederholung eines Wortes/Ausdrucks am Satz- oder Versanfang', '„Ich sehe… Ich höre… Ich fühle…"',        'Eindringlich, aufbauend, strukturierend'],
              ['<strong>Epipher</strong>',          'Wiederholung am Satz- oder Versende',                         '„… und siegte. Wir sahen… und siegten."', 'Abschließend, Gemeinsamkeit betonend'],
              ['<strong>Symploke</strong>',         'Kombination aus Anapher und Epipher',                         'Gleicher Anfang und Ende in mehreren Sätzen', 'Sehr eindringlich, Rahmeneffekt'],
              ['<strong>Refrain</strong>',          'Wiederkehrende Zeile(n) in Gedicht oder Lied',               'Kehrreim in Balladen und Volksliedern',   'Einprägsam, Struktur, emotionale Verstärkung'],
              ['<strong>Euphonie</strong>',         'Wohlklang durch weiche Konsonanten (l, m, n, r)',             'Harmonische Lyrik der Romantik',          'Beruhigend, ästhetisch angenehm'],
              ['<strong>Kakophonie</strong>',       'Missklang durch harte Konsonanten (k, t, p, sch)',            'Expressionistische Gedichte',              'Hart, beunruhigend, aggressiv'],
            ],
          })}
        </div>
      </section>

      <!-- ══ TIEFE ANALYSE ══ -->
      <section class="lz-content-section">
        <div class="lz-section-wrap">
          ${renderSubhead('Analyse-Praxis')}
          <h2 class="lz-h2 reveal">Klangfiguren richtig analysieren</h2>

          ${renderInfobox({
            type:  '',
            icon:  'fas fa-exclamation-triangle',
            title: 'Fehler vermeiden',
            body:  'Es genügt nicht zu schreiben: <em>„Der Autor verwendet eine Alliteration."</em><br><br>'
                 + 'Immer vollständig: <strong>Mittel benennen → Textstelle zitieren → '
                 + 'Wirkung erklären → Bezug zur Aussage herstellen.</strong>',
          })}

          ${renderMerkboxGrid([
            {
              icon:  'fas fa-tag',
              title: '1. Benennen',
              text:  'Welches Klangmittel ist es? Alliteration, Assonanz, Onomatopoesie?',
            },
            {
              icon:  'fas fa-quote-left',
              title: '2. Belegen',
              text:  'Textstelle wörtlich zitieren mit Zeilenangabe: „… (Z. 5)"',
            },
            {
              icon:  'fas fa-ear-listen',
              title: '3. Wirkung beschreiben',
              text:  'Welchen Klangeffekt erzeugt es? Rhythmus, Melodie, Eindringlichkeit, Dissonanz?',
            },
            {
              icon:  'fas fa-link',
              title: '4. Textbezug herstellen',
              text:  'Wie unterstützt das Klangmittel die inhaltliche Aussage des Textes?',
            },
          ])}

          ${renderInfobox({
            type:  'tip',
            icon:  'fas fa-book',
            title: 'Beispielanalyse: Anapher',
            body:  '<em>„Ich habe einen Traum, dass … Ich habe einen Traum, dass … '
                 + 'Ich habe einen Traum, dass …"</em> (Martin Luther King, 1963)<br><br>'
                 + 'Die <strong>Anapher</strong> „Ich habe einen Traum" wird achtmal wiederholt. '
                 + 'Dies erzeugt eine <strong>beschwörende Wirkung</strong> und verleiht dem '
                 + 'Wunsch nach Gleichberechtigung eine feierliche, prophetische Qualität. '
                 + 'Die Wiederholung <strong>steigert die emotionale Intensität</strong> und '
                 + 'macht den Kerngedanken unauslöschlich einprägsam.',
          })}
        </div>
      </section>

      <!-- ══════════════ PAGE NAVIGATION BOTTOM ══════════════ -->
      <section class="lz-content-section" style="padding:1.5rem 0 3rem;">
        <div class="lz-section-wrap">
          ${renderPageNav({
            prev: { label: '3.4 Lineare Erörterung', link: `${BASE}/themen/eroertern/linear` },
            next: { label: '4.2 Wortfiguren & Tropen', link: `${BASE}/themen/stilmittel/wortfiguren` },
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