// pages/projekte/lernzettel/faecher/geschichte/themen/epochenschwelle/entdeckungen.js
// 1.2 — Zeitalter der Entdeckungen & Kolonialismus

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
const ENTDECKUNGEN_TABS = [
  { key: 'reisen',    label: '🧭 Entdeckungsreisen' },
  { key: 'conquista', label: '⚔️ Conquista' },
  { key: 'dreieck',   label: '🔺 Dreieckshandel' },
  { key: 'folgen',    label: '🌐 Folgen' },
];

export default class GeschichteEntdeckungenPage {
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
          <span>1.2 · Zeitalter der Entdeckungen</span>
        </nav>
        <h1 class="lz-sub-title">Zeitalter der Entdeckungen<br><em>&amp; Kolonialismus.</em></h1>
        <p class="lz-sub-desc">
          Europäische Expansion, Conquista und Dreieckshandel — wie Europa die Welt
          neu ordnete und welche menschlichen Kosten damit verbunden waren.
        </p>
        ${renderTags(['1.2', '~1450–1600', 'Frühe Neuzeit', 'Kolonialismus', 'Abitur 2026'])}
      </div>
    </section>

    <section class="lz-content-section">
      <div class="lz-section-wrap">
        ${renderSubhead('Auf einen Blick')}
        <h2 class="lz-h2 reveal">Motive der Entdeckungsreisen</h2>
        <p class="lz-prose reveal">Das klassische Dreiklang der Antriebskräfte:</p>
        ${renderMerkboxGrid([
          { icon: 'fas fa-coins', title: 'Gold (Wirtschaft)', text: 'Direkte Handelsrouten zu Gewürzen (Pfeffer, Ingwer, Nelken) und Edelmetallen. Der Landweg nach Asien war durch das Osmanische Reich (1453 Konstantinopel) teuer und unsicher.' },
          { icon: 'fas fa-cross', title: 'Gott (Mission)', text: 'Verbreitung des Christentums als religiöser Auftrag und Legitimitätsgrundlage für Kolonisierung. Päpstliche Bullen stützten Herrschaftsansprüche.' },
          { icon: 'fas fa-crown', title: 'Gloria (Macht)', text: 'Ruhm für Krone und Nation. Rivalen Portugal und Spanien trieben sich gegenseitig zu Expeditionen an — internationale Machtpolitik als Motor.' },
          { icon: 'fas fa-compass', title: 'Technische Voraussetzungen', text: 'Karavelle (seetüchtiges Schiff), Kompass (aus China via Islam), verbesserte Seekarten (Portolane), Astrolabium zur Positionsbestimmung.' },
        ])}
      </div>
    </section>

    <section class="lz-content-section" style="padding-top:0;">
      <div class="lz-section-wrap">
        ${renderSubhead('Vertiefung')}
        <h2 class="lz-h2 reveal">Entdeckungen &amp; Kolonialismus</h2>

        <nav class="wim-tabs" id="entdeckungen-tabs" aria-label="Zeitalter der Entdeckungen">
          ${ENTDECKUNGEN_TABS.map((t, i) => `
            <button class="wim-tab${i === 0 ? ' active' : ''}" data-wim="${t.key}">
              ${t.label}
            </button>`).join('')}
        </nav>

        ${this._panelReisen()}
        ${this._panelConquista()}
        ${this._panelDreieck()}
        ${this._panelFolgen()}

      </div>
    </section>

    <section class="lz-content-section" style="padding-top:0;">
      <div class="lz-section-wrap">
        ${renderSubhead('Chronologie')}
        <h2 class="lz-h2 reveal">Wichtige Daten</h2>
        ${renderVTimeline([
          { year: '1415',     title: 'Portugal erobert Ceuta',             text: 'Beginn portugiesischer Expansion entlang der Westküste Afrikas.' },
          { year: '1440er',   title: 'Portugiesischer Sklavenhandel',      text: 'Erste systematische Verschleppung afrikanischer Menschen durch Europäer.' },
          { year: '1487–88',  title: 'Dias: Kap der Guten Hoffnung',       text: 'Ostasienroute über den Seeweg wird möglich.' },
          { year: '1492',     title: 'Kolumbus: Amerika',                  text: 'Europa entdeckt einen „neuen" Kontinent — für 50 Millionen Menschen war er nicht neu.' },
          { year: '1494',     title: 'Vertrag von Tordesillas',             text: 'Papst teilt die Welt zwischen Spanien und Portugal auf.' },
          { year: '1498',     title: 'Vasco da Gama: Indien',              text: 'Direkter Seeweg → Monopolisierung des Gewürzhandels durch Portugal.' },
          { year: '1519–22',  title: 'Weltumseglung (Magellan/Elcano)',    text: 'Beweis: Die Erde ist eine Kugel. Pazifik als neue Handelsroute.' },
          { year: '1519–21',  title: 'Conquista Azteken (Cortés)',         text: 'Tenochtitlán fällt — beginnt die Kolonisierung Mexikos.' },
          { year: '1532–35',  title: 'Conquista Inka (Pizarro)',           text: 'Potosí-Silber beginnt Europa zu überschwemmen.' },
          { year: '1542',     title: 'Las Casas: Bericht über Verwüstung', text: 'Erste europäische Menschenrechtskritik am Kolonialismus.' },
        ])}
      </div>
    </section>

