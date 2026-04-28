// pages/projekte/lernzettel/faecher/geschichte/themen/erinnerungskultur/historikerstreit.js
// 4.4 — Historikerstreit (1986–87)

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
const HISTORIKERSTREIT_TABS = [
  { key: 'ausloeser',   label: '📰 Auslöser & Positionen' },
  { key: 'singularitaet', label: '⚖️ Kernfrage: Singularität' },
  { key: 'nachwirkungen', label: '🔁 Nachwirkungen' },
];

export default class GeschichteHistorikerstreit {
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
          <span>4.4 · Historikerstreit</span>
        </nav>
        <h1 class="lz-sub-title">Historikerstreit<br><em>1986–1987.</em></h1>
        <p class="lz-sub-desc">
          War der Holocaust einzigartig? Die wichtigste geschichtspolitische Debatte
          der Bundesrepublik — und ihre Nachwirkungen bis heute.
        </p>
        ${renderTags(['4.4', '1986–87', 'Historikerstreit', 'Nolte', 'Habermas', 'Abitur 2026'])}
      </div>
    </section>

    <section class="lz-content-section">
      <div class="lz-section-wrap">
        ${renderSubhead('Streitfrage')}
        <h2 class="lz-h2 reveal">War der Holocaust einzigartig?</h2>
        ${renderInfobox({ type: 'warning', icon: 'fas fa-exclamation-triangle', title: 'Kernfrage des Historikerstreits', body: `Ist der nationalsozialistische Massenmord an den Juden ein <strong>singuläres, unvergleichliches Verbrechen</strong> — oder kann und muss er mit anderen Völkermorden verglichen werden (z. B. Stalins Gulag)?<br><br>Die Antwort hat nicht nur wissenschaftliche, sondern hochpolitische Bedeutung: Wer vergleicht, relativiert — oder schärft den Blick?` })}
        ${renderMerkboxGrid([
          { icon: 'fas fa-pen', title: 'Ernst Nolte', text: 'These: Der Holocaust war eine defensive Reaktion auf den sowjetischen Gulag. Nationalsozialismus = Antwort auf Bolschewismus. Nicht einzigartig.' },
          { icon: 'fas fa-comments', title: 'Jürgen Habermas', text: 'Gegenangriff im „Zeit"-Essay: Nolte betreibt „apologetische Tendenz" — historische Relativierung, die Deutschland von Schuld entlasten soll.' },
          { icon: 'fas fa-book', title: 'Andreas Hillgruber', text: 'Buch „Zweierlei Untergang": Wehrmacht an der Ostfront als Verteidiger gegen Rache — implizit Wehrmacht rehabilitiert. Von Habermas scharf kritisiert.' },
          { icon: 'fas fa-scale-balanced', title: 'Michael Stürmer', text: 'These: Deutschland braucht eine positive Nationalidentität. Geschichte soll nicht nur Schuldnarrative liefern, sondern auch stabilisierend wirken.' },
        ])}
      </div>
    </section>

    <section class="lz-content-section" style="padding-top:0;">
      <div class="lz-section-wrap">
        ${renderSubhead('Vertiefung')}
        <h2 class="lz-h2 reveal">Positionen &amp; Bedeutung</h2>

        <nav class="wim-tabs" id="historikerstreit-tabs" aria-label="Historikerstreit">
          ${HISTORIKERSTREIT_TABS.map((t, i) => `
            <button class="wim-tab${i === 0 ? ' active' : ''}" data-wim="${t.key}">
              ${t.label}
            </button>`).join('')}
        </nav>

        ${this._panelAusloeser()}
        ${this._panelSingularitaet()}
        ${this._panelNachwirkungen()}

      </div>
    </section>

