// pages/projekte/lernzettel/faecher/spanisch/themen/wortschatz/gesellschaft-politik.js
// 2.2 — Sociedad & Política · Gesellschaft & Politik

import { initScrollReveal } from '../../../../../../../shared/js/index.js';
import { footerHTML }        from '../../../../../../../components/Footer.js';
import { i18n }              from '../../../../../../../shared/js/i18n.js';
import { initWimTabs }       from '../../../../../../../shared/js/wim-tabs.js';
import {
  ensureComponentsCSS, renderInfobox, renderTable,
  renderSubhead, renderTags, renderAccordion, initInteractive,
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
  { key: 'gesellschaft', label: '① Gesellschaft'  },
  { key: 'politik',      label: '② Politik'        },
  { key: 'sozial',       label: '③ Soziale Themen' },
  { key: 'wirtschaft',   label: '④ Wirtschaft'     },
];

export default class Spanisch_Gesellschaft_Politik {
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
          <i class="fas fa-chevron-right"></i><span>2.2 Gesellschaft & Politik</span>
        </div>
        <h1 class="lz-sub-title">Sociedad & Política —<br><em>Gesellschaft & Politik</em></h1>
        <p class="lz-sub-desc">
          Gesellschaftliche Strukturen · Politisches System · Soziale Probleme ·
          Wirtschaft · Phrasen für Textproduktion
        </p>
        ${renderTags(['2.2', 'Gesellschaft', 'Politik', 'Wortschatz', 'Abitur 2026'])}
      </div>
    </section>

    <section class="lz-content-section">
      <div class="lz-section-wrap">

        ${renderSubhead('Themenwortschatz')}
        <h2 class="lz-h2 reveal">Gesellschaft & Politik — Vollständiges Vokabular</h2>
        <p class="lz-prose reveal">Gesellschaft und Politik sind Kernthemen des Spanisch-Abiturs. Dieses Vokabular ermöglicht es, spanisch- und lateinamerikanische Texte zu politischen und gesellschaftlichen Themen zu verstehen und zu kommentieren.</p>

        <nav class="wim-tabs" id="gesellTabs" aria-label="Gesellschaft-Kategorien">
          ${TABS.map((t, i) => `
            <button class="wim-tab${i === 0 ? ' active' : ''}" data-wim="${t.key}">${t.label}</button>`).join('')}
        </nav>

        <!-- ① Gesellschaft -->
        <div class="wim-category" data-wim-cat="gesellschaft">
          <h3 class="lz-h3">Gesellschaftliche Strukturen</h3>

          ${renderTable({
            headers: ['Español', 'Deutsch', 'Beispielphrase'],
            rows: [
              ['la sociedad',           'die Gesellschaft',          'la sociedad moderna / actual'],
              ['el ciudadano / la ciudadana', 'der/die Bürger/in',  'los derechos del ciudadano'],
              ['la comunidad',          'die Gemeinschaft',          'la comunidad local / virtual'],
              ['la clase social',       'die soziale Klasse',        'la brecha entre clases sociales'],
              ['la clase media',        'die Mittelklasse',          'el empobrecimiento de la clase media'],
              ['la brecha social',      'die soziale Kluft',         'reducir la brecha social'],
              ['la desigualdad',        'die Ungleichheit',          'la desigualdad de género / económica'],
              ['la pobreza',            'die Armut',                 'vivir en la pobreza extrema'],
              ['la riqueza',            'der Reichtum',              'la distribución de la riqueza'],
              ['la exclusión social',   'die soziale Ausgrenzung',   'luchar contra la exclusión social'],
              ['el colectivo',          'die Gruppe/das Kollektiv',  'el colectivo LGTB+'],
              ['la minoría',            'die Minderheit',            'proteger los derechos de las minorías'],
              ['el movimiento social',  'die soziale Bewegung',      'el movimiento feminista'],
              ['la concienciación',     'die Bewusstseinsbildung',   'campañas de concienciación'],
              ['los valores',           'die Werte',                 'valores democráticos / tradicionales'],
              ['el bienestar',          'das Wohlbefinden/Wohl',     'el estado de bienestar'],
              ['la solidaridad',        'die Solidarität',           'actuar con solidaridad'],
              ['la convivencia',        'das Zusammenleben',         'fomentar la convivencia pacífica'],
            ],
          })}

          ${ej('La brecha social sigue creciendo a pesar de las políticas redistributivas.', 'Die soziale Kluft wächst weiterhin trotz der Umverteilungspolitik.')}
          ${ej('Fomentar la convivencia intercultural es uno de los retos de nuestra sociedad.', 'Das Fördern des interkulturellen Zusammenlebens ist eine der Herausforderungen unserer Gesellschaft.')}
        </div>

