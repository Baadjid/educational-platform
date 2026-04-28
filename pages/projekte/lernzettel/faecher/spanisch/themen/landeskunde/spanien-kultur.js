// pages/projekte/lernzettel/faecher/spanisch/themen/landeskunde/spanien-kultur.js
// 3.2 — España: Regionen, Kultur & Gesellschaft

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
  { key: 'regionen',   label: '① Regionen'       },
  { key: 'sprachen',   label: '② Sprachen'        },
  { key: 'kultur',     label: '③ Kultur'          },
  { key: 'gesellschaft',label:'④ Gesellschaft'    },
];

export default class Spanisch_Spanien_Kultur {
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
          <i class="fas fa-chevron-right"></i><span>3.2 España: Kultur</span>
        </div>
        <h1 class="lz-sub-title">España: Cultura —<br><em>Regionen, Kultur & Gesellschaft</em></h1>
        <p class="lz-sub-desc">
          17 Autonome Gemeinschaften · Sprachen Spaniens · Kunst & Kultur ·
          Gesellschaftliche Entwicklung · Moderne spanische Gesellschaft
        </p>
        ${renderTags(['3.2', 'España', 'Cultura', 'Regionen', 'Gesellschaft', 'Landeskunde', 'Abitur 2026'])}
      </div>
    </section>

    <section class="lz-content-section">
      <div class="lz-section-wrap">

        ${renderSubhead('España — Überblick')}
        <h2 class="lz-h2 reveal">Spanien: Vielfalt in Einheit</h2>
        <p class="lz-prose reveal">Spanien ist nicht homogen — es ist ein Staat mit stark ausgeprägten regionalen Identitäten, eigenen Sprachen und Kulturen. Die Spannung zwischen Zentralstaat und Autonomiebewegungen prägt die Politik bis heute.</p>

        <nav class="wim-tabs" id="kultTabs" aria-label="Kultur-Kategorien">
          ${TABS.map((t, i) => `
            <button class="wim-tab${i === 0 ? ' active' : ''}" data-wim="${t.key}">${t.label}</button>`).join('')}
        </nav>

        <!-- ① Regionen -->
        <div class="wim-category" data-wim-cat="regionen">
          <h3 class="lz-h3">Las comunidades autónomas — Die 17 autonomen Gemeinschaften</h3>
          <p class="lz-prose">Spanien ist in 17 <em>comunidades autónomas</em> und 2 autonome Städte (Ceuta und Melilla) gegliedert. Einige haben weitreichende Autonomierechte und starke regionale Identitäten.</p>

          ${renderTable({
            headers: ['Region', 'Hauptstadt', 'Besonderheit / Relevanz'],
            rows: [
              ['Cataluña (Katalonien)',    'Barcelona',     'Starke Unabhängigkeitsbewegung · eigene Sprache (catalán) · größte Wirtschaftsregion'],
              ['País Vasco (Baskenland)',  'Vitoria-Gasteiz','Eigene Sprache (euskera) · historische ETA-Problematik · hohes Autonomieniveau'],
              ['Galicia (Galicien)',       'Santiago de Compostela', 'Eigene Sprache (gallego) · Jakobsweg · keltische Traditionen'],
              ['Madrid',                  'Madrid',        'Hauptstadt und wirtschaftliches Zentrum Spaniens'],
              ['Andalucía',               'Sevilla',        'Größte Region · Flamenco · arabisches Erbe (Al-Ándalus)'],
              ['Valencia / C. Valenciana','Valencia',       'Valencianisch (eine Form des Katalanischen) · las Fallas'],
              ['Castilla y León',         'Valladolid',    'Historisches Kastilien · Geburtsort der kastilischen Sprache'],
              ['Aragón',                  'Zaragoza',       'Historisches Königreich Aragón · aragonesische Sprache (aragonés)'],
              ['Canarias (Kanaren)',       'Las Palmas / Santa Cruz', 'Archipel · Tourismus · subtropisches Klima'],
              ['Baleares',                'Palma de Mallorca', 'Inseln im Mittelmeer · Tourismus · mallorquí'],
            ],
          })}

