// pages/projekte/lernzettel/faecher/ethik/themen/hintergrund.js
// ══════════════════════════════════════════════════════════════════
// Kapitel 1.1 — Kulturhistorischer Hintergrund & Überblick
// Die Geburt der Philosophie: Vom Mythos zum Logos
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

// ── Kapitelfarbe ───────────────────────────────────────────────
const KAP_COLOR     = '#7a9e7e';
const KAP_COLOR_RGB = '122, 158, 126';

// ══════════════════════════════════════════════════════════════════
// PAGE CLASS
// ══════════════════════════════════════════════════════════════════

export default class HintergrundPage {
  constructor(router) { this.router = router; }

  render() {
    ensureComponentsCSS();
    loadComponentCSS('pages/projekte/lernzettel/styles/sub.css');

    const el = document.createElement('div');
    el.className = 'page page-hintergrund';
    el.style.setProperty('--lz-accent',      COLOR);
    el.style.setProperty('--lz-accent-rgb',  COLOR_RGB);
    el.style.setProperty('--kap-color',      KAP_COLOR);
    el.style.setProperty('--kap-color-rgb',  KAP_COLOR_RGB);
    el.innerHTML = this._html();
    return el;
  }

  _html() {
    return `

    <!-- ═══════════════════════════════════════════════════════════
         HERO
         ═══════════════════════════════════════════════════════════ -->
    <section class="lz-sub-hero">
      <div class="lz-sub-hero-orb"></div>
      <div class="lz-sub-hero-inner reveal">

        <nav class="lz-sub-breadcrumb">
          <button class="lz-bread-link" data-link="/projekte/lernzettel">Lernzettel</button>
          <i class="fas fa-chevron-right"></i>
          <button class="lz-bread-link" data-link="${BASE}">Philosophie</button>
          <i class="fas fa-chevron-right"></i>
          <span>Kulturhistorischer Hintergrund</span>
        </nav>

        <h1 class="lz-sub-title">
          Vom <em>Mythos</em> zum <em>Logos</em>
        </h1>

        <p class="lz-sub-desc">
          Im 6. Jahrhundert v.&nbsp;Chr. begann an den Küsten Ioniens eine der
          tiefgreifendsten geistigen Revolutionen der Menschheitsgeschichte:
          Der Übergang von mythologisch-religiösen Welterklärungen zu
          rationaler, argumentativer Naturbetrachtung.
        </p>

        ${renderTags([
          'Kapitel 1.1', '7.–5. Jh. v. Chr.', 'Ionien',
          'Mythos · Logos · Arché', 'Abitur 2026'
        ])}

      </div>
    </section>


    <!-- ═══════════════════════════════════════════════════════════
         1. DIE WELT VOR DER PHILOSOPHIE
         ═══════════════════════════════════════════════════════════ -->
    <section class="lz-content-section">
      <div class="lz-section-wrap">

        ${renderSubhead('Die Welt vor der Philosophie')}

        <h2 class="lz-h2 reveal">Mythisches Denken in der griechischen <em>Frühzeit</em></h2>

        <p class="lz-prose reveal">
          Bevor die Philosophie entstand, erklärten die Griechen die Welt durch
          <strong>Mythen</strong> — erzählende Geschichten über Götter, Heroen und
          kosmische Kräfte. Hesiods <em>Theogonie</em> (ca. 700 v.&nbsp;Chr.) ist
          das wichtigste Zeugnis: Sie schildert, wie aus dem <strong>Chaos</strong>
          (dem Gähnenden, Klaffenden) zunächst Gaia (Erde), Tartaros (Unterwelt)
          und Eros (Urkraft der Verbindung) hervorgingen. Daraus entfaltete sich
          eine Göttergenealogie: Uranos, die Titanen, schließlich die olympischen
          Götter unter Zeus.
        </p>

        <p class="lz-prose reveal">
          Das mythische Denken hat spezifische <strong>Merkmale</strong>, die es vom
          philosophischen grundlegend unterscheiden. Es ist wichtig, diese Merkmale
          genau zu kennen, um den Epochenbruch zur Philosophie zu verstehen:
        </p>

        ${renderMerkboxGrid([
          { icon: 'fas fa-theater-masks', title: 'Personalisierung',
            text: 'Naturkräfte werden als handelnde Personen (Götter) dargestellt. Poseidon schickt Erdbeben, Zeus den Blitz, Demeter lässt die Saat wachsen. Die Natur hat Absichten, Emotionen und Launen — sie ist kein Gegenstand neutraler Beobachtung.' },
          { icon: 'fas fa-book-open', title: 'Narrativität',
            text: 'Erklärungen haben Erzählform: genealogische Abfolgen (wer zeugte wen), dramatische Konflikte (Titanomachie), Verwandlungsgeschichten (Metamorphosen). Nicht das Argument zählt, sondern die Stimmigkeit der Geschichte.' },
          { icon: 'fas fa-lock', title: 'Autorität statt Argument',
            text: 'Mythen werden tradiert, nicht diskutiert. Ihre Geltung beruht auf dem Alter der Überlieferung und der Autorität des Dichters (Homer, Hesiod), nicht auf nachprüfbaren Gründen. Widerspruch ist Gotteslästerung (asébeia).' },
          { icon: 'fas fa-yin-yang', title: 'Ambivalenz',
            text: 'Die Götter verkörpern widersprüchliche Kräfte: Zeus ist Ordnungshüter und Ehebrecher zugleich, Aphrodite ist Schönheit und Zerstörung. Das mythische Denken toleriert Widersprüche — das philosophische Denken strebt nach Widerspruchsfreiheit.' },
          { icon: 'fas fa-hourglass-half', title: 'Zyklische Zeit',
            text: 'Die mythische Weltordnung kennt keinen linearen Fortschritt, sondern ewige Wiederkehr: Jahreszeiten, Generationenfolgen, Aufstieg und Fall der Geschlechter. Geschichte ist Schicksal (moîra), nicht menschliche Gestaltung.' },
          { icon: 'fas fa-users', title: 'Kollektive Geltung',
            text: 'Mythen sind Gemeinschaftsbesitz: Sie stiften Identität, regeln Riten und Feste, legitimieren politische Ordnungen. Wer den Mythos in Frage stellt, gefährdet die soziale Ordnung.' },
        ])}

        ${renderInfobox({
          type: '', icon: 'fas fa-info-circle',
          title: 'Wichtige Differenzierung',
          body: 'Der Übergang Mythos → Logos bedeutet <strong>nicht</strong>, dass die Griechen plötzlich aufhörten, an Götter zu glauben. Noch Sokrates brachte dem Asklepios ein Opfer, Platon respektierte Orakel. Auch die frühen Philosophen waren keine Atheisten. Der Bruch betrifft die <strong>Erklärungsform</strong>: Nicht mehr erzählte Genealogien der Götter, sondern rational begründete Naturprinzipien sollen die Ordnung der Welt verständlich machen.'
        })}

      </div>
    </section>


    <!-- ═══════════════════════════════════════════════════════════
         2. BEDINGUNGEN DES EPOCHENBRUCHS
         ═══════════════════════════════════════════════════════════ -->
    <section class="lz-content-section">
      <div class="lz-section-wrap">

        ${renderSubhead('Bedingungen des Epochenbruchs')}

        <h2 class="lz-h2 reveal">Warum entstanden Philosophie und Wissenschaft gerade <em>hier und jetzt</em>?</h2>

        <p class="lz-prose reveal">
          Die Frage, warum die Philosophie im 6. Jahrhundert v.&nbsp;Chr. ausgerechnet
          in den griechischen Kolonien Kleinasiens entstand, ist eine der meistdiskutierten
          der Geistesgeschichte. Eine monokausal Erklärung gibt es nicht, aber mehrere
          Faktoren wirkten zusammen:
        </p>

        <!-- WIM-Tabs: Bedingungen des Epochenbruchs -->
        <nav class="wim-tabs" id="bedingungenTabs" aria-label="Bedingungen des Epochenbruchs">
          <button class="wim-tab active" data-wim="geografie">Geografie & Handel</button>
          <button class="wim-tab" data-wim="polis">Polis & Demokratie</button>
          <button class="wim-tab" data-wim="oekonomie">Ökonomie & Muße</button>
        </nav>

        <div class="wim-category" data-wim-cat="geografie">
          <h3 class="lz-h3">Ionien als Schmelztiegel</h3>
          <p class="lz-prose">
            Die griechischen Kolonien an der Westküste Kleinasiens — Milet, Ephesos,
            Kolophon, Klazomenai — waren <strong>Knotenpunkte des Fernhandels</strong>
            zwischen Ost und West. Kaufleute und Seefahrer brachten nicht nur Waren,
            sondern auch <strong>Ideen</strong> mit:
          </p>
          ${renderMerkboxGrid([
            { icon: 'fas fa-landmark', title: 'Ägypten',
              text: 'Geometrisches Wissen (Landvermessung nach Nilüberschwemmungen), Astronomie, monumentale Architektur. Thales soll in Ägypten studiert haben und die Pyramidenhöhe durch Schattenmessung bestimmt haben.' },
            { icon: 'fas fa-moon', title: 'Babylonien / Mesopotamien',
              text: 'Hoch entwickelte Astronomie (Planetenperioden, Finsternisvorhersage), Mathematik (Sexagesimalsystem → 60 Minuten/Stunde), elaborierte Rechtscodices (Codex Hammurabi).' },
            { icon: 'fas fa-font', title: 'Phönizien',
              text: 'Das phönizische Alphabet — eine geniale Vereinfachung der ägyptischen Hieroglyphen — wurde von den Griechen übernommen und um Vokale erweitert. Erst die Alphabetschrift ermöglichte die schriftliche Fixierung komplexer Argumente.' },
          ])}
          <p class="lz-prose">
            Der Kontakt mit <strong>unterschiedlichen Kulturen</strong> relativierte
            die eigene Tradition: Wer erlebt, dass andere Völker andere Götter, andere
            Gesetze und andere Erklärungen haben, beginnt zu fragen, ob die eigenen
            „natürlich" oder nur „gewohnt" sind. Dieser Perspektivenwechsel ist eine
            Voraussetzung für kritisches Denken.
          </p>
        </div>

        <div class="wim-category hidden" data-wim-cat="polis">
          <h3 class="lz-h3">Die politische Struktur der griechischen Stadtstaaten</h3>
          <p class="lz-prose">
            Die griechische <strong>Polis</strong> war keine Monarchie orientalischen
            Typs, in der ein Priesterkönig die Wahrheit verkündete. Sie war ein
            Gemeinwesen freier Bürger, die in der <strong>Agora</strong> (dem
            Marktplatz) öffentlich debattierten und gemeinsam Entscheidungen trafen.
          </p>
          ${renderMerkboxGrid([
            { icon: 'fas fa-gavel', title: 'Isonomía (Gleichheit vor dem Gesetz)',
              text: 'Die politische Gleichheit der Bürger förderte die Idee, dass auch Wahrheit nicht von Autoritäten verkündet, sondern durch Argumente erstritten werden muss. Wer in der Volksversammlung überzeugen will, braucht Gründe, nicht bloß Macht.' },
            { icon: 'fas fa-comments', title: 'Agṓn (Wettstreit)',
              text: 'Die griechische Kultur war durchdrungen vom Wettstreit-Gedanken: sportlich (Olympische Spiele), künstlerisch (Tragödienwettbewerb) und intellektuell. Philosophie als „Wettkampf der Argumente" ist Teil dieser Kultur.' },
            { icon: 'fas fa-scroll', title: 'Schriftlichkeit',
              text: 'Die Verschriftlichung der Gesetze (Solons Reformen in Athen, ca. 594 v. Chr.) machte Normen öffentlich und diskutierbar. Was geschrieben steht, kann geprüft, verglichen und kritisiert werden — ein Vorbild für die philosophische Methode.' },
          ])}
        </div>

        <div class="wim-category hidden" data-wim-cat="oekonomie">
          <h3 class="lz-h3">Materielle Voraussetzungen des Denkens</h3>
          <p class="lz-prose">
            Aristoteles bemerkt in der <em>Metaphysik</em> (I, 1, 981b): Die
            theoretischen Wissenschaften entstanden dort, „wo die Menschen
            <strong>Muße</strong> (scholḗ) hatten" — nämlich in den
            wohlhabenden Handelsstädten. Philosophie setzt eine Gesellschaft
            voraus, die nicht alle Energie auf das bloße Überleben verwendet.
          </p>
          ${renderMerkboxGrid([
            { icon: 'fas fa-coins', title: 'Geldwirtschaft',
              text: 'Die Erfindung der Münzprägung (Lydien, ca. 650 v. Chr.) abstrahierte vom konkreten Tauschhandel. Geld als „abstraktes Maß aller Dinge" könnte das abstrakte Denken der Philosophen inspiriert haben (so die These von A. Sohn-Rethel).' },
            { icon: 'fas fa-user-tie', title: 'Oberschicht mit Freizeit',
              text: 'Die Vorsokratiker gehörten durchweg zur wohlhabenden Oberschicht: Thales war Kaufmann, Heraklit entstammte dem ephesischen Königsgeschlecht, Empedokles einer aristokratischen Familie. Sklavenarbeit ermöglichte den Freien die Muße zum Denken.' },
            { icon: 'fas fa-ship', title: 'Kolonisation',
              text: 'Die griechische Kolonisation (8.–6. Jh. v. Chr.) schuf neue Gemeinwesen, die sich Gesetze „von Grund auf" geben mussten — eine praktische Übung im Nachdenken über Ordnungsprinzipien, die das philosophische Fragen beförderte.' },
          ])}
        </div>

        <!-- ── Mythos vs. Logos ── -->

        ${renderSubhead('Mythos vs. Logos — Der Vergleich')}

        ${renderCompare({
          titleA: 'Mythos (mythologisches Denken)',
          titleB: 'Logos (philosophisches Denken)',
          listA: [
            'Erzählung, Genealogie, Narration',
            'Personale Agenten (Götter, Dämonen)',
            'Autorität der Tradition',
            'Ambivalenz, Widersprüche toleriert',
            'Bildhafte, symbolische Sprache',
            'Kollektives Eigentum der Gemeinschaft',
            'Zyklische Zeitvorstellung',
            'Ritual und Kult als Vermittlung',
          ],
          listB: [
            'Argument, Definition, Beweis',
            'Unpersönliche Prinzipien (Arché, Logos)',
            'Autorität der Begründung',
            'Widerspruchsfreiheit als Ideal',
            'Begriffliche, abstrakte Sprache',
            'Individuelle Einsicht des Denkers',
            'Offener Erkenntnisfortschritt',
            'Prüfende Vernunft als Vermittlung',
          ],
        })}

        ${renderFormulaBox({
          label: 'Wilhelm Nestle (1940)',
          formula: '„Vom Mythos zum Logos"',
          desc: 'Der klassische Buchtitel von Wilhelm Nestle prägte die Standardbeschreibung dieses Übergangs. Die neuere Forschung (z.B. Jean-Pierre Vernant) betont allerdings, dass Mythos und Logos keine strikten Gegensätze sind, sondern lange koexistierten und sich gegenseitig beeinflussten.'
        })}

        ${renderInfobox({
          type: 'warning', icon: 'fas fa-exclamation-triangle',
          title: 'Differenzierte Sicht — Prüfungsrelevant',
          body: 'In der neueren Forschung wird die scharfe Trennung Mythos/Logos <strong>kritisiert</strong>: (1) Schon im Mythos gibt es rationale Strukturen (kosmische Ordnung, Kausalität durch Genealogie). (2) Auch bei den Vorsokratikern finden sich mythische Elemente (Empedokles als Wunderheiler, Pythagoras als religiöser Guru). (3) Platon nutzt bewusst Mythen als philosophische Darstellungsform (Höhlengleichnis, Er-Mythos). Der Übergang ist <strong>graduell</strong>, nicht abrupt.'
        })}

      </div>
    </section>


    <!-- ═══════════════════════════════════════════════════════════
         3. DIE ARCHÉ-FRAGE
         ═══════════════════════════════════════════════════════════ -->
    <section class="lz-content-section">
      <div class="lz-section-wrap">

        ${renderSubhead('Die zentrale Frage: Was ist die Arché?')}

        <h2 class="lz-h2 reveal">Archḗ — der <em>Urgrund</em> aller Dinge</h2>

        <p class="lz-prose reveal">
          Das griechische Wort <strong>archḗ</strong> (ἀρχή) hat eine doppelte
          Bedeutung: Es meint sowohl den <strong>zeitlichen Anfang</strong> (Ursprung)
          als auch das <strong>herrschende Prinzip</strong> (Grund, Ursache). Die
          Vorsokratiker fragten also zugleich: Woraus ist die Welt <em>entstanden</em>?
          Und: Was <em>regiert</em> die Welt im Innersten?
        </p>

        <p class="lz-prose reveal">
          Diese Doppeldeutigkeit ist kein Zufall: Für die griechischen Denker war der
          Urgrund immer auch das <strong>aktuell Wirksame</strong>. Die Arché ist nicht
          nur der historische Anfang der Welt, sondern das Prinzip, das sie
          <strong>jetzt</strong> zusammenhält und ordnet. Man kann sie sich als eine Art
          „Grundstoff" vorstellen, der in allen Verwandlungen erhalten bleibt — ähnlich
          dem Energieerhaltungssatz der modernen Physik.
        </p>

        ${renderMerkboxGrid([
          { icon: 'fas fa-search', title: 'Die philosophische Frage',
            text: '„Was ist der Urgrund (archḗ) aller Dinge?" — Diese Frage ist der Motor der gesamten vorsokratischen Philosophie. Jeder Denker gibt eine andere Antwort, aber alle teilen die Überzeugung, dass es eine rationale Antwort geben muss.' },
          { icon: 'fas fa-layer-group', title: 'Einheit hinter der Vielfalt',
            text: 'Die Welt zeigt uns unendliche Vielfalt: Wasser, Feuer, Pflanzen, Tiere, Sterne. Die Philosophen suchen das Eine hinter dem Vielen — ein einzelnes Prinzip, das alles erklärt. Reduktion auf das Wesentliche ist das Markenzeichen der Philosophie.' },
          { icon: 'fas fa-atom', title: 'Monismus vs. Pluralismus',
            text: 'Einige Denker (Thales, Anaximenes, Heraklit) bestimmen eine einzige Arché (Monismus). Andere (Empedokles: vier Elemente; Demokrit: unendlich viele Atome) setzen mehrere Grundbausteine an (Pluralismus). Anaxagoras vertritt einen Monismus des Geistes bei materiellem Pluralismus.' },
          { icon: 'fas fa-arrows-alt', title: 'Werden und Vergehen',
            text: 'Die Frage nach der Arché impliziert eine zweite: Wie entstehen aus dem Urgrund die vielen Einzeldinge? Durch Verdichtung/Verdünnung (Anaximenes), durch Trennung der Gegensätze (Anaximander), durch Mischung und Entmischung (Empedokles)? Der Mechanismus ist ebenso wichtig wie der Stoff.' },
        ])}

        ${renderTable({
          headers: ['Denker', 'Arché', 'Typ', 'Mechanismus'],
          rows: [
            ['Thales',       'Wasser',           'Monismus (konkret)',  'Verdichtung / Verdünnung (implizit)'],
            ['Anaximander',  'Ápeiron',           'Monismus (abstrakt)', 'Aussonderung der Gegensätze'],
            ['Anaximenes',   'Luft',              'Monismus (konkret)',  'Verdichtung → Erde; Verdünnung → Feuer'],
            ['Pythagoras',   'Zahl',              'Monismus (formal)',   'Zahlenverhältnisse bestimmen Struktur'],
            ['Heraklit',     'Feuer / Logos',     'Monismus (prozessual)','Ewiger Wandel der Gegensätze'],
            ['Parmenides',   'Das Seiende',       'Strikter Monismus',   'Kein Wandel — alles Werden ist Schein'],
            ['Empedokles',   '4 Elemente',        'Pluralismus',         'Mischung (Liebe) / Trennung (Streit)'],
            ['Anaxagoras',   'Homoiomerien + Nous','Dualistisch',        'Nous stößt Wirbel an → Ordnung'],
            ['Demokrit',     'Atome + Leeres',    'Pluralismus',         'Mechanische Bewegung im leeren Raum'],
          ],
          highlight: [4, 5],
        })}

      </div>
    </section>


    <!-- ═══════════════════════════════════════════════════════════
         4. DER KOSMOS-GEDANKE
         ═══════════════════════════════════════════════════════════ -->
    <section class="lz-content-section">
      <div class="lz-section-wrap">

        ${renderSubhead('Der Kosmos-Gedanke')}

        <h2 class="lz-h2 reveal">Kósmos — die <em>schöne Ordnung</em></h2>

        <p class="lz-prose reveal">
          Das Wort <strong>kósmos</strong> (κόσμος) bedeutet ursprünglich „Schmuck",
          „Ordnung", „Zier" (vgl. „Kosmetik"). Die Vorsokratiker übertrugen es auf
          das Weltganze: Die Welt ist kein Chaos, sondern ein <strong>geordnetes,
          gesetzmäßiges Ganzes</strong>. Diese Überzeugung ist die tiefste Prämisse
          aller Naturphilosophie — und aller Naturwissenschaft bis heute.
        </p>

        ${renderMerkboxGrid([
          { icon: 'fas fa-globe', title: 'Kosmos = Ordnung',
            text: 'Die Welt ist nicht zufällig, sondern folgt einer inneren Gesetzmäßigkeit. Diese Ordnung ist erkennbar — nicht durch göttliche Offenbarung, sondern durch menschliche Vernunft. Das ist die Grundüberzeugung, die Philosophie und Wissenschaft verbindet.' },
          { icon: 'fas fa-balance-scale', title: 'Díkē (Gerechtigkeit)',
            text: 'Viele Vorsokratiker (besonders Anaximander und Heraklit) verstehen die kosmische Ordnung als eine Art Gerechtigkeit: Die Dinge halten sich gegenseitig in Schranken, keines darf übergreifen. Kosmologie und Ethik sind noch nicht getrennt.' },
          { icon: 'fas fa-eye', title: 'Theoría (Schau)',
            text: 'Das griechische Wort für „Theorie" (theoría) bedeutet ursprünglich „Schau", „Betrachtung". Der Philosoph ist ein Zuschauer (theorós) des kosmischen Schauspiels — ein kontemplatives Ideal, das bis Aristoteles (bíos theoretikós) und darüber hinaus wirkt.' },
          { icon: 'fas fa-circle-notch', title: 'Phýsis (Natur)',
            text: 'Phýsis (von phýein = wachsen, entstehen) meint nicht die „Natur" im modernen Sinn, sondern das Wesen und den Werdegrund aller Dinge. „Über die Phýsis" (perì phýseōs) war der typische Titel vorsokratischer Schriften — daher „Naturphilosophen" (physiológoi).' },
        ])}

        ${renderFormulaBox({
          label: 'Aristoteles, Metaphysik I, 2, 982b',
          formula: '„Denn durch Verwunderung (thaumázein) begannen die Menschen,<br>wie jetzt so auch zuerst, zu philosophieren."',
          desc: 'Aristoteles identifiziert das Staunen als Ursprung der Philosophie — nicht praktische Not, nicht religiöse Furcht, sondern die reine Verwunderung über die Ordnung der Welt.'
        })}

      </div>
    </section>


    <!-- ═══════════════════════════════════════════════════════════
         5. ÜBERBLICK: EPOCHEN & SCHULEN
         ═══════════════════════════════════════════════════════════ -->
    <section class="lz-content-section">
      <div class="lz-section-wrap">

        ${renderSubhead('Überblick: Schulen & Epochen der Vorsokratik')}

        <h2 class="lz-h2 reveal">Drei große <em>Strömungen</em></h2>

        <p class="lz-prose reveal">
          Die vorsokratische Philosophie umfasst einen Zeitraum von etwa 200 Jahren
          (ca. 625–420 v.&nbsp;Chr.) und lässt sich in drei große Strömungen gliedern,
          die sich chronologisch und inhaltlich überlappen:
        </p>

        ${renderMerkboxGrid([
          { icon: 'fas fa-water', title: '1. Ionische Naturphilosophie (ab ca. 625)',
            text: 'Thales, Anaximander, Anaximenes in Milet; Heraklit in Ephesos; Anaxagoras in Klazomenai. Frage: Woraus besteht die Natur? Materialistische Grundtendenz: Die Arché ist ein Naturstoff oder ein stoffliches Prinzip.' },
          { icon: 'fas fa-shapes', title: '2. Italische Philosophie (ab ca. 570)',
            text: 'Pythagoras in Kroton, Parmenides und Zenon in Elea, Empedokles in Akragas (Sizilien). Frage: Was ist das wahre Sein? Formale und ontologische Grundtendenz: Nicht Stoff, sondern Struktur (Zahl) oder reines Sein.' },
          { icon: 'fas fa-comments', title: '3. Sophistik (ab ca. 450)',
            text: 'Protagoras, Gorgias, Hippias, Prodikos — wandernde Lehrer in Athen. Wende zum Menschen: Nicht mehr die Natur, sondern der Mensch, seine Sprache, seine Normen und seine Erkenntnisfähigkeit stehen im Zentrum.' },
        ])}

        ${renderVTimeline([
          { year: 'ca. 625 v. Chr.', title: 'Geburt der Philosophie in Milet',
            text: 'Thales stellt die erste Arché-Frage — Beginn der ionischen Naturphilosophie' },
          { year: 'ca. 570 v. Chr.', title: 'Pythagoras gründet seinen Bund',
            text: 'In Kroton (Süditalien): Mathematik, Musik und Philosophie als Einheit' },
          { year: 'ca. 550 v. Chr.', title: 'Heraklit in Ephesos',
            text: '„Alles fließt" — Philosophie des Werdens und der Gegensätze' },
          { year: 'ca. 515 v. Chr.', title: 'Parmenides Lehrgedicht',
            text: '„Das Seiende ist" — die eleatische Gegenposition zum Werden' },
          { year: '494 v. Chr.', title: 'Zerstörung Milets durch die Perser',
            text: 'Ende der milesischen Schule — das geistige Zentrum verlagert sich' },
          { year: 'ca. 470 v. Chr.', title: 'Demokrit entwickelt den Atomismus',
            text: 'Nur Atome und Leeres — materialistische Synthese der Vorsokratik' },
          { year: '450–420 v. Chr.', title: 'Sophistenbewegung in Athen',
            text: 'Protagoras, Gorgias: Relativismus, Rhetorik, Gesellschaftstheorie' },
          { year: '399 v. Chr.', title: 'Tod des Sokrates',
            text: 'Ende der „vorsokratischen" Ära — Beginn der klassischen Philosophie' },
        ])}

      </div>
    </section>


    <!-- ═══════════════════════════════════════════════════════════
         6. QUELLENLAGE
         ═══════════════════════════════════════════════════════════ -->
    <section class="lz-content-section">
      <div class="lz-section-wrap">

        ${renderSubhead('Zur Quellenlage')}

        <h2 class="lz-h2 reveal">Das Problem der <em>Überlieferung</em></h2>

        <p class="lz-prose reveal">
          Kein einziges Werk der Vorsokratiker ist vollständig erhalten. Was wir
          besitzen, sind <strong>Fragmente</strong> — meist einzelne Sätze, die spätere
          Autoren (Aristoteles, Simplikios, Diogenes Laertios u.&nbsp;a.) zitieren.
          Die maßgebliche Sammlung ist die <em>Fragmente der Vorsokratiker</em> von
          <strong>Hermann Diels</strong> und <strong>Walther Kranz</strong> (1903, kurz: DK).
        </p>

        ${renderMerkboxGrid([
          { icon: 'fas fa-file-alt', title: 'A-Fragmente (Testimonien)',
            text: 'Berichte späterer Autoren über die Lehre eines Vorsokratikers. Beispiel: Aristoteles erzählt, was Thales gelehrt habe. Problem: Die Darstellung ist oft durch die Perspektive des Berichterstatters gefärbt.' },
          { icon: 'fas fa-quote-right', title: 'B-Fragmente (Wörtliche Zitate)',
            text: 'Sätze, die von späteren Autoren als wörtliche Zitate angeführt werden. Beispiel: „Alles ist voll von Göttern" (Thales, DK 11 A 22). Problem: Ob wirklich wörtlich zitiert wird, ist oft unsicher.' },
          { icon: 'fas fa-puzzle-piece', title: 'Interpretationsproblem',
            text: 'Wir sehen die Vorsokratiker immer „durch die Brille" späterer Denker — vor allem Platons und Aristoteles\'. Aristoteles ordnet die Vorsokratiker in sein eigenes Vier-Ursachen-Schema ein, was ihre Originalität teilweise verzerrt.' },
        ])}

        ${renderInfobox({
          type: 'blue', icon: 'fas fa-graduation-cap',
          title: 'Abitur-Hinweis: Umgang mit Fragmenten',
          body: 'In Klausuren wird gelegentlich gefragt: <strong>„Diskutieren Sie die Zuverlässigkeit unserer Kenntnisse über die Vorsokratiker."</strong> Gute Antworten thematisieren: (1) Fragmentarische Überlieferung, (2) Perspektive der Doxographen (v.a. Aristoteles), (3) Unsicherheit bei der Zuordnung von Zitaten, (4) trotzdem erstaunliche Kohärenz der Grundgedanken.'
        })}

      </div>
    </section>


    <!-- ═══════════════════════════════════════════════════════════
         7. ZUSAMMENFASSUNG & LERNFRAGEN
         ═══════════════════════════════════════════════════════════ -->
    <section class="lz-content-section">
      <div class="lz-section-wrap">

        ${renderSubhead('Zusammenfassung & Testfragen')}

        ${renderTable({
          headers: ['Begriff', 'Erklärung', 'Bedeutung'],
          rows: [
            ['Mythos',    'Erzählende, göttlich-personale Welterklärung',    'Dominante Denkform vor der Philosophie'],
            ['Logos',     'Rationale, argumentative Begründung',             'Grundprinzip der philosophischen Methode'],
            ['Archḗ',    'Urgrund, Urprinzip aller Dinge',                  'Leitfrage der gesamten Vorsokratik'],
            ['Kósmos',   'Geordnetes, gesetzmäßiges Weltganzes',            'Grundüberzeugung der Naturphilosophie'],
            ['Phýsis',   'Natur, Wesen, Werdegrund',                        'Gegenstand der vorsokratischen Untersuchung'],
            ['Theoría',  'Kontemplative Betrachtung',                       'Ideal des philosophischen Lebens'],
            ['Polis',    'Griechischer Stadtstaat',                          'Politische Voraussetzung für freies Denken'],
            ['Agṓn',    'Wettstreit (sportlich, künstlerisch, geistig)',    'Fördert argumentative Kultur'],
          ],
          highlight: [0, 1, 2],
        })}

        ${renderAccordion([
          { title: '1. Beschreiben Sie den Übergang vom Mythos zum Logos und nennen Sie drei Unterschiede.',
            content: '<p class="lz-prose">Der Übergang vom Mythos zum Logos beschreibt den Wandel von <strong>mythologisch-narrativen</strong> zu <strong>rational-argumentativen</strong> Welterklärungen im 6. Jh. v. Chr. <br><br><strong>Drei Unterschiede:</strong><br>(1) <strong>Erklärungsform:</strong> Mythos erklärt durch Erzählung und göttliche Genealogie, Logos durch Argumentation und Naturprinzipien.<br>(2) <strong>Geltungsanspruch:</strong> Mythos beruft sich auf die Autorität der Tradition, Logos auf die Überzeugungskraft des besseren Arguments.<br>(3) <strong>Personale vs. unpersönliche Kräfte:</strong> Im Mythos handeln Götter mit Absichten und Emotionen, im Logos wirken abstrakte Naturkräfte nach gesetzmäßigen Prinzipien.<br><br>Wichtig: Der Übergang war <strong>graduell</strong> — mythische und rationale Elemente koexistierten lange.</p>' },
          { title: '2. Welche kulturellen Voraussetzungen ermöglichten die Entstehung der Philosophie in Ionien?',
            content: '<p class="lz-prose"><strong>(a) Geopolitische Lage:</strong> Die ionischen Handelsstädte (Milet, Ephesos) lagen am Kreuzungspunkt verschiedener Hochkulturen — Kontakt mit ägyptischer Geometrie, babylonischer Astronomie und phönizischer Alphabetschrift förderte abstraktes Denken und relativierte die eigene Tradition.<br><br><strong>(b) Polis-Struktur:</strong> Die demokratische bzw. oligarchische Verfassung der Stadtstaaten schuf Räume für öffentliche Debatte und argumentativen Wettstreit (agṓn). Isonomía (Gleichheit vor dem Gesetz) förderte die Idee, dass Wahrheit durch Gründe, nicht durch Autorität zu gewinnen ist.<br><br><strong>(c) Ökonomische Basis:</strong> Wohlstand durch Fernhandel und Sklavenarbeit ermöglichte einer Oberschicht die Muße (scholḗ) zum theoretischen Nachdenken.<br><br><strong>(d) Schriftlichkeit:</strong> Die Übernahme und Weiterentwicklung des phönizischen Alphabets ermöglichte die Fixierung komplexer Gedanken und deren kritische Überprüfung.</p>' },
          { title: '3. Was bedeutet das Wort „archḗ" und warum ist die Doppeldeutigkeit philosophisch bedeutsam?',
            content: '<p class="lz-prose">Archḗ (ἀρχή) bedeutet gleichzeitig <strong>zeitlicher Anfang/Ursprung</strong> und <strong>herrschendes Prinzip/Grund</strong>. Diese Doppeldeutigkeit ist kein sprachlicher Zufall, sondern spiegelt eine tiefe philosophische Überzeugung: Der <strong>Urgrund ist zugleich das aktuell Wirksame</strong>. Wenn Thales sagt „Alles ist Wasser", meint er: Alles <em>entstand</em> aus Wasser UND Wasser ist das Prinzip, das die Welt <em>jetzt</em> zusammenhält.<br><br>Philosophisch bedeutsam ist dies, weil es die <strong>Einheit von Kosmogonie (Weltentstehung) und Kosmologie (Weltbeschreibung)</strong> herstellt: Die Frage „Woher kommt alles?" und die Frage „Was hält alles zusammen?" haben dieselbe Antwort. Dieses Denkmuster prägt die gesamte Philosophiegeschichte — noch Hegel sucht ein einziges Prinzip (den Geist), das zugleich Ursprung und Wesen der Wirklichkeit ist.</p>' },
          { title: '4. Erläutern Sie den Begriff „Kosmos" und seine Bedeutung für das vorsokratische Denken.',
            content: '<p class="lz-prose">Kósmos (κόσμος) bedeutet wörtlich „Schmuck, Ordnung, Zierde" und wird von den Vorsokratikern — vermutlich erstmals von Pythagoras — auf das <strong>Weltganze</strong> übertragen. Die Implikation ist revolutionär: Die Welt ist kein Chaos und keine willkürliche Schöpfung launischer Götter, sondern ein <strong>geordnetes, gesetzmäßiges, harmonisches Ganzes</strong>.<br><br>Für die Vorsokratik ist der Kosmos-Gedanke fundamental, weil er die <strong>Voraussetzung aller Wissenschaft</strong> bildet: Nur wenn die Welt geordnet ist, kann sie erkannt werden. Nur wenn es Gesetzmäßigkeiten gibt, lohnt es sich, nach ihnen zu suchen.<br><br>Bemerkenswert ist die enge Verbindung von <strong>Kosmologie und Ethik</strong>: Die kosmische Ordnung (díkē) ist zugleich ein Modell für die menschliche Ordnung. Anaximander spricht von „Strafe und Buße" der Dinge, Heraklit vom „Logos", der Natur und Menschenwelt gleichermaßen regiert. Die Trennung von Natur- und Moralphilosophie vollzieht erst Sokrates.</p>' },
          { title: '5. Warum muss man bei der Interpretation der Vorsokratiker vorsichtig sein? Diskutieren Sie das Quellenproblem.',
            content: '<p class="lz-prose">Die Vorsokratiker-Interpretation steht vor einem grundlegenden <strong>Quellenproblem</strong>: Kein einziges Originalwerk ist vollständig erhalten. Unsere Kenntnis beruht auf zwei Arten von Quellen:<br><br><strong>(1) Testimonien (A-Fragmente):</strong> Spätere Autoren — vor allem Aristoteles, Theophrast, Simplikios — berichten über die Lehren der Vorsokratiker. Problem: Diese Berichte sind <strong>perspektivisch verzerrt</strong>. Aristoteles z.B. ordnet die Vorsokratiker in sein eigenes Vier-Ursachen-Schema ein und beschreibt sie als „Vorläufer", die seine eigene Position noch nicht erreicht hätten.<br><br><strong>(2) Wörtliche Zitate (B-Fragmente):</strong> Einzelne Sätze, die als direkte Zitate angeführt werden. Problem: Ob tatsächlich wörtlich zitiert wird, ist oft unsicher. Der Kontext fehlt meist — ein einzelner Satz kann verschiedene Bedeutungen haben.<br><br><strong>Methodische Konsequenz:</strong> Jede Interpretation muss <strong>die Überlieferungssituation reflektieren</strong>. Man darf nicht einfach Aristoteles\' Interpretation für bare Münze nehmen, sondern muss fragen: Wird hier der Vorsokratiker selbst oder Aristoteles\' Deutung wiedergegeben? Die maßgebliche Quellensammlung ist die <em>Fragmente der Vorsokratiker</em> von Diels/Kranz (DK, 1903).</p>' },
        ])}

      </div>
    </section>


    <!-- ═══════════════════════════════════════════════════════════
         NAVIGATION
         ═══════════════════════════════════════════════════════════ -->
    <section class="lz-content-section" style="padding-top:0;">
      <div class="lz-section-wrap">
        ${renderPageNav({
          prev: { label: 'Foucault', link: `${BASE}/themen/gegenwart/foucault` },
          next: { label: 'Ionische Naturphilosophen', link: `${BASE}/themen/vorsokratik/ionische-naturphilosophen` },
        }, BASE)}
      </div>
    </section>

    <!-- ═══════════════════════════════════════════════════════════
         FOOTER
         ═══════════════════════════════════════════════════════════ -->
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