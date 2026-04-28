// pages/projekte/lernzettel/faecher/deutsch/themen/stilmittel/analyse-methodik.js
// Deutsch 4.5 — Analyse-Methodik & Formulierungshilfen

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

export default class DeutschAnalyseMethodikPage {
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
            <span>4.5 · Analyse-Methodik</span>
          </nav>
          <h1 class="lz-sub-title">Analyse-Methodik &<br><em>Formulierungshilfen.</em></h1>
          <p class="lz-sub-desc">7-Schritte-Methode · Vorher / Nachher · Formulierungen · Checkliste</p>
          ${renderTags(['Kapitel 4.5', 'Methodik', 'Abitur 2026'])}
        </div>
      </section>

      <!-- ══ 7 SCHRITTE ══ -->
      <section class="lz-content-section">
        <div class="lz-section-wrap">
          ${renderSubhead('Methode')}
          <h2 class="lz-h2 reveal">Die 7-Schritte-Methode</h2>

          ${renderTable({
            headers: ['Schritt', 'Was tust du?'],
            rows: [
              ['<strong>1. Mehrmals lesen</strong>',        'Erst Überblick, dann beim zweiten Lesen auffällige Stellen markieren'],
              ['<strong>2. Mittel identifizieren</strong>', 'Systematisch alle sprachlichen Mittel markieren (Farben helfen)'],
              ['<strong>3. Kontext beachten</strong>',      'Wo im Text steht das Mittel? Was kommt davor / danach?'],
              ['<strong>4. Wirkung analysieren</strong>',   'Welche Emotion / Assoziation entsteht? Was bewirkt es beim Leser?'],
              ['<strong>5. Intention erschließen</strong>', 'Warum wählt der Autor genau dieses Mittel? Was will er erreichen?'],
              ['<strong>6. Textbezug herstellen</strong>',  'Wie unterstützt das Mittel die Gesamtaussage des Textes?'],
              ['<strong>7. Analyse formulieren</strong>',   'Mittel benennen → Zitat + Zeile → Wirkung → Intention → Bezug'],
            ],
          })}

          ${renderInfobox({
            type:  'tip',
            icon:  'fas fa-graduation-cap',
            title: 'Qualität vor Quantität',
            body:  'Besser <strong>3 sprachliche Mittel ausführlich und funktional</strong> analysieren, '
                 + 'als 15 nur aufzählen. Die Tiefe der Interpretation entscheidet über die Note — '
                 + 'nicht die Anzahl der benannten Mittel.',
          })}
        </div>
      </section>

      <!-- ══ VORHER / NACHHER ══ -->
      <section class="lz-content-section">
        <div class="lz-section-wrap">
          ${renderSubhead('Vorher / Nachher')}
          <h2 class="lz-h2 reveal">Richtig analysieren — Vergleich</h2>

          ${renderTable({
            headers: ['❌ Bloße Beschreibung (keine Punkte)', '✅ Vollständige Analyse (volle Punkte)'],
            rows: [
              [
                '„Der Autor verwendet eine Metapher."',
                '„Die Metapher ‚Fels in der Brandung` (Z. 5) verdeutlicht die Standhaftigkeit der Mutter. Das Bild des Felsens evoziert Unerschütterlichkeit — die ‚Brandung´ steht für permanente Belastungen. Damit unterstreicht der Autor ihre Stärke in Krisenzeiten."',
              ],
              [
                '„Es ist ein Ich-Erzähler."',
                '„Der Ich-Erzähler berichtet aus zeitlicher Distanz (vgl. Z. 1), was eine reflektierte Perspektive ermöglicht. Die erlebte Rede (Z. 23) durchbricht diese Distanz und schafft unmittelbaren Zugang zu damaligen Gefühlen."',
              ],
              [
                '„Die Sätze sind kurz."',
                '„Die parataktische Reihung kurzer Hauptsätze ‚Aufwachen. Bitte nicht. Noch nicht.´ (Z. 1–2) erzeugt einen abgehackten Rhythmus, der die Erschöpfung der Figur körperlich spürbar macht."',
              ],
              [
                '„Es gibt Wiederholungen."',
                '„Die anaphorische Wiederholung ‚Nichts. Nichts. Nichts.´ (Z. 2) hämmert die Wertlosigkeit ein und symbolisiert die vollständige Reduktion der Figur — der einprägsamste Satz des Textes."',
              ],
            ],
          })}
        </div>
      </section>

      <!-- ══ FORMULIERUNGSHILFEN ══ -->
      <section class="lz-content-section">
        <div class="lz-section-wrap">
          ${renderSubhead('Formulierungen')}
          <h2 class="lz-h2 reveal">Formulierungshilfen für die Analyse</h2>

