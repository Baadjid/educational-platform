// pages/projekte/lernzettel/faecher/ethik/themen/neuzeit/bruno.js
// ══════════════════════════════════════════════════════════════════
// Kapitel 6.1 — Humanismus & Renaissance
// Erasmus von Rotterdam (1469–1536), Giordano Bruno (1548–1600)
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

const KAP_COLOR = '#5b6abf';
const KAP_COLOR_RGB = '91, 106, 191';

const ERASMUS_TABS = [
  { key: 'torheit',   label: 'Lob der Torheit' },
  { key: 'willen',    label: 'Willensfreiheit' },
  { key: 'philosophia', label: 'Philosophia Christi' },
];

export default class BrunoPage {
  constructor(router) { this.router = router; }
  render() {
    ensureComponentsCSS();
    loadComponentCSS('pages/projekte/lernzettel/styles/sub.css');
    const el = document.createElement('div');
    el.className = 'page page-bruno';
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
          <span>Erasmus &amp; Giordano Bruno</span>
        </nav>
        <h1 class="lz-sub-title"><em>Erasmus</em> &amp; <em>Giordano Bruno</em></h1>
        <p class="lz-sub-desc">
          Der Humanist und der Ketzer: Erasmus befreite das Denken durch ironische
          Gelehrsamkeit, Bruno sprengte das Weltbild durch die Vision eines
          unendlichen Universums — und bezahlte mit dem Scheiterhaufen.
        </p>
        ${renderTags(['Kapitel 6.1', '15.–16. Jh.', 'Rotterdam · Nola · Rom', 'Humanismus · Unendliches Universum · Toleranz', 'Abitur 2026'])}
      </div>
    </section>

    <section class="lz-content-section">
      <div class="lz-section-wrap">
        ${renderSubhead('Renaissance & Humanismus — Der kulturelle Kontext')}
        <h2 class="lz-h2 reveal">Die Wiedergeburt der <em>Antike</em></h2>
        <p class="lz-prose reveal">
          Die <strong>Renaissance</strong> (ital. rinascita = Wiedergeburt, ca. 1350–1600) bezeichnet die kulturelle Bewegung, die von Italien ausgehend ganz Europa erfasste. Ihr Kern: die <strong>Rückbesinnung auf die antike Kultur</strong> — griechische Philosophie, römische Literatur, klassische Kunst — als Alternative zum scholastischen Denken des Mittelalters. Der <strong>Humanismus</strong> als Bildungsbewegung stellte den <strong>Menschen</strong> ins Zentrum: nicht als Sünder (Augustinus), sondern als schöpferisches, freies, bildungsfähiges Wesen.
        </p>
        ${renderMerkboxGrid([
          { icon: 'fas fa-book-open', title: 'Ad fontes! (Zu den Quellen!)',
            text: 'Programmatischer Ruf der Humanisten: Zurück zu den Originaltexten (Platon, Cicero, griechisches NT) statt zu den scholastischen Kommentaren. Kritische Philologie statt blinder Autoritätsgläubigkeit. Erasmus edierte das griechische Neue Testament (1516) — eine Sensation.' },
          { icon: 'fas fa-user', title: 'Dignitas hominis (Würde des Menschen)',
            text: 'Giovanni Pico della Mirandola (Rede über die Würde des Menschen, 1486): Der Mensch ist kein festgelegtes Wesen — er kann sich selbst bestimmen. „Wir haben dich weder himmlisch noch irdisch gemacht, damit du dich selbst als dein eigener Bildner formst." Erster Entwurf menschlicher Autonomie.' },
          { icon: 'fas fa-globe-europe', title: 'Perspektivenwechsel',
            text: 'Entdeckung Amerikas (1492), Reformation (1517), Buchdruck (Gutenberg ca. 1450), heliozentrische Kosmologie (Kopernikus 1543) — das 15./16. Jh. erlebt eine Kumulation von Umbrüchen, die das mittelalterliche Weltbild endgültig erschüttert.' },
          { icon: 'fas fa-palette', title: 'Kunst als Erkenntnis',
            text: 'Leonardo, Michelangelo, Dürer: Die Renaissance-Kunst verbindet Ästhetik mit Wissenschaft — anatomische Studien, Zentralperspektive, mathematische Proportionen. Der Künstler wird zum Forscher, die Kunst zum Medium der Welterkenntnis.' },
        ])}
      </div>
    </section>

    <section class="lz-content-section">
      <div class="lz-section-wrap">
        ${renderSubhead('Erasmus von Rotterdam (1469–1536)')}
        <h2 class="lz-h2 reveal">Der Fürst der <em>Humanisten</em></h2>
        <p class="lz-prose reveal">
          Desiderius Erasmus war der berühmteste Gelehrte Europas — ein
          intellektueller Superstar, der mit Päpsten, Königen und
          Reformatoren korrespondierte. Als uneheliches Kind eines Priesters
          aufgewachsen, wurde er Augustinerchorherr, dann freier Gelehrter.
          Sein Lebenswerk: die <strong>Versöhnung von antiker Bildung und
          christlichem Glauben</strong> durch kritische Philologie, ironischen
          Witz und die Idee einer <strong>philosophia Christi</strong>.
        </p>
        ${renderVTimeline([
          { year: '1469', title: 'Geburt in Rotterdam', text: 'Unehelicher Sohn eines Priesters; Halbwaise; Klostererziehung' },
          { year: '1499', title: 'Erste England-Reise', text: 'Begegnung mit Thomas Morus; Beginn der humanistischen Studien in Oxford' },
          { year: '1509', title: 'Lob der Torheit (Moriae Encomium)', text: 'Satirische Meisterschrift: Die personifizierte Torheit (Moria/Stultitia) lobt sich selbst — und deckt die Dummheit der Mächtigen auf' },
          { year: '1516', title: 'Novum Instrumentum', text: 'Erste kritische Edition des griechischen Neuen Testaments — Grundlage der Reformation, ohne die Luther nicht möglich gewesen wäre' },
          { year: '1524', title: 'De libero arbitrio (Über den freien Willen)', text: 'Gegen Luther: Der Mensch hat einen freien Willen — Gnade und Freiheit schließen sich nicht aus' },
          { year: '1536', title: 'Tod in Basel', text: 'Stirbt als Katholik, der die Reformation ermöglicht, aber ihre Radikalität abgelehnt hatte' },
        ])}

        <nav class="wim-tabs" id="erasmus-tabs" aria-label="Erasmus">
          ${ERASMUS_TABS.map((t, i) => `
            <button class="wim-tab${i === 0 ? ' active' : ''}" data-wim="${t.key}">
              ${t.label}
            </button>`).join('')}
        </nav>

        <div class="wim-category" data-wim-cat="torheit">
          <h3 class="lz-h3">Moriae Encomium (1509)</h3>
          <p class="lz-prose">Die <strong>Torheit</strong> (Moria/Stultitia) tritt als Rednerin auf und „lobt" sich selbst — eine geniale <strong>satirische Umkehrung</strong>: Indem die Torheit sich selbst preist, entlarvt sie die Torheit der anderen. Erasmus kritisiert in eleganter Ironie:</p>
          ${renderMerkboxGrid([
            { icon: 'fas fa-church', title: 'Kirchliche Missstände',
              text: 'Päpste, die Kriege führen statt Frieden zu stiften. Mönche, die Frömmigkeit heucheln und Reichtümer horten. Theologen, die über die Zahl der Engel auf einer Nadelspitze streiten, statt das Evangelium zu leben.' },
            { icon: 'fas fa-crown', title: 'Politische Macht',
              text: 'Fürsten, die ihre Untertanen ausbeuten. Höflinge, die Unterwürfigkeit als Tugend tarnen. Krieger, die Brutalität als Ehre verkleiden. Erasmus\' Pazifismus ist radikal: Jeder Krieg ist töricht.' },
            { icon: 'fas fa-graduation-cap', title: 'Scholastische Gelehrsamkeit',
              text: 'Philosophen und Theologen, die sich in abstrakten Spitzfindigkeiten verlieren und das Wesentliche — die Praxis des christlichen Lebens — vergessen. Die Torheit der Gelehrten ist die gefährlichste, weil sie sich für Weisheit hält.' },
          ])}
          <p class="lz-prose"><strong>Philosophische Pointe:</strong> Am Ende wendet sich die Torheit ins Positive — die „christliche Torheit" des Paulus (1 Kor 1,25: „Die Torheit Gottes ist weiser als die Menschen"). Wahre Weisheit erscheint der Welt als Torheit: Liebe, Demut, Selbstlosigkeit sind „töricht" im Sinne der Welt — aber wahr im Sinne Christi.</p>
        </div>

