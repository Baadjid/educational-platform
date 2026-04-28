// pages/projekte/lernzettel/faecher/deutsch/themen/gattungen/epik.js
// Deutsch 2.1 — Epik: Erzählende Texte

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


export default class DeutschEpikPage {
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
            <span>2.1 · Epik</span>
          </nav>
          <h1 class="lz-sub-title">Epik —<br><em>Erzählende Texte.</em></h1>
          <p class="lz-sub-desc">Erzähler · Perspektiven · Zeit · Raum · Figurenanalyse</p>
          ${renderTags(['Kapitel 2.1', 'Epik', 'Abitur 2026'])}
        </div>
      </section>

      <!-- ══ ERZÄHLER ══ -->
      <section class="lz-content-section">
        <div class="lz-section-wrap">
          ${renderSubhead('Grundlagen')}
          <h2 class="lz-h2 reveal">Der Erzähler</h2>
          <p class="lz-prose reveal">
            Der <strong>Erzähler</strong> ist eine fiktive Vermittlerinstanz — nicht zu
            verwechseln mit dem Autor. Er steuert, was wir wissen, und wie wir es wahrnehmen.
          </p>

          ${renderTable({
            headers: ['Erzählform', 'Merkmale', 'Wirkung'],
            rows: [
              [
                '<strong>Auktorialer Erzähler</strong>',
                'Allwissend, kennt alle Gedanken & Zukunft, kommentiert, wendet sich an Leser',
                'Distanz, Überblick, Orientierungshilfe',
              ],
              [
                '<strong>Personaler Erzähler</strong>',
                'Sieht Welt durch Augen einer Figur, keine Kommentare, erlebte Rede häufig',
                'Nähe, Identifikation, subjektive Weltsicht',
              ],
              [
                '<strong>Neutraler Erzähler</strong>',
                'Nur äußerlich Wahrnehmbares, keine Innensicht, keine Wertung',
                'Distanz, Objektivität, Leser interpretiert selbst',
              ],
              [
                '<strong>Ich-Erzähler</strong>',
                'Teil der Handlung, subjektiv, begrenzte Perspektive',
                'Authentizität, Unmittelbarkeit',
              ],
            ],
          })}

          ${renderAccordion([
            {
              title:   '📖 Besondere Erzähltechniken',
              content: `<ul style="line-height:1.9; margin-left:1.2rem;">
                          <li><strong>Erlebte Rede:</strong> Gedanken der Figur ohne Anführungszeichen — fließender Übergang zwischen Erzähler und Figur (<em>„Musste das wirklich sein?"</em>)</li>
                          <li><strong>Innerer Monolog:</strong> Ungefilterte Gedanken der Figur, fragmentiert, assoziativ</li>
                          <li><strong>Bewusstseinsstrom (stream of consciousness):</strong> Radikale Form des inneren Monologs ohne chronologische Struktur</li>
                          <li><strong>Beiseite:</strong> Figur spricht zum Publikum, andere Figuren hören es nicht (Drama, aber auch Erzählung)</li>
                        </ul>`,
            },
          ])}
        </div>
      </section>

      <!-- ══ ERZÄHLPERSPEKTIVE ══ -->
      <section class="lz-content-section">
        <div class="lz-section-wrap">
          ${renderSubhead('Standpunkt')}
          <h2 class="lz-h2 reveal">Erzählperspektive & Erzählstandpunkt</h2>

          ${renderMerkboxGrid([
            {
              icon:  'fas fa-eye',
              title: 'Außenperspektive',
              text:  'Der Erzähler sieht von außen auf die Figuren — keine Innensicht (neutraler Erzähler).',
            },
            {
              icon:  'fas fa-brain',
              title: 'Innenperspektive',
              text:  'Der Erzähler hat Zugang zu den Gedanken und Gefühlen einer oder mehrerer Figuren.',
            },
            {
              icon:  'fas fa-binoculars',
              title: 'Nullfokalisierung',
              text:  'Auktorialer Erzähler — weiß mehr als alle Figuren zusammen.',
            },
            {
              icon:  'fas fa-user',
              title: 'Interne Fokalisierung',
              text:  'Personaler Erzähler — weiß so viel wie eine bestimmte Figur.',
            },
            {
              icon:  'fas fa-minus',
              title: 'Externe Fokalisierung',
              text:  'Neutraler Erzähler — weiß weniger als die Figuren.',
            },
          ])}
        </div>
      </section>

      <!-- ══ ZEIT ══ -->
      <section class="lz-content-section">
        <div class="lz-section-wrap">
          ${renderSubhead('Zeitgestaltung')}
          <h2 class="lz-h2 reveal">Erzählzeit & erzählte Zeit</h2>

