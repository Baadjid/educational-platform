// pages/projekte/lernzettel/faecher/ethik/themen/aufklärung/rousseau.js
// ══════════════════════════════════════════════════════════════════
// Kapitel 7.3 — Jean-Jacques Rousseau (1712–1778)
// Gesellschaftsvertrag, Naturzustand, Zivilisationskritik, Erziehung
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

export default class RousseauPage {
  constructor(router) { this.router = router; }
  render() {
    ensureComponentsCSS();
    loadComponentCSS('pages/projekte/lernzettel/styles/sub.css');
    const el = document.createElement('div');
    el.className = 'page page-rousseau';
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
          <span>Rousseau</span>
        </nav>
        <h1 class="lz-sub-title"><em>Rousseau</em> — Natur, Freiheit &amp; Gesellschaftsvertrag</h1>
        <p class="lz-sub-desc">
          „Der Mensch ist frei geboren, und überall liegt er in Ketten."
          Rousseau stellte die Aufklärung auf den Kopf: Nicht die Zivilisation
          befreit den Menschen, sondern sie verdirbt ihn. Seine Lösung:
          ein Gesellschaftsvertrag, der Freiheit und Gemeinschaft versöhnt.
        </p>
        ${renderTags(['Kapitel 7.3', '1712–1778', 'Genf · Paris · Ermenonville', 'Contrat social · Volonté générale · Émile', 'Abitur 2026'])}
      </div>
    </section>

    <section class="lz-content-section"><div class="lz-section-wrap">
      ${renderSubhead('Biographisches')}
      <h2 class="lz-h2 reveal">Der <em>Außenseiter</em> der Aufklärung</h2>
      <p class="lz-prose reveal">Jean-Jacques Rousseau (1712–1778) wurde in <strong>Genf</strong> als Sohn eines Uhrmachers geboren. Seine Mutter starb bei der Geburt. Rousseaus Leben war eine Folge von Brüchen, Fluchten und Konflikten — mit der Kirche, mit den Philosophen, mit der Gesellschaft, mit sich selbst. Er war der einzige große Aufklärer, der die <strong>Aufklärung selbst kritisierte</strong>: Der Fortschritt der Wissenschaften und Künste hat den Menschen nicht besser, sondern schlechter gemacht.</p>
      ${renderVTimeline([
        { year: '1712', title: 'Geburt in Genf', text: 'Mutter stirbt bei der Geburt; Vater flieht, als Jean-Jacques 10 ist' },
        { year: '1742', title: 'Ankunft in Paris', text: 'Kontakt mit Diderot, d\'Alembert, den Enzyklopädisten' },
        { year: '1750', title: 'Discours sur les sciences et les arts', text: 'Preisschrift der Akademie von Dijon: Wissenschaft und Kunst haben die Sitten VERDORBEN' },
        { year: '1755', title: 'Discours sur l\'inégalité', text: 'Zweiter Discours: Über den Ursprung der Ungleichheit unter den Menschen' },
        { year: '1762', title: 'Du contrat social + Émile', text: 'Beide im selben Jahr: Politische Theorie + Erziehungstheorie. Beide sofort verboten' },
        { year: '1770', title: 'Confessions', text: 'Autobiographische Bekenntnisse — radikale Selbstentblößung' },
        { year: '1778', title: 'Tod in Ermenonville', text: 'Vereinsamt; 1794 in den Panthéon überführt — Held der Revolution' },
      ])}
    </div></section>

    <section class="lz-content-section"><div class="lz-section-wrap">
      ${renderSubhead('Zivilisationskritik — Die zwei Discours')}
      <h2 class="lz-h2 reveal">Der Mensch ist von Natur aus <em>gut</em></h2>

      <p class="lz-prose reveal">Rousseaus radikale These: Der Mensch ist <strong>von Natur aus gut</strong> — die <strong>Zivilisation</strong> hat ihn verdorben. „Alles ist gut, wie es aus den Händen des Schöpfers hervorgeht; alles entartet unter den Händen des Menschen" (Émile, erster Satz). Gegen Hobbes: Der Naturzustand ist kein Krieg, sondern ein Zustand friedlicher Unabhängigkeit.</p>

      ${renderMerkboxGrid([
        { icon: 'fas fa-tree', title: 'Der Naturmensch (homme naturel)',
          text: 'Im Naturzustand lebt der Mensch allein, ohne Sprache, ohne Gesellschaft, ohne Eigentum. Er ist kein Wilder im negativen Sinn, sondern ein friedliches, selbstgenügsames Wesen mit zwei angeborenen Gefühlen: amour de soi (gesunde Selbstliebe = Selbsterhaltung) und pitié (natürliches Mitleid). Er ist weder gut noch böse — er ist unschuldig.' },
        { icon: 'fas fa-link', title: 'Der Sündenfall: Eigentum',
          text: '„Der erste, der ein Stück Land einzäunte und sagte: Dies ist mein — und Leute fand, die einfältig genug waren, ihm zu glauben — war der wahre Gründer der bürgerlichen Gesellschaft." (Discours II). Privateigentum → Ungleichheit → Konkurrenz → Herrschaft → Krieg. Die Gesellschaft ist nicht Lösung, sondern Ursache des Übels.' },
        { icon: 'fas fa-masks-theater', title: 'Amour propre — Die Krankheit der Gesellschaft',
          text: 'In der Gesellschaft verwandelt sich die gesunde amour de soi (Selbstliebe) in die krankhafte amour propre (Eigenliebe/Eitelkeit): den Wunsch, von anderen bewundert und beneidet zu werden. Amour propre ist die Quelle von Neid, Eifersucht, Konkurrenz und Heuchelei — aller Übel der Zivilisation.' },
        { icon: 'fas fa-graduation-cap', title: 'Kritik an Wissenschaft und Kunst',
          text: 'Im Ersten Discours (1750) argumentiert Rousseau: Der Fortschritt der Wissenschaften und Künste hat die Sitten nicht verbessert, sondern verschlechtert. Höflichkeit ist Heuchelei, Gelehrsamkeit ist Eitelkeit, Luxus ist Verderbnis. Rom war tugendhaft, solange es einfach war — es verfiel mit dem Luxus.' },
      ])}

      ${renderFormulaBox({
        label: 'Rousseau, Du contrat social I, 1 (1762)',
        formula: '„L\'homme est né libre, et partout il est dans les fers."<br>(Der Mensch ist frei geboren,<br>und überall liegt er in Ketten.)',
        desc: 'Der berühmteste Satz der politischen Philosophie. Die Frage: Wie können die Ketten LEGITIMIERT werden? Rousseaus Antwort: durch den Gesellschaftsvertrag.'
      })}
    </div></section>

    <section class="lz-content-section"><div class="lz-section-wrap">
      ${renderSubhead('Der Gesellschaftsvertrag (Du contrat social, 1762)')}
      <h2 class="lz-h2 reveal">Die <em>Volonté générale</em></h2>
      <p class="lz-prose reveal">Rousseau weiß, dass die Rückkehr zum Naturzustand unmöglich ist. Die Frage lautet: Wie kann eine <strong>legitime politische Ordnung</strong> geschaffen werden, die die Freiheit bewahrt? Seine Antwort: der <strong>Gesellschaftsvertrag</strong> (contrat social), in dem alle Bürger ihre natürliche Freiheit aufgeben und dafür <strong>bürgerliche Freiheit</strong> gewinnen.</p>

      ${renderMerkboxGrid([
        { icon: 'fas fa-users', title: 'Der Vertrag',
          text: '„Jeder von uns stellt gemeinsam seine Person und seine ganze Kraft unter die oberste Leitung des Gemeinwillens; und wir nehmen als Körper jedes Glied als untrennbaren Teil des Ganzen auf." Der Einzelne gibt ALLE Rechte an die Gemeinschaft ab — und erhält sie als Bürger zurück. Kein Souverän über dem Volk — das Volk IST der Souverän.' },
        { icon: 'fas fa-compass', title: 'Volonté générale (Gemeinwille)',
          text: 'Der Gemeinwille (volonté générale) ist NICHT die Summe der Einzelwillen (volonté de tous). Die volonté de tous fragt: Was will jeder Einzelne für sich? Die volonté générale fragt: Was ist gut für die Gemeinschaft als Ganzes? Der Gemeinwille ist immer richtig — er irrt nie. Aber das Volk kann ihn verfehlen, wenn es von Sonderinteressen geleitet wird.' },
        { icon: 'fas fa-balance-scale', title: 'Freiheit durch Gehorsam',
          text: 'Paradox: Indem der Bürger dem Gemeinwillen gehorcht, gehorcht er nur sich selbst — denn der Gemeinwille ist sein EIGENER Wille als Bürger (nicht als Privatperson). „Wer dem Gemeinwillen den Gehorsam verweigert, wird von der Gesamtheit dazu gezwungen — was nichts anderes heißt, als dass man ihn zwingt, frei zu sein."' },
        { icon: 'fas fa-crown', title: 'Direkte Demokratie',
          text: 'Rousseau lehnt die repräsentative Demokratie ab: Volksvertreter (Parlament) entfremden den Souverän von seinem eigenen Willen. „Das englische Volk glaubt, frei zu sein — es irrt sich. Es ist nur frei während der Wahl der Parlamentsmitglieder; sobald diese gewählt sind, ist es Sklave, ist es nichts." Nur direkte Volksabstimmung ist legitim.' },
      ])}

      ${renderInfobox({
        type: 'warning', icon: 'fas fa-exclamation-triangle',
        title: 'Kritik: „Zwang zur Freiheit"?',
        body: 'Rousseaus Formel „Man zwingt ihn, frei zu sein" wurde von Liberalen (Benjamin Constant, Isaiah Berlin) als <strong>totalitäres Potenzial</strong> kritisiert: Wer definiert den Gemeinwillen? Was passiert mit Minderheiten, die anderer Meinung sind? Die Jakobiner der Französischen Revolution beriefen sich auf Rousseau, als sie den Terror im Namen des Gemeinwillens rechtfertigten. Marx, Lenin und Mao nutzten ähnliche Argumente. Verteidiger Rousseaus antworten: Der Gemeinwille ist kein Mehrheitswille — er ist der Wille, der das Gemeinwohl verfolgt. Aber: Wer entscheidet, was das Gemeinwohl ist?'
      })}
    </div></section>

    <section class="lz-content-section"><div class="lz-section-wrap">
      ${renderSubhead('Vergleich der Vertragstheorien')}
      ${renderTable({
        headers: ['', 'Hobbes', 'Locke', 'Rousseau'],
        rows: [
          ['<strong>Naturzustand</strong>', 'Krieg aller gegen alle', 'Relativ friedlich, aber unsicher', 'Friedlich, gut, unabhängig'],
          ['<strong>Menschenbild</strong>', 'Egoistisch, ängstlich', 'Vernünftig, sozial', 'Gut, aber verderbbar'],
          ['<strong>Vertragsziel</strong>', 'Sicherheit (Überleben)', 'Schutz natürlicher Rechte', 'Freiheit + Gleichheit'],
          ['<strong>Souverän</strong>', 'Absolutist (über dem Vertrag)', 'Regierung (unter dem Vertrag)', 'Das Volk selbst (volonté générale)'],
          ['<strong>Widerstand</strong>', 'Nie erlaubt', 'Bei Vertragsbruch erlaubt', 'Nicht nötig (Volk = Souverän)'],
          ['<strong>Demokratieform</strong>', 'Irrelevant (Hauptsache Ordnung)', 'Repräsentative Demokratie', 'Direkte Demokratie'],
        ],
        highlight: [0, 3],
      })}
    </div></section>

    <section class="lz-content-section"><div class="lz-section-wrap">
      ${renderSubhead('Émile — Erziehung zur Freiheit (1762)')}
      <h2 class="lz-h2 reveal">Negative <em>Erziehung</em></h2>
      <p class="lz-prose reveal">Der Erziehungsroman <em>Émile ou De l'éducation</em> (1762) entwirft ein revolutionäres Bildungsprogramm: Das Kind soll nicht durch Belehrung geformt, sondern durch <strong>Erfahrung</strong> gebildet werden. Die Aufgabe des Erziehers: Hindernisse entfernen und die natürliche Entwicklung begleiten — <strong>negative Erziehung</strong>.</p>
      ${renderMerkboxGrid([
        { icon: 'fas fa-child', title: 'Das Kind ist kein kleiner Erwachsener',
          text: 'Gegen die zeitgenössische Pädagogik (Drill, Auswendiglernen, körperliche Züchtigung): „Die Natur will, dass Kinder Kinder seien, bevor sie Erwachsene werden." Jede Entwicklungsstufe hat ihre eigene Logik, ihre eigenen Bedürfnisse, ihre eigene Würde.' },
        { icon: 'fas fa-seedling', title: 'Lernen durch Erfahrung',
          text: 'Kein Bücherwissen bis zum Alter von 12 Jahren — stattdessen: Erfahrung in der Natur, handwerkliches Arbeiten, Sinnesschulung. Das Kind soll die Welt selbst entdecken, nicht aus Büchern lernen. Vorläufer der Reformpädagogik (Pestalozzi, Montessori, Dewey).' },
        { icon: 'fas fa-book-open', title: 'Robinson Crusoe als einziges Buch',
          text: 'Rousseau empfiehlt als einziges Buch für das Kind: Defoes Robinson Crusoe — weil Robinson allein, durch eigene Kraft und Erfahrung, die Welt meistert. Das perfekte Modell für Rousseaus Ideal: Selbstständigkeit durch Erfahrung.' },
        { icon: 'fas fa-heart', title: 'Gewissensreligion',
          text: 'Im „Glaubensbekenntnis des savoyischen Vikars" (Émile, Buch IV) entwirft Rousseau eine natürliche Religion des Herzens: Gott wird nicht durch Dogmen, sondern durch das innere Gefühl (sentiment intérieur) erkannt. Das Gewissen ist die „Stimme der Natur" — wichtiger als jede Kirchenlehre.' },
      ])}
    </div></section>

    <section class="lz-content-section"><div class="lz-section-wrap">
      ${renderSubhead('Testfragen — Abiturniveau')}
      ${renderAccordion([
        { title: '1. Vergleichen Sie Hobbes\' und Rousseaus Naturzustandstheorien und die daraus folgenden Staatsmodelle.',
          content: '<p class="lz-prose"><strong>Hobbes:</strong> Naturzustand = <strong>Krieg aller gegen alle</strong>. Der Mensch ist egoistisch, ängstlich, machtgierig. Ohne Staat: Chaos, Gewalt, permanente Furcht. Lösung: Alle Rechte an einen <strong>absoluten Souverän</strong> (Leviathan). Kein Widerstandsrecht.<br><br><strong>Rousseau:</strong> Naturzustand = <strong>friedliche Unabhängigkeit</strong>. Der Mensch ist von Natur aus gut (amour de soi + pitié). Erst die Gesellschaft (Eigentum → Ungleichheit → Konkurrenz) verdirbt ihn. Lösung: <strong>Gesellschaftsvertrag</strong>, in dem das Volk selbst Souverän ist (volonté générale). Direkte Demokratie.<br><br><strong>Grunddifferenz:</strong> Hobbes: Der Staat ist <strong>Schutz vor der bösen Natur</strong> des Menschen. Rousseau: Der Staat ist <strong>Heilung der korrumpierten Gesellschaft</strong> — er soll die natürliche Güte wiederherstellen, nicht die natürliche Bosheit bändigen.</p>' },
        { title: '2. Erklären Sie Rousseaus Konzept der volonté générale und diskutieren Sie die Kritik des „Zwangs zur Freiheit".',
          content: '<p class="lz-prose"><strong>Volonté générale:</strong> Der Gemeinwille ist der Wille, der das <strong>Gemeinwohl</strong> verfolgt — nicht die Summe der Privatinteressen (volonté de tous). Er ist immer richtig, irrt nie. Jeder Bürger ist zugleich Gesetzgeber (als Teil des Souveräns) und Untertan (als Adressat der Gesetze). Wer dem Gemeinwillen gehorcht, gehorcht sich selbst.<br><br><strong>„Zwang zur Freiheit":</strong> Rousseau schreibt: Wer den Gemeinwillen verweigert, wird „gezwungen, frei zu sein". <strong>Liberale Kritik</strong> (Constant, Berlin, Popper): Diese Formel ist <strong>totalitär</strong>: Wer den Gemeinwillen definiert, hat absolute Macht. Individuelle Freiheit (Gewissensfreiheit, Meinungsfreiheit) wird im Namen des Gemeinwohls unterdrückt. Die Jakobiner (Robespierre) beriefen sich auf Rousseau, als sie Zehntausende im Namen des Volkes hinrichteten.<br><br><strong>Verteidigung:</strong> Rousseaus Gemeinwille ist kein Mehrheitswille, sondern ein <strong>idealer Maßstab</strong>: Was wäre das Beste für alle? Er setzt voraus, dass alle Bürger am politischen Prozess teilnehmen und ihre Sonderinteressen transzendieren. In der Praxis ist das schwer, aber als regulatives Ideal nicht totalitär — sondern demokratisch.</p>' },
        { title: '3. Erklären Sie Rousseaus Unterscheidung zwischen amour de soi und amour propre.',
          content: '<p class="lz-prose"><strong>Amour de soi</strong> (Selbstliebe): Ein <strong>natürliches, gesundes</strong> Gefühl — das Streben nach Selbsterhaltung und Wohlergehen. Es ist nicht egoistisch (denn es richtet sich nicht gegen andere), sondern ein Grundtrieb alles Lebendigen. Im Naturzustand: Der Mensch sorgt für sich, ohne anderen zu schaden.<br><br><strong>Amour propre</strong> (Eigenliebe/Eitelkeit): Ein <strong>gesellschaftliches, krankhaftes</strong> Gefühl — der Wunsch, von anderen bewundert, beneidet, anerkannt zu werden. Amour propre entsteht erst in der Gesellschaft, wenn Menschen beginnen, sich zu vergleichen. Sie ist die Quelle von Neid, Eifersucht, Heuchelei, Statuskonkurrenz — aller Übel der Zivilisation.<br><br><strong>Philosophische Bedeutung:</strong> (1) Rousseaus Zivilisationskritik: Die Gesellschaft verwandelt die gesunde Selbstliebe in die krankhafte Eigenliebe. (2) Vorläufer der <strong>Sozialkritik</strong> (Marx: Entfremdung, Adorno: Kulturindustrie, Bourdieu: symbolisches Kapital). (3) Psychologisch: Amour propre entspricht dem, was die Sozialpsychologie „sozialer Vergleich" (Festinger) und „Statusangst" (de Botton) nennt.</p>' },
        { title: '4. Inwiefern ist Rousseau ein „Aufklärer gegen die Aufklärung"?',
          content: '<p class="lz-prose"><strong>Aufklärer:</strong> Rousseau teilt die Grundwerte der Aufklärung: (1) <strong>Vernunft</strong> als Maßstab (der Gesellschaftsvertrag ist ein Vernunftargument). (2) <strong>Freiheit</strong> als höchstes Gut. (3) <strong>Kritik</strong> an Autorität, Tradition, Vorurteil. (4) <strong>Gleichheit</strong> aller Menschen. Er war Mitarbeiter der Enzyklopädie und Freund Diderots.<br><br><strong>Gegen die Aufklärung:</strong> (1) <strong>Fortschrittskritik:</strong> Die anderen Aufklärer (Voltaire, Diderot, d\'Alembert) glaubten an den Fortschritt durch Wissenschaft und Bildung. Rousseau: Der Fortschritt hat die Sitten verdorben — nicht verbessert. (2) <strong>Gefühl gegen Vernunft:</strong> Voltaire vertraut der Vernunft, Rousseau dem Gefühl (sentiment, conscience). Das Gewissen — nicht die Logik — ist die letzte moralische Instanz. (3) <strong>Natur gegen Kultur:</strong> Die Aufklärung feiert die Kultur (Kunst, Wissenschaft, Technik). Rousseau feiert die Natur und kritisiert die Kultur als Quelle der Entfremdung. (4) <strong>Gleichheit gegen Elitismus:</strong> Voltaire verachtete das „gemeine Volk". Rousseau identifizierte sich mit den Einfachen und Ungebildeten — das Volk, nicht die Philosophen, ist der Souverän.<br><br>Rousseau ist der <strong>innerste Kritiker der Aufklärung</strong> — er teilt ihre Werte, aber nicht ihren Optimismus. Damit wird er zum Vorläufer der <strong>Romantik</strong> und zugleich der <strong>radikalen Demokratie</strong>.</p>' },
      ])}
    </div></section>

    <section class="lz-content-section" style="padding-top:0;"><div class="lz-section-wrap">
      ${renderPageNav({
        prev: { label: 'La Mettrie', link: `${BASE}/themen/aufklaerung/la-mettrie` },
        next: { label: 'Kant',       link: `${BASE}/themen/aufklaerung/kant` },
      }, BASE)}
    </div></section>
    ${footerHTML(this.router)}
    `;
  }
  init() { i18n.init(); initScrollReveal(); refreshScrollReveal(); initInteractive(document); }
  cleanup() {}
}