// pages/projekte/lernzettel/faecher/ethik/themen/pythagoras-demokrit.js
// ══════════════════════════════════════════════════════════════════
// Kapitel 1.3 — Von Pythagoras bis Demokrit
// Italische Philosophie, Eleatik, Pluralisten, Atomismus
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

export default class PythagorasDemokritPage {
  constructor(router) { this.router = router; }

  render() {
    ensureComponentsCSS();
    loadComponentCSS('pages/projekte/lernzettel/styles/sub.css');
    const el = document.createElement('div');
    el.className = 'page page-pythagoras-demokrit';
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
          <span>Von Pythagoras bis Demokrit</span>
        </nav>
        <h1 class="lz-sub-title">Von <em>Pythagoras</em> bis <em>Demokrit</em></h1>
        <p class="lz-sub-desc">
          Zahl und Harmonie, Wandel und Beständigkeit, Sein und Schein,
          Atome und Leeres — die großen Gegenentwürfe der Vorsokratik
          ringen um die Frage: Was ist wirklich?
        </p>
        ${renderTags([
          'Kapitel 1.3', 'ca. 570–360 v. Chr.', 'Italische Philosophie',
          'Eleatik · Pluralismus · Atomismus', 'Abitur 2026'
        ])}
      </div>
    </section>


    <!-- ════════════ PYTHAGORAS ════════════ -->
    <section class="lz-content-section">
      <div class="lz-section-wrap">
        ${renderSubhead('Pythagoras von Samos (ca. 570–496 v. Chr.)')}
        <h2 class="lz-h2 reveal">„Alles ist <em>Zahl</em>"</h2>

        <p class="lz-prose reveal">
          Pythagoras wanderte von der ionischen Insel Samos nach Kroton in
          Süditalien aus und gründete dort eine <strong>religiös-philosophische
          Gemeinschaft</strong>, den Pythagoreer-Bund. Diese Gemeinschaft verband
          strenge Lebensregeln (Vegetarismus, Gütergemeinschaft, Schweigepflicht
          für Novizen) mit intensiver Beschäftigung mit Mathematik, Musik und
          Astronomie. Pythagoras selbst hinterließ keine Schriften — seine Lehren
          wurden mündlich weitergegeben und von seinen Schülern bewahrt.
        </p>

        ${renderMerkboxGrid([
          { icon: 'fas fa-hashtag', title: 'Zahl als Weltprinzip',
            text: '„Alles ist Zahl" (pánta arithmós estin) — Die Pythagoreer entdeckten, dass musikalische Harmonie auf einfachen Zahlenverhältnissen beruht: Oktave = 2:1, Quinte = 3:2, Quarte = 4:3. Daraus folgerten sie: Die gesamte Weltordnung beruht auf mathematischen Strukturen.' },
          { icon: 'fas fa-music', title: 'Sphärenharmonie',
            text: 'Die Planeten erzeugen durch ihre Bewegung Töne — die unhörbare „Musik der Sphären". Wir hören sie nicht, weil wir sie seit Geburt hören (wie das Rauschen am Meer für Fischer). Der Kosmos ist ein harmonisches Tonsystem.' },
          { icon: 'fas fa-recycle', title: 'Metempsychose (Seelenwanderung)',
            text: 'Die unsterbliche Seele wandert nach dem Tod des Körpers in einen neuen Leib — auch in Tiere. Philosophie dient der Reinigung der Seele und der Befreiung vom Kreislauf der Wiedergeburten. Daher: vegetarische Lebensweise, Askese, Reinheitsgebote.' },
          { icon: 'fas fa-eye', title: 'Bíos theoretikós',
            text: 'Pythagoras soll den Begriff „Philosoph" geprägt haben: Bei den Olympischen Spielen gebe es drei Typen — Händler (Geld), Wettkämpfer (Ehre), Zuschauer (Erkenntnis). Der Philosoph ist der kontemplative Zuschauer des kosmischen Schauspiels.' },
          { icon: 'fas fa-shapes', title: 'Figurierte Zahlen',
            text: 'Die Pythagoreer ordneten Zahlen geometrischen Figuren zu: Dreieckszahlen (1, 3, 6, 10…), Quadratzahlen (1, 4, 9, 16…). Die Tetraktys (1+2+3+4 = 10) galt als heilig — sie enthält die Grundlagen der Musik und des Kosmos.' },
        ])}

        ${renderFormulaBox({
          label: 'Die Tetraktys der Pythagoreer',
          formula: '1 + 2 + 3 + 4 = 10',
          desc: 'Die „heilige Vierheit": Sie enthält Punkt (1), Linie (2), Fläche (3), Körper (4) — alle Dimensionen des Raumes. Zugleich die Grundintervalle der Musik: Oktave (2:1), Quinte (3:2), Quarte (4:3). Bei der Tetraktys schworen die Pythagoreer ihren Eid.'
        })}

        ${renderInfobox({
          type: 'warning', icon: 'fas fa-exclamation-triangle',
          title: 'Die Krise der irrationalen Zahlen',
          body: 'Die Entdeckung, dass die Diagonale eines Quadrats mit Seitenlänge 1 (= √2) <strong>kein Zahlenverhältnis</strong> ganzer Zahlen ist, erschütterte die pythagoreische Lehre. Wenn nicht alles auf ganzzahlige Verhältnisse zurückführbar ist, wankt die These „Alles ist Zahl". Der Legende nach wurde der Entdecker (Hippasos) ertränkt — ein Zeichen der existenziellen Bedrohung, die diese Entdeckung für die Gemeinschaft darstellte.'
        })}
      </div>
    </section>


    <!-- ════════════ XENOPHANES ════════════ -->
    <section class="lz-content-section">
      <div class="lz-section-wrap">
        ${renderSubhead('Xenophanes von Kolophon (ca. 570–475 v. Chr.)')}
        <h2 class="lz-h2 reveal">Der erste <em>Religionskritiker</em></h2>

        <p class="lz-prose reveal">
          Xenophanes war ein wandernder Dichter-Philosoph, der die traditionelle
          griechische Götterreligion einer scharfen <strong>rationalen Kritik</strong>
          unterzog. Er ist damit der erste systematische Religionskritiker der Philosophie —
          und Vorläufer von Feuerbach, Marx und Freud.
        </p>

        ${renderFormulaBox({
          label: 'Xenophanes, Fragment B 15–16',
          formula: '„Wenn die Ochsen und Pferde und Löwen Hände hätten<br>und damit malen könnten, so würden die Pferde pferdeähnliche,<br>die Ochsen ochsenähnliche Götterbilder malen."',
          desc: 'Projektionstheorie avant la lettre: Götterbilder sind Spiegelbilder der Menschen, die sie verehren. Die Äthiopier malen ihre Götter schwarz und stumpfnasig, die Thraker blauäugig und rothaarig.'
        })}

        ${renderMerkboxGrid([
          { icon: 'fas fa-user-slash', title: 'Kritik des Anthropomorphismus',
            text: 'Homer und Hesiod schreiben den Göttern alles zu, „was bei den Menschen Schimpf und Schande ist: Stehlen, Ehebrechen, einander Betrügen" (B 11). Die Götterbilder sind menschliche Projektionen — nicht Abbilder göttlicher Realität.' },
          { icon: 'fas fa-sun', title: 'Der eine Gott',
            text: 'Xenophanes postuliert einen einzigen, höchsten Gott: „Ganz Auge, ganz Geist, ganz Ohr." Er bewegt alles „durch die Kraft seines Geistes", ohne sich selbst zu bewegen. Nicht anthropomorph, nicht viele, sondern ein geistiges Prinzip. Vorbild für Aristoteles\' „unbewegten Beweger".' },
          { icon: 'fas fa-search', title: 'Erkenntniskritik',
            text: '„Das Genaue hat kein Mensch erkannt und wird es nie erkennen — weder über die Götter noch über alle Dinge. Und selbst wenn er zufällig die vollkommene Wahrheit ausspräche, wüsste er es nicht" (B 34). Früheste Form philosophischer Skepsis und Bescheidenheit.' },
        ])}

        ${renderInfobox({
          type: '', icon: 'fas fa-info-circle',
          title: 'Xenophanes war kein Atheist!',
          body: 'Xenophanes kritisierte die <strong>menschenförmige Darstellung</strong> der Götter, nicht die <strong>Existenz Gottes</strong>. Sein „Ein Gott" ist ein geistiges, abstraktes Prinzip — weder Leugnung noch konventionelle Frömmigkeit, sondern ein <strong>philosophischer Gottesbegriff</strong>, der die anthropomorphen Vorstellungen übersteigt.'
        })}
      </div>
    </section>


    <!-- ════════════ HERAKLIT ════════════ -->
    <section class="lz-content-section">
      <div class="lz-section-wrap">
        ${renderSubhead('Heraklit von Ephesus (ca. 550–475 v. Chr.)')}
        <h2 class="lz-h2 reveal">Der <em>Dunkle</em> — Logos, Wandel, Gegensätze</h2>

        <p class="lz-prose reveal">
          Heraklit, aristokratischer Abkunft, zog sich verächtlich aus dem
          öffentlichen Leben zurück und schrieb ein Buch in absichtlich
          dunklen, orakelhaften Sätzen — „damit nur die Fähigen es verstehen".
          Schon in der Antike wurde er „der Dunkle" (ho skoteinós) genannt.
          Sein Denken kreist um drei miteinander verflochtene Grundgedanken.
        </p>

        <!-- WIM-Tabs: Heraklit -->
        <nav class="wim-tabs" id="heraklitTabs" aria-label="Heraklit Themen">
          <button class="wim-tab active" data-wim="feuer">🔥 Feuer & Wandel</button>
          <button class="wim-tab" data-wim="gegensaetze">⚖️ Einheit der Gegensätze</button>
          <button class="wim-tab" data-wim="logos">📜 Der Logos</button>
        </nav>

        <div class="wim-category" data-wim-cat="feuer">
          <h3 class="lz-h3">Pánta rheî — Alles fließt</h3>
          <p class="lz-prose">„Man steigt nicht zweimal in denselben Fluss, denn andere Wasser strömen nach" (B 12). Die gesamte Wirklichkeit ist <strong>Prozess</strong>, nicht Substanz. Nichts beharrt, alles verwandelt sich. Das Feuer ist Symbol dieses ewigen Wandels: Es lebt vom Verbrauch seines Brennstoffs, es verwandelt unaufhörlich.</p>
          ${renderFormulaBox({
            label: 'Heraklit, Fragment B 30',
            formula: '„Diese Weltordnung, dieselbe für alle Wesen,<br>hat kein Gott und kein Mensch geschaffen,<br>sondern sie war immer und ist und wird sein:<br>ewig lebendiges Feuer, nach Maßen entflammt und nach Maßen erlöschend."',
            desc: 'Der Kosmos ist ungeschaffen und ewig — eine Absage an Schöpfungsmythen. Das Feuer brennt „nach Maßen" (métra) — der Wandel ist gesetzmäßig, nicht chaotisch.'
          })}
        </div>

        <div class="wim-category hidden" data-wim-cat="gegensaetze">
          <h3 class="lz-h3">Coincidentia oppositorum</h3>
          <p class="lz-prose">Heraklits tiefster Gedanke: Die Gegensätze sind <strong>nicht</strong> unversöhnlich getrennt, sondern <strong>identisch</strong> in ihrer Einheit. Nur gemeinsam bilden sie die Wirklichkeit:</p>
          ${renderMerkboxGrid([
            { icon: 'fas fa-road', title: '„Der Weg hinauf und hinab ist ein und derselbe" (B 60)',
              text: 'Derselbe Weg führt bergauf und bergab — es kommt nur auf die Perspektive an. Die Gegensätze sind nicht zwei Dinge, sondern zwei Seiten desselben Dings.' },
            { icon: 'fas fa-heartbeat', title: '„Krankheit macht Gesundheit süß" (B 111)',
              text: 'Ohne Krankheit wüssten wir nicht, was Gesundheit ist. Ohne Hunger kein Genuss der Sättigung. Ohne Tod kein Wert des Lebens. Die Gegensätze verleihen einander erst Bedeutung.' },
            { icon: 'fas fa-tint', title: '„Das Meer ist das reinste und unreinste Wasser" (B 61)',
              text: 'Für Fische: trinkbar und lebensspendend. Für Menschen: untrinkbar und tödlich. Derselbe Stoff — gegensätzliche Bewertung je nach Perspektive. Qualitäten sind relativ.' },
          ])}
        </div>

        <div class="wim-category hidden" data-wim-cat="logos">
          <h3 class="lz-h3">Das verborgene Weltgesetz</h3>
          <p class="lz-prose">Der <strong>Logos</strong> ist Heraklits Zentralbegriff — und einer der vieldeutigsten der gesamten Philosophie. Er meint zugleich:</p>
          ${renderMerkboxGrid([
            { icon: 'fas fa-scroll', title: 'Wort / Rede',
              text: 'Logos als das, was Heraklit in seinem Buch „sagt" — seine Lehre, sein Wort. „Für diesen Logos zeigen sich die Menschen unverständig, bevor sie ihn vernommen und nachdem sie ihn vernommen haben" (B 1).' },
            { icon: 'fas fa-cogs', title: 'Vernünftiges Weltgesetz',
              text: 'Der Logos ist das kosmische Gesetz, das den ewigen Wandel regiert. Er ist die Formel, nach der das Feuer „nach Maßen" brennt. Universell, ewig, identisch für alle — ob sie ihn erkennen oder nicht.' },
            { icon: 'fas fa-brain', title: 'Menschliche Vernunft',
              text: 'Der Logos ist zugleich die Vernunft im Menschen, mit der er das Weltgesetz erkennen kann. Es gibt einen gemeinsamen (xynós) Logos — aber die meisten Menschen leben, „als hätten sie eine private Einsicht" (B 2).' },
          ])}
          <p class="lz-prose">Heraklits Logos-Begriff wirkte epochenprägend: Die Stoa übernahm ihn als „Weltvernunft", das Johannes-Evangelium beginnt: „Im Anfang war der Logos", Hegel sah in Heraklit einen Vorläufer seiner Dialektik.</p>
        </div>

        ${renderFormulaBox({
          label: 'Heraklit, Fragment B 53',
          formula: '„Der Krieg ist der Vater aller Dinge und der König aller.<br>Die einen macht er zu Göttern, die anderen zu Menschen,<br>die einen zu Sklaven, die anderen zu Freien."',
          desc: 'Pólemos (Kampf/Spannung) als schöpferisches Prinzip: Nicht Harmonie im Sinne von Konfliktvermeidung, sondern die Spannung der Gegensätze erzeugt Ordnung und Bewegung.'
        })}
      </div>
    </section>


    <!-- ════════════ PARMENIDES ════════════ -->
    <section class="lz-content-section">
      <div class="lz-section-wrap">
        ${renderSubhead('Parmenides von Elea (ca. 515–445 v. Chr.)')}
        <h2 class="lz-h2 reveal">„Das Seiende <em>ist</em>" — Die Entdeckung der Ontologie</h2>

        <p class="lz-prose reveal">
          Parmenides ist der radikalste Denker der Vorsokratik. In einem
          Lehrgedicht in Hexameter-Versen — dem Versmaß Homers — lässt er
          sich von einer Göttin auf den „Weg der Wahrheit" (alétheia) führen
          und den „Weg der Meinung" (dóxa) als Irrweg verwerfen. Sein Grundsatz
          hat die gesamte nachfolgende Metaphysik geprägt.
        </p>

        ${renderMerkboxGrid([
          { icon: 'fas fa-circle', title: 'Das Seiende ist — Kernthese',
            text: '„Denn es ist Sein, Nichts aber ist nicht" (B 6). Das Seiende (tò eón) ist: eins, ganz, unveränderlich, unteilbar, ewig, homogen, einer wohlgerundeten Kugel gleich. Aus dem Nichts kann nichts entstehen. In das Nichts kann nichts vergehen. Also gibt es kein Werden und kein Vergehen.' },
          { icon: 'fas fa-road', title: 'Weg der Wahrheit (alétheia)',
            text: 'Nur das Denken (noein) erkennt die Wahrheit: Das Sein ist unveränderlich. Die Sinne zeigen uns Veränderung — aber das ist Täuschung. Die Sinneswahrnehmung gehört zum „Weg der Meinung", der nie zur Wahrheit führt.' },
          { icon: 'fas fa-equals', title: '„Denken und Sein sind dasselbe" (B 3)',
            text: 'Was gedacht werden kann, existiert. Was nicht existiert, kann nicht gedacht werden (denn denken „von Nichts" ist kein wirkliches Denken). Identität von Denken und Sein — die kühnste These der Vorsokratik.' },
          { icon: 'fas fa-ban', title: 'Kein Werden, keine Bewegung',
            text: 'Werden setzt voraus, dass etwas aus dem Nicht-Seienden entsteht. Aber das Nicht-Seiende existiert nicht. Also ist Werden unmöglich. Ebenso Bewegung: Sie erfordert leeren Raum (Nicht-Seiendes), den es nicht gibt. Die gesamte Vielfalt und Bewegung der Sinneswelt ist Schein.' },
          { icon: 'fas fa-globe', title: 'Bild der Kugel',
            text: 'Das Seiende gleicht einer „wohlgerundeten Kugel" (B 8, 43): überall gleich, in sich vollendet, ohne Mangel, ohne Lücke. Ein Bild der Perfektion — ganz anders als die veränderliche, defekte Sinneswelt.' },
        ])}

        ${renderFormulaBox({
          label: 'Parmenides, Fragment B 8, 34–36',
          formula: '„Denn dasselbe ist Denken und Sein."<br>(tò gàr autò noeîn estín te kaì eînai)',
          desc: 'Die Identitätsthese: Denken und Sein fallen zusammen. Was existiert, muss denkbar sein. Was nicht denkbar ist, existiert nicht. Dies ist der Gründungsakt der Ontologie — der Lehre vom Seienden als Seiendem.'
        })}

        <!-- ── Heraklit vs. Parmenides ── -->
        ${renderSubhead('Der große Gegensatz: Heraklit vs. Parmenides')}

        ${renderCompare({
          titleA: 'Heraklit — Pánta rheî',
          titleB: 'Parmenides — Das Seiende ist',
          listA: [
            'Wirklichkeit = ewiger <strong>Wandel</strong>',
            'Gegensätze sind <strong>identisch</strong> in ihrer Einheit',
            'Feuer als Prozess-Symbol',
            'Logos: vernünftiges <strong>Gesetz</strong> des Wandels',
            'Sinne + Vernunft erkennen die Wirklichkeit',
            'Inspiriert: Stoa, Hegel, Nietzsche, Prozessphilosophie',
          ],
          listB: [
            'Wirklichkeit = ewiges, unveränderliches <strong>Sein</strong>',
            'Vielheit und Gegensätze sind <strong>Schein</strong>',
            'Kugel als Vollkommenheits-Symbol',
            'Noein: reines <strong>Denken</strong> als einziger Zugang',
            'Sinne täuschen — nur das Denken ist zuverlässig',
            'Inspiriert: Platon (Ideen), Scholastik, Rationalismus',
          ],
        })}

        ${renderInfobox({
          type: 'blue', icon: 'fas fa-graduation-cap',
          title: 'Abitur-Kernwissen',
          body: 'Dieser Gegensatz ist die <strong>Grundspannung</strong> der abendländischen Philosophie: <strong>Werden vs. Sein</strong>, <strong>Wandel vs. Beständigkeit</strong>, <strong>Sinne vs. Denken</strong>. Platon löst ihn durch seine Zwei-Welten-Lehre (veränderliche Sinnenwelt + ewige Ideenwelt). Hegel durch die Dialektik (Synthese von Sein und Werden). Die Frage lautet immer: <strong>Ist die Veränderung real oder bloßer Schein?</strong>'
        })}
      </div>
    </section>


    <!-- ════════════ ZENON ════════════ -->
    <section class="lz-content-section">
      <div class="lz-section-wrap">
        ${renderSubhead('Zenon von Elea (ca. 490–? v. Chr.)')}
        <h2 class="lz-h2 reveal">Paradoxien — Verteidigung des <em>Parmenides</em></h2>

        <p class="lz-prose reveal">
          Zenon verteidigte die Lehre seines Meisters Parmenides mit einer genialen
          <strong>indirekten Beweismethode</strong> (reductio ad absurdum): Er zeigte,
          dass die <strong>Gegenposition</strong> — die Annahme von Vielheit und
          Bewegung — zu <strong>logischen Widersprüchen</strong> führt.
        </p>

        ${renderMerkboxGrid([
          { icon: 'fas fa-running', title: 'Achill und die Schildkröte',
            text: 'Achill gibt der Schildkröte Vorsprung. Erreicht er ihren Startpunkt, ist sie ein Stück weiter. Erreicht er diesen Punkt, ist sie wieder weiter — ad infinitum. Er müsste unendlich viele Intervalle durchlaufen. Pointe: Eine unendliche Reihe von Schritten kann (scheinbar) nicht in endlicher Zeit abgeschlossen werden.' },
          { icon: 'fas fa-arrow-right', title: 'Der fliegende Pfeil',
            text: 'In jedem Zeitpunkt „jetzt" befindet sich der Pfeil an genau einem Ort — er ruht also. Da die Zeit aus lauter „Jetzt"-Momenten besteht und der Pfeil in jedem einzelnen ruht, ruht er immer. Bewegung ist Illusion. Dieses Paradox berührt die Frage: Besteht Zeit aus unteilbaren Augenblicken?' },
          { icon: 'fas fa-divide', title: 'Dichotomie (Halbierung)',
            text: 'Um eine Strecke zu durchlaufen, musst du erst die Hälfte zurücklegen. Davor die Hälfte der Hälfte. Davor deren Hälfte — ad infinitum. Du müsstest also unendlich viele Teilstrecken durchlaufen, bevor du den ersten Schritt tust. Bewegung kann nie beginnen.' },
          { icon: 'fas fa-cubes', title: 'Paradox der Vielheit',
            text: 'Wenn es viele Dinge gibt, müssen sie zugleich unendlich klein (weil jedes teilbar ist → Teile ohne Ausdehnung) und unendlich groß (weil unendlich viele Teile mit Ausdehnung) sein. Die Annahme der Vielheit führt zum Widerspruch.' },
        ])}

        ${renderInfobox({
          type: '', icon: 'fas fa-info-circle',
          title: 'Auflösung der Paradoxien',
          body: 'Zenons Paradoxien sind <strong>keine Taschenspielertricks</strong> — sie berühren echte mathematische und physikalische Probleme. Die Auflösung des Achill-Paradoxons gelang erst durch die <strong>Analysis</strong> (Leibniz/Newton, 17. Jh.): Eine unendliche Reihe konvergenter Summanden kann eine endliche Summe haben (1/2 + 1/4 + 1/8 + … = 1). Das Pfeil-Paradox berührt die Frage nach der Natur der Zeit — ist sie kontinuierlich (Aristoteles) oder diskret (Atomisten)?'
        })}
      </div>
    </section>


    <!-- ════════════ EMPEDOKLES ════════════ -->
    <section class="lz-content-section">
      <div class="lz-section-wrap">
        ${renderSubhead('Empedokles von Akragas (ca. 495–435 v. Chr.)')}
        <h2 class="lz-h2 reveal">Vier Elemente, <em>Liebe und Streit</em></h2>

        <p class="lz-prose reveal">
          Empedokles aus dem sizilianischen Akragas versuchte, die <strong>Synthese</strong>
          zwischen Parmenides (nichts entsteht und vergeht) und Heraklit (alles wandelt
          sich) zu leisten. Seine Lösung: Nicht <strong>ein</strong> Urstoff, sondern
          <strong>vier ewige Elemente</strong>, die sich unter dem Einfluss zweier
          kosmischer Kräfte mischen und trennen.
        </p>

        ${renderMerkboxGrid([
          { icon: 'fas fa-fire', title: 'Vier Wurzeln (rhizṓmata)',
            text: 'Feuer (Zeus), Luft (Hera), Wasser (Nestis), Erde (Aidoneus) — vier ewige, unveränderliche, qualitativ verschiedene Grundstoffe. Sie selbst entstehen und vergehen nicht (Parmenides!), aber ihre Mischungsverhältnisse ändern sich ständig (Heraklit!).' },
          { icon: 'fas fa-heart', title: 'Philía (Liebe)',
            text: 'Kosmische Anziehungskraft, die das Verschiedene verbindet. Unter der Herrschaft der Liebe streben alle Elemente zur vollständigen Vereinigung — dem Sphairos, einer homogenen Kugel ohne Unterschiede (Parmenides\' Sein!).' },
          { icon: 'fas fa-fist-raised', title: 'Neîkos (Streit)',
            text: 'Kosmische Abstoßungskraft, die das Verbundene trennt. Unter der Herrschaft des Streits separieren sich die vier Elemente vollständig. Der Weltzyklus pendelt ewig zwischen diesen Extremen — wir leben in einer Übergangsphase.' },
          { icon: 'fas fa-dna', title: 'Vorform der Evolution',
            text: 'In der Phase zunehmenden Streits entstehen Lebewesen aus zufälligen Mischungen: zuerst einzelne Gliedmaßen, dann zusammengewürfelte Monstrositäten, schließlich lebensfähige Organismen. Nur die Angepassten überleben — ein erstaunlicher Vorgriff auf Selektion.' },
        ])}
      </div>
    </section>


    <!-- ════════════ ANAXAGORAS ════════════ -->
    <section class="lz-content-section">
      <div class="lz-section-wrap">
        ${renderSubhead('Anaxagoras von Klazomenai (ca. 500–428 v. Chr.)')}
        <h2 class="lz-h2 reveal"><em>Nous</em> — Geist als Ordnungsprinzip</h2>

        <p class="lz-prose reveal">
          Anaxagoras war der erste Philosoph, der dauerhaft in Athen lehrte. Er war
          mit dem Staatsmann Perikles befreundet und brachte die ionische
          Naturphilosophie in die Hauptstadt des griechischen Geisteslebens. Seine
          zentrale Innovation: Er führte den <strong>Nous</strong> (Geist/Vernunft) als
          eigenständiges, <strong>immaterielles</strong> Bewegungsprinzip ein.
        </p>

        ${renderMerkboxGrid([
          { icon: 'fas fa-blender', title: '„In allem ist ein Anteil von allem"',
            text: 'Am Anfang war eine Mischung, in der alle Stoffe (Homoiomerien / Samen-Teilchen) enthalten sind. Ein Stück Brot enthält Haar-, Fleisch-, Knochen-Teilchen — deshalb kann es in diese Stoffe verwandelt werden. Es gibt kein reines Element, nur Mischungen mit vorherrschendem Anteil.' },
          { icon: 'fas fa-brain', title: 'Der Nous (Geist)',
            text: 'Der Nous ist „das feinste und reinste aller Dinge", ungemischt mit der Materie. Er hat die kosmische Wirbelbewegung (períchōrēsis) angestoßen, durch die sich die Ur-Mischung differenziert. Erstes immaterielles Prinzip der Philosophiegeschichte.' },
          { icon: 'fas fa-moon', title: 'Naturwissenschaftliche Leistungen',
            text: 'Die Sonne ist kein Gott, sondern ein „glühender Stein, größer als der Peloponnes". Der Mond leuchtet nicht selbst, sondern reflektiert Sonnenlicht. Mondfinsternisse entstehen durch den Erdschatten. Diese Thesen brachten Anaxagoras eine Anklage wegen Gottlosigkeit ein.' },
        ])}

        ${renderInfobox({
          type: '', icon: 'fas fa-comment-dots',
          title: 'Sokrates\' Kritik an Anaxagoras',
          body: 'Sokrates berichtet im <em>Phaidon</em> (97b–98c), er habe Anaxagoras begeistert gelesen, weil dieser den <strong>Geist</strong> als Ursache der Ordnung bestimmte. Doch seine Enttäuschung war groß: Anaxagoras nutze den Nous nur als <strong>Anstoßgeber</strong> — danach erkläre er alles rein mechanisch. „Das ist, als wenn jemand sagt: Sokrates sitzt hier im Gefängnis, weil seine Knochen und Sehnen so angeordnet sind — statt weil er es für gerecht hält."'
        })}
      </div>
    </section>


    <!-- ════════════ LEUKIPP & DEMOKRIT ════════════ -->
    <section class="lz-content-section">
      <div class="lz-section-wrap">
        ${renderSubhead('Leukipp & Demokrit — Der Atomismus')}
        <h2 class="lz-h2 reveal"><em>Atome</em> und <em>Leeres</em> — das materialistische Weltbild</h2>

        <p class="lz-prose reveal">
          Leukipp (um 450 v.&nbsp;Chr.) und sein Schüler <strong>Demokrit von Abdera</strong>
          (ca. 470–360 v.&nbsp;Chr.) begründeten den <strong>Atomismus</strong> — eine
          der einflussreichsten Theorien der Philosophiegeschichte. Demokrit war ein
          Universalgelehrter, der über 70 Schriften zu Physik, Mathematik, Ethik,
          Musik und Technik verfasste (fast alle verloren).
        </p>

        ${renderMerkboxGrid([
          { icon: 'fas fa-atom', title: 'Atome (átomoi = unteilbar)',
            text: 'Die Grundbausteine der Wirklichkeit: ewig, unvergänglich, unteilbar, unsichtbar klein. Sie unterscheiden sich nur in Form (rund, eckig, hakig), Größe und Lage — nicht in Qualität. Ein glatter Atomstrom erzeugt „süß", ein kantiger „bitter".' },
          { icon: 'fas fa-expand', title: 'Das Leere (kenón)',
            text: 'Zwischen den Atomen existiert der leere Raum — „das Nichts existiert ebenso wie das Ichts" (B 156). Das ist ein bewusster Widerspruch zu Parmenides: Das Nicht-Seiende (Leere) ist real, denn ohne es wäre Bewegung unmöglich.' },
          { icon: 'fas fa-cogs', title: 'Mechanische Notwendigkeit',
            text: 'Alles geschieht aus Notwendigkeit (anánkē): Atome bewegen sich ewig im leeren Raum, prallen aufeinander, verbinden sich zu Dingen, lösen sich wieder. Kein Nous, kein Zweck, keine Götter — nur Mechanik. Radikalster Materialismus der Antike.' },
          { icon: 'fas fa-eye', title: 'Wahrnehmung als Atomstrom',
            text: 'Von allen Dingen lösen sich feine Atomhüllen (eídōla = Bilder) ab und treffen auf unsere Sinnesorgane. Was wir sehen, hören, riechen, sind Atomwirkungen. Farben, Geschmack, Wärme existieren nur „der Meinung nach" — in Wahrheit gibt es nur Atome und Leeres.' },
          { icon: 'fas fa-smile', title: 'Euthymía (Seelenruhe)',
            text: 'Demokrits Ethik: Das Ziel des Lebens ist heitere Gelassenheit (euthymía) — innere Harmonie durch Maßhalten, geistige Bildung und Unabhängigkeit von äußeren Gütern. Nicht Reichtum, sondern die „Symmetrie des Lebens" macht glücklich. Vorläufer Epikurs.' },
        ])}

        ${renderFormulaBox({
          label: 'Demokrit, Fragment B 9',
          formula: '„Der Meinung nach (nómōi) gibt es Farbe,<br>der Meinung nach Süßes, der Meinung nach Bitteres —<br>in Wahrheit (eteêi) gibt es nur Atome und Leeres."',
          desc: 'Die früheste Formulierung der Unterscheidung zwischen primären (objektiven) und sekundären (subjektiven) Qualitäten — 2000 Jahre vor John Locke.'
        })}

        ${renderInfobox({
          type: 'success', icon: 'fas fa-link',
          title: 'Wirkungsgeschichte',
          body: 'Der Atomismus wurde von <strong>Epikur</strong> (341–270 v. Chr.) weiterentwickelt und von <strong>Lukrez</strong> (<em>De rerum natura</em>, 1. Jh. v. Chr.) in Versform verbreitet. In der Neuzeit inspirierte er <strong>Galilei</strong>, <strong>Gassendi</strong> und die Begründer der modernen Naturwissenschaft. Daltons Atomtheorie (1803) und die moderne Quantenmechanik stehen — bei aller Verschiedenheit — in dieser Tradition.'
        })}
      </div>
    </section>


    <!-- ════════════ ZUSAMMENFASSUNG ════════════ -->
    <section class="lz-content-section">
      <div class="lz-section-wrap">
        ${renderSubhead('Zusammenfassung & Testfragen')}

        ${renderVTimeline([
          { year: 'ca. 570', title: 'Pythagoras', text: '„Alles ist Zahl" — Mathematik als Weltstruktur, Sphärenharmonie, Seelenwanderung' },
          { year: 'ca. 570', title: 'Xenophanes', text: 'Religionskritik: Götterbilder als menschliche Projektionen' },
          { year: 'ca. 550', title: 'Heraklit', text: 'Pánta rheî — Logos als Gesetz des ewigen Wandels, Einheit der Gegensätze' },
          { year: 'ca. 515', title: 'Parmenides', text: '„Das Seiende ist" — Sein = Denken, Wandel ist Schein, Geburt der Ontologie' },
          { year: 'ca. 490', title: 'Zenon', text: 'Paradoxien beweisen: Vielheit und Bewegung führen zu Widersprüchen' },
          { year: 'ca. 495', title: 'Empedokles', text: '4 Elemente + Liebe/Streit — Synthese von Heraklit und Parmenides' },
          { year: 'ca. 500', title: 'Anaxagoras', text: 'Nous (Geist) als immaterielles Ordnungsprinzip' },
          { year: 'ca. 470', title: 'Demokrit', text: 'Atome und Leeres — mechanischer Materialismus, Euthymía-Ethik' },
        ])}

        ${renderAccordion([
          { title: '1. Vergleichen Sie die Arché-Konzepte von Pythagoras (Zahl) und Demokrit (Atome).',
            content: '<p class="lz-prose"><strong>Pythagoras:</strong> Die Arché sind Zahlenverhältnisse — formale Strukturen, die der Wirklichkeit zugrunde liegen. Die Zahl ist nicht materiell, sondern ein <strong>Ordnungsprinzip</strong>. Die Welt ist geordnet, weil sie auf mathematischen Proportionen beruht (Musikintervalle, Planetenbahnen).<br><br><strong>Demokrit:</strong> Die Arché sind materielle Teilchen (Atome) im leeren Raum. Qualitative Unterschiede (Farbe, Geschmack) sind subjektiv — objektiv gibt es nur <strong>Form, Größe und Bewegung</strong> der Atome. Ein rein materialistisches Weltbild ohne immaterielle Ordnungsprinzipien.<br><br><strong>Vergleich:</strong> Beide suchen das Bleibende hinter dem Wandel, aber auf gegensätzliche Weise: Pythagoras findet es in <strong>immateriellen Strukturen</strong> (Zahlen), Demokrit in <strong>materiellen Bausteinen</strong> (Atome). Pythagoras ist ein Vorläufer des mathematischen Platonismus (die Struktur ist realer als der Stoff), Demokrit ein Vorläufer des naturwissenschaftlichen Materialismus (der Stoff ist realer als die Struktur). Die moderne Physik vereint beide Ansätze: Elementarteilchen (Materie) gehorchen mathematischen Gesetzen (Struktur).</p>' },

          { title: '2. Erklären Sie Heraklits Logos-Begriff und seine drei Bedeutungsebenen.',
            content: '<p class="lz-prose">Der <strong>Logos</strong> ist Heraklits vielschichtigster Begriff mit drei miteinander verflochtenen Bedeutungen:<br><br><strong>(1) Sprachlich:</strong> Logos = „Wort, Rede, Erklärung". Es ist das, was Heraklit in seinem Buch „sagt" — seine Lehre. „Für diesen meinen Logos zeigen sich die Menschen unverständig" (B 1).<br><br><strong>(2) Kosmologisch:</strong> Der Logos ist das <strong>vernünftige Weltgesetz</strong>, das den ewigen Wandel regiert. Er bestimmt, dass das Feuer „nach Maßen" (métra) entflammt und erlischt. Er ist die Formel der kosmischen Ordnung — ewig, universal, identisch für alle.<br><br><strong>(3) Epistemologisch:</strong> Der Logos ist zugleich die <strong>Vernunft im Menschen</strong>, mit der er das Weltgesetz erkennen kann. Er ist „gemeinsam" (xynós) — allen Menschen zugänglich, aber die meisten leben, „als hätten sie eine private Einsicht" (B 2). Philosophie heißt: den gemeinsamen Logos statt der privaten Meinung zu erkennen.<br><br><strong>Einheit:</strong> Alle drei Ebenen sind eins: Das Wort des Philosophen (1) beschreibt das Weltgesetz (2), das durch die menschliche Vernunft (3) zugänglich ist. Es gibt eine Korrespondenz zwischen Sprache, Welt und Denken — eine Idee, die bei Wittgenstein und Heidegger wiederkehrt.</p>' },

          { title: '3. Warum konnte Demokrit behaupten, das „Nichts" existiere? Wie löst er Parmenides\' Problem?',
            content: '<p class="lz-prose">Parmenides hatte kategorisch erklärt: „Das Nicht-Seiende ist nicht." Daraus folgt: Es gibt keinen leeren Raum (denn der wäre „Nichts"), also keine Bewegung, also keine Vielheit. Die sichtbare Welt mit ihren Veränderungen ist bloßer Schein.<br><br>Demokrits geniale <strong>Umdeutung</strong>: Er akzeptiert die Prämisse, dass aus Nichts nichts entstehen kann — die Atome sind ewig und unvergänglich (Parmenides!). Aber er <strong>redefiniert</strong> das Nicht-Seiende: Das Leere (kenón) ist zwar „Nicht-Seiendes" im Sinne von „nicht-stofflich", aber es <strong>existiert</strong> als realer Raum. „Das Nichts existiert ebenso wie das Ichts" (B 156). Das Leere ist nicht „nichts", sondern der Raum, in dem sich die Atome bewegen können.<br><br><strong>Philosophische Leistung:</strong> Demokrit zeigt, dass Parmenides\' Argument auf einer <strong>Äquivokation</strong> (Doppeldeutigkeit) beruht: „Nicht-Seiendes" kann „absolutes Nichts" oder „nicht-stofflicher Raum" bedeuten. Im ersten Sinn hat Parmenides recht (absolutes Nichts existiert nicht), im zweiten irrt er (leerer Raum existiert sehr wohl). Diese logische Differenzierung ist philosophisch brillant.</p>' },

          { title: '4. Erläutern Sie, wie Empedokles versucht, Heraklit und Parmenides zu vereinen.',
            content: '<p class="lz-prose">Empedokles\' Synthese operiert auf <strong>zwei Ebenen</strong>:<br><br><strong>Ebene der Elemente (→ Parmenides):</strong> Die vier Wurzeln (Feuer, Wasser, Luft, Erde) sind <strong>ewig und unveränderlich</strong>. Sie entstehen nicht und vergehen nicht. In diesem Sinn stimmt Empedokles mit Parmenides überein: Das wahrhaft Seiende ist beständig.<br><br><strong>Ebene der Mischung (→ Heraklit):</strong> Die sichtbaren Dinge — Pflanzen, Tiere, Menschen, Gestirne — sind <strong>Mischungen</strong> der vier Elemente in wechselnden Proportionen. Diese Mischungen entstehen und vergehen ständig. In diesem Sinn stimmt Empedokles mit Heraklit überein: Die Welt der Erscheinungen ist in ständigem Wandel.<br><br><strong>Antrieb:</strong> Zwei kosmische Kräfte — <strong>Liebe</strong> (Philía, verbindet das Verschiedene) und <strong>Streit</strong> (Neîkos, trennt das Verbundene) — treiben einen ewigen Weltzyklus an. In der Phase vollkommener Liebe herrscht Einheit (→ Parmenides\' Kugel), in der Phase vollkommenen Streits herrscht absolute Trennung. Wir leben in einer Übergangsphase — daher die Vielfalt.<br><br>Empedokles\' Lösung ist elegant: Er <strong>verschiebt das Problem auf verschiedene Ebenen</strong>. Die Grundstoffe sind beständig (Sein), die Mischungen wandeln sich (Werden). Damit ist weder Parmenides noch Heraklit ganz widerlegt — beide haben auf ihrer Ebene recht.</p>' },
        ])}
      </div>
    </section>


    <!-- ════════════ NAVIGATION ════════════ -->
    <section class="lz-content-section" style="padding-top:0;">
      <div class="lz-section-wrap">
        ${renderPageNav({
          prev: { label: 'Ionische Naturphilosophen', link: `${BASE}/themen/vorsokratik/ionische-naturphilosophen` },
          next: { label: 'Die Sophisten',             link: `${BASE}/themen/vorsokratik/sophisten` },
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