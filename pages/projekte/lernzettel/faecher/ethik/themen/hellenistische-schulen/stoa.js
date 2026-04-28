// pages/projekte/lernzettel/faecher/ethik/themen/hellenistische-schulen/stoa.js
// ══════════════════════════════════════════════════════════════════
// Kapitel 3.2 — Die Stoa
// Zenon v. Kition, Seneca, Epiktet, Marc Aurel
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

const KAP_COLOR = '#2e8b8b';
const KAP_COLOR_RGB = '46, 139, 139';

const STOIKER_TABS = [
  { key: 'zenon',     label: 'Zenon v. Kition' },
  { key: 'seneca',    label: 'Seneca' },
  { key: 'epiktet',   label: 'Epiktet' },
  { key: 'marc',      label: 'Marc Aurel' },
];

export default class StoaPage {
  constructor(router) { this.router = router; }
  render() {
    ensureComponentsCSS();
    loadComponentCSS('pages/projekte/lernzettel/styles/sub.css');
    const el = document.createElement('div');
    el.className = 'page page-stoa';
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
          <span>Die Stoa</span>
        </nav>
        <h1 class="lz-sub-title">Die <em>Stoa</em> — Vernunft, Pflicht &amp; Seelenruhe</h1>
        <p class="lz-sub-desc">
          Vom Sklaven bis zum Kaiser — die Stoa war die einflussreichste
          Philosophie der antiken Welt. Ihre Ethik der inneren Freiheit, der Pflicht
          und der Naturgemäßheit wirkt bis in die Aufklärung, Kant und die moderne Psychotherapie.
        </p>
        ${renderTags(['Kapitel 3.2', 'ca. 300 v. Chr. – 180 n. Chr.', 'Athen · Rom', 'Apátheia · Logos · Pflicht · Naturgemäßes Leben', 'Abitur 2026'])}
      </div>
    </section>

    <section class="lz-content-section">
      <div class="lz-section-wrap">
        ${renderSubhead('Überblick — Drei Phasen der Stoa')}
        <h2 class="lz-h2 reveal">Vom Marktplatz Athens zum <em>Thron Roms</em></h2>
        ${renderTable({
          headers: ['Phase', 'Zeitraum', 'Hauptvertreter', 'Schwerpunkt'],
          rows: [
            ['<strong>Alte Stoa</strong>',     '300–129 v. Chr.',      'Zenon, Kleanthes, Chrysipp',           'System-Aufbau: Logik, Physik, Ethik'],
            ['<strong>Mittlere Stoa</strong>', '129–50 v. Chr.',       'Panaitios, Poseidonios',               'Anpassung an römische Kultur; Eklektizismus'],
            ['<strong>Späte / Römische Stoa</strong>', '1.–2. Jh. n. Chr.', 'Seneca, Epiktet, Marc Aurel',   'Praktische Lebensführung; Ethik im Vordergrund'],
          ],
          highlight: [2],
        })}
        ${renderInfobox({
          type: '', icon: 'fas fa-info-circle',
          title: 'Die soziale Spannweite der Stoa',
          body: 'Die Stoa ist die einzige Philosophenschule, deren bekannteste Vertreter das gesamte soziale Spektrum abdecken: <strong>Epiktet</strong> war ein freigelassener <strong>Sklave</strong>, <strong>Seneca</strong> ein steinreicher <strong>Staatsmann</strong>, <strong>Marc Aurel</strong> der <strong>römische Kaiser</strong>. Das ist kein Zufall: Die stoische Ethik behauptet, dass Tugend — und damit Glück — <strong>unabhängig von äußeren Umständen</strong> möglich ist.'
        })}
      </div>
    </section>

    <section class="lz-content-section">
      <div class="lz-section-wrap">
        ${renderSubhead('Physik — Der Logos als Weltvernunft')}
        <h2 class="lz-h2 reveal">Ein <em>durchgöttlichter</em> Kosmos</h2>
        <p class="lz-prose reveal">
          Die stoische Physik ist ein <strong>materialistischer Pantheismus</strong>:
          Alles, was existiert, ist körperlich — auch Gott, auch die Seele. Aber die
          Materie ist nicht tot, sondern durchdrungen von einem göttlichen
          <strong>Logos</strong> (Weltvernunft), der alles ordnet und lenkt.
        </p>
        ${renderMerkboxGrid([
          { icon: 'fas fa-fire', title: 'Pneûma (Hauch/Geist)',
            text: 'Die gesamte Welt ist durchdrungen von einem feurig-luftartigen Hauch (pneûma), der zugleich Gott, Vernunft und Naturgesetz ist. Das Pneûma hält die Welt zusammen wie die Seele den Körper. Materialismus + Pantheismus: Gott ist nicht jenseits der Welt, sondern in ihr — als ihr immanentes Ordnungsprinzip.' },
          { icon: 'fas fa-scroll', title: 'Lógos spermatikós (Same der Vernunft)',
            text: 'Die Weltvernunft enthält die „Samenlogoi" (lógoi spermatikoi) — die rationalen Keime aller Dinge. Jeder Baum, jedes Tier, jeder Mensch entfaltet sich nach seinem inneren Logos. Die Natur ist zweckmäßig geordnet — Teleologie wie bei Aristoteles, aber ohne einen transzendenten Gott.' },
          { icon: 'fas fa-link', title: 'Heimarménē (Schicksal / Determinismus)',
            text: 'Alles geschieht aus Notwendigkeit — die Kausalkette ist lückenlos. Es gibt keinen Zufall, keine Willkür. Aber das ist kein blindes Fatum: Das Schicksal IST der Logos — vernünftig, gut, zweckvoll. Was geschieht, geschieht aus gutem Grund, auch wenn wir ihn nicht immer erkennen.' },
          { icon: 'fas fa-sync-alt', title: 'Ekpýrōsis (Weltbrand)',
            text: 'Am Ende jedes Weltzyklus verbrennt der Kosmos im Urfeuer (ekpýrōsis) — und entsteht dann identisch neu (palingenesía). Ewige Wiederkehr des Gleichen: Jedes Ereignis, jeder Mensch, jedes Gespräch wird sich exakt wiederholen. (Nietzsche wird diesen Gedanken aufgreifen.)' },
        ])}
        ${renderFormulaBox({
          label: 'Kleanthes, Zeushymnus (Fragment 537)',
          formula: '„Führe mich, Zeus, und du, Schicksal,<br>wohin ihr mich bestimmt habt.<br>Ich will folgen ohne Zögern; und wollte ich nicht,<br>so müsste ich doch, als Schlechter, folgen."',
          desc: 'Amor fati — Liebe zum Schicksal: Der Weise stimmt dem Logos freiwillig zu. Der Tor wird gezwungen. Beide erreichen dasselbe Ziel — aber nur der Weise ist dabei glücklich.'
        })}
      </div>
    </section>

    <section class="lz-content-section">
      <div class="lz-section-wrap">
        ${renderSubhead('Ethik — Naturgemäß leben')}
        <h2 class="lz-h2 reveal"><em>Homologouménōs tēi phýsei zēn</em> — In Übereinstimmung mit der Natur leben</h2>
        ${renderMerkboxGrid([
          { icon: 'fas fa-gem', title: 'Tugend ist das einzige Gut',
            text: 'Nur die Tugend (aretḗ) ist ein wahres Gut. Nur das Laster ist ein wahres Übel. Alles andere — Gesundheit, Reichtum, Leben, Tod, Ehre, Schande — ist ADIAPHORON (gleichgültig). Nicht gleichgültig im Sinn von „egal", sondern: Es hat keinen Einfluss auf das Glück des Weisen.' },
          { icon: 'fas fa-ice-cream', title: 'Apátheia (Freiheit von Leidenschaften)',
            text: 'Die Affekte (páthē) — Lust, Unlust, Begierde, Furcht — sind fehlerhafte Urteile: Ich leide, weil ich fälschlich glaube, der Verlust sei ein Übel. Der Weise korrigiert diese Urteile und erreicht Apátheia — nicht Gefühllosigkeit, sondern Freiheit von irrationalen, überwältigenden Emotionen.' },
          { icon: 'fas fa-hands-helping', title: 'Oikeíōsis (Zueignung)',
            text: 'Der Mensch hat eine natürliche Neigung zur Selbsterhaltung (oikeíōsis), die sich stufenweise erweitert: auf die Familie, die Gemeinde, das Vaterland, die gesamte Menschheit. Die Stoiker sind die ersten konsequenten Kosmopoliten: Alle Menschen sind Bürger einer Weltgemeinschaft.' },
          { icon: 'fas fa-user-shield', title: 'Kathḗkon (Pflicht / Gebührendes)',
            text: 'Die Stoa entwickelt erstmals eine systematische Pflichtenlehre: Pflichten gegenüber sich selbst (Selbstsorge), gegenüber anderen (Gerechtigkeit, Wohltätigkeit) und gegenüber der Gemeinschaft (politisches Engagement). Die Pflicht ergibt sich aus der Vernunftnatur des Menschen — Vorläufer von Kants Pflichtethik.' },
        ])}
        ${renderTable({
          headers: ['Kategorie', 'Gut (agathón)', 'Gleichgültig (adiáphoron)', 'Übel (kakón)'],
          rows: [
            ['<strong>Beispiel</strong>', 'Tugend: Weisheit, Gerechtigkeit, Tapferkeit, Besonnenheit', 'Gesundheit, Reichtum, Ruhm, Leben, Tod, Armut, Krankheit', 'Laster: Dummheit, Ungerechtigkeit, Feigheit, Zuchtlosigkeit'],
            ['<strong>Wirkung auf Glück</strong>', 'Allein hinreichend für Glück', 'Kein Einfluss auf Glück', 'Allein hinreichend für Unglück'],
            ['<strong>Bewertung</strong>', 'Immer zu erstreben', '„Vorzuziehen" (proēgménon) oder „Zurückzusetzen" (apoproēgménon), aber nicht entscheidend', 'Immer zu meiden'],
          ],
          highlight: [0],
        })}
        ${renderInfobox({
          type: 'blue', icon: 'fas fa-graduation-cap',
          title: 'Abitur-Kernbegriff: Adiaphora',
          body: 'Die stoische Lehre von den Adiaphora (den „gleichgültigen Dingen") ist ein <strong>Standardthema</strong> in Ethikklausuren. Merke die <strong>Differenzierung</strong>: Gesundheit ist „vorzuziehen" (proēgménon), Krankheit „zurückzusetzen" (apoproēgménon) — aber <strong>keines von beiden beeinflusst das Glück</strong> des Weisen. Ein kranker Weiser ist glücklich, ein gesunder Tor ist unglücklich. Das klingt kontraintuitiv — genau deshalb wird es in Prüfungen abgefragt.'
        })}
      </div>
    </section>

    <section class="lz-content-section">
      <div class="lz-section-wrap">
        ${renderSubhead('Die großen Stoiker')}
        <nav class="wim-tabs" id="stoiker-tabs" aria-label="Stoiker">
          ${STOIKER_TABS.map((t, i) => `
            <button class="wim-tab${i === 0 ? ' active' : ''}" data-wim="${t.key}">
              ${t.label}
            </button>`).join('')}
        </nav>
        <div class="wim-category" data-wim-cat="zenon">
          <h3 class="lz-h3">Zenon von Kition (ca. 333–262 v. Chr.) — Der Gründer</h3>
          <p class="lz-prose">Zenon kam als Kaufmann aus Zypern nach Athen und wurde durch die Lektüre von Xenophons <em>Memorabilien</em> (über Sokrates) zum Philosophen. Er studierte bei Kyniker Krates und gründete um 300 v. Chr. seine eigene Schule in der Stoà Poikílē.</p>
          ${renderMerkboxGrid([
            { icon: 'fas fa-columns', title: 'Dreiteilung der Philosophie',
              text: 'Zenon gliederte die Philosophie in drei Teile: Logik (Werkzeug), Physik (Grundlage), Ethik (Ziel). Berühmtes Bild: Philosophie = Garten — Logik ist die Mauer, Physik der Boden, Ethik die Frucht. Oder: Philosophie = Ei — Logik die Schale, Physik das Eiweiß, Ethik der Dotter.' },
            { icon: 'fas fa-globe', title: 'Kosmopolitismus',
              text: 'In seiner Politeia entwarf Zenon das Ideal einer Weltgemeinschaft ohne Staaten, Grenzen und Ungleichheit — alle Menschen als Bürger einer einzigen Polis unter dem gemeinsamen Gesetz der Vernunft. Radikal utopisch und enorm einflussreich.' },
          ])}
        </div>
        <div class="wim-category hidden" data-wim-cat="seneca">
          <h3 class="lz-h3">Seneca (4 v. Chr. – 65 n. Chr.) — Der Staatsmann</h3>
          <p class="lz-prose">Lucius Annaeus Seneca war Erzieher und Berater des Kaisers Nero, steinreich, politisch mächtig — und zugleich stoischer Moralist. Dieser Widerspruch wurde ihm schon zu Lebzeiten vorgeworfen. Er schrieb brillante philosophische Briefe und Dialoge und beging schließlich auf Neros Befehl Selbstmord.</p>
          ${renderFormulaBox({
            label: 'Seneca, Epistulae morales 1, 1',
            formula: '„Vindica te tibi." — „Nimm dich dir selbst zurück."',
            desc: 'Selbstbesitz als stoisches Ideal: Die meiste Zeit „gehören" wir anderen — gesellschaftlichen Pflichten, Ambitionen, Zerstreuungen. Der Weise nimmt sich die Freiheit, über seine eigene Zeit zu verfügen.'
          })}
        </div>
        <div class="wim-category hidden" data-wim-cat="epiktet">
          <h3 class="lz-h3">Epiktet (ca. 50–135 n. Chr.) — Der Sklave</h3>
          <p class="lz-prose">Epiktet wurde als Sklave in Hierapolis (Phrygien) geboren, kam nach Rom, wo er Sklave des Freigelassenen Epaphroditos war, und studierte beim Stoiker Musonius Rufus. Nach seiner Freilassung lehrte er in Nikopolis (Griechenland). Er schrieb nichts — seine Lehren wurden von seinem Schüler Arrian in den <em>Diatribai</em> und dem <em>Encheiridion</em> (Handbüchlein) aufgezeichnet.</p>
          ${renderFormulaBox({
            label: 'Epiktet, Encheiridion 1, 1',
            formula: '„Von den Dingen stehen einige in unserer Gewalt (eph\' hēmîn),<br>andere nicht. In unserer Gewalt stehen: Urteil, Antrieb, Begierde,<br>Abneigung — kurz: alles, was unser eigenes Werk ist.<br>Nicht in unserer Gewalt stehen: Körper, Besitz, Ansehen, Ämter."',
            desc: 'Die Dichotomie der Kontrolle — Grundprinzip der stoischen Ethik und Basis der modernen kognitiven Verhaltenstherapie (CBT/REBT).'
          })}
        </div>
        <div class="wim-category hidden" data-wim-cat="marc">
          <h3 class="lz-h3">Marc Aurel (121–180 n. Chr.) — Der Kaiser</h3>
          <p class="lz-prose">Kaiser Marcus Aurelius Antoninus regierte das Römische Reich von 161 bis 180 n. Chr. — in einer Zeit ständiger Kriege, Seuchen und Krisen. Seine <em>Selbstbetrachtungen</em> (Tà eis heautón) schrieb er als privates philosophisches Tagebuch im Feldlager — nie zur Veröffentlichung bestimmt. Es ist eines der aufrichtigsten Dokumente der antiken Philosophie.</p>
          ${renderFormulaBox({
            label: 'Marc Aurel, Selbstbetrachtungen IV, 3',
            formula: '„Die Menschen suchen Zufluchtsorte — auf dem Lande, am Meer,<br>in den Bergen. Aber es ist dir jederzeit möglich,<br>dich in dich selbst zurückzuziehen."',
            desc: 'Die „innere Burg" — der Rückzugsort des Weisen ist nicht ein physischer Ort, sondern die eigene Vernunft. Überall und jederzeit verfügbar.'
          })}
        </div>
      </div>
    </section>

    <section class="lz-content-section">
      <div class="lz-section-wrap">
        ${renderSubhead('Vergleich: Stoa vs. Epikureismus')}
        ${renderCompare({
          titleA: 'Stoa', titleB: 'Epikureismus',
          listA: [
            '<strong>Determinismus:</strong> Alles geschieht notwendig nach dem Logos',
            '<strong>Pantheismus:</strong> Gott = Weltvernunft, immanent in der Natur',
            '<strong>Engagement:</strong> Der Weise lebt aktiv in der Polis',
            '<strong>Tugend</strong> ist das einzige Gut',
            '<strong>Apátheia:</strong> Freiheit von Leidenschaften',
            '<strong>Kosmopolitismus:</strong> Alle Menschen sind Weltbürger',
            '<strong>Pflichtethik</strong> — Vorläufer Kants',
          ],
          listB: [
            '<strong>Clinamen:</strong> Zufällige Abweichung → Freiheit möglich',
            '<strong>Deismus:</strong> Götter existieren, greifen aber nicht ein',
            '<strong>Rückzug:</strong> „Lebe im Verborgenen" (láthe biṓsas)',
            '<strong>Lust</strong> (= Schmerzfreiheit) ist das höchste Gut',
            '<strong>Ataraxía:</strong> Seelenruhe durch Bedürfnisreduktion',
            '<strong>Privatismus:</strong> Kleiner Freundeskreis statt Gesellschaft',
            '<strong>Klugheitsethik</strong> — Vorläufer des Utilitarismus',
          ],
        })}
      </div>
    </section>

    <section class="lz-content-section">
      <div class="lz-section-wrap">
        ${renderSubhead('Testfragen — Abiturniveau')}
        ${renderAccordion([
          { title: '1. Erklären Sie die stoische Lehre von den Adiaphora und diskutieren Sie das Problem der Gegenintutivität.',
            content: '<p class="lz-prose"><strong>Die Lehre:</strong> Nur die Tugend ist ein wahres Gut, nur das Laster ein wahres Übel. Alles andere — Gesundheit, Krankheit, Reichtum, Armut, Leben, Tod — ist <strong>adiáphoron</strong> (gleichgültig). Die Stoiker unterscheiden innerhalb der Adiaphora: proēgména (Vorzuziehendes, z.B. Gesundheit) und apoproēgména (Zurückzusetzendes, z.B. Krankheit) — aber keines davon beeinflusst das Glück des Weisen.<br><br><strong>Problem der Gegenintutivität:</strong> Die Behauptung, ein gefolteter Weiser sei glücklich, widerspricht dem Alltagsverständnis von Glück fundamental. <strong>Aristoteles</strong> hatte argumentiert: Eudaimonie braucht ein Mindestmaß an äußeren Gütern — wer auf der Folterbank liegt, kann nicht glückselig sein. Die Stoa antwortet: Glück ist ein <strong>innerer Zustand</strong> — die Übereinstimmung des Willens mit dem Logos. Äußere Umstände können diesen Zustand nicht zerstören, wenn der Weise die richtige Haltung einnimmt.<br><br><strong>Bewertung:</strong> Die stoische Position ist <strong>heroisch</strong>, aber möglicherweise <strong>unrealistisch</strong>. Selbst Epiktet räumt ein, dass der vollkommene Weise (sophós) ein Ideal ist, das niemand vollständig erreicht — ein regulatives Ideal, keine Beschreibung realer Menschen.</p>' },
          { title: '2. Vergleichen Sie Epiktets „Dichotomie der Kontrolle" mit modernen therapeutischen Ansätzen.',
            content: '<p class="lz-prose"><strong>Epiktets Prinzip:</strong> „Von den Dingen stehen einige in unserer Gewalt, andere nicht." In unserer Gewalt: Urteile, Wertungen, Reaktionen. Nicht in unserer Gewalt: äußere Ereignisse, Verhalten anderer, Körper, Besitz. Glück = sich nur um das Kontrollierbare kümmern.<br><br><strong>Kognitive Verhaltenstherapie (CBT/KVT):</strong> Aaron Beck und Albert Ellis (REBT) gründeten ihre Therapieformen explizit auf stoische Grundgedanken: Nicht die Ereignisse selbst verursachen Leiden, sondern unsere <strong>Bewertungen</strong> der Ereignisse. Therapie = Umstrukturierung irrationaler Überzeugungen (→ Epiktets „falsche Urteile").<br><br><strong>Parallelen:</strong> (1) ABC-Modell (Ellis): A = Activating event, B = Belief (Bewertung), C = Consequence (Emotion). Nicht A verursacht C, sondern B. → Identisch mit Epiktets These: „Nicht die Dinge beunruhigen uns, sondern unsere Vorstellungen davon." (2) Akzeptanz dessen, was nicht änderbar ist (→ „Gelassenheitsgebet": die Gelassenheit, Dinge hinzunehmen, die ich nicht ändern kann; den Mut, Dinge zu ändern, die ich ändern kann; die Weisheit, das eine vom anderen zu unterscheiden).<br><br><strong>Unterschied:</strong> Die Stoa verlangt <strong>vollständige</strong> Gleichgültigkeit gegenüber dem Unkontrollierbaren. Die moderne Therapie ist moderater: Sie zielt auf <strong>angemessene</strong> emotionale Reaktionen, nicht auf Affektfreiheit.</p>' },
          { title: '3. Ist der stoische Determinismus mit Verantwortung vereinbar? Diskutieren Sie das Kompatibilitätsproblem.',
            content: '<p class="lz-prose"><strong>Das Problem:</strong> Die Stoa behauptet: (1) Alles geschieht nach dem Schicksal (heimarménē) — der Logos bestimmt jeden Weltverlauf. (2) Der Mensch ist moralisch verantwortlich für seine Handlungen. Wie passt das zusammen? Wenn alles vorherbestimmt ist, kann niemand anders handeln, als er handelt — und wo keine Alternative, da keine Verantwortung.<br><br><strong>Chrysipps Lösung (Kompatibilismus):</strong> Chrysipp unterschied zwischen <strong>äußeren Ursachen</strong> (prokatarktikà aítia — Auslöser) und <strong>inneren Ursachen</strong> (synektikà aítia — eigentliche, mitwirkende Ursachen). Beispiel: Ein Stein rollt den Hang hinunter. Äußere Ursache: der Anstoß. Innere Ursache: die runde Form des Steins. Ebenso beim Menschen: Äußere Eindrücke mögen mich treffen, aber wie ich darauf reagiere, hängt von meinem <strong>Charakter</strong> ab — und der ist „mein eigenes Werk".<br><br><strong>Kritik:</strong> (1) <strong>Epikur:</strong> Wenn der Charakter selbst determiniert ist, löst Chrysipp das Problem nicht — er verschiebt es nur. Daher Epikurs Clinamen: echte Zufälligkeit als Basis der Freiheit. (2) <strong>Moderne Debatte:</strong> Die Frage „Determinismus + Verantwortung?" wird heute als <strong>Kompatibilismus vs. Inkompatibilismus</strong> diskutiert. Chrysipp gilt als erster Kompatibilist — seine Argumente werden von Hume, Frankfurt und Dennett weiterentwickelt.</p>' },
          { title: '4. Vergleichen Sie die stoische Pflichtethik mit Kants Pflichtethik.',
            content: '<p class="lz-prose"><strong>Gemeinsamkeiten:</strong> (1) Beide bestimmen die <strong>Pflicht</strong> (kathḗkon / Pflicht) als zentralen ethischen Begriff. (2) Beide leiten die Pflicht aus der <strong>Vernunftnatur</strong> des Menschen ab. (3) Beide betonen, dass moralisches Handeln <strong>unabhängig von Neigungen und Konsequenzen</strong> gelten soll. (4) Beide vertreten <strong>Universalismus</strong>: Moralische Normen gelten für alle vernünftigen Wesen.<br><br><strong>Unterschiede:</strong> (1) <strong>Grundlage:</strong> Die Stoa leitet die Pflicht aus dem <strong>kosmischen Logos</strong> ab — die Natur selbst schreibt vor, was zu tun ist. Kant leitet sie aus der <strong>reinen Vernunft</strong> ab — der kategorische Imperativ braucht keinen Bezug auf die Natur. (2) <strong>Motivation:</strong> Für die Stoa ist der Weise <strong>affektfrei</strong> (apátheia) — er handelt aus reiner Einsicht. Für Kant ist die <strong>Achtung vor dem Gesetz</strong> das einzige moralisch relevante Gefühl — er schließt Emotionen nicht aus, aber nur dieses eine zählt. (3) <strong>Konsequenzen:</strong> Die Stoa berücksichtigt die Konsequenzen (kathḗkon = „das Angemessene" in der konkreten Situation). Kant lehnt konsequentialistische Überlegungen strikt ab — nur die Maxime zählt. (4) <strong>Kosmologie:</strong> Die stoische Ethik ist <strong>eingebettet</strong> in eine Kosmologie (Logos, Determinismus, Naturordnung). Kants Ethik ist <strong>autonom</strong> — sie steht für sich, unabhängig von Metaphysik.</p>' },
        ])}
      </div>
    </section>

    <section class="lz-content-section" style="padding-top:0;">
      <div class="lz-section-wrap">
        ${renderPageNav({
          prev: { label: 'Epikur',        link: `${BASE}/themen/hellenistische-schulen/epikur` },
          next: { label: 'Skeptizismus',   link: `${BASE}/themen/hellenistische-schulen/skeptizismus` },
        }, BASE)}
      </div>
    </section>
    ${footerHTML(this.router)}
    `;
  }
  init() { i18n.init(); initScrollReveal(); refreshScrollReveal(); initInteractive(document); initWimTabs(document); }
  cleanup() {}
}