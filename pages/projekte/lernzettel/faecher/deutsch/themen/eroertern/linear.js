// pages/projekte/lernzettel/faecher/deutsch/themen/eroertern/linear.js
// Deutsch 3.4 — Lineare / Steigernde Erörterung

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


export default class DeutschLinearPage {
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
            <span>3.4 · Lineare Erörterung</span>
          </nav>
          <h1 class="lz-sub-title">Lineare &<br><em>steigernde Erörterung.</em></h1>
          <p class="lz-sub-desc">Sacherörterung · Steigerungsprinzip · Aufbau · Vergleich zur Dialektik</p>
          ${renderTags(['Kapitel 3.4', 'Erörterung', 'Abitur 2026'])}
        </div>
      </section>

      <!-- ══ DEFINITION ══ -->
      <section class="lz-content-section">
        <div class="lz-section-wrap">
          ${renderSubhead('Definition')}
          <h2 class="lz-h2 reveal">Was ist die lineare Erörterung?</h2>
          <p class="lz-prose reveal">
            Die <strong>lineare (steigernde) Erörterung</strong> oder <strong>Sacherörterung</strong>
            behandelt eine Frage, die nicht wirklich kontrovers ist — es gibt eine klare,
            begründbare Antwort. Argumente werden vom weniger wichtigen zum wichtigsten geordnet
            (Steigerungsprinzip). Am Ende steht die persönliche Stellungnahme.
          </p>

          ${renderCompare({
            titleA: '📈 Lineare Erörterung',
            titleB: '⚖️ Dialektische Erörterung',
            listA: [
              'Eine Position wird zunehmend begründet',
              'Argumente steigern sich: schwach → mittel → stark',
              'Keine Pro-Contra-Abwägung nötig',
              'Für nicht-kontroverse Fragestellungen',
              'Beispiel: „Warum ist Lesen wichtig für die Persönlichkeit?"',
            ],
            listB: [
              'Zwei Positionen werden gegenübergestellt',
              'Pro- und Contra-Argumente werden abgewogen',
              'Endet mit einer Synthese / Entscheidung',
              'Für echte Kontroversen',
              'Beispiel: „Sollen Smartphones in Schulen verboten sein?"',
            ],
          })}
        </div>
      </section>

      <!-- ══ AUFBAU ══ -->
      <section class="lz-content-section">
        <div class="lz-section-wrap">
          ${renderSubhead('Aufbau')}
          <h2 class="lz-h2 reveal">Aufbau der linearen Erörterung</h2>

          ${renderTable({
            headers: ['Teil', 'Inhalt', 'Hinweis'],
            rows: [
              [
                '<strong>Einleitung / These</strong>',
                'Thema einführen, eigene Position bereits andeuten, Relevanz zeigen',
                'Aufmerksamkeit wecken — Zitat, Frage, Beispiel',
              ],
              [
                '<strong>Argument 1 (schwächstes)</strong>',
                'Erstes Argument mit Beleg/Beispiel',
                'Stimmt den Leser ein, schafft Grundlage',
              ],
              [
                '<strong>Argument 2</strong>',
                'Stärkeres Argument mit Beleg/Beispiel',
                'Steigerung der Überzeugungskraft',
              ],
              [
                '<strong>Argument 3 (stärkstes)</strong>',
                'Das überzeugendste Argument — bleibt am längsten im Gedächtnis',
                'Recency-Effekt nutzen!',
              ],
              [
                '<strong>Persönliche Stellungnahme</strong>',
                'Eigenes Fazit, begründete Haltung, ggf. Kompromiss oder Appell',
                'Klar und pointiert — nicht abschwächen',
              ],
              [
                '<strong>Schlussteil (optional)</strong>',
                'Ausblick, gesellschaftliche Konsequenzen, Appell',
                'Rundet die Erörterung ab',
              ],
            ],
          })}

          ${renderInfobox({
            type:  'tip',
            icon:  'fas fa-arrow-trend-up',
            title: 'Das Steigerungsprinzip',
            body:  'Ordne deine Argumente <strong>vom weniger Wichtigen zum Wichtigsten</strong>. '
                 + 'Der sogenannte <em>Recency-Effekt</em> besagt, dass das zuletzt Gelesene '
                 + 'am stärksten im Gedächtnis bleibt. Dein stärkstes Argument gehört daher ans Ende.',
          })}
        </div>
      </section>

