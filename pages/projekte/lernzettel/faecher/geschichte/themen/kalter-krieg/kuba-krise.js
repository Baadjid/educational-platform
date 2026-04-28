// pages/projekte/lernzettel/faecher/geschichte/themen/kalter-krieg/kuba-krise.js
// 3.3 — Kuba-Krise (1962)

import { initScrollReveal } from '../../../../../../../shared/js/index.js';
import { footerHTML }       from '../../../../../../../components/Footer.js';
import { i18n }             from '../../../../../../../shared/js/i18n.js';
import { initWimTabs }      from '../../../../../../../shared/js/wim-tabs.js';
import {
  ensureComponentsCSS,
  renderSubhead, renderTags, renderInfobox, renderTable,
  renderTabs, renderAccordion, renderMerkboxGrid, renderCompare,
  renderVTimeline, initInteractive,
} from '../../../../js/components/components.js';
import { renderPageNav } from '../../../../js/components/subnav.js';
import { COLOR, COLOR_RGB, BASE } from '../../geschichte.js';

// ─── WIM-Tab-Daten ───────────────────────────────────────────────
const KUBA_TABS = [
  { key: 'vorgeschichte', label: '📍 Vorgeschichte' },
  { key: 'tage',         label: '🗓️ Die 13 Tage' },
  { key: 'folgen',       label: '📜 Folgen' },
];

export default class GeschichteKubaKrise {
  constructor(router) { this.router = router; }

  render() {
    ensureComponentsCSS();
    [
      ['lernzettel.css', 'pages/projekte/lernzettel/styles/lernzettel.css'],
      ['sub.css',        'pages/projekte/lernzettel/styles/sub.css'],
    ].forEach(([id, href]) => {
      if (!document.querySelector(`link[href*="${id}"]`)) {
        const l = document.createElement('link'); l.rel = 'stylesheet'; l.href = href;
        document.head.appendChild(l);
      }
    });
    const el = document.createElement('div');
    el.className = 'page page-geschichte page-geschichte-sub';
    el.style.setProperty('--lz-accent', COLOR);
    el.style.setProperty('--lz-accent-rgb', COLOR_RGB);
    el.innerHTML = this._html();
    return el;
  }

