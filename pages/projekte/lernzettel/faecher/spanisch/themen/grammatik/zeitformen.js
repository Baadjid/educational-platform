// pages/projekte/lernzettel/faecher/spanisch/themen/grammatik/zeitformen.js
// 1.1 — Tiempos verbales · Alle Zeitformen des Spanischen

import { initScrollReveal } from '../../../../../../../shared/js/index.js';
import { footerHTML }        from '../../../../../../../components/Footer.js';
import { i18n }              from '../../../../../../../shared/js/i18n.js';
import { initWimTabs }       from '../../../../../../../shared/js/wim-tabs.js';
import {
  ensureComponentsCSS, renderInfobox, renderTable,
  renderSubhead, renderTags, renderAccordion,
  renderCompare, initInteractive,
} from '../../../../js/components/components.js';
import { COLOR, COLOR_RGB, BASE } from '../../spanisch.js';
import { renderPageNav } from '../../../../js/components/subnav.js';

function ej(es, de, note = '') {
  return `
    <div class="lz-es-ejemplo">
      <span class="lz-es-ejemplo-es">«${es}»</span>
      <span class="lz-es-ejemplo-de">${de}</span>
      ${note ? `<span class="lz-es-ejemplo-note">${note}</span>` : ''}
    </div>`;
}

// ─── WIM-Tab-Daten ───────────────────────────────────────────────
const ZEITEN_TABS = [
  { key: 'presente',    label: '① Presente'           },
  { key: 'vg',         label: '② Vergangenheit'       },
  { key: 'futuro',     label: '③ Futuro & Condicional' },
  { key: 'gerundio',   label: '④ Verlaufsform'         },
];

export default class Spanisch_Zeitformen {
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
    <!-- ══ HERO ══ -->
    <section class="lz-sub-hero" style="--kap-color:${COLOR};--kap-color-rgb:${COLOR_RGB};">
      <div class="lz-sub-hero-inner">
        <div class="lz-sub-hero-orb" aria-hidden="true"></div>
        <div class="lz-sub-breadcrumb">
          <button data-link="${BASE}" class="lz-bread-link">Spanisch</button>
          <i class="fas fa-chevron-right"></i><span>Grammatik</span>
          <i class="fas fa-chevron-right"></i><span>1.1 Zeitformen</span>
        </div>
        <h1 class="lz-sub-title">Tiempos verbales —<br><em>Zeitformen</em></h1>
        <p class="lz-sub-desc">
          Alle spanischen Zeitformen im Überblick · Bildung, Verwendung, Signalwörter
          und Vergleich · Regelmäßige &amp; unregelmäßige Verben
        </p>
        ${renderTags(['1.1', 'Zeitformen', 'Konjugation', 'Grammatik', 'Abitur 2026'])}
      </div>
    </section>

    <!-- ══ INHALT ══ -->
    <section class="lz-content-section">
      <div class="lz-section-wrap">

        ${renderSubhead('Systemüberblick')}
        <h2 class="lz-h2 reveal">Alle Zeiten im System</h2>
        <p class="lz-prose reveal">Das Spanische hat einen symmetrischen Zeitenbau: Jede einfache Zeit hat eine zusammengesetzte Entsprechung (haber + Partizip). Die Verwendung folgt klaren Regeln.</p>

        ${renderTable({
          headers: ['Zeitform', 'Spanisch', 'Bildung', 'Hauptverwendung'],
          rows: [
            ['Präsens',               'Presente',               'Verbstamm + Endung',                     'Gegenwart, Gewohnheiten, allg. Wahrheiten'],
            ['Präteritum (perfektiv)', 'Pret. Indefinido',       'Verbstamm + Pret.-Endung',               'Abgeschlossene Handlungen, Zeitangabe'],
            ['Imperfekt',             'Pret. Imperfecto',       'Verbstamm + Imperfect-Endung',           'Gewohnheiten in Vg., Beschreibungen, Hintergrund'],
            ['Perfekt',               'Pret. Perfecto Comp.',   'haber (Präs.) + Partizip',               'Kürzlich Abgeschlossenes, Erfahrungen ohne Zeitangabe'],
            ['Plusquamperfekt',       'Pret. Pluscuamperfecto', 'haber (Imperfekt) + Partizip',           'Vorvergangenheit'],
            ['Futur I',               'Futuro Simple',          'Infinitiv + Futurendung',                'Zukünftiges, Vermutungen'],
            ['Futur II',              'Futuro Perfecto',        'haber (Futur) + Partizip',               'In Zukunft Abgeschlossenes'],
            ['Konditional I',         'Condicional Simple',     'Infinitiv + Konditionalendung',          'Höflichkeit, Hypothesen, ind. Rede'],
            ['Konditional II',        'Condicional Compuesto',  'haber (Konditional) + Partizip',         'Irreale Vg.-Handlungen, Si-Satz Typ III'],
            ['Verlaufsform',          'Estar + Gerundio',       'estar (konj.) + -ando/-iendo',           'Handlung läuft gerade ab'],
          ],
          highlight: [1, 2],
        })}

