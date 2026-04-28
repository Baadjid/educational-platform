// pages/projekte/lernzettel/faecher/deutsch/themen/gattungen/analyse.js
// Deutsch 2.6 — Analyse & Interpretation von Texten

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


export default class DeutschAnalysePage {
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
            <span>2.6 · Analyse & Interpretation</span>
          </nav>
          <h1 class="lz-sub-title">Analyse &<br><em>Interpretation.</em></h1>
          <p class="lz-sub-desc">Textimmanent · Textübergreifend · Deutungshypothese · Vergleich</p>
          ${renderTags(['Kapitel 2.6', 'Textanalyse', 'Abitur 2026'])}
        </div>
      </section>

      <!-- ══ ANALYSE VS. INTERPRETATION ══ -->
      <section class="lz-content-section">
        <div class="lz-section-wrap">
          ${renderSubhead('Grundbegriffe')}
          <h2 class="lz-h2 reveal">Analyse vs. Interpretation</h2>

          ${renderCompare({
            titleA: '🔬 Analyse',
            titleB: '💡 Interpretation',
            listA: [
              'Herausarbeiten von Strukturmerkmalen, sprachlichen Mitteln, Aufbau',
              'Beschreibt: Was steht da? Wie ist es gestaltet?',
              'Nachvollziehbar, weitgehend objektiv',
              'Grundlage für die Interpretation',
            ],
            listB: [
              'Gesamtdeutung des Textes — Bedeutung, Aussage, Intention',
              'Fragt: Was bedeutet das? Warum gestaltet der Autor es so?',
              'Subjektiver, aber textbasiert begründet',
              'Baut auf der Analyse auf',
            ],
          })}

          ${renderInfobox({
            type:  'tip',
            icon:  'fas fa-lightbulb',
            title: 'Deutungshypothese',
            body:  'Die <strong>Deutungshypothese</strong> steht am Anfang der Interpretation. '
                 + 'Sie formuliert deine Kernthese darüber, was der Text aussagt. '
                 + 'Beispiel: <em>„Die Erzählung thematisiert die Zerstörung menschlicher '
                 + 'Würde durch gesellschaftliche Ausgrenzung und zeigt, wie soziale Strukturen '
                 + 'den Einzelnen in eine ausweglose Lage treiben."</em>',
          })}
        </div>
      </section>

      <!-- ══ SCHRITTE DER ANALYSE ══ -->
      <section class="lz-content-section">
        <div class="lz-section-wrap">
          ${renderSubhead('Methodik')}
          <h2 class="lz-h2 reveal">Analyse literarischer Texte — Schritte</h2>

          ${renderTable({
            headers: ['Schritt', 'Inhalt'],
            rows: [
              ['<strong>1. Texterfassung</strong>',    'Textart, Thema, erste Eindrücke, Deutungshypothese formulieren'],
              ['<strong>2. Inhalt</strong>',            'Knappe Inhaltsangabe (Präsens, eigene Worte, keine Deutung)'],
              ['<strong>3. Formanalyse</strong>',       'Gattung, Aufbau, Erzählform, Zeitstruktur, Figurenkonstellation'],
              ['<strong>4. Sprachanalyse</strong>',     'Stilmittel benennen, belegen, Wirkung & Funktion deuten'],
              ['<strong>5. Deutung</strong>',           'Bedeutung des Texts, Aussageabsicht des Autors, Motiv/Thema'],
              ['<strong>6. Wertung / Einordnung</strong>', 'Epochenkontext, eigene Beurteilung, Aktualität des Textes'],
            ],
          })}

          ${renderInfobox({
            type:  '',
            icon:  'fas fa-exclamation-triangle',
            title: 'Häufiger Fehler: Inhalt ≠ Analyse',
            body:  'In der Analyse darf nicht einfach der Inhalt nacherzählt werden. '
                 + 'Jede inhaltliche Aussage muss direkt mit einer Beobachtung über '
                 + '<strong>Form oder Sprache</strong> verknüpft sein: '
                 + '<em>„Der Protagonist verhält sich … — dies zeigt sich in der Formulierung … '
                 + '(Z. X), die … bewirkt."</em>',
          })}
        </div>
      </section>

      <!-- ══ TEXTIMMANENT VS. TEXTÜBERGREIFEND ══ -->
      <section class="lz-content-section">
        <div class="lz-section-wrap">
          ${renderSubhead('Deutungsansätze')}
          <h2 class="lz-h2 reveal">Textimmanent & textübergreifend</h2>