  _html() { return `
    <section class="lz-sub-hero" style="--kap-color:${COLOR};--kap-color-rgb:${COLOR_RGB};">
      <div class="lz-sub-hero-orb" aria-hidden="true"></div>
      <div class="lz-sub-hero-inner">
        <nav class="lz-sub-breadcrumb">
          <button class="lz-bread-link" data-link="/projekte/lernzettel">Lernzettel</button>
          <i class="fas fa-chevron-right"></i>
          <button class="lz-bread-link" data-link="${BASE}">Geschichte</button>
          <i class="fas fa-chevron-right"></i>
          <span>3.3 · Kuba-Krise</span>
        </nav>
        <h1 class="lz-sub-title">Kuba-Krise<br><em>Oktober 1962.</em></h1>
        <p class="lz-sub-desc">
          13 Tage am Rand des Atomkriegs — der gefährlichste Moment des Kalten Krieges
          und die Geburt der modernen Rüstungskontrolle.
        </p>
        ${renderTags(['3.3', 'Oktober 1962', 'Kalter Krieg', 'MAD', 'Kennedy', 'Abitur 2026'])}
      </div>
    </section>

    <section class="lz-content-section">
      <div class="lz-section-wrap">
        ${renderSubhead('Auf einen Blick')}
        <h2 class="lz-h2 reveal">Die 13 Tage</h2>
        ${renderInfobox({ type: 'warning', icon: 'fas fa-radiation', title: 'Höchste Eskalationsstufe des Kalten Krieges', body: `Vom 16. bis 28. Oktober 1962 standen die USA und die UdSSR kurz vor einem nuklearen Krieg. US-Streitkräfte in DEFCON 2 (höchste Stufe vor Krieg). Strategische Bomber mit Atombomben in der Luft. Nuklear-U-Boote auf Position.` })}
        ${renderMerkboxGrid([
          { icon: 'fas fa-map-location-dot', title: 'Geographischer Kern', text: 'Kuba liegt 150 km vor Florida. Sowjetische Mittelstreckenraketen dort könnten Washington in 5 Minuten erreichen — ohne Vorwarnung.' },
          { icon: 'fas fa-chess', title: 'Strategisches Gleichgewicht', text: 'USA hatten Jupiter-Raketen in der Türkei (nahe UdSSR). Chruschtschow sah Kuba als Gegengewicht. Beide Seiten hatten symmetrische Interessen.' },
          { icon: 'fas fa-comments', title: 'Kommunikation entscheidend', text: 'Geheimer Briefwechsel Kennedy–Chruschtschow. Direkte Kommunikation ohne Diplomaten verhinderte Eskalation durch Missverständnis.' },
          { icon: 'fas fa-handshake', title: 'Kompromiss als Ausweg', text: 'USA: keine Invasion Kubas + geheime Abzugszusage für Jupiter-Raketen (Türkei). UdSSR: Abzug Raketen aus Kuba. Beide konnten Gesicht wahren.' },
        ])}
      </div>
    </section>

    <section class="lz-content-section" style="padding-top:0;">
      <div class="lz-section-wrap">
        ${renderSubhead('Vertiefung')}
        <h2 class="lz-h2 reveal">Kuba-Krise im Detail</h2>

        <nav class="wim-tabs" id="kuba-tabs" aria-label="Kuba-Krise">
          ${KUBA_TABS.map((t, i) => `
            <button class="wim-tab${i === 0 ? ' active' : ''}" data-wim="${t.key}">
              ${t.label}
            </button>`).join('')}
        </nav>

        ${this._panelVorgeschichte()}
        ${this._panelTage()}
        ${this._panelFolgen()}

      </div>
    </section>

    <section class="lz-content-section" style="padding-top:0;">
      <div class="lz-section-wrap">
        ${renderSubhead('Chronologie')}
        <h2 class="lz-h2 reveal">Die 13 Tage im Oktober 1962</h2>
        ${renderVTimeline([
          { year: '1959',       title: 'Kubanische Revolution',             text: 'Castro stürzt Batista — Kuba wendet sich der UdSSR zu.' },
          { year: 'Apr. 1961',  title: 'Schweinebucht-Desaster',            text: 'CIA-Invasion scheitert. Castro bittet um sowjetischen Schutz.' },
          { year: 'Sommer 1962', title: 'Sowjetische Raketen auf Kuba',     text: 'Geheime Stationierung von SS-4-Mittelstreckenraketen.' },
          { year: '16.10.1962', title: 'Kennedy erfährt von Raketen',       text: 'U-2-Fotos beweisen Baustellen. ExComm gebildet.' },
          { year: '22.10.1962', title: 'Kennedy TV-Ansprache',              text: 'Öffentliche Bekanntgabe + Quarantäne angekündigt.' },
          { year: '24.10.1962', title: 'Sowjetische Schiffe drehen um',     text: 'Höchste Spannung — erster Rückzug der UdSSR.' },
          { year: '27.10.1962', title: 'Schwarzer Samstag',                 text: 'U-2 abgeschossen, U-Boot B-59 fast Torpedo. Arkhipov verhindert Katastrophe.' },
          { year: '28.10.1962', title: 'Kompromiss',                        text: 'Kuba: keine Invasion. Türkei: Jupiter-Abzug (geheim). Krise beendet.' },
          { year: 'Jun. 1963',  title: 'Heißer Draht',                     text: 'Direkte Kommunikationslinie Washington–Moskau.' },
          { year: 'Aug. 1963',  title: 'Atomteststopp-Vertrag',             text: 'Erster Rüstungskontrollvertrag des Kalten Krieges.' },
        ])}
      </div>
    </section>

    <section class="lz-content-section" style="padding-top:0;">
      <div class="lz-section-wrap">
        ${renderPageNav({
          prev: { link: `${BASE}/themen/kalter-krieg/nato-wp-korea`,              label: '3.2 · NATO, Warschauer Pakt & Korea' },
          next: { link: `${BASE}/themen/kalter-krieg/vietnam-prag-entspannung`,   label: '3.4 · Vietnam, Prag & Entspannung' },
        }, BASE)}
      </div>
    </section>

    ${footerHTML(this.router)}
  `; }

  _panelVorgeschichte() {
    return `
      <div class="wim-category" data-wim-cat="vorgeschichte">
        ${renderAccordion([
          { title: 'Kubanische Revolution (1959)', content: `Fidel Castro stürzte den US-freundlichen Diktator Batista. Zunächst kein Kommunist — aber Enteignung US-amerikanischer Unternehmen → USA verhängen Handelsembargo → Castro wendet sich der UdSSR zu.<br><br>Die Eskalation zeigt: Nicht alle Konflikte des Kalten Krieges entstanden aus ideologischer Überzeugung — wirtschaftliche Interessen trieben Cuba in den Ostblock.` },
          { title: 'Schweinebucht-Invasion (April 1961)', content: `CIA-trainierte kubanische Exilanten sollten Castro stürzen. Desaster: Kennedy verweigerte Luftunterstützung, Invasion scheiterte.<br><br>Folge: Castro überzeugt, USA planen weiteren Angriff. Wendet sich noch stärker an Moskau — und bittet um Schutzraketen.` },
          { title: 'Sowjetische Raketen auf Kuba', content: `Chruschtschow wollte:<ul style="margin:.5rem 0 0 1.2rem;line-height:1.9;"><li>Kuba schützen (Castro hatte darum gebeten)</li><li>Strategischen Nachteil ausgleichen (USA hatten 3:1 Überlegenheit bei ICBMs)</li><li>Verhandlungsmasse für Berlin-Frage schaffen</li></ul>Ab Sommer 1962: Stationierung von SS-4-Raketen (Reichweite 2.000 km) in aller Geheimheit.` },
        ])}
      </div>
    `;
  }

