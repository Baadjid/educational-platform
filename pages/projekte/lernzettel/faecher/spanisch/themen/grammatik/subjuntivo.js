// pages/projekte/lernzettel/faecher/spanisch/themen/grammatik/subjuntivo.js
// 1.3 — Subjuntivo · Der Konjunktiv

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

function ej(es, de, note = '') {
  return `<div class="lz-es-ejemplo">
    <span class="lz-es-ejemplo-es">«${es}»</span>
    <span class="lz-es-ejemplo-de">${de}</span>
    ${note ? `<span class="lz-es-ejemplo-note">${note}</span>` : ''}
  </div>`;
}

// ─── WIM-Tab-Daten ───────────────────────────────────────────────
const SUBJ_TABS = [
  { key: 'wunsch',    label: 'Wunsch & Wille'       },
  { key: 'bewertung', label: 'Bewertung & Emotion'   },
  { key: 'zweifel',   label: 'Zweifel & Verneinung'  },
  { key: 'temporal',  label: 'Temporal- & Finalsätze'},
  { key: 'relativ',   label: 'Relativsätze'          },
];

export default class Spanisch_Subjuntivo {
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
    el.style.setProperty('--lz-accent',     COLOR);
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
          <i class="fas fa-chevron-right"></i><span>Grammatik</span>
          <i class="fas fa-chevron-right"></i><span>1.3 Subjuntivo</span>
        </div>
        <h1 class="lz-sub-title">El Subjuntivo —<br><em>Der Konjunktiv</em></h1>
        <p class="lz-sub-desc">
          Presente &amp; Imperfecto de Subjuntivo · WUDHU-Regel · Alle Auslöser
          mit Beispielen · Temporalsätze · Relativsätze
        </p>
        ${renderTags(['1.3', 'Subjuntivo', 'Konjunktiv', 'WUDHU', 'Grammatik', 'Abitur 2026'])}
      </div>
    </section>

    <section class="lz-content-section">
      <div class="lz-section-wrap">

        ${renderSubhead('Was ist der Subjuntivo?')}
        <h2 class="lz-h2 reveal">Subjuntivo — Modus der Subjektivität</h2>
        <p class="lz-prose reveal">Der Subjuntivo ist kein Zeitform, sondern ein <strong>Modus</strong> — er drückt aus, wie der Sprecher eine Aussage bewertet: als Wunsch, Zweifel, Hypothese, Notwendigkeit oder unbekannte Realität. Er steht fast immer in einem Nebensatz mit <em>que</em> (oder anderen Konjunktionen), wenn das Subjekt des Hauptsatzes sich vom Subjekt des Nebensatzes unterscheidet.</p>

        ${renderInfobox({ type: 'blue', icon: 'fas fa-graduation-cap', title: 'Die WUDHU-Regel — 5 Hauptkategorien',
          body: `<strong>W</strong>unsch und Wille: <em>quiero que, espero que, deseo que, ojalá</em><br>
                 <strong>U</strong>ngewissheit und Zweifel: <em>dudo que, no creo que, es posible que, quizás, tal vez</em><br>
                 <strong>D</strong>eutung / Bewertung: <em>es importante que, es necesario que, es bueno que, me gusta que</em><br>
                 <strong>H</strong>ypothese (Si-Sätze Typ II+III): <em>si tuviera…, si hubiera tenido…</em><br>
                 <strong>U</strong>nbewiesenes / Unbekanntes: <em>no creo que sea verdad, busco a alguien que sepa…</em>` })}

        <!-- Bildung -->
        <div class="reveal" style="margin-top:2.5rem;">
          ${renderSubhead('Bildung')}
          <h2 class="lz-h2">Presente de Subjuntivo — Bildung</h2>
          <p class="lz-prose"><strong>Grundregel:</strong> Nehme die <em>yo</em>-Form des Präsens Indikativ → streiche das -o → füge die Subjuntivo-Endungen an. Dadurch erben unregelmäßige yo-Formen ihre Unregelmäßigkeit in alle Subjuntivo-Formen.</p>

