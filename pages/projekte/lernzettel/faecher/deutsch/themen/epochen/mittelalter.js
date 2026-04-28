// pages/projekte/lernzettel/faecher/deutsch/themen/epochen/mittelalter.js
// Deutsch 5.1 — Mittelalter & frühe Neuzeit

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
  renderVTimeline,
  initInteractive,
} from '../../../../js/components/components.js';
import { renderPageNav } from '../../../../js/components/subnav.js';

import { COLOR, COLOR_RGB, BASE } from '../../deutsch.js';


export default class DeutschMittelalterPage {
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
            <span>5.1 · Mittelalter & frühe Neuzeit</span>
          </nav>
          <h1 class="lz-sub-title">Mittelalter &<br><em>frühe Neuzeit.</em></h1>
          <p class="lz-sub-desc">Althochdeutsch · Mittelhochdeutsch · Renaissance · Humanismus · Reformation</p>
          ${renderTags(['Kapitel 5.1', 'Epochen', 'ca. 750–1650'])}
        </div>
      </section>

      <!-- ══ ZEITLEISTE ══ -->
      <section class="lz-content-section">
        <div class="lz-section-wrap">
          ${renderSubhead('Überblick')}
          <h2 class="lz-h2 reveal">Von den Anfängen bis zur Reformation</h2>
          ${renderVTimeline([
            {
              year:  'ca. 750 – 1050',
              title: 'Althochdeutsche Dichtung',
              text:  'Erste deutsche Schriftdenkmäler neben dem Latein. Christlicher Einfluss durch Karolingerzeit. Hildebrandslied (ca. 820), Merseburger Zaubersprüche (10. Jh.), Wessobrunner Gebet.',
            },
            {
              year:  'ca. 1050 – 1350',
              title: 'Mittelhochdeutsche Blütezeit',
              text:  'Höfische Kultur, Rittertum, Kreuzzüge. Minnesang und höfisches Epos als Leitgattungen. Einfluss des Französischen auf Sprache und Stoffe.',
            },
            {
              year:  'ca. 1350 – 1500',
              title: 'Spätmittelalter',
              text:  'Verfall der höfischen Kultur. Bürgerliche Literatur wächst. Schwankliteratur, Fastnachtsspiel. Hans Sachs als bedeutendster Vertreter.',
            },
            {
              year:  'ca. 1350 – 1600',
              title: 'Renaissance, Humanismus, Reformation',
              text:  'Wiederentdeckung der Antike. Buchdruck (Gutenberg, 1450). Luther übersetzt die Bibel (1522–1534) und begründet die neuhochdeutsche Schriftsprache.',
            },
          ])}
        </div>
      </section>

      <!-- ══ ALTHOCHDEUTSCH ══ -->
      <section class="lz-content-section">
        <div class="lz-section-wrap">
          ${renderSubhead('750 – 1050')}
          <h2 class="lz-h2 reveal">Althochdeutsche Dichtung</h2>
          ${renderMerkboxGrid([
            {
              icon:  'fas fa-church',
              title: 'Christlicher Einfluss',
              text:  'Christianisierung unter Karl dem Großen bringt erste deutsche Schrifttexte hervor — meist religiöse Übersetzungen aus dem Latein.',
            },
            {
              icon:  'fas fa-scroll',
              title: 'Hildebrandslied (ca. 820)',
              text:  'Ältestes deutsches Heldenlied. Zweisprachig (Althochdeutsch + Altsächsisch). Thema: Vater-Sohn-Konflikt, Ehre, Schicksal.',
            },
            {
              icon:  'fas fa-magic',
              title: 'Merseburger Zaubersprüche (10. Jh.)',
              text:  'Einzige erhaltene heidnische Texte in althochdeutscher Sprache. Zeigen das Nebeneinander von Christentum und germanischer Religion.',
            },
          ])}
        </div>
      </section>

