// pages/projekte/blender/BlenderHotkeys.js

import { initScrollReveal } from '../../../../shared/js/index.js';
import { footerHTML }       from '../../../../components/Footer.js';
import { i18n }             from '../../../../shared/js/i18n.js';
import { CONFIG }           from '../../../../core/config.js';
import { initWimTabs }      from '../../../../shared/js/wim-tabs.js';
import { de, en, ru, es }   from './../js/translation/hotkeys/translation.js';

// ── Tab-Definitionen ─────────────────────────────────────────────
const TABS = [
  { id: 'universal', icon: 'fa-solid fa-keyboard'       },
  { id: 'object',    icon: 'fa-solid fa-cube'            },
  { id: 'edit',      icon: 'fa-solid fa-vector-square'   },
  { id: 'sculpt',    icon: 'fa-solid fa-mountain'        },
  { id: 'shader',    icon: 'fa-solid fa-circle-nodes'    },
  { id: 'uv',        icon: 'fa-solid fa-map'             },
  { id: 'render',    icon: 'fa-solid fa-film'            },
];

// ── Hotkey-Daten ─────────────────────────────────────────────────
// accent: 'primary'=transform | 'success'=create/select |
//         'warning'=critical   | 'error'=delete | 'info'=view
const HOTKEYS = {

  universal: [
    { id: 'u01', keys: ['G'],                   accent: 'primary' },
    { id: 'u02', keys: ['R'],                   accent: 'primary' },
    { id: 'u03', keys: ['S'],                   accent: 'primary' },
    { id: 'u04', keys: ['G', 'X'],              accent: 'primary' },
    { id: 'u05', keys: ['G', 'Y'],              accent: 'primary' },
    { id: 'u06', keys: ['G', 'Z'],              accent: 'primary' },
    { id: 'u07', keys: ['Shift', 'A'],          accent: 'success' },
    { id: 'u08', keys: ['X'],                   accent: 'error'   },
    { id: 'u09', keys: ['Ctrl', 'Z'],           accent: 'warning' },
    { id: 'u10', keys: ['Ctrl', 'Shift', 'Z'],  accent: 'warning' },
    { id: 'u11', keys: ['Num 1'],               accent: 'info'    },
    { id: 'u12', keys: ['Num 3'],               accent: 'info'    },
    { id: 'u13', keys: ['Num 7'],               accent: 'info'    },
    { id: 'u14', keys: ['Num 5'],               accent: 'info'    },
    { id: 'u15', keys: ['Num 0'],               accent: 'info'    },
    { id: 'u16', keys: ['~'],                   accent: 'info'    },
    { id: 'u17', keys: ['Tab'],                 accent: 'success' },
    { id: 'u18', keys: ['Ctrl', 'S'],           accent: 'warning' },
    { id: 'u19', keys: ['F3'],                  accent: 'success' },
    { id: 'u20', keys: ['N'],                   accent: 'info'    },
    { id: 'u21', keys: ['T'],                   accent: 'info'    },
    { id: 'u22', keys: ['H'],                   accent: 'primary' },
    { id: 'u23', keys: ['Alt', 'H'],            accent: 'primary' },
    { id: 'u24', keys: ['M'],                   accent: 'primary' },
    { id: 'u25', keys: ['Num .'],               accent: 'info'    },
    { id: 'u26', keys: ['Num /'],               accent: 'info'    },
    { id: 'u27', keys: ['Ctrl', 'Space'],       accent: 'info'    },
    { id: 'u28', keys: ['Ctrl', 'Alt', 'Num 0'],accent: 'warning' },
    { id: 'u29', keys: ['Z'],                   accent: 'info'    },
    { id: 'u30', keys: ['Alt', 'Z'],            accent: 'info'    },
  ],

  object: [
    { id: 'o01', keys: ['Ctrl', 'J'],               accent: 'primary' },
    { id: 'o02', keys: ['Alt', 'P'],                accent: 'warning' },
    { id: 'o03', keys: ['Ctrl', 'P'],               accent: 'primary' },
    { id: 'o04', keys: ['Ctrl', 'A'],               accent: 'success' },
    { id: 'o05', keys: ['Shift', 'D'],              accent: 'success' },
    { id: 'o06', keys: ['Alt', 'D'],                accent: 'success' },
    { id: 'o07', keys: ['F2'],                      accent: 'info'    },
    { id: 'o08', keys: ['Ctrl', 'G'],               accent: 'primary' },
    { id: 'o09', keys: ['Shift', 'Ctrl', 'Alt', 'C'], accent: 'warning' },
    { id: 'o10', keys: ['Ctrl', 'L'],               accent: 'success' },
    { id: 'o11', keys: ['Ctrl', 'Alt', 'G'],        accent: 'primary' },
    { id: 'o12', keys: ['Ctrl', 'Alt', 'R'],        accent: 'primary' },
    { id: 'o13', keys: ['Ctrl', 'Alt', 'S'],        accent: 'primary' },
    { id: 'o14', keys: ['I'],                       accent: 'warning' },
  ],

  edit: [
    { id: 'e01', keys: ['1'],                       accent: 'info'    },
    { id: 'e02', keys: ['2'],                       accent: 'info'    },
    { id: 'e03', keys: ['3'],                       accent: 'info'    },
    { id: 'e04', keys: ['E'],                       accent: 'primary' },
    { id: 'e05', keys: ['I'],                       accent: 'primary' },
    { id: 'e06', keys: ['Ctrl', 'R'],               accent: 'success' },
    { id: 'e07', keys: ['K'],                       accent: 'success' },
    { id: 'e08', keys: ['F'],                       accent: 'success' },
    { id: 'e09', keys: ['Alt', 'LMB'],              accent: 'primary' },
    { id: 'e10', keys: ['Shift', 'N'],              accent: 'warning' },
    { id: 'e11', keys: ['Ctrl', 'B'],               accent: 'primary' },
    { id: 'e12', keys: ['V'],                       accent: 'warning' },
    { id: 'e13', keys: ['P'],                       accent: 'primary' },
    { id: 'e14', keys: ['Ctrl', 'Alt', 'Q'],        accent: 'info'    },
    { id: 'e15', keys: ['Alt', 'S'],                accent: 'primary' },
    { id: 'e16', keys: ['L'],                       accent: 'success' },
    { id: 'e17', keys: ['Shift', 'Alt', 'LMB'],     accent: 'success' },
    { id: 'e18', keys: ['G', 'G'],                  accent: 'primary' },
    { id: 'e19', keys: ['O'],                       accent: 'info'    },
    { id: 'e20', keys: ['Ctrl', 'F'],               accent: 'warning' },
    { id: 'e21', keys: ['Ctrl', 'E'],               accent: 'warning' },
    { id: 'e22', keys: ['Ctrl', 'V'],               accent: 'warning' },
    { id: 'e23', keys: ['Ctrl', 'M'],               accent: 'primary' },
    { id: 'e24', keys: ['Shift', 'R'],              accent: 'success' },
    { id: 'e25', keys: ['Y'],                       accent: 'warning' },
    { id: 'e26', keys: ['Alt', 'F'],                accent: 'success' },
  ],

  sculpt: [
    { id: 's01', keys: ['F'],                       accent: 'primary' },
    { id: 's02', keys: ['Shift', 'F'],              accent: 'primary' },
    { id: 's03', keys: ['Ctrl'],                    accent: 'warning' },
    { id: 's04', keys: ['Shift'],                   accent: 'success' },
    { id: 's05', keys: ['X'],                       accent: 'primary' },
    { id: 's06', keys: ['Ctrl', 'D'],               accent: 'warning' },
    { id: 's07', keys: ['R'],                       accent: 'info'    },
    { id: 's08', keys: ['I'],                       accent: 'info'    },
    { id: 's09', keys: ['B'],                       accent: 'success' },
    { id: 's10', keys: ['Ctrl', 'R'],               accent: 'success' },
    { id: 's11', keys: ['G'],                       accent: 'primary' },
    { id: 's12', keys: ['S'],                       accent: 'success' },
    { id: 's13', keys: ['C'],                       accent: 'primary' },
    { id: 's14', keys: ['Ctrl', 'F'],               accent: 'warning' },
  ],

  shader: [
    { id: 'sh01', keys: ['Ctrl', 'Shift', 'LMB'],  accent: 'success' },
    { id: 'sh02', keys: ['Shift', 'A'],             accent: 'success' },
    { id: 'sh03', keys: ['Ctrl', 'J'],              accent: 'primary' },
    { id: 'sh04', keys: ['M'],                      accent: 'primary' },
    { id: 'sh05', keys: ['Ctrl', 'T'],              accent: 'success' },
    { id: 'sh06', keys: ['H'],                      accent: 'info'    },
    { id: 'sh07', keys: ['Ctrl', 'G'],              accent: 'primary' },
    { id: 'sh08', keys: ['Alt', 'P'],               accent: 'warning' },
    { id: 'sh09', keys: ['Ctrl', 'L'],              accent: 'success' },
    { id: 'sh10', keys: ['Alt', 'M'],               accent: 'warning' },
    { id: 'sh11', keys: ['F'],                      accent: 'info'    },
  ],

  uv: [
    { id: 'uv01', keys: ['U'],                      accent: 'success' },
    { id: 'uv02', keys: ['A'],                      accent: 'info'    },
    { id: 'uv03', keys: ['G'],                      accent: 'primary' },
    { id: 'uv04', keys: ['S'],                      accent: 'primary' },
    { id: 'uv05', keys: ['R'],                      accent: 'primary' },
    { id: 'uv06', keys: ['P'],                      accent: 'primary' },
    { id: 'uv07', keys: ['V'],                      accent: 'warning' },
    { id: 'uv08', keys: ['L'],                      accent: 'success' },
    { id: 'uv09', keys: ['Alt', 'LMB'],             accent: 'success' },
    { id: 'uv10', keys: ['W'],                      accent: 'success' },
    { id: 'uv11', keys: ['Ctrl', 'P'],              accent: 'warning' },
    { id: 'uv12', keys: ['Alt', 'P'],               accent: 'warning' },
    { id: 'uv13', keys: ['Shift', 'W'],             accent: 'success' },
  ],

  render: [
    { id: 'r01', keys: ['F12'],                     accent: 'success' },
    { id: 'r02', keys: ['Ctrl', 'F12'],             accent: 'success' },
    { id: 'r03', keys: ['F11'],                     accent: 'info'    },
    { id: 'r04', keys: ['Shift', 'Ctrl', 'F12'],    accent: 'warning' },
    { id: 'r05', keys: ['Num 0'],                   accent: 'info'    },
    { id: 'r06', keys: ['B'],                       accent: 'primary' },
    { id: 'r07', keys: ['J'],                       accent: 'info'    },
    { id: 'r08', keys: ['Shift', 'Z'],              accent: 'info'    },
    { id: 'r09', keys: ['Ctrl', 'Alt', 'Num 0'],    accent: 'warning' },
    { id: 'r10', keys: ['Shift', 'S'],              accent: 'warning' },
  ],
};