          ${renderTable({
            headers: ['Person', '-ar (hablar)', '-er (comer)', '-ir (vivir)', 'hacer (hago→hag-)'],
            rows: [
              ['yo',          'hable',    'coma',    'viva',    'haga'],
              ['tú',          'hables',   'comas',   'vivas',   'hagas'],
              ['él/ella/ud.', 'hable',    'coma',    'viva',    'haga'],
              ['nosotros',    'hablemos', 'comamos', 'vivamos', 'hagamos'],
              ['vosotros',    'habléis',  'comáis',  'viváis',  'hagáis'],
              ['ellos/uds.',  'hablen',   'coman',   'vivan',   'hagan'],
            ],
          })}

          <p class="lz-prose" style="margin-top:1rem;"><strong>Unregelmäßige Subjuntivo-Formen (DISHES):</strong></p>
          ${renderTable({
            headers: ['Verb', 'yo', 'tú', 'él', 'nosotros', 'vosotros', 'ellos', 'Merkhilfe'],
            rows: [
              ['dar',   'dé',   'des',   'dé',   'demos',   'deis',   'den',   'D'],
              ['ir',    'vaya', 'vayas', 'vaya', 'vayamos', 'vayáis', 'vayan', 'I'],
              ['ser',   'sea',  'seas',  'sea',  'seamos',  'seáis',  'sean',  'S'],
              ['haber', 'haya', 'hayas', 'haya', 'hayamos', 'hayáis', 'hayan', 'H'],
              ['estar', 'esté', 'estés', 'esté', 'estemos', 'estéis', 'estén', 'E'],
              ['saber', 'sepa', 'sepas', 'sepa', 'sepamos', 'sepáis', 'sepan', 'S'],
            ],
          })}
          ${renderInfobox({ type: '', icon: 'fas fa-magic', title: 'Merkhilfe: DISHES',
            body: 'Die 6 vollständig unregelmäßigen Formen: <strong>D</strong>ar · <strong>I</strong>r · <strong>S</strong>er · <strong>H</strong>aber · <strong>E</strong>star · <strong>S</strong>aber' })}
        </div>

        <!-- Imperfecto de Subjuntivo -->
        <div class="reveal" style="margin-top:2.5rem;">
          ${renderSubhead('Imperfecto de Subjuntivo')}
          <h2 class="lz-h2">Imperfecto de Subjuntivo — Bildung</h2>
          <p class="lz-prose"><strong>Grundregel:</strong> 3. Person Plural (ellos) des Indefinido → streiche -ron → füge -ra/-se-Endungen an. Alle Unregelmäßigkeiten des Indefinido übertragen sich!</p>

          ${renderTable({
            headers: ['Person', '-ra-Form (häufiger)', '-se-Form (literarisch)', 'Beispiel (tener → tuvie-)'],
            rows: [
              ['yo',          '-ra',    '-se',    'tuviera / tuviese'],
              ['tú',          '-ras',   '-ses',   'tuvieras / tuvieses'],
              ['él/ella/ud.', '-ra',    '-se',    'tuviera / tuviese'],
              ['nosotros',    '-ramos', '-semos', 'tuviéramos / tuviésemos'],
              ['vosotros',    '-rais',  '-seis',  'tuvierais / tuvieseis'],
              ['ellos/uds.',  '-ran',   '-sen',   'tuvieran / tuviesen'],
            ],
          })}

          <p class="lz-prose"><strong>Wichtige Formen:</strong> ser/ir → fuera · tener → tuviera · hacer → hiciera · venir → viniera · poder → pudiera · estar → estuviera · haber → hubiera · saber → supiera.</p>
          ${ej('Esperaba que vinieras puntual.', 'Ich hatte gehofft, dass du pünktlich kommen würdest.', 'Imperfecto Subj. nach Imperfecto im Hauptsatz')}
        </div>

        <!-- WIM-Tabs: Verwendung -->
        <div class="reveal" style="margin-top:2.5rem;">
          ${renderSubhead('Verwendung')}
          <h2 class="lz-h2">Wann Subjuntivo?</h2>

          <nav class="wim-tabs" id="subjTabs" aria-label="Subjuntivo-Kategorien">
            ${SUBJ_TABS.map((t, i) => `
              <button class="wim-tab${i === 0 ? ' active' : ''}" data-wim="${t.key}">
                ${t.label}
              </button>`).join('')}
          </nav>

