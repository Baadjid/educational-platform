// pages/projekte/lernzettel/faecher/spanisch/themen/wortschatz/identitaet-migration.js
// 2.4 — Identidad & Migración · Identität & Migration

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
  { key: 'identitaet',  label: '① Identität'      },
  { key: 'migration',   label: '② Migration'       },
  { key: 'integration', label: '③ Integration'     },
  { key: 'diskrim',     label: '④ Diskriminierung' },
];

export default class Spanisch_Identitaet_Migration {
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
          <i class="fas fa-chevron-right"></i><span>Wortschatz</span>
          <i class="fas fa-chevron-right"></i><span>2.4 Identität & Migration</span>
        </div>
        <h1 class="lz-sub-title">Identidad & Migración —<br><em>Identität & Migration</em></h1>
        <p class="lz-sub-desc">
          Persönliche & kulturelle Identität · Migrationsursachen & -formen ·
          Integration & Inklusion · Diskriminierung & Rassismus
        </p>
        ${renderTags(['2.4', 'Identität', 'Migration', 'Integration', 'Wortschatz', 'Abitur 2026'])}
      </div>
    </section>

    <section class="lz-content-section">
      <div class="lz-section-wrap">

        ${renderSubhead('Prioritätsthema Abitur')}
        <h2 class="lz-h2 reveal">Identidad & Migración — Zentrales Abiturthema</h2>
        <p class="lz-prose reveal">Identität und Migration gehören zu den meistgeprüften Themen im Spanisch-Abitur BW. Besonders relevant: die spanisch-lateinamerikanische Migration nach Spanien, die lateinamerikanische Diaspora in den USA und gesellschaftliche Debatten über Multikulturalismus.</p>

        ${renderInfobox({ type: 'blue', icon: 'fas fa-passport', title: 'Kontexte für das Abitur',
          body: `<strong>Spanien:</strong> Immigration aus Lateinamerika, Afrika und Osteuropa · Autonome Regionen mit eigener Identität (Katalonien, Baskenland) · historische Emigration während der Diktatur<br>
                 <strong>Lateinamerika:</strong> Migration in die USA (mexikanische Grenze, Dreamers) · interne Migration Land→Stadt · Flüchtlinge aus Venezuela/Zentralamerika<br>
                 <strong>Gesellschaft:</strong> Multikulturalismus vs. Assimilation · Identitätssuche der 2. Generation · Rassismus und Diskriminierung` })}

        <nav class="wim-tabs" id="migrTabs" aria-label="Migrations-Kategorien">
          ${TABS.map((t, i) => `
            <button class="wim-tab${i === 0 ? ' active' : ''}" data-wim="${t.key}">${t.label}</button>`).join('')}
        </nav>

        <!-- ① Identität -->
        <div class="wim-category" data-wim-cat="identitaet">
          <h3 class="lz-h3">Identidad — Persönliche und kulturelle Identität</h3>

          ${renderTable({
            headers: ['Español', 'Deutsch', 'Kontext/Verwendung'],
            rows: [
              ['la identidad',              'die Identität',               'la identidad personal / cultural / nacional'],
              ['la identidad cultural',     'die kulturelle Identität',    'preservar / construir la identidad cultural'],
              ['las raíces',                'die Wurzeln',                 'volver a las raíces / las raíces culturales'],
              ['el origen',                 'die Herkunft',                'el origen étnico / geográfico'],
              ['la pertenencia',            'die Zugehörigkeit',           'el sentido de pertenencia'],
              ['la cultura de origen',      'die Herkunftskultur',         'mantener la cultura de origen'],
              ['la cultura de acogida',     'die Aufnahmekultur',          'adaptarse a la cultura de acogida'],
              ['la lengua materna',         'die Muttersprache',           'conservar la lengua materna'],
              ['el bilingüismo',            'die Zweisprachigkeit',        'el bilingüismo como riqueza'],
              ['la doble identidad',        'die doppelte Identität',      'vivir con una doble identidad'],
              ['la generación',             'die Generation',              'la segunda generación de inmigrantes'],
              ['los valores',               'die Werte',                   'transmitir valores culturales'],
              ['las tradiciones',           'die Traditionen',             'mantener / perder las tradiciones'],
              ['la nostalgia',              'die Nostalgie/Heimweh',       'sentir nostalgia por el país de origen'],
              ['el sentido de pertenencia', 'das Zugehörigkeitsgefühl',   'desarrollar un sentido de pertenencia'],
            ],
          })}

