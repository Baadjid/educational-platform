// pages/projekte/lernzettel/faecher/geschichte/themen/industrialisierung/deutschland-usa.js
// 2.2 — Industrialisierung in Deutschland & USA

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
const DUSA_TABS = [
  { key: 'deutschland', label: '🇩🇪 Deutschland' },
  { key: 'usa',         label: '🇺🇸 USA' },
  { key: 'vergleich',   label: '📊 Vergleichstabelle' },
];

export default class GeschichteDeutschlandUSAPage {
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
          <span>2.2 · Industrialisierung Deutschland &amp; USA</span>
        </nav>
        <h1 class="lz-sub-title">Industrialisierung<br><em>Deutschland &amp; USA.</em></h1>
        <p class="lz-sub-desc">
          Nachzügler holen auf — wie Deutschland und die USA auf unterschiedlichen Wegen
          England überholten und zur Weltmacht wurden.
        </p>
        ${renderTags(['2.2', '~1830–1914', 'Industrialisierung', 'Zollverein', 'Abitur 2026'])}
      </div>
    </section>

    <section class="lz-content-section">
      <div class="lz-section-wrap">
        ${renderSubhead('Vergleich')}
        <h2 class="lz-h2 reveal">Deutschland vs. USA — zwei Wege</h2>
        ${renderCompare({
          titleA: 'Deutschland', titleB: 'USA',
          listA: ['Spätstarter: Beginn ~1835–1850', 'Politische Zersplitterung als Hemmnis → Zollverein (1834) als Lösung', 'Staat als treibende Kraft (Bismarck, Preußen)', 'Schwerindustrie: Kohle, Stahl, Chemie (Ruhrgebiet)', 'Gründerzeit nach 1871 — Nationalstaat und Industrie gleichzeitig', 'Bis 1900: überholt England in Stahl- und Chemieproduktion'],
          listB: ['Früher Start im Norden, schnell beschleunigt nach Bürgerkrieg', 'Riesiger einheitlicher Binnenmarkt von Anfang an', 'Privater Unternehmergeist als Motor (Rockefeller, Carnegie, Vanderbilt)', 'Eisenbahn als Pionierbranche — transkontinentale Verbindung 1869', 'Masseneinwanderung als Arbeitskraftquelle', 'Um 1900: größte Industriemacht der Welt'],
        })}
      </div>
    </section>

    <section class="lz-content-section" style="padding-top:0;">
      <div class="lz-section-wrap">
        ${renderSubhead('Vertiefung')}
        <h2 class="lz-h2 reveal">Deutschland &amp; USA im Detail</h2>

        <nav class="wim-tabs" id="dusa-tabs" aria-label="Industrialisierung Deutschland & USA">
          ${DUSA_TABS.map((t, i) => `
            <button class="wim-tab${i === 0 ? ' active' : ''}" data-wim="${t.key}">
              ${t.label}
            </button>`).join('')}
        </nav>

        ${this._panelDeutschland()}
        ${this._panelUSA()}
        ${this._panelVergleich()}

      </div>
    </section>

