// pages/projekte/lernzettel/faecher/geschichte/themen/gegenwart/klima-migration.js
// 5.4 — Klimawandel & globale Migration

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
const KLIMA_MIGRATION_TABS = [
  { key: 'klimapolitik', label: '🌍 Klimapolitik' },
  { key: 'migration',    label: '🚶 Migration' },
  { key: 'gerechtigkeit', label: '⚖️ Gerechtigkeit' },
];

export default class GeschichteKlimaMigration {
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
          <span>5.4 · Klima &amp; Migration</span>
        </nav>
        <h1 class="lz-sub-title">Klimawandel &amp;<br><em>globale Migration.</em></h1>
        <p class="lz-sub-desc">
          Die zwei größten globalen Herausforderungen des 21. Jahrhunderts —
          ihre Ursachen, Wechselwirkungen und politischen Antworten.
        </p>
        ${renderTags(['5.4', '21. Jh.', 'Klimawandel', 'Migration', 'Paris', 'Abitur 2026'])}
      </div>
    </section>

    <section class="lz-content-section">
      <div class="lz-section-wrap">
        ${renderSubhead('Überblick')}
        <h2 class="lz-h2 reveal">Verknüpfte Krisen</h2>
        ${renderInfobox({ type: 'blue', icon: 'fas fa-link', title: 'Klimawandel und Migration sind untrennbar', body: `Klimawandel verschärft Dürren, Überschwemmungen und Ressourcenkonflikte — und treibt Menschen zur Migration. Klimamigration ist eine der größten humanitären Herausforderungen des 21. Jahrhunderts. UNHCR schätzt: bis 2050 könnten 1,2 Milliarden Menschen klimabedingt vertrieben werden.` })}
        ${renderMerkboxGrid([
          { icon: 'fas fa-temperature-high', title: 'Globale Erwärmung', text: '+1,1 °C seit vorindustrieller Zeit (2023). Paris-Abkommen: Ziel < 2 °C, besser 1,5 °C. Aktueller Kurs: ~2,5–3 °C bis 2100 ohne drastische Maßnahmen.' },
          { icon: 'fas fa-water', title: 'Folgen des Klimawandels', text: 'Anstieg Meeresspiegel, Extremwetterereignisse, Dürren, Überflutungen, Artenschwund, Ernte- und Wasserverluste — besonders im Globalen Süden.' },
          { icon: 'fas fa-suitcase', title: 'Ursachen von Migration', text: 'Push-Faktoren: Krieg, Armut, Klimaextreme, politische Verfolgung. Pull-Faktoren: Sicherheit, wirtschaftliche Chancen, Familienangehörige. Klimamigration wächst.' },
          { icon: 'fas fa-balance-scale', title: 'Globale Gerechtigkeit', text: 'Industrieländer verursachten 80 % der historischen Emissionen — Entwicklungsländer leiden am stärksten. Klimagerechtigkeit als neues Gerechtigkeitsprinzip.' },
        ])}
      </div>
    </section>

    <section class="lz-content-section" style="padding-top:0;">
      <div class="lz-section-wrap">
        ${renderSubhead('Vertiefung')}
        <h2 class="lz-h2 reveal">Klimapolitik &amp; Migrationspolitik</h2>

        <nav class="wim-tabs" id="klima-tabs" aria-label="Klima & Migration">
          ${KLIMA_MIGRATION_TABS.map((t, i) => `
            <button class="wim-tab${i === 0 ? ' active' : ''}" data-wim="${t.key}">
              ${t.label}
            </button>`).join('')}
        </nav>

        ${this._panelKlimapolitik()}
        ${this._panelMigration()}
        ${this._panelGerechtigkeit()}

      </div>
    </section>

    <section class="lz-content-section" style="padding-top:0;">
      <div class="lz-section-wrap">
        ${renderSubhead('Chronologie')}
        <h2 class="lz-h2 reveal">Klimapolitik &amp; Migration</h2>
        ${renderVTimeline([
          { year: '1992', title: 'Rio-Konferenz',                    text: 'UNFCCC — erste globale Klimarahmenkonvention.' },
          { year: '1997', title: 'Kyoto-Protokoll',                  text: 'Verbindliche Ziele für Industrieländer.' },
          { year: '2009', title: 'Kopenhagen scheitert',             text: 'Diplomatisches Fiasko — kein neues Abkommen.' },
          { year: '2015', title: 'Paris-Abkommen',                   text: '196 Länder, 1,5 °C-Ziel, NDCs.' },
          { year: '2015', title: 'Migrationskrise Europa',           text: '1,3 Mio. Asylsuchende — EU-Solidarität bricht.' },
          { year: '2018', title: 'Fridays for Future',               text: 'Greta Thunberg — globale Jugendbewegung.' },
          { year: '2019', title: 'EU Green Deal',                    text: 'Klimaneutralität Europa 2050.' },
          { year: '2021', title: 'COP26 Glasgow',                    text: 'Kohleausstieg-Beschluss (verwässert); Methan-Ziele.' },
          { year: '2022', title: 'COP27 — Loss and Damage',          text: 'Fonds für Klimaschäden in ärmsten Ländern.' },
          { year: '2023', title: '1,5 °C erstmals überschritten',    text: 'Wärmstes Jahr seit Aufzeichnung.' },
        ])}
      </div>
    </section>

    <section class="lz-content-section" style="padding-top:0;">
      <div class="lz-section-wrap">
        ${renderPageNav({
          prev: { link: `${BASE}/themen/gegenwart/ukraine`,       label: '5.3 · Ukraine-Konflikt' },
          next: { link: `${BASE}/themen/gegenwart/demokratie`,    label: '5.5 · Demokratie & Autoritarismus' },
        }, BASE)}
      </div>
    </section>

