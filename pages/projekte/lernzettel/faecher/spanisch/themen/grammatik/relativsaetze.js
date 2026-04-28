// pages/projekte/lernzettel/faecher/spanisch/themen/grammatik/relativsaetze.js
// 1.8 — Relativos & Satzbau · Relativsätze und Satzstruktur

import { initScrollReveal } from '../../../../../../../shared/js/index.js';
import { footerHTML }        from '../../../../../../../components/Footer.js';
import { i18n }              from '../../../../../../../shared/js/i18n.js';
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

export default class Spanisch_Relativsaetze {
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
          <i class="fas fa-chevron-right"></i><span>1.8 Relativsätze</span>
        </div>
        <h1 class="lz-sub-title">Relativos & Satzbau —<br><em>Relativsätze</em></h1>
        <p class="lz-sub-desc">
          que · quien/quienes · el/la que · el/la cual · cuyo/a ·
          donde · cuando · como · Subjuntivo in Relativsätzen · Satzbau
        </p>
        ${renderTags(['1.8', 'Relativsätze', 'Relativos', 'Satzbau', 'Grammatik', 'Abitur 2026'])}
      </div>
    </section>

    <section class="lz-content-section">
      <div class="lz-section-wrap">

        <!-- Überblick -->
        ${renderSubhead('Überblick')}
        <h2 class="lz-h2 reveal">Alle Relativpronomen im Überblick</h2>
        <p class="lz-prose reveal">Relativsätze verbinden zwei Teilsätze, indem sie auf ein Bezugswort (Nomen, Pronomen oder ganzen Satz) verweisen. Im Spanischen stehen immer Kommas bei nicht-restriktiven (erklärenden) Relativsätzen.</p>

        ${renderTable({
          headers: ['Relativpronomen', 'Bezugswort', 'Kontext', 'Beispiel'],
          rows: [
            ['que',                'Personen & Sachen', 'universell — häufigste Form',                 'El libro que leí era excelente.'],
            ['quien / quienes',    'nur Personen',      'nach Präposition · nicht-restriktiv',         'La chica con quien hablo es mi amiga.'],
            ['el/la/los/las que',  'Personen & Sachen', 'nach Präposition · restriktiv mögl.',         'El que llega tarde paga.'],
            ['el/la/los/las cual(es)','Personen & Sachen','formell · nach Präposition · nicht-restrik.','La empresa, la cual fue fundada en 1990…'],
            ['cuyo/a/os/as',       'Personen & Sachen', 'Possessivrelativ (dessen/deren)',             'El autor cuyo libro ganó el premio…'],
            ['donde',              'Orte',              'räumliche Bezüge',                            'La ciudad donde nací es muy bonita.'],
            ['cuando',             'Zeitpunkte',        'zeitliche Bezüge',                            'Recuerdo el día cuando te conocí.'],
            ['como',               'Art und Weise',     'modale Bezüge',                               'No me gusta la forma como lo hizo.'],
          ],
        })}

        <!-- que -->
        <div class="reveal" style="margin-top:2.5rem;">
          ${renderSubhead('que — das universelle Relativpronomen')}
          <h2 class="lz-h2">que — für Personen und Sachen</h2>
          <p class="lz-prose"><em>Que</em> ist das weitaus häufigste Relativpronomen im Spanischen. Es ist unveränderlich (kein Genus, kein Numerus), bezieht sich auf Personen und Sachen, und steht in restriktiven (einschränkenden) wie nicht-restriktiven (erklärenden) Relativsätzen.</p>
          <p class="lz-prose"><strong>Achtung:</strong> Nach einfachen Präpositionen steht <em>que</em> nur für Sachen (mit Artikel: el que). Für Personen nach Präpositionen → <em>quien/quienes</em>.</p>

          ${ej('El estudiante que sacó la mejor nota recibió un premio.', 'Der Student, der die beste Note bekam, erhielt einen Preis.', 'que → Person, restriktiv')}
          ${ej('La novela que estoy leyendo trata de la Guerra Civil española.', 'Der Roman, den ich gerade lese, handelt vom spanischen Bürgerkrieg.', 'que → Sache, Objekt')}
          ${ej('Madrid, que es la capital de España, tiene más de tres millones de habitantes.', 'Madrid, das die Hauptstadt Spaniens ist, hat mehr als drei Millionen Einwohner.', 'que → nicht-restriktiv mit Komma')}
          ${ej('La mesa en la que trabajo es muy grande.', 'Der Tisch, an dem ich arbeite, ist sehr groß.', 'Präposition + Artikel + que für Sachen')}
        </div>

