// pages/projekte/lernzettel/faecher/deutsch/themen/eroertern/argumentieren.js
// Deutsch 3.1 — Argumentationsarten & Grundstruktur

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

export default class DeutschArgumentierenPage {
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
            <span>3.1 · Argumentationsarten</span>
          </nav>
          <h1 class="lz-sub-title">Argumentationsarten &<br><em>Grundstruktur.</em></h1>
          <p class="lz-sub-desc">These · Argument · Beleg · Argumenttypen · Entkräftung · Fehlschlüsse</p>
          ${renderTags(['Kapitel 3.1', 'Argumentation', 'Abitur 2026'])}
        </div>
      </section>

      <section class="lz-content-section">
        <div class="lz-section-wrap">
          ${renderSubhead('Dreischritt')}
          <h2 class="lz-h2 reveal">Grundstruktur einer Argumentation</h2>
          <p class="lz-prose reveal">
            Nur wer alle drei Elemente liefert, überzeugt — bloßes Behaupten reicht nicht.
          </p>
          ${renderMerkboxGrid([
            {
              icon:  'fas fa-flag',
              title: '1. These / Behauptung',
              text:  'Klar formulierte Aussage, die vertreten wird. Beispiel: „Soziale Medien schaden der politischen Debatte."',
            },
            {
              icon:  'fas fa-gears',
              title: '2. Argument / Begründung',
              text:  'Erklärt warum die These gilt. Beispiel: „Denn Algorithmen bevorzugen emotionalisierende vor sachlichen Inhalten."',
            },
            {
              icon:  'fas fa-chart-bar',
              title: '3. Beleg / Beispiel',
              text:  'Statistik, Studie, historisches Beispiel. Beispiel: „Eine MIT-Studie (2018) zeigte, dass Falschnachrichten 6× schneller verbreitet werden als Korrekturen."',
            },
          ])}
          ${renderInfobox({
            type:  '',
            icon:  'fas fa-plus',
            title: 'Erweiterte Struktur',
            body:  `<ul style="line-height:1.9; margin-left:1.2rem;">
                      <li><strong>Gegenbehauptung:</strong> Alternative Position darstellen</li>
                      <li><strong>Einwand:</strong> Schwäche der Gegenposition benennen</li>
                      <li><strong>Entkräftung:</strong> Einwand widerlegen, eigene Position stärken</li>
                      <li><strong>Folgerung:</strong> Schlussfolgerung aus der Gesamtargumentation</li>
                    </ul>`,
          })}
        </div>
      </section>

      <section class="lz-content-section">
        <div class="lz-section-wrap">
          ${renderSubhead('Argumentarten')}
          <h2 class="lz-h2 reveal">Die 5 Argumenttypen</h2>
          ${renderTable({
            headers: ['Typ', 'Basis', 'Stärke', 'Schwäche'],
            rows: [
              ['<strong>Faktenargument</strong>',      'Statistiken, wissenschaftliche Erkenntnisse', 'Hoch — objektiv, überprüfbar',       'Können selektiv gewählt werden'],
              ['<strong>Autoritätsargument</strong>',  'Experten, Institutionen, Gesetze',            'Mittel — Vertrauen durch Expertise',  'Autoritäten können irren'],
              ['<strong>Erfahrungsargument</strong>',  'Persönliche Erfahrungen',                     'Gering — authentisch, subjektiv',     'Nicht verallgemeinerbar'],
              ['<strong>Normatives Argument</strong>', 'Gesellschaftliche Werte, Ethik',              'Mittel — moralische Überzeugung',     'Normen sind kulturell verschieden'],
              ['<strong>Analogieargument</strong>',    'Vergleich mit ähnlichem Fall',                'Mittel — veranschaulicht',            'Vergleiche hinken oft'],
            ],
          })}
          ${renderInfobox({
            type:  'tip',
            icon:  'fas fa-lightbulb',
            title: 'Tipp: Steigern & kombinieren',
            body:  'Beginne mit schwächeren Argumenten und steigere zur stärksten Position. '
                 + 'Verbinde Faktenargument + Autoritätsargument + konkretes Beispiel '
                 + 'für maximale Überzeugungskraft.',
          })}
        </div>
      </section>

