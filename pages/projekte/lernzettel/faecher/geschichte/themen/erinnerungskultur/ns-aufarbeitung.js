// pages/projekte/lernzettel/faecher/geschichte/themen/erinnerungskultur/ns-aufarbeitung.js
// 4.2 — NS-Aufarbeitung in Deutschland

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
const NSAUF_TABS = [
  { key: 'nuernberg', label: '⚖️ Nürnberger Prozesse' },
  { key: 'brd-ddr',   label: '🕰️ BRD & DDR im Vergleich' },
  { key: 'meilensteine', label: '📍 Meilensteine' },
  { key: 'historikerstreit', label: '🔬 Historikerstreit' },
];

export default class GeschichteNSAufarbeitung {
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
          <span>4.2 · NS-Aufarbeitung</span>
        </nav>
        <h1 class="lz-sub-title">NS-Aufarbeitung<br><em>in Deutschland.</em></h1>
        <p class="lz-sub-desc">
          Von Nürnberg bis heute — wie Deutschland mit der Last des Nationalsozialismus
          und des Holocausts umgegangen ist.
        </p>
        ${renderTags(['4.2', '1945–heute', 'Holocaust', 'Vergangenheitsbewältigung', 'Abitur 2026'])}
      </div>
    </section>

    <section class="lz-content-section">
      <div class="lz-section-wrap">
        ${renderSubhead('Phasen der Aufarbeitung')}
        <h2 class="lz-h2 reveal">Ein langer Weg</h2>
        ${renderMerkboxGrid([
          { icon: 'fas fa-gavel', title: 'Nürnberger Prozesse', text: '1945–46: Erstmals Einzelpersonen für Staatsverbrechen (Kriegsverbrechen, Verbrechen gegen die Menschlichkeit) international zur Rechenschaft gezogen.' },
          { icon: 'fas fa-face-meh', title: 'Verdrängung (1950er)', text: 'Wirtschaftswunder-Gesellschaft: Täter integrierten sich, Opfer schwiegen. Adenauer: Schlussstrich-Mentalität. Viele NS-Funktionäre in Justiz, Verwaltung, Wirtschaft.' },
          { icon: 'fas fa-eye', title: 'Aufdeckung (1960er)', text: 'Eichmann-Prozess (1961), Auschwitz-Prozess (1963–65), Studentenbewegung 1968. Erste Generation, die Eltern konfrontierte: „Was habt ihr getan?"' },
          { icon: 'fas fa-infinity', title: 'Institutionelle Erinnerung', text: 'Gedenkstätten, Schulfächer, Holocaust-Mahnmal (2005), Stolpersteine. Deutschland gilt international als Modell für Aufarbeitung.' },
        ])}
      </div>
    </section>

    <section class="lz-content-section" style="padding-top:0;">
      <div class="lz-section-wrap">
        ${renderSubhead('Vertiefung')}
        <h2 class="lz-h2 reveal">NS-Aufarbeitung im Detail</h2>

        <nav class="wim-tabs" id="nsauf-tabs" aria-label="NS-Aufarbeitung">
          ${NSAUF_TABS.map((t, i) => `
            <button class="wim-tab${i === 0 ? ' active' : ''}" data-wim="${t.key}">
              ${t.label}
            </button>`).join('')}
        </nav>

        ${this._panelNuernberg()}
        ${this._panelBrdDdr()}
        ${this._panelMeilensteine()}
        ${this._panelHistorikerstreit()}

      </div>
    </section>

