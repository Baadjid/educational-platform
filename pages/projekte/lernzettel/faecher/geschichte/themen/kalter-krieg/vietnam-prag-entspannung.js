// pages/projekte/lernzettel/faecher/geschichte/themen/kalter-krieg/vietnam-prag-entspannung.js
// 3.4 — Vietnam, Prager Frühling & Entspannungspolitik

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
const VIETNAM_TABS = [
  { key: 'vietnam', label: '🚁 Vietnam' },
  { key: 'prag',    label: '🌸 Prager Frühling' },
  { key: 'detente', label: '🕊️ Entspannungspolitik' },
];

export default class GeschichteVietnamPragEntspannung {
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
          <span>3.4 · Vietnam, Prag &amp; Entspannung</span>
        </nav>
        <h1 class="lz-sub-title">Vietnam, Prager Frühling<br><em>&amp; Entspannung.</em></h1>
        <p class="lz-sub-desc">
          Die 1960er und 70er Jahre: Stellvertreterkrieg in Vietnam, Unterdrückung
          des Prager Frühlings und der erste Versuch, den Kalten Krieg zu zähmen.
        </p>
        ${renderTags(['3.4', '1960–1979', 'Kalter Krieg', 'Vietnam', 'Entspannungspolitik', 'Abitur 2026'])}
      </div>
    </section>

    <section class="lz-content-section">
      <div class="lz-section-wrap">
        ${renderSubhead('Drei Schlüsselereignisse')}
        <h2 class="lz-h2 reveal">Die Welt der 1960er und 70er</h2>
        ${renderMerkboxGrid([
          { icon: 'fas fa-helicopter', title: 'Vietnamkrieg', text: 'Größter US-Stellvertreterkrieg des Kalten Krieges. 58.000 US-Soldaten, ~2 Mio. vietnamesische Tote. USA verlieren — Dominotheorie widerlegt.' },
          { icon: 'fas fa-tank', title: 'Prager Frühling (1968)', text: 'Reformkommunismus in der ČSSR brutal niedergeschlagen durch Warschauer-Pakt-Truppen. Breschnew-Doktrin: UdSSR beansprucht Recht auf Intervention in sozialistischen Ländern.' },
          { icon: 'fas fa-dove', title: 'Entspannungspolitik', text: 'Nixon/Kissinger: Détente. Brandt: Ostpolitik. Ziel: Reduzierung der Konfrontation durch Dialog, Verträge und wirtschaftliche Verflechtung.' },
          { icon: 'fas fa-person-raised-fist', title: '1968: Globale Rebellion', text: 'Studentenbewegungen in USA, BRD, Frankreich, Mexiko, Japan. Protest gegen Vietnam, Autoritäten, Spießertum — und in Prag gegen den eigenen kommunistischen Staat.' },
        ])}
      </div>
    </section>

    <section class="lz-content-section" style="padding-top:0;">
      <div class="lz-section-wrap">
        ${renderSubhead('Vertiefung')}
        <h2 class="lz-h2 reveal">Vietnam, Prag &amp; Détente</h2>

        <nav class="wim-tabs" id="vpent-tabs" aria-label="Vietnam, Prag & Entspannung">
          ${VIETNAM_TABS.map((t, i) => `
            <button class="wim-tab${i === 0 ? ' active' : ''}" data-wim="${t.key}">
              ${t.label}
            </button>`).join('')}
        </nav>

        ${this._panelVietnam()}
        ${this._panelPrag()}
        ${this._panelDetente()}

      </div>
    </section>