          ${renderCompare({
            titleA: '🔒 Textimmanente Deutung',
            titleB: '🌐 Textübergreifende Deutung',
            listA: [
              'Nur der Text selbst ist Grundlage',
              'Keine Autorbiografie, kein Epochenwissen',
              'Strukturen, Motive, Sprache des Textes',
              'Auch: werkimmanente oder formale Analyse',
            ],
            listB: [
              'Text wird in Kontext gesetzt',
              'Autorenbiografie, Entstehungszeit, Epoche',
              'Rezeptionsgeschichte, Einflüsse, Vergleichstexte',
              'Gesellschaftliche und historische Bezüge',
            ],
          })}
        </div>
      </section>

      <!-- ══ VERGLEICHENDE ANALYSE ══ -->
      <section class="lz-content-section">
        <div class="lz-section-wrap">
          ${renderSubhead('Textvergleich')}
          <h2 class="lz-h2 reveal">Vergleichende Analyse</h2>

          ${renderMerkboxGrid([
            {
              icon:  'fas fa-file-alt',
              title: '1. Beide Texte einzeln erfassen',
              text:  'Jeder Text wird zunächst für sich gelesen und verstanden, bevor verglichen wird.',
            },
            {
              icon:  'fas fa-list-check',
              title: '2. Vergleichskriterien festlegen',
              text:  'Thema, Form, Sprache, Perspektive, Epoche — welche Aspekte sollen verglichen werden?',
            },
            {
              icon:  'fas fa-equals',
              title: '3. Gemeinsamkeiten',
              text:  'Was haben beide Texte gemeinsam? Gleiches Thema, ähnliche Motive, gleiche Gattung?',
            },
            {
              icon:  'fas fa-not-equal',
              title: '4. Unterschiede',
              text:  'Worin unterscheiden sie sich? Andere Perspektive, Ton, Intention, Lösung des Problems?',
            },
            {
              icon:  'fas fa-star',
              title: '5. Bewertung & Fazit',
              text:  'Welcher Text erreicht sein Ziel wirkungsvoller — und warum?',
            },
          ])}

          ${renderInfobox({
            type:  'tip',
            icon:  'fas fa-graduation-cap',
            title: 'Abitur-Tipp: Aspektorientiert vergleichen',
            body:  'Vermeide, erst Text A komplett zu analysieren und dann Text B. '
                 + 'Besser: <strong>Aspekt für Aspekt vergleichen</strong>. '
                 + 'Beispiel: „Bezüglich der Erzählperspektive unterscheiden sich Text A und B dadurch, '
                 + 'dass Text A … während Text B …"',
          })}
        </div>
      </section>

      <!-- ══ PRODUKTIONSORIENTIERT ══ -->
      <section class="lz-content-section">
        <div class="lz-section-wrap">
          ${renderSubhead('Kreatives Schreiben')}
          <h2 class="lz-h2 reveal">Produktionsorientierte Deutung</h2>
          <p class="lz-prose reveal">
            Bei der <strong>produktionsorientierten Deutung</strong> wird der Text kreativ
            weitergeführt oder umgeschrieben, um das Textverständnis zu zeigen.
          </p>

          ${renderAccordion([
            {
              title:   '✍️ Formen produktionsorientierter Aufgaben',
              content: `<ul style="line-height:1.9; margin-left:1.2rem;">
                          <li><strong>Innerer Monolog:</strong> Gedanken einer Figur in einem bestimmten Moment formulieren</li>
                          <li><strong>Brief / Tagebucheintrag:</strong> Figur schreibt aus ihrer Perspektive</li>
                          <li><strong>Paralleltext:</strong> Gleicher Inhalt in anderer Textform (z.B. Gedicht → Prosa)</li>
                          <li><strong>Fortsetzung:</strong> Geschichte weiterführen, die im Text offen bleibt</li>
                          <li><strong>Perspektivwechsel:</strong> Szene aus Sicht einer anderen Figur erzählen</li>
                        </ul>`,
            },
            {
              title:   '⚠️ Was zu beachten ist',
              content: `<ul style="line-height:1.9; margin-left:1.2rem;">
                          <li>Produktionsorientierte Aufgaben sind keine freien Kreativaufgaben — sie müssen textbasiert sein</li>
                          <li>Handlung, Figurencharaktere und Ton müssen zur Vorlage passen</li>
                          <li>Oft wird eine kurze Begründung (Schreibauftrag) erwartet</li>
                        </ul>`,
            },
          ])}
        </div>
      </section>

      <!-- ══════════════ PAGE NAVIGATION BOTTOM ══════════════ -->
      <section class="lz-content-section" style="padding:1.5rem 0 3rem;">
        <div class="lz-section-wrap">
          ${renderPageNav({
            prev: { label: '2.5 Reden & Rhetorik', link: `${BASE}/themen/gattungen/reden` },
            next: { label: '3.1 Argumentationsarten', link: `${BASE}/themen/eroertern/argumentieren` },
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