// pages/projekte/lernzettel/faecher/deutsch/themen/akademisch/deklarative.js
// Deutsch 6.4 — Performative Verben: Deklarative & Bewertende

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
  initInteractive,
} from '../../../../js/components/components.js';
import { renderPageNav } from '../../../../js/components/subnav.js';

import { COLOR, COLOR_RGB, BASE } from '../../deutsch.js';


export default class DeutschDeklarativePage {
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
            <span>6.4 · Deklarative & Bewertende</span>
          </nav>
          <h1 class="lz-sub-title">Deklarative &<br><em>Bewertende Verben.</em></h1>
          <p class="lz-sub-desc">Zustände schaffen · Analysieren · Kritisieren · Bewerten · Urteilen</p>
          ${renderTags(['Kapitel 6.4', 'Sprechakte', 'Abitur 2026'])}
        </div>
      </section>

      <!-- ══ DEKLARATIVE ══ -->
      <section class="lz-content-section">
        <div class="lz-section-wrap">
          ${renderSubhead('Zustände schaffen')}
          <h2 class="lz-h2 reveal">Deklarative — Zustände durch Sprechen schaffen</h2>
          <p class="lz-prose reveal">
            Deklarative sind die radikalste Form performativer Verben: Das Aussprechen
            <em>selbst</em> verändert die Wirklichkeit. Sie funktionieren nur im richtigen
            institutionellen Rahmen (Richter, Priester, Amtsperson).
          </p>
          ${renderTable({
            headers: ['Verb', 'Kontext', 'Beispielsatz'],
            rows: [
              ['<strong>benennen</strong>',   'Einen Namen / Titel vergeben',           'Ich benenne dich hiermit zum Projektleiter.'],
              ['<strong>erklären</strong>',   'Offiziell einen Zustand verkünden',      'Ich erkläre Sie hiermit zu Mann und Frau.'],
              ['<strong>ernennen</strong>',   'Offiziell in ein Amt einsetzen',         'Ich ernenne Sie hiermit zur Direktorin.'],
              ['<strong>eröffnen</strong>',   'Offiziell beginnen lassen',              'Ich eröffne hiermit die Sitzung.'],
              ['<strong>schließen</strong>',  'Offiziell beenden',                      'Ich schließe hiermit die Verhandlung.'],
              ['<strong>segnen</strong>',     'Religiöse Weihe erteilen',               'Ich segne dieses Haus und seine Bewohner.'],
              ['<strong>taufen</strong>',     'Religiöse / symbolische Benennung',      'Ich taufe dich auf den Namen …'],
              ['<strong>verkünden</strong>',  'Offiziell bekanntgeben',                 'Das Gericht verkündet das Urteil.'],
              ['<strong>verurteilen</strong>','Rechtlich / moralisch schuldig sprechen','Das Gericht verurteilt ihn zu zwei Jahren Haft.'],
              ['<strong>freisprechen</strong>','Rechtlich für unschuldig erklären',     'Das Gericht spricht die Angeklagte frei.'],
            ],
          })}
          ${renderInfobox({
            type:  'tip',
            icon:  'fas fa-lightbulb',
            title: 'Performative Kraft',
            body:  'Deklarative funktionieren nur, wenn der Sprecher die institutionelle '
                 + '<strong>Autorität und den richtigen Kontext</strong> besitzt. '
                 + '„Ich erkläre Sie zu Mann und Frau" — nur wirksam, wenn ein Standesbeamter '
                 + 'oder Priester es sagt. Dasselbe Satz von einem Passanten hat keine Wirkung.',
          })}
        </div>
      </section>

