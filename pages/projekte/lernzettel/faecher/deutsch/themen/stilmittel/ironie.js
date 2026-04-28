// pages/projekte/lernzettel/faecher/deutsch/themen/stilmittel/ironie.js
// Deutsch 4.4 — Ironie, Sarkasmus & weitere rhetorische Mittel

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

export default class DeutschIroniePage {
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
            <span>4.4 · Ironie & weitere Mittel</span>
          </nav>
          <h1 class="lz-sub-title">Ironie, Sarkasmus &<br><em>weitere Mittel.</em></h1>
          <p class="lz-sub-desc">Ironie · Sarkasmus · Zynismus · Rhetorische Frage · Imperativ · Apostrophe</p>
          ${renderTags(['Kapitel 4.4', 'Stilmittel', 'Abitur 2026'])}
        </div>
      </section>

      <!-- ══ IRONIE-SPEKTRUM ══ -->
      <section class="lz-content-section">
        <div class="lz-section-wrap">
          ${renderSubhead('Das Ironie-Spektrum')}
          <h2 class="lz-h2 reveal">Von Ironie bis Zynismus</h2>

          ${renderTable({
            headers: ['Mittel', 'Definition', 'Ton', 'Beispiel'],
            rows: [
              ['<strong>Ironie</strong>',   'Das Gegenteil von dem sagen, was gemeint ist',                  'Subtil, humorvoll, distanziert', '„Das hast du ja wieder toll gemacht!" (bei einem Fehler)'],
              ['<strong>Sarkasmus</strong>','Verletzende, beißende Ironie — zielt auf eine Person',          'Aggressiv, verletzend',          '„Gratuliere, du bist ein echtes Genie!" (höhnisch)'],
              ['<strong>Zynismus</strong>', 'Grundlegende Verachtung gegenüber Idealen und Werten',          'Nihilistisch, bitter',           '„Menschlichkeit? Ein Witz."'],
              ['<strong>Satire</strong>',   'Kritische Übertreibung gesellschaftlicher Missstände',          'Kritisch, entlarvend',           'Jonathan Swifts „A Modest Proposal"'],
              ['<strong>Parodie</strong>',  'Nachahmung eines Stils mit komischer Wirkung',                  'Komisch, spielerisch',           'Parodie eines pathetischen Gedichts'],
            ],
          })}

          ${renderCompare({
            titleA: '😄 Ironie',
            titleB: '😤 Sarkasmus',
            listA: [
              'Eher harmlos und spielerisch',
              'Oft gegenseitiges Einverständnis nötig',
              'Zielt auf Situationen oder Ideen',
              'Kann freundlich oder kritisch sein',
              'Häufig mit einem Augenzwinkern',
            ],
            listB: [
              'Kann ernsthaft verletzen',
              'Bewusst auf eine Person gerichtet',
              'Demütigung ist oft das Ziel',
              'Kein Augenzwinkern — gemeint ist es ernst',
              'Kann Vertrauensverlust auslösen',
            ],
          })}
        </div>
      </section>

      <!-- ══ IRONIE ERKENNEN ══ -->
      <section class="lz-content-section">
        <div class="lz-section-wrap">
          ${renderSubhead('Erkennung')}
          <h2 class="lz-h2 reveal">Ironie erkennen & analysieren</h2>

          ${renderMerkboxGrid([
            {
              icon:  'fas fa-arrows-left-right',
              title: 'Widerspruch zum Kontext',
              text:  'Das Gesagte passt nicht zur Situation. Wenn jemand bei einem Fehler lobt: Kontext verrät die Ironie.',
            },
            {
              icon:  'fas fa-face-grin-wink',
              title: 'Übertriebene Zustimmung',
              text:  'Übertriebenes Lob kann das Gegenteil meinen. „Natürlich, du hast völlig recht, wie immer." — ironisch oder ernst?',
            },
            {
              icon:  'fas fa-quote-left',
              title: 'Anführungszeichen',
              text:  'Distanzierende Anführungszeichen können Ironie signalisieren: Die sogenannte „Reform".',
            },
            {
              icon:  'fas fa-magnifying-glass',
              title: 'In der Analyse',
              text:  'Ironie nie nur benennen — immer erklären: Wer ist das Ziel? Was wird kritisiert? Welche Wirkung auf den Leser?',
            },
          ])}
        </div>
      </section>

