// pages/projekte/lernzettel/faecher/spanisch/themen/wortschatz/technologie.js
// 2.5 — Tecnología & Medios digitales · Technologie

import { initScrollReveal } from '../../../../../../../shared/js/index.js';
import { footerHTML }        from '../../../../../../../components/Footer.js';
import { i18n }              from '../../../../../../../shared/js/i18n.js';
import { initWimTabs }       from '../../../../../../../shared/js/wim-tabs.js';
import {
  ensureComponentsCSS, renderInfobox, renderTable,
  renderSubhead, renderTags, renderCompare,
  renderAccordion, initInteractive,
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
  { key: 'digital',   label: '① Digitale Welt'   },
  { key: 'social',    label: '② Social Media'     },
  { key: 'ki',        label: '③ KI & Zukunft'     },
  { key: 'debatte',   label: '④ Pro & Contra'     },
];

export default class Spanisch_Technologie {
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
          <i class="fas fa-chevron-right"></i><span>2.5 Technologie</span>
        </div>
        <h1 class="lz-sub-title">Tecnología & Medios —<br><em>Technologie & Medien</em></h1>
        <p class="lz-sub-desc">
          Digitale Medien · Social Media · Künstliche Intelligenz ·
          Chancen und Risiken · Gesellschaftliche Auswirkungen
        </p>
        ${renderTags(['2.5', 'Technologie', 'Social Media', 'KI', 'Medien', 'Wortschatz', 'Abitur 2026'])}
      </div>
    </section>

    <section class="lz-content-section">
      <div class="lz-section-wrap">

        ${renderSubhead('Themenwortschatz')}
        <h2 class="lz-h2 reveal">Tecnología — Vollständiges Vokabular</h2>
        <p class="lz-prose reveal">Technologie und digitale Medien sind ein zunehmend wichtiges Abiturthema — besonders im Kontext junger Menschen, sozialer Medien und der Auswirkungen auf Gesellschaft und Demokratie.</p>

        <nav class="wim-tabs" id="techTabs" aria-label="Technologie-Kategorien">
          ${TABS.map((t, i) => `
            <button class="wim-tab${i === 0 ? ' active' : ''}" data-wim="${t.key}">${t.label}</button>`).join('')}
        </nav>

        <!-- ① Digitale Welt -->
        <div class="wim-category" data-wim-cat="digital">
          <h3 class="lz-h3">La tecnología digital — Grundvokabular</h3>

          ${renderTable({
            headers: ['Español', 'Deutsch', 'Español', 'Deutsch'],
            rows: [
              ['la tecnología',         'die Technologie',          'la innovación',         'die Innovation'],
              ['internet',              'das Internet',              'la red',                'das Netz/das Internet'],
              ['el dispositivo',        'das Gerät',                 'el smartphone',         'das Smartphone'],
              ['el ordenador',          'der Computer',              'la tableta',            'das Tablet'],
              ['la aplicación (app)',   'die App/Anwendung',         'la plataforma',         'die Plattform'],
              ['los datos',             'die Daten',                 'la privacidad',         'die Privatsphäre'],
              ['la seguridad digital',  'die digitale Sicherheit',   'la ciberseguridad',     'die Cybersicherheit'],
              ['la brecha digital',     'die digitale Kluft',        'el acceso digital',     'der digitale Zugang'],
              ['la digitalización',     'die Digitalisierung',       'la automatización',     'die Automatisierung'],
              ['el comercio electrónico','der E-Commerce',           'el teletrabajo',        'die Telearbeit/Homeoffice'],
              ['la nube',               'die Cloud',                 'el algoritmo',          'der Algorithmus'],
              ['la inteligencia artif.','die Künstliche Intelligenz','el robot',              'der Roboter'],
              ['la ciberdelincuencia',  'die Cyberkriminalität',     'el hacker',             'der Hacker'],
              ['la desinformación',     'die Desinformation',        'las noticias falsas',   'die Fake News'],
              ['el virus informático',  'der Computervirus',         'la contraseña',         'das Passwort'],
            ],
          })}

          ${ej('La brecha digital sigue siendo un problema: no todos tienen acceso a internet de calidad.', 'Die digitale Kluft ist weiterhin ein Problem: nicht alle haben Zugang zu qualitativ hochwertigem Internet.')}
          ${ej('La digitalización transforma no solo la economía, sino también las relaciones sociales.', 'Die Digitalisierung verändert nicht nur die Wirtschaft, sondern auch die sozialen Beziehungen.')}
        </div>

        <!-- ② Social Media -->
        <div class="wim-category hidden" data-wim-cat="social">
          <h3 class="lz-h3">Las redes sociales — Social Media</h3>

          ${renderTable({
            headers: ['Español', 'Deutsch'],
            rows: [
              ['las redes sociales',            'die sozialen Netzwerke / Social Media'],
              ['el usuario / la usuaria',       'der/die Nutzer/in'],
              ['publicar / subir',              'posten / hochladen'],
              ['el contenido',                  'der Inhalt/Content'],
              ['el influencer / creador de cont.','der Influencer / Content Creator'],
              ['los seguidores',                'die Follower'],
              ['el me gusta / like',            'das Like'],
              ['compartir',                     'teilen'],
              ['la viralización',               'das Viral-Gehen'],
              ['el algoritmo',                  'der Algorithmus (Filterblase)'],
              ['la burbuja informativa',        'die Informationsblase / Filterblase'],
              ['el ciberacoso',                 'das Cybermobbing'],
              ['el acoso en línea',             'das Online-Mobbing'],
              ['el anonimato',                  'die Anonymität'],
              ['la dependencia digital',        'die digitale Abhängigkeit'],
              ['la adicción a las redes',       'die Social-Media-Sucht'],
              ['la imagen corporal',            'das Körperbild (durch Social Media beeinflusst)'],
              ['el discurso de odio',           'der Hasskommentar/Hate Speech'],
              ['la regulación de las redes',    'die Regulierung von Social Media'],
              ['la privacidad en línea',        'die Online-Privatsphäre'],
            ],
          })}

