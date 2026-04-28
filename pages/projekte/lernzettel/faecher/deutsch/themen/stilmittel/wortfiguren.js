// pages/projekte/lernzettel/faecher/deutsch/themen/stilmittel/wortfiguren.js
// Deutsch 4.2 — Wortfiguren & Tropen

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

export default class DeutschWortfigurenPage {
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
            <span>4.2 · Wortfiguren & Tropen</span>
          </nav>
          <h1 class="lz-sub-title">Wortfiguren &<br><em>Tropen.</em></h1>
          <p class="lz-sub-desc">Metapher · Vergleich · Symbol · Hyperbel · Litotes · Euphemismus · Paradoxon</p>
          ${renderTags(['Kapitel 4.2', 'Stilmittel', 'Abitur 2026'])}
        </div>
      </section>

      <!-- ══ BILDLICHE ÜBERTRAGUNGEN ══ -->
      <section class="lz-content-section">
        <div class="lz-section-wrap">
          ${renderSubhead('Bildsprache')}
          <h2 class="lz-h2 reveal">Bildliche Übertragungen (Tropen)</h2>
          <p class="lz-prose reveal">
            Tropen übertragen die Bedeutung eines Ausdrucks auf etwas anderes —
            sie machen Abstraktes anschaulich und verleihen Texten poetische Kraft.
          </p>

          ${renderTable({
            headers: ['Mittel', 'Definition', 'Beispiel', 'Wirkung'],
            rows: [
              ['<strong>Metapher</strong>',         'Bildliche Übertragung ohne „wie" — direktes Gleichsetzen',       '„Das Feuer der Leidenschaft"',          'Verdichtet Bedeutung, poetisch, anschaulich'],
              ['<strong>Vergleich</strong>',         'Übertragung mit „wie" oder „als"',                               '„Stark wie ein Sturm"',                  'Veranschaulicht, konkretisiert Abstraktes'],
              ['<strong>Personifikation</strong>',   'Vermenschlichung von Dingen, Tieren oder Abstrakta',             '„Die Zeit läuft davon"',                 'Lebendig, emotional, schafft Nähe'],
              ['<strong>Allegorie</strong>',         'Durchgehende, erweiterte Metapher mit systematischer Bedeutung', 'Platons Höhlengleichnis',                'Komplex, mehrschichtig, philosophisch'],
              ['<strong>Symbol</strong>',            'Zeichen mit konventioneller übertragener Bedeutung',             'Taube = Frieden, Rose = Liebe',          'Verdichtet Bedeutung, universell verständlich'],
              ['<strong>Metonymie</strong>',         'Austausch durch sachlich Benachbartes',                          '„Krone" für Königtum, „Feder" für Schreiben', 'Prägnant, verkürzend'],
              ['<strong>Synekdoche</strong>',        'Teil steht für Ganzes (Pars pro toto) oder umgekehrt',           '„ein Dach über dem Kopf"',               'Verkürzend, symbolisch'],
            ],
          })}
        </div>
      </section>

      <!-- ══ BEWERTENDE MITTEL ══ -->
      <section class="lz-content-section">
        <div class="lz-section-wrap">
          ${renderSubhead('Wertende Mittel')}
          <h2 class="lz-h2 reveal">Übertreibung, Untertreibung & Beschönigung</h2>

          ${renderTable({
            headers: ['Mittel', 'Definition', 'Beispiel', 'Wirkung'],
            rows: [
              ['<strong>Hyperbel</strong>',      'Starke Übertreibung',                                  '„Ich hab dir das tausendmal gesagt"',     'Dramatisch, expressiv, emotional verstärkend'],
              ['<strong>Litotes</strong>',       'Untertreibung durch Verneinung des Gegenteils',        '„Das ist nicht schlecht" (= sehr gut)',   'Ironisch-distanziert, vorsichtig wertend'],
              ['<strong>Euphemismus</strong>',   'Beschönigende Umschreibung',                           '„entschlafen" statt „sterben"',           'Abschwächend, höflich, manchmal verschleiernd'],
              ['<strong>Dysphemismus</strong>',  'Abwertende, schockierende Umschreibung',               '„abkratzen" statt „sterben"',             'Provokant, despektierlich, schockierend'],
              ['<strong>Understatement</strong>','Bewusste Untertreibung des Gemeinten',                 '„ganz nett" für etwas Fantastisches',     'Ironie, britischer Humor, Distanz'],
            ],
          })}
        </div>
      </section>

