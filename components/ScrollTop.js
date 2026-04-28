// components/ScrollTop.js
// Scroll-to-Top Button als Komponente

export function scrollTopHTML() {
  return `
    <button id="scrollTopBtn" class="scroll-top" aria-label="Nach oben">
      <i class="fas fa-chevron-up"></i>
    </button>
  `;
}

// Wird automatisch von shared/js/scroll.js initialisiert