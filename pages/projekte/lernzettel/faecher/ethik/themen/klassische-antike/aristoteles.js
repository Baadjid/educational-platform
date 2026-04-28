// pages/projekte/lernzettel/faecher/ethik/themen/klassische-antike/aristoteles.js
// ══════════════════════════════════════════════════════════════════
// Kapitel 2.3 — Aristoteles (384–322 v. Chr.)
// Biographie, Logik & Metaphysik, Ethik, Ästhetik
// ══════════════════════════════════════════════════════════════════

import { initScrollReveal, refreshScrollReveal } from '../../../../../../../shared/js/scroll.js';
import { footerHTML }          from '../../../../../../../components/Footer.js';
import { i18n }                from '../../../../../../../shared/js/i18n.js';
import {
  ensureComponentsCSS, renderSubhead, renderTags, renderInfobox,
  renderTable, renderAccordion, renderMerkboxGrid, renderVTimeline,
  renderCompare, renderFormulaBox, renderTabs, initInteractive, loadComponentCSS,
} from '../../../../js/components/components.js';
import { renderPageNav } from '../../../../js/components/subnav.js';
import { COLOR, COLOR_RGB, BASE } from '../../philosophie.js';

const KAP_COLOR = '#c9a87c';
const KAP_COLOR_RGB = '201, 168, 124';

