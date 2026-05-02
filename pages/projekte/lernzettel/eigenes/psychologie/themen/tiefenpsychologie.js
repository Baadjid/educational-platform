// pages/projekte/lernzettel/eigenes/psychologie/themen/tiefenpsychologie.js
// Thema: Tiefenpsychologie & Psychoanalyse
// Editorial-Artikel mit 4 inhaltlichen Sektionen

import { initScrollReveal } from '../../../../../../shared/js/index.js';
import { footerHTML } from '../../../../../../components/Footer.js';

const BASE_ROUTE = '/projekte/lernzettel/eigenes/psychologie';

// Verwandte Artikel für den Footer
const RELATED = [
  {
    slug: 'behaviorismus',
    cat:  'schulen',
    hook: 'Bist du frei — oder nur gut konditioniert?',
    sub:  'Behaviorismus · 10 min',
  },
  {
    slug: 'kognitivismus',
    cat:  'schulen',
    hook: 'Nicht die Dinge verletzen uns. Was wir darüber denken.',
    sub:  'Kognitivismus · 11 min',
  },
  {
    slug: 'neurowissenschaft',
    cat:  'gehirn',
    hook: 'Dein Gehirn erfindet die Realität. Täglich.',
    sub:  'Neurowissenschaft · 13 min',
  },
];

export default class TiefenpsychologiePage {
  constructor(router) {
    this.router = router;
    this._onBackClick    = this._onBackClick.bind(this);
    this._onRelatedClick = this._onRelatedClick.bind(this);
  }

  // ── Render ─────────────────────────────────────────────────────

  render() {
    const el = document.createElement('div');
    el.className = 'page page-psy-thema';
    el.dataset.cat = 'schulen'; // sets --thema-accent via CSS

    if (!document.querySelector('link[href*="psychologie.css"]')) {
      const link = document.createElement('link');
      link.rel  = 'stylesheet';
      link.href = 'pages/projekte/lernzettel/eigenes/psychologie/styles/psychologie.css';
      document.head.appendChild(link);
    }

    el.innerHTML = this._getHTML();
    return el;
  }

  // ── HTML ───────────────────────────────────────────────────────

