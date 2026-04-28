// pages/projekte/lernzettel/faecher/spanisch/themen/grammatik/ser-estar.js
// 1.2 — Ser vs. Estar

import { initScrollReveal } from '../../../../../../../shared/js/index.js';
import { footerHTML }        from '../../../../../../../components/Footer.js';
import { i18n }              from '../../../../../../../shared/js/i18n.js';
import {
  ensureComponentsCSS, renderInfobox, renderTable,
  renderSubhead, renderTags, renderCompare,
  renderAccordion, initInteractive,
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

export default class Spanisch_SerEstar {
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
          <i class="fas fa-chevron-right"></i><span>1.2 Ser vs. Estar</span>
        </div>
        <h1 class="lz-sub-title">Ser vs. Estar —<br><em>Zwei Verben für „sein"</em></h1>
        <p class="lz-sub-desc">
          Vollständige Systematik · Alle Verwendungskontexte · Bedeutungsändernde
          Adjektive · Konjugationstabellen · Häufige Fehler
        </p>
        ${renderTags(['1.2', 'Ser', 'Estar', 'Grammatik', 'Abitur 2026'])}
      </div>
    </section>

    <section class="lz-content-section">
      <div class="lz-section-wrap">

        ${renderSubhead('Grundprinzip')}
        <h2 class="lz-h2 reveal">Das Grundprinzip</h2>
        <p class="lz-prose reveal">Das Spanische unterscheidet zwischen zwei Verben für das deutsche „sein". Die klassische Formel <em>dauerhaft vs. vorübergehend</em> ist zwar ein hilfreicher Einstieg, aber zu vereinfacht — viele Ausnahmen folgen anderen Logiken.</p>

        ${renderCompare({
          titleA: 'SER',
          titleB: 'ESTAR',
          listA: [
            'Identität: Wer/Was ist jemand?',
            'Wesensmerkmale & dauerhafte Eigenschaften',
            'Herkunft, Nationalität, Material',
            'Beruf, Zugehörigkeit, Religion',
            'Zeitangaben (Uhrzeit, Datum, Wochentag)',
            'Passiv mit ser: <em>El libro es escrito</em>',
            'Veranstaltungsort (Ereignisse): <em>La fiesta es aquí</em>',
            'Beziehungen: <em>Es mi madre</em>',
          ],
          listB: [
            'Aufenthaltsort von Personen und Dingen',
            'Vorübergehende Zustände & Gemütszustände',
            'Resultat einer Aktion (Partizip)',
            'Verlaufsform: estar + Gerundio',
            'estar + bien/mal/mejor/peor',
            'Körperliche Zustände: enfermo, cansado',
            'Marital status: <em>Está casado</em>',
            'Veränderter Zustand: <em>Está muerto</em>',
          ],
        })}

        ${renderInfobox({ type: 'blue', icon: 'fas fa-lightbulb', title: 'Merkhilfe: DOCTOR vs. PLACE',
          body: `<strong>SER — DOCTOR:</strong> <strong>D</strong>escriptions · <strong>O</strong>ccupation · <strong>C</strong>haracteristics · <strong>T</strong>ime · <strong>O</strong>rigin · <strong>R</strong>elationship<br>
                 <strong>ESTAR — PLACE:</strong> <strong>P</strong>osition · <strong>L</strong>ocation · <strong>A</strong>ction (Gerundio) · <strong>C</strong>ondition · <strong>E</strong>motion` })}

        <!-- Konjugation -->
        <div class="reveal" style="margin-top:2.5rem;">
          ${renderSubhead('Konjugation')}
          <h2 class="lz-h2">Ser & Estar — alle wichtigen Zeiten</h2>
          ${renderTable({
            headers: ['Person', 'ser Präsens', 'ser Indefinido', 'ser Imperfecto', 'estar Präsens', 'estar Indefinido', 'estar Imperfecto'],
            rows: [
              ['yo',          'soy',    'fui',      'era',     'estoy',   'estuve',    'estaba'],
              ['tú',          'eres',   'fuiste',   'eras',    'estás',   'estuviste', 'estabas'],
              ['él/ella/ud.', 'es',     'fue',      'era',     'está',    'estuvo',    'estaba'],
              ['nosotros',    'somos',  'fuimos',   'éramos',  'estamos', 'estuvimos', 'estábamos'],
              ['vosotros',    'sois',   'fuisteis', 'erais',   'estáis',  'estuvisteis','estabais'],
              ['ellos/uds.',  'son',    'fueron',   'eran',    'están',   'estuvieron','estaban'],
            ],
            highlight: [0, 2],
          })}
          <p class="lz-prose"><strong>Wichtig:</strong> Ser und ir haben im Indefinido identische Formen (fui, fuiste…). Der Kontext entscheidet: <em>Ayer fui al mercado</em> (ir) · <em>Fue un momento difícil</em> (ser).</p>
        </div>

        <!-- Systematik SER -->
        <div class="reveal" style="margin-top:2.5rem;">
          ${renderSubhead('SER — Verwendung')}
          <h2 class="lz-h2">Wann SER?</h2>

          ${renderTable({
            headers: ['Kontext', 'Erklärung', 'Beispiel'],
            rows: [
              ['Identität',          'Wer jemand ist — Name, Wesen',                'Soy Kirill. / Es mi hermana.'],
              ['Herkunft',           'Nationalität, Geburtsort',                    'Soy alemán. / Es de Madrid.'],
              ['Beruf',              'Profession (dauerhaft)',                       'Es médico. / Somos estudiantes.'],
              ['Wesenseigenschaften','Dauerhafter Charakter, Persönlichkeit',        'Es inteligente y amable.'],
              ['Material',           'Aus welchem Material etwas besteht',           'La mesa es de madera.'],
              ['Zugehörigkeit',      'Besitz, Relation',                             'Este libro es de Ana.'],
              ['Zeit',               'Uhrzeit, Datum, Wochentag, Jahreszeit',        'Son las tres. / Es lunes.'],
              ['Ereignisort',        'Wo ein Ereignis/eine Veranstaltung stattfindet','La conferencia es en Madrid.'],
              ['Passiv',             'Passivkonstruktion mit Partizip',              'El libro fue escrito en 1990.'],
            ],
          })}

          ${ej('Es profesor de matemáticas en un instituto público.', 'Er ist Mathematiklehrer an einer öffentlichen Schule.', 'Beruf — ser')}
          ${ej('La reunión es a las cinco en la sala de conferencias.', 'Das Treffen ist um fünf Uhr im Konferenzsaal.', 'Zeitangabe + Ereignisort — ser')}
        </div>

        <!-- Systematik ESTAR -->
        <div class="reveal" style="margin-top:2.5rem;">
          ${renderSubhead('ESTAR — Verwendung')}
          <h2 class="lz-h2">Wann ESTAR?</h2>

          ${renderTable({
            headers: ['Kontext', 'Erklärung', 'Beispiel'],
            rows: [
              ['Aufenthaltsort',      'Wo sich jemand/etwas gerade befindet',           'Estoy en casa. / El libro está en la mesa.'],
              ['Vorübergehender Zustand','Aktueller physischer/psychischer Zustand',    'Estoy cansado. / Está enferma.'],
              ['Gemütszustand',        'Momentane Gefühle',                             'Estoy feliz hoy. / Está triste.'],
              ['Resultat einer Aktion','Partizip beschreibt Ergebnis (nicht Vorgang)', 'La puerta está abierta. / Está muerto.'],
              ['Verlaufsform',         'Handlung läuft gerade ab',                      'Está estudiando. / Estoy leyendo.'],
              ['estar bien/mal',       'Allgemeines Befinden oder Qualitätsbewertung',  '¿Estás bien? / Esta paella está buenísima.'],
              ['Veränderter Zustand',  'Jemand hat sich verändert',                     'Estás muy guapo hoy. / ¡Qué alto estás!'],
            ],
          })}

          ${ej('La ventana está abierta porque hace calor.', 'Das Fenster ist offen, weil es heiß ist.', 'Resultat einer Aktion — estar + Partizip')}
          ${ej('¿Cómo estás? — Estoy bien, gracias, un poco cansado.', 'Wie geht es dir? — Gut, danke, ein bisschen müde.', 'Befinden — estar')}
        </div>

        <!-- Bedeutungsändernde Adjektive -->
        <div class="reveal" style="margin-top:2.5rem;">
          ${renderSubhead('Bedeutungsänderung')}
          <h2 class="lz-h2">Adjektive, die die Bedeutung ändern</h2>
          <p class="lz-prose">Bei diesen Adjektiven ergibt sich je nach ser oder estar eine völlig andere Bedeutung — im Abitur häufig getestet:</p>

          ${renderTable({
            headers: ['Adjektiv', 'con SER (Wesenseigenschaft)', 'con ESTAR (vorüb. Zustand)'],
            rows: [
              ['bueno/a',   'Er ist ein guter Mensch (mora­lisch gut)', 'Die Suppe ist gut (schmeckt gut)'],
              ['malo/a',    'Er ist böse / ein schlechter Mensch',       'Er ist krank / schlecht drauf'],
              ['aburrido/a','Er ist ein langweiliger Typ',               'Er ist (gerade) gelangweilt'],
              ['seguro/a',  'Es ist sicher (zuverlässig, ungefährlich)', 'Er ist sich sicher (überzeugt)'],
              ['listo/a',   'Er ist klug / intelligent',                 'Er ist fertig / bereit'],
              ['muerto/a',  'Ist ein Toter (Substantiv)',                'Er ist (gerade) tot (Zustand)'],
              ['rico/a',    'Er ist reich (Wohlstand)',                   'Es ist lecker (Geschmack)'],
              ['vivo/a',    'Er ist lebhaft / clever',                   'Er ist (noch) am Leben'],
              ['libre',     'Es ist kostenlos / frei (abstrakt)',         'Der Platz ist frei (unbesetzt)'],
              ['nuevo/a',   'Es ist ein neues (brandneu gekauftes) Auto', 'Es sieht aus wie neu (renoviert)'],
              ['cansado/a', '(Selten mit ser) — müde als Eigenschaft',   'Er ist (gerade) müde'],
              ['orgulloso/a','Er ist ein stolzer Mensch (Charakter)',    'Er ist (gerade) stolz auf etwas'],
            ],
          })}

          ${ej('Mi abuelo es bueno — siempre ayuda a los vecinos.', 'Mein Großvater ist ein guter Mensch — er hilft immer den Nachbarn.', 'ser bueno = moralisch gut')}
          ${ej('Esta tarta está muy buena, ¿la has hecho tú?', 'Dieser Kuchen schmeckt sehr gut, hast du ihn gemacht?', 'estar bueno = lecker')}
          ${ej('Juan es muy listo — siempre saca buenas notas.', 'Juan ist sehr klug — er hat immer gute Noten.', 'ser listo = klug')}
          ${ej('Ya estoy lista para salir, ¿vamos?', 'Ich bin jetzt fertig zum Losgehen, fahren wir?', 'estar listo = fertig/bereit')}
        </div>

        <!-- Häufige Fehler -->
        <div class="reveal" style="margin-top:2rem;">
          ${renderInfobox({ type: 'warning', icon: 'fas fa-exclamation-triangle', title: 'Häufige Fehler — Ser vs. Estar',
            body: `<strong>① Ort mit ser statt estar:</strong>
                   <em>Falsch: *Soy en casa.</em> → Korrekt: <em>Estoy en casa.</em><br>
                   (Ausnahme: Ereignisorte mit ser: <em>La boda es en la iglesia.</em>)<br>
                   <strong>② Befinden mit ser statt estar:</strong>
                   <em>Falsch: *Soy enfermo.</em> → Korrekt: <em>Estoy enfermo.</em><br>
                   <strong>③ estar mit dauerhafter Eigenschaft:</strong>
                   <em>Falsch: *Está inteligente.</em> → Korrekt: <em>Es inteligente.</em><br>
                   <strong>④ Beruf/Nationalität mit estar:</strong>
                   <em>Falsch: *Estoy alemán.</em> → Korrekt: <em>Soy alemán.</em><br>
                   <strong>⑤ estar mit Uhrzeit:</strong>
                   <em>Falsch: *Están las tres.</em> → Korrekt: <em>Son las tres.</em>` })}
        </div>

      </div>
    </section>

    <section class="lz-content-section" style="padding:1.5rem 0 3rem;">
      <div class="lz-section-wrap">
        ${renderPageNav({
          prev: { label: '1.1 Zeitformen',   link: `${BASE}/themen/grammatik/zeitformen`  },
          next: { label: '1.3 Subjuntivo',   link: `${BASE}/themen/grammatik/subjuntivo`  },
        }, BASE)}
      </div>
    </section>
    ${footerHTML(this.router)}
  `; }

  init() { i18n.init(); initScrollReveal(); initInteractive(document); }
}