        <!-- quien / quienes -->
        <div class="reveal" style="margin-top:2.5rem;">
          ${renderSubhead('quien / quienes')}
          <h2 class="lz-h2">quien / quienes — nur für Personen</h2>
          <p class="lz-prose"><em>Quien</em> (Sg.) und <em>quienes</em> (Pl.) beziehen sich ausschließlich auf Personen. Sie stehen:</p>
          <ul class="lz-prose" style="padding-left:1.5rem;line-height:2;">
            <li>Nach Präpositionen für Personen: <em>con quien, de quien, para quienes…</em></li>
            <li>In nicht-restriktiven Relativsätzen als Alternative zu <em>que</em></li>
            <li>In verallgemeinernden Sätzen ohne Bezugswort: <em>Quien quiera… (Wer will…)</em></li>
          </ul>

          ${ej('El profesor con quien hablé ayer es muy simpático.', 'Der Lehrer, mit dem ich gestern gesprochen habe, ist sehr nett.', 'Präposition + quien für Personen')}
          ${ej('Mi hermana, quien vive en Barcelona, me visita mañana.', 'Meine Schwester, die in Barcelona wohnt, besucht mich morgen.', 'quien in nicht-restriktivem Relativsatz')}
          ${ej('Quien no arriesga, no gana.', 'Wer nicht wagt, der nicht gewinnt.', 'quien ohne Bezugswort = verallgemeinernd')}
          ${ej('Los estudiantes a quienes se les dio el premio estaban muy emocionados.', 'Die Schüler, denen der Preis verliehen wurde, waren sehr bewegt.', 'Pl. quienes nach Präposition')}
        </div>

        <!-- el/la que / el/la cual -->
        <div class="reveal" style="margin-top:2.5rem;">
          ${renderSubhead('el/la que & el/la cual')}
          <h2 class="lz-h2">el/la/los/las que — el/la/los/las cual(es)</h2>
          <p class="lz-prose">Diese Formen passen sich in Genus und Numerus dem Bezugswort an. Sie sind stärker und klarer als <em>que</em> alleine — besonders nach Präpositionen und bei weitem Abstand zum Bezugswort.</p>

          ${renderTable({
            headers: ['Form', 'Verwendung', 'Beispiel'],
            rows: [
              ['el que / la que',   'nach Präpositionen, restriktiv, m./f. Sg.',  'El edificio del que te hablé está aquí.'],
              ['los que / las que', 'nach Präpositionen, restriktiv, m./f. Pl.',  'Las personas de las que hablaba son mis amigas.'],
              ['el cual / la cual', 'formell, nach Präp., nicht-restriktiv Sg.',  'El director, el cual llegó tarde, se disculpó.'],
              ['los cuales / las cuales', 'formell, nicht-restriktiv Pl.',        'Los documentos, los cuales estaban en mi mesa…'],
            ],
          })}

          ${renderInfobox({ type: 'blue', icon: 'fas fa-info-circle', title: 'el que vs. el cual — Unterschied',
            body: `<strong>el/la que</strong>: umgangssprachlich und schriftsprachlich, restriktiv und nicht-restriktiv.<br>
                   <strong>el/la cual</strong>: eher formell/literarisch, häufiger in nicht-restriktiven Sätzen (mit Komma).<br>
                   Nach Präpositionen sind beide korrekt: <em>la empresa para la que trabajo</em> = <em>la empresa para la cual trabajo.</em>` })}

          ${ej('La razón por la que no vine era que estaba enfermo.', 'Der Grund, warum ich nicht kam, war, dass ich krank war.', 'por la que → Grund')}
          ${ej('El edificio en el que vivo tiene cien años.', 'Das Gebäude, in dem ich wohne, ist hundert Jahre alt.', 'en el que → Ort')}
        </div>