  _getHTML() {
    return `
      <!-- BACK NAVIGATION ────────────────────────────── -->
      <nav class="psy-back-nav" aria-label="Breadcrumb">
        <button class="psy-back-btn" data-action="back">
          <i class="fas fa-arrow-left" aria-hidden="true"></i>
          Übersicht
        </button>
        <span class="psy-breadcrumb-sep" aria-hidden="true">/</span>
        <span class="psy-breadcrumb-current">Tiefenpsychologie</span>
      </nav>

      <!-- ARTIKEL HERO ───────────────────────────────── -->
      <header class="psy-thema-hero reveal">
        <span class="psy-thema-cat-tag">Klassische Schulen</span>
        <h1 class="psy-thema-question">
          Du bist nicht Herr in deinem eigenen Haus.
        </h1>
        <p class="psy-thema-context">
          Sigmund Freud &nbsp;·&nbsp; Carl Gustav Jung &nbsp;·&nbsp; Tiefenpsychologie
        </p>
        <p class="psy-thema-lead">
          Freud nannte es die dritte große Kränkung der Menschheit: Nach Kopernikus
          (die Erde ist kein Mittelpunkt) und Darwin (der Mensch ist kein Sonderwesen)
          folgte die psychologische Kränkung — der Mensch ist nicht einmal Herr seines
          eigenen Bewusstseins. Was dahinter steckt, und warum es dich täglich beeinflusst.
        </p>
        <div class="psy-thema-meta">
          <span class="psy-thema-meta-item"><i class="fas fa-clock"></i> 12 Minuten</span>
          <span class="psy-thema-meta-item"><i class="fas fa-signal"></i> Grundlagen</span>
          <span class="psy-thema-meta-item"><i class="fas fa-tag"></i> Klassische Schulen</span>
        </div>
      </header>

      <!-- ARTIKEL BODY ────────────────────────────────── -->
      <main class="psy-thema-body">

        <!-- SEKTION 1 ─────────────────────────────────── -->
        <section class="psy-section reveal">
          <div class="psy-section-head">
            <span class="psy-section-num" aria-hidden="true">01</span>
            <div>
              <h2 class="psy-section-title">
                <span>Die Revolution</span>
                Die Kränkung des Ichs
              </h2>
            </div>
          </div>

          <div class="psy-section-grid">
            <div class="psy-prose psy-prose--dropcap">
              <p>
                Das Unbewusste war keine Erfindung Freuds — Schopenhauer sprach vor ihm
                vom Willen, Nietzsche von triebgesteuerten Kräften. Aber Freud machte das
                Unbewusste zum Zentrum einer wissenschaftlichen Theorie und einer Therapieform.
                Sein Anspruch war kühn: Das Erleben und Verhalten des Menschen werden zu einem
                erheblichen Teil durch Prozesse gesteuert, auf die er keinen bewussten Zugriff hat.
              </p>
              <p>
                Das Bewusste — alles, was wir gerade wahrnehmen und denken können — ist dabei
                nur die Spitze des Eisbergs. Darunter liegt das Vorbewusste: Inhalte, die momentan
                nicht bewusst sind, aber jederzeit abgerufen werden können (eine Erinnerung, ein
                vergessener Name). Ganz unten, jeder direkten Beobachtung entzogen, liegt das
                <strong>Unbewusste</strong>: verdrängte Wünsche, traumatische Erinnerungen,
                primitive Impulse. Aktiv, permanent, ohne dein Zutun.
              </p>

              <div class="psy-pull-quote">
                <p>„Bis du das Unbewusste bewusst machst, wird es dein Leben lenken —
                   und du wirst es Schicksal nennen."</p>
                <cite>— Carl Gustav Jung</cite>
              </div>

              <p>
                Das Verstörende: Das Unbewusste kommuniziert — durch Träume, Versprecher,
                körperliche Symptome, irrationale Reaktionen. Psychoanalytiker nennen das
                den <strong>Wiederkehr des Verdrängten</strong>. Was wir nicht integrieren wollen,
                verschwindet nicht. Es sucht sich einen anderen Weg.
              </p>

              <div class="psy-theory-badges">
                <span class="psy-theory-badge">Topographisches Modell</span>
                <span class="psy-theory-badge">Verdrängung</span>
                <span class="psy-theory-badge">Bewusstes / Vorbewusstes / Unbewusstes</span>
              </div>
            </div>

            <aside class="psy-mini-cards" aria-label="Schlüsselkonzepte">
              <div class="psy-mini-card">
                <div class="psy-mini-card-label">Konzept</div>
                <div class="psy-mini-card-title">Das topographische Modell</div>
                <div class="psy-mini-card-text">
                  Freuds erste Theorie: Bewusstes, Vorbewusstes und Unbewusstes als
                  drei Schichten psychischen Erlebens — mit der Zensur als Türsteher zwischen ihnen.
                </div>
              </div>
              <div class="psy-mini-card">
                <div class="psy-mini-card-label">Mechanismus</div>
                <div class="psy-mini-card-title">Verdrängung</div>
                <div class="psy-mini-card-text">
                  Unerträgliche Inhalte werden ins Unbewusste verbannt — aber nicht vernichtet.
                  Sie üben weiterhin Einfluss aus, oft in Form von Symptomen.
                </div>
              </div>
              <div class="psy-mini-card">
                <div class="psy-mini-card-label">Methode</div>
                <div class="psy-mini-card-title">Freie Assoziation</div>
                <div class="psy-mini-card-text">
                  Freuds wichtigste therapeutische Technik: alles sagen, was in den Sinn kommt,
                  ohne Zensur. Über Umwege kommt so das Verdrängte ans Licht.
                </div>
              </div>
            </aside>
          </div>
        </section>

        <!-- SEKTION 2 ─────────────────────────────────── -->
        <section class="psy-section reveal">
          <div class="psy-section-head">
            <span class="psy-section-num" aria-hidden="true">02</span>
            <div>
              <h2 class="psy-section-title">
                <span>Das Strukturmodell</span>
                Es, Ich und Über-Ich
              </h2>
            </div>
          </div>

          <div class="psy-section-grid">
            <div class="psy-prose">
              <p>
                Später entwickelte Freud ein zweites Modell — nicht mehr nach Bewusstseinsstufen,
                sondern nach Instanzen mit eigenen Logiken und Zielen. Drei Kräfte kämpfen in jedem
                Menschen permanent miteinander:
              </p>
              <p>
                Das <strong>Es</strong> ist die älteste, primitivste Instanz. Es kennt keine Zeit,
                keine Moral, keine Vernunft. Es will, was es will — sofort und vollständig. Hunger,
                Lust, Aggression: Das Es folgt dem Lustprinzip.
              </p>
              <p>
                Das <strong>Über-Ich</strong> ist das Gegenteil: die internalisierte Moral von Eltern,
                Erziehung, Gesellschaft. Es urteilt, verbietet, bestraft mit Schuldgefühlen. Ein
                übermäßig strenges Über-Ich kann ebenso pathologisch sein wie ein zu schwaches.
              </p>
              <p>
                Das <strong>Ich</strong> ist der Vermittler. Es folgt dem Realitätsprinzip und
                versucht, die Ansprüche des Es mit den Verboten des Über-Ichs und der äußeren
                Realität in Einklang zu bringen. Ein starkes, flexibles Ich ist das Zeichen
                psychischer Gesundheit.
              </p>

              <div class="psy-highlight">
                <strong>Klinische Relevanz</strong>
                <p>
                  Viele psychische Störungen lassen sich als Konflikte zwischen diesen drei Instanzen
                  verstehen. Wenn das Ich chronisch überwältigt wird — vom Es, vom Über-Ich oder von
                  der Realität — entstehen Symptome als Kompromisslösung.
                </p>
              </div>

              <div class="psy-theory-badges">
                <span class="psy-theory-badge">Strukturmodell</span>
                <span class="psy-theory-badge">Lustprinzip / Realitätsprinzip</span>
                <span class="psy-theory-badge">Intrapsychischer Konflikt</span>
              </div>
            </div>

            <aside class="psy-mini-cards">
              <div class="psy-mini-card">
                <div class="psy-mini-card-label">Instanz</div>
                <div class="psy-mini-card-title">Das Es</div>
                <div class="psy-mini-card-text">
                  Primitivste Instanz, völlig unbewusst. Folgt dem Lustprinzip.
                  Will sofortige Bedürfnisbefriedigung — kennt weder Zeit noch Moral.
                </div>
              </div>
              <div class="psy-mini-card">
                <div class="psy-mini-card-label">Instanz</div>
                <div class="psy-mini-card-title">Das Über-Ich</div>
                <div class="psy-mini-card-text">
                  Internalisierte Moral aus Erziehung und Sozialisation. Erzeugt bei
                  Normverletzung Schuldgefühle und Selbstkritik.
                </div>
              </div>
              <div class="psy-mini-card">
                <div class="psy-mini-card-label">Instanz</div>
                <div class="psy-mini-card-title">Das Ich</div>
                <div class="psy-mini-card-text">
                  Vermittler zwischen Es, Über-Ich und Realität. Teilweise bewusst.
                  Nutzt Abwehrmechanismen, um psychisches Gleichgewicht zu wahren.
                </div>
              </div>
            </aside>
          </div>
        </section>

        <!-- SEKTION 3 ─────────────────────────────────── -->
        <section class="psy-section reveal">
          <div class="psy-section-head">
            <span class="psy-section-num" aria-hidden="true">03</span>
            <div>
              <h2 class="psy-section-title">
                <span>Die Strategien des Ichs</span>
                Abwehrmechanismen
              </h2>
            </div>
          </div>

          <div class="psy-prose" style="margin-bottom: 1.5rem;">
            <p>
              Das Ich entwickelt verschiedene Strategien, um mit bedrohlichen Impulsen und
              Ängsten umzugehen — die Abwehrmechanismen. Sie sind größtenteils unbewusst
              und dienen dem psychischen Gleichgewicht. Problematisch werden sie erst,
              wenn sie rigide und dauerhaft sind.
            </p>
          </div>

          <div class="psy-table-wrap">
            <table class="psy-table" aria-label="Abwehrmechanismen Übersicht">
              <thead>
                <tr>
                  <th>Mechanismus</th>
                  <th>Beschreibung</th>
                  <th>Beispiel im Alltag</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Verdrängung</strong></td>
                  <td>Unerträgliche Gedanken werden ins Unbewusste verbannt.</td>
                  <td>Traumatisches Erlebnis "vergessen", das trotzdem Albträume verursacht.</td>
                </tr>
                <tr>
                  <td><strong>Projektion</strong></td>
                  <td>Eigene unakzeptable Impulse werden anderen zugeschrieben.</td>
                  <td>„Mein Kollege ist neidisch auf mich" — während man selbst neidisch ist.</td>
                </tr>
                <tr>
                  <td><strong>Rationalisierung</strong></td>
                  <td>Vernünftige Nachbeurteilung irrationalen Verhaltens.</td>
                  <td>„Ich wollte diesen Job sowieso nicht" nach einer Absage.</td>
                </tr>
                <tr>
                  <td><strong>Sublimierung</strong></td>
                  <td>Unakzeptable Impulse werden in sozial akzeptable Aktivitäten umgewandelt.</td>
                  <td>Aggressive Energie wird in Sport oder Kunst kanalisiert.</td>
                </tr>
                <tr>
                  <td><strong>Reaktionsbildung</strong></td>
                  <td>Das Gegenteil des wahren Gefühls wird übertrieben dargestellt.</td>
                  <td>Übermäßige Freundlichkeit gegenüber jemandem, den man eigentlich ablehnt.</td>
                </tr>
                <tr>
                  <td><strong>Verschiebung</strong></td>
                  <td>Gefühle werden auf ein anderes, "sichereres" Ziel umgelenkt.</td>
                  <td>Wut auf den Chef wird am Partner ausgelassen.</td>
                </tr>
                <tr>
                  <td><strong>Regression</strong></td>
                  <td>Rückfall in frühere Entwicklungsstufen bei Überforderung.</td>
                  <td>Erwachsener reagiert auf Stress mit kindlichem Trotzverhalten.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="psy-highlight" style="margin-top: 1.5rem;">
            <strong>Reife vs. unreife Abwehr</strong>
            <p>
              Nicht alle Abwehrmechanismen sind pathologisch. Sublimierung, Humor und Altruismus
              gelten als reife Abwehrmechanismen — Zeichen psychischer Gesundheit. Problematisch
              sind starre, inflexible Mechanismen, die eine authentische Auseinandersetzung mit
              der Realität dauerhaft verhindern.
            </p>
          </div>
        </section>

        <!-- SEKTION 4 ─────────────────────────────────── -->
        <section class="psy-section reveal">
          <div class="psy-section-head">
            <span class="psy-section-num" aria-hidden="true">04</span>
            <div>
              <h2 class="psy-section-title">
                <span>Carl Gustav Jung</span>
                Kollektives Unbewusstes & Individuation
              </h2>
            </div>
          </div>

          <div class="psy-section-grid">
            <div class="psy-prose">
              <p>
                Jung, zunächst Freuds engster Schüler, entwickelte eine eigene tiefenpsychologische
                Richtung. Seine wichtigste Erweiterung: Er unterschied das <strong>persönliche
                Unbewusste</strong> (individuelle, verdrängte Inhalte — ähnlich Freud) vom
                <strong>kollektiven Unbewussten</strong>: einem Schicht tiefer, geteilt von allen
                Menschen, gefüllt mit archetypischen Mustern.
              </p>
              <p>
                <strong>Archetypen</strong> sind universelle, angeborene psychische Strukturen —
                wie Organe des Geistes. Der Schatten (die dunkle Seite der Persönlichkeit),
                die Anima/Animus (gegengeschlechtliche Anteile), der Held, die Mutter, der Weise —
                sie tauchen in den Mythen aller Kulturen auf, weil sie Teil der menschlichen
                Grundausstattung sind.
              </p>
              <p>
                Das Ziel jungscher Therapie ist <strong>Individuation</strong>: die Integration
                aller psychischen Anteile — besonders des Schattens — zu einem ganzheitlicheren
                Selbst. Das klingt abstrakt, hat aber eine sehr konkrete Faustregel: Was dich
                an anderen Menschen besonders stört oder fasziniert, ist oft eine Projektion
                deines eigenen Schattens.
              </p>

              <div class="psy-pull-quote">
                <p>„Wer nach außen schaut, träumt. Wer nach innen schaut, erwacht."</p>
                <cite>— Carl Gustav Jung</cite>
              </div>

              <div class="psy-theory-badges">
                <span class="psy-theory-badge">Kollektives Unbewusstes</span>
                <span class="psy-theory-badge">Archetypen</span>
                <span class="psy-theory-badge">Schatten</span>
                <span class="psy-theory-badge">Individuation</span>
                <span class="psy-theory-badge">Anima / Animus</span>
              </div>
            </div>

            <aside class="psy-mini-cards">
              <div class="psy-mini-card">
                <div class="psy-mini-card-label">Konzept</div>
                <div class="psy-mini-card-title">Der Schatten</div>
                <div class="psy-mini-card-text">
                  Alles, was wir an uns selbst nicht wahrhaben wollen — nicht nur Negatives,
                  sondern auch unterdrückte Potentiale. Er äußert sich in starken Reaktionen
                  auf andere Menschen.
                </div>
              </div>
              <div class="psy-mini-card">
                <div class="psy-mini-card-label">Konzept</div>
                <div class="psy-mini-card-title">Synchronizität</div>
                <div class="psy-mini-card-text">
                  Jungs Begriff für bedeutungsvolle Zufälle — Ereignisse ohne Kausalzusammenhang,
                  die dennoch sinnhaft erscheinen. Umstritten, aber einflussreich.
                </div>
              </div>
              <div class="psy-mini-card">
                <div class="psy-mini-card-label">Persönlichkeit</div>
                <div class="psy-mini-card-title">Introversion / Extraversion</div>
                <div class="psy-mini-card-text">
                  Jung prägte diese Begriffe. Introvertierte richten Energie nach innen,
                  Extravertierte nach außen. Die meisten Menschen sind eine Mischung.
                </div>
              </div>
            </aside>
          </div>
        </section>

      </main>

      <!-- VERWANDTE ARTIKEL ───────────────────────────── -->
      <section class="psy-related reveal" aria-label="Verwandte Artikel">
        <h2 class="psy-related-title">Weiter lesen</h2>
        <div class="psy-related-grid">
          ${RELATED.map(r => `
            <article class="psy-card" data-cat="${r.cat}"
                     data-route="${BASE_ROUTE}/themen/${r.slug}"
                     role="button" tabindex="0" aria-label="${r.hook}">
              <div class="psy-card-top">
                <span class="psy-card-tag">${r.sub}</span>
              </div>
              <h3 class="psy-card-hook">${r.hook}</h3>
              <div class="psy-card-footer">
                <span></span>
                <span class="psy-card-arrow" aria-hidden="true">→</span>
              </div>
            </article>
          `).join('')}
        </div>
      </section>

      ${footerHTML(this.router, {})}
    `;
  }

  // ── Init ───────────────────────────────────────────────────────

  init() {
    initScrollReveal();

    // Back-Button
    const backBtn = document.querySelector('.psy-back-btn[data-action="back"]');
    if (backBtn) backBtn.addEventListener('click', this._onBackClick);

    // Related article cards
    document.querySelectorAll('.psy-related .psy-card[data-route]').forEach(card => {
      card.addEventListener('click',   this._onRelatedClick);
      card.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); card.click(); }
      });
    });
  }

  cleanup() {
    const backBtn = document.querySelector('.psy-back-btn[data-action="back"]');
    if (backBtn) backBtn.removeEventListener('click', this._onBackClick);

    document.querySelectorAll('.psy-related .psy-card[data-route]').forEach(card => {
      card.removeEventListener('click', this._onRelatedClick);
    });
  }

  _onBackClick() {
    this.router.push('/projekte/lernzettel/eigenes/psychologie');
  }

  _onRelatedClick(e) {
    const route = e.currentTarget.dataset.route;
    if (route) this.router.push(route);
  }
}