        <!-- ② Politik -->
        <div class="wim-category hidden" data-wim-cat="politik">
          <h3 class="lz-h3">Politisches System & Institutionen</h3>

          ${renderTable({
            headers: ['Español', 'Deutsch', 'Kontext'],
            rows: [
              ['el gobierno',          'die Regierung',            'el gobierno central / autonómico'],
              ['el Estado',            'der Staat',                'el Estado de derecho'],
              ['la democracia',        'die Demokratie',           'la democracia parlamentaria'],
              ['la dictadura',         'die Diktatur',             'la dictadura franquista'],
              ['la monarquía',         'die Monarchie',            'la monarquía constitucional española'],
              ['el parlamento',        'das Parlament',            'el Congreso de los Diputados (España)'],
              ['las Cortes',           'das spanische Parlament',  'las Cortes Generales'],
              ['el partido político',  'die politische Partei',    'los partidos de izquierda / derecha'],
              ['las elecciones',       'die Wahlen',               'convocar elecciones / ganar las elecciones'],
              ['el sufragio',          'das Wahlrecht',            'sufragio universal'],
              ['la Constitución',      'die Verfassung',           'la Constitución española de 1978'],
              ['el poder',             'die Macht',                'separación de poderes'],
              ['el poder ejecutivo',   'die Exekutive',            'encabezado por el presidente'],
              ['el poder legislativo', 'die Legislative',          'el parlamento'],
              ['el poder judicial',    'die Judikative',           'los tribunales'],
              ['la ley',               'das Gesetz',               'aprobar / derogar una ley'],
              ['la reforma',           'die Reform',               'la reforma educativa / laboral'],
              ['la corrupción',        'die Korruption',           'luchar contra la corrupción'],
              ['la transparencia',     'die Transparenz',          'exigir transparencia política'],
              ['la autonomía',         'die Autonomie',            'las comunidades autónomas de España'],
            ],
          })}

          ${renderInfobox({ type: 'blue', icon: 'fas fa-landmark', title: 'Spanisches politisches System — Schlüsselbegriffe',
            body: `<strong>España:</strong> monarquía parlamentaria · 17 comunidades autónomas · Congreso de los Diputados + Senado = las Cortes Generales · presidente del gobierno (nicht: rey/reina)<br>
                   <strong>Wichtige Parteien:</strong> PSOE (sozialdemokratisch) · PP (Volkspartei, konservativ) · Vox (rechtsextrem) · Podemos/Sumar (links)<br>
                   <strong>Lateinamerika:</strong> presidencialismo · caudillismo · populismo · regímenes autoritarios` })}

          ${ej('La Transición española fue el período de cambio político tras la muerte de Franco en 1975.', 'Die spanische Transición war die politische Wandlungsperiode nach Francos Tod 1975.')}
          ${ej('Las comunidades autónomas tienen competencias propias en materia de educación y sanidad.', 'Die autonomen Gemeinschaften haben eigene Kompetenzen in Bildung und Gesundheit.')}
        </div>

        <!-- ③ Soziale Themen -->
        <div class="wim-category hidden" data-wim-cat="sozial">
          <h3 class="lz-h3">Soziale Probleme & gesellschaftliche Debatten</h3>

          ${renderTable({
            headers: ['Thema', 'Español', 'Deutsch'],
            rows: [
              ['Bildung',    'la educación pública / privada',    'öffentliche / private Bildung'],
              ['Bildung',    'el fracaso escolar',                'das schulische Versagen / Schulabbruch'],
              ['Bildung',    'la brecha educativa',               'die Bildungslücke'],
              ['Gesundheit', 'la sanidad pública',                'das öffentliche Gesundheitssystem'],
              ['Gesundheit', 'la cobertura sanitaria',            'die Gesundheitsversorgung'],
              ['Arbeit',     'el desempleo / el paro',            'die Arbeitslosigkeit'],
              ['Arbeit',     'el desempleo juvenil',              'die Jugendarbeitslosigkeit'],
              ['Arbeit',     'la precariedad laboral',            'die Prekarität auf dem Arbeitsmarkt'],
              ['Arbeit',     'la conciliación familiar-laboral',  'die Vereinbarkeit von Familie und Beruf'],
              ['Gleichheit', 'la igualdad de género',             'die Geschlechtergleichstellung'],
              ['Gleichheit', 'el machismo / el feminismo',        'der Machismo / der Feminismus'],
              ['Gleichheit', 'la violencia de género',            'häusliche/genderbasierte Gewalt'],
              ['Gleichheit', 'la brecha salarial',                'der Lohnunterschied (Gender Pay Gap)'],
              ['Armut',      'la pobreza infantil',               'die Kinderarmut'],
              ['Armut',      'la exclusión social',               'die soziale Ausgrenzung'],
              ['Wohnen',     'el acceso a la vivienda',           'der Zugang zu Wohnraum'],
              ['Wohnen',     'la especulación inmobiliaria',      'die Immobilienspekulation'],
            ],
          })}

