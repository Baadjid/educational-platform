// pages/projekte/lernzettel/faecher/deutsch/themen/epochen/nachkrieg-gegenwart.js
// Deutsch 5.6 — Nachkrieg & Gegenwartsliteratur

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

export default class DeutschNachkriegGegenwartPage {
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
            <span>5.6 · Nachkrieg & Gegenwart</span>
          </nav>
          <h1 class="lz-sub-title">Nachkrieg &<br><em>Gegenwartsliteratur.</em></h1>
          <p class="lz-sub-desc">Stunde Null · Gruppe 47 · DDR-Literatur · Wende · Popliteratur · Migrationsliteratur</p>
          ${renderTags(['Kapitel 5.6', 'Epochen', '1945 – heute'])}
        </div>
      </section>

      <!-- ══ NACHKRIEG ══ -->
      <section class="lz-content-section">
        <div class="lz-section-wrap">
          ${renderSubhead('1945 – 1960')}
          <h2 class="lz-h2 reveal">Trümmerliteratur & Stunde Null</h2>
          <p class="lz-prose reveal">
            Nach 1945 steht die deutsche Literatur vor einer doppelten Trümmerlandschaft:
            die zerstörten Städte und die moralische Katastrophe des Nationalsozialismus.
            Der Begriff <strong>„Stunde Null"</strong> meint einen radikalen Neubeginn.
          </p>
          ${renderMerkboxGrid([
            {
              icon:  'fas fa-broom',
              title: 'Kahlschlag',
              text:  'Sprache von NS-Pathos reinigen. Einfache, direkte, nüchterne Sprache. Keine Metaphern, keine Rhetorik — nur das Notwendige.',
            },
            {
              icon:  'fas fa-users',
              title: 'Gruppe 47 (1947–1967)',
              text:  'Losegruppe von Schriftstellern, die sich trafen, um sich gegenseitig unveröffentlichte Manuskripte vorzulesen und zu kritisieren. Wichtigste literarische Plattform der Nachkriegszeit.',
            },
            {
              icon:  'fas fa-history',
              title: 'Vergangenheitsbewältigung',
              text:  'Das zentrale Thema: Wie konnte der Holocaust geschehen? Schuld, Schweigen, Erinnern. Literatur als Aufarbeitung.',
            },
          ])}
          ${renderTable({
            headers: ['Autor', 'Werk', 'Thema'],
            rows: [
              ['Wolfgang Borchert', '<em>„Draußen vor der Tür"</em> (1947)',   'Heimkehrer ohne Heimat. Schuld und Sinnlosigkeit. Expressiver Stil.'],
              ['Wolfgang Borchert', '<em>„Das Brot"</em> (Kurzgeschichte)',    'Hunger, Scham, stilles Verstehen zwischen Eheleuten.'],
              ['Heinrich Böll',     '<em>„Wo warst du, Adam?"</em> (1951)',    'Absurdität des Krieges. Leitmotiv: Sinnlosigkeit des Tötens.'],
              ['Heinrich Böll',     '<em>„Die verlorene Ehre der Katharina Blum"</em> (1974)', 'Medienmacht und Rufmord. Gesellschaftskritik.'],
              ['Günter Grass',      '<em>„Die Blechtrommel"</em> (1959)',      'Vergangenheitsbewältigung durch grotesken Erzähler. Gruppe-47-Nobelpreis.'],
            ],
          })}
        </div>
      </section>

      <!-- ══ DDR-LITERATUR ══ -->
      <section class="lz-content-section">
        <div class="lz-section-wrap">
          ${renderSubhead('DDR 1949 – 1990')}
          <h2 class="lz-h2 reveal">Literatur der DDR</h2>
          ${renderCompare({
            titleA: '📋 Sozialistischer Realismus (offizielle Linie)',
            titleB: '✊ Kritische DDR-Literatur',
            listA: [
              'Staatsvorgeschriebene Kunst: Arbeiterklasse glorifizieren',
              'Optimistisches Zukunftsbild des Sozialismus',
              'Zensur und Selbstzensur',
              'Aufbauliteratur der 1950er Jahre',
            ],
            listB: [
              'Subversive Kritik an DDR-Verhältnissen',
              'Doppeldeutige Sprache, Esopische Sprache',
              'Viele Autoren wurden zensiert oder ausgebürgert',
              'Christa Wolf, Ulrich Plenzdorf als Beispiele',
            ],
          })}
          ${renderTable({
            headers: ['Autor', 'Werk', 'Thema'],
            rows: [
              ['Christa Wolf',       '<em>„Der geteilte Himmel"</em> (1963)',    'Liebe und die Mauer — persönliche vs. politische Entscheidung'],
              ['Christa Wolf',       '<em>„Kassandra"</em> (1983)',              'Mythos und Gegenwart: Krieg, Patriarchat, Seherin ohne Gehör'],
              ['Ulrich Plenzdorf',   '<em>„Die neuen Leiden des jungen W."</em> (1972)', 'Werther-Adaption in der DDR: Individualismus vs. Kollektiv'],
            ],
          })}
        </div>
      </section>

