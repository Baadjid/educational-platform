// pages/projekte/lernzettel/faecher/ethik/themen/deutscher-idealismus/hegel.js
// ══════════════════════════════════════════════════════════════════
// Kapitel 8.2 — Georg Wilhelm Friedrich Hegel (1770–1831)
// Dialektik, Phänomenologie des Geistes, Geschichtsphilosophie
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

const KAP_COLOR = '#b87333';
const KAP_COLOR_RGB = '184, 115, 51';

const HERR_KNECHT_TABS = [
  { key: 'kampf',   label: 'Kampf um Anerkennung' },
  { key: 'umkehr',  label: 'Umkehrung' },
];

export default class HegelPage {
  constructor(router) { this.router = router; }
  render() {
    ensureComponentsCSS();
    loadComponentCSS('pages/projekte/lernzettel/styles/sub.css');
    const el = document.createElement('div');
    el.className = 'page page-hegel';
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
          <span>Hegel</span>
        </nav>
        <h1 class="lz-sub-title"><em>Hegel</em> — Dialektik, Geist &amp; Geschichte</h1>
        <p class="lz-sub-desc">
          Das ambitionierteste System der Philosophiegeschichte: Hegel wollte
          die gesamte Wirklichkeit — Natur, Geist, Geschichte, Kunst, Religion,
          Philosophie — als die Selbstentfaltung des Absoluten begreifen.
          „Das Wahre ist das Ganze."
        </p>
        ${renderTags(['Kapitel 8.2', '1770–1831', 'Stuttgart · Jena · Berlin', 'Dialektik · Phänomenologie · Absolute Idee', 'Abitur 2026'])}
      </div>
    </section>

    <section class="lz-content-section"><div class="lz-section-wrap">
      ${renderSubhead('Biographisches')}
      <h2 class="lz-h2 reveal">Der <em>Weltgeist zu Pferde</em></h2>
      <p class="lz-prose reveal">Georg Wilhelm Friedrich Hegel (1770–1831) studierte Theologie im Tübinger Stift — zusammen mit <strong>Schelling</strong> und <strong>Hölderlin</strong>. Alle drei begeisterten sich für die Französische Revolution. Als Napoleon 1806 Jena einnahm, schrieb Hegel: „Ich sah den Kaiser — diese Weltseele — durch die Stadt reiten." Er wurde Gymnasialrektor in Nürnberg, Professor in Heidelberg und schließlich <strong>der</strong> Philosoph Berlins — der einflussreichste Denker seiner Zeit.</p>
      ${renderVTimeline([
        { year: '1770', title: 'Geburt in Stuttgart', text: 'Beamtenfamilie; pietistische Erziehung' },
        { year: '1788–93', title: 'Tübinger Stift', text: 'Studium der Theologie mit Hölderlin und Schelling; Begeisterung für die Französische Revolution' },
        { year: '1807', title: 'Phänomenologie des Geistes', text: 'In Jena fertiggestellt, während Napoleons Kanonen donnern — „Geburtsurkunde" seines Systems' },
        { year: '1812–16', title: 'Wissenschaft der Logik', text: 'Das „Skelett" des Systems — die reine Begriffslogik vor aller Natur und Geschichte' },
        { year: '1817', title: 'Enzyklopädie der philosophischen Wissenschaften', text: 'Gesamtdarstellung: Logik → Naturphilosophie → Philosophie des Geistes' },
        { year: '1818–31', title: 'Professur in Berlin', text: 'Der berühmteste Philosoph Europas; Vorlesungen über Ästhetik, Religionsphilosophie, Geschichte' },
        { year: '1821', title: 'Grundlinien der Philosophie des Rechts', text: '„Was vernünftig ist, das ist wirklich; und was wirklich ist, das ist vernünftig"' },
        { year: '1831', title: 'Tod in Berlin', text: 'Stirbt an Cholera; auf dem Dorotheenstädtischen Friedhof neben Fichte begraben' },
      ])}
    </div></section>

    <section class="lz-content-section"><div class="lz-section-wrap">
      ${renderSubhead('Die Dialektik')}
      <h2 class="lz-h2 reveal">These — Antithese — <em>Synthese</em></h2>
      <p class="lz-prose reveal">Hegels <strong>Dialektik</strong> (obwohl er selbst die Begriffe „These/Antithese/Synthese" selten benutzte) ist sein methodisches Grundprinzip: Jeder Begriff enthält seinen eigenen Widerspruch, und aus dem Widerspruch entsteht eine höhere Einheit, die beide Seiten „aufhebt" — in der dreifachen Bedeutung von aufheben: <strong>negieren, bewahren und erhöhen</strong>.</p>

      ${renderMerkboxGrid([
        { icon: 'fas fa-arrow-right', title: 'These (Ansichsein)',
          text: 'Ein Begriff wird zunächst in seiner unmittelbaren, einfachen Form gesetzt: z.B. „Sein" (das allgemeinste, was man sagen kann: „Es ist etwas"). Die These ist abstrakt, unbestimmt — sie hat ihren Widerspruch schon in sich.' },
        { icon: 'fas fa-arrow-left', title: 'Antithese (Fürsichsein)',
          text: 'Der Widerspruch tritt hervor: „Sein" (reines, bestimmungsloses Sein) erweist sich als leer — als NICHTS. Die Antithese ist die Negation der These. Sein = Nichts: Die abstraktesten Begriffe fallen zusammen (Hegel beginnt seine Logik damit!).' },
        { icon: 'fas fa-arrows-spin', title: 'Synthese (An-und-Fürsichsein)',
          text: 'Aufhebung: Sein und Nichts werden in „WERDEN" aufgehoben — Werden ist die Einheit von Sein und Nichts (etwas entsteht = geht vom Nichtsein zum Sein über). Die Synthese enthält beide Momente, aber auf einer höheren Ebene. Sie wird zur neuen These, die wiederum ihren Widerspruch enthält → der Prozess geht weiter.' },
        { icon: 'fas fa-sync', title: 'Aufhebung (Aufheben)',
          text: 'Hegels Schlüsselbegriff hat drei Bedeutungen zugleich: (1) NEGIEREN (tollere): Die These wird aufgehoben = beseitigt. (2) BEWAHREN (conservare): Das Wesentliche der These wird in der Synthese aufbewahrt. (3) ERHÖHEN (elevare): Auf einer höheren Ebene wiederhergestellt. Beispiel: Die Raupe wird zum Schmetterling — die Raupe ist „aufgehoben" (beseitigt als Raupe, bewahrt als Organismus, erhöht als Schmetterling).' },
      ])}

      ${renderFormulaBox({
        label: 'Hegel, Phänomenologie des Geistes, Vorrede (1807)',
        formula: '„Das Wahre ist das Ganze.<br>Das Ganze aber ist nur das durch seine Entwicklung<br>sich vollendende Wesen."',
        desc: 'Die Wahrheit ist nicht ein einzelner Satz oder ein einzelner Standpunkt, sondern der GESAMTE Prozess — die Bewegung durch alle Widersprüche hindurch zum Ganzen. Keine einzelne Philosophie ist wahr — nur die Geschichte der Philosophie als Ganzes.'
      })}
    </div></section>

    <section class="lz-content-section"><div class="lz-section-wrap">
      ${renderSubhead('Phänomenologie des Geistes (1807)')}
      <h2 class="lz-h2 reveal">Herr und <em>Knecht</em></h2>
      <p class="lz-prose reveal">Die <em>Phänomenologie des Geistes</em> beschreibt den Weg des Bewusstseins von der einfachsten Sinnesgewissheit bis zum <strong>absoluten Wissen</strong>. Das berühmteste Kapitel ist die Dialektik von <strong>Herr und Knecht</strong>:</p>

      <nav class="wim-tabs" id="hegel-herr-knecht-tabs" aria-label="Herr-Knecht-Dialektik">
        ${HERR_KNECHT_TABS.map((t, i) => `
          <button class="wim-tab${i === 0 ? ' active' : ''}" data-wim="${t.key}">
            ${t.label}
          </button>`).join('')}
      </nav>

      <div class="wim-category" data-wim-cat="kampf">
        <h3 class="lz-h3">Selbstbewusstsein braucht ein anderes Selbstbewusstsein</h3>
        <p class="lz-prose">Ich werde mir meiner selbst nur bewusst, wenn ein <strong>anderes Bewusstsein mich anerkennt</strong> (wie bei Fichte). Zwei Selbstbewusstseine treffen aufeinander und ringen um <strong>Anerkennung</strong> — ein „Kampf auf Leben und Tod". Wer bereit ist, sein Leben zu riskieren, wird zum <strong>Herrn</strong>; wer das Leben vorzieht und nachgibt, wird zum <strong>Knecht</strong>.</p>
      </div>

      <div class="wim-category hidden" data-wim-cat="umkehr">
        <h3 class="lz-h3">Der Knecht wird freier als der Herr</h3>
        <p class="lz-prose">Paradox: Die Positionen <strong>kehren sich um</strong>:</p>
        ${renderMerkboxGrid([
          { icon: 'fas fa-crown', title: 'Der Herr',
            text: 'Genießt die Arbeit des Knechts, ohne selbst zu arbeiten. Aber: Er wird ABHÄNGIG vom Knecht — ohne den Knecht kein Genuss. Und seine Anerkennung ist wertlos: Sie kommt von einem Unfreien. Ein Kompliment vom Sklaven hat keinen Wert.' },
          { icon: 'fas fa-hammer', title: 'Der Knecht',
            text: 'Arbeitet für den Herrn — und bildet dabei die WELT um. Durch die Arbeit lernt er, die Natur zu beherrschen, Werkzeuge zu schaffen, Dinge zu formen. Er gewinnt SELBSTBEWUSSTSEIN durch die Erfahrung seiner eigenen Produktivität. Die Arbeit — nicht der Genuss — ist der Weg zur Freiheit.' },
        ])}
        <p class="lz-prose"><strong>Pointe:</strong> Nicht der Herr (Genuss, Macht), sondern der Knecht (Arbeit, Selbstformung) gewinnt wahre Freiheit. Marx wird das aufgreifen: Das Proletariat befreit sich durch Arbeit und Revolution.</p>
      </div>
    </div></section>

    <section class="lz-content-section"><div class="lz-section-wrap">
      ${renderSubhead('Geschichtsphilosophie')}
      <h2 class="lz-h2 reveal">Die <em>Vernunft</em> in der Geschichte</h2>
      <p class="lz-prose reveal">Für Hegel ist die <strong>Weltgeschichte</strong> kein Chaos und kein Zufall, sondern der <strong>Fortschritt im Bewusstsein der Freiheit</strong>: Der „Weltgeist" verwirklicht sich stufenweise in den Kulturen und Epochen der Menschheit.</p>

      ${renderTable({
        headers: ['Epoche', 'Freiheit', 'Beispiel'],
        rows: [
          ['<strong>Orient</strong>', 'EINER ist frei (Despot)', 'Ägypten, Persien, China — der Herrscher ist frei, alle anderen Knechte'],
          ['<strong>Griechenland/Rom</strong>', 'EINIGE sind frei (Bürger)', 'Demokratie für Bürger, aber Sklaverei bleibt bestehen'],
          ['<strong>Germanisch-christliche Welt</strong>', 'ALLE sind frei', 'Reformation + Aufklärung + Französische Revolution → universale Freiheit'],
        ],
        highlight: [2],
      })}

      ${renderMerkboxGrid([
        { icon: 'fas fa-chess', title: 'List der Vernunft',
          text: 'Die großen historischen Akteure (Alexander, Caesar, Napoleon) verfolgen ihre eigenen Ziele — Macht, Ruhm, Ehrgeiz. Aber HINTER ihren Handlungen verfolgt die Vernunft (der Weltgeist) ihr eigenes Ziel: die Verwirklichung der Freiheit. Die Individuen sind „Geschäftsführer des Weltgeistes" — sie arbeiten für ein Ziel, das sie nicht kennen.' },
        { icon: 'fas fa-landmark', title: 'Der Staat als „Wirklichkeit der sittlichen Idee"',
          text: 'Der Staat ist für Hegel nicht (wie für Hobbes) ein Notbehelf gegen den Krieg und nicht (wie für Locke) ein Instrument zum Schutz individueller Rechte, sondern die <strong>höchste Verwirklichung des Geistes</strong> in der objektiven Welt. Der preußische Staat als Vollendung? Diese Deutung wurde Hegel als Staatsvergöttlichung vorgeworfen.' },
        { icon: 'fas fa-book', title: 'Die Eule der Minerva',
          text: '„Die Eule der Minerva beginnt erst mit der einbrechenden Dämmerung ihren Flug." Die Philosophie erkennt die Wirklichkeit erst, NACHDEM sie sich vollzogen hat — sie ist Rückblick, nicht Vorschau. Man kann die Gegenwart verstehen, aber nicht die Zukunft vorhersagen.' },
      ])}

      ${renderFormulaBox({
        label: 'Hegel, Grundlinien der Philosophie des Rechts, Vorrede (1821)',
        formula: '„Was vernünftig ist, das ist wirklich;<br>und was wirklich ist, das ist vernünftig."',
        desc: 'Der umstrittenste Satz der Philosophiegeschichte. Konservative Deutung: Die bestehende Ordnung (Preußen) ist vernünftig. Progressive Deutung: Nur das Vernünftige verdient es, wirklich zu sein — das Unvernünftige wird untergehen.'
      })}
    </div></section>

    <section class="lz-content-section"><div class="lz-section-wrap">
      ${renderSubhead('Testfragen — Abiturniveau')}
      ${renderAccordion([
        { title: '1. Erklären Sie Hegels Dialektik am Beispiel von „Sein — Nichts — Werden".',
          content: '<p class="lz-prose"><strong>These: Sein.</strong> Der allgemeinste, abstrakteste Begriff: „Es ist etwas." Aber was? Reines Sein ohne jede Bestimmung ist völlig leer — es hat keinen Inhalt.<br><br><strong>Antithese: Nichts.</strong> Reines Sein ohne Bestimmung ist ununterscheidbar von NICHTS — denn auch das Nichts hat keine Bestimmung. Der Widerspruch: Sein und Nichts sind „dasselbe" — und zugleich absolute Gegensätze.<br><br><strong>Synthese: Werden.</strong> Die Wahrheit von Sein und Nichts liegt nicht in einem von beiden, sondern in ihrer BEWEGUNG: <strong>Werden</strong>. Werden ist der Übergang von Nichtsein zum Sein (Entstehen) und von Sein zum Nichtsein (Vergehen). Im Werden sind Sein und Nichts „aufgehoben" — negiert (als starre Gegensätze), bewahrt (als Momente) und erhöht (in einer dynamischen Einheit).<br><br><strong>Bedeutung:</strong> Hegel zeigt: Die Wahrheit liegt nicht in statischen Begriffen, sondern in ihrer <strong>Bewegung</strong>. Jeder Begriff enthält seinen Widerspruch, und aus dem Widerspruch entsteht eine höhere Einheit. Die gesamte Logik, die gesamte Natur, die gesamte Geschichte folgen diesem Muster.</p>' },
        { title: '2. Stellen Sie Hegels Herr-Knecht-Dialektik dar und erklären Sie ihre Bedeutung für Marx.',
          content: '<p class="lz-prose"><strong>Hegels Dialektik:</strong> Zwei Selbstbewusstseine kämpfen um <strong>Anerkennung</strong>. Der Mutige wird Herr, der Ängstliche wird Knecht. Aber die Positionen kehren sich um: (1) Der Herr wird <strong>abhängig</strong> vom Knecht (ohne den Knecht kein Genuss). (2) Der Knecht gewinnt durch <strong>Arbeit</strong> Selbstbewusstsein — er formt die Welt und erkennt sich in seinem Werk. Die Arbeit — nicht der Genuss — ist der Weg zur Freiheit.<br><br><strong>Marx\' Rezeption:</strong> Marx „materialisiert" Hegel: (1) Herr = <strong>Bourgeoisie</strong> (Kapitalbesitzer), Knecht = <strong>Proletariat</strong> (Arbeiterklasse). (2) Die Bourgeoisie wird abhängig von der Arbeit des Proletariats. (3) Das Proletariat gewinnt durch die Erfahrung der Arbeit (und der Entfremdung) das Bewusstsein seiner eigenen Macht. (4) Die <strong>Revolution</strong> ist die „Aufhebung" des Herr-Knecht-Verhältnisses — nicht durch Anerkennung (Hegel), sondern durch <strong>Umsturz</strong> (Marx).<br><br><strong>Kernunterschied:</strong> Hegel: Der Widerspruch löst sich im BEWUSSTSEIN (geistig). Marx: Der Widerspruch löst sich in der PRAXIS (Revolution, Klassenkampf). Hegel denkt idealistisch (Geist bestimmt die Wirklichkeit), Marx materialistisch (die materiellen Verhältnisse bestimmen das Bewusstsein).</p>' },
        { title: '3. Was bedeutet „Das Wahre ist das Ganze"? Diskutieren Sie Adornos Kritik: „Das Ganze ist das Unwahre."',
          content: '<p class="lz-prose"><strong>Hegel:</strong> Kein einzelner Standpunkt, kein einzelner Begriff, keine einzelne Philosophie ist „die Wahrheit". Wahrheit ist der <strong>Gesamtprozess</strong> — die Bewegung durch alle Widersprüche, Irrtümer und Einseitigkeiten hindurch. Erst am Ende, wenn der Geist alle Stufen durchlaufen hat und sich als „absolutes Wissen" erkennt, ist die Wahrheit erreicht. Die Geschichte der Philosophie IST die Philosophie — nicht Sokrates ODER Kant, sondern der ganze Weg von Thales bis Hegel.<br><br><strong>Adorno (Minima Moralia, 1951):</strong> „Das Ganze ist das Unwahre." Gegen Hegels Totalisierung: (1) Die Behauptung, die gesamte Wirklichkeit sei vernünftig, legitimiert das Bestehende — auch das Unrecht, den Krieg, die Unterdrückung. (2) Nach Auschwitz ist der Glaube an die Vernünftigkeit des Ganzen <strong>obscön</strong>: Kein System kann den Holocaust „aufheben" (in einer höheren Einheit versöhnen). (3) Die Wahrheit liegt nicht im Ganzen, sondern im <strong>Fragment</strong>, im Leid des Einzelnen, in dem, was das System ausschließt.<br><br><strong>Bewertung:</strong> Die Debatte Hegel vs. Adorno ist die Grundfrage der Geschichtsphilosophie: Hat die Geschichte einen vernünftigen Sinn (Hegel, Marx, Fukuyama) — oder ist sie ein Trümmerfeld, auf dem nur der „Engel der Geschichte" (Benjamin) die Opfer betrauert?</p>' },
        { title: '4. Erklären Sie Hegels Geschichtsphilosophie: Was ist der „Fortschritt im Bewusstsein der Freiheit"?',
          content: '<p class="lz-prose"><strong>These:</strong> Die Weltgeschichte ist „der Fortschritt im Bewusstsein der Freiheit": Die Menschheit erkennt stufenweise, dass ALLE Menschen frei sind.<br><br><strong>Drei Stufen:</strong> (1) <strong>Orientalische Welt:</strong> Nur der Despot ist frei — alle anderen sind Untertanen. Freiheit als Willkür EINES Einzelnen (China, Ägypten, Persien). (2) <strong>Griechisch-römische Welt:</strong> Die Bürger sind frei — aber die Sklaven nicht. Freiheit als Privileg EINIGER (Athen, Rom). (3) <strong>Germanisch-christliche Welt:</strong> Alle sind frei — der Mensch als solcher hat Würde. Reformation (Gewissensfreiheit), Aufklärung (Denkfreiheit), Französische Revolution (politische Freiheit) → universale Freiheit.<br><br><strong>Kritik:</strong> (1) <strong>Eurozentrismus:</strong> Hegel stellt die europäische Geschichte als Vollendung dar — Afrika, Indien, China sind „Vorstufen". Das ist historisch und moralisch unhaltbar. (2) <strong>Preußen als Endpunkt?</strong> Hegel scheint den preußischen Verfassungsstaat als Verwirklichung der Freiheit darzustellen — aber das war die repressivste Großmacht Europas. (3) <strong>Opfer der Geschichte:</strong> Hegel räumt ein, dass die Geschichte ein „Schlachtbank" ist — aber tröstet: Die Opfer dienen dem „Weltgeist". Für die Opfer selbst ist das kein Trost. Adorno und Benjamin haben diesen Zynismus scharf kritisiert.</p>' },
      ])}
    </div></section>

    <section class="lz-content-section" style="padding-top:0;"><div class="lz-section-wrap">
      ${renderPageNav({
        prev: { label: 'Fichte',    link: `${BASE}/themen/deutscher-idealismus/fichte` },
        next: { label: 'Schelling', link: `${BASE}/themen/deutscher-idealismus/schelling` },
      }, BASE)}
    </div></section>
    ${footerHTML(this.router)}
    `;
  }
  init() { i18n.init(); initScrollReveal(); refreshScrollReveal(); initInteractive(document); initWimTabs(document); }
  cleanup() {}
}