export default class AristotelesPage {
  constructor(router) { this.router = router; }
  render() {
    ensureComponentsCSS();
    loadComponentCSS('pages/projekte/lernzettel/styles/sub.css');
    const el = document.createElement('div');
    el.className = 'page page-aristoteles';
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
          <span>Aristoteles</span>
        </nav>
        <h1 class="lz-sub-title"><em>Aristoteles</em> — Logik, Ethik &amp; Metaphysik</h1>
        <p class="lz-sub-desc">
          „Der Philosoph" schlechthin — Universalgelehrter, Begründer der formalen Logik,
          Systematiker aller Wissenschaften. Aristoteles übte auf die Philosophie des
          Mittelalters, der Renaissance und der Moderne einen Einfluss aus,
          der kaum zu überschätzen ist.
        </p>
        ${renderTags(['Kapitel 2.3', '384–322 v. Chr.', 'Stageira · Athen · Makedonien', 'Logik · Metaphysik · Nikomachische Ethik', 'Abitur 2026'])}
      </div>
    </section>


    <!-- ═══════════════════ BIOGRAPHIE ═══════════════════ -->
    <section class="lz-content-section">
      <div class="lz-section-wrap">
        ${renderSubhead('Biographisches')}
        <h2 class="lz-h2 reveal">Vom Schüler Platons zum <em>Lehrer Alexanders</em></h2>

        <p class="lz-prose reveal">
          Aristoteles wurde 384 v.&nbsp;Chr. in <strong>Stageira</strong> (Nordgriechenland) geboren.
          Sein Vater Nikomachos war Leibarzt des makedonischen Königs Amyntas III. — ein Umstand,
          der Aristoteles' lebenslange Neigung zur empirischen Beobachtung erklären mag.
          Mit 17 Jahren trat er in Platons <strong>Akademie</strong> ein, wo er 20 Jahre blieb —
          erst als Schüler, dann als Lehrer.
        </p>

        ${renderVTimeline([
          { year: '384 v. Chr.', title: 'Geburt in Stageira', text: 'Sohn des Leibarztes Nikomachos; frühe Prägung durch Naturbeobachtung' },
          { year: '367', title: 'Eintritt in Platons Akademie', text: '20 Jahre als Schüler und Kollege Platons. Platon nannte ihn „den Verstand der Schule" (noûs tēs diatribēs)' },
          { year: '347', title: 'Tod Platons — Verlassen der Akademie', text: 'Aristoteles wird nicht Nachfolger; reist nach Assos und Lesbos (Naturforschung)' },
          { year: '343–340', title: 'Erzieher Alexanders des Großen', text: 'König Philipp II. beruft ihn als Lehrer seines Sohnes — Geschichte trifft auf Philosophie' },
          { year: '335', title: 'Gründung des Lykeion in Athen', text: 'Eigene Schule mit Wandelhallen (Peripatos → „Peripatetiker"); Bibliothek, Naturforschung' },
          { year: '323', title: 'Tod Alexanders — Flucht aus Athen', text: 'Anti-makedonische Stimmung. Aristoteles flieht: „Ich will den Athenern nicht Gelegenheit geben, sich ein zweites Mal an der Philosophie zu versündigen" (Anspielung auf Sokrates)' },
          { year: '322', title: 'Tod in Chalkis (Euböa)', text: 'Stirbt 62-jährig im Exil an einem Magenleiden' },
        ])}
      </div>
    </section>


    <!-- ═══════════════════ LOGIK & METAPHYSIK ═══════════════════ -->
    <section class="lz-content-section">
      <div class="lz-section-wrap">
        ${renderSubhead('Logik und Metaphysik')}
        <h2 class="lz-h2 reveal">Werkzeug des Denkens — Wissenschaft vom <em>Seienden als Seiendem</em></h2>

        <h3 class="lz-h3 reveal">Logik — das Organon</h3>
        <p class="lz-prose reveal">
          Aristoteles erfand die <strong>formale Logik</strong> — das „Werkzeug" (órganon) des
          richtigen Denkens. Seine Syllogistik blieb bis ins 19.&nbsp;Jahrhundert (Frege) die
          einzige systematische Logik des Abendlandes. Ein Syllogismus besteht aus zwei
          Prämissen und einem Schluss:
        </p>

        ${renderFormulaBox({
          label: 'Der klassische Syllogismus (Barbara)',
          formula: 'Alle Menschen sind sterblich. (Obersatz)<br>Sokrates ist ein Mensch. (Untersatz)<br>∴ Sokrates ist sterblich. (Schluss)',
          desc: 'Der Modus Barbara — das Paradigma gültigen Schließens. Wenn die Prämissen wahr sind und die Form gültig, ist der Schluss zwingend.'
        })}

        <h3 class="lz-h3 reveal">Metaphysik — die Vier-Ursachen-Lehre</h3>
        <p class="lz-prose reveal">
          Die <em>Metaphysik</em> untersucht „das Seiende als Seiendes" (tò ón hēi ón) —
          die allgemeinsten Strukturen der Wirklichkeit. Aristoteles' zentrales Werkzeug
          ist die <strong>Vier-Ursachen-Lehre</strong> (aitíai): Alles in der Welt lässt
          sich durch vier Arten von Ursachen vollständig erklären:
        </p>

        ${renderTable({
          headers: ['Ursache (aitía)', 'Frage', 'Beispiel: Statue', 'Beispiel: Mensch'],
          rows: [
            ['<strong>Materialursache</strong> (causa materialis)', 'Woraus?',  'Bronze',           'Fleisch, Knochen, Organe'],
            ['<strong>Formursache</strong> (causa formalis)',       'Was?',     'Gestalt der Statue','Seele (psychḗ) als Formbestimmung'],
            ['<strong>Wirkursache</strong> (causa efficiens)',      'Wodurch?', 'Der Bildhauer',     'Die Eltern (Zeugung)'],
            ['<strong>Zweckursache</strong> (causa finalis)',       'Wozu?',    'Schmuck des Tempels','Eudaimonía (gelungenes Leben)'],
          ],
          highlight: [3],
        })}

        ${renderMerkboxGrid([
          { icon: 'fas fa-shapes', title: 'Hylomorphismus',
            text: 'Jedes natürliche Ding ist eine Einheit aus Stoff (hýlē) und Form (morphḗ). Der Stoff ist die unbestimmte Materie, die Form das bestimmende Wesen. Die Seele ist die Form des Körpers — nicht ein eigenständiges Ding „im" Körper, sondern das, was den Körper zu einem lebendigen Leib macht.' },
          { icon: 'fas fa-bullseye', title: 'Teleologie — „Die Natur tut nichts umsonst"',
            text: 'Alles in der Natur strebt nach einem Ziel (télos). Der Samen strebt zum Baum, das Kind zum Erwachsenen, der Mensch zur Eudaimonie. Die Zweckursache ist die wichtigste der vier Ursachen — die Natur ist sinnvoll geordnet.' },
          { icon: 'fas fa-arrow-up', title: 'Akt und Potenz (enérgeia / dýnamis)',
            text: 'Jedes Ding hat Möglichkeiten (Potenz), die es verwirklichen kann (Akt). Der Eichelkern ist potenziell eine Eiche; die ausgewachsene Eiche ist die Verwirklichung (Aktualität) dieser Potenz. Veränderung = Übergang von Potenz zu Akt.' },
          { icon: 'fas fa-circle-notch', title: 'Der Unbewegte Beweger',
            text: 'Am Ende der Ursachenkette steht ein erstes Prinzip: der „Unbewegte Beweger" — reine Aktualität ohne Potenz, reines Denken, das sich selbst denkt (nóēsis noḗseōs). Er bewegt nicht durch Anstoß, sondern als Gegenstand der Sehnsucht — als höchstes Ziel, auf das alles zustrebt.' },
        ])}

        ${renderCompare({
          titleA: 'Platon — Ideenlehre',
          titleB: 'Aristoteles — Hylomorphismus',
          listA: [
            'Ideen existieren <strong>getrennt</strong> von den Dingen (choristá)',
            'Ideen in einer <strong>eigenen Welt</strong> (kósmos noētós)',
            'Erkenntnis durch <strong>Vernunft allein</strong> (Anamnesis)',
            'Die <strong>Sinnenwelt ist Schein</strong>',
            'Mathematik als Modellwissenschaft',
            'Von oben nach unten: Idee → Abbild',
          ],
          listB: [
            'Form ist <strong>im Ding</strong> — untrennbar vom Stoff',
            'Nur <strong>eine Welt</strong> — diese konkrete Wirklichkeit',
            'Erkenntnis beginnt bei der <strong>Sinneserfahrung</strong>',
            'Die <strong>Sinnenwelt ist die eigentliche Realität</strong>',
            'Biologie als Modellwissenschaft',
            'Von unten nach oben: Erfahrung → Begriff',
          ],
        })}
      </div>
    </section>


    <!-- ═══════════════════ ETHIK ═══════════════════ -->
    <section class="lz-content-section">
      <div class="lz-section-wrap">
        ${renderSubhead('Nikomachische Ethik')}
        <h2 class="lz-h2 reveal"><em>Eudaimonia</em> — das gelingende Leben</h2>

        <p class="lz-prose reveal">
          Aristoteles' Ethik ist eine <strong>Tugendethik</strong>: Nicht einzelne Handlungen
          werden bewertet, sondern der <strong>Charakter</strong> des Handelnden. Die Leitfrage
          ist nicht „Was soll ich tun?" (wie bei Kant), sondern <strong>„Wie soll ich sein,
          um gut zu leben?"</strong> Die Antwort: Durch Einübung der Tugenden zur
          <strong>Eudaimonía</strong> (Glückseligkeit, gelingendes Leben).
        </p>

        ${renderMerkboxGrid([
          { icon: 'fas fa-star', title: 'Eudaimonía (Glückseligkeit)',
            text: 'Das höchste Gut, nach dem alle Menschen streben. Nicht Lust (hēdonḗ), nicht Ehre (timḗ), nicht Reichtum (ploûtos), sondern die dauerhafte, vollständige Verwirklichung der spezifisch menschlichen Fähigkeiten — vor allem der Vernunft. „Eudaimonie ist Tätigkeit der Seele gemäß der Tugend" (NE I, 7).' },
          { icon: 'fas fa-balance-scale', title: 'Mesotēs-Lehre (Lehre von der Mitte)',
            text: 'Jede ethische Tugend ist eine Mitte (mesótēs) zwischen zwei Extremen (Übermaß und Mangel). Tapferkeit = Mitte zwischen Tollkühnheit (zu viel) und Feigheit (zu wenig). Freigebigkeit = Mitte zwischen Verschwendung und Geiz. Die Mitte ist kein starrer Mittelwert, sondern relativ zur Person und Situation.' },
          { icon: 'fas fa-dumbbell', title: 'Hexis (feste Haltung durch Gewöhnung)',
            text: 'Tugend ist keine angeborene Eigenschaft und kein reines Wissen (→ gegen Sokrates), sondern eine durch Übung erworbene feste Haltung (héxis). „Wir werden gerecht, indem wir gerecht handeln" — wie man Gitarre spielen lernt, indem man Gitarre spielt.' },
          { icon: 'fas fa-brain', title: 'Phrónēsis (praktische Klugheit)',
            text: 'Die wichtigste intellektuelle Tugend der Praxis. Phrónēsis ist die Fähigkeit, in konkreten Situationen die richtige Mitte zu finden — nicht durch abstrakte Regeln, sondern durch Erfahrung, Urteilskraft und Einfühlungsvermögen. Der Kluge (phrónimos) ist das Vorbild.' },
          { icon: 'fas fa-users', title: 'Mensch als zōon politikón',
            text: '„Der Mensch ist von Natur aus ein politisches Wesen" (Politik I, 2). Eudaimonie ist nur in der Gemeinschaft (Polis) möglich — der Mensch verwirklicht sein Wesen durch Zusammenleben, Freundschaft und politische Teilhabe. Ein Mensch ohne Polis ist „entweder ein Tier oder ein Gott".' },
        ])}

        ${renderTable({
          headers: ['Tugend (aretḗ)', 'Mangel (zu wenig)', 'Übermaß (zu viel)'],
          rows: [
            ['<strong>Tapferkeit</strong> (andreía)',      'Feigheit (deilía)',              'Tollkühnheit (thrasýtēs)'],
            ['<strong>Besonnenheit</strong> (sōphrosýnē)', 'Stumpfheit (anaísthēsia)',      'Zuchtlosigkeit (akolasía)'],
            ['<strong>Freigebigkeit</strong> (eleutheriótēs)','Geiz (aneleuthería)',          'Verschwendung (asōtía)'],
            ['<strong>Wahrhaftigkeit</strong> (alḗtheia)',  'Untertreibung (eirōneía)',       'Prahlerei (alazonéia)'],
            ['<strong>Freundlichkeit</strong> (philía)',    'Mürrischkeit (dýskolos)',        'Liebedienerei (árestos)'],
            ['<strong>Gerechtigkeit</strong> (dikaiosýnē)','Benachteiligung',                'Übergriff'],
          ],
          highlight: [0, 5],
        })}

        ${renderFormulaBox({
          label: 'Aristoteles, Nikomachische Ethik I, 7, 1098a',
          formula: '„Das Gut des Menschen ist Tätigkeit der Seele<br>gemäß der Tugend — und wenn es mehrere Tugenden gibt,<br>gemäß der besten und vollkommensten."',
          desc: 'Die Definition der Eudaimonie: nicht ein Zustand (Glücksgefühl), sondern eine Tätigkeit (enérgeia) — das aktive Ausüben der Tugenden über ein ganzes Leben hinweg.'
        })}
      </div>
    </section>


    <!-- ═══════════════════ ÄSTHETIK ═══════════════════ -->
    <section class="lz-content-section">
      <div class="lz-section-wrap">
        ${renderSubhead('Ästhetik — Die Poetik')}
        <h2 class="lz-h2 reveal"><em>Kátharsis</em> — Reinigung durch Kunst</h2>

        <p class="lz-prose reveal">
          In der <em>Poetik</em> antwortet Aristoteles direkt auf Platons Kunstkritik:
          Kunst (insbesondere die Tragödie) ist nicht schädlich, sondern
          <strong>therapeutisch</strong>. Sie ahmt nicht bloß die Oberfläche nach,
          sondern das <strong>Allgemeine</strong> — was geschehen <em>könnte</em>
          (nach Wahrscheinlichkeit oder Notwendigkeit).
        </p>

        ${renderMerkboxGrid([
          { icon: 'fas fa-theater-masks', title: 'Kátharsis (Reinigung)',
            text: 'Die Tragödie bewirkt „durch Mitleid (éleos) und Furcht (phóbos) die Reinigung (kátharsis) von derartigen Gemütsbewegungen" (Poetik 6, 1449b). Nicht Unterdrückung der Emotionen, sondern ihre geordnete Durcharbeitung — ähnlich einer therapeutischen Erfahrung.' },
          { icon: 'fas fa-book', title: 'Dichtung ist „philosophischer als Geschichte"',
            text: 'Der Dichter stellt nicht dar, was geschehen ist (Einzelfall), sondern was geschehen könnte (allgemeines Muster). „Deshalb ist die Dichtung philosophischer und bedeutender als die Geschichtsschreibung" (Poetik 9, 1451b). Kunst erschließt universale Wahrheiten.' },
          { icon: 'fas fa-exclamation-circle', title: 'Hamartía (tragischer Fehler)',
            text: 'Der tragische Held scheitert nicht durch moralische Schlechtigkeit, sondern durch einen Fehler (hamartía) — ein Fehlurteil, übermäßigen Stolz (hýbris), mangelnde Einsicht. Das macht ihn mitleidwürdig: „ein Mensch wie wir", nicht ein Bösewicht.' },
        ])}
      </div>
    </section>


    <!-- ═══════════════════ TESTFRAGEN ═══════════════════ -->
    <section class="lz-content-section">
      <div class="lz-section-wrap">
        ${renderSubhead('Testfragen — Abiturniveau')}

        ${renderAccordion([
          { title: '1. Vergleichen Sie Platons Ideenlehre mit Aristoteles\' Hylomorphismus systematisch.',
            content: '<p class="lz-prose"><strong>Grunddifferenz:</strong> Für Platon existieren die allgemeinen Formen (Ideen) <strong>getrennt</strong> von den Einzeldingen in einer eigenen Welt. Für Aristoteles existiert die Form <strong>nur im Einzelding</strong> — untrennbar vom Stoff (Hylomorphismus).<br><br><strong>Erkenntnistheorie:</strong> Platon: Erkenntnis durch Vernunft allein (Anamnesis — Wiedererinnerung der Seele an die vorgeburtlich geschauten Ideen). Aristoteles: Erkenntnis beginnt bei der Sinneserfahrung — „Nihil est in intellectu quod non prius fuerit in sensu" (nichts ist im Verstand, was nicht zuvor in den Sinnen war).<br><br><strong>Ontologie:</strong> Platon: Das wahrhaft Seiende sind die Ideen; die Sinnenwelt ist Schein. Aristoteles: Die konkreten Einzeldinge (Substanzen) sind das primär Seiende. Die Form ist real, aber nur als Form <em>dieses</em> konkreten Dings.<br><br><strong>Wissenschaftsideal:</strong> Platon: Mathematik als Modell (deduktiv, von oben nach unten). Aristoteles: Biologie als Modell (induktiv, von der Beobachtung zum Allgemeinen).<br><br><strong>Aristoteles\' Kritik:</strong> Platons Ideen erklären nichts — sie verdoppeln nur die Welt. „Wenn ich erklären will, warum Sokrates Mensch ist, hilft mir eine zweite, getrennte Wesenheit ‚Mensch an sich nicht weiter" (Metaphysik I, 9). Zudem: Wie können getrennte Ideen die Sinnenwelt verursachen? Das „Teilhabe"-Modell ist eine Metapher, keine Erklärung.</p>' },

          { title: '2. Erläutern Sie Aristoteles\' Mesotēs-Lehre und geben Sie drei Beispiele. Welches Problem hat die Lehre?',
            content: '<p class="lz-prose"><strong>Die Lehre:</strong> Jede ethische Tugend (aretḗ) ist eine <strong>Mitte</strong> (mesótēs) zwischen einem Zuviel (Übermaß) und einem Zuwenig (Mangel), bestimmt durch die <strong>praktische Klugheit</strong> (phrónēsis). Die Mitte ist nicht arithmetisch, sondern <strong>relativ zur Person und Situation</strong>.<br><br><strong>Drei Beispiele:</strong><br>1) <strong>Tapferkeit</strong> = Mitte zwischen Tollkühnheit (wer jede Gefahr sucht) und Feigheit (wer jeder Gefahr ausweicht). Der Tapfere fürchtet das Richtige, zur richtigen Zeit, aus dem richtigen Grund.<br>2) <strong>Freigebigkeit</strong> = Mitte zwischen Verschwendung (wer wahllos gibt) und Geiz (wer nichts gibt). Der Freigebige gibt das Richtige, an die Richtigen, zum richtigen Zeitpunkt.<br>3) <strong>Wahrhaftigkeit</strong> = Mitte zwischen Prahlerei (wer sich besser darstellt als er ist) und Untertreibung (wer seine Qualitäten herunterspielt).<br><br><strong>Probleme:</strong> (1) Nicht alle Tugenden lassen sich als Mitte fassen — Gerechtigkeit, Freundschaft, Weisheit passen schlecht ins Schema. (2) Es gibt Handlungen, die <strong>kein Mittelmaß</strong> haben: Mord, Ehebruch, Diebstahl sind immer schlecht, nicht bloß ein „Zuviel" (Aristoteles räumt dies selbst ein, NE II, 6). (3) Die Mitte wird durch die phrónēsis bestimmt — aber wie gewinnt man phrónēsis? Durch Erfahrung und Vorbild, sagt Aristoteles. Das ist zirkulär: Um tugendhaft zu werden, braucht man einen Tugendhaften als Vorbild.</p>' },

          { title: '3. Was bedeutet „Eudaimonie" bei Aristoteles und warum ist sie nicht mit „Glück" zu übersetzen?',
            content: '<p class="lz-prose"><strong>Eudaimonía</strong> (eu = gut + daímōn = Schicksal/Geist) wird oft mit „Glück" oder „Glückseligkeit" übersetzt — das ist irreführend. Im modernen Deutsch meint „Glück" ein <strong>subjektives Gefühl</strong> (sich glücklich fühlen) oder <strong>Zufall</strong> (Glück haben). Aristoteles meint etwas grundlegend anderes: Eudaimonie ist <strong>objektives Gelingen</strong> — ein Leben, das <em>tatsächlich</em> gelungen ist, unabhängig davon, ob man es „fühlt".<br><br><strong>Drei Bestimmungen:</strong><br>(1) Eudaimonie ist <strong>Tätigkeit</strong> (enérgeia), nicht Zustand. Man „hat" keine Eudaimonie, man „tut" sie — durch aktives Ausüben der Tugenden.<br>(2) Eudaimonie erstreckt sich über ein <strong>ganzes Leben</strong>: „Ein einziger Tag macht keinen Frühling, und so macht auch ein einziger Tag keinen glückseligen Menschen" (NE I, 7). Erst im Rückblick kann man urteilen, ob ein Leben eudaimon war.<br>(3) Eudaimonie erfordert <strong>äußere Güter</strong>: Gesundheit, Freunde, ein Mindestmaß an Wohlstand, politische Teilhabe. Der Tugendhafte auf der Folterbank ist nicht eudaimon — gegen die Stoa, die Tugend als hinreichend für Glück erklärt.<br><br><strong>Bessere Übersetzung:</strong> „Gelingendes Leben", „menschliches Aufblühen" (engl. flourishing), „das gute Leben im objektiven Sinn".</p>' },

          { title: '4. Erklären Sie Aristoteles\' Vier-Ursachen-Lehre am Beispiel eines konkreten Gegenstands und am Beispiel des Menschen.',
            content: '<p class="lz-prose"><strong>Beispiel: Ein Haus</strong><br>1) <strong>Materialursache:</strong> Steine, Holz, Ziegel — das Material, aus dem das Haus besteht.<br>2) <strong>Formursache:</strong> Der Bauplan, die Architektur — die Struktur, die das Material zum Haus macht (und nicht zum Steinhaufen).<br>3) <strong>Wirkursache:</strong> Der Baumeister, der das Haus baut — der Anstoß, der den Bau in Gang setzt.<br>4) <strong>Zweckursache:</strong> Schutz vor Wetter, Wohnraum — der Zweck, um dessentwillen das Haus gebaut wird.<br><br><strong>Beispiel: Der Mensch</strong><br>1) <strong>Materialursache:</strong> Fleisch, Knochen, Blut — der organische Stoff.<br>2) <strong>Formursache:</strong> Die Seele (psychḗ) — das, was den Körper zu einem lebendigen, empfindenden, denkenden Wesen macht. Für Aristoteles ist die Seele nicht ein „Ding im Körper", sondern die <em>Form</em> des Körpers — wie die Schärfe die Form des Messers ist.<br>3) <strong>Wirkursache:</strong> Die Eltern (Zeugung) — der konkrete Anlass der Entstehung.<br>4) <strong>Zweckursache:</strong> Eudaimonía — das gelingende, vernunftgemäße Leben. Der Mensch existiert nicht „einfach so", sondern hat ein natürliches Ziel (télos): die Verwirklichung seiner spezifischen Fähigkeiten, vor allem der Vernunft.<br><br><strong>Philosophische Pointe:</strong> Die moderne Naturwissenschaft kennt nur die <strong>Wirkursache</strong> (kausale Erklärung) und die <strong>Materialursache</strong> (stoffliche Zusammensetzung). Aristoteles\' Zweckursache (Teleologie) wird seit der Neuzeit als unwissenschaftlich abgelehnt. Aber in Biologie (Funktion von Organen), Ethik (Ziel des menschlichen Lebens) und Handlungstheorie (Absicht des Handelnden) bleibt das teleologische Denken unverzichtbar.</p>' },
        ])}
      </div>
    </section>

    <section class="lz-content-section" style="padding-top:0;">
      <div class="lz-section-wrap">
        ${renderPageNav({
          prev: { label: 'Platon', link: `${BASE}/themen/klassische-antike/platon` },
          next: { label: 'Epikur', link: `${BASE}/themen/hellenistische-schulen/epikur` },
        }, BASE)}
      </div>
    </section>
    ${footerHTML(this.router)}
    `;
  }
  init() { i18n.init(); initScrollReveal(); refreshScrollReveal(); initInteractive(document); }
  cleanup() {}
}