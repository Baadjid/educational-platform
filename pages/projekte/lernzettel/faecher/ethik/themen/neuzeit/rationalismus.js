// pages/projekte/lernzettel/faecher/ethik/themen/neuzeit/rationalismus.js
// ══════════════════════════════════════════════════════════════════
// Kapitel 6.2 — Rationalismus
// Descartes, Spinoza, Leibniz
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

const DESCARTES_TABS = [
  { key: 'zweifel',  label: 'Methodischer Zweifel' },
  { key: 'cogito',   label: 'Cogito' },
  { key: 'dual',     label: 'Substanzdualismus' },
];

export default class RationalismusPage {
  constructor(router) { this.router = router; }
  render() {
    ensureComponentsCSS();
    loadComponentCSS('pages/projekte/lernzettel/styles/sub.css');
    const el = document.createElement('div');
    el.className = 'page page-rationalismus';
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
          <span>Rationalismus</span>
        </nav>
        <h1 class="lz-sub-title">Der <em>Rationalismus</em></h1>
        <p class="lz-sub-desc">
          Vernunft als einzige Quelle sicherer Erkenntnis:
          Descartes, Spinoza und Leibniz begründeten die neuzeitliche Philosophie
          auf dem Fundament des reinen Denkens — unabhängig von Sinneserfahrung,
          Tradition und Autorität.
        </p>
        ${renderTags(['Kapitel 6.2', '17. Jh.', 'Frankreich · Niederlande · Deutschland', 'Cogito · Substanz · Monade · Methode', 'Abitur 2026'])}
      </div>
    </section>

    <section class="lz-content-section">
      <div class="lz-section-wrap">
        ${renderSubhead('René Descartes (1596–1650)')}
        <h2 class="lz-h2 reveal"><em>Cogito ergo sum</em> — Der Vater der modernen Philosophie</h2>
        <p class="lz-prose reveal">
          René Descartes gilt als <strong>Begründer der neuzeitlichen Philosophie</strong>.
          Er stellte die Frage, die alles veränderte: <strong>Gibt es irgendetwas,
          an dem ich absolut nicht zweifeln kann?</strong> Sein methodischer Zweifel
          führte zum berühmtesten Satz der Philosophiegeschichte — und zu einem
          völlig neuen Fundament der Erkenntnis.
        </p>
        ${renderVTimeline([
          { year: '1596', title: 'Geburt in La Haye (Touraine)', text: 'Wohlhabende Familie; Jesuitenkolleg La Flèche (hervorragende Ausbildung)' },
          { year: '1619', title: 'Die „Nacht der drei Träume"', text: 'Im Winter in einem beheizten Zimmer (poêle) in Neuburg a.d. Donau: Erleuchtungserlebnis — Vision einer universellen Methode' },
          { year: '1628', title: 'Übersiedlung in die Niederlande', text: '20 Jahre intellektuelle Freiheit; vermeidet die Zensur Frankreichs' },
          { year: '1637', title: 'Discours de la méthode', text: 'Programm der neuen Philosophie — auf Französisch (nicht Latein!) verfasst' },
          { year: '1641', title: 'Meditationes de prima philosophia', text: 'Hauptwerk: Sechs Meditationen über die Grundlagen der Erkenntnis' },
          { year: '1649', title: 'Einladung nach Stockholm', text: 'Königin Christina von Schweden will Philosophie lernen — um 5 Uhr morgens im kalten Palast' },
          { year: '1650', title: 'Tod in Stockholm', text: 'Stirbt an Lungenentzündung; „der schwedische Winter hat mich getötet"' },
        ])}

        <nav class="wim-tabs" id="descartes-tabs" aria-label="Descartes">
          ${DESCARTES_TABS.map((t, i) => `
            <button class="wim-tab${i === 0 ? ' active' : ''}" data-wim="${t.key}">
              ${t.label}
            </button>`).join('')}
        </nav>

        <div class="wim-category" data-wim-cat="zweifel">
          <h3 class="lz-h3">Die vier Stufen des Zweifels</h3>
          <p class="lz-prose">Descartes zweifelt systematisch an allem, was bisher als sicher galt:</p>
          ${renderMerkboxGrid([
            { icon: 'fas fa-eye-slash', title: '1. Sinnestäuschung',
              text: 'Die Sinne täuschen manchmal (optische Illusionen, Entfernungsschätzungen). Was manchmal täuscht, kann immer täuschen. Also sind Sinneseindrücke als Erkenntnisquelle unzuverlässig.' },
            { icon: 'fas fa-bed', title: '2. Traumargument',
              text: 'Ich kann nie sicher sein, ob ich wache oder träume — im Traum hält man alles für real. Vielleicht ist mein gesamtes „Wachleben" ein Traum. Keine Sinneserfahrung gibt ein sicheres Kriterium zur Unterscheidung.' },
            { icon: 'fas fa-calculator', title: '3. Mathematik-Zweifel',
              text: 'Auch mathematische Wahrheiten (2+3=5) könnten falsch sein — vielleicht irre ich mich bei jeder Berechnung. Sogar die Logik selbst könnte unzuverlässig sein.' },
            { icon: 'fas fa-user-secret', title: '4. Genius malignus (böser Dämon)',
              text: 'Radikalste Stufe: Vielleicht existiert ein allmächtiger böser Geist, der mich systematisch über ALLES täuscht — über die Existenz der Außenwelt, über Mathematik, über meinen eigenen Körper. Universale Täuschungshypothese.' },
          ])}
        </div>

        <div class="wim-category hidden" data-wim-cat="cogito">
          <h3 class="lz-h3">Das unbezweifelbare Fundament</h3>
          ${renderFormulaBox({
            label: 'Descartes, Meditationes II (1641)',
            formula: '„Cogito, ergo sum."<br>(Ich denke, also bin ich.)',
            desc: 'Selbst wenn ein allmächtiger Dämon mich über alles täuscht — über die Existenz der Welt, über Mathematik, über meinen Körper — eines kann er nicht: mich darüber täuschen, DASS ICH DENKE. Denn um getäuscht zu werden, muss ich existieren. Das Cogito ist das erste absolut sichere Fundament.'
          })}
          <p class="lz-prose">Das Cogito ist <strong>kein Syllogismus</strong> (nicht: „Alle Denkenden existieren / Ich denke / Also existiere ich"), sondern eine <strong>unmittelbare Intuition</strong>: Im Akt des Zweifelns/Denkens bin ich mir meiner eigenen Existenz unmittelbar gewiss. Das Cogito ist <strong>performativ</strong>: Es beweist sich durch seinen Vollzug.</p>
        </div>

        <div class="wim-category hidden" data-wim-cat="dual">
          <h3 class="lz-h3">Zwei Substanzen — Geist und Körper</h3>
          <p class="lz-prose">Vom Cogito ausgehend entwickelt Descartes einen strikten <strong>Dualismus</strong>:</p>
          ${renderCompare({
            titleA: 'Res cogitans (denkende Substanz)', titleB: 'Res extensa (ausgedehnte Substanz)',
            listA: ['Geist, Seele, Bewusstsein', 'Wesentliche Eigenschaft: <strong>Denken</strong>', 'Unausgedehnt, unteilbar', 'Frei (Willensfreiheit)', 'Unmittelbar gewiss (Cogito)'],
            listB: ['Körper, Materie, Natur', 'Wesentliche Eigenschaft: <strong>Ausdehnung</strong>', 'Ausgedehnt, teilbar', 'Mechanisch determiniert', 'Nur mittelbar erkennbar (über Gott)'],
          })}
          ${renderInfobox({
            type: 'warning', icon: 'fas fa-exclamation-triangle',
            title: 'Das Leib-Seele-Problem',
            body: 'Wenn Geist und Körper zwei völlig verschiedene Substanzen sind — <strong>wie können sie aufeinander wirken?</strong> Wie verursacht ein Willensakt (Geist) eine Armbewegung (Körper)? Wie verursacht eine Verletzung (Körper) Schmerz (Geist)? Descartes\' Antwort — die Zirbeldrüse als „Sitz der Seele" — überzeugte niemanden. Das <strong>Leib-Seele-Problem</strong> (mind-body problem) ist bis heute eines der zentralen Probleme der Philosophie des Geistes.'
          })}
        </div>
      </div>
    </section>

    <section class="lz-content-section">
      <div class="lz-section-wrap">
        ${renderSubhead('Baruch de Spinoza (1632–1677)')}
        <h2 class="lz-h2 reveal"><em>Deus sive Natura</em> — Gott oder die Natur</h2>
        <p class="lz-prose reveal">
          Spinoza, aus einer portugiesisch-jüdischen Familie in Amsterdam stammend,
          wurde 1656 wegen seiner Ideen aus der jüdischen Gemeinde
          <strong>exkommuniziert</strong> (cherem). Er lebte fortan als
          Linsenschleifer und privater Denker — und schuf eines der radikalsten
          philosophischen Systeme überhaupt: die <em>Ethica ordine geometrico
          demonstrata</em> (Ethik, nach geometrischer Methode bewiesen).
        </p>
        ${renderMerkboxGrid([
          { icon: 'fas fa-gem', title: 'Eine einzige Substanz',
            text: 'Gegen Descartes\' Dualismus: Es gibt nur EINE Substanz — Gott/Natur (Deus sive Natura). Was Descartes „Geist" und „Körper" nannte, sind nur zwei ATTRIBUTE (Weisen, die eine Substanz zu begreifen) derselben einen Wirklichkeit. Denken und Ausdehnung sind Aspekte desselben.' },
          { icon: 'fas fa-cogs', title: 'Strikter Determinismus',
            text: 'Alles geschieht mit absoluter Notwendigkeit aus der göttlichen Natur. Es gibt keinen freien Willen — Freiheit ist die Illusion, die Ursachen unserer Handlungen nicht zu kennen. „Die Menschen täuschen sich, wenn sie glauben, frei zu sein" (Ethik I, Anhang). Nur Gott/Natur als Ganzes ist „frei" — weil nichts außerhalb seiner ihn bestimmt.' },
          { icon: 'fas fa-heart', title: 'Conatus — Selbsterhaltungsstreben',
            text: 'Jedes Ding strebt danach, in seinem Sein zu verharren (conatus). Beim Menschen äußert sich das als Begierde (cupiditas), Freude (laetitia, wenn die Handlungsfähigkeit steigt) und Trauer (tristitia, wenn sie sinkt). Alle Affekte lassen sich auf diese drei Grundaffekte zurückführen.' },
          { icon: 'fas fa-brain', title: 'Freiheit durch Erkenntnis',
            text: 'Wahre Freiheit ist nicht Willensfreiheit (die gibt es nicht), sondern Einsicht in die Notwendigkeit. Wer versteht, WARUM er so handelt, wie er handelt, wird von den Affekten nicht mehr blind beherrscht. Die höchste Form der Erkenntnis ist die „dritte Gattung" — intuitive Erkenntnis sub specie aeternitatis (unter dem Gesichtspunkt der Ewigkeit).' },
          { icon: 'fas fa-smile', title: 'Beatitudo — Glückseligkeit',
            text: 'Die Glückseligkeit besteht in der „intellektuellen Liebe zu Gott" (amor Dei intellectualis) — dem Erkennen der ewigen Notwendigkeit aller Dinge. Wer die Welt sub specie aeternitatis betrachtet, erkennt: Alles ist so, wie es sein muss. Diese Erkenntnis befreit von Furcht, Hoffnung und Hass.' },
        ])}
        ${renderFormulaBox({
          label: 'Spinoza, Ethik I, Proposition 14',
          formula: '„Außer Gott kann es keine Substanz geben<br>und keine gedacht werden."<br>(Praeter Deum nulla dari neque concipi potest substantia.)',
          desc: 'Substanzmonismus: Es gibt nur EINE Substanz — Gott/Natur. Alles andere (Menschen, Tiere, Steine) sind Modi (Weisen) dieser einen Substanz, wie Wellen Modi des Ozeans sind.'
        })}
      </div>
    </section>

    <section class="lz-content-section">
      <div class="lz-section-wrap">
        ${renderSubhead('Gottfried Wilhelm Leibniz (1646–1716)')}
        <h2 class="lz-h2 reveal"><em>Monaden</em> und die beste aller möglichen Welten</h2>
        <p class="lz-prose reveal">
          Leibniz war das letzte Universalgenie Europas: Philosoph, Mathematiker
          (Miterfinder der Infinitesimalrechnung, unabhängig von Newton),
          Jurist, Diplomat, Historiker, Sprachwissenschaftler und Ingenieur.
          Er entwarf eine Rechenmaschine, plante die Trockenlegung des Harzer
          Bergbaus und korrespondierte mit über 1.100 Gelehrten in ganz Europa.
        </p>
        ${renderMerkboxGrid([
          { icon: 'fas fa-dot-circle', title: 'Monaden — Die Bausteine der Wirklichkeit',
            text: 'Die Wirklichkeit besteht aus unendlich vielen einfachen, unteilbaren, immateriellen „Monaden" — seelische Einheiten, die die Welt aus ihrer jeweiligen Perspektive „spiegeln". Monaden haben keine Fenster — sie wirken nicht aufeinander ein, sondern jede folgt ihrem eigenen inneren Programm.' },
          { icon: 'fas fa-sync-alt', title: 'Prästabilierte Harmonie',
            text: 'Wie erklärt sich die Übereinstimmung zwischen Monaden (wenn sie keine Fenster haben)? Gott hat sie beim Erschaffen so programmiert, dass sie perfekt aufeinander abgestimmt sind — wie zwei Uhren, die von einem Uhrmacher synchronisiert wurden. Leib und Seele wirken nicht aufeinander, sondern laufen parallel.' },
          { icon: 'fas fa-star', title: 'Beste aller möglichen Welten (Theodizee)',
            text: 'Gott hat aus unendlich vielen möglichen Welten die BESTE gewählt — die, in der das Maximum an Gutem mit dem Minimum an Übel realisiert ist. „Warum gibt es etwas und nicht vielmehr nichts?" — weil Gott in seiner Güte die bestmögliche Welt verwirklicht hat. Voltaire wird das in „Candide" (1759) verheerend parodieren.' },
          { icon: 'fas fa-balance-scale', title: 'Satz vom zureichenden Grund',
            text: '„Nichts geschieht ohne zureichenden Grund" (nihil fit sine ratione sufficiente). Jede Tatsache hat eine Erklärung. Es gibt keine grundlosen Fakten, keinen reinen Zufall. Zusammen mit dem Widerspruchsprinzip die Grundlage aller Leibnizschen Philosophie.' },
          { icon: 'fas fa-fingerprint', title: 'Identität des Ununterscheidbaren',
            text: 'Principium identitatis indiscernibilium: Wenn zwei Dinge in ALLEN Eigenschaften übereinstimmen, sind sie identisch (= es ist nur ein Ding). Es gibt keine zwei völlig gleichen Blätter, keine zwei identischen Monaden — jede ist einzigartig in ihrer Perspektive auf das Universum.' },
        ])}
        ${renderFormulaBox({
          label: 'Leibniz, Principes de la nature et de la grâce, §7 (1714)',
          formula: '„Pourquoi il y a plutôt quelque chose que rien?"<br>(Warum gibt es überhaupt etwas und nicht vielmehr nichts?)',
          desc: 'Die „Grundfrage der Metaphysik" — für Leibniz beantwortet durch den Satz vom zureichenden Grund: Es gibt etwas, weil ein allgütiger Gott die beste Welt verwirklicht hat. Heidegger wird diese Frage 200 Jahre später als die tiefste Frage der Philosophie bezeichnen.'
        })}
      </div>
    </section>

    <section class="lz-content-section">
      <div class="lz-section-wrap">
        ${renderSubhead('Vergleich: Drei Rationalisten')}
        ${renderTable({
          headers: ['', 'Descartes', 'Spinoza', 'Leibniz'],
          rows: [
            ['<strong>Substanzen</strong>',   '2: Geist + Materie (+ Gott)',  '1: Gott/Natur',                'Unendlich viele: Monaden'],
            ['<strong>Gott</strong>',          'Transzendent, Schöpfer',       'Immanent: Deus sive Natura',   'Transzendent, wählt beste Welt'],
            ['<strong>Freiheit</strong>',      'Ja: freier Wille',            'Nein: strenger Determinismus',  'Ja: spontane Monadenaktivität'],
            ['<strong>Leib-Seele</strong>',    'Dualismus (Interaktion?)',     'Parallelismus (zwei Attribute)', 'Prästabilierte Harmonie'],
            ['<strong>Erkenntnis</strong>',    'Klare & deutliche Ideen',     'Drei Erkenntnisgattungen',      'Angeborene Ideen + Logik'],
            ['<strong>Methode</strong>',       'Analytisch-deduktiv',         'Geometrische Methode (more geometrico)', 'Logisch-kombinatorisch'],
            ['<strong>Hauptwerk</strong>',     'Meditationes (1641)',          'Ethik (1677, postum)',          'Monadologie (1714)'],
          ],
          highlight: [0, 3],
        })}
        ${renderInfobox({
          type: 'blue', icon: 'fas fa-graduation-cap',
          title: 'Abitur-Hinweis: Rationalismus vs. Empirismus',
          body: 'Der Gegensatz Rationalismus/Empirismus ist ein <strong>Standardthema</strong>. Alle drei Rationalisten teilen: (1) Vernunft ist die primäre Erkenntnisquelle (nicht die Sinne). (2) Es gibt angeborene Ideen (ideae innatae). (3) Sichere Erkenntnis ist möglich (gegen die Skeptiker). (4) Die Methode ist deduktiv (vom Allgemeinen zum Besonderen). <strong>Kant</strong> wird beide Traditionen in der <em>Kritik der reinen Vernunft</em> (1781) zu vereinen versuchen.'
        })}
      </div>
    </section>

    <section class="lz-content-section">
      <div class="lz-section-wrap">
        ${renderSubhead('Testfragen — Abiturniveau')}
        ${renderAccordion([
          { title: '1. Rekonstruieren Sie Descartes\' methodischen Zweifel und das Cogito-Argument.',
            content: '<p class="lz-prose"><strong>Methodischer Zweifel (4 Stufen):</strong><br>(1) <strong>Sinne:</strong> Täuschen manchmal → sind grundsätzlich unzuverlässig.<br>(2) <strong>Traum:</strong> Keine sichere Unterscheidung zwischen Wachen und Träumen → die gesamte Sinneswelt könnte Illusion sein.<br>(3) <strong>Mathematik:</strong> Vielleicht irre ich mich systematisch bei allen Berechnungen → sogar logisch-mathematische Wahrheiten sind bezweifelbar.<br>(4) <strong>Genius malignus:</strong> Ein allmächtiger böser Geist könnte mich über ALLES täuschen → universale Täuschungshypothese.<br><br><strong>Das Cogito:</strong> Selbst wenn der Dämon mich über alles täuscht — er kann nicht verhindern, dass ICH EXISTIERE, wenn ich getäuscht werde. „Cogito ergo sum" — im Akt des Denkens/Zweifelns bin ich mir meiner Existenz unmittelbar gewiss. Das Cogito ist:<br>- <strong>Performativ:</strong> Es beweist sich durch seinen Vollzug (nicht durch einen Syllogismus).<br>- <strong>Indubitabel:</strong> Jeder Versuch, es zu bezweifeln, bestätigt es.<br>- <strong>Fundamental:</strong> Es ist das erste sichere Fundament, auf dem alles weitere Wissen aufgebaut werden kann.<br><br>Vom Cogito ausgehend beweist Descartes die Existenz Gottes (ontologischer + kausaler Beweis), und von Gott die Verlässlichkeit der Vernunft (Gott ist kein Betrüger) und die Existenz der Außenwelt.</p>' },
          { title: '2. Erklären Sie Spinozas Substanzmonismus und den Satz „Deus sive Natura".',
            content: '<p class="lz-prose"><strong>Ausgangspunkt:</strong> Spinoza definiert „Substanz" strenger als Descartes: Eine Substanz ist das, was <strong>in sich ist und durch sich begriffen wird</strong> — was zu seiner Existenz und Erklärung nichts anderes braucht.<br><br><strong>Argument:</strong> (1) Es kann nicht zwei Substanzen mit demselben Attribut geben (denn dann wären sie durch ihre Attribute nicht unterscheidbar). (2) Eine Substanz kann nicht von einer anderen hervorgebracht werden (denn dann wäre sie nicht „in sich"). (3) Also gibt es nur <strong>EINE</strong> Substanz — die unendlich viele Attribute hat (von denen wir nur zwei kennen: Denken und Ausdehnung). Diese Substanz IST Gott IST die Natur: <strong>Deus sive Natura</strong>.<br><br><strong>Konsequenzen:</strong> (1) <strong>Kein Dualismus:</strong> Geist und Materie sind nicht zwei Substanzen, sondern zwei Attribute DERSELBEN Substanz. Das Leib-Seele-Problem löst sich auf — es gibt keine Interaktion, weil es keine Zweiheit gibt.<br>(2) <strong>Kein persönlicher Gott:</strong> Gott ist nicht ein Wesen mit Willen und Absichten, sondern die <strong>Totalität der Natur in ihrer Gesetzmäßigkeit</strong>. Er schafft nicht die Welt durch einen Willensakt — die Welt folgt notwendig aus seinem Wesen.<br>(3) <strong>Determinismus:</strong> Alles geschieht mit Notwendigkeit — es gibt keinen Zufall, keine Willkür, keinen freien Willen. „Freiheit" ist Einsicht in die Notwendigkeit.</p>' },
          { title: '3. Was sind Leibniz\' Monaden und wie löst die prästabilierte Harmonie das Leib-Seele-Problem?',
            content: '<p class="lz-prose"><strong>Monaden:</strong> Die letzten Bausteine der Wirklichkeit — einfache, unteilbare, immaterielle Einheiten. Jede Monade ist eine Art „Seele" mit <strong>Vorstellungen</strong> (perceptions) und <strong>Streben</strong> (appétition). Sie „spiegelt" das gesamte Universum aus ihrer einzigartigen Perspektive — wie ein Spiegel, der eine Stadt von seinem Standpunkt aus zeigt.<br><br><strong>Fensterlosigkeit:</strong> Monaden haben „keine Fenster" — sie wirken nicht kausal aufeinander ein. Jede Monade folgt ihrem eigenen inneren Programm, das Gott beim Erschaffen festgelegt hat.<br><br><strong>Prästabilierte Harmonie:</strong> Gott hat beim Erschaffen <strong>alle</strong> Monaden so programmiert, dass ihre inneren Abläufe perfekt aufeinander abgestimmt sind — wie zwei Uhren, die vom selben Uhrmacher synchronisiert wurden. Meine Seelen-Monade „will" den Arm heben — und die Körper-Monaden „bewegen" den Arm, nicht weil die Seele auf den Körper wirkt, sondern weil beide von Anfang an synchronisiert sind.<br><br><strong>Vergleich mit Descartes und Spinoza:</strong><br>- Descartes: Interaktionismus (Geist wirkt auf Körper und umgekehrt — aber wie?).<br>- Spinoza: Parallelismus (Geist und Körper sind Aspekte derselben Substanz — keine Interaktion nötig).<br>- Leibniz: Prästabilierte Harmonie (keine Interaktion, keine Identität — sondern göttliche Synchronisation).</p>' },
          { title: '4. Vergleichen Sie die drei rationalistischen Positionen zum Leib-Seele-Problem.',
            content: '<p class="lz-prose"><strong>Das Problem:</strong> Wie hängen Geist (Denken, Wollen, Fühlen) und Körper (Materie, Ausdehnung, Bewegung) zusammen?<br><br><strong>Descartes — Substanzdualismus + Interaktion:</strong> Geist und Körper sind <strong>zwei verschiedene Substanzen</strong> (res cogitans / res extensa), die kausal aufeinander wirken. Problem: Wie kann etwas Unausgedehntes (Geist) etwas Ausgedehntes (Körper) bewegen? Descartes\' Antwort (Zirbeldrüse) ist keine echte Lösung.<br><br><strong>Spinoza — Doppelaspekttheorie:</strong> Es gibt nur <strong>eine Substanz</strong> (Gott/Natur) mit zwei Attributen (Denken und Ausdehnung). Geist und Körper sind <strong>zwei Beschreibungen desselben Dings</strong> — wie „Morgenstern" und „Abendstern" zwei Beschreibungen der Venus sind. Kein Interaktionsproblem, weil keine Zweiheit.<br><br><strong>Leibniz — Prästabilierte Harmonie:</strong> Geist und Körper sind <strong>verschiedene Monaden</strong>, die nicht aufeinander wirken, sondern von Gott synchronisiert wurden. Wie zwei perfekt gestellte Uhren zeigen sie immer dieselbe Zeit — nicht weil eine die andere beeinflusst, sondern weil der Uhrmacher sie gleich eingestellt hat.<br><br><strong>Bewertung:</strong> Alle drei Lösungen haben Schwächen. Descartes\' Interaktion ist unerklärlich. Spinozas Identität erklärt nicht, warum Geist und Körper so verschieden <em>erscheinen</em>. Leibniz\' Harmonie ist ad hoc — sie „löst" das Problem durch einen göttlichen deus ex machina. Das Leib-Seele-Problem ist bis heute <strong>ungelöst</strong> (Chalmers\' „hard problem of consciousness").</p>' },
        ])}
      </div>
    </section>

    <section class="lz-content-section" style="padding-top:0;">
      <div class="lz-section-wrap">
        ${renderPageNav({
          prev: { label: 'Erasmus & Bruno', link: `${BASE}/themen/neuzeit/bruno` },
          next: { label: 'Hobbes',          link: `${BASE}/themen/neuzeit/hobbes` },
        }, BASE)}
      </div>
    </section>
    ${footerHTML(this.router)}
    `;
  }
  init() { i18n.init(); initScrollReveal(); refreshScrollReveal(); initInteractive(document); initWimTabs(document); }
  cleanup() {}
}