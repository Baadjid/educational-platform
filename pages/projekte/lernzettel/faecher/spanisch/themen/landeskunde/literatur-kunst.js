// pages/projekte/lernzettel/faecher/spanisch/themen/landeskunde/literatur-kunst.js
// 3.5 — Literatura & Arte hispanohablante

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
  { key: 'litespanien',label: '① Lit. Spanien'    },
  { key: 'litlatam',   label: '② Lit. Lateinamerika'},
  { key: 'realismo',   label: '③ Realismo mágico' },
  { key: 'arte',       label: '④ Kunst & Musik'   },
];

export default class Spanisch_Literatur_Kunst {
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
          <i class="fas fa-chevron-right"></i><span>3.5 Literatura & Arte</span>
        </div>
        <h1 class="lz-sub-title">Literatura & Arte —<br><em>hispanohablante</em></h1>
        <p class="lz-sub-desc">
          Spanische Literatur · Lateinamerikanischer Boom · Realismo mágico ·
          Bildende Kunst · Musik & Tanz
        </p>
        ${renderTags(['3.5', 'Literatura', 'Arte', 'Realismo mágico', 'Boom', 'Landeskunde', 'Abitur 2026'])}
      </div>
    </section>

    <section class="lz-content-section">
      <div class="lz-section-wrap">

        ${renderSubhead('Cultura hispánica')}
        <h2 class="lz-h2 reveal">Literatur & Kunst — Überblick</h2>
        <p class="lz-prose reveal">Die hispanophone Welt hat eine außerordentlich reiche Literatur- und Kunsttradition hervorgebracht — von Cervantes über den lateinamerikanischen Boom bis zu zeitgenössischen Autoren. Kenntnisse darüber sind für Textanalyse und Kulturverständnis im Abitur unverzichtbar.</p>

        <nav class="wim-tabs" id="artTabs" aria-label="Kunst-Kategorien">
          ${TABS.map((t, i) => `
            <button class="wim-tab${i === 0 ? ' active' : ''}" data-wim="${t.key}">${t.label}</button>`).join('')}
        </nav>

        <!-- ① Literatur Spanien -->
        <div class="wim-category" data-wim-cat="litespanien">
          <h3 class="lz-h3">Literatura española — Spanische Literatur von Cervantes bis heute</h3>

          ${renderTable({
            headers: ['Epoche / Bewegung', 'Vertreter', 'Werke & Merkmale'],
            rows: [
              ['Siglo de Oro (16.–17. Jh.)', 'Cervantes · Lope de Vega · Quevedo · Calderón', 'Don Quijote (1605/15) · Comedia española · konzeptistische Lyrik'],
              ['Ilustración (18. Jh.)',       'Jovellanos · Moratín',                           'Vernunft, Aufklärung · Teatro reformado'],
              ['Romanticismo (19. Jh.)',       'Gustavo Adolfo Bécquer · José Zorrilla',         'Rimas y Leyendas (Bécquer) · Don Juan Tenorio (Zorrilla)'],
              ['Realismo / Naturalismo',      'Benito Pérez Galdós · Emilia Pardo Bazán',        'Fortunata y Jacinta · Gesellschaftskritik'],
              ['Generación del 98',           'Antonio Machado · Unamuno · Baroja',              'Reaktion auf Verlust der Kolonien · Identitätssuche Spaniens'],
              ['Vanguardias / Generación del 27','Federico García Lorca · Rafael Alberti · Salinas', 'Romancero gitano · Bodas de sangre · avant-garde Lyrik'],
              ['Posguerra / Franquismus',     'Camilo José Cela · Carmen Laforet',              'La familia de Pascual Duarte · Nada · Tristura und Unterdrückung'],
              ['Demokratie bis heute',        'Javier Marías · Almudena Grandes · Antonio Muñoz Molina', 'Erinnerungskultur · Vielstimmigkeit · Gegenwartsliteratur'],
            ],
          })}

          ${renderInfobox({ type: 'blue', icon: 'fas fa-book-open', title: 'Federico García Lorca (1898–1936)',
            body: `Einer der bedeutendsten Dichter und Dramatiker des 20. Jahrhunderts · <em>Generación del 27</em> · born in Granada, andalusische und gitane Motive prägend.<br>
                   <strong>Hauptwerke:</strong> <em>Romancero gitano</em> (Lyrik) · <em>Bodas de sangre</em> (Drama) · <em>La casa de Bernarda Alba</em> (Drama) · <em>Poeta en Nueva York</em><br>
                   <strong>Tod:</strong> Erschossen von Franquisten 1936 (Beginn des Bürgerkriegs) · sein Tod wurde zum Symbol für Unterdrückung und Zensur.<br>
                   <strong>Themen:</strong> la pasión · la muerte · el destino · la represión · la libertad · el duende` })}

          ${ej('La obra de Lorca refleja el alma andaluza, el duende y la tragedia del destino frente a la represión social.', 'Lorcas Werk spiegelt die andalusische Seele, den Duende und die Tragödie des Schicksals gegenüber gesellschaftlicher Unterdrückung wider.')}
        </div>