      <!-- ══ MITTELHOCHDEUTSCH ══ -->
      <section class="lz-content-section">
        <div class="lz-section-wrap">
          ${renderSubhead('1050 – 1350')}
          <h2 class="lz-h2 reveal">Mittelhochdeutsche Blütezeit</h2>
          ${renderTable({
            headers: ['Gattung', 'Merkmale', 'Wichtige Werke / Autoren'],
            rows: [
              [
                '<strong>Minnesang</strong>',
                'Liebeslyrik des Rittertums. Verehrung der unerreichbaren Dame (domina). Hohe Minne vs. niedere Minne.',
                'Walther von der Vogelweide, Heinrich von Morungen, Reinmar der Alte',
              ],
              [
                '<strong>Höfisches Epos</strong>',
                'Ritterliche Tugenden: Tapferkeit, Treue, Mäßigung (mâze). Abenteuer- und Minnehandlung verknüpft.',
                'Wolfram von Eschenbach „Parzival", Hartmann von Aue „Iwein" / „Erec"',
              ],
              [
                '<strong>Heldenepik</strong>',
                'Stoffe aus germanischer Heldentradition. Mündlich überliefert, dann verschriftlicht.',
                'Nibelungenlied (ca. 1200), Gudrunlied',
              ],
            ],
          })}
          ${renderInfobox({
            type:  '',
            icon:  'fas fa-crown',
            title: 'Walther von der Vogelweide (ca. 1170–1230)',
            body:  'Bedeutendster Minnesänger des Mittelalters. Verband höfische Liebeslyrik mit politischer '
                 + 'Dichtung (Spruchdichtung). Kritisierte Kirche und Adel. Sein Ton wechselt zwischen '
                 + 'elegischer Minneklage und kämpferischer Zeitkritik.',
          })}
          ${renderInfobox({
            type:  '',
            icon:  'fas fa-dragon',
            title: 'Das Nibelungenlied (ca. 1200)',
            body:  'Anonym überliefertes Nationalepos der Deutschen. Zwei Teile: '
                 + '(1) Siegfrieds Jugend, Brautwerbung, Tod. '
                 + '(2) Kriemhilds Rache an den Burgunden. '
                 + 'Themen: Ruhm, Treue, Verrat, Rache, Schicksal. '
                 + 'Wurde im 19. Jh. zum nationalen Symbol stilisiert.',
          })}
        </div>
      </section>

      <!-- ══ RENAISSANCE & HUMANISMUS ══ -->
      <section class="lz-content-section">
        <div class="lz-section-wrap">
          ${renderSubhead('ca. 1350 – 1600')}
          <h2 class="lz-h2 reveal">Renaissance, Humanismus & Reformation</h2>
          ${renderMerkboxGrid([
            {
              icon:  'fas fa-columns',
              title: 'Renaissance',
              text:  'Wiedergeburt der Antike. Griechisch-römische Texte werden neu entdeckt. Ideal des universal gebildeten Menschen (uomo universale). In Deutschland zeitlich verzögert gegenüber Italien.',
            },
            {
              icon:  'fas fa-graduation-cap',
              title: 'Humanismus',
              text:  'Bildung und Menschenwürde im Zentrum. Kritische Philologie (Texte in ihrer Originalsprache lesen). Erasmus von Rotterdam als wichtigster Vertreter. Kritik an Kirche und Aberglauben.',
            },
            {
              icon:  'fas fa-book-bible',
              title: 'Reformation (Luther)',
              text:  'Martin Luther übersetzt die Bibel (NT 1522, Gesamtbibel 1534). Schafft eine überregionale Schriftsprache. Thesen gegen Ablasshandel (1517) verbreiten sich durch Buchdruck rasend schnell.',
            },
            {
              icon:  'fas fa-print',
              title: 'Buchdruck (Gutenberg, ca. 1450)',
              text:  'Revolutioniert die Wissensverbreitung. Bücher werden erschwinglich. Reformation und Humanismus wären ohne Buchdruck nicht denkbar gewesen.',
            },
          ])}
          ${renderAccordion([
            {
              title:   '📖 Luthers Bedeutung für die deutsche Sprache',
              content: `<ul style="line-height:1.9; margin-left:1.2rem;">
                          <li>Übersetzte die Bibel in die ostmitteldeutsche Kanzleisprache — für Nord- und Süddeutsche verständlich</li>
                          <li>Schuf zahlreiche bis heute gebräuchliche Redewendungen: <em>„im Dunkeln tappen", „Herzenslust", „Feuertaufe"</em></li>
                          <li>Grundlage der neuhochdeutschen Standardsprache</li>
                          <li>Prinzip: „Dem Volk aufs Maul schauen" — volksnah, aber nicht vulgär</li>
                        </ul>`,
            },
          ])}
        </div>
      </section>

      <!-- ══════════════ PAGE NAVIGATION BOTTOM ══════════════ -->
      <section class="lz-content-section" style="padding:1.5rem 0 3rem;">
        <div class="lz-section-wrap">
          ${renderPageNav({
            prev: { label: '4.5 Analyse-Methodik & Formulierungshilfen', link: `${BASE}/themen/stilmittel/analyse-methodik` },
            next: { label: '5.2 Barock & Aufklärung', link: `${BASE}/themen/epochen/barock-aufklaerung` },
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