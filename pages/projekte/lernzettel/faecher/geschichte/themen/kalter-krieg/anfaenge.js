// pages/projekte/lernzettel/faecher/geschichte/themen/kalter-krieg/anfaenge.js
// 3.1 — Anfänge des Kalten Krieges

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
const ANFAENGE_TABS = [
  { key: 'konferenzen',  label: '🤝 Kriegsende & Konferenzen' },
  { key: 'truman',       label: '🇺🇸 Truman-Doktrin & Marshallplan' },
  { key: 'deutschland',  label: '🧱 Teilung Deutschlands' },
  { key: 'eiserne',      label: '🌍 Eiserner Vorhang' },
];

export default class GeschichteKalterKriegAnfaenge {
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
          <span>3.1 · Anfänge des Kalten Krieges</span>
        </nav>
        <h1 class="lz-sub-title">Anfänge des<br><em>Kalten Krieges.</em></h1>
        <p class="lz-sub-desc">
          Wie aus Kriegsalliierten Systemfeinde wurden — Entstehung der Bipolarität,
          Truman-Doktrin, Marshallplan und die Teilung Europas.
        </p>
        ${renderTags(['3.1', '1945–1950', 'Kalter Krieg', 'Bipolarität', 'Abitur 2026'])}
      </div>
    </section>

    <section class="lz-content-section">
      <div class="lz-section-wrap">
        ${renderSubhead('Auf einen Blick')}
        <h2 class="lz-h2 reveal">Was war der Kalte Krieg?</h2>
        <p class="lz-prose reveal">Als <strong>Kalter Krieg</strong> bezeichnet man den Systemkonflikt zwischen den USA (demokratisch-kapitalistisch) und der UdSSR (kommunistisch-sozialistisch) von 1945 bis 1991 — einen Konflikt, der nie in einen direkten bewaffneten Krieg zwischen den Supermächten mündete, aber die Weltpolitik vollständig bestimmte.</p>
        ${renderMerkboxGrid([
          { icon: 'fas fa-flag-usa', title: 'USA: Freie Welt', text: 'Demokratie, Kapitalismus, individuelle Freiheiten. Weltwirtschaftsführer, Atommacht ab 1945. Selbstverständnis: Verteidiger der Freiheit gegen totalitäre Bedrohung.' },
          { icon: 'fas fa-star', title: 'UdSSR: Ostblock', text: 'Kommunismus, Planwirtschaft, kollektive Gleichheit. Atommacht ab 1949. Selbstverständnis: Befreiung der Werktätigen vom imperialistischen Kapitalismus.' },
          { icon: 'fas fa-atom', title: 'Nukleare Abschreckung', text: 'Direkter Krieg = gegenseitige Vernichtung (MAD: Mutually Assured Destruction). Deshalb: Stellvertreterkriege, Propaganda, Geheimdienste, Wettrüsten.' },
          { icon: 'fas fa-earth-americas', title: 'Bipolare Weltordnung', text: 'Die Welt wird in zwei Blöcke eingeteilt. Neutralität (Blockfreienbewegung, ab 1955) ist die Ausnahme. Jede regionale Krise wird Teil des globalen Systemkonflikts.' },
        ])}
      </div>
    </section>

    <section class="lz-content-section" style="padding-top:0;">
      <div class="lz-section-wrap">
        ${renderSubhead('Vertiefung')}
        <h2 class="lz-h2 reveal">Entstehung 1945–1950</h2>

        <nav class="wim-tabs" id="anfaenge-tabs" aria-label="Anfänge des Kalten Krieges">
          ${ANFAENGE_TABS.map((t, i) => `
            <button class="wim-tab${i === 0 ? ' active' : ''}" data-wim="${t.key}">
              ${t.label}
            </button>`).join('')}
        </nav>

        ${this._panelKonferenzen()}
        ${this._panelTruman()}
        ${this._panelDeutschland()}
        ${this._panelEiserne()}

      </div>
    </section>

