// pages/projekte/lernzettel/faecher/geschichte/themen/epochenschwelle/renaissance.js
// 1.1 — Renaissance & Humanismus

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
const RENAISSANCE_TABS = [
  { key: 'ueberblick', label: '🌍 Überblick' },
  { key: 'humanismus', label: '🏛️ Humanismus' },
  { key: 'kunst',      label: '🎨 Kunst & Wiss.' },
  { key: 'bedeutung',  label: '⚡ Bedeutung' },
];

export default class GeschichteRenaissancePage {
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
          <span>1.1 · Renaissance &amp; Humanismus</span>
        </nav>
        <h1 class="lz-sub-title">Renaissance &amp;<br><em>Humanismus.</em></h1>
        <p class="lz-sub-desc">
          Die „Wiedergeburt" der Antike — Wandel des Menschenbildes, Entstehung
          des Individualismus und Grundlegung der modernen europäischen Kultur.
        </p>
        ${renderTags(['1.1', '~1350–1600', 'Frühe Neuzeit', 'Epochenschwelle', 'Abitur 2026'])}
      </div>
    </section>

    <section class="lz-content-section">
      <div class="lz-section-wrap">
        ${renderSubhead('Auf einen Blick')}
        <h2 class="lz-h2 reveal">Die vier Kernideen</h2>
        ${renderMerkboxGrid([
          { icon: 'fas fa-user', title: 'Anthropozentrismus', text: 'Der Mensch tritt in den Mittelpunkt — nicht mehr Gott allein bestimmt das Weltbild. Der Einzelne kann durch Vernunft und Bildung zur Vollkommenheit gelangen.' },
          { icon: 'fas fa-book-open', title: 'Antike als Vorbild', text: '„Rinascita" = Wiedergeburt: Griechen und Römer gelten als Leitbild für Kunst, Literatur, Philosophie und Staatsdenken.' },
          { icon: 'fas fa-magnifying-glass', title: 'Empirismus & Vernunft', text: 'Beobachtung und Erfahrung als Grundlage der Erkenntnis — Vorbote der wissenschaftlichen Revolution (Kopernikus, Galilei).' },
          { icon: 'fas fa-print', title: 'Buchdruck (ca. 1450)', text: 'Gutenbergs Druckerpresse beschleunigt die Verbreitung von Ideen exponentiell. Erste Massenmedienrevolution der Geschichte.' },
        ])}
      </div>
    </section>

    <section class="lz-content-section" style="padding-top:0;">
      <div class="lz-section-wrap">
        ${renderSubhead('Vertiefung')}
        <h2 class="lz-h2 reveal">Renaissance im Detail</h2>

        <nav class="wim-tabs" id="renaissance-tabs" aria-label="Renaissance">
          ${RENAISSANCE_TABS.map((t, i) => `
            <button class="wim-tab${i === 0 ? ' active' : ''}" data-wim="${t.key}">
              ${t.label}
            </button>`).join('')}
        </nav>

        ${this._panelUeberblick()}
        ${this._panelHumanismus()}
        ${this._panelKunst()}
        ${this._panelBedeutung()}

      </div>
    </section>

