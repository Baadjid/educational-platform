// pages/projekte/lernzettel/faecher/deutsch/themen/gattungen/sachtexte.js
// Deutsch 2.4 — Sachtexte & Textsorten

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

export default class DeutschSachtextePage {
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
            <span>2.4 · Sachtexte & Textsorten</span>
          </nav>
          <h1 class="lz-sub-title">Sachtexte &<br><em>Textsorten.</em></h1>
          <p class="lz-sub-desc">Informierend · Appellativ · Argumentierend · Normierend · Essay · Glosse</p>
          ${renderTags(['Kapitel 2.4', 'Sachtexte', 'Abitur 2026'])}
        </div>
      </section>

      <!-- ══ ÜBERBLICK ══ -->
      <section class="lz-content-section">
        <div class="lz-section-wrap">
          ${renderSubhead('Überblick')}
          <h2 class="lz-h2 reveal">Was sind Sachtexte?</h2>
          <p class="lz-prose reveal">
            <strong>Sachtexte</strong> (pragmatische Texte, Gebrauchstexte) dienen praktischen Zwecken:
            Sie vermitteln Informationen, Meinungen oder Aufforderungen. Im Gegensatz zu literarischen
            Texten steht der ästhetische Wert im Hintergrund — Zweck und Funktion sind entscheidend.
          </p>

          ${renderTable({
            headers: ['Textsortenklasse', 'Ziel', 'Typische Merkmale'],
            rows: [
              ['<strong>Informierend</strong>',          'Wissen vermitteln',                   'Sachlich, objektiv, Präsens, 3. Person'],
              ['<strong>Ausdruckstext</strong>',         'Persönliche Befindlichkeit ausdrücken', 'Subjektiv, 1. Person, emotional'],
              ['<strong>Appellativ</strong>',            'Leser zu Handlung bewegen',            'Persuasiv, Imperativ, rhetorische Mittel'],
              ['<strong>Argumentierend</strong>',        'Überzeugen durch Argumente',           'These, Argument, Beleg, strukturiert'],
              ['<strong>Normierend</strong>',            'Regeln festlegen',                     'Präzise, Fachsprache, Indikativ'],
              ['<strong>Ästhetisch-kreativ</strong>',    'Unterhalten & zum Nachdenken anregen', 'Subjektiv, stilistisch anspruchsvoll'],
            ],
          })}
        </div>
      </section>

      <!-- ══ TEXTSORTEN DETAIL ══ -->
      <section class="lz-content-section">
        <div class="lz-section-wrap">
          ${renderSubhead('Textsorten')}
          <h2 class="lz-h2 reveal">Textsorten im Detail</h2>

