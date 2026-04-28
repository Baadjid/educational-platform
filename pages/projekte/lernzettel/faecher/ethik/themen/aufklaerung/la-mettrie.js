// pages/projekte/lernzettel/faecher/ethik/themen/aufklärung/la-mettrie.js
// ══════════════════════════════════════════════════════════════════
// Kapitel 7.2 — Julien Offray de La Mettrie (1709–1751)
// L'homme machine, Materialismus, Determinismus, Hedonismus
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

const KAP_COLOR = '#64748b';
const KAP_COLOR_RGB = '100, 116, 139';

const LAMETTRIE_ARGUMENTE_TABS = [
  { key: 'medizin',   label: 'Medizinische Belege' },
  { key: 'tier',      label: 'Tier-Mensch-Kontinuum' },
];

export default class LaMettrePage {
  constructor(router) { this.router = router; }
  render() {
    ensureComponentsCSS();
    loadComponentCSS('pages/projekte/lernzettel/styles/sub.css');
    const el = document.createElement('div');
    el.className = 'page page-la-mettrie';
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
          <span>La Mettrie</span>
        </nav>
        <h1 class="lz-sub-title"><em>La Mettrie</em> — Der Mensch als Maschine</h1>
        <p class="lz-sub-desc">
          Der radikalste Materialist der Aufklärung erklärte den Menschen
          zu einer selbstbewegten Maschine — ohne Seele, ohne freien Willen,
          ohne moralische Schuld. Ein Skandal, der bis heute nachwirkt.
        </p>
        ${renderTags(['Kapitel 7.2', '1709–1751', 'Saint-Malo · Leiden · Berlin', "L'homme machine · Materialismus · Hedonismus", 'Abitur 2026'])}
      </div>
    </section>

    <section class="lz-content-section">
      <div class="lz-section-wrap">
        ${renderSubhead('Biographisches')}
        <h2 class="lz-h2 reveal">Der Arzt, den <em>ganz Europa</em> verjagte</h2>
        <p class="lz-prose reveal">
          Julien Offray de La Mettrie (1709–1751) studierte Medizin in Paris und
          Leiden (bei <strong>Boerhaave</strong>, dem berühmtesten Arzt Europas).
          Eine schwere Fiebererkrankung als Militärarzt wurde zum philosophischen
          Wendepunkt: La Mettrie beobachtete, wie das Fieber sein Denken, Fühlen
          und Wollen veränderte — und schloss: <strong>Das Bewusstsein ist eine
          Funktion des Körpers.</strong> Für seine Schriften aus Frankreich
          verjagt, dann aus Holland verjagt, fand er schließlich Zuflucht bei
          <strong>Friedrich dem Großen</strong> in Berlin.
        </p>
        ${renderVTimeline([
          { year: '1709', title: 'Geburt in Saint-Malo', text: 'Wohlhabende Kaufmannsfamilie; Jesuitenkolleg' },
          { year: '1733–42', title: 'Medizinstudium und Militärarzt', text: 'Studium bei Boerhaave in Leiden; Fiebererlebnis als philosophischer Wendepunkt' },
          { year: '1745', title: 'Histoire naturelle de l\'âme', text: 'Die Seele als Gehirnfunktion; sofort verboten und verbrannt' },
          { year: '1746', title: 'Flucht aus Frankreich', text: 'Verfolgung durch Kirche und Ärztekammer; Exil in Leiden' },
          { year: '1747', title: "L'homme machine", text: 'Hauptwerk — auch aus Holland vertrieben' },
          { year: '1748', title: 'Exil in Berlin', text: 'Friedrich d. Große: „Einen solchen Philosophen muss man haben"' },
          { year: '1751', title: 'Tod in Berlin', text: 'Stirbt 41-jährig — angeblich an einer Trüffelpastete' },
        ])}
        ${renderInfobox({
          type: '', icon: 'fas fa-info-circle',
          title: 'Warum war La Mettrie so gefährlich?',
          body: 'Selbst die anderen Aufklärer — Voltaire, Diderot, d\'Holbach — distanzierten sich von La Mettrie. Warum? Weil er den <strong>Materialismus zu Ende dachte</strong>: Wenn der Mensch eine Maschine ist, gibt es keine Sünde, keine moralische Verantwortung, keine Unsterblichkeit — und Genuss ist das einzige Ziel. Das war selbst den radikalsten Aufklärern zu radikal. Voltaire nannte ihn „einen Verrückten, der nur für Verrückte schreibt".'
        })}
      </div>
    </section>

    <section class="lz-content-section">
      <div class="lz-section-wrap">
        ${renderSubhead("L'homme machine (1747) — Die Kernthesen")}
        <h2 class="lz-h2 reveal">Der Mensch — eine <em>selbstbewegte Maschine</em></h2>
        <p class="lz-prose reveal">
          La Mettries Hauptwerk ist ein radikal materialistisches Manifest:
          Der Mensch ist nichts anderes als eine komplexe <strong>Maschine</strong> —
          alle geistigen Phänomene sind Funktionen des <strong>Gehirns und
          Nervensystems</strong>. Descartes hatte nur die Tiere als Maschinen
          betrachtet (bêtes-machines) und dem Menschen eine immaterielle Seele
          zugesprochen. La Mettrie zieht die letzte Konsequenz: Auch der Mensch
          ist eine Maschine.
        </p>
        ${renderMerkboxGrid([
          { icon: 'fas fa-cogs', title: 'Mensch = Maschine',
            text: '„Der menschliche Körper ist eine Maschine, die ihre Federn selber aufzieht." Nicht nur Reflexe und Verdauung, sondern auch Denken und Fühlen sind mechanische Prozesse des Nervensystems. Der Unterschied zum Tier ist graduell (Komplexität), nicht prinzipiell (Substanz).' },
          { icon: 'fas fa-brain', title: 'Denken = Gehirnfunktion',
            text: 'Das Gehirn „denkt" wie der Magen „verdaut" und die Leber „Galle absondert". Empirische Belege: Fieber verändert das Denken, Alkohol die Stimmung, Opium die Wahrnehmung, Hirnverletzungen die Persönlichkeit. Ohne Gehirn kein Denken — Bewusstsein ist eine Funktion der Materie.' },
          { icon: 'fas fa-ban', title: 'Keine immaterielle Seele',
            text: 'Die „Seele" (âme) ist kein eigenständiges Wesen, sondern ein Wort für die Gesamtheit der Hirnfunktionen. Wenn das Gehirn stirbt, stirbt das Bewusstsein. Keine Unsterblichkeit, kein Jenseits, keine Seelenwanderung — nur Materie in verschiedenen Organisationsformen.' },
          { icon: 'fas fa-lock', title: 'Strikter Determinismus',
            text: 'Wenn der Mensch eine Maschine ist, gibt es keinen freien Willen — alle Handlungen sind durch physiologische Ursachen determiniert. Der Verbrecher ist nicht „böse", sondern „schlecht gebaut" — er braucht einen Arzt, keinen Richter. Vorläufer der modernen Rehabilitationsidee und der Sozialen Verteidigung.' },
          { icon: 'fas fa-smile', title: 'Hedonismus',
            text: 'Ohne Seele und Jenseits ist das einzige Gut: Lust (volupté). La Mettrie vertritt einen offenen Hedonismus: Genuss ist natürlich, Askese ist widernatürlich. Die Natur hat den Menschen für die Lust geschaffen — wer die Lust verleugnet, verleugnet die Natur. Vorläufer des Utilitarismus.' },
        ])}
        ${renderFormulaBox({
          label: "La Mettrie, L'homme machine (1747)",
          formula: '„Der Mensch ist eine Maschine,<br>und es gibt im ganzen Universum<br>nur eine einzige Substanz,<br>die verschieden modifiziert wird."',
          desc: 'Substanzmonismus wie Spinoza, aber ohne Gott: Nur Materie existiert. Geist, Seele, Bewusstsein sind Modifikationen der Materie — keine eigenständigen Substanzen.'
        })}
      </div>
    </section>

    <section class="lz-content-section">
      <div class="lz-section-wrap">
        ${renderSubhead('Philosophische Einordnung')}
        <h2 class="lz-h2 reveal">La Mettrie im <em>Kontext</em></h2>
        ${renderCompare({
          titleA: 'Descartes — Dualismus',
          titleB: 'La Mettrie — Materialismus',
          listA: [
            'Zwei Substanzen: <strong>Geist + Materie</strong>',
            'Tiere = Maschinen, Menschen = Maschine + Seele',
            'Freier Wille (die Seele bestimmt sich selbst)',
            'Unsterblichkeit der Seele',
            'Moral: Pflicht der Vernunft',
          ],
          listB: [
            'Eine Substanz: <strong>nur Materie</strong>',
            'Menschen UND Tiere = Maschinen (nur komplexer)',
            'Kein freier Wille (Determinismus)',
            'Keine Unsterblichkeit — Tod = Ende',
            'Moral: Lust und Schmerz als Kompass',
          ],
        })}
        ${renderTable({
          headers: ['', 'Hobbes', 'Spinoza', 'La Mettrie'],
          rows: [
            ['<strong>Materialismus</strong>', 'Ja (Körper = alles)', 'Nein (Doppelaspekt)', 'Ja (radikal)'],
            ['<strong>Determinismus</strong>', 'Ja', 'Ja (absolut)', 'Ja'],
            ['<strong>Gott</strong>', 'Ja (nominell)', 'Ja (= Natur)', 'Nein (Atheismus)'],
            ['<strong>Ethik</strong>', 'Selbsterhaltung', 'Einsicht in Notwendigkeit', 'Hedonismus (Lust)'],
            ['<strong>Freier Wille</strong>', 'Kompatibilismus', 'Nein', 'Nein'],
          ],
          highlight: [0],
        })}
        ${renderInfobox({
          type: 'blue', icon: 'fas fa-graduation-cap',
          title: 'Abitur-Hinweis: La Mettrie und die Neurowissenschaften',
          body: 'La Mettries These „Denken = Gehirnfunktion" ist in der modernen <strong>Neurowissenschaft</strong> Mainstream: Bewusstsein ist ein Produkt neuronaler Aktivität. Die philosophische Debatte bleibt offen: Das „Hard Problem of Consciousness" (Chalmers, 1995) fragt, WARUM physische Prozesse mit <strong>subjektivem Erleben</strong> einhergehen. La Mettrie hat das Problem identifiziert, aber nicht gelöst. In Klausuren: La Mettrie als Vorläufer des modernen Naturalismus/Physikalismus darstellen und die offene Frage der Qualia diskutieren.'
        })}
      </div>
    </section>

    <section class="lz-content-section">
      <div class="lz-section-wrap">
        ${renderSubhead('Argumente und Methode')}
        <h2 class="lz-h2 reveal"><em>Empirische</em> Philosophie</h2>
        <p class="lz-prose reveal">
          La Mettries Stärke liegt in seiner <strong>empirischen Methode</strong>:
          Er argumentiert nicht abstrakt-philosophisch, sondern medizinisch-
          naturwissenschaftlich. Seine Belege stammen aus der klinischen
          Erfahrung als Arzt:
        </p>
        <nav class="wim-tabs" id="lamettrie-argumente-tabs" aria-label="Argumente">
          ${LAMETTRIE_ARGUMENTE_TABS.map((t, i) => `
            <button class="wim-tab${i === 0 ? ' active' : ''}" data-wim="${t.key}">
              ${t.label}
            </button>`).join('')}
        </nav>
        <div class="wim-category" data-wim-cat="medizin">
          <h3 class="lz-h3">Vom Krankenbett zur Philosophie</h3>
          ${renderMerkboxGrid([
            { icon: 'fas fa-thermometer-half', title: 'Fieber verändert das Denken',
              text: 'Während seiner eigenen Fiebererkrankung beobachtete La Mettrie: Hohes Fieber verursacht Halluzinationen, Verwirrtheit, Persönlichkeitsveränderungen. Wenn die Körpertemperatur das Bewusstsein so grundlegend verändert, dann IST Bewusstsein eine Körperfunktion.' },
            { icon: 'fas fa-wine-glass', title: 'Substanzen verändern den Geist',
              text: 'Opium erzeugt Euphorie, Kaffee Wachheit, Alkohol Enthemmung. Jede Substanz, die auf den Körper wirkt, verändert das Bewusstsein. Wenn der Geist unabhängig vom Körper wäre (Descartes), könnten Substanzen ihn nicht beeinflussen.' },
            { icon: 'fas fa-user-injured', title: 'Hirnverletzungen',
              text: 'Verletzungen des Gehirns verändern die Persönlichkeit: Phineas-Gage-Fälle (avant la lettre). Wenn ein Eisenstab durch den Frontallappen geht und der Patient plötzlich aggressiv und enthemmt wird — dann IST die Persönlichkeit eine Funktion des Gehirns.' },
          ])}
        </div>
        <div class="wim-category hidden" data-wim-cat="tier">
          <h3 class="lz-h3">Der Mensch ist ein besonderer Tier</h3>
          <p class="lz-prose">La Mettrie argumentiert, dass der Unterschied zwischen Mensch und Tier <strong>graduell</strong>, nicht <strong>prinzipiell</strong> ist:</p>
          ${renderMerkboxGrid([
            { icon: 'fas fa-paw', title: 'Tiere empfinden',
              text: 'Descartes behauptete: Tiere sind Maschinen ohne Empfindung. La Mettrie: Das ist absurd — jeder sieht, dass Hunde Schmerz empfinden, Affen Freude zeigen, Vögel trauern. Wenn Tiere ohne Seele empfinden können, braucht auch der Mensch keine Seele zum Empfinden.' },
            { icon: 'fas fa-brain', title: 'Gehirngröße und Intelligenz',
              text: 'La Mettrie stellt fest: Intelligentere Tiere haben relativ größere Gehirne. Der Mensch hat das größte Gehirn im Verhältnis zum Körper → seine überlegene Intelligenz ist eine Funktion der Gehirngröße und -organisation, nicht einer immateriellen Seele.' },
            { icon: 'fas fa-language', title: 'Sprache als Organisationsfrage',
              text: 'Warum können Tiere nicht sprechen? Nicht weil ihnen die Seele fehlt, sondern weil ihre Kehlkopf- und Gehirnstruktur keine komplexe Sprache erlaubt. La Mettrie spekulierte: Mit der richtigen Erziehung könnte ein Menschenaffe Sprache lernen. Prophezeiung, die 200 Jahre später (Washoe, Koko) teilweise bestätigt wurde.' },
          ])}
        </div>
      </div>
    </section>

    <section class="lz-content-section">
      <div class="lz-section-wrap">
        ${renderSubhead('Ethische Konsequenzen')}
        <h2 class="lz-h2 reveal">Moral <em>ohne Seele</em></h2>
        <p class="lz-prose reveal">
          La Mettries ethische Position war der eigentliche Skandal — radikaler
          als sein Materialismus:
        </p>
        ${renderMerkboxGrid([
          { icon: 'fas fa-gavel', title: 'Keine moralische Schuld',
            text: 'Wenn alle Handlungen determiniert sind, gibt es keine Schuld im traditionellen Sinn. Der Mörder ist nicht „böse" — er ist Opfer seiner Physiologie, seiner Erziehung, seiner Umstände. Die richtige Reaktion ist nicht Strafe (die nichts ändert), sondern Therapie, Erziehung, Prävention.' },
          { icon: 'fas fa-heart', title: 'Natürliche Moral',
            text: 'Moral braucht keinen Gott und kein Jenseits. Empathie, Mitleid, Geselligkeit sind <strong>natürliche Dispositionen</strong> — die Evolution (avant la lettre) hat sie hervorgebracht, weil kooperative Wesen besser überleben. La Mettrie nimmt Darwin, Hume und die evolutionäre Ethik vorweg.' },
          { icon: 'fas fa-glass-cheers', title: 'Aufgeklärter Genuss',
            text: 'In L\'art de jouir (Die Kunst zu genießen, 1751) vertritt La Mettrie einen aufgeklärten Hedonismus: Genuss ist gut — aber kluger Genuss ist besser. Nicht blindes Fressen und Saufen, sondern kultiviertes Genießen: gutes Essen, Freundschaft, Kunst, Wissenschaft, Sexualität. Epikur in modernem Gewand.' },
        ])}
        ${renderFormulaBox({
          label: "La Mettrie, L'homme machine (1747)",
          formula: '„Lasst uns also kühn schließen,<br>dass der Mensch eine Maschine ist,<br>und dass es im ganzen Universum<br>nur eine einzige, verschieden modifizierte<br>Substanz gibt."',
          desc: 'Der Schluss des Hauptwerks: Alles ist Materie. Descartes\' Dualismus, Leibniz\' Monaden, die christliche Seelenlehre — alles überflüssig. Nur die Materie und ihre Organisation erklären den Menschen.'
        })}
      </div>
    </section>

    <section class="lz-content-section">
      <div class="lz-section-wrap">
        ${renderSubhead('Testfragen — Abiturniveau')}
        ${renderAccordion([
          { title: '1. Erklären Sie La Mettries These „Der Mensch ist eine Maschine" und vergleichen Sie mit Descartes\' Dualismus.',
            content: '<p class="lz-prose"><strong>La Mettrie:</strong> Der Mensch ist eine <strong>selbstbewegte Maschine</strong>. Alle geistigen Phänomene sind Funktionen des Gehirns. Keine immaterielle Seele. Belege: Fieber verändert Denken, Alkohol Stimmung, Hirnverletzungen Persönlichkeit → Bewusstsein hängt vom Körper ab.<br><br><strong>Descartes:</strong> Tiere = Maschinen, aber Menschen haben zusätzlich eine <strong>immaterielle Seele</strong> (res cogitans). Die Seele ist unteilbar, unsterblich, frei. Interaktion über die Zirbeldrüse.<br><br><strong>La Mettries Kritik:</strong> Die Trennung Mensch/Tier ist willkürlich. Tiere empfinden offensichtlich — also brauchen entweder auch sie eine Seele (absurd viele Seelen) oder niemand hat eine. Descartes war inkonsequent: Er wandte den Materialismus auf Tiere an, machte beim Menschen halt. La Mettrie zieht die letzte Konsequenz.</p>' },
          { title: '2. Welche ethischen Konsequenzen hat La Mettries Materialismus? Diskutieren Sie kritisch.',
            content: '<p class="lz-prose"><strong>Konsequenzen:</strong><br>(1) <strong>Kein freier Wille:</strong> Alle Handlungen physiologisch determiniert → keine moralische Schuld im traditionellen Sinn. Verbrecher sind „schlecht gebaut", nicht „böse" → Therapie statt Strafe.<br>(2) <strong>Hedonismus:</strong> Ohne Seele/Jenseits ist Lust das einzige Gut. Aufgeklärter Genuss statt Askese.<br>(3) <strong>Natürliche Moral:</strong> Empathie und Geselligkeit als angeborene Dispositionen → Moral braucht keinen Gott.<br><br><strong>Kritik:</strong><br>(1) <strong>Verantwortungsproblem:</strong> Ohne freien Willen keine Verantwortung → aber ohne Verantwortung funktioniert keine Gesellschaft. Wer ist schuld, wenn niemand frei handelt? La Mettrie: Nicht Schuld zuweisen, sondern Ursachen behandeln (Erziehung, Medizin).<br>(2) <strong>Hedonismus-Einwand:</strong> Wenn nur Lust zählt, was hindert mich daran, auf Kosten anderer zu genießen? La Mettrie: Die natürliche Empathie und die gesellschaftlichen Folgen (Bestrafung) bremsen den Egoismus.<br>(3) <strong>Reduktionismus:</strong> Ist Liebe wirklich „nur" ein Hormoncocktail? Ist Moral „nur" Überlebensstrategie? La Mettries Reduktionismus erklärt das „Wie" (Mechanismus), aber möglicherweise nicht das „Warum" (Bedeutung).</p>' },
          { title: '3. Vergleichen Sie La Mettrie mit dem antiken Atomismus (Demokrit/Epikur) und mit der modernen Neurowissenschaft.',
            content: '<p class="lz-prose"><strong>Antiker Atomismus:</strong> Alles besteht aus Atomen im leeren Raum. Die Seele = besonders feine Atome. Epikur: Hedonismus als ethische Konsequenz. <strong>Gemeinsamkeiten</strong> mit La Mettrie: Materialismus, keine immaterielle Seele, Hedonismus, kein göttliches Eingreifen.<br><br><strong>Unterschiede:</strong> (1) La Mettrie argumentiert <strong>empirisch</strong> (medizinische Beobachtungen), Demokrit/Epikur <strong>spekulativ</strong>. (2) Für La Mettrie ist Bewusstsein eine Funktion der <strong>Organisation</strong> (Struktur des Gehirns), nicht der Substanz (besonders feine Atome). (3) Epikur rettete den freien Willen durch den Clinamen; La Mettrie: kein freier Wille.<br><br><strong>Moderne Neurowissenschaft:</strong> Bestätigt La Mettrie: Bewusstsein korreliert mit Gehirnaktivität. fMRT, EEG, Läsionsstudien zeigen: Jede Veränderung des Gehirns verändert das Bewusstsein. <strong>Aber:</strong> Das „Hard Problem" (Chalmers) bleibt: Warum gibt es subjektives Erleben? Warum fühlt sich Rot ROT an? Die Korrelation (Gehirn ↔ Bewusstsein) ist nachgewiesen, die Identität (Gehirn = Bewusstsein) philosophisch umstritten.</p>' },
          { title: '4. Ist La Mettries Materialismus mit Moral vereinbar? Diskutieren Sie zwei Positionen.',
            content: '<p class="lz-prose"><strong>Position 1 — Ja, vereinbar (La Mettrie, Hume, moderne Naturalisten):</strong> Moral braucht keine immaterielle Seele und keinen freien Willen. Empathie, Kooperationsbereitschaft und Gerechtigkeitssinn sind <strong>natürliche Dispositionen</strong>, die durch Evolution entstanden sind. Moralische Normen sind nützliche Konventionen, die das Zusammenleben regulieren. Auch ohne Freiheit kann man zwischen „funktionalem" und „dysfunktionalem" Verhalten unterscheiden — und das dysfunktionale durch Erziehung und Therapie korrigieren.<br><br><strong>Position 2 — Nein, unvereinbar (Kant, Existenzialismus):</strong> Moral setzt <strong>Freiheit</strong> voraus — nur wer frei handeln kann, kann moralisch handeln. „Sollen impliziert Können" (Kant). Wenn der Mensch eine Maschine ist und alles determiniert, dann gibt es weder Pflicht noch Verdienst noch Schuld. Moralische Urteile werden sinnlos: „Er hätte anders handeln sollen" setzt voraus, dass er anders handeln KONNTE — was der Determinist leugnet.<br><br><strong>Vermittlung (Kompatibilismus, Frankfurt):</strong> Freiheit ist nicht „hätte anders handeln können" (das ist vielleicht determiniert), sondern „handelt aus den richtigen Gründen". Ein Mensch ist frei, wenn seine Handlung aus seinen eigenen Wünschen und Überzeugungen folgt — auch wenn diese Wünsche selbst determiniert sind. Der Süchtige ist unfrei (sein Wunsch nach Drogen widerspricht seinem Wunsch, clean zu sein), der Überlegte ist frei (seine Handlung stimmt mit seinen reflektierten Wünschen überein). Kompatibilismus rettet die Moral ohne immaterielle Seele.</p>' },
        ])}
      </div>
    </section>

    <section class="lz-content-section" style="padding-top:0;">
      <div class="lz-section-wrap">
        ${renderPageNav({
          prev: { label: 'Voltaire', link: `${BASE}/themen/aufklaerung/voltaire` },
          next: { label: 'Rousseau', link: `${BASE}/themen/aufklaerung/rousseau` },
        }, BASE)}
      </div>
    </section>
    ${footerHTML(this.router)}
    `;
  }
  init() { i18n.init(); initScrollReveal(); refreshScrollReveal(); initInteractive(document); initWimTabs(document); }
  cleanup() {}
}