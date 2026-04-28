// pages/projekte/lernzettel/faecher/deutsch/themen/sprache/sprachwandel.js
// Deutsch 1.4 — Sprachgeschichte & Sprachwandel

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
  renderVTimeline,
  initInteractive,
} from '../../../../js/components/components.js';
import { renderPageNav } from '../../../../js/components/subnav.js';

import { COLOR, COLOR_RGB, BASE } from '../../deutsch.js';

export default class DeutschSprachwandelPage {
  constructor(router) {
    this.router = router;
  }

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
      <!-- ══════════════ SUB-HERO ══════════════ -->
      <section class="lz-sub-hero">
        <div class="lz-sub-hero-orb" aria-hidden="true"></div>
        <div class="lz-sub-hero-inner">

          <nav class="lz-sub-breadcrumb">
            <button class="lz-bread-link" data-nav-link="/projekte/lernzettel">Lernzettel</button>
            <i class="fas fa-chevron-right"></i>
            <button class="lz-bread-link" data-nav-link="${BASE}">Deutsch</button>
            <i class="fas fa-chevron-right"></i>
            <span>1.4 · Sprachgeschichte & Sprachwandel</span>
          </nav>

          <h1 class="lz-sub-title">
            Sprachgeschichte &<br>
            <em>Sprachwandel.</em>
          </h1>

          <p class="lz-sub-desc">
            Althochdeutsch · Mittelhochdeutsch · Frühneuhochdeutsch ·
            Neuhochdeutsch · Tendenzen der Gegenwart
          </p>

          ${renderTags(['Kapitel 1.4', 'Sprachgeschichte', 'Abitur 2026'])}
        </div>
      </section>

      <!-- ══════════════ EINFÜHRUNG ══════════════ -->
      <section class="lz-content-section">
        <div class="lz-section-wrap">

          ${renderSubhead('Grundprinzip')}
          <h2 class="lz-h2 reveal">Was ist Sprachwandel?</h2>

          <p class="lz-prose reveal">
            Sprache ist kein statisches System — sie verändert sich ständig auf allen Ebenen:
            Laute, Wortschatz, Grammatik, Bedeutungen. <strong>Sprachwandel ist ein natürlicher
            Prozess</strong>, der immer stattgefunden hat und nicht aufzuhalten ist.
          </p>

          ${renderMerkboxGrid([
            {
              icon:  'fas fa-volume-high',
              title: 'Lautwandel',
              text:  'Aussprache verändert sich über Generationen (z.B. Zweite Lautverschiebung: „maken" → „machen").',
            },
            {
              icon:  'fas fa-book-open',
              title: 'Bedeutungswandel',
              text:  'Wörter erweitern, verengen oder verschieben ihre Bedeutung (z.B. „geil" früher negativ, heute positiv).',
            },
            {
              icon:  'fas fa-plus',
              title: 'Entlehnung',
              text:  'Übernahme von Wörtern aus anderen Sprachen (Latein, Französisch, heute Englisch).',
            },
            {
              icon:  'fas fa-scissors',
              title: 'Grammatikwandel',
              text:  'Kasusabbau (Genitiv schwindet), Vereinfachung von Flexionsendungen.',
            },
          ])}

        </div>
      </section>

      <!-- ══════════════ ZEITLEISTE ══════════════ -->
      <section class="lz-content-section">
        <div class="lz-section-wrap">

          ${renderSubhead('Epochen')}
          <h2 class="lz-h2 reveal">Geschichte der deutschen Sprache</h2>

