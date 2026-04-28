// pages/projekte/lernzettel/faecher/ethik/themen/deutscher-idealismus/schelling.js
// ══════════════════════════════════════════════════════════════════
// Kapitel 8.3 — Friedrich Wilhelm Joseph Schelling (1775–1854)
// Naturphilosophie, Identitätsphilosophie, Freiheitsschrift
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

const KAP_COLOR = '#b87333';
const KAP_COLOR_RGB = '184, 115, 51';

export default class SchellingPage {
  constructor(router) { this.router = router; }
  render() {
    ensureComponentsCSS();
    loadComponentCSS('pages/projekte/lernzettel/styles/sub.css');
    const el = document.createElement('div');
    el.className = 'page page-schelling';
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
          <span>Schelling</span>
        </nav>
        <h1 class="lz-sub-title"><em>Schelling</em> — Natur, Freiheit &amp; das Absolute</h1>
        <p class="lz-sub-desc">
          Der wandlungsfähigste Denker des Deutschen Idealismus: Schelling
          gab der Natur ihre Eigenständigkeit zurück, stellte die Kunst über
          die Philosophie und rang ein Leben lang mit dem Problem des Bösen —
          ein „Proteus der Philosophie", der sich immer neu erfand.
        </p>
        ${renderTags(['Kapitel 8.3', '1775–1854', 'Leonberg · Jena · München · Berlin', 'Naturphilosophie · Identität · Freiheitsschrift', 'Abitur 2026'])}
      </div>
    </section>

    <section class="lz-content-section"><div class="lz-section-wrap">
      ${renderSubhead('Biographisches')}
      <h2 class="lz-h2 reveal">Das <em>Wunderkind</em> des Idealismus</h2>
      <p class="lz-prose reveal">Friedrich Wilhelm Joseph Schelling (1775–1854) war ein intellektuelles Wunderkind: Mit 15 Jahren trat er ins <strong>Tübinger Stift</strong> ein (zwei Jahre früher als üblich), wo er mit dem fünf Jahre älteren <strong>Hegel</strong> und dem drei Jahre älteren <strong>Hölderlin</strong> studierte. Mit 23 wurde er Professor in <strong>Jena</strong> — der jüngste Professor in Deutschland. Sein Denken durchlief mindestens fünf verschiedene Phasen — jede eine eigenständige Philosophie.</p>

      ${renderVTimeline([
        { year: '1775', title: 'Geburt in Leonberg', text: 'Sohn eines Pfarrers; frühreif, mit 15 ins Tübinger Stift' },
        { year: '1794–96', title: 'Erste Veröffentlichungen', text: 'Schon als Student publiziert er Schriften zu Fichte und Spinoza' },
        { year: '1798', title: 'Professor in Jena (23-jährig)', text: 'Jüngster Professor Deutschlands; Beginn der Naturphilosophie' },
        { year: '1800', title: 'System des transzendentalen Idealismus', text: 'Synthese von Natur- und Transzendentalphilosophie; Kunst als Organon' },
        { year: '1804', title: 'Identitätsphilosophie', text: 'Das Absolute als „Indifferenzpunkt" von Natur und Geist' },
        { year: '1809', title: 'Freiheitsschrift', text: 'Über das Wesen der menschlichen Freiheit — das Böse als reale Möglichkeit; Wendepunkt seines Denkens' },
        { year: '1810–27', title: 'Münchener Phase — „Weltalter"', text: 'Unveröffentlichtes Spätwerk; Ringen mit Mythologie und Offenbarung' },
        { year: '1841', title: 'Berufung nach Berlin', text: 'Soll Hegel „überwinden"; im Publikum: Kierkegaard, Engels, Bakunin — alle enttäuscht' },
        { year: '1854', title: 'Tod in Bad Ragaz', text: 'Stirbt 79-jährig; sein Spätwerk bleibt Fragment' },
      ])}

      ${renderInfobox({
        type: '', icon: 'fas fa-info-circle',
        title: 'Fünf Phasen — ein Denker',
        body: 'Schellings Werk lässt sich grob in fünf Phasen einteilen: (1) <strong>Fichte-Phase</strong> (1794–96): Ich-Philosophie, Wissenschaftslehre. (2) <strong>Naturphilosophie</strong> (1797–99): Natur als eigenständiges Produktionssystem. (3) <strong>Identitätsphilosophie</strong> (1801–04): Natur und Geist als zwei Seiten des Absoluten. (4) <strong>Freiheitsphilosophie</strong> (1809): Das Böse, die dunkle Seite Gottes. (5) <strong>Spätphilosophie</strong> (1815–54): Mythologie und Offenbarung, „positive Philosophie" gegen Hegels Rationalismus. — Die Vielfalt ist Stärke und Schwäche zugleich: Kein geschlossenes System wie bei Hegel, aber eine Offenheit für Probleme, die Hegel verdrängt hat.'
      })}
    </div></section>

    <section class="lz-content-section"><div class="lz-section-wrap">
      ${renderSubhead('Naturphilosophie (1797–1799)')}
      <h2 class="lz-h2 reveal">Die Natur ist <em>sichtbarer Geist</em></h2>

      <p class="lz-prose reveal">Schellings originellster Beitrag: Gegen Fichte, für den die Natur nur „Nicht-Ich" war (Material des Ich, Widerstand für die Freiheit), gibt Schelling der <strong>Natur ihre Eigenständigkeit</strong> zurück. Die Natur ist nicht bloß totes Material — sie ist <strong>produktiv, lebendig, schöpferisch</strong>. Sie ist „unbewusster Geist" — Geist, der sich noch nicht als Geist erkannt hat.</p>

      ${renderMerkboxGrid([
        { icon: 'fas fa-tree', title: 'Natura naturans — Die produktive Natur',
          text: 'Schelling unterscheidet (wie Spinoza): natura naturata = die geschaffene, sichtbare Natur (Steine, Pflanzen, Tiere). Natura naturans = die schaffende, unsichtbare Produktivkraft der Natur. Die Natur ist nicht ein Haufen toter Dinge, sondern ein lebendiger PROZESS ständiger Selbstorganisation.' },
        { icon: 'fas fa-magnet', title: 'Polarität und Potenz',
          text: 'Die Natur entwickelt sich durch POLARITÄTEN: positiv/negativ (Elektrizität), Nord/Süd (Magnetismus), Anziehung/Abstoßung (Gravitation), Einatmen/Ausatmen (Leben). Jede Naturerscheinung ist eine Synthese gegensätzlicher Kräfte — dialektisch, wie später bei Hegel, aber in der NATUR, nicht im Geist.' },
        { icon: 'fas fa-layer-group', title: 'Stufenfolge der Natur',
          text: 'Die Natur entwickelt sich in Stufen: Materie → Licht → Organismus → Bewusstsein. Jede Stufe ist eine höhere „Potenz" (Machtentfaltung) der Natur. Der Mensch ist die höchste Stufe — die Natur, die sich in ihm SELBST erkennt. „Die Natur schlägt im Menschen die Augen auf."' },
        { icon: 'fas fa-brain', title: 'Natur = unbewusster Geist',
          text: '„Die Natur ist der sichtbare Geist, der Geist die unsichtbare Natur." Natur und Geist sind nicht zwei verschiedene Substanzen (Descartes), sondern zwei Erscheinungsformen DESSELBEN. Die Natur IST Geist — nur auf einer unbewussten Stufe. Der Geist IST Natur — nur auf einer bewussten Stufe.' },
      ])}

      ${renderFormulaBox({
        label: 'Schelling, Ideen zu einer Philosophie der Natur (1797)',
        formula: '„Die Natur soll der sichtbare Geist,<br>der Geist die unsichtbare Natur sein."',
        desc: 'Schellings Grundformel: Natur und Geist sind identisch — nur in verschiedenen Zuständen. Die Natur „schlummert" als unbewusster Geist; im Menschen „erwacht" sie.'
      })}

      ${renderCompare({
        titleA: 'Fichte — Die Natur als Nicht-Ich',
        titleB: 'Schelling — Die Natur als produktives Subjekt',
        listA: [
          'Natur = <strong>Material</strong> des Ich, Widerstand',
          'Natur hat <strong>keinen Eigenwert</strong>',
          'Natur wird vom Ich <strong>gesetzt</strong>',
          'Primat des <strong>Subjekts</strong> (Ich)',
          'Ethik: Natur = zu überwindendes Hindernis',
        ],
        listB: [
          'Natur = <strong>eigenständiges</strong>, produktives System',
          'Natur hat <strong>intrinsischen Wert</strong>',
          'Natur entwickelt sich <strong>aus sich selbst</strong>',
          'Natur und Geist sind <strong>gleichursprünglich</strong>',
          'Ästhetik: Natur = Ausdruck des Absoluten',
        ],
      })}
    </div></section>

    <section class="lz-content-section"><div class="lz-section-wrap">
      ${renderSubhead('Identitätsphilosophie (1801–1804)')}
      <h2 class="lz-h2 reveal">Der <em>Indifferenzpunkt</em> des Absoluten</h2>

      <p class="lz-prose reveal">In der <strong>Identitätsphilosophie</strong> vereinigt Schelling Natur- und Transzendentalphilosophie: Natur und Geist sind zwei <strong>Erscheinungsweisen</strong> eines einzigen Absoluten — des „Indifferenzpunkts", in dem alle Gegensätze aufgehoben sind.</p>

      ${renderMerkboxGrid([
        { icon: 'fas fa-circle', title: 'Das Absolute als Indifferenz',
          text: 'Das Absolute ist weder Natur noch Geist, weder Subjekt noch Objekt — es ist die absolute IDENTITÄT beider, der „Indifferenzpunkt", in dem alle Unterschiede verschwinden. Wie ein weißes Licht, das alle Farben enthält, bevor es durch ein Prisma gebrochen wird. Die Welt (Natur + Geist) ist das „gebrochene" Absolute.' },
        { icon: 'fas fa-palette', title: 'Kunst als Organon der Philosophie',
          text: 'Im System des transzendentalen Idealismus (1800) erklärt Schelling die KUNST zum höchsten Erkenntnisorgan: Die Philosophie kann das Absolute nur DENKEN (und verfehlt es damit, denn das Absolute ist jenseits des Denkens). Die Kunst kann es DARSTELLEN — im Kunstwerk verschmelzen Bewusstes und Unbewusstes, Natur und Freiheit, Endliches und Unendliches. Kunst > Philosophie.' },
        { icon: 'fas fa-star', title: 'Intellektuelle Anschauung',
          text: 'Wie kann man das Absolute erkennen, wenn es jenseits aller Unterscheidungen (Subjekt/Objekt, Natur/Geist) liegt? Durch „intellektuelle Anschauung" — eine direkte, nicht-begriffliche Einsicht, in der das Denkende und das Gedachte eins werden. Kant hatte dies für unmöglich erklärt; Fichte behauptete es für das Ich; Schelling erweitert es auf das Absolute.' },
      ])}
    </div></section>

    <section class="lz-content-section"><div class="lz-section-wrap">
      ${renderSubhead('Die Freiheitsschrift (1809)')}
      <h2 class="lz-h2 reveal">Das Böse und der <em>dunkle Grund</em> in Gott</h2>

      <p class="lz-prose reveal">Die <em>Philosophischen Untersuchungen über das Wesen der menschlichen Freiheit</em> (1809) ist Schellings tiefgreifendstes Werk — und der Wendepunkt seines Denkens. Schelling stellt eine Frage, die Hegel verdrängt: <strong>Woher kommt das Böse?</strong> Und: Wie kann Freiheit in einem System notwendiger Vernunft bestehen?</p>

      ${renderMerkboxGrid([
        { icon: 'fas fa-moon', title: 'Der dunkle Grund in Gott',
          text: 'Schelling unterscheidet IN GOTT zwischen Gott als Existierendem (Licht, Vernunft, Ordnung) und dem „Grund seiner Existenz" (Dunkelheit, Wille, Chaos). Gott hat einen DUNKLEN GRUND — eine irrationale, triebhafte Tiefe, aus der er sich selbst hervorbringt. Nicht alles in Gott ist Vernunft — es gibt ein „Wollen ohne Verstand", einen blinden Willen.' },
        { icon: 'fas fa-fire', title: 'Das Böse als reale Möglichkeit',
          text: 'Das Böse ist nicht bloß Mangel an Gutem (Augustinus, Plotin), sondern eine REALE, POSITIVE Kraft: die Verkehrung der rechten Ordnung. Im Menschen können die dunklen Kräfte (Eigenwille, Egoismus, Begierde) die Herrschaft über die hellen (Vernunft, Liebe) übernehmen. Das Böse ist die Umkehrung der Prinzipien — wenn das Partikulare sich zum Zentrum macht.' },
        { icon: 'fas fa-crosshairs', title: 'Freiheit zum Guten UND zum Bösen',
          text: 'Wahre Freiheit ist nicht nur Freiheit zum Guten (wie bei Kant und Hegel), sondern Freiheit zum Guten UND zum Bösen. Wer nur das Gute „wählen" kann, ist nicht frei — er ist determiniert zum Guten. Der Mensch ist das Wesen, das sich ZWISCHEN Gut und Böse entscheiden muss — und kann. Das ist seine Größe und sein Abgrund.' },
        { icon: 'fas fa-history', title: 'Theogonie — Gott wird',
          text: 'Gott ist nicht fertig — er WIRD. Die Schöpfung ist der Prozess, in dem Gott sich aus seinem dunklen Grund heraus ins Licht bringt. Die Geschichte ist Gottes Selbstverwirklichung — ein dramatischer Kampf zwischen Dunkelheit und Licht, Chaos und Ordnung, Bosheit und Liebe.' },
      ])}

      ${renderFormulaBox({
        label: 'Schelling, Freiheitsschrift (1809)',
        formula: '„Der Idealismus gibt nämlich einerseits<br>nur die allgemeinste Begriffe von Freiheit,<br>andererseits den bloß formellen Begriff derselben,<br>aber gerade der reale und lebendige Begriff ist,<br>dass sie ein Vermögen des Guten UND des Bösen sei."',
        desc: 'Gegen Kant und Hegel: Freiheit ist nicht nur die Fähigkeit, dem moralischen Gesetz zu folgen — sie ist die reale Möglichkeit, sich FÜR oder GEGEN das Gute zu entscheiden. Freiheit hat eine dunkle Seite.'
      })}

      ${renderInfobox({
        type: 'blue', icon: 'fas fa-graduation-cap',
        title: 'Abitur-Hinweis: Schelling vs. Hegel zum Bösen',
        body: '<strong>Hegel:</strong> Das Böse ist ein <strong>notwendiges Durchgangsmoment</strong> der dialektischen Entwicklung — es wird aufgehoben (negiert, bewahrt, erhöht) in der Synthese. Das Böse hat keinen eigenen Status — es ist nur die Negativität, die der Fortschritt braucht.<br><br><strong>Schelling:</strong> Das Böse ist eine <strong>reale, irreduzible Macht</strong> — es wird nicht aufgehoben, sondern bleibt als ständige Möglichkeit bestehen. Es gibt einen „dunklen Grund" in Gott und im Menschen, der sich nicht rationalisieren lässt. Schellings Position ist <strong>existenzieller</strong>: Freiheit ist gefährlich, das Böse ist ernst, die Welt ist nicht einfach „vernünftig".'
      })}
    </div></section>

    <section class="lz-content-section"><div class="lz-section-wrap">
      ${renderSubhead('Wirkungsgeschichte')}
      ${renderTable({
        headers: ['Nachwirkung', 'Verbindung zu Schelling'],
        rows: [
          ['<strong>Kierkegaard</strong>', 'Hörte Schellings Berliner Vorlesungen (1841); übernahm die Kritik an Hegels Rationalismus; die „Existenz" gegen das „System"'],
          ['<strong>Schopenhauer</strong>', 'Der „blinde Wille" (Schopenhauer) erinnert an Schellings „dunklen Grund" — eine irrationale, triebhafte Urkraft unter der Vernunft'],
          ['<strong>Nietzsche</strong>', 'Das Dionysische (Chaos, Rausch, Trieb) vs. das Apollinische (Form, Ordnung) spiegelt Schellings Polarität von Dunkelheit und Licht'],
          ['<strong>Heidegger</strong>', 'Heideggers Schelling-Vorlesung (1936) ist eines seiner wichtigsten Werke; der „Grund" (Abgrund) wird zum Zentralthema von Sein und Zeit'],
          ['<strong>Tillich</strong>', 'Paul Tillichs Theologie des „Grundes des Seins" ist direkt von Schellings Freiheitsschrift beeinflusst'],
          ['<strong>Ökophilosophie</strong>', 'Schellings Naturphilosophie (Natur als produktives Subjekt, nicht totes Material) wird von der modernen Ökophilosophie rezipiert'],
        ],
        highlight: [0, 3],
      })}
    </div></section>

    <section class="lz-content-section"><div class="lz-section-wrap">
      ${renderSubhead('Testfragen — Abiturniveau')}
      ${renderAccordion([
        { title: '1. Erklären Sie Schellings Naturphilosophie und ihren Gegensatz zu Fichtes Ich-Philosophie.',
          content: '<p class="lz-prose"><strong>Fichte:</strong> Die Natur ist <strong>Nicht-Ich</strong> — Material und Widerstand für die Freiheit des Ich. Sie hat keinen Eigenwert; sie existiert, damit das Ich an ihr seine Freiheit verwirklichen kann. Die Natur wird vom Ich „gesetzt".<br><br><strong>Schelling:</strong> Die Natur ist <strong>eigenständig produktiv</strong> — sie entwickelt sich aus sich selbst heraus, unabhängig vom menschlichen Bewusstsein. Sie ist „unbewusster Geist" — Geist auf einer Stufe, die sich noch nicht als Geist erkannt hat. Die Natur durchläuft Stufen zunehmender Komplexität: Materie → Leben → Bewusstsein → Selbstbewusstsein. Im Menschen „schlägt die Natur die Augen auf" — sie erkennt sich selbst.<br><br><strong>Schellings Formel:</strong> „Die Natur ist der sichtbare Geist, der Geist die unsichtbare Natur." Natur und Geist sind zwei Erscheinungsweisen DESSELBEN Absoluten — gleichursprünglich, gleichberechtigt. Gegen Fichte: Die Natur ist nicht bloß Mittel, sondern Ausdruck des Absoluten. Gegen Hegel: Die Natur hat eigene Dynamik und lässt sich nicht vollständig in Begriffe auflösen.</p>' },

        { title: '2. Was ist der „dunkle Grund in Gott" (Freiheitsschrift 1809)?',
          content: '<p class="lz-prose">Schelling unterscheidet IN GOTT zwei Prinzipien: (1) <strong>Gott als Existierender:</strong> Licht, Vernunft, Liebe, Ordnung — das, was wir normalerweise „Gott" nennen. (2) <strong>Der Grund seiner Existenz:</strong> Ein dunkler, irrationaler, triebhafter Wille — das Chaos, aus dem Gott sich selbst hervorbringt. Dieser Grund ist nicht „böse" — aber er ist <strong>nicht rational</strong>. Er ist die blinde Sehnsucht, die Gott „hat", bevor er sich als Licht erkennt.<br><br><strong>Konsequenz für den Menschen:</strong> Der Mensch hat als Abbild Gottes BEIDE Prinzipien in sich: das Helle (Vernunft, Liebe) und das Dunkle (Eigenwille, Begierde). Das Böse entsteht, wenn der dunkle Grund die <strong>Herrschaft</strong> über das Helle übernimmt — wenn der Eigenwille sich zum Zentrum macht und die Vernunft verdrängt. Das ist keine bloße „Privation" (Augustinus), sondern eine <strong>aktive Verkehrung</strong> der rechten Ordnung.<br><br><strong>Theologische Brisanz:</strong> Gott hat einen dunklen Grund → Gott ist nicht reine Vernunft → das Böse hat seine Wurzel IN GOTT (nicht nur im Menschen). Das war theologisch explosiv — und philosophisch revolutionär: Schelling nimmt die <strong>Tiefenpsychologie</strong> (Freud: Es/Ich/Überich) und die <strong>Existenzphilosophie</strong> (Kierkegaard: Angst) vorweg.</p>' },

        { title: '3. Vergleichen Sie Schellings, Fichtes und Hegels Verständnis des Absoluten.',
          content: '<p class="lz-prose"><strong>Fichte:</strong> Das Absolute ist das <strong>Ich</strong> — die reine Selbsttätigkeit des Bewusstseins, die Tathandlung. Das Absolute ist Subjektivität — Freiheit, die sich selbst setzt. Problem: Die Natur wird zum bloßen Nicht-Ich degradiert.<br><br><strong>Schelling:</strong> Das Absolute ist die <strong>Identität von Natur und Geist</strong> — der Indifferenzpunkt, in dem alle Gegensätze aufgehoben sind. Weder Subjekt noch Objekt, sondern die Einheit beider. Zugang: nicht durch begriffliches Denken, sondern durch <strong>intellektuelle Anschauung</strong> oder <strong>Kunst</strong>.<br><br><strong>Hegel:</strong> Das Absolute ist der <strong>Geist</strong> (Spiritus) — aber nicht als ruhende Substanz, sondern als sich selbst entwickelnder PROZESS. „Das Wahre ist das Ganze" — das Absolute wird erst am Ende seiner Entwicklung (durch alle dialektischen Stufen hindurch) vollständig. Zugang: durch <strong>begriffliches Denken</strong> (Dialektik).<br><br><strong>Kernunterschied:</strong> Fichte: Primat des Subjekts. Schelling: Gleichrangigkeit von Natur und Geist. Hegel: Primat des Begriffs/der Vernunft. Schellings Stärke: Er nimmt die Natur, das Irrationale und die Kunst ernster als Fichte und Hegel. Hegels Stärke: Er hat das konsequenteste System — aber um den Preis, dass alles Irreduzible (das Böse, das Individuelle, das Natürliche) rationalisiert wird.</p>' },

        { title: '4. Warum stellt Schelling die Kunst über die Philosophie? Vergleichen Sie mit Hegel.',
          content: '<p class="lz-prose"><strong>Schellings Argument (System des transzendentalen Idealismus, 1800):</strong> Das Absolute ist die Identität von Natur und Geist, von Bewusstem und Unbewusstem. Die Philosophie kann diese Identität nur <strong>denken</strong> — aber Denken spaltet immer in Subjekt und Objekt. Die <strong>Kunst</strong> kann die Identität <strong>darstellen</strong>: Im genialen Kunstwerk verschmelzen bewusste Absicht (die Technik des Künstlers) und unbewusste Inspiration (die Natur, die durch den Künstler wirkt) zu einer Einheit, die weder rein bewusst noch rein unbewusst ist. Das Kunstwerk zeigt das Absolute — nicht als Begriff, sondern als <strong>Anschauung</strong>.<br><br><strong>Hegels Gegenposition:</strong> Für Hegel ist die Kunst eine <strong>niedrigere</strong> Form der Wahrheitserfassung als die Philosophie. Die Entwicklung geht: Kunst (sinnliche Darstellung) → Religion (Vorstellung) → Philosophie (Begriff). Die Philosophie ist die <strong>höchste</strong> Form, weil nur der Begriff das Absolute adäquat erfassen kann. Die Kunst ist eine „vergangene" Form des Absoluten — sie war angemessen für die Griechen, aber die moderne Welt braucht den Begriff.<br><br><strong>Bewertung:</strong> Schelling betont die <strong>Grenzen der Vernunft</strong> — es gibt Dimensionen der Wirklichkeit, die nur die Kunst, nicht der Begriff erfassen kann. Hegel betont die <strong>Macht der Vernunft</strong> — alles kann begriffen werden. Die Debatte spiegelt eine Grundspannung der Moderne: Können wir die Welt <strong>vollständig</strong> rational durchdringen (Aufklärung, Wissenschaft, Hegel) — oder gibt es einen <strong>irreduziblen Rest</strong> (Romantik, Existenzialismus, Schelling)?</p>' },
      ])}
    </div></section>

    <section class="lz-content-section" style="padding-top:0;"><div class="lz-section-wrap">
      ${renderPageNav({
        prev: { label: 'Hegel', link: `${BASE}/themen/deutscher-idealismus/hegel` },
        next: { label: 'Marx',  link: `${BASE}/themen/19-jahrhundert/marx` },
      }, BASE)}
    </div></section>
    ${footerHTML(this.router)}
    `;
  }
  init() { i18n.init(); initScrollReveal(); refreshScrollReveal(); initInteractive(document); }
  cleanup() {}
}