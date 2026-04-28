// pages/projekte/lernzettel/faecher/deutsch/themen/sprache/sprachvarietaeten.js
// Deutsch 1.3 — Sprachvarietäten und ihre Reichweite

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

export default class DeutschSprachvarietaetenPage {
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
            <span>1.3 · Sprachvarietäten</span>
          </nav>

          <h1 class="lz-sub-title">
            Sprachvarietäten und<br>
            <em>ihre Reichweite.</em>
          </h1>

          <p class="lz-sub-desc">
            Standardsprache · Dialekt · Umgangssprache · Soziolekt · Fachsprache · Anglizismen
          </p>

          ${renderTags(['Kapitel 1.3', 'Varietätenlinguistik', 'Abitur 2026'])}
        </div>
      </section>

      <!-- ══════════════ ÜBERBLICK ══════════════ -->
      <section class="lz-content-section">
        <div class="lz-section-wrap">

          ${renderSubhead('Überblick')}
          <h2 class="lz-h2 reveal">Was sind Sprachvarietäten?</h2>

          <p class="lz-prose reveal">
            Sprache ist nicht einheitlich. Je nach Region, sozialer Gruppe, Situation
            und Fachgebiet verwenden Menschen unterschiedliche <strong>Sprachvarietäten</strong>.
            Diese Vielfalt ist kein Zeichen von „Sprachverfall", sondern natürlicher
            Ausdruck der Lebendigkeit von Sprache.
          </p>

          ${renderTable({
            headers: ['Varietät', 'Reichweite', 'Beispiel / Kontext'],
            rows: [
              ['Standardsprache', 'Überregional', 'Schule, Behörden, Medien'],
              ['Umgangssprache',  'Regional gefärbt, aber breiter als Dialekt', 'Alltagsgespräche, informell'],
              ['Dialekt / Mundart', 'Regional begrenzt', 'Bairisch, Schwäbisch, Plattdeutsch'],
              ['Soziolekt',      'Bestimmte soziale Gruppe', 'Jugendsprache, Rotwelsch'],
              ['Fachsprache',    'Berufs-/Wissenschaftsgruppe', 'Medizin, Recht, IT'],
            ],
          })}

        </div>
      </section>

      <!-- ══════════════ STANDARDSPRACHE ══════════════ -->
      <section class="lz-content-section">
        <div class="lz-section-wrap">

          ${renderSubhead('Hochsprache')}
          <h2 class="lz-h2 reveal">Standardsprache / Hochdeutsch</h2>

          ${renderMerkboxGrid([
            {
              icon:  'fas fa-globe',
              title: 'Überregional',
              text:  'In ganz Deutschland, Österreich und der Schweiz verständlich — die gemeinsame Grundlage.',
            },
            {
              icon:  'fas fa-book',
              title: 'Kodifiziert',
              text:  'In Wörterbüchern und Grammatiken festgelegt (Duden). Verbindliche Norm für Schrift und formale Mündlichkeit.',
            },
            {
              icon:  'fas fa-star',
              title: 'Prestigevarietät',
              text:  'Wird in Bildungseinrichtungen gelehrt und in offiziellen Kontexten erwartet.',
            },
          ])}

          ${renderInfobox({
            type:  'tip',
            icon:  'fas fa-clock-rotate-left',
            title: 'Historische Entwicklung',
            body:  `<ul style="margin:0.5rem 0 0 1.2rem; line-height:1.9;">
                      <li><strong>Luthers Bibelübersetzung (1522–1534):</strong> Grundlage der deutschen Standardsprache</li>
                      <li><strong>Buchdruck:</strong> Verbreitung einheitlicher Schreibweisen</li>
                      <li><strong>Kanzleisprachen:</strong> Verwaltungssprache als Vorbild</li>
                      <li><strong>Konrad Duden (1880):</strong> Erstes einheitliches Rechtschreibwörterbuch</li>
                    </ul>`,
          })}

        </div>
      </section>

      <!-- ══════════════ DIALEKT ══════════════ -->
      <section class="lz-content-section">
        <div class="lz-section-wrap">

          ${renderSubhead('Mundart')}
          <h2 class="lz-h2 reveal">Dialekt / Mundart</h2>

          <p class="lz-prose reveal">
            Ein <strong>Dialekt</strong> ist eine räumlich begrenzte Sprachvarietät mit eigenen
            Regeln in Aussprache, Wortschatz und Grammatik — mündlich tradiert und
            identitätsstiftend.
          </p>

