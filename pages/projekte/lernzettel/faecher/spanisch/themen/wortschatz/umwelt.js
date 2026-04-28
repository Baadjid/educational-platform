// pages/projekte/lernzettel/faecher/spanisch/themen/wortschatz/umwelt.js
// 2.3 — Medio ambiente · Umwelt & Nachhaltigkeit

import { initScrollReveal } from '../../../../../../../shared/js/index.js';
import { footerHTML }        from '../../../../../../../components/Footer.js';
import { i18n }              from '../../../../../../../shared/js/i18n.js';
import { initWimTabs }       from '../../../../../../../shared/js/wim-tabs.js';
import {
  ensureComponentsCSS, renderInfobox, renderTable,
  renderSubhead, renderTags, renderCompare,
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
  { key: 'natur',     label: '① Natur & Klima'    },
  { key: 'probleme',  label: '② Umweltprobleme'   },
  { key: 'loesungen', label: '③ Lösungsansätze'   },
  { key: 'phrasen',   label: '④ Formulierungen'   },
];

export default class Spanisch_Umwelt {
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
          <i class="fas fa-chevron-right"></i><span>Wortschatz</span>
          <i class="fas fa-chevron-right"></i><span>2.3 Umwelt</span>
        </div>
        <h1 class="lz-sub-title">Medio ambiente —<br><em>Umwelt & Nachhaltigkeit</em></h1>
        <p class="lz-sub-desc">
          Natur & Klimawandel · Umweltprobleme · Nachhaltige Lösungen ·
          Formulierungen für Textproduktion
        </p>
        ${renderTags(['2.3', 'Umwelt', 'Klimawandel', 'Nachhaltigkeit', 'Wortschatz', 'Abitur 2026'])}
      </div>
    </section>

    <section class="lz-content-section">
      <div class="lz-section-wrap">

        ${renderSubhead('Themenwortschatz')}
        <h2 class="lz-h2 reveal">Medio ambiente — Vollständiges Vokabular</h2>
        <p class="lz-prose reveal">Umwelt und Klimawandel sind zentrale Abiturthemen — insbesondere im Kontext Lateinamerikas (Amazonas-Abholzung, Wasserknappheit) und Spaniens (Dürre, erneuerbare Energien).</p>

        <nav class="wim-tabs" id="umweltTabs" aria-label="Umwelt-Kategorien">
          ${TABS.map((t, i) => `
            <button class="wim-tab${i === 0 ? ' active' : ''}" data-wim="${t.key}">${t.label}</button>`).join('')}
        </nav>

        <!-- ① Natur & Klima -->
        <div class="wim-category" data-wim-cat="natur">
          <h3 class="lz-h3">Natur, Ökosysteme und Klima</h3>

          ${renderTable({
            headers: ['Español', 'Deutsch', 'Español', 'Deutsch'],
            rows: [
              ['el medio ambiente',    'die Umwelt',               'la naturaleza',       'die Natur'],
              ['el ecosistema',        'das Ökosystem',             'la biodiversidad',    'die Biodiversität'],
              ['el clima',             'das Klima',                 'el tiempo',           'das Wetter'],
              ['el cambio climático',  'der Klimawandel',           'el calentamiento global','die Erderwärmung'],
              ['la temperatura',       'die Temperatur',            'las precipitaciones', 'die Niederschläge'],
              ['la sequía',            'die Dürre',                 'las inundaciones',    'die Überschwemmungen'],
              ['el bosque',            'der Wald',                  'la selva',            'der Regenwald/Dschungel'],
              ['la selva amazónica',   'der Amazonas-Regenwald',    'el desierto',         'die Wüste'],
              ['el océano / el mar',   'der Ozean / das Meer',      'el río',              'der Fluss'],
              ['la costa',             'die Küste',                 'la montaña',          'der Berg'],
              ['la especie',           'die Art/Spezies',           'la flora y fauna',    'Flora und Fauna'],
              ['el suelo',             'der Boden',                 'el agua dulce',       'das Süßwasser'],
              ['los recursos naturales','die natürlichen Ressourcen','la energía',         'die Energie'],
              ['los combustibles fósiles','die fossilen Brennstoffe','el petróleo',        'das Erdöl/Petroleum'],
              ['el gas natural',       'das Erdgas',                'el carbón',           'die Kohle'],
            ],
          })}

