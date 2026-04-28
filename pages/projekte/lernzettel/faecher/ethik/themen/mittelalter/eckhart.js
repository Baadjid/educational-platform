// pages/projekte/lernzettel/faecher/ethik/themen/mittelalter/eckhart.js
// ══════════════════════════════════════════════════════════════════
// Kapitel 5.5 — Meister Eckhart (um 1260–1328)
// Gelassenheit, Gottesgeburt, Abgeschiedenheit, negative Theologie
// ══════════════════════════════════════════════════════════════════

import { initScrollReveal, refreshScrollReveal } from '../../../../../../../shared/js/scroll.js';
import { footerHTML }          from '../../../../../../../components/Footer.js';
import { i18n }                from '../../../../../../../shared/js/i18n.js';
import { initWimTabs }         from '../../../../../../../shared/js/wim-tabs.js';
import {
  ensureComponentsCSS, renderSubhead, renderTags, renderInfobox,
  renderTable, renderAccordion, renderMerkboxGrid, renderVTimeline,
  renderCompare, renderFormulaBox, renderTabs, initInteractive, loadComponentCSS,
} from '../../../../js/components/components.js';
import { renderPageNav } from '../../../../js/components/subnav.js';
import { COLOR, COLOR_RGB, BASE } from '../../philosophie.js';

const KAP_COLOR = '#8b4557';
const KAP_COLOR_RGB = '139, 69, 87';

const ECKHART_KERN_TABS = [
  { key: 'gottheit',  label: 'Gottheit & Gott' },
  { key: 'seelengrund', label: 'Seelengrund' },
  { key: 'gelassenheit', label: 'Gelassenheit' },
];

