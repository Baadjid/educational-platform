// pages/projekte/lernzettel/faecher/deutsch/themen/kurzgeschichte/einleitung.js
// Deutsch 7.2 — Einleitung & Inhaltsangabe schreiben

import { initScrollReveal }  from '../../../../../../../shared/js/index.js';
import { footerHTML }         from '../../../../../../../components/Footer.js';
import { i18n }               from '../../../../../../../shared/js/i18n.js';
import {
  ensureComponentsCSS,
  renderSubhead,
  renderTags,
  renderInfobox,
  renderTable,
  renderMerkboxGrid,
  renderAccordion,
  initInteractive,
} from '../../../../js/components/components.js';
import { renderPageNav } from '../../../../js/components/subnav.js';

import { COLOR, COLOR_RGB, BASE } from '../../deutsch.js';



export default class DeutschEinleitungPage {
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
            <span>7.2 · Einleitung & Inhaltsangabe</span>
          </nav>
          <h1 class="lz-sub-title">Einleitung &<br><em>Inhaltsangabe.</em></h1>
          <p class="lz-sub-desc">Einleitungsgedanke · Basissatz · Deutungshypothese · Inhaltsangabe</p>
          ${renderTags(['Kapitel 7.2', 'Kurzgeschichte', 'Abitur 2026'])}
        </div>
      </section>

      <!-- ══ EINLEITUNG ══ -->
      <section class="lz-content-section">
        <div class="lz-section-wrap">
          ${renderSubhead('Einleitung')}
          <h2 class="lz-h2 reveal">Die vollständige Einleitung</h2>
          <p class="lz-prose reveal">
            Eine vollständige Einleitung besteht aus <strong>drei Teilen</strong>.
            Alle drei sind Pflicht — wer nur den Basissatz schreibt, verliert Punkte.
          </p>
          ${renderMerkboxGrid([
            {
              icon:  'fas fa-compass',
              title: '1. Einleitungsgedanke (2–3 Sätze)',
              text:  'Allgemeine Einführung zum Thema, zur Epoche oder zur gesellschaftlichen Relevanz des Textes. Zeigt Horizont und Kontext.',
            },
            {
              icon:  'fas fa-id-card',
              title: '2. Basissatz',
              text:  'Enthält: Autor · Titel · Gattung · Erscheinungsjahr · Thema in einem Satz. Vollständig und präzise.',
            },
            {
              icon:  'fas fa-magnifying-glass',
              title: '3. Deutungshypothese / Kernaussage',
              text:  'Was ist die zentrale Aussage des Textes? Dies ist deine interpretative These — sie leitet die gesamte Analyse.',
            },
          ])}

          ${renderAccordion([
            {
              title:   '✅ Vollständige Einleitung — Beispiel 1',
              content: `<div style="background:#e8f5e9; border-left:4px solid #27ae60; padding:15px; border-radius:0 8px 8px 0; font-style:italic; line-height:1.9;">
                          Die Suche nach Identität und der Umgang mit gesellschaftlichen Erwartungen prägen besonders 
                          die Adoleszenz. Viele Jugendliche leiden unter dem Druck, bestimmten Normen entsprechen zu müssen.
                          <em>(Einleitungsgedanke)</em><br><br>
                          In der Kurzgeschichte „Im Spiegel" von Margret Steenfatt, erschienen 2008, wird die innere 
                          Zerrissenheit eines Jugendlichen thematisiert, der mit den Erwartungen seiner Umgebung nicht 
                          umgehen kann.
                          <em>(Basissatz)</em><br><br>
                          Die Geschichte zeigt eindringlich, wie Versagensängste und Selbstzweifel zu selbstdestruktivem 
                          Verhalten führen können, und verdeutlicht die Gefahr, sich ausschließlich über die Bewertungen 
                          anderer zu definieren.
                          <em>(Deutungshypothese)</em>
                        </div>`,
            },
            {
              title:   '✅ Vollständige Einleitung — Beispiel 2 (Borchert)',
              content: `<div style="background:#e8f5e9; border-left:4px solid #27ae60; padding:15px; border-radius:0 8px 8px 0; font-style:italic; line-height:1.9;">
                          Die Nachkriegsliteratur ist geprägt von der Auseinandersetzung mit den Schrecken des Zweiten 
                          Weltkriegs. Autoren wie Wolfgang Borchert wählten bewusst eine „kahle", reduzierte Sprache, 
                          um die nüchterne Realität abzubilden.
                          <em>(Einleitungsgedanke)</em><br><br>
                          In Wolfgang Borcherts Kurzgeschichte „Das Brot" aus dem Jahr 1946 wird eine nächtliche 
                          Begegnung zwischen einem Ehepaar geschildert, bei der die Frau ihren Mann beim heimlichen 
                          Essen erwischt.
                          <em>(Basissatz)</em><br><br>
                          Die Geschichte offenbart die zerstörerische Wirkung von Hunger und Not auf zwischenmenschliche 
                          Beziehungen und zeigt zugleich, wie stille Barmherzigkeit diese Krise überbrücken kann.
                          <em>(Deutungshypothese)</em>
                        </div>`,
            },
            {
              title:   '❌ Unvollständige Einleitung — Beispiel',
              content: `<div style="background:#ffebee; border-left:4px solid #e53935; padding:15px; border-radius:0 8px 8px 0; font-style:italic; line-height:1.9;">
                          In der Kurzgeschichte „Das Brot" von Borchert geht es um einen Mann, der nachts Brot isst.
                        </div>
                        <ul style="line-height:1.9; margin-left:1.2rem; margin-top:1rem;">
                          <li>❌ Kein Einleitungsgedanke</li>
                          <li>❌ Erscheinungsjahr fehlt</li>
                          <li>❌ Gattung nicht genannt</li>
                          <li>❌ Keine Deutungshypothese — nur Inhaltsangabe</li>
                        </ul>`,
            },
          ])}
        </div>
      </section>

