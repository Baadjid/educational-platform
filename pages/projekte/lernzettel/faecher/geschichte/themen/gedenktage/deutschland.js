// pages/projekte/lernzettel/faecher/geschichte/themen/gedenktage/deutschland.js
// 6.1 — Gedenktage in Deutschland

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
const GEDENKTAGE_TABS = [
  { key: '27_januar', label: '📅 27. Januar' },
  { key: '8_mai',     label: '📅 8. Mai' },
  { key: '9_november', label: '📅 9. November' },
  { key: '3_oktober',  label: '📅 3. Oktober' },
];

export default class GeschichteGedenktage {
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
          <span>6.1 · Gedenktage Deutschland</span>
        </nav>
        <h1 class="lz-sub-title">Gedenktage<br><em>in Deutschland.</em></h1>
        <p class="lz-sub-desc">
          Welche Tage erinnern wir, warum, und wie? Staatliche Gedenkkultur
          zwischen Pflicht, Politik und gelebter Erinnerung.
        </p>
        ${renderTags(['6.1', 'Gedenktage', 'Erinnerungskultur', 'Deutschland', 'Abitur 2026'])}
      </div>
    </section>

    <section class="lz-content-section">
      <div class="lz-section-wrap">
        ${renderSubhead('Übersicht')}
        <h2 class="lz-h2 reveal">Wichtige deutsche Gedenktage</h2>
        ${renderTable({
          headers: ['Datum', 'Gedenktag', 'Anlass', 'Status'],
          rows: [
            ['27. Januar',   'Holocaust-Gedenktag (Internationaler)',      'Befreiung KZ Auschwitz (1945)', 'Gesetzlich; seit 1996'],
            ['23. Februar',  'Jahrestag Zerstörung Dresdens',              'Bombardierung Dresdens (1945)', 'Regional; kontrovers'],
            ['20. Juli',     'Tag des Deutschen Widerstands',              'Stauffenberg-Attentat auf Hitler (1944)', 'Gedenktag der Bundeswehr'],
            ['8. Mai',       'Tag der Befreiung / Kriegsende',             'Kapitulation NS-Deutschland (1945)', 'Kein gesetzl. Feiertag; politisch hoch umstritten'],
            ['9. November',  'Novembertag der deutschen Geschichte',       'Pogromnacht 1938, Mauerfall 1989, Kaiser-Abdankung 1918, Hitlerputsch 1923', 'Vier Ereignisse an einem Tag'],
            ['3. Oktober',   'Tag der Deutschen Einheit (Nationalfeiertag)', 'Wiedervereinigung (1990)', 'Gesetzlicher Feiertag'],
            ['17. Juni',     'Ehemaliger Nationalfeiertag (bis 1990)',     'Volksaufstand DDR (1953)', 'Heute kein Feiertag mehr'],
          ],
        })}
      </div>
    </section>

    <section class="lz-content-section" style="padding-top:0;">
      <div class="lz-section-wrap">
        ${renderSubhead('Vertiefung')}
        <h2 class="lz-h2 reveal">Gedenktage im Detail</h2>

        <nav class="wim-tabs" id="gedenk-tabs" aria-label="Gedenktage Deutschland">
          ${GEDENKTAGE_TABS.map((t, i) => `
            <button class="wim-tab${i === 0 ? ' active' : ''}" data-wim="${t.key}">
              ${t.label}
            </button>`).join('')}
        </nav>

        ${this._panel27Januar()}
        ${this._panel8Mai()}
        ${this._panel9November()}
        ${this._panel3Oktober()}

      </div>
    </section>

    <section class="lz-content-section" style="padding-top:0;">
      <div class="lz-section-wrap">
        ${renderPageNav({
          prev: { link: `${BASE}/themen/gegenwart/demokratie`,         label: '5.5 · Demokratie & Autoritarismus' },
          next: { link: `${BASE}/themen/gedenktage/europa-welt`,       label: '6.2 · Gedenktage Europa & Welt' },
        }, BASE)}
      </div>
    </section>

