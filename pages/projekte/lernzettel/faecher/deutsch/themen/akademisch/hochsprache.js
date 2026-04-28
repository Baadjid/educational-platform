// pages/projekte/lernzettel/faecher/deutsch/themen/akademisch/hochsprache.js
// Deutsch 6.1 — Akademische Hochsprache (C1 / C2)

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



export default class DeutschHochsprachePage {
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
            <span>6.1 · Akademische Hochsprache</span>
          </nav>
          <h1 class="lz-sub-title">Akademische<br><em>Hochsprache.</em></h1>
          <p class="lz-sub-desc">C1 / C2-Vokabular · Argumentation · Wissenschaft · Philosophie · Gesellschaft · Literatur</p>
          ${renderTags(['Kapitel 6.1', 'C1 / C2', 'Abitur 2026'])}
        </div>
      </section>

      <!-- ══ EINFÜHRUNG ══ -->
      <section class="lz-content-section">
        <div class="lz-section-wrap">
          ${renderSubhead('Überblick')}
          <h2 class="lz-h2 reveal">Was ist akademische Hochsprache?</h2>
          <p class="lz-prose reveal">
            Akademische Hochsprache umfasst ein gehobenes Vokabular für wissenschaftliche Diskurse,
            Fachpublikationen und anspruchsvolle Texte. Gezielt eingesetzt demonstriert es im
            Abituraufsatz sprachliche Kompetenz — aber: <strong>Präzision geht vor Komplexität.</strong>
          </p>
          ${renderInfobox({
            type:  'tip',
            icon:  'fas fa-lightbulb',
            title: 'Dos & Don\'ts',
            body:  `<ul style="line-height:1.9; margin-left:1.2rem;">
                      <li>✅ Gehobenes Vokabular <strong>gezielt</strong> einsetzen, nicht inflationär</li>
                      <li>✅ Nur Begriffe verwenden, deren Bedeutung du sicher kennst</li>
                      <li>✅ Begriffe natürlich in die Argumentation einbauen</li>
                      <li>❌ Nie Klarheit für Komplexität opfern</li>
                      <li>❌ Akademische Begriffe in Alltagstexten fehl am Platz</li>
                    </ul>`,
          })}
        </div>
      </section>

      <!-- ══ ARGUMENTATION & RHETORIK ══ -->
      <section class="lz-content-section">
        <div class="lz-section-wrap">
          ${renderSubhead('Argumentation & Rhetorik')}
          <h2 class="lz-h2 reveal">Begriffe für Argumentation & Rhetorik</h2>
          ${renderTable({
            headers: ['Begriff', 'Niveau', 'Bedeutung', 'Beispielsatz'],
            rows: [
              ['<strong>apodiktisch</strong>',       'C2', 'Unwiderlegbar, keinen Widerspruch duldend',                    'Seine apodiktischen Aussagen ließen keinen Interpretationsspielraum.'],
              ['<strong>axiomatisch</strong>',        'C2', 'Als Grundsatz geltend, keines Beweises bedürfend',             'Die axiomatische Annahme bildete das Fundament der Theorie.'],
              ['<strong>dialektisch</strong>',        'C2', 'Auf These, Antithese, Synthese beruhend',                      'Die dialektische Methode führt durch Widerspruch zur Erkenntnis.'],
              ['<strong>dichotomisch</strong>',       'C1', 'Zweiteilung in zwei gegensätzliche Bereiche',                  'Die Dichotomie von Theorie und Praxis wurde im Text aufgelöst.'],
              ['<strong>eloquent</strong>',           'C1', 'Redegewandt, sprachlich ausdrucksstark',                       'Der eloquente Vortrag fesselte das Auditorium.'],
              ['<strong>kohärent</strong>',           'C1', 'Zusammenhängend, in sich schlüssig, widerspruchsfrei',          'Die Argumentation ist kohärent und überzeugend aufgebaut.'],
              ['<strong>kontradiktorisch</strong>',   'C2', 'Sich gegenseitig ausschließend, widersprüchlich',              'Beide Hypothesen waren kontradiktorisch — nur eine kann gelten.'],
              ['<strong>persuasiv</strong>',          'C2', 'Überzeugend, überredend wirkend',                              'Die persuasive Kraft seiner Rede war bemerkenswert.'],
              ['<strong>plausibel</strong>',          'C1', 'Einleuchtend, glaubhaft, nachvollziehbar',                     'Die Erklärung erscheint plausibel, bedarf aber empirischer Prüfung.'],
              ['<strong>prämisse</strong>',           'C1', 'Grundannahme, Voraussetzung einer Argumentation',              'Die Prämisse seiner Argumentation war nicht haltbar.'],
              ['<strong>redundant</strong>',          'C1', 'Überflüssig, sich wiederholend',                               'Die redundanten Ausführungen verlängerten den Text unnötig.'],
              ['<strong>stringent</strong>',          'C1', 'Streng logisch, zwingend, konsequent',                         'Die stringente Argumentation ließ keine logischen Lücken.'],
              ['<strong>sophistisch</strong>',        'C2', 'Scheinbar logisch, aber irreführend argumentierend',           'Seine sophistischen Winkelzüge konnten das Kernproblem nicht verschleiern.'],
              ['<strong>syllogistisch</strong>',      'C2', 'Nach dem Prinzip des Syllogismus (Schluss aus Prämissen)',      'Das syllogistische Argument lässt sich formal beweisen.'],
              ['<strong>tautologisch</strong>',       'C2', 'Unnötige Wiederholung desselben Sachverhalts',                 '„Weißer Schimmel" ist eine klassische Tautologie.'],
            ],
          })}
        </div>
      </section>

