// pages/projekte/lernzettel/faecher/spanisch/themen/landeskunde/spanien-geschichte.js
// 3.1 — España: Historia & Política

import { initScrollReveal } from '../../../../../../../shared/js/index.js';
import { footerHTML }        from '../../../../../../../components/Footer.js';
import { i18n }              from '../../../../../../../shared/js/i18n.js';
import { initWimTabs }       from '../../../../../../../shared/js/wim-tabs.js';
import {
  ensureComponentsCSS, renderInfobox, renderTable,
  renderSubhead, renderTags, renderAccordion,
  renderMerkboxGrid, initInteractive,
} from '../../../../js/components/components.js';
import { COLOR, COLOR_RGB, BASE } from '../../spanisch.js';
import { renderPageNav } from '../../../../js/components/subnav.js';

function ej(es, de) {
  return `<div class="lz-es-ejemplo">
    <span class="lz-es-ejemplo-es">«${es}»</span>
    <span class="lz-es-ejemplo-de">${de}</span>
  </div>`;
}

const TABS = [
  { key: 'guerra',      label: '① Bürgerkrieg'   },
  { key: 'dictadura',   label: '② Franco-Diktatur'},
  { key: 'transicion',  label: '③ Transición'     },
  { key: 'democracia',  label: '④ Demokratie'     },
];

export default class Spanisch_Spanien_Geschichte {
  constructor(router) { this.router = router; }

  render() {
    ensureComponentsCSS();
    [
      ['lernzettel.css', 'pages/projekte/lernzettel/styles/lernzettel.css'],
      ['spanisch.css',   'pages/projekte/lernzettel/faecher/spanisch/spanisch.css'],
    ].forEach(([id, href]) => {
      if (!document.querySelector(`link[href*="${id}"]`)) {
        const l = document.createElement('link'); l.rel = 'stylesheet'; l.href = href;
        document.head.appendChild(l);
      }
    });
    const el = document.createElement('div');
    el.className = 'page page-spanisch page-spanisch-sub';
    el.style.setProperty('--lz-accent', COLOR);
    el.style.setProperty('--lz-accent-rgb', COLOR_RGB);
    el.innerHTML = this._html();
    return el;
  }

