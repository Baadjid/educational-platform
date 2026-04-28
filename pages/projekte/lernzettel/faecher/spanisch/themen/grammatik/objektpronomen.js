// pages/projekte/lernzettel/faecher/spanisch/themen/grammatik/objektpronomen.js
// 1.5 — Pronombres de objeto directo e indirecto

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

export default class Spanisch_Objektpronomen {
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
          <i class="fas fa-chevron-right"></i><span>1.5 Objektpronomen</span>
        </div>
        <h1 class="lz-sub-title">Pronombres —<br><em>Objektpronomen</em></h1>
        <p class="lz-sub-desc">
          Direkte & indirekte Objektpronomen · Stellung · Kombination
          (le/les→se) · Mit Infinitiv, Gerundio &amp; Imperativ · Reflexivpronomen
        </p>
        ${renderTags(['1.5', 'Objektpronomen', 'Pronombres', 'Grammatik', 'Abitur 2026'])}
      </div>
    </section>

    <section class="lz-content-section">
      <div class="lz-section-wrap">

        <!-- Übersichtstabelle -->
        ${renderSubhead('Überblick')}
        <h2 class="lz-h2 reveal">Alle Objektpronomen im Überblick</h2>

        ${renderTable({
          headers: ['Person', 'Direktes Obj. (Akk.)', 'Bedeutung', 'Indirektes Obj. (Dat.)', 'Bedeutung', 'Reflexiv'],
          rows: [
            ['yo',          'me',     'mich',     'me',  'mir',        'me'],
            ['tú',          'te',     'dich',     'te',  'dir',        'te'],
            ['él/ella/ud.', 'lo / la','ihn/sie/es','le', 'ihm/ihr',    'se'],
            ['nosotros',    'nos',    'uns',       'nos', 'uns',        'nos'],
            ['vosotros',    'os',     'euch',      'os',  'euch',       'os'],
            ['ellos/uds.',  'los/las','sie',        'les', 'ihnen',      'se'],
          ],
        })}

        ${renderInfobox({ type: '', icon: 'fas fa-info-circle', title: 'lo vs. la vs. le — Unterschied',
          body: `<strong>lo</strong> = direktes Objekt maskulin/neutrum: <em>¿El libro? Lo tengo.</em><br>
                 <strong>la</strong> = direktes Objekt feminin: <em>¿La carta? La escribí.</em><br>
                 <strong>le</strong> = indirektes Objekt (m. oder f.): <em>Le dije la verdad. (ihr/ihm)</em><br>
                 <strong>Leísmo:</strong> In Spanien (Kastilien) wird <em>le</em> auch als direktes Obj. für Personen (maskulin) verwendet: <em>Le vi ayer.</em> (= Lo vi.) — beide korrekt in Spanien.` })}

        <!-- Stellung -->
        <div class="reveal" style="margin-top:2.5rem;">
          ${renderSubhead('Stellung der Pronomen')}
          <h2 class="lz-h2">Wo steht das Pronomen?</h2>

          ${renderTable({
            headers: ['Situation', 'Position', 'Beispiel'],
            rows: [
              ['Konjugiertes Verb (normal)',           'VOR dem Verb',       'Lo veo. / Me llama.'],
              ['Verneinung',                           'nach no, VOR dem Verb', 'No lo veo. / No me llama.'],
              ['Infinitiv (modal + inf.)',             'ANGEHÄNGT oder davor', 'Voy a verlo. = Lo voy a ver.'],
              ['Gerundio (estar + gerundio)',          'ANGEHÄNGT oder davor', 'Estoy viéndolo. = Lo estoy viendo.'],
              ['Bejahter Imperativ',                  'ANGEHÄNGT (Pflicht)',   '¡Dámelo! / ¡Escríbela!'],
              ['Verneinender Imperativ',              'VOR dem Verb (Pflicht)','¡No me lo des! / ¡No la escribas!'],
              ['Infinitiv alleine (keine Hilfsverben)','ANGEHÄNGT',            'Quiero verla. = La quiero ver. ✓'],
            ],
            highlight: [4, 5],
          })}

          ${ej('¿Puedes explicarme esto? = ¿Me puedes explicar esto?', 'Kannst du mir das erklären?', 'Beide Stellungen korrekt bei Modal + Infinitiv')}
          ${ej('Estoy escribiéndole una carta. = Le estoy escribiendo una carta.', 'Ich schreibe ihm/ihr gerade einen Brief.', 'Beide Stellungen korrekt bei Verlaufsform')}
        </div>

        <!-- Kombination -->
        <div class="reveal" style="margin-top:2.5rem;">
          ${renderSubhead('Kombination')}
          <h2 class="lz-h2">Direktes + Indirektes Pronomen kombinieren</h2>
          <p class="lz-prose"><strong>Reihenfolge:</strong> Immer Indirektes vor Direktem: <strong>IO + DO + Verb</strong></p>
          <p class="lz-prose"><strong>Kritische Regel:</strong> Wenn IO (le/les) auf DO (lo/la/los/las) trifft, wird le/les zu <strong>se</strong>!</p>

          ${renderTable({
            headers: ['Situation', 'Formel', 'Beispiel'],
            rows: [
              ['IO + DO (mit se-Wechsel)', 'se + lo/la/los/las',  'Le doy el libro → Se lo doy.'],
              ['IO + DO',                  'me/te/nos/os + lo/la', 'Me lo explica. / Te la mando.'],
            ],
          })}

          ${renderTable({
            headers: ['le / les + Mask.', 'le / les + Fem.'],
            rows: [
              ['le + lo → se lo',   'le + la → se la'],
              ['le + los → se los', 'le + las → se las'],
              ['les + lo → se lo',  'les + la → se la'],
              ['les + los → se los','les + las → se las'],
            ],
          })}

