// pages/projekte/lernzettel/faecher/ethik/themen/mittelalter/anselm.js
// ══════════════════════════════════════════════════════════════════
// Kapitel 5.1 — Anselm von Canterbury (1033–1109)
// Ontologischer Gottesbeweis, Cur Deus Homo, Fides quaerens intellectum
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

const KAP_COLOR = '#8b4557';
const KAP_COLOR_RGB = '139, 69, 87';

const ANSELM_KRITIK_TABS = [
  { key: 'gaunilo',   label: 'Gaunilo (11. Jh.)' },
  { key: 'thomas',    label: 'Thomas v. Aquin' },
  { key: 'kant',      label: 'Kant (18. Jh.)' },
];

export default class AnselmPage {
  constructor(router) { this.router = router; }
  render() {
    ensureComponentsCSS();
    loadComponentCSS('pages/projekte/lernzettel/styles/sub.css');
    const el = document.createElement('div');
    el.className = 'page page-anselm';
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
          <span>Anselm von Canterbury</span>
        </nav>
        <h1 class="lz-sub-title"><em>Anselm</em> von Canterbury</h1>
        <p class="lz-sub-desc">
          „Vater der Scholastik" — Anselm formulierte den berühmtesten und
          umstrittensten Gottesbeweis der Philosophiegeschichte:
          den ontologischen Beweis, der allein aus dem <em>Begriff</em> Gottes
          auf seine Existenz schließt.
        </p>
        ${renderTags(['Kapitel 5.1', '1033–1109', 'Aosta · Bec · Canterbury', 'Ontologischer Gottesbeweis · Scholastik', 'Abitur 2026'])}
      </div>
    </section>

    <section class="lz-content-section">
      <div class="lz-section-wrap">
        ${renderSubhead('Biographisches')}
        <h2 class="lz-h2 reveal">Vom Mönch zum <em>Erzbischof</em></h2>
        <p class="lz-prose reveal">
          Anselm wurde 1033 in <strong>Aosta</strong> (Piemont, Norditalien) geboren.
          Mit 27 Jahren trat er in das normannische Kloster <strong>Bec</strong>
          (Normandie) ein, wo er Schüler Lanfrancs wurde und später Abt.
          1093 wurde er — widerstrebend — <strong>Erzbischof von Canterbury</strong>,
          das höchste geistliche Amt Englands. Er gilt als Begründer der
          <strong>Scholastik</strong> — der systematischen Verbindung von
          Glauben und philosophischer Vernunft.
        </p>
        ${renderMerkboxGrid([
          { icon: 'fas fa-book', title: 'Monologion (1076)',
            text: 'Meditation über die Vernunftgründe des Glaubens: Gottesbeweis aus den Stufen der Vollkommenheit — alles Gute setzt ein höchstes Gutes voraus. Noch in der Tradition der kosmologischen Argumente (von der Welt auf Gott schließen).' },
          { icon: 'fas fa-lightbulb', title: 'Proslogion (1077–78)',
            text: 'Das revolutionäre Werk: Der ontologische Gottesbeweis — Beweis der Existenz Gottes allein aus dem Begriff Gottes, ohne Bezug auf die Erfahrungswelt. Das „unum argumentum" (das eine Argument), nach dem Anselm lange gesucht hatte.' },
          { icon: 'fas fa-cross', title: 'Cur Deus Homo (1098)',
            text: 'Warum wurde Gott Mensch? Anselms Satisfaktionstheorie: Die Sünde ist eine unendliche Beleidigung Gottes, die der Mensch nicht gutmachen kann. Nur ein Gott-Mensch (Christus) kann die unendliche Schuld begleichen.' },
        ])}
      </div>
    </section>

    <section class="lz-content-section">
      <div class="lz-section-wrap">
        ${renderSubhead('Fides quaerens intellectum')}
        <h2 class="lz-h2 reveal">Glaube, der nach <em>Einsicht</em> sucht</h2>
        <p class="lz-prose reveal">
          Anselms Motto ist <strong>„fides quaerens intellectum"</strong> — der Glaube,
          der nach Verständnis sucht. Er glaubt nicht blindlings, aber er setzt den
          Glauben als <strong>Ausgangspunkt</strong>: „Ich glaube, um zu verstehen"
          (credo ut intelligam). Erst wer glaubt, kann die innere Vernünftigkeit
          des Geglaubten einsehen.
        </p>
        ${renderFormulaBox({
          label: 'Anselm, Proslogion, Prooemium',
          formula: '„Credo ut intelligam."<br>(Ich glaube, um zu verstehen.)',
          desc: 'Das Programm der Scholastik: Glaube und Vernunft sind keine Gegensätze. Der Glaube sucht nach rationaler Durchdringung — nicht, um den Glauben zu beweisen, sondern um das Geglaubte tiefer zu verstehen.'
        })}
        ${renderCompare({
          titleA: 'Augustinus: Crede ut intelligas', titleB: 'Anselm: Fides quaerens intellectum',
          listA: ['Glaube ist <strong>Voraussetzung</strong> für Verstehen', 'Betonung der göttlichen <strong>Erleuchtung</strong>', 'Vernunft ist <strong>Dienerin</strong> des Glaubens', 'Mystische Tendenz — Gott wird erfahren'],
          listB: ['Glaube sucht <strong>aktiv</strong> nach rationaler Einsicht', 'Betonung der <strong>logischen Argumentation</strong>', 'Vernunft ist <strong>Partnerin</strong> des Glaubens', 'Scholastische Tendenz — Gott wird bewiesen'],
        })}
      </div>
    </section>

    <section class="lz-content-section">
      <div class="lz-section-wrap">
        ${renderSubhead('Der Ontologische Gottesbeweis (Proslogion II–IV)')}
        <h2 class="lz-h2 reveal">Von der <em>Definition</em> zur <em>Existenz</em></h2>
        <p class="lz-prose reveal">
          Der ontologische Gottesbeweis ist das berühmteste Argument der Religionsphilosophie.
          Er schließt <strong>allein aus dem Begriff Gottes</strong> auf seine
          <strong>notwendige Existenz</strong> — ohne jeden Bezug auf die Erfahrung:
        </p>
        ${renderMerkboxGrid([
          { icon: 'fas fa-1', title: 'Prämisse 1: Definition',
            text: 'Gott ist „das, worüber hinaus nichts Größeres gedacht werden kann" (id quo maius cogitari non potest). Das versteht jeder — auch der Tor (insipiens), der sagt: „Es gibt keinen Gott" (Psalm 14,1). Der Begriff existiert also zumindest im Verstand.' },
          { icon: 'fas fa-2', title: 'Prämisse 2: Existenz ist größer',
            text: 'Etwas, das sowohl im Verstand ALS AUCH in der Wirklichkeit existiert, ist „größer" (vollkommener) als etwas, das nur im Verstand existiert. Ein wirklich existierender Maler ist „größer" als ein bloß gedachter Maler.' },
          { icon: 'fas fa-3', title: 'Schluss',
            text: 'Würde das, worüber hinaus nichts Größeres gedacht werden kann, NUR im Verstand existieren, dann könnte man sich etwas noch Größeres denken: nämlich dasselbe Wesen, aber wirklich existierend. Dann wäre das, worüber hinaus nichts Größeres gedacht werden kann, nicht das, worüber hinaus nichts Größeres gedacht werden kann. WIDERSPRUCH! Also existiert Gott notwendig auch in der Wirklichkeit.' },
        ])}
        ${renderFormulaBox({
          label: 'Formalisiert',
          formula: '(1) Gott = das, worüber hinaus nichts Größeres gedacht werden kann (Definition)<br>(2) Existenz in Wirklichkeit > Existenz nur im Verstand (Prämisse)<br>(3) Gott existiert nur im Verstand (Annahme zum Widerspruchsbeweis)<br>(4) Dann kann man sich etwas Größeres denken: Gott + wirkliche Existenz<br>(5) Dann ist Gott nicht das, worüber hinaus nichts Größeres gedacht werden kann (Widerspruch zu 1)<br>(6) Also existiert Gott in Wirklichkeit (aus 3–5 durch reductio ad absurdum)',
          desc: 'Ein rein logisches Argument: Von der Definition (was „Gott" bedeutet) zur Existenz (Gott muss existieren). Kein Bezug auf Erfahrung, Natur oder Offenbarung nötig.'
        })}
      </div>
    </section>

    <section class="lz-content-section">
      <div class="lz-section-wrap">
        ${renderSubhead('Kritik am ontologischen Argument')}
        <h2 class="lz-h2 reveal">Gaunilo, Thomas, Kant — <em>drei Einwände</em></h2>
        <nav class="wim-tabs" id="anselm-kritik-tabs" aria-label="Kritik am ontologischen Argument">
          ${ANSELM_KRITIK_TABS.map((t, i) => `
            <button class="wim-tab${i === 0 ? ' active' : ''}" data-wim="${t.key}">
              ${t.label}
            </button>`).join('')}
        </nav>
        <div class="wim-category" data-wim-cat="gaunilo">
          <h3 class="lz-h3">Die vollkommene Insel</h3>
          <p class="lz-prose">Der Mönch <strong>Gaunilo</strong> wandte ein: Mit derselben Logik könnte man die Existenz einer <strong>„vollkommensten Insel"</strong> beweisen: „Die Insel, worüber hinaus keine vollkommenere gedacht werden kann, muss existieren — denn eine wirklich existierende Insel ist vollkommener als eine bloß gedachte." Das Argument beweist zu viel — also beweist es nichts.</p>
          ${renderInfobox({
            type: '', icon: 'fas fa-comment-dots',
            title: 'Anselms Antwort',
            body: 'Anselm antwortete: Das Argument gilt <strong>nur</strong> für das absolut Größte — „das, worüber hinaus nichts Größeres gedacht werden kann". Eine Insel ist ein <strong>begrenztes</strong> Wesen — man kann sich immer eine noch bessere Insel vorstellen. Nur bei Gott ist die Maximierung vollendet.'
          })}
        </div>
        <div class="wim-category hidden" data-wim-cat="thomas">
          <h3 class="lz-h3">Wir kennen Gottes Wesen nicht</h3>
          <p class="lz-prose">Thomas von Aquin (13. Jh.) lehnte den ontologischen Beweis ab: Wir können nicht von der <strong>Definition</strong> Gottes auf seine <strong>Existenz</strong> schließen, weil wir Gottes Wesen nicht <strong>vollständig kennen</strong>. Aus dem, was wir unter „Gott" <strong>verstehen</strong>, folgt nicht, dass er <strong>existiert</strong> — dazu brauchen wir Erfahrung (kosmologische Beweise „a posteriori").</p>
        </div>
        <div class="wim-category hidden" data-wim-cat="kant">
          <h3 class="lz-h3">„Sein ist kein reales Prädikat"</h3>
          <p class="lz-prose">Kants berühmter Einwand (KrV B 626): <strong>„Sein ist offenbar kein reales Prädikat."</strong> Wenn ich sage „Gott existiert", füge ich dem Begriff Gottes keine neue Eigenschaft hinzu. 100 wirkliche Taler enthalten nicht mehr als 100 mögliche Taler — sie unterscheiden sich nur darin, ob sie in meiner Tasche sind oder nicht. Existenz ist keine Vollkommenheitseigenschaft, die man zum Begriff „addieren" kann.</p>
          ${renderInfobox({
            type: 'blue', icon: 'fas fa-graduation-cap',
            title: 'Abitur-Hinweis',
            body: 'Kants Einwand ist <strong>der</strong> klassische Einwand gegen den ontologischen Beweis. In Klausuren: (1) Anselms Argument korrekt darstellen, (2) Kants Kritik erläutern, (3) zeigen, dass die Debatte <strong>bis heute offen</strong> ist (Alvin Plantinga hat 1974 eine modale Version des Arguments vorgelegt, die Kants Einwand zu umgehen versucht).'
          })}
        </div>
      </div>
    </section>