    <section class="lz-content-section" style="padding-top:0;">
      <div class="lz-section-wrap">
        ${renderSubhead('Chronologie')}
        <h2 class="lz-h2 reveal">Aufarbeitung seit 1945</h2>
        ${renderVTimeline([
          { year: '1945–46', title: 'Nürnberger Prozesse',                  text: 'Erste internationale Strafverfolgung für Staatsverbrechen.' },
          { year: '1952',    title: 'Luxemburger Abkommen',                  text: 'Wiedergutmachung an Israel und jüdische Organisationen.' },
          { year: '1961',    title: 'Eichmann-Prozess',                      text: 'Banalität des Bösen — Schreibtischtäter als Typus.' },
          { year: '1963–65', title: 'Auschwitz-Prozesse Frankfurt',          text: 'Deutsche Gerichte urteilen über KZ-Wächter.' },
          { year: '1968',    title: 'Studentenbewegung',                     text: 'Elterngeneration wird konfrontiert — „Was habt ihr getan?".' },
          { year: '1970',    title: 'Brandts Kniefall in Warschau',          text: 'Neue Erinnerungskultur setzt sich politisch durch.' },
          { year: '1979',    title: 'TV-Serie „Holocaust"',                  text: 'Massensensiblisierung in der BRD.' },
          { year: '1986–87', title: 'Historikerstreit',                      text: 'Debatte über Einzigartigkeit des Holocaust.' },
          { year: '1996',    title: 'Goldhagen-Debatte',                     text: '„Hitlers willige Vollstrecker" — breite Täterschaft.' },
          { year: '2005',    title: 'Holocaust-Mahnmal Berlin',              text: 'Zentrale Gedenkstätte mitten im Regierungsviertel.' },
        ])}
      </div>
    </section>

    <section class="lz-content-section" style="padding-top:0;">
      <div class="lz-section-wrap">
        ${renderPageNav({
          prev: { link: `${BASE}/themen/erinnerungskultur/gedaechtnistheorie`,  label: '4.1 · Gedächtnistheorie' },
          next: { link: `${BASE}/themen/erinnerungskultur/denkmaeler`,          label: '4.3 · Denkmäler & Gedenkstätten' },
        }, BASE)}
      </div>
    </section>

