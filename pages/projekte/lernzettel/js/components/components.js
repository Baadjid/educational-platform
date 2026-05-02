// pages/projekte/lernzettel/js/components/components.js
// ══════════════════════════════════════════════════════════════
// Universelle Lernzettel-Komponenten — fachübergreifend
// Optimiert: CSS wird nur einmal geladen (Set-Struktur)
// ══════════════════════════════════════════════════════════════

// ─── CSS einmalig laden ──────────────────────────────────────
const _loadedCSS = new Set();

export function loadComponentCSS(href) {
  if (_loadedCSS.has(href)) return;
  _loadedCSS.add(href);
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = href;
  document.head.appendChild(link);
}

export function ensureComponentsCSS() {
  const files = [
    'pages/projekte/lernzettel/styles/components/mindmap.css',
    'pages/projekte/lernzettel/styles/components/tables.css',
    'pages/projekte/lernzettel/styles/components/boxes.css',
    'pages/projekte/lernzettel/styles/components/interactive.css',
    'pages/projekte/lernzettel/styles/sub.css',
    'pages/projekte/lernzettel/styles/components/code-examples.css'
  ];
  files.forEach(loadComponentCSS);
}


// ════════════════════════════════════════════════════════════
// MIND-MAP
// ════════════════════════════════════════════════════════════

export function renderKapBlock({ num, title, icon, color, colorRgb, nodes = [] }) {
  const nodesHTML = nodes.map(node => `
    <a class="lz-kap-node"
       ${node.link ? `data-link="${node.link}"` : ''}
       style="--kap-color:${color}; --kap-color-rgb:${colorRgb};"
       role="button" tabindex="0">
      <div class="lz-node-hex">
        <i class="${node.icon || 'fas fa-chevron-right'}"></i>
      </div>
      <div class="lz-node-body">
        <div class="lz-node-num">${node.num || ''}</div>
        <div class="lz-node-title">${node.title}</div>
      </div>
      <i class="fas fa-arrow-right lz-node-arrow"></i>
    </a>
  `).join('');

  return `
    <div class="lz-kap-block" style="--kap-color:${color}; --kap-color-rgb:${colorRgb};">
      <div class="lz-kap-center">
        <div class="lz-kap-circle">
          <i class="${icon}"></i>
          <span class="lz-kap-circle-num">Kap.&nbsp;${num}</span>
        </div>
        <span class="lz-kap-label">${title}</span>
      </div>
      <div class="lz-kap-nodes">${nodesHTML}</div>
    </div>`;
}

export function renderMindMapGrid(chapters) {
  return `<div class="lz-kap-grid">${chapters.map(ch => renderKapBlock(ch)).join('')}</div>`;
}

export function initMindMap(container = document) {
  container.querySelectorAll('.lz-kap-node[data-link]').forEach(node => {
    node.addEventListener('click', (e) => {
      const link = node.dataset.link;
      if (!link) return;
      e.preventDefault();
      window.location.hash = link;
    });
  });
}


// ════════════════════════════════════════════════════════════
// TABELLE
// ════════════════════════════════════════════════════════════

export function renderTable({ headers, rows, highlight = [] }) {
  const head = headers.map(h => `<th>${h}</th>`).join('');
  const body = rows.map((row, i) => {
    const hl = highlight.includes(i) ? ' class="lz-table-hl"' : '';
    return `<tr${hl}>${row.map(c => `<td>${c}</td>`).join('')}</td>`;
  }).join('');
  return `
    <div class="lz-table-wrap">
      <table class="lz-table">
        <thead><tr>${head}</tr></thead>
        <tbody>${body}</tbody>
      </table>
    </div>`;
}

export function code(text) {
  return `<span class="lz-cell-code">${text}</span>`;
}


// ════════════════════════════════════════════════════════════
// INFOBOX
// ════════════════════════════════════════════════════════════

export function renderInfobox({ type = '', icon = 'fas fa-info-circle', title, body }) {
  const mod = type ? ` lz-infobox--${type}` : '';
  return `
    <div class="lz-infobox${mod}">
      <div class="lz-infobox-title"><i class="${icon}"></i>${title}</div>
      <div class="lz-infobox-body">${body}</div>
    </div>`;
}


// ════════════════════════════════════════════════════════════
// FORMEL-BOX
// ════════════════════════════════════════════════════════════

export function renderFormulaBox({ label = '', formula, desc = '' }) {
  return `
    <div class="lz-formula-box">
      ${label ? `<div class="lz-formula-label">${label}</div>` : ''}
      <div class="lz-formula-main">${formula}</div>
      ${desc ? `<div class="lz-formula-desc">${desc}</div>` : ''}
    </div>`;
}


