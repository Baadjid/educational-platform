// pages/projekte/lernzettel/faecher/spanisch/themen/wortschatz/grundwortschatz.js
// 2.1 — Vocabulario básico · Grundwortschatz

import { initScrollReveal } from '../../../../../../../shared/js/index.js';
import { footerHTML }        from '../../../../../../../components/Footer.js';
import { i18n }              from '../../../../../../../shared/js/i18n.js';
import { initWimTabs }       from '../../../../../../../shared/js/wim-tabs.js';
import {
  ensureComponentsCSS, renderInfobox, renderTable,
  renderSubhead, renderTags, renderMerkboxGrid, initInteractive,
} from '../../../../js/components/components.js';
import { COLOR, COLOR_RGB, BASE } from '../../spanisch.js';
import { renderPageNav } from '../../../../js/components/subnav.js';
const TABS = [
  { key: 'verben',     label: '① Verben'      },
  { key: 'adjektive',  label: '② Adjektive'   },
  { key: 'nomen',      label: '③ Nomen'        },
  { key: 'zeitangaben',label: '④ Zeitangaben'  },
];

export default class Spanisch_Grundwortschatz {
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
          <i class="fas fa-chevron-right"></i><span>2.1 Grundwortschatz</span>
        </div>
        <h1 class="lz-sub-title">Vocabulario básico —<br><em>Grundwortschatz</em></h1>
        <p class="lz-sub-desc">
          Die häufigsten Verben · Wichtigste Adjektive und Nomen ·
          Zeitangaben · Unverzichtbares Basisvokabular für B2+
        </p>
        ${renderTags(['2.1', 'Grundwortschatz', 'Verben', 'Adjektive', 'Wortschatz', 'Abitur 2026'])}
      </div>
    </section>

    <section class="lz-content-section">
      <div class="lz-section-wrap">

        ${renderSubhead('Überblick')}
        <h2 class="lz-h2 reveal">Basisvokabular für alle Themen</h2>
        <p class="lz-prose reveal">Dieser Wortschatz ist themenunabhängig und taucht in nahezu jedem Abiturtext auf. Sichere Beherrschung dieser Einheiten ist Voraussetzung für alle weiteren Themengebiete.</p>

        <nav class="wim-tabs" id="grundTabs" aria-label="Grundwortschatz-Kategorien">
          ${TABS.map((t, i) => `
            <button class="wim-tab${i === 0 ? ' active' : ''}" data-wim="${t.key}">${t.label}</button>`).join('')}
        </nav>

        <!-- ① Verben -->
        <div class="wim-category" data-wim-cat="verben">
          ${renderSubhead('Verben')}
          <h3 class="lz-h3">Die 60 wichtigsten Verben</h3>

          ${renderTable({
            headers: ['Infinitiv', 'Bedeutung', 'Infinitiv', 'Bedeutung'],
            rows: [
              ['ser',          'sein (Wesen)',        'estar',       'sein (Zustand/Ort)'],
              ['tener',        'haben',               'haber',       'haben (Hilfsverb)'],
              ['hacer',        'machen/tun',          'decir',       'sagen'],
              ['poder',        'können',              'querer',      'wollen/lieben'],
              ['ir',           'gehen/fahren',        'venir',       'kommen'],
              ['dar',          'geben',               'ver',         'sehen'],
              ['saber',        'wissen/können',       'conocer',     'kennen'],
              ['llevar',       'tragen/bringen',      'dejar',       'lassen/verlassen'],
              ['seguir',       'folgen/weiterhin',    'encontrar',   'finden/treffen'],
              ['llamar',       'rufen/nennen',        'pensar',      'denken/glauben'],
              ['creer',        'glauben',             'hablar',      'sprechen/reden'],
              ['llegar',       'ankommen',            'salir',       'ausgehen/heraus'],
              ['pasar',        'passieren/verbringen','trabajar',    'arbeiten'],
              ['vivir',        'leben/wohnen',        'estudiar',    'studieren/lernen'],
              ['necesitar',    'brauchen',            'parecer',     'scheinen/erscheinen'],
              ['buscar',       'suchen',              'poner',       'stellen/legen/setzen'],
              ['empezar',      'anfangen',            'terminar',    'beenden'],
              ['intentar',     'versuchen',           'conseguir',   'schaffen/erreichen'],
              ['permitir',     'erlauben',            'ayudar',      'helfen'],
              ['crear',        'erschaffen',          'cambiar',     'ändern/wechseln'],
              ['mejorar',      'verbessern',          'afectar',     'betreffen/beeinflussen'],
              ['desarrollar',  'entwickeln',          'aumentar',    'zunehmen/erhöhen'],
              ['reducir',      'reduzieren',          'depender',    'abhängen'],
              ['preocupar',    'besorgen/sorgen',     'proteger',    'schützen'],
              ['resolver',     'lösen',               'enfrentarse', 'sich stellen/gegenüberstehen'],
              ['destacar',     'hervorheben',         'suponer',     'annehmen/bedeuten'],
              ['lograr',       'erreichen/gelingen',  'carecer',     'mangeln/fehlen (de)'],
              ['provocar',     'verursachen',         'generar',     'erzeugen/verursachen'],
              ['contribuir',   'beitragen',           'garantizar',  'garantieren'],
              ['plantear',     'aufwerfen/vorlegen',  'proponer',    'vorschlagen'],
            ],
          })}

