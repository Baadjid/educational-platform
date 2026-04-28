// pages/projekte/lernzettel/faecher/deutsch/themen/gattungen/dramatik.js
// Deutsch 2.2 — Dramatik: Bühnentexte

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

export default class DeutschDramatikPage {
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
            <span>2.2 · Dramatik</span>
          </nav>
          <h1 class="lz-sub-title">Dramatik —<br><em>Bühnentexte.</em></h1>
          <p class="lz-sub-desc">Dialog · Monolog · Aufbau · Offenes & geschlossenes Drama · Gattungen</p>
          ${renderTags(['Kapitel 2.2', 'Drama', 'Abitur 2026'])}
        </div>
      </section>

      <!-- ══ GRUNDMERKMALE ══ -->
      <section class="lz-content-section">
        <div class="lz-section-wrap">
          ${renderSubhead('Grundlagen')}
          <h2 class="lz-h2 reveal">Kennzeichen dramatischer Texte</h2>

          ${renderMerkboxGrid([
            {
              icon:  'fas fa-comments',
              title: 'Dialog & Monolog',
              text:  'Die Handlung wird ausschließlich durch direkte Figurenrede vermittelt — kein Erzähler.',
            },
            {
              icon:  'fas fa-align-left',
              title: 'Regieanweisungen',
              text:  'Anweisungen für Bühne, Gestik, Mimik, Licht (Didascalia) — Teil des Texts, aber nicht gesprochen.',
            },
            {
              icon:  'fas fa-table-columns',
              title: 'Akte & Szenen',
              text:  'Gliederung der Handlung in Akte (große Einheiten) und Szenen / Auftritte (Einzelsituationen).',
            },
            {
              icon:  'fas fa-theater-masks',
              title: 'Für die Bühne',
              text:  'Dramen sind zur Aufführung konzipiert — Raumgestaltung, Zeit und Figuren sind durch die Bühne begrenzt.',
            },
          ])}
        </div>
      </section>

      <!-- ══ DIALOG & MONOLOG ══ -->
      <section class="lz-content-section">
        <div class="lz-section-wrap">
          ${renderSubhead('Redeformen')}
          <h2 class="lz-h2 reveal">Dialog, Monolog & besondere Formen</h2>

          ${renderTable({
            headers: ['Form', 'Definition', 'Funktion'],
            rows: [
              ['<strong>Dialog</strong>',       'Gespräch zwischen zwei oder mehr Figuren',                        'Konfliktdarstellung, Charakterisierung, Handlungsförderung'],
              ['<strong>Monolog</strong>',       'Eine Figur spricht allein (oder glaubt es)',                       'Einblick in Gedanken & Gefühle, Entscheidungsprozesse'],
              ['<strong>Beiseite</strong>',      'Publikum hört, andere Figuren nicht',                             'Ironie, Komik, Vertrauensverhältnis zum Zuschauer'],
              ['<strong>Stichomythie</strong>',  'Schneller Schlagabtausch, ein Vers pro Redner',                   'Spannung, Konflikt, Dynamik'],
              ['<strong>Botenbericht</strong>',  'Figur berichtet von Ereignissen außerhalb der Bühne',             'Epische Erweiterung ohne Darstellung'],
              ['<strong>Mauerschau</strong>',    'Figur beschreibt live, was sie von einem erhöhten Punkt sieht',   'Handlung außerhalb der Bühne einbeziehen'],
            ],
          })}
        </div>
      </section>

      <!-- ══ AUFBAU ══ -->
      <section class="lz-content-section">
        <div class="lz-section-wrap">
          ${renderSubhead('Aristoteles / Freytag')}
          <h2 class="lz-h2 reveal">Aufbau des klassischen Dramas (Fünfakter)</h2>

          ${renderTable({
            headers: ['Akt', 'Bezeichnung', 'Inhalt'],
            rows: [
              ['1', '<strong>Exposition</strong>',               'Einführung der Figuren, Ausgangssituation, Andeutung des Konflikts'],
              ['2', '<strong>Steigende Handlung</strong>',       'Konflikt entwickelt sich, Spannung steigt, erste Komplikationen'],
              ['3', '<strong>Höhepunkt / Peripetie</strong>',    'Wendepunkt: Umschwung ins Gute oder Schlechte, höchste Spannung'],
              ['4', '<strong>Fallende Handlung</strong>',        'Retardierendes Moment: kurze Hoffnung, aber Katastrophe absehbar'],
              ['5', '<strong>Katastrophe / Lösung</strong>',     'Auflösung des Konflikts — in der Tragödie oft Tod des Helden'],
            ],
          })}