    <section class="lz-content-section" style="padding-top:0;">
      <div class="lz-section-wrap">
        ${renderSubhead('Chronologie')}
        <h2 class="lz-h2 reveal">Wichtige Daten</h2>
        ${renderVTimeline([
          { year: 'ca. 1304', title: 'Francesco Petrarca geboren',            text: 'Gilt als erster Humanist; entdeckt die individuelle Innenwelt des Menschen.' },
          { year: '1401',     title: 'Wettbewerb Baptisteriumstür Florenz',   text: 'Ghiberti besiegt Brunelleschi — Auftakt des Renaissancewettbewerbs der Künstler.' },
          { year: 'ca. 1415', title: 'Brunelleschi — Zentralperspektive',     text: 'Mathematische Konstruktion des Fluchtpunkts. Revolution in der Malerei.' },
          { year: 'ca. 1450', title: 'Gutenbergs Druckerpresse',              text: 'Movable type ermöglicht Massenproduktion von Texten — Medienrevolution.' },
          { year: '1486',     title: 'Pico della Mirandola: Rede über die Würde des Menschen', text: '„Wir haben dir keinen festen Wohnsitz gegeben, Mensch …" — zentrales Manifest.' },
          { year: '1492',     title: 'Kolumbus erreicht Amerika',             text: 'Renaissance-Denkweise (Entdeckungsdrang, Vermessung der Welt) trieb Exploration an.' },
          { year: '1511',     title: 'Erasmus: Laus Stultitiae',              text: 'Satirische Kirchenkritik — verbindet Humanismus mit Reformwillen.' },
          { year: '1513',     title: 'Machiavelli: Il Principe',              text: 'Erstmals Trennung von Politik und Moral — Beginn moderner Staatstheorie.' },
          { year: '1516',     title: 'Erasmus: Novum Instrumentum',           text: 'Griechisches Neues Testament — philologische Grundlage der Reformation.' },
          { year: '1543',     title: 'Kopernikus & Vesalius',                 text: 'Heliozentrismus + erste systematische Anatomie — Doppelrevolution des Wissens.' },
        ])}
      </div>
    </section>

    <section class="lz-content-section" style="padding-top:0;">
      <div class="lz-section-wrap">
        ${renderPageNav({
          prev: null,
          next: { link: `${BASE}/themen/epochenschwelle/entdeckungen`, label: '1.2 · Zeitalter der Entdeckungen' },
        }, BASE)}
      </div>
    </section>

