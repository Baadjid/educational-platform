// pages/projekte/lernzettel/faecher/spanisch/themen/wortschatz/konnektoren.js
// 2.6 — Conectores & Frases útiles · Konnektoren & nützliche Phrasen

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
  { key: 'additiv',    label: '① Additiv'      },
  { key: 'kausal',     label: '② Kausal'        },
  { key: 'adversativ', label: '③ Adversativ'    },
  { key: 'temporal',   label: '④ Temporal'      },
  { key: 'final',      label: '⑤ Final'         },
  { key: 'struktur',   label: '⑥ Textstruktur'  },
];

export default class Spanisch_Konnektoren {
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
          <i class="fas fa-chevron-right"></i><span>2.6 Konnektoren</span>
        </div>
        <h1 class="lz-sub-title">Conectores & Frases —<br><em>Konnektoren</em></h1>
        <p class="lz-sub-desc">
          Additive, kausale, adversative, temporale & finale Konnektoren ·
          Textstrukturierung · Meinungsäußerung · Schlussfolgerungen
        </p>
        ${renderTags(['2.6', 'Konnektoren', 'Conectores', 'Textproduktion', 'Wortschatz', 'Abitur 2026'])}
      </div>
    </section>

    <section class="lz-content-section">
      <div class="lz-section-wrap">

        ${renderSubhead('Warum Konnektoren?')}
        <h2 class="lz-h2 reveal">Konnektoren — Das Rückgrat des Abituraufsatzes</h2>
        <p class="lz-prose reveal">Konnektoren sind das wichtigste Stilmittel für kohärente Texte auf B2+-Niveau. Ein Aufsatz ohne Konnektoren besteht aus isolierten Sätzen — mit Konnektoren entsteht ein argumentativer Text. Die Prüfer bewerten Varietät und korrekten Einsatz explizit.</p>

        ${renderInfobox({ type: 'blue', icon: 'fas fa-star', title: 'Goldene Regel für den Aufsatz',
          body: `Verwende <strong>nie zweimal denselben Konnektor</strong> direkt hintereinander.
                 Variiere: statt dreimal <em>pero</em> → <em>sin embargo / no obstante / a pesar de ello / aunque</em>.
                 Das zeigt Sprachkompetenz und erhöht die Bewertung deutlich.` })}

        <nav class="wim-tabs" id="konn Tabs" aria-label="Konnektoren-Kategorien">
          ${TABS.map((t, i) => `
            <button class="wim-tab${i === 0 ? ' active' : ''}" data-wim="${t.key}">${t.label}</button>`).join('')}
        </nav>

        <!-- ① Additiv -->
        <div class="wim-category" data-wim-cat="additiv">
          <h3 class="lz-h3">Additive Konnektoren — Hinzufügen, Ergänzen</h3>
          <p class="lz-prose">Verbinden gleichrangige Informationen, fügen Argumente hinzu oder steigern.</p>

          ${renderTable({
            headers: ['Konnektor', 'Deutsch', 'Stellung', 'Beispiel'],
            rows: [
              ['y / e',               'und',                          'zwischen Satzteilen', 'La economía y la tecnología cambian.'],
              ['además',              'außerdem / darüber hinaus',    'Satzanfang / -mitte', 'Además, hay que considerar…'],
              ['también',             'auch / ebenfalls',             'vor Verb',            'También es importante destacar…'],
              ['asimismo',            'ebenso / gleichermaßen',       'Satzanfang',          'Asimismo, cabe mencionar…'],
              ['del mismo modo',      'auf die gleiche Weise',        'Satzanfang',          'Del mismo modo, este fenómeno…'],
              ['igualmente',          'gleichermaßen',                'Satzanfang',          'Igualmente, debemos tener en cuenta…'],
              ['incluso',             'sogar',                        'vor dem Betonten',    'Incluso los expertos lo desconocen.'],
              ['es más',              'darüber hinaus / noch mehr',   'Satzanfang',          'Es más, la situación empeora.'],
              ['no solo… sino también','nicht nur… sondern auch',    'korrelativ',          'No solo afecta a los jóvenes, sino también a…'],
              ['tanto… como',         'sowohl… als auch',             'korrelativ',          'Tanto en España como en Latinoamérica…'],
              ['por un lado… por otro','einerseits… andererseits',   'korrelativ',          'Por un lado… Por otro (lado)…'],
              ['aparte de',           'abgesehen von / außer',        'vor Nomen/Inf.',      'Aparte de los costes económicos…'],
            ],
          })}