          ${renderVTimeline([
            {
              year:  'ca. 750 – 1050',
              title: 'Althochdeutsch',
              text:  'Erste deutsche Schriftsprache (vorher nur Latein). Starke regionale Unterschiede, komplexe Flexion. Wichtige Texte: Hildebrandslied, Merseburger Zaubersprüche, Wessobrunner Gebet. Christlicher Einfluss durch Karolingerzeit.',
            },
            {
              year:  'ca. 1050 – 1350',
              title: 'Mittelhochdeutsch',
              text:  'Blütezeit der höfischen Dichtung (Minnesang, Heldenepos). Einfluss des Französischen durch höfische Kultur. Wichtige Autoren: Walther von der Vogelweide, Wolfram von Eschenbach, Hartmann von Aue. Das Nibelungenlied entsteht.',
            },
            {
              year:  'ca. 1350 – 1650',
              title: 'Frühneuhochdeutsch',
              text:  'Buchdruck (1450) ermöglicht Verbreitung einheitlicher Schreibweisen. Luthers Bibelübersetzung (1522–1534) wird Grundlage der Standardsprache. Erste Schritte zur Normierung beginnen.',
            },
            {
              year:  'ca. 1650 – 1900',
              title: 'Neuhochdeutsch',
              text:  'Normierung der Rechtschreibung durch Konrad Duden (1880). Schulpflicht verbreitet die Standardsprache. Goethe und Schiller prägen die Literatursprache. Deutsch wird zur Nationalsprache.',
            },
            {
              year:  '1900 – heute',
              title: 'Gegenwartssprache',
              text:  'Globalisierung bringt Anglizismen. Digitalisierung schafft neue Kommunikationsformen (Chats, Emojis, Abkürzungen). Gendergerechte Sprache als gesellschaftliche Debatte. Mehrsprachigkeit prägt urbane Varietäten.',
            },
          ])}

        </div>
      </section>

      <!-- ══════════════ VERGLEICH: MHD vs. NHD ══════════════ -->
      <section class="lz-content-section">
        <div class="lz-section-wrap">

          ${renderSubhead('Sprachvergleich')}
          <h2 class="lz-h2 reveal">Mittelhochdeutsch → Neuhochdeutsch</h2>

          ${renderTable({
            headers: ['Mittelhochdeutsch', 'Neuhochdeutsch', 'Veränderung'],
            rows: [
              ['guot',   'gut',    'Vokalwandel: uo → u'],
              ['liep',   'lieb',   'Vokalwandel: ie → ie (Schreibung modernisiert)'],
              ['vriunt', 'Freund', 'Vereinfachung der Konsonantengruppe'],
              ['wîp',    'Weib',   'Bedeutungsverengung + heute veraltet/abwertend'],
              ['hûs',    'Haus',   'Diphthongierung: û → au'],
              ['mîn',    'mein',   'Diphthongierung: î → ei'],
            ],
          })}

          ${renderInfobox({
            type:  'tip',
            icon:  'fas fa-book-bible',
            title: 'Luthers Bedeutung für die deutsche Sprache',
            body:  'Luther übersetzte die Bibel in die „ostmitteldeutsche Kanzleisprache" — '
                 + 'verständlich für Nord- und Süddeutsche. Seine Übersetzung schuf viele bis '
                 + 'heute gebräuchliche Ausdrücke: <em>„Feuertaufe"</em>, <em>„Herzenslust"</em>, '
                 + '<em>„Lückenbüßer"</em>, <em>„im Dunkeln tappen"</em>.',
          })}

        </div>
      </section>

      <!-- ══════════════ TENDENZEN HEUTE ══════════════ -->
      <section class="lz-content-section">
        <div class="lz-section-wrap">

          ${renderSubhead('Gegenwart')}
          <h2 class="lz-h2 reveal">Tendenzen der Gegenwartssprache</h2>