    ${footerHTML(this.router)}
  `; }

  _panelUeberblick() {
    return `
      <div class="wim-category" data-wim-cat="ueberblick">
        <p class="lz-prose">Der Begriff <strong>Renaissance</strong> (frz./it. „Wiedergeburt") bezeichnete ursprünglich die bewusste Hinwendung zur antiken Kultur in Italien ab ca. 1350. Als kulturelle Epoche markiert sie den Übergang vom Mittelalter zur Neuzeit.</p>
        ${renderInfobox({ type: 'blue', icon: 'fas fa-map-marker-alt', title: 'Entstehungszentren', body: `<strong>Florenz</strong> unter den Medici gilt als Wiege der Renaissance. Weitere Zentren: Venedig, Mailand, Rom (Hochrenaissance), später Frankreich, die Niederlande, Deutschland (<em>Nordische Renaissance</em> / <em>Reformationszeitalter</em>).` })}
        <h3 class="lz-h3" style="margin-top:1.5rem;">Epochengliederung</h3>
        ${renderTable({
          headers: ['Phase', 'Zeitraum', 'Merkmal', 'Beispiel'],
          rows: [
            ['Frührenaissance',  'ca. 1350–1450', 'Aufgreifen antiker Formen', 'Giotto, Brunelleschi'],
            ['Hochrenaissance',  'ca. 1490–1520', 'Vollendung klassischer Harmonie', 'Leonardo, Michelangelo, Raffael'],
            ['Spätrenaissance / Manierismus', 'ca. 1520–1600', 'Aufbrechen der Klassik, Übertriebenheit', 'El Greco, Pontormo'],
            ['Nordische Renaissance', 'ca. 1450–1600', 'Verbindung mit Reformation, Naturalismus', 'Dürer, Erasmus, Holbein'],
          ],
        })}
        ${renderInfobox({ type: '', icon: 'fas fa-lightbulb', title: 'Wichtig für das Abitur', body: 'Die Renaissance ist keine plötzliche Erfindung, sondern ein <strong>Prozess</strong>. Die Übergänge zum Mittelalter (Scholastik) und zur Reformation sind fließend. Entscheidend ist der <em>Wandel des Weltbildes</em>: vom Theozentrismus zum Anthropozentrismus.' })}
      </div>
    `;
  }

  _panelHumanismus() {
    return `
      <div class="wim-category hidden" data-wim-cat="humanismus">
        <p class="lz-prose"><strong>Humanismus</strong> bezeichnet die auf antiken Quellen basierende Bildungsbewegung, die den Menschen (<em>lat. humanitas</em>) in seiner Würde und Entwicklungsfähigkeit in den Mittelpunkt stellt.</p>
        <h3 class="lz-h3">Kernmerkmale</h3>
        ${renderAccordion([
          { title: 'Studia humanitatis', content: 'Kernfächer des humanistischen Bildungskanons: <strong>Grammatik, Rhetorik, Poesie, Geschichte, Moralphilosophie</strong>. Ziel: der gebildete, tugendhafte, gesellschaftsfähige Mensch.' },
          { title: 'Ad fontes — Zurück zu den Quellen', content: 'Kritische Lektüre antiker Originaltexte (Griechisch, Latein) statt scholastischer Kommentare. Erasmus von Rotterdam legt mit seiner Griechischen Bibel (<em>Novum Instrumentum</em>, 1516) den Grundstein für die reformatorische Bibelkritik.' },
          { title: 'Universalgenie', content: 'Ideal des <em>uomo universale</em>: Ein Mensch soll in möglichst vielen Bereichen Exzellenz anstreben. Inbegriff: Leonardo da Vinci — Maler, Bildhauer, Architekt, Ingenieur, Naturforscher.' },
          { title: 'Toleranz und Friedensethik', content: 'Erasmus von Rotterdam (<em>Laus Stultitiae</em>, 1511) und Tommaso More (<em>Utopia</em>, 1516) kritisierten Krieg, kirchliche Missstände und soziale Ungleichheit auf der Grundlage antiker Humanitätsideale.' },
        ])}
        <h3 class="lz-h3" style="margin-top:1.5rem;">Bedeutende Humanisten</h3>
        ${renderTable({
          headers: ['Person', 'Land', 'Werk (Auswahl)', 'Beitrag'],
          rows: [
            ['Francesco Petrarca', 'Italien', 'Canzoniere, Secretum', 'Gilt als erster Humanist; entdeckt die Innerlichkeit des Ichs'],
            ['Pico della Mirandola', 'Italien', 'Rede über die Würde des Menschen (1486)', '„Der Mensch kann alles werden" — Manifest des Humanismus'],
            ['Erasmus von Rotterdam', 'Niederlande', 'Laus Stultitiae, Novum Instrumentum', 'Kritik an Kirche, griech. Bibel; Brücke zwischen Humanismus und Reformation'],
            ['Thomas Morus', 'England', 'Utopia (1516)', 'Gesellschaftskritik, Staatsentwurf ohne Privateigentum'],
            ['Niccolò Machiavelli', 'Italien', 'Il Principe (1513)', 'Begründer des modernen politischen Denkens; trennt Politik von Moral'],
            ['Johannes Reuchlin', 'Deutschland', 'Verteidigung des Hebräischen', 'Kampf für jüdische Schriften, Vorbote der Toleranzidee'],
          ],
        })}
      </div>
    `;
  }

  _panelKunst() {
    return `
      <div class="wim-category hidden" data-wim-cat="kunst">
        <h3 class="lz-h3">Merkmale der Renaissancekunst</h3>
        ${renderMerkboxGrid([
          { icon: 'fas fa-eye', title: 'Zentralperspektive', text: 'Brunelleschi entwickelt ca. 1415 die Konstruktion eines Fluchtpunkts. Erstmals kann Dreidimensionalität systematisch auf der Fläche dargestellt werden.' },
          { icon: 'fas fa-person', title: 'Naturalismus', text: 'Körper werden anatomisch korrekt dargestellt — Aktbilder, Muskelstudien (Leonardo: Vitruvianischer Mensch, ca. 1490).' },
          { icon: 'fas fa-face-smile', title: 'Porträt & Individuum', text: 'Das individuelle Gesicht als Bildthema (Botticelli, Holbein). Selbstporträts entstehen — Ausdruck neuer Ich-Bewusstheit.' },
          { icon: 'fas fa-landmark-dome', title: 'Architektur der Antike', text: 'Säulen, Bögen, Kuppeln nach griech./röm. Vorbild. Florenz-Kathedrale (Brunelleschi), Tempietto (Bramante), Petersdom (Michelangelo).' },
        ])}
        <h3 class="lz-h3" style="margin-top:1.5rem;">Wissenschaftliche Revolution</h3>
        <p class="lz-prose">Renaissance und <strong>Wissenschaftliche Revolution</strong> greifen ineinander. Die Beobachtung der Natur und das Infragestellen kirchlicher Autoritäten schaffen den Boden für neue Weltbilder.</p>
        ${renderTable({
          headers: ['Wissenschaftler', 'Leistung', 'Bedeutung'],
          rows: [
            ['Nikolaus Kopernikus (1473–1543)', 'Heliozentrisches Weltbild (De revolutionibus, 1543)', 'Erschüttert das geozentrische Weltbild der Kirche'],
            ['Galileo Galilei (1564–1642)', 'Teleskop, Fallgesetze, Beweis für Heliozentrismus', 'Methode der empirischen Überprüfung begründet moderne Naturwissenschaft'],
            ['Andreas Vesalius (1514–1564)', 'Erste systematische Anatomie des Menschen (1543)', 'Empirische Medizin statt Galen-Autoritäten'],
            ['Leonardo da Vinci (1452–1519)', 'Anatomische Studien, Ingenieursentwürfe, Kunst', 'Prototyp des Universalgelehrten'],
          ],
        })}
      </div>
    `;
  }

  _panelBedeutung() {
    return `
      <div class="wim-category hidden" data-wim-cat="bedeutung">
        <p class="lz-prose">Die Renaissance ist keine isolierte Kulturepoche, sondern der Knotenpunkt, an dem sich <strong>Reformation</strong>, <strong>Entdeckungen</strong> und <strong>Wissenschaftliche Revolution</strong> treffen.</p>
        ${renderCompare({
          titleA: 'Mittelalterliches Weltbild', titleB: 'Weltbild der Renaissance',
          listA: ['Theozentrismus: Gott im Mittelpunkt aller Ordnung', 'Standesgesellschaft als gottgewollt', 'Kirchliche Autorität über Wissen', 'Jenseits wichtiger als Diesseits', 'Kollektiv wichtiger als Individuum'],
          listB: ['Anthropozentrismus: Mensch als Maß aller Dinge', 'Bildung und Verdienst als Aufstiegsprinzip', 'Rückgriff auf antike Quellen, empirische Beobachtung', 'Diesseits als gestaltbarer Raum', 'Individualität, Selbstdarstellung, Autorschaft'],
        })}
        ${renderInfobox({ type: 'success', icon: 'fas fa-arrow-right', title: 'Wirkung auf Reformation und Aufklärung', body: `<ul style="margin:0;padding-left:1.2rem;line-height:1.9;"><li>Humanistische Textphilologie ermöglicht <strong>Bibelkritik</strong> → Reformation</li><li>Druckerpresse verbreitet reformatorische Schriften in Massenauflage</li><li>Anthropozentrismus und Vernunftprinzip sind Vorläufer der <strong>Aufklärung</strong></li><li>Naturwissenschaft befreit sich von kirchlicher Autorität</li><li>Konzept der <strong>Volkssprachlichkeit</strong> (Dante, Luther) stärkt nationale Kulturen</li></ul>` })}
        ${renderInfobox({ type: 'warning', icon: 'fas fa-exclamation-triangle', title: 'Grenzen der Renaissance', body: `Frauen blieben weitgehend ausgeschlossen. Bildung war ein Privileg der städtischen Oberschicht. Die Entdeckungen führten zur <em>Kolonialisierung</em> und Versklavung anderer Völker — der Humanismus blieb eurozentrisch.` })}
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