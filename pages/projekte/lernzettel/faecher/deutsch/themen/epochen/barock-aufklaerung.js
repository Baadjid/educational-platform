// pages/projekte/lernzettel/faecher/deutsch/themen/epochen/barock-aufklaerung.js
// Deutsch 5.2 — Barock & Aufklärung

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



export default class DeutschBarockAufklaerungPage {
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
            <span>5.2 · Barock & Aufklärung</span>
          </nav>
          <h1 class="lz-sub-title">Barock &<br><em>Aufklärung.</em></h1>
          <p class="lz-sub-desc">Vanitas · Carpe diem · Vergänglichkeit · Vernunft · Toleranz · Bürgerliches Trauerspiel</p>
          ${renderTags(['Kapitel 5.2', 'Epochen', 'ca. 1600–1800'])}
        </div>
      </section>

      <!-- ══ BAROCK ══ -->
      <section class="lz-content-section">
        <div class="lz-section-wrap">
          ${renderSubhead('ca. 1600 – 1720')}
          <h2 class="lz-h2 reveal">Barock</h2>
          <p class="lz-prose reveal">
            Der <strong>Dreißigjährige Krieg (1618–1648)</strong> prägt das Lebensgefühl der Epoche
            fundamental: Massensterben, Pestepidemien und religiöse Konflikte erzeugen ein tiefes
            Bewusstsein der menschlichen Vergänglichkeit.
          </p>
          ${renderMerkboxGrid([
            {
              icon:  'fas fa-skull',
              title: 'Vanitas (Vergänglichkeit)',
              text:  'Alles Irdische ist vergänglich und nichtig. Memento mori: „Bedenke, dass du stirbst." Zentrales Leitmotiv der Barockliteratur.',
            },
            {
              icon:  'fas fa-sun',
              title: 'Carpe diem (Genieße den Tag)',
              text:  'Gegenbewegung zur Vanitas: Genieße das Leben, solange du kannst. Die Schönheit des Augenblicks ist flüchtig.',
            },
            {
              icon:  'fas fa-balance-scale',
              title: 'Antithetik',
              text:  'Grundprinzip der Barockliteratur: Gegensätze wie Leben/Tod, Freude/Schmerz, Diesseits/Jenseits werden gegenübergestellt.',
            },
            {
              icon:  'fas fa-theater-masks',
              title: 'Theatrum mundi',
              text:  'Die Welt als Bühne: Das Leben ist nur ein Schauspiel, Gott der Regisseur. Der Mensch spielt nur eine zugeteilte Rolle.',
            },
          ])}
          ${renderTable({
            headers: ['Merkmal', 'Erläuterung', 'Beispiel'],
            rows: [
              ['<strong>Schwulst / Pathos</strong>',    'Überschwängliche, übertriebene Sprache',      'Häufung von Adjektiven, Hyperbeln'],
              ['<strong>Sonettform</strong>',            '14 Verse, 2 Quartette + 2 Terzette',          'Gryphius „Es ist alles eitel"'],
              ['<strong>Alexandriner</strong>',          'Sechshebiger Jambus mit Zäsur in der Mitte',  'Standardvers des Barock'],
              ['<strong>Emblematik</strong>',            'Bild + Motto + Erläuterung als didaktische Einheit', 'Verbreitetes Literaturformat'],
            ],
          })}
          ${renderInfobox({
            type:  '',
            icon:  'fas fa-feather',
            title: 'Andreas Gryphius (1616–1664)',
            body:  'Bedeutendster Lyriker und Dramatiker des Barock. Erlebte selbst die Schrecken des '
                 + 'Dreißigjährigen Krieges. Sonette über Vergänglichkeit, Tod und Gottvertrauen. '
                 + 'Wichtigstes Werk: Sonett <em>„Es ist alles eitel"</em> — Vanitas-Gedicht par excellence.',
          })}
        </div>
      </section>