        <div class="wim-category hidden" data-wim-cat="willen">
          <h3 class="lz-h3">Erasmus vs. Luther — Die Freiheitsdebatte</h3>
          <p class="lz-prose">1524 veröffentlichte Erasmus <em>De libero arbitrio</em> (Über den freien Willen) — eine direkte Antwort auf Luthers Determinismus. Luther antwortete 1525 mit <em>De servo arbitrio</em> (Vom unfreien Willen). Die Debatte ist eine der wichtigsten der Philosophiegeschichte.</p>
          ${renderCompare({
            titleA: 'Erasmus: Der Wille ist frei', titleB: 'Luther: Der Wille ist geknechtet',
            listA: ['Der Mensch kann <strong>mitwirken</strong> an seiner Erlösung', 'Gnade und Freiheit <strong>kooperieren</strong>', 'Bibelstellen sind <strong>mehrdeutig</strong> — Demut statt Dogmatismus', 'Moral setzt <strong>Verantwortlichkeit</strong> voraus → braucht Freiheit', '<strong>Humanistischer Optimismus</strong>: Der Mensch kann sich bessern'],
            listB: ['Der Mensch ist <strong>total verderbt</strong> — kann nichts beitragen', 'Erlösung ist <strong>allein Gottes Werk</strong> (sola gratia)', 'Die Bibel ist <strong>eindeutig</strong> — der Heilige Geist klärt', 'Prädestination: Gott bestimmt, <strong>wer gerettet</strong> wird', '<strong>Augustinischer Pessimismus</strong>: Erbsünde zerstört die Freiheit'],
          })}
        </div>