          ${ej('La segunda generación de inmigrantes a menudo vive entre dos mundos, con una identidad compleja.', 'Die zweite Generation von Einwanderern lebt oft zwischen zwei Welten, mit einer komplexen Identität.')}
          ${ej('Mantener la lengua materna es una forma de preservar la identidad cultural.', 'Die Muttersprache zu erhalten ist eine Möglichkeit, die kulturelle Identität zu bewahren.')}
        </div>

        <!-- ② Migration -->
        <div class="wim-category hidden" data-wim-cat="migration">
          <h3 class="lz-h3">Migración — Ursachen, Formen und Folgen</h3>

          ${renderTable({
            headers: ['Español', 'Deutsch'],
            rows: [
              ['la migración / la inmigración',  'die Migration / die Einwanderung'],
              ['el/la inmigrante',               'der/die Einwanderer/in'],
              ['el/la emigrante',                'der/die Auswanderer/in'],
              ['el/la refugiado/a',              'der/die Flüchtling'],
              ['el/la solicitante de asilo',     'der/die Asylbewerber/in'],
              ['el asilo político',              'das politische Asyl'],
              ['los sin papeles / indocumentado','die Papierlosen / Undokumentierten'],
              ['las fronteras',                  'die Grenzen'],
              ['el país de origen',              'das Herkunftsland'],
              ['el país de acogida',             'das Aufnahmeland'],
              ['la migración económica',         'die Wirtschaftsmigration'],
              ['la migración forzada',           'die Zwangsmigration'],
              ['la migración climática',         'die Klimamigration'],
              ['el flujo migratorio',            'der Migrationsstrom'],
              ['la ruta migratoria',             'die Migrationsroute'],
              ['las pateras / cayucos',          'Flüchtlingsboote (Mittelmeer/Atlantik)'],
              ['la reagrupación familiar',       'der Familiennachzug'],
              ['la remesa',                      'die Geldüberweisung in die Heimat'],
              ['la diáspora',                    'die Diaspora'],
              ['el brain drain',                 'die Abwanderung von Fachkräften'],
            ],
          })}

          ${renderAccordion([
            {
              title: 'Ursachen der Migration — Push & Pull-Faktoren',
              content: `
                ${renderTable({
                  headers: ['Push-Faktoren (Abstoßung aus Heimat)', 'Pull-Faktoren (Anziehung ins Zielland)'],
                  rows: [
                    ['la pobreza extrema',                    'mejores oportunidades laborales'],
                    ['el desempleo / falta de trabajo',       'mayor nivel de vida'],
                    ['los conflictos armados / la guerra',    'estabilidad política'],
                    ['la persecución política o religiosa',   'sistema educativo y sanitario mejor'],
                    ['el cambio climático / desastres',       'reunificación familiar'],
                    ['la falta de futuro para los jóvenes',  'libertades civiles y democracia'],
                  ],
                })}
              `,
            },
          ])}

          ${ej('Millones de latinoamericanos emigran cada año en busca de mejores oportunidades económicas.', 'Millionen Lateinamerikaner wandern jedes Jahr auf der Suche nach besseren wirtschaftlichen Möglichkeiten aus.')}
          ${ej('Las remesas que los emigrantes envían a sus familias representan una parte significativa del PIB de algunos países.', 'Die Überweisungen, die Auswanderer an ihre Familien schicken, machen einen bedeutenden Teil des BIPs einiger Länder aus.')}
        </div>

        <!-- ③ Integration -->
        <div class="wim-category hidden" data-wim-cat="integration">
          <h3 class="lz-h3">Integración — Eingliederung und gesellschaftliche Teilhabe</h3>

          ${renderTable({
            headers: ['Español', 'Deutsch', 'Verben/Phrasen'],
            rows: [
              ['la integración',           'die Integration',                'facilitar / promover la integración'],
              ['la inclusión',             'die Inklusion',                  'fomentar la inclusión social'],
              ['la asimilación',           'die Assimilation',               'presión de asimilación'],
              ['el multiculturalismo',     'der Multikulturalismus',          'defender el multiculturalismo'],
              ['la interculturalidad',     'die Interkulturalität',           'promover la interculturalidad'],
              ['la convivencia',           'das Zusammenleben',              'fomentar la convivencia pacífica'],
              ['el idioma de acogida',     'die Sprache des Aufnahmelandes',  'aprender el idioma de acogida'],
              ['la barrera idiomática',    'die Sprachbarriere',              'superar la barrera idiomática'],
              ['el acceso a la educación', 'der Zugang zur Bildung',         'garantizar el acceso a la educación'],
              ['el mercado laboral',       'der Arbeitsmarkt',               'acceder al mercado laboral'],
              ['los derechos',             'die Rechte',                     'defender los derechos de los inmigrantes'],
              ['la ciudadanía',            'die Staatsbürgerschaft',         'obtener la ciudadanía'],
              ['el arraigo',               'das Verwurzeltsein',              'el arraigo social y cultural'],
            ],
          })}