          ${renderAccordion([
            {
              title: 'Redewendungen für Textproduktion — Soziale Probleme',
              content: `
                ${renderTable({
                  headers: ['Funktion', 'Ausdruck', 'Bedeutung'],
                  rows: [
                    ['Problem nennen',    'uno de los principales problemas es…',      'eines der Hauptprobleme ist…'],
                    ['Problem nennen',    'se observa una creciente preocupación por…','es ist eine wachsende Besorgnis zu beobachten'],
                    ['Ursache',           'esto se debe a…',                           'dies liegt an…'],
                    ['Konsequenz',        'como consecuencia de ello…',                'als Folge davon…'],
                    ['Lösung',            'para hacer frente a este problema…',        'um diesem Problem zu begegnen…'],
                    ['Lösung',            'es fundamental que se adopten medidas…',    'es ist grundlegend, dass Maßnahmen ergriffen werden'],
                    ['Forderung',         'es necesario garantizar…',                  'es ist notwendig zu gewährleisten…'],
                  ],
                })}
              `,
            },
          ])}
        </div>

        <!-- ④ Wirtschaft -->
        <div class="wim-category hidden" data-wim-cat="wirtschaft">
          <h3 class="lz-h3">Wirtschaft & Globalisierung</h3>

          ${renderTable({
            headers: ['Español', 'Deutsch', 'Español', 'Deutsch'],
            rows: [
              ['la economía',           'die Wirtschaft',              'el mercado',           'der Markt'],
              ['el crecimiento económico','das Wirtschaftswachstum',   'la recesión',          'die Rezession'],
              ['el PIB (producto interior bruto)','das BIP',           'la inflación',         'die Inflation'],
              ['el desempleo',          'die Arbeitslosigkeit',        'el empleo',            'die Beschäftigung'],
              ['la globalización',      'die Globalisierung',          'el libre comercio',    'der Freihandel'],
              ['la multinacional',      'der multinationale Konzern',  'la empresa',           'das Unternehmen'],
              ['la inversión',          'die Investition',             'el beneficio',         'der Gewinn/Vorteil'],
              ['los impuestos',         'die Steuern',                 'la deuda pública',     'die Staatsschuld'],
              ['las subvenciones',      'die Subventionen',            'el gasto público',     'die öffentliche Ausgabe'],
              ['la pobreza',            'die Armut',                   'la riqueza',           'der Reichtum'],
              ['la brecha económica',   'die wirtschaftliche Kluft',   'la redistribución',    'die Umverteilung'],
              ['el consumo',            'der Konsum',                  'la producción',        'die Produktion'],
              ['la exportación',        'der Export',                  'la importación',       'der Import'],
              ['la desindustrialización','die Deindustrialisierung',   'el sector servicios',  'der Dienstleistungssektor'],
              ['la digitalización',     'die Digitalisierung',         'la automatización',    'die Automatisierung'],
            ],
          })}

          ${ej('La globalización ha generado tanto oportunidades económicas como una mayor desigualdad.', 'Die Globalisierung hat sowohl wirtschaftliche Chancen als auch größere Ungleichheit erzeugt.')}
          ${ej('La brecha entre países ricos y pobres sigue siendo uno de los mayores desafíos del siglo XXI.', 'Die Kluft zwischen reichen und armen Ländern bleibt eine der größten Herausforderungen des 21. Jahrhunderts.')}
        </div>

      </div>
    </section>

    <section class="lz-content-section" style="padding:1.5rem 0 3rem;">
      <div class="lz-section-wrap">
        ${renderPageNav({
          prev: { label: '2.1 Grundwortschatz',   link: `${BASE}/themen/wortschatz/grundwortschatz`      },
          next: { label: '2.3 Umwelt',             link: `${BASE}/themen/wortschatz/umwelt`               },
        }, BASE)}
      </div>
    </section>
    ${footerHTML(this.router)}
  `; }

  init() { i18n.init(); initScrollReveal(); initInteractive(document); initWimTabs(document); }
}