    <section class="lz-content-section">
      <div class="lz-section-wrap">
        ${renderSubhead('Cur Deus Homo — Satisfaktionstheorie')}
        <h2 class="lz-h2 reveal">Warum wurde Gott <em>Mensch</em>?</h2>
        <p class="lz-prose reveal">
          In <em>Cur Deus Homo</em> (1098) stellt Anselm die Frage: Warum musste Gott
          Mensch werden, um die Menschheit zu erlösen? Konnte er nicht einfach vergeben?
          Anselms Antwort — die <strong>Satisfaktionstheorie</strong> — war epochal
          und prägte die westliche Theologie für Jahrhunderte:
        </p>
        ${renderMerkboxGrid([
          { icon: 'fas fa-balance-scale', title: 'Unendliche Beleidigung',
            text: 'Die Sünde ist eine Beleidigung Gottes. Da Gott unendlich ist, ist die Beleidigung unendlich groß. Ein endliches Wesen (Mensch) kann eine unendliche Schuld nicht begleichen — es fehlt ihm die „Währung".' },
          { icon: 'fas fa-cross', title: 'Gott-Mensch als Lösung',
            text: 'Nur ein Wesen, das zugleich Gott (unendlich) und Mensch (verantwortlich für die Schuld) ist, kann die Schuld tilgen. Christus als Gott-Mensch vereinigt beide Naturen und leistet die unendliche Genugtuung (satisfactio) durch seinen freiwilligen Tod.' },
          { icon: 'fas fa-gavel', title: 'Rechtsanalogie',
            text: 'Anselm denkt in Kategorien des feudalen Lehensrechts: Die Sünde ist wie ein Verstoß gegen die Ehre des Lehnsherrn (Gott). Der Vasall (Mensch) schuldet Genugtuung — die seine Möglichkeiten übersteigt. Nur ein „übermenschliches" Sühneopfer kann die gestörte Ordnung wiederherstellen.' },
        ])}
      </div>
    </section>

