// pages/projekte/lernzettel/faecher/ethik/themen/aufklärung/voltaire.js
// ══════════════════════════════════════════════════════════════════
// Kapitel 7.1 — Voltaire (1694–1778)
// Religionskritik, Toleranz, Candide, Deismus
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

export default class VoltairePage {
  constructor(router) { this.router = router; }
  render() {
    ensureComponentsCSS();
    loadComponentCSS('pages/projekte/lernzettel/styles/sub.css');
    const el = document.createElement('div');
    el.className = 'page page-voltaire';
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
          <span>Voltaire</span>
        </nav>
        <h1 class="lz-sub-title"><em>Voltaire</em> — Vernunft, Toleranz &amp; Spott</h1>
        <p class="lz-sub-desc">
          Der brillanteste Polemiker der Aufklärung kämpfte mit Witz und Ironie
          gegen religiösen Fanatismus, Aberglaube und Despotie —
          und wurde zur Symbolfigur des aufgeklärten Europa.
        </p>
        ${renderTags(['Kapitel 7.1','1694–1778','Paris · London · Ferney','Toleranz · Deismus · Candide','Abitur 2026'])}
      </div>
    </section>

    <section class="lz-content-section"><div class="lz-section-wrap">
      ${renderSubhead('Biographisches')}
      <h2 class="lz-h2 reveal">Der <em>König der Philosophen</em></h2>
      <p class="lz-prose reveal">François-Marie Arouet, genannt <strong>Voltaire</strong>, wurde 1694 in Paris als Sohn eines Notars geboren. Sein Leben war ein Kampf gegen <strong>l'infâme</strong> — religiösen Fanatismus, kirchliche Zensur, willkürliche Justiz. Er war kein systematischer Philosoph, sondern ein <strong>philosophischer Publizist</strong> — brillant im Essay, Roman, Pamphlet und Brief.</p>
      ${renderVTimeline([
        { year:'1694', title:'Geburt in Paris', text:'Jesuitenkolleg Louis-le-Grand; früher literarischer Ruhm' },
        { year:'1717–18', title:'Bastille', text:'Inhaftierung wegen satirischer Verse gegen den Regenten' },
        { year:'1726–29', title:'Exil in England', text:'Begegnung mit Locke, Newton, englischer Toleranz; Lettres philosophiques' },
        { year:'1755', title:'Erdbeben von Lissabon', text:'Erschüttert seinen Optimismus; Poème sur le désastre de Lisbonne' },
        { year:'1759', title:'Candide', text:'Satire auf Leibniz\' „beste aller möglichen Welten"' },
        { year:'1763', title:'Traité sur la tolérance', text:'Kampf um Rehabilitation des unschuldig hingerichteten Jean Calas' },
        { year:'1778', title:'Tod in Paris', text:'Triumphale Rückkehr; stirbt 83-jährig' },
      ])}
    </div></section>

    <section class="lz-content-section"><div class="lz-section-wrap">
      ${renderSubhead('Religionskritik und Deismus')}
      <h2 class="lz-h2 reveal"><em>Écrasez l'infâme!</em></h2>
      <p class="lz-prose reveal">Voltaires Kampfruf richtet sich nicht gegen Gott, sondern gegen <strong>organisierten religiösen Fanatismus</strong>: Inquisition, Ketzerverfolgung, Religionskriege, Zensur. Er war kein Atheist — er war <strong>Deist</strong>.</p>
      ${renderMerkboxGrid([
        { icon:'fas fa-sun', title:'Deismus — Gott als Uhrmacher',
          text:'Voltaire glaubte an einen Schöpfergott, der die Welt erschaffen und mit Naturgesetzen ausgestattet hat — danach aber nicht mehr eingreift. Kein persönlicher Gott, keine Offenbarung, keine Wunder. „Das Universum macht mich verlegen; ich kann mir nicht vorstellen, dass diese Uhr existiert und kein Uhrmacher da ist."' },
        { icon:'fas fa-ban', title:'Kritik der Offenbarungsreligion',
          text:'Die Bibel: voller Widersprüche, historischer Fehler, moralisch fragwürdiger Geschichten. Die Kirchengeschichte: Kreuzzüge, Inquisition, Bartholomäusnacht. „Wenn Gott den Menschen nach seinem Bilde geschaffen hat, haben wir es ihm reichlich vergolten."' },
        { icon:'fas fa-pray', title:'Natürliche Religion',
          text:'Was bleibt? Wenige vernünftige Grundsätze: Es gibt einen Gott (Uhrmacher-Argument), Gerechtigkeit ist geboten, die Goldene Regel gilt universal. Alles Dogmatische ist Priesterbetrug.' },
        { icon:'fas fa-users', title:'„Wenn Gott nicht existierte…"',
          text:'Pragmatisches Argument: Auch wenn Gottes Existenz nicht beweisbar ist, braucht die Gesellschaft die IDEE eines gerechten Gottes — als moralische Sanktion für die einfachen Menschen.' },
      ])}
      ${renderFormulaBox({ label:'Voltaire, 1769', formula:'„Si Dieu n\'existait pas, il faudrait l\'inventer."<br>(Wenn Gott nicht existierte, müsste man ihn erfinden.)', desc:'Kein Glaubensbekenntnis, sondern pragmatisches Argument.' })}
    </div></section>

    <section class="lz-content-section"><div class="lz-section-wrap">
      ${renderSubhead('Toleranz — Traité sur la tolérance (1763)')}
      <h2 class="lz-h2 reveal">Der <em>Fall Calas</em></h2>
      <p class="lz-prose reveal">1761 wurde der protestantische Kaufmann <strong>Jean Calas</strong> in Toulouse unschuldig zum Tode verurteilt und aufs Rad geflochten — beschuldigt, seinen Sohn ermordet zu haben, weil dieser zum Katholizismus konvertieren wollte. Voltaire erkannte den Justizmord und kämpfte drei Jahre um die Rehabilitation — mit Erfolg (1765).</p>
      ${renderMerkboxGrid([
        { icon:'fas fa-balance-scale', title:'Toleranz als Vernunftgebot',
          text:'„Toleranz hat nie einen Bürgerkrieg verursacht; Intoleranz hat die Erde mit Leichen bedeckt." Wer seine eigene Fehlbarkeit erkennt, muss tolerant sein.' },
        { icon:'fas fa-globe', title:'Universale Toleranz',
          text:'Toleranz aller Religionen gegeneinander — nicht weil alle „wahr" sind, sondern weil keine beweisen kann, die einzig wahre zu sein. Religiöse Vielfalt ist Zeichen einer gesunden Gesellschaft.' },
        { icon:'fas fa-fist-raised', title:'Grenzen der Toleranz',
          text:'Fanatismus selbst wird nicht toleriert — „Toleranz gegenüber Intoleranz" ist selbstzerstörerisch. Voltaire nimmt Poppers Toleranz-Paradox (1945) vorweg.' },
      ])}
      ${renderInfobox({ type:'blue', icon:'fas fa-graduation-cap', title:'Abitur-Hinweis: Voltaire und Toleranz',
        body:'Kernpunkte: (1) Toleranz aus <strong>Fehlbarkeit</strong> begründet. (2) Toleranz als <strong>Vernunftgebot</strong>. (3) <strong>Grenzen</strong>: Fanatismus wird nicht toleriert. Vergleich mit Lessings Ringparabel ist prüfungsrelevant.' })}
    </div></section>

    <section class="lz-content-section"><div class="lz-section-wrap">
      ${renderSubhead('Candide (1759)')}
      <h2 class="lz-h2 reveal">Gegen die <em>beste aller möglichen Welten</em></h2>
      <p class="lz-prose reveal"><em>Candide ou l'Optimisme</em> parodiert <strong>Leibniz' Theodizee</strong>. Der naive Candide erlebt Katastrophen (Erdbeben, Krieg, Inquisition, Sklaverei), begleitet von Lehrer <strong>Pangloss</strong>, der trotz allem behauptet: „Alles ist zum Besten."</p>
      ${renderMerkboxGrid([
        { icon:'fas fa-user', title:'Pangloss = Leibniz-Parodie',
          text:'Dr. Pangloss deutet jede Katastrophe als „zum Besten": Die Syphilis? „Ohne sie hätten wir keine Schokolade!" Das Erdbeben von Lissabon? „Notwendig im besten Gesamtplan."' },
        { icon:'fas fa-seedling', title:'„Il faut cultiver notre jardin"',
          text:'Der Schluss: Candide gibt den philosophischen Optimismus auf. „Wir müssen unseren Garten bestellen." Nicht große Metaphysik, sondern konkrete praktische Arbeit — bescheiden, nützlich, ehrlich.' },
        { icon:'fas fa-globe-americas', title:'Eldorado — Die ironische Utopie',
          text:'Candide entdeckt das paradiesische Eldorado — und VERLÄSST es, weil er sich langweilt. Voltaires Pointe: Das Paradies langweilt — der Mensch braucht den Mangel, um tätig zu sein.' },
      ])}
      ${renderCompare({
        titleA:'Leibniz (Theodizee)',
        titleB:'Voltaire (Candide)',
        listA:['Gott wählte die <strong>beste</strong> aller möglichen Welten','Übel ist <strong>notwendig</strong> für das Gesamtgute','Philosophischer <strong>Optimismus</strong>','Systematische Metaphysik'],
        listB:['Die Welt ist voller <strong>sinnlosen Leidens</strong>','Übel lässt sich <strong>nicht rechtfertigen</strong>','Pragmatischer <strong>Meliorismus</strong>','Satirischer Roman'],
      })}
    </div></section>

    <section class="lz-content-section"><div class="lz-section-wrap">
      ${renderSubhead('Testfragen — Abiturniveau')}
      ${renderAccordion([
        { title:'1. Erklären Sie Voltaires Deismus und vergleichen Sie ihn mit dem christlichen Theismus.',
          content:'<p class="lz-prose"><strong>Deismus:</strong> Gott existiert als <strong>Schöpfer/Uhrmacher</strong> — hat die Welt erschaffen, greift nicht ein. Kein persönlicher Gott, keine Offenbarung, keine Wunder. Erkennbar durch Vernunft (Naturordnung → Ordner), nicht durch Bibel.<br><br><strong>Theismus:</strong> Gott ist <strong>persönlich</strong>, greift ein (Wunder, Inkarnation), hat sich offenbart (Bibel, Christus), hat einen Heilsplan. Kirche vermittelt.<br><br><strong>Voltaires Kritik:</strong> (1) Offenbarung unglaubwürdig (Widersprüche, moralisch fragwürdig). (2) Wunder widersprechen Naturgesetzen. (3) Kirchengeschichte = Katalog von Verbrechen. (4) Theismus führt zu Fanatismus.</p>' },
        { title:'2. Analysieren Sie Candide als Antwort auf Leibniz\' Theodizee.',
          content:'<p class="lz-prose"><strong>Leibniz:</strong> Gott wählte die beste aller möglichen Welten — Übel ist notwendig für das Gesamtgute.<br><br><strong>Voltaires Kritik:</strong> Pangloss parodiert Leibniz, indem er jede Katastrophe umdeutet. Das Erdbeben von Lissabon (1755, ca. 30.000 Tote) war Schlüsselerlebnis: Wie kann ein guter Gott Zehntausende unschuldige Menschen töten? Leibniz\' Antwort erscheint als <strong>zynische Verhöhnung</strong> der Opfer.<br><br><strong>Voltaires Alternative:</strong> Kein System, sondern <strong>praktisches Handeln</strong>: „Il faut cultiver notre jardin." Statt Übel zu rechtfertigen, soll man sie bekämpfen — durch Arbeit, Justizreform, Toleranz. <strong>Meliorismus</strong>: Die Welt ist nicht die beste, aber sie kann besser gemacht werden.<br><br><strong>Bewertung:</strong> Voltaire trifft Leibniz rhetorisch vernichtend. Philosophisch bleibt die Frage offen: Leibniz behauptete nicht, dass es kein Leid gibt, sondern dass kein besseres Arrangement möglich ist.</p>' },
        { title:'3. Vergleichen Sie Voltaires Toleranzverständnis mit Lessings Ringparabel.',
          content:'<p class="lz-prose"><strong>Voltaire:</strong> Toleranz als <strong>Vernunftgebot</strong> aus menschlicher Fehlbarkeit: Niemand kann sicher wissen, welche Religion wahr ist → jeder muss andere dulden. Grenze: Fanatismus wird nicht toleriert.<br><br><strong>Lessing (Nathan, 1779):</strong> Drei Ringe — drei Religionen. Keiner kann beweisen, den echten zu haben. Der Richter rät: Jeder soll durch <strong>moralisches Handeln</strong> beweisen, dass sein Ring echt ist. Toleranz als <strong>Wettstreit der Tugend</strong>.<br><br><strong>Vergleich:</strong> (1) Beide begründen Toleranz epistemisch (Unwissenheit). (2) Voltaire ist <strong>pragmatischer</strong> (verhindert Blutvergießen), Lessing <strong>moralischer</strong> (Wettstreit der Tugend). (3) Voltaire bleibt Deist (natürliche Religion = wahrer Kern), Lessing geht weiter: Alle Religionen gleich (un)berechtigt. (4) Beide nehmen Poppers Toleranz-Paradox vorweg.</p>' },
        { title:'4. Was bedeutet „Écrasez l\'infâme!" und wogegen richtet sich Voltaire konkret?',
          content:'<p class="lz-prose"><strong>L\'infâme</strong> = religiöser Fanatismus und institutionalisierte Intoleranz. NICHT gegen Gott (Voltaire war Deist), NICHT gegen Religion allgemein, sondern konkret gegen:<br><br>(1) <strong>Kirchliche Intoleranz:</strong> Inquisition, Ketzerverfolgung, Bartholomäusnacht (1572, ca. 30.000 ermordete Hugenotten).<br>(2) <strong>Aberglauben:</strong> Wunderglaube, Reliquienkult, Hexenverfolgung.<br>(3) <strong>Justizwillkür:</strong> Fall Calas, Fall La Barre (junger Mann wegen „Blasphemie" hingerichtet).<br>(4) <strong>Zensur:</strong> Voltaires Werke regelmäßig verboten; er publizierte unter Pseudonymen.<br><br><strong>Philosophische Bedeutung:</strong> Voltaire verkörpert die <strong>engagierte Philosophie</strong> — nicht akademische Übung, sondern öffentlicher Kampf für Menschenrechte, Toleranz und Gerechtigkeit. Sartre und Camus werden sich darauf berufen.</p>' },
      ])}
    </div></section>

    <section class="lz-content-section" style="padding-top:0;"><div class="lz-section-wrap">
      ${renderPageNav({
        prev:{ label:'Empirismus', link:`${BASE}/themen/neuzeit/empirismus`},
        next:{ label:'La Mettrie', link:`${BASE}/themen/aufklaerung/la-mettrie`},
      }, BASE)}
    </div></section>
    ${footerHTML(this.router)}
    `;
  }
  init() { i18n.init(); initScrollReveal(); refreshScrollReveal(); initInteractive(document); }
  cleanup() {}
}