          ${renderInfobox({ type: '', icon: 'fas fa-lightbulb', title: 'Steigerung mit además / es más',
            body: `<em>Además</em> fügt einfach hinzu. <em>Es más</em> steigert das Argument und signalisiert: „Und das ist noch nicht alles — es ist noch schlimmer/besser".<br>
                   <em>El desempleo aumenta. Además, los salarios caen. Es más, la pobreza infantil alcanza niveles históricos.</em>` })}
        </div>

        <!-- ② Kausal -->
        <div class="wim-category hidden" data-wim-cat="kausal">
          <h3 class="lz-h3">Kausale & konsekutive Konnektoren — Grund & Folge</h3>

          ${renderTable({
            headers: ['Konnektor', 'Deutsch', 'Struktur', 'Beispiel'],
            rows: [
              ['porque',              'weil',                    'Konj. + Indikativ',         'Es difícil porque no hay recursos.'],
              ['ya que',              'da / weil',               'Konj. + Indikativ',         'Ya que el tiempo es limitado, debemos actuar.'],
              ['puesto que',          'da / weil (formal)',      'Konj. + Indikativ',         'Puesto que la situación es grave, urge actuar.'],
              ['dado que',            'da / angesichts dessen',  'Konj. + Indikativ',         'Dado que los recursos son escasos…'],
              ['debido a',            'aufgrund von',            'Präp. + Nomen/Inf.',         'Debido a la crisis, muchos emigran.'],
              ['a causa de',          'wegen',                   'Präp. + Nomen',              'A causa de la sequía, la cosecha fue mala.'],
              ['gracias a',           'dank',                    'Präp. + Nomen (positiv)',    'Gracias a la tecnología, avanzamos.'],
              ['por eso',             'deshalb / darum',         'Satzanfang',                 'Por eso, es necesario tomar medidas.'],
              ['por esta razón',      'aus diesem Grund',        'Satzanfang',                 'Por esta razón, hay que actuar de inmediato.'],
              ['por tanto / por ende','daher / folglich',        'Satzanfang (formell)',       'Por tanto, se requieren cambios estructurales.'],
              ['en consecuencia',     'infolgedessen',           'Satzanfang',                 'En consecuencia, la pobreza aumenta.'],
              ['como consecuencia',   'als Konsequenz',          'Satzanfang',                 'Como consecuencia de ello, muchos emigran.'],
              ['de ahí que',          'daher / weshalb',         'de ahí que + Subjuntivo',    'De ahí que sea necesario actuar.'],
            ],
          })}

          ${renderInfobox({ type: 'warning', icon: 'fas fa-exclamation-triangle', title: 'porque vs. por qué vs. porqué',
            body: `<strong>porque</strong> (Konjunktion, Begründung): <em>Lo hago porque quiero.</em><br>
                   <strong>por qué</strong> (Fragewort): <em>¿Por qué lo haces?</em><br>
                   <strong>el porqué</strong> (Substantiv): <em>No entiendo el porqué de su decisión.</em><br>
                   <strong>por que</strong> (Präp. + Relativ, selten): <em>La razón por que lo hice…</em>` })}
        </div>

        <!-- ③ Adversativ -->
        <div class="wim-category hidden" data-wim-cat="adversativ">
          <h3 class="lz-h3">Adversative & konzessive Konnektoren — Gegensatz & Einräumung</h3>

          ${renderTable({
            headers: ['Konnektor', 'Deutsch', 'Nuancen', 'Beispiel'],
            rows: [
              ['pero',                  'aber',                        'allgemein, häufig',           'Es útil, pero tiene límites.'],
              ['sin embargo',           'jedoch / dennoch',            'formeller als pero',          'Sin embargo, no todo es positivo.'],
              ['no obstante',           'nichtsdestotrotz',            'sehr formell/schriftlich',    'No obstante, hay alternativas.'],
              ['a pesar de',            'trotz',                       'Präp. + Nomen/Infinitiv',     'A pesar de los esfuerzos, falla.'],
              ['a pesar de que',        'obwohl',                      'Konj. + Indikativ',           'A pesar de que mejora, no es suficiente.'],
              ['aunque',                'obwohl / auch wenn',          'Ind. (bekannt) / Subj. (unbekannt)', 'Aunque es difícil, es posible.'],
              ['por más que',           'so sehr… auch',               '+ Subjuntivo',                'Por más que lo intente, no lo logra.'],
              ['en cambio',             'dagegen / hingegen',          'Kontrast zweier Sätze',       'En España llueve poco; en cambio, en el norte…'],
              ['por el contrario',      'im Gegenteil',                'vollständiger Widerspruch',   'No es un problema menor; por el contrario…'],
              ['al contrario de',       'im Gegensatz zu',             'vor Nomen',                   'Al contrario de lo que se piensa…'],
              ['si bien',               'wenn auch / obwohl',          'formell',                     'Si bien es cierto que… , también es verdad que…'],
              ['aun así',               'trotzdem',                    'trotz des Gesagten',          'Aun así, debemos intentarlo.'],
            ],
          })}