          ${renderInfobox({ type: 'blue', icon: 'fas fa-star', title: 'Verben für Textanalyse & Meinungsäußerung',
            body: `<strong>Argumentation:</strong> afirmar · sostener · argumentar · señalar · indicar · demostrar · confirmar · negar · rechazar · cuestionar<br>
                   <strong>Meinung:</strong> considerar · opinar · creer · pensar · estimar · valorar · juzgar<br>
                   <strong>Konsequenz:</strong> provocar · causar · generar · llevar a · dar lugar a · resultar en` })}
        </div>

        <!-- ② Adjektive -->
        <div class="wim-category hidden" data-wim-cat="adjektive">
          ${renderSubhead('Adjektive')}
          <h3 class="lz-h3">Wichtigste Adjektive — themenübergreifend</h3>

          ${renderTable({
            headers: ['Adjektiv', 'Bedeutung', 'Adjektiv', 'Bedeutung'],
            rows: [
              ['importante',    'wichtig',              'necesario/a',    'notwendig'],
              ['posible',       'möglich',              'imposible',      'unmöglich'],
              ['difícil',       'schwierig',            'fácil',          'leicht/einfach'],
              ['diferente',     'unterschiedlich',      'similar',        'ähnlich'],
              ['grande',        'groß/bedeutend',       'pequeño/a',      'klein'],
              ['nuevo/a',       'neu',                  'antiguo/a',      'alt/ehemalig'],
              ['mejor',         'besser',               'peor',           'schlechter'],
              ['mayor',         'größer/älter',         'menor',          'kleiner/jünger'],
              ['propio/a',      'eigen',                'ajeno/a',        'fremd/von anderen'],
              ['actual',        'aktuell/gegenwärtig',  'futuro/a',       'zukünftig'],
              ['social',        'sozial',               'político/a',     'politisch'],
              ['económico/a',   'wirtschaftlich',       'cultural',       'kulturell'],
              ['global',        'global',               'local',          'lokal'],
              ['positivo/a',    'positiv',              'negativo/a',     'negativ'],
              ['grave',         'ernst/schwerwiegend',  'urgente',        'dringend'],
              ['complejo/a',    'komplex',              'sencillo/a',     'einfach'],
              ['creciente',     'wachsend/zunehmend',   'constante',      'konstant/stetig'],
              ['significativo/a','bedeutend/signifikant','relevante',     'relevant'],
              ['eficaz',        'wirksam/effektiv',     'ineficaz',       'unwirksam'],
              ['sostenible',    'nachhaltig',           'inevitable',     'unvermeidlich'],
            ],
          })}

          <p class="lz-prose" style="margin-top:1rem;"><strong>Adjektive für Bewertung und Einschätzung:</strong></p>
          ${renderTable({
            headers: ['Positiv', 'Negativ', 'Neutral/Beschreibend'],
            rows: [
              ['beneficioso/a (vorteilhaft)',   'perjudicial (schädlich)',      'considerable (beträchtlich)'],
              ['fundamental (grundlegend)',      'preocupante (besorgniserr.)',   'destacado/a (herausragend)'],
              ['innovador/a (innovativ)',        'alarmante (alarmierend)',       'notable (bemerkenswert)'],
              ['prometedor/a (vielversprechend)','controversial (umstritten)',    'ambiguo/a (zweideutig)'],
              ['imprescindible (unverzichtbar)', 'desigual (ungleich)',           'complejo/a (komplex)'],
            ],
          })}
        </div>

        <!-- ③ Nomen -->
        <div class="wim-category hidden" data-wim-cat="nomen">
          ${renderSubhead('Nomen')}
          <h3 class="lz-h3">Unverzichtbare Substantive</h3>

          ${renderTable({
            headers: ['Español', 'Deutsch', 'Español', 'Deutsch'],
            rows: [
              ['el problema (m.)',      'das Problem',           'la solución',        'die Lösung'],
              ['el cambio',             'die Veränderung',       'el desarrollo',      'die Entwicklung'],
              ['la sociedad',           'die Gesellschaft',      'la comunidad',       'die Gemeinschaft'],
              ['el gobierno',           'die Regierung',         'la política',        'die Politik'],
              ['la economía',           'die Wirtschaft',        'el mercado',         'der Markt'],
              ['la cultura',            'die Kultur',            'la tradición',       'die Tradition'],
              ['la educación',          'die Bildung/Erziehung', 'el conocimiento',    'das Wissen'],
              ['la información',        'die Information',       'los medios (de com.)','die Medien'],
              ['la tecnología',         'die Technologie',       'la innovación',      'die Innovation'],
              ['el medio ambiente',     'die Umwelt',            'la naturaleza',      'die Natur'],
              ['la crisis',             'die Krise',             'el conflicto',       'der Konflikt'],
              ['la oportunidad',        'die Gelegenheit/Chance','el reto/desafío',    'die Herausforderung'],
              ['la igualdad',           'die Gleichheit',        'la desigualdad',     'die Ungleichheit'],
              ['la libertad',           'die Freiheit',          'el derecho',         'das Recht'],
              ['la responsabilidad',    'die Verantwortung',     'el compromiso',      'das Engagement'],
              ['el ciudadano',          'der Bürger',            'la persona',         'die Person'],
              ['la generación',         'die Generation',        'el futuro',          'die Zukunft'],
              ['el impacto',            'die Auswirkung',        'las consecuencias',  'die Konsequenzen'],
              ['el aumento',            'der Anstieg',           'la reducción',       'die Reduzierung'],
              ['el ámbito',             'der Bereich',           'el sector',          'der Sektor'],
            ],
          })}