      <section class="lz-content-section">
        <div class="lz-section-wrap">
          ${renderSubhead('Dialektik')}
          <h2 class="lz-h2 reveal">Gegenargument & Entkräftung</h2>
          ${renderTable({
            headers: ['Schritt', 'Formulierungsbeispiele'],
            rows: [
              ['<strong>Gegenposition einführen</strong>',     '„Man könnte einwenden, dass …" / „Kritiker argumentieren …"'],
              ['<strong>Einwand formulieren</strong>',         '„Allerdings übersieht diese Position …"'],
              ['<strong>Entkräften</strong>',                  '„Diese Sichtweise greift zu kurz, weil …"'],
              ['<strong>Position bekräftigen</strong>',        '„Daher ist festzuhalten, dass …"'],
            ],
          })}
          ${renderAccordion([
            {
              title:   '💡 Strategien zur Entkräftung',
              content: `<ul style="line-height:1.9; margin-left:1.2rem;">
                          <li><strong>Relativieren:</strong> Das Gegenargument gilt nur unter bestimmten Bedingungen</li>
                          <li><strong>Überbieten:</strong> Das eigene Argument ist gewichtiger</li>
                          <li><strong>Gegenbeispiel:</strong> Ein konkretes Beispiel widerlegt die Gegenthese</li>
                          <li><strong>Reductio ad absurdum:</strong> Zu Ende gedacht führt es zu absurden Konsequenzen</li>
                          <li><strong>Differenzierung:</strong> Im Einzelnen unterscheiden statt zu verallgemeinern</li>
                        </ul>`,
            },
            {
              title:   '⚠️ Fehlschlüsse erkennen & vermeiden',
              content: `<ul style="line-height:1.9; margin-left:1.2rem;">
                          <li><strong>Strohmann:</strong> Eine geschwächte Version der Gegenposition angreifen</li>
                          <li><strong>Ad hominem:</strong> Person statt Argument angreifen</li>
                          <li><strong>Hastige Verallgemeinerung:</strong> Aus Einzelfällen auf alle schließen</li>
                          <li><strong>Zirkelschluss:</strong> Die These wird mit sich selbst begründet</li>
                          <li><strong>Falsche Kausalität:</strong> Korrelation ≠ Kausalität</li>
                          <li><strong>Falsche Dichotomie:</strong> Nur zwei Optionen präsentieren, obwohl es mehr gibt</li>
                        </ul>`,
            },
          ])}
        </div>
      </section>

      <section class="lz-content-section">
        <div class="lz-section-wrap">
          ${renderSubhead('Formulierungen')}
          <h2 class="lz-h2 reveal">Nützliche Formulierungen</h2>
          ${renderTable({
            headers: ['Funktion', 'Formulierungen'],
            rows: [
              ['<strong>Einleitung</strong>',        '„In letzter Zeit wird häufig diskutiert …" / „Angesichts der Tatsache, dass …"'],
              ['<strong>These aufstellen</strong>',   '„Ich vertrete die These, dass …" / „Es ist festzuhalten, dass …"'],
              ['<strong>Argument einführen</strong>', '„Ein wesentliches Argument ist …" / „Hinzu kommt, dass …" / „Darüber hinaus …"'],
              ['<strong>Beleg anführen</strong>',     '„Dies belegt … / belegen …" / „Beispielhaft zeigt sich das an …"'],
              ['<strong>Schlussfolgerung</strong>',   '„Daraus ergibt sich, dass …" / „Zusammenfassend lässt sich sagen …"'],
              ['<strong>Fazit</strong>',              '„Abschließend bin ich der Überzeugung, dass …" / „Insgesamt überwiegen …"'],
            ],
          })}
        </div>
      </section>

      <!-- ══════════════ PAGE NAVIGATION BOTTOM ══════════════ -->
      <section class="lz-content-section" style="padding:1.5rem 0 3rem;">
        <div class="lz-section-wrap">
          ${renderPageNav({
            prev: { label: '2.6 Analyse & Interpretation', link: `${BASE}/themen/gattungen/analyse` },
            next: { label: '3.2 Textgebundene Erörterung', link: `${BASE}/themen/eroertern/textgebunden` },
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