        <div class="wim-category hidden" data-wim-cat="philosophia">
          <h3 class="lz-h3">Das ethische Christentum</h3>
          <p class="lz-prose">Erasmus' positives Programm: eine <strong>Philosophia Christi</strong> — ein Christentum, das weniger auf Dogmen und Riten als auf <strong>ethisches Handeln</strong> setzt:</p>
          ${renderMerkboxGrid([
            { icon: 'fas fa-heart', title: 'Praxis statt Dogma',
              text: 'Nicht die theologischen Spitzfindigkeiten (Transsubstantiation, Zahl der Sakramente) sind das Wesentliche, sondern die Nachahmung Christi im Alltag: Nächstenliebe, Friedfertigkeit, Bescheidenheit. Christentum als Lebensform, nicht als Dogmensystem.' },
            { icon: 'fas fa-dove', title: 'Pazifismus',
              text: '„Dulce bellum inexpertis" (Süß ist der Krieg nur dem Unerfahrenen). Erasmus war einer der konsequentesten Pazifisten der Geistesgeschichte. Jeder Krieg — auch der „gerechte Krieg" — ist ein Verrat am Evangelium des Friedens.' },
            { icon: 'fas fa-handshake', title: 'Toleranz',
              text: 'In einer Zeit der Glaubenskriege plädierte Erasmus für Mäßigung, Dialog und Toleranz. Sein Motto: „In necessariis unitas, in dubiis libertas, in omnibus caritas" (In Notwendigem Einheit, in Zweifelhaftem Freiheit, in allem Liebe).' },
          ])}
        </div>
      </div>
    </section>