      <!-- ══ APPELLFIGUREN ══ -->
      <section class="lz-content-section">
        <div class="lz-section-wrap">
          ${renderSubhead('Appellfiguren')}
          <h2 class="lz-h2 reveal">Rhetorische Frage, Imperativ & Apostrophe</h2>

          ${renderTable({
            headers: ['Mittel', 'Definition', 'Beispiel', 'Wirkung'],
            rows: [
              [
                '<strong>Rhetorische Frage</strong>',
                'Frage, die keine Antwort erwartet — die Antwort ist impliziert',
                '„Wer will das nicht?"',
                'Aktiviert Leser, suggeriert Zustimmung, einbindend',
              ],
              [
                '<strong>Imperativ</strong>',
                'Befehlsform — direkte Aufforderung zum Handeln',
                '„Kauf jetzt!", „Denk nach!"',
                'Fordernd, direkt, aktivierend — auch drängend',
              ],
              [
                '<strong>Apostrophe</strong>',
                'Direkte Anrede einer Person, Sache oder Abstraktion (auch abwesend)',
                '„Oh Freiheit, du großes Gut!"',
                'Pathetisch, beschwörend, dramatisch',
              ],
              [
                '<strong>Exklamation</strong>',
                'Emotionaler Ausruf',
                '„Welch ein Wahnsinn!"',
                'Expressiv, dramatisch, Spontaneität signalisierend',
              ],
            ],
          })}
        </div>
      </section>

      <!-- ══ WORTSPIELE ══ -->
      <section class="lz-content-section">
        <div class="lz-section-wrap">
          ${renderSubhead('Wortspiele')}
          <h2 class="lz-h2 reveal">Wortspiele & Mehrdeutigkeit</h2>

          ${renderAccordion([
            {
              title:   '🎭 Wortspiel (Kalauer / Paronomasie)',
              content: `<ul style="line-height:1.9; margin-left:1.2rem;">
                          <li>Spiel mit der Doppeldeutigkeit von Wörtern oder Klangähnlichkeit</li>
                          <li>Beispiel: „Eile mit Weile" — klingt wie „Eile mit Weile" (Zeit = Weile), bedeutet Ruhe bewahren</li>
                          <li>Wirkung: witzig, geistreich, einprägsam, unterhaltend</li>
                          <li>Achtung: Kann auch als flach empfunden werden (Kalauer)</li>
                        </ul>`,
            },
            {
              title:   '🔀 Ambiguität',
              content: `<ul style="line-height:1.9; margin-left:1.2rem;">
                          <li>Bewusste Mehrdeutigkeit — ein Ausdruck kann mehrere Bedeutungen haben</li>
                          <li>Besonders in der Lyrik und im modernen Roman eingesetzt</li>
                          <li>Wirkung: Tiefe, interpretative Offenheit, Spannung zwischen Bedeutungsebenen</li>
                        </ul>`,
            },
            {
              title:   '🔁 Pars pro toto / Totum pro parte',
              content: `<ul style="line-height:1.9; margin-left:1.2rem;">
                          <li><strong>Pars pro toto:</strong> Teil steht für das Ganze — „Berlin hat entschieden" (= die Bundesregierung)</li>
                          <li><strong>Totum pro parte:</strong> Ganzes steht für den Teil — „Deutschland spielt gegen Frankreich" (= die Mannschaften)</li>
                          <li>Wirkung: Verkürzend, prägnant, oft journalistisch</li>
                        </ul>`,
            },
          ])}
        </div>
      </section>

      <!-- ══════════════ PAGE NAVIGATION BOTTOM ══════════════ -->
      <section class="lz-content-section" style="padding:1.5rem 0 3rem;">
        <div class="lz-section-wrap">
          ${renderPageNav({
            prev: { label: '4.3 Satz- & Strukturfiguren', link: `${BASE}/themen/stilmittel/satzfiguren` },
            next: { label: '4.5 Analyse-Methodik & Formulierungshilfen', link: `${BASE}/themen/stilmittel/analyse-methodik` },
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