          ${renderMerkboxGrid([
            {
              icon: 'fas fa-hands-helping',
              title: 'Pro-Argumente Integration',
              text: `<em>enriquecimiento cultural</em> (kulturelle Bereicherung)<br>
                     <em>contribución económica</em> (wirtschaftlicher Beitrag)<br>
                     <em>diversidad como fortaleza</em> (Vielfalt als Stärke)<br>
                     <em>compensar el envejecimiento demográfico</em>`,
            },
            {
              icon: 'fas fa-exclamation-circle',
              title: 'Herausforderungen',
              text: `<em>barreras lingüísticas y culturales</em><br>
                     <em>dificultad de homologar títulos</em> (Anerkennung von Abschlüssen)<br>
                     <em>discriminación en el mercado laboral</em><br>
                     <em>pérdida de identidad cultural</em>`,
            },
          ])}
        </div>

        <!-- ④ Diskriminierung -->
        <div class="wim-category hidden" data-wim-cat="diskrim">
          <h3 class="lz-h3">Discriminación & Racismo — Diskriminierung & Rassismus</h3>

          ${renderTable({
            headers: ['Español', 'Deutsch'],
            rows: [
              ['la discriminación',            'die Diskriminierung'],
              ['el racismo',                   'der Rassismus'],
              ['la xenofobia',                 'die Xenophobie/Ausländerfeindlichkeit'],
              ['el prejuicio',                 'das Vorurteil'],
              ['el estereotipo',               'das Stereotyp'],
              ['la intolerancia',              'die Intoleranz'],
              ['el odio racial',               'der Rassenhass'],
              ['el acoso',                     'das Mobbing/die Belästigung'],
              ['la igualdad de oportunidades', 'die Chancengleichheit'],
              ['los derechos fundamentales',   'die Grundrechte'],
              ['la dignidad humana',           'die Menschenwürde'],
              ['la discriminación laboral',    'die Diskriminierung auf dem Arbeitsmarkt'],
              ['el delito de odio',            'die Hassverbrechen'],
              ['la islamofobia',               'die Islamophobie'],
              ['el antirracismo',              'der Antirassismus'],
              ['la diversidad',                'die Vielfalt/Diversität'],
              ['la igualdad de trato',         'die Gleichbehandlung'],
            ],
          })}

          ${renderAccordion([
            {
              title: 'Sprachliche Werkzeuge — Diskriminierung beschreiben & verurteilen',
              content: `
                ${renderTable({
                  headers: ['Funktion', 'Formulierung'],
                  rows: [
                    ['Kritik',     'Es inaceptable que… (Es ist inakzeptabel, dass…)'],
                    ['Kritik',     'La discriminación atenta contra la dignidad humana.'],
                    ['Forderung',  'Es urgente adoptar medidas para combatir el racismo.'],
                    ['Forderung',  'Hay que garantizar la igualdad de trato para todos.'],
                    ['Aufklärung', 'Los estereotipos generan prejuicios injustificados.'],
                    ['Lösung',     'La educación intercultural es clave para combatir la xenofobia.'],
                    ['Perspektive','Ponerse en el lugar del otro ayuda a entender su situación.'],
                  ],
                })}
              `,
            },
          ])}

          ${ej('La discriminación en el mercado laboral sigue siendo una realidad para muchos inmigrantes.', 'Die Diskriminierung auf dem Arbeitsmarkt ist für viele Einwanderer weiterhin Realität.')}
          ${ej('Los estereotipos y prejuicios dificultan la convivencia y la integración en la sociedad.', 'Stereotypen und Vorurteile erschweren das Zusammenleben und die Integration in der Gesellschaft.')}
        </div>

      </div>
    </section>

    <section class="lz-content-section" style="padding:1.5rem 0 3rem;">
      <div class="lz-section-wrap">
        ${renderPageNav({
          prev: { label: '2.3 Umwelt',          link: `${BASE}/themen/wortschatz/umwelt`        },
          next: { label: '2.5 Technologie',     link: `${BASE}/themen/wortschatz/technologie`   },
        }, BASE)}
      </div>
    </section>
    ${footerHTML(this.router)}
  `; }

  init() { i18n.init(); initScrollReveal(); initInteractive(document); initWimTabs(document); }
}