          ${renderAccordion([
            {
              title:   '🏷️ Mittel benennen',
              content: `<ul style="line-height:1.9; margin-left:1.2rem;">
                          <li>„Der Autor/die Autorin verwendet …"</li>
                          <li>„Auffällig ist der Einsatz von …"</li>
                          <li>„Durch die Verwendung von … wird …"</li>
                          <li>„Besonders deutlich zeigt sich … in …"</li>
                          <li>„Im Text findet sich …"</li>
                        </ul>`,
            },
            {
              title:   '📖 Textstelle zitieren',
              content: `<ul style="line-height:1.9; margin-left:1.2rem;">
                          <li>„Dies zeigt sich in der Formulierung: ‚…' (Z. X)"</li>
                          <li>„Wie in Zeile X deutlich wird: ‚…'"</li>
                          <li>„Beispielhaft heißt es: ‚…'"</li>
                          <li>„Der Ausdruck ‚…' (Z. X) verdeutlicht …"</li>
                        </ul>`,
            },
            {
              title:   '🎯 Wirkung beschreiben',
              content: `<ul style="line-height:1.9; margin-left:1.2rem;">
                          <li>„Dies bewirkt beim Leser …"</li>
                          <li>„Dadurch entsteht der Eindruck …"</li>
                          <li>„Dies verleiht der Aussage …"</li>
                          <li>„Hierdurch wird … verstärkt / abgeschwächt"</li>
                          <li>„Der Effekt ist …"</li>
                        </ul>`,
            },
            {
              title:   '💡 Intention erschließen',
              content: `<ul style="line-height:1.9; margin-left:1.2rem;">
                          <li>„Der Autor beabsichtigt damit …"</li>
                          <li>„Damit will der Autor erreichen, dass …"</li>
                          <li>„Dies dient dazu, den Leser zu …"</li>
                          <li>„Ziel dieser Formulierung ist …"</li>
                          <li>„Die Intention ist offensichtlich …"</li>
                        </ul>`,
            },
            {
              title:   '🔗 Textbezug & Verknüpfung',
              content: `<ul style="line-height:1.9; margin-left:1.2rem;">
                          <li>„In Verbindung mit … wird deutlich …"</li>
                          <li>„Dies korrespondiert mit …"</li>
                          <li>„Die Metapher unterstützt somit die zentrale These …"</li>
                          <li>„Parallel dazu findet sich …"</li>
                          <li>„Dies fügt sich ein in die Gesamtaussage des Textes, dass …"</li>
                        </ul>`,
            },
            {
              title:   '⭐ Wertung vornehmen',
              content: `<ul style="line-height:1.9; margin-left:1.2rem;">
                          <li>„Besonders wirkungsvoll ist …"</li>
                          <li>„Überzeugend wirkt …, weil …"</li>
                          <li>„Problematisch erscheint …"</li>
                          <li>„Gelungen ist …"</li>
                          <li>„Kritisch zu betrachten ist …"</li>
                        </ul>`,
            },
          ])}
        </div>
      </section>

      <!-- ══ CHECKLISTE ══ -->
      <section class="lz-content-section">
        <div class="lz-section-wrap">
          ${renderSubhead('Checkliste')}
          <h2 class="lz-h2 reveal">Checkliste vor der Abgabe</h2>

          ${renderMerkboxGrid([
            {
              icon:  'fas fa-check',
              title: 'Mittel korrekt benannt?',
              text:  'Fachbegriff korrekt und präzise — kein allgemeines „Stilmittel".',
            },
            {
              icon:  'fas fa-check',
              title: 'Textstelle zitiert?',
              text:  'Jede Beobachtung mit wörtlichem Zitat + Zeilenangabe belegt.',
            },
            {
              icon:  'fas fa-check',
              title: 'Wirkung erklärt?',
              text:  'Nicht nur was, sondern wie es wirkt und warum.',
            },
            {
              icon:  'fas fa-check',
              title: 'Intention erschlossen?',
              text:  'Was will der Autor beim Leser bewirken?',
            },
            {
              icon:  'fas fa-check',
              title: 'Bezug zur Aussage?',
              text:  'Jede Analyse ist mit der Gesamtaussage des Textes verbunden.',
            },
            {
              icon:  'fas fa-check',
              title: 'Qualität statt Quantität?',
              text:  '3 Mittel ausführlich > 15 Mittel nur aufgezählt.',
            },
          ])}
        </div>
      </section>

      <!-- ══════════════ PAGE NAVIGATION BOTTOM ══════════════ -->
      <section class="lz-content-section" style="padding:1.5rem 0 3rem;">
        <div class="lz-section-wrap">
          ${renderPageNav({
            prev: { label: '4.4 Ironie & weitere Mittel', link: `${BASE}/themen/stilmittel/ironie` },
            next: { label: '5.1 Mittelalter & frühe Neuzeit', link: `${BASE}/themen/epochen/mittelalter` },
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