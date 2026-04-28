// pages/projekte/lernzettel/faecher/deutsch/themen/akademisch/direktive.js
// Deutsch 6.3 — Performative Verben: Direktive, Kommissive & Expressive

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



export default class DeutschDirektivePage {
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
            <span>6.3 · Direktive · Kommissive · Expressive</span>
          </nav>
          <h1 class="lz-sub-title">Direktive · Kommissive<br><em>& Expressive.</em></h1>
          <p class="lz-sub-desc">Auffordern · Versprechen · Gefühle ausdrücken</p>
          ${renderTags(['Kapitel 6.3', 'Sprechakte', 'Abitur 2026'])}
        </div>
      </section>

      <!-- ══ DIREKTIVE ══ -->
      <section class="lz-content-section">
        <div class="lz-section-wrap">
          ${renderSubhead('Auffordern & Anweisen')}
          <h2 class="lz-h2 reveal">Direktive — Auffordern & Anweisen</h2>
          <p class="lz-prose reveal">
            Direktive sind Sprechakte, mit denen der Sprecher versucht, den Hörer zu einer
            Handlung zu veranlassen — von der höflichen Bitte bis zum autoritativen Befehl.
          </p>
          ${renderTable({
            headers: ['Verb', 'Verwendungskontext', 'Beispielsatz (DE)', 'EN'],
            rows: [
              ['<strong>appellieren</strong>', 'Eindringlich, emotional bitten',        'Die Autorin appelliert an die Vernunft der Leser.',     'appeals to'],
              ['<strong>auffordern</strong>',  'Zu einer Handlung veranlassen',         'Der Artikel fordert dazu auf, aktiv zu werden.',       'calls for'],
              ['<strong>beschwören</strong>',  'Eindringlich bitten, heraufbeschwören', 'Er beschwört die Gefahr eines Rückfalls.',              'conjures up'],
              ['<strong>bitten</strong>',      'Höflich um etwas ersuchen',             'Ich bitte Sie, mir zu helfen.',                        'requests'],
              ['<strong>empfehlen</strong>',   'Als vorteilhaft nahelegen',             'Ich empfehle die Lektüre dieses Buches.',              'recommends'],
              ['<strong>ermahnen</strong>',    'Mit Nachdruck zu etwas auffordern',     'Die Eltern ermahnen ihre Kinder zur Vorsicht.',        'admonishes'],
              ['<strong>fordern</strong>',     'Nachdrücklich verlangen',               'Der Text fordert eine Reform des Bildungssystems.',     'demands'],
              ['<strong>mahnen</strong>',      'Warnend erinnern',                      'Der Autor mahnt zur Vorsicht bei voreiligen Schlüssen.','urges caution'],
              ['<strong>raten</strong>',       'Einen Rat geben',                       'Ich rate dir, vorsichtig zu sein.',                    'advises'],
              ['<strong>warnen</strong>',      'Auf Gefahren hinweisen',                'Experten warnen vor den Folgen des Klimawandels.',      'warns'],
            ],
          })}
          ${renderInfobox({
            type:  '',
            icon:  'fas fa-search',
            title: 'In der Textanalyse erkennen',
            body:  'Ein hoher Anteil direktiver Verben zeigt, dass ein Text stark <strong>appellativen Charakter</strong> '
                 + 'hat — der Autor will den Leser nicht nur informieren, sondern zu einer Handlung oder Einstellung '
                 + 'bewegen. Typisch für: politische Reden, Kommentare, Aufrufe.',
          })}
        </div>
      </section>

      <!-- ══ KOMMISSIVE ══ -->
      <section class="lz-content-section">
        <div class="lz-section-wrap">
          ${renderSubhead('Versprechen & Verpflichten')}
          <h2 class="lz-h2 reveal">Kommissive — Versprechen & Verpflichten</h2>
          <p class="lz-prose reveal">
            Kommissive sind Sprechakte, mit denen der Sprecher sich zu einer
            zukünftigen Handlung verpflichtet. Das Aussprechen <em>ist</em> die Verpflichtung.
          </p>
          ${renderTable({
            headers: ['Verb', 'Verwendungskontext', 'Beispielsatz (DE)', 'EN'],
            rows: [
              ['<strong>bürgen</strong>',        'Sich für jemanden/etwas verbürgen',    'Ich bürge für die Qualität des Produkts.',             'vouches for'],
              ['<strong>garantieren</strong>',   'Für etwas einstehen',                  'Der Hersteller garantiert die Funktionsfähigkeit.',     'guarantees'],
              ['<strong>geloben</strong>',       'Feierlich versprechen',                 'Ich gelobe Treue und Gehorsam.',                       'vows'],
              ['<strong>schwören</strong>',      'Feierlich, eidlich geloben',            'Ich schwöre, die Wahrheit zu sagen.',                  'swears'],
              ['<strong>sich anbieten</strong>', 'Freiwillig bereit sein',               'Ich biete mich an, die Aufgabe zu übernehmen.',         'offers'],
              ['<strong>sich verpflichten</strong>', 'Eine Verbindlichkeit eingehen',    'Ich verpflichte mich, die Regeln einzuhalten.',         'commits'],
              ['<strong>sich verbürgen</strong>','Die Gewähr übernehmen',                'Ich verbürge mich für die Richtigkeit der Angaben.',    'guarantees'],
              ['<strong>versprechen</strong>',   'Sich zu etwas verpflichten',           'Ich verspreche, die Arbeit rechtzeitig abzugeben.',     'promises'],
              ['<strong>zusagen</strong>',       'Verbindlich versprechen',              'Der Minister sagt Unterstützung zu.',                   'assures'],
              ['<strong>zusichern</strong>',     'Verbindlich, offiziell zusagen',       'Die Regierung sichert zu, Maßnahmen zu ergreifen.',     'assures firmly'],
            ],
          })}
        </div>
      </section>

