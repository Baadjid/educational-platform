// pages/projekte/lernzettel/faecher/deutsch/themen/gattungen/reden.js
// Deutsch 2.5 — Reden & Rhetorik

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


export default class DeutschRedenPage {
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
            <span>2.5 · Reden & Rhetorik</span>
          </nav>
          <h1 class="lz-sub-title">Reden &<br><em>Rhetorik.</em></h1>
          <p class="lz-sub-desc">Ethos · Pathos · Logos · Redearten · Rhetorik-Mittel · Redestruktur</p>
          ${renderTags(['Kapitel 2.5', 'Rhetorik', 'Abitur 2026'])}
        </div>
      </section>

      <!-- ══ ARISTOTELES ══ -->
      <section class="lz-content-section">
        <div class="lz-section-wrap">
          ${renderSubhead('Aristoteles')}
          <h2 class="lz-h2 reveal">Die drei Säulen der Überzeugung</h2>
          <p class="lz-prose reveal">
            Nach Aristoteles' <em>Rhetorik</em> beruht jede wirksame Überzeugung auf drei
            Grundpfeilern, die ein Redner gleichzeitig bedienen muss:
          </p>

          ${renderMerkboxGrid([
            {
              icon:  'fas fa-user-check',
              title: 'Ethos — Glaubwürdigkeit',
              text:  'Der Redner muss vertrauenswürdig und kompetent wirken. Charakterdarstellung, Expertise betonen, Sympathie gewinnen.',
            },
            {
              icon:  'fas fa-heart',
              title: 'Pathos — Emotion',
              text:  'Die Gefühle des Publikums ansprechen. Bildsprache, persönliche Geschichten, Identifikation ermöglichen.',
            },
            {
              icon:  'fas fa-brain',
              title: 'Logos — Vernunft',
              text:  'Überzeugen durch Argumente und Logik. Fakten, Statistiken, Kausalität, Syllogismen.',
            },
          ])}

          ${renderInfobox({
            type:  'tip',
            icon:  'fas fa-graduation-cap',
            title: 'In der Redeanalyse',
            body:  'Analysiere immer, welcher der drei Pfeiler in einem bestimmten Redeabschnitt dominiert '
                 + 'und warum der Redner an dieser Stelle diese Strategie wählt. '
                 + 'Wirksame Reden verbinden alle drei — keine allein reicht aus.',
          })}
        </div>
      </section>

      <!-- ══ REDESTRUKTUR ══ -->
      <section class="lz-content-section">
        <div class="lz-section-wrap">
          ${renderSubhead('Aufbau')}
          <h2 class="lz-h2 reveal">Klassischer Redeaufbau</h2>

          ${renderTable({
            headers: ['Teil', 'Lateinisch', 'Funktion'],
            rows: [
              ['<strong>Einleitung</strong>',      'Exordium',       'Aufmerksamkeit wecken, Vertrauen aufbauen, Thema einführen'],
              ['<strong>Sachverhalt</strong>',      'Narratio',       'Hintergrund und Kontext darstellen, Situation schildern'],
              ['<strong>Beweisführung</strong>',    'Argumentatio',   'Eigene Argumente, Beweise, Belege; Gegenargumente entkräften'],
              ['<strong>Schluss</strong>',          'Peroratio',      'Zusammenfassung, emotionaler Höhepunkt, Appell an die Zuhörer'],
            ],
          })}
        </div>
      </section>

      <!-- ══ REDEARTEN ══ -->
      <section class="lz-content-section">
        <div class="lz-section-wrap">
          ${renderSubhead('Typen')}
          <h2 class="lz-h2 reveal">Redearten im Überblick</h2>

          ${renderAccordion([
            {
              title:   '🎉 Festrede / Feierrede',
              content: `<ul style="line-height:1.9; margin-left:1.2rem;">
                          <li>Zu besonderen Anlässen: Jubiläen, Geburtstage, Eröffnungen</li>
                          <li>Ziel: Würdigung, Dank, Gemeinschaft stärken</li>
                          <li>Ton: feierlich, persönlich, oft emotional</li>
                          <li>Mittel: Anekdoten, Lob, Ausblick auf Zukunft</li>
                        </ul>`,
            },
            {
              title:   '⚖️ Gerichtsrede',
              content: `<ul style="line-height:1.9; margin-left:1.2rem;">
                          <li>Verteidigung (Plädoyer) oder Anklage vor Gericht</li>
                          <li>Ziel: Richter und Geschworene überzeugen</li>
                          <li>Strenge Regeln: Beweise, Fakten, Sachlichkeit — aber auch Pathos</li>
                          <li>Historisches Vorbild: Cicero „In Verrem"</li>
                        </ul>`,
            },
            {
              title:   '🗳️ Politische Rede',
              content: `<ul style="line-height:1.9; margin-left:1.2rem;">
                          <li>Ziel: Mobilisierung, Meinungsbildung, Legitimierung von Macht</li>
                          <li>Stark appellativer Charakter</li>
                          <li>Wirkungsmittel: Wir-Gefühl, Feindbildkonstruktion, Wiederholung, Schlüsselwörter</li>
                          <li>Wichtig in der Analyse: Machtsprache, Frames, Propaganda-Techniken erkennen</li>
                        </ul>`,
            },
            {
              title:   '🎓 Akademische / wissenschaftliche Rede',
              content: `<ul style="line-height:1.9; margin-left:1.2rem;">
                          <li>Vorträge, Antrittsreden, wissenschaftliche Präsentationen</li>
                          <li>Logos dominiert: Fakten, Belege, strukturierte Argumentation</li>
                          <li>Fachsprache und Zitate</li>
                        </ul>`,
            },
          ])}
        </div>
      </section>

