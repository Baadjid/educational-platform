// pages/projekte/lernzettel/faecher/sport/themen/sportbiologie/aktiver-bewegungsapparat.js
// Sportbiologie 1.3 — Aktiver Bewegungsapparat

import { initScrollReveal }  from '../../../../../../../shared/js/index.js';
import { footerHTML }         from '../../../../../../../components/Footer.js';
import { i18n }               from '../../../../../../../shared/js/i18n.js';
import { initWimTabs }       from '../../../../../../../shared/js/wim-tabs.js';
import {
  ensureComponentsCSS,
  renderSubhead,
  renderTags,
  renderInfobox,
  renderFormulaBox,
  renderTable,
  renderTabs,
  renderAccordion,
  renderMerkboxGrid,
  renderCompare,
  initInteractive,
} from '../../../../js/components/components.js';
import { renderPageNav } from '../../../../js/components/subnav.js';

import { COLOR, COLOR_RGB, BASE } from '../../sport.js';

// ─── WIM-Tab-Daten ───────────────────────────────────────────────
const AKTIVER_TABS = [
  { key: 'aufbau',       label: '🔬 Muskelaufbau' },
  { key: 'gleittheorie', label: '⚡ Gleittheorie' },
  { key: 'koordination', label: '🧠 Koordination' },
  { key: 'arbeitsweise', label: '💪 Arbeitsweisen' },
  { key: 'fasertypen',   label: '🔴🔵 Fasertypen' },
];

export default class SportAktiverBewegungsapparatPage {
  constructor(router) { this.router = router; }

  render() {
    ensureComponentsCSS();
    const el = document.createElement('div');
    el.className = 'page page-sport-sub';

    if (!document.querySelector('link[href*="sub.css"]')) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'pages/projekte/lernzettel/styles/sub.css';
      document.head.appendChild(link);
    }

    el.style.setProperty('--kap-color',     COLOR);
    el.style.setProperty('--kap-color-rgb', COLOR_RGB);
    el.style.setProperty('--lz-accent',     COLOR);
    el.style.setProperty('--lz-accent-rgb', COLOR_RGB);