        <!-- ══ WIM-TABS ══ -->
        <div class="reveal" style="margin-top:2.5rem;">
          ${renderSubhead('Zeitformen im Detail')}
          <h2 class="lz-h2">Bildung & Verwendung</h2>

          <nav class="wim-tabs" id="zeitenTabs" aria-label="Zeitformen-Kategorien">
            ${ZEITEN_TABS.map((t, i) => `
              <button class="wim-tab${i === 0 ? ' active' : ''}" data-wim="${t.key}">
                ${t.label}
              </button>`).join('')}
          </nav>

          ${this._panelPresente()}
          ${this._panelVg()}
          ${this._panelFuturo()}
          ${this._panelGerundio()}
        </div>

        <!-- Indefinido vs. Imperfecto -->
        <div class="reveal" style="margin-top:3rem;">
          ${renderSubhead('Wichtigster Vergleich')}
          <h2 class="lz-h2">Indefinido vs. Imperfecto</h2>
          <p class="lz-prose">Der häufigste Fehler im Abitur. Beide beschreiben die Vergangenheit — aber mit grundverschiedener Perspektive:</p>

          ${renderCompare({
            titleA: 'Pretérito Indefinido',
            titleB: 'Pretérito Imperfecto',
            listA: [
              'Abgeschlossene, einmalige Handlung',
              'Klarer Anfang und Ende erkennbar',
              'Reihe abgeschlossener Ereignisse (Handlungsstrang)',
              'Mit Zeitangabe: ayer, el lunes, en 2010',
              'Unterbricht den Hintergrund',
              '<em>Ayer comí una paella.</em>',
              '<em>Llamé tres veces y no contestó.</em>',
            ],
            listB: [
              'Gewohnheit, Wiederholung in der Vergangenheit',
              'Andauernde, nicht abgeschlossene Handlung',
              'Beschreibung (Personen, Orte, Wetter, Gefühle)',
              'Mit: siempre, todos los días, cuando era niño',
              'Stellt den Hintergrund bereit',
              '<em>De niño comía paella cada domingo.</em>',
              '<em>Cuando llamé, ella dormía.</em>',
            ],
          })}

          ${renderInfobox({ type: 'blue', icon: 'fas fa-lightbulb', title: 'Merkhilfe: Film vs. Foto',
            body: `<strong>Indefinido = Film</strong> — zeigt eine Aktion, die abläuft und endet.<br>
                   <strong>Imperfecto = Foto</strong> — friert einen Zustand, eine Beschreibung, einen Hintergrund ein.<br>
                   <em>Cuando entré (Indf. → Aktion), la clase estaba en silencio (Imperf. → Zustand).</em>` })}

          ${renderTable({
            headers: ['Signalwort / Kontext', 'Indefinido ✓', 'Imperfecto ✓'],
            rows: [
              ['Einmalige Handlung',                    '✓', ''],
              ['Wiederholte/gewohnheitsmäßige Handlung','',  '✓'],
              ['ayer, el martes, en 1990',              '✓', ''],
              ['siempre, todos los días, a menudo',     '',  '✓'],
              ['de repente, entonces, en ese momento',  '✓', ''],
              ['mientras, cuando (Hintergrund)',        '',  '✓'],
              ['Beschreibung von Personen/Orten',       '',  '✓'],
              ['Abfolge abgeschlossener Ereignisse',    '✓', ''],
              ['Era, tenía, había — typische Zustände', '',  '✓'],
            ],
          })}
        </div>

