// pages/projekte/lernzettel/faecher/ethik/themen/deutscher-idealismus/fichte.js
// ══════════════════════════════════════════════════════════════════
// Kapitel 8.1 — Johann Gottlieb Fichte (1762–1814)
// Wissenschaftslehre, Tathandlung, Ich/Nicht-Ich, Freiheitsphilosophie
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

const KAP_COLOR = '#b87333';
const KAP_COLOR_RGB = '184, 115, 51';

export default class FichtePage {
  constructor(router) { this.router = router; }
  render() {
    ensureComponentsCSS();
    loadComponentCSS('pages/projekte/lernzettel/styles/sub.css');
    const el = document.createElement('div');
    el.className = 'page page-fichte';
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
          <span>Fichte</span>
        </nav>
        <h1 class="lz-sub-title"><em>Fichte</em> — Das Ich und die Tathandlung</h1>
        <p class="lz-sub-desc">
          Der radikalste Erbe Kants: Fichte machte das <strong>Ich</strong> zum
          absoluten Prinzip der Philosophie. Alles — Welt, Natur, Moral — geht
          aus der Selbsttätigkeit des Ich hervor. Die Freiheit wird zum Fundament
          der gesamten Wirklichkeit.
        </p>
        ${renderTags(['Kapitel 8.1', '1762–1814', 'Rammenau · Jena · Berlin', 'Wissenschaftslehre · Tathandlung · Ich/Nicht-Ich', 'Abitur 2026'])}
      </div>
    </section>


    <!-- ═══════════════════ BIOGRAPHIE ═══════════════════ -->
    <section class="lz-content-section">
      <div class="lz-section-wrap">
        ${renderSubhead('Biographisches')}
        <h2 class="lz-h2 reveal">Vom Gänsejungen zum <em>Philosophen der Freiheit</em></h2>

        <p class="lz-prose reveal">
          Johann Gottlieb Fichte wurde 1762 in <strong>Rammenau</strong> (Oberlausitz)
          in ärmlichen Verhältnissen geboren — als Sohn eines Bandwebers, der als
          Kind Gänse hütete. Ein Zufall veränderte sein Leben: Der Freiherr von Miltitz
          entdeckte den begabten Jungen und finanzierte seine Ausbildung. Fichte studierte
          Theologie in Jena und Leipzig, lebte als Hauslehrer in prekären Verhältnissen,
          bis die Begegnung mit <strong>Kants Philosophie</strong> 1790 zur
          intellektuellen Revolution wurde.
        </p>

        ${renderVTimeline([
          { year: '1762', title: 'Geburt in Rammenau', text: 'Ärmliche Herkunft; Weberfamilie; Gänsehüter; Förderung durch Freiherrn von Miltitz' },
          { year: '1790', title: 'Begegnung mit Kants Philosophie', text: '„Ich lebe in einer neuen Welt" — Kant wird zum Wendepunkt seines Denkens' },
          { year: '1792', title: 'Versuch einer Critik aller Offenbarung', text: 'Erschien anonym; wurde für ein Werk Kants gehalten → über Nacht berühmt' },
          { year: '1794', title: 'Wissenschaftslehre (Jena)', text: 'Professur in Jena; Grundlegung der gesamten Wissenschaftslehre — das Ich als absolutes Prinzip' },
          { year: '1798', title: 'Atheismusstreit', text: 'Vorwurf, Gott mit der moralischen Weltordnung gleichzusetzen; Verlust der Professur in Jena' },
          { year: '1807–08', title: 'Reden an die deutsche Nation', text: 'Im von Napoleon besetzten Berlin: Appell an nationale Erneuerung durch Bildung — Schlüsseltext des deutschen Nationalismus' },
          { year: '1810', title: 'Erster Rektor der Universität Berlin', text: 'Mitbegründer der Berliner Universität (heute Humboldt-Universität)' },
          { year: '1814', title: 'Tod in Berlin', text: 'Stirbt an Typhus, den seine Frau als Lazarettfreiwillige eingeschleppt hatte' },
        ])}

        ${renderInfobox({
          type: '', icon: 'fas fa-info-circle',
          title: 'Von Kant zu Fichte',
          body: 'Fichte sah sich als den <strong>einzig wahren Erben Kants</strong>. Kant hatte die Grenzen der Erkenntnis aufgezeigt — das „Ding an sich" ist unerkennbar. Fichte fand das inkonsequent: Wenn wir das Ding an sich nicht erkennen können, woher wissen wir dann, dass es existiert? Seine Lösung: Das „Ding an sich" muss gestrichen werden. Alles, was ist, ist <strong>Produkt des Ich</strong>. Kant selbst distanzierte sich öffentlich von Fichte: „Die Wissenschaftslehre ist ein völlig unhaltbares System."'
        })}
      </div>
    </section>


    <!-- ═══════════════════ WISSENSCHAFTSLEHRE ═══════════════════ -->
    <section class="lz-content-section">
      <div class="lz-section-wrap">
        ${renderSubhead('Die Wissenschaftslehre — Das System')}
        <h2 class="lz-h2 reveal">Drei Grundsätze der <em>Tathandlung</em></h2>

        <p class="lz-prose reveal">
          Fichtes <em>Grundlage der gesamten Wissenschaftslehre</em> (1794) versucht,
          die <strong>gesamte Philosophie</strong> aus einem einzigen Prinzip abzuleiten:
          dem <strong>Ich</strong>. Nicht das Ich als empirische Person (Johann Fichte),
          sondern das <strong>absolute Ich</strong> — die reine Selbsttätigkeit des
          Bewusstseins, die sich selbst setzt und dadurch alles andere hervorbringt.
        </p>

        ${renderMerkboxGrid([
          { icon: 'fas fa-1', title: '1. Grundsatz: „Das Ich setzt sich selbst"',
            text: 'Die <strong>Tathandlung</strong> (Thathandlung): Das Ich bringt sich durch seine eigene Aktivität hervor — es ist kein „Ding", sondern eine <strong>Tätigkeit</strong>. Nicht „Ich BIN" (statisch), sondern „Ich HANDLE mich ins Sein" (dynamisch). Das Subjekt ist keine Substanz, sondern reiner Akt. Logisches Äquivalent: A = A (Identitätsprinzip).' },
          { icon: 'fas fa-2', title: '2. Grundsatz: „Das Ich setzt ein Nicht-Ich"',
            text: 'Das Ich „setzt" ein <strong>Nicht-Ich</strong> — die Welt, die Natur, das Andere, den Widerstand. Ohne Widerstand kein Bewusstsein: Das Ich wird sich seiner selbst nur bewusst, indem es auf ein Nicht-Ich stößt. Die Welt ist kein „Ding an sich" (Kant), sondern <strong>Produkt des Ich</strong> — allerdings nicht willkürlich, sondern notwendig. Logisches Äquivalent: A ≠ Nicht-A (Satz vom Widerspruch).' },
          { icon: 'fas fa-3', title: '3. Grundsatz: „Das Ich setzt ein teilbares Ich und ein teilbares Nicht-Ich"',
            text: 'Die Vermittlung: Das absolute Ich „beschränkt" sich selbst, indem es sich in ein endliches (empirisches) Ich und ein endliches Nicht-Ich (die erfahrbare Welt) aufteilt. Das einzelne Ich (du, ich) ist eine <strong>Einschränkung</strong> des absoluten Ich — und die Welt ist der Widerstand, an dem sich das Ich bildet. Logisches Äquivalent: Satz vom Grund.' },
        ])}

        ${renderFormulaBox({
          label: 'Fichte, Grundlage der gesamten Wissenschaftslehre (1794), §1',
          formula: '„Das Ich setzt ursprünglich schlechthin<br>sein eigenes Sein."',
          desc: 'Der erste Grundsatz: Das Ich ist keine Substanz, die „da ist", sondern eine Tätigkeit, die sich selbst hervorbringt — die Tathandlung. Das Subjekt ist Produzent, nicht Produkt.'
        })}

        ${renderInfobox({
          type: 'blue', icon: 'fas fa-graduation-cap',
          title: 'Abitur-Hinweis: Tathandlung verstehen',
          body: '<strong>Tathandlung</strong> (Fichte prägt dieses Wort!) meint: Das Ich ist keine Tatsache (etwas Gegebenes), sondern eine <strong>Tat</strong> (etwas Gemachtes) — und zwar eine Tat, die sich selbst vollzieht. Das Bewusstsein ist kein Spiegel, der die Welt passiv abbildet, sondern eine <strong>Aktivität</strong>, die die Welt (mit-)konstruiert. Vergleich: Kants „synthetische Einheit der Apperzeption" (das „Ich denke", das alle Vorstellungen begleitet) wird bei Fichte zum <strong>absoluten Prinzip</strong> der gesamten Wirklichkeit.'
        })}
      </div>
    </section>


    <!-- ═══════════════════ FREIHEITSPHILOSOPHIE ═══════════════════ -->
    <section class="lz-content-section">
      <div class="lz-section-wrap">
        ${renderSubhead('Freiheitsphilosophie und Ethik')}
        <h2 class="lz-h2 reveal">Freiheit als <em>Prinzip aller Philosophie</em></h2>

        <p class="lz-prose reveal">
          Für Fichte ist die Wahl zwischen <strong>Idealismus</strong> (alles geht vom Ich aus)
          und <strong>Dogmatismus</strong> (alles geht von den Dingen aus) keine theoretische,
          sondern eine <strong>praktische Entscheidung</strong>: „Was für eine Philosophie man
          wählt, hängt davon ab, was für ein Mensch man ist." Wer sich als frei begreift,
          wählt den Idealismus. Wer sich als determiniert begreift, wählt den Dogmatismus.
        </p>

        ${renderMerkboxGrid([
          { icon: 'fas fa-fist-raised', title: 'Primat der praktischen Vernunft',
            text: 'Die theoretische Vernunft (Erkenntnis) dient der praktischen (Handeln). Wir erkennen die Welt nicht um ihrer selbst willen, sondern um IN IHR zu handeln. Das Nicht-Ich (die Welt) existiert, damit das Ich an ihm seine Freiheit verwirklichen kann. Die Natur ist das Material der Pflicht.' },
          { icon: 'fas fa-handshake', title: 'Anerkennung und Intersubjektivität',
            text: 'In der Grundlage des Naturrechts (1796) argumentiert Fichte: Ich werde mir meiner Freiheit nur bewusst, wenn ein ANDERES freies Wesen mich zur Freiheit „auffordert". Selbstbewusstsein setzt Intersubjektivität voraus — ich erkenne mich als Ich nur, indem ein Du mich als Ich anerkennt. Vorläufer von Hegels Herr-Knecht-Dialektik.' },
          { icon: 'fas fa-compass', title: 'Pflicht und Gewissen',
            text: 'Die Bestimmung des Menschen (1800): Der Mensch ist zur Freiheit bestimmt — aber Freiheit ist nicht Willkür, sondern Selbstbestimmung durch das moralische Gesetz. Das Gewissen ist die „Stimme" des absoluten Ich im empirischen Ich — es zeigt die Pflicht an. Radikale Kantische Pflichtethik.' },
          { icon: 'fas fa-school', title: 'Bildung als Befreiung',
            text: 'In den Reden an die deutsche Nation (1807/08) entwirft Fichte ein Erziehungsprogramm: Nicht militärische Stärke, sondern BILDUNG kann die Nation erneuern. Bildung = Selbsttätigkeit des Geistes, nicht passives Empfangen von Wissen. Einfluss auf Humboldt, Pestalozzi, das moderne Bildungsideal.' },
        ])}

        ${renderFormulaBox({
          label: 'Fichte, Erste Einleitung in die Wissenschaftslehre (1797), §5',
          formula: '„Was für eine Philosophie man wählt,<br>hängt davon ab, was für ein Mensch man ist."',
          desc: 'Die berühmteste Passage: Die Wahl zwischen Idealismus und Dogmatismus ist keine theoretische, sondern eine praktische Entscheidung — eine Entscheidung über das eigene Selbstverständnis.'
        })}
      </div>
    </section>


    <!-- ═══════════════════ VERGLEICH ═══════════════════ -->
    <section class="lz-content-section">
      <div class="lz-section-wrap">
        ${renderSubhead('Fichte im Kontext')}

        ${renderCompare({
          titleA: 'Kant',
          titleB: 'Fichte',
          listA: [
            'Das „Ding an sich" existiert, ist aber <strong>unerkennbar</strong>',
            'Dualismus: Erscheinung vs. Ding an sich',
            'Das „Ich denke" begleitet alle Vorstellungen',
            'Theoretische und praktische Vernunft <strong>nebeneinander</strong>',
            'Moral: Kategorischer Imperativ (formales Gesetz)',
            'Grenzen der Erkenntnis → <strong>Bescheidenheit</strong>',
          ],
          listB: [
            'Das „Ding an sich" wird <strong>abgeschafft</strong> → alles ist Ich-Setzung',
            'Monismus: Alles ist Manifestation des absoluten Ich',
            'Das Ich SETZT sich selbst und die Welt (Tathandlung)',
            'Primat der <strong>praktischen</strong> Vernunft',
            'Moral: Freiheit als Selbstbestimmung des Ich',
            'Keine Grenzen → <strong>absoluter Idealismus</strong>',
          ],
        })}

        ${renderTable({
          headers: ['Aspekt', 'Fichte', 'Spinoza'],
          rows: [
            ['<strong>Grundprinzip</strong>', 'Das ICH (Subjektivität, Freiheit)', 'Die SUBSTANZ (Gott/Natur, Notwendigkeit)'],
            ['<strong>Freiheit</strong>', 'Das Ich ist absolut frei — Selbsttätigkeit', 'Keine Freiheit — alles ist determiniert'],
            ['<strong>Natur</strong>', 'Natur = Nicht-Ich, Produkt des Ich', 'Natur = Gott, eigenständige Substanz'],
            ['<strong>Methode</strong>', 'Dialektisch: Ich → Nicht-Ich → Synthese', 'Geometrisch: Axiome → Propositionen'],
            ['<strong>Ethik</strong>', 'Pflicht, Gewissen, Selbstbestimmung', 'Einsicht in Notwendigkeit, amor Dei intellectualis'],
          ],
          highlight: [0, 1],
        })}

        ${renderInfobox({
          type: 'success', icon: 'fas fa-link',
          title: 'Wirkungsgeschichte',
          body: '<strong>Hegel</strong> übernahm die dialektische Methode (These → Antithese → Synthese), kritisierte aber Fichtes Subjektivismus: Das Absolute ist nicht bloß Ich, sondern <strong>Geist</strong> — der sich in der Geschichte objektiviert. <strong>Schelling</strong> wandte ein: Die Natur darf nicht bloß „Nicht-Ich" (Material des Ich) sein — sie hat eigene Produktivität. <strong>Marx</strong> säkularisierte die Tathandlung als <strong>Arbeit</strong>: Der Mensch schafft sich selbst durch praktische Tätigkeit. <strong>Sartre</strong> (Existenzialismus): „Die Existenz geht der Essenz voraus" — der Mensch ist, was er aus sich macht (Fichtes Tathandlung existenzialistisch gewendet).'
        })}
      </div>
    </section>


    <!-- ═══════════════════ TESTFRAGEN ═══════════════════ -->
    <section class="lz-content-section">
      <div class="lz-section-wrap">
        ${renderSubhead('Testfragen — Abiturniveau')}
        ${renderAccordion([
          { title: '1. Erklären Sie Fichtes drei Grundsätze und den Begriff der „Tathandlung".',
            content: '<p class="lz-prose"><strong>1. Grundsatz:</strong> „Das Ich setzt sich selbst." Das Ich ist keine gegebene Substanz, sondern eine <strong>Tätigkeit</strong>, die sich durch ihren eigenen Vollzug hervorbringt — die <strong>Tathandlung</strong>. Das Bewusstsein ist nicht passiv (ein Spiegel der Welt), sondern aktiv (es erzeugt sich und seine Welt). Logisch: A = A (Identitätsprinzip).<br><br><strong>2. Grundsatz:</strong> „Das Ich setzt ein Nicht-Ich." Das Ich braucht einen <strong>Widerstand</strong>, um sich seiner selbst bewusst zu werden. Ohne Nicht-Ich (Welt, Natur, Anderes) kein Selbstbewusstsein. Das Nicht-Ich ist kein „Ding an sich" (Kant), sondern <strong>Setzung des Ich</strong> — allerdings eine notwendige Setzung. Logisch: A ≠ Nicht-A (Satz vom Widerspruch).<br><br><strong>3. Grundsatz:</strong> „Das Ich setzt ein teilbares Ich und ein teilbares Nicht-Ich." Vermittlung: Das absolute Ich schränkt sich ein in ein <strong>endliches Ich</strong> (empirisches Bewusstsein) und ein <strong>endliches Nicht-Ich</strong> (die erfahrbare Welt). Das einzelne Ich ist eine Einschränkung des absoluten Ich — und die Welt ist das Material, an dem das Ich sich bildet.<br><br><strong>Tathandlung:</strong> Fichtes Neologismus bedeutet: Das Ich ist keine Tat<strong>sache</strong> (etwas Gegebenes), sondern eine Tat<strong>handlung</strong> (etwas, das sich selbst vollzieht). Das Subjekt ist nicht Produkt, sondern Produzent. Vergleich: Descartes\' Cogito ist eine Feststellung („Ich denke, also bin ich"); Fichtes Tathandlung ist ein Vollzug („Ich erzeuge mich, indem ich denke").</p>' },

          { title: '2. Warum schafft Fichte Kants „Ding an sich" ab? Was sind die Konsequenzen?',
            content: '<p class="lz-prose"><strong>Fichtes Argument:</strong> Kant behauptet: Es gibt „Dinge an sich" jenseits unserer Erfahrung, die wir nicht erkennen können. Fichte wendet ein: Wenn wir sie <strong>nicht erkennen</strong> können, woher wissen wir dann, dass sie <strong>existieren</strong>? Die bloße Behauptung „es gibt etwas Unerkennbares" ist ein Widerspruch — denn um zu behaupten, dass X existiert, muss ich etwas über X wissen (nämlich, dass es existiert). Also ist das „Ding an sich" eine <strong>leere Hypothese</strong>, die gestrichen werden muss.<br><br><strong>Konsequenzen:</strong> (1) <strong>Absoluter Idealismus:</strong> Wenn es kein Ding an sich gibt, dann ist ALLES, was existiert, Manifestation des Ich — die Welt ist Produkt der Selbsttätigkeit des Bewusstseins. (2) <strong>Ende des Dualismus:</strong> Kants Dualismus (Erscheinung vs. Ding an sich) wird durch einen Monismus ersetzt: Alles ist Ich bzw. Ich-Setzung. (3) <strong>Problem:</strong> Wenn die Welt Produkt des Ich ist, ist sie dann bloße Illusion? Fichte betont: Nein — das Nicht-Ich ist eine <strong>notwendige</strong> Setzung des Ich. Die Welt ist real, aber ihre Realität ist eine vom Ich gesetzte, nicht eine unabhängig existierende.<br><br><strong>Kant reagierte:</strong> Kant distanzierte sich öffentlich: „Die Wissenschaftslehre ist ein völlig unhaltbares System." Aber Fichte blieb dabei: Er vollende Kant — Kant habe nur nicht den Mut gehabt, die letzte Konsequenz zu ziehen.</p>' },

          { title: '3. Was bedeutet Fichtes Satz „Was für eine Philosophie man wählt, hängt davon ab, was für ein Mensch man ist"?',
            content: '<p class="lz-prose"><strong>Der Kontext:</strong> Fichte unterscheidet zwei philosophische Grundpositionen: (1) <strong>Dogmatismus</strong> (Spinoza): Die Welt besteht aus Dingen, die das Bewusstsein determinieren. Der Mensch ist ein Naturwesen, bestimmt durch äußere Ursachen. Keine Freiheit. (2) <strong>Idealismus</strong> (Fichte): Das Bewusstsein ist frei und selbsttätig — es setzt die Welt. Der Mensch ist ein freies Wesen, das sich selbst bestimmt.<br><br><strong>Fichtes These:</strong> Beide Positionen lassen sich theoretisch nicht widerlegen — jede ist in sich konsistent. Die Entscheidung zwischen ihnen ist daher keine <strong>theoretische</strong>, sondern eine <strong>praktische</strong>: eine Entscheidung über das eigene Selbstverständnis. Wer sich als <strong>frei</strong> begreift, wählt den Idealismus. Wer sich als <strong>determiniert</strong> begreift, wählt den Dogmatismus. „Ein träger Charakter wird den Dogmatismus wählen; ein tatkräftiger den Idealismus."<br><br><strong>Philosophische Bedeutung:</strong> (1) Philosophie ist nicht wertfrei — sie hängt von der <strong>existenziellen Haltung</strong> des Philosophierenden ab. (2) Vorgriff auf <strong>Kierkegaard</strong> (die existenzielle Wahl) und <strong>Sartre</strong> (wir sind „verurteilt zur Freiheit"). (3) Kritik: Ist das nicht ein Zirkel? Man wählt die Philosophie, die zum eigenen Charakter passt — dann bestätigt die Philosophie den Charakter. Aber Fichte würde sagen: Genau das ist der Punkt — Philosophie IST Selbstverständigung, kein neutrales Beschreiben.</p>' },

          { title: '4. Vergleichen Sie Fichtes Ich-Philosophie mit Descartes\' Cogito und Kants „Ich denke".',
            content: '<p class="lz-prose"><strong>Descartes\' Cogito:</strong> „Ich denke, also bin ich" — eine <strong>Feststellung</strong>: Im Akt des Zweifelns entdecke ich meine Existenz. Das Cogito ist eine <strong>Tatsache</strong> (etwas, das ich vorfinde). Das Ich ist eine „denkende Substanz" (res cogitans) — ein Ding, das denkt. Es ist <strong>passiv</strong>: Es entdeckt sich, erzeugt sich nicht.<br><br><strong>Kants „Ich denke":</strong> „Das ‚Ich denke\' muss alle meine Vorstellungen begleiten können" (KrV B 131). Das transzendentale Ich ist die <strong>Einheitsfunktion</strong>, die alle Erfahrung zusammenhält — die „synthetische Einheit der Apperzeption". Es ist kein Ding, sondern eine <strong>Funktion</strong>. Aber es ist <strong>nicht produktiv</strong>: Es ordnet die Erfahrung, erzeugt sie aber nicht (dafür braucht man die Sinnlichkeit + Ding an sich).<br><br><strong>Fichtes Tathandlung:</strong> Das Ich <strong>SETZT sich selbst</strong> — es ist weder Substanz (Descartes) noch bloße Funktion (Kant), sondern <strong>reine Tätigkeit</strong>. Es erzeugt sich und seine Welt in einem einzigen Akt. Das Ich ist <strong>absolut produktiv</strong>: Nicht nur die Form der Erfahrung (Kant), sondern auch deren Inhalt geht letztlich auf das Ich zurück.<br><br><strong>Steigerung:</strong> Descartes: Ich entdecke mich → Kant: Ich ordne meine Erfahrung → Fichte: Ich erzeuge mich und meine Welt. Zunehmende <strong>Aktivität</strong> des Subjekts, abnehmende Bedeutung der gegebenen Welt.</p>' },
        ])}
      </div>
    </section>

    <section class="lz-content-section" style="padding-top:0;">
      <div class="lz-section-wrap">
        ${renderPageNav({
          prev: { label: 'Kant',  link: `${BASE}/themen/aufklaerung/kant` },
          next: { label: 'Hegel', link: `${BASE}/themen/deutscher-idealismus/hegel` },
        }, BASE)}
      </div>
    </section>
    ${footerHTML(this.router)}
    `;
  }
  init() { i18n.init(); initScrollReveal(); refreshScrollReveal(); initInteractive(document); }
  cleanup() {}
}