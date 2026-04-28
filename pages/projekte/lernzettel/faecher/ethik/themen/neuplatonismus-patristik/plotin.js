// pages/projekte/lernzettel/faecher/ethik/themen/neuplatonismus-patristik/plotin.js
// ══════════════════════════════════════════════════════════════════
// Kapitel 4.1 — Plotin (um 204–270 n. Chr.)
// Das Eine, Nous, Weltseele, Emanation, Henosis
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

const KAP_COLOR = '#a68a5b';
const KAP_COLOR_RGB = '166, 138, 91';

export default class PlotinPage {
  constructor(router) { this.router = router; }
  render() {
    ensureComponentsCSS();
    loadComponentCSS('pages/projekte/lernzettel/styles/sub.css');
    const el = document.createElement('div');
    el.className = 'page page-plotin';
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
          <span>Plotin</span>
        </nav>
        <h1 class="lz-sub-title"><em>Plotin</em> — Das Eine und die Emanation</h1>
        <p class="lz-sub-desc">
          Der letzte große Philosoph der Antike und Begründer des Neuplatonismus:
          Plotin entwarf ein grandioses metaphysisches System, in dem alles Seiende
          aus einem einzigen, unsagbaren Urgrund — dem Einen — hervorströmt.
        </p>
        ${renderTags(['Kapitel 4.1', 'ca. 204–270 n. Chr.', 'Lykopolis · Rom', 'Das Eine · Emanation · Henosis', 'Abitur 2026'])}
      </div>
    </section>

    <section class="lz-content-section">
      <div class="lz-section-wrap">
        ${renderSubhead('Biographisches')}
        <h2 class="lz-h2 reveal">Ein Leben für die <em>geistige Schau</em></h2>
        <p class="lz-prose reveal">
          Plotin wurde um 204 n.&nbsp;Chr. in Lykopolis (Ägypten) geboren. Mit 28 Jahren begann er sein Philosophiestudium in Alexandria bei <strong>Ammonios Sakkas</strong>. Um die Weisheit des Ostens kennenzulernen, schloss sich Plotin dem Feldzug Kaiser Gordians III. gegen Persien an (243), der jedoch scheiterte. 244 ließ er sich in <strong>Rom</strong> nieder und gründete eine philosophische Schule. Sein Schüler <strong>Porphyrios</strong> ordnete die 54 Schriften in sechs Gruppen — die <em>Enneaden</em>.
        </p>
        ${renderVTimeline([
          { year: 'ca. 204', title: 'Geburt in Lykopolis (Ägypten)', text: 'Über seine Jugend ist fast nichts bekannt — Plotin sprach nicht gern über seinen Körper' },
          { year: '232', title: 'Studium bei Ammonios Sakkas', text: '11 Jahre in Alexandria; Synthese von Platon, Aristoteles und Mystik' },
          { year: '244–270', title: 'Philosophische Schule in Rom', text: 'Lehrte in Senatorenkreisen; Kaiser Gallienus war Bewunderer' },
          { year: '270', title: 'Tod', text: 'Letzte Worte: „Versuche, das Göttliche in dir zum Göttlichen im All zurückzuführen."' },
        ])}
      </div>
    </section>

    <section class="lz-content-section">
      <div class="lz-section-wrap">
        ${renderSubhead('Die drei Hypostasen')}
        <h2 class="lz-h2 reveal">Vom <em>Einen</em> zur <em>Materie</em></h2>
        <p class="lz-prose reveal">
          Plotins Metaphysik beschreibt die gesamte Wirklichkeit als einen <strong>stufenweisen Hervorgang</strong> (Emanation) aus einem einzigen Urgrund — dem <strong>Einen</strong> (tò hén). Die Wirklichkeit besteht aus drei Grundstufen (Hypostasen):
        </p>
        ${renderTable({
          headers: ['Hypostase', 'Griechisch', 'Beschreibung', 'Analogie'],
          rows: [
            ['<strong>1. Das Eine</strong>', 'Tò Hén', 'Absolut einfach, jenseits aller Bestimmungen, jenseits des Seins. Unsagbar, undenkbar, unerschöpfliche Quelle.', 'Die Sonne — Quelle des Lichts'],
            ['<strong>2. Der Geist</strong>', 'Noûs', 'Erste Emanation: enthält die platonischen Ideen. Denken und Gedachtes sind eins.', 'Licht — strukturiert, erkennbar'],
            ['<strong>3. Die Weltseele</strong>', 'Psychḗ', 'Zweite Emanation: vermittelt zwischen Geist und Materie. Erzeugt die Zeit, individuiert sich in Einzelseelen.', 'Wärme — Wirkung auf Materie'],
          ],
          highlight: [0],
        })}
        ${renderMerkboxGrid([
          { icon: 'fas fa-sun', title: 'Das Eine (Tò Hén)',
            text: 'Jenseits aller Bestimmungen: nicht „seiend" (Sein ist schon Bestimmung), nicht „gut" (setzt Bezug voraus), nicht „denkend" (Denken erfordert Zweiheit). Negative Theologie: Wir können nur sagen, was es NICHT ist. Es ist der unerschöpfliche Quellgrund, der aus innerer Überfülle alles Seiende „überströmt".' },
          { icon: 'fas fa-brain', title: 'Der Nous (Geist)',
            text: 'Die Gesamtheit der platonischen Ideen als lebendige, denkende Einheit. Im Nous fallen Denkendes und Gedachtes zusammen: Er denkt die Ideen und IST die Ideen. Ewige Gegenwart, keine Zeit, vollkommene Selbsterkenntnis.' },
          { icon: 'fas fa-globe', title: 'Die Weltseele (Psychḗ)',
            text: 'Vermittlerin: blickt nach oben zum Nous (empfängt Ideen) und nach unten zur Materie (formt sie). Erzeugt die Zeit als „bewegtes Bild der Ewigkeit" (Platon). Unsere individuelle Seele ist ein Teil der Weltseele.' },
          { icon: 'fas fa-moon', title: 'Materie (Hýlē)',
            text: 'Am Ende der Emanation: fast reines Nicht-Sein. Nicht böse im aktiven Sinn, sondern Mangel an Gutem (privatio boni) — wie Dunkelheit Abwesenheit von Licht ist. Augustinus wird diesen Gedanken übernehmen.' },
        ])}
        ${renderFormulaBox({
          label: 'Plotin, Enneade V, 2, 1',
          formula: '„Das Eine ist alle Dinge und keines von ihnen:<br>Anfang aller Dinge — nicht alle Dinge,<br>sondern alle Dinge laufen dorthin zurück."',
          desc: 'Das Eine ist nicht die Summe aller Dinge, sondern ihr transzendenter Quellgrund. Próodos (Hervorgang) und Epistrophḗ (Rückkehr).'
        })}
      </div>
    </section>

    <section class="lz-content-section">
      <div class="lz-section-wrap">
        ${renderSubhead('Emanation — Hervorgang und Rückkehr')}
        <h2 class="lz-h2 reveal">Das <em>Lichtmodell</em></h2>
        <p class="lz-prose reveal">
          Die Emanation ist <strong>keine Schöpfung</strong> im biblischen Sinn: Das Eine „entscheidet" sich nicht. Es „strahlt" notwendig und ewig aus — wie die Sonne notwendig Licht ausstrahlt, ohne sich zu vermindern. Die Emanation ist zeitlos.
        </p>
        ${renderMerkboxGrid([
          { icon: 'fas fa-arrow-down', title: 'Próodos (Hervorgang)',
            text: 'Das Eine → Nous → Weltseele → Materie. Je weiter vom Einen entfernt, desto mehr Vielheit, desto weniger Vollkommenheit. Notwendiger, ewiger Prozess.' },
          { icon: 'fas fa-arrow-up', title: 'Epistrophḗ (Rückkehr)',
            text: 'Alles strebt zurück zum Einen: Die Sehnsucht (éros) nach dem Einen ist die tiefste Triebkraft — von der unbewussten Sehnsucht der Pflanze bis zur bewussten Kontemplation des Philosophen.' },
        ])}
        ${renderCompare({
          titleA: 'Plotin: Emanation',
          titleB: 'Christentum: Schöpfung',
          listA: [
            'Notwendig — kein Willensakt',
            'Ewig — kein Anfang in der Zeit',
            'Welt wesensgleich mit dem Einen (abgeschwächt)',
            'Das Eine ist unpersönlich',
            'Materie = Abwesenheit des Guten',
          ],
          listB: [
            'Frei — Gottes Willensentscheidung',
            'Hat einen Anfang (Genesis 1,1)',
            'Welt wesensverschieden von Gott',
            'Gott ist Person (denkend, wollend)',
            'Materie von Gott geschaffen und „gut"',
          ],
        })}
      </div>
    </section>

    <section class="lz-content-section">
      <div class="lz-section-wrap">
        ${renderSubhead('Hénōsis — Die mystische Vereinigung')}
        <h2 class="lz-h2 reveal">Rückkehr zum <em>Einen</em></h2>
        <p class="lz-prose reveal">
          Das Ziel der plotinischen Philosophie ist die <strong>Hénōsis</strong> — die Rückkehr der individuellen Seele zum Einen in einem stufenweisen Aufstieg:
        </p>
        ${renderMerkboxGrid([
          { icon: 'fas fa-shower', title: '1. Reinigung (Kátharsis)',
            text: 'Lösung von den Bindungen an Körper und Sinnenwelt. Askese, Tugendübung, Abwendung von äußeren Gütern — um den Blick nach innen freizumachen.' },
          { icon: 'fas fa-brain', title: '2. Kontemplation (Theoría)',
            text: 'Die Seele wendet sich dem Nous zu — sie denkt die Ideen, schaut die geistige Welt. Erkenntnis: „Mein wahres Selbst ist nicht der Körper, sondern der Geist."' },
          { icon: 'fas fa-sun', title: '3. Vereinigung (Hénōsis)',
            text: 'Die Seele überschreitet auch den Nous und berührt das Eine — Ékstasis (Heraustreten aus sich selbst). Subjekt und Objekt verschwinden. Nicht Wissen, nicht Schauen — absolute Einheit. Plotin erlebte dies viermal.' },
        ])}
        ${renderFormulaBox({
          label: 'Plotin, Enneade VI, 9, 11',
          formula: '„Dann sieht man ihn plötzlich erscheinen —<br>da ist nichts mehr dazwischen,<br>nicht mehr zwei, sondern beide sind eins."',
          desc: 'Die mystische Vereinigung — phōs mónon (Licht allein). Die höchste Erfahrung, die Plotin beschreibt: jenseits aller Worte, allen Denkens, aller Unterscheidung.'
        })}
        ${renderInfobox({
          type: 'success', icon: 'fas fa-link',
          title: 'Wirkungsgeschichte',
          body: 'Plotins Mystik beeinflusste: <strong>Augustinus</strong> (innere Gottesschau), <strong>Pseudo-Dionysius</strong> (negative Theologie), <strong>Meister Eckhart</strong> (Gelassenheit), <strong>Nikolaus von Kues</strong> (docta ignorantia), den <strong>Sufismus</strong>, die <strong>Kabbala</strong>, <strong>Hegel</strong> (Dialektik des Absoluten) und die <strong>Cambridge Platonists</strong>.'
        })}
      </div>
    </section>

    <section class="lz-content-section">
      <div class="lz-section-wrap">
        ${renderSubhead('Testfragen — Abiturniveau')}
        ${renderAccordion([
          { title: '1. Erklären Sie Plotins Drei-Hypostasen-Lehre und das Emanationsmodell.',
            content: '<p class="lz-prose"><strong>1. Das Eine:</strong> Absolut einfach, jenseits aller Bestimmungen — auch jenseits des Seins und Denkens. Unerschöpflicher Quellgrund, der aus innerer Überfülle „überströmt".<br><br><strong>2. Der Nous:</strong> Erste Emanation. Enthält die platonischen Ideen als lebendige Einheit. Denkendes und Gedachtes fallen zusammen — ewige Selbsterkenntnis.<br><br><strong>3. Die Weltseele:</strong> Zweite Emanation. Vermittelt zwischen Geist und Materie. Erzeugt die Zeit, belebt den Kosmos, individuiert sich in Einzelseelen.<br><br><strong>Emanationsmodell:</strong> Der Hervorgang ist kein Willensakt, sondern notwendig und ewig — wie Licht von der Sonne ausstrahlt. Jede Stufe ist weniger vollkommen: mehr Vielheit, weniger Einheit. Unterhalb der drei Hypostasen: Materie als fast reines Nicht-Sein.</p>' },
          { title: '2. Was bedeutet „negative Theologie" und warum ist das Eine unsagbar?',
            content: '<p class="lz-prose">Über das Eine können wir nur sagen, was es <strong>NICHT</strong> ist. Jede positive Aussage setzt Bestimmung voraus, Bestimmung setzt Begrenzung voraus — aber das Eine ist jenseits aller Begrenzung. Es ist nicht „seiend" (Sein ist Bestimmung), nicht „gut" (setzt Relation voraus), nicht „denkend" (Denken erfordert Zweiheit von Denker und Gedachtem). Alle Sprache beruht auf Unterscheidungen — das Eine ist <strong>vor aller Unterscheidung</strong>. Wirkungsgeschichte: Pseudo-Dionysius, Meister Eckhart, Nikolaus von Kues, jüdische und islamische Mystik.</p>' },
          { title: '3. Vergleichen Sie Emanation (Plotin) und Schöpfung (Christentum).',
            content: '<p class="lz-prose"><strong>Fünf Unterschiede:</strong> (1) <strong>Freiheit vs. Notwendigkeit:</strong> Gott schafft frei und willentlich. Das Eine emaniert notwendig. (2) <strong>Anfang vs. Ewigkeit:</strong> Schöpfung hat zeitlichen Anfang. Emanation ist ewig. (3) <strong>Wesensverschiedenheit vs. Wesensgleichheit:</strong> Gott ≠ Geschöpf. Nous und Weltseele sind wesensgleich mit dem Einen, nur abgeschwächt. (4) <strong>Person vs. Unpersönlich:</strong> Gott ist Person. Das Eine ist jenseits der Personalität. (5) <strong>Materie:</strong> Christlich: gut (Gen 1,31). Plotinisch: mangelhaft, fast Nicht-Sein.<br><br><strong>Augustinus</strong> vermittelt: übernimmt privatio boni und Innerlichkeit von Plotin, verbindet sie mit persönlichem Gott und freier Schöpfung.</p>' },
          { title: '4. Was ist die Hénōsis und wie unterscheidet sie sich von Platons höchster Erkenntnis?',
            content: '<p class="lz-prose"><strong>Platon:</strong> Höchste Erkenntnis = Schau der Idee des Guten. Es bleibt eine <strong>Erkenntnisrelation</strong>: Subjekt (Philosoph) erkennt Objekt (Idee). Zweiheit bleibt bestehen.<br><br><strong>Plotin:</strong> Hénōsis geht darüber hinaus — die <strong>Subjekt-Objekt-Unterscheidung wird aufgehoben</strong>. Ékstasis = Heraustreten aus sich selbst. Die Seele „wird" das Eine, für einen Augenblick. Nicht Wissen, nicht Denken, nicht Schauen — sondern absolute Einheit jenseits aller Unterscheidung.<br><br><strong>Drei Unterschiede:</strong> (1) Platon: Vernunft. Plotin: Jenseits der Vernunft. (2) Platon: Schau. Plotin: Verschmelzung. (3) Platon: Idee des Guten ist höchste Idee. Plotin: Das Eine ist jenseits des Seins — „Nichts" im Sinn von „jenseits aller Bestimmungen".</p>' },
        ])}
      </div>
    </section>

    <section class="lz-content-section" style="padding-top:0;">
      <div class="lz-section-wrap">
        ${renderPageNav({
          prev: { label: 'Skeptizismus', link: `${BASE}/themen/hellenistische-schulen/skeptizismus` },
          next: { label: 'Augustinus',   link: `${BASE}/themen/neuplatonismus-patristik/augustinus` },
        }, BASE)}
      </div>
    </section>
    ${footerHTML(this.router)}
    `;
  }
  init() { i18n.init(); initScrollReveal(); refreshScrollReveal(); initInteractive(document); }
  cleanup() {}
}