        <!-- cuyo/a -->
        <div class="reveal" style="margin-top:2.5rem;">
          ${renderSubhead('cuyo — Possessivrelativ')}
          <h2 class="lz-h2">cuyo/a/os/as — dessen / deren</h2>
          <p class="lz-prose"><em>Cuyo</em> ist das einzige Relativpronomen, das Possessivbedeutung hat (= „dessen/deren"). Es richtet sich im Genus und Numerus nach dem <strong>Nomen, das ihm folgt</strong> (nicht nach dem Bezugswort!).</p>

          ${renderTable({
            headers: ['Form', 'Bezugsnomen', 'Beispiel'],
            rows: [
              ['cuyo',   'Maskulin Sg.',   'El escritor cuyo libro ganó el premio es joven.'],
              ['cuya',   'Feminin Sg.',    'La empresa cuya sede está en Madrid es famosa.'],
              ['cuyos',  'Maskulin Pl.',   'El autor cuyos personajes son tan complejos…'],
              ['cuyas',  'Feminin Pl.',    'La actriz cuyas películas he visto todas…'],
            ],
          })}

          ${renderInfobox({ type: 'warning', icon: 'fas fa-exclamation-triangle', title: 'cuyo ≠ de que',
            body: `<em>Cuyo</em> ERSETZT <em>de + que</em> mit Possessivsinn. Man kann NICHT sagen:<br>
                   <em>Falsch: *El hombre que su hija es famosa.</em><br>
                   <em>Falsch: *El hombre de que la hija es famosa.</em><br>
                   <em>Korrekt: El hombre cuya hija es famosa.</em>` })}

          ${ej('La investigadora cuyos descubrimientos cambiaron la medicina recibió el Nobel.', 'Die Forscherin, deren Entdeckungen die Medizin veränderten, erhielt den Nobel-Preis.', 'cuyas → folgt descubrimientos (Mask.Pl.)')}
          ${ej('Visitamos un barrio cuyas calles conservan la arquitectura medieval.', 'Wir besuchten ein Viertel, dessen Straßen die mittelalterliche Architektur bewahren.', 'cuyas → folgt calles (Fem.Pl.)')}
        </div>

        <!-- donde / cuando / como -->
        <div class="reveal" style="margin-top:2.5rem;">
          ${renderSubhead('donde · cuando · como')}
          <h2 class="lz-h2">Relativadverbien: donde · cuando · como</h2>

          ${renderTable({
            headers: ['Relativadverb', 'Bedeutung', 'Bezugswort', 'Beispiel'],
            rows: [
              ['donde',  'wo / in dem / auf dem',  'Ortsangabe',          'El país donde nació es Argentina.'],
              ['adonde', 'wohin',                   'Richtung',            'La ciudad adonde viajamos era preciosa.'],
              ['cuando', 'als / wann',               'Zeitangabe',          'Recuerdo la tarde cuando nos conocimos.'],
              ['como',   'wie / auf die Art, wie',   'Art und Weise',       'No me gusta la forma como habla.'],
            ],
          })}

          ${ej('La cafetería donde suelo estudiar siempre está llena por las mañanas.', 'Das Café, wo ich normalerweise lerne, ist morgens immer voll.', 'donde = en la que / en el que')}
          ${ej('Nunca olvidaré el día cuando aprendí a leer.', 'Ich werde nie den Tag vergessen, als ich Lesen lernte.', 'cuando für Zeitpunkt')}
          ${ej('La manera como resolvió el problema fue increíble.', 'Die Art, wie er das Problem löste, war unglaublich.', 'como für Art und Weise')}
        </div>

        <!-- Subjuntivo in Relativsätzen (Wiederholung & Vertiefung) -->
        <div class="reveal" style="margin-top:2.5rem;">
          ${renderSubhead('Subjuntivo in Relativsätzen')}
          <h2 class="lz-h2">Indikativo vs. Subjuntivo — Entscheidung</h2>
          <p class="lz-prose">Der Modus im Relativsatz hängt davon ab, ob das Bezugswort bekannt und definiert ist oder nicht:</p>

          ${renderTable({
            headers: ['Situation', 'Modus', 'Beispiel'],
            rows: [
              ['Bezugswort bekannt/existent',          'Indikativo', 'Tengo una amiga que habla cinco idiomas. (sie existiert)'],
              ['Bezugswort unbekannt/gesucht',          'Subjuntivo', 'Busco una amiga que hable cinco idiomas. (ob sie existiert, unklar)'],
              ['Verneinung (niemand, nichts, keiner)',  'Subjuntivo', 'No hay nadie que sepa la respuesta.'],
              ['Superlativ mit hypothetischem Sinn',    'Subjuntivo', 'Es el mejor candidato que haya visto.'],
              ['alguien que / algo que (unbekannt)',    'Subjuntivo', '¿Conoces a alguien que pueda ayudarnos?'],
            ],
            highlight: [1, 2, 4],
          })}

          ${ej('Busco un piso que tenga dos habitaciones y sea céntrico.', 'Ich suche eine Wohnung, die zwei Zimmer hat und zentral gelegen ist.', 'Subjuntivo — Wohnung noch nicht gefunden')}
          ${ej('He encontrado un piso que tiene dos habitaciones y es céntrico.', 'Ich habe eine Wohnung gefunden, die zwei Zimmer hat und zentral gelegen ist.', 'Indikativo — Wohnung existiert, wurde gefunden')}
        </div>

        <!-- Satzbau -->
        <div class="reveal" style="margin-top:2.5rem;">
          ${renderSubhead('Satzbau')}
          <h2 class="lz-h2">Spanischer Satzbau — Besonderheiten</h2>

          ${renderAccordion([
            {
              title: 'Fragestellung: SVO oder andere Reihenfolge?',
              content: `
                <p class="lz-prose">Das Spanische ist grundsätzlich eine <strong>SVO-Sprache</strong> (Subjekt-Verb-Objekt), hat aber große Flexibilität. Das Subjekt kann fehlen (Pro-drop-Sprache), und die Wortstellung dient oft der Betonung.</p>
                ${renderTable({
                  headers: ['Wortstellung', 'Effekt', 'Beispiel'],
                  rows: [
                    ['SVO (Standard)',   'neutral',               'Juan come una manzana.'],
                    ['OVS (Topikalisierung)', 'Objekt betont',    'Una manzana come Juan. (ungewöhnlich, stilistisch)'],
                    ['VS (ohne Subj.)',  'Subjekt optional',      'Come una manzana. (er/sie isst)'],
                    ['Verb-Ende',        'Nebensatz',             '…que Juan comiera una manzana.'],
                  ],
                })}
              `,
            },
            {
              title: 'Negation: doppelte Verneinung',
              content: `
                <p class="lz-prose">Im Spanischen ist die <strong>doppelte Verneinung grammatikalisch korrekt</strong> und sogar obligatorisch, wenn ein Negativwort nach dem Verb steht.</p>
                ${renderTable({
                  headers: ['Negativwort vor Verb', 'Negativwort nach Verb (Doppelnegation)', 'Bedeutung'],
                  rows: [
                    ['Nadie habla.',        'No habla nadie.',         'Niemand spricht.'],
                    ['Nada pasa.',          'No pasa nada.',           'Nichts passiert.'],
                    ['Nunca llega tarde.',  'No llega nunca tarde.',   'Er kommt nie zu spät.'],
                    ['Tampoco lo sé.',      'No lo sé tampoco.',       'Ich weiß es auch nicht.'],
                  ],
                })}
                ${ej('No he visto nada interesante hoy.', 'Ich habe heute nichts Interessantes gesehen.', 'Doppelnegation: no … nada')}
                ${ej('No conozco a nadie aquí.', 'Ich kenne hier niemanden.', 'Doppelnegation: no … nadie')}
              `,
            },
            {
              title: 'Betonung durch Ausrufestruktur und Spaltsatz',
              content: `
                <p class="lz-prose">Für Betonung wird im Spanischen oft die Struktur <strong>ser + que (Spaltsatz / cleft sentence)</strong> verwendet:</p>
                ${ej('Fue Juan quien lo hizo. / Fue Juan el que lo hizo.', 'Es war Juan, der es getan hat.', 'Spaltsatz mit ser + quien — Juan wird betont')}
                ${ej('Lo que me molesta es su actitud.', 'Was mich stört, ist seine Einstellung.', 'lo que = das, was — Nominalisierung')}
                ${ej('Es que no tengo tiempo.', 'Das Ding ist, dass ich keine Zeit habe.', 'es que = Erklärung/Entschuldigung')}
              `,
            },
            {
              title: 'Besonderheiten: a personal & hay que',
              content: `
                <p class="lz-prose"><strong>A personal:</strong> Vor direkten Objekten, die Personen (oder personifizierte Tiere/Dinge) sind, steht im Spanischen ein persönliches <em>a</em>. Es hat keine eigene Bedeutung.</p>
                ${ej('Veo a mi madre todos los días.', 'Ich sehe meine Mutter jeden Tag.', 'a personal bei Person als direktes Objekt')}
                ${ej('Busco a un médico que hable alemán.', 'Ich suche einen Arzt, der Deutsch spricht.', 'a personal auch bei bekannter/gesuchter Person')}
                ${ej('Busco un médico que hable alemán.', 'Ich suche irgendeinen Arzt, der Deutsch spricht.', 'OHNE a personal → unbestimmt, beliebiger Arzt')}
                <p class="lz-prose" style="margin-top:1rem;"><strong>hay que + Infinitivo:</strong> Unpersönliche Verpflichtung — „man muss"</p>
                ${ej('Hay que estudiar mucho para el examen.', 'Man muss viel für die Prüfung lernen.', 'hay que = unpersönliche Verpflichtung')}
              `,
            },
          ])}
        </div>

        <!-- Häufige Fehler -->
        <div class="reveal" style="margin-top:2rem;">
          ${renderInfobox({ type: 'warning', icon: 'fas fa-exclamation-triangle', title: 'Häufige Fehler — Relativsätze & Satzbau',
            body: `<strong>① cuyo mit falschem Genus:</strong>
                   <em>Falsch: *el autor cuyo novela (novela ist feminin!)</em> → Korrekt: <em>el autor cuya novela.</em><br>
                   <strong>② quien für Sachen:</strong>
                   <em>Falsch: *el libro quien leí</em> → Korrekt: <em>el libro que leí.</em><br>
                   <strong>③ Modus im Relativsatz:</strong>
                   <em>Busco alguien que sabe… (Indik., falsch bei Unbekanntem)</em> → <em>Busco alguien que sepa.</em><br>
                   <strong>④ a personal vergessen:</strong>
                   <em>Falsch: *Veo mi madre todos los días.</em> → Korrekt: <em>Veo a mi madre.</em>` })}
        </div>

        <!-- Abschluss-Übersicht -->
        <div class="reveal" style="margin-top:2.5rem;">
          ${renderMerkboxGrid([
            {
              icon: 'fas fa-spell-check',
              title: 'Relativpronomen — Schnellwahl',
              text: `<strong>que</strong>: immer (Personen + Sachen, kein Genus)<br>
                     <strong>quien/quienes</strong>: nur Personen, nach Präp.<br>
                     <strong>cuyo/a</strong>: Possessiv (dessen/deren), Genus nach folgendem Nomen<br>
                     <strong>donde/cuando/como</strong>: Ort/Zeit/Art`,
            },
            {
              icon: 'fas fa-toggle-on',
              title: 'Modus im Relativsatz',
              text: `<strong>Indikativo</strong>: Bezugswort ist bekannt, existiert<br>
                     <strong>Subjuntivo</strong>: Bezugswort unbekannt, gesucht, verneinend<br>
                     <em>Tengo un amigo que sabe → Busco un amigo que sepa</em>`,
            },
            {
              icon: 'fas fa-sort-alpha-down',
              title: 'Satzbau — Kernregeln',
              text: `• Pro-drop: Subjekt optional<br>
                     • Doppelnegation bei Negativwort nach Verb: <em>no … nada/nadie/nunca</em><br>
                     • a personal vor Personen als direktes Objekt<br>
                     • Spaltsatz: <em>fue X quien/el que…</em> für Betonung`,
            },
          ])}
        </div>

      </div>
    </section>

    <section class="lz-content-section" style="padding:1.5rem 0 3rem;">
      <div class="lz-section-wrap">
        ${renderPageNav({
          prev: { label: '1.7 Imperativo', link: `${BASE}/themen/grammatik/imperativo` },
          next: { label: '2.1 Grundwortschatz', link: `${BASE}/themen/wortschatz/grundwortschatz`  },
        }, BASE)}
      </div>
    </section>
    ${footerHTML(this.router)}
  `; }

  init() { i18n.init(); initScrollReveal(); initInteractive(document); }
}