    <section class="lz-content-section" style="padding-top:0;">
      <div class="lz-section-wrap">
        ${renderPageNav({
          prev: { link: `${BASE}/themen/epochenschwelle/renaissance`, label: '1.1 · Renaissance & Humanismus' },
          next: { link: `${BASE}/themen/epochenschwelle/reformation`, label: '1.3 · Reformation' },
        }, BASE)}
      </div>
    </section>

    ${footerHTML(this.router)}
  `; }

  _panelReisen() {
    return `
      <div class="wim-category" data-wim-cat="reisen">
        ${renderTable({
          headers: ['Jahr', 'Person', 'Nation', 'Leistung'],
          rows: [
            ['1487–88', 'Bartolomeu Dias', 'Portugal', 'Umrundung des Kaps der Guten Hoffnung — Weg nach Asien offen'],
            ['1492',    'Christoph Kolumbus', 'Spanien', 'Erreicht die Karibik (Bahamas) — glaubt, Indien entdeckt zu haben'],
            ['1498',    'Vasco da Gama', 'Portugal', 'Erste direkte Seeverbindung Portugal → Indien (Calicut); Gewürzhandel revolutioniert'],
            ['1500',    'Pedro Álvares Cabral', 'Portugal', 'Landung in Brasilien — für Portugal beansprucht'],
            ['1507',    'Amerigo Vespucci', 'Italien/Sp.', 'Erkennt, dass Amerika ein eigenständiger Kontinent ist — der Kontinent wird nach ihm benannt'],
            ['1519–21', 'Hernán Cortés', 'Spanien', 'Conquista des Aztekenreichs in Mexiko'],
            ['1519–22', 'Ferdinand Magellan / Elcano', 'Spanien', 'Erste Weltumsegelung — Beweis der Kugelgestalt der Erde'],
            ['1532–33', 'Francisco Pizarro', 'Spanien', 'Conquista des Inkareichs in Peru'],
            ['1534',    'Jacques Cartier', 'Frankreich', 'Erkundung Kanadas → Beginn der französischen Kolonialherrschaft'],
          ],
        })}
        ${renderInfobox({
          type: 'blue', icon: 'fas fa-scale-balanced', title: 'Vertrag von Tordesillas (1494)',
          body: `Auf päpstliche Initiative teilen Portugal und Spanien die Welt durch eine Meridian-Grenzlinie (ca. 370 Leguas westlich der Azoren) auf:
                 <ul style="margin:.5rem 0 0 1.2rem;line-height:1.9;">
                   <li><strong>Portugal:</strong> Ostroute (Asien, Brasilien, Afrika)</li>
                   <li><strong>Spanien:</strong> Westroute (Amerika)</li>
                 </ul>
                 Andere europäische Mächte (England, Frankreich, Niederlande) ignorierten den Vertrag.`,
        })}
      </div>
    `;
  }

  _panelConquista() {
    return `
      <div class="wim-category hidden" data-wim-cat="conquista">
        <p class="lz-prose">
          Als <strong>Conquista</strong> (span. „Eroberung") bezeichnet man die gewaltsame
          Unterwerfung der Hochkulturen Mittel- und Südamerikas durch spanische Conquistadoren.
        </p>
        ${renderAccordion([
          { title: 'Cortés und die Azteken (1519–1521)', content: `Hernán Cortés landete 1519 mit ~500 Mann in Mexiko. Er nutzte:
            <ul style="margin:.5rem 0 0 1.2rem;line-height:1.9;">
              <li><strong>Innere Spannungen:</strong> Verbündete sich mit Azteken-Feinden (v. a. Tlaxcalteken)</li>
              <li><strong>Technologische Überlegenheit:</strong> Schießpulver, Pferde, Stahlrüstungen</li>
              <li><strong>Quetzalcóatl-Mythos:</strong> Montezuma II. hielt Cortés zunächst für einen Gott</li>
              <li><strong>Epidemien:</strong> Pocken töteten Hunderttausende Azteken (keine Immunität)</li>
            </ul>
            1521 fiel Tenochtitlán. Das Aztekenreich wurde zur <em>Neuen Spanien</em>.` },
          { title: 'Pizarro und die Inka (1532–1535)', content: `Francisco Pizarro nutzte einen innerdinastischen Bürgerkrieg im Inkareich. Mit 168 Mann gefangen er <strong>Atahualpa</strong>, den Inkaherrscher, bei Cajamarca (1532). Trotz riesiger Lösegeldzahlung (Gold und Silber) ließ er ihn hinrichten. 1535 fiel Cuzco — das riesige Inkareich kollabierte innerhalb weniger Jahre.` },
          { title: 'Methoden der Conquista und Encomienda-System', content: `Die Conquistadoren etablierten das <em>Encomienda</em>-System: Indigene wurden als Arbeitskraft einem Spanier „anvertraut" — faktisch Zwangsarbeit in Bergwerken (Silber: Potosí) und Plantagen. Bartolomé de las Casas (<em>Kurzgefasster Bericht über die Verwüstung der Westindischen Länder</em>, 1542) dokumentierte und verurteilte die Grausamkeiten.` },
        ])}
      </div>
    `;
  }

  _panelDreieck() {
    return `
      <div class="wim-category hidden" data-wim-cat="dreieck">
        <p class="lz-prose">
          Der <strong>Atlantische Dreieckshandel</strong> (ca. 1500–1800) war das erste
          transozeanische Handelssystem der Geschichte — und zugleich eines der größten
          Verbrechen der Neuzeit: der transatlantische Sklavenhandel.
        </p>
        ${renderTable({
          headers: ['Strecke', 'Güter', 'Richtung'],
          rows: [
            ['Europa → Westafrika', 'Waffen, Textilien, Alkohol, Metallwaren', '→ Süd'],
            ['Westafrika → Amerika (Mittelpassage)', 'Versklavte Menschen (~12,5 Millionen über 3 Jh.)', '→ West'],
            ['Amerika → Europa', 'Zucker, Tabak, Baumwolle, Rohstoffe, Silber', '→ Ost'],
          ],
        })}
        ${renderInfobox({
          type: 'warning', icon: 'fas fa-exclamation-triangle', title: 'Mittelpassage — menschliche Kosten',
          body: `Ca. <strong>12,5 Millionen Menschen</strong> wurden zwischen 1500 und 1867 aus Afrika nach Amerika verschifft. 10–20 % starben auf der Überfahrt. Die Überlebenden erwarteten Sklaverei auf Plantagen.<br><br>Afrika verlor Generationen arbeitsfähiger Menschen → langfristige demografische und wirtschaftliche Schäden.`,
        })}
        ${renderInfobox({
          type: '', icon: 'fas fa-database', title: 'Silberströme nach Europa',
          body: `Das Silber aus Potosí (Peru) und Zacatecas (Mexiko) überschwemmte Europa: Zwischen 1500 und 1650 strömten schätzungsweise <strong>200.000 Tonnen Silber</strong> nach Europa. Folge: <em>Preisrevolution</em> — Inflation zerstörte mittelalterliche Wirtschaftsordnungen und begünstigte kapitalistische Handelsformen.`,
        })}
      </div>
    `;
  }

  _panelFolgen() {
    return `
      <div class="wim-category hidden" data-wim-cat="folgen">
        ${renderCompare({
          titleA: 'Für Europa', titleB: 'Für indigene Völker Amerikas',
          listA: [
            'Zugang zu neuen Rohstoffen, Nahrungsmitteln (Kartoffel, Mais, Tomate)',
            'Beginn des Welthandels und des Kapitalismus',
            'Silberstrom → Preisrevolution, neue Finanzsysteme',
            'Aufstieg Spaniens und Portugals zur Weltmacht',
            'Verbreitung europ. Kultur und Sprachen weltweit',
          ],
          listB: [
            '~90 % der indigenen Bevölkerung Amerikas sterben (Epidemien, Krieg, Sklaverei)',
            'Azteken- und Inkareich zerstört — Hochkulturen vernichtet',
            'Encomienda und Sklaverei: Ausbeutung über Generationen',
            'Kulturelle Auslöschung: Sprachen, Religionen, Architekturen',
            'Demografische Katastrophe ohne Beispiel in der Geschichte',
          ],
        })}
        ${renderInfobox({
          type: 'blue', icon: 'fas fa-arrows-rotate', title: 'Colombianischer Austausch',
          body: `Der Biologe Alfred W. Crosby prägte den Begriff <em>Columbian Exchange</em>:
                 <ul style="margin:.5rem 0 0 1.2rem;line-height:1.9;">
                   <li><strong>Europa → Amerika:</strong> Pocken, Masern, Grippe, Pferde, Rinder, Weizen, Zuckerrohr</li>
                   <li><strong>Amerika → Europa:</strong> Kartoffel, Mais, Tomate, Kakao, Tabak, Chili</li>
                 </ul>
                 Die Kartoffel ernährte Europa und ermöglichte Bevölkerungswachstum — mittelbar Ursache für die Industrialisierung.`,
        })}
        ${renderInfobox({
          type: 'success', icon: 'fas fa-lightbulb', title: 'Für das Abitur',
          body: `<strong>Kernthese:</strong> Die europäischen Entdeckungen sind kein heroisches Abenteuer, sondern Auftakt eines globalen Ungleichgewichts. Humanismus und Kolonialismus entstehen <em>gleichzeitig</em> — der Widerspruch zwischen Menschenwürde als europäischem Ideal und seiner systematischen Verletzung ist ein zentrales Thema der Weltgeschichte.`,
        })}
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