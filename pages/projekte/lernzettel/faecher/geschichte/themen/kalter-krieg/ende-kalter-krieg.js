// pages/projekte/lernzettel/faecher/geschichte/themen/kalter-krieg/ende-kalter-krieg.js
// 3.5 — Ende des Kalten Krieges (1985–1991)

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
const ENDE_KK_TABS = [
  { key: 'gorbatschow', label: '🔧 Gorbatschow' },
  { key: 'revolutionen', label: '🧱 1989: Revolutionen' },
  { key: 'zerfall',     label: '💥 Zerfall der UdSSR' },
];

export default class GeschichteEndeKalterKrieg {
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
          <span>3.5 · Ende des Kalten Krieges</span>
        </nav>
        <h1 class="lz-sub-title">Ende des<br><em>Kalten Krieges.</em></h1>
        <p class="lz-sub-desc">
          Glasnost, Perestroika, Mauerfall — wie Gorbatschow das Sowjetsystem reformieren
          wollte und damit seinen Untergang einleitete.
        </p>
        ${renderTags(['3.5', '1985–1991', 'Kalter Krieg', 'Gorbatschow', 'Mauerfall', 'Abitur 2026'])}
      </div>
    </section>

    <section class="lz-content-section">
      <div class="lz-section-wrap">
        ${renderSubhead('Auf einen Blick')}
        <h2 class="lz-h2 reveal">Ursachen des Endes</h2>
        ${renderMerkboxGrid([
          { icon: 'fas fa-chart-line-down', title: 'Wirtschaftliche Erschöpfung', text: 'UdSSR konnte Rüstungswettlauf nicht mehr finanzieren. Ölpreisverfall 1986 traf die sowjetische Exportwirtschaft tödlich. BIP-Wachstum stagnierte seit 1970er.' },
          { icon: 'fas fa-person', title: 'Gorbatschows Reformen', text: 'Glasnost (Offenheit) und Perestroika (Umbau) sollten das System retten — lösten aber unkontrollierbare Kräfte aus. Reform und Systemerhalt waren unvereinbar.' },
          { icon: 'fas fa-people-group', title: 'Volksbewegungen', text: 'Solidarność in Polen, Charta 77 in der ČSSR, Bürgerbewegungen in der DDR. Die Legitimität der Regime erodierte — besonders nach Helsinki und mit neuen Kommunikationsmedien.' },
          { icon: 'fas fa-dollar-sign', title: 'Reagans Aufrüstung', text: 'Strategic Defense Initiative (SDI, „Star Wars") zwang UdSSR zu teurer Aufrüstung. Kombiniert mit Wirtschaftssanktionen: politischer Druck wurde unerträglich.' },
        ])}
      </div>
    </section>

    <section class="lz-content-section" style="padding-top:0;">
      <div class="lz-section-wrap">
        ${renderSubhead('Vertiefung')}
        <h2 class="lz-h2 reveal">Zerfall der Sowjetunion</h2>

        <nav class="wim-tabs" id="kkende-tabs" aria-label="Ende des Kalten Krieges">
          ${ENDE_KK_TABS.map((t, i) => `
            <button class="wim-tab${i === 0 ? ' active' : ''}" data-wim="${t.key}">
              ${t.label}
            </button>`).join('')}
        </nav>

        ${this._panelGorbatschow()}
        ${this._panelRevolutionen()}
        ${this._panelZerfall()}

      </div>
    </section>