          ${ej('El cambio climático representa una de las mayores amenazas para los ecosistemas del planeta.', 'Der Klimawandel stellt eine der größten Bedrohungen für die Ökosysteme des Planeten dar.')}
          ${ej('La selva amazónica es considerada el pulmón del planeta por su capacidad de absorber CO₂.', 'Der Amazonas-Regenwald gilt als die Lunge des Planeten wegen seiner Fähigkeit, CO₂ zu absorbieren.')}
        </div>

        <!-- ② Umweltprobleme -->
        <div class="wim-category hidden" data-wim-cat="probleme">
          <h3 class="lz-h3">Umweltprobleme & Bedrohungen</h3>

          ${renderTable({
            headers: ['Español', 'Deutsch', 'Verben dazu'],
            rows: [
              ['la contaminación',          'die Verschmutzung/Kontamination',   'contaminar · reducir · luchar contra'],
              ['la contaminación del aire',  'die Luftverschmutzung',             'medir · superar los límites'],
              ['la contaminación del agua',  'die Wasserverschmutzung',           'afectar · purificar'],
              ['la contaminación acústica',  'die Lärmbelästigung',               'sufrir · combatir'],
              ['la deforestación',           'die Abholzung',                     'frenar · impulsar · acabar con'],
              ['la desertificación',         'die Desertifikation',               'avanzar · combatir'],
              ['la pérdida de biodiversidad','der Biodiversitätsverlust',         'acelerar · detener'],
              ['la extinción de especies',   'das Artensterben',                  'amenazar · provocar'],
              ['el efecto invernadero',      'der Treibhauseffekt',               'intensificar · mitigar'],
              ['las emisiones de CO₂',       'die CO₂-Emissionen',               'reducir · aumentar · compensar'],
              ['los residuos / la basura',   'der Abfall/Müll',                  'generar · reciclar · gestionar'],
              ['el plástico',                'der Kunststoff/Plastik',            'eliminar · reducir · sustituir'],
              ['la sobreexplotación',        'die Überausbeutung',                'de los recursos naturales'],
              ['el agotamiento del suelo',   'die Bodenerschöpfung',             'provocar · evitar'],
              ['el nivel del mar',           'der Meeresspiegel',                 'subir · amenazar costas'],
            ],
          })}

          ${renderCompare({
            titleA: 'Ursachen (causas)',
            titleB: 'Folgen (consecuencias)',
            listA: [
              'el uso de combustibles fósiles',
              'la industrialización masiva',
              'la deforestación',
              'la ganadería intensiva',
              'el consumo excesivo',
              'el transporte motorizado',
              'la agricultura industrial',
            ],
            listB: [
              'el aumento de la temperatura global',
              'fenómenos meteorológicos extremos',
              'la pérdida de biodiversidad',
              'el aumento del nivel del mar',
              'la escasez de agua potable',
              'migraciones climáticas',
              'mayor frecuencia de incendios',
            ],
          })}
        </div>

        <!-- ③ Lösungsansätze -->
        <div class="wim-category hidden" data-wim-cat="loesungen">
          <h3 class="lz-h3">Nachhaltige Lösungen & erneuerbare Energien</h3>

          ${renderTable({
            headers: ['Español', 'Deutsch'],
            rows: [
              ['el desarrollo sostenible',         'die nachhaltige Entwicklung'],
              ['la sostenibilidad',                'die Nachhaltigkeit'],
              ['las energías renovables',          'die erneuerbaren Energien'],
              ['la energía solar',                 'die Sonnenenergie'],
              ['la energía eólica',                'die Windenergie'],
              ['la energía hidráulica',            'die Wasserkraft'],
              ['la energía nuclear',               'die Kernenergie'],
              ['la huella de carbono',             'der CO₂-Fußabdruck'],
              ['la neutralidad de carbono',        'die Kohlenstoffneutralität / Klimaneutralität'],
              ['el reciclaje',                     'das Recycling'],
              ['la economía circular',             'die Kreislaufwirtschaft'],
              ['la transición energética',         'die Energiewende'],
              ['los acuerdos climáticos',          'die Klimaabkommen'],
              ['el Acuerdo de París',              'das Pariser Klimaabkommen'],
              ['las políticas medioambientales',   'die Umweltpolitik'],
              ['la reforestación',                 'die Aufforstung'],
              ['la movilidad sostenible',          'die nachhaltige Mobilität'],
              ['el consumo responsable',           'der verantwortungsvolle Konsum'],
              ['reducir, reutilizar, reciclar',    'reduzieren, wiederverwenden, recyceln (3R)'],
              ['la concienciación ambiental',      'das Umweltbewusstsein'],
            ],
          })}

