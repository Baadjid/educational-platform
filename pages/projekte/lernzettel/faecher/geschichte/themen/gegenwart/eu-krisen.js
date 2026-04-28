// pages/projekte/lernzettel/faecher/geschichte/themen/gegenwart/eu-krisen.js
// 5.2 — Krisen der Europäischen Union

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
const EU_KRISEN_TABS = [
  { key: 'eurokrise',   label: '💶 Eurokrise' },
  { key: 'brexit',      label: '🌍 Brexit' },
  { key: 'migration',   label: '🚪 Migrationskrise' },
  { key: 'eu_chancen',  label: '⚖️ EU — Chancen & Grenzen' },
];

export default class GeschichteEUKrisen {
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
          <span>5.2 · EU-Krisen</span>
        </nav>
        <h1 class="lz-sub-title">Krisen der<br><em>Europäischen Union.</em></h1>
        <p class="lz-sub-desc">
          Eurokrise, Brexit, Migrationskrise, Rechtspopulismus — das Europäische
          Projekt unter Druck und seine Antworten.
        </p>
        ${renderTags(['5.2', '2008–heute', 'EU', 'Brexit', 'Eurokrise', 'Abitur 2026'])}
      </div>
    </section>

    <section class="lz-content-section">
      <div class="lz-section-wrap">
        ${renderSubhead('Überblick')}
        <h2 class="lz-h2 reveal">Die EU im Stresstest</h2>
        ${renderMerkboxGrid([
          { icon: 'fas fa-euro-sign', title: 'Eurokrise (2010–15)', text: 'Staatsverschuldungskrise in Griechenland, Portugal, Irland, Spanien. Euro-Zone nahe am Zerfall. Rettungspakete, Austerität, politische Radikalisierung.' },
          { icon: 'fas fa-person-walking-luggage', title: 'Migrationskrise (2015)', text: '1,3 Mio. Asylsuchende in Europa 2015, hauptsächlich aus Syrien, Afghanistan, Afrika. Dublin-System kollabierte. Grenzschließungen, EU-Solidarität zerbrochen.' },
          { icon: 'fas fa-flag', title: 'Brexit (2016–2020)', text: 'Großbritannien stimmt für EU-Austritt (52:48). Erster Austritt eines Mitgliedstaats. Handelsschwierigkeiten, Nordirland-Problem. Warnung und Beispiel zugleich.' },
          { icon: 'fas fa-person', title: 'Rechtspopulismus', text: 'Aufstieg EU-kritischer Parteien: FPÖ (Österreich), RN (Frankreich), PiS (Polen), Fidesz (Ungarn). Angriff auf Rechtsstaatlichkeit als systemische Bedrohung.' },
        ])}
      </div>
    </section>

    <section class="lz-content-section" style="padding-top:0;">
      <div class="lz-section-wrap">
        ${renderSubhead('Vertiefung')}
        <h2 class="lz-h2 reveal">EU-Krisen im Detail</h2>

        <nav class="wim-tabs" id="eu-tabs" aria-label="EU-Krisen">
          ${EU_KRISEN_TABS.map((t, i) => `
            <button class="wim-tab${i === 0 ? ' active' : ''}" data-wim="${t.key}">
              ${t.label}
            </button>`).join('')}
        </nav>

        ${this._panelEurokrise()}
        ${this._panelBrexit()}
        ${this._panelMigration()}
        ${this._panelEuChancen()}

      </div>
    </section>

