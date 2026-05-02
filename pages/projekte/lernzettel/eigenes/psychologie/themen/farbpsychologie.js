// pages/projekte/lernzettel/eigenes/psychologie/themen/farbpsychologie.js
// Thema: Farbpsychologie & Unbewusste Beeinflussung
// Editorial-Artikel mit 4 inhaltlichen Sektionen

import { initScrollReveal } from '../../../../../../shared/js/index.js';
import { footerHTML } from '../../../../../../components/Footer.js';

const BASE_ROUTE = '/projekte/lernzettel/eigenes/psychologie';

const RELATED = [
  {
    slug: 'prokrastination',
    cat:  'beeinflussung',
    hook: 'Du weißt, dass du solltest. Warum tust du es trotzdem nicht?',
    sub:  'Prokrastination · 11 min',
  },
  {
    slug: 'entscheidungen',
    cat:  'beeinflussung',
    hook: 'Glaubst du wirklich, du entscheidest frei?',
    sub:  'Entscheidungspsychologie · 10 min',
  },
  {
    slug: 'konformitaet',
    cat:  'sozial',
    hook: '65 % folgten dem Befehl. Wärst du dabei gewesen?',
    sub:  'Konformität · 13 min',
  },
];

export default class FarbpsychologiePage {
  constructor(router) {
    this.router = router;
    this._onBackClick    = this._onBackClick.bind(this);
    this._onRelatedClick = this._onRelatedClick.bind(this);
  }

  // ── Render ─────────────────────────────────────────────────────