// ── Helpers ──────────────────────────────────────────────────────
function kbdRow(keys) {
  return keys
    .map(k => `<kbd class="hk-key">${k}</kbd>`)
    .join(`<span class="hk-plus">+</span>`);
}

function renderCards(tabId) {
  return (HOTKEYS[tabId] || []).map(hk => `
    <article class="hk-card hk-accent-${hk.accent || 'primary'} reveal">
      <div class="hk-keys-row">${kbdRow(hk.keys)}</div>
      <div class="hk-body">
        <h3 class="hk-action" data-i18n="bk.${tabId}.${hk.id}.action">—</h3>
        <p  class="hk-desc"   data-i18n="bk.${tabId}.${hk.id}.desc">—</p>
      </div>
      <div class="hk-card-accent-line" aria-hidden="true"></div>
    </article>
  `).join('');
}

const TOTAL = Object.values(HOTKEYS).reduce((s, a) => s + a.length, 0);

// ── Page ─────────────────────────────────────────────────────────
export default class BlenderHotkeys {
  constructor(router) { this.router = router; }

  render() {
    i18n.load({ de, en, ru, es });

    const el = document.createElement('div');
    el.className = 'page page-blender-hotkeys';

    if (!document.querySelector('link[href*="blender-hotkeys.css"]')) {
      const link = document.createElement('link');
      link.rel  = 'stylesheet';
      link.href = 'pages/projekte/blender/styles/blender-hotkeys.css';
      document.head.appendChild(link);
    }

    el.innerHTML = this._html();
    return el;
  }