    ${footerHTML(this.router)}
  `; }

  _panelNuernberg() {
    return `
      <div class="wim-category" data-wim-cat="nuernberg">
        ${renderInfobox({ type: 'blue', icon: 'fas fa-gavel', title: 'Internationaler Militärgerichtshof (1945–46)', body: `Vier Anklagepunkte: (1) Verschwörung, (2) Angriffskrieg, (3) Kriegsverbrechen, (4) Verbrechen gegen die Menschlichkeit.<br><br>24 Hauptangeklagte, darunter Göring, Ribbentrop, Keitel. Urteile: 12 Todesurteile, 7 Gefängnisstrafen, 3 Freisprüche.` })}
        ${renderAccordion([
          { title: 'Bedeutung für das Völkerrecht', content: `<ul style="margin:0 0 0 1.2rem;line-height:1.9;"><li>Erstmals: „Befehlsnotstand" kein Freispruchsgrund</li><li>Begriff <strong>Völkermord / Genocide</strong> (Lemkin, 1944) rechtlich verankert</li><li>Grundlage für spätere Kriegsverbrechertribunale (Jugoslawien, Ruanda) und den ICC</li><li>Allgemeine Erklärung der Menschenrechte 1948 als direkte Folge</li></ul>` },
          { title: 'Nachfolgeprozesse (1946–49)', content: `12 weitere Prozesse: Ärzteprozess (Menschenversuche), Einsatzgruppen-Prozess, Juristenprozess. Insgesamt: 185 Angeklagte, 37 Todesurteile.<br><br>Viele Verurteilte wurden in den 1950ern begnadigt — Kalter Krieg hatte Priorität.` },
        ])}
      </div>
    `;
  }

  _panelBrdDdr() {
    return `
      <div class="wim-category hidden" data-wim-cat="brd-ddr">
        ${renderCompare({
          titleA: 'BRD — Westdeutschland', titleB: 'DDR — Ostdeutschland',
          listA: ['Wiedergutmachungszahlungen an Israel (Luxemburger Abkommen, 1952)', '1950er: Viele NS-Täter in Justiz, Verwaltung, Politik integriert', 'Eichmann-Prozess (1961) als Wendepunkt des öffentlichen Bewusstseins', 'Auschwitz-Prozesse Frankfurt (1963–65): erste deutsche Eigeninitiative', '1968: Studentenbewegung konfrontiert Elterngeneration', 'Kniefall Brandts in Warschau (1970): Symbol der Scham und Verantwortung', 'Holocaust-TV-Serie (1979): erste Massenverbreitung'],
          listB: ['Offiziell: DDR = antifaschistischer Staat, Erbe von KPD-Widerständlern', 'NS-Täter aus eigenem Verantwortungsbereich ausgeblendet', 'Keine Wiedergutmachung, kein Gedächtnis für jüdische Opfer', 'Antifaschismus als Staatsideologie: Vergangenheit im Westen verortet', 'Kein offener Umgang mit Schuld — nur ideologisch gerahmte Kritik', 'Nach 1989: Aufarbeitung DDR-Unrechts überlagerte NS-Aufarbeitung'],
        })}
      </div>
    `;
  }

  _panelMeilensteine() {
    return `
      <div class="wim-category hidden" data-wim-cat="meilensteine">
        ${renderTable({
          headers: ['Jahr', 'Ereignis', 'Bedeutung'],
          rows: [
            ['1952', 'Luxemburger Abkommen', 'BRD zahlt 3 Mrd. DM Wiedergutmachung an Israel — innenpolitisch umstritten'],
            ['1961', 'Eichmann-Prozess (Jerusalem)', 'Hannah Arendts „Banalität des Bösen" — Massentäter als Schreibtischtäter'],
            ['1963–65', 'Auschwitz-Prozesse (Frankfurt)', 'Erstmals deutsche Gerichte urteilen über KZ-Personal'],
            ['1965', 'Verjährungsdebatte', 'Bundestag verlängert Verjährungsfrist für NS-Morde; 1979 aufgehoben'],
            ['1970', 'Brandts Kniefall in Warschau', 'Geste der Demut ohne Worte — Symbol für neue Erinnerungskultur'],
            ['1979', 'TV-Serie „Holocaust"', '~15 Millionen Deutsche schauen — Massensensiblisierung'],
            ['1985', 'Bitburg-Kontroverse', 'Reagan + Kohl am SS-Grab — Widerstand aus USA und Israel'],
            ['1996', 'Goldhagen-Debatte', 'These: nicht nur Elite, sondern „ganz normale Deutsche" als willige Vollstrecker'],
            ['2005', 'Holocaust-Mahnmal Berlin', 'Peter Eisenman: 2.711 Betonstelen — zentrale Gedenkstätte'],
            ['2011', 'NSU-Aufdeckung', 'Rechtsextremer Terror ignoriert — Behördenversagen und Erinnerungslücken'],
          ],
        })}
      </div>
    `;
  }

  _panelHistorikerstreit() {
    return `
      <div class="wim-category hidden" data-wim-cat="historikerstreit">
        <p class="lz-prose">Der <strong>Historikerstreit</strong> (1986–87) war eine öffentliche Kontroverse über die Einzigartigkeit des Holocaust — und ist direkt mit dem nächsten Unterkapitel verknüpft.</p>
        ${renderInfobox({ type: '', icon: 'fas fa-arrow-right', title: 'Ausführlich behandelt in 4.4', body: `Der Historikerstreit — Nolte, Habermas, Hillgruber — ist ein eigenes Unterkapitel (4.4). Hier der Überblick: Noltes These, der Holocaust sei eine Reaktion auf den sowjetischen Gulag und kein singuläres Verbrechen, löste eine der wichtigsten geschichtspolitischen Debatten in Deutschland aus.` })}
        ${renderInfobox({ type: 'blue', icon: 'fas fa-lightbulb', title: 'Für das Abitur', body: `<strong>Kernthese:</strong> Deutschlands Umgang mit der NS-Vergangenheit ist kein linearer Fortschritt, sondern ein <em>nichtlinearer Prozess</em> mit Phasen der Verdrängung, der Aufdeckung und der Institutionalisierung.<br><br>Deutschland gilt international als Vorbild — aber die Herausforderung ist permanente: Wenn keine Zeitzeugen mehr leben, muss Erinnerung aktiv gestaltet werden.` })}
      </div>
    `;
  }

  init() { i18n.init(); initScrollReveal(); initInteractive(document); initWimTabs(document); }
}