      <!-- ══ WISSENSCHAFTLICHE METHODIK ══ -->
      <section class="lz-content-section">
        <div class="lz-section-wrap">
          ${renderSubhead('Wissenschaft')}
          <h2 class="lz-h2 reveal">Begriffe für wissenschaftliche Methodik</h2>
          ${renderTable({
            headers: ['Begriff', 'Niveau', 'Bedeutung', 'Beispielsatz'],
            rows: [
              ['<strong>analytisch</strong>',      'C1', 'Zerlegend, methodisch prüfend',                        'Die analytische Herangehensweise ermöglichte tiefe Einsichten.'],
              ['<strong>deskriptiv</strong>',       'C1', 'Beschreibend, nicht wertend',                         'Die deskriptive Statistik fasst die Daten zusammen.'],
              ['<strong>deduktiv</strong>',         'C1', 'Vom Allgemeinen zum Besonderen schließend',            'Das deduktive Vorgehen erlaubte präzise Vorhersagen.'],
              ['<strong>empirisch</strong>',        'C1', 'Auf Erfahrung und Beobachtung beruhend',              'Die empirische Forschung bestätigte die theoretischen Annahmen.'],
              ['<strong>epistemologisch</strong>',  'C2', 'Die Erkenntnistheorie betreffend',                    'Die epistemologischen Implikationen sind weitreichend.'],
              ['<strong>falsifizieren</strong>',    'C1', 'Die Unrichtigkeit nachweisen, widerlegen',            'Poppers Wissenschaftstheorie betont Falsifizierbarkeit.'],
              ['<strong>heuristisch</strong>',      'C1', 'Auf Entdeckung ausgerichtet, problemlösend',          'Die heuristische Methode führte zu unerwarteten Erkenntnissen.'],
              ['<strong>hypothetisch</strong>',     'C1', 'Auf einer Annahme beruhend, noch zu beweisen',        'Die hypothetische Erklärung bedarf weiterer Überprüfung.'],
              ['<strong>induktiv</strong>',         'C1', 'Vom Besonderen zum Allgemeinen schließend',           'Die induktive Methode basiert auf empirischen Einzelfällen.'],
              ['<strong>kausal</strong>',           'C1', 'Ursächlich, auf Ursache-Wirkungs-Beziehungen',        'Die kausale Verknüpfung wurde nachgewiesen.'],
              ['<strong>normativ</strong>',         'C1', 'Vorschreibend, Normen setzend, wertend',              'Die normative Ethik befasst sich mit Sollens-Aussagen.'],
              ['<strong>operationalisieren</strong>','C2','Abstrakte Begriffe messbar machen',                   'Der Begriff „Lebensqualität" muss operationalisiert werden.'],
              ['<strong>paradigmatisch</strong>',   'C2', 'Mustergültig, beispielhaft für ein Weltbild',         'Die Entdeckung markierte einen paradigmatischen Wandel.'],
              ['<strong>synthetisch</strong>',      'C1', 'Zusammensetzend, verbindend',                         'Die synthetische Methode führte verschiedene Theorien zusammen.'],
              ['<strong>verifizieren</strong>',     'C1', 'Die Richtigkeit nachweisen, bestätigen',              'Die Hypothese konnte durch mehrere Studien verifiziert werden.'],
            ],
          })}
        </div>
      </section>