  _html() {
    return `
      <!-- Hero -->
      <section class="hk-hero">
        <div class="hk-hero-inner">
          <a class="hk-back-link" data-link="${CONFIG.ROUTES.BLENDER}">
            <i class="fa-solid fa-arrow-left"></i>
            <span data-i18n="bk.back">Zurück zur Galerie</span>
          </a>
          <div class="hk-hero-badge">
            <i class="fa-solid fa-keyboard"></i>
            <span data-i18n="bk.badge">BLENDER HOTKEYS</span>
          </div>
          <h1 class="hk-hero-title">
            <span data-i18n="bk.headline.1">Schneller arbeiten mit</span><br>
            <em data-i18n="bk.headline.2">den richtigen Tastenkombinationen.</em>
          </h1>
          <p class="hk-hero-sub" data-i18n="bk.hero.sub">
            Alle wichtigen Shortcuts — nach Editor geordnet,
            mit Erklärung warum sie unverzichtbar sind.
          </p>
          <div class="hk-stat-row">
            <div class="hk-stat">
              <span class="hk-stat-num">${TABS.length}</span>
              <span class="hk-stat-label" data-i18n="bk.stat.editors">Editoren</span>
            </div>
            <div class="hk-stat-divider"></div>
            <div class="hk-stat">
              <span class="hk-stat-num">${TOTAL}</span>
              <span class="hk-stat-label" data-i18n="bk.stat.shortcuts">Shortcuts</span>
            </div>
            <div class="hk-stat-divider"></div>
            <div class="hk-stat">
              <span class="hk-stat-num">4</span>
              <span class="hk-stat-label" data-i18n="bk.stat.langs">Sprachen</span>
            </div>
          </div>
        </div>
      </section>

      <!-- Legend -->
      <section class="hk-legend-section">
        <div class="hk-legend-inner">
          <h2 class="hk-legend-title" data-i18n="bk.legend.title">Farbkodierung</h2>
          <div class="hk-legend-grid">
            <div class="hk-legend-item hk-accent-primary">
              <span class="hk-legend-dot"></span>
              <span data-i18n="bk.legend.primary">Transform / Navigation</span>
            </div>
            <div class="hk-legend-item hk-accent-success">
              <span class="hk-legend-dot"></span>
              <span data-i18n="bk.legend.success">Erstellen / Auswahl</span>
            </div>
            <div class="hk-legend-item hk-accent-warning">
              <span class="hk-legend-dot"></span>
              <span data-i18n="bk.legend.warning">Kritisch / Speichern</span>
            </div>
            <div class="hk-legend-item hk-accent-error">
              <span class="hk-legend-dot"></span>
              <span data-i18n="bk.legend.error">Löschen</span>
            </div>
            <div class="hk-legend-item hk-accent-info">
              <span class="hk-legend-dot"></span>
              <span data-i18n="bk.legend.info">Ansicht / Info</span>
            </div>
          </div>
        </div>
      </section>

      <!-- Main -->
      <section class="hk-main">
        <div class="hk-main-inner">
          <nav class="wim-tabs hk-tabs reveal" id="hkTabs">
            ${TABS.map((t, i) => `
              <button class="wim-tab ${i === 0 ? 'active' : ''}" data-wim="${t.id}">
                <i class="${t.icon}"></i>
                <span data-i18n="bk.tab.${t.id}">—</span>
              </button>
            `).join('')}
          </nav>

          <div class="hk-tab-desc reveal" id="hkTabDesc">
            <p data-i18n="bk.tab.universal.desc">—</p>
          </div>

          <div class="hk-grid" id="hkGrid">
            ${renderCards('universal')}
          </div>
        </div>
      </section>

      <!-- Tip -->
      <section class="hk-tip-section">
        <div class="hk-tip-inner">
          <i class="fa-solid fa-lightbulb hk-tip-icon"></i>
          <div>
            <strong data-i18n="bk.tip.title">Pro-Tipp</strong>
            <p data-i18n="bk.tip.text">
              In Blender kannst du fast jede Taste im Keymap-Editor unter
              Edit → Preferences → Keymap anpassen — build your own workflow.
            </p>
          </div>
        </div>
      </section>

      ${footerHTML(this.router, {
        extraColumn: {
          title: '3D & Shortcuts',
          titleI18n: 'bk.footer.title',
          items: [
            { label: 'Zurück zur Blender-Galerie', link: CONFIG.ROUTES.BLENDER,   i18n: 'bk.footer.back'      },
            { label: 'Portfolio',                  link: CONFIG.ROUTES.PORTFOLIO, i18n: 'bk.footer.portfolio' },
          ]
        }
      })}
    `;
  }

  init() {
    i18n.init();
    initScrollReveal();
    initWimTabs(document, { onTabChange: (key) => this._onTab(key) });
  }

  _onTab(tabId) {
    const grid = document.getElementById('hkGrid');
    const desc = document.getElementById('hkTabDesc');
    if (!grid) return;

    grid.innerHTML = renderCards(tabId);
    grid.querySelectorAll('.hk-card').forEach((c, i) => {
      c.style.animationDelay = `${i * 0.04}s`;
    });

    desc?.querySelector('p')?.setAttribute('data-i18n', `bk.tab.${tabId}.desc`);

    i18n._patchDOM(grid);
    if (desc) i18n._patchDOM(desc);

    initScrollReveal();
  }

  cleanup() {}
}