    <section class="lz-content-section">
      <div class="lz-section-wrap">
        ${renderSubhead('Giordano Bruno (1548–1600)')}
        <h2 class="lz-h2 reveal">Das <em>unendliche Universum</em> und der Scheiterhaufen</h2>
        <p class="lz-prose reveal">
          Filippo Bruno, geboren 1548 in <strong>Nola</strong> bei Neapel, trat als
          Jugendlicher in den Dominikanerorden ein und nahm den Klosternamen
          <strong>Giordano</strong> an. Doch sein rastloser Geist vertrug keine
          Grenzen — weder die des Klosters noch die des ptolemäischen Weltbilds.
          Er floh aus dem Orden und wanderte 16 Jahre durch Europa: Genf, Paris,
          London, Wittenberg, Prag, Frankfurt. Überall provozierte er —
          durch seine Ideen und seine Persönlichkeit.
        </p>
        ${renderVTimeline([
          { year: '1548', title: 'Geburt in Nola (bei Neapel)', text: 'Sohn eines Soldaten; aufgewachsen am Fuß des Vesuvs' },
          { year: '1565', title: 'Eintritt in den Dominikanerorden', text: 'Studium in Neapel; Begeisterung für Kopernikus, Lukrez, hermetische Texte' },
          { year: '1576', title: 'Flucht aus dem Kloster', text: 'Anklage wegen Häresie (130 Anklagepunkte!); beginnt 16-jährige Wanderschaft' },
          { year: '1583–85', title: 'London', text: 'Unter dem Schutz der französischen Botschaft; Hauptwerke: De l\'infinito, La cena de le ceneri, De la causa' },
          { year: '1584', title: 'De l\'infinito, universo e mondi', text: 'Über das Unendliche, das Universum und die Welten — das kopernikanische Modell radikal weitergedacht' },
          { year: '1591', title: 'Rückkehr nach Italien (Venedig)', text: 'Einladung des Patriziers Mocenigo — der ihn an die Inquisition verrät' },
          { year: '1592–1600', title: '8 Jahre Inquisitionshaft in Rom', text: 'Verhöre, Folter, Aufforderung zum Widerruf — Bruno weigert sich' },
          { year: '17. Feb. 1600', title: 'Verbrennung auf dem Campo de\' Fiori', text: 'Letzte Worte (angeblich): „Vielleicht zittert ihr mehr vor dem Urteil, als ich, der es empfängt."' },
        ])}
        ${renderInfobox({
          type: '', icon: 'fas fa-fire',
          title: 'Der Märtyrer der Gedankenfreiheit',
          body: 'Bruno wurde <strong>nicht wegen des Kopernikanismus</strong> verbrannt — die Anklagepunkte betrafen seine theologischen Häresien (Leugnung der Trinität, der Transsubstantiation, der Jungfrauengeburt, der Ewigkeit der Höllenstrafen). Aber sein unendliches Universum war Teil einer Gesamtvision, die das christliche Weltbild fundamental in Frage stellte. Im 19.&nbsp;Jh. wurde Bruno zum <strong>Symbol der Wissenschaftsfreiheit</strong> — 1889 wurde sein Denkmal auf dem Campo de\' Fiori enthüllt, dem Ort seiner Verbrennung.'
        })}
      </div>
    </section>