      <!-- ══ BASISSATZ ══ -->
      <section class="lz-content-section">
        <div class="lz-section-wrap">
          ${renderSubhead('Basissatz')}
          <h2 class="lz-h2 reveal">Der perfekte Basissatz</h2>
          ${renderTable({
            headers: ['Element', 'Inhalt', 'Beispiel'],
            rows: [
              ['<strong>Gattung</strong>',          'Kurzgeschichte / Novelle / Erzählung',          '„In der Kurzgeschichte …"'],
              ['<strong>Titel</strong>',             'In Anführungszeichen',                          '„Das Brot"'],
              ['<strong>Autor</strong>',             'Vor- und Nachname',                             'von Wolfgang Borchert'],
              ['<strong>Erscheinungsjahr</strong>',  'In runden Klammern oder mit „aus dem Jahr"',    '(1946) / aus dem Jahr 1946'],
              ['<strong>Thema</strong>',             'Was wird thematisiert? — Ein Satz',             '… wird die zerstörerische Wirkung von Hunger und Not thematisiert.'],
            ],
          })}
          ${renderInfobox({
            type:  '',
            icon:  'fas fa-pen',
            title: 'Musterformulierungen',
            body:  `<ul style="line-height:1.9; margin-left:1.2rem;">
                      <li>„In der Kurzgeschichte <em>„[Titel]"</em> von <em>[Autor]</em> (<em>[Jahr]</em>) wird <em>[Thema]</em> thematisiert."</li>
                      <li>„<em>[Autor]</em> setzt sich in seiner/ihrer Kurzgeschichte <em>„[Titel]"</em> (<em>[Jahr]</em>) mit <em>[Thema]</em> auseinander."</li>
                      <li>„Die Kurzgeschichte <em>„[Titel]"</em> (<em>[Jahr]</em>) von <em>[Autor]</em> thematisiert <em>[Thema]</em>."</li>
                    </ul>`,
          })}
        </div>
      </section>

      <!-- ══ INHALTSANGABE ══ -->
      <section class="lz-content-section">
        <div class="lz-section-wrap">
          ${renderSubhead('Inhaltsangabe')}
          <h2 class="lz-h2 reveal">Inhaltsangabe — Regeln & Fehler</h2>
          ${renderMerkboxGrid([
            {
              icon:  'fas fa-clock',
              title: 'Präsens',
              text:  'Texte werden immer im Präsens wiedergegeben — niemals Vergangenheitsform.',
            },
            {
              icon:  'fas fa-compress',
              title: 'Kürze',
              text:  'Maximal 10–15 % der Gesamtanalyse. Nur die wichtigsten Handlungsschritte — keine Details.',
            },
            {
              icon:  'fas fa-ban',
              title: 'Keine Deutung',
              text:  'Reine Wiedergabe des Inhalts — keine Interpretation, keine eigene Wertung.',
            },
            {
              icon:  'fas fa-font',
              title: 'Eigene Worte',
              text:  'Keine Zitate, keine wörtlichen Übernahmen — eigene, sachliche Formulierungen.',
            },
          ])}
          ${renderTable({
            headers: ['Fehler', 'Besser'],
            rows: [
              ['„Der Erzähler sagte, die Frau <strong>fand</strong> ihren Mann in der Küche."',   '„Die Frau <strong>findet</strong> ihren Mann in der Küche."'],
              ['„Das ist sehr symbolisch gemeint."',                                               '(Das gehört in die Analyse, nicht die Inhaltsangabe)'],
              ['„Die Geschichte handelt von Liebe und Tod und Hunger und Einsamkeit."',           '„Die Geschichte schildert die nächtliche Begegnung eines Ehepaars, bei der …"'],
              ['Drei Seiten Inhaltsangabe',                                                        'Maximal ein kurzer Absatz'],
            ],
          })}
        </div>
      </section>

      <!-- ══════════════ PAGE NAVIGATION BOTTOM ══════════════ -->
      <section class="lz-content-section" style="padding:1.5rem 0 3rem;">
        <div class="lz-section-wrap">
          ${renderPageNav({
            prev: { label: '7.1 Merkmale der Kurzgeschichte', link: `${BASE}/themen/kurzgeschichte/merkmale` },
            next: { label: '7.3 Erzähltechnische Mittel analysieren', link: `${BASE}/themen/kurzgeschichte/erzaehltechnik` },
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