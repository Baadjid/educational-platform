// pages/projekte/lernzettel/faecher/ethik/themen/gegenwart/foucault.js
// Kapitel 10.4 — Michel Foucault (1926–1984)
// Macht/Wissen, Diskurs, Überwachen & Strafen, Sorge um sich

import { initScrollReveal, refreshScrollReveal } from '../../../../../../../shared/js/scroll.js';
import { footerHTML } from '../../../../../../../components/Footer.js';
import { i18n } from '../../../../../../../shared/js/i18n.js';
import { ensureComponentsCSS, renderSubhead, renderTags, renderInfobox, renderTable, renderAccordion, renderMerkboxGrid, renderVTimeline, renderCompare, renderFormulaBox, renderTabs, initInteractive, loadComponentCSS } from '../../../../js/components/components.js';
import { renderPageNav } from '../../../../js/components/subnav.js';
import { COLOR, COLOR_RGB, BASE } from '../../philosophie.js';
const KAP_COLOR = '#7e22ce'; const KAP_COLOR_RGB = '126, 34, 206';

export default class FoucaultPage {
  constructor(router) { this.router = router; }
  render() { ensureComponentsCSS(); loadComponentCSS('pages/projekte/lernzettel/styles/sub.css'); const el = document.createElement('div'); el.className = 'page page-foucault'; el.style.setProperty('--lz-accent', COLOR); el.style.setProperty('--lz-accent-rgb', COLOR_RGB); el.style.setProperty('--kap-color', KAP_COLOR); el.style.setProperty('--kap-color-rgb', KAP_COLOR_RGB); el.innerHTML = this._html(); return el; }
  _html() {
    return `
    <section class="lz-sub-hero"><div class="lz-sub-hero-orb"></div><div class="lz-sub-hero-inner reveal">
      <nav class="lz-sub-breadcrumb"><button class="lz-bread-link" data-link="/projekte/lernzettel">Lernzettel</button><i class="fas fa-chevron-right"></i><button class="lz-bread-link" data-link="${BASE}">Philosophie</button><i class="fas fa-chevron-right"></i><span>Foucault</span></nav>
      <h1 class="lz-sub-title"><em>Foucault</em> — Macht, Wissen &amp; Diskurs</h1>
      <p class="lz-sub-desc">„Wo es Macht gibt, gibt es Widerstand." Foucault zeigte, wie Wissen und Macht untrennbar verflochten sind — und wie Institutionen (Gefängnis, Klinik, Schule) den Menschen formen, kontrollieren und produzieren.</p>
      ${renderTags(['Kapitel 10.4','1926–1984','Poitiers · Paris','Diskurs · Macht/Wissen · Panopticon · Biopolitik · Sorge um sich','Abitur 2026'])}
    </div></section>

    <section class="lz-content-section"><div class="lz-section-wrap">
      ${renderSubhead('Biographisches')}
      <h2 class="lz-h2 reveal">Der <em>Archäologe</em> des Wissens</h2>
      <p class="lz-prose reveal">Michel Foucault (1926–1984) wuchs in <strong>Poitiers</strong> als Sohn eines Chirurgen auf. Er studierte an der École Normale Supérieure in Paris (Philosophie, Psychologie), litt unter Depressionen und unternahm einen Suizidversuch. Seine intellektuelle Karriere war eine Serie von Provokationen — jedes Buch zerstörte Selbstverständlichkeiten und offenbarte verborgene Machtstrukturen. Er starb 1984 in Paris an einer AIDS-bedingten Erkrankung.</p>
      ${renderVTimeline([
        { year:'1926', title:'Geburt in Poitiers', text:'Bürgerliche Arztfamilie; brillanter, unglücklicher Schüler' },
        { year:'1961', title:'Wahnsinn und Gesellschaft', text:'Geschichte des Wahnsinns im Zeitalter der Vernunft — die Vernunft definiert sich durch Ausschluss des „Wahnsinns"' },
        { year:'1966', title:'Die Ordnung der Dinge', text:'Archäologie der Humanwissenschaften — der „Tod des Menschen" als theoretisches Subjekt' },
        { year:'1969', title:'Archäologie des Wissens', text:'Methodenwerk: Diskursanalyse als Methode der Geschichtsschreibung' },
        { year:'1975', title:'Überwachen und Strafen', text:'Die Geburt des Gefängnisses — Disziplinargesellschaft und Panopticon' },
        { year:'1976', title:'Der Wille zum Wissen (Sexualität I)', text:'Erster Band der Geschichte der Sexualität — Biomacht und Biopolitik' },
        { year:'1984', title:'Die Sorge um sich (Sexualität III) + Tod', text:'Spätwerk: antike Selbstpraktiken; stirbt am 25. Juni in Paris' },
      ])}
    </div></section>

    <section class="lz-content-section"><div class="lz-section-wrap">
      ${renderSubhead('Diskurs und Wissen')}
      <h2 class="lz-h2 reveal">Was kann in einer Epoche <em>gesagt</em> werden?</h2>
      <p class="lz-prose reveal">Foucaults zentrale Einsicht: Was als „Wissen", „Wahrheit" oder „Vernunft" gilt, ist nicht zeitlos — sondern historisch produziert. Jede Epoche hat ein <strong>Épistémè</strong> — eine grundlegende Wissensordnung, die bestimmt, was gedacht, gesagt und gewusst werden KANN.</p>

      ${renderMerkboxGrid([
        { icon:'fas fa-comments', title:'Diskurs (discours)',
          text:'Ein Diskurs ist nicht einfach „Sprache" oder „Text" — er ist ein SYSTEM von Aussagen, das bestimmt, was in einem bestimmten Bereich (Medizin, Recht, Psychiatrie) als wahr, sagbar, denkbar gilt. Diskurse PRODUZIEREN ihren Gegenstand: Der „Wahnsinnige" existiert erst, wenn es einen medizinischen Diskurs gibt, der „Wahnsinn" als Krankheit definiert.' },
        { icon:'fas fa-layer-group', title:'Épistémè — Die Ordnung des Wissens',
          text:'Jede Epoche hat eine unsichtbare Grundstruktur, die bestimmt, WIE gewusst wird. Die Renaissance weiß durch ÄHNLICHKEIT (Mikro-/Makrokosmos). Das klassische Zeitalter (17./18. Jh.) weiß durch ORDNUNG (Taxonomie, Tableaux). Die Moderne weiß durch GESCHICHTE (Entwicklung, Genese). Diese Strukturen sind UNBEWUSST — sie sind das „historische Apriori" des Wissens.' },
        { icon:'fas fa-skull', title:'Der „Tod des Menschen"',
          text:'In Die Ordnung der Dinge (1966) argumentiert Foucault: „Der Mensch" als Subjekt der Humanwissenschaften ist eine ERFINDUNG des 18./19. Jh. — und er wird wieder verschwinden, „wie ein Gesicht im Sand am Meeressaum". Nicht der Mensch als biologisches Wesen verschwindet, sondern „der Mensch" als theoretisches Konzept — als souveränes, sich selbst transparentes Erkenntnissubjekt.' },
      ])}

      ${renderFormulaBox({ label:'Foucault, Die Ordnung der Dinge, Schluss (1966)', formula:'„Der Mensch ist eine Erfindung,<br>deren junges Datum die Archäologie unseres Denkens<br>offen zeigt. Und vielleicht auch deren nahes Ende."', desc:'Der „Tod des Menschen" — nicht als biologisches Wesen, sondern als theoretische Figur: als autonomes Erkenntnissubjekt, das die Aufklärung erfunden und das die Humanwissenschaften zum Gegenstand gemacht hat.' })}
    </div></section>

    <section class="lz-content-section"><div class="lz-section-wrap">
      ${renderSubhead('Macht und Wissen')}
      <h2 class="lz-h2 reveal"><em>Macht/Wissen</em> — untrennbar verflochten</h2>
      <p class="lz-prose reveal">Foucaults revolutionärste These: <strong>Macht und Wissen sind nicht zu trennen.</strong> Wissen ist nicht „neutral" und Macht ist nicht nur Unterdrückung. Macht PRODUZIERT Wissen — und Wissen ermöglicht Macht.</p>

      ${renderCompare({
        titleA:'Traditionelles Machtverständnis',
        titleB:'Foucaults Machtverständnis',
        listA:['Macht = <strong>Besitz</strong> (jemand HAT Macht)','Macht = <strong>Unterdrückung</strong> (von oben nach unten)','Macht ist <strong>negativ</strong> (verbietet, bestraft, unterdrückt)','Macht kommt vom <strong>Staat</strong> (Souverän)','Macht und Wissen sind <strong>getrennt</strong>'],
        listB:['Macht = <strong>Relation</strong> (Macht ist überall, in allen Beziehungen)','Macht = <strong>Netzwerk</strong> (kapillar, dezentral, allgegenwärtig)','Macht ist <strong>produktiv</strong> (erzeugt Wissen, Subjekte, Normen)','Macht kommt von <strong>überall</strong> (Institutionen, Diskurse, Praktiken)','Macht und Wissen sind <strong>untrennbar</strong> (pouvoir/savoir)'],
      })}

      ${renderMerkboxGrid([
        { icon:'fas fa-eye', title:'Panopticon (Überwachen und Strafen, 1975)',
          text:'Jeremy Benthams Panopticon — ein Gefängnismodell, in dem ein einziger Wächter ALLE Insassen beobachten kann, ohne selbst gesehen zu werden. Die Insassen wissen nie, OB sie beobachtet werden — also verhalten sie sich IMMER so, als würden sie beobachtet. Das Panopticon ist für Foucault die METAPHER der modernen Gesellschaft: Überwachung erzeugt Selbstdisziplinierung.' },
        { icon:'fas fa-school', title:'Disziplinargesellschaft',
          text:'Die moderne Gesellschaft kontrolliert nicht durch GEWALT (Folter, Hinrichtung), sondern durch DISZIPLIN: Schule, Kaserne, Fabrik, Krankenhaus, Gefängnis — alles Institutionen, die den Körper DRESSIEREN, die Zeit REGULIEREN, den Raum KONTROLLIEREN. Die Macht wird UNSICHTBAR — sie wirkt durch Normen, Routinen, Architekturen, Prüfungen.' },
        { icon:'fas fa-dna', title:'Biopolitik / Biomacht',
          text:'Im 18./19. Jh. entsteht eine neue Form der Macht: BIOPOLITIK — die Verwaltung des LEBENS ganzer Bevölkerungen. Geburtenrate, Sterberate, Gesundheit, Hygiene, Sexualität — alles wird zum Gegenstand staatlicher Regulierung. Nicht mehr „sterben machen", sondern „leben machen" — Macht als Optimierung des Lebens. Relevant für: öffentliches Gesundheitswesen, Impfpflicht, Bevölkerungspolitik.' },
      ])}
    </div></section>

    <section class="lz-content-section"><div class="lz-section-wrap">
      ${renderSubhead('Die Sorge um sich — Spätwerk (1984)')}
      <h2 class="lz-h2 reveal">Antike <em>Selbstpraktiken</em> als Widerstand</h2>
      <p class="lz-prose reveal">In seinen letzten Werken (Geschichte der Sexualität II und III) wendet sich Foucault der <strong>antiken Ethik</strong> zu — nicht als Historiker, sondern als Philosoph: Wie kann der Einzelne sich angesichts allgegenwärtiger Machtstrukturen als FREIES SUBJEKT konstituieren?</p>
      ${renderMerkboxGrid([
        { icon:'fas fa-spa', title:'Epimeleia heautou (Sorge um sich)',
          text:'Die antike Ethik (Sokrates, Epikur, Stoa, Marc Aurel) verstand Moral nicht als Gehorsam gegenüber Regeln (Kant), sondern als SELBSTFORMUNG — die aktive Gestaltung des eigenen Lebens als „Kunstwerk". Diätetik (Ernährung), Ökonomik (Hausführung), Erotik (Liebesbeziehungen) — alles wird zum Gegenstand bewusster Selbstführung.' },
        { icon:'fas fa-paint-brush', title:'Ästhetik der Existenz',
          text:'Foucaults Alternative zur modernen Moralphilosophie: Nicht REGELN folgen (Kant), nicht NUTZEN maximieren (Utilitarismus), sondern das eigene Leben als KUNSTWERK gestalten — eine „Ästhetik der Existenz". Freiheit ist nicht die Abwesenheit von Macht, sondern die aktive SELBSTFORMUNG INNERHALB von Machtverhältnissen.' },
        { icon:'fas fa-fist-raised', title:'Widerstand',
          text:'„Wo es Macht gibt, gibt es Widerstand." Macht ist nicht total — sie erzeugt immer auch GEGENMACHT. Der Widerstand liegt nicht in einer großen Revolution (Marx), sondern in den alltäglichen Praktiken der Selbstformung: andere Lebensweisen, andere Beziehungen, andere Formen des Wissens. Mikropolitik statt Makropolitik.' },
      ])}
      ${renderFormulaBox({ label:'Foucault, Interview (1982)', formula:'„Ich glaube nicht, dass es eine Gesellschaft geben kann,<br>die ohne Machtverhältnisse auskommt.<br>Das Problem ist nicht, sie aufzulösen,<br>sondern sich die Regeln des Rechts, die Techniken<br>des Managements und die Ethik der Selbstpraktiken<br>zu geben, die es erlauben, innerhalb der Machtverhältnisse<br>mit einem Minimum an Herrschaft zu spielen."', desc:'Foucaults reifste Position: Nicht Macht abschaffen (unmöglich), sondern die Spielräume INNERHALB der Macht vergrößern — durch Recht, durch Institutionen, durch Selbstpraktiken.' })}
    </div></section>

    <section class="lz-content-section"><div class="lz-section-wrap">
      ${renderSubhead('Testfragen — Abiturniveau')}
      ${renderAccordion([
        { title:'1. Erklären Sie Foucaults Machtbegriff und vergleichen Sie ihn mit dem traditionellen.',
          content:'<p class="lz-prose"><strong>Traditionell:</strong> Macht = BESITZ (der König, der Staat „hat" Macht). Macht = UNTERDRÜCKUNG (verbietet, bestraft). Macht kommt von OBEN (Souverän → Untertan). Macht und Wissen sind GETRENNT (Wissen ist neutral).<br><br><strong>Foucault:</strong> (1) Macht ist kein Besitz, sondern eine RELATION — ein Kraftverhältnis, das in JEDER Beziehung wirkt (Lehrer/Schüler, Arzt/Patient, Eltern/Kind). (2) Macht ist nicht nur repressiv, sondern PRODUKTIV: Sie erzeugt Wissen (die Psychiatrie „produziert" den Wahnsinnigen), Subjekte (die Schule „produziert" den Schüler), Normen (die Medizin „produziert" das Normale). (3) Macht kommt nicht nur von oben, sondern von ÜBERALL — sie ist kapillar, dezentral, allgegenwärtig. (4) Macht und Wissen sind UNTRENNBAR: Jedes Wissen ermöglicht Macht (die Medizin ermöglicht die Kontrolle über den Körper), jede Macht erzeugt Wissen (die Gefängnisstatistik erzeugt kriminologisches Wissen).<br><br><strong>Konsequenz:</strong> Befreiung ist nicht die BESEITIGUNG von Macht (unmöglich), sondern die Veränderung von Machtverhältnissen — durch Widerstand, alternative Praktiken, Kritik an bestehenden Diskursen.</p>' },
        { title:'2. Was ist das Panopticon und warum ist es für Foucault eine Metapher der modernen Gesellschaft?',
          content:'<p class="lz-prose"><strong>Das Panopticon:</strong> Jeremy Benthams (1785) Gefängnisentwurf: Ein kreisförmiges Gebäude mit Zellen an der Peripherie und einem zentralen Wachturm. Der Wächter kann ALLE Insassen sehen — aber die Insassen können den Wächter NICHT sehen. Sie wissen nie, OB sie beobachtet werden → sie verhalten sich IMMER so, als würden sie beobachtet → SELBSTDISZIPLINIERUNG.<br><br><strong>Metapher:</strong> Foucault sieht im Panopticon das PRINZIP der modernen Gesellschaft: (1) <strong>Schule:</strong> Der Lehrer beobachtet, prüft, benotet — die Schüler disziplinieren sich selbst. (2) <strong>Fabrik:</strong> Zeitkontrolle, Akkordarbeit, Stechuhren — der Arbeiter internalisiert die Disziplin. (3) <strong>Medien/Social Media:</strong> Permanente Sichtbarkeit (Likes, Follower, Bewertungen) erzeugt Selbstzensur — man verhält sich konform, weil man beobachtet werden KÖNNTE.<br><br><strong>Schlüsselgedanke:</strong> Moderne Macht funktioniert nicht durch GEWALT (der König lässt köpfen), sondern durch SICHTBARKEIT: Wer beobachtet wird (oder es glaubt), diszipliniert sich SELBST. Die effizienteste Macht ist die, die der Beherrschte VERINNERLICHT — sodass kein äußerer Zwang mehr nötig ist.</p>' },
        { title:'3. Was meint Foucault mit dem „Tod des Menschen" (Die Ordnung der Dinge)?',
          content:'<p class="lz-prose"><strong>Was verschwindet:</strong> Nicht der Mensch als biologisches Wesen, sondern „der Mensch" als <strong>theoretisches Konzept</strong> — als souveränes Erkenntnissubjekt, das sich selbst transparent ist, die Welt objektiv erkennt und sein Schicksal frei bestimmt. Diese Figur wurde im 18./19. Jh. ERFUNDEN (Aufklärung, Kant, Humanwissenschaften) — und sie wird VERSCHWINDEN.<br><br><strong>Warum?</strong> (1) Die Humanwissenschaften (Psychologie, Soziologie, Linguistik) zeigen: Der Mensch ist NICHT souverän — er wird bestimmt durch unbewusste Strukturen (Sprache, Ökonomie, Unbewusstes), die er nicht kontrolliert. (2) Der <strong>Strukturalismus</strong> (Lévi-Strauss, Saussure) zeigt: Nicht das Subjekt spricht die Sprache, sondern die Sprache „spricht" das Subjekt — die Strukturen sind mächtiger als die Individuen. (3) <strong>Nietzsche</strong>: Der „Tod Gottes" zieht den „Tod des Menschen" nach sich — wenn Gott tot ist, ist auch sein Geschöpf (der Mensch als Ebenbild Gottes) tot.<br><br><strong>Konsequenz:</strong> Philosophie muss NICHT vom „Menschen" (als universalem Wesen) ausgehen, sondern von den DISKURSEN, PRAKTIKEN und MACHTSTRUKTUREN, die bestimmen, was in einer Epoche als „Mensch" gilt. Gegen den Humanismus — aber NICHT gegen die einzelnen Menschen.</p>' },
        { title:'4. Vergleichen Sie Foucaults Spätwerk (Sorge um sich) mit der antiken Ethik (Sokrates, Stoa, Epikur).',
          content:'<p class="lz-prose"><strong>Foucaults Interesse:</strong> In den letzten Lebensjahren wandte sich Foucault der antiken Ethik zu — nicht aus antiquarischem Interesse, sondern als ALTERNATIVE zur modernen Moralphilosophie. Die Frage: Wie kann der Einzelne sich als freies Subjekt konstituieren — in einer Welt allgegenwärtiger Macht?<br><br><strong>Antike Ethik (Foucaults Deutung):</strong> (1) SELBSTSORGE (epimeleia heautou): Ethik als Arbeit an sich selbst — Diätetik, Körperübungen, Meditation, Selbstprüfung. Nicht Gehorsam gegenüber Regeln, sondern aktive Gestaltung des eigenen Lebens. (2) ÄSTHETIK DER EXISTENZ: Das Leben als Kunstwerk gestalten — wie der Bildhauer den Stein formt, so formt der Weise sich selbst. (3) TECHNIKEN DES SELBST: Tagebuchschreiben (Marc Aurel), Gewissensprüfung (Seneca), Meditationsübungen (Epikur), Vorbereitung auf den Tod (Stoa).<br><br><strong>Vergleich:</strong> (1) <strong>Sokrates:</strong> „Das ungeprüfte Leben ist nicht lebenswert" — Foucault zitiert das als Gründungssatz der Selbstsorge-Tradition. (2) <strong>Stoa:</strong> Epiktets Dichotomie (was in meiner Macht steht / was nicht) als Technik der Freiheit innerhalb von Machtverhältnissen. (3) <strong>Epikur:</strong> Rückzug in den Garten (láthe biṓsas) als Mikro-Widerstand gegen die gesellschaftliche Macht.<br><br><strong>Foucaults Innovation:</strong> Er verbindet antike Selbstpraktiken mit moderner Machtanalyse: Die antike Selbstsorge ist keine naive Innerlichkeit — sie ist eine STRATEGIE des Widerstands gegen die Disziplinarmacht. Sich selbst formen, BEVOR die Institutionen es tun. Freiheit als Praxis, nicht als Zustand.</p>' },
      ])}
    </div></section>

    <section class="lz-content-section" style="padding-top:0;"><div class="lz-section-wrap">
      ${renderPageNav({
        prev:{ label:'Adorno', link:`${BASE}/themen/gegenwart/adorno` },
        next:{ label:'Zurück zur Übersicht', link:`${BASE}` },
      }, BASE)}
    </div></section>
    ${footerHTML(this.router)}
    `;
  }
  init() { i18n.init(); initScrollReveal(); refreshScrollReveal(); initInteractive(document); }
  cleanup() {}
}