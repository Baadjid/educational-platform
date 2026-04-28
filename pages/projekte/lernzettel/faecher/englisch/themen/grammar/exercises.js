// pages/projekte/lernzettel/faecher/englisch/themen/grammar-exercises.js
// Englisch — Grammar Exercises (englisch-hilfen.de)

import { initScrollReveal }    from '../../../../../../../shared/js/index.js';
import { footerHTML }           from '../../../../../../../components/Footer.js';
import { i18n }                 from '../../../../../../../shared/js/i18n.js';
import { initWimTabs }          from '../../../../../../../shared/js/wim-tabs.js';
import {
  ensureComponentsCSS,
  loadComponentCSS,
  renderInfobox,
  renderSubhead,
  renderTags,
  renderMerkboxGrid,
  renderTabs,
  initInteractive,
} from '../../../../js/components/components.js';
import { renderPageNav } from '../../../../js/components/subnav.js';

// ─── Fach-Design ─────────────────────────────────────────────
export const COLOR     = '#5b9bd5';
export const COLOR_RGB = '91, 155, 213';
export const BASE      = '/projekte/lernzettel/faecher/englisch';

// ─── CSS-Loader ──────────────────────────────────────────────
function ensureTrackerCSS() {
  loadComponentCSS('pages/projekte/lernzettel/styles/components/exercise-tracker.css');
}

// ═══════════════════════════════════════════════════════════════
//  EXERCISE DATA  (unverändert)
// ═══════════════════════════════════════════════════════════════
const SECTIONS = [
  {
    id: 'tenses',
    title: 'English Tenses',
    icon: 'fas fa-clock',
    tabLabel: '🕐 Tenses',
    groups: [
      { title: 'Simple Present',            badge: 'Week 1', ids: [4010,4012,4018,1312,1314,4044,4046,4014,4016,4026,4656,4030,4660,4034,4022,4036,4024,4042,4038,4040] },
      { title: 'Present Progressive',       badge: 'Week 2', ids: [4050,4166,4052,4058,4056,4060,4664,4666,4062,4064,4668,1310,1370,4070,4072,4074] },
      { title: 'Simple Past (Irregular)',              ids: [4110,4130,4112,4672,3616,4118,1372,1374,4114,4116,4126,4128,4122,4124] },
      { title: 'Past Progressive',                     ids: [4310,4312,4314,1362,1364,4318,4320] },
      { title: 'Present Perfect',           badge: 'Week 5', ids: [4164,4150,4152,4154,4156,1366,1368,4160,4162,4158] },
      { title: 'Present Perfect Progressive',          ids: [4322,4324,4326,4328] },
      { title: 'Past Perfect',              badge: 'Week 1', ids: [4250,4252,1398,4254] },
      { title: 'Will-Future',               badge: 'Week 1', ids: [4340,4342,1376,1378,4214,4216,4446] },
      { title: 'Going-to Future',                      ids: [4222,4224,1358,1360,4226,4228,4446] },
      { title: 'Mixed Tenses',              badge: 'Week 5', ids: [4410,4412,4414,4462,3458,4452,4466,4456,4450,4464,4454,4408,4650,4652,4610,2440,4616,4618,4620,4622,4624,4626,4628,4632,4634,4636,4638,4640,4642,4644,4670,1352,3646,1400,2342,4668,1622] },
    ],
  },
  {
    id: 'tense-comparison',
    title: 'Tense Comparison',
    icon: 'fas fa-arrows-left-right',
    tabLabel: '🔄 Comparison',
    groups: [
      { title: 'Gegenüberstellung von Zeitformen', ids: [4370,4442,4438,4440,4410,4426,4428,4418,4436,4422,4424,4430,4432] },
    ],
  },
  {
    id: 'tense-shifts',
    title: 'Tense Shifts',
    icon: 'fas fa-rotate',
    tabLabel: '↪️ Shifts',
    groups: [
      { title: 'Verschiebung von Zeitformen', badge: 'Week 6', ids: [4548,4546,4518,4522,4524,4538,4544,4542,4510,4514,4516,4526,4534,4536,4530] },
    ],
  },
  {
    id: 'other-grammar',
    title: 'Other Grammar Topics',
    icon: 'fas fa-puzzle-piece',
    tabLabel: '📚 Other',
    groups: [
      { title: 'Mengenangaben',                    badge: 'much / many / some …', ids: [2436,2410,2412,2438,2416,2418,2420,2422,2426] },
      { title: 'Prepositions',                     badge: 'Week 7',               ids: [3016,3022,3028,3030,3032,3040,3026] },
      { title: 'Satzbau — Word Order',                                            ids: [3328,3326,3334,3336,3346,3348,3340,3342,3344,3324,3320,3322,3310,3312,3318,3330,3332] },
      { title: 'Hilfsverben — Auxiliary Verbs',                                   ids: [1710,1712,1714,1792,1794,1796,1762,1804,1758,1760,1744] },
      { title: 'Adjektive und Adverbien',          badge: 'Week 1',               ids: [1070,1074,1044,1010,1052,1012,1022,1030,1076,1040,1042,1056,1058,1024,1064,1068,1016,1060,1032,1038,1048] },
      { title: 'Gerund und Infinitiv',             badge: 'Week 4',               ids: [1612,1624,1618,1628,1614,1616,1622,1610] },
      { title: 'Conditional (if-Sätze)',                                          ids: [2010,2012,2014,2016,2018,2022,2024,2026,2028,2030,2032,2034,2044,2046,2048,2050,2052,2054,2020,2066,2036,2038,2040,2058,2060,2062,2064,2068] },
      { title: 'Indirekte Rede — Reported Speech',                                ids: [2310,2312,2322,234,2326,2328,2318,2316,2314,2320] },
      { title: 'Passiv — Passive Voice',                                          ids: [2710,2712,2714,2724,1408,1410,2720,2730,2728,2726,2716,2718,2722,2736,2738,2740,2742,2732,2734] },
      { title: 'Pronomen — Pronouns',                                             ids: [3124,3134,3110,3112,3168,3162,3116,3118,3164,3120,3122,3126,3128,3130,3132,3166,3152,3154,3156,3158,3146,3150,3136,3138,3160,3140,3142,3144] },
      { title: 'Substantive, Plural, s-Genitive',                                 ids: [3454,3466,3436,3438,3450,3452,3440,347,3474,3476,3426,3428,3432,3434,3456,3468,3410,3412,3442,3414,3444,3458,3472,3416,3460,3462,3422,3418,3420,3446,3448,3464,3470] },
      { title: 'Unregelmäßige Verben — Irregular Verbs',                          ids: [3622,3624,3626,3638,3640,3646,3648,3650,3652,3654,3658,3666,3672,3674,3676,3678,3684,3686,3690,3694,3698,3700,3702,3704,3708,3712,3714,3718,3720,3726] },
    ],
  },
];

