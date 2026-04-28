// pages/projekte/lernzettel/faecher/ethik/themen/19-jahrhundert/kierkegaard.js
// ══════════════════════════════════════════════════════════════════
// Kapitel 9.2 — Søren Kierkegaard (1813–1855)
// Existenz, Drei Stadien, Angst, Sprung, Anti-Hegel
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

const KAP_COLOR = '#b7410e';
const KAP_COLOR_RGB = '183, 65, 14';

export default class KierkegaardPage {
  constructor(router) { this.router = router; }
  render() {
    ensureComponentsCSS();
    loadComponentCSS('pages/projekte/lernzettel/styles/sub.css');
    const el = document.createElement('div');
    el.className = 'page page-kierkegaard';
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
          <span>Kierkegaard</span>
        </nav>
        <h1 class="lz-sub-title"><em>Kierkegaard</em> — Existenz, Angst &amp; Sprung</h1>
        <p class="lz-sub-desc">
          „Vater des Existenzialismus": Kierkegaard stellte die einzelne, konkrete,
          leidende Existenz gegen Hegels abstraktes System — und entdeckte die Angst
          als Grundstimmung der Freiheit.
        </p>
        ${renderTags(['Kapitel 9.2','1813–1855','Kopenhagen','Existenz · Drei Stadien · Angst · Sprung','Abitur 2026'])}
      </div>
    </section>

    <section class="lz-content-section"><div class="lz-section-wrap">
      ${renderSubhead('Biographisches')}
      <h2 class="lz-h2 reveal">Der <em>Einzelne</em> gegen das System</h2>
      <p class="lz-prose reveal">Søren Aabye Kierkegaard (1813–1855) lebte sein ganzes Leben in <strong>Kopenhagen</strong>. Sohn eines wohlhabenden, zutiefst melancholischen Vaters. Er löste die Verlobung mit <strong>Regine Olsen</strong> — die Liebe seines Lebens — aus religiösen und existenziellen Gründen. Er schrieb unter zahlreichen Pseudonymen, bekämpfte die dänische Staatskirche und starb mit 42 Jahren, erschöpft vom intellektuellen Kampf.</p>
      ${renderVTimeline([
        { year:'1813', title:'Geburt in Kopenhagen', text:'Siebtes Kind; der Vater ein reicher, melancholischer Wollhändler' },
        { year:'1841', title:'Dissertation + Verlobungslösung', text:'Über den Begriff der Ironie; löst die Verlobung mit Regine Olsen — zentrales Lebensereignis' },
        { year:'1843', title:'Entweder/Oder + Furcht und Zittern', text:'Zwei Hauptwerke im selben Jahr — ästhetisches vs. ethisches Stadium; Abrahams Opfer' },
        { year:'1844', title:'Der Begriff Angst', text:'Angst als Grundstimmung der menschlichen Freiheit' },
        { year:'1849', title:'Die Krankheit zum Tode', text:'Verzweiflung als Grundkrankheit des Menschen; Analyse des Selbst' },
        { year:'1854–55', title:'Angriff auf die Staatskirche', text:'Heftige Polemik gegen das bürgerliche Christentum; Zeitschrift „Der Augenblick"' },
        { year:'1855', title:'Tod in Kopenhagen', text:'Bricht auf der Straße zusammen; stirbt 42-jährig im Krankenhaus' },
      ])}
    </div></section>

    <section class="lz-content-section"><div class="lz-section-wrap">
      ${renderSubhead('Anti-Hegel: Der Einzelne gegen das System')}
      <h2 class="lz-h2 reveal">„Das System und die <em>Existenz</em>"</h2>
      <p class="lz-prose reveal">Kierkegaards Grundeinwand gegen Hegel: Das System erklärt ALLES — außer dem <strong>Einzelnen, der das System denkt</strong>. Hegel behandelt den konkreten, leidenden, entscheidenden Menschen als Durchgangsmoment des Weltgeistes. Kierkegaard: Philosophie muss beim <strong>Einzelnen</strong> anfangen — bei mir, hier, jetzt, mit meiner Angst und meiner Entscheidung.</p>

      ${renderCompare({
        titleA:'Hegel — Das System',
        titleB:'Kierkegaard — Die Existenz',
        listA:['Das <strong>Ganze</strong> ist das Wahre','Vernunft erfasst die Wirklichkeit','Aufhebung aller Widersprüche im Begriff','Geschichte als <strong>notwendiger</strong> Fortschritt','Der Einzelne = Moment des Weltgeistes','Objektivität, Wissenschaft, System'],
        listB:['Der <strong>Einzelne</strong> ist das Wahre','Vernunft scheitert an der Existenz','Paradox und Widerspruch bleiben <strong>bestehen</strong>','Existenz als <strong>einmalige</strong> Entscheidung','Der Einzelne = unvertretbares Individuum','Subjektivität, Leidenschaft, Sprung'],
      })}
    </div></section>

    <section class="lz-content-section"><div class="lz-section-wrap">
      ${renderSubhead('Die drei Existenzstadien')}
      <h2 class="lz-h2 reveal">Ästhetisch — Ethisch — <em>Religiös</em></h2>
      <p class="lz-prose reveal">Kierkegaard beschreibt drei Weisen zu existieren — drei „Stadien auf dem Lebensweg". Sie sind NICHT dialektische Stufen (Hegel), die sich logisch ergeben — der Übergang geschieht durch einen <strong>Sprung</strong> (existenzielle Entscheidung, nicht logische Folgerung).</p>

      ${renderTable({
        headers:['Stadium','Prinzip','Figur','Gefahr'],
        rows:[
          ['<strong>Ästhetisch</strong>','Genuss, Augenblick, Unmittelbarkeit','Don Juan; der „Verführer" in Entweder/Oder','<strong>Langeweile und Verzweiflung</strong> — der Ästhetiker „springt" von Genuss zu Genuss, ohne Bindung'],
          ['<strong>Ethisch</strong>','Pflicht, Treue, Verantwortung','Der Ehemann (Wilhelm) in Entweder/Oder','<strong>Selbstgerechtigkeit</strong> — der Ethiker glaubt, aus eigener Kraft gut sein zu können'],
          ['<strong>Religiös</strong>','Glaube, Paradox, absolutes Verhältnis zu Gott','Abraham in Furcht und Zittern','<strong>Absurdität</strong> — der Glaube widerspricht der Vernunft; Abraham soll seinen Sohn opfern'],
        ],
        highlight:[2],
      })}

      ${renderMerkboxGrid([
        { icon:'fas fa-wine-glass', title:'Das Ästhetische',
          text:'Leben im Augenblick: Genuss, Zerstreuung, Ironie. Der Ästhetiker vermeidet Bindung — Ehe, Beruf, Verantwortung. Don Juan als Paradigma: maximaler Genuss, keine Verpflichtung. Problem: Die Genüsse werden schal, die Langeweile wächst, die Verzweiflung droht. „Der Ästhetiker wählt sich nicht selbst — er lässt sich treiben."' },
        { icon:'fas fa-ring', title:'Das Ethische',
          text:'Leben in der Verantwortung: Treue, Pflicht, Selbstverpflichtung. Der Ethiker WÄHLT sich selbst — er übernimmt Verantwortung für sein Leben (Ehe, Beruf, Gemeinschaft). Kant als philosophisches Ideal. Problem: Kann der Mensch aus eigener Kraft tugendhaft sein? Kierkegaard bezweifelt das — die ethische Selbstgerechtigkeit ist Illusion.' },
        { icon:'fas fa-pray', title:'Das Religiöse — Abrahams Opfer',
          text:'Abraham soll seinen Sohn Isaak opfern — auf Gottes Befehl. Das widerspricht allem Ethischen (Mord!) und aller Vernunft (Gott hatte Isaak versprochen!). Aber Abraham GLAUBT — gegen alle Vernunft, gegen alle Ethik. Das ist der „Sprung des Glaubens": Keine rationale Begründung, sondern eine existenzielle Entscheidung im Angesicht des Absurden.' },
      ])}

      ${renderFormulaBox({ label:'Kierkegaard, Furcht und Zittern (1843)', formula:'„Der Glaube beginnt gerade da,<br>wo das Denken aufhört."', desc:'Der Sprung des Glaubens: Nicht Vernunft, nicht Beweis, nicht logische Notwendigkeit — sondern Leidenschaft, Risiko und Entscheidung.' })}
    </div></section>

    <section class="lz-content-section"><div class="lz-section-wrap">
      ${renderSubhead('Angst und Verzweiflung')}
      <h2 class="lz-h2 reveal">Die Grundstimmungen der <em>Existenz</em></h2>
      ${renderMerkboxGrid([
        { icon:'fas fa-wind', title:'Angst (Der Begriff Angst, 1844)',
          text:'Angst ist nicht Furcht (vor etwas Bestimmtem). Angst ist die Grundstimmung der menschlichen Freiheit — die „Schwindel der Freiheit": Der Mensch steht vor der offenen Zukunft und erkennt, dass er wählen MUSS, ohne sichere Grundlage. „Angst ist die Wirklichkeit der Freiheit als Möglichkeit vor der Möglichkeit." Vorläufer von Heideggers Angst-Analyse in Sein und Zeit.' },
        { icon:'fas fa-heart-broken', title:'Verzweiflung (Die Krankheit zum Tode, 1849)',
          text:'Verzweiflung ist die „Krankheit zum Tode" — nicht physischer Tod, sondern die Krankheit des SELBST. Formen: (1) Nicht man selbst sein wollen (Flucht in Zerstreuung, Konformismus). (2) Verzweifelt man selbst sein wollen (trotziger Eigenwille). Beide sind Formen der Unwahrheit. Heilung: das Selbst „gründen" in der Macht, die es gesetzt hat — in Gott.' },
        { icon:'fas fa-door-open', title:'Der Sprung (Leap of Faith)',
          text:'Zwischen den Stadien gibt es keine logische Brücke — nur einen SPRUNG: eine freie, irrationale, existenzielle Entscheidung. Man kann den Glauben nicht „beweisen" oder „ableiten" — man muss ihn WAGEN. Der Sprung ist das Existenziellste, was ein Mensch tun kann: sich ohne Sicherheit ins Ungewisse werfen.' },
      ])}
    </div></section>

    <section class="lz-content-section"><div class="lz-section-wrap">
      ${renderSubhead('Testfragen — Abiturniveau')}
      ${renderAccordion([
        { title:'1. Erklären Sie Kierkegaards drei Existenzstadien und den Begriff des „Sprungs".',
          content:'<p class="lz-prose"><strong>Ästhetisches Stadium:</strong> Leben im Augenblick — Genuss, Zerstreuung, Unverbindlichkeit. Don Juan als Paradigma. Problem: Langeweile, innere Leere, Verzweiflung. Der Ästhetiker wählt nicht — er lässt sich treiben.<br><br><strong>Ethisches Stadium:</strong> Leben in der Verantwortung — Pflicht, Treue, Selbstverpflichtung. Kant als philosophisches Vorbild. Der Ethiker wählt SICH SELBST und übernimmt Verantwortung. Problem: Kann der Mensch aus eigener Kraft gut sein? Kierkegaard: Nein — die Selbstgerechtigkeit des Ethikers ist Illusion.<br><br><strong>Religiöses Stadium:</strong> Leben im Glauben — Paradox, Absurdität, absolutes Verhältnis zu Gott. Abraham als Paradigma: Er soll seinen Sohn opfern — gegen alle Ethik und Vernunft. Aber er glaubt. Der Glaube übersteigt die Ethik.<br><br><strong>Der Sprung:</strong> Zwischen den Stadien gibt es KEINE logische Verbindung (gegen Hegels Dialektik). Man kann das Ethische nicht aus dem Ästhetischen ableiten, den Glauben nicht aus der Ethik beweisen. Der Übergang geschieht durch einen <strong>Sprung</strong> — eine freie, irrationale, leidenschaftliche Entscheidung. Der Sprung ist das existenziell Entscheidende: sich ohne Sicherheit ins Ungewisse werfen.</p>' },
        { title:'2. Was ist Kierkegaards „Angst" und wie unterscheidet sie sich von Furcht?',
          content:'<p class="lz-prose"><strong>Furcht</strong> richtet sich auf ein <strong>bestimmtes Objekt</strong>: Ich fürchte den Hund, die Prüfung, den Tod. Furcht hat einen Gegenstand — man kann ihr ausweichen oder sie überwinden.<br><br><strong>Angst</strong> (Kierkegaard) richtet sich auf <strong>NICHTS</strong> — auf die reine Möglichkeit. „Angst ist die Wirklichkeit der Freiheit als Möglichkeit vor der Möglichkeit." Der Mensch erkennt: Ich KANN — aber was? Alles. Die Zukunft ist offen, unbestimmt, ohne Garantie. Die Angst ist der „Schwindel der Freiheit" — wie am Rand eines Abgrunds: Nicht die Höhe ängstigt, sondern die MÖGLICHKEIT zu springen.<br><br><strong>Philosophische Bedeutung:</strong> (1) Angst zeigt: Der Mensch ist <strong>frei</strong> — wer keine Wahl hat, hat keine Angst. (2) Angst zeigt: Freiheit ist <strong>Last</strong>, nicht nur Privileg — sie erzeugt Unsicherheit und Risiko. (3) <strong>Heidegger</strong> übernimmt Kierkegaards Angstanalyse in <em>Sein und Zeit</em> (1927): Die Angst offenbart das „Nichts" — die Grundlosigkeit der Existenz. (4) <strong>Sartre</strong>: „Der Mensch ist zur Freiheit verurteilt" — die Angst vor der eigenen Freiheit.</p>' },
        { title:'3. Warum kritisiert Kierkegaard Hegel? Was bedeutet „Subjektivität ist Wahrheit"?',
          content:'<p class="lz-prose"><strong>Kierkegaards Kritik:</strong> (1) Hegels System erklärt ALLES — außer dem <strong>konkreten Einzelnen</strong>, der es denkt. „Hegel hat einen Palast gebaut — und wohnt in einer Hundehütte daneben." Der Philosoph als existierendes Individuum passt nicht in sein eigenes System. (2) Hegel löst alle Widersprüche in „Aufhebung" auf — aber manche Widersprüche BLEIBEN: der Widerspruch zwischen Glauben und Vernunft (Abraham), zwischen Freiheit und Notwendigkeit, zwischen Leben und Tod. (3) Hegel denkt die Existenz als <strong>Moment</strong> des Ganzen — Kierkegaard: Die Existenz ist NICHT ein Moment, sondern das EINZIGE, was wirklich ist.<br><br><strong>„Subjektivität ist Wahrheit":</strong> Wahrheit ist nicht eine objektive Aussage über die Welt (Hegel), sondern die Art, wie der EINZELNE sich zu seiner Existenz verhält. Ein Satz wie „Gott existiert" ist objektiv nicht beweisbar — aber als leidenschaftliche Überzeugung eines konkreten Menschen kann er „wahr" sein: wahr für IHN, in seiner Existenz. Die Wahrheit des Glaubens ist keine Faktentreue, sondern <strong>existenzielle Aneignung</strong>: Wie LEBE ich, was ich glaube?</p>' },
        { title:'4. Analysieren Sie Kierkegaards Abraham-Interpretation (Furcht und Zittern).',
          content:'<p class="lz-prose"><strong>Die Geschichte:</strong> Gott befiehlt Abraham, seinen Sohn Isaak zu opfern (Genesis 22). Abraham gehorcht — ohne zu zweifeln, ohne zu protestieren, ohne Erklärung.<br><br><strong>Kierkegaards Deutung:</strong> Abraham vollzieht eine <strong>„teleologische Suspension des Ethischen"</strong>: Er setzt die ethische Pflicht (du sollst nicht töten, du sollst dein Kind schützen) AUSSER KRAFT — im Namen einer höheren, religiösen Pflicht (absoluter Gehorsam gegenüber Gott). Das ist der <strong>Sprung des Glaubens</strong>: Abraham handelt GEGEN die Vernunft und GEGEN die Ethik — und dennoch „richtig" (im religiösen Sinn).<br><br><strong>Drei Probleme:</strong> (1) Gibt es eine „teleologische Suspension des Ethischen"? Wenn ja, kann jeder Fanatiker behaupten, Gott habe ihm befohlen zu töten. (2) Abraham ist <strong>kein „tragischer Held"</strong> (wie Agamemnon, der seine Tochter für den Staat opfert) — er kann sein Handeln nicht rechtfertigen. Er SCHWEIGT, weil er seine Tat nicht erklären kann. (3) Der Glaube ist <strong>PARADOX</strong>: Abraham glaubt, dass er Isaak opfern UND behalten wird — „kraft des Absurden". Das widerspricht aller Logik — und genau das IST Glaube.<br><br><strong>Kritik (Levinas):</strong> Die „teleologische Suspension des Ethischen" ist gefährlich — sie öffnet die Tür zu religiösem Fanatismus. Ethik darf NIEMALS aufgehoben werden — auch nicht im Namen Gottes. Die Ethik (der Andere, sein Gesicht) ist unbedingter als jeder göttliche Befehl.</p>' },
      ])}
    </div></section>

    <section class="lz-content-section" style="padding-top:0;"><div class="lz-section-wrap">
      ${renderPageNav({
        prev:{ label:'Marx', link:`${BASE}/themen/19-jahrhundert/marx` },
        next:{ label:'Schopenhauer', link:`${BASE}/themen/19-jahrhundert/schopenhauer` },
      }, BASE)}
    </div></section>
    ${footerHTML(this.router)}
    `;
  }
  init() { i18n.init(); initScrollReveal(); refreshScrollReveal(); initInteractive(document); }
  cleanup() {}
}