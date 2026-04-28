// pages/projekte/lernzettel/faecher/deutsch/themen/akademisch/assertive.js
// Deutsch 6.2 — Performative Verben: Assertive (Behaupten & Feststellen)

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

export default class DeutschAssertivePage {
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
            <span>6.2 · Assertive</span>
          </nav>
          <h1 class="lz-sub-title">Performative Verben —<br><em>Assertive.</em></h1>
          <p class="lz-sub-desc">Behaupten · Feststellen · Postulieren · Konstatieren · Inferieren</p>
          ${renderTags(['Kapitel 6.2', 'Sprechakte', 'Abitur 2026'])}
        </div>
      </section>

      <!-- ══ EINFÜHRUNG ══ -->
      <section class="lz-content-section">
        <div class="lz-section-wrap">
          ${renderSubhead('Grundlagen')}
          <h2 class="lz-h2 reveal">Was sind performative Verben?</h2>
          <p class="lz-prose reveal">
            Performative Verben (Sprechaktverben) sind Verben, mit denen eine Handlung vollzogen
            wird, indem man sie ausspricht. Sie stammen aus der <strong>Sprechakttheorie von
            J. L. Austin</strong>. In der Textanalyse zeigen sie, was ein Autor mit seiner
            Äußerung <em>tut</em> — nicht nur was er sagt.
          </p>
          ${renderMerkboxGrid([
            {
              icon:  'fas fa-tag',
              title: 'Assertive',
              text:  'Behauptende Sprechakte: Der Sprecher beschreibt einen Sachverhalt als wahr oder nimmt eine Position ein.',
            },
            {
              icon:  'fas fa-hand-point-right',
              title: 'Direktive',
              text:  'Auffordernde Sprechakte: Der Sprecher will den Hörer zu einer Handlung veranlassen.',
            },
            {
              icon:  'fas fa-handshake',
              title: 'Kommissive',
              text:  'Verpflichtende Sprechakte: Der Sprecher verpflichtet sich zu einer zukünftigen Handlung.',
            },
            {
              icon:  'fas fa-heart',
              title: 'Expressive',
              text:  'Gefühlsausdrückende Sprechakte: Der Sprecher bringt Emotionen und Einstellungen zum Ausdruck.',
            },
            {
              icon:  'fas fa-gavel',
              title: 'Deklarative',
              text:  'Zustandschaffende Sprechakte: Das Aussprechen verändert die Wirklichkeit unmittelbar.',
            },
          ])}
          ${renderInfobox({
            type:  'tip',
            icon:  'fas fa-graduation-cap',
            title: 'Wichtig in der Textanalyse',
            body:  'Wenn du analysierst, welche performativen Verben ein Autor verwendet, '
                 + 'erkennst du seine <strong>Argumentationsstrategie</strong>: Behauptet er? '
                 + 'Fordert er? Wertet er? Dies zeigt die Absicht hinter der Formulierung.',
          })}
        </div>
      </section>

