// pages/projekte/lernzettel/faecher/ethik/themen/sophisten.js
// ══════════════════════════════════════════════════════════════════
// Kapitel 1.4 — Die Sophisten
// Protagoras, Gorgias, Physis-Nomos-Debatte
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
  initInteractive,
  loadComponentCSS,
} from '../../../../js/components/components.js';
import { renderPageNav } from '../../../../js/components/subnav.js';
import { COLOR, COLOR_RGB, BASE } from '../../philosophie.js';

const KAP_COLOR     = '#7a9e7e';
const KAP_COLOR_RGB = '122, 158, 126';

export default class SophistenPage {
  constructor(router) { this.router = router; }

  render() {
    ensureComponentsCSS();
    loadComponentCSS('pages/projekte/lernzettel/styles/sub.css');
    const el = document.createElement('div');
    el.className = 'page page-sophisten';
    el.style.setProperty('--lz-accent',      COLOR);
    el.style.setProperty('--lz-accent-rgb',  COLOR_RGB);
    el.style.setProperty('--kap-color',      KAP_COLOR);
    el.style.setProperty('--kap-color-rgb',  KAP_COLOR_RGB);
    el.innerHTML = this._html();
    return el;
  }

  _html() {
    return `

    <!-- ════════════ HERO ════════════ -->
    <section class="lz-sub-hero">
      <div class="lz-sub-hero-orb"></div>
      <div class="lz-sub-hero-inner reveal">
        <nav class="lz-sub-breadcrumb">
          <button class="lz-bread-link" data-link="/projekte/lernzettel">Lernzettel</button>
          <i class="fas fa-chevron-right"></i>
          <button class="lz-bread-link" data-link="${BASE}">Philosophie</button>
          <i class="fas fa-chevron-right"></i>
          <span>Die Sophisten</span>
        </nav>
        <h1 class="lz-sub-title">Die <em>Sophisten</em></h1>
        <p class="lz-sub-desc">
          Die Wende zum Menschen: Nicht mehr die Natur, sondern der Mensch,
          seine Sprache, seine Normen und seine Erkenntnisfähigkeit stehen
          im Zentrum. Relativismus, Rhetorik und die Macht des Wortes.
        </p>
        ${renderTags([
          'Kapitel 1.4', 'ca. 490–375 v. Chr.', 'Athen',
          'Relativismus · Rhetorik · Physis vs. Nomos', 'Abitur 2026'
        ])}
      </div>
    </section>


    <!-- ═══════════════════════════════════════════════════════════
         1. WER WAREN DIE SOPHISTEN?
         ═══════════════════════════════════════════════════════════ -->
    <section class="lz-content-section">
      <div class="lz-section-wrap">

        ${renderSubhead('Die sophistische Bewegung')}

        <h2 class="lz-h2 reveal">Eine <em>intellektuelle Revolution</em> in Athen</h2>

        <p class="lz-prose reveal">
          Im 5. Jahrhundert v.&nbsp;Chr. verschob sich der Fokus der griechischen
          Philosophie grundlegend. Die Naturphilosophen hatten nach dem Urstoff
          der Welt gefragt — die <strong>Sophisten</strong> (sophistaí = „Wissende",
          „Könner") stellten eine neue Frage: <strong>Was kann der Mensch wissen?
          Was darf er tun? Was soll er glauben?</strong> Diese anthropologische
          Wende war zugleich eine politische: In der athenischen Demokratie war
          Redefähigkeit der Schlüssel zur Macht.
        </p>

        <p class="lz-prose reveal">
          Die Sophisten waren <strong>Wanderlehrer</strong>, die gegen Bezahlung
          (ein Skandal für die griechische Oberschicht!) unterrichteten. Sie lehrten
          <strong>Rhetorik</strong> (die Kunst der überzeugenden Rede),
          <strong>Eristik</strong> (die Kunst der Streitführung),
          <strong>Politik</strong> (die Kunst der Staatsführung) und
          <strong>Grammatik</strong> (die Analyse der Sprache). Ihre Schüler waren
          junge Aristokraten, die in der Volksversammlung und den Gerichten Athens
          Karriere machen wollten.
        </p>

        ${renderMerkboxGrid([
          { icon: 'fas fa-users', title: 'Soziale Rolle',
            text: 'Die Sophisten waren die ersten professionellen Lehrer der griechischen Welt. Sie erfüllten ein reales Bedürfnis: In der athenischen Demokratie musste jeder Bürger sich selbst vor Gericht verteidigen und in der Volksversammlung argumentieren. Wer nicht reden konnte, war politisch machtlos.' },
          { icon: 'fas fa-coins', title: 'Bezahlung als Skandal',
            text: 'Dass die Sophisten für ihren Unterricht Geld verlangten — teils erhebliche Summen — empörte die konservative Oberschicht. Platon nutzte dies, um sie als geldgierige Scheingelehrte zu diskreditieren. In Wahrheit professionalisierten sie die Bildung.' },
          { icon: 'fas fa-globe-americas', title: 'Kosmopolitismus',
            text: 'Die Sophisten stammten nicht aus Athen, sondern aus verschiedenen griechischen Städten (Abdera, Leontinoi, Elis, Keos). Als Reisende kannten sie die Vielfalt der Sitten, Gesetze und Götter — eine Erfahrung, die den Relativismus beförderte.' },
          { icon: 'fas fa-lightbulb', title: 'Aufklärerischer Impuls',
            text: 'Die Sophisten waren Aufklärer avant la lettre: Sie hinterfragten überlieferte Normen, relativierten religiöse Autoritäten, analysierten die Macht der Sprache und förderten kritisches Denken. Nicht umsonst werden sie mit den französischen Aufklärern des 18. Jh. verglichen.' },
        ])}

        ${renderInfobox({
          type: '', icon: 'fas fa-balance-scale',
          title: 'Zur Rehabilitation der Sophisten',
          body: 'Platon hat die Sophisten als bloße <strong>„Wortverdreher"</strong> und „Wahrheitshändler" diskreditiert — ein Bild, das 2400 Jahre lang die Rezeption bestimmte. Die <strong>moderne Forschung</strong> (seit Hegel, besonders G.B. Kerferd, W.K.C. Guthrie) bewertet sie differenzierter: Die Sophisten stellten <strong>legitime und tiefgreifende Fragen</strong> — nach der Konventionalität von Normen, der Relativität von Erkenntnis, der Konstruktivität von Sprache. Diese Fragen sind <strong>ungelöst</strong> und bestimmen die philosophische Debatte bis heute (Postmoderne, Sprachphilosophie, Konstruktivismus).'
        })}

      </div>
    </section>


    <!-- ═══════════════════════════════════════════════════════════
         2. PROTAGORAS
         ═══════════════════════════════════════════════════════════ -->
    <section class="lz-content-section">
      <div class="lz-section-wrap">

        ${renderSubhead('Protagoras von Abdera (ca. 490–420 v. Chr.)')}

        <h2 class="lz-h2 reveal">„Der Mensch ist das <em>Maß</em> aller Dinge"</h2>

        <p class="lz-prose reveal">
          Protagoras gilt als der bedeutendste und einflussreichste Sophist. Er stammte
          aus Abdera in Thrakien (wie Demokrit!) und wurde in Athen hoch geschätzt:
          <strong>Perikles</strong> persönlich beauftragte ihn mit der Ausarbeitung
          der Verfassung für die panhellenische Kolonie <strong>Thurioi</strong>
          (444 v.&nbsp;Chr.) — ein Zeichen höchsten politischen Vertrauens.
        </p>

        <p class="lz-prose reveal">
          Protagoras war kein bloßer Rhetoriklehrer, sondern ein genuiner Denker mit
          einer kohärenten philosophischen Position. Sein berühmter
          <strong>Homo-mensura-Satz</strong> ist keine beiläufige Bemerkung, sondern
          eine durchdachte erkenntnistheoretische These mit weitreichenden Konsequenzen.
        </p>

        ${renderFormulaBox({
          label: 'Der Homo-mensura-Satz (Fragment B 1)',
          formula: '„Der Mensch ist das Maß aller Dinge,<br>der seienden, dass sie sind,<br>der nicht seienden, dass sie nicht sind."',
          desc: 'Pántōn chrēmátōn métron estìn ánthrōpos, tôn mèn óntōn hōs éstin, tôn dè ouk óntōn hōs ouk éstin — der berühmteste Satz der Sophistik und einer der meistdiskutierten der Philosophiegeschichte.'
        })}

        <!-- WIM-Tabs: Protagoras -->
        <nav class="wim-tabs" id="protagorasTabs" aria-label="Protagoras Themen">
          <button class="wim-tab active" data-wim="interpretation">Interpretation</button>
          <button class="wim-tab" data-wim="rhetorik">Rhetorik & Dissoi Logoi</button>
          <button class="wim-tab" data-wim="goetter">Götter & Agnostizismus</button>
        </nav>

        <div class="wim-category" data-wim-cat="interpretation">
          <h3 class="lz-h3">Zwei Deutungsmöglichkeiten</h3>
          <p class="lz-prose">Der Homo-mensura-Satz ist mehrdeutig. Die entscheidende Frage ist: Wer ist „der Mensch"?</p>
          ${renderCompare({
            titleA: '(a) Individualistische Deutung',
            titleB: '(b) Kollektive Deutung',
            listA: [
              '<strong>Jeder einzelne Mensch</strong> ist Maß seiner eigenen Wahrheit',
              'Der Wind ist kalt <strong>für den</strong>, dem er kalt vorkommt',
              'Es gibt keine objektive Windtemperatur jenseits des Empfindens',
              '→ Radikaler <strong>Subjektivismus</strong>',
              '→ Jede Diskussion über Wahrheit wäre sinnlos',
              'So deutet <strong>Platon</strong> den Satz im <em>Theaitetos</em>',
            ],
            listB: [
              '<strong>Die Menschheit</strong> (als Gattung) ist Maßstab',
              'Wahrheit ist immer <strong>menschliche</strong> Wahrheit',
              'Wir können die Welt nur so erkennen, wie unser Erkenntnisapparat es erlaubt',
              '→ Gemäßigter <strong>Anthropozentrismus</strong>',
              '→ Vereinbar mit demokratischer Debatte und Konsenssuche',
              'So deuten <strong>moderne Interpreten</strong> (Kerferd, Guthrie)',
            ],
          })}
          <p class="lz-prose">Für das Abitur ist es wichtig, <strong>beide Deutungen</strong> zu kennen und argumentativ gegeneinander abzuwägen. Die individualistische Deutung (Platon) ist die traditionelle; die kollektive Deutung (moderne Forschung) rehabilitiert Protagoras als seriösen Denker.</p>
        </div>

        <div class="wim-category hidden" data-wim-cat="rhetorik">
          <h3 class="lz-h3">Die Kunst der doppelten Rede</h3>
          <p class="lz-prose">Protagoras lehrte, dass es zu <strong>jedem Sachverhalt zwei einander entgegengesetzte Reden</strong> (lógoi) gibt — die sogenannten <strong>Dissoi Logoi</strong> (Doppelargumente). Für und gegen jede These lassen sich gleich starke Argumente finden.</p>
          ${renderMerkboxGrid([
            { icon: 'fas fa-exchange-alt', title: 'Antilogik',
              text: 'Die Fähigkeit, zu jeder These die Gegenthese zu vertreten und zu begründen. Protagoras konnte „den schwächeren Logos zum stärkeren machen" (tòn hḗttō lógon kreíttō poieîn) — d.h. für eine zunächst unplausible Position überzeugend argumentieren.' },
            { icon: 'fas fa-gavel', title: 'Gerichtliche Praxis',
              text: 'In der athenischen Demokratie musste sich jeder Bürger selbst vor Gericht verteidigen (keine Anwälte!). Die Fähigkeit, beide Seiten eines Falls zu argumentieren, war eine überlebenswichtige Kompetenz — und genau das lehrten die Sophisten.' },
            { icon: 'fas fa-graduation-cap', title: 'Pädagogisches Konzept',
              text: 'Protagoras verstand Bildung (paideía) als die Fähigkeit, Argumente abzuwägen und die stärkere Position zu erkennen. Das ist kein Zynismus, sondern die Grundlage kritischen Denkens: Wer nur eine Seite kennt, kann nicht urteilen.' },
          ])}
          <p class="lz-prose">Platon sah darin reine Manipulation — die Sophisten machten „aus Schwarz Weiß". Die moderne Rhetorikforschung erkennt darin eher eine Vorform der <strong>Argumentationstheorie</strong>: Protagoras lehrt, dass jede Position auf ihre Gründe hin geprüft werden muss.</p>
        </div>

        <div class="wim-category hidden" data-wim-cat="goetter">
          <h3 class="lz-h3">Die Frage nach den Göttern</h3>
          ${renderFormulaBox({
            label: 'Protagoras, Fragment B 4',
            formula: '„Über die Götter habe ich keine Möglichkeit zu wissen,<br>weder dass sie sind noch dass sie nicht sind<br>noch wie sie an Gestalt sind."',
            desc: 'Agnostizismus: Nicht Leugnung der Götter, sondern Eingeständnis der Unwissbarkeit. Die Kürze des Lebens und die Dunkelheit des Gegenstands verhindern sichere Erkenntnis.'
          })}
          <p class="lz-prose">Diese Äußerung führte angeblich zu Protagoras' <strong>Verurteilung und Verbannung</strong> aus Athen. Seine Schriften wurden auf der Agora verbrannt — einer der frühesten dokumentierten Fälle von Bücherzensur. Die Episode zeigt die Grenze der athenischen Toleranz: Religiöse Skepsis war öffentlich nicht akzeptabel, auch wenn sie rational begründet war.</p>
          ${renderInfobox({
            type: 'warning', icon: 'fas fa-exclamation-triangle',
            title: 'Prüfungsrelevant: Agnostizismus ≠ Atheismus',
            body: 'Protagoras war <strong>kein Atheist</strong>. Er leugnete nicht die Existenz der Götter, sondern behauptete, man könne darüber <strong>nichts Sicheres wissen</strong>. Das ist eine <strong>erkenntnistheoretische</strong>, keine metaphysische Position. Für das Abitur: Unterscheide klar zwischen Atheismus (Götter existieren nicht), Agnostizismus (wir können es nicht wissen) und Theismus (Götter existieren).'
          })}
        </div>

        <!-- Mythos-Protagoras -->
        <h3 class="lz-h3 reveal">Der Protagoras-Mythos (bei Platon)</h3>

        <p class="lz-prose reveal">
          In Platons Dialog <em>Protagoras</em> (320c–328d) erzählt der Sophist
          einen berühmten Mythos über die Entstehung der menschlichen Kultur:
          <strong>Prometheus</strong> stahl das Feuer und die handwerklichen Künste
          von den Göttern und gab sie den Menschen. Doch die Menschen konnten
          noch nicht zusammenleben — sie fehlende die <strong>politische Kunst</strong>
          (politikḕ téchnē). Daher sandte Zeus den Menschen
          <strong>Scham</strong> (aidṓs) und <strong>Recht</strong> (díkē) — und zwar
          <strong>allen</strong> gleichermaßen, nicht nur wenigen Experten.
        </p>

        ${renderMerkboxGrid([
          { icon: 'fas fa-fire', title: 'Prometheus = Technik',
            text: 'Handwerkliches Wissen (téchnē) reicht nicht für das Überleben: Die Menschen besaßen Feuer und Werkzeuge, aber sie bekämpften einander, weil ihnen die Fähigkeit zum Zusammenleben fehlte.' },
          { icon: 'fas fa-handshake', title: 'Zeus = Politische Tugend',
            text: 'Zeus gibt allen Menschen aidṓs (Scham/Ehrgefühl) und díkē (Rechts- und Gerechtigkeitssinn). Das ist die Grundlage der Demokratie: Politische Kompetenz ist nicht das Monopol einer Elite, sondern allen Menschen angeboren.' },
          { icon: 'fas fa-school', title: 'Bildung als Vervollkommnung',
            text: 'Die natürliche Anlage zur Tugend muss durch Erziehung (paideía) entwickelt werden. Die Sophisten sind die Lehrer dieser politischen Bildung. Protagoras legitimiert damit seinen Beruf: Er lehrt keine esoterische Spezialwissenschaft, sondern die Grundkompetenz des Bürgers.' },
        ])}

        ${renderInfobox({
          type: 'blue', icon: 'fas fa-graduation-cap',
          title: 'Abitur-Hinweis: Protagoras als Demokratietheoretiker',
          body: 'Der Protagoras-Mythos enthält eine <strong>philosophische Begründung der Demokratie</strong>: Wenn alle Menschen Anteil an Scham und Recht haben, dann haben auch alle ein <strong>Recht auf politische Teilhabe</strong>. Das ist ein Gegenargument gegen Platons elitäre Philosophenherrschaft (<em>Politeia</em>). In Klausuren wird gelegentlich gefragt: <strong>„Vergleichen Sie Protagoras\' und Platons Demokratieverständnis."</strong>'
        })}

      </div>
    </section>


    <!-- ═══════════════════════════════════════════════════════════
         3. GORGIAS
         ═══════════════════════════════════════════════════════════ -->
    <section class="lz-content-section">
      <div class="lz-section-wrap">

        ${renderSubhead('Gorgias von Leontinoi (ca. 483–375 v. Chr.)')}

        <h2 class="lz-h2 reveal">Radikaler Skeptizismus und die <em>Macht der Rede</em></h2>

        <p class="lz-prose reveal">
          Gorgias war ein virtuoser Redner aus dem sizilianischen Leontinoi, der 427
          v.&nbsp;Chr. als offizieller Gesandter nach Athen kam und dort durch seinen
          kunstvollen, rhythmischen Redestil Aufsehen erregte. Er lebte angeblich über
          100 Jahre und wurde einer der reichsten Intellektuellen der Antike. Seine
          philosophische Position ist radikaler als die des Protagoras — er trieb den
          Skeptizismus bis zur letzten Konsequenz.
        </p>

        <h3 class="lz-h3 reveal">Die drei Thesen aus „Über das Nicht-Seiende"</h3>

        <p class="lz-prose reveal">
          In seiner Schrift <em>Über das Nicht-Seiende oder Über die Natur</em> (Perì
          toû mḕ óntos ḕ Perì phýseōs) — der Titel ist eine bewusste Parodie auf
          die vorsokratischen Schriften „Über die Natur" — stellt Gorgias drei
          aufeinander aufbauende Thesen auf:
        </p>

        ${renderMerkboxGrid([
          { icon: 'fas fa-times-circle', title: 'These 1: Nichts existiert',
            text: 'Weder das Seiende noch das Nicht-Seiende existiert. Das Seiende ist weder ewig (dann hätte es keinen Anfang und wäre unbegrenzt, also nirgends) noch entstanden (woraus? — aus dem Seienden: dann existierte es schon; aus dem Nichtseienden: unmöglich). Eine Persiflage auf Parmenides\' Seinslehre.' },
          { icon: 'fas fa-eye-slash', title: 'These 2: Wenn etwas existiert, ist es unerkennbar',
            text: 'Selbst wenn etwas existierte, könnten wir es nicht erkennen. Denn das Gedachte muss nicht mit dem Wirklichen übereinstimmen: Wir können uns auch Nicht-Existierendes vorstellen (fliegende Menschen, Streitwagen auf dem Meer). Das Denken ist kein zuverlässiger Spiegel der Realität.' },
          { icon: 'fas fa-comment-slash', title: 'These 3: Wenn erkennbar, nicht mitteilbar',
            text: 'Selbst wenn wir etwas erkennen könnten, ließe es sich nicht mitteilen. Worte sind nicht die Dinge selbst — der Hörende empfängt nur akustische Zeichen, nicht die Sache. Die Sinneseindrücke des einen können nie identisch auf den anderen übertragen werden. Radikaler Sprachskeptizismus.' },
        ])}

        ${renderInfobox({
          type: '', icon: 'fas fa-question-circle',
          title: 'Ernst oder Parodie?',
          body: 'Die Forschung ist sich uneins, ob Gorgias seine drei Thesen <strong>ernst meinte</strong> oder als <strong>rhetorische Virtuosenstücke</strong> (epídeixis = Prunkrede) vorführte, um zu zeigen, dass man für jede Position argumentieren kann — auch für die absurdeste. Wahrscheinlich beides: Er demonstrierte einerseits die <strong>Macht der Rhetorik</strong> (ich kann sogar „beweisen", dass nichts existiert) und kritisierte andererseits den <strong>Dogmatismus der Naturphilosophen</strong>, die mit dem gleichen Instrument (Argument) zu entgegengesetzten Ergebnissen kamen.'
        })}

        <h3 class="lz-h3 reveal">Die Macht der Rede (Logos)</h3>

        <p class="lz-prose reveal">
          Gorgias' eigentliche Leidenschaft war die <strong>Rhetorik</strong>. In
          seiner <em>Lobrede auf Helena</em> (Helénēs enkṓmion) verteidigt er die
          mythische Helena, die angeblich den Trojanischen Krieg ausgelöst hatte. Sein
          Argument: Helena war nicht schuldig, weil sie entweder durch göttlichen
          Willen, physische Gewalt, die <strong>Macht der Rede</strong> oder die
          Macht der Liebe überwältigt wurde. Besonders bemerkenswert ist die
          Passage über den Logos:
        </p>

        ${renderFormulaBox({
          label: 'Gorgias, Lobrede auf Helena, § 8',
          formula: '„Die Rede ist ein großer Machthaber (dynástēs mégas),<br>der mit dem kleinsten und unscheinbarsten Körper<br>die göttlichsten Werke vollbringt."',
          desc: 'Die Rede als eigenständige Macht: Sie kann Furcht erzeugen, Trauer vertreiben, Freude wecken, Mitleid erregen. Sie wirkt auf die Seele wie ein Pharmakon (Heilmittel/Gift) auf den Körper.'
        })}

        ${renderMerkboxGrid([
          { icon: 'fas fa-pills', title: 'Logos als Pharmakon',
            text: 'Die Rede wirkt auf die Seele wie eine Droge (phármakon) auf den Körper: Sie kann heilen oder vergiften, beruhigen oder aufwühlen. Wer die Macht der Rede beherrscht, beherrscht die Seelen der Menschen — Rhetorik als Psychagogik (Seelenführung).' },
          { icon: 'fas fa-magic', title: 'Goeteía (Bezauberung)',
            text: 'Gorgias vergleicht die Wirkung der Rede mit Zauberei (goēteía) und Magie. Die Zuhörer werden „bezaubert" — sie verlieren ihre Urteilskraft und werden vom Redner gelenkt. Eine frühe Analyse dessen, was heute „Manipulation" oder „Framing" heißt.' },
          { icon: 'fas fa-theater-masks', title: 'Tragödie als Paradigma',
            text: 'Die attische Tragödie zeigt die Macht der Rede: Die Zuschauer weinen und zittern, obwohl sie wissen, dass das Geschehene „nur Theater" ist. Gorgias analysiert: Emotionen reagieren auf Worte, nicht auf Realität. Die Rede erzeugt eine eigene Wirklichkeit.' },
        ])}

      </div>
    </section>


    <!-- ═══════════════════════════════════════════════════════════
         4. PHYSIS VS. NOMOS
         ═══════════════════════════════════════════════════════════ -->
    <section class="lz-content-section">
      <div class="lz-section-wrap">

        ${renderSubhead('Die große Debatte: Phýsis vs. Nómos')}

        <h2 class="lz-h2 reveal">Natur oder <em>Konvention</em>?</h2>

        <p class="lz-prose reveal">
          Die wichtigste theoretische Leistung der Sophistik ist die Entdeckung
          des <strong>Gegensatzes zwischen Phýsis und Nómos</strong>. Dieser
          Gegensatz durchzieht die gesamte nachfolgende Philosophie und ist bis
          heute ungelöst. Er berührt die fundamentale Frage: <strong>Gibt es
          natürliche, universelle Normen — oder sind alle Normen menschliche
          Setzungen?</strong>
        </p>

        ${renderCompare({
          titleA: 'Phýsis (Natur)',
          titleB: 'Nómos (Gesetz / Konvention)',
          listA: [
            'Was <strong>von Natur aus</strong> gilt — überall, immer, für alle',
            'Universell und unveränderlich (wie die Schwerkraft)',
            'Nicht von Menschen gemacht, sondern vorgefunden',
            'Begründet <strong>objektive</strong> Normen',
            'Beispiel: „Alle Menschen streben nach Glück" (Aristoteles)',
            'Tradition: Naturrecht (Stoa, Thomas v. Aquin, Locke, Menschenrechte)',
          ],
          listB: [
            'Was <strong>durch menschliche Setzung</strong> gilt — hier und jetzt',
            'Variabel: je nach Kultur, Epoche, Machtverhältnisse verschieden',
            'Von Menschen gemacht und veränderbar',
            'Begründet nur <strong>relative</strong>, lokale Normen',
            'Beispiel: Erbfolge, Speiseverbote, Strafrecht',
            'Tradition: Rechtspositivismus (Hobbes, Kelsen, Rechtssoziologie)',
          ],
        })}

        <h3 class="lz-h3 reveal">Positionen innerhalb der Sophistik</h3>

        <p class="lz-prose reveal">
          Die Sophisten waren sich untereinander <strong>nicht einig</strong>, welche
          Konsequenzen aus dem Physis-Nomos-Gegensatz zu ziehen seien. Drei markante
          Positionen kristallisierten sich heraus:
        </p>

        <!-- WIM-Tabs: Physis-Nomos -->
        <nav class="wim-tabs" id="physisNomosTabs" aria-label="Physis-Nomos Positionen">
          <button class="wim-tab active" data-wim="kallikles">Kallikles</button>
          <button class="wim-tab" data-wim="thrasymachos">Thrasymachos</button>
          <button class="wim-tab" data-wim="antiphon">Antiphon / Hippias</button>
        </nav>

        <div class="wim-category" data-wim-cat="kallikles">
          <h3 class="lz-h3">Das Recht des Stärkeren</h3>
          <p class="lz-prose">Kallikles (bei Platon, <em>Gorgias</em> 482c–486d) vertritt die radikalste Position: Die Natur (phýsis) kennt nur <strong>ein</strong> Gesetz — das <strong>Recht des Stärkeren</strong>. In der Natur herrscht der Löwe über das Lamm, der Adler über die Maus. Das ist die „natürliche Gerechtigkeit".</p>
          ${renderMerkboxGrid([
            { icon: 'fas fa-crown', title: 'Nómos als Instrument der Schwachen',
              text: 'Die Gesetze (nómoi) wurden von den Schwachen (der Masse) erfunden, um die Starken (die Überlegenen) zu bändigen. Moral ist eine Fessel: Sie redet den Starken ein, Mäßigung sei gut — in Wahrheit dient sie nur dazu, die natürliche Überlegenheit der Wenigen einzuschränken.' },
            { icon: 'fas fa-fist-raised', title: 'Pleonexía (Mehrhabenwollen)',
              text: 'Der wahrhaft Starke durchbricht die konventionellen Fesseln und nimmt sich, was ihm zusteht. Er lebt nicht nach nómos, sondern nach phýsis — er ist der „natürliche Herr". Maßlosigkeit (pleonexía) ist nicht Laster, sondern Naturrecht.' },
          ])}
          <p class="lz-prose">Diese Position wird oft als Vorläufer von Nietzsches Herrenmoral, des Sozialdarwinismus und totalitärer Ideologien gelesen. Platon widerlegt sie im <em>Gorgias</em> durch Sokrates: Wer keine Selbstbeherrschung hat, ist Sklave seiner Triebe — also gerade nicht „stark".</p>
        </div>

        <div class="wim-category hidden" data-wim-cat="thrasymachos">
          <h3 class="lz-h3">Gerechtigkeit = Vorteil des Stärkeren</h3>
          <p class="lz-prose">Thrasymachos (bei Platon, <em>Politeia</em> I, 338c) argumentiert nüchterner: <strong>Gerechtigkeit ist nichts anderes als der Vorteil des Mächtigeren.</strong> In jeder Staatsform machen die Herrschenden die Gesetze — und zwar zu ihrem eigenen Vorteil:</p>
          ${renderMerkboxGrid([
            { icon: 'fas fa-landmark', title: 'Demokratie',
              text: 'Die Mehrheit macht Gesetze, die der Mehrheit nützen.' },
            { icon: 'fas fa-chess-king', title: 'Tyrannis',
              text: 'Der Tyrann macht Gesetze, die ihm selbst nützen.' },
            { icon: 'fas fa-users', title: 'Oligarchie',
              text: 'Die Reichen machen Gesetze, die den Reichen nützen.' },
          ])}
          <p class="lz-prose">Thrasymachos' These ist <strong>deskriptiv</strong>, nicht normativ: Er sagt nicht, was Gerechtigkeit sein <em>sollte</em>, sondern was sie <em>ist</em>. Das ist eine soziologische Analyse der Machtstrukturen — ein Vorläufer von Marx' Ideologiekritik (Recht als „Überbau" der ökonomischen Verhältnisse) und Foucaults Machtanalyse.</p>
        </div>

        <div class="wim-category hidden" data-wim-cat="antiphon">
          <h3 class="lz-h3">Naturrechtlicher Egalitarismus</h3>
          <p class="lz-prose">Antiphon der Sophist und Hippias von Elis zogen eine ganz andere Konsequenz aus dem Physis-Nomos-Gegensatz: <strong>Von Natur aus sind alle Menschen gleich.</strong> Die Unterscheidung zwischen Griechen und Barbaren, Freien und Sklaven, Adligen und Gemeinen ist bloße Konvention (nómos), nicht Natur (phýsis).</p>
          ${renderFormulaBox({
            label: 'Antiphon, Fragment B 44',
            formula: '„Von Natur aus sind wir alle in allem gleich geschaffen,<br>Barbaren wie Griechen. [...] Denn wir atmen alle durch Mund und Nase<br>in die Luft hinein."',
            desc: 'Früheste Formulierung eines universalen Menschenrechtsgedankens in der abendländischen Philosophie. Alle Menschen sind gleich — ethnische und soziale Unterschiede sind konventionell.'
          })}
          <p class="lz-prose">Diese Position ist bemerkenswert progressiv für eine Gesellschaft, die auf Sklaverei beruhte. Antiphon und Hippias begründen einen <strong>naturrechtlichen Egalitarismus</strong>, der über die Stoa und Cicero in die Menschenrechtserklärungen der Neuzeit einfließt.</p>
        </div>

      </div>
    </section>


    <!-- ═══════════════════════════════════════════════════════════
         5. WIRKUNGSGESCHICHTE & MODERNE RELEVANZ
         ═══════════════════════════════════════════════════════════ -->
    <section class="lz-content-section">
      <div class="lz-section-wrap">

        ${renderSubhead('Wirkungsgeschichte und moderne Relevanz')}

        <h2 class="lz-h2 reveal">Die Sophisten und die <em>Gegenwart</em></h2>

        ${renderTable({
          headers: ['Sophistischer Gedanke', 'Moderne Parallele', 'Vertreter'],
          rows: [
            ['Homo-mensura-Satz (Relativismus)',          'Konstruktivismus, Perspektivismus',          'Nietzsche, Goodman, Rorty'],
            ['Dissoi Logoi (Doppelargumente)',             'Argumentationstheorie, Debattenkultur',      'Toulmin, Habermas'],
            ['Logos als Pharmakon (Sprache als Macht)',    'Sprachphilosophie, Diskurstheorie',          'Wittgenstein, Foucault, Derrida'],
            ['Physis vs. Nomos (Natur vs. Konvention)',   'Naturrecht vs. Rechtspositivismus',          'Locke vs. Kelsen, Rawls'],
            ['Gorgias\' Sprachskeptizismus',               'Sprachkritik, Dekonstruktion',              'Derrida, Lyotard'],
            ['Kallikles\' Recht des Stärkeren',            'Machtphilosophie, Ideologiekritik',         'Nietzsche, Marx, Foucault'],
            ['Antiphons Egalitarismus',                    'Universale Menschenrechte',                 'UN-Menschenrechtserklärung 1948'],
          ],
          highlight: [2, 3],
        })}

        ${renderInfobox({
          type: 'success', icon: 'fas fa-link',
          title: 'Brücke zum Abitur',
          body: 'Die Sophistik ist keine historische Fußnote — sie formuliert Probleme, die in der <strong>modernen Philosophie zentral</strong> sind: Gibt es objektive Wahrheit? Ist Moral universal oder kulturrelativ? Schafft Sprache Wirklichkeit? Wer bestimmt, was „gerecht" ist? Die Sophisten sind die <strong>Gründerfiguren</strong> dieser Debatten — und Sokrates/Platon reagieren darauf. Ohne die Sophisten ist weder Platon noch die moderne Philosophie verständlich.'
        })}

      </div>
    </section>


    <!-- ═══════════════════════════════════════════════════════════
         6. ZUSAMMENFASSUNG & TESTFRAGEN
         ═══════════════════════════════════════════════════════════ -->
    <section class="lz-content-section">
      <div class="lz-section-wrap">

        ${renderSubhead('Zusammenfassung & Testfragen')}

        ${renderTable({
          headers: ['Sophist', 'Kernposition', 'Schlüsselbegriff'],
          rows: [
            ['<strong>Protagoras</strong>',  'Der Mensch ist das Maß aller Dinge',              'Homo-mensura, Dissoi Logoi, Agnostizismus'],
            ['<strong>Gorgias</strong>',      'Nichts existiert / ist erkennbar / mitteilbar',   'Sprachskeptizismus, Logos als Pharmakon'],
            ['<strong>Kallikles</strong>',    'Das Recht des Stärkeren ist Naturrecht',          'Pleonexía, Anti-Moral'],
            ['<strong>Thrasymachos</strong>', 'Gerechtigkeit = Vorteil des Stärkeren',           'Machtanalyse, Ideologiekritik'],
            ['<strong>Antiphon</strong>',     'Alle Menschen sind von Natur aus gleich',         'Naturrechtl. Egalitarismus'],
          ],
          highlight: [0, 1],
        })}

        ${renderAccordion([
          { title: '1. Interpretieren Sie den Homo-mensura-Satz des Protagoras. Erläutern Sie beide Deutungsmöglichkeiten.',
            content: '<p class="lz-prose">Der Satz „Der Mensch ist das Maß aller Dinge, der seienden, dass sie sind, der nicht seienden, dass sie nicht sind" lässt sich auf <strong>zwei Ebenen</strong> interpretieren:<br><br><strong>(a) Individualistische Deutung (Platon):</strong> Jeder <em>einzelne</em> Mensch ist Maßstab seiner eigenen Wahrheit. Wenn der Wind dem einen kalt, dem anderen warm vorkommt, dann <em>ist</em> er für jeden das, als was er ihm erscheint. Es gibt keine windunabhängige „wahre Temperatur". Konsequenz: <strong>radikaler Subjektivismus</strong>. Problem: Wenn jede Meinung gleich wahr ist, wird Argumentation sinnlos — auch Protagoras\' eigene These wäre nur „für ihn" wahr.<br><br><strong>(b) Kollektive Deutung (moderne Forschung):</strong> Die <em>Menschheit als Gattung</em> ist Maßstab — im Gegensatz zu Göttern oder dem abstrakten Sein. Wahrheit ist immer <strong>menschliche</strong> Wahrheit, gebunden an unsere Erkenntnisfähigkeiten. Konsequenz: gemäßigter <strong>Anthropozentrismus</strong>, vereinbar mit demokratischer Debatte. Nicht „alles ist gleich wahr", sondern „alle Wahrheit ist perspektivisch".<br><br>Für das Abitur: Beide Deutungen nennen, <strong>Platons Kritik</strong> (Theaitetos: Selbstwiderlegung des Relativismus) kennen und zeigen, dass die Frage nach Objektivität vs. Perspektivität der Erkenntnis <strong>bis heute offen</strong> ist.</p>' },

          { title: '2. Analysieren Sie Gorgias\' drei Thesen. Sind sie ernst gemeint oder rhetorisches Spiel?',
            content: '<p class="lz-prose"><strong>Die drei Thesen:</strong> (1) Nichts existiert. (2) Wenn etwas existiert, ist es unerkennbar. (3) Wenn erkennbar, nicht mitteilbar.<br><br><strong>Für Ernst sprechen:</strong> Die Thesen sind logisch stringent aufgebaut und verwenden dieselben Argumentationsmuster wie Parmenides und Zenon. Sie decken echte philosophische Probleme auf: die Kluft zwischen Denken und Sein (These 2), zwischen Sprache und Wirklichkeit (These 3). Diese Probleme sind in der modernen Philosophie (Kant, Wittgenstein, Derrida) zentral.<br><br><strong>Für rhetorisches Spiel sprechen:</strong> Der Titel „Über das Nicht-Seiende" parodiert die vorsokratischen Schriften „Über die Natur". Gorgias demonstriert, dass man mit denselben logischen Mitteln sowohl „das Seiende ist" (Parmenides) als auch „nichts existiert" (Gorgias) „beweisen" kann — und entlarvt damit die <strong>Grenzen rein logischer Argumentation</strong>.<br><br><strong>Wahrscheinlichste Deutung:</strong> Beides zugleich. Gorgias führt ein Virtuosenstück vor, das zugleich eine <strong>ernsthafte philosophische Pointe</strong> hat: Die Sprache (logos) ist mächtiger als die Wirklichkeit, weil sie jede Wirklichkeit „beweisen" und jede „widerlegen" kann. Die Rede ist ein <strong>autonomes Machtinstrument</strong> — sie bildet nicht Wirklichkeit ab, sondern erzeugt sie.</p>' },

          { title: '3. Erläutern Sie die Physis-Nomos-Debatte und ihre drei verschiedenen Positionen innerhalb der Sophistik.',
            content: '<p class="lz-prose">Die <strong>Physis-Nomos-Debatte</strong> fragt: Sind moralische und politische Normen <strong>natürlich</strong> (phýsis = überall und immer gültig) oder <strong>konventionell</strong> (nómos = menschliche Setzung, variabel)?<br><br><strong>Position 1 — Kallikles/Thrasymachos (Naturalismus der Stärke):</strong> Die Natur kennt nur das Recht des Stärkeren. Gesetze sind Erfindungen der Schwachen, um die Starken zu bändigen. „Natürliche Gerechtigkeit" bedeutet: Der Überlegene herrscht. Moralische Gleichheit ist widernatürlich.<br><br><strong>Position 2 — Protagoras (Demokratischer Konventionalismus):</strong> Es gibt kein Naturrecht — aber gerade deshalb brauchen wir <strong>demokratisch vereinbarte</strong> Normen. Die politische Tugend (Scham und Recht) ist allen Menschen gegeben, aber muss durch Bildung entwickelt werden. Normen sind konventionell, aber nicht willkürlich — sie dienen dem Zusammenleben.<br><br><strong>Position 3 — Antiphon/Hippias (Naturrechtlicher Egalitarismus):</strong> Von Natur aus sind alle Menschen <strong>gleich</strong>. Ethnische, soziale und geschlechtliche Unterschiede sind bloße Konventionen. Die Natur begründet nicht Hierarchie, sondern Gleichheit. Vorform der modernen Menschenrechtsidee.<br><br><strong>Bedeutung:</strong> Diese drei Positionen kehren in der gesamten Ethikgeschichte wieder. Hobbes und Nietzsche stehen in der Nähe von Position 1, Habermas und Rawls in der Nähe von Position 2, die Stoiker und die UN-Menschenrechtserklärung in der Nähe von Position 3.</p>' },

          { title: '4. Vergleichen Sie Protagoras\' und Platons Demokratieverständnis anhand des Protagoras-Mythos.',
            content: '<p class="lz-prose"><strong>Protagoras:</strong> Im Mythos (Platon, <em>Protagoras</em> 320c–328d) erhält <strong>jeder Mensch</strong> von Zeus Scham (aidṓs) und Recht (díkē). Politische Kompetenz ist keine Expertenwissen, sondern eine <strong>allgemein-menschliche Fähigkeit</strong>. Daher: Demokratie ist gerechtfertigt — jeder Bürger hat das Recht und die Fähigkeit zur politischen Mitbestimmung. Die Aufgabe der Bildung ist es, diese natürliche Anlage zu entwickeln.<br><br><strong>Platon:</strong> In der <em>Politeia</em> vertritt Platon die Gegenposition: Politische Kompetenz ist ein <strong>Spezialwissen</strong>, das nur wenige (die Philosophen) durch jahrzehntelange Ausbildung erwerben. Die Masse hat Meinungen (dóxa), nicht Wissen (epistḗmē). Demokratie ist die „Herrschaft der Unkundigen" — wie ein Schiff, das von den Passagieren statt vom Steuermann gelenkt wird (Schiffsgleichnis, <em>Politeia</em> VI, 488a–489c). Die beste Verfassung ist die <strong>Philosophenherrschaft</strong>.<br><br><strong>Kernkonflikt:</strong> Ist politische Kompetenz <strong>egalitär verteilt</strong> (alle können urteilen) oder <strong>elitär</strong> (nur Experten wissen Bescheid)? Diese Frage ist in der Demokratietheorie bis heute virulent: Populismus-Debatte, Expertokratie, deliberative Demokratie.</p>' },

          { title: '5. Inwiefern ist Gorgias\' These vom Logos als „Pharmakon" für die moderne Medien- und Kommunikationstheorie relevant?',
            content: '<p class="lz-prose">Gorgias beschreibt den Logos (die Rede) als <strong>phármakon</strong> — ein Wort, das zugleich „Heilmittel" und „Gift" bedeutet. Die Rede wirkt auf die Seele wie eine Droge auf den Körper: Sie kann heilen oder vergiften, beruhigen oder aufwühlen. Die Zuhörer werden „bezaubert" (goēteía) und verlieren vorübergehend ihre Urteilskraft.<br><br><strong>Moderne Relevanz:</strong><br>(1) <strong>Propaganda und Manipulation:</strong> Die totalitären Regime des 20. Jh. zeigten die zerstörerische Macht der Rede (Goebbels\' „totale Propaganda"). Gorgias\' Analyse erklärt, <strong>warum</strong> Propaganda funktioniert: Sie wirkt auf Emotionen, nicht auf den Verstand, und erzeugt eine eigene Pseudo-Realität.<br><br>(2) <strong>Framing und Agenda-Setting:</strong> Die moderne Kommunikationswissenschaft zeigt, dass sprachliche Rahmungen (Frames) die Wahrnehmung der Realität bestimmen: „Steuererleichterung" vs. „Steuergeschenk" für denselben Sachverhalt. Gorgias hatte erkannt: Der Logos bildet nicht Wirklichkeit ab, er <strong>konstruiert</strong> sie.<br><br>(3) <strong>Social Media:</strong> In der Ära von Deepfakes, algorithmisch kuratierter Information und viraler Desinformation ist Gorgias\' Pharmakon-These aktueller denn je: Die digitale Rede kann aufklären (Heilmittel) oder manipulieren (Gift) — oft ist die Grenze fließend.<br><br>(4) <strong>Derrida:</strong> Jacques Derrida hat Platons <em>Phaidros</em>-Passage über die Schrift als phármakon berühmt analysiert (<em>La pharmacie de Platon</em>, 1972). Die Ambivalenz des Zeichens — zugleich Heilmittel und Gift, Wahrheit und Täuschung — ist ein Grundmotiv der Dekonstruktion, das auf Gorgias zurückgeht.</p>' },
        ])}

      </div>
    </section>


    <!-- ════════════ NAVIGATION ════════════ -->
    <section class="lz-content-section" style="padding-top:0;">
      <div class="lz-section-wrap">
        ${renderPageNav({
          prev: { label: 'Pythagoras bis Demokrit', link: `${BASE}/themen/vorsokratik/pythagoras-demokrit` },
          next: { label: 'Klassische Antike',       link: `${BASE}/themen/vorsokratik/klassische-antike` },
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
    initWimTabs(document);  // WIM-Tabs initialisieren
  }

  cleanup() {}
}