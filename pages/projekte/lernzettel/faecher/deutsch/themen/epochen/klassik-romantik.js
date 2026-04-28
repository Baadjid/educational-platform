// pages/projekte/lernzettel/faecher/deutsch/themen/epochen/klassik-romantik.js
// Deutsch 5.3 — Sturm & Drang · Weimarer Klassik · Romantik

import { initScrollReveal }  from '../../../../../../../shared/js/index.js';
import { footerHTML }         from '../../../../../../../components/Footer.js';
import { i18n }               from '../../../../../../../shared/js/i18n.js';
import {
  ensureComponentsCSS,
  renderSubhead,
  renderTags,
  renderInfobox,
  renderTable,
  renderAccordion,
  renderMerkboxGrid,
  renderCompare,
  initInteractive,
} from '../../../../js/components/components.js';
import { renderPageNav } from '../../../../js/components/subnav.js';

import { COLOR, COLOR_RGB, BASE } from '../../deutsch.js';

export default class DeutschKlassikRomantikPage {
  constructor(router) { this.router = router; }

  render() {
    ensureComponentsCSS();
    const el = document.createElement('div');
    el.className = 'page page-deutsch-sub';
    if (!document.querySelector('link[href*="sub.css"]')) {
      const l = document.createElement('link');
      l.rel = 'stylesheet';
      l.href = 'pages/projekte/lernzettel/styles/sub.css';
      document.head.appendChild(l);
    }
    el.style.setProperty('--kap-color',     COLOR);
    el.style.setProperty('--kap-color-rgb', COLOR_RGB);
    el.style.setProperty('--lz-accent',     COLOR);
    el.style.setProperty('--lz-accent-rgb', COLOR_RGB);
    el.innerHTML = this._html();
    return el;
  }

