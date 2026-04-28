// pages/projekte/lernzettel/faecher/ethik/themen/gegenwart/adorno.js
// Kapitel 10.3 — Theodor W. Adorno (1903–1969)
// Dialektik der Aufklärung, Kulturindustrie, Negative Dialektik, Ästhetik

import { initScrollReveal, refreshScrollReveal } from '../../../../../../../shared/js/scroll.js';
import { footerHTML } from '../../../../../../../components/Footer.js';
import { i18n } from '../../../../../../../shared/js/i18n.js';
import { ensureComponentsCSS, renderSubhead, renderTags, renderInfobox, renderTable, renderAccordion, renderMerkboxGrid, renderVTimeline, renderCompare, renderFormulaBox, renderTabs, initInteractive, loadComponentCSS } from '../../../../js/components/components.js';
import { renderPageNav } from '../../../../js/components/subnav.js';
import { COLOR, COLOR_RGB, BASE } from '../../philosophie.js';
const KAP_COLOR = '#7e22ce'; const KAP_COLOR_RGB = '126, 34, 206';

export default class AdornoPage {
  constructor(router) { this.router = router; }
  render() { ensureComponentsCSS(); loadComponentCSS('pages/projekte/lernzettel/styles/sub.css'); const el = document.createElement('div'); el.className = 'page page-adorno'; el.style.setProperty('--lz-accent', COLOR); el.style.setProperty('--lz-accent-rgb', COLOR_RGB); el.style.setProperty('--kap-color', KAP_COLOR); el.style.setProperty('--kap-color-rgb', KAP_COLOR_RGB); el.innerHTML = this._html(); return el; }
  _html() {
    return `
    <section class="lz-sub-hero"><div class="lz-sub-hero-orb"></div><div class="lz-sub-hero-inner reveal">
      <nav class="lz-sub-breadcrumb"><button class="lz-bread-link" data-link="/projekte/lernzettel">Lernzettel</button><i class="fas fa-chevron-right"></i><button class="lz-bread-link" data-link="${BASE}">Philosophie</button><i class="fas fa-chevron-right"></i><span>Adorno</span></nav>
      <h1 class="lz-sub-title"><em>Adorno</em> — Kritische Theorie &amp; Kulturindustrie</h1>
      <p class="lz-sub-desc">„Es gibt kein richtiges Leben im falschen." Adorno analysierte, wie die Aufklärung in Barbarei umschlägt, wie die Kulturindustrie das Bewusstsein kolonisiert — und warum nach Auschwitz Philosophie nicht mehr dieselbe sein kann.</p>
      ${renderTags(['Kapitel 10.3','1903–1969','Frankfurt · New York · Los Angeles','Dialektik der Aufklärung · Kulturindustrie · Negative Dialektik','Abitur 2026'])}
    </div></section>

    <section class="lz-content-section"><div class="lz-section-wrap">
      ${renderSubhead('Biographisches')}
      <h2 class="lz-h2 reveal">Frankfurt — Exil — <em>Rückkehr</em></h2>
      <p class="lz-prose reveal">Theodor Wiesengrund Adorno (1903–1969) wuchs in Frankfurt in einem großbürgerlichen, musikalischen Milieu auf. Er studierte Philosophie und Musik, wurde Mitglied des <strong>Instituts für Sozialforschung</strong> (Frankfurter Schule), emigrierte 1934 nach England, dann in die USA. Nach dem Krieg kehrte er nach Frankfurt zurück und wurde zur intellektuellen Leitfigur der Bundesrepublik — bewundert und angefeindet gleichermaßen.</p>
      ${renderVTimeline([
        { year:'1903', title:'Geburt in Frankfurt', text:'Vater jüdischer Weinhändler; Mutter korsische Sängerin; musikalische Erziehung' },
        { year:'1931', title:'Habilitation in Frankfurt', text:'Über Kierkegaards Ästhetik; Kontakt mit Horkheimer, Benjamin, Kracauer' },
        { year:'1934–41', title:'Emigration', text:'Oxford, New York, Los Angeles; Zusammenarbeit mit Horkheimer' },
        { year:'1944', title:'Dialektik der Aufklärung', text:'Mit Horkheimer: Hauptwerk der Kritischen Theorie — im kalifornischen Exil geschrieben' },
        { year:'1949', title:'Rückkehr nach Frankfurt', text:'Wiederaufbau des Instituts für Sozialforschung' },
        { year:'1951', title:'Minima Moralia', text:'„Reflexionen aus dem beschädigten Leben" — aphoristische Meisterschaft' },
        { year:'1966', title:'Negative Dialektik', text:'Philosophisches Spätwerk — Dialektik ohne Synthese' },
        { year:'1969', title:'Tod in Visp (Schweiz)', text:'Stirbt an Herzinfarkt; letzte Jahre geprägt von der Konfrontation mit der Studentenbewegung' },
      ])}
    </div></section>

    <section class="lz-content-section"><div class="lz-section-wrap">
      ${renderSubhead('Dialektik der Aufklärung (1944, mit Horkheimer)')}
      <h2 class="lz-h2 reveal">Warum schlägt <em>Aufklärung in Barbarei</em> um?</h2>
      <p class="lz-prose reveal">Die zentrale These: Die Aufklärung — der Prozess der Befreiung durch Vernunft — enthält von Anfang an den Keim ihrer SELBSTZERSTÖRUNG. Die Vernunft, die den Menschen aus Aberglauben und Unmündigkeit befreien sollte, wird selbst zum Instrument der Herrschaft. Faschismus und Stalinismus sind nicht RÜCKFÄLLE hinter die Aufklärung, sondern ihre KONSEQUENZ.</p>

      ${renderMerkboxGrid([
        { icon:'fas fa-cogs', title:'Instrumentelle Vernunft',
          text:'Die Aufklärung hat die Vernunft auf INSTRUMENTELLE Rationalität reduziert: Effizienz, Kontrolle, Berechenbarkeit. „Denken wird zum bloßen Automat, zur Rechenmaschine." Die Frage „WOZU?" (Zweckrationalität) verdrängt die Frage „WARUM?" (Sinnfrage). Die Natur wird zum Material, der Mensch zum Objekt, die Gesellschaft zur Maschine.' },
        { icon:'fas fa-link', title:'Mythos und Aufklärung',
          text:'„Schon der Mythos ist Aufklärung, und: Aufklärung schlägt in Mythologie zurück." (1) Der MYTHOS war bereits ein Versuch, die Natur zu beherrschen (durch Erzählung, Ritual, Opfer). (2) Die AUFKLÄRUNG wird selbst zum Mythos: Der blinde Glaube an Fortschritt, Wissenschaft und Rationalität ist genauso unkritisch wie der Glaube an Götter.' },
        { icon:'fas fa-user-slash', title:'Herrschaft über Natur → Herrschaft über Menschen',
          text:'Die Beherrschung der äußeren Natur (Naturwissenschaft, Technik) schlägt um in die Beherrschung der INNEREN Natur (Triebunterdrückung, Disziplinierung) und der SOZIALEN Natur (Klassenherrschaft, Bürokratie). Auschwitz ist die perfekte Verbindung von technischer Rationalität und moralischer Barbarei — die „Verwaltung des Todes".' },
      ])}

      ${renderFormulaBox({ label:'Adorno, Minima Moralia §18 (1951)', formula:'„Es gibt kein richtiges Leben im falschen."', desc:'Der berühmteste Satz der Kritischen Theorie: In einer falschen (ungerechten, entfremdeten) Gesellschaft kann der Einzelne nicht „richtig" (authentisch, frei) leben — auch nicht durch individuellen Rückzug oder moralische Anstrengung. Die Struktur ist falsch, nicht der Einzelne.' })}
    </div></section>

    <section class="lz-content-section"><div class="lz-section-wrap">
      ${renderSubhead('Kulturindustrie')}
      <h2 class="lz-h2 reveal">Unterhaltung als <em>Herrschaft</em></h2>
      <p class="lz-prose reveal">Das Kapitel „Kulturindustrie — Aufklärung als Massenbetrug" (Dialektik der Aufklärung) analysiert die MASSENMEDIEN (Film, Radio, Musik, Werbung) als Instrumente sozialer Kontrolle:</p>
      ${renderMerkboxGrid([
        { icon:'fas fa-tv', title:'Standardisierung',
          text:'Die Kulturindustrie produziert scheinbar individuelle Produkte (Filme, Songs, Serien), die in Wahrheit STANDARDISIERT sind: dieselben Handlungsmuster, dieselben Emotionen, dieselbe Botschaft. Individualität ist Illusion — Pseudo-Individualisierung. Der Hit klingt „neu", folgt aber dem bewährten Schema.' },
        { icon:'fas fa-brain', title:'Manipulation des Bewusstseins',
          text:'Die Kulturindustrie erzeugt FALSCHE Bedürfnisse: Der Konsument glaubt, er WILL das neueste Produkt — in Wahrheit wurde das Bedürfnis von der Werbung erzeugt. Unterhaltung ist nicht harmlos — sie ist TRAINING für den gesellschaftlichen Gehorsam: wer passiv konsumiert, protestiert nicht.' },
        { icon:'fas fa-recycle', title:'Ewige Wiederkehr des Gleichen (parodiert)',
          text:'Die Kulturindustrie produziert endlos „Neues", das in Wahrheit immer dasselbe ist — die Variation des Immergleichen. Adorno: „Amusement ist die Verlängerung der Arbeit unterm Spätkapitalismus." Man „erholt" sich von der Fabrik/dem Büro, indem man Produkte konsumiert, die einen für die Fabrik/das Büro FITNESS machen.' },
      ])}
      ${renderInfobox({ type:'blue', icon:'fas fa-graduation-cap', title:'Abitur-Hinweis: Kulturindustrie heute',
        body:'Adornos Kulturindustrie-Analyse wird häufig auf die HEUTIGEN Medien angewandt: Social Media als Aufmerksamkeitsökonomie, Algorithmen als Filterblase, Influencer als Pseudo-Individualität, Streaming als Standardisierung des Geschmacks. Prüfungsrelevant: Adornos These auf ein AKTUELLES Beispiel (TikTok, Netflix, Spotify) anwenden und KRITISCH diskutieren.' })}
    </div></section>

    <section class="lz-content-section"><div class="lz-section-wrap">
      ${renderSubhead('Nach Auschwitz')}
      <h2 class="lz-h2 reveal">Philosophie nach dem <em>Zivilisationsbruch</em></h2>
      ${renderFormulaBox({ label:'Adorno, Kulturkritik und Gesellschaft (1951)', formula:'„Nach Auschwitz ein Gedicht zu schreiben,<br>ist barbarisch."', desc:'Der meistzitierte und meistmissverstandene Satz Adornos. Er meinte NICHT: Literatur ist verboten. Sondern: ALLES Denken, Schreiben, Philosophieren muss sich an Auschwitz MESSEN — kann es diesem Ereignis standhalten? Oder ist es bloße Ablenkung, Verdrängung, Beschönigung?' })}
      ${renderMerkboxGrid([
        { icon:'fas fa-exclamation-circle', title:'Neuer kategorischer Imperativ',
          text:'„Hitler hat den Menschen im Stande ihrer Unfreiheit einen neuen kategorischen Imperativ aufgezwungen: ihr Denken und Handeln so einzurichten, dass Auschwitz nicht sich wiederhole, nichts Ähnliches geschehe." (Negative Dialektik). Nicht Kants formaler Imperativ, sondern ein MATERIALER: bezogen auf ein konkretes historisches Ereignis.' },
        { icon:'fas fa-ban', title:'Negative Dialektik — Dialektik ohne Synthese',
          text:'Gegen Hegel: Die Widersprüche werden NICHT aufgehoben. Nach Auschwitz ist keine „Versöhnung" mehr möglich — keine höhere Einheit, die das Leid der Opfer „aufhebt" (rechtfertigt, integriert). Die Negative Dialektik bleibt beim WIDERSPRUCH stehen — sie versöhnt nicht, sie kritisiert. „Das Ganze ist das Unwahre" (gegen Hegel: „Das Wahre ist das Ganze").' },
      ])}
    </div></section>

    <section class="lz-content-section"><div class="lz-section-wrap">
      ${renderSubhead('Testfragen — Abiturniveau')}
      ${renderAccordion([
        { title:'1. Erklären Sie die These „Aufklärung schlägt in Barbarei um" (Dialektik der Aufklärung).',
          content:'<p class="lz-prose"><strong>These:</strong> Die Aufklärung — Befreiung durch Vernunft — enthält den Keim ihrer Selbstzerstörung. (1) Die Vernunft wird auf INSTRUMENTELLE Rationalität reduziert: Effizienz, Kontrolle, Berechenbarkeit — die Frage nach dem SINN wird ausgeblendet. (2) Die Beherrschung der ÄUSSEREN Natur (Wissenschaft, Technik) schlägt um in die Beherrschung der INNEREN Natur (Triebunterdrückung) und der SOZIALEN Natur (Klassenherrschaft). (3) Faschismus ist nicht Rückfall VOR die Aufklärung, sondern ihre perverse VOLLENDUNG: Auschwitz als technisch perfekt organisierte Massenvernichtung — instrumentelle Rationalität ohne moralische Substanz.<br><br><strong>Konsequenz:</strong> Aufklärung muss sich SELBST aufklären — über ihre eigenen Gefahren. Nicht WENIGER Vernunft, sondern KRITISCHE Vernunft — die ihre eigene Tendenz zur Herrschaft reflektiert. „Aufklärung über Aufklärung" ist das Programm der Kritischen Theorie.</p>' },
        { title:'2. Was ist „Kulturindustrie" und ist der Begriff auf heutige Medien anwendbar?',
          content:'<p class="lz-prose"><strong>Adornos Begriff:</strong> „Kulturindustrie" meint die industrielle Produktion von Kultur (Film, Musik, Radio, Werbung) nach den Gesetzen des Marktes. Produkte sind STANDARDISIERT (dieselben Muster), PSEUDO-INDIVIDUALISIERT (scheinbar einzigartig, in Wahrheit austauschbar) und dienen der SOZIALEN KONTROLLE (passive Konsumenten protestieren nicht).<br><br><strong>Anwendung auf heute:</strong> (1) <strong>Algorithmen</strong> (TikTok, Spotify, YouTube): Empfehlungssysteme erzeugen Filterblasen — der Nutzer bekommt, was er „will", aber sein Wollen wird vom Algorithmus geformt. Standardisierung des Geschmacks durch Daten. (2) <strong>Influencer</strong>: Scheinbare Individualität — in Wahrheit reproduzieren sie dieselben Muster (Lifestyle, Beauty, Motivation). Pseudo-Individualismus at its finest. (3) <strong>Streaming</strong>: Netflix-Serien folgen bewährten Formeln (Cliffhanger, Plottwists) — industrielle Produktion von „Content".<br><br><strong>Kritik an Adorno:</strong> (1) PATERNALISMUS: Wer sagt, dass die Konsumenten „manipuliert" werden? Vielleicht wählen sie BEWUSST leichte Unterhaltung nach einem harten Arbeitstag. (2) ELITISMUS: Adorno verachtet Populärkultur — aber warum ist ernste Musik „besser" als Jazz? (3) NEUE MEDIEN ermöglichen auch GEGENKULTUR (Memes, politischer Aktivismus, alternative Medien) — Adorno kannte nur One-Way-Medien.</p>' },
        { title:'3. Was meint Adorno mit „Es gibt kein richtiges Leben im falschen"?',
          content:'<p class="lz-prose"><strong>Die These:</strong> In einer „falschen" (ungerechten, entfremdeten, von Herrschaft durchdrungenen) Gesellschaft kann der Einzelne nicht „richtig" (authentisch, frei, moralisch) leben — auch nicht durch individuellen Rückzug, private Tugend oder persönliche Askese. Die STRUKTUREN sind falsch — nicht (nur) die Individuen.<br><br><strong>Beispiel:</strong> Auch wer „fair" einkauft, lebt in einer Wirtschaftsordnung, die auf globaler Ausbeutung beruht. Auch wer „tolerant" denkt, ist von Vorurteilen geprägt, die die Gesellschaft in ihn eingeschrieben hat. Individuelles Gutsein ändert nichts an den STRUKTUREN — es ist bestenfalls Symptombekämpfung, schlimmstenfalls Selbsttäuschung.<br><br><strong>Gegen wen?</strong> (1) Gegen HEIDEGGER: „Eigentlichkeit" als individueller Ausweg aus dem Man ist Illusion — die Gesellschaft lässt sich nicht durch persönliche Entscheidungen überwinden. (2) Gegen EXISTENZIALISMUS: Sartres „authentische Wahl" ignoriert die gesellschaftlichen Bedingungen, die die Wahl vorgeben. (3) Gegen REFORMISMUS: Kleine Verbesserungen innerhalb des Systems stabilisieren das System — statt es zu verändern.<br><br><strong>Problem:</strong> Wenn es kein richtiges Leben im falschen gibt — wie soll man dann HANDELN? Adorno hat keine einfache Antwort. Sein Programm: KRITIK — die bestehende Ordnung permanent in Frage stellen, ohne eine „richtige" Alternative anbieten zu müssen. Kritik als Haltung, nicht als Rezept.</p>' },
        { title:'4. Vergleichen Sie Adornos „Neuen kategorischen Imperativ" mit Kants Kategorischem Imperativ.',
          content:'<p class="lz-prose"><strong>Kant:</strong> „Handle nur nach derjenigen Maxime, durch die du zugleich wollen kannst, dass sie ein allgemeines Gesetz werde." FORMAL: keine inhaltliche Bestimmung, nur die FORM (Verallgemeinerbarkeit). A PRIORI: unabhängig von Erfahrung, historischem Kontext. UNIVERSELL: gilt für alle vernünftigen Wesen zu allen Zeiten.<br><br><strong>Adorno:</strong> „Denken und Handeln so einzurichten, dass Auschwitz nicht sich wiederhole." MATERIAL: bezogen auf ein KONKRETES historisches Ereignis. A POSTERIORI: nur nach der ERFAHRUNG von Auschwitz formulierbar. HISTORISCH: gilt für diese Menschheit nach diesem Zivilisationsbruch.<br><br><strong>Adornos Kritik an Kant:</strong> Kants formaler Imperativ ist zu ABSTRAKT — er konnte Auschwitz nicht verhindern. Die Nazis konnten ihre Handlungsmaxime sogar „verallgemeinern" (das Rassengesetz als „allgemeines Gesetz"). Ein Imperativ, der Auschwitz nicht ausschließt, ist unzureichend. Adornos Imperativ ist KONKRETER: Er benennt das absolute Böse und macht seine Verhinderung zur obersten Pflicht.<br><br><strong>Problem:</strong> Adornos Imperativ ist emotional überzeugend — aber philosophisch schwächer als Kants: Er ist nicht begründet (WARUM soll Auschwitz nicht wiederholt werden? Weil es schrecklich war — aber das ist ein Gefühl, kein Argument). Kant würde sagen: Der materiale Imperativ braucht den formalen als Grundlage. Adorno würde sagen: Nach Auschwitz genügt der formale nicht mehr — die ERFAHRUNG des Grauens muss in die Ethik eingehen.</p>' },
      ])}
    </div></section>

    <section class="lz-content-section" style="padding-top:0;"><div class="lz-section-wrap">
      ${renderPageNav({
        prev:{ label:'Heidegger', link:`${BASE}/themen/gegenwart/heidegger` },
        next:{ label:'Foucault', link:`${BASE}/themen/gegenwart/foucault` },
      }, BASE)}
    </div></section>
    ${footerHTML(this.router)}
    `;
  }
  init() { i18n.init(); initScrollReveal(); refreshScrollReveal(); initInteractive(document); }
  cleanup() {}
}