// ─── Alle eindeutigen IDs ─────────────────────────────────────
function getAllUniqueIds() {
  const seen = new Set();
  SECTIONS.forEach(s => s.groups.forEach(g => g.ids.forEach(id => seen.add(String(id)))));
  return seen;
}

function _countSection(sec) {
  const seen = new Set();
  sec.groups.forEach(g => g.ids.forEach(id => seen.add(String(id))));
  return seen.size;
}

// ═══════════════════════════════════════════════════════════════
//  RENDER-HELFER
// ═══════════════════════════════════════════════════════════════

function _grid(ids) {
  const unique = [...new Set(ids.map(String))];
  return `<div class="et-grid">
    ${unique.map(id => `
      <a
        href="https://www.englisch-hilfen.de/${id}"
        target="_blank"
        rel="noopener noreferrer"
        class="et-chip"
        data-etid="${id}"
      >${id}</a>
    `).join('')}
  </div>`;
}

function _renderSectionContent(sec) {
  return sec.groups.map(g => `
    <div class="et-group">
      ${renderSubhead(g.title + (g.badge ? ' · <span style="font-weight:500;opacity:.8;">' + g.badge + '</span>' : ''))}
      <p class="et-group-count" style="font-size:.72rem;color:var(--text-muted);margin:-.5rem 0 .6rem;letter-spacing:.04em;">
        <i class="fas fa-list-check" style="margin-right:.3rem;opacity:.6;"></i>
        ${[...new Set(g.ids.map(String))].length} exercises
      </p>
      ${_grid(g.ids)}
    </div>
  `).join('');
}

// ─── WIM-Tab-Daten ───────────────────────────────────────────────
const GRAMMAR_TABS = SECTIONS.map((sec, idx) => ({
  key: sec.id,
  label: sec.tabLabel,
}));