          ${renderTable({
            headers: ['Dialektgruppe', 'Beispiele', 'Region'],
            rows: [
              ['Niederdeutsch', 'Plattdeutsch, Mecklenburgisch', 'Norddeutschland'],
              ['Mitteldeutsch', 'Berlinisch, Sächsisch, Hessisch', 'Mittel- und Ostdeutschland'],
              ['Oberdeutsch',   'Bairisch, Schwäbisch, Alemannisch', 'Bayern, BW, Österreich, CH'],
            ],
          })}

          ${renderTable({
            headers: ['Standarddeutsch', 'Bairisch', 'Schwäbisch', 'Plattdeutsch'],
            rows: [
              ['Ich habe keine Zeit', 'I hob koa Zeit', 'I han koi Zeit', 'Ik heff keen Tied'],
              ['Das ist schön',       'Des is schee',   'Des isch schö',  'Dat is schöön'],
            ],
          })}

          ${renderCompare({
            titleA: '✅ Positive Bewertung',
            titleB: '⚠️ Negative Bewertung (Vorurteil!)',
            listA: [
              'Authentizität und Heimatverbundenheit',
              'Identitätsstiftend für regionale Gemeinschaft',
              'Linguistisch gleichwertig zur Standardsprache',
              'Kulturelles Erbe',
            ],
            listB: [
              'Wird als bildungsfern wahrgenommen (Vorurteil)',
              'Geringe überregionale Reichweite',
              'Kann in formellen Situationen als unpassend gelten',
              'Soziale Stigmatisierung in bestimmten Kontexten',
            ],
          })}

        </div>
      </section>

      <!-- ══════════════ UMGANGSSPRACHE ══════════════ -->
      <section class="lz-content-section">
        <div class="lz-section-wrap">

          ${renderSubhead('Alltag')}
          <h2 class="lz-h2 reveal">Umgangssprache</h2>

          <p class="lz-prose reveal">
            Die <strong>Umgangssprache</strong> ist eine Varietät zwischen Dialekt und
            Standardsprache — weniger normiert, regional gefärbt, aber überregional verständlicher.
          </p>

          ${renderMerkboxGrid([
            {
              icon:  'fas fa-compress-arrows-alt',
              title: 'Assimilationen',
              text:  '„hast du" → „haste", „in dem" → „im", „an dem" → „am"',
            },
            {
              icon:  'fas fa-minus',
              title: 'Vereinfachungen',
              text:  '„wegen dem" statt „wegen des", Ellipsen wie „Kein Stress."',
            },
            {
              icon:  'fas fa-map-marker-alt',
              title: 'Regionale Reste',
              text:  '„gucken" (Nord) vs. „schauen" (Süd), „Moin" vs. „Servus"',
            },
            {
              icon:  'fas fa-fill-drip',
              title: 'Füllwörter',
              text:  '„halt", „eben", „irgendwie", „quasi", „sozusagen"',
            },
          ])}

        </div>
      </section>

      <!-- ══════════════ SOZIOLEKT & JUGENDSPRACHE ══════════════ -->
      <section class="lz-content-section">
        <div class="lz-section-wrap">

          ${renderSubhead('Gruppensprache')}
          <h2 class="lz-h2 reveal">Soziolekt & Jugendsprache</h2>

          <p class="lz-prose reveal">
            Ein <strong>Soziolekt</strong> ist eine Sprachvarietät einer bestimmten sozialen Gruppe.
            Die <strong>Jugendsprache</strong> ist der bekannteste Soziolekt.
          </p>

          ${renderTable({
            headers: ['Funktion', 'Erläuterung'],
            rows: [
              ['Identitätsstiftung', 'Zugehörigkeit zur Gruppe signalisieren'],
              ['Abgrenzung',         'Sich von anderen Gruppen (bes. Erwachsenen) unterscheiden'],
              ['Kreativität',        'Sprachliche Innovation und Spielfreude'],
              ['Geheimhaltung',      'Außenstehende ausschließen'],
            ],
          })}

          ${renderTable({
            headers: ['2000er', '2010er', '2020er'],
            rows: [
              ['geil, krass, fett', 'episch, lit, swag', 'sus, cringe, sheesh'],
              ['Alter, digga',      'bro, yolo',         'bruh, no cap'],
              ['cool',             'dope',              'based, bussin'],
            ],
          })}

