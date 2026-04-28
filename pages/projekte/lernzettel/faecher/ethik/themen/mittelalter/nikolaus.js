// pages/projekte/lernzettel/faecher/ethik/themen/mittelalter/nikolaus.js
// ══════════════════════════════════════════════════════════════════
// Kapitel 5.6 — Nikolaus von Kues (1401–1464)
// Docta ignorantia, Coincidentia oppositorum, Mathematik & Unendlichkeit
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

const COINCIDENTIA_TABS = [
  { key: 'math',    label: 'Mathematische Veranschaulichung' },
  { key: 'theol',   label: 'Theologische Bedeutung' },
];

export default class NikolausPage {
  constructor(router) { this.router = router; }
  render() {
    ensureComponentsCSS();
    loadComponentCSS('pages/projekte/lernzettel/styles/sub.css');
    const el = document.createElement('div');
    el.className = 'page page-nikolaus';
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
          <span>Nikolaus von Kues</span>
        </nav>
        <h1 class="lz-sub-title"><em>Nikolaus</em> von Kues — Gelehrte Unwissenheit</h1>
        <p class="lz-sub-desc">
          Der „Cusanus" steht an der Schwelle vom Mittelalter zur Neuzeit:
          Er vereinigt mystisches Denken mit mathematischer Präzision und entwirft
          eine kühne Philosophie des Unendlichen, die das mittelalterliche
          Weltbild von innen heraus aufsprengt.
        </p>
        ${renderTags(['Kapitel 5.6', '1401–1464', 'Kues · Padua · Rom', 'Docta ignorantia · Coincidentia oppositorum · Unendlichkeit', 'Abitur 2026'])}
      </div>
    </section>

    <section class="lz-content-section">
      <div class="lz-section-wrap">
        ${renderSubhead('Biographisches')}
        <h2 class="lz-h2 reveal">Zwischen <em>Mystik und Mathematik</em></h2>
        <p class="lz-prose reveal">
          Nikolaus Krebs (latinisiert: <strong>Nicolaus Cusanus</strong>) wurde 1401
          in <strong>Kues</strong> an der Mosel geboren — Sohn eines wohlhabenden
          Schiffers und Weinhändlers. Er studierte in <strong>Heidelberg</strong>,
          <strong>Padua</strong> (Kirchenrecht, Mathematik, Astronomie) und
          <strong>Köln</strong>, wurde Jurist, Diplomat, Bischof von Brixen und
          Kardinal. Er war einer der universalsten Gelehrten seiner Epoche und
          einer der wenigen mittelalterlichen Denker, die eine eigenständige,
          originelle Philosophie schufen.
        </p>
        ${renderVTimeline([
          { year: '1401', title: 'Geburt in Kues (Mosel)', text: 'Bürgerliche Familie; Vater war Schiffer und Weinhändler' },
          { year: '1416', title: 'Studium in Heidelberg', text: 'Artes liberales; frühes Interesse an Logik und Astronomie' },
          { year: '1417–23', title: 'Studium in Padua', text: 'Kirchenrecht und Mathematik; Promotion zum Doctor decretorum' },
          { year: '1425', title: 'Studium in Köln', text: 'Kontakt mit Albertus-Magnus-Tradition und Eckhart-Rezeption' },
          { year: '1432–37', title: 'Konzil von Basel', text: 'Diplomat und Kirchenreformer; Concordantia catholica (Reformschrift)' },
          { year: '1437', title: 'Erleuchtungserlebnis auf See', text: 'Auf der Rückreise von Konstantinopel: Idee der docta ignorantia „wie ein Geschenk von oben"' },
          { year: '1440', title: 'De docta ignorantia', text: 'Hauptwerk: „Die belehrte Unwissenheit" — Grundlegung seiner Philosophie' },
          { year: '1448', title: 'Kardinal', text: 'Ernennung durch Papst Nikolaus V.' },
          { year: '1450', title: 'Bischof von Brixen', text: 'Reformversuche; Konflikte mit dem Tiroler Adel und Erzherzog Sigmund' },
          { year: '1453', title: 'De visione Dei', text: '„Über die Gottesschau" — mystische Schrift für die Mönche von Tegernsee' },
          { year: '1464', title: 'Tod in Todi (Umbrien)', text: 'Auf einer Reise; Herz in Kues bestattet, Leib in Rom (San Pietro in Vincoli)' },
        ])}
        ${renderInfobox({
          type: '', icon: 'fas fa-info-circle',
          title: 'Das Erleuchtungserlebnis',
          body: 'Auf der Rückreise vom Konzil in Konstantinopel (1437/38) hatte Cusanus auf dem Schiff ein <strong>Erleuchtungserlebnis</strong>: Die Grundidee der <em>docta ignorantia</em> — dass die Wahrheit nur über den Weg der Unwissenheit erreichbar ist — kam ihm plötzlich, „wie ein Geschenk von oben" (donum a patre luminum). Wie bei Plotin und Eckhart ist die höchste Erkenntnis nicht das Ergebnis logischer Arbeit, sondern einer <strong>plötzlichen Einsicht</strong> (intuitio).'
        })}
      </div>
    </section>

    <section class="lz-content-section">
      <div class="lz-section-wrap">
        ${renderSubhead('De docta ignorantia — Die belehrte Unwissenheit')}
        <h2 class="lz-h2 reveal">Wissen, dass man <em>nicht weiß</em></h2>
        <p class="lz-prose reveal">
          Das Hauptwerk <em>De docta ignorantia</em> (1440) entwickelt eine
          Erkenntnistheorie, die paradox klingt: Die höchste Form des Wissens
          ist das <strong>Wissen um das eigene Nicht-Wissen</strong>. Nicht die
          sokratische Bescheidenheit („Ich weiß, dass ich nichts weiß"), sondern
          eine <strong>systematisch begründete Einsicht</strong>: Warum muss alle
          menschliche Erkenntnis prinzipiell ungenau bleiben?
        </p>
        ${renderMerkboxGrid([
          { icon: 'fas fa-ruler', title: 'Das Maß-Argument',
            text: 'Alle Erkenntnis beruht auf Vergleich (comparatio) — wir erkennen etwas, indem wir es mit einem bekannten Maß vergleichen. Aber das Unendliche (Gott) hat kein Maß, zu dem es in Proportion steht. Also ist Gott durch Vergleich prinzipiell unerkennbar. Das Endliche kann das Unendliche nicht „messen".' },
          { icon: 'fas fa-chart-line', title: 'Die Kreis-Metapher',
            text: 'Ein Vieleck (Polygon) mit immer mehr Seiten nähert sich dem Kreis an — wird aber nie zum Kreis. Ebenso nähert sich das menschliche Wissen der Wahrheit an — ohne sie je vollständig zu erreichen. Die Wahrheit ist wie ein Kreis: asymptotisch erreichbar, nie identisch mit unserer Annäherung.' },
          { icon: 'fas fa-lightbulb', title: 'Docta ignorantia',
            text: 'Die „belehrte Unwissenheit" ist keine Resignation, sondern die höchste Stufe der Erkenntnis: Wer versteht, WARUM er nicht wissen kann, weiß mehr als der, der fälschlich zu wissen glaubt. Die docta ignorantia ist das philosophische Äquivalent der mystischen „dunklen Nacht" — Erkenntnis an der Grenze des Erkennbaren.' },
          { icon: 'fas fa-search-plus', title: 'Präzision der Konjektur',
            text: 'Cusanus spricht von „Konjekturen" (coniecturae) — vorläufigen Vermutungen, die sich der Wahrheit annähern, ohne sie zu erreichen. Alle menschliche Erkenntnis ist Konjektur — nicht absolutes Wissen, aber auch nicht bloße Meinung. Je genauer die Konjektur, desto näher der Wahrheit — wie das Polygon dem Kreis.' },
        ])}
        ${renderFormulaBox({
          label: 'Cusanus, De docta ignorantia I, 1',
          formula: '„Ich habe herausgefunden, dass der Weg des Unbegreiflichen<br>nur in unbegreiflicher Weise betreten werden kann.<br>Und dies nenne ich die belehrte Unwissenheit<br>(doctam ignorantiam)."',
          desc: 'Die Paradoxie: Das Unbegreifliche begreifen heißt begreifen, dass es unbegreiflich ist. Das Wissen des Nicht-Wissens ist die höchste Form der Weisheit.'
        })}
      </div>
    </section>

    <section class="lz-content-section">
      <div class="lz-section-wrap">
        ${renderSubhead('Coincidentia oppositorum — Zusammenfall der Gegensätze')}
        <h2 class="lz-h2 reveal">Wo Gegensätze <em>eins</em> werden</h2>
        <p class="lz-prose reveal">
          Der revolutionärste Gedanke des Cusanus: In Gott fallen alle Gegensätze
          zusammen — das Größte und das Kleinste, das Maximale und das Minimale,
          Ruhe und Bewegung, Einheit und Vielheit. Die <strong>coincidentia
          oppositorum</strong> (der Zusammenfall der Gegensätze) ist das Prinzip,
          das Cusanus' gesamtes Denken durchzieht.
        </p>
        <nav class="wim-tabs" id="cusanus-coincidentia-tabs" aria-label="Coincidentia oppositorum">
          ${COINCIDENTIA_TABS.map((t, i) => `
            <button class="wim-tab${i === 0 ? ' active' : ''}" data-wim="${t.key}">
              ${t.label}
            </button>`).join('')}
        </nav>
        <div class="wim-category" data-wim-cat="math">
          <h3 class="lz-h3">Geometrie des Unendlichen</h3>
          <p class="lz-prose">Cusanus nutzt die Mathematik als <strong>Gleichnis</strong> (nicht als Beweis): Was passiert, wenn geometrische Figuren ins Unendliche vergrößert werden?</p>
          ${renderMerkboxGrid([
            { icon: 'fas fa-circle', title: 'Unendlicher Kreis = Gerade Linie',
              text: 'Ein Kreis mit unendlichem Radius hat eine Krümmung von null — seine Peripherie wird zur geraden Linie. Im Unendlichen fallen Kreis und Gerade zusammen: Krumm und Gerade, Endliches und Unendliches werden eins.' },
            { icon: 'fas fa-draw-polygon', title: 'Unendliches Dreieck = Linie',
              text: 'Verlängert man eine Seite eines Dreiecks ins Unendliche, verschwindet der Winkel — das Dreieck wird zur Linie. Im Unendlichen fallen Fläche und Linie, Vielheit (3 Seiten) und Einheit (1 Linie) zusammen.' },
            { icon: 'fas fa-dot-circle', title: 'Maximum = Minimum',
              text: 'Der absolut größte Kreis (Maximum) und der absolut kleinste Punkt (Minimum) fallen im Unendlichen zusammen: Wenn der Kreis unendlich groß wird, ist jeder Punkt sein Mittelpunkt — und er unterscheidet sich nicht mehr vom Punkt.' },
          ])}
          <p class="lz-prose">Diese geometrischen Überlegungen sind <strong>Gleichnisse</strong> für das göttliche Sein: In Gott (= dem absoluten Maximum) fallen alle endlichen Unterscheidungen zusammen. Was für den endlichen Verstand ein Widerspruch ist (A und Nicht-A), ist in Gott Einheit.</p>
        </div>
        <div class="wim-category hidden" data-wim-cat="theol">
          <h3 class="lz-h3">Gott als Maximum absolutum</h3>
          <p class="lz-prose">Gott ist das <strong>absolute Maximum</strong> — das, worüber hinaus nichts Größeres sein kann (Anklang an Anselm). Zugleich ist Gott das <strong>absolute Minimum</strong> — denn er ist in allem gegenwärtig, auch im Kleinsten. Und er ist beides zugleich: <strong>Maximum und Minimum fallen zusammen</strong>.</p>
          ${renderMerkboxGrid([
            { icon: 'fas fa-compress-alt', title: 'Complicatio (Einfaltung)',
              text: 'Gott „enthält" alles in sich — nicht als Summe, sondern als Einheit. Alle Gegensätze, alle Möglichkeiten, alle Dinge sind in Gott „eingefaltet" (complicatio). Gott ist die Einheit vor aller Vielheit.' },
            { icon: 'fas fa-expand-alt', title: 'Explicatio (Entfaltung)',
              text: 'Die Welt ist die „Entfaltung" (explicatio) Gottes — die Vielheit, in der sich die göttliche Einheit auseinanderlegt. Die Welt ist „Gott in Andersheit" — nicht identisch mit Gott (kein Pantheismus), aber auch nicht von ihm getrennt.' },
          ])}
          ${renderInfobox({
            type: 'warning', icon: 'fas fa-exclamation-triangle',
            title: 'Pantheismus-Vorwurf',
            body: 'Cusanus wurde vorgeworfen, die Grenze zwischen Gott und Welt aufzuheben (Pantheismus). Er betont dagegen: Gott ist nicht die Welt — er ist in der Welt, aber übersteigt sie unendlich. Die Welt ist Entfaltung Gottes, aber nicht Gott selbst. Cusanus spricht von <strong>Panentheismus</strong>: Gott ist IN allem, aber nicht identisch mit allem.'
          })}
        </div>
      </div>
    </section>

    <section class="lz-content-section">
      <div class="lz-section-wrap">
        ${renderSubhead('Kosmologie — Die Entgrenzung der Welt')}
        <h2 class="lz-h2 reveal">Die Erde ist kein <em>Zentrum</em></h2>
        <p class="lz-prose reveal">
          Cusanus zog aus seiner Philosophie des Unendlichen eine
          <strong>kosmologische Konsequenz</strong>, die dem ptolemäischen
          Weltbild 100 Jahre vor Kopernikus den Boden entzog:
        </p>
        ${renderMerkboxGrid([
          { icon: 'fas fa-globe', title: 'Kein Zentrum, kein Rand',
            text: '„Die Welt hat ihren Umfang nirgendwo und ihren Mittelpunkt überall" (De docta ignorantia II, 12). Wenn das Universum unendlich ist, hat es keinen Mittelpunkt — jeder Punkt ist gleich weit vom „Rand" entfernt (denn es gibt keinen Rand). Die Erde ist daher NICHT das Zentrum der Welt — und die Sonne auch nicht.' },
          { icon: 'fas fa-arrows-alt', title: 'Keine absolute Ruhe',
            text: 'In einem unendlichen Universum gibt es keinen absoluten Ruhepunkt: Alles bewegt sich relativ zu allem anderen. Die Erde bewegt sich — auch wenn wir es nicht bemerken, weil wir uns mit ihr bewegen. 70 Jahre vor Kopernikus und 200 Jahre vor Galilei!' },
          { icon: 'fas fa-star', title: 'Andere Welten',
            text: 'Cusanus hält es für möglich, dass es auf anderen Himmelskörpern Bewohner gibt — „edle Wesen, vielleicht sogar von anderer Art als wir". Eine für das 15. Jh. unerhörte Spekulation, die Giordano Bruno radikalisieren wird.' },
        ])}
        ${renderInfobox({
          type: 'blue', icon: 'fas fa-graduation-cap',
          title: 'Abitur-Hinweis: Cusanus und die Neuzeit',
          body: 'Cusanus gilt als <strong>Schwellenfigur</strong> zwischen Mittelalter und Neuzeit: (1) Seine Kosmologie bereitet Kopernikus und Bruno vor. (2) Seine Erkenntnistheorie (Konjekturen, Perspektivismus) nimmt Kants Kritizismus vorweg. (3) Seine Philosophie des Unendlichen beeinflusst Giordano Bruno, Leibniz und die moderne Mathematik (Cantor). In Klausuren: Cusanus als <strong>Bindeglied</strong> zwischen mittelalterlicher Theologie und neuzeitlicher Wissenschaft darstellen.'
        })}
      </div>
    </section>

    <section class="lz-content-section">
      <div class="lz-section-wrap">
        ${renderSubhead('De visione Dei — Das Sehen Gottes')}
        <h2 class="lz-h2 reveal">Das <em>Allsehende Auge</em></h2>
        <p class="lz-prose reveal">
          In der Schrift <em>De visione Dei</em> (1453) verwendet Cusanus ein
          geniales <strong>Gedankenexperiment</strong>: Er schickt den Mönchen von
          Tegernsee ein Bild mit einem „allsehenden Gesicht" (Rogier van der Weydens
          Vera Icon) — ein Porträt, das den Betrachter anzublicken scheint,
          egal von welcher Seite man es betrachtet.
        </p>
        ${renderMerkboxGrid([
          { icon: 'fas fa-eye', title: 'Das Bildexperiment',
            text: 'Die Mönche sollen das Bild aufhängen und sich davor bewegen: Jeder einzelne fühlt sich von dem Bild angeblickt — auch wenn er sich bewegt. Und alle gleichzeitig werden angeblickt, obwohl sie an verschiedenen Orten stehen. So ist Gottes Blick: Er sieht jeden einzelnen, jeden Moment, von jedem Standpunkt — zugleich.' },
          { icon: 'fas fa-street-view', title: 'Perspektivismus',
            text: 'Jeder Mönch sieht dasselbe Bild — aber von einer anderen Perspektive. Keine Perspektive ist die „wahre" — alle sind gleich berechtigt. So verhält sich der menschliche Verstand zur Wahrheit: Jeder hat eine gültige Perspektive, aber keine ist absolut. Nur Gott sieht „von allen Seiten zugleich" — menschliche Erkenntnis ist immer perspektivisch.' },
          { icon: 'fas fa-infinity', title: 'Mauer des Paradieses',
            text: 'Cusanus spricht von einer „Mauer des Paradieses" (murus paradisi), hinter der Gott wohnt: Diese Mauer ist die coincidentia oppositorum — der Zusammenfall der Gegensätze. Wer die Mauer durchschreiten will, muss die Logik des Widerspruchs überwinden und die Einheit der Gegensätze „sehen" — nicht verstehen, sondern schauen.' },
        ])}
        ${renderFormulaBox({
          label: 'Cusanus, De visione Dei IX',
          formula: '„Die Mauer des Paradieses, in dem du wohnst,<br>besteht aus dem Zusammenfall der Gegensätze.<br>Ihr Tor wird bewacht vom höchsten Geist der Vernunft,<br>und man gewinnt keinen Zutritt, wenn er nicht überwunden wird."',
          desc: 'Die coincidentia oppositorum als „Mauer": Menschliche Vernunft (die auf dem Satz vom Widerspruch beruht) muss überschritten werden, um Gott zu „sehen".'
        })}
      </div>
    </section>

    <section class="lz-content-section">
      <div class="lz-section-wrap">
        ${renderSubhead('Philosophische Einordnung & Wirkung')}
        ${renderCompare({
          titleA: 'Cusanus — Neuansatz', titleB: 'Scholastik — Tradition',
          listA: [
            'Docta ignorantia: Wissen um das <strong>Nicht-Wissen</strong>',
            'Coincidentia: Gegensätze fallen <strong>in Gott zusammen</strong>',
            'Mathematik als <strong>Gleichnis</strong> des Unendlichen',
            'Universum: <strong>unendlich</strong>, kein Zentrum',
            '<strong>Perspektivismus</strong>: Jede Erkenntnis ist standortgebunden',
            'Denken an der <strong>Grenze</strong> der Vernunft',
          ],
          listB: [
            'Scientia: Wissen durch <strong>logische Deduktion</strong>',
            'Satz vom Widerspruch: A und Nicht-A <strong>schließen sich aus</strong>',
            'Logik als <strong>Werkzeug</strong> der Erkenntnis',
            'Universum: <strong>endlich</strong>, Erde im Zentrum',
            '<strong>Universalismus</strong>: Eine Wahrheit für alle',
            'Denken <strong>innerhalb</strong> der Vernunft (ratio)',
          ],
        })}
        ${renderTable({
          headers: ['Nachwirkung', 'Verbindung zu Cusanus'],
          rows: [
            ['<strong>Giordano Bruno</strong>', 'Radikalisierung: unendliches Universum mit unendlich vielen Welten; kein Zentrum'],
            ['<strong>Kopernikus</strong>', 'Cusanus\' Kosmologie als Inspiration für das heliozentrische Modell (umstritten)'],
            ['<strong>Leibniz</strong>', 'Monadologie: Jede Monade spiegelt das Universum „von ihrem Standpunkt aus" — cusanischer Perspektivismus'],
            ['<strong>Kant</strong>', 'Docta ignorantia → Grenzen der Erkenntnis; Ding an sich als Unerkennbares'],
            ['<strong>Hegel</strong>', 'Coincidentia oppositorum → Dialektik: Aufhebung der Gegensätze in der Synthese'],
            ['<strong>Jaspers</strong>', 'Cusanus als Paradigma des „philosophischen Glaubens" — Denken an der Grenze'],
          ],
          highlight: [0, 4],
        })}
      </div>
    </section>

    <section class="lz-content-section">
      <div class="lz-section-wrap">
        ${renderSubhead('Testfragen — Abiturniveau')}
        ${renderAccordion([
          { title: '1. Erklären Sie den Begriff „docta ignorantia" und seine erkenntnistheoretische Bedeutung.',
            content: '<p class="lz-prose"><strong>Docta ignorantia</strong> (belehrte Unwissenheit) meint: Die höchste Stufe menschlicher Erkenntnis ist das <strong>Wissen um die eigene Erkenntnisgrenze</strong>. Cusanus begründet dies mit dem <strong>Maß-Argument</strong>: Alle Erkenntnis beruht auf Vergleich (proportio). Ein Unbekanntes wird erkannt, indem es mit einem Bekannten verglichen wird. Aber das <strong>Unendliche</strong> (Gott) steht in keiner Proportion zum Endlichen — es gibt keinen Maßstab, an dem wir es messen könnten.<br><br><strong>Mathematische Analogie:</strong> Das Polygon nähert sich dem Kreis an, wird aber nie zum Kreis. So nähert sich das menschliche Wissen der Wahrheit an, ohne sie je zu erreichen. Die „Annäherung" ist nicht nutzlos — sie wird immer genauer (Konjekturen). Aber die <strong>letzte Wahrheit</strong> bleibt unerreichbar.<br><br><strong>Bedeutung:</strong> (1) Gegen den scholastischen <strong>Dogmatismus</strong>: Keine philosophische oder theologische Theorie kann die absolute Wahrheit beanspruchen. (2) Gegen den <strong>Skeptizismus</strong>: Es gibt echten Erkenntnisfortschritt — die Annäherung wird immer genauer. (3) <strong>Vorwegnahme Kants</strong>: Die menschliche Vernunft hat Grenzen, die sie nicht überschreiten kann — aber sie kann diese Grenzen erkennen. Das „Ding an sich" (Kant) = Cusanus\' unerkennbares Maximum.</p>' },
          { title: '2. Was bedeutet „coincidentia oppositorum" und wie veranschaulicht Cusanus sie mathematisch?',
            content: '<p class="lz-prose"><strong>Coincidentia oppositorum</strong> (Zusammenfall der Gegensätze): In Gott (= dem absoluten Maximum) fallen alle endlichen Gegensätze zusammen — Größtes und Kleinstes, Ruhe und Bewegung, Einheit und Vielheit, Sein und Nicht-Sein.<br><br><strong>Mathematische Veranschaulichung:</strong><br>(1) <strong>Kreis und Linie:</strong> Ein Kreis mit unendlich großem Radius hat eine Krümmung von null — seine Peripherie wird zur geraden Linie. Krumm und Gerade fallen zusammen.<br>(2) <strong>Dreieck und Linie:</strong> Verlängert man eine Dreiecksseite ins Unendliche, verschwinden die Winkel — das Dreieck wird zur Linie. Fläche und Linie, Vielheit und Einheit fallen zusammen.<br>(3) <strong>Maximum und Minimum:</strong> Der absolut größte Kreis umfasst alles — jeder Punkt ist sein Mittelpunkt. Er unterscheidet sich nicht mehr vom Punkt (Minimum).<br><br><strong>Theologische Pointe:</strong> Menschliche Vernunft operiert nach dem <strong>Satz vom Widerspruch</strong> (A kann nicht zugleich Nicht-A sein). Dieser Satz gilt im Endlichen. Im Unendlichen (= Gott) gilt er nicht: Hier ist das Größte zugleich das Kleinste. Wer Gott erkennen will, muss die Logik des Widerspruchs <strong>überschreiten</strong> — nicht aufgeben, sondern an ihre Grenze führen und über sie hinausgehen. Das ist die „Mauer des Paradieses".</p>' },
          { title: '3. Vergleichen Sie Cusanus\' docta ignorantia mit Sokrates\' „Ich weiß, dass ich nichts weiß".',
            content: '<p class="lz-prose"><strong>Gemeinsamkeit:</strong> Beide halten das Wissen um das eigene Nicht-Wissen für die höchste Form der Weisheit. Beide kritisieren den Dogmatismus derer, die fälschlich zu wissen glauben.<br><br><strong>Unterschied 1 — Begründung:</strong> Sokrates\' Nicht-Wissen ist <strong>persönlich und situativ</strong>: Ich, Sokrates, habe bei der Prüfung meiner Mitbürger festgestellt, dass ich weniger weiß, als ich dachte — und dass andere noch weniger wissen, als sie glauben. Cusanus\' docta ignorantia ist <strong>systematisch und prinzipiell</strong>: Er begründet mathematisch-philosophisch, <em>warum</em> menschliche Erkenntnis die absolute Wahrheit nie erreichen kann (Maß-Argument, Polygon/Kreis-Analogie).<br><br><strong>Unterschied 2 — Methode:</strong> Sokrates: <strong>Elenchos</strong> (Widerlegung) — das Scheinwissen des Gesprächspartners wird durch Fragen aufgedeckt. Cusanus: <strong>Mathematische Analogie</strong> — geometrische Figuren werden ins Unendliche projiziert, um die Grenzen des Endlichen zu zeigen.<br><br><strong>Unterschied 3 — Ziel:</strong> Sokrates: Das Nicht-Wissen ist <strong>Ausgangspunkt</strong> für weiteres Suchen (die Dialoge sind „aporisch" — sie enden in offenen Fragen). Cusanus: Das Nicht-Wissen ist selbst das <strong>Ergebnis</strong> — die docta ignorantia ist die höchste Stufe der Erkenntnis, eine Art mystische Schau der eigenen Grenzen.</p>' },
          { title: '4. Inwiefern ist Cusanus eine „Schwellenfigur" zwischen Mittelalter und Neuzeit?',
            content: '<p class="lz-prose"><strong>Mittelalterliche Elemente:</strong> (1) Cusanus ist <strong>Theologe</strong> — sein Denken kreist um Gott, Trinität, Schöpfung. (2) Er nutzt die <strong>scholastische Sprache</strong> und steht in der Tradition von Plotin, Pseudo-Dionysius, Eckhart, Thomas. (3) Seine Kosmologie ist nicht empirisch, sondern <strong>spekulativ-philosophisch</strong> — er beobachtet nicht den Himmel, sondern denkt über das Unendliche nach.<br><br><strong>Neuzeitliche Elemente:</strong> (1) <strong>Kosmologie:</strong> Kein Zentrum, kein Rand, Erde bewegt sich — Vorbereitung auf Kopernikus. (2) <strong>Erkenntnistheorie:</strong> Alle Erkenntnis ist <strong>Konjektur</strong> (vorläufige Annäherung) — Vorbereitung auf den Fallibilismus der modernen Wissenschaftstheorie (Popper). (3) <strong>Perspektivismus:</strong> Jede Erkenntnis ist standortgebunden — Vorbereitung auf Leibniz, Nietzsche, moderne Hermeneutik. (4) <strong>Mathematisierung:</strong> Mathematik als Schlüssel zum Verständnis der Wirklichkeit — Vorbereitung auf Galilei („Das Buch der Natur ist in der Sprache der Mathematik geschrieben"). (5) <strong>Toleranzgedanke:</strong> In <em>De pace fidei</em> (1453) entwirft Cusanus einen Dialog der Religionen: „Una religio in rituum varietate" — eine Religion in der Vielfalt der Riten. Ein frühes Modell des interreligiösen Dialogs.</p>' },
        ])}
      </div>
    </section>

    <section class="lz-content-section" style="padding-top:0;">
      <div class="lz-section-wrap">
        ${renderPageNav({
          prev: { label: 'Meister Eckhart',     link: `${BASE}/themen/mittelalter/eckhart` },
          next: { label: 'Neuzeit — Erasmus & Bruno',   link: `${BASE}/themen/neuzeit/bruno` },
        }, BASE)}
      </div>
    </section>
    ${footerHTML(this.router)}
    `;
  }
  init() { i18n.init(); initScrollReveal(); refreshScrollReveal(); initInteractive(document); initWimTabs(document); }
  cleanup() {}
}