    <section class="lz-content-section" style="padding-top:0;">
      <div class="lz-section-wrap">
        ${renderSubhead('Chronologie')}
        <h2 class="lz-h2 reveal">1979–1991</h2>
        ${renderVTimeline([
          { year: 'Dez. 1979',  title: 'UdSSR marschiert in Afghanistan ein',  text: 'Ende der Entspannung — Neue Eiszeit. USA boykottieren Olympia 1980.' },
          { year: '1981',       title: 'Reagan: „Reich des Bösen"',             text: 'Ideologische Verhärtung. SDI-Programm 1983.' },
          { year: 'Apr. 1986',  title: 'Tschernobyl',                           text: 'Reaktorkatastrophe — Glasnost macht Vertuschung unmöglich.' },
          { year: 'März 1985',  title: 'Gorbatschow wird Generalsekretär',      text: 'Reformer übernimmt. Glasnost und Perestroika.' },
          { year: 'Dez. 1987',  title: 'INF-Vertrag',                           text: 'Alle Mittelstreckenraketen beider Seiten vernichtet — echte Abrüstung.' },
          { year: 'Jun. 1989',  title: 'Solidarność siegt in Polen',            text: 'Erste freie Wahl im Ostblock.' },
          { year: 'Mai 1989',   title: 'Ungarn öffnet Grenze',                  text: 'Massenflucht aus DDR beginnt.' },
          { year: '09.11.1989', title: 'Mauerfall',                             text: 'Berlin — Symbol des Kalten Krieges fällt.' },
          { year: 'Dez. 1989',  title: 'Samtene Revolution, Rumänien',          text: 'Letztes kommunistisches Regime in Osteuropa fällt.' },
          { year: 'Okt. 1990',  title: 'Deutsche Wiedervereinigung',            text: 'BRD und DDR wiedervereinigt.' },
          { year: 'Aug. 1991',  title: 'Augustputsch scheitert',                text: 'Hardliner scheitern. KPdSU verboten.' },
          { year: '25.12.1991', title: 'UdSSR aufgelöst',                       text: 'Gorbatschow tritt zurück. 15 Nachfolgestaaten. Ende des Kalten Krieges.' },
        ])}
      </div>
    </section>

    <section class="lz-content-section" style="padding-top:0;">
      <div class="lz-section-wrap">
        ${renderPageNav({
          prev: { link: `${BASE}/themen/kalter-krieg/vietnam-prag-entspannung`,   label: '3.4 · Vietnam, Prag & Entspannung' },
          next: { link: `${BASE}/themen/erinnerungskultur/gedaechtnistheorie`,     label: '4.1 · Gedächtnistheorie' },
        }, BASE)}
      </div>
    </section>

