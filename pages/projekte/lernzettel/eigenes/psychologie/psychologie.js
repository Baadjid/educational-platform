// pages/projekte/lernzettel/eigenes/psychologie/psychologie.js
// Psychologie-Kompendium — Hub/Übersichtsseite
// Editorial-Blog-Layout mit Kategorien und Artikel-Cards

import { initScrollReveal } from '../../../../../shared/js/index.js';
import { footerHTML } from '../../../../../components/Footer.js';

// ══════════════════════════════════════════════════════════════════
// ARTIKEL-DATENBANK
// Jeder Artikel hat: slug, cat (für CSS-Akzentfarbe), hook, subhook,
// teaser, readTime, level, featured (optional, erster in Kategorie groß)
// ══════════════════════════════════════════════════════════════════

const CATEGORIES = [
  {
    id:    'schulen',
    label: 'Klassische Schulen',
    title: 'Die Theorien, die alles begannen',
    desc:  'Freud, Skinner, Piaget — die Schulen, die das Fundament legten.',
    articles: [
      {
        slug:     'tiefenpsychologie',
        hook:     'Du bist nicht Herr in deinem eigenen Haus.',
        subhook:  'Freud, Jung & das Unbewusste',
        teaser:   'Freud nannte es die dritte große Kränkung der Menschheit: Der Mensch regiert sein eigenes Bewusstsein nicht. Was dahinter steckt — und warum es dich jeden Tag beeinflusst.',
        readTime: '12 min',
        level:    'Grundlagen',
        featured: true,
      },
      {
        slug:     'behaviorismus',
        hook:     'Bist du frei — oder nur gut konditioniert?',
        subhook:  'Pavlov, Skinner & die Reiz-Reaktions-Psychologie',
        teaser:   'Der Behaviorismus sagt: Was du Charakter nennst, ist meistens trainiertes Verhalten. Das klingt ernüchternd — und öffnet gleichzeitig enorme Möglichkeiten.',
        readTime: '10 min',
        level:    'Grundlagen',
      },
      {
        slug:     'kognitivismus',
        hook:     'Nicht die Dinge verletzen uns. Was wir darüber denken.',
        subhook:  'Kognition, Verzerrungen & das ABC-Modell',
        teaser:   'Dein Gehirn filtert, interpretiert und erfindet — und du nimmst das Ergebnis für die Realität. Die Kognitionspsychologie zeigt, wo das schiefgeht.',
        readTime: '11 min',
        level:    'Grundlagen',
      },
      {
        slug:     'humanistische-psychologie',
        hook:     'Was musst du sein — bevor du weißt, wer du bist?',
        subhook:  'Maslow, Rogers & die Dritte Kraft',
        teaser:   'Maslow, Rogers und die humanistische Psychologie setzten dem Behaviorismus etwas entgegen: Der Mensch strebt nicht nur nach Überleben — er strebt nach Bedeutung.',
        readTime: '9 min',
        level:    'Grundlagen',
      },
    ],
  },
  {
    id:    'sozial',
    label: 'Soziale Psychologie',
    title: 'Andere Menschen formen dich mehr als du denkst',
    desc:  'Konformität, Manipulation, Gruppen — und warum wir alle anfälliger sind als wir glauben.',
    articles: [
      {
        slug:     'soziale-beeinflussung',
        hook:     'Wie viel von dir bist wirklich du?',
        subhook:  'Spiegelneuronen, soziale Bewährtheit & Persuasion',
        teaser:   'Soziale Einflüsse operieren unterhalb der Wahrnehmungsschwelle. Du denkst, du entscheidest — dabei hat die Gruppe schon für dich entschieden.',
        readTime: '10 min',
        level:    'Fortgeschritten',
        featured: true,
      },
      {
        slug:     'konformitaet',
        hook:     '65 % folgten dem Befehl. Wärst du dabei gewesen?',
        subhook:  'Milgram, Asch & die Macht der Situation',
        teaser:   'Asch, Milgram, Zimbardo — drei Experimente, die zeigen, dass Situation mächtiger ist als Charakter. Das ist keine Entschuldigung, sondern eine Warnung.',
        readTime: '13 min',
        level:    'Fortgeschritten',
      },
      {
        slug:     'online-dating',
        hook:     'Kann ein Algorithmus entscheiden, wen du liebst?',
        subhook:  'Matching-Logik, parasoziale Bindungen & das Paradox der Wahl',
        teaser:   'Swipe right, swipe left — Online-Dating hat das Kennenlernen gamifiziert. Was das mit unserer Bindungsfähigkeit macht, ist weniger romantisch als erhofft.',
        readTime: '8 min',
        level:    'Angewandt',
      },
    ],
  },
  {
    id:    'beeinflussung',
    label: 'Unbewusste Beeinflussung',
    title: 'Was du nicht siehst, formt dich am stärksten',
    desc:  'Farben, Priming, Entscheidungsarchitektur — Werkzeuge der stillen Steuerung.',
    articles: [
      {
        slug:     'farbpsychologie',
        hook:     'Die Welt manipuliert dich — und du merkst es nicht.',
        subhook:  'Farbpsychologie, Neuromarketing & Priming',
        teaser:   'Rot erhöht deinen Herzschlag. Blau senkt deinen Blutdruck. Fast Food-Ketten, Streaming-Plattformen und Casinos wissen das — und nutzen es täglich gegen dich.',
        readTime: '9 min',
        level:    'Angewandt',
        featured: true,
      },
      {
        slug:     'prokrastination',
        hook:     'Du weißt, dass du solltest. Warum tust du es trotzdem nicht?',
        subhook:  'Zeitdiskontierung, Habit Loops & emotionale Regulation',
        teaser:   'Prokrastination ist kein Zeitproblem — es ist ein Emotionsproblem. Das Gehirn priorisiert sofortigen Komfort, und das zukünftige Ich zahlt dafür.',
        readTime: '11 min',
        level:    'Angewandt',
      },
      {
        slug:     'entscheidungen',
        hook:     'Glaubst du wirklich, du entscheidest frei?',
        subhook:  'Prospect Theory, Ankereffekte & Choice Architecture',
        teaser:   'Kahneman zeigte: Wir sind keine rationalen Entscheider. Wir sind Wesen, die unter Zeitdruck mit unvollständigen Informationen Heuristiken nutzen — und es Vernunft nennen.',
        readTime: '10 min',
        level:    'Fortgeschritten',
      },
    ],
  },
  {
    id:    'klinisch',
    label: 'Klinische Psychologie',
    title: 'Wenn die Psyche aus dem Gleichgewicht gerät',
    desc:  'Burn-out, Depression, Trauma — Verstehen als erster Schritt zu Wandel.',
    articles: [
      {
        slug:     'burnout-resilienz',
        hook:     'Wann hört Erschöpfung auf, normal zu sein?',
        subhook:  'Burn-out, chronischer Stress & die Biologie der Resilienz',
        teaser:   'Burn-out ist kein Zeichen von Schwäche — es ist das Ergebnis eines Systems, das zu lange zu viel von sich verlangt hat. Und Resilienz ist trainierbar.',
        readTime: '12 min',
        level:    'Angewandt',
        featured: true,
      },
      {
        slug:     'depressionen-angst',
        hook:     'Was steckt hinter dem Lächeln?',
        subhook:  'Depression, Angststörungen & das biopsychosoziale Modell',
        teaser:   'Depression ist nicht "schlechte Laune" und Angst ist nicht "Zickenalarm". Beides sind ernsthafte, neurobiologisch fundierte Zustände — und beide sind behandelbar.',
        readTime: '14 min',
        level:    'Fortgeschritten',
      },
      {
        slug:     'trauma',
        hook:     'Manche Wunden heilen nicht — sie verändern sich.',
        subhook:  'Trauma, PTBS & Traumaverarbeitung',
        teaser:   'Traumatische Erfahrungen hinterlassen neurobiologische Spuren. Das Gehirn reagiert, als sei die Gefahr noch jetzt — auch wenn sie längst vorbei ist.',
        readTime: '13 min',
        level:    'Fortgeschritten',
      },
    ],
  },
  {
    id:    'gehirn',
    label: 'Gehirn & Entwicklung',
    title: 'Die Biologie hinter allem, was wir sind',
    desc:  'Neuroplastizität, Schlaf, Entwicklung — das Gehirn als formbares Organ.',
    articles: [
      {
        slug:     'neurowissenschaft',
        hook:     'Dein Gehirn erfindet die Realität. Täglich.',
        subhook:  'Neuroplastizität, Neurotransmitter & kognitive Kontrolle',
        teaser:   'Von 11 Millionen Bits sensorischer Information werden gerade mal 40 bewusst verarbeitet. Den Rest erfindet dein Gehirn — und nennt es Wahrnehmung.',
        readTime: '13 min',
        level:    'Grundlagen',
        featured: true,
      },
      {
        slug:     'schlaf-leistung',
        hook:     'Schlaf ist keine Pause. Er ist das System.',
        subhook:  'Schlafphasen, kognitive Leistung & die Kosten des Schlafmangels',
        teaser:   'Schlaf ist der Zeitraum, in dem das Gehirn Erinnerungen konsolidiert, Toxine auswäscht und emotionale Erfahrungen verarbeitet. Ihn zu kürzen ist teure Sparsamkeit.',
        readTime: '10 min',
        level:    'Angewandt',
      },
      {
        slug:     'entwicklungspsychologie',
        hook:     'Wer wärst du, wenn alles anders gewesen wäre?',
        subhook:  'Piaget, Erikson, Bindungstheorie & Neuroplastizität',
        teaser:   'Frühe Bindungserfahrungen verdrahten das Gehirn. Doch Neuroplastizität bedeutet: Frühe Muster sind nicht Schicksal — sie sind der Startpunkt.',
        readTime: '12 min',
        level:    'Grundlagen',
      },
    ],
  },
  {
    id:    'arbeit',
    label: 'Arbeit & Gesellschaft',
    title: 'Psychologie im Alltag — Arbeit, Macht und Motivation',
    desc:  'Führungspsychologie, Gamification, Homeoffice — Mechanismen moderner Arbeitswelten.',
    articles: [
      {
        slug:     'fuehrungspsychologie',
        hook:     'Macht verändert Menschen. Immer.',
        subhook:  'Führungsstile, Power-Korrumpierung & psychologische Sicherheit',
        teaser:   'Zimbardos Gefängnisexperiment zeigte es: Macht korrumpiert. Was gute Führung von schlechter unterscheidet, hat weniger mit Talent zu tun als mit Selbsterkenntnis.',
        readTime: '10 min',
        level:    'Angewandt',
        featured: true,
      },
      {
        slug:     'gamification',
        hook:     'Warum du nicht aufhören kannst — und wer das weiß.',
        subhook:  'Variable Verstärkung, Flow-Theorie & Gamification im Arbeitsalltag',
        teaser:   'Smartphones, Social Media, Streaming — alle nutzen dasselbe psychologische Prinzip wie Spielautomaten: variable Belohnung. Du bist das Produkt, nicht der Spieler.',
        readTime: '9 min',
        level:    'Angewandt',
      },
    ],
  },
];