          ${renderAccordion([
            {
              title:   '📰 Bericht',
              content: `<ul style="line-height:1.9; margin-left:1.2rem;">
                          <li>Sachliche, chronologische Darstellung von Ereignissen</li>
                          <li>Keine Meinungen, keine Wertungen — nur Fakten</li>
                          <li>Merkmale: W-Fragen (Wer? Was? Wann? Wo? Wie? Warum?)</li>
                          <li>Zeitform: Präteritum oder Präsens</li>
                          <li>Sprache: nüchtern, nominaler Stil</li>
                        </ul>`,
            },
            {
              title:   '💬 Kommentar',
              content: `<ul style="line-height:1.9; margin-left:1.2rem;">
                          <li>Bewertende Stellungnahme zu einem aktuellen Thema</li>
                          <li>Autor nimmt klar Stellung — subjektiv und meinungsstark</li>
                          <li>Merkmale: These → Argumente → Schlussfolgerung</li>
                          <li>Sprache: pointiert, rhetorische Mittel, direkte Ansprache möglich</li>
                        </ul>`,
            },
            {
              title:   '📝 Rezension',
              content: `<ul style="line-height:1.9; margin-left:1.2rem;">
                          <li>Kritische Besprechung eines Werks (Buch, Film, Konzert, Ausstellung)</li>
                          <li>Struktur: Vorstellung → Inhalt → Analyse → Bewertung</li>
                          <li>Verbindet Information und Wertung</li>
                        </ul>`,
            },
            {
              title:   '✍️ Essay',
              content: `<ul style="line-height:1.9; margin-left:1.2rem;">
                          <li>Geistreiche, subjektive Abhandlung über ein Thema</li>
                          <li>Kein systematischer Aufbau — assoziativ, experimentell</li>
                          <li>Autor denkt im Schreiben — Prozesscharakter</li>
                          <li>Sprache: anspruchsvoll, pointiert, persönlich</li>
                          <li>Grenzt sich ab: kein Bericht, keine Erörterung</li>
                        </ul>`,
            },
            {
              title:   '😏 Glosse',
              content: `<ul style="line-height:1.9; margin-left:1.2rem;">
                          <li>Kurze, satirische Stellungnahme zu einem Missstand</li>
                          <li>Mittel: Ironie, Übertreibung, Vergleich, Pointierung</li>
                          <li>Ziel: gesellschaftliche Kritik auf unterhaltsame Weise</li>
                          <li>Ton: humorvoll, spitz, bisweilen provokant</li>
                        </ul>`,
            },
            {
              title:   '📢 Aufruf / Flugblatt',
              content: `<ul style="line-height:1.9; margin-left:1.2rem;">
                          <li>Direkte Aufforderung zu einem bestimmten Handeln</li>
                          <li>Starke Appellfunktion, klare Sprache, Imperative</li>
                          <li>Zielgruppenorientierung entscheidend</li>
                        </ul>`,
            },
          ])}
        </div>
      </section>

      <!-- ══ TEXTANALYSE-KRITERIEN ══ -->
      <section class="lz-content-section">
        <div class="lz-section-wrap">
          ${renderSubhead('Analyse')}
          <h2 class="lz-h2 reveal">Sachtexte analysieren — Kriterien</h2>

          ${renderMerkboxGrid([
            {
              icon:  'fas fa-id-card',
              title: 'Textsorte & Kontext',
              text:  'Art des Textes, Autor, Medium, Erscheinungsdatum, Zielgruppe.',
            },
            {
              icon:  'fas fa-sitemap',
              title: 'Struktur & Aufbau',
              text:  'Gedankengang, Argumentationsstruktur, Absatzgliederung.',
            },
            {
              icon:  'fas fa-paintbrush',
              title: 'Sprache & Stil',
              text:  'Stilmittel, Wortwahl (Konnotationen), Satzbau, Register.',
            },
            {
              icon:  'fas fa-bullhorn',
              title: 'Wirkung & Intention',
              text:  'Was will der Autor beim Leser erreichen? Welche Überzeugungsstrategie wird eingesetzt?',
            },
            {
              icon:  'fas fa-balance-scale',
              title: 'Kritische Bewertung',
              text:  'Wie überzeugend ist die Argumentation? Gibt es Schwächen, Einseitigkeiten, Manipulationsversuche?',
            },
          ])}

          ${renderInfobox({
            type:  'tip',
            icon:  'fas fa-graduation-cap',
            title: 'Abitur-Hinweis: Analyse vs. Erörterung',
            body:  '<strong>Analyse:</strong> Du beschreibst und erklärst, was und wie der Autor schreibt — '
                 + 'du bewertest seinen Text, nicht das Thema selbst.<br><br>'
                 + '<strong>Erörterung:</strong> Du nimmst selbst Stellung zum Thema des Textes '
                 + 'und bringst eigene Argumente.',
          })}
        </div>
      </section>

      <!-- ══════════════ PAGE NAVIGATION BOTTOM ══════════════ -->
      <section class="lz-content-section" style="padding:1.5rem 0 3rem;">
        <div class="lz-section-wrap">
          ${renderPageNav({
            prev: { label: '2.3 Lyrik', link: `${BASE}/themen/gattungen/lyrik` },
            next: { label: '2.5 Reden & Rhetorik', link: `${BASE}/themen/gattungen/reden` },
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