        <!-- Unregelmäßige Verben -->
        <div class="reveal" style="margin-top:3rem;">
          ${renderSubhead('Unregelmäßige Verben')}
          <h2 class="lz-h2">Die wichtigsten Irregulares</h2>

          ${renderInfobox({ type: '', icon: 'fas fa-star', title: 'Absolut abiturrelevante unregelmäßige Verben',
            body: `<strong>Indefinido:</strong> ser/ir (fui), tener (tuve), hacer (hice/hizo), venir (vine),
                   poder (pude), querer (quise), saber (supe), estar (estuve), dar (di), ver (vi).<br>
                   <strong>Futuro/Condicional (gleicher Stamm):</strong> tener→tendr-, poder→podr-, querer→querr-,
                   saber→sabr-, venir→vendr-, hacer→har-, decir→dir-, haber→habr-, salir→saldr-, poner→pondr-.<br>
                   <strong>Partizipien:</strong> abrir→abierto, decir→dicho, escribir→escrito, hacer→hecho,
                   morir→muerto, poner→puesto, romper→roto, ver→visto, volver→vuelto.` })}

          ${renderTable({
            headers: ['Infinitiv', 'Indefinido (1.Sg.)', 'Futuro (1.Sg.)', 'Partizip', 'Bedeutung'],
            rows: [
              ['ser / ir',  'fui',     'seré / iré', '—',       'sein / gehen'],
              ['tener',     'tuve',    'tendré',      'tenido',  'haben'],
              ['hacer',     'hice',    'haré',        'hecho',   'machen'],
              ['venir',     'vine',    'vendré',      'venido',  'kommen'],
              ['poder',     'pude',    'podré',       'podido',  'können'],
              ['querer',    'quise',   'querré',      'querido', 'wollen'],
              ['saber',     'supe',    'sabré',       'sabido',  'wissen'],
              ['estar',     'estuve',  'estaré',      'estado',  'sein (Zustand)'],
              ['decir',     'dije',    'diré',        'dicho',   'sagen'],
              ['poner',     'puse',    'pondré',      'puesto',  'stellen/legen'],
              ['ver',       'vi',      'veré',        'visto',   'sehen'],
              ['dar',       'di',      'daré',        'dado',    'geben'],
              ['escribir',  'escribí', 'escribiré',   'escrito', 'schreiben'],
              ['abrir',     'abrí',    'abriré',      'abierto', 'öffnen'],
              ['volver',    'volví',   'volveré',     'vuelto',  'zurückkehren'],
            ],
          })}
        </div>

        <!-- Häufige Fehler -->
        <div class="reveal" style="margin-top:2rem;">
          ${renderInfobox({ type: 'warning', icon: 'fas fa-exclamation-triangle', title: 'Häufige Fehler im Abitur — Zeitformen',
            body: `<strong>① Indefinido ↔ Imperfecto verwechseln:</strong>
                   <em>Falsch: Ayer comía paella.</em> → Korrekt: <em>Ayer comí paella.</em><br>
                   <strong>② Perfecto mit konkreter Zeitangabe:</strong>
                   <em>Falsch: He llegado ayer.</em> → Korrekt: <em>Llegué ayer.</em><br>
                   <strong>③ Futuro statt ir a + Inf. bei konkreten Plänen:</strong>
                   <em>Voy a estudiar esta tarde</em> (Plan) ≠ <em>Estudiaré medicina</em> (entfernte Zukunft).<br>
                   <strong>④ Partizip angleichen:</strong>
                   Partizip in zusammengesetzten Zeiten ist unveränderlich: <em>Ha hablado</em> (nicht: *hablada).` })}
        </div>

      </div>
    </section>

