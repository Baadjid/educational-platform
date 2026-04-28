// pages/projekte/lernzettel/faecher/geschichte/themen/erinnerungskultur/gedaechtnistheorie.js
// 4.1 — Gedächtnistheorie & Erinnerungskultur

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
const GEDAECHTNIS_TABS = [
  { key: 'halbwachs', label: '🧠 Halbwachs' },
  { key: 'assmann',   label: '📚 Jan & Aleida Assmann' },
  { key: 'nora',      label: '🗺️ Pierre Nora' },
  { key: 'funktionen', label: '⚙️ Funktionen & Kritik' },
];

export default class GeschichteGedaechtnistheorie {
  constructor(router) { this.router = router; }

  render() {
    ensureComponentsCSS();
    [
      ['lernzettel.css', 'pages/projekte/lernzettel/styles/lernzettel.css'],
      ['sub.css',        'pages/projekte/lernzettel/styles/sub.css'],
    ].forEach(([id, href]) => {
      if (!document.querySelector(`link[href*="${id}"]`)) {
        const l = document.createElement('link'); l.rel = 'stylesheet'; l.href = href;
        document.head.appendChild(l);
      }
    });
    const el = document.createElement('div');
    el.className = 'page page-geschichte page-geschichte-sub';
    el.style.setProperty('--lz-accent', COLOR);
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
          <span>4.1 · Gedächtnistheorie</span>
        </nav>
        <h1 class="lz-sub-title">Gedächtnistheorie &amp;<br><em>Erinnerungskultur.</em></h1>
        <p class="lz-sub-desc">
          Wie Gesellschaften erinnern — kollektives Gedächtnis, Erinnerungsorte und
          die politische Funktion von Vergangenheit.
        </p>
        ${renderTags(['4.1', 'Erinnerungskultur', 'Halbwachs', 'Assmann', 'Nora', 'Abitur 2026'])}
      </div>
    </section>

    <section class="lz-content-section">
      <div class="lz-section-wrap">
        ${renderSubhead('Schlüsselbegriffe')}
        <h2 class="lz-h2 reveal">Grundkonzepte</h2>
        ${renderMerkboxGrid([
          { icon: 'fas fa-users', title: 'Kollektives Gedächtnis', text: 'Nach Maurice Halbwachs: Erinnerung ist immer sozial verankert. Wir erinnern uns als Teil einer Gruppe — Familie, Nation, Religionsgemeinschaft.' },
          { icon: 'fas fa-landmark', title: 'Erinnerungsorte', text: 'Pierre Nora: Lieux de mémoire — Orte, Rituale, Symbole, die kollektive Erinnerung tragen. Können physisch (Denkmal), symbolisch (Datum) oder funktional (Schule) sein.' },
          { icon: 'fas fa-book', title: 'Kulturelles Gedächtnis', text: 'Jan und Aleida Assmann: Das institutionalisierte Langzeitgedächtnis einer Gesellschaft — in Texten, Ritualen, Denkmälern. Überdauert individuelle Erinnerungen.' },
          { icon: 'fas fa-clock-rotate-left', title: 'Geschichtspolitik', text: 'Bewusste Gestaltung von Erinnerung durch politische Akteure. Welche Vergangenheit wird gefördert, verdrängt, umgedeutet? Immer machtgebunden.' },
        ])}
      </div>
    </section>

    <section class="lz-content-section" style="padding-top:0;">
      <div class="lz-section-wrap">
        ${renderSubhead('Theorien im Detail')}
        <h2 class="lz-h2 reveal">Gedächtnistheorie — Überblick</h2>

        <nav class="wim-tabs" id="gedaechtnistheorie-tabs" aria-label="Gedächtnistheorie">
          ${GEDAECHTNIS_TABS.map((t, i) => `
            <button class="wim-tab${i === 0 ? ' active' : ''}" data-wim="${t.key}">
              ${t.label}
            </button>`).join('')}
        </nav>

        ${this._panelHalbwachs()}
        ${this._panelAssmann()}
        ${this._panelNora()}
        ${this._panelFunktionen()}

      </div>
    </section>

    <section class="lz-content-section" style="padding-top:0;">
      <div class="lz-section-wrap">
        ${renderPageNav({
          prev: { link: `${BASE}/themen/kalter-krieg/ende-kalter-krieg`,         label: '3.5 · Ende des Kalten Krieges' },
          next: { link: `${BASE}/themen/erinnerungskultur/ns-aufarbeitung`,      label: '4.2 · NS-Aufarbeitung' },
        }, BASE)}
      </div>
    </section>

    ${footerHTML(this.router)}
  `; }

  _panelHalbwachs() {
    return `
      <div class="wim-category" data-wim-cat="halbwachs">
        <p class="lz-prose">Maurice Halbwachs (1877–1945) begründete die soziologische Gedächtnisforschung. Sein Hauptwerk: <em>Das kollektive Gedächtnis</em> (posthum 1950).</p>
        ${renderAccordion([
          { title: 'Kernthese: Gedächtnis ist sozial', content: `Halbwachs widersprach dem Bild des isolierten, individuellen Gedächtnisses. Jede persönliche Erinnerung ist eingebettet in <strong>soziale Rahmen</strong> (<em>cadres sociaux</em>): Familie, Schule, Religion, Berufsgruppe.<br><br>Wir erinnern uns als Mitglieder von Gruppen — und unsere Erinnerungen verändern sich, wenn wir die Gruppe wechseln.` },
          { title: 'Kollektives vs. individuelles Gedächtnis', content: `<ul style="margin:0 0 0 1.2rem;line-height:1.9;"><li><strong>Individuelles Gedächtnis</strong>: persönliche Erfahrungen, einmalig, vergänglich</li><li><strong>Kollektives Gedächtnis</strong>: geteilte Erinnerungen einer Gruppe, sozial konstruiert, weitergegeben</li></ul>Beide überlagern sich: Meine Erinnerung an ein Ereignis ist immer auch gefärbt durch das kollektive Narrativ, das meine Gruppe dazu entwickelt hat.` },
          { title: 'Geschichte vs. Gedächtnis', content: `Halbwachs unterschied scharf:<ul style="margin:0 0 0 1.2rem;line-height:1.9;"><li><strong>Gedächtnis</strong>: lebendig, parteiisch, von Gruppen gepflegt, selektiv</li><li><strong>Geschichte</strong>: akademische Rekonstruktion, Anspruch auf Objektivität, nach Ende des lebendigen Gedächtnisses</li></ul>Geschichte beginnt dort, wo das lebendige Gedächtnis aufhört.` },
        ])}
      </div>
    `;
  }

  _panelAssmann() {
    return `
      <div class="wim-category hidden" data-wim-cat="assmann">
        <p class="lz-prose">Die Ägyptologen und Kulturwissenschaftler Jan Assmann (* 1938) und Aleida Assmann (* 1947) differenzierten Halbwachs weiter.</p>
        ${renderTable({
          headers: ['Begriff', 'Träger', 'Zeitraum', 'Inhalt', 'Beispiel'],
          rows: [
            ['Kommunikatives Gedächtnis', 'Lebende Menschen', '80–100 Jahre', 'Alltagserinnerungen, persönliche Erfahrungen, Generationsgedächtnis', 'Zeitzeugen des Krieges'],
            ['Kulturelles Gedächtnis', 'Institutionen, Texte, Rituale', 'Jahrtausende', 'Fundierendes Wissen, Mythen, kanonische Texte, Ursprungserzählungen', 'Bibel, Ilias, Grundgesetz, Nationalsymbole'],
          ],
        })}
        ${renderInfobox({ type: 'blue', icon: 'fas fa-rotate', title: 'Übergang: floating gap', body: `Zwischen kommunikativem und kulturellem Gedächtnis klafft eine Lücke (<em>floating gap</em>): Ereignisse, die aus dem lebendigen Gedächtnis herausgefallen sind, aber noch nicht kanonisiert wurden. Manche verschwinden — andere werden durch bewusste Erinnerungsarbeit ins kulturelle Gedächtnis gehoben.` })}
        ${renderInfobox({ type: '', icon: 'fas fa-lightbulb', title: 'Aleida Assmanns Erweiterungen', body: `Aleida Assmann unterschied zusätzlich zwischen <strong>Funktionsgedächtnis</strong> (bewohnt, benutzt, identitätsstiftend — das „offizielle" Gedächtnis) und <strong>Speichergedächtnis</strong> (archiviert, latent, potenziell abrufbar — das „vergessene" Gedächtnis). Beide ergänzen sich: Was heute im Archiv liegt, kann morgen politisch werden.` })}
      </div>
    `;
  }

  _panelNora() {
    return `
      <div class="wim-category hidden" data-wim-cat="nora">
        <p class="lz-prose">Der französische Historiker Pierre Nora (* 1931) prägte den Begriff der <strong>Erinnerungsorte</strong> (<em>lieux de mémoire</em>).</p>
        ${renderAccordion([
          { title: 'Was sind Erinnerungsorte?', content: `Nora definierte Erinnerungsorte als „jede bedeutsame Einheit materieller oder ideeller Art, die durch menschlichen Willen oder die Arbeit der Zeit zu einem symbolischen Element des Gedächtniserbes einer Gemeinschaft geworden ist."<br><br>Drei Dimensionen:<ul style="margin:.5rem 0 0 1.2rem;line-height:1.9;"><li><strong>Materiell:</strong> Physische Orte (Mahnmal, Schlachtfeld, Archiv)</li><li><strong>Symbolisch:</strong> Bedeutungsträger (Flagge, Hymne, Datum)</li><li><strong>Funktional:</strong> Praktiken (Gedenkfeier, Lehrplan, Ritual)</li></ul>` },
          { title: 'Warum entstehen Erinnerungsorte?', content: `Noras These: Erinnerungsorte entstehen, wenn das <strong>lebendige Milieu der Erinnerung</strong> (<em>milieux de mémoire</em>) stirbt.<br><br>Wenn Traditionen und Gemeinschaften, die Vergangenheit automatisch weitertragen, verschwinden, braucht man künstliche Orte, um Erinnerung zu bewahren. Erinnerungsorte sind daher immer auch ein Zeichen von Verlust.` },
          { title: 'Beispiele für deutsche Erinnerungsorte', content: `<ul style="margin:0 0 0 1.2rem;line-height:1.9;"><li>Holocaust-Mahnmal Berlin</li><li>Brandenburger Tor</li><li>8. Mai (Kapitulation/Befreiung)</li><li>9. November (Mauerfall, aber auch Pogromnacht 1938)</li><li>Checkpoint Charlie</li><li>Gedenkstätten Buchenwald, Dachau</li></ul>` },
        ])}
      </div>
    `;
  }

  _panelFunktionen() {
    return `
      <div class="wim-category hidden" data-wim-cat="funktionen">
        <h3 class="lz-h3">Funktionen von Erinnerungskultur</h3>
        ${renderMerkboxGrid([
          { icon: 'fas fa-id-card', title: 'Identitätsstiftung', text: 'Gemeinsame Erinnerung schafft kollektive Identität. „Wir" sind diejenigen, die diese Geschichte teilen.' },
          { icon: 'fas fa-scale-balanced', title: 'Legitimation', text: 'Politische Ordnungen beziehen Legitimität aus historischen Narrativen. Wer die Vergangenheit deutet, legitimiert die Gegenwart.' },
          { icon: 'fas fa-graduation-cap', title: 'Mahnung', text: '„Nie wieder!" — Negative Erfahrungen sollen als Warnung dienen. Voraussetzung: Erinnerung muss lebendig gehalten werden.' },
          { icon: 'fas fa-heart', title: 'Trauer & Würde', text: 'Gedenkstätten geben Opfern nachträgliche Würde. Kollektive Trauer als gesellschaftliche Heilungsarbeit.' },
        ])}
        ${renderCompare({
          titleA: 'Erinnerung als Ressource', titleB: 'Erinnerung als Instrument',
          listA: ['Verarbeitung von Trauma und Verlust', 'Identität und Kontinuität', 'Lehren aus der Geschichte', 'Anerkennung von Opfern', 'Demokratische Aufarbeitungskultur'],
          listB: ['Nationalistisch vereinnahmte Heldennarrative', 'Verdrängen unbequemer Erinnerungen', 'Instrumentalisierung gegen politische Gegner', 'Vergleiche, die relativieren statt erklären', 'Gedächtniskonkurrenz zwischen Gruppen'],
        })}
      </div>
    `;
  }

  init() { i18n.init(); initScrollReveal(); initInteractive(document); initWimTabs(document); }
}