          ${renderInfobox({ type: '', icon: 'fas fa-language', title: 'Genus-Fallen — häufige Fehler',
            body: `<strong>Maskulin (trotz -a-Endung):</strong> el problema · el tema · el sistema · el clima · el programa · el mapa · el idioma · el poema<br>
                   <strong>Feminin (trotz -o-Endung oder ungewohnt):</strong> la mano · la radio · la foto · la moto<br>
                   <strong>Beide Genera, Bedeutungsunterschied:</strong> el capital (Kapital) / la capital (Hauptstadt) · el orden (Reihenfolge) / la orden (Befehl)` })}
        </div>

        <!-- ④ Zeitangaben -->
        <div class="wim-category hidden" data-wim-cat="zeitangaben">
          ${renderSubhead('Zeitangaben')}
          <h3 class="lz-h3">Zeitangaben und temporale Ausdrücke</h3>

          ${renderTable({
            headers: ['Ausdruck', 'Bedeutung', 'Beispiel'],
            rows: [
              ['actualmente / hoy en día', 'heutzutage / gegenwärtig',  'Actualmente, el uso de las redes es enorme.'],
              ['en la actualidad',         'gegenwärtig / derzeit',      'En la actualidad, muchos jóvenes…'],
              ['en los últimos años',      'in den letzten Jahren',      'En los últimos años ha aumentado…'],
              ['desde hace + Zeit',        'seit + Zeitspanne',          'Desde hace décadas, la tecnología cambia…'],
              ['a lo largo de los años',   'im Laufe der Jahre',         'A lo largo de los años, la sociedad…'],
              ['en el pasado',             'in der Vergangenheit',       'En el pasado, las mujeres no podían votar.'],
              ['en el futuro',             'in der Zukunft',             'En el futuro, la IA desempeñará un papel clave.'],
              ['a corto/largo plazo',      'kurz-/langfristig',          'A largo plazo, esto generará problemas.'],
              ['de momento / por ahora',   'im Moment / vorerst',        'De momento, no hay una solución clara.'],
              ['cada vez más/menos',       'immer mehr/weniger',         'Cada vez más personas usan el móvil.'],
              ['poco a poco',              'nach und nach',              'Poco a poco, la situación mejora.'],
              ['con el paso del tiempo',   'mit der Zeit',               'Con el paso del tiempo, todo cambia.'],
              ['recientemente',            'kürzlich / unlängst',        'Recientemente se han publicado estudios.'],
              ['anteriormente',            'früher / zuvor',             'Anteriormente, no existía internet.'],
              ['simultáneamente',          'gleichzeitig',               'Simultáneamente, varios países actuaron.'],
            ],
          })}

          ${renderMerkboxGrid([
            {
              icon: 'fas fa-clock',
              title: 'Zeitangaben für Aufsätze',
              text: `<strong>Einleitung:</strong> <em>En la actualidad…</em> / <em>Hoy en día…</em><br>
                     <strong>Vergangenheitsbezug:</strong> <em>Históricamente…</em> / <em>En el pasado…</em><br>
                     <strong>Zukunftsperspektive:</strong> <em>En el futuro…</em> / <em>A largo plazo…</em>`,
            },
            {
              icon: 'fas fa-chart-line',
              title: 'Trends ausdrücken',
              text: `<em>cada vez más</em> (immer mehr)<br>
                     <em>de forma creciente</em> (in zunehmendem Maße)<br>
                     <em>progresivamente</em> (zunehmend)<br>
                     <em>paulatinamente</em> (allmählich)`,
            },
          ])}
        </div>

      </div>
    </section>

    <section class="lz-content-section" style="padding:1.5rem 0 3rem;">
      <div class="lz-section-wrap">
        ${renderPageNav({
          prev: null,
          next: { label: '2.2 Gesellschaft & Politik', link: `${BASE}/themen/wortschatz/gesellschaft-politik` },
        }, BASE)}
      </div>
    </section>
    ${footerHTML(this.router)}
  `; }

  init() { i18n.init(); initScrollReveal(); initInteractive(document); initWimTabs(document); }
}