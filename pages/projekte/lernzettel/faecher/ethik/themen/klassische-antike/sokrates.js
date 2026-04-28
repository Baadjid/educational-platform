// pages/projekte/lernzettel/faecher/ethik/themen/sokrates.js
// ══════════════════════════════════════════════════════════════════
// Kapitel 2.1 — Sokrates (469–399 v. Chr.)
// Biographie, Sorge um die Seele, Was-ist-Fragen, Sokratisches Gespräch
// ══════════════════════════════════════════════════════════════════

import { initScrollReveal, refreshScrollReveal } from '../../../../../../../shared/js/scroll.js';
import { footerHTML }          from '../../../../../../../components/Footer.js';
import { i18n }                from '../../../../../../../shared/js/i18n.js';
import { initWimTabs }         from '../../../../../../../shared/js/wim-tabs.js';
import {
  ensureComponentsCSS,
  renderSubhead,
  renderTags,
  renderInfobox,
  renderTable,
  renderAccordion,
  renderMerkboxGrid,
  renderVTimeline,
  renderCompare,
  renderFormulaBox,
  renderTabs,
  initInteractive,
  loadComponentCSS,
} from '../../../../js/components/components.js';
import { renderPageNav } from '../../../../js/components/subnav.js';
import { COLOR, COLOR_RGB, BASE } from '../../philosophie.js';

const KAP_COLOR     = '#c9a87c';
const KAP_COLOR_RGB = '201, 168, 124';

const METHODE_TABS = [
  { key: 'elenchos', label: 'Élenchos (Prüfung)' },
  { key: 'maeutik',  label: 'Mäeutik (Hebammenkunst)' },
  { key: 'nichtwissen', label: 'Sokratisches Nichtwissen' },
];

export default class SokratesPage {
  constructor(router) { this.router = router; }

  render() {
    ensureComponentsCSS();
    loadComponentCSS('pages/projekte/lernzettel/styles/sub.css');
    const el = document.createElement('div');
    el.className = 'page page-sokrates';
    el.style.setProperty('--lz-accent',     COLOR);
    el.style.setProperty('--lz-accent-rgb', COLOR_RGB);
    el.style.setProperty('--kap-color',     KAP_COLOR);
    el.style.setProperty('--kap-color-rgb', KAP_COLOR_RGB);
    el.innerHTML = this._html();
    return el;
  }