    <section class="lz-content-section" style="padding-top:0;">
      <div class="lz-section-wrap">
        ${renderSubhead('Chronologie')}
        <h2 class="lz-h2 reveal">Wichtige Daten</h2>
        ${renderVTimeline([
          { year: '1834', title: 'Deutscher Zollverein',              text: '18 deutsche Staaten: gemeinsamer Binnenmarkt — Grundlage der Industrialisierung.' },
          { year: '1835', title: 'Erste Eisenbahn in Deutschland',    text: 'Nürnberg–Fürth, 6 km. 50 Jahre später: 34.000 km Netz.' },
          { year: '1848', title: 'Revolution und Wirtschaftskrise',   text: 'Missernte 1846/47 + Pauperismus → sozialer Sprengstoff. Märzrevolution.' },
          { year: '1861', title: 'Amerikanischer Bürgerkrieg',        text: 'Nord vs. Süd — industrielle vs. agrarische Wirtschaft. Ende der Sklaverei (1865).' },
          { year: '1869', title: 'Transkontinentale Eisenbahn USA',   text: 'Küste zu Küste verbunden — nationaler Binnenmarkt entsteht.' },
          { year: '1871', title: 'Gründung des Deutschen Kaiserreichs', text: 'Nationalstaat und Industriestaat gleichzeitig. Kriegsentschädigung → Investitionsboom.' },
          { year: '1873', title: 'Gründerkrach',                      text: 'Börsenkrach in Wien, Berlin, New York — Einleitung der Großen Depression.' },
          { year: '1879', title: 'Schutzzölle in Deutschland',        text: 'Bismarck schützt Industrie und Landwirtschaft vor billigen Importen.' },
          { year: '1890', title: 'Sherman Antitrust Act (USA)',       text: 'Erste Antimonopolgesetzgebung — Rockefellers Standard Oil Zielscheibe.' },
          { year: '~1900', title: 'USA zur größten Industriemacht',   text: 'Überholen England und Deutschland in Stahl-, Öl- und Eisenbahnproduktion.' },
        ])}
      </div>
    </section>

    <section class="lz-content-section" style="padding-top:0;">
      <div class="lz-section-wrap">
        ${renderPageNav({
          prev: { link: `${BASE}/themen/industrialisierung/england`,          label: '2.1 · Industrialisierung England' },
          next: { link: `${BASE}/themen/industrialisierung/soziale-frage`,    label: '2.3 · Soziale Frage' },
        }, BASE)}
      </div>
    </section>

