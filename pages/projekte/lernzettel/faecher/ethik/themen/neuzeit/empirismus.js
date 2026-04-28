// pages/projekte/lernzettel/faecher/ethik/themen/neuzeit/empirismus.js
// ══════════════════════════════════════════════════════════════════
// Kapitel 6.4 — Empirismus
// Locke, Berkeley, Hume
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

const LOCKE_TABS = [
  { key: 'erkenntnis', label: 'Erkenntnistheorie' },
  { key: 'politik',    label: 'Politische Philosophie' },
];

export default class EmpirismusPage {
  constructor(router) { this.router = router; }
  render() {
    ensureComponentsCSS();
    loadComponentCSS('pages/projekte/lernzettel/styles/sub.css');
    const el = document.createElement('div');
    el.className = 'page page-empirismus';
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
          <span>Empirismus</span>
        </nav>
        <h1 class="lz-sub-title">Der <em>Empirismus</em></h1>
        <p class="lz-sub-desc">
          Erfahrung als einzige Quelle der Erkenntnis: Die britischen Empiristen
          Locke, Berkeley und Hume stellten die rationalistische Vernunftphilosophie
          vom Kopf auf die Füße — und erschütterten dabei die Fundamente
          der gesamten Metaphysik.
        </p>
        ${renderTags(['Kapitel 6.4', '17.–18. Jh.', 'England · Irland · Schottland', 'Tabula rasa · Esse est percipi · Kausalitätskritik', 'Abitur 2026'])}
      </div>
    </section>

    <section class="lz-content-section">
      <div class="lz-section-wrap">
        ${renderSubhead('Was ist Empirismus?')}
        <h2 class="lz-h2 reveal">Nichts im Verstand, was nicht zuvor in den <em>Sinnen</em> war</h2>
        <p class="lz-prose reveal">
          Der <strong>Empirismus</strong> (von griech. empeiría = Erfahrung) behauptet:
          Alle Erkenntnis stammt aus der <strong>Sinneserfahrung</strong>. Es gibt keine
          angeborenen Ideen (gegen Descartes, Leibniz), keine reinen Vernunftwahrheiten
          über die Wirklichkeit (gegen den Rationalismus). Der Verstand ist bei der
          Geburt eine <strong>tabula rasa</strong> — ein unbeschriebenes Blatt, das
          erst durch Erfahrung beschriftet wird.
        </p>
        ${renderCompare({
          titleA: 'Rationalismus',
          titleB: 'Empirismus',
          listA: [
            'Vernunft ist die primäre Erkenntnisquelle',
            'Es gibt <strong>angeborene Ideen</strong> (ideae innatae)',
            'Sinne sind unzuverlässig',
            'Methode: <strong>Deduktion</strong> (vom Allgemeinen zum Besonderen)',
            'Modell: <strong>Mathematik</strong> (sichere Schlüsse)',
            'Vertreter: Descartes, Spinoza, Leibniz',
          ],
          listB: [
            'Erfahrung ist die primäre Erkenntnisquelle',
            'Keine angeborenen Ideen — <strong>tabula rasa</strong>',
            'Sinne sind die einzige Verbindung zur Welt',
            'Methode: <strong>Induktion</strong> (vom Besonderen zum Allgemeinen)',
            'Modell: <strong>Naturwissenschaft</strong> (Beobachtung)',
            'Vertreter: Locke, Berkeley, Hume',
          ],
        })}
      </div>
    </section>

    <section class="lz-content-section">
      <div class="lz-section-wrap">
        ${renderSubhead('John Locke (1632–1704)')}
        <h2 class="lz-h2 reveal"><em>Tabula rasa</em> — Der Verstand als unbeschriebenes Blatt</h2>
        <p class="lz-prose reveal">
          John Locke ist der Begründer des systematischen Empirismus und zugleich
          einer der einflussreichsten politischen Philosophen der Geschichte.
          Seine <em>Two Treatises of Government</em> (1689) begründeten den
          <strong>Liberalismus</strong>; sein <em>Essay Concerning Human
          Understanding</em> (1689) die empiristische Erkenntnistheorie.
        </p>
        <nav class="wim-tabs" id="locke-tabs" aria-label="Locke">
          ${LOCKE_TABS.map((t, i) => `
            <button class="wim-tab${i === 0 ? ' active' : ''}" data-wim="${t.key}">
              ${t.label}
            </button>`).join('')}
        </nav>
        <div class="wim-category" data-wim-cat="erkenntnis">
          <h3 class="lz-h3">Essay Concerning Human Understanding (1689)</h3>
          ${renderMerkboxGrid([
            { icon: 'fas fa-file', title: 'Tabula rasa — keine angeborenen Ideen',
              text: 'Gegen Descartes: Der Verstand ist bei der Geburt leer — ein „weißes Blatt" (white paper). Alle Ideen stammen aus der Erfahrung: entweder aus der äußeren Sinneserfahrung (sensation) oder aus der inneren Selbstbeobachtung (reflection). Es gibt keine idea innata — kein Gottesbeweis, kein moralisches Gesetz ist „eingeboren".' },
            { icon: 'fas fa-puzzle-piece', title: 'Einfache und komplexe Ideen',
              text: 'Einfache Ideen werden von den Sinnen geliefert: rot, süß, kalt, hart. Der Verstand kann einfache Ideen nicht erfinden — nur empfangen. Komplexe Ideen entstehen durch Verknüpfung einfacher Ideen: „Apfel" = rot + rund + süß + fest. Der Verstand ist aktiv im Kombinieren, passiv im Empfangen.' },
            { icon: 'fas fa-adjust', title: 'Primäre und sekundäre Qualitäten',
              text: 'Primäre Qualitäten (Ausdehnung, Gestalt, Bewegung, Zahl) gehören zum Gegenstand SELBST — sie sind objektiv. Sekundäre Qualitäten (Farbe, Geschmack, Geruch, Klang) existieren nur in der WAHRNEHMUNG des Subjekts — sie sind subjektiv. Der Apfel ist wirklich rund, aber „rot" nur für uns.' },
          ])}
        </div>
        <div class="wim-category hidden" data-wim-cat="politik">
          <h3 class="lz-h3">Two Treatises of Government (1689)</h3>
          ${renderMerkboxGrid([
            { icon: 'fas fa-users', title: 'Naturzustand: friedlich',
              text: 'Gegen Hobbes: Der Naturzustand ist kein Krieg, sondern ein Zustand der Freiheit und Gleichheit, regiert durch das natürliche Gesetz (law of nature): Niemand soll einem anderen an Leben, Gesundheit, Freiheit oder Besitz schaden. Aber es fehlt ein unparteiischer Richter → Unsicherheit.' },
            { icon: 'fas fa-key', title: 'Eigentumstheorie (Arbeitstheorie)',
              text: 'Privateigentum entsteht durch Arbeit: Wer Land bearbeitet, mischt seine Arbeit (die ihm gehört) mit dem Land (das allen gehört) und macht es so zu seinem Eigentum. Bedingung: Es muss genug für andere übrig bleiben. Grundlage des modernen Eigentumsrechts.' },
            { icon: 'fas fa-balance-scale', title: 'Gewaltenteilung & Widerstandsrecht',
              text: 'Der Staat entsteht durch Gesellschaftsvertrag — aber der Souverän IST Vertragspartner (gegen Hobbes). Wenn er den Vertrag bricht (= die natürlichen Rechte verletzt), hat das Volk das Recht auf Revolution. Legislative und Exekutive müssen getrennt sein. Grundlage der US-Verfassung und der Menschenrechte.' },
          ])}
        </div>
      </div>
    </section>

    <section class="lz-content-section">
      <div class="lz-section-wrap">
        ${renderSubhead('George Berkeley (1685–1753)')}
        <h2 class="lz-h2 reveal"><em>Esse est percipi</em> — Sein ist Wahrgenommenwerden</h2>
        <p class="lz-prose reveal">
          Der irische Bischof George Berkeley radikalisierte Locke: Wenn alle Erkenntnis
          aus der Erfahrung stammt und wir nur unsere Wahrnehmungen (Ideen) kennen —
          woher wissen wir dann, dass es eine <strong>materielle Welt</strong> „hinter"
          den Wahrnehmungen gibt? Berkeleys Antwort: <strong>Gar nicht.</strong>
          Es gibt keine Materie — nur Geist und Ideen.
        </p>
        ${renderMerkboxGrid([
          { icon: 'fas fa-eye', title: 'Esse est percipi (vel percipere)',
            text: 'Sein heißt wahrgenommen werden (für Dinge) oder wahrnehmen (für Geister). Ein Tisch existiert, weil er wahrgenommen wird. Wenn niemand ihn wahrnimmt, existiert er nicht — es sei denn, GOTT nimmt ihn wahr. Gott ist der universale Beobachter, der die Welt in der Existenz hält.' },
          { icon: 'fas fa-ban', title: 'Keine Materie',
            text: 'Lockes „primäre Qualitäten" sind genauso subjektiv wie die sekundären: Auch Ausdehnung, Gestalt, Bewegung existieren nur in der Wahrnehmung. Die Annahme einer unabhängig existierenden Materie ist überflüssig und unbeweisbar — ein „abstraktes" Konzept, das keine Erfahrung hat.' },
          { icon: 'fas fa-cross', title: 'Gegen den Materialismus',
            text: 'Berkeleys eigentliches Ziel ist anti-materialistisch: Wenn Materie existierte, wäre der Atheismus möglich (die Welt erklärt sich ohne Gott). Wenn nur Geist und Ideen existieren, ist Gott notwendig — als der Geist, der die Ordnung und Beständigkeit der Ideen garantiert.' },
        ])}
        ${renderFormulaBox({
          label: 'Berkeley, Principles of Human Knowledge §3 (1710)',
          formula: '„Esse est percipi."<br>(Sein ist Wahrgenommenwerden.)',
          desc: 'Der radikalste Satz des Empirismus: Existenz IST Wahrnehmung. Was nicht wahrgenommen wird, existiert nicht — außer Gott nimmt es wahr. Idealismus als Konsequenz des Empirismus.'
        })}
      </div>
    </section>

    <section class="lz-content-section">
      <div class="lz-section-wrap">
        ${renderSubhead('David Hume (1711–1776)')}
        <h2 class="lz-h2 reveal">Die <em>radikale Skepsis</em> des Empirismus</h2>
        <p class="lz-prose reveal">
          David Hume aus Edinburgh ist der konsequenteste und radikalste Empirist —
          und zugleich einer der größten Philosophen überhaupt. Er zog die
          Konsequenzen des Empirismus so gnadenlos, dass er die gesamte
          Metaphysik erschütterte. <strong>Kant</strong> sagte: Hume habe ihn
          „aus dem dogmatischen Schlummer geweckt".
        </p>
        ${renderMerkboxGrid([
          { icon: 'fas fa-image', title: 'Impressions und Ideas',
            text: 'Alle mentalen Inhalte sind entweder Eindrücke (impressions — lebhafte, unmittelbare Sinneserfahrungen) oder Ideen (ideas — schwächere Kopien der Eindrücke im Gedächtnis/Denken). Jede echte Idee muss sich auf einen Eindruck zurückführen lassen. Wenn nicht → die Idee ist leer, sinnlos, metaphysischer Schein.' },
          { icon: 'fas fa-link', title: 'Kausalitätskritik',
            text: 'Die berühmteste Analyse Humes: Was meinen wir, wenn wir sagen „A verursacht B"? Wir beobachten (1) A geht B zeitlich voraus, (2) A und B sind räumlich benachbart, (3) A und B treten REGELMÄSSIG zusammen auf. Aber die „notwendige Verknüpfung" — dass A B ERZWINGT — sehen wir nie. Kausalität ist keine objektive Eigenschaft der Welt, sondern eine GEWOHNHEIT des Geistes (custom/habit).' },
          { icon: 'fas fa-random', title: 'Das Induktionsproblem',
            text: 'Induktion = Schluss von beobachteten Fällen auf unbeobachtete. „Die Sonne ist bisher jeden Tag aufgegangen → sie wird auch morgen aufgehen." Aber woher wissen wir das? Wir setzen voraus, dass die Zukunft der Vergangenheit GLEICHT. Aber diese Voraussetzung ist selbst nur durch Induktion gerechtfertigt — Zirkelschluss! Induktion ist rational nicht begründbar.' },
          { icon: 'fas fa-arrow-right', title: 'Sein-Sollen-Fehlschluss (Is-Ought-Gap)',
            text: '„In jedem Moralsystem fällt mir auf, dass der Autor eine Zeitlang in der gewöhnlichen Weise schlussfolgert und Gott feststellt oder Beobachtungen über menschliche Angelegenheiten anstellt; wenn dann plötzlich statt der üblichen Verbindungen "ist" und "ist nicht" nur noch "soll" und "soll nicht" erscheint." Aus Tatsachen folgen keine Normen — aus dem, was IST, folgt nicht, was sein SOLL."' },
          { icon: 'fas fa-user-slash', title: 'Bundle Theory des Selbst',
            text: 'Wenn ich nach dem „Ich" suche, finde ich nur einzelne Wahrnehmungen — Schmerz, Freude, Gedanken, Bilder. Aber kein „Ich" HINTER diesen Wahrnehmungen. Das Selbst ist kein Ding, sondern ein „Bündel" (bundle) sich ständig verändernder Eindrücke. Es gibt kein permanentes Ich — nur den Strom der Erfahrung.' },
        ])}
        ${renderFormulaBox({
          label: 'Hume, Treatise of Human Nature I, 4, 6 (1739)',
          formula: '„Wenn ich auf das Intimste in das eingehe,<br>was ich mein Selbst nenne, stoße ich immer<br>auf irgendeine einzelne Wahrnehmung —<br>von Wärme oder Kälte, Licht oder Schatten,<br>Liebe oder Hass, Schmerz oder Lust.<br>Nie kann ich mein Selbst ohne eine Wahrnehmung<br>erfassen und nie etwas anderes bemerken<br>als die Wahrnehmung."',
          desc: 'Die Bundle Theory: Das „Ich" ist kein Ding, sondern ein Bündel von Wahrnehmungen. Kein Subjekt hinter den Erfahrungen — nur die Erfahrungen selbst.'
        })}
        ${renderInfobox({
          type: 'blue', icon: 'fas fa-graduation-cap',
          title: 'Abitur-Hinweis: Humes drei Hauptargumente',
          body: 'In Klausuren werden drei Hume-Argumente besonders häufig abgefragt: (1) <strong>Kausalitätskritik:</strong> Wir sehen keine notwendige Verknüpfung — Kausalität ist Gewohnheit. (2) <strong>Is-Ought-Gap:</strong> Aus Sein folgt kein Sollen — der naturalistische Fehlschluss. (3) <strong>Induktionsproblem:</strong> Induktion ist zirkulär — wir können nicht begründen, warum die Zukunft der Vergangenheit gleichen sollte. Alle drei Argumente sind bis heute <strong>nicht widerlegt</strong> — Kant versuchte es in der KrV, Popper gab die Induktion auf und ersetzte sie durch Falsifikation.'
        })}
      </div>
    </section>

    <section class="lz-content-section">
      <div class="lz-section-wrap">
        ${renderSubhead('Vergleich: Rationalismus vs. Empirismus')}
        ${renderTable({
          headers: ['', 'Rationalismus (Descartes)', 'Empirismus (Hume)'],
          rows: [
            ['<strong>Erkenntnisquelle</strong>', 'Vernunft (ratio)', 'Erfahrung (empeiría)'],
            ['<strong>Angeborene Ideen?</strong>', 'Ja (Gott, Ich, Kausalität)', 'Nein — tabula rasa'],
            ['<strong>Methode</strong>', 'Deduktion (Mathematik-Modell)', 'Induktion (Naturwissenschaft-Modell)'],
            ['<strong>Metaphysik</strong>', 'Möglich (Substanz, Gott, Seele)', 'Unmöglich (kein Erfahrungsgehalt)'],
            ['<strong>Kausalität</strong>', 'Objektive Notwendigkeit', 'Subjektive Gewohnheit'],
            ['<strong>Gewissheit</strong>', 'Sichere Erkenntnis möglich (Cogito)', 'Nur Wahrscheinlichkeit, keine Gewissheit'],
            ['<strong>Kant sagt:</strong>', '„Dogmatischer Schlummer"', '„Hat mich aus dem Schlummer geweckt"'],
          ],
          highlight: [0, 6],
        })}
      </div>
    </section>

    <section class="lz-content-section">
      <div class="lz-section-wrap">
        ${renderSubhead('Testfragen — Abiturniveau')}
        ${renderAccordion([
          { title: '1. Erklären Sie Humes Kausalitätskritik. Warum ist sie philosophisch so bedeutsam?',
            content: '<p class="lz-prose"><strong>Humes Analyse:</strong> Was beobachten wir, wenn wir „A verursacht B" sagen? (1) <strong>Zeitliche Abfolge:</strong> A geht B voraus. (2) <strong>Räumliche Nachbarschaft:</strong> A und B sind benachbart. (3) <strong>Regelmäßige Verbindung:</strong> Immer wenn A, dann B (constant conjunction). <strong>Aber:</strong> Wir beobachten NIE die „notwendige Verknüpfung" — wir sehen nie, dass A B ERZWINGT. Die Idee der Kausalität hat keinen Eindruck (impression) als Grundlage → sie ist kein objektives Merkmal der Welt, sondern eine <strong>Gewohnheit des Geistes</strong> (custom/habit). Weil wir A und B oft zusammen gesehen haben, ERWARTEN wir B, wenn wir A sehen.<br><br><strong>Bedeutung:</strong> (1) Die gesamte <strong>Naturwissenschaft</strong> beruht auf Kausalgesetzen. Wenn Kausalität nur Gewohnheit ist, sind Naturgesetze nicht notwendig wahr, sondern nur bisher bestätigte Regelmäßigkeiten. (2) Die <strong>Metaphysik</strong> (Gottesbeweise, kosmologisches Argument) beruht auf Kausalität. Wenn Kausalität nur Gewohnheit ist, verlieren alle kausalen Gottesbeweise ihre Grundlage. (3) <strong>Kant</strong> nahm Humes Herausforderung an und versuchte zu zeigen, dass Kausalität eine <strong>Kategorie des Verstandes</strong> ist — nicht aus Erfahrung, aber Bedingung der Möglichkeit von Erfahrung.</p>' },
          { title: '2. Was ist der Sein-Sollen-Fehlschluss (Is-Ought-Gap) und warum ist er für die Ethik wichtig?',
            content: '<p class="lz-prose"><strong>Humes Beobachtung:</strong> In vielen Moralsystemen wechseln die Autoren unmerklich von <strong>beschreibenden</strong> Sätzen (ist/ist nicht) zu <strong>normativen</strong> Sätzen (soll/soll nicht) — ohne den Übergang zu begründen. Beispiel: „Menschen streben nach Glück (Sein) → also SOLLEN sie nach Glück streben (Sollen)." Aber dieser Schluss ist <strong>logisch ungültig</strong>: Aus einer Tatsache folgt kein Wert, aus einer Beschreibung keine Vorschrift.<br><br><strong>Konsequenzen für die Ethik:</strong> (1) <strong>Naturrecht</strong> (Thomas): „Der Mensch hat eine Neigung zur Selbsterhaltung → also ist Selbsterhaltung geboten." Hume: Warum? Die Neigung ist eine Tatsache, das Gebot ist eine Norm. (2) <strong>Utilitarismus</strong>: „Lust ist angenehm → also soll man Lust maximieren." Hume: Warum sollte man tun, was angenehm ist? (3) <strong>Evolutionäre Ethik</strong>: „Kooperation hat sich evolutionär durchgesetzt → also sollen wir kooperieren." Hume: Die Evolution beschreibt, sie schreibt nicht vor.<br><br><strong>Bedeutung:</strong> Humes Is-Ought-Gap ist einer der <strong>meistdiskutierten</strong> Sätze der Ethik. Er bedeutet nicht, dass Ethik unmöglich ist — sondern dass ethische Normen eine <strong>eigene Begründung</strong> brauchen, die nicht einfach aus Tatsachen „abgeleitet" werden kann. Kant wird diese Einsicht aufgreifen: Moral beruht nicht auf Empirie, sondern auf reiner praktischer Vernunft.</p>' },
          { title: '3. Vergleichen Sie Lockes und Hobbes\' Naturzustandstheorie und die daraus folgenden Staatsmodelle.',
            content: '<p class="lz-prose"><strong>Hobbes\' Naturzustand:</strong> Krieg aller gegen alle. Der Mensch ist <strong>selbstsüchtig, ängstlich, aggressiv</strong>. Ohne Staat: Chaos, Gewalt, ständige Furcht. <strong>Lösung:</strong> Alle übertragen ihre Rechte an einen absoluten Souverän (Leviathan). Kein Widerstandsrecht.<br><br><strong>Lockes Naturzustand:</strong> Relativ friedlich. Der Mensch ist <strong>vernünftig und sozial</strong>, regiert durch das natürliche Gesetz (Recht auf Leben, Freiheit, Eigentum). Problem: Es fehlt ein unparteiischer Richter → Unsicherheit und Willkür. <strong>Lösung:</strong> Gesellschaftsvertrag, der eine Regierung einsetzt — aber mit begrenzter Macht. Der Souverän IST Vertragspartner. Widerstandsrecht bei Vertragsbruch.<br><br><strong>Entscheidende Unterschiede:</strong><br>(1) <strong>Menschenbild:</strong> Hobbes: pessimistisch (homo homini lupus). Locke: moderater Optimismus (Menschen sind kooperationsfähig).<br>(2) <strong>Rechte:</strong> Hobbes: Im Naturzustand hat jeder das Recht auf alles → Chaos. Locke: Im Naturzustand gibt es natürliche Rechte (life, liberty, property) → Ordnung.<br>(3) <strong>Staat:</strong> Hobbes: absolut, unteilbar, über dem Recht. Locke: begrenzt, geteilt (Gewaltenteilung), unter dem Recht.<br>(4) <strong>Widerstand:</strong> Hobbes: verboten (→ Naturzustand). Locke: erlaubt (→ Recht auf Revolution).<br><br>Lockes Modell wurde zur Grundlage des <strong>Liberalismus</strong>, der <strong>US-Verfassung</strong> und der <strong>Menschenrechtserklärung</strong>.</p>' },
          { title: '4. Was bedeutet Berkeleys „Esse est percipi" und wie argumentiert er dafür?',
            content: '<p class="lz-prose"><strong>These:</strong> „Sein ist Wahrgenommenwerden" — ein Ding existiert nur, insofern es wahrgenommen wird. Es gibt keine materia Welt „hinter" den Wahrnehmungen — nur Geist (minds) und Ideen (ideas).<br><br><strong>Argument:</strong> (1) Locke unterschied primäre (objektive: Ausdehnung, Gestalt) und sekundäre Qualitäten (subjektive: Farbe, Geschmack). Berkeley zeigt: Auch primäre Qualitäten sind <strong>wahrnehmungsabhängig</strong>. Die Ausdehnung eines Gegenstands variiert mit der Entfernung, die Gestalt mit dem Blickwinkel. Kein Merkmal eines Gegenstands ist erfahrungsunabhängig. (2) Wir können nie einen Gegenstand „an sich" (ohne Wahrnehmung) erfahren — der Versuch, sich einen unwahrgenommenen Baum vorzustellen, scheitert: In dem Moment, wo man ihn sich vorstellt, nimmt man ihn bereits (in der Imagination) wahr. (3) Die Annahme einer „Materie" hinter den Wahrnehmungen ist daher überflüssig und unbegründet — ein metaphysisches Konstrukt ohne Erfahrungsbasis.<br><br><strong>Problem:</strong> Hört der Tisch auf zu existieren, wenn niemand hinschaut? Berkeleys Lösung: <strong>Gott</strong> nimmt alles ständig wahr — er ist der universale Beobachter, der die Beständigkeit der Welt garantiert. Ohne Gott wäre Berkeleys Idealismus absurd — mit Gott ist er ein raffinierter Anti-Materialismus.</p>' },
        ])}
      </div>
    </section>

    <section class="lz-content-section" style="padding-top:0;">
      <div class="lz-section-wrap">
        ${renderPageNav({
          prev: { label: 'Hobbes',    link: `${BASE}/themen/neuzeit/hobbes` },
          next: { label: 'Voltaire',  link: `${BASE}/themen/aufklaerung/voltaire` },
        }, BASE)}
      </div>
    </section>
    ${footerHTML(this.router)}
    `;
  }
  init() { i18n.init(); initScrollReveal(); refreshScrollReveal(); initInteractive(document); initWimTabs(document); }
  cleanup() {}
}