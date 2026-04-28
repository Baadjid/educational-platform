// pages/projekte/lernzettel/faecher/ethik/themen/aufklärung/kant.js
// ══════════════════════════════════════════════════════════════════
// Kapitel 7.4 — Immanuel Kant (1724–1804)
// KrV, Kategorischer Imperativ, Ästhetik, Aufklärung
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

const KAP_COLOR = '#64748b';
const KAP_COLOR_RGB = '100, 116, 139';

export default class KantPage {
  constructor(router) { this.router = router; }
  render() {
    ensureComponentsCSS();
    loadComponentCSS('pages/projekte/lernzettel/styles/sub.css');
    const el = document.createElement('div');
    el.className = 'page page-kant';
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
          <span>Kant</span>
        </nav>
        <h1 class="lz-sub-title"><em>Immanuel Kant</em> — Die Kritische Philosophie</h1>
        <p class="lz-sub-desc">
          „Sapere aude! — Habe Mut, dich deines eigenen Verstandes zu bedienen!"
          Kant revolutionierte die Philosophie so gründlich, dass sie sich in
          „vor Kant" und „nach Kant" teilt. Drei Kritiken — drei Säulen
          des modernen Denkens.
        </p>
        ${renderTags(['Kapitel 7.4', '1724–1804', 'Königsberg', 'KrV · Kategorischer Imperativ · Aufklärung', 'Abitur 2026'])}
      </div>
    </section>

    <section class="lz-content-section"><div class="lz-section-wrap">
      ${renderSubhead('Biographisches')}
      <h2 class="lz-h2 reveal">Der Mann, nach dem man die <em>Uhren stellte</em></h2>
      <p class="lz-prose reveal">Immanuel Kant (1724–1804) verbrachte sein gesamtes Leben in <strong>Königsberg</strong> (Ostpreußen) — er verließ die Stadt nie. Sein Tagesablauf war so regelmäßig, dass die Bürger angeblich ihre Uhren nach seinem Spaziergang stellten. Aber hinter der äußeren Monotonie verbarg sich die <strong>radikalste intellektuelle Revolution</strong> seit Platon.</p>
      ${renderVTimeline([
        { year: '1724', title: 'Geburt in Königsberg', text: 'Sohn eines Sattlermeisters; pietistische Erziehung' },
        { year: '1755', title: 'Privatdozent', text: 'Habilitation; 15 Jahre Lehrtätigkeit ohne feste Professur' },
        { year: '1770', title: 'Professur für Logik und Metaphysik', text: 'Endlich gesicherte Stellung; Inauguraldissertation über Sinnenwelt und Verstandeswelt' },
        { year: '1781', title: 'Kritik der reinen Vernunft (KrV)', text: '10 Jahre „stilles Jahrzehnt" der Vorbereitung; Kopernikanische Wende der Philosophie' },
        { year: '1785', title: 'Grundlegung zur Metaphysik der Sitten', text: 'Der Kategorische Imperativ — das Fundament der modernen Ethik' },
        { year: '1788', title: 'Kritik der praktischen Vernunft (KpV)', text: 'Moralphilosophie: Pflicht, Freiheit, das moralische Gesetz' },
        { year: '1790', title: 'Kritik der Urteilskraft (KdU)', text: 'Ästhetik und Teleologie — das Schöne und das Erhabene' },
        { year: '1795', title: 'Zum ewigen Frieden', text: 'Entwurf einer Weltfriedensordnung — Vorläufer des Völkerbundes und der UNO' },
        { year: '1804', title: 'Tod in Königsberg', text: 'Letzte Worte: „Es ist gut." 79 Jahre alt' },
      ])}
    </div></section>

    <section class="lz-content-section"><div class="lz-section-wrap">
      ${renderSubhead('Die Kopernikanische Wende (KrV, 1781)')}
      <h2 class="lz-h2 reveal">Nicht wir richten uns nach den <em>Gegenständen</em></h2>
      <p class="lz-prose reveal">Kants <strong>Kopernikanische Wende</strong>: Bisher nahm man an, dass unsere Erkenntnis sich nach den Gegenständen richtet (wir bilden die Welt ab). Kant dreht das um: <strong>Die Gegenstände richten sich nach unserer Erkenntnis</strong> — wir formen die Welt durch die Strukturen unseres Geistes.</p>

      ${renderMerkboxGrid([
        { icon: 'fas fa-glasses', title: 'Anschauungsformen: Raum und Zeit',
          text: 'Raum und Zeit sind keine Eigenschaften der Welt „an sich", sondern Formen unserer Anschauung (Sinnlichkeit). Wir können nichts wahrnehmen, was nicht in Raum und Zeit erscheint — aber Raum und Zeit sind UNSERE Brille, nicht Merkmale der Dinge selbst. Voraussetzung aller Erfahrung, nicht Ergebnis.' },
        { icon: 'fas fa-table', title: 'Kategorien des Verstandes',
          text: 'Der Verstand ordnet die Sinneseindrücke durch 12 Kategorien: Einheit, Vielheit, Kausalität, Substanz, Möglichkeit, Notwendigkeit u.a. Kausalität ist NICHT in der Welt „draußen" (Hume hat recht: wir sehen sie nie), sondern eine Kategorie des VERSTANDES — eine Bedingung, DAMIT wir überhaupt Erfahrung machen können.' },
        { icon: 'fas fa-ban', title: 'Das Ding an sich ist unerkennbar',
          text: 'Wir erkennen die Dinge nur, wie sie uns ERSCHEINEN (Phänomene) — nicht, wie sie AN SICH sind (Noumena). Das „Ding an sich" existiert, aber es ist für die menschliche Vernunft unzugänglich. Alle Metaphysik (Gott, Seele, Weltganzes), die behauptet, das Ding an sich zu erkennen, ist Schein.' },
        { icon: 'fas fa-fire-alt', title: 'Antinomien der reinen Vernunft',
          text: 'Wenn die Vernunft über das Ding an sich spekuliert, gerät sie in WIDERSPRÜCHE (Antinomien): Ist die Welt endlich oder unendlich? Hat sie einen Anfang oder nicht? Gibt es Freiheit oder nur Determinismus? Existiert Gott? — Für beide Seiten gibt es gleich gute Argumente → die Vernunft kann die Frage NICHT beantworten.' },
      ])}

      ${renderFormulaBox({
        label: 'Kant, KrV B XVI (Vorrede zur 2. Auflage, 1787)',
        formula: '„Bisher nahm man an, alle unsere Erkenntnis<br>müsse sich nach den Gegenständen richten.<br>Man versuche es daher einmal,<br>ob wir nicht besser fortkommen,<br>wenn wir annehmen, die Gegenstände müssten sich<br>nach unserer Erkenntnis richten."',
        desc: 'Die Kopernikanische Wende: Nicht die Erkenntnis passt sich der Welt an, sondern die Welt (als Erscheinung) wird durch die Erkenntnisstrukturen des Subjekts geformt.'
      })}

      ${renderCompare({
        titleA: 'Rationalismus (Descartes/Leibniz)',
        titleB: 'Empirismus (Locke/Hume)',
        listA: [
          'Vernunft erkennt Wahrheit <strong>a priori</strong> (ohne Erfahrung)',
          'Angeborene Ideen (ideae innatae)',
          'Metaphysik ist <strong>möglich</strong> (Gott, Seele, Welt)',
          'Deduktion (Mathematik-Modell)',
        ],
        listB: [
          'Erfahrung ist <strong>einzige</strong> Erkenntnisquelle',
          'Tabula rasa — nichts ist angeboren',
          'Metaphysik ist <strong>unmöglich</strong> (kein Erfahrungsgehalt)',
          'Induktion (Beobachtung)',
        ],
      })}

      ${renderInfobox({
        type: 'blue', icon: 'fas fa-graduation-cap',
        title: 'Kants Synthese',
        body: 'Kant vereint beide Traditionen: <strong>Erkenntnis beginnt mit der Erfahrung</strong> (Empirismus hat recht: nichts ist ohne Sinneseindruck möglich), aber sie <strong>geht nicht ganz aus ihr hervor</strong> (Rationalismus hat recht: der Verstand liefert die Ordnungsstrukturen — Kategorien, Anschauungsformen). Ergebnis: <strong>Synthetische Urteile a priori</strong> — Erkenntnisse, die notwendig und allgemein sind, aber die Welt betreffen: z.B. „Jedes Ereignis hat eine Ursache" (notwendig wahr, aber nicht analytisch — es erweitert unser Wissen über die Welt).'
      })}
    </div></section>

    <section class="lz-content-section"><div class="lz-section-wrap">
      ${renderSubhead('Ethik — Der Kategorische Imperativ')}
      <h2 class="lz-h2 reveal">Handle so, dass die Maxime deines Willens <em>jederzeit</em> …</h2>
      <p class="lz-prose reveal">Kants Ethik ist die einflussreichste der Neuzeit. Ihr Kern: Moral beruht nicht auf Gefühlen (Hume), nicht auf Konsequenzen (Utilitarismus), nicht auf Tugend (Aristoteles), sondern auf dem <strong>moralischen Gesetz</strong>, das die Vernunft sich selbst gibt — dem <strong>Kategorischen Imperativ</strong>.</p>

      ${renderMerkboxGrid([
        { icon: 'fas fa-gem', title: 'Der gute Wille',
          text: '„Es ist überall nichts in der Welt, ja überhaupt auch außer derselben zu denken möglich, was ohne Einschränkung für gut könnte gehalten werden, als allein ein GUTER WILLE." (GMS) Nicht Talent, nicht Glück, nicht Konsequenzen — nur die Gesinnung (der gute Wille) hat moralischen Wert.' },
        { icon: 'fas fa-scroll', title: 'Pflicht vs. Neigung',
          text: 'Moralisch wertvoll ist nur die Handlung AUS PFLICHT — nicht aus Neigung, Eigeninteresse oder Mitgefühl. Der Kaufmann, der ehrlich ist, weil Ehrlichkeit sich lohnt, handelt pflichtgemäß, aber nicht AUS Pflicht. Der Kaufmann, der ehrlich ist, WEIL es richtig ist (auch wenn es ihm schadet), handelt moralisch.' },
      ])}

      <h3 class="lz-h3 reveal">Die vier Formulierungen des Kategorischen Imperativs</h3>

      ${renderTable({
        headers: ['Formulierung', 'Text', 'Kern'],
        rows: [
          ['<strong>1. Universalisierung</strong>', '„Handle nur nach derjenigen Maxime, durch die du zugleich wollen kannst, dass sie ein allgemeines Gesetz werde."', 'Verallgemeinerbarkeit: Könnte jeder so handeln?'],
          ['<strong>2. Naturgesetz</strong>', '„Handle so, als ob die Maxime deiner Handlung durch deinen Willen zum allgemeinen Naturgesetze werden sollte."', 'Naturgesetz-Analogie: Wäre die Maxime als Naturgesetz denkbar?'],
          ['<strong>3. Selbstzweck</strong>', '„Handle so, dass du die Menschheit, sowohl in deiner Person als in der Person eines jeden anderen, jederzeit zugleich als Zweck, niemals bloß als Mittel brauchst."', 'Menschenwürde: Menschen sind Zwecke an sich, nie nur Mittel'],
          ['<strong>4. Autonomie</strong>', '„Handle so, dass der Wille durch seine Maxime sich selbst zugleich als allgemein gesetzgebend betrachten könne."', 'Selbstgesetzgebung: Das moralische Gesetz kommt aus dir selbst'],
        ],
        highlight: [0, 2],
      })}

      ${renderFormulaBox({
        label: 'Kant, Grundlegung zur Metaphysik der Sitten (1785)',
        formula: '„Handle nur nach derjenigen Maxime,<br>durch die du zugleich wollen kannst,<br>dass sie ein allgemeines Gesetz werde."',
        desc: 'Die erste Formulierung des Kategorischen Imperativs — das Universalisierungsprinzip: Prüfe, ob deine Handlungsregel (Maxime) verallgemeinerbar ist, ohne sich selbst zu widersprechen.'
      })}

      ${renderInfobox({
        type: 'warning', icon: 'fas fa-exclamation-triangle',
        title: 'Kritik am Kategorischen Imperativ',
        body: '<strong>Hegel:</strong> Der KI ist zu formal — er sagt, WIE eine Handlung strukturiert sein muss (verallgemeinerbar), aber nicht, WAS konkret zu tun ist. Er ist ein „leerer Formalismus". <strong>Utilitaristen (Mill):</strong> Die Konsequenzen einer Handlung MÜSSEN berücksichtigt werden. Kants berühmtes Lügenverbot (man darf nicht lügen, selbst um einen Mörder abzuweisen) zeigt die Absurdität einer konsequenzblinden Ethik. <strong>Schopenhauer:</strong> Moral beruht auf MITLEID, nicht auf Vernunft — Kants Ethik ist kalt und unmenschlich.'
      })}
    </div></section>

    <section class="lz-content-section"><div class="lz-section-wrap">
      ${renderSubhead('Was ist Aufklärung? (1784)')}
      <h2 class="lz-h2 reveal"><em>Sapere aude!</em></h2>
      ${renderFormulaBox({
        label: 'Kant, Beantwortung der Frage: Was ist Aufklärung? (1784)',
        formula: '„Aufklärung ist der Ausgang des Menschen<br>aus seiner selbstverschuldeten Unmündigkeit.<br>Unmündigkeit ist das Unvermögen,<br>sich seines Verstandes ohne Leitung eines anderen<br>zu bedienen. Selbstverschuldet ist diese Unmündigkeit,<br>wenn die Ursache derselben nicht am Mangel des Verstandes,<br>sondern der Entschließung und des Mutes liegt,<br>sich seiner ohne Leitung eines anderen zu bedienen.<br>Sapere aude! Habe Mut, dich deines eigenen<br>Verstandes zu bedienen!"',
        desc: 'Das Programm der Aufklärung in einem Absatz: Nicht Unwissenheit, sondern FEIGHEIT ist das Problem. Der Mensch KANN denken — er muss es nur WAGEN.'
      })}
      ${renderMerkboxGrid([
        { icon: 'fas fa-lock-open', title: 'Selbstverschuldete Unmündigkeit',
          text: 'Die Unmündigkeit ist SELBST verschuldet: Nicht fehlender Verstand, sondern fehlender MUT hindert die Menschen am eigenen Denken. „Es ist so bequem, unmündig zu sein" — andere denken für mich: der Arzt, der Pfarrer, der Politiker. Aufklärung = Mut zur Selbstständigkeit.' },
        { icon: 'fas fa-comments', title: 'Öffentlicher vs. privater Vernunftgebrauch',
          text: 'Kant unterscheidet: Der ÖFFENTLICHE Gebrauch der Vernunft (als Gelehrter vor dem Lesepublikum) muss frei sein — Meinungsfreiheit, Pressefreiheit, Wissenschaftsfreiheit. Der PRIVATE Gebrauch (in Amt und Funktion — als Beamter, Offizier, Pfarrer) darf eingeschränkt werden: Man muss gehorchen, aber darf öffentlich kritisieren.' },
      ])}
    </div></section>

    <section class="lz-content-section"><div class="lz-section-wrap">
      ${renderSubhead('Testfragen — Abiturniveau')}
      ${renderAccordion([
        { title: '1. Erklären Sie Kants „Kopernikanische Wende" und den Begriff des „Ding an sich".',
          content: '<p class="lz-prose"><strong>Kopernikanische Wende:</strong> Nicht unsere Erkenntnis richtet sich nach den Gegenständen (passiv), sondern die Gegenstände (als Erscheinungen) richten sich nach unserer Erkenntnis (aktiv). Der Verstand bildet die Welt nicht ab, sondern <strong>formt</strong> sie — durch Anschauungsformen (Raum, Zeit) und Kategorien (Kausalität, Substanz).<br><br><strong>Ding an sich:</strong> Die Dinge, wie sie unabhängig von unserer Erkenntnis sind, bleiben prinzipiell <strong>unerkennbar</strong>. Wir erkennen nur ERSCHEINUNGEN (Phänomene) — die Dinge, wie sie uns durch unsere Anschauungsformen und Kategorien präsentiert werden. Das „Ding an sich" (Noumenon) ist eine Grenze: Es existiert, aber es ist für die menschliche Vernunft unzugänglich.<br><br><strong>Konsequenz:</strong> Alle traditionelle Metaphysik (Gottesbeweise, Seelenbeweise, Weltganzes) scheitert — sie versucht, das Ding an sich zu erkennen, was per definitionem unmöglich ist. Metaphysik als <strong>Wissenschaft</strong> ist unmöglich — aber als <strong>natürliche Anlage</strong> des Menschen (die Fragen nach Gott, Freiheit, Unsterblichkeit drängen sich auf) ist sie unvermeidlich.</p>' },
        { title: '2. Erläutern Sie den Kategorischen Imperativ in seinen vier Formulierungen und geben Sie Beispiele.',
          content: '<p class="lz-prose"><strong>1. Universalisierung:</strong> „Handle nur nach derjenigen Maxime, durch die du zugleich wollen kannst, dass sie ein allgemeines Gesetz werde." Beispiel: Lügen. Maxime: „Ich lüge, wenn es mir nützt." Universalisiert: Jeder lügt → Vertrauen bricht zusammen → Lügen wird sinnlos (niemand glaubt mehr jemandem). Die Maxime widerspricht sich selbst → Lügen ist verboten.<br><br><strong>2. Naturgesetz:</strong> Variation der 1. Formulierung mit dem Bild eines Naturgesetzes. Könnte die Maxime als Naturgesetz bestehen? „Jeder lügt" als Naturgesetz → unmöglich (Kommunikation bricht zusammen).<br><br><strong>3. Selbstzweck:</strong> „Behandle die Menschheit nie bloß als Mittel, sondern immer zugleich als Zweck." Beispiel: Sklaverei. Der Sklavenhalter benutzt den Sklaven NUR als Mittel (Arbeitskraft) und nie als Zweck an sich (als Wesen mit Würde) → moralisch verboten. Aber: Einen Handwerker zu bezahlen ist erlaubt — man benutzt ihn als Mittel (für die Reparatur), aber zugleich als Zweck (man bezahlt ihn, respektiert seinen Willen).<br><br><strong>4. Autonomie:</strong> Das moralische Gesetz kommt nicht von außen (Gott, Gesellschaft, Natur), sondern die Vernunft gibt es sich <strong>selbst</strong> (Autonomie = Selbstgesetzgebung). Moral ist nicht Gehorsam gegenüber fremden Geboten, sondern Selbstbestimmung durch Vernunft.</p>' },
        { title: '3. Vergleichen Sie Kants Ethik mit dem Utilitarismus.',
          content: '<p class="lz-prose"><strong>Kant (Deontologie/Pflichtethik):</strong> (1) Moralischer Wert liegt in der <strong>Gesinnung</strong> (guter Wille), nicht in den Konsequenzen. (2) Der Kategorische Imperativ ist ein <strong>formales</strong> Prinzip — er sagt nicht, WAS gut ist, sondern WIE eine moralische Maxime strukturiert sein muss (verallgemeinerbar). (3) Pflichten sind <strong>absolut</strong>: Lügen ist immer falsch, auch wenn die Wahrheit schadet. (4) Menschen haben <strong>Würde</strong> (unverrechenbaren Wert) — sie dürfen nicht als bloße Mittel benutzt werden.<br><br><strong>Utilitarismus (Mill, Bentham):</strong> (1) Moralischer Wert liegt in den <strong>Konsequenzen</strong> — eine Handlung ist gut, wenn sie das größte Glück der größten Zahl befördert. (2) Das Nutzenprinzip (greatest happiness principle) ist ein <strong>inhaltliches</strong> Kriterium — es sagt, WAS gut ist: Glück/Lust. (3) Pflichten sind <strong>relativ</strong>: Lügen ist erlaubt, wenn die Wahrheit mehr Leid verursacht. (4) Menschen haben <strong>Wert</strong> nur als Träger von Glück/Leid — sie können gegeneinander verrechnet werden (z.B. Trolley-Problem).<br><br><strong>Bewertung:</strong> Kants Stärke: Menschenwürde und absolute Rechte. Schwäche: Konsequenzblindheit (Lügenverbot). Utilitarismus\' Stärke: Flexibilität und Ergebnisorientierung. Schwäche: Kann Einzelne opfern, wenn es der Mehrheit nützt.</p>' },
        { title: '4. Was ist Aufklärung nach Kant und warum ist sie „selbstverschuldet"?',
          content: '<p class="lz-prose"><strong>Definition:</strong> „Aufklärung ist der Ausgang des Menschen aus seiner selbstverschuldeten Unmündigkeit." Unmündigkeit = Unvermögen, sich seines Verstandes OHNE Leitung eines anderen zu bedienen.<br><br><strong>Selbstverschuldet:</strong> Die Ursache ist nicht fehlender Verstand, sondern fehlender <strong>Mut</strong> (und Bequemlichkeit): „Habe ich ein Buch, das für mich Verstand hat, einen Seelsorger, der für mich Gewissen hat, einen Arzt, der für mich die Diät beurteilt — so brauche ich mich ja nicht selbst zu bemühen." Die Unmündigkeit ist bequem — Denken ist anstrengend und riskant.<br><br><strong>Sapere aude:</strong> „Habe Mut, dich deines eigenen Verstandes zu bedienen." Aufklärung ist nicht Wissen (das kann man aus Büchern haben), sondern <strong>Mut zum Selberdenken</strong>. Es ist eine Haltung, keine Lehre.<br><br><strong>Bedingung:</strong> Freiheit des ÖFFENTLICHEN Vernunftgebrauchs — Meinungsfreiheit, Pressefreiheit, Wissenschaftsfreiheit. Nur wer seine Gedanken öffentlich äußern darf, kann aufgeklärt werden und aufklären. Kant richtet sich an Friedrich den Großen: „Räsoniert, so viel ihr wollt und worüber ihr wollt — aber gehorcht!" Aufklärung im Rahmen der bestehenden Ordnung, nicht Revolution.</p>' },
      ])}
    </div></section>

    <section class="lz-content-section" style="padding-top:0;"><div class="lz-section-wrap">
      ${renderPageNav({
        prev: { label: 'Rousseau', link: `${BASE}/themen/aufklaerung/rousseau` },
        next: { label: 'Fichte',   link: `${BASE}/themen/deutscher-idealismus/fichte` },
      }, BASE)}
    </div></section>
    ${footerHTML(this.router)}
    `;
  }
  init() { i18n.init(); initScrollReveal(); refreshScrollReveal(); initInteractive(document); }
  cleanup() {}
}