// pages/projekte/lernzettel/faecher/deutsch/themen/kurzgeschichte/merkmale.js
// Deutsch 7.1 — Merkmale der Kurzgeschichte

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
  renderAccordion,
  initInteractive,
} from '../../../../js/components/components.js';
import { renderPageNav } from '../../../../js/components/subnav.js';

import { COLOR, COLOR_RGB, BASE } from '../../deutsch.js';

export default class DeutschMerkmalePage {
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
            <span>7.1 · Merkmale der Kurzgeschichte</span>
          </nav>
          <h1 class="lz-sub-title">Merkmale der<br><em>Kurzgeschichte.</em></h1>
          <p class="lz-sub-desc">In medias res · Offenes Ende · Wendepunkt · Verdichtung · Alltagssituation</p>
          ${renderTags(['Kapitel 7.1', 'Kurzgeschichte', 'Abitur 2026'])}
        </div>
      </section>

      <!-- ══ DEFINITION ══ -->
      <section class="lz-content-section">
        <div class="lz-section-wrap">
          ${renderSubhead('Definition')}
          <h2 class="lz-h2 reveal">Was ist eine Kurzgeschichte?</h2>
          <p class="lz-prose reveal">
            Die <strong>Kurzgeschichte</strong> ist eine epische Kurzform, die sich durch
            <strong>Kürze und Verdichtung</strong> auszeichnet. Sie konzentriert sich auf
            einen einzelnen Moment im Leben gewöhnlicher Menschen und verzichtet auf
            umfangreiche Hintergrundinformationen. Als eigenständige Gattung entstand sie
            im 20. Jahrhundert — beeinflusst von amerikanischen Autoren wie Hemingway.
          </p>
        </div>
      </section>

      <!-- ══ MERKMALE MIT ANALYSE-HINWEIS ══ -->
      <section class="lz-content-section">
        <div class="lz-section-wrap">
          ${renderSubhead('Typische Merkmale')}
          <h2 class="lz-h2 reveal">Die 9 typischen Merkmale — mit Analysemethodik</h2>
          ${renderTable({
            headers: ['Merkmal', 'Erläuterung', 'Analysefrage'],
            rows: [
              ['<strong>In medias res</strong>',      'Unvermittelter Einstieg mitten ins Geschehen — keine Exposition',          'Wie wirkt der abrupte Beginn? Welche Desorientierung erzeugt er?'],
              ['<strong>Kürze</strong>',              'Meist 5–15 Seiten; maximale Verdichtung',                                  'Was lässt der Text bewusst aus? Was sagt die Leerstelle?'],
              ['<strong>Wenige Figuren</strong>',     'Meist 1–3 Personen, keine breite Figurenwelt',                             'Wie unterstreicht die Reduktion Isolation oder Abhängigkeit?'],
              ['<strong>Kurze Zeitspanne</strong>',   'Oft nur Stunden, ein Tag — keine Entwicklung über lange Zeit',             'Was bewirkt die zeitliche Enge? Ausweglosigkeit? Intensität?'],
              ['<strong>Begrenzter Raum</strong>',    'Ein oder zwei Schauplätze — oft symbolisch aufgeladen',                    'Was bedeutet der Raum symbolisch für die Figur?'],
              ['<strong>Alltägliche Situation</strong>','Gewöhnliche Menschen in gewöhnlichen Momenten — das Alltägliche wird unheimlich', 'Wie entlarvt das Banale tiefere Konflikte?'],
              ['<strong>Offenes Ende</strong>',       'Keine eindeutige Auflösung — Leser muss deuten',                          'Was lässt das Ende offen? Hoffnung oder Resignation?'],
              ['<strong>Wendepunkt</strong>',         'Entscheidender Moment, der alles verändert — oft klein und unscheinbar',  'Wo liegt der Wendepunkt? Wie verändert er die Figur?'],
              ['<strong>Nüchterne Sprache</strong>',  'Sachlich, direkt, ohne Ornamentik — Stille betont das Unausgesprochene',  'Wie wirkt die Kargheit der Sprache? Was wird nicht gesagt?'],
            ],
          })}
        </div>
      </section>