      <!-- ══ RHETORISCHE MITTEL ══ -->
      <section class="lz-content-section">
        <div class="lz-section-wrap">
          ${renderSubhead('Stilmittel der Rede')}
          <h2 class="lz-h2 reveal">Rhetorische Mittel in Reden</h2>

          ${renderTable({
            headers: ['Mittel', 'Definition', 'Wirkung in der Rede'],
            rows: [
              ['<strong>Anapher</strong>',          'Wiederholung am Satzanfang',             'Eindringlich, Steigerung, einprägend — klassisches Mittel politischer Reden'],
              ['<strong>Rhetorische Frage</strong>', 'Frage ohne erwartete Antwort',           'Aktiviert Publikum, suggeriert Zustimmung, bindet ein'],
              ['<strong>Klimax</strong>',            'Dreistufige Steigerung',                 'Dramatisierung, Spannungsaufbau, bleibt im Gedächtnis'],
              ['<strong>Antithese</strong>',         'Gegenüberstellung von Gegensätzen',      'Verdeutlicht Kontraste, macht Position klar, pointiert'],
              ['<strong>Trikolon</strong>',          'Dreiergruppe gleichartiger Elemente',    'Rhythmus, Vollständigkeit, einprägsam (veni, vidi, vici)'],
              ['<strong>Parallelismus</strong>',     'Gleiche Satzstruktur in Folge',          'Rhythmus, Ordnung, Verlässlichkeit des Redners signalisieren'],
              ['<strong>Apostrophe</strong>',        'Direkte Anrede (auch abwesender)',       'Nähe zum Publikum, Pathos, Einbeziehung'],
              ['<strong>Ironie / Sarkasmus</strong>','Gesagtes = Gegenteil des Gemeinten',    'Distanzierung, Kritik, kann Gegner lächerlich machen'],
            ],
          })}

          ${renderInfobox({
            type:  '',
            icon:  'fas fa-quote-left',
            title: 'Bekannte Reden für die Analyse',
            body:  `<ul style="line-height:1.9; margin-left:1.2rem;">
                      <li>Martin Luther King: „I Have a Dream" (1963) — Anapher, Pathos, Bibelbezüge</li>
                      <li>Winston Churchill: „We shall fight on the beaches" (1940) — Klimax, Anapher</li>
                      <li>J.F. Kennedy: „Ich bin ein Berliner" (1963) — Identifikation, Pathos, Antithese</li>
                      <li>Rosa Parks / Angela Davis — Widerstandsrhetorik</li>
                    </ul>`,
          })}
        </div>
      </section>

      <!-- ══ ANALYSE ══ -->
      <section class="lz-content-section">
        <div class="lz-section-wrap">
          ${renderSubhead('Methodik')}
          <h2 class="lz-h2 reveal">Rede analysieren — Schritt für Schritt</h2>

          ${renderMerkboxGrid([
            {
              icon:  'fas fa-search',
              title: '1. Redesituation erfassen',
              text:  'Redner, Anlass, Datum, Publikum, Medium (live / Rundfunk / Zeitung).',
            },
            {
              icon:  'fas fa-sitemap',
              title: '2. Struktur analysieren',
              text:  'Aufbau nach klassischem Schema? Wie ist die Argumentation aufgebaut?',
            },
            {
              icon:  'fas fa-paintbrush',
              title: '3. Rhetorik benennen & deuten',
              text:  'Welche Mittel? Welcher Überzeugungspfeiler (Ethos/Pathos/Logos) wird bedient?',
            },
            {
              icon:  'fas fa-bullseye',
              title: '4. Intention erschließen',
              text:  'Was will der Redner beim Publikum erreichen? Welche Wirkung ist beabsichtigt?',
            },
            {
              icon:  'fas fa-balance-scale',
              title: '5. Kritisch bewerten',
              text:  'Ist die Rede überzeugend? Gibt es Manipulationsversuche, Vereinfachungen, Lücken?',
            },
          ])}
        </div>
      </section>

      <!-- ══════════════ PAGE NAVIGATION BOTTOM ══════════════ -->
      <section class="lz-content-section" style="padding:1.5rem 0 3rem;">
        <div class="lz-section-wrap">
          ${renderPageNav({
            prev: { label: '2.4 Sachtexte', link: `${BASE}/themen/gattungen/sachtexte` },
            next: { label: '2.6 Analyse & Interpretation', link: `${BASE}/themen/gattungen/analyse` },
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