    ${footerHTML(this.router)}
  `; }

  _panelDeutschland() {
    return `
      <div class="wim-category" data-wim-cat="deutschland">
        <p class="lz-prose">Deutschlands Industrialisierung war eine staatlich geförderte <strong>Aufholjagd</strong> — mit gezielter Infrastrukturpolitik und institutionellen Reformen.</p>
        ${renderAccordion([
          { title: 'Zollverein (1834) — wirtschaftliche Einheit vor politischer', content: `Preußen initiierte einen Zollunion unter 18 deutschen Staaten.<ul style="margin:.5rem 0 0 1.2rem;line-height:1.9;"><li>Abschaffung der Binnenzölle → einheitlicher Markt für 26 Millionen Menschen</li><li>Gemeinsamer Außenzoll schützte deutsche Industrie (Frühform des Protektionismus)</li><li>Österreich ausgeschlossen → kleindeutsche Lösung vorgezeichnet</li><li><em>„Der Zollverein ist das Vorspiel der deutschen Einheit"</em> (zeitgen. Diktum)</li></ul>` },
          { title: 'Eisenbahn als Industriemotor', content: `1835: erste deutsche Eisenbahn Nürnberg–Fürth (6 km). 1850: ~6.000 km Netz. 1880: ~34.000 km.<br><br>Eisenbahn schuf <strong>Massennachfrage</strong> nach Kohle, Eisen, Stahl, Maschinen → Rückkopplungseffekt: Schwerindustrie wuchs mit dem Schienennetz.` },
          { title: 'Ruhrgebiet — Deutschlands industrielles Herz', content: `Kohle (Ruhr) + Eisenerz (Sieg, später Lothringen) + Wasserwege (Rhein) = ideale Industrieregion.<ul style="margin:.5rem 0 0 1.2rem;line-height:1.9;"><li><strong>Krupp</strong> (Essen): Stahlgigant, Rüstungskonzern</li><li><strong>Thyssen</strong>: Stahlproduktion</li><li><strong>BASF, Bayer, Hoechst</strong>: Chemiedreieck — Deutschland dominiert Weltchemie</li><li>Konzentration: Kartelle und Trusts ab 1870er</li></ul>` },
          { title: 'Gründerzeit (1871–1873) und Gründerkrach', content: `Nach der Reichsgründung 1871 flossen <strong>5 Milliarden Franc</strong> Kriegsentschädigung aus Frankreich → Investitionsboom. Hunderte von Aktiengesellschaften gegründet, viele spekulativ.<br><br>1873: <em>Gründerkrach</em> — Börsenkrach, Bankpleiten. Einleitung der <em>Großen Depression</em> (1873–96) in Europa.` },
        ])}
      </div>
    `;
  }

  _panelUSA() {
    return `
      <div class="wim-category hidden" data-wim-cat="usa">
        <p class="lz-prose">Die USA industrialisierten sich zunächst im Nordosten, dann nach dem Bürgerkrieg in einem gewaltigen nationalen Schub.</p>
        ${renderAccordion([
          { title: 'Vor dem Bürgerkrieg: Norden vs. Süden', content: `<strong>Norden</strong>: industrialisiert, Lohnarbeit, Protektionismus. <strong>Süden</strong>: Plantagenwirtschaft, Sklaverei, Freihandel.<br><br>Unterschiedliche Wirtschaftssysteme als strukturelle Ursache des Bürgerkriegs (1861–65). Der Norden industrialisiert, der Süden agrarisch — Unionsinteressen vs. Sklavenstaaten.` },
          { title: 'Eisenbahn und Westexpansion', content: `<strong>Transcontinental Railroad</strong> (1869): Erste Küste-zu-Küste-Verbindung. Gebaut von chinesischen Gastarbeitern im Westen, irischen Einwanderern im Osten.<br><br>Eisenbahn öffnete den <em>Wilden Westen</em> für Besiedlung, Landwirtschaft und Ressourcenabbau — und vernichtete die Lebensgrundlagen der indigenen Völker systematisch.` },
          { title: 'Robber Barons — Kapitalisten ohne Grenzen', content: `<ul style="margin:0 0 0 1.2rem;line-height:1.9;"><li><strong>John D. Rockefeller</strong> (Standard Oil): kontrollierte 1880 ~90 % der US-Ölraffinerien</li><li><strong>Andrew Carnegie</strong> (U.S. Steel): größter Stahlproduzent der Welt</li><li><strong>J.P. Morgan</strong>: Finanzierung der Industrie, Bankenmonopol</li><li><strong>Cornelius Vanderbilt</strong>: Eisenbahnimperium</li></ul>Monopole → Sherman Antitrust Act (1890) als erste staatliche Regulierung.` },
          { title: 'Einwanderung als Industriemotor', content: `Zwischen 1880 und 1920 kamen ~23 Millionen Menschen nach Amerika: Polen, Iren, Italiener, Ostjuden, Skandinavier.<br><br>Sie bildeten das industrielle Proletariat: Bergwerke (Pennsylvania), Schlachthöfe (Chicago), Stahlwerke (Pittsburgh). Upton Sinclairs <em>The Jungle</em> (1906) dokumentierte die Zustände.` },
        ])}
      </div>
    `;
  }

  _panelVergleich() {
    return `
      <div class="wim-category hidden" data-wim-cat="vergleich">
        ${renderTable({
          headers: ['Kategorie', 'England', 'Deutschland', 'USA'],
          rows: [
            ['Beginn Industrialisierung', '~1760', '~1835', '~1800 (Norden)'],
            ['Antriebsfaktor', 'Handel, Kolonien, Privat', 'Staat, Zollverein, Eisenbahn', 'Binnenmarkt, Einwanderung, Privat'],
            ['Leitbranche', 'Textil → Stahl', 'Schwer- und Chemieindustrie', 'Eisenbahn → Stahl → Öl'],
            ['Weltmarktanteil Stahl 1900', '~18 %', '~22 %', '~37 %'],
            ['Soziale Bewegung', 'Chartismus, Gewerkschaften', 'SPD, Gewerkschaften', 'AFL, Populisten'],
            ['Staatliche Rolle', 'Gering (Laissez-faire)', 'Stark (Bismarck, Preußen)', 'Anfangs gering, ab 1890 mehr'],
          ],
        })}
      </div>
    `;
  }

  init() { i18n.init(); initScrollReveal(); initInteractive(document); initWimTabs(document); }
}