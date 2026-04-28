// pages/projekte/lernzettel/faecher/ethik/themen/19-jahrhundert/schopenhauer.js
// Kapitel 9.3 — Arthur Schopenhauer (1788–1860)
// Wille, Vorstellung, Pessimismus, Mitleidsethik, Ästhetik

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

export default class SchopenhauerPage {
  constructor(router) { this.router = router; }
  render() {
    ensureComponentsCSS();
    loadComponentCSS('pages/projekte/lernzettel/styles/sub.css');
    const el = document.createElement('div');
    el.className = 'page page-schopenhauer';
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
          <span>Schopenhauer</span>
        </nav>
        <h1 class="lz-sub-title"><em>Schopenhauer</em> — Wille, Leid &amp; Erlösung</h1>
        <p class="lz-sub-desc">
          „Das Leben schwankt wie ein Pendel zwischen Schmerz und Langeweile."
          Schopenhauer entdeckte hinter der Welt der Erscheinungen eine blinde,
          irrationale Urkraft — den Willen — und formulierte den konsequentesten
          Pessimismus der Philosophiegeschichte.
        </p>
        ${renderTags(['Kapitel 9.3','1788–1860','Danzig · Berlin · Frankfurt','Wille · Vorstellung · Pessimismus · Mitleid','Abitur 2026'])}
      </div>
    </section>

    <section class="lz-content-section"><div class="lz-section-wrap">
      ${renderSubhead('Biographisches')}
      <h2 class="lz-h2 reveal">Der <em>Pessimist</em> aus Frankfurt</h2>
      <p class="lz-prose reveal">Arthur Schopenhauer (1788–1860) stammte aus einer wohlhabenden Danziger Kaufmannsfamilie. Er studierte in Göttingen und Berlin, wo er Fichtes Vorlesungen besuchte — und verachtete. Sein Hauptwerk <em>Die Welt als Wille und Vorstellung</em> (1818/19) fiel durch — ein einziges Exemplar wurde verkauft. Er habilitierte sich in Berlin und legte seine Vorlesung absichtlich auf dieselbe Zeit wie Hegels — und sprach vor leeren Bänken. Erst in seinen letzten Lebensjahren, nach der gescheiterten Revolution von 1848, fand sein Pessimismus ein Publikum.</p>
      ${renderVTimeline([
        { year:'1788', title:'Geburt in Danzig', text:'Wohlhabende Kaufmannsfamilie; kosmopolitische Erziehung' },
        { year:'1818/19', title:'Die Welt als Wille und Vorstellung', text:'Hauptwerk — kommerzieller Misserfolg; erst 40 Jahre später berühmt' },
        { year:'1820', title:'Habilitation in Berlin', text:'Vorlesung gegen Hegel zur selben Zeit — niemand kommt' },
        { year:'1831', title:'Flucht aus Berlin (Cholera)', text:'Hegel stirbt an Cholera; Schopenhauer flieht nach Frankfurt' },
        { year:'1851', title:'Parerga und Paralipomena', text:'Sammlung von Essays — endlich Erfolg beim Publikum' },
        { year:'1860', title:'Tod in Frankfurt', text:'Stirbt 72-jährig; posthumer Ruhm explodiert' },
      ])}
    </div></section>

    <section class="lz-content-section"><div class="lz-section-wrap">
      ${renderSubhead('Die Welt als Wille und Vorstellung')}
      <h2 class="lz-h2 reveal">Kants <em>Ding an sich</em> = der <em>Wille</em></h2>
      <p class="lz-prose reveal">Schopenhauer geht von Kant aus: Wir erkennen die Welt nur als VORSTELLUNG (Erscheinung) — nicht, wie sie an sich ist. Aber Schopenhauer behauptet: Wir haben einen DIREKTEN Zugang zum Ding an sich — durch unseren eigenen <strong>Leib</strong>. Wenn ich meinen Arm hebe, erlebe ich von innen, was von außen als Bewegung erscheint: den <strong>WILLEN</strong>.</p>

      ${renderCompare({
        titleA:'Die Welt als VORSTELLUNG',
        titleB:'Die Welt als WILLE',
        listA:['Erscheinung, Oberfläche, Phänomen','Geordnet durch Raum, Zeit, Kausalität','Individuiert: viele Einzeldinge','Erkennbar durch <strong>Verstand</strong>','Schleier der Maja (indische Metapher)'],
        listB:['Ding an sich, Kern, Wesen','Jenseits von Raum, Zeit, Kausalität','EINER — ungeteilt, ohne Individuation','Erfahrbar durch den <strong>Leib</strong>','Die verborgene Wirklichkeit'],
      })}

      ${renderMerkboxGrid([
        { icon:'fas fa-fire', title:'Der Wille — blind, irrational, unersättlich',
          text:'Der Wille ist keine bewusste Absicht (wie bei Kant), sondern eine blinde, ziellose, unersättliche Urkraft — ein „dunkler, dumpfer Drang" (wie Schellings „dunkler Grund"). Er manifestiert sich in der Schwerkraft (Stein fällt), im Wachstum (Pflanze wächst), im Trieb (Tier jagt), im Begehren (Mensch will). Überall dasselbe Prinzip: rastloses Streben ohne Ziel.' },
        { icon:'fas fa-frown', title:'Pessimismus — Das Leben ist Leiden',
          text:'Weil der Wille unersättlich ist, wird jedes Begehren, sobald es befriedigt ist, durch ein neues ersetzt. Zufriedenheit ist nur die kurze Pause zwischen zwei Begierden. „Das Leben schwankt wie ein Pendel zwischen Schmerz und Langeweile." Das Glück ist negativ — bloße Abwesenheit von Schmerz, kein positiver Zustand.' },
        { icon:'fas fa-eye', title:'Principium individuationis',
          text:'Die Individuation (Vielheit der Einzeldinge) gehört zur VORSTELLUNG, nicht zum Willen. Der Wille ist EINER — in mir, in dir, im Tier, im Stein. Die Trennung zwischen Ich und Du ist Illusion (Schleier der Maja). Wer das erkennt, empfindet MITLEID: Der Schmerz des anderen IST mein Schmerz — denn es gibt nur EINEN Willen.' },
        { icon:'fas fa-om', title:'Einfluss indischer Philosophie',
          text:'Schopenhauer ist der erste europäische Philosoph, der systematisch indisches Denken rezipiert: Upanishaden (Brahman = der eine Wille), Buddhismus (Leiden, Begehren, Erlösung durch Willensverneinung), Vedanta (Maja = Schleier der Illusion). Er nannte die Upanishaden „den Trost meines Lebens".' },
      ])}

      ${renderFormulaBox({ label:'Schopenhauer, Die Welt als Wille und Vorstellung I, §1 (1818)', formula:'„Die Welt ist meine Vorstellung."', desc:'Der erste Satz des Hauptwerks — radikaler Idealismus: Die gesamte erfahrbare Welt existiert nur als Vorstellung eines erkennenden Subjekts. Aber hinter der Vorstellung liegt der WILLE — das Ding an sich.' })}
    </div></section>

    <section class="lz-content-section"><div class="lz-section-wrap">
      ${renderSubhead('Ethik — Mitleid als Fundament')}
      <h2 class="lz-h2 reveal"><em>Mitleid</em> — die einzige moralische Triebfeder</h2>
      <p class="lz-prose reveal">Gegen Kant (Pflicht), gegen den Utilitarismus (Nutzen), gegen die Stoa (Vernunft): Schopenhauer bestimmt das <strong>Mitleid</strong> (compassio) als die einzige echte Quelle moralischen Handelns.</p>

      ${renderMerkboxGrid([
        { icon:'fas fa-heart', title:'Mitleid = Aufhebung der Individuation',
          text:'Wer mitleidet, durchschaut den Schleier der Maja: Er erkennt, dass die Trennung zwischen Ich und Du ILLUSION ist. Der Schmerz des anderen ist derselbe Wille, der auch in mir leidet. Mitleid ist keine Schwäche, sondern metaphysische Einsicht: „Tat tvam asi" (Das bist du) — die Formel der Upanishaden.' },
        { icon:'fas fa-ban', title:'Gegen Kants Pflichtethik',
          text:'Kants Moral ist „herzlos" — sie beruht auf abstrakter Pflicht, nicht auf Mitgefühl. Der Kategorische Imperativ ist formal leer — er sagt WIE, nicht WAS. Und: Handeln aus Pflicht OHNE Neigung ist für Schopenhauer moralisch wertlos — wer dem Bettler gibt, weil er MUSS (Pflicht), handelt weniger moralisch als der, der gibt, weil er MITLEIDET.' },
        { icon:'fas fa-shield-alt', title:'Gerechtigkeit und Menschenliebe',
          text:'Aus dem Mitleid folgen zwei Stufen der Moral: (1) GERECHTIGKEIT (neminem laede — verletze niemanden): Ich füge dem anderen keinen Schmerz zu, weil ich seinen Schmerz MITFÜHLE. (2) MENSCHENLIEBE (omnes, quantum potes, iuva — hilf allen, so viel du kannst): Ich helfe aktiv, weil der Schmerz des anderen MEIN Schmerz ist.' },
      ])}
    </div></section>

    <section class="lz-content-section"><div class="lz-section-wrap">
      ${renderSubhead('Erlösung — Drei Wege der Willensverneinung')}
      <h2 class="lz-h2 reveal">Kunst, Mitleid, <em>Askese</em></h2>
      ${renderMerkboxGrid([
        { icon:'fas fa-palette', title:'1. Ästhetische Kontemplation',
          text:'In der Kunstbetrachtung löst sich der Mensch VORÜBERGEHEND vom Willen: Er wird zum „reinen, willenlosen Subjekt der Erkenntnis". In der Musik — der höchsten Kunst — hört er den Willen DIREKT (nicht seine Erscheinungen). Die Kunst ist „Ferien vom Willen" — aber nur temporär.' },
        { icon:'fas fa-heart', title:'2. Mitleid',
          text:'Im Mitleid durchschaut der Mensch die Individuation und erkennt den EINEN Willen in allen Wesen. Das ist moralisch, aber noch keine vollständige Erlösung — denn der Mitleidende leidet MIT, statt sich vom Leiden zu befreien.' },
        { icon:'fas fa-pray', title:'3. Askese — Verneinung des Willens zum Leben',
          text:'Die einzige vollständige Erlösung: Die VERNEINUNG des Willens zum Leben — Askese, Keuschheit, freiwillige Armut, Selbstverneinung. Der Heilige (christlich) und der Asket (buddhistisch) erreichen Nirwana — nicht den Tod, sondern die Befreiung vom Wollen. „Der Tod ist der eigentliche Genius der Philosophie."' },
      ])}
    </div></section>

    <section class="lz-content-section"><div class="lz-section-wrap">
      ${renderSubhead('Testfragen — Abiturniveau')}
      ${renderAccordion([
        { title:'1. Erklären Sie Schopenhauers Unterscheidung von „Wille" und „Vorstellung" und ihren Bezug zu Kant.',
          content:'<p class="lz-prose"><strong>Kant:</strong> Wir erkennen nur ERSCHEINUNGEN (Phänomene), nicht das „Ding an sich" (Noumenon). Das Ding an sich ist prinzipiell unerkennbar.<br><br><strong>Schopenhauer übernimmt und radikalisiert:</strong> Die erfahrbare Welt = VORSTELLUNG (geordnet durch Raum, Zeit, Kausalität — Kants Anschauungsformen und Kategorien). Aber: Wir haben einen DIREKTEN Zugang zum Ding an sich — durch unseren eigenen Leib. Wenn ich meinen Arm bewege, erlebe ich von INNEN, was von außen als Körperbewegung erscheint: den WILLEN. Schopenhauers Identifikation: Kants „Ding an sich" = der WILLE.<br><br><strong>Unterschied zu Kant:</strong> Kant: Das Ding an sich ist unerkennbar. Schopenhauer: Wir erkennen es als WILLEN — nicht durch Verstand, sondern durch unmittelbare Leiberfahrung. Der Wille ist blind, irrational, ziellos — nicht Kants moralische Vernunft, sondern Schellings „dunkler Grund": eine triebhafte Urkraft unter aller Rationalität.</p>' },
        { title:'2. Warum ist Schopenhauer Pessimist? Vergleichen Sie mit Leibniz\' Optimismus.',
          content:'<p class="lz-prose"><strong>Schopenhauers Pessimismus:</strong> (1) Der Wille ist UNERSÄTTLICH — jedes erfüllte Begehren erzeugt ein neues. Zufriedenheit ist unmöglich. (2) Leid ist POSITIV (real empfunden), Glück ist NEGATIV (bloße Abwesenheit von Leid). (3) Das Leben schwankt zwischen Schmerz (unerfülltes Begehren) und Langeweile (erfülltes Begehren → neue Leere). (4) Je höher das Bewusstsein, desto größer das Leiden (Tiere leiden weniger als Menschen, Genies leiden am meisten).<br><br><strong>Leibniz\' Optimismus:</strong> Gott hat die BESTE aller möglichen Welten gewählt — die mit dem Maximum an Gutem und Minimum an Übel. Übel sind notwendig für das Gesamtgute (Schatten machen das Licht sichtbar).<br><br><strong>Schopenhauers Gegenangriff:</strong> „Diese Welt ist die schlechteste aller möglichen Welten" — wenn sie nur ein bisschen schlechter wäre, könnte sie nicht mehr existieren. Leibniz\' Optimismus ist zynisch: Er rechtfertigt das Leid der Einzelnen im Namen des „Gesamtplans". Voltaire (Candide) hatte recht, Leibniz war Pangloss.</p>' },
        { title:'3. Vergleichen Sie Schopenhauers Mitleidsethik mit Kants Pflichtethik.',
          content:'<p class="lz-prose"><strong>Kant:</strong> Moral beruht auf PFLICHT — dem Kategorischen Imperativ, den die Vernunft sich selbst gibt. Handeln aus Neigung (Mitgefühl, Sympathie) hat keinen moralischen Wert — nur Handeln aus PFLICHT zählt. Moral ist universell, formal, rational.<br><br><strong>Schopenhauer:</strong> Moral beruht auf MITLEID — dem unmittelbaren Mitfühlen mit dem Schmerz des anderen. Kants Pflichtethik ist „herzlos": Wer dem Bettler gibt, weil die Pflicht es verlangt (ohne Mitgefühl), handelt moralisch wertlos. Nur wer aus MITLEID handelt, handelt wirklich moralisch. Mitleid ist nicht irrational, sondern metaphysische Einsicht: Es durchschaut den „Schleier der Maja" und erkennt den EINEN Willen in allen Wesen.<br><br><strong>Bewertung:</strong> Kants Stärke: Universalität und Objektivität — die Pflicht gilt für ALLE, unabhängig von Gefühlen. Schwäche: Kälte und Formalismus. Schopenhauers Stärke: Wärme und Menschlichkeit — Moral hat ein emotionales Fundament. Schwäche: Subjektivität — Mitleid variiert (ich empfinde mehr Mitleid mit meinem Hund als mit einem fernen Erdbeben). Kann Mitleid allein eine universelle Ethik begründen?</p>' },
        { title:'4. Inwiefern ist Schopenhauer ein Vorläufer des Buddhismus in Europa?',
          content:'<p class="lz-prose"><strong>Parallelen:</strong> (1) Das Leben ist LEIDEN (dukkha) — die erste der Vier Edlen Wahrheiten des Buddha. Schopenhauer: „Alles Leben ist Leiden." (2) Die Ursache des Leidens ist BEGEHREN (tanhā). Schopenhauer: Der unersättliche Wille ist die Quelle allen Leidens. (3) Erlösung durch AUFHEBEN des Begehrens. Schopenhauer: Verneinung des Willens zum Leben — Askese, Keuschheit, Selbstverneinung. (4) NIRWANA = Verlöschen des Willens — nicht Vernichtung, sondern Befreiung. (5) Schleier der Maja = buddhistische Illusion (māyā) — die Individuation ist Schein.<br><br><strong>Unterschiede:</strong> (1) Schopenhauer denkt METAPHYSISCH: Der Wille ist das „Ding an sich" — eine ontologische Aussage. Der Buddhismus vermeidet Metaphysik (der Buddha schwieg zu metaphysischen Fragen). (2) Schopenhauer bleibt PESSIMIST: Das Leben hat keinen Sinn — nur Flucht aus dem Leiden. Der Buddhismus ist nicht pessimistisch, sondern THERAPEUTISCH: Das Leiden hat eine Ursache, und die kann überwunden werden (Achtfacher Pfad). (3) Schopenhauer war kein Buddhist — er entdeckte die Parallelen erst, nachdem er sein System entwickelt hatte. Aber er machte den Buddhismus im Westen bekannt wie kein anderer vor ihm.</p>' },
      ])}
    </div></section>

    <section class="lz-content-section" style="padding-top:0;"><div class="lz-section-wrap">
      ${renderPageNav({
        prev:{ label:'Kierkegaard', link:`${BASE}/themen/19-jahrhundert/kierkegaard` },
        next:{ label:'Nietzsche', link:`${BASE}/themen/19-jahrhundert/nietzsche` },
      }, BASE)}
    </div></section>
    ${footerHTML(this.router)}
    `;
  }
  init() { i18n.init(); initScrollReveal(); refreshScrollReveal(); initInteractive(document); }
  cleanup() {}
}