    <section class="lz-content-section" style="padding-top:0;">
      <div class="lz-section-wrap">
        ${renderSubhead('Chronologie')}
        <h2 class="lz-h2 reveal">Krisenchronologie</h2>
        ${renderVTimeline([
          { year: '2007–08',    title: 'Weltfinanzkrise',                   text: 'Bankenkrise in USA breitet sich weltweit aus — Staatsschulden explodieren.' },
          { year: '2010',       title: 'Griechenland: erstes Hilfspaket',   text: '110 Mrd. Euro + Austerität. Eurokrise beginnt.' },
          { year: 'Jul. 2012',  title: 'Draghis „Whatever it takes"',      text: 'EZB-Signal — Euro gerettet, Schuldenkrise eingedämmt.' },
          { year: '2015',       title: 'Syriza gewinnt in Griechenland',    text: 'Anti-Austeritäts-Regierung — drittes Hilfspaket trotzdem.' },
          { year: '2015',       title: 'Migrationskrise / Merkel',          text: '1,3 Mio. Asylsuchende in Europa. „Wir schaffen das."' },
          { year: 'Jun. 2016',  title: 'Brexit-Referendum',                 text: 'UK stimmt für Austritt. Cameron tritt zurück.' },
          { year: '2017',       title: 'Macron gewinnt gegen Le Pen',       text: 'Pro-EU-Kandidat siegt — EU-Skepsis vorerst gestoppt.' },
          { year: '2019',       title: 'Boris Johnson — Brexit-Deal',       text: 'Nordirland-Protokoll als Kompromiss.' },
          { year: 'Jan. 2020',  title: 'UK verlässt EU',                   text: 'Erster Austritt eines EU-Mitglieds.' },
          { year: '2022',       title: 'Ukraine-Krieg + Energiekrise',      text: 'EU-Solidarität gefordert: Waffen, Sanktionen, Flüchtlinge.' },
        ])}
      </div>
    </section>

    <section class="lz-content-section" style="padding-top:0;">
      <div class="lz-section-wrap">
        ${renderPageNav({
          prev: { link: `${BASE}/themen/gegenwart/terrorismus`,   label: '5.1 · Terrorismus' },
          next: { link: `${BASE}/themen/gegenwart/ukraine`,       label: '5.3 · Ukraine-Konflikt' },
        }, BASE)}
      </div>
    </section>

