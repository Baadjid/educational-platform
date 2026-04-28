// pages/projekte/lernzettel/faecher/ethik/themen/neuzeit/hobbes.js
// ══════════════════════════════════════════════════════════════════
// Kapitel 6.3 — Thomas Hobbes (1588–1679)
// Naturzustand, Leviathan, Gesellschaftsvertrag, Materialismus
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

const KAP_COLOR = '#5b6abf';
const KAP_COLOR_RGB = '91, 106, 191';

export default class HobbesPage {
  constructor(router) { this.router = router; }
  render() {
    ensureComponentsCSS();
    loadComponentCSS('pages/projekte/lernzettel/styles/sub.css');
    const el = document.createElement('div');
    el.className = 'page page-hobbes';
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
          <span>Hobbes</span>
        </nav>
        <h1 class="lz-sub-title"><em>Thomas Hobbes</em> — Der Leviathan</h1>
        <p class="lz-sub-desc">
          Der Krieg aller gegen alle und die Geburt des Staates:
          Hobbes entwarf die modernste und radikalste politische Philosophie
          des 17. Jahrhunderts — eine, die ohne Gott, ohne Naturrecht
          und ohne Moral auskommt.
        </p>
        ${renderTags(['Kapitel 6.3', '1588–1679', 'Malmesbury · Paris · London', 'Naturzustand · Gesellschaftsvertrag · Absolutismus', 'Abitur 2026'])}
      </div>
    </section>


    <section class="lz-content-section">
      <div class="lz-section-wrap">
        ${renderSubhead('Biographisches & Kontext')}
        <h2 class="lz-h2 reveal">Geboren in <em>Angst</em></h2>

        <p class="lz-prose reveal">
          Thomas Hobbes wurde 1588 in <strong>Malmesbury</strong> (England) geboren —
          angeblich vorzeitig, als seine Mutter vom Herannahen der Spanischen Armada
          erfuhr. Hobbes kommentierte: <em>„Meine Mutter gebar Zwillinge: mich und
          die Furcht."</em> Furcht — vor dem Tod, vor dem Bürgerkrieg, vor dem
          Chaos — ist der Grundaffekt seiner gesamten Philosophie.
        </p>

        <p class="lz-prose reveal">
          Hobbes erlebte den <strong>Englischen Bürgerkrieg</strong> (1642–1651) —
          den Zusammenbruch der staatlichen Ordnung, die Hinrichtung König
          Karls I. (1649), Cromwells Militärdiktatur. Diese Erfahrung prägte
          seine zentrale Frage: <strong>Wie lässt sich der Bürgerkrieg
          verhindern?</strong> Seine Antwort: Nur durch einen
          <strong>absoluten Souverän</strong>, dem alle bedingungslos gehorchen.
        </p>

        ${renderVTimeline([
          { year: '1588', title: 'Geburt in Malmesbury', text: 'Vorzeitige Geburt aus „Furcht vor der Armada" — Furcht als Lebensmotiv' },
          { year: '1608–28', title: 'Hauslehrer und Europareisen', text: 'Bei der Familie Cavendish; Begegnung mit Galilei, Mersenne, Gassendi' },
          { year: '1640', title: 'Flucht nach Paris', text: 'Vor dem Bürgerkrieg; 11 Jahre Exil; Mathematiklehrer des späteren Karl II.' },
          { year: '1642', title: 'De Cive (Vom Bürger)', text: 'Erste systematische Staatstheorie; lateinisch, für Gelehrte' },
          { year: '1651', title: 'Leviathan', text: 'Hauptwerk — auf Englisch, für ein breites Publikum. Begründung des absoluten Staates aus dem Naturzustand' },
          { year: '1660', title: 'Restauration Karls II.', text: 'Hobbes kehrt nach England zurück; genießt königliche Protektion, aber akademische Feindschaft' },
          { year: '1679', title: 'Tod in Hardwick Hall', text: 'Stirbt 91-jährig; letzte Worte angeblich: „Ich mache einen großen Sprung ins Dunkle."' },
        ])}
      </div>
    </section>


    <section class="lz-content-section">
      <div class="lz-section-wrap">
        ${renderSubhead('Anthropologie — Das Menschenbild')}
        <h2 class="lz-h2 reveal">Der Mensch als <em>Maschine</em></h2>

        <p class="lz-prose reveal">
          Hobbes vertritt einen konsequenten <strong>Materialismus</strong>:
          Alles, was existiert, ist Materie in Bewegung — auch der Mensch,
          auch der Geist, auch die Gesellschaft. Es gibt keine immaterielle Seele,
          keinen freien Willen im kartesischen Sinn, keine angeborenen Ideen.
          Der Mensch ist eine hochkomplexe <strong>Maschine</strong>, angetrieben
          von zwei Grundkräften:
        </p>

        ${renderMerkboxGrid([
          { icon: 'fas fa-heart', title: 'Appetitus (Begehren)',
            text: 'Bewegung ZU etwas hin — was uns Lust verschafft, streben wir an. „Gut" ist nichts anderes als das, was der Einzelne begehrt. Es gibt kein objektives Gutes (gegen Aristoteles, Thomas, die Stoa). Moral ist subjektiv — was dem einen gut erscheint, ist dem anderen gleichgültig oder schlecht.' },
          { icon: 'fas fa-running', title: 'Aversio (Abscheu)',
            text: 'Bewegung VON etwas weg — was uns Unlust oder Schmerz verursacht, meiden wir. „Schlecht" ist das, was wir fürchten. Die stärkste Aversion ist die Furcht vor dem gewaltsamen Tod — sie ist der Motor der politischen Ordnung.' },
          { icon: 'fas fa-fist-raised', title: 'Ruhmsucht (vainglory)',
            text: 'Der Mensch strebt nach Macht über andere — nicht aus Bosheit, sondern aus Unsicherheit: Wer mächtiger ist als andere, ist sicherer. „Ich setze als allgemeine Neigung der ganzen Menschheit ein rastloses Streben nach Macht, das erst im Tode aufhört" (Leviathan I, 11).' },
          { icon: 'fas fa-equals', title: 'Natürliche Gleichheit',
            text: 'Alle Menschen sind von Natur aus GLEICH — in körperlicher Kraft (auch der Schwächste kann den Stärksten töten, z.B. im Schlaf) und in geistiger Fähigkeit. Aus dieser Gleichheit entspringt die Unsicherheit: Wenn alle gleich stark sind, kann jeder jeden bedrohen. Gleichheit + Unsicherheit = Krieg.' },
        ])}
      </div>
    </section>


    <section class="lz-content-section">
      <div class="lz-section-wrap">
        ${renderSubhead('Der Naturzustand (state of nature)')}
        <h2 class="lz-h2 reveal"><em>Bellum omnium contra omnes</em> — Der Krieg aller gegen alle</h2>

        <p class="lz-prose reveal">
          Der <strong>Naturzustand</strong> ist bei Hobbes kein historischer Bericht,
          sondern ein <strong>Gedankenexperiment</strong>: Was wäre, wenn es keinen
          Staat gäbe? Keine Gesetze, keine Polizei, keine Gerichte — nur freie,
          gleiche, selbstinteressierte Individuen?
        </p>

        ${renderFormulaBox({
          label: 'Hobbes, Leviathan I, 13',
          formula: '„In einem solchen Zustand gibt es keinen Platz für Fleiß,<br>weil die Frucht desselben ungewiss ist; folglich keine Kultur,<br>keine Schiffahrt, kein Ackerbau, keine Zeitmessung,<br>keine Künste, keine Literatur, keine Gesellschaft;<br>und — was das Schlimmste von allem ist —<br>beständige Furcht und Gefahr eines gewaltsamen Todes;<br>und das Leben des Menschen ist einsam, armselig,<br>scheußlich, viehisch und kurz."',
          desc: 'Die berühmteste Passage der politischen Philosophie: „solitary, poor, nasty, brutish, and short" — das Leben im Naturzustand.'
        })}

        ${renderMerkboxGrid([
          { icon: 'fas fa-exclamation-triangle', title: 'Drei Ursachen des Krieges',
            text: '(1) Konkurrenz (competition) — um knappe Güter: Nahrung, Land, Besitz. (2) Misstrauen (diffidence) — präventive Gewalt: Ich greife an, bevor der andere mich angreift. (3) Ruhmsucht (glory) — Streben nach Anerkennung und Überlegenheit. Alle drei zusammen ergeben den „Krieg aller gegen alle".' },
          { icon: 'fas fa-ban', title: 'Kein Recht, kein Unrecht',
            text: 'Im Naturzustand gibt es keine Moral, kein Recht, kein Eigentum: „Wo kein Gesetz ist, da ist kein Unrecht." Recht und Moral entstehen erst durch den Staat. Gut und Böse sind nicht naturgegeben (gegen Thomas\' Naturrecht), sondern Produkte menschlicher Vereinbarung.' },
          { icon: 'fas fa-shield-alt', title: 'Ius naturale — Das natürliche Recht',
            text: 'Im Naturzustand hat jeder das Recht auf ALLES — auch auf den Körper eines anderen. Das „natürliche Recht" (ius naturale) ist das Recht, alle Mittel zur Selbsterhaltung einzusetzen. Paradox: Ein Recht auf alles ist ein Recht auf nichts — denn wenn alle alles dürfen, ist niemand sicher.' },
        ])}

        ${renderInfobox({
          type: 'warning', icon: 'fas fa-exclamation-triangle',
          title: 'Hobbes vs. Rousseau — Naturzustand',
          body: 'Hobbes und Rousseau haben <strong>entgegengesetzte</strong> Vorstellungen vom Naturzustand. Hobbes: Der Mensch ist von Natur aus <strong>selbstsüchtig, ängstlich, aggressiv</strong> → Krieg aller gegen alle. Rousseau: Der Mensch ist von Natur aus <strong>gut, friedlich, unabhängig</strong> → erst die Zivilisation verdirbt ihn. Beide konstruieren den Naturzustand als Gedankenexperiment, um ihre Staatstheorie zu begründen — aber mit diametral entgegengesetzten Prämissen.'
        })}
      </div>
    </section>


    <section class="lz-content-section">
      <div class="lz-section-wrap">
        ${renderSubhead('Der Gesellschaftsvertrag und der Leviathan')}
        <h2 class="lz-h2 reveal">Vom Chaos zur <em>absoluten Macht</em></h2>

        <p class="lz-prose reveal">
          Die Vernunft (die „natürlichen Gesetze") zeigt den Ausweg: Die Menschen
          schließen einen <strong>Vertrag</strong> (covenant), in dem sie
          <strong>alle ihre Rechte</strong> an einen Souverän übertragen —
          den <strong>Leviathan</strong> (nach dem biblischen Seeungeheuer).
        </p>

        ${renderMerkboxGrid([
          { icon: 'fas fa-handshake', title: 'Der Vertrag',
            text: '„Ich autorisiere diesen Menschen (oder diese Versammlung) und übertrage ihm mein Recht, mich selbst zu regieren — unter der Bedingung, dass du dasselbe tust." Alle schließen den Vertrag miteinander, nicht mit dem Souverän. Der Souverän ist kein Vertragspartner — er steht ÜBER dem Vertrag.' },
          { icon: 'fas fa-crown', title: 'Absolute Souveränität',
            text: 'Der Souverän (Monarch oder Versammlung) hat UNBESCHRÄNKTE Macht: Er macht die Gesetze, richtet, bestraft, entscheidet über Krieg und Frieden, zensiert Meinungen. Es gibt kein Widerstandsrecht: Wer dem Souverän widersteht, bricht den Vertrag und fällt in den Naturzustand zurück.' },
          { icon: 'fas fa-balance-scale', title: 'Einzige Grenze: Selbsterhaltung',
            text: 'Der Souverän darf den Bürger nicht töten lassen — denn der Vertrag wurde geschlossen, um das Leben zu schützen. Wer zum Tod verurteilt wird, hat das Recht, sich zu wehren. Die Selbsterhaltung ist das einzige unveräußerliche Recht — alles andere wird dem Souverän übertragen.' },
          { icon: 'fas fa-church', title: 'Staat über Kirche',
            text: 'Auch die Religion untersteht dem Souverän: Er bestimmt, welche Lehren öffentlich vertreten werden dürfen. Keine Kirche, kein Papst steht über dem Staat. Hobbes begründet damit den modernen Säkularismus — die Trennung von Kirche und politischer Macht (zugunsten der Politik).' },
        ])}

        ${renderFormulaBox({
          label: 'Hobbes, Leviathan II, 17',
          formula: '„Die einzige Möglichkeit, eine solche gemeinsame Gewalt aufzurichten,<br>die sie gegen Eingriffe von Außen und Verletzungen untereinander<br>schützen kann, besteht darin, alle ihre Macht und Stärke<br>auf einen einzigen Menschen oder eine Versammlung von Menschen<br>zu übertragen."',
          desc: 'Die Vertragsformel: Alle übertragen ihre Macht an EINEN — den Leviathan. Der „sterbliche Gott", der Frieden und Ordnung garantiert.'
        })}

        ${renderCompare({
          titleA: 'Naturzustand (ohne Staat)',
          titleB: 'Bürgerlicher Zustand (mit Leviathan)',
          listA: [
            'Krieg aller gegen alle',
            'Kein Eigentum, kein Recht',
            'Ständige Furcht vor dem Tod',
            'Leben: einsam, armselig, scheußlich, viehisch, kurz',
            'Freiheit ohne Sicherheit',
          ],
          listB: [
            'Friede durch absolute Macht',
            'Eigentumsrecht, Gesetze, Gerichte',
            'Sicherheit durch Gewaltmonopol',
            'Kultur, Wissenschaft, Handel möglich',
            'Sicherheit durch Unterwerfung',
          ],
        })}
      </div>
    </section>


    <section class="lz-content-section">
      <div class="lz-section-wrap">
        ${renderSubhead('Testfragen — Abiturniveau')}
        ${renderAccordion([
          { title: '1. Beschreiben Sie Hobbes\' Naturzustand und erklären Sie, warum er zum „Krieg aller gegen alle" führt.',
            content: '<p class="lz-prose">Der Naturzustand ist ein <strong>Gedankenexperiment</strong>: Was wäre, wenn es keinen Staat gäbe?<br><br><strong>Drei Prämissen:</strong> (1) <strong>Natürliche Gleichheit:</strong> Alle Menschen sind ungefähr gleich stark und gleich klug. Selbst der Schwächste kann den Stärksten töten (durch List, im Schlaf, durch Verbündete). (2) <strong>Ressourcenknappheit:</strong> Es gibt nicht genug für alle — wenn zwei dasselbe wollen, werden sie zu Feinden. (3) <strong>Rationale Selbsterhaltung:</strong> Jeder strebt nach Selbsterhaltung und Machtgewinn.<br><br><strong>Drei Ursachen des Krieges:</strong> (1) <strong>Konkurrenz</strong> (competition): Kampf um knappe Güter. (2) <strong>Misstrauen</strong> (diffidence): Ich kann nicht sicher sein, dass der andere mich nicht angreift — also greife ich präventiv an. (3) <strong>Ruhmsucht</strong> (glory): Streben nach Anerkennung und Dominanz.<br><br><strong>Ergebnis:</strong> Ein Zustand permanenter Unsicherheit und Gewaltbereitschaft — nicht notwendig ständiger Kampf, aber ständige Bereitschaft zum Kampf (wie „Regenwetter" — nicht ständiger Regen, aber ständige Regenwahrscheinlichkeit). Das Leben ist „solitary, poor, nasty, brutish, and short."</p>' },

          { title: '2. Erklären Sie, warum bei Hobbes der Souverän ÜBER dem Vertrag steht. Welche Konsequenzen hat das?',
            content: '<p class="lz-prose"><strong>Warum über dem Vertrag?</strong> Der Vertrag wird nicht zwischen Volk und Souverän geschlossen, sondern <strong>zwischen den Individuen untereinander</strong>: „Ich übertrage mein Recht an den Souverän, unter der Bedingung, dass du dasselbe tust." Der Souverän ist <strong>Begünstigter</strong>, nicht Vertragspartner. Er hat keine vertraglichen Pflichten gegenüber dem Volk — er kann den Vertrag nicht brechen, weil er nicht Partei ist.<br><br><strong>Hobbes\' Argument:</strong> Wenn der Souverän Vertragspartner wäre und seine Pflichten verletzte, wer sollte dann urteilen? Es bräuchte einen Richter über dem Souverän — aber dann wäre dieser Richter der eigentliche Souverän. Ein Souverän, der dem Recht untersteht, ist kein Souverän. Die Alternative — dass das Volk selbst urteilt — führt zurück in den Naturzustand (Bürgerkrieg).<br><br><strong>Konsequenzen:</strong> (1) Kein <strong>Widerstandsrecht</strong>: Wer dem Souverän widersteht, bricht den Vertrag mit allen anderen und fällt in den Naturzustand zurück. (2) Der Souverän kann ungerecht sein, aber er kann kein <strong>Unrecht</strong> tun — denn „Recht" und „Unrecht" sind seine eigene Setzung. (3) Einzige Grenze: Wenn der Souverän das Leben des Bürgers bedroht, darf sich dieser wehren (denn Selbsterhaltung war der Zweck des Vertrags).<br><br><strong>Kritik (Locke):</strong> Hobbes\' Lösung ist schlimmer als das Problem — er tauscht den Krieg aller gegen alle gegen die Tyrannei eines Einzelnen. Locke wird argumentieren: Der Souverän IST Vertragspartner und kann bei Vertragsbruch abgesetzt werden (Recht auf Revolution).</p>' },

          { title: '3. Vergleichen Sie Hobbes\' Staatstheorie mit Aristoteles\' und der stoischen Tradition.',
            content: '<p class="lz-prose"><strong>Aristoteles:</strong> Der Mensch ist <strong>von Natur aus ein politisches Wesen</strong> (zōon politikón). Die Polis ist nicht künstlich geschaffen, sondern natürlich gewachsen — sie existiert „von Natur" (phýsei), nicht durch Vertrag. Der Staat dient dem „guten Leben" (eu zēn) — Tugend, Glück, Gemeinschaftsleben. Ohne Polis ist der Mensch „entweder Tier oder Gott".<br><br><strong>Stoa:</strong> Alle Menschen sind <strong>Bürger einer Weltgemeinschaft</strong> (Kosmopolis), verbunden durch den gemeinsamen Logos. Das Naturrecht (lex naturalis) bindet auch den Herrscher — ungerechte Gesetze sind keine Gesetze. Pflicht, Tugend und Gemeinwohl stehen über Eigeninteresse.<br><br><strong>Hobbes:</strong> Der Mensch ist <strong>von Natur aus unsozial</strong> — ein egoistischer, ängstlicher Wolf (homo homini lupus). Die Gesellschaft ist kein natürliches Gewächs, sondern ein <strong>künstliches Produkt</strong> rationaler Kalkulation. Der Staat dient nicht dem „guten Leben", sondern dem <strong>Überleben</strong>. Es gibt kein Naturrecht im traditionellen Sinn — Recht ist, was der Souverän bestimmt.<br><br><strong>Grunddifferenz:</strong> Aristoteles und die Stoa: der Mensch ist <strong>sozial und moralisch von Natur aus</strong>. Hobbes: der Mensch ist <strong>asozial und amoralisch von Natur aus</strong> — Moral und Gesellschaft sind künstliche Konstruktionen zur Überlebenssicherung. Diese Differenz prägt die gesamte politische Philosophie bis heute: kommunitarisch (Aristoteles) vs. liberal-individualistisch (Hobbes).</p>' },

          { title: '4. Diskutieren Sie: Ist Hobbes\' Absolutismus eine Form von Tyrannei oder eine rationale Friedenssicherung?',
            content: '<p class="lz-prose"><strong>Für rationale Friedenssicherung:</strong><br>(1) Hobbes\' Prämisse ist empirisch plausibel: In Bürgerkriegen (England 1640er, Dreißigjähriger Krieg) leiden ALLE — auch die „Gewinner". Jede Ordnung ist besser als keine.<br>(2) Der Souverän handelt in seinem eigenen Interesse rational: Ein verwüstetes Land nützt auch dem Herrscher nichts. Eigeninteresse des Souveräns = Wohlstand der Untertanen.<br>(3) Hobbes erlaubt auch eine Versammlung als Souverän (Parlament) — Absolutismus meint nicht Monarchie, sondern unteilbare, oberste Gewalt.<br><br><strong>Für Tyrannei:</strong><br>(1) <strong>Locke:</strong> Ein Souverän ohne Bindung an Gesetze IST ein Tyrann. Die Lösung kann nicht darin bestehen, alle Macht an einen Einzelnen zu geben — denn wer kontrolliert den Kontrolleur?<br>(2) <strong>Montesquieu:</strong> Gewaltenteilung ist nötig — nicht um Macht zu schwächen, sondern um Machtmissbrauch zu verhindern. Hobbes\' ungeteilte Souveränität lädt zum Missbrauch ein.<br>(3) <strong>Historische Erfahrung:</strong> Absolute Herrscher (Ludwig XIV., Stalin, Mao) haben ihre Macht regelmäßig missbraucht. Die Furcht vor dem Naturzustand rechtfertigt nicht jede Form von Herrschaft.<br><br><strong>Vermittlung:</strong> Hobbes\' Analyse des <strong>Problems</strong> (Unsicherheit, Furcht, Bürgerkrieg) ist brillant. Seine <strong>Lösung</strong> (absoluter Souverän ohne Kontrolle) ist fragwürdig. Die liberale Tradition (Locke, Montesquieu, Madison) behält Hobbes\' Prämisse (der Mensch braucht einen Staat), korrigiert aber die Konsequenz (der Staat braucht Kontrolle).</p>' },
        ])}
      </div>
    </section>

    <section class="lz-content-section" style="padding-top:0;">
      <div class="lz-section-wrap">
        ${renderPageNav({
          prev: { label: 'Rationalismus',  link: `${BASE}/themen/neuzeit/rationalismus` },
          next: { label: 'Empirismus',     link: `${BASE}/themen/neuzeit/empirismus` },
        }, BASE)}
      </div>
    </section>
    ${footerHTML(this.router)}
    `;
  }
  init() { i18n.init(); initScrollReveal(); refreshScrollReveal(); initInteractive(document); }
  cleanup() {}
}