    <section class="lz-content-section" style="padding-top:0;">
      <div class="lz-section-wrap">
        ${renderSubhead('Chronologie')}
        <h2 class="lz-h2 reveal">1945–1950</h2>
        ${renderVTimeline([
          { year: 'Feb. 1945',  title: 'Konferenz von Jalta',              text: 'Big Three teilen Europa in Einflusssphären auf.' },
          { year: 'Aug. 1945',  title: 'Atombombe auf Japan',              text: 'USA zeigen nukleare Überlegenheit — Beginn des Atomzeitalters.' },
          { year: 'Jul. 1945',  title: 'Konferenz von Potsdam',            text: 'Erste offene Spannungen zwischen Truman und Stalin.' },
          { year: 'März 1946',  title: 'Churchills Eiserner Vorhang',      text: 'Begriff prägt das Bild des geteilten Europa.' },
          { year: 'Feb. 1946',  title: 'Kennans Langes Telegramm',         text: 'Containment-Doktrin als Grundlage der US-Außenpolitik.' },
          { year: 'März 1947',  title: 'Truman-Doktrin',                   text: 'USA verpflichten sich zur weltweiten Eindämmung des Kommunismus.' },
          { year: 'Jun. 1947',  title: 'Marshallplan',                     text: '13 Mrd. Dollar für Westeuropas Wiederaufbau.' },
          { year: '1948–49',    title: 'Berliner Blockade & Luftbrücke',   text: 'Erste direkte Konfrontation — UdSSR gibt nach.' },
          { year: '1949',       title: 'NATO gegründet',                   text: 'Westliches Militärbündnis institutionalisiert.' },
          { year: '1949',       title: 'BRD und DDR gegründet',            text: 'Deutschland offiziell geteilt.' },
          { year: 'Aug. 1949',  title: 'Erste sowjetische Atombombe',      text: 'USA verlieren Atommonopol — MAD-Gleichgewicht beginnt.' },
        ])}
      </div>
    </section>

    <section class="lz-content-section" style="padding-top:0;">
      <div class="lz-section-wrap">
        ${renderPageNav({
          prev: { link: `${BASE}/themen/industrialisierung/new-deal`,       label: '2.5 · New Deal' },
          next: { link: `${BASE}/themen/kalter-krieg/nato-wp-korea`,        label: '3.2 · NATO, Warschauer Pakt & Korea' },
        }, BASE)}
      </div>
    </section>

