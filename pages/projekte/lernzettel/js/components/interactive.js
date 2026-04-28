// Tabs, Accordion, Merkbox-Grid, Vertikale Timeline, Subhead

// ─────────────────────────────────────────────────────────────────
// TABS
// ─────────────────────────────────────────────────────────────────

let _tabCounter = 0;

/**
 * @param {object} opts
 * @param {string} opts.id    - Einzigartiger ID-Präfix (wird auto-generiert wenn leer)
 * @param {Array}  opts.tabs  - [ { label, content: 'HTML' } ]
 */
export function renderTabs({ id = '', tabs = [] }) {
  const uid = id || `lz-tabs-${++_tabCounter}`;

  const nav = tabs.map((tab, i) => `
    <button class="lz-tab-btn ${i === 0 ? 'active' : ''}"
            data-tab="${uid}-${i}">
      ${tab.label}
    </button>
  `).join('');

  const panels = tabs.map((tab, i) => `
    <div class="lz-tab-panel ${i === 0 ? 'active' : ''}" id="${uid}-${i}">
      ${tab.content}
    </div>
  `).join('');

  return `
    <div class="lz-tabs-container" data-tabs-id="${uid}">
      <nav class="lz-tabs-nav">${nav}</nav>
      ${panels}
    </div>
  `;
}

export function initTabs(container = document) {
  container.querySelectorAll('[data-tabs-id]').forEach(el => {
    el.querySelectorAll('.lz-tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const tabId = btn.dataset.tab;
        const root  = btn.closest('[data-tabs-id]');
        root.querySelectorAll('.lz-tab-btn').forEach(b => b.classList.remove('active'));
        root.querySelectorAll('.lz-tab-panel').forEach(p => p.classList.remove('active'));
        btn.classList.add('active');
        root.querySelector(`#${tabId}`)?.classList.add('active');
      });
    });
  });
}

// ─────────────────────────────────────────────────────────────────
// ACCORDION
// ─────────────────────────────────────────────────────────────────

/**
 * @param {Array} items - [ { title, content: 'HTML' } ]
 */
export function renderAccordion(items) {
  return `
    <div class="lz-accordion">
      ${items.map((item, i) => `
        <div class="lz-accordion-item" data-acc="${i}">
          <button class="lz-accordion-trigger">
            <span>${item.title}</span>
            <span class="lz-accordion-chevron">
              <i class="fas fa-chevron-down"></i>
            </span>
          </button>
          <div class="lz-accordion-body">
            <div class="lz-accordion-content">${item.content}</div>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

export function initAccordion(container = document) {
  container.querySelectorAll('.lz-accordion-item').forEach(item => {
    item.querySelector('.lz-accordion-trigger')?.addEventListener('click', () => {
      item.classList.toggle('open');
    });
  });
}

// ─────────────────────────────────────────────────────────────────
// MERKBOX-GRID
// ─────────────────────────────────────────────────────────────────

/**
 * @param {Array} items - [ { icon, title, text } ]
 */
export function renderMerkboxGrid(items) {
  return `
    <div class="lz-merkbox-grid">
      ${items.map(item => `
        <div class="lz-merkbox">
          <div class="lz-merkbox-icon"><i class="${item.icon}"></i></div>
          <div class="lz-merkbox-title">${item.title}</div>
          <div class="lz-merkbox-text">${item.text}</div>
        </div>
      `).join('')}
    </div>
  `;
}

// ─────────────────────────────────────────────────────────────────
// VERTIKALE TIMELINE
// ─────────────────────────────────────────────────────────────────

/**
 * @param {Array} items - [ { year, title, text } ]
 */
export function renderVTimeline(items) {
  return `
    <div class="lz-vtimeline">
      ${items.map(item => `
        <div class="lz-vtimeline-item">
          <div class="lz-vtimeline-year">${item.year}</div>
          <div class="lz-vtimeline-title">${item.title}</div>
          <div class="lz-vtimeline-text">${item.text}</div>
        </div>
      `).join('')}
    </div>
  `;
}

// ─────────────────────────────────────────────────────────────────
// TAGS
// ─────────────────────────────────────────────────────────────────

/**
 * @param {string[]} tags
 */
export function renderTags(tags) {
  return `
    <div class="lz-tags">
      ${tags.map(t => `<span class="lz-tag">${t}</span>`).join('')}
    </div>
  `;
}

// ─────────────────────────────────────────────────────────────────
// SUBHEAD / TRENNLINIE
// ─────────────────────────────────────────────────────────────────

export function renderSubhead(label) {
  return `
    <div class="lz-subhead">
      <div class="lz-subhead-line"></div>
      <span class="lz-subhead-text">${label}</span>
      <div class="lz-subhead-line lz-subhead-line--rev"></div>
    </div>
  `;
}

// ─────────────────────────────────────────────────────────────────
// INIT ALLE
// ─────────────────────────────────────────────────────────────────

export function initInteractive(container = document) {
  initTabs(container);
  initAccordion(container);
}