    ${footerHTML(this.router)}
  `; }

  _panelKlimapolitik() {
    return `
      <div class="wim-category" data-wim-cat="klimapolitik">
        ${renderTable({
          headers: ['Vertrag / Ereignis', 'Jahr', 'Inhalt', 'Bewertung'],
          rows: [
            ['Rio-Konferenz (UNCED)', '1992', 'Rahmenkonvention Klimawandel (UNFCCC). Erste internationale Klimavereinbarung.', 'Historisch; aber keine verbindlichen Ziele'],
            ['Kyoto-Protokoll', '1997', 'Verbindliche Reduktionsziele für Industrieländer (−5 % bis 2012).', 'USA nie ratifiziert. Kein Schwellenländer-Einschluss.'],
            ['Kopenhagener Klimagipfel', '2009', 'Scheitert an Uneinigkeit. Maximal 2 °C als Ziel.', 'Diplomatisches Fiasko'],
            ['Pariser Abkommen (COP21)', '2015', 'Erstmals alle Länder. 1,5 °C-Ziel. NDCs (national festgelegte Beiträge).', 'Historisch — aber Ziele rechtlich nicht bindend'],
            ['EU Green Deal', '2019', 'Klimaneutralität Europa bis 2050. Fit for 55 Paket (−55 % bis 2030).', 'Ambitioniertestes Klimapaket weltweit'],
            ['Fridays for Future', 'ab 2018', 'Greta Thunbergs Schulstreik löst globale Jugendbewegung aus.', 'Neue politische Kraft; Druck auf Regierungen'],
          ],
        })}
        ${renderInfobox({ type: '', icon: 'fas fa-lightbulb', title: 'Kippelemente', body: `Das Klimasystem enthält <strong>Kippelemente</strong> (<em>tipping points</em>): Ab bestimmten Temperaturen können irreversible Veränderungen einsetzen — z. B. Abschmelzen des Grönlandeises, Kollaps des Amazonas-Regenwalds, Auftauen von Permafrostböden (→ Methanfreisetzung). Kippelemente könnten zu einer selbstverstärkenden Erwärmung führen.` })}
      </div>
    `;
  }

  _panelMigration() {
    return `
      <div class="wim-category hidden" data-wim-cat="migration">
        ${renderAccordion([
          { title: 'Typen von Migration', content: `<ul style="margin:0 0 0 1.2rem;line-height:1.9;"><li><strong>Flüchtlinge</strong> (Genfer Konvention 1951): Verfolgung wegen Rasse, Religion, Nationalität, politischer Überzeugung. Recht auf Asyl.</li><li><strong>Subsidiärer Schutz</strong>: Gefahr im Herkunftsland, aber kein individueller Verfolgungsnachweis</li><li><strong>Wirtschaftsmigration</strong>: Suche nach besserem Leben — kein Asylrecht, aber eigene Regelungen</li><li><strong>Klimamigration</strong>: Noch kein eigenständiger Rechtsstatus — rechtliche Lücke</li></ul>` },
          { title: 'Zahlen und Fakten', content: `UNHCR 2023: ~117 Millionen Menschen weltweit auf der Flucht (Rekord). Davon: ~37 Mio. Flüchtlinge, ~67 Mio. Binnenvertriebene.<br><br>80 % der Flüchtlinge weltweit werden von Entwicklungsländern aufgenommen. Pakistan, Iran, Kolumbien haben mehr Flüchtlinge als alle EU-Länder zusammen.` },
          { title: 'Integration und gesellschaftliche Debatte', content: `Migration ist wirtschaftlich notwendig (demographischer Wandel in Deutschland), aber politisch umstritten.<br><br><strong>Pro-Argumente:</strong> Fachkräftemangel, demographisches Gleichgewicht, kulturelle Bereicherung.<br><strong>Contra-Argumente:</strong> Integrationsprobleme, Wohnungsknappheit, Belastung sozialer Systeme, Sicherheitsbedenken.<br><br>Kernfrage: Geordnete Migration vs. Kontrollverlust — wie findet eine offene Gesellschaft das richtige Gleichgewicht?` },
        ])}
      </div>
    `;
  }

  _panelGerechtigkeit() {
    return `
      <div class="wim-category hidden" data-wim-cat="gerechtigkeit">
        ${renderCompare({
          titleA: 'Industrieländer (Global North)', titleB: 'Entwicklungsländer (Global South)',
          listA: ['~80 % der historischen CO₂-Emissionen', 'Ressourcen für Anpassung und Technologie', 'Fordern Emissionsreduktion auch von Entwicklungsländern', 'Versprechen Klimafinanzierung: 100 Mrd. $ / Jahr (oft nicht erfüllt)', 'Profitieren von globalem Handelssystem'],
          listB: ['Wenig historische Verantwortung für Klimawandel', 'Am stärksten betroffen: Hitze, Dürre, Überschwemmungen', 'Benötigen Entwicklungsrecht: Energie für Wohlstand', 'Forderung nach Klimareparationen (<em>Loss and Damage</em>)', 'Entkolonialisierung: Entwicklung ohne fossile Abhängigkeit kostspielig'],
        })}
        ${renderInfobox({ type: 'blue', icon: 'fas fa-handshake', title: 'Loss and Damage — COP27 (2022)', body: `Erstmals beschlossen: ein internationaler Fonds für <em>Loss and Damage</em> — Entschädigungen für klimabedingte Schäden in besonders betroffenen Ländern.<br><br>Historischer Kompromiss — aber konkrete Finanzierung bleibt unklar.` })}
      </div>
    `;
  }

  init() { i18n.init(); initScrollReveal(); initInteractive(document); initWimTabs(document); }
}