    <section class="lz-content-section">
      <div class="lz-section-wrap">
        ${renderSubhead('Brunos Philosophie — Das unendliche Universum')}
        <h2 class="lz-h2 reveal">Kopernikus <em>radikalisiert</em></h2>
        <p class="lz-prose reveal">
          Bruno ging weit über <strong>Kopernikus</strong> hinaus: Kopernikus hatte
          die Erde aus dem Zentrum gerückt und die Sonne dorthin gestellt — aber
          sein Universum blieb <strong>endlich</strong>, begrenzt durch die
          Fixsternsphäre. Bruno zog die letzte Konsequenz: Wenn die Erde kein
          Zentrum ist, dann gibt es <strong>überhaupt kein Zentrum</strong> —
          und keine Grenze. Das Universum ist <strong>unendlich</strong>.
        </p>
        ${renderMerkboxGrid([
          { icon: 'fas fa-infinity', title: 'Unendliches Universum',
            text: 'Das Universum hat keinen Mittelpunkt, keinen Rand, keine Grenzen. Es erstreckt sich in alle Richtungen ins Unendliche. Unsere Sonne ist nur ein Stern unter unendlich vielen — jeder Stern ist eine Sonne mit eigenen Planeten. Radikale Dezentralisierung des Menschen im Kosmos.' },
          { icon: 'fas fa-globe-americas', title: 'Unendlich viele Welten',
            text: 'Es gibt nicht nur unser Sonnensystem, sondern unendlich viele Sonnensysteme mit unendlich vielen bewohnten Planeten. Die Erde ist nicht einzigartig — sie ist ein Planet unter unzähligen. Die Vorstellung einer besonderen göttlichen Aufmerksamkeit für die Erde wird absurd.' },
          { icon: 'fas fa-sun', title: 'Pantheismus / Panentheismus',
            text: 'Gott ist nicht außerhalb der Welt (transzendent), sondern IN der Welt (immanent): „Die Natur ist Gott in den Dingen" (Deus in rebus). Das Unendliche ist kein Jenseits — es ist DIESE Welt, in ihrer ganzen unerschöpflichen Fülle. Einfluss von Cusanus (complicatio/explicatio) und Plotin (Emanation).' },
          { icon: 'fas fa-atom', title: 'Monade als Minimum',
            text: 'Das Universum besteht aus unendlich vielen „Monaden" — unteilbaren Einheiten, die zugleich physisch (Atome) und metaphysisch (Seelen) sind. Jede Monade spiegelt das unendliche Ganze aus ihrer Perspektive. Ein Vorgriff auf Leibniz\' Monadologie.' },
          { icon: 'fas fa-fire-alt', title: 'Heroischer Enthusiasmus',
            text: 'In De gli eroici furori (1585) beschreibt Bruno den Philosophen als „heroischen Enthusiasten" — einen, der von der Sehnsucht nach dem Unendlichen erfasst wird und alle endlichen Bindungen hinter sich lässt. Philosophie als Leidenschaft, nicht als kühle Analyse. Vorläufer von Nietzsches „Übermensch"?' },
        ])}
        ${renderFormulaBox({
          label: 'Giordano Bruno, De l\'infinito (1584)',
          formula: '„Das Universum ist also eines, unendlich, unbewegt.<br>Eines ist die absolute Möglichkeit, eines die Wirklichkeit,<br>eines die Form oder Seele, eines die Materie oder der Körper,<br>eines das Ding, eines das Seiende, eines das Maximum und Optimum."',
          desc: 'Brunos Vision der All-Einheit: Das Universum ist in sich abgeschlossen — es gibt nichts „außerhalb". Es ist zugleich Gott und Welt, Materie und Geist, Möglichkeit und Wirklichkeit.'
        })}
        ${renderCompare({
          titleA: 'Kopernikus (1543)', titleB: 'Bruno (1584)',
          listA: ['Sonne im <strong>Zentrum</strong>', 'Universum ist <strong>endlich</strong> (Fixsternsphäre)', '<strong>Mathematisches</strong> Modell — keine Kosmologie', 'Sonne ist <strong>einzigartig</strong>', 'Kein philosophisches System', 'Vorsichtig — veröffentlicht auf dem Sterbebett'],
          listB: ['<strong>Kein Zentrum</strong> — das Universum ist überall gleich', 'Universum ist <strong>unendlich</strong> — keine Grenze', '<strong>Philosophisches</strong> System — Kosmologie + Metaphysik', 'Sterne = Sonnen mit <strong>Planeten</strong>, unendlich viele', 'Pantheismus: Gott = Natur = Unendlichkeit', 'Radikal — stirbt auf dem Scheiterhaufen'],
        })}
      </div>
    </section>

