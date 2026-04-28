// pages/projekte/lernzettel/faecher/geschichte/themen/epochenschwelle/reformation.js
// 1.3 — Reformation & Konfessionalisierung

import { initScrollReveal } from '../../../../../../../shared/js/index.js';
import { footerHTML }       from '../../../../../../../components/Footer.js';
import { i18n }             from '../../../../../../../shared/js/i18n.js';
import { initWimTabs }      from '../../../../../../../shared/js/wim-tabs.js';
import {
  ensureComponentsCSS,
  renderSubhead, renderTags, renderInfobox, renderTable,
  renderTabs, renderAccordion, renderMerkboxGrid, renderCompare,
  renderVTimeline, initInteractive,
} from '../../../../js/components/components.js';
import { renderPageNav } from '../../../../js/components/subnav.js';

import { COLOR, COLOR_RGB, BASE } from '../../geschichte.js';

// ─── WIM-Tab-Daten ───────────────────────────────────────────────
const REFORMATION_TABS = [
  { key: 'luther',      label: '📜 Luthers Reform' },
  { key: 'ausbreitung', label: '🗺️ Ausbreitung' },
  { key: 'augsburg',    label: '⚖️ Augsburg 1555' },
  { key: 'gegenreform', label: '✝️ Gegenreformation' },
];

export default class GeschichteReformationPage {
  constructor(router) { this.router = router; }

  render() {
    ensureComponentsCSS();
    [
      ['lernzettel.css', 'pages/projekte/lernzettel/styles/lernzettel.css'],
      ['sub.css',        'pages/projekte/lernzettel/styles/sub.css'],
    ].forEach(([id, href]) => {
      if (!document.querySelector(`link[href*="${id}"]`)) {
        const l = document.createElement('link');
        l.rel = 'stylesheet'; l.href = href;
        document.head.appendChild(l);
      }
    });

    const el = document.createElement('div');
    el.className = 'page page-geschichte page-geschichte-sub';
    el.style.setProperty('--lz-accent',     COLOR);
    el.style.setProperty('--lz-accent-rgb', COLOR_RGB);
    el.innerHTML = this._html();
    return el;
  }