        <!-- ② Literatur Lateinamerika -->
        <div class="wim-category hidden" data-wim-cat="litlatam">
          <h3 class="lz-h3">Literatura latinoamericana — El Boom y más allá</h3>

          ${renderTable({
            headers: ['Autor', 'Land', 'Werk', 'Besonderheit'],
            rows: [
              ['Gabriel García Márquez','Colombia', 'Cien años de soledad (1967)',  'Realismo mágico · Nobelpreis 1982 · Macondo als Spiegel Lateinamerikas'],
              ['Mario Vargas Llosa',    'Perú',     'La ciudad y los perros (1963)', 'Sozialkritik · politisch engagiert · Nobelpreis 2010'],
              ['Jorge Luis Borges',     'Argentinien','Ficciones · El Aleph',        'Labyrinthische Erzählungen · Philosophie · Zeit und Identität'],
              ['Julio Cortázar',        'Argentinien','Rayuela (1963)',              'Experimenteller Roman · Leser entscheidet die Reihenfolge'],
              ['Carlos Fuentes',        'México',    'La muerte de Artemio Cruz',    'Mexikanische Revolution · Identität · Zeit'],
              ['Pablo Neruda',          'Chile',     'Veinte poemas de amor… · Canto General', 'Nobelpreis 1971 · Liebesdichtung + politische Lyrik'],
              ['Gabriela Mistral',      'Chile',     'Desolación · Ternura',         'Erste Nobelpreisträgerin LA (1945) · Kinderlyrik und Mutterschaft'],
              ['Isabel Allende',        'Chile',     'La casa de los espíritus (1982)','Realismo mágico · Familiengeschichte · Pinochet-Diktatur'],
              ['Laura Esquivel',        'México',    'Como agua para chocolate (1989)','Magie des Alltags · Liebe und Küche · weibliche Perspektive'],
              ['Octavio Paz',           'México',    'El laberinto de la soledad',    'Nobelpreis 1990 · mexikanische Identität und Einsamkeit'],
            ],
          })}

          ${renderInfobox({ type: '', icon: 'fas fa-book', title: 'El Boom latinoamericano (1960–1970er)',
            body: `Der Boom bezeichnet den Aufstieg der lateinamerikanischen Literatur zur Weltliteratur in den 1960er/70er Jahren.<br>
                   <strong>Merkmale:</strong> experimentelle Erzähltechniken · nichtlineare Zeit · Vermischung von Realem und Magischem · gesellschaftspolitischer Inhalt · internationale Verlage (Barcelona: Seix Barral)<br>
                   <strong>Kernautoren:</strong> García Márquez · Vargas Llosa · Fuentes · Cortázar (die "Vier Großen" des Boom)<br>
                   <strong>Vokabular:</strong> el Boom literario · la experimentación · el compromiso político · la identidad latinoamericana` })}
        </div>

        <!-- ③ Realismo mágico -->
        <div class="wim-category hidden" data-wim-cat="realismo">
          <h3 class="lz-h3">El Realismo mágico — Magischer Realismus</h3>
          <p class="lz-prose">Der Magische Realismus ist die bekannteste literarische Strömung Lateinamerikas: Das Magische und Übernatürliche wird als normaler, selbstverständlicher Teil der Wirklichkeit dargestellt — ohne Staunen, ohne Erklärung.</p>

          ${renderTable({
            headers: ['Merkmal', 'Erklärung', 'Beispiel aus Cien años de soledad'],
            rows: [
              ['Lo mágico como real',     'Übernatürliches wird nicht erklärt, sondern als Fakt präsentiert', '«Macondo war übersät mit Schmetterlingen, wann immer Mauricio Babilonia erschien»'],
              ['Mezcla de tiempos',        'Vergangenheit, Gegenwart und Zukunft fließen ineinander',         'Die zirkuläre Zeit der Buendía-Familie'],
              ['Alegoría social/política', 'Das Magische ist oft Metapher für politische oder soziale Realität','Der Regen, der 4 Jahre dauert = Kolonialismus/Abhängigkeit'],
              ['La soledad como tema',     'Einsamkeit als fundamentale Erfahrung Lateinamerikas',            'Jedes Mitglied der Buendía-Familie ist grundlegend einsam'],
              ['El narrador omnisciente',  'Allwissender Erzähler mit distanziertem Ton',                     'Erzähler berichtet vom Flug Remedios ohne Überraschung'],
            ],
          })}

          ${renderMerkboxGrid([
            {
              icon: 'fas fa-magic',
              title: 'Schlüsselvokabular Realismo mágico',
              text: `<em>lo mágico / lo sobrenatural</em><br>
                     <em>la realidad alternativa</em><br>
                     <em>lo cotidiano (das Alltägliche)</em><br>
                     <em>la alegoría · el símbolo · la metáfora</em><br>
                     <em>la cosmovisión indígena</em>`,
            },
            {
              icon: 'fas fa-quote-left',
              title: 'Cien años de soledad (1967)',
              text: `García Márquez · Saga der Familie Buendía im fiktiven Dorf Macondo · 7 Generationen · zirkuläre Zeit · gilt als größter spanischsprachiger Roman des 20. Jahrhunderts`,
            },
          ])}