// ══════════════════════════════════════════════════════════════════
// PAGE CLASS
// ══════════════════════════════════════════════════════════════════

export default class PsychologiePage {
  constructor(router) {
    this.router = router;
    this._onCardClick = this._onCardClick.bind(this);
  }

  // ── Render ─────────────────────────────────────────────────────

  render() {
    const el = document.createElement('div');
    el.className = 'page page-psychologie';

    // CSS lazy-load (einmal pro Session)
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
    const totalArticles  = CATEGORIES.reduce((n, c) => n + c.articles.length, 0);
    const totalReadTime  = CATEGORIES.reduce(
      (n, c) => n + c.articles.reduce((m, a) => m + parseInt(a.readTime), 0), 0
    );

    return `
      <!-- HERO ─────────────────────────────────────────────── -->
      <section class="psy-hub-hero reveal">
        <div class="psy-hub-hero-inner">
          <p class="psy-eyebrow">
            <i class="fas fa-brain" aria-hidden="true"></i>
            Lernzettel · Eigenes · Psychologie
          </p>
          <h1 class="psy-hub-title">
            Der Mensch,<br><em>durchleuchtet.</em>
          </h1>
          <p class="psy-hub-desc">
            ${totalArticles} Themen. Keine einfachen Antworten.
            Jedes davon könnte dein Weltbild ein kleines Stück verschieben —
            und das ist der Punkt.
          </p>
        </div>
      </section>

      <!-- KATEGORIEN ─────────────────────────────────────── -->
      ${CATEGORIES.map(cat => this._renderCategory(cat)).join('')}

      <!-- FOOTER ─────────────────────────────────────────── -->
      ${footerHTML(this.router, {
        extraColumn: {
          title: 'Weiterführendes',
          items: [
            { label: 'Stanford Encyclopedia of Philosophy', href: 'https://plato.stanford.edu/entries/psychology/' },
            { label: 'Simply Psychology', href: 'https://www.simplypsychology.org/' },
            { label: 'Zurück zur Lernzettel-Übersicht', link: '/projekte/lernzettel' },
          ],
        },
      })}
    `;
  }

