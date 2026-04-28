// pages/projekte/lernzettel/faecher/ethik/themen/gegenwart/wittgenstein.js
// Kapitel 10.1 — Ludwig Wittgenstein (1889–1951)
// Tractatus, Sprachspiele, Privatsprachenargument, früh vs. spät

import { initScrollReveal, refreshScrollReveal } from '../../../../../../../shared/js/scroll.js';
import { footerHTML } from '../../../../../../../components/Footer.js';
import { i18n } from '../../../../../../../shared/js/i18n.js';
import { ensureComponentsCSS, renderSubhead, renderTags, renderInfobox, renderTable, renderAccordion, renderMerkboxGrid, renderVTimeline, renderCompare, renderFormulaBox, renderTabs, initInteractive, loadComponentCSS } from '../../../../js/components/components.js';
import { renderPageNav } from '../../../../js/components/subnav.js';
import { COLOR, COLOR_RGB, BASE } from '../../philosophie.js';

const KAP_COLOR = '#7e22ce';
const KAP_COLOR_RGB = '126, 34, 206';

export default class WittgensteinPage {
  constructor(router) { this.router = router; }
  render() {
    ensureComponentsCSS(); loadComponentCSS('pages/projekte/lernzettel/styles/sub.css');
    const el = document.createElement('div'); el.className = 'page page-wittgenstein';
    el.style.setProperty('--lz-accent', COLOR); el.style.setProperty('--lz-accent-rgb', COLOR_RGB);
    el.style.setProperty('--kap-color', KAP_COLOR); el.style.setProperty('--kap-color-rgb', KAP_COLOR_RGB);
    el.innerHTML = this._html(); return el;
  }
  _html() {
    return `
    <section class="lz-sub-hero"><div class="lz-sub-hero-orb"></div><div class="lz-sub-hero-inner reveal">
      <nav class="lz-sub-breadcrumb"><button class="lz-bread-link" data-link="/projekte/lernzettel">Lernzettel</button><i class="fas fa-chevron-right"></i><button class="lz-bread-link" data-link="${BASE}">Philosophie</button><i class="fas fa-chevron-right"></i><span>Wittgenstein</span></nav>
      <h1 class="lz-sub-title"><em>Wittgenstein</em> — Sprache, Logik &amp; Schweigen</h1>
      <p class="lz-sub-desc">Zwei Philosophien in einem Leben: Der frühe Wittgenstein suchte die logische Struktur der Sprache und fand die Grenze des Sagbaren. Der späte Wittgenstein zerstörte sein eigenes Werk und entdeckte die Sprache als Lebensform.</p>
      ${renderTags(['Kapitel 10.1','1889–1951','Wien · Cambridge','Tractatus · Sprachspiele · Privatsprachenargument','Abitur 2026'])}
    </div></section>

    <section class="lz-content-section"><div class="lz-section-wrap">
      ${renderSubhead('Biographisches')}
      <h2 class="lz-h2 reveal">Zwei <em>Revolutionen</em> in einem Leben</h2>
      <p class="lz-prose reveal">Ludwig Wittgenstein (1889–1951) stammte aus einer der reichsten Familien Wiens. Er studierte Ingenieurwesen in Manchester, wechselte zur Logik (bei Russell in Cambridge), kämpfte im Ersten Weltkrieg, verschenkte sein gesamtes Erbe, arbeitete als Dorfschullehrer und Gartenarchitekt — und kehrte 1929 nach Cambridge zurück, wo er die Philosophie ein zweites Mal revolutionierte.</p>
      ${renderVTimeline([
        { year:'1889', title:'Geburt in Wien', text:'Reichste Industriellenfamilie Österreichs; 5 Geschwister' },
        { year:'1911–13', title:'Studium bei Russell in Cambridge', text:'Logik und Philosophie; Russell: „vielleicht das größte Genie, dem ich je begegnet bin"' },
        { year:'1918', title:'Tractatus logico-philosophicus', text:'Im Krieg geschrieben (Offizier an der Front); einziges zu Lebzeiten veröffentlichtes Buch' },
        { year:'1920–26', title:'Volksschullehrer in Niederösterreich', text:'Glaubt, alle Probleme der Philosophie gelöst zu haben; lebt in radikaler Einfachheit' },
        { year:'1929', title:'Rückkehr nach Cambridge', text:'Erkennt: Der Tractatus war falsch. Beginn des „Spätwerks"' },
        { year:'1953', title:'Philosophische Untersuchungen (postum)', text:'Sein zweites Hauptwerk — zerstört die Grundlagen des Tractatus; Sprachspieltheorie' },
      ])}
    </div></section>

    <section class="lz-content-section"><div class="lz-section-wrap">
      ${renderSubhead('Der frühe Wittgenstein: Tractatus logico-philosophicus (1921)')}
      <h2 class="lz-h2 reveal">Die Grenzen meiner <em>Sprache</em></h2>
      <p class="lz-prose reveal">Der Tractatus ist ein Versuch, die GRENZEN der sinnvollen Sprache zu ziehen. Er besteht aus sieben Hauptsätzen — nummeriert von 1 bis 7 — und hunderten Untersätzen.</p>
      ${renderMerkboxGrid([
        { icon:'fas fa-image', title:'Abbildtheorie (Bild-Theorie)',
          text:'Ein Satz ist ein BILD der Wirklichkeit — er bildet einen möglichen Sachverhalt ab, wie ein Foto eine Szene abbildet. Ein Satz ist sinnvoll, wenn er einen Sachverhalt darstellt, der wahr oder falsch sein KANN. „Die Katze sitzt auf der Matte" — verifizierbar oder falsifizierbar → sinnvoll.' },
        { icon:'fas fa-ban', title:'Das Unsagbare',
          text:'Ethik, Ästhetik, Religion, der Sinn des Lebens — all das lässt sich NICHT in sinnvollen Sätzen ausdrücken. „Wovon man nicht sprechen kann, darüber muss man schweigen" (Satz 7). Das Unsagbare ist nicht unwichtig — im Gegenteil: „Es gibt allerdings Unaussprechliches. Dies ZEIGT sich." Aber es kann nicht in Sätzen GESAGT werden.' },
        { icon:'fas fa-border-all', title:'Die Grenze der Sprache = Die Grenze der Welt',
          text:'„Die Grenzen meiner Sprache bedeuten die Grenzen meiner Welt" (5.6). Was ich nicht sagen kann, kann ich nicht denken. Die Metaphysik (Gott, Seele, Ding an sich) versucht, ÜBER die Grenze der Sprache hinauszugehen — und produziert Unsinn. Nicht falschen Unsinn, sondern SINNLOSEN Unsinn.' },
      ])}
      ${renderFormulaBox({ label:'Wittgenstein, Tractatus, Satz 7 (1921)', formula:'„Wovon man nicht sprechen kann,<br>darüber muss man schweigen."', desc:'Der letzte Satz des Tractatus — und zugleich der berühmteste. Nicht Resignation, sondern GRENZZIEHUNG: Die wichtigsten Dinge (Ethik, Sinn, Gott) zeigen sich — aber sie lassen sich nicht in Sätzen ausdrücken.' })}
    </div></section>

    <section class="lz-content-section"><div class="lz-section-wrap">
      ${renderSubhead('Der späte Wittgenstein: Philosophische Untersuchungen (1953)')}
      <h2 class="lz-h2 reveal"><em>Sprachspiele</em> — Bedeutung ist Gebrauch</h2>
      <p class="lz-prose reveal">Der späte Wittgenstein verwirft fast ALLES, was der frühe behauptet hatte. Die Sprache ist kein Bild der Wirklichkeit — sie ist ein WERKZEUG, das in vielfältigen sozialen Praktiken (Sprachspielen) verwendet wird. „Die Bedeutung eines Wortes ist sein Gebrauch in der Sprache."</p>
      ${renderCompare({
        titleA:'Früher Wittgenstein (Tractatus)',
        titleB:'Später Wittgenstein (PU)',
        listA:['Sprache BILDET die Wirklichkeit AB','Eine logische Struktur der Sprache','Bedeutung = Abbildung eines Sachverhalts','Philosophie = logische Analyse','Ideal: präzise, eindeutige Sprache','Unsagbares = Schweigen'],
        listB:['Sprache wird in PRAKTIKEN GEBRAUCHT','Unzählige verschiedene „Sprachspiele"','Bedeutung = Gebrauch in der Praxis','Philosophie = therapeutische Klärung','Alltagssprache ist „in Ordnung"','Unsinn entsteht durch falsche Analogien'],
      })}
      ${renderMerkboxGrid([
        { icon:'fas fa-chess-board', title:'Sprachspiele (Sprachspiel)',
          text:'Die Sprache besteht aus unzähligen verschiedenen „Spielen" — Befehlen, Bitten, Erzählen, Witzeln, Danken, Fluchen, Grüßen, Beten, Dichten… Jedes Spiel hat eigene Regeln, eigene Zwecke, eigenen Kontext. Es gibt keine EINE Funktion der Sprache (Abbildung), sondern VIELE verschiedene Funktionen.' },
        { icon:'fas fa-users', title:'Lebensform (Lebensform)',
          text:'Sprachspiele sind eingebettet in LEBENSFORMEN — soziale Praktiken, kulturelle Gewohnheiten, gemeinsame Handlungsmuster. „Sich eine Sprache vorstellen heißt, sich eine Lebensform vorstellen." Sprache ist nicht privat — sie ist SOZIAL, öffentlich, geteilt.' },
        { icon:'fas fa-lock', title:'Privatsprachenargument',
          text:'Es ist UNMÖGLICH, eine rein private Sprache zu haben (z.B. für innere Empfindungen). Warum? Sprache braucht REGELN — und Regeln setzen eine GEMEINSCHAFT voraus, die über richtige/falsche Anwendung urteilen kann. Ein Privatsprachler könnte nicht unterscheiden zwischen „der Regel FOLGEN" und „der Regel zu folgen GLAUBEN" — also ist „Privatsprache" ein Widerspruch.' },
        { icon:'fas fa-stethoscope', title:'Philosophie als Therapie',
          text:'„Die Philosophie ist ein Kampf gegen die Verhexung unseres Verstandes durch die Mittel unserer Sprache." Philosophische Probleme entstehen, wenn die Sprache „feiergeht" — wenn Wörter aus ihrem normalen Gebrauchskontext gerissen werden. Philosophie löst keine Probleme — sie löst SCHEINPROBLEME AUF, indem sie die Sprache an ihre Alltagsverwendung zurückführt.' },
      ])}
    </div></section>

    <section class="lz-content-section"><div class="lz-section-wrap">
      ${renderSubhead('Testfragen — Abiturniveau')}
      ${renderAccordion([
        { title:'1. Vergleichen Sie den frühen und den späten Wittgenstein systematisch.',
          content:'<p class="lz-prose"><strong>Früher W. (Tractatus):</strong> (1) EINE logische Struktur der Sprache. (2) Sprache = BILD der Wirklichkeit (Abbildtheorie). (3) Bedeutung = Abbildung eines Sachverhalts. (4) Sinnvolle Sätze = empirisch verifizierbar/falsifizierbar. (5) Metaphysik = Unsinn (überschreitet die Sprachgrenze). (6) Ziel: Die Grenze des Sagbaren ziehen.<br><br><strong>Später W. (PU):</strong> (1) UNZÄHLIGE verschiedene Sprachspiele. (2) Sprache = WERKZEUG in sozialen Praktiken. (3) Bedeutung = GEBRAUCH in der Sprache. (4) Kein allgemeines Sinnkriterium — jedes Sprachspiel hat eigene Regeln. (5) Philosophische Probleme = Verwirrungen durch falschen Sprachgebrauch. (6) Ziel: Die „Verhexung" durch die Sprache auflösen (Therapie).<br><br><strong>Der Bruch:</strong> Wittgenstein ist der EINZIGE große Philosoph, der sein eigenes Hauptwerk fundamental widerrufen hat. Der Tractatus basiert auf der Annahme, es gebe EINE logische Form der Sprache — die PU zeigen: Es gibt unendlich viele verschiedene Sprachspiele, keine einheitliche Logik.</p>' },
        { title:'2. Was ist das Privatsprachenargument und warum ist es philosophisch wichtig?',
          content:'<p class="lz-prose"><strong>Das Argument:</strong> Angenommen, ich erfinde ein Zeichen „S" für eine bestimmte private Empfindung. Jedes Mal, wenn ich die Empfindung habe, schreibe ich „S" in mein Tagebuch. PROBLEM: Woher weiß ich, dass ich „S" beim nächsten Mal RICHTIG verwende? Ich müsste die jetzige Empfindung mit der früheren VERGLEICHEN — aber die Erinnerung an die frühere Empfindung ist selbst privat und unüberprüfbar. Es gibt kein KRITERIUM für richtige Anwendung. Ohne Kriterium keine Regel, ohne Regel keine Sprache.<br><br><strong>Bedeutung:</strong> (1) Gegen den <strong>Cartesianismus</strong>: Descartes\' Bewusstsein (res cogitans) ist PRIVAT — aber wenn Wittgenstein recht hat, kann es keine private Sprache über Bewusstseinsinhhalte geben. Das Innenleben ist nicht der Ausgangspunkt der Erkenntnis. (2) Für den <strong>Behaviorismus / Sozialismus der Bedeutung</strong>: Bedeutung ist ÖFFENTLICH — sie entsteht durch gemeinsame Praxis, nicht durch innere Bilder. (3) Gegen die <strong>Phänomenologie</strong> (Husserl): Die „reine Beschreibung" innerer Erlebnisse setzt voraus, dass es eine Privatsprache gibt — die es nicht geben kann.</p>' },
        { title:'3. Was meint Wittgenstein mit „Philosophie als Therapie"?',
          content:'<p class="lz-prose"><strong>Die These:</strong> Philosophische Probleme sind keine echten Probleme — sie entstehen durch <strong>Missbrauch der Sprache</strong>. Wenn Wörter aus ihrem normalen Gebrauchskontext gerissen und in „metaphysischen" Kontexten verwendet werden, entstehen SCHEINPROBLEME. Beispiel: „Was ist die ZEIT?" (Augustinus) — das Wort „Zeit" funktioniert im Alltag perfekt, wird aber zum Problem, wenn Philosophen es isoliert betrachten.<br><br><strong>Philosophie als Therapie:</strong> Die Aufgabe der Philosophie ist nicht, Theorien aufzustellen, sondern VERWIRRUNGEN aufzulösen — indem man die Wörter an ihren alltäglichen Gebrauch ZURÜCKFÜHRT. „Die Fliege aus dem Fliegenglas herauslassen." Der Philosophie-Patient leidet an Begriffsverwirrungen; der Philosophie-Therapeut heilt ihn, indem er die Verwirrungen aufdeckt.<br><br><strong>Konsequenz:</strong> Es gibt keine philosophischen THESEN — nur philosophische KLARSTELLUNGEN. Philosophie ist keine Wissenschaft (sie entdeckt keine neuen Fakten), sondern eine TÄTIGKEIT der Klärung. „Die Philosophie lässt alles, wie es ist" (PU §124) — sie verändert nicht die Welt, sondern unser VERSTÄNDNIS der Sprache, in der wir über die Welt reden.</p>' },
        { title:'4. Erklären Sie den Tractatus-Satz „Wovon man nicht sprechen kann, darüber muss man schweigen" und seine Bedeutung.',
          content:'<p class="lz-prose"><strong>Kontext:</strong> Der Tractatus zieht die GRENZE der sinnvollen Sprache: Sinnvoll sind nur Sätze, die einen möglichen Sachverhalt ABBILDEN (empirische Sätze, Naturwissenschaft). Alles andere — Ethik, Ästhetik, Religion, der Sinn des Lebens — ist UNSAGBAR. „Unsagbar" heißt nicht „unwichtig" — Wittgenstein schrieb an einen Verleger: „Das Buch besteht aus zwei Teilen: dem geschriebenen und dem UNGESCHRIEBENEN. Und gerade der zweite Teil ist der wichtige."<br><br><strong>Bedeutung:</strong> (1) Gegen die METAPHYSIK: Sätze wie „Gott existiert", „Die Seele ist unsterblich", „Der Wille ist frei" sind nicht falsch — sie sind SINNLOS (sie bilden keinen möglichen Sachverhalt ab). (2) Für die MYSTIK (paradoxerweise): Das Unsagbare „zeigt sich" — in der Erfahrung des Staunens über die Existenz der Welt, in der Begegnung mit dem Schönen, in der moralischen Entscheidung. Wittgenstein war kein Positivist (der das Unsagbare leugnet), sondern ein MYSTIKER (der das Unsagbare respektiert, INDEM er schweigt). (3) Für die <strong>Sprachphilosophie</strong>: Die GRENZE der Sprache ist die Grenze der Welt — jenseits davon liegt nicht „etwas Größeres", sondern das, worüber wir schweigen müssen.</p>' },
      ])}
    </div></section>

    <section class="lz-content-section" style="padding-top:0;"><div class="lz-section-wrap">
      ${renderPageNav({
        prev:{ label:'Nietzsche', link:`${BASE}/themen/19-jahrhundert/nietzsche` },
        next:{ label:'Heidegger', link:`${BASE}/themen/gegenwart/heidegger` },
      }, BASE)}
    </div></section>
    ${footerHTML(this.router)}
    `;
  }
  init() { i18n.init(); initScrollReveal(); refreshScrollReveal(); initInteractive(document); }
  cleanup() {}
}