  render() {
    const el = document.createElement('div');
    el.className = 'page page-psy-thema';
    el.dataset.cat = 'beeinflussung'; // --thema-accent → var(--psy-beeinflussung)

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
        <span class="psy-breadcrumb-current">Farbpsychologie</span>
      </nav>

      <!-- ARTIKEL HERO ───────────────────────────────── -->
      <header class="psy-thema-hero reveal">
        <span class="psy-thema-cat-tag">Unbewusste Beeinflussung</span>
        <h1 class="psy-thema-question">
          Die Welt manipuliert dich —<br>und du merkst es nicht.
        </h1>
        <p class="psy-thema-context">
          Farbpsychologie &nbsp;·&nbsp; Neuromarketing &nbsp;·&nbsp; Persuasionsforschung
        </p>
        <p class="psy-thema-lead">
          Rot erhöht deinen Herzschlag. Blau senkt deinen Blutdruck. Grün beruhigt
          dein Nervensystem. Fast Food-Ketten, Streaming-Plattformen, Casinos und
          politische Kampagnen wissen das — und setzen es täglich ein. Du hast nicht
          zugestimmt. Du merkst es nicht. Und trotzdem funktioniert es.
        </p>
        <div class="psy-thema-meta">
          <span class="psy-thema-meta-item"><i class="fas fa-clock"></i> 9 Minuten</span>
          <span class="psy-thema-meta-item"><i class="fas fa-signal"></i> Angewandt</span>
          <span class="psy-thema-meta-item"><i class="fas fa-tag"></i> Unbewusste Beeinflussung</span>
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
                <span>Neurobiologie</span>
                Farbe direkt in der Amygdala
              </h2>
            </div>
          </div>

          <div class="psy-section-grid">
            <div class="psy-prose psy-prose--dropcap">
              <p>
                Wenn du eine Farbe siehst, landet das Lichtsignal zuerst auf der Netzhaut.
                Von dort zieht der Reiz nicht nur in den visuellen Kortex — sondern direkt
                in die <strong>Amygdala</strong> und den <strong>Hypothalamus</strong>,
                also in jene evolutionär alten Strukturen, die für Emotionen, Stresssignale
                und Hormonsteuerung zuständig sind. Das geschieht schneller als jeder bewusste
                Gedanke.
              </p>
              <p>
                Rot etwa erhöht messbar Herzfrequenz und Kortisolausschüttung. Blau senkt
                den Blutdruck leicht. Das sind keine kulturellen Konstrukte, sondern
                physiologische Reaktionen — vermutlich evolutionäre Überreste: Rot gleich
                Blut, Feuer, Gefahr. Blau gleich Wasser, Weite, Stille. Das Gehirn reagiert
                auf diese Signale noch heute so, als ob du im Wald auf der Jagd wärst.
              </p>

              <div class="psy-pull-quote">
                <p>„Das Gehirn verarbeitet visuelle Reize 60.000-mal schneller als Text —
                   und Farbe ist der stärkste visuell-emotionale Trigger."</p>
                <cite>— Neuromarketing-Forschung, Xerox Institute</cite>
              </div>

              <p>
                Das erklärt, warum Farbwirkung so wirkmächtig ist: Sie umgeht die sprachliche
                Verarbeitung vollständig. Du kannst dir sagen, dass ein roter Rabatt-Aufkleber
                nur ein Aufkleber ist — dein limbisches System hat die Dringlichkeits-Reaktion
                bereits ausgelöst, bevor du diesen Gedanken zu Ende gedacht hast.
              </p>

              <div class="psy-theory-badges">
                <span class="psy-theory-badge">Amygdala</span>
                <span class="psy-theory-badge">Limbisches System</span>
                <span class="psy-theory-badge">Visuelle Verarbeitung</span>
                <span class="psy-theory-badge">Evolutionäre Psychologie</span>
              </div>
            </div>

            <aside class="psy-mini-cards">
              <div class="psy-mini-card">
                <div class="psy-mini-card-label">Fakt</div>
                <div class="psy-mini-card-title">11 Millionen vs. 40 Bits</div>
                <div class="psy-mini-card-text">
                  Das Gehirn verarbeitet 11 Millionen Bits sensorischer Information pro Sekunde.
                  Bewusst werden davon nur 40. Farbe wirkt auf den großen Rest.
                </div>
              </div>
              <div class="psy-mini-card">
                <div class="psy-mini-card-label">Mechanismus</div>
                <div class="psy-mini-card-title">Affektive Priming</div>
                <div class="psy-mini-card-text">
                  Farben bereiten das Gehirn auf bestimmte Interpretationen vor — noch bevor
                  der Inhalt verarbeitet wird. Ein Wort wirkt je nach Hintergrundfarbe anders.
                </div>
              </div>
              <div class="psy-mini-card">
                <div class="psy-mini-card-label">Studie</div>
                <div class="psy-mini-card-title">Baker-Miller Pink</div>
                <div class="psy-mini-card-text">
                  Zartes Rosa (Baker-Miller Pink) wurde in US-Gefängnissen getestet —
                  und senkte kurzfristig nachweislich Aggressionen. Heute umstritten,
                  aber einflussreich.
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
                <span>Universell vs. Kulturell</span>
                Was ist angeboren — was gelernt?
              </h2>
            </div>
          </div>

          <div class="psy-section-grid">
            <div class="psy-prose">
              <p>
                Die Farbwirkung operiert auf zwei Ebenen, die es zu trennen gilt. Die
                <strong>universelle Ebene</strong> ist stammesgeschichtlich verdrahtet und
                kulturübergreifend ähnlich: Warm-gelbe Töne aktivieren (Sonne, Wärme),
                dunkle Blau-Grau-Töne beruhigen (Nacht, Kühle), starkes Rot erhöht Erregung.
                Diese Grundreaktionen sind keine Meinung — sie sind Biologie.
              </p>
              <p>
                Darüber liegt die <strong>kulturell-erlernte Ebene</strong>: Weiß ist im Westen
                Symbol der Reinheit, in Teilen Asiens traditionell Trauerfarbe. Grün ist im
                islamischen Kulturraum heilige Farbe. Schwarz steht im westlichen Kontext für
                Eleganz und Macht — für Trauer. Diese Assoziationen werden sozial erlernt und
                können die universelle Ebene überlagern oder modifizieren.
              </p>
              <p>
                Neuromarketing nutzt beide Ebenen gleichzeitig: universelle Wirkung als
                physiologischen Unterboden, kulturelle Assoziation als Bedeutungsschicht
                darüber. Ein Medikament-Hersteller, der seine Verpackung blau gestaltet,
                aktiviert sowohl das Ruhe-Signal (universell) als auch die Assoziation mit
                Vertrauen und Medizin (kulturell gelernt).
              </p>

              <div class="psy-highlight">
                <strong>Die Farb-Kontext-Regel</strong>
                <p>
                  Farben wirken nie kontextfrei. Dieselbe rote Farbe auf einer Feuerwehrauto
                  (Sicherheit), einer politischen Kampagne (Partei), einem Rabatt-Etikett
                  (Dringlichkeit) oder einem Valentinstag-Herz (Romantik) löst völlig
                  unterschiedliche Assoziationen aus. Kontext schreibt Bedeutung — Farbe
                  verstärkt sie.
                </p>
              </div>

              <div class="psy-theory-badges">
                <span class="psy-theory-badge">Kulturvergleichende Psychologie</span>
                <span class="psy-theory-badge">Klassische Konditionierung</span>
                <span class="psy-theory-badge">Kontexteffekt</span>
              </div>
            </div>

            <aside class="psy-mini-cards">
              <div class="psy-mini-card">
                <div class="psy-mini-card-label">Universell</div>
                <div class="psy-mini-card-title">Warm = aktivierend</div>
                <div class="psy-mini-card-text">
                  Rot, Orange, Gelb erhöhen die Erregung — evolutionär mit Feuer, Sonne,
                  Energie verknüpft. Kulturneutral und physiologisch messbar.
                </div>
              </div>
              <div class="psy-mini-card">
                <div class="psy-mini-card-label">Universell</div>
                <div class="psy-mini-card-title">Kalt = beruhigend</div>
                <div class="psy-mini-card-text">
                  Blau, Grün, Grau reduzieren Arousal — evolutionär mit Wasser, Nacht,
                  Weite verknüpft. Blut­druck und Herzrate sinken messbar.
                </div>
              </div>
              <div class="psy-mini-card">
                <div class="psy-mini-card-label">Kulturell</div>
                <div class="psy-mini-card-title">Weiß: Reinheit ↔ Trauer</div>
                <div class="psy-mini-card-text">
                  Dieselbe Farbe — völlig entgegengesetzte kulturelle Bedeutung, je nach
                  geographischem Kontext. Zeigt: Lernen kann biologische Grundreaktionen
                  überformen.
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
                <span>Psychologische Wirkung</span>
                Die 8 wichtigsten Farben
              </h2>
            </div>
          </div>

          <div class="psy-table-wrap">
            <table class="psy-table" aria-label="Farbwirkungen Übersicht">
              <thead>
                <tr>
                  <th>Farbe</th>
                  <th>Primäre Emotionen</th>
                  <th>Physiologie</th>
                  <th>Wird eingesetzt für</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong style="color: #c0392b;">Rot</strong></td>
                  <td>Dringlichkeit, Leidenschaft, Hunger, Aggression</td>
                  <td>↑ Herzfrequenz, ↑ Kortisol</td>
                  <td>Rabatt-Labels, Fast Food, CTA-Buttons, Alarme</td>
                </tr>
                <tr>
                  <td><strong style="color: #2471a3;">Blau</strong></td>
                  <td>Vertrauen, Ruhe, Seriosität, leichte Melancholie</td>
                  <td>↓ Blutdruck, ↓ Puls</td>
                  <td>Banken, Tech, Soziale Medien, Versicherungen</td>
                </tr>
                <tr>
                  <td><strong style="color: #d4ac0d;">Gelb</strong></td>
                  <td>Energie, Optimismus, Neugier — bei Übermaß: Unruhe</td>
                  <td>↑ Serotonin, höchste Sichtbarkeit</td>
                  <td>Warnzeichen, Kinder-Produkte, Snacks, Rabatt</td>
                </tr>
                <tr>
                  <td><strong style="color: #1e8449;">Grün</strong></td>
                  <td>Ruhe, Gesundheit, Wachstum, Sicherheit</td>
                  <td>Entspannend auf Augen und Nervensystem</td>
                  <td>Bio-Labels, Apotheken, Finanz-Apps, Natur</td>
                </tr>
                <tr>
                  <td><strong style="color: #784212;">Braun / Schwarz</strong></td>
                  <td>Macht, Eleganz, Stärke, Autorität</td>
                  <td>Erhöht wahrgenommene Schwere von Objekten</td>
                  <td>Luxusmarken, High-End Mode, Pro-Tools</td>
                </tr>
                <tr>
                  <td><strong style="color: #7d3c98;">Lila</strong></td>
                  <td>Kreativität, Magie, Exklusivität, Spiritualität</td>
                  <td>Beruhigend + aktivierend — seltene Kombination</td>
                  <td>Schokolade, Gaming, Beauty, Spiritualität</td>
                </tr>
                <tr>
                  <td><strong style="color: #ca6f1e;">Orange</strong></td>
                  <td>Geselligkeit, Optimismus, Spielfreude, Energie</td>
                  <td>Ähnlich Rot, aber weniger aggressiv</td>
                  <td>Freizeitsport, günstige Marken, E-Commerce</td>
                </tr>
                <tr>
                  <td><strong style="color: #c0392b;">Rosa</strong></td>
                  <td>Zärtlichkeit, Romantik, Verspieltheit, Geborgenheit</td>
                  <td>Baker-Miller Pink: kurzfristig aggressionsdämpfend</td>
                  <td>Beauty, Romance, Kinder, Social-Media-Ästhetik</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <!-- SEKTION 4 ─────────────────────────────────── -->
        <section class="psy-section reveal">
          <div class="psy-section-head">
            <span class="psy-section-num" aria-hidden="true">04</span>
            <div>
              <h2 class="psy-section-title">
                <span>Das entscheidende Konzept</span>
                Priming — und wie du täglich manipuliert wirst
              </h2>
            </div>
          </div>

          <div class="psy-section-grid">
            <div class="psy-prose">
              <p>
                Das mächtigste Prinzip hinter der Farbwirkung ist <strong>Priming</strong>:
                Farben bereiten das Gehirn unbewusst auf bestimmte Interpretationen vor, noch
                bevor du anfängst, Inhalte zu verarbeiten. Du liest dieselbe Schlagzeile auf
                einer roten Seite anders als auf einer blauen — ohne es zu wissen, ohne es
                zu wollen.
              </p>
              <p>
                Das wird systematisch ausgenutzt. <strong>Fast Food-Ketten</strong> (McDonald's,
                Burger King) nutzen Rot und Gelb — Rot triggert Hunger und Dringlichkeit, Gelb
                signalisiert Energie und eine positive Umgebung. <strong>Tech-Konzerne</strong>
                (Meta, Twitter, PayPal) setzen auf Blau, das Vertrauen und Seriosität signalisiert —
                du gibst deinen Daten eher an etwas Blaues weiter als an etwas Rotes.
              </p>
              <p>
                <strong>Casinos</strong> nutzen kein natürliches Licht und mischen es mit
                warm-goldenen Tönen — das deaktiviert das Zeitgefühl und senkt die kognitive
                Kontrolle. <strong>Supermarkt-Eigenmarken</strong> nutzen in Studien bewusst
                Farben, die an Markenprodukte erinnern, um Vertrauen durch Assoziation zu erzeugen.
              </p>
              <p>
                Das Wissen darum macht dich nicht immun. Aber es macht dich
                <strong>aufmerksamer</strong> — und das ist bereits ein beträchtlicher Vorteil
                in einer Welt, die darauf ausgelegt ist, dass du es nicht merkst.
              </p>

              <div class="psy-pull-quote">
                <p>„Werbung arbeitet nicht mit Argumenten. Sie arbeitet mit Gefühlen,
                   die du für Fakten hältst."</p>
                <cite>— Verhaltensökonomie, angewandt</cite>
              </div>

              <div class="psy-theory-badges">
                <span class="psy-theory-badge">Priming</span>
                <span class="psy-theory-badge">Neuromarketing</span>
                <span class="psy-theory-badge">Choice Architecture</span>
                <span class="psy-theory-badge">Persuasionsforschung</span>
                <span class="psy-theory-badge">Implizite Beeinflussung</span>
              </div>
            </div>

            <aside class="psy-mini-cards">
              <div class="psy-mini-card">
                <div class="psy-mini-card-label">Anwendung</div>
                <div class="psy-mini-card-title">UX & Interface Design</div>
                <div class="psy-mini-card-text">
                  Rote Buttons erzeugen Urgency. Grüne signalisieren Sicherheit.
                  Dark Mode senkt Arousal — Nutzer bleiben länger, kaufen weniger
                  impulsiv. Alles Absicht.
                </div>
              </div>
              <div class="psy-mini-card">
                <div class="psy-mini-card-label">Anwendung</div>
                <div class="psy-mini-card-title">Architektur & Raum</div>
                <div class="psy-mini-card-text">
                  Warmes Licht (2700 K) macht Restaurantgäste gesprächiger.
                  Kaltes Licht (5000 K) erhöht Konzentration — daher Büros und Kliniken.
                  Casinos: kein Tageslicht, keine Uhren.
                </div>
              </div>
              <div class="psy-mini-card">
                <div class="psy-mini-card-label">Anwendung</div>
                <div class="psy-mini-card-title">Politik & Branding</div>
                <div class="psy-mini-card-text">
                  Parteienfarben verknüpfen visuell Inhalte mit emotionalen Vorurteilen.
                  Logos sind Color-Psychology-Konzentrate — kein Zufall, sondern Strategie.
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

    const backBtn = document.querySelector('.psy-back-btn[data-action="back"]');
    if (backBtn) backBtn.addEventListener('click', this._onBackClick);

    document.querySelectorAll('.psy-related .psy-card[data-route]').forEach(card => {
      card.addEventListener('click', this._onRelatedClick);
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