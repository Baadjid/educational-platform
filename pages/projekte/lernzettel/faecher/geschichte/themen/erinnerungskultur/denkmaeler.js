// pages/projekte/lernzettel/faecher/geschichte/themen/erinnerungskultur/denkmaeler.js
// 4.3 — Denkmäler, Gedenkstätten & Erinnerungsorte

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
const DENKMAELER_TABS = [
  { key: 'typen',       label: '🏛️ Typen' },
  { key: 'holocaust',   label: '📍 Holocaust-Mahnmal' },
  { key: 'kontroversen', label: '🔥 Kontroversen' },
];

export default class GeschichteDenkmaeler {
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
          <span>4.3 · Denkmäler &amp; Gedenkstätten</span>
        </nav>
        <h1 class="lz-sub-title">Denkmäler &amp;<br><em>Gedenkstätten.</em></h1>
        <p class="lz-sub-desc">
          Stein gewordene Erinnerung — wie Denkmäler entstehen, wirken, umstritten sind
          und welche Fragen sie offen lassen.
        </p>
        ${renderTags(['4.3', 'Denkmal', 'Gedenkstätte', 'Stolpersteine', 'Erinnerungskultur', 'Abitur 2026'])}
      </div>
    </section>

    <section class="lz-content-section">
      <div class="lz-section-wrap">
        ${renderSubhead('Grundbegriffe')}
        <h2 class="lz-h2 reveal">Was ist ein Denkmal?</h2>
        ${renderMerkboxGrid([
          { icon: 'fas fa-monument', title: 'Denkmal', text: 'Materielles Objekt, das zur Erinnerung aufgefordert. Doppelter Aspekt: mahnt an Vergangenheit (commemoratio) und soll Vergessen verhindern.' },
          { icon: 'fas fa-house-chimney-crack', title: 'Gedenkstätte', text: 'Authentischer historischer Ort (z. B. ehemaliges KZ) mit Dokumentations- und Bildungsfunktion. Ort selbst ist Zeuge — unterscheidet sich vom gebauten Denkmal.' },
          { icon: 'fas fa-road', title: 'Stolpersteine', text: 'Gunter Demnig (ab 1992): kleine Messingplatten im Boden vor letzten Wohnorten von NS-Opfern. Dezentrales, demokratisches Denkmal — über 100.000 in 30 Ländern.' },
          { icon: 'fas fa-rotate', title: 'Denkmal im Wandel', text: 'Denkmäler sind nicht neutral — ihre Bedeutung verändert sich. Was eine Generation ehrt, kann die nächste ablehnen. Denkmalsturz als politischer Akt.' },
        ])}
      </div>
    </section>

    <section class="lz-content-section" style="padding-top:0;">
      <div class="lz-section-wrap">
        ${renderSubhead('Vertiefung')}
        <h2 class="lz-h2 reveal">Formen, Beispiele &amp; Debatten</h2>

        <nav class="wim-tabs" id="denkmaeler-tabs" aria-label="Denkmäler">
          ${DENKMAELER_TABS.map((t, i) => `
            <button class="wim-tab${i === 0 ? ' active' : ''}" data-wim="${t.key}">
              ${t.label}
            </button>`).join('')}
        </nav>

        ${this._panelTypen()}
        ${this._panelHolocaust()}
        ${this._panelKontroversen()}

      </div>
    </section>

    <section class="lz-content-section" style="padding-top:0;">
      <div class="lz-section-wrap">
        ${renderPageNav({
          prev: { link: `${BASE}/themen/erinnerungskultur/ns-aufarbeitung`,  label: '4.2 · NS-Aufarbeitung' },
          next: { link: `${BASE}/themen/erinnerungskultur/historikerstreit`,  label: '4.4 · Historikerstreit' },
        }, BASE)}
      </div>
    </section>