    el.innerHTML = this._html();
    return el;
  }

  _html() {
    return `
      <section class="lz-sub-hero">
        <div class="lz-sub-hero-orb" aria-hidden="true"></div>
        <div class="lz-sub-hero-inner">
          <nav class="lz-sub-breadcrumb">
            <button class="lz-bread-link" data-nav-link="/projekte/lernzettel">Lernzettel</button>
            <i class="fas fa-chevron-right"></i>
            <button class="lz-bread-link" data-nav-link="${BASE}">Sport</button>
            <i class="fas fa-chevron-right"></i>
            <span>1.3 · Aktiver Bewegungsapparat</span>
          </nav>
          <h1 class="lz-sub-title">Aktiver Bewegungs-<em>apparat.</em></h1>
          <p class="lz-sub-desc">
            Muskelgewebe, Gleittheorie der Kontraktion, inter- und intramuskuläre
            Koordination, Arbeitsweisen und Muskelfasertypen.
          </p>
          ${renderTags(['Sportbiologie', '1.3', 'Gleittheorie', 'Muskelfaser', 'Koordination'])}
        </div>
      </section>

      <section class="lz-content-section">
        <div class="lz-section-wrap">

          <nav class="wim-tabs" id="aktiverTabs" aria-label="Aktiver Bewegungsapparat">
            ${AKTIVER_TABS.map((t, i) => `
              <button class="wim-tab${i === 0 ? ' active' : ''}" data-wim="${t.key}">
                ${t.label}
              </button>`).join('')}
          </nav>

          ${this._panelAufbau()}
          ${this._panelGleittheorie()}
          ${this._panelKoordination()}
          ${this._panelArbeitsweise()}
          ${this._panelFasertypen()}

        </div>
      </section>

      <section class="lz-content-section" style="padding-top:0;">
        <div class="lz-section-wrap">
          ${renderPageNav({
            prev: { link: `${BASE}/themen/sportbiologie/aktiver-bewegungsapparat`,   label: 'Aktiver Bewegungsapparat' },
            next: { link: `${BASE}/themen/sportbiologie/energiebereitstellung`,     label: 'Energiebereitstellung' },
          }, BASE)}
        </div>
      </section>

      ${footerHTML(this.router)}
    `;
  }

  _panelAufbau() {
    return `
      <div class="wim-category" data-wim-cat="aufbau">
        <h2 class="lz-h2">Hierarchischer Aufbau der Skelettmuskulatur</h2>
        <p class="lz-prose">
          Die Skelettmuskulatur ist quergestreift und willkürlich steuerbar.
          Ihr Aufbau folgt einer klaren Hierarchie vom Gesamtmuskel bis zum Sarkomer.
        </p>
        ${renderMerkboxGrid([
          { icon: 'fas fa-circle-dot',  title: 'Muskel', text: 'Umhüllt von Epimysium. Besteht aus Muskelfaserbündeln (Faszikeln).' },
          { icon: 'fas fa-circle-dot',  title: 'Muskelfaserbündel', text: 'Gruppe von Muskelfasern, umhüllt vom Perimysium.' },
          { icon: 'fas fa-minus',       title: 'Muskelfaser (Muskelzelle)', text: 'Einzelne Zelle, mehrkernig, von Endomysium umhüllt. Enthält Myofibrillen.' },
          { icon: 'fas fa-bars',        title: 'Myofibrille', text: 'Kontraktiles Element. Besteht aus Sarkomeren in Reihe.' },
          { icon: 'fas fa-table-cells', title: 'Sarkomer', text: 'Kleinste Funktionseinheit der Muskelkontraktion. Begrenzt von Z-Scheiben.' },
        ])}
        ${renderInfobox({
          icon: 'fas fa-layer-group', title: 'Sarkomer-Aufbau (im Detail)',
          body: `<strong>Z-Scheibe:</strong> Begrenzung des Sarkomers.<br>
                 <strong>Aktin (dünne Filamente):</strong> Verbunden mit Z-Scheibe; enthalten Troponin & Tropomyosin (Regulationsproteine).<br>
                 <strong>Myosin (dicke Filamente):</strong> Mit Querbrücken (Myosinköpfe), die an Aktin binden können.<br>
                 <strong>Titin:</strong> Elastisches Protein — verhindert Überdehnung, gibt Ruhespannung.<br>
                 <strong>H-Zone:</strong> Nur Myosin. <strong>I-Band:</strong> Nur Aktin. <strong>A-Band:</strong> Überlappungszone.`,
        })}
        ${renderTable({
          headers: ['Muskelgewebeart', 'Steuerung', 'Querstreifung', 'Vorkommen'],
          rows: [
            ['Quergestreifte Skelettmuskulatur', 'Willkürlich', 'Ja', 'Rumpf, Extremitäten, Mimik'],
            ['Herzmuskulatur', 'Unwillkürlich (autonom)', 'Ja', 'Herz'],
            ['Glatte Muskulatur', 'Unwillkürlich (ANS)', 'Nein', 'Hohlorgane, Blutgefäße'],
          ],
          highlight: [0],
        })}
      </div>
    `;
  }

  _panelGleittheorie() {
    return `
      <div class="wim-category hidden" data-wim-cat="gleittheorie">
        <h2 class="lz-h2">Gleitfilament-Theorie der Muskelkontraktion</h2>
        <p class="lz-prose">
          Die Gleittheorie (Huxley & Hanson, 1954) erklärt, wie Aktin- und Myosin-Filamente
          aneinander vorbeigleiten — ohne sich selbst zu verkürzen.
        </p>
        ${renderInfobox({
          icon: 'fas fa-arrows-left-right', title: 'Ablauf der Kontraktion (Querbrückenzyklus)',
          body: `<ol style="margin:0; padding-left:1.4rem; line-height:2.0;">
            <li><strong>Ruhezustand:</strong> Tropomyosin verdeckt die Aktinbindungsstellen. Kein Kontakt Myosin-Aktin.</li>
            <li><strong>Ca²⁺-Freisetzung:</strong> Aktionspotenzial → Calciumionen aus dem sarkoplasmatischen Retikulum.</li>
            <li><strong>Aktivierung:</strong> Ca²⁺ bindet an Troponin → Tropomyosin verschiebt sich → Bindungsstellen an Aktin frei.</li>
            <li><strong>Querbrückenbildung:</strong> Myosinkopf bindet an Aktin (Querbrücke).</li>
            <li><strong>Kraftschlag:</strong> Myosinkopf klappt um → Aktin wird Richtung Sarkomermitte gezogen → Verkürzung.</li>
            <li><strong>ATP-Bindung:</strong> ATP bindet an Myosinkopf → Lösung der Querbrücke.</li>
            <li><strong>ATP-Spaltung:</strong> ATPase spaltet ATP → Myosinkopf kehrt in Ausgangsposition zurück.</li>
            <li><strong>Entspannung:</strong> Ca²⁺ wird zurückgepumpt (aktiv, ATP-verbrauchend) → Tropomyosin bedeckt Aktinstellen wieder.</li>
          </ol>`,
        })}
        ${renderFormulaBox({
          label: 'Energiebilanz eines Querbrückenzyklus',
          formula: 'ATP → ADP + Pᵢ + Energie (Kraftschlag)',
          desc: 'Jeder Querbrückenzyklus verbraucht 1 ATP-Molekül. Ohne ATP kein Lösen der Querbrücke → Totenstarre (Rigor mortis).',
        })}
        ${renderInfobox({
          type: 'tip', icon: 'fas fa-lightbulb', title: 'Längen-Spannungs-Beziehung',
          body: `Maximale Kraft bei optimaler Sarkomerlänge (~2,2 µm): maximale Überlappung von Aktin und Myosin. 
                 Bei zu kurzer oder zu langer Sarkomerlänge sinkt die Kraft — 
                 erklärt z. B. warum ein fast gestreckter Muskel weniger Kraft entwickelt.`,
        })}
      </div>
    `;
  }

  _panelKoordination() {
    return `
      <div class="wim-category hidden" data-wim-cat="koordination">
        <h2 class="lz-h2">Inter- und intramuskuläre Koordination</h2>
        ${renderCompare({
          titleA: 'Intermuskuläre Koordination',
          titleB: 'Intramuskuläre Koordination',
          listA: [
            '<strong>Zusammenspiel mehrerer Muskeln</strong>',
            'Agonist / Antagonist / Synergist',
            'Verbessert durch Techniktraining',
            'Reziproke Hemmung des Antagonisten',
            'Ermöglicht ökonomische Bewegungsausführung',
          ],
          listB: [
            '<strong>Steuerung innerhalb eines Muskels</strong>',
            'Rekrutierung + Frequenzierung + Synchronisation',
            'Verbessert durch Maximalkrafttraining',
            'Mehr Einheiten = mehr Kraft',
            'Höhere Feuerrate = mehr Kraft',
          ],
        })}
        ${renderInfobox({
          icon: 'fas fa-users', title: 'Muskelrollen',
          body: `<strong>Agonist:</strong> Hauptbewegungsmuskel (z. B. Bizeps beim Curl).<br>
                 <strong>Antagonist:</strong> Gegenspieler — wird bei Kontraktion des Agonisten reziprok gehemmt (z. B. Trizeps).<br>
                 <strong>Synergist:</strong> Unterstützender Muskel, gleiche Bewegungsrichtung (z. B. Brachioradialis beim Curl).<br>
                 <strong>Fixatoren:</strong> Stabilisieren Ursprungsgelenk (z. B. Rotatorenmanschette bei Armheben).`,
        })}
        ${renderTable({
          headers: ['Mechanismus', 'Beschreibung', 'Training'],
          rows: [
            ['Rekrutierung', 'Anzahl der aktivierten motorischen Einheiten', 'Maximalkraft, Hypertrophie'],
            ['Frequenzierung', 'Impulsrate [Hz] — Einzelzuckung vs. Tetanus', 'Schnellkraft, Explosivkraft'],
            ['Synchronisation', 'Zeitliche Abstimmung der MEs', 'IK-Training (85–100 % 1RM)'],
          ],
        })}
        ${renderInfobox({
          icon: 'fas fa-circle', title: 'Motorische Einheit',
          body: `Ein <strong>Motoneuron</strong> + alle von ihm innervierten Muskelfasern = motorische Einheit (ME).<br>
                 <strong>Alles-oder-Nichts-Gesetz:</strong> Wird die Reizschwelle eines Motoneurons überschritten, 
                 kontrahieren <em>alle</em> zugehörigen Fasern vollständig.<br>
                 Kleine MEs (wenige Fasern, Typ-I) werden zuerst rekrutiert (Henneman-Prinzip / Größenprinzip).`,
        })}
      </div>
    `;
  }

  _panelArbeitsweise() {
    return `
      <div class="wim-category hidden" data-wim-cat="arbeitsweise">
        <h2 class="lz-h2">Arbeitsweisen der Muskulatur</h2>
        ${renderTable({
          headers: ['Arbeitsweise', 'Längenänderung', 'Kraft vs. Widerstand', 'Beispiel'],
          rows: [
            ['Konzentrisch (überwindend)', 'Muskel verkürzt sich', 'Kraft > Widerstand', 'Bizeps-Curl aufwärts, Kniebeuge aufwärts'],
            ['Exzentrisch (nachgebend)', 'Muskel verlängert sich unter Spannung', 'Kraft < Widerstand (abbremsen)', 'Bizeps-Curl abwärts, Kniebeuge abwärts'],
            ['Isometrisch (haltend)', 'Keine Längenänderung', 'Kraft = Widerstand', 'Wandsitz, Plank, Halten einer Last'],
            ['Isokinetisch', 'Konstante Geschwindigkeit', 'Variable Kraft', 'Nur mit Spezialgeräten (Dynamometer)'],
            ['Auxotonisch', 'Verkürzt + Spannung steigt', 'Widerstand variiert', 'Federübungen, elastische Widerstände'],
          ],
          highlight: [1],
        })}
        ${renderInfobox({
          type: 'tip', icon: 'fas fa-lightbulb', title: 'Exzentrisch = stärker',
          body: `Exzentrische Muskelarbeit erzeugt bis zu <strong>40 % mehr Kraft</strong> als konzentrische 
                 (gleicher Querschnitt) — mehr Querbrücken können gleichzeitig halten als ziehen.<br>
                 Daher: höheres Verletzungsrisiko durch Muskelkater (DOMS) bei exzentrischem Training, 
                 aber auch stärkster Reiz für Hypertrophie.`,
        })}
        ${renderInfobox({
          icon: 'fas fa-rotate', title: 'Dehnungs-Verkürzungs-Zyklus (DVZ)',
          body: `Vorherige exzentrische Phase → stärkere konzentrische Kontraktion. 
                 Gründe: <strong>elastische Energie</strong> in Sehnen + Bindegewebe gespeichert, 
                 Dehnungsreflex (Ia-Afferenzen) aktiviert mehr Motoreinheiten.<br>
                 Relevanz: Springen (CMJ > SJ), Sprinten, Wurfbewegungen. Trainierbar durch Plyometrie.`,
        })}
      </div>
    `;
  }

  _panelFasertypen() {
    return `
      <div class="wim-category hidden" data-wim-cat="fasertypen">
        <h2 class="lz-h2">Muskelfasertypen und ihre Unterschiede</h2>
        <p class="lz-prose">
          Skelettmuskeln enthalten verschiedene Fasertypen in unterschiedlichen Anteilen —
          genetisch determiniert, aber durch Training bedingt verschiebbar.
        </p>
        ${renderTable({
          headers: ['Merkmal', 'Typ I (ST)', 'Typ IIa (FT-oxidativ)', 'Typ IIx (FT-glykolytisch)'],
          rows: [
            ['Farbe', 'Rot', 'Rötlich', 'Weiß'],
            ['Kontraktionsgeschwindigkeit', 'Langsam (~90 ms)', 'Schnell (~50 ms)', 'Sehr schnell (~40 ms)'],
            ['Ermüdungswiderstand', 'Sehr hoch', 'Mittel', 'Niedrig (schnelle Ermüdung)'],
            ['Energiestoffwechsel', 'Aerob (oxidativ)', 'Gemischt (aerob + anaerob)', 'Anaerob (glykolytisch)'],
            ['Mitochondrien', 'Viele, groß', 'Mittel', 'Wenige'],
            ['Kapillardichte', 'Hoch', 'Mittel', 'Niedrig'],
            ['Myosin-ATPase-Aktivität', 'Gering (langsam)', 'Hoch', 'Sehr hoch'],
            ['Glykogengehalt', 'Gering', 'Mittel', 'Hoch'],
            ['Haupteinsatz', 'Ausdauer, Haltung', 'Kraft + Ausdauer', 'Maximalkraft, Sprint'],
          ],
          highlight: [0],
        })}
        ${renderInfobox({
          type: 'tip', icon: 'fas fa-lightbulb', title: 'Trainingsanpassung der Fasertypen',
          body: `<strong>Vollständige Konversion</strong> Typ I ↔ II ist beim Menschen kaum möglich.<br>
                 <strong>Möglich:</strong> Typ IIx → Typ IIa durch Ausdauertraining (aerobere Eigenschaften).<br>
                 <strong>Hypertrophie:</strong> Typ-II-Fasern wachsen stärker durch Krafttraining.<br>
                 Ausdauersportler (Marathonläufer): ~80 % Typ I. Sprinter: ~80 % Typ II.`,
        })}
        ${renderAccordion([
          {
            title: 'Motorisches Rekrutierungsprinzip (Größenprinzip nach Henneman)',
            content: `Bei steigender Kraftanforderung werden motorische Einheiten in fester Reihenfolge aktiviert:<br>
                       <strong>Typ I (klein, niedrige Schwelle)</strong> → Typ IIa → Typ IIx (groß, hohe Schwelle).<br>
                       Bei submaximaler Ausdauerbelastung sind meist nur Typ-I-Fasern aktiv. 
                       Maximale Kraftentfaltung rekrutiert alle Fasertypen gleichzeitig.`,
          },
          {
            title: 'Muskelkater (DOMS) — Ursache und Bedeutung',
            content: `Verzögerter Muskelkater (Delayed Onset Muscle Soreness) entsteht <strong>12–72 h</strong> nach 
                       ungewohnter, besonders exzentrischer Belastung.<br>
                       <strong>Ursache:</strong> Mikrotraumatisierungen im Sarkomer (Z-Scheiben-Risse) 
                       + entzündliche Reaktion + Gewebeödem.<br>
                       <strong>Kein Laktat!</strong> (veraltete Theorie)<br>
                       <strong>Bedeutung:</strong> Anpassungsreiz → Superkompensation → stärkere Myofibrillen.`,
          },
        ])}
      </div>
    `;
  }

  init() {
    i18n.init();
    initScrollReveal();
    initInteractive(document.querySelector('.page-sport-sub'));
    document.querySelectorAll('[data-nav-link]').forEach(btn => {
      btn.addEventListener('click', () => {
        const link = btn.dataset.navLink;
        if (link) window.location.hash = link;
      });
    });
    initWimTabs(document);
  }
}