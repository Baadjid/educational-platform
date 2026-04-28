// pages/projekte/lernzettel/faecher/deutsch/themen/eroertern/dialektisch.js
// Deutsch 3.3 — Dialektische Erörterung (Pro & Contra)

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


export default class DeutschDialektischPage {
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
            <span>3.3 · Dialektische Erörterung</span>
          </nav>
          <h1 class="lz-sub-title">Dialektische<br><em>Erörterung.</em></h1>
          <p class="lz-sub-desc">Pro & Contra · Sanduhr-Prinzip · Ping-Pong-Prinzip · Synthese</p>
          ${renderTags(['Kapitel 3.3', 'Dialektik', 'Abitur 2026'])}
        </div>
      </section>

      <!-- ══ DEFINITION ══ -->
      <section class="lz-content-section">
        <div class="lz-section-wrap">
          ${renderSubhead('Definition')}
          <h2 class="lz-h2 reveal">Was ist die dialektische Erörterung?</h2>
          <p class="lz-prose reveal">
            Die <strong>dialektische Erörterung</strong> (Pro-und-Contra-Erörterung) behandelt
            eine kontroverse Frage, zu der es mindestens zwei gegensätzliche Standpunkte gibt.
            Beide Seiten werden gleichberechtigt dargestellt und abgewogen —
            am Ende steht eine eigene, begründete Synthese.
          </p>

          ${renderInfobox({
            type:  'tip',
            icon:  'fas fa-lightbulb',
            title: 'Wann dialektische Erörterung?',
            body:  'Bei Fragestellungen, die genuine Kontroversen darstellen: '
                 + '<em>„Sollten Smartphones in der Schule verboten werden?"</em> — '
                 + '<em>„Ist Work-Life-Balance ein Zeichen von Schwäche?"</em> — '
                 + '<em>„Dürfen Tiere für wissenschaftliche Zwecke genutzt werden?"</em>',
          })}
        </div>
      </section>

      <!-- ══ ZWEI AUFBAUPRINZIPIEN ══ -->
      <section class="lz-content-section">
        <div class="lz-section-wrap">
          ${renderSubhead('Aufbauformen')}
          <h2 class="lz-h2 reveal">Sanduhr-Prinzip vs. Ping-Pong-Prinzip</h2>

          ${renderTable({
            headers: ['', 'Sanduhr-Prinzip', 'Ping-Pong-Prinzip'],
            rows: [
              ['<strong>Struktur</strong>',    'Block-Methode: erst alle Contra-, dann alle Pro-Argumente', 'Abwechselnd: Contra 1 → Pro 1 → Contra 2 → Pro 2 …'],
              ['<strong>Vorteil</strong>',     'Klare Blöcke, leicht zu schreiben',                         'Direkter Vergleich, lebendiger'],
              ['<strong>Nachteil</strong>',    'Übergänge schwieriger, Leser muss viel im Gedächtnis behalten', 'Komplexer zu strukturieren'],
              ['<strong>Eignung</strong>',     'Wenige, klar abgrenzbare Argumente',                        'Viele direkt zusammenhängende Argumente'],
            ],
          })}
        </div>
      </section>

      <!-- ══ SANDUHR DETAIL ══ -->
      <section class="lz-content-section">
        <div class="lz-section-wrap">
          ${renderSubhead('Sanduhr-Prinzip')}
          <h2 class="lz-h2 reveal">Aufbau: Sanduhr-Prinzip</h2>

          ${renderTable({
            headers: ['Teil', 'Inhalt', 'Hinweis'],
            rows: [
              ['<strong>Einleitung</strong>',              'Thema einführen, Relevanz zeigen, Frage aufwerfen',                   'Kein eigenes Urteil in der Einleitung!'],
              ['<strong>Contra-Argumente</strong>',        'Argumente gegen deine spätere Position — vom schwächsten zum stärksten', 'Steigerung: schwach → stark'],
              ['<strong>Pro-Argumente</strong>',           'Argumente für deine Position — vom schwächsten zum stärksten',        'Stärkste Argumente am Ende — bleibt im Gedächtnis'],
              ['<strong>Synthese / Schluss</strong>',      'Abwägung, eigene Entscheidung, Kompromiss oder klare Position',        'Muss auf beiden Teilen aufbauen'],
            ],
          })}

          ${renderInfobox({
            type:  '',
            icon:  'fas fa-lightbulb',
            title: 'Warum Contra zuerst?',
            body:  'Beginne mit der Seite, die du <strong>nicht</strong> vertrittst. '
                 + 'So hat deine eigene Position das letzte Wort — sie bleibt beim Leser hängen. '
                 + 'Das nennt man den <em>Recency-Effekt</em>.',
          })}
        </div>
      </section>

      <!-- ══ EINLEITUNG & SCHLUSS ══ -->
      <section class="lz-content-section">
        <div class="lz-section-wrap">
          ${renderSubhead('Einleitung & Schluss')}
          <h2 class="lz-h2 reveal">Einleitung und Synthese formulieren</h2>

          ${renderMerkboxGrid([
            {
              icon:  'fas fa-door-open',
              title: 'Einleitung: Hinführung',
              text:  'Thema in einen größeren Kontext stellen. Aktualität, Relevanz oder persönlicher Bezug. Fragestellung präzise formulieren.',
            },
            {
              icon:  'fas fa-quote-left',
              title: 'Einleitung: Einstiegsmöglichkeiten',
              text:  'Zitat, Statistik, aktuelles Ereignis, provokante These, Szenario / Gedankenexperiment.',
            },
            {
              icon:  'fas fa-balance-scale',
              title: 'Synthese: Abwägung',
              text:  'Welche Argumente überwiegen und warum? Kein bloßes „Es gibt Pro und Contra" — du musst urteilen.',
            },
            {
              icon:  'fas fa-arrow-right',
              title: 'Synthese: Ausblick',
              text:  'Was folgt aus deiner Position? Welche Konsequenzen hat sie? Was wäre zu tun?',
            },
          ])}

          ${renderAccordion([
            {
              title:   '✍️ Formulierungshilfen für die Synthese',
              content: `<ul style="line-height:1.9; margin-left:1.2rem;">
                          <li>„Wägt man beide Seiten gegeneinander ab, so überwiegen die Argumente für…"</li>
                          <li>„Auch wenn … zuzugeben ist, sprechen gewichtigere Gründe für…"</li>
                          <li>„Eine differenzierte Betrachtung zeigt, dass…"</li>
                          <li>„Es wäre verfehlt, pauschal zu urteilen — vielmehr kommt es darauf an, dass…"</li>
                          <li>„Insgesamt lässt sich festhalten, dass… Dennoch bleibt zu bedenken, dass…"</li>
                        </ul>`,
            },
          ])}
        </div>
      </section>

      <!-- ══════════════ PAGE NAVIGATION BOTTOM ══════════════ -->
      <section class="lz-content-section" style="padding:1.5rem 0 3rem;">
        <div class="lz-section-wrap">
          ${renderPageNav({
            prev: { label: '3.2 Textgebundene Erörterung', link: `${BASE}/themen/eroertern/textgebunden` },
            next: { label: '3.4 Lineare Erörterung', link: `${BASE}/themen/eroertern/linear` },
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