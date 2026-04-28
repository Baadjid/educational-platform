// shared/js/sidebar.js

let isInitialized = false;

export function initSidebar() {
  if (isInitialized) return;
  isInitialized = true;

  const sidebar  = document.getElementById('sidebar');
  const menuBtn  = document.getElementById('menuBtn');
  const overlay  = document.getElementById('sidebarOverlay');
  const closeBtn = document.getElementById('sidebarClose');
  const panel    = document.querySelector('.sidebar-panel');

  if (!sidebar || !menuBtn) return;

  // ── Floating Close Button direkt ans <body> hängen ────────────
  // position:fixed funktioniert nicht in Elementen mit transform
  let floatClose = document.getElementById('sidebarCloseFloat');
  if (!floatClose) {
    floatClose = document.createElement('button');
    floatClose.id        = 'sidebarCloseFloat';
    floatClose.className = 'sidebar-close-float';
    floatClose.setAttribute('aria-label', 'Schließen');
    floatClose.innerHTML = '<i class="fas fa-times"></i>';
    document.body.appendChild(floatClose);
  }

  const showFloat = () => floatClose.classList.add('visible');
  const hideFloat = () => floatClose.classList.remove('visible');

  const open = () => {
    sidebar.classList.add('active');
    menuBtn.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Scroll-State prüfen (Sidebar war vielleicht schon gescrollt)
    if (panel && panel.scrollTop > 10) showFloat();
  };

  const close = () => {
    sidebar.classList.remove('active');
    menuBtn.classList.remove('active');
    document.body.style.overflow = '';
    hideFloat();
    // Scroll zurücksetzen
    if (panel) panel.scrollTop = 0;
  };

  menuBtn.addEventListener('click', open);
  if (overlay)  overlay.addEventListener('click', close);
  if (closeBtn) closeBtn.addEventListener('click', close);
  floatClose.addEventListener('click', close);

  // Scroll-Listener — Threshold niedrig (10px) damit Button früh erscheint
  if (panel) {
    panel.addEventListener('scroll', () => {
      if (panel.scrollTop > 10) {
        showFloat();
      } else {
        hideFloat();
      }
    }, { passive: true });
  }

  // Escape-Taste
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') close();
  });

  // Links schließen nach Klick
  sidebar.addEventListener('click', (e) => {
    const link = e.target.closest('.sidebar-link');
    if (link) setTimeout(close, 150);
  });
}

export function openSidebar() {
  const sidebar = document.getElementById('sidebar');
  const menuBtn = document.getElementById('menuBtn');
  if (sidebar && menuBtn) {
    sidebar.classList.add('active');
    menuBtn.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

export function closeSidebar() {
  const sidebar    = document.getElementById('sidebar');
  const menuBtn    = document.getElementById('menuBtn');
  const panel      = document.querySelector('.sidebar-panel');
  const floatClose = document.getElementById('sidebarCloseFloat');
  if (sidebar && menuBtn) {
    sidebar.classList.remove('active');
    menuBtn.classList.remove('active');
    document.body.style.overflow = '';
    if (panel) panel.scrollTop = 0;
    if (floatClose) floatClose.classList.remove('visible');
  }
}