          ${renderInfobox({ type: 'blue', icon: 'fas fa-map-marked-alt', title: 'Regionaler Konflikt — Das katalanische Beispiel',
            body: `<strong>Hintergrund:</strong> Katalonien hat eine eigene Sprache, Kultur und Wirtschaft (ca. 20% des spanischen BIP).<br>
                   <strong>2017:</strong> Unilaterales Referendum → 90% für Unabhängigkeit (bei 43% Beteiligung) → Madrid erklärt es für illegal, verhängt Artikel 155 (Autonomiesuspendierung).<br>
                   <strong>Vokabular:</strong> el independentismo · la autodeterminación · el referéndum · el Artículo 155 · los CDR · el diálogo vs. la ruptura` })}
        </div>

        <!-- ② Sprachen -->
        <div class="wim-category hidden" data-wim-cat="sprachen">
          <h3 class="lz-h3">Las lenguas de España — Sprachen Spaniens</h3>
          <p class="lz-prose">Spanien ist offiziell vielsprachig. Neben dem Kastilischen (dem "Spanischen") gibt es drei weitere ko-offizielle Sprachen in ihren Regionen.</p>

          ${renderTable({
            headers: ['Sprache', 'Region', 'Sprecher', 'Status & Besonderheit'],
            rows: [
              ['Castellano (Kastilisch)', 'ganz Spanien',          '47 Mio. (Spanien) · 500 Mio. weltweit', 'Einzige überall ko-offizielle Sprache'],
              ['Catalán (Katalanisch)',   'Katalonien, Balearen, Valencia', 'ca. 10 Mio. Sprecher', 'Ko-offiziell in Katalonien · enge Verwandtschaft mit Provençalisch'],
              ['Euskera (Baskisch)',      'País Vasco, Navarra',   'ca. 750.000 Sprecher',             'Isolatsprache — keine Verwandtschaft mit anderen Sprachen'],
              ['Gallego (Galicisch)',     'Galicien',              'ca. 2,4 Mio. Sprecher',            'Nah verwandt mit Portugiesisch'],
              ['Valenciano',             'Valencia',               'ca. 2,4 Mio. Sprecher',            'Meist als Varietät des Katalanischen betrachtet'],
              ['Aragonés',               'Aragón',                 'ca. 10.000 Sprecher',              'Stark gefährdet'],
              ['Asturianu',              'Asturien',               'ca. 100.000 Sprecher',              'Offiziell nicht anerkannt · Teil des Astur-Leonesischen'],
            ],
          })}

          ${ej('La cuestión lingüística en España refleja la diversidad cultural y las tensiones entre las regiones y el Estado central.', 'Die Sprachenfrage in Spanien spiegelt die kulturelle Vielfalt und die Spannungen zwischen den Regionen und dem Zentralstaat wider.')}

          ${renderInfobox({ type: '', icon: 'fas fa-language', title: 'Sprachpolitik als Politikum',
            body: `Unter Franco wurden alle Regionalsprachen <strong>verboten</strong> — nur Kastilisch war erlaubt. Nach 1978 wurden Katalanisch, Baskisch und Galicisch ko-offiziell in ihren Regionen.<br>
                   Heute: Debatten über Sprachunterricht (Katalanisch als Unterrichtssprache), Amtssprache im Parlament, und die Forderung einiger Regionen nach stärkerer sprachlicher Autonomie.` })}
        </div>

        <!-- ③ Kultur -->
        <div class="wim-category hidden" data-wim-cat="kultur">
          <h3 class="lz-h3">Kultur, Kunst & Kulturerbe</h3>

          ${renderTable({
            headers: ['Bereich', 'Wichtige Namen / Werke', 'Relevanz'],
            rows: [
              ['Malerei',        'Velázquez · Goya · El Greco · Picasso · Dalí · Miró',          'Spanische Malerei gehört zum Weltkulturerbe'],
              ['Architektur',    'Gaudí (Sagrada Família, Parc Güell, Casa Batlló)',               'Modernisme català · Barcelona als Kulturhauptstadt'],
              ['Literatur',      'Cervantes (Don Quijote) · Lorca · Machado · Cela',              'Don Quijote = erstes modernes Prosawerk Europas'],
              ['Musik/Tanz',     'Flamenco (Andalucía) · Zarzuela · klassische Gitarre',          'Flamenco: UNESCO Weltkulturerbe seit 2010'],
              ['Kino',           'Pedro Almodóvar · Alejandro Amenábar · Penélope Cruz',          'Spanisches Kino international erfolgreich'],
              ['Gastronomie',    'Tapas · paella · tortilla · cocido · pintxos · alta cocina',    'Ferran Adrià (elBulli) revolutionierte die Weltküche'],
              ['Feste',          'San Fermín (Pamplona) · Las Fallas (Valencia) · Semana Santa',  'Kulturelle Identität · Tourismus'],
              ['Sport',          'FC Barcelona · Real Madrid · La Roja (Fußball-Nationalelf)',    'Sport als nationales Identifikationselement'],
            ],
          })}