      <!-- ══ PHILOSOPHIE & GESELLSCHAFT ══ -->
      <section class="lz-content-section">
        <div class="lz-section-wrap">
          ${renderSubhead('Philosophie & Gesellschaft')}
          <h2 class="lz-h2 reveal">Begriffe für Philosophie & Gesellschaft</h2>
          ${renderAccordion([
            {
              title:   '🧠 Philosophie & Ontologie',
              content: renderTable({
                headers: ['Begriff', 'Niv.', 'Bedeutung'],
                rows: [
                  ['<strong>a priori</strong>',        'C2', 'Von vornherein, unabhängig von Erfahrung gültig (Kant)'],
                  ['<strong>a posteriori</strong>',    'C2', 'Aus Erfahrung gewonnen, empirisch'],
                  ['<strong>determinismus</strong>',   'C1', 'Lehre der vollständigen Vorherbestimmtheit allen Geschehens'],
                  ['<strong>dualistisch</strong>',     'C2', 'Auf Zweiheitslehre beruhend (Körper-Geist-Trennung)'],
                  ['<strong>immanent</strong>',        'C2', 'Innewohnend, der Sache selbst zugehörig'],
                  ['<strong>kontingent</strong>',      'C2', 'Möglich, aber nicht notwendig; zufällig'],
                  ['<strong>metaphysisch</strong>',    'C2', 'Jenseits der Physik, das Übersinnliche betreffend'],
                  ['<strong>nihilismus</strong>',      'C2', 'Verneinung aller Werte und Sinngebungen'],
                  ['<strong>ontologisch</strong>',     'C2', 'Das Sein und die Existenz betreffend'],
                  ['<strong>teleologisch</strong>',    'C2', 'Zweckgerichtet, auf ein Endziel ausgerichtet'],
                  ['<strong>transzendent</strong>',    'C2', 'Über die Erfahrung hinausgehend, jenseitig'],
                ],
              }),
            },
            {
              title:   '👥 Gesellschaft & Soziologie',
              content: renderTable({
                headers: ['Begriff', 'Niv.', 'Bedeutung'],
                rows: [
                  ['<strong>distinktion</strong>',    'C2', 'Soziale Abgrenzung zur Wahrung von Distanz (Bourdieu)'],
                  ['<strong>egalitär</strong>',       'C2', 'Auf Gleichheit ausgerichtet, gleichheitsorientiert'],
                  ['<strong>exklusion</strong>',      'C1', 'Ausschluss, gesellschaftliche Ausgrenzung'],
                  ['<strong>habitus</strong>',        'C2', 'Verinnerlichte Denk- und Verhaltensmuster (Bourdieu)'],
                  ['<strong>hegemonie</strong>',      'C2', 'Vorherrschaft, dominante kulturelle Stellung'],
                  ['<strong>heterogen</strong>',      'C1', 'Ungleichartig, aus verschiedenen Elementen zusammengesetzt'],
                  ['<strong>hierarchisch</strong>',   'C1', 'In Rangordnung gegliedert, gestuft'],
                  ['<strong>inklusion</strong>',      'C1', 'Einbeziehung, gleichberechtigte gesellschaftliche Teilhabe'],
                  ['<strong>marginal</strong>',       'C1', 'Am Rand stehend, unbedeutend, geringfügig'],
                  ['<strong>prekär</strong>',         'C1', 'Unsicher, schwierig, heikel (z.B. Arbeitsverhältnisse)'],
                  ['<strong>sozioökonomisch</strong>','C1', 'Gesellschaftliche und wirtschaftliche Faktoren betreffend'],
                ],
              }),
            },
            {
              title:   '📖 Textanalyse & Literaturwissenschaft',
              content: renderTable({
                headers: ['Begriff', 'Niv.', 'Bedeutung'],
                rows: [
                  ['<strong>ambiguität</strong>',      'C1', 'Mehrdeutigkeit, verschiedene Interpretationsmöglichkeiten'],
                  ['<strong>diskurs</strong>',          'C1', 'Übergeordnete gesellschaftliche Auseinandersetzung mit einem Thema'],
                  ['<strong>explizit</strong>',         'C1', 'Ausdrücklich, klar formuliert'],
                  ['<strong>implizit</strong>',         'C1', 'Mitgemeint, unausgesprochen, indirekt enthalten'],
                  ['<strong>intertextualität</strong>', 'C2', 'Bezüge zwischen verschiedenen Texten'],
                  ['<strong>konnotation</strong>',      'C1', 'Mitschwingende Nebenbedeutung eines Wortes'],
                  ['<strong>denotation</strong>',       'C1', 'Grundbedeutung, lexikalische Bedeutung'],
                  ['<strong>narrativ</strong>',         'C1', 'Erzählend; auch: sinnstiftendes Deutungsmuster'],
                  ['<strong>pragmatik</strong>',        'C2', 'Lehre vom Sprachgebrauch in Kontexten'],
                  ['<strong>rezeption</strong>',        'C1', 'Aufnahme und Verarbeitung eines Textes durch Leser'],
                  ['<strong>semantik</strong>',         'C1', 'Bedeutungslehre, Wissenschaft von der Bedeutung'],
                  ['<strong>topos</strong>',            'C2', 'Wiederkehrendes Motiv, feststehende Redefigur'],
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
            prev: { label: '5.6 Nachkrieg & Gegenwartsliteratur', link: `${BASE}/themen/epochen/nachkrieg-gegenwart` },
            next: { label: '6.2 Performative Verben — Assertive', link: `${BASE}/themen/akademisch/assertive` },
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