    ${footerHTML(this.router)}
  `; }

  _panelKonferenzen() {
    return `
      <div class="wim-category" data-wim-cat="konferenzen">
        <p class="lz-prose">Die Anti-Hitler-Allianz zerbrach unmittelbar nach dem Zweiten Weltkrieg — die ideologischen Gegensätze waren durch die gemeinsame Bedrohung nur überdeckt worden.</p>
        ${renderTable({
          headers: ['Konferenz', 'Datum', 'Teilnehmer', 'Beschlüsse / Bedeutung'],
          rows: [
            ['Jalta', 'Feb. 1945', 'Roosevelt, Churchill, Stalin', 'Deutschland in Besatzungszonen; freie Wahlen in Osteuropa (Stalin hält sie nicht ein); UN-Gründung beschlossen'],
            ['Potsdam', 'Juli–Aug. 1945', 'Truman, Attlee, Stalin', 'Deutschland: Entnazifizierung, Demokratisierung, Entmilitarisierung, Dezentralisierung. Reparationen. Grenze Oder-Neiße. Erste offene Spannung.'],
          ],
        })}
        ${renderInfobox({ type: 'warning', icon: 'fas fa-bomb', title: 'Atombombe als Wendepunkt', body: `Truman informierte Stalin in Potsdam beiläufig über „eine neue Waffe von ungewöhnlicher Zerstörungskraft". Am 6. und 9. August 1945: Hiroshima und Nagasaki. Die USA hatten das Atommonopol — und nutzten es als diplomatisches Druckmittel. Stalin beschleunigte das sowjetische Atomprogramm. 1949: erste sowjetische Atombombe.` })}
      </div>
    `;
  }

  _panelTruman() {
    return `
      <div class="wim-category hidden" data-wim-cat="truman">
        ${renderAccordion([
          { title: 'Langer Telegram — George Kennan (1946)', content: `US-Diplomat Kennan analysierte die sowjetische Außenpolitik als expansiv und ideologisch getrieben — aber nicht kriegslüstern. Empfehlung: <em>Containment</em> (Eindämmung).<br><br>Idee: UdSSR nicht angreifen, aber überall dort gegensteuern, wo sie expandiert. Wurde zur Grundlage der US-Außenpolitik für 45 Jahre.` },
          { title: 'Truman-Doktrin (12. März 1947)', content: `Anlass: Großbritannien konnte Griechenland und Türkei nicht mehr unterstützen. Kommunistische Guerrilla in Griechenland drohte zu siegen.<br><br>Trumans Botschaft an den Kongress: <em>„Die USA müssen freie Völker unterstützen, die sich gegen totalitäre Regime wehren."</em><br><br>400 Millionen Dollar für Griechenland und Türkei. Ideologisierung des Konflikts: Nicht mehr Großmachtinteressen, sondern Freiheit vs. Totalitarismus.` },
          { title: 'Marshallplan / European Recovery Program (1948–1952)', content: `US-Außenminister George Marshall bot Europa am 5. Juni 1947 massive Wirtschaftshilfe an.<ul style="margin:.5rem 0 0 1.2rem;line-height:1.9;"><li>~13 Milliarden Dollar (heute ~150 Mrd.) für 17 westeuropäische Länder</li><li>Ziel: Wirtschaftliche Stabilisierung → Kommunismus unattraktiv machen</li><li>Auch der UdSSR und Osteuropa angeboten — Stalin lehnte ab</li><li>Folge: Wirtschaftliche Spaltung Europas institutionalisiert</li><li>Als Gegengewicht: Kominform (1947) und Molotowplan für Ostblock</li></ul>` },
        ])}
      </div>
    `;
  }

  _panelDeutschland() {
    return `
      <div class="wim-category hidden" data-wim-cat="deutschland">
        <p class="lz-prose">Deutschland wurde zum Mittelpunkt des Ost-West-Konflikts — und die Teilung Deutschlands symbolisierte die Teilung der Welt.</p>
        ${renderAccordion([
          { title: 'Bizone → Trizone → Westdeutschland', content: `1946: Zusammenlegung der US- und britischen Besatzungszone zur <em>Bizone</em>. 1948: Anschluss der französischen Zone → <em>Trizone</em>. Währungsreform 20. Juni 1948 in Westzonen: Einführung der D-Mark. Folge: Wirtschaftliche Abgrenzung vom Osten, aber auch: Berlinkrise.` },
          { title: 'Berliner Blockade und Luftbrücke (1948–49)', content: `Reaktion auf Währungsreform: Stalin sperrt alle Land- und Wasserwege nach Westberlin. Ziel: Westmächte aus Berlin herausdrängen.<br><br>Antwort: US-Luftbrücke. Jeden Tag landen ~600 Flugzeuge in Westberlin. <strong>Rosinenbomber</strong>: US-Piloten warfen Süßigkeiten für Berliner Kinder ab.<br><br>Mai 1949: Stalin gibt auf. Westberlin bleibt frei — und die Westmächte sind dauerhaft in Deutschland verankert.` },
          { title: 'BRD und DDR (1949)', content: `23. Mai 1949: <strong>Bundesrepublik Deutschland</strong> gegründet (Grundgesetz). 7. Oktober 1949: <strong>DDR</strong> gegründet.<br><br>Deutschland bleibt geteilt bis 1990 — die Grenze mitten durch Europa ist die sichtbarste Manifestation des Kalten Krieges.` },
        ])}
      </div>
    `;
  }

  _panelEiserne() {
    return `
      <div class="wim-category hidden" data-wim-cat="eiserne">
        ${renderInfobox({ type: 'blue', icon: 'fas fa-quote-left', title: 'Churchills Eiserner Vorhang (5. März 1946)', body: `<em>„Von Stettin an der Ostsee bis Triest an der Adria hat sich ein Eiserner Vorhang quer über den Kontinent gesenkt."</em> — Winston Churchill, Fulton/Missouri` })}
        <p class="lz-prose" style="margin-top:1rem;">Das Bild des „Eisernen Vorhangs" beschreibt die Grenze zwischen West- und Osteuropa als undurchdringliche Trennlinie — militärisch, politisch, wirtschaftlich und informationell.</p>
        ${renderCompare({
          titleA: 'Westblock (NATO)', titleB: 'Ostblock (Warschauer Pakt)',
          listA: ['USA, Westeuropa, Kanada, Japan', 'Demokratie und Marktwirtschaft', 'Marshall-Plan: wirtschaftliche Integration', 'NATO (1949): militärisches Bündnis', 'Freie Medien, Konsumgesellschaft'],
          listB: ['UdSSR + Osteuropa (Satelliten), China', 'Einparteienstaaten, Planwirtschaft', 'Kominform + Comecon: sowjetische Kontrolle', 'Warschauer Pakt (1955): militärisches Bündnis', 'Zensur, Staatspropaganda, Reisebeschränkungen'],
        })}
      </div>
    `;
  }

  init() { i18n.init(); initScrollReveal(); initInteractive(document); initWimTabs(document); }
}