  _html() { return `
    <section class="lz-sub-hero" style="--kap-color:${COLOR};--kap-color-rgb:${COLOR_RGB};">
      <div class="lz-sub-hero-orb" aria-hidden="true"></div>
      <div class="lz-sub-hero-inner">
        <nav class="lz-sub-breadcrumb">
          <button class="lz-bread-link" data-link="/projekte/lernzettel">Lernzettel</button>
          <i class="fas fa-chevron-right"></i>
          <button class="lz-bread-link" data-link="${BASE}">Geschichte</button>
          <i class="fas fa-chevron-right"></i>
          <span>1.3 · Reformation &amp; Konfessionalisierung</span>
        </nav>
        <h1 class="lz-sub-title">Reformation &amp;<br><em>Konfessionalisierung.</em></h1>
        <p class="lz-sub-desc">
          Von Luthers 95 Thesen bis zum Augsburger Religionsfrieden — die kirchliche
          Spaltung Europas und ihre politischen Folgen.
        </p>
        ${renderTags(['1.3', '1517–1555', 'Frühe Neuzeit', 'Luther', 'Abitur 2026'])}
      </div>
    </section>

    <section class="lz-content-section">
      <div class="lz-section-wrap">
        ${renderSubhead('Reformatorische Kernlehre')}
        <h2 class="lz-h2 reveal">Die vier Solas Luthers</h2>
        <p class="lz-prose reveal">
          Die vier <em>Sola</em>-Formeln fassen die theologische Revolution der Reformation zusammen:
        </p>
        ${renderMerkboxGrid([
          { icon: 'fas fa-book-bible', title: 'Sola scriptura', text: '„Allein die Schrift" — die Bibel (nicht Papst oder Konzil) ist alleinige Autorität in Glaubensfragen. Ermöglichte durch humanistische Textkritik und Buchdruck.' },
          { icon: 'fas fa-heart', title: 'Sola fide', text: '„Allein durch den Glauben" — Rechtfertigung vor Gott nicht durch gute Werke oder Ablassbriefe, sondern allein durch den Glauben.' },
          { icon: 'fas fa-hand-holding-heart', title: 'Sola gratia', text: '„Allein durch Gnade" — das Heil ist Geschenk Gottes, nicht vom Menschen verdienbar. Untergräbt die kirchliche Heilsvermittlung.' },
          { icon: 'fas fa-person-praying', title: 'Solus Christus', text: '„Allein Christus" — kein Heiliger, kein Priester kann zwischen Mensch und Gott vermitteln. Jeder Gläubige ist direkter Zugang zu Gott möglich.' },
        ])}
      </div>
    </section>

    <section class="lz-content-section" style="padding-top:0;">
      <div class="lz-section-wrap">
        ${renderSubhead('Vertiefung')}
        <h2 class="lz-h2 reveal">Reformation im Detail</h2>

        <nav class="wim-tabs" id="reformation-tabs" aria-label="Reformation">
          ${REFORMATION_TABS.map((t, i) => `
            <button class="wim-tab${i === 0 ? ' active' : ''}" data-wim="${t.key}">
              ${t.label}
            </button>`).join('')}
        </nav>

        ${this._panelLuther()}
        ${this._panelAusbreitung()}
        ${this._panelAugsburg()}
        ${this._panelGegenreform()}

      </div>
    </section>

    <section class="lz-content-section" style="padding-top:0;">
      <div class="lz-section-wrap">
        ${renderSubhead('Gegenüberstellung')}
        <h2 class="lz-h2 reveal">Luthertum vs. Calvinismus</h2>
        ${renderCompare({
          titleA: 'Luthertum', titleB: 'Calvinismus',
          listA: ['Sola scriptura, sola fide, sola gratia', 'Rechtfertigung durch Glauben', 'Zwei-Reiche-Lehre: Kirche und Staat getrennt', 'Landesfürst als Schirmherr der Kirche', 'Mäßige Bilderfeindlichkeit', 'Volkssprachlicher Gottesdienst', 'Hauptverbreitung: Deutschland, Skandinavien'],
          listB: ['Prädestinationslehre: Gott erwählt Gerettete vorab', 'Äußerlicher Erfolg als Zeichen der Erwählung', 'Theokratische Tendenz (Genf: Gottes Reich auf Erden)', 'Konsistorialverfassung: Gemeinde wählt Älteste', 'Radikale Bilderfeindlichkeit, Kirchen leer', 'Schlichtheit in Gottesdienst und Liturgie', 'Hauptverbreitung: Schweiz, Niederlande, Schottland, Frankreich (Hugenotten)'],
        })}
      </div>
    </section>

    <section class="lz-content-section" style="padding-top:0;">
      <div class="lz-section-wrap">
        ${renderSubhead('Chronologie')}
        <h2 class="lz-h2 reveal">Wichtige Daten</h2>
        ${renderVTimeline([
          { year: '31.10.1517', title: 'Luthers 95 Thesen',                text: 'Anschlag an der Schlosskirche zu Wittenberg (nach Tradition) oder versandt an Bischöfe — Auftakt der Reformation.' },
          { year: '1519',       title: 'Leipziger Disputation',            text: 'Luther streitet mit Johann Eck — bekennt sich zur Unfehlbarkeit der Bibel. Klarer Bruch mit Rom.' },
          { year: '1520',       title: 'Drei Reformationsschriften',       text: 'An den christlichen Adel / Babylonische Gefangenschaft / Von der Freiheit eines Christenmenschen.' },
          { year: '1521',       title: 'Reichstag zu Worms',               text: '„Hier stehe ich…" — Luther verweigert Widerruf. Reichsacht. Schutzhaft auf der Wartburg.' },
          { year: '1522',       title: 'Neues Testament auf Deutsch',      text: 'Lutherbibel (NT) in 3 Monaten auf der Wartburg übersetzt. Medienereignis.' },
          { year: '1524–25',    title: 'Bauernkrieg',                      text: 'Reformation und soziale Revolution treffen zusammen — Luther stellt sich gegen Bauern.' },
          { year: '1529',       title: 'Protestation zu Speyer',           text: 'Lutheraner „protestieren" gegen kaisertreue Mehrheit → Beginn des Begriffs „Protestantismus".' },
          { year: '1530',       title: 'Augsburger Bekenntnis (CA)',       text: 'Melanchthon formuliert das lutherische Glaubensbekenntnis — Grunddokument der evangelischen Kirche.' },
          { year: '1534',       title: 'Lutherbibel vollständig',          text: 'Vollständige Bibelübersetzung ins Deutsche — prägt nhd. Schriftsprache.' },
          { year: '1540',       title: 'Gründung der Jesuiten',            text: 'Ignatius von Loyola — intellektuelle Speerspitze der Gegenreformation.' },
          { year: '1545–63',    title: 'Konzil von Trient',                text: 'Dogmatische Festlegung und Reform der Kirche — Beginn des modernen Katholizismus.' },
          { year: '1555',       title: 'Augsburger Religionsfrieden',      text: 'Cuius regio, eius religio — erste dauerhafte Koexistenz zweier Konfessionen im Reich.' },
        ])}
      </div>
    </section>

    <section class="lz-content-section" style="padding-top:0;">
      <div class="lz-section-wrap">
        ${renderPageNav({
          prev: { link: `${BASE}/themen/epochenschwelle/entdeckungen`, label: '1.2 · Zeitalter der Entdeckungen' },
          next: { link: `${BASE}/themen/epochenschwelle/dreissigjaehriger-krieg`, label: '1.4 · Dreißigjähriger Krieg' },
        }, BASE)}
      </div>
    </section>

    ${footerHTML(this.router)}
  `; }