    ${footerHTML(this.router)}
  `; }

  _panelTypen() {
    return `
      <div class="wim-category" data-wim-cat="typen">
        ${renderTable({
          headers: ['Typ', 'Merkmale', 'Beispiel'],
          rows: [
            ['Traditionelles Denkmal',        'Heroisch, aufragendes Monument, Täter-/Heldenfigur', 'Hermannsdenkmal, Kyffhäuser'],
            ['Mahnmal / Gegendenkmal',        'Kein Triumph — Trauer, Mahnung, Schuld', 'Holocaust-Mahnmal Berlin, Neue Wache'],
            ['Authentischer Gedenkort',       'Historischer Tatort selbst als Mahnmal', 'KZ Dachau, Auschwitz-Birkenau'],
            ['Dezentrales Mikromahnmal',      'Flächig, in Alltagsraum integriert', 'Stolpersteine (Demnig)'],
            ['Digitales/immersives Denkmal',  'Interaktiv, virtuell, multi-medial', 'Yad Vashem online, digitale Gedenkräume'],
          ],
        })}
        ${renderAccordion([
          { title: 'Gegendenkmal — Anti-Monument', content: `In den 1980ern entwickelten Künstler das Konzept des <em>Gegendenkmals</em>: Ein Denkmal, das sich selbst verweigert — das Betrachter zur aktiven Erinnerung zwingt, statt sie zu entlasten.<br><br>Beispiel: <strong>Harburger Mahnmal gegen Faschismus</strong> (Gerz, 1986–93): Eine Stele, in die Besucher ihren Namen ritzen sollten — und die sich dann langsam in den Boden absenkte und verschwand. Die Erinnerungspflicht liegt beim Betrachter, nicht im Stein.` },
        ])}
      </div>
    `;
  }

  _panelHolocaust() {
    return `
      <div class="wim-category hidden" data-wim-cat="holocaust">
        ${renderInfobox({ type: 'blue', icon: 'fas fa-square', title: 'Denkmal für die ermordeten Juden Europas, Berlin (2005)', body: `Architekt: Peter Eisenman. 2.711 Betonstelen unterschiedlicher Höhe auf 19.000 m². Lage: Zentrum Berlins, zwischen Brandenburger Tor und Potsdamer Platz.` })}
        ${renderAccordion([
          { title: 'Entstehungsgeschichte (1988–2005)', content: `1988: Lea Rosh und Eberhard Jäckel fordern zentrales Holocaust-Mahnmal. Jahrelange Debatte: Soll man überhaupt bauen? Was soll ein Mahnmal leisten? Wer soll gedacht werden (nur Juden? Alle Opfergruppen?).<br><br>1999: Bundestag beschließt Bau nach Eisenman-Entwurf. 2005: Eröffnung zum 60. Jahrestag der Befreiung.` },
          { title: 'Konzept und Wirkung', content: `Keine Inschriften, keine Namen, keine explizite Symbolik. Die Stelen-Felder erzeugen Desorientierung, Beklemmung, Labyrinthgefühl.<br><br>Ziel: Individuelles Nacherleben statt kollektiver Belehrung. Kritik: zu abstrakt, zu kühl. Gegenargument: Explizitheit würde das Unfassbare fassbar machen — und damit verharmlosen.` },
          { title: 'Kontroversen', content: `<ul style="margin:0 0 0 1.2rem;line-height:1.9;"><li>Warum nur jüdische Opfer? → Separate Denkmäler für Sinti & Roma, Homosexuelle, Behinderte</li><li>Lage mitten im Tourismusviertel: Gedenkstätte oder Selfie-Kulisse?</li><li>Chemieskandal: Hersteller der Schutzbeschichtung war NS-Zulieferer (Degussa)</li><li>AfD-Politiker Gauland nannte NS-Zeit 2018 „Vogelschiss der Geschichte" — Ort wurde zur Protestkulisse</li></ul>` },
        ])}
      </div>
    `;
  }

  _panelKontroversen() {
    return `
      <div class="wim-category hidden" data-wim-cat="kontroversen">
        <p class="lz-prose">Denkmäler sind nie neutral — ihre Entstehung, Pflege und eventuelle Entfernung ist immer politisch.</p>
        ${renderAccordion([
          { title: 'Denkmalsturz in der Gegenwart', content: `2020: Black-Lives-Matter-Bewegung führte zur Entfernung oder Diskussion von Kolonialdenkmalern weltweit: Edward Colston (Bristol), König Leopold II. (Belgien), Konföderierten-Denkmäler (USA).<br><br>Debatte: Sollten Denkmäler „böser" Menschen entfernt oder kontextualisiert werden? <strong>Kontextualisieren</strong>: Erklärungstafeln, Ergänzungskunstwerke. <strong>Entfernen</strong>: Ins Museum, aus dem öffentlichen Raum.` },
          { title: 'Tätergedächtnis vs. Opfergedächtnis', content: `Denkmäler wurden historisch meist für Sieger und Helden errichtet. Das Paradigma verschob sich im 20. Jh. hin zu <strong>Opfergedächtnissen</strong>.<br><br>Spannung: Wie erinnert man Täter — damit man aus ihnen lernt — ohne sie zu verherrlichen? Beispiel: NS-Täter-Orte (Obersalzberg) als Bildungsstätten statt Pilgerstätten.` },
          { title: 'Stolpersteine — Dezentrales Erinnern', content: `Gunter Demnigs Prinzip: Erinnerung darf nicht aus dem Alltag herausgelöst werden. Wenn man über einen Stolperstein stolpert, muss man sich bücken — und damit <strong>verneigen</strong>.<br><br>Kontroverse: Manche jüdische Gemeinden lehnen Stolpersteine ab, weil Opfernamen auf dem Boden stehen — auf dem Menschen treten. München hat sie deshalb verboten. Alternative: Erinnerungstafeln an Hauswänden.` },
        ])}
        ${renderCompare({
          titleA: 'Für aktive Erinnerungsarbeit', titleB: 'Kritik an Erinnerungskultur',
          listA: ['„Nie wieder" braucht lebendige Orte', 'Jede Generation muss neu erinnern lernen', 'Denkmäler als Einladung zur Auseinandersetzung', 'Schutz vor Verharmlosung und Revision'],
          listB: ['Gefahr der Routine: Pflicht-Besuche ohne echte Auseinandersetzung', 'Erinnerungskultur als staatliche Selbstinszenierung', 'Konkurrenz der Opfergruppen um Sichtbarkeit', 'Überflutung mit Symbolen führt zu Abstumpfung'],
        })}
      </div>
    `;
  }

  init() { i18n.init(); initScrollReveal(); initInteractive(document); initWimTabs(document); }
}