      <!-- ══ AUFKLÄRUNG ══ -->
      <section class="lz-content-section">
        <div class="lz-section-wrap">
          ${renderSubhead('ca. 1700 – 1800')}
          <h2 class="lz-h2 reveal">Aufklärung</h2>
          <p class="lz-prose reveal">
            <strong>„Habe Mut, dich deines eigenen Verstandes zu bedienen!"</strong> (Kant) —
            die Aufklärung setzt Vernunft, Toleranz und Menschenwürde gegen Aberglaube,
            kirchliche Bevormundung und absolutistische Willkür.
          </p>
          ${renderMerkboxGrid([
            {
              icon:  'fas fa-brain',
              title: 'Vernunft',
              text:  'Der Mensch ist ein vernunftbegabtes Wesen. Durch Bildung und Erziehung kann er vervollkommnet werden.',
            },
            {
              icon:  'fas fa-dove',
              title: 'Toleranz',
              text:  'Religiöse und weltanschauliche Toleranz. Keine Verurteilung von Menschen wegen ihrer Herkunft oder ihres Glaubens.',
            },
            {
              icon:  'fas fa-user',
              title: 'Menschenwürde',
              text:  'Alle Menschen sind gleich und besitzen unveräußerliche Würde. Grundlage späterer Menschenrechtsdokumente.',
            },
            {
              icon:  'fas fa-chalkboard-teacher',
              title: 'Bildung & Erziehung',
              text:  'Literatur soll belehren und unterhalten (prodesse et delectare). Theater als moralische Schule des Volkes.',
            },
          ])}
          ${renderTable({
            headers: ['Gattung', 'Merkmale', 'Wichtige Werke'],
            rows: [
              ['<strong>Fabel</strong>',                    'Moralisch-didaktische Tiererzählung',           'Lessing „Der Rabe und der Fuchs"'],
              ['<strong>Bürgerliches Trauerspiel</strong>',  'Tragödie mit bürgerlichen Figuren',             'Lessing „Emilia Galotti" (1772)'],
              ['<strong>Aufklärungsdrama</strong>',         'Vernunft siegt über Vorurteil',                 'Lessing „Nathan der Weise" (1779)'],
              ['<strong>Briefroman</strong>',                'Innenleben durch Briefform vermittelt',         'Richardson „Pamela", Goethe „Werther"'],
            ],
          })}
          ${renderInfobox({
            type:  '',
            icon:  'fas fa-pen-nib',
            title: 'Gotthold Ephraim Lessing (1729–1781)',
            body:  'Wichtigster Aufklärer der deutschen Literatur. '
                 + '<em>„Nathan der Weise"</em> (1779): Plädoyer für religiöse Toleranz — Jude, Christ '
                 + 'und Muslim als gleichwertige Menschen. Die Ringparabel als Kernstück: Keine Religion '
                 + 'kann beweisen, die wahre zu sein. '
                 + '<em>„Emilia Galotti"</em> (1772): Kritik an fürstlicher Willkür und Ständegesellschaft.',
          })}
          ${renderCompare({
            titleA: '🌑 Barock',
            titleB: '💡 Aufklärung',
            listA: [
              'Vergänglichkeit, Vanitas, Memento mori',
              'Antithetik: Leben / Tod, Diesseits / Jenseits',
              'Gott bestimmt, Mensch gehorcht',
              'Schwülstiger, pathetischer Stil',
              'Sonett, Alexandriner als Leitformen',
            ],
            listB: [
              'Vernunft, Bildung, Fortschritt',
              'Toleranz und Menschenwürde',
              'Mensch gestaltet sein Schicksal durch Vernunft',
              'Klarer, sachlicher, eleganter Stil',
              'Drama, Fabel, Briefroman als Leitgattungen',
            ],
          })}
        </div>
      </section>

      <!-- ══════════════ PAGE NAVIGATION BOTTOM ══════════════ -->
      <section class="lz-content-section" style="padding:1.5rem 0 3rem;">
        <div class="lz-section-wrap">
          ${renderPageNav({
            prev: { label: '5.1 Mittelalter & frühe Neuzeit', link: `${BASE}/themen/epochen/mittelalter` },
            next: { label: '5.3 Sturm & Drang · Klassik · Romantik', link: `${BASE}/themen/epochen/klassik-romantik` },
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