          ${renderInfobox({
            type:  'tip',
            icon:  'fas fa-lightbulb',
            title: 'Retardierendes Moment',
            body:  'Im 4. Akt verzögert ein unerwartetes Ereignis die unvermeidliche Katastrophe kurz. '
                 + 'Das steigert die Spannung maximal: der Zuschauer hofft noch einmal — und weiß doch, dass es zu spät ist.',
          })}

          ${renderCompare({
            titleA: '🏛️ Geschlossenes Drama',
            titleB: '🌀 Offenes Drama',
            listA: [
              'Einheit von Handlung, Zeit und Ort (Aristotelische Einheiten)',
              'Linearer, kausaler Handlungsverlauf',
              'Fünfaktige Struktur',
              'Klarer Held mit tragischem Fehler (Hamartia)',
              'Beispiel: Sophokles, Lessing, Schiller',
            ],
            listB: [
              'Keine strengen Einheiten — Sprünge in Zeit & Raum',
              'Episodische Struktur, viele Handlungsstränge',
              'Kein zentraler Held notwendig',
              'Verfremdungseffekte (Brecht)',
              'Beispiel: Büchners „Woyzeck", Brechts episches Theater',
            ],
          })}
        </div>
      </section>

      <!-- ══ GATTUNGEN ══ -->
      <section class="lz-content-section">
        <div class="lz-section-wrap">
          ${renderSubhead('Dramenformen')}
          <h2 class="lz-h2 reveal">Dramatische Gattungen</h2>

          ${renderAccordion([
            {
              title:   '⚡ Tragödie',
              content: `<ul style="line-height:1.9; margin-left:1.2rem;">
                          <li>Held in auswegloser Situation — scheitert an sich selbst oder äußeren Mächten</li>
                          <li><strong>Hamartia:</strong> tragischer Fehler des Helden</li>
                          <li><strong>Hybris:</strong> Anmaßung, Überheblichkeit als häufiger Auslöser</li>
                          <li><strong>Katharsis:</strong> Reinigung durch Mitleid und Furcht beim Zuschauer</li>
                          <li>Beispiele: Sophokles „Antigone", Schiller „Maria Stuart", Shakespeare „Hamlet"</li>
                        </ul>`,
            },
            {
              title:   '😄 Komödie / Lustspiel',
              content: `<ul style="line-height:1.9; margin-left:1.2rem;">
                          <li>Verspottung menschlicher Schwächen und gesellschaftlicher Missstände</li>
                          <li>Happy End — Konflikte werden gelöst</li>
                          <li>Mittel: Situationskomik, Ironie, Verwechslung, Übertreibung</li>
                          <li>Beispiele: Molière „Der Geizige", Shakespeare „Ein Sommernachtstraum"</li>
                        </ul>`,
            },
            {
              title:   '⚖️ Bürgerliches Trauerspiel',
              content: `<ul style="line-height:1.9; margin-left:1.2rem;">
                          <li>Tragödie mit bürgerlichen (nicht adeligen) Figuren</li>
                          <li>Entstanden in der Aufklärung als Kritik an Ständegesellschaft</li>
                          <li>Themen: Ehre, Moral, Standesunterschiede, Tugend</li>
                          <li>Beispiele: Lessing „Emilia Galotti", Schiller „Kabale und Liebe"</li>
                        </ul>`,
            },
            {
              title:   '🎭 Tragikomödie',
              content: `<ul style="line-height:1.9; margin-left:1.2rem;">
                          <li>Verschmelzung von Tragischem und Komischem</li>
                          <li>Kein eindeutiges Ende — Ambivalenz bleibt</li>
                          <li>Beispiele: Dürrenmatt „Die Physiker", Tschechow „Der Kirschgarten"</li>
                        </ul>`,
            },
            {
              title:   '🎬 Episches Theater (Brecht)',
              content: `<ul style="line-height:1.9; margin-left:1.2rem;">
                          <li><strong>Verfremdungseffekt (V-Effekt):</strong> Zuschauer soll nicht mitfühlen, sondern nachdenken</li>
                          <li>Mittel: Sprechen aus der Rolle, Schilder/Einblendungen, Songeinlagen</li>
                          <li>Ziel: Gesellschaftliche Verhältnisse kritisch hinterfragen</li>
                          <li>Beispiele: „Mutter Courage", „Der gute Mensch von Sezuan"</li>
                        </ul>`,
            },
          ])}
        </div>
      </section>

      <!-- ══════════════ PAGE NAVIGATION BOTTOM ══════════════ -->
      <section class="lz-content-section" style="padding:1.5rem 0 3rem;">
        <div class="lz-section-wrap">
          ${renderPageNav({
            prev: { label: '2.1 Epik', link: `${BASE}/themen/gattungen/epik` },
            next: { label: '2.3 Lyrik', link: `${BASE}/themen/gattungen/lyrik` },
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