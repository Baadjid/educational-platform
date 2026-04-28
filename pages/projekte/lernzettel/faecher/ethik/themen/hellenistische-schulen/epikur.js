// pages/projekte/lernzettel/faecher/ethik/themen/hellenistische-schulen/epikur.js
// ══════════════════════════════════════════════════════════════════
// Kapitel 3.1 — Epikur (um 341–271 v. Chr.)
// Atomismus, Lustethik, Tetrapharmakos, Der Garten
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

const KAP_COLOR = '#2e8b8b';
const KAP_COLOR_RGB = '46, 139, 139';

export default class EpikurPage {
  constructor(router) { this.router = router; }
  render() {
    ensureComponentsCSS();
    loadComponentCSS('pages/projekte/lernzettel/styles/sub.css');
    const el = document.createElement('div');
    el.className = 'page page-epikur';
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
          <span>Epikur</span>
        </nav>
        <h1 class="lz-sub-title"><em>Epikur</em> — Lust, Atome &amp; Seelenruhe</h1>
        <p class="lz-sub-desc">
          Philosophie als Medizin der Seele: Epikur lehrte, dass ein einfaches Leben
          in Freundschaft und Freiheit von Angst das höchste Gut ist —
          nicht zügellose Lust, sondern kluge Vermeidung von Schmerz.
        </p>
        ${renderTags(['Kapitel 3.1', '341–271 v. Chr.', 'Samos · Athen', 'Hedonismus · Atomismus · Tetrapharmakos', 'Abitur 2026'])}
      </div>
    </section>


    <!-- ═══════════════════ BIOGRAPHIE ═══════════════════ -->
    <section class="lz-content-section">
      <div class="lz-section-wrap">
        ${renderSubhead('Biographisches')}
        <h2 class="lz-h2 reveal">Der <em>Garten</em> — Philosophie als Lebensgemeinschaft</h2>

        <p class="lz-prose reveal">
          Epikur wurde 341 v.&nbsp;Chr. auf Samos geboren und gründete 306 v.&nbsp;Chr. in Athen
          seine Schule — den <strong>Kēpos</strong> (Garten). Anders als Platons Akademie und
          Aristoteles' Lykeion war der Garten eine <strong>Lebensgemeinschaft</strong>:
          Philosophen lebten zusammen, aßen einfache Mahlzeiten und kultivierten
          <strong>Freundschaft</strong> (philía) als höchstes Gut nach der Lust.
        </p>

        <p class="lz-prose reveal">
          Revolutionär: Der Garten stand <strong>allen</strong> offen — auch Frauen
          und Sklaven, was in der antiken Welt einzigartig war. Über dem Eingang stand
          angeblich: <em>„Tritt ein, Fremder. Hier wirst du gut aufgenommen. Hier ist
          die Lust das höchste Gut."</em>
        </p>

        ${renderVTimeline([
          { year: '341 v. Chr.', title: 'Geburt auf Samos', text: 'Sohn eines athenischen Siedlers; frühe Beschäftigung mit Demokrits Atomismus' },
          { year: 'ca. 323', title: 'Verlust des Bürgerrechts auf Samos', text: 'Familie wird vertrieben; Erfahrung von Heimatlosigkeit prägt seine Ethik der Autarkie' },
          { year: '311', title: 'Erste Schulgründung in Mytilene/Lampsakos', text: 'Gewinnt erste Schüler; entwickelt sein philosophisches System' },
          { year: '306', title: 'Gründung des „Gartens" (Kēpos) in Athen', text: 'Lebensgemeinschaft vor den Toren der Stadt; Aufnahme von Frauen und Sklaven' },
          { year: '271', title: 'Tod in Athen', text: 'Stirbt an einem Nierenleiden unter großen Schmerzen — mit heiterer Gelassenheit, wie Diogenes Laertios berichtet' },
        ])}
      </div>
    </section>


    <!-- ═══════════════════ NATURPHILOSOPHIE ═══════════════════ -->
    <section class="lz-content-section">
      <div class="lz-section-wrap">
        ${renderSubhead('Naturphilosophie — Atomismus als Befreiung')}
        <h2 class="lz-h2 reveal">Atome, Leeres und der <em>Clinamen</em></h2>

        <p class="lz-prose reveal">
          Epikur übernahm Demokrits <strong>Atomismus</strong>, modifizierte ihn aber
          in einem entscheidenden Punkt. Die Physik dient bei ihm keinem
          Selbstzweck — sie ist <strong>Werkzeug der Ethik</strong>: Wer die Natur
          versteht, befreit sich von der Angst vor Göttern und Tod.
        </p>

        ${renderMerkboxGrid([
          { icon: 'fas fa-atom', title: 'Atome und Leeres',
            text: 'Wie Demokrit: Die Wirklichkeit besteht aus unendlich vielen unteilbaren Teilchen (Atome) im leeren Raum. Alle Phänomene — von Sternen bis zu Gedanken — sind Anordnungen von Atomen. Es gibt keine immateriellen Substanzen, keine Seele ohne Körper.' },
          { icon: 'fas fa-random', title: 'Clinamen (Parénklisis) — die Abweichung',
            text: 'Epikurs origineller Beitrag: Atome bewegen sich nicht nur vertikal (durch Schwere), sondern können minimal und zufällig von ihrer Bahn abweichen — der Clinamen. Diese minimale Zufälligkeit bricht den strikten Determinismus Demokrits und macht Freiheit und Zufall möglich.' },
          { icon: 'fas fa-ghost', title: 'Seele als Atomgefüge',
            text: 'Die Seele besteht aus besonders feinen, kugelförmigen Atomen, die den ganzen Körper durchdringen. Beim Tod löst sich das Atomgefüge auf — die Seele zerstreut sich. Es gibt kein Weiterleben nach dem Tod, keine Belohnung, keine Bestrafung.' },
          { icon: 'fas fa-cloud', title: 'Götter existieren, greifen aber nicht ein',
            text: 'Die Götter sind reale Wesen aus besonders feinen Atomen, leben in den Zwischenwelten (metakósmia) — aber sie kümmern sich nicht um die Menschen. Sie sind vollkommen glückselig und bedürfnislos. Gebete, Opfer, Furcht vor göttlicher Strafe sind sinnlos.' },
        ])}

        ${renderInfobox({
          type: '', icon: 'fas fa-info-circle',
          title: 'Physik als Therapie',
          body: 'Epikurs Naturphilosophie dient einem <strong>therapeutischen Zweck</strong>: Wenn die Welt aus Atomen besteht und keine Götter eingreifen, gibt es <strong>keinen Grund für Angst</strong> — weder vor übernatürlichen Strafen noch vor dem Tod. Physik befreit die Seele von Aberglauben. „Vergeblich ist das Wort eines Philosophen, das kein menschliches Leiden heilt" (Fragment 221).'
        })}
      </div>
    </section>


    <!-- ═══════════════════ ETHIK ═══════════════════ -->
    <section class="lz-content-section">
      <div class="lz-section-wrap">
        ${renderSubhead('Ethik — Die Lustlehre (Hedonismus)')}
        <h2 class="lz-h2 reveal"><em>Hēdonḗ</em> — aber welche Lust?</h2>

        <p class="lz-prose reveal">
          Epikur bestimmt die <strong>Lust</strong> (hēdonḗ) als das höchste Gut und den
          <strong>Schmerz</strong> (pónos) als das größte Übel. Doch sein Hedonismus ist
          das genaue <strong>Gegenteil</strong> dessen, was man gemeinhin darunter versteht:
          Nicht die Maximierung von Genuss, sondern die <strong>Vermeidung von Schmerz</strong>
          und die <strong>Reduktion der Bedürfnisse</strong> führen zur Glückseligkeit.
        </p>

        ${renderCompare({
          titleA: 'Kinetische Lust (hēdonḗ en kinḗsei)',
          titleB: 'Katastematische Lust (hēdonḗ katastēmatikḗ)',
          listA: [
            'Lust <strong>in Bewegung</strong> — aktiver Genuss',
            'Essen, Trinken, Sex — erfüllt ein akutes Bedürfnis',
            'Flüchtig: hört auf, sobald das Bedürfnis gestillt ist',
            'Führt oft zum Gegenteil: Übermaß erzeugt Schmerz',
            'Wird von Epikur <strong>nicht als Ziel</strong> empfohlen',
          ],
          listB: [
            'Lust <strong>im Zustand</strong> — Schmerzfreiheit',
            '<strong>Aponía</strong> (körperliche Schmerzfreiheit) + <strong>Ataraxía</strong> (Seelenruhe)',
            'Dauerhaft: bleibt, solange kein Schmerz stört',
            'Stabiles Glück, unabhängig von äußeren Umständen',
            '<strong>Das eigentliche Ziel</strong> epikureischer Ethik',
          ],
        })}

        ${renderFormulaBox({
          label: 'Epikur, Brief an Menoikeus (DL X, 131)',
          formula: '„Wenn wir sagen, die Lust sei das Ziel, meinen wir nicht<br>die Lust der Schlemmer und nicht die in sinnlichem Genuss besteht,<br>sondern das Freisein von körperlichem Schmerz<br>und von seelischer Unruhe."',
          desc: 'Epikurs Selbstkorrektur gegen das Missverständnis des Hedonismus: Nicht die „Lust der Schlemmer", sondern Aponía (Schmerzfreiheit) + Ataraxía (Seelenruhe) = wahre Lust.'
        })}

        <h3 class="lz-h3 reveal">Die Klassifikation der Begierden</h3>

        ${renderTable({
          headers: ['Typ', 'Beispiel', 'Bewertung'],
          rows: [
            ['<strong>Natürlich & notwendig</strong>',     'Essen, Trinken, Schlaf, Schutz vor Kälte',       '✅ Befriedigen — sie zu ignorieren verursacht Schmerz'],
            ['<strong>Natürlich & nicht notwendig</strong>','Luxuriöses Essen, teurer Wein, vielfältige Sexualität', '⚠️ Maßvoll genießen — aber nicht davon abhängig werden'],
            ['<strong>Weder natürlich noch notwendig</strong>', 'Ruhm, Macht, Reichtum, Status',              '❌ Vermeiden — sie erzeugen endlose Unruhe ohne echte Befriedigung'],
          ],
          highlight: [0],
        })}

        ${renderInfobox({
          type: 'success', icon: 'fas fa-lightbulb',
          title: 'Epikurs Lebensideal',
          body: 'Epikur lebte selbst extrem bescheiden: Wasser und Brot, ein einfacher Garten, der Kreis enger Freunde. <em>„Schicke mir ein Töpfchen Käse, damit ich einmal üppig tafeln kann, wenn ich Lust habe"</em> (Brief an einen Freund). Die Reduktion der Bedürfnisse ist der Schlüssel: Wer wenig braucht, dem fehlt selten etwas — und er ist frei.'
        })}
      </div>
    </section>


    <!-- ═══════════════════ TETRAPHARMAKOS ═══════════════════ -->
    <section class="lz-content-section">
      <div class="lz-section-wrap">
        ${renderSubhead('Das Tetrapharmakos — Die vierfache Medizin')}
        <h2 class="lz-h2 reveal">Vier Sätze gegen die <em>vier Ängste</em></h2>

        <p class="lz-prose reveal">
          Das <strong>Tetrapharmakos</strong> (Vierfach-Heilmittel) fasst Epikurs
          gesamte Philosophie in vier therapeutische Sätze zusammen — vier Medikamente
          gegen die vier Grundängste des Menschen:
        </p>

        ${renderMerkboxGrid([
          { icon: 'fas fa-cloud', title: '1. „Gott ist nicht zu fürchten"',
            text: 'Die Götter existieren, sind aber vollkommen glückselig und unbekümmert. Sie greifen nicht in die Welt ein, strafen nicht, belohnen nicht. Religiöse Furcht ist irrational — die Götter sind Vorbilder des gelassenen Lebens, keine strafenden Richter.' },
          { icon: 'fas fa-skull', title: '2. „Der Tod geht uns nichts an"',
            text: '„Solange wir sind, ist der Tod nicht da; wenn der Tod da ist, sind wir nicht mehr." Tod = Auflösung des Atomgefüges = Ende aller Empfindung. Wer nicht empfindet, kann nicht leiden. Der Tod ist kein Übel — er betrifft uns buchstäblich nicht.' },
          { icon: 'fas fa-hand-holding-heart', title: '3. „Das Gute ist leicht zu erreichen"',
            text: 'Die natürlichen und notwendigen Bedürfnisse (Nahrung, Schutz, Freundschaft) sind leicht zu befriedigen. Was wirklich zum Glück nötig ist, ist verfügbar. Nur die leeren Begierden (Macht, Ruhm, Luxus) sind unersättlich und machen unglücklich.' },
          { icon: 'fas fa-shield-alt', title: '4. „Das Schlimme ist leicht zu ertragen"',
            text: 'Starker Schmerz ist kurz (akute Krankheit, Verletzung), lang andauernder Schmerz ist erträglich (chronische Leiden). Extremer Schmerz führt zum Tod oder zur Bewusstlosigkeit — beides beendet das Leiden. Es gibt keinen Schmerz, der zugleich extrem und ewig ist.' },
        ])}

        ${renderFormulaBox({
          label: 'Epikur, Brief an Menoikeus (DL X, 125)',
          formula: '„Das schauerlichste aller Übel, der Tod, geht uns nichts an:<br>Denn solange wir da sind, ist der Tod nicht da,<br>und wenn der Tod da ist, sind wir nicht mehr."',
          desc: 'Das berühmteste Argument gegen die Todesangst. Es beruht auf der atomistischen Prämisse: Empfindung setzt ein intaktes Atomgefüge (= lebenden Körper) voraus. Ohne Körper keine Empfindung, ohne Empfindung kein Leiden.'
        })}

        ${renderInfobox({
          type: 'blue', icon: 'fas fa-graduation-cap',
          title: 'Abitur-Hinweis: Todesargument',
          body: 'Epikurs Todesargument wird in Klausuren häufig diskutiert. <strong>Gegenargumente:</strong> (1) Lukrez\' Symmetrie-Argument: Wir fürchten die Zeit vor unserer Geburt nicht — warum die nach dem Tod? (2) <strong>Nagel-Einwand</strong>: Tod ist ein Übel, weil er uns zukünftige Güter <em>raubt</em> (Deprivationstheorie). Der Tod betrifft uns sehr wohl — als <strong>Verlust von Möglichkeiten</strong>. (3) <strong>Existenzielle Angst</strong> (Heidegger): Die Angst vor dem Tod ist keine Angst vor einem Ereignis, sondern vor dem <strong>Nichtsein</strong> — und die kann Epikur nicht auflösen.'
        })}
      </div>
    </section>


    <!-- ═══════════════════ FREUNDSCHAFT & POLITIK ═══════════════════ -->
    <section class="lz-content-section">
      <div class="lz-section-wrap">
        ${renderSubhead('Freundschaft und politische Philosophie')}
        <h2 class="lz-h2 reveal"><em>Láthe biṓsas</em> — Lebe im Verborgenen</h2>

        ${renderMerkboxGrid([
          { icon: 'fas fa-user-friends', title: 'Freundschaft (Philía)',
            text: '„Von allem, was die Weisheit für ein glückseliges Leben bereithält, ist das Größte der Besitz der Freundschaft." Freundschaft entsteht aus Nutzen (Sicherheit, Unterstützung), wird aber zum Selbstzweck — man liebt den Freund um seiner selbst willen. Die epikureische Gemeinschaft ist das Modell: einfaches Leben, geteilte Mahlzeiten, philosophische Gespräche.' },
          { icon: 'fas fa-door-closed', title: 'Rückzug aus der Politik',
            text: '„Láthe biṓsas" (Lebe im Verborgenen): Epikur empfiehlt den Rückzug aus dem politischen Leben. Politik bringt Unruhe, Rivalität, Feindschaft — sie stört die Ataraxía. Der Weise lebt unauffällig, mischt sich nicht in öffentliche Angelegenheiten, pflegt seinen Garten und seine Freunde.' },
          { icon: 'fas fa-handshake', title: 'Gerechtigkeitsvertrag',
            text: 'Gerechtigkeit ist kein Naturgesetz (phýsis), sondern ein Vertrag (synthḗkē) zum gegenseitigen Nutzen: „Gerechtigkeit ist ein Vertrag, einander weder zu schädigen noch sich schädigen zu lassen." Vorläufer der neuzeitlichen Vertragstheorie (Hobbes, Locke, Rousseau).' },
        ])}

        ${renderCompare({
          titleA: 'Epikur — Rückzug',
          titleB: 'Aristoteles — Engagement',
          listA: [
            '„Lebe im Verborgenen" (láthe biṓsas)',
            'Politik stört die Seelenruhe',
            'Glück im privaten Freundeskreis',
            'Gerechtigkeit = Nutzensvertrag',
            'Der Weise meidet Ämter und öffentliche Rede',
          ],
          listB: [
            '„Der Mensch ist ein politisches Wesen" (zōon politikón)',
            'Eudaimonie nur in der Polis möglich',
            'Glück erfordert politische Teilhabe',
            'Gerechtigkeit = Tugend in der Gemeinschaft',
            'Der gute Bürger strebt nach dem Gemeinwohl',
          ],
        })}
      </div>
    </section>


    <!-- ═══════════════════ TESTFRAGEN ═══════════════════ -->
    <section class="lz-content-section">
      <div class="lz-section-wrap">
        ${renderSubhead('Testfragen — Abiturniveau')}
        ${renderAccordion([
          { title: '1. Erklären Sie, warum Epikurs Hedonismus kein „Hedonismus" im Alltagssinn ist.',
            content: '<p class="lz-prose">Im Alltagsverständnis meint „Hedonismus" <strong>Genusssucht</strong>: möglichst viel Essen, Trinken, Sex, Luxus. Epikurs Position ist das <strong>genaue Gegenteil</strong>:<br><br>(1) Das Ziel ist nicht die <strong>Maximierung</strong> von Lust, sondern die <strong>Minimierung</strong> von Schmerz. Das höchste Gut ist nicht aktiver Genuss (kinetische Lust), sondern der <strong>Zustand der Schmerzfreiheit</strong> (katastematische Lust): Aponía (körperlich) + Ataraxía (seelisch).<br><br>(2) Epikur empfiehlt die <strong>Reduktion der Bedürfnisse</strong>: Je weniger ich brauche, desto seltener fehlt mir etwas, desto seltener leide ich. Brot und Wasser genügen — wer damit zufrieden ist, „wetteifert an Lust mit Zeus" (Fragment 602).<br><br>(3) Die <strong>Klassifikation der Begierden</strong> zeigt: Nur die natürlichen und notwendigen Begierden sollen befriedigt werden. Leere Begierden (Ruhm, Macht) erzeugen endlose Unruhe und sollen eliminiert werden.<br><br>(4) Epikurs <strong>hedonistisches Kalkül</strong>: Manchmal ist ein kurzfristiger Schmerz zu akzeptieren, um langfristige Lust zu gewinnen (z.B. Zahnbehandlung). Und manchmal ist eine kurzfristige Lust zu meiden, weil sie langfristigen Schmerz verursacht (z.B. Rausch → Kater).<br><br>Epikur ist kein „Genussmensch", sondern ein <strong>philosophischer Asket</strong> — aber einer, der die Askese nicht aus Pflicht, sondern aus Klugheit praktiziert.</p>' },

          { title: '2. Rekonstruieren Sie Epikurs Argument gegen die Todesangst und diskutieren Sie zwei Einwände.',
            content: '<p class="lz-prose"><strong>Das Argument:</strong> (P1) Tod = Auflösung des Atomgefüges = Ende aller Empfindung. (P2) Etwas ist nur dann ein Übel für mich, wenn ich es <strong>empfinde</strong>. (K) Der Tod ist kein Übel für mich, denn „solange wir sind, ist der Tod nicht da, und wenn der Tod da ist, sind wir nicht mehr."<br><br><strong>Einwand 1 — Deprivationstheorie (Thomas Nagel):</strong> Der Tod ist ein Übel, nicht weil er eine <strong>negative Empfindung</strong> verursacht, sondern weil er uns <strong>zukünftige Güter raubt</strong>. Wer mit 30 stirbt, verliert 50 Jahre möglichen Lebens — die Abwesenheit von Gutem ist selbst ein Übel. Epikur antwortet implizit: Das Nicht-Vorhandene kann kein Subjekt berauben — wo kein Subjekt, da kein Verlust.<br><br><strong>Einwand 2 — Existenzielle Angst (Heidegger):</strong> Die Todesangst richtet sich nicht auf den <strong>Moment</strong> des Sterbens (den Epikur als kurz abtut), sondern auf das <strong>Nicht-mehr-Sein</strong> als solches. Heidegger unterscheidet: <strong>Furcht</strong> (vor einem bestimmten Ereignis) lässt sich durch Argumente zerstreuen; <strong>Angst</strong> (vor dem Nichts) nicht. Epikurs Argument trifft die Furcht, aber nicht die existenzielle Angst.</p>' },

          { title: '3. Vergleichen Sie Epikurs und Aristoteles\' Glücksbegriff systematisch.',
            content: '<p class="lz-prose"><strong>Gemeinsamkeit:</strong> Beide halten Glück (Eudaimonía / Ataraxía) für das <strong>höchste Gut</strong>, nach dem alle Menschen streben, und bestimmen es als einen <strong>dauerhaften Zustand</strong>, nicht als flüchtiges Gefühl.<br><br><strong>Unterschiede:</strong><br>(1) <strong>Inhalt:</strong> Aristoteles: Eudaimonie = Tätigkeit der Seele gemäß der Tugend — aktives Ausüben von Vernunft und Charakter. Epikur: Glück = Schmerzfreiheit (Aponía) + Seelenruhe (Ataraxía) — Abwesenheit von Störung.<br>(2) <strong>Tugend:</strong> Aristoteles: Tugend ist Selbstzweck und Kern des guten Lebens. Epikur: Tugend ist Mittel zum Zweck — nützlich, weil sie zur Lust beiträgt.<br>(3) <strong>Äußere Güter:</strong> Aristoteles: Eudaimonie braucht ein Mindestmaß an äußeren Gütern (Gesundheit, Freunde, Wohlstand). Epikur: Der Weise ist autark — er kann auch auf der Folterbank glücklich sein (wenn er die richtige Einstellung hat).<br>(4) <strong>Politik:</strong> Aristoteles: Eudaimonie ist nur in der Polis möglich (zōon politikón). Epikur: „Lebe im Verborgenen" — Politik stört die Seelenruhe.<br>(5) <strong>Maßstab:</strong> Aristoteles: objektives Gelingen (von außen beurteilbar). Epikur: subjektive Empfindung (Schmerzfreiheit).</p>' },

          { title: '4. Erklären Sie, warum Epikur den Clinamen (Abweichung der Atome) einführte und welche philosophische Bedeutung er hat.',
            content: '<p class="lz-prose"><strong>Das Problem:</strong> Demokrits Atomismus ist strikt <strong>deterministisch</strong>: Alle Atombewegungen folgen aus Notwendigkeit (anánkē). Wenn alles durch vorherige Ursachen festgelegt ist, gibt es keinen <strong>freien Willen</strong>: Jede Entscheidung wäre das unvermeidliche Ergebnis atomarer Prozesse.<br><br><strong>Epikurs Lösung:</strong> Der <strong>Clinamen</strong> (lat. clinamen = Neigung; griech. parénklisis = Abweichung): Atome können <strong>spontan und minimal</strong> von ihrer geraden Fallbahn abweichen — ohne äußere Ursache, zu keiner festgelegten Zeit, an keinem festgelegten Ort. Diese Zufallsabweichung bricht die deterministische Kausalkette.<br><br><strong>Philosophische Bedeutung:</strong><br>(1) <strong>Willensfreiheit:</strong> Der Clinamen schafft Raum für Freiheit in einem materialistischen Universum. Wenn nicht alles vorherbestimmt ist, können Menschen echte Entscheidungen treffen.<br>(2) <strong>Kritik am Schicksal:</strong> Gegen die Stoa (die einen umfassenden Determinismus vertritt) und gegen den religiösen Fatalismus: Der Mensch ist nicht Spielball kosmischer Mächte, sondern hat Spielraum.<br>(3) <strong>Moderne Relevanz:</strong> Die Debatte Determinismus vs. Freiheit ist in der Philosophie des Geistes bis heute offen. Die Quantenmechanik zeigt tatsächlich eine fundamentale Zufallskomponente in der Natur — ob das für die Willensfreiheit reicht, ist allerdings umstritten.</p>' },
        ])}
      </div>
    </section>

    <section class="lz-content-section" style="padding-top:0;">
      <div class="lz-section-wrap">
        ${renderPageNav({
          prev: { label: 'Aristoteles', link: `${BASE}/themen/klassische-antike/aristoteles` },
          next: { label: 'Die Stoa',     link: `${BASE}/themen/hellenistische-schulen/stoa` },
        }, BASE)}
      </div>
    </section>
    ${footerHTML(this.router)}
    `;
  }
  init() { i18n.init(); initScrollReveal(); refreshScrollReveal(); initInteractive(document); }
  cleanup() {}
}