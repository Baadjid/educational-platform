// pages/projekte/lernzettel/faecher/spanisch/themen/landeskunde/gesellschaft-lateinamerika.js
// 3.4 — Sociedad latinoamericana · Gesellschaftliche Themen

import { initScrollReveal } from '../../../../../../../shared/js/index.js';
import { footerHTML }        from '../../../../../../../components/Footer.js';
import { i18n }              from '../../../../../../../shared/js/i18n.js';
import { initWimTabs }       from '../../../../../../../shared/js/wim-tabs.js';
import {
  ensureComponentsCSS, renderInfobox, renderTable,
  renderSubhead, renderTags, renderCompare,
  renderAccordion, initInteractive,
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
  { key: 'ungleich',  label: '① Ungleichheit'   },
  { key: 'migration', label: '② Migration'       },
  { key: 'indigena',  label: '③ Indigene Völker' },
  { key: 'frauen',    label: '④ Frauen & Gewalt' },
];

export default class Spanisch_Gesellschaft_Lateinamerika {
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
          <i class="fas fa-chevron-right"></i><span>3.4 Gesellschaft Lateinamerikas</span>
        </div>
        <h1 class="lz-sub-title">Sociedad latinoamericana —<br><em>Gesellschaftliche Themen</em></h1>
        <p class="lz-sub-desc">
          Ungleichheit & Armut · Migration (USA-Grenze) ·
          Indigene Völker · Feminizid & Frauenrechte
        </p>
        ${renderTags(['3.4', 'Latinoamérica', 'Sociedad', 'Migration', 'Indigene', 'Landeskunde', 'Abitur 2026'])}
      </div>
    </section>

    <section class="lz-content-section">
      <div class="lz-section-wrap">

        ${renderSubhead('Gesellschaftliche Realitäten')}
        <h2 class="lz-h2 reveal">Lateinamerika — Die wichtigsten gesellschaftlichen Themen</h2>
        <p class="lz-prose reveal">Lateinamerika ist die Region mit der größten Ungleichheit weltweit. Gleichzeitig ist es eine Region voller kultureller Vielfalt und sozialer Bewegungen, die für Gerechtigkeit kämpfen.</p>

        <nav class="wim-tabs" id="gesellLatTabs" aria-label="Gesellschaft-LA-Kategorien">
          ${TABS.map((t, i) => `
            <button class="wim-tab${i === 0 ? ' active' : ''}" data-wim="${t.key}">${t.label}</button>`).join('')}
        </nav>

        <!-- ① Ungleichheit -->
        <div class="wim-category" data-wim-cat="ungleich">
          <h3 class="lz-h3">Desigualdad & Pobreza — Ungleichheit & Armut</h3>
          <p class="lz-prose">Lateinamerika ist die ungleichste Region der Welt gemessen am Gini-Koeffizienten. Die Schere zwischen Arm und Reich ist trotz wirtschaftlichen Wachstums in vielen Ländern nicht kleiner geworden.</p>

          ${renderTable({
            headers: ['Aspekt', 'Realität', 'Vokabular'],
            rows: [
              ['Einkommensverteilung', '10% der Bevölkerung besitzen über 50% des Reichtums', 'la concentración de la riqueza · el coeficiente Gini'],
              ['Armut',               'ca. 30% der LA-Bevölkerung lebt unter der Armutsgrenze', 'la pobreza · la pobreza extrema · la línea de pobreza'],
              ['Informelle Wirtschaft','50–70% der Beschäftigten arbeiten informell',            'el trabajo informal · la economía sumergida'],
              ['Zugang zu Bildung',   'Hohe Schulabbrecherquoten · mangelnde Qualität',          'el fracaso escolar · la brecha educativa'],
              ['Gesundheit',          'Dualismus: Privatmedizin für Reiche, mangelhaftes öffentl. System', 'la salud pública · el acceso a la sanidad'],
              ['Urbanisierung',       'Megastädte: Mexico D.F., Buenos Aires, Bogotá · Slums (favelas, villas)', 'las villas miseria · las favelas · la urbanización'],
              ['Korruption',          'Einer der Haupthindernisse für Entwicklung',              'la corrupción · la impunidad · la transparencia'],
            ],
          })}

          ${renderInfobox({ type: '', icon: 'fas fa-city', title: 'Las villas miseria / favelas — urbane Armut',
            body: `In allen lateinamerikanischen Großstädten gibt es riesige informelle Siedlungen:<br>
                   <strong>Mexiko:</strong> <em>colonias populares</em> · <strong>Argentinien:</strong> <em>villas miseria</em> · <strong>Brasilien:</strong> <em>favelas</em> · <strong>Venezuela:</strong> <em>barrios</em><br>
                   Diese Gebiete sind geprägt von mangelnder Infrastruktur, Unsicherheit, aber auch von starker Gemeinschaft und kultureller Kreativität (Musik, Kunst, Sport).` })}