  // ── Category ───────────────────────────────────────────────────

  _renderCategory(cat) {
    return `
      <section class="psy-category reveal" style="--cat-color: var(--psy-${cat.id})">
        <div class="psy-category-inner">
          <header class="psy-category-head">
            <span class="psy-category-label">${cat.label}</span>
            <div class="psy-category-line" aria-hidden="true"></div>
          </header>
          <h2 class="psy-category-title" style="color: var(--text-primary); font-family: var(--psy-serif); font-size: 1.4rem; margin-bottom: 0.4rem; font-weight: 700;">
            ${cat.title}
          </h2>
          <p style="font-size: 0.875rem; color: var(--text-muted); margin-bottom: 2rem; line-height: 1.6;">
            ${cat.desc}
          </p>
          <div class="psy-cards-grid">
            ${cat.articles.map((a, i) => this._renderCard(a, cat.id, i === 0 && a.featured)).join('')}
          </div>
        </div>
      </section>
    `;
  }

  // ── Article Card ───────────────────────────────────────────────

  _renderCard(article, catId, featured = false) {
    const route = `/projekte/lernzettel/eigenes/psychologie/themen/${article.slug}`;

    if (featured) {
      return `
        <article class="psy-card psy-card--featured" data-cat="${catId}" data-route="${route}" role="button" tabindex="0" aria-label="${article.hook}">
          <div class="psy-card-num" aria-hidden="true">01</div>
          <div class="psy-card-body">
            <div class="psy-card-top">
              <span class="psy-card-tag">${article.subhook}</span>
              <span class="psy-card-read"><i class="fas fa-clock" aria-hidden="true"></i> ${article.readTime}</span>
            </div>
            <h3 class="psy-card-hook">${article.hook}</h3>
            <p class="psy-card-teaser">${article.teaser}</p>
            <div class="psy-card-footer">
              <span class="psy-card-level">${article.level}</span>
              <span class="psy-card-arrow" aria-hidden="true">→</span>
            </div>
          </div>
        </article>
      `;
    }

    return `
      <article class="psy-card" data-cat="${catId}" data-route="${route}" role="button" tabindex="0" aria-label="${article.hook}">
        <div class="psy-card-top">
          <span class="psy-card-tag">${article.subhook}</span>
          <span class="psy-card-read"><i class="fas fa-clock" aria-hidden="true"></i> ${article.readTime}</span>
        </div>
        <h3 class="psy-card-hook">${article.hook}</h3>
        <p class="psy-card-teaser">${article.teaser}</p>
        <div class="psy-card-footer">
          <span class="psy-card-level">${article.level}</span>
          <span class="psy-card-arrow" aria-hidden="true">→</span>
        </div>
      </article>
    `;
  }

  // ── Init ───────────────────────────────────────────────────────

  init() {
    initScrollReveal();
    document.querySelectorAll('.psy-card[data-route]').forEach(card => {
      card.addEventListener('click',   this._onCardClick);
      card.addEventListener('keydown', this._onCardKeydown);
    });
  }

  cleanup() {
    document.querySelectorAll('.psy-card[data-route]').forEach(card => {
      card.removeEventListener('click',   this._onCardClick);
      card.removeEventListener('keydown', this._onCardKeydown);
    });
  }

  // ── Event Handlers ─────────────────────────────────────────────

  _onCardClick(e) {
    const card = e.currentTarget;
    const route = card.dataset.route;
    if (route) this.router.push(route);
  }

  _onCardKeydown(e) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      e.currentTarget.click();
    }
  }
}