    ${footerHTML(this.router)}
  `; }

  _panelGorbatschow() {
    return `
      <div class="wim-category" data-wim-cat="gorbatschow">
        <p class="lz-prose">Michail Gorbatschow (Generalsekretär ab März 1985) erkannte: Das System muss reformiert werden — oder es kollabiert. Er wählte Reform. Das Ergebnis war trotzdem Kollaps.</p>
        ${renderAccordion([
          { title: 'Glasnost — Offenheit', content: `Freiheit der Presse und Meinungsfreiheit als Steuerungsinstrument: Korruption und Ineffizienz öffentlich machen → Druck auf Bürokraten.<br><br>Tatsächliche Wirkung: Medien decken Katastrophen auf (<strong>Tschernobyl</strong>, April 1986 — zunächst verheimlicht, dann nicht mehr). Jahrzehntelange Lügen des Regimes werden sichtbar. Legitimität bricht ein.` },
          { title: 'Perestroika — Umbau', content: `Wirtschaftliche Dezentralisierung, begrenzte Marktmechanismen, Bekämpfung von Korruption. Ziel: Effizienz ohne Kapitalismus.<br><br>Tatsächliche Wirkung: Alte Strukturen wurden geschwächt, neue funktionierten nicht. Versorgungsengpässe verschlimmerten sich. Bevölkerung verlor Geduld.` },
          { title: 'Sinatra-Doktrin (1988)', content: `Widerruf der Breschnew-Doktrin: Gorbatschow erklärte, jedes sozialistische Land dürfe seinen eigenen Weg gehen (<em>„Frank Sinatras Way"</em>).<br><br>Konsequenz: Osteuropäische Regime konnten nicht mehr auf sowjetische Panzer zählen. Volkserhebungen hatten freie Bahn.` },
          { title: 'INF-Vertrag mit Reagan (1987)', content: `<strong>Intermediate-Range Nuclear Forces Treaty</strong>: Alle landgestützten Mittelstreckenraketen (500–5.500 km) beider Seiten werden vernichtet — erstmals echte Abrüstung, nicht nur Begrenzung.<br><br>~2.692 Raketen vernichtet. Gorbatschow signalisiert: UdSSR will kein Rüstungswettlauf mehr.` },
        ])}
      </div>
    `;
  }

  _panelRevolutionen() {
    return `
      <div class="wim-category hidden" data-wim-cat="revolutionen">
        ${renderInfobox({ type: 'success', icon: 'fas fa-calendar', title: '1989 — Das Jahr der Revolutionen', body: `In einem Jahr fiel die kommunistische Herrschaft in Polen, Ungarn, DDR, Bulgarien, der ČSSR und Rumänien. Fast alle friedlich — außer Rumänien (Ceaușescu erschossen).` })}
        ${renderTable({
          headers: ['Land', 'Ereignis', 'Datum', 'Besonderheit'],
          rows: [
            ['Polen',      'Rundtischgespräche, Solidarność-Wahlerfolg', 'Jun. 1989', 'Erster freier Übergang — Walesa später Präsident'],
            ['Ungarn',     'Öffnung der Grenze zu Österreich',           'Mai 1989',  'Ermöglicht Massenflucht ostdeutscher Bürger'],
            ['DDR',        'Montagsdemonstrationen, Mauerfall',          'Okt./Nov. 1989', 'Leipzig: 70.000 → 300.000. 9. Nov.: Mauer fällt'],
            ['ČSSR',       'Samtene Revolution (Havel)',                  'Nov. 1989', 'Friedlicher Massenprotest → kommunist. Regime tritt zurück'],
            ['Bulgarien',  'Innerparteilicher Putsch gegen Schiwkow',   'Nov. 1989', 'Reformkommunisten übernehmen'],
            ['Rumänien',   'Aufstand, Ceaușescu erschossen',             'Dez. 1989', 'Einzige blutige Revolution — ~1.000 Tote'],
          ],
        })}
        ${renderInfobox({ type: 'blue', icon: 'fas fa-door-open', title: '9. November 1989 — Mauerfall', body: `DDR-Sprecher Günter Schabowski verlas versehentlich, dass Reiseregelungen „ab sofort, unverzüglich" gelten. Zehntausende strömten zu den Grenzübergängen. Grenzsoldaten ließen sie durch — ohne Befehl.<br><br>Symbolstärkstes Ereignis des Kalten Krieges — und sein Ende in einem Bild.` })}
      </div>
    `;
  }

  _panelZerfall() {
    return `
      <div class="wim-category hidden" data-wim-cat="zerfall">
        ${renderAccordion([
          { title: 'Nationalitätenkonflikte', content: `Glasnost ermöglichte offen gelebten Nationalismus. Baltische Staaten (Estland, Lettland, Litauen) erklärten Unabhängigkeit 1990. Georgien, Armenien, Aserbaidschan: Konflikte und Abspaltungstendenzen. Ukraine und Weißrussland: wachsende Autonomiebestreben.` },
          { title: 'Augustputsch (19.–21. August 1991)', content: `Hardliner-Putsch gegen Gorbatschow scheiterte — Boris Jelzin stellte sich auf Panzer vor dem Weißen Haus in Moskau.<br><br>Folge: Kommunistische Partei verboten. Gorbatschow geschwächt. Sowjetische Republiken erklärten Unabhängigkeit im Schnellverfahren.` },
          { title: 'Auflösung der UdSSR (25. Dezember 1991)', content: `Gorbatschow tritt zurück. UdSSR wird offiziell aufgelöst. 15 unabhängige Nachfolgestaaten entstehen, darunter Russland, Ukraine, Weißrussland.<br><br><em>Gorbatschow:  „Der Kalte Krieg ist vorbei."</em><br>Jelzin übernimmt das neue Russland — turbulente Transformationsjahre folgen.` },
        ])}
        ${renderCompare({
          titleA: 'Westliche Interpretation', titleB: 'Russische / Revisionist. Interpretation',
          listA: ['USA „gewannen" den Kalten Krieg', 'Überlegenheit des demokratisch-kapitalistischen Systems bewiesen', 'Reagans Aufrüstung zwang UdSSR in die Knie', 'Fukuyama: „Ende der Geschichte" — liberale Demokratie triumphiert', 'NATO-Erweiterung als legitime Sicherheitsreaktion'],
          listB: ['Gorbatschow wählte freiwillig den Wandel', 'Westen nutzte Schwäche aus statt Partnerschaft anzubieten', 'Versprechen: keine NATO-Osterweiterung (umstritten, nicht schriftlich)', 'Transformation als wirtschaftliche Katastrophe für Bevölkerung', 'Ende des Kalten Krieges ohne Friedensvertrag — offene Wunden'],
        })}
      </div>
    `;
  }

  init() { i18n.init(); initScrollReveal(); initInteractive(document); initWimTabs(document); }
}