    <section class="lz-content-section" style="padding-top:0;">
      <div class="lz-section-wrap">
        ${renderSubhead('Chronologie')}
        <h2 class="lz-h2 reveal">Schlüsseldaten</h2>
        ${renderVTimeline([
          { year: 'Jun. 1986',  title: 'Noltes FAZ-Artikel',              text: '„Vergangenheit, die nicht vergehen will" — Startschuss.' },
          { year: 'Jul. 1986',  title: 'Habermas ZEIT-Artikel',          text: '„Eine Art Schadensabwicklung" — Gegenangriff.' },
          { year: '1986–87',    title: 'Medienhafte Debatte',             text: 'FAZ, ZEIT, Spiegel, Stern — öffentliche Intellektuelle streiten.' },
          { year: '1987',       title: 'Hillgruber: Zweierlei Untergang', text: 'Symmetrie zwischen Judenvernichtung und „Untergang des Ostens".' },
          { year: '1996',       title: 'Goldhagen-Kontroverse',           text: 'Willige Vollstrecker — Täterbreite auf der Agenda.' },
          { year: '1998',       title: 'Walser-Bubis-Debatte',            text: 'Friedenspreisrede: Erinnerung als „Moralkeule"?' },
          { year: '2005',       title: 'Holocaust-Mahnmal eröffnet',      text: 'Institutioneller Abschluss der Debatte — Singularität sichtbar gemacht.' },
          { year: '2018',       title: 'Gauland: „Vogelschiss"',          text: 'Relativierungsversuche in neuem Gewand — Historikerstreit lebt.' },
        ])}
      </div>
    </section>

    <section class="lz-content-section" style="padding-top:0;">
      <div class="lz-section-wrap">
        ${renderPageNav({
          prev: { link: `${BASE}/themen/erinnerungskultur/denkmaeler`,         label: '4.3 · Denkmäler & Gedenkstätten' },
          next: { link: `${BASE}/themen/gegenwart/terrorismus`,                label: '5.1 · Terrorismus' },
        }, BASE)}
      </div>
    </section>

