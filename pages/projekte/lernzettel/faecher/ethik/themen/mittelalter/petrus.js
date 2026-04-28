// pages/projekte/lernzettel/faecher/ethik/themen/mittelalter/petrus.js
// ══════════════════════════════════════════════════════════════════
// Kapitel 5.2 — Petrus Abälard (1079–1142)
// Sic et Non, Intentionalismus, Universalienstreit
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

const KAP_COLOR = '#8b4557';
const KAP_COLOR_RGB = '139, 69, 87';

export default class PetrusPage {
  constructor(router) { this.router = router; }
  render() {
    ensureComponentsCSS();
    loadComponentCSS('pages/projekte/lernzettel/styles/sub.css');
    const el = document.createElement('div');
    el.className = 'page page-petrus';
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
          <span>Petrus Abälard</span>
        </nav>
        <h1 class="lz-sub-title"><em>Petrus Abälard</em> — Dialektik &amp; Gewissen</h1>
        <p class="lz-sub-desc">
          Der brillanteste und streitbarste Denker des 12. Jahrhunderts:
          Abälard revolutionierte die scholastische Methode, begründete die
          Gesinnungsethik und bezahlte seinen Mut mit Verfolgung und Verurteilung.
        </p>
        ${renderTags(['Kapitel 5.2', '1079–1142', 'Le Pallet · Paris · Cluny', 'Sic et Non · Intentionalismus · Universalien', 'Abitur 2026'])}
      </div>
    </section>

    <section class="lz-content-section">
      <div class="lz-section-wrap">
        ${renderSubhead('Biographisches')}
        <h2 class="lz-h2 reveal">Genie, Liebhaber, <em>Ketzer</em></h2>
        <p class="lz-prose reveal">
          Petrus Abälard (auch: Abaelardus) wurde 1079 in <strong>Le Pallet</strong> (Bretagne) geboren. Er war ein intellektuelles Wunderkind, das seinen Lehrer <strong>Wilhelm von Champeaux</strong> öffentlich widerlegte und zum gefeiertsten Pariser Lehrer aufstieg. Seine tragische Liebesgeschichte mit <strong>Héloïse</strong> — Nichte des Domherrn Fulbert — endete mit Entmannung, Klosterleben und einem der ergreifendsten Briefwechsel der Weltliteratur.
        </p>
        ${renderVTimeline([
          { year: '1079', title: 'Geburt in Le Pallet', text: 'Bretagne; Sohn eines niederen Adligen; verzichtet auf Erbrecht zugunsten der Philosophie' },
          { year: 'ca. 1100', title: 'Studium in Paris', text: 'Schüler Wilhelms von Champeaux; öffentliche Widerlegung → skandalöser Ruhm' },
          { year: '1115–17', title: 'Liebesaffäre mit Héloïse', text: 'Geheime Ehe, Sohn Astralabius; Fulberts Rache: Entmannung' },
          { year: '1118', title: 'Klostereintritt', text: 'Abälard in Saint-Denis, Héloïse in Argenteuil; Briefwechsel beginnt' },
          { year: '1121', title: 'Verurteilung in Soissons', text: 'Trinitätslehre als häretisch verurteilt; muss sein Buch verbrennen' },
          { year: '1122', title: 'Sic et Non', text: 'Methodisches Hauptwerk: 158 Fragen mit widersprüchlichen Kirchenväter-Zitaten' },
          { year: '1140', title: 'Verurteilung in Sens', text: 'Bernhard von Clairvaux erwirkt Verurteilung durch Papst; 19 Sätze als häretisch verurteilt' },
          { year: '1142', title: 'Tod in Cluny', text: 'Unter dem Schutz Abt Peters des Ehrwürdigen; Héloïse wird neben ihm bestattet' },
        ])}
      </div>
    </section>

    <section class="lz-content-section">
      <div class="lz-section-wrap">
        ${renderSubhead('Sic et Non — Die scholastische Methode')}
        <h2 class="lz-h2 reveal"><em>Ja und Nein</em> — Widersprüche als Methode</h2>
        <p class="lz-prose reveal">
          Abälards methodisches Hauptwerk <em>Sic et Non</em> (Ja und Nein, ca. 1122) stellt <strong>158 theologische Fragen</strong> und ordnet zu jeder Frage Kirchenväter-Zitate, die sich <strong>widersprechen</strong>. Z.B.: „Ist der Glaube durch Vernunft zu begründen?" — Ja (Augustinus) vs. Nein (Gregor). Abälard löst die Widersprüche nicht auf, sondern lässt sie stehen und zwingt den Leser zur <strong>eigenen Urteilsbildung</strong>.
        </p>
        ${renderMerkboxGrid([
          { icon: 'fas fa-exchange-alt', title: 'Methode des Widerspruchs',
            text: 'Durch systematisches Gegenüberstellen widersprüchlicher Autoritäten zeigt Abälard: Autoritäten allein genügen nicht — man braucht Vernunft, um die Widersprüche aufzulösen. Nicht blinde Unterwerfung unter die Tradition, sondern kritische Prüfung ist der Weg zur Wahrheit.' },
          { icon: 'fas fa-question-circle', title: '„Dubitando ad inquisitionem venimus"',
            text: '„Durch das Zweifeln gelangen wir zur Untersuchung, durch die Untersuchung zur Wahrheit." Ein proto-aufklärerischer Satz — 500 Jahre vor Descartes. Das Zweifeln ist nicht Feind des Glaubens, sondern Motor der Erkenntnis.' },
          { icon: 'fas fa-book', title: 'Einfluss auf Thomas von Aquin',
            text: 'Abälards Methode wurde von Thomas von Aquin (Summa Theologiae) perfektioniert: Jeder Artikel beginnt mit Einwänden (Videtur quod non), dann Gegenargumenten (Sed contra), dann Auflösung (Respondeo). Die quaestio disputata ist die Frucht von Abälards Sic et Non.' },
        ])}

        ${renderFormulaBox({
          label: 'Abälard, Sic et Non, Prolog',
          formula: '„Dubitando enim ad inquisitionem venimus;<br>inquirendo veritatem percipimus."<br>(Durch das Zweifeln gelangen wir zur Untersuchung;<br>durch die Untersuchung erfassen wir die Wahrheit.)',
          desc: 'Abälards Programm: Zweifel → Untersuchung → Wahrheit. Kritisches Denken als Methode, nicht als Zerstörung des Glaubens.'
        })}
      </div>
    </section>

    <section class="lz-content-section">
      <div class="lz-section-wrap">
        ${renderSubhead('Intentionalismus — Ethik der Absicht')}
        <h2 class="lz-h2 reveal">Die <em>Absicht</em> bestimmt die Moral</h2>
        <p class="lz-prose reveal">
          In seiner Ethik <em>Scito te ipsum</em> (Erkenne dich selbst) vertritt Abälard eine revolutionäre These: Nicht die <strong>äußere Handlung</strong> ist moralisch relevant, sondern die <strong>innere Absicht</strong> (intentio) des Handelnden. Eine Handlung ist an sich weder gut noch böse — es kommt darauf an, mit welcher Gesinnung sie vollzogen wird.
        </p>
        ${renderMerkboxGrid([
          { icon: 'fas fa-heart', title: 'Intentio (Absicht)',
            text: 'Die Sünde liegt nicht in der Tat, nicht in der Begierde, nicht im Willen — sondern in der Zustimmung (consensus) zu dem, was man als schlecht erkennt. Wer aus Unwissenheit tötet, sündigt nicht. Wer töten will, aber scheitert, sündigt. Die innere Einstellung ist alles.' },
          { icon: 'fas fa-balance-scale', title: 'Radikale Konsequenzen',
            text: 'Die Henker Christi haben nicht gesündigt, wenn sie glaubten, recht zu handeln (sie hielten Jesus für einen Gotteslästerer). Wer guten Gewissens falsch handelt, ist schuldlos. Das war für die Kirche unerträglich — aber logisch konsequent.' },
          { icon: 'fas fa-user-shield', title: 'Gewissen (conscientia)',
            text: 'Jeder Mensch muss seinem Gewissen folgen — auch wenn es irrt. Gegen das Gewissen zu handeln ist immer Sünde, auch wenn das Gewissen falsch urteilt. Ein subjektiver Gewissensbegriff, der erst bei Kant wieder in dieser Radikalität auftaucht.' },
        ])}

        ${renderCompare({
          titleA: 'Abälard: Gesinnungsethik',
          titleB: 'Traditionelle Position: Tatethik',
          listA: [
            'Die <strong>Absicht</strong> (intentio) bestimmt den moralischen Wert',
            'Die Tat an sich ist moralisch neutral',
            'Unwissentliches Fehlverhalten ist <strong>keine Sünde</strong>',
            'Das <strong>Gewissen</strong> ist letzte Instanz',
            'Vorläufer von <strong>Kant</strong> (guter Wille)',
          ],
          listB: [
            'Die <strong>Tat</strong> selbst ist gut oder böse',
            'Bestimmte Handlungen sind <strong>intrinsisch</strong> falsch (Mord, Ehebruch)',
            'Unwissenheit entschuldigt nicht vollständig',
            'Die <strong>Kirche</strong> definiert, was Sünde ist',
            'Traditionelle Morallehre (Augustinus, Gregor)',
          ],
        })}
      </div>
    </section>

    <section class="lz-content-section">
      <div class="lz-section-wrap">
        ${renderSubhead('Der Universalienstreit')}
        <h2 class="lz-h2 reveal">Sind Allgemeinbegriffe <em>real</em>?</h2>
        <p class="lz-prose reveal">
          Der <strong>Universalienstreit</strong> war das zentrale Problem der mittelalterlichen Philosophie: Existieren Allgemeinbegriffe (Universalien wie „Mensch", „Gerechtigkeit", „Röte") als eigenständige Wirklichkeiten — oder sind sie bloße Namen (Worte, Laute)? Abälard vermittelte zwischen den Extremen:
        </p>
        ${renderTable({
          headers: ['Position', 'Vertreter', 'These', 'Problem'],
          rows: [
            ['<strong>Realismus</strong>', 'Wilhelm v. Champeaux', 'Universalien existieren <strong>real</strong> vor/in den Einzeldingen (ante rem / in re)', 'Wenn „Menschheit" real existiert, sind alle Menschen identisch?'],
            ['<strong>Nominalismus</strong>', 'Roscelin v. Compiègne', 'Universalien sind bloße <strong>Namen</strong> (nomina), nur Einzeldinge existieren', 'Wenn „Mensch" nur ein Wort ist, warum heißen verschiedene Wesen gleich?'],
            ['<strong>Konzeptualismus</strong>', '<strong>Abälard</strong>', 'Universalien sind <strong>Begriffe</strong> (conceptus) im Geist, gebildet durch Abstraktion aus Einzeldingen', 'Vermittlung: weder bloße Worte noch eigenständige Realitäten'],
          ],
          highlight: [2],
        })}
        ${renderInfobox({
          type: 'blue', icon: 'fas fa-graduation-cap',
          title: 'Abitur-Hinweis: Universalienstreit',
          body: 'Der Universalienstreit ist ein <strong>Standardthema</strong>. Abälards Position — <strong>Konzeptualismus</strong> — ist die Vermittlung: Universalien existieren nicht als eigenständige Realitäten (gegen den Realismus), aber sie sind auch nicht bloße Laute (gegen den Nominalismus). Sie sind <strong>Begriffe im Geist</strong>, die durch Abstraktion aus der Erfahrung konkreter Einzeldinge gebildet werden. Diese Position nimmt Aristoteles\' Abstraktionslehre wieder auf und weist voraus auf den modernen Begriffsrealismus.'
        })}
      </div>
    </section>

    <section class="lz-content-section">
      <div class="lz-section-wrap">
        ${renderSubhead('Testfragen — Abiturniveau')}
        ${renderAccordion([
          { title: '1. Erklären Sie Abälards Methode in Sic et Non und ihren Einfluss auf die Scholastik.',
            content: '<p class="lz-prose">In <em>Sic et Non</em> stellt Abälard 158 theologische Fragen und ordnet zu jeder pro- und contra-Zitate aus der Kirchenvätertradition. Er löst die Widersprüche <strong>bewusst nicht auf</strong> — der Leser soll selbst urteilen. Die Methode zeigt: Autoritäten allein genügen nicht, man braucht <strong>Vernunft</strong> zur Prüfung. <br><br><strong>Einfluss:</strong> Thomas von Aquin perfektionierte diese Methode in der <em>Summa Theologiae</em>: Jeder Artikel beginnt mit Einwänden (Videtur quod non), Gegenposition (Sed contra), Auflösung (Respondeo dicendum), Erwiderung auf die Einwände (Ad primum/secundum…). Die gesamte scholastische <strong>quaestio disputata</strong> ist Abälards Erbe. „Durch das Zweifeln gelangen wir zur Untersuchung; durch die Untersuchung erfassen wir die Wahrheit."</p>' },
          { title: '2. Erläutern Sie Abälards Intentionalismus und vergleichen Sie ihn mit Kants Gesinnungsethik.',
            content: '<p class="lz-prose"><strong>Abälard:</strong> Nicht die Tat, sondern die <strong>Absicht</strong> (intentio) bestimmt den moralischen Wert. Sünde = bewusste Zustimmung (consensus) zu dem, was man als falsch erkennt. Wer guten Gewissens irrt, sündigt nicht — auch die Henker Christi nicht, wenn sie ihn für schuldig hielten.<br><br><strong>Kant:</strong> „Es ist nichts in der Welt, was ohne Einschränkung für gut gehalten werden könnte, als allein ein <strong>guter Wille</strong>" (GMS). Moralischer Wert hängt nicht von Konsequenzen ab, sondern von der Gesinnung: Handle so, dass die Maxime deines Handelns allgemeines Gesetz werden könnte.<br><br><strong>Gemeinsamkeiten:</strong> (1) Innerlichkeit: Beide verlegen den moralischen Wert nach innen — auf Absicht/Gesinnung, nicht auf äußere Tat oder Konsequenz. (2) Autonomie des Gewissens: Beide betonen, dass der Handelnde selbst urteilen muss.<br><br><strong>Unterschiede:</strong> (1) Abälard: subjektiv — es kommt auf die tatsächliche Absicht <em>dieses</em> Handelnden an. Kant: universell — die Maxime muss verallgemeinerbar sein. (2) Abälard: religiöser Rahmen (Sünde, Gewissen vor Gott). Kant: säkularer Rahmen (reine Vernunft, autonomes Moralgesetz).</p>' },
          { title: '3. Stellen Sie die drei Positionen im Universalienstreit dar und erklären Sie Abälards Vermittlungsversuch.',
            content: '<p class="lz-prose"><strong>Realismus</strong> (Wilhelm v. Champeaux): Universalien existieren als <strong>eigenständige Wirklichkeiten</strong> — entweder vor den Einzeldingen (ante rem, platonisch) oder in den Einzeldingen (in re, aristotelisch). „Menschheit" existiert real und ist in jedem Einzelmenschen gegenwärtig. Problem: Dann wären alle Menschen identisch in ihrem Wesen — Individuierung wird unerklärbar.<br><br><strong>Nominalismus</strong> (Roscelin): Universalien sind bloße <strong>Namen</strong> (nomina, flatus vocis = Lautgebilde). Nur Einzeldinge existieren real. „Mensch" ist ein Wort, das wir auf verschiedene Individuen anwenden. Problem: Warum passen die gleichen Wörter auf verschiedene Dinge? Und: Die Trinität wird zum Problem — sind Vater, Sohn und Geist drei verschiedene „Einzeldinge"?<br><br><strong>Abälards Konzeptualismus:</strong> Universalien sind <strong>Begriffe im Geist</strong> (conceptus/sermones), die durch <strong>Abstraktion</strong> aus der Erfahrung konkreter Einzeldinge gebildet werden. Sie sind nicht bloße Laute (gegen Roscelin), aber auch nicht eigenständige Realitäten außerhalb des Geistes (gegen Wilhelm). Sie haben einen <strong>realen Bezug</strong>: Der Begriff „Mensch" ist eine mentale Zusammenfassung dessen, was allen Einzelmenschen <strong>gemeinsam</strong> ist (status — Zustand, Beschaffenheit). Weder rein subjektiv noch rein objektiv — eine Mittelposition, die Aristoteles\' Abstraktionslehre aufgreift und auf den modernen Konzeptualismus/Begriffsrealismus vorausweist.</p>' },
        ])}
      </div>
    </section>

    <section class="lz-content-section" style="padding-top:0;">
      <div class="lz-section-wrap">
        ${renderPageNav({
          prev: { label: 'Anselm v. Canterbury', link: `${BASE}/themen/mittelalter/anselm` },
          next: { label: 'Hildegard v. Bingen',  link: `${BASE}/themen/mittelalter/hildegard` },
        }, BASE)}
      </div>
    </section>
    ${footerHTML(this.router)}
    `;
  }
  init() { i18n.init(); initScrollReveal(); refreshScrollReveal(); initInteractive(document); }
  cleanup() {}
}