      <!-- ══ BEWERTENDE VERBEN ══ -->
      <section class="lz-content-section">
        <div class="lz-section-wrap">
          ${renderSubhead('Analysieren & Bewerten')}
          <h2 class="lz-h2 reveal">Bewertende & analysierende Verben</h2>
          <p class="lz-prose reveal">
            Diese Verben sind besonders wertvoll für Textanalysen und Erörterungen —
            sie ermöglichen eine differenzierte, akademisch präzise Stellungnahme.
          </p>
          ${renderTable({
            headers: ['Verb', 'Verwendungskontext', 'Beispielsatz', 'EN'],
            rows: [
              ['<strong>analysieren</strong>',    'Systematisch untersuchen',          'Ich analysiere die zugrundeliegenden Strukturen.',         'analyzes'],
              ['<strong>befürworten</strong>',    'Positiv bewerten, unterstützen',    'Ich befürworte diese Maßnahme nachdrücklich.',             'advocates'],
              ['<strong>beurteilen</strong>',     'Bewertend Stellung nehmen',         'Ich beurteile die Lage als kritisch.',                     'assesses'],
              ['<strong>billigen</strong>',       'Gutheißen, akzeptieren',            'Ich billige das Vorgehen der Kommission.',                 'approves'],
              ['<strong>einschätzen</strong>',    'Eine Einschätzung vornehmen',       'Ich schätze die Erfolgsaussichten als hoch ein.',          'estimates'],
              ['<strong>hinterfragen</strong>',   'Kritisch prüfen, infrage stellen',  'Ich hinterfrage die Grundannahmen dieser Theorie.',        'questions'],
              ['<strong>interpretieren</strong>', 'Bedeutung auslegen, deuten',        'Ich interpretiere den Text als Kritik am System.',         'interprets'],
              ['<strong>kritisieren</strong>',    'Negativ beurteilen, Mängel aufzeigen','Ich kritisiere die mangelnde Transparenz.',              'criticizes'],
              ['<strong>missbilligen</strong>',   'Nicht gutheißen, ablehnen',         'Ich missbillige diese Entscheidung entschieden.',          'disapproves'],
              ['<strong>verurteilen</strong>',    'Scharf moralisch ablehnen',         'Ich verurteile jede Form von Gewalt.',                    'condemns'],
            ],
          })}
          ${renderAccordion([
            {
              title:   '⚖️ Graduelle Stärke der Bewertung',
              content: `<ul style="line-height:1.9; margin-left:1.2rem;">
                          <li><strong>Schwächste Ablehnung:</strong> hinterfragen → bezweifeln → missbilligen</li>
                          <li><strong>Stärkste Ablehnung:</strong> kritisieren → verurteilen → verwerfen</li>
                          <li><strong>Schwächste Zustimmung:</strong> billigen → befürworten → begrüßen</li>
                          <li><strong>Stärkste Zustimmung:</strong> unterstützen → eintreten für → verteidigen</li>
                        </ul>`,
            },
            {
              title:   '🎯 Gesamtüberblick: Alle Sprechaktklassen',
              content: renderTable({
                headers: ['Klasse', 'Funktion', 'Beispielverben'],
                rows: [
                  ['<strong>Assertive</strong>',   'Sachverhalte als wahr darstellen',          'behaupten, feststellen, konstatieren, postulieren'],
                  ['<strong>Direktive</strong>',   'Den Hörer zu Handlungen veranlassen',       'fordern, appellieren, mahnen, warnen, empfehlen'],
                  ['<strong>Kommissive</strong>',  'Sich selbst zu einer Handlung verpflichten', 'versprechen, zusichern, garantieren, schwören'],
                  ['<strong>Expressive</strong>',  'Gefühle und Einstellungen ausdrücken',      'danken, bedauern, gratulieren, loben, würdigen'],
                  ['<strong>Deklarative</strong>', 'Durch Sprechen Realität verändern',          'erklären, ernennen, eröffnen, verkünden, taufen'],
                  ['<strong>Bewertende</strong>',  'Wertend Stellung nehmen (oft assertiv)',    'kritisieren, befürworten, beurteilen, hinterfragen'],
                ],
              }),
            },
          ])}
        </div>
      </section>

      <!-- ══════════════ PAGE NAVIGATION BOTTOM ══════════════ -->
      <section class="lz-content-section" style="padding:1.5rem 0 3rem;">
        <div class="lz-section-wrap">
          ${renderPageNav({
            prev: { label: '6.3 Direktive · Kommissive · Expressive', link: `${BASE}/themen/akademisch/direktive` },
            next: { label: '7.1 Merkmale der Kurzgeschichte', link: `${BASE}/themen/kurzgeschichte/merkmale` },
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