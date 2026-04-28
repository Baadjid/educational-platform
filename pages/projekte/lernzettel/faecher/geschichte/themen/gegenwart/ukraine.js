// pages/projekte/lernzettel/faecher/geschichte/themen/gegenwart/ukraine.js
// 5.3 — Ukraine-Konflikt (2014–heute)

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
const UKRAINE_TABS = [
  { key: 'euromaidan', label: '🌻 Euromaidan & Krim' },
  { key: 'angriff',    label: '⚔️ Angriffskrieg 2022' },
  { key: 'einordnung', label: '🌐 Einordnung' },
];

export default class GeschichteUkraine {
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
          <span>5.3 · Ukraine-Konflikt</span>
        </nav>
        <h1 class="lz-sub-title">Ukraine-<br><em>Konflikt.</em></h1>
        <p class="lz-sub-desc">
          Von der Krim-Annexion 2014 bis zum russischen Angriffskrieg 2022 —
          Hintergründe, Verlauf und globale Bedeutung.
        </p>
        ${renderTags(['5.3', '2014–heute', 'Ukraine', 'Russland', 'NATO', 'Abitur 2026'])}
      </div>
    </section>

    <section class="lz-content-section">
      <div class="lz-section-wrap">
        ${renderSubhead('Überblick')}
        <h2 class="lz-h2 reveal">Hintergründe des Konflikts</h2>
        ${renderMerkboxGrid([
          { icon: 'fas fa-map', title: 'Geopolitik', text: 'Ukraine als Pufferzone zwischen NATO-Europa und Russland. Putin betrachtet NATO-Osterweiterung als existentielle Bedrohung. Ukraine will EU- und NATO-Mitgliedschaft.' },
          { icon: 'fas fa-history', title: 'Geschichte', text: 'Kievan Rus als gemeinsamer Ursprung Russlands und der Ukraine. Putin: „Ukrainer und Russen sind ein Volk." Ukraine: eigenständige Nation seit Jahrhunderten.' },
          { icon: 'fas fa-oil-well', title: 'Wirtschaft', text: 'Ukraine: wichtige Getreidekammer, Transitland für russisches Gas nach Europa. Krim: strategisch (Schwarzmeerflotte), Rohstoffe. Donbass: Kohle und Stahl.' },
          { icon: 'fas fa-people-group', title: 'Innenpolitik', text: 'Ukraine gespalten: Russischsprachige Ostukraine vs. ukrainischsprachiger Westen. Korrumpierte Oligarchenstrukturen. Euromaidan als proeuropäischer Wendepunkt.' },
        ])}
      </div>
    </section>

    <section class="lz-content-section" style="padding-top:0;">
      <div class="lz-section-wrap">
        ${renderSubhead('Vertiefung')}
        <h2 class="lz-h2 reveal">Konflikt im Detail</h2>

        <nav class="wim-tabs" id="ukraine-tabs" aria-label="Ukraine-Konflikt">
          ${UKRAINE_TABS.map((t, i) => `
            <button class="wim-tab${i === 0 ? ' active' : ''}" data-wim="${t.key}">
              ${t.label}
            </button>`).join('')}
        </nav>

        ${this._panelEuromaidan()}
        ${this._panelAngriff()}
        ${this._panelEinordnung()}

      </div>
    </section>