          ${ej('¿Le mandas el correo a tu jefe? — Sí, se lo mando ahora mismo.', 'Schickst du deinem Chef die E-Mail? — Ja, ich schicke sie ihm sofort.', 'le (Chef) + lo (correo) → se lo')}
          ${ej('¿Me puedes dar las llaves? — Sí, te las doy.', 'Kannst du mir die Schlüssel geben? — Ja, ich gebe sie dir.', 'te (dir) + las (llaves) → te las')}
          ${ej('¿Nos van a explicar las reglas? — Sí, os las van a explicar mañana.', 'Werden sie uns die Regeln erklären? — Ja, sie werden sie euch morgen erklären.', 'os + las → os las')}
        </div>

        <!-- Imperativ mit Pronomen -->
        <div class="reveal" style="margin-top:2.5rem;">
          ${renderSubhead('Imperativ')}
          <h2 class="lz-h2">Imperativ mit Objektpronomen</h2>
          <p class="lz-prose"><strong>Bejahter Imperativ:</strong> Pronomen werden angehängt. Bei 3+ Silben ist ein Akzent nötig, um die ursprüngliche Betonung zu erhalten.</p>

          ${renderTable({
            headers: ['Imperativ', '+ Pronomen', 'Akzent nötig?', 'Bedeutung'],
            rows: [
              ['da (dar, tú)',    'dámelo',    'Ja: dá-me-lo',   'Gib es mir!'],
              ['dí (decir, tú)', 'dímelo',    'Ja: dí-me-lo',   'Sag es mir!'],
              ['escribe (tú)',   'escríbela', 'Ja: es-crí-be-la','Schreib sie!'],
              ['dad (vosotros)', 'dadnos',    'Nein: 2 Silben', 'Gebt es uns!'],
              ['come (tú)',      'cómetelo',  'Ja: có-me-te-lo', 'Iss es auf!'],
            ],
          })}

          <p class="lz-prose" style="margin-top:1rem;"><strong>Verneinender Imperativ:</strong> Pronomen stehen VOR dem Verb — niemals angehängt.</p>
          ${ej('¡Dámelo! → ¡No me lo des!', 'Gib es mir! → Gib es mir nicht!', 'Positiv: angehängt · Negativ: davor')}
          ${ej('¡Díselo a ella! → ¡No se lo digas a ella!', 'Sag es ihr! → Sag es ihr nicht!', 'se lo → bleibt se lo auch im Negativimperativ')}
        </div>

        <!-- Reflexivpronomen -->
        <div class="reveal" style="margin-top:2.5rem;">
          ${renderSubhead('Reflexivpronomen')}
          <h2 class="lz-h2">Reflexive Verben & Pronomen</h2>
          <p class="lz-prose">Reflexivpronomen stehen immer vor konjugierten Verben, werden bei Infinitiv und Gerundio angehängt (oder davor gestellt), und beim bejahten Imperativ angehängt.</p>

          ${renderTable({
            headers: ['Person', 'Pronomen', 'Beispiel (levantarse)', 'Bedeutung'],
            rows: [
              ['yo',          'me', 'me levanto',    'ich stehe auf'],
              ['tú',          'te', 'te levantas',   'du stehst auf'],
              ['él/ella/ud.', 'se', 'se levanta',    'er/sie steht auf'],
              ['nosotros',    'nos','nos levantamos', 'wir stehen auf'],
              ['vosotros',    'os', 'os levantáis',  'ihr steht auf'],
              ['ellos/uds.',  'se', 'se levantan',   'sie stehen auf'],
            ],
          })}

          ${renderInfobox({ type: 'blue', icon: 'fas fa-list', title: 'Häufige reflexive Verben (Abitur)',
            body: `levantarse · acostarse · despertarse · ducharse · vestirse · llamarse · sentarse · 
                   quedarse · irse · encontrarse · sentirse · ponerse (+ Adjektiv = werden) · 
                   volverse (+ Adjektiv = werden) · hacerse · llegar a ser · darse cuenta de · 
                   acordarse de · olvidarse de · alegrarse de · preocuparse por` })}
        </div>

        <!-- Häufige Fehler -->
        <div class="reveal" style="margin-top:2rem;">
          ${renderInfobox({ type: 'warning', icon: 'fas fa-exclamation-triangle', title: 'Häufige Fehler — Objektpronomen',
            body: `<strong>① le + lo nicht zu se lo umwandeln:</strong>
                   <em>Falsch: *Le lo doy.</em> → Korrekt: <em>Se lo doy.</em><br>
                   <strong>② Reihenfolge IO–DO vertauschen:</strong>
                   <em>Falsch: *Lo me da.</em> → Korrekt: <em>Me lo da.</em><br>
                   <strong>③ Pronomen nach no beim Imperativ anhängen:</strong>
                   <em>Falsch: *No dámelo.</em> → Korrekt: <em>No me lo des.</em><br>
                   <strong>④ Kein Akzent bei angehängten Pronomen:</strong>
                   <em>Falsch: *Damelo.</em> → Korrekt: <em>Dámelo.</em>` })}
        </div>

      </div>
    </section>

    <section class="lz-content-section" style="padding:1.5rem 0 3rem;">
      <div class="lz-section-wrap">
        ${renderPageNav({
          prev: { label: '1.4 Indirekte Rede', link: `${BASE}/themen/grammatik/indirekte-rede` },
          next: { label: '1.6 Si-Sätze',       link: `${BASE}/themen/grammatik/si-saetze`      },
        }, BASE)}
      </div>
    </section>
    ${footerHTML(this.router)}
  `; }

  init() { i18n.init(); initScrollReveal(); initInteractive(document); }
}