      <!-- ══ SEIT 1990 ══ -->
      <section class="lz-content-section">
        <div class="lz-section-wrap">
          ${renderSubhead('1990 – heute')}
          <h2 class="lz-h2 reveal">Literatur nach der Wende bis zur Gegenwart</h2>
          ${renderAccordion([
            {
              title:   '🇩🇪 Wende-Literatur & Erinnerungsliteratur',
              content: `<ul style="line-height:1.9; margin-left:1.2rem;">
                          <li>Aufarbeitung der DDR-Vergangenheit, Stasi, Verlusterfahrung</li>
                          <li>Erinnerung an den Holocaust in der 3. Generation</li>
                          <li>Beispiele: Thomas Brussig <em>„Helden wie wir"</em>, Jenny Erpenbeck</li>
                        </ul>`,
            },
            {
              title:   '🎵 Popliteratur (1990er – 2000er)',
              content: `<ul style="line-height:1.9; margin-left:1.2rem;">
                          <li>Konsum, Musik, Medien als Lebenswelt</li>
                          <li>Schnelle, fragmentierte Erzählweise</li>
                          <li>Autoren: Christian Kracht <em>„Faserland"</em>, Benjamin von Stuckrad-Barre</li>
                          <li>Einfluss amerikanischer Popliteratur (Bret Easton Ellis)</li>
                        </ul>`,
            },
            {
              title:   '🌍 Migrationsliteratur & interkulturelle Literatur',
              content: `<ul style="line-height:1.9; margin-left:1.2rem;">
                          <li>Autoren mit Migrationshintergrund schreiben auf Deutsch über Zugehörigkeit, Identität, zwei Kulturen</li>
                          <li>Emine Sevgi Özdamar, Feridun Zaimoğlu, Navid Kermani</li>
                          <li>Deutsche Sprache als Heimat und Fremdheit zugleich</li>
                        </ul>`,
            },
            {
              title:   '📚 Gegenwartsliteratur — Wichtige Autoren',
              content: `${renderTable({
                headers: ['Autor', 'Werk', 'Thema'],
                rows: [
                  ['Daniel Kehlmann', '<em>„Die Vermessung der Welt"</em> (2005)', 'Historischer Roman: Humboldt und Gauß, Aufklärung und Moderne'],
                  ['Juli Zeh',        '<em>„Corpus Delicti"</em> (2009)',          'Dystopie: Gesundheitsdiktatur, Körperkontrolle, Überwachung'],
                  ['Jenny Erpenbeck', '<em>„Gehen, Ging, Gegangen"</em> (2015)',   'Flüchtlinge in Berlin, Empathie und Gleichgültigkeit'],
                  ['Saša Stanišić',   '<em>„Herkunft"</em> (2019)',               'Biographisches Erzählen, Jugoslawienkrieg, Erinnerung'],
                ],
              })}`,
            },
          ])}
          ${renderInfobox({
            type:  'tip',
            icon:  'fas fa-graduation-cap',
            title: 'Abitur-Relevanz',
            body:  'Für das Abitur BW 2026 relevant: Vergangenheitsbewältigung, Identität und Zugehörigkeit, '
                 + 'Dystopie und Gesellschaftskritik. Kurzgeschichten der Nachkriegszeit (Borchert, Böll) '
                 + 'sind klassische Analyse-Texte. Gegenwartsliteratur zeigt thematische Bezüge zur Gegenwart.',
          })}
        </div>
      </section>

      <!-- ══════════════ PAGE NAVIGATION BOTTOM ══════════════ -->
      <section class="lz-content-section" style="padding:1.5rem 0 3rem;">
        <div class="lz-section-wrap">
          ${renderPageNav({
            prev: { label: '5.5 Expressionismus · Exil', link: `${BASE}/themen/epochen/expressionismus-exil` },
            next: { label: '6.1 Akademische Hochsprache (C1/C2)', link: `${BASE}/themen/akademisch/hochsprache` },
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