    ${footerHTML(this.router)}
  `; }

  _panel27Januar() {
    return `
      <div class="wim-category" data-wim-cat="27_januar">
        ${renderInfobox({ type: 'blue', icon: 'fas fa-star-of-david', title: '27. Januar — Holocaust-Gedenktag', body: `Am 27. Januar 1945 befreiten sowjetische Soldaten das Konzentrations- und Vernichtungslager Auschwitz-Birkenau. Seit 1996: offizieller staatlicher Gedenktag in Deutschland. Seit 2005: UN-Resolution — internationaler Holocaust-Gedenktag.` })}
        ${renderAccordion([
          { title: 'Bedeutung und Form', content: `Gedenkstunde des Bundestages am 27. Januar — mit Rede und Zeitzeugen. Schulen verpflichtet zur Auseinandersetzung.<br><br>Ziel: Nicht nur Erinnerung, sondern aktive Mahnung. Frage: Wie gedenkt man, wenn keine Zeitzeugen mehr leben?` },
          { title: 'Debatte: Ritual vs. echte Auseinandersetzung', content: `Kritik: Gedenkrituale können zu leeren Pflichtveranstaltungen werden. „Betroffenheitskultur" ohne echtes Engagement.<br><br>Gegenforderung: Gedenktage müssen mit Bildung und politischer Haltung verknüpft sein. <em>„Nie wieder ist jetzt"</em> — nicht nur Vergangenheit, sondern Gegenwartsverpflichtung.` },
        ])}
      </div>
    `;
  }

  _panel8Mai() {
    return `
      <div class="wim-category hidden" data-wim-cat="8_mai">
        ${renderInfobox({ type: 'warning', icon: 'fas fa-flag', title: '8. Mai 1945 — Kapitulation', body: `Am 8. Mai 1945 trat die bedingungslose Kapitulation der Wehrmacht in Kraft. Ende des Zweiten Weltkriegs in Europa.` })}
        ${renderCompare({
          titleA: 'Befreiung', titleB: 'Niederlage',
          listA: ['Richard von Weizsäcker (Rede 1985): „8. Mai war Tag der Befreiung"', 'Ende der NS-Diktatur und des Krieges', 'Möglichkeit für Neuanfang und Demokratie', 'Befreiung der KZ-Häftlinge', 'Heute mehrheitliche Sicht in Deutschland'],
          listB: ['Für viele Deutsche: Niederlage, Demütigung, Verlust', 'Heimatvertriebene: Ende ihrer Heimat', 'Bis in 1980er: Kein positiver Gedenktag möglich', 'DDR: feierte 8. Mai als „Tag der Befreiung" (politisch instrumentalisiert)', 'Weizsäckers Rede war 1985 noch eine Provokation'],
        })}
        ${renderInfobox({ type: 'blue', icon: 'fas fa-quote-left', title: 'Weizsäckers Rede (8. Mai 1985)', body: `Bundespräsident Richard von Weizsäcker hielt eine historische Rede: <em>„Der 8. Mai 1945 war ein Tag der Befreiung. Er hat uns alle befreit von dem menschenverachtenden System der nationalsozialistischen Gewaltherrschaft."</em><br><br>Die Rede gilt als Wendepunkt im deutschen Umgang mit der NS-Vergangenheit.` })}
      </div>
    `;
  }

  _panel9November() {
    return `
      <div class="wim-category hidden" data-wim-cat="9_november">
        <p class="lz-prose">Der 9. November ist ein einzigartiges Datum — vier wichtige Ereignisse der deutschen Geschichte fielen auf diesen Tag.</p>
        ${renderTable({
          headers: ['Jahr', 'Ereignis', 'Bedeutung'],
          rows: [
            ['1918', 'Novemberrevolution — Kaiser dankt ab', 'Ende des Kaiserreichs, Ausruf der Republik'],
            ['1923', 'Hitlerputsch (München) scheitert', 'Hitler verhaftet — schreibt im Gefängnis Mein Kampf'],
            ['1938', 'Reichspogromnacht',                 'Organisierte NS-Gewalt gegen Juden: Synagogen, Geschäfte, Menschen'],
            ['1989', 'Mauerfall',                         'DDR-Bürger strömen nach Westberlin'],
          ],
        })}
        ${renderInfobox({ type: '', icon: 'fas fa-lightbulb', title: 'Warum kein Nationalfeiertag?', body: `Der 9. November ist zu widersprüchlich: Die Freude über den Mauerfall 1989 und die Trauer über die Pogromnacht 1938 lassen sich an einem Tag nicht vereinen. Deshalb: 3. Oktober als Nationalfeiertag — ein Datum ohne negative Konnotation.<br><br>9. November bleibt dennoch der bedeutsamste historische Erinnerungstag Deutschlands.` })}
      </div>
    `;
  }

  _panel3Oktober() {
    return `
      <div class="wim-category hidden" data-wim-cat="3_oktober">
        ${renderInfobox({ type: 'success', icon: 'fas fa-flag', title: '3. Oktober — Tag der Deutschen Einheit', body: `Am 3. Oktober 1990 trat die DDR der Bundesrepublik bei. Deutschlands einziger gesetzlicher Nationalfeiertag.` })}
        ${renderAccordion([
          { title: 'Entstehung und Bedeutung', content: `Nach dem Mauerfall (9. November) verhandelten BRD und DDR über die Modalitäten. Zwei Optionen: Beitritt nach Art. 23 GG (schnell) oder neue gemeinsame Verfassung. DDR wählte schnellen Beitritt — Vollendung 3. Oktober 1990.<br><br>Symbolisch: Nicht ein Sieg, sondern eine Vollendung. Zeitpunkt war auch außenpolitisch bedingt: 2+4-Vertrag (Sept. 1990) regelte Zustimmung der Alliierten.` },
          { title: 'Ostdeutschland und der schwierige Einheitsprozess', content: `30+ Jahre nach Wiedervereinigung: Strukturelle Unterschiede bleiben.<ul style="margin:.5rem 0 0 1.2rem;line-height:1.9;"><li>Wirtschaft: Produktivität Ost ~80 % des Westens</li><li>Löhne: Immer noch Unterschied, schrumpft</li><li>Bevölkerung: Abwanderung in den 1990ern schwächte Ost dauerhaft</li><li>Politisch: AfD stärker im Osten (historische Erklärungen kontrovers)</li><li>Mentalität: „Mauer in den Köpfen" — wird seltener thematisiert</li></ul>` },
        ])}
      </div>
    `;
  }

  init() { i18n.init(); initScrollReveal(); initInteractive(document); initWimTabs(document); }
}