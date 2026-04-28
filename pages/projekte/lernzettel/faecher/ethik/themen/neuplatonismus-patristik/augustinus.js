// pages/projekte/lernzettel/faecher/ethik/themen/neuplatonismus-patristik/augustinus.js
// ══════════════════════════════════════════════════════════════════
// Kapitel 4.2 — Aurelius Augustinus (354–430)
// Confessiones, Gottesstaat, Willensfreiheit, Theodizee, Zeit
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

const KAP_COLOR = '#a68a5b';
const KAP_COLOR_RGB = '166, 138, 91';

export default class AugustinusPage {
  constructor(router) { this.router = router; }
  render() {
    ensureComponentsCSS();
    loadComponentCSS('pages/projekte/lernzettel/styles/sub.css');
    const el = document.createElement('div');
    el.className = 'page page-augustinus';
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
          <span>Augustinus</span>
        </nav>
        <h1 class="lz-sub-title"><em>Augustinus</em> — Gnade, Wille &amp; Gottesstaat</h1>
        <p class="lz-sub-desc">
          Der wichtigste Kirchenvater des Westens und zugleich einer der bedeutendsten
          Philosophen der Spätantike: Augustinus verband neuplatonisches Denken mit
          christlichem Glauben und schuf damit die Grundlagen der abendländischen
          Theologie und Philosophie.
        </p>
        ${renderTags(['Kapitel 4.2', '354–430 n. Chr.', 'Thagaste · Karthago · Mailand · Hippo', 'Confessiones · De civitate Dei · Willensfreiheit', 'Abitur 2026'])}
      </div>
    </section>


    <section class="lz-content-section">
      <div class="lz-section-wrap">
        ${renderSubhead('Biographisches')}
        <h2 class="lz-h2 reveal">Vom Rhetoriker zum <em>Kirchenvater</em></h2>

        <p class="lz-prose reveal">
          Aurelius Augustinus (354–430) wurde in <strong>Thagaste</strong> (Numidien, heute Algerien)
          geboren. Seine Mutter <strong>Monica</strong> war Christin, sein Vater Patricius Heide.
          Augustinus' Leben ist ein Drama der <strong>Bekehrung</strong>: Von einer Jugend
          voller Ehrgeiz, Sinnenlust und intellektueller Irrwege (Manichäismus, Skeptizismus)
          zur Taufe durch Bischof <strong>Ambrosius</strong> in Mailand (387) und schließlich
          zum Bischofsamt in Hippo Regius (Nordafrika).
        </p>

        ${renderVTimeline([
          { year: '354', title: 'Geburt in Thagaste', text: 'Nordafrika; Sohn der Christin Monica und des Heiden Patricius' },
          { year: '373', title: 'Manichäer (9 Jahre)', text: 'Anhänger des Manichäismus — dualistisches Welterklärungsmodell (Gut vs. Böse)' },
          { year: '383', title: 'Skeptische Phase', text: 'Enttäuscht vom Manichäismus; Hinwendung zur akademischen Skepsis' },
          { year: '384', title: 'Rhetoriker in Mailand', text: 'Begegnung mit Ambrosius; Lektüre der „Bücher der Platoniker" (Plotin/Porphyrios)' },
          { year: '386', title: '„Tolle, lege" — Bekehrungserlebnis', text: 'Im Garten in Mailand hört er eine Kinderstimme: „Nimm und lies." Öffnet Paulus (Röm 13,13): sofortige innere Wandlung' },
          { year: '387', title: 'Taufe durch Ambrosius', text: 'Osternacht in Mailand; Monicas Lebenswerk erfüllt' },
          { year: '395', title: 'Bischof von Hippo Regius', text: 'Nordafrika; 35 Jahre lang Bischof, Prediger, Theologe, Kirchenpolitiker' },
          { year: '397–400', title: 'Confessiones', text: 'Autobiographische Bekenntnisse — das erste psychologische Selbstporträt der Weltliteratur' },
          { year: '413–426', title: 'De civitate Dei', text: 'Geschichtstheologie in 22 Büchern — Antwort auf den Fall Roms (410)' },
          { year: '430', title: 'Tod in Hippo', text: 'Stirbt während der Belagerung durch die Vandalen' },
        ])}

        ${renderInfobox({
          type: '', icon: 'fas fa-info-circle',
          title: 'Die Confessiones als philosophisches Werk',
          body: 'Die <em>Confessiones</em> (Bekenntnisse) sind nicht bloß Autobiographie: Bücher I–IX erzählen Augustinus\' Lebensweg, Buch X analysiert die <strong>Theorie des Gedächtnisses</strong>, Buch XI enthält die berühmte <strong>Zeitanalyse</strong>, Bücher XII–XIII interpretieren die Genesis. Es ist zugleich Gebet, Philosophie und Psychologie — das erste Werk der westlichen Tradition, das die <strong>Innerlichkeit</strong> des Subjekts systematisch erforscht.'
        })}
      </div>
    </section>


    <section class="lz-content-section">
      <div class="lz-section-wrap">
        ${renderSubhead('Philosophie der Innerlichkeit')}
        <h2 class="lz-h2 reveal">„Geh nicht nach draußen — <em>in dich selbst</em> kehre zurück"</h2>

        <p class="lz-prose reveal">
          Augustinus übernahm von Plotin die Idee des <strong>Aufstiegs der Seele</strong>,
          wandelte sie aber fundamental um: Nicht die Flucht aus dem Körper in eine höhere
          Welt, sondern die <strong>Einkehr in das eigene Innere</strong> ist der Weg zu Gott.
          Gott ist nicht „draußen" in der Natur oder „oben" in einer Ideenwelt, sondern
          <strong>intimior intimo meo</strong> — „innerlicher als mein Innerstes".
        </p>

        ${renderFormulaBox({
          label: 'Augustinus, De vera religione 39, 72',
          formula: '„Noli foras ire, in te ipsum redi.<br>In interiore homine habitat veritas."<br>(Geh nicht nach draußen, in dich selbst kehre zurück.<br>Im inneren Menschen wohnt die Wahrheit.)',
          desc: 'Programmatischer Satz der augustinischen Innerlichkeitsphilosophie. Vorgriff auf Descartes\' Cogito und die gesamte Bewusstseinsphilosophie der Neuzeit.'
        })}

        ${renderMerkboxGrid([
          { icon: 'fas fa-brain', title: 'Cogito-Argument (vor Descartes!)',
            text: '„Si fallor, sum" — Wenn ich mich irre, bin ich (De civitate Dei XI, 26). Selbst im Irrtum bin ich mir meiner Existenz gewiss. Augustinus formuliert das Cogito-Argument 1200 Jahre vor Descartes — allerdings nicht als Fundament einer Wissenschaftstheorie, sondern als Beweis der Seele gegen die Skeptiker.' },
          { icon: 'fas fa-lightbulb', title: 'Illuminationstheorie',
            text: 'Wie erkennt der endliche Geist ewige Wahrheiten (z.B. 2+2=4)? Nicht durch Sinneserfahrung (die zeigt nur Vergängliches), nicht durch Anamnesis (Platon), sondern durch göttliche Erleuchtung (illuminatio): Gott „beleuchtet" den menschlichen Geist, sodass er ewige Wahrheiten erfassen kann — wie die Sonne die Dinge sichtbar macht.' },
          { icon: 'fas fa-heart', title: 'Voluntarismus',
            text: 'Der Wille (voluntas) ist für Augustinus wichtiger als der Verstand (intellectus). Der Mensch ist nicht primär ein denkendes Wesen (Aristoteles), sondern ein wollendes und liebendes Wesen. „Amor meus, pondus meum" — Meine Liebe ist mein Gewicht; sie zieht mich, wohin ich auch gehe.' },
        ])}
      </div>
    </section>


    <section class="lz-content-section">
      <div class="lz-section-wrap">
        ${renderSubhead('Das Problem des Bösen — Theodizee')}
        <h2 class="lz-h2 reveal"><em>Privatio boni</em> — Das Böse als Mangel an Gutem</h2>

        <p class="lz-prose reveal">
          Das <strong>Theodizee-Problem</strong> (Wie kann ein guter, allmächtiger Gott das Böse zulassen?)
          war für Augustinus das zentrale philosophische Problem. Als junger Mann hatte er sich den
          <strong>Manichäern</strong> angeschlossen, die eine einfache Lösung anboten: Es gibt
          zwei gleich mächtige Prinzipien — ein Gutes (Licht) und ein Böses (Finsternis). Augustinus
          verwarf diese Lösung und fand bei Plotin eine Alternative:
        </p>

        ${renderMerkboxGrid([
          { icon: 'fas fa-minus-circle', title: 'Privatio boni (Mangel an Gutem)',
            text: 'Das Böse ist kein eigenständiges Wesen, keine eigene Substanz, keine eigene Kraft. Es ist die Abwesenheit des Guten — wie Dunkelheit Abwesenheit von Licht ist, wie Krankheit Abwesenheit von Gesundheit. Gott hat das Böse nicht geschaffen — es „existiert" nur als Defekt, als Lücke im Guten.' },
          { icon: 'fas fa-hand-pointer', title: 'Freier Wille als Ursache',
            text: 'Warum gibt es dann überhaupt Böses? Weil Gott dem Menschen einen freien Willen (liberum arbitrium) gegeben hat. Der Mensch kann sich frei für oder gegen Gott entscheiden. Das moralische Böse (Sünde) ist Folge einer freien Willensentscheidung — die Abwendung (aversio) von Gott hin zu den vergänglichen Gütern (conversio ad creaturas).' },
          { icon: 'fas fa-apple-alt', title: 'Erbsünde (peccatum originale)',
            text: 'Adams Sünde hat die gesamte Menschheit „verdorben": Seit dem Sündenfall ist der menschliche Wille geschwächt — er neigt zum Bösen, auch wenn er das Gute erkennt. Der Mensch kann sich aus eigener Kraft nicht retten — er braucht göttliche Gnade (gratia). Paulus: „Das Gute, das ich will, tue ich nicht" (Röm 7,19).' },
          { icon: 'fas fa-gift', title: 'Gnadenlehre',
            text: 'Nur die göttliche Gnade (gratia) kann den gefallenen Willen heilen und den Menschen zum Guten befähigen. Gnade ist unverdient — Gott schenkt sie, wem er will (Prädestination). Gegen Pelagius, der behauptete, der Mensch könne aus eigener Kraft tugendhaft sein. Kontroverse, die bis zur Reformation wirkt (Luther, Calvin).' },
        ])}

        ${renderCompare({
          titleA: 'Manichäismus (Dualismus)',
          titleB: 'Augustinus (Privatio boni)',
          listA: [
            'Zwei gleichmächtige Prinzipien: Gut und Böse',
            'Das Böse ist eine <strong>eigene Substanz</strong>',
            'Materie = böse, Geist = gut',
            'Der Mensch ist <strong>Schlachtfeld</strong> zweier kosmischer Mächte',
            'Erlösung durch <strong>Erkenntnis</strong> (Gnosis)',
          ],
          listB: [
            'Nur ein Prinzip: Gott (das Gute)',
            'Das Böse ist <strong>kein Wesen</strong>, sondern Mangel an Gutem',
            'Materie ist von Gott geschaffen und gut',
            'Der Mensch ist <strong>frei verantwortlich</strong> für seine Abkehr von Gott',
            'Erlösung durch <strong>Gnade</strong> (gratia)',
          ],
        })}

        ${renderInfobox({
          type: 'blue', icon: 'fas fa-graduation-cap',
          title: 'Abitur-Hinweis: Theodizee',
          body: 'Die Theodizee-Frage ist ein <strong>Dauerthema</strong> im Ethik-Abitur. Augustinus\' Antwort kombiniert zwei Elemente: (1) <strong>Metaphysisch:</strong> Das Böse ist kein Wesen, sondern Mangel (Plotin). (2) <strong>Ethisch:</strong> Das moralische Böse ist Folge der menschlichen Willensfreiheit. <strong>Problem:</strong> Erklärt das die „natürlichen Übel" (Erdbeben, Krankheit, Kindstod)? Augustinus verweist auf die Erbsünde — die gesamte Schöpfung ist durch Adams Fall in Mitleidenschaft gezogen. Ob das überzeugt, ist eine offene Frage.'
        })}
      </div>
    </section>


    <section class="lz-content-section">
      <div class="lz-section-wrap">
        ${renderSubhead('Die Zeitanalyse (Confessiones XI)')}
        <h2 class="lz-h2 reveal">Was ist <em>Zeit</em>?</h2>

        ${renderFormulaBox({
          label: 'Augustinus, Confessiones XI, 14',
          formula: '„Was also ist die Zeit?<br>Wenn mich niemand fragt, weiß ich es;<br>will ich es aber einem Fragenden erklären,<br>weiß ich es nicht."',
          desc: 'Der berühmteste Satz der Zeitphilosophie — die Spannung zwischen intuitiver Vertrautheit und begrifflicher Unfassbarkeit der Zeit.'
        })}

        <p class="lz-prose reveal">
          Augustinus analysiert: Die Vergangenheit existiert nicht mehr, die Zukunft existiert noch
          nicht, die Gegenwart ist ein ausdehnungsloser Punkt. Wo also „ist" die Zeit? Seine
          revolutionäre Antwort: <strong>Die Zeit existiert in der Seele</strong> — als
          <strong>distentio animi</strong> (Ausspannung des Geistes):
        </p>

        ${renderTable({
          headers: ['Zeitdimension', 'Existiert als…', 'Seelische Funktion'],
          rows: [
            ['<strong>Vergangenheit</strong>', 'Gegenwart des Vergangenen', '<strong>Erinnerung</strong> (memoria)'],
            ['<strong>Gegenwart</strong>',     'Gegenwart des Gegenwärtigen', '<strong>Anschauung</strong> (contuitus)'],
            ['<strong>Zukunft</strong>',        'Gegenwart des Zukünftigen',  '<strong>Erwartung</strong> (expectatio)'],
          ],
          highlight: [],
        })}

        <p class="lz-prose reveal">
          Zeit ist keine objektive Eigenschaft der Welt „da draußen" (wie bei Aristoteles:
          „Maß der Bewegung"), sondern eine <strong>Tätigkeit des Geistes</strong>, der
          Erinnerung, Aufmerksamkeit und Erwartung miteinander verbindet. Die Seele „spannt
          sich aus" (distenditur) zwischen Vergangenheit und Zukunft — und genau diese
          Ausspannung IST die Zeit, die wir erleben.
        </p>

        ${renderInfobox({
          type: 'success', icon: 'fas fa-link',
          title: 'Wirkungsgeschichte der Zeitanalyse',
          body: 'Augustinus\' Zeittheorie inspirierte: <strong>Husserl</strong> (Phänomenologie des inneren Zeitbewusstseins), <strong>Heidegger</strong> (Zeitlichkeit als Grundstruktur des Daseins, <em>Sein und Zeit</em>), <strong>Ricœur</strong> (<em>Zeit und Erzählung</em>: Zeit wird nur durch narrative Strukturierung verständlich), <strong>Wittgenstein</strong> (Zeit als Sprachproblem). Sie ist eine der folgenreichsten philosophischen Analysen überhaupt.'
        })}
      </div>
    </section>


    <section class="lz-content-section">
      <div class="lz-section-wrap">
        ${renderSubhead('De civitate Dei — Der Gottesstaat')}
        <h2 class="lz-h2 reveal">Zwei <em>Bürgerrechte</em></h2>

        <p class="lz-prose reveal">
          Nach der Plünderung Roms durch die Westgoten (410) beschuldigten Heiden
          die Christen: Das Verbot der alten Götterkulte habe Rom schutzlos gemacht.
          Augustinus antwortete mit dem monumentalen Werk <em>De civitate Dei</em>
          (Über den Gottesstaat, 22 Bücher, 413–426):
        </p>

        ${renderCompare({
          titleA: 'Civitas Dei (Gottesstaat)',
          titleB: 'Civitas terrena (Irdischer Staat)',
          listA: [
            'Gründung: <strong>Gottesliebe</strong> (amor Dei)',
            'Ziel: ewiges Heil',
            'Gerechtigkeit nach göttlichem Maßstab',
            'Bürger: die Erwählten (Gnade)',
            'Symbol: Jerusalem, Abel, die Kirche',
            'Endziel: <strong>Ewiger Friede in Gott</strong>',
          ],
          listB: [
            'Gründung: <strong>Selbstliebe</strong> (amor sui)',
            'Ziel: irdische Macht und Genuss',
            'Gerechtigkeit nach menschlichem Maßstab',
            'Bürger: die Verworfenen (Sünde)',
            'Symbol: Babylon, Kain, das Römische Reich',
            'Endziel: <strong>Ewige Verdammnis</strong>',
          ],
        })}

        <p class="lz-prose reveal">
          Wichtig: Die beiden Staaten sind <strong>keine sichtbaren Institutionen</strong>
          (nicht: Kirche = Gottesstaat, Staat = irdischer Staat). Sie durchdringen einander
          in der Geschichte — nur Gott kennt die Zugehörigkeit jedes Einzelnen.
          Augustinus begründet damit eine <strong>lineare Geschichtsphilosophie</strong>:
          Die Geschichte ist kein ewiger Kreislauf (griechisch), sondern ein
          <strong>gerichteter Prozess</strong> von der Schöpfung über den Sündenfall
          zur Erlösung zum Jüngsten Gericht.
        </p>
      </div>
    </section>


    <section class="lz-content-section">
      <div class="lz-section-wrap">
        ${renderSubhead('Testfragen — Abiturniveau')}
        ${renderAccordion([
          { title: '1. Erläutern Sie Augustinus\' Lösung des Theodizee-Problems (privatio boni + Willensfreiheit).',
            content: '<p class="lz-prose">Augustinus löst das Theodizee-Problem auf zwei Ebenen:<br><br><strong>Metaphysisch (privatio boni):</strong> Das Böse ist keine eigenständige Substanz, sondern <strong>Mangel an Gutem</strong> — wie Dunkelheit Abwesenheit von Licht. Gott hat das Böse nicht geschaffen, denn alles von Gott Geschaffene ist gut. Das Böse „existiert" nur als Defekt, als Lücke im Guten.<br><br><strong>Ethisch (liberum arbitrium):</strong> Das moralische Böse (Sünde) ist Folge des <strong>freien Willens</strong>, den Gott dem Menschen geschenkt hat. Der Mensch kann sich frei von Gott abwenden (aversio a Deo) und sich den vergänglichen Gütern zuwenden (conversio ad creaturas). Die Willensfreiheit ist ein Gut — auch wenn sie missbraucht werden kann.<br><br><strong>Problem:</strong> Erklärt die natürlichen Übel (Erdbeben, Krankheit, Kindstod) nicht überzeugend. Augustinus verweist auf die <strong>Erbsünde</strong>: Durch Adams Fall ist die gesamte Schöpfung korrumpiert. Ob das eine befriedigende Antwort ist, bleibt philosophisch umstritten (Leibniz, Voltaire, Jonas).</p>' },

          { title: '2. Vergleichen Sie Augustinus\' Innerlichkeitsphilosophie mit Plotins Aufstiegslehre.',
            content: '<p class="lz-prose"><strong>Gemeinsamkeit:</strong> Beide beschreiben einen <strong>Aufstieg der Seele</strong> von der Sinnenwelt zu einem höchsten Prinzip. Beide betonen, dass wahre Erkenntnis nicht „draußen" (in der Sinneswelt), sondern „innen" (im Geist) zu finden ist.<br><br><strong>Unterschied 1 — Richtung:</strong> Plotin: Aufstieg <strong>über</strong> die Seele hinaus — zum Nous und schließlich zum Einen (Ékstasis = Heraustreten aus sich). Augustinus: Einkehr <strong>in</strong> die Seele — und dort Gott finden, der „innerlicher als mein Innerstes" ist. Nicht Ékstasis, sondern Introspektion.<br><br><strong>Unterschied 2 — Gnade vs. eigene Kraft:</strong> Plotin: Der Aufstieg gelingt durch eigene philosophische Anstrengung. Augustinus: Der Aufstieg gelingt nur mit göttlicher <strong>Gnade</strong> — der Mensch kann sich nicht aus eigener Kraft zu Gott erheben.<br><br><strong>Unterschied 3 — Person:</strong> Plotins Eines ist unpersönlich, jenseits von Willen und Wissen. Augustinus\' Gott ist <strong>Person</strong> — er denkt, will, liebt, spricht, ruft den Menschen beim Namen.<br><br><strong>Unterschied 4 — Schöpfung:</strong> Plotin: Emanation (notwendig, ewig). Augustinus: creatio ex nihilo (frei, zeitlich). Die Welt ist nicht Ausfluss Gottes, sondern sein Werk — von ihm wesensverschieden.</p>' },

          { title: '3. Analysieren Sie Augustinus\' Zeittheorie (Confessiones XI). Was ist revolutionär daran?',
            content: '<p class="lz-prose"><strong>Das Problem:</strong> Vergangenheit existiert nicht mehr, Zukunft noch nicht, Gegenwart ist ausdehnungsloser Punkt. Wo „ist" also die Zeit?<br><br><strong>Augustinus\' Lösung — distentio animi:</strong> Die Zeit existiert <strong>in der Seele</strong> als dreifache Gegenwart: (1) Erinnerung (memoria) = Gegenwart des Vergangenen. (2) Anschauung (contuitus) = Gegenwart des Gegenwärtigen. (3) Erwartung (expectatio) = Gegenwart des Zukünftigen.<br><br>Die Seele „spannt sich aus" (distenditur) zwischen Erinnerung und Erwartung — diese Ausspannung IST die erlebte Zeit. Zeit ist keine objektive Eigenschaft der äußeren Welt, sondern eine <strong>Tätigkeit des Geistes</strong>.<br><br><strong>Das Revolutionäre:</strong> (1) <strong>Subjektivierung der Zeit:</strong> Vor Augustinus war Zeit eine kosmische Größe (Aristoteles: Maß der Bewegung). Augustinus verlegt sie ins Subjekt — Vorläufer von Kants „transzendentaler Ästhetik" (Zeit als Anschauungsform des Subjekts). (2) <strong>Psychologische Analyse:</strong> Augustinus beschreibt die Zeiterfahrung phänomenologisch — wie wir Zeit tatsächlich erleben (nicht was sie „an sich" ist). Vorläufer von Husserls Zeitphänomenologie. (3) <strong>Narrative Identität:</strong> Wenn die Zeit in der Seele existiert, dann ist das Ich ein <strong>zeitliches Wesen</strong> — es konstituiert sich durch die Verbindung von Erinnerung, Gegenwart und Erwartung. Vorläufer von Ricœurs Theorie der narrativen Identität.</p>' },

          { title: '4. Erklären Sie die Zwei-Staaten-Lehre und ihre geschichtsphilosophische Bedeutung.',
            content: '<p class="lz-prose"><strong>Die zwei Staaten:</strong> Die civitas Dei (Gottesstaat) wird durch Gottesliebe (amor Dei usque ad contemptum sui) begründet; die civitas terrena (irdischer Staat) durch Selbstliebe (amor sui usque ad contemptum Dei). Beide sind keine sichtbaren Institutionen, sondern <strong>geistliche Gemeinschaften</strong>, die sich in der Geschichte durchdringen.<br><br><strong>Geschichtsphilosophische Bedeutung:</strong> (1) <strong>Lineares Geschichtsbild:</strong> Gegen die griechische Vorstellung ewiger Zyklen stellt Augustinus ein <strong>gerichtetes</strong> Geschichtsmodell: Schöpfung → Sündenfall → Offenbarung → Erlösung → Jüngstes Gericht. Geschichte hat ein Ziel (télos). (2) <strong>Relativierung der Politik:</strong> Kein irdisches Reich — nicht einmal Rom — ist der Gottesstaat. Alle irdischen Ordnungen sind vorläufig und mangelhaft. Das entzieht politischer Macht den Absolutheitsanspruch. (3) <strong>Wirkungsgeschichte:</strong> Augustinus begründet die mittelalterliche Unterscheidung von geistlicher und weltlicher Gewalt (Zwei-Schwerter-Lehre). Hegel, Marx und Löwith sehen in Augustinus den Begründer der abendländischen Geschichtsphilosophie — Marx\' klassenlose Gesellschaft sei ein säkularisierter Gottesstaat.</p>' },
        ])}
      </div>
    </section>

    <section class="lz-content-section" style="padding-top:0;">
      <div class="lz-section-wrap">
        ${renderPageNav({
          prev: { label: 'Plotin',                   link: `${BASE}/themen/neuplatonismus-patristik/plotin` },
          next: { label: 'Anselm von Canterbury',     link: `${BASE}/themen/mittelalter/anselm` },
        }, BASE)}
      </div>
    </section>
    ${footerHTML(this.router)}
    `;
  }
  init() { i18n.init(); initScrollReveal(); refreshScrollReveal(); initInteractive(document); }
  cleanup() {}
}