          ${renderMerkboxGrid([
            {
              icon: 'fas fa-solar-panel',
              title: 'Energiewende — Schlüsselphrasen',
              text: `<em>apostar por las energías renovables</em> (auf erneuerbare Energien setzen)<br>
                     <em>reducir la dependencia de los combustibles fósiles</em><br>
                     <em>alcanzar la neutralidad de carbono para 2050</em>`,
            },
            {
              icon: 'fas fa-recycle',
              title: 'Nachhaltigkeitsphrasen',
              text: `<em>adoptar un estilo de vida más sostenible</em><br>
                     <em>reducir la huella de carbono</em><br>
                     <em>fomentar la economía circular</em>`,
            },
          ])}

          ${ej('España tiene un gran potencial para las energías renovables gracias a su clima soleado y sus costas ventosas.', 'Spanien hat ein großes Potenzial für erneuerbare Energien dank seines sonnigen Klimas und seiner windreichen Küsten.')}
          ${ej('Es imprescindible que los gobiernos adopten políticas ambiciosas para frenar el cambio climático.', 'Es ist unerlässlich, dass Regierungen ehrgeizige Maßnahmen ergreifen, um den Klimawandel zu bremsen.')}
        </div>

        <!-- ④ Formulierungen -->
        <div class="wim-category hidden" data-wim-cat="phrasen">
          <h3 class="lz-h3">Formulierungen für Textproduktion — Umwelt</h3>
          <p class="lz-prose">Diese Phrasen können direkt in Aufsätzen, Leserbriefen und Kommentaren verwendet werden:</p>

          ${renderTable({
            headers: ['Funktion', 'Formulierung', 'Bedeutung'],
            rows: [
              ['Einleitung',   'El cambio climático es, sin duda, uno de los mayores desafíos de nuestra época.',  'unser größte Herausforderung'],
              ['Einleitung',   'En un mundo cada vez más afectado por la crisis ambiental…',                       'in einer zunehmend betroffenen Welt'],
              ['Problem',      'La situación actual del medio ambiente es alarmante.',                             'die aktuelle Lage ist alarmierend'],
              ['Problem',      'Los efectos del calentamiento global se hacen cada vez más evidentes.',            'die Auswirkungen werden immer deutlicher'],
              ['Ursache',      'Este problema tiene su origen en…',                                               'dieses Problem hat seinen Ursprung in…'],
              ['Ursache',      'La principal causa de este fenómeno es…',                                         'die Hauptursache ist…'],
              ['Folge',        'Como consecuencia, se producen…',                                                 'als Konsequenz entstehen…'],
              ['Folge',        'Esto tiene graves repercusiones para…',                                           'dies hat schwerwiegende Folgen für…'],
              ['Lösung',       'Para combatir este problema, es necesario…',                                      'um dieses Problem zu bekämpfen…'],
              ['Lösung',       'Una de las medidas más eficaces sería…',                                          'eine der wirksamsten Maßnahmen wäre…'],
              ['Appell',       'Es responsabilidad de todos contribuir a…',                                       'es ist aller Verantwortung beizutragen…'],
              ['Appell',       'No podemos permitirnos ignorar este problema.',                                   'wir können es uns nicht leisten zu ignorieren'],
              ['Schluss',      'En conclusión, urge actuar de forma coordinada.',                                 'es ist dringend koordiniertes Handeln nötig'],
              ['Schluss',      'Solo con un esfuerzo colectivo podremos hacer frente a este desafío.',            'nur mit kollektivem Einsatz können wir…'],
            ],
          })}
        </div>

      </div>
    </section>

    <section class="lz-content-section" style="padding:1.5rem 0 3rem;">
      <div class="lz-section-wrap">
        ${renderPageNav({
          prev: { label: '2.2 Gesellschaft & Politik',  link: `${BASE}/themen/wortschatz/gesellschaft-politik`  },
          next: { label: '2.4 Identität & Migration',   link: `${BASE}/themen/wortschatz/identitaet-migration`  },
        }, BASE)}
      </div>
    </section>
    ${footerHTML(this.router)}
  `; }

  init() { i18n.init(); initScrollReveal(); initInteractive(document); initWimTabs(document); }
}