  _panelTage() {
    return `
      <div class="wim-category hidden" data-wim-cat="tage">
        ${renderTable({
          headers: ['Tag', 'Datum', 'Ereignis'],
          rows: [
            ['1',  '16.10.', 'U-2-Aufklärungsfotos beweisen Raketenbaustellen auf Kuba. Kennedy bildet geheimen ExComm-Beraterstab.'],
            ['3–6', '18–21.10.', 'Kennedy debattiert Optionen: Luftschlag, Invasion, Seeblockade. Entscheidung: Quarantäne (Seeblockade).'],
            ['7',  '22.10.', 'Kennedy wendet sich im TV an die Nation. US-Streitkräfte auf DEFCON 3, dann 2 hochgestuft.'],
            ['8',  '23.10.', 'Chruschtschow: Schiffe werden Blockade durchbrechen. Letzte sowjetische Schiffe nähert sich.'],
            ['9',  '24.10.', 'Sowjetische Schiffe stoppen auf hoher See — drehen um. „Das ist der Moment, in dem es am nächsten kam." (Dean Rusk)'],
            ['11', '26.10.', 'Chruschtschow: langer privater Brief an Kennedy — Kompromissangebot.'],
            ['12', '27.10.', '„Schwarzer Samstag": US-U-2 abgeschossen über Kuba. Sowjetisches U-Boot B-59 fast Atomotorpedo gefeuert. Zweiter Chruschtschow-Brief (härtere Bedingungen).'],
            ['13', '28.10.', 'Kennedy antwortet auf ersten Brief, ignoriert zweiten. Öffentliches Versprechen: keine Invasion Kubas. Geheim: Jupiter-Abzug aus Türkei.'],
          ],
        })}
        ${renderInfobox({ type: 'danger', icon: 'fas fa-skull', title: 'Der Schwarze Samstag — nahe an der Katastrophe', body: `U-Boot B-59: Ohne Kontakt zur Außenwelt seit Tagen, überhitzt, US-Wasserbomben explodierten rings um das Boot. Kapitän und politischer Offizier beschlossen, den nuklearen Torpedo abzufeuern. <strong>Vasili Arkhipov</strong>, dritter Offizier, verweigerte die Zustimmung — als einziger der drei nötigen Stimmen.<br><br>Historiker: Arkhipov rettete die Welt.` })}
      </div>
    `;
  }

  _panelFolgen() {
    return `
      <div class="wim-category hidden" data-wim-cat="folgen">
        ${renderMerkboxGrid([
          { icon: 'fas fa-phone', title: 'Heißer Draht (1963)', text: 'Direkte Telexverbindung zwischen Weißem Haus und Kreml — um Kommunikationsausfälle in Krisen zu verhindern. Symbolisch: Krise zeigte Notwendigkeit direkter Kommunikation.' },
          { icon: 'fas fa-file-contract', title: 'Atomteststopp-Vertrag (1963)', text: 'USA, UdSSR, UK verbieten Atomtests in Atmosphäre, Unterwasser, Weltraum. Erster Rüstungskontrollvertrag — Beginn einer neuen Ära.' },
          { icon: 'fas fa-dove', title: 'Entspannungspolitik', text: 'Kuba-Krise erschreckte beide Seiten. Erste Schritte zur Entspannung: SALT I (1972), Helsinki-Schlussakte (1975). Direkte Folge der Einsicht: Nuklearkrieg darf nie beginnen.' },
          { icon: 'fas fa-chess-king', title: 'Chruschtschows Niederlage', text: 'Intern als Niederlage gewertet. 1964 durch Breschnew abgelöst. Die Krise schwächte seine Position dauerhaft.' },
        ])}
        ${renderCompare({
          titleA: 'USA — Wahrnehmung', titleB: 'UdSSR — Wahrnehmung',
          listA: ['Kennedy als entschlossener, aber besonnener Führer gefeiert', 'Öffentlich: Sieg der USA', 'Intern: Geheimhaltung der Jupiter-Zusage wegen Präzedenzwirkung', 'Stärkung des Präsidentenamts in Krisenzeiten'],
          listB: ['Chruschtschow intern als Verlierer gesehen', 'Zwang zum Raketenabzug = öffentliche Demütigung', 'Beschleunigtes Raketenprogramm als Konsequenz', '1964: Entmachtung Chruschtschows durch Breschnew'],
        })}
      </div>
    `;
  }

  init() { i18n.init(); initScrollReveal(); initInteractive(document); initWimTabs(document); }
}