          ${renderAccordion([
            {
              title: 'Auswirkungen sozialer Medien auf Jugendliche — Sprachliche Werkzeuge',
              content: `
                ${renderTable({
                  headers: ['Aspekt', 'Positiv', 'Negativ'],
                  rows: [
                    ['Kommunikation', 'facilitar la comunicación global', 'fomentar el aislamiento social'],
                    ['Information',   'acceso rápido a información',      'difundir desinformación y fake news'],
                    ['Identität',     'crear comunidades de apoyo',       'presión sobre la imagen corporal'],
                    ['Gesundheit',    'visibilizar causas sociales',      'provocar ansiedad y depresión'],
                    ['Demokratie',   'movilizar movimientos sociales',   'polarización y discurso de odio'],
                  ],
                })}
              `,
            },
          ])}
        </div>

        <!-- ③ KI & Zukunft -->
        <div class="wim-category hidden" data-wim-cat="ki">
          <h3 class="lz-h3">La inteligencia artificial y el futuro del trabajo</h3>

          ${renderTable({
            headers: ['Español', 'Deutsch', 'Kontext'],
            rows: [
              ['la inteligencia artificial (IA)', 'die Künstliche Intelligenz (KI)', 'el auge de la IA'],
              ['el aprendizaje automático',       'das maschinelle Lernen',           'machine learning'],
              ['el big data',                     'die großen Datenmassen',           'análisis de big data'],
              ['la automatización',               'die Automatisierung',              'automatización del trabajo'],
              ['el robot',                        'der Roboter',                      'sustitución por robots'],
              ['la destrucción de empleo',        'der Jobverlust',                   'miedo a la destrucción de empleo'],
              ['la creación de nuevos empleos',   'die Schaffung neuer Jobs',         'nuevos perfiles profesionales'],
              ['la renta básica universal',       'das bedingungslose Grundeinkommen','propuesta ante la automatización'],
              ['la ética digital',                'die digitale Ethik',               'ética en el uso de la IA'],
              ['el sesgo algorítmico',            'der algorithmische Bias',          'discriminación por algoritmos'],
              ['la singularidad tecnológica',     'die technologische Singularität',  'teoría del futuro de la IA'],
              ['el transhumanismo',               'der Transhumanismus',              'mejora humana mediante tecnología'],
              ['la privacidad de datos',          'der Datenschutz',                  'protección de datos personales'],
              ['la vigilancia digital',           'die digitale Überwachung',         'uso de datos para vigilar'],
            ],
          })}

          ${ej('La inteligencia artificial podría transformar radicalmente el mercado laboral en las próximas décadas.', 'Die Künstliche Intelligenz könnte den Arbeitsmarkt in den nächsten Jahrzehnten grundlegend verändern.')}
          ${ej('El uso masivo de algoritmos plantea serias preguntas sobre la privacidad y la ética.', 'Die massenhafte Nutzung von Algorithmen wirft ernsthafte Fragen über Datenschutz und Ethik auf.')}
        </div>

        <!-- ④ Pro & Contra -->
        <div class="wim-category hidden" data-wim-cat="debatte">
          <h3 class="lz-h3">Technologie in der Debatte — Für und Wider</h3>

          ${renderCompare({
            titleA: 'Ventajas — Vorteile',
            titleB: 'Desventajas — Nachteile',
            listA: [
              'acceso inmediato a información global',
              'comunicación sin barreras geográficas',
              'nuevas oportunidades laborales y educativas',
              'eficiencia y productividad aumentadas',
              'innovaciones en medicina y ciencia',
              'democratización del conocimiento',
              'conectar a comunidades marginadas',
            ],
            listB: [
              'pérdida de privacidad y vigilancia masiva',
              'adicción a pantallas y redes sociales',
              'destrucción de empleos por automatización',
              'difusión de desinformación y fake news',
              'ciberacoso y discurso de odio',
              'brecha digital entre generaciones y países',
              'impacto ambiental de los centros de datos',
            ],
          })}

          ${renderInfobox({ type: 'blue', icon: 'fas fa-pen', title: 'Formulierungen für Technologie-Debatte',
            body: `<strong>Vorteile betonen:</strong> <em>una de las principales ventajas es… · gracias a la tecnología, es posible… · la tecnología ha facilitado enormemente…</em><br>
                   <strong>Nachteile benennen:</strong> <em>sin embargo, no podemos ignorar… · uno de los riesgos más graves es… · la cara negativa de la tecnología…</em><br>
                   <strong>Ausgewogen schlussfolgern:</strong> <em>en definitiva, la tecnología es una herramienta: su impacto depende del uso que hagamos de ella</em>` })}
        </div>

      </div>
    </section>

    <section class="lz-content-section" style="padding:1.5rem 0 3rem;">
      <div class="lz-section-wrap">
        ${renderPageNav({
          prev: { label: '2.4 Identität & Migration', link: `${BASE}/themen/wortschatz/identitaet-migration` },
          next: { label: '2.6 Konnektoren',           link: `${BASE}/themen/wortschatz/konnektoren`          },
        }, BASE)}
      </div>
    </section>
    ${footerHTML(this.router)}
  `; }

  init() { i18n.init(); initScrollReveal(); initInteractive(document); initWimTabs(document); }
}