// ═══════════════════════════════════════════════════════════════
//  PAGE CLASS
// ═══════════════════════════════════════════════════════════════
export default class EnglischGrammarExercisesPage {
  constructor(router) {
    this.router = router;
    this._key   = 'kh-eng-grammar-done';
  }

  render() {
    ensureComponentsCSS();
    ensureTrackerCSS();

    const el = document.createElement('div');
    el.className = 'page page-englisch-sub';
    el.style.setProperty('--kap-color',     COLOR);
    el.style.setProperty('--kap-color-rgb', COLOR_RGB);
    el.style.setProperty('--lz-accent',     COLOR);
    el.style.setProperty('--lz-accent-rgb', COLOR_RGB);

    el.innerHTML = this._html();
    return el;
  }

  _html() {
    const total        = getAllUniqueIds().size;
    const countTenses  = _countSection(SECTIONS[0]);
    const countOther   = _countSection(SECTIONS[3]);

    return `
      <!-- ══════════════ HERO ══════════════ -->
      <section class="lz-sub-hero" style="--kap-color:${COLOR};--kap-color-rgb:${COLOR_RGB};">
        <div class="lz-sub-hero-inner">
          <div class="lz-sub-hero-orb" aria-hidden="true"></div>

          <nav class="lz-sub-breadcrumb">
            <button class="lz-bread-link" data-nav-link="/projekte/lernzettel">Lernzettel</button>
            <i class="fas fa-chevron-right"></i>
            <button class="lz-bread-link" data-nav-link="${BASE}">Englisch</button>
            <i class="fas fa-chevron-right"></i>
            <span>Grammar Exercises</span>
          </nav>

          <h1 class="lz-sub-title">Grammar<br><em>Exercises.</em></h1>
          <p class="lz-sub-desc">
            englisch-hilfen.de · 369 Aufgaben · Tenses · Conditionals · Passive · Pronouns · Abitur 2026
          </p>
          ${renderTags(['englisch-hilfen.de', 'Grammar', 'Abitur 2026', 'Self-Study'])}
        </div>
      </section>

      <!-- ══════════════ STATS + PROGRESS ══════════════ -->
      <section class="lz-content-section" style="padding-bottom:0;">
        <div class="lz-section-wrap">

        

          <!-- ── Progress Tracker ─────────────────────────────── -->
          <div class="et-progress reveal">
            <div class="et-progress-label">
              <i class="fas fa-chart-line"></i> Your Progress
            </div>
            <div class="et-bar-track">
              <div class="et-bar-fill" id="et-fill"></div>
            </div>
            <div class="et-stats">
              <div class="et-stat">
                <div class="et-stat-num et-stat-num--done" id="et-done">0</div>
                <div class="et-stat-label">Completed</div>
              </div>
              <div class="et-stat">
                <div class="et-stat-num et-stat-num--remain" id="et-left">0</div>
                <div class="et-stat-label">Remaining</div>
              </div>
              <div class="et-stat">
                <div class="et-stat-num" id="et-total">0</div>
                <div class="et-stat-label">Total</div>
              </div>
            </div>
            <button class="et-reset-btn" id="et-reset">
              <i class="fas fa-rotate-left"></i> Reset Progress
            </button>
          </div>

          <!-- ── Instructions ────────────────────────────────── -->
          ${renderInfobox({
            type: 'warning',
            icon: 'fas fa-circle-info',
            title: 'How to Use',
            body: `
              <ol style="margin:.4rem 0 .6rem 1.2rem; line-height:1.85;">
                <li>Gehe auf <strong>www.englisch-hilfen.de</strong></li>
                <li>Klicke oben links auf <strong>„SUCHE"</strong> und gib die Übungsnummer ein</li>
                <li>Löse die Aufgabe und verstehe <em>warum</em> die Antwort korrekt ist</li>
              </ol>
              <div style="display:flex;gap:1.5rem;flex-wrap:wrap;margin-top:.5rem;font-size:.8rem;color:var(--text-secondary);">
                <span><strong style="color:var(--lz-accent);">Left click</strong> — Link öffnen + als erledigt markieren</span>
                <span><strong style="color:var(--lz-accent);">Right click</strong> — nur Toggle (ohne Navigation)</span>
              </div>
            `,
          })}

        </div>
      </section>

      <!-- ══════════════ WIM-TABS ══════════════ -->
      <section class="lz-content-section">
        <div class="lz-section-wrap">

          <nav class="wim-tabs" id="grammar-tabs" aria-label="Grammar exercises categories">
            ${GRAMMAR_TABS.map((t, i) => `
              <button class="wim-tab${i === 0 ? ' active' : ''}" data-wim="${t.key}">
                ${t.label}
              </button>
            `).join('')}
          </nav>

          ${this._renderPanels()}

        </div>
      </section>

      <!-- ══════════════ PAGE NAV ══════════════ -->
      <section class="lz-content-section" style="padding-top:0; padding-bottom:3rem;">
        <div class="lz-section-wrap">
          ${renderPageNav({
            prev: { link: `${BASE}/themen/grammar/reference`, label: 'Grammar References' },
            next: { link: `${BASE}/themen/usa/foundations`, label: 'Foundations of the American Experience' },
          }, BASE)}
        </div>
      </section>

        </div>
      </section>

      ${footerHTML(this.router)}
    `;
  }