    <section class="lz-content-section" style="padding:1.5rem 0 3rem;">
      <div class="lz-section-wrap">
        ${renderPageNav({
          prev: null,
          next: { label: '1.2 Ser vs. Estar', link: `${BASE}/themen/grammatik/ser-estar` },
        }, BASE)}
      </div>
    </section>
    ${footerHTML(this.router)}
  `; }

  // ═══════════════════════════════════════════════════════════════
  // WIM-PANELS
  // ═══════════════════════════════════════════════════════════════

  _panelPresente() { return `
    <div class="wim-category" data-wim-cat="presente">
      <h3 class="lz-h3">Presente de Indicativo — Präsens</h3>
      <p class="lz-prose"><strong>Verwendung:</strong> Gegenwärtige Handlungen und Zustände · Gewohnheiten · Allgemeingültige Wahrheiten · Nahe Zukunft (mit Zeitangabe) · Historisches Präsens.</p>
      ${renderTable({
        headers: ['Person', '-ar (hablar)', '-er (comer)', '-ir (vivir)'],
        rows: [
          ['yo',                  'hablo',    'como',    'vivo'],
          ['tú',                  'hablas',   'comes',   'vives'],
          ['él/ella/usted',       'habla',    'come',    'vive'],
          ['nosotros/-as',        'hablamos', 'comemos', 'vivimos'],
          ['vosotros/-as',        'habláis',  'coméis',  'vivís'],
          ['ellos/ellas/ustedes', 'hablan',   'comen',   'viven'],
        ],
      })}
      <p class="lz-prose" style="margin-top:1rem;"><strong>Stammvokalwechsel:</strong> e→ie (pensar→pienso), o→ue (poder→puedo), e→i (pedir→pido) — NICHT in nosotros/vosotros.</p>
      ${renderTable({
        headers: ['Typ', 'Beispiele (Infinitiv → yo)', 'Betroffene Personen'],
        rows: [
          ['e → ie', 'pensar→pienso, querer→quiero, preferir→prefiero, entender→entiendo', 'alle außer nosotros/vosotros'],
          ['o → ue', 'poder→puedo, volver→vuelvo, dormir→duermo, encontrar→encuentro',      'alle außer nosotros/vosotros'],
          ['e → i',  'pedir→pido, servir→sirvo, repetir→repito, seguir→sigo',               'alle außer nosotros/vosotros'],
        ],
      })}
      <p class="lz-prose" style="margin-top:1rem;"><strong>Unregelmäßige yo-Formen:</strong> saber→sé · ver→veo · dar→doy · ser→soy · estar→estoy · ir→voy · hacer→hago · poner→pongo · salir→salgo · traer→traigo · conocer→conozco.</p>
      ${ej('Normalmente estudio dos horas al día.', 'Normalerweise lerne ich zwei Stunden täglich.', 'Gewohnheit')}
      ${ej('Mañana voy al médico.', 'Morgen gehe ich zum Arzt.', 'Nahe Zukunft mit Zeitangabe')}
    </div>`; }

  _panelVg() { return `
    <div class="wim-category hidden" data-wim-cat="vg">
      <h3 class="lz-h3">Die vier Vergangenheitszeiten</h3>
      ${renderAccordion([
        {
          title: 'Pretérito Indefinido (Perfecto Simple) — abgeschlossene Vergangenheit',
          content: `
            <p class="lz-prose"><strong>Verwendung:</strong> Einmalige abgeschlossene Handlung · Reihe abgeschlossener Ereignisse · Mit konkreter Zeitangabe (ayer, en 2010, el martes).</p>
            ${renderTable({
              headers: ['Person', '-ar (hablar)', '-er/-ir (comer/vivir)'],
              rows: [
                ['yo',                  'hablé',      'comí / viví'],
                ['tú',                  'hablaste',   'comiste / viviste'],
                ['él/ella/usted',       'habló',      'comió / vivió'],
                ['nosotros/-as',        'hablamos',   'comimos / vivimos'],
                ['vosotros/-as',        'hablasteis', 'comisteis / vivisteis'],
                ['ellos/ellas/ustedes', 'hablaron',   'comieron / vivieron'],
              ],
            })}
            <p class="lz-prose"><strong>Signalwörter:</strong> ayer · anoche · el lunes pasado · en + Jahr · hace un mes · de repente · entonces · por fin · al final.</p>
            ${ej('Ayer llegué tarde a clase.', 'Gestern kam ich zu spät in die Klasse.', 'Einmalige abgeschlossene Handlung')}
            ${ej('El verano pasado viajé a Barcelona, visité la Sagrada Família y probé la paella.', 'Letzten Sommer reiste ich nach Barcelona, besichtigte die Sagrada Família und probierte die Paella.', 'Reihe abgeschlossener Ereignisse')}
          `,
        },
        {
          title: 'Pretérito Imperfecto — Imperfekt',
          content: `
            <p class="lz-prose"><strong>Verwendung:</strong> Gewohnheiten in der Vergangenheit · Beschreibungen (Personen, Orte, Wetter, Gefühle) · Andauernde Hintergrundhandlung · Höfliche Bitte.</p>
            ${renderTable({
              headers: ['Person', '-ar (hablar)', '-er/-ir (comer/vivir)'],
              rows: [
                ['yo',                  'hablaba',    'comía / vivía'],
                ['tú',                  'hablabas',   'comías / vivías'],
                ['él/ella/usted',       'hablaba',    'comía / vivía'],
                ['nosotros/-as',        'hablábamos', 'comíamos / vivíamos'],
                ['vosotros/-as',        'hablabais',  'comíais / vivíais'],
                ['ellos/ellas/ustedes', 'hablaban',   'comían / vivían'],
              ],
            })}
            <p class="lz-prose"><strong>Nur 3 Unregelmäßige:</strong> ser (era, eras…) · ir (iba, ibas…) · ver (veía, veías…).</p>
            <p class="lz-prose"><strong>Signalwörter:</strong> siempre · todos los días · a menudo · de niño/a · antes · cuando era pequeño/a · generalmente.</p>
            ${ej('Cuando era pequeña, vivía en un pueblo tranquilo.', 'Als ich klein war, lebte ich in einem ruhigen Dorf.', 'Zustand in der Vergangenheit')}
            ${ej('Quería pedirte un favor.', 'Ich wollte dich um einen Gefallen bitten.', 'Höfliche Bitte — Abschwächung mit Imperfecto')}
          `,
        },
        {
          title: 'Pretérito Perfecto Compuesto — Perfekt',
          content: `
            <p class="lz-prose"><strong>Bildung:</strong> haber (Präsens) + Partizip Perfekt.<br>
            <strong>Verwendung:</strong> Handlungen mit Gegenwartsbezug · Erfahrungen ohne konkrete Zeitangabe · Mit: hoy, esta semana, este año, ya, todavía no, nunca, alguna vez.</p>
            ${renderTable({
              headers: ['Person', 'haber', 'Beispiel'],
              rows: [
                ['yo',                  'he',     'he hablado'],
                ['tú',                  'has',    'has comido'],
                ['él/ella/usted',       'ha',     'ha vivido'],
                ['nosotros/-as',        'hemos',  'hemos llegado'],
                ['vosotros/-as',        'habéis', 'habéis escrito'],
                ['ellos/ellas/ustedes', 'han',    'han dicho'],
              ],
            })}
            <p class="lz-prose"><strong>Wichtig:</strong> Das Partizip ist unveränderlich · haber und Partizip niemals trennen · Reflexivpronomen steht vor haber.</p>
            ${ej('¿Alguna vez has estado en Buenos Aires?', 'Warst du jemals in Buenos Aires?', 'Erfahrung ohne Zeitangabe')}
            ${ej('Hoy me he levantado tarde y no he desayunado.', 'Heute bin ich spät aufgestanden und habe nicht gefrühstückt.', 'Gegenwartsbezug')}
          `,
        },
        {
          title: 'Pretérito Pluscuamperfecto — Plusquamperfekt',
          content: `
            <p class="lz-prose"><strong>Bildung:</strong> haber (Imperfecto) + Partizip Perfekt.<br>
            <strong>Verwendung:</strong> Vorvergangenheit — eine Handlung, die vor einer anderen Vergangenheitshandlung abgeschlossen war. Mit: ya, todavía no, antes de que, cuando.</p>
            ${renderTable({
              headers: ['Person', 'haber (Imperf.)', 'Beispiel'],
              rows: [
                ['yo',                  'había',    'había hablado'],
                ['tú',                  'habías',   'habías comido'],
                ['él/ella/usted',       'había',    'había llegado'],
                ['nosotros/-as',        'habíamos', 'habíamos salido'],
                ['vosotros/-as',        'habíais',  'habíais visto'],
                ['ellos/ellas/ustedes', 'habían',   'habían dicho'],
              ],
            })}
            ${ej('Cuando llegué, María ya había salido.', 'Als ich ankam, war María schon weggegangen.', 'Vorvergangenheit — Pluscuamperf. vor Indefinido')}
            ${ej('No había visto nunca una ciudad tan grande.', 'Ich hatte noch nie eine so große Stadt gesehen.', 'Erfahrung in der Vorvergangenheit')}
          `,
        },
      ])}
    </div>`; }

  _panelFuturo() { return `
    <div class="wim-category hidden" data-wim-cat="futuro">
      <h3 class="lz-h3">Futuro & Condicional</h3>
      ${renderAccordion([
        {
          title: 'Futuro Simple — Einfaches Futur',
          content: `
            <p class="lz-prose"><strong>Bildung:</strong> Infinitiv + Futurendung (identisch für alle Verbklassen).<br>
            <strong>Endungen:</strong> -é · -ás · -á · -emos · -éis · -án.<br>
            <strong>Verwendung:</strong> Zukünftige Handlungen (formal) · Vermutungen über Gegenwart/Zukunft · Versprechen.</p>
            ${renderTable({
              headers: ['Person', 'Endung', 'hablar', 'tener (irreg.)'],
              rows: [
                ['yo',                  '-é',    'hablaré',    'tendré'],
                ['tú',                  '-ás',   'hablarás',   'tendrás'],
                ['él/ella/usted',       '-á',    'hablará',    'tendrá'],
                ['nosotros/-as',        '-emos', 'hablaremos', 'tendremos'],
                ['vosotros/-as',        '-éis',  'hablaréis',  'tendréis'],
                ['ellos/ellas/ustedes', '-án',   'hablarán',   'tendrán'],
              ],
            })}
            <p class="lz-prose"><strong>Unregelmäßige Stämme:</strong> tener→tendr- · poder→podr- · querer→querr- · saber→sabr- · venir→vendr- · hacer→har- · decir→dir- · haber→habr- · salir→saldr- · poner→pondr-.</p>
            ${ej('¿Dónde estará María? Será en casa.', 'Wo ist María wohl? Sie wird wohl zu Hause sein.', 'Vermutung über Gegenwart')}
            ${ej('El año que viene estudiaré en Salamanca.', 'Nächstes Jahr werde ich in Salamanca studieren.', 'Zukünftige Handlung')}
          `,
        },
        {
          title: 'Ir a + Infinitivo — Nahe Zukunft',
          content: `
            <p class="lz-prose"><strong>Bildung:</strong> ir (konjugiert) + a + Infinitiv.<br>
            <strong>Verwendung:</strong> Konkrete, geplante zukünftige Handlungen · Nahe Zukunft · Umgangssprachlich häufiger als Futuro Simple.</p>
            ${ej('Esta tarde voy a estudiar para el examen.', 'Heute Nachmittag werde ich für die Prüfung lernen.', 'Konkreter Plan')}
            ${ej('¡Cuidado! ¡Vas a caerte!', 'Pass auf! Du wirst gleich fallen!', 'Unmittelbar bevorstehend')}
            <p class="lz-prose"><em>Voy a estudiar esta tarde</em> (Plan, konkret) ≠ <em>Algún día estudiaré medicina</em> (unbestimmte Zukunft).</p>
          `,
        },
        {
          title: 'Condicional Simple — Konditional I',
          content: `
            <p class="lz-prose"><strong>Bildung:</strong> Infinitiv + Konditionalendung.<br>
            <strong>Endungen:</strong> -ía · -ías · -ía · -íamos · -íais · -ían (gleiche unregelmäßige Stämme wie Futuro).<br>
            <strong>Verwendung:</strong> Höfliche Bitten · Hypothesen · Ratschläge (debería) · Hauptsatz Si-Satz Typ II · Zukunft in der Vergangenheit.</p>
            ${renderTable({
              headers: ['Person', 'hablar', 'poder (irreg.)'],
              rows: [
                ['yo',                  'hablaría',    'podría'],
                ['tú',                  'hablarías',   'podrías'],
                ['él/ella/usted',       'hablaría',    'podría'],
                ['nosotros/-as',        'hablaríamos', 'podríamos'],
                ['vosotros/-as',        'hablaríais',  'podríais'],
                ['ellos/ellas/ustedes', 'hablarían',   'podrían'],
              ],
            })}
            ${ej('¿Podrías ayudarme con esto?', 'Könntest du mir dabei helfen?', 'Höfliche Bitte')}
            ${ej('Dijo que vendría mañana.', 'Er sagte, er würde morgen kommen.', 'Zukunft in der Vergangenheit')}
          `,
        },
        {
          title: 'Futuro Perfecto & Condicional Compuesto',
          content: `
            <p class="lz-prose"><strong>Futuro Perfecto:</strong> haber (Futuro) + Partizip — In Zukunft Abgeschlossenes · Vermutungen über die Vergangenheit.</p>
            ${ej('Para las doce habremos terminado el proyecto.', 'Bis zwölf Uhr werden wir das Projekt beendet haben.', 'Futuro Perfecto')}
            ${ej('¿Dónde habrá puesto las llaves?', 'Wo wird er wohl die Schlüssel hingelegt haben?', 'Vermutung über Vergangenheit')}
            <p class="lz-prose" style="margin-top:1rem;"><strong>Condicional Compuesto:</strong> haber (Condicional) + Partizip — Irreale Vg.-Handlungen · Si-Satz Typ III (Hauptsatz).</p>
            ${ej('Habría ido, pero estaba enfermo.', 'Ich wäre gegangen, aber ich war krank.', 'Irreale Vergangenheit')}
            ${ej('Si hubiera estudiado, habría aprobado.', 'Wenn ich gelernt hätte, hätte ich bestanden.', 'Si-Satz Typ III')}
          `,
        },
      ])}
    </div>`; }

  _panelGerundio() { return `
    <div class="wim-category hidden" data-wim-cat="gerundio">
      <h3 class="lz-h3">Estar + Gerundio — Verlaufsform</h3>
      <p class="lz-prose"><strong>Bildung des Gerundiums:</strong><br>
      -ar Verben: Stamm + <strong>-ando</strong> (hablar → hablando)<br>
      -er/-ir Verben: Stamm + <strong>-iendo</strong> (comer → comiendo · vivir → viviendo)</p>
      <p class="lz-prose"><strong>Unregelmäßige Gerundien:</strong> leer→leyendo · oír→oyendo · ir→yendo · poder→pudiendo · decir→diciendo · venir→viniendo · seguir→siguiendo · pedir→pidiendo · dormir→durmiendo.</p>
      ${renderTable({
        headers: ['Person', 'estar (Präsens)', 'Beispiel'],
        rows: [
          ['yo',                  'estoy',    'estoy estudiando'],
          ['tú',                  'estás',    'estás comiendo'],
          ['él/ella/usted',       'está',     'está durmiendo'],
          ['nosotros/-as',        'estamos',  'estamos trabajando'],
          ['vosotros/-as',        'estáis',   'estáis leyendo'],
          ['ellos/ellas/ustedes', 'están',    'están hablando'],
        ],
      })}
      <p class="lz-prose"><strong>Verwendung:</strong> Handlung läuft im Sprechmoment ab · Auch in anderen Zeiten: <em>estaba hablando</em> (Imperfecto) · <em>estuvo hablando</em> (Indefinido).</p>
      <p class="lz-prose"><strong>Pronomenstellung:</strong> Angehängt oder vorangestellt — beide korrekt:<br>
      <em>Estoy escribiéndola</em> = <em>La estoy escribiendo.</em></p>
      ${ej('Ahora mismo está preparando la cena.', 'Gerade jetzt bereitet er/sie das Abendessen zu.', 'Verlaufsform Präsens')}
      ${ej('Cuando llegué, mis amigos estaban bailando.', 'Als ich ankam, tanzten meine Freunde gerade.', 'Verlaufsform Imperfecto — Hintergrundhandlung')}
      ${renderInfobox({ type: 'blue', icon: 'fas fa-info-circle', title: 'Nicht mit Gerundio',
        body: `Diese Verben werden <strong>nicht</strong> als Verlaufsform verwendet (Zustandsverben):<br>
               <em>ser, estar, tener, saber, poder, conocer, querer.</em><br>
               Man sagt: <em>Tengo hambre</em> (nicht: *Estoy teniendo hambre).` })}
    </div>`; }

  // ═══════════════════════════════════════════════════════════════

  init() {
    i18n.init();
    initScrollReveal();
    initInteractive(document);
    initWimTabs(document);
  }
}