          ${ej('En el realismo mágico, lo sobrenatural no se presenta como algo extraordinario, sino como una parte más de la realidad cotidiana.', 'Im Magischen Realismus wird das Übernatürliche nicht als etwas Außerordentliches dargestellt, sondern als ein weiterer Teil der alltäglichen Wirklichkeit.')}
        </div>

        <!-- ④ Kunst & Musik -->
        <div class="wim-category hidden" data-wim-cat="arte">
          <h3 class="lz-h3">Arte & Música — Bildende Kunst und Musik</h3>

          ${renderTable({
            headers: ['Künstler/in', 'Land', 'Werk / Stil', 'Bedeutung'],
            rows: [
              ['Pablo Picasso',      'España (Málaga)', 'Guernica · Kubismus · Blaue und Rosa Periode', 'Einflussreichster Künstler des 20. Jh.'],
              ['Salvador Dalí',      'España (Katalonien)', 'Die beständige Erinnerung · Surrealismus',  'Surrealismus · Teatro-Dalí Figueres'],
              ['Joan Miró',          'España (Katalonien)', 'Abstrakte Formen · helle Farben',           'Katalanischer Maler · abstrakt-surreal'],
              ['Francisco Goya',     'España (Aragón)',  'Los fusilamientos · Saturn verschlingt seinen Sohn', 'Übergang Klassik-Romantik · Gesellschaftskritik'],
              ['Diego Rivera',       'México',           'Wandbilder im Palacio Nacional',              'Muralismo · mexikanische Geschichte und Identität'],
              ['Frida Kahlo',        'México',           'Las dos Fridas · Selbstportraits',            'Feminismus · indigene Identität · Schmerz und Stärke'],
              ['Fernando Botero',    'Colombia',         'Voluminöse Figuren (Boterismo)',               'Kritik an Macht und Gewalt durch übertriebene Körperlichkeit'],
            ],
          })}

          ${renderAccordion([
            {
              title: 'Música hispana — Von Flamenco bis Reggaeton',
              content: `
                ${renderTable({
                  headers: ['Genre', 'Herkunft', 'Merkmale', 'Vertreter'],
                  rows: [
                    ['Flamenco',   'Andalucía, España',    'cante · baile · guitarra · duende · UNESCO-Erbe', 'Camarón de la Isla · Paco de Lucía · Rosalía'],
                    ['Tango',      'Argentina/Uruguay',    'Melancholie · zweideutige Paarbeziehung · Bandoneón', 'Carlos Gardel · Astor Piazzolla'],
                    ['Cumbia',     'Colombia',             'Afrikanische und indigene Einflüsse · Tanzmusik',     'Carlos Vives · Joe Arroyo'],
                    ['Salsa',      'Karibik (NY/PR/Cuba)', 'Percussion · schneller Rhythmus · soziale Themen',   'Celia Cruz · Marc Anthony · Rubén Blades'],
                    ['Reggaeton',  'Puerto Rico',          'Dembow-Rhythmus · urbaner Sound · kritisiert und populär', 'Bad Bunny · J Balvin · Daddy Yankee'],
                    ['Nueva Canción','Chile/Argentina',    'Politisch engagiert · Diktaturwiderstand',           'Victor Jara · Mercedes Sosa · Violeta Parra'],
                    ['Reguetón/Trap','Latinx USA/global',  'Globaler Einfluss · Spanglish · Streaming',          'Bad Bunny · Karol G · Rosalía'],
                  ],
                })}
              `,
            },
          ])}

          ${renderInfobox({ type: 'blue', icon: 'fas fa-female', title: 'Frida Kahlo — Symbol für Widerstand',
            body: `Frida Kahlo (1907–1954) — mexikanische Malerin · Selbstportraits als Auseinandersetzung mit Schmerz, Identität und weiblicher Erfahrung · politisch engagiert (Kommunistin) · Beziehung zu Diego Rivera.<br>
                   Heute Symbol des Feminismus, der LGTB+-Bewegung und der lateinamerikanischen Identität.<br>
                   <strong>Themen ihrer Malerei:</strong> el dolor físico · la identidad indígena y mexicana · el feminismo · la bisexualidad · el cuerpo femenino` })}

          ${ej('La Nueva Canción latinoamericana fue una forma de resistencia cultural contra las dictaduras militares de los años setenta.', 'Die Neue Canción Lateinamerikas war eine Form des kulturellen Widerstands gegen die Militärdiktaturen der 1970er Jahre.')}
        </div>

      </div>
    </section>

    <section class="lz-content-section" style="padding:1.5rem 0 3rem;">
      <div class="lz-section-wrap">
        ${renderPageNav({
          prev: { label: '3.4 Gesellschaft Lateinamerikas', link: `${BASE}/themen/landeskunde/gesellschaft-lateinamerika` },
          next: null,
        }, BASE)}
      </div>
    </section>
    ${footerHTML(this.router)}
  `; }

  init() { i18n.init(); initScrollReveal(); initInteractive(document); initWimTabs(document); }
}