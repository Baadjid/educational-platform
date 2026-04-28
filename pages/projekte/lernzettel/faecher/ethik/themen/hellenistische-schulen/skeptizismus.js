// pages/projekte/lernzettel/faecher/ethik/themen/hellenistische-schulen/skeptizismus.js
// ══════════════════════════════════════════════════════════════════
// Kapitel 3.3 — Skeptizismus
// Pyrrhon, Akademische Skepsis, Sextus Empiricus
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

const KAP_COLOR = '#2e8b8b';
const KAP_COLOR_RGB = '46, 139, 139';

const AKAD_SKEPTIK_TABS = [
  { key: 'arkesilaos', label: 'Arkesilaos' },
  { key: 'karneades',  label: 'Karneades' },
];

export default class SkeptizismusPage {
  constructor(router) { this.router = router; }
  render() {
    ensureComponentsCSS();
    loadComponentCSS('pages/projekte/lernzettel/styles/sub.css');
    const el = document.createElement('div');
    el.className = 'page page-skeptizismus';
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
          <span>Skeptizismus</span>
        </nav>
        <h1 class="lz-sub-title">Der antike <em>Skeptizismus</em></h1>
        <p class="lz-sub-desc">
          Die radikalste Position der hellenistischen Philosophie:
          Kein sicheres Wissen ist möglich — und gerade deshalb
          kann die Seele zur Ruhe kommen. Urteilsenthaltung als Weg zur Gelassenheit.
        </p>
        ${renderTags(['Kapitel 3.3', 'ca. 360 v. Chr. – 200 n. Chr.', 'Elis · Athen · Alexandria', 'Epoché · Isosthénie · Ataraxía', 'Abitur 2026'])}
      </div>
    </section>

    <section class="lz-content-section">
      <div class="lz-section-wrap">
        ${renderSubhead('Was ist Skeptizismus?')}
        <h2 class="lz-h2 reveal">Skepsis — die Kunst des <em>Untersuchens</em></h2>
        <p class="lz-prose reveal">
          Das griechische Wort <strong>sképsis</strong> (σκέψις) bedeutet nicht
          „Zweifel" im modernen Sinn, sondern <strong>„Untersuchung", „Prüfung",
          „Betrachtung"</strong>. Der Skeptiker ist jemand, der <em>sucht</em> —
          und nie aufhört zu suchen, weil er keine endgültige Antwort findet.
          Im Gegensatz zum Dogmatiker, der behauptet zu wissen, und zum
          Akademiker, der behauptet, dass Wissen unmöglich sei, sagt der
          pyrrhonische Skeptiker: <strong>„Ich suche noch."</strong>
        </p>
        ${renderCompare({
          titleA: 'Pyrrhonische Skepsis', titleB: 'Akademische Skepsis',
          listA: [
            'Begründer: <strong>Pyrrhon von Elis</strong> (ca. 362–270 v. Chr.)',
            'Systematisiert von <strong>Sextus Empiricus</strong> (2. Jh. n. Chr.)',
            '<strong>Epoché:</strong> Urteilsenthaltung zu <em>allem</em>',
            'Sucht weiter — „ich habe noch nicht gefunden"',
            'Ziel: <strong>Ataraxía</strong> (Seelenruhe) durch Nicht-Urteilen',
            'Keine positive Lehre — nur eine <strong>Fähigkeit</strong> (dýnamis)',
          ],
          listB: [
            'Vertreter: <strong>Arkesilaos</strong> (ca. 316–241) und <strong>Karneades</strong> (214–129)',
            'In Platons <strong>Akademie</strong> entwickelt',
            '<strong>Akatalēpsía:</strong> Nichts kann sicher erkannt werden',
            'Behauptet positiv: <strong>Wissen ist unmöglich</strong>',
            'Ziel: <strong>Wahrscheinlichkeit</strong> (pithanón) als Handlungskriterium',
            'Stärkere These: Kritik an stoischer Erkenntnistheorie',
          ],
        })}
        ${renderInfobox({
          type: '', icon: 'fas fa-info-circle',
          title: 'Skepsis ≠ Negativismus',
          body: 'Der antike Skeptiker ist <strong>kein Nihilist</strong> und kein Zyniker. Er leugnet nicht die Existenz der Welt, er bestreitet nicht, dass die Dinge <em>erscheinen</em>. Er sagt nur: Ich kann nicht mit Sicherheit wissen, <strong>wie die Dinge wirklich sind</strong> (jenseits meiner Wahrnehmung). Und gerade dieses Nicht-Wissen-Müssen befreit ihn von der Unruhe des Dogmatikers.'
        })}
      </div>
    </section>

    <section class="lz-content-section">
      <div class="lz-section-wrap">
        ${renderSubhead('Pyrrhon von Elis (ca. 362–270 v. Chr.)')}
        <h2 class="lz-h2 reveal">Der <em>Begründer</em> — Leben ohne Urteil</h2>
        <p class="lz-prose reveal">
          Pyrrhon aus Elis begleitete Alexander den Großen auf seinem Feldzug nach
          Indien, wo er angeblich indische Gymnosophisten (nackte Weise) und
          persische Mager traf. Diese Begegnung mit völlig fremden Weltanschauungen
          soll seinen Relativismus verstärkt haben: Wenn verschiedene Kulturen
          entgegengesetzte Überzeugungen über Götter, Moral und Natur haben,
          wer hat dann recht? <strong>Vielleicht niemand.</strong>
        </p>
        ${renderMerkboxGrid([
          { icon: 'fas fa-question', title: 'Drei Grundfragen (nach Timon)',
            text: '(1) Wie sind die Dinge beschaffen? → Unerkennbar (ádēla). (2) Wie sollen wir uns zu ihnen verhalten? → Urteilsenthaltung (epoché). (3) Was folgt daraus? → Seelenruhe (ataraxía). Die drei Fragen bilden den Kern der pyrrhonischen Methode.' },
          { icon: 'fas fa-ban', title: 'Epoché (Urteilsenthaltung)',
            text: 'Der Skeptiker enthält sich jedes Urteils über die verborgene Natur der Dinge. Er sagt nicht „Honig IST süß" (ontologische Aussage), sondern „Honig ERSCHEINT mir süß" (phänomenale Aussage). Die Erscheinung wird akzeptiert, das Urteil über die Realität suspendiert.' },
          { icon: 'fas fa-spa', title: 'Ataraxía (Seelenruhe)',
            text: 'Die Epoché führt — überraschenderweise — zur Seelenruhe. Wer nicht mehr urteilt, ob etwas gut oder schlecht IST, leidet nicht mehr unter falschen Erwartungen. Die Ataraxía stellt sich ein „wie der Schatten dem Körper folgt" — nicht als Ziel, sondern als Nebenprodukt des Nicht-Urteilens.' },
          { icon: 'fas fa-balance-scale', title: 'Isosthénie (Gleichgewichtigkeit)',
            text: 'Zu jeder These lassen sich gleich starke Gegenargumente finden. „Dem Honig gegenüber kann ich nicht sagen, ob er süß IST — für den Gesunden ja, für den Kranken nein." Jedes Argument hat ein gleichwertiges Gegenargument → Gleichgewicht → keine Entscheidung möglich → Epoché.' },
        ])}
        ${renderFormulaBox({
          label: 'Sextus Empiricus, Pyrrhonische Grundzüge I, 12',
          formula: '„Die Skepsis ist die Fähigkeit (dýnamis),<br>Erscheinungen und Gedanken einander auf jede Weise entgegenzusetzen;<br>von da gelangen wir über die Gleichwertigkeit (isosthénie)<br>der entgegengesetzten Dinge und Argumente<br>zuerst zur Urteilsenthaltung (epoché),<br>dann zur Seelenruhe (ataraxía)."',
          desc: 'Die vollständige Definition der pyrrhonischen Skepsis: Sie ist keine Lehre, sondern eine Fähigkeit — die Fähigkeit, zu jedem Argument ein Gegenargument zu finden.'
        })}
      </div>
    </section>

    <section class="lz-content-section">
      <div class="lz-section-wrap">
        ${renderSubhead('Die Zehn Tropen des Ainesidemos')}
        <h2 class="lz-h2 reveal">Zehn Gründe für die <em>Urteilsenthaltung</em></h2>
        ${renderTable({
          headers: ['Nr.', 'Tropos', 'Argument', 'Beispiel'],
          rows: [
            ['1', '<strong>Verschiedenheit der Lebewesen</strong>', 'Verschiedene Sinnesorgane → verschiedene Wahrnehmungen', 'Bienen sehen UV-Licht, Fledermäuse „sehen" Ultraschall — wer nimmt „richtig" wahr?'],
            ['2', '<strong>Verschiedenheit der Menschen</strong>', 'Individuelle Unterschiede → verschiedene Urteile', 'Was dem einen schmeckt, ekelt den anderen. Was dem einen schön erscheint, ist für den anderen hässlich.'],
            ['3', '<strong>Verschiedenheit der Sinne</strong>', 'Verschiedene Sinne → widersprüchliche Eindrücke', 'Ein Gemälde sieht dreidimensional aus, fühlt sich aber flach an. Welcher Sinn hat recht?'],
            ['4', '<strong>Umstände</strong>', 'Gesundheit, Stimmung, Alter verändern die Wahrnehmung', 'Dem Kranken schmeckt alles bitter. Dem Verliebten erscheint die Geliebte schön. Wer urteilt „richtig"?'],
            ['5', '<strong>Lagen und Abstände</strong>', 'Perspektive verändert den Eindruck', 'Ein Turm sieht von fern rund aus, von nah eckig. Eine Ruderstange erscheint im Wasser gebrochen.'],
            ['6', '<strong>Beimischungen</strong>', 'Wahrnehmung ist immer vermischt mit Medium', 'Wir sehen nie das „reine" Objekt, sondern immer Objekt + Luft + Licht + Augenbeschaffenheit.'],
            ['7', '<strong>Menge und Zusammensetzung</strong>', 'Quantität verändert Qualität', 'Ein Sandkorn ist unsichtbar, ein Sandhaufen sichtbar. Wein stärkt in kleiner Menge, betäubt in großer.'],
            ['8', '<strong>Relativität</strong>', 'Alles wird relativ zu anderem wahrgenommen', 'Nichts ist „an sich" groß oder klein, warm oder kalt — nur im Vergleich mit anderem.'],
            ['9', '<strong>Häufigkeit</strong>', 'Gewöhnung verändert die Bewertung', 'Erdbeben erschrecken den Erstlings-Erlebenden, nicht den Anwohner. Die Sonne ist alltäglich — wäre sie selten, wäre sie ein Wunder.'],
            ['10', '<strong>Verschiedene Sitten und Gesetze</strong>', 'Kulturen haben entgegengesetzte Normen', 'Ägypter heiraten Geschwister, Griechen verbieten es. Wer hat „recht"? Kein neutraler Standpunkt möglich.'],
          ],
          highlight: [7, 9],
        })}
        ${renderInfobox({
          type: 'warning', icon: 'fas fa-exclamation-triangle',
          title: 'Gemeinsame Struktur aller Tropen',
          body: 'Alle zehn Tropen haben <strong>dieselbe Grundstruktur</strong>: (1) Die Erscheinungen variieren je nach Subjekt, Situation oder Perspektive. (2) Wir haben keinen <strong>neutralen Standpunkt</strong>, von dem aus wir entscheiden könnten, welche Erscheinung die „richtige" ist. (3) Also müssen wir das Urteil über die wahre Natur der Dinge <strong>suspendieren</strong> (Epoché). In der Klausur: Die Tropen kennen, die gemeinsame Struktur erklären und mindestens 3 Beispiele nennen können.'
        })}
      </div>
    </section>

    <section class="lz-content-section">
      <div class="lz-section-wrap">
        ${renderSubhead('Die Akademische Skepsis')}
        <h2 class="lz-h2 reveal">Arkesilaos und Karneades — Skepsis in <em>Platons Akademie</em></h2>
        <nav class="wim-tabs" id="akad-skepsis-tabs" aria-label="Akademische Skepsis">
          ${AKAD_SKEPTIK_TABS.map((t, i) => `
            <button class="wim-tab${i === 0 ? ' active' : ''}" data-wim="${t.key}">
              ${t.label}
            </button>`).join('')}
        </nav>
        <div class="wim-category" data-wim-cat="arkesilaos">
          <h3 class="lz-h3">Arkesilaos — Gegen die Stoa</h3>
          <p class="lz-prose">Arkesilaos' Hauptgegner war die stoische Erkenntnistheorie. Die Stoa behauptete: Es gibt <strong>kataleptische Vorstellungen</strong> (phantasíai katalēptikaí) — Sinneseindrücke, die so klar und deutlich sind, dass sie unmöglich falsch sein können. Sie tragen gleichsam das „Siegel der Wahrheit" in sich.</p>
          ${renderMerkboxGrid([
            { icon: 'fas fa-times-circle', title: 'Akatalēpsía (Unerfassbarkeit)',
              text: 'Arkesilaos argumentiert: Es gibt KEINE Vorstellung, die so klar ist, dass nicht eine falsche ebenso klar sein könnte. Traum, Wahnsinn, Illusion erzeugen Vorstellungen, die sich von „wahren" nicht unterscheiden lassen. Also gibt es kein sicheres Erkennungskriterium.' },
            { icon: 'fas fa-balance-scale', title: 'Gegen den Stoiker Zenon',
              text: 'Wenn der Weise nur dem Sicheren zustimmt (wie die Stoa behauptet) und nichts sicher ist (wie Arkesilaos zeigt), dann darf der Weise GAR NICHTS behaupten. Entweder gibt er sein Kriterium auf — oder er behauptet nichts. Beides ist für die Stoa fatal.' },
          ])}
        </div>
        <div class="wim-category hidden" data-wim-cat="karneades">
          <h3 class="lz-h3">Karneades — Wahrscheinlichkeit als Handlungsbasis</h3>
          <p class="lz-prose">Karneades löste ein praktisches Problem der Skepsis: <strong>Wie kann man handeln, ohne zu wissen?</strong> Seine Antwort: durch <strong>Wahrscheinlichkeit</strong> (tò pithanón). Wir können nicht wissen, ob eine Vorstellung wahr ist — aber wir können beurteilen, wie <strong>plausibel</strong> sie ist.</p>
          ${renderMerkboxGrid([
            { icon: 'fas fa-chart-bar', title: 'Drei Grade der Plausibilität',
              text: '(1) Pithanḗ phantasía — plausible Vorstellung (Grundlage für vorläufiges Handeln). (2) Aperíspastos — plausibel UND unwidersprochen von anderen Vorstellungen. (3) Diexōdeuménē — plausibel, unwidersprochen UND im Detail geprüft (höchster Grad). Keine Stufe erreicht Gewissheit — aber je höher, desto vernünftiger die Entscheidung.' },
            { icon: 'fas fa-gavel', title: 'Berühmte Gesandtschaft (155 v. Chr.)',
              text: 'Karneades hielt in Rom an zwei aufeinanderfolgenden Tagen Vorträge: Am ersten Tag argumentierte er überzeugend FÜR die Gerechtigkeit, am zweiten Tag ebenso überzeugend DAGEGEN. Cato der Ältere war entsetzt und forderte die Ausweisung der Philosophen aus Rom. Karneades demonstrierte: Zu jeder Position gibt es gleich starke Gegenargumente.' },
          ])}
        </div>
      </div>
    </section>

    <section class="lz-content-section">
      <div class="lz-section-wrap">
        ${renderSubhead('Sextus Empiricus (2. Jh. n. Chr.)')}
        <h2 class="lz-h2 reveal">Der <em>Systematiker</em> der Skepsis</h2>
        <p class="lz-prose reveal">
          Sextus Empiricus war Arzt und Philosoph — sein Beiname „Empiricus"
          verweist auf die empirische Ärzteschaft, die ohne dogmatische Theorien
          auskommt und sich auf Erfahrung stützt. Er verfasste die ausführlichste
          erhaltene Darstellung der pyrrhonischen Skepsis:
          die <em>Pyrrhonischen Grundzüge</em> (3 Bücher) und
          <em>Gegen die Dogmatiker</em> (11 Bücher).
        </p>
        ${renderMerkboxGrid([
          { icon: 'fas fa-road', title: 'Drei Wege der Philosophie',
            text: 'Sextus unterscheidet: (1) Dogmatiker (Stoiker, Epikureer, Platoniker) — sie behaupten, die Wahrheit gefunden zu haben. (2) Akademische Skeptiker — sie behaupten, die Wahrheit sei unauffindbar. (3) Pyrrhonische Skeptiker — sie suchen weiter. Nur die dritte Position ist konsequent: Auch „Wissen ist unmöglich" ist ein dogmatisches Urteil.' },
          { icon: 'fas fa-life-ring', title: 'Lebensregeln ohne Dogma',
            text: 'Der Skeptiker lebt nach vier Regeln: (1) Natur — folge den natürlichen Bedürfnissen (Hunger, Durst). (2) Zwang der Affekte — folge den unvermeidlichen Empfindungen. (3) Tradition — folge den Gesetzen und Sitten deines Landes. (4) Handwerkliche Unterweisung — übe dein Handwerk nach bewährter Praxis aus.' },
          { icon: 'fas fa-pills', title: 'Pharmakon — Skepsis als Medizin',
            text: 'Die skeptischen Argumente sind wie ein Abführmittel (kathartikón): Sie beseitigen die dogmatischen Überzeugungen — und beseitigen sich dann selbst. Die Skepsis ist keine Lehre, die man „hat", sondern eine therapeutische Aktivität, die die Seele von der Krankheit des Dogmatismus reinigt.' },
        ])}
        ${renderFormulaBox({
          label: 'Sextus Empiricus, Pyrrhonische Grundzüge I, 206',
          formula: '„Die skeptischen Argumente verhalten sich wie das Feuer:<br>Sie verzehren den Brennstoff und vernichten sich dann selbst.<br>Wie ein Abführmittel sich zusammen mit dem Unrat<br>aus dem Körper entfernt."',
          desc: 'Skepsis als sich selbst aufhebende Methode: Die Argumente gegen das Dogma sind selbst keine Dogmen — sie lösen sich auf, nachdem sie ihre Arbeit getan haben.'
        })}
      </div>
    </section>

    <section class="lz-content-section">
      <div class="lz-section-wrap">
        ${renderSubhead('Drei hellenistische Wege zur Seelenruhe')}
        ${renderTable({
          headers: ['', 'Epikureismus', 'Stoa', 'Skeptizismus'],
          rows: [
            ['<strong>Ziel</strong>',       'Ataraxía + Aponía',                    'Apátheia (Affektfreiheit)',        'Ataraxía durch Epoché'],
            ['<strong>Methode</strong>',     'Bedürfnisreduktion',                  'Urteilskorrektur (Affekte = falsche Urteile)', 'Urteilsenthaltung'],
            ['<strong>Wahrheit</strong>',    'Atomismus ist wahr (Dogma)',           'Logos ist wahr (Dogma)',           'Keine Wahrheitsbehauptung'],
            ['<strong>Ethik</strong>',       'Lust = höchstes Gut',                 'Tugend = einziges Gut',            'Keine ethische Theorie — folge Tradition und Natur'],
            ['<strong>Götter</strong>',      'Existieren, greifen nicht ein',        'Gott = Weltvernunft, lenkt alles','Unentscheidbar — Epoché'],
            ['<strong>Tod</strong>',         '„Geht uns nichts an"',                'Adiaphoron (gleichgültig)',        'Kein Urteil möglich'],
            ['<strong>Politik</strong>',     '„Lebe im Verborgenen"',               'Aktives Engagement (Pflicht)',     'Folge den Gesetzen deines Landes'],
          ],
          highlight: [0, 1],
        })}
      </div>
    </section>

    <section class="lz-content-section">
      <div class="lz-section-wrap">
        ${renderSubhead('Testfragen — Abiturniveau')}
        ${renderAccordion([
          { title: '1. Erläutern Sie den Dreischritt: Isosthénie → Epoché → Ataraxía. Warum führt Nicht-Wissen zur Seelenruhe?',
            content: '<p class="lz-prose"><strong>Isosthénie (Gleichwertigkeit der Argumente):</strong> Zu jeder These (z.B. „Honig ist süß") lässt sich ein gleich starkes Gegenargument finden (z.B. „Für den Kranken ist Honig bitter"). Es gibt keinen neutralen Standpunkt, von dem aus man entscheiden könnte, welche Wahrnehmung die „richtige" ist.<br><br><strong>Epoché (Urteilsenthaltung):</strong> Da die Argumente gleichwertig sind, gibt es keinen rationalen Grund, der einer Seite zuzustimmen. Der Skeptiker suspendiert sein Urteil — er sagt nicht „Honig ist süß", sondern „Honig erscheint mir jetzt süß".<br><br><strong>Ataraxía (Seelenruhe):</strong> Die Seelenruhe ergibt sich als <strong>unerwartetes Nebenprodukt</strong>: Wer nicht urteilt, ob etwas „wirklich" gut oder schlecht ist, wird von den Dingen nicht erschüttert. Der Schmerz (z.B. Zahnschmerz) wird empfunden, aber das <strong>Urteil</strong> „Zahnschmerz ist ein schreckliches Übel" wird suspendiert. Ohne dieses Urteil bleibt der Schmerz — aber das <strong>Leiden am Schmerz</strong> (die seelische Unruhe) verschwindet.<br><br><strong>Paradox:</strong> Der Skeptiker sucht Wahrheit, findet sie nicht, gibt die Suche nach sicherem Wissen auf — und findet dabei die Seelenruhe, die andere vergeblich durch Dogmen suchen. „Wie der Maler Apelles, der sein Bild nicht vollenden konnte, wütend den Schwamm gegen die Leinwand warf — und zufällig genau den Effekt erzielte, den er gesucht hatte" (Sextus, PH I, 28).</p>' },
          { title: '2. Was unterscheidet den pyrrhonischen vom akademischen Skeptiker?',
            content: '<p class="lz-prose"><strong>Pyrrhonischer Skeptiker:</strong> Enthält sich <strong>jedes</strong> Urteils — auch des Urteils „Wissen ist unmöglich". Er sagt: „Ich suche noch" (zetētikós). Er behauptet nichts Positives, auch nicht die Unmöglichkeit des Wissens. Er hat keine Lehre, sondern eine <strong>Fähigkeit</strong> (dýnamis) — die Fähigkeit, zu jedem Argument ein Gegenargument zu finden.<br><br><strong>Akademischer Skeptiker:</strong> Behauptet positiv: „<strong>Sicheres Wissen ist unmöglich</strong>" (akatalēpsía). Das ist selbst eine <strong>dogmatische These</strong> — denn sie beansprucht, etwas Sicheres über die Grenzen des Wissens zu wissen. Karneades führt als Alternative die Wahrscheinlichkeit (pithanón) ein: Wir können zwar nicht wissen, aber plausible Annahmen treffen.<br><br><strong>Sextus\' Kritik an der Akademie:</strong> Die akademische Position ist <strong>selbstwidersprüchlich</strong>: „Wissen ist unmöglich" ist selbst ein Wissensanspruch. Wer behauptet, nichts zu wissen, behauptet zumindest dies zu wissen. Der pyrrhonische Skeptiker vermeidet dieses Problem, indem er <strong>gar nichts</strong> behauptet — auch nicht die Unmöglichkeit des Wissens.</p>' },
          { title: '3. Wie lebt der Skeptiker, wenn er nichts weiß? Erläutern Sie das Problem des Handlungskriteriums.',
            content: '<p class="lz-prose"><strong>Das Problem:</strong> Wenn der Skeptiker kein Urteil fällt, wie kann er dann <strong>handeln</strong>? Handlung setzt Entscheidung voraus, Entscheidung setzt Bewertung voraus, Bewertung setzt Urteil voraus. Ohne Urteile müsste der Skeptiker bewegungslos dastehen — der „Apraxia-Einwand" (Untätigkeitseinwand), den die Stoiker erhoben.<br><br><strong>Sextus\' Antwort — Vier Lebensregeln:</strong><br>(1) <strong>Natur (phýsis):</strong> Folge den natürlichen Bedürfnissen — Hunger, Durst, Schlafbedürfnis. Diese erfordern kein Urteil, sondern nur Reaktion auf Empfindungen.<br>(2) <strong>Zwang der Affekte (páthos):</strong> Folge den unvermeidlichen Empfindungen — Schmerz meiden, Wohlbefinden suchen. Nicht als Urteil über die Natur der Dinge, sondern als natürliche Reaktion.<br>(3) <strong>Tradition und Gesetz (nómos):</strong> Folge den Sitten und Gesetzen deines Landes — nicht weil sie „wahr" sind, sondern weil sie den sozialen Rahmen bilden, in dem du lebst.<br>(4) <strong>Handwerkliche Kompetenz (téchnē):</strong> Übe dein Handwerk nach bewährter Praxis aus — der Arzt behandelt nach Erfahrung, nicht nach metaphysischen Theorien.<br><br><strong>Pointe:</strong> Der Skeptiker handelt wie alle anderen auch — er <strong>lebt nach den Erscheinungen</strong> (katà tà phainómena). Er fällt nur keine <strong>metaphysischen Urteile</strong> über die verborgene Natur der Dinge. Philosophie und Alltag werden entkoppelt: Man kann philosophisch an allem zweifeln und praktisch normal leben.</p>' },
          { title: '4. Vergleichen Sie Descartes\' methodischen Zweifel mit der antiken Skepsis.',
            content: '<p class="lz-prose"><strong>Gemeinsamkeit:</strong> Beide nutzen skeptische Argumente — Sinnesttäuschung, Traum, systematischer Irrtum — um die Verlässlichkeit unserer Erkenntnis in Frage zu stellen. Beide fragen: Gibt es <strong>irgendetwas</strong>, das gegen jeden Zweifel immun ist?<br><br><strong>Unterschied im Ziel:</strong> Der antike Skeptiker (Pyrrhon, Sextus) zweifelt, um <strong>beim Zweifel zu bleiben</strong>: Epoché als Dauerzustand, der zur Ataraxía führt. Er will kein Fundament finden — er will sich vom Bedürfnis nach einem Fundament befreien.<br><br>Descartes zweifelt, um <strong>den Zweifel zu überwinden</strong>: Der methodische Zweifel ist ein Werkzeug, um ein <strong>unbezweifelbares Fundament</strong> zu finden — das Cogito ergo sum. Der Zweifel ist Mittel, nicht Ziel. Descartes will sichere Erkenntnis aufbauen, die Skeptiker wollen zeigen, dass es keine gibt.<br><br><strong>Unterschied in der Konsequenz:</strong> Descartes gelangt vom Cogito zu Gott, von Gott zur Vertrauenswürdigkeit der Vernunft, von dort zur Naturwissenschaft — er <strong>überwindet</strong> die Skepsis. Pyrrhon gelangt vom Zweifel zur Epoché, von der Epoché zur Ataraxía — er <strong>verbleibt</strong> in der Skepsis.<br><br><strong>Humes Kommentar:</strong> Hume argumentiert, dass Descartes\' Überwindung der Skepsis <strong>scheitert</strong> — der Gottesbeweis ist zirkulär (er braucht klare und deutliche Ideen, deren Zuverlässigkeit er durch Gott beweisen will). Hume kehrt daher zu einer „gemäßigten Skepsis" (mitigated scepticism) zurück — eine Art modernisierter Pyrrhonismus.</p>' },
        ])}
      </div>
    </section>

    <section class="lz-content-section" style="padding-top:0;">
      <div class="lz-section-wrap">
        ${renderPageNav({
          prev: { label: 'Die Stoa', link: `${BASE}/themen/hellenistische-schulen/stoa` },
          next: { label: 'Plotin',   link: `${BASE}/themen/neuplatonismus-patristik/plotin` },
        }, BASE)}
      </div>
    </section>
    ${footerHTML(this.router)}
    `;
  }
  init() { i18n.init(); initScrollReveal(); refreshScrollReveal(); initInteractive(document); initWimTabs(document); }
  cleanup() {}
}