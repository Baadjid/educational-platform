// pages/projekte/lernzettel/faecher/spanisch/themen/landeskunde/lateinamerika.js
// 3.3 — Latinoamérica: Überblick & Geschichte

import { initScrollReveal } from '../../../../../../../shared/js/index.js';
import { footerHTML }        from '../../../../../../../components/Footer.js';
import { i18n }              from '../../../../../../../shared/js/i18n.js';
import { initWimTabs }       from '../../../../../../../shared/js/wim-tabs.js';
import {
  ensureComponentsCSS, renderInfobox, renderTable,
  renderSubhead, renderTags, renderAccordion,
  renderMerkboxGrid, initInteractive,
} from '../../../../js/components/components.js';
import { COLOR, COLOR_RGB, BASE } from '../../spanisch.js';
import { renderPageNav } from '../../../../js/components/subnav.js';

function ej(es, de) {
  return `<div class="lz-es-ejemplo">
    <span class="lz-es-ejemplo-es">«${es}»</span>
    <span class="lz-es-ejemplo-de">${de}</span>
  </div>`;
}

const TABS = [
  { key: 'ueberblick', label: '① Überblick'      },
  { key: 'kolonial',   label: '② Kolonialzeit'   },
  { key: 'unabhaengig',label: '③ Unabhängigkeit' },
  { key: 'modern',     label: '④ 20./21. Jh.'    },
];

export default class Spanisch_Lateinamerika {
  constructor(router) { this.router = router; }

  render() {
    ensureComponentsCSS();
    [
      ['lernzettel.css', 'pages/projekte/lernzettel/styles/lernzettel.css'],
      ['spanisch.css',   'pages/projekte/lernzettel/faecher/spanisch/spanisch.css'],
    ].forEach(([id, href]) => {
      if (!document.querySelector(`link[href*="${id}"]`)) {
        const l = document.createElement('link'); l.rel = 'stylesheet'; l.href = href;
        document.head.appendChild(l);
      }
    });
    const el = document.createElement('div');
    el.className = 'page page-spanisch page-spanisch-sub';
    el.style.setProperty('--lz-accent', COLOR);
    el.style.setProperty('--lz-accent-rgb', COLOR_RGB);
    el.innerHTML = this._html();
    return el;
  }