          ${renderMerkboxGrid([
            {
              icon: 'fas fa-arrows-alt-h',
              title: 'pero vs. sin embargo vs. no obstante',
              text: `<em>pero</em>: alltäglich, häufig<br>
                     <em>sin embargo</em>: gehobener, schriftlich<br>
                     <em>no obstante</em>: sehr formell, akademisch<br>
                     Alle drei drücken Kontrast aus — Varietät ist entscheidend!`,
            },
            {
              icon: 'fas fa-balance-scale',
              title: 'aunque + Indikativ vs. Subjuntivo',
              text: `<em>Aunque llueve</em> (es regnet gerade, das weiß ich) → Indikativo<br>
                     <em>Aunque llueva</em> (auch wenn es regnen sollte) → Subjuntivo<br>
                     Kontext entscheidet den Modus!`,
            },
          ])}
        </div>

        <!-- ④ Temporal -->
        <div class="wim-category hidden" data-wim-cat="temporal">
          <h3 class="lz-h3">Temporale Konnektoren — Zeitliche Abfolge</h3>

          ${renderTable({
            headers: ['Konnektor', 'Deutsch', 'Modus', 'Beispiel'],
            rows: [
              ['cuando',              'als / wenn (Zeit)',         'Vg. → Ind. · Zukunft → Subj.', 'Cuando llegué, ella ya había salido.'],
              ['mientras (que)',      'während',                   'Indikativ',                    'Mientras estudiaba, escuchaba música.'],
              ['antes de que',        'bevor',                     'immer Subjuntivo',              'Llámame antes de que salgas.'],
              ['después de que',      'nachdem',                   'Vg. → Ind. · Zukft. → Subj.', 'Después de que llegó, hablamos.'],
              ['en cuanto / tan pronto como', 'sobald',            'Zukunft → Subjuntivo',         'En cuanto llegues, llámame.'],
              ['hasta que',           'bis',                       'Zukunft → Subjuntivo',         'Espera hasta que llegue.'],
              ['desde que',           'seit / seitdem',            'Indikativ',                    'Desde que llegó, todo cambió.'],
              ['cada vez que',        'jedes Mal wenn / immer wenn','Indikativ',                   'Cada vez que viajo, aprendo algo nuevo.'],
              ['a medida que',        'je mehr… desto / während', 'Indikativo',                    'A medida que pasa el tiempo, mejora.'],
              ['al + Infinitivo',     'beim / als',                'Infinitiv',                    'Al llegar a casa, me relajé.'],
              ['nada más + Infinitivo','sobald / kaum dass',       'Infinitiv',                    'Nada más salir, empezó a llover.'],
              ['de repente',          'plötzlich',                 'Adverb',                       'De repente, todo cambió.'],
              ['finalmente / al final','schließlich / letztendlich','Adverb',                      'Finalmente, llegó a un acuerdo.'],
            ],
          })}
        </div>

        <!-- ⑤ Final -->
        <div class="wim-category hidden" data-wim-cat="final">
          <h3 class="lz-h3">Finale, konditionale & modale Konnektoren</h3>

          ${renderTable({
            headers: ['Kategorie', 'Konnektor', 'Deutsch', 'Beispiel'],
            rows: [
              ['Final',      'para que',              'damit',                          'Lo explico para que lo entiendas.'],
              ['Final',      'a fin de que',           'damit / mit dem Ziel, dass',    'A fin de que mejore la situación…'],
              ['Final',      'con el objetivo de',     'mit dem Ziel zu',               'Con el objetivo de reducir emisiones…'],
              ['Final',      'con el fin de',          'mit dem Ziel zu',               'Con el fin de mejorar la educación…'],
              ['Final',      'para + Infinitivo',      'um zu',                         'Estudio para aprender.'],
              ['Konditional', 'si',                    'wenn / falls',                  'Si estudias, aprobarás.'],
              ['Konditional', 'siempre que',            'vorausgesetzt dass / sofern',   'Siempre que haya voluntad política…'],
              ['Konditional', 'con tal de que',         'sofern / vorausgesetzt',        'Con tal de que se esfuerce…'],
              ['Konditional', 'a menos que / a no ser que','es sei denn, dass',         'A menos que cambien las políticas…'],
              ['Modal',      'como',                   'wie / so wie',                  'Como indica el estudio…'],
              ['Modal',      'tal como',               'so wie / genauso wie',          'Tal como señalan los expertos…'],
              ['Modal',      'según',                  'laut / gemäß',                  'Según los datos del INE…'],
              ['Komparativ', 'más… que',               'mehr… als',                     'Es más complejo de lo que parece.'],
              ['Komparativ', 'tan… como',              'so… wie',                       'Tan importante como el resultado es el proceso.'],
            ],
          })}
        </div>