          ${this._panelWunsch()}
          ${this._panelBewertung()}
          ${this._panelZweifel()}
          ${this._panelTemporal()}
          ${this._panelRelativ()}
        </div>

        <!-- Zeitenfolge -->
        <div class="reveal" style="margin-top:3rem;">
          ${renderSubhead('Zeitenfolge')}
          <h2 class="lz-h2">Consecutio Temporum — Zeitenfolge</h2>
          <p class="lz-prose">Die Zeitform im Subjuntivo-Satz richtet sich nach der Zeitform des Hauptsatzes:</p>
          ${renderTable({
            headers: ['Hauptsatz (Zeitform)', 'Subjuntivo-Nebensatz', 'Beispiel'],
            rows: [
              ['Präsens / Futur',         'Presente Subjuntivo',   'Quiero que vengas. / Querrá que estudies.'],
              ['Imperativ',               'Presente Subjuntivo',   '¡Dile que venga!'],
              ['Indefinido / Imperfecto', 'Imperfecto Subjuntivo', 'Quería que vinieras. / Le dije que fuera.'],
              ['Condicional',             'Imperfecto Subjuntivo', 'Querría que vinieras.'],
              ['Pluscuamperf. / Perf.',   'Pluscuamp. Subjuntivo', 'Había esperado que hubieras llegado antes.'],
            ],
          })}
        </div>

        <!-- Häufige Fehler -->
        <div class="reveal" style="margin-top:2rem;">
          ${renderInfobox({ type: 'warning', icon: 'fas fa-exclamation-triangle', title: 'Häufige Fehler — Subjuntivo',
            body: `<strong>① Gleiches Subjekt → Infinitiv, nicht Subjuntivo:</strong><br>
                   <em>Falsch: *Quiero que vaya. (gleiche Person)</em> → Korrekt: <em>Quiero ir.</em><br>
                   <em>Richtig bei verschiedenen Subjekten: Quiero que ella vaya.</em><br>
                   <strong>② Indikativ nach negativen Meinungsverben:</strong><br>
                   <em>No creo que es verdad</em> → <em>No creo que sea verdad.</em><br>
                   <strong>③ cuando: Zukunft → Subjuntivo · Vergangenheit/Gewohnheit → Indikativo:</strong><br>
                   <em>Cuando llegues, llámame.</em> (Subj.) vs. <em>Cuando llegaba, la saludaba.</em> (Ind.)` })}
        </div>

      </div>
    </section>