    <section class="lz-content-section">
      <div class="lz-section-wrap">
        ${renderSubhead('Testfragen — Abiturniveau')}
        ${renderAccordion([
          { title: '1. Rekonstruieren Sie den ontologischen Gottesbeweis Anselms Schritt für Schritt.',
            content: '<p class="lz-prose"><strong>Schritt 1 — Definition:</strong> Gott ist „id quo maius cogitari non potest" — das, worüber hinaus nichts Größeres gedacht werden kann. Selbst der Atheist versteht diese Definition — der Begriff existiert also zumindest <strong>im Verstand</strong> (in intellectu).<br><br><strong>Schritt 2 — Prämisse:</strong> Etwas, das sowohl im Verstand als auch <strong>in der Wirklichkeit</strong> (in re) existiert, ist „größer" als etwas, das nur im Verstand existiert. Wirkliche Existenz ist eine Vollkommenheitseigenschaft.<br><br><strong>Schritt 3 — Reductio ad absurdum:</strong> Angenommen, Gott existiert nur im Verstand. Dann könnte man sich etwas noch Größeres denken: nämlich genau dieses Wesen, aber wirklich existierend. Dann wäre „das, worüber hinaus nichts Größeres gedacht werden kann" NICHT das Größtdenkbare — <strong>Widerspruch</strong>!<br><br><strong>Schluss:</strong> Also existiert Gott notwendig auch in der Wirklichkeit.<br><br><strong>Besonderheit:</strong> Das Argument ist rein <strong>a priori</strong> — es schließt von der Definition auf die Existenz, ohne empirische Beobachtung. Es ist das einzige Argument der Philosophiegeschichte, das dies versucht.</p>' },
          { title: '2. Erläutern Sie Kants Einwand: „Sein ist kein reales Prädikat." Warum trifft er Anselm?',
            content: '<p class="lz-prose"><strong>Kants These:</strong> „Sein ist offenbar kein reales Prädikat, d.i. ein Begriff von irgendetwas, was zu dem Begriffe eines Dinges hinzukommen könnte" (KrV B 626). Wenn ich sage „Gott existiert", füge ich dem Begriff Gottes <strong>keine neue Eigenschaft</strong> hinzu — ich behaupte nur, dass der Begriff einen <strong>Gegenstand hat</strong>.<br><br><strong>Beispiel:</strong> 100 wirkliche Taler und 100 mögliche Taler haben exakt dieselben Eigenschaften (Gewicht, Material, Wert). Der einzige Unterschied: Die einen sind „da", die anderen nicht. Aber „Da-Sein" ist keine Eigenschaft wie „rund" oder „schwer".<br><br><strong>Warum trifft das Anselm?</strong> Anselms Argument setzt voraus, dass <strong>Existenz</strong> eine Vollkommenheitseigenschaft ist, die man zum Begriff „addieren" kann: Gott + Existenz = größer als Gott ohne Existenz. Wenn Kant recht hat und Existenz keine Eigenschaft ist, dann bricht Schritt 2 des Arguments zusammen: Existenz in der Wirklichkeit macht etwas nicht „größer", weil Existenz keine inhaltliche Bestimmung hinzufügt.<br><br><strong>Gegenkritik:</strong> Moderne Verteidiger Anselms (Plantinga, Malcolm) argumentieren, dass Kants Einwand <strong>kontingente</strong> Existenz trifft, nicht aber <strong>notwendige</strong> Existenz. Notwendige Existenz (= Unmöglichkeit des Nicht-Existierens) IST eine Vollkommenheit — ein Wesen, das nicht nicht-existieren kann, ist vollkommener als eines, das zufällig existiert.</p>' },
          { title: '3. Was bedeutet „fides quaerens intellectum" und welche Position vertritt Anselm im Verhältnis von Glaube und Vernunft?',
            content: '<p class="lz-prose"><strong>Wörtlich:</strong> „Glaube, der nach Einsicht sucht." Der Glaube ist <strong>Ausgangspunkt</strong>, nicht Ergebnis des Denkens. Anselm setzt den christlichen Glauben voraus und fragt dann: Kann die Vernunft <strong>nachvollziehen</strong>, warum das Geglaubte wahr ist?<br><br><strong>Drei Positionen im Mittelalter:</strong><br>(1) <strong>Fideismus:</strong> Glaube braucht keine Vernunft — „Credo quia absurdum" (Tertullian zugeschrieben). Glaube ist gerade dort am stärksten, wo er der Vernunft widerspricht.<br>(2) <strong>Rationalismus:</strong> Vernunft beweist den Glauben — der Glaube wird zum Wissen. Gefahr: Glaube verliert seinen spezifischen Charakter.<br>(3) <strong>Anselm:</strong> Vermittlung — der Glaube <strong>sucht</strong> nach Einsicht, ohne sich in Wissen aufzulösen. „Credo ut intelligam" — ich glaube, UM zu verstehen. Der Glaube ist die Voraussetzung, die Vernunft das Werkzeug, die Einsicht das Ziel. Aber die Einsicht ersetzt den Glauben nicht — sie vertieft ihn.<br><br>Anselms Position wurde für die gesamte <strong>Scholastik</strong> prägend: Thomas von Aquin wird sie weiterentwickeln (natürliche Vernunft kann einiges über Gott erkennen, aber nicht alles — das Mysterium bleibt).</p>' },
          { title: '4. Erklären Sie die Satisfaktionstheorie und diskutieren Sie ihre Stärken und Schwächen.',
            content: '<p class="lz-prose"><strong>Die Theorie:</strong> Die Sünde ist eine <strong>unendliche Beleidigung</strong> der göttlichen Ehre. Der Mensch (endlich) kann eine unendliche Schuld nicht begleichen. Nur ein Wesen, das zugleich Gott (unendlich, kann die Schuld tilgen) und Mensch (hat die Schuld auf sich genommen) ist, kann die Genugtuung (satisfactio) leisten: Christus.<br><br><strong>Stärken:</strong> (1) Rationale Erklärung: Anselm zeigt, dass die Menschwerdung Gottes <strong>vernunftnotwendig</strong> ist — nicht willkürlich, sondern logisch zwingend. (2) Vereinigt Gottes Gerechtigkeit (die Schuld muss getilgt werden) mit Gottes Barmherzigkeit (er selbst tilgt sie). (3) Gibt dem Tod Christi eine klare <strong>Funktion</strong>: Genugtuung für die gestörte kosmische Ordnung.<br><br><strong>Schwächen:</strong> (1) <strong>Feudale Kategorien:</strong> Das Modell der „verletzten Ehre" und der „Genugtuung" stammt aus dem <strong>feudalen Lehensrecht</strong> — ist es auf das Verhältnis Gott-Mensch übertragbar? Muss Gott seine Ehre „verteidigen"? (2) <strong>Juridisches Gottesverständnis:</strong> Gott erscheint als strenger Richter, der auf Kompensation besteht — wo bleibt die bedingungslose Liebe und Vergebung? (3) <strong>Alternative Modelle:</strong> Die östliche Theologie (Irenäus, Athanasius) kennt eine andere Deutung: Gott wird Mensch, damit der Mensch <strong>vergöttlicht</strong> wird (theōsis) — nicht Genugtuung, sondern Verwandlung.</p>' },
        ])}
      </div>
    </section>

    <section class="lz-content-section" style="padding-top:0;">
      <div class="lz-section-wrap">
        ${renderPageNav({
          prev: { label: 'Augustinus',     link: `${BASE}/themen/neuplatonismus-patristik/augustinus` },
          next: { label: 'Petrus Abälard',  link: `${BASE}/themen/mittelalter/petrus` },
        }, BASE)}
      </div>
    </section>
    ${footerHTML(this.router)}
    `;
  }
  init() { i18n.init(); initScrollReveal(); refreshScrollReveal(); initInteractive(document); initWimTabs(document); }
  cleanup() {}
}