// pages/projekte/lernzettel/faecher/geschichte/themen/industrialisierung/england.js
// 2.1 — Industrielle Revolution in England

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
const ENGLAND_TABS = [
  { key: 'technik',    label: '⚙️ Technik' },
  { key: 'sozial',     label: '🏙️ Soziale Folgen' },
  { key: 'bedeutung',  label: '💡 Bedeutung' },
];

export default class GeschichteEnglandPage {
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
          <span>2.1 · Industrialisierung in England</span>
        </nav>
        <h1 class="lz-sub-title">Industrielle Revolution<br><em>in England.</em></h1>
        <p class="lz-sub-desc">
          Warum England zuerst? Dampfmaschine, Textilindustrie und die Entstehung
          der modernen Industriegesellschaft.
        </p>
        ${renderTags(['2.1', '~1760–1850', 'Industrialisierung', 'England', 'Abitur 2026'])}
      </div>
    </section>

    <section class="lz-content-section">
      <div class="lz-section-wrap">
        ${renderSubhead('Auf einen Blick')}
        <h2 class="lz-h2 reveal">Warum England zuerst?</h2>
        ${renderMerkboxGrid([
          { icon: 'fas fa-ship', title: 'Kolonien & Handel', text: 'Britisches Empire lieferte Rohstoffe (Baumwolle aus Amerika/Indien) und Absatzmärkte. Häfen und Handelsflotte bereits ausgebaut.' },
          { icon: 'fas fa-seedling', title: 'Agrarrevolution', text: 'Enclosure-Bewegung: Gemeinschaftsland wird privatisiert → Landbevölkerung wird landlos → Arbeitskräfte für Fabriken; effizientere Landwirtschaft ernährt Städte.' },
          { icon: 'fas fa-coins', title: 'Kapital & Banken', text: 'Bank of England (1694), früher Kapitalmarkt. Investitionsmittel für teure Maschinen und Fabrikbauten vorhanden.' },
          { icon: 'fas fa-gears', title: 'Technische Innovation', text: 'Erfinderkultur: Patentsystem (seit 1624), Royal Society, Practical men. Druck durch Konkurrenz und Nachfrage nach arbeitsparenden Maschinen.' },
          { icon: 'fas fa-mountain', title: 'Rohstoffe im Inland', text: 'Kohle (Yorkshire, Wales) und Eisenerz in unmittelbarer Nähe zueinander — ideale Grundlage für Dampfkraft und Stahlproduktion.' },
          { icon: 'fas fa-anchor', title: 'Günstige Lage & Infrastruktur', text: 'Inselstaat: kein Zollflickenteppich, keine Kriegsverwüstungen. Kanalnetz (~1760–1800) und später Eisenbahn ermöglichten Massentransport.' },
        ])}
      </div>
    </section>

    <section class="lz-content-section" style="padding-top:0;">
      <div class="lz-section-wrap">
        ${renderSubhead('Vertiefung')}
        <h2 class="lz-h2 reveal">Die Industrielle Revolution im Detail</h2>

        <nav class="wim-tabs" id="england-tabs" aria-label="Industrialisierung England">
          ${ENGLAND_TABS.map((t, i) => `
            <button class="wim-tab${i === 0 ? ' active' : ''}" data-wim="${t.key}">
              ${t.label}
            </button>`).join('')}
        </nav>

        ${this._panelTechnik()}
        ${this._panelSozial()}
        ${this._panelBedeutung()}

      </div>
    </section>

    <section class="lz-content-section" style="padding-top:0;">
      <div class="lz-section-wrap">
        ${renderSubhead('Chronologie')}
        <h2 class="lz-h2 reveal">Wichtige Daten</h2>
        ${renderVTimeline([
          { year: '1694',  title: 'Bank of England gegründet',         text: 'Kapitalmarkt für Industrieinvestitionen entsteht.' },
          { year: '1712',  title: 'Newcomens Dampfpumpe',              text: 'Erste praktische Dampfmaschine — noch ineffizient.' },
          { year: '1764',  title: 'Spinning Jenny (Hargreaves)',        text: 'Mehrfachspindel revolutioniert Garnproduktion.' },
          { year: '1769',  title: 'Watts Dampfmaschine (Patent)',       text: 'Separater Kondensator → 4× effizienter als Newcomen.' },
          { year: '1785',  title: 'Power Loom (Cartwright)',            text: 'Mechanischer Webstuhl — Handweber werden überflüssig.' },
          { year: '1776',  title: 'Adam Smith: Wealth of Nations',      text: 'Theoretische Grundlage des industriellen Kapitalismus.' },
          { year: '1825',  title: 'Erste Eisenbahn (Stephenson)',       text: 'Stockton–Darlington — Güterverkehr per Dampflok.' },
          { year: '1830',  title: 'Eisenbahn Liverpool–Manchester',     text: 'Erster Personenbahnverkehr der Welt.' },
          { year: '1833',  title: 'Factory Act',                        text: 'Erste Schutzgesetzgebung: Kinderarbeit unter 9 Jahren verboten.' },
          { year: '1842',  title: 'Mines Act',                          text: 'Frauen und Kinder unter 10 Jahren dürfen nicht mehr unter Tage.' },
        ])}
      </div>
    </section>

    <section class="lz-content-section" style="padding-top:0;">
      <div class="lz-section-wrap">
        ${renderPageNav({
          prev: { link: `${BASE}/themen/epochenschwelle/dreissigjaehriger-krieg`, label: '1.4 · Dreißigjähriger Krieg' },
          next: { link: `${BASE}/themen/industrialisierung/deutschland-usa`,      label: '2.2 · Deutschland & USA' },
        }, BASE)}
      </div>
    </section>

