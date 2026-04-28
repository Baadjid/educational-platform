// Tabellen-Komponente

/**
 * Rendert eine Lerntabelle.
 * @param {object} opts
 * @param {string[]} opts.headers      - Spaltenüberschriften
 * @param {Array}    opts.rows         - [ ['Zelle', ...], ... ]
 * @param {number[]} opts.highlight    - Zeilenindizes (0-basiert) die hervorgehoben werden
 */
export function renderTable({ headers, rows, highlight = [] }) {
  const headHTML = headers.map(h => `<th>${h}</th>`).join('');

  const rowsHTML = rows.map((row, i) => {
    const hlClass = highlight.includes(i) ? ' class="lz-table-hl"' : '';
    const cells = row.map(cell => `<td>${cell}</td>`).join('');
    return `<tr${hlClass}>${cells}</tr>`;
  }).join('');

  return `
    <div class="lz-table-wrap">
      <table class="lz-table">
        <thead><tr>${headHTML}</tr></thead>
        <tbody>${rowsHTML}</tbody>
      </table>
    </div>
  `;
}

/**
 * Hilfsfunktion: Erzeugt einen Formel-Code-Span innerhalb von Tabellenzellen.
 * Kann direkt in row-Strings eingebettet werden.
 */
export function code(text) {
  return `<span class="lz-cell-code">${text}</span>`;
}