    <section class="lz-content-section" style="padding-top:0;">
      <div class="lz-section-wrap">
        ${renderSubhead('Chronologie')}
        <h2 class="lz-h2 reveal">1960–1979</h2>
        ${renderVTimeline([
          { year: '1961',       title: 'Bau der Berliner Mauer',              text: 'DDR stoppt Massenflucht — Symbol der Teilung.' },
          { year: '1964',       title: 'Tonkin-Resolution',                    text: 'Beginn der direkten US-Kriegsbeteiligung in Vietnam.' },
          { year: 'Jan. 1968',  title: 'Tet-Offensive',                        text: 'Wendepunkt in Vietnam — USA verlieren psychologisch.' },
          { year: 'Aug. 1968',  title: 'Niederschlagung Prager Frühling',      text: 'Warschauer Pakt zerstört Reformkommunismus. Breschnew-Doktrin.' },
          { year: '1969',       title: 'Mondlandung (Apollo 11)',               text: 'USA gewinnen Space Race.' },
          { year: '1969',       title: 'Brandt: Ostpolitik beginnt',            text: 'Neue Deutschland-Politik — Wandel durch Annäherung.' },
          { year: '1972',       title: 'Nixon in China + SALT I',              text: 'Triangulardiplomatie + erste ICBM-Begrenzung.' },
          { year: '1973',       title: 'Pariser Friedensabkommen Vietnam',     text: 'USA ziehen ab — Südvietnam auf sich allein gestellt.' },
          { year: 'Apr. 1975',  title: 'Fall Saigons',                         text: 'Nordvietnam siegt. Vietnam geeint unter Kommunismus.' },
          { year: '1975',       title: 'Helsinki-Schlussakte',                  text: 'Grenzen + Menschenrechte — Grundlage für spätere Dissidentenbewegungen.' },
          { year: '1979',       title: 'Sowjetische Invasion Afghanistans',    text: 'Ende der Entspannungspolitik — Beginn der Neuen Eiszeit.' },
        ])}
      </div>
    </section>

    <section class="lz-content-section" style="padding-top:0;">
      <div class="lz-section-wrap">
        ${renderPageNav({
          prev: { link: `${BASE}/themen/kalter-krieg/kuba-krise`,             label: '3.3 · Kuba-Krise' },
          next: { link: `${BASE}/themen/kalter-krieg/ende-kalter-krieg`,      label: '3.5 · Ende des Kalten Krieges' },
        })}
      </div>
    </section>

