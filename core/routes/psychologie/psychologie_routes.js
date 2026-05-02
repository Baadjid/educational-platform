// core/routes/psychologie/psychologie_routes.js

const BASE = '/projekte/lernzettel/eigenes/psychologie';
const THEMEN = `${BASE}/themen`;

// ── Seitentitel-Keys ───────────────────────────────────────────
export const PSYCHOLOGIE_TITLE_KEYS = {
  // Klassische Schulen
  [`${THEMEN}/tiefenpsychologie`]:       'page.title.lz.psy.tiefenpsychologie',
  [`${THEMEN}/behaviorismus`]:           'page.title.lz.psy.behaviorismus',
  [`${THEMEN}/kognitivismus`]:           'page.title.lz.psy.kognitivismus',
  [`${THEMEN}/humanistische-psychologie`]: 'page.title.lz.psy.humanistisch',

  // Soziale Psychologie
  [`${THEMEN}/soziale-beeinflussung`]:   'page.title.lz.psy.sozial',
  [`${THEMEN}/konformitaet`]:            'page.title.lz.psy.konformitaet',
  [`${THEMEN}/online-dating`]:           'page.title.lz.psy.onlinedating',

  // Unbewusste Beeinflussung
  [`${THEMEN}/farbpsychologie`]:         'page.title.lz.psy.farbe',
  [`${THEMEN}/prokrastination`]:         'page.title.lz.psy.prokr',
  [`${THEMEN}/entscheidungen`]:          'page.title.lz.psy.entscheidungen',

  // Klinische Psychologie
  [`${THEMEN}/burnout-resilienz`]:       'page.title.lz.psy.burnout',
  [`${THEMEN}/depressionen-angst`]:      'page.title.lz.psy.depression',
  [`${THEMEN}/trauma`]:                  'page.title.lz.psy.trauma',

  // Gehirn & Entwicklung
  [`${THEMEN}/neurowissenschaft`]:       'page.title.lz.psy.neuro',
  [`${THEMEN}/schlaf-leistung`]:         'page.title.lz.psy.schlaf',
  [`${THEMEN}/entwicklungspsychologie`]: 'page.title.lz.psy.entwicklung',

  // Arbeit & Gesellschaft
  [`${THEMEN}/fuehrungspsychologie`]:    'page.title.lz.psy.fuehrung',
  [`${THEMEN}/gamification`]:            'page.title.lz.psy.gamification',
};

// ── Route → dynamischer Import ─────────────────────────────────
const T = '../../../pages/projekte/lernzettel/eigenes/psychologie/themen';

export const PSYCHOLOGIE_ROUTES = {
  // Klassische Schulen
  [`${THEMEN}/tiefenpsychologie`]:
    () => import(`${T}/tiefenpsychologie.js`),
  [`${THEMEN}/behaviorismus`]:
    () => import(`${T}/behaviorismus.js`),
  [`${THEMEN}/kognitivismus`]:
    () => import(`${T}/kognitivismus.js`),
  [`${THEMEN}/humanistische-psychologie`]:
    () => import(`${T}/humanistische-psychologie.js`),

  // Soziale Psychologie
  [`${THEMEN}/soziale-beeinflussung`]:
    () => import(`${T}/soziale-beeinflussung.js`),
  [`${THEMEN}/konformitaet`]:
    () => import(`${T}/konformitaet.js`),
  [`${THEMEN}/online-dating`]:
    () => import(`${T}/online-dating.js`),

  // Unbewusste Beeinflussung
  [`${THEMEN}/farbpsychologie`]:
    () => import(`${T}/farbpsychologie.js`),
  [`${THEMEN}/prokrastination`]:
    () => import(`${T}/prokrastination.js`),
  [`${THEMEN}/entscheidungen`]:
    () => import(`${T}/entscheidungen.js`),

  // Klinische Psychologie
  [`${THEMEN}/burnout-resilienz`]:
    () => import(`${T}/burnout-resilienz.js`),
  [`${THEMEN}/depressionen-angst`]:
    () => import(`${T}/depressionen-angst.js`),
  [`${THEMEN}/trauma`]:
    () => import(`${T}/trauma.js`),

  // Gehirn & Entwicklung
  [`${THEMEN}/neurowissenschaft`]:
    () => import(`${T}/neurowissenschaft.js`),
  [`${THEMEN}/schlaf-leistung`]:
    () => import(`${T}/schlaf-leistung.js`),
  [`${THEMEN}/entwicklungspsychologie`]:
    () => import(`${T}/entwicklungspsychologie.js`),

  // Arbeit & Gesellschaft
  [`${THEMEN}/fuehrungspsychologie`]:
    () => import(`${T}/fuehrungspsychologie.js`),
  [`${THEMEN}/gamification`]:
    () => import(`${T}/gamification.js`),
};