          ${renderTable({
            headers: ['Begriff', 'Verhältnis', 'Wirkung', 'Beispiel'],
            rows: [
              ['<strong>Zeitdeckung</strong>',  'Erzählzeit = erzählte Zeit', 'Unmittelbarkeit, Spannung', 'Dialog, dramatische Szene'],
              ['<strong>Zeitdehnung</strong>',  'Erzählzeit > erzählte Zeit', 'Betonung, Verlangsamung, Intensität', 'Detaillierte Innensicht eines Moments'],
              ['<strong>Zeitraffung</strong>',  'Erzählzeit < erzählte Zeit', 'Tempo, Überblick', '„Drei Jahre vergingen…"'],
              ['<strong>Ellipse</strong>',       'Auslassung von Zeit',        'Spannung durch Leerstelle', '„Als er erwachte, war alles anders."'],
              ['<strong>Analepse</strong>',      'Sprung in die Vergangenheit', 'Hintergrundinformation, Erklärung', 'Rückblende / Flashback'],
              ['<strong>Prolepse</strong>',      'Verweis auf die Zukunft',    'Spannung, Vorausdeutung', 'Foreshadowing'],
            ],
          })}
        </div>
      </section>

      <!-- ══ FIGUREN ══ -->
      <section class="lz-content-section">
        <div class="lz-section-wrap">
          ${renderSubhead('Figurenanalyse')}
          <h2 class="lz-h2 reveal">Figuren & Figurenkonstellation</h2>

          ${renderTable({
            headers: ['Figurentyp', 'Merkmale'],
            rows: [
              ['<strong>Protagonist</strong>',      'Hauptfigur, Träger der Handlung'],
              ['<strong>Antagonist</strong>',       'Gegenspieler des Protagonisten'],
              ['<strong>Statische Figur</strong>',  'Verändert sich nicht, bleibt gleich'],
              ['<strong>Dynamische Figur</strong>', 'Durchläuft eine Entwicklung / Wandlung'],
              ['<strong>Kontrastfigur</strong>',    'Hebt bestimmte Eigenschaften des Protagonisten hervor'],
              ['<strong>Typen</strong>',            'Figuren ohne individuelle Tiefe, repräsentieren Klassen/Rollen'],
            ],
          })}

          ${renderAccordion([
            {
              title:   '🔍 Direkte vs. indirekte Charakterisierung',
              content: `<ul style="line-height:1.9; margin-left:1.2rem;">
                          <li><strong>Direkt:</strong> Erzähler oder andere Figuren beschreiben die Figur ausdrücklich</li>
                          <li><strong>Indirekt:</strong> Erschlossen aus Handlungen, Sprache, Aussehen, Reaktionen anderer</li>
                        </ul>`,
            },
            {
              title:   '🗺️ Figurenkonstellation analysieren',
              content: `<ul style="line-height:1.9; margin-left:1.2rem;">
                          <li>Wer steht gegen wen? (Konflikte)</li>
                          <li>Wer hat Macht über wen? (Hierarchien)</li>
                          <li>Für wen soll der Leser Partei ergreifen? (Sympathiesteuerung)</li>
                          <li>Welche Figuren kontrastieren sich gegenseitig?</li>
                        </ul>`,
            },
          ])}
        </div>
      </section>

      <!-- ══ RAUM ══ -->
      <section class="lz-content-section">
        <div class="lz-section-wrap">
          ${renderSubhead('Raumgestaltung')}
          <h2 class="lz-h2 reveal">Raum & seine Funktion</h2>

          ${renderMerkboxGrid([
            {
              icon:  'fas fa-map',
              title: 'Handlungsraum',
              text:  'Ort, an dem die Handlung stattfindet — sachliche Verortung.',
            },
            {
              icon:  'fas fa-cloud',
              title: 'Stimmungsraum',
              text:  'Der Raum erzeugt Atmosphäre: düster, eng, befreiend, bedrohlich.',
            },
            {
              icon:  'fas fa-dove',
              title: 'Symbolraum',
              text:  'Der Raum trägt symbolische Bedeutung. Beispiel: Wald = Unbekanntes / Gefahr; Meer = Freiheit / Grenzenlosigkeit.',
            },
            {
              icon:  'fas fa-arrows-left-right',
              title: 'Kontrastraum',
              text:  'Gegensätzliche Räume verstärken Themen: Stadt vs. Land, Innen vs. Außen, Hell vs. Dunkel.',
            },
          ])}
        </div>
      </section>

      <!-- ══════════════ PAGE NAVIGATION BOTTOM ══════════════ -->
      <section class="lz-content-section" style="padding:1.5rem 0 3rem;">
        <div class="lz-section-wrap">
          ${renderPageNav({
            prev: { label: '1.4 Sprachgeschichte & Sprachwandel', link: `${BASE}/themen/sprache/sprachwandel` },
            next: { label: '2.2 Dramatik', link: `${BASE}/themen/gattungen/dramatik` },
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