  _html() { return `
    <section class="lz-sub-hero" style="--kap-color:${COLOR};--kap-color-rgb:${COLOR_RGB};">
      <div class="lz-sub-hero-inner">
        <div class="lz-sub-hero-orb" aria-hidden="true"></div>
        <div class="lz-sub-breadcrumb">
          <button data-link="${BASE}" class="lz-bread-link">Spanisch</button>
          <i class="fas fa-chevron-right"></i><span>Landeskunde</span>
          <i class="fas fa-chevron-right"></i><span>3.1 España: Historia</span>
        </div>
        <h1 class="lz-sub-title">España: Historia —<br><em>Geschichte & Politik</em></h1>
        <p class="lz-sub-desc">
          Bürgerkrieg 1936–39 · Franco-Diktatur · La Transición ·
          Demokratie & Verfassung 1978 · Spanien heute
        </p>
        ${renderTags(['3.1', 'España', 'Historia', 'Franco', 'Transición', 'Landeskunde', 'Abitur 2026'])}
      </div>
    </section>

    <section class="lz-content-section">
      <div class="lz-section-wrap">

        ${renderSubhead('Chronologie')}
        <h2 class="lz-h2 reveal">Spanische Geschichte — Überblick</h2>
        <p class="lz-prose reveal">Die spanische Zeitgeschichte ist ein zentrales Abiturthema BW — besonders die Diktatur, die Transición und ihre Spuren in der heutigen Gesellschaft (Erinnerungskultur, Regionalismus, Demokratieentwicklung).</p>

        ${renderTable({
          headers: ['Zeitraum', 'Ereignis / Phase', 'Bedeutung'],
          rows: [
            ['1931–1936', 'Segunda República', 'Erste funktionierende Republik Spaniens · Reformen in Bildung, Kirche, Landwirtschaft'],
            ['1936',      'Militärputsch (18. Juli)', 'Franco und Generäle putschen gegen die Republik · Beginn des Bürgerkriegs'],
            ['1936–1939', 'Guerra Civil Española', 'Republikanische Regierung vs. Nationalisten (Franco) · ca. 500.000 Tote'],
            ['1939',      'Ende des Bürgerkriegs', 'Franco siegt · Exil hunderttausender Republikaner · Beginn der Diktatur'],
            ['1939–1975', 'Dictadura franquista', '36 Jahre Diktatur · Repression, Zensur, Unterdrückung regionaler Identitäten'],
            ['1959–1973', 'El desarrollismo', 'Wirtschaftswunder · Spanien öffnet sich · Tourismus und Industrie wachsen'],
            ['1975',      'Tod Francos (20. Nov.)', 'Beginn der Transición · Juan Carlos I. wird König'],
            ['1975–1982', 'La Transición', 'Übergang zur Demokratie · Legalisierung von Parteien und Gewerkschaften'],
            ['1977',      'Erste freie Wahlen', 'Demokratische Wahlen seit 1936 · Adolfo Suárez (UCD) gewinnt'],
            ['1978',      'Constitución Española', 'Neue demokratische Verfassung · Grundlage der modernen Demokratie'],
            ['1981',      'Intentona golpista (23-F)', 'Gescheiterter Putschversuch Tejeros im Parlament'],
            ['1982',      'PSOE-Wahlsieg (Felipe González)', 'Konsolidierung der Demokratie · Modernisierung Spaniens'],
            ['1986',      'Beitritt zur EG', 'Spanien tritt der Europäischen Gemeinschaft bei'],
            ['1992',      'Olympia Barcelona + EXPO Sevilla', 'Spanien präsentiert sich der Welt'],
            ['2004–heute','Moderne Demokratie', 'Mehrere Regierungswechsel · Wirtschaftskrise 2008 · Katalonien-Konflikt'],
          ],
          highlight: [4, 6, 8],
        })}

        <nav class="wim-tabs" id="histTabs" aria-label="Geschichte-Kategorien">
          ${TABS.map((t, i) => `
            <button class="wim-tab${i === 0 ? ' active' : ''}" data-wim="${t.key}">${t.label}</button>`).join('')}
        </nav>

        <!-- ① Bürgerkrieg -->
        <div class="wim-category" data-wim-cat="guerra">
          <h3 class="lz-h3">La Guerra Civil Española (1936–1939)</h3>

          ${renderTable({
            headers: ['Aspekt', 'Republikaner (Bando republicano)', 'Nationalisten (Bando nacional)'],
            rows: [
              ['Unterstützer',    'Arbeiter, Bauern, Intellektuelle, Kommunisten, Sozialisten, Anarchisten', 'Militär, Großgrundbesitzer, Kirche, Faschisten'],
              ['Internationale Hilfe', 'Sowjetunion · Internationale Brigaden (35.000 Freiwillige)', 'Nazi-Deutschland (Legion Cóndor) · Faschistisches Italien'],
              ['Hauptereignisse', 'Verteidigung Madrids ("¡No pasarán!") · Belagerung von Bilbao', 'Bombardierung Guernicas (26.4.1937) · Fall Barcelonas (Jan. 1939)'],
              ['Folgen',          'Exil hunderttausender Republikaner (México, Frankreich, UdSSR)', 'Machtübernahme Francos · Beginn der Diktatur'],
            ],
          })}

          ${renderInfobox({ type: 'blue', icon: 'fas fa-palette', title: 'Guernica — Picassos Antikriegsbild (1937)',
            body: `Pablo Picasso malte <em>Guernica</em> als Reaktion auf die Bombardierung der baskischen Stadt durch die deutsche Legion Cóndor am 26. April 1937. Das Bild wurde zum Symbol gegen Krieg und Faschismus.<br>
                   <strong>Vokabular:</strong> el bombardeo · las víctimas civiles · el símbolo · la denuncia artística · la memoria histórica` })}

          ${renderMerkboxGrid([
            {
              icon: 'fas fa-users',
              title: 'Schlüsselbegriffe Bürgerkrieg',
              text: `<em>la República</em> · <em>los nacionales / franquistas</em> · <em>las Brigadas Internacionales</em> · <em>el exilio</em> · <em>la represión</em> · <em>los refugiados</em> · <em>la memoria histórica</em>`,
            },
            {
              icon: 'fas fa-quote-left',
              title: '¡No pasarán!',
              text: `Kampfruf der Verteidiger Madrids (1936), gesprochen von Dolores Ibárruri (<em>La Pasionaria</em>). Steht für den Widerstand gegen den Faschismus — heute noch Symbol für antifaschistische Bewegungen weltweit.`,
            },
          ])}
        </div>

        <!-- ② Franco-Diktatur -->
        <div class="wim-category hidden" data-wim-cat="dictadura">
          <h3 class="lz-h3">La Dictadura Franquista (1939–1975)</h3>

          ${renderTable({
            headers: ['Bereich', 'Merkmale der Diktatur', 'Schlüsselvokabular'],
            rows: [
              ['Politisch',    'Einparteienstaat (Movimiento Nacional) · Keine freien Wahlen · Staatsfeinde verfolgt', 'el régimen · la censura · la represión · los presos políticos'],
              ['Gesellschaft', 'Kirche als Staatsinstitution · Frauendiskriminierung · Nationale Einheit erzwungen', 'el nacional-catolicismo · la Sección Femenina · el papel de la mujer'],
              ['Sprache',      'Kastilisch als einzige Amtssprache · Katalanisch, Baskisch, Galicisch verboten', 'la prohibición del catalán/euskera · la represión cultural'],
              ['Wirtschaft',   'Autarkie (Abschottung) bis ca. 1959 · dann technikgestützte Öffnung (desarrollismo)', 'la autarquía · el desarrollismo · el Plan de Estabilización'],
              ['Repression',   'Hinrichtungen, Gefangene, Exil · Schätzungsweise 200.000–500.000 Opfer', 'los desaparecidos · las fosas comunes · la Ley de Memoria Histórica'],
            ],
          })}

          ${renderInfobox({ type: 'warning', icon: 'fas fa-exclamation-triangle', title: 'Erinnerungskultur — Ley de Memoria Histórica',
            body: `Spanien hat lange gebraucht, die Verbrechen der Diktatur offiziell aufzuarbeiten.<br>
                   <strong>2007:</strong> Ley de Memoria Histórica (unter Zapatero) — Anerkennung der Opfer, Entfernung franquistischer Symbole.<br>
                   <strong>2022:</strong> Ley de Memoria Democrática (under Pedro Sánchez) — stärkere Aufarbeitung, Öffnung von Massengräbern.<br>
                   <strong>Vokabular:</strong> la fosa común · los desaparecidos · rehabilitar a las víctimas · la reconciliación nacional` })}

          ${ej('El régimen franquista suprimió las lenguas regionales y persiguió a sus opositores durante casi cuatro décadas.', 'Das Franco-Regime unterdrückte die Regionalsprachen und verfolgte seine Gegner fast vier Jahrzehnte lang.')}
        </div>

        <!-- ③ Transición -->
        <div class="wim-category hidden" data-wim-cat="transicion">
          <h3 class="lz-h3">La Transición Española (1975–1982)</h3>
          <p class="lz-prose">Die Transición gilt international als Musterbeispiel eines friedlichen Übergangs von einer Diktatur zur Demokratie — allerdings auch kritisiert wegen des "Pakts des Schweigens" über die Verbrechen der Diktatur.</p>

          ${renderTable({
            headers: ['Jahr', 'Ereignis', 'Bedeutung'],
            rows: [
              ['Nov. 1975', 'Tod Francos · Juan Carlos I. wird König', 'Beginn der Transición · König unterstützt überraschend Demokratie'],
              ['1976',      'Adolfo Suárez wird Ministerpräsident',    'Führt die Reform von innen · ehemaliger Franquist, der die Demokratie einführt'],
              ['1977',      'Ley para la Reforma Política',            'Legalización de los partidos políticos · erste freie Wahlen seit 1936'],
              ['1977',      'Pactos de la Moncloa',                    'Wirtschaftliche und politische Vereinbarungen aller Parteien für die Demokratie'],
              ['1978',      'Constitución Española',                   'Neue Verfassung · verabschiedet per Referendum · Basis der Demokratie'],
              ['1981',      '23-F: Putschversuch Tejeros',             'Lt. Col. Tejero besetzt das Parlament · König Juan Carlos hält Putsch auf'],
              ['1982',      'PSOE gewinnt Wahlen',                     'Felipe González · Konsolidierung der Demokratie · Ende der Transición'],
            ],
          })}

          ${renderMerkboxGrid([
            {
              icon: 'fas fa-handshake',
              title: 'Schlüsselbegriffe Transición',
              text: `<em>el consenso</em> · <em>la reforma desde dentro</em> · <em>el Pacto del Olvido</em> · <em>la amnistía</em> · <em>la legalización de los partidos</em> · <em>la reconciliación</em>`,
            },
            {
              icon: 'fas fa-balance-scale',
              title: 'Transición — Pro & Contra',
              text: `<strong>Positiv:</strong> friedlicher Übergang, Stabilität, Wirtschaftswachstum<br>
                     <strong>Kritisch:</strong> Straflosigkeit für Franquisten · keine Aufarbeitung der Verbrechen · der "Pacto del Olvido"`,
            },
          ])}
        </div>

        <!-- ④ Demokratie heute -->
        <div class="wim-category hidden" data-wim-cat="democracia">
          <h3 class="lz-h3">España democrática — Spanien heute</h3>

          ${renderTable({
            headers: ['Thema', 'Inhalt', 'Vokabular'],
            rows: [
              ['Staatsform',       'Parlamentarische Monarchie · König Felipe VI. (seit 2014)',          'la monarquía parlamentaria · el rey / la reina'],
              ['Verfassung',       'Constitución de 1978 · Grundlage aller Rechte und Freiheiten',       'los derechos fundamentales · el Estado de derecho'],
              ['Autonomien',       '17 Comunidades Autónomas · eigene Kompetenzen (Bildung, Gesundheit)', 'las comunidades autónomas · el autogobierno'],
              ['Katalonien',       'Unabhängigkeitsbewegung · Referendum 2017 (von Madrid verboten)',     'el independentismo · el referéndum · la autodeterminación'],
              ['Baskenland',       'ETA (aufgelöst 2018) · weiter autonome Bestrebungen',                'ETA · el terrorismo · la paz · el País Vasco'],
              ['Wirtschaftskrise', 'Krise 2008–2013 · hohe Jugendarbeitslosigkeit · Bailout-Debatten',   'la crisis económica · el rescate · el desempleo juvenil'],
              ['Parteienlandschaft','PSOE · PP · Vox · Sumar/Podemos · Koalitionsregierungen',           'la coalición · la polarización · el bloqueo político'],
              ['Erinnerungskultur','Ley de Memoria Histórica 2007 · Ley de Memoria Democrática 2022',    'las fosas comunes · las víctimas del franquismo'],
            ],
          })}

          ${ej('La cuestión catalana sigue siendo uno de los debates políticos más complejos de la España actual.', 'Die katalanische Frage bleibt eine der komplexesten politischen Debatten im heutigen Spanien.')}
          ${ej('La Constitución de 1978 fue el resultado del consenso entre todas las fuerzas políticas durante la Transición.', 'Die Verfassung von 1978 war das Ergebnis des Konsenses aller politischen Kräfte während der Transición.')}
        </div>

      </div>
    </section>

    <section class="lz-content-section" style="padding:1.5rem 0 3rem;">
      <div class="lz-section-wrap">
        ${renderPageNav({
          prev: null,
          next: { label: '3.2 España: Kultur & Gesellschaft', link: `${BASE}/themen/landeskunde/spanien-kultur` },
        }, BASE)}
      </div>
    </section>
    ${footerHTML(this.router)}
  `; }

  init() { i18n.init(); initScrollReveal(); initInteractive(document); initWimTabs(document); }
}