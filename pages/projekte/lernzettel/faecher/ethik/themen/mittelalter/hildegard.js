// pages/projekte/lernzettel/faecher/ethik/themen/mittelalter/hildegard.js
// ══════════════════════════════════════════════════════════════════
// Kapitel 5.3 — Hildegard von Bingen (1098–1179)
// Visionen, Naturphilosophie, Kosmologie, Viriditas, Musik
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

const HILDEGARD_NATUR_TABS = [
  { key: 'physica', label: 'Physica' },
  { key: 'causae',  label: 'Causae et Curae' },
];

export default class HildegardPage {
  constructor(router) { this.router = router; }
  render() {
    ensureComponentsCSS();
    loadComponentCSS('pages/projekte/lernzettel/styles/sub.css');
    const el = document.createElement('div');
    el.className = 'page page-hildegard';
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
          <span>Hildegard von Bingen</span>
        </nav>
        <h1 class="lz-sub-title"><em>Hildegard</em> von Bingen</h1>
        <p class="lz-sub-desc">
          Visionärin, Naturforscherin, Komponistin, Äbtissin und Kirchenlehrerin —
          Hildegard entwarf eine ganzheitliche Kosmologie, in der Mensch, Natur
          und göttliche Ordnung untrennbar verbunden sind.
          Die erste bedeutende Philosophin des Mittelalters.
        </p>
        ${renderTags(['Kapitel 5.3', '1098–1179', 'Bermersheim · Disibodenberg · Rupertsberg', 'Viriditas · Scivias · Mikro-Makrokosmos', 'Abitur 2026'])}
      </div>
    </section>

    <section class="lz-content-section">
      <div class="lz-section-wrap">
        ${renderSubhead('Biographisches')}
        <h2 class="lz-h2 reveal">Eine Frau in einer <em>Männerwelt</em></h2>
        <p class="lz-prose reveal">
          Hildegard wurde 1098 als zehntes Kind einer Adelsfamilie in
          <strong>Bermersheim</strong> (bei Alzey, Rheinhessen) geboren. Mit acht
          Jahren wurde sie als „Zehnt" (oblata) dem Kloster
          <strong>Disibodenberg</strong> übergeben, wo sie unter der Anleitung
          der Inklusin <strong>Jutta von Sponheim</strong> aufwuchs. Schon als Kind
          hatte Hildegard <strong>Visionen</strong> — Lichterscheinungen, die sie
          als göttliche Offenbarungen deutete.
        </p>
        <p class="lz-prose reveal">
          Was Hildegard einzigartig macht: In einer Epoche, in der Frauen von
          Universitäten ausgeschlossen waren, erreichte sie als <strong>Äbtissin,
          Predigerin, Beraterin von Päpsten und Kaisern</strong> eine Autorität,
          die selbst mächtige Bischöfe nicht in Frage stellten. Ihre intellektuelle
          Legitimation beruhte auf den <strong>Visionen</strong> — die offizielle
          Anerkennung durch Papst Eugen III. (1147/48, auf Betreiben Bernhards von
          Clairvaux) gab ihr die Freiheit zu lehren, zu schreiben und öffentlich
          zu predigen.
        </p>
        ${renderVTimeline([
          { year: '1098', title: 'Geburt in Bermersheim', text: 'Zehntes Kind einer Adelsfamilie; von Kindheit an Visionen' },
          { year: '1106', title: 'Übergabe an Jutta von Sponheim', text: 'Klosterleben am Disibodenberg; Grundausbildung in Latein, Psalmen, Benediktsregel' },
          { year: '1136', title: 'Äbtissin des Disibodenberg', text: 'Nach Juttas Tod übernimmt Hildegard die Leitung der Frauenklause' },
          { year: '1141', title: 'Visionserlebnis — Beginn der Schreibtätigkeit', text: '„Ein feuriges Licht von übergroßem Glanz durchdrang mein Gehirn" — Befehl: „Schreibe, was du siehst und hörst!"' },
          { year: '1147/48', title: 'Päpstliche Anerkennung', text: 'Papst Eugen III. liest auf der Synode von Trier aus Scivias vor und bestätigt die Visionen als echt' },
          { year: '1150', title: 'Gründung des Klosters Rupertsberg', text: 'Bei Bingen am Rhein; gegen den Widerstand der Mönche des Disibodenberg' },
          { year: '1158–63', title: 'Predigtreisen', text: 'Vier große Predigtreisen durch Deutschland — einzigartig für eine Frau im 12. Jh.' },
          { year: '1165', title: 'Gründung des Klosters Eibingen', text: 'Zweites Kloster am gegenüberliegenden Rheinufer' },
          { year: '1179', title: 'Tod in Rupertsberg', text: 'Stirbt 81-jährig; Heiligsprechung erst 2012 durch Benedikt XVI.; zugleich zur Kirchenlehrerin erhoben' },
        ])}
        ${renderInfobox({
          type: '', icon: 'fas fa-info-circle',
          title: 'Die Visionen als Erkenntnisquelle',
          body: 'Hildegards Visionen sind philosophisch relevant, weil sie eine <strong>alternative Erkenntnisform</strong> darstellen: weder rein rational (scholastische Argumentation) noch rein mystisch (wortlose Gottesschau wie bei Plotin), sondern <strong>visionär-intellektuell</strong> — Bilder, die zugleich Einsichten enthalten und durch die Vernunft gedeutet werden müssen. Hildegard betonte stets, dass sie die Visionen „im Wachzustand" empfing, nicht in Trance oder Ekstase — sie behielt ihr volles Bewusstsein und ihre Urteilsfähigkeit.'
        })}
      </div>
    </section>

    <section class="lz-content-section">
      <div class="lz-section-wrap">
        ${renderSubhead('Die drei großen Visionswerke')}
        <h2 class="lz-h2 reveal">Kosmologie, Heilsgeschichte, <em>göttliche Werke</em></h2>
        ${renderTable({
          headers: ['Werk', 'Zeitraum', 'Inhalt', 'Bedeutung'],
          rows: [
            ['<strong>Scivias</strong> (Wisse die Wege)', '1141–1151', '26 Visionen in 3 Büchern: Schöpfung, Erlösung, Heiligung', 'Hauptwerk; kosmologisch-theologische Gesamtschau'],
            ['<strong>Liber vitae meritorum</strong>', '1158–1163', '35 Tugenden und Laster als kosmische Kräfte im Dialog', 'Ethik als Kosmologie: Tugend = Einklang mit dem Kosmos'],
            ['<strong>Liber divinorum operum</strong>', '1163–1173/74', '10 Visionen: Mensch als Mikrokosmos im Makrokosmos', 'Spätwerk; Synthese von Naturphilosophie und Theologie'],
          ],
          highlight: [0, 2],
        })}
        ${renderMerkboxGrid([
          { icon: 'fas fa-eye', title: 'Scivias — Die Kosmosschau',
            text: 'Hildegard „sieht" den Kosmos als ein leuchtendes kosmisches Ei, umgeben von konzentrischen Sphären aus Feuer, Äther, Wasser und Erde. Im Zentrum steht der Mensch — aufrecht, mit ausgebreiteten Armen, den Kosmos berührend. Jede Vision wird durch eine allegorische Deutung (expositio) erklärt.' },
          { icon: 'fas fa-theater-masks', title: 'Liber vitae meritorum — Tugenden und Laster',
            text: 'Hildegard personifiziert Tugenden und Laster als sprechende Figuren: Die Laster sind hässlich, verzerrt, tierähnlich; die Tugenden strahlend und harmonisch. Jedes Laster spricht eine Anklage, jede Tugend antwortet. Ethik als dramatischer Dialog kosmischer Kräfte — nicht als abstrakte Pflichtenlehre.' },
          { icon: 'fas fa-user', title: 'Liber divinorum operum — Der kosmische Mensch',
            text: 'Das philosophisch reichste Werk: Der Mensch steht im Zentrum des Kosmos — seine Organe entsprechen den Elementen, seine Proportionen den kosmischen Maßen, seine Seele der Weltseele. Mikrokosmos-Makrokosmos-Analogie in ihrer elaboriertesten mittelalterlichen Form.' },
        ])}
      </div>
    </section>

    <section class="lz-content-section">
      <div class="lz-section-wrap">
        ${renderSubhead('Philosophische Kerngedanken')}
        <h2 class="lz-h2 reveal"><em>Viriditas</em> — Die Grünkraft des Lebens</h2>
        <p class="lz-prose reveal">
          Hildegards originellster philosophischer Beitrag ist das Konzept der
          <strong>Viriditas</strong> (Grünkraft, Lebenskraft) — ein Schlüsselbegriff,
          der sich durch ihr gesamtes Werk zieht. Viriditas ist die lebensschaffende,
          fruchtbare Kraft, die alles Seiende durchdringt — von den Pflanzen über
          die Tiere bis zum Menschen und zum göttlichen Wirken selbst.
        </p>
        ${renderMerkboxGrid([
          { icon: 'fas fa-seedling', title: 'Viriditas — Die Grünkraft',
            text: 'Viriditas ist mehr als ein biologischer Begriff: Sie ist die göttliche Schöpfungskraft, die sich in der Natur manifestiert. Das Grünen der Pflanzen ist sichtbarer Ausdruck derselben Kraft, die auch die menschliche Seele belebt und die Tugenden wachsen lässt. Sünde ist „Austrocknung" (ariditas) — Verlust der Lebenskraft.' },
          { icon: 'fas fa-globe', title: 'Mikrokosmos–Makrokosmos',
            text: 'Der Mensch ist ein „kleiner Kosmos" (minor mundus): Sein Kopf entspricht der Himmelskugel, seine Brust dem Äther, sein Bauch der Luft, seine Beine der Erde. Krankheit = Disharmonie zwischen Mikro- und Makrokosmos. Heilung = Wiederherstellung der kosmischen Harmonie im Körper.' },
          { icon: 'fas fa-fire-alt', title: 'Die vier Elemente im Menschen',
            text: 'Feuer = Sehen und Denken. Luft = Hören und Bewegung. Wasser = Blut und Körpersäfte. Erde = Fleisch und Knochen. Gesundheit beruht auf dem richtigen Gleichgewicht dieser Elemente — ganz analog zur hippokratischen Säftelehre, aber kosmologisch begründet.' },
          { icon: 'fas fa-venus', title: 'Aufwertung des Körpers und der Frau',
            text: 'Gegen die asketische Leibfeindlichkeit vieler Zeitgenossen betont Hildegard: Der Körper ist gut, denn er ist Gottes Schöpfung. Sexualität ist Teil der göttlichen Ordnung — sie dient der Fortpflanzung UND der Freude (eine für das 12. Jh. unerhörte Aussage). Sie beschreibt den weiblichen Orgasmus und die weibliche Anatomie offen — einzigartig im mittelalterlichen Schrifttum.' },
          { icon: 'fas fa-music', title: 'Musik als kosmisches Prinzip',
            text: 'Hildegard komponierte über 70 liturgische Gesänge und das erste musikdramatische Werk des Mittelalters (Ordo Virtutum). Musik ist für sie nicht bloß Unterhaltung, sondern Abbild der kosmischen Harmonie — die Seele „klingt" wie ein Instrument, das auf die göttliche Harmonie gestimmt ist. Pythagoreische Sphärenharmonie in christlichem Gewand.' },
        ])}
        ${renderFormulaBox({
          label: 'Hildegard, Liber divinorum operum I, 2',
          formula: '„Ich, die höchste und feurige Kraft,<br>habe jeden Funken des Lebens entzündet.<br>Ich bin das Leben, ganz und gar.<br>Ich bin die Grünkraft (viriditas) aller Dinge."',
          desc: 'Gott spricht als Viriditas — die Lebenskraft ist Gottes eigene Gegenwart in der Schöpfung. Immanenz und Transzendenz zugleich.'
        })}
      </div>
    </section>

    <section class="lz-content-section">
      <div class="lz-section-wrap">
        ${renderSubhead('Naturphilosophie und Heilkunde')}
        <h2 class="lz-h2 reveal"><em>Physica</em> und <em>Causae et Curae</em></h2>
        <p class="lz-prose reveal">
          Neben den theologisch-visionären Werken verfasste Hildegard zwei
          naturkundliche Schriften, die sie als <strong>Naturforscherin</strong>
          ausweisen:
        </p>
        <nav class="wim-tabs" id="hildegard-natur-tabs" aria-label="Naturkunde">
          ${HILDEGARD_NATUR_TABS.map((t, i) => `
            <button class="wim-tab${i === 0 ? ' active' : ''}" data-wim="${t.key}">
              ${t.label}
            </button>`).join('')}
        </nav>
        <div class="wim-category" data-wim-cat="physica">
          <h3 class="lz-h3">Physica (Naturkunde)</h3>
          <p class="lz-prose">Neun Bücher über die Heilkräfte von Pflanzen, Elementen, Bäumen, Steinen, Fischen, Vögeln, Tieren, Reptilien und Metallen. Hildegard beschreibt ca. <strong>230 Pflanzen</strong> und <strong>60 Baumarten</strong> mit ihren medizinischen Eigenschaften — teils auf traditioneller Klostermedizin beruhend, teils auf eigener Beobachtung.</p>
          ${renderMerkboxGrid([
            { icon: 'fas fa-leaf', title: 'Heilpflanzen',
              text: 'Hildegard beschreibt die Heilkräfte von Pflanzen wie Dinkel (Lieblingsgetreide: „das beste Getreide"), Fenchel, Galgant, Bertram und Quendel. Ihre Empfehlungen basieren auf der Vier-Säfte-Lehre: Jede Pflanze ist warm/kalt und feucht/trocken — sie heilt, indem sie das gestörte Gleichgewicht wiederherstellt.' },
            { icon: 'fas fa-gem', title: 'Edelsteinheilkunde',
              text: 'Steine besitzen Heilkräfte, die von Gott in sie gelegt wurden: Saphir gegen Augenleiden, Jaspis gegen Fieber, Amethyst gegen Hautkrankheiten. Modern gesehen: keine Wirksamkeit — aber historisch bedeutsam als Zeugnis einer ganzheitlichen Naturanschauung.' },
          ])}
        </div>
        <div class="wim-category hidden" data-wim-cat="causae">
          <h3 class="lz-h3">Causae et Curae (Ursachen und Heilungen)</h3>
          <p class="lz-prose">Ein umfassendes medizinisches Werk, das Kosmologie, Anthropologie und Heilkunde verbindet. Hildegard beschreibt:</p>
          ${renderMerkboxGrid([
            { icon: 'fas fa-heartbeat', title: 'Temperamentenlehre',
              text: 'Vier Temperamente (sanguinisch, cholerisch, melancholisch, phlegmatisch) in geschlechtsspezifischer Ausprägung. Hildegard beschreibt weibliche und männliche Konstitutionstypen mit erstaunlicher Detailkenntnis.' },
            { icon: 'fas fa-utensils', title: 'Diätetik',
              text: 'Ernährungsempfehlungen nach dem Vier-Säfte-Prinzip: Kranke mit „kaltem" Temperament brauchen „warme" Speisen. Dinkel, Fenchel, Kastanien werden empfohlen; rohes Obst, Schweinefleisch und Erdbeeren kritisch gesehen.' },
            { icon: 'fas fa-moon', title: 'Kosmische Medizin',
              text: 'Krankheit und Heilung sind in kosmische Rhythmen eingebettet: Mondphasen, Jahreszeiten, Sternzeichen beeinflussen den Krankheitsverlauf. Aderlass, Kräuteranwendungen und Fasten sollen auf den richtigen kosmischen Zeitpunkt abgestimmt werden.' },
          ])}
        </div>
      </div>
    </section>

    <section class="lz-content-section">
      <div class="lz-section-wrap">
        ${renderSubhead('Philosophische Einordnung')}
        <h2 class="lz-h2 reveal">Hildegard im Kontext der <em>mittelalterlichen Philosophie</em></h2>
        ${renderCompare({
          titleA: 'Hildegard — Visionäre Naturphilosophie', titleB: 'Scholastik (Anselm, Abälard, Thomas)',
          listA: ['Erkenntnisquelle: <strong>Vision</strong> + Vernunft', 'Methode: <strong>Bild und Symbol</strong>', 'Natur als <strong>lebendiger Organismus</strong> (Viriditas)', 'Ganzheitlich: Körper, Seele, Kosmos sind eins', 'Aufwertung von <strong>Körper, Sinnen, Frau</strong>', 'Schreibsprache: <strong>bildhaft, poetisch, visionär</strong>'],
          listB: ['Erkenntnisquelle: <strong>Vernunft</strong> + Offenbarung', 'Methode: <strong>Logik und Argumentation</strong>', 'Natur als <strong>Gegenstand rationaler Analyse</strong>', 'Analytisch: Trennung von Theologie, Philosophie, Naturkunde', 'Tendenz zur <strong>Leibfeindlichkeit</strong> (Augustinus-Tradition)', 'Schreibsprache: <strong>begrifflich, systematisch, trocken</strong>'],
        })}
        ${renderInfobox({
          type: 'success', icon: 'fas fa-link',
          title: 'Moderne Relevanz',
          body: 'Hildegards Denken erlebt eine bemerkenswerte Renaissance: (1) <strong>Ökologische Philosophie:</strong> Ihre Vorstellung einer lebendigen, beseelten Natur (Viriditas) wird von der Tiefenökologie (Naess), der Gaia-Hypothese (Lovelock) und der feministischen Ökophilosophie rezipiert. (2) <strong>Ganzheitsmedizin:</strong> Die Verbindung von Körper, Seele und Kosmos in ihrer Heilkunde entspricht dem Ansatz der integrativen Medizin. (3) <strong>Feministische Philosophie:</strong> Hildegard wird als Pionierin weiblichen Philosophierens wiederentdeckt — eine Stimme, die 800 Jahre lang marginalisiert wurde.'
        })}
      </div>
    </section>

    <section class="lz-content-section">
      <div class="lz-section-wrap">
        ${renderSubhead('Testfragen — Abiturniveau')}
        ${renderAccordion([
          { title: '1. Erklären Sie Hildegards Konzept der Viriditas und seine philosophische Bedeutung.',
            content: '<p class="lz-prose"><strong>Viriditas</strong> (Grünkraft/Lebenskraft) ist Hildegards zentraler Begriff für die <strong>schöpferische Kraft Gottes in der Natur</strong>. Sie manifestiert sich auf allen Ebenen: im Grünen der Pflanzen, in der Fruchtbarkeit der Tiere, in der Gesundheit des Menschen, in der Tugendhaftigkeit der Seele.<br><br><strong>Philosophische Bedeutung:</strong> (1) <strong>Immanenz Gottes:</strong> Gott ist nicht nur transzendenter Schöpfer, sondern in seiner Schöpfung <strong>gegenwärtig</strong> als lebensschaffende Kraft. Viriditas überbrückt die Kluft zwischen Schöpfer und Geschöpf — ohne Pantheismus (Gott geht nicht in der Natur auf, aber er wirkt in ihr).<br>(2) <strong>Einheit von Natur und Ethik:</strong> Tugend ist „Grünen" der Seele, Sünde ist „Austrocknung" (ariditas). Moralisches Versagen wird nicht als Rechtsbruch (juridisch), sondern als <strong>Vitalitätsverlust</strong> (organisch) verstanden — eine alternative Ethik-Metaphorik.<br>(3) <strong>Ökologische Dimension:</strong> Die Natur hat einen <strong>Eigenwert</strong>, weil Gottes Kraft in ihr wirkt. Naturzerstörung ist zugleich Zerstörung des Göttlichen — ein Argument, das in der modernen Umweltethik rezipiert wird.</p>' },
          { title: '2. Vergleichen Sie Hildegards Erkenntnisweg (Vision) mit der scholastischen Methode (Argumentation).',
            content: '<p class="lz-prose"><strong>Hildegard — Visionäre Erkenntnis:</strong> Erkenntnis kommt durch <strong>göttliche Eingebung</strong> in Form von Lichtvisionen, die Hildegard im Wachzustand empfängt. Die Visionen zeigen <strong>Bilder</strong> (kosmisches Ei, Mensch im Kreis, Tugenden als strahlende Gestalten), die dann durch die Vernunft <strong>gedeutet</strong> werden (expositio). Erkenntnis ist Geschenk — der Mensch empfängt, statt zu suchen.<br><br><strong>Scholastik — Rationale Argumentation:</strong> Erkenntnis wird durch <strong>logisches Schließen</strong> gewonnen: Definition, Syllogismus, quaestio disputata. Der Ausgangspunkt sind <strong>Texte</strong> (Bibel, Kirchenväter, Aristoteles), die durch Vernunft geprüft und systematisiert werden. Erkenntnis ist Arbeit — der Mensch sucht aktiv.<br><br><strong>Beurteilung:</strong> Beide Wege beanspruchen Wahrheit, aber auf verschiedene Weise. Die Scholastik kann intersubjektiv geprüft werden (Argumente sind öffentlich zugänglich). Hildegards Visionen sind <strong>privat</strong> — andere können sie nicht nachvollziehen, nur glauben oder bezweifeln. Andererseits erschließen Hildegards Bilder Dimensionen, die die begriffliche Sprache der Scholastik nicht erreicht: ästhetische, emotionale, körperliche Erfahrung als Teil der Erkenntnis. Die <strong>Phänomenologie</strong> des 20. Jh. wird ähnlich argumentieren: Nicht alle Erkenntnis lässt sich in Propositionen fassen.</p>' },
          { title: '3. Inwiefern ist Hildegards Mikrokosmos-Makrokosmos-Lehre philosophisch relevant?',
            content: '<p class="lz-prose"><strong>Das Konzept:</strong> Der Mensch ist ein <strong>„kleiner Kosmos" (minor mundus / mikrókosmos)</strong>, der die Strukturen des großen Kosmos (Makrokosmos) in sich spiegelt. Kopf = Himmelskugel, Brust = Luft, Bauch = Meer, Beine = Erde. Die Elemente des Kosmos (Feuer, Luft, Wasser, Erde) finden sich als Säfte und Organe im menschlichen Körper.<br><br><strong>Vorläufer:</strong> Anaximenes (Luft-Seele-Analogie), Platon (<em>Timaios</em>: Weltkörper als lebendes Wesen), Aristoteles (Seele als Form des Körpers), Stoiker (kosmisches Pneuma durchdringt alles), Plotin (Weltseele individuiert sich in Einzelseelen).<br><br><strong>Philosophische Relevanz:</strong> (1) <strong>Erkenntnistheoretisch:</strong> Wenn der Mensch die Strukturen des Kosmos in sich trägt, kann er den Kosmos <strong>erkennen</strong>, weil Gleiches Gleiches erkennt. (2) <strong>Ethisch:</strong> Gesundheit = Harmonie zwischen Mikro- und Makrokosmos. Krankheit = Disharmonie. Heilung = Wiederherstellung der kosmischen Ordnung im Individuum. (3) <strong>Ökologisch:</strong> Der Mensch ist <strong>Teil</strong> des Kosmos, nicht sein Herr. Naturzerstörung schädigt den Menschen, weil sie seine eigene Lebensgrundlage zerstört.</p>' },
          { title: '4. Diskutieren Sie Hildegards Stellung als Philosophin: Kann man sie als Philosophin bezeichnen?',
            content: '<p class="lz-prose"><strong>Argumente dafür:</strong><br>(1) Hildegard behandelt <strong>philosophische Fragen</strong>: Kosmologie (Struktur des Universums), Anthropologie (Wesen des Menschen), Ethik (Tugend und Laster), Erkenntnistheorie (Verhältnis von Vision und Vernunft), Naturphilosophie (Elemente, Heilkräfte).<br>(2) Sie entwickelt <strong>originelle Konzepte</strong>: Viriditas (Grünkraft), die organische Ethik (Tugend als Wachstum), die Musik als kosmisches Prinzip.<br>(3) Ihre Werke wurden von Zeitgenossen als <strong>Autorität</strong> anerkannt — Päpste, Kaiser, Bischöfe konsultierten sie.<br><br><strong>Argumente dagegen:</strong><br>(1) Sie argumentiert nicht im scholastischen Sinn — keine Syllogismen, keine quaestiones, keine systematische Begriffsanalyse.<br>(2) Ihre Erkenntnisquelle sind <strong>Visionen</strong>, nicht Vernunft — Philosophie im engeren Sinn beruht auf rationaler Argumentation.<br>(3) Sie hat keine <strong>Schule</strong> begründet — kein Abälard, kein Thomas beruft sich auf sie.<br><br><strong>Vermittlung:</strong> Hildegard philosophiert auf <strong>andere Weise</strong> als die Scholastiker — bildhaft, ganzheitlich, erfahrungsbezogen statt analytisch-begrifflich. Wenn man Philosophie als „Liebe zur Weisheit" versteht (und nicht nur als akademische Disziplin), ist Hildegard eine Philosophin — eine, die in <strong>Bildern</strong> denkt statt in Begriffen. Die <strong>feministische Philosophie</strong> des 20. Jh. hat gezeigt, dass der Ausschluss nicht-argumentativer Denkformen aus der Philosophie selbst ein philosophisch fragwürdiger Akt war.</p>' },
        ])}
      </div>
    </section>

    <section class="lz-content-section" style="padding-top:0;">
      <div class="lz-section-wrap">
        ${renderPageNav({
          prev: { label: 'Petrus Abälard',   link: `${BASE}/themen/mittelalter/petrus` },
          next: { label: 'Thomas von Aquin',  link: `${BASE}/themen/mittelalter/thomas` },
        }, BASE)}
      </div>
    </section>
    ${footerHTML(this.router)}
    `;
  }
  init() { i18n.init(); initScrollReveal(); refreshScrollReveal(); initInteractive(document); initWimTabs(document); }
  cleanup() {}
}