    <section class="lz-content-section">
      <div class="lz-section-wrap">
        ${renderSubhead('Testfragen — Abiturniveau')}
        ${renderAccordion([
          { title: '1. Erklären Sie Erasmus\' Konzept der Philosophia Christi und vergleichen Sie es mit der scholastischen Theologie.',
            content: '<p class="lz-prose"><strong>Philosophia Christi:</strong> Ein Christentum, das <strong>ethisches Handeln</strong> über dogmatische Spekulation stellt. Nicht die theologischen Feinheiten (Transsubstantiation, Prädestination, Engelshierarchien) sind das Wesentliche, sondern die <strong>Nachfolge Christi</strong> im Alltag: Nächstenliebe, Friedfertigkeit, Bescheidenheit, Toleranz.<br><br><strong>Vergleich mit der Scholastik:</strong> Die Scholastik (Thomas, Duns Scotus) zielte auf die <strong>rationale Durchdringung</strong> des Glaubensinhalts — Gottesbeweise, Trinitätslehre, Sakramententheologie. Erasmus kritisierte diese Methode als <strong>weltfremd</strong>: Die Scholastiker stritten über Abstraktionen, während die Christen einander bekämpften. Seine Alternative: <strong>Ad fontes!</strong> — zurück zu den Quellen (Bibel, Kirchenväter), kritisch gelesen, ethisch angewandt.<br><br><strong>Philosophische Bedeutung:</strong> Erasmus begründet damit eine <strong>Ethisierung der Religion</strong>, die über Kant (Religion innerhalb der Grenzen der bloßen Vernunft) bis zur liberalen Theologie des 19./20. Jh. nachwirkt. Religion als Moral, nicht als Metaphysik.</p>' },
          { title: '2. Inwiefern geht Giordano Bruno über Kopernikus hinaus? Was sind die philosophischen Konsequenzen?',
            content: '<p class="lz-prose"><strong>Kopernikus:</strong> Stellte die Sonne ins Zentrum, aber behielt ein <strong>endliches</strong> Universum mit einer äußeren Fixsternsphäre bei. Sein Modell war <strong>mathematisch</strong>, nicht philosophisch — er zog keine kosmologischen Konsequenzen.<br><br><strong>Brunos Radikalisierung:</strong> (1) Das Universum ist <strong>unendlich</strong> — keine Fixsternsphäre, kein Rand. (2) Es gibt <strong>kein Zentrum</strong> — weder Erde noch Sonne sind ausgezeichnet. Jeder Punkt ist „Mitte" eines unendlichen Ganzen. (3) Die Fixsterne sind <strong>Sonnen</strong> mit eigenen Planeten — unendlich viele Welten, möglicherweise bewohnt.<br><br><strong>Philosophische Konsequenzen:</strong> (1) <strong>Keine Sonderstellung des Menschen:</strong> Wenn es unendlich viele Welten gibt, ist die Erde kosmisch bedeutungslos. Die Vorstellung, Gott habe die Welt für den Menschen geschaffen, wird fragwürdig. (2) <strong>Pantheismus:</strong> Wenn das Universum unendlich ist, gibt es nichts „außerhalb" — Gott kann nicht außerhalb der Welt sein. Gott IST die unendliche Natur (Deus sive natura — ein Satz, den Spinoza übernimmt). (3) <strong>Ende der aristotelischen Physik:</strong> Die Unterscheidung zwischen „sublunarer" (irdischer, vergänglicher) und „supralunarer" (himmlischer, ewiger) Welt bricht zusammen — überall gelten dieselben Naturgesetze. (4) <strong>Erkenntnistheoretisch:</strong> Es gibt keine privilegierte Perspektive — jeder Standpunkt ist gleichwertig (Cusanus Perspektivismus radikalisiert).</p>' },
          { title: '3. Vergleichen Sie Erasmus\' und Brunos Verhältnis zur Kirche. Warum überlebte der eine und starb der andere?',
            content: '<p class="lz-prose"><strong>Erasmus:</strong> Kritisierte die Kirche <strong>von innen</strong> — als loyaler Katholik, der Reform wollte, nicht Revolution. Seine Waffen: <strong>Ironie und Gelehrsamkeit</strong>, nicht offene Konfrontation. Er vermied dogmatische Festlegungen: „In necessariis unitas, in dubiis libertas." Er lehnte Luthers Bruch mit Rom ab, obwohl er dessen Kritik teilte. Erasmus starb als angesehener Gelehrter im Bett.<br><br><strong>Bruno:</strong> Brach <strong>offen</strong> mit der Kirche — verließ den Orden, leugnete zentrale Dogmen (Trinität, Transsubstantiation, Jungfrauengeburt, Höllenstrafen), provozierte systematisch. Er hatte keine diplomatische Klugheit: Er beleidigte Gegner, brüstete sich mit seiner Überlegenheit, weigerte sich, zu widerrufen. Bruno starb auf dem Scheiterhaufen.<br><br><strong>Der Unterschied:</strong> Nicht nur Inhalt, sondern <strong>Strategie</strong>. Erasmus war ein Meister der <strong>indirekten Kritik</strong> (Ironie, Satire), Bruno ein Meister der <strong>Konfrontation</strong>. Erasmus akzeptierte die Spielregeln der Institution und arbeitete innerhalb ihrer Grenzen. Bruno verwarf die Institution selbst — und wurde von ihr vernichtet. Philosophisch gesehen: Erasmus reformierte, Bruno revolutionierte.</p>' },
          { title: '4. Erläutern Sie den Zusammenhang zwischen Brunos unendlichem Universum und seinem Pantheismus.',
            content: '<p class="lz-prose"><strong>Das Argument:</strong> (1) Gott ist unendlich (darin stimmt Bruno mit der Tradition überein). (2) Ein unendlicher Gott kann nur ein unendliches Universum hervorbringen — denn eine endliche Wirkung wäre einer unendlichen Ursache nicht angemessen. (3) Ein unendliches Universum hat keinen „Rand" — es gibt nichts außerhalb. (4) Wenn nichts außerhalb ist, kann Gott nicht außerhalb sein. Also ist Gott IN der Welt — oder besser: Gott IST die Welt in ihrer Unendlichkeit.<br><br><strong>Pantheismus vs. Panentheismus:</strong> Pantheismus: Gott = Natur (strikte Identität). Panentheismus: Gott ist IN der Natur, übersteigt sie aber auch. Bruno schwankt zwischen beiden — manche Texte klingen pantheistisch (Deus in rebus), andere panentheistisch (Gott als unendliche „Ursache" der Natur). <strong>Spinoza</strong> wird die pantheistische Konsequenz konsequent ziehen: Deus sive Natura (Gott oder die Natur — zwei Namen für dasselbe).<br><br><strong>Theologisches Problem:</strong> Wenn Gott = Natur, dann ist Gott nicht Person (denkt nicht, will nicht, liebt nicht), die Schöpfung ist keine freie Tat, und die Erlösung wird sinnlos. Deshalb war Brunos Position für die Kirche inakzeptabel — sie untergrub die gesamte christliche Heilsgeschichte.</p>' },
        ])}
      </div>
    </section>

    <section class="lz-content-section" style="padding-top:0;">
      <div class="lz-section-wrap">
        ${renderPageNav({
          prev: { label: 'Nikolaus von Kues', link: `${BASE}/themen/mittelalter/nikolaus` },
          next: { label: 'Rationalismus',     link: `${BASE}/themen/neuzeit/rationalismus` },
        }, BASE)}
      </div>
    </section>
    ${footerHTML(this.router)}
    `;
  }
  init() { i18n.init(); initScrollReveal(); refreshScrollReveal(); initInteractive(document); initWimTabs(document); }
  cleanup() {}
}