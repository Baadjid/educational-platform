// pages/projekte/lernzettel/faecher/spanisch/themen/grammatik/imperativo.js
// 1.7 — El imperativo · Imperativ

import { initScrollReveal } from '../../../../../../../shared/js/index.js';
import { footerHTML }        from '../../../../../../../components/Footer.js';
import { i18n }              from '../../../../../../../shared/js/i18n.js';
import {
  ensureComponentsCSS, renderInfobox, renderTable,
  renderSubhead, renderTags, renderCompare, initInteractive,
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

export default class Spanisch_Imperativo {
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
          <i class="fas fa-chevron-right"></i><span>1.7 Imperativo</span>
        </div>
        <h1 class="lz-sub-title">El Imperativo —<br><em>Der Imperativ</em></h1>
        <p class="lz-sub-desc">
          Afirmativo & Negativo · Alle Personen · Unregelmäßige Formen ·
          Mit Objektpronomen · Reflexive Verben im Imperativ
        </p>
        ${renderTags(['1.7', 'Imperativo', 'Imperativ', 'Grammatik', 'Abitur 2026'])}
      </div>
    </section>

    <section class="lz-content-section">
      <div class="lz-section-wrap">

        ${renderSubhead('Bildungsregeln')}
        <h2 class="lz-h2 reveal">Imperativo afirmativo — Bejahter Imperativ</h2>
        <p class="lz-prose reveal"><strong>tú-Form:</strong> 3. Person Singular Präsens Indikativ (ohne -s).<br>
        <strong>usted/ustedes:</strong> Presente de Subjuntivo.<br>
        <strong>nosotros:</strong> Presente de Subjuntivo.<br>
        <strong>vosotros:</strong> Infinitiv, -r → -d.</p>

        ${renderTable({
          headers: ['Person', 'Bildungsregel', 'hablar', 'comer', 'vivir'],
          rows: [
            ['tú',          '3. Sg. Präsens (ohne -s)',    'habla',    'come',    'vive'],
            ['usted',       'Pres. Subjuntivo 3.Sg.',      'hable',    'coma',    'viva'],
            ['nosotros',    'Pres. Subjuntivo 1.Pl.',      'hablemos', 'comamos', 'vivamos'],
            ['vosotros',    'Infinitiv: -r → -d',          'hablad',   'comed',   'vivid'],
            ['ustedes',     'Pres. Subjuntivo 3.Pl.',      'hablen',   'coman',   'vivan'],
          ],
        })}

        ${renderInfobox({ type: 'blue', icon: 'fas fa-info-circle', title: 'usted/ustedes = Subjuntivo — warum?',
          body: `usted und ustedes sind grammatikalisch 3. Person. Der Imperativ für diese Personen ist
                 identisch mit dem Presente de Subjuntivo — das gilt für alle Verben, auch die unregelmäßigen.
                 Daher gelten auch alle DISHES-Ausnahmen (dar, ir, ser, haber, estar, saber).` })}

        <!-- Unregelmäßige tú-Formen -->
        <div class="reveal" style="margin-top:2.5rem;">
          ${renderSubhead('Unregelmäßige Formen')}
          <h2 class="lz-h2">Unregelmäßige tú-Formen</h2>
          <p class="lz-prose">8 Verben haben im bejahten tú-Imperativ unregelmäßige Kurzformen. Merkhilfe: <strong>Di, Haz, Ve, Pon, Sal, Sé, Ten, Ven</strong></p>

          ${renderTable({
            headers: ['Infinitiv', 'Imperativ tú (positiv)', 'Bedeutung', 'Merkhilfe'],
            rows: [
              ['decir',  'di',  'sag!',         'Di la verdad.'],
              ['hacer',  'haz', 'mach!',         'Haz la tarea.'],
              ['ir',     've',  'geh!',           'Ve a casa.'],
              ['poner',  'pon', 'stell/leg!',    'Pon la mesa.'],
              ['salir',  'sal', 'geh raus!',     'Sal de aquí.'],
              ['ser',    'sé',  'sei!',           'Sé amable.'],
              ['tener',  'ten', 'hab!',           'Ten cuidado.'],
              ['venir',  'ven', 'komm!',          'Ven conmigo.'],
            ],
          })}

          ${renderInfobox({ type: '', icon: 'fas fa-magic', title: 'Merksatz für die 8 unregelmäßigen tú-Imperative',
            body: `«<strong>Di, Haz, Ve, Pon, Sal, Sé, Ten, Ven</strong>»<br>
                   Merksatz: <em>Di: ¡Haz una Ve(nida)! Pon-Sal-Sé-Ten-Ven.</em><br>
                   Oder: <strong>DH VPSST V</strong> (Daring Heroes Very Powerfully Stop Short Traffic Violently)` })}
        </div>

        <!-- Negativer Imperativ -->
        <div class="reveal" style="margin-top:2.5rem;">
          ${renderSubhead('Negativer Imperativ')}
          <h2 class="lz-h2">Imperativo negativo — Alle Formen = Subjuntivo</h2>
          <p class="lz-prose">Im verneinenden Imperativ steht für <strong>alle</strong> Personen der Presente de Subjuntivo nach <em>no</em>.</p>

          ${renderTable({
            headers: ['Person', 'Formel', 'hablar', 'comer', 'hacer'],
            rows: [
              ['tú',       'no + Pres.Subj.2.Sg.', 'no hables',   'no comas',   'no hagas'],
              ['usted',    'no + Pres.Subj.3.Sg.', 'no hable',    'no coma',    'no haga'],
              ['nosotros', 'no + Pres.Subj.1.Pl.', 'no hablemos', 'no comamos', 'no hagamos'],
              ['vosotros', 'no + Pres.Subj.2.Pl.', 'no habléis',  'no comáis',  'no hagáis'],
              ['ustedes',  'no + Pres.Subj.3.Pl.', 'no hablen',   'no coman',   'no hagan'],
            ],
          })}

          ${renderCompare({
            titleA: 'Imperativo AFIRMATIVO',
            titleB: 'Imperativo NEGATIVO',
            listA: [
              '¡Habla más despacio!',
              '¡Come las verduras!',
              '¡Escucha esto!',
              '¡Di la verdad!',
              '¡Ve a casa!',
            ],
            listB: [
              '¡No hables tan rápido!',
              '¡No comas tantos dulces!',
              '¡No escuches eso!',
              '¡No digas mentiras!',
              '¡No vayas allí!',
            ],
          })}
        </div>

        <!-- Imperativ mit Pronomen -->
        <div class="reveal" style="margin-top:2.5rem;">
          ${renderSubhead('Mit Pronomen')}
          <h2 class="lz-h2">Imperativ + Objektpronomen</h2>

          <p class="lz-prose"><strong>Bejahter Imperativ:</strong> Pronomen werden ans Verb <em>angehängt</em> — ein Akzent bewahrt die ursprüngliche Betonung.</p>
          <p class="lz-prose"><strong>Verneinender Imperativ:</strong> Pronomen stehen <em>vor</em> dem Verb.</p>

          ${renderTable({
            headers: ['Bejahter Imperativ (angehängt)', 'Verneinender Imperativ (davor)', 'Bedeutung'],
            rows: [
              ['¡Dámelo!',        '¡No me lo des!',        'Gib es mir! / Gib es mir nicht!'],
              ['¡Díselo!',        '¡No se lo digas!',      'Sag es ihm/ihr! / Sag es nicht!'],
              ['¡Cómpratelo!',    '¡No te lo compres!',    'Kauf es dir! / Kauf es dir nicht!'],
              ['¡Escríbenos!',    '¡No nos escribas!',     'Schreib uns! / Schreib uns nicht!'],
              ['¡Llévatela!',     '¡No te la lleves!',     'Nimm sie mit! / Nimm sie nicht!'],
            ],
          })}

          ${renderInfobox({ type: '', icon: 'fas fa-star', title: 'Akzentregel beim Anhängen',
            body: `<strong>Betonungsregel:</strong> Die Betonung des Verbs bleibt auf der ursprünglichen Silbe.<br>
                   <em>escríbe + la = escríbela</em> (3 Silben → Akzent nötig)<br>
                   <em>dá + me + lo = dámelo</em> (3 Silben → Akzent nötig)<br>
                   <em>di + me + lo = dímelo</em> (unregelmäßig: dí behält Akzent)<br>
                   <strong>Faustformel:</strong> Ab 3 oder mehr Silben nach dem Anhängen → Akzent auf der betonten Verbsilbe.` })}
        </div>

        <!-- Reflexive Verben -->
        <div class="reveal" style="margin-top:2.5rem;">
          ${renderSubhead('Reflexive Verben')}
          <h2 class="lz-h2">Reflexive Verben im Imperativ</h2>
          <p class="lz-prose">Das Reflexivpronomen wird angehängt (positiv) bzw. vorangestellt (negativ). Beim <em>vosotros</em>-Positiv-Imperativ fällt das -d vor -os weg.</p>

          ${renderTable({
            headers: ['Person', 'Positiv (levantarse)', 'Negativ', 'Besonderheit'],
            rows: [
              ['tú',       '¡Levántate!',    '¡No te levantes!',   'levanta + te → levántate (Akzent)'],
              ['usted',    '¡Levántese!',    '¡No se levante!',    'levante + se → levántese'],
              ['nosotros', '¡Levantémonos!', '¡No nos levantemos!','levantemos + nos → das -s fällt weg'],
              ['vosotros', '¡Levantaos!',    '¡No os levantéis!',  'levantad + os → das -d fällt weg!'],
              ['ustedes',  '¡Levántense!',   '¡No se levanten!',   'levanten + se → levántense'],
            ],
            highlight: [3],
          })}

          ${renderInfobox({ type: 'warning', icon: 'fas fa-exclamation-triangle', title: 'Ausnahme: irse (ir reflexiv)',
            body: `Bei <em>irse</em> bleibt im vosotros-Imperativ das -d: <em>¡Idos!</em> (Geht weg!)<br>
                   Alle anderen reflexiven Verben verlieren das -d: levantad → <em>levantaos</em>.` })}
        </div>

        <!-- Häufige Fehler -->
        <div class="reveal" style="margin-top:2rem;">
          ${renderInfobox({ type: 'warning', icon: 'fas fa-exclamation-triangle', title: 'Häufige Fehler — Imperativo',
            body: `<strong>① Negativer Imperativ mit afirmativer Form:</strong>
                   <em>Falsch: *¡No habla tan rápido!</em> → Korrekt: <em>¡No hables tan rápido!</em><br>
                   <strong>② Pronomen vor positivem Imperativ:</strong>
                   <em>Falsch: *¡Me da el libro!</em> → Korrekt: <em>¡Dame el libro!</em><br>
                   <strong>③ Akzent vergessen:</strong>
                   <em>Falsch: *Damelo.</em> → Korrekt: <em>Dámelo.</em><br>
                   <strong>④ ve (ir) ≠ ve (ver im Imperativo tú):</strong>
                   ir: <em>¡Ve a casa!</em> / ver: <em>¡Mira esto!</em> (ver hat keinen unregelmäßigen Imperativ)` })}
        </div>

      </div>
    </section>

    <section class="lz-content-section" style="padding:1.5rem 0 3rem;">
      <div class="lz-section-wrap">
        ${renderPageNav({
          prev: { label: '1.6 Si-Sätze',        link: `${BASE}/themen/grammatik/si-saetze`      },
          next: { label: '1.8 Relativsätze',     link: `${BASE}/themen/grammatik/relativsaetze`  },
        }, BASE)}
      </div>
    </section>
    ${footerHTML(this.router)}
  `; }

  init() { i18n.init(); initScrollReveal(); initInteractive(document); }
}