  _panelLuther() {
    return `
      <div class="wim-category" data-wim-cat="luther">
        <h3 class="lz-h3">Missstände in der Kirche</h3>
        <p class="lz-prose">Die Kritik an der Kirche war nicht neu — aber Buchdruck und Humanismus machten eine breite Reformbewegung möglich.</p>
        ${renderAccordion([
          { title: 'Ablasshandel und Simonie', content: `Papst Leo X. ließ durch den Dominikaner <strong>Johannes Tetzel</strong> in Deutschland Ablassbriefe verkaufen, um den Neubau des Petersdoms zu finanzieren. Motto: „Sobald das Geldlein klingt im Schrein, die Seele aus dem Fegefeuer springt."<br><br><em>Simonie</em> = Kauf kirchlicher Ämter. <em>Nikolaitismus</em> = Verletzung des Zölibats. Beides war in der Kirche weit verbreitet.` },
          { title: 'Luther als Ausgangspunkt', content: `Martin Luther (1483–1546), Augustinermönch und Professor in Wittenberg, schrieb am <strong>31. Oktober 1517</strong> seinen 95 Thesen gegen den Ablasshandel. Die These, der Buchdruck verbreitete sie in Wochen durch ganz Deutschland.<br><br>Luther betrieb <em>universitäre Diskussion</em>, keine Spaltung — aber die Reaktion der Kirche zwang ihn zur Radikalisierung.` },
          { title: 'Verhör und Exkommunikation (1521)', content: `Auf dem <strong>Reichstag zu Worms (1521)</strong> sollte Luther widerrufen. Sein Weigerung: <em>„Hier stehe ich, ich kann nicht anders. Gott helfe mir, Amen."</em><br><br>Kaiser Karl V. verhängte die Reichsacht. Kurfürst Friedrich der Weise schützte Luther auf der <strong>Wartburg</strong> (1521–22), wo Luther das Neue Testament ins Deutsche übersetzte.` },
          { title: 'Bibelübersetzung als Medienereignis', content: `Luthers Bibelübersetzung (NT: 1522, vollständige Bibel: 1534) in <strong>mittelhochdeutscher Kanzleisprache</strong> schuf erst einen gemeinsamen deutschen Sprachstandard.<br><br>Innerhalb weniger Wochen wurden Tausende Exemplare gedruckt — erstmals konnten Laien die Bibel selbst lesen. Dies revolutionierte das religiöse, aber auch das politische Denken: Alphabetisierung als Politisierung.` },
        ])}
      </div>
    `;
  }

  _panelAusbreitung() {
    return `
      <div class="wim-category hidden" data-wim-cat="ausbreitung">
        <p class="lz-prose">Die Reformation war kein einheitliches Phänomen — verschiedene Reformatoren entwickelten unterschiedliche theologische und kirchliche Konzepte.</p>
        ${renderTable({
          headers: ['Reformator', 'Ort', 'Besonderheit', 'Konfession'],
          rows: [
            ['Martin Luther', 'Wittenberg/Sachsen', 'Sola-Lehre, Bibelübersetzung; Landeskirche unter Fürstenherrschaft', 'Lutheraner / Evangelisch'],
            ['Ulrich Zwingli', 'Zürich', 'Radikalere Bibelauslegung; Ablehnung von Bildern, kein Priestertum; 1531 im Krieg gefallen', 'Reformiert (Schweiz)'],
            ['Johannes Calvin', 'Genf', 'Prädestinationslehre (Gott bestimmt, wer gerettet wird); theokratische Stadtregierung; strenge Disziplin', 'Calvinismus / Reformiert'],
            ['Täufer', 'Zürich, Münster u.a.', 'Ablehnung der Kindertaufe; Trennung von Kirche und Staat; pazifistisch; von allen Seiten verfolgt', 'Täufertum / Mennoniten'],
          ],
        })}
        ${renderInfobox({ type: 'warning', icon: 'fas fa-fire', title: 'Bauernkrieg (1524–25)', body: `Luthers Freiheitsbegriff wurde von Bauern auf soziale Befreiung ausgedeutet. Die „<strong>12 Artikel von Memmingen</strong>" forderten Abschaffung der Leibeigenschaft. Luther distanzierte sich — er verstand Freiheit als innere, religiöse Freiheit, nicht soziale Revolution.<br><br>Niederschlagung durch Reichstruppen: ~100.000 Tote. Für viele Bauern: Enttäuschung der Reformation.` })}
        ${renderInfobox({ type: 'blue', icon: 'fas fa-city', title: 'Städte als Motoren der Reformation', body: `Stadträte übernahmen die Kirchenherrschaft (<em>Magistratsreformation</em>). Nürnberg, Straßburg, Basel, Ulm wurden früh evangelisch. Neue kirchliche Strukturen entstanden unter städtischer statt bischöflicher Leitung.` })}
      </div>
    `;
  }

  _panelAugsburg() {
    return `
      <div class="wim-category hidden" data-wim-cat="augsburg">
        ${renderInfobox({ type: 'success', icon: 'fas fa-handshake', title: 'Augsburger Religionsfrieden (25. September 1555)', body: `Nach dem <em>Schmalkaldischen Krieg</em> (1546–47) und erneuten Konflikten einigte sich der Reichstag auf einen Friedensschluss:` })}
        <h3 class="lz-h3" style="margin-top:1.5rem;">Kernprinzipien</h3>
        ${renderMerkboxGrid([
          { icon: 'fas fa-flag', title: 'Cuius regio, eius religio', text: '„Wessen Land, dessen Religion" — der Landesfürst bestimmt die Konfession seines Territoriums. Untertanen können auswandern (ius emigrandi).' },
          { icon: 'fas fa-balance-scale', title: 'Parität von Konfessionen', text: 'Lutheraner (Augsburger Bekenntnis, 1530) gleichberechtigt neben Katholiken. Calvinisten noch ausgeschlossen — erst 1648 vollständig anerkannt.' },
          { icon: 'fas fa-church', title: 'Geistlicher Vorbehalt', text: 'Geistliche Reichsfürsten, die zum Protestantismus konvertieren, verlieren ihr Amt und ihre Güter. Sichert kirchliche Territorien für Katholiken.' },
          { icon: 'fas fa-city', title: 'Bikonfessionelle Reichsstädte', text: 'In manchen Reichsstädten (z. B. Augsburg) galten beide Konfessionen gleichzeitig — Vorgriff auf moderne Religionsfreiheit.' },
        ])}
        ${renderInfobox({ type: '', icon: 'fas fa-lightbulb', title: 'Bedeutung und Grenzen', body: `<strong>Bedeutung:</strong> Erster dauerhafter Kompromiss in Religionsfragen auf Reichsebene — Vorbote religiöser Toleranz.<br><br><strong>Grenzen:</strong> Keine Gewissensfreiheit für den Einzelnen — wer nicht der Konfession seines Fürsten folgen wollte, musste auswandern. Calvinisten ausgeschlossen. Spannungen blieben — sie entluden sich im Dreißigjährigen Krieg (1618–1648).` })}
      </div>
    `;
  }

  _panelGegenreform() {
    return `
      <div class="wim-category hidden" data-wim-cat="gegenreform">
        <p class="lz-prose">Die <strong>Gegenreformation</strong> (auch: <em>Katholische Reform</em>) bezeichnet die Erneuerung und Verteidigung der römisch-katholischen Kirche als Reaktion auf den protestantischen Herausforderung.</p>
        ${renderAccordion([
          { title: 'Konzil von Trient (1545–1563)', content: `Das Konzil war ein Doppelprogramm:<ul style="margin:.5rem 0 0 1.2rem;line-height:1.9;"><li><strong>Dogmatische Festlegung:</strong> Ablehnung aller protestantischen Neuerungen (Ablasshandel eingeschränkt, aber Werk- und Sakramentenfrömmigkeit bekräftigt)</li><li><strong>Reform der Missstände:</strong> Bessere Priesterausbildung, Seminare, Bischofsresidenzpflicht, Ende des Ämterverkaufs</li><li><strong>Folge:</strong> Modernisierter Katholizismus — religiös klar konturiert, institutionell effizient</li></ul>` },
          { title: 'Jesuitenorden (Gesellschaft Jesu, 1540)', content: `Ignatius von Loyola gründete den Orden als spirituelle und intellektuelle Elitetruppe der Gegenreformation:<ul style="margin:.5rem 0 0 1.2rem;line-height:1.9;"><li>Strenge Ordensregel, Bildung und Mission als Kernaufgaben</li><li>Gründung von Gymnasien (noch heute: Jesuiten-Schulen)</li><li>Missionstätigkeit in Asien (Franz Xaver), Amerika, Afrika</li><li>Beichtväterfunktion an europäischen Fürstenhöfen → politischer Einfluss</li></ul>` },
          { title: 'Index und Inquisition', content: `<em>Index Librorum Prohibitorum</em> (1559): Liste verbotener Bücher — Kopernikus, Erasmus, Luther standen darauf.<br><br><em>Römische Inquisition</em> (reorganisiert 1542): Häresieverfolgung besonders in Italien und Spanien. Galilei-Prozess (1633) als bekanntester Fall.` },
          { title: 'Konfessionalisierung als gesellschaftlicher Prozess', content: `<strong>Konfessionalisierung</strong> (Begriff der Forschung: Wolfgang Reinhard, Heinz Schilling) bezeichnet die Durchdringung <em>aller Lebensbereiche</em> durch die jeweilige Konfession:<ul style="margin:.5rem 0 0 1.2rem;line-height:1.9;"><li>Schulwesen und Universitäten nach konfessionellen Linien geordnet</li><li>Ehe, Taufe, Begräbnis als kirchliche Kontrollinstrumente</li><li>Konfessionelle Identität als Basis neuzeitlicher Staats- und Nationenbildung</li><li>Disziplinierung der Bevölkerung durch Kirche und Staat gemeinsam</li></ul>` },
        ])}
      </div>
    `;
  }

  init() {
    i18n.init();
    initScrollReveal();
    initInteractive(document);
    initWimTabs(document);
  }
}