    ${footerHTML(this.router)}
  `; }

  _panelAusloeser() {
    return `
      <div class="wim-category" data-wim-cat="ausloeser">
        ${renderAccordion([
          { title: 'Noltes Provokation (Juni 1986)', content: `Ernst Nolte veröffentlichte in der FAZ: <em>„Vergangenheit, die nicht vergehen will."</em><br><br>Kernthesen:<ul style="margin:.5rem 0 0 1.2rem;line-height:1.9;"><li>Der bolschewistische „Klassenmord" kam vor dem NS-„Rassenmord" — war er das Vorbild?</li><li>Hitler handelte aus Angst vor dem sowjetischen Gulag — präventive Gewalt</li><li>Auschwitz sei eine Kopie des sowjetischen Vorbilds, nur mit industriellen Methoden</li><li>Deshalb: nicht singulär, vergleichbar</li></ul>` },
          { title: 'Habermas Antwort (Juli 1986)', content: `Jürgen Habermas konterte in der ZEIT: <em>„Eine Art Schadensabwicklung."</em><br><br>Kritik:<ul style="margin:.5rem 0 0 1.2rem;line-height:1.9;"><li>Noltes Vergleich ist eine <strong>apologetische Tendenz</strong> — er will Deutschland entlasten</li><li>Der Holocaust war strukturell einzigartig: industrieller, staatlich organisierter, biologisch begründeter Vernichtungswille ohne Instrumentalzweck</li><li>Vergangenheitsarbeit ist Voraussetzung für westliche Demokratie in Deutschland</li><li>Nationales Identitätsbedürfnis darf nicht auf Kosten der Opfer gehen</li></ul>` },
          { title: 'Weitere Stimmen', content: `<strong>Hans-Ulrich Wehler</strong>: Nolte betreibt Geschichtsklitterung.<br><strong>Hans Mommsen</strong>: Holocaust war kumulativer Radikalisierungsprozess, kein geplanter Vernichtungsbefehl von Anfang an.<br><strong>Martin Broszat</strong>: Plädoyer für „Historisierung" — NS-Zeit ohne Tabu wissenschaftlich analysieren.<br><br><strong>Hillgrubers</strong> Zweierlei Untergang: simultane Darstellung des Untergangs der Juden und des deutschen Ostens — empört durch die Parallelisierung.` },
        ])}
      </div>
    `;
  }

  _panelSingularitaet() {
    return `
      <div class="wim-category hidden" data-wim-cat="singularitaet">
        ${renderCompare({
          titleA: 'Holocaust ist singulär (Habermas u.a.)', titleB: 'Holocaust ist vergleichbar (Nolte u.a.)',
          listA: ['Industriell organisierter, staatlicher Massenmord ohne Instrumentalzweck', 'Vernichtung als Selbstzweck — kein Nutzen für Täter', 'Biologisch-rassistische Grundlage ohne Vorbild', 'Universeller Vernichtungsanspruch: alle Juden weltweit', 'Vergleiche relativieren und entlasten — politisch gefährlich'],
          listB: ['Alle großen Massenmorde sind vergleichbar — das ist Methode der Geschichte', 'Gulag, Armenier-Genozid, Kolonialverbrechen: ebenfalls Massentötungen', 'Vergleich ≠ Gleichsetzen; Vergleich schärft das Besondere', 'NS-Zeit historisch einzubetten ist wissenschaftlich notwendig', 'Singularitätsthese verhindert globale Perspektive auf Genozide'],
        })}
        ${renderInfobox({ type: '', icon: 'fas fa-lightbulb', title: 'Für das Abitur: Konsens der Forschung', body: `Der wissenschaftliche Konsens seit den 1990ern:<ul style="margin:.5rem 0 0 1.2rem;line-height:1.9;"><li>Der Holocaust ist historisch <strong>vergleichbar</strong> (Methode) — aber strukturell <strong>einzigartig</strong> (Befund)</li><li>Vergleich ist kein Relativieren — er kann gerade das Besondere schärfen</li><li>Noltes Kausalthese (Gulag als Vorbild/Ursache) ist historisch nicht haltbar</li><li>Habermas' Verteidigung der kritischen Erinnerungskultur bleibt normativ gültig</li></ul>` })}
      </div>
    `;
  }

  _panelNachwirkungen() {
    return `
      <div class="wim-category hidden" data-wim-cat="nachwirkungen">
        <p class="lz-prose">Der Historikerstreit hat Debatten ausgelöst, die bis heute nicht abgeschlossen sind.</p>
        ${renderAccordion([
          { title: 'Goldhagen-Kontroverse (1996)', content: `Daniel Goldhagen: <em>„Hitlers willige Vollstrecker"</em>. These: Nicht nur die NS-Elite, sondern breite Teile der deutschen Bevölkerung seien „eliminatorische Antisemiten" gewesen und hätten freiwillig gemordet.<br><br>Reaktion: Breite Leserschaft, Bestseller. Historiker kritisierten: Methoden mangelhaft, These zu pauschal. Aber: Frage nach Täterbreite blieb auf der Agenda.` },
          { title: 'Walser-Bubis-Debatte (1998)', content: `Martin Walser hielt eine Friedenspreisrede: Kritisierte die „Instrumentalisierung des Holocaust" als „Moralkeule". Bundestagsdiskussionen.<br><br>Ignatz Bubis (ZJD): Walsers Rede sei „geistiger Brandstiftung" nahegekommen. Streit: Wann ist Erinnerung zu viel? Wo beginnt Gedächtnisüberdruss?` },
          { title: 'Debatten in der Gegenwart', content: `<ul style="margin:0 0 0 1.2rem;line-height:1.9;"><li>AfD-Aussagen (Gauland 2018: „Vogelschiss") reaktivieren Singularitätsdebatte</li><li>Globale Vergleiche: Soll der Begriff Genozid auch auf Kolonialverbrechen angewendet werden?</li><li>Postkoloniale Debatte in Deutschland: Herero/Nama-Völkermord als Teil der deutschen Geschichte</li><li>Erinnerungskultur als Migrantenfrage: Sind Nachkommen von Einwanderern Teil der NS-Erinnerung?</li></ul>` },
        ])}
      </div>
    `;
  }

  init() { i18n.init(); initScrollReveal(); initInteractive(document); initWimTabs(document); }
}