        <!-- ⑥ Textstruktur -->
        <div class="wim-category hidden" data-wim-cat="struktur">
          <h3 class="lz-h3">Textstrukturierung — Aufsatz von Anfang bis Ende</h3>
          <p class="lz-prose">Diese Phrasen strukturieren einen Aufsatz, einen Kommentar oder eine Stellungnahme auf B2+-Niveau:</p>

          ${renderTable({
            headers: ['Funktion', 'Formulierungen'],
            rows: [
              ['Einleitung',         'En la actualidad, … · Hoy en día, … · En el mundo actual, … · El tema que nos ocupa es… · El texto trata de…'],
              ['Thema nennen',       'El autor aborda / plantea / reflexiona sobre… · El artículo analiza / critica / defiende…'],
              ['Eigene Meinung',     'En mi opinión, … · Desde mi punto de vista, … · A mi modo de ver, … · Considero que… · Creo / Pienso que…'],
              ['Argument einführen', 'En primer lugar, … · En segundo lugar, … · Por un lado, … · Cabe destacar que… · Hay que tener en cuenta que…'],
              ['Beispiel geben',     'Por ejemplo, … · A modo de ejemplo, … · Un buen ejemplo de ello es… · Como ilustra el caso de…'],
              ['Gegenmeinung',       'Es cierto que… sin embargo, … · Aunque algunos sostienen que… · Si bien es verdad que…'],
              ['Konsequenz',         'Como consecuencia, … · Por tanto, … · En consecuencia, … · Esto implica que… · De ello se desprende que…'],
              ['Schlussfolgerung',   'En conclusión, … · En resumen, … · Para concluir, … · En definitiva, … · Todo ello nos lleva a concluir que…'],
              ['Forderung/Appell',   'Es necesario / imprescindible que… · Urge adoptar medidas… · Es responsabilidad de todos…'],
              ['Quellenangabe',      'Según el texto, … · De acuerdo con el autor, … · Como señala el artículo, … · Tal como indica…'],
            ],
          })}

          ${renderMerkboxGrid([
            {
              icon: 'fas fa-file-alt',
              title: 'Aufsatz-Struktur (5 Abschnitte)',
              text: `<strong>① Introducción:</strong> Thema einleiten, These nennen<br>
                     <strong>② Argumento 1:</strong> Hauptargument + Beispiel<br>
                     <strong>③ Argumento 2:</strong> Weiteres Argument / Gegenargument<br>
                     <strong>④ Valoración:</strong> Eigene Meinung<br>
                     <strong>⑤ Conclusión:</strong> Zusammenfassung + Ausblick`,
            },
            {
              icon: 'fas fa-pen-fancy',
              title: 'Meinungsäußerung — Varietät',
              text: `<em>En mi opinión</em> → <em>Desde mi perspectiva</em><br>
                     → <em>A mi juicio</em> → <em>Considero que</em><br>
                     → <em>Estoy convencido/a de que</em><br>
                     → <em>No cabe duda de que</em>`,
            },
            {
              icon: 'fas fa-check-double',
              title: 'Schlussformeln',
              text: `<em>En conclusión</em> → <em>En definitiva</em><br>
                     → <em>Para concluir</em> → <em>En resumen</em><br>
                     → <em>Todo ello nos lleva a pensar que…</em><br>
                     → <em>En último término, …</em>`,
            },
          ])}
        </div>

      </div>
    </section>

    <section class="lz-content-section" style="padding:1.5rem 0 3rem;">
      <div class="lz-section-wrap">
        ${renderPageNav({
          prev: { label: '2.5 Technologie', link: `${BASE}/themen/wortschatz/technologie` },
          next: { label: '3.1 Geschichte', link: `${BASE}/themen/landeskunde/spanien-geschichte.js` },
        }, BASE)}
      </div>
    </section>
    ${footerHTML(this.router)}
  `; }

  init() { i18n.init(); initScrollReveal(); initInteractive(document); initWimTabs(document); }
}