      <!-- ══ ASSERTIVE VOLLSTÄNDIG ══ -->
      <section class="lz-content-section">
        <div class="lz-section-wrap">
          ${renderSubhead('Assertive')}
          <h2 class="lz-h2 reveal">Assertive — Behaupten & Feststellen</h2>
          <p class="lz-prose reveal">
            Assertive sind Sprechakte, mit denen der Sprecher einen Sachverhalt als
            wahr behauptet, feststellt oder beschreibt.
          </p>
          ${renderTable({
            headers: ['Verb', 'Verwendungskontext', 'Beispielsatz (DE)', 'Übersetzung (EN)'],
            rows: [
              ['<strong>argumentieren</strong>',   'Begründete Aussagen vorbringen',          'Er argumentiert, dass eine Reform notwendig sei.',          'He argues that a reform is necessary.'],
              ['<strong>attestieren</strong>',     'Bescheinigen, zusprechen',                'Man muss ihr große Kompetenz attestieren.',                 'One must attest to her great competence.'],
              ['<strong>behaupten</strong>',       'These aufstellen ohne Beweis',            'Der Autor behauptet, Klimawandel sei menschengemacht.',     'The author claims that climate change is man-made.'],
              ['<strong>beteuern</strong>',        'Nachdrücklich versichern',                'Er beteuert seine Unschuld.',                              'He asserts his innocence.'],
              ['<strong>darlegen</strong>',        'Ausführlich erklären und begründen',      'Die Autorin legt ihre Position differenziert dar.',         'The author explains her position in detail.'],
              ['<strong>diagnostizieren</strong>', 'Eine Diagnose stellen, ermitteln',        'Der Soziologe diagnostiziert eine gesellschaftliche Krise.','The sociologist diagnoses a social crisis.'],
              ['<strong>feststellen</strong>',     'Etwas als Tatsache konstatieren',         'Die Studie stellt fest, dass die Hypothese bestätigt wurde.','The study establishes that the hypothesis was confirmed.'],
              ['<strong>inferieren</strong>',      'Schlussfolgern, ableiten',                'Aus den Daten lässt sich inferieren, dass …',               'From the data one can infer that …'],
              ['<strong>konstatieren</strong>',    'Förmlich feststellen',                    'Der Bericht konstatiert erhebliche Mängel im System.',      'The report notes significant deficiencies.'],
              ['<strong>plädieren</strong>',       'Sich für etwas einsetzen, verteidigen',   'Der Anwalt plädiert auf Freispruch.',                       'The lawyer pleads for acquittal.'],
              ['<strong>postulieren</strong>',     'Als notwendig fordern/behaupten',         'Kant postuliert die Existenz des kategorischen Imperativs.','Kant postulates the categorical imperative.'],
              ['<strong>verkünden</strong>',       'Öffentlich bekanntmachen',                'Der Minister verkündet neue Maßnahmen.',                    'The minister announces new measures.'],
            ],
          })}
        </div>
      </section>

      <!-- ══ NUANCEN ══ -->
      <section class="lz-content-section">
        <div class="lz-section-wrap">
          ${renderSubhead('Feinheiten')}
          <h2 class="lz-h2 reveal">Nuancen erkennen & gezielt einsetzen</h2>
          ${renderAccordion([
            {
              title:   '📊 Graduelle Gewissheit: Behaupten vs. Feststellen vs. Konstatieren',
              content: `<ul style="line-height:1.9; margin-left:1.2rem;">
                          <li><strong>behaupten:</strong> Aufstellen ohne Beweis — signalisiert mögliche Angreifbarkeit</li>
                          <li><strong>feststellen:</strong> Als Tatsache präsentieren — stärker, impliziert Evidenz</li>
                          <li><strong>konstatieren:</strong> Formal, distanziert feststellen — hohe Objektivität</li>
                          <li><strong>postulieren:</strong> Als logisch notwendig oder axiomatisch behaupten</li>
                          <li><strong>inferieren:</strong> Aus Daten ableiten — betont den Schlussfolgerungsprozess</li>
                        </ul>`,
            },
            {
              title:   '🎯 Einsatz in der Textanalyse',
              content: `<p style="line-height:1.8; margin-bottom:0.8rem;">
                          Statt: <em>„Der Autor sagt, dass …"</em> oder <em>„Der Autor schreibt, dass …"</em>
                        </p>
                        <p style="line-height:1.8;">
                          Besser — je nach Kontext:
                        </p>
                        <ul style="line-height:1.9; margin-left:1.2rem; margin-top:0.5rem;">
                          <li>„Der Autor <strong>konstatiert</strong>, dass die Gesellschaft versagt hat" (neutral-feststellend)</li>
                          <li>„Er <strong>behauptet</strong>, ohne ausreichende Belege …" (kritisch-wertend)</li>
                          <li>„Die Autorin <strong>plädiert</strong> für eine grundlegende Reform" (appellativer Kontext)</li>
                          <li>„Er <strong>diagnostiziert</strong> eine tiefe Krise" (analytisch-medizinische Metapher)</li>
                        </ul>`,
            },
          ])}
        </div>
      </section>

      <!-- ══════════════ PAGE NAVIGATION BOTTOM ══════════════ -->
      <section class="lz-content-section" style="padding:1.5rem 0 3rem;">
        <div class="lz-section-wrap">
          ${renderPageNav({
            prev: { label: '6.1 Akademische Hochsprache (C1/C2)', link: `${BASE}/themen/akademisch/hochsprache` },
            next: { label: '6.3 Direktive · Kommissive · Expressive', link: `${BASE}/themen/akademisch/direktive` },
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