    ${footerHTML(this.router)}
  `; }

  _panelEurokrise() {
    return `
      <div class="wim-category" data-wim-cat="eurokrise">
        ${renderAccordion([
          { title: 'Ursachen der Eurokrise', content: `Nach der Weltfinanzkrise 2008 wurden Staatsschulden vieler Euro-Länder untragbar.<ul style="margin:.5rem 0 0 1.2rem;line-height:1.9;"><li>Griechenland: Jahrelange Haushaltsmanipulation aufgedeckt</li><li>Irland: Rettung des Bankensystems mit Staatsgeldern</li><li>Spanien, Portugal: Immobilienblasen geplatzt</li><li>Strukturelles Problem: Währungsunion ohne Fiskalunion — gleiche Geldpolitik, ungleiche Wirtschaften</li></ul>` },
          { title: 'Rettungsmechanismen: ESM und Troika', content: `EU und IWF retteten mit Hilfspaketen (insgesamt ~500 Mrd. Euro):<ul style="margin:.5rem 0 0 1.2rem;line-height:1.9;"><li><strong>Troika</strong> (EU-Kommission, EZB, IWF) diktierten strikte Spar- und Reformauflagen</li><li>Griechenland: 3 Hilfspakete (2010, 2012, 2015), massive Rezession, ~25 % BIP-Verlust</li><li>EZB-Chef Draghi: <em>„Whatever it takes"</em> (Juli 2012) — Märkte beruhigt</li><li>ESM (Europäischer Stabilitätsmechanismus) als permanenter Rettungsschirm</li></ul>` },
          { title: 'Austerität: Erfolg oder Scheitern?', content: `<strong>Pro Austerität:</strong> Haushaltskonsolidierung war notwendig, langfristige Stabilität.<br><strong>Contra:</strong> Soziale Kosten enorm (Massenarbeitslosigkeit ~25 % in Griechenland/Spanien), wirtschaftliche Depression verlängert, politische Radikalisierung (Syriza, Podemos).<br><br>Nobelpreisträger Stiglitz und Krugman kritisierten Austeritätspolitik als prokonjunkturell — in Rezessionen sei Sparen falsch.` },
        ])}
      </div>
    `;
  }

  _panelBrexit() {
    return `
      <div class="wim-category hidden" data-wim-cat="brexit">
        ${renderAccordion([
          { title: 'Referendum und Ergebnis (Juni 2016)', content: `David Cameron versprach Referendum, um eurokritische Tories zu besänftigen. Kampagne: Leave (Boris Johnson, Nigel Farage) vs. Remain.<br><br>Ergebnis: 51,9 % Leave, 48,1 % Remain. Auffällig: England und Wales: Leave; Schottland und Nordirland: Remain.<br><br>Cameron trat zurück. Theresa May, Boris Johnson, Chaos im Unterhaus. Austritt: 31. Januar 2020.` },
          { title: 'Folgen des Brexit', content: `<ul style="margin:0 0 0 1.2rem;line-height:1.9;"><li>Handelsbarrieren: Non-tariff barriers, Zoll, Bürokratie</li><li>Nordirland-Problem: Grenze zwischen EU und UK mitten durch Irland (Karfreitagsabkommen)</li><li>Schottland: Erneuertes Unabhängigkeitsstreben</li><li>Fachkräfte-Exodus: EU-Bürger verlassen UK</li><li>Wirtschaftlich: UK wächst langsamer als verbleibende EU-Länder</li></ul>` },
          { title: 'Lehren für die EU', content: `Brexit zeigte: EU-Mitgliedschaft wird von Teilen der Bevölkerung als Bedrohung wahrgenommen (Souveränität, Einwanderung, Bürokratie).<br><br>Aber: Kein weiterer Austritt bisher. Brexit-Schmerzen schreckten andere ab. <em>Italexit</em>, <em>Frexit</em>: in Debatten, nicht in Referenden.` },
        ])}
      </div>
    `;
  }

  _panelMigration() {
    return `
      <div class="wim-category hidden" data-wim-cat="migration">
        ${renderAccordion([
          { title: 'Ursachen und Zahlen (2015)', content: `Syrien-Bürgerkrieg, Afghanistan, Eritrea: 1,3 Mio. Asylsuchende in Europa 2015. Route: Türkei → Ägäis → Griechenland → Balkan → Deutschland/Schweden.<br><br>Merkels Entscheidung: <em>„Wir schaffen das"</em> — offene Grenzen im Sommer 2015. Deutschland nahm ~890.000 Menschen auf (2015).` },
          { title: 'Dublin-System und EU-Solidarität', content: `Dublin-III-Verordnung: Asylantrag im ersten EU-Land. System kollabierte, weil Griechenland und Italien überfordert waren.<br><br>EU-Umverteilungsquoten: Von 120.000 beschlossenen Umsiedlungen wurden nur ~35.000 tatsächlich verteilt. Polen, Ungarn, Tschechien, Slowakei verweigerten.` },
          { title: 'Politische Folgen', content: `<ul style="margin:0 0 0 1.2rem;line-height:1.9;"><li>Aufstieg rechts-populistischer Parteien in ganz Europa</li><li>AfD (Deutschland): Einzug Bundestag 2017</li><li>Orbán (Ungarn): „Festung Europa"-Rhetorik, Grenzzaun</li><li>EU-Türkei-Deal (2016): 6 Mrd. Euro Zahlungen für Aufnahme in Türkei</li><li>Dauerhafte Diskussion über Grenzschutz, Asylrecht, Integration</li></ul>` },
        ])}
      </div>
    `;
  }

  _panelEuChancen() {
    return `
      <div class="wim-category hidden" data-wim-cat="eu_chancen">
        ${renderCompare({
          titleA: 'Errungenschaften der EU', titleB: 'Kritik und Grenzen',
          listA: ['75 Jahre Frieden in Westeuropa — historisch einmalig', 'Gemeinsamer Binnenmarkt: 450 Mio. Menschen, freier Waren-/Personenverkehr', 'Euro: Stabilität für ~20 Länder', 'Rechtsstaatlichkeit als gemeinsamer Standard', 'Klimapolitik: Green Deal als globaler Vorreiter', 'Gemeinsame Reaktion auf COVID (Recovery Fund)'],
          listB: ['Demokratiedefizit: EU-Kommission nicht direkt gewählt', 'Bürokratie und Intransparenz', 'Ungleiche Wirtschaftsstärke zerstört Solidarität', 'Nationalinteressen dominieren über Gemeinschaftsinteressen', 'Außen- und Sicherheitspolitik ohne Einheit', 'Rechtsstaatskrise: Polen und Ungarn hebeln Grundwerte aus'],
        })}
      </div>
    `;
  }

  init() { i18n.init(); initScrollReveal(); initInteractive(document); initWimTabs(document); }
}