      <!-- ══ EXPRESSIVE ══ -->
      <section class="lz-content-section">
        <div class="lz-section-wrap">
          ${renderSubhead('Gefühle ausdrücken')}
          <h2 class="lz-h2 reveal">Expressive — Gefühle & Einstellungen ausdrücken</h2>
          <p class="lz-prose reveal">
            Expressive sind Sprechakte, mit denen der Sprecher seinen Gemütszustand,
            seine Einstellung oder seine Wertschätzung gegenüber einer Person oder
            Situation ausdrückt.
          </p>
          ${renderTable({
            headers: ['Verb', 'Verwendungskontext', 'Beispielsatz (DE)', 'EN'],
            rows: [
              ['<strong>bedauern</strong>',           'Trauer / Mitgefühl ausdrücken',      'Ich bedauere zutiefst, was geschehen ist.',            'regrets'],
              ['<strong>begrüßen</strong>',           'Positiv aufnehmen, willkommen heißen','Ich begrüße diese Initiative ausdrücklich.',          'welcomes'],
              ['<strong>beglückwünschen</strong>',    'Glückwünsche aussprechen',            'Ich beglückwünsche dich zu deinem Erfolg.',            'congratulates'],
              ['<strong>beklagen</strong>',           'Sein Bedauern ausdrücken',           'Ich beklage den Verlust eines großen Denkers.',        'laments'],
              ['<strong>bewundern</strong>',          'Hochachtung ausdrücken',              'Ich bewundere deinen Mut und deine Entschlossenheit.', 'admires'],
              ['<strong>danken</strong>',             'Dankbarkeit zeigen',                  'Ich danke Ihnen für Ihre Unterstützung.',              'thanks'],
              ['<strong>entschuldigen</strong>',      'Um Verzeihung bitten',               'Ich entschuldige mich für die Verspätung.',            'apologizes'],
              ['<strong>gratulieren</strong>',        'Glückwünsche aussprechen',            'Ich gratuliere Ihnen zu diesem Erfolg!',               'congratulates'],
              ['<strong>kondolieren</strong>',        'Beileid aussprechen',                 'Ich kondoliere den Hinterbliebenen.',                  'offers condolences'],
              ['<strong>loben</strong>',              'Positiv bewerten, anerkennen',        'Ich lobe deine Ausdauer und deinen Fleiß.',            'praises'],
              ['<strong>würdigen</strong>',           'Anerkennung zollen',                  'Ich würdige seine außerordentlichen Leistungen.',      'appreciates'],
            ],
          })}
          ${renderMerkboxGrid([
            {
              icon:  'fas fa-magnifying-glass',
              title: 'In der Textanalyse',
              text:  'Expressive verraten die emotionale Haltung des Autors — Distanzierung, Empathie, Wertschätzung oder Ablehnung. Sie geben Aufschluss über den Ton des Textes.',
            },
            {
              icon:  'fas fa-scale-balanced',
              title: 'Nuancen beachten',
              text:  '„bedauern" und „beklagen" unterscheiden sich graduell: „beklagen" ist formeller und öffentlicher; „bedauern" ist persönlicher und intimer.',
            },
            {
              icon:  'fas fa-pen-ruler',
              title: 'Im eigenen Schreiben',
              text:  'Im Abitur-Aufsatz: statt „Ich finde gut, dass …" → „Ich begrüße, dass …" oder „Positiv zu würdigen ist …"',
            },
          ])}
        </div>
      </section>

      <!-- ══════════════ PAGE NAVIGATION BOTTOM ══════════════ -->
      <section class="lz-content-section" style="padding:1.5rem 0 3rem;">
        <div class="lz-section-wrap">
          ${renderPageNav({
            prev: { label: '6.2 Performative Verben — Assertive', link: `${BASE}/themen/akademisch/assertive` },
            next: { label: '6.4 Performative Verben — Deklarative & Bewertende', link: `${BASE}/themen/akademisch/deklarative` },
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