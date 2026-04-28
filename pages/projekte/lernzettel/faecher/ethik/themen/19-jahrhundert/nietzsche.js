// pages/projekte/lernzettel/faecher/ethik/themen/19-jahrhundert/nietzsche.js
// Kapitel 9.4 — Friedrich Nietzsche (1844–1900)
// Tod Gottes, Übermensch, Ewige Wiederkehr, Genealogie der Moral

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

const KAP_COLOR = '#b7410e';
const KAP_COLOR_RGB = '183, 65, 14';

export default class NietzschePage {
  constructor(router) { this.router = router; }
  render() {
    ensureComponentsCSS();
    loadComponentCSS('pages/projekte/lernzettel/styles/sub.css');
    const el = document.createElement('div');
    el.className = 'page page-nietzsche';
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
          <span>Nietzsche</span>
        </nav>
        <h1 class="lz-sub-title"><em>Nietzsche</em> — Der Übermensch &amp; der Tod Gottes</h1>
        <p class="lz-sub-desc">
          „Gott ist tot — und wir haben ihn getötet." Nietzsche sprengte die
          Fundamente der abendländischen Moral, Religion und Metaphysik —
          und stellte die radikalste aller Fragen: Wie lebt man
          OHNE metaphysische Sicherheit?
        </p>
        ${renderTags(['Kapitel 9.4','1844–1900','Röcken · Basel · Sils-Maria','Tod Gottes · Übermensch · Ewige Wiederkehr · Genealogie','Abitur 2026'])}
      </div>
    </section>

    <section class="lz-content-section"><div class="lz-section-wrap">
      ${renderSubhead('Biographisches')}
      <h2 class="lz-h2 reveal">Genie, Wahnsinn, <em>Verklärung</em></h2>
      <p class="lz-prose reveal">Friedrich Wilhelm Nietzsche (1844–1900) wurde in <strong>Röcken</strong> (Sachsen) als Sohn eines lutherischen Pfarrers geboren. Mit 24 Jahren wurde er — ohne Promotion! — zum jüngsten Professor für klassische Philologie in Basel berufen. Sein Denken entwickelte sich in rasender Geschwindigkeit, begleitet von schwerer Krankheit (Migräne, Magenleiden, Sehstörungen). Im Januar 1889 brach er in Turin zusammen — und verbrachte die letzten 11 Jahre geistig umnachtet.</p>
      ${renderVTimeline([
        { year:'1844', title:'Geburt in Röcken', text:'Pfarrerssohn; Vater stirbt, als Friedrich 4 ist' },
        { year:'1869', title:'Professor in Basel (24-jährig)', text:'Jüngster Professor der Universität — ohne Dissertation; Freundschaft mit Wagner' },
        { year:'1872', title:'Die Geburt der Tragödie', text:'Apollinisch vs. Dionysisch; von Philologen verrissen, von Wagner gefeiert' },
        { year:'1878', title:'Menschliches, Allzumenschliches', text:'Bruch mit Wagner und der Romantik; Hinwendung zum Freigeist' },
        { year:'1882', title:'Die fröhliche Wissenschaft', text:'„Gott ist tot" — der tolle Mensch auf dem Marktplatz' },
        { year:'1883–85', title:'Also sprach Zarathustra', text:'Dichtung und Philosophie: Übermensch, Ewige Wiederkehr, Wille zur Macht' },
        { year:'1887', title:'Zur Genealogie der Moral', text:'Analyse von Herrenmoral vs. Sklavenmoral — Ressentiment' },
        { year:'1889', title:'Zusammenbruch in Turin', text:'Umarmt ein geschlagenes Pferd; geistiger Zusammenbruch; 11 Jahre Umnachtung' },
        { year:'1900', title:'Tod in Weimar', text:'Schwester Elisabeth verfälscht den Nachlass und missbraucht ihn für den Nationalismus' },
      ])}
      ${renderInfobox({ type:'warning', icon:'fas fa-exclamation-triangle', title:'Vorsicht: Nietzsche und der Nationalsozialismus',
        body:'Nietzsche war KEIN Vorläufer des Nationalsozialismus. Er verachtete Antisemitismus („ein Skandal"), Nationalismus („die Deutschen machen mich krank") und Rassismus. Seine Schwester Elisabeth Förster-Nietzsche — verheiratet mit einem prominenten Antisemiten — verfälschte den Nachlass systematisch. Der „Wille zur Macht" als Buch ist eine von ihr zusammengestellte Kompilation, kein authentisches Werk Nietzsches.' })}
    </div></section>

    <section class="lz-content-section"><div class="lz-section-wrap">
      ${renderSubhead('Die Geburt der Tragödie (1872)')}
      <h2 class="lz-h2 reveal"><em>Apollinisch</em> und <em>Dionysisch</em></h2>
      ${renderCompare({
        titleA:'Apollinisch',
        titleB:'Dionysisch',
        listA:['Form, Ordnung, Maß','Traum, Bild, Schein','Individualität, Grenze','Bildende Kunst, Epos','Vernunft, Klarheit','Sokrates als Paradigma'],
        listB:['Rausch, Chaos, Übermaß','Ekstase, Auflösung, Wahnsinn','Verschmelzung, Entgrenzung','Musik, Tragödie, Tanz','Trieb, Leidenschaft','Dionysos als Paradigma'],
      })}
      <p class="lz-prose reveal">Die griechische Tragödie (Aischylos, Sophokles) war die Synthese beider Kräfte: apollinische Form, gefüllt mit dionysischem Rausch. <strong>Sokrates</strong> zerstörte diese Balance: Er setzte die Vernunft ÜBER das Leben und entzauberte die Tragödie. Seitdem leidet die westliche Kultur an einem Übermaß des Apollinischen — Rationalismus, Wissenschaftsglaube, Lebensfeindlichkeit.</p>
    </div></section>

    <section class="lz-content-section"><div class="lz-section-wrap">
      ${renderSubhead('Der Tod Gottes')}
      <h2 class="lz-h2 reveal">„Gott ist tot — und <em>wir</em> haben ihn getötet"</h2>
      ${renderFormulaBox({ label:'Nietzsche, Die fröhliche Wissenschaft §125 (1882)', formula:'„Gott ist tot! Gott bleibt tot! Und wir haben ihn getötet!<br>Wie trösten wir uns, die Mörder aller Mörder?<br>Das Heiligste und Mächtigste, was die Welt bisher besaß,<br>es ist unter unseren Messern verblutet."', desc:'Der „tolle Mensch" (nicht Nietzsche selbst!) verkündet den Tod Gottes auf dem Marktplatz. Keine triumphale Befreiung, sondern eine Diagnose mit ERSCHRECKENDEM Ernst.' })}
      ${renderMerkboxGrid([
        { icon:'fas fa-cross', title:'Was bedeutet „Gott ist tot"?',
          text:'NICHT: Gott hat nie existiert (Atheismus). NICHT: Gott ist gestorben (Mythologie). SONDERN: Der GLAUBE an Gott hat seine Überzeugungskraft verloren — die metaphysische Grundlage der westlichen Kultur ist zusammengebrochen. Aufklärung, Wissenschaft, historische Bibelkritik haben das christliche Weltbild zerstört — OHNE etwas an seine Stelle gesetzt zu haben.' },
        { icon:'fas fa-skull', title:'Nihilismus als Konsequenz',
          text:'Wenn Gott tot ist, gibt es keinen objektiven Sinn, keine absolute Moral, keinen Trost im Jenseits. Die Folge: NIHILISMUS — „die höchsten Werte entwerten sich." Alles wird gleichgültig: Wenn nichts wahr ist, ist alles erlaubt. Nietzsche DIAGNOSTIZIERT den Nihilismus — er empfiehlt ihn nicht. Die Frage: Wie ÜBERWINDET man den Nihilismus?' },
        { icon:'fas fa-bolt', title:'Umwertung aller Werte',
          text:'Nietzsche fordert eine „Umwertung aller Werte" (Umwerthung aller Werthe): Die christlich-platonische Moral (Demut, Mitleid, Gleichheit, Jenseitsvertröstung) hat das LEBEN verneint — sie muss durch eine neue, lebensbejahende Moral ersetzt werden. Nicht: zurück zu den alten Werten. Sondern: NEUE Werte schaffen.' },
      ])}
    </div></section>

    <section class="lz-content-section"><div class="lz-section-wrap">
      ${renderSubhead('Genealogie der Moral (1887)')}
      <h2 class="lz-h2 reveal"><em>Herren</em>moral und <em>Sklaven</em>moral</h2>
      <p class="lz-prose reveal">In der <em>Genealogie der Moral</em> untersucht Nietzsche die HERKUNFT moralischer Werte — nicht ihre logische Gültigkeit, sondern ihre historische Entstehung:</p>
      ${renderCompare({
        titleA:'Herrenmoral (vornehm)',
        titleB:'Sklavenmoral (christlich)',
        listA:['Grundunterscheidung: <strong>gut vs. schlecht</strong> (gut = edel, stark, schön)','Entsteht aus <strong>Selbstbejahung</strong>: „Ich bin gut"','Werte: Stärke, Stolz, Großzügigkeit, Ehrgeiz','Diesseitig: Das LEBEN wird bejaht','Homer, griechischer Adel, Renaissance'],
        listB:['Grundunterscheidung: <strong>gut vs. böse</strong> (böse = der Starke, der Mächtige)','Entsteht aus <strong>Ressentiment</strong>: „Du bist böse — also bin ich gut"','Werte: Demut, Mitleid, Gleichheit, Gehorsam','Jenseitig: Das Leben wird VERNEINT zugunsten des Jenseits','Judentum, Christentum, Demokratie, Sozialismus'],
      })}
      ${renderMerkboxGrid([
        { icon:'fas fa-angry', title:'Ressentiment',
          text:'Die Sklaven können die Herren nicht besiegen — also WERTEN sie um: Stärke = böse, Schwäche = gut. „Selig sind die Armen, die Sanftmütigen, die Leidenden." Das ist keine echte Moral, sondern verkleideter HASS — Ressentiment: unterdrückter Groll, der sich als Tugend verkleidet. „Wenn die Lämmer sagen: \‚Die Raubvögel sind böse\' — wer will ihnen widersprechen?"' },
        { icon:'fas fa-user-shield', title:'Schlechtes Gewissen',
          text:'Das schlechte Gewissen entsteht, wenn die natürlichen Aggressionsinstinkte (Wille zur Macht) nicht nach AUSSEN gerichtet werden können — und sich nach INNEN wenden. Der Mensch quält sich selbst: Schuldgefühle, Reue, Selbstverachtung. Das Christentum hat das schlechte Gewissen perfektioniert — Erbsünde als universale Schuld.' },
        { icon:'fas fa-eye', title:'Asketisches Ideal',
          text:'Religion, Philosophie und Wissenschaft teilen dasselbe „asketische Ideal": die Verneinung des LEIBES, der SINNE, des LEBENS zugunsten einer „höheren" Wirklichkeit (Jenseits, Ideenwelt, objektive Wahrheit). Platons Ideenlehre = christliches Jenseits = wissenschaftlicher Objektivismus — alles Varianten derselben Lebensverneinung.' },
      ])}
    </div></section>

    <section class="lz-content-section"><div class="lz-section-wrap">
      ${renderSubhead('Übermensch und Ewige Wiederkehr')}
      <h2 class="lz-h2 reveal">Zarathustra — die <em>Vision</em></h2>
      ${renderMerkboxGrid([
        { icon:'fas fa-mountain', title:'Der Übermensch (Übermensch)',
          text:'Der Übermensch ist KEIN biologischer Supermann (Nazi-Missbrauch!), sondern der Mensch, der nach dem Tod Gottes NEUE Werte schafft — aus sich selbst, ohne metaphysische Stütze. Er bejaht das Leben MIT seinem Leiden, ohne Trost im Jenseits. „Der Mensch ist ein Seil, geknüpft zwischen Tier und Übermensch." Der Übermensch ist ein ZIEL, kein Ist-Zustand.' },
        { icon:'fas fa-sync', title:'Ewige Wiederkehr des Gleichen',
          text:'Nietzsches „schwerster Gedanke": Was, wenn dieses Leben — mit allem Leid, aller Freude, allem Schmerz — sich EWIG wiederholt, genau so, ohne Änderung? Würdest du JA dazu sagen? Die Ewige Wiederkehr ist ein PRÜFSTEIN: Wer sein Leben so leben kann, dass er die ewige Wiederholung WÜNSCHT, hat das Leben BEJAHT. „Amor fati" — Liebe zum Schicksal.' },
        { icon:'fas fa-fist-raised', title:'Wille zur Macht',
          text:'Nicht Selbsterhaltung (Darwin), nicht Lustgewinn (Epikur), sondern der WILLE ZUR MACHT ist die Grundtriebfeder alles Lebendigen: das Streben nach Wachstum, Selbstüberwindung, Selbststeigerung. Nicht Macht ÜBER andere (politisch), sondern Macht ÜBER SICH SELBST (Selbstdisziplin, Kreativität, Formgebung). Der Künstler als Paradigma des Willens zur Macht.' },
      ])}
      ${renderFormulaBox({ label:'Nietzsche, Also sprach Zarathustra I (1883)', formula:'„Ich lehre euch den Übermenschen.<br>Der Mensch ist etwas, das überwunden werden soll.<br>Was habt ihr getan, ihn zu überwinden?"', desc:'Zarathustra verkündet den Übermenschen als Sinn der Erde — nicht als biologisches Programm, sondern als existenzielle Aufgabe: Werde, der du bist. Schaffe neue Werte. Bejahe das Leben.' })}
    </div></section>

    <section class="lz-content-section"><div class="lz-section-wrap">
      ${renderSubhead('Testfragen — Abiturniveau')}
      ${renderAccordion([
        { title:'1. Was bedeutet „Gott ist tot" und welche Konsequenzen zieht Nietzsche daraus?',
          content:'<p class="lz-prose"><strong>Bedeutung:</strong> Nicht Atheismus (Gott hat nie existiert) und nicht Mythologie (Gott ist gestorben), sondern DIAGNOSE: Der christliche Glaube hat seine Überzeugungskraft verloren. Die metaphysische Grundlage der westlichen Kultur — objektive Wahrheit, absolute Moral, Sinn im Jenseits — ist zusammengebrochen. Aufklärung, Naturwissenschaft, Bibelkritik haben das christliche Weltbild zerstört.<br><br><strong>Konsequenzen:</strong> (1) NIHILISMUS: „Die höchsten Werte entwerten sich." Ohne Gott kein objektiver Sinn, keine absolute Moral, kein Trost. (2) UMWERTUNG ALLER WERTE: Die christliche Moral (Demut, Mitleid, Gleichheit) muss durch eine lebensbejahende Moral ersetzt werden. (3) Der ÜBERMENSCH: Der Mensch, der nach dem Tod Gottes neue Werte schafft — aus sich selbst, ohne metaphysische Stütze. (4) AMOR FATI: Liebe zum Schicksal — das Leben bejahen MIT seinem Leiden.<br><br><strong>Wichtig:</strong> Nietzsche TRIUMPHIERT nicht über den Tod Gottes — er sieht ihn als katastrophales Ereignis, dessen Konsequenzen die Menschheit noch nicht begriffen hat. „Der tolle Mensch" kommt „zu früh" — die Menschen auf dem Marktplatz verstehen ihn nicht.</p>' },
        { title:'2. Erklären Sie Nietzsches Unterscheidung von Herrenmoral und Sklavenmoral.',
          content:'<p class="lz-prose"><strong>Herrenmoral:</strong> Die Moral der Starken, Edlen, Mächtigen. Grundwertung: <strong>gut vs. schlecht</strong>. „Gut" = edel, stark, schön, großzügig, stolz. „Schlecht" = gemein, schwach, hässlich, erbärmlich. Entsteht aus SELBSTBEJAHUNG: „Ich bin gut." Beispiel: Homer, griechischer Adel, Renaissance.<br><br><strong>Sklavenmoral:</strong> Die Moral der Schwachen, Unterdrückten. Grundwertung: <strong>gut vs. böse</strong>. „Böse" = der Starke, Mächtige, Grausame. „Gut" = der Schwache, Demütige, Leidende. Entsteht aus RESSENTIMENT: „Du (der Herr) bist böse — also bin ich (der Sklave) gut." Die Sklavenmoral ist eine UMWERTUNG: Stärke wird zum Laster, Schwäche zur Tugend. Beispiel: Christentum (Selig die Armen, Sanftmütigen, Leidenden).<br><br><strong>Kritische Diskussion:</strong> (1) Ist Nietzsches Genealogie historisch korrekt? Umstritten — aber als IDEALTYPISCHE Unterscheidung fruchtbar. (2) Ist die Sklavenmoral NUR Ressentiment? Oder enthält sie auch echte moralische Einsichten (Mitleid, Solidarität, Gleichheit)? (3) Ist die Herrenmoral nicht bloß Brutalität? Nietzsche betont: Nicht Brutalität, sondern VORNEHME GROSSZÜGIGKEIT — der Starke braucht keinen Hass, weil er sich selbst genügt.</p>' },
        { title:'3. Was ist die „Ewige Wiederkehr des Gleichen" und warum ist sie philosophisch bedeutsam?',
          content:'<p class="lz-prose"><strong>Der Gedanke:</strong> Was, wenn ein Dämon dir sagte: „Dieses Leben, wie du es jetzt lebst, wirst du noch einmal und noch unzählige Male leben müssen; und es wird nichts Neues daran sein — jeder Schmerz, jede Lust, jeder Gedanke wird wiederkehren, in derselben Reihenfolge"? Würdest du dich auf den Boden werfen und den Dämon verfluchen — oder sagen: „Du bist ein Gott — nie hörte ich Göttlicheres"?<br><br><strong>Philosophische Bedeutung:</strong> (1) PRÜFSTEIN für die Lebensbejahung: Die Ewige Wiederkehr ist ein Gedankenexperiment — wer sein Leben so leben kann, dass er die ewige Wiederholung WÜNSCHT, hat das Leben wirklich bejaht (amor fati). (2) GEGEN den Nihilismus: Die Ewige Wiederkehr gibt jedem Augenblick unendliches Gewicht — wenn er sich ewig wiederholt, ist er nicht gleichgültig, sondern unendlich bedeutsam. (3) GEGEN das Christentum: Kein Jenseits, kein Fortschritt, kein Endziel — nur DIESES Leben, immer wieder. (4) EXISTENZIELLE Herausforderung: Lebst du so, dass du die Wiederholung WILLST? Wenn nicht — ändere dein Leben.<br><br><strong>Problem:</strong> Ist die Ewige Wiederkehr physikalisch gemeint (kosmologische These) oder existenziell (Gedankenexperiment)? Wahrscheinlich BEIDES — aber die existenzielle Dimension ist philosophisch wichtiger.</p>' },
        { title:'4. Vergleichen Sie Nietzsche und Schopenhauer: Lebensbejahung vs. Lebensverneinung.',
          content:'<p class="lz-prose"><strong>Gemeinsamkeit:</strong> Beide gehen von einer irrationalen Urkraft aus (Wille zum Leben / Wille zur Macht). Beide lehnen den Rationalismus (Hegel) und den christlichen Optimismus ab. Beide sind zutiefst von SCHOPENHAUER (bzw. Wagners Schopenhauer-Rezeption) beeinflusst.<br><br><strong>Schopenhauer — Lebensverneinung:</strong> Der Wille ist blind, unersättlich, leidverursachend. Erlösung: VERNEINUNG des Willens — Askese, Keuschheit, Mitleid. Das Ideal: der buddhistische Mönch, der alle Begierde aufgibt. Das Leben ist Leiden — je weniger Wille, desto weniger Leiden.<br><br><strong>Nietzsche — Lebensbejahung:</strong> Schopenhauer ist ein „Décadent" — er will dem Leben ENTKOMMEN, statt es zu BEJAHEN. Nietzsches Alternative: Der Wille zur Macht ist nicht blind, sondern SCHÖPFERISCH. Erlösung nicht durch Verneinung, sondern durch BEJAHUNG — amor fati, Ewige Wiederkehr, Übermensch. Das Ideal: der Künstler, der Schaffende, der Tänzer — der das Leben MIT seinem Leiden bejaht.<br><br><strong>Formel:</strong> Schopenhauer: Pessimismus → Askese → Nirwana. Nietzsche: Tragisches Wissen → Bejahung → Übermensch. Schopenhauer sagt NEIN zum Leben; Nietzsche sagt JA — und zwar „ein heiliges Ja-Sagen zum Leben" (Zarathustra).</p>' },
      ])}
    </div></section>

    <section class="lz-content-section" style="padding-top:0;"><div class="lz-section-wrap">
      ${renderPageNav({
        prev:{ label:'Schopenhauer', link:`${BASE}/themen/19-jahrhundert/schopenhauer` },
        next:{ label:'Wittgenstein', link:`${BASE}/themen/gegenwart/wittgenstein` },
      }, BASE)}
    </div></section>
    ${footerHTML(this.router)}
    `;
  }
  init() { i18n.init(); initScrollReveal(); refreshScrollReveal(); initInteractive(document); }
  cleanup() {}
}