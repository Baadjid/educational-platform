// pages/projekte/lernzettel/faecher/ethik/themen/ionische-naturphilosophen.js
// ══════════════════════════════════════════════════════════════════
// Kapitel 1.2 — Die Ionischen Naturphilosophen
// Thales, Anaximander, Anaximenes von Milet
// ══════════════════════════════════════════════════════════════════

import { initScrollReveal, refreshScrollReveal } from '../../../../../../../shared/js/scroll.js';
import { footerHTML }          from '../../../../../../../components/Footer.js';
import { i18n }                from '../../../../../../../shared/js/i18n.js';
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

const KAP_COLOR     = '#7a9e7e';
const KAP_COLOR_RGB = '122, 158, 126';

export default class IonischeNaturphilosophenPage {
  constructor(router) { this.router = router; }

  render() {
    ensureComponentsCSS();
    loadComponentCSS('pages/projekte/lernzettel/styles/sub.css');

    const el = document.createElement('div');
    el.className = 'page page-ionische-naturphilosophen';
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
          <span>Ionische Naturphilosophen</span>
        </nav>

        <h1 class="lz-sub-title">
          Die <em>Milesische Schule</em>
        </h1>

        <p class="lz-sub-desc">
          Drei Denker aus einer einzigen Stadt — Milet — stellten die Frage,
          die alles veränderte: <strong>Woraus besteht die Welt?</strong>
          Ihre Antworten begründeten die Naturphilosophie und damit
          die abendländische Wissenschaftstradition.
        </p>

        ${renderTags([
          'Kapitel 1.2', 'ca. 625–525 v. Chr.', 'Milet (Ionien)',
          'Arché-Frage', 'Naturphilosophie', 'Abitur 2026'
        ])}

      </div>
    </section>


    <!-- ═══════════════════════════════════════════════════════════
         THALES VON MILET
         ═══════════════════════════════════════════════════════════ -->
    <section class="lz-content-section">
      <div class="lz-section-wrap">

        ${renderSubhead('Thales von Milet (ca. 625–545 v. Chr.)')}

        <h2 class="lz-h2 reveal">Der <em>erste Philosoph</em> des Abendlandes</h2>

        <p class="lz-prose reveal">
          Thales gilt traditionell als der <strong>Begründer der abendländischen
          Philosophie</strong>. Aristoteles nennt ihn in der <em>Metaphysik</em>
          den „Anführer" (archēgós) der Naturphilosophie. Thales war kein
          weltfremder Grübler, sondern ein vielseitig begabter Praktiker:
          Kaufmann, Ingenieur, Mathematiker, Astronom und politischer Berater.
        </p>

        <!-- Biografie -->
        <h3 class="lz-h3 reveal">Biographisches</h3>

        <p class="lz-prose reveal">
          Thales stammte aus Milet, der wohlhabendsten griechischen Handelsstadt
          an der Westküste Kleinasiens. Er wurde in die Liste der
          <strong>Sieben Weisen Griechenlands</strong> aufgenommen — eine
          Ehre, die seine Zeitgenossen seiner Vielseitigkeit zuerkannten.
          Überliefert sind zahlreiche Anekdoten, die sein Bild als
          universeller Denker formen:
        </p>

        ${renderMerkboxGrid([
          { icon: 'fas fa-sun', title: 'Sonnenfinsternis 585 v. Chr.',
            text: 'Thales soll die Sonnenfinsternis vom 28. Mai 585 v. Chr. vorhergesagt haben — vermutlich mit Hilfe babylonischer astronomischer Zyklen (Saros-Zyklus von 18 Jahren). Falls zutreffend, wäre dies die erste dokumentierte wissenschaftliche Vorhersage der Geschichte.' },
          { icon: 'fas fa-mountain', title: 'Pyramiden-Messung',
            text: 'In Ägypten bestimmte Thales angeblich die Höhe der Pyramiden durch Schattenmessung: Er wartete, bis sein eigener Schatten gleich seiner Körperhöhe war, und maß dann den Schatten der Pyramide. Angewandte Geometrie als Denkform.' },
          { icon: 'fas fa-coins', title: 'Der Geschäftsmann',
            text: 'Als man ihm vorwarf, Philosophie mache arm, pachtete er alle Olivenpressen Milets, als er eine gute Ernte voraussah, und wurde reich. „So etwas könnten Philosophen leicht, wenn sie wollten — aber darum geht es ihnen nicht" (Aristoteles, Politik I, 11).' },
          { icon: 'fas fa-compass', title: 'Geometrische Sätze',
            text: 'Thales wird die Entdeckung mehrerer geometrischer Sätze zugeschrieben: Der Basiswinkel im gleichschenkligen Dreieck, der Thales-Kreis (Winkel im Halbkreis = 90°), die Kongruenz von Scheitelwinkeln. Er brachte ägyptisches Wissen nach Griechenland und systematisierte es.' },
        ])}

        <!-- Philosophie -->
        <h3 class="lz-h3 reveal">Philosophische Lehre</h3>

        <h4 class="lz-h4 reveal">Das Wasser als Arché</h4>

        <p class="lz-prose reveal">
          Thales' Kernthese lautet: <strong>Das Wasser (hýdōr) ist der Urgrund
          aller Dinge.</strong> Alles entsteht aus Wasser, besteht letztlich aus
          Wasser und kehrt zum Wasser zurück. Die Erde selbst schwimmt auf dem Wasser
          „wie ein Stück Holz" (Aristoteles, <em>De caelo</em> II, 13).
        </p>

        <p class="lz-prose reveal">
          Aristoteles vermutet, Thales habe diese These aus <strong>Beobachtungen</strong>
          abgeleitet: Die Nahrung aller Lebewesen ist feucht; Samen sind feucht; Wärme
          entsteht aus Feuchtigkeit; die Erde ist von Wasser umgeben. Möglicherweise
          kannte Thales auch ägyptische Vorstellungen vom Urwasser Nun, aus dem die Welt
          nach ägyptischem Mythos entstand — er hätte dann einen mythischen Gedanken
          in rationale Sprache übersetzt.
        </p>

        ${renderInfobox({
          type: '', icon: 'fas fa-star',
          title: 'Die eigentliche Revolution',
          body: 'Die philosophische Leistung des Thales liegt <strong>nicht in der Antwort</strong> (Wasser als Urstoff — das kennt auch der ägyptische Mythos), sondern in der <strong>Fragestellung</strong>: Erstmals wird ein <strong>einheitliches, natürliches Prinzip</strong> gesucht, das die <strong>gesamte Vielfalt</strong> der Welt erklären soll. Nicht viele Götter mit vielen Geschichten, sondern <strong>ein Stoff mit einem Mechanismus</strong>. Das ist der Kern des wissenschaftlichen Denkens.'
        })}

        <h4 class="lz-h4 reveal">Hylozoismus — die beseelte Materie</h4>

        <p class="lz-prose reveal">
          Thales vertrat offenbar einen <strong>Hylozoismus</strong> (von hýlē = Stoff
          + zōḗ = Leben): Die Materie ist <strong>lebendig und beseelt</strong>.
          Sein berühmtes Diktum „Alles ist voll von Göttern" (pánta plḗrē theôn)
          bedeutet nicht, dass überall anthropomorphe Gottheiten sitzen, sondern dass
          die Natur von einer <strong>inneren Lebenskraft</strong> durchdrungen ist.
        </p>

        <p class="lz-prose reveal">
          Als Beleg führte Thales den <strong>Magnetstein</strong> an: Er bewegt Eisen,
          also muss er eine <strong>Seele</strong> (psychḗ) haben, denn nur Beseeltes
          kann von sich aus etwas bewegen. Diese Argumentation ist bemerkenswert, weil
          sie zeigt: Thales sucht nach einer <strong>natürlichen Erklärung</strong>
          für Bewegung — aber er findet sie noch innerhalb eines beseelten
          Naturverständnisses.
        </p>

        ${renderFormulaBox({
          label: 'Thales (DK 11 A 22)',
          formula: '„Alles ist voll von Göttern."<br>(pánta plḗrē theôn)',
          desc: 'Hylozoismus: Die gesamte Natur ist lebendig und beseelt. Keine Trennung von Geist und Materie, keine tote Materie, die nur von außen bewegt wird.'
        })}


      </div>
    </section>


    <!-- ═══════════════════════════════════════════════════════════
         ANAXIMANDER
         ═══════════════════════════════════════════════════════════ -->
    <section class="lz-content-section">
      <div class="lz-section-wrap">

        ${renderSubhead('Anaximander von Milet (ca. 610–545 v. Chr.)')}

        <h2 class="lz-h2 reveal">Das <em>Ápeiron</em> — Sprung in die Abstraktion</h2>

        <p class="lz-prose reveal">
          Anaximander, Schüler und Nachfolger des Thales, vollzog einen epochalen
          Schritt: Er bestimmte als Arché keinen konkreten Naturstoff, sondern das
          <strong>Ápeiron</strong> (τὸ ἄπειρον) — das Unbegrenzte, Unbestimmte,
          Unendliche. Seine Schrift <em>Über die Natur</em> (Perì phýseōs) ist
          die erste bekannte philosophische Prosaschrift der Geschichte.
        </p>

        <h3 class="lz-h3 reveal">Was ist das Ápeiron?</h3>

        <p class="lz-prose reveal">
          Das Ápeiron lässt sich durch mehrere Bestimmungen charakterisieren, die
          zusammengenommen ein bemerkenswertes philosophisches Konzept ergeben:
        </p>

        ${renderMerkboxGrid([
          { icon: 'fas fa-infinity', title: 'Qualitativ unbestimmt',
            text: 'Das Ápeiron ist weder warm noch kalt, weder nass noch trocken, weder Wasser noch Feuer noch Luft. Es ist kein bestimmter Stoff, sondern die undifferenzierte Einheit, aus der alle Bestimmungen erst hervorgehen. Es ist „jenseits" aller Gegensätze.' },
          { icon: 'fas fa-expand-arrows-alt', title: 'Quantitativ unbegrenzt',
            text: 'Das Ápeiron ist unerschöpflich — ein unendliches Reservoir, das nie aufgebraucht werden kann. Es liefert endlos Stoff für die Entstehung und das Vergehen der Dinge. Deshalb kann es ewige Weltprozesse antreiben.' },
          { icon: 'fas fa-hourglass', title: 'Zeitlich ewig',
            text: '„Unsterblich und unvergänglich" nennt Aristoteles das Ápeiron. Es hat keinen Anfang und kein Ende. Es ist nicht selbst entstanden (denn woraus hätte es entstehen sollen?). Es umfasst und lenkt alles (periéchein kai kybernân).' },
          { icon: 'fas fa-egg', title: 'Genet. Prinzip',
            text: 'Aus dem Ápeiron sondern sich durch eine Art Wirbelbewegung die Gegensatzpaare (warm/kalt, trocken/feucht) aus. Diese bilden dann die konkreten Stoffe: Feuer, Luft, Wasser, Erde. Die Weltbildung ist also ein Prozess der fortschreitenden Differenzierung.' },
        ])}

        <h3 class="lz-h3 reveal">Das Argument gegen Thales</h3>

        <p class="lz-prose reveal">
          Anaximanders Begründung gegen einen konkreten Urstoff ist bemerkenswert
          stringent: <strong>Wenn Wasser der Urgrund wäre, dann könnte daraus niemals
          Feuer entstehen</strong> — denn Wasser und Feuer sind Gegensätze, die einander
          aufheben. Nur etwas <strong>Unbestimmtes</strong>, das selbst keiner der
          Gegensätze ist, kann Quelle <strong>aller</strong> Gegensätze sein. Erst
          Anaximander denkt die Arché als etwas, das sich nicht mehr sinnlich erfahren
          lässt — ein reines <strong>Gedankending</strong>.
        </p>

        ${renderInfobox({
          type: 'blue', icon: 'fas fa-graduation-cap',
          title: 'Abitur-Hinweis: Anaximanders Abstraktionsleistung',
          body: 'Anaximanders Schritt vom konkreten Stoff zum abstrakten Prinzip ist ein <strong>Meilenstein der Denkgeschichte</strong>. Zum ersten Mal wird etwas postuliert, das <strong>grundsätzlich nicht wahrnehmbar</strong> ist — nur denkbar. Das trennt Philosophie von Alltagsbeobachtung und weist voraus auf Platons Ideen, Kants Ding an sich und die mathematischen Grundstrukturen der modernen Physik.'
        })}

        <h3 class="lz-h3 reveal">Kosmische Gerechtigkeit</h3>

        ${renderFormulaBox({
          label: 'Das einzige erhaltene Fragment (DK 12 B 1)',
          formula: '„Woraus die Dinge ihre Entstehung haben,<br>darein müssen sie auch zugrunde gehen nach der Notwendigkeit;<br>denn sie zahlen einander Strafe und Buße<br>für ihre Ungerechtigkeit nach der Ordnung der Zeit."',
          desc: 'Das älteste überlieferte Philosophie-Zitat des Abendlandes. Kosmologie und Ethik sind hier noch ungetrennt: Die Natur hat eine moralische Ordnung.'
        })}

        <p class="lz-prose reveal">
          Dieses Fragment — das <strong>älteste wörtliche Philosophie-Zitat der
          abendländischen Geschichte</strong> — beschreibt einen kosmischen Kreislauf:
          Die bestimmten Dinge (warm, kalt, trocken, feucht) „sondern sich aus" dem
          Ápeiron und treten dadurch in eine Welt der Gegensätze. Sie „verüben
          Ungerechtigkeit" aneinander: Der Sommer verdrängt den Winter, das Trockene
          verdrängt das Feuchte. Aber jeder Übergriff wird bestraft — die Natur stellt
          das Gleichgewicht wieder her, „nach der Ordnung der Zeit". Am Ende kehren
          alle Dinge ins Ápeiron zurück.
        </p>

        <h3 class="lz-h3 reveal">Kosmologie und weitere Leistungen</h3>

        ${renderMerkboxGrid([
          { icon: 'fas fa-globe', title: 'Die Erde im freien Raum',
            text: 'Anaximander dachte die Erde als zylinderförmige Säulentrommel, die frei im Raum schwebt — gehalten von nichts, weil sie von allen Seiten gleich weit von allem entfernt ist (Symmetrieargument!). Ein revolutionärer Gedanke: Kein Atlas, kein Schildkrötenturm.' },
          { icon: 'fas fa-map', title: 'Erste Weltkarte',
            text: 'Anaximander zeichnete die erste bekannte Landkarte der bewohnten Welt (oikuménē) — die Erde umgeben von einem Ozean, mit drei Kontinenten: Europa, Asien, Libyen (Afrika).' },
          { icon: 'fas fa-dna', title: 'Evolutionsgedanke',
            text: 'Anaximander vermutete, dass die ersten Lebewesen im feuchten Schlamm entstanden und dass der Mensch sich aus fischähnlichen Wesen entwickelt habe — er konnte nämlich als Säugling nicht allein überleben (ein erstaunlich moderner Gedanke, 2400 Jahre vor Darwin).' },
          { icon: 'fas fa-ruler-combined', title: 'Gnomon (Sonnenuhr)',
            text: 'Anaximander führte den Gnomon (Schattenstab zur Zeitmessung) in Griechenland ein und bestimmte damit Sonnenwenden und Tagundnachtgleichen — astronomisches Wissen für die Seefahrt und Landwirtschaft.' },
        ])}

      </div>
    </section>


    <!-- ═══════════════════════════════════════════════════════════
         ANAXIMENES
         ═══════════════════════════════════════════════════════════ -->
    <section class="lz-content-section">
      <div class="lz-section-wrap">

        ${renderSubhead('Anaximenes von Milet (ca. 585–525 v. Chr.)')}

        <h2 class="lz-h2 reveal">Luft und der erste <em>Transformationsmechanismus</em></h2>

        <p class="lz-prose reveal">
          Anaximenes, der dritte und letzte der Milesier, kehrte scheinbar zu einem
          konkreten Urstoff zurück: der <strong>Luft</strong> (aḗr). Auf den ersten
          Blick wirkt das wie ein Rückschritt hinter Anaximanders Abstraktion. Doch
          Anaximenes' eigentlicher Beitrag ist ein anderer: Er lieferte den
          <strong>ersten quantitativen Transformationsmechanismus</strong> der
          Philosophiegeschichte.
        </p>

        <h3 class="lz-h3 reveal">Luft als Arché — warum?</h3>

        <p class="lz-prose reveal">
          Anaximenes wählte die Luft aus einem tiefsinnigen Grund: Sie ist
          <strong>lebensspendend</strong> und <strong>allgegenwärtig</strong> zugleich.
          So wie die Seele (psychḗ) — wörtlich: „Hauch", „Atem" — den einzelnen
          Körper zusammenhält und belebt, so umfasst und durchdringt die kosmische
          Luft das Weltganze:
        </p>

        ${renderFormulaBox({
          label: 'Anaximenes (DK 13 B 2)',
          formula: '„Wie unsere Seele, die Luft ist, uns zusammenhält und beherrscht,<br>so umfasst Atem und Luft den ganzen Kosmos."',
          desc: 'Mikrokosmos-Makrokosmos-Analogie: Der Mensch im Kleinen spiegelt den Kosmos im Großen. Luft = Seele = Lebensprinzip.'
        })}

        <h3 class="lz-h3 reveal">Verdichtung und Verdünnung (Pýknōsis / Mánōsis)</h3>

        <p class="lz-prose reveal">
          Anaximenes' entscheidende Innovation ist der <strong>Mechanismus</strong>,
          durch den ein einziger Stoff alle Vielfalt der Welt hervorbringt:
          <strong>Verdichtung</strong> (pýknōsis) und <strong>Verdünnung</strong>
          (mánōsis). Diese beiden quantitativen Prozesse erklären alle
          qualitativen Unterschiede:
        </p>

        ${renderTable({
          headers: ['Prozess', 'Richtung', 'Ergebnis', 'Qualität'],
          rows: [
            ['Stärkste Verdünnung', '← dünn', '<strong>Feuer</strong>',     'heiß, leuchtend, leicht'],
            ['Verdünnung',          '← dünn', '<strong>Luft</strong> (Normalzustand)', 'unsichtbar, leicht'],
            ['Leichte Verdichtung', 'dick →',  '<strong>Wind</strong>',     'spürbar, bewegt'],
            ['Verdichtung',         'dick →',  '<strong>Wolken</strong>',   'sichtbar, feucht'],
            ['Stärkere Verdichtung','dick →',  '<strong>Wasser</strong>',   'flüssig, kalt'],
            ['Starke Verdichtung',  'dick →',  '<strong>Erde</strong>',     'fest, schwer'],
            ['Stärkste Verdichtung','dick →',  '<strong>Stein</strong>',    'fest, hart, kalt'],
          ],
          highlight: [1],
        })}

        ${renderInfobox({
          type: 'success', icon: 'fas fa-lightbulb',
          title: 'Warum ist das revolutionär?',
          body: 'Anaximenes formuliert zum ersten Mal das Prinzip, dass <strong>qualitative Unterschiede auf quantitative Veränderungen zurückgeführt</strong> werden können. Wasser und Stein sind nicht wesenhaft verschieden — sie sind derselbe Stoff (Luft) in unterschiedlichen Dichtegraden. Das ist strukturell identisch mit der modernen Erklärung der <strong>Aggregatzustände</strong>: Eis, Wasser und Dampf sind ein Stoff (H₂O) bei verschiedenen Energieniveaus.'
        })}

        <h3 class="lz-h3 reveal">Alltäglicher Erfahrungsbeweis</h3>

        <p class="lz-prose reveal">
          Anaximenes lieferte sogar einen <strong>experimentellen Beleg</strong> für
          seine These: Wenn man mit weit geöffnetem Mund auf die Hand haucht, fühlt
          sich die Luft <strong>warm</strong> an (verdünnte Luft = warm). Presst man
          die Lippen zusammen und bläst, fühlt sich der Luftstrom <strong>kalt</strong>
          an (verdichtete Luft = kalt). Verdichtung erzeugt Kälte,
          Verdünnung erzeugt Wärme — ein bewundernswerter Versuch empirischer
          Beweisführung im 6.&nbsp;Jahrhundert v.&nbsp;Chr.
        </p>

      </div>
    </section>


    <!-- ═══════════════════════════════════════════════════════════
         VERGLEICH & SYNTHESE
         ═══════════════════════════════════════════════════════════ -->
    <section class="lz-content-section">
      <div class="lz-section-wrap">

        ${renderSubhead('Vergleich: Die drei Milesier')}

        ${renderTable({
          headers: ['', 'Thales', 'Anaximander', 'Anaximenes'],
          rows: [
            ['<strong>Arché</strong>',    'Wasser (hýdōr)',              'Ápeiron (das Unbegrenzte)',      'Luft (aḗr)'],
            ['<strong>Typ</strong>',      'Konkreter Stoff',             'Abstraktes Prinzip',             'Konkreter Stoff + Mechanismus'],
            ['<strong>Mechanismus</strong>', 'Nicht klar bestimmt',      'Aussonderung der Gegensätze',    'Verdichtung / Verdünnung'],
            ['<strong>Erde</strong>',      'Schwimmt auf Wasser',        'Schwebt frei im Raum (Symmetrie)','Flach, von Luft getragen'],
            ['<strong>Seele</strong>',     'Alles ist beseelt',          'Nicht überliefert',              'Seele = Luft-Atem'],
            ['<strong>Innovation</strong>','Erste Arché-Frage',          'Abstraktion, Evolution',         'Quantitativer Mechanismus'],
          ],
          highlight: [0],
        })}

        <h3 class="lz-h3 reveal">Die Entwicklungslinie</h3>

        <p class="lz-prose reveal">
          Die drei Milesier bilden eine klare <strong>Entwicklungslinie</strong>:
          Thales stellt die Frage und gibt eine intuitive Antwort. Anaximander
          kritisiert die Antwort und erreicht die Ebene der Abstraktion. Anaximenes
          synthetisiert: Er kehrt zum konkreten Stoff zurück, ergänzt ihn aber um
          einen quantitativen Mechanismus. Diese Dreischritt-Struktur —
          <strong>These → Kritik → Synthese</strong> — wird Hegel 2300 Jahre
          später zum Grundmuster seiner Dialektik erheben.
        </p>

        ${renderVTimeline([
          { year: 'ca. 625 v. Chr.', title: 'Thales — Wasser',
            text: 'Erste Arché-Frage: Ein natürlicher Stoff als Welterklärung. Hylozoismus: Alles ist beseelt.' },
          { year: 'ca. 610 v. Chr.', title: 'Anaximander — Ápeiron',
            text: 'Kritik an Thales: Kein konkreter Stoff kann sein Gegenteil erzeugen. Sprung in die Abstraktion.' },
          { year: 'ca. 585 v. Chr.', title: 'Anaximenes — Luft',
            text: 'Synthese: Konkreter Stoff (Luft) + quantitativer Mechanismus (Verdichtung/Verdünnung).' },
          { year: '494 v. Chr.', title: 'Zerstörung Milets',
            text: 'Die Perser zerstören Milet. Ende der milesischen Schule. Das philosophische Zentrum verlagert sich nach Unteritalien und Athen.' },
        ])}

        ${renderInfobox({
          type: '', icon: 'fas fa-info-circle',
          title: 'Lehrer-Schüler-Verhältnisse',
          body: 'Die antike Überlieferung sieht eine direkte Linie: Thales → Anaximander → Anaximenes. Ob tatsächlich formale Lehrer-Schüler-Verhältnisse bestanden, ist unsicher. Sicher ist, dass alle drei in Milet wirkten und aufeinander reagierten — sie bilden eine <strong>intellektuelle Gemeinschaft</strong>, in der Ideen weiterentwickelt und kritisiert wurden.'
        })}

      </div>
    </section>


    <!-- ═══════════════════════════════════════════════════════════
         TESTFRAGEN
         ═══════════════════════════════════════════════════════════ -->
    <section class="lz-content-section">
      <div class="lz-section-wrap">

        ${renderSubhead('Testfragen — Abiturniveau')}

        ${renderAccordion([
          { title: '1. Warum wählt Thales das Wasser als Urstoff? Nennen und erläutern Sie drei mögliche Gründe.',
            content: '<p class="lz-prose"><strong>(a) Empirische Beobachtung:</strong> Thales beobachtete, dass die Nahrung aller Lebewesen feucht ist, dass Samen und Keime Feuchtigkeit enthalten und dass Wärme aus Feuchtigkeit entsteht. Wasser erschien ihm als die universale Bedingung des Lebens.<br><br><strong>(b) Kosmologische Überlegung:</strong> Die Erde ist von Wasser umgeben (Ozeane), und Thales stellte sich die Erde als auf Wasser schwimmend vor. Wasser bildet gleichsam das „Fundament" der Welt.<br><br><strong>(c) Kultureller Transfer:</strong> Thales kannte vermutlich ägyptische Vorstellungen vom Urwasser Nun (dem Ozean, aus dem die Welt entstand). Seine Innovation bestand darin, diese mythische Idee in eine rationale Sprache zu übersetzen: Nicht ein göttliches Urwasser, sondern der natürliche Stoff Wasser ist das Erklärungsprinzip.<br><br><strong>Wichtig:</strong> Die eigentliche Leistung liegt nicht in der konkreten Antwort, sondern in der <strong>Fragestellung</strong>: Ein einheitliches Naturprinzip für die gesamte Vielfalt der Welt zu suchen.</p>' },

          { title: '2. Erklären Sie Anaximanders Argument gegen einen konkreten Urstoff. Warum ist das Ápeiron philosophisch tiefgründiger als Thales\' Wasser?',
            content: '<p class="lz-prose">Anaximanders Argument lautet: <strong>Ein konkreter Stoff kann nicht die Arché aller Dinge sein, weil er sein Gegenteil nicht aus sich hervorbringen kann.</strong> Wasser löscht Feuer — wie soll es Feuer erzeugen? Feuer trocknet Wasser — wie soll Wasser den Ursprung des Trockenen bilden? Jeder bestimmte Stoff steht in einem Gegensatzverhältnis zu anderen Stoffen und kann daher nicht <strong>Quelle aller</strong> Stoffe sein.<br><br>Nur etwas <strong>qualitativ Unbestimmtes</strong> (ápeiron) kann alle Bestimmungen aus sich hervorbringen, ohne selbst einen Gegensatz zu haben. Das Ápeiron ist „jenseits" der Gegensätze — es ist weder warm noch kalt, weder nass noch trocken.<br><br><strong>Philosophische Tiefe:</strong> Anaximander vollzieht damit einen Schritt von der sinnlichen Erfahrung zum <strong>reinen Denken</strong>. Das Ápeiron kann man nicht sehen, fühlen oder messen — man kann es nur <strong>denken</strong>. Es ist das erste rein gedankliche Konstrukt der Philosophiegeschichte und weist voraus auf Platons unsichtbare Ideen und Kants Ding an sich.</p>' },

          { title: '3. Warum ist Anaximenes\' Verdichtungs-/Verdünnungstheorie trotz des „Rückschritts" zum konkreten Stoff ein philosophischer Fortschritt?',
            content: '<p class="lz-prose">Anaximenes kehrt zwar zu einem konkreten Urstoff (Luft) zurück, aber er liefert etwas, das weder Thales noch Anaximander hatten: einen <strong>Transformationsmechanismus</strong>.<br><br>Bei Thales bleibt unklar, <strong>wie</strong> sich Wasser in andere Stoffe verwandelt. Bei Anaximander erklärt die „Aussonderung der Gegensätze" zwar das <strong>Was</strong>, aber nicht das <strong>Wie</strong> im Detail. Anaximenes hingegen bietet ein <strong>quantitatives Prinzip</strong>: Alle qualitativen Unterschiede (heiß/kalt, fest/flüssig) ergeben sich aus einem einzigen quantitativen Parameter — dem <strong>Verdichtungsgrad</strong>.<br><br>Das ist strukturell identisch mit dem modernen Konzept der <strong>Aggregatzustände</strong>: H₂O kann fest (Eis), flüssig (Wasser) oder gasförmig (Dampf) sein — die qualitative Verschiedenheit (hart/flüssig/unsichtbar) beruht auf quantitativen Veränderungen (Energieniveau/Temperatur).<br><br><strong>Der Fortschritt</strong> besteht also darin, dass Anaximenes nicht nur sagt, <strong>woraus</strong> die Welt besteht, sondern auch erklärt, <strong>wie</strong> die Vielfalt aus der Einheit entsteht — und das mit einem nachvollziehbaren, sogar empirisch prüfbaren Mechanismus (Hauch-Experiment).</p>' },

          { title: '4. Erläutern Sie Anaximanders Fragment über „Strafe und Buße". Was bedeutet es für das Verhältnis von Natur und Ethik?',
            content: '<p class="lz-prose">Das Fragment lautet: „Woraus die Dinge entstehen, darein müssen sie auch zugrunde gehen nach der Notwendigkeit; denn sie zahlen einander Strafe und Buße für ihre Ungerechtigkeit nach der Ordnung der Zeit."<br><br><strong>Interpretation:</strong> Die bestimmten Dinge — etwa die Jahreszeiten oder die Elemente — treten aus dem Ápeiron hervor und drängen einander zurück: Der Sommer „verdrängt" den Winter, das Warme „übergreift" auf das Kalte. Jeder solche Übergriff ist eine „Ungerechtigkeit" (adikía), die zeitlich begrenzt ist: Der Winter kehrt zurück, das Kalte gewinnt wieder die Oberhand. Am Ende lösen sich alle bestimmten Dinge wieder im Ápeiron auf.<br><br><strong>Natur und Ethik:</strong> Bemerkenswert ist, dass Anaximander die kosmische Ordnung in <strong>ethischer Sprache</strong> beschreibt: Gerechtigkeit (díkē), Ungerechtigkeit (adikía), Strafe (tísis). Natur und Moral sind hier noch <strong>nicht getrennt</strong> — die kosmische Ordnung ist zugleich eine moralische Ordnung. Die Trennung von Naturgesetz und Sittengesetz vollzieht erst die Sophistik des 5. Jahrhunderts. <br><br>Diese Einheit von Kosmologie und Ethik kehrt in der Stoa wieder (das Naturgesetz als Grundlage der Moral) und wirkt bis in die Diskussion um „Naturrecht" vs. „positives Recht".</p>' },

          { title: '5. Vergleichen Sie die Mikrokosmos-Makrokosmos-Analogie des Anaximenes mit modernen Konzepten.',
            content: '<p class="lz-prose">Anaximenes\' Analogie lautet: „Wie unsere Seele, die Luft ist, uns zusammenhält, so umfasst Atem und Luft den ganzen Kosmos." Der <strong>Mensch im Kleinen</strong> (Mikrokosmos) spiegelt das <strong>Weltganze im Großen</strong> (Makrokosmos). Dasselbe Prinzip — Luft/Atem — regiert beide Ebenen.<br><br><strong>Moderne Parallelen:</strong><br>(1) <strong>Fraktale Geometrie:</strong> Benoit Mandelbrot zeigte, dass dieselben mathematischen Strukturen auf allen Größenskalen wiederkehren — von der Verästlung der Bronchien bis zur Küstenlinie Norwegens. Selbstähnlichkeit über Skalen hinweg.<br>(2) <strong>Holographisches Prinzip:</strong> In der theoretischen Physik die Idee, dass die Information eines Volumens auf seiner Oberfläche codiert sein könnte — das Ganze im Teil.<br>(3) <strong>Ökosystem-Denken:</strong> Die moderne Ökologie versteht den einzelnen Organismus und sein Ökosystem als wechselseitig abhängig — der Teil spiegelt das Ganze, das Ganze ist in jedem Teil präsent.<br><br>Anaximenes\' Analogie ist also keine naive Spekulation, sondern ein <strong>Denkmuster</strong>, das in der Wissenschaft bis heute produktiv ist: die Suche nach <strong>einheitlichen Prinzipien</strong>, die auf verschiedenen Ebenen der Wirklichkeit wirksam sind.</p>' },
        ])}

      </div>
    </section>


    <!-- ═══════════════════════════════════════════════════════════
         NAVIGATION
         ═══════════════════════════════════════════════════════════ -->
    <section class="lz-content-section" style="padding-top:0;">
      <div class="lz-section-wrap">
        ${renderPageNav({
          prev: { label: 'Kulturhist. Hintergrund', link: `${BASE}/themen/vorsokratik/hintergrund` },
          next: { label: 'Pythagoras bis Demokrit',  link: `${BASE}/themen/vorsokratik/pythagoras-demokrit` },
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
  }

  cleanup() {}
}