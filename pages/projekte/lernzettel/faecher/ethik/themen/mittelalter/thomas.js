// pages/projekte/lernzettel/faecher/ethik/themen/mittelalter/thomas.js
// ══════════════════════════════════════════════════════════════════
// Kapitel 5.4 — Thomas von Aquin (1225–1274)
// Aristotelesrezeption, Fünf Wege, Seinspyramide, Ethik, Synthese
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

const KAP_COLOR = '#8b4557';
const KAP_COLOR_RGB = '139, 69, 87';

export default class ThomasPage {
  constructor(router) { this.router = router; }
  render() {
    ensureComponentsCSS();
    loadComponentCSS('pages/projekte/lernzettel/styles/sub.css');
    const el = document.createElement('div');
    el.className = 'page page-thomas';
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
          <span>Thomas von Aquin</span>
        </nav>
        <h1 class="lz-sub-title"><em>Thomas</em> von Aquin — Der Meister der Synthese</h1>
        <p class="lz-sub-desc">
          Der „Doctor Angelicus" vereinte Aristoteles mit dem christlichen Glauben
          und schuf das umfassendste philosophisch-theologische System des
          Mittelalters — ein Denkgebäude, das bis heute die offizielle
          Philosophie der katholischen Kirche prägt.
        </p>
        ${renderTags(['Kapitel 5.4', '1225–1274', 'Roccasecca · Paris · Neapel · Köln', 'Summa Theologiae · Fünf Wege · Naturrecht', 'Abitur 2026'])}
      </div>
    </section>


    <section class="lz-content-section">
      <div class="lz-section-wrap">
        ${renderSubhead('Biographisches')}
        <h2 class="lz-h2 reveal">Der „stumme Ochse", der die Welt <em>zum Staunen</em> brachte</h2>

        <p class="lz-prose reveal">
          Thomas wurde 1225 auf der Burg <strong>Roccasecca</strong> bei Aquino (Süditalien)
          als Sohn des Grafen Landulf geboren. Die Familie bestimmte ihn für eine glanzvolle
          kirchliche Karriere als Abt des reichen Klosters Monte Cassino. Doch Thomas schloss
          sich dem jungen <strong>Dominikanerorden</strong> an — einem Bettelorden, was die
          Familie so empörte, dass seine Brüder ihn ein Jahr lang auf der Familienburg
          einsperrten. Thomas blieb standhaft.
        </p>

        ${renderVTimeline([
          { year: '1225', title: 'Geburt in Roccasecca', text: 'Adelsfamilie; mit 5 Jahren nach Monte Cassino geschickt' },
          { year: '1239–44', title: 'Studium in Neapel', text: 'Erste Begegnung mit Aristoteles\' Schriften; tritt den Dominikanern bei' },
          { year: '1245–48', title: 'Studium in Paris und Köln', text: 'Schüler des Albertus Magnus — „der stumme Ochse, der die ganze Welt mit seinem Brüllen erfüllen wird"' },
          { year: '1256', title: 'Magister in Paris', text: 'Lehrstuhl für Theologie; erste Summa: Summa contra Gentiles' },
          { year: '1265–73', title: 'Summa Theologiae', text: 'Sein Hauptwerk — unvollendet; ca. 3.000 Artikel, 10.000 Einwände, 10.000 Antworten' },
          { year: '1273', title: 'Mystisches Erlebnis', text: '„Alles, was ich geschrieben habe, kommt mir vor wie Stroh." Legt die Feder nieder und schreibt nie wieder.' },
          { year: '1274', title: 'Tod auf dem Weg zum Konzil', text: 'Stirbt in Fossanova; 1323 heiliggesprochen; 1567 zum Kirchenlehrer erhoben' },
        ])}
      </div>
    </section>


    <section class="lz-content-section">
      <div class="lz-section-wrap">
        ${renderSubhead('Aristotelesrezeption')}
        <h2 class="lz-h2 reveal">Die <em>große Synthese</em> — Aristoteles trifft Christentum</h2>

        <p class="lz-prose reveal">
          Die Wiederentdeckung der Schriften des <strong>Aristoteles</strong> im 12./13.&nbsp;Jahrhundert
          (über arabische Vermittlung: Avicenna, Averroes) löste eine intellektuelle Krise aus:
          Aristoteles lehrte die Ewigkeit der Welt, die Sterblichkeit der Individualseele und
          eine rein diesseitige Ethik — alles im Widerspruch zum christlichen Glauben.
          Viele Theologen forderten ein Aristoteles-Verbot. Thomas wählte den gegenteiligen Weg:
          Er integrierte Aristoteles in die christliche Theologie und schuf damit die
          größte philosophische Synthese des Mittelalters.
        </p>

        ${renderCompare({
          titleA: 'Augustinus-Tradition (Platonismus)',
          titleB: 'Thomas\' Innovation (Aristotelismus)',
          listA: [
            'Erkenntnis durch <strong>göttliche Erleuchtung</strong>',
            'Sinne sind <strong>unzuverlässig</strong>',
            'Materie = mangelhaft, Quelle des Bösen',
            'Vernunft ist <strong>Dienerin</strong> des Glaubens',
            'Natur weist auf <strong>Jenseits</strong> hin',
            'Platon/Plotin als philosophische Grundlage',
          ],
          listB: [
            'Erkenntnis beginnt bei der <strong>Sinneserfahrung</strong>',
            'Sinne sind <strong>zuverlässig</strong> (in ihrem Bereich)',
            'Materie ist <strong>gut</strong> (von Gott geschaffen)',
            'Vernunft ist <strong>eigenständig</strong> (in ihrem Bereich)',
            'Natur hat <strong>Eigenwert</strong>',
            '<strong>Aristoteles</strong> als philosophische Grundlage',
          ],
        })}

        ${renderInfobox({
          type: '', icon: 'fas fa-info-circle',
          title: 'Glaube und Vernunft — Zwei Erkenntnisquellen',
          body: 'Thomas unterscheidet zwei Erkenntnisquellen: <strong>Vernunft</strong> (ratio) und <strong>Offenbarung</strong> (revelatio). Beide stammen von Gott und können sich daher nicht widersprechen. Die Vernunft kann vieles über Gott erkennen (Existenz, Einheit, Güte) — aber nicht alles (Trinität, Menschwerdung, Auferstehung = Glaubensgeheimnisse). Philosophie und Theologie sind <strong>autonome Disziplinen</strong> mit verschiedenen Methoden, aber sie konvergieren in der Wahrheit.'
        })}
      </div>
    </section>


    <section class="lz-content-section">
      <div class="lz-section-wrap">
        ${renderSubhead('Die Fünf Wege (Quinque Viae)')}
        <h2 class="lz-h2 reveal">Fünf <em>Gottesbeweise</em> a posteriori</h2>

        <p class="lz-prose reveal">
          Thomas lehnte Anselms ontologischen Beweis ab (wir kennen Gottes Wesen nicht
          genügend, um von der Definition auf die Existenz zu schließen). Stattdessen
          bietet er fünf Wege (viae), die <strong>von der Erfahrung ausgehen</strong>
          und auf Gott als letzte Ursache schließen:
        </p>

        ${renderTable({
          headers: ['Weg', 'Ausgang', 'Argument', 'Ergebnis'],
          rows: [
            ['<strong>1. Bewegung</strong>', 'In der Welt gibt es Bewegung', 'Alles Bewegte wird von anderem bewegt. Keine unendliche Kette → erster unbewegter Beweger', 'Gott als <strong>Erster Beweger</strong> (primus motor)'],
            ['<strong>2. Wirkursache</strong>', 'Es gibt Ursache-Wirkungs-Ketten', 'Keine Sache ist Ursache ihrer selbst. Keine unendliche Kette → erste Ursache', 'Gott als <strong>Erste Ursache</strong> (causa prima)'],
            ['<strong>3. Kontingenz</strong>', 'Dinge können sein oder nicht sein', 'Wenn alles kontingent wäre, gäbe es irgendwann nichts mehr. Aber es gibt etwas → notwendiges Wesen', 'Gott als <strong>Notwendiges Wesen</strong> (ens necessarium)'],
            ['<strong>4. Stufung</strong>', 'Es gibt Grade der Vollkommenheit', 'Mehr und weniger setzen ein Maximum voraus (wie Wärme ein heißestes Ding)', 'Gott als <strong>Höchstes Wesen</strong> (maxime ens)'],
            ['<strong>5. Zweckmäßigkeit</strong>', 'Naturwesen handeln zweckmäßig', 'Vernunftlose Wesen können nicht selbst auf Ziele ausgerichtet sein → intelligenter Lenker', 'Gott als <strong>Weltlenker</strong> (gubernator mundi)'],
          ],
          highlight: [2],
        })}

        ${renderInfobox({
          type: 'blue', icon: 'fas fa-graduation-cap',
          title: 'Abitur-Hinweis: Die Fünf Wege',
          body: 'Die Fünf Wege sind ein <strong>Standardthema</strong>. Wichtig: (1) Sie sind <strong>a posteriori</strong> — von der Erfahrung ausgehend (nicht wie Anselm a priori vom Begriff). (2) Sie beweisen nicht den christlichen Gott, sondern ein „erstes Prinzip" — Thomas identifiziert es dann mit dem Gott der Bibel. (3) <strong>Kant</strong> wird alle fünf Wege in der KrV kritisieren: Der kosmologische Beweis (Weg 1–3) setzt den ontologischen heimlich voraus; der teleologische (Weg 5) beweist höchstens einen „Weltbaumeister", keinen Schöpfer.'
        })}
      </div>
    </section>


    <section class="lz-content-section">
      <div class="lz-section-wrap">
        ${renderSubhead('Seinspyramide — Die Ordnung des Seienden')}
        <h2 class="lz-h2 reveal">Vom <em>Stein</em> zu <em>Gott</em></h2>

        <p class="lz-prose reveal">
          Thomas entwirft eine hierarchische <strong>Seinsordnung</strong> (ordo entium),
          in der alles Seiende seinen Platz hat — von der unbelebten Materie bis zu Gott:
        </p>

        ${renderTable({
          headers: ['Stufe', 'Wesen', 'Seinsform', 'Erkenntnis'],
          rows: [
            ['<strong>6. Gott</strong>',        'Actus purus (reine Wirklichkeit)', 'Ipsum esse subsistens (das Sein selbst)',  'Vollkommene Selbsterkenntnis'],
            ['<strong>5. Engel</strong>',        'Reine Geistwesen',                 'Form ohne Materie',                       'Direkte Ideenschau'],
            ['<strong>4. Mensch</strong>',       'Leib-Seele-Einheit',               'Form + Materie',                          'Sinneserfahrung + Abstraktion'],
            ['<strong>3. Tiere</strong>',        'Sinnlich wahrnehmende Wesen',       'Sensitive Seele',                         'Sinneswahrnehmung'],
            ['<strong>2. Pflanzen</strong>',     'Wachsende Wesen',                   'Vegetative Seele',                        'Keine Erkenntnis'],
            ['<strong>1. Unbelebte Dinge</strong>','Steine, Elemente',                'Nur Substanzform',                        'Keine Seele'],
          ],
          highlight: [0, 3],
        })}

        ${renderMerkboxGrid([
          { icon: 'fas fa-user', title: 'Der Mensch als „Grenzwesen"',
            text: 'Der Mensch nimmt eine einzigartige Stellung ein: Er gehört zur materiellen Welt (Körper) UND zur geistigen Welt (Vernunftseele). Er ist die Brücke zwischen beiden — „horizon et confinium" (Grenze und Berührungspunkt) zwischen Körper und Geist.' },
          { icon: 'fas fa-infinity', title: 'Actus purus — Gott als reines Sein',
            text: 'Gott ist „reine Wirklichkeit" (actus purus) — ohne jede Möglichkeit (potentia), die noch nicht verwirklicht wäre. Er ist das Sein selbst (ipsum esse subsistens), nicht ein Seiendes unter anderen. In Gott fallen Wesen (essentia) und Sein (esse) zusammen — bei allen anderen Wesen sind sie getrennt.' },
        ])}
      </div>
    </section>


    <section class="lz-content-section">
      <div class="lz-section-wrap">
        ${renderSubhead('Ethik — Naturrecht und Glückseligkeit')}
        <h2 class="lz-h2 reveal"><em>Lex naturalis</em> — Das natürliche Sittengesetz</h2>

        <p class="lz-prose reveal">
          Thomas' Ethik verbindet <strong>Aristoteles' Tugendethik</strong> mit einer
          <strong>Naturrechtslehre</strong>: Es gibt ein natürliches Sittengesetz
          (lex naturalis), das die menschliche Vernunft aus der menschlichen Natur
          ablesen kann — unabhängig von Offenbarung und positiver Gesetzgebung.
        </p>

        ${renderTable({
          headers: ['Gesetzesebene', 'Quelle', 'Inhalt', 'Erkennbar durch'],
          rows: [
            ['<strong>Lex aeterna</strong>', 'Gottes ewiger Weltenplan', 'Die gesamte Ordnung des Kosmos', 'Nur Gott selbst vollständig'],
            ['<strong>Lex naturalis</strong>', 'Teilhabe des Menschen an lex aeterna', 'Grundprinzipien: Tue das Gute, meide das Böse', 'Natürliche Vernunft (ratio)'],
            ['<strong>Lex humana</strong>', 'Menschliche Gesetzgebung', 'Konkretisierung des Naturrechts für die Gesellschaft', 'Gesetzgeber (legislator)'],
            ['<strong>Lex divina</strong>', 'Göttliche Offenbarung (Bibel)', 'Übernatürliche Ergänzung (z.B. Sakramente)', 'Glaube (fides)'],
          ],
          highlight: [1],
        })}

        ${renderMerkboxGrid([
          { icon: 'fas fa-compass', title: 'Erstes Naturrechtsprinzip',
            text: '„Bonum est faciendum et prosequendum, et malum est vitandum" — Das Gute ist zu tun und zu erstreben, das Böse ist zu meiden (S.Th. I-II, q.94, a.2). Dieses Prinzip ist selbstevident — es kann nicht bewiesen, aber auch nicht geleugnet werden. Alle konkreteren Normen leiten sich daraus ab.' },
          { icon: 'fas fa-layer-group', title: 'Drei Neigungsgruppen',
            text: '(1) Selbsterhaltung (wie alle Substanzen). (2) Arterhaltung und Kindererziehung (wie alle Tiere). (3) Wahrheitserkenntnis und Gemeinschaftsleben (spezifisch menschlich). Aus diesen natürlichen Neigungen leitet Thomas konkrete Pflichten ab: Verbot der Tötung, Pflicht zur Kindererziehung, Pflicht zur Wahrheitssuche.' },
          { icon: 'fas fa-gavel', title: 'Widerstandsrecht',
            text: '„Lex iniusta non est lex" — ein ungerechtes Gesetz ist kein Gesetz (im moralischen Sinn). Wenn die lex humana dem Naturrecht widerspricht, ist der Bürger nicht zum Gehorsam verpflichtet. Thomas begründet damit ein begrenztes Widerstandsrecht — ein Gedanke, den Locke und die amerikanische Unabhängigkeitserklärung aufgreifen werden.' },
          { icon: 'fas fa-star', title: 'Beatitudo — Glückseligkeit',
            text: 'Das letzte Ziel des Menschen ist die visio beatifica — die unmittelbare Schau Gottes im Jenseits. Im Diesseits kann der Mensch durch Tugendübung (aristotelisch) eine unvollkommene Glückseligkeit erreichen. Die vollkommene Glückseligkeit übersteigt die natürlichen Fähigkeiten — sie erfordert Gnade.' },
        ])}

        ${renderFormulaBox({
          label: 'Thomas von Aquin, Summa Theologiae I-II, q.94, a.2',
          formula: '„Bonum est faciendum et prosequendum,<br>et malum est vitandum."<br>(Das Gute ist zu tun und zu erstreben,<br>das Böse ist zu meiden.)',
          desc: 'Das erste und allgemeinste Prinzip des natürlichen Sittengesetzes — selbstevident, unbezweifelbar, Grundlage aller ethischen Normen.'
        })}
      </div>
    </section>


    <section class="lz-content-section">
      <div class="lz-section-wrap">
        ${renderSubhead('Testfragen — Abiturniveau')}
        ${renderAccordion([
          { title: '1. Erläutern Sie drei der „Fünf Wege" des Thomas und diskutieren Sie einen Einwand.',
            content: '<p class="lz-prose"><strong>Weg 1 — Bewegungsargument:</strong> Alles Bewegte wird von anderem bewegt. Diese Kette kann nicht unendlich sein (sonst gäbe es keinen Anfang der Bewegung). Also gibt es einen ersten unbewegten Beweger = Gott.<br><br><strong>Weg 3 — Kontingenzargument:</strong> Alles, was wir beobachten, <em>kann</em> sein oder nicht sein (kontingent). Wenn alles kontingent wäre, dann hätte es irgendwann einen Zeitpunkt gegeben, an dem nichts existierte — und aus Nichts kann nichts entstehen. Also muss es ein notwendiges Wesen geben, das nicht nicht-sein kann = Gott.<br><br><strong>Weg 5 — Teleologisches Argument:</strong> Vernunftlose Naturwesen handeln regelmäßig zweckmäßig (die Spinne baut ein Netz, der Samen wird zum Baum). Zweckmäßigkeit ohne Bewusstsein setzt einen intelligenten Lenker voraus = Gott.<br><br><strong>Einwand (Kant, KrV B 631ff):</strong> Der kosmologische Beweis (Weg 1–3) setzt den <strong>ontologischen heimlich voraus</strong>: Er schließt von der Erfahrung auf ein „notwendiges Wesen" — aber um zu zeigen, dass dieses Wesen existieren <em>muss</em>, braucht er den ontologischen Schritt von der Notwendigkeit des Begriffs auf die Notwendigkeit der Existenz. Und der teleologische Beweis (Weg 5) beweist höchstens einen „Weltbaumeister" (Demiurg), keinen allmächtigen Schöpfer aus dem Nichts.</p>' },

          { title: '2. Vergleichen Sie Thomas\' Verhältnisbestimmung von Glaube und Vernunft mit Anselm und Augustinus.',
            content: '<p class="lz-prose"><strong>Augustinus:</strong> <em>Crede ut intelligas</em> — Glaube, um zu verstehen. Vernunft ist <strong>abhängig</strong> vom Glauben und von göttlicher Erleuchtung (illuminatio). Ohne Gnade keine wahre Erkenntnis. Die Vernunft ist <strong>Dienerin</strong> des Glaubens.<br><br><strong>Anselm:</strong> <em>Fides quaerens intellectum</em> — Glaube sucht nach Einsicht. Der Glaube ist Ausgangspunkt, die Vernunft sucht aktiv nach rationaler Durchdringung des Geglaubten. Vernunft ist <strong>Partnerin</strong> des Glaubens, aber noch nicht autonom.<br><br><strong>Thomas:</strong> Glaube und Vernunft sind <strong>zwei autonome Erkenntnisquellen</strong>, die sich nicht widersprechen können (beide stammen von Gott). Die Vernunft kann <strong>eigenständig</strong> vieles über Gott erkennen (Existenz, Einheit, Güte = praeambula fidei). Aber bestimmte Wahrheiten (Trinität, Inkarnation) übersteigen die Vernunft und sind nur durch Offenbarung zugänglich. Vernunft und Glaube sind wie <strong>zwei Stockwerke</strong> eines Gebäudes: Die Vernunft bildet das Fundament (Philosophie), der Glaube den Aufbau (Theologie). Kein Widerspruch, keine Konkurrenz, sondern <strong>Komplementarität</strong>.<br><br><strong>Bedeutung:</strong> Thomas emanzipiert die Vernunft stärker als alle Vorgänger — und bereitet damit unbeabsichtigt die <strong>Autonomie der Philosophie</strong> in der Neuzeit vor. Wenn die Vernunft ohne Glaube Wahrheit erkennen kann, warum sollte sie dann den Glauben brauchen?</p>' },

          { title: '3. Erklären Sie Thomas\' Naturrechtslehre und diskutieren Sie ihre Stärken und Schwächen.',
            content: '<p class="lz-prose"><strong>Die Lehre:</strong> Es gibt ein natürliches Sittengesetz (lex naturalis), das die Vernunft aus der menschlichen Natur ablesen kann. Erstes Prinzip: „Tue das Gute, meide das Böse." Konkretisierung durch drei natürliche Neigungsgruppen: Selbsterhaltung, Arterhaltung, Wahrheitssuche/Gemeinschaft. Das Naturrecht ist universal, unveränderlich und bildet den Maßstab für alle positiven Gesetze.<br><br><strong>Stärken:</strong> (1) Universalismus: Das Naturrecht gilt für alle Menschen, unabhängig von Kultur, Religion oder Epoche — es begründet überkulturelle <strong>Menschenrechte</strong>. (2) Kritikpotenzial: „Lex iniusta non est lex" — ungerechte Gesetze sind moralisch unverbindlich. Das Naturrecht ermöglicht Kritik an positivem Recht. (3) Rationalität: Das Naturrecht beruht auf Vernunft, nicht auf Offenbarung — es ist interreligiös und interkulturell diskutierbar.<br><br><strong>Schwächen:</strong> (1) <strong>Naturalistischer Fehlschluss</strong> (Hume): Aus dem, was die Natur <em>ist</em> (Sein), folgt nicht, was sein <em>soll</em> (Sollen). Dass Menschen einen Selbsterhaltungstrieb haben, beweist nicht, dass Selbsterhaltung moralisch geboten ist. (2) <strong>Kulturrelativismus</strong>: Die Sophisten und die moderne Anthropologie zeigen, dass „natürliche Neigungen" kulturell sehr verschieden interpretiert werden. Was Thomas als „natürlich" bestimmt, spiegelt die Normen des 13. Jh. (3) <strong>Essentialismus</strong>: Thomas setzt eine feste „menschliche Natur" voraus — Existenzialismus (Sartre: „Die Existenz geht der Essenz voraus"), Poststrukturalismus (Foucault) und Gender Studies bestreiten das.</p>' },

          { title: '4. Warum ist Thomas von Aquin der „Meister der Synthesenbildung"?',
            content: '<p class="lz-prose">Thomas verdient diesen Titel, weil er es wie kein anderer Denker verstand, <strong>gegensätzliche Traditionen</strong> in ein kohärentes System zu integrieren:<br><br><strong>Synthese 1 — Aristoteles + Christentum:</strong> Aristoteles lehrte die Ewigkeit der Welt, Thomas die Schöpfung. Aristoteles\' Gott denkt nur sich selbst, Thomas\' Gott liebt die Welt. Trotzdem integrierte Thomas Aristoteles\' Logik, Metaphysik (Form/Materie, Akt/Potenz), Ethik (Tugendlehre, Eudaimonie) und Naturphilosophie in das christliche Denken — indem er zeigte, dass Aristoteles\' Vernunfterkenntnisse mit dem Glauben <strong>kompatibel</strong> sind, auch wenn sie nicht alles erfassen.<br><br><strong>Synthese 2 — Augustinus + Aristoteles:</strong> Augustinus (platonisch): Erkenntnis durch Erleuchtung, Materie als mangelhaft, Vernunft als Dienerin. Thomas: Erkenntnis durch Abstraktion aus Sinneserfahrung, Materie als gut, Vernunft als autonom in ihrem Bereich. Thomas behält Augustinus\' Gnadenlehre bei, erweitert aber den Raum der natürlichen Vernunft.<br><br><strong>Synthese 3 — Philosophie + Theologie:</strong> Nicht Konkurrenz, sondern Komplementarität. Philosophie beantwortet die Fragen, die die Vernunft stellen kann; Theologie beantwortet die Fragen, die nur der Glaube stellen kann. Beide konvergieren, weil beide von derselben Wahrheit (Gott) stammen.<br><br>Thomas\' Synthese wurde 1879 von Papst Leo XIII. zur <strong>offiziellen Philosophie der katholischen Kirche</strong> erklärt (Enzyklika <em>Aeterni Patris</em>) — eine einzigartige Wirkungsgeschichte.</p>' },
        ])}
      </div>
    </section>

    <section class="lz-content-section" style="padding-top:0;">
      <div class="lz-section-wrap">
        ${renderPageNav({
          prev: { label: 'Hildegard v. Bingen', link: `${BASE}/themen/mittelalter/hildegard` },
          next: { label: 'Meister Eckhart',      link: `${BASE}/themen/mittelalter/eckhart` },
        }, BASE)}
      </div>
    </section>
    ${footerHTML(this.router)}
    `;
  }
  init() { i18n.init(); initScrollReveal(); refreshScrollReveal(); initInteractive(document); }
  cleanup() {}
}