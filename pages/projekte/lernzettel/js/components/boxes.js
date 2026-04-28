
// Infobox, Formelbox, Vergleichsfeld

/**
 * Infobox / Merksatz-Box.
 * @param {object} opts
 * @param {string} opts.type    - '' | 'warning' | 'success' | 'danger' | 'blue'
 * @param {string} opts.icon    - FontAwesome class
 * @param {string} opts.title   - Titelzeile
 * @param {string} opts.body    - Inhalt (HTML erlaubt)
 */
export function renderInfobox({ type = '', icon = 'fas fa-info-circle', title, body }) {
  const mod = type ? ` lz-infobox--${type}` : '';
  return `
    <div class="lz-infobox${mod}">
      <div class="lz-infobox-title">
        <i class="${icon}"></i>${title}
      </div>
      <div class="lz-infobox-body">${body}</div>
    </div>
  `;
}

/**
 * Formel-Box (zentriert, hervorgehoben).
 * @param {object} opts
 * @param {string} opts.label   - Kleine Beschriftung oben (optional)
 * @param {string} opts.formula - Die Formel (HTML: sub/sup erlaubt)
 * @param {string} opts.desc    - Erklärungstext unter der Formel (optional)
 */
export function renderFormulaBox({ label = '', formula, desc = '' }) {
  return `
    <div class="lz-formula-box">
      ${label ? `<div class="lz-formula-label">${label}</div>` : ''}
      <div class="lz-formula-main">${formula}</div>
      ${desc ? `<div class="lz-formula-desc">${desc}</div>` : ''}
    </div>
  `;
}

/**
 * Zwei-Spalten Vergleichsfeld.
 * @param {object} opts
 * @param {string}   opts.titleA / titleB  - Spaltentitel
 * @param {string[]} opts.listA  / listB   - Listeneinträge
 */
export function renderCompare({ titleA, titleB, listA, listB }) {
  const list = (items) =>
    `<ul class="lz-compare-list">${items.map(i => `<li>${i}</li>`).join('')}</ul>`;
  return `
    <div class="lz-compare">
      <div class="lz-compare-col lz-compare-col--a">
        <div class="lz-compare-head">${titleA}</div>
        ${list(listA)}
      </div>
      <div class="lz-compare-col lz-compare-col--b">
        <div class="lz-compare-head">${titleB}</div>
        ${list(listB)}
      </div>
    </div>
  `;
}