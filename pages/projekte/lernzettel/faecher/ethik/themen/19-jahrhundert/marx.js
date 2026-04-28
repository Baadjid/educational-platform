// pages/projekte/lernzettel/faecher/ethik/themen/19-jahrhundert/marx.js
// ══════════════════════════════════════════════════════════════════
// Kapitel 9.1 — Karl Marx (1818–1883)
// Entfremdung, Historischer Materialismus, Mehrwert, Klassenkampf
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

const KAP_COLOR = '#b7410e';
const KAP_COLOR_RGB = '183, 65, 14';

export default class MarxPage {
  constructor(router) { this.router = router; }
  render() {
    ensureComponentsCSS();
    loadComponentCSS('pages/projekte/lernzettel/styles/sub.css');
    const el = document.createElement('div');
    el.className = 'page page-marx';
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
          <span>Marx</span>
        </nav>
        <h1 class="lz-sub-title"><em>Karl Marx</em> — Entfremdung &amp; Kapital</h1>
        <p class="lz-sub-desc">
          „Die Philosophen haben die Welt nur verschieden interpretiert;
          es kommt darauf an, sie zu verändern." Marx drehte Hegel auf die Füße
          und machte aus der Philosophie eine Waffe der sozialen Revolution.
        </p>
        ${renderTags(['Kapitel 9.1','1818–1883','Trier · Paris · London','Entfremdung · Mehrwert · Historischer Materialismus','Abitur 2026'])}
      </div>
    </section>

    <section class="lz-content-section"><div class="lz-section-wrap">
      ${renderSubhead('Biographisches')}
      <h2 class="lz-h2 reveal">Vom Philosophen zum <em>Revolutionär</em></h2>
      <p class="lz-prose reveal">Karl Marx (1818–1883) wurde in <strong>Trier</strong> als Sohn eines jüdischen Anwalts geboren. Er studierte Jura und Philosophie in Bonn und Berlin, wurde Journalist, wurde ausgewiesen — erst aus Deutschland, dann aus Frankreich, dann aus Belgien. Ab 1849 lebte er im Londoner Exil, wo er im Lesesaal des British Museum sein Lebenswerk schrieb: <em>Das Kapital</em>.</p>
      ${renderVTimeline([
        { year:'1818', title:'Geburt in Trier', text:'Vater Anwalt; jüdische Familie, zum Protestantismus konvertiert' },
        { year:'1841', title:'Promotion in Jena', text:'Dissertation über Demokrit und Epikur; Junghegelianer' },
        { year:'1844', title:'Ökonomisch-philosophische Manuskripte', text:'Entfremdungstheorie; Beginn der Freundschaft mit Engels' },
        { year:'1845', title:'Thesen über Feuerbach', text:'„Die Philosophen haben die Welt nur verschieden interpretiert…"' },
        { year:'1848', title:'Kommunistisches Manifest', text:'Mit Engels: „Ein Gespenst geht um in Europa…"' },
        { year:'1867', title:'Das Kapital, Band I', text:'Analyse des kapitalistischen Produktionsprozesses; Bände II+III postum (Engels)' },
        { year:'1883', title:'Tod in London', text:'Grab auf dem Highgate Cemetery; Grabinschrift: 11. Feuerbachthese' },
      ])}
    </div></section>

    <section class="lz-content-section"><div class="lz-section-wrap">
      ${renderSubhead('Historischer Materialismus')}
      <h2 class="lz-h2 reveal">Hegel <em>vom Kopf auf die Füße</em> gestellt</h2>
      <p class="lz-prose reveal">Marx übernimmt Hegels Dialektik, dreht aber die Grundlage um: Nicht der GEIST bestimmt die materielle Wirklichkeit (Idealismus), sondern die <strong>materiellen Lebensverhältnisse</strong> bestimmen das Bewusstsein (Materialismus). „Es ist nicht das Bewusstsein der Menschen, das ihr Sein bestimmt, sondern umgekehrt ihr gesellschaftliches Sein, das ihr Bewusstsein bestimmt."</p>

      ${renderMerkboxGrid([
        { icon:'fas fa-building', title:'Basis und Überbau',
          text:'Die Gesellschaft besteht aus: (1) BASIS (ökonomische Struktur): Produktionsverhältnisse — wem gehören die Produktionsmittel? Wer arbeitet für wen? (2) ÜBERBAU: Recht, Staat, Religion, Philosophie, Kunst, Moral — alles, was die Basis legitimiert und stabilisiert. Der Überbau ist ABHÄNGIG von der Basis: „Das Sein bestimmt das Bewusstsein."' },
        { icon:'fas fa-cogs', title:'Produktivkräfte und Produktionsverhältnisse',
          text:'Produktivkräfte = Arbeitskraft, Technologie, Wissen. Produktionsverhältnisse = Eigentumsverhältnisse (wem gehören die Fabriken?). Wenn die Produktivkräfte sich entwickeln (z.B. Industrialisierung), geraten sie in Widerspruch zu den bestehenden Produktionsverhältnissen (Feudalismus). Ergebnis: REVOLUTION — neue Produktionsverhältnisse (Kapitalismus).' },
        { icon:'fas fa-fist-raised', title:'Klassenkampf',
          text:'„Die Geschichte aller bisherigen Gesellschaft ist die Geschichte von Klassenkämpfen." Freie vs. Sklaven, Patrizier vs. Plebejer, Feudalherren vs. Leibeigene, Bourgeoisie vs. Proletariat. Der Kapitalismus erzeugt seinen eigenen Totengräber: das Proletariat, das sich organisiert und die Produktionsmittel vergesellschaftet.' },
        { icon:'fas fa-flag', title:'Kommunismus als Endziel',
          text:'Nach der proletarischen Revolution: (1) Diktatur des Proletariats (Übergangsphase). (2) Klassenlose Gesellschaft — kein Privateigentum an Produktionsmitteln, keine Ausbeutung, keine Entfremdung. (3) „Absterben" des Staates — in der klassenlosen Gesellschaft braucht man keinen Staat mehr.' },
      ])}

      ${renderFormulaBox({ label:'Marx, Vorwort zur Kritik der Politischen Ökonomie (1859)', formula:'„Es ist nicht das Bewusstsein der Menschen,<br>das ihr Sein bestimmt, sondern umgekehrt<br>ihr gesellschaftliches Sein,<br>das ihr Bewusstsein bestimmt."', desc:'Die Grundformel des Historischen Materialismus: Nicht Ideen machen Geschichte, sondern die materiellen Verhältnisse — Ökonomie, Technologie, Eigentumsverhältnisse.' })}
    </div></section>

    <section class="lz-content-section"><div class="lz-section-wrap">
      ${renderSubhead('Entfremdung (Ökonomisch-philosophische Manuskripte, 1844)')}
      <h2 class="lz-h2 reveal">Vier Dimensionen der <em>Entfremdung</em></h2>
      <p class="lz-prose reveal">Der junge Marx analysiert die <strong>Entfremdung</strong> (Entäußerung) des Arbeiters im Kapitalismus — eine Säkularisierung von Hegels „Entfremdung des Geistes" und Feuerbachs Religionskritik:</p>

      ${renderTable({
        headers:['Dimension','Entfremdung von…','Beschreibung'],
        rows:[
          ['<strong>1. Produkt</strong>','Seinem Arbeitsprodukt','Der Arbeiter produziert Waren, die ihm nicht gehören — je mehr er produziert, desto ärmer wird er. Das Produkt steht ihm als fremde Macht gegenüber.'],
          ['<strong>2. Tätigkeit</strong>','Seiner Arbeitstätigkeit','Die Arbeit ist nicht Selbstverwirklichung, sondern Zwang — der Arbeiter fühlt sich bei der Arbeit nicht als Mensch, sondern als Tier. Er arbeitet, um zu leben — statt zu leben, um zu arbeiten.'],
          ['<strong>3. Gattungswesen</strong>','Seinem Gattungswesen (Menschsein)','Der Mensch ist von Natur aus schöpferisch, frei, sozial. Im Kapitalismus wird er zum Anhängsel der Maschine — sein Menschsein wird ihm genommen.'],
          ['<strong>4. Mitmenschen</strong>','Den anderen Menschen','Die Konkurrenz macht aus Mitmenschen Rivalen. Die Beziehungen werden warenförmig — alles wird zum Tauschwert, auch Freundschaft und Liebe.'],
        ],
        highlight:[0,2],
      })}
    </div></section>

    <section class="lz-content-section"><div class="lz-section-wrap">
      ${renderSubhead('Mehrwerttheorie (Das Kapital, 1867)')}
      <h2 class="lz-h2 reveal">Woher kommt der <em>Profit</em>?</h2>
      ${renderMerkboxGrid([
        { icon:'fas fa-coins', title:'Mehrwert (Surplus Value)',
          text:'Der Arbeiter produziert in 8 Stunden mehr Wert, als er als Lohn erhält. Die Differenz = MEHRWERT — der Profit des Kapitalisten. Beispiel: Der Arbeiter schafft in 4 Stunden den Gegenwert seines Lohns. Die restlichen 4 Stunden arbeitet er „umsonst" — für den Kapitalisten. Ausbeutung ist kein moralischer Vorwurf, sondern eine STRUKTURELLE Eigenschaft des Kapitalismus.' },
        { icon:'fas fa-chart-line', title:'Akkumulation und Krise',
          text:'Der Kapitalist reinvestiert den Mehrwert → mehr Maschinen, weniger Arbeiter → sinkende Profitrate (tendentieller Fall der Profitrate). Gleichzeitig: Konzentration des Kapitals in immer weniger Händen, Verelendung des Proletariats, periodische Überproduktionskrisen. Der Kapitalismus erzeugt seine eigene Krise.' },
        { icon:'fas fa-mask', title:'Warenfetischismus',
          text:'Im Kapitalismus erscheinen soziale Beziehungen als Beziehungen zwischen DINGEN (Waren). Der Wert einer Ware erscheint als „natürliche Eigenschaft" des Dings — nicht als geronnene menschliche Arbeit. Die gesellschaftlichen Verhältnisse werden unsichtbar → Fetischismus: Die Ware wird zum Götzen.' },
      ])}
    </div></section>

    <section class="lz-content-section"><div class="lz-section-wrap">
      ${renderSubhead('Marx und Hegel')}
      ${renderCompare({
        titleA:'Hegel — Idealismus',
        titleB:'Marx — Materialismus',
        listA:['Das <strong>Bewusstsein</strong> bestimmt das Sein','Die Geschichte ist Fortschritt des <strong>Geistes</strong>','Widersprüche werden im <strong>Begriff</strong> aufgehoben','Der Staat ist die „Wirklichkeit der sittlichen Idee"','Philosophie = <strong>Erkenntnis</strong>'],
        listB:['Das <strong>Sein</strong> bestimmt das Bewusstsein','Die Geschichte ist Kampf der <strong>Klassen</strong>','Widersprüche werden durch <strong>Revolution</strong> aufgehoben','Der Staat ist Instrument der <strong>herrschenden Klasse</strong>','Philosophie = <strong>Veränderung</strong>'],
      })}
      ${renderFormulaBox({ label:'Marx, Thesen über Feuerbach, Nr. 11 (1845)', formula:'„Die Philosophen haben die Welt nur verschieden<br>interpretiert; es kommt darauf an, sie zu verändern."', desc:'Grabinschrift und Programm: Philosophie darf nicht bei der Theorie stehenbleiben — sie muss Praxis werden.' })}
    </div></section>

    <section class="lz-content-section"><div class="lz-section-wrap">
      ${renderSubhead('Testfragen — Abiturniveau')}
      ${renderAccordion([
        { title:'1. Erklären Sie Marx\' vier Dimensionen der Entfremdung.',
          content:'<p class="lz-prose"><strong>(1) Entfremdung vom Produkt:</strong> Der Arbeiter produziert Waren, die ihm nicht gehören. Je mehr er produziert, desto ärmer wird er — das Produkt steht ihm als fremde Macht gegenüber.<br><br><strong>(2) Entfremdung von der Tätigkeit:</strong> Die Arbeit ist nicht Selbstverwirklichung, sondern erzwungene Lohnarbeit. Der Arbeiter fühlt sich „bei sich" nur in der Freizeit, nicht bei der Arbeit. Die spezifisch menschliche Tätigkeit (freie, schöpferische Arbeit) wird zum bloßen Mittel des Überlebens.<br><br><strong>(3) Entfremdung vom Gattungswesen:</strong> Der Mensch ist von Natur aus ein schöpferisches, freies, soziales Wesen. Im Kapitalismus wird er zum Anhängsel der Maschine — sein Menschsein wird ihm geraubt.<br><br><strong>(4) Entfremdung von den Mitmenschen:</strong> Konkurrenz ersetzt Solidarität. Menschen werden zu Rivalen auf dem Arbeitsmarkt. Auch persönliche Beziehungen werden „warenförmig" — alles hat einen Tauschwert.<br><br><strong>Pointe:</strong> Entfremdung ist keine subjektive Befindlichkeit, sondern eine <strong>objektive Struktur</strong> des Kapitalismus. Man kann entfremdet sein, ohne es zu bemerken — gerade darin besteht die Macht der Ideologie.</p>' },
        { title:'2. Erklären Sie das Basis-Überbau-Modell und diskutieren Sie seine Stärken und Schwächen.',
          content:'<p class="lz-prose"><strong>Modell:</strong> Die ökonomische Basis (Produktionsverhältnisse: Eigentumsverhältnisse, Klassenstruktur) bestimmt den Überbau (Recht, Staat, Religion, Philosophie, Kunst, Moral). Der Überbau legitimiert und stabilisiert die Basis — er ist ihr „ideologischer Reflex".<br><br><strong>Stärken:</strong> (1) Machtfrage: Wer die Produktionsmittel besitzt, bestimmt auch die Gesetze, die Medien, die Moral. Das ist empirisch oft zutreffend (Lobbying, Medienkonzentration, politische Einflussnahme). (2) Entmystifizierung: Ideen (Menschenrechte, Religion, Demokratie) werden nicht als zeitlose Wahrheiten, sondern als historische Produkte bestimmter Machtverhältnisse betrachtet.<br><br><strong>Schwächen:</strong> (1) <strong>Ökonomischer Reduktionismus:</strong> Nicht alles im Überbau ist direkt von der Basis bestimmt — Kunst, Religion, Wissenschaft haben eigene Dynamiken. (2) <strong>Einbahnstraße:</strong> Das Modell ist zu starr — der Überbau wirkt auch auf die Basis zurück (Weber: Die protestantische Ethik als Motor des Kapitalismus). (3) <strong>Vorhersagekraft:</strong> Marx prognostizierte die Revolution in den entwickelten Industrieländern — sie kam in rückständigen Agrarländern (Russland, China). (4) Engels korrigierte: „Wechselwirkung" zwischen Basis und Überbau — die Basis bestimmt „in letzter Instanz", nicht monokausal.</p>' },
        { title:'3. Vergleichen Sie Marx\' und Hegels Geschichtsphilosophie.',
          content:'<p class="lz-prose"><strong>Gemeinsamkeit:</strong> Beide sehen die Geschichte als gesetzmäßigen, dialektischen Prozess mit einem Ziel. Beide nutzen die Dialektik (Widerspruch → Aufhebung → höhere Einheit).<br><br><strong>Unterschiede:</strong><br>(1) <strong>Motor:</strong> Hegel: Der Geist (Weltgeist) treibt die Geschichte. Marx: Die materiellen Verhältnisse (Produktivkräfte vs. Produktionsverhältnisse) treiben sie.<br>(2) <strong>Subjekt:</strong> Hegel: Die „Weltseele" (großen Individuen als „Geschäftsführer des Weltgeistes"). Marx: Die KLASSEN (Bourgeoisie vs. Proletariat) als kollektive Akteure.<br>(3) <strong>Ziel:</strong> Hegel: Absolutes Wissen — der Geist erkennt sich selbst. Marx: Klassenlose Gesellschaft — Aufhebung der Entfremdung, des Privateigentums, des Staates.<br>(4) <strong>Methode:</strong> Hegel: Dialektik des Begriffs (geistig). Marx: Dialektik der materiellen Verhältnisse (ökonomisch).<br>(5) <strong>Praxis:</strong> Hegel: „Die Eule der Minerva fliegt in der Dämmerung" — Philosophie erkennt rückblickend. Marx: „Es kommt darauf an, die Welt zu verändern" — Philosophie als Praxis, Revolution.</p>' },
        { title:'4. Was ist „Warenfetischismus" und warum ist er philosophisch bedeutsam?',
          content:'<p class="lz-prose"><strong>Warenfetischismus</strong> (Das Kapital I, Kap. 1.4): Im Kapitalismus erscheinen gesellschaftliche Beziehungen zwischen Menschen als Beziehungen zwischen DINGEN (Waren). Der Wert einer Ware scheint eine „natürliche Eigenschaft" des Dings zu sein — wie seine Farbe oder sein Gewicht. In Wirklichkeit ist der Wert <strong>geronnene menschliche Arbeit</strong>: gesellschaftlich, historisch, veränderbar.<br><br><strong>Beispiel:</strong> Ein iPhone „kostet" 1000€ — das scheint eine Eigenschaft des iPhones zu sein. In Wirklichkeit drückt der Preis eine komplexe gesellschaftliche Beziehung aus: die Arbeit der Minenarbeiter (Coltan), der Fabrikarbeiter (Foxconn), der Designer (Cupertino), der Transportarbeiter — plus den Mehrwert, den Apple als Profit einbehält. Der Warenfetisch VERBIRGT diese Beziehungen.<br><br><strong>Philosophische Bedeutung:</strong> (1) <strong>Erkenntniskritik:</strong> Die Warenform ist eine Form von IDEOLOGIE — sie macht die gesellschaftlichen Verhältnisse unsichtbar. (2) <strong>Religionskritik:</strong> Marx vergleicht den Warenfetisch mit dem religiösen Fetisch: Wie der Gläubige das Götzenbild anbetet (das er selbst geschaffen hat), so beten die Kapitalisten die Ware an (die die Arbeiter geschaffen haben). (3) <strong>Adorno/Horkheimer</strong> werden den Warenfetisch zur „Kulturindustrie" erweitern: Auch Kunst, Unterhaltung, Bildung werden zur Ware.</p>' },
      ])}
    </div></section>

    <section class="lz-content-section" style="padding-top:0;"><div class="lz-section-wrap">
      ${renderPageNav({
        prev:{ label:'Schelling', link:`${BASE}/themen/deutscher-idealismus/schelling` },
        next:{ label:'Kierkegaard', link:`${BASE}/themen/19-jahrhundert/kierkegaard` },
      }, BASE)}
    </div></section>
    ${footerHTML(this.router)}
    `;
  }
  init() { i18n.init(); initScrollReveal(); refreshScrollReveal(); initInteractive(document); }
  cleanup() {}
}