          ${ej('La desigualdad en América Latina es estructural: no solo económica, sino también racial, de género y territorial.', 'Die Ungleichheit in Lateinamerika ist strukturell: nicht nur wirtschaftlich, sondern auch rassisch, nach Geschlecht und territorial.')}
        </div>

        <!-- ② Migration -->
        <div class="wim-category hidden" data-wim-cat="migration">
          <h3 class="lz-h3">La migración latinoamericana — Die Grenze zu den USA</h3>

          ${renderTable({
            headers: ['Aspekt', 'Information', 'Vokabular'],
            rows: [
              ['Hauptmigrationsziel',   'USA · Spanien · Chile · Argentinien',                      'el destino migratorio'],
              ['Ursachen',              'Armut, Gewalt (pandillas), Klimakatastrophen, politische Repression', 'las pandillas · el crimen organizado · la violencia'],
              ['Die Grenze USA-Mexiko', '3.145 km · meistüberquerte Grenze der Welt · Trump-Mauer', 'el muro · la frontera · el cruce ilegal'],
              ['Los Dreamers',          'Ca. 700.000 junge Menschen, in USA aufgewachsen, ohne Papiere', 'el DACA · los indocumentados · el sueño americano'],
              ['Karawanen',             'Massenaufzüge aus Zentralamerika durch Mexiko in die USA',  'la caravana migrante · el asilo · la deportación'],
              ['Venezuela-Exodus',      '7+ Mio. Venezolaner geflohen · größte Flüchtlingskrise LA', 'la crisis venezolana · la diáspora venezolana'],
              ['Remesas',               'Geldüberweisungen in Heimat = wichtige Wirtschaftsgröße',   'las remesas · el sustento familiar'],
              ['Risiken der Route',     'Wüste, Kriminelle, Abschiebung, Tod',                       'el desierto · los coyotes / polleros · la muerte'],
            ],
          })}

          ${renderCompare({
            titleA: 'Sueño americano — Der amerikanische Traum',
            titleB: 'Realidad migratoria — Die Migrationswirklichkeit',
            listA: [
              'mejor calidad de vida',
              'oportunidades laborales',
              'educación para los hijos',
              'seguridad y paz',
              'reunificación familiar',
              'libertad y derechos',
            ],
            listB: [
              'peligros extremos en la ruta',
              'explotación laboral',
              'discriminación y racismo',
              'miedo a la deportación',
              'separación de familias',
              'vida en la clandestinidad',
            ],
          })}

          ${ej('Cada año, miles de centroamericanos arriesgan sus vidas cruzando México para llegar a la frontera con los Estados Unidos.', 'Jedes Jahr riskieren tausende Zentralamerikaner ihr Leben beim Durchqueren Mexikos, um die US-amerikanische Grenze zu erreichen.')}
        </div>

        <!-- ③ Indigene Völker -->
        <div class="wim-category hidden" data-wim-cat="indigena">
          <h3 class="lz-h3">Los pueblos indígenas — Indigene Völker Lateinamerikas</h3>
          <p class="lz-prose">Etwa 50–60 Millionen Menschen in Lateinamerika gehören indigenen Völkern an — ca. 10% der Bevölkerung. Sie kämpfen um Land, kulturelle Rechte und politische Teilhabe.</p>

          ${renderTable({
            headers: ['Aspekt', 'Information', 'Vokabular'],
            rows: [
              ['Bevölkerung',   'ca. 50–60 Mio. Indígenas in LA · höchster Anteil in Bolivia (>40%), Guatemala (>40%), Peru (~25%)', 'los pueblos indígenas · las comunidades originarias'],
              ['Sprachen',      'Über 400 indigene Sprachen · Quechua (8 Mio. Sprecher) · Náhuatl · Aimara · Guaraní',              'las lenguas indígenas · el quechua · el bilingüismo'],
              ['Landrechte',    'Konflikte mit Bergbaufirmen, Agrarunternehmen, Staudammprojekten',                                   'los derechos territoriales · la tierra · el extractivismo'],
              ['Recht auf Konsultation','ILO-Konvention 169: Recht auf freie, vorherige, informierte Konsultation',                  'la consulta previa · el consentimiento · la ILO'],
              ['Politische Part.','Bolivia: Evo Morales (2006–2019) — erster indigener Präsident LA\'s',                             'la representación política · el movimiento indígena'],
              ['Umwelt',        'Indigene Gemeinschaften schützen 80% der Biodiversität auf 22% der Weltlandfläche',                  'la cosmovisión indígena · el Buen Vivir'],
              ['Diskriminierung','Struktureller Rassismus · Armut · mangelnder Zugang zu Bildung und Gesundheit',                    'el racismo estructural · la exclusión'],
            ],
          })}