export default class EckhartPage {
  constructor(router) { this.router = router; }
  render() {
    ensureComponentsCSS();
    loadComponentCSS('pages/projekte/lernzettel/styles/sub.css');
    const el = document.createElement('div');
    el.className = 'page page-eckhart';
    el.style.setProperty('--lz-accent', COLOR);
    el.style.setProperty('--lz-accent-rgb', COLOR_RGB);
    el.style.setProperty('--kap-color', KAP_COLOR);
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
          <span>Meister Eckhart</span>
        </nav>
        <h1 class="lz-sub-title"><em>Meister Eckhart</em> — Mystik &amp; Gelassenheit</h1>
        <p class="lz-sub-desc">
          Der kühnste Denker des Mittelalters: Eckhart verschmolz scholastische Philosophie
          mit mystischer Erfahrung und schuf eine radikale Theologie der Innerlichkeit,
          die bis zu Heidegger, dem Zen-Buddhismus und der modernen Psychologie nachwirkt.
        </p>
        ${renderTags(['Kapitel 5.5', 'ca. 1260–1328', 'Hochheim · Paris · Straßburg · Köln', 'Gelassenheit · Gottesgeburt · Abgeschiedenheit', 'Abitur 2026'])}
      </div>
    </section>

    <section class="lz-content-section">
      <div class="lz-section-wrap">
        ${renderSubhead('Biographisches')}
        <h2 class="lz-h2 reveal">Zwischen <em>Katheder und Kanzel</em></h2>
        <p class="lz-prose reveal">
          Eckhart von Hochheim, genannt <strong>Meister Eckhart</strong>
          (Magister = akademischer Titel), war <strong>Dominikaner</strong>,
          Professor in Paris, Provinzial seines Ordens und zugleich
          der populärste Prediger seiner Zeit. Er ist der erste große
          Philosoph, der systematisch auf <strong>Deutsch</strong> philosophierte —
          und dabei eine Sprache von beispielloser Dichte und Schönheit schuf.
        </p>
        ${renderVTimeline([
          { year: 'ca. 1260', title: 'Geburt in Hochheim (Thüringen)', text: 'Eintritt in den Dominikanerorden in Erfurt' },
          { year: '1293–94', title: 'Erste Pariser Professur', text: 'Kommentar zu den Sentenzen des Petrus Lombardus' },
          { year: '1302–03', title: 'Zweite Pariser Professur', text: 'Nur Thomas von Aquin hatte ebenfalls zweimal den Pariser Lehrstuhl inne' },
          { year: '1303–11', title: 'Provinzial der Dominikaner (Sachsen)', text: 'Verwaltung von ca. 50 Klöstern; seelsorgerische Tätigkeit' },
          { year: '1313–23', title: 'Straßburg', text: 'Seelsorger für Dominikanerinnen; Beginn der deutschen Predigttätigkeit' },
          { year: '1323–26', title: 'Generalstudium in Köln', text: 'Lehrtätigkeit; wachsender Verdacht der Häresie' },
          { year: '1326', title: 'Inquisitionsprozess', text: 'Erzbischof Heinrich von Virneburg klagt Eckhart der Häresie an' },
          { year: '1327', title: 'Verteidigung in Köln', text: 'Eckhart protestiert öffentlich: „Irren kann ich, ein Häretiker kann ich nicht sein — denn das Erste betrifft den Verstand, das Zweite den Willen."' },
          { year: '1328', title: 'Tod (vermutlich in Köln)', text: 'Stirbt vor dem endgültigen Urteil' },
          { year: '1329', title: 'Postume Verurteilung (Bulle In agro dominico)', text: 'Papst Johannes XXII. verurteilt 28 Sätze als häretisch oder häresieverdächtig' },
        ])}
        ${renderInfobox({
          type: '', icon: 'fas fa-info-circle',
          title: 'Der einzige verurteilte Meister der Scholastik',
          body: 'Eckharts Verurteilung ist einzigartig: Kein anderer scholastischer Magister wurde je postum von einem Papst verurteilt. Die Gründe waren teils politisch (Machtkampf zwischen Dominikanern und dem Kölner Erzbischof), teils inhaltlich: Eckharts Formulierungen über die „Gottesgeburt in der Seele" und den „Seelengrund" klangen für die Inquisitoren nach Pantheismus — der Aufhebung der Grenze zwischen Gott und Mensch. 2024 läuft ein theologisches Verfahren zur <strong>Rehabilitation</strong>.'
        })}
      </div>
    </section>

    <section class="lz-content-section">
      <div class="lz-section-wrap">
        ${renderSubhead('Philosophische Kerngedanken')}
        <h2 class="lz-h2 reveal">Gott, Seele und <em>Einheit</em></h2>
        <nav class="wim-tabs" id="eckhart-kern-tabs" aria-label="Eckhart">
          ${ECKHART_KERN_TABS.map((t, i) => `
            <button class="wim-tab${i === 0 ? ' active' : ''}" data-wim="${t.key}">
              ${t.label}
            </button>`).join('')}
        </nav>
        <div class="wim-category" data-wim-cat="gottheit">
          <h3 class="lz-h3">Die Gottheit jenseits von „Gott"</h3>
          <p class="lz-prose">Eckharts radikalster Gedanke: Er unterscheidet zwischen <strong>„Gott"</strong> (deus — Gott als Person, Schöpfer, Dreieinigkeit) und der <strong>„Gottheit"</strong> (deitas/gotheit — der namenlose, bestimmungslose Grund jenseits aller Unterscheidungen). Die Gottheit ist „Wüste" (wüestunge), „Stille", „Finsternis" — nicht weil sie dunkel wäre, sondern weil sie jenseits aller Begriffe liegt.</p>
          ${renderFormulaBox({
            label: 'Eckhart, Deutsche Predigt 52 (Beati pauperes spiritu)',
            formula: '„Ich bitte Gott, dass er mich Gottes quitt mache.<br>Denn mein wesentliches Sein ist über Gott,<br>sofern wir Gott als Anfang der Geschöpfe fassen."',
            desc: 'Der Schock-Satz: Eckhart bittet Gott, ihn von „Gott" (als gedachtem Objekt) zu befreien — um zur Gottheit jenseits aller Bestimmungen vorzudringen. Nicht Atheismus, sondern radikale negative Theologie.'
          })}
          ${renderInfobox({
            type: 'warning', icon: 'fas fa-exclamation-triangle',
            title: 'Warum wurde das als Häresie verurteilt?',
            body: 'Die Inquisitoren lasen: Eckhart stellt sich <strong>über Gott</strong>. Eckharts Intention: Es gibt eine Tiefe in Gott, die tiefer ist als alle unsere Gottesbilder — der namenlose Urgrund, in dem Gott und Seele eins sind. Nicht der Mensch ist über Gott, sondern die <strong>Gottheit</strong> ist tiefer als „Gott" (als Gegenstand menschlicher Vorstellung).'
          })}
        </div>
        <div class="wim-category hidden" data-wim-cat="seelengrund">
          <h3 class="lz-h3">Das Fünklein (scintilla animae)</h3>
          <p class="lz-prose">Im Innersten der Seele gibt es einen Punkt — Eckhart nennt ihn <strong>Fünklein</strong> (scintilla animae), <strong>Bürglein</strong>, <strong>Grund der Seele</strong> (grunt der sêle) — der <strong>ungeschaffen und unerschaffbar</strong> ist. Dieser Seelengrund ist wesensgleich mit dem Grund der Gottheit. Hier berühren sich Mensch und Gott — oder besser: hier sind sie <strong>eins</strong>.</p>
          ${renderMerkboxGrid([
            { icon: 'fas fa-fire-alt', title: 'Fünklein (scintilla)',
              text: 'Ein „Funke" göttlichen Seins in der menschlichen Seele — nicht geschaffen, nicht zeitlich, nicht weltlich. In diesem Punkt ist die Seele so edel wie Gott selbst. Hier geschieht die „Gottesgeburt" — die Geburt des göttlichen Wortes in der Seele, die in jedem Augenblick geschehen kann.' },
            { icon: 'fas fa-circle', title: 'Grunt der sêle',
              text: 'Der Seelengrund ist „weder dies noch das" — er hat keine Eigenschaft, kein Bild, kein Wort. Er ist die reine Empfänglichkeit, die alles aufnimmt, ohne selbst etwas zu sein. Nur wer alle Bilder, alle Konzepte, alle Wünsche „loslässt" (Gelassenheit), kann in diesen Grund eindringen.' },
          ])}
        </div>
        <div class="wim-category hidden" data-wim-cat="gelassenheit">
          <h3 class="lz-h3">Gelâzenheit — Die Kunst des Loslassens</h3>
          <p class="lz-prose"><strong>Gelassenheit</strong> (gelâzenheit) ist Eckharts ethischer Schlüsselbegriff: das Loslassen aller Eigenansprüche — des Willens, des Besitzes, der Vorstellungen, sogar des Gottesbildes. Nicht stoische Gleichgültigkeit, sondern aktives <strong>Leerwerden</strong>, damit Gott in der Seele geboren werden kann.</p>
          ${renderMerkboxGrid([
            { icon: 'fas fa-hand-holding', title: 'Abgeschiedenheit (abegescheidenheit)',
              text: 'Die höchste Tugend — höher als Liebe, Demut, Barmherzigkeit. Abgeschiedenheit meint: das Ich „leer" machen von allen Bildern, Wünschen und Vorstellungen — damit Gott den leeren Raum füllen kann. „Das ledige Gemüt vermag alle Dinge" (Traktat Von der Abgeschiedenheit).' },
            { icon: 'fas fa-recycle', title: 'Durchbruch (durchbrechen)',
              text: 'Der Mensch „bricht durch" alle Schichten der Seele — durch die Sinne, durch den Verstand, durch den Willen — bis in den „Grund", wo er und Gott eins sind. Nicht der Mensch findet Gott, sondern Gott „findet sich" im Menschen — wenn der Mensch aufhört zu suchen.' },
            { icon: 'fas fa-baby', title: 'Gottesgeburt in der Seele',
              text: '„Der Vater gebiert seinen Sohn in der Seele auf dieselbe Weise, wie er ihn in der Ewigkeit gebiert — nicht anders." Die innertrinitarische Zeugung des Sohnes durch den Vater geschieht nicht nur einmal in der Ewigkeit, sondern JETZT, in der Seele des gelassenen Menschen. Der Mensch wird zum „Sohn Gottes" — nicht metaphorisch, sondern wesenhaft.' },
          ])}
          ${renderFormulaBox({
            label: 'Eckhart, Deutsche Predigt 2 (Intravit Jesus)',
            formula: '„Gott ist kein Zerstörer; Gott ist ein Vollender.<br>Und wenn Gott in dich eingehen soll,<br>muss die Kreatur ausgehen."',
            desc: 'Gelassenheit als Entleerung: Nicht Gott muss kommen, sondern der Mensch muss Platz machen. Die Seele muss „leer" werden von allem Geschaffenen — dann füllt Gott sie „von selbst".'
          })}
        </div>
      </div>
    </section>

    <section class="lz-content-section">
      <div class="lz-section-wrap">
        ${renderSubhead('Eckhart und die philosophische Tradition')}
        <h2 class="lz-h2 reveal">Zwischen Plotin, Thomas und <em>Zen</em></h2>
        ${renderCompare({
          titleA: 'Eckhart — Mystische Philosophie', titleB: 'Thomas von Aquin — Scholastische Philosophie',
          listA: ['Gott ist <strong>jenseits des Seins</strong> (negative Theologie)', 'Erkenntnis durch <strong>Loslassen</strong> aller Begriffe', 'Ziel: <strong>Einswerdung</strong> von Seele und Gott', 'Sprache: <strong>paradox, bildhaft, deutsch</strong>', 'Der Seelengrund ist <strong>ungeschaffen</strong>', 'Predigt an einfache Gläubige'],
          listB: ['Gott ist <strong>das Sein selbst</strong> (ipsum esse subsistens)', 'Erkenntnis durch <strong>Logik und Argumentation</strong>', 'Ziel: <strong>Schau</strong> Gottes (visio beatifica) — Zweiheit bleibt', 'Sprache: <strong>systematisch, begrifflich, lateinisch</strong>', 'Die Seele ist <strong>geschaffen</strong> (Geschöpf ≠ Schöpfer)', 'Universität und gelehrtes Publikum'],
        })}
        ${renderTable({
          headers: ['Tradition', 'Verbindung zu Eckhart'],
          rows: [
            ['<strong>Plotin</strong>', 'Das Eine jenseits des Seins; Hénōsis als Aufhebung der Subjekt-Objekt-Trennung; Emanation und Rückkehr'],
            ['<strong>Augustinus</strong>', 'Innerlichkeit: „In te ipsum redi" → Eckharts Seelengrund; Gnade als Voraussetzung'],
            ['<strong>Pseudo-Dionysius</strong>', 'Negative Theologie: Gott durch Negation erkennen; „göttliche Dunkelheit" als Überhelle'],
            ['<strong>Thomas v. Aquin</strong>', 'Eckhart war Dominikaner und kannte Thomas\' System perfekt; radikalisierte es mystisch'],
            ['<strong>Zen-Buddhismus</strong>', 'Frappante Parallelen: Leerheit (śūnyatā) ≈ Gelassenheit; Satori ≈ Durchbruch; „Loslassen" als zentrales Motiv'],
            ['<strong>Heidegger</strong>', 'Übernahm den Begriff „Gelassenheit" wörtlich; Seinsfrage als Frage jenseits des Seienden'],
          ],
          highlight: [4, 5],
        })}
        ${renderInfobox({
          type: 'success', icon: 'fas fa-link',
          title: 'Eckhart und der interreligiöse Dialog',
          body: 'Eckharts Denken ist einzigartig offen für den Dialog mit nichtchristlichen Traditionen: Der japanische Zen-Philosoph <strong>D.T. Suzuki</strong> (1957) sah in Eckhart den „christlichen Zen-Meister". Die <strong>Kyoto-Schule</strong> (Nishitani, Ueda) hat Eckhart intensiv mit dem Buddhismus verglichen. Der interreligiöse Dialog zwischen Christentum und Buddhismus führt häufig über Eckhart.'
        })}
      </div>
    </section>

    <section class="lz-content-section">
      <div class="lz-section-wrap">
        ${renderSubhead('Testfragen — Abiturniveau')}
        ${renderAccordion([
          { title: '1. Erklären Sie Eckharts Unterscheidung zwischen „Gott" und „Gottheit". Warum ist sie philosophisch bedeutsam?',
            content: '<p class="lz-prose"><strong>Die Unterscheidung:</strong> „Gott" (deus) ist Gott, <em>sofern er sich offenbart</em> — als Schöpfer, als Dreieinigkeit, als Gegenstand des Glaubens und der Theologie. Die „Gottheit" (deitas/gotheit) ist der <strong>namenlose Grund jenseits aller Offenbarung</strong> — die „Wüste" (wüestunge), in der es keine Unterscheidung von Vater, Sohn und Geist gibt, kein Schaffen, kein Wirken, nur reine Einheit und Stille.<br><br><strong>Philosophische Bedeutung:</strong> (1) <strong>Negative Theologie:</strong> Alle unsere Gottesbilder (auch die biblischen) sind <strong>inadäquat</strong>. Die Gottheit übersteigt jede Vorstellung — auch die Vorstellung „Gott". Eckhart radikalisiert Plotins negative Theologie und Pseudo-Dionysius\' „göttliche Dunkelheit".<br>(2) <strong>Religionskritik von innen:</strong> Wer die Gottheit „hinter" Gott sucht, relativiert alle bestimmten Gottesbilder — alle Religionen, auch das Christentum, greifen nur Aspekte des Unsagbaren. Das hat Konsequenzen für den interreligiösen Dialog.<br>(3) <strong>Existenzielle Dimension:</strong> „Gott quitt werden" heißt: alle Sicherheiten aufgeben — auch die religiösen. Das ist die radikalste Form von Gelassenheit: nicht einmal an „Gott" festhalten, sondern sich in den namenlosen Grund fallen lassen.</p>' },
          { title: '2. Was meint Eckhart mit „Gelassenheit" (gelâzenheit) und wie unterscheidet sie sich von stoischer Apathie?',
            content: '<p class="lz-prose"><strong>Gelassenheit bei Eckhart:</strong> Das <strong>aktive Loslassen</strong> aller Eigenansprüche — des Willens (ich will nichts mehr für mich), des Wissens (ich gebe alle Gottesbilder auf), des Habens (ich besitze nichts, auch mein Selbst nicht). Gelassenheit ist nicht Passivität, sondern die höchste Form der Aktivität: das Ich „leer machen", damit Gott den leeren Raum füllen kann.<br><br><strong>Stoische Apátheia:</strong> Freiheit von irrationalen Leidenschaften durch <strong>Urteilskorrektur</strong>. Der Stoiker korrigiert falsche Urteile (z.B. „Reichtum ist ein Gut") und erreicht dadurch innere Ruhe. Die Affekte werden <strong>kontrolliert</strong> durch die Vernunft.<br><br><strong>Unterschiede:</strong> (1) <strong>Ziel:</strong> Stoa: Seelenruhe (Ataraxía). Eckhart: Einswerdung mit Gott. (2) <strong>Methode:</strong> Stoa: rationale Urteilskorrektur. Eckhart: radikales Loslassen — auch der Vernunft. (3) <strong>Inhalt:</strong> Stoa: Die Affekte werden beseitigt. Eckhart: Das gesamte Ich wird „gelassen" — einschließlich des Willens zu Tugend und Vernunft. (4) <strong>Ergebnis:</strong> Stoa: Der Weise bleibt er selbst, nur ohne störende Emotionen. Eckhart: Der „gelassene" Mensch „wird" Gott — die Grenze zwischen Selbst und Gott löst sich auf.</p>' },
          { title: '3. Erklären Sie den Begriff „Gottesgeburt in der Seele" und warum er als häretisch verurteilt wurde.',
            content: '<p class="lz-prose"><strong>Der Begriff:</strong> „Der Vater gebiert seinen Sohn in der Seele auf dieselbe Weise, wie er ihn in der Ewigkeit gebiert." Die innertrinitarische Zeugung — der Vater zeugt ewig den Sohn — geschieht nicht nur „dort" (in der göttlichen Trinität), sondern <strong>hier und jetzt</strong>, in der Seele des gelassenen Menschen. Wenn der Mensch sich von allen Bildern und Wünschen befreit, wird der „Seelengrund" zum Geburtsort des göttlichen Wortes.<br><br><strong>Warum häretisch?</strong> Die kirchliche Lehre besteht auf der <strong>Wesensverschiedenheit</strong> von Gott und Geschöpf (creator ≠ creatura). Eckharts Formulierung klingt nach <strong>Vergöttlichung des Menschen</strong> — der Mensch wird wesensgleich mit Gott. Die Bulle <em>In agro dominico</em> (1329) verurteilte u.a. den Satz: „Alles, was die göttliche Natur besitzt, besitzt auch der gerechte und göttliche Mensch."<br><br><strong>Eckharts Intention:</strong> Eckhart meinte nicht, dass der Mensch <strong>ontologisch</strong> zu Gott wird (Pantheismus), sondern dass er im „Grund der Seele" an der göttlichen Natur <strong>teilhat</strong> — die Grenze zwischen Gott und Mensch wird nicht aufgehoben, sondern als undurchlässige Grenze in Frage gestellt. Er formuliert eine <strong>Teilhabe-Mystik</strong>, keine Identitätsmystik — aber seine Sprache ist so kühn, dass die Grenze zu verwischen scheint.</p>' },
          { title: '4. Vergleichen Sie Eckharts „Loslassen" mit dem buddhistischen Konzept der Leerheit (śūnyatā).',
            content: '<p class="lz-prose"><strong>Parallelen:</strong> (1) Beide fordern das <strong>Loslassen aller Anhaftungen</strong> — an Besitz, Wissen, Identität, sogar an religiöse Vorstellungen. (2) Beide betonen, dass das Absolute <strong>jenseits aller Begriffe</strong> liegt — weder „seiend" noch „nicht-seiend", weder „dies" noch „das". (3) Beide verstehen den Weg als <strong>Entleerung</strong>: Der Zen-Mönch leert den Geist von allen Gedanken (zazen/Meditation); Eckhart leert die Seele von allen Bildern (Abgeschiedenheit). (4) Beide beschreiben das Ergebnis paradox: Zen: „Form ist Leerheit, Leerheit ist Form." Eckhart: „Gott ist ein Nichts — und Gott ist ein Etwas."<br><br><strong>Unterschiede:</strong> (1) <strong>Kontext:</strong> Eckhart denkt innerhalb der christlichen Trinität — die „Gottesgeburt" setzt Vater und Sohn voraus. Der Buddhismus kennt keinen Schöpfergott. (2) <strong>Ziel:</strong> Eckhart: Einswerdung mit der Gottheit (= positives Absolutes). Buddhismus: Erkenntnis der Leerheit aller Dinge (= kein „Wesen" hinter den Phänomenen). (3) <strong>Seele:</strong> Eckhart: Der „Seelengrund" ist etwas Ungeschaffenes, Ewiges. Buddhismus: Es gibt kein permanentes Selbst (anātman = Nicht-Selbst) — die Seele selbst ist „leer".<br><br><strong>Bewertung:</strong> Die Parallelen sind frappant, aber die metaphysischen Rahmen verschieden. D.T. Suzuki und die Kyoto-Schule sahen in Eckhart den dem Zen nächsten westlichen Denker — einen, der die Grenzen seines eigenen Paradigmas sprengte.</p>' },
        ])}
      </div>
    </section>

    <section class="lz-content-section" style="padding-top:0;">
      <div class="lz-section-wrap">
        ${renderPageNav({
          prev: { label: 'Thomas von Aquin',    link: `${BASE}/themen/mittelalter/thomas` },
          next: { label: 'Nikolaus von Kues',    link: `${BASE}/themen/mittelalter/nikolaus` },
        }, BASE)}
      </div>
    </section>
    ${footerHTML(this.router)}
    `;
  }
  init() { i18n.init(); initScrollReveal(); refreshScrollReveal(); initInteractive(document); initWimTabs(document); }
  cleanup() {}
}