      <!-- ══ BEISPIELTHEMEN ══ -->
      <section class="lz-content-section">
        <div class="lz-section-wrap">
          ${renderSubhead('Beispiele')}
          <h2 class="lz-h2 reveal">Typische Themen der linearen Erörterung</h2>

          ${renderMerkboxGrid([
            {
              icon:  'fas fa-book-reader',
              title: 'Bildung & Schule',
              text:  '„Welche Bedeutung hat das Lesen für die Persönlichkeitsentwicklung?" — „Warum sollten Schüler mehrere Sprachen lernen?"',
            },
            {
              icon:  'fas fa-leaf',
              title: 'Gesellschaft & Umwelt',
              text:  '„Warum sollten wir uns für Umweltschutz engagieren?" — „Aus welchen Gründen ist Toleranz in einer pluralen Gesellschaft wichtig?"',
            },
            {
              icon:  'fas fa-lightbulb',
              title: 'Wissenschaft & Technik',
              text:  '„Welche Chancen bietet die Digitalisierung für die Bildung?" — „Warum muss wissenschaftlicher Fortschritt kritisch begleitet werden?"',
            },
          ])}
        </div>
      </section>

      <!-- ══ SCHREIBTIPPS ══ -->
      <section class="lz-content-section">
        <div class="lz-section-wrap">
          ${renderSubhead('Schreibtipps')}
          <h2 class="lz-h2 reveal">Allgemeine Tipps für jede Erörterung</h2>

          ${renderAccordion([
            {
              title:   '📝 Vor dem Schreiben',
              content: `<ul style="line-height:1.9; margin-left:1.2rem;">
                          <li>Aufgabenstellung genau lesen und markieren</li>
                          <li>Gedankennetz / Mindmap anlegen: alle möglichen Argumente sammeln</li>
                          <li>Argumente nach Stärke ordnen</li>
                          <li>Gliederung erstellen — ca. 10 Min. Planung spart 30 Min. beim Schreiben</li>
                          <li>Wichtige Begriffe klären / definieren</li>
                        </ul>`,
            },
            {
              title:   '✍️ Beim Schreiben',
              content: `<ul style="line-height:1.9; margin-left:1.2rem;">
                          <li><strong>Zeitform:</strong> Präsens für Aussagen, die allgemein gelten</li>
                          <li><strong>Person:</strong> Sachlich — Ich-Form sparsam einsetzen</li>
                          <li><strong>Absätze:</strong> Jedes Argument ein eigener Absatz mit Einleitungssatz</li>
                          <li><strong>Übergänge:</strong> Konnektoren nutzen (denn, daher, jedoch, zudem …)</li>
                          <li><strong>Belege:</strong> Jedes Argument mit konkretem Beispiel stützen</li>
                        </ul>`,
            },
            {
              title:   '🔍 Nach dem Schreiben',
              content: `<ul style="line-height:1.9; margin-left:1.2rem;">
                          <li>Aufgabenstellung noch einmal lesen: Alles beantwortet?</li>
                          <li>Alle Argumente logisch verknüpft?</li>
                          <li>Roter Faden erkennbar?</li>
                          <li>Einleitung führt wirklich zum Thema hin?</li>
                          <li>Schluss rundet die Erörterung ab?</li>
                          <li>Rechtschreibung und Grammatik kontrollieren</li>
                        </ul>`,
            },
          ])}
        </div>
      </section>

      <!-- ══════════════ PAGE NAVIGATION BOTTOM ══════════════ -->
      <section class="lz-content-section" style="padding:1.5rem 0 3rem;">
        <div class="lz-section-wrap">
          ${renderPageNav({
            prev: { label: '3.3 Dialektische Erörterung', link: `${BASE}/themen/eroertern/dialektisch` },
            next: { label: '4.1 Klangfiguren', link: `${BASE}/themen/stilmittel/klangfiguren` },
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