    <section class="lz-content-section" style="padding:1.5rem 0 3rem;">
      <div class="lz-section-wrap">
        ${renderPageNav({
          prev: { label: '1.2 Ser vs. Estar',  link: `${BASE}/themen/grammatik/ser-estar`      },
          next: { label: '1.4 Indirekte Rede', link: `${BASE}/themen/grammatik/indirekte-rede` },
        }, BASE)}
      </div>
    </section>
    ${footerHTML(this.router)}
  `; }

  // ═══════════════════════════════════════════════════════════════
  // WIM-PANELS
  // ═══════════════════════════════════════════════════════════════

  _panelWunsch() { return `
    <div class="wim-category" data-wim-cat="wunsch">
      <h3 class="lz-h3">Wunsch, Wille, Hoffnung</h3>
      <p class="lz-prose">Nach Verben des Wollens, Wünschens, Hoffnens, Bittens, Erlaubens und Verbietens steht im Nebensatz der Subjuntivo — vorausgesetzt, die Subjekte sind verschieden.</p>
      ${renderTable({
        headers: ['Auslöser', 'Bedeutung', 'Beispiel'],
        rows: [
          ['querer que',     'wollen, dass',         'Quiero que me digas la verdad.'],
          ['desear que',     'wünschen, dass',       'Deseo que tengas suerte en el examen.'],
          ['esperar que',    'hoffen, dass',         'Espero que todo salga bien.'],
          ['pedir que',      'bitten, dass',         'Te pido que seas puntual.'],
          ['decir que',      'sagen, dass (Wunsch)', 'Dile que venga mañana.'],
          ['recomendar que', 'empfehlen, dass',      'Te recomiendo que estudies más.'],
          ['permitir que',   'erlauben, dass',       'No les permito que hablen así.'],
          ['ojalá (que)',    'hoffentlich',          'Ojalá (que) apruebe el examen.'],
        ],
      })}
      ${ej('Mis padres quieren que estudie medicina, pero yo prefiero el arte.', 'Meine Eltern wollen, dass ich Medizin studiere, aber ich bevorzuge Kunst.', 'Verschiedene Subjekte → Subjuntivo')}
      ${ej('Ojalá haga buen tiempo el día de nuestra excursión.', 'Hoffentlich ist das Wetter gut am Tag unseres Ausflugs.', 'Ojalá — immer mit Subjuntivo')}
    </div>`; }

  _panelBewertung() { return `
    <div class="wim-category hidden" data-wim-cat="bewertung">
      <h3 class="lz-h3">Bewertung, Emotion, unpersönliche Ausdrücke</h3>
      <p class="lz-prose">Unpersönliche Ausdrücke mit <em>es + Adjektiv + que</em> sowie Verben der Emotion lösen Subjuntivo aus, wenn eine Bewertung oder Reaktion auf eine fremde Handlung ausgedrückt wird.</p>
      ${renderTable({
        headers: ['Auslöser', 'Bedeutung', 'Beispiel'],
        rows: [
          ['es importante que',      'es ist wichtig, dass',     'Es importante que todos participen.'],
          ['es necesario que',       'es ist nötig, dass',       'Es necesario que llegues a tiempo.'],
          ['es bueno/malo que',      'es ist gut/schlecht, dass','Es malo que no comas verduras.'],
          ['es normal que',          'es ist normal, dass',      'Es normal que estés nervioso.'],
          ['es posible/probable que','es ist möglich, dass',     'Es posible que llueva mañana.'],
          ['me alegra que',          'ich freue mich, dass',     'Me alegra que hayas venido.'],
          ['me sorprende que',       'es überrascht mich, dass', 'Me sorprende que no lo sepas.'],
          ['me molesta que',         'es stört mich, dass',      'Me molesta que siempre llegues tarde.'],
          ['temer que',              'befürchten, dass',         'Temo que no lleguemos a tiempo.'],
        ],
      })}
      ${ej('Es fundamental que los jóvenes aprendan idiomas desde pequeños.', 'Es ist grundlegend, dass junge Menschen von klein auf Sprachen lernen.', 'Unpersönlicher Ausdruck + Subjuntivo')}
      ${ej('Me parece bien que hayas tomado esa decisión.', 'Es scheint mir gut, dass du diese Entscheidung getroffen hast.', 'Emotion + Subjuntivo')}
    </div>`; }

  _panelZweifel() { return `
    <div class="wim-category hidden" data-wim-cat="zweifel">
      <h3 class="lz-h3">Zweifel, Verneinung, Ungewissheit</h3>
      <p class="lz-prose">Nach Ausdrücken des Zweifels oder der verneinten Gewissheit steht Subjuntivo. Bejahte Meinungsverben (<em>creer, pensar, estar seguro</em>) stehen mit Indikativo!</p>
      ${renderTable({
        headers: ['Auslöser', 'Modus', 'Beispiel'],
        rows: [
          ['dudar que',              'Subjuntivo',      'Dudo que venga a tiempo.'],
          ['no creer que',           'Subjuntivo',      'No creo que sea tan difícil.'],
          ['no pensar que',          'Subjuntivo',      'No pienso que tenga razón.'],
          ['no estar seguro de que', 'Subjuntivo',      'No estoy seguro de que sepa la respuesta.'],
          ['negar que',              'Subjuntivo',      'Niega que haya dicho eso.'],
          ['quizás / tal vez',       'Subj. od. Ind.', 'Quizás venga / viene. (Subj. = unsicherer)'],
          ['creer que',              'Indicativo',      'Creo que tiene razón.'],
          ['pensar que',             'Indicativo',      'Pienso que está en casa.'],
          ['estar seguro de que',    'Indicativo',      'Estoy seguro de que vendrá.'],
        ],
        highlight: [6, 7, 8],
      })}
      ${ej('No creo que este problema tenga una solución sencilla.', 'Ich glaube nicht, dass dieses Problem eine einfache Lösung hat.', 'Verneinung → Subjuntivo')}
      ${ej('Quizás sea mejor esperar un poco más.', 'Vielleicht ist es besser, noch etwas zu warten.', 'Quizás + Subjuntivo = mehr Ungewissheit')}
    </div>`; }

  _panelTemporal() { return `
    <div class="wim-category hidden" data-wim-cat="temporal">
      <h3 class="lz-h3">Temporal-, Final- und Konzessivsätze</h3>
      <p class="lz-prose">Konjunktionen, die Zeitpunkte in der Zukunft oder Hypothetisches einleiten, verlangen Subjuntivo. Bei Gewohnheit/Vergangenheit steht Indikativo!</p>
      ${renderTable({
        headers: ['Konjunktion', 'Bedeutung', 'Modus', 'Beispiel'],
        rows: [
          ['cuando',        'wenn/als (Zeit)',   'Zukunft → Subj. · Vg. → Ind.', 'Cuando llegues, llámame. / Cuando llegaba, saludaba.'],
          ['antes de que',  'bevor',             'immer Subjuntivo',              'Llámame antes de que salgas.'],
          ['después de que','nachdem',           'Zukunft → Subj. · Vg. → Ind.', 'Te escribiré después de que llegue.'],
          ['hasta que',     'bis',               'Zukunft → Subj.',               'Espera hasta que llegue.'],
          ['en cuanto',     'sobald',            'Zukunft → Subj.',               'En cuanto sepa algo, te aviso.'],
          ['para que',      'damit',             'immer Subjuntivo',              'Te lo explico para que lo entiendas.'],
          ['a fin de que',  'damit',             'immer Subjuntivo',              'Habló despacio a fin de que le comprendiéramos.'],
          ['aunque',        'obwohl/auch wenn',  'Subj.=unbekannt · Ind.=bekannt','Aunque llueva, saldré. / Aunque llueve, salgo.'],
          ['sin que',       'ohne dass',         'immer Subjuntivo',              'Salió sin que nadie lo viera.'],
        ],
      })}
      ${ej('En cuanto termines el trabajo, podemos salir a cenar.', 'Sobald du die Arbeit beendet hast, können wir essen gehen.', 'en cuanto + Subjuntivo für Zukunft')}
      ${ej('Estudia mucho para que puedas ir a la universidad que deseas.', 'Lern viel, damit du an die Universität gehen kannst, die du möchtest.', 'para que → immer Subjuntivo')}
    </div>`; }

  _panelRelativ() { return `
    <div class="wim-category hidden" data-wim-cat="relativ">
      <h3 class="lz-h3">Relativsätze mit Subjuntivo</h3>
      <p class="lz-prose">In Relativsätzen steht Subjuntivo, wenn das Bezugswort unbekannt, unbestimmt oder nicht existent ist. Bei bekannten/definierten Bezugswörtern steht Indikativo.</p>
      ${renderTable({
        headers: ['Bezugswort', 'Modus', 'Beispiel'],
        rows: [
          ['Unbekannt/unbestimmt',        'Subjuntivo', 'Busco a alguien que hable chino.'],
          ['Bekannt/definiert',           'Indicativo', 'Conozco a alguien que habla chino.'],
          ['Verneinung (nadie/nada)',      'Subjuntivo', 'No hay nadie que sepa la respuesta.'],
          ['Superlativ (hypothetisch)',    'Subjuntivo', 'Necesito el mejor candidato que pueda encontrar.'],
        ],
      })}
      ${ej('Necesitamos un empleado que tenga experiencia en marketing digital.', 'Wir brauchen einen Mitarbeiter, der Erfahrung im digitalen Marketing hat.', 'Unbekannte Person → Subjuntivo')}
      ${ej('Tenemos un empleado que tiene mucha experiencia en marketing digital.', 'Wir haben einen Mitarbeiter, der viel Erfahrung im digitalen Marketing hat.', 'Bekannte Person → Indicativo')}
      ${ej('No encuentro ningún restaurante que sirva comida vegetariana aquí.', 'Ich finde kein Restaurant, das hier vegetarisches Essen anbietet.', 'Verneinung → Subjuntivo')}
    </div>`; }

  // ═══════════════════════════════════════════════════════════════

  init() {
    i18n.init();
    initScrollReveal();
    initInteractive(document);
    initWimTabs(document);
  }
}