    ${footerHTML(this.router)}
  `; }

  _panelTechnik() {
    return `
      <div class="wim-category" data-wim-cat="technik">
        <p class="lz-prose">Kern der Industriellen Revolution war die Ersetzung von Menschenkraft durch <strong>Maschinen mit Energiequellen</strong> — vor allem Kohle und Dampf.</p>
        ${renderAccordion([
          { title: 'Dampfmaschine (James Watt, 1769)', content: `Thomas Newcomen entwickelte 1712 eine erste Dampfpumpe für Bergwerke. James Watt verbesserte sie 1769 grundlegend durch den <strong>separaten Kondensator</strong> — Wirkungsgrad vervierfacht. Ab 1782: Rotationsbewegung möglich → Antrieb für Webstühle, Mühlen, Schiffe, Lokomotiven. Die Dampfmaschine ist <em>die</em> Schlüsselinnovation.` },
          { title: 'Textilindustrie — die erste Fabrikbranche', content: `<ul style="margin:0 0 0 1.2rem;line-height:1.9;"><li><strong>Spinning Jenny</strong> (Hargreaves, 1764): Mehrfachspindel → 8× mehr Garn</li><li><strong>Water Frame</strong> (Arkwright, 1769): Wasserangetriebener Spinnrahmen → erste Fabriken</li><li><strong>Power Loom</strong> (Cartwright, 1785): Mechanischer Webstuhl → Handweber werden überflüssig</li><li><strong>Cotton Gin</strong> (Whitney, 1793): Entkörnung von Baumwolle → Nachfrage nach Sklaven steigt in USA</li></ul>` },
          { title: 'Eisenbahn und Stahlproduktion', content: `<strong>George Stephenson</strong> baute 1825 die erste öffentliche Eisenbahn (Stockton–Darlington). 1830: Liverpool–Manchester, erster Personenverkehr.<br><br><strong>Bessemer-Verfahren</strong> (1856): Stahl in Massenproduktion → Schienen, Brücken, Dampfschiffe. Eisenbahn vereint Kohlenbergwerke, Stahlwerke und Märkte in einem System.` },
        ])}
      </div>
    `;
  }

  _panelSozial() {
    return `
      <div class="wim-category hidden" data-wim-cat="sozial">
        <p class="lz-prose">Die Industrialisierung veränderte nicht nur die Wirtschaft, sondern die gesamte Gesellschaftsstruktur — und schuf das Proletariat als neue Klasse.</p>
        ${renderCompare({
          titleA: 'Gewinner', titleB: 'Verlierer',
          listA: ['Industrielle Bourgeoisie: Fabrikbesitzer, Unternehmer', 'Eisenbahninvestoren, Bankiers', 'Ingenieure, Techniker, Kaufleute', 'Städte wuchsen zu Wohlstandszentren', 'Verbrauchsgüter wurden billiger (Textilien)'],
          listB: ['Handweber: Existenz durch Mechanisierung zerstört', 'Fabrikarbeiter: 14–16 h täglich, kein Arbeitsschutz', 'Kinderarbeit ab 5–6 Jahren in Bergwerken und Fabriken', 'Landlose Bauern in Elendsvierteln (Slums) der Städte', 'Frauen für Hungerlöhne — ohne Rechte'],
        })}
        ${renderInfobox({ type: 'warning', icon: 'fas fa-industry', title: 'Lebensumstände der Fabrikarbeiter', body: `<ul style="margin:0 0 0 1.2rem;line-height:1.9;"><li>Manchester (1850): 350.000 Einwohner auf engstem Raum — keine Kanalisation</li><li>Lebenserwartung eines Arbeiters: ~30 Jahre (Bourgeoisie: ~55 Jahre)</li><li>Kinderarbeit: Factory Act 1833 verbot Arbeit unter 9 Jahren — kaum kontrolliert</li><li>Luddisten (1811–13): Handweber zerstören Maschinen in Protest</li></ul>` })}
      </div>
    `;
  }

  _panelBedeutung() {
    return `
      <div class="wim-category hidden" data-wim-cat="bedeutung">
        ${renderInfobox({ type: 'blue', icon: 'fas fa-arrow-trend-up', title: 'Historische Einordnung', body: `Die Industrielle Revolution ist nach der Neolithischen Revolution (Ackerbau) die <strong>zweite große Lebensweise-Revolution</strong> der Menschheitsgeschichte. Sie veränderte Produktion, Gesellschaft, Staat, Umwelt und Denken gleichzeitig.` })}
        <h3 class="lz-h3" style="margin-top:1.5rem;">Langfristige Folgen</h3>
        ${renderAccordion([
          { title: 'Entstehung des Kapitalismus', content: `Fabrikproduktion, Lohnarbeit, Kapitalakkumulation und freier Markt als Regulierungsmechanismus. Adam Smith (<em>Wealth of Nations</em>, 1776) liefert die ideologische Grundlage: unsichtbare Hand des Marktes.` },
          { title: 'Entstehung der Arbeiterbewegung', content: `Soziale Not schuf kollektive Identität. Gewerkschaften, Streiks und politische Forderungen entstanden direkt aus den Fabriken. Chartismus (UK, 1838–57) als erste Massenbewegung für politische Rechte der Arbeiter.` },
          { title: 'Urbanisierung und Bevölkerungsexplosion', content: `England 1800: 80 % Landbevölkerung. England 1900: 80 % Stadtbevölkerung. Manchester wuchs von 25.000 (1772) auf 350.000 (1850). Weltbevölkerung: 1800 ca. 1 Mrd., 1900 ca. 1,6 Mrd. — Industrialisierung + Agrarproduktivität.` },
        ])}
      </div>
    `;
  }

  init() { i18n.init(); initScrollReveal(); initInteractive(document); initWimTabs(document); }
}