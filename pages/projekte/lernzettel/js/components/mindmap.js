// Kapitel-MindMap: Kreis links oben + Nodes rechts daneben

/**
 * Rendert eine Kapitel-Sektion mit Kreis + Nodes.
 *
 * @param {object} opts
 * @param {string}   opts.num         - Kapitelnummer z.B. '1' oder 'A'
 * @param {string}   opts.title       - Kapitelname (kurz, für den Kreis)
 * @param {string}   opts.icon        - FontAwesome class z.B. 'fas fa-flask'
 * @param {string}   opts.color       - CSS-Farbe z.B. '#4caf50'
 * @param {string}   opts.colorRgb    - RGB-Tripel z.B. '76, 175, 80'
 * @param {Array}    opts.nodes       - [ { num, title, icon, link } ]
 */
export function renderKapBlock({ num, title, icon, color, colorRgb, nodes = [] }) {
  const nodesHTML = nodes.map(node => `
    <a class="lz-kap-node"
       href="#${node.link || ''}"
       ${node.link ? `data-link="${node.link}"` : ''}
       style="--kap-color:${color}; --kap-color-rgb:${colorRgb};"
       role="button">
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
    <div class="lz-kap-block"
         style="--kap-color:${color}; --kap-color-rgb:${colorRgb};">
      <!-- Zentraler Kreis -->
      <div class="lz-kap-center">
        <div class="lz-kap-circle">
          <i class="${icon}"></i>
          <span class="lz-kap-circle-num">Kap. ${num}</span>
        </div>
        <span class="lz-kap-label">${title}</span>
      </div>

      <!-- Nodes -->
      <div class="lz-kap-nodes">
        ${nodesHTML}
      </div>
    </div>
  `;
}

/**
 * Rendert alle Kapitel-Blöcke zusammen in einem Grid.
 * @param {Array} chapters - Array von renderKapBlock-Optionen
 */
export function renderMindMapGrid(chapters) {
  return `
    <div class="lz-kap-grid">
      ${chapters.map(ch => renderKapBlock(ch)).join('')}
    </div>
  `;
}

/**
 * Initialisiert data-link Navigation innerhalb der MindMap.
 * Wird aufgerufen nachdem das HTML im DOM ist.
 */
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