    <section class="lz-content-section" style="padding-top:0;">
      <div class="lz-section-wrap">
        ${renderSubhead('Chronologie')}
        <h2 class="lz-h2 reveal">2013–2024</h2>
        ${renderVTimeline([
          { year: 'Nov. 2013',   title: 'Euromaidan beginnt',              text: 'Janukowitsch lehnt EU-Abkommen ab — Proteste.' },
          { year: 'Feb. 2014',   title: 'Janukowitsch flieht',             text: 'Übergangsregierung — Russland spricht von Putsch.' },
          { year: 'Mrz. 2014',   title: 'Krim-Annexion',                   text: 'Völkerrechtsbruch — Sanktionen, aber kein Militär.' },
          { year: 'Apr. 2014',   title: 'Donbass-Krieg beginnt',           text: 'Separatisten mit russischer Unterstützung.' },
          { year: 'Feb. 2015',   title: 'Minsk II',                        text: 'Waffenstillstand — nie vollständig umgesetzt.' },
          { year: 'Apr. 2019',   title: 'Selenskyj gewinnt Wahl',          text: '73 % — Anti-Establishment-Kandidat, Komiker.' },
          { year: '24.02.2022',  title: 'Russlands Angriffskrieg',         text: 'Einmarsch auf breiter Front. Kiew-Angriff scheitert.' },
          { year: 'Apr. 2022',   title: 'Butscha-Massaker aufgedeckt',     text: 'Kriegsverbrechen — internationale Empörung.' },
          { year: 'Mrz. 2023',   title: 'ICC-Haftbefehl gegen Putin',      text: 'Deportation ukrainischer Kinder als Kriegsverbrechen.' },
          { year: '2023–24',     title: 'Gegenoffensive & Stellungskrieg', text: 'Frontlinie kaum verändert — Erschöpfung auf beiden Seiten.' },
        ])}
      </div>
    </section>

    <section class="lz-content-section" style="padding-top:0;">
      <div class="lz-section-wrap">
        ${renderPageNav({
          prev: { link: `${BASE}/themen/gegenwart/eu-krisen`,          label: '5.2 · EU-Krisen' },
          next: { link: `${BASE}/themen/gegenwart/klima-migration`,    label: '5.4 · Klima & Migration' },
        }, BASE)}
      </div>
    </section>