  _html() {
    return `
    <section class="lz-sub-hero">
      <div class="lz-sub-hero-orb"></div>
      <div class="lz-sub-hero-inner reveal">
        <nav class="lz-sub-breadcrumb">
          <button class="lz-bread-link" data-link="/projekte/lernzettel">Lernzettel</button>
          <i class="fas fa-chevron-right"></i>
          <button class="lz-bread-link" data-link="${BASE}">Philosophie</button>
          <i class="fas fa-chevron-right"></i>
          <span>Sokrates</span>
        </nav>
        <h1 class="lz-sub-title"><em>Sokrates</em> — Die Geburt der Ethik</h1>
        <p class="lz-sub-desc">
          Sokrates schrieb nichts — und veränderte alles. Mit seinen bohrenden Fragen
          auf den Straßen Athens vollzog er die Wende der Philosophie: weg von der Natur,
          hin zum Menschen, seinem Wissen, seiner Tugend und seiner Seele.
        </p>
        ${renderTags(['Kapitel 2.1', '469–399 v. Chr.', 'Athen', 'Mäeutik · Tugendwissen · Aporie', 'Abitur 2026'])}
      </div>
    </section>

    <section class="lz-content-section">
      <div class="lz-section-wrap">
        ${renderSubhead('Biographisches')}
        <h2 class="lz-h2 reveal">Ein Leben im <em>Dienst der Wahrheit</em></h2>
        <p class="lz-prose reveal">
          Sokrates wurde 469 v.&nbsp;Chr. in Athen geboren. Sein Vater Sophroniskos
          war Steinmetz, seine Mutter Phainarete Hebamme — ein Detail, das Sokrates
          selbst zum Gleichnis machte: Wie seine Mutter den Frauen bei der Geburt
          half, so helfe er den Menschen, ihre Gedanken zur Welt zu bringen
          (<strong>Mäeutik</strong> = Hebammenkunst). Er diente als Hoplit (Schwerbewaffneter)
          in den Schlachten von Potidaia, Delion und Amphipolis und zeigte dabei
          bemerkenswerte Tapferkeit und Ausdauer.
        </p>
        <p class="lz-prose reveal">
          Sein Äußeres war ungewöhnlich: Ein plattes Gesicht, eine Stumpfnase,
          hervorstehende Augen — er glich einem <strong>Silen</strong> (einem
          hässlichen Waldgeist). Alkibiades verglich ihn im <em>Symposion</em> mit
          einer hölzernen Silensstatue, die außen hässlich, aber innen voller
          goldener Götterbilder sei. Sokrates lebte in freiwilliger Armut, ging
          barfuß und trug Sommer wie Winter denselben Mantel.
        </p>
        ${renderVTimeline([
          { year: '469 v. Chr.', title: 'Geburt in Athen', text: 'Sohn des Steinmetzen Sophroniskos und der Hebamme Phainarete' },
          { year: 'ca. 450–430', title: 'Philosophische Anfänge', text: 'Studium der Naturphilosophie (Anaxagoras, Archelaos); Enttäuschung und Wende zur Ethik' },
          { year: '432–422', title: 'Militärdienst', text: 'Teilnahme an den Schlachten von Potidaia, Delion und Amphipolis' },
          { year: 'ca. 430', title: 'Das Orakel von Delphi', text: 'Auf die Frage des Chairephon antwortet die Pythia: „Niemand ist weiser als Sokrates"' },
          { year: '399 v. Chr.', title: 'Prozess und Tod', text: 'Anklage wegen Gottlosigkeit und Jugendverführung; Todesurteil; Sokrates trinkt den Schierlingsbecher' },
        ])}
        ${renderInfobox({
          type: '', icon: 'fas fa-info-circle',
          title: 'Das „Sokratische Problem"',
          body: 'Sokrates hinterließ <strong>keine Schriften</strong>. Alles, was wir über ihn wissen, stammt aus den Darstellungen anderer: <strong>Platon</strong> (Dialoge — philosophisch stilisiert), <strong>Xenophon</strong> (Memorabilien — praktisch-moralisch), <strong>Aristophanes</strong> (Die Wolken — komödiantische Karikatur), <strong>Aristoteles</strong> (knappe systematische Bemerkungen). Das Problem: Wo endet der historische Sokrates und wo beginnt Platons eigene Philosophie? Die Forschung nimmt an, dass die <strong>frühen Dialoge</strong> Platons (Apologie, Kriton, Euthyphron, Laches) den historischen Sokrates am treuesten wiedergeben.'
        })}
      </div>
    </section>

    <section class="lz-content-section">
      <div class="lz-section-wrap">
        ${renderSubhead('Die sokratische Wende')}
        <h2 class="lz-h2 reveal">Von der Natur zur <em>Seele</em></h2>
        <p class="lz-prose reveal">
          In Platons <em>Phaidon</em> (96a–99d) schildert Sokrates seine
          <strong>philosophische Autobiographie</strong>: In seiner Jugend
          begeisterte er sich für die Naturphilosophie (Anaxagoras' Nous-Lehre).
          Doch er war enttäuscht: Anaxagoras erklärte zwar, dass der Geist die
          Ursache sei, aber im Einzelnen erklärte er alles mechanisch — mit
          Knochen, Sehnen und Muskeln. „Das ist, als wenn jemand sagt: Sokrates
          sitzt hier im Gefängnis, weil seine Knochen und Sehnen so angeordnet
          sind — statt weil er es <strong>für gerecht hält</strong>."
        </p>
        <p class="lz-prose reveal">
          Sokrates vollzog daraufhin die sogenannte <strong>„zweite Fahrt"</strong>
          (deúteros plous): Er wandte sich von der Naturforschung ab und der
          <strong>Untersuchung des menschlichen Lebens</strong> zu. Nicht „Woraus
          besteht die Welt?" ist die richtige Frage, sondern: <strong>„Wie soll
          man leben?"</strong>
        </p>
        ${renderMerkboxGrid([
          { icon: 'fas fa-heart', title: 'Sorge um die Seele (epimeleia tês psychês)',
            text: 'Das zentrale Anliegen des Sokrates: Die Seele (psychḗ) ist das Wertvollste des Menschen — wertvoller als Körper, Reichtum oder Ruhm. Philosophie ist Seelenpflege: die ständige Arbeit daran, die eigene Seele so gut wie möglich zu machen.' },
          { icon: 'fas fa-gem', title: 'Tugend als Seelenzustand',
            text: 'Die Tugend (aretḗ) ist keine äußere Handlung, sondern ein innerer Zustand der Seele: Ordnung, Harmonie, Wissen. Eine gute Seele handelt zwangsläufig gut — so wie ein gutes Messer zwangsläufig gut schneidet. Tugend und Glück (eudaimonía) sind untrennbar.' },
          { icon: 'fas fa-ban', title: 'Leibfeindlichkeit?',
            text: 'Sokrates verachtete den Körper nicht grundsätzlich, aber er ordnete ihn der Seele unter: „Nicht das Leben überhaupt ist das Höchste, sondern das gute Leben" (Kriton 48b). Genüsse sind nicht schlecht, aber sie dürfen die Seele nicht korrumpieren.' },
        ])}
        ${renderFormulaBox({
          label: 'Sokrates in der Apologie (38a)',
          formula: '„Ein Leben ohne Selbstprüfung (anéxetastos bíos)<br>ist nicht lebenswert für einen Menschen."',
          desc: 'Der berühmteste Satz des Sokrates: Nur wer sich selbst und seine Überzeugungen ständig prüft, lebt wahrhaft menschlich. Unreflektiertes Dahintreiben ist kein menschenwürdiges Leben.'
        })}
      </div>
    </section>

    <section class="lz-content-section">
      <div class="lz-section-wrap">
        ${renderSubhead('Was-ist-Fragen und die sokratische Methode')}
        <h2 class="lz-h2 reveal">Die Suche nach dem <em>Wesen</em> der Dinge</h2>
        <p class="lz-prose reveal">
          Sokrates fragte nicht nach Einzelfällen, sondern nach dem
          <strong>Allgemeinen</strong>: Nicht „War diese Handlung tapfer?", sondern
          <strong>„Was ist Tapferkeit überhaupt?"</strong> (ti esti? = Was ist?).
          Er suchte die <strong>Definition</strong> — den Wesensbegriff, der alle
          Einzelfälle umfasst und erklärt, warum sie unter diesen Begriff fallen.
          Aristoteles schreibt Sokrates deshalb zwei Entdeckungen zu: die
          <strong>induktiven Argumente</strong> und die <strong>allgemeinen
          Definitionen</strong> (Metaphysik M, 4, 1078b).
        </p>
        <nav class="wim-tabs" id="methode-tabs" aria-label="Sokratische Methode">
          ${METHODE_TABS.map((t, i) => `
            <button class="wim-tab${i === 0 ? ' active' : ''}" data-wim="${t.key}">
              ${t.label}
            </button>`).join('')}
        </nav>
        <div class="wim-category" data-wim-cat="elenchos">
          <h3 class="lz-h3">Die Methode der Widerlegung</h3>
          <p class="lz-prose">Der <strong>Élenchos</strong> (Prüfung, Widerlegung) ist die Kernmethode des Sokrates. Der Ablauf:</p>
          ${renderMerkboxGrid([
            { icon: 'fas fa-question-circle', title: '1. Frage stellen',
              text: 'Sokrates stellt die Was-ist-Frage: „Was ist Tapferkeit?" (Laches), „Was ist Frömmigkeit?" (Euthyphron), „Was ist Gerechtigkeit?" (Politeia). Er betont, selbst keine Antwort zu kennen.' },
            { icon: 'fas fa-comment', title: '2. These aufnehmen',
              text: 'Der Gesprächspartner gibt eine Antwort — meist eine alltägliche Definition. Z.B. Laches: „Tapferkeit ist, wenn man im Kampf standhält und nicht flieht."' },
            { icon: 'fas fa-search', title: '3. Konsequenzen prüfen',
              text: 'Sokrates leitet aus der These Konsequenzen ab und zeigt, dass sie zu Widersprüchen führen: „Aber ist es nicht auch tapfer, strategisch zurückzuweichen? Und ist standhaftes Ausharren ohne Verstand nicht eher Dummheit?"' },
            { icon: 'fas fa-times-circle', title: '4. Aporie (Ratlosigkeit)',
              text: 'Der Gesprächspartner erkennt, dass seine Definition unzureichend ist. Das Gespräch endet oft in Aporie (aporía = Ausweglosigkeit). Aber genau das ist der Gewinn: Die Illusion des Wissens ist zerstört.' },
          ])}
        </div>
        <div class="wim-category hidden" data-wim-cat="maeutik">
          <h3 class="lz-h3">Gedanken zur Welt bringen</h3>
          <p class="lz-prose">Im <em>Theaitetos</em> (150a–151d) beschreibt Sokrates seine Methode als <strong>Mäeutik</strong> (maieutiké téchnē = Hebammenkunst):</p>
          ${renderMerkboxGrid([
            { icon: 'fas fa-baby', title: 'Hebamme der Ideen',
              text: '„Meine Kunst der Geburtshilfe stimmt mit der der Hebammen überein, nur dass sie nicht Frauen, sondern Männern hilft, und dass sie nicht den Leib, sondern die Seele bei der Geburt ihrer Gedanken überwacht." Sokrates „gebiert" nicht selbst, er hilft anderen, ihre eigenen Einsichten hervorzubringen.' },
            { icon: 'fas fa-check-circle', title: 'Prüfung der Neugeborenen',
              text: 'Wie die Hebamme prüft, ob das Neugeborene lebensfähig ist, so prüft Sokrates, ob die neugeborene Idee „echt" (wahr und konsistent) oder ein „Windei" (scheinbares Wissen) ist. Falsche Überzeugungen werden „abgetrieben" — ein schmerzhafter, aber heilsamer Prozess.' },
            { icon: 'fas fa-ban', title: 'Sokratische Ironie',
              text: 'Sokrates behauptet, selbst „unfruchtbar" zu sein — er besitze kein eigenes Wissen, sondern könne nur anderen helfen, das ihre zu entdecken. Diese Selbstverkleinerung (eironeia) ist teils echte Bescheidenheit, teils pädagogische Strategie: Sie zwingt den Partner, selbst zu denken.' },
          ])}
        </div>
        <div class="wim-category hidden" data-wim-cat="nichtwissen">
          <h3 class="lz-h3">„Ich weiß, dass ich nichts weiß"</h3>
          <p class="lz-prose">Sokrates' berühmtestes Bekenntnis — allerdings so nie wörtlich gesagt! In der <em>Apologie</em> (21d) formuliert er es so:</p>
          ${renderFormulaBox({
            label: 'Apologie 21d',
            formula: '„Ich scheint doch um dieses Wenige weiser zu sein,<br>dass ich, was ich nicht weiß, auch nicht zu wissen glaube."',
            desc: 'Das Orakel von Delphi hatte Sokrates als den weisesten Menschen bezeichnet. Sokrates verstand dies so: Er ist nur deshalb weise, weil er als Einziger weiß, dass er nicht weiß — während alle anderen zu wissen glauben, was sie nicht wissen.'
          })}
          ${renderMerkboxGrid([
            { icon: 'fas fa-graduation-cap', title: 'Docta ignorantia',
              text: 'Das „wissende Nichtwissen" ist keine Resignation, sondern der Anfang echter Philosophie. Nur wer erkennt, dass er nicht weiß, sucht nach Wissen. Wer zu wissen glaubt, sucht nicht mehr — und bleibt in Unwissenheit gefangen.' },
            { icon: 'fas fa-shield-alt', title: 'Gegen die Sophisten',
              text: 'Die Sophisten behaupteten, Wissen (und Tugend) lehren zu können — gegen Bezahlung. Sokrates bezweifelt das: Wahres Wissen kann nicht übertragen, sondern muss selbst erarbeitet werden. Deshalb nimmt er kein Geld.' },
          ])}
        </div>
      </div>
    </section>

    <section class="lz-content-section">
      <div class="lz-section-wrap">
        ${renderSubhead('Ethik: Tugend ist Wissen')}
        <h2 class="lz-h2 reveal">Der sokratische <em>Intellektualismus</em></h2>
        <p class="lz-prose reveal">
          Sokrates vertrat eine <strong>radikal intellektualistische Ethik</strong>:
          Tugend (aretḗ) ist Wissen (epistḗmē). Wer wirklich weiß, was gut ist,
          handelt auch gut. Niemand tut freiwillig Böses — wer schlecht handelt,
          handelt aus Unwissenheit. Diese These — der
          <strong>sokratische Intellektualismus</strong> — ist eine der
          provokativsten der Philosophiegeschichte.
        </p>
        ${renderMerkboxGrid([
          { icon: 'fas fa-brain', title: 'Tugend = Wissen',
            text: 'Tapferkeit ist das Wissen, was wirklich zu fürchten ist. Besonnenheit ist das Wissen um das rechte Maß. Gerechtigkeit ist das Wissen um die richtige Verteilung. Alle Tugenden sind letztlich eine: das Wissen um das Gute.' },
          { icon: 'fas fa-ban', title: 'Niemand irrt freiwillig (oudeis hekòn hamartánei)',
            text: 'Wer Böses tut, glaubt, es sei gut für ihn — er irrt sich über das wahre Gute. Der Dieb glaubt, Geld mache glücklich; der Tyrann glaubt, Macht sei das höchste Gut. Beide irren über das wahre Gute (die Gesundheit der Seele). Böses Handeln ist immer Irrtum, nie bewusste Entscheidung.' },
          { icon: 'fas fa-user-shield', title: 'Unrecht erleiden besser als Unrecht tun',
            text: '„Unrecht tun ist schlimmer als Unrecht erleiden" (Gorgias 469b). Denn wer Unrecht tut, beschädigt seine eigene Seele — das größte aller Übel. Wer Unrecht erleidet, verliert nur äußere Güter (Geld, Gesundheit, Leben), nicht sein inneres Gut.' },
          { icon: 'fas fa-smile', title: 'Eudaimonía durch Tugend',
            text: 'Glück (eudaimonía) besteht nicht in Lust, Reichtum oder Macht, sondern im guten Zustand der Seele. Nur der Tugendhafte ist wahrhaft glücklich — selbst wenn er arm, krank oder im Gefängnis ist. Der ungerechte Tyrann ist der unglücklichste Mensch.' },
        ])}
        ${renderCompare({
          titleA: 'Sokrates (Intellektualismus)', titleB: 'Alltagsverständnis (& Aristoteles)',
          listA: [
            'Tugend <strong>ist</strong> Wissen — wer weiß, handelt gut',
            'Niemand tut freiwillig Böses',
            'Willensschwäche (akrasía) ist unmöglich',
            'Alle Tugenden sind eine (Einheit der Tugend)',
            'Tugend ist lehrbar (wenn Wissen lehrbar ist)',
          ],
          listB: [
            'Wissen reicht nicht — man muss auch <strong>wollen</strong>',
            'Menschen tun bewusst Böses (wider besseres Wissen)',
            'Willensschwäche ist allgegenwärtig (Aristoteles, EN VII)',
            'Verschiedene Tugenden erfordern verschiedene Kompetenzen',
            'Tugend erfordert Übung, Gewöhnung, Charakter',
          ],
        })}
        ${renderInfobox({
          type: 'blue', icon: 'fas fa-graduation-cap',
          title: 'Abitur-Klassiker: „Niemand irrt freiwillig"',
          body: 'Diese These wird regelmäßig in Klausuren abgefragt. Gute Antworten umfassen: (1) Darstellung der These, (2) Sokrates\' Argumentation (wahres Wissen über das Gute → gutes Handeln), (3) Kritik (Aristoteles: akrasía / Willensschwäche widerlegt Sokrates), (4) Differenzierung: Sokrates meint <strong>echtes</strong> Wissen, nicht bloße Meinung. Wer nur abstrakt weiß „Stehlen ist schlecht", aber konkret glaubt „dieses Geld brauche ich", hat noch kein echtes Wissen.'
        })}
      </div>
    </section>

    <section class="lz-content-section">
      <div class="lz-section-wrap">
        ${renderSubhead('Prozess und Tod des Sokrates (399 v. Chr.)')}
        <h2 class="lz-h2 reveal">Der Prozess, der die Philosophie <em>prägte</em></h2>
        <p class="lz-prose reveal">
          Im Jahr 399 v.&nbsp;Chr. — fünf Jahre nach der Niederlage Athens im
          Peloponnesischen Krieg — wurde Sokrates von drei Athenern angeklagt:
          <strong>Meletos</strong> (Dichter), <strong>Anytos</strong> (Politiker)
          und <strong>Lykon</strong> (Redner). Die Anklagepunkte lauteten:
        </p>
        ${renderMerkboxGrid([
          { icon: 'fas fa-cross', title: '1. Gottlosigkeit (asébeia)',
            text: '„Er glaubt nicht an die Götter, an die der Staat glaubt, und führt neue göttliche Wesen ein." Gemeint war sein daimónion — eine innere Stimme, die ihn vor falschen Handlungen warnte. Die Anklage spiegelt die religiöse Verunsicherung Athens nach der Kriegsniederlage.' },
          { icon: 'fas fa-user-graduate', title: '2. Verderben der Jugend',
            text: '„Er verdirbt die Jugend." Gemeint war: Sokrates\' kritisches Fragen untergräbt die Autorität der Eltern, der Tradition und der politischen Führer. Mehrere seiner Schüler (Alkibiades, Kritias) waren Feinde der Demokratie geworden.' },
        ])}
        <h3 class="lz-h3 reveal">Die Verteidigungsrede (Apologie)</h3>
        <p class="lz-prose reveal">
          Platons <em>Apologie</em> ist die Verteidigungsrede des Sokrates vor dem
          Volksgericht (501 Geschworene). Statt um Gnade zu bitten, provoziert Sokrates:
          Er sei ein <strong>Geschenk des Gottes</strong> an Athen, eine
          <strong>Bremse</strong> (mýops = Stechfliege), die das träge Ross der Stadt
          wach halte. Wenn man ihn töte, werde man „für den Rest des Lebens schlafen".
        </p>
        ${renderFormulaBox({
          label: 'Apologie 30e–31a',
          formula: '„Wenn ihr mich tötet, werdet ihr nicht leicht einen anderen<br>wie mich finden, der vom Gott an die Stadt gesetzt ist<br>wie eine Bremse an ein großes, edles Ross,<br>das aber wegen seiner Größe etwas träge ist und eines Antriebs bedarf."',
          desc: 'Die Stechfliegen-Metapher: Sokrates versteht sich als göttlichen Auftrag — er stört den Schlaf der Bequemlichkeit und zwingt Athen zum Nachdenken.'
        })}
        <p class="lz-prose reveal">
          Das Urteil fiel knapp: <strong>280 zu 221 Stimmen</strong> für schuldig.
          Im antiken Verfahren konnte der Angeklagte eine Gegenstrafe vorschlagen.
          Sokrates schlug zunächst vor, man solle ihn als <strong>Ehrenbürger</strong>
          im Prytaneion (Rathaus) auf Staatskosten speisen — die höchste Ehrung Athens.
          Nach Protest der Richter bot er eine minimale Geldstrafe an. Die Richter
          verurteilten ihn zum Tod durch den Schierlingsbecher.
        </p>
        <h3 class="lz-h3 reveal">Der Tod im Gefängnis</h3>
        <p class="lz-prose reveal">
          Sokrates lehnte die <strong>Fluchtmöglichkeit</strong> ab, die ihm sein
          wohlhabender Freund Kriton anbot. Sein Argument (Platons <em>Kriton</em>):
          Die Gesetze Athens haben ihm sein Leben ermöglicht — Erziehung, Schutz,
          Recht. Wer unter Gesetzen lebt und sie akzeptiert, darf ihnen nicht gehorchen,
          wenn sie ihm nützen, und sie verletzen, wenn sie ihm schaden. Selbst ein
          ungerechtes Urteil rechtfertigt nicht den Gesetzesbruch. Im <em>Phaidon</em>
          schildert Platon die letzten Stunden des Sokrates: Er diskutiert ruhig
          über die Unsterblichkeit der Seele, trinkt gelassen den Schierlingsbecher
          und stirbt mit den Worten: <strong>„Kriton, wir schulden dem Asklepios
          einen Hahn. Vergesst nicht, die Schuld zu begleichen."</strong>
        </p>
        ${renderInfobox({
          type: 'warning', icon: 'fas fa-exclamation-triangle',
          title: 'Interpretation des letzten Satzes',
          body: 'Asklepios war der Gott der Heilkunst. Man opferte ihm einen Hahn nach einer <strong>Genesung</strong>. Nietzsche deutete den Satz zynisch: Sokrates sah das Leben als Krankheit und den Tod als Heilung. Wahrscheinlicher ist eine andere Deutung: Sokrates dankt dem Gott für die „Heilung" seiner Seele durch die Philosophie — oder für die Befreiung der Seele aus dem Gefängnis des Körpers (ein Motiv des <em>Phaidon</em>).'
        })}
      </div>
    </section>

    <section class="lz-content-section">
      <div class="lz-section-wrap">
        ${renderSubhead('Sokrates und die Sophisten')}
        ${renderCompare({
          titleA: 'Sokrates', titleB: 'Sophisten',
          listA: [
            'Nimmt <strong>kein Geld</strong> für seinen Unterricht',
            'Behauptet, <strong>nichts zu wissen</strong>',
            'Sucht die <strong>eine Wahrheit</strong> (Was ist Tugend?)',
            'Ziel: <strong>Selbsterkenntnis</strong> und Seelenpflege',
            'Methode: <strong>Élenchos</strong> (Widerlegung) → Aporie',
            'Wahrheit ist <strong>objektiv</strong> (es gibt ein wahres Gutes)',
            'Schüler: Platon, Xenophon, Antisthenes, Aristipp',
          ],
          listB: [
            'Verlangen <strong>hohe Honorare</strong> für Unterricht',
            'Behaupten, <strong>Wissen lehren</strong> zu können',
            'Vertreten <strong>Relativismus</strong> (viele Wahrheiten)',
            'Ziel: <strong>politischer Erfolg</strong> und Karriere',
            'Methode: <strong>Rhetorik</strong> → Überzeugung',
            'Wahrheit ist <strong>subjektiv / konventionell</strong>',
            'Vertreter: Protagoras, Gorgias, Hippias, Prodikos',
          ],
        })}
      </div>
    </section>

    <section class="lz-content-section">
      <div class="lz-section-wrap">
        ${renderSubhead('Testfragen — Abiturniveau')}
        ${renderAccordion([
          { title: '1. Erklären Sie die sokratische Methode des Élenchos anhand eines Beispiels.',
            content: '<p class="lz-prose"><strong>Der Élenchos</strong> ist die Methode der prüfenden Widerlegung. Beispiel aus dem <em>Laches</em>:<br><br><strong>Schritt 1:</strong> Sokrates fragt: „Was ist Tapferkeit?"<br><strong>Schritt 2:</strong> General Laches antwortet: „Tapferkeit ist, wenn einer in Reih und Glied standhält und nicht flieht."<br><strong>Schritt 3:</strong> Sokrates prüft: „Aber die Skythen kämpfen fliehend — ist ihr strategischer Rückzug nicht auch tapfer? Und ist es tapfer, standzuhalten, wenn man nicht versteht, wogegen man kämpft? Ist das nicht eher Tollkühnheit?"<br><strong>Schritt 4:</strong> Laches erkennt, dass seine Definition zu eng ist (sie schließt tapfere Reiter aus) und zugleich zu weit (sie umfasst auch sinnloses Standhalten). Er gerät in <strong>Aporie</strong> — Ratlosigkeit.<br><br><strong>Philosophischer Gewinn:</strong> Die Aporie ist nicht Scheitern, sondern Befreiung: Laches hat erkannt, dass er nicht weiß, was Tapferkeit ist — obwohl er als General tapfer handelt. Das <strong>Wissen um das Nichtwissen</strong> ist der erste Schritt zur wahren Erkenntnis.</p>' },
          { title: '2. Erläutern Sie die These „Tugend ist Wissen" und diskutieren Sie Aristoteles\' Kritik.',
            content: '<p class="lz-prose"><strong>Sokrates\' These:</strong> Tugend (aretḗ) ist identisch mit Wissen (epistḗmē). Wer wirklich weiß, was gut ist, handelt auch gut — denn niemand schadet sich freiwillig. Laster ist Unwissenheit: Der Ungerechte glaubt, Ungerechtigkeit nütze ihm, weil er das wahre Gut (die Gesundheit der Seele) nicht kennt.<br><br><strong>Aristoteles\' Kritik (Nikomachische Ethik VII):</strong> Es gibt <strong>akrasía</strong> (Willensschwäche): Menschen handeln gegen besseres Wissen. Der Raucher weiß, dass Rauchen schadet — und raucht trotzdem. Der Zornige weiß, dass Gewalt falsch ist — und schlägt trotzdem zu. Aristoteles schließt: Wissen allein reicht nicht — es braucht auch <strong>Charakter</strong> (ḗthos), der durch <strong>Gewöhnung</strong> (éthismos) und <strong>Übung</strong> entsteht.<br><br><strong>Differenzierung:</strong> Sokrates könnte antworten: Wer gegen besseres Wissen handelt, hat eben kein <strong>echtes</strong> Wissen, sondern nur eine Meinung. Echtes Wissen durchdringt die ganze Seele und bestimmt das Handeln zwangsläufig — wie ein Arzt, der die Diagnose wirklich verstanden hat, die richtige Therapie wählt. Das Problem ist dann: Wie erreicht man dieses „echte" Wissen?</p>' },
          { title: '3. Warum lehnt Sokrates die Flucht aus dem Gefängnis ab? Rekonstruieren Sie sein Argument.',
            content: '<p class="lz-prose">Im <em>Kriton</em> argumentiert Sokrates in einem fiktiven Gespräch mit den personifizierten „Gesetzen Athens" (prosopopoiia):<br><br><strong>(1) Vertragsprinzip:</strong> Wer in einem Staat lebt, seine Vorteile genießt (Erziehung, Schutz, Rechtsordnung) und ihn nicht verlässt, obwohl er könnte, hat einen <strong>impliziten Vertrag</strong> mit den Gesetzen geschlossen. Sokrates hat 70 Jahre in Athen gelebt und die Stadt nie verlassen — er hat den Vertrag akzeptiert.<br><br><strong>(2) Konsequenzprinzip:</strong> Wenn jeder Bürger Gesetze bricht, die ihm nicht passen, zerstört das die gesamte Rechtsordnung. Die Gesetze fragen: „Glaubst du, ein Staat könne bestehen und nicht zugrunde gehen, in dem die gefällten Urteile keine Kraft haben?" (50b)<br><br><strong>(3) Unrecht nicht mit Unrecht vergelten:</strong> Selbst wenn das Urteil ungerecht ist — Unrecht mit Unrecht zu beantworten (Flucht = Gesetzesbruch) macht die Sache nicht besser, sondern schlimmer. „Niemals darf man Unrecht tun, auch nicht wenn man Unrecht erlitten hat" (49b).<br><br><strong>Philosophische Bedeutung:</strong> Das Argument begründet die Idee der <strong>Gesetzestreue auch bei ungerechten Gesetzen</strong> — eine Position, die in der Tradition des Rechtspositivismus steht. Gegenposition: Naturrecht (Antigone, M.L. King) — ungerechte Gesetze sind keine echten Gesetze und dürfen gebrochen werden.</p>' },
          { title: '4. Vergleichen Sie Sokrates\' philosophischen Ansatz mit dem der Sophisten.',
            content: '<p class="lz-prose"><strong>Gemeinsamkeiten:</strong> Beide wandten sich der menschlichen Lebenswelt zu (weg von der Naturphilosophie). Beide nutzten Argumente und Gegenargumente. Beide stellten überlieferte Normen in Frage. Beide waren in Athen aktiv und wirkten auf die junge Elite.<br><br><strong>Unterschiede:</strong><br>(1) <strong>Ziel:</strong> Sokrates suchte <strong>Wahrheit</strong> (alétheia) — die eine richtige Antwort auf die Was-ist-Frage. Die Sophisten suchten <strong>Überzeugungskraft</strong> (peithṓ) — die Fähigkeit, in jeder Debatte zu gewinnen.<br>(2) <strong>Wahrheitsbegriff:</strong> Sokrates: Es gibt <strong>objektive Wahrheit</strong>, auch wenn er sie noch nicht gefunden hat. Protagoras: Wahrheit ist <strong>relativ</strong> zum Erkennenden (Homo-mensura-Satz).<br>(3) <strong>Methode:</strong> Sokrates nutzt den Élenchos — die Widerlegung, die in Aporie führt. Die Sophisten nutzen Rhetorik — die Überredung, die zum Sieg führt.<br>(4) <strong>Honorar:</strong> Sokrates nimmt kein Geld (Philosophie als Berufung). Die Sophisten nehmen hohe Honorare (Bildung als Dienstleistung).<br><br><strong>Caveat:</strong> Diese Gegenüberstellung stammt von <strong>Platon</strong>, der ein Interesse an der scharfen Abgrenzung hatte. Historisch waren die Grenzen fließender: Sokrates teilte mit den Sophisten den aufklärerischen Impuls, und nicht alle Sophisten waren Relativisten (Antiphon vertrat universelle Menschengleichheit).</p>' },
          { title: '5. Erklären Sie das Daimonion des Sokrates. Ist Sokrates religiös?',
            content: '<p class="lz-prose">Das <strong>daimónion</strong> (τὸ δαιμόνιον) ist eine innere Stimme (phōnḗ), die Sokrates nach eigener Aussage seit seiner Kindheit begleitete. Sie sagte ihm nie, was er <strong>tun</strong> solle, sondern warnte ihn nur, wenn er etwas <strong>Falsches</strong> tun wollte — sie war ein rein <strong>negatives</strong> Zeichen. Sokrates beschreibt sie als „etwas Göttliches" (theîón ti), nicht als die Stimme eines bestimmten Gottes.<br><br><strong>Interpretationen:</strong><br>(1) <strong>Religiös:</strong> Sokrates glaubte an eine göttliche Führung — sein philosophisches Wirken war ein göttlicher Auftrag (Apologie 28e: „Der Gott hat mir aufgetragen, fragend und prüfend zu leben").<br>(2) <strong>Philosophisch:</strong> Das Daimonion ist eine Metapher für die <strong>moralische Intuition</strong> — das unmittelbare Gefühl, dass etwas falsch ist, noch bevor man es rational begründen kann. Es ist das „Gewissen" avant la lettre.<br>(3) <strong>Ironisch:</strong> Sokrates nutzt die religiöse Sprache strategisch, um seine philosophische Mission zu legitimieren — in einer Gesellschaft, die Autorität nur in göttlicher Form akzeptierte.<br><br><strong>War Sokrates religiös?</strong> Ja — aber nicht im konventionellen Sinn. Er respektierte die Götter, opferte, konsultierte das Orakel. Aber sein Gottesbegriff war philosophisch gereinigt: kein anthropomorphes Wesen, sondern ein Prinzip des Guten und Wahren. Das machte ihn in den Augen der Ankläger verdächtig — er war weder Atheist noch konventionell fromm, sondern etwas Drittes.</p>' },
        ])}
      </div>
    </section>

    <section class="lz-content-section" style="padding-top:0;">
      <div class="lz-section-wrap">
        ${renderPageNav({
          prev: { label: 'Die Sophisten', link: `${BASE}/themen/vorsokratik/sophisten` },
          next: { label: 'Platon',        link: `${BASE}/themen/klassische-antike/platon` },
        }, BASE)}
      </div>
    </section>

    ${footerHTML(this.router)}
    `;
  }

  init() {
    i18n.init();
    initScrollReveal();
    refreshScrollReveal();
    initInteractive(document);
    initWimTabs(document);
  }

  cleanup() {}
}