  _html() { return `
    <section class="lz-sub-hero" style="--kap-color:${COLOR};--kap-color-rgb:${COLOR_RGB};">
      <div class="lz-sub-hero-inner">
        <div class="lz-sub-hero-orb" aria-hidden="true"></div>
        <div class="lz-sub-breadcrumb">
          <button data-link="${BASE}" class="lz-bread-link">Spanisch</button>
          <i class="fas fa-chevron-right"></i><span>Landeskunde</span>
          <i class="fas fa-chevron-right"></i><span>3.3 Latinoamérica</span>
        </div>
        <h1 class="lz-sub-title">Latinoamérica —<br><em>Überblick & Geschichte</em></h1>
        <p class="lz-sub-desc">
          18 spanischsprachige Länder · Prähispanik & Kolonialzeit ·
          Unabhängigkeit · Diktaturen & Demokratie · Regionale Organisationen
        </p>
        ${renderTags(['3.3', 'Latinoamérica', 'Historia', 'Kolonialzeit', 'Landeskunde', 'Abitur 2026'])}
      </div>
    </section>

    <section class="lz-content-section">
      <div class="lz-section-wrap">

        ${renderSubhead('La América hispanohablante')}
        <h2 class="lz-h2 reveal">Latinoamérica — 18 spanischsprachige Länder</h2>
        <p class="lz-prose reveal">Lateinamerika ist kein homogener Block, sondern eine vielfältige Region mit unterschiedlichen Geschichten, Kulturen, Ethnien und politischen Realitäten — verbunden durch die spanische Sprache und das koloniale Erbe.</p>

        <nav class="wim-tabs" id="latTabs" aria-label="Lateinamerika-Kategorien">
          ${TABS.map((t, i) => `
            <button class="wim-tab${i === 0 ? ' active' : ''}" data-wim="${t.key}">${t.label}</button>`).join('')}
        </nav>

        <!-- ① Überblick -->
        <div class="wim-category" data-wim-cat="ueberblick">
          <h3 class="lz-h3">Überblick — Länder, Fakten, Geographie</h3>

          ${renderTable({
            headers: ['Region', 'Länder', 'Besonderheit'],
            rows: [
              ['Nordamerika (Mesoamerika)', 'México',                                            'Größtes spanischsprachiges Land · Grenze zu USA · Azteken-Erbe'],
              ['Zentralamerika',            'Guatemala, Honduras, El Salvador, Nicaragua, Costa Rica, Panamá', 'Stark von Migration geprägt · politische Instabilität'],
              ['Karibik',                   'Cuba, República Dominicana, Puerto Rico',           'Kubanische Revolution · US-amerikanischer Einfluss'],
              ['Nordwesten Südamerika',     'Colombia, Venezuela, Ecuador',                      'Venezuela-Krise · Kakao/Kaffee · Amazonas'],
              ['Andine Länder',             'Perú, Bolivia',                                     'Inka-Erbe · indigene Mehrheitsbevölkerung in Bolivia'],
              ['Pazifik-Küste',             'Chile',                                             'Pinochet-Diktatur · wirtschaftlich erfolgreiches Modell'],
              ['Südkegel (Cono Sur)',        'Argentina, Uruguay, Paraguay',                      'Buenos Aires · Tango · europäische Einwandererkultur'],
            ],
          })}

          ${renderTable({
            headers: ['Fakt', 'Information'],
            rows: [
              ['Fläche',              'ca. 20 Mio. km² (größer als Europa)'],
              ['Bevölkerung',         'ca. 450 Mio. Spanischsprecher in Lateinamerika'],
              ['Sprachen',            'Spanisch + über 400 indigene Sprachen (Náhuatl, Quechua, Aimara, Guaraní…)'],
              ['Biodiversität',       'Region mit höchster Biodiversität weltweit (Amazonas, Galápagos, Pantanal)'],
              ['Wirtschaft',          'Rohstoffreichtum (Öl, Kupfer, Lithium, Soja) vs. Armut und Ungleichheit'],
              ['Politisches Spektrum','Von linken Regierungen (México, Chile, Colombia) bis autoritär (Venezuela, Nicaragua)'],
            ],
          })}
        </div>

        <!-- ② Kolonialzeit -->
        <div class="wim-category hidden" data-wim-cat="kolonial">
          <h3 class="lz-h3">La Conquista y la Colonización (1492–ca. 1820)</h3>

          ${renderTable({
            headers: ['Ereignis / Phase', 'Jahr', 'Bedeutung'],
            rows: [
              ['Ankunft Kolumbus',          '1492',      '12. Oktober · Hispaniola · Beginn der europäischen Expansion in Amerika'],
              ['Conquista Mexikos',         '1519–1521', 'Hernán Cortés besiegt das Azteken-Reich (Tenochtitlán)'],
              ['Conquista Perus',           '1532–1533', 'Francisco Pizarro besiegt das Inka-Reich · Atahualpa hingerichtet'],
              ['Koloniales System',         '16.–19. Jh.','Encomienda/Mita (Zwangsarbeit) · Sklavenhandel · Ausbeutung der Ressourcen'],
              ['Demografischer Kollaps',    '16. Jh.',   'Bis zu 90% der indigenen Bevölkerung stirbt durch Krankheiten und Gewalt'],
              ['Mestizaje',                 '16.–19. Jh.','Vermischung von Europäern, Indigenen und Afrikanern → mestizische Gesellschaft'],
              ['Kolonialhierarchie',        '16.–18. Jh.','Gachupines/Peninsulares → Criollos → Mestizos → Indígenas → Africanos esclavizados'],
            ],
          })}

          ${renderInfobox({ type: 'warning', icon: 'fas fa-exclamation-triangle', title: 'Kolonialkritischer Diskurs',
            body: `Die Conquista wird heute zunehmend kritisch betrachtet als <strong>genocidio cultural</strong> (Kulturgenozid) und <strong>etnocidio</strong>.<br>
                   <strong>2021:</strong> Mexiko fordert offiziell Entschuldigung von Spanien für die Conquista zum 500. Jahrestag der Einnahme Tenochtitláns.<br>
                   <strong>Vokabular:</strong> el genocidio · la conquista · la resistencia indígena · el etnocidio · la memoria histórica colonial · la decolonización` })}

          ${renderMerkboxGrid([
            {
              icon: 'fas fa-drum',
              title: 'Prähispanische Kulturen',
              text: `<strong>Azteken (México):</strong> Tenochtitlán · Menschenopfer · Kalender · Mais<br>
                     <strong>Inka (Perú/Bolivia):</strong> Machu Picchu · Straßensystem · Quipu (Knotenschrift)<br>
                     <strong>Maya (Mesoamerika):</strong> Chichén Itzá · Schrift · Astronomie · Kalender`,
            },
            {
              icon: 'fas fa-ship',
              title: 'Schlüsselvokabular Kolonialzeit',
              text: `<em>la Conquista</em> · <em>el Conquistador</em> · <em>la encomienda</em> · <em>el mestizaje</em> · <em>los criollos</em> · <em>la evangelización</em> · <em>la resistencia</em> · <em>el virreinato</em>`,
            },
          ])}
        </div>

        <!-- ③ Unabhängigkeit -->
        <div class="wim-category hidden" data-wim-cat="unabhaengig">
          <h3 class="lz-h3">La Independencia (ca. 1810–1825)</h3>
          <p class="lz-prose">Ausgelöst durch die napoleonische Invasion Spaniens (1808) und die Ideen der Aufklärung und der Amerikanischen/Französischen Revolution kämpften sich die Kolonien in der Unabhängigkeit frei — meist geführt von der kreolischen Elite.</p>

          ${renderTable({
            headers: ['Figura', 'Region', 'Bedeutung'],
            rows: [
              ['Simón Bolívar',        'Venezuela/Colombia/Ecuador/Perú/Bolivia', 'El Libertador · Traum eines geeinten Südamerikas'],
              ['José de San Martín',   'Argentinien/Chile/Perú',                  'Befreier des Südens · überließ Bolívar die Führung'],
              ['Miguel Hidalgo',       'México',                                   'Pater Hidalgo · Grito de Dolores (16.9.1810) · mexik. Nationalfeiertag'],
              ['José Martí',           'Cuba',                                    'Dichter und Unabhängigkeitskämpfer · "Apostel" der kuban. Unabhängigkeit'],
              ['Bernardo O\'Higgins',  'Chile',                                   'Erster Direktor Chiles nach der Unabhängigkeit'],
            ],
          })}

          ${ej('Bolívar soñaba con una gran nación latinoamericana unida, pero las rivalidades entre caudillos frustraron ese sueño.', 'Bolívar träumte von einer geeinten großen lateinamerikanischen Nation, aber die Rivalitäten zwischen den Caudillos vereitelten diesen Traum.')}

          ${renderInfobox({ type: 'blue', icon: 'fas fa-flag', title: 'El Grito de Dolores — 16. September 1810',
            body: `Pater Miguel Hidalgo rief in Dolores (Guanajuato) die Bevölkerung zum Aufstand gegen die spanische Kolonialherrschaft auf. Der 16. September ist heute der mexikanische Nationalfeiertag.<br>
                   <strong>Vokabular:</strong> la independencia · el grito · la lucha armada · el caudillo · los criollos · la soberanía` })}
        </div>

        <!-- ④ 20./21. Jh. -->
        <div class="wim-category hidden" data-wim-cat="modern">
          <h3 class="lz-h3">El siglo XX y XXI — Diktaturen, Demokratie, Gegenwart</h3>

          ${renderTable({
            headers: ['Land / Ereignis', 'Zeitraum', 'Bedeutung'],
            rows: [
              ['Revolución Mexicana',          '1910–1920', 'Erste Revolution des 20. Jh. in LA · Landreform · bis heute prägend für Mexiko'],
              ['Populismo: Perón (Argentinien)','1946–1955 / 1973','Peronismus · Sozialpolitik · Evita Perón · bis heute politisch polarisierend'],
              ['Revolución Cubana',            '1959',      'Fidel Castro und Che Guevara · Ende Batista-Diktatur · Kommunismus · US-Embargo'],
              ['Diktaturen im Cono Sur',       '1960–1980er','Argentinien (Videla, 1976–83) · Chile (Pinochet, 1973–89) · Uruguay · Paraguay'],
              ['Operación Cóndor',             '1970er',    'US-unterstütztes Netzwerk der Diktaturen zur Unterdrückung von Linken'],
              ['Guerilla/Bürgerkriege Zentr.Am.','1960–1990er','El Salvador, Guatemala, Nicaragua (Sandinistas) · USA-Einmischung (Iran-Contra)'],
              ['Demokratisierungswelle',       '1980–1990er','Ende der Diktaturen · freie Wahlen · Wahrheitskommissionen'],
              ['Linke Welle (marea rosada)',    '2000–2010er','Chávez (Venezuela) · Morales (Bolivia) · Lula (Brasilien) · Correa (Ecuador)'],
              ['Venezuela-Krise',              'ab 2013',   'Wirtschaftlicher Kollaps · Maduro · 7+ Mio. Migranten · humanitäre Krise'],
              ['Aktuelle Entwicklungen',       '2020er',    'Boric (Chile) · Petro (Colombia) · Lula (Brasilien) · Milei (Argentinien)'],
            ],
            highlight: [2, 8],
          })}

          ${renderInfobox({ type: 'blue', icon: 'fas fa-star', title: 'Che Guevara — Symbol und Mythos',
            body: `Ernesto "Che" Guevara (1928–1967) — argentinischer Arzt und Revolutionär · Mitbegründer der kubanischen Revolution neben Fidel Castro · Versuch, Revolution nach Afrika und Bolivien zu exportieren · 1967 in Bolivien hingerichtet.<br>
                   Sein Bild (Foto Korda) wurde zum meistreproduziertem Bild des 20. Jahrhunderts und Symbol für Rebellion weltweit.<br>
                   <strong>Debate:</strong> ¿héroe revolucionario o asesino? · la memoria histórica · el mito vs. la realidad` })}
        </div>

      </div>
    </section>

    <section class="lz-content-section" style="padding:1.5rem 0 3rem;">
      <div class="lz-section-wrap">
        ${renderPageNav({
          prev: { label: '3.2 España: Kultur',           link: `${BASE}/themen/landeskunde/spanien-kultur`           },
          next: { label: '3.4 Gesellschaft Lateinamerikas', link: `${BASE}/themen/landeskunde/gesellschaft-lateinamerika` },
        }, BASE)}
      </div>
    </section>
    ${footerHTML(this.router)}
  `; }

  init() { i18n.init(); initScrollReveal(); initInteractive(document); initWimTabs(document); }
}