    ${footerHTML(this.router)}
  `; }

  _panelEuromaidan() {
    return `
      <div class="wim-category" data-wim-cat="euromaidan">
        ${renderAccordion([
          { title: 'Euromaidan (November 2013 – Februar 2014)', content: `Präsident Janukowitsch lehnte EU-Assoziierungsabkommen ab (auf Druck Moskaus). Proteste auf dem Maidan Nesaleschnosti in Kiew.<br><br>Feb. 2014: Scharfschützen töteten Demonstranten (~100 Tote). Janukowitsch floh nach Russland. Übergangsregierung pro-westlich.<br><br>Russische Einschätzung: westlich gesteuerter Putsch. Westliche Einschätzung: demokratische Revolution.` },
          { title: 'Annexion der Krim (März 2014)', content: `Russische Truppen (ohne Hoheitsabzeichen, „Grüne Männchen") besetzten Krim. Umstrittenes Referendum: angeblich 96,8 % für Russland. 27. März 2014: Russland annektiert Krim formal.<br><br>Völkerrechtlich: klarer Verstoß gegen UN-Charta und Budapester Memorandum (1994). Ukraine hatte Atomwaffen aufgegeben gegen Souveränitätsgarantie von Russland, USA, UK.<br><br>Reaktion West: Sanktionen, aber kein Militäreinsatz.` },
          { title: 'Krieg im Donbass (2014–2022)', content: `Pro-russische Separatisten riefen „Volksrepubliken" Donezk und Luhansk aus. Russland lieferte Waffen, schickte Soldaten (ohne Insignien).<br><br>Minsk-Abkommen I (2014) und II (2015): Waffenstillstand, nie vollständig umgesetzt. ~14.000 Tote bis 2022. Frontlinie eingefroren — aber kein Frieden.` },
        ])}
      </div>
    `;
  }

  _panelAngriff() {
    return `
      <div class="wim-category hidden" data-wim-cat="angriff">
        ${renderInfobox({ type: 'warning', icon: 'fas fa-tank', title: '24. Februar 2022 — Russlands Angriffskrieg', body: `Russland startete eine „Spezialoperation" auf breiter Front: Norden (Kiew), Osten (Donbass), Süden (Cherson, Saporischschja). Erste Phase: Blitzkrieg-Versuch auf Kiew scheitert. Zweite Phase: Fokus auf Donbass und Süden.` })}
        ${renderAccordion([
          { title: 'Putins Begründungen', content: `<ul style="margin:0 0 0 1.2rem;line-height:1.9;"><li>„Entnazifizierung" der Ukraine (unbegründet)</li><li>„Entmilitarisierung" — Verhinderung NATO-Beitritt</li><li>Schutz russischsprachiger Bevölkerung im Donbass</li><li>Historisches Narrativ: Ukraine sei kein eigenständiger Staat</li></ul>Völkerrechtliche Bewertung: Angriffskrieg ist das schwerste Verbrechen im Völkerrecht. UN-Generalversammlung verurteilte mit 141:5 Stimmen.` },
          { title: 'Westliche Reaktionen', content: `<ul style="margin:0 0 0 1.2rem;line-height:1.9;"><li>Beispiellose Sanktionspakete gegen Russland (SWIFT-Ausschluss, Ölembargo)</li><li>Waffenlieferungen: USA (~75 Mrd. $), Deutschland (zunächst zögerlich, dann Gepard, Leopard 2)</li><li>NATO-Erweiterung: Finnland (2023) und Schweden (2024) beigetreten</li><li>Energiesicherheit: Europa unabhängig von russischem Gas (LNG, Erneuerbare)</li><li>ICC-Haftbefehl gegen Putin (März 2023)</li></ul>` },
          { title: 'Bedeutung für die Weltordnung', content: `Der Ukraine-Krieg beendet das „Ende der Geschichte" (Fukuyama):<ul style="margin:0 0 0 1.2rem;line-height:1.9;"><li>Rückkehr des Territoriums als Kriegszweck — im 21. Jahrhundert</li><li>Erschütterung der regelbasierten internationalen Ordnung</li><li>Globaler Süden: zwiespältige Haltung (viele enthielten sich bei UN-Abstimmungen)</li><li>Europa investiert wieder massiv in Verteidigung</li><li>China beobachtet Taiwan-Präzedenz</li></ul>` },
        ])}
      </div>
    `;
  }

  _panelEinordnung() {
    return `
      <div class="wim-category hidden" data-wim-cat="einordnung">
        ${renderCompare({
          titleA: 'Russische Sichtweise', titleB: 'Westliche/Ukrainische Sichtweise',
          listA: ['NATO-Osterweiterung = Sicherheitsbedrohung', 'Ukraine = künstlicher Staat, historisch Russland zugehörig', 'Euromaidan = westlicher Putsch', 'Russischsprachige Bevölkerung schutzbedürftig', 'Westliche Sanktionen = wirtschaftlicher Krieg'],
          listB: ['Jeder Staat hat das Recht, Bündnisse zu wählen (UN-Charta)', 'Ukraine = eigenständige Nation mit eigener Geschichte und Sprache', 'Euromaidan = demokratische Volkswahl gegen Korruption', 'Russische Minderheiten in Ukraine hatten Rechte', 'Angriffskrieg verletzt Grundnormen des Völkerrechts'],
        })}
        ${renderInfobox({ type: 'blue', icon: 'fas fa-lightbulb', title: 'Für das Abitur', body: `Der Ukraine-Krieg ist das wichtigste geopolitische Ereignis seit Ende des Kalten Krieges. Relevante Kategorien: Völkerrecht, NATO-Russland-Verhältnis, europäische Sicherheitsarchitektur, globale Ordnung.<br><br>Verbindung zu Lerneinheiten: Ende Kalter Krieg (Westfälisches System), Terrorismus (regelbasierte Ordnung), Demokratie (autoritäre Herausforderung).` })}
      </div>
    `;
  }

  init() { i18n.init(); initScrollReveal(); initInteractive(document); initWimTabs(document); }
}