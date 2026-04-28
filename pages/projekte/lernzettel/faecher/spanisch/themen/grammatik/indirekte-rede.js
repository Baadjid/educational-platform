// pages/projekte/lernzettel/faecher/spanisch/themen/grammatik/indirekte-rede.js
// 1.4 — Discurso indirecto · Indirekte Rede

import { initScrollReveal } from '../../../../../../../shared/js/index.js';
import { footerHTML }        from '../../../../../../../components/Footer.js';
import { i18n }              from '../../../../../../../shared/js/i18n.js';
import {
  ensureComponentsCSS, renderInfobox, renderTable,
  renderSubhead, renderTags, renderAccordion, initInteractive,
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

export default class Spanisch_Indirekte_Rede {
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
          <i class="fas fa-chevron-right"></i><span>1.4 Indirekte Rede</span>
        </div>
        <h1 class="lz-sub-title">Discurso indirecto —<br><em>Indirekte Rede</em></h1>
        <p class="lz-sub-desc">
          Zeitenverschiebung · Einleitungsverben · Indirekte Fragen ·
          Orts- und Zeitausdrücke · Vollständige Beispielreihe
        </p>
        ${renderTags(['1.4', 'Indirekte Rede', 'Discurso indirecto', 'Grammatik', 'Abitur 2026'])}
      </div>
    </section>

    <section class="lz-content-section">
      <div class="lz-section-wrap">

        ${renderSubhead('Grundprinzip')}
        <h2 class="lz-h2 reveal">Was ändert sich?</h2>
        <p class="lz-prose reveal">In der indirekten Rede wird eine Äußerung ohne Anführungszeichen wiedergegeben. Je nach Zeitform des Einleitungsverbs (Präsens oder Vergangenheit) verschieben sich die Zeiten im Nebensatz — oder nicht.</p>

        ${renderInfobox({ type: 'blue', icon: 'fas fa-info-circle', title: 'Grundregel: Wann verschiebt sich die Zeit?',
          body: `<strong>Einleitungsverb im PRÄSENS:</strong> Keine Zeitenverschiebung.<br>
                 <em>Dice que está enfermo.</em> (Er sagt, er ist krank.)<br><br>
                 <strong>Einleitungsverb in der VERGANGENHEIT (Indefinido/Imperfecto):</strong> Zeitenverschiebung!<br>
                 <em>Dijo que estaba enfermo.</em> (Er sagte, er sei krank.)` })}

        <!-- Zeitenverschiebung -->
        <div class="reveal" style="margin-top:2.5rem;">
          ${renderSubhead('Zeitenverschiebung')}
          <h2 class="lz-h2">Tabelle der Zeitenverschiebung</h2>
          <p class="lz-prose">Wenn das Einleitungsverb in der Vergangenheit steht (dijo, preguntó, comentó…):</p>

          ${renderTable({
            headers: ['Direkte Rede (Zeitform)', '→ Indirekte Rede (nach Vg.-Einleitung)', 'Beispiel direkt', 'Beispiel indirekt'],
            rows: [
              ['Presente',             '→ Imperfecto',              '"Estoy cansado."',        'Dijo que estaba cansado.'],
              ['Pretérito Indefinido', '→ Pluscuamperfecto',        '"Llegué tarde."',         'Dijo que había llegado tarde.'],
              ['Pretérito Perfecto',   '→ Pluscuamperfecto',        '"He terminado."',         'Dijo que había terminado.'],
              ['Pretérito Imperfecto', '→ (bleibt) Imperfecto',     '"Llovía mucho."',         'Dijo que llovía mucho.'],
              ['Futuro Simple',        '→ Condicional Simple',      '"Vendré mañana."',        'Dijo que vendría al día siguiente.'],
              ['Condicional Simple',   '→ (bleibt) Condicional',    '"Iría si pudiera."',      'Dijo que iría si pudiera.'],
              ['Imperativo (Befehl)',  '→ Imperfecto Subjuntivo',   '"¡Ven aquí!"',            'Me dijo que fuera allí.'],
              ['Presente Subjuntivo',  '→ Imperfecto Subjuntivo',   '"Espero que vengas."',    'Dijo que esperaba que fuera.'],
            ],
            highlight: [6],
          })}
        </div>

        <!-- Einleitungsverben -->
        <div class="reveal" style="margin-top:2.5rem;">
          ${renderSubhead('Einleitungsverben')}
          <h2 class="lz-h2">Die wichtigsten Einleitungsverben</h2>

          ${renderTable({
            headers: ['Verb', 'Bedeutung', 'Struktur', 'Beispiel'],
            rows: [
              ['decir',           'sagen',          'decir que + Indik./Subj.',  'Me dijo que llamara mañana.'],
              ['comentar',        'kommentieren',   'comentar que',              'Comentó que el precio era muy alto.'],
              ['explicar',        'erklären',       'explicar que',              'Explicó que no podía venir.'],
              ['afirmar',         'behaupten',      'afirmar que',               'Afirmó que era inocente.'],
              ['añadir',          'hinzufügen',     'añadir que',                'Añadió que necesitaba más tiempo.'],
              ['reconocer',       'zugeben',        'reconocer que',             'Reconoció que se había equivocado.'],
              ['preguntar',       'fragen',         'preguntar si / quién / …',  'Preguntó si habíamos terminado.'],
              ['pedir',           'bitten',         'pedir que + Subjuntivo',    'Me pidió que le ayudara.'],
              ['ordenar',         'befehlen',       'ordenar que + Subjuntivo',  'Ordenó que todos salieran.'],
              ['proponer',        'vorschlagen',    'proponer que + Subjuntivo', 'Propuso que fuéramos en tren.'],
              ['aconsejar',       'raten',          'aconsejar que + Subjuntivo','Me aconsejó que descansara más.'],
              ['advertir',        'warnen',         'advertir que',              'Advirtió que habría consecuencias.'],
            ],
          })}

          ${renderInfobox({ type: '', icon: 'fas fa-star', title: 'Schlüsselunterschied: decir que (Aussage) vs. decir que (Befehl)',
            body: `<strong>Aussage:</strong> <em>Dijo que vendría.</em> (Er sagte, er würde kommen.) → Indikativ/Konditional<br>
                   <strong>Befehl/Aufforderung:</strong> <em>Me dijo que viniera.</em> (Er sagte mir, ich solle kommen.) → Imperfecto Subjuntivo<br>
                   Der Unterschied liegt im Kontext und der Bedeutungsabsicht.` })}
        </div>

        <!-- Indirekte Fragen -->
        <div class="reveal" style="margin-top:2.5rem;">
          ${renderSubhead('Indirekte Fragen')}
          <h2 class="lz-h2">Indirekte Fragen — KEIN que nach Fragewörtern!</h2>

          ${renderInfobox({ type: 'warning', icon: 'fas fa-exclamation-triangle', title: 'Der häufigste Fehler bei indirekten Fragen',
            body: `Nach <strong>preguntar + Fragewort</strong> kommt KEIN "que"!<br>
                   <em>Falsch: *Preguntó que dónde vivía.</em><br>
                   <em>Richtig: Preguntó dónde vivía.</em><br><br>
                   Bei Ja/Nein-Fragen steht <strong>si</strong>:<br>
                   <em>Preguntó si vendría mañana.</em>` })}

          ${renderTable({
            headers: ['Direkte Frage', '→ Indirekte Frage', 'Fragewort/Konj.'],
            rows: [
              ['"¿Dónde vives?"',       'Preguntó dónde vivía.',             'dónde (wo)'],
              ['"¿Cuándo llegas?"',     'Preguntó cuándo llegaba.',          'cuándo (wann)'],
              ['"¿Cómo te llamas?"',    'Preguntó cómo me llamaba.',         'cómo (wie)'],
              ['"¿Por qué no vino?"',   'Preguntó por qué no había venido.', 'por qué (warum)'],
              ['"¿Qué quieres?"',       'Preguntó qué quería.',              'qué (was)'],
              ['"¿Cuánto cuesta?"',     'Preguntó cuánto costaba.',          'cuánto (wie viel)'],
              ['"¿Vienes mañana?"',     'Preguntó si vendría al día siguiente.', 'si (ob) — Ja/Nein-Frage'],
              ['"¿Hablas español?"',    'Preguntó si hablaba español.',      'si (ob) — Ja/Nein-Frage'],
            ],
            highlight: [6, 7],
          })}
        </div>

        <!-- Orts- und Zeitangaben -->
        <div class="reveal" style="margin-top:2.5rem;">
          ${renderSubhead('Orts- und Zeitangaben')}
          <h2 class="lz-h2">Veränderung von Orts- und Zeitausdrücken</h2>
          <p class="lz-prose">Wenn das Einleitungsverb in der Vergangenheit steht, verschieben sich auch Ort- und Zeitreferenzen:</p>

          ${renderTable({
            headers: ['Direkte Rede', '→ Indirekte Rede'],
            rows: [
              ['hoy (heute)',              '→ ese día / aquel día'],
              ['mañana (morgen)',          '→ al día siguiente'],
              ['ayer (gestern)',           '→ el día anterior / el día antes'],
              ['ahora (jetzt)',            '→ entonces / en ese momento'],
              ['esta semana (diese Woche)','→ esa semana'],
              ['aquí (hier)',              '→ allí / allá'],
              ['este/esta (dieser/diese)', '→ ese/esa / aquel/aquella'],
              ['venir (kommen [zu mir])',  '→ ir (gehen [weg])'],
            ],
          })}

          <p class="lz-prose"><strong>Vollständiges Beispiel:</strong></p>
          <p class="lz-prose"><em>Direkt:</em> «Hoy he llegado aquí y mañana me iré.»</p>
          ${ej('Dijo que ese día había llegado allí y que al día siguiente se iría.', 'Er sagte, er sei an jenem Tag dort angekommen und würde am nächsten Tag abreisen.', 'Vollständige Zeitenverschiebung mit Orts- und Zeitwechsel')}
        </div>

        <!-- Komplexe Beispiele -->
        <div class="reveal" style="margin-top:2.5rem;">
          ${renderSubhead('Vollständige Beispiele')}
          <h2 class="lz-h2">Von direkt zu indirekt — Schritt für Schritt</h2>

          ${renderAccordion([
            {
              title: 'Beispiel 1: Aussagesatz',
              content: `
                <p class="lz-prose"><strong>Direkt:</strong> «Estoy muy cansado y no puedo salir esta noche.»</p>
                ${ej('Marcos dijo que estaba muy cansado y que no podía salir esa noche.', 'Marcos sagte, er sei sehr müde und könne nicht ausgehen an jenem Abend.', 'Presente→Imperfecto · esta noche→esa noche')}
              `,
            },
            {
              title: 'Beispiel 2: W-Frage',
              content: `
                <p class="lz-prose"><strong>Direkt:</strong> «¿Por qué no estudiaste para el examen?»</p>
                ${ej('La profesora nos preguntó por qué no habíamos estudiado para el examen.', 'Die Lehrerin fragte uns, warum wir nicht für die Prüfung gelernt hatten.', 'W-Frage ohne "que" · Indefinido→Pluscuamperfecto')}
              `,
            },
            {
              title: 'Beispiel 3: Befehl/Aufforderung',
              content: `
                <p class="lz-prose"><strong>Direkt:</strong> «¡Por favor, ayúdame con las maletas!»</p>
                ${ej('Me pidió que le ayudara con las maletas.', 'Er bat mich, ihm mit den Koffern zu helfen.', 'Imperativ → pedir que + Imperfecto Subjuntivo')}
              `,
            },
            {
              title: 'Beispiel 4: Ja/Nein-Frage',
              content: `
                <p class="lz-prose"><strong>Direkt:</strong> «¿Habéis terminado ya el proyecto?»</p>
                ${ej('El jefe preguntó si ya habíamos terminado el proyecto.', 'Der Chef fragte, ob wir das Projekt schon beendet hätten.', 'Ja/Nein-Frage mit si · Perfecto→Pluscuamperfecto')}
              `,
            },
          ])}
        </div>

      </div>
    </section>

    <section class="lz-content-section" style="padding:1.5rem 0 3rem;">
      <div class="lz-section-wrap">
        ${renderPageNav({
          prev: { label: '1.3 Subjuntivo',     link: `${BASE}/themen/grammatik/subjuntivo`     },
          next: { label: '1.5 Objektpronomen', link: `${BASE}/themen/grammatik/objektpronomen` },
        }, BASE)}
      </div>
    </section>
    ${footerHTML(this.router)}
  `; }

  init() { i18n.init(); initScrollReveal(); initInteractive(document); }
}