          ${renderMerkboxGrid([
            {
              icon: 'fas fa-guitar',
              title: 'Flamenco',
              text: `Aus Andalusien · Synthese aus andalusischer, maurischer, jüdischer und gitaner Kultur · UNESCO-Weltkulturerbe 2010<br>
                     <em>el cante · el baile · la guitarra · el duende · el jaleo · la peña flamenca</em>`,
            },
            {
              icon: 'fas fa-book',
              title: 'Don Quijote (1605/1615)',
              text: `Miguel de Cervantes · gilt als erster moderner Roman · Don Quijote kämpft gegen Windmühlen (Idealist vs. Realität) · Symbol für Idealismus und Wahnsinn<br>
                     <em>los molinos de viento · la locura · el idealismo · Sancho Panza</em>`,
            },
          ])}
        </div>

        <!-- ④ Gesellschaft -->
        <div class="wim-category hidden" data-wim-cat="gesellschaft">
          <h3 class="lz-h3">Spanische Gesellschaft heute</h3>

          ${renderTable({
            headers: ['Thema', 'Entwicklung / Stand', 'Vokabular'],
            rows: [
              ['Familie',        'Wandel: von traditionellen Großfamilien zu Kleinfamilien und neuen Familienformen', 'la familia numerosa · los nuevos modelos de familia'],
              ['Gleichstellung', 'España pionera: Ehe für alle 2005 · aber Gender Pay Gap und Machismo bleiben Probleme', 'la igualdad de género · la violencia de género · el feminismo'],
              ['Religion',       'Von stark katholisch zu zunehmend säkular · Islam durch Einwanderung wächst', 'el catolicismo · la laicidad · la secularización'],
              ['Jugend',         'Hohe Jugendarbeitslosigkeit · Wohnungsprobleme · Mileurismo (1000€-Generation)', 'la generación mileurista · el paro juvenil · la emancipación tardía'],
              ['Migration',      'Spanien als Einwanderungsland (seit 1990er) und Auswanderungsland (seit 2008)', 'la inmigración · la emigración de jóvenes cualificados'],
              ['LGTBIQ+',        'Ehe für alle (2005) · Transgender-Gesetz (2023) · aber Zunahme von Hassverbrechen', 'el matrimonio igualitario · los derechos LGTB+'],
              ['Gesundheit',     'Sistema Nacional de Salud (öffentlich) · Debatten über Privatisierung',            'la sanidad pública · la privatización · la lista de espera'],
              ['Wohnen',         'Wohnungskrise in Großstädten · Gentrifizierung · Touristifizierung',              'la burbuja inmobiliaria · la gentrificación · el alquiler'],
            ],
          })}

          ${ej('España fue uno de los primeros países del mundo en legalizar el matrimonio entre personas del mismo sexo, en 2005.', 'Spanien war 2005 eines der ersten Länder weltweit, das die gleichgeschlechtliche Ehe legalisierte.')}
          ${ej('La generación mileurista describe a los jóvenes españoles que cobran alrededor de 1.000 euros al mes pese a tener estudios universitarios.', 'Die "Mileuristen"-Generation beschreibt junge Spanier, die trotz Hochschulabschluss rund 1.000 Euro im Monat verdienen.')}
        </div>

      </div>
    </section>

    <section class="lz-content-section" style="padding:1.5rem 0 3rem;">
      <div class="lz-section-wrap">
        ${renderPageNav({
          prev: { label: '3.1 España: Historia',        link: `${BASE}/themen/landeskunde/spanien-geschichte`  },
          next: { label: '3.3 Latinoamérica',           link: `${BASE}/themen/landeskunde/lateinamerika`       },
        }, BASE)}
      </div>
    </section>
    ${footerHTML(this.router)}
  `; }

  init() { i18n.init(); initScrollReveal(); initInteractive(document); initWimTabs(document); }
}