          ${renderAccordion([
            {
              title:   '⚖️ Sprachverfall oder sprachliche Kreativität?',
              content: `<p style="line-height:1.8; margin-bottom:0.8rem;">
                          <strong>Kritik:</strong> Verarmung des Wortschatzes, Unhöflichkeit, Sprachverfall.
                        </p>
                        <p style="line-height:1.8;">
                          <strong>Verteidigung:</strong> Jugendliche beherrschen mehrere Register
                          (Code-Switching) — sie wählen situationsangemessen zwischen Jugendsprache,
                          Umgangssprache und Standardsprache. Jugendsprache ist kreativ, nicht verfallen.
                          Viele Ausdrücke werden später in die Standardsprache übernommen.
                        </p>`,
            },
          ])}

        </div>
      </section>

      <!-- ══════════════ FACHSPRACHE ══════════════ -->
      <section class="lz-content-section">
        <div class="lz-section-wrap">

          ${renderSubhead('Spezialsprache')}
          <h2 class="lz-h2 reveal">Fachsprache</h2>

          <p class="lz-prose reveal">
            Eine <strong>Fachsprache</strong> ist die Sprache einer bestimmten Berufs- oder
            Wissenschaftsgruppe. Sie ermöglicht präzise, effiziente Kommunikation —
            schließt aber Außenstehende aus.
          </p>

          ${renderTable({
            headers: ['Fachbereich', 'Typische Merkmale / Begriffe'],
            rows: [
              ['Medizin',    'Diagnose, Anamnese, Myokardinfarkt, Prognose'],
              ['Recht',      'Kläger, Beklagter, Urteil, Berufung, Revision'],
              ['IT',         'Algorithmus, Debugging, Interface, Framework, API'],
              ['Linguistik', 'Phonem, Morphem, Syntax, Semantik, Pragmatik'],
            ],
          })}

          ${renderMerkboxGrid([
            {
              icon:  'fas fa-crosshairs',
              title: 'Präzision',
              text:  'Exakte Bezeichnung von Sachverhalten, keine Mehrdeutigkeit.',
            },
            {
              icon:  'fas fa-bolt',
              title: 'Effizienz',
              text:  'Verkürzte Kommunikation unter Fachleuten — ein Begriff ersetzt ganze Erklärungen.',
            },
            {
              icon:  'fas fa-exclamation-triangle',
              title: 'Problem: Verständlichkeit',
              text:  'Fachsprachen können Außenstehende ausschließen. Popularisierung durch Metaphern und Glossare nötig.',
            },
          ])}

        </div>
      </section>

      <!-- ══════════════ ANGLIZISMEN ══════════════ -->
      <section class="lz-content-section">
        <div class="lz-section-wrap">

          ${renderSubhead('Sprachkontakt')}
          <h2 class="lz-h2 reveal">Anglizismen & Denglisch</h2>

          ${renderTable({
            headers: ['Typ', 'Erläuterung', 'Beispiele'],
            rows: [
              ['Direkte Übernahme',   'Wort unverändert übernommen',               'Computer, Internet, Baby'],
              ['Hybridbildung',       'Englischer Stamm + deutsche Endung',         'downloaden, gescreenshotet'],
              ['Scheinentlehnung',    'Klingt englisch, im Englischen unbekannt',   'Handy (engl.: mobile/cell phone)'],
              ['Bedeutungslehnwort',  'Deutsches Wort bekommt neue engl. Bedeutung', 'realisieren (= verstehen)'],
            ],
          })}

          ${renderCompare({
            titleA: '✅ Pro Anglizismen',
            titleB: '⚠️ Contra Anglizismen',
            listA: [
              'Internationale Verständigung erleichtert',
              'Prestige und Modernität',
              'Kürze und Prägnanz für neue Konzepte',
              'Natürliche Bereicherung der Sprache',
            ],
            listB: [
              'Können deutsche Wörter verdrängen',
              'Unverständlich für Ältere oder Nicht-Englischsprachige',
              'Unkritische Übernahme ohne Reflexion',
              'Mögliche kulturelle Vereinheitlichung',
            ],
          })}

        </div>
      </section>

      <!-- ══════════════ PAGE NAVIGATION BOTTOM ══════════════ -->
      <section class="lz-content-section" style="padding:1.5rem 0 3rem;">
        <div class="lz-section-wrap">
          ${renderPageNav({
            prev: { label: '1.2 Leistung & kommunikative Funktion', link: `${BASE}/themen/sprache/leistung-funktion` },
            next: { label: '1.4 Sprachgeschichte & Sprachwandel', link: `${BASE}/themen/sprache/sprachwandel` },
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