          ${renderInfobox({ type: 'blue', icon: 'fas fa-leaf', title: 'El Buen Vivir — Eine andere Entwicklungsvorstellung',
            body: `<em>Buen Vivir</em> (Quechua: <em>Sumak Kawsay</em>) ist ein indigenes Konzept des guten Lebens im Einklang mit der Natur und der Gemeinschaft — als Alternative zum westlichen Wachstumsmodell.<br>
                   <strong>In Verfassungen:</strong> Ecuador (2008) und Bolivia (2009) haben das Buen Vivir und die Rechte der Natur (<em>los derechos de la naturaleza / de la Pachamama</em>) in ihre Verfassungen aufgenommen.<br>
                   <strong>Vokabular:</strong> la Pachamama · la armonía · la comunidad · el extractivismo vs. el Buen Vivir` })}

          ${ej('Los pueblos indígenas defienden sus territorios frente al avance de las empresas extractivistas que amenazan sus tierras y su modo de vida.', 'Die indigenen Völker verteidigen ihre Gebiete gegenüber dem Vordringen der Extraktionsunternehmen, die ihr Land und ihre Lebensweise bedrohen.')}
        </div>

        <!-- ④ Frauen & Gewalt -->
        <div class="wim-category hidden" data-wim-cat="frauen">
          <h3 class="lz-h3">Feminismo & Feminicidio — Frauenrechte und genderbasierte Gewalt</h3>

          ${renderTable({
            headers: ['Begriff', 'Deutsch', 'Kontext'],
            rows: [
              ['el feminicidio / femicidio', 'der Feminizid',           'Mord an Frauen aufgrund ihres Geschlechts · LA hat weltweit höchste Raten'],
              ['la violencia de género',     'häusliche / genderbasierte Gewalt', 'strukturelles Problem in ganz LA'],
              ['el machismo',                'der Machismus',            'patriarchale Kultur · Unterordnung der Frau'],
              ['el movimiento feminista',    'die feministische Bewegung','stark in México (marea verde), Argentina, Chile'],
              ['#NiUnaMenos',                'Nicht eine weniger',       'argentinische Bewegung gegen Feminizid (ab 2015)'],
              ['el pañuelo verde',           'das grüne Tuch',           'Symbol für Abtreibungsrechte in LA (marea verde)'],
              ['el derecho al aborto',       'das Abtreibungsrecht',     'Argentinien (2020), México (teilweise), Chile debattiert'],
              ['la brecha salarial',         'der Gender Pay Gap',       'Frauen verdienen 20–30% weniger in LA'],
              ['la paridad de género',       'die Geschlechterparität',  'in Parlamenten noch selten erreicht'],
              ['las mujeres desaparecidas',  'die verschwundenen Frauen','besonders akut in México (>35.000 Fälle)'],
            ],
          })}

          ${renderInfobox({ type: 'warning', icon: 'fas fa-venus', title: '#NiUnaMenos — Eine regionale Bewegung',
            body: `2015 in Argentinien gegründet als Reaktion auf steigende Feminizide. Der Slogan <em>«Ni una menos»</em> verbreitete sich über ganz Lateinamerika und Spanien.<br>
                   <strong>Schlüsseldaten:</strong> In LA werden täglich ca. 12 Frauen durch Feminizid getötet · Mexiko hat über 10 Feminizide pro Tag.<br>
                   <strong>Vokabular:</strong> el feminicidio · la impunidad · el patriarcado · el movimiento feminista · la marea verde · el pañuelo verde` })}

          ${ej('El movimiento #NiUnaMenos surgió en Argentina en 2015 y se extendió por toda América Latina como respuesta al alarmante aumento de los feminicidios.', 'Die Bewegung #NiUnaMenos entstand 2015 in Argentinien und breitete sich über ganz Lateinamerika aus als Reaktion auf den alarmierenden Anstieg der Feminizide.')}
          ${ej('En 2020, Argentina aprobó la ley de interrupción voluntaria del embarazo, convirtiéndose en un referente para el movimiento feminista latinoamericano.', '2020 verabschiedete Argentinien das Gesetz zur freiwilligen Schwangerschaftsunterbrechung und wurde damit zu einem Vorbild für die lateinamerikanische feministische Bewegung.')}
        </div>

      </div>
    </section>

    <section class="lz-content-section" style="padding:1.5rem 0 3rem;">
      <div class="lz-section-wrap">
        ${renderPageNav({
          prev: { label: '3.3 Latinoamérica: Geschichte', link: `${BASE}/themen/landeskunde/lateinamerika`          },
          next: { label: '3.5 Literatura & Arte',          link: `${BASE}/themen/landeskunde/literatur-kunst`        },
        }, BASE)}
      </div>
    </section>
    ${footerHTML(this.router)}
  `; }

  init() { i18n.init(); initScrollReveal(); initInteractive(document); initWimTabs(document); }
}