      <!-- ══ MERKMALE VERTIEFEN ══ -->
      <section class="lz-content-section">
        <div class="lz-section-wrap">
          ${renderSubhead('Vertiefung')}
          <h2 class="lz-h2 reveal">Merkmale richtig analysieren</h2>
          ${renderAccordion([
            {
              title:   '🚪 In medias res — richtig analysieren',
              content: `<p style="line-height:1.8; margin-bottom:0.8rem;">
                          <strong>Falsch:</strong> „Die Geschichte beginnt unvermittelt."
                        </p>
                        <p style="line-height:1.8;">
                          <strong>Richtig:</strong> „Der unvermittelte Einstieg '‚Du kannst nichts', sagten sie' (Z. 1) 
                          wirft den Leser ohne jede Orientierung mitten ins Geschehen. Die fehlende Exposition erzeugt 
                          Verwirrung und Unsicherheit, die die Desorientierung der Hauptfigur spiegelt. Erst 
                          nach und nach wird klar, wer spricht — diese allmähliche Entschlüsselung zwingt den 
                          Leser, die Perspektive der überwältigten Figur einzunehmen."
                        </p>`,
            },
            {
              title:   '🔚 Offenes Ende — richtig analysieren',
              content: `<p style="line-height:1.8; margin-bottom:0.8rem;">
                          <strong>Falsch:</strong> „Die Geschichte hat ein offenes Ende."
                        </p>
                        <p style="line-height:1.8;">
                          <strong>Richtig:</strong> „Das offene Ende '‚Vielleicht morgen' (Z. 87) lässt 
                          bewusst ungelöst, ob die Protagonistin den Mut finden wird. Die Unabgeschlossenheit 
                          überlässt dem Leser die Deutung: Ist dies ein Hoffnungsschimmer oder erneutes 
                          Aufschieben? Das Ende verweigert die für viele Texte typische Katharsis und lässt 
                          den Leser mit derselben Unsicherheit zurück, die auch die Figur empfindet."
                        </p>`,
            },
            {
              title:   '↩️ Wendepunkt — richtig analysieren',
              content: `<p style="line-height:1.8; margin-bottom:0.8rem;">
                          <strong>Falsch:</strong> „Es gibt einen Wendepunkt in der Geschichte."
                        </p>
                        <p style="line-height:1.8;">
                          <strong>Richtig:</strong> „Der Wendepunkt liegt im Moment, als die Frau ihrem Mann 
                          das Brot zuschiebt (Z. 56–58). Diese scheinbar kleine Geste markiert eine fundamentale 
                          Entscheidung: Sie entscheidet sich, seine Lüge nicht aufzudecken. Aus der Täuschung 
                          wird ein gemeinsames Geheimnis — aus dem Diebstahl ein Akt der Barmherzigkeit. Die 
                          innere Entwicklung der Frau vollzieht sich in dieser einen, stillen Szene."
                        </p>`,
            },
          ])}
          ${renderInfobox({
            type:  'tip',
            icon:  'fas fa-graduation-cap',
            title: 'Formel für gute Merkmals-Analyse',
            body:  `<ol style="line-height:1.9; margin-left:1.2rem;">
                      <li><strong>Merkmal benennen</strong> (z.B. „unvermittelter Anfang")</li>
                      <li><strong>Im Text zeigen</strong> — konkretes Zitat mit Zeilenangabe</li>
                      <li><strong>Wirkung beschreiben</strong> — Verwirrung? Enge? Spannung?</li>
                      <li><strong>Funktion erklären</strong> — warum ist dieses Merkmal hier wichtig?</li>
                      <li><strong>Bezug zur Gesamtaussage</strong> — wie unterstützt es das Thema?</li>
                    </ol>`,
          })}
        </div>
      </section>

      <!-- ══ ABGRENZUNG ══ -->
      <section class="lz-content-section">
        <div class="lz-section-wrap">
          ${renderSubhead('Abgrenzung')}
          <h2 class="lz-h2 reveal">Kurzgeschichte vs. andere Kurzformen</h2>
          ${renderTable({
            headers: ['Form', 'Länge', 'Merkmale', 'Unterschied zur Kurzgeschichte'],
            rows: [
              ['<strong>Anekdote</strong>',   'Sehr kurz',     'Pointierte Einzelbegebenheit, meist komisch oder lehrreich', 'Hat immer eine klare Pointe; kein offenes Ende'],
              ['<strong>Novelle</strong>',    'Mittel',        'Unerhörte Begebenheit, straffe Handlung, oft Dingsymbol',    'Klares Ende, dramatischer Aufbau, oft historischer Stoff'],
              ['<strong>Parabel</strong>',    'Kurz–mittel',   'Gleichnishafte Handlung mit übertragener Bedeutung',         'Hat immer eine moralische / didaktische Botschaft'],
              ['<strong>Kurzgeschichte</strong>', 'Kurz',      'Offenes Ende, Alltag, Verdichtung, keine Lösung',            '—'],
            ],
          })}
        </div>
      </section>

      <!-- ══════════════ PAGE NAVIGATION BOTTOM ══════════════ -->
      <section class="lz-content-section" style="padding:1.5rem 0 3rem;">
        <div class="lz-section-wrap">
          ${renderPageNav({
            prev: { label: '6.4 Performative Verben — Deklarative & Bewertende', link: `${BASE}/themen/akademisch/deklarative` },
            next: { label: '7.2 Einleitung & Inhaltsangabe', link: `${BASE}/themen/kurzgeschichte/einleitung` },
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