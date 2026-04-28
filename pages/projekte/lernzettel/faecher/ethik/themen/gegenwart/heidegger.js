// pages/projekte/lernzettel/faecher/ethik/themen/gegenwart/heidegger.js
// Kapitel 10.2 — Martin Heidegger (1889–1976)
// Sein und Zeit, Dasein, Sorge, Eigentlichkeit, Kehre

import { initScrollReveal, refreshScrollReveal } from '../../../../../../../shared/js/scroll.js';
import { footerHTML } from '../../../../../../../components/Footer.js';
import { i18n } from '../../../../../../../shared/js/i18n.js';
import { ensureComponentsCSS, renderSubhead, renderTags, renderInfobox, renderTable, renderAccordion, renderMerkboxGrid, renderVTimeline, renderCompare, renderFormulaBox, renderTabs, initInteractive, loadComponentCSS } from '../../../../js/components/components.js';
import { renderPageNav } from '../../../../js/components/subnav.js';
import { COLOR, COLOR_RGB, BASE } from '../../philosophie.js';
const KAP_COLOR = '#7e22ce'; const KAP_COLOR_RGB = '126, 34, 206';

export default class HeideggerPage {
  constructor(router) { this.router = router; }
  render() { ensureComponentsCSS(); loadComponentCSS('pages/projekte/lernzettel/styles/sub.css'); const el = document.createElement('div'); el.className = 'page page-heidegger'; el.style.setProperty('--lz-accent', COLOR); el.style.setProperty('--lz-accent-rgb', COLOR_RGB); el.style.setProperty('--kap-color', KAP_COLOR); el.style.setProperty('--kap-color-rgb', KAP_COLOR_RGB); el.innerHTML = this._html(); return el; }
  _html() {
    return `
    <section class="lz-sub-hero"><div class="lz-sub-hero-orb"></div><div class="lz-sub-hero-inner reveal">
      <nav class="lz-sub-breadcrumb"><button class="lz-bread-link" data-link="/projekte/lernzettel">Lernzettel</button><i class="fas fa-chevron-right"></i><button class="lz-bread-link" data-link="${BASE}">Philosophie</button><i class="fas fa-chevron-right"></i><span>Heidegger</span></nav>
      <h1 class="lz-sub-title"><em>Heidegger</em> — Sein und Zeit</h1>
      <p class="lz-sub-desc">Der umstrittenste Philosoph des 20. Jahrhunderts: Heidegger stellte die „Seinsfrage" — die Frage nach dem Sinn von Sein — ins Zentrum und analysierte die menschliche Existenz als „Dasein" — ein Wesen, dem es in seinem Sein um dieses Sein selbst geht.</p>
      ${renderTags(['Kapitel 10.2','1889–1976','Meßkirch · Freiburg · Todtnauberg','Dasein · Sorge · Man · Eigentlichkeit · Kehre','Abitur 2026'])}
    </div></section>

    <section class="lz-content-section"><div class="lz-section-wrap">
      ${renderSubhead('Biographisches')}
      <h2 class="lz-h2 reveal">Genie und <em>Schuld</em></h2>
      <p class="lz-prose reveal">Martin Heidegger (1889–1976) wuchs in <strong>Meßkirch</strong> (Schwarzwald) als Sohn eines Mesners auf. Er studierte Theologie und Philosophie in Freiburg, wurde Assistent <strong>Husserls</strong>, und veröffentlichte 1927 <em>Sein und Zeit</em> — eines der einflussreichsten philosophischen Werke des 20. Jahrhunderts. 1933 trat er der NSDAP bei und hielt als Rektor der Universität Freiburg eine berüchtigte „Rektoratsrede". Er wurde nie entnazifiziert im vollen Sinn — und äußerte sich nie klar zu seiner Verstrickung.</p>
      ${renderVTimeline([
        { year:'1889', title:'Geburt in Meßkirch', text:'Schwarzwald; katholisches Milieu; Mesnerssohn' },
        { year:'1927', title:'Sein und Zeit', text:'Hauptwerk; dem Lehrer Husserl gewidmet — den er später verriet' },
        { year:'1933', title:'Rektor in Freiburg / NSDAP-Beitritt', text:'Rektoratsrede: „Die Selbstbehauptung der deutschen Universität"; Verstrickung in den Nationalsozialismus' },
        { year:'1934', title:'Rücktritt als Rektor', text:'Enttäuschung über die Realität des NS-Regimes; aber kein öffentlicher Widerruf' },
        { year:'1946', title:'Lehrverbot', text:'Von der französischen Besatzung mit Lehrverbot belegt; aufgehoben 1951' },
        { year:'1947', title:'Brief über den „Humanismus"', text:'Antwort auf Sartre: Heidegger distanziert sich vom Existenzialismus' },
        { year:'1976', title:'Tod in Freiburg', text:'Bestattet in Meßkirch; Nachlass in den Gesamtausgaben (über 100 Bände)' },
      ])}
      ${renderInfobox({ type:'warning', icon:'fas fa-exclamation-triangle', title:'Heidegger und der Nationalsozialismus',
        body:'Heideggers NSDAP-Mitgliedschaft (1933–45) und seine Rektoratsrede sind nicht zu beschönigen. Er sprach von der „inneren Wahrheit und Größe" des Nationalsozialismus (1935/53) und denunzierte jüdische Kollegen. Die posthum veröffentlichten „Schwarzen Hefte" (2014) enthalten antisemitische Passagen. Die Debatte: Kann man Heideggers Philosophie VON seiner Politik trennen? Die Meinungen gehen radikal auseinander.' })}
    </div></section>

    <section class="lz-content-section"><div class="lz-section-wrap">
      ${renderSubhead('Sein und Zeit (1927) — Die Seinsfrage')}
      <h2 class="lz-h2 reveal">Was heißt es, <em>zu sein</em>?</h2>
      <p class="lz-prose reveal">Die Grundfrage: „Was ist der SINN von Sein?" Nicht: Was gibt es? (Seiende), sondern: Was BEDEUTET es, dass etwas ist? Die gesamte Philosophiegeschichte hat diese Frage vergessen — sie hat immer nur nach dem SEIENDEN gefragt (Gott, Materie, Ideen), nie nach dem SEIN selbst.</p>
      ${renderMerkboxGrid([
        { icon:'fas fa-user', title:'Dasein — Das Wesen, dem es um sein Sein geht',
          text:'Der Mensch ist kein Ding unter Dingen — er ist DASEIN: das Wesen, dem es in seinem Sein um dieses Sein selbst geht. Der Stein existiert, aber er „kümmert" sich nicht um seine Existenz. Der Mensch dagegen VERHÄLT sich zu seinem Sein: Er plant, sorgt sich, hofft, ängstigt sich — sein Sein ist ihm nicht gleichgültig.' },
        { icon:'fas fa-globe', title:'In-der-Welt-sein',
          text:'Das Dasein ist immer schon IN einer Welt — nicht als Subjekt „in" einem Behälter, sondern als vertraut-Sein mit einer bedeutungsvollen Umgebung. Die Welt ist kein Gegenstand der Betrachtung (Descartes: res extensa), sondern ein VERWEISUNGSZUSAMMENHANG: Der Hammer verweist auf den Nagel, der Nagel auf das Brett, das Brett auf das Haus, das Haus auf das Wohnen.' },
        { icon:'fas fa-tools', title:'Zuhandenheit vs. Vorhandenheit',
          text:'Im Alltag begegnen uns Dinge als ZUHANDEN (Werkzeuge: Hammer, Bleistift, Computer) — wir BENUTZEN sie, ohne sie zu betrachten. Erst wenn etwas KAPUTTGEHT, wird es zum VORHANDENEN Gegenstand — wir starren es an und fragen: Was IST das? Die Wissenschaft betrachtet alles als vorhanden — die Alltagserfahrung kennt das Zuhandene.' },
        { icon:'fas fa-users', title:'Das Man (das „Man")',
          text:'Im Alltag existiert das Dasein nicht als EIGENES Selbst, sondern als „Man": „Man sagt", „man tut", „man denkt". Das Man ist die Herrschaft der Öffentlichkeit — Durchschnittlichkeit, Angepasstheit, Konformismus. Das Man ist nicht „böse" — es ist die NORMALE Existenzweise. Aber es verdeckt die Eigentlichkeit.' },
        { icon:'fas fa-heart', title:'Sorge (Cura) — Die Grundstruktur des Daseins',
          text:'Die SORGE ist die Grundstruktur des Daseins: Sich-vorweg-sein (Zukunft: Entwurf, Möglichkeit) — schon-sein-in (Vergangenheit: Geworfenheit, Faktizität) — sein-bei (Gegenwart: Besorgen, Umgehen mit Dingen). Das Dasein ist immer schon in eine Situation GEWORFEN, entwirft sich auf Möglichkeiten und geht mit den Dingen um. Sorge = Zeitlichkeit.' },
      ])}
    </div></section>

    <section class="lz-content-section"><div class="lz-section-wrap">
      ${renderSubhead('Eigentlichkeit, Angst und Tod')}
      <h2 class="lz-h2 reveal">Sein-zum-<em>Tode</em></h2>
      ${renderMerkboxGrid([
        { icon:'fas fa-wind', title:'Angst (vs. Furcht)',
          text:'Wie Kierkegaard unterscheidet Heidegger: FURCHT richtet sich auf ein bestimmtes Seiendes (den Hund, die Prüfung). ANGST richtet sich auf NICHTS — auf das In-der-Welt-sein als Ganzes. In der Angst bricht die Vertrautheit der Alltagswelt zusammen — alles wird unheimlich (un-heimlich = nicht-zu-Hause). Die Angst vereinzelt: Sie reißt das Dasein aus dem Man und stellt es vor sich selbst.' },
        { icon:'fas fa-skull', title:'Sein-zum-Tode',
          text:'Der Tod ist die EIGENSTE, UNBEZÜGLICHE, UNÜBERHOLBARE Möglichkeit des Daseins: (1) Eigenste: Niemand kann FÜR mich sterben. (2) Unbezüglich: Der Tod trennt mich von allen Bezügen. (3) Unüberholbar: Er ist die letzte Möglichkeit — nach ihm keine mehr. Das Man verdeckt den Tod: „Man stirbt" — aber nicht ICH, jetzt. Eigentliches Sein-zum-Tode = den Tod als EIGENE Möglichkeit annehmen, nicht verdrängen.' },
        { icon:'fas fa-check-circle', title:'Eigentlichkeit (Authentizität)',
          text:'Eigentlich existiert das Dasein, wenn es sich aus dem Man HERAUSREISST und seine eigenen Möglichkeiten WÄHLT — im vollen Bewusstsein seiner Endlichkeit (Sein-zum-Tode) und seiner Geworfenheit (Faktizität). Eigentlichkeit ist keine BESSERE Existenzweise — sie ist die BEWUSSTE, die weiß, dass sie endlich, geworfen und verantwortlich ist.' },
      ])}
      ${renderFormulaBox({ label:'Heidegger, Sein und Zeit §50 (1927)', formula:'„Der Tod ist die eigenste, unbezügliche,<br>gewisse und als solche unbestimmte,<br>unüberholbare Möglichkeit des Daseins."', desc:'Der Tod ist nicht das Ende des Lebens (biologisch), sondern die GRUNDSTRUKTUR der Existenz: Weil ich sterben werde, ist mein Leben endlich, einmalig, dringend — und meine Entscheidungen haben Gewicht.' })}
    </div></section>

    <section class="lz-content-section"><div class="lz-section-wrap">
      ${renderSubhead('Testfragen — Abiturniveau')}
      ${renderAccordion([
        { title:'1. Erklären Sie Heideggers Unterscheidung von „Eigentlichkeit" und „Uneigentlichkeit" (Man).',
          content:'<p class="lz-prose"><strong>Uneigentlichkeit (das Man):</strong> Im Alltag existiert das Dasein nicht als eigenes Selbst, sondern als „Man": „Man sagt", „man tut", „man denkt". Das Man ist die Herrschaft der Öffentlichkeit — Durchschnittlichkeit, Angepasstheit, Konformismus. Entscheidungen werden nicht SELBST getroffen, sondern vom Man übernommen. Beispiel: Man studiert, weil „man" das tut; man heiratet, weil „man" das eben so macht.<br><br><strong>Eigentlichkeit:</strong> Das Dasein reißt sich aus dem Man heraus und wählt seine eigenen Möglichkeiten — im Bewusstsein seiner Endlichkeit (Sein-zum-Tode) und seiner Geworfenheit (ich habe meine Situation nicht gewählt). Eigentlichkeit heißt nicht Egoismus — es heißt, die eigene Existenz BEWUSST und VERANTWORTLICH zu leben, statt sich treiben zu lassen.<br><br><strong>Wichtig:</strong> Eigentlichkeit und Uneigentlichkeit sind KEINE moralischen Kategorien (gut/böse). Das Man ist die NORMALE Existenzweise — niemand lebt immer eigentlich. Eigentlichkeit ist ein Moment der Klarheit, in dem das Dasein sich SELBST wählt — oft ausgelöst durch Angst, Grenzsituationen, die Konfrontation mit dem Tod.</p>' },
        { title:'2. Was ist „Sein-zum-Tode" und warum ist der Tod für Heidegger philosophisch zentral?',
          content:'<p class="lz-prose"><strong>Sein-zum-Tode:</strong> Der Tod ist nicht ein Ereignis am ENDE des Lebens, sondern eine Grundstruktur, die das GESAMTE Leben durchdringt. Das Dasein IST immer schon Sein-zum-Tode — es existiert AUF den Tod hin. Der Tod hat drei Merkmale: (1) EIGENSTE Möglichkeit: Niemand kann für mich sterben. (2) UNBEZÜGLICH: Der Tod trennt mich von allen Beziehungen. (3) UNÜBERHOLBAR: Nach dem Tod keine weitere Möglichkeit.<br><br><strong>Warum zentral?</strong> (1) <strong>Individuation:</strong> Der Tod vereinzelt — er reißt mich aus dem Man heraus und stellt mich vor MICH SELBST. (2) <strong>Endlichkeit:</strong> Weil mein Leben ENDLICH ist, haben meine Entscheidungen GEWICHT — wenn ich ewig lebte, könnte ich alles aufschieben. (3) <strong>Ganzheit:</strong> Erst der Tod macht das Dasein „ganz" — ohne den Tod wäre das Leben ein endloser, formloser Strom. (4) <strong>Eigentlichkeit:</strong> Wer seinen Tod ANNIMMT (nicht verdrängt), lebt eigentlich — er weiß, dass seine Zeit begrenzt ist und nutzt sie bewusst.<br><br><strong>Vergleich mit Epikur:</strong> Epikur: „Der Tod geht uns nichts an — solange wir sind, ist er nicht da." Heidegger: Im Gegenteil — der Tod geht uns ALLES an, denn er strukturiert unser gesamtes Leben. Nicht der Moment des Sterbens, sondern das LEBEN-AUF-DEN-TOD-HIN ist philosophisch relevant.</p>' },
        { title:'3. Vergleichen Sie Heideggers und Sartres Existenzphilosophie.',
          content:'<p class="lz-prose"><strong>Gemeinsamkeiten:</strong> (1) Existenz geht der Essenz voraus — der Mensch ist nicht durch eine feste Natur definiert. (2) Freiheit und Verantwortung als Grundmerkmale der Existenz. (3) Angst als Grundstimmung. (4) Kritik am Man/am „Geist der Ernsthaftigkeit" (Sartre: mauvaise foi = Selbsttäuschung ≈ Heideggers Man).<br><br><strong>Unterschiede:</strong> (1) <strong>Seinsfrage:</strong> Heidegger fragt nach dem SEIN (ontologisch); Sartre fragt nach der FREIHEIT (anthropologisch). (2) <strong>Subjekt:</strong> Heidegger: Das Dasein ist KEIN Subjekt (keine res cogitans) — es ist In-der-Welt-sein. Sartre: Das Bewusstsein (pour-soi) ist ein Subjekt — aber eines, das „nichts" ist. (3) <strong>Humanismus:</strong> Sartre: „Der Existenzialismus ist ein Humanismus" (1946). Heidegger: Humanismus setzt den Menschen ins Zentrum — aber die Frage des Seins ist WEITER als der Mensch. (4) <strong>Engagement:</strong> Sartre: Der Intellektuelle MUSS sich politisch engagieren (engagement). Heidegger: Der Denker soll „warten" und „hören" — Gelassenheit statt Aktivismus.</p>' },
        { title:'4. Diskutieren Sie: Lässt sich Heideggers Philosophie von seiner NS-Verstrickung trennen?',
          content:'<p class="lz-prose"><strong>Position 1 — Trennbar (Gadamer, Derrida teilweise):</strong> Die philosophischen Analysen (Dasein, Sorge, Sein-zum-Tode, Zuhandenheit) sind universale Strukturen der menschlichen Existenz — sie gelten unabhängig davon, ob ihr Autor ein Nazi war. Genialer Denker, schlechter Mensch — beides ist möglich. Auch Wagners Musik wird trotz seinem Antisemitismus aufgeführt.<br><br><strong>Position 2 — Untrennbar (Farias, Faye, manche jüdische Denker):</strong> Heideggers Terminologie (Entschlossenheit, Eigentlichkeit, Geschick, Volk) hat politische Implikationen. Die Rektoratsrede VERWENDET Begriffe aus Sein und Zeit in NS-Kontext. Die „Schwarzen Hefte" zeigen: Heidegger dachte den Nationalsozialismus ALS Antwort auf die Seinsfrage — nicht als politischen Irrweg, sondern als philosophisches Projekt.<br><br><strong>Vermittlung:</strong> Die philosophischen Analysen KÖNNEN unabhängig von der Biographie gelesen werden — viele der brillantesten Heidegger-Interpreten (Hannah Arendt, Hans-Georg Gadamer, Jacques Derrida) waren Juden oder NS-Gegner. Aber: Man MUSS das politische Problem mitbedenken — die Frage, ob bestimmte Denkfiguren (Eigentlichkeit, Entschlossenheit, Geschick des Volkes) zur politischen Verführung disponieren, ist philosophisch ernst zu nehmen.</p>' },
      ])}
    </div></section>

    <section class="lz-content-section" style="padding-top:0;"><div class="lz-section-wrap">
      ${renderPageNav({
        prev:{ label:'Wittgenstein', link:`${BASE}/themen/gegenwart/wittgenstein` },
        next:{ label:'Adorno', link:`${BASE}/themen/gegenwart/adorno` },
      }, BASE)}
    </div></section>
    ${footerHTML(this.router)}
    `;
  }
  init() { i18n.init(); initScrollReveal(); refreshScrollReveal(); initInteractive(document); }
  cleanup() {}
}