  // ── Panels für jeden Tab ─────────────────────────────────────
  _renderPanels() {
    return SECTIONS.map((sec, idx) => {
      const isFirst = idx === 0;
      const panelClass = isFirst ? 'wim-category' : 'wim-category hidden';
      return `
        <div class="${panelClass}" data-wim-cat="${sec.id}">
          <div class="et-tab-intro" style="margin:.25rem 0 1.25rem;">
            <span class="et-section-badge" style="
              display:inline-flex;align-items:center;gap:.45rem;
              background:rgba(var(--lz-accent-rgb,91,155,213),.1);
              border:1px solid rgba(var(--lz-accent-rgb,91,155,213),.25);
              color:var(--lz-accent,${COLOR});
              font-size:.72rem;font-weight:700;letter-spacing:.07em;text-transform:uppercase;
              padding:.25rem .8rem;border-radius:100px;">
              <i class="${sec.icon}"></i> ${sec.title} · ${_countSection(sec)} exercises
            </span>
          </div>
          ${_renderSectionContent(sec)}
        </div>
      `;
    }).join('');
  }

  // ── Progress-Helfer ──────────────────────────────────────────

  _load() {
    try { return new Set(JSON.parse(localStorage.getItem(this._key) || '[]')); }
    catch { return new Set(); }
  }

  _save(set) {
    localStorage.setItem(this._key, JSON.stringify([...set]));
  }

  _updateUI(done, total) {
    const pct = total ? Math.round((done.size / total) * 100) : 0;
    document.getElementById('et-fill').style.width  = pct + '%';
    document.getElementById('et-done').textContent  = done.size;
    document.getElementById('et-left').textContent  = total - done.size;
    document.getElementById('et-total').textContent = total;
  }

  _applyDone(chips, done) {
    chips.forEach(c => c.classList.toggle('done', done.has(c.dataset.etid)));
  }

  // ── Init ─────────────────────────────────────────────────────

  init() {
    i18n.init();
    initScrollReveal();

    // Tabs aktivieren (wim-tabs)
    initInteractive(document);
    initWimTabs(document);

    // Internes Routing (Breadcrumb-Links)
    document.querySelectorAll('[data-nav-link]').forEach(btn =>
      btn.addEventListener('click', () => { window.location.hash = btn.dataset.navLink; })
    );
    document.querySelectorAll('[data-link]').forEach(btn =>
      btn.addEventListener('click', () => { window.location.hash = btn.dataset.link; })
    );

    // ── Progress ─────────────────────────────────────────────

    const allIds = getAllUniqueIds();
    const total  = allIds.size;
    const chips  = [...document.querySelectorAll('.et-chip')];
    let done     = this._load();

    this._applyDone(chips, done);
    this._updateUI(done, total);

    // Left click — Link öffnen + als erledigt markieren
    chips.forEach(chip => {
      chip.addEventListener('click', () => {
        done.add(chip.dataset.etid);
        this._save(done);
        this._applyDone(chips, done);
        this._updateUI(done, total);
      });

      // Right click — nur Toggle
      chip.addEventListener('contextmenu', e => {
        e.preventDefault();
        const id = chip.dataset.etid;
        done.has(id) ? done.delete(id) : done.add(id);
        this._save(done);
        this._applyDone(chips, done);
        this._updateUI(done, total);
      });
    });

    // Reset
    document.getElementById('et-reset')?.addEventListener('click', () => {
      if (!confirm('Reset all progress?')) return;
      done = new Set();
      this._save(done);
      this._applyDone(chips, done);
      this._updateUI(done, total);
    });
  }
}