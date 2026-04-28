// pages/projekte/lernzettel/faecher/spanisch/themen/grammatik/si-saetze.js
// 1.6 — Oraciones condicionales · Si-Sätze

import { initScrollReveal } from '../../../../../../../shared/js/index.js';
import { footerHTML }        from '../../../../../../../components/Footer.js';
import { i18n }              from '../../../../../../../shared/js/i18n.js';
import {
  ensureComponentsCSS, renderInfobox, renderTable,
  renderSubhead, renderTags, renderMerkboxGrid, initInteractive,
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

export default class Spanisch_Si_Saetze {
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
          <i class="fas fa-chevron-right"></i><span>Grammatik</span>
          <i class="fas fa-chevron-right"></i><span>1.6 Si-Sätze</span>
        </div>
        <h1 class="lz-sub-title">Oraciones condicionales —<br><em>Si-Sätze</em></h1>
        <p class="lz-sub-desc">
          Drei Typen vollständig · Reale Bedingung · Irreale Gegenwart ·
          Irreale Vergangenheit · Imperfecto & Pluscuamp. de Subjuntivo · Mischtypen
        </p>
        ${renderTags(['1.6', 'Si-Sätze', 'Konditional', 'Subjuntivo', 'Grammatik', 'Abitur 2026'])}
      </div>
    </section>

    <section class="lz-content-section">
      <div class="lz-section-wrap">

        ${renderSubhead('Überblick')}
        <h2 class="lz-h2 reveal">Die drei Typen im Überblick</h2>
        <p class="lz-prose reveal">Im Spanischen gibt es drei Haupttypen von Si-Sätzen, die sich nach dem Realitätsgrad der Bedingung unterscheiden. Das Si im Bedingungssatz steht <strong>niemals mit Futur, Konditional oder Subjuntivo Presente</strong>.</p>

        ${renderTable({
          headers: ['Typ', 'Bezeichnung', 'Si-Satz (Bedingung)', 'Hauptsatz (Folge)', 'Realitätsgrad'],
          rows: [
            ['I',   'Reale Bedingung',           'si + Presente Indikativo',               'Futuro / Presente / Imperativo', 'Erfüllbar, offen'],
            ['II',  'Irreale Gegenwart',          'si + Imperfecto Subjuntivo',             'Condicional Simple',            'Unwahrscheinlich/irreal (jetzt)'],
            ['III', 'Irreale Vergangenheit',      'si + Pluscuamperfecto Subjuntivo',       'Condicional Compuesto',         'Nicht erfüllt (in der Vg.)'],
          ],
          highlight: [1, 2],
        })}

        ${renderInfobox({ type: 'warning', icon: 'fas fa-exclamation-triangle', title: 'Was NIEMALS nach si steht',
          body: `<strong>Niemals:</strong> Futuro Simple · Condicional Simple · Subjuntivo Presente<br>
                 <em>Falsch: *Si vendrás… / *Si vendrías… / *Si vengas…</em><br>
                 Das si des Bedingungssatzes steht immer mit Indikativ (Typ I) oder Vergangenheits-Subjuntivo (Typ II/III).` })}

        <!-- Typ I -->
        <div class="reveal" style="margin-top:2.5rem;">
          ${renderSubhead('Typ I — Reale Bedingung')}
          <h2 class="lz-h2">Typ I: Si + Presente → Futuro / Presente / Imperativo</h2>
          <p class="lz-prose">Die Bedingung wird als grundsätzlich erfüllbar betrachtet. Der Sprecher geht davon aus, dass sie eintreten kann.</p>

          ${renderTable({
            headers: ['Si-Satz', 'Hauptsatz', 'Bedeutung'],
            rows: [
              ['si + Presente Indikativo', 'Futuro Simple',   'generelle offene Bedingung + zukünftige Folge'],
              ['si + Presente Indikativo', 'Presente Indikativo', 'allgemeingültige Aussage, Naturgesetze'],
              ['si + Presente Indikativo', 'Imperativo',      'Bedingung + Handlungsaufforderung'],
            ],
          })}

          ${ej('Si estudias todos los días, aprobarás el examen.', 'Wenn du jeden Tag lernst, wirst du die Prüfung bestehen.', 'Typ I: Presente → Futuro')}
          ${ej('Si mezclas rojo y azul, obtienes violeta.', 'Wenn du Rot und Blau mischst, erhältst du Violett.', 'Typ I: allgemeingültige Aussage')}
          ${ej('Si llegas tarde, avísame por favor.', 'Wenn du zu spät kommst, sag mir bitte Bescheid.', 'Typ I: Presente → Imperativo')}
          ${ej('Si tienes tiempo este fin de semana, podemos quedar.', 'Wenn du dieses Wochenende Zeit hast, können wir uns treffen.', 'Typ I: Presente → Presente')}
        </div>

        <!-- Typ II -->
        <div class="reveal" style="margin-top:2.5rem;">
          ${renderSubhead('Typ II — Irreale Gegenwart')}
          <h2 class="lz-h2">Typ II: Si + Imperfecto Subj. → Condicional Simple</h2>
          <p class="lz-prose">Die Bedingung ist unwahrscheinlich oder entspricht nicht der aktuellen Realität. Der Sprecher stellt sich vor, was wäre, wenn…</p>

          ${renderTable({
            headers: ['Si-Satz', 'Hauptsatz'],
            rows: [
              ['si + Imperfecto de Subjuntivo', 'Condicional Simple (hablaría, comería…)'],
            ],
          })}

          <p class="lz-prose"><strong>Imperfecto de Subjuntivo Bildung (Wiederholung):</strong> 3. Person Plural Indefinido → -ron → + Endungen (-ra/-se).<br>
          Wichtige Formen: tener → tuviera · ser/ir → fuera · hacer → hiciera · poder → pudiera · querer → quisiera · estar → estuviera · haber → hubiera · saber → supiera.</p>

          ${ej('Si tuviera más dinero, viajaría por todo el mundo.', 'Wenn ich mehr Geld hätte, würde ich durch die ganze Welt reisen.', 'Typ II: Irreal Gegenwart — habe jetzt kein Geld')}
          ${ej('Si yo fuera el presidente, invertiría más en educación.', 'Wenn ich Präsident wäre, würde ich mehr in Bildung investieren.', 'Typ II: Irreal — bin nicht der Präsident')}
          ${ej('¿Qué harías si pudieras vivir en cualquier país del mundo?', 'Was würdest du tun, wenn du in irgendeinem Land der Welt leben könntest?', 'Typ II: hypothetische Frage')}
          ${ej('Si hiciese buen tiempo mañana, iríamos a la playa.', 'Wenn das Wetter morgen schön wäre, würden wir an den Strand gehen.', 'Typ II: Variante mit -se-Form')}
        </div>

        <!-- Typ III -->
        <div class="reveal" style="margin-top:2.5rem;">
          ${renderSubhead('Typ III — Irreale Vergangenheit')}
          <h2 class="lz-h2">Typ III: Si + Pluscuamp. Subj. → Condicional Compuesto</h2>
          <p class="lz-prose">Die Bedingung bezieht sich auf die Vergangenheit und ist nicht erfüllt worden — man blickt zurück auf etwas, das nicht passiert ist.</p>

          ${renderTable({
            headers: ['Si-Satz', 'Hauptsatz'],
            rows: [
              ['si + Pluscuamperfecto de Subjuntivo (hubiera/hubiese + Partizip)', 'Condicional Compuesto (habría + Partizip)'],
            ],
          })}

          ${ej('Si hubiera estudiado más, habría aprobado el examen.', 'Wenn ich mehr gelernt hätte, hätte ich die Prüfung bestanden.', 'Typ III: Vg. nicht erfüllt')}
          ${ej('Si hubieras llegado antes, habrías conocido a mi familia.', 'Wenn du früher angekommen wärst, hättest du meine Familie kennen gelernt.', 'Typ III: irreale Vg.')}
          ${ej('Si no hubiera llovido tanto, la fiesta al aire libre habría sido perfecta.', 'Wenn es nicht so viel geregnet hätte, wäre die Outdoor-Party perfekt gewesen.', 'Typ III: Regen hat die Party ruiniert')}
        </div>

        <!-- Mischtypen -->
        <div class="reveal" style="margin-top:2.5rem;">
          ${renderSubhead('Mischtypen')}
          <h2 class="lz-h2">Mischtypen — Mixed Conditionals</h2>
          <p class="lz-prose">Im echten Sprachgebrauch werden die Typen auch gemischt: Die Bedingung ist irreal-vergangenheitlich, die Folge aber bezieht sich auf die Gegenwart (oder umgekehrt).</p>

          ${renderTable({
            headers: ['Si-Satz', 'Hauptsatz', 'Bedeutung', 'Beispiel'],
            rows: [
              ['Pluscuamperf. Subj. (Vg.)', 'Condicional Simple (Ggw.)', 'Vg.-Bedingung → Ggw.-Folge', 'Si hubieras estudiado medicina, ahora serías médico.'],
              ['Imperf. Subj. (Ggw.)', 'Condicional Compuesto (Vg.)', 'Ggw.-Bedingung → Vg.-Folge', 'Si fueras más organizado, no habrías perdido las llaves.'],
            ],
          })}

          ${ej('Si hubieras aprendido a conducir entonces, ahora podrías llevarme al aeropuerto.', 'Wenn du damals Autofahren gelernt hättest, könntest du mich jetzt zum Flughafen fahren.', 'Mischtyp: Vg.-Bedingung → Ggw.-Folge')}
        </div>

        <!-- Übersicht -->
        <div class="reveal" style="margin-top:2.5rem;">
          ${renderSubhead('Vollständige Übersicht')}
          ${renderMerkboxGrid([
            {
              icon: 'fas fa-check-circle',
              title: 'Typ I — Real',
              text: 'Si + Presente → Futuro/Presente/Imperativo<br>«Si llueve, me quedo en casa.»<br>Bedingung ist möglich und offen.',
            },
            {
              icon: 'fas fa-question-circle',
              title: 'Typ II — Irreal Ggw.',
              text: 'Si + Imperf.Subj. → Condicional Simple<br>«Si lloviera, me quedaría en casa.»<br>Bedingung ist unwahrscheinlich/irreal.',
            },
            {
              icon: 'fas fa-times-circle',
              title: 'Typ III — Irreal Vg.',
              text: 'Si + Pluscuamp.Subj. → Condicional Comp.<br>«Si hubiera llovido, me habría quedado.»<br>Bedingung wurde nicht erfüllt.',
            },
          ])}
        </div>

      </div>
    </section>

    <section class="lz-content-section" style="padding:1.5rem 0 3rem;">
      <div class="lz-section-wrap">
        ${renderPageNav({
          prev: { label: '1.5 Objektpronomen', link: `${BASE}/themen/grammatik/objektpronomen` },
          next: { label: '1.7 Imperativo',     link: `${BASE}/themen/grammatik/imperativo`     },
        }, BASE)}
      </div>
    </section>
    ${footerHTML(this.router)}
  `; }

  init() { i18n.init(); initScrollReveal(); initInteractive(document); }
}