          ${renderAccordion([
            {
              title:   '🌐 Anglizismen und Globalisierung',
              content: `<p style="line-height:1.8; margin-bottom:0.8rem;">
                          Dominanz des Englischen in Wirtschaft, Wissenschaft und Technologie führt zu
                          massiver Entlehnung: <em>Meeting, chillen, App, Download, Influencer, streamen</em>.
                        </p>
                        <p style="line-height:1.8;">
                          <strong>Ursachen:</strong> Internationalisierung, Prestige,
                          fehlende deutsche Entsprechungen für neue Konzepte.
                        </p>`,
            },
            {
              title:   '💬 Digitale Kommunikation',
              content: `<p style="line-height:1.8; margin-bottom:0.8rem;">
                          Messenger, soziale Medien und E-Mail schaffen neue Hybridformen:
                          <strong>konzeptionell mündlich, medial schriftlich</strong>.
                        </p>
                        <ul style="line-height:1.9; margin-left:1.2rem;">
                          <li>Emojis ergänzen oder ersetzen Interpunktion und Tonfall</li>
                          <li>Abkürzungen: <em>lol, omg, asap, fyi, btw</em></li>
                          <li>Auslassungen: <em>„Kommst du?"</em> → <em>„Kommst?"</em></li>
                        </ul>`,
            },
            {
              title:   '⚧ Gendergerechte Sprache',
              content: `<p style="line-height:1.8; margin-bottom:0.8rem;">
                          Ziel: Alle Geschlechter sichtbar machen, Diskriminierung vermeiden.
                        </p>
                        ${renderTable({
                          headers: ['Form', 'Beispiel'],
                          rows: [
                            ['Paarform',      'Lehrerinnen und Lehrer'],
                            ['Binnen-I',      'LehrerInnen'],
                            ['Genderstern',   'Lehrer*innen'],
                            ['Doppelpunkt',   'Lehrer:innen'],
                            ['Neutrale Form', 'Lehrende, Lehrkraft'],
                          ],
                        })}`,
            },
            {
              title:   '📉 Grammatische Vereinfachungen',
              content: `<ul style="line-height:1.9; margin-left:1.2rem;">
                          <li><strong>Genitiv-Abbau:</strong> „wegen dem" statt „wegen des"</li>
                          <li><strong>Konjunktiv-Schwund:</strong> „wenn ich du wäre" wird seltener</li>
                          <li>Vereinfachung komplexer Hypotaxen in der Mündlichkeit</li>
                          <li>Präteritum schwindet in Süddeutschland zugunsten des Perfekts</li>
                        </ul>`,
            },
            {
              title:   '🏙️ Kiezdeutsch und Mehrsprachigkeit',
              content: `<p style="line-height:1.8; margin-bottom:0.8rem;">
                          In urbanen Räumen entstehen neue Varietäten durch Sprachkontakt,
                          z.B. <strong>Kiezdeutsch</strong> mit Einflüssen aus dem Türkischen und Arabischen.
                        </p>
                        <ul style="line-height:1.9; margin-left:1.2rem;">
                          <li>Topikalisierung: <em>„Ich war gestern Schule"</em></li>
                          <li>Einflüsse: <em>„Wallah", „Yalla", „Lan"</em></li>
                          <li><strong>Code-Switching:</strong> Wechsel zwischen Sprachen im Gespräch</li>
                        </ul>`,
            },
          ])}

        </div>
      </section>

      <!-- ══════════════ SPRACHVERFALL-DEBATTE ══════════════ -->
      <section class="lz-content-section">
        <div class="lz-section-wrap">

          ${renderSubhead('Kernfrage')}
          <h2 class="lz-h2 reveal">Sprachverfall oder Sprachwandel?</h2>

          ${renderCompare({
            titleA: '❌ Sprachverfallsthese',
            titleB: '✅ Sprachwandelthese',
            listA: [
              'Jugendliche können nicht mehr richtig schreiben',
              'Zu viele Anglizismen gefährden die deutsche Sprache',
              'Grammatikfehler nehmen zu',
              'Wortschatz verarmt durch Jugendsprache',
              'Digitale Kommunikation schadet der Sprache',
            ],
            listB: [
              'Sprachwandel ist natürlich — er hat immer stattgefunden',
              'Jede Generation klagte über die nächste (bereits in der Antike)',
              'Jugendliche beherrschen mehrere Register (Code-Switching)',
              'Neue Kommunikationsformen erweitern sprachliche Möglichkeiten',
              'Kein objektiver Maßstab für „gutes" oder „schlechtes" Deutsch',
            ],
          })}

          ${renderInfobox({
            type:  'tip',
            icon:  'fas fa-graduation-cap',
            title: 'Sprachwissenschaftliche Position',
            body:  'Die Mehrheit der Sprachwissenschaftler lehnt die Sprachverfallsthese ab. '
                 + 'Entscheidend ist <strong>Angemessenheit</strong>: die richtige Varietät in der '
                 + 'richtigen Situation zu wählen. Sprachliche Vielfalt ist Reichtum, kein Verfall. '
                 + 'Wichtig bleibt jedoch die Beherrschung der Standardsprache für Bildung und Beruf.',
          })}

        </div>
      </section>

      <!-- ══════════════ PAGE NAVIGATION BOTTOM ══════════════ -->
      <section class="lz-content-section" style="padding:1.5rem 0 3rem;">
        <div class="lz-section-wrap">
          ${renderPageNav({
            prev: { label: '1.3 Sprachvarietäten', link: `${BASE}/themen/sprache/sprachvarietaeten` },
            next: { label: '2.1 Epik', link: `${BASE}/themen/gattungen/epik` },
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
      btn.addEventListener('click', () => {
        window.location.hash = btn.dataset.navLink;
      });
    });

    document.querySelectorAll('[data-link]').forEach(btn => {
      btn.addEventListener('click', () => { window.location.hash = btn.dataset.link; });
    });
  }
}