      <!-- ══ WIDERSPRUCHSFIGUREN ══ -->
      <section class="lz-content-section">
        <div class="lz-section-wrap">
          ${renderSubhead('Widerspruch')}
          <h2 class="lz-h2 reveal">Oxymoron, Antithese & Paradoxon</h2>

          ${renderTable({
            headers: ['Mittel', 'Definition', 'Beispiel', 'Wirkung'],
            rows: [
              ['<strong>Antithese</strong>',    'Gegenüberstellung von Gegensätzen im Parallelismus',   '„Heiß und kalt, Freund und Feind"',        'Kontrastreich, verdeutlichend, dramatisch'],
              ['<strong>Oxymoron</strong>',     'Verbindung zweier widersprüchlicher Begriffe',         '„bittere Süße", „lebendiger Tod"',          'Paradox, provoziert Nachdenken, pointiert'],
              ['<strong>Paradoxon</strong>',    'Scheinbar widersprüchliche Aussage mit tieferer Wahrheit', '„Weniger ist mehr"',                   'Fordert Reflexion, tiefere Wahrheit dahinter'],
              ['<strong>Chiasmus</strong>',     'Überkreuzstellung: A-B / B-A',                         '„Die Kunst ist lang, kurz ist das Leben"', 'Elegant, ausgewogen, elegant kontrastierend'],
            ],
          })}
        </div>
      </section>

      <!-- ══ BESONDERE MITTEL ══ -->
      <section class="lz-content-section">
        <div class="lz-section-wrap">
          ${renderSubhead('Weitere Tropen')}
          <h2 class="lz-h2 reveal">Neologismus, Archaismus & Anspielung</h2>

          ${renderMerkboxGrid([
            {
              icon:  'fas fa-plus',
              title: 'Neologismus',
              text:  'Wortneuschöpfung, oft für neue Phänomene. Beispiel: „googeln", „Coronaleugner". Wirkung: modern, kreativ, zeitbezogen.',
            },
            {
              icon:  'fas fa-clock-rotate-left',
              title: 'Archaismus',
              text:  'Veralteter Ausdruck, bewusst eingesetzt. Beispiel: „Oheim" (= Onkel), „weiland" (= einst). Wirkung: historisierend, poetisch, distanzierend.',
            },
            {
              icon:  'fas fa-link',
              title: 'Allusion (Anspielung)',
              text:  'Indirekter Verweis auf bekannte Texte, Ereignisse oder Personen. Beispiel: „Das ist sein Waterloo." Wirkung: kulturell verbindend, subtil.',
            },
            {
              icon:  'fas fa-repeat',
              title: 'Tautologie',
              text:  'Unnötige Wiederholung desselben Gedankens mit anderen Worten. Beispiel: „weißer Schimmel". Wirkung: Redundanz — oft unbewusster Fehler, manchmal bewusst zur Betonung.',
            },
          ])}

          ${renderInfobox({
            type:  'tip',
            icon:  'fas fa-graduation-cap',
            title: 'Konnotation vs. Denotation',
            body:  '<strong>Denotation:</strong> Die wörtliche, lexikalische Bedeutung eines Wortes '
                 + '(z.B. „Schlange" = reptilienartiges Tier).<br><br>'
                 + '<strong>Konnotation:</strong> Die mitschwingenden, assoziativen Bedeutungen '
                 + '(z.B. „Schlange" = Verrat, Gefahr, Klugheit).<br><br>'
                 + 'In der Textanalyse analysierst du stets beide Ebenen: Was bedeutet das Wort '
                 + 'wörtlich — und was ruft es beim Leser assoziativ hervor?',
          })}
        </div>
      </section>

      <!-- ══════════════ PAGE NAVIGATION BOTTOM ══════════════ -->
      <section class="lz-content-section" style="padding:1.5rem 0 3rem;">
        <div class="lz-section-wrap">
          ${renderPageNav({
            prev: { label: '4.1 Klangfiguren', link: `${BASE}/themen/stilmittel/klangfiguren` },
            next: { label: '4.3 Satz- & Strukturfiguren', link: `${BASE}/themen/stilmittel/satzfiguren` },
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