// ════════════════════════════════════════════════════════════
// VERGLEICHSFELD (2 Spalten)
// ════════════════════════════════════════════════════════════

export function renderCompare({ titleA, titleB, listA, listB }) {
  const list = items =>
    `<ul class="lz-compare-list">${items.map(i => `<li>${i}</li>`).join('')}</ul>`;
  return `
    <div class="lz-compare">
      <div class="lz-compare-col lz-compare-col--a">
        <div class="lz-compare-head">${titleA}</div>${list(listA)}
      </div>
      <div class="lz-compare-col lz-compare-col--b">
        <div class="lz-compare-head">${titleB}</div>${list(listB)}
      </div>
    </div>`;
}


// ════════════════════════════════════════════════════════════
// TABS
// ════════════════════════════════════════════════════════════

let _tabCounter = 0;

export function renderTabs({ id = '', tabs = [] }) {
  const uid = id || `lz-tabs-${++_tabCounter}`;
  const nav = tabs.map((tab, i) =>
    `<button class="lz-tab-btn${i === 0 ? ' active' : ''}" data-tab="${uid}-${i}">${tab.label}</button>`
  ).join('');
  const panels = tabs.map((tab, i) =>
    `<div class="lz-tab-panel${i === 0 ? ' active' : ''}" id="${uid}-${i}">${tab.content}</div>`
  ).join('');
  return `
    <div class="lz-tabs-container" data-tabs-id="${uid}">
      <nav class="lz-tabs-nav">${nav}</nav>
      ${panels}
    </div>`;
}

export function initTabs(container = document) {
  container.querySelectorAll('[data-tabs-id]').forEach(root => {
    root.querySelectorAll('.lz-tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        root.querySelectorAll('.lz-tab-btn').forEach(b => b.classList.remove('active'));
        root.querySelectorAll('.lz-tab-panel').forEach(p => p.classList.remove('active'));
        btn.classList.add('active');
        root.querySelector(`#${btn.dataset.tab}`)?.classList.add('active');
      });
    });
  });
}


// ════════════════════════════════════════════════════════════
// ACCORDION
// ════════════════════════════════════════════════════════════

export function renderAccordion(items) {
  return `
    <div class="lz-accordion">
      ${items.map(item => `
        <div class="lz-accordion-item">
          <button class="lz-accordion-trigger">
            <span>${item.title}</span>
            <span class="lz-accordion-chevron"><i class="fas fa-chevron-down"></i></span>
          </button>
          <div class="lz-accordion-body">
            <div class="lz-accordion-content">${item.content}</div>
          </div>
        </div>`).join('')}
    </div>`;
}

export function initAccordion(container = document) {
  container.querySelectorAll('.lz-accordion-item').forEach(item => {
    item.querySelector('.lz-accordion-trigger')?.addEventListener('click', () => {
      item.classList.toggle('open');
    });
  });
}


// ════════════════════════════════════════════════════════════
// MERKBOX-GRID
// ════════════════════════════════════════════════════════════

export function renderMerkboxGrid(items) {
  return `
    <div class="lz-merkbox-grid">
      ${items.map(item => `
        <div class="lz-merkbox">
          <div class="lz-merkbox-icon"><i class="${item.icon}"></i></div>
          <div class="lz-merkbox-title">${item.title}</div>
          <div class="lz-merkbox-text">${item.text}</div>
        </div>`).join('')}
    </div>`;
}


// ════════════════════════════════════════════════════════════
// VERTIKALE TIMELINE
// ════════════════════════════════════════════════════════════

export function renderVTimeline(items) {
  return `
    <div class="lz-vtimeline">
      ${items.map(item => `
        <div class="lz-vtimeline-item">
          <div class="lz-vtimeline-year">${item.year}</div>
          <div class="lz-vtimeline-title">${item.title}</div>
          <div class="lz-vtimeline-text">${item.text}</div>
        </div>`).join('')}
    </div>`;
}


// ════════════════════════════════════════════════════════════
// TAGS
// ════════════════════════════════════════════════════════════

export function renderTags(tags) {
  return `
    <div class="lz-tags">
      ${tags.map(t => `<span class="lz-tag">${t}</span>`).join('')}
    </div>`;
}


// ════════════════════════════════════════════════════════════
// SUBHEAD
// ════════════════════════════════════════════════════════════

export function renderSubhead(label) {
  return `
    <div class="lz-subhead">
      <div class="lz-subhead-line"></div>
      <span class="lz-subhead-text">${label}</span>
      <div class="lz-subhead-line lz-subhead-line--rev"></div>
    </div>`;
}


// ════════════════════════════════════════════════════════════
// INIT ALLE INTERAKTIVEN ELEMENTE
// ════════════════════════════════════════════════════════════

export function initInteractive(container = document) {
  initTabs(container);
  initAccordion(container);
}