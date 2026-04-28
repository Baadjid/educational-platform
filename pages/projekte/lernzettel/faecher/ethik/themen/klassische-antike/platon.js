// pages/projekte/lernzettel/faecher/ethik/themen/klassische-antike/platon.js
// ══════════════════════════════════════════════════════════════════
// Kapitel 2.2 — Platon (428–347 v. Chr.)
// Biographie, Der Staat, Höhlengleichnis, Ideenlehre, Kunstkritik
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

const KAP_COLOR = '#c9a87c';
const KAP_COLOR_RGB = '201, 168, 124';

const HOEHLE_TABS = [
  { key: 'situation', label: '🔗 Situation' },
  { key: 'befreiung', label: '🔓 Befreiung' },
  { key: 'rueckkehr', label: '↩️ Rückkehr' },
];

export default class PlatonPage {
  constructor(router) { this.router = router; }
  render() {
    ensureComponentsCSS();
    loadComponentCSS('pages/projekte/lernzettel/styles/sub.css');
    const el = document.createElement('div');
    el.className = 'page page-platon';
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
          <span>Platon</span>
        </nav>
        <h1 class="lz-sub-title"><em>Platon</em> — Staat &amp; Ideenlehre</h1>
        <p class="lz-sub-desc">
          Begründer der Akademie, Erfinder der Dialogform, Schöpfer der Ideenlehre —
          Platon hat die westliche Philosophie so tiefgreifend geprägt,
          dass A.&nbsp;N.&nbsp;Whitehead sie als „eine Reihe von Fußnoten zu Platon" bezeichnete.
        </p>
        ${renderTags(['Kapitel 2.2', '428–347 v. Chr.', 'Athen · Akademie', 'Ideenlehre · Höhlengleichnis · Politeia', 'Abitur 2026'])}
      </div>
    </section>

    <section class="lz-content-section">
      <div class="lz-section-wrap">
        ${renderSubhead('Biographisches')}
        <h2 class="lz-h2 reveal">Vom Aristokraten zum <em>Philosophenkönig</em></h2>
        <p class="lz-prose reveal">
          Platon (griech. Plátōn, „der Breite" — Spitzname wegen seiner Statur) wurde 428 v.&nbsp;Chr.
          in eine der vornehmsten Familien Athens geboren. Sein Onkel Kritias gehörte zu den Dreißig Tyrannen,
          sein Verwandter Charmides war ebenfalls politisch aktiv. Der junge Platon war für eine politische
          Karriere vorgesehen — bis er <strong>Sokrates</strong> begegnete, der sein Leben radikal veränderte.
        </p>
        ${renderVTimeline([
          { year: '428 v. Chr.', title: 'Geburt in Athen (oder Aigina)', text: 'Aristokratische Familie; eigentlicher Name vermutlich Aristokles' },
          { year: 'ca. 407', title: 'Begegnung mit Sokrates', text: 'Platon wird Schüler des Sokrates — Wendepunkt seines Lebens' },
          { year: '399', title: 'Tod des Sokrates', text: 'Tiefe Erschütterung; Platon verlässt Athen, reist nach Megara, Ägypten, Kyrene' },
          { year: 'ca. 389–387', title: 'Erste Sizilienreise', text: 'Besuch am Hof des Tyrannen Dionysios I. in Syrakus; angeblich als Sklave verkauft und freigekauft' },
          { year: '387', title: 'Gründung der Akademie', text: 'Erste „Universität" Europas — bestand fast 900 Jahre bis 529 n. Chr. (Schließung durch Kaiser Justinian)' },
          { year: '367 / 361', title: 'Zweite und dritte Sizilienreise', text: 'Vergeblicher Versuch, Dionysios II. zum Philosophenkönig zu erziehen' },
          { year: '347', title: 'Tod in Athen', text: 'Platon stirbt 80-jährig, angeblich bei einem Hochzeitsmahl schreibend' },
        ])}
        ${renderInfobox({
          type: '', icon: 'fas fa-info-circle',
          title: 'Die Dialogform',
          body: 'Platon schrieb ausschließlich in <strong>Dialogform</strong> — philosophische Gespräche, in denen Sokrates meist die Hauptfigur ist. Die Dialogform ist kein bloßes Stilmittel: Sie spiegelt die Überzeugung, dass Philosophie kein Besitz fester Lehrsätze ist, sondern ein <strong>lebendiger Denkprozess</strong>. Der Leser wird zum Mitdenken eingeladen, nicht zum passiven Empfangen.'
        })}
      </div>
    </section>

    <section class="lz-content-section">
      <div class="lz-section-wrap">
        ${renderSubhead('Die Ideenlehre (Zwei-Welten-Theorie)')}
        <h2 class="lz-h2 reveal">Die <em>Ideen</em> — das wahre Sein hinter dem Schein</h2>
        <p class="lz-prose reveal">
          Platons Ideenlehre ist der Versuch, den Gegensatz zwischen <strong>Heraklit</strong>
          (alles fließt) und <strong>Parmenides</strong> (das Seiende ist unveränderlich) zu lösen.
          Seine Antwort: <strong>Beide haben recht — aber auf verschiedenen Ebenen.</strong>
          Es gibt zwei Welten, zwei Seinsebenen:
        </p>
        ${renderCompare({
          titleA: 'Sinnenwelt (kósmos aisthētós)', titleB: 'Ideenwelt (kósmos noētós)',
          listA: [
            'Sichtbar, tastbar, hörbar',
            'Ständiger <strong>Wandel</strong> (Heraklit hat recht)',
            'Vielheit konkreter Einzeldinge',
            'Erkenntnis durch <strong>Sinne</strong> → nur Meinung (dóxa)',
            'Schattenhaft, unvollkommen, vergänglich',
            'Beispiel: dieses schöne Gemälde, jener gerechte Richter',
          ],
          listB: [
            'Unsichtbar, nur <strong>denkbar</strong>',
            'Ewige <strong>Unveränderlichkeit</strong> (Parmenides hat recht)',
            'Einheit vollkommener Urbilder (Ideen / eídē)',
            'Erkenntnis durch <strong>Vernunft</strong> (noûs) → echtes Wissen (epistḗmē)',
            'Vollkommen, ewig, unwandelbar',
            'Beispiel: das Schöne an sich, die Gerechtigkeit an sich',
          ],
        })}
        ${renderMerkboxGrid([
          { icon: 'fas fa-gem', title: 'Was sind Ideen (eídē / idéai)?',
            text: 'Ideen sind keine „Gedanken im Kopf", sondern objektiv existierende, ewige Urbilder. Die Idee des Schönen ist nicht ein besonders schönes Ding, sondern DAS SCHÖNE SELBST — das, woran alle schönen Dinge teilhaben (méthexis) und was sie erst schön macht.' },
          { icon: 'fas fa-sitemap', title: 'Hierarchie der Ideen',
            text: 'Die Ideen bilden eine Ordnung: An der Spitze steht die Idee des Guten (idéa toû agathoû) — „jenseits des Seins" (epékeina tēs ousías), Quelle aller Wahrheit und Erkennbarkeit. Darunter: Gerechtigkeit, Schönheit, Gleichheit, mathematische Ideen, Ideen natürlicher Arten.' },
          { icon: 'fas fa-link', title: 'Teilhabe (Méthexis)',
            text: 'Die sinnlichen Dinge „haben teil" an den Ideen: Ein schönes Gemälde ist schön, weil es an der Idee des Schönen teilhat. Ein gerechter Staat ist gerecht, weil er an der Idee der Gerechtigkeit teilhat. Die Einzeldinge sind „Abbilder" (eikónes) der Ideen.' },
          { icon: 'fas fa-brain', title: 'Anamnesis (Wiedererinnerung)',
            text: 'Die Seele hat die Ideen vor der Geburt geschaut (im präexistenten Zustand). Lernen ist Wiedererinnerung (anámnēsis): Die Sinneswahrnehmung eines schönen Dings weckt die Erinnerung an die Idee des Schönen. Im Menon zeigt Sokrates dies am Sklaven, der geometrische Wahrheiten „erinnert".' },
        ])}
        ${renderFormulaBox({
          label: 'Platon, Politeia VI, 509b',
          formula: '„Die Idee des Guten verleiht den erkannten Dingen Wahrheit<br>und dem Erkennenden die Fähigkeit zu erkennen —<br>so wie die Sonne den sichtbaren Dingen Sichtbarkeit<br>und dem Auge die Sehkraft verleiht."',
          desc: 'Das Sonnengleichnis: Die Idee des Guten verhält sich zur Ideenwelt wie die Sonne zur Sinnenwelt. Sie ist die höchste Idee — Quelle von Sein und Erkennbarkeit.'
        })}
      </div>
    </section>

    <section class="lz-content-section">
      <div class="lz-section-wrap">
        ${renderSubhead('Das Höhlengleichnis (Politeia VII, 514a–521b)')}
        <h2 class="lz-h2 reveal">Von den <em>Schatten</em> zum <em>Licht</em></h2>
        <p class="lz-prose reveal">
          Das Höhlengleichnis ist Platons berühmteste philosophische Erzählung.
          Es veranschaulicht die Ideenlehre, den Aufstieg zur Erkenntnis und die
          Aufgabe des Philosophen in der Gesellschaft.
        </p>
        <nav class="wim-tabs" id="hoehle-tabs" aria-label="Höhlengleichnis">
          ${HOEHLE_TABS.map((t, i) => `
            <button class="wim-tab${i === 0 ? ' active' : ''}" data-wim="${t.key}">
              ${t.label}
            </button>`).join('')}
        </nav>
        <div class="wim-category" data-wim-cat="situation">
          <h3 class="lz-h3">Die Gefangenen in der Höhle</h3>
          <p class="lz-prose">Menschen sind <strong>seit Geburt</strong> in einer unterirdischen Höhle gefesselt. Sie können nur geradeaus auf die Wand blicken. Hinter ihnen brennt ein Feuer; zwischen Feuer und Gefangenen verläuft eine niedrige Mauer, hinter der Träger Gegenstände vorbeitragen. Die Gefangenen sehen nur die <strong>Schatten</strong> dieser Gegenstände auf der Wand — und halten sie für die einzige Wirklichkeit.</p>
          ${renderInfobox({ type: '', icon: 'fas fa-info-circle', title: 'Deutung',
            body: 'Die Höhle = unsere <strong>Sinnenwelt</strong>. Die Schatten = unsere <strong>Sinneseindrücke</strong>. Die Fesseln = <strong>Gewohnheit und Unwissenheit</strong>. Die meisten Menschen verwechseln die Schatten (Meinungen, Alltagsüberzeugungen) mit der Wirklichkeit.' })}
        </div>
        <div class="wim-category hidden" data-wim-cat="befreiung">
          <h3 class="lz-h3">Der Aufstieg zur Erkenntnis</h3>
          <p class="lz-prose">Ein Gefangener wird <strong>befreit</strong> und zum Umdrehen gezwungen. Das Feuer blendet ihn — er leidet. Langsam erkennt er die Gegenstände hinter der Mauer als <strong>realer</strong> als die Schatten. Dann wird er nach <strong>oben</strong> geschleppt. Das Sonnenlicht schmerzt — erst sieht er Schatten, dann Spiegelungen, dann die Dinge selbst, zuletzt die <strong>Sonne</strong>.</p>
          ${renderMerkboxGrid([
            { icon: 'fas fa-shoe-prints', title: 'Stufe 1: Schatten → Gegenstände',
              text: 'Erkenntnis, dass die bisherigen Überzeugungen (Schatten) nur Abbilder sind. Schmerzhaft, weil vertraute Gewissheiten erschüttert werden. = Übergang von Meinung (dóxa) zu begründetem Wissen.' },
            { icon: 'fas fa-sun', title: 'Stufe 2: Höhle → Oberwelt',
              text: 'Aufstieg zur Ideenwelt. Die Dinge „draußen" = die Ideen. Die Sonne = die Idee des Guten. Der Befreite erkennt die wahre Wirklichkeit — das kostet Mühe, Gewöhnung, philosophische Schulung.' },
            { icon: 'fas fa-lightbulb', title: 'Stufe 3: Die Sonne selbst',
              text: 'Höchste Erkenntnis: Die Idee des Guten selbst schauen. Sie ist die Ursache alles Wahren und Schönen — „Quelle von Licht und Sichtbarkeit" in der Oberwelt, wie sie Quelle von Sein und Erkennbarkeit in der Ideenwelt ist.' },
          ])}
        </div>
        <div class="wim-category hidden" data-wim-cat="rueckkehr">
          <h3 class="lz-h3">Die Pflicht des Philosophen</h3>
          <p class="lz-prose">Der Befreite <strong>kehrt in die Höhle zurück</strong>, um den anderen von der wahren Wirklichkeit zu berichten. Doch die Höhlenbewohner halten ihn für verrückt — er stolpert in der Dunkelheit, die Schatten sind ihm fremd geworden. Sie würden ihn <strong>töten</strong>, wenn sie könnten.</p>
          ${renderInfobox({ type: 'blue', icon: 'fas fa-graduation-cap', title: 'Abitur-Kerngedanke',
            body: 'Die Rückkehr ist eine Anspielung auf <strong>Sokrates\' Schicksal</strong>: Der Philosoph, der die Wahrheit erkannt hat, wird von der Gesellschaft nicht verstanden und letztlich getötet. Zugleich formuliert Platon hier die <strong>politische Pflicht</strong> des Philosophen: Er darf sich nicht in die kontemplative Schau zurückziehen, sondern muss die Gemeinschaft zur Erkenntnis führen — auch wenn es ihn das Leben kostet.' })}
        </div>
        ${renderTable({
          headers: ['Element im Gleichnis', 'Philosophische Deutung', 'Erkenntnisstufe'],
          rows: [
            ['Schatten an der Wand',    'Sinneseindrücke, Alltagsmeinungen',        'Eikasía (Vermutung)'],
            ['Gegenstände hinter der Mauer', 'Natürliche Dinge der Sinnenwelt',     'Pístis (Überzeugung)'],
            ['Spiegelungen in der Oberwelt', 'Mathematische Gegenstände',           'Diánoia (Verstandeserkenntnis)'],
            ['Die Dinge selbst (oben)',  'Die Ideen (eídē)',                         'Nóēsis (Vernunfterkenntnis)'],
            ['Die Sonne',                'Die Idee des Guten',                      'Höchste Erkenntnis'],
          ],
          highlight: [3, 4],
        })}
      </div>
    </section>

    <section class="lz-content-section">
      <div class="lz-section-wrap">
        ${renderSubhead('Der Staat (Politeia)')}
        <h2 class="lz-h2 reveal">Drei Stände — drei <em>Seelenteile</em></h2>
        <p class="lz-prose reveal">
          In der <em>Politeia</em> entwirft Platon das Bild eines idealen Staates,
          der zugleich ein Modell der <strong>menschlichen Seele</strong> ist.
          Der Staat hat drei Stände, die Seele hat drei Teile — und beiden entspricht
          eine spezifische <strong>Tugend</strong>:
        </p>
        ${renderTable({
          headers: ['Seelenteil', 'Stand im Staat', 'Tugend', 'Metall (Erdmythos)'],
          rows: [
            ['<strong>Vernunft</strong> (logistikón)',   'Herrscher (Philosophenkönige)',  '<strong>Weisheit</strong> (sophía)',        'Gold'],
            ['<strong>Mut</strong> (thymoeidés)',         'Wächter (Krieger)',              '<strong>Tapferkeit</strong> (andreía)',     'Silber'],
            ['<strong>Begierde</strong> (epithymētikón)', 'Erwerbsstand (Bauern, Handwerker)', '<strong>Besonnenheit</strong> (sōphrosýnē)', 'Bronze/Eisen'],
          ],
          highlight: [0],
        })}
        ${renderMerkboxGrid([
          { icon: 'fas fa-crown', title: 'Philosophenherrschaft',
            text: '„Wenn nicht die Philosophen Könige werden in den Staaten oder die Könige wahrhaft philosophieren, gibt es kein Ende des Unheils" (473d). Nur wer die Idee des Guten erkannt hat, kann den Staat gerecht regieren — denn nur er weiß, was wahrhaft gut ist.' },
          { icon: 'fas fa-users', title: 'Güter- und Familiengemeinschaft der Wächter',
            text: 'Die Wächter (Herrscher + Krieger) besitzen kein Privateigentum und leben in Gütergemeinschaft. Auch die Familien sind aufgelöst: Kinder werden gemeinsam erzogen, niemand weiß, wer seine Eltern sind. Ziel: Verhinderung von Korruption und Eigeninteresse.' },
          { icon: 'fas fa-female', title: 'Gleichberechtigung der Geschlechter',
            text: 'Revolutionär für die Antike: Frauen können Philosophinnen und Wächterinnen sein, wenn sie die nötigen Fähigkeiten mitbringen. „Die Natur der Frau und des Mannes haben dieselbe Befähigung zur Bewachung des Staates" (456a).' },
          { icon: 'fas fa-book-reader', title: 'Erziehung (Paideía)',
            text: 'Das Herzstück des idealen Staates ist die Erziehung: Musik und Gymnastik in der Jugend, dann Mathematik, Geometrie, Astronomie, Dialektik. Erst mit 50 Jahren darf der durchgeprüfte Philosoph herrschen. Bildung formt die Seele.' },
        ])}
      </div>
    </section>

    <section class="lz-content-section">
      <div class="lz-section-wrap">
        ${renderSubhead('Platon und die Kunst')}
        <h2 class="lz-h2 reveal">Nachahmung der <em>Nachahmung</em></h2>
        <p class="lz-prose reveal">
          Platon vertritt eine berühmt-berüchtigte <strong>Kunstkritik</strong>: Kunst
          ist <strong>mímēsis</strong> (Nachahmung) — aber nicht Nachahmung der Ideen,
          sondern Nachahmung der <strong>Sinnenwelt</strong>, die selbst nur eine
          Nachahmung der Ideen ist. Ein Gemälde eines Bettes ist also eine
          <strong>Kopie einer Kopie</strong> — doppelt von der Wahrheit entfernt.
        </p>
        ${renderTable({
          headers: ['Ebene', 'Beispiel', 'Seinsrang'],
          rows: [
            ['<strong>Idee</strong> (eîdos)', 'Die Idee des Bettes (das, was „Bett-Sein" ausmacht)', '1. Rang: ewige Wahrheit'],
            ['<strong>Ding</strong> (Handwerk)', 'Ein konkretes Bett, gebaut vom Schreiner', '2. Rang: sinnliches Abbild der Idee'],
            ['<strong>Bild</strong> (Kunst)', 'Ein gemaltes Bett (Gemälde)', '3. Rang: Abbild des Abbilds — „Schein des Scheins"'],
          ],
          highlight: [2],
        })}
        ${renderMerkboxGrid([
          { icon: 'fas fa-theater-masks', title: 'Dichtung erregt Leidenschaften',
            text: 'Homer und die Tragödiendichter sprechen den begehrenden und emotionalen Seelenteil an — nicht die Vernunft. Sie zeigen Helden, die weinen, klagen, sich unkontrolliert verhalten. Das schwächt die Herrschaft der Vernunft über die Seele.' },
          { icon: 'fas fa-ban', title: 'Dichterverbannung',
            text: 'Im idealen Staat sollen Homer und die Tragödiendichter verbannt werden (Politeia X, 595a–608b). Zugelassen werden nur Hymnen an die Götter und Loblieder auf die Tugend. Ein erschreckendes Beispiel für die politischen Konsequenzen von Platons Philosophie.' },
        ])}
        ${renderInfobox({
          type: 'warning', icon: 'fas fa-exclamation-triangle',
          title: 'Kritische Perspektive — Prüfungsrelevant',
          body: 'Platons Kunstkritik wird häufig als <strong>Zensur</strong> kritisiert. Aristoteles wird in der <em>Poetik</em> antworten: Kunst ist nicht schädlich, sondern therapeutisch — die Tragödie bewirkt <strong>Kátharsis</strong> (Reinigung) der Emotionen. Auch die Romantik, Nietzsche und die moderne Ästhetik widersprechen Platon fundamental: Kunst erschließt Wahrheit auf eigene Weise.'
        })}
      </div>
    </section>

    <section class="lz-content-section">
      <div class="lz-section-wrap">
        ${renderSubhead('Testfragen — Abiturniveau')}
        ${renderAccordion([
          { title: '1. Erläutern Sie Platons Ideenlehre: Was sind „Ideen" und wie verhalten sie sich zu den Sinnesdingen?',
            content: '<p class="lz-prose">Platons <strong>Ideen</strong> (eídē / idéai) sind <strong>nicht</strong> Vorstellungen im Kopf, sondern <strong>objektiv existierende, ewige, unveränderliche Urbilder</strong>. Die Idee des Schönen ist DAS SCHÖNE SELBST — vollkommen, zeitlos, unsichtbar, nur durch Vernunft (noûs) erfassbar.<br><br>Die <strong>Sinnesdinge</strong> verhalten sich zu den Ideen wie Schatten zum Original: Sie <strong>haben teil</strong> (méthexis) an den Ideen und sind daher mehr oder weniger schöne, gerechte, gleiche Dinge — aber nie vollkommen. Ein schönes Gemälde altert und verblasst; die Idee des Schönen bleibt ewig. Die Ideen sind die <strong>Ursache</strong> dafür, dass wir Einzeldinge als „schön", „gerecht" etc. erkennen — sie sind das gemeinsame Wesen (ousia) hinter der Vielfalt.<br><br>Platon löst damit das Heraklit-Parmenides-Problem: Die <strong>Sinnenwelt wandelt sich</strong> (Heraklit hat recht auf dieser Ebene), die <strong>Ideenwelt ist ewig</strong> (Parmenides hat recht auf jener Ebene). Erkenntnis im vollen Sinn ist nur von den Ideen möglich — von den Sinnesdingen nur Meinung (dóxa).</p>' },
          { title: '2. Interpretieren Sie das Höhlengleichnis Schritt für Schritt und benennen Sie die philosophischen Deutungsebenen.',
            content: '<p class="lz-prose"><strong>Situation:</strong> Gefangene sehen nur Schatten an der Wand → alltägliche Sinneswahrnehmung, ungeprüfte Meinungen. Sie halten die Schatten für die Realität → <strong>Eikasía</strong> (Vermutung).<br><br><strong>Befreiung:</strong> Ein Gefangener dreht sich um, sieht das Feuer und die Gegenstände → Erkenntnis, dass die bisherigen Meinungen nur Abbilder sind → <strong>Pístis</strong> (Überzeugung). Schmerzhaft: Der Übergang von Gewohnheit zu Einsicht tut weh.<br><br><strong>Aufstieg:</strong> Der Befreite wird nach oben geschleppt → Aufstieg aus der Sinnenwelt in die Ideenwelt. Er sieht erst Schatten, dann Spiegelungen (= <strong>Diánoia</strong>, mathematische Erkenntnis), schließlich die Dinge selbst (= <strong>Nóēsis</strong>, Ideenerkenntnis) und zuletzt die Sonne (= <strong>Idee des Guten</strong>).<br><br><strong>Rückkehr:</strong> Der Befreite kehrt in die Höhle zurück, stolpert, wird verspottet → der Philosoph in der Gesellschaft. Anspielung auf Sokrates: Wer die Wahrheit sagt, wird nicht verstanden. Aber die Rückkehr ist <strong>Pflicht</strong> — der Philosoph muss die Gemeinschaft zur Erkenntnis führen.<br><br><strong>Deutungsebenen:</strong> (1) <strong>Ontologisch:</strong> Zwei Seinsstufen — Schein und Wahrheit. (2) <strong>Erkenntnistheoretisch:</strong> Vier Stufen der Erkenntnis. (3) <strong>Politisch:</strong> Der Philosoph muss herrschen, auch gegen den Widerstand der Masse. (4) <strong>Pädagogisch:</strong> Bildung ist Hinwendung der Seele zum Licht — nicht Einfüllen von Wissen, sondern Umlenkung des Blicks.</p>' },
          { title: '3. Warum sollen nach Platon die Philosophen herrschen? Welche Argumente sprechen dafür und dagegen?',
            content: '<p class="lz-prose"><strong>Platons Argumente:</strong><br>(1) Nur Philosophen haben die <strong>Idee des Guten</strong> erkannt — sie wissen, was wahrhaft gerecht, gut und schön ist. Politiker ohne dieses Wissen regieren „blind".<br>(2) Philosophen streben nicht nach Macht, Geld oder Ehre — gerade deshalb sind sie die besten Herrscher. Wer die Macht nicht will, missbraucht sie nicht.<br>(3) Das Schiffsgleichnis (Politeia VI): Den Staat regieren ist wie ein Schiff steuern — es braucht Sachverstand (Navigation/Philosophie), nicht Mehrheitsentscheid der Passagiere.<br><br><strong>Gegenargumente:</strong><br>(1) <strong>Protagoras:</strong> Politische Kompetenz ist allen Menschen gegeben — Demokratie, nicht Philosophenherrschaft, ist legitim.<br>(2) <strong>Aristoteles:</strong> Praktische Klugheit (phrónēsis) ist wichtiger als theoretisches Wissen. Gute Politik braucht Erfahrung, nicht nur Ideenerkenntnis.<br>(3) <strong>Popper:</strong> Platons Idealstaat ist ein <strong>totalitäres Modell</strong> (Die offene Gesellschaft, 1945) — Philosophenherrschaft legitimiert Diktatur im Namen der „Wahrheit".<br>(4) <strong>Historische Erfahrung:</strong> Platons eigene Versuche, Dionysios II. in Syrakus zum Philosophenkönig zu erziehen, scheiterten kläglich.</p>' },
          { title: '4. Vergleichen Sie Platons Kunstkritik mit Aristoteles\' Verteidigung der Kunst.',
            content: '<p class="lz-prose"><strong>Platon (Politeia X):</strong> Kunst ist <strong>Nachahmung der Nachahmung</strong> (mímēsis mímēseōs) — doppelt von der Wahrheit entfernt. Ein gemaltes Bett ist Abbild eines gebauten Bettes, das seinerseits Abbild der Idee „Bett" ist. Zudem erregt Kunst <strong>Leidenschaften</strong> (Angst, Mitleid, Begierde) und schwächt die Vernunftherrschaft über die Seele. Dichter müssen aus dem idealen Staat verbannt werden.<br><br><strong>Aristoteles (Poetik):</strong> Kunst ist nicht schädlich, sondern <strong>therapeutisch</strong>. Die Tragödie bewirkt <strong>Kátharsis</strong> — Reinigung und Klärung von Furcht (phóbos) und Mitleid (éleos). Durch das Miterleben fiktiver Schicksale werden die Emotionen nicht aufgestachelt, sondern <strong>geordnet</strong>. Zudem ahmt die Kunst das <strong>Allgemeine</strong> nach (was geschehen könnte), während die Geschichtsschreibung nur das Besondere (was geschehen ist) berichtet — Dichtung ist daher „philosophischer als Geschichtsschreibung".<br><br><strong>Bewertung:</strong> Platon beurteilt Kunst nach dem Maßstab der <strong>Wahrheit</strong> (und findet sie defizitär), Aristoteles nach dem Maßstab der <strong>Wirkung</strong> (und findet sie heilsam). Die Debatte ist bis heute offen: Ist Kunst ein Weg zur Wahrheit (Heidegger, Adorno) oder ein Weg zur emotionalen Gesundheit (Therapeutische Ästhetik)?</p>' },
        ])}
      </div>
    </section>

    <section class="lz-content-section" style="padding-top:0;">
      <div class="lz-section-wrap">
        ${renderPageNav({
          prev: { label: 'Sokrates', link: `${BASE}/themen/klassische-antike/sokrates` },
          next: { label: 'Aristoteles', link: `${BASE}/themen/klassische-antike/aristoteles` },
        }, BASE)}
      </div>
    </section>
    ${footerHTML(this.router)}
    `;
  }
  init() { i18n.init(); initScrollReveal(); refreshScrollReveal(); initInteractive(document); initWimTabs(document); }
  cleanup() {}
}