    ${footerHTML(this.router)}
  `; }

  _panelVietnam() {
    return `
      <div class="wim-category" data-wim-cat="vietnam">
        ${renderAccordion([
          { title: 'Vorgeschichte: Indochina-Krieg und Teilung', content: `1954: Frankreich verliert Indochina (Dien Bien Phu). Genfer Abkommen teilt Vietnam am 17. Breitengrad: <strong>Nordvietnam</strong> (kommunistisch, Ho Chi Minh) und <strong>Südvietnam</strong> (prowestlich, Diem).<br><br>USA unterstützen Süden finanziell und mit Beratern. Wiedervereinigungswahlen werden nie gehalten — USA fürchten kommunistischen Sieg.` },
          { title: 'Eskalation und US-Eintritt (1964–1968)', content: `<strong>Tonkin-Resolution (August 1964):</strong> Nach angeblichem nordvietnamesischem Angriff auf US-Schiffe (später zweifelhaft) ermächtigt Kongress Johnson zu Kriegsführung.<br><br>1965: Erste US-Kampftruppen landen. Spitze: 543.000 US-Soldaten (1969). Strategie: Überlegenheit durch Feuerkraft (<em>Search and Destroy</em>), Napalm, Agent Orange, Bombenabwürfe auf Nordvietnam.` },
          { title: 'Tet-Offensive (Januar 1968) — Wendepunkt', content: `Vietcong und Nordvietnam griffen gleichzeitig 100 südvietnamesische Städte an. Militärisch: US-Abwehr erfolgreich. Psychologisch: totale Niederlage der USA.<br><br>US-Bevölkerung hatte Sieg zugesagt bekommen — und sah, dass der Feind bis in die US-Botschaft in Saigon vordringen konnte. Johnson entschied, nicht mehr zu kandidieren.` },
          { title: 'Vietnamisierung, Rückzug und Fall Saigons', content: `Nixon: <em>Vietnamisierung</em> — südvietnamesische Armee soll selbst kämpfen. Gleichzeitig geheime Bombardements Kambodschas und Laos.<br><br>1973: Pariser Friedensabkommen — US-Rückzug. 30. April 1975: Nordvietnam nimmt Saigon ein. Bilder der Evakuierung der US-Botschaft — Symbol der amerikanischen Niederlage.<br><br>Folgen: 58.000 US-, ~2 Mio. vietnamesische Tote. <em>Vietnam-Syndrom</em>: USA scheuerten Jahrzehnte lang direktes Eingreifen.` },
        ])}
      </div>
    `;
  }

  _panelPrag() {
    return `
      <div class="wim-category hidden" data-wim-cat="prag">
        <p class="lz-prose">Als <strong>Prager Frühling</strong> bezeichnet man die politische Liberalisierung in der ČSSR unter Reformkommunist Alexander Dubček (Januar–August 1968).</p>
        ${renderAccordion([
          { title: 'Dubčeks „Sozialismus mit menschlichem Antlitz"', content: `Dubček wollte innerhalb des sozialistischen Systems reformieren:<ul style="margin:.5rem 0 0 1.2rem;line-height:1.9;"><li>Pressefreiheit und Abschaffung der Zensur</li><li>Rehabilitierung politischer Gefangener</li><li>Innerparteiliche Demokratie</li><li>Wirtschaftsreformen (Dezentralisierung)</li><li>Meinungsfreiheit, freie Diskussion</li></ul>Ziel: kein Kapitalismus, kein Austritt aus dem Warschauer Pakt — nur menschlicherer Sozialismus.` },
          { title: 'Niederschlagung (20./21. August 1968)', content: `Warschauer-Pakt-Truppen (UdSSR, Polen, DDR, Ungarn, Bulgarien) marschierten mit ~500.000 Soldaten und 2.000 Panzern in die ČSSR ein. Dubček wurde nach Moskau verschleppt und zum Widerruf gezwungen.<br><br><strong>Jan Palach</strong>: Studentprotestler, verbrannte sich im Januar 1969 öffentlich aus Protest — Symbol des Widerstands.` },
          { title: 'Breschnew-Doktrin', content: `Breschnews Begründung: <em>„Die sozialistischen Staaten sind verantwortlich nicht nur für ihr eigenes, sondern auch für das Schicksal des gesamten Sozialismus."</em><br><br>Inhalt: Die UdSSR beansprucht das Recht, in sozialistischen Ländern zu intervenieren, wenn der Sozialismus bedroht ist.<br><br>1989 widerrufen als „Sinatra-Doktrin" (Gorbatschow: jedes Land entscheidet selbst).` },
        ])}
      </div>
    `;
  }

  _panelDetente() {
    return `
      <div class="wim-category hidden" data-wim-cat="detente">
        <p class="lz-prose">Nach Kuba-Krise und Vietnam begannen beide Seiten, die Konfrontation zu regulieren — ohne den grundlegenden Systemkonflikt aufzugeben.</p>
        ${renderTable({
          headers: ['Ereignis / Vertrag', 'Jahr', 'Inhalt', 'Bedeutung'],
          rows: [
            ['Atomteststopp-Vertrag', '1963', 'Verbot oberirdischer Atomtests', 'Erster Rüstungskontrollvertrag'],
            ['Nicht-Verbreitungsvertrag (NPT)', '1968', 'Keine Weitergabe von Atomwaffen an neue Staaten', '190 Unterzeichner — aber kein Abrüstungsgebot'],
            ['Nixon in China (1972)', '1972', 'USA erkennen VR China an', 'Triangulare Diplomatie — UdSSR unter Druck'],
            ['SALT I', '1972', 'Begrenzung strategischer Raketen (ICBMs, SLBMs)', 'Erster Vertrag zur quantitativen Rüstungsbegrenzung'],
            ['Ostpolitik (Brandt)', '1969–74', 'Verträge mit UdSSR, Polen, DDR, Viermächteabkommen Berlin', 'Anerkennung der Nachkriegsrealitäten, Normalisierung'],
            ['Helsinki-Schlussakte', '1975', 'Anerkennung europ. Grenzen + Menschenrechtskorb', 'Menschenrechte als Hebel für Dissidentenbewegungen im Osten'],
            ['SALT II', '1979', 'Obergrenzen für strategische Waffen', 'Nie ratifiziert nach Afghanistan-Invasion'],
          ],
        })}
        ${renderInfobox({ type: 'blue', icon: 'fas fa-lightbulb', title: 'Ostpolitik — Wandel durch Annäherung', body: `Egon Bahrs Konzept (<em>Wandel durch Annäherung</em>, 1963): Nicht Konfrontation, sondern langsame Veränderung des Ostens durch wirtschaftliche und menschliche Kontakte. Brandt-Regierung setzte es um: Kniefall in Warschau (1970), Grundlagenvertrag DDR-BRD (1972).<br><br>Langfristig: Helsinki-Prozess → Bürgerrechtsbewegungen im Ostblock (Solidarność, Charta 77).` })}
      </div>
    `;
  }

  init() { i18n.init(); initScrollReveal(); initInteractive(document); initWimTabs(document); }
}