  _html() {
    return `
      <section class="lz-sub-hero">
        <div class="lz-sub-hero-orb" aria-hidden="true"></div>
        <div class="lz-sub-hero-inner">
          <nav class="lz-sub-breadcrumb">
            <button class="lz-bread-link" data-nav-link="/projekte/lernzettel">Lernzettel</button>
            <i class="fas fa-chevron-right"></i>
            <button class="lz-bread-link" data-nav-link="${BASE}">Deutsch</button>
            <i class="fas fa-chevron-right"></i>
            <span>5.3 · Klassik & Romantik</span>
          </nav>
          <h1 class="lz-sub-title">Sturm & Drang ·<br><em>Klassik · Romantik.</em></h1>
          <p class="lz-sub-desc">Genie · Humanitätsideal · Sehnsucht · Blaue Blume · Goethe · Schiller · Novalis</p>
          ${renderTags(['Kapitel 5.3', 'Epochen', 'ca. 1770–1830'])}
        </div>
      </section>

      <!-- ══ STURM & DRANG ══ -->
      <section class="lz-content-section">
        <div class="lz-section-wrap">
          ${renderSubhead('ca. 1770 – 1785')}
          <h2 class="lz-h2 reveal">Sturm & Drang — „Geniezeit"</h2>
          <p class="lz-prose reveal">
            Rebellion gegen die Vernunftdiktatur der Aufklärung. Der junge Goethe und Schiller
            stehen für eine Generation, die Gefühl, Leidenschaft und schöpferisches Genie gegen
            Regeln und Konventionen setzt.
          </p>
          ${renderMerkboxGrid([
            {
              icon:  'fas fa-bolt',
              title: 'Genie-Kult',
              text:  'Der geniale Einzelne, der eigene Gesetze schafft, steht über gesellschaftlichen Normen. Rousseaus „Zurück zur Natur".',
            },
            {
              icon:  'fas fa-heart',
              title: 'Gefühl vor Vernunft',
              text:  'Empfindung, Leidenschaft, Natur als Gegenpol zur rationalen Aufklärung. Empfindsamkeit als verwandte Strömung.',
            },
            {
              icon:  'fas fa-fist-raised',
              title: 'Aufbegehren',
              text:  'Protest gegen Tyrannen, Standesschranken, ungerechte Gesellschaft. Revolutionäre Energie ohne politisches Programm.',
            },
          ])}
          ${renderTable({
            headers: ['Werk', 'Autor', 'Thema'],
            rows: [
              ['<em>Die Leiden des jungen Werthers</em> (1774)',    'Goethe',   'Unerfüllte Liebe, Weltschmerz, Selbstmord. Briefroman. Europäischer Bestseller.'],
              ['<em>Die Räuber</em> (1781)',                         'Schiller', 'Freiheit vs. Tyrannei. Karl Moor als Rebell gegen Vater und Gesellschaft.'],
              ['<em>Götz von Berlichingen</em> (1773)',              'Goethe',   'Ritter gegen kaiserliche Willkür. Volksstück im Shakespeare-Stil.'],
            ],
          })}
        </div>
      </section>

      <!-- ══ WEIMARER KLASSIK ══ -->
      <section class="lz-content-section">
        <div class="lz-section-wrap">
          ${renderSubhead('ca. 1786 – 1805')}
          <h2 class="lz-h2 reveal">Weimarer Klassik</h2>
          <p class="lz-prose reveal">
            Goethe und Schiller in Weimar. Das Ideal der <strong>Humanität</strong> — die Formung
            des Menschen zu seiner höchsten sittlichen und ästhetischen Vollendung. Ausgleich
            zwischen Vernunft und Gefühl, Pflicht und Neigung.
          </p>
          ${renderMerkboxGrid([
            {
              icon:  'fas fa-user-graduate',
              title: 'Humanitätsideal',
              text:  'Bildung zur Menschlichkeit. Kunst und Literatur sollen den Menschen veredeln. Schönheit führt zur Freiheit.',
            },
            {
              icon:  'fas fa-balance-scale',
              title: 'Harmonie & Ausgleich',
              text:  'Weder Vernunft-Exzess (Aufklärung) noch Gefühls-Exzess (Sturm & Drang). Maß und Mitte als Ideal.',
            },
            {
              icon:  'fas fa-columns',
              title: 'Antike als Vorbild',
              text:  'Griechenland als Ideal der Harmonie von Sinnlichkeit und Vernunft. Maß, Klarheit, Würde.',
            },
            {
              icon:  'fas fa-theater-masks',
              title: 'Drama als Hauptgattung',
              text:  'Das Drama soll sittlich erziehen (moralische Anstalt). Blankvers (ungereimter Jambus) als Versform.',
            },
          ])}
          ${renderTable({
            headers: ['Werk', 'Autor', 'Thema / Bedeutung'],
            rows: [
              ['<em>Iphigenie auf Tauris</em> (1787)',    'Goethe',   'Humanität siegt über Barbarei durch Wahrhaftigkeit, nicht durch List.'],
              ['<em>Faust I</em> (1808)',                  'Goethe',   'Streben, Schuld, Erlösung. Größtes Werk der deutschen Literatur.'],
              ['<em>Don Carlos</em> (1787)',               'Schiller', 'Freiheit vs. Tyrannei. „Geben Sie Gedankenfreiheit!"'],
              ['<em>Wallenstein</em> (1799)',              'Schiller', 'Trilogie über Macht, Schicksal, Verrat im 30-jährigen Krieg.'],
              ['<em>Maria Stuart</em> (1800)',             'Schiller', 'Zwei Königinnen, Schuld und Würde. Tragödie der moralischen Überlegenheit.'],
              ['<em>Wilhelm Tell</em> (1804)',             'Schiller', 'Freiheitskampf, Tyrannenmord, Volkssouveränität.'],
            ],
          })}
          ${renderInfobox({
            type:  'tip',
            icon:  'fas fa-lightbulb',
            title: 'Goethe vs. Schiller — Gemeinsamkeiten & Unterschiede',
            body:  `<ul style="line-height:1.9; margin-left:1.2rem;">
                      <li><strong>Gemeinsam:</strong> Humanitätsideal, Blankvers, Antike als Vorbild, enge Freundschaft ab 1794</li>
                      <li><strong>Goethe:</strong> Naturwissenschaftler, kontemplativer, Gefühl und Vernunft in Synthese, Weimarer Hofmann</li>
                      <li><strong>Schiller:</strong> Freiheitspathos, moralische Dramatik, idealistischer Philosoph (Kant-Schüler)</li>
                    </ul>`,
          })}
        </div>
      </section>

      <!-- ══ ROMANTIK ══ -->
      <section class="lz-content-section">
        <div class="lz-section-wrap">
          ${renderSubhead('ca. 1795 – 1835')}
          <h2 class="lz-h2 reveal">Romantik</h2>
          <p class="lz-prose reveal">
            Reaktion auf Aufklärung und klassisches Harmoniestreben. Die Romantik sucht das
            Unbewusste, das Traumhafte, das Unendliche — das, was die Vernunft nicht erfassen kann.
          </p>
          ${renderMerkboxGrid([
            {
              icon:  'fas fa-star',
              title: 'Blaue Blume',
              text:  'Symbol der Sehnsucht nach dem Unerreichbaren, Unendlichen, Absoluten. Novalis prägt dieses zentrale Bild der Romantik.',
            },
            {
              icon:  'fas fa-moon',
              title: 'Nacht & Traum',
              text:  'Das Unbewusste, Träume und der Tod als Tor zu tieferen Wahrheiten. Nacht als Heimat der Seele.',
            },
            {
              icon:  'fas fa-tree',
              title: 'Natur als beseelt',
              text:  'Die Natur ist nicht mechanisch (Aufklärung), sondern lebendig, geheimnisvoll, mit dem Innenleben des Menschen verbunden.',
            },
            {
              icon:  'fas fa-hat-wizard',
              title: 'Märchen & Volksgut',
              text:  'Rückbesinnung auf Volkslieder, Märchen, Mythen. Die Brüder Grimm, Brentano, Arnim sammeln und bearbeiten.',
            },
            {
              icon:  'fas fa-globe-europe',
              title: 'Sehnsucht & Wandern',
              text:  'Der Wanderer als romantische Figur. Ferne, Heimweh, ewige Suche ohne Ziel. Sehnsucht (Fernweh) als Lebensgefühl.',
            },
          ])}
          ${renderTable({
            headers: ['Werk / Autor', 'Gattung', 'Thema'],
            rows: [
              ['Novalis <em>„Heinrich von Ofterdingen"</em> (1802)',         'Roman',    'Suche nach der Blauen Blume — Sehnsucht und dichterische Berufung'],
              ['E.T.A. Hoffmann <em>„Der Sandmann"</em> (1816)',             'Novelle',  'Doppelgänger, Wahnsinn, Grenze Realität/Phantasie'],
              ['Joseph von Eichendorff <em>„Aus dem Leben eines Taugenichts"</em>', 'Novelle', 'Wandern, Sorglosigkeit, Gottes Güte in der Natur'],
              ['Clemens Brentano / Achim von Arnim <em>„Des Knaben Wunderhorn"</em>', 'Liedersammlung', 'Volkslieder, Volksgut, romantischer Geist'],
              ['Brüder Grimm <em>„Kinder- und Hausmärchen"</em> (1812)',     'Märchen',  'Volkssagen und Märchen gesammelt und bearbeitet'],
            ],
          })}
          ${renderCompare({
            titleA: '🏛️ Weimarer Klassik',
            titleB: '🌙 Romantik',
            listA: [
              'Harmonie, Maß, Gleichgewicht',
              'Vernunft und Gefühl in Synthese',
              'Antike als Vorbild',
              'Drama als Hauptgattung',
              'Erziehung zur Humanität',
            ],
            listB: [
              'Sehnsucht, Unendlichkeit, das Unvollendete',
              'Gefühl, Traum, Unbewusstes',
              'Mittelalter und Volkskultur als Vorbild',
              'Roman, Novelle, Märchen, Lyrik',
              'Flucht aus der Realität',
            ],
          })}
        </div>
      </section>

      <!-- ══════════════ PAGE NAVIGATION BOTTOM ══════════════ -->
      <section class="lz-content-section" style="padding:1.5rem 0 3rem;">
        <div class="lz-section-wrap">
          ${renderPageNav({
            prev: { label: '5.2 Barock & Aufklärung', link: `${BASE}/themen/epochen/barock-aufklaerung` },
            next: { label: '5.4 Realismus · Naturalismus · Jahrhundertwende', link: `${BASE}/themen/epochen/realismus-naturalismus` },
          }, BASE)}
        </div>
      </section>

      ${footerHTML(this.router)}
    `;
  }

  init() {
    i18n.init();
    initScrollReveal();
    initInteractive(document);
    document.querySelectorAll('[data-nav-link]').forEach(btn => {
      btn.addEventListener('click', () => { window.location.hash = btn.dataset.navLink; });
    });
    document